# Therapeutics Orals Simulator

An oral-exam style case simulator for therapeutic prescribing by optometrists in Australia. It is built from candidate recalls (2018, 2019, 2025), the 2025 Young Optometrists mock orals, the 2025 anterior and posterior eye study notes, peer recalls and case-study notes. The layout and fonts match the companion CL Orals Lab site.

Open `index.html` in a browser, or host the folder on GitHub Pages (Settings → Pages → deploy from branch, root). There is no build step to run it.

## Features

- **Oral simulator**: pick topics and a source, choose a pool (All / New / Missed) and run any number of cases. The **Mock oral** sits under the practice pool: a 20-minute clock and two examiners, a case-report warm-up, one anterior-eye case and one glaucoma/neuro case, plus a bonus case if time allows.
- **Exam rubric on the end screen**: every session is marked the way the OPTM8523 exam guidelines mark the oral, in four areas worth 25% each (clinical interpretation and work-up; diagnosis and clinical reasoning; management and prescribing; follow-up, prognosis and ongoing care), each banded 0–5 from your share of marks in that area. A mock oral also gets a total out of 20. Each question's area comes from its phase label or question (rules in `DOMAIN_RULES` in `js/app.js`; a step can set `domain` to override). Under the red flag principle, a missed safety-critical question in a mock turns the verdict into a red flag whatever the score, and every session lists the ones you missed.
- **My case report**: two cases built from your own RCE / EBMD case report (in `Case Report/`) and the marker's comments on it: history gaps, why the unaffected eye sees worse, the EBMD signs and negative staining, pain mechanism, zoster as a differential, the choice of chloramphenicol drops vs ointment, Vita-POS, long-term ibuprofen with telmisartan, a bandage lens, hypertonic saline, ASP and prognosis. Each answer shows the marker's comment it came from. The mock oral uses these as its case-report warm-up.
- **Photos and printouts**: about 110 cases show the photo, disc image or field printout the panel would hand you, taken from the source documents (the past papers, the practice orals deck and the 2025 notes) or from the extra photos in `images/`. The written description of the exhibit starts folded so you read the image first, and where each image came from is only shown after your first answer in the case, because a slide or section title often names the diagnosis. Click an image to enlarge it. A few field cases use a schematic grey scale drawn from the case description; these are labelled as schematics.
- **Case record**: beside every question, a panel shows the patient, the presenting story, the exhibit and everything so far in the case (results the examiner revealed and the answers to earlier questions), so moving on is never disorienting.
- **Answering**: pick an option, then lock it in (nothing submits on a stray tap). Typed notes and dropdown choices are kept if you switch tabs mid-question. Every tab has its own URL, so the browser back button works.
- **Step types**: `reveal` (the examiner gives you results), `mcq` (single best answer), `multi` (select all that apply), `match` (dropdown matching), `viva` (answer out loud, then tick the key points you covered).
- **Play**: two quick games built from the case bank, filtered by topic. *Lightning round* serves the single-best-answer questions at 30 seconds each, with 3 lives, a time bonus and a streak multiplier (keys 1–4 answer, Enter moves on); a wrong answer goes on My mistakes like any other. *Pair rush* turns the matching questions into tap-to-pair boards on a 90-second clock (a wrong pair costs 5 seconds, a cleared board wins back 8). Each game keeps your best score, and the game-over screen lists what you missed with a link to the full case.
- **Ocumon** (inspired by the Anki add-on Ankimon): pick a first partner (Kitlet, Hopticus or Blinkster), then catch the 57 wild eye conditions in the Ocudex, from Pressure Golem (angle closure) to Dendrake (HSV). Team points (1 per new creature, and 1 per 3 repeat catches) bring another Ocumon to your team every 2 points, in an order shuffled for each new game, 39 in all (pixel animals and characters, each with its own level and favourite topics), and you can send out whichever you like. The tab is drawn like a handheld Pokémon battle (layout and HP-bar colours follow the battle GUI in tendoslab/pokemon): the wild creature slides in, your partner is sent out, and every answer plays out with the partner's own sprite animations: attack, hurt, faint, a thrown ball and its three wobbles on a catch, level-ups and rank-ups (★ at Lv 8, ★★ at Lv 18). Reduced-motion settings skip the animation. Ocumon is its own mode: only fights on its tab count, and the simulator, drills and games never touch it (fight answers still update My mistakes and Mastered). *Fight* takes you through one whole case from the creature's topic, start to finish (cases with your mistakes come first), and the case is the boss: you always play it to the end, and the catch is decided there. Get 80% of it right to catch a Lv 10 creature, 85% for Lv 25 and 90% for Lv 40, or it gets away. The creature's HP bar shows how much of the case is still to get right. Every question becomes a pick: single-best-answer as it is, select-all as "which one is right?" (or "which one isn't?" when nearly every option is right), matching one pair at a time (up to 4), and viva questions as a special move where you answer out loud, reveal the key points and tick what you said; the examiner's results come up between questions as in the simulator. Fixing a question from My mistakes is a critical hit (double XP), your partner's favourite topics give ×1.25 XP and each rank +10%; bonuses never add damage, so only your answers decide a catch. A wrong answer lets the creature hit back. If your partner faints, your highest-level teammate still standing comes out and the fight goes on; fainted Ocumon rest at 0 HP until the next morning, so it pays to share fights out across the team, and the creature only escapes when the whole team is down (everyone is then healed, and no XP is lost). Getting a whole case right is a perfect catch: double the catch XP, and the creature is marked Mastered in the Ocudex. On a wide screen the battle sits beside the question; on a phone it stays pinned to the top of the screen, so every hit plays out in view. *Run* finds another creature. Rarity follows the exam: a creature is **common** (Lv 10) when its cases were asked in 3 or more exam sittings (the recalls, peer recalls and mock orals) or on your own case report, **uncommon** (Lv 25) when asked in 1 or 2, and **rare** (Lv 40) when only the study notes cover it. Commons turn up most (spawn weight ×1, uncommon ×0.6, rare ×0.3), so the topics most likely to be asked get the most practice; the Ocudex shows how many sittings asked each one. On top of rarity, uncaught creatures (×3), topics with open mistakes (×2) and the topic you're on (×1.5) turn up more often, and the creatures from your last few spawns much less, so the same one doesn't keep coming back. The level sets how much of the case you need and the XP for catching it. New creatures only turn up in the wild, and ones you've caught can be battled again from the Ocudex. Fixes for common Ankimon complaints: it rewards accuracy rather than volume (a question already right today earns no XP, and XP slows after 400 a day); it never pops up while you use the rest of the site (just an HP badge on the tab); and a damaged save falls back to defaults instead of breaking the page.
- **Export / import progress**: download everything (case results, mistakes, mastered, game scores, Ocumon) as a file and load it in another browser or device. Buttons are on the simulator setup screen and the Ocumon tab.
- **Fewer repeats**: the simulator, mock oral and Ocumon fights remember the last 25 cases you played and put them at the back of the queue, so a new session starts with cases you haven't done lately.
- **Why the wrong answers are wrong**: after a single-best-answer or select-all question, each wrong option shows a line on why it's wrong, and the one you picked is highlighted. My mistakes, Lightning round and Ocumon fights show the same lines. They live in `js/data/why-*.js`, keyed by case id and step.
- **My mistakes**: every question you scored under 8/10 on (or skipped), with what you said, the correct answer and the examiner notes. Drill them on their own or retry the whole case; a question drops off once you get it right. The end-of-session screen lists the same detail.
- **Mastered**: every question you scored 8/10 or better on the last time you answered it, grouped by case, with the model answer and examiner notes a tap away. It shows how many times in a row you've got each one right, marks *Comebacks* (questions you'd missed before), and has a progress bar per topic. Quiz yourself on them to keep them fresh; miss one and it moves back to My mistakes.
- **Recall bank**: every case by topic and source, with your missed-question count and last score.
- **Answer audit**: specific student answers from the recalls, checked and corrected against Australian practice. The same corrections appear inside the matching case steps as "Recall check" boxes.
- **Exam guide**: the official 2026 exam details (dates, room, 35% weighting, hurdle), the marking rubric, the red flag principle and the assessment tips from the OPTM8523 guidelines (`OPTM8523 Oral Therapeutics Exam Guidelines.pdf`), followed by what candidate recalls add.
- **Source filter**: sources by year, newest first: 2025 orals, the 2025 Young Optometrists mock orals, the 2025 anterior and posterior study notes, the 2022 case-study notes, the Young Optometrists (MOTHs) mock orals from those 2022 notes, 2019 orals, 2018 orals and the 2016 case-study notes. Undated sources follow: peer recalls (questions other candidates passed on), an undated exam recall, the Mini oral prep notes and the Practice orals slide deck. Then come cases written for topics the 2026 exam guidelines list that the other sources barely cover (drug interactions, systemic effects of eye drops, ocular effects of systemic drugs). Your own case report comes last. Every case shows its source badges. Cases from each document are kept as separate cases (even when the topic repeats) so you can see what each sitting or set of notes asked.
- Sessions are never locked: leave for another tab and come back, go back to setup and resume, skip a question, or end early and see results.
- Light and dark themes. Progress (case results, missed and mastered questions, Ocumon) is stored in the browser's `localStorage`; use Export / Import to move it.

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
js/data/ocumon.js     Ocumon partners and wild creatures (check with tools/check-ocumon.js)
img/sprites/           partner sprite sheets, cut down from the asset packs below (gk-*.png are built by tools/gk-sprites.py)
js/data/images.js     photos per case (generated; edit tools/case-images.py instead)
img/cases/            the photos and printouts themselves
images/               extra photos added by hand (no source document); case-images.py copies them into img/cases
tools/case-images.py  rebuilds img/cases and js/data/images.js from the source documents (tools/fields.py draws the schematic fields)
tools/check-ocumon.js checks every Ocumon creature matches enough questions in the case bank, and prints its rarity
tools/gk-sprites.py   builds the GrafxKid partner sheets from the Sprite Pack zips and prints their frame counts
js/data/why-*.js      why each wrong option is wrong (window.WHY, keyed "caseId#step" → { option index: reason })
tools/check-mcq.js    flags multiple-choice questions where the answer stands out by length
js/app.js             simulator, play (games), Ocumon, my mistakes, mastered, recall bank, answer audit, exam guide
```

## Adding or editing cases

Cases live in `js/data/<topic>.js` or the per-source files; add the script tag in `index.html` for any new file. Copy an existing case object; the step types and optional fields are described at the top of `js/app.js`. There is no build step.

Write wrong options that are as long and as specific as the correct one, so the answer can't be picked by length. Run `node tools/check-mcq.js` before committing: it lists any question whose correct option is clearly the longest, or whose wrong options are much shorter.

## Disclaimer

This is a study aid only. Doses, TGA categories, PBS/MBS listings and OBA/RANZCO requirements change. Verify against the current AMH, eTG, product information, the OBA Guideline for use of scheduled medicines and your course notes.

## Credits

Ocumon partner sprites:

- [72 Cute Pixel Character](https://bdragon1727.itch.io/72-cute-pixel-character) by BDragon1727 (free licence).
- Little Animals Pack V3 (free for commercial and non-commercial use; the assets may be modified but not resold).
- Sprite Packs 3, 6 and 8 by GrafxKid (CC0 1.0 public domain): Pinguecula, Fluorella, Sclerattle, Xanthelas, Tonotoggle, Arcus, Gonioguard, Rexinal, Vascula, Papillia, Cherryspot, Perimon, Ciliette, Slitbot, Amblyo and Rustring.

`img/sprites/` keeps only the animation rows the battle uses. The wild creatures are emoji.
