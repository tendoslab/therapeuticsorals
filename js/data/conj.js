// Conjunctiva & sclera cases (anterior-eye examiner)
window.CASES.push(
    {
        id: 'adenoviral',
        category: 'conj',
        title: 'Adenoviral Keratoconjunctivitis',
        theme: 'Viral Conjunctivitis',
        years: ['2019', '2025'],
        patient: '35-year-old woman.',
        stem: 'Red, swollen, watery right eye for 3 days; the left is starting. Her husband had a red eye last week.',
        exhibit: 'Lid swelling, diffuse hyperaemia, watery (serous) discharge, inferior tarsal follicles, a tender pre-auricular node. Faint subepithelial infiltrates centrally.',
        steps: [
            {
                phase: '1. Describe & differentiate',
                type: 'match',
                question: 'Match each discharge or sign to the most likely cause.',
                pairs: [
                    { label: 'Watery / serous discharge, follicles, tender pre-auricular node', answer: 'Adenoviral conjunctivitis' },
                    { label: 'Mucopurulent (yellow-green, lids stuck in the morning), papillae', answer: 'Bacterial conjunctivitis' },
                    { label: 'Hyperacute, copious purulent discharge, chemosis, lid swelling', answer: 'Gonococcal conjunctivitis' },
                    { label: 'Chronic (>3–4 weeks) follicular, sexually active young adult, large follicles', answer: 'Chlamydial (adult inclusion) conjunctivitis' },
                    { label: 'Stringy mucus, itch, papillae', answer: 'Allergic conjunctivitis' }
                ],
                explain: 'Pseudomembranes and subepithelial infiltrates (SEIs) are features of EKC (adenovirus types 8, 19, 37). Pharyngoconjunctival fever (types 3, 7) comes with sore throat and fever.',
                recall: 'A 2019 candidate offered preseptal / orbital cellulitis and contact dermatitis for this photo; the panel told them to look again. Base differentials on the <strong>discharge type and follicles</strong>.'
            },
            {
                phase: '2. Contact history',
                type: 'mcq',
                question: 'Which history question really pins the diagnosis?',
                options: [
                    '“Are you allergic to anything?”',
                    '“Has anyone around you — at home, work, school or the gym — had a red eye or a cold recently?”',
                    '“Do you wear glasses?”',
                    '“Do you have diabetes?”'
                ],
                answer: 1,
                explain: 'Adenovirus is highly contagious (incubation ~5–12 days) through hands, towels and contaminated instruments, so ask about contacts and disinfect your clinic (tonometer tips).',
                recall: 'In 2019 the examiner wanted to know whether the <em>husband</em> had been around people with red eyes.'
            },
            {
                phase: '3. Management',
                type: 'viva',
                question: 'Management for EKC without pseudomembranes or significant infiltrates?',
                points: [
                    'Self-limiting over ~2–3 weeks; supportive care',
                    'Cold compresses, refrigerated preservative-free lubricants',
                    'Hygiene: hand washing, no shared towels or pillows; contagious ~10–14 days (while eyes are red and watery) — time off work or school',
                    'No antibiotics unless secondary infection',
                    'Remove pseudomembranes if present',
                    'Review in about 1 week (sooner if vision drops or pain increases)'
                ],
                explain: 'Disinfect clinic surfaces and instruments after the visit.'
            },
            {
                phase: '4. Central infiltrates',
                type: 'mcq',
                question: 'At 2 weeks, central SEIs have reduced her VA to 6/12 and she has glare. Options?',
                options: [
                    'Ciprofloxacin.',
                    'Topical steroid (e.g. FML 0.1% or prednisolone at low frequency) with a slow taper — warn about rebound if stopped quickly and a longer course; check IOP. Mild SEIs often fade over months without treatment.',
                    'Aciclovir ointment.',
                    'Corneal graft.'
                ],
                answer: 1,
                explain: 'Steroids suppress the immune response but may prolong viral shedding and SEIs can recur on stopping. Only treat if vision or symptoms justify it.'
            },
            {
                phase: '5. Infiltrate with staining',
                type: 'mcq',
                question: 'One infiltrate now has overlying staining and the eye is more painful. What changes?',
                options: [
                    'Nothing — SEIs always stain.',
                    'SEIs shouldn\'t have a significant epithelial defect over them. Staining over an infiltrate with more pain suggests a secondary microbial keratitis (or CLPU / marginal keratitis in the right context). Stop the steroid, treat as MK, and review in 24 h.',
                    'Double the steroid.',
                    'Bandage CL and steroid.'
                ],
                answer: 1,
                critical: true,
                explain: 'Corneal infiltrate differentials: adenoviral SEIs, Thygeson\'s SPK, CLPU, marginal keratitis, MK, sterile infiltrates.'
            }
        ]
    },
    {
        id: 'paeds-bacterial-conj',
        category: 'conj',
        title: 'Bacterial Conjunctivitis in a Toddler',
        theme: 'Bacterial / Chlamydial Conjunctivitis',
        years: ['2019'],
        patient: '2-year-old child.',
        stem: 'Both eyes red with sticky yellow discharge for 2 days. Recently had a cold and has been pulling at the left ear.',
        steps: [
            {
                phase: '1. Organisms',
                type: 'mcq',
                question: 'Most likely organisms?',
                options: [
                    'Pseudomonas and Acanthamoeba',
                    'Haemophilus influenzae (non-typeable), Streptococcus pneumoniae, Moraxella, Staphylococcus aureus. Conjunctivitis plus otitis media suggests H. influenzae.',
                    'Adenovirus only',
                    'Fusarium'
                ],
                answer: 1,
                explain: 'In conjunctivitis–otitis syndrome, the child needs oral antibiotics via the GP for the ear.'
            },
            {
                phase: '2. Treatment & MoA',
                type: 'mcq',
                question: 'What would you prescribe, and how does it work?',
                options: [
                    'Ciprofloxacin q15min.',
                    'Chloramphenicol 0.5% drops (e.g. 1 drop every 2–6 h while awake for the first 48 h, then QID to complete ~5 days) ± 1% ointment at night. MoA: binds the 50S ribosomal subunit, inhibiting peptidyl transferase — bacteriostatic and broad-spectrum. Plus lid hygiene and GP for otitis media.',
                    'Prednisolone acetate.',
                    'Natamycin.'
                ],
                answer: 1,
                explain: 'Topical chloramphenicol is TGA category A and widely used in children. The very rare idiosyncratic aplastic anaemia is the reason it is avoided with a personal or family history of blood dyscrasia. “Grey baby syndrome” relates to systemic neonatal dosing.'
            },
            {
                phase: '3. When NOT chloramphenicol',
                type: 'multi',
                question: 'When is topical chloramphenicol alone NOT appropriate?',
                options: [
                    'Neonates under 28 days (ophthalmia neonatorum — urgent same-day referral)',
                    'Suspected gonococcal conjunctivitis (hyperacute) — systemic ceftriaxone, urgent hospital referral',
                    'Chlamydial conjunctivitis — needs systemic azithromycin/doxycycline (GP) and contact tracing',
                    'Personal or family history of blood dyscrasia / aplastic anaemia',
                    'Mild mucopurulent conjunctivitis in a 6-year-old'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Gonococcus can penetrate an intact cornea and perforate within days. Chlamydia is a systemic (genital) infection, so treat partners too.',
                recall: 'A 2019 recall had bacterial turning into chlamydial conjunctivitis, with “how does culture or PCR for chlamydia work?” — a conjunctival swab for nucleic acid amplification (NAAT/PCR) detects chlamydial DNA. It is more sensitive than culture because chlamydia is an obligate intracellular organism.'
            }
        ]
    },
    {
        id: 'episcleritis',
        category: 'conj',
        title: 'Episcleritis vs Scleritis',
        theme: 'Episcleritis / Scleritis',
        years: ['2019', '2025'],
        patient: '28-year-old woman.',
        stem: 'Sectoral redness in the temporal right eye for 3 days. Mild discomfort, no discharge, vision normal.',
        exhibit: 'A wedge of salmon-pink injection temporally; the vessels move over the sclera with a cotton bud. Cornea clear, AC quiet.',
        steps: [
            {
                phase: '1. Differentiate',
                type: 'match',
                question: 'Match each feature to episcleritis or scleritis.',
                pairs: [
                    { label: 'Mild discomfort, bright red / pink, vessels blanch with phenylephrine 2.5%', answer: 'Episcleritis' },
                    { label: 'Severe, deep, boring pain that wakes the patient at night, radiating to brow/jaw; globe tender', answer: 'Scleritis' },
                    { label: 'Bluish-violaceous hue in daylight; deep vessels don\'t blanch', answer: 'Scleritis' },
                    { label: 'Young adult women; often self-limiting within 1–3 weeks; recurrent', answer: 'Episcleritis' }
                ],
                explain: 'Patients with scleritis describe pain that stops them sleeping or working and isn\'t relieved by simple analgesics, and the eye is tender to touch. Scleritis is associated with RA (most common), GPA, SLE, relapsing polychondritis, IBD, HZO, syphilis and TB — refer urgently. Necrotising scleritis can perforate.',
                recall: 'A 2019 candidate was told patients don\'t say “deep boring pain radiating to the jaw”. They say it <em>keeps them awake</em> and disrupts daily life.'
            },
            {
                phase: '2. Types',
                type: 'mcq',
                question: 'What types of episcleritis are there, and what are its associations?',
                options: [
                    'Diffuse, nodular and necrotising.',
                    'Simple (sectoral or diffuse — most common) and nodular. About a third have an association: rosacea, atopy, RA, IBD, SLE, gout, herpes zoster. Women more than men. Necrotising is a SCLERITIS subtype.',
                    'Anterior and posterior.',
                    'Granulomatous only.'
                ],
                answer: 1,
                explain: 'Nodular, recurrent or bilateral episcleritis prompts a systemic work-up (GP — FBC, ESR/CRP, RF, ANA, uric acid).',
                recall: 'A 2019 candidate said “necrotising” for episcleritis types and thought the examiner agreed. There is no necrotising episcleritis — it is a scleritis subtype. They also answered “men” for the sex predominance, which is wrong: <strong>women</strong>.'
            },
            {
                phase: '3. Treatment',
                type: 'viva',
                question: 'How would you treat episcleritis?',
                points: [
                    'Reassurance — often self-limiting; cool compresses, lubricants',
                    'Mild topical steroid for symptomatic cases: e.g. FML 0.1% (fluorometholone alcohol) QID for ~1 week, then taper; Flarex is fluorometholone ACETATE 0.1% (more potent)',
                    'Oral NSAID (e.g. ibuprofen with food, via pharmacy or GP) — useful for nodular, recurrent or steroid-intolerant cases; check GI, renal, asthma and anticoagulant contraindications',
                    'Steroid gives faster local effect; NSAID avoids steroid IOP and cataract risks',
                    'Review in 1–2 weeks; refer if no improvement or features of scleritis'
                ],
                explain: 'Prednisolone sodium phosphate 0.5% (Predsol) is another option for more marked inflammation.',
                recall: 'A 2019 candidate said FML is “fluorometholone phosphate”. FML Liquifilm is fluorometholone (the free alcohol); <strong>Flarex</strong> is fluorometholone <strong>acetate</strong>.'
            }
        ]
    }
);
