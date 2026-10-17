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
                    '“Are you allergic to anything, and do your eyes itch more in spring or around cats and dogs?”',
                    '“Has anyone around you — home, work, school or the gym — had a red eye or a cold recently?”',
                    '“Have you started any new eye drops, make-up or face creams in the last few weeks?”',
                    '“Do you wear contact lenses, and have you slept in them or swum in them recently?”'
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
                    'Ciprofloxacin QID for 2 weeks, since SEIs are bacterial superinfection of the adenoviral cornea; avoid steroids, which make SEIs permanent.',
                    'Topical steroid (e.g. FML 0.1% or low-frequency prednisolone) with a slow taper — warn about rebound and a long course; check IOP. Mild SEIs often fade without treatment.',
                    'Aciclovir 3% ointment 5×/day, since SEIs are live adenovirus in the stroma; steroids are contraindicated until the SEIs have cleared.',
                    'Prednisolone acetate hourly for 3 days then stop; SEIs clear permanently with a short intensive burst, rebound doesn’t occur after adenovirus, and IOP checks aren’t needed for courses this short.'
                ],
                answer: 1,
                explain: 'Steroids suppress the immune response but may prolong viral shedding and SEIs can recur on stopping. Only treat if vision or symptoms justify it.'
            },
            {
                phase: '5. Infiltrate with staining',
                type: 'mcq',
                question: 'One infiltrate now has overlying staining and the eye is more painful. What changes?',
                options: [
                    'SEIs often stain as they mature, and pain increases as they clear. Keep the steroid at the same dose and review in a week; staining over an SEI is expected at about 2 weeks.',
                    'SEIs shouldn’t have an epithelial defect over them. Staining plus more pain suggests a secondary MK (or CLPU/marginal in context): stop the steroid, treat as MK, review in 24 h.',
                    'Staining over an SEI means the steroid is working too slowly. Double the steroid to hourly, add a bandage CL for comfort, and review in 3 days.',
                    'Staining over an SEI means adenovirus has re-activated. Stop the steroid and start aciclovir 5×/day; MK isn’t a concern because adenoviral eyes are protected.'
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
                    'Pseudomonas aeruginosa and Serratia, as in contact lens wearers; conjunctivitis together with otitis media in a toddler strongly suggests Pseudomonas.',
                    'Non-typeable Haemophilus influenzae, Streptococcus pneumoniae, Moraxella, Staph aureus; conjunctivitis plus otitis suggests H. influenzae.',
                    'Neisseria gonorrhoeae and Chlamydia trachomatis at any age; conjunctivitis plus otitis suggests chlamydia.',
                    'Adenovirus types 8 and 19 (EKC) and enterovirus; conjunctivitis plus otitis suggests pharyngoconjunctival fever.'
                ],
                answer: 1,
                explain: 'In conjunctivitis–otitis syndrome, the child needs oral antibiotics via the GP for the ear.'
            },
            {
                phase: '2. Treatment & MoA',
                type: 'mcq',
                question: 'What would you prescribe, and how does it work?',
                options: [
                    'Ciprofloxacin 0.3% q15min for 6 h then hourly; inhibits DNA gyrase (bactericidal, Gram-negative); first line in children because chloramphenicol is contraindicated under 12 years.',
                    'Chloramphenicol 0.5% (every 2–6 h while awake for 48 h, then QID to ~5 days) ± ointment at night; binds 50S, inhibiting peptidyl transferase (bacteriostatic, broad). GP for the otitis.',
                    'Tobramycin 0.3% QID for 7 days; binds 50S, blocking peptidyl transferase (bacteriostatic); the otitis settles with the eye drops, so the GP isn’t needed.',
                    'Chloramphenicol 0.5% QID; binds 30S, causing mRNA misreading (bactericidal); continue for 3 weeks to prevent recurrence; the otitis needs no treatment.'
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
                    'Simple, nodular and necrotising; most are associated with RA or vasculitis; men more than women, usually over 60. Necrotising episcleritis is the commonest type and can perforate.',
                    'Simple (sectoral or diffuse, most common) and nodular; about a third have an association (rosacea, atopy, RA, IBD, SLE, gout, zoster); women more than men. Necrotising is SCLERITIS.',
                    'Anterior and posterior; almost none have a systemic association; equal in men and women. Posterior episcleritis causes choroidal folds and needs oral steroids.',
                    'Granulomatous and non-granulomatous; most are caused by HLA-B27; women more than men. Granulomatous episcleritis is treated with oral NSAIDs by the optometrist.'
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
