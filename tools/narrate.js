// Turns cases into listen-along audio with a local VoiceStudio (github.com/debpalash/VoiceStudio).
// Each case becomes one MP3 in audio/: examiner 1 sets the scene and reads any results, examiner 2 asks each
// question, then a pause to answer in your head before a third voice gives the model answer. The chapter
// times go in js/data/audio.js (window.CASE_AUDIO), which the Listen tab reads.
//
// Usage: node tools/narrate.js <case file> [...]   e.g. node tools/narrate.js glaucoma
//   --dry-run        print the scripts only (no VoiceStudio needed)
//   --cases a,b      only these case ids
//   --url URL        VoiceStudio backend (default http://127.0.0.1:3900; the desktop app's backend)
// Voices are set in tools/narrate-voices.json. Clips are cached in tools/.narrate-cache (git-ignored) by voice
// and text, so a rerun only re-speaks what changed. Needs ffmpeg on the PATH.
// Every new clip is transcribed back with VoiceStudio's speech-to-text; a clip that doesn't match its text
// (the engine sometimes babbles on dense jargon) is re-spoken with another seed, up to RETRIES times.
//   --no-check       skip that check
//   --recheck        also check clips already in the cache, and re-speak the bad ones
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const root = path.join(__dirname, '..');
const RATE = 24000;      // mono 16-bit PCM, the rate every clip is resampled to before joining
const THINK = 4;         // seconds to answer in your head before the model answer
const GAP = 0.6;         // between lines
const TURN = 1.5;        // when the speaker changes
const MAX_CHARS = 500;   // longest piece sent in one request (split at sentence ends)
const MATCH = 0.6;       // share of words the transcript must get back for a clip to pass
const RETRIES = 4;       // fresh seeds to try when a clip fails

const args = process.argv.slice(2);
const flag = (n) => { const i = args.indexOf(n); return i < 0 ? null : args.splice(i, 2)[1]; };
const bool = (n) => args.includes(n) && !!args.splice(args.indexOf(n), 1);
const dry = bool('--dry-run');
const check = !bool('--no-check');
const recheck = bool('--recheck');
const only = (flag('--cases') || '').split(',').filter(Boolean);
const url = (flag('--url') || process.env.VOICESTUDIO_URL || 'http://127.0.0.1:3900').replace(/\/$/, '');
if (!args.length) { console.log('Usage: node tools/narrate.js <case file> [...] [--dry-run] [--cases a,b] [--url URL]'); process.exit(1); }

global.window = { CASES: [] };
eval(fs.readFileSync(path.join(root, 'js/data/categories.js'), 'utf8'));
const cases = [];
for (const f of args) {
  const before = window.CASES.length;
  eval(fs.readFileSync(path.join(root, 'js/data', `${f.replace(/\.js$/, '')}.js`), 'utf8'));
  cases.push(...window.CASES.slice(before).filter((c) => !only.length || only.includes(c.id)));
}
if (!cases.length) { console.log('No cases matched.'); process.exit(1); }

