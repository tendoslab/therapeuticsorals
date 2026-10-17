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
                    'A single-stranded RNA virus latent in the corneal stroma; triggers: contact lens wear, dry eye and topical anaesthetic use; it spreads only through direct contact with active lesions, never by shedding.',
                    'A double-stranded DNA virus (mostly HSV-1) latent in the trigeminal ganglion; triggers: stress, fever, trauma, UV, menstruation, immunosuppression; asymptomatic shedding spreads it.',
                    'A double-stranded DNA virus (mostly HSV-2) latent in the ciliary ganglion; triggers: bright light and exercise; it isn’t shed without symptoms.',
                    'A bacterium (Staph aureus) that mimics a virus, latent in the lid margin; triggers: blepharitis flares; it spreads by sharing towels and swimming.'
                ],
                answer: 1,
                explain: 'Presentations: infectious epithelial, neurotrophic, necrotising stromal, immune stromal, endotheliitis.'
            },
            {
                phase: '3. Aciclovir MoA',
                type: 'mcq',
                question: 'How does aciclovir work?',
                options: [
                    'A thymidine analogue phosphorylated by host kinases in all cells (so it isn’t selective), which inhibits viral reverse transcriptase and blocks RNA synthesis, stopping the virus from leaving the cell.',
                    'A guanosine analogue phosphorylated first by viral thymidine kinase (selective for infected cells), then to aciclovir triphosphate, which inhibits viral DNA polymerase and terminates the chain.',
                    'A neuraminidase inhibitor that stops new virions leaving infected cells; it doesn’t affect viral DNA replication, so it is selective only for cells already shedding virus and is used to prevent spread.',
                    'A protease inhibitor that blocks viral capsid assembly after replication is complete; it is selective because human cells lack the viral protease, and it is activated by host kinases in every cell.'
                ],
                answer: 1,
                explain: 'Topical ointment penetrates the epithelium into aqueous. Oral dose for epithelial disease: 400 mg 5×/day for 7–10 days (via GP).'
            },
            {
                phase: '4. Management',
                type: 'mcq',
                question: 'Management?',
                options: [
                    'Most need 3 months to resolve; treatment only speeds healing. Topical antiviral BD plus prednisolone acetate QID to limit scarring; review in 2 weeks. Aciclovir is contraindicated in pregnancy (category D).',
                    'Most resolve within ~3 weeks; treatment limits scarring. Debride the edges, topical antiviral 5×/day (aciclovir 3% or ganciclovir gel); review next day then weekly. No steroid. Aciclovir is B3.',
                    'Most resolve within 2 days; treatment isn’t needed. Lubricants only, with a bandage lens; review in a month. Steroid is fine once the dendrite fades.',
                    'Most resolve within ~3 weeks; treatment limits scarring. Chloramphenicol QID and a steroid–antibiotic combination; review next day. Aciclovir is category A.'
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
                    'Band keratopathy within a week'
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
                    'Direct bacterial infection of the iris stroma: organisms release toxins that cause cells, flare and pus in the anterior chamber, leading to hypopyon in most cases.',
                    'Breakdown of the blood–aqueous barrier: leaky iris and ciliary capillaries release leukocytes (cells), protein (flare) and fibrin, leading to synechiae.',
                    'Raised IOP compressing the iris vessels: ischaemia releases pigment (cells) and fluid (flare), leading to iris atrophy.',
                    'Mast-cell degranulation in the iris (type I allergy): histamine causes cells and flare, leading to itch and stringy discharge.'
                ],
                answer: 1,
                explain: 'Associations: HLA-B27 (most common identifiable), idiopathic, herpetic, other systemic disease.'
            },
            {
                phase: '3. Steroid regimen',
                type: 'mcq',
                question: 'What is a typical early steroid regimen?',
                options: [
                    'FML 0.1%: one drop BD for a week, then stop; no loading dose (it increases the steroid response); shaking is unnecessary for solutions or suspensions; review in 2 weeks if not better.',
                    'Prednisolone acetate 1%: loading dose (e.g. q15min for 1 h, q30min for 2 h), then hourly while awake for a few days (night doses if severe); shake well; review next day; taper as it improves.',
                    'Prednisolone acetate 1%: once daily at night for a month, since one drop of a suspension covers 24 hours; shaking isn’t needed; review at 4 weeks; stop without tapering once cells clear.',
                    'Oral prednisolone 50 mg daily via the GP as the only steroid, since topical drops can’t reach the ciliary body; cycloplegic at night; review in a week; taper over 3 days once the cells have cleared.'
                ],
                answer: 1,
                explain: 'At day 1 the signs may have only changed a little; the symptoms often improve first.'
            },
            {
                phase: '4. Cycloplegic choice',
                type: 'mcq',
                question: 'Which cycloplegic, and why avoid cyclopentolate?',
                options: [
                    'Cyclopentolate 1% TDS is best because it is the shortest-acting and keeps the pupil mobile; atropine is avoided in uveitis because it causes synechiae to form in the dilated position.',
                    'Homatropine 2% (often QID) or atropine 1% for pain, synechiae and the barrier. Cyclopentolate may attract leukocytes, so some avoid it. Tropicamide may do for very mild cases.',
                    'No cycloplegic is needed when the steroid is started hourly, because the steroid alone relieves ciliary spasm and prevents synechiae.',
                    'Pilocarpine 1% BD, which keeps the pupil small so the iris can’t stick to the lens; cycloplegics are avoided because they raise IOP.'
                ],
                answer: 1,
                explain: 'Symptom relief from cycloplegia is usually quick.'
            },
            {
                phase: '5. Steroid responder',
                type: 'mcq',
                question: 'IOP rises over days to weeks. Can you just stop the steroid?',
                options: [
                    'Yes: stop the steroid immediately whatever the inflammation, since a steroid response always causes permanent optic nerve damage within days.',
                    'Usually not while inflamed. Small rises can be watched; if high enough to threaten the nerve, add timolol, brimonidine or a CAI; avoid PGAs.',
                    'Usually not, but add latanoprost, which is the strongest drop and safe once the steroid has been started.',
                    'Usually not, but add pilocarpine 2% QID, which opens the inflamed meshwork, lowers IOP and also helps prevent posterior synechiae.'
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
                    'Endorsed optometrists can write the script for emergencies, so prescribe 500 mg directly and send it to the nearest pharmacy; a pharmacist can’t take a phone order for acetazolamide from anyone.',
                    'In urgent cases a pharmacist can supply it on a doctor’s telephone order, so liaise with a doctor (ophthalmologist, GP, ED). 500 mg orally if no contraindications; otherwise IM/IV in hospital.',
                    'The patient can buy it over the counter as a Pharmacist Only medicine if you give them a referral letter stating the diagnosis; 250 mg QID orally, and IV acetazolamide is never needed.',
                    'It isn’t used in Australia any more: the OBA guideline replaced it with topical brinzolamide hourly, so no doctor is needed, and oral acetazolamide is kept only for post-operative IOP spikes.'
                ],
                answer: 1,
                explain: 'Meanwhile instil timolol 0.5%, brimonidine 0.2% and brinzolamide 1% about 2 minutes apart, plus prednisolone acetate 1% if inflamed (then 3 more drops in the first hour and hourly after).'
            },
            {
                phase: '2. Pilocarpine timing',
                type: 'mcq',
                question: 'Why wait for IOP to fall before pilocarpine, and when is it given at once?',
                options: [
                    'At high IOP pilocarpine works best because the ischaemic sphincter is hypersensitive, so give it every 5 minutes at once without asking anyone; the only exception is an attack caused by dilation, where it must be withheld.',
                    'At high IOP the sphincter is ischaemic, and pilocarpine thickens and advances the lens, shallowing the AC. Give 2% (repeat at 15 min) before transfer once the ophthalmologist agrees — or at once if dilation caused it.',
                    'Pilocarpine dilates the pupil at high IOP through its α-agonist action, worsening closure; it is held until the cornea clears, and it is never given after a dilation-induced attack.',
                    'Pilocarpine is held only because it stings the inflamed eye and the patient may refuse further drops; give 4% at once in any closure mechanism, including aphakic and pseudophakic eyes.'
                ],
                answer: 1,
                explain: 'Pilocarpine is only for phakic pupil-block or angle-crowding mechanisms.'
            },
            {
                phase: '3. Has it worked?',
                type: 'mcq',
                question: 'How do you judge a satisfactory IOP response (Choong et al.)?',
                options: [
                    'IOP below 21 mmHg within 15 minutes; if not, repeat timolol every 10 minutes, since hyperosmotics were rarely needed in the study (under 5% of the patients treated).',
                    'IOP below 35 mmHg or a fall of more than 25% from presentation; if not reduced ~30 min after the second pilocarpine dose, consider a hyperosmotic (44% needed one).',
                    'Pain relief and a clearing cornea alone, whatever the IOP reading; a hyperosmotic is given only if the patient vomits, which happened in 80% of the study group.',
                    'IOP below 10 mmHg after 24 hours; if not, give pilocarpine 4% hourly until it is, since hyperosmotics didn’t help in the study and delayed the LPI.'
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
                    'Long-term pilocarpine 2% QID in both eyes is the definitive treatment; LPI is reserved for patients who can’t use the drops, and cataract surgery worsens angle closure.',
                    'LPI 24–48 h after IOP control (and in the fellow eye); argon iridoplasty for plateau iris; lens extraction (especially with cataract) — always co-managed with ophthalmology.',
                    'SLT to both eyes within 24 hours, since SLT opens the closed angle by stretching the TM; LPI is only used for PXF, and the fellow eye needs no treatment unless it is symptomatic.',
                    'Latanoprost nocte for life, since PGAs work despite a closed angle; laser and surgery are reserved for chronic angle-closure glaucoma.'
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
                    'All ulcers get the same QID dosing for 7 days; severity only changes how long you continue after healing; cycloplegics aren’t used in MK since they hide AC cells; refer only if over 5 mm.',
                    'Central or severe (deep, >2 mm, suppurative): loading (every 5–15 min for 30–60 min), then every 30–60 min around the clock for 1–2 days; milder: less often; cycloplegic if AC inflamed; refer >2 mm.',
                    'Central or severe: ointment once daily at night (better contact time than drops); milder: drops QID; a cycloplegic only if the pupil is small; refer if it hasn’t healed at the 2-week review.',
                    'Central or severe: hourly while awake only (night doses add toxicity); milder: BD; cycloplegic avoided because it hides AC cells; refer only if hypopyon.'
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
                    'At presentation with the first antibiotic dose if the infiltrate is near the pupil, since early steroid prevents scarring in the visual axis; the antibiotic can then be stopped once the steroid starts.',
                    'Only once controlled: e.g. infiltrate threatening the pupil, after 2–3 days of improvement, with fungus, Acanthamoeba and HSV excluded. Minimum dose, keep antibiotic cover, check IOP, review in 1–2 days.',
                    'Never under any circumstances: SCUT showed steroids caused perforation in most bacterial ulcers, even after re-epithelialisation and with full antibiotic cover throughout.',
                    'Only as oral prednisolone via the GP once the ulcer has healed, since topical steroids reopen the epithelium; no antibiotic cover is needed by then, and IOP checks aren’t needed for oral steroid.'
                ],
                answer: 1,
                critical: true,
                explain: 'A conservative approach avoids steroids for presumed bacterial ulcers until the organism is identified. Patients already on a steroid at presentation should stop until the infection is controlled.'
            }
        ]
    }
);
