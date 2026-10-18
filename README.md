# Therapeutics Orals Simulator

An oral-exam style case simulator for therapeutic prescribing by optometrists in Australia. It is built from candidate recalls (2018, 2019, 2025), the 2025 Young Optometrists mock orals, the 2025 anterior and posterior eye study notes, peer recalls and case-study notes. The layout and fonts match the companion CL Orals Lab site.

Open `index.html` in a browser, or host the folder on GitHub Pages (Settings → Pages → deploy from branch, root). There is no build step to run it.

## Features

- **Oral simulator**: pick topics and a source, choose a pool (All / New / Missed) and run any number of cases. The **Mock oral** sits under the practice pool: a 20-minute clock and two examiners, a case-report warm-up, one anterior-eye case and one glaucoma/neuro case, plus a bonus case if time allows.
- **My case report**: two cases built from your own RCE / EBMD case report (in `Case Report/`) and the marker's comments on it: history gaps, why the unaffected eye sees worse, the EBMD signs and negative staining, pain mechanism, zoster as a differential, the choice of chloramphenicol drops vs ointment, Vita-POS, long-term ibuprofen with telmisartan, a bandage lens, hypertonic saline, ASP and prognosis. Each answer shows the marker's comment it came from. The mock oral uses these as its case-report warm-up.
- **Photos and printouts**: about 110 cases show the photo, disc image or field printout the panel would hand you, taken from the source documents (the past papers, the practice orals deck and the 2025 notes) or from the extra photos in `images/`. The written description of the exhibit starts folded so you read the image first, and where each image came from is only shown after your first answer in the case, because a slide or section title often names the diagnosis. Click an image to enlarge it. A few field cases use a schematic grey scale drawn from the case description; these are labelled as schematics.
- **Case record**: beside every question, a panel shows the patient, the presenting story, the exhibit and everything so far in the case (results the examiner revealed and the answers to earlier questions), so moving on is never disorienting.
- **Answering**: pick an option, then lock it in (nothing submits on a stray tap). Typed notes and dropdown choices are kept if you switch tabs mid-question. Every tab has its own URL, so the browser back button works.
- **Step types**: `reveal` (the examiner gives you results), `mcq` (single best answer), `multi` (select all that apply), `match` (dropdown matching), `viva` (answer out loud, then tick the key points you covered).
- **Play**: two quick games built from the case bank, filtered by topic. *Lightning round* serves the single-best-answer questions at 30 seconds each, with 3 lives, a time bonus and a streak multiplier (keys 1–4 answer, Enter moves on); a wrong answer goes on My mistakes like any other. *Pair rush* turns the matching questions into tap-to-pair boards on a 90-second clock (a wrong pair costs 5 seconds, a cleared board wins back 8). Each game keeps your best score, and the game-over screen lists what you missed with a link to the full case.
- **My mistakes**: every question you scored under 8/10 on (or skipped), with what you said, the correct answer and the examiner notes. Drill them on their own or retry the whole case; a question drops off once you get it right. The end-of-session screen lists the same detail.
- **Mastered**: every question you scored 8/10 or better on the last time you answered it, grouped by case, with the model answer and examiner notes a tap away. It shows how many times in a row you've got each one right, marks *Comebacks* (questions you'd missed before), and has a progress bar per topic. Quiz yourself on them to keep them fresh; miss one and it moves back to My mistakes.
- **Recall bank**: every case by topic and source, with your missed-question count and last score.
- **Answer audit**: specific student answers from the recalls, checked and corrected against Australian practice. The same corrections appear inside the matching case steps as "Recall check" boxes.
- **Source filter**: sources by year, newest first: 2025 orals, the 2025 Young Optometrists mock orals, the 2025 anterior and posterior study notes, the 2022 case-study notes, the Young Optometrists (MOTHs) mock orals from those 2022 notes, 2019 orals, 2018 orals and the 2016 case-study notes. Undated sources follow: peer recalls (questions other candidates passed on), an undated exam recall, the Mini oral prep notes and the Practice orals slide deck. Your own case report comes last. Every case shows its source badges. Cases from each document are kept as separate cases (even when the topic repeats) so you can see what each sitting or set of notes asked.
- Sessions are never locked: leave for another tab and come back, go back to setup and resume, skip a question, or end early and see results.
- Light and dark themes. Progress (case results, missed and mastered questions) is stored in the browser's `localStorage`.

## Files

```
index.html            page shell and navigation
img/                  favicon (SVG + PNG fallbacks) and Apple touch icon
css/styles.css        all styling (light and dark theme tokens at the top)
js/data/<topic>.js    the original cases, by topic (plus the topic list and the answer audit)
js/data/recalls-2018.js, recalls-2019.js, recalls-2025.js, mock-2025.js,
        peer-recalls.js, case-studies-2016.js, case-studies-2022.js,
        exam-recall.js, mini-oral-prep.js, practice-orals.js,
        anterior-notes-2025.js, posterior-notes-2025.js
                      cases grouped by the document they came from
js/data/my-case-report.js
                      your case report, with the marker's comments (`marker` field)
js/data/images.js     photos per case (generated; edit tools/case-images.py instead)
img/cases/            the photos and printouts themselves
images/               extra photos added by hand (no source document); case-images.py copies them into img/cases
tools/case-images.py  rebuilds img/cases and js/data/images.js from the source documents (tools/fields.py draws the schematic fields)
tools/check-mcq.js    flags multiple-choice questions where the answer stands out by length
js/app.js             simulator, play (games), my mistakes, mastered, recall bank, answer audit, exam guide
```

## Adding or editing cases

Cases live in `js/data/<topic>.js` or the per-source files; add the script tag in `index.html` for any new file. Copy an existing case object; the step types and optional fields are described at the top of `js/app.js`. There is no build step.

Write wrong options that are as long and as specific as the correct one, so the answer can't be picked by length. Run `node tools/check-mcq.js` before committing: it lists any question whose correct option is clearly the longest, or whose wrong options are much shorter.

## Disclaimer

This is a study aid only. Doses, TGA categories, PBS/MBS listings and OBA/RANZCO requirements change. Verify against the current AMH, eTG, product information, the OBA Guideline for use of scheduled medicines and your course notes.
