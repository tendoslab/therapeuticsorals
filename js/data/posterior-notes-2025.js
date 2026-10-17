// Cases from the 2025 posterior eye therapeutics study notes (OPTM6423 lecture notes, condition tables,
// revision questions and the midterm). These cover retinal, vascular and neuro topics the recall-based cases
// didn't, plus the glaucoma prescribing questions from the midterm. Errors in the notes are flagged in
// "Recall check" boxes.
window.CASES.push(
    {
        id: 'pn-pvd-break',
        category: 'retina',
        title: 'Flashes, Cobwebs and Tobacco Dust',
        theme: 'PVD, Retinal Break & RRD',
        years: ['Posterior notes'],
        patient: '62-year-old moderately myopic woman, pseudophakic right eye: 2 days of flashes in the right eye with eye movement and a new “spider-web” floater. No curtain.',
        stem: 'VA 6/6 R and L. Anterior segment quiet apart from the IOL.',
        steps: [
            {
                phase: '1. History',
                type: 'viva',
                question: 'What do you ask?',
                points: [
                    'Onset and duration of flashes and floaters; how many floaters (one ring vs a shower)',
                    'Any curtain, shadow or loss of field; any drop in vision',
                    'Flash quality: brief peripheral lightning-like flashes (retinal) vs a zig-zag spreading aura over ~20 min (migraine)',
                    'Risk factors: myopia, cataract surgery, trauma, previous tear or detachment, family history, lattice',
                    'Fellow eye history'
                ]
            },
            {
                phase: '2. Examination',
                type: 'multi',
                question: 'Which parts of the examination are essential?',
                options: [
                    'Dilated fundus exam of both eyes with indirect ophthalmoscopy and scleral indentation',
                    'Anterior vitreous for pigment (“tobacco dust”, Shafer sign)',
                    'Look for a Weiss ring over the disc and any vitreous or peripheral haemorrhage',
                    'B-scan ultrasound if a haemorrhage or media opacity hides the retina',
                    'Gonioscopy to exclude pigment dispersion as the cause of the vitreous pigment'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Skipping indentation misses around 1 in 10 breaks. Pigment in the anterior vitreous is strongly associated with a retinal break.'
            },
            {
                phase: '3. Act on the findings',
                type: 'match',
                question: 'Match the finding to the plan.',
                pairs: [
                    { label: 'Uncomplicated PVD: no break, no haemorrhage', answer: 'Repeat dilated exam with indentation in 4–6 weeks; RD warning' },
                    { label: 'No break, but mild VH or peripheral punctate haemorrhages', answer: 'Repeat dilated exam in about 2 weeks' },
                    { label: 'No break seen, but significant VH or tobacco dust', answer: 'Retinal specialist within 24 hours' },
                    { label: 'Acute symptomatic horseshoe tear', answer: 'Laser or cryotherapy within 24 hours' },
                    { label: 'Macula-on RRD', answer: 'Urgent same-day surgical referral' }
                ],
                distractors: ['Routine referral within 4 weeks'],
                explain: 'Macula-off RRDs are still repaired promptly, but visual outcomes are similar if done within about 7–10 days. Treated breaks are reviewed at 2 weeks (scar formation), 6 weeks, 3 months, then 6–12-monthly.'
            },
            {
                phase: '4. Advice',
                type: 'viva',
                question: 'What do you tell her before she leaves?',
                points: [
                    'Return immediately for a shower of new floaters, more flashes, a curtain or shadow, or blurred vision',
                    'Symptoms of PVD usually fade over weeks to months',
                    'The fellow eye is likely to have a PVD too (often within a few years)',
                    'Document the presence or absence of PVD and any subretinal fluid in the record'
                ]
            }
        ]
    },
    {
        id: 'pn-crao',
        category: 'retina',
        title: 'Sudden Vision Loss to Light Perception in a 74-Year-Old',
        theme: 'Central Retinal Artery Occlusion',
        years: ['Posterior notes'],
        patient: '74-year-old woman: sudden painless loss of vision in the right eye 2 hours ago. Hypertension, diabetes and high cholesterol (rosuvastatin, ramipril, metformin, insulin).',
        stem: 'VA R LP, L 6/7.5. Dense right RAPD. Whitened posterior pole retina with a cherry-red spot and narrowed, segmented arterioles.',
        steps: [
            {
                phase: '1. What now',
                type: 'mcq',
                question: 'What do you do?',
                options: [
                    'Treat it as a stroke: send her to an ED with a stroke unit now, and ask about GCA symptoms (ESR, CRP and platelets if 55 or over)',
                    'Start ocular massage and topical timolol, then book a routine ophthalmology appointment within the week to discuss intravitreal anti-VEGF',
                    'Refer her to her GP within 48 hours for blood tests and a carotid Doppler, since vision loss from a CRAO is already permanent by 2 hours',
                    'Give oral acetazolamide 500 mg in the practice and review her in 24 hours to see whether the retinal whitening has started to fade'
                ],
                answer: 0,
                explain: 'CRAO is an ocular stroke with a high risk of a cerebral stroke soon after (AAO 2018: immediate referral to an ED, preferably with a stroke centre). If GCA is suspected, high-dose steroids start the same day.',
                critical: true
            },
            {
                phase: '2. Why each test',
                type: 'match',
                question: 'Match each investigation to its purpose.',
                pairs: [
                    { label: 'ESR, CRP, platelets', answer: 'Exclude giant cell arteritis' },
                    { label: 'Carotid duplex ultrasound / MRA', answer: 'Find a carotid plaque source of emboli' },
                    { label: 'ECG and echocardiogram', answer: 'Find a cardiac source (AF, valve, thrombus)' },
                    { label: 'BP, fasting glucose, HbA1c, lipids', answer: 'Identify vascular risk factors' },
                    { label: 'Thrombophilia and vasculitic screen', answer: 'Under 50 with no vascular risk factors' }
                ],
                distractors: ['Fluorescein angiography as the first test'],
                explain: 'Under 50, think hypercoagulable states, vasculitis, emboli from the heart and drugs.'
            },
            {
                phase: '3. Ocular measures and follow-up',
                type: 'viva',
                question: 'What do you know about the ocular treatments that are sometimes tried, and how is she followed up?',
                points: [
                    'Anecdotal only if within 90–120 minutes: ocular massage, AC paracentesis, IOP lowering (acetazolamide, topical β-blocker); none proven in RCTs, not standard of care',
                    'They must not delay the stroke work-up',
                    'Repeat eye exam at 1–4 weeks: neovascularisation (NVI, NVA, NVD) in up to 20%, at a mean of about 4 weeks',
                    'If neovascularisation develops: PRP and/or anti-VEGF (ophthalmology)',
                    'BRAO: same urgent work-up; NV is rare, follow 3–6-monthly'
                ]
            }
        ]
    },
    {
        id: 'pn-gca',
        category: 'neuro',
        title: 'Jaw Pain When Chewing and a Pale, Swollen Disc',
        theme: 'Arteritic AION (Giant Cell Arteritis)',
        years: ['Posterior notes'],
        patient: '78-year-old man: woke with very poor vision in the right eye. Two weeks of headaches, scalp tenderness when brushing his hair, jaw pain when chewing, and trouble getting out of a chair.',
        stem: 'VA R 6/30, L 6/6. Right RAPD. Chalky-white, swollen right disc; left disc normal with a normal cup.',
        steps: [
            {
                phase: '1. Tests',
                type: 'multi',
                question: 'Which tests support the diagnosis?',
                options: [
                    'ESR (often very high)',
                    'CRP',
                    'Platelet count (raised)',
                    'Temporal artery biopsy (gold standard), ideally within a week or two of starting steroids',
                    'Temporal artery ultrasound (halo sign), MRI or PET-CT as alternatives',
                    'Fluorescein angiography before anything else, to confirm choroidal non-perfusion'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Polymyalgia rheumatica symptoms (shoulder/hip girdle stiffness) are common. Biopsy can wait; steroids can’t.'
            },
            {
                phase: '2. First step',
                type: 'mcq',
                question: 'What is your first step?',
                options: [
                    'Same-day emergency referral (phone the ophthalmology registrar or ED) so high-dose steroids start today, without waiting for the biopsy',
                    'Refer him to his GP for ESR and CRP and arrange to review him in a week with the results before deciding on a specialist referral',
                    'Refer him routinely to a neuro-ophthalmologist for a temporal artery biopsy, and only start steroids once the result confirms GCA',
                    'Arrange an urgent MRI of the brain and orbits to exclude a compressive lesion before any treatment, since steroids can mask a lymphoma'
                ],
                answer: 0,
                explain: 'Without steroids the fellow eye can be lost within days. Typical regimen (specialist): IV methylprednisolone for about 3 days, then oral prednisolone around 1 mg/kg, tapered slowly over 1–2 years with gastric protection.',
                critical: true
            },
            {
                phase: '3. Goals and follow-up',
                type: 'viva',
                question: 'What are the goals of treatment, the risks of not treating, and your follow-up role?',
                points: [
                    'Goal: protect the fellow eye and prevent further ischaemia (vision in the affected eye rarely recovers)',
                    'Untreated: bilateral blindness, stroke, aortic aneurysm and other large-vessel complications',
                    'Steroids are tapered against symptoms, ESR and CRP; long-term care with a rheumatologist and GP',
                    'Optometry: follow the optic nerve and fields, watch for steroid side effects (IOP, PSC cataract, CSCR)',
                    'NAION by contrast: younger, hyperaemic sectoral swelling, “disc at risk”, normal ESR/CRP; manage vascular risk and avoid bedtime antihypertensives and PDE-5 inhibitors'
                ],
                recall: 'The notes say AAION needs “about 2 years of IV corticosteroids”. IV methylprednisolone is given for only the first few days; the long tail is oral prednisolone (the notes later say 6–12 months; many need 1–2 years).'
            }
        ]
    },
    {
        id: 'pn-amd',
        category: 'retina',
        title: 'Drusen, a Smoker and the Supplement Question',
        theme: 'AMD Staging, AREDS2 and Referral',
        years: ['Posterior notes'],
        patient: '71-year-old man, smoker of 30 pack-years; his father had “macular degeneration”. Asks whether he should take eye vitamins.',
        stem: 'VA 6/7.5 OU. Several large drusen (over 125 µm) and pigmentary change at both maculae. No fluid, blood or exudate; OCT shows drusenoid RPE elevation only.',
        steps: [
            {
                phase: '1. Stage',
                type: 'match',
                question: 'Match each finding to its Beckman stage.',
                pairs: [
                    { label: 'Small drusen only (under 63 µm)', answer: 'Normal ageing' },
                    { label: 'Medium drusen (63–125 µm), no pigment change', answer: 'Early AMD' },
                    { label: 'Large drusen and/or pigmentary abnormalities', answer: 'Intermediate AMD' },
                    { label: 'Geographic atrophy or neovascular AMD', answer: 'Late AMD' }
                ],
                distractors: ['Pre-perimetric AMD'],
                explain: 'He has intermediate AMD in both eyes: roughly a 1 in 5 chance of progressing to late AMD within 5 years. Reticular pseudodrusen also raise risk.'
            },
            {
                phase: '2. Supplements',
                type: 'multi',
                question: 'Which statements about AREDS2-type supplements are correct?',
                options: [
                    'Indicated for intermediate AMD (or late AMD in one eye), reducing progression to late AMD by about 25%',
                    'Formula: vitamin C 500 mg, vitamin E 400 IU, zinc 80 mg, copper 2 mg, lutein 10 mg, zeaxanthin 2 mg',
                    'Beta-carotene was removed because it raised lung cancer risk in smokers and ex-smokers',
                    'Adding omega-3 gave no extra benefit',
                    'Recommended for anyone with a family history of AMD to prevent onset',
                    'They also slow cataract progression'
                ],
                answers: [0, 1, 2, 3],
                explain: 'No evidence for supplements in healthy people or early AMD. Stopping smoking matters more (it roughly doubles risk). Check with the GP if he has other medical conditions (zinc dose).'
            },
            {
                phase: '3. Review and referral',
                type: 'mcq',
                question: 'How often do you review him, and how fast do you refer if things change?',
                options: [
                    'Intermediate AMD: review 6–12-monthly with home Amsler; new symptomatic neovascular AMD: refer within 1 week; asymptomatic fluid on OCT: within 2 weeks',
                    'Intermediate AMD: refer now to an ophthalmologist for intravitreal injections to prevent conversion, then review every 3 months with the retinal specialist',
                    'Intermediate AMD: review every 2 years like any adult; new symptomatic neovascular AMD: routine referral within 4 weeks with an OCT report attached',
                    'Intermediate AMD: review annually; any change in the Amsler grid: refer within 3 months for fluorescein angiography before treatment is considered'
                ],
                answer: 0,
                explain: 'Optometry Australia/OBA AMD guidance. Early AMD at least annually; late (GA or inactive nAMD) every 3–6 months. Anti-VEGF (ranibizumab, aflibercept, faricimab, off-label bevacizumab) is usually given treat-and-extend.'
            },
            {
                phase: '4. Counselling',
                type: 'viva',
                question: 'What do you advise him?',
                points: [
                    'Stop smoking (strongest modifiable risk); support via GP/Quitline',
                    'Diet rich in leafy greens, fish, nuts (Mediterranean-type), less red meat',
                    'Daily Amsler grid, each eye; return within days for new distortion, a missing patch or sudden blur',
                    'Children and siblings should have eye checks',
                    'Low vision services and driving status once vision is impaired'
                ]
            }
        ]
    },
    {
        id: 'pn-diabetes',
        category: 'retina',
        title: 'Moderate NPDR and a Pregnancy Plan',
        theme: 'Diabetic Retinopathy: Review, Referral & Fenofibrate',
        years: ['Posterior notes'],
        patient: '34-year-old Aboriginal woman with type 2 diabetes for 8 years (HbA1c 8.4%, BP 142/88). She is planning a pregnancy.',
        stem: 'VA 6/6 OU. Microaneurysms and dot-blot haemorrhages in all quadrants of both eyes, a few hard exudates temporally; no venous beading, IRMA or new vessels. OCT: no centre-involving oedema.',
        steps: [
            {
                phase: '1. Review and referral',
                type: 'match',
                question: 'Match each finding to the Optometry Australia review or referral interval.',
                pairs: [
                    { label: 'No retinopathy, low risk', answer: 'Every 2 years' },
                    { label: 'No retinopathy, but Aboriginal or Torres Strait Islander or poorly controlled', answer: 'Annually' },
                    { label: 'Mild NPDR without DMO', answer: 'Every 6–12 months' },
                    { label: 'Moderate NPDR without DMO', answer: 'Every 3–6 months (refer if high risk)' },
                    { label: 'DMO with reduced vision', answer: 'Ophthalmologist within 4 weeks' },
                    { label: 'PDR', answer: 'Urgent ophthalmology referral' }
                ],
                distractors: ['Every 5 years'],
                explain: 'PRP is indicated for high-risk PDR (NVD over a quarter disc area, any NVD or NVE with haemorrhage, any NVI or NVA). DMO is treated with intravitreal anti-VEGF or steroid.'
            },
            {
                phase: '2. Pregnancy',
                type: 'mcq',
                question: 'How should her eyes be monitored through pregnancy?',
                options: [
                    'Dilated exam before conception and in the first trimester, then as findings dictate, and again 6–12 weeks post-partum',
                    'No extra monitoring is needed because pregnancy slows diabetic retinopathy; resume her usual review once she has stopped breastfeeding',
                    'Dilated exam at 36 weeks only, since mydriatics are contraindicated in the first two trimesters and retinopathy rarely changes before then',
                    'Monthly dilated exams from conception until delivery for every pregnant woman with diabetes, whatever the baseline retinopathy grade'
                ],
                answer: 0,
                explain: 'Pregnancy can accelerate retinopathy, especially with rapid tightening of glucose control. Gestational diabetes alone needs no eye surveillance unless diabetes persists.'
            },
            {
                phase: '3. Fenofibrate',
                type: 'mcq',
                question: 'Her GP asks you about fenofibrate. What is accurate?',
                options: [
                    'It is TGA-approved to slow existing retinopathy in type 2 diabetes (145 mg daily); the GP prescribes it alongside glucose and BP control',
                    'Optometrists can prescribe it under the OBA list once moderate NPDR is documented, at 145 mg daily, with a repeat review of the retina in 3 months',
                    'It prevents retinopathy developing in anyone with diabetes, so it should be started at diagnosis of diabetes regardless of the retinal findings',
                    'It is first-line for diabetic macular oedema and replaces anti-VEGF injections when the oedema is centre-involving, as it works within weeks'
                ],
                answer: 0,
                explain: 'FIELD and ACCORD-Eye showed slower progression. Little data in severe NPDR, PDR or DMO. Avoid in pregnancy and severe renal disease; gallstones and myopathy are adverse effects.'
            },
            {
                phase: '4. Communication',
                type: 'viva',
                question: 'What goes in your letter to her GP?',
                points: [
                    'Visual acuity and whether a dilated exam was done',
                    'Whether retinopathy is present and its grade (and DMO status)',
                    'When the next eye review is due',
                    'Systemic risk factors noted (HbA1c, BP) and a request to optimise them before pregnancy',
                    'Your planned review interval through pregnancy'
                ]
            }
        ]
    },
    {
        id: 'pn-hcq',
        category: 'retina',
        title: 'Starting Hydroxychloroquine for Lupus',
        theme: 'Hydroxychloroquine Screening',
        years: ['Posterior notes'],
        patient: '45-year-old Chinese-Australian woman, 58 kg, starting hydroxychloroquine 400 mg daily for SLE. Normal kidney function; no macular disease.',
        stem: 'Her rheumatologist asks for a baseline eye exam.',
        steps: [
            {
                phase: '1. Risk',
                type: 'multi',
                question: 'Which raise her risk of retinal toxicity?',
                options: [
                    'Daily dose above 5 mg/kg real body weight (400 mg ÷ 58 kg ≈ 6.9 mg/kg)',
                    'Duration over 5 years',
                    'Renal impairment',
                    'Tamoxifen use',
                    'Pre-existing macular disease',
                    'Taking it with food'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Chloroquine risk threshold is above 2.3 mg/kg/day. Let the prescriber know the dose is above the recommended maximum for her weight.'
            },
            {
                phase: '2. Screening plan',
                type: 'mcq',
                question: 'What screening plan do you recommend?',
                options: [
                    'Baseline in the first year, then annual screening from 5 years with SD-OCT and 24-2 or 30-2 fields (wider pattern in Asian patients)',
                    'No baseline is needed; start annual screening after 10 years of use with 10-2 fields only, since OCT changes appear too late to be useful',
                    'Baseline Amsler grid only, then a full exam if she reports symptoms, since toxicity is reversible when the drug is stopped early',
                    'Baseline exam, then 3-monthly OCT and ERG for the first 5 years, as toxicity is most common in the first year of treatment'
                ],
                answer: 0,
                explain: 'Baseline: fundus exam, OCT and fields. Screen sooner than 5 years if high risk (her dose is above 5 mg/kg). Non-Asian patients: 10-2 fields (parafoveal toxicity). Add mfERG or FAF if suspicious. Bull’s eye maculopathy is a late sign.'
            },
            {
                phase: '3. Toxicity found',
                type: 'viva',
                question: 'Years later the OCT shows parafoveal outer retinal thinning. What do you do and tell her?',
                points: [
                    'Contact the prescribing rheumatologist to discuss stopping or changing the drug (don’t stop it yourself)',
                    'Toxicity does not reverse and can progress after stopping',
                    'Document with OCT, fields and FAF; monitor',
                    'Refer to an ophthalmologist / retinal specialist for confirmation'
                ]
            }
        ]
    },
    {
        id: 'pn-cscr',
        category: 'retina',
        title: 'Distorted Vision in a Stressed 38-Year-Old',
        theme: 'Central Serous Chorioretinopathy',
        years: ['Posterior notes'],
        patient: '38-year-old man: a week of blurred, dim and distorted central vision in the right eye. Long hours at work. Uses a steroid nasal spray for hay fever.',
        stem: 'VA R 6/9 (+0.75 D hyperopic shift), L 6/6. A round, clear serous elevation at the right macula. OCT: subretinal fluid with a thick choroid; no blood or drusen.',
        steps: [
            {
                phase: '1. History',
                type: 'multi',
                question: 'What should you ask about?',
                options: [
                    'Any corticosteroid: nasal spray, inhaler, skin cream, joint injections, tablets',
                    'Stress, sleep, shift work (type A)',
                    'Pregnancy in women',
                    'Previous episodes in either eye',
                    'PDE-5 inhibitor use and H. pylori have also been linked',
                    'Recent cataract surgery'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Exclude CNV, an optic disc pit and a choroidal tumour on dilated exam and OCT; FFA/ICGA (“smoke-stack” leak) if atypical.'
            },
            {
                phase: '2. Management',
                type: 'mcq',
                question: 'What is your management?',
                options: [
                    'Observe (most resolve in 2–3 months), ask the prescriber about stopping the steroid spray and review every 6–8 weeks; refer if chronic',
                    'Start ketorolac 0.5% and prednisolone acetate 1% QID to dry the fluid, as for cystoid macular oedema, and review the OCT in 4–6 weeks',
                    'Urgent referral within 24 hours for intravitreal anti-VEGF, as all serous macular detachments are treated as neovascular AMD until proven otherwise',
                    'Refer routinely for laser photocoagulation to the leak, which is the first-line treatment for a first episode to prevent permanent vision loss'
                ],
                answer: 0,
                explain: 'Also refer if recurrent or CNV develops; discuss stress management. Steroids worsen CSCR, so don’t use steroid drops. Chronic CSCR (over 3 months): half-dose PDT, mineralocorticoid antagonists (eplerenone, spironolactone) or careful focal laser, by the retinal specialist.'
            }
        ]
    },
    {
        id: 'pn-horner',
        category: 'neuro',
        title: 'A Small Pupil and Droopy Lid After Neck Pain',
        theme: 'Horner Syndrome & Anisocoria Work-up',
        years: ['Posterior notes'],
        patient: '46-year-old woman: her partner noticed her left eyelid drooping yesterday. She had sudden left-sided neck pain and headache after a gym session 2 days ago.',
        stem: 'Left ptosis of 2 mm with lower lid elevation; left pupil smaller, and the anisocoria is greater in dim light with a dilation lag. Motility normal.',
        steps: [
            {
                phase: '1. Which pupil',
                type: 'mcq',
                question: 'Which pupil is abnormal, and why?',
                options: [
                    'The smaller left pupil: anisocoria greater in the dark means the small pupil fails to dilate (sympathetic defect)',
                    'The larger right pupil: anisocoria greater in the dark means the large pupil fails to constrict (parasympathetic defect)',
                    'Neither: anisocoria under 2 mm that is worse in the dark is always physiological, especially when both pupils react to light',
                    'The smaller left pupil, but only because of the ptosis shading it; the pupils will be equal once the lid is lifted'
                ],
                answer: 0,
                explain: 'Greater in light → the large pupil is abnormal (Adie, CN III, pharmacological, iris trauma). Greater in dark → the small pupil is abnormal (Horner, physiological).'
            },
            {
                phase: '2. Drops that help',
                type: 'match',
                question: 'Match the pharmacological test to what it shows.',
                pairs: [
                    { label: 'Apraclonidine 0.5–1%', answer: 'Reversal of anisocoria confirms Horner' },
                    { label: 'Cocaine 10%', answer: 'Horner pupil fails to dilate' },
                    { label: 'Hydroxyamphetamine 1%', answer: 'Failure to dilate localises a post-ganglionic lesion' },
                    { label: 'Pilocarpine 0.125%', answer: 'Constriction suggests an Adie tonic pupil' },
                    { label: 'Pilocarpine 1%', answer: 'No constriction suggests pharmacological dilation' }
                ],
                distractors: ['Phenylephrine 10%'],
                explain: 'Don’t use hydroxyamphetamine within 24–48 hours of cocaine or apraclonidine. No anaesthetic before the test drops, and the epithelium must be intact.'
            },
            {
                phase: '3. Urgency',
                type: 'mcq',
                question: 'How urgently does she need investigating?',
                options: [
                    'Same day: an acute painful Horner after neck strain suggests carotid artery dissection, which needs emergency CTA or MRA (stroke risk)',
                    'Within a few weeks: Horner syndrome is benign in adults, so routine referral to a neuro-ophthalmologist for elective ptosis surgery is enough',
                    'Within 3 months: arrange a chest X-ray via the GP to exclude a Pancoast tumour, which is the only cause that needs investigating',
                    'No investigation: post-exercise Horner is a migraine variant and resolves within a week, so reassure her and review in a month'
                ],
                answer: 0,
                explain: 'Dissection can also cause pulsatile tinnitus, dysgeusia and transient vision loss. Chronic or congenital Horner (old photos) is less urgent but still needs work-up (lung apex, neck, brainstem).',
                critical: true
            },
            {
                phase: '4. The other side of the flowchart',
                type: 'viva',
                question: 'A 32-year-old woman has a large right pupil that reacts poorly to light but constricts slowly to near. How do you confirm and manage it?',
                points: [
                    'Likely Adie tonic pupil: light–near dissociation, sectoral palsy, vermiform movements',
                    'Pilocarpine 0.125% constricts the Adie pupil (denervation hypersensitivity), not a normal pupil',
                    'Check reflexes (Holmes–Adie); consider syphilis if bilateral',
                    'Benign: routine follow-up; reading add or dilute pilocarpine for symptoms',
                    'A large pupil with ptosis or motility deficit is a CN III palsy until proven otherwise: emergency imaging'
                ]
            }
        ]
    },
    {
        id: 'pn-myasthenia',
        category: 'neuro',
        title: 'Droopy Eyelid and Double Vision by Evening',
        theme: 'Ocular Myasthenia Gravis',
        years: ['Posterior notes'],
        patient: '63-year-old man: 2 months of a left droopy eyelid and intermittent double vision, both worse in the evening and after reading. Recently started on timolol drops by another practitioner.',
        stem: 'Variable left ptosis that worsens after a minute of sustained upgaze; weak eye closure; variable diplopia not fitting a single nerve. Pupils normal.',
        steps: [
            {
                phase: '1. Clinical tests',
                type: 'multi',
                question: 'Which findings and tests support myasthenia gravis?',
                options: [
                    'Fatigable ptosis with sustained upgaze (1 minute)',
                    'Ice pack test: 2 minutes over the closed lid improves ptosis by 2 mm or more',
                    'Rest (sleep) test improvement',
                    'Cogan lid twitch and weak orbicularis',
                    'Normal pupils',
                    'An enlarged, poorly reactive pupil on the ptotic side'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Pupils are always normal in myasthenia. Confirmation: acetylcholine receptor antibodies, single-fibre EMG; CT chest for thymoma; thyroid function.'
            },
            {
                phase: '2. Urgency and drugs',
                type: 'viva',
                question: 'How urgent is this, and what about his drops and other medicines?',
                points: [
                    'Ask about swallowing, chewing, speech, breathing and limb weakness; any of these means same-day hospital assessment (myasthenic crisis)',
                    'Otherwise prompt neurology referral (pyridostigmine, steroids, immunosuppression, thymectomy)',
                    'β-blockers (including topical timolol) can worsen myasthenia: liaise with the prescriber about switching class',
                    'Aminoglycosides, macrolides and fluoroquinolones can also worsen weakness: choose antibiotics carefully',
                    'Purely ocular disease for 2–3 years rarely generalises; review 4–6-monthly'
                ]
            }
        ]
    },
    {
        id: 'pn-iih',
        category: 'neuro',
        title: 'Headaches and Swollen Discs After Starting Doxycycline',
        theme: 'Papilloedema & Idiopathic Intracranial Hypertension',
        years: ['Posterior notes'],
        patient: '26-year-old woman: 3 weeks of headaches worse lying down and in the morning, brief greyouts when she stands up, and a whooshing in her ears. Her GP started doxycycline for acne 6 weeks ago. BMI 34.',
        stem: 'VA 6/6 OU, normal colour vision, no RAPD. Both discs swollen and hyperaemic with blurred margins, obscured vessels and peripapillary flame haemorrhages; no spontaneous venous pulsation. Enlarged blind spots.',
        steps: [
            {
                phase: '1. What now',
                type: 'mcq',
                question: 'What do you do?',
                options: [
                    'Treat as papilloedema: check BP, then same-day emergency referral for MRI/MRV and lumbar puncture; ask the GP to stop the doxycycline',
                    'Bilateral disc swelling with normal VA is pseudopapilloedema from disc drusen; reassure her and arrange B-scan and FAF at the next routine visit',
                    'Refer her to the GP for a lumbar puncture within a month, and start acetazolamide yourself to protect her vision until the appointment',
                    'Refer routinely to a neuro-ophthalmologist, as IIH is benign; ask her to lose weight and return in 3 months for repeat fields'
                ],
                answer: 0,
                explain: 'Exclude a mass, venous sinus thrombosis and malignant hypertension first. Raised opening pressure with normal CSF and normal imaging = IIH.',
                critical: true
            },
            {
                phase: '2. Drug causes',
                type: 'multi',
                question: 'Which medicines are associated with intracranial hypertension?',
                options: [
                    'Tetracyclines (doxycycline, minocycline)',
                    'Isotretinoin and other vitamin A derivatives',
                    'Corticosteroid withdrawal',
                    'Lithium',
                    'Combined oral contraceptive (association reported)',
                    'Paracetamol'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Relevant to you: if you suggest oral doxycycline for MGD or rosacea via the GP, ask about headaches and visual obscurations at review, and avoid it with isotretinoin.'
            },
            {
                phase: '3. Management and your role',
                type: 'viva',
                question: 'How is IIH managed, and what is your role?',
                points: [
                    'Neurology/neuro-ophthalmology led: weight loss, stop causative drugs, acetazolamide (oral, specialist/GP)',
                    'Surgery if vision is threatened: optic nerve sheath fenestration, CSF shunt or venous sinus stenting',
                    'Visual fields are the key monitoring test; also VA, colour, disc photos and OCT RNFL',
                    'Review every 3–4 weeks if active, longer once stable; urgent review for any field loss'
                ]
            }
        ]
    },
    {
        id: 'pn-uveitic-iop-script',
        category: 'glaucoma',
        title: 'Uveitis on Pred Forte with an IOP of 32: Write the Script',
        theme: 'IOP Rise in Uveitis & Target IOP',
        years: ['Posterior notes'],
        patient: '45-year-old man treated for HLA-B27 anterior uveitis with prednisolone acetate 1% QID for 3 weeks. No asthma or heart disease.',
        stem: 'AC now 0.5+ cells. IOP R 32, L 16. Open angle, no PAS. Discs healthy.',
        steps: [
            {
                phase: '1. Choose the drug',
                type: 'mcq',
                question: 'Which IOP-lowering drug do you prescribe?',
                options: [
                    'Timolol 0.5% BD (aqueous suppressant) after checking for asthma, COPD, bradycardia and heart block; avoid PGAs and miotics',
                    'Latanoprost 0.005% at night because it is the most effective once-daily drug and works well even when the eye is actively inflamed',
                    'Pilocarpine 2% QID to open the trabecular meshwork and pull the iris away from the angle while the uveitis settles down',
                    'No drop: stop the prednisolone immediately, because the IOP will settle within a few days once the steroid is withdrawn completely'
                ],
                answer: 0,
                explain: 'PGAs can worsen inflammation and CMO; pilocarpine increases vascular permeability and synechiae. Don’t stop the steroid abruptly (rebound): taper as the AC allows, or switch to a lower-pressure steroid.'
            },
            {
                phase: '2. Write it',
                type: 'multi',
                question: 'Which elements earn the marks on the script?',
                options: [
                    'Timolol maleate 0.5% eye drops (active ingredient and strength)',
                    'Instil 1 drop in the right eye twice daily (morning and evening)',
                    'Quantity 1 bottle, repeats 0 (review in 4–6 weeks before repeats)',
                    'Your name, address, prescriber number, signature and date; patient details',
                    'Brand name only, e.g. “Timoptol 1 bottle”',
                    '“2 drops BD both eyes” so the dose is not missed'
                ],
                answers: [0, 1, 2, 3],
                explain: 'In the midterm, marks were lost for not specifying the eye, misspelt drugs and confusing “2 drops” with “twice a day”. For ongoing glaucoma, up to 5 repeats once stable.'
            },
            {
                phase: '3. Target IOP',
                type: 'mcq',
                question: 'A different patient: moderate POAG, baseline 24 mmHg, progressing on treatment. What target do you set?',
                options: [
                    'About 14 mmHg: an initial 25% reduction gives 18, and progression warrants a further 20% (about 14)',
                    'About 21 mmHg: any IOP within the normal range is enough, provided the patient is adherent and the angle remains open',
                    'About 18 mmHg: a 25% reduction from baseline, which should not change once set, even if the fields keep progressing',
                    'Any value below 24 mmHg: progression shows the IOP was too high, so any reduction from baseline will stabilise the disease'
                ],
                answer: 0,
                explain: 'Initial reductions of 20–30% are typical; lower targets for more advanced disease, faster progression or more risk factors. Document the target and revisit it.'
            },
            {
                phase: '4. OBA obligations',
                type: 'viva',
                question: 'If you start glaucoma treatment yourself, what are your obligations under the OBA guideline?',
                points: [
                    'Equipment: applanation tonometry, pachymetry, threshold fields, gonioscopy, ONH/RNFL assessment',
                    'Review response, adherence and side effects at 4–6 weeks',
                    'Refer to an ophthalmologist within 4 months of starting treatment for chronic glaucoma',
                    'Refer sooner if unstable, needing laser or surgery, or with side effects of initial treatment',
                    'Communicate with the GP and other practitioners; use NHMRC guidance for targets and review frequency'
                ]
            }
        ]
    }
);
