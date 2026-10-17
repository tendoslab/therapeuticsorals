// Conjunctiva & sclera cases (anterior-eye examiner)
window.CASES.push(
    {
        id: 'adenoviral',
        category: 'conj',
        title: 'Adenoviral Keratoconjunctivitis',
        theme: 'Viral Conjunctivitis',
        years: ['2019', '2025', 'Case studies'],
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
        years: ['2019', 'Peer recalls'],
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
        years: ['2019', '2025', 'Case studies'],
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
    },
    {
        id: 'chlamydial-conj',
        category: 'conj',
        title: 'Conjunctivitis That Won\'t Settle: Chlamydia',
        theme: 'Adult Inclusion Conjunctivitis',
        years: ['Case studies', 'Peer recalls'],
        patient: '27-year-old man, otherwise well, no medications.',
        stem: 'Red, watery left eye for 10 days with photophobia, some white discharge and morning crusting. He has used chloramphenicol 0.5% QID from the chemist for 7 days with no improvement. Right eye normal.',
        steps: [
            {
                phase: '1. History',
                type: 'multi',
                question: 'Which history questions matter most here?',
                options: [
                    'Sexual history: new or multiple partners, genital symptoms (discharge, dysuria) in him or a partner',
                    'Recent cold, sore throat or contact with someone with a red eye',
                    'Contact lens wear, trauma, swimming',
                    'Cold sores or previous similar episodes (HSV)',
                    'Use of other eye drops or cosmetics',
                    'Favourite colour'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'A non-resolving unilateral follicular conjunctivitis in a sexually active young adult needs a sensitive, matter-of-fact sexual history. Explain why you are asking.'
            },
            {
                phase: '2. Findings',
                type: 'reveal',
                text: 'VA R 6/6, L 6/7.5. Left eye: large follicles on the inferior fornix and both tarsal plates, diffuse hyperaemia (worse superiorly), mild lid swelling, a tender pre-auricular node. Cornea clear apart from faint superior micropannus. AC quiet. Swabs sent earlier by the GP: Gram stain, adenovirus, HSV and VZV PCR all negative; no bacterial growth at 48 hours.'
            },
            {
                phase: '3. Diagnosis',
                type: 'viva',
                question: 'What is your diagnosis and why? What are your differentials?',
                points: [
                    'Adult chlamydial (inclusion) conjunctivitis: Chlamydia trachomatis serotypes D–K',
                    'Supporting: young adult, chronic (>2–3 weeks) unilateral follicular conjunctivitis, large inferior forniceal follicles, mucopurulent discharge, pre-auricular node, superior pannus, no response to topical antibiotic',
                    'Ddx: adenoviral keratoconjunctivitis (PCR negative, would be settling by now)',
                    'Ddx: HSV conjunctivitis (vesicles, dendrites, PCR negative)',
                    'Ddx: toxic follicular reaction to drops; molluscum contagiosum on the lid margin',
                    'Late signs: peripheral subepithelial infiltrates 2–3 weeks in'
                ],
                explain: 'Bacterial conjunctivitis usually gives papillae rather than follicles and settles on antibiotics. Trachoma (serotypes A–C) is the endemic, community form seen in remote Australian communities.'
            },
            {
                phase: '4. Confirm',
                type: 'mcq',
                question: 'How is the diagnosis confirmed?',
                options: [
                    'Routine bacterial culture on blood agar.',
                    'Conjunctival swab (firm swab of the everted lower lid) for chlamydia NAAT/PCR, via the GP or ophthalmologist, plus urogenital testing (first-void urine).',
                    'Rose bengal staining.',
                    'Blood test for HLA-B27.'
                ],
                answer: 1,
                explain: 'Chlamydia is an obligate intracellular bacterium, so routine culture misses it. Nucleic acid amplification (PCR) is most sensitive. Giemsa staining shows intracytoplasmic inclusion bodies but is rarely used now.'
            },
            {
                phase: '5. Treatment',
                type: 'mcq',
                question: 'What is the treatment?',
                options: [
                    'Ciprofloxacin 0.3% drops q2h.',
                    'Systemic treatment via the GP: azithromycin 1 g orally as a single dose, or doxycycline 100 mg BD for 7 days (current Australian STI guidelines favour doxycycline where adherence is likely). Treat partners, abstain from sex for 7 days after treatment, and retest in 3 months. Topical drops alone don\'t clear it.',
                    'Prednisolone acetate 1% QID.',
                    'Chloramphenicol for another two weeks.'
                ],
                answer: 1,
                critical: true,
                explain: 'Chlamydial conjunctivitis is the eye sign of a genital infection. Optometrists can\'t prescribe oral antibiotics, so refer to the GP or a sexual health clinic. Supportive care: preservative-free lubricants, cold compresses, hygiene.',
                recall: 'The case-study notes list “erythromycin 500 mg QID for 1–3 weeks or doxycycline 100 mg BD for 10–14 days”. Those older regimens still work, but current Australian guidance uses azithromycin 1 g stat or doxycycline 100 mg BD for 7 days.'
            },
            {
                phase: '6. Pharmacology',
                type: 'match',
                question: 'Match the drug to its mechanism and key caution.',
                pairs: [
                    { label: 'Azithromycin', answer: 'Macrolide: binds the 50S ribosomal subunit; TGA category B1 — suitable in pregnancy' },
                    { label: 'Doxycycline', answer: 'Tetracycline: binds the 30S subunit; category D — avoid in pregnancy and under 8 (teeth, bone), photosensitivity' },
                    { label: 'Chloramphenicol', answer: 'Binds 50S, bacteriostatic; doesn\'t eradicate chlamydia topically; avoid with blood dyscrasia history' }
                ],
                distractors: ['Fluoroquinolone: inhibits DNA gyrase'],
                explain: 'Chlamydia is a Gram-negative obligate intracellular bacterium (it can\'t make its own ATP), so drugs must reach intracellular organisms — hence systemic macrolides or tetracyclines.'
            },
            {
                phase: '7. Twist: a child',
                type: 'viva',
                question: 'Peer recall twist: a school-aged child has 7 days of red, crusty eyes; it doesn\'t respond to treatment and bacterial culture is negative, then chlamydia PCR is positive. What now?',
                points: [
                    'Chlamydia beyond the neonatal period raises concern about sexual abuse',
                    'Don\'t interrogate the child or accuse; document findings factually',
                    'Refer to a paediatrician / children\'s hospital the same day for systemic treatment and assessment',
                    'Know and follow your state or territory child protection reporting obligations (mandatory reporting rules for health practitioners differ between jurisdictions); if unsure, contact the child protection service for advice',
                    'In a neonate (5–14 days old) it is maternal transmission: ophthalmia neonatorum needs systemic erythromycin/azithromycin (pneumonia risk) and treatment of the parents'
                ],
                explain: 'The examiner is testing safeguarding as much as pharmacology. Systemic treatment for a child is by the paediatrician (azithromycin; doxycycline is avoided under 8).',
                recall: 'Peer recall: “Chlamydia may be indicative of child abuse — what do you do?” Answer with referral, documentation and your reporting obligations.'
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
    }
);
