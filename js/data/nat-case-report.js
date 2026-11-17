// Nat's case report: acute marginal keratitis secondary to chronic anterior blepharitis.
// Built like my-case-report.js: the questions follow the marker's feedback, which `marker` quotes.
// Source: Case Report/Case Report - Marginal Keratitis Case.pdf (z5416457).
window.CASES.push(
    {
        id: 'nat-report-marginal-diagnosis',
        category: 'cornea',
        markerOf: 'Nat’s case report',
        title: 'Nat’s Case Report: Marginal Keratitis with Anterior Blepharitis (History, Findings & Diagnosis)',
        theme: 'Marginal keratitis (case report)',
        years: ['Nat case report'],
        patient: 'CY, 20-year-old Asian man. Glasses wearer, no contact lenses. Viral conjunctivitis a year ago. No medicines, no systemic disease, no allergies. Back from China 3 weeks ago.',
        stem: 'Two days of a red right eye with photophobia, mild pain (3/10), itch and foreign-body sensation. A similar episode two weeks ago: a pharmacist gave him antibiotic drops (he doesn’t know the name) QID for a week; it got better, then came back soon after he stopped. He put the drops in twice last night. The left eye is a little itchy too. No blur, discharge or watering.',
        steps: [
            {
                phase: '1. History gaps',
                type: 'viva',
                question: '“What else would you want to know in the history?”',
                points: [
                    'The name of the pharmacy drop (almost certainly chloramphenicol, the S3 one), how often and how long he really used it',
                    'Lid symptoms: crusting or flakes on the lashes, morning stickiness, burning, styes or chalazia',
                    'Skin: rosacea, facial flushing, seborrhoeic dermatitis or dandruff; atopy and eczema',
                    'Any cold sores or previous herpes eye disease, before a steroid is even considered',
                    'Eye rubbing, eye make-up, recent swimming or water exposure, and contacts with red eyes',
                    'Was the first episode in the same spot of the same eye, and did anyone examine it at the time?'
                ],
                explain: 'The marker called the history adequate. The gaps worth filling are the ones that change the plan: the drug he was given (so you know what he already tried), the lid history (blepharitis is the cause, so its symptoms matter), skin disease (rosacea and seborrhoeic dermatitis drive blepharitis and MGD) and any herpes history, because the treatment will be a steroid.',
                marker: 'Case history: “Adequate.”'
            },
            {
                phase: '2. Why it came back',
                type: 'mcq',
                question: '“Why did the pharmacy antibiotic help, and why did it come back as soon as he stopped?”',
                options: [
                    'The antibiotic cut the staph load on the lid margin, so less antigen reached the cornea, but nothing treated the blepharitis itself; once it stopped, the bacteria and the immune reaction came back.',
                    'The antibiotic killed the bacteria growing inside the corneal infiltrate, but a one-week course was too short to sterilise it, so the surviving bacteria multiplied again and caused a second infection.',
                    'The antibiotic drops were preserved with benzalkonium, which suppressed the immune reaction for a week like a mild steroid; stopping them caused the same rebound that you see after stopping a steroid.',
                    'Chloramphenicol is an antiviral as well as an antibiotic, so it held back an adenoviral keratitis caught on his trip to China, which then came back when the drug was stopped after seven days.'
                ],
                answer: 0,
                explain: 'Marginal keratitis is sterile: an immune reaction (type III, immune-complex) to staphylococcal antigens shed from the lid margin into the tears. Lowering the bacterial load helps for a while, but the infiltrates aren’t infected, and the blepharitis is the reservoir. That is why lid hygiene is the long-term treatment and recurrences are the rule without it.'
            },
            {
                phase: '3. Findings',
                type: 'reveal',
                text: 'VA 6/6 each eye. Pupils PERRL, no RAPD. Motility full, painless. IOP (NCT) R 13, L 14 mmHg. Both eyes: anterior blepharitis with G2 lid-margin telangiectasia; TBUT 3 s; G1 papillae. Right: G4 temporal and G3 nasal bulbar hyperaemia, G0 limbal; arcuate peripheral stromal infiltrates about 1 × 2 mm at 9:30–10:30 and 7–8 o’clock, separated from the limbus by a clear zone; mild fluorescein staining smaller than the infiltrates. AC no cells or flare. VH grade 4. Left: G4 nasal bulbar hyperaemia, cornea clear. Undilated fundus: tilted discs, CDR 0.5, otherwise normal.',
                exhibit: 'Slit-lamp view, right eye: two grey-white arc-shaped infiltrates in the peripheral cornea at about 10 and 8 o’clock, each with a thin strip of clear cornea between it and the limbus, and sectoral redness over them.'
            },
            {
                phase: '4. Diagnosis',
                type: 'mcq',
                question: '“What’s your diagnosis, and why is there a clear zone?”',
                options: [
                    'Marginal keratitis from staph anterior blepharitis: antigen–antibody complexes form where tear-borne antigen meets antibody from the limbal vessels, so infiltrates sit just inside the limbus with clear cornea between.',
                    'Peripheral ulcerative keratitis from an undiagnosed vasculitis: the limbal vessels are blocked by immune complexes, so the cornea next to them dies first and leaves a pale clear strip before the melting edge.',
                    'Early bacterial keratitis from the lid flora: the clear zone is where the pharmacy antibiotic has already sterilised the cornea, with the surviving bacteria left in the arc further in towards the visual axis.',
                    'Phlyctenular keratoconjunctivitis from tuberculosis exposure in China: the clear zone is the track left as the phlycten migrates from the limbus towards the centre of the cornea over a few days.'
                ],
                answer: 0,
                explain: 'Classic features: peripheral, arcuate infiltrates about 1–2 mm parallel to the limbus at 2, 4, 8 or 10 o’clock (where the lid margin rests), a clear zone, staining smaller than the infiltrate (or none), sectoral injection and a quiet AC, with blepharitis. PUK has no clear zone and thins the cornea; a phlycten is a raised nodule with its own vessels, and migrates without leaving a clear zone.',
                marker: 'Diagnosis: “Adequate.”'
            },
            {
                phase: '5. Sterile or infected?',
                type: 'multi',
                critical: true,
                question: '“He’s used antibiotic drops. Which findings would make you treat this as microbial keratitis instead?” Select all that apply.',
                options: [
                    'An infiltrate larger than about 2 mm, or one within about 3 mm of the corneal centre',
                    'An AC reaction (cells, flare or hypopyon)',
                    'An epithelial defect as big as or bigger than the infiltrate, or a growing infiltrate',
                    'Pain out of proportion, purulent discharge or a contact lens history',
                    'A clear zone between the infiltrate and the limbus',
                    'Lid-margin telangiectasia and crusting on both sides'
                ],
                answers: [0, 1, 2, 3],
                explain: 'The “1-2-3 rule” (≥1+ AC cells, ≥2 mm infiltrate, ≤3 mm from the centre) is a common trigger to treat as infective, scrape and refer. Staining that matches or exceeds the infiltrate, marked pain and discharge, and contact lens wear all point the same way. A clear zone and blepharitis support marginal keratitis. Recent antibiotics can blunt the signs, so review closely.'
            },
            {
                phase: '6. Differentials',
                type: 'match',
                question: 'Match each differential to the finding that argues against it in CY.',
                pairs: [
                    { label: 'Peripheral ulcerative keratitis / Mooren’s ulcer', answer: 'No thinning or overhanging edge, no systemic autoimmune disease, only mild pain' },
                    { label: 'HSV keratitis', answer: 'No dendrite or geographic ulcer, no previous cold sores or episodes' },
                    { label: 'Phlyctenular keratoconjunctivitis', answer: 'The lesion is flat, with no raised nodule or feeder vessel' },
                    { label: 'Adenoviral (EKC) keratitis', answer: 'No watery discharge, follicles or cold symptoms, and the infiltrates are peripheral' },
                    { label: 'CL peripheral ulcer', answer: 'Not a contact lens wearer' }
                ],
                distractors: ['Raised IOP with fine KPs and very little redness'],
                explain: 'Nat’s table also covered ocular rosacea keratitis and VKC. Microbial keratitis is the one that matters most to exclude. PUK and Mooren’s thin and melt the cornea with no clear zone and are very painful; they need same-day ophthalmology.',
                marker: 'Differentials: “Adequate list of differentials.”'
            },
            {
                phase: '7. Which blepharitis?',
                type: 'multi',
                question: '“You diagnosed anterior blepharitis. Which other kinds should you have thought about?” Select all that apply.',
                options: [
                    'Angular blepharitis: redness, scaling and fissuring at the canthi, classically Moraxella (or staph)',
                    'Posterior blepharitis (meibomian gland dysfunction): capped or blocked glands, poor-quality meibum',
                    'Mixed blepharitis: anterior and posterior together, which is common',
                    'Demodex blepharitis: cylindrical collarettes (sleeves) at the base of the lashes',
                    'Seborrhoeic blepharitis: greasy scales, often with dandruff or facial seborrhoeic dermatitis',
                    'Allergic contact dermatitis of the lids as the cause of the corneal infiltrates'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'This was the marker’s main point. CY’s TBUT was 3 s in both eyes, which is a strong hint at MGD, so the meibomian glands should have been examined and recorded (expressibility, quality, capping). Demodex matters because Nat chose tea tree wipes, which target mites. Contact dermatitis causes lid eczema, not marginal infiltrates.',
                marker: '“Since you diagnosed anterior blepharitis, other types of blepharitis such as angular blepharitis could have been discussed as well.” and “Mentioning posterior blepharitis/status of the meibomian glands … would have been ideal … Blepharitis can be mixed.”'
            },
            {
                phase: '8. Pathophysiology',
                type: 'viva',
                question: '“Tell us about the pathophysiology and epidemiology of marginal keratitis.”',
                points: [
                    'Staph aureus overgrowth on the lid margin in chronic anterior blepharitis',
                    'Bacterial antigens and exotoxins are shed into the tears and deposit in the peripheral stroma',
                    'Type III (immune-complex) hypersensitivity: complement activation and neutrophil infiltration give sterile infiltrates',
                    'Infiltrates sit where the lid margin rests on the cornea (2, 4, 8, 10 o’clock), with a clear zone at the limbus',
                    'Common, self-limiting (2–3 weeks), usually managed in primary care, so good prevalence data are scarce',
                    'Blepharitis itself is very common (signs in 37–47% of patients in one US survey), across all ages and ethnic groups'
                ],
                explain: 'Keep the immunology simple and correct: the infiltrate is the body’s reaction, not the bacteria. Some sources add a type IV (cell-mediated) component. The prevalence of marginal keratitis is unknown because most cases never reach a hospital.',
                marker: 'Discussion: “Adequate.” Abstract: “Concise.”'
            }
        ]
    },
    {
        id: 'nat-report-marginal-management',
        category: 'cornea',
        markerOf: 'Nat’s case report',
        title: 'Nat’s Case Report: Marginal Keratitis with Anterior Blepharitis (Management & Prognosis)',
        theme: 'Marginal keratitis (case report)',
        years: ['Nat case report'],
        patient: 'Same patient: CY, 20M, marginal keratitis RE with anterior blepharitis OU. VA 6/6 OU, IOP 13 / 14 mmHg, TBUT 3 s OU.',
        stem: 'It is self-limiting, so Nat offered CY the choice of a steroid to speed things up; he chose it. Plan: chloramphenicol 1% eye ointment to the right lower lid TDS for 1 week; fluorometholone (FML) 0.1% QID RE for 1 week; hand hygiene, no rubbing, and the steroid side effects explained. Lid wipes and warm compresses were held back until the next visit to help adherence. Review in 1 week, sooner (or Sydney Eye Hospital after hours) if worse.',
        steps: [
            {
                phase: '1. Safety check',
                type: 'mcq',
                critical: true,
                question: '“Before you give this young man a steroid, what must you have ruled out?”',
                options: [
                    'Active infection: HSV (dendrite, previous episodes), fungal or bacterial keratitis. The staining must be smaller than the infiltrate, the AC quiet, the pain mild, and the infiltrate small and peripheral.',
                    'A family history of glaucoma: a steroid cannot be given to anyone whose parent or sibling has glaucoma, so CY’s parents must be asked first and the drop withheld until it has been confirmed either way.',
                    'Any epithelial staining at all: a steroid is absolutely contraindicated whenever fluorescein shows even mild staining, so CY must wait until the cornea is completely clear before it can be started.',
                    'Recent travel to China: a steroid must not be started within six weeks of overseas travel, because imported adenovirus strains are resistant and spread rapidly through the stroma when steroid is given.'
                ],
                answer: 0,
                explain: 'A steroid on unrecognised infective keratitis, especially HSV epithelial disease, is the classic red-flag error. Mild staining smaller than the infiltrate is expected in marginal keratitis and is covered with an antibiotic; a family history of glaucoma is a reason to watch the IOP, not to withhold.'
            },
            {
                phase: '2. Treat or watch?',
                type: 'mcq',
                question: '“It’s self-limiting. Why treat at all, and was offering him the choice reasonable?”',
                options: [
                    'Yes. It settles in 2–3 weeks on its own, but a short soft steroid with antibiotic cover shortens the symptoms; with mild disease, a shared decision after explaining the steroid risks is good practice.',
                    'No. Marginal keratitis always needs a steroid, because without one the infiltrates go on to perforate in about a third of patients, so treatment should never be presented to the patient as optional.',
                    'No. A patient with an epithelial defect must never be given a choice: the law requires an optometrist to prescribe an antibiotic and steroid together for any corneal infiltrate seen in an Australian practice.',
                    'Yes, but only because the steroid is what treats the blepharitis: without FML the staph colonies on the lid would keep growing, so the steroid also prevents every recurrence once the course is over.'
                ],
                answer: 0,
                explain: 'Matching treatment to severity is the point: lid hygiene alone may do for a small infiltrate; a steroid speeds resolution of a symptomatic one. The steroid doesn’t touch the blepharitis, which is why the long-term plan is lid hygiene.'
            },
            {
                phase: '3. Why both drugs',
                type: 'mcq',
                question: '“Why chloramphenicol as well as FML, and why FML rather than prednisolone?”',
                options: [
                    'There was some epithelial staining, so the antibiotic covers the defect and lowers the staph load while a steroid is used. FML is a soft steroid with fewer IOP rises, enough for small peripheral infiltrates.',
                    'Chloramphenicol stops FML from being absorbed into the bloodstream, and FML is the only steroid available in Australia that can be used at the same time as an antibiotic eye ointment without them reacting.',
                    'The antibiotic is the main treatment because the infiltrates are infected. FML is added only to stop the ointment stinging, and prednisolone acetate is never used for any kind of keratitis in an optometric practice.',
                    'FML was chosen because it penetrates the cornea better than prednisolone acetate, and the chloramphenicol is needed to stop the FML suspension growing bacteria in the bottle after it has been opened.'
                ],
                answer: 0,
                explain: 'Combination steroid–antibiotic treatment is standard when there is any staining. Prednisolone acetate 1% penetrates better and is stronger: kept for more severe marginal disease or uveitis. A combination drop (e.g. Tobradex or Sofradex) is an alternative. FML is now a private script in Australia (off the PBS since August 2024).'
            },
            {
                phase: '4. Drops and ointment',
                type: 'mcq',
                question: '“He’s using a drop and an ointment. How do you tell him to use them together?”',
                options: [
                    'FML first: shake it, one drop, close the eye or press the inner corner. Wait at least 5 minutes, then the ointment last, because ointment left in the eye blocks a drop put in after it from being absorbed.',
                    'Ointment first: about 1.5 cm into the lower lid, then wait an hour so it can coat the cornea, and put the FML drop straight on top so the ointment holds the steroid in contact with the cornea for longer.',
                    'Mix them: squeeze the ointment onto a clean fingertip, add one drop of FML, and rub the mixture along the lower lid margin, so that both treatments reach the lid and the cornea together in one step.',
                    'Alternate days: FML on Monday, Wednesday and Friday and the ointment on the other days, because using a steroid and an antibiotic on the same day stops the antibiotic from killing the bacteria.'
                ],
                answer: 0,
                explain: 'Drops before ointment, 5 minutes apart. Nat wrote “wait at least 5 minutes” on both but didn’t say which goes first, and the ointment instructions said both “on the lower lid margin” and “inside the lower lid”: in an oral, give one clear instruction (ointment on the lid margin also treats the blepharitis, which is a fair choice if you say so).'
            },
            {
                phase: '5. Lid hygiene',
                type: 'mcq',
                question: '“You held back the lid hygiene until week 1. Why, and would you do it again?”',
                options: [
                    'To keep the first week simple for a patient with patchy adherence. It is defensible, but lid hygiene is what prevents recurrence, so at least explain it on day 1 and start it as soon as he can manage it.',
                    'Because warm compresses are contraindicated while a steroid is being used, as the heat raises the IOP and doubles the risk of a steroid response, so lid hygiene can only start once the FML has been stopped.',
                    'Because tea tree lid wipes inactivate chloramphenicol on contact, so the wipes can only be used once the antibiotic course is complete; otherwise both treatments fail and the infiltrates become infected.',
                    'Because lid hygiene is only for posterior blepharitis. Anterior blepharitis responds to antibiotics alone, so the lid wipes were added at week 1 for his dry eye symptoms, not for the marginal keratitis.'
                ],
                answer: 0,
                explain: 'His history (improved on a pharmacy antibiotic, then relapsed) shows what happens if the blepharitis is left alone. Lid hygiene (warm compresses, lid scrubs or wipes) is the long-term treatment for both anterior and posterior blepharitis. Nothing stops it being used alongside the drops.'
            },
            {
                phase: '6. One week',
                type: 'reveal',
                text: 'Full adherence; no symptoms. VA 6/6 OU. IOP R 13, L 12 mmHg. Right: G3 temporal and nasal hyperaemia, infiltrates resolved, no staining. Lids unchanged (anterior blepharitis, G2 telangiectasia), TBUT 3 s OU. AC quiet. Plan: stop chloramphenicol; FML TDS 3 days, BD 2 days, daily 2 days then stop; warm compress 10 min BD and Blephadex (tea tree) lid wipes BD, long-term. Review in 1 week (Nat’s placement ended before it).'
            },
            {
                phase: '7. Taper and follow-up',
                type: 'multi',
                question: '“What should happen from here?” Select all that apply.',
                options: [
                    'Recheck IOP at the next review: a steroid response can take 2–6 weeks to appear, so one normal reading at week 1 isn’t the end of it',
                    'Stop the antibiotic now the epithelium has healed: there’s no reason to keep it going',
                    'Assess the meibomian glands and treat MGD too, given the TBUT of 3 s in both eyes',
                    'Keep up lid hygiene indefinitely and tell him a recurrence is likely if he stops',
                    'Return the same day if pain, redness, photophobia or blur come back',
                    'Continue chloramphenicol ointment nightly for 3 months to stop the staph coming back'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'A short taper is fine for a 2-week course of a soft steroid; the point is to check the IOP after it and see him once the steroid is off. Long-term topical antibiotic invites resistance; lid hygiene is the prevention. The marker wanted the meibomian glands mentioned.',
                marker: 'Management including follow-up: “Appropriate. Mentioning posterior blepharitis/status of the meibomian glands in the case report even briefly would have been ideal.”'
            },
            {
                phase: '8. Recurrent cases',
                type: 'mcq',
                question: '“If he keeps getting it despite lid hygiene, what’s next?”',
                options: [
                    'Ask the GP for an oral tetracycline (e.g. doxycycline 50–100 mg daily for 6–12 weeks) for its anti-inflammatory effect on the lids; azithromycin if a tetracycline is unsuitable (children, pregnancy, breastfeeding).',
                    'Prescribe oral doxycycline 100 mg twice daily for a year yourself on an optometric S4 script, as it is the only treatment that eradicates staph from the lid margin and is safe at every age and in pregnancy.',
                    'Refer him for lid-margin surgery to remove the telangiectatic vessels, because recurrent marginal keratitis means the blood vessels themselves are carrying the staph antigen to the peripheral cornea.',
                    'Start a maintenance dose of prednisolone acetate 1% once daily for life, since recurrent marginal keratitis is an autoimmune disease and only a lifelong steroid will keep the cornea from scarring.'
                ],
                answer: 0,
                explain: 'Nat wrote doxycycline 100 mg BD; for blepharitis and MGD the usual course is lower (50–100 mg daily for 6–12 weeks), used for its anti-inflammatory and anti-lipase action. Tetracyclines are avoided under 8 years, in pregnancy and breastfeeding (they bind calcium in growing teeth and bone). Optometrists don’t prescribe oral antibiotics, so it goes through the GP.'
            },
            {
                phase: '9. Prognosis',
                type: 'viva',
                question: '“What’s the prognosis for CY?”',
                points: [
                    'Excellent for this episode: small peripheral infiltrates, resolved in a week, VA 6/6, no scarring expected',
                    'Recurrence is likely if the blepharitis isn’t controlled; low if he keeps up lid hygiene',
                    'Steroid risks with repeated or long courses: raised IOP, cataract, infection, delayed healing, so recheck IOP after the taper',
                    'Untreated chronic blepharitis can lead to madarosis, poliosis, lid thickening, corneal scarring, thinning and vascularisation',
                    'Long-term plan: lid hygiene, treat any MGD, and orals via the GP if recurrences continue',
                    'He was seen by another clinician for the next review: say what you’d expect them to find'
                ],
                explain: 'Nat gave a clear statement for the patient (“excellent”), which is what markers want. If asked about a steroid response, the answer is to stop or reduce the steroid and treat the pressure if needed; avoid a prostaglandin while the eye is inflamed.',
                marker: 'Conclusion: “Succinct.” References: “A adequate list of relevant references.”'
            }
        ]
    }
);
