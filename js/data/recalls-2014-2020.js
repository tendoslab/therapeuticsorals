// Cases from the 2014–2020 past exam notes (Past Papers/Past Exams 2014-2020/Untitled 1–17.pdf): topic-by-topic
// notes that collect candidates' recalls from the 2014 (Alex), 2018 (Joseph, Dolly, Jason, Anna, Leo, Tyson),
// 2019 (Monday to Thursday) and 2020 (Monday and Tuesday) sittings, with examiners Lily, Anna, Fiona Stapleton,
// Kath Watt, Angelica Ly and Michael Kalloniatis named in places. The 2018 and 2019 questions the site already
// covers (recalls-2018.js, recalls-2019.js and the topic files) are left out. The notes contain some errors,
// which are corrected in the "Recall check" boxes.
window.CASES.push(
    // ------------------------------------------------------------------ 2020: glaucoma
    {
        id: 'r2020-ntg-workup',
        category: 'glaucoma',
        title: 'POAG or NTG? Why It Matters',
        theme: 'Normal-Tension Glaucoma Work-up',
        years: ['2020'],
        patient: 'Adult with glaucomatous cupping and field loss; IOP 12 mmHg in both eyes (2020 Monday).',
        stem: '“Why is it clinically important to differentiate between POAG and NTG?”',
        steps: [
            {
                phase: '1. Why it matters',
                type: 'mcq',
                question: '“Why is it clinically important to tell POAG and NTG apart?”',
                options: [
                    'NTG is a diagnosis of exclusion: damage at normal IOP means ruling out compressive, vascular and secondary causes first. It also changes the target (CNTGS: 30% lower) and the risks to manage.',
                    'It doesn’t change anything: both are treated with the same 20% IOP reduction from the same first-line drop, so the label only matters for the patient’s records and has no effect on management.',
                    'NTG never progresses without treatment, so telling them apart lets you stop all drops in NTG and just repeat the fields every two years; POAG is the only form that needs to be treated.',
                    'POAG is inherited and NTG is not, so the distinction decides whether the patient’s children need screening; NTG relatives can be reassured that they carry no extra risk of glaucoma.'
                ],
                answer: 0,
                explain: 'In CNTGS, about half of untreated NTG eyes didn’t progress in 5 years, so confirm progression or high-risk features before treating. Risk factors for progression there: female sex, migraine and disc haemorrhages.'
            },
            {
                phase: '2. NTG work-up',
                type: 'multi',
                question: '“What is your work-up for normal-tension glaucoma?” Select what belongs.',
                options: [
                    'IOP phasing (diurnal curve) to catch peaks missed in clinic',
                    'CCT: a thin cornea makes applanation read low',
                    'Gonioscopy for intermittent angle closure, angle recession or pigment',
                    'A 10-2 field as well as the 24-2: NTG defects often sit close to fixation',
                    'Ask about nocturnal hypotension, BP tablets at night, migraine, Raynaud’s, sleep apnoea, past shock or blood loss',
                    'Look for features that don’t fit glaucoma (pallor beyond the cup, defects respecting the vertical midline, young age, poor VA) and refer for neuro-imaging if present',
                    'Start a PGA straight away at the first visit, since NTG always progresses quickly without one'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Pallor out of proportion to cupping, a field that respects the vertical midline, or reduced VA or colour vision point to a compressive lesion, not glaucoma.'
            },
            {
                phase: '3. Secondaries at IOP 12',
                type: 'multi',
                question: '“What secondary glaucomas are possible with IOPs of 12?” Select the ones that can show damage with a normal IOP on the day.',
                options: [
                    'Intermittent angle closure (pressure spikes between visits)',
                    'Burnt-out pigmentary glaucoma (pigment release settles with age)',
                    'Past steroid-induced glaucoma, now off the steroid',
                    'Posner–Schlossman between attacks',
                    'Old angle recession or a past uveitic pressure rise',
                    'Acute angle closure in progress'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Each of these can leave glaucomatous damage after the pressure has come back to normal. An attack in progress would show a high IOP, not 12.'
            },
            {
                phase: '4. NTG vs PACG treatment',
                type: 'mcq',
                question: '“How does treatment differ between PACG and NTG?”',
                options: [
                    'PACG treats the mechanism first: laser iridotomy or lens extraction (EAGLE), then drops if needed. NTG has an open angle: lower IOP 30% (CNTGS) with a PGA and manage vascular risk.',
                    'They are treated the same way: pilocarpine 2% QID in both, because miotics open the angle in PACG and improve optic nerve blood flow in NTG, and no laser or surgery is needed in either type.',
                    'PACG is treated with a PGA alone and NTG with an iridotomy, since NTG is caused by intermittent pupil block that only shows at night, when the angle closes and IOP rises out of clinic hours.',
                    'Neither is treated by an optometrist: both need trabeculectomy as the first step, because drops don’t lower the IOP enough in angle closure or in NTG to make any difference to progression.'
                ],
                answer: 0,
                explain: 'In NTG avoid evening β-blockers, which can lower night-time BP and optic nerve perfusion. Brimonidine had less progression than timolol in LoGTS.'
            }
        ]
    },
    {
        id: 'r2020-iop-check',
        category: 'glaucoma',
        title: 'Covering a Colleague’s Glaucoma Patient',
        theme: 'Records, Target IOP and OBA Referral',
        years: ['2020'],
        patient: 'A glaucoma patient you have never seen, booked in for an IOP check on behalf of your colleague (2020 Monday).',
        stem: '“What do you hope to see on the record card beforehand?”',
        steps: [
            {
                phase: '1. The record card',
                type: 'multi',
                question: '“What do you hope to see on the record card? Why is medical history relevant? What should the disc assessment say?” Select what should be there.',
                options: [
                    'Diagnosis, stage and date of diagnosis, with baseline IOP (untreated) and the target IOP',
                    'Current drops: name, concentration, eye, dose and time of last instillation',
                    'Medical history and medications (asthma, heart block, BP tablets, steroid use), because they decide which drops are safe',
                    'Disc assessment: disc size, vertical C/D, rim (ISNT, notches), haemorrhages, PPA, with photos or OCT for comparison',
                    'Baseline fields and OCT, gonioscopy result and CCT',
                    'The ophthalmologist’s name and co-management plan',
                    'Only the last IOP reading, since the rest of the record can be checked on the next visit'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Without the baseline and target IOP you can’t say whether today’s reading is good enough. Medical history matters because β-blockers, CAIs and brimonidine each have systemic contraindications.'
            },
            {
                phase: '2. IOP 27, now 23',
                type: 'mcq',
                question: 'Untreated IOP was 27 mmHg; today on treatment it is 23. “What would you do? What is the importance of target IOP?”',
                options: [
                    'That is only a 15% fall, short of a 20–30% target, so check adherence and technique, then add or switch drops. The target is the IOP at which this patient is expected to stop progressing.',
                    'Nothing: any fall in IOP shows the drop is working, and targets are only for research studies, so the patient carries on at the same dose and is reviewed again in 12 months as usual.',
                    'Stop the drop, because 23 mmHg is in the normal range and further treatment would only add side effects; restart it only if the IOP rises back above 27 again at a later visit.',
                    'Refer for trabeculectomy that day, since any IOP above 21 mmHg on treatment means drops have failed and the patient needs surgery straight away, before the next visit.'
                ],
                answer: 0,
                explain: 'A target is individual (stage, rate of progression, life expectancy) and is reset if the patient progresses at it. Recheck at about the same time of day as the baseline reading.'
            },
            {
                phase: '3. Timing the check',
                type: 'mcq',
                question: '“When should the IOP check be scheduled compared with the previous appointment? Why 4–6 weeks?”',
                options: [
                    'At the same time of day as earlier readings (IOP varies through the day), 4–6 weeks after a new or changed drop, when its full effect is reached and early side effects have shown.',
                    'At any time of day, since IOP stays the same around the clock; 4–6 weeks is simply how long a bottle of drops lasts, so the check is booked when the patient comes back to buy more.',
                    'First thing in the morning only, before any drops are put in, and 6 months later, since drops take 6 months to reach their full effect and checking earlier gives a falsely high reading.',
                    'In the evening at 6 pm, when IOP is lowest, and 2 days after the change, since all glaucoma drops reach their full effect within 48 hours and side effects appear only after a month.'
                ],
                answer: 0,
                explain: 'PGAs take a few weeks to reach their full effect. Ask when the last drop was put in, so a trough reading isn’t mistaken for failure.'
            },
            {
                phase: '4. A new field defect',
                type: 'mcq',
                critical: true,
                question: 'You start a combination drop. At 4 weeks there is a new field defect where the field was clear. “What do you do? What are the OBA guidelines for referral?”',
                options: [
                    'Repeat the field to confirm, and refer: progression on treatment needs an ophthalmologist. OBA: starting glaucoma treatment means referring within 4 months, and sooner if it progresses.',
                    'Carry on as before and repeat the field in 12 months, since a single new defect is never real; the OBA guidelines say glaucoma patients only need referral if they lose central vision.',
                    'Add a third and a fourth drop and review in 6 months; the OBA guidelines allow optometrists to manage glaucoma on their own indefinitely, so there is no need to refer at any point.',
                    'Stop all drops and refer to the GP, since a new defect on a combination drop means it is caused by a drug side effect; the OBA guidelines require GP referral for any glaucoma progression.'
                ],
                answer: 0,
                explain: 'Refer sooner, not at 4 months, for progression, uncertain diagnosis, secondary or angle-closure glaucoma, advanced loss, target not met on two drops, or drop intolerance.',
                recall: '“What does referring within 4 months look like clinically?” A letter to the ophthalmologist with the diagnosis, baseline findings, treatment and target IOP, an appointment made within 4 months of starting treatment, and a shared plan agreed for who sees the patient when.'
            },
            {
                phase: '5. No appointment for 2 years',
                type: 'viva',
                question: '“What do you do if this patient can’t be seen by an ophthalmologist for the next 2 years?”',
                points: [
                    'Don’t accept the wait: phone the ophthalmologist, explain the progression and ask for an earlier appointment or a written plan',
                    'Try other routes: a public hospital glaucoma clinic, another ophthalmologist, telehealth or shared-care schemes',
                    'Meanwhile keep monitoring closely (IOP, fields, OCT) and adjust treatment within your scope',
                    'Document every attempt to refer and the advice given, and tell the patient why it matters'
                ],
                explain: 'The duty of care stays with you until the patient is seen. Writing down each attempt to refer protects the patient and you.'
            }
        ]
    },
    {
        id: 'r2020-fhx-preperimetric',
        category: 'glaucoma',
        title: 'Family History, Thinning RNFL and Clear Fields',
        theme: 'Pre-perimetric Glaucoma and Choosing a Drop',
        years: ['2020'],
        patient: 'Adult with a family history of glaucoma (2020 Monday).',
        stem: '“Family history of glaucoma: what do you do? Name the tests and the reason for each.”',
        steps: [
            {
                phase: '1. Tests and why',
                type: 'match',
                question: 'Match each test to the reason you do it.',
                pairs: [
                    { label: 'Tonometry (and phasing)', answer: 'Raised IOP is the main modifiable risk factor; phasing catches peaks' },
                    { label: 'Pachymetry', answer: 'Thin corneas make applanation read low and are an independent risk factor (OHTS)' },
                    { label: 'Gonioscopy', answer: 'Open or closed angle, and secondary causes such as pigment, PXF or recession' },
                    { label: 'OCT RNFL / GCL', answer: 'Structural loss, which often comes before field loss' },
                    { label: '24-2 threshold field', answer: 'Functional loss, and a baseline for progression analysis' }
                ],
                distractors: ['Shows the blood pressure at the optic nerve head directly'],
                explain: 'Stereo disc photos give a baseline too. Ask which relative, how old they were at diagnosis, and how much sight they lost.'
            },
            {
                phase: '2. IOP 23/24, asymmetric cups',
                type: 'reveal',
                text: 'IOP R 23, L 24 mmHg. Some difference in C/D ratio between the eyes. Fields clear. OCT done. Review: everything the same, except the OCT now shows RNFL thinning. Still no field defect.'
            },
            {
                phase: '3. Treat?',
                type: 'mcq',
                question: '“The patient comes back with the same findings, except the RNFL has thinned. No field defect. What do you do?”',
                options: [
                    'Treat: repeatable structural progression with raised IOP and a family history is pre-perimetric glaucoma. Confirm the OCT change is real, then start a drop with a target 20–25% lower.',
                    'Don’t treat until a field defect appears, since glaucoma can only be diagnosed and treated once there is a repeatable defect on the 24-2; RNFL thinning alone never justifies drops.',
                    'Refer for an MRI, since RNFL thinning without a field defect can only be caused by a compressive lesion; glaucoma always shows field loss before any thinning appears on OCT.',
                    'Reassure and discharge: RNFL thinning on OCT is age-related in everyone, so it means nothing in a patient whose IOP is under 25 mmHg and whose fields are clear.'
                ],
                answer: 0,
                explain: 'Up to 30–50% of ganglion cells can be lost before standard fields show a defect. Check the scan quality and segmentation before calling it progression.'
            },
            {
                phase: '4. Drop, dose and contraindications',
                type: 'mcq',
                question: '“What drop would you give? Contraindications and dosage of a PGA?”',
                options: [
                    'Latanoprost 0.005% one drop at night in both eyes. Take care with active uveitis, CME risk, past HSV keratitis and pregnancy; warn about lash growth, iris darkening and redness.',
                    'Latanoprost 0.5% one drop four times a day in both eyes. Contraindicated in asthma and heart block, because PGAs slow the heart; warn the patient about tiredness and cold hands and feet.',
                    'Latanoprost 0.005% one drop in the morning in the worse eye only. Contraindicated in sulfonamide allergy and kidney stones; warn the patient about pins and needles in the hands and feet.',
                    'Latanoprost 0.05% one drop twice a day in both eyes. Contraindicated in children under 2 and with MAOIs, because of CNS depression; warn the patient about drowsiness and a dry mouth.'
                ],
                answer: 0,
                explain: 'Asthma and heart block are β-blocker contraindications; sulfonamide allergy is for CAIs; children under 2 and MAOIs are for brimonidine.'
            },
            {
                phase: '5. Herpes, heart and lungs',
                type: 'mcq',
                question: '“They had herpes 25 years ago: what would you give? And if they have heart and lung problems?”',
                options: [
                    'Past HSV keratitis is a precaution, not a bar: a PGA can be used with counselling and review (or a CAI or brimonidine). With heart and lung disease avoid timolol; use a PGA, CAI, brimonidine or SLT.',
                    'Any history of herpes rules out every glaucoma drop for life, so refer for trabeculectomy; heart and lung problems don’t matter, because eye drops don’t get into the bloodstream in amounts that matter.',
                    'Past herpes means timolol is the only safe drop, since β-blockers have an antiviral effect; with heart and lung disease, timolol is still the drop of choice because it protects the heart and the airways.',
                    'Give oral aciclovir for life before any drop can be used; with heart and lung disease, switch to oral acetazolamide 250 mg QID long term, since tablets are safer for the heart than eye drops.'
                ],
                answer: 0,
                explain: 'Topical timolol is absorbed through the nasal mucosa and bypasses first-pass metabolism, so it can cause bronchospasm and bradycardia. Punctal occlusion reduces this.'
            }
        ]
    },
    {
        id: 'r2020-low-iop-progressing',
        category: 'glaucoma',
        title: 'First Glaucoma Assessment at IOP 11',
        theme: 'NTG Staging, Progression and Target',
        years: ['2020'],
        patient: 'Adult attending a first glaucoma assessment. IOP 11 mmHg (2020 Monday).',
        stem: 'Photo of the optic nerve head.',
        exhibit: 'Disc photo: enlarged cup with inferior rim thinning.',
        steps: [
            {
                phase: '1. Describe the disc',
                type: 'multi',
                question: '“Describe the image.” Select what you comment on.',
                options: [
                    'Disc size (judged against the disc-to-fovea distance or a slit beam, not guessed)',
                    'Vertical C/D ratio and rim thickness by sector (ISNT rule), notches',
                    'Disc haemorrhages',
                    'Peripapillary atrophy (beta zone)',
                    'Vessels: bayoneting, baring of circumlinear vessels, nasalisation',
                    'Rim colour: pallor beyond the cup would point away from glaucoma',
                    'The IOP, read off the disc colour'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Pallor out of proportion to the cup suggests a non-glaucomatous neuropathy. IOP can’t be judged from a disc photo.'
            },
            {
                phase: '2. Stage it',
                type: 'mcq',
                question: 'The 24-2 shows an inferior arcuate defect with an MD of −8 dB. “Describe and stage the glaucoma.”',
                options: [
                    'Moderate on the Hodapp–Parrish–Anderson (Mills 2006) scale: MD between −6 and −12 dB, no point within the central 5° below 15 dB, and only one hemifield within 5° below 0 dB.',
                    'Early on the Hodapp–Parrish–Anderson scale, since early glaucoma runs down to an MD of −20 dB and only a defect that splits fixation counts as moderate or as advanced.',
                    'Advanced on the Hodapp–Parrish–Anderson scale, since any arcuate defect is advanced; MD isn’t used in the staging, only the shape of the defect on the grey-scale.',
                    'End-stage, since an MD worse than −6 dB means only a central or temporal island of vision is left, and the field test can no longer be used to follow the patient.'
                ],
                answer: 0,
                explain: 'Hodapp: early MD better than −6 dB; moderate −6 to −12 dB; advanced worse than −12 dB or with central involvement. Check the central points as well as the MD.'
            },
            {
                phase: '3. Worse in 6 months',
                type: 'mcq',
                question: '“In 6 months the field is worse. How can you check progression if no progression analysis is available?”',
                options: [
                    'Confirm it with a repeat field, then compare point by point on the pattern deviation plots: a cluster of points worse by about 5 dB or more on repeat tests, or a falling MD or VFI over time.',
                    'Compare the grey-scale printouts only, since the grey-scale is the most accurate part of the printout; if the grey patch looks larger, the glaucoma has progressed and nothing more needs checking.',
                    'Look at the fixation losses: if fixation losses have gone up, the field has progressed, because glaucoma damages fixation first; a single test is enough to show it.',
                    'Progression can’t be judged without the instrument’s software, so do nothing and wait for a machine with Guided Progression Analysis before deciding on any treatment.'
                ],
                answer: 0,
                explain: 'Defects usually deepen before they widen. Rule out learning effects, cataract (which depresses the total deviation) and poor reliability first.',
                recall: 'Another 2018 candidate said “a 10 dB decrease” is progression. There is no single number, but GPA flags points that worsen beyond test–retest variability (about p < 0.05) on 2 or 3 consecutive tests.'
            },
            {
                phase: '4. Diagnosis and drop',
                type: 'mcq',
                question: '“What is your diagnosis and management: drug, concentration, dose, contraindications? What is your target IOP?”',
                options: [
                    'Progressing NTG. Latanoprost 0.005% at night in both eyes; care with uveitis, CME risk and past HSV. Target 30% below baseline (CNTGS), about 7–8 mmHg, and refer for co-management.',
                    'OHT, since the IOP is normal. Timolol 0.5% twice a day in both eyes, including at night; no contraindications apply. Target 21 mmHg, which the patient already meets, so no change is needed.',
                    'POAG. Pilocarpine 2% QID in both eyes; contraindicated only in asthma. Target is any IOP under 21 mmHg, since glaucoma can’t progress below that level whatever the starting pressure was.',
                    'Optic neuritis, since the IOP is normal. Prednisolone 1% QID in both eyes; contraindicated only in diabetes. No target is needed, as optic neuritis isn’t affected by IOP at all.'
                ],
                answer: 0,
                explain: 'In NTG, avoid night-time β-blockers (nocturnal hypotension). Brimonidine is an alternative.'
            },
            {
                phase: '5. Too low?',
                type: 'multi',
                question: '“What are some problems of too low an IOP?” Select the real ones.',
                options: [
                    'Hypotony maculopathy: chorioretinal folds and reduced vision (mostly after filtering surgery)',
                    'Choroidal effusion or detachment',
                    'Shallow anterior chamber and corneal folds',
                    'More drops and side effects than the patient needs, which hurts adherence',
                    'A higher risk of glaucoma progression the lower the IOP goes'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Hypotony (usually below about 5–6 mmHg) is a surgical problem rather than a drop problem, but an over-aggressive target also costs side effects and adherence.'
            }
        ]
    },
    {
        id: 'r2020-arg-trauma',
        category: 'glaucoma',
        title: 'IOP 25 and 19: the Forgotten Cricket Ball',
        theme: 'Angle-Recession Glaucoma',
        years: ['2020'],
        patient: 'First-time patient. IOP R 25, L 19 mmHg (2020 Monday).',
        stem: '“What is your work-up?”',
        steps: [
            {
                phase: '1. Why a 24-2?',
                type: 'mcq',
                question: '“Why do we do a 24-2?”',
                options: [
                    'It tests the central 24° (30° nasally) at 6° spacing, where nasal steps, arcuates and paracentral loss start, and gives the threshold data that progression analysis needs.',
                    'It tests the whole 90° field, which is needed because glaucoma always starts in the far periphery; the 24-2 is the only test that reaches far enough out to find it in its early stages.',
                    'It is a screening test that only shows seen or not seen, which is quicker than a threshold test and is all you need, since threshold values add nothing to diagnosing glaucoma.',
                    'It tests only the central 10° at 2° spacing, since glaucoma always starts at fixation; peripheral defects are never caused by glaucoma, so there is no need to test the rest.'
                ],
                answer: 0,
                explain: 'Add a 10-2 if there is or may be central involvement.'
            },
            {
                phase: '2. Results',
                type: 'reveal',
                text: 'Right eye: superior rim thinning with a matching inferior arcuate defect. Gonioscopy right: an irregularly widened ciliary body band in places, with a few torn iris processes. Left eye: normal. On questioning, he was hit in the right eye by a cricket ball as a teenager.'
            },
            {
                phase: '3. History and diagnosis',
                type: 'mcq',
                question: '“What glaucoma history questions should you ask? What is the most likely diagnosis?”',
                options: [
                    'Ask about trauma, past surgery or inflammation, steroids and family history. Unilateral high IOP, a matching defect and a widened ciliary body band: angle-recession glaucoma.',
                    'Ask only about family history, since trauma has no link with glaucoma. The widened band is a normal finding in young people, so this is POAG that happens to be worse in the right eye.',
                    'Ask about headaches and nausea. The torn iris processes show that the angle closed during an attack, so this is chronic angle closure, and the patient needs laser iridotomy in both eyes.',
                    'Ask about contact lens wear. The inferior arcuate is from a lens-related corneal scar, and the high IOP is from rubbing the eye; this isn’t glaucoma, so the patient can be discharged.'
                ],
                answer: 0,
                explain: 'Compare the same quadrant in both eyes and different quadrants in each eye: recession is easiest to see by comparison.'
            },
            {
                phase: '4. 1 week vs 30 years',
                type: 'mcq',
                question: '“How is the presentation different 1 week after trauma compared with 30 years after?”',
                options: [
                    'At 1 week: hyphaema, traumatic iritis or a swollen meshwork, with an early IOP rise (or a low IOP). Decades later: a quiet white eye with chronic unilateral glaucoma from a scarred meshwork.',
                    'They look the same: at 1 week and at 30 years the eye is red and painful, with a hyphaema and a fixed pupil, because angle recession keeps bleeding for the rest of the patient’s life.',
                    'At 1 week the IOP is always normal and the glaucoma appears only after 30 years; nothing at all can be seen in the eye in the first weeks, so a patient hit in the eye needs no early check.',
                    'At 1 week the patient has glaucoma, which then resolves on its own; after 30 years the meshwork has healed, so the IOP is always lower in the injured eye than in the other eye.'
                ],
                answer: 0,
                explain: 'Glaucoma risk rises with more than 180° of recession; about 6–9% of eyes with recession develop glaucoma, with an early peak (first year) and a late one (10+ years).'
            },
            {
                phase: '5. Drops for ARG',
                type: 'mcq',
                question: '“What drops would you prescribe for this ARG patient?”',
                options: [
                    'A PGA first (it uses uveoscleral outflow, bypassing the damaged meshwork), then add timolol, a CAI or brimonidine. Avoid pilocarpine: it cuts uveoscleral outflow and can raise IOP.',
                    'Pilocarpine 2% QID first, since miotics pull open the damaged meshwork and work best in angle recession; avoid PGAs, which are contraindicated in any eye that has ever been injured.',
                    'Prednisolone 1% QID, since angle-recession glaucoma is an inflammatory glaucoma; once the inflammation settles the IOP comes down, so no glaucoma drop is needed at all.',
                    'Atropine 1% BD, since cycloplegia opens the angle; glaucoma drops don’t work in angle recession because the meshwork is scarred, so atropine is the only option short of surgery.'
                ],
                answer: 0,
                explain: 'Laser trabeculoplasty works poorly in recessed angles, and trabeculectomy fails more often (more scarring), so antimetabolites are often used if surgery is needed.'
            },
            {
                phase: '6. The other eye',
                type: 'mcq',
                question: '“Would you treat the other eye, with an IOP of 19 and clear fields?”',
                options: [
                    'No: normal IOP, disc and field, and no recession. But the fellow eye can still develop glaucoma (some patients are predisposed), so check it at every visit.',
                    'Yes: once one eye has angle-recession glaucoma, the other always develops it, so both eyes should be treated from the start to prevent the same damage in the second eye.',
                    'Yes: treating only one eye causes a cosmetic difference in lashes and iris colour, so a PGA should go in both eyes in all cases, even when the second eye is completely normal.',
                    'No, and it never needs checking again, since trauma to one eye has no bearing on the other eye; the patient can have the fellow eye examined every 5 years like anyone else.'
                ],
                answer: 0,
                explain: 'Up to half of patients with unilateral angle-recession glaucoma develop open-angle glaucoma in the other eye over time, which suggests a predisposition.'
            }
        ]
    },
    {
        id: 'r2020-slt-vs-drops',
        category: 'glaucoma',
        title: 'IOP 26, Diabetes and a Family History',
        theme: 'SLT vs Drops; Field Indices',
        years: ['2020'],
        patient: '55-year-old man with diabetes and a family history of glaucoma. IOP 26 mmHg (2020 Tuesday).',
        stem: '“What is your work-up? What is your therapeutic management and target pressure?”',
        steps: [
            {
                phase: '1. Target',
                type: 'mcq',
                question: 'Work-up confirms early POAG in both eyes. “What is your therapeutic management and target pressure?”',
                options: [
                    'A first-line PGA (or SLT) with a target of about 20–25% below baseline (EMGT: 25% lowering halved progression risk), so around 19–20 mmHg, then reset the target if he progresses.',
                    'Oral acetazolamide 250 mg QID long term, with a target of 10 mmHg, since diabetes makes the optic nerve so fragile that only a very low pressure can protect it from further loss.',
                    'No treatment until the field loss reaches the central 10°, with a target of 21 mmHg, since early glaucoma doesn’t progress in a patient who is younger than 60 years old.',
                    'Pilocarpine 2% four times a day as the first drop, with a target of 15 mmHg, since miotics are the first-line treatment for open-angle glaucoma in patients with diabetes.'
                ],
                answer: 0,
                explain: 'Each 1 mmHg lower IOP cut the risk of progression by about 10% in EMGT. Ask the GP about diabetic and BP control too.'
            },
            {
                phase: '2. SLT vs drops',
                type: 'mcq',
                question: '“SLT vs drops?”',
                options: [
                    'LiGHT: first-line SLT kept about three-quarters of patients drop-free at 3 years, at target as often as drops, with fewer needing surgery. Its effect can wear off; it can be repeated.',
                    'SLT is never first-line: LiGHT showed it lowers IOP less than any drop, and it scars the meshwork, so it can only be done once, as a last resort before trabeculectomy.',
                    'SLT and drops can’t be compared, since SLT only works in angle closure; in open-angle glaucoma it has no effect on IOP and is only done to open the angle before cataract surgery.',
                    'Drops are always better: LiGHT showed SLT works for only a few weeks and then raises the IOP permanently above the untreated level, so patients need more drops afterwards.'
                ],
                answer: 0,
                explain: 'SLT suits patients with adherence problems, drop allergy or contraindications, or who prefer not to use drops. It needs an open angle with a visible meshwork.'
            },
            {
                phase: '3. Alpha agonists',
                type: 'multi',
                question: '“What are the contraindications for alpha agonists?” Select the ones for brimonidine.',
                options: [
                    'MAOI use (risk of hypertensive crisis)',
                    'Children under 2 years (CNS depression, apnoea), and use caution in older children',
                    'Caution with tricyclic antidepressants, severe cardiovascular disease, depression, and other CNS depressants',
                    'Known allergy (follicular conjunctivitis and lid reaction in up to about 1 in 5 long-term users)',
                    'Asthma, as brimonidine causes bronchospasm',
                    'Sulfonamide allergy'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Bronchospasm is a β-blocker problem; sulfonamide allergy is a CAI one. Brimonidine’s common side effects are dry mouth, tiredness and allergic follicular conjunctivitis.'
            },
            {
                phase: '4. TD vs PSD',
                type: 'mcq',
                question: '“What is the difference between total and pattern standard deviation?”',
                options: [
                    'Total deviation compares each point with age-matched normals, so cataract lowers it everywhere. Pattern deviation removes that general loss, so local glaucomatous loss stands out.',
                    'Total deviation measures how many fixation losses there were and pattern deviation measures false positives, so together they show whether the test is reliable, not whether there is any field loss.',
                    'They are the same plot printed twice: one in decibels and one as probability symbols; pattern deviation is just the total deviation rounded to the nearest whole number of decibels.',
                    'Total deviation is the patient’s raw threshold at each point and pattern deviation is the threshold from the last visit, so the difference between them shows how far the glaucoma has progressed.'
                ],
                answer: 0,
                explain: 'MD summarises the total deviation (overall depression); PSD summarises how uneven the loss is. A high PSD with a moderate MD fits localised glaucomatous loss.'
            }
        ]
    },
    {
        id: 'r2020-aac-diamox',
        category: 'glaucoma',
        title: 'Angle Closure First Aid and Diamox',
        theme: 'Acute Angle Closure',
        years: ['2020'],
        patient: 'Older adult with a sudden painful red eye, blurred vision and haloes (2020 Tuesday).',
        stem: '“What are your differentials and how would you rule them out?”',
        exhibit: 'Photo: red eye with a hazy cornea and a mid-dilated, oval pupil.',
        steps: [
            {
                phase: '1. Rule them out',
                type: 'match',
                question: 'Match each differential to how you rule it in or out.',
                pairs: [
                    { label: 'Acute angle closure', answer: 'Closed angle on gonioscopy (or in the fellow eye), IOP often 40–80, fixed mid-dilated pupil' },
                    { label: 'Posner–Schlossman', answer: 'Open angle, very high IOP but a white eye, a few fine KPs, minimal cells' },
                    { label: 'Acute anterior uveitis', answer: 'Open angle, many AC cells and flare, small pupil, IOP usually low or normal' },
                    { label: 'Neovascular glaucoma', answer: 'Vessels on the iris and in the angle, history of diabetes or vein occlusion' }
                ],
                distractors: ['Dendrite with terminal bulbs and reduced corneal sensation'],
                explain: 'If the cornea is too oedematous for gonioscopy, look at the other eye’s angle and use anterior OCT if available.'
            },
            {
                phase: '2. First aid',
                type: 'mcq',
                critical: true,
                question: '“What is first aid for angle closure?”',
                options: [
                    'Timolol 0.5%, brimonidine 0.2% and a topical CAI a few minutes apart; oral acetazolamide 500 mg via a doctor if safe; pred forte if inflamed; recheck IOP; same-day ophthalmologist.',
                    'Dilate the pupil with tropicamide and phenylephrine to break the pupil block, then send the patient home with paracetamol and book a routine review in a week to recheck the IOP.',
                    'Latanoprost 0.005% one drop straight away, since PGAs lower IOP the most; review in 4 weeks to see the full effect before referring, since an ophthalmologist won’t act on the first reading.',
                    'Pilocarpine 4% every 5 minutes for an hour as the only treatment, since miotics alone always break an attack at any IOP; nothing else is needed and referral isn’t necessary if it works.'
                ],
                answer: 0,
                explain: 'Pilocarpine 2% only after the IOP is coming down (the ischaemic sphincter doesn’t respond above about 40–50 mmHg) and with the ophthalmologist’s agreement.'
            },
            {
                phase: '3. Why not a PGA?',
                type: 'mcq',
                question: '“Why not PGA drops?”',
                options: [
                    'They act on uveoscleral outflow and take hours to reach peak effect (8–12 h), so they are too slow for an emergency, and they are pro-inflammatory in an eye that is already inflamed.',
                    'PGAs open the angle too quickly, which can tear the iris root; they would work well, but they are kept for the ophthalmologist to use in hospital, where the patient can be watched.',
                    'PGAs are contraindicated in all Asian patients, who make up most angle-closure cases; in other patients a PGA would be the first drop to use in an attack of angle closure.',
                    'PGAs constrict the pupil and lock the pupil block, making the attack worse; this is why pilocarpine should never be used in angle closure either, as it works the same way as a PGA.'
                ],
                answer: 0,
                explain: 'Aqueous suppressants (timolol, brimonidine, CAIs) act within an hour. Some ophthalmologists add a PGA later, but it isn’t first aid.'
            },
            {
                phase: '4. Diamox',
                type: 'multi',
                question: '“What are the contraindications and side effects of Diamox?” Select the true ones.',
                options: [
                    'Contraindicated in sulfonamide allergy',
                    'Contraindicated in severe kidney or liver disease, low sodium or potassium, and adrenal insufficiency',
                    'Caution with COPD or respiratory acidosis, diabetes, and with high-dose aspirin',
                    'Side effects: tingling in hands, feet and lips, frequent urination, tiredness, nausea, taste change, low potassium',
                    'Kidney stones and, rarely, blood dyscrasias or Stevens–Johnson syndrome',
                    'Contraindicated in asthma, because it causes bronchospasm'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Vomiting can stop it being absorbed by mouth, so the hospital gives it IV. CAIs cause metabolic acidosis, which is why COPD and diabetes need care; bronchospasm is a β-blocker effect.',
                recall: 'Examiner feedback in the notes: “vomiting in angle closure may preclude delivery of acetazolamide by mouth, IOP above 40 mmHg induces ischaemic paralysis of the iris limiting the effect of pilocarpine. Know your drug names, concentrations, doses and classes.”'
            }
        ]
    },
    {
        id: 'r2020-pxf-cataract',
        category: 'glaucoma',
        title: 'White Material on the Lens, Then Cataract Surgery',
        theme: 'Pseudoexfoliation: Gonioscopy and Surgery',
        years: ['2020'],
        patient: '65-year-old. White material seen on the lens (2020 Monday, Fiona).',
        stem: '“What is it and what are your differential diagnoses?”',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: '“What is it, and what are your differentials?” Select the reasonable differentials for white material on the anterior lens.',
                options: [
                    'Pseudoexfoliation (the likely diagnosis)',
                    'True exfoliation (capsular delamination from heat exposure, e.g. glassblowers)',
                    'Primary amyloidosis',
                    'Pigment dispersion (for comparison: pigment, not white material)',
                    'Posterior subcapsular cataract'
                ],
                answers: [0, 1, 2, 3],
                explain: 'PSC sits at the back of the lens and doesn’t deposit material on the anterior capsule or pupil margin.'
            },
            {
                phase: '2. Gonioscopy',
                type: 'mcq',
                question: '“What would you look for on gonioscopy, and how would you rule out other secondary glaucomas?”',
                options: [
                    'Patchy meshwork pigment, a wavy Sampaolesi line, white flakes in the angle, and an angle that can look narrow from forward lens shift. Rule out recession, PAS, new vessels and dense PDS pigment.',
                    'Dense, even pigment on the meshwork all the way round, a Krukenberg spindle on the cornea and a deep concave iris, which are the classic gonioscopic signs of pseudoexfoliation in older patients.',
                    'Nothing: gonioscopy is never needed in pseudoexfoliation because the angle is always wide open and normal; secondary glaucomas are ruled out by checking the IOP alone at each visit.',
                    'Blood in Schlemm’s canal and new vessels crossing the scleral spur, which are the signs that confirm pseudoexfoliation; if they aren’t present, the white material isn’t PXF.'
                ],
                answer: 0,
                explain: 'Zonular weakness lets the lens–iris diaphragm move forward, so PXF eyes can have narrow angles and even angle closure.'
            },
            {
                phase: '3. Other signs',
                type: 'multi',
                question: '“What else might you see in PXF?”',
                options: [
                    'Flakes on the pupil margin, endothelium and zonules',
                    'Loss of the pupillary ruff and transillumination defects near the pupil margin',
                    'Poor dilation',
                    'Phacodonesis or a subluxed lens (weak zonules)',
                    'Asymmetry: often one eye first or worse',
                    'A Krukenberg spindle and mid-peripheral spoke-like TIDs'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'A Krukenberg spindle and mid-peripheral TIDs are PDS signs. In PXF the TIDs sit near the pupil margin.'
            },
            {
                phase: '4. Cataract first',
                type: 'reveal',
                text: 'High IOP, and a field defect that matches the disc (structure–function concordance). Visually significant cataract as well. The cataract is removed, but the pressures are still high.'
            },
            {
                phase: '5. After surgery',
                type: 'mcq',
                question: '“Cataracts are out but they still have high pressures. What do you do? How long would you wait after surgery before giving a PGA?”',
                options: [
                    'Treat the IOP now. Start a PGA once the eye is quiet (often a few weeks after uncomplicated surgery; check with the surgeon), watching for CME; timolol or a CAI can bridge.',
                    'Don’t treat: cataract surgery always cures PXF glaucoma, so any raised IOP afterwards is from the post-op steroid and will settle on its own once the drops are stopped.',
                    'Start a PGA the same day as surgery in both eyes, since the risk of CME after cataract surgery only applies to β-blockers and CAIs, never to prostaglandin analogues.',
                    'Wait 12 months before any glaucoma drop, since all drops are contraindicated for a year after surgery; refer for trabeculectomy if the IOP is still high after that year.'
                ],
                answer: 0,
                explain: 'PGAs are a precaution, not a contraindication, after uncomplicated surgery with an intact posterior capsule; the CME risk is higher with capsule rupture or a history of CME.',
                recall: 'The notes leave the wait open. There is no fixed rule: many surgeons avoid PGAs while the eye is still inflamed after surgery and allow them after about 4–6 weeks when the eye is quiet.'
            },
            {
                phase: '6. Course',
                type: 'mcq',
                question: '“What is the typical course of the disease? Risk factors for conversion?”',
                options: [
                    'Many PXF eyes go on to glaucoma (roughly 15% in 10 years, more over a lifetime), and PXG progresses faster than POAG (EMGT). Risk rises with age and higher IOP.',
                    'PXF is a harmless lens finding; fewer than 1 in 1000 eyes ever develop glaucoma, so patients need a check only every 5 years and never need any treatment for the rest of their life.',
                    'PXF always turns into glaucoma within a year of diagnosis, so every patient should be started on drops at the first visit even if the IOP, disc and fields are all completely normal.',
                    'PXF glaucoma progresses more slowly than POAG, because the pseudoexfoliation material protects the optic nerve, so a less aggressive target is needed than in POAG.'
                ],
                answer: 0,
                explain: 'The notes quote 3.13 dB/year for PXG, against about 1.31 for POAG and 0.36 for NTG. PXF eyes are also higher risk at cataract surgery (weak zonules, poor dilation).',
                recall: 'The notes give “5% risk of conversion every 5 years” and “25–50% will convert”. The figures vary by study; say “about 1 in 3 to 1 in 2 eventually, faster than POAG” and name EMGT for faster progression.'
            }
        ]
    },
    {
        id: 'r2020-pxf-field-reliability',
        category: 'glaucoma',
        title: 'PXF Iris and an Inferior Arcuate',
        theme: 'Pseudoexfoliation Glaucoma; Field Reliability',
        years: ['2020'],
        patient: 'Older adult (2020 Tuesday).',
        stem: 'Photo of the iris and pupil margin.',
        exhibit: 'Photo: white flaky material at the pupil margin with loss of the pupillary ruff; a central disc of material on the lens with a clear ring around it.',
        steps: [
            {
                phase: '1. Describe it',
                type: 'mcq',
                question: '“Describe the clinical appearance. What is the likely diagnosis?”',
                options: [
                    'White flakes at the pupil margin and on the lens in three zones (central disc, clear ring, granular periphery), loss of the ruff and peripupillary TIDs: pseudoexfoliation.',
                    'Brown pigment on the lens and iris with a vertical spindle on the cornea and mid-peripheral spoke-like TIDs; the clear ring is where the lens is thinner: pigment dispersion syndrome.',
                    'Yellow greasy deposits on the back of the cornea in a triangle, with a small irregular pupil stuck to the lens and flare in the chamber: granulomatous anterior uveitis.',
                    'A white opacity in the back of the lens with a clear ring around it from the iris, and a normal pupil margin: posterior subcapsular cataract from long-term steroid use.'
                ],
                answer: 0,
                explain: 'The clear ring is where the moving iris rubs the material off the lens. It shows best after dilation.'
            },
            {
                phase: '2. Reliability',
                type: 'mcq',
                question: 'The 24-2 shows an inferior arcuate defect. “What are the criteria for reliability?”',
                options: [
                    'SITA: fixation losses under 20%, false positives under 15% (the key index), false negatives under about 33% (they rise in damaged fields); also check gaze tracking.',
                    'Fixation losses must be 0% and false positives 0%, or the whole test is discarded; any field with a single fixation loss or false positive is unreliable and must be repeated.',
                    'Only the test duration matters: if the test took under 5 minutes it is reliable whatever the indices say, and the fixation, false positive and false negative rates can be ignored.',
                    'Fixation losses under 50% and false positives under 50% are acceptable; false negatives don’t count at all, since they are only printed on the report for research use.'
                ],
                answer: 0,
                explain: 'Trigger-happy patients (high false positives) make the field look better than it is: white patches on the grey-scale and impossibly high thresholds.',
                recall: 'The notes give “Zeiss guidelines: false positives 15%, fixation loss 20%, false negatives median normal 1% (0–17%), median glaucoma 6% (0–42%)”. False negatives are raised in genuinely damaged fields, so on their own they don’t make a glaucomatous field unreliable.'
            },
            {
                phase: '3. Manage',
                type: 'mcq',
                question: '“How would you manage? When will you see them next?”',
                options: [
                    'PXG: a PGA (e.g. latanoprost 0.005% at night) aiming about 30% lower given its aggressive course; refer to an ophthalmologist; review in 4–6 weeks for IOP, side effects and adherence.',
                    'Observe without treatment and repeat the field in 2 years; PXG progresses so slowly that drops aren’t worth the side effects, and an ophthalmologist only needs to see the patient if the VA drops.',
                    'Start pilocarpine 2% QID to clear the material from the angle, review in 6 months, and refer only if the IOP rises above 40 mmHg, since PXG is managed entirely by optometrists.',
                    'Start pred forte QID to reduce the inflammation that makes the material, review in 1 week, and add a glaucoma drop only if the material is still there after a month of steroid.'
                ],
                answer: 0,
                explain: 'Pilocarpine is avoided in PXF (weak zonules, synechiae, poor dilation for later surgery), and steroid would raise the IOP.'
            },
            {
                phase: '4. Target not met',
                type: 'mcq',
                question: '“The target isn’t met. What do you do?”',
                options: [
                    'Check adherence and technique, then add a second drop or a fixed combination, or refer for SLT (which works well in PXF, as the meshwork is heavily pigmented).',
                    'Double the PGA to twice a day, since a PGA works twice as well when it is used twice daily; review in a year, since PXG patients don’t need to be seen any more often than that.',
                    'Stop the PGA and observe, since if the first drop doesn’t reach the target no other drop will; at this point the only option left is to wait until the patient is ready for surgery.',
                    'Add a second PGA from another brand, such as bimatoprost on top of latanoprost, since two PGAs together lower the IOP twice as much as one alone and are well tolerated.'
                ],
                answer: 0,
                explain: 'Using a PGA more than once a day can make it less effective, and two PGAs together don’t add to each other.'
            }
        ]
    },
    // ------------------------------------------------------------------ 2020: fields, anterior eye
    {
        id: 'r2020-goldmann-chiasm',
        category: 'neuro',
        title: 'A Goldmann Field from Both Eyes',
        theme: 'Chiasmal Defects and Central Field Differentials',
        years: ['2020'],
        patient: 'Adult with vague blurred vision (2020 Monday and Tuesday).',
        stem: '“Part one”: a Goldmann (kinetic) perimetry field of both eyes.',
        exhibit: 'Goldmann field: loss of the temporal half of the field in each eye, respecting the vertical midline.',
        steps: [
            {
                phase: '1. What and where',
                type: 'mcq',
                question: '“What do you see? Where in the visual pathway is this?”',
                options: [
                    'A bitemporal hemianopia: the crossing nasal fibres from each retina are damaged at the optic chiasm, so the temporal field of each eye is lost, respecting the vertical midline.',
                    'A homonymous hemianopia: the left optic tract is damaged behind the chiasm, so the right half of the field is lost in each eye, and the defect ignores the vertical midline.',
                    'Bilateral arcuate defects: glaucoma in both eyes damages the nerve fibre bundles at the optic disc, so the defects respect the horizontal midline in each eye.',
                    'A central scotoma in each eye: both optic nerves are inflamed just behind the globe, as in bilateral optic neuritis, so the loss is centred on fixation and not on the midline.'
                ],
                answer: 0,
                explain: 'Respect for the vertical midline means a chiasmal or post-chiasmal cause; respect for the horizontal midline means the optic nerve head or a vascular cause.'
            },
            {
                phase: '2. Top or bottom first?',
                type: 'mcq',
                question: '“If this was a pituitary tumour, where would the defect start? And a craniopharyngioma?”',
                options: [
                    'A pituitary adenoma presses up from below, on the inferior crossing fibres, so loss starts in the upper temporal fields. A craniopharyngioma presses from above, so it starts lower.',
                    'A pituitary adenoma presses down from above, so the loss starts in the lower temporal fields; a craniopharyngioma presses up from below, so its loss starts in the upper temporal fields.',
                    'Both start centrally at fixation, since the macular fibres are always damaged first by a compressive lesion, wherever the tumour sits in relation to the chiasm.',
                    'Both start in the nasal fields, since the uncrossed temporal fibres sit closest to the tumour; temporal loss appears only once the tumour is large enough to affect the vision.'
                ],
                answer: 0,
                explain: 'The pituitary sits below the chiasm; a craniopharyngioma usually sits above it. Refer for urgent MRI and endocrine work-up.',
                recall: 'The candidate said “it’s the base of the brain, hence the defect starts at the top, and in cranio vice versa” — correct.'
            },
            {
                phase: '3. Central defects',
                type: 'match',
                question: '2020 Tuesday: “Superior hemifield, central defect, centrocaecal defect: what are your differentials?” Match each defect to its most likely group of causes.',
                pairs: [
                    { label: 'Superior altitudinal defect', answer: 'Inferior NAION or arteritic AION, inferior hemi-retinal or branch vein or artery occlusion, advanced glaucoma' },
                    { label: 'Central scotoma', answer: 'Macular disease (AMD, hole, CSCR) or optic neuritis' },
                    { label: 'Centrocaecal scotoma', answer: 'Optic neuritis, toxic or nutritional neuropathy, Leber’s hereditary optic neuropathy' },
                    { label: 'Junctional scotoma', answer: 'A lesion where one optic nerve joins the chiasm: central loss in one eye, upper temporal loss in the other' }
                ],
                distractors: ['A lesion in the occipital lobe sparing the macula'],
                explain: 'A centrocaecal scotoma joins fixation to the blind spot, which points to the papillomacular bundle.'
            },
            {
                phase: '4. Tilted discs',
                type: 'mcq',
                question: '“A superior bitemporal defect that doesn’t respect the vertical midline in a myope with tilted discs. What do you do?”',
                options: [
                    'Suspect tilted disc syndrome (an inferior staphyloma gives a refractive scotoma). Repeat the field with extra minus power: if it shrinks, it is refractive. If it respects the midline, image.',
                    'Diagnose a pituitary tumour on the spot and refer for urgent surgery, since any bitemporal defect is chiasmal, whether it respects the vertical midline or not, and tilted discs don’t affect the field.',
                    'Start glaucoma drops, since tilted discs are glaucomatous and a bitemporal defect is how glaucoma presents in myopes; no repeat field is needed before treatment is started.',
                    'Ignore it and discharge, since tilted discs are a normal variant and can’t cause a field defect of any kind; the defect must be a testing artefact that will disappear by itself.'
                ],
                answer: 0,
                explain: 'Other causes of false bitemporal defects: lid or lens-rim artefacts, and colobomas of the disc. Don’t start treatment on one field; repeat it.'
            }
        ]
    },
    {
        id: 'r2020-episcleritis-systemic',
        category: 'conj',
        title: 'Episcleritis, Scleritis and the Autoimmune Link',
        theme: 'Episcleritis vs Scleritis',
        years: ['2020', '2019'],
        patient: '47-year-old woman with a red eye (2020 Tuesday; 2019 Tuesday with Michael Kalloniatis and Thursday with Fiona).',
        stem: '“How do you differentiate between episcleritis and scleritis?”',
        exhibit: 'Photo: a sector of bright red, engorged vessels on the temporal bulbar conjunctiva; the cornea is clear.',
        steps: [
            {
                phase: '1. Tell them apart',
                type: 'multi',
                question: '“How do you differentiate between episcleritis and scleritis?” Select the signs that point to scleritis.',
                options: [
                    'Severe, boring pain that wakes the patient at night and spreads to the temple or jaw',
                    'Tenderness to touch over the area',
                    'A bluish-purple, deep redness seen best in daylight',
                    'Deep vessels that don’t blanch with phenylephrine 2.5% (episcleral vessels blanch within about 10–15 minutes)',
                    'A nodule that can’t be moved over the sclera',
                    'A bright red sector that blanches with phenylephrine and moves with a cotton bud'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Conjunctival vessels blanch at once with phenylephrine and move with the conjunctiva; episcleral vessels blanch more slowly; the deep scleral plexus doesn’t blanch.'
            },
            {
                phase: '2. Who and why',
                type: 'mcq',
                question: '“What are the demographic differences? Which systemic associations? Sarcoidosis, lupus and rheumatoid arthritis are generally categorised as what? Why do you think females get it more?”',
                options: [
                    'Episcleritis: younger women (20s–40s), about 1 in 10 with a systemic cause. Scleritis: older (40s–60s), about half have one. RA, SLE and sarcoid are autoimmune diseases, commoner in women.',
                    'Episcleritis: older men, almost always with gout. Scleritis: children, almost always after a viral illness. RA, SLE and sarcoid are infections, which women pick up more often from looking after children.',
                    'Both are equally common in all ages and both sexes, with no systemic link. RA, SLE and sarcoid are allergic diseases, and women get them more because they use more cosmetics around the eyes.',
                    'Episcleritis: teenagers who wear contact lenses. Scleritis: older men who smoke. RA, SLE and sarcoid are vascular diseases, caused by smoking, so they are more common in men.'
                ],
                answer: 0,
                explain: 'Scleritis links: RA (the most common), granulomatosis with polyangiitis, SLE, IBD, relapsing polychondritis; infections such as HZO, syphilis and TB. Necrotising scleritis carries a high mortality if the vasculitis is untreated.'
            },
            {
                phase: '3. Types',
                type: 'match',
                question: '“What are the different types?” Match each to its description.',
                pairs: [
                    { label: 'Simple (diffuse or sectoral) episcleritis', answer: 'About 3 in 4 cases; redness peaks within 12 hours and fades over days; recurs' },
                    { label: 'Nodular episcleritis', answer: 'A tender, mobile nodule that grows over 2–3 days and lasts longer' },
                    { label: 'Necrotising scleritis', answer: 'Severe pain, avascular white patches, scleral thinning; linked with systemic vasculitis' },
                    { label: 'Scleromalacia perforans', answer: 'Painless thinning in older women with long-standing RA; the uvea shows through' },
                    { label: 'Posterior scleritis', answer: 'Pain on eye movement, choroidal folds, disc swelling, exudative retinal detachment' }
                ],
                explain: 'Anterior scleritis is diffuse, nodular or necrotising. Posterior scleritis may have a white eye, so it is easy to miss.'
            },
            {
                phase: '4. Management',
                type: 'mcq',
                question: 'It is simple episcleritis. “What is your management?”',
                options: [
                    'Reassure (often settles in 1–3 weeks); cold compresses and lubricants; if needed, FML 0.1% QID for 1–2 weeks once HSV is ruled out, or an oral NSAID via the GP; warn about recurrence.',
                    'Refer to hospital the same day for oral prednisolone 1 mg/kg, since all episcleritis becomes scleritis within a week unless systemic steroids are started straight away.',
                    'Chloramphenicol 0.5% QID for a week, since episcleritis is a bacterial infection of the episclera, and a steroid would make it worse by stopping the immune response clearing the bacteria.',
                    'Pred forte 1% hourly for a week, then stop it the next day, since episcleritis is a severe inflammation; no taper is needed, as the course is short and the eye will stay quiet.'
                ],
                answer: 0,
                explain: 'Scleritis needs referral for systemic treatment (oral NSAIDs, steroids or immunosuppressants) and a systemic work-up; topical steroid alone isn’t enough.',
                recall: 'The 2019 notes give ibuprofen 800 mg TDS, indomethacin 25 mg QID or diclofenac 50 mg TDS. Optometrists can’t prescribe these: refer to the GP. They also say “no oral steroids because of a 10% increase in risk of recurrence”, which isn’t a figure to quote.'
            }
        ]
    },
    {
        id: 'r2020-nummular-seis',
        category: 'conj',
        title: 'Nummular Infiltrates After a Red Eye',
        theme: 'Adenoviral Keratoconjunctivitis (EKC)',
        years: ['2020', '2019'],
        patient: 'Adult whose red, watery eyes started about 10 days ago (2020 Tuesday; 2019 Thursday with Lily).',
        stem: 'Photo of the cornea.',
        exhibit: 'Photo: several round, faint white subepithelial opacities in the central cornea; mild conjunctival redness.',
        steps: [
            {
                phase: '1. What else to ask or do',
                type: 'multi',
                question: '“Describe, and what else would you ask or do?” Select what helps.',
                options: [
                    'Ask about a recent cold, sore throat or fever, and contacts with red eyes at work or home',
                    'Palpate for a preauricular lymph node',
                    'Evert the lids for follicles and pseudomembranes',
                    'Check corneal sensation and look for dendrites (HSV can also give follicles)',
                    'Check VA, since central infiltrates reduce it',
                    'Scrape the infiltrates for culture before treatment'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Nummular SEIs are an immune response to viral antigen; there are no organisms to culture in them.'
            },
            {
                phase: '2. EKC vs PCF',
                type: 'mcq',
                question: '2019: “What are the differences between EKC and PCF?”',
                options: [
                    'EKC: adults, adenovirus 8, 19, 37; more severe, corneal infiltrates in most, about 7–10 days in; pseudomembranes. PCF: children, types 3 and 7, with fever and sore throat.',
                    'EKC: children, with fever and a sore throat, infiltrates are rare. PCF: adults, more severe, infiltrates in almost everyone; EKC is the milder of the two and never affects the cornea at all.',
                    'EKC is bacterial and PCF is viral; EKC needs antibiotic drops and PCF needs antiviral tablets, so a swab is always needed to decide which treatment to start on the first visit.',
                    'They are the same condition with two names; EKC is used in Australia and PCF in the United States, and the signs, age group and course are identical in both cases.'
                ],
                answer: 0,
                explain: 'Both are highly contagious: incubation about 5–12 days and shedding for up to 2 weeks after symptoms start.'
            },
            {
                phase: '3. Steroid?',
                type: 'mcq',
                question: '“Would you prescribe steroids for the infiltrates? What is the steroid response, and what would you do?”',
                options: [
                    'Only if they reduce VA or are troublesome: FML or Flarex 0.1% QID with a slow taper, as stopping fast brings them back. Check IOP at 2–4 weeks: a rise means switching or stopping.',
                    'Always, at the first visit: pred forte 1% hourly for a week, then stop; infiltrates never come back once the steroid is stopped, and the IOP never rises with steroids in viral eye disease.',
                    'Never: steroids are contraindicated in all viral eye disease, including SEIs, because they make the virus spread to the other eye and the patient stays contagious for months.',
                    'Only oral steroids work on SEIs; refer to the GP for oral prednisolone 50 mg daily for a month, since topical steroids can’t reach the stroma under the epithelium.'
                ],
                answer: 0,
                explain: 'Roughly a third of people get a moderate IOP rise (6–15 mmHg) on topical steroid and about 5% a high one (over 15 mmHg); risk is higher with POAG, a family history, high myopia, diabetes and in children.'
            },
            {
                phase: '4. Back at 3 weeks',
                type: 'mcq',
                question: '“Comes back in 3 weeks with infiltrates. What do you do? What are other therapies?”',
                options: [
                    'They often return if the steroid is tapered too fast: restart at the dose that worked and taper more slowly. For steroid-dependent SEIs, topical ciclosporin via an ophthalmologist.',
                    'Recurrent infiltrates mean the infection has come back, so stop the steroid and start chloramphenicol; the patient is contagious again and must stay off work for another 2 weeks.',
                    'Stop all drops and reassure; infiltrates that come back after 3 weeks are permanent scars that no treatment can change, so further steroid won’t help and isn’t worth the risk.',
                    'Double the strength of the steroid each time the infiltrates return and stop it abruptly once they clear, since a sudden stop leaves no time for the infiltrates to return.'
                ],
                answer: 0,
                explain: 'Other therapies: povidone-iodine wash in the first days (off-label, under anaesthetic, to shorten the course), cold compresses, preservative-free lubricants and removing pseudomembranes.'
            },
            {
                phase: '5. Contagion advice',
                type: 'viva',
                question: '“What would you tell the patient?”',
                points: [
                    'Highly contagious for about 2 weeks from the start of symptoms: stay off work or school while the eyes are red and weeping',
                    'Wash hands, don’t touch the eyes, don’t share towels, pillows or make-up; throw out old eye make-up',
                    'It often gets worse in the first week before it gets better; infiltrates can come at about 10 days',
                    'Stop contact lens wear until it has settled',
                    'Disinfect the chair, slit lamp and tonometer after the visit'
                ],
                explain: 'Single-use preservative-free lubricants are better than a bottle, which can spread the virus.'
            }
        ]
    },
    {
        id: 'r2020-papillae-chlamydia',
        category: 'conj',
        title: 'Papillae, Follicles and a Suspected Chlamydia',
        theme: 'Viral vs Bacterial vs Chlamydial Conjunctivitis',
        years: ['2020'],
        patient: 'Young adult with a red, sticky eye for 3 weeks (2020 Monday, Lily).',
        stem: '“Patient comes in presenting with papillae: what are some causes besides allergy and contact lenses?”',
        steps: [
            {
                phase: '1. Papillae',
                type: 'multi',
                question: '“What causes papillae besides allergy and contact lenses?” Select the true causes.',
                options: [
                    'VKC and AKC',
                    'A foreign body such as an exposed suture or an ocular prosthesis (giant papillary conjunctivitis)',
                    'Bacterial conjunctivitis',
                    'Floppy eyelid syndrome and superior limbic keratoconjunctivitis',
                    'Blepharitis and chronic MGD',
                    'Adenoviral conjunctivitis as the main reaction'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Papillae have a central vessel and a flat top; follicles are grey-white lymphoid nodules with vessels around the edge. Adenovirus, chlamydia, HSV and some drops (brimonidine, atropine) give follicles.'
            },
            {
                phase: '2. Telling them apart',
                type: 'match',
                question: '“What do you see in viral, bacterial and chlamydial conjunctivitis?” Match each to its usual picture.',
                pairs: [
                    { label: 'Adenoviral', answer: 'Watery discharge, follicles, tender preauricular node, recent cold, SEIs or pseudomembranes' },
                    { label: 'Bacterial', answer: 'Mucopurulent discharge, papillae, lids stuck together in the morning, usually no node' },
                    { label: 'Chlamydial (adult inclusion)', answer: 'Chronic (weeks), mucopurulent, large follicles in the lower fornix, node, superior pannus, new sexual partner' },
                    { label: 'Allergic', answer: 'Itch, bilateral, papillae, chemosis, history of atopy' }
                ],
                explain: 'A red eye that has failed weeks of antibiotic drops, with follicles and a node, is chlamydia until proven otherwise.'
            },
            {
                phase: '3. Suspected chlamydia',
                type: 'mcq',
                critical: true,
                question: '“What is your management for suspected chlamydial conjunctivitis? How would you take a conjunctival swab?”',
                options: [
                    'PCR (NAAT) swab of the lower tarsal conjunctiva under anaesthetic, firmly enough to collect cells. GP or sexual health clinic for oral azithromycin, STI screening and contact tracing.',
                    'Chloramphenicol 0.5% QID for 4 weeks, since topical antibiotics clear chlamydia on their own; there is no need to swab, involve the GP or tell the patient’s partners about the infection.',
                    'Swab the discharge on the lashes for bacterial culture on a standard plate, then start oral aciclovir 400 mg BD, since chlamydia is a virus and won’t respond to any antibiotic.',
                    'Start pred forte QID for 2 weeks to reduce the follicles, then swab once they have gone; the swab is easier to take on a quiet eye, and the steroid treats chlamydia as well as allergy.'
                ],
                answer: 0,
                explain: 'Chlamydia is an obligate intracellular bacterium, so the swab needs epithelial cells. Topical treatment alone doesn’t clear the genital infection.'
            },
            {
                phase: '4. Infiltrates in viral',
                type: 'mcq',
                question: '“If it turned out to be viral and they had infiltrates, would you give anything?”',
                options: [
                    'A soft steroid such as Flarex (fluorometholone acetate) 0.1% QID with a slow taper, if the infiltrates reduce vision or are troublesome, once HSV is ruled out; then check IOP.',
                    'Oral aciclovir 800 mg five times a day for 10 days, since antivirals are the treatment for adenoviral infiltrates, and steroids should be avoided in every kind of viral eye disease.',
                    'Ciprofloxacin 0.3% hourly, since infiltrates in a viral conjunctivitis are always caused by a secondary bacterial infection, which needs treating before it turns into an ulcer.',
                    'Nothing at any stage: infiltrates in viral conjunctivitis can never affect the vision and always clear on their own within a few days, so there is no reason to treat them.'
                ],
                answer: 0,
                explain: 'Flarex is fluorometholone acetate; the acetate helps it penetrate the cornea, while FML is the alcohol form.'
            }
        ]
    },
    {
        id: 'r2020-uveitis-refer-fever',
        category: 'uveitis',
        title: 'Uveitis with a Fever',
        theme: 'When to Refer and Systemic Review',
        years: ['2020'],
        patient: 'Adult with acute anterior uveitis (2020 Monday).',
        stem: '“When would you not treat uveitis yourself?”',
        steps: [
            {
                phase: '1. Not yours to treat',
                type: 'multi',
                question: '“When would you not treat uveitis yourself (refer instead)?” Select the referral triggers.',
                options: [
                    'Hypopyon or very severe inflammation (fibrin, plastic aqueous)',
                    'Posterior or intermediate involvement (vitreous cells, retinitis, vasculitis, macular oedema)',
                    'Bilateral, recurrent or chronic disease',
                    'Recent eye surgery or a drainage bleb (rule out endophthalmitis)',
                    'Not responding to treatment, or IOP rising out of control',
                    'Suspected infection (herpetic, syphilis, TB) or an immunosuppressed patient',
                    'A first episode of mild unilateral non-granulomatous AAU'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Mild, unilateral, first-episode non-granulomatous AAU is the case optometrists can treat, with prompt review.'
            },
            {
                phase: '2. Why hourly?',
                type: 'mcq',
                question: '“Why would you use an hourly steroid dose?”',
                options: [
                    'To control the inflammation quickly: a suspension stays on the eye for minutes, so frequent drops keep a high level in the AC; taper after a 2-step fall in cells.',
                    'To make the patient come back every hour for review, since hourly drops are only safe when they are put in by the optometrist in the practice rather than at home.',
                    'Because hourly dosing stops the steroid raising the IOP: the more often the drop is used, the less effect it has on the meshwork, so frequent drops are safer than QID.',
                    'Because steroids only work if the dose is spread exactly evenly through the day and night; the hourly schedule must go on for at least 6 months to avoid a rebound.'
                ],
                answer: 0,
                explain: 'Pred forte 1% is a suspension: shake the bottle. Taper once the cells fall; stopping suddenly causes rebound.'
            },
            {
                phase: '3. Review of systems',
                type: 'multi',
                question: '“When would you do a review of systems in uveitis?” Select the triggers for a systemic work-up.',
                options: [
                    'Bilateral disease',
                    'Granulomatous signs (mutton-fat KPs, iris nodules)',
                    'Recurrent or chronic disease',
                    'Intermediate or posterior involvement',
                    'Symptoms elsewhere in the body (back pain, rashes, ulcers, cough, bowel symptoms)',
                    'Every first episode of mild, unilateral AAU in a healthy patient, with blood tests and a chest X-ray'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Ask everyone a few screening questions (back, joints, skin, gut, mouth and genitals, chest). Blood tests are usually kept for recurrent, bilateral or granulomatous disease.'
            },
            {
                phase: '4. Fever',
                type: 'mcq',
                question: '“If the patient has a fever, what systemic conditions are possible? What symptoms does TB have?”',
                options: [
                    'Infections: TB (fever, cough, night sweats, weight loss, mutton-fat KPs), syphilis, Lyme disease after a tick bite; also sarcoid. Rule out infection before using steroid alone.',
                    'Fever is never linked with uveitis, so it can be ignored; TB affects only the lungs and causes no eye signs, so it doesn’t need to be asked about in a patient with uveitis.',
                    'A fever means HLA-B27 disease, which is always febrile; TB causes a dry eye rather than uveitis, with no cough or weight loss, so it doesn’t need to be considered in the history.',
                    'A fever means the steroid has worked and the uveitis is healing; TB symptoms are a rash and itchy eyes, and they can be treated with a topical antihistamine as part of the same plan.'
                ],
                answer: 0,
                explain: 'Steroid without anti-infective cover can make TB or syphilitic uveitis much worse. Refer such patients to a uveitis specialist and the GP.'
            },
            {
                phase: '5. Who to refer to',
                type: 'mcq',
                question: '“If there are systemic associations, who would you refer to?”',
                options: [
                    'The GP for the systemic work-up (and a rheumatologist, infectious diseases or chest physician as needed), with the ophthalmologist managing the eye.',
                    'Nobody: the optometrist handles the systemic work-up, orders the chest X-ray and HLA test, and starts any oral treatment needed, so other doctors don’t need to be involved.',
                    'A dermatologist, since all the systemic causes of uveitis are skin diseases; the GP and the ophthalmologist aren’t needed for patients who have a systemic association.',
                    'The emergency department, since every patient with uveitis and a systemic association needs to be admitted to hospital that same day for IV steroids and a full work-up.'
                ],
                answer: 0,
                explain: 'Write to the GP with your findings and the tests you suggest (HLA-B27, syphilis serology, chest X-ray, ACE, etc.).'
            }
        ]
    },
    {
        id: 'r2020-fortified-cephazolin',
        category: 'cornea',
        title: 'Fortified Therapy: How the Drugs Work',
        theme: 'Bacterial Keratitis Pharmacology',
        years: ['2020', '2019'],
        patient: 'Adult with a large central bacterial ulcer (2020 Tuesday; 2019 Tuesday morning and Thursday afternoon with Michael Kalloniatis).',
        stem: '“What is dual therapy, and how do the drugs work?”',
        steps: [
            {
                phase: '1. Mechanisms',
                type: 'match',
                question: '“What is the mechanism of action of each drug?” Match each to its class and action.',
                pairs: [
                    { label: 'Ciprofloxacin / ofloxacin', answer: 'Fluoroquinolone: inhibits DNA gyrase and topoisomerase IV, so DNA can’t replicate (bactericidal)' },
                    { label: 'Tobramycin / gentamicin', answer: 'Aminoglycoside: binds the 30S ribosome, causing misreading of mRNA (bactericidal)' },
                    { label: 'Cefazolin', answer: 'Cephalosporin (β-lactam): blocks cross-linking of peptidoglycan in the cell wall (bactericidal)' },
                    { label: 'Chloramphenicol', answer: 'Binds the 50S ribosome and blocks peptide bond formation (bacteriostatic)' }
                ],
                distractors: ['Blocks folic acid synthesis by competing with PABA'],
                explain: 'Cell-wall damage from the β-lactam lets more aminoglycoside into the bacterium, so the two together are synergistic.'
            },
            {
                phase: '2. Why gram-positive?',
                type: 'mcq',
                question: '“Why is cefazolin better for gram-positive bacteria? What is the difference between gram-positive and gram-negative?”',
                options: [
                    'Gram-positives have a thick, exposed peptidoglycan wall that β-lactams reach easily. Gram-negatives have a thin one inside an outer lipid membrane, which keeps many β-lactams out.',
                    'Gram-positives have no cell wall at all, so cefazolin goes straight through their membrane; gram-negatives have a thick wall of peptidoglycan with no membrane, which cefazolin can’t cross.',
                    'Gram-positive and gram-negative refer to the electric charge on the bacteria; cefazolin is negatively charged, so it is attracted only to gram-positive bacteria and ignores gram-negatives.',
                    'Gram-positives are viruses and gram-negatives are bacteria; cefazolin is an antiviral, which is why it is added to an aminoglycoside, which covers the bacteria in dual therapy.'
                ],
                answer: 0,
                explain: 'Gram-positives stain purple (crystal violet held in the thick wall); gram-negatives stain pink. Pseudomonas is gram-negative; Staph and Strep are gram-positive.'
            },
            {
                phase: '3. Contraindications',
                type: 'mcq',
                question: '“Contraindications of cefazolin? What types of penicillin allergy are there?”',
                options: [
                    'Cephalosporin allergy, and care with penicillin allergy: an immediate IgE reaction (hives, anaphylaxis) is the serious kind, a mild delayed rash much less so. It can boost warfarin.',
                    'There are no contraindications to cefazolin at all, and penicillin allergy doesn’t exist as a real condition: every reported reaction is a side effect, so it can always be used safely.',
                    'Cefazolin is contraindicated in asthma and heart block, like timolol; there is only one type of penicillin allergy, which is always a delayed rash that appears a week after the first dose.',
                    'Cefazolin is contraindicated in anyone over 60, because of tendon rupture; penicillin allergy only matters for tablets and never for eye drops, which can’t cause an allergic reaction.'
                ],
                answer: 0,
                explain: 'If the history suggests anaphylaxis to penicillin, the hospital usually swaps cefazolin for vancomycin.',
                recall: 'The notes say cefazolin is contraindicated with “warfarin and aminoglycosides”. Cefazolin can increase warfarin’s effect, but aminoglycosides aren’t a contraindication: the two are given together on purpose, as separate drops a few minutes apart (they can inactivate each other if mixed in one bottle).'
            },
            {
                phase: '4. Fluoroquinolones',
                type: 'multi',
                question: '2019: “What are the contraindications and side effects of fluoroquinolones?” Select the true ones for topical ciprofloxacin.',
                options: [
                    'Allergy to any quinolone',
                    'White crystalline precipitates on the ulcer (reversible)',
                    'Stinging, bitter taste, hyperaemia',
                    'Increasing resistance, especially with gram-positive organisms',
                    'Tendon rupture from the eye drops in anyone over 60'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Tendon damage is a risk of oral fluoroquinolones (especially with oral steroids or over 60), not a contraindication to topical drops.',
                recall: 'The notes list tendon inflammation, NSAID and steroid use, and age over 60 as contraindications. These apply to oral fluoroquinolones. Dual fortified therapy is chosen in older patients because of severity and melt risk, not tendon rupture.'
            },
            {
                phase: '5. Pupil or periphery',
                type: 'mcq',
                question: '2019: “If the MK lesion was at the periphery, would you treat? If it was over the pupil?” The candidate said “refer to hospital”. Examiner: “Yes I know, refer to hospital, but would you treat?”',
                options: [
                    'Yes, in both: start an intensive loading dose straight away (e.g. ofloxacin every 15 minutes) and refer, the same day for a central ulcer, so no time is lost.',
                    'Treat a peripheral ulcer only; a central ulcer must not be touched before the hospital sees it, since any drop would ruin the culture and make the organism impossible to grow.',
                    'Treat neither; refer both and tell the patient to wait for the hospital appointment without drops, since optometrists aren’t allowed to treat microbial keratitis in Australia.',
                    'Treat a central ulcer only; peripheral ulcers are always sterile and need no antibiotic, so the patient can be reassured and reviewed in a week to make sure it has gone.'
                ],
                answer: 0,
                explain: 'If you can, take a scrape or swab before the first drop, but never delay antibiotics for it. If the hospital doesn’t respond, they may add or switch fortified drops, add intrastromal or systemic treatment, or consider a graft.'
            }
        ]
    },
    // ------------------------------------------------------------------ 2014
    {
        id: 'r2014-aac-headache',
        category: 'glaucoma',
        title: 'Asian Patient with Headaches',
        theme: 'Acute Angle Closure: Signs, Pilocarpine and Surgery',
        years: ['2014', '2019'],
        patient: 'Middle-aged Asian woman with headaches and a red eye (2014, Alex; 2019 Tuesday morning and Thursday afternoon; Angelica Ly’s practice case).',
        stem: 'Severe pain around the eye and head since this evening, with nausea and vomiting, blurred vision and rainbow haloes around lights.',
        steps: [
            {
                phase: '1. Questions',
                type: 'multi',
                question: '“What would you ask about the headaches?” Select the useful questions.',
                options: [
                    'Which side, and is it around the eye? When did it start, and what were you doing (dim light, reading, after dilating drops)?',
                    'Any haloes around lights, blurred vision, nausea or vomiting?',
                    'Have you had episodes like this before that settled on their own (e.g. after sleep)?',
                    'Any new medicines (topiramate, antihistamines, decongestants, antidepressants)?',
                    'Family history of angle closure, and are you long-sighted?',
                    'How many hours a day do you spend on screens?'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Previous self-limiting episodes in dim light point to intermittent angle closure. Topiramate causes bilateral angle closure by ciliary body swelling, not pupil block.'
            },
            {
                phase: '2. Why these signs?',
                type: 'match',
                question: '2019: “What are the causes or mechanisms of the corneal oedema, poor pupil and red eye?” Match each sign to its mechanism.',
                pairs: [
                    { label: 'Corneal oedema', answer: 'High IOP forces aqueous into the cornea faster than the endothelium can pump it out' },
                    { label: 'Fixed mid-dilated pupil', answer: 'Ischaemia of the iris sphincter from pressure above about 40–50 mmHg' },
                    { label: 'Red eye', answer: 'IOP above episcleral venous pressure engorges the conjunctival and ciliary vessels' },
                    { label: 'Glaukomflecken', answer: 'Ischaemic necrosis of lens epithelium: anterior subcapsular flecks, a sign of a past attack' }
                ],
                distractors: ['Pigment rubbed off the back of the iris by the zonules'],
                explain: '2019: “What is it commonly misdiagnosed as at the hospital?” Migraine, or a gastrointestinal upset when vomiting dominates.'
            },
            {
                phase: '3. Pilocarpine',
                type: 'mcq',
                critical: true,
                question: '“What are the indications and contraindications of pilocarpine?”',
                options: [
                    'Phakic pupil-block closure, once the IOP is falling (about 40 mmHg or less), with the ophthalmologist’s agreement. Not in aphakia, pseudophakia, lens-induced closure or uveitis.',
                    'For every red eye with a high IOP, at any pressure, as the first drop before anything else; there are no contraindications to pilocarpine, which can also be used in pseudophakic eyes.',
                    'Only for open-angle glaucoma; pilocarpine is contraindicated in all angle closure, because it constricts the pupil and makes the pupil block worse, whatever the pressure is.',
                    'Only after laser iridotomy, never before it; before the iridotomy, pilocarpine is contraindicated because it can’t reach the iris through an oedematous cornea at any IOP.'
                ],
                answer: 0,
                explain: 'Pilocarpine pulls the iris away from the angle. In aphakic, pseudophakic or lens-induced closure it can make things worse (it moves the lens–iris diaphragm forward).',
                recall: 'The notes list “increases risk of RD” too: true of miotics in general, but not the reason to withhold it in an attack. Also: if you caused the closure by dilating, give pilocarpine (with dapiprazole if available) straight away.'
            },
            {
                phase: '4. The other eye',
                type: 'mcq',
                question: '2019: “Is angle closure unilateral or bilateral? What is the chance of the other eye being involved?”',
                options: [
                    'Usually one eye first, but the anatomy is bilateral: about half of fellow eyes attack within 5–10 years untreated, often within a year, so they get a laser iridotomy.',
                    'Angle closure only ever affects one eye: the fellow eye is protected by the attack, so it never needs an iridotomy and can be treated like any normal eye from now on.',
                    'Both eyes always attack on the same day, so if the fellow eye is quiet the diagnosis can’t be angle closure, and you should look for a different cause of the high pressure.',
                    'The fellow eye has a 1% lifetime risk, the same as the general population, so an iridotomy is only done if it also develops a closed angle on gonioscopy in the future.'
                ],
                answer: 0,
                explain: 'Bilateral simultaneous closure suggests a drug cause (topiramate, sulfonamides) or a ciliary body cause rather than pupil block.'
            },
            {
                phase: '5. Surgery',
                type: 'mcq',
                question: '2019: “What are some surgical options?” And if ophthalmic care is two days away?',
                options: [
                    'Laser iridotomy (both eyes) once the cornea clears, iridoplasty or iridectomy if needed, early lens extraction (EAGLE). If care is delayed: drops and acetazolamide via a GP, daily IOP.',
                    'Trabeculectomy as the first step in every case, the same day, with no medical treatment first; if the ophthalmologist is two days away, send the patient home without drops until then.',
                    'Selective laser trabeculoplasty as the first step, since it opens a closed angle; if the ophthalmologist is two days away, pilocarpine 4% every 5 minutes for two days is enough on its own.',
                    'Nothing surgical is ever needed, since angle closure always resolves on drops alone; if the ophthalmologist is two days away, stop all drops and see whether it settles by itself.'
                ],
                answer: 0,
                explain: 'EAGLE: clear-lens extraction gave better IOP control and quality of life than laser iridotomy in PACG or high-IOP PAC, and was cost-effective.'
            }
        ]
    },
    {
        id: 'r2014-mk-sterile-dual',
        category: 'cornea',
        title: 'Sterile or Infected, Mono or Dual?',
        theme: 'Microbial Keratitis vs Sterile Infiltrates',
        years: ['2014', '2019'],
        patient: '35-year-old man who sometimes sleeps in his contact lenses (2014, Alex; 2019 Monday with Anna and Lily).',
        stem: 'Pain, redness, tearing and blurred vision. The corneal lesion stains with fluorescein; possible stromal glow; the pupil is irregular.',
        exhibit: 'Photo: a dense central corneal ulcer with surrounding haze and marked conjunctival redness.',
        steps: [
            {
                phase: '1. Sterile or infected',
                type: 'multi',
                question: '“How would you differentiate between microbial keratitis and sterile infiltrates?” Select the features that point to infection.',
                options: [
                    'Severe pain, photophobia and reduced vision',
                    'Central or paracentral, larger than about 1–1.5 mm, irregular edges',
                    'An overlying epithelial defect the same size as the infiltrate, often with satellite lesions',
                    'Deeper stromal involvement',
                    'Mucopurulent discharge, lid swelling, marked AC reaction or hypopyon',
                    'Several small, round, peripheral infiltrates with no stain and mild symptoms'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Small, multiple, peripheral, round infiltrates with little or no staining and mild symptoms point to sterile infiltrates (CLPU, CLARE, marginal keratitis).'
            },
            {
                phase: '2. Why this organism?',
                type: 'mcq',
                question: '“What is it most likely to be? Why is that organism linked with contact lenses?”',
                options: [
                    'Bacterial keratitis, most often Pseudomonas: it sticks to lenses and cases, lives in water, and the lens holds it against a hypoxic epithelium. Overnight wear raises the risk a lot.',
                    'Fungal keratitis, most often Fusarium: lenses filter out bacteria completely, so infections in lens wearers are always fungal, and overnight wear has no effect on the risk of infection.',
                    'Viral keratitis from adenovirus: lens cases grow viruses rather than bacteria, so lens wearers get adenoviral ulcers, and ordinary antibiotics have no part in their treatment.',
                    'Staph epidermidis, which is the most common cause in lens wearers because it lives on the lid margin; Pseudomonas only infects people who have had eye surgery, never lens wearers.'
                ],
                answer: 0,
                explain: 'Acanthamoeba (water, pain out of proportion) and fungus (vegetable trauma) are the differentials to keep in mind in lens wearers.'
            },
            {
                phase: '3. Mono or dual',
                type: 'mcq',
                question: '“Why use monotherapy rather than dual therapy? When would you use dual therapy?”',
                options: [
                    'A fluoroquinolone alone works as well as fortified drops for most ulcers and is less toxic. Fortified dual therapy (hospital) for large (over 2 mm), deep or central ulcers, or older patients.',
                    'Dual fortified therapy for every ulcer, however small, since a fluoroquinolone alone never works in a lens wearer; monotherapy is only used in children, because fortified drops are too strong.',
                    'Monotherapy only with chloramphenicol, since it covers Pseudomonas best; dual therapy is never used, because two antibiotics cancel each other out and the ulcer gets worse.',
                    'No antibiotic until the culture result is back, then a single drop chosen from it; dual therapy is only for viral ulcers, where two antivirals are needed to stop the virus.'
                ],
                answer: 0,
                explain: 'Ciprofloxacin loading: every 15 minutes for 6 hours, then every 30 minutes for the rest of the day, hourly the next day, then tapering. Review within 24 hours.',
                recall: 'The notes cite Gangopadhyay et al (2000): monotherapy meant a shorter course of intensive treatment and a shorter hospital stay. They also say dual therapy in the elderly because “cipro can cause corneal perforation”: older patients are given fortified therapy because their ulcers are often more severe and they are at higher risk of melting, not because ciprofloxacin perforates corneas.'
            },
            {
                phase: '4. Worse or better',
                type: 'mcq',
                critical: true,
                question: '“What would you do if he came back the next day and it was worse?”',
                options: [
                    'Worse at 24 hours is a red flag: same-day hospital referral for scrapes, fortified dual therapy and a look for fungus or Acanthamoeba; don’t add a steroid.',
                    'Some worsening at 24 hours is expected, so carry on and review in a week; if it is still worse then, add pred forte hourly to calm the inflammation before referring to hospital.',
                    'Stop the antibiotic, as the ulcer is worse because of drug toxicity, and switch to a bandage contact lens and lubricants; review in 3 days to see if the epithelium has healed.',
                    'Double the dose of ciprofloxacin and add chloramphenicol, then review in 2 days; hospital referral is only needed if the vision drops below counting fingers in that eye.'
                ],
                answer: 0,
                explain: 'If it is improving: smaller, denser-edged infiltrate, less pain and AC reaction, healing epithelium. Taper slowly as it heals and keep reviewing.'
            },
            {
                phase: '5. Steroids?',
                type: 'mcq',
                question: '“Would you use a steroid, and why?”',
                options: [
                    'Possibly, once the organism is controlled and the epithelium is healing, under the ophthalmologist, with antibiotic continued. SCUT: no overall benefit, maybe some for severe central ulcers.',
                    'Yes, from the first visit together with the antibiotic, since SCUT showed steroids halve healing time and prevent scarring in every bacterial ulcer, including fungal and Nocardia infections.',
                    'Never in any case, since SCUT showed steroids double the rate of perforation in bacterial keratitis; they are contraindicated for life in any eye that has had an infected corneal ulcer.',
                    'Yes, as the only treatment: once the ulcer is diagnosed as bacterial, the antibiotic can be stopped and replaced with a steroid, which clears the infection through the immune system.'
                ],
                answer: 0,
                explain: 'The aim is to limit scarring from the inflammatory response (matrix metalloproteinases dissolve collagen); the risk is slower healing and a worse infection if it is started too early.'
            }
        ]
    },
    {
        id: 'r2014-uveitis-idiopathic',
        category: 'uveitis',
        title: 'Most Likely Idiopathic: Doses, Taper and Back Pain',
        theme: 'Acute Anterior Uveitis',
        years: ['2014', '2018'],
        patient: 'Young adult with a red, photophobic eye and limbal redness; clear cornea (2014, Alex; 2018, Tyson).',
        stem: 'Healthy, no medicines or allergies, but some joint pains.',
        steps: [
            {
                phase: '1. Most likely cause',
                type: 'mcq',
                question: '“What is the most likely cause?”',
                options: [
                    'Idiopathic: about half of AAU has no cause found. The largest known group is HLA-B27 disease (ankylosing spondylitis, reactive arthritis, psoriasis, IBD).',
                    'Herpes simplex: almost all anterior uveitis is herpetic, so every patient should start oral aciclovir at the first visit, before any steroid is considered.',
                    'Tuberculosis: it causes most anterior uveitis in Australia, so a chest X-ray is needed before any treatment, even for a single mild episode in a healthy young adult.',
                    'Contact lens wear: lens-related hypoxia is the most common cause of anterior uveitis, so the lenses should be thrown away and the uveitis will settle without any drops.'
                ],
                answer: 0,
                explain: 'HLA-B27 AAU is typically unilateral, recurrent, alternating, with a lot of fibrin; ask about the back.'
            },
            {
                phase: '2. Back pain',
                type: 'mcq',
                question: 'Tyson: “Would you suspect everyone with back or joint problems? Is there a particular feature that would warrant further investigation?”',
                options: [
                    'Inflammatory back pain: under 40, morning stiffness over 30 minutes, better with exercise not rest, waking them late at night. That suggests ankylosing spondylitis.',
                    'Mechanical back pain: pain only after lifting or exercise that eases with rest, starting after age 60, which is the typical pattern of ankylosing spondylitis in people with uveitis.',
                    'Any back pain at all, even a single day after gardening, since every back pain in a patient with uveitis is caused by HLA-B27 disease and needs a full rheumatology work-up.',
                    'Back pain is never relevant to uveitis, so there is no need to ask about it; only skin rashes are linked with anterior uveitis, through psoriasis, and should be asked about.'
                ],
                answer: 0,
                explain: 'Other review-of-systems questions: mouth and genital ulcers (Behçet’s), diarrhoea or blood in stools (IBD), rashes and psoriasis, cough and breathlessness (sarcoid, TB), urethritis (reactive arthritis).'
            },
            {
                phase: '3. Grading',
                type: 'match',
                question: '“What is the SUN grading scale?” Match each AC cell grade to the count in a 1 mm × 1 mm beam.',
                pairs: [
                    { label: 'Grade 0', answer: 'Fewer than 1 cell' },
                    { label: 'Grade 0.5+', answer: '1–5 cells' },
                    { label: 'Grade 1+', answer: '6–15 cells' },
                    { label: 'Grade 2+', answer: '16–25 cells' },
                    { label: 'Grade 3+', answer: '26–50 cells' },
                    { label: 'Grade 4+', answer: 'More than 50 cells' }
                ],
                explain: 'Flare: 0 none, 1+ faint, 2+ moderate (iris details clear), 3+ marked (iris details hazy), 4+ intense (fibrin, plastic aqueous). Record a hypopyon separately.'
            },
            {
                phase: '4. Changing the dose',
                type: 'mcq',
                question: '“When do you change your doses? What is a slow taper, and what happens if you don’t taper?”',
                options: [
                    'Pred forte 1% hourly; QID once cells fall by 2 SUN grades; then a slow taper once quiet (e.g. a drop less each week). Stopping suddenly causes rebound inflammation.',
                    'Keep pred forte 1% hourly until every single cell has gone, then stop it on the same day; tapering is only needed if the patient has used the steroid for longer than 6 months.',
                    'Start pred forte QID and increase it by one drop a day until the eye is white; once white, stop it the next day, since a taper would only expose the eye to more steroid.',
                    'Start FML 0.1% once a day and never change it; doses aren’t adjusted in uveitis, since the inflammation follows a fixed course that the dose doesn’t alter.'
                ],
                answer: 0,
                explain: 'A fast taper (e.g. QID 4 days, TDS 3 days, BD 2 days, daily 1 day) suits short courses for mild inflammation; uveitis treated hourly needs a slower one.'
            },
            {
                phase: '5. Cycloplegia',
                type: 'mcq',
                question: '“Any other treatment? When do you stop homatropine?”',
                options: [
                    'A cycloplegic (homatropine 2% BD–TDS or atropine 1%) for pain and synechiae; stop it once the pain has gone, synechiae are broken and the AC is nearly quiet.',
                    'A miotic such as pilocarpine 2% QID to keep the pupil small and stop synechiae forming; stop it once the steroid is finished, as the two drops have to be stopped at the same time.',
                    'Cyclopentolate 1% hourly alongside the steroid, which is the best cycloplegic in uveitis because it lasts the longest; stop it only once the eye has been white for 3 months.',
                    'No other treatment is ever needed, as the steroid breaks synechiae on its own; homatropine is only used for refraction and has no role in the treatment of uveitis.'
                ],
                answer: 0,
                explain: 'Cyclopentolate is avoided in uveitis by some because it may attract leucocytes; it is also shorter-acting. Pilocarpine would encourage synechiae.'
            },
            {
                phase: '6. Steroid cautions',
                type: 'multi',
                question: '“What are the side effects and contraindications of steroids?” Select the true ones.',
                options: [
                    'Contraindicated with active epithelial HSV, fungal or untreated bacterial keratitis',
                    'Caution with a past steroid response, glaucoma or OHT, and a history of HSV keratitis',
                    'IOP rise (usually after 2–6 weeks; earlier in children)',
                    'Posterior subcapsular cataract with long-term use',
                    'Slower epithelial healing and a higher infection risk',
                    'They lower IOP, so they suit patients with glaucoma'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Check IOP at baseline and at each review. Uveitis can lower IOP (ciliary shutdown) or raise it (trabeculitis, steroid response).'
            }
        ]
    },
    // ------------------------------------------------------------------ 2018
    {
        id: 'r2018-child-chlamydia',
        category: 'conj',
        title: 'Seven Days of Crusting: Not Getting Better',
        theme: 'Bacterial → Chlamydial Conjunctivitis in a Child',
        years: ['2018'],
        patient: 'Young child with red eyes and a lot of crusting for 7 days (Fiona Stapleton’s case, 2018 Dolly and Joseph).',
        stem: 'Photo of the child.',
        exhibit: 'Photo: both eyes red, with mucopurulent crusting on the lashes.',
        steps: [
            {
                phase: '1. Causes in children',
                type: 'mcq',
                question: '“Most likely diagnosis? What are the main causes in children? What would you treat it with, and how does it work?”',
                options: [
                    'Bacterial conjunctivitis: H. influenzae, Strep pneumoniae, Moraxella, Staph aureus. Chloramphenicol 0.5% (ointment for small children); binds 50S, broad spectrum, bacteriostatic.',
                    'Viral conjunctivitis: adenovirus is the only cause in children. Oral aciclovir syrup; it blocks viral DNA polymerase, so it works on all viruses and also treats a bacterial infection.',
                    'Bacterial conjunctivitis: Pseudomonas is the main cause in children. Ciprofloxacin 0.3% drops hourly; binds the 30S ribosome, narrow spectrum against gram-positives, bacteriostatic.',
                    'Allergic conjunctivitis: pollen is the main cause in children. Pred forte QID; blocks histamine receptors on mast cells, so it works within minutes and is safe for long-term use.'
                ],
                answer: 0,
                explain: 'Chloramphenicol is fine in children; the very rare aplastic anaemia link is the reason to avoid it with a personal or family history of blood disorders.'
            },
            {
                phase: '2. Review',
                type: 'reveal',
                text: 'Reviewed after a day or two: it looks the same. Swabbed for culture: negative.'
            },
            {
                phase: '3. Swab negative',
                type: 'mcq',
                question: '“The swab is negative. What now? What type of bacterium is chlamydia?”',
                options: [
                    'Think chlamydia, which doesn’t grow on standard culture: it is an obligate intracellular gram-negative bacterium, so it needs a PCR (NAAT) swab of the conjunctiva with epithelial cells.',
                    'A negative culture rules out all infection, so this must be allergic; stop the antibiotic and start a steroid, since a swab misses nothing if it is taken properly from the discharge.',
                    'Chlamydia is a virus, so it can’t grow on a bacterial culture plate; it needs a viral culture from blood, and the treatment is aciclovir rather than an antibiotic.',
                    'Chlamydia is a fungus that takes 6 weeks to grow on a culture plate, so wait for the final result before changing anything, while continuing the chloramphenicol.'
                ],
                answer: 0,
                explain: 'Chlamydia trachomatis serotypes D–K cause inclusion conjunctivitis; A–C cause trachoma.'
            },
            {
                phase: '4. A child with chlamydia',
                type: 'mcq',
                critical: true,
                question: '“Chlamydia may be indicative of child abuse. What do you do? How do you treat it?”',
                options: [
                    'Outside the newborn period, chlamydia in a child raises the possibility of sexual abuse: involve the GP or paediatrician, follow reporting duties, and treat with oral azithromycin.',
                    'Nothing beyond the drops: chlamydia in children is always caught from swimming pools, so there is no need to tell anyone, and topical chloramphenicol QID will clear it on its own in a few weeks.',
                    'Tell the parents to keep the child home for a month; chlamydia in children is a mild allergy that needs no antibiotic, and reporting concerns is only required for adults, never for children.',
                    'Refer the child to an eye hospital for corneal surgery, since chlamydia always scars the cornea in children; reporting isn’t needed because the eye doctors will deal with the family.'
                ],
                answer: 0,
                explain: 'In newborns it is usually passed on at birth (ophthalmia neonatorum, 5–14 days after birth) and needs same-day referral and systemic treatment, with the mother and partner treated too.'
            },
            {
                phase: '5. SAFE',
                type: 'mcq',
                question: '“What advice do you need to give?” The candidate answered with the SAFE acronym. What does SAFE stand for, and when does it apply?',
                options: [
                    'Surgery for trichiasis, Antibiotics (azithromycin), Facial cleanliness, Environmental improvement: the WHO trachoma strategy, used in some remote Aboriginal communities.',
                    'Sunglasses, Artificial tears, Frequent hand-washing and Eye patches: the advice for every child with any conjunctivitis, which is how the spread of chlamydia in schools is stopped.',
                    'Steroids, Atropine, Frequent review and Early referral: the strategy for uveitis in children, which chlamydia always causes, so it is the advice to give every family in this situation.',
                    'Swab, Antibiotic drops, Follow-up and Exclusion from school: the national rules for reporting chlamydia in children, which require 2 weeks off school after the swab result comes back.'
                ],
                answer: 0,
                explain: 'Australia is the only high-income country with endemic trachoma, in some remote Aboriginal communities. For an individual child, advise hand and face hygiene, separate towels, and treating the source of infection.'
            }
        ]
    },
    {
        id: 'r2018-two-eyes-fields',
        category: 'glaucoma',
        title: 'One Eye Moderate, the Other Just a Cluster',
        theme: 'Staging, Targets and Treating the Better Eye',
        years: ['2018'],
        patient: 'Adult with asymmetric glaucomatous discs and fields; IOP 25 mmHg in both eyes (2018: Dolly with Kath Watt, and Leo with Lily).',
        stem: 'Photos of both optic nerves, then the 24-2 fields.',
        exhibit: 'Disc photos of both eyes: both cups enlarged with thin rims and bared vessels, one cup clearly larger than the other.',
        steps: [
            {
                phase: '1. The fields',
                type: 'reveal',
                text: 'Right eye: a cluster of depressed points superiorly, MD −2 dB, GHT borderline. Left eye: an almost full superior hemifield defect. Fixation losses, false positives and false negatives are all low. IOP 25 mmHg in both eyes.'
            },
            {
                phase: '2. Differentials and stage',
                type: 'mcq',
                question: '“What are the differentials? With IOP 25, what do you think it is, and what stage?”',
                options: [
                    'Glaucoma is most likely (also consider NAION, branch vessel occlusion, drusen). Left: advanced on Hodapp–Mills (near-total hemifield); right: suspicious early loss that needs confirming.',
                    'Bilateral pituitary tumour is most likely, since superior defects are always chiasmal; both eyes are end-stage, and the patient should be sent for urgent surgery rather than treated for glaucoma.',
                    'Both eyes are normal, since an IOP of 25 is within the normal range for older adults; superior defects come from the upper lid, so the fields should be repeated with the lids taped up.',
                    'Bilateral optic neuritis is most likely, since both eyes are affected; both eyes are early stage, because the MD in the right eye is only −2 dB and that sets the stage for both eyes.'
                ],
                answer: 0,
                explain: 'Each eye is staged on its own. A superior defect matches an inferior rim notch.',
                recall: 'The 2018 candidates used “Mills criteria by looking at the MD value”. Mills (2006) extends the Hodapp–Parrish–Anderson system; besides MD, the number of depressed points and central points within 5° decide the stage.'
            },
            {
                phase: '3. Treat on one field?',
                type: 'mcq',
                question: 'Leo (Lily): “Would you treat based on just one field? What other considerations would make you want to treat?”',
                options: [
                    'Yes, if the defect matches the disc and the IOP is raised, especially in the advanced eye; repeat the field soon for a baseline. Family history, thin CCT and haemorrhages add weight.',
                    'Never: three identical fields over a year are always needed before any treatment, even in an advanced eye with an IOP of 25, since treating on one field is negligent under the guidelines.',
                    'Yes, but only if the patient is under 40, since older patients won’t live long enough to lose sight from glaucoma; family history and CCT play no part in the decision to treat.',
                    'Yes, on one field alone, even without any matching change at the disc, since the field is the only test that matters in glaucoma and the disc appearance can be ignored.'
                ],
                answer: 0,
                explain: 'Early fields often improve on repeat (learning effect), so a borderline defect alone needs confirming. A dense defect with a matching notch doesn’t need to wait.'
            },
            {
                phase: '4. Drops and counselling',
                type: 'mcq',
                question: '“What would you treat it with? What do you say to the patient? What target, and from which paper?”',
                options: [
                    'Latanoprost 0.005% at night. Explain side effects and technique, and that drops prevent loss but don’t reverse it. Target 25–30% lower (EMGT), lower still for the advanced eye.',
                    'Timolol 0.5% four times a day: β-blockers are the strongest drops. Tell the patient their vision will improve once the IOP falls. Target 21 mmHg in both eyes, from the OHTS paper.',
                    'Pilocarpine 2% QID: miotics are first-line for open-angle glaucoma. Tell the patient side effects are rare. The target is 10 mmHg in all cases, from the AGIS paper.',
                    'Brimonidine 0.2% once a day at night: it is neuroprotective so no target is needed. The patient doesn’t need any warnings, as it has no side effects in adults.'
                ],
                answer: 0,
                explain: 'AGIS: advanced eyes with IOP consistently below 18 mmHg had little progression. Set and write down an IOP target for each eye.',
                recall: 'Dolly said they would warn about the cosmetic effect “cause only one eye”: worth saying if only one eye is treated, but here both eyes have raised IOP.'
            },
            {
                phase: '5. Review',
                type: 'mcq',
                question: '“When do you want to review? Why that period? What do you check?”',
                options: [
                    'At 4–6 weeks, when the drop is at full effect: IOP against target, adherence, technique, side effects and a repeat field. Then every 3–4 months while new or advanced.',
                    'At 12 months, since drops take a year to work fully; check only the IOP at that visit, since side effects and adherence don’t affect how well a glaucoma drop works.',
                    'The next day and then daily for a month, since a new glaucoma drop needs to be checked as often as an antibiotic for a corneal ulcer, in case it causes a sudden IOP spike.',
                    'Only if the patient notices a change in their vision, since glaucoma progression always causes symptoms that the patient will notice before any change on the fields.'
                ],
                answer: 0,
                explain: 'Six fields in the first two years lets you detect a fast rate of progression early.'
            },
            {
                phase: '6. The better eye',
                type: 'mcq',
                question: '“Do you want to treat the other eye?” (The right eye: just the superior cluster.)',
                options: [
                    'Yes: IOP 25 with glaucoma in the other eye makes it high risk (OHTS: treatment halved conversion), so treat both, and confirm the defect with a repeat field and OCT.',
                    'No, never: a fellow eye is only treated once it has the same stage of loss as the worse eye, so the right eye should be left until it also has a near-total hemifield defect.',
                    'No, because treating both eyes doubles the side effects, and the right eye’s IOP of 25 is safe in someone who has glaucoma in the other eye, which protects the better eye.',
                    'Yes, but with surgery straight away rather than drops, since a fellow eye can’t respond to drops once the other eye has advanced glaucoma, so trabeculectomy is the only option.'
                ],
                answer: 0,
                explain: 'Leo said they would get two baseline fields and an OCT and review in 6 months, and would treat now if the patient had high-risk OHT. Both answers are defensible; give the reasoning.'
            }
        ]
    },
    {
        id: 'r2018-hsv-stromal-steroid',
        category: 'cornea',
        title: 'Types of Herpes Keratitis, Then a Steroid Response',
        theme: 'HSV Stromal Keratitis and Steroid IOP Rise',
        years: ['2018'],
        patient: 'Adult with herpes simplex keratitis (2018: Leo with Lily, and a case of HSV-1 stromal keratitis with a steroid response).',
        stem: '“Describe what you see in this herpes keratitis.” The candidate asked, “Which type?”, and the examiner asked them to list the types.',
        steps: [
            {
                phase: '1. The types',
                type: 'match',
                question: '“List the types.” Match each type of HSV keratitis to its appearance.',
                pairs: [
                    { label: 'Epithelial (dendritic or geographic)', answer: 'Branching ulcer with terminal bulbs, staining with fluorescein and rose bengal at the edges' },
                    { label: 'Immune stromal (non-necrotising)', answer: 'Stromal haze and infiltrate under an intact epithelium, often with vessels' },
                    { label: 'Necrotising stromal', answer: 'Dense infiltrate with ulceration and thinning, from live virus in the stroma' },
                    { label: 'Endotheliitis (disciform)', answer: 'Disc of stromal oedema with KPs underneath, raised IOP is common' },
                    { label: 'Neurotrophic', answer: 'Smooth-edged oval defect from lost corneal sensation, not live virus' }
                ],
                explain: 'Epithelial disease is live virus; stromal immune and endothelial disease are mainly immune reactions; neurotrophic ulcers need lubrication, not more antiviral.'
            },
            {
                phase: '2. Epithelial',
                type: 'mcq',
                question: '“Epithelial: management, palliative therapy, review time and expected course?”',
                options: [
                    'Oral aciclovir 400 mg 5 times a day for 7–10 days via the GP, or ganciclovir 0.15% gel 5 times a day; no steroid; lubricants for comfort; review in 2–3 days. Most heal in 1–2 weeks.',
                    'Pred forte 1% hourly to calm the dendrite, with chloramphenicol QID as cover; review in 4 weeks. Dendrites never recur once they have healed, so the patient can be discharged after that visit.',
                    'No treatment, since dendrites always heal in a day or two; review in 6 months. Antivirals are only used if the patient also has a cold sore on the lip at the same time as the dendrite.',
                    'A bandage contact lens for 4 weeks, since the dendrite is a mechanical abrasion; review in a month. Antivirals make the epithelium heal more slowly and should be avoided completely.'
                ],
                answer: 0,
                explain: 'Debridement of the dendrite edges can help too. Steroid with live epithelial virus can make it spread into a geographic ulcer.'
            },
            {
                phase: '3. Stromal',
                type: 'mcq',
                question: '“Stromal: how would you treat it? What does HEDS say about prophylaxis?”',
                options: [
                    'Immune stromal: topical steroid (tapered over weeks) with oral aciclovir cover once the epithelium is intact; co-manage. HEDS: aciclovir 400 mg BD for 12 months halved recurrences.',
                    'Antiviral alone, with no steroid ever, since steroids are always contraindicated in HSV; HEDS showed that adding a steroid to an antiviral made stromal keratitis worse in every patient in the trial.',
                    'Steroid alone with no antiviral, since stromal disease is immune and the virus is never involved; HEDS showed antiviral cover has no effect and only causes kidney damage in long-term use.',
                    'Oral aciclovir 800 mg 5 times a day for life in everyone who has ever had a cold sore, since HEDS showed it stops every type of herpes keratitis from ever occurring, even a first episode.'
                ],
                answer: 0,
                explain: 'HEDS: topical steroid with antiviral cover sped up recovery in stromal keratitis; oral aciclovir alone didn’t help active stromal disease but prophylaxis cut recurrences.',
                recall: 'The candidate said prophylaxis is “400 mg BD for the rest of your life”. HEDS used 12 months; longer courses are sometimes used for frequent recurrences, but “for life” isn’t standard.'
            },
            {
                phase: '4. Oral aciclovir',
                type: 'mcq',
                question: '“Contraindications of oral aciclovir?”',
                options: [
                    'Aciclovir or valaciclovir allergy; lower the dose in kidney impairment (it is cleared by the kidneys and can crystallise there, so keep hydrated).',
                    'Asthma and heart block, since aciclovir is a β-blocker; it is also contraindicated in anyone under 60, because it can only be cleared by an older liver.',
                    'Sulfonamide allergy and kidney stones, since aciclovir is a carbonic anhydrase inhibitor; it is otherwise completely safe in everyone at any dose for any length of time.',
                    'Any history of cold sores, since aciclovir makes the virus resistant in people who have had it before; it can only be given to people who have never had herpes.'
                ],
                answer: 0,
                explain: 'Common side effects are nausea, diarrhoea and headache.'
            },
            {
                phase: '5. Steroid response',
                type: 'reveal',
                text: 'On pred forte for stromal keratitis, the IOP rises from 15 to 29 mmHg over 4 weeks. The stroma is improving.'
            },
            {
                phase: '6. What and how',
                type: 'mcq',
                question: '“What’s classified as a steroid response? Would you treat it, and how? Contraindications?”',
                options: [
                    '6–15 mmHg is moderate (about a third of people), over 15 high (about 5%). Yes: taper or switch to FML, and add timolol, brimonidine or a CAI. Avoid PGAs (HSV, inflammation).',
                    'Any IOP above 21 mmHg is a response, which happens in 90% of people. No: a steroid response always settles while the steroid continues, so no change is needed until the course is finished.',
                    'A rise of over 50 mmHg is a response, which happens in under 1 in 1000 people. Treat with latanoprost, since PGAs are the drop of choice in any eye with herpes or inflammation.',
                    'A steroid response is a fall in IOP, which happens in most people. Treat by stopping the steroid suddenly, since tapering would keep the IOP low and that would damage the optic nerve.'
                ],
                answer: 0,
                explain: 'Higher-risk responders: POAG and their relatives, high myopes, diabetics, connective tissue disease, children. Responses usually start 2–6 weeks into treatment.'
            }
        ]
    },
    {
        id: 'r2018-joseph-pxf',
        category: 'glaucoma',
        title: 'Joseph’s PXF Photo and the Pregnancy Question',
        theme: 'Pseudoexfoliation: PDS Comparison and Drops in Pregnancy',
        years: ['2018'],
        patient: 'Older Caucasian adult (2018, Joseph).',
        stem: 'Photo of the lens.',
        exhibit: 'Photo: dilated pupil with greyish-white flaky material on the anterior lens capsule and along the pupil margin.',
        steps: [
            {
                phase: '1. What and who',
                type: 'mcq',
                question: '“What do you see? What is the patient profile?”',
                options: [
                    'Pseudoexfoliation in three zones on the lens. Usually over 60, commoner in Scandinavian and Mediterranean descent, linked with LOXL1 variants; often one eye first.',
                    'Pigment on the lens from pigment dispersion. Typically young, short-sighted men in their 20s, and the material is caused by the iris rubbing on the zonules in both eyes.',
                    'A posterior subcapsular cataract. Typically young people on long-term oral steroids, and the clear ring is the part of the lens that the steroid hasn’t reached yet.',
                    'Inflammatory deposits from uveitis. Typically young adults with HLA-B27 disease, and the clear ring forms when posterior synechiae break off the front of the lens.'
                ],
                answer: 0,
                explain: 'The notes say “old white frail female”: PXF is more common with age, but in most populations it isn’t clearly more common in women. Systemic links with heart and vascular disease have been reported.'
            },
            {
                phase: '2. PXF vs PDS',
                type: 'match',
                question: '“How does this differ from PDS in terms of signs and patient profile?” Match each feature to PXF or PDS.',
                pairs: [
                    { label: 'Patchy meshwork pigment and a Sampaolesi line', answer: 'PXF' },
                    { label: 'Dense, even meshwork pigment all the way round', answer: 'PDS' },
                    { label: 'Transillumination defects near the pupil margin', answer: 'PXF' },
                    { label: 'Mid-peripheral spoke-like transillumination defects and a Krukenberg spindle', answer: 'PDS' },
                    { label: 'Young myopic adult, concave iris', answer: 'PDS' },
                    { label: 'Weak zonules and phacodonesis', answer: 'PXF' }
                ],
                explain: 'Both cause raised IOP from material or pigment blocking the meshwork; PXF is usually asymmetric, PDS usually symmetric.'
            },
            {
                phase: '3. When to treat',
                type: 'mcq',
                question: '“Would you treat? At what IOP? If there was a 10 mmHg difference on phasing, would you treat?”',
                options: [
                    'Treat glaucomatous damage, or high or fluctuating IOP with risk factors: PXF converts and progresses fast. A 10 mmHg swing on phasing is a risk factor, so yes, if the disc is at risk.',
                    'Never treat PXF until the IOP reaches 40 mmHg, whatever the disc looks like; IOP fluctuations of any size don’t matter in PXF, as only the average IOP affects the optic nerve.',
                    'Always treat PXF as soon as the material is seen, even if the IOP is 12 with a normal disc and field, since every PXF eye becomes glaucoma within a year of diagnosis.',
                    'Treat only if the patient is under 50 years old; older PXF patients won’t live long enough to lose vision, so phasing and IOP differences are irrelevant in this age group.'
                ],
                answer: 0,
                explain: 'PXF without damage: review every 6–12 months, closer (about 3 months) if IOP is borderline. PXG: about every 3 months at first with frequent fields.'
            },
            {
                phase: '4. Pregnancy',
                type: 'mcq',
                question: '“What drops would you choose in pregnancy? What class is brimonidine?”',
                options: [
                    'Avoid drops if possible (observe, or SLT). If needed: brimonidine (alpha-2 agonist, TGA B3; stop before delivery) or low-dose timolol (C) with punctal occlusion; avoid PGAs.',
                    'Latanoprost is the drop of choice throughout pregnancy, since PGAs are category A and relax the uterus; brimonidine is a β-blocker and is contraindicated from the first day of pregnancy.',
                    'Oral acetazolamide is the safest choice in pregnancy, since it is category A and doesn’t cross the placenta; brimonidine is a carbonic anhydrase inhibitor, so it is avoided in pregnancy.',
                    'No glaucoma drop is safe in pregnancy, so all treatment must stop until after breastfeeding ends; brimonidine is a prostaglandin and is the most dangerous of all the drops in pregnancy.'
                ],
                answer: 0,
                explain: 'TGA categories: timolol C; latanoprost, brimonidine, dorzolamide, brinzolamide and acetazolamide B3. IOP often falls during pregnancy.',
                recall: 'The notes list brimonidine as B1 and PGAs as C. In Australia (TGA) both brimonidine and the PGAs are B3; timolol is C. Another 2018 candidate said PGAs are only a problem in the last trimester: they are best avoided throughout.'
            }
        ]
    }
);
