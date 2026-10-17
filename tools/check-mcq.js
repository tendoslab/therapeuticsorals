// Flags multiple-choice questions where the correct option gives itself away by length.
// usage: node tools/check-mcq.js
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const files = [...html.matchAll(/src="(js\/data\/[^"]+)"/g)].map((m) => m[1]);
global.window = { CASES: [] };
for (const f of files) require(path.join(__dirname, '..', f));

let total = 0, longest = 0;
const problems = [];
for (const c of window.CASES) {
  c.steps.forEach((s, i) => {
    if (s.type !== 'mcq') return;
    total++;
    const a = s.options[s.answer].length;
    const wrong = s.options.filter((_, k) => k !== s.answer).map((o) => o.length);
    if (a > Math.max(...wrong)) longest++;
    if (a > Math.max(...wrong) * 1.05) problems.push(`${c.id}#${i}: correct option (${a}) is longer than every wrong option (max ${Math.max(...wrong)})`);
    if (Math.min(...wrong) < a * 0.75) problems.push(`${c.id}#${i}: a wrong option (${Math.min(...wrong)}) is much shorter than the correct one (${a})`);
  });
}
problems.forEach((p) => console.log(p));
console.log(`${total} MCQs; correct option is the longest in ${longest} (${Math.round((100 * longest) / total)}%); ${problems.length} flagged`);
process.exitCode = problems.length ? 1 : 0;