// ------------------------------------------------------------------ script
// What a reader would say rather than what's on screen: tags out, list items as sentences, symbols and
// prescribing shorthand spelled out. VoiceStudio itself says numbers and common abbreviations.
const SAY = [
  // Words written in capitals for emphasis (acronyms like POAG and PACS stay as they are).
  [/\b(THIS|FELLOW|LEFT|RIGHT|BOTH|MORE|ACUTE|CHRONIC|BILATERAL|VERTICAL|TOPICAL|ORBITAL|FIELD|BEDTIME|BASELINE|SODIUM|PHOSPHATE|ACETATE|SPHINCTER|DILATOR|SCLERITIS|PHACOMORPHIC|CORRESPONDS|NOT|ALWAYS|NEVER)\b/g, (w) => w.toLowerCase()],
  [/\s*&\s*/g, ' and '], [/\b(10|24|30)-2\b/g, '$1 dash 2'], [/−\s*(?=\d)/g, 'minus '], [/\bOU\b/g, 'in both eyes'], [/\band\/or\b/g, 'and or'], [/(\d)\s*\/\s*(\d)/g, '$1 over $2'], [/(\d)\s*mg\b/g, '$1 milligrams'],
  [/([A-Za-z])–([A-Za-z])/g, '$1 $2'], [/β(?=-)/g, 'beta'], [/\bDdx:/g, 'Differential:'], [/\be\.g\./g, 'for example'], [/\bi\.e\./g, 'that is'], [/\betc\./g, 'and so on'],
  [/\bvs\.?(?=\s)/g, 'versus'], [/\bPRN\b/g, 'as needed'], [/\bBD\b/g, 'twice a day'], [/\bTDS\b/g, 'three times a day'],
  [/\bQID\b/g, 'four times a day'], [/\bnocte\b/g, 'at night'], [/\bmmHg\b/g, 'millimetres of mercury'],
  [/µm\b/g, ' microns'], [/(\d)\s*%/g, '$1 percent'], [/(\d)\s*[–-]\s*(\d)/g, '$1 to $2'], [/(\d)\s*°/g, '$1 degrees'],
  [/\s*→\s*/g, ', leading to '], [/↑\s*/g, 'raised '], [/↓\s*/g, 'reduced '], [/≥\s*/g, 'at least '], [/≤\s*/g, 'at most '],
  [/>\s*(?=\d)/g, 'over '], [/<\s*(?=\d)/g, 'under '], [/~\s*/g, 'about '], [/×/g, ' times '], [/±/g, ' plus or minus '],
  [/β/g, 'beta '], [/α/g, 'alpha '], [/\s*[—–]\s*/g, ', '], [/\s*\+\s*/g, ' and '], [/\s*\/\s*/g, ' or '],
  [/[“”"]/g, ''], [/\s*\(\s*/g, ', '], [/\s*\)\s*/g, ', '], [/,\s*([,.;:?!])/g, '$1'], [/\s{2,}/g, ' '],
];
const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', nbsp: ' ', rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”', ndash: '–', mdash: '—', middot: ', ' };
function speak(html) {
  let s = String(html || '')
    .replace(/<\/?(li|p|br|h\d)\b[^>]*>/gi, '. ').replace(/<[^>]+>/g, '')
    .replace(/&(\w+);/g, (m, e) => (e in ENT ? ENT[e] : m)).replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n));
  for (const [re, to] of SAY) s = s.replace(re, to);
  s = s.replace(/^[\s.,;:]+/, '').replace(/(\s*[.;:]\s*){2,}/g, '. ').replace(/,\s*$/, '').trim();
  return s && !/[.?!]$/.test(s) ? `${s}.` : s;
}
const sentence = (s) => (s ? (/[.?!]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`) : '');
// The model answer as separate lines: a list of key points run together into one request is the
// text the engine is most likely to babble on.
function modelAnswer(st) {
  if (st.type === 'viva') return st.points.map(speak);
  if (st.type === 'mcq') return [speak(st.options[st.answer])];
  if (st.type === 'multi') return st.answers.map((i) => speak(st.options[i]));
  if (st.type === 'match') return st.pairs.map((p) => speak(`${p.label}: ${p.answer}`));
  return [];
}
// A case as chapters of lines: [{ label, lines: [{ voice, text } | { pause }] }].
function scriptOf(c) {
  const open = [
    { voice: 'examiner1', text: sentence(speak(c.title)) },
    { voice: 'examiner1', text: [speak(c.patient), speak(c.stem)].filter(Boolean).join(' ') },
  ];
  if (c.exhibit) open.push({ voice: 'examiner1', text: `Here is the exhibit. ${speak(c.exhibit)}` });
  const out = [{ label: 'The case', lines: open }];
  c.steps.forEach((st) => {
    const label = st.phase || st.type;
    if (st.type === 'reveal') {
      out.push({ label, lines: [{ voice: 'examiner1', text: speak(st.text) }] });
      return;
    }
    const lines = [{ voice: 'examiner2', text: speak(st.question) }, { pause: THINK }];
    modelAnswer(st).forEach((t, i) => lines.push({ voice: 'narrator', text: i ? t : `Model answer. ${t}` }));
    if (st.explain) lines.push({ voice: 'narrator', text: speak(st.explain) });
    out.push({ label, lines });
  });
  return out;
}
// Splits at sentence ends so no request is longer than MAX_CHARS.
function pieces(text) {
  const parts = text.match(/[^.?!]+[.?!]+["’)]*\s*|[^.?!]+$/g) || [text];
  const out = [];
  for (const p of parts) {
    const last = out[out.length - 1];
    if (last && last.length + p.length <= MAX_CHARS) out[out.length - 1] = last + p;
    else out.push(p);
  }
  return out.map((p) => p.trim()).filter(Boolean);
}

if (dry) {
  for (const c of cases) {
    console.log(`\n=== ${c.id}: ${c.title}`);
    for (const ch of scriptOf(c)) {
      console.log(`\n# ${ch.label}`);
      for (const l of ch.lines) console.log(l.pause ? `  [${l.pause} s pause]` : `  ${l.voice}: ${l.text}`);
    }
  }
  process.exit(0);
}

