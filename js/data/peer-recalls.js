// Cases from peer recalls ("Questions from others" and the Orals notes with 2016–17 question lists).
window.CASES.push(
    {
        id: 'poag-staging',
        category: 'glaucoma',
        title: 'Staging POAG & the Fellow Eye',
        theme: 'POAG Staging / Progression',
        years: ['Peer recalls'],
        patient: '64-year-old man referred by his GP for “eye pressure”.',
        stem: 'IOP 25 mmHg OU. Fields: right eye has a small superior cluster of depressed points, MD −2 dB, GHT borderline. Left eye has an almost complete superior hemifield defect.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'Given the IOP and the fields, which diagnoses are you considering?',
                options: [
                    'Primary open-angle glaucoma (left eye established, right eye early or suspect)',
                    'Secondary open-angle glaucoma (pseudoexfoliation, pigment dispersion, angle recession, steroid response)',
                    'Chronic angle-closure glaucoma',
                    'Non-glaucomatous causes of altitudinal loss (old NAION, branch retinal artery occlusion)',
                    'Bitemporal hemianopia from a pituitary adenoma'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Raised IOP with arcuate/altitudinal field loss is POAG until gonioscopy and slit lamp exclude secondary and angle-closure causes. An altitudinal defect can also follow NAION or a BRAO, so check the disc for pallor versus cupping and the history for a sudden event. A pituitary lesion gives temporal loss respecting the vertical midline.'
            },
            {
                phase: '2. Staging',
                type: 'match',
                question: 'Using Hodapp–Parrish–Anderson / Mills-type MD criteria, match the eye to its stage.',
                pairs: [
                    { label: 'Right eye: MD −2 dB, small superior cluster, GHT borderline', answer: 'Early (MD better than −6 dB) — or suspect until repeatable' },
                    { label: 'Left eye: almost complete superior hemifield loss', answer: 'Advanced/severe (MD worse than −12 dB, likely with points near fixation)' }
                ],
                distractors: ['Moderate (MD −6 to −12 dB)', 'End-stage (no measurable field)'],
                explain: 'Hodapp: early MD > −6 dB; moderate −6 to −12 dB; severe < −12 dB (each also has point-count and central-5° criteria). Mills adds stages up to end-stage. Pick one system, name it and use it consistently. An almost complete hemifield will usually breach the central criteria too.',
                recall: 'Peer recall: “Use Mills\' criteria, look at the MD value.” Fine, but quote which system you use — examiners notice when stages are mixed.'
            },
            {
                phase: '3. Work-up',
                type: 'viva',
                question: 'What is your work-up, and what are you looking for in each test?',
                points: [
                    'Gonioscopy: open vs closed angle, PAS, pigment (Sampaolesi line), PXF material, angle recession',
                    'Slit lamp: PXF on the lens, Krukenberg spindle, transillumination defects, KPs or other inflammation',
                    'Stereo disc assessment: rim loss that CORRESPONDS to the defect (inferior rim loss → superior field loss); haemorrhages; pallor vs cupping',
                    'OCT RNFL/GCL: structure–function agreement, and a baseline for progression',
                    'Pachymetry (CCT): thin cornea → IOP underestimated and an independent risk factor (OHTS)',
                    'IOP phasing and a repeat field to confirm the right-eye defect',
                    'History: family history, steroids, trauma, systemic β-blockers, asthma/COPD and cardiac disease before choosing a drug'
                ],
                explain: 'The examiner is checking that you know what each test adds rather than reciting a list.'
            },
            {
                phase: '4. Progression',
                type: 'mcq',
                question: 'How will you look for progression?',
                options: [
                    'Event analysis only (any single point dropping 10 dB from baseline on one test = progression) — trend analysis needs 10 years of fields to mean anything; OCT is only for diagnosis.',
                    'Event analysis (GPA: ≥3 points worse than baseline on 2 consecutive tests = possible, 3 = likely) plus trend analysis (MD/VFI slope), alongside OCT; ~3 fields a year early on.',
                    'Trend analysis only (MD slope worse than −0.1 dB/yr = progression after 2 fields) — event analysis is for research; repeat fields once a year from the start.',
                    'Repeat the GHT each visit: once it changes from ‘borderline’ to ‘outside normal limits’ the disease has progressed; OCT and GPA add nothing once a field defect exists.'
                ],
                answer: 1,
                explain: 'You need a good baseline (two reliable fields) and enough tests to estimate a rate of progression; front-loading fields in the first two years (e.g. three a year) is the recommended approach. Structural change on OCT often comes before field change in early disease; in advanced disease the RNFL floors out and fields (or macular GCL) matter more.'
            },
            {
                phase: '5. Treatment',
                type: 'mcq',
                question: 'What is your treatment plan?',
                options: [
                    'PGA to the left eye only, since the right eye’s MD of −2 dB is within normal limits. Left: 20% lower (the OHTS target). Review in 6 months; refer within 12 months, as advanced POAG can stay in optometric care if stable.',
                    'PGA (e.g. latanoprost nocte) to both eyes if no contraindications. Left: ≥30% lower (AGIS: keep advanced eyes under ~18); right is high risk. Review in 4–6 weeks; refer within 4 months, sooner for the left.',
                    'A fixed combination (latanoprost/timolol) to both eyes from day one, since advanced disease needs maximal therapy. Target ≤21 mmHg. Review in 3 months; refer only if the target isn’t met.',
                    'Observe both eyes for 12 months to measure the rate of progression before treating (EMGT). Target to be set from that rate. Refer now so the ophthalmologist can start treatment.'
                ],
                answer: 1,
                explain: 'Asymmetric POAG often becomes bilateral, and this right eye has high IOP with an early defect — treating both is sensible. Don\'t start with a combination product (step up from monotherapy). Advanced disease threatening fixation warrants earlier ophthalmology involvement; SLT is an alternative or add-on (LiGHT).',
                recall: 'Peer recall questions: “Do you want to treat the other eye? Why?” — answer yes: high IOP, likely bilateral disease and an early defect. “Target IOP? What paper did you use?” — name the trial (EMGT ~25%, CNTGS 30% for NTG, AGIS <18 for advanced).'
            },
            {
                phase: '6. Educate & review',
                type: 'viva',
                question: 'What do you tell the patient, and what do you check at review?',
                points: [
                    'Glaucoma is usually painless and damage is permanent; treatment aims to stop or slow further loss',
                    'One drop at night in both eyes, punctal occlusion/close eyes 1–2 minutes, wipe excess from the lids; space drops 5 minutes apart',
                    'PGA side effects: red eyes (settles), longer darker lashes, iris darkening (permanent, matters if one eye only), periorbital fat atrophy',
                    'Don\'t stop or double up; bring drops to appointments; tell the GP and pharmacist',
                    'At 4–6 weeks: IOP vs target, adherence and technique, side effects, then fields/OCT at planned intervals',
                    'Driving: advanced field loss may affect licensing — discuss and check the field standard'
                ],
                explain: 'Review timing: 4–6 weeks after starting or changing a drop, then every 3–6 months depending on stage and control, with fields front-loaded in the first two years.'
            }
        ]
    },
    {
        id: 'cn3-palsy',
        category: 'neuro',
        title: 'Third Nerve Palsy: Is the Pupil Involved?',
        theme: 'Cranial Nerve Palsy',
        years: ['Peer recalls'],
        patient: '61-year-old woman with type 2 diabetes and hypertension.',
        stem: 'Sudden double vision since yesterday and a droopy left eyelid, with an ache above the left eye. The left eye sits down and out.',
        steps: [
            {
                phase: '1. Describe',
                type: 'viva',
                question: 'What findings do you expect with a complete left third nerve palsy, and what do you examine?',
                points: [
                    'Ptosis (levator palpebrae, superior division of CN III)',
                    'Eye “down and out” (unopposed lateral rectus CN VI and superior oblique CN IV)',
                    'Limited elevation, depression and adduction',
                    'Pupil: is it dilated and poorly reactive? Compare in dim and bright light',
                    'Check CN IV (intorsion on attempted depression) and CN V, VI and VII to localise (cavernous sinus/orbital apex)',
                    'Other neurology: headache severity, neck stiffness, other deficits'
                ],
                explain: 'The pupil is the single most important finding: it decides whether this is an emergency.'
            },
            {
                phase: '2. Pupil involved',
                type: 'mcq',
                question: 'The left pupil is 6 mm and sluggish (right 3 mm). What do you do?',
                options: [
                    'Likely diabetic microvascular palsy (pupil involvement is common in diabetes): GP review within a week for BP and HbA1c, re-check the pupil in a month.',
                    'Emergency: same-day transfer to ED for CT/MR angiography — a posterior communicating artery aneurysm must be excluded (rupture → subarachnoid haemorrhage).',
                    'Likely myasthenia (pupil changes are typical): refer to neurology within 2 weeks for antibody tests, and patch one eye for the diplopia meanwhile.',
                    'Likely Adie’s pupil with a coincidental palsy: confirm with dilute pilocarpine, then routine GP referral, since a dilated pupil isn’t a red flag here.'
                ],
                answer: 1,
                critical: true,
                explain: 'A painful pupil-involving third nerve palsy is an aneurysm until proven otherwise. Phone ED so they expect the patient; don\'t send a routine referral letter.'
            },
            {
                phase: '3. Why the pupil matters',
                type: 'mcq',
                question: 'Why does compression involve the pupil while a diabetic (ischaemic) palsy usually spares it?',
                options: [
                    'Pupillomotor fibres run superficially (dorsomedial) on the nerve, supplied by pial vessels: an aneurysm compresses the outside first, while microvascular ischaemia hits the core and spares them.',
                    'Pupillomotor fibres run in the core of the nerve, supplied by the vasa nervorum: an aneurysm compresses the core of the nerve first, while microvascular ischaemia affects only the outer fibres and so spares the pupil.',
                    'Pupillomotor fibres leave CN III early and travel with CN VI: an aneurysm reaches CN VI as well, while diabetic ischaemia affects only CN III itself.',
                    'Diabetes protects the iris sphincter by thickening the pupillomotor fibres, so ischaemia can’t affect them; compression affects any fibre regardless of position.'
                ],
                answer: 0,
                explain: 'This is the classic exam explanation. The “rule of the pupil” isn\'t absolute: about 1 in 5 microvascular palsies affect the pupil slightly (usually under 1 mm of anisocoria), and an early or partial compressive palsy can spare it.'
            },
            {
                phase: '4. Pupil spared',
                type: 'mcq',
                question: 'Instead, the pupils are equal and reactive and the palsy is otherwise complete. She is 61 with diabetes and hypertension. Management?',
                options: [
                    'Likely microvascular: no further action, since pupil-sparing palsies always recover fully; review at 6 months; fit prisms from day one; imaging is never needed in diabetics over 50 with a spared pupil, whatever else develops.',
                    'Likely microvascular: same/next-day GP contact (BP, HbA1c, lipids; ESR/CRP if GCA symptoms); re-check the pupil daily for a week; occlude for diplopia; expect recovery over ~3 months; image if anything is atypical.',
                    'Likely compressive despite the spared pupil: emergency craniotomy referral; occlude for diplopia; recovery is unlikely without surgery; the GP doesn’t need to be involved.',
                    'Likely inflammatory: start topical prednisolone and review in 2 weeks; re-check the pupil then; occlude for diplopia; image only if it hasn’t improved on the steroid.'
                ],
                answer: 1,
                explain: 'Many clinicians now image all third nerve palsies because MRA/CTA is widely available; saying “I\'d discuss imaging with ophthalmology” is safe. Aberrant regeneration (e.g. lid elevation on down-gaze) suggests compression, not ischaemia, and needs imaging.'
            },
            {
                phase: '5. Localise the ptosis',
                type: 'match',
                question: 'Match each cause of ptosis to its other signs.',
                pairs: [
                    { label: 'Third nerve palsy', answer: 'Large ptosis with a down-and-out eye ± dilated pupil' },
                    { label: 'Horner syndrome', answer: 'Mild ptosis (Müller\'s muscle, sympathetic), miosis worse in dim light, ± anhidrosis' },
                    { label: 'Myasthenia gravis', answer: 'Variable, fatigable ptosis; pupils normal; improves with ice test' },
                    { label: 'Herpes zoster ophthalmicus', answer: 'Lid swelling and ptosis from inflammation; occasionally CN III involvement' }
                ],
                distractors: ['Facial nerve palsy'],
                explain: 'Levator is CN III (superior division); Müller\'s muscle is sympathetic; orbicularis (eyelid closure) is CN VII — a facial palsy causes lagophthalmos, not ptosis.',
                recall: 'Old recall questions included “why does herpes cause a lid ptosis?” and “diabetic CN3 palsy with pupil involvement”. Expect quick-fire neuro-anatomy alongside the field cases.'
            }
        ]
    },
    {
        id: 'phlyctenulosis',
        category: 'conj',
        title: 'A Limbal Nodule in a Child: Phlyctenulosis',
        theme: 'Phlyctenular Keratoconjunctivitis',
        years: ['Peer recalls'],
        patient: '9-year-old girl with long-standing crusty lid margins.',
        stem: 'Right eye red, watery and light-sensitive for 4 days.',
        exhibit: 'Slit-lamp photo: a small raised pinkish-white nodule straddling the inferotemporal limbus with a leash of dilated vessels running to it; the apex stains faintly with fluorescein. Lid margins show crusting and collarettes.',
        steps: [
            {
                phase: '1. Describe & differentials',
                type: 'viva',
                question: 'Describe the lesion and give your differentials.',
                points: [
                    'Raised white/pink limbal nodule with a sector of injected vessels feeding it; may ulcerate at the apex',
                    'Associated blepharitis (staphylococcal) — the clue to the cause',
                    'Leading diagnosis: phlyctenulosis (phlyctenular keratoconjunctivitis)',
                    'Ddx: nodular episcleritis (mobile over sclera, no staining, usually adults)',
                    'Ddx: marginal (catarrhal) keratitis — infiltrate separated from the limbus by a clear zone',
                    'Ddx: inflamed pinguecula; HSV; microbial keratitis if a corneal phlycten ulcerates',
                    'Ddx in children: ocular rosacea / blepharokeratoconjunctivitis'
                ],
                explain: 'Phlyctens start at the limbus and can migrate onto the cornea, dragging vessels behind them and leaving a wedge-shaped scar.',
                recall: 'Older recall lists grouped “MK, marginal keratitis, phlyctenulosis, VLK” together — be ready to tell them apart by location, staining, clear zone and associations.'
            },
            {
                phase: '2. Cause',
                type: 'mcq',
                question: 'What is the pathophysiology?',
                options: [
                    'An immediate (type I) IgE reaction to pollen and dust mite, like SAC — in Australia usually seasonal; historically from hay fever.',
                    'A delayed (type IV) hypersensitivity to microbial antigens — in Australia usually Staph aureus from blepharitis; historically TB.',
                    'A direct bacterial infection of the limbus — in Australia usually Pseudomonas from contact lenses; historically from gonococcus.',
                    'An immune-complex (type III) reaction to herpes simplex — in Australia usually after cold sores; historically from varicella.'
                ],
                answer: 1,
                explain: 'Because it is immune-mediated, the nodule is sterile. Ask about TB contacts, cough, weight loss and travel or migration from high-prevalence countries; if positive, the GP should arrange TB screening.'
            },
            {
                phase: '3. Management',
                type: 'mcq',
                question: 'How would you manage her?',
                options: [
                    'Ciprofloxacin hourly around the clock for a week (phlyctens are infected nodules), no steroid at any stage, and lid hygiene once healed; GP for oral doxycycline, which is first line for ocular rosacea in children of any age.',
                    'Treat the blepharitis (compresses, lid hygiene ± chloramphenicol ointment to the lid margins) plus a short mild steroid once infection is excluded (e.g. FML QID, taper), IOP check in a week; GP for oral azithromycin if rosacea.',
                    'Prednisolone acetate hourly for 2 weeks without tapering (phlyctens need potent steroid), no lid treatment; IOP checks aren’t needed in children, who rarely respond to steroids.',
                    'Refer for excision of the nodule and biopsy (phlyctens can be neoplastic in children), with chloramphenicol QID and lid hygiene meanwhile; steroids are avoided until the histology is back.'
                ],
                answer: 1,
                explain: 'Phlyctens respond quickly to topical steroid. Children are more prone to steroid response, so check IOP and use the mildest effective steroid for the shortest time. Treating the lid disease prevents recurrence.'
            },
            {
                phase: '4. Twist: it moves onto the cornea',
                type: 'mcq',
                question: 'Three months later a new phlycten has crept onto the cornea with an epithelial defect and dense infiltrate. What changes?',
                options: [
                    'Nothing changes: corneal phlyctens always have a defect and infiltrate, so continue the same steroid and review in a week; antibiotics aren’t needed for sterile nodules.',
                    'Treat as possible microbial keratitis: hold the steroid, start a broad-spectrum antibiotic, review in 24 h, and refer if large, central or worsening. Corneal phlyctens can scar and thin.',
                    'Increase the steroid to hourly, since migrating phlyctens are more inflamed, and add a bandage contact lens for comfort; review in 3 days and taper once it stops moving.',
                    'Treat as herpes simplex: stop the steroid and start aciclovir ointment 5×/day, since a new epithelial defect after steroid use is a dendrite until proven otherwise; review in 1 week and taper the antiviral.'
                ],
                answer: 1,
                critical: true,
                explain: 'An infiltrate with an overlying epithelial defect is infection until proven otherwise. The general rule holds: no steroid until infection is controlled.'
            }
        ]
    },
    {
        id: 'brimonidine-allergy',
        category: 'allergy',
        title: 'Red, Itchy Eyes on Glaucoma Drops',
        theme: 'Drug-induced Blepharoconjunctivitis',
        years: ['Peer recalls'],
        patient: '70-year-old woman with POAG on latanoprost nocte OU; brimonidine 0.2% BD OU was added 9 months ago.',
        stem: 'Both eyes have become red, itchy and watery over the last few weeks, and the lower lids are dry and scaly.',
        exhibit: 'Slit-lamp photo: bilateral follicles on the inferior tarsal conjunctiva, diffuse hyperaemia, eczematous erythema of the lower lids. Cornea clear.',
        steps: [
            {
                phase: '1. Diagnosis',
                type: 'mcq',
                question: 'What is the most likely diagnosis?',
                options: [
                    'Adenoviral conjunctivitis caught at a recent clinic visit (from the tonometer prism).',
                    'Allergic (delayed type IV) follicular blepharoconjunctivitis to brimonidine.',
                    'Preservative (BAK) toxicity from the latanoprost bottle, given nocte.',
                    'Seasonal allergic (type I) conjunctivitis from spring pollen.'
                ],
                answer: 1,
                explain: 'Brimonidine allergy typically appears months after starting (often 3–12 months), affects around 1 in 10 patients on 0.2% (fewer with Alphagan P 0.15%), and gives follicles plus periocular contact dermatitis. Apraclonidine causes it even more often. PGA hyperaemia starts early and has no follicles or eczema.',
                recall: 'Older recall lists mention “blepharoconjunctivitis secondary to alpha-agonists” as an anterior-eye case paired with a glaucoma case.'
            },
            {
                phase: '2. Differentials',
                type: 'multi',
                question: 'Which other causes should you consider?',
                options: [
                    'Preservative (benzalkonium chloride) toxicity — punctate staining, dry eye, papillae',
                    'Contact dermatitis to another drop (e.g. dorzolamide) or a cosmetic',
                    'Viral conjunctivitis — but it would be acute and usually asymmetric',
                    'Chlamydial conjunctivitis — usually unilateral and in younger, sexually active adults',
                    'Giant papillary conjunctivitis from CL wear'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Long-term multi-drop users often have both preservative toxicity and allergy. Timing (when each drop started) is the most useful clue.'
            },
            {
                phase: '3. Management',
                type: 'mcq',
                question: 'What do you do?',
                options: [
                    'Continue brimonidine but add olopatadine BD and a short FML course to control the allergy; the reaction usually settles as the eye adapts to the drop, so swapping classes isn’t needed; recheck the IOP and allergy in 6 months.',
                    'Stop brimonidine (record the allergy); substitute another class if needed (topical CAI, or timolol if no contraindication; PF where possible); cold compresses, PF lubricants; recheck IOP in 4–6 weeks and inform the ophthalmologist.',
                    'Stop all glaucoma drops for a month so the conjunctiva can recover fully, then restart latanoprost alone; no substitute is needed short-term because IOP rises only slowly after stopping.',
                    'Switch brimonidine to apraclonidine 0.5% TDS, a related α2-agonist with less allergy, and add cold compresses; recheck IOP in 4–6 weeks; no need to record the allergy, as it is class-specific.'
                ],
                answer: 1,
                critical: true,
                explain: 'The reaction settles over 1–2 weeks once the drug stops. Never stop all drops in a glaucoma patient without a plan. Apraclonidine cross-reacts and has a higher allergy rate. If you use a steroid, keep it brief and watch the IOP (glaucoma patients are frequent steroid responders).'
            },
            {
                phase: '4. Brimonidine pharmacology',
                type: 'viva',
                question: 'The examiner moves to pharmacology. Tell them about brimonidine.',
                points: [
                    'Selective α2-agonist: reduces aqueous production and increases uveoscleral outflow',
                    'Brimonidine 0.2% BD–TDS (Alphagan) or 0.15% with Purite (Alphagan P); also in fixed combination with timolol or brinzolamide',
                    'Contraindications: MAO inhibitor therapy; children under 2 (CNS depression, apnoea)',
                    'Systemic side effects: dry mouth, fatigue and drowsiness, hypotension',
                    'TGA category B3; stop before delivery and avoid while breastfeeding',
                    'LoGTS: fewer NTG patients progressed on brimonidine than timolol, but many dropped out with allergy'
                ],
                explain: 'This is a typical bridge from an anterior-eye case into glaucoma pharmacology.'
            }
        ]
    },
{
        id: 'peer-paeds-chlamydia',
        category: 'conj',
        title: 'Crusty Red Eyes in a Child: Bacterial, Then Chlamydia',
        theme: 'Bacterial → Chlamydial Conjunctivitis',
        years: ['Peer recalls'],
        patient: 'Young child.',
        stem: 'Photo of a child with red eyes and crusting for 7 days.',
        steps: [
            {
                phase: '1. Diagnosis & organisms',
                type: 'mcq',
                question: 'Diagnosis, and which bacteria are most common in children?',
                options: [
                    'Bacterial conjunctivitis: non-typeable H. influenzae, Strep pneumoniae, Moraxella catarrhalis (more common in children), plus Staph aureus.',
                    'Adenoviral conjunctivitis: types 3 and 7 (pharyngoconjunctival fever), which are more common in children than adults, plus secondary Pseudomonas infection.',
                    'Bacterial conjunctivitis: Pseudomonas aeruginosa and Serratia (more common in children than adults), plus Neisseria gonorrhoeae.',
                    'Allergic conjunctivitis: crusting is typical of perennial allergy in children, with secondary Staph epidermidis colonisation.'
                ],
                answer: 0,
                explain: 'In adults Staph aureus dominates; in children H. influenzae and Strep pneumoniae (often with otitis media).'
            },
            {
                phase: '2. Treatment & MoA',
                type: 'mcq',
                question: 'What would you treat it with, how does it work, and what is its spectrum?',
                options: [
                    'Chloramphenicol 0.5% QID (more often for 48 h) for ~5 days ± ointment at night; binds 50S, inhibiting peptidyl transferase; bacteriostatic; broad (poor against Pseudomonas).',
                    'Ciprofloxacin 0.3% q15min then hourly for 7 days; inhibits DNA gyrase; bactericidal; best for children because it covers Haemophilus well and is TGA category A for all ages.',
                    'Tobramycin 0.3% QID for 5 days; binds 50S, inhibiting peptidyl transferase; bacteriostatic; narrow (Gram-positive only), so it suits H. influenzae.',
                    'Chloramphenicol 0.5% QID for 14 days; binds 30S, causing misreading; bactericidal; narrow (Gram-negative only), so it suits Pseudomonas.'
                ],
                answer: 0,
                explain: 'Avoid chloramphenicol with a personal or family history of blood dyscrasia. Review in 2–3 days (sooner if severe or very young).',
                recall: 'The peer recall said “review time? 24 hours”. A 24-hour review suits a hyperacute or severe case; 2–3 days is typical for simple bacterial conjunctivitis.'
            },
            {
                phase: '3. Worse at review',
                type: 'mcq',
                question: 'At review it is worse. What do you do?',
                options: [
                    'Double the chloramphenicol to 2-hourly and add the ointment day and night; swabs are only needed after 3 weeks of failed treatment.',
                    'Refer (GP/paediatric ophthalmology) for swabs: culture and sensitivity plus PCR (chlamydia, adenovirus, HSV); reconsider the diagnosis.',
                    'Add FML QID to settle the inflammation, since worsening at review usually means an allergic reaction to chloramphenicol.',
                    'Switch to ciprofloxacin hourly without swabbing, since non-response means Pseudomonas, which chloramphenicol misses.'
                ],
                answer: 1,
                explain: 'Non-responding conjunctivitis should always be swabbed.'
            },
            {
                phase: '4. Culture negative',
                type: 'mcq',
                question: 'Bacterial culture comes back negative. What now, and what type of organism is chlamydia?',
                options: [
                    'Think adenovirus: a negative culture rules out bacteria, so reassure and review in 2 weeks. Chlamydia is a virus, so culture wouldn’t find it anyway.',
                    'Think chlamydia: swab for PCR (NAAT). Chlamydia trachomatis is an obligate intracellular Gram-negative bacterium, so it won’t grow on routine media.',
                    'Think chlamydia: repeat the routine bacterial culture on blood agar. Chlamydia is a Gram-positive extracellular bacterium that grows slowly over 7 days.',
                    'Think fungal: send for Sabouraud culture. Chlamydia is a yeast-like organism and is only diagnosed on fungal media.'
                ],
                answer: 1,
                explain: 'Serotypes A–C cause trachoma; D–K cause inclusion (genital and adult/neonatal) conjunctivitis.'
            },
            {
                phase: '5. Safeguarding',
                type: 'viva',
                question: 'Chlamydia in a child may indicate sexual abuse. What do you do?',
                points: [
                    'Stay calm and non-accusatory; don’t interrogate the child',
                    'Document findings and what was said, factually',
                    'Same-day referral to a paediatrician / children’s hospital (treatment and child-protection assessment)',
                    'Follow your state or territory mandatory reporting obligations; contact child protection services for advice if unsure',
                    'Consider other routes too: perinatal (neonate), and trachoma in remote communities'
                ],
                explain: 'Optometrists have legal and ethical duties to act on reasonable suspicion of child abuse; requirements vary by jurisdiction.'
            },
            {
                phase: '6. Treatment',
                type: 'mcq',
                question: 'How is chlamydia treated? Mechanism, dose and contraindications?',
                options: [
                    'Topical chloramphenicol QID for 2 weeks (it reaches the intracellular organism in the conjunctiva); binds 50S; CI: blood dyscrasia. Oral treatment isn’t needed for eye-only chlamydia in children, and partners needn’t be traced.',
                    'Oral azithromycin via GP/paediatrician (adults 1 g once; children 20 mg/kg, max 1 g); macrolide binding 50S; CI: macrolide allergy; caution liver disease, QT. Avoid doxycycline under 8 and in pregnancy.',
                    'Oral doxycycline 100 mg BD for 7 days for all ages (tetracycline binding 30S); CI: pregnancy only; children under 8 tolerate it because the course is short.',
                    'Oral amoxicillin 25 mg/kg TDS for 10 days (β-lactam blocking cell wall); CI: penicillin allergy; first line because chlamydia has a thick peptidoglycan wall.'
                ],
                answer: 1,
                explain: 'Topical treatment alone doesn’t eradicate the infection.'
            },
            {
                phase: '7. Advice: SAFE',
                type: 'match',
                question: 'For trachoma (endemic chlamydial eye disease in some remote Australian communities), WHO’s SAFE strategy — match each letter.',
                pairs: [
                    { label: 'S', answer: 'Surgery for trichiasis' },
                    { label: 'A', answer: 'Antibiotics (mass azithromycin)' },
                    { label: 'F', answer: 'Facial cleanliness' },
                    { label: 'E', answer: 'Environmental improvement (water, sanitation)' }
                ],
                distractors: ['Steroids'],
                explain: 'For sexually transmitted inclusion conjunctivitis, the advice is instead: treat partners, avoid sex for 7 days after treatment, retest at 3 months, and good hand and towel hygiene.',
                recall: 'The peer recall listed “What advice do you need to give to chlamydia? SAFE.”'
            }
        ]
    },
    {
        id: 'peer-hsv-stromal-steroid',
        category: 'cornea',
        title: 'HSV Stromal Keratitis with a Steroid Response',
        theme: 'HSV Stromal Keratitis',
        years: ['Peer recalls'],
        patient: 'Adult with known HSV-1 stromal keratitis.',
        stem: 'He has been on topical steroid for stromal disease and the IOP has now risen.',
        steps: [
            {
                phase: '1. Treating stromal HSV',
                type: 'mcq',
                question: 'How would you treat the HSV stromal keratitis?',
                options: [
                    'Topical aciclovir 5×/day alone for 3 weeks: stromal disease is live virus, and steroids are contraindicated in any HSV keratitis because they cause dendrites.',
                    'Topical steroid (e.g. prednisolone acetate, frequency by severity, slow taper over ~10 weeks or more) under oral aciclovir 400 mg BD cover via GP, co-managed; monitor IOP.',
                    'Topical steroid (prednisolone acetate hourly) without antiviral cover: HEDS showed antiviral prophylaxis adds nothing for stromal disease, so taper the steroid over 1 week and stop.',
                    'Debridement of the affected stroma under topical anaesthetic plus oral aciclovir 800 mg 5×/day for 10 days via the GP, avoiding any steroid; review in a month.'
                ],
                answer: 1,
                explain: 'HEDS: steroid plus antiviral cover sped resolution of stromal keratitis (failure 26% vs 73% without steroid). Immune stromal keratitis is T-cell mediated, so the antiviral alone doesn’t treat it.'
            },
            {
                phase: '2. Oral aciclovir cautions',
                type: 'multi',
                question: 'Contraindications and cautions for oral aciclovir?',
                options: [
                    'Hypersensitivity to aciclovir or valaciclovir',
                    'Renal impairment — dose adjustment needed (nephrotoxic, crystal nephropathy); keep hydrated',
                    'Older patients (reduced renal function, neuro side effects)',
                    'Concurrent nephrotoxic drugs',
                    'G6PD deficiency (risk of haemolysis)'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Side effects: nausea, diarrhoea, headache, dizziness; rarely confusion. TGA category B3.'
            },
            {
                phase: '3. What is a steroid response?',
                type: 'mcq',
                question: 'What is classified as a steroid response?',
                options: [
                    'Any IOP of 22 mmHg or more while on a steroid, regardless of baseline; it appears within 24 hours of the first drop and resolves within a day of stopping.',
                    'An IOP rise from steroid use, typically 2–6 weeks in: Armaly low (rise under 6), moderate (6–15) or high (over 15 mmHg); a rise of ≥10 or IOP above ~21–24 is usually treated.',
                    'A rise of 2 mmHg or more after a single drop; Armaly classes are low (under 2), moderate (2–5) and high (over 5 mmHg); all require stopping the steroid.',
                    'A fall in IOP from steroid-induced ciliary shutdown, typically within days of starting; Armaly’s classes describe how far IOP falls, and a high responder drops by over 15 mmHg.'
                ],
                answer: 1,
                explain: 'Rule out other causes of raised IOP in an inflamed eye: herpetic trabeculitis (inflammatory), PAS, synechial closure.'
            },
            {
                phase: '4. Would you treat it?',
                type: 'mcq',
                question: 'Would you treat the raised IOP, and how?',
                options: [
                    'Stop the steroid abruptly so the IOP falls within days, and add latanoprost nocte as the most effective drop; the link between PGAs and HSV recurrence is a myth, and co-management isn’t needed for a steroid response.',
                    'Yes if high or damaging: taper or switch to FML/loteprednol if the keratitis allows, and add an aqueous suppressant (timolol, brimonidine or a CAI); avoid PGAs (HSV recurrence, inflammation); co-manage.',
                    'Leave the IOP alone: steroid-induced rises never damage the nerve because they reverse when the steroid stops, so continue the same dose and recheck IOP in 3 months.',
                    'Add pilocarpine 2% QID to increase outflow through the steroid-damaged meshwork, keep the steroid unchanged, and avoid timolol, which reactivates HSV; refer if the IOP stays above 30 mmHg.'
                ],
                answer: 1,
                critical: true,
                explain: 'Stopping steroid abruptly risks a stromal rebound. Keep the antiviral cover.'
            },
            {
                phase: '5. Contraindications',
                type: 'match',
                question: 'Match each IOP drop to its key contraindication.',
                pairs: [
                    { label: 'Timolol', answer: 'Asthma/COPD, bradycardia, heart block, uncontrolled heart failure' },
                    { label: 'Brimonidine', answer: 'MAOI use; children under 2' },
                    { label: 'Dorzolamide / brinzolamide', answer: 'Sulfonamide allergy (caution), severe renal impairment, endothelial compromise' },
                    { label: 'Latanoprost', answer: 'Active or past HSV keratitis, uveitis, CMO (relative)' }
                ],
                distractors: ['Contact lens wear'],
                explain: 'The CAI endothelial caution matters here: HSV endotheliitis damages the endothelium.'
            }
        ]
    },
    {
        id: 'peer-mk',
        category: 'cornea',
        title: 'Blurry Photo of an Ulcer: Full MK Work-through',
        theme: 'Microbial Keratitis',
        years: ['Peer recalls'],
        patient: 'Adult with a painful red eye.',
        stem: 'Blurry photo of an ulcer with an underlying infiltrate.',
        steps: [
            {
                phase: '1. Describe, signs & symptoms',
                type: 'viva',
                question: 'Describe it. What signs and symptoms would you expect?',
                points: [
                    'Size, shape, location (distance from the visual axis), depth, edges, epithelial defect vs infiltrate',
                    'Surrounding stromal oedema, AC reaction / hypopyon, discharge, lid oedema, ciliary injection',
                    'Symptoms: pain, photophobia, tearing, discharge, reduced vision; rapid onset',
                    'Say what the blurry photo stops you being sure of and what you’d confirm at the slit lamp'
                ],
                explain: 'A structured description earns marks even when the image is poor.'
            },
            {
                phase: '2. Infectious vs sterile',
                type: 'match',
                question: 'Match each feature to infectious (MK) or sterile/marginal.',
                pairs: [
                    { label: 'Epithelial defect as large as or larger than the infiltrate, irregular, central/paracentral, deep, marked AC reaction', answer: 'Infectious (bacterial) keratitis' },
                    { label: 'Small (<1–2 mm), round, peripheral, subepithelial, little or no staining, mild AC reaction', answer: 'Sterile infiltrate (e.g. CLPU)' },
                    { label: 'Peripheral, clear zone to the limbus, at the lid–cornea contact points, with blepharitis', answer: 'Marginal keratitis' }
                ],
                distractors: ['Adenoviral SEI'],
                explain: 'When in doubt, treat as infectious.'
            },
            {
                phase: '3. Treatment',
                type: 'mcq',
                question: 'Treatment? (The recall reminds you: “remember to add cyclo”.)',
                options: [
                    'Ciprofloxacin 0.3% loading (q15min for 6 h, q30min, hourly overnight) plus a cycloplegic (cyclopentolate or atropine) for pain and AC reaction; stop CL wear; review in 24 h.',
                    'Chloramphenicol 0.5% QID for a week plus lubricants; a cycloplegic isn’t needed for MK, and contact lenses can continue once the eye is comfortable; review in a week.',
                    'A steroid–antibiotic combination drop (dexamethasone/tobramycin) hourly to treat infection and inflammation together, plus a cycloplegic; stop CL wear; review in 3 days.',
                    'Ciprofloxacin 0.3% QID plus pilocarpine (‘cyclo’ refers to the ciliary muscle being contracted) to relieve spasm; stop CL wear; review in a week.'
                ],
                answer: 0,
                explain: 'Oral analgesia (paracetamol/ibuprofen) helps too.'
            },
            {
                phase: '4. Worse — refer',
                type: 'mcq',
                question: 'What if it gets worse, and when (and why) do you refer?',
                options: [
                    'Increase ciprofloxacin to every 5 minutes around the clock if worse at 24–48 h, and refer only at 1 week; the 1-2-3 rule applies only to fungal ulcers, and age doesn’t affect outcomes, so older patients are managed exactly the same way.',
                    'Same-day referral for culture and fortified therapy if worse at 24–48 h, or large (≥2 mm), central (within 3 mm), AC ≥1+ or hypopyon, thinning, atypical, monocular or older; large deep ulcers in the elderly may need admission.',
                    'Add a steroid if worse at 24–48 h, since worsening is usually inflammatory; refer only if over 5 mm or perforated; elderly patients are managed at home to avoid hospital infections.',
                    'Fit a bandage contact lens if worse at 24–48 h to protect the cornea, and refer if there is no improvement after 2 weeks; admission is reserved for children who can’t use drops.'
                ],
                answer: 1,
                critical: true,
                explain: 'This is the 1-2-3 rule plus clinical judgement.'
            },
            {
                phase: '5. SCUT',
                type: 'mcq',
                question: 'What did SCUT find?',
                options: [
                    'Adjunctive prednisolone acetate 1% started on day 1 of ciprofloxacin halved scarring and improved 3-month BCVA in all ulcers, including Nocardia, so steroids are now started with the first antibiotic dose.',
                    'Adjunctive prednisolone phosphate 1% (after 48 h of moxifloxacin) made no overall difference in 3-month BCVA and didn’t increase perforation; possible benefit in severe central ulcers; worse with Nocardia.',
                    'Adjunctive dexamethasone 0.1% from day 1 of ofloxacin doubled the perforation rate and slowed healing, so steroids are now contraindicated for bacterial keratitis at any stage of treatment.',
                    'Oral prednisolone (not topical) after 48 h of moxifloxacin improved 3-month BCVA in Nocardia ulcers only; topical steroids were not tested, so the oral route is now used in severe central ulcers.'
                ],
                answer: 1,
                explain: 'Quote it accurately: “no overall benefit, possible subgroup benefit”.'
            },
            {
                phase: '6. Hospital treatment & culture',
                type: 'viva',
                question: 'What treatment would the hospital give, and how do you culture a corneal ulcer?',
                points: [
                    'Fortified cefazolin 5% + tobramycin 1.3% (or gentamicin) hourly, alternating, after a loading dose; vancomycin for MRSA',
                    'Culture: preservative-free anaesthetic; scrape the edge and base with a sterile blade/needle; plate directly',
                    'Blood agar, chocolate agar, Sabouraud (fungi), non-nutrient agar with E. coli overlay (Acanthamoeba); slides for Gram and other stains',
                    'Ideally before antibiotics (or after a 12–24 h pause if already on them); also culture lenses and case',
                    'Adjust therapy to sensitivities'
                ],
                explain: 'Optometrists usually refer for scraping; knowing the method is still examinable.'
            },
            {
                phase: '7. Gram positive vs negative',
                type: 'mcq',
                question: 'What is the difference between Gram-positive and Gram-negative bacteria?',
                options: [
                    'Gram-positives: thick peptidoglycan wall that holds crystal violet (purple). Gram-negatives: thin peptidoglycan plus an outer LPS membrane (pink); it blocks some antibiotics and LPS is an endotoxin.',
                    'Gram-positives: thin peptidoglycan plus an outer LPS membrane that holds crystal violet (purple). Gram-negatives: thick peptidoglycan wall with no outer membrane (pink), so they resist β-lactams.',
                    'Gram-positives: no cell wall, so they take up the stain inside the cell (purple). Gram-negatives: a thick capsule that repels the stain (pink); the capsule is the endotoxin.',
                    'Gram-positives are all aerobic cocci (purple) and Gram-negatives are all anaerobic rods (pink); the stain reflects oxygen use rather than the structure of the wall.'
                ],
                answer: 0,
                explain: 'Pseudomonas is Gram-negative; Staph and Strep are Gram-positive.'
            }
        ]
    },
    {
        id: 'peer-mk-large-deep',
        category: 'cornea',
        title: 'Large Inferior Infiltrate: Hospitalise?',
        theme: 'Severe Microbial Keratitis',
        years: ['Peer recalls'],
        patient: 'Older adult.',
        stem: 'Photo: large (~2 mm) inferior infiltrate in the mid-deep stroma; the epithelium appears intact; ciliary flush.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'Differentials, including non-inflammatory causes with a similar appearance?',
                options: [
                    'Bacterial keratitis (epithelium may be intact early or over an abscess)',
                    'Fungal or Acanthamoeba keratitis',
                    'HSV necrotising stromal keratitis',
                    'Sterile/immune infiltrate',
                    'Non-inflammatory: scar, corneal degeneration or deposits (e.g. lipid, calcium), dystrophy',
                    'Episcleritis'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Fluorescein, AC cells/flare and history separate active inflammation from an old scar or deposit.'
            },
            {
                phase: '2. Management',
                type: 'mcq',
                question: 'Assume it is bacterial keratitis. Management, and how do you get fortified antibiotics?',
                options: [
                    'Ciprofloxacin QID and review in a week: large deep ulcers heal well on monotherapy, and fortified drops are reserved for ulcers that perforate.',
                    'Same-day referral, likely admission. Fortified cefazolin 5% + tobramycin 1.3% are compounded by a hospital pharmacy, not a community one; start ciprofloxacin while arranging transfer.',
                    'Prescribe fortified cefazolin 5% and tobramycin 1.3% yourself and manage at home with daily review; a community pharmacy can compound them within 24 hours if you mark the script urgent.',
                    'Refer to the GP for oral ciprofloxacin and oral cephalexin: systemic antibiotics reach deep stroma better than topical drops in large ulcers.'
                ],
                answer: 1,
                critical: true,
                explain: 'Don’t delay referral to “see how it goes”.'
            },
            {
                phase: '3. Mechanisms',
                type: 'match',
                question: 'Match each drug class to its mechanism and spectrum.',
                pairs: [
                    { label: 'Cephalosporin (cefazolin)', answer: 'β-lactam: blocks transpeptidases (PBPs) that cross-link peptidoglycan → cell-wall failure; Gram-positive' },
                    { label: 'Aminoglycoside (tobramycin, gentamicin)', answer: 'Binds 30S → misreading of mRNA; bactericidal; Gram-negative incl. Pseudomonas' },
                    { label: 'Vancomycin', answer: 'Glycopeptide: binds D-Ala-D-Ala, blocks peptidoglycan synthesis; Gram-positive incl. MRSA' },
                    { label: 'Fluoroquinolone (ciprofloxacin)', answer: 'Inhibits DNA gyrase / topoisomerase IV; broad, good Gram-negative' }
                ],
                distractors: ['Inhibits viral DNA polymerase'],
                explain: 'The recall said “need to elaborate and mention linking of the peptidoglycan layer” — say it explicitly.'
            },
            {
                phase: '4. Contraindications & review',
                type: 'viva',
                question: 'Contraindications, when you would review, and what you look for?',
                points: [
                    'Cephalosporins: β-lactam/cephalosporin allergy (cross-reactivity with penicillin is low but ask about anaphylaxis)',
                    'Aminoglycosides: epithelial toxicity with prolonged use; hypersensitivity',
                    'Fluoroquinolones: hypersensitivity; white corneal precipitates with ciprofloxacin',
                    'Review daily initially: pain, infiltrate size/density, epithelial defect size, AC reaction, thinning; IOP',
                    'Improvement: less pain, sharper infiltrate borders, shrinking epithelial defect, less AC reaction'
                ],
                explain: 'Prognosis depends on organism (Pseudomonas worse), size, depth, centrality, delay to treatment and age.'
            },
            {
                phase: '5. Steroid once healed',
                type: 'mcq',
                question: 'Once re-epithelialised, would you use a steroid? Which and how much?',
                options: [
                    'Yes, always: dexamethasone 0.1% hourly for a week then stop, without antibiotic cover since the ulcer has healed; it is safe whatever the organism once the epithelium has closed, including fungi and Acanthamoeba.',
                    'Possibly, to limit scarring if central: a mild-to-moderate steroid (e.g. FML QID or low-frequency prednisolone) with antibiotic cover and a taper, under ophthalmology; not if fungal, Acanthamoeba or Nocardia.',
                    'Never: once an ulcer has re-epithelialised, steroids can only cause harm, so scarring is accepted and treated later with a corneal graft if it affects vision.',
                    'Yes, but only oral prednisolone via the GP, as topical steroids reopen the epithelium; continue for 3 months and stop the topical antibiotic once it is started.'
                ],
                answer: 1,
                explain: 'Monitor IOP and watch for recrudescence when tapering.'
            }
        ]
    },
    {
        id: 'peer-glaucoma-discs',
        category: 'glaucoma',
        title: 'Describe These Discs: Glaucoma Work-up',
        theme: 'Glaucoma Assessment',
        years: ['Peer recalls'],
        patient: 'Adult referred for cupped discs.',
        stem: 'You are handed disc photos.',
        steps: [
            {
                phase: '1. Describe',
                type: 'viva',
                question: 'Describe the disc photos.',
                points: [
                    'Disc size (only if the macula is in shot or measured)',
                    'C/D ratio (vertical) and symmetry',
                    'Rim health: ISNT, notching, pallor',
                    'RNFL: wedge defects, compare superior/inferior reflectivity',
                    'Disc haemorrhages',
                    'Peripapillary atrophy (beta zone), vessels: baring, bayonetting, arteriolar attenuation'
                ],
                explain: 'Use the same order every time.'
            },
            {
                phase: '2. Work-up',
                type: 'multi',
                question: 'Work-up for glaucoma?',
                options: [
                    'IOP (Goldmann, ± phasing)',
                    'Gonioscopy',
                    'CCT',
                    'Visual field (24-2 ± 10-2)',
                    'Stereo disc assessment and OCT',
                    'Schirmer test before starting drops'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Plus history: family history, steroids, trauma, systemic disease and medications.'
            },
            {
                phase: '3. Grading',
                type: 'mcq',
                question: 'How would you grade the glaucoma, and with which scale?',
                options: [
                    'Stage by IOP: early under 25 mmHg, moderate 25–30, severe over 30 (Hodapp–Parrish–Anderson); the field and disc are used only to confirm the diagnosis, not to stage it, because they vary between visits.',
                    'Name a field-based system, e.g. Hodapp–Parrish–Anderson (early MD > −6 dB, moderate −6 to −12, severe < −12, plus point and central rules) or Mills; add structural staging (e.g. DDLS).',
                    'Stage by vertical C/D ratio: early under 0.6, moderate 0.6–0.8, severe over 0.8 (Mills); field indices are too variable to be used for staging.',
                    'Stage by PSD: early under 2 dB, moderate 2–6 dB, severe over 6 dB (the DDLS system); MD isn’t used for staging because cataract affects it more than glaucoma does.'
                ],
                answer: 1,
                explain: 'Stage drives target IOP and urgency of referral.'
            },
            {
                phase: '4. Drug CIs & pregnancy',
                type: 'match',
                question: 'Match each class to its pregnancy (TGA) category and key contraindication.',
                pairs: [
                    { label: 'Latanoprost (PGA)', answer: 'B3; uveitis, HSV keratitis, CMO; avoid in pregnancy' },
                    { label: 'Timolol (β-blocker)', answer: 'C; asthma/COPD, bradycardia, heart block' },
                    { label: 'Brimonidine (α2-agonist)', answer: 'B3; MAOIs, children under 2' },
                    { label: 'Dorzolamide/brinzolamide (CAI)', answer: 'B3; sulfonamide allergy, severe renal impairment' }
                ],
                distractors: ['A; none'],
                explain: 'Check the current TGA database before quoting a category in the exam — and say that you would.'
            },
            {
                phase: '5. Referral',
                type: 'mcq',
                question: 'You start treatment. What else must you do?',
                options: [
                    'Refer to an ophthalmologist within 2 years of starting treatment (OBA), or sooner only if the IOP target isn’t reached on two drops.',
                    'Refer to an ophthalmologist within 4 months of starting treatment (OBA), using the RANZCO pathway; earlier for advanced or secondary glaucoma.',
                    'Nothing further: once treatment starts, glaucoma can be managed by the optometrist alone indefinitely under the OBA guideline.',
                    'Refer only if IOP exceeds 40 mmHg (OBA); otherwise notify the GP within 4 months, who becomes the co-managing practitioner instead of an ophthalmologist.'
                ],
                answer: 1,
                explain: 'The recall: “remember to refer for co-management”.'
            }
        ]
    },
    {
        id: 'peer-acg',
        category: 'glaucoma',
        title: 'Angle Closure: No Gonio View, No Ophthalmologist',
        theme: 'Acute Angle Closure',
        years: ['Peer recalls'],
        patient: 'Older patient with a red, painful eye.',
        stem: 'Photo: hyperaemia, mid-dilated pupil, corneal oedema.',
        steps: [
            {
                phase: '1. Describe & symptoms',
                type: 'viva',
                question: 'Describe what you see, the symptoms you expect and your differentials.',
                points: [
                    'Conjunctival and ciliary injection, corneal (microcystic) oedema, mid-dilated fixed or sluggish pupil, shallow AC',
                    'Symptoms: severe pain, headache, nausea/vomiting, blurred vision, haloes',
                    'Ddx: anterior uveitis with raised IOP, PSS, neovascular glaucoma, phacomorphic closure, endophthalmitis'
                ],
                explain: 'Look at the fellow eye.'
            },
            {
                phase: '2. Uveitis or closure?',
                type: 'mcq',
                question: 'Corneal oedema stops you seeing the angle. How do you tell this from uveitis?',
                options: [
                    'You can’t tell them apart without gonioscopy, so treat as uveitis first with prednisolone and atropine, then reassess the angle once the cornea clears in a day or two.',
                    'AS-OCT (or UBM) of the angle; van Herick and gonioscopy of the fellow eye; pupil (mid-dilated in AAC, small in uveitis); IOP (usually low early in AAU); AC depth.',
                    'Dilate both eyes: in AAC the affected pupil won’t dilate, whereas a uveitic pupil dilates fully, so the difference confirms the diagnosis.',
                    'Corneal sensation and BP: reduced sensation and hypertension point to AAC, while normal sensation and BP point to uveitis.'
                ],
                answer: 1,
                explain: 'Glycerin can clear the cornea temporarily for gonioscopy in hospital.'
            },
            {
                phase: '3. Management & CIs',
                type: 'match',
                question: 'Match each first-aid drug to a key contraindication.',
                pairs: [
                    { label: 'Timolol 0.5%', answer: 'Asthma/COPD, bradycardia, heart block' },
                    { label: 'Brimonidine 0.2%', answer: 'MAOI therapy' },
                    { label: 'Oral acetazolamide 500 mg', answer: 'Sulfonamide allergy, renal/hepatic failure, hypokalaemia, severe COPD' },
                    { label: 'Pilocarpine 2%', answer: 'Phacomorphic or aqueous misdirection mechanism; IOP still very high' },
                    { label: 'Prednisolone acetate 1%', answer: 'Active epithelial HSV / microbial keratitis' }
                ],
                distractors: ['Contact lens wear'],
                explain: 'Space drops a few minutes apart; arrange acetazolamide through a doctor.'
            },
            {
                phase: '4. Why not acetazolamide?',
                type: 'mcq',
                question: 'Why is a systemic CAI a problem in diabetes and lung disease?',
                options: [
                    'It raises blood glucose directly by blocking insulin release, and causes bronchospasm through β2 blockade, like timolol, in COPD and asthma.',
                    'It causes metabolic acidosis and hypokalaemia: risky in poorly controlled diabetes (ketoacidosis, glucose control) and COPD (can’t blow off extra CO₂, so acidosis worsens).',
                    'It causes metabolic alkalosis and hyperkalaemia: risky in diabetes (alkalosis masks hypoglycaemia and raises insulin needs) and in COPD (alkalosis suppresses the drive to breathe).',
                    'It is fine in both: acetazolamide has no metabolic effects at a single 500 mg dose; the warning applies only to long-term methazolamide.'
                ],
                answer: 1,
                explain: 'Also: renal stones, paraesthesia, diuresis, and rare blood dyscrasias (sulfonamide).'
            },
            {
                phase: '5. No ophthalmologist',
                type: 'mcq',
                question: 'You can’t reach an ophthalmologist to discuss pilocarpine. Do you use it?',
                options: [
                    'Yes, every 5 minutes straight away: without specialist input, pilocarpine is the only drug that reverses angle closure, and it works best at the highest IOP before ischaemia sets in.',
                    'Not first. Start aqueous suppressants, arrange acetazolamide via a GP or ED, send to ED, and consider pilocarpine only once IOP is below ~40 with phakic pupil block — or at once if your dilation caused it.',
                    'Never in angle closure without a specialist’s written approval, even if IOP falls and the patient can’t reach hospital for many hours; keep repeating timolol every 15 minutes instead until someone can be contacted.',
                    'Use atropine instead of pilocarpine: relaxing the ciliary body pulls the lens back and opens the angle, and it is safer because it doesn’t cause brow ache or myopic shift.'
                ],
                answer: 1,
                explain: 'Call order: ophthalmologist → ED (hospital registrar) → GP for acetazolamide.'
            },
            {
                phase: '6. Two days until LPI',
                type: 'mcq',
                question: 'The attack has broken but the LPI is 2 days away. What therapy in the meantime?',
                options: [
                    'Stop all drops once the attack breaks, since the angle is open again and the drops only add side effects; avoid pilocarpine in the fellow eye (it can trigger closure there) and return only if vision drops.',
                    'Pilocarpine 1–2% QID in the affected eye, pilocarpine in the fellow eye until its LPI, topical steroid QID, aqueous suppressants as needed; avoid dilating and anticholinergic drugs; return if symptoms recur.',
                    'Atropine 1% BD to rest the eye and prevent posterior synechiae after the attack, plus timolol BD in the affected eye; avoid steroids, which raise IOP; no fellow-eye treatment; review after the LPI.',
                    'Latanoprost nocte only in both eyes, since PGAs are the strongest drops and work in closed angles; pilocarpine is avoided after an attack because it causes synechiae; return if symptoms recur.'
                ],
                answer: 1,
                explain: 'The aim is to keep the angle open until the iridotomy bypasses the pupil block.'
            },
            {
                phase: '7. Getting to hospital',
                type: 'mcq',
                question: 'The patient says they will drive themselves to hospital. What do you say?',
                options: [
                    'Fine, as long as they drive straight to ED: vision in the fellow eye is normal, and the drops don’t affect driving once 15 minutes have passed since the last one.',
                    'No: vision is reduced, they may vomit, and pilocarpine dims and blurs vision. Arrange a driver, taxi or ambulance, and send a letter listing the drugs and times.',
                    'Fine if they close the affected eye: monocular driving is legal in an emergency, and pilocarpine only affects the treated eye.',
                    'Tell them to wait until tomorrow morning and drive in daylight, since the drops will have worn off and the attack will have settled by then.'
                ],
                answer: 1,
                explain: 'Document times of drops, IOPs and who you spoke to.'
            },
            {
                phase: '8. After LPI',
                type: 'viva',
                question: 'What happens after the LPI?',
                points: [
                    'Check the iridotomy is patent; IOP check (post-laser spike) within an hour and at follow-up',
                    'Topical steroid for a few days for inflammation',
                    'Repeat gonioscopy: if still closed with a patent LPI, think plateau iris (iridoplasty) or lens (extraction, EAGLE)',
                    'Fellow eye prophylactic LPI',
                    'Long-term: monitor as angle-closure suspect/glaucoma (disc, OCT, fields)'
                ],
                explain: 'LPI works by giving aqueous a bypass from the posterior to the anterior chamber.'
            }
        ]
    },
    {
        id: 'peer-pxf',
        category: 'glaucoma',
        title: 'PXF on the Lens: When to Treat',
        theme: 'Pseudoexfoliation',
        years: ['Peer recalls'],
        patient: 'Older patient.',
        stem: 'Photo: pseudoexfoliative material on the anterior lens capsule.',
        steps: [
            {
                phase: '1. PXF vs PDS',
                type: 'match',
                question: 'Match each feature to PXF or PDS.',
                pairs: [
                    { label: 'Older, often unilateral/asymmetric, white flaky material, peripupillary TIDs, patchy TM pigment', answer: 'Pseudoexfoliation' },
                    { label: 'Young myopic men, bilateral, Krukenberg spindle, mid-peripheral slit-like TIDs, dense homogeneous TM pigment, concave iris', answer: 'Pigment dispersion' }
                ],
                distractors: ['Fuchs heterochromic iridocyclitis'],
                explain: 'Both can give Sampaolesi’s line.'
            },
            {
                phase: '2. Work-up',
                type: 'mcq',
                question: 'Key work-up step?',
                options: [
                    'Corneal topography and pachymetry (PXF thins the cornea), plus a single IOP reading; gonioscopy isn’t needed because PXF angles are always wide open.',
                    'Gonioscopy (patchy pigment, PXF material, Sampaolesi’s line, narrowing from lax zonules), plus IOP phasing, CCT, disc, OCT and fields.',
                    'Specular microscopy for endothelial PXF flakes, plus blood glucose, since PXF is a diabetic complication; fields only if VA has dropped.',
                    'Schirmer test and tear break-up, since PXF material blocks the meibomian glands; IOP and gonioscopy only once symptoms of glaucoma appear.'
                ],
                answer: 1,
                explain: 'PXF eyes can have narrower angles because the lens moves forward on weak zonules.'
            },
            {
                phase: '3. When to treat',
                type: 'mcq',
                question: 'When do you start treatment?',
                options: [
                    'Only once VA drops below 6/12, since PXF progression is slow (EMGT: slowest, ~−0.4 dB/yr untreated) and drops cause more harm than benefit before that.',
                    'Treat PXF glaucoma, and consider treating PXF with raised IOP (e.g. over 21–24) or large fluctuations, given its fast progression (EMGT: fastest, ~−3.1 dB/yr untreated) and conversion risk.',
                    'Only after cataract surgery, since removing the lens removes the main source of PXF material (EMGT: progression stops after surgery), so IOP-lowering drops are rarely needed in PXF.',
                    'Treat every PXF eye at diagnosis whatever the IOP, disc and field, since PXF always becomes glaucoma within a year (EMGT: 100% conversion, ~−3.1 dB/yr untreated).'
                ],
                answer: 1,
                explain: 'A large IOP fluctuation on phasing (e.g. 10 mmHg) is itself a risk factor — a reasonable trigger to treat in PXF.',
                recall: 'The peer recall noted “83% progress to glaucoma, EMGT”. Check that figure before quoting it. The safer EMGT points: PXF roughly doubled the risk of progression and PXF eyes lost field fastest (about −3.1 dB/yr untreated).'
            },
            {
                phase: '4. Review',
                type: 'mcq',
                question: 'Review schedule?',
                options: [
                    'PXF glaucoma: every 12 months with yearly fields, since progression is slow. PXF without glaucoma: every 2–3 years, IOP only.',
                    'PXF glaucoma: about every 3 months initially, with fields 2–3 times a year early on. PXF without glaucoma: every 6–12 months with IOP and disc review.',
                    'PXF glaucoma: weekly IOP checks for the first year, with fields monthly. PXF without glaucoma: every 3 months, with a full field at each visit.',
                    'PXF glaucoma and PXF without glaucoma: only when symptomatic, since both progress so slowly that routine review isn’t useful.'
                ],
                answer: 1,
                explain: 'Close review catches the rapid progression typical of PXG.'
            },
            {
                phase: '5. LPI question',
                type: 'mcq',
                question: 'The examiner asks: “How would you do an LPI, and why?”',
                options: [
                    'An optometrist can perform it: atropine first to dilate the pupil, then a YAG hole in the central iris near the pupil margin. It lowers IOP by draining aqueous through the iris into the uveoscleral pathway, and it cures plateau iris.',
                    'An ophthalmologist’s procedure: pilocarpine first, then a YAG (± argon) hole in the peripheral iris, ideally in a crypt under the upper lid. Aqueous bypasses the pupil, relieving pupil block so the angle opens; it helps plateau iris little.',
                    'An ophthalmologist’s procedure: phenylephrine first, then SLT to the trabecular meshwork rather than the iris. It increases trabecular outflow and is the treatment of choice for PXF glaucoma.',
                    'An ophthalmologist’s procedure: a laser hole through the peripheral cornea into the anterior chamber, bypassing the angle. It relieves pupil block and removes PXF material from the TM.'
                ],
                answer: 1,
                explain: 'In PXF, LPI is only relevant if there is a coexisting narrow angle.',
                recall: 'The peer recall said LPI “allows the plateau iris to bow backward” — plateau iris often persists after LPI; that is why iridoplasty exists.'
            },
            {
                phase: '6. Drug CIs & pregnancy',
                type: 'match',
                question: 'Match each drug to its contraindication and TGA pregnancy category.',
                pairs: [
                    { label: 'PGA (latanoprost)', answer: 'Uveitis, HSV keratitis, CMO (relative); B3' },
                    { label: 'β-blocker (timolol)', answer: 'Asthma, COPD, bradycardia, heart block; C' }
                ],
                distractors: ['MAOI; B3'],
                explain: 'Brimonidine is B3 and contraindicated with MAOIs and in children under 2.'
            }
        ]
    },
    {
        id: 'peer-lily-glaucoma',
        category: 'glaucoma',
        title: 'Moderate Glaucoma in One Eye, a Cluster in the Other',
        theme: 'POAG / Treat on One Field?',
        years: ['Peer recalls'],
        patient: 'Older adult; PXF is present.',
        stem: 'Right and left optic nerve photos look glaucomatous. Fields: right moderate glaucomatous defect (Mills), left just a superior cluster.',
        steps: [
            {
                phase: '1. Describe',
                type: 'viva',
                question: 'Describe the discs (5 Rs) and the fields, including reliability.',
                points: [
                    'Scleral Ring (disc size), Rim (ISNT, notching), Retinal nerve fibre layer, Region of PPA, Retinal/disc haemorrhages',
                    'Fields: reliability first (fixation losses, false positives; state the cut-offs you use, e.g. FL <20%, FP <15%)',
                    'Describe location (arcuate, nasal step), depth, MD/PSD/GHT, central involvement',
                    'Structure–function agreement between eyes'
                ],
                explain: 'Quote the reliability criteria from one source and stick to it.'
            },
            {
                phase: '2. Right eye treatment',
                type: 'mcq',
                question: 'Right moderate glaucoma: what do you treat with and why? What precautions?',
                options: [
                    'Timolol 0.5% BD: cheapest and as effective as a PGA in PXF. Precautions: none systemic in older adults; one-eye use is preferred because β-blockers cross to the other eye anyway.',
                    'Latanoprost nocte: most effective, once daily, few systemic effects. Precautions: active/past uveitis, HSV keratitis, CMO risk; one-eye use gives asymmetric lashes, iris darkening and periorbital changes.',
                    'Pilocarpine 2% QID: increases trabecular outflow, ideal in PXF because it clears PXF material from the angle. Precautions: myopia only; cosmetic effects are symmetric.',
                    'Latanoprost nocte: most effective, but contraindicated in PXF because it disperses PXF material into the angle. Precautions: asthma and bradycardia; cosmetic effects occur only with bilateral use, so one eye is fine.'
                ],
                answer: 1,
                explain: 'Explain cosmetic asymmetry before starting one eye only.'
            },
            {
                phase: '3. Treat on one field?',
                type: 'mcq',
                question: 'Would you treat on just one field?',
                options: [
                    'No: glaucoma can never be diagnosed or treated on one field, even with matching disc damage; wait for three reliable fields over 6 months before starting.',
                    'Yes, here: clear structure–function agreement, a moderate defect and PXF (aggressive). Still repeat the field soon to confirm and set a baseline.',
                    'Only if IOP is above 30 mmHg: below that, a single field is never enough, whatever the disc or the presence of PXF.',
                    'Only after an MRI: a unilateral moderate defect must be presumed compressive until imaging is normal, even with matching cupping.'
                ],
                answer: 1,
                explain: 'Matching structural damage makes a single reliable field much more convincing.'
            },
            {
                phase: '4. Left eye',
                type: 'mcq',
                question: 'The left eye has just a superior cluster. What do you do, and when would you treat it as it is?',
                options: [
                    'Treat immediately in all cases: a superior cluster in the fellow eye of a glaucoma patient is always early glaucoma, so baseline fields and OCT add nothing before starting the PGA in that eye today.',
                    'Two baseline fields and OCT, then review (3–6 months) for repeatable change; treat now if OHT with high OHTS risk (age, IOP, thin CCT, large VCDR, PSD) or if the cluster is repeatable and matches the disc.',
                    'Discharge the left eye to routine care: a superior cluster is usually a lid artefact, and OHTS risk factors (age, IOP, CCT, VCDR) only apply to the eye that already has glaucoma.',
                    'Wait until VA drops before treating, since clusters rarely progress in the fellow eye; repeat the fields in 2 years and use OCT only if the cluster has grown by then or the disc has changed.'
                ],
                answer: 1,
                explain: 'No change on fields? Also check OCT for structural progression.'
            }
        ]
    },
    {
        id: 'peer-herpes-types',
        category: 'cornea',
        title: 'Herpes Keratitis: List the Types',
        theme: 'HSV Keratitis',
        years: ['Peer recalls'],
        patient: 'Adult with herpes keratitis.',
        stem: '“Describe what you see.” — “Which type?” — “List the types.”',
        steps: [
            {
                phase: '1. Types',
                type: 'match',
                question: 'Match each type of HSV keratitis to its appearance.',
                pairs: [
                    { label: 'Epithelial (dendritic / geographic)', answer: 'Branching or amoeboid ulcer with terminal bulbs; live virus' },
                    { label: 'Immune stromal (non-necrotising)', answer: 'Stromal haze/infiltrate ± neovascularisation, usually intact epithelium' },
                    { label: 'Necrotising stromal', answer: 'Dense white necrotic infiltrate with ulceration, thinning — direct viral invasion' },
                    { label: 'Endotheliitis (disciform)', answer: 'Round area of stromal oedema over KPs, without infiltrate' },
                    { label: 'Neurotrophic (metaherpetic)', answer: 'Smooth-edged oval non-healing defect; reduced sensation' }
                ],
                distractors: ['Shield ulcer'],
                explain: 'Treatment differs by type: antiviral for live virus; steroid under antiviral cover for immune disease; lubrication and protection for neurotrophic.'
            },
            {
                phase: '2. Epithelial: palliative & course',
                type: 'mcq',
                question: 'Epithelial disease: management, palliative therapy, review and expected course?',
                options: [
                    'Topical steroid (prednisolone acetate QID) to limit scarring plus lubricants; antivirals only if it hasn’t healed at 2 weeks; most heal in 4–6 weeks.',
                    'Topical antiviral (aciclovir 3% or ganciclovir gel 5×/day) ± debridement; palliative cycloplegic, PF lubricants, sunglasses; review at 2–7 days; most heal in 1–2 weeks.',
                    'Bandage contact lens and chloramphenicol QID until healed; antivirals are reserved for stromal disease; review at 2 weeks; most heal in a month.',
                    'Oral antibiotics via the GP for secondary infection plus lubricants; topical antivirals are too toxic for the epithelium; review at a week; most epithelial lesions heal in about 3 weeks.'
                ],
                answer: 1,
                explain: 'Stop the topical antiviral once healed to avoid toxicity.'
            },
            {
                phase: '3. Stromal: prophylaxis',
                type: 'mcq',
                question: 'For stromal disease, what else do you use, and for how long?',
                options: [
                    'Topical aciclovir 3% BD for life: long-term topical prophylaxis is what HEDS tested, it has no epithelial toxicity at twice-daily dosing, and it works better than oral aciclovir for stromal disease.',
                    'Oral aciclovir 400 mg BD (via GP) while on steroid and often ~12 months after (HEDS halved recurrences, mainly with previous stromal disease); longer only with frequent recurrences.',
                    'Oral aciclovir 800 mg 5×/day for 10 days only: HEDS showed a short treatment course prevents recurrence as well as long-term prophylaxis.',
                    'Nothing beyond the steroid and a short topical antiviral: HEDS found oral prophylaxis made no difference to recurrence of either stromal or epithelial disease.'
                ],
                answer: 1,
                explain: 'HEDS found 400 mg BD for 12 months reduced recurrence of any ocular HSV from 32% to 19%.',
                recall: 'The peer candidate said “400 mg BID for the rest of your life” and mentioned topical aciclovir for prophylaxis. HEDS used oral aciclovir for 12 months; duration beyond that is individualised. Long-term topical antivirals cause epithelial toxicity.'
            }
        ]
    },
    {
        id: 'peer-vf-neuro-quickfire',
        category: 'neuro',
        title: 'Quick-fire: Fields, Pathway & Pupils',
        theme: 'Visual Fields / Neuro',
        years: ['Peer recalls'],
        patient: 'Quick-fire questions from past panels (2016–17 lists).',
        stem: 'The examiner moves through field printouts and neuro questions.',
        steps: [
            {
                phase: '1. Lesion → defect',
                type: 'match',
                question: 'Match each lesion to its field defect.',
                pairs: [
                    { label: 'Left parietal lobe lesion', answer: 'Right inferior quadrantanopia (“pie on the floor”)' },
                    { label: 'Left temporal lobe (Meyer’s loop)', answer: 'Right superior quadrantanopia' },
                    { label: 'Left occipital lobe', answer: 'Right congruous homonymous hemianopia with macular sparing' },
                    { label: 'Pituitary adenoma', answer: 'Bitemporal loss starting superiorly' },
                    { label: 'Craniopharyngioma', answer: 'Bitemporal loss starting inferiorly' }
                ],
                distractors: ['Central scotoma'],
                explain: 'An RAPD occurs with lesions before the LGN (optic nerve, chiasm, tract), not cortical ones.'
            },
            {
                phase: '2. Field indices',
                type: 'multi',
                question: 'Which statements about Humphrey indices are true?',
                options: [
                    'GHT compares 5 mirror-image zone pairs above and below the horizontal using probability values, not raw thresholds',
                    'PSD rises in early localised loss but can fall again in end-stage disease as the field becomes uniformly depressed',
                    'MD keeps worsening as the loss deepens, so it is better for staging advanced disease',
                    'High false negatives are a standard reliability exclusion in glaucoma trials',
                    'VFI has a pass/fail cut-off'
                ],
                answers: [0, 1, 2],
                explain: 'False negatives naturally rise in damaged fields, so they aren’t used to exclude fields in most glaucoma studies. VFI is a summary percentage with no pass/fail.'
            },
            {
                phase: '3. The −3 D lens trick',
                type: 'mcq',
                question: 'A superior defect disappears when you retest with an extra −3.00 DS lens. Why?',
                options: [
                    'The patient was malingering: a true defect never changes with a lens, so any change proves non-organic loss and the field should be reported as unreliable.',
                    'A refractive scotoma from a myopic staphyloma, tilted disc or coloboma region (ectatic retina focused differently); a true neurological defect wouldn’t change with a lens.',
                    'The lens improves retinal sensitivity in early glaucoma by magnifying the stimulus; true glaucomatous defects shrink with minus lenses and enlarge with plus lenses, so it supports glaucoma.',
                    'It is a lens-rim artefact: the −3.00 DS lens holder was blocking the superior field, and the defect disappears whenever any lens is removed.'
                ],
                answer: 1,
                explain: 'Common with tilted discs (superotemporal defects that cross the vertical midline).'
            },
            {
                phase: '4. Retina or nerve?',
                type: 'mcq',
                question: 'How can you separate a maculopathy from an optic neuropathy in the chair?',
                options: [
                    'Photostress recovery (prolonged in optic neuropathy, normal in maculopathy), plus RAPD (present in maculopathy only), colour vision (worse in maculopathy) and Amsler distortion (optic neuropathy).',
                    'Photostress recovery (normally under ~60 s; prolonged in maculopathy, normal in optic neuropathy), plus RAPD, colour and red desaturation (worse in optic neuropathy) and Amsler distortion (maculopathy).',
                    'Visual acuity alone: maculopathy reduces VA while optic neuropathy never does at presentation; other tests (colour, RAPD, Amsler) are only needed if the VA is normal.',
                    'IOP and corneal sensation: raised IOP points to optic neuropathy and reduced sensation to maculopathy; photostress recovery is unreliable over 50, and Amsler can’t separate the two.'
                ],
                answer: 1,
                explain: 'Both reduce acuity; the pattern of other tests separates them.'
            },
            {
                phase: '5. Other quick ones',
                type: 'match',
                question: 'Match each finding to its explanation.',
                pairs: [
                    { label: 'Enlarged blind spot all around the disc', answer: 'Papilloedema / disc swelling (chronic papilloedema can also cause arcuate loss)' },
                    { label: 'Arcuate defect with lumpy disc and no cupping', answer: 'Optic disc drusen' },
                    { label: 'Adduction lag with abducting-eye nystagmus', answer: 'Internuclear ophthalmoplegia (MLF lesion, e.g. MS)' },
                    { label: 'Pale disc with little cupping', answer: 'Non-glaucomatous optic atrophy — investigate' }
                ],
                distractors: ['Normal ageing'],
                explain: 'Pallor out of proportion to cupping is a neuro red flag.'
            }
        ]
    },
    {
        id: 'peer-pharm-quickfire',
        category: 'professional',
        title: 'Quick-fire: Drugs, Drops & Scope',
        theme: 'Pharmacology & Scope',
        years: ['Peer recalls'],
        patient: 'Quick-fire questions from the Orals notes.',
        stem: 'The examiner checks your pharmacology and scope.',
        steps: [
            {
                phase: '1. Fluoroquinolones',
                type: 'mcq',
                question: 'How do fluoroquinolones work, and what side effects should you know?',
                options: [
                    'They inhibit cell-wall synthesis by binding penicillin-binding proteins (bactericidal). Topical: tendon rupture and QT prolongation are common with the eye drops, so avoid them in athletes and anyone on antiarrhythmics.',
                    'They inhibit DNA gyrase (topoisomerase II) and topoisomerase IV, blocking supercoiling (bactericidal). Topical: white precipitate (cipro), bitter taste, stinging. Systemic: tendinopathy, QT prolongation — not topical issues.',
                    'They bind the 50S ribosomal subunit and block peptidyl transferase (bacteriostatic). Topical: grey baby syndrome and aplastic anaemia, so avoid in children and blood disorders.',
                    'They bind the 30S ribosomal subunit and cause mRNA misreading (bactericidal). Topical: corneal epithelial toxicity and pseudo-dendrites only. Systemic: hearing loss and kidney damage.'
                ],
                answer: 1,
                explain: 'Bacterial vs human cells: bacteria have peptidoglycan walls, 70S ribosomes (30S + 50S) and DNA gyrase; human cells don’t — that is why these drugs are selective.'
            },
            {
                phase: '2. Episcleritis & oral NSAIDs',
                type: 'mcq',
                question: 'A patient with episcleritis needs an oral NSAID. Can you prescribe it?',
                options: [
                    'Yes: endorsed optometrists can prescribe any oral NSAID dose for ocular inflammation, so write a script for ibuprofen 800 mg TDS for 2 weeks and review the stomach at follow-up.',
                    'No: oral NSAIDs at anti-inflammatory doses (e.g. ibuprofen 400 mg TDS–QID) are outside optometric prescribing — refer to the GP. Don’t tell the patient to double OTC tablets.',
                    'Yes, but only up to 400 mg QID of ibuprofen (the OTC maximum); above that, tell the patient to take two OTC packs together to reach the dose.',
                    'No, but you can phone a pharmacist to supply 800 mg ibuprofen without a prescription if you document the episcleritis in the referral.'
                ],
                answer: 1,
                explain: 'Check contraindications the GP will weigh: peptic ulcer, renal impairment, asthma (NSAID-sensitive), anticoagulants, pregnancy.'
            },
            {
                phase: '3. Combined drugs',
                type: 'mcq',
                question: 'Which oral/topical combinations most worry you for additive effects?',
                options: [
                    'Topical + oral β-blockers (bradycardia, hypotension, less extra IOP effect) and topical + oral NSAIDs (GI, renal, bleeding).',
                    'Topical + oral antihistamines (sedation, dry eye) and topical + oral PGAs (uterine contractions, hyperaemia).',
                    'Topical + oral antibiotics of any class (resistance only), and a topical steroid + oral paracetamol (additive liver toxicity).',
                    'None: topical eye drops are absorbed too little to add to any oral drug, so medication history isn’t needed.'
                ],
                answer: 0,
                explain: 'Always take a full medication history.'
            },
            {
                phase: '4. Drops & lubricants',
                type: 'viva',
                question: 'How many drops are in 1 mL, and how do you choose an ocular lubricant?',
                points: [
                    'A drop is ~30–50 µL, so roughly 20–30 drops per mL (the eye holds only ~7–10 µL — one drop is plenty)',
                    'Preserved vs preservative-free: PF for frequent use (>4×/day), surface disease, multiple drops, contact lenses',
                    'Active ingredient and viscosity: CMC, HPMC, hyaluronate (wound healing, shear-thinning), carbomer gels, lipid emulsions/sprays for evaporative dry eye',
                    'Higher viscosity lasts longer but blurs; gels/ointments at night',
                    'Cost, PBS listing and ease of use'
                ],
                explain: 'You don’t need every brand, but you must justify the type.'
            },
            {
                phase: '5. Why is IOP high?',
                type: 'mcq',
                question: 'Name the three ways IOP can be raised.',
                options: [
                    'Increased aqueous production (the usual cause in POAG), reduced tear drainage through the puncta, and a thickened cornea (which raises the true IOP, not just the reading).',
                    'Reduced outflow (blocked or damaged TM, closed angle), increased aqueous production (rare), and raised episcleral venous pressure (e.g. carotid–cavernous fistula, Sturge–Weber).',
                    'High blood sugar (osmotic swelling of the lens), low blood pressure (reduced ciliary perfusion, so less pressure on the outflow), and axial myopia (stretched sclera).',
                    'Reduced outflow only: IOP can’t rise from extra production or raised venous pressure, because the trabecular meshwork compensates for both by increasing its own outflow.'
                ],
                answer: 1,
                explain: 'Goldmann equation: IOP = (F − U)/C + Pv.'
            }
        ]
    }
);
