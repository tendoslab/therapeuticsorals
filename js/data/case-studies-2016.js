// Cases from the 2016 therapeutics case-study notes.
window.CASES.push(
    {
        id: 'chlamydial-conj',
        category: 'conj',
        title: 'Conjunctivitis That Won\'t Settle: Chlamydia',
        theme: 'Adult Inclusion Conjunctivitis',
        years: ['Case studies 2016', 'Case studies 2022'],
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
                    'Recent long-haul flight or air-conditioned office work'
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
                    'Routine bacterial culture on blood and chocolate agar, read at 48 hours, plus a urine culture.',
                    'Conjunctival swab of the everted lower lid for chlamydia PCR (via GP or ophthalmologist), plus urogenital testing.',
                    'Giemsa stain alone at the slit lamp; PCR is unnecessary because inclusion bodies are diagnostic.',
                    'Blood tests for HLA-B27 and chlamydia IgG antibodies via the GP, since serology is the gold standard for eye disease.'
                ],
                answer: 1,
                explain: 'Chlamydia is an obligate intracellular bacterium, so routine culture misses it. Nucleic acid amplification (PCR) is most sensitive. Giemsa staining shows intracytoplasmic inclusion bodies but is rarely used now.'
            },
            {
                phase: '5. Treatment',
                type: 'mcq',
                question: 'What is the treatment?',
                options: [
                    'Topical ciprofloxacin 0.3% q2h for 2 weeks prescribed by you; oral treatment is only needed if genital symptoms develop, and partners don’t need testing for eye infection.',
                    'Systemic treatment via the GP: azithromycin 1 g once or doxycycline 100 mg BD for 7 days; treat partners, abstain 7 days, retest at 3 months. Drops alone don’t clear it.',
                    'Topical chloramphenicol for 2 more weeks plus FML QID; chlamydia responds to longer topical courses, and systemic antibiotics are reserved for trachoma.',
                    'Oral amoxicillin 500 mg TDS for 7 days via the GP; partners are treated only if symptomatic, and retesting isn’t needed after a full course.'
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
            }
        ]
    },
    {
        id: 'neovascular-glaucoma',
        category: 'glaucoma',
        title: 'Neovascular Glaucoma after a CRVO',
        theme: 'Neovascular Glaucoma',
        years: ['Case studies 2016'],
        patient: '67-year-old man with type 2 diabetes and hypertension.',
        stem: 'Painful red right eye for 2 days with headache. He “lost some vision” in that eye about 3 months ago but didn\'t get it checked. VA R hand movements, L 6/9. IOP R 52 mmHg, L 16 mmHg.',
        exhibit: 'Slit-lamp photo, right eye: injected, hazy oedematous cornea, fine tortuous new vessels on the iris surface at the pupil margin, mild ectropion uveae.',
        steps: [
            {
                phase: '1. Describe & diagnose',
                type: 'viva',
                question: 'Describe what you see and give your diagnosis and differentials.',
                points: [
                    'Rubeosis iridis: fine irregular new vessels at the pupil margin (and in the angle)',
                    'Corneal oedema from the IOP, conjunctival/ciliary injection, ectropion uveae from membrane contraction',
                    'Diagnosis: neovascular glaucoma (a secondary angle-closure glaucoma)',
                    'Likely cause: ischaemic central retinal vein occlusion about 3 months ago (“90-day glaucoma”)',
                    'Ddx: acute angle closure, uveitic glaucoma (dilated iris vessels), Fuchs heterochromic iridocyclitis (fine angle vessels), ICE syndrome'
                ],
                explain: 'New iris vessels in a diabetic or post-CRVO patient with high IOP is NVG until proven otherwise. AAC can look similar but has no rubeosis; look before you dilate.'
            },
            {
                phase: '2. Causes',
                type: 'multi',
                question: 'What causes neovascular glaucoma?',
                options: [
                    'Proliferative diabetic retinopathy',
                    'Ischaemic central retinal vein occlusion',
                    'Ocular ischaemic syndrome (carotid artery stenosis)',
                    'Central retinal artery occlusion (less commonly)',
                    'Chronic retinal detachment, tumours, chronic uveitis',
                    'Pigment dispersion syndrome'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'All share retinal ischaemia → VEGF release → new vessels on the iris and angle → a fibrovascular membrane that zips the angle shut. Diabetes and CRVO account for most cases; if there is no diabetic retinopathy or vein occlusion, think carotid disease (ocular ischaemic syndrome).'
            },
            {
                phase: '3. Stages',
                type: 'match',
                question: 'Match the stage to its findings.',
                pairs: [
                    { label: 'Rubeosis iridis', answer: 'New vessels at the pupil margin; normal IOP; open angle' },
                    { label: 'Open-angle stage', answer: 'Fibrovascular membrane over an open angle; IOP rising' },
                    { label: 'Angle-closure stage', answer: 'Membrane contracts → PAS zip the angle closed; very high IOP, ectropion uveae' }
                ],
                distractors: ['Pupil block with iris bombé'],
                explain: 'Gonioscopy before dilation in any at-risk patient (recent CRVO, PDR) catches angle vessels early, when anti-VEGF and PRP can still prevent closure. In the CRVO study, NVI/NVA was most likely in the first 3–4 months.'
            },
            {
                phase: '4. First aid & referral',
                type: 'mcq',
                question: 'What do you do now?',
                options: [
                    'Pilocarpine 2% every 5 minutes to open the angle, plus timolol, and review tomorrow. Anti-VEGF isn’t used once IOP is raised, so a laser peripheral iridotomy is the definitive treatment for neovascular glaucoma.',
                    'Same-day ophthalmology referral. Meanwhile (if no contraindications): aqueous suppressants, prednisolone acetate and atropine; avoid pilocarpine. They will give anti-VEGF, PRP and IOP surgery if needed.',
                    'Refer for urgent laser peripheral iridotomy to relieve the pupil block, plus latanoprost nocte and timolol BD meanwhile; avoid steroids and atropine, which worsen neovascularisation.',
                    'Latanoprost nocte and timolol BD with a 4-week review; NVG is managed like POAG unless IOP exceeds 60 mmHg, when ophthalmology adds PRP. Pilocarpine helps open the angle meanwhile.'
                ],
                answer: 1,
                critical: true,
                explain: 'Pilocarpine is ineffective once the angle is synechially closed and worsens inflammation and the blood–aqueous barrier. LPI doesn\'t help because there is no pupil block. Oral acetazolamide can be arranged through the ophthalmologist or ED. The definitive treatment targets the ischaemia (anti-VEGF + PRP) as well as the pressure.'
            },
            {
                phase: '5. The rest of the patient',
                type: 'viva',
                question: 'What else do you need to think about for this patient and his other eye?',
                points: [
                    'Fellow eye: dilated fundus exam for DR or vein occlusion, gonioscopy for angle vessels',
                    'GP: blood pressure, HbA1c and diabetic control, lipids; CRVO work-up (and carotid Doppler if ocular ischaemia suspected)',
                    'Prognosis: visual prognosis in the affected eye is often poor; the goals are comfort and saving the fellow eye',
                    'Education: urgent review for any new vision loss, pain or redness in the left eye'
                ],
                explain: 'The examiner wants you to remember that NVG is a marker of systemic vascular disease, and that the other eye is at risk.'
            }
        ]
    },
{
        id: 'cs16-aau-joints',
        category: 'uveitis',
        title: 'Limbal Redness and Joint Pains',
        theme: 'Anterior Uveitis',
        years: ['Case studies 2016'],
        patient: 'Young man, healthy, no medications. A bit of joint pain.',
        stem: 'Red right eye with limbal (circumcorneal) redness, lid oedema, clear cornea. Light-sensitive; no discharge, itch or previous episodes.',
        steps: [
            {
                phase: '1. Why limbal redness matters',
                type: 'mcq',
                question: 'Why does the pattern of redness matter?',
                options: [
                    'Circumcorneal flush suggests conjunctivitis or allergy; diffuse redness worse at the limbus suggests uveitis, keratitis or angle closure, so the pattern points the other way.',
                    'Circumcorneal (ciliary) flush suggests intraocular inflammation or keratitis (uveitis, keratitis, AAC); diffuse redness worse in the fornices suggests conjunctivitis.',
                    'The pattern doesn’t matter clinically; only the depth matters, since all superficial redness is conjunctival and all deep redness is scleritis.',
                    'Limbal redness means a subconjunctival haemorrhage or episcleritis; uveitis gives redness only in the fornices, sparing the limbus.'
                ],
                answer: 1,
                explain: 'Then: VA, pupils, slit lamp with cells/flare, KPs, synechiae, IOP, gonioscopy and a dilated exam.'
            },
            {
                phase: '2. SUN grading',
                type: 'match',
                question: 'Match the SUN AC cell grade (1 mm × 1 mm beam) to the cell count.',
                pairs: [
                    { label: '0', answer: '<1 cell' },
                    { label: '0.5+', answer: '1–5 cells' },
                    { label: '1+', answer: '6–15 cells' },
                    { label: '2+', answer: '16–25 cells' },
                    { label: '3+', answer: '26–50 cells' },
                    { label: '4+', answer: '>50 cells' }
                ],
                explain: 'Flare: 0 none, 1+ faint, 2+ moderate (iris and lens clear), 3+ marked (iris and lens hazy), 4+ intense (fibrin). Record a hypopyon separately.'
            },
            {
                phase: '3. KPs & IOP',
                type: 'mcq',
                question: 'You see KPs. What types are there, and what do you expect the IOP to be?',
                options: [
                    'Fine/stellate KPs (sarcoid, TB, syphilis) vs mutton-fat KPs (HLA-B27, Fuchs, HSV). IOP is always high in uveitis because cells block the meshwork from the first day.',
                    'Fine/stellate KPs (Fuchs, HSV, VZV, CMV, toxo) vs large mutton-fat KPs (granulomatous: sarcoid, TB, syphilis, VKH). IOP is often low early but can be high with trabeculitis (herpes, Fuchs, CMV, PSS).',
                    'Pigmented KPs (Fuchs) vs white KPs (HSV only); the type of KP doesn’t change management or work-up. IOP is always normal in uveitis unless the patient is already a known glaucoma suspect or steroid responder.',
                    'Fine KPs mean bacterial endophthalmitis and mutton-fat KPs mean fungal infection (Candida, Aspergillus). IOP is typically very high early and falls once the KPs disappear with treatment.'
                ],
                answer: 1,
                explain: 'A high IOP in uveitis should make you think herpes first.'
            },
            {
                phase: '4. Posterior synechiae & dilation',
                type: 'viva',
                question: 'What are posterior synechiae, and what are you looking for when you dilate?',
                points: [
                    'Adhesions between the iris and anterior lens capsule; irregular pupil; suggest longer-standing or more severe inflammation',
                    'Intermediate: vitreous cells, snowballs/snowbanking (pars planitis), vascular sheathing, CMO',
                    'Posterior: retinitis/choroiditis lesions, vasculitis/sheathing, CMO, ERM, NVD/NVE, haemorrhages, cotton wool spots',
                    'SUN anatomical classification: anterior, intermediate, posterior, panuveitis'
                ],
                explain: 'Always dilate in uveitis.'
            },
            {
                phase: '5. Sarcoid vs Behçet’s',
                type: 'match',
                question: 'Match each feature to sarcoidosis or Behçet’s disease.',
                pairs: [
                    { label: 'Granulomatous, mutton-fat KPs, iris nodules, lung hilar lymphadenopathy, raised ACE', answer: 'Sarcoidosis' },
                    { label: 'Mediterranean/Middle Eastern/Japanese, HLA-B51, oral and genital ulcers, mobile hypopyon, occlusive retinal vasculitis', answer: 'Behçet’s disease' }
                ],
                distractors: ['Ankylosing spondylitis'],
                explain: 'Tests the doctor may order: ESR/CRP, HLA-B27, ACE and chest X-ray, syphilis serology, QuantiFERON (TB). A first unilateral non-granulomatous episode usually needs no work-up.'
            },
            {
                phase: '6. Chronic vs recurrent',
                type: 'match',
                question: 'Match the SUN course terms.',
                pairs: [
                    { label: 'Recurrent', answer: 'Repeated episodes separated by ≥3 months of inactivity off treatment' },
                    { label: 'Chronic', answer: 'Persistent, relapsing within 3 months of stopping treatment' },
                    { label: 'Acute', answer: 'Sudden onset, limited duration' }
                ],
                explain: 'About half of AAU is idiopathic; HLA-B27-associated disease is the commonest identifiable type.'
            },
            {
                phase: '7. Treatment',
                type: 'mcq',
                question: 'How would you treat this case?',
                options: [
                    'Check IOP first (high → think herpes; baseline). Prednisolone acetate hourly until a 2-step improvement, then QID until quiet, tapering over ~5 weeks; cycloplegic; review next day; refer if bilateral, chronic or recurrent.',
                    'Start FML BD (milder steroids avoid steroid response in young men) and cyclopentolate TDS; check IOP only at 6 weeks, when steroid response appears; stop the steroid once symptoms ease; refer only if vision falls below 6/12.',
                    'Start prednisolone acetate QID and stop it abruptly after a week, plus pilocarpine 1% BD to prevent posterior synechiae; check IOP at 1 month; refer every case to ophthalmology for systemic work-up.',
                    'Start chloramphenicol QID and atropine BD until the cause is known, adding a steroid only after the GP’s HLA-B27 result returns; review in a week; refer to ophthalmology if cells persist at one month.'
                ],
                answer: 0,
                explain: 'Shake the bottle; space drops.'
            },
            {
                phase: '8. IOP rises',
                type: 'mcq',
                question: 'The IOP rises during treatment. What would you do?',
                options: [
                    'Latanoprost nocte as the most effective drop; PGAs are fine in uveitis once the steroid is on board; no need to co-manage.',
                    'Timolol 0.5% BD (if no contraindication) or brimonidine/a CAI; avoid PGAs; consider steroid response vs trabeculitis; co-manage.',
                    'Stop the steroid immediately and observe, since IOP always falls within 48 hours of stopping; drops aren’t needed in uveitis.',
                    'Pilocarpine 2% QID to open the outflow pathway, which inflammation has closed; continue the steroid unchanged.'
                ],
                answer: 1,
                explain: 'Timolol side effects: bradycardia, bronchospasm, fatigue, depression, masking hypoglycaemia, impotence.'
            }
        ]
    },
    {
        id: 'cs16-hsv',
        category: 'cornea',
        title: 'Dendrite in a Patient with Cold Sores',
        theme: 'HSV Keratitis',
        years: ['Case studies 2016'],
        patient: '55-year-old man with frequent cold sores. No CL wear or trauma.',
        stem: 'Woke with a sore, red, watery, photophobic left eye. Reduced VA left.',
        exhibit: 'Dendritic ulcer with terminal bulbs: the ulcer bed stains with fluorescein, the borders with rose bengal.',
        steps: [
            {
                phase: '1. Measurements',
                type: 'mcq',
                question: 'Why check the IOP and dilate in this case?',
                options: [
                    'IOP is checked only to screen for unrelated glaucoma; dilation is done to measure the dendrite more accurately under a larger pupil.',
                    'IOP can be very high in herpetic keratouveitis (trabeculitis); with uveitis or high IOP, dilate to exclude posterior involvement (acute retinal necrosis).',
                    'IOP is always low in HSV (ciliary shutdown), so a low reading confirms the diagnosis; dilation is avoided because it spreads the virus from the cornea to the iris and lens.',
                    'IOP and dilation are only needed before starting a steroid; in epithelial HSV they add nothing and can be skipped until the review.'
                ],
                answer: 1,
                explain: 'Check corneal sensation too.'
            },
            {
                phase: '2. Acanthamoeba?',
                type: 'mcq',
                question: 'Why is Acanthamoeba in your differentials, and how would you tell it apart?',
                options: [
                    'It isn’t a realistic differential: Acanthamoeba never causes epithelial lesions, only a deep ring infiltrate, and it occurs only after fungal or vegetable-matter trauma.',
                    'Early Acanthamoeba gives a pseudodendrite. Suspect it with CL wear, water exposure, pain out of proportion, radial perineural infiltrates, a later ring infiltrate and poor response to antivirals.',
                    'Acanthamoeba gives true dendrites with terminal bulbs and reduced sensation, so it can be told apart only by culture; it is typically painless early and responds partly to topical antivirals.',
                    'Acanthamoeba always presents with a hypopyon and a large central abscess on day 1; it is told apart by its rapid onset over hours in non-CL wearers.'
                ],
                answer: 1,
                explain: 'Confirm with culture (non-nutrient agar), PCR or confocal microscopy in hospital.'
            },
            {
                phase: '3. Aciclovir side effects',
                type: 'multi',
                question: 'Side effects of aciclovir?',
                options: [
                    'Topical: punctate epitheliopathy, stinging, follicular conjunctivitis, punctal stenosis with prolonged use',
                    'Oral: nausea, vomiting, diarrhoea, headache, dizziness',
                    'Oral: renal toxicity (crystal nephropathy) — dose-adjust in renal impairment; keep hydrated',
                    'Oral: confusion or hallucinations, mainly in older patients or renal impairment',
                    'Topical: steroid-like IOP rise within a few weeks'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Hypersensitivity is the main contraindication.'
            },
            {
                phase: '4. Alternatives',
                type: 'mcq',
                question: 'What if topical aciclovir isn’t available, and what if that isn’t possible either?',
                options: [
                    'Topical prednisolone acetate QID to stop the immune reaction, since epithelial HSV is mainly inflammatory rather than viral; or a bandage contact lens alone until it heals, with no antiviral at all.',
                    'Topical ganciclovir 0.15% gel, or oral aciclovir 400 mg 5×/day via GP (or valaciclovir). Or debride the infected epithelium (wiping from outside in) with prophylactic chloramphenicol until healed.',
                    'Topical chloramphenicol QID alone, since most dendrites heal without antivirals; or debride centrally outwards with a cotton bud to spread the drug.',
                    'Oral aciclovir 400 mg BD for 12 months (HEDS) as the only option, since ganciclovir gel isn’t used for epithelial disease and debridement spreads the virus.'
                ],
                answer: 1,
                explain: 'Debridement removes most of the viral load.'
            },
            {
                phase: '5. Not healing',
                type: 'match',
                question: 'Treatment isn’t working. Match each possibility to its features.',
                pairs: [
                    { label: 'Geographic ulcer', answer: 'Widened amoeboid ulcer with scalloped, active borders — still live virus' },
                    { label: 'Metaherpetic (neurotrophic) ulcer', answer: 'Smooth-edged, grey, oval defect; reduced sensation; no live virus' },
                    { label: 'Wrong diagnosis', answer: 'Think Acanthamoeba: swab/culture' },
                    { label: 'Drug toxicity', answer: 'Diffuse punctate epitheliopathy after long antiviral use' }
                ],
                distractors: ['Shield ulcer'],
                explain: 'Neurotrophic ulcers need lubrication, stopping toxic drops, and sometimes a bandage lens, amniotic membrane or tarsorrhaphy — refer.'
            },
            {
                phase: '6. Recurrence & HEDS',
                type: 'mcq',
                question: 'It resolves. How often does it recur, and what does HEDS say about prophylaxis?',
                options: [
                    'HEDS: ~5% recurrence in 12 months on placebo vs 4% on aciclovir 400 mg BD (no real difference), so prophylaxis is used only after stromal disease. Adding oral to topical treatment halved epithelial healing time.',
                    'HEDS: ~32% recurrence in 12 months on placebo vs 19% on aciclovir 400 mg BD (about halved); stromal benefit mainly with previous stromal disease. Adding oral to topical for epithelial disease gave no extra benefit.',
                    'HEDS: ~32% recurrence in 12 months on placebo vs 50% on aciclovir 400 mg BD (prophylaxis increased recurrence by selecting resistant virus), so it is avoided. Oral plus topical halved healing time.',
                    'HEDS: topical steroid prophylaxis (FML BD for 12 months) halved recurrences of both epithelial and stromal disease; oral aciclovir wasn’t tested, so antiviral prophylaxis isn’t recommended after HSV.'
                ],
                answer: 1,
                explain: 'Offer prophylaxis for frequent or sight-threatening recurrences.'
            },
            {
                phase: '7. Stromal & endothelial',
                type: 'viva',
                question: 'If this were stromal, or endothelial, HSV — what would it look like and how would you treat it differently?',
                points: [
                    'Immune stromal keratitis: stromal haze/infiltrate, neovascularisation, ghost scars, usually intact epithelium; T-cell mediated',
                    'Necrotising stromal keratitis: dense white infiltrate, ulceration, thinning (direct viral invasion) — refer',
                    'Endotheliitis: disciform (round) stromal oedema over KPs, no infiltrate or vessels; can be diffuse or linear',
                    'Treatment: topical steroid (e.g. prednisolone acetate, slow taper over ~10 weeks) under oral aciclovir 400 mg BD cover; co-manage',
                    'HEDS: steroid reduced failure of stromal keratitis (26% vs 73%)'
                ],
                explain: 'Oral is used because topical antivirals don’t penetrate the stroma well.'
            }
        ]
    },
    {
        id: 'cs16-mk-ew',
        category: 'cornea',
        title: 'Extended-Wear Lens Wearer with a Staining Lesion',
        theme: 'Microbial Keratitis',
        years: ['Case studies 2016'],
        patient: '35-year-old man, occasional extended-wear CL wearer.',
        stem: 'Pain, redness, tearing and blurred vision. The corneal lesion lights up with fluorescein; possible stromal glow; irregular pupil.',
        steps: [
            {
                phase: '1. History',
                type: 'multi',
                question: 'Which history questions matter?',
                options: [
                    'Onset and pain severity, photophobia',
                    'Lens type, overnight wear, hygiene, case care, solution',
                    'Water exposure: swimming, showering in lenses, tap water rinsing',
                    'Trauma, vegetable matter',
                    'General health, medications, allergies',
                    'Family history of glaucoma or keratoconus'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Water exposure raises Acanthamoeba suspicion; vegetable matter, fungal.'
            },
            {
                phase: '2. HSV mimic',
                type: 'mcq',
                question: 'Why can HSV necrotising stromal keratitis look like MK?',
                options: [
                    'It can’t: necrotising stromal HSV never has an epithelial defect, so fluorescein always separates it from MK.',
                    'It can have an overlying epithelial defect, dense stromal infiltrate with oedema, KPs, hypopyon and synechiae.',
                    'It is always bilateral with true dendrites, which is what makes it look like a contact lens infection.',
                    'It has terminal bulbs at the edge of the infiltrate, which is mistaken for the feathery edge of MK.'
                ],
                answer: 1,
                explain: 'History of HSV, reduced sensation and stromal scarring help. Culture when unsure.'
            },
            {
                phase: '3. Why Pseudomonas?',
                type: 'mcq',
                question: 'Why is Pseudomonas most associated with CL wear?',
                options: [
                    'It is part of the normal corneal flora and becomes invasive only when lenses cause dry eye and exposure; overnight wear doesn’t change the risk compared with daily wear.',
                    'It thrives in water and cases, adheres to lenses and hypoxic epithelium, forms biofilms and makes stroma-destroying proteases; overnight wear multiplies the risk.',
                    'It is resistant to all lens solutions and antibiotics, so it outlasts other organisms; daily disposables carry the highest risk.',
                    'It is a fungus that grows in lens cases and tap water and is carried into the eye on the lens surface; hydrogen peroxide systems and daily disposables increase the risk.'
                ],
                answer: 1,
                explain: 'Overnight wear raises MK risk about 5× (or more) over daily wear.'
            },
            {
                phase: '4. Regimen',
                type: 'mcq',
                question: 'What ciprofloxacin regimen do you start?',
                options: [
                    'Day 1: q15min for 1 h, then hourly while awake (no night doses); day 2: 2-hourly; day 3 onward: QID for exactly 7 days. He can continue CL wear in the other eye; review at 1 week.',
                    'Day 1: q15min for 6 h, then q30min (overnight too); day 2: hourly; day 3: 2-hourly by day, 4-hourly at night; then 4-hourly until healed and ~3 days beyond. Stop CL wear; review next day.',
                    'Day 1: q30min for 6 h, then hourly (overnight too); day 2: 4-hourly; day 3 onward: BD until healed and a week beyond. Stop CL wear in both eyes; review at 72 hours unless pain increases.',
                    'Day 1: q15min for 6 h, then q30min (overnight too); day 2: hourly; day 3 onward: once daily for a week, since ciprofloxacin has a long tissue half-life. Stop CL wear; review next day.'
                ],
                answer: 1,
                explain: 'Taper by response, not by the calendar, and never below QID.'
            },
            {
                phase: '5. Pain',
                type: 'mcq',
                question: 'How do you manage his pain?',
                options: [
                    'Topical anaesthetic (e.g. oxybuprocaine) to use at home as needed for a few days, plus sunglasses; cycloplegics add little for corneal pain.',
                    'Cycloplegic (homatropine 2% or atropine 1% BD) for ciliary spasm, oral analgesia (paracetamol, ibuprofen if no contraindication) and sunglasses.',
                    'Prednisolone acetate QID to reduce the inflammatory pain, plus paracetamol; cycloplegics are avoided because they hide AC cells.',
                    'Pilocarpine 1% BD to relieve the ciliary spasm, plus ice packs; oral analgesics are avoided because they mask worsening.'
                ],
                answer: 1,
                critical: true,
                explain: 'Never give topical anaesthetic to take home: it delays healing and can cause corneal melt.'
            },
            {
                phase: '6. Worse or better',
                type: 'match',
                question: 'Match each next-day scenario to the action.',
                pairs: [
                    { label: 'Worse, cultures negative', answer: 'Re-culture, switch to fortified therapy (refer), consider fungal/Acanthamoeba' },
                    { label: 'Worse, cultures positive', answer: 'Check sensitivities; change or add antibiotic (e.g. fortified dual therapy)' },
                    { label: 'Better', answer: 'Smaller, sharper infiltrate, less AC reaction, less pain → taper slowly, never below QID' }
                ],
                explain: 'Infiltrates typically stabilise in 24–48 h on the right drug.'
            },
            {
                phase: '7. Lens advice',
                type: 'mcq',
                question: 'What is true about modality and risk?',
                options: [
                    'Daily disposables carry the biggest risk because of more handling; silicone hydrogels have 5× the infection rate of hydrogels; overnight wear doesn’t change the risk at all.',
                    'Overnight wear carries the biggest risk (~5×). Silicone hydrogels have similar infection rates but more infiltrates; dailies have similar MK incidence but milder disease.',
                    'Hydrogels carry the biggest risk because of low oxygen; silicone hydrogels eliminated MK; dailies have no infection risk if hands are washed.',
                    'Extended wear is safest because the lens isn’t handled; dailies carry the most severe disease; silicone hydrogels and hydrogels are identical for infiltrates.'
                ],
                answer: 1,
                explain: 'Consider stopping overnight wear permanently after MK.'
            }
        ]
    },
    {
        id: 'cs16-adenoviral',
        category: 'conj',
        title: 'Red Eye After a Sore Throat',
        theme: 'Adenoviral Conjunctivitis',
        years: ['Case studies 2016'],
        patient: '25-year-old woman, non-CL wearer.',
        stem: 'Unilateral red eye, recently unwell with a sore throat and malaise; people around her have been sick.',
        steps: [
            {
                phase: '1. Findings',
                type: 'reveal',
                text: 'Tender pre-auricular node. Everted lids: follicles. AC quiet. No subepithelial infiltrates yet. Watery discharge.'
            },
            {
                phase: '2. EKC vs PCF',
                type: 'match',
                question: 'Match each feature to EKC or PCF.',
                pairs: [
                    { label: 'Adults 20–40, corneal involvement in ~80%, SEIs around 10–14 days, pseudomembranes', answer: 'Epidemic keratoconjunctivitis' },
                    { label: 'Children, fever and pharyngitis, cornea rarely involved', answer: 'Pharyngoconjunctival fever' }
                ],
                distractors: ['Chlamydial conjunctivitis'],
                explain: 'Both are highly contagious adenoviral infections.'
            },
            {
                phase: '3. Chlamydia vs adenovirus',
                type: 'mcq',
                question: 'Both give follicles. How do you separate chlamydial from adenoviral conjunctivitis?',
                options: [
                    'By the follicles alone: adenovirus gives follicles only on the upper tarsus and chlamydia only on the lower, so history, sexual health questions and PCR add nothing once the lids are everted.',
                    'Mostly history and course: adenovirus is acute with sick contacts and settles in 2–3 weeks; chlamydia is chronic (>3 weeks), sexually acquired, with large inferior follicles and pannus. PCR confirms.',
                    'Chlamydia is always bilateral and acute with a sore throat and fever; adenovirus is unilateral and chronic over months with pannus. A Gram stain of the discharge confirms adenovirus.',
                    'Adenovirus causes a hypopyon and a corneal ulcer, whereas chlamydia never involves the cornea or lymph nodes. Bacterial culture on blood agar confirms chlamydia within 24–48 hours.'
                ],
                answer: 1,
                explain: 'Swab anything that doesn’t follow the expected course.'
            },
            {
                phase: '4. Contagious period',
                type: 'mcq',
                question: 'How long is she contagious, and what is your advice?',
                options: [
                    'Incubation 24 hours; contagious only for the first 2 days. She can return to work after 48 hours, and hand hygiene isn’t needed once the watery discharge stops.',
                    'Incubation 5–12 days; shedding up to ~2 weeks. Stay off work/school while red and watery (~10–14 days); hand hygiene, no shared towels, no CLs, discard eye make-up.',
                    'Not contagious once treated with chloramphenicol for 24 hours; return to work then. Contact lenses can be worn once the discharge clears.',
                    'Spread only by air (coughing); stay home for 3 days and wear a mask. Sharing towels is safe because adenovirus dies within minutes on fabric.'
                ],
                answer: 1,
                explain: 'Disinfect clinic surfaces and tonometers afterwards.'
            },
            {
                phase: '5. Management options',
                type: 'mcq',
                question: 'Management, and what is the povidone-iodine option?',
                options: [
                    'Chloramphenicol QID for a week to prevent secondary infection and shorten the illness; review at 3 weeks. Povidone-iodine is an oral antiviral given via the GP for severe adenoviral cases, at any age, including pregnant women and infants.',
                    'Supportive (cold compresses, PF lubricants, hygiene); review at ~7–10 days for SEIs. Some offer an in-office dilute povidone-iodine wash to shorten it — not for the very young or old, iodine allergy or thyroid disease.',
                    'Oral aciclovir via the GP to shorten viral shedding, plus lubricants and cold compresses; review at 2 weeks. Povidone-iodine is a nightly drop used at home for 2 weeks, suitable for all ages.',
                    'Prednisolone acetate QID from day 1 to prevent SEIs, with lubricants; review at a month. Povidone-iodine is used undiluted with alcohol to kill the virus quickly, and suits any patient including infants.'
                ],
                answer: 1,
                explain: 'Evidence for povidone-iodine is mixed; present it as an option.'
            },
            {
                phase: '6. SEIs & steroid',
                type: 'mcq',
                question: 'SEIs appear and reduce VA. What do you do, and what do you watch for?',
                options: [
                    'Prednisolone acetate hourly for 3 days, then stop abruptly; SEIs don’t rebound once cleared, and IOP checks are only needed after 6 months of continuous steroid use in adults or children.',
                    'Mild steroid (e.g. FML or fluorometholone acetate QID) once the acute phase passes, then a very slow taper (rebound is common); watch IOP (response at 2–4 weeks, earlier in children).',
                    'Ciprofloxacin QID, since SEIs are bacterial superinfection; steroids are avoided because they make SEIs permanent and raise IOP within days.',
                    'Nothing: SEIs always fade within a week or two, and steroids prolong viral shedding and lock in the opacities, so they are contraindicated in adenovirus at any stage of the disease.'
                ],
                answer: 1,
                explain: 'Untreated SEIs can persist for weeks to months and drop VA (to ~6/18); steroids suppress but don’t shorten the underlying course.'
            }
        ]
    },
    {
        id: 'cs16-vkc',
        category: 'allergy',
        title: 'Itchy 8-Year-Old with Falling Vision',
        theme: 'Vernal Keratoconjunctivitis',
        years: ['Case studies 2016'],
        patient: '8-year-old boy.',
        stem: 'Reduced distance vision for 4 months. Itching, tearing, sticky mucus, red eyes, photophobia.',
        exhibit: 'Everted upper lid: giant cobblestone papillae with stringy mucus.',
        steps: [
            {
                phase: '1. VKC vs perennial vs AKC',
                type: 'match',
                question: 'Match each condition to its typical profile.',
                pairs: [
                    { label: 'Vernal keratoconjunctivitis', answer: 'Boys under ~12, warm climates, seasonal (spring/summer), giant upper papillae, Horner–Trantas dots, shield ulcer' },
                    { label: 'Perennial allergic conjunctivitis', answer: 'Year-round (dust mite, pets), mild, no corneal involvement' },
                    { label: 'Atopic keratoconjunctivitis', answer: 'Adults 30–50 with eczema, thickened fissured lids, scarring, year-round' }
                ],
                distractors: ['GPC from contact lenses'],
                explain: 'Trantas dots: white clumps of degenerated epithelial cells and eosinophils at the limbus.'
            },
            {
                phase: '2. Reduced VA',
                type: 'multi',
                question: 'Why might his vision be down?',
                options: [
                    'Shield ulcer / plaque',
                    'Punctate keratopathy and mucus',
                    'Keratoconus (eye rubbing, atopy)',
                    'Steroid-induced cataract or glaucoma if previously treated',
                    'Uncorrected refractive error',
                    'Posterior uveitis associated with atopy'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Check topography and refraction once the surface settles.'
            },
            {
                phase: '3. Pathophysiology & prognosis',
                type: 'mcq',
                question: 'Pathophysiology and prognosis?',
                options: [
                    'Type III immune-complex hypersensitivity to Staph antigens. Most persist lifelong and worsen with age into adulthood; linked with rosacea and blepharitis rather than atopy.',
                    'Combined type I (IgE, mast cells) and type IV (T-cell, eosinophil) hypersensitivity. Most resolve around puberty; a few progress to AKC; linked with atopy and keratoconus.',
                    'A chronic adenoviral infection of the tarsal conjunctiva. Most resolve within weeks with antivirals; linked with pharyngitis and fever in children.',
                    'An autoimmune vasculitis of the conjunctiva (type II). Most progress to scleritis by adulthood; linked with rheumatoid arthritis and lupus.'
                ],
                answer: 1,
                explain: 'That is why mast-cell stabilisers alone often aren’t enough in active disease.'
            },
            {
                phase: '4. Management',
                type: 'mcq',
                question: 'How would you manage him?',
                options: [
                    'Chloramphenicol QID long-term to prevent shield ulcers, plus oral antihistamines via the pharmacy; avoid topical steroids entirely in children because of cataract risk, and treat any shield ulcer with a bandage CL alone until it heals over several weeks.',
                    'Avoid allergens, compresses, lubricants, no rubbing; dual-acting antihistamine BD before the season; pulsed steroid for flares with IOP checks; ciclosporin via ophthalmology; for a shield ulcer, steroid + antibiotic and refer.',
                    'Oral prednisolone via the GP each spring for 3 months, plus cold compresses and allergen avoidance; topical drops are avoided in children because of preservative toxicity; shield ulcers need a bandage CL.',
                    'Dexamethasone QID year-round to keep the papillae flat, with IOP checks every 2 years; mast-cell stabilisers add nothing once giant papillae form; a shield ulcer is debrided by the optometrist and patched.'
                ],
                answer: 1,
                explain: 'Children are more prone to steroid response; check IOP regularly.'
            }
        ]
    },
    {
        id: 'cs16-episcleritis',
        category: 'conj',
        title: 'Sectoral Red Eye in a 47-Year-Old',
        theme: 'Episcleritis vs Scleritis',
        years: ['Case studies 2016'],
        patient: '47-year-old woman.',
        stem: 'Walks in with a red eye.',
        exhibit: 'Photo: sectoral bright-red injection temporally; no discharge.',
        steps: [
            {
                phase: '1. History',
                type: 'multi',
                question: 'Which history questions matter?',
                options: [
                    'Pain severity (does it wake her? radiate to the temple/jaw?)',
                    'Previous episodes',
                    'Systemic disease: rheumatoid arthritis, IBD, lupus, gout; infections (herpes zoster, TB, syphilis)',
                    'Vision change, photophobia, discharge',
                    'Medications (e.g. bisphosphonates)',
                    'Family history of glaucoma'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Around a third of episcleritis cases have an associated systemic condition; more for scleritis.'
            },
            {
                phase: '2. Phenylephrine test',
                type: 'mcq',
                question: 'How does phenylephrine help separate episcleritis from scleritis?',
                options: [
                    'Phenylephrine blanches the deep scleral vessels within a minute but not the episcleral ones; it is episcleritis that is the bluish-purple, tender and very painful condition.',
                    'Phenylephrine 2.5–10% blanches superficial episcleral vessels within ~10–15 min; deep scleral vessels don’t blanch. Scleritis is also bluish-purple, deep, tender and very painful.',
                    'Phenylephrine dilates the pupil so the AC can be checked; uveitis rather than vessel blanching is what separates scleritis from episcleritis.',
                    'Phenylephrine stains inflamed sclera yellow under cobalt blue light; episcleral tissue doesn’t stain, so the colour change separates the two.'
                ],
                answer: 1,
                explain: 'Use daylight to see the bluish hue of scleritis.'
            },
            {
                phase: '3. Episcleritis types',
                type: 'mcq',
                question: 'Simple vs nodular episcleritis?',
                options: [
                    'Simple (~25%): a fixed, immobile, tender nodule that peaks over several weeks. Nodular (~75%): sectoral or diffuse redness lasting only hours; nodular episcleritis can become necrotising and perforate.',
                    'Simple (~75%): sectoral or diffuse, peaks in ~12 h, fades over days, often recurrent. Nodular: tender mobile nodule(s), slower onset and longer course — exclude a foreign body or granuloma.',
                    'Simple: always bilateral and painless, lasting months, with a fixed nodule. Nodular: always unilateral, with severe boring pain that wakes the patient at night, needing oral steroids via the GP.',
                    'They are the same condition at different stages: simple episcleritis always becomes nodular within a week if untreated, and nodular disease then progresses to anterior scleritis in most patients.'
                ],
                answer: 1,
                explain: 'Episcleritis typically affects young-to-middle-aged women.'
            },
            {
                phase: '4. Scleritis types',
                type: 'viva',
                question: 'Briefly, what are the types of scleritis?',
                points: [
                    'Anterior non-necrotising: diffuse or nodular (immobile, deep, bluish nodule)',
                    'Necrotising with inflammation: severe pain, older patients, often bilateral, systemic vasculitis/RA — sight- and life-threatening',
                    'Scleromalacia perforans: necrotising without inflammation, painless thinning (long-standing RA)',
                    'Posterior scleritis: pain, reduced vision, choroidal folds, disc oedema, exudative RD, proptosis',
                    'All scleritis needs referral (oral NSAIDs, steroids or immunosuppression)'
                ],
                explain: 'Scleritis pain often wakes the patient in the early morning.'
            },
            {
                phase: '5. Management & prognosis',
                type: 'mcq',
                question: 'Management and prognosis of episcleritis?',
                options: [
                    'Oral prednisolone via the GP for 3 months to prevent recurrence; topical steroids are ineffective in episcleritis because they don’t reach the episclera; most cases last over a year without oral treatment.',
                    'Often self-limiting (~3 weeks). Cold compresses, lubricants; mild topical steroid (e.g. FML QID, tapering) if symptomatic, after excluding herpes; oral NSAID via GP if nodular or persistent. Warn of recurrence.',
                    'Chloramphenicol QID and oral antibiotics via the GP, since episcleritis is a bacterial infection of the episclera (usually staphylococcal); recurrence is rare once treated, and steroids worsen it.',
                    'Urgent ophthalmology referral for every case, since episcleritis and scleritis can’t be told apart clinically; no treatment until the specialist review, as even lubricants mask the signs of scleritis.'
                ],
                answer: 1,
                explain: 'Topical steroids can cause rebound if stopped abruptly; taper.',
                recall: 'The 2016 notes say oral ibuprofen 600 mg QID and “no oral steroids because of a 10% increase in recurrence”. Doses vary; the key point for the exam is that oral NSAIDs come from the GP, not the optometrist.'
            }
        ]
    },
    {
        id: 'cs16-hzo',
        category: 'cornea',
        title: 'Blurry Eye, Headache and Fevers',
        theme: 'Herpes Zoster Ophthalmicus',
        years: ['Case studies 2016'],
        patient: '64-year-old Chinese man.',
        stem: 'Five days of increasingly blurry right vision with redness, watering, discharge, photophobia and headache. Malaise and subjective fevers.',
        exhibit: 'Raised, blunt pseudodendrites on the cornea; vesicular crusting rash on the right forehead.',
        steps: [
            {
                phase: '1. HZO vs HSV',
                type: 'match',
                question: 'Match each feature to HZO or HSV.',
                pairs: [
                    { label: 'Raised, “stuck-on”, blunt pseudodendrites without end bulbs, stain poorly with fluorescein', answer: 'Herpes zoster' },
                    { label: 'Delicate branching ulcer with terminal bulbs, bright fluorescein staining', answer: 'Herpes simplex' }
                ],
                distractors: ['Acanthamoeba'],
                explain: 'Zoster: dermatomal, severe pain, older, iris atrophy, rarely recurs.'
            },
            {
                phase: '2. Timeline',
                type: 'match',
                question: 'Match each zoster eye complication to when it typically appears.',
                pairs: [
                    { label: 'Prodrome (fever, malaise, tingling)', answer: 'Days before the rash' },
                    { label: 'Punctate keratitis / pseudodendrites', answer: 'Within a few days of the rash' },
                    { label: 'Nummular (coin-shaped anterior stromal) keratitis', answer: 'Around 10 days to 3 weeks' },
                    { label: 'Disciform keratitis / endotheliitis', answer: 'Months later' },
                    { label: 'Post-herpetic neuralgia', answer: 'Pain persisting after the rash heals (common over 70)' }
                ],
                explain: 'Also: uveitis with sectoral iris atrophy and raised IOP, scleritis, cranial nerve palsies, neurotrophic keratopathy, ARN/PORN.'
            },
            {
                phase: '3. Pathophysiology',
                type: 'mcq',
                question: 'What is the pathophysiology?',
                options: [
                    'VZV is a primary infection of the cornea caught from someone with chickenpox; it then spreads up the trigeminal nerve to the skin of the forehead, which is why the rash follows the eye involvement.',
                    'After chickenpox, VZV lies latent in sensory ganglia (here the trigeminal). With waning cell-mediated immunity it reactivates down V1, causing a dermatomal rash and painful perineuritis.',
                    'After cold sores, HSV transforms into VZV in the facial nerve ganglion; it reactivates down V2, causing a rash on the cheek and a painless dermatitis.',
                    'VZV is a bacterial superinfection of an old chickenpox scar; it spreads through the skin rather than nerves, so it doesn’t respect the midline.'
                ],
                answer: 1,
                explain: 'Hutchinson’s sign (tip of nose, nasociliary nerve) strongly predicts eye involvement.'
            },
            {
                phase: '4. Management',
                type: 'mcq',
                question: 'How would you manage him?',
                options: [
                    'Topical aciclovir 3% 5×/day prescribed by you for both the eye and the skin, plus oral prednisolone via the GP to prevent neuralgia; oral antivirals are only for patients over 80 or the immunosuppressed; no contact precautions are needed once the rash appears.',
                    'Same-day GP referral for oral antiviral (aciclovir 800 mg 5×/day, or valaciclovir/famciclovir), ideally within 72 h; screen for immunosuppression; skin care, lubricants; steroid only for stromal disease or uveitis; avoid vulnerable contacts.',
                    'Oral aciclovir 400 mg BD for 12 months via the GP (as in HEDS), started any time in the first month; topical prednisolone from day 1 to prevent scarring; lubricants; no need to avoid anyone, since zoster isn’t contagious.',
                    'No antiviral (it is self-limiting in immunocompetent adults); cool compresses, lubricants and analgesia only; topical steroid QID for comfort; contagious only to people who have already had chickenpox, so no precautions.'
                ],
                answer: 1,
                explain: 'Antivirals within 72 h reduce acute pain, viral shedding and ocular complications.'
            },
            {
                phase: '5. Vaccination',
                type: 'mcq',
                question: 'What do you know about zoster vaccination in Australia?',
                options: [
                    'Zostavax (live, 1 dose) is the funded vaccine for everyone over 50; it is contraindicated after an episode of shingles, has to be repeated every 5 years to stay effective, and doesn’t affect post-herpetic neuralgia at all.',
                    'Shingrix (recombinant, 2 doses) is recommended for older adults and NIP-funded for eligible groups (e.g. 65+, First Nations 50+, some immunocompromised adults); it reduces shingles and PHN. Check current criteria.',
                    'There is no zoster vaccine in Australia; the childhood chickenpox vaccine (Varivax) is given again to adults with HZO to treat the active infection, and it shortens post-herpetic neuralgia.',
                    'Shingrix is only for children who missed the chickenpox vaccine; adults over 65 can’t receive it because the immune response is too weak, so Zostavax is funded for them every 5 years instead.'
                ],
                answer: 1,
                explain: 'The live Zostavax vaccine was replaced by Shingrix on the NIP in 2023.'
            }
        ]
    },
    {
        id: 'cs16-aac',
        category: 'glaucoma',
        title: 'Sudden Pain, Vomiting and Rainbow Haloes',
        theme: 'Acute Angle Closure',
        years: ['Case studies 2016'],
        patient: 'Middle-aged woman, non-CL wearer.',
        stem: 'Sudden severe eye and head pain, nausea and vomiting, tearing, redness, photophobia, hazy vision and rainbow haloes.',
        steps: [
            {
                phase: '1. Signs',
                type: 'multi',
                question: 'Typical signs of AAC?',
                options: [
                    'Mid-dilated non-reactive pupil (ischaemic sphincter paralysis)',
                    'Corneal oedema',
                    'IOP very high; eye feels hard',
                    'Conjunctival and ciliary injection',
                    'Glaukomflecken and PAS (signs of previous or established attacks)',
                    'Deep anterior chamber'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'The AC is shallow.'
            },
            {
                phase: '2. Risk factors',
                type: 'multi',
                question: 'Risk factors for angle closure?',
                options: [
                    'Female',
                    'Hyperopia (short axial length)',
                    'Older age / thicker lens',
                    'East Asian or Inuit ancestry',
                    'Family history; previous attack in the other eye; plateau iris',
                    'High myopia'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Triggers: dim light, stress, sympathomimetics, anticholinergics, topiramate (bilateral ciliochoroidal effusion), dilation.'
            },
            {
                phase: '3. Acetazolamide',
                type: 'mcq',
                question: 'How do you get acetazolamide, and when is it contraindicated?',
                options: [
                    'Endorsed optometrists can prescribe it for angle closure, so write a script for 500 mg stat for the local pharmacy to dispense; the contraindications are asthma, bradycardia and heart block, the same as for timolol.',
                    'Via the ophthalmologist or a GP/ED doctor (a pharmacist can supply on a doctor’s phone order in urgent cases): 500 mg orally if no sulfonamide allergy, hypokalaemia, severe renal/hepatic disease or severe COPD.',
                    'Over the counter from any pharmacy as a Pharmacist Only medicine: 250 mg every 15 minutes until IOP falls below 30 mmHg; it is contraindicated only in pregnancy and in children under 12.',
                    'It isn’t used for AAC any more because topical CAIs replaced it; if needed, the ED gives it IV only (500 mg), and it is contraindicated in diabetes alone, since it raises blood glucose sharply.'
                ],
                answer: 1,
                explain: 'Topically: timolol 0.5%, brimonidine 0.2%, brinzolamide 1%, ~2 minutes apart; prednisolone acetate if inflamed.'
            },
            {
                phase: '4. Other measures',
                type: 'multi',
                question: 'Which other measures can help while awaiting the ophthalmologist?',
                options: [
                    'Lying the patient supine (lens may fall back, reducing pupil block)',
                    'Indentation gonioscopy / corneal indentation (on 10 s, off 10 s for about a minute), recheck IOP in 15 minutes',
                    'Analgesia and antiemetic via a doctor',
                    'Pilocarpine 2% only after ophthalmologist agreement (or immediately if your dilation caused it)',
                    'Dilating the pupil to break the block'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Then: YAG LPI 24–48 h after IOP is controlled, plus the fellow eye.'
            },
            {
                phase: '5. Mechanisms',
                type: 'match',
                question: 'Match each mechanism of angle closure to its description.',
                pairs: [
                    { label: 'Pupillary block', answer: 'Iris–lens apposition traps aqueous behind the iris → iris bombé' },
                    { label: 'Plateau iris', answer: 'Anteriorly placed ciliary processes push the peripheral iris into the angle; persists after LPI' },
                    { label: 'Phacomorphic', answer: 'Swollen cataractous lens crowds the anterior segment' },
                    { label: 'Aqueous misdirection (ciliary block)', answer: 'Aqueous diverted into the vitreous, usually after surgery; pilocarpine worsens it' }
                ],
                distractors: ['Pigment dispersion'],
                explain: 'Knowing the mechanism explains why pilocarpine helps in pupil block but harms in lens-related and misdirection closure.'
            }
        ]
    },
    {
        id: 'cs16-pxf-glaucoma',
        category: 'glaucoma',
        title: 'Mild Blur, Poor Dilation and R 23 / L 15',
        theme: 'Pseudoexfoliation Glaucoma',
        years: ['Case studies 2016', 'YO mock'],
        patient: '65-year-old Caucasian man on atorvastatin (Lipitor). Mild blur for a year.',
        stem: 'VA 6/9 OU. Applanation R 23, L 15 mmHg at 10 am. He dilates poorly.',
        exhibit: 'Anterior photo: white material on the pupil margin and anterior lens surface with a clear intermediate zone.',
        steps: [
            {
                phase: '1. Describe the discs',
                type: 'reveal',
                text: 'Discs average size. Vertical C/D R 0.8, L 0.6–0.7 (asymmetry matches the IOP). Right: superior and inferior vessel baring with rim thinning, laminar pores visible. Left: superior vessel baring, inferior rim thinning.'
            },
            {
                phase: '2. Diagnosis & differentials',
                type: 'multi',
                question: 'Most likely diagnosis and differentials?',
                options: [
                    'Pseudoexfoliation glaucoma (most likely)',
                    'POAG',
                    'Angle-closure glaucoma (PXF eyes can have narrow angles)',
                    'Pigment dispersion / pigmentary glaucoma',
                    'True exfoliation (heat/infrared — glassblowers) and amyloidosis',
                    'Neovascular glaucoma (no rubeosis seen)'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'True exfoliation is a lamellar splitting of the capsule; amyloid can deposit on the lens too.'
            },
            {
                phase: '3. Gonioscopy',
                type: 'mcq',
                question: 'What do you expect on gonioscopy?',
                options: [
                    'Dense, homogeneous 360° TM pigment and a Krukenberg spindle, with a deep open angle and a concave iris. PXF by definition has no Sampaolesi line in any quadrant.',
                    'Patchy, uneven TM pigment; Sampaolesi’s line; PXF flakes in the angle; possible narrowing from lax zonules. PDS by contrast has dense, homogeneous pigment.',
                    'A clean unpigmented angle with fine new vessels crossing the scleral spur, because PXF causes angle neovascularisation in most patients.',
                    'A widened ciliary body band with torn iris processes, because PXF weakens the iris root and causes angle recession without trauma.'
                ],
                answer: 1,
                explain: 'Also check for iris TIDs at the pupil margin and loss of the pupillary ruff.'
            },
            {
                phase: '4. Why these signs?',
                type: 'match',
                question: 'Match each sign to its explanation.',
                pairs: [
                    { label: 'Poor pupil dilation', answer: 'PXF material and iris damage (sphincter/dilator, vessel changes) stiffen the iris' },
                    { label: 'Clear intermediate zone on the lens', answer: 'The moving iris rubs the material off the mid-zone of the capsule' },
                    { label: 'Raised IOP', answer: 'Fibrillar material and liberated pigment clog the trabecular meshwork' }
                ],
                distractors: ['Myopic stretching of the iris'],
                explain: 'Genetic predisposition: LOXL1 variants. Material also deposits in heart, lungs, kidneys, skin and blood vessels.'
            },
            {
                phase: '5. Management',
                type: 'mcq',
                question: 'How would you manage him?',
                options: [
                    'Start timolol 0.5% BD (aim 20%; β-blockers control PXG fluctuation best), refer within 12 months, and review yearly once IOP is under 21, since PXG progresses more slowly than POAG.',
                    'Start a PGA nocte (aim ≥30%; PXG is aggressive, and a PGA gives 24-hour control), teach instillation, refer to a glaucoma ophthalmologist, write to the GP, and review ~3-monthly at first.',
                    'Observe for a year to establish the rate of progression before treating (EMGT), since PGAs are less effective in PXG; refer only if the field worsens.',
                    'Start pilocarpine 2% QID to clear PXF material from the meshwork, then refer for trabeculectomy as first line, since drops rarely control PXG.'
                ],
                answer: 1,
                explain: 'EMGT: PXF eyes progressed fastest (about −3.1 dB/yr untreated vs −1.3 in high-tension and −0.4 in NTG).',
                recall: 'Both the 2016 notes and the YO mock notes list “PGA pregnancy category C”. In Australia, latanoprost and the other PGAs are TGA category B3; C is the old US FDA category.'
            },
            {
                phase: '6. PGA side effects & CIs',
                type: 'viva',
                question: 'Side effects and contraindications of PGAs?',
                points: [
                    'Hyperaemia (settles), stinging',
                    'Longer, thicker, darker lashes (reversible); periocular skin darkening',
                    'Iris darkening (permanent, mainly mixed-colour irides)',
                    'Prostaglandin-associated periorbitopathy: fat atrophy, deepened sulcus, enophthalmos',
                    'Relative contraindications: active or past uveitis, HSV keratitis, CMO risk; avoid in pregnancy (B3); hypersensitivity'
                ],
                explain: 'Warn about asymmetry if treating one eye only.'
            },
            {
                phase: '7. Cataract surgery',
                type: 'viva',
                question: 'Discuss the advantages and disadvantages of cataract surgery for this patient.',
                points: [
                    'Advantages: better VA, may lower IOP and deepen the angle',
                    'Disadvantages: weak zonules (dropped lens, phacodonesis, later IOL dislocation)',
                    'Poor dilation makes surgery harder',
                    'Higher risk of post-op IOP spikes and steroid response in glaucoma patients',
                    'More post-op inflammation; tell the surgeon about PXF'
                ],
                explain: 'PXF patients get cataract earlier, so this comes up often.'
            }
        ]
    },
    {
        id: 'cs16-oht-to-poag',
        category: 'glaucoma',
        title: 'OHT at 45, Lost to Follow-up for 15 Years',
        theme: 'OHT → POAG',
        years: ['Case studies 2016'],
        patient: '45-year-old Asian man.',
        stem: 'IOP R 24, L 22 mmHg on a routine exam.',
        steps: [
            {
                phase: '1. History',
                type: 'multi',
                question: 'What questions do you want to ask?',
                options: [
                    'General health: sleep apnoea, thyroid, smoking, diabetes, hypertension (and BP medication)',
                    'Medications, especially steroids (any route)',
                    'Family history of glaucoma',
                    'Refractive history (myopia, hyperopia)',
                    'Eye trauma or surgery',
                    'Contact lens solution brand'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Then: gonioscopy, CCT, OCT, 24-2 fields, slit lamp for secondary causes.'
            },
            {
                phase: '2. Occludable angle',
                type: 'mcq',
                question: 'On gonioscopy, what makes an angle “occludable”?',
                options: [
                    'Ciliary body band visible for less than 180° in primary position, using indentation gonioscopy to decide which quadrants.',
                    'Posterior (pigmented) TM not visible for ≥180° (older definitions ≥270°) in primary position without indentation.',
                    'Any pigment in the angle on gonioscopy, or a Sampaolesi line in two or more quadrants.',
                    'A van Herick grade of 3 or 4 in both eyes, since gonioscopy isn’t needed to define occludability.'
                ],
                answer: 1,
                explain: 'Asian patients have higher rates of angle closure, so gonioscopy matters here.'
            },
            {
                phase: '3. OHTS risk factors',
                type: 'match',
                question: 'OHTS predictors of conversion to POAG — match each to its approximate effect.',
                pairs: [
                    { label: 'Thinner CCT', answer: 'About 70% higher risk per 40 µm thinner' },
                    { label: 'Larger vertical C/D', answer: 'About 30% higher risk per 0.1 larger' },
                    { label: 'Higher IOP', answer: 'About 10% higher risk per 1 mmHg' },
                    { label: 'Older age', answer: 'About 20% higher risk per decade' },
                    { label: 'Higher PSD', answer: 'About 25% higher risk per 0.2 dB' }
                ],
                explain: 'Disc haemorrhage was also a predictor in later OHTS analyses. Treated OHTS patients converted at 4.4% vs 9.5% untreated over 5 years.'
            },
            {
                phase: '4. Plan',
                type: 'mcq',
                question: 'Discs and fields are normal. How would you manage him?',
                options: [
                    'Treat everyone with OHT over 21 mmHg: OHTS showed all untreated OHT converts to glaucoma within 5 years, so start a PGA in both eyes now and aim for a 30% reduction.',
                    'Risk-stratify (OHTS/EGPS). Low risk: monitor every 6–12 months with fields and imaging, then yearly. High risk: treat (PGA, ≥20%) and review 3–6-monthly.',
                    'Discharge to routine 2-yearly care: OHT with normal discs and fields never converts, so risk calculators aren’t needed.',
                    'Refer for prophylactic LPI: raised IOP in an Asian man is presumed angle closure even with open angles on gonioscopy.'
                ],
                answer: 1,
                explain: 'Fingeret’s rule of thumb (an informal heuristic, not a guideline): consider treating at 30 mmHg, lowering the threshold for each major risk factor.'
            },
            {
                phase: '5. 15 years later',
                type: 'reveal',
                text: 'He returns 15 years later. IOP R 28, L 26 mmHg. Right disc: C/D 0.8, deep cupping, visible lamina, beta PPA, inferior, superior and temporal rim thinning, vessel baring. Right 24-2: superior arcuate defect with a clear nasal step, ~19 contiguous depressed points.'
            },
            {
                phase: '6. Stage',
                type: 'mcq',
                question: 'How would you stage the right field, and why?',
                options: [
                    'Early: only one hemifield is affected, and staging systems count hemifields rather than individual points, so a single arcuate defect is always early whatever its depth.',
                    'Severe/advanced (Mills-type): many points depressed at p<5% and p<1%, with points near fixation — name the system and justify with MD and point counts.',
                    'Moderate: nasal steps are always moderate on Mills criteria regardless of depth, so no MD or point counts are needed.',
                    'Can’t be staged: staging requires two eyes with defects for comparison, so a unilateral defect is only described (location, depth, MD) and never given a stage.'
                ],
                answer: 1,
                explain: 'Stage determines target and urgency.'
            },
            {
                phase: '7. Progression risk & target',
                type: 'viva',
                question: 'What are the risk factors for progression, and what target would you choose?',
                points: [
                    'EMGT: higher IOP, worse MD at baseline, bilateral disease, PXF, older age, frequent disc haemorrhages, low ocular perfusion pressure, cardiovascular disease',
                    'Thin CCT and disc haemorrhages after baseline',
                    'Each 1 mmHg lower ≈ 10% less progression risk (EMGT)',
                    'Advanced disease: aim for ≥30% reduction and low-teens; AGIS — IOP always below 18 mmHg showed almost no progression',
                    'Refer promptly; consider SLT or surgery if the target isn’t met'
                ],
                explain: 'Cite the trial behind your number.'
            }
        ]
    },
    {
        id: 'cs16-ntg',
        category: 'glaucoma',
        title: 'Notched Discs at IOP 18/16 with Raynaud’s',
        theme: 'Normal-Tension Glaucoma',
        years: ['Case studies 2016'],
        patient: '50-year-old woman with Raynaud’s disease.',
        stem: 'IOP R 18, L 16 mmHg. Discs: average size, deep cupping, beta PPA, notching (left more than right). No family history.',
        steps: [
            {
                phase: '1. Findings',
                type: 'reveal',
                text: 'Gonioscopy: open to ciliary body band 360°. Fields: right full; left inferior arcuate defect with superior and inferior nasal steps.'
            },
            {
                phase: '2. Differentials',
                type: 'multi',
                question: 'Diagnosis and differentials?',
                options: [
                    'NTG (most likely)',
                    'Undetected POAG (diurnal peaks, thin CCT, systemic β-blockers lowering measured IOP)',
                    'Compressive/neurological optic neuropathy — MRI if atypical',
                    'Previous AION or haemodynamic crisis (non-progressive cupping)',
                    'Optic disc drusen, tilted/anomalous discs',
                    'Retinitis pigmentosa'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Pallor out of proportion to cupping, vertical-midline defects or reduced VA/colour → neuro work-up.'
            },
            {
                phase: '3. NTG features & pathogenesis',
                type: 'mcq',
                question: 'What are typical NTG features and the proposed mechanism?',
                options: [
                    'Small discs with diffuse concentric cupping, no haemorrhages and peripheral field loss. Mechanism: undetected high IOP spikes only — vascular factors such as migraine and Raynaud’s play no role.',
                    'Larger discs, localised (often inferior) notching, PPA, disc haemorrhages, deep defects near fixation. Mechanism: vascular dysregulation (vasospasm, nocturnal hypotension, low perfusion) on top of IOP.',
                    'Pale discs with little cupping and bitemporal loss respecting the vertical midline. Mechanism: chronic compression of the chiasm, which is why every NTG patient needs an MRI first.',
                    'Tilted discs with superotemporal loss crossing the vertical midline and myopic PPA. Mechanism: a refractive scotoma from axial myopia rather than any true optic nerve damage.'
                ],
                answer: 1,
                explain: 'Ask the GP to look for nocturnal hypotension (24-hour BP) and review antihypertensive timing.'
            },
            {
                phase: '4. CNTGS',
                type: 'mcq',
                question: 'What did CNTGS show, and who progresses?',
                options: [
                    'IOP lowering made no difference (35% progressed either way), so NTG is treated with blood-pressure control only; the risk factors for progression were male sex and smoking.',
                    '30% IOP lowering reduced progression (12% vs 35%), but ~65% of untreated eyes didn’t progress over 5 years; risk factors: female, migraine, disc haemorrhage. So risk-stratify.',
                    'Every untreated eye progressed within 5 years (vs 12% treated), so all NTG must be treated at diagnosis; risk factors couldn’t be identified in the study population.',
                    '20% IOP lowering stopped progression completely in all eyes; risk factors: myopia, male sex and high CCT. SLT was the only effective treatment arm in the trial.'
                ],
                answer: 1,
                explain: 'Treat now when progression is documented, there are risk factors, or central fixation is threatened.'
            },
            {
                phase: '5. Drugs',
                type: 'mcq',
                question: 'First and second choices?',
                options: [
                    'First: timolol nocte (it covers the nocturnal pressure peak). Second: pilocarpine QID. Avoid PGAs, which reduce optic nerve perfusion at night and were inferior in NTG (LoGTS).',
                    'First: PGA nocte. Second or adjunct: brimonidine (LoGTS; allergy dropout high). Avoid evening β-blockers (nocturnal hypotension). SLT or surgery if the target isn’t met.',
                    'First: brimonidine (LoGTS proved neuroprotection, so it beats PGAs). Second: timolol at night to cover the nocturnal peak. SLT doesn’t work at all in NTG.',
                    'First: oral acetazolamide long term via the GP, since drops can’t lower IOP from the low teens. Second: latanoprost nocte. Avoid brimonidine in women (LoGTS).'
                ],
                answer: 1,
                explain: 'Monitor 3–6-monthly; refer to a glaucoma ophthalmologist.'
            }
        ]
    },
    {
        id: 'cs16-pds',
        category: 'glaucoma',
        title: 'Krukenberg Spindle and Transillumination Defects',
        theme: 'Pigment Dispersion',
        years: ['Case studies 2016'],
        patient: 'Young adult myope.',
        stem: 'Photo: vertical pigment band on the endothelium and spoke-like iris transillumination defects.',
        steps: [
            {
                phase: '1. Signs',
                type: 'multi',
                question: 'What signs of PDS would you look for?',
                options: [
                    'Krukenberg spindle (convection currents deposit pigment centrally on the endothelium)',
                    'Mid-peripheral slit-like transillumination defects (often inferonasal first)',
                    'Dense homogeneous TM pigment, Sampaolesi’s line, deep AC, concave (posteriorly bowed) iris',
                    'Pigment on the zonules/posterior lens (Zentmayer ring), anisocoria',
                    'White flakes on the lens capsule'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Flakes are PXF.'
            },
            {
                phase: '2. Pathogenesis',
                type: 'mcq',
                question: 'What is the pathogenesis?',
                options: [
                    'Forward pupillary block: the iris bows forward and touches the corneal endothelium, shedding pigment onto it as a spindle; accommodation and exercise reduce the contact and the pigment loss.',
                    'Reverse pupillary block: the iris bows back and its pigment epithelium rubs on the zonules, releasing pigment that clogs the TM; accommodation and exercise increase it.',
                    'Lens material flaking off the anterior capsule and clogging the TM, like PXF; the pigment comes from the lens epithelium rather than the iris, and accommodation increases it.',
                    'Chronic low-grade inflammation of the ciliary body releasing pigmented macrophages into the angle, where they clog the TM; steroids reverse it, and exercise makes it worse.'
                ],
                answer: 1,
                explain: 'Exercise-induced pigment showers can spike IOP and cause haloes.'
            },
            {
                phase: '3. Risk & course',
                type: 'mcq',
                question: 'Risk factors and natural history?',
                options: [
                    'Older (60s–70s), hyperopic, East Asian women; PDS and PG are equally common in both sexes. Nearly all convert to glaucoma within a year, and the disease worsens steadily with age as the lens grows.',
                    'Young (20s–40s), myopic, Caucasian; PDS affects both sexes but PG is more common in men. About a third or fewer convert; IOP >21 at presentation is the biggest risk; it burns out with age.',
                    'Children under 10 with high hyperopia; boys only. Conversion is rare because the pigment clears from the TM with growth, and IOP at presentation doesn’t predict conversion at all.',
                    'Middle-aged Scandinavians with PXF in the other eye; women more than men. About 10% convert; Krukenberg spindles disappear early and IOP rises steadily with age as the lens thickens.'
                ],
                answer: 1,
                explain: 'Follow as a glaucoma suspect; treat aggressively in the active decades if glaucoma develops.'
            },
            {
                phase: '4. Management',
                type: 'viva',
                question: 'How would you manage him?',
                points: [
                    'Dilated fundus exam: higher risk of lattice and retinal detachment (myopes)',
                    'If glaucoma: PGA first line (increases uveoscleral outflow, bypasses pigment-clogged TM)',
                    'SLT at lower energy (pigmented TM, IOP spike risk)',
                    'LPI to flatten the iris is controversial — little long-term benefit',
                    'Miotics flatten the iris but cause myopic shift and RD risk — rarely used',
                    'Monitor IOP, disc, fields; warn about exercise-induced haloes'
                ],
                explain: 'Pigmentary glaucoma is a secondary glaucoma: refer for co-management.'
            }
        ]
    },
    {
        id: 'cs16-secondary-glaucomas',
        category: 'glaucoma',
        title: 'Traumatic, Inflammatory & Steroid Glaucomas',
        theme: 'Secondary Glaucomas',
        years: ['Case studies 2016'],
        patient: 'Several short scenarios.',
        stem: 'The examiner asks about raised IOP after trauma and with inflammation.',
        steps: [
            {
                phase: '1. Early after trauma',
                type: 'match',
                question: 'Match each early post-traumatic cause of raised IOP to its features.',
                pairs: [
                    { label: 'Contusion (trabeculitis)', answer: 'Normal gonioscopy, some cells/flare; brief, settles with steroid ± IOP drops' },
                    { label: 'Hyphaema', answer: 'RBCs clog the TM; large clots can cause pupil block' },
                    { label: 'Trabecular disruption', answer: 'Torn meshwork that can scar and cause later glaucoma' }
                ],
                distractors: ['Pigment dispersion'],
                explain: 'Late: angle recession glaucoma (also iridodialysis, cyclodialysis — which tends to cause LOW IOP).'
            },
            {
                phase: '2. Hyphaema drugs',
                type: 'mcq',
                question: 'Which drugs do you use and avoid in a traumatic hyphaema with raised IOP?',
                options: [
                    'Use: latanoprost and pilocarpine (they increase outflow past the clot), plus aspirin for pain. Avoid: β-blockers and cycloplegics, which raise the rebleed rate and slow clot absorption.',
                    'Use: β-blocker or CAI (not CAIs in sickle cell), cycloplegic, prednisolone acetate QID. Avoid: miotics (pupil block, barrier breakdown), PGAs (inflammation), aspirin and NSAIDs (bleeding).',
                    'Use: topical CAI in all patients including sickle cell (it clears red cells from the TM), plus ibuprofen for pain. Avoid: steroids, which delay clot absorption and cause rebleeds.',
                    'Use: nothing for IOP until day 5, when the rebleed risk has passed; then a PGA. Avoid: all drops, cycloplegics included, since any drop can disturb the clot in the first week.'
                ],
                answer: 1,
                critical: true,
                explain: 'Paracetamol for pain.'
            },
            {
                phase: '3. Angle recession',
                type: 'mcq',
                question: 'Angle recession glaucoma: risk and natural history?',
                options: [
                    'Nearly all recessed angles develop glaucoma within a month (fewer with >180° recession). There is one peak only, in the first week; after a year the risk is gone, so monitoring can stop and the fellow eye needs no checks.',
                    'About 6–9% of recessed angles develop glaucoma (more with >180°). Two peaks: within the first year (medically controllable) and 10+ years later (harder; trabeculectomy succeeds less). Lifelong monitoring.',
                    'Recession lowers IOP by opening a new outflow route through the torn ciliary body, so glaucoma never results; the only risk is hypotony, which peaks around 10 years later.',
                    'About 1% develop glaucoma, and only with 360° recession. It is cured by LPI, which relieves the trauma-induced pupil block, so lifelong monitoring isn’t needed after the laser.'
                ],
                answer: 1,
                explain: 'Gonioscopy: widened ciliary body band, torn iris processes, pale scleral spur; compare with the other eye.'
            },
            {
                phase: '4. Fuchs heterochromic iridocyclitis',
                type: 'multi',
                question: 'Features of Fuchs heterochromic iridocyclitis?',
                options: [
                    'Usually unilateral, middle-aged, few symptoms',
                    'Small stellate KPs scattered over the whole endothelium',
                    'Iris depigmentation/heterochromia, no posterior synechiae',
                    'Early posterior subcapsular cataract and raised IOP; vitreous cells; fine angle vessels (bleed at surgery)',
                    'Responds dramatically to steroids',
                    'Associated with rubella and CMV'
                ],
                answers: [0, 1, 2, 3, 5],
                explain: 'Steroids don’t change the course; avoid long-term use.'
            },
            {
                phase: '5. Steroid-induced glaucoma',
                type: 'mcq',
                question: 'Steroid-induced IOP rise: mechanism and management?',
                options: [
                    'Steroids close the angle by dilating the pupil, over minutes to hours. Treat with pilocarpine and LPI; continue the steroid, since stopping it causes rebound angle closure and inflammation within a day.',
                    'Steroids alter TM cells (more matrix, cytoskeletal change, less phagocytosis) → less outflow, over days to ~6 weeks. Stop/reduce or switch steroid, add IOP drops, follow as a suspect; avoid miotics if inflamed.',
                    'Steroids increase aqueous production by the ciliary body, over months to years. Treat by increasing the steroid dose, which suppresses the ciliary body and lowers IOP.',
                    'Steroids thicken the cornea so IOP readings are falsely high; true IOP is normal. No treatment is needed — correct the reading for CCT and continue the steroid.'
                ],
                answer: 1,
                explain: 'High-risk groups: POAG, first-degree relatives, children under 10, high myopia, type 1 diabetes.'
            }
        ]
    }
);
