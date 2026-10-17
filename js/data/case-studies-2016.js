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
                    'Pilocarpine 2% every 5 minutes to break the attack, then review tomorrow.',
                    'Same-day referral to ophthalmology. Meanwhile, if no contraindications: an aqueous suppressant (timolol 0.5%, brimonidine 0.2%, topical CAI), prednisolone acetate 1% for inflammation and atropine 1% for comfort. Avoid pilocarpine. Ophthalmology will give intravitreal anti-VEGF, PRP, and IOP surgery (tube or cyclodestruction) if needed.',
                    'Laser peripheral iridotomy.',
                    'Latanoprost and a 4-week review.'
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
                    'It doesn’t.',
                    'Circumcorneal (ciliary) flush suggests intraocular inflammation or keratitis (uveitis, keratitis, AAC), whereas diffuse conjunctival redness worse in the fornices points to conjunctivitis.',
                    'Limbal redness means allergy.',
                    'Limbal redness means a subconjunctival haemorrhage.'
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
                    'All KPs are the same; IOP is always high.',
                    'Fine/stellate KPs (diffuse, e.g. Fuchs, HSV, VZV, CMV, toxoplasma) vs large greasy mutton-fat KPs (granulomatous: sarcoid, TB, syphilis, VKH); usually in Arlt’s triangle. IOP is often low early (ciliary body shut-down) but can be high with trabeculitis — particularly herpetic, Fuchs, toxoplasma, CMV and PSS.',
                    'KPs only occur in glaucoma.',
                    'KPs mean bacterial infection.'
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
                    'Check IOP first (high IOP → think herpes; baseline for steroid response). Prednisolone acetate 1% hourly until a 2-step improvement, then QID until cells resolve, tapering over ~5 weeks; cycloplegic for pain and synechiae; review next day. Refer if bilateral, chronic, recurrent or systemic.',
                    'FML BD.',
                    'Chloramphenicol QID.',
                    'Latanoprost.'
                ],
                answer: 0,
                explain: 'Shake the bottle; space drops.'
            },
            {
                phase: '8. IOP rises',
                type: 'mcq',
                question: 'The IOP rises during treatment. What would you do?',
                options: [
                    'Latanoprost.',
                    'Timolol 0.5% BD (if no contraindication), or brimonidine or a topical CAI; avoid PGAs in uveitis; consider whether it is steroid response or trabeculitis; refer/co-manage.',
                    'Stop the steroid immediately.',
                    'Pilocarpine.'
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
                    'No reason.',
                    'IOP can be very high with herpetic keratouveitis (trabeculitis). If there is uveitis or high IOP, dilate to rule out posterior involvement (acute retinal necrosis).',
                    'To check for glaucoma only.',
                    'To measure the dendrite.'
                ],
                answer: 1,
                explain: 'Check corneal sensation too.'
            },
            {
                phase: '2. Acanthamoeba?',
                type: 'mcq',
                question: 'Why is Acanthamoeba in your differentials, and how would you tell it apart?',
                options: [
                    'It isn’t a differential.',
                    'Early Acanthamoeba gives an epithelial pseudodendrite. Suspect it with CL wear, water exposure (hot tubs, swimming, tap water), pain out of proportion to signs, perineural (radial) infiltrates and later a ring infiltrate; poor response to antivirals.',
                    'Acanthamoeba always has a hypopyon on day 1.',
                    'Only with fungal exposure.'
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
                    'Rapid IOP rise within 1 hour'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Hypersensitivity is the main contraindication.'
            },
            {
                phase: '4. Alternatives',
                type: 'mcq',
                question: 'What if topical aciclovir isn’t available, and what if that isn’t possible either?',
                options: [
                    'Use a steroid.',
                    'Topical ganciclovir 0.15% gel, or oral aciclovir 400 mg 5×/day via GP (or valaciclovir). Alternatively debride the infected epithelium (wiping from outside towards the lesion to avoid spreading virus) with prophylactic chloramphenicol QID until re-epithelialised.',
                    'Bandage CL only.',
                    'Nothing.'
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
                    'It never recurs.',
                    'HEDS: ~32% recurrence of ocular HSV in 12 months on placebo vs 19% on oral aciclovir 400 mg BD (about halved). Stromal recurrence was reduced mainly in those with previous stromal disease (14% vs 28%). Adding oral aciclovir to topical treatment of epithelial disease gave no extra benefit.',
                    'Prophylaxis increases recurrences.',
                    'Topical steroid prevents recurrence.'
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
                    'Favourite sport team'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Water exposure raises Acanthamoeba suspicion; vegetable matter, fungal.'
            },
            {
                phase: '2. HSV mimic',
                type: 'mcq',
                question: 'Why can HSV necrotising stromal keratitis look like MK?',
                options: [
                    'It can’t.',
                    'It can have an overlying epithelial defect, dense stromal infiltrate with oedema, KPs, hypopyon and synechiae.',
                    'It is always bilateral.',
                    'It has terminal bulbs.'
                ],
                answer: 1,
                explain: 'History of HSV, reduced sensation and stromal scarring help. Culture when unsure.'
            },
            {
                phase: '3. Why Pseudomonas?',
                type: 'mcq',
                question: 'Why is Pseudomonas most associated with CL wear?',
                options: [
                    'It lives in the cornea normally.',
                    'It thrives in water and lens cases, adheres readily to lenses and to hypoxic, damaged epithelium, forms biofilms, and produces proteases that destroy stroma. Overnight wear (prolonged contact, hypoxia) multiplies the risk.',
                    'It is resistant to all antibiotics.',
                    'It is a fungus.'
                ],
                answer: 1,
                explain: 'Overnight wear raises MK risk about 5× (or more) over daily wear.'
            },
            {
                phase: '4. Regimen',
                type: 'mcq',
                question: 'What ciprofloxacin regimen do you start?',
                options: [
                    'QID for a week.',
                    'Day 1: q15min for 6 h, then q30min for the rest of the day and overnight; day 2: hourly; day 3: 2-hourly by day, 4-hourly overnight; then 4-hourly until re-epithelialised and ~3 days beyond. Stop CL wear; review the next day.',
                    'Once daily.',
                    'Only at night.'
                ],
                answer: 1,
                explain: 'Taper by response, not by the calendar, and never below QID.'
            },
            {
                phase: '5. Pain',
                type: 'mcq',
                question: 'How do you manage his pain?',
                options: [
                    'Topical anaesthetic to take home.',
                    'Cycloplegic (homatropine 2% or atropine 1% BD) for ciliary spasm, oral analgesia via pharmacy/GP (paracetamol 1 g QID, ibuprofen 400 mg TDS if no contraindication), sunglasses.',
                    'Steroids.',
                    'Ice packs only.'
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
                    'Daily disposables have zero infection risk.',
                    'Overnight wear carries the biggest risk (~5×). Silicone hydrogels have similar infection rates to hydrogels but more infiltrative events. Daily disposables have a similar incidence of MK but tend to cause less severe disease. Advise hand washing and drying, no water exposure, case hygiene, and reduced wear initially.',
                    'Hydrogels are always safer.',
                    'Extended wear is safest.'
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
                    'You can’t.',
                    'Mostly history and course: adenovirus is acute with sick contacts and settles in 2–3 weeks; chlamydia is chronic (>3 weeks), with a sexual history, mucopurulent discharge, less bulbar redness, large inferior forniceal follicles and pannus. HSV has lid vesicles or dendrites. PCR confirms.',
                    'Chlamydia is always bilateral.',
                    'Adenovirus has a hypopyon.'
                ],
                answer: 1,
                explain: 'Swab anything that doesn’t follow the expected course.'
            },
            {
                phase: '4. Contagious period',
                type: 'mcq',
                question: 'How long is she contagious, and what is your advice?',
                options: [
                    '24 hours.',
                    'Incubation 5–12 days; shedding for up to ~2 weeks after onset. Stay off work/school while the eye is red and watery (often ~10–14 days); strict hand hygiene, no towel or pillow sharing, avoid touching eyes, no CLs, discard eye make-up.',
                    'Not contagious.',
                    'Only contagious by air.'
                ],
                answer: 1,
                explain: 'Disinfect clinic surfaces and tonometers afterwards.'
            },
            {
                phase: '5. Management options',
                type: 'mcq',
                question: 'Management, and what is the povidone-iodine option?',
                options: [
                    'Antibiotics QID.',
                    'Supportive: cold compresses, preservative-free lubricants (not too often), hygiene; review at ~7–10 days for SEIs. Some clinicians offer an in-office dilute povidone-iodine (alcohol-free) wash under anaesthetic to shorten the course — not for the very young or old, or those with iodine allergy or thyroid disease.',
                    'Oral antivirals.',
                    'Topical steroid from day 1.'
                ],
                answer: 1,
                explain: 'Evidence for povidone-iodine is mixed; present it as an option.'
            },
            {
                phase: '6. SEIs & steroid',
                type: 'mcq',
                question: 'SEIs appear and reduce VA. What do you do, and what do you watch for?',
                options: [
                    'Nothing.',
                    'Mild steroid (e.g. FML or fluorometholone acetate 0.1% QID) once the acute phase has passed, then a very slow taper (rebound SEIs are common if stopped quickly). Watch IOP (steroid response at 2–4 weeks; earlier in children).',
                    'Ciprofloxacin.',
                    'Bandage CL.'
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
                    'Retinal detachment from itching'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Check topography and refraction once the surface settles.'
            },
            {
                phase: '3. Pathophysiology & prognosis',
                type: 'mcq',
                question: 'Pathophysiology and prognosis?',
                options: [
                    'Viral infection that lasts for life.',
                    'Combined type I (IgE, mast cells) and type IV (T-cell, eosinophils) hypersensitivity. Most resolve around puberty; a small proportion progress to AKC; associated with atopy and keratoconus.',
                    'Bacterial toxin reaction.',
                    'Autoimmune vasculitis.'
                ],
                answer: 1,
                explain: 'That is why mast-cell stabilisers alone often aren’t enough in active disease.'
            },
            {
                phase: '4. Management',
                type: 'mcq',
                question: 'How would you manage him?',
                options: [
                    'Antibiotics only.',
                    'Allergen avoidance, cool compresses, lubricants, lid hygiene, no rubbing; combined antihistamine/mast-cell stabiliser (e.g. olopatadine or ketotifen BD), started before the season; pulsed topical steroid for flares with IOP checks; ciclosporin for steroid-sparing (via ophthalmology); for a shield ulcer, steroid + prophylactic antibiotic, daily review, refer for plaque removal if not healing.',
                    'Oral steroids.',
                    'Bandage CL.'
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
                    'Diet'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Around a third of episcleritis cases have an associated systemic condition; more for scleritis.'
            },
            {
                phase: '2. Phenylephrine test',
                type: 'mcq',
                question: 'How does phenylephrine help separate episcleritis from scleritis?',
                options: [
                    'It dilates the pupil.',
                    'Phenylephrine (2.5–10%) blanches the superficial episcleral vessels within ~10–15 minutes; deep scleral vessels don’t blanch (conjunctival vessels blanch almost immediately). Also: scleritis is bluish-purple, deep, very tender and painful.',
                    'It causes pain in episcleritis.',
                    'It stains the sclera.'
                ],
                answer: 1,
                explain: 'Use daylight to see the bluish hue of scleritis.'
            },
            {
                phase: '3. Episcleritis types',
                type: 'mcq',
                question: 'Simple vs nodular episcleritis?',
                options: [
                    'They are the same.',
                    'Simple (~75%): sectoral or diffuse, peaks in ~12 hours and fades over days, often recurrent. Nodular: one or more tender mobile nodules, slower onset over 2–3 days and longer course — exclude a foreign body or granuloma.',
                    'Nodular is always necrotising.',
                    'Simple is always bilateral.'
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
                    'Oral steroids for 3 months.',
                    'Often self-limiting (~3 weeks). Cold compresses and lubricants; a mild topical steroid (e.g. FML 0.1% QID for ~1–2 weeks, tapering) if symptomatic, after excluding herpes; oral NSAID (e.g. ibuprofen) via the GP for nodular or persistent disease. Review in about a week. Warn of recurrence. Systemic work-up via GP if recurrent.',
                    'Antibiotics.',
                    'Urgent surgery.'
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
                    'Primary infection of the cornea.',
                    'After chickenpox, VZV lies latent in sensory ganglia (here the trigeminal). With waning cell-mediated immunity (age, immunosuppression, stress) it reactivates, travels down the ophthalmic division and causes a dermatomal rash; perineuritis causes intense pain.',
                    'A bacterial superinfection.',
                    'An allergic reaction.'
                ],
                answer: 1,
                explain: 'Hutchinson’s sign (tip of nose, nasociliary nerve) strongly predicts eye involvement.'
            },
            {
                phase: '4. Management',
                type: 'mcq',
                question: 'How would you manage him?',
                options: [
                    'Topical aciclovir alone.',
                    'Refer to the GP the same day for oral antiviral (aciclovir 800 mg 5×/day for 7–10 days, or valaciclovir 1 g TDS / famciclovir), ideally within 72 h of rash onset; consider immunosuppression screening; cool compresses for skin; lubricants for pseudodendrites; topical steroid only for stromal keratitis/uveitis, co-managed; analgesia; avoid contact with pregnant women, newborns and immunocompromised people until crusted.',
                    'Oral steroids only.',
                    'No treatment.'
                ],
                answer: 1,
                explain: 'Antivirals within 72 h reduce acute pain, viral shedding and ocular complications.'
            },
            {
                phase: '5. Vaccination',
                type: 'mcq',
                question: 'What do you know about zoster vaccination in Australia?',
                options: [
                    'There is no vaccine.',
                    'The recombinant vaccine Shingrix (2 doses) is recommended for older adults and is funded on the National Immunisation Program for eligible groups (e.g. people 65+, First Nations people 50+, and certain immunocompromised adults). It reduces shingles and post-herpetic neuralgia. Check the current NIP criteria.',
                    'Only children are vaccinated.',
                    'The chickenpox vaccine treats active HZO.'
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
                    'Optometrists prescribe it.',
                    'Call the ophthalmologist or a GP/ED doctor, who can prescribe it (a pharmacist can supply on a medical practitioner’s phone order in urgent cases). 500 mg orally if no contraindications: sulfonamide allergy, hypokalaemia, hyponatraemia, severe renal or hepatic impairment, hypotension, severe COPD.',
                    'Over the counter.',
                    'It is never used.'
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
                    'Adenoviral conjunctivitis'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'True exfoliation is a lamellar splitting of the capsule; amyloid can deposit on the lens too.'
            },
            {
                phase: '3. Gonioscopy',
                type: 'mcq',
                question: 'What do you expect on gonioscopy?',
                options: [
                    'A clean, unpigmented angle.',
                    'Patchy, uneven TM pigment; Sampaolesi’s line (pigment at or in front of Schwalbe’s line); PXF flakes in the angle; the angle may look narrower because lax zonules let the lens–iris diaphragm move forward. PDS by contrast has dense, homogeneous pigment.',
                    'Neovascularisation.',
                    'Angle recession.'
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
                    'Observe for a year.',
                    'Start a PGA (aim ≥30% reduction — PXG is aggressive with large IOP fluctuations; a PGA gives 24-hour control), e.g. latanoprost 0.005%, travoprost 0.004%, bimatoprost 0.01–0.03% (PF available) or tafluprost 15 µg/mL (PF), one drop nocte; teach instillation; refer to a glaucoma ophthalmologist; GP letter re systemic PXF associations; review about every 3 months initially with IOP, gonio, disc, OCT and fields, then extend if stable.',
                    'Pilocarpine.',
                    'Trabeculectomy as first line.'
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
                    'Favourite food'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Then: gonioscopy, CCT, OCT, 24-2 fields, slit lamp for secondary causes.'
            },
            {
                phase: '2. Occludable angle',
                type: 'mcq',
                question: 'On gonioscopy, what makes an angle “occludable”?',
                options: [
                    'Seeing the ciliary body band all round.',
                    'Posterior (pigmented) trabecular meshwork not visible for ≥180° (traditionally 3 or more quadrants / ≥270° in older definitions) in primary position without indentation.',
                    'Any pigment in the angle.',
                    'A van Herick grade 4.'
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
                    'Treat everyone with OHT.',
                    'Risk-stratify (OHTS/EGPS calculator). Low risk: monitor about every 6–12 months (IOP), fields and imaging to build a baseline, then yearly. High risk: treat (PGA, ≥20% reduction) and monitor 3–6-monthly.',
                    'Discharge.',
                    'LPI.'
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
                    'Early, because only one hemifield is affected.',
                    'Severe/advanced (Mills-type criteria): a large proportion of points are depressed at p<5% and p<1%, with points near fixation — stage it by the system you name and justify with MD and the point counts.',
                    'Normal.',
                    'Neurological.'
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
                    'Uveitis'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Pallor out of proportion to cupping, vertical-midline defects or reduced VA/colour → neuro work-up.'
            },
            {
                phase: '3. NTG features & pathogenesis',
                type: 'mcq',
                question: 'What are typical NTG features and the proposed mechanism?',
                options: [
                    'High IOP and a small disc.',
                    'Larger discs, localised (often inferior) notching, PPA, disc haemorrhages, focal deep defects close to fixation. Mechanism: vascular dysregulation — vasospasm (Raynaud’s, migraine), nocturnal hypotension, low ocular perfusion pressure — on top of IOP susceptibility.',
                    'Diffuse field loss only.',
                    'Always bilateral and symmetric.'
                ],
                answer: 1,
                explain: 'Ask the GP to look for nocturnal hypotension (24-hour BP) and review antihypertensive timing.'
            },
            {
                phase: '4. CNTGS',
                type: 'mcq',
                question: 'What did CNTGS show, and who progresses?',
                options: [
                    'IOP lowering doesn’t matter in NTG.',
                    '30% IOP lowering reduced progression (12% vs 35% untreated), but ~65% of untreated eyes didn’t progress over 5 years, and ~20% progressed despite treatment. Risk factors for progression: female sex, migraine, disc haemorrhage (and IOP). So risk-stratify.',
                    'Everyone progresses without treatment.',
                    'Only SLT works.'
                ],
                answer: 1,
                explain: 'Treat now when progression is documented, there are risk factors, or central fixation is threatened.'
            },
            {
                phase: '5. Drugs',
                type: 'mcq',
                question: 'First and second choices?',
                options: [
                    'Timolol at night first.',
                    'First: PGA (e.g. latanoprost nocte). Second or adjunct: brimonidine (LoGTS — fewer progressed than on timolol, possibly via neuroprotection, but high allergy dropout). Avoid evening β-blockers (nocturnal hypotension). SLT or surgery if the target isn’t reached.',
                    'Pilocarpine.',
                    'Oral acetazolamide long term.'
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
                    'Lens material blocks the angle.',
                    'Reverse pupillary block: the iris bows backwards and the posterior pigment epithelium rubs on the zonules, releasing pigment that clogs the TM. Accommodation, exercise and blinking increase it.',
                    'Neovascularisation.',
                    'Inflammation of the ciliary body.'
                ],
                answer: 1,
                explain: 'Exercise-induced pigment showers can spike IOP and cause haloes.'
            },
            {
                phase: '3. Risk & course',
                type: 'mcq',
                question: 'Risk factors and natural history?',
                options: [
                    'Elderly women, lifelong progression.',
                    'Young (20s–40s), myopic, Caucasian; equal sexes for PDS but pigmentary glaucoma is more common in men. About a third (or fewer, in population studies) develop glaucoma; IOP >21 at presentation is the biggest conversion risk. With age (lens growth, less accommodation) the active phase burns out and TIDs may fade.',
                    'Always converts to glaucoma within a year.',
                    'Only in hyperopes.'
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
                    'Pilocarpine and latanoprost.',
                    'Use: β-blocker or CAI (quick acting; avoid CAIs in sickle cell), cycloplegic (e.g. homatropine 2% BD or atropine), prednisolone acetate 1% QID. Avoid: miotics (pupil block, BAB breakdown), PGAs (inflammation), aspirin and NSAIDs (bleeding).',
                    'Aspirin for pain.',
                    'Nothing.'
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
                    'Every recessed angle develops glaucoma within a month.',
                    'About 6–9% of recessed angles develop glaucoma; risk rises with >180° recession. Two peaks: within the first year (easier to control medically) and 10+ years later (harder; may need surgery, and trabeculectomy succeeds less often than in POAG). Lifelong monitoring of both eyes.',
                    'It only causes low IOP.',
                    'It is cured by LPI.'
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
                    'Steroids close the angle.',
                    'Steroids alter TM cells (more extracellular matrix, cytoskeletal changes, reduced phagocytosis) → less outflow, from days to ~6 weeks. Manage by stopping/reducing or switching to a lower-penetrating steroid, IOP-lowering drops, and follow as a glaucoma suspect. Avoid miotics in inflamed eyes.',
                    'Treat with more steroid.',
                    'Ignore it.'
                ],
                answer: 1,
                explain: 'High-risk groups: POAG, first-degree relatives, children under 10, high myopia, type 1 diabetes.'
            }
        ]
    }
);
