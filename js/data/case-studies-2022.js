// Cases from the 2022 case-study notes, including the Young Optometrists mock orals (MOTHs).
window.CASES.push(
{
        id: 'cs22-hsk',
        category: 'cornea',
        title: 'Dendritic Ulcer: Mechanism, Drugs & Complications',
        theme: 'HSV Keratitis',
        years: ['Case studies 2022'],
        patient: 'Adult with a painful, red, watery eye, photophobia and blur.',
        stem: 'Photo: dendritic epithelial ulcer with terminal buds, stained with fluorescein.',
        steps: [
            {
                phase: '1. Signs',
                type: 'multi',
                question: 'Which signs fit HSV epithelial keratitis?',
                options: [
                    'Dendritic ulcer with terminal buds; edges hold live virus',
                    'Usually unilateral; conjunctival injection, ciliary flush',
                    'Decreased corneal sensation',
                    'Lid vesicles, follicles, pre-auricular node, cold sores',
                    'Bilateral giant papillae'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Ddx: HZO, adenovirus, CL-related ulcer, graft rejection, Thygeson’s, neurotrophic, Acanthamoeba, fungal, trauma/FB.'
            },
            {
                phase: '2. Risk factors & virus',
                type: 'mcq',
                question: 'What triggers reactivation, and what is the virus?',
                options: [
                    'An RNA virus latent in the cornea.',
                    'A double-stranded DNA virus (HSV-1 mostly), latent in the trigeminal ganglion; most adults are seropositive by 60. Triggers: stress, fever/systemic infection, trauma, UV, menstruation, immunosuppression; asymptomatic shedding spreads it.',
                    'A bacterium spread by water.',
                    'A fungus.'
                ],
                answer: 1,
                explain: 'Presentations: infectious epithelial, neurotrophic, necrotising stromal, immune stromal, endotheliitis.'
            },
            {
                phase: '3. Aciclovir MoA',
                type: 'mcq',
                question: 'How does aciclovir work?',
                options: [
                    'It blocks the 30S ribosome.',
                    'A guanosine analogue: phosphorylated first by viral thymidine kinase (so it is selective for infected cells), then by host kinases to aciclovir triphosphate, which inhibits viral DNA polymerase and terminates the DNA chain.',
                    'It kills the virus by dissolving its envelope.',
                    'It is a steroid.'
                ],
                answer: 1,
                explain: 'Topical ointment penetrates the epithelium into aqueous. Oral dose for epithelial disease: 400 mg 5×/day for 7–10 days (via GP).'
            },
            {
                phase: '4. Management',
                type: 'mcq',
                question: 'Management?',
                options: [
                    'Steroid drops.',
                    'Most resolve within ~3 weeks; treatment limits scarring. Debride the ulcer edges under anaesthetic; topical antiviral 5×/day (aciclovir 3% 1 cm ribbon or ganciclovir gel); review next day then weekly. No steroid in active epithelial disease. Pregnancy: aciclovir B3.',
                    'Bandage lens only.',
                    'Chloramphenicol alone.'
                ],
                answer: 1,
                explain: 'Steroid may be used later for immune stromal disease under antiviral cover (controversial in other settings).'
            },
            {
                phase: '5. Complications',
                type: 'multi',
                question: 'Which complications can follow?',
                options: [
                    'Corneal toxicity from topical antivirals',
                    'Neurotrophic and geographic (metaherpetic) ulcers',
                    'Disciform keratitis → endothelial failure, bullous keratopathy',
                    'Stromal scarring and neovascularisation',
                    'Retinal detachment within 24 h'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Warn patients that recurrences are common and to return early.'
            }
        ]
    },
    {
        id: 'cs22-aau',
        category: 'uveitis',
        title: 'Red, Sore, Photophobic Eye Despite Chemist Drops',
        theme: 'Acute Anterior Uveitis',
        years: ['Case studies 2022'],
        patient: '25-year-old man.',
        stem: 'Three days of an increasingly red, sore, light-sensitive left eye. No discharge; vision OK. Over-the-counter drops haven’t helped.',
        steps: [
            {
                phase: '1. Signs',
                type: 'viva',
                question: 'What signs and symptoms fit unilateral AAU?',
                points: [
                    'Unilateral pain, photophobia, redness and watering over 1–2 days; vision little affected',
                    'Circumlimbal flush, small/miotic or irregular pupil, AC cells and flare, fine KPs',
                    'Pain and photophobia can come before visible signs (ciliary body inflammation)',
                    'Severe: posterior synechiae, PAS, corneal oedema, spill-over vitritis, CMO',
                    'IOP usually slightly low; occasionally high'
                ],
                explain: 'Ddx are easy to exclude at the slit lamp: keratitis, conjunctivitis, trauma/FB, AAC, scleritis, episcleritis, chronic AU.'
            },
            {
                phase: '2. Pathophysiology',
                type: 'mcq',
                question: 'Explain the pathophysiology.',
                options: [
                    'Bacterial infection of the iris.',
                    'Breakdown of the blood–aqueous barrier: iris and ciliary body capillaries become leaky, releasing leukocytes (cells), protein (flare) and fibrin into the aqueous, which leads to synechiae.',
                    'Raised IOP crushing the iris.',
                    'Allergic mast-cell degranulation.'
                ],
                answer: 1,
                explain: 'Associations: HLA-B27 (most common identifiable), idiopathic, herpetic, other systemic disease.'
            },
            {
                phase: '3. Steroid regimen',
                type: 'mcq',
                question: 'What is a typical early steroid regimen?',
                options: [
                    'FML BD.',
                    'Prednisolone acetate 1% (or another strong steroid): loading dose, e.g. 1 drop every 15 min for the first hour and every 30 min for the next 2 hours, then hourly while awake for the first few days (consider night doses or ointment in severe cases); shake well; review the next day; taper as it improves.',
                    'Once daily.',
                    'Oral steroid only.'
                ],
                answer: 1,
                explain: 'At day 1 the signs may have only changed a little; the symptoms often improve first.'
            },
            {
                phase: '4. Cycloplegic choice',
                type: 'mcq',
                question: 'Which cycloplegic, and why avoid cyclopentolate?',
                options: [
                    'Cyclopentolate is best in uveitis.',
                    'Homatropine 2% (often QID) or atropine 1% for pain, synechiae and the blood–aqueous barrier. Cyclopentolate may act as a chemo-attractant for leukocytes, so some clinicians avoid it in active inflammation. Tropicamide alone may do for very mild cases without synechiae.',
                    'No cycloplegic is ever needed.',
                    'Pilocarpine.'
                ],
                answer: 1,
                explain: 'Symptom relief from cycloplegia is usually quick.'
            },
            {
                phase: '5. Steroid responder',
                type: 'mcq',
                question: 'IOP rises over days to weeks. Can you just stop the steroid?',
                options: [
                    'Yes, stop immediately.',
                    'Usually not while inflamed. Small rises can be watched. If high enough to threaten the nerve (or existing damage), add timolol, brimonidine or a CAI; avoid PGAs.',
                    'Add latanoprost.',
                    'Add pilocarpine.'
                ],
                answer: 1,
                explain: 'Taper the steroid once the inflammation allows.'
            },
            {
                phase: '6. Referral',
                type: 'multi',
                question: 'When should you refer?',
                options: [
                    'Unsure of the diagnosis',
                    'Not responding to treatment',
                    'Severe or atypical inflammation; hypopyon',
                    'Bilateral presentation',
                    'Recent surgery or a drainage bleb (think endophthalmitis)',
                    'First mild unilateral episode responding well'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Bilateral or recurrent disease also needs a systemic work-up via the GP.'
            }
        ]
    },
    {
        id: 'yo-aac',
        category: 'glaucoma',
        title: 'YO Mock: Angle Closure First Aid in Detail',
        theme: 'Acute Angle Closure',
        years: ['YO mock'],
        patient: 'Middle-aged or older woman.',
        stem: 'Hazy vision, rainbow haloes, severe eye and head pain, nausea and vomiting. Photo supplied with fluorescein: mid-dilated pupil, oedematous cornea.',
        steps: [
            {
                phase: '1. Getting Diamox',
                type: 'mcq',
                question: 'According to the Optometry Board, how can the patient get acetazolamide urgently?',
                options: [
                    'You write the script.',
                    'In urgent cases a pharmacist can supply it on a telephone order from a medical practitioner — so liaise with a doctor (ophthalmologist, GP, ED). Give 500 mg orally if no contraindications; if oral isn’t possible, the patient needs IM/IV in hospital without delay.',
                    'The patient buys it over the counter.',
                    'It isn’t used in Australia.'
                ],
                answer: 1,
                explain: 'Meanwhile instil timolol 0.5%, brimonidine 0.2% and brinzolamide 1% about 2 minutes apart, plus prednisolone acetate 1% if inflamed (then 3 more drops in the first hour and hourly after).'
            },
            {
                phase: '2. Pilocarpine timing',
                type: 'mcq',
                question: 'Why wait for IOP to fall before pilocarpine, and when is it given at once?',
                options: [
                    'Pilocarpine works best at high IOP.',
                    'At high IOP the iris sphincter is ischaemic (unresponsive), and pilocarpine contracts the ciliary muscle, thickening and moving the lens forward — which can shallow the AC further. Give 1 drop of 2% (another at 15 min) just before transfer after the ophthalmologist agrees — or immediately if routine dilation caused the attack. Contraindicated in retrolenticular, aphakic and pseudophakic closure.',
                    'It is never used.',
                    'Only in children.'
                ],
                answer: 1,
                explain: 'Pilocarpine is only for phakic pupil-block or angle-crowding mechanisms.'
            },
            {
                phase: '3. Has it worked?',
                type: 'mcq',
                question: 'How do you judge a satisfactory IOP response (Choong et al.)?',
                options: [
                    'IOP below 10 mmHg.',
                    'IOP below 35 mmHg or a reduction of more than 25% from presentation. If not reduced ~30 min after the second pilocarpine dose, a hyperosmotic agent is considered (Choong: 44% needed one).',
                    'When the pain stops.',
                    'After 24 hours.'
                ],
                answer: 1,
                explain: 'Recheck IOP regularly while arranging transfer.'
            },
            {
                phase: '4. Hyperosmotics',
                type: 'match',
                question: 'Match each hyperosmotic agent to when it is used.',
                pairs: [
                    { label: 'Oral glycerol', answer: 'Non-diabetic patients who can tolerate oral intake' },
                    { label: 'Oral isosorbide', answer: 'Diabetic patients (not metabolised to glucose)' },
                    { label: 'IV mannitol', answer: 'Vomiting or oral agents fail; check cardiac and renal status' }
                ],
                distractors: ['Topical pilocarpine'],
                explain: 'They dehydrate the vitreous, reducing volume and IOP and reversing iris ischaemia. Avoid in cardiovascular or renal disease.'
            },
            {
                phase: '5. Other measures',
                type: 'multi',
                question: 'Which other measures are reasonable while waiting?',
                options: [
                    'Analgesia and antiemetics (vomiting and pain raise IOP)',
                    'Supine position (comfort; lens may fall back from the iris)',
                    'Corneal indentation with a gonio lens or cotton bud under anaesthetic to push aqueous peripherally and open the angle',
                    'Gentle ocular massage through closed lids if nothing else lowers IOP',
                    'Dilate to relieve the block'
                ],
                answers: [0, 1, 2, 3],
                explain: 'If IOP is unchanged or rising, stop further treatment: the attack will likely only break with LPI.'
            },
            {
                phase: '6. Definitive',
                type: 'mcq',
                question: 'What are the definitive treatment options?',
                options: [
                    'Long-term pilocarpine alone.',
                    'Laser peripheral iridotomy 24–48 h after IOP control (and prophylactically in the fellow eye); argon laser peripheral iridoplasty for plateau iris; lens extraction (especially with cataract) — always co-managed with an ophthalmologist.',
                    'SLT.',
                    'Latanoprost.'
                ],
                answer: 1,
                explain: 'Optometrists must always refer or co-manage AAC.'
            }
        ]
    },
    {
        id: 'yo-cl-mk',
        category: 'cornea',
        title: 'YO Mock: CL Keratitis and the Steroid Question',
        theme: 'CL Bacterial Keratitis',
        years: ['YO mock'],
        patient: 'Soft contact lens wearer.',
        stem: 'Sudden pain progressing over 1–2 days, redness, tearing, photophobia, blur. Photo with fluorescein: epithelial defect over a >1 mm suppurative stromal infiltrate with indistinct edges.',
        steps: [
            {
                phase: '1. Signs',
                type: 'multi',
                question: 'Which signs fit CL-related bacterial keratitis?',
                options: [
                    'Epithelial defect with a stromal infiltrate (>1 mm) with indistinct edges; possible necrosis and thinning',
                    'Surrounding “ground-glass” stromal oedema and white cells',
                    'AC reaction, hypopyon, endothelial plaque',
                    'Conjunctival injection; check the other eye too',
                    'Painless, round 0.5 mm subepithelial infiltrate'
                ],
                answers: [0, 1, 2, 3],
                explain: 'The last option describes a sterile infiltrate.'
            },
            {
                phase: '2. Dosing by severity',
                type: 'mcq',
                question: 'How does dosing change with severity?',
                options: [
                    'Same dose for all.',
                    'Central or severe (deep, >2 mm, extensive suppuration): loading dose (e.g. every 5–15 min for 30–60 min), then every 30–60 min around the clock for 1–2 days. Less severe: less frequent dosing. Cycloplegic if there is significant AC inflammation. Refer anything >2 mm or vision-threatening.',
                    'QID always.',
                    'Ointment once daily.'
                ],
                answer: 1,
                explain: 'Fluoroquinolones (ciprofloxacin/ofloxacin 0.3%) inhibit DNA gyrase and topoisomerase IV.'
            },
            {
                phase: '3. Steroid pros and cons',
                type: 'match',
                question: 'Match each point about corticosteroids in bacterial keratitis.',
                pairs: [
                    { label: 'Potential benefit', answer: 'Less inflammation → less scarring and visual loss' },
                    { label: 'Risks', answer: 'Local immunosuppression, recrudescence, inhibits collagen synthesis (melt), raised IOP' },
                    { label: 'Evidence', answer: 'No clear overall benefit, but no increase in adverse events (SCUT)' }
                ],
                distractors: ['Kills bacteria directly'],
                explain: 'Symptoms may temporarily flare as steroids are reduced.'
            },
            {
                phase: '4. When to add a steroid',
                type: 'mcq',
                question: 'If you choose to add a steroid, when and how?',
                options: [
                    'At presentation with the first antibiotic dose.',
                    'Only after the organism is controlled: e.g. if the infiltrate threatens the pupil, after at least 2–3 days of progressive improvement on antibiotic, with fungus (and Acanthamoeba, HSV) ruled out. Use the minimum effective dose, keep antibiotic cover going (tapered gradually), check compliance and IOP, and review 1–2 days after starting.',
                    'Never under any circumstances.',
                    'Only oral steroid.'
                ],
                answer: 1,
                critical: true,
                explain: 'A conservative approach avoids steroids for presumed bacterial ulcers until the organism is identified. Patients already on a steroid at presentation should stop until the infection is controlled.'
            }
        ]
    }
);
