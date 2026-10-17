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
                    'Recent travel, tick bites, rashes after bushwalking, night sweats, weight loss, persistent cough and contact with tuberculosis.',
                    'Cold sores, shingles or chickenpox, recent eye surgery, and any steroid creams or drops used in the past.',
                    'Lower back stiffness worse in the morning, joint swelling, heel or tendon pain, bowel symptoms, psoriasis, urethritis.',
                    'Asthma, eczema and hay fever, recent sinus infections, nasal steroid sprays and seasonal sneezing or itching.'
                ],
                answer: 2,
                explain: 'HLA-B27 accounts for roughly half of AAU in Western populations (ankylosing spondylitis, reactive arthritis, IBD, psoriatic arthritis). Ask in lay terms (“Do you get a stiff back in the morning that eases with movement?”). Recurrence history matters too — recurrent and bilateral disease prompts a systemic work-up.'
            },
            {
                phase: '3. Initial treatment',
                type: 'mcq',
                question: 'Initial pharmacological management?',
                options: [
                    'Prednisolone acetate 1% hourly (± a loading dose for the first hour) plus atropine 1% BD.',
                    'FML 0.1% QID plus cyclopentolate 1% TDS, stepping up to prednisolone only if cells rise.',
                    'Prednisolone sodium phosphate 0.5% QID plus tropicamide 1% at night.',
                    'Dexamethasone 0.1% QID plus pilocarpine 2% QID to pull the iris off the lens.'
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
                    'Phenylephrine is a stronger antimuscarinic than cyclopentolate, so it blocks the SPHINCTER more completely. Cyclopentolate is avoided because it binds the same receptor and competes with atropine, cancelling it out.',
                    'Phenylephrine (α1-agonist) contracts the DILATOR, while atropine and cyclopentolate block the SPHINCTER (antimuscarinics): different muscles, so they add up. Cyclopentolate on top of atropine adds nothing.',
                    'Phenylephrine relaxes the ciliary body to relieve pain, while cyclopentolate is contraindicated in active uveitis because it is a leukocyte chemoattractant; synechiae release only as the pain settles.',
                    'Phenylephrine (β-agonist) relaxes the SPHINCTER, while atropine contracts the DILATOR; together they open the pupil. Cyclopentolate adds nothing because it acts on the dilator too and wears off within hours.'
                ],
                answer: 1,
                explain: 'Steps: atropine 1% → in-office phenylephrine 2.5% → phenylephrine 10% (with BP checks) → a pledget (cotton soaked in phenylephrine ± cyclopentolate after topical anaesthetic, in the inferior fornix for ~5–15 min) → refer (subconjunctival mydriatics).'
            },
            {
                phase: '5. Phenylephrine 10%',
                type: 'mcq',
                question: 'Before phenylephrine 10%, what must you do?',
                options: [
                    'Measure IOP and perform gonioscopy first, then instil it',
                    'Measure blood pressure (and re-check after instillation)',
                    'Dilate the other eye first to compare the pupils',
                    'Check corneal sensation to exclude HSV keratitis'
                ],
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
                    'Cells should be zero by 24 h on hourly prednisolone acetate; if any remain, refer, as it means steroid resistance. Check VA only, since IOP doesn’t change in the first week of steroid use.',
                    'Pain and photophobia easing with cells no worse (cells take days to fall). Check IOP, pupil and synechiae, adherence and technique, and posterior involvement; taper after a ≥2-step SUN improvement.',
                    'Cells should have halved and the synechiae broken; stop the atropine now to avoid toxicity, start tapering the steroid by one drop a day, and check IOP at 6 weeks when steroid response appears.',
                    'Pain may be worse at first because the steroid is working; check adherence only, and leave IOP, pupils and the fundus until the 1-week review, when the steroid frequency can be halved.'
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
                options: ['HLA-B27 AAU', 'Behçet\'s disease (often shifting, little injection)', 'Infectious keratitis (with a corneal ulcer)', 'Endophthalmitis (post-surgery or injection, endogenous)', 'Masquerade (lymphoma, retinoblastoma in children)', 'Posner–Schlossman syndrome'],
                answers: [0, 1, 2, 3, 4],
                explain: 'A sterile HLA-B27 hypopyon with a clear cornea in a known AS patient is classic, but always exclude infection (recent surgery or injection, ulcer, systemic sepsis).'
            },
            {
                phase: '2. Granulomatous?',
                type: 'mcq',
                question: 'Is hypopyon a granulomatous sign?',
                options: [
                    'Yes. Hypopyon, mutton-fat KPs and iris nodules are the granulomatous triad (sarcoid, TB, syphilis); it is never seen in HLA-B27 disease, which only gives fine KPs and fibrin.',
                    'No. Hypopyon is typical of severe NON-granulomatous AAU (HLA-B27, Behçet’s). Granulomatous signs are mutton-fat KPs and Koeppe/Busacca nodules (sarcoid, TB, syphilis, VKH, herpes).',
                    'Only in children. In children hypopyon is granulomatous (JIA, sarcoid); in adults it is non-granulomatous (HLA-B27), so age decides how you classify it.',
                    'Only with high IOP. A hypopyon with IOP over 30 means granulomatous trabeculitis (herpetic, sarcoid); with low IOP it is non-granulomatous HLA-B27 disease.'
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
                    'FML 0.1% QID and cyclopentolate TDS, check IOP, avoid dilating (hypopyon raises IOP), and review in a week; refer only if the hypopyon is still there at that visit.',
                    'Prednisolone acetate 1% (q15min for 1 h, then hourly) and atropine 1% BD, check IOP, dilate, and refer to ophthalmology within 24 h; tell the GP or rheumatologist.',
                    'Refer to ophthalmology the same day without starting anything: a hypopyon means you mustn’t treat, because steroids could worsen a hidden infection and mask it from the hospital.',
                    'Ciprofloxacin hourly for presumed endophthalmitis plus atropine, avoid steroids until cultures are back, and refer to ED; hypopyon in a known AS patient is infective until proven otherwise.'
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
                    'Usually becomes chronic, lasting more than 3 months in most HLA-B27 patients despite treatment; recurrences are rare once the hypopyon has cleared and the steroid is stopped.',
                    'Usually resolves in about 2–6 weeks with treatment; recurrences are common and can alternate eyes. Poor control risks synechiae, cataract, raised IOP and CMO.',
                    'Usually resolves within 24–48 hours of starting hourly steroid; recurrences are rare and almost never involve the fellow eye once treated.',
                    'Usually leads to permanent vision loss from hypopyon scarring of the endothelium; recurrences are uncommon but always bilateral.'
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
                    'Pigment (Krukenberg spindle), guttae (Fuchs’), KPs (uveitis), PXF flakes, endothelial plaque (fungal)',
                    'Corneal arcus, Vogt’s striae, Fleischer ring, Hudson–Stähli line and Kayser–Fleischer ring',
                    'Dendrites, pseudodendrites, SEIs, Thygeson’s lesions and punctate staining from the tear film overlying it',
                    'Only KPs and pigment — guttae and PXF flakes sit on the lens, not the endothelium'
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
                    'JIA — enthesitis-related (HLA-B27) with a red symptomatic eye; oligoarticular ANA+ JIA gives chronic, white, painless uveitis in younger girls. Also sarcoid, TINU, infection.',
                    'Juvenile rheumatoid arthritis (RF-positive) — always gives a white, painless uveitis; enthesitis-related arthritis doesn’t affect the eye. Also consider asthma and migraine.',
                    'Kawasaki disease — the commonest cause of red-eye uveitis in children, with joint pain from vasculitis; JIA uveitis only occurs in boys over 16.',
                    'Growth-related knee pain (Osgood–Schlatter) — unrelated to the eye; paediatric uveitis is almost always idiopathic, so no systemic work-up is needed.'
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
                    'Manage alone as for an adult (prednisolone acetate hourly, atropine 1% TDS), review in a week, and refer only if it recurs; children respond faster and are less prone to steroid response than adults.',
                    'Co-manage urgently with paediatric ophthalmology (and rheumatology): topical steroid and cycloplegia under supervision, close IOP checks (rapid steroid responders), cataract risk, steroid-sparing therapy.',
                    'Avoid topical steroids entirely in children (cataract and glaucoma risk); use atropine 1% TDS long-term and oral NSAIDs via the GP, and refer only if vision drops below 6/12.',
                    'Refer to the GP for oral prednisolone as first line (topical steroids don’t reach a child’s anterior chamber); review in a month with IOP, since steroid response is rare under 12.'
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
                    'Stop it as soon as cells reach 0: children clear steroids fast, so tapering only prolongs exposure and steroid response risk.',
                    'Once the AC is quiet, taper slowly in steps (6×/day → QID → TDS → BD → daily, about a week each), watching for rebound cells and IOP.',
                    'Halve the frequency every day (hourly → 12× → 6× → 3× → stop over 5 days), since a fast taper limits cataract risk in young children.',
                    'Switch straight to oral prednisolone via the GP and stop the drops, since oral steroids are easier to taper in children.'
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
                    'Chronic: >3 months (or relapse within 3 months of stopping), insidious, often bilateral, white, little pain; band keratopathy, cataract, glaucoma, CMO, PAS. Acute: sudden, painful, red, under 3 months.',
                    'Chronic: >6 weeks of symptoms, always granulomatous and unilateral, very red and painful, with hypopyon; complications are rare. Acute: gradual onset, white eye, bilateral, little pain.',
                    'Chronic: any patient with a second episode, regardless of the gap; red and painful each time, with posterior synechiae only. Acute: the first episode, always unilateral and lasting under 1 week.',
                    'Chronic: lasting over 1 year with a hypopyon each flare; complications include angle closure and corneal ulcers. Acute: under 3 months, always bilateral, with no risk of cataract or glaucoma.'
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
                    'Indentation gonioscopy today, so angle recession is found before the inflammation hides it.',
                    'Van Herick only; defer gonioscopy for about 2–4 weeks (rebleed risk, discomfort, inflammation), then look for recession.',
                    'No angle assessment is needed after blunt trauma unless the IOP rises above 30 mmHg at a later visit.',
                    'Dilate fully and indent the sclera today to check the angle recess and the retinal periphery together in one visit.'
                ],
                answer: 1,
                explain: 'Avoid scleral depression too. Gonioscopy for recession once things settle, then monitor IOP lifelong if recession is found.'
            },
            {
                phase: '3. Treatment',
                type: 'mcq',
                question: 'Grade 2 cells, no hyphaema, IOP 18. Treatment?',
                options: [
                    'Prednisolone acetate 1% QID and a cycloplegic (cyclopentolate TDS or atropine BD), after checking IOP and excluding an epithelial defect or open globe; taper over 1–2 weeks; review in 2–3 days.',
                    'Prednisolone acetate 1% hourly and atropine 1% TDS for 6 weeks, without checking IOP first (traumatic iritis always lowers IOP); stop abruptly once cells are zero; review in 2–3 weeks.',
                    'Pilocarpine 2% QID to constrict the pupil and protect the angle, plus FML QID; no cycloplegic (it raises the risk of hyphaema); review in a week and taper over a month.',
                    'Chloramphenicol QID to prevent infection and oral ibuprofen; steroids are avoided after trauma because they delay wound healing; review in a week and refer if cells persist.'
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
                    'No further follow-up once the iritis settles: angle recession glaucoma only develops within the first month after injury, so a normal IOP at 4 weeks means discharge.',
                    'Gonioscopy for recession once settled; dilated exam with scleral depression when safe (dialysis, tears); at least annual lifelong IOP checks if there is recession.',
                    'An MRI orbit to exclude occult fracture, then IOP checks weekly for 6 months; gonioscopy and retinal checks aren’t needed if vision is 6/6.',
                    'Weekly IOP checks for life and annual MRI, since every blunt trauma causes progressive angle damage; dilated exams are avoided after trauma.'
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
                options: [
                    'Grade I (under 1/3); rebleed risk highest around days 2–5',
                    'Grade II (1/3–1/2); rebleed risk highest within 6 hours',
                    'Grade I (under 1/3); rebleed risk highest at 2–3 weeks',
                    'Microhyphaema only; rebleed risk highest around day 10'
                ],
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
                    'Latanoprost nocte plus pilocarpine 2% QID: PGAs bypass the blood-clogged TM, and miotics pull the iris away from the clot. Avoid timolol (it slows clot resolution). Refer within a week.',
                    'Timolol (if no contraindications) ± brimonidine; a topical CAI if no sickle cell. Avoid PGAs (pro-inflammatory, slow) and miotics (barrier breakdown, pupil block). Refer the same day.',
                    'Topical CAI as first line in everyone including sickle cell (it clears red cells from the TM) plus atropine; avoid timolol and brimonidine after trauma. Refer only if IOP stays above 35.',
                    'Oral acetazolamide prescribed by you plus latanoprost; avoid topical drops on an injured eye. Refer within 48 hours, as IOP of 35 in hyphaema usually settles without treatment.'
                ],
                answer: 1,
                explain: 'Sustained high IOP with hyphaema risks corneal blood staining and optic neuropathy. Surgical washout may be needed.'
            }
        ]
    }
);
