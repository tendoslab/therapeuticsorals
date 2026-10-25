// Checks the why-wrong lines (js/data/why-*.js) against the case bank: every key must name a real mcq or
// select-all step, every index a wrong option, and every line must be non-empty. Lists the case files
// whose wrong options still have no line.
// Usage: node tools/check-why.js   (exits 1 if anything needs fixing)
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
global.window = { CASES: [] };
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const fileOf = {};
for (const src of html.match(/js\/data\/[^"]+\.js/g)) {
  const before = window.CASES.length;
  eval(fs.readFileSync(path.join(root, src), 'utf8'));
  window.CASES.slice(before).forEach((c) => { fileOf[c.id] = path.basename(src); });
}
const WHY = window.WHY || {};
let bad = 0;
const fail = (msg) => { bad++; console.log(`✕ ${msg}`); };
const wrongOpts = (st) => st.options.map((_, i) => i).filter((i) => (st.type === 'mcq' ? i !== st.answer : !st.answers.includes(i)));

for (const k of Object.keys(WHY)) {
  const [id, i] = k.split('#'), c = window.CASES.find((x) => x.id === id), st = c && c.steps[i];
  if (!st) { fail(`${k}: no such step`); continue; }
  if (st.type !== 'mcq' && st.type !== 'multi') { fail(`${k}: is a ${st.type} step`); continue; }
  for (const j of Object.keys(WHY[k])) {
    if (!wrongOpts(st).includes(Number(j))) fail(`${k}: option ${j} is not a wrong option`);
    if (!String(WHY[k][j]).trim()) fail(`${k}: option ${j} is empty`);
  }
}
const todo = {};
let total = 0, done = 0;
for (const c of window.CASES) c.steps.forEach((st, i) => {
  if (st.type !== 'mcq' && st.type !== 'multi') return;
  const w = Object.assign({}, WHY[`${c.id}#${i}`], st.why);
  for (const j of wrongOpts(st)) { total++; if (w[j]) done++; else todo[fileOf[c.id]] = (todo[fileOf[c.id]] || 0) + 1; }
});
Object.entries(todo).forEach(([f, n]) => console.log(`  ${f.padEnd(26)} ${n} wrong option(s) without a line`));
console.log(`\n${done} of ${total} wrong options explained.`);
console.log(bad ? `${bad} problem(s).` : 'No problems.');
process.exit(bad ? 1 : 0);
