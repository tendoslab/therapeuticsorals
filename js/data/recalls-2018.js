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
                    'Ocular rosacea with episcleral injection'
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
                    'Prednisolone acetate 1% QID plus an aqueous suppressant (e.g. timolol 0.5% BD if no asthma or heart block, or brimonidine/CAI); review in 1–2 days until IOP normalises; avoid PGAs and pilocarpine.',
                    'Pilocarpine 2% QID plus timolol 0.5% BD to open the angle and lower IOP quickly; no steroid, since the inflammation in PSS is too mild to matter; review in 1–2 weeks once the spike has passed by itself.',
                    'Latanoprost 0.005% nocte plus prednisolone acetate hourly: the PGA is the most effective drug and works within hours; review in a month, since PSS spikes always settle within a week.',
                    'Atropine 1% TDS plus FML BD and observe: the IOP spike in PSS does no harm because it is short-lived, so IOP-lowering drops aren’t needed; review in 2 weeks to stop the atropine.'
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
                    'Nothing more: PSS is benign and self-limiting, never causes glaucomatous damage however often it recurs, and doesn’t need ophthalmology involvement.',
                    'Refer to ophthalmology: recurrent PSS is linked to CMV (aqueous tap for PCR; ganciclovir/valganciclovir reduces recurrences). Monitor disc and field, as repeated spikes can cause glaucoma.',
                    'Start lifelong pilocarpine 2% BD to prevent further spikes, and repeat gonioscopy every 3 months, since recurrent PSS eventually converts to angle closure.',
                    'Book a laser peripheral iridotomy: recurrent spikes show intermittent pupil block that the open angle on gonioscopy missed, and LPI prevents further attacks and protects the optic nerve from repeated spikes.'
                ],
                answer: 1,
                explain: 'Repeated episodes add up: about a quarter of patients eventually show glaucomatous damage. Baseline OCT and fields are worth doing between attacks. LPI does nothing for an open-angle inflammatory condition.'
            },
            {
                phase: '6. Twist: IOP climbs again',
                type: 'mcq',
                question: 'At 3 weeks the KPs and cells are gone, but IOP has risen again to 34 mmHg while he is still on prednisolone acetate QID. Most likely reason?',
                options: [
                    'A new PSS attack: IOP rising again a day or two before the KPs and cells reappear.',
                    'A steroid response: IOP rising weeks into steroid treatment with a quiet eye.',
                    'Angle closure caused by the steroid dilating the pupil slightly.',
                    'Measurement error from steroid-induced corneal thickening.'
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
                    'A reliable superior arcuate defect (fixation losses are low), confirming glaucoma: start treatment and repeat in 12 months.',
                    'A clover-leaf pattern with very high false negatives suggests inattention or fatigue. Don’t call it glaucomatous: re-instruct and repeat.',
                    'A bitemporal defect respecting the vertical midline, made unreliable by the false negatives: refer for an MRI first, then repeat the field.',
                    'Malingering: false negatives over 33% mean deliberate non-response; tell the patient they aren’t trying and repeat it today.'
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
                    'If normal: monitor (repeat OCT and field in 6–12 months). If a defect appears: confirm it is repeatable (another field within ~3 months) and matches the structural loss before calling it glaucoma.',
                    'Treat on the first field whatever the repeat shows: the original clover-leaf defect already proves glaucoma, and repeating only adds learning effects.',
                    'Discharge if the repeat is normal, since the disc asymmetry is physiological; if a defect appears, start treatment straight away without repeating it again.',
                    'Order an MRI for any abnormal field in a 30-year-old, then repeat fields only after the scan; a normal repeat still needs imaging, because asymmetric discs in young patients are presumed compressive until proven otherwise.'
                ],
                answer: 0,
                explain: 'A defect must be repeatable and should correspond to the structural change (superior rim thinning → inferior field loss). Confirming early with 2–3 fields in the first few months is consistent with standard baseline practice.'
            },
            {
                phase: '6. Twist: 70 years old with CMO',
                type: 'mcq',
                question: 'Now say the patient is 70, the defect is repeatable and matches the disc, IOP stays low-teens, and the patient had cystoid macular oedema after cataract surgery last year. What do you treat with?',
                options: [
                    'Latanoprost 0.005% nocte, aiming for ~30% reduction (CNTGS); PGAs are first line whatever the macular history.',
                    'Timolol 0.5% mane (if no asthma, COPD, bradycardia or heart block), aiming for ~30% reduction (CNTGS); brimonidine is the alternative.',
                    'Timolol 0.5% nocte, aiming for ~20% reduction (OHTS); night dosing covers the nocturnal pressure in NTG.',
                    'No IOP-lowering treatment, aiming instead for blood-pressure control via the GP, since NTG doesn’t respond to IOP lowering at all (CNTGS).'
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
                    'Colour vision (Ishihara) to exclude optic nerve involvement'
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
                    'Mechanical back pain: sudden onset after lifting, worse with exercise and better with rest, any age — every case needs HLA-B27 testing.',
                    'Inflammatory back pain: onset under ~40, insidious, morning stiffness over 30 min, pain at night or rest that improves with exercise.',
                    'Any back or joint pain in a patient with AAU, whatever its pattern, since all back pain in uveitis is ankylosing spondylitis.',
                    'Back pain only if it radiates down the leg with numbness (sciatica), which is the typical presentation of HLA-B27 disease.'
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
                    'Prednisolone acetate 1% q1–2h (loading q15min for the first hour if severe) plus atropine 1% BD–TDS for spasm, the barrier and synechiae; review the next day.',
                    'FML 0.1% BD plus cyclopentolate 1% TDS for spasm and synechiae; review in 2 weeks, since milder steroids avoid steroid response in young men.',
                    'Prednisolone acetate 1% QID plus pilocarpine 2% QID to keep the pupil moving and prevent synechiae; review in a week, once the steroid has built up to its full effect.',
                    'Oral prednisolone 50 mg via the GP as first line plus atropine 1% BD, since topical steroids don’t reach the ciliary body; review in a week.'
                ],
                answer: 0,
                explain: 'Frequency follows severity. Taper once there is a 2-step SUN improvement and continue until cells are zero, then taper slowly (e.g. drop one drop a day each week).'
            },
            {
                phase: '5. Breaking synechiae',
                type: 'mcq',
                question: 'You note posterior synechiae. How do you break them?',
                options: [
                    'Escalate: pilocarpine 2% to pull the iris centrally → atropine 1% → pilocarpine again (the alternation breaks adhesions) → refer for laser if still stuck.',
                    'Escalate: atropine 1% → phenylephrine 2.5% → phenylephrine 10% (check BP) → pledget soaked in phenylephrine 10% in the fornix → refer if still stuck.',
                    'Escalate: cyclopentolate 1% → atropine 1% → homatropine 2% (three antimuscarinics add up) → refer for surgical synechiolysis if still stuck.',
                    'Wait: synechiae release on their own within 2–3 days of starting steroids, so add nothing; massage the globe through the lid if any remain at a week.'
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
                    'Exposure keratopathy (inferior band of staining)'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Acanthamoeba: CL wearer, pain out of proportion, perineural infiltrates. HZO: dermatomal rash, raised “stuck-on” lesions without end bulbs.'
            },
            {
                phase: '3. Pathophysiology',
                type: 'mcq',
                question: 'Explain the pathophysiology of HSV vs herpes zoster.',
                options: [
                    'HSV: primary infection is chickenpox, latent in the lacrimal gland, reactivating once in old age as dermatomal shingles. VZV: latent in the cornea itself, reactivating often with stress or fever, giving true dendrites with terminal bulbs.',
                    'HSV: primary infection (often childhood), latent in the trigeminal ganglion, reactivates (stress, fever, UV) down the nerve; recurs often. VZV: chickenpox, latent in sensory ganglia, reactivates usually once as dermatomal shingles (HZO if V1).',
                    'Both are latent in the cornea and reactivate with stress; HSV gives dermatomal rashes respecting the midline, while VZV gives recurrent cold sores and true dendrites, recurring every few months.',
                    'Both are bacterial toxin-mediated diseases from Staph colonising the trigeminal nerve; HSV recurs after each lid infection, while VZV recurs only after chickenpox vaccination in children, as dermatomal shingles.'
                ],
                answer: 1,
                explain: 'Both are double-stranded DNA herpesviruses. Hutchinson’s sign (nasociliary branch, tip of the nose) predicts ocular involvement in HZO.'
            },
            {
                phase: '4. HSV-1 vs HSV-2',
                type: 'mcq',
                question: 'Would the presentation differ with HSV-1 vs HSV-2?',
                options: [
                    'Eye disease is mostly HSV-1 and looks the same; HSV-2 classically infects neonates at birth, can be more severe and often has systemic involvement.',
                    'Eye disease is mostly HSV-2 in adults and gives geographic ulcers; HSV-1 causes only stromal disease and never epithelial dendrites, so PCR typing guides treatment.',
                    'HSV-2 never infects the eye; any herpetic eye disease is HSV-1, so typing by PCR is unnecessary for adults or neonates.',
                    'HSV-1 and HSV-2 are distinguished by the dendrite shape: HSV-2 dendrites lack terminal bulbs and stain only with rose bengal.'
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
                    'Prednisolone acetate QID to limit scarring plus aciclovir 3% 5×/day; avoid debridement, which spreads the virus across the cornea; review in 2 weeks, since most dendrites heal within 4–6 weeks.',
                    'Debride the infected edges plus a topical antiviral (aciclovir 3% or ganciclovir gel 5×/day; oral aciclovir via GP if needed); review at 1–2 days then weekly; most heal in 1–2 weeks.',
                    'Chloramphenicol QID only (antivirals are too toxic for epithelial disease); review in a month; most dendrites heal by themselves within 6 weeks.',
                    'Bandage contact lens plus oral aciclovir 400 mg BD for 12 months (HEDS); no topical antiviral; review in a month once the lens is removed.'
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
                    'Young myopic men (20s–40s), Caucasian; myocilin gene variants; always bilateral and symmetric.',
                    'Older (60s+), often Scandinavian or Mediterranean; LOXL1 variants; often unilateral at first.',
                    'Children with atopy and asthma; HLA-B27 positive; bilateral with a seasonal pattern.',
                    'Middle-aged East Asian hyperopic women; CYP1B1 variants; unilateral and painful.'
                ],
                answer: 1,
                explain: 'Compare PDS: young myopic men, bilateral, Krukenberg spindle, mid-peripheral TIDs.'
            },
            {
                phase: '3. IOP 15 and 14',
                type: 'mcq',
                question: 'IOP is 15 mmHg in the affected eye and 14 in the other, discs and fields normal. What now?',
                options: [
                    'Discharge to routine 2-yearly care, since an IOP of 15 rules out PXF glaucoma risk.',
                    'Phase the IOP (PXF IOP fluctuates and often peaks in the morning) and monitor closely.',
                    'Start latanoprost in the PXF eye now, since all PXF eyes need treatment from diagnosis.',
                    'Refer for prophylactic LPI, since PXF eyes always have occludable angles.'
                ],
                answer: 1,
                explain: 'A single office reading underestimates the peaks typical of PXF.'
            },
            {
                phase: '4. Morning 14 and 17',
                type: 'mcq',
                question: 'Morning IOPs are 14 and 17. What do you do, and how often do you review?',
                options: [
                    'Treat both eyes now: a 3 mmHg asymmetry in PXF is diagnostic of glaucoma, so review in 4 weeks (EMGT).',
                    'No treatment yet, but review about every 3 months: PXF has a high glaucoma risk and progresses fast once it starts (EMGT).',
                    'No treatment and annual review: morning IOPs under 21 mean the PXF is inactive, and conversion to glaucoma is rare (EMGT, OHTS).',
                    'Refer for trabeculectomy: PXF eyes respond poorly to drops, so early surgery is preferred (EMGT).'
                ],
                answer: 1,
                explain: 'PXF without glaucoma: many clinicians review every 3–6 months with IOP and disc checks, fields at least yearly. Other glaucoma risk factors to weigh: age, family history, thin CCT, disc haemorrhage, myopia.'
            },
            {
                phase: '5. Now 14 and 20',
                type: 'mcq',
                question: 'At the 2nd/3rd review IOPs are 14 and 20. What would you do?',
                options: [
                    'Keep watching until the IOP reaches 30 mmHg on two visits, since EMGT showed treatment in PXF only slows progression once IOP is above 30.',
                    'Start treatment in the PXF eye (rising IOP and asymmetry), a PGA first line if no contraindication, and refer within 4 months.',
                    'Start pilocarpine 2% QID, since miotics reduce the release of PXF material and prevent progression.',
                    'Arrange oral acetazolamide via the GP, since PXF needs systemic treatment of the fibrillopathy.'
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
                    'Timolol 0.5% mane if no asthma, COPD, bradycardia or heart block; 0.5% suits darker irides (melanin binds drug), while 0.25% is similar in light irides with fewer systemic effects.',
                    'Timolol 0.25% mane for everyone; 0.5% is reserved for light irides, because melanin increases drug effect, so dark irides need the weaker strength to avoid systemic toxicity.',
                    'Pilocarpine 4% QID; β-blockers are contraindicated in PXF, and the 0.5% vs 0.25% question applies only to pilocarpine, where the stronger dose is needed in dark irides.',
                    'Timolol 0.5% nocte for maximum effect; the strength only affects cosmetic iris darkening, not IOP lowering or systemic effects, so 0.5% is always preferred.'
                ],
                answer: 0,
                explain: 'Timolol: non-selective β-blocker reducing aqueous production; side effects bradycardia, bronchospasm, fatigue, depression, masking hypoglycaemia. TGA category C.'
            },
            {
                phase: '7. Pregnancy',
                type: 'mcq',
                question: 'Another 2018 examiner asked: what would you choose in pregnancy, and what class is brimonidine?',
                options: [
                    'Use PGAs first: they are category A and so little is absorbed that they are safe throughout pregnancy and breastfeeding. Brimonidine is category D and contraindicated at any stage, as is timolol 0.5%.',
                    'Avoid drops if you safely can (observe or SLT). If needed: brimonidine (B3; stop before delivery, avoid breastfeeding) or timolol (C; lowest dose, punctal occlusion). Avoid PGAs (uterotonic) and CAIs.',
                    'Use oral acetazolamide via the GP: it is category A and the safest IOP-lowering drug in pregnancy. Brimonidine is category A too and safe while breastfeeding.',
                    'Any drop is fine after the first trimester: organogenesis is complete by 12 weeks. Brimonidine is category B1 and can be continued through delivery and breastfeeding.'
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
                    'Ciprofloxacin 0.3%: q15min for 6 h, q30min for the rest of the day, hourly overnight and the next day, then taper on response (never below QID); review the next day; cycloplegic if AC reaction.',
                    'Ciprofloxacin 0.3% QID from the start for 7 days, then stop; review in a week; a cycloplegic isn’t needed for small ulcers, and tapering below QID is fine once the infiltrate looks smaller on review.',
                    'Chloramphenicol 0.5% hourly for 24 h, then QID for a week (it covers Pseudomonas as well as cipro); review in 3 days; add prednisolone acetate once the pain eases.',
                    'Prednisolone acetate hourly plus ciprofloxacin QID, since most peripheral ulcers are immune; review in 3 days; taper the antibiotic to daily once the infiltrate shrinks.'
                ],
                answer: 0,
                explain: 'Monotherapy with a fluoroquinolone is fine for small, peripheral, non-sight-threatening ulcers.'
            },
            {
                phase: '4. At review',
                type: 'mcq',
                question: 'What do you expect to see at the next-day review if treatment is working?',
                options: [
                    'Complete resolution of the infiltrate and epithelial defect within 24 hours if the organism is sensitive.',
                    'Pain improving and signs no worse: infiltrate no larger, edges sharper, less AC reaction. Full healing takes days to weeks.',
                    'A larger infiltrate and more pain on day 1 are expected, because the antibiotic itself causes inflammation, so continue unchanged.',
                    'A small new hypopyon is expected as dead bacteria settle, so continue the same treatment and review in a week.'
                ],
                answer: 1,
                explain: 'Worse at 24–48 h → culture and refer.'
            },
            {
                phase: '5. Steroids?',
                type: 'mcq',
                question: 'Would you consider a steroid?',
                options: [
                    'Yes, from day 1 for every bacterial ulcer: SCUT showed that starting the steroid with the first antibiotic dose halved scarring and perforation rates in both peripheral and central ulcers.',
                    'Not for this peripheral ulcer. SCUT suggested benefit only in central ulcers with poor vision (not Nocardia), after ~48 h of effective antibiotic; add only once clearly improving, with cover.',
                    'Never: steroids are contraindicated for life after any keratitis (SCUT showed they caused perforation in most ulcers), even once the epithelium has healed.',
                    'Only oral steroids via the GP: SCUT showed topical steroids slow epithelial healing, whereas oral prednisolone reduces scarring without affecting the cornea.'
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
    },
{
        id: 'r2018-anna-disc-haem',
        category: 'glaucoma',
        title: 'Anna’s Disc Haemorrhage: OHT, Drugs and Steroid Response',
        theme: 'High-risk OHT',
        years: ['2018'],
        patient: 'Adult attending for a routine exam (Anna’s posterior-eye case).',
        stem: 'Disc photos without the fovea in shot. One disc has a splinter haemorrhage inferiorly.',
        steps: [
            {
                phase: '1. Describe',
                type: 'mcq',
                question: 'The candidate began by commenting on disc size. What should the description focus on instead?',
                options: [
                    'C/D ratio and symmetry, rim (ISNT, notching), PPA, the disc haemorrhage and RNFL; say size can’t be judged without a reference such as the fovea.',
                    'Disc size first, estimated against the vessel calibre, then C/D, rim and the haemorrhage; the fovea isn’t needed as a reference if the major vessels are visible.',
                    'C/D ratio only, because rim and RNFL can’t be assessed on a photo; the haemorrhage is too common to be worth mentioning.',
                    'Colour of the disc and the arteriovenous ratio, then size from the photo magnification; the haemorrhage is best described after OCT.'
                ],
                answer: 0,
                explain: 'Without a reference (fovea, DDLS, a calibrated lens) disc size is a guess. The haemorrhage is the most important finding.',
                recall: 'The 2018 candidate commented on size without the fovea in shot and was corrected.'
            },
            {
                phase: '2. Differentials',
                type: 'multi',
                question: 'Differentials for a disc haemorrhage?',
                options: [
                    'Normal-tension glaucoma',
                    'POAG / high-risk OHT',
                    'Posterior vitreous detachment',
                    'Diabetes and hypertension',
                    'Physiological large cupping',
                    'Optic disc pit'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Physiological cupping doesn’t bleed. A PVD is possible but usually symptomatic (flashes, floaters).'
            },
            {
                phase: '3. Results',
                type: 'reveal',
                text: 'IOP 26 mmHg OU. CCT 585 µm OU. Mother has glaucoma. Fields clear.'
            },
            {
                phase: '4. Work-up',
                type: 'multi',
                question: 'What else would you do?',
                options: [
                    'IOP phasing',
                    'Gonioscopy',
                    'Repeat field to establish a baseline',
                    'OCT RNFL/GCL',
                    'Dilated fundus exam (PVD, vascular causes)',
                    'B-scan ultrasound of the optic disc'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'GP for BP and diabetes screening as well.'
            },
            {
                phase: '5. Diagnosis & plan',
                type: 'mcq',
                question: 'What is your diagnosis and plan?',
                options: [
                    'High-risk OHT or pre-perimetric glaucoma (family history, IOP 26, haemorrhage); repeat OCT in ~3 months, GP for BP/diabetes, and treat — OHTS showed treatment roughly halves conversion.',
                    'Low-risk OHT because CCT 585 means the true IOP is about 20; review in 2 years, since OHTS showed treatment only helps when CCT is under 555.',
                    'Early POAG on the basis of the haemorrhage alone; treat both eyes with a PGA and refer within 24 hours, since OHTS showed a disc haemorrhage means conversion to glaucoma within a year.',
                    'Physiological OHT: the haemorrhage is from the PVD, so monitor yearly, as OHTS showed treatment made no difference when the field is clear.'
                ],
                answer: 0,
                explain: 'Moorfields-style vs NHMRC risk tables differ, but the combination of family history, IOP in the mid-20s and a disc haemorrhage puts her well above average risk.'
            },
            {
                phase: '6. Latanoprost',
                type: 'mcq',
                question: 'You choose latanoprost 0.005% at night. What are its onset, peak and expected IOP reduction?',
                options: [
                    'Onset about 3–4 hours, peak about 8–12 hours, roughly 25–35% IOP reduction; full steady effect after a few weeks.',
                    'Onset about 30 minutes, peak about 2 hours, roughly 20–25% IOP reduction; full steady effect after the first dose.',
                    'Onset about 1 hour, peak about 24 hours, roughly 40–50% IOP reduction; full steady effect after about 6 months.',
                    'Onset about 12 hours, peak about 3 days, roughly 10–15% IOP reduction; full steady effect after about 3 months.'
                ],
                answer: 0,
                explain: 'Timolol by comparison: onset ~30 min, peak ~1–2 h, ~20–25% reduction.'
            },
            {
                phase: '7. PGAs in pregnancy',
                type: 'mcq',
                question: 'What do you say about PGAs in pregnancy, and what category are they?',
                options: [
                    'Avoid them throughout pregnancy where possible (uterotonic prostaglandins); TGA category B3. Consider observation or SLT, or brimonidine/timolol with care.',
                    'They are only a problem in the third trimester; TGA category B3. Continue them until about 28 weeks, then switch to brimonidine, which is safe until delivery.',
                    'They are safe throughout pregnancy because so little is absorbed; TGA category A. Punctal occlusion is unnecessary at 0.005%.',
                    'Avoid them only in the first trimester (organogenesis); TGA category D. After 12 weeks they are the preferred drop, ahead of timolol and brimonidine.'
                ],
                answer: 0,
                explain: 'The examiner pushed back on “only the last trimester”. Switching drugs during pregnancy is acceptable when needed.',
                recall: 'The 2018 candidate said PGAs are only bad in the last trimester and “dug a hole”.'
            },
            {
                phase: '8. Second choice: timolol',
                type: 'mcq',
                question: 'Your second choice is timolol. Which strength and timing, and why?',
                options: [
                    'Timolol 0.25% in the morning: in light irides 0.25% gives nearly the same effect with fewer systemic effects, and aqueous production (the target) is highest by day.',
                    'Timolol 0.5% at night: night dosing is stronger because aqueous production peaks during sleep, and 0.5% is needed in light irides to overcome melanin binding.',
                    'Timolol 0.25% at night: the lower strength is safer at night because nocturnal blood pressure is higher, so systemic absorption matters less.',
                    'Timolol 0.5% twice daily in all patients: strength makes no difference to systemic effects, and once-daily dosing never controls IOP.'
                ],
                answer: 0,
                explain: 'Darker irides bind more drug (melanin), so 0.5% may be needed there. Evening β-blockers can worsen nocturnal hypotension — the point the candidate retracted was valid.'
            },
            {
                phase: '9. β-blocker contraindications',
                type: 'multi',
                question: 'The examiner asks for β-blocker contraindications, and specifically “which heart conditions?”',
                options: [
                    'Asthma or a history of asthma',
                    'Severe COPD (chronic obstructive pulmonary disease)',
                    'Sinus bradycardia; second- or third-degree heart block',
                    'Uncontrolled (overt) heart failure or cardiogenic shock',
                    'Diabetes — a precaution, because it can mask hypoglycaemia',
                    'Hypertension well controlled on an ACE inhibitor'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Concurrent systemic β-blocker is a precaution (additive systemic effects, less extra IOP lowering).',
                recall: 'The 2018 candidate forgot what the C in COPD stands for (chronic) and couldn’t name the specific heart conditions.'
            },
            {
                phase: '10. Steroid response',
                type: 'mcq',
                question: 'What proportion of the population responds to topical steroids, who is most likely to, and when does it happen?',
                options: [
                    'About 5% high (>15 mmHg) and a third moderate (6–15 mmHg); most likely in POAG, their first-degree relatives, children, high myopes and type 1 diabetes; usually 2–6 weeks after starting.',
                    'About 30% high (>15 mmHg rise) and half moderate (6–15 mmHg); most likely in older women, hyperopes and type 2 diabetics; it usually appears within 24–48 hours of starting the steroid.',
                    'About 1% high (>15 mmHg) and 5% moderate (6–15 mmHg); most likely in angle-closure suspects and contact lens wearers; usually only after 6 months of use.',
                    'About 50% high (>15 mmHg) and the rest moderate (6–15 mmHg); equally likely in everyone, whatever their history; it usually appears only once the steroid has been stopped.'
                ],
                answer: 0,
                explain: 'Armaly/Becker classes. Up to ~90% of POAG patients respond to potent topical steroids.'
            }
        ]
    },
    {
        id: 'r2018-lily-synechiae',
        category: 'uveitis',
        title: 'Lily’s Synechiae: Breaking Them Safely',
        theme: 'Acute Anterior Uveitis',
        years: ['2018'],
        patient: 'Adult with a red, photophobic eye (Lily’s anterior-eye case).',
        stem: 'Photo of an eye with posterior synechiae. “What is the most likely diagnosis?”',
        steps: [
            {
                phase: '1. Work-up',
                type: 'multi',
                question: 'What is your work-up?',
                options: [
                    'History and review of systems',
                    'Cells and flare (SUN), KPs, synechiae',
                    'Fluorescein to exclude keratitis',
                    'Gonioscopy and IOP',
                    'Dilated fundus exam for intermediate/posterior involvement',
                    'Schirmer test before starting steroids'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Everting the lids is reasonable when you’re excluding a foreign body or conjunctivitis.'
            },
            {
                phase: '2. Why atropine?',
                type: 'multi',
                question: 'Why use atropine in AAU?',
                options: [
                    'Relieves ciliary spasm (pain and photophobia)',
                    'Breaks existing and prevents new posterior synechiae',
                    'Stabilises the blood–aqueous barrier',
                    'Lowers IOP by opening the trabecular meshwork',
                    'Kills the organisms causing the inflammation'
                ],
                answers: [0, 1, 2],
                explain: 'Atropine doesn’t lower IOP; it can raise it in narrow angles.'
            },
            {
                phase: '3. Atropine + phenylephrine',
                type: 'mcq',
                question: 'Why do atropine and phenylephrine work well together, and why not atropine with cyclopentolate?',
                options: [
                    'Atropine blocks the sphincter (antimuscarinic) and phenylephrine contracts the dilator (α1-agonist) — two muscles, so they add up. Cyclopentolate acts on the same receptor as atropine, so it adds little.',
                    'Phenylephrine blocks the sphincter more strongly than atropine because it is a stronger antimuscarinic. Cyclopentolate cancels atropine out because the two compete for the same muscarinic receptor.',
                    'Atropine contracts the dilator and phenylephrine relaxes the ciliary body, so together they reduce pain. Cyclopentolate is avoided only because it stings.',
                    'Both act on the dilator muscle, so combining them doubles the effective dose. Cyclopentolate acts on the dilator too, but it wears off too quickly to help, so it is avoided with atropine.'
                ],
                answer: 0,
                explain: 'Different mechanisms on different muscles: the basis of “synergy” here.'
            },
            {
                phase: '4. Still stuck',
                type: 'mcq',
                question: 'Atropine and phenylephrine haven’t broken the synechiae. What next?',
                options: [
                    'After topical anaesthetic, a cotton pledget soaked in phenylephrine 10% (± cyclopentolate) in the inferior fornix for about 15 minutes, with a BP check; refer for subconjunctival mydriatics if still stuck.',
                    'After topical anaesthetic, a cotton pledget soaked in pilocarpine 2% in the inferior fornix for about 15 minutes, which pulls the iris off the lens as the pupil constricts; refer only if the IOP rises.',
                    'Double the atropine to 1% QID for a week and recheck; synechiae usually release by themselves once the drop has built up over several days, and referral is only needed if IOP rises.',
                    'Massage the globe through the closed lid for a minute to mechanically break the adhesions, then repeat the phenylephrine 2.5% and atropine; refer only if the synechiae persist at 1 week.'
                ],
                answer: 0,
                explain: 'Pilocarpine constricts the pupil, the opposite of what you want.'
            },
            {
                phase: '5. Atropine contraindications',
                type: 'multi',
                question: 'What are the contraindications and cautions for atropine?',
                options: [
                    'Narrow or closed angles (risk of angle closure)',
                    'Hypersensitivity to atropine',
                    'Young children and Down syndrome (antimuscarinic toxicity) — caution, lower strength',
                    'Older patients with cardiovascular disease (tachycardia) — caution',
                    'Asthma or COPD',
                    'Previous uveitis in the fellow eye'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Toxicity signs: flushing, dry mouth, fever, tachycardia, confusion. Use punctal occlusion.',
                recall: 'The 2018 candidate said “narrow angles, old people with cardiovascular problems” — a good start.'
            },
            {
                phase: '6. Steroid regimen',
                type: 'mcq',
                question: 'For moderate AAU, what steroid regimen and taper did the candidate describe (and is it reasonable)?',
                options: [
                    'Pred Forte q1h until a 2-step SUN improvement, then QID until cells are zero, then taper by one drop a day each week; atropine BD. Reasonable.',
                    'Pred Forte QID from the start until cells are zero, then stop at once; atropine QID. Reasonable, because tapering isn’t needed for under 4 weeks.',
                    'FML BD until a 2-step SUN improvement, then stop and switch to atropine alone. Reasonable, because FML penetrates as well as Pred Forte.',
                    'Pred Forte q15min for 2 days around the clock, then stop; atropine once weekly. Reasonable, because a short burst avoids steroid response.'
                ],
                answer: 0,
                explain: 'Abrupt cessation causes rebound; longer courses need slower tapers.'
            },
            {
                phase: '7. Referral',
                type: 'multi',
                question: 'When would you refer? (The examiner “wanted something more” than the candidate’s list.)',
                options: [
                    'Bilateral disease',
                    'Systemic association suspected',
                    'Chronic or recurrent disease',
                    'Hypopyon or posterior involvement',
                    'Not responding to treatment',
                    'First episode with 1+ cells that is improving'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Bilateral was the one the candidate missed.'
            }
        ]
    }
);
