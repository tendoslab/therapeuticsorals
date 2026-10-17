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
                    'MD better than −2 dB.',
                    'MD worse than −12 dB, or any point within the central 5° at 0 dB, or both hemifields with points below 15 dB within the central 5°.',
                    'Any nasal step.',
                    'PSD above 2 dB.'
                ],
                answer: 1,
                explain: 'Early: MD better than −6 dB. Moderate: −6 to −12 dB (or a central point below 15 dB in one hemifield). Know which system you are quoting (Hodapp; Mills / Enhanced Glaucoma Staging System).'
            },
            {
                phase: '4. CCT & IOP',
                type: 'mcq',
                question: '“Explain the relationship between CCT and IOP in your patient.”',
                options: [
                    'CCT doesn\'t affect IOP readings.',
                    'Goldmann assumes ~520 µm: thinner corneas under-read (true IOP higher) and thicker corneas over-read. Separately, thin CCT is an independent risk factor for conversion (OHTS), possibly reflecting weaker lamina biomechanics. Corneal hysteresis also matters.',
                    'Thick corneas mean more glaucoma risk.',
                    'Correct every IOP by exactly 1 mmHg per 10 µm.'
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
                    'Nothing further.',
                    'Refer to an ophthalmologist within 4 months of starting treatment, with a plan for ongoing collaborative care (check the current OBA guideline wording).',
                    'Refer within 24 hours.',
                    'Ask the GP to take over prescribing.'
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
                    'Never test more often than Medicare allows.',
                    'Check the current MBS item rules (frequency limits for computerised perimetry items); if clinically indicated testing exceeds them, explain and agree a private fee, or coordinate with the ophthalmologist who is co-managing.',
                    'Bill a different item number.',
                    'Do the test free and don\'t record it.'
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
                    'Cleft palate.',
                    'It crosses the blood–brain barrier in neonates and infants → CNS depression, apnoea, bradycardia, hypotension. Contraindicated under 2 years; stop before delivery and avoid while breastfeeding.',
                    'Neonatal jaundice.',
                    'No risk.'
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
                    'NSAIDs inhibit phospholipase A2.',
                    'NSAIDs inhibit cyclooxygenase (prostaglandins only). Steroids act upstream (lipocortin → phospholipase A2) to block both prostaglandins and leukotrienes and broadly suppress the immune response. NSAIDs don\'t raise IOP or cause cataract but are weaker anti-inflammatories and can cause corneal melts.',
                    'They are identical.',
                    'NSAIDs are stronger than prednisolone acetate.'
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
                options: ['Fluorometholone alcohol 0.1% (FML)', 'Dexamethasone 0.1% (Maxidex) — potent, good penetration (higher IOP risk)', 'Hydrocortisone 1% ointment', 'Ketorolac'],
                answer: 1,
                explain: 'Rough potency and penetration order for intraocular inflammation: prednisolone acetate 1% ≈ dexamethasone 0.1% > fluorometholone acetate (Flarex) > FML > loteprednol / hydrocortisone. Prednisolone sodium phosphate is a solution with poorer penetration through an intact epithelium.',
                recall: 'A 2025 supplementary oral went “no Pred Forte → no Flarex → dexamethasone”.'
            }
        ]
    }
);
