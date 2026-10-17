// Uveitis & trauma cases (anterior-eye examiner)
window.CASES.push(
    {
        id: 'aau-synechiae',
        category: 'uveitis',
        title: 'AAU, Synechiae & Steroids',
        theme: 'Acute Anterior Uveitis',
        years: ['2018', '2019', '2025', 'Mock 2025'],
        patient: '24-year-old man.',
        stem: 'Three days of a painful, photophobic right eye. Wearing sunglasses in the waiting room.',
        exhibit: 'Right eye: circumlimbal flush, fine (non-granulomatous) KPs inferiorly, an irregular miotic pupil with posterior synechiae at 5 and 7 o\'clock. Cornea clear. AC: 3+ cells in a 1 × 1 mm beam.',
        steps: [
            {
                phase: '1. Work-up',
                type: 'viva',
                question: 'What is your work-up?',
                points: [
                    'VA; pupils (miotic, irregular); IOP (low from ciliary shutdown, or high from trabeculitis — herpetic, PSS)',
                    'Slit lamp: grade cells and flare (SUN), KP type (fine vs mutton-fat), synechiae, iris nodules or atrophy, hypopyon',
                    'NaFl to exclude keratitis / epithelial defect; corneal sensation (herpes)',
                    'Gonioscopy (PAS, angle)',
                    'Dilated fundus exam to exclude intermediate/posterior uveitis (vitritis, snowballs, vasculitis, CMO)',
                    'Fellow eye; review of systems'
                ],
                explain: 'Always dilate a uveitis patient — this was repeated across all years. Dilation also helps break synechiae.',
                recall: 'A 2025 candidate who said “don\'t dilate because IOP will rise” was corrected: dilation is only a problem in narrow / occludable angles.'
            },
            {
                phase: '2. Review of systems',
                type: 'mcq',
                question: 'Which systemic questions target the most common association?',
                options: [
                    'Recent travel and tick bites.',
                    'Cold sores, shingles or chickenpox.',
                    'Lower back pain or stiffness worse in the morning, joint swelling, heel or tendon pain, bowel symptoms, psoriasis, urethritis.',
                    'Asthma, eczema and hayfever.'
                ],
                answer: 2,
                explain: 'HLA-B27 accounts for roughly half of AAU in Western populations (ankylosing spondylitis, reactive arthritis, IBD, psoriatic arthritis). Ask in lay terms (“Do you get a stiff back in the morning that eases with movement?”). Recurrence history matters too — recurrent and bilateral disease prompts a systemic work-up.'
            },
            {
                phase: '3. Initial treatment',
                type: 'mcq',
                question: 'Initial pharmacological management?',
                options: [
                    'Prednisolone acetate 1% hourly (± a loading dose, e.g. every 15 min for the first hour) PLUS atropine 1% BD.',
                    'FML 0.1% QID PLUS cyclopentolate 1% TDS.',
                    'Oral NSAIDs and cold compresses.',
                    'Dexamethasone 0.1% QID and pilocarpine 2%.'
                ],
                answer: 0,
                explain: 'Prednisolone acetate is a lipophilic suspension → best corneal penetration (Pred Forte; Prednefrin Forte also contains phenylephrine 0.12%). Shake well. Atropine relieves ciliary spasm (pain), breaks and prevents synechiae and stabilises the blood–aqueous barrier. FML is too weak for 3+ cells. Pilocarpine is contraindicated.',
                recall: 'A 2025 candidate said Pred Forte penetrates better because of “sodium acetate”. It is prednisolone <strong>acetate</strong> (lipophilic suspension) vs prednisolone <strong>sodium phosphate</strong> (hydrophilic solution, e.g. Predsol).'
            },
            {
                phase: '4. Breaking synechiae',
                type: 'mcq',
                question: 'The synechiae persist on atropine. Why add phenylephrine, rather than cyclopentolate?',
                options: [
                    'Phenylephrine is just a stronger antimuscarinic.',
                    'Phenylephrine (α1 agonist) contracts the iris DILATOR, while atropine and cyclopentolate block the SPHINCTER (muscarinic antagonists). Different muscles → synergistic pull. Adding cyclopentolate to atropine adds nothing (same mechanism).',
                    'Cyclopentolate is contraindicated in uveitis.',
                    'Phenylephrine relieves pain.'
                ],
                answer: 1,
                explain: 'Steps: atropine 1% → in-office phenylephrine 2.5% → phenylephrine 10% (with BP checks) → a pledget (cotton soaked in phenylephrine ± cyclopentolate after topical anaesthetic, in the inferior fornix for ~5–15 min) → refer (subconjunctival mydriatics).'
            },
            {
                phase: '5. Phenylephrine 10%',
                type: 'mcq',
                question: 'Before phenylephrine 10%, what must you do?',
                options: ['Measure IOP', 'Measure blood pressure (and re-check after instillation)', 'Perform gonioscopy', 'Dilate the other eye'],
                answer: 1,
                critical: true,
                explain: 'Phenylephrine 10% can cause acute hypertension, arrhythmia and MI. Contraindications/cautions: hypertension, cardiovascular disease, aneurysm, MAOIs or tricyclics, thyrotoxicosis, insulin-dependent diabetes, infants and older adults, narrow angles, and iris-supported IOLs. Use 2.5% where possible.',
                recall: 'A 2025 candidate remembered “check BP before” but blanked on “when else?” — <strong>after</strong> instillation.'
            },
            {
                phase: '6. Review & IOP',
                type: 'mcq',
                question: 'You review the next day. What do you expect, and what are you checking?',
                options: [
                    'Cells should be gone; if not, refer.',
                    'Symptoms (pain, photophobia) should be easing and cells not worse — cells take days to fall. Check IOP (inflammatory or early steroid rise), pupil and synechiae, adherence and technique, and posterior involvement. Once there is a ≥2-step SUN improvement, reduce the frequency and then taper.',
                    'Only check VA.',
                    'Stop the atropine.'
                ],
                answer: 1,
                explain: 'Typical course: hourly until cells improve, then QID until quiet (0 to 0.5+ cells), then a taper. Longer courses need slower tapers (e.g. QID 1 wk → TDS 1 wk → BD 1 wk → daily 1 wk). Abrupt cessation causes rebound. Steroid IOP rise usually appears after 2–6 weeks; if IOP rises significantly, add an aqueous suppressant (timolol or brimonidine) and avoid PGAs during active uveitis.',
                recall: 'The mock notes said steroids are “contraindicated in pregnancy”. Topical prednisolone is TGA category <strong>A</strong>; pregnancy isn\'t a contraindication, although referral or co-management is sensible.'
            },
            {
                phase: '7. Referral',
                type: 'multi',
                question: 'Which features mean you should refer or co-manage with ophthalmology?',
                options: [
                    'Posterior or intermediate involvement',
                    'Granulomatous signs (mutton-fat KPs, iris nodules)',
                    'Bilateral, recurrent or chronic disease (also needs a systemic work-up via GP)',
                    'Hypopyon, or no response / worsening on treatment',
                    'Children; monocular patients',
                    'Raised IOP not controlled',
                    'A first episode of unilateral non-granulomatous AAU responding well'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Optometrists can manage uncomplicated unilateral non-granulomatous AAU that responds to treatment. Topical steroids don\'t reach the posterior segment in useful concentrations, which is why posterior uveitis needs periocular or systemic therapy.',
                recall: 'In 2018, a candidate listing referral criteria missed <strong>bilateral</strong>, which the examiner wanted.'
            }
        ]
    },
    {
        id: 'aau-hypopyon',
        category: 'uveitis',
        title: 'AAU with Hypopyon',
        theme: 'Severe AAU',
        years: ['2025', 'Mock 2025'],
        patient: '32-year-old man with known ankylosing spondylitis.',
        stem: 'Severe pain and photophobia in the left eye for 2 days. Vision blurred. He has had a similar episode before.',
        exhibit: 'Left eye: intense ciliary flush, fibrinous AC reaction (4+ flare), a 1 mm inferior hypopyon, fine KPs, posterior synechiae forming. Cornea clear.',
        steps: [
            {
                phase: '1. Hypopyon differentials',
                type: 'multi',
                question: 'What can cause a hypopyon?',
                options: ['HLA-B27 AAU', 'Behçet\'s disease (often shifting, little injection)', 'Infectious keratitis (with a corneal ulcer)', 'Endophthalmitis (post-surgery or injection, endogenous)', 'Masquerade (lymphoma, retinoblastoma in children)', 'Allergic conjunctivitis'],
                answers: [0, 1, 2, 3, 4],
                explain: 'A sterile HLA-B27 hypopyon with a clear cornea in a known AS patient is classic, but always exclude infection (recent surgery or injection, ulcer, systemic sepsis).'
            },
            {
                phase: '2. Granulomatous?',
                type: 'mcq',
                question: 'Is hypopyon a granulomatous sign?',
                options: [
                    'Yes — hypopyon, mutton-fat KPs and iris nodules are the granulomatous triad.',
                    'No. Hypopyon is typical of severe NON-granulomatous AAU (HLA-B27, Behçet\'s). Granulomatous signs are mutton-fat KPs, Koeppe and Busacca iris nodules and a more chronic course (sarcoid, TB, syphilis, VKH, herpetic).',
                    'Only in children.',
                    'Only with high IOP.'
                ],
                answer: 1,
                explain: 'Mutton-fat KPs are large, greasy aggregates of macrophages and epithelioid cells, which is why they mark granulomatous inflammation.',
                recall: 'A 2019 recall listed “mutton fat KP, iris nodules, hypopyon” as granulomatous signs. Hypopyon is the odd one out.'
            },
            {
                phase: '3. Management',
                type: 'mcq',
                question: 'What do you do?',
                options: [
                    'FML QID and review in a week.',
                    'Start prednisolone acetate 1% (every 15 min for 1 h, then hourly) and atropine 1% BD, check IOP, dilate, and refer to ophthalmology within 24 h (hypopyon, recurrent). Tell the GP or rheumatologist.',
                    'Refer only, with no treatment.',
                    'Oral antibiotics.'
                ],
                answer: 1,
                explain: 'Starting treatment while arranging referral is appropriate. Prednisolone acetate 1% (Pred Forte / Prednefrin Forte) is PBS-subsidised for optometrist prescribing with restrictions — check the current PBS listing.',
                recall: 'One 2025 examiner asked which drugs were on and off the PBS — know the PBS status of what you prescribe.'
            },
            {
                phase: '4. Prognosis',
                type: 'mcq',
                question: 'What is the expected course?',
                options: [
                    'Lifelong continuous inflammation.',
                    'Usually resolves over about 2–6 weeks with treatment (acute = under 3 months, SUN). Recurrences are common and can alternate between eyes. The hypopyon clears as inflammation settles. Complications if poorly controlled: synechiae, cataract, raised IOP, CMO.',
                    'It resolves in 24 hours.',
                    'Always leads to blindness.'
                ],
                answer: 1,
                explain: 'Teach him to present early at the first sign of recurrence; some clinicians give a supervised plan for this.'
            }
        ]
    },
    {
        id: 'granulomatous-au',
        category: 'uveitis',
        title: 'Mutton-Fat KPs',
        theme: 'Granulomatous Uveitis',
        years: ['2019', '2025'],
        patient: '45-year-old woman.',
        stem: 'Blurred vision and mild discomfort in the right eye for a few weeks. Recent dry cough and shortness of breath.',
        exhibit: 'Large, greasy, yellow-white KPs on the inferior endothelium (mutton-fat), Koeppe nodules at the pupil margin, 2+ cells.',
        steps: [
            {
                phase: '1. Causes',
                type: 'multi',
                question: 'Which are causes of granulomatous anterior uveitis?',
                options: ['Sarcoidosis', 'Tuberculosis', 'Syphilis', 'Herpetic (HSV/VZV) uveitis', 'Vogt–Koyanagi–Harada', 'HLA-B27 ankylosing spondylitis'],
                answers: [0, 1, 2, 3, 4],
                explain: 'The cough and breathlessness point to sarcoidosis. GP investigations: chest X-ray / CT, serum ACE and calcium, syphilis serology, QuantiFERON, FBC, ESR/CRP.'
            },
            {
                phase: '2. Endothelium',
                type: 'mcq',
                question: 'What else can produce deposits or changes on the corneal endothelium that you must distinguish?',
                options: [
                    'Pigment (Krukenberg spindle in PDS), guttae (Fuchs\'), KPs (uveitis), PXF flakes, endothelial plaque (fungal keratitis)',
                    'Only KPs',
                    'Corneal arcus',
                    'Dendrites'
                ],
                answer: 0,
                explain: 'Pigment “dusting” is fine and brown (it follows convection currents into a vertical spindle). KPs are cellular, often inferior in an Arlt\'s triangle. A 2025 panel asked “how do you differentiate pigment dusting from KPs, and how does aqueous flow?” — convection: warm aqueous rises near the iris and cool aqueous falls near the cornea.'
            },
            {
                phase: '3. Posterior',
                type: 'viva',
                question: 'What would you see with intermediate or posterior involvement, and what symptoms?',
                points: [
                    'Vitreous cells / haze, snowballs, snowbanking (pars planitis)',
                    'Retinal vasculitis (perivascular sheathing, “candle-wax drippings” in sarcoid)',
                    'Choroiditis / retinitis lesions, CMO, disc swelling',
                    'Symptoms: floaters and blurred vision more than pain or redness',
                    'Refer: topical steroids don\'t treat the posterior segment adequately — periocular or systemic therapy needed'
                ],
                explain: 'Granulomatous uveitis should be referred for diagnosis and systemic work-up even if you start topical treatment.'
            }
        ]
    },
    {
        id: 'paeds-au',
        category: 'uveitis',
        title: 'Anterior Uveitis in a Child',
        theme: 'Paediatric Uveitis',
        years: ['2025'],
        patient: '12-year-old girl, brought in by her mother.',
        stem: 'Red, uncomfortable right eye for 4 days; left eye white.',
        exhibit: 'Mutton-fat KPs inferiorly, 2+ cells, a few posterior synechiae.',
        steps: [
            {
                phase: '1. History',
                type: 'reveal',
                text: 'Her mother mentions she complains of knee and heel pain when she runs at netball, and her lower back has been stiff in the mornings.'
            },
            {
                phase: '2. Systemic link',
                type: 'mcq',
                question: 'What systemic conditions are you thinking of?',
                options: [
                    'Juvenile idiopathic arthritis — enthesitis-related (HLA-B27) with a symptomatic red eye; oligoarticular ANA-positive JIA usually causes chronic, WHITE, painless uveitis in younger girls. Also consider sarcoid, TINU and infections.',
                    'Asthma.',
                    'Migraine.',
                    'Myopia.'
                ],
                answer: 0,
                explain: 'Oligoarticular ANA+ JIA uveitis is silent, so these children are screened regularly. Enthesitis-related arthritis behaves more like adult HLA-B27 AAU.'
            },
            {
                phase: '3. Investigations',
                type: 'multi',
                question: 'What would you ask the GP or paediatrician to arrange?',
                options: ['ANA', 'HLA-B27', 'ESR / CRP, FBC', 'Rheumatoid factor', 'Urinalysis / renal function (TINU)', 'Chest X-ray / ACE if sarcoid suspected', 'MRI orbits'],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Refer to a paediatric rheumatologist as well.'
            },
            {
                phase: '4. Management',
                type: 'mcq',
                question: 'What is the safest management approach?',
                options: [
                    'Manage alone exactly as for an adult.',
                    'Co-manage urgently with a paediatric ophthalmologist (and rheumatologist). Topical steroid and cycloplegia under ophthalmology supervision; IOP monitored closely (children are frequent, rapid steroid responders); cataract risk; consider steroid-sparing systemic therapy.',
                    'No steroids in children ever.',
                    'Atropine 1% TDS long-term only.'
                ],
                answer: 1,
                explain: 'Prescribe for children cautiously: higher systemic absorption by body weight. Use punctal occlusion, choose the lowest effective strength, watch for atropine toxicity, and avoid brimonidine under 2 years.',
                recall: 'The 2025 recall recommends Webber & Sharwood (2021, Clin Exp Optom), “Prescribing ocular medications in children and infants” — worth reading.'
            },
            {
                phase: '5. Taper',
                type: 'mcq',
                question: 'You started prednisolone acetate hourly. How would you taper?',
                options: [
                    'Stop it as soon as cells are 0.',
                    'Once the AC is quiet, taper slowly in steps (e.g. 6×/day → QID → TDS → BD → daily, each about a week, longer after prolonged use), watching for rebound cells and IOP at each step.',
                    'Halve the dose every day.',
                    'Switch to oral prednisolone.'
                ],
                answer: 1,
                explain: 'Rebound inflammation after a fast taper is common, especially in chronic or paediatric disease. Review at each step.'
            }
        ]
    },
    {
        id: 'chronic-au',
        category: 'uveitis',
        title: 'Bilateral Chronic Anterior Uveitis',
        theme: 'Chronic AU',
        years: ['2019'],
        patient: '50-year-old man.',
        stem: 'Both eyes have felt “off” and slightly red for several months; mild blur, little pain.',
        steps: [
            {
                phase: '1. Acute vs chronic',
                type: 'mcq',
                question: 'How do you tell chronic anterior uveitis from acute?',
                options: [
                    'Chronic: lasting more than 3 months (or relapsing within 3 months of stopping treatment), insidious onset, often bilateral, white or mildly injected, little pain; complications such as band keratopathy, cataract, glaucoma, CMO and PAS. Acute: sudden, painful, photophobic, red, limited (< 3 months).',
                    'There is no difference.',
                    'Chronic is always granulomatous.',
                    'Acute is always bilateral.'
                ],
                answer: 0,
                explain: 'SUN definitions: acute = sudden onset and limited duration; recurrent = repeated episodes separated by inactive periods (≥3 months off treatment); chronic = persistent, relapsing <3 months after stopping treatment.'
            },
            {
                phase: '2. Plan',
                type: 'viva',
                question: 'What is your plan?',
                points: [
                    'Full work-up including DFE (posterior involvement, CMO) and gonioscopy',
                    'Refer: bilateral and chronic disease needs ophthalmology and a systemic work-up via GP (sarcoid, TB, syphilis, JIA-adult, MS, Fuchs uveitis syndrome)',
                    'Topical steroid tailored to activity, with slow tapers',
                    'At follow-up watch for: rebound cells during taper, IOP rise (steroid or uveitic), cataract, band keratopathy, CMO, PAS',
                    'Steroid-sparing systemic agents may be needed (specialist)'
                ],
                explain: 'In 2019 the examiner asked what signs to watch for during follow-up while tapering a steroid — rebound cells and flare, IOP, synechiae and cataract.'
            }
        ]
    },
    {
        id: 'traumatic-iritis',
        category: 'uveitis',
        title: 'Blunt Trauma & Traumatic Iritis',
        theme: 'Ocular Trauma',
        years: ['2019', '2025'],
        patient: '50-year-old man.',
        stem: 'Hit in the right eye by a football yesterday. Eye now aches and is light-sensitive.',
        exhibit: 'Red right eye, mild corneal oedema, AC 2+ cells with some pigment, sluggish slightly dilated pupil.',
        steps: [
            {
                phase: '1. What could be damaged?',
                type: 'multi',
                question: 'Which ocular conditions can follow blunt trauma?',
                options: [
                    'Traumatic iritis', 'Hyphaema', 'Angle recession / iridodialysis / cyclodialysis', 'Traumatic mydriasis / sphincter tears', 'Lens subluxation or cataract (Vossius ring)', 'Commotio retinae, choroidal rupture, retinal dialysis / detachment', 'Orbital floor (blow-out) fracture', 'Open globe', 'Embedded corneal foreign body from the impact'
                ],
                answers: [0, 1, 2, 3, 4, 5, 6, 7],
                explain: 'Blunt trauma injures by compression and expansion. A corneal FB is a sharp or projectile mechanism, not blunt.',
                recall: 'A 2019 candidate listed signs (lid swelling) and an FB. The examiner wanted <strong>ocular conditions</strong> such as those above. EOM testing is for orbital floor fracture (restricted upgaze, diplopia, infraorbital numbness).'
            },
            {
                phase: '2. Angle assessment',
                type: 'mcq',
                question: 'How do you assess the angle today?',
                options: [
                    'Indentation gonioscopy.',
                    'Van Herick only; defer gonioscopy for about 2–4 weeks (rebleed risk with hyphaema, discomfort, inflammation) and then look for angle recession.',
                    'No angle assessment ever.',
                    'Dilate and indent the sclera.'
                ],
                answer: 1,
                explain: 'Avoid scleral depression too. Gonioscopy for recession once things settle, then monitor IOP lifelong if recession is found.'
            },
            {
                phase: '3. Treatment',
                type: 'mcq',
                question: 'Grade 2 cells, no hyphaema, IOP 18. Treatment?',
                options: [
                    'Prednisolone acetate 1% QID (more often if severe) and a cycloplegic (cyclopentolate 1% TDS or atropine 1% BD), after checking IOP and excluding an epithelial defect or open globe. Taper over 1–2 weeks. Review in 2–3 days.',
                    'Oral antibiotics.',
                    'Pilocarpine to constrict the pupil.',
                    'No treatment.'
                ],
                answer: 0,
                explain: 'Traumatic iritis usually settles quickly. Always check IOP before starting steroids. If he has a history of HSV, discuss antiviral prophylaxis with the GP or ophthalmologist.',
                recall: 'A 2025 candidate was asked “what if this patient has a history of herpes simplex?” — prophylactic oral aciclovir via the GP is appropriate.'
            },
            {
                phase: '4. Prognosis',
                type: 'mcq',
                question: 'Everything settles. What long-term follow-up does he need?',
                options: [
                    'None.',
                    'Gonioscopy for angle recession once settled; dilated retinal exam with scleral depression once safe (dialysis or tears); lifelong at least annual IOP checks if there is recession (glaucoma can develop years later).',
                    'MRI.',
                    'Weekly IOP checks forever.'
                ],
                answer: 1,
                explain: 'About 6–9% of eyes with significant (>180°) recession develop glaucoma, sometimes decades later.'
            }
        ]
    },
    {
        id: 'hyphaema',
        category: 'uveitis',
        title: 'Traumatic Hyphaema in a Child',
        theme: 'Hyphaema',
        years: ['2019', '2025'],
        patient: '12-year-old boy.',
        stem: 'Hit in the eye by a cricket ball 3 hours ago.',
        exhibit: 'Blood layered in the inferior anterior chamber, about 1/4 of the AC height. Cornea clear.',
        steps: [
            {
                phase: '1. History',
                type: 'viva',
                question: 'What history questions do you ask?',
                points: [
                    'Mechanism, time, force; projectile or sharp object (open globe risk); glasses worn?',
                    'Vision change, pain, nausea / vomiting (IOP), diplopia',
                    'Bleeding disorders; anticoagulants or antiplatelets (aspirin, NSAIDs)',
                    'Sickle cell disease or trait (ethnic background) — affects IOP drug choice and risk',
                    'Previous eye surgery or disease',
                    'In children, consider whether the story fits (non-accidental injury)'
                ],
                explain: 'Sickle cell trait makes red cells sickle in the AC → TM blockage and optic nerve damage at lower IOPs.'
            },
            {
                phase: '2. Grade & risks',
                type: 'mcq',
                question: 'Grade the hyphaema and name the period of highest rebleed risk.',
                options: ['Grade I (<1/3); rebleed risk highest around days 2–5', 'Grade III; no rebleed risk', 'Microhyphaema; rebleed on day 30', 'Grade IV; rebleed within 1 hour'],
                answer: 0,
                explain: 'Rebleeds are often larger and raise the risk of raised IOP and corneal blood staining.'
            },
            {
                phase: '3. Management',
                type: 'viva',
                question: 'Outline your management.',
                points: [
                    'Refer to ophthalmology the same day (all traumatic hyphaemas in children)',
                    'Limit activity / rest; sleep with the head elevated ~30–45° (blood settles inferiorly, clearing the visual axis and helping assessment)',
                    'Rigid eye shield; no NSAIDs or aspirin (paracetamol for pain)',
                    'Cycloplegic (e.g. atropine 1%) and topical steroid (prednisolone acetate) for comfort and inflammation',
                    'IOP control if raised: timolol and brimonidine are suitable for a 12-year-old (avoid brimonidine under 2 years); avoid CAIs in sickle cell; avoid PGAs and miotics',
                    'Daily review for the first ~5 days (rebleed, IOP, corneal blood staining)',
                    'Later: gonioscopy (~4 weeks) for angle recession, dilated retinal exam with depression, lifelong IOP checks'
                ],
                explain: 'Other causes of hyphaema to name: anticoagulants or bleeding disorders, rubeosis (NVI), iris tumours (juvenile xanthogranuloma in children), Fuchs heterochromic uveitis, IOL chafing (UGH syndrome), post-surgery.',
                recall: 'A 2025 examiner asked what else, besides bed rest and head tilt, you can do — shield, cycloplegic, steroid, avoid antiplatelets, IOP control, daily review.'
            },
            {
                phase: '4. Variation',
                type: 'mcq',
                question: 'Variation: a 55-year-old with a fresh traumatic hyphaema has IOP 35 mmHg. Best first IOP-lowering choices?',
                options: [
                    'Latanoprost and pilocarpine.',
                    'Timolol (if no contraindications) ± brimonidine; a topical CAI if no sickle cell disease. Avoid PGAs (pro-inflammatory, slow) and miotics (break down the blood–aqueous barrier, increase pupil block). Refer the same day.',
                    'Atropine alone.',
                    'Nothing — IOP will normalise.'
                ],
                answer: 1,
                explain: 'Sustained high IOP with hyphaema risks corneal blood staining and optic neuropathy. Surgical washout may be needed.'
            }
        ]
    }
);
