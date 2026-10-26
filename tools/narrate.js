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
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const root = path.join(__dirname, '..');
const RATE = 24000;      // mono 16-bit PCM, the rate every clip is resampled to before joining
const THINK = 4;         // seconds to answer in your head before the model answer
const GAP = 0.6;         // between lines
const MAX_CHARS = 500;   // longest piece sent in one request (split at sentence ends)

const args = process.argv.slice(2);
const flag = (n) => { const i = args.indexOf(n); return i < 0 ? null : args.splice(i, 2)[1]; };
const dry = args.includes('--dry-run') && !!args.splice(args.indexOf('--dry-run'), 1);
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
const listOf = (xs) => xs.map(speak).join(' ');

function modelAnswer(st) {
  if (st.type === 'viva') return listOf(st.points);
  if (st.type === 'mcq') return speak(st.options[st.answer]);
  if (st.type === 'multi') return listOf(st.answers.map((i) => st.options[i]));
  if (st.type === 'match') return st.pairs.map((p) => speak(`${p.label}: ${p.answer}`)).join(' ');
  return '';
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
    lines.push({ voice: 'narrator', text: `Model answer. ${modelAnswer(st)}` });
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

// One piece of speech as raw PCM, from the cache or VoiceStudio's OpenAI-compatible endpoint.
async function pcm(voice, text) {
  const body = Object.assign({ response_format: 'wav' }, VOICES[voice], { input: text });
  delete body.label;
  const key = crypto.createHash('sha256').update(JSON.stringify(body)).digest('hex').slice(0, 24);
  const file = path.join(cacheDir, `${key}.pcm`);
  if (fs.existsSync(file)) return fs.readFileSync(file);
  let res;
  for (let tries = 1; ; tries++) {
    try {
      res = await fetch(`${url}/v1/audio/speech`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
      if (res.ok) break;
      const msg = await res.text();
      if (tries >= 3 || res.status < 500) throw new Error(`VoiceStudio ${res.status}: ${msg.slice(0, 400)}`);
    } catch (e) {
      if (e.cause && e.cause.code === 'ECONNREFUSED') throw new Error(`Nothing is listening at ${url}. Start VoiceStudio (the desktop app, or its backend) first.`);
      if (tries >= 3) throw e;
    }
    await new Promise((r) => setTimeout(r, 2000 * tries));
  }
  const wav = Buffer.from(await res.arrayBuffer());
  const raw = execFileSync('ffmpeg', ['-v', 'error', '-i', 'pipe:0', '-f', 's16le', '-ac', '1', '-ar', String(RATE), 'pipe:1'], { input: wav, maxBuffer: 1 << 30 });
  fs.writeFileSync(file, raw);
  return raw;
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
    let done = 0;
    for (const ch of script) {
      chapters.push([Math.round((samples / RATE) * 10) / 10, ch.label]);
      for (const l of ch.lines) {
        if (l.pause) { add(silence(l.pause)); continue; }
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
})().catch((e) => { console.error(`\n${e.message}`); process.exit(1); });
