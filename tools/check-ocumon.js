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
  const line = `${w.id.padEnd(18)} ${String(cases.length).padStart(3)} cases ${String(steps.length).padStart(4)} questions ${String(mcqs).padStart(3)} mcq`;
  if (steps.length < MIN_QUESTIONS) fail(`${line}  (needs ${MIN_QUESTIONS}+ questions)`);
  else console.log(`  ${line}`);
}
for (const s of MON.starters) if (s.stages.length !== 3) fail(`starter ${s.id}: needs 3 stages`);
// Topics with no creature can't be hunted.
for (const c of CATS) if (!MON.wild.some((w) => w.cat === c)) fail(`topic ${c} has no creature`);

console.log(bad ? `\n${bad} problem(s).` : `\nAll ${MON.wild.length} creatures OK.`);
process.exit(bad ? 1 : 0);
