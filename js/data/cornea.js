// Cornea & keratitis cases (anterior-eye examiner)
window.CASES.push(
    {
        id: 'cl-bacterial-keratitis',
        category: 'cornea',
        title: 'Contact Lens Bacterial Keratitis',
        theme: 'Microbial Keratitis',
        years: ['2018', '2019', '2025', 'Mock 2025'],
        patient: '28-year-old man, fortnightly soft contact lens wearer who sometimes sleeps in his lenses.',
        stem: 'One day of severe pain, photophobia, watering and some discharge.',
        exhibit: 'Slit-lamp photo: ~2.5 mm dense white paracentral stromal infiltrate encroaching on the pupil margin, with an overlying epithelial defect of similar size, surrounding stromal haze and a mild AC reaction. No hypopyon.',
        steps: [
            {
                phase: '1. Describe & differentials',
                type: 'viva',
                question: 'Describe the lesion and give your differentials.',
                points: [
                    'Size (~2.5 mm), location (paracentral, near the visual axis), depth (stromal)',
                    'Overlying epithelial defect about as large as the infiltrate',
                    'Stromal oedema / haze, AC reaction (cells/flare), check for hypopyon',
                    'Ddx: bacterial keratitis (Pseudomonas risk in CL wearers)',
                    'Ddx: CL peripheral ulcer / sterile infiltrate',
                    'Ddx: Acanthamoeba keratitis',
                    'Ddx: fungal keratitis',
                    'Ddx: HSV keratitis'
                ],
                explain: '“MK” covers bacterial, fungal and Acanthamoeba — be specific and say “bacterial keratitis” when that is what you mean. Size, an epithelial defect at least as large as the infiltrate, AC reaction and pain all favour infection over a sterile infiltrate.',
                recall: 'A 2025 candidate mentioned confocal microscopy and was “interrogated”. Only bring it up if you can explain it. It is a hospital tool that is particularly useful for Acanthamoeba cysts and fungal hyphae.'
            },
            {
                phase: '2. Triage',
                type: 'mcq',
                question: 'Using the 1-2-3 rule and the clinical picture, what is your triage decision?',
                options: [
                    'Optometric management with ciprofloxacin 0.3% intensive dosing; review in 24 hours and refer only if worse.',
                    'Stop CL wear, start ciprofloxacin QID and prednisolone acetate QID, and review in 3 days.',
                    'Same-day referral to a hospital eye/corneal service for scraping, culture and fortified dual therapy.',
                    'Same-day referral to the GP for oral ciprofloxacin, since the infiltrate is deeper than drops reach.'
                ],
                answer: 2,
                critical: true,
                explain: '1-2-3 rule (Vital et al.): ≥1+ AC cells, ≥2 mm infiltrate, or within 3 mm of the corneal centre → culture and (in practice) refer. This lesion meets the size and location criteria. Other referral triggers: hypopyon, thinning or perforation risk, atypical features (fungal or Acanthamoeba), worsening at 24–48 h, older age, immunosuppression or a monocular patient.',
                recall: 'A 2019 recall used “<60 years → FQ monotherapy, >60 → dual therapy”. Age isn\'t a formal cutoff. Older patients do have worse outcomes, but the decision rests on size, location, depth, AC reaction and response to treatment.'
            },
            {
                phase: '3. Interim cover',
                type: 'mcq',
                question: 'The registrar can\'t see him for 4 hours. What do you do in the chair?',
                options: [
                    'Start ciprofloxacin 0.3% with a loading dose now (after talking to the registrar) and send him in with the bottle and a letter.',
                    'Start nothing: any antibiotic before scraping makes the cultures useless, so keep him comfortable, patch the eye and send him in.',
                    'Start prednisolone acetate 1% now to limit scarring near the axis, and let the hospital choose the antibiotic.',
                    'Start chloramphenicol 0.5% hourly, since it doesn’t affect cultures, and send him in with a referral letter.'
                ],
                answer: 0,
                critical: true,
                explain: 'Ideally scrape before antibiotics, but a 4-hour delay with possible Pseudomonas risks rapid melting. Agree a plan with the registrar and start empirical fluoroquinolone. <strong>Never</strong> start a steroid on an untreated active ulcer. Also stop CL wear and keep the lens and case for culture.'
            },
            {
                phase: '4. Monotherapy dosing',
                type: 'mcq',
                question: 'For a smaller peripheral bacterial ulcer you manage yourself, what is the ciprofloxacin 0.3% (Ciloxan) regimen?',
                options: [
                    'Every 15 min for 1 h, then hourly while awake on day 1 (not overnight), every 2 h on day 2, then QID from day 3 for exactly 7 days. Review at 72 h.',
                    'Every 15 min for 6 h, every 30 min for the rest of day 1 (overnight too), hourly on day 2, then every 4 h from day 3 until healed (up to 14 days). Review at 24 h.',
                    'Every 30 min for 6 h, then hourly for the rest of day 1 (overnight too), every 4 h on day 2, then BD from day 3 until healed. Review at 1 week.',
                    'Every 15 min for 6 h, every 30 min for the rest of day 1 (overnight too), hourly on day 2, then QID from day 3 until healed (up to 14 days). Review at 24 h, then every 3 days.'
                ],
                answer: 1,
                explain: 'This is the product-information schedule for corneal ulcers. Add cycloplegia (e.g. atropine 1% BD, or cyclopentolate) for pain and ciliary spasm, plus oral paracetamol or ibuprofen. At 24 h expect <em>no worsening</em> (blunted edges, less pain) rather than dramatic improvement. Review daily until re-epithelialised.',
                recall: 'A 2025 candidate said “4 times per day until re-epithelialisation” and corrected it to <strong>every 4 hours</strong>. The mock notes said “2-hourly from day 3”, which also doesn\'t match the Ciloxan PI.'
            },
            {
                phase: '5. Why cipro?',
                type: 'mcq',
                question: 'Why ciprofloxacin rather than ofloxacin?',
                options: [
                    'Ofloxacin is very potent against Gram-negatives (Pseudomonas, the key CL pathogen), and ciprofloxacin has been linked with more corneal perforations in some series. Ofloxacin can leave white precipitates.',
                    'Ciprofloxacin is very potent against Gram-negatives (Pseudomonas, the key CL pathogen), and ofloxacin has been linked with more corneal perforations in some series. Cipro can leave white precipitates.',
                    'Ciprofloxacin covers fungi and Acanthamoeba as well as bacteria, while ofloxacin covers only Gram-positives, so cipro gives broader cover before culture results. Cipro rarely leaves precipitates.',
                    'Ciprofloxacin is a fourth-generation fluoroquinolone with the best Gram-positive cover, while ofloxacin is first-generation and isn’t available as an eye drop in Australia. Cipro never precipitates.'
                ],
                answer: 1,
                explain: 'Both are broad-spectrum fluoroquinolones that inhibit DNA gyrase (topoisomerase II) and topoisomerase IV, and both are bactericidal.',
                recall: 'The mock notes said cipro is “Category C — avoid in pregnancy” and contraindicated with “tendon damage risk”. In Australia ciprofloxacin is TGA category <strong>B3</strong> (C is the old US label), and tendon rupture is a <em>systemic</em> fluoroquinolone risk, not a contraindication to eye drops.'
            },
            {
                phase: '6. Hospital pharmacology',
                type: 'match',
                question: 'The hospital uses fortified cefazolin 5% + tobramycin 1.3%. Match each drug to its class and mechanism.',
                pairs: [
                    { label: 'Ciprofloxacin', answer: 'Fluoroquinolone — inhibits DNA gyrase / topoisomerase IV' },
                    { label: 'Tobramycin / gentamicin', answer: 'Aminoglycoside — binds 30S ribosome (mRNA misreading); Gram-negative' },
                    { label: 'Cefazolin', answer: 'Cephalosporin (β-lactam) — binds PBPs, blocks cell-wall synthesis; Gram-positive' },
                    { label: 'Chloramphenicol', answer: 'Binds 50S ribosome (peptidyl transferase) — bacteriostatic' }
                ],
                explain: 'Dual fortified therapy covers Gram-positive organisms (cefazolin) and Gram-negatives (aminoglycoside). They are given as separate bottles, alternating — mixing inactivates the aminoglycoside. Vancomycin 5% replaces cefazolin for MRSA. Fortified drops are hospital-compounded: you can prescribe commercial tobramycin 0.3%, but not fortified 1.3%.'
            },
            {
                phase: '7. Steroids',
                type: 'mcq',
                question: 'When might a steroid be added for bacterial keratitis?',
                options: [
                    'At the first visit with the first antibiotic dose, because SCUT showed starting both together halved scarring in central ulcers; delaying the steroid lets the stroma melt.',
                    'Only once the organism is responding to antibiotics (usually ≥48 h, never for fungi or Nocardia), usually ophthalmology-led. SCUT: no overall benefit, possible benefit in severe central ulcers.',
                    'Only once the epithelium has fully healed and the antibiotic has been stopped for a week, because SCUT showed steroids given alongside antibiotics increased perforation in every type of bacterial ulcer.',
                    'Instead of increasing the antibiotic if pain is severe at 24 h, because SCUT showed steroids work as well as fluoroquinolones in Pseudomonas ulcers and relieve pain faster.'
                ],
                answer: 1,
                critical: true,
                explain: 'SCUT: 500 culture-positive bacterial ulcers on moxifloxacin, randomised to prednisolone sodium phosphate 1% or placebo after 48 h. No overall difference in 3-month BSCVA; a subgroup with severe central ulcers and those started early did better; Nocardia did worse.',
                recall: 'A 2025 candidate proposed starting prednisolone acetate at presentation because of the visual-axis location. That is unsafe without antibiotic control. Correct reasoning: “after 24–48 h of improvement on antibiotics, discussed with ophthalmology (SCUT)”.'
            },
            {
                phase: '8. Prevention',
                type: 'viva',
                question: 'What do you tell him once it heals?',
                points: [
                    'No overnight wear — the biggest modifiable risk (about 5× higher MK risk)',
                    'Consider switching to daily disposables',
                    'No tap water, swimming or showering in lenses; don\'t top up solution',
                    'Replace the case regularly; rub and rinse with fresh solution',
                    'Warning signs: red, painful eye or reduced vision → lenses out and be seen the same day',
                    'Scarring may need a rigid lens or, rarely, corneal surgery later'
                ],
                explain: 'Recalls suggest panels give credit for contact lens safety counselling and rethinking the lens modality, even when they don\'t ask for it.'
            }
        ]
    },
    {
        id: 'mk-vs-clpu',
        category: 'cornea',
        title: 'CLPU vs MK vs CLARE',
        theme: 'Contact Lens Complications',
        years: ['2019', '2025'],
        patient: '24-year-old woman, monthly silicone hydrogel lenses.',
        stem: 'Red, mildly sore eye since yesterday. Watery, not sticky.',
        exhibit: 'A single round ~0.8 mm whitish infiltrate in the mid-periphery at 7 o\'clock with a smaller area of overlying staining. Localised injection. AC quiet.',
        steps: [
            {
                phase: '1. Differentiate',
                type: 'match',
                question: 'Match each feature to the condition it most suggests.',
                pairs: [
                    { label: 'Small (<1–2 mm), round, peripheral; staining smaller than the infiltrate; AC quiet; mild pain', answer: 'CL peripheral ulcer (CLPU)' },
                    { label: 'Larger, central/paracentral; defect ≥ infiltrate; AC reaction; mucopurulent discharge; severe pain', answer: 'Microbial (bacterial) keratitis' },
                    { label: 'Woke with a red painful eye after overnight wear; multiple small infiltrates; no epithelial defect', answer: 'CL acute red eye (CLARE)' },
                    { label: 'Oval, peripheral, superior or inferior; triangular raised plaque with a central ulcer; giant papillae', answer: 'Shield ulcer (VKC)' }
                ],
                distractors: ['Marginal keratitis from Gram-negative endotoxin'],
                explain: 'CLPU: inflammatory response to Gram-positive (S. aureus) exotoxins, typically leaving a small round scar. CLARE: inflammatory response to Gram-negative endotoxins on a lens worn overnight. MK: true infection with tissue destruction.',
                recall: 'A 2019 examiner asked: “What does CLPU staining look like? Any discharge? What sort of pain? Which part heals first?” CLPU: small focal stain smaller than the infiltrate; watery, not purulent; mild pain or foreign-body sensation; the epithelium heals within days and the infiltrate fades over weeks, leaving a scar.'
            },
            {
                phase: '2. Abrasion vs ulcer',
                type: 'mcq',
                question: 'How does an infiltrative ulcer differ from a simple corneal abrasion on fluorescein?',
                options: [
                    'An abrasion has a stromal infiltrate beneath a clean defect; an ulcer is an epithelial defect with no infiltrate under it.',
                    'An abrasion is a clean epithelial defect with no infiltrate beneath it; an ulcer has an underlying stromal infiltrate.',
                    'An abrasion stains only with rose bengal; an ulcer stains only with fluorescein, whatever lies beneath it.',
                    'An abrasion always has a feathery edge; an ulcer always has a smooth round edge, with or without infiltrate.'
                ],
                answer: 1,
                explain: 'Other causes of full-thickness epithelial defects: trauma, recurrent erosion, neurotrophic keratopathy, exposure, toxicity, and HSV (geographic).'
            },
            {
                phase: '3. Management',
                type: 'mcq',
                question: 'You are confident it is a CLPU. Management?',
                options: [
                    'Stop CL wear; fortified cefazolin and tobramycin hourly until healed, since CLPU is an early Pseudomonas infection; no steroid at any stage; review in 24 h; refit with monthly lenses.',
                    'Stop CL wear; prophylactic antibiotic (e.g. chloramphenicol QID) while the epithelium is open; a mild steroid once infection is excluded and it is closing; review in 24–48 h; refit later.',
                    'Continue CL wear with a bandage lens; prednisolone acetate hourly from day 1, since CLPU is purely inflammatory and antibiotics aren’t needed; review in 1 week; refit with extended-wear lenses.',
                    'Stop CL wear; ciprofloxacin q15min loading dose and hourly overnight, since CLPU and MK are treated identically; add a steroid at day 1; review in 1 week; no refit is ever possible.'
                ],
                answer: 1,
                explain: 'If in any doubt, treat as MK (fluoroquinolone with intensive dosing) and review in 24 h. Reassess lens hygiene and modality.'
            },
            {
                phase: '4. Shield ulcer',
                type: 'viva',
                question: 'The examiner pivots: describe a shield ulcer and how it forms.',
                points: [
                    'Superior, oval or shield-shaped epithelial defect, typically in VKC',
                    'Toxic eosinophil products (major basic protein) damage the epithelium',
                    'Mechanical trauma from giant upper-tarsal papillae',
                    'A plaque of mucus and fibrin deposits on the base and stops re-epithelialisation',
                    'Cameron grading: 1 = clear base; 2 = translucent; 3 = opaque, elevated plaque'
                ],
                explain: 'Unlike an infective ulcer, it is sterile and inflammatory — but secondary infection is possible, so prophylactic antibiotic cover is used.'
            }
        ]
    },
    {
        id: 'marginal-keratitis',
        category: 'cornea',
        title: 'Marginal Keratitis',
        theme: 'Staph Hypersensitivity',
        years: ['2018', '2019', '2025'],
        patient: '55-year-old non-CL wearer with chronic blepharitis.',
        stem: 'Mild pain and redness for 2 days in the right eye.',
        exhibit: 'Inferior peripheral stromal infiltrate at 4 o\'clock, separated from the limbus by a clear zone, with sectoral injection. Minimal staining. Lid margins: crusting and collarettes. AC quiet.',
        steps: [
            {
                phase: '1. Marginal vs microbial',
                type: 'mcq',
                question: 'Which features favour marginal keratitis over microbial keratitis?',
                options: [
                    'Paracentral at 12 or 6 o’clock with no clear zone; a defect larger than the infiltrate; marked pain; AC cells; mucopurulent discharge; often a CL wearer.',
                    'Peripheral at 2, 4, 8 or 10 o’clock with a clear zone to the limbus; little or no staining early; minimal pain; quiet AC; blepharitis; often recurrent.',
                    'Peripheral ring-shaped infiltrate with radial perineural lines; severe pain out of proportion; quiet AC; history of swimming in lenses; slowly progressive.',
                    'Peripheral infiltrate with feathery margins and satellite lesions; raised dry texture; endothelial plaque; history of vegetable-matter trauma; slowly progressive.'
                ],
                answer: 1,
                explain: 'Marginal keratitis is a type III hypersensitivity (immune-complex) reaction to staphylococcal antigens, not an active corneal infection. Later the epithelium over it may break down, so staining doesn\'t rule it out.'
            },
            {
                phase: '2. Management',
                type: 'viva',
                question: 'Your management and review?',
                points: [
                    'Lid hygiene and warm compresses — treat the blepharitis (the source)',
                    'Short course of mild topical steroid (e.g. FML 0.1% QID, tapering over 1–2 weeks) once infection is excluded',
                    'Antibiotic cover if there is an epithelial defect (e.g. chloramphenicol), or a combination steroid–antibiotic drop',
                    'Chloramphenicol 1% ointment to the lid margins for staph blepharitis',
                    'Review in about 2–7 days depending on certainty (sooner if any doubt about infection)',
                    'Lubricants; long-term lid care and MGD management to prevent recurrence'
                ],
                explain: 'If unsure it is sterile, treat as MK first and add the steroid only once infection is excluded.',
                recall: 'A 2025 candidate forgot the prophylactic antibiotic and reviewed the next day (cautious is fine). The examiner also wanted the plan if staining develops over the infiltrate: treat as possibly infective — antibiotic first, review in 24 h.'
            },
            {
                phase: '3. Follow-up twist',
                type: 'mcq',
                question: 'The staph blepharitis settles but she still has burning, foreign-body sensation and blur. Next?',
                options: [
                    'Restart the steroid indefinitely: persistent burning means low-grade marginal keratitis, which needs long-term FML at a low dose to stay quiet.',
                    'Dry eye work-up (TFOS DEWS): questionnaire (OSDI/DEQ-5), NIBUT, osmolarity, staining, meibography, meniscus — then treat the subtype.',
                    'Refer for a corneal graft: burning and blur after marginal keratitis mean stromal scarring that only keratoplasty can fix.',
                    'Start oral doxycycline yourself for 3 months: the symptoms are ocular rosacea, which optometrists treat with oral tetracyclines.'
                ],
                answer: 1,
                explain: 'Blepharitis, MGD and dry eye coexist. A 2019 recall had this exact progression: marginal keratitis → aqueous deficiency → which questionnaires.'
            }
        ]
    },
    {
        id: 'fungal-keratitis',
        category: 'cornea',
        title: 'Fungal Keratitis after Gardening',
        theme: 'Fungal Keratitis',
        years: ['2025'],
        patient: '50-year-old man.',
        stem: 'A plant branch hit his eye while gardening 6 days ago. The eye is getting more painful and blurry. He was given chloramphenicol by a GP with no improvement.',
        exhibit: 'Central greyish, raised, dry-looking stromal infiltrate with feathery margins and two small satellite lesions. Endothelial plaque and a small hypopyon.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'Which differentials should you name?',
                options: ['Fungal keratitis (filamentous — Fusarium/Aspergillus)', 'Bacterial keratitis', 'Acanthamoeba keratitis', 'HSV stromal keratitis', 'Marginal keratitis'],
                answers: [0, 1, 2, 3],
                explain: 'Vegetable-matter trauma plus feathery margins, satellite lesions, a dry raised texture and an endothelial plaque points to fungus. Yeast (Candida) is linked with ocular surface disease, steroid use and immunosuppression.'
            },
            {
                phase: '2. Acanthamoeba',
                type: 'mcq',
                question: 'How would Acanthamoeba keratitis look different?',
                options: [
                    'Painless with feathery margins and satellite lesions; a dry, raised greyish plaque; risk from vegetable-matter trauma and topical steroid use.',
                    'Pain out of proportion; early pseudodendrites and radial perineural infiltrates; a ring infiltrate later; risk from CL plus water exposure.',
                    'Rapid onset over hours with a dense central abscess and hypopyon on day 1; risk from overnight wear and poor case hygiene.',
                    'True dendrites with terminal bulbs and reduced sensation; recurrent episodes; risk from stress, fever and UV exposure.'
                ],
                answer: 1,
                explain: 'Treated in hospital with biguanides (PHMB 0.02% or chlorhexidine 0.02%) ± propamidine. Often misdiagnosed as HSV early.'
            },
            {
                phase: '3. Management',
                type: 'mcq',
                question: 'What is your management?',
                options: [
                    'Prescribe natamycin 5% yourself hourly (it is on the optometry list for filamentous keratitis) and review in 24 h; refer only if not improving after 1 week; add prednisolone once it starts to heal.',
                    'Same-day referral to a corneal service for scraping and culture, then natamycin 5% (filamentous; MUTT I) or amphotericin B (Candida). Stop any steroid; you can’t prescribe compounded antifungals.',
                    'Same-day referral for voriconazole 1% as first line (MUTT I showed it beat natamycin for Fusarium); continue the chloramphenicol meanwhile, and keep any steroid to limit scarring.',
                    'Start ciprofloxacin hourly and review in 3 days: most post-trauma ulcers are bacterial, and antifungals are only used once culture proves fungus after 2 weeks.'
                ],
                answer: 1,
                critical: true,
                explain: 'Phone ahead so the patient isn\'t left waiting in triage. If transfer is delayed (e.g. rural), discuss interim cover with the registrar. A broad-spectrum antibiotic is reasonable when bacterial infection can\'t be excluded, but it won\'t treat fungus. Risks: perforation, endophthalmitis, need for therapeutic keratoplasty.',
                recall: 'A 2025 candidate correctly referred for natamycin 5% (filamentous) or amphotericin B (Candida). When asked “at night too?” they said “only while awake”. Hospital protocols usually dose around the clock at first in severe cases, so defer to the corneal unit.'
            },
            {
                phase: '4. MUTT',
                type: 'mcq',
                question: 'What did MUTT II add?',
                options: [
                    'Adding oral voriconazole to topical therapy halved perforation in all severe filamentous ulcers, so it is now standard.',
                    'Adding oral voriconazole to topical therapy gave no overall benefit in severe filamentous ulcers (possible Fusarium subgroup benefit).',
                    'Adding topical steroid to natamycin improved vision in fungal ulcers, so steroids are given once antifungals start.',
                    'Topical natamycin was ineffective for Fusarium, so oral voriconazole alone replaced topical therapy for all severe filamentous ulcers.'
                ],
                answer: 1,
                explain: 'MUTT I: topical natamycin beat voriconazole for filamentous (especially Fusarium) ulcers. MUTT II: oral voriconazole adjunct — no overall benefit.'
            }
        ]
    },
    {
        id: 'hsv-keratitis',
        category: 'cornea',
        title: 'HSV Epithelial → Stromal Keratitis',
        theme: 'Herpes Simplex',
        years: ['2019', '2025'],
        patient: '34-year-old man with a history of cold sores.',
        stem: 'Red, watery, irritable left eye for 3 days. Recently stressed and unwell with a cold.',
        exhibit: 'Fluorescein: a branching linear epithelial ulcer with terminal bulbs; rose bengal / lissamine green stains the swollen edges. Reduced corneal sensation.',
        steps: [
            {
                phase: '1. HSV vs HZO',
                type: 'match',
                question: 'Match each feature to HSV or HZO.',
                pairs: [
                    { label: 'True dendrite: ulcerated, terminal bulbs, stains centrally with NaFl', answer: 'HSV' },
                    { label: 'Pseudodendrite: raised mucous plaques, no terminal bulbs, stains poorly with NaFl', answer: 'HZO' },
                    { label: 'Dermatomal rash (V1) respecting the midline; Hutchinson sign', answer: 'HZO' },
                    { label: 'Latent in trigeminal ganglion after childhood infection; recurrent with stress, fever, UV', answer: 'HSV' }
                ],
                distractors: ['Acanthamoeba'],
                explain: 'Both are latent in the trigeminal ganglion. VZV reactivates (shingles) usually once and in older or immunocompromised people. HSV recurs repeatedly. Pseudodendrites can also be seen in Acanthamoeba, healing abrasions, tyrosinaemia and soft CL wear.'
            },
            {
                phase: '2. Work-up',
                type: 'viva',
                question: 'What is your work-up?',
                points: [
                    'VA, corneal sensation (before anaesthetic)',
                    'NaFl (ulcer base) and lissamine green / rose bengal (edges)',
                    'Look for stromal involvement, KPs, AC cells and IOP (trabeculitis)',
                    'Lid / skin vesicles',
                    'Dilated fundus exam to exclude retinitis (acute retinal necrosis is rare but serious)',
                    'History: previous episodes, steroid use, immune status, atopy, CL wear'
                ],
                explain: 'Always ask about recent steroid drops (they worsen epithelial disease) and previous episodes.'
            },
            {
                phase: '3. Treatment',
                type: 'mcq',
                question: 'Treatment for HSV epithelial keratitis?',
                options: [
                    'Topical antiviral (aciclovir 3% ointment 5×/day) plus prednisolone acetate QID to limit scarring from the start; review in 1–2 weeks, as antivirals take that long to start working.',
                    'Topical antiviral (aciclovir 3% ointment 5×/day or ganciclovir 0.15% gel 5×/day — check availability) ± gentle debridement; no steroid; review in 24–48 h, then about weekly.',
                    'Oral aciclovir 400 mg BD alone (topical antivirals are too toxic for epithelial disease); no debridement; review in 2–4 weeks, since epithelial HSV heals slowly.',
                    'Chloramphenicol QID to prevent secondary infection plus lubricants; antivirals are kept for stromal disease; review in 1 week, as most dendrites heal without treatment.'
                ],
                answer: 1,
                critical: true,
                explain: 'Epithelial disease is active viral replication — steroids are contraindicated. Expect healing within 1–2 weeks. Oral antivirals (via GP) are an alternative when topical use is impractical.'
            },
            {
                phase: '4. Stromal haze',
                type: 'mcq',
                question: 'At one week the epithelium has healed, but there is now disciform stromal oedema with KPs and mild AC cells. Management?',
                options: [
                    'Recurrent active epithelial disease: restart topical aciclovir 5×/day alone and avoid steroids, since stromal oedema with KPs means live virus is back in the epithelium (HEDS).',
                    'Immune stromal/endothelial keratitis: topical steroid (e.g. prednisolone acetate, slow taper) under antiviral cover, monitoring IOP, usually co-managed (HEDS).',
                    'Secondary bacterial keratitis: start ciprofloxacin intensively and stop the antiviral, since KPs with stromal oedema mean bacterial invasion (HEDS).',
                    'Antiviral toxicity: stop all drops and start lubricants, since disciform oedema is a reaction to aciclovir and settles in a few weeks without steroid (HEDS).'
                ],
                answer: 1,
                explain: 'HEDS: topical steroid with antiviral cover sped recovery of stromal keratitis. Oral aciclovir 400 mg BD prophylaxis roughly halved recurrences (HEDS-APT) — think of it for frequent recurrences (via GP or ophthalmology).'
            },
            {
                phase: '5. Recurrence',
                type: 'multi',
                question: 'Who is at higher risk of recurrent or severe HSV keratitis?',
                options: ['Immunocompromised (HIV, chemotherapy, transplant, systemic immunosuppressants)', 'Atopic patients (eczema)', 'People using topical steroids inappropriately', 'Those with previous episodes', 'Patients on PGA drops (case reports of reactivation)', 'Patients on oral aciclovir prophylaxis'],
                answers: [0, 1, 2, 3, 4],
                explain: 'Triggers: stress, fever, UV light, trauma, menstruation and ocular surgery or laser.',
                recall: 'A 2025 candidate blanked on “what type of patients get recurrences?” The answer the examiner wanted: <strong>immunocompromised</strong> (HIV, chemotherapy, organ transplant, systemic immunosuppressants) and atopic patients.'
            }
        ]
    },
    {
        id: 'hzo',
        category: 'cornea',
        title: 'Herpes Zoster Ophthalmicus',
        theme: 'HZO',
        years: ['2019', '2025'],
        patient: '72-year-old woman.',
        stem: 'Two days of burning and tingling around the right forehead and eye, now with a blistering rash. Red, sore right eye.',
        exhibit: 'Vesicular rash over the right forehead and upper lid stopping at the midline, plus vesicles on the tip of the nose. The cornea shows raised, poorly staining branching lesions.',
        steps: [
            {
                phase: '1. Signs',
                type: 'viva',
                question: 'What do you see, and what is Hutchinson\'s sign?',
                points: [
                    'Dermatomal vesicular rash in V1 (ophthalmic division of the trigeminal nerve), not crossing the midline',
                    'Pseudodendrites (raised mucous plaques, no terminal bulbs)',
                    'Hutchinson sign: vesicles on the tip / side of the nose',
                    'Hutchinson sign = nasociliary nerve involvement — the same branch supplies the cornea → higher risk of eye involvement',
                    'Possible conjunctivitis, keratitis, episcleritis/scleritis, uveitis (sectoral iris atrophy, raised IOP), CN palsies, retinitis'
                ],
                explain: 'VZV reactivates from the trigeminal ganglion. Complications can appear weeks to months later (stromal keratitis, neurotrophic cornea, uveitis, PHN).',
                recall: 'A 2025 candidate was asked how Hutchinson\'s sign relates to the trigeminal nerve: the nasociliary branch of V1 supplies both the nasal tip skin and the cornea.'
            },
            {
                phase: '2. Antivirals',
                type: 'mcq',
                question: 'What is the key treatment and who gives it?',
                options: [
                    'Topical aciclovir 3% ointment 5×/day prescribed by you, plus oral prednisolone via the GP to prevent post-herpetic neuralgia; oral antivirals add nothing once the rash has appeared.',
                    'Oral antiviral within 72 h of rash onset via the GP/ED (valaciclovir 1 g TDS, famciclovir 500 mg TDS or aciclovir 800 mg 5×/day, 7 days), dose-adjusted for renal function.',
                    'Oral aciclovir 400 mg BD via the GP for 12 months (HEDS dose), started at any point in the illness; the 72-hour window only applies to herpes simplex.',
                    'Oral valaciclovir 1 g TDS prescribed by you (oral antivirals are on the optometry list for HZO) for 7 days, started within 7 days of rash onset.'
                ],
                answer: 1,
                critical: true,
                explain: 'Oral antivirals within 72 h reduce the severity and duration of the rash, viral shedding and the rate of eye complications (and may reduce PHN). Australian optometrists can\'t prescribe oral antivirals, so phone the GP for a same-day appointment. If it is the weekend, go to ED — don\'t wait.',
                recall: 'Two 2025 candidates were asked “in what countries can optometrists prescribe oral antivirals?” — not in Australia; in New Zealand and parts of the US/UK, for example. Topical antivirals don\'t treat HZO epithelial disease effectively.'
            },
            {
                phase: '3. Your role',
                type: 'viva',
                question: 'What do you do as the optometrist, and what other advice do you give?',
                points: [
                    'Lubricants (PF) for pseudodendrites / exposure; cool compresses for the eye; prophylactic antibiotic ointment to skin lesions if secondary infection risk',
                    'Topical steroid (with antiviral cover) only for stromal keratitis, uveitis or scleritis — usually co-managed',
                    'Cycloplegic if uveitis; check IOP (trabeculitis)',
                    'Dilated fundus exam (acute retinal necrosis / PORN), motility (CN III, IV, VI palsies)',
                    'Contagious to people without VZV immunity until crusted: avoid pregnant women, newborns, immunocompromised people',
                    'Pain: oral analgesia via GP; pain specialist for post-herpetic neuralgia',
                    'Vaccine afterwards: Shingrix (recombinant) to reduce recurrence — on the National Immunisation Program for eligible older adults'
                ],
                explain: 'Explain the split: optometrist (eye care, monitoring, topical drugs), GP (oral antivirals, analgesia, vaccination, screening for immunosuppression in younger patients), ophthalmologist (severe ocular disease).'
            },
            {
                phase: '4. Precautions',
                type: 'mcq',
                question: 'Which precaution matters for oral aciclovir or valaciclovir in this 72-year-old?',
                options: [
                    'Asthma — avoid in reactive airways disease or COPD',
                    'Renal impairment — reduce the dose and keep her hydrated',
                    'Glaucoma — aciclovir raises intraocular pressure in older eyes',
                    'Hypertension — it raises blood pressure in older adults'
                ],
                answer: 1,
                explain: 'Aciclovir is renally cleared. Neurotoxicity and acute kidney injury risk rise with renal impairment and in older patients. The GP checks eGFR.'
            }
        ]
    },
    {
        id: 'fuchs',
        category: 'cornea',
        title: 'Fuchs\' Endothelial Dystrophy',
        theme: 'Corneal Dystrophy',
        years: ['2025'],
        patient: '68-year-old woman.',
        stem: 'Blurry vision that is worst on waking and clears through the morning.',
        exhibit: 'Specular reflection shows central guttae (“beaten metal”). Mild stromal thickening; early microcystic epithelial oedema.',
        steps: [
            {
                phase: '1. Signs & symptoms',
                type: 'viva',
                question: 'Signs, symptoms and why the vision is worse in the morning?',
                points: [
                    'Corneal guttae (Descemet\'s excrescences), central first',
                    'Pigment dusting on the endothelium; endothelial cell loss (specular microscopy)',
                    'Stromal oedema → epithelial microcysts / bullae (pain if bullae rupture)',
                    'Glare and morning blur that improves during the day',
                    'With eyes closed overnight there is no tear evaporation, so the tears are less hypertonic and less fluid is drawn from the cornea → more oedema on waking',
                    'Pathogenesis: endothelial pump failure (often TCF4 gene)'
                ],
                explain: 'Pachymetry tracks progression. Cataract surgery can tip a marginal endothelium into decompensation — warn the surgeon.'
            },
            {
                phase: '2. Management',
                type: 'mcq',
                question: 'Management of early symptomatic Fuchs\'?',
                options: [
                    'Topical CAI (dorzolamide TDS) to reduce corneal fluid, prednisolone acetate QID long-term to protect the endothelium, a bandage CL worn continuously, and refer for penetrating keratoplasty at the very first sign of guttae.',
                    'Hypertonic saline (5% drops by day, ointment at night, from a pharmacy), warm air in the morning, lower IOP if raised (avoid topical CAIs), bandage CL for ruptured bullae, and refer for DMEK/DSAEK when vision is affected.',
                    'Hypertonic saline (5% drops at night only, prescription-only), cool air in the morning, latanoprost to thin the cornea, and refer for DMEK only once the patient is legally blind in that eye.',
                    'Lubricants and observation only: Fuchs’ has no medical treatment, and keratoplasty is avoided because grafts fail in all Fuchs’ patients; topical CAIs are fine if IOP is raised.'
                ],
                answer: 1,
                explain: 'Topical CAIs can worsen endothelial pump function — avoid them in a compromised endothelium. Review every 6–12 months (sooner if symptoms progress).'
            }
        ]
    }
);
