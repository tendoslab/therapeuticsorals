// Case report warm-ups, scope of practice and cross-topic pharmacology.
// Cases marked `warmup: true` open a mock oral (examiners often start with the case reports).
window.CASES.push(
    {
        id: 'vf-interpretation',
        category: 'professional',
        warmup: true,
        title: 'Case Report: Reading the Field Printout',
        theme: 'Case Report Viva',
        years: ['2019', '2025'],
        patient: 'Case report follow-up (your NTG / POAG report).',
        stem: '“Let\'s talk about the visual fields in your case report.”',
        steps: [
            {
                phase: '1. Global indices',
                type: 'match',
                question: 'Match each Humphrey index to what it measures.',
                pairs: [
                    { label: 'Mean deviation (MD)', answer: 'Average departure from age-matched normal across the field (overall / diffuse loss)' },
                    { label: 'Pattern standard deviation (PSD)', answer: 'Irregularity of the field — highlights localised loss' },
                    { label: 'Glaucoma hemifield test (GHT)', answer: 'Compares 5 mirror-image sector pairs above and below the horizontal midline' },
                    { label: 'VFI', answer: 'Percentage of normal visual function remaining, weighted to the centre' }
                ],
                explain: 'Cataract lowers MD (diffuse) without much PSD change. Early glaucoma raises PSD. In very advanced loss PSD can fall again because the field becomes uniformly depressed.'
            },
            {
                phase: '2. Reliability',
                type: 'viva',
                question: 'How do you judge reliability, and what does the gaze tracker show?',
                points: [
                    'Fixation losses (blind-spot method) — high if above ~20%',
                    'False positives — trigger-happy; SITA flags above ~15% (pale “white-scotoma” fields)',
                    'False negatives — fatigue or inattention (also rise in damaged fields)',
                    'Gaze tracker: upward spikes = gaze deviation (size shows degrees); downward spikes = blink or the tracker lost the eye',
                    'Test duration, learning effect — repeat a new defect to confirm (at least 2–3 fields for a baseline)'
                ],
                explain: 'Always comment on reliability before interpreting a field — the 2025 panels specifically asked about the gaze tracker.'
            },
            {
                phase: '3. Advanced glaucoma',
                type: 'mcq',
                question: 'What is considered “advanced” glaucoma on the field (Hodapp–Parrish–Anderson)?',
                options: [
                    'MD worse than −6 dB, or any point within the central 10° below 15 dB, or a GHT outside normal limits in both hemifields.',
                    'MD worse than −12 dB, or a point within the central 5° at 0 dB, or both hemifields with points below 15 dB within 5°.',
                    'MD worse than −20 dB, or more than half the points at p<1%, or loss of fixation on the gaze tracker for over 20% of the test.',
                    'PSD above 2 dB, or any nasal step, or a VFI below 90% — whichever comes first, regardless of central involvement.'
                ],
                answer: 1,
                explain: 'Early: MD better than −6 dB. Moderate: −6 to −12 dB (or a central point below 15 dB in one hemifield). Know which system you are quoting (Hodapp; Mills / Enhanced Glaucoma Staging System).'
            },
            {
                phase: '4. CCT & IOP',
                type: 'mcq',
                question: '“Explain the relationship between CCT and IOP in your patient.”',
                options: [
                    'Goldmann assumes ~600 µm: thin corneas over-read and thick ones under-read. Thick CCT is the independent conversion risk factor in OHTS, because it hides IOP.',
                    'Goldmann assumes ~520 µm: thin corneas under-read and thick ones over-read. Separately, thin CCT is an independent conversion risk factor (OHTS). Hysteresis also matters.',
                    'Goldmann is unaffected by CCT; only non-contact tonometry is. CCT matters only as a refractive-surgery consideration, and was not a risk factor in OHTS once IOP was known.',
                    'Correct every IOP by exactly 1 mmHg per 10 µm from 545 µm; once corrected, CCT has no further meaning for risk, so it is left out of the OHTS calculator.'
                ],
                answer: 1,
                explain: 'Correction nomograms are approximate and not validated for individuals. Use CCT in risk assessment (OHTS/EGPS calculator) rather than “correcting” IOP precisely.',
                recall: 'A 2025 candidate who scored over 75 on their case report was still probed hard on CCT and IOP — don\'t assume a good report means no questions.'
            }
        ]
    },
    {
        id: 'scope-rules',
        category: 'professional',
        warmup: true,
        title: 'Scope, Referral Rules, PBS & Medicare',
        theme: 'Professional Practice',
        years: ['2025'],
        patient: 'Case report follow-up.',
        stem: '“You initiated glaucoma treatment in your case report. Talk us through your obligations.”',
        steps: [
            {
                phase: '1. Referral requirement',
                type: 'mcq',
                question: 'Under the OBA scheduled medicines guideline (as taught for this exam), what must you do after starting glaucoma treatment?',
                options: [
                    'Refer to an ophthalmologist within 24 hours of starting treatment, and stop prescribing until the ophthalmologist has confirmed the diagnosis.',
                    'Refer to an ophthalmologist within 4 months of starting treatment, with a plan for ongoing collaborative care (check the current wording).',
                    'Refer to an ophthalmologist only if the target isn’t met within 12 months; otherwise continue managing alone with yearly fields and OCT.',
                    'Notify the GP within 4 months so they can take over prescribing; ophthalmology referral is needed only for secondary glaucomas.'
                ],
                answer: 1,
                explain: 'Find the rules in the Optometry Board of Australia\'s Guideline for use of scheduled medicines (and Optometry Australia\'s clinical practice guides). Use the RANZCO referral pathway to decide which glaucoma types suit collaborative care: secondary, complex and angle-closure glaucomas, young patients and rapid progression generally need an ophthalmologist.',
                recall: 'A 2025 examiner asked for “the legal requirements for referring glaucoma” and “how would you find out these requirements?” — the OBA guideline (Ahpra/OBA website) and the RANZCO pathway.'
            },
            {
                phase: '2. Scope',
                type: 'multi',
                question: 'Which can an endorsed Australian optometrist prescribe directly?',
                options: [
                    'Topical latanoprost',
                    'Topical ciprofloxacin 0.3%',
                    'Topical prednisolone acetate 1%',
                    'Oral acetazolamide',
                    'Oral valaciclovir',
                    'Fortified tobramycin 1.3% (hospital-compounded)',
                    'Topical tobramycin 0.3%'
                ],
                answers: [0, 1, 2, 6],
                explain: 'Oral medicines go through the GP, ED or ophthalmologist. Fortified antibiotics and antifungals are hospital preparations. Over-the-counter oral analgesics (paracetamol, ibuprofen) can be <em>recommended</em>.'
            },
            {
                phase: '3. Collaborative roles',
                type: 'viva',
                question: '“What is the difference between your management, the GP\'s and the ophthalmologist\'s?” (e.g. HZO, PXF)',
                points: [
                    'Optometrist: diagnosis, topical therapy, monitoring IOP / cornea / uveitis, education, timely referral',
                    'GP: oral medicines (antivirals, antibiotics, analgesia, acetazolamide), systemic work-up (bloods, imaging), vaccination, comorbidities and medication review',
                    'Ophthalmologist: laser (SLT, LPI), surgery, intravitreal or periocular therapy, systemic immunosuppression, complex or secondary disease',
                    'Clear written referral and agreed shared-care plan'
                ],
                explain: 'Panels liked candidates who named exactly who they would call and why, without sending the patient to “three different places” unnecessarily.'
            },
            {
                phase: '4. Medicare fields',
                type: 'mcq',
                question: 'Your PXF patient needs fields every 3 months. Medicare limits how often full-threshold perimetry can be claimed. What do you do?',
                options: [
                    'Never test more often than Medicare allows: clinical need doesn’t override MBS frequency limits, so extend the interval to fit the rules and document why.',
                    'Check the current MBS rules on frequency of perimetry items; if clinically needed testing exceeds them, explain and agree a private fee, or coordinate with the co-managing ophthalmologist.',
                    'Bill the extra fields under a different MBS item (e.g. a comprehensive consultation) so the patient isn’t out of pocket; the frequency limit only applies to the perimetry item itself.',
                    'Do the extra fields free of charge and don’t record them in the file, since unbilled tests aren’t subject to MBS rules and documentation would trigger an audit.'
                ],
                answer: 1,
                explain: 'Clinical need decides the testing interval. Be transparent about costs and document consent. A 2025 candidate recalled “2 per year” as the limit — verify against the current MBS.'
            }
        ]
    },
    {
        id: 'pregnancy-children',
        category: 'professional',
        title: 'Prescribing in Pregnancy, Breastfeeding & Children',
        theme: 'Special Populations',
        years: ['2018', '2025', 'Mock 2025'],
        patient: 'Cross-topic pharmacology.',
        stem: 'The examiner asks a run of quick-fire questions about special populations.',
        steps: [
            {
                phase: '1. TGA categories',
                type: 'match',
                question: 'Match each drug to its Australian (TGA) pregnancy category.',
                pairs: [
                    { label: 'Chloramphenicol', answer: 'A' },
                    { label: 'Timolol', answer: 'C' },
                    { label: 'Latanoprost', answer: 'B3' },
                    { label: 'Prednisolone', answer: 'A' }
                ],
                distractors: ['X', 'D'],
                explain: 'Brimonidine, dorzolamide, brinzolamide, acetazolamide, ciprofloxacin and aciclovir are also B3. Use TGA categories in Australian orals — the old US letters (e.g. “cipro category C”) differ. Wherever possible, use the lowest effective dose and punctal occlusion, and involve the obstetrician.'
            },
            {
                phase: '2. Brimonidine',
                type: 'mcq',
                question: 'What is the specific risk with brimonidine around birth and in infancy?',
                options: [
                    'It causes cleft palate if used in the first trimester (organogenesis); it is safe after 12 weeks and during breastfeeding, and is safe in infants at half the adult dose, given BD.',
                    'It crosses the immature blood–brain barrier → CNS depression, apnoea, bradycardia, hypotension; contraindicated under 2; stop before delivery and avoid while breastfeeding.',
                    'It causes neonatal jaundice by competing for bilirubin binding; stop at 36 weeks; safe in infants over 6 months with punctal occlusion.',
                    'It causes premature labour (uterotonic like PGAs); stop at 20 weeks; no CNS effects in infants, so it is preferred over timolol in children.'
                ],
                answer: 1,
                explain: 'That is why brimonidine is often used earlier in pregnancy but stopped near term.'
            },
            {
                phase: '3. Children',
                type: 'viva',
                question: 'What precautions apply when prescribing eye drops for children?',
                points: [
                    'Higher systemic dose by body weight; immature metabolism',
                    'Punctal occlusion / wipe the excess; lowest effective strength (e.g. cyclopentolate 0.5% in infants, atropine 0.5%)',
                    'Antimuscarinic toxicity: flushing, fever, tachycardia, delirium (“hot as a hare…”)',
                    'Brimonidine contraindicated under 2; timolol risk of apnoea / bradycardia in infants',
                    'Steroids: children are frequent, rapid steroid responders → close IOP checks; cataract risk',
                    'Co-management with paediatric ophthalmology for uveitis and glaucoma'
                ],
                explain: 'Reference: Webber & Sharwood (2021), Clin Exp Optom, “Prescribing ocular medications in children and infants”.'
            }
        ]
    },
    {
        id: 'nsaid-vs-steroid',
        category: 'professional',
        title: 'Topical NSAID vs Steroid & Post-Cataract Care',
        theme: 'Anti-inflammatories',
        years: ['2025'],
        patient: 'Cross-topic pharmacology (supplementary oral).',
        stem: '“When would you choose a topical NSAID over a topical steroid?”',
        steps: [
            {
                phase: '1. Mechanisms',
                type: 'mcq',
                question: 'How do topical NSAIDs differ from steroids?',
                options: [
                    'NSAIDs inhibit phospholipase A2 (blocking prostaglandins and leukotrienes), while steroids inhibit only cyclooxygenase. NSAIDs raise IOP more than steroids do but never cause corneal melts, so they suit long courses.',
                    'NSAIDs inhibit cyclooxygenase (prostaglandins only); steroids act upstream (lipocortin → phospholipase A2), blocking prostaglandins and leukotrienes. NSAIDs don’t raise IOP but are weaker and can cause melts.',
                    'NSAIDs and steroids both inhibit cyclooxygenase; they differ only in potency. NSAIDs are stronger than prednisolone acetate and are first line for uveitis, with the same IOP risk.',
                    'NSAIDs inhibit lipoxygenase (leukotrienes only); steroids inhibit cyclooxygenase (prostaglandins only). Both raise IOP equally, and neither affects corneal healing.'
                ],
                answer: 1,
                explain: 'Topical NSAIDs (ketorolac, diclofenac, bromfenac, nepafenac) are too weak to treat uveitis alone.'
            },
            {
                phase: '2. Uses',
                type: 'multi',
                question: 'Typical uses of topical NSAIDs in collaborative care?',
                options: ['Preventing and treating cystoid macular oedema after cataract surgery', 'Post-operative pain and inflammation (with a steroid)', 'Pain after PRK / abrasion (short-term, with caution)', 'Treating acute anterior uveitis alone', 'Treating HSV epithelial keratitis'],
                answers: [0, 1, 2],
                explain: 'Long-term or frequent use in diabetics, dry eye, rheumatoid patients or after complicated surgery risks corneal melt.'
            },
            {
                phase: '3. Post-cataract',
                type: 'viva',
                question: 'What drops would you expect after routine cataract surgery, and what do you check at a co-managed review?',
                points: [
                    'Topical antibiotic (e.g. chloramphenicol QID for ~1–2 weeks)',
                    'Topical steroid (e.g. prednisolone acetate or dexamethasone QID, tapering over ~4 weeks)',
                    '± topical NSAID for CMO prophylaxis (diabetics, epiretinal membrane, previous CMO)',
                    'Check VA, IOP (steroid response or retained viscoelastic), wound (Seidel), AC reaction, corneal clarity, IOL position, fundus (CMO)',
                    'Red flags: pain, worsening vision, hypopyon → endophthalmitis — same-day referral'
                ],
                explain: 'Combination products (e.g. dexamethasone/tobramycin) are sometimes used. Follow the surgeon\'s protocol.'
            },
            {
                phase: '4. Steroid substitutions',
                type: 'mcq',
                question: '“No Pred Forte available — what next? No Flarex either?” For anterior uveitis, the best substitute is:',
                options: [
                    'Fluorometholone 0.1% (FML) — equal to Pred Forte in active uveitis, with less IOP risk',
                    'Dexamethasone 0.1% (Maxidex) — potent and penetrating (higher IOP risk)',
                    'Hydrocortisone 1% ointment — best penetration overnight',
                    'Ketorolac 0.5% — an NSAID that replaces the steroid in AAU'
                ],
                answer: 1,
                explain: 'Rough potency and penetration order for intraocular inflammation: prednisolone acetate 1% ≈ dexamethasone 0.1% > fluorometholone acetate (Flarex) > FML > loteprednol / hydrocortisone. Prednisolone sodium phosphate is a solution with poorer penetration through an intact epithelium.',
                recall: 'A 2025 supplementary oral went “no Pred Forte → no Flarex → dexamethasone”.'
            }
        ]
    },
    {
        id: 'drug-interactions',
        category: 'professional',
        title: 'Drug Interactions: Starting Glaucoma Drops',
        theme: 'Drug Interactions',
        years: ['Exam guidelines'],
        patient: '74-year-old woman, newly diagnosed POAG (IOP 27 / 25 mmHg). Medicines: metoprolol 50 mg BD (atrial fibrillation), phenelzine 15 mg TDS (depression), aspirin 100 mg daily.',
        stem: '“You have decided to treat. Before you write anything, talk us through her medicines.”',
        steps: [
            {
                phase: '1. Medication history',
                type: 'viva',
                question: 'What do you check in her medicines and medical history before choosing a drop?',
                points: [
                    'The full medication list, including over-the-counter, herbal and other eye drops, and who prescribes them',
                    'Respiratory history: asthma or COPD (any β-blocker drop)',
                    'Cardiac history: bradycardia, heart block, heart failure, hypotension; take her pulse and BP',
                    'Antidepressants and CNS depressants: an MAOI or tricyclic changes what you can use (brimonidine, phenylephrine)',
                    'Allergies: sulfonamides (carbonic anhydrase inhibitors), preservatives (BAK)',
                    'Kidney and liver disease, kidney stones (CAIs), and how well she can instil drops'
                ],
                explain: 'The guidelines ask for contraindications, precautions, adverse effects and drug interactions. Saying “provided there are no contraindications” only earns marks if you then name what you checked.'
            },
            {
                phase: '2. Drop choice',
                type: 'mcq',
                critical: true,
                question: 'Given her medicines, which is the best first-line drop?',
                options: [
                    'Timolol 0.5% BD: she already tolerates oral β-blockade, so adding a topical β-blocker is safe, and it gives the largest IOP fall of any class in her.',
                    'Latanoprost 0.005% at night: once daily, nothing to add to her metoprolol or interact with her phenelzine, and about a 25–30% IOP fall.',
                    'Brimonidine 0.2% BD: an α2-agonist adds no cardiac load, and its only important interaction is with SSRIs, which she isn’t taking.',
                    'Betaxolol 0.25% BD: being β1-selective, it has no further effect on heart rate when it is added to oral metoprolol.'
                ],
                answer: 1,
                explain: 'Drops absorbed through the nasolacrimal mucosa skip first-pass metabolism, so a topical β-blocker adds to oral metoprolol: bradycardia, hypotension and heart block. Patients already on a systemic β-blocker also get less IOP lowering from a topical one. Brimonidine is contraindicated with MAOIs (product information).'
            },
            {
                phase: '3. Interactions to know',
                type: 'multi',
                question: 'Which of these are drug interactions you must check for before prescribing?',
                options: [
                    'Brimonidine with an MAOI (phenelzine, tranylcypromine): contraindicated',
                    'Brimonidine with tricyclic antidepressants or CNS depressants (alcohol, sedatives): caution',
                    'Timolol with verapamil or diltiazem: additive AV block, bradycardia and hypotension',
                    'Timolol with CYP2D6 inhibitors (fluoxetine, paroxetine, quinidine): stronger systemic β-blockade',
                    'Oral acetazolamide with high-dose aspirin: salicylate toxicity and metabolic acidosis',
                    'Latanoprost with an oral statin: the statin blocks the PGA, so the IOP doesn’t fall',
                    'Latanoprost with warfarin: the PGA raises the INR, so bleeding risk goes up',
                    'Pilocarpine with paracetamol: the combination causes liver toxicity'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Also avoid a topical and an oral carbonic anhydrase inhibitor together (more systemic effects, no extra IOP benefit) and two prostaglandin analogues together (the IOP can rise). Check the product information and AMH for anything you are unsure of.'
            },
            {
                phase: '4. Dilating her',
                type: 'mcq',
                critical: true,
                question: 'You want a dilated fundus exam. She is still taking phenelzine. What do you use?',
                options: [
                    'Tropicamide 1% alone: phenylephrine with an MAOI, or within 2–3 weeks of stopping one, risks a hypertensive crisis.',
                    'Phenylephrine 10% with tropicamide 1%: the MAOI interaction only matters for oral sympathomimetics, not eye drops.',
                    'Phenylephrine 2.5% with cyclopentolate 1%: the lower strength removes the interaction, so no BP check is needed.',
                    'Nothing: every mydriatic is contraindicated with an MAOI, so image her undilated and refer her for a dilated exam.'
                ],
                answer: 0,
                explain: 'Phenylephrine (both 2.5% and 10%) is contraindicated with MAOIs and for a period after stopping them; take care with tricyclics too. Tropicamide alone usually gives an adequate view. Check BP before and after any phenylephrine.'
            },
            {
                phase: '5. Systemic effects of ocular drugs',
                type: 'viva',
                question: '“Turn it round: what systemic effects can eye drops have, and how do you reduce them?”',
                points: [
                    'β-blockers (timolol): bronchospasm, bradycardia, heart block, hypotension, fatigue, depression, masked hypoglycaemia',
                    'Brimonidine: dry mouth, fatigue, drowsiness; contraindicated under 2 years (CNS depression, apnoea) and with MAOIs',
                    'Phenylephrine 10%: hypertension, tachycardia, arrhythmia; avoid in cardiac disease, with MAOIs or tricyclics, and in infants',
                    'Cyclopentolate and atropine: anticholinergic toxicity, worst in children (flushing, fever, tachycardia, ataxia, hallucinations); use the lowest strength',
                    'Topical CAIs (dorzolamide, brinzolamide): bitter taste; caution with sulfonamide allergy and severe kidney disease',
                    'Reduce absorption: one drop, then close the eyes and press on the inner canthus (punctal occlusion) for 2–3 minutes, and wipe off the excess'
                ],
                explain: 'The guidelines list both directions: ocular effects of systemic drugs and systemic effects of ocular drugs.'
            },
            {
                phase: '6. Follow-up',
                type: 'mcq',
                question: 'She starts latanoprost. What is your follow-up plan?',
                options: [
                    'Review in 4–6 weeks: IOP against target, adherence, technique and side effects; refer to an ophthalmologist within 4 months (OBA guideline).',
                    'Review in 12 months with fields and OCT: latanoprost takes a year to reach full effect, and you only refer if the target still isn’t met by then.',
                    'Review in 24 hours: a prostaglandin analogue reaches its full effect after the first dose, so a next-day IOP decides whether she should continue.',
                    'No review: hand her back to the GP, who monitors IOP and side effects, because optometrists can’t follow glaucoma once treatment has begun.'
                ],
                answer: 0,
                explain: 'Prostaglandin analogues reach their full effect over a few weeks. At review, also ask about redness, lash growth and iris colour change, and whether her GP has changed any of her medicines.'
            }
        ]
    },
    {
        id: 'systemic-drugs-eye',
        category: 'professional',
        title: 'Medication Review: Ocular Effects of Systemic Drugs',
        theme: 'Systemic Drugs & the Eye',
        years: ['Exam guidelines'],
        patient: 'Quick-fire pharmacology: patients whose general medicines affect the eye.',
        stem: '“Your patients bring long medication lists. Which of these medicines worry you, and why?”',
        steps: [
            {
                phase: '1. Drug → ocular effect',
                type: 'match',
                question: 'Match each systemic drug to its best-known ocular effect.',
                pairs: [
                    { label: 'Hydroxychloroquine', answer: 'Parafoveal outer retinal toxicity (bull’s-eye maculopathy; pericentral in Asian patients)' },
                    { label: 'Topiramate', answer: 'Bilateral angle closure from ciliochoroidal effusion, with an acute myopic shift' },
                    { label: 'Tamsulosin', answer: 'Intraoperative floppy iris syndrome at cataract surgery' },
                    { label: 'Ethambutol', answer: 'Optic neuropathy: central or centrocaecal scotoma and red–green colour loss' },
                    { label: 'Amiodarone', answer: 'Vortex keratopathy (and, rarely, optic neuropathy)' },
                    { label: 'Long-term oral corticosteroids', answer: 'Posterior subcapsular cataract and raised IOP' },
                    { label: 'Bisphosphonates (alendronate, zoledronic acid)', answer: 'Anterior uveitis, scleritis or episcleritis' }
                ],
                distractors: ['Cyanopsia (blue-tinted vision) for a few hours after a dose', 'Reduced night vision and dry eye from meibomian gland atrophy'],
                explain: 'The two distractors are sildenafil (cyanopsia) and isotretinoin (night vision and dry eye). Ask about these medicines in every history: patients rarely link a tablet to their eyes.'
            },
            {
                phase: '2. Topiramate',
                type: 'mcq',
                critical: true,
                question: 'A 34-year-old started topiramate for migraine 10 days ago. Both eyes are suddenly blurred and sore, she is 2 D more myopic, IOPs are 44 and 46 mmHg and both anterior chambers are shallow. What do you do?',
                options: [
                    'Same-day referral, topiramate stopped by the prescriber; meanwhile aqueous suppressants and a cycloplegic, not pilocarpine (not pupil block).',
                    'Pilocarpine 2% every 15 minutes in both eyes, then arrange bilateral laser iridotomy, exactly as for any acute primary angle closure attack.',
                    'Continue topiramate, start latanoprost at night in both eyes and review in a week, as drug-induced closure settles once the eye adapts.',
                    'Routine referral: the myopic shift shows a cataract change, and the IOP falls without any treatment once the swollen lens has settled down.'
                ],
                answer: 0,
                explain: 'Topiramate (a sulfonamide) causes ciliochoroidal effusion, which rotates the ciliary body and lens–iris diaphragm forward. Miotics can make it worse and an iridotomy doesn’t help. It settles once the drug is stopped. The same mechanism applies to other sulfonamides, such as acetazolamide and hydrochlorothiazide.'
            },
            {
                phase: '3. Hydroxychloroquine screening',
                domain: 'followup',
                type: 'mcq',
                question: 'A 52-year-old woman (70 kg) starts hydroxychloroquine 400 mg daily for rheumatoid arthritis. What screening plan follows current guidance?',
                options: [
                    'Baseline within a year; 400 mg is 5.7 mg/kg real weight, a major risk factor, so tell the prescriber and screen yearly (not from year 5): SD-OCT, 10-2 fields, FAF.',
                    'An Amsler grid at baseline, then review at 10 years: toxicity needs a cumulative dose of over 1000 g, so testing any earlier than that can’t find anything useful.',
                    'No baseline needed; start yearly 24-2 fields at 5 years, since OCT can’t show hydroxychloroquine toxicity until a bull’s-eye is visible on fundoscopy anyway.',
                    'Six-monthly dilated fundoscopy from the first month, because a bull’s-eye on the fundus is the earliest sign and fundus photos are all you need to record.'
                ],
                answer: 0,
                explain: 'RANZCO and AAO guidance: keep the dose at or below 5 mg/kg/day of real body weight; baseline within a year; yearly screening after 5 years, or sooner with risk factors (higher dose, kidney disease, tamoxifen, existing maculopathy). Use SD-OCT and 10-2 fields; in Asian patients toxicity is often pericentral, so use a wider field (24-2 or 30-2) and wider OCT scans. A visible bull’s-eye is a late sign.'
            },
            {
                phase: '4. Ethambutol',
                type: 'mcq',
                critical: true,
                question: 'A 60-year-old on ethambutol for tuberculosis says his vision has faded over a month. VA 6/18 in each eye, red–green errors, central scotomas, normal discs. What do you do?',
                options: [
                    'Contact his TB physician urgently so they can consider stopping ethambutol, and refer to an ophthalmologist: vision often recovers if the drug is stopped early.',
                    'Reassure him that ethambutol toxicity is permanent but stable; he continues the drug and you recheck his fields and colour vision again in 12 months.',
                    'Stop the ethambutol yourself today and tell him to take only his other TB drugs, then review the vision and the fields in 6 months to see if it recovers.',
                    'Start topical prednisolone acetate 1% QID for presumed optic neuritis and review in a week; the TB medicines themselves don’t need to change.'
                ],
                answer: 0,
                explain: 'Ethambutol optic neuropathy is dose-related (risk rises above about 15 mg/kg/day and with kidney impairment) and often reversible if caught early. Optometrists don’t stop systemic medicines: the prescriber does. Baseline and regular VA, colour vision and fields are advised while on ethambutol.'
            },
            {
                phase: '5. Tamsulosin',
                type: 'mcq',
                question: 'A 70-year-old man on tamsulosin for prostate symptoms is being referred for cataract surgery. What goes in your referral?',
                options: [
                    'That he takes tamsulosin, and for how long, so the surgeon can plan for floppy iris; stopping it first doesn’t reliably remove the risk.',
                    'Nothing: advise him to stop tamsulosin a week before surgery, which removes the floppy iris risk, so the surgeon doesn’t need to be told.',
                    'Nothing: tamsulosin only acts on the bladder and prostate, and α1-blockers have no effect at all on the iris dilator muscle.',
                    'Ask the GP to swap it for oxybutynin first, because anticholinergics dilate the pupil well and so protect against floppy iris syndrome.'
                ],
                answer: 0,
                explain: 'Tamsulosin blocks α1A receptors in the iris dilator, so the pupil dilates poorly, billows and prolapses during surgery. The risk persists after stopping. Oxybutynin, as an anticholinergic, can itself precipitate angle closure in narrow angles.'
            },
            {
                phase: '6. Drugs and angle closure',
                type: 'viva',
                question: 'Which systemic medicines can precipitate angle closure, and how do you protect patients at risk?',
                points: [
                    'Pupil block (dilation): anticholinergics (oxybutynin, tricyclics, antihistamines, nebulised ipratropium) and adrenergics (nebulised salbutamol, pseudoephedrine)',
                    'Antidepressants: SSRIs and SNRIs (paroxetine, venlafaxine)',
                    'Non-pupil-block (ciliochoroidal effusion, often bilateral with a myopic shift): topiramate and other sulfonamides (acetazolamide, hydrochlorothiazide)',
                    'At risk: hyperopes, older patients, women, East Asian ancestry, known narrow angles; check with gonioscopy',
                    'Occludable angles: refer for laser iridotomy before high-risk medicines, tell the prescriber, and warn the patient about the symptoms of an attack',
                    'A “glaucoma warning” on a medicine refers to angle closure; most people with open-angle glaucoma can take it'
                ],
                explain: 'Patients often ask whether a medicine “safe for glaucoma” applies to them. Know their angle and say so in your letter to the GP.'
            }
        ]
    }
);
