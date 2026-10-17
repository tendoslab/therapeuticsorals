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
                    'Look for any 10 dB drop at any single point.',
                    'Event analysis (Guided Progression Analysis: the same ≥3 points significantly worse than baseline on 2 consecutive tests = “possible”, on 3 = “likely” progression) and trend analysis (MD or VFI slope over time, in dB or % per year), alongside OCT change. Do ~3 fields a year early on to get a reliable rate.',
                    'Wait for the patient to notice a change in vision.',
                    'Repeat the GHT; once it says “outside normal limits” the disease has progressed.'
                ],
                answer: 1,
                explain: 'You need a good baseline (two reliable fields) and enough tests to estimate a rate of progression; front-loading fields in the first two years (e.g. three a year) is the recommended approach. Structural change on OCT often comes before field change in early disease; in advanced disease the RNFL floors out and fields (or macular GCL) matter more.'
            },
            {
                phase: '5. Treatment',
                type: 'mcq',
                question: 'What is your treatment plan?',
                options: [
                    'Treat the left eye only; the right eye is normal.',
                    'Treat both eyes with a PGA (e.g. latanoprost 0.005% one drop nocte OU), provided there are no contraindications. Left target: at least 30% lower (AGIS suggests keeping advanced eyes below ~18 mmHg); right eye is high risk (IOP 25, early defect, fellow eye with advanced POAG). Review IOP in 4–6 weeks; refer to an ophthalmologist within 4 months, and sooner for the advanced left eye.',
                    'Start a fixed combination drop on both eyes on day one.',
                    'Observe both eyes for 12 months to establish a rate before treating.'
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
                    'Diabetic microvascular palsy: GP review in a week.',
                    'Emergency: same-day transfer to the emergency department for CT/MR angiography — a posterior communicating artery aneurysm must be excluded (it can rupture and cause a fatal subarachnoid haemorrhage).',
                    'Prism glasses and review in 3 months.',
                    'Start pilocarpine to constrict the pupil.'
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
                    'The pupillomotor fibres run on the outside (superficial, dorsomedial) of the nerve, supplied by pial vessels. An aneurysm compresses the outside first; microvascular ischaemia hits the core of the nerve and spares the surface fibres.',
                    'Diabetes protects the iris sphincter.',
                    'The pupil fibres travel with CN VI.',
                    'Ischaemia only affects sympathetic fibres.'
                ],
                answer: 0,
                explain: 'This is the classic exam explanation. The “rule of the pupil” isn\'t absolute: about 1 in 5 microvascular palsies affect the pupil slightly (usually under 1 mm of anisocoria), and an early or partial compressive palsy can spare it.'
            },
            {
                phase: '4. Pupil spared',
                type: 'mcq',
                question: 'Instead, the pupils are equal and reactive and the palsy is otherwise complete. She is 61 with diabetes and hypertension. Management?',
                options: [
                    'Ignore it — it always recovers.',
                    'Likely microvascular (ischaemic) palsy: same-day or next-day GP/ophthalmology contact for BP, glucose/HbA1c, lipids (and ESR/CRP if over 50 with GCA symptoms); re-check the pupil daily for the first week; occlude one eye for diplopia; expect recovery over ~3 months. Image urgently if the pupil becomes involved, other nerves are affected, she is young or it doesn\'t recover.',
                    'Emergency craniotomy.',
                    'Topical steroid and review in 2 weeks.'
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
                    'A direct bacterial infection of the conjunctiva.',
                    'A delayed (type IV) hypersensitivity reaction to microbial antigens — in Australia usually Staphylococcus aureus from blepharitis; historically tuberculosis.',
                    'An IgE-mediated type I allergy to pollen.',
                    'A degenerative change caused by UV exposure.'
                ],
                answer: 1,
                explain: 'Because it is immune-mediated, the nodule is sterile. Ask about TB contacts, cough, weight loss and travel or migration from high-prevalence countries; if positive, the GP should arrange TB screening.'
            },
            {
                phase: '3. Management',
                type: 'mcq',
                question: 'How would you manage her?',
                options: [
                    'Ciprofloxacin q1h around the clock.',
                    'Treat the blepharitis (warm compresses, lid hygiene, ± chloramphenicol 1% ointment to the lid margins) plus a short course of a mild topical steroid once infection is excluded (e.g. FML 0.1% QID for a week, then taper), with an IOP check at review in about a week. Refer to the GP for oral azithromycin if there is ocular rosacea (doxycycline is avoided under 8).',
                    'Oral prednisolone via the GP.',
                    'Excise the nodule.'
                ],
                answer: 1,
                explain: 'Phlyctens respond quickly to topical steroid. Children are more prone to steroid response, so check IOP and use the mildest effective steroid for the shortest time. Treating the lid disease prevents recurrence.'
            },
            {
                phase: '4. Twist: it moves onto the cornea',
                type: 'mcq',
                question: 'Three months later a new phlycten has crept onto the cornea with an epithelial defect and dense infiltrate. What changes?',
                options: [
                    'Nothing — use the same steroid.',
                    'Treat it as possible microbial keratitis until shown otherwise: stop or hold the steroid, start a broad-spectrum antibiotic and review in 24 hours; refer if it is large, central or worsening. Corneal phlyctens can scar and thin.',
                    'Bandage contact lens.',
                    'Antiviral ointment.'
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
                    'Adenoviral conjunctivitis.',
                    'Allergic (delayed type IV) follicular blepharoconjunctivitis to brimonidine.',
                    'Seasonal allergic conjunctivitis.',
                    'PGA-induced hyperaemia only.'
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
                    'Acute angle closure'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Long-term multi-drop users often have both preservative toxicity and allergy. Timing (when each drop started) is the most useful clue.'
            },
            {
                phase: '3. Management',
                type: 'mcq',
                question: 'What do you do?',
                options: [
                    'Continue brimonidine and add an antihistamine drop.',
                    'Stop brimonidine (record the allergy), substitute another class if more lowering is needed (e.g. a topical CAI, or timolol if no respiratory or cardiac contraindication; preservative-free where possible), cold compresses and preservative-free lubricants; a short mild steroid course only if needed. Check IOP in 4–6 weeks after the change and inform the co-managing ophthalmologist.',
                    'Stop all glaucoma drops for a month.',
                    'Switch to apraclonidine 0.5%.'
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
                    'Bacterial conjunctivitis: Haemophilus influenzae (non-typeable), Streptococcus pneumoniae, Moraxella catarrhalis (more common in children than adults), plus Staphylococcus aureus.',
                    'Adenovirus; Pseudomonas is most common in children.',
                    'Allergic conjunctivitis.',
                    'Fungal conjunctivitis.'
                ],
                answer: 0,
                explain: 'In adults Staph aureus dominates; in children H. influenzae and Strep pneumoniae (often with otitis media).'
            },
            {
                phase: '2. Treatment & MoA',
                type: 'mcq',
                question: 'What would you treat it with, how does it work, and what is its spectrum?',
                options: [
                    'Chloramphenicol 0.5% drops QID (more often in the first 48 h) for ~5 days ± 1% ointment at night. Binds the 50S ribosomal subunit and inhibits peptidyl transferase (protein synthesis); bacteriostatic; broad spectrum (Gram +/−, but poor against Pseudomonas).',
                    'Ciprofloxacin q15min: kills fungi.',
                    'Natamycin.',
                    'Prednisolone.'
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
                    'Double the chloramphenicol.',
                    'Refer (GP/paediatric ophthalmology) for conjunctival swabs: culture and sensitivity plus PCR (chlamydia, adenovirus, HSV); reconsider the diagnosis.',
                    'Add a steroid.',
                    'Stop all treatment.'
                ],
                answer: 1,
                explain: 'Non-responding conjunctivitis should always be swabbed.'
            },
            {
                phase: '4. Culture negative',
                type: 'mcq',
                question: 'Bacterial culture comes back negative. What now, and what type of organism is chlamydia?',
                options: [
                    'It must be viral; reassure.',
                    'Think chlamydia: send a conjunctival swab for PCR (NAAT). Chlamydia trachomatis is an obligate intracellular Gram-negative bacterium — it can’t grow on routine culture media.',
                    'Chlamydia is a virus, so treat with aciclovir.',
                    'Chlamydia is a fungus.'
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
                    'Topical chloramphenicol for 2 weeks.',
                    'Oral azithromycin (via GP/paediatrician): adults 1 g single dose; children 20 mg/kg (max 1 g) single dose. Macrolide: binds the 50S subunit, inhibits protein synthesis. Contraindicated in macrolide hypersensitivity; caution with liver disease and QT prolongation. Doxycycline is avoided under 8 and in pregnancy.',
                    'Oral aciclovir.',
                    'Fortified tobramycin.'
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
                    'Antiviral alone.',
                    'Topical steroid (e.g. prednisolone acetate 1%, frequency by severity, slow taper over ~10 weeks or longer) under oral antiviral cover (aciclovir 400 mg BD via GP), co-managed with ophthalmology; monitor IOP.',
                    'Steroid alone without antiviral.',
                    'Debridement.'
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
                    'Contact lens wear'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Side effects: nausea, diarrhoea, headache, dizziness; rarely confusion. TGA category B3.'
            },
            {
                phase: '3. What is a steroid response?',
                type: 'mcq',
                question: 'What is classified as a steroid response?',
                options: [
                    'Any IOP of 22 mmHg or more.',
                    'An IOP rise attributable to corticosteroid use, typically appearing 2–6 weeks into treatment: Armaly’s classes are low (<6 mmHg rise), moderate (6–15 mmHg) and high (>15 mmHg). Many clinicians call a rise of ≥10 mmHg, or above 21–24 mmHg, clinically significant.',
                    'Any rise after one dose.',
                    'A drop in IOP.'
                ],
                answer: 1,
                explain: 'Rule out other causes of raised IOP in an inflamed eye: herpetic trabeculitis (inflammatory), PAS, synechial closure.'
            },
            {
                phase: '4. Would you treat it?',
                type: 'mcq',
                question: 'Would you treat the raised IOP, and how?',
                options: [
                    'No — just stop the steroid suddenly.',
                    'Yes if high or damaging: taper or switch to a lower-penetrating steroid (FML or loteprednol) if the keratitis allows, and add an aqueous suppressant (timolol 0.5% BD, brimonidine or a topical CAI). Avoid PGAs (HSV recurrence and inflammation). Co-manage.',
                    'Start latanoprost.',
                    'Pilocarpine.'
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
                    'Ciprofloxacin 0.3% loading (q15min for 6 h, then q30min, hourly overnight) + a cycloplegic (cyclopentolate 1% or atropine 1%) for pain and AC reaction; stop CL wear; review in 24 h.',
                    'Chloramphenicol QID only.',
                    'Steroid + antibiotic combination drop.',
                    'Lubricants only.'
                ],
                answer: 0,
                explain: 'Oral analgesia (paracetamol/ibuprofen) helps too.'
            },
            {
                phase: '4. Worse — refer',
                type: 'mcq',
                question: 'What if it gets worse, and when (and why) do you refer?',
                options: [
                    'Increase to q5min.',
                    'Refer the same day for scraping/culture and fortified therapy if it is worse at 24–48 h, or initially large (≥2 mm), central (within 3 mm), with AC ≥1+ cells or hypopyon, thinning, atypical (fungal/Acanthamoeba), monocular, or in an older patient. Large, deep ulcers in the elderly may need admission (perforation risk, can’t manage hourly drops).',
                    'Add a steroid.',
                    'Bandage CL.'
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
                    'Steroids cure bacterial keratitis.',
                    'Adjunctive topical prednisolone phosphate 1% (started after 48 h of moxifloxacin) gave no overall difference in BCVA at 3 months and no increase in perforation. Possible benefit in severe central ulcers with poor presenting vision; worse with Nocardia.',
                    'Steroids doubled the perforation rate.',
                    'Only oral steroids were tested.'
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
                    'Gram-positives have a thick peptidoglycan cell wall that holds crystal violet (purple). Gram-negatives have a thin peptidoglycan layer plus an outer lipopolysaccharide membrane (stain pink with safranin); the outer membrane blocks some antibiotics and LPS is an endotoxin.',
                    'Gram-negatives have no cell wall.',
                    'Gram-positives are all anaerobes.',
                    'It refers to their size.'
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
                    'Pinguecula'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Fluorescein, AC cells/flare and history separate active inflammation from an old scar or deposit.'
            },
            {
                phase: '2. Management',
                type: 'mcq',
                question: 'Assume it is bacterial keratitis. Management, and how do you get fortified antibiotics?',
                options: [
                    'Ciprofloxacin QID and review in a week.',
                    'Large and deep → same-day referral, likely admission. Dual fortified therapy (cefazolin 5% + tobramycin 1.3%) is compounded by a hospital pharmacy — you can’t get it from a community pharmacy; start ciprofloxacin while you arrange transfer.',
                    'Ask the patient to buy fortified drops at the chemist.',
                    'Oral antibiotics only.'
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
                    'Dexamethasone hourly.',
                    'Possibly, to limit scarring if central: a mild-to-moderate steroid (e.g. FML 0.1% QID, or prednisolone phosphate/acetate at low frequency) with continued antibiotic cover, tapering, under ophthalmology. Not if fungal, Acanthamoeba or Nocardia is possible.',
                    'Never.',
                    'Oral steroid.'
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
                    'Corneal topography'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Plus history: family history, steroids, trauma, systemic disease and medications.'
            },
            {
                phase: '3. Grading',
                type: 'mcq',
                question: 'How would you grade the glaucoma, and with which scale?',
                options: [
                    'By IOP alone.',
                    'Pick and name a field-based staging system, e.g. Hodapp–Parrish–Anderson (early MD > −6 dB, moderate −6 to −12, severe < −12, plus point and central criteria) or Mills; supplement with structural staging (e.g. DDLS).',
                    'By C/D ratio only.',
                    'By age.'
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
                    'Nothing.',
                    'Refer to an ophthalmologist within 4 months of starting treatment for co-management (OBA guideline), using the RANZCO pathway; earlier for advanced or secondary glaucoma.',
                    'Refer in 2 years.',
                    'Only refer if IOP > 40.'
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
                    'You can’t; treat as uveitis.',
                    'Anterior segment OCT (or ultrasound biomicroscopy) of the angle; van Herick and gonioscopy of the fellow eye (usually also narrow); pupil (mid-dilated in AAC vs small in uveitis); IOP (usually low early in AAU); AC depth.',
                    'Dilate both eyes.',
                    'Check blood pressure.'
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
                    'It raises blood sugar directly by 10 mmol/L.',
                    'It causes metabolic acidosis and hypokalaemia: dangerous with poorly controlled diabetes (ketoacidosis risk, can worsen glucose control) and with COPD/respiratory acidosis (the patient can’t blow off extra CO₂, so acidosis worsens).',
                    'It causes bronchospasm like timolol.',
                    'It is fine in both.'
                ],
                answer: 1,
                explain: 'Also: renal stones, paraesthesia, diuresis, and rare blood dyscrasias (sulfonamide).'
            },
            {
                phase: '5. No ophthalmologist',
                type: 'mcq',
                question: 'You can’t reach an ophthalmologist to discuss pilocarpine. Do you use it?',
                options: [
                    'Yes, every 5 minutes immediately.',
                    'Not as the first move. Start aqueous suppressants (and arrange acetazolamide via a GP or ED), send the patient to ED, and only consider pilocarpine 1–2% once IOP is below ~40 mmHg and the picture is clearly phakic pupil block — or straight away if your dilation triggered the attack. At high IOP the sphincter is ischaemic and pilocarpine can push the lens–iris diaphragm forward.',
                    'Never in angle closure.',
                    'Use atropine instead.'
                ],
                answer: 1,
                explain: 'Call order: ophthalmologist → ED (hospital registrar) → GP for acetazolamide.'
            },
            {
                phase: '6. Two days until LPI',
                type: 'mcq',
                question: 'The attack has broken but the LPI is 2 days away. What therapy in the meantime?',
                options: [
                    'Stop all drops.',
                    'Pilocarpine 1–2% QID in the affected eye (keeps the pupil small), pilocarpine in the fellow eye until its LPI, topical steroid QID for inflammation, and aqueous suppressants as needed for IOP; avoid dilating drugs and anticholinergic medications; return immediately if symptoms recur.',
                    'Atropine to rest the eye.',
                    'Latanoprost only.'
                ],
                answer: 1,
                explain: 'The aim is to keep the angle open until the iridotomy bypasses the pupil block.'
            },
            {
                phase: '7. Getting to hospital',
                type: 'mcq',
                question: 'The patient says they will drive themselves to hospital. What do you say?',
                options: [
                    'Fine.',
                    'No: vision is reduced, they may vomit and pilocarpine causes dim, blurred vision and brow ache. Arrange a driver, taxi or ambulance, and send a referral letter listing the drugs and times given.',
                    'Drive with one eye closed.',
                    'Wait until tomorrow.'
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
                    'Corneal topography.',
                    'Gonioscopy (patchy pigment, PXF material, Sampaolesi’s line, and check for narrowing from lax zonules), plus IOP (phasing), CCT, disc, OCT and fields.',
                    'Blood glucose.',
                    'Schirmer test.'
                ],
                answer: 1,
                explain: 'PXF eyes can have narrower angles because the lens moves forward on weak zonules.'
            },
            {
                phase: '3. When to treat',
                type: 'mcq',
                question: 'When do you start treatment?',
                options: [
                    'Never — PXF is benign.',
                    'Treat PXF glaucoma (any glaucomatous damage) and consider treating PXF with raised IOP (e.g. >21–24 mmHg) or big fluctuations, given its rapid progression (EMGT: PXF progressed fastest, ~−3.1 dB/yr untreated) and high conversion risk.',
                    'Only if VA drops.',
                    'Only after cataract surgery.'
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
                    'Every 2 years.',
                    'PXF glaucoma: about every 3 months initially (fast progression), with fields 2–3 times a year early on. PXF without glaucoma: every 6–12 months with IOP and disc review.',
                    'Weekly.',
                    'Only when symptomatic.'
                ],
                answer: 1,
                explain: 'Close review catches the rapid progression typical of PXG.'
            },
            {
                phase: '5. LPI question',
                type: 'mcq',
                question: 'The examiner asks: “How would you do an LPI, and why?”',
                options: [
                    'With pilocarpine drops.',
                    'Ophthalmologist procedure: pilocarpine to thin and stretch the iris, YAG (± argon pre-treatment) laser to make a full-thickness hole in the peripheral iris, ideally in an iris crypt under the upper lid (often 11–1 o’clock or temporal/nasal). It lets aqueous pass from the posterior to the anterior chamber, relieving pupil block so the iris flattens and the angle opens. It doesn’t help plateau iris much (that needs iridoplasty).',
                    'Through the cornea centrally.',
                    'It removes the lens.'
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
                    'Timolol, because it is cheapest.',
                    'Latanoprost 0.005% nocte: most effective, once daily, few systemic effects. Precautions: active or past uveitis, HSV keratitis, CMO risk (aphakia, torn posterior capsule); unilateral use causes asymmetric cosmetic effects (lashes, iris darkening, periorbital fat atrophy).',
                    'Pilocarpine.',
                    'No treatment.'
                ],
                answer: 1,
                explain: 'Explain cosmetic asymmetry before starting one eye only.'
            },
            {
                phase: '3. Treat on one field?',
                type: 'mcq',
                question: 'Would you treat on just one field?',
                options: [
                    'Never — always wait for three fields.',
                    'Yes, here: there is clear structure–function agreement, a moderate defect and PXF (an aggressive glaucoma). Still repeat the field soon to confirm and set the baseline.',
                    'Only if IOP is above 30.',
                    'Only after an MRI.'
                ],
                answer: 1,
                explain: 'Matching structural damage makes a single reliable field much more convincing.'
            },
            {
                phase: '4. Left eye',
                type: 'mcq',
                question: 'The left eye has just a superior cluster. What do you do, and when would you treat it as it is?',
                options: [
                    'Treat immediately in all cases.',
                    'Get two baseline fields and OCT, then review (e.g. 3–6 months) for repeatable functional or structural change. Treat now if it is ocular hypertensive with high OHTS conversion risk (age, IOP, thin CCT, large VCDR, PSD), or if the cluster is repeatable and matches the disc.',
                    'Discharge.',
                    'Only treat when VA drops.'
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
                    'Topical steroid.',
                    'Topical antiviral (aciclovir 3% ointment or ganciclovir 0.15% gel 5×/day) ± debridement; palliative: cycloplegic for photophobia, preservative-free lubricants, sunglasses; review at 2–7 days; most heal in 1–2 weeks.',
                    'Bandage CL alone.',
                    'Oral antibiotics.'
                ],
                answer: 1,
                explain: 'Stop the topical antiviral once healed to avoid toxicity.'
            },
            {
                phase: '3. Stromal: prophylaxis',
                type: 'mcq',
                question: 'For stromal disease, what else do you use, and for how long?',
                options: [
                    'Topical aciclovir for life.',
                    'Oral aciclovir 400 mg BD (via GP) as prophylaxis while on steroid and often for ~12 months after (HEDS halved recurrences, mainly benefiting those with previous stromal disease); longer-term in frequent recurrences — not automatically “for the rest of your life”.',
                    'Chloramphenicol.',
                    'Nothing.'
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
                    'The patient was malingering.',
                    'It is a refractive scotoma from a myopic staphyloma, tilted disc or coloboma region (ectatic retina focused differently). A true neurological defect would not change with a lens.',
                    'The lens improves retinal function.',
                    'It proves glaucoma.'
                ],
                answer: 1,
                explain: 'Common with tilted discs (superotemporal defects that cross the vertical midline).'
            },
            {
                phase: '4. Retina or nerve?',
                type: 'mcq',
                question: 'How can you separate a maculopathy from an optic neuropathy in the chair?',
                options: [
                    'Visual acuity alone.',
                    'Photostress recovery: usually under ~30–60 s; prolonged (>60–90 s) in maculopathy, normal in optic neuropathy. Plus RAPD, colour vision and red desaturation (worse in optic neuropathy), and Amsler distortion (maculopathy).',
                    'IOP.',
                    'Corneal sensation.'
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
                    'They inhibit cell-wall synthesis; no side effects.',
                    'They inhibit bacterial DNA gyrase (topoisomerase II) and topoisomerase IV, blocking DNA supercoiling and replication (bactericidal). Topical: white crystalline precipitate on the ulcer (ciprofloxacin), bitter taste, stinging, epithelial toxicity. Systemic FQs: tendinopathy/rupture (Achilles), QT prolongation — not an issue with topical use.',
                    'They bind the 50S subunit.',
                    'They are antivirals.'
                ],
                answer: 1,
                explain: 'Bacterial vs human cells: bacteria have peptidoglycan walls, 70S ribosomes (30S + 50S) and DNA gyrase; human cells don’t — that is why these drugs are selective.'
            },
            {
                phase: '2. Episcleritis & oral NSAIDs',
                type: 'mcq',
                question: 'A patient with episcleritis needs an oral NSAID. Can you prescribe it?',
                options: [
                    'Yes, any dose.',
                    'No: oral NSAIDs at anti-inflammatory doses (e.g. ibuprofen 400 mg TDS–QID; higher for scleritis) are outside optometric prescribing — refer to the GP. Don’t tell the patient to double over-the-counter tablets themselves.',
                    'Yes, if they are over 18.',
                    'Only by phone.'
                ],
                answer: 1,
                explain: 'Check contraindications the GP will weigh: peptic ulcer, renal impairment, asthma (NSAID-sensitive), anticoagulants, pregnancy.'
            },
            {
                phase: '3. Combined drugs',
                type: 'mcq',
                question: 'Which oral/topical combinations most worry you for additive effects?',
                options: [
                    'Topical + oral β-blockers (bradycardia, hypotension, reduced extra IOP effect) and topical + oral NSAIDs (GI, renal, bleeding).',
                    'Lubricants and saline.',
                    'Antihistamine drops with sunglasses.',
                    'None exist.'
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
                    'Too much tear film, small cornea, long eye.',
                    'Reduced outflow (blocked or damaged trabecular meshwork / closed angle), increased aqueous production (rare), and raised episcleral venous pressure (e.g. carotid–cavernous fistula, Sturge–Weber, thyroid eye disease).',
                    'High blood sugar, low blood pressure, myopia.',
                    'Only outflow problems.'
                ],
                answer: 1,
                explain: 'Goldmann equation: IOP = (F − U)/C + Pv.'
            }
        ]
    }
);
