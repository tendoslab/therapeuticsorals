// Checks the Ocumon creature list (js/data/ocumon.js) against the case bank:
// every wild creature must match at least a couple of questions (a hunt tops its pool up with other
// questions from the same topic), and ids must be unique.
// Usage: node tools/check-ocumon.js   (exits 1 if anything needs fixing)
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
global.window = {};
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
for (const src of html.match(/js\/data\/[^"]+\.js/g)) eval(fs.readFileSync(path.join(root, src), 'utf8'));

const CASES = window.CASES, MON = window.OCUMON, CATS = window.CATEGORIES.map((c) => c.id);
const MIN_QUESTIONS = 2;
// Same rule as js/app.js: rarity comes from how many exam sittings asked about the creature's cases.
const EXAM_SOURCES = ['2025', 'Mock 2025', 'YO mock', '2019', '2018', 'Peer recalls', 'Exam recall'];
const tiers = [0, 0, 0, 0];
let bad = 0;
const fail = (msg) => { bad++; console.log(`✕ ${msg}`); };

const ids = new Set();
for (const w of MON.wild) {
  if (ids.has(w.id)) fail(`${w.id}: duplicate id`);
  ids.add(w.id);
  if (!CATS.includes(w.cat)) fail(`${w.id}: unknown topic "${w.cat}"`);
  const re = new RegExp(w.match, 'i');
  const cases = CASES.filter((c) => c.category === w.cat && re.test(`${c.title} ${c.theme || ''}`));
  const steps = cases.flatMap((c) => c.steps).filter((s) => s.type !== 'reveal');
  const mcqs = steps.filter((s) => s.type === 'mcq').length;
  const ys = new Set(cases.flatMap((c) => c.years || []));
  const asked = EXAM_SOURCES.filter((y) => ys.has(y)).length;
  const tier = w.tier || (ys.has('My case report') || asked >= 3 ? 1 : asked ? 2 : 3);
  tiers[tier]++;
  const line = `${w.id.padEnd(18)} ${String(cases.length).padStart(3)} cases ${String(steps.length).padStart(4)} questions ${String(mcqs).padStart(3)} mcq  ${['', 'common  ', 'uncommon', 'rare    '][tier]} (${asked} sittings)`;
  if (steps.length < MIN_QUESTIONS) fail(`${line}  (needs ${MIN_QUESTIONS}+ questions)`);
  else console.log(`  ${line}`);
}
// Partners: unique ids, real topics, a sprite sheet that exists, and at least one starter.
const fsPath = (f) => path.join(root, 'img', 'sprites', `${f}.png`);
const pids = new Set();
for (const p of MON.partners) {
  if (pids.has(p.id)) fail(`partner ${p.id}: duplicate id`);
  pids.add(p.id);
  if (!['animal', 'char', 'gk'].includes(p.kind)) fail(`partner ${p.id}: kind must be animal, char or gk`);
  if (p.kind === 'gk' && !(p.anims && ['idle', 'hurt', 'attack', 'faint'].every((a) => Array.isArray(p.anims[a])))) fail(`partner ${p.id}: gk partners need anims (run tools/gk-sprites.py)`);
  if (!fs.existsSync(fsPath(p.sprite))) fail(`partner ${p.id}: img/sprites/${p.sprite}.png is missing`);
  for (const c of p.strong) if (!CATS.includes(c)) fail(`partner ${p.id}: unknown topic ${c}`);
}
if (!MON.partners.some((p) => p.starter)) fail('no starter partners');
// Topics with no creature can't be hunted.
for (const c of CATS) if (!MON.wild.some((w) => w.cat === c)) fail(`topic ${c} has no creature`);

console.log(`\n${tiers[1]} common, ${tiers[2]} uncommon, ${tiers[3]} rare. ${MON.partners.length} partners.`);
console.log(bad ? `\n${bad} problem(s).` : `\nAll ${MON.wild.length} creatures OK.`);
process.exit(bad ? 1 : 0);
