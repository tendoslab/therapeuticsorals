// Cases from the "Mini oral prep" notes (19 practice cases plus drug-class summaries).
// Several are built on University of Iowa EyeRounds cases; doses are checked against Australian practice.
window.CASES.push(
    {
        id: 'mp-angle-recession',
        category: 'glaucoma',
        title: 'Pigmented Angle after Old Trauma: Recession or PDS?',
        theme: 'Angle Recession Glaucoma',
        years: ['Mini oral prep'],
        patient: 'Adult with raised IOP in one eye and a history of blunt trauma years ago.',
        stem: 'Gonioscopy photo: an irregularly widened ciliary body band in one sector.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'What are your differentials for a unilateral raised IOP with a pigmented, irregular angle?',
                options: [
                    'Angle recession glaucoma',
                    'Pigment dispersion / pigmentary glaucoma',
                    'Pseudoexfoliation glaucoma',
                    'Inflammatory (uveitic) glaucoma',
                    'Chronic angle-closure glaucoma with an open, deep angle'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Compare the two angles: recession is unilateral and sectoral, with a widened CBB, torn iris processes and a whitened scleral spur. PDS and PXF are usually bilateral (often asymmetric).'
            },
            {
                phase: '2. Mechanism',
                type: 'mcq',
                question: 'How does blunt trauma cause angle recession glaucoma?',
                options: [
                    'The globe compresses and aqueous is forced into the angle, tearing between the longitudinal and circular ciliary muscle; the damaged TM later scars and outflow falls.',
                    'The globe compresses and the lens is pushed forward against the iris, causing pupil block and peripheral anterior synechiae that slowly close the angle over the years.',
                    'The globe compresses and pigment is shaken from the iris epithelium, settling evenly in the TM and blocking outflow in the same way as pigment dispersion syndrome.',
                    'The globe compresses and the ciliary body detaches from the scleral spur, increasing uveoscleral outflow first and then causing high IOP when the cleft closes.'
                ],
                answer: 0,
                explain: 'Glaucoma risk rises with the extent of recession (especially over 180°) and can appear years later. The fellow eye is also at higher risk of POAG.'
            },
            {
                phase: '3. Treatment',
                type: 'viva',
                question: 'How will you treat, and what do you avoid?',
                points: [
                    'Latanoprost 0.005% one drop at night, provided no contraindications (active uveitis)',
                    'PGA precautions: history of CMO, HSV keratitis, aphakia/pseudophakia with a torn capsule, complicated cataract surgery',
                    'Avoid pilocarpine (and other cholinergics): it reduces uveoscleral outflow, which these eyes rely on, and can raise IOP',
                    'If the PGA fails, swap to another PGA (travoprost 0.004% nocte) or add an aqueous suppressant (timolol, brimonidine, CAI)',
                    'SLT tends to work poorly in a damaged angle; refer early for surgery if drops fail'
                ],
                explain: 'Angle recession is a secondary glaucoma, so the RANZCO pathway favours ophthalmology involvement.'
            },
            {
                phase: '4. Prognosis and counselling',
                type: 'viva',
                question: 'What do you tell the patient about prognosis and side effects?',
                points: [
                    'Lifelong treatment and monitoring; treatment protects remaining vision rather than restoring it',
                    'PGA cosmetic effects: longer, darker, thicker lashes; iris darkening (permanent and obvious when only one eye is treated); periorbital fat loss and a deeper lid sulcus',
                    'Hyperaemia usually settles over weeks',
                    'Wear eye protection for sport and work; the other eye matters even more now'
                ],
                explain: 'One-eye PGA use makes asymmetric cosmetic changes more noticeable; warn before starting.'
            }
        ]
    },
    {
        id: 'mp-inclusion-conj',
        category: 'conj',
        title: 'Six Weeks of Red Eyes Despite Chloramphenicol',
        theme: 'Adult Inclusion Conjunctivitis',
        years: ['Mini oral prep'],
        patient: '23-year-old man with red eyes for 6 weeks. No contact lenses, injury or surgery.',
        stem: 'Chloramphenicol for a week made little difference.',
        steps: [
            {
                phase: '1. History',
                type: 'viva',
                question: 'What questions do you ask?',
                points: [
                    'Pain, vision change, photophobia (keratitis or uveitis)',
                    'Discharge: type and amount (mucopurulent in chlamydia)',
                    'One eye or both, and how it started',
                    'Recent illness, sore throat or contacts with red eyes',
                    'Sexual history, new partners, genital symptoms (asked sensitively)',
                    'Drops and cosmetics used (toxic keratoconjunctivitis)'
                ],
                explain: 'Chronic follicular conjunctivitis lasting over 3–4 weeks that does not respond to topical antibiotics is chlamydia until proven otherwise in a young sexually active adult.'
            },
            {
                phase: '2. Differentials and diagnosis',
                type: 'multi',
                question: 'Which are reasonable differentials for chronic follicular conjunctivitis here?',
                options: [
                    'Adult inclusion (chlamydial) conjunctivitis',
                    'Adenoviral conjunctivitis (late, persisting)',
                    'Toxic keratoconjunctivitis from drops',
                    'HSV blepharoconjunctivitis',
                    'Molluscum contagiosum on the lid margin',
                    'Vernal keratoconjunctivitis'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'VKC is papillary, itchy and seasonal in children. Look for molluscum on the lids and a superior pannus or Herbert’s pits (chlamydia).'
            },
            {
                phase: '3. Management',
                type: 'mcq',
                question: 'Swab PCR confirms Chlamydia trachomatis. What is your management?',
                options: [
                    'Refer to the GP or sexual health clinic for oral azithromycin 1 g stat (or doxycycline 100 mg BD for 7 days), STI screening and partner tracing.',
                    'Prescribe topical azithromycin 1.5% BD for 3 days and chloramphenicol ointment nocte, then review in a week; the GP only needs to be told if it recurs.',
                    'Refer to the GP for oral amoxicillin 500 mg TDS for 7 days and continue chloramphenicol QID, then review at 1 week to check the follicles have gone.',
                    'Prescribe topical tetracycline ointment QID for 6 weeks alone, since ocular chlamydia is a local infection that oral antibiotics don’t reach well.'
                ],
                answer: 0,
                critical: true,
                explain: 'Ocular chlamydia is a sign of genital infection, so systemic treatment and contact tracing are essential. Doxycycline is avoided in pregnancy and in children under 8.',
                recall: 'The notes also list erythromycin 500 mg QID for 7 days. It works, but azithromycin 1 g stat or doxycycline 100 mg BD for 7 days is current Australian first line.'
            }
        ]
    },
    {
        id: 'mp-aau-review-systems',
        category: 'uveitis',
        title: 'Bilateral Photophobia and an Irregular Pupil',
        theme: 'Acute Anterior Uveitis',
        years: ['Mini oral prep'],
        patient: '48-year-old woman of African descent with photophobia, tearing and pain in both eyes.',
        stem: 'Irregular pupil. Ciliary flush, KPs, posterior synechiae, AC cells and flare. Dilated: no vitreous cells, no snowbanking.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'What are your differentials?',
                options: [
                    'Acute anterior uveitis',
                    'Microbial keratitis with secondary AC reaction',
                    'CLARE',
                    'Scleritis with anterior uveitis',
                    'Acute angle closure',
                    'Pigment dispersion syndrome'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Bilateral AAU in a 48-year-old woman of African descent should make you think of sarcoidosis. Bilateral disease is also a referral trigger.'
            },
            {
                phase: '2. Review of systems',
                type: 'match',
                question: 'Match each review-of-systems question to the condition it screens for.',
                pairs: [
                    { label: 'Stiff, painful lower back in the morning', answer: 'Ankylosing spondylitis (HLA-B27)' },
                    { label: 'Shortness of breath, dry cough', answer: 'Sarcoidosis or TB' },
                    { label: 'Bloody stools, diarrhoea', answer: 'Inflammatory bowel disease' },
                    { label: 'Painful urination, genital ulcers', answer: 'Reactive arthritis, Behçet’s or syphilis' },
                    { label: 'Expanding target-shaped rash after a tick bite', answer: 'Lyme disease' },
                    { label: 'Hearing loss, headache, vitiligo or poliosis', answer: 'Vogt–Koyanagi–Harada' }
                ],
                distractors: ['Multiple sclerosis'],
                explain: 'Ask in lay terms. Granulomatous signs (mutton-fat KPs, Koeppe or Busacca iris nodules) point to sarcoidosis, TB or syphilis: order ACE, a chest X-ray, syphilis serology and a TB test via the GP.'
            },
            {
                phase: '3. Management',
                type: 'viva',
                question: 'What is your management, provided there are no contraindications?',
                points: [
                    'Prednisolone acetate 1%: loading (e.g. every 15 minutes for the first hour or two), then hourly to 2-hourly while awake; shake the bottle',
                    'Contraindication: active ocular infection (HSV, microbial, fungal)',
                    'Cycloplegic for pain and to stabilise the blood–aqueous barrier: homatropine 2% BD–TDS or atropine 1% BD',
                    'Break synechiae: atropine 1% plus phenylephrine 2.5% (10% only after checking BP and cardiac history); pledget if they persist',
                    'Review 24–48 h, then taper once there is a 2-step SUN improvement; slow taper over 5–6 weeks',
                    'Bilateral, so refer to an ophthalmologist and arrange systemic work-up via the GP'
                ],
                explain: 'Phenylephrine 10% is contraindicated with significant cardiovascular disease, uncontrolled hypertension, recent MI and MAOIs, and needs care in diabetes. Check BP before and after.',
                recall: 'The notes give cyclopentolate 1% TDS for cycloplegia. It is weaker and shorter-acting and is said to be chemotactic for leukocytes, so homatropine or atropine is preferred in AAU.'
            },
            {
                phase: '4. Steroid response',
                type: 'mcq',
                question: 'At 2 weeks the IOP has risen to 32 mmHg. What do you add?',
                options: [
                    'An aqueous suppressant such as timolol 0.5% BD (if no asthma, COPD, bradycardia or heart block), then taper the steroid as the uveitis allows.',
                    'Latanoprost 0.005% nocte, since it has the largest IOP effect and the inflammation should settle quickly once the steroid has been stopped.',
                    'Pilocarpine 2% QID to open the angle, because inflammatory debris in the trabecular meshwork responds well to a cholinergic agonist.',
                    'Nothing yet: double the steroid frequency, because a pressure rise this early means the trabeculitis isn’t yet under control.'
                ],
                answer: 0,
                explain: 'Aqueous suppressants are first choice in inflamed eyes. Avoid PGAs (pro-inflammatory, CMO) and pilocarpine (breaks the blood–aqueous barrier and promotes synechiae). If the IOP rise is from trabeculitis, more steroid can help, so judge the cell count too.'
            }
        ]
    },
    {
        id: 'mp-pxg',
        category: 'glaucoma',
        title: 'Flakes on the Lens and a Patchy Sampaolesi Line',
        theme: 'Pseudoexfoliation Glaucoma',
        years: ['Mini oral prep'],
        patient: '68-year-old Caucasian woman.',
        stem: 'Slit lamp: central disc of white material on the lens with a clear zone and a peripheral granular zone; flakes on the pupil ruff.',
        steps: [
            {
                phase: '1. Diagnosis',
                type: 'viva',
                question: 'What do you see, what are the differentials, and what else would you look for?',
                points: [
                    'PXF material: lens (central disc, clear annulus, peripheral granular zone), pupil ruff, AC',
                    'Differentials: PDS, true exfoliation (glassblower’s capsular delamination), uveitic pigment',
                    'Peripupillary transillumination, a moth-eaten pupil ruff, poor dilation',
                    'Gonioscopy: patchy pigment and a Sampaolesi line',
                    'IOP asymmetry; disc, RNFL and field to decide PXF vs PXG'
                ],
                explain: 'PXG is diagnosed when there is glaucomatous optic neuropathy, not from the flakes alone.'
            },
            {
                phase: '2. Management',
                type: 'mcq',
                question: 'The disc and field confirm PXG. What is your management?',
                options: [
                    'A PGA (latanoprost nocte) or SLT, a lower target than for POAG, review about every 3 months, and early ophthalmology co-management.',
                    'Timolol alone as PXG responds poorly to PGAs, a target under 24 mmHg as for OHT, and annual review once the IOP has been stable twice.',
                    'Pilocarpine 2% QID to clear the flakes from the meshwork, a 20% IOP target, and review in 6 months once the drug is fully effective.',
                    'Observation with phasing every 6 months, as PXG progresses slowly and treatment is only started once the field defect becomes repeatable.'
                ],
                answer: 0,
                explain: 'PXG has higher, more variable IOP and progresses faster than POAG, so treat firmly and review often. Laser trabeculoplasty works well in heavily pigmented PXF angles, though the effect may wane.',
                recall: 'The notes say “ALT often effective”. SLT has largely replaced ALT: similar efficacy, less TM damage and it can be repeated.'
            },
            {
                phase: '3. Cataract planning',
                type: 'viva',
                question: 'Why does PXF matter to the cataract surgeon?',
                points: [
                    'Poor dilation',
                    'Weak zonules: risk of zonular dialysis, vitreous loss, dropped lens',
                    'Late IOL–capsular bag dislocation, sometimes years later',
                    'Post-operative IOP spikes and more inflammation',
                    'Tell the surgeon about the PXF in the referral'
                ],
                explain: 'Phacodonesis or a shallow, uneven AC suggests weak zonules.'
            }
        ]
    },
    {
        id: 'mp-pigmentary-glaucoma',
        category: 'glaucoma',
        title: 'Krukenberg Spindle in a 27-Year-Old',
        theme: 'Pigmentary Glaucoma',
        years: ['Mini oral prep'],
        patient: '27-year-old Caucasian man.',
        stem: 'Vertical pigment on the corneal endothelium, mid-peripheral slit-like iris transillumination defects, dense homogeneous TM pigment.',
        steps: [
            {
                phase: '1. Pathogenesis',
                type: 'mcq',
                question: 'What causes the pigment release?',
                options: [
                    'A concave peripheral iris rubs against the lens zonules (reverse pupil block), shedding pigment epithelium that collects in the TM.',
                    'Flakes of abnormal fibrillar material rub against the pupil margin, shedding pigment that collects unevenly in the inferior angle.',
                    'A convex peripheral iris presses against the TM (pupil block), shedding pigment that collects at the scleral spur and closes the angle.',
                    'Chronic low-grade inflammation of the iris releases melanin granules that collect on the corneal endothelium and in the trabecular meshwork.'
                ],
                answer: 0,
                explain: 'Young myopic men are typical. Exercise and pupil dilation can provoke pigment showers and IOP spikes.'
            },
            {
                phase: '2. Management',
                type: 'viva',
                question: 'How will you manage him?',
                points: [
                    'If glaucomatous damage or high IOP: a PGA (latanoprost nocte) first line; SLT works well (use lower energy in pigmented angles)',
                    'Dilated fundus exam: higher rates of lattice degeneration and retinal detachment',
                    'Ask about IOP spikes or haloes with exercise; check IOP after exercise if suspected',
                    'Pilocarpine reverses the iris concavity but is poorly tolerated in the young and raises RD risk',
                    'LPI flattens the iris but evidence of benefit is limited; refer if considered'
                ],
                explain: 'Advice to avoid strenuous exercise is weakly supported; tailor it to symptomatic pigment showers.'
            },
            {
                phase: '3. Natural history',
                type: 'viva',
                question: 'What is the natural history and prognosis?',
                points: [
                    'Active phase into the 40s: pigment liberation and IOP spikes',
                    'Regression: the growing lens and loss of accommodation push the iris away, pigment release slows or stops, TIDs may fade',
                    'TM pigment can clear from the top down (a “pigment reversal sign”)',
                    'Conversion to glaucoma: about 10% at 5 years and 15% at 15 years (Siddiqui et al.)'
                ],
                explain: 'A regressed case can look like NTG because the IOP has fallen after the damage was done.',
                recall: 'The notes say “30% develop glaucoma”. Some older series quoted around a third, but the population figure usually cited is about 10% at 5 years and 15% at 15 years.'
            }
        ]
    },
    {
        id: 'mp-cl-mk',
        category: 'cornea',
        title: 'Two-Weekly Lens Wearer Who Sleeps in Them',
        theme: 'CL Microbial Keratitis',
        years: ['Mini oral prep'],
        patient: '30-year-old woman with a red, sore, painful eye for 2 days, blurry vision and slight discharge.',
        stem: 'Wears 2-weekly lenses, regularly sleeps in and overwears them. Denies swimming in them or trauma with vegetative matter. Ciliary flush, limbal injection.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'What are your differentials?',
                options: [
                    'Microbial (bacterial) keratitis',
                    'CLARE / sterile infiltrative keratitis',
                    'Anterior uveitis',
                    'Acute angle closure',
                    'Acanthamoeba keratitis',
                    'Thygeson’s superficial punctate keratitis'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Overnight wear is the biggest risk factor for MK. Use PEDAL (Pain, Epithelial defect, Discharge, AC reaction, Location) to separate infectious from sterile.'
            },
            {
                phase: '2. Fluoroquinolone regimen',
                type: 'mcq',
                question: 'Which fluoroquinolone monotherapy regimen is right?',
                options: [
                    'Ciprofloxacin 0.3%: every 15 min for 6 h, every 30 min for the rest of day 1, hourly on day 2, then QID until re-epithelialised.',
                    'Ciprofloxacin 0.3%: every 2 h while awake for 2 days, then QID for 5 days, tapering to BD once the epithelium has fully healed.',
                    'Ciprofloxacin 0.3%: QID for 7 days with ointment at night, increasing to hourly only if the infiltrate is still growing at day 3.',
                    'Ciprofloxacin 0.3%: hourly for 24 h, then stop once the pain has eased and switch to chloramphenicol 0.5% QID for another week.'
                ],
                answer: 0,
                critical: true,
                explain: 'Ofloxacin 0.3% is the alternative (every 30 min while awake for 2 days with night doses, then hourly, then QID). Add a cycloplegic for pain; review at 24 h. Don’t taper an antibiotic below QID.'
            },
            {
                phase: '3. Monotherapy or fortified?',
                type: 'viva',
                question: 'When is dual fortified therapy (and hospital care) better, and what are its contraindications?',
                points: [
                    'Large (over ~2 mm), deep (over a third of stromal depth) or central ulcers, threatened perforation',
                    'Older patients, one-eyed patients, poor adherence, or failure to respond to monotherapy',
                    'Fortified cefazolin 5% plus gentamicin (or tobramycin) 1.5%, hospital-compounded, hourly around the clock',
                    'Aminoglycoside cautions: epithelial toxicity; systemic cautions (hearing loss, myasthenia, renal disease) matter more with systemic use',
                    'Scrape and culture before starting'
                ],
                explain: 'Fortified drops are compounded in hospital, so this means referral.'
            },
            {
                phase: '4. Steroids and prognosis',
                type: 'mcq',
                question: 'When might a steroid be added, and what is the main long-term risk?',
                options: [
                    'By the ophthalmologist, only after the ulcer is clearly improving on antibiotics (SCUT); the long-term risk is scarring that reduces vision.',
                    'By the optometrist on day 1 alongside the antibiotic, to limit the immune response; the long-term risk is a steroid-induced IOP rise.',
                    'By the optometrist once pain improves at day 2, since SCUT showed steroids speed healing; the long-term risk is recurrence of infection.',
                    'Never, as steroids are contraindicated in all corneal ulcers; the long-term risk is chronic dry eye from damage to the corneal nerves.'
                ],
                answer: 0,
                explain: 'SCUT found no overall benefit from adjunctive steroid, with possible benefit in severe central ulcers and harm in Nocardia. Avoid steroids if fungal or Acanthamoeba infection is possible.',
                recall: 'The notes say “steroids only after the ulcer has re-epithelialised”. Ophthalmologists usually add them earlier, once the culture is known and there is clear improvement (SCUT started at 48 h). Either way, it isn’t an optometrist’s first-line decision.'
            }
        ]
    },
    {
        id: 'mp-hyphaema',
        category: 'uveitis',
        title: 'Hit by a Soccer Ball: Grading a Hyphaema',
        theme: 'Traumatic Hyphaema',
        years: ['Mini oral prep'],
        patient: '35-year-old man hit in the left eye by a soccer ball. Vision slightly blurry.',
        stem: 'A layered hyphaema filling about a quarter of the AC.',
        steps: [
            {
                phase: '1. Grade',
                type: 'match',
                question: 'Match each grade to how much of the AC is filled.',
                pairs: [
                    { label: 'Grade 1', answer: 'Less than a third' },
                    { label: 'Grade 2', answer: 'A third to a half' },
                    { label: 'Grade 3', answer: 'Over a half but less than total' },
                    { label: 'Grade 4', answer: 'Total (“eight-ball” if clotted and dark)' }
                ],
                distractors: ['Circulating red cells only (microhyphaema)'],
                explain: 'Microhyphaema (Grade 0) is suspended cells without a layer. Record the height in mm too.'
            },
            {
                phase: '2. Other injuries',
                type: 'viva',
                question: 'What other effects of blunt trauma do you look for, front to back?',
                points: [
                    'Lids and orbit: fracture (restricted upgaze, diplopia, numb cheek), lid laceration',
                    'Subconjunctival haemorrhage, corneal abrasion or oedema',
                    'Traumatic iritis, iris sphincter tears, iridodialysis',
                    'Angle recession (gonioscopy once safe, about 4 weeks later)',
                    'Lens subluxation or cataract',
                    'Commotio retinae, retinal tears or dialysis, choroidal rupture, traumatic optic neuropathy',
                    'Rule out an open globe first'
                ],
                explain: 'Avoid gonioscopy and scleral depression in the acute phase (rebleed risk).'
            },
            {
                phase: '3. Management',
                type: 'viva',
                question: 'What is your management?',
                points: [
                    'Rest, head elevated 30–45° so blood settles, shield at night',
                    'Topical steroid for AC reaction: prednisolone acetate 1% QID, taper as cells settle',
                    'Cycloplegic: atropine 1% daily–BD (or homatropine 2%) for comfort and to rest the iris',
                    'Avoid aspirin and NSAIDs; paracetamol for pain',
                    'If IOP is raised: timolol 0.5% BD (or brimonidine); avoid PGAs and pilocarpine; avoid CAIs in sickle cell disease',
                    'Ask about sickle cell disease or trait and anticoagulants',
                    'Daily review for the first days: rebleeds peak at days 2–5; refer if IOP is uncontrolled, large or recurrent bleed, or corneal blood staining'
                ],
                explain: 'Grade 3–4, sickle cell, anticoagulation or uncontrolled IOP need ophthalmology care.',
                recall: 'The notes use cyclopentolate 1% BD–TDS. That works, but its short action means more frequent dosing; atropine or homatropine is commonly preferred for a sustained effect.'
            },
            {
                phase: '4. Long term',
                type: 'mcq',
                question: 'Once the hyphaema clears, what long-term follow-up does he need?',
                options: [
                    'Gonioscopy once healed, then at least yearly IOP and disc checks for life, as angle recession glaucoma can appear years later.',
                    'Gonioscopy once healed, then discharge if the angle looks normal, since angle recession glaucoma only appears within the first year.',
                    'A dilated fundus exam at 6 months, then discharge if no retinal tears, since raised IOP after trauma only happens in the first weeks.',
                    'No follow-up unless symptoms recur, because a Grade 1 hyphaema doesn’t damage the angle and the IOP always returns to normal.'
                ],
                answer: 0,
                explain: 'Also check both eyes: angle recession raises the fellow eye’s POAG risk too.'
            }
        ]
    },
    {
        id: 'mp-hsv-hzo',
        category: 'cornea',
        title: 'Dendrite with Terminal Bulbs, Then Zoster',
        theme: 'HSV & HZO Keratitis',
        years: ['Mini oral prep'],
        patient: '44-year-old man with a painful, red, watery eye.',
        stem: 'Conjunctival injection and a branching epithelial lesion with terminal bulbs that stains brightly with fluorescein.',
        steps: [
            {
                phase: '1. Diagnosis and types',
                type: 'match',
                question: 'Match each form of HSV keratitis to its key sign.',
                pairs: [
                    { label: 'Epithelial keratitis', answer: 'Dendrites with terminal bulbs that stain brightly' },
                    { label: 'Stromal keratitis without ulceration', answer: 'Stromal infiltrate or haze, vessels, intact epithelium' },
                    { label: 'Necrotising stromal keratitis', answer: 'Epithelial defect over dense infiltrate and thinning' },
                    { label: 'Endothelial (disciform) keratitis', answer: 'Disc of stromal oedema with KPs beneath it' }
                ],
                distractors: ['Raised “stuck-on” plaques with tapered ends'],
                explain: 'The distractor describes zoster pseudodendrites. Ask about past HSV, cold sores, recent illness, stress, fever, UV or trauma (reactivation triggers).'
            },
            {
                phase: '2. Epithelial treatment',
                type: 'mcq',
                question: 'What is your treatment for the epithelial dendrite, and when do you review?',
                options: [
                    'Topical aciclovir 3% ointment (or ganciclovir 0.15% gel) 5×/day until healed (about 10 days), ± debridement; review at 24 h, then 7–10 days.',
                    'Topical aciclovir 3% ointment 5×/day plus prednisolone 1% QID to limit scarring; review at 1 week once the dendrite has stopped growing.',
                    'Oral aciclovir 400 mg BD for 12 months starting today, since topical antivirals are too toxic to the epithelium; review at 3 months.',
                    'Chloramphenicol 0.5% QID and lubricants, as the dendrite will heal on its own in 3 weeks; review at 2 weeks to confirm it has healed.'
                ],
                answer: 0,
                critical: true,
                explain: 'The aim is to stop viral DNA replication (DNA polymerase inhibition); treatment shortens the course by a few days and reduces stromal spread. No steroid with active epithelial disease. A larger, geographic ulcer at review means it is getting worse.'
            },
            {
                phase: '3. Stromal and prophylaxis',
                type: 'viva',
                question: 'How do you treat stromal keratitis without ulceration, and when is prophylaxis indicated?',
                points: [
                    'Prednisolone acetate 1% QID (up to 2-hourly if severe), slow taper over weeks to months',
                    'Antiviral cover (topical aciclovir or oral aciclovir 400 mg BD) while the steroid is above about once daily',
                    'Prophylaxis is not routine after one epithelial episode (recurrence risk ~15% over a year)',
                    'HEDS: oral aciclovir 400 mg BD roughly halved recurrences; offer after recurrent or stromal disease',
                    'Usually 12 months, then reassess; benefit lasts only while taking it; check renal function'
                ],
                explain: 'Oral antivirals come from the GP or ophthalmologist.',
                recall: 'The notes say prophylaxis is “for as long as the patient is alive”. Long-term use is sometimes chosen for frequent stromal recurrences, but the usual plan is about 12 months and then review.'
            },
            {
                phase: '4. Now a zoster case',
                type: 'viva',
                question: 'A different patient has a V1 rash and pseudodendrites. How do zoster lesions differ, and what is your management?',
                points: [
                    'Pseudodendrites: raised mucous plaques, coarser, no terminal bulbs, stain weakly (no true ulceration)',
                    'Other manifestations: uveitis with raised IOP, nummular and disciform keratitis, scleritis, neurotrophic keratopathy, retinitis, optic neuritis, cranial nerve palsies',
                    'Oral antiviral within 72 h of rash: aciclovir 800 mg 5×/day, valaciclovir 1 g TDS or famciclovir 500 mg TDS, for 7 days (via GP)',
                    'Prednisolone 1% for stromal keratitis or uveitis under oral antiviral cover, with a very slow taper (months, sometimes to less than daily)',
                    'Differentials: HSV, contact dermatitis'
                ],
                explain: 'Topical antivirals don’t treat zoster.',
                recall: 'The notes say aciclovir “800–1000 mg 5×/day”. The dose is 800 mg five times daily; 1000 mg is the valaciclovir dose (TDS).'
            }
        ]
    },
    {
        id: 'mp-aac',
        category: 'glaucoma',
        title: 'Haloes, Headache and a Fixed Mid-Dilated Pupil',
        theme: 'Acute Angle Closure',
        years: ['Mini oral prep'],
        patient: '65-year-old Asian woman: hazy, blurred right eye since yesterday, right-sided headache, haloes around lights.',
        stem: 'Fixed mid-dilated pupil, conjunctival hyperaemia, oedematous cornea.',
        steps: [
            {
                phase: '1. Mechanism and risk',
                type: 'viva',
                question: 'What is the mechanism, who is at risk, and what signs show a previous attack?',
                points: [
                    'Pupil block: aqueous builds up behind the iris, which bows forward onto the TM (iris bombé)',
                    'Risk: Asian or Inuit ancestry, female, hyperopia, older age (larger lens), family history',
                    'Triggers: dim light, dilating drops, anticholinergic or adrenergic medicines, stress',
                    'Previous attack: glaukomflecken, PAS, sectoral iris atrophy, a fixed or irregular pupil'
                ],
                explain: 'Always assess the fellow eye: it needs a prophylactic laser PI.'
            },
            {
                phase: '2. First aid',
                type: 'mcq',
                question: 'Which first-aid plan is right, while arranging same-day ophthalmology care?',
                options: [
                    'Timolol 0.5%, apraclonidine 0.5% and brinzolamide 1%, a minute apart; acetazolamide 500 mg orally via hospital or GP; pilocarpine 2% once IOP is under 40.',
                    'Timolol 0.5%, latanoprost 0.005% and brinzolamide 2%, a minute apart; acetazolamide 250 mg BD orally from the GP; pilocarpine 4% straight away to open the angle.',
                    'Pilocarpine 4% every 5 minutes for an hour first, then timolol 0.5% and atropine 1% to relieve the ciliary spasm; acetazolamide only if the IOP is still above 50.',
                    'Brimonidine 0.2% and dorzolamide 3% only, as β-blockers raise the risk of bradycardia in an attack; mannitol from the GP; pilocarpine 2% once the cornea clears.'
                ],
                answer: 0,
                critical: true,
                explain: 'Check contraindications for each drop: timolol (asthma, COPD, bradycardia, heart block), α2-agonists (MAOIs, young children), CAIs (sulfonamide allergy, corneal graft or endothelial disease), pilocarpine (inflammation, lens-induced or malignant glaucoma). Lie the patient supine. The definitive treatment is laser PI.',
                recall: 'The notes give “Diamox 250 mg twice” and “brinzolamide 2%”. The acute dose of acetazolamide is 500 mg, and brinzolamide comes as 1% (dorzolamide is the 2% CAI).'
            },
            {
                phase: '3. Long term',
                type: 'viva',
                question: 'What is the long-term plan and prognosis?',
                points: [
                    'Laser PI in both eyes once the cornea clears; lens extraction is often preferred (EAGLE) if lens-related',
                    'Monitor for chronic angle closure, glaucomatous damage and residual IOP rise (PAS)',
                    'Prognosis depends on duration and peak IOP; recurrence can occur if the PI closes or with plateau iris',
                    'Warn about medicines that dilate the pupil until treated'
                ],
                explain: 'Ophthalmology does the definitive treatment; your job is first aid, transfer and the fellow eye.'
            }
        ]
    },
    {
        id: 'mp-fields-ntg-quickfire',
        category: 'neuro',
        title: 'Quick-fire: Field Patterns, a Disc Haemorrhage and NTG Drugs',
        theme: 'Visual Fields / NTG',
        years: ['Mini oral prep'],
        patient: 'A run of short questions on field printouts, then two glaucoma patients.',
        stem: 'Six field printouts are laid out in turn.',
        steps: [
            {
                phase: '1. Field patterns',
                type: 'match',
                question: 'Match each field pattern to its most likely cause.',
                pairs: [
                    { label: 'Altitudinal defect respecting the horizontal midline, sudden onset', answer: 'Anterior ischaemic optic neuropathy' },
                    { label: 'Central and centrocaecal scotoma', answer: 'Optic neuritis, toxic/nutritional or hereditary optic neuropathy' },
                    { label: 'Bitemporal hemianopia', answer: 'Chiasmal compression (pituitary adenoma)' },
                    { label: 'Binasal defects', answer: 'Glaucoma, disc drusen or bilateral tilted discs' },
                    { label: 'Homonymous superior quadrantanopia', answer: 'Temporal lobe (Meyer’s loop) lesion' }
                ],
                distractors: ['Occipital lobe lesion with macular sparing'],
                explain: 'Bilateral tilted discs can mimic a bitemporal defect but don’t respect the vertical midline. True binasal hemianopia from a neurological cause is rare. Inferior altitudinal loss is more common than superior in NAION.'
            },
            {
                phase: '2. Small disc, big cup',
                type: 'viva',
                question: '60-year-old woman, routine follow-up. Right disc is small with a 0.8 C/D and shelving superiorly and inferiorly; left disc has a haemorrhage at 11 o’clock. What do you make of it?',
                points: [
                    'A 0.8 C/D in a small disc is very suspicious: small discs should have small cups',
                    'Disc haemorrhage: strong risk factor for onset and progression (OHTS, EMGT), common in NTG; expect RNFL loss and a field defect in the corresponding (inferior) hemifield',
                    'Work-up: IOP phasing, CCT, gonioscopy, fields, OCT, photos to document',
                    'Ask about migraine, Raynaud’s, hypotension, sleep apnoea, steroid use, systemic β-blockers'
                ],
                explain: 'Haemorrhages resolve in weeks to months, so photograph them.'
            },
            {
                phase: '3. NTG drug choice',
                type: 'viva',
                question: 'You are about to treat a patient with NTG. What do you ask before choosing a drug, and how does a PGA work?',
                points: [
                    'Pregnancy or breastfeeding plans',
                    'Asthma, COPD, bradycardia or heart block (β-blockers); depression or MAOIs (α2-agonists); sulfonamide allergy (CAIs)',
                    'Systemic β-blocker or calcium-channel blocker use, low blood pressure, night-time BP drops',
                    'History of uveitis, CMO or HSV (PGAs)',
                    'PGA: increases uveoscleral outflow by remodelling the ciliary muscle extracellular matrix (MMPs)',
                    'Target 30% reduction from baseline (CNTGS slowed field progression from 35% to 12%)'
                ],
                explain: 'Avoid timolol at night in NTG: it may lower ocular perfusion further.'
            }
        ]
    },
    {
        id: 'mp-ekc-childcare',
        category: 'conj',
        title: 'Childcare Worker with Watery Red Eyes',
        theme: 'Adenoviral Keratoconjunctivitis',
        years: ['Mini oral prep'],
        patient: '38-year-old woman who works in childcare: watery, red, irritated eyes.',
        stem: 'Follicular conjunctivitis, crusting on the lashes, conjunctival injection; possible membrane on the lower tarsus.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'Which are differentials for an acute follicular or membranous conjunctivitis?',
                options: [
                    'Adenoviral (EKC or pharyngoconjunctival fever)',
                    'HSV conjunctivitis',
                    'Chlamydia',
                    'Membranous conjunctivitis from β-haemolytic streptococci, gonococcus or diphtheria',
                    'Stevens–Johnson syndrome or a chemical burn',
                    'Seasonal allergic conjunctivitis'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Ask about a recent cold or sore throat, sick contacts and when it started. Seasonal allergy gives papillae and itch, not follicles and membranes. Ligneous conjunctivitis is a rare membranous cause.'
            },
            {
                phase: '2. Management',
                type: 'viva',
                question: 'What is your management?',
                points: [
                    'Supportive: cold compresses, preservative-free lubricants, hand hygiene, separate towels',
                    'Off work (childcare) while the eye is red and weeping, often 10–14 days',
                    'Disinfect the tonometer and room; it is highly contagious',
                    'Peel membranes or pseudomembranes (they can recur) and consider topical steroid to reduce scarring',
                    'Ideally confirm adenovirus (PCR swab) before a steroid, since HSV or bacterial infection could worsen',
                    'Povidone-iodine has been used off-label; evidence is limited',
                    'Topical antihistamine only for itch (symptomatic, not curative)'
                ],
                explain: 'Refer if there is a true membrane, marked reduction in vision or diagnostic doubt.'
            },
            {
                phase: '3. Four days later',
                type: 'mcq',
                question: 'She returns with reduced vision and these round subepithelial opacities. What are they, and how do you manage them?',
                options: [
                    'Subepithelial (nummular) infiltrates, an immune response to adenoviral antigen; if vision is affected, a weak steroid (FML 0.1% QID) with a slow taper.',
                    'Bacterial infiltrates from secondary infection; ciprofloxacin 0.3% hourly with a cycloplegic, and review the next day to check they are not enlarging.',
                    'Thygeson’s superficial punctate keratitis unmasked by the infection; preservative-free lubricants only, as they will clear in a few days.',
                    'Early Acanthamoeba lesions from tap water exposure; refer the same day for corneal scrapes and biguanide therapy with propamidine.'
                ],
                answer: 0,
                explain: 'Steroids clear SEIs but they often return when the steroid stops, so taper slowly over weeks. Untreated, they fade over months.'
            }
        ]
    },
    {
        id: 'mp-marginal-rosacea',
        category: 'cornea',
        title: 'Peripheral Infiltrate in a Man with Rosacea',
        theme: 'Marginal Keratitis',
        years: ['Mini oral prep'],
        patient: '45-year-old man: irritation, tearing and redness in the right eye for a week. History of rosacea.',
        stem: 'A peripheral corneal infiltrate separated from the limbus by a clear zone, adjacent lid-margin disease.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'What are your differentials?',
                options: [
                    'Marginal (staphylococcal hypersensitivity) keratitis',
                    'Microbial keratitis',
                    'Phlyctenulosis',
                    'Peripheral ulcerative keratitis (systemic autoimmune disease)',
                    'CLPU',
                    'Terrien’s marginal degeneration'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Terrien’s is a slow, usually painless thinning with lipid at the leading edge. PEDAL helps separate marginal from microbial: marginal infiltrates have a clear zone, little or no stain, minimal pain and no AC reaction.'
            },
            {
                phase: '2. Mechanism',
                type: 'mcq',
                question: 'What causes marginal keratitis?',
                options: [
                    'An immune reaction to staphylococcal exotoxins and antigens from colonised lid margins, deposited where limbal vessels deliver antibody.',
                    'Direct invasion of the peripheral cornea by Staphylococcus aureus from the lids, which multiplies in the stroma beneath an epithelial defect.',
                    'A toxic reaction to the preservative in lubricant drops, which concentrates at the limbus where tears pool beneath the lower eyelid margin.',
                    'Hypoxia from contact lens wear, which damages the peripheral epithelium and lets commensal bacteria cause a sterile inflammatory response.'
                ],
                answer: 0,
                explain: 'Associated with staphylococcal blepharitis and acne rosacea.'
            },
            {
                phase: '3. Management',
                type: 'viva',
                question: 'What is your management?',
                points: [
                    'Mild: warm compresses and lid hygiene, ± chloramphenicol 0.5% QID',
                    'Moderate–severe: add a topical steroid (FML 0.1% or prednisolone 0.5–1% QID) with antibiotic cover, short course and taper',
                    'Review at 24–48 h, then regularly; check IOP if on steroid',
                    'Recurrent or rosacea-related: oral doxycycline 50–100 mg daily for weeks to months (via GP; not in pregnancy or under 8)',
                    'Treat the lids long term to prevent recurrence'
                ],
                explain: 'Exclude infection before starting the steroid: if there is a significant epithelial defect, pain or AC reaction, treat as microbial.'
            }
        ]
    },
    {
        id: 'mp-phlyctenulosis',
        category: 'conj',
        title: 'Recurring Limbal Bump in a 15-Year-Old',
        theme: 'Phlyctenular Keratoconjunctivitis',
        years: ['Mini oral prep'],
        patient: '15-year-old girl: blurry vision and discomfort in the right eye, foreign-body sensation and photophobia, recurring about weekly.',
        stem: 'A raised, injected nodule at the limbus with a leash of vessels; lid-margin disease.',
        steps: [
            {
                phase: '1. Differentials and history',
                type: 'viva',
                question: 'What are the differentials, and what further questions will you ask?',
                points: [
                    'Phlyctenular keratoconjunctivitis',
                    'Nodular episcleritis; VKC (limbal Trantas dots); rosacea keratoconjunctivitis; marginal keratitis',
                    'Ask about itch and photophobia, lid symptoms, previous episodes',
                    'Ask about TB exposure, cough, weight loss; consider chlamydia (and safeguarding if sexual abuse is possible)'
                ],
                explain: 'A phlycten is a hypersensitivity nodule that can migrate onto the cornea, dragging vessels with it.'
            },
            {
                phase: '2. Cause',
                type: 'mcq',
                question: 'What is the usual cause in Australia?',
                options: [
                    'A type IV hypersensitivity reaction to Staphylococcus aureus antigens from blepharitis; TB is the classic cause in endemic areas.',
                    'A type I (IgE) allergic reaction to airborne pollens, made worse by eye rubbing; TB is an uncommon cause seen mainly in children.',
                    'Direct infection of the limbus by Staphylococcus aureus spreading from the lids; TB is the main cause in older adults with cough.',
                    'An autoimmune reaction associated with rheumatoid arthritis; TB is excluded only after the nodule has failed to respond to steroid.'
                ],
                answer: 0,
                explain: 'Other antigens include chlamydia, Candida and helminths.'
            },
            {
                phase: '3. Management',
                type: 'viva',
                question: 'What is your management?',
                points: [
                    'Treat the blepharitis and MGD: warm compresses, lid scrubs',
                    'Topical steroid: prednisolone 0.5–1% or FML QID, taper over 1–2 weeks (the nodule responds quickly)',
                    'Antibiotic cover/lid treatment: chloramphenicol 1% ointment to the lids BD–TDS',
                    'Recurrent: oral doxycycline (age 8 and over) such as 50 mg BD for 1–2 weeks then daily for months, or oral erythromycin/azithromycin in younger children (via GP)',
                    'Check IOP while on steroid'
                ],
                explain: 'Corneal phlyctens can scar and vascularise; recurrent ones deserve oral treatment.'
            }
        ]
    },
    {
        id: 'mp-vkc-atopic',
        category: 'allergy',
        title: 'Spring and Summer Itch in a Boy with Eczema and Asthma',
        theme: 'Vernal Keratoconjunctivitis',
        years: ['Mini oral prep'],
        patient: '10-year-old boy: bilateral itchy, watery eyes every spring and summer, more bothersome this season. Eczema and asthma.',
        stem: 'Giant cobblestone papillae on the upper tarsus; limbal Trantas dots.',
        steps: [
            {
                phase: '1. Differentials and mechanism',
                type: 'viva',
                question: 'What are your differentials, and what is the mechanism?',
                points: [
                    'VKC (most likely: young boy, seasonal, atopic)',
                    'Atopic keratoconjunctivitis (older, perennial, lower-lid papillae, eczema of the lids)',
                    'Seasonal allergic conjunctivitis; viral or bacterial conjunctivitis',
                    'IgE cross-linking on mast cells causes degranulation (type I), plus a type IV component',
                    'Eosinophil products (major basic protein) damage the corneal epithelium'
                ],
                explain: 'VKC usually settles around puberty; a minority continue into adulthood as AKC.'
            },
            {
                phase: '2. Stepped treatment',
                type: 'match',
                question: 'Match each severity to an appropriate treatment step.',
                pairs: [
                    { label: 'Mild', answer: 'Allergen avoidance, cold compresses, lubricants' },
                    { label: 'Moderate', answer: 'Dual-action drop: olopatadine 0.1% BD or ketotifen 0.025% BD' },
                    { label: 'Severe', answer: 'Add a short course of a weak steroid (FML 0.1% QID) plus a mast cell stabiliser' },
                    { label: 'Very severe or shield ulcer', answer: 'Pulsed prednisolone 1% 2-hourly for about a week then QID, with ophthalmology' }
                ],
                distractors: ['Oral prednisolone for 3 months'],
                explain: 'Topical ciclosporin is a steroid-sparing option prescribed by an ophthalmologist for chronic severe VKC.',
                recall: 'The notes give “sodium cromoglycate 0.2%”. The ophthalmic strength in Australia is 2%.'
            },
            {
                phase: '3. Shield ulcer',
                type: 'match',
                question: 'Match each Cameron grade of shield ulcer to its management.',
                pairs: [
                    { label: 'Grade 1: epithelial defect with a clear base', answer: 'Medical treatment (mast cell stabiliser plus topical steroid), antibiotic cover' },
                    { label: 'Grade 2: translucent base ± white or yellow deposits', answer: 'Medical treatment plus debridement of the base' },
                    { label: 'Grade 3: opaque raised plaque', answer: 'Medical treatment, debridement or keratectomy, and amniotic membrane' }
                ],
                distractors: ['Bandage contact lens only'],
                explain: 'The plaque blocks re-epithelialisation, which is why it must be removed. Shield ulcers come from the rubbing of giant papillae and toxic eosinophil proteins.'
            }
        ]
    },
    {
        id: 'mp-pss-iop60',
        category: 'glaucoma',
        title: 'IOP 60 with a Few KPs in a 23-Year-Old',
        theme: 'Posner–Schlossman Syndrome',
        years: ['Mini oral prep'],
        patient: '23-year-old man with blurry vision in the right eye for 2 days.',
        stem: 'IOP R 60, L 20 mmHg. A few fine KPs on the inferior cornea, quiet-looking eye, open angle.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'match',
                question: 'Match each feature to Posner–Schlossman syndrome or Fuchs’ uveitis syndrome.',
                pairs: [
                    { label: 'Recurrent attacks of very high IOP with few fine KPs and mild cells', answer: 'Posner–Schlossman' },
                    { label: 'Chronic, low-grade, diffuse stellate KPs over the whole endothelium', answer: 'Fuchs’ uveitis' },
                    { label: 'Iris heterochromia, cataract, no synechiae', answer: 'Fuchs’ uveitis' },
                    { label: 'Normal IOP and angle between episodes; CMV is a common cause', answer: 'Posner–Schlossman' }
                ],
                explain: 'Also consider acute angle closure (closed angle, red painful eye) and HSV or VZV uveitis with trabeculitis.',
                recall: 'The notes say Fuchs’ KPs “usually go to the top of the cornea”. They are small, stellate and spread diffusely across the whole endothelium, not just superiorly.'
            },
            {
                phase: '2. Lower the IOP',
                type: 'mcq',
                question: 'You want the IOP down quickly. What is your management?',
                options: [
                    'Timolol 0.5% (fast onset, 20–30 min) ± brimonidine and a CAI, plus prednisolone 1% QID for the inflammation; avoid PGAs and pilocarpine.',
                    'Latanoprost 0.005% nocte (largest effect) plus pilocarpine 2% QID to open the angle; no steroid, as there is too little inflammation to justify it.',
                    'Prednisolone 1% hourly alone, since the IOP rise is caused by trabeculitis and will fall once the inflammation settles in a day or so.',
                    'Atropine 1% BD and a bandage lens to rest the eye; IOP drops can wait, as optic nerve damage takes weeks at a pressure of 60 mmHg.'
                ],
                answer: 0,
                critical: true,
                explain: 'Timolol contraindications: asthma, COPD, bradycardia, heart block. At 60 mmHg contact an ophthalmologist the same day (oral acetazolamide may be needed). Review within 1–2 days, then until the IOP and cells settle; repeated attacks can damage the disc.'
            }
        ]
    },
    {
        id: 'mp-subconj-haem',
        category: 'conj',
        title: 'A Red Eye in a Man with Long-standing Type 1 Diabetes',
        theme: 'Subconjunctival Haemorrhage',
        years: ['Mini oral prep'],
        patient: '49-year-old man with a red left eye. Type 1 diabetes for 20 years.',
        stem: 'A flat, bright red, well-defined haemorrhage under the bulbar conjunctiva. Vision normal, no pain.',
        steps: [
            {
                phase: '1. History',
                type: 'viva',
                question: 'What further questions do you ask?',
                points: [
                    'Trauma, especially to the head or eye (and whether the haemorrhage extends back with no posterior limit)',
                    'Straining: heavy lifting, coughing, vomiting, constipation (Valsalva)',
                    'Recent eye surgery or injections',
                    'Anticoagulants or antiplatelets (warfarin and INR, aspirin, clopidogrel, DOACs), fish oil, ginkgo',
                    'Hypertension; diabetic control; easy bruising or bleeding gums (bleeding disorder)',
                    'Recurrent episodes'
                ],
                explain: 'Most are spontaneous and benign, but hypertension is the most common systemic association.'
            },
            {
                phase: '2. Differentials',
                type: 'multi',
                question: 'Which differentials are worth considering?',
                options: [
                    'Spontaneous subconjunctival haemorrhage',
                    'Traumatic haemorrhage hiding an open globe or orbital fracture',
                    'Acute haemorrhagic conjunctivitis (enterovirus)',
                    'Conjunctival lymphoma or Kaposi sarcoma',
                    'Carotid–cavernous fistula',
                    'Pinguecula'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'A CCF gives dilated, corkscrew episcleral vessels, chemosis and raised IOP rather than a flat bleed. A salmon-pink or raised lesion suggests lymphoma.'
            },
            {
                phase: '3. Management',
                type: 'mcq',
                question: 'History is otherwise unremarkable. What is your management?',
                options: [
                    'Check BP, reassure, lubricants for comfort; it clears in 1–3 weeks. GP review (BP, glucose, clotting/INR) if BP is high, bleeds recur or he is anticoagulated.',
                    'Refer for urgent CT of the brain and orbits, since a subconjunctival haemorrhage in a diabetic suggests a cavernous sinus lesion until proven otherwise.',
                    'Prescribe chloramphenicol 0.5% QID for a week to stop infection in the pooled blood, and review in 2 days to check it is shrinking.',
                    'Start prednisolone 1% QID to speed reabsorption and stop his aspirin for a week; review at 1 week, then refer if the blood is still present.'
                ],
                answer: 0,
                explain: 'Never stop prescribed anticoagulants or antiplatelets yourself. Imaging is only for trauma with suspected fracture, open globe or CCF signs.'
            }
        ]
    },
    {
        id: 'mp-episcleritis',
        category: 'conj',
        title: 'Sectoral Redness, Slightly Tender, in a 21-Year-Old',
        theme: 'Episcleritis vs Scleritis',
        years: ['Mini oral prep'],
        patient: '21-year-old woman with a red, slightly tender eye for 2 days.',
        stem: 'Sectoral bright red injection; no discharge.',
        steps: [
            {
                phase: '1. Episcleritis or scleritis?',
                type: 'match',
                question: 'Match each feature to episcleritis or scleritis.',
                pairs: [
                    { label: 'Severe, boring pain that wakes the patient at night', answer: 'Scleritis' },
                    { label: 'Vessels blanch with phenylephrine 2.5%', answer: 'Episcleritis' },
                    { label: 'Deep bluish-red colour, tender globe', answer: 'Scleritis' },
                    { label: 'Usually younger adults (about 20–40), often idiopathic, self-limiting', answer: 'Episcleritis' },
                    { label: 'Often linked to rheumatoid arthritis or vasculitis', answer: 'Scleritis' }
                ],
                explain: 'Ask about discharge (conjunctivitis) and rate the pain. Look in daylight for a bluish tinge.'
            },
            {
                phase: '2. Management',
                type: 'viva',
                question: 'It is episcleritis. What is your management, and what if it were scleritis?',
                points: [
                    'Mild: reassurance, cold compresses, lubricants; it settles in 1–3 weeks',
                    'Moderate: weak topical steroid (FML 0.1% QID) with taper',
                    'Oral NSAID via the GP if needed (e.g. ibuprofen 400 mg TDS with food); review weekly, switch NSAID if no response',
                    'Scleritis: refer to an ophthalmologist (urgently if necrotising); needs oral NSAIDs, oral steroids or immunosuppression, and systemic work-up',
                    'Recurrent episcleritis: screen for systemic disease via the GP'
                ],
                explain: 'Topical treatment does not control scleritis.',
                recall: 'The notes list ibuprofen 800 mg TDS. That is a high (anti-inflammatory) dose; oral NSAID dosing is the GP’s call, and there is no need to quote it beyond “an oral NSAID via the GP”.'
            }
        ]
    },
    {
        id: 'mp-pharm-classes',
        category: 'professional',
        title: 'Drug Classes: Mechanisms, Onset and Contraindications',
        theme: 'Pharmacology',
        years: ['Mini oral prep'],
        patient: 'The examiner asks pharmacology questions on the drugs you just prescribed.',
        stem: 'Glaucoma drops, antibiotics, cycloplegics and steroids.',
        steps: [
            {
                phase: '1. Glaucoma drops: mechanism',
                type: 'match',
                question: 'Match each glaucoma drug class to its mechanism.',
                pairs: [
                    { label: 'Prostaglandin analogues', answer: 'Increase uveoscleral outflow (ciliary muscle ECM remodelling via MMPs)' },
                    { label: 'β-blockers', answer: 'Reduce aqueous production' },
                    { label: 'α2-agonists', answer: 'Reduce aqueous production, then increase uveoscleral outflow' },
                    { label: 'Carbonic anhydrase inhibitors', answer: 'Reduce aqueous production via the non-pigmented ciliary epithelium enzyme' },
                    { label: 'Cholinergics (pilocarpine)', answer: 'Contract ciliary muscle to open the TM and increase conventional outflow' }
                ],
                explain: 'Typical IOP reduction: PGA 25–33%, β-blocker 20–25%, α2-agonist 20–25%, CAI 15–20%.'
            },
            {
                phase: '2. Glaucoma drops: contraindications',
                type: 'match',
                question: 'Match each drug to a key contraindication.',
                pairs: [
                    { label: 'Latanoprost', answer: 'Active uveitis' },
                    { label: 'Timolol', answer: 'Asthma, COPD, bradycardia, heart block' },
                    { label: 'Brimonidine', answer: 'MAOI use; children under 2' },
                    { label: 'Brinzolamide', answer: 'Sulfonamide allergy, corneal graft or endothelial disease' },
                    { label: 'Pilocarpine', answer: 'Active uveitis, malignant glaucoma, high RD risk' }
                ],
                explain: 'Onset: timolol 20–30 min (peak 1–2 h); PGA peak 8–12 h, full effect 2–4 weeks. Apraclonidine has tachyphylaxis and more allergy; brimonidine has follicular conjunctivitis/allergy in up to a quarter of patients.',
                recall: 'The notes list brinzolamide 2% and dorzolamide 3%. The Australian strengths are brinzolamide 1% and dorzolamide 2%.'
            },
            {
                phase: '3. Antibiotics',
                type: 'match',
                question: 'Match each antibiotic class to its mechanism.',
                pairs: [
                    { label: 'Chloramphenicol', answer: 'Binds the 50S subunit (peptidyl transferase); bacteriostatic' },
                    { label: 'Aminoglycosides (gentamicin, tobramycin)', answer: 'Bind the 30S subunit, causing misreading; bactericidal' },
                    { label: 'Fluoroquinolones (ciprofloxacin)', answer: 'Inhibit DNA gyrase and topoisomerase IV; bactericidal' },
                    { label: 'Tetracyclines (doxycycline)', answer: 'Bind the 30S subunit; also inhibit MMPs and bacterial lipases' },
                    { label: 'Macrolides (azithromycin)', answer: 'Bind the 50S subunit, blocking translocation; bacteriostatic' }
                ],
                explain: 'Ciprofloxacin can leave white corneal precipitates. Chloramphenicol: avoid with a personal or family history of blood dyscrasia or bone marrow problems.',
                recall: 'The notes say chloramphenicol “interrupts peptidoglycan translocation”. Peptidoglycan is the cell wall (the β-lactam target); chloramphenicol blocks peptide bond formation at the 50S subunit.'
            },
            {
                phase: '4. Steroids and cycloplegics',
                type: 'mcq',
                question: 'How do corticosteroids reduce inflammation?',
                options: [
                    'They induce lipocortins (annexins), which inhibit phospholipase A2 and so block arachidonic acid release, cutting both prostaglandins and leukotrienes.',
                    'They inhibit cyclo-oxygenase directly, which blocks the conversion of arachidonic acid to prostaglandins while leaving the leukotrienes untouched.',
                    'They block histamine H1 receptors on conjunctival cells and stabilise mast cell membranes, which prevents degranulation after allergen exposure.',
                    'They block muscarinic receptors on the ciliary body, which stabilises the blood–aqueous barrier and so reduces the leakage of cells and protein.'
                ],
                answer: 0,
                explain: 'NSAIDs inhibit COX only. Cycloplegics are muscarinic antagonists: they relax the sphincter and ciliary muscle, giving mydriasis and cycloplegia; avoid with a narrow angle or a subluxed lens.'
            }
        ]
    }
);
