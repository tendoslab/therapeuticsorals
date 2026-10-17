// Neuro-ophthalmology & visual field cases (posterior-eye examiner)
window.CASES.push(
    {
        id: 'homonymous',
        category: 'neuro',
        title: 'The Post-Chiasmal Defect',
        theme: 'Homonymous Hemianopia',
        years: ['2019', '2025', 'Peer recalls'],
        patient: '52-year-old man.',
        stem: 'He keeps bumping into things on his right side since a recent head injury.',
        exhibit: 'Fields: right homonymous hemianopia in both eyes, respecting the vertical midline.',
        steps: [
            {
                phase: '1. Localise',
                type: 'mcq',
                question: 'Where is the lesion?',
                options: ['Right optic tract', 'Left post-chiasmal pathway (optic tract, LGN, optic radiation or occipital cortex)', 'Optic chiasm', 'Right optic nerve'],
                answer: 1,
                explain: 'Homonymous = same side of the field in both eyes = a lesion behind the chiasm on the <strong>opposite</strong> side. Right-sided field loss means a left-sided lesion.'
            },
            {
                phase: '2. Pathway map',
                type: 'match',
                question: 'Match the lesion site to its typical field defect.',
                pairs: [
                    { label: 'Optic nerve', answer: 'Monocular defect (central, altitudinal or arcuate) ± RAPD' },
                    { label: 'Chiasm (body)', answer: 'Bitemporal hemianopia' },
                    { label: 'Optic tract', answer: 'Incongruous homonymous hemianopia with RAPD in the eye with the temporal loss' },
                    { label: 'Temporal lobe (Meyer\'s loop)', answer: 'Superior homonymous quadrantanopia (“pie in the sky”)' },
                    { label: 'Parietal lobe', answer: 'Inferior homonymous quadrantanopia (“pie on the floor”)' },
                    { label: 'Occipital cortex', answer: 'Congruous homonymous hemianopia with macular sparing' }
                ],
                explain: 'Congruity increases the further back the lesion. Macular sparing in occipital lesions comes from dual blood supply (posterior and middle cerebral arteries) to the occipital pole. Anterior chiasmal (junctional) lesions give an ipsilateral central scotoma with a contralateral superotemporal defect.',
                recall: 'A 2025 candidate couldn\'t localise a visual pathway lesion from a field — the examiners then asked them to go through every part of the pathway. Learn this table.'
            },
            {
                phase: '3. Refine',
                type: 'mcq',
                question: 'There is NO RAPD, the defect is highly congruous with macular sparing, and the discs look normal. Where is the lesion?',
                options: ['Left optic tract', 'Left temporal lobe', 'Left parietal lobe', 'Left occipital cortex'],
                answer: 3,
                explain: 'Tract lesions are incongruous, give an RAPD in the contralateral eye (more fibres cross — about 53% crossed vs 47% uncrossed) and eventually band (bow-tie) atrophy. Occipital lesions are congruous and macula-sparing, with no RAPD and normal discs (the damage is beyond the LGN).',
                recall: 'From 2019: “Don\'t get the RAPD wrong — MORE nasal fibres cross.” A tract lesion causes an RAPD in the eye with the <strong>temporal</strong> field loss (contralateral to the lesion).'
            },
            {
                phase: '4. Causes & action',
                type: 'viva',
                question: 'What could cause an occipital lesion, and what will you do?',
                points: [
                    'Stroke (posterior cerebral artery infarct) — the most common cause',
                    'Trauma / contusion / haemorrhage (fits this history)',
                    'Tumour, AVM, abscess / infection',
                    'Urgent same-day referral to ED / neurology if new (possible stroke or bleed) — imaging (CT/MRI)',
                    'Driving: homonymous hemianopia usually fails Australian driving standards — advise not to drive and document it',
                    'Rehabilitation: scanning training, prisms, orientation and mobility support'
                ],
                explain: 'New neurological field loss after head trauma needs urgent imaging. Driving advice and documentation are part of safe management (Austroads “Assessing Fitness to Drive”).'
            }
        ]
    },
    {
        id: 'bitemporal',
        category: 'neuro',
        title: 'Bitemporal Hemianopia',
        theme: 'Chiasmal Compression',
        years: ['2019', '2025'],
        patient: '48-year-old woman.',
        stem: 'She has had gradual blur and some headaches, and recently stopped menstruating.',
        exhibit: '24-2 OU: superior bitemporal defects, denser superiorly, respecting the vertical midline.',
        steps: [
            {
                phase: '1. Localise',
                type: 'mcq',
                question: 'Where is the lesion?',
                options: ['Both optic tracts', 'Optic chiasm (crossing nasal fibres)', 'Occipital cortex', 'Retina'],
                answer: 1,
                explain: 'Crossing nasal retinal fibres carry the temporal fields. Compression at the chiasm causes bitemporal loss that respects the vertical midline.'
            },
            {
                phase: '2. Pattern clue',
                type: 'match',
                question: 'Match the lesion to the pattern of bitemporal loss.',
                pairs: [
                    { label: 'Pituitary adenoma (from below)', answer: 'Superior bitemporal loss first (inferior crossing fibres hit first)' },
                    { label: 'Craniopharyngioma (from above)', answer: 'Inferior bitemporal loss first; children and older adults' },
                    { label: 'Anterior chiasm / junction', answer: 'Ipsilateral central scotoma + contralateral superotemporal defect' }
                ],
                distractors: ['Congruous macula-sparing homonymous loss'],
                explain: 'Also consider meningioma (tuberculum sellae), ICA aneurysm and pituitary apoplexy (sudden severe headache, ophthalmoplegia, reduced VA — an emergency).'
            },
            {
                phase: '3. Testing',
                type: 'mcq',
                question: 'Which perimetry best maps the full extent of chiasmal defects?',
                options: ['10-2 only', 'Kinetic perimetry (e.g. Goldmann) or a full-threshold 30-2, as well as the 24-2', 'Amsler grid', 'FDT screening'],
                answer: 1,
                explain: 'Neurological defects can extend beyond 24°. Kinetic perimetry shows the peripheral isopters and whether the defect respects the vertical meridian. Also check colour, red desaturation (compare across the vertical midline), pupils and OCT (band atrophy / GCL loss).',
                recall: '2019 recall: “Kinetic perimetry, not HVFA” for the bitemporal case.'
            },
            {
                phase: '4. Action',
                type: 'viva',
                question: 'What do you do next?',
                points: [
                    'Urgent referral (GP/neurology/neurosurgery) for MRI brain with contrast (pituitary protocol)',
                    'Same-day ED if sudden headache, ophthalmoplegia or rapid visual loss (pituitary apoplexy)',
                    'Endocrine bloods via GP (prolactin, GH/IGF-1, TSH, cortisol, LH/FSH)',
                    'Ask about endocrine symptoms: amenorrhoea, galactorrhoea, acromegaly, headache',
                    'Driving advice and documentation',
                    'Baseline fields/OCT for monitoring after treatment'
                ],
                explain: 'Amenorrhoea hints at a prolactinoma (often treated medically with a dopamine agonist). The fields often improve after decompression.'
            }
        ]
    },
    {
        id: 'altitudinal',
        category: 'neuro',
        title: 'Sudden Altitudinal Field Loss',
        theme: 'NAION vs Arteritic AION',
        years: ['2019'],
        patient: '74-year-old woman.',
        stem: 'She woke with a “shadow” over the lower half of her right vision. VA R 6/18, L 6/6. Right RAPD.',
        exhibit: '24-2 right eye: dense inferior altitudinal defect respecting the horizontal midline.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'Which are differentials for an altitudinal defect?',
                options: [
                    'Non-arteritic AION',
                    'Arteritic AION (giant cell arteritis)',
                    'Branch / hemi-retinal artery or vein occlusion',
                    'Optic neuritis',
                    'Advanced glaucoma',
                    'Bilateral occipital lesions (upper or lower banks — rare)',
                    'Pituitary adenoma'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Altitudinal = respects the horizontal midline → optic nerve or retinal vascular cause (or, rarely, bilateral cortical). Pituitary lesions respect the vertical midline.',
                recall: 'In 2019 the examiner wanted “one more neurological cause”. Candidates later suggested cortical disease — bilateral occipital lesions can give an altitudinal defect.'
            },
            {
                phase: '2. GCA',
                type: 'multi',
                question: 'Which history and test findings make giant cell arteritis more likely?',
                options: ['Jaw claudication', 'Scalp tenderness / temporal headache', 'Weight loss, fever, polymyalgia (shoulder/hip girdle stiffness)', 'Chalky-white pallid disc swelling', 'Raised ESR / CRP / platelets', 'Age under 40', '“Disc at risk” (small crowded disc) in the fellow eye'],
                answers: [0, 1, 2, 3, 4],
                explain: 'A crowded fellow disc and vasculopathic risks (diabetes, hypertension, sleep apnoea) point to <strong>non-arteritic</strong> AION. GCA is almost never seen under 50.'
            },
            {
                phase: '3. Urgency',
                type: 'mcq',
                question: 'She reports jaw pain when chewing and scalp tenderness. What now?',
                options: [
                    'Review in 4 weeks with repeat fields.',
                    'Same-day emergency referral (ED / ophthalmology) for ESR/CRP and immediate high-dose systemic corticosteroids — don\'t wait for biopsy. Temporal artery ultrasound or biopsy follows.',
                    'Prescribe topical prednisolone acetate.',
                    'Start aspirin and recheck in a week.'
                ],
                answer: 1,
                critical: true,
                explain: 'Arteritic AION can blind the fellow eye within days. Systemic steroids are started on suspicion. Optometrists can\'t prescribe systemic steroids — phone ahead and send to ED.'
            },
            {
                phase: '4. Tests',
                type: 'viva',
                question: 'Which extra tests would you do in the chair?',
                points: [
                    'Colour vision / red desaturation',
                    'Pupils — RAPD',
                    'Dilated fundus: disc swelling (pallid vs hyperaemic), splinter haemorrhages, cotton-wool spots, retinal emboli / occlusion',
                    'Fellow-eye disc (crowded “disc at risk” vs normal)',
                    'BP; ask about vasculopathic risks and phosphodiesterase-5 inhibitor use, amiodarone',
                    'OCT of disc / RNFL to document swelling'
                ],
                explain: 'The fundus separates retinal vascular causes (emboli, whitening, haemorrhages along an arcade) from optic nerve causes (disc swelling).'
            }
        ]
    },
    {
        id: 'centrocaecal',
        category: 'neuro',
        title: 'Centrocaecal Scotoma in a Young Adult',
        theme: 'Optic Neuropathy',
        years: ['2019'],
        patient: '25-year-old woman.',
        stem: 'Reduced vision in both eyes over 2 months. VA R 6/12, L 6/9. IOPs normal (15 OU). C/D difference of 0.2 between the eyes.',
        exhibit: 'Bilateral central/centrocaecal scotomas (fixation to the blind spot).',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'Which are good differentials for centrocaecal scotomas?',
                options: [
                    'Toxic optic neuropathy (ethambutol, methanol, amiodarone, linezolid, alcohol–tobacco)',
                    'Nutritional (B12 / folate / thiamine — e.g. restrictive diet, bariatric surgery)',
                    'Hereditary (Leber hereditary optic neuropathy, dominant optic atrophy)',
                    'Optic neuritis (demyelination / MS)',
                    'Compressive optic neuropathy',
                    'Macular disease (CSR, dystrophy — e.g. Stargardt, cone dystrophy)',
                    'Early POAG'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Centrocaecal defects come from the papillomacular bundle. Glaucoma spares central fixation until late, so naming it first earns “a weird look”.',
                recall: '2019 tip: “If you say glaucoma she will give you a weird look.” Lead with optic neuropathies and macular disease.'
            },
            {
                phase: '2. History',
                type: 'viva',
                question: 'Which history questions matter most?',
                points: [
                    'Medications (ethambutol, isoniazid, amiodarone, linezolid, hydroxychloroquine for macula)',
                    'Diet, alcohol, smoking, weight loss, bariatric surgery, eating disorder',
                    'Family history of early vision loss (LHON is maternally inherited; DOA is autosomal dominant)',
                    'Pain on eye movement, Uhthoff phenomenon, past neurological symptoms (numbness, weakness)',
                    'Colour vision change, headaches, endocrine symptoms',
                    'Occupational / chemical exposure (methanol, solvents)'
                ],
                explain: 'Tests: colour (D15), red desaturation, pupils, OCT macula and RNFL/GCL (temporal pallor, papillomacular bundle loss), and referral for MRI and blood tests (B12, folate, genetic testing if suspected).'
            },
            {
                phase: '3. Next step',
                type: 'mcq',
                question: 'OCT macula is normal; there is temporal disc pallor in both eyes. Next step?',
                options: [
                    'Start latanoprost.',
                    'Refer to neuro-ophthalmology (via GP or ophthalmologist) for MRI and blood tests; coordinate with the GP to stop any toxic agent.',
                    'Prescribe topical steroids.',
                    'Review in 12 months.'
                ],
                answer: 1,
                explain: 'Bilateral optic neuropathy with central loss in a young adult needs investigation. Toxic and nutritional causes can partly recover if caught early.'
            }
        ]
    },
    {
        id: 'tilted-disc',
        category: 'neuro',
        title: 'Tilted Disc vs Glaucoma',
        theme: 'Tilted Disc Syndrome',
        years: ['2019', '2025'],
        patient: '35-year-old man, −3.50/−2.00 × 30 myope.',
        stem: 'Routine exam. IOP 16 mmHg OU.',
        exhibit: 'Both discs are oval and obliquely tilted with inferonasal crescents (conus) and situs inversus of the vessels. 24-2 shows superotemporal depression in both eyes that crosses the vertical midline.',
        steps: [
            {
                phase: '1. Why is it tricky?',
                type: 'viva',
                question: 'Why is tilted disc syndrome hard to tell apart from glaucoma (and chiasmal disease)?',
                points: [
                    'The cup is hard to judge on a tilted, oval disc',
                    'OCT normative databases fit poorly (atypical RNFL distribution)',
                    'Field defects can look glaucomatous or bitemporal (superotemporal)',
                    'Peripapillary atrophy and myopia overlap with glaucoma risk',
                    'Myopia is itself a glaucoma risk factor, so they can coexist'
                ],
                explain: 'Tilted disc syndrome is congenital (oblique insertion of the optic nerve with an inferonasal staphyloma).'
            },
            {
                phase: '2. Field pattern',
                type: 'mcq',
                question: 'What field pattern suggests a tilted disc rather than chiasmal compression or glaucoma?',
                options: [
                    'A dense defect strictly respecting the vertical midline that progresses.',
                    'Superotemporal defects that cross the vertical midline, don\'t respect the horizontal midline, are stable over time and shrink with extra minus lens power.',
                    'An inferior nasal step that respects the horizontal midline.',
                    'Central scotoma.'
                ],
                answer: 1,
                explain: 'The inferonasal retina sits in an ectatic (more myopic) zone, so it is relatively out of focus → a refractive scotoma. Adding about −2 to −3 D brings it into focus and the defect shrinks. Glaucoma respects the horizontal midline and progresses; chiasmal defects respect the vertical midline.',
                recall: '2019: “Why does a −3.00 work? It shifts the retinal plane.” The examiner also wanted: glaucoma progresses, tilted-disc defects don\'t.'
            },
            {
                phase: '3. Plan',
                type: 'mcq',
                question: 'What is a sensible plan?',
                options: [
                    'Start a PGA immediately.',
                    'Document baseline (disc photos, OCT, fields with and without extra minus), repeat fields, and monitor for progression. If the defect respects the vertical midline and doesn\'t change with lenses, consider neuro-imaging.',
                    'MRI everyone with a tilted disc.',
                    'Discharge.'
                ],
                answer: 1,
                explain: 'Stability over time is the key discriminator. Any progression, true vertical-midline respect, pallor or loss of acuity needs further work-up.'
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
    }
);
