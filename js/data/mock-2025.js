// Cases from the Young Optometrists Mock Orals 2025 notes. The notes contained some errors,
// which are corrected in the "Recall check" boxes.
window.CASES.push(
    {
        id: 'yo25-apacg-dilation',
        category: 'glaucoma',
        title: 'Angle Closure After Dilation for Flashes',
        theme: 'Acute Angle Closure',
        years: ['Mock 2025'],
        patient: '67-year-old Chinese woman. HLA-B27 positive with past uveitis; high cholesterol; both parents had retinal detachments.',
        stem: '7–9 days of temporal flashes and more floaters. She was dilated at hospital and developed a severe painful red eye with IOP 60 mmHg. Dense cataracts; arcus makes van Herick unreliable.',
        steps: [
            {
                phase: '1. Why did dilation do this?',
                type: 'mcq',
                question: 'Why did dilation trigger the attack, and who is at risk?',
                options: [
                    'Mid-dilation maximises iris–lens contact (pupil block) and bunches the peripheral iris into the angle. Risk: older, female, East Asian, hyperopic/short eye, thick lens.',
                    'Full dilation pulls the iris root forward against the TM, so risk is greatest at maximal mydriasis. Risk: young, male, myopic, with a deep AC and thin lens.',
                    'Phenylephrine constricts the episcleral veins and blocks aqueous outflow at the TM. Risk: hypertensive patients on β-blockers, older and female, whatever the angle depth.',
                    'Tropicamide relaxes the ciliary muscle and closes Schlemm’s canal, raising IOP. Risk: anyone with pigment dispersion or prior uveitis, even with open angles.'
                ],
                answer: 0,
                explain: 'Her dense cataract adds lens-related crowding (phacomorphic component).'
            },
            {
                phase: '2. Work-up with a poor view',
                type: 'mcq',
                question: 'She has flashes and floaters but the view is poor. What must you not miss, and how?',
                options: [
                    'A retinal tear or detachment: B-scan when the fundus can’t be seen, and dilate cautiously only once the angle is treated and IOP controlled. Use gonioscopy, not van Herick (arcus).',
                    'A posterior vitreous detachment only: these are benign, so reassure and review the fundus in 4–6 weeks once the cornea clears. Use van Herick each visit to monitor the angle.',
                    'A vitreous haemorrhage from the IOP spike: dilate both eyes fully now to examine the periphery, since the angle closure has already occurred and cannot recur in this eye.',
                    'A central retinal vein occlusion from the high IOP: arrange fluorescein angiography the same day, and use OCT to view the periphery, since B-scan cannot detect retinal tears.'
                ],
                answer: 0,
                explain: 'Her family history of RD raises the stakes.'
            },
            {
                phase: '3. First aid in her',
                type: 'mcq',
                question: 'Which first-aid plan suits her, given she triggered this by dilation and has past uveitis?',
                options: [
                    'Check contraindications; timolol, brimonidine and a CAI 2–5 min apart, acetazolamide via a doctor, prednisolone acetate; pilocarpine can start early as dilation caused it, watching for uveitis reactivation.',
                    'Check contraindications; latanoprost and timolol 5 min apart, acetazolamide via a doctor, avoid steroids given her uveitis history; delay pilocarpine until IOP is below 30, as with any pupil block.',
                    'Check contraindications; pilocarpine 4% every 5 min for an hour to reverse the dilation, timolol and brimonidine 2 min apart, then oral prednisolone via a doctor to prevent uveitis reactivation.',
                    'Check contraindications; cyclopentolate to relax the ciliary body and deepen the AC, timolol and a CAI 2–5 min apart, acetazolamide via a doctor, and prednisolone acetate for the inflammation.'
                ],
                answer: 0,
                explain: 'Guidelines allow immediate pilocarpine when your own dilation caused the attack; here it happened in hospital, so liaise with them.'
            },
            {
                phase: '4. Mechanisms',
                type: 'match',
                question: 'Match each angle-closure mechanism to its management focus.',
                pairs: [
                    { label: 'Pupillary block', answer: 'Laser peripheral iridotomy to bypass the block' },
                    { label: 'Plateau iris', answer: 'Argon laser peripheral iridoplasty if closure persists after LPI' },
                    { label: 'Phacomorphic (thick cataract)', answer: 'Control IOP, then cataract extraction' },
                    { label: 'Ciliochoroidal effusion (e.g. topiramate)', answer: 'Stop the drug, cycloplegia; avoid miotics' },
                    { label: 'Neovascular', answer: 'Anti-VEGF + PRP + IOP control' }
                ],
                distractors: ['SLT'],
                explain: 'The mechanism determines whether pilocarpine helps or harms.'
            },
            {
                phase: '5. Everything contraindicated',
                type: 'mcq',
                question: 'If every usual agent were contraindicated (pregnancy + asthma + CKD + MAOI), what would you say?',
                options: [
                    'Contact ophthalmology/ED immediately for an alternative plan (IV mannitol with cardiac/renal review, urgent laser) rather than giving contraindicated drops.',
                    'Give pilocarpine 2% alone, since miotics have no systemic contraindications in pregnancy, asthma or CKD, then refer routinely once the pupil has constricted.',
                    'Give timolol 0.25% as the lowest strength with punctal occlusion, since this removes the asthma risk, then refer to ophthalmology for LPI within the week.',
                    'Give brimonidine and dorzolamide, since only acetazolamide and β-blockers are affected by these conditions, and refer for LPI once the IOP is below 30 mmHg.'
                ],
                answer: 0,
                explain: 'State your escalation pathway: who you call and why.'
            }
        ]
    },
    {
        id: 'yo25-mk-dd',
        category: 'cornea',
        title: 'Daily-Disposable Wearer with Two Infiltrates',
        theme: 'CL Bacterial Keratitis',
        years: ['Mock 2025'],
        patient: '24-year-old daily-disposable CL wearer with good hygiene, still wearing lenses when it started.',
        stem: 'Left eye sore (5/10), watery and red for 2 days. VA R 6/12, L 6/7.5. IOP 16/14. Two discrete infiltrates with overlying epithelial defects, mild AC reaction, small limbal neovascularisation.',
        steps: [
            {
                phase: '1. Sterile or infectious?',
                type: 'mcq',
                question: 'Which features tip this towards microbial keratitis rather than sterile infiltrates?',
                options: [
                    'Overlying epithelial defects with an AC reaction and marked pain — cells and flare strongly favour infection.',
                    'Peripheral location with a clear zone to the limbus and only mild discomfort — these features favour infection.',
                    'Multiple small lesions with little staining and mild pain — multiple lesions point to infection.',
                    'Daily-disposable wear with overnight use avoided — infection is likelier in daily disposables.'
                ],
                answer: 0,
                explain: 'Sterile infiltrates: small, peripheral, little staining, quiet AC.'
            },
            {
                phase: '2. When to scrape',
                type: 'multi',
                question: 'When should a corneal scrape be taken before antibiotics?',
                options: [
                    'Large (>2 mm) or deep',
                    'Central',
                    'Not responding to treatment',
                    'Atypical features (fungal, Acanthamoeba)',
                    'Every small peripheral infiltrate in a daily-disposable wearer'
                ],
                answers: [0, 1, 2, 3],
                explain: 'In practice, refer for scraping.'
            },
            {
                phase: '3. Regimen',
                type: 'mcq',
                question: 'The notes give ciprofloxacin “q15min × 6 h, q30min day 1, hourly day 2, then 2-hourly until closed (minimum 14 days)”. What is the product-information schedule?',
                options: [
                    'q15min for 6 h, q30min for the rest of day 1, hourly on day 2, then 4-hourly from day 3 until healed (up to 14 days).',
                    'q15min for 6 h, q30min for the rest of day 1, hourly on day 2, then 2-hourly from day 3 until healed (minimum 14 days).',
                    'q15min for 6 h, q30min for the rest of day 1, 2-hourly on day 2, then QID from day 3 until healed (up to 21 days in total).',
                    'q30min for 6 h, hourly for the rest of day 1, 2-hourly on day 2, then 4-hourly from day 3 until healed (up to 10 days in total).'
                ],
                answer: 0,
                explain: 'Never taper an antibiotic below QID.',
                recall: 'The YO notes said “2-hourly until the defect closes (minimum 14 days)”; the Ciloxan PI is 4-hourly from day 3, for up to 14 days.'
            },
            {
                phase: '4. Fortified drops',
                type: 'mcq',
                question: 'Why must fortified cefazolin and gentamicin never be mixed?',
                options: [
                    'The β-lactam inactivates the aminoglycoside in the same bottle, so they are given as separate drops, alternating.',
                    'Gentamicin lowers the pH so cefazolin precipitates in the bottle, so they are given at least 30 minutes apart.',
                    'Combined, they are too toxic to the epithelium, so one is given by day and the other only at night as ointment.',
                    'Cefazolin binds the preservative in gentamicin, so they are given together only from preservative-free bottles.'
                ],
                answer: 0,
                explain: 'Cefazolin: Gram-positive (cell wall). Gentamicin/tobramycin: Gram-negative (30S).'
            },
            {
                phase: '5. Ciprofloxacin facts',
                type: 'mcq',
                question: 'The notes said ciprofloxacin is “Category C — avoid in pregnancy” and contraindicated with “tendon damage risk”. What is correct?',
                options: [
                    'In Australia ciprofloxacin is TGA category B3; tendon rupture is a systemic fluoroquinolone risk, not a contraindication to the drops. White precipitates are typical and harmless.',
                    'In Australia ciprofloxacin is TGA category D; tendon rupture is a contraindication to the drops in patients over 60 or on steroids. White precipitates mean the drop should be stopped.',
                    'In Australia ciprofloxacin is TGA category C as the notes say; tendon rupture only applies to the drops in children under 12. White precipitates indicate a fungal co-infection.',
                    'In Australia ciprofloxacin is TGA category A; tendon rupture is a contraindication only to ofloxacin drops. White precipitates mean a corneal melt and need same-day referral.'
                ],
                answer: 0,
                explain: 'Use TGA (Australian) categories.'
            },
            {
                phase: '6. SCUT',
                type: 'mcq',
                question: 'What did SCUT actually test and find?',
                options: [
                    '500 culture-positive bacterial ulcers on moxifloxacin, randomised to prednisolone phosphate 1% or placebo after 48 h: no overall benefit; possible benefit in severe central ulcers and earlier use; worse with Nocardia.',
                    '500 culture-positive bacterial ulcers on ciprofloxacin, randomised to prednisolone acetate 1% or placebo from day 1: better vision at 3 months in all ulcers, with more perforations in Pseudomonas ulcers only.',
                    '500 culture-positive fungal and bacterial ulcers on natamycin or moxifloxacin, randomised to dexamethasone or placebo: steroids improved scarring in both groups but delayed epithelial healing by a week.',
                    '500 culture-positive bacterial ulcers on moxifloxacin, randomised to loteprednol or placebo after 7 days: steroids reduced scar size by half in peripheral ulcers, with no effect in central or Nocardia ulcers.'
                ],
                answer: 0,
                explain: 'Add a steroid only once clearly improving, with antibiotic cover.'
            }
        ]
    },
    {
        id: 'yo25-aau-fibrin',
        category: 'uveitis',
        title: 'AAU with Fibrin and a Small Hypopyon',
        theme: 'Acute Anterior Uveitis',
        years: ['Mock 2025'],
        patient: '25-year-old man wearing sunglasses in the consult.',
        stem: 'Right eye red and painful for 3 days (5/10), photophobic, mild blur. VA 6/7− OD. IOP 16 OU. Sluggish, irregular right pupil.',
        steps: [
            {
                phase: '1. Findings',
                type: 'reveal',
                text: 'Ciliary flush, clear cornea, fine stellate KPs, ~2+ cells with 4+ fibrinous flare, a very small inferior hypopyon, early posterior synechiae. Corneal sensation normal. Fundus clear.'
            },
            {
                phase: '2. The hypopyon',
                type: 'mcq',
                question: 'How do you handle the small hypopyon?',
                options: [
                    'It is sterile cells and fibrin in severe AAU (e.g. HLA-B27): treat the inflammation and refer within 24 h; suspect infection if large, purulent, shifting or post-surgical.',
                    'It is a sign of an infective cause until proven otherwise: start ciprofloxacin hourly alongside the steroid, refer the same day, and stop the steroid if the hypopyon grows.',
                    'It suggests Behçet’s disease rather than HLA-B27 AAU: delay the steroid, start a cycloplegic only and refer for systemic work-up, since steroids mask the diagnosis.',
                    'It is fibrin that will organise into membranes: add a topical NSAID QID to dissolve it, continue the steroid, and review in 1 week since hypopyon itself needs no referral.'
                ],
                answer: 0,
                explain: 'Hypopyon resolves as the inflammation is controlled.'
            },
            {
                phase: '3. Steroid regimen',
                type: 'mcq',
                question: 'What steroid regimen did the notes use, and what about nights?',
                options: [
                    'Prednisolone acetate 1%: loading (q15–30 min for ~2 h), then hourly until ≥2-step SUN improvement, then QID; overnight, extra drops before bed or an ointment if severe.',
                    'Prednisolone acetate 1%: QID from the start, increasing to hourly only if cells rise at review; overnight, wake the patient 2-hourly to instil drops if a hypopyon is present.',
                    'Dexamethasone 0.1%: hourly while awake for 2 weeks, then stop without taper, since dexamethasone is short-acting; overnight, no drops as the eye is closed and inflammation settles.',
                    'Prednisolone acetate 1%: q15 min for 24 h including overnight, then QID for a week, then stop; at night, a cycloplegic replaces the steroid as it also controls the inflammation.'
                ],
                answer: 0,
                explain: 'Atropine 1% BD–QID alongside, stopped when the pain has gone and the pupil is mobile.'
            },
            {
                phase: '4. Taper',
                type: 'mcq',
                question: 'The notes give a “quick taper: QID × 4 d → TDS × 3 d → BD × 2 d → daily × 1 d”. Is that right for this patient?',
                options: [
                    'Too fast for a fibrinous AAU with hypopyon: longer courses need slower tapers (about a week per step), watching for rebound and IOP.',
                    'About right: a 10-day taper suits most AAU, as long as the cells are zero before starting and IOP is checked at the end.',
                    'Too slow: once the cells are zero, the steroid should be stopped within 3 days to avoid a steroid IOP response developing later.',
                    'About right, but swap to FML for the taper: weaker steroids prevent rebound better than tapering prednisolone does.'
                ],
                answer: 0,
                explain: 'Rebound inflammation is common after a fast taper.'
            },
            {
                phase: '5. Steroid response',
                type: 'mcq',
                question: 'The notes define steroid response as “IOP ↑ >5 mmHg”. What is a better definition?',
                options: [
                    'Armaly: low <6, moderate 6–15, high >15 mmHg rise. In practice, act on a ~10 mmHg rise or IOP above ~25–30 (lower with disc damage).',
                    'Armaly: any IOP above 21 mmHg on steroids, regardless of the baseline. In practice, stop the steroid at once and switch to an NSAID.',
                    'Armaly: low <2, moderate 2–5, high >5 mmHg rise. In practice, the notes are correct, and any 5 mmHg rise needs a PGA added.',
                    'Armaly: a rise within 24 hours of the first drop. In practice, rises after week 2 are inflammatory, so the steroid is increased.'
                ],
                answer: 0,
                explain: 'Avoid PGAs in active uveitis; use timolol or brimonidine.'
            }
        ]
    },
    {
        id: 'yo25-pds-iop35',
        category: 'glaucoma',
        title: 'PDS with IOP 35: Drops, SLT and Pregnancy',
        theme: 'PDS / Pigmentary Glaucoma',
        years: ['Mock 2025'],
        patient: 'Young myopic Caucasian man.',
        stem: 'Heavily pigmented open angles, Krukenberg spindle, mid-peripheral TIDs, posterior iris bowing. IOP ≈35 mmHg OU; VA normal.',
        steps: [
            {
                phase: '1. PDS or PG?',
                type: 'mcq',
                question: 'When does PDS become pigmentary glaucoma?',
                options: [
                    'When there is glaucomatous optic neuropathy with a matching field defect; raised IOP with healthy discs and fields is PDS with ocular hypertension.',
                    'When IOP exceeds 30 mmHg on two visits, or a Krukenberg spindle and dense TM pigment are present, even if the discs and fields are normal.',
                    'When the iris transillumination defects become confluent, since this shows pigment loss severe enough to have damaged the TM and optic nerve.',
                    'When IOP rises after exercise or dilation, since provoked spikes indicate TM damage; discs and fields are only needed to stage it afterwards.'
                ],
                answer: 0,
                explain: 'Structure and function decide.'
            },
            {
                phase: '2. SLT in a pigmented angle',
                type: 'mcq',
                question: 'How do you reduce the risk with SLT in a heavily pigmented angle?',
                options: [
                    'Lower energy, treat in stages (e.g. 180° at a time), consider pre-treatment with an α-agonist, and check IOP after the laser for a spike.',
                    'Higher energy over 360° in one session, as pigmented TM absorbs laser poorly; skip pre-treatment, and check IOP at the 4-week review.',
                    'Standard energy but double the spots, so the pigment is cleared faster; pre-treat with pilocarpine and check IOP in 1 week.',
                    'Lower energy over 360° in one session, avoiding α-agonists as they raise IOP in PDS; check IOP only if the eye becomes painful.'
                ],
                answer: 0,
                explain: 'The pigmented TM absorbs more energy, causing inflammation and spikes.'
            },
            {
                phase: '3. Pregnancy',
                type: 'match',
                question: 'Match each option to its practical stance in pregnancy.',
                pairs: [
                    { label: 'PGAs', answer: 'Avoid (uterotonic concern)' },
                    { label: 'Timolol', answer: 'Cautious use with punctal occlusion; avoid with asthma/COPD/heart block' },
                    { label: 'Brimonidine', answer: 'Avoid near term and while breastfeeding (neonatal CNS depression)' },
                    { label: 'SLT', answer: 'Preferred non-drug option' }
                ],
                distractors: ['First-line at any stage'],
                explain: 'Oral CAIs are avoided unless sight-threatening and specialist-directed.'
            },
            {
                phase: '4. Theories of glaucoma',
                type: 'match',
                question: 'Match each theory of glaucomatous damage to its core idea.',
                pairs: [
                    { label: 'Mechanical', answer: 'IOP deforms the lamina cribrosa, blocking axonal transport' },
                    { label: 'Vascular/ischaemic', answer: 'Optic nerve hypoperfusion and failed autoregulation' },
                    { label: 'Cellular/mitochondrial', answer: 'Axonal metabolic failure and oxidative stress → apoptosis' }
                ],
                distractors: ['Autoimmune destruction of the cornea'],
                explain: 'Systemic contributors: sleep apnoea, nocturnal hypotension, migraine.'
            },
            {
                phase: '5. Review',
                type: 'mcq',
                question: 'When do you review after starting a drop or SLT, and then?',
                options: [
                    'About 4 weeks after starting a drop or SLT (IOP, side effects, adherence), then every 3–6 months if stable — sooner if young, very high IOP or progressing.',
                    'About 1 week after starting a drop and 3 months after SLT (as SLT takes that long), then every 12 months if stable, as PDS burns out with age.',
                    'About 2 weeks after starting a drop or SLT, then every 12 months if stable, with fields only every 2 years since pigmentary glaucoma progresses slowly.',
                    'About 3 months after starting a drop or SLT (full effect takes that long), then every 6–12 months if stable — sooner only if symptoms develop.'
                ],
                answer: 0,
                explain: 'Escalate if fields or OCT worsen at target.'
            }
        ]
    },
    {
        id: 'yo25-pxg',
        category: 'glaucoma',
        title: 'Pseudoexfoliation Glaucoma: Treat Early, Plan Ahead',
        theme: 'PXG',
        years: ['Mock 2025'],
        patient: 'Older adult of Scandinavian descent.',
        stem: 'Frosted, dandruff-like flakes on the anterior capsule, moth-eaten pupillary ruff, patchy inferior TM pigment. IOP above 30 mmHg.',
        steps: [
            {
                phase: '1. Why treat earlier?',
                type: 'mcq',
                question: 'Why treat PXG earlier and more aggressively than POAG?',
                options: [
                    'Higher mean IOP, bigger fluctuations, poorer response to medicines and faster progression (EMGT), so set a lower target (often low teens) and escalate early.',
                    'Lower mean IOP but more disc haemorrhages and a thinner cornea (OHTS), so the measured IOP underestimates damage and every PXG patient needs SLT first-line.',
                    'Similar IOP to POAG but more frequent angle closure from zonular weakness (EMGT), so set a standard target and arrange prophylactic LPI before starting drops.',
                    'Higher mean IOP but slower progression than POAG (CIGTS), so start a single drop early and review yearly, since the main risk is the cataract surgery complications.'
                ],
                answer: 0,
                explain: 'Combination therapy is often needed early.'
            },
            {
                phase: '2. Systemic associations',
                type: 'multi',
                question: 'Which associations does PXF have?',
                options: [
                    'LOXL1 gene variants',
                    'Cardiovascular and cerebrovascular disease',
                    'Hearing loss',
                    'Retinal vein occlusion',
                    'Possible links with Alzheimer’s disease (evidence mixed)',
                    'Thyroid eye disease'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'It is a systemic extracellular matrix disorder, not just ocular.'
            },
            {
                phase: '3. Cataract surgery',
                type: 'mcq',
                question: 'What should the surgeon anticipate?',
                options: [
                    'Weak zonules (phacodonesis, capsular rupture, dropped lens, later IOL dislocation), poor dilation, post-op IOP spikes and inflammation — tell them about the PXF.',
                    'Endothelial pigment (Krukenberg spindle), shallow AC, iris prolapse and post-op CMO — tell them to stop all glaucoma drops a week before surgery so the IOP can be judged.',
                    'Corneal oedema from guttae, a rigid pupil from past miotics, and post-op steroid response — tell them PXF eyes need no change in technique but a longer steroid course.',
                    'Posterior capsule opacity, retinal detachment and endophthalmitis from PXF material — tell them to place the IOL in the sulcus routinely and to avoid capsular tension rings.'
                ],
                answer: 0,
                explain: 'Capsular tension rings may be needed.'
            },
            {
                phase: '4. Referral',
                type: 'multi',
                question: 'When does the YO model answer say to refer urgently?',
                options: [
                    'IOP ≥35 mmHg or uncontrolled on two agents',
                    'Rapid field loss, disc haemorrhage or pallor',
                    'Signs of lens instability before surgery',
                    'IOP of 18 mmHg on one drop with stable fields'
                ],
                answers: [0, 1, 2],
                explain: 'PXG is a secondary glaucoma: refer anyway under the RANZCO pathway, even if you start treatment.'
            }
        ]
    }
);
