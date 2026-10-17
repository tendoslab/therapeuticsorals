// Cases from the second 2018 recall document (Thera Oral 2018 #2). Each case keeps the questions that sitting asked.
window.CASES.push(
    {
        id: 'pss',
        category: 'glaucoma',
        title: 'Posner–Schlossman: IOP 60 in One Eye',
        theme: 'Glaucomatocyclitic Crisis',
        years: ['2018'],
        patient: '30-year-old Iranian man. No pictures — the examiner keeps it conversational.',
        stem: 'Mild ache and slightly blurred vision in the right eye since this morning. IOP R 60 mmHg, L 17 mmHg.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'Which differentials belong on your list for a unilateral IOP of 60 mmHg in a 30-year-old?',
                options: [
                    'Posner–Schlossman syndrome (glaucomatocyclitic crisis)',
                    'Acute angle closure',
                    'Anterior uveitis with trabeculitis (e.g. herpetic or toxoplasma)',
                    'Fuchs heterochromic iridocyclitis',
                    'Pigment dispersion with an exercise-induced pigment shower',
                    'Normal-tension glaucoma',
                    'Central serous chorioretinopathy'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'A big unilateral spike in a young adult is PSS until shown otherwise, but you must exclude angle closure (gonioscopy) and inflammatory or herpetic trabeculitis (KPs, cells, sectoral iris atrophy, corneal sensation). Fuchs and pigment showers also give unilateral or episodic rises. NTG by definition has normal IOP.'
            },
            {
                phase: '2. PSS vs AAU vs AAC',
                type: 'match',
                question: 'Match each finding to the condition it points to.',
                pairs: [
                    { label: 'Open angle, white or barely injected eye, a few fine central KPs, very mild discomfort', answer: 'Posner–Schlossman syndrome' },
                    { label: 'Marked pain and photophobia, ciliary flush, many AC cells, IOP often LOW', answer: 'Acute anterior uveitis' },
                    { label: 'Closed angle, mid-dilated fixed pupil, corneal oedema, nausea, older long-sighted patient', answer: 'Acute angle closure' }
                ],
                distractors: ['Pigment dispersion syndrome', 'Steroid response'],
                explain: 'In AAU the ciliary body “shuts down”, so IOP is usually low early and rises later if the meshwork becomes inflamed. PSS gives a huge IOP with surprisingly little inflammation. Gonioscopy (open angle) is the key separator from AAC; the patient profile helps too (PSS: young adult, often male; AAC: older, female, hyperopic, often East Asian).',
                recall: 'The 2018 candidate separated PSS from AAU on pain, redness and AC cells, and from AAC on the open angle and patient profile — the examiner accepted all of these.'
            },
            {
                phase: '3. Results',
                type: 'reveal',
                text: 'Gonioscopy: open to ciliary body band 360° in both eyes. Right eye: 3 small fine KPs on the inferior endothelium, AC cells 0.5+, no flare, no synechiae, mild microcystic corneal oedema. Corneal sensation normal. Discs: healthy, C/D 0.3 OU. He recalls “two similar episodes” in the last 3 years that settled by themselves.'
            },
            {
                phase: '4. Management',
                type: 'mcq',
                question: 'Your tentative diagnosis is PSS. What is your management?',
                options: [
                    'Prednisolone acetate 1% QID plus an aqueous suppressant (e.g. timolol 0.5% BD, first drop in the room, if no asthma or heart block; or brimonidine or a topical CAI). Review in 1–2 days, then until IOP is normal. Avoid PGAs and pilocarpine.',
                    'Pilocarpine 2% QID to open the angle.',
                    'Latanoprost 0.005% nocte only — it is the most effective drug.',
                    'Atropine 1% TDS and observe; IOP spikes in PSS do no harm.'
                ],
                answer: 0,
                critical: true,
                explain: 'Treat both the inflammation (a mild-to-moderate topical steroid, usually QID — PSS needs much less than AAU) and the pressure (aqueous suppressants). PGAs and miotics are generally avoided because they can increase inflammation and break down the blood–aqueous barrier. Cycloplegia isn\'t needed: there is little inflammation and no synechiae. Review the next day or two and continue until the episode settles (hours to a few weeks), then taper the steroid.',
                recall: 'The 2018 candidate said “Pred Forte q2h” and later noted Wills Eye suggests QID. QID is the usual starting dose for PSS. The candidate\'s “timolol in the room, then mane = BD” approach is fine if timolol is not contraindicated.'
            },
            {
                phase: '5. Recurrences',
                type: 'mcq',
                question: 'This is his third episode. What else should happen?',
                options: [
                    'Nothing — PSS is benign and never causes glaucoma.',
                    'Refer to ophthalmology: recurrent PSS is strongly linked to CMV (especially in Asian and Middle Eastern patients). An aqueous tap for CMV PCR can confirm it, and antiviral treatment (e.g. topical or oral ganciclovir/valganciclovir) reduces recurrences. Monitor the disc and field because repeated spikes can cause glaucomatous damage.',
                    'Start lifelong pilocarpine.',
                    'Book a laser peripheral iridotomy.'
                ],
                answer: 1,
                explain: 'Repeated episodes add up: about a quarter of patients eventually show glaucomatous damage. Baseline OCT and fields are worth doing between attacks. LPI does nothing for an open-angle inflammatory condition.'
            },
            {
                phase: '6. Twist: IOP climbs again',
                type: 'mcq',
                question: 'At 3 weeks the KPs and cells are gone, but IOP has risen again to 34 mmHg while he is still on prednisolone acetate QID. Most likely reason?',
                options: [
                    'A new PSS attack.',
                    'A steroid response: an IOP rise days to weeks into steroid treatment, with a quiet eye.',
                    'Angle closure caused by the steroid.',
                    'Measurement error from corneal oedema.'
                ],
                answer: 1,
                explain: 'A quiet eye (no KPs, no cells) with IOP rising weeks into steroid therapy is a steroid response. Taper the steroid now that the inflammation has settled (or switch to a lower-penetrating steroid such as FML), keep the aqueous suppressant, and add a second one if needed.'
            },
            {
                phase: '7. Who responds',
                type: 'match',
                question: 'Armaly’s response to 6 weeks of topical dexamethasone in the general population. Match each response to roughly how many people show it.',
                pairs: [
                    { label: 'Low response: rise under 6 mmHg', answer: 'About 60–65%' },
                    { label: 'Moderate response: rise of 6–15 mmHg', answer: 'About 30–33%' },
                    { label: 'High response: rise over 15 mmHg', answer: 'About 4–6%' }
                ],
                distractors: ['About 90%', 'Under 0.5%'],
                explain: 'Higher-risk groups: existing POAG (up to ~90% respond), first-degree relatives of POAG patients, children under ~10, high myopes, type 1 diabetes, connective tissue disease (e.g. rheumatoid arthritis), and previous steroid responders. The rise usually starts after 2–6 weeks of topical use (sooner with potent, frequent dosing).',
                recall: 'The 2018 recall listed Armaly as “<6 mmHg 60%, 6–15 mmHg 30%, >16 mmHg 5%” and named children under 10, POAG, family history, diabetes, myopia and connective tissue disease as the high-risk groups — all broadly correct.'
            },
            {
                phase: '8. Adding brimonidine',
                type: 'viva',
                question: 'You add an α2-agonist. Which one, at what strength, and what are its contraindications and side effects?',
                points: [
                    'Brimonidine 0.2% (Alphagan) BD–TDS, or 0.15% with Purite (Alphagan P); apraclonidine 0.5% is for short-term use only',
                    'MoA: α2-agonist — reduces aqueous production and increases uveoscleral outflow',
                    'Contraindicated with MAO inhibitors (hypertensive crisis risk)',
                    'Contraindicated in children under 2 (CNS depression, apnoea); caution in small children generally',
                    'Caution with tricyclic antidepressants, CNS depressants, severe cardiovascular disease, orthostatic hypotension',
                    'Side effects: allergic follicular conjunctivitis/blepharoconjunctivitis (common, often months in), dry mouth, fatigue/drowsiness, hyperaemia, stinging',
                    'TGA pregnancy category B3'
                ],
                explain: 'Brimonidine is on the PBS. Apraclonidine causes tachyphylaxis and has a high allergy rate, so it is mainly used peri-operatively or short term. A topical CAI (dorzolamide 2% or brinzolamide 1%) is the other option; check for sulfonamide allergy and endothelial disease.',
                recall: 'The 2018 candidate chose brimonidine 0.2% “because it is neuroprotective and on the PBS”. Neuroprotection in humans is unproven (LoGTS is suggestive only); efficacy, availability and the side-effect profile are better reasons.'
            }
        ]
    },
    {
        id: 'ntg-young-unreliable-vf',
        category: 'glaucoma',
        title: 'Asymmetric Discs & an Unreliable Field',
        theme: 'NTG / Field Reliability',
        years: ['2018'],
        patient: '30-year-old attending for a routine eye examination.',
        stem: 'No symptoms. You notice the optic discs look different from each other.',
        exhibit: 'Disc photos: the right disc is slightly larger than the left with a larger cup; the right superior neuroretinal rim is thinner than the nasal rim. No disc haemorrhage.',
        steps: [
            {
                phase: '1. Describe the discs',
                type: 'viva',
                question: 'What do you assess on these discs, and does the right disc look healthy?',
                points: [
                    'Disc size (only judge with the fovea in shot or a lens/OCT measurement) — larger discs have larger cups',
                    'Vertical C/D ratio and C/D asymmetry between the eyes (≥0.2 is suspicious)',
                    'Rim: ISNT rule — here superior rim is thinner than nasal, so the rule is broken',
                    'Notching, disc haemorrhage, rim colour/pallor (pallor out of proportion to cupping → think neuro)',
                    'RNFL: wedge defects or reduced striations; compare superior and inferior reflectivity',
                    'Peripapillary atrophy (beta zone), vessel baring/bayonetting, laminar dots'
                ],
                explain: 'Asymmetric cupping is significant only after accounting for disc size. A thin superior rim predicts an inferior field defect (inferior arcuate or nasal step).',
                recall: 'A 2018 candidate was gently corrected for commenting on disc size from a photo without the fovea — you can\'t judge size reliably that way.'
            },
            {
                phase: '2. Work-up',
                type: 'multi',
                question: 'IOP is R 12, L 12 mmHg. What else belongs in your work-up?',
                options: [
                    'IOP phasing (diurnal measurements, or a water-drinking test)',
                    'Pachymetry (CCT)',
                    'Gonioscopy',
                    'OCT RNFL and macular GCL',
                    'Threshold visual field (24-2, plus 10-2 if near fixation)',
                    'History: migraine, cold hands (Raynaud\'s), nocturnal hypotension/BP medications, sleep apnoea, past blood loss or shock, family history',
                    'Start latanoprost today'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'A single IOP of 12 doesn\'t rule out pressure-related glaucoma: phasing may reveal spikes, and a thin cornea makes Goldmann under-read. Gonioscopy excludes intermittent angle closure or angle recession. Don\'t treat before you have a diagnosis.'
            },
            {
                phase: '3. The field',
                type: 'reveal',
                text: 'Right 24-2: fixation losses 1/14, false positives 2%, <strong>false negatives 67%</strong>. Grey scale shows a clover-leaf pattern (good sensitivity at the four primary points, falling away between and around them). GHT outside normal limits.'
            },
            {
                phase: '4. Interpret',
                type: 'mcq',
                question: 'How do you interpret this field?',
                options: [
                    'Reliable superior arcuate defect: confirms glaucoma, start treatment.',
                    'A clover-leaf pattern with very high false negatives suggests inattention or fatigue (non-physiological loss). Don\'t call it a glaucomatous defect: re-instruct and repeat the field.',
                    'Bitemporal hemianopia: refer for MRI.',
                    'High false negatives mean malingering; tell the patient they are not trying.'
                ],
                answer: 1,
                explain: 'The clover-leaf shape appears when the patient stops responding as the test goes on (the four seed points are tested first). False negatives aren\'t used as a reliability criterion in most glaucoma studies — they rise naturally in damaged fields — but combined with a clover-leaf pattern in a young patient they point to inattention. Say “inattention” or “learning effect”, not “malingering”.',
                recall: 'The 2018 candidate called the field “good fixation, poor false negatives — unreliable” and said “inattention or malingering”. Repeating it was the right move; prefer the word inattention with the panel.'
            },
            {
                phase: '5. Repeat field',
                type: 'mcq',
                question: 'What do you do with the result of the repeat field?',
                options: [
                    'If the repeat is normal: monitor (e.g. repeat OCT and field in 6–12 months, sooner if risk factors). If a defect appears: confirm it is repeatable (another field within ~3 months) and that it matches the structural loss before calling it glaucoma.',
                    'Treat on the first field whatever the repeat shows.',
                    'Discharge if the repeat is normal; the disc asymmetry is physiological.',
                    'Order an MRI for every abnormal field.'
                ],
                answer: 0,
                explain: 'A defect must be repeatable and should correspond to the structural change (superior rim thinning → inferior field loss). Confirming early with 2–3 fields in the first few months is consistent with standard baseline practice.'
            },
            {
                phase: '6. Twist: 70 years old with CMO',
                type: 'mcq',
                question: 'Now say the patient is 70, the defect is repeatable and matches the disc, IOP stays low-teens, and the patient had cystoid macular oedema after cataract surgery last year. What do you treat with?',
                options: [
                    'Latanoprost 0.005% nocte — always first line.',
                    'Timolol 0.5% mane (if no asthma, COPD, bradycardia or heart block), aiming for ~30% IOP reduction (CNTGS); brimonidine is the alternative.',
                    'Pilocarpine 2% QID.',
                    'No treatment — NTG doesn\'t respond to IOP lowering.'
                ],
                answer: 1,
                explain: 'A history of CMO is a relative contraindication to PGAs, so a β-blocker or brimonidine is the sensible first choice. Morning timolol avoids worsening nocturnal hypotension and optic nerve perfusion, which matters in NTG. CNTGS showed a 30% reduction cut progression from about 35% to 12%.',
                recall: 'Asked “why 0.5% rather than 0.25%?”, the 2018 candidate said 0.5% is more effective and better for dark irides. In practice the two strengths differ little in effect; 0.25% is reasonable in light irides and for fewer systemic effects, and gel-forming once-daily versions also exist.'
            },
            {
                phase: '7. Twist: 30 years old',
                type: 'viva',
                question: 'And if the repeatable defect is in the 30-year-old?',
                points: [
                    'Yes, treat: decades of life ahead, and NTG defects tend to be deep and close to fixation',
                    'But first make sure it IS glaucoma: NTG at 30 is unusual',
                    'Rule out compressive or neurological causes: field defect respecting the vertical midline, disc pallor out of proportion to cupping, reduced VA or colour vision, RAPD out of proportion, progression despite low IOP → MRI via GP or ophthalmology',
                    'Ask about past haemodynamic crises (major blood loss, shock), which can cause a non-progressive cupped disc',
                    'Refer to an ophthalmologist (glaucoma) and set a 30% target'
                ],
                explain: 'Young age changes the threshold to treat because the cumulative risk of visual disability is higher. The examiner\'s follow-up — “are you sure it\'s NTG?” — is a prompt to say you\'d exclude neurological causes.',
                recall: 'The 2018 candidate said “Yes!!! — more likely to impact central vision” and then, when pressed, that neurological problems must be ruled out. Both were what the examiner wanted.'
            }
        ]
    },
{
        id: 'r2018-aau-workup',
        category: 'uveitis',
        title: 'AAU: Work-up, Systemic Review & Referral',
        theme: 'Acute Anterior Uveitis',
        years: ['2018'],
        patient: 'Young adult with a painful, photophobic red eye. No photo — conversational.',
        stem: '“Let’s say you diagnose a case of acute anterior uveitis.”',
        steps: [
            {
                phase: '1. Tests',
                type: 'multi',
                question: 'What other tests need to be performed, and why?',
                options: [
                    'Fluorescein: rule out an epithelial defect or keratitis (a keratouveitis changes management)',
                    'AC cells and flare graded in a 1 mm × 1 mm beam (SUN)',
                    'Gonioscopy: PAS, angle status',
                    'Pupil and iris: posterior synechiae, iris nodules, sectoral atrophy',
                    'IOP: rule out PSS/herpetic trabeculitis and set a baseline before steroids',
                    'Lens: posterior subcapsular cataract (relevant before more steroid)',
                    'Dilated fundus exam: intermediate or posterior involvement',
                    'Corneal topography'
                ],
                answers: [0, 1, 2, 3, 4, 5, 6],
                explain: 'Each test has a reason: exclude other diagnoses, grade severity, find complications, and get baselines for treatment monitoring. Topography adds nothing here.'
            },
            {
                phase: '2. Review of systems',
                type: 'match',
                question: 'Match each body system to the associated causes of uveitis you are screening for.',
                pairs: [
                    { label: 'Rheumatological (back or joint pain)', answer: 'Spondyloarthropathies, especially ankylosing spondylitis' },
                    { label: 'Genito-urinary (discharge, ulcers)', answer: 'Reactive arthritis, Behçet’s, syphilis' },
                    { label: 'Respiratory (cough, breathlessness)', answer: 'Sarcoidosis, tuberculosis' },
                    { label: 'Gastrointestinal (diarrhoea, blood in stools)', answer: 'Inflammatory bowel disease' },
                    { label: 'Skin (rashes, psoriasis, cold sores)', answer: 'Psoriasis, herpes simplex/zoster, sarcoid, Behçet’s' }
                ],
                distractors: ['Diabetic retinopathy'],
                explain: 'Ask in plain language: “Any back stiffness? Mouth or genital ulcers? A persistent cough? Bowel problems? Skin rashes?”'
            },
            {
                phase: '3. Which back pain?',
                type: 'mcq',
                question: 'Would you suspect a systemic cause in everyone with back or joint problems? Which feature warrants further investigation?',
                options: [
                    'Any back pain at all.',
                    'Inflammatory back pain: onset under ~40, insidious, morning stiffness lasting over 30 minutes, pain at night or at rest that improves with exercise.',
                    'Back pain only after heavy lifting.',
                    'Pain that is worse after exercise and better with rest.'
                ],
                answer: 1,
                explain: 'Mechanical back pain (worse with activity, better with rest) is common and nonspecific. Inflammatory back pain points to HLA-B27 spondyloarthropathy — refer to the GP for HLA-B27, inflammatory markers and imaging / rheumatology.',
                recall: 'The 2018 candidate answered: “pain without a stimulus, i.e. not after exercise, and worse in the morning” — the examiner accepted it.'
            },
            {
                phase: '4. Management',
                type: 'mcq',
                question: 'How would you manage this patient?',
                options: [
                    'Prednisolone acetate 1% q1–2h (loading dose q15min for the first hour if severe) plus atropine 1% (BD–TDS) for photophobia, ciliary spasm, the blood–aqueous barrier and to prevent posterior synechiae. Review next day.',
                    'FML 0.1% BD and review in 2 weeks.',
                    'Chloramphenicol QID.',
                    'Oral prednisolone via the GP as first line.'
                ],
                answer: 0,
                explain: 'Frequency follows severity. Taper once there is a 2-step SUN improvement and continue until cells are zero, then taper slowly (e.g. drop one drop a day each week).'
            },
            {
                phase: '5. Breaking synechiae',
                type: 'mcq',
                question: 'You note posterior synechiae. How do you break them?',
                options: [
                    'Pilocarpine to pull the iris away.',
                    'Escalate: atropine 1% → phenylephrine 2.5% → phenylephrine 10% (check BP first) → cotton pledget soaked in phenylephrine 10% in the fornix → refer if still not broken.',
                    'Massage the globe.',
                    'Wait — they break on their own.'
                ],
                answer: 1,
                explain: 'The antimuscarinic (sphincter) plus the α1-agonist (dilator) act on different muscles, so they work together.'
            },
            {
                phase: '6. GP or ophthalmologist?',
                type: 'match',
                question: 'Where does each situation go?',
                pairs: [
                    { label: 'Bilateral, recurrent, chronic or granulomatous uveitis, or symptoms suggesting a systemic disease', answer: 'GP for a systemic work-up (bloods, HLA-B27, imaging)' },
                    { label: 'Hypopyon, posterior involvement, or not responding to treatment', answer: 'Ophthalmologist' }
                ],
                distractors: ['No referral needed'],
                explain: 'Often both: co-manage with ophthalmology while the GP investigates. A first unilateral non-granulomatous episode with no systemic symptoms usually needs no systemic work-up.',
                recall: 'Lists from the 2018 candidate: GP for bilateral, systemic signs, granulomatous, recurrent, chronic; ophthalmologist for hypopyon, posterior involvement, non-response.'
            }
        ]
    },
    {
        id: 'r2018-hsv-epithelial',
        category: 'cornea',
        title: 'Dendritic Ulcer: HSV vs HZO',
        theme: 'HSV Epithelial Keratitis',
        years: ['2018'],
        patient: 'Adult with a red, watery, photophobic eye.',
        stem: 'You are handed a photo.',
        exhibit: 'Fluorescein photo: a branching epithelial ulcer with terminal bulbs; the ulcer bed stains brightly.',
        steps: [
            {
                phase: '1. Signs & symptoms',
                type: 'viva',
                question: 'Describe what you see. What other signs and symptoms would you expect?',
                points: [
                    'Dendritic ulcer with terminal end bulbs; the bed stains with fluorescein, the swollen edges with rose bengal / lissamine green (live virus)',
                    'Symptoms: tearing, photophobia, pain/irritation, blur',
                    'Reduced corneal sensation',
                    'Lid or skin vesicles, follicles, pre-auricular node',
                    'Possible secondary uveitis with KPs; check IOP'
                ],
                explain: 'Test corneal sensation before instilling anaesthetic.'
            },
            {
                phase: '2. Differentials',
                type: 'multi',
                question: 'Differentials for a dendritiform lesion?',
                options: [
                    'Herpes zoster pseudodendrite',
                    'Acanthamoeba keratitis (early pseudodendrite)',
                    'Healing abrasion / recurrent corneal erosion',
                    'Bacterial keratitis',
                    'Soft CL or drug toxicity (epithelial pseudodendrites)',
                    'Pinguecula'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Acanthamoeba: CL wearer, pain out of proportion, perineural infiltrates. HZO: dermatomal rash, raised “stuck-on” lesions without end bulbs.'
            },
            {
                phase: '3. Pathophysiology',
                type: 'mcq',
                question: 'Explain the pathophysiology of HSV vs herpes zoster.',
                options: [
                    'Both are bacterial toxins.',
                    'HSV: primary infection (often subclinical, childhood), latent in the trigeminal ganglion, reactivates (stress, fever, UV, immunosuppression) and travels down the nerve to the cornea; recurs often. VZV: primary infection is chickenpox; latent in the sensory (trigeminal) ganglion; reactivates once (usually older or immunocompromised) as shingles in a dermatome — HZO when V1 is involved.',
                    'HSV is latent in the cornea; VZV is latent in the lacrimal gland.',
                    'HZO only occurs in children.'
                ],
                answer: 1,
                explain: 'Both are double-stranded DNA herpesviruses. Hutchinson’s sign (nasociliary branch, tip of the nose) predicts ocular involvement in HZO.'
            },
            {
                phase: '4. HSV-1 vs HSV-2',
                type: 'mcq',
                question: 'Would the presentation differ with HSV-1 vs HSV-2?',
                options: [
                    'Eye disease is mostly HSV-1 (“above the waist”) and looks the same. HSV-2 (genital) is classically a neonatal infection acquired at birth, can be more severe and is often associated with systemic disease.',
                    'HSV-2 never infects the eye.',
                    'HSV-2 causes geographic ulcers only.',
                    'HSV-1 only causes stromal disease.'
                ],
                answer: 0,
                explain: 'Clinically you can’t tell them apart on the eye; PCR types the virus.'
            },
            {
                phase: '5. Zoster signs',
                type: 'multi',
                question: 'Which signs point to zoster rather than HSV?',
                options: [
                    'Dermatomal vesicular rash respecting the midline',
                    'Hutchinson’s sign',
                    'Raised, blunt pseudodendrites without terminal bulbs that stain poorly',
                    'Sectoral iris atrophy',
                    'Severe neuralgic pain, older patient',
                    'Frequent recurrences every few months'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'HSV recurs frequently; zoster usually happens once.'
            },
            {
                phase: '6. Treatment & course',
                type: 'mcq',
                question: 'Treatment, review and expected course?',
                options: [
                    'Prednisolone acetate QID.',
                    'Epithelial debridement of the infected edges (under topical anaesthetic) plus a topical antiviral (aciclovir 3% ointment 5×/day or ganciclovir 0.15% gel 5×/day — check availability; oral aciclovir 400 mg 5×/day via GP if needed). Review at 1–2 days then weekly; most heal within 1–2 weeks; continue the antiviral a few days after healing.',
                    'Chloramphenicol only and review in a month.',
                    'Bandage contact lens alone.'
                ],
                answer: 1,
                explain: 'No steroids for active epithelial disease. Palliative: cycloplegic if photophobic, preservative-free lubricants.',
                recall: 'The 2018 recall reminder: “remember epithelial debridement!”'
            }
        ]
    },
    {
        id: 'r2018-pxf-diurnal',
        category: 'glaucoma',
        title: 'PXF with Low Office IOP: Phasing & When to Treat',
        theme: 'Pseudoexfoliation',
        years: ['2018'],
        patient: 'Older Caucasian patient.',
        stem: 'You are handed a photo of the pupil.',
        exhibit: 'Photo: white flaky material on the pupil margin and anterior lens capsule in a target pattern with a clear intermediate zone.',
        steps: [
            {
                phase: '1. Describe',
                type: 'viva',
                question: 'What do you see, and what other signs do you expect?',
                points: [
                    'Pseudoexfoliative material on the anterior lens capsule: central disc, clear intermediate zone, peripheral band',
                    'Flakes on the pupil margin; loss of the pupillary ruff; peripupillary transillumination defects',
                    'Poor dilation',
                    'Patchy TM pigment, Sampaolesi’s line on gonioscopy',
                    'Phacodonesis (weak zonules), often asymmetric or unilateral'
                ],
                explain: 'Then: full glaucoma work-up (IOP, gonio, CCT, disc, OCT, field).'
            },
            {
                phase: '2. Profile',
                type: 'mcq',
                question: 'What is the typical PXF patient profile?',
                options: [
                    'Young myopic man.',
                    'Older (60s+), often Scandinavian or Mediterranean descent; LOXL1 gene variants; often unilateral at first.',
                    'Children with asthma.',
                    'Contact lens wearers.'
                ],
                answer: 1,
                explain: 'Compare PDS: young myopic men, bilateral, Krukenberg spindle, mid-peripheral TIDs.'
            },
            {
                phase: '3. IOP 15 and 14',
                type: 'mcq',
                question: 'IOP is 15 mmHg in the affected eye and 14 in the other, discs and fields normal. What now?',
                options: [
                    'Discharge — IOP is normal.',
                    'Phase the IOP (PXF IOP fluctuates and often peaks in the morning) and monitor closely.',
                    'Start latanoprost.',
                    'LPI.'
                ],
                answer: 1,
                explain: 'A single office reading underestimates the peaks typical of PXF.'
            },
            {
                phase: '4. Morning 14 and 17',
                type: 'mcq',
                question: 'Morning IOPs are 14 and 17. What do you do, and how often do you review?',
                options: [
                    'Treat both eyes now.',
                    'No treatment yet, but review about every 3 months: PXF carries a high risk of glaucoma and progresses fast once it starts (EMGT).',
                    'Annual review is enough.',
                    'Refer for trabeculectomy.'
                ],
                answer: 1,
                explain: 'PXF without glaucoma: many clinicians review every 3–6 months with IOP and disc checks, fields at least yearly. Other glaucoma risk factors to weigh: age, family history, thin CCT, disc haemorrhage, myopia.'
            },
            {
                phase: '5. Now 14 and 20',
                type: 'mcq',
                question: 'At the 2nd/3rd review IOPs are 14 and 20. What would you do?',
                options: [
                    'Keep watching until it reaches 30.',
                    'Start treatment in the PXF eye (rising IOP and asymmetry in PXF), with a PGA first line if no contraindication, and refer to an ophthalmologist within 4 months.',
                    'Pilocarpine.',
                    'Oral acetazolamide.'
                ],
                answer: 1,
                explain: 'In PXF, rising IOP, a large diurnal swing or asymmetry are reasons to start earlier than you would in POAG.',
                recall: 'Another 2018 candidate was asked: “If it was a 10 mmHg difference would you treat?” — yes: large fluctuation and asymmetry are risk factors, especially in PXF.'
            },
            {
                phase: '6. If PGAs are contraindicated',
                type: 'mcq',
                question: 'PGAs are contraindicated. What next, and why 0.5% rather than 0.25%?',
                options: [
                    'Timolol 0.5% mane, if no asthma, COPD, bradycardia or heart block. 0.5% is the usual choice for darker irides (melanin binds the drug); in light irides 0.25% gives a similar effect with fewer systemic effects.',
                    'Pilocarpine 4% QID.',
                    'Brimonidine in a 1-year-old.',
                    'Nothing works in PXF.'
                ],
                answer: 0,
                explain: 'Timolol: non-selective β-blocker reducing aqueous production; side effects bradycardia, bronchospasm, fatigue, depression, masking hypoglycaemia. TGA category C.'
            },
            {
                phase: '7. Pregnancy',
                type: 'mcq',
                question: 'Another 2018 examiner asked: what would you choose in pregnancy, and what class is brimonidine?',
                options: [
                    'PGAs — they are category A.',
                    'Avoid drops if you safely can (observe, or SLT). If needed: brimonidine (B3; stop before delivery — neonatal apnoea — and avoid while breastfeeding) or timolol (C; lowest dose, punctal occlusion; watch for fetal bradycardia). Avoid PGAs (B3 and uterotonic) and CAIs where possible.',
                    'Oral acetazolamide.',
                    'Any drop is fine in the third trimester.'
                ],
                answer: 1,
                explain: 'Co-manage with the obstetrician and ophthalmologist.'
            }
        ]
    },
    {
        id: 'r2018-mk-vs-marginal',
        category: 'cornea',
        title: 'Peripheral Defect: Microbial or Marginal?',
        theme: 'Microbial vs Marginal Keratitis',
        years: ['2018'],
        patient: 'Adult with a red, sore eye.',
        stem: 'White-light photo: a small, irregular epithelial defect close to the limbus with some infiltrate.',
        steps: [
            {
                phase: '1. Differentiate',
                type: 'match',
                question: 'How do you tell microbial keratitis from marginal keratitis? Match each feature.',
                pairs: [
                    { label: 'Clear zone between the infiltrate and the limbus, at 2, 4, 8 or 10 o’clock, with blepharitis', answer: 'Marginal keratitis' },
                    { label: 'Larger, more central, epithelial defect ≥ infiltrate, AC reaction, discharge, lid oedema, marked pain', answer: 'Microbial keratitis' }
                ],
                distractors: ['Adenoviral SEIs'],
                explain: 'Size, location, shape, depth, epithelial defect, AC reaction, discharge, lid oedema and pain all help.'
            },
            {
                phase: '2. Risk factors & organisms',
                type: 'match',
                question: 'Match each patient group to the most common bacterial cause.',
                pairs: [
                    { label: 'Contact lens wearer', answer: 'Pseudomonas aeruginosa' },
                    { label: 'Non-CL wearer with ocular surface disease or trauma', answer: 'Staphylococcus aureus / coagulase-negative staph / Streptococcus pneumoniae' }
                ],
                distractors: ['Chlamydia trachomatis'],
                explain: 'Risk factors: CL wear (especially overnight), trauma, ocular surface disease, lid malposition, topical steroids, immunosuppression.'
            },
            {
                phase: '3. Treatment',
                type: 'mcq',
                question: 'You decide it is a small peripheral bacterial keratitis. How do you treat it?',
                options: [
                    'Ciprofloxacin 0.3%: every 15 min for the first 6 hours, every 30 min for the rest of the day, hourly overnight and the next day, then taper on response (never below QID). Review the next day. Cycloplegic (e.g. atropine 1%) if there is AC reaction.',
                    'Chloramphenicol BD.',
                    'Prednisolone acetate q1h.',
                    'Ciprofloxacin QID from the start.'
                ],
                answer: 0,
                explain: 'Monotherapy with a fluoroquinolone is fine for small, peripheral, non-sight-threatening ulcers.'
            },
            {
                phase: '4. At review',
                type: 'mcq',
                question: 'What do you expect to see at the next-day review if treatment is working?',
                options: [
                    'Complete resolution.',
                    'Symptoms (pain) improving and signs not worse: infiltrate no larger, edges sharper, less AC reaction. Full healing takes days to weeks.',
                    'A larger infiltrate is normal on day 1.',
                    'A new hypopyon.'
                ],
                answer: 1,
                explain: 'Worse at 24–48 h → culture and refer.'
            },
            {
                phase: '5. Steroids?',
                type: 'mcq',
                question: 'Would you consider a steroid?',
                options: [
                    'Yes, from day 1.',
                    'Not for this peripheral ulcer. SCUT suggested possible benefit only in central ulcers with poor presenting vision (and non-Nocardia), started after ~48 h of effective antibiotic; if used, add only once clearly improving / re-epithelialising, with antibiotic cover.',
                    'Steroids are contraindicated forever after keratitis.',
                    'Only oral steroids.'
                ],
                answer: 1,
                explain: 'The aim of steroid is to reduce scarring in the visual axis, not to treat infection.'
            },
            {
                phase: '6. Dual therapy',
                type: 'viva',
                question: 'When would you use dual therapy, why two drugs, and why refer older patients?',
                points: [
                    'Fortified cefazolin 5% + tobramycin 1.3% (hospital-compounded) for large, deep, central or sight-threatening ulcers (1-2-3 rule)',
                    'Cefazolin: β-lactam cephalosporin, inhibits cell-wall (peptidoglycan cross-linking) synthesis — Gram-positive cover',
                    'Tobramycin: aminoglycoside, binds the 30S subunit, inhibits protein synthesis — Gram-negative including Pseudomonas',
                    'Broad, complementary cover before culture results; alternate drops a few minutes apart',
                    'Older patients: thinner corneas and higher perforation risk, worse outcomes, comorbidities, harder to manage hourly drops — lower threshold to refer or admit'
                ],
                explain: 'Gram-positive bacteria have a thick peptidoglycan wall; Gram-negatives have a thin wall plus an outer lipopolysaccharide membrane (which is why they stain pink and resist some drugs).',
                recall: 'The 2018 candidate said cefazolin and tobramycin are “synergistic if used one after the other”. They are complementary in spectrum; give them a few minutes apart so one doesn’t wash out the other.'
            }
        ]
    }
);
