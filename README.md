# Therapeutics Orals Simulator

An oral-exam style case simulator for therapeutic prescribing by optometrists in Australia. It is built from candidate recalls (2018, 2019, 2025) and the 2025 mock orals.

Open `index.html` in a browser, or host the folder on GitHub Pages (Settings → Pages → deploy from branch, root). There is no build step to run it.

## Features

- **Practice**: pick topics, choose a pool (All / New / Missed) and run any number of cases.
- **Mock Oral**: a 20-minute clock and two examiners, structured like the real exam. It runs a case-report warm-up, then one anterior-eye case and one glaucoma/neuro case, plus a bonus case if time allows.
- **Step types**:
  - `reveal`: the examiner gives you results.
  - `mcq`: single best answer.
  - `multi`: select all that apply.
  - `match`: dropdown matching.
  - `viva`: answer out loud, then tick the key points you covered.
- **Recall Bank**: every topic by year, with a link to practise each case.
- **Answer Audit**: specific student answers from the recalls, checked and corrected against Australian practice. The same corrections appear inside the matching case steps as "Recall check" boxes.
- Progress (missed cases) is stored in the browser's `localStorage`.

## Adding or editing cases

Cases live in `js/data/<topic>.js`. Copy an existing case object; the schema is described at the top of `js/app.js`. If you add new Tailwind classes, rebuild the stylesheet:

```
npx tailwindcss@3.4.5 -c build/tailwind.config.js -i build/input.css -o css/tailwind.css --minify
```

## Disclaimer

This is a study aid only. Doses, TGA categories, PBS/MBS listings and OBA/RANZCO requirements change. Verify against the current AMH, eTG, product information, the OBA Guideline for use of scheduled medicines and your course notes.