// ------------------------------------------------------------------ audio
const VOICES = JSON.parse(fs.readFileSync(path.join(__dirname, 'narrate-voices.json'), 'utf8')).voices;
const cacheDir = path.join(__dirname, '.narrate-cache');
fs.mkdirSync(cacheDir, { recursive: true });
fs.mkdirSync(path.join(root, 'audio'), { recursive: true });

const toPcm = (audio) => execFileSync('ffmpeg', ['-v', 'error', '-i', 'pipe:0', '-f', 's16le', '-ac', '1', '-ar', String(RATE), 'pipe:1'], { input: audio, maxBuffer: 1 << 30 });
const wavOf = (raw) => execFileSync('ffmpeg', ['-v', 'error', '-f', 's16le', '-ar', String(RATE), '-ac', '1', '-i', 'pipe:0', '-f', 'wav', 'pipe:1'], { input: raw, maxBuffer: 1 << 30 });

async function post(route, init) {
  for (let tries = 1; ; tries++) {
    try {
      const res = await fetch(`${url}${route}`, Object.assign({ method: 'POST' }, init));
      if (res.ok) return res;
      const msg = await res.text();
      if (tries >= 3 || res.status < 500) throw new Error(`VoiceStudio ${res.status}: ${msg.slice(0, 400)}`);
    } catch (e) {
      if (e.cause && e.cause.code === 'ECONNREFUSED') throw new Error(`Nothing is listening at ${url}. Start VoiceStudio (the desktop app, or its backend) first.`);
      if (tries >= 3) throw e;
    }
    await new Promise((r) => setTimeout(r, 2000 * tries));
  }
}
// Share of the text's words heard back in order (numbers are left out: the transcript writes 55 for fifty-five).
const words = (s) => s.toLowerCase().replace(/[^a-z\s]/g, ' ').split(/\s+/).filter(Boolean);
function heardShare(text, heard) {
  const a = words(text), b = words(heard);
  if (!a.length) return 1;
  let prev = new Array(b.length + 1).fill(0);
  for (const w of a) {
    const row = [0];
    for (let j = 0; j < b.length; j++) row.push(w === b[j] ? prev[j] + 1 : Math.max(prev[j + 1], row[j]));
    prev = row;
  }
  return prev[b.length] / a.length;
}
async function heard(raw, text) {
  const form = new FormData();
  form.append('file', new Blob([wavOf(raw)], { type: 'audio/wav' }), 'clip.wav');
  form.append('language', 'en');
  form.append('response_format', 'json');
  const { text: got } = await (await post('/v1/audio/transcriptions', { body: form })).json();
  return heardShare(text, got || '');
}

// One piece of speech as raw PCM, from the cache or VoiceStudio's OpenAI-compatible endpoint.
const failed = [];
async function pcm(voice, text) {
  const body = Object.assign({ response_format: 'wav' }, VOICES[voice], { input: text });
  delete body.label;
  const key = crypto.createHash('sha256').update(JSON.stringify(body)).digest('hex').slice(0, 24);
  const file = path.join(cacheDir, `${key}.pcm`);
  const okFile = `${file}.ok`;   // marks a cached clip that passed the check
  if (fs.existsSync(file) && (!check || !recheck || fs.existsSync(okFile))) return fs.readFileSync(file);
  let best = null, bestScore = -1;
  for (let attempt = 0; attempt <= (check ? RETRIES : 0); attempt++) {
    // The cached clip is tried first; each retry uses the next seed but is still cached under the first key.
    const raw = attempt === 0 && fs.existsSync(file) ? fs.readFileSync(file)
      : await speech(Object.assign({}, body, body.seed != null && attempt ? { seed: body.seed + attempt * 7919 } : {}));
    if (!check) { best = raw; break; }
    const score = await heard(raw, text);
    if (score > bestScore) { best = raw; bestScore = score; }
    if (score >= MATCH) break;
  }
  fs.writeFileSync(file, best);
  if (!check) return best;
  if (bestScore >= MATCH) fs.writeFileSync(okFile, '');
  else { fs.rmSync(okFile, { force: true }); failed.push(`${voice} (${Math.round(bestScore * 100)}% heard): ${text}`); }
  return best;
}
async function speech(body) {
  const res = await post('/v1/audio/speech', { headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
  return toPcm(Buffer.from(await res.arrayBuffer()));
}
const silence = (sec) => Buffer.alloc(Math.round(sec * RATE) * 2);

(async () => {
  const manifestFile = path.join(root, 'js/data/audio.js');
  global.window.CASE_AUDIO = {};
  if (fs.existsSync(manifestFile)) eval(fs.readFileSync(manifestFile, 'utf8'));
  const manifest = window.CASE_AUDIO;

  for (const c of cases) {
    const bufs = [], chapters = [];
    let samples = 0;
    const add = (b) => { bufs.push(b); samples += b.length / 2; };
    const script = scriptOf(c);
    const total = script.reduce((n, ch) => n + ch.lines.filter((l) => l.text).reduce((m, l) => m + pieces(l.text).length, 0), 0);
    let done = 0, prev = null;
    // A longer gap when the voice changes, put before a chapter mark so jumping to a question starts on its first word.
    const turn = (v) => { if (prev && prev !== v) add(silence(TURN - GAP)); prev = v; };
    for (const ch of script) {
      const first = ch.lines.find((l) => l.voice);
      if (first) turn(first.voice);
      chapters.push([Math.round((samples / RATE) * 10) / 10, ch.label]);
      for (const l of ch.lines) {
        if (l.pause) { add(silence(l.pause)); prev = null; continue; }
        turn(l.voice);
        for (const p of pieces(l.text)) {
          add(await pcm(l.voice, p));
          done++;
          if (process.stdout.isTTY) process.stdout.write(`\r${c.id}: ${done}/${total} pieces`);
        }
        add(silence(GAP));
      }
    }
    const out = `audio/${c.id}.mp3`;
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-f', 's16le', '-ar', String(RATE), '-ac', '1', '-i', 'pipe:0',
      '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11', '-ar', String(RATE), '-c:a', 'libmp3lame', '-b:a', '48k',
      '-metadata', `title=${c.title}`, '-metadata', 'artist=Thera Orals', path.join(root, out)], { input: Buffer.concat(bufs), maxBuffer: 1 << 30 });
    manifest[c.id] = { src: out, dur: Math.round((samples / RATE) * 10) / 10, chapters };
    console.log(`\r${c.id}: ${(samples / RATE / 60).toFixed(1)} min → ${out}`);
  }

  const ids = Object.keys(manifest).sort();
  const J = JSON.stringify;
  const entries = ids.map((k) => {
    const a = manifest[k];
    return `  ${J(k)}: { src: ${J(a.src)}, dur: ${a.dur}, chapters: [\n${a.chapters.map((ch) => `    ${J(ch)}`).join(',\n')}\n  ] }`;
  });
  fs.writeFileSync(manifestFile, `// Listen-along audio for each case, made by tools/narrate.js with VoiceStudio. Generated: don't edit by hand.
// { caseId: { src, dur (seconds), chapters: [[start seconds, label], ...] } }
window.CASE_AUDIO = {
${entries.join(',\n')}
};
`);
  console.log(`Updated js/data/audio.js (${ids.length} cases with audio).`);
  if (failed.length) console.log(`\n${failed.length} clip(s) still didn't match their text after ${RETRIES} retries; listen to these:\n${failed.map((f) => `  ${f}`).join('\n')}`);
})().catch((e) => { console.error(`\n${e.message}`); process.exit(1); });
