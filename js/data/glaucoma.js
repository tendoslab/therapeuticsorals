// Glaucoma & IOP cases (posterior-eye examiner)
window.CASES.push(
    {
        id: 'aac-first-aid',
        category: 'glaucoma',
        title: 'Acute Angle Closure: Diagnosis & First Aid',
        theme: 'Acute Angle Closure',
        years: ['2019', '2025', 'Mock 2025'],
        patient: '65-year-old East Asian woman.',
        stem: 'Left red, painful eye since last night. She has seen haloes around lights and vomited once this morning. IOP R 16 mmHg, L 55 mmHg.',
        exhibit: 'Slit-lamp photo, left eye: diffuse conjunctival and circumlimbal injection, hazy cornea, mid-dilated oval pupil, shallow anterior chamber. The right eye is white.',
        steps: [
            {
                phase: '1. Describe & differentials',
                type: 'viva',
                question: 'Describe what you see and give your differential diagnoses.',
                points: [
                    'Circumlimbal (ciliary) plus conjunctival injection',
                    'Corneal epithelial (microcystic) oedema / haze',
                    'Mid-dilated, poorly reactive (often vertically oval) pupil',
                    'Shallow anterior chamber',
                    'Leading diagnosis: acute primary angle closure (pupillary block)',
                    'Ddx: Posner–Schlossman syndrome (glaucomatocyclitic crisis)',
                    'Ddx: anterior uveitis with raised IOP (e.g. herpetic trabeculitis)',
                    'Ddx: secondary angle closure — neovascular, phacomorphic (intumescent lens)'
                ],
                explain: 'IOP of 55 mmHg with a mid-dilated pupil, corneal oedema, haloes and vomiting is acute angle closure until proven otherwise. Raised-IOP differentials are worth naming because the examiner will ask how you tell them apart.'
            },
            {
                phase: '2. Differentiating PSS',
                type: 'mcq',
                question: 'How would Posner–Schlossman syndrome differ from this presentation?',
                options: [
                    'PSS: open angle, white or mildly injected eye, a few fine KPs, minimal cells, normal pupil, recurrent unilateral spikes in a younger adult; only mild discomfort.',
                    'PSS: closed angle on gonioscopy, mid-dilated pupil and marked corneal oedema like AAC, but the spikes are bilateral and occur in older hyperopic women; pain is usually severe.',
                    'PSS: open angle with a dense AC reaction (3+ cells), posterior synechiae and a miotic pupil; recurrent spikes in children, usually with photophobia and a hypopyon.',
                    'PSS: normal IOP between and during attacks, a very red eye with diffuse injection and mucopurulent discharge; mostly in elderly patients after cataract surgery.'
                ],
                answer: 0,
                explain: 'PSS (glaucomatocyclitic crisis) gives recurrent unilateral IOP spikes (often 40–60 mmHg) with an <strong>open angle</strong>, minimal discomfort, a few fine KPs and very little AC reaction — usually in adults aged 20–50. CMV is implicated, especially in Asian patients. Gonioscopy (open angle) is the key separator from AAC.'
            },
            {
                phase: '3. Confirming the mechanism',
                type: 'mcq',
                question: 'The cornea is too hazy to view the left angle. What is your quickest way to support the diagnosis?',
                options: [
                    'Indentation gonioscopy on the affected (left) eye straight away.',
                    'Van Herick and gonioscopy on the FELLOW (right) eye.',
                    'Wait for timolol to clear the cornea, then gonioscope the left eye.',
                    'Dilate the right eye and compare the depth of the two chambers.'
                ],
                answer: 1,
                critical: true,
                explain: '“Patients have two eyes.” Anatomical predisposition is usually bilateral, so an occludable angle in the fellow eye strongly supports primary angle closure. <strong>Never dilate</strong> the fellow eye. Indentation gonioscopy can be done later, and glycerin or a hyperosmotic can clear the cornea in hospital.',
                recall: 'A 2019 candidate was rewarded specifically for saying “check the other eye” when gonioscopy was impossible.'
            },
            {
                phase: '4. Results',
                type: 'reveal',
                text: '<strong>Right eye gonioscopy:</strong> posterior trabecular meshwork not visible for ~270° (occludable). <br><strong>Medical history:</strong> mild asthma (salbutamol PRN). No kidney disease, no sulfonamide allergy, no antidepressants. BP 140/85, pulse 78. Not pregnant.'
            },
            {
                phase: '5. First aid for THIS patient',
                type: 'multi',
                question: 'You are arranging same-day transfer to ophthalmology. Which first-aid measures are appropriate for this patient right now?',
                options: [
                    'Timolol 0.5% one drop',
                    'Brimonidine 0.2% one drop',
                    'Brinzolamide 1% (or dorzolamide 2%) one drop',
                    'Prednisolone acetate 1% (e.g. Pred Forte)',
                    'Oral acetazolamide 500 mg stat — arranged through a medical practitioner',
                    'Atropine 1% for the pain',
                    'Pilocarpine 2% straight away, every 5 minutes',
                    'Latanoprost 0.005% as the main acute agent'
                ],
                answers: [1, 2, 3, 4],
                critical: true,
                explain: '<ul><li><strong>Timolol is contraindicated</strong> — she has asthma (non-selective β-blocker → bronchospasm).</li><li>Brimonidine (no MAOIs), a topical CAI and oral acetazolamide (no sulfa allergy or renal/hepatic failure) are fine. Space drops ~2–5 minutes apart.</li><li>Prednisolone acetate 1% settles the inflammation from ischaemia, reduces PAS formation and helps the cornea clear.</li><li><strong>Atropine is contraindicated</strong> — dilating worsens the closure.</li><li>Pilocarpine is held until IOP is below ~40 mmHg and ophthalmology agrees (next step).</li><li>PGAs aren\'t harmful, but they take hours to work, so they aren\'t the acute agent.</li></ul>',
                recall: 'A 2025 candidate suggested atropine for pain in AAC and correctly recognised afterwards that it is contraindicated. Other recalls quoted “brimonidine 0.5%” (it is 0.2%, or 0.15% Alphagan P; <em>apraclonidine</em> is 0.5%) and “pilocarpine 2.5%” (pilocarpine comes as 1%, 2% or 4%).'
            },
            {
                phase: '6. Contraindications',
                type: 'match',
                question: 'Match each first-aid drug to its key contraindication.',
                pairs: [
                    { label: 'Timolol 0.5%', answer: 'Asthma / 2nd–3rd degree heart block / bradycardia' },
                    { label: 'Brimonidine 0.2%', answer: 'Concurrent MAOI (hypertensive crisis); infants under 2' },
                    { label: 'Oral acetazolamide', answer: 'Sulfonamide hypersensitivity, hypokalaemia, severe renal or hepatic failure' },
                    { label: 'Pilocarpine 2%', answer: 'Lens-induced (phacomorphic) closure, aqueous misdirection, active uveitis' }
                ],
                distractors: ['Pregnancy category A', 'Contact lens wear'],
                critical: true,
                explain: 'You must screen for these <em>before</em> instilling anything. Topical CAIs (dorzolamide/brinzolamide) are contraindicated in severe renal impairment, and need caution with sulfonamide allergy and a compromised endothelium (e.g. Fuchs\'). If someone is on a systemic β-blocker, timolol is a precaution (less extra effect, more systemic risk) rather than an absolute contraindication.',
                recall: 'A 2025 candidate listed “endothelial cell dysfunction” as a contraindication to <em>oral</em> acetazolamide. That caution belongs to <em>topical</em> CAIs (risk of corneal decompensation). The panel also pushed on brimonidine: concurrent MAOIs are an absolute contraindication even for a single dose, whereas renal impairment is only a caution.'
            },
            {
                phase: '7. Getting acetazolamide',
                type: 'mcq',
                question: 'How do you get oral acetazolamide (Diamox) for this patient in Australia?',
                options: [
                    'Prescribe it yourself on an optometry script: oral acetazolamide 500 mg is on the endorsed optometrist list for glaucoma emergencies, so give the script while you start topical first aid.',
                    'Ask the community pharmacist to supply it over the counter as a Pharmacist Only medicine; acetazolamide 250 mg tablets don’t need a prescription when the optometrist documents the IOP.',
                    'Contact a medical practitioner (on-call ophthalmology registrar, ED or the patient\'s GP) to prescribe or give it, while you start topical first aid — or send the patient to ED.',
                    'Skip it: if timolol, brimonidine and a topical CAI are all given, oral acetazolamide adds nothing, so there is no need to involve a doctor before transfer.'
                ],
                answer: 2,
                explain: 'Endorsed optometrists in Australia prescribe <strong>topical</strong> ocular medicines. Oral acetazolamide (S4) needs a medical prescriber; a pharmacist can\'t supply it without a prescription. Phone the ophthalmology registrar or ED, start topical first aid and arrange urgent transfer. Typical dose: 500 mg orally stat (two 250 mg tablets), or IV in ED.'
            },
            {
                phase: '8. Vomiting',
                type: 'mcq',
                question: 'She vomits the acetazolamide tablet. What will the hospital most likely do?',
                options: [
                    'Repeat oral acetazolamide 500 mg every 10–15 minutes with an antiemetic until one dose stays down.',
                    'Give IV acetazolamide and/or IV mannitol (hyperosmotic), plus an antiemetic and analgesia.',
                    'Give atropine 1% to relax the ciliary body and an antiemetic, then repeat the oral tablet.',
                    'Give IV prednisolone and pilocarpine 4% every 5 minutes until the cornea clears.'
                ],
                answer: 1,
                explain: 'If oral acetazolamide can\'t be tolerated or is contraindicated, ED or ophthalmology use IV acetazolamide or IV mannitol (check cardiac and renal status — mannitol causes volume load), with an antiemetic and analgesia. AAC is often misdiagnosed in ED as migraine, gastroenteritis or an intracranial event because of the headache and vomiting.'
            },
            {
                phase: '9. Pilocarpine',
                type: 'mcq',
                question: 'Why hold pilocarpine 2% at first, and what else must happen before you use it?',
                options: [
                    'Pilocarpine dilates the pupil at high IOP, deepening the closure, so wait until IOP is below ~20 mmHg and the fellow eye has had an LPI; no specialist input is needed if the fellow-eye angle is open.',
                    'Above ~40 mmHg the sphincter is ischaemic and won’t respond, and pilocarpine pulls the lens–iris diaphragm forward. Wait until IOP is below ~40 and ophthalmology has confirmed a pupil-block mechanism.',
                    'Above ~40 mmHg pilocarpine is absorbed too fast and causes systemic toxicity, so wait until IOP is below ~40; the only other requirement is that the patient has stopped vomiting and can lie flat.',
                    'It is held only because it stings an oedematous cornea; once the cornea clears (usually within an hour of timolol) it can be used every 5 minutes without the ophthalmologist’s agreement or any other check.'
                ],
                answer: 1,
                explain: 'Ischaemia (reduced blood flow) at high IOP paralyses the sphincter, so pilocarpine is useless until IOP falls. Ciliary muscle contraction also thickens the lens and moves it forward, which can <em>worsen</em> lens-related closure. Once IOP is below ~40 mmHg and ophthalmology agrees, pilocarpine 1–2% helps pull the iris out of the angle.',
                recall: 'In 2025 a candidate couldn\'t name the second condition for pilocarpine besides IOP below 40. The answer is ophthalmologist agreement and confirmation of the mechanism (it is contraindicated in phacomorphic or lens-induced closure and aqueous misdirection).'
            },
            {
                phase: '10. Definitive care',
                type: 'viva',
                question: 'What is the definitive management, and why does the fellow eye matter?',
                points: [
                    'Laser peripheral iridotomy (LPI) in the affected eye once the cornea clears',
                    'Prophylactic LPI in the fellow eye (roughly 40–80% risk of an acute attack within 5–10 years untreated)',
                    'Three reasons for LPI: relieve pupil block / lower IOP, prevent recurrence and fellow-eye attack, stop progressive PAS (chronic angle closure)',
                    'Lens extraction (EAGLE) — especially with cataract, a phacomorphic component, or persistent closure after LPI',
                    'Iridoplasty if plateau iris persists after a patent LPI',
                    'Follow-up: gonioscopy, disc, OCT and VF once settled; check for PAS and glaukomflecken'
                ],
                explain: 'LPI makes a bypass for aqueous from the posterior to the anterior chamber, flattening the iris and opening the angle. The fellow eye shares the same anatomy, so it is treated prophylactically. EAGLE showed clear lens extraction did better than LPI for PAC with IOP ≥ 30 and for PACG. A 2+ cataract matters — the lens is part of the crowding.',
                recall: 'One 2025 candidate called lens-induced closure “pupillary block”. The examiner wanted <strong>phacomorphic angle closure</strong>.'
            }
        ]
    },
    {
        id: 'chronic-angle-closure',
        category: 'glaucoma',
        title: 'Intermittent & Chronic Angle Closure',
        theme: 'PACS / PAC / PACG',
        years: ['2025'],
        patient: '60-year-old East Asian woman, hyperopic (+3.00 DS OU).',
        stem: 'She gets headaches and blurry vision in dark rooms (e.g. the cinema) that settle after sleep. IOP R 20 mmHg, L 26 mmHg. Both eyes are white and quiet today.',
        steps: [
            {
                phase: '1. Next step',
                type: 'mcq',
                question: 'What is the single most important test now?',
                options: [
                    'Dilated fundus exam (to check the discs)',
                    'Gonioscopy (with indentation)',
                    'Water-drinking provocative test',
                    'Anterior segment pachymetry'
                ],
                answer: 1,
                explain: 'Symptoms brought on in dim light in a hyperopic Asian woman suggest intermittent angle closure. Gonioscopy (with indentation, to tell appositional from synechial closure) is essential <strong>before</strong> any dilation.'
            },
            {
                phase: '2. Results',
                type: 'reveal',
                text: '<strong>Gonioscopy:</strong> R — posterior TM not visible for 2 quadrants, no PAS. L — posterior TM not visible for 3 quadrants, opens on indentation in places, a few small PAS inferiorly. No glaukomflecken.'
            },
            {
                phase: '3. Classify',
                type: 'mcq',
                question: 'How would you classify each eye (ISGEO-style terms), assuming the discs and fields are normal?',
                options: [
                    'R: primary angle-closure suspect (PACS); L: primary angle closure (PAC — raised IOP and/or PAS, no optic neuropathy).',
                    'R: primary angle closure (PAC — occludable with raised IOP); L: primary angle-closure glaucoma (PACG — because PAS are present).',
                    'R: normal (2 quadrants isn’t occludable); L: primary angle-closure suspect (PACS — PAS don’t change the stage without raised IOP).',
                    'R: primary angle-closure suspect (PACS); L: chronic angle-closure glaucoma (PAS plus IOP 26 define glaucoma even with normal discs).'
                ],
                answer: 0,
                explain: '<ul><li><strong>PACS</strong>: iridotrabecular contact (≥180° in recent definitions such as ZAP; ≥270° in the original ISGEO) with normal IOP, no PAS and no glaucomatous optic neuropathy.</li><li><strong>PAC</strong>: as above, plus raised IOP and/or PAS — but no optic neuropathy.</li><li><strong>PACG</strong>: PAC plus glaucomatous optic neuropathy.</li></ul>'
            },
            {
                phase: '4. Chronic signs',
                type: 'viva',
                question: 'What signs suggest chronic or previous angle closure?',
                points: [
                    'Peripheral anterior synechiae (PAS) on gonioscopy',
                    'Glaukomflecken (anterior subcapsular lens opacities after a prior acute attack)',
                    'Sectoral iris atrophy / whorling, irregular or poorly reactive pupil',
                    'Raised IOP with a narrow angle',
                    'Glaucomatous disc cupping / RNFL loss and matching VF defects (PACG)'
                ],
                explain: 'Glaukomflecken and sectoral iris atrophy are “scars” of previous acute ischaemic attacks. PAS (often patchy, starting superiorly) mean chronic synechial closure, which LPI alone won\'t reverse.',
                recall: 'A 2025 candidate forgot both glaukomflecken and PAS when asked for signs of chronic angle closure.'
            },
            {
                phase: '5. OCT & fields',
                type: 'reveal',
                text: 'OCT shows superior RNFL thinning in the LEFT eye, and the left 24-2 shows a reliable, repeatable inferior arcuate defect. Structure and function agree. Right eye normal.'
            },
            {
                phase: '6. Management',
                type: 'mcq',
                question: 'The left eye is now PACG. What is the best plan?',
                options: [
                    'Start pilocarpine 2% QID long-term in both eyes to keep the angles open and review in 3 months; LPI is only needed after an acute attack, and lens extraction isn’t indicated before cataract.',
                    'Refer to ophthalmology for LPI (both eyes) ± lens extraction; start IOP-lowering for the left eye (e.g. a PGA if not contraindicated) and set a target.',
                    'Start latanoprost in the left eye and refer within 4 months under the OBA rule like POAG; LPI isn’t needed once a PGA controls the IOP, because PGAs bypass the closed angle.',
                    'Dilate both eyes to assess the discs fully, then refer for SLT in both eyes, which opens appositional angles and avoids the need for LPI or lens extraction in PACG.'
                ],
                answer: 1,
                explain: 'PACG needs the mechanism treated (LPI to relieve pupil block; lens extraction is often better per EAGLE) <strong>and</strong> the IOP controlled. PGAs work well in angle closure because they don\'t depend on the trabecular meshwork. Chronic pilocarpine isn\'t first-line. Say “provided there are no contraindications” and refer to ophthalmology, as angle-closure glaucoma is managed with them.'
            },
            {
                phase: '7. ZAP & access',
                type: 'mcq',
                question: 'For the PACS right eye, the examiner asks what the ZAP trial means for you, and why a metro patient might be treated differently from a rural one.',
                options: [
                    'ZAP (Chinese PACS) found LPI roughly halved progression to PAC and almost eliminated acute attacks, so every PACS eye should have prophylactic LPI; metro and rural patients are treated the same way.',
                    'ZAP (Chinese PACS) found a real but small absolute benefit from LPI, so routine prophylaxis isn’t needed; treat with risk factors such as poor access to emergency care (rural), frequent dilation or a fellow-eye attack.',
                    'ZAP (Indian PACS) found lens extraction beat LPI for PACS, so a metro patient should have early cataract surgery; a rural patient is simply observed, because they can’t attend the frequent post-operative reviews that surgery needs.',
                    'ZAP (Chinese PAC with raised IOP) found LPI gave no benefit, so no PACS eye should be lasered; a rural patient is given pilocarpine to use if symptoms start, while a metro patient attends ED if needed.'
                ],
                answer: 1,
                explain: 'ZAP: over ~6 years, few untreated PACS eyes progressed, so the number needed to treat was high. In metropolitan Sydney the patient can reach emergency ophthalmology quickly. A rural patient far from LPI and emergency care has a stronger case for prophylactic LPI. EAGLE (lens extraction) applies to PAC with IOP ≥30 and PACG, not to PACS.',
                recall: 'The 2025 examiner\'s “metro Sydney vs regional” question was about <strong>access to emergency care and LPI</strong>.'
            }
        ]
    },
    {
        id: 'pxf',
        category: 'glaucoma',
        title: 'Pseudoexfoliation & Asymmetric IOP',
        theme: 'PXF / PXG',
        years: ['2018', '2019', '2025', 'Mock 2025'],
        patient: '76-year-old woman of Scandinavian descent. Routine examination.',
        stem: 'VA 6/6 OU. She has not had cataract surgery.',
        exhibit: 'Photo of a dilated left pupil: a grey-white central disc of material on the anterior lens capsule, a clear intermediate zone and a granular peripheral ring (“hoarfrost”). The pupillary ruff looks moth-eaten.',
        steps: [
            {
                phase: '1. Describe & signs',
                type: 'viva',
                question: 'What do you see, and what other signs would you look for in this syndrome?',
                points: [
                    'Pseudoexfoliative material on the anterior capsule: central disc, clear zone, peripheral granular zone',
                    'Loss of the pupillary ruff with peripupillary transillumination defects',
                    'Poor pupil dilation',
                    'Gonioscopy: patchy, uneven TM pigment (heavier inferiorly) and Sampaolesi\'s line',
                    'Flakes on the pupil margin, zonules and corneal endothelium',
                    'Phacodonesis / zonular weakness (cataract surgery risk)',
                    'Asymmetric or unilateral raised IOP with large fluctuations'
                ],
                explain: 'The clear intermediate zone comes from the iris rubbing material off the capsule as the pupil moves. That rubbing also releases pigment, which is why TIDs sit at the pupil margin (unlike the mid-peripheral TIDs of PDS).'
            },
            {
                phase: '2. PXF vs PDS',
                type: 'mcq',
                question: 'Which findings separate PXF from pigment dispersion syndrome (PDS)?',
                options: [
                    'PXF: dense homogeneous 360° TM pigment, Krukenberg spindle, mid-peripheral radial slit TIDs, older patients. PDS: patchy TM pigment heavier superiorly, Sampaolesi line, peripupillary TIDs, white capsular flakes, young myopes.',
                    'PXF: patchy TM pigment (heavier inferiorly), Sampaolesi line, peripupillary TIDs, older patients. PDS: dense homogeneous 360° TM pigment, Krukenberg spindle, mid-peripheral radial slit TIDs, young myopes.',
                    'PXF: patchy TM pigment (heavier inferiorly), mid-peripheral slit TIDs, posterior iris bowing, older patients. PDS: dense TM pigment, white capsular flakes, peripupillary TIDs, young hyperopes.',
                    'PXF: patchy TM pigment and Sampaolesi line, peripupillary TIDs, young myopic men. PDS: dense homogeneous TM pigment, Krukenberg spindle, mid-peripheral TIDs, older Scandinavian women.'
                ],
                answer: 1,
                explain: 'Sampaolesi\'s line (pigment anterior to Schwalbe\'s line) can occur in both, but it is classically linked with PXF. Patient profile matters too: PDS is young, myopic and usually Caucasian; PXF is over 60 with high prevalence in Scandinavians.',
                recall: 'The mock orals table listed PDS demographics as “often Asian”. That is wrong: PDS is uncommon in Asian and Black populations and typically affects young Caucasian myopes.'
            },
            {
                phase: '3. What is the material?',
                type: 'viva',
                question: 'What is pseudoexfoliative material, and where else is it found in the body?',
                points: [
                    'An abnormal fibrillar extracellular matrix (elastic-microfibril) material — a systemic disorder',
                    'Strong genetic link with LOXL1 variants',
                    'Found in skin, heart, lungs, liver, kidney, blood vessels and meninges',
                    'Associations: vascular disease, hearing loss; retinal vein occlusion risk in the eye',
                    'Zonular weakness → lens subluxation and capsular complications at cataract surgery'
                ],
                explain: 'The “Scandinavian back-of-eye” question in 2019 was probably after <strong>glaucoma</strong> (PXG) and the higher rate of <strong>retinal vein occlusion</strong> in PXF.'
            },
            {
                phase: '4. Prognosis',
                type: 'mcq',
                question: 'In the Early Manifest Glaucoma Trial, how did untreated progression in PXF glaucoma compare with other types?',
                options: [
                    'Slowest — about −0.4 dB/year MD, compared with about −1.3 for high-tension POAG and −3.1 for NTG.',
                    'Fastest — about −3.1 dB/year MD, compared with about −1.3 for high-tension POAG and −0.4 for NTG.',
                    'Similar to POAG — about −1.3 dB/year MD, compared with about −0.4 for NTG; PXF only differs in IOP.',
                    'Fastest — about −13 dB/year MD, compared with about −3 for high-tension POAG and −1 for NTG.'
                ],
                answer: 1,
                explain: 'EMGT (Sweden) included many PXF patients. PXG has higher and more variable IOP, worse response to medicines and faster progression. That justifies a lower target, closer review and early ophthalmology involvement.',
                recall: 'A 2019 candidate quoted “NTG 0.3 dB/yr vs PXF 3 dB/yr” and impressed the examiner. That is correct (EMGT untreated: NTG ≈ −0.36, PXF ≈ −3.13 dB/year).'
            },
            {
                phase: '5. Results',
                type: 'reveal',
                text: 'IOP R 17, L 26 mmHg (CCT 545/548 µm). Left disc has an inferior notch, with a matching, repeatable superior arcuate defect on 24-2. Open angles. <strong>She has mild asthma</strong> (inhaler occasionally). No uveitis history.'
            },
            {
                phase: '6. Drop choice',
                type: 'mcq',
                question: 'You decide to start treatment in the left eye. Which first-line drop?',
                options: [
                    'Timolol 0.5% mane only',
                    'Betaxolol 0.25% twice daily',
                    'Latanoprost 0.005% nocte',
                    'Brimonidine 0.2% twice daily'
                ],
                answer: 2,
                critical: true,
                explain: 'A PGA is first-line (best IOP lowering, once daily, no respiratory risk), provided there are no contraindications such as active or past uveitis, CMO risk, a history of herpetic keratitis, or pregnancy. Asthma — even mild — is a contraindication to non-selective β-blockers.',
                recall: 'A 2025 candidate wasn\'t sure whether mild asthma was an absolute or relative contraindication to timolol. Australian product information lists bronchial asthma <em>or a history of asthma</em> as a contraindication, so it is absolute for timolol.'
            },
            {
                phase: '7. β1-selective',
                type: 'mcq',
                question: 'If a colleague switched a patient from timolol to betaxolol, why might they have done it?',
                options: [
                    'Betaxolol is non-selective, so it lowers IOP more than timolol. It is preferred in asthma because it relaxes bronchial smooth muscle.',
                    'Betaxolol is β1-selective, so it causes less bronchospasm. It still needs caution in airway disease and lowers IOP less.',
                    'Betaxolol is β2-selective, so it causes less bradycardia. It is safe in heart block and lowers IOP about as much as timolol.',
                    'Betaxolol is an α2-agonist, so it causes no bronchospasm. It is used when timolol causes allergy and lowers IOP more.'
                ],
                answer: 1,
                explain: 'Cardioselectivity is relative, not absolute, so betaxolol is a <em>precaution</em> in asthma and COPD, not a free pass. Betaxolol may also have some calcium-channel (vascular) effects. Check current availability in Australia.'
            },
            {
                phase: '8. Referral & review',
                type: 'mcq',
                question: 'What is your plan after starting latanoprost?',
                options: [
                    'Manage in collaborative care without referral (PXG suits optometric care on the RANZCO pathway; OBA requires referral only if IOP isn’t controlled by 4 months). Review IOP in ~4 weeks; add timolol early, since SLT is ineffective in pseudoexfoliation.',
                    'Treat and refer to ophthalmology (secondary glaucoma isn’t routine collaborative care on the RANZCO pathway; OBA requires referral within 4 months of starting treatment). Review IOP in ~4 weeks; consider SLT; note cataract-surgery risks.',
                    'Refer to ophthalmology within 24 hours and stop the latanoprost (secondary glaucomas must not be treated by optometrists under the OBA guideline). Review IOP in ~4 weeks, once the ophthalmologist has seen her.',
                    'Treat and refer to ophthalmology within 12 months (OBA requires referral within a year of starting glaucoma treatment). Review IOP in ~6 months, as latanoprost takes 3–6 months to reach its full effect.'
                ],
                answer: 1,
                explain: 'PXG progresses quickly. You can start treatment, then refer. Ophthalmology may add SLT (often a good initial response in PXF, though it can wane), lens extraction (zonular weakness — capsular tension ring) or surgery. Latanoprost starts working within hours and reaches a stable full effect over a few weeks, so review at ~4 weeks. Medicare limits how often computerised perimetry can be claimed (check the current MBS items); if PXG needs more frequent fields, discuss the fee with the patient.',
                recall: '2025 recalls asked: “What would the ophthalmologist do differently?” (SLT, lens extraction, surgery, systemic or second-line drugs) and “What are the legal requirements when referring glaucoma?” — in the current OBA scheduled medicines guideline, check the 4-month referral rule and collaborative-care plan.'
            },
            {
                phase: '9. Review schedule',
                type: 'mcq',
                question: 'If you found PXF <strong>without</strong> glaucoma (normal IOP, disc and field), how would you monitor?',
                options: [
                    'Every 2–3 years: IOP and disc only — PXF without glaucoma converts slowly, so fields add little.',
                    'Every 6–12 months: IOP, disc/OCT and fields — PXF eyes can convert to glaucoma and IOP can spike.',
                    'Discharge to routine 2-yearly care — PXF only matters once IOP is raised, so check again when symptomatic.',
                    'Every 6–12 months: IOP only — discs and fields can wait until the IOP rises above 30 mmHg.'
                ],
                answer: 1,
                explain: 'PXF carries a substantial conversion risk to PXG and IOP can rise quickly, so monitor closely (around 6-monthly) even without glaucoma. Warn about cataract-surgery risk, and that the fellow eye is often affected later.'
            }
        ]
    },
    {
        id: 'pds',
        category: 'glaucoma',
        title: 'Pigment Dispersion & Pigmentary Glaucoma',
        theme: 'PDS / PG',
        years: ['2019', '2025', 'Mock 2025'],
        patient: '30-year-old Caucasian man, −5.00 D myope, runs marathons.',
        stem: 'Routine eye exam. IOP 26 mmHg in both eyes. He occasionally sees haloes and blurred vision after long runs.',
        exhibit: 'Gonioscopy photo: wide-open angle with a dense, even, dark band of pigment over the trabecular meshwork all the way around.',
        steps: [
            {
                phase: '1. Diagnosis & signs',
                type: 'viva',
                question: 'What is the likely diagnosis, and what else would you expect to see?',
                points: [
                    'Pigment dispersion syndrome (PDS) — pigmentary glaucoma (PG) if there is optic neuropathy',
                    'Krukenberg spindle (vertical endothelial pigment)',
                    'Mid-peripheral, radial, slit-like iris TIDs',
                    'Dense homogeneous 360° TM pigment ± Sampaolesi line',
                    'Posterior iris bowing / concave iris (reverse pupillary block) and a deep AC',
                    'Pigment on the posterior lens capsule or zonules (Zentmayer ring / Scheie stripe)',
                    'Exercise- or dilation-induced pigment showers with IOP spikes (haloes, blur)'
                ],
                explain: 'Mechanism: a concave peripheral iris rubs against the zonules and releases pigment, which clogs the TM. Less common findings the panel may want: pigment on the posterior capsule or zonules, iris heterochromia (if asymmetric) and lattice degeneration / retinal detachment risk — so dilate.',
                recall: 'A 2025 candidate was asked for a “rarer finding of PDS” and couldn\'t give one. Good answers: Zentmayer ring (pigment on the zonule insertion at the posterior lens), pigment on the lens surface, heterochromia, or the pigment-reversal sign in burnt-out disease.'
            },
            {
                phase: '2. Conversion risk',
                type: 'mcq',
                question: 'Roughly what is the risk of PDS converting to pigmentary glaucoma, and what are the risk factors?',
                options: [
                    'About 50% at 5 years and 90% at 15 years (Siddiqui 2003). Risk factors: female sex, hyperopia, absence of a Krukenberg spindle, lower baseline IOP.',
                    'About 10% at 5 years and 15% at 15 years (Siddiqui 2003). Risk factors: male sex, high myopia, Krukenberg spindle, higher baseline IOP.',
                    'About 1% at 5 years and 2% at 15 years (Siddiqui 2003). Risk factors: older age, PXF in the fellow eye, Sampaolesi line, thin central cornea.',
                    'About 10% at 5 years and 15% at 15 years (EMGT). Risk factors: female sex, low myopia, peripupillary TIDs, lower baseline IOP.'
                ],
                answer: 1,
                explain: 'Older hospital-based series quoted 35–50% lifetime conversion; population data (Olmsted County) gave ~10% at 5 years and ~15% at 15 years. PDS is roughly equal by sex, but PG is about 3:1 male.',
                recall: 'A 2019 recall quoted “30% risk of PDS → PDG”. That is within older estimates but higher than population data, so quote a range and its source.'
            },
            {
                phase: '3. Back of the eye',
                type: 'reveal',
                text: 'Fundus/OCT: LEFT eye superotemporal RNFL thinning and neuroretinal rim loss. Right disc and OCT normal. CCT 550 µm OU.'
            },
            {
                phase: '4. Expected field',
                type: 'mcq',
                question: 'What visual field defect do you expect in the left eye?',
                options: [
                    'Superior nasal step / superior arcuate defect',
                    'Inferior nasal step / inferior arcuate',
                    'Right homonymous hemianopia (incongruous)',
                    'Central (fixation-involving) scotoma'
                ],
                answer: 1,
                explain: 'Superotemporal RNFL loss gives an <strong>inferior</strong> field defect (the field is inverted). An inferior nasal step respecting the horizontal midline is the classic early glaucomatous defect.'
            },
            {
                phase: '5. Grade it',
                type: 'mcq',
                question: 'The left 24-2 shows a reliable inferior nasal step, MD −3.1 dB, no points within the central 5° below 15 dB. Grade it (Hodapp–Parrish–Anderson).',
                options: ['Early', 'Moderate', 'Advanced', 'Cannot grade glaucoma fields'],
                answer: 0,
                explain: 'Hodapp: <strong>early</strong> = MD better than −6 dB with limited depressed points and no central 5° point below 15 dB; <strong>moderate</strong> = MD −6 to −12 dB (or a central point below 15 dB); <strong>advanced</strong> = MD worse than −12 dB or any central point at 0 dB / both hemifields affected within 5°. Always confirm repeatability.'
            },
            {
                phase: '6. Treatment',
                type: 'viva',
                question: 'How would you manage him? Cover drops, laser and the right eye.',
                points: [
                    'PGA first-line (e.g. latanoprost 0.005% nocte) — increases uveoscleral outflow, bypassing the pigment-clogged TM',
                    'Avoid β-blockers in a young athlete: blunted exercise heart rate, bradycardia, fatigue, bronchospasm',
                    'SLT works in PG but use lower energy (pigmented TM absorbs more → IOP spike); check IOP after laser; effect may wane',
                    'Right eye (OHT 26 mmHg): reasonable to treat both eyes given the fellow eye\'s PG, OHTS risk and symmetry of PGA cosmetic effects — or monitor closely',
                    'Dilated fundus exam for lattice degeneration / retinal breaks',
                    'Pilocarpine flattens the iris but causes myopic shift and retinal detachment risk in myopes — rarely used',
                    'LPI isn\'t routinely recommended (little evidence of long-term benefit)'
                ],
                explain: 'If he refuses PGA cosmetic side effects: SLT (LiGHT supports primary SLT) or a CAI / brimonidine. Explain any trade-off. Initiate treatment and refer — PG is a secondary glaucoma. Surgery options if needed: trabeculectomy with antimetabolite (young myopes risk hypotony maculopathy) or tube; MIGS case-by-case.',
                recall: '2019 tip: say you <em>wouldn\'t</em> give a β-blocker to someone with an active lifestyle. A 2025 candidate couldn\'t explain SLT: the laser selectively targets <strong>pigmented TM cells</strong>, triggering cytokine release, macrophage recruitment and TM remodelling to improve outflow — with no thermal scarring.'
            },
            {
                phase: '7. Natural history',
                type: 'mcq',
                question: 'What happens to PDS with age (“burnt-out” phase)?',
                options: [
                    'Pigment release increases as the lens enlarges and the pupil shrinks, so TM pigment darkens inferiorly, the Krukenberg spindle grows and IOP keeps rising — PDS never burns out and needs escalating treatment with age.',
                    'Pigment release falls as the lens grows and accommodation and pupil size decline. TM pigment can fade (pigment-reversal sign: more superiorly than inferiorly), TIDs and the spindle may lessen, and IOP can normalise.',
                    'The iris becomes convex as the lens grows, so PDS converts to angle closure. TM pigment fades evenly, TIDs vanish and IOP falls to normal in nearly every patient within a year of age 40.',
                    'Pigment release falls with age, but TM pigment stays densest inferiorly (no reversal sign) and the spindle always persists, so burnt-out PDS is easily told from POAG and IOP never normalises.'
                ],
                answer: 1,
                explain: 'Burnt-out PDS can be mistaken for POAG or NTG. Look for residual pigment and reversal patterns. Exercise-induced symptoms fade as pigment showering stops.'
            }
        ]
    },
    {
        id: 'oht-disc-haem',
        category: 'glaucoma',
        title: 'Disc Haemorrhage & High-Risk OHT',
        theme: 'OHT',
        years: ['2018', '2019'],
        patient: '60-year-old Caucasian woman.',
        stem: 'Routine review. No symptoms.',
        exhibit: 'Colour and red-free photos of both discs (no fovea in shot). Vertical C/D ~0.5 OU, rims intact. A small flame-shaped haemorrhage crosses the inferotemporal rim of the left disc.',
        steps: [
            {
                phase: '1. Describe the discs',
                type: 'viva',
                question: 'Describe the discs systematically.',
                points: [
                    'Disc size is hard to judge without a reference (fovea / DDLS / lens calibration) — say so',
                    'Vertical C/D ratio and symmetry',
                    'Neuroretinal rim: ISNT rule, notching, thinning',
                    'Splinter (Drance) haemorrhage at the inferotemporal rim, left eye',
                    'Peripapillary atrophy (beta zone)',
                    'RNFL — red-free photo for wedge defects',
                    'Vessels: bayoneting, baring of circumlinear vessels'
                ],
                explain: 'A disc haemorrhage is a strong risk factor for developing and progressing glaucoma (OHTS, EMGT) and is especially common in NTG.',
                recall: 'A 2018 candidate commented on disc size from a photo without the fovea. The examiner wanted “I can\'t judge size without a reference”.'
            },
            {
                phase: '2. Haemorrhage differentials',
                type: 'multi',
                question: 'Which are plausible causes of a disc haemorrhage?',
                options: ['Glaucoma (incl. NTG)', 'Posterior vitreous detachment', 'Diabetes / hypertension', 'Retinal vein occlusion', 'Anticoagulants / blood dyscrasias', 'Physiological large cup'],
                answers: [0, 1, 2, 3, 4],
                explain: 'Physiological cupping doesn\'t cause haemorrhages. Rule out vascular causes and ask about anticoagulants. A PVD can cause a disc-margin bleed, but usually with symptoms (flashes/floaters).'
            },
            {
                phase: '3. Results',
                type: 'reveal',
                text: 'IOP 26 mmHg OU (Goldmann, phased: 24–27). CCT 585 µm OU. Mother has glaucoma. 24-2 full and reliable OU. Gonioscopy: open, no secondary signs. OCT RNFL within normal limits.'
            },
            {
                phase: '4. CCT',
                type: 'mcq',
                question: 'How do you interpret a CCT of 585 µm?',
                options: [
                    'Thinner than average (mean ~580–600 µm) — Goldmann underestimates IOP, so her true IOP is higher than measured, and thin CCT raised conversion risk in OHTS. It adds to the disc haemorrhage and family history.',
                    'Thicker than average (mean ~540–550 µm) — Goldmann may overestimate IOP, and thicker CCT is linked with lower conversion risk in OHTS. It doesn\'t cancel out the disc haemorrhage or family history.',
                    'Average (mean ~580 µm) — Goldmann is accurate at this thickness, and CCT only matters below 500 µm in OHTS. It has no bearing on the disc haemorrhage or family history.',
                    'Thicker than average (mean ~540–550 µm) — Goldmann underestimates IOP in thick corneas, and thicker CCT raised conversion risk in OHTS. It adds to the disc haemorrhage and family history.'
                ],
                answer: 1,
                explain: 'In OHTS, thinner CCT (below ~555 µm) was an independent risk factor for conversion, both because Goldmann under-reads in thin corneas and possibly because of lamina biomechanics. Don\'t use simple correction formulas as gospel; use CCT as part of a risk calculator.',
                recall: 'A 2018 candidate gave a “normal range 510–580, mean 550” and the examiner queried it. Safer: population mean is about 540–550 µm with an SD of about 30–35 µm (OHTS mean 573 µm). 585 µm is above average, not “thicker end of normal”.'
            },
            {
                phase: '5. Diagnosis & risk',
                type: 'mcq',
                question: 'What is your working diagnosis and plan?',
                options: [
                    'Low-risk OHT: the thick cornea means her true IOP is about 21, and haemorrhages are common in normal eyes. Repeat IOP in 12 months; treatment isn’t warranted unless a field defect appears.',
                    'High-risk OHT (disc haemorrhage, family history, IOP 26) or pre-perimetric glaucoma: repeat OCT in ~3 months, exclude other causes of the haemorrhage, and seriously consider treatment.',
                    'Definite POAG (a disc haemorrhage is diagnostic of glaucoma even with normal fields). Start treatment in both eyes today and refer urgently within 24 hours under the RANZCO pathway.',
                    'Normal-tension glaucoma (a disc haemorrhage with an IOP that is normal after CCT correction). Start brimonidine for neuroprotection and order an MRI to exclude compression first.'
                ],
                answer: 1,
                explain: 'Disc haemorrhages usually reabsorb within 2–3 months and often come before detectable RNFL or field loss. With FHx and IOP in the mid-20s her risk is well above average. Repeat structural testing soon and use an OHTS/EGPS risk estimate.'
            },
            {
                phase: '6. OHTS',
                type: 'mcq',
                question: 'If you treat, what does OHTS tell you about benefit and target?',
                options: [
                    'Treatment (aiming for ≥30% reduction and IOP ≤18) cut 5-year conversion from 9.5% to 1.4% — about a seventh.',
                    'Treatment (aiming for ≥20% reduction and IOP ≤24) cut 5-year conversion from 9.5% to 4.4% — roughly half.',
                    'Treatment (aiming for ≥20% reduction and IOP ≤24) cut 5-year conversion from 4.4% to 2.2% — exactly half.',
                    'Treatment (aiming for ≥20% reduction and IOP ≤21) made no significant difference to 5-year conversion.'
                ],
                answer: 1,
                explain: 'OHTS targets: ≥20% reduction from baseline and ≤24 mmHg. For established POAG, EMGT achieved ~25%; CNTGS used 30% for NTG. Be ready for “where did you get that number from?”',
                recall: 'A 2019 candidate quoted “30% from NHMRC” and was challenged. 30% comes from <strong>CNTGS</strong> (NTG). OHT targets come from OHTS (20%).'
            },
            {
                phase: '7. Pregnancy',
                type: 'mcq',
                question: 'She mentions her 32-year-old daughter (also OHT) is planning a pregnancy. What is your approach for the daughter?',
                options: [
                    'Weigh risk vs benefit: low-risk OHT can often be watched, but if drops are needed latanoprost is preferred (B1; very low absorption at 0.005%, so safe until delivery). Avoid brimonidine and timolol throughout pregnancy (both D).',
                    'Weigh risk vs benefit: low-risk OHT can often be watched through pregnancy, or treated with SLT. If drops are needed, brimonidine (B3; stop before delivery and breastfeeding) or timolol (C; lowest dose, punctal occlusion). Avoid PGAs.',
                    'Treat all OHT through pregnancy to avoid conversion: oral acetazolamide (category A, the safest IOP drug in pregnancy), switching to timolol after delivery. Avoid SLT in pregnancy because laser energy can reach the fetus.',
                    'Weigh risk vs benefit: low-risk OHT can often be watched, or treated with SLT. If drops are needed, brimonidine (category A; safe through delivery and breastfeeding) or latanoprost (B3; continue until the third trimester). Avoid timolol.'
                ],
                answer: 1,
                explain: 'Use Australian TGA categories: latanoprost/bimatoprost/travoprost B3, timolol C, brimonidine B3, dorzolamide/brinzolamide B3, acetazolamide B3. Punctal occlusion reduces systemic absorption. Involve the obstetrician and ophthalmologist.',
                recall: 'A 2018 candidate said PGAs are “only bad in the last trimester”. The examiner disagreed: avoid them throughout pregnancy where possible (prostaglandins are uterotonic; category B3). Brimonidine is <strong>B3</strong> in Australia.'
            },
            {
                phase: '8. β-blocker timing',
                type: 'mcq',
                question: 'Why is once-daily timolol given in the <strong>morning</strong>?',
                options: [
                    'Aqueous production is highest during the day and β-blockers have little effect on the low nocturnal production; night dosing adds risk of nocturnal systemic hypotension (reduced optic nerve perfusion).',
                    'Aqueous production is highest at night and β-blockers work best on it then, but morning dosing is chosen because timolol causes vivid dreams and insomnia; the nocturnal hypotension risk is the same either way.',
                    'Timolol is absorbed better through the morning tear film, so a morning dose doubles its effect; evening doses are washed out by nocturnal tear production, giving almost no IOP lowering at night.',
                    'There is no physiological reason — timolol works equally at any time, so morning dosing is just a convention for adherence; evening doses carry no extra systemic risk because blood pressure is higher at night.'
                ],
                answer: 0,
                explain: 'This is why PGAs (which work around the clock) are better for 24-hour control and why evening β-blockers are avoided, especially in NTG.',
                recall: 'A 2018 candidate mentioned nocturnal hypotension and then took it back. It was actually a valid point.'
            }
        ]
    },
    {
        id: 'oht-slt',
        category: 'glaucoma',
        title: 'OHT: Drops vs SLT',
        theme: 'OHT & SLT',
        years: ['2025'],
        patient: '45-year-old man, active, works in IT.',
        stem: 'Referred for raised IOP: 29 mmHg OU on repeat (phased 27–30). Normal-looking discs on a blurry Optos.',
        steps: [
            {
                phase: '1. Work-up',
                type: 'multi',
                question: 'Which are part of your work-up before calling this OHT?',
                options: ['Pachymetry', 'Gonioscopy', 'Slit lamp for secondary causes (PXF, PDS, uveitis, angle recession, steroid use)', 'OCT RNFL/GCL', '24-2 visual field', 'MRI brain'],
                answers: [0, 1, 2, 3, 4],
                explain: 'OHT = raised IOP with open angles, no secondary cause, and normal disc, RNFL and fields. Imaging is reserved for atypical or neurological features.'
            },
            {
                phase: '2. Results',
                type: 'reveal',
                text: 'CCT 520 µm OU (thin). Open angles, no secondary signs. OCT normal, 24-2 full. Father had glaucoma. No asthma or heart disease.'
            },
            {
                phase: '3. OHTS risk factors',
                type: 'multi',
                question: 'Which are OHTS baseline risk factors for converting to POAG?',
                options: ['Older age', 'Higher IOP', 'Thinner CCT', 'Larger vertical C/D', 'Higher PSD', 'Myopia', 'Male sex'],
                answers: [0, 1, 2, 3, 4],
                explain: 'The OHTS/EGPS risk model uses age, IOP, CCT, VCDR and PSD. Disc haemorrhage and family history also matter clinically. Each 1 mmHg higher IOP raised risk by roughly 10% in OHTS.'
            },
            {
                phase: '4. SLT',
                type: 'mcq',
                question: 'He doesn\'t want daily drops. What does the evidence say about primary SLT?',
                options: [
                    'LiGHT: primary SLT kept ~74% of patients drop-free at 3 years, but quality of life was worse and more patients needed surgery than in the drops-first group.',
                    'LiGHT: primary SLT kept ~74% of patients drop-free at 3 years, with comparable quality of life, fewer surgeries and lower cost than drops-first.',
                    'LiGHT: primary SLT kept ~24% of patients drop-free at 3 years, so it is mainly a way to delay drops by a few months rather than a first-line option.',
                    'EAGLE: primary SLT kept ~74% of patients drop-free at 3 years in angle closure, so it shouldn’t be used in open-angle OHT like his.'
                ],
                answer: 1,
                explain: 'SLT is a reasonable first-line option and discussing it was expected. Effect can wane over years, and repeat SLT is possible. The ophthalmologist performs it (involve the GP as needed). Check IOP about 1 hour after laser for a spike; assess the full effect at about 6–8 weeks.'
            },
            {
                phase: '5. Residual IOP',
                type: 'mcq',
                question: 'After SLT his IOP is 24 mmHg. He\'ll now accept a drop but hates the idea of red eyes and eyelash changes. Best next option?',
                options: [
                    'Timolol 0.5% BD is ideal for a young active man (no cosmetic effects and well tolerated in fit people); check his BP only. A CAI or brimonidine is weaker, so keep them as third-line options.',
                    'Timolol is possible after checking contraindications (exercise tolerance, asthma, heart rate — involve the GP), but in a young active man a topical CAI or brimonidine may suit better.',
                    'Pilocarpine 2% QID avoids red eyes and lash changes and suits young patients who accommodate well; check for myopia. Timolol and brimonidine are avoided in men under 50.',
                    'Oral acetazolamide 250 mg BD via the GP avoids all eye-drop cosmetic effects and is well tolerated long-term in young adults; check for sulfonamide allergy and kidney stones first.'
                ],
                answer: 1,
                explain: 'β-blockers blunt exercise heart rate and can cause fatigue and bronchospasm. If you use one, confirm with the GP and ophthalmologist. Brimonidine: watch for allergy and fatigue. Topical CAI: stinging, bitter taste.'
            },
            {
                phase: '6. Beyond glaucoma',
                type: 'viva',
                question: '“Apart from glaucoma, what can high IOP do to the eye?”',
                points: [
                    'Retinal vein occlusion (raised IOP / glaucoma is a risk factor for CRVO)',
                    'Corneal epithelial oedema → haloes and blur (with very high or rapidly rising IOP)',
                    'Ocular pain / headache when IOP is very high',
                    'Optic nerve ischaemia / arterial perfusion compromise at very high IOP'
                ],
                explain: 'Retinal vein occlusion is the answer the examiners were after. Very high IOP also overwhelms the endothelial pump (corneal oedema).',
                recall: 'Two 2025 candidates “fumbled” this exact question. RVO is the key point.'
            }
        ]
    },
    {
        id: 'poag-central',
        category: 'glaucoma',
        title: 'POAG with a Central Defect',
        theme: 'POAG',
        years: ['2019', '2025'],
        patient: '58-year-old man.',
        stem: 'IOP R 22, L 24 mmHg. OCT: right RNFL normal; left superior and inferior wedge defects matching GCIPL loss.',
        exhibit: 'Left 24-2: reliable (FL 1/14, FP 2%, FN 3%). Superior nasal step plus a paracentral defect a few degrees above fixation. MD −6.2 dB, PSD 7.8 dB, GHT outside normal limits.',
        steps: [
            {
                phase: '1. Central involvement',
                type: 'mcq',
                question: 'There is a defect close to fixation. Which extra test?',
                options: [
                    '30-2 SITA Fast',
                    '10-2 (central 10°)',
                    'Goldmann kinetic perimetry',
                    'Amsler grid only'
                ],
                answer: 1,
                explain: 'The 24-2 grid (6° spacing) under-samples the macula. A 10-2 maps paracentral loss, which matters for prognosis and target IOP and is common in NTG and myopic glaucoma.'
            },
            {
                phase: '2. Grade',
                type: 'mcq',
                question: 'How would you grade this field?',
                options: [
                    'Early: MD is better than −6 dB, so Hodapp grades it early regardless of where the defect sits. Confirm repeatability; it won’t change anything.',
                    'At least moderate: MD is borderline, and a paracentral defect upgrades the stage (Hodapp). Confirm repeatability and explain why.',
                    'Advanced: any defect within 10° of fixation is advanced on Hodapp, whatever the MD. Refer urgently for surgery rather than starting drops.',
                    'Ungradable: Hodapp can’t be used when there is a central defect, so describe it and stage it later on a 30-2 once the defect is confirmed.'
                ],
                answer: 1,
                explain: 'Explain your reasoning aloud — the management (treat, close review, refer) doesn\'t change, but the examiner wants to hear that central involvement raises the threat to vision.'
            },
            {
                phase: '3. Management',
                type: 'mcq',
                question: 'Your management?',
                options: [
                    'Start timolol 0.5% BD as first-line if no contraindications (asthma, bradycardia, heart block); aim for ~10% reduction; review in ~6 months; refer to ophthalmology within 12 months (OBA).',
                    'Start a PGA (e.g. latanoprost 0.005% nocte) if no contraindications (pregnancy, uveitis, CMO risk, herpetic keratitis); aim for ~25–30% reduction; review in ~4 weeks; refer within 4 months (OBA).',
                    'Start a PGA (e.g. latanoprost 0.005% mane) if no contraindications (pregnancy, uveitis, CMO); aim for ≥50% reduction; review in ~1 week; refer within 24 hours (OBA) because the defect is central.',
                    'Don’t start treatment: optometrists may only monitor POAG. Refer within 4 months (OBA) and repeat the fields in 3 months so the ophthalmologist has a baseline before choosing a drop.'
                ],
                answer: 1,
                explain: 'Optometrists can diagnose and start treatment for POAG. Refer within 4 months under the OBA guideline (check the current version) and follow the RANZCO collaborative-care pathway.'
            },
            {
                phase: '4. The right eye',
                type: 'mcq',
                question: 'Would you treat the right eye (IOP 22, normal structure and function)?',
                options: [
                    'Yes: OHTS showed every eye with IOP over 21 converts within 5 years, so treat the right eye now with the same drop. Discharging it from monitoring is then reasonable once IOP is controlled.',
                    'Not necessarily: IOP 22 with normal structure and function is low risk on OHTS. Monitor closely (asymmetric POAG often becomes bilateral); treating both for symmetry is also defensible.',
                    'No, and discharge the right eye: 22 is within the normal range, normal structure and function rule out glaucoma, and asymmetric POAG almost never becomes bilateral.',
                    'Yes, but with timolol: the right eye needs a different class from the left so you can tell which drop is working; PGA cosmetic asymmetry doesn’t matter once both eyes are treated.'
                ],
                answer: 1,
                explain: 'Both answers are defensible if justified. The examiner is checking you know OHTS risk stratification and PGA cosmetic asymmetry (lashes, iris and periorbital changes).'
            },
            {
                phase: '5. Pathophysiology',
                type: 'viva',
                question: 'Explain the mechanism of POAG damage.',
                points: [
                    'Mechanical: IOP-related stress and strain on the lamina cribrosa → axonal compression',
                    'Blocked axoplasmic flow (e.g. neurotrophin/BDNF deprivation) → RGC apoptosis',
                    'Vascular: reduced ocular perfusion pressure, faulty autoregulation, ischaemia',
                    'Glial and extracellular-matrix remodelling of the lamina',
                    'Increased outflow resistance at the juxtacanalicular TM raises IOP'
                ],
                explain: 'The end result is slow, progressive loss of retinal ganglion cells with characteristic cupping and arcuate field loss.'
            },
            {
                phase: '6. Progression despite target',
                type: 'mcq',
                question: 'A different patient — a 45-year-old woman — is on latanoprost with IOP 15 (from 25), but her field has progressed. Next steps?',
                options: [
                    'Reassure her: IOP 15 is within the target for every POAG patient, so the field change must be a learning effect. Repeat the field in 12 months and continue latanoprost unchanged; escalation isn’t needed at her age or IOP.',
                    'Check adherence and technique, look for fluctuation (phasing), confirm progression on repeat fields/OCT, then lower the target and escalate (second agent, SLT, surgery). Her long life expectancy calls for tight control.',
                    'Stop the latanoprost and switch to timolol: progression on a PGA means PGA resistance. Review in 12 months; younger patients progress slowly, so SLT or surgery is reserved for patients over 65.',
                    'Refer for an MRI only: progression at IOP 15 is always neurological. Keep the current drop and target, and don’t repeat the fields until the MRI is back, as repeat testing only adds learning effects.'
                ],
                answer: 1,
                explain: 'Younger patients have more years of life to lose vision in, so set lower targets and escalate earlier. Combination drops (e.g. latanoprost/timolol — Xalacom; brinzolamide/brimonidine — Simbrinza) reduce drop burden.',
                recall: 'From 2019: the examiner hinted at age (“something about this patient\'s demographic”). The point is that a young patient needs more intervention because of their long life expectancy.'
            }
        ]
    },
    {
        id: 'ntg',
        category: 'glaucoma',
        title: 'Normal-Tension Glaucoma',
        theme: 'NTG',
        years: ['2019', '2025'],
        patient: '55-year-old Japanese-Australian woman. Migraines and cold hands.',
        stem: 'IOP 15 mmHg OU. Left inferior RNFL thinning on OCT; the right is normal.',
        exhibit: 'Left 24-2: reliable superior paracentral defect, MD −4.8 dB. Right full.',
        steps: [
            {
                phase: '1. Work-up',
                type: 'multi',
                question: 'Which belong in your NTG work-up?',
                options: [
                    'IOP phasing including early morning (± water-drinking test)',
                    'Pachymetry',
                    'Gonioscopy (exclude intermittent closure, burnt-out PDS, angle recession)',
                    'History: migraine, Raynaud\'s, sleep apnoea, nocturnal hypotension (BP meds at night), past blood loss or shock',
                    '10-2 field',
                    'Colour vision (D15) and red-cap desaturation',
                    'Routine MRI for every NTG patient'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Imaging is for atypical features (see the next step), not every case. A water-drinking test shows outflow reserve (IOP peak). Ask about antihypertensives taken at night.'
            },
            {
                phase: '2. Colour vision',
                type: 'mcq',
                question: 'Why use a D15 rather than Ishihara here?',
                options: [
                    'Ishihara picks up acquired defects including blue–yellow (tritan) and grades severity; the D15 screens only for congenital red–green defects — useful for spotting inherited colour deficiency in glaucoma.',
                    'Ishihara screens for congenital red–green defects; the D15 picks up acquired defects including blue–yellow (tritan) and grades severity — useful for spotting a non-glaucomatous optic neuropathy.',
                    'The D15 tests the central 15° of field, so it maps paracentral glaucomatous loss; Ishihara only tests colour — useful because NTG defects are paracentral and the D15 is quicker than a 10-2.',
                    'Ishihara is more sensitive to all colour defects, but the D15 is required by the OBA for glaucoma work-ups; either gives the same result for spotting a non-glaucomatous optic neuropathy.'
                ],
                answer: 1,
                explain: 'Colour loss out of proportion to the disc or field suggests compressive, toxic or inflammatory optic neuropathy rather than glaucoma.'
            },
            {
                phase: '3. Red flags',
                type: 'multi',
                question: 'Which features would prompt neuro-imaging (MRI via GP or ophthalmology)?',
                options: [
                    'Age under 50',
                    'Reduced VA or colour vision out of proportion to cupping',
                    'Pallor of the rim greater than the cupping',
                    'Field defect respecting the VERTICAL midline',
                    'RAPD out of proportion to the field loss',
                    'Rapid progression or marked asymmetry',
                    'Inferior notch matching a superior arcuate defect'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'A notch matching the arcuate defect is typical glaucoma. Vertical-meridian respect, pallor and loss of acuity or colour point to a compressive or other optic neuropathy.',
                recall: 'A 2025 examiner asked “In unilateral glaucoma what would change in your work-up?” — they wanted ruling out neurological causes and knowing what would prompt an MRI.'
            },
            {
                phase: '4. Target',
                type: 'mcq',
                question: 'Untreated phasing averages 14 mmHg, with a water-drinking peak of 18 mmHg. What is your target?',
                options: [
                    'About 30% below the water-drinking peak (CNTGS): 18 → about 12.5 mmHg, since the peak does the damage.',
                    'About 30% below the untreated mean (CNTGS): 14 → about 10 mmHg, while also blunting peaks.',
                    'About 20% below the untreated mean baseline (OHTS): 14 → about 11 mmHg, since OHTS sets NTG targets too.',
                    'Below 21 mmHg (the upper limit of normal), which she already meets, so no treatment target is needed.'
                ],
                answer: 1,
                explain: 'CNTGS: a 30% reduction from baseline cut progression from 35% to 12%. Base the target on the mean untreated baseline and recheck that peaks are controlled.',
                recall: 'A 2025 candidate asked whether to take 30% from 18 (the peak). The CNTGS target is 30% from <strong>baseline</strong> (the mean untreated IOP).'
            },
            {
                phase: '5. Studies',
                type: 'match',
                question: 'Match the trial to its key finding.',
                pairs: [
                    { label: 'CNTGS', answer: '30% IOP reduction slowed NTG progression (12% vs 35%)' },
                    { label: 'LoGTS', answer: 'Fewer NTG patients progressed on brimonidine than timolol' },
                    { label: 'EMGT', answer: 'Treatment halved progression; ~10% less risk per 1 mmHg' },
                    { label: 'UKGTS', answer: 'Latanoprost preserved fields vs placebo in OAG' }
                ],
                distractors: ['LPI reduced angle-closure risk in PACS'],
                explain: 'LoGTS is often cited for possible neuroprotection with brimonidine, but dropout from allergy was high and the evidence is debated. CNTGS also found many untreated NTG eyes didn\'t progress — risk-stratify.'
            },
            {
                phase: '6. Drug choice',
                type: 'mcq',
                question: 'First-line drug choice?',
                options: [
                    'Timolol 0.5% at night (provided there are no contraindications) — night dosing covers the nocturnal IOP peak in NTG. Avoid PGAs (they reduce optic nerve perfusion at night). Brimonidine is contraindicated in NTG (LoGTS).',
                    'A PGA at night (provided there are no contraindications) — 24-hour IOP lowering. Avoid evening β-blockers (nocturnal hypotension reduces optic nerve perfusion). Brimonidine is a reasonable alternative (LoGTS).',
                    'A PGA in the morning (provided there are no contraindications) — morning dosing covers the day-time peak. Avoid brimonidine (it lowers blood pressure). Timolol at night is the second choice (LoGTS).',
                    'Oral acetazolamide via the GP (provided there are no contraindications) — systemic treatment lowers IOP around the clock. Topical drops are too weak in NTG. Brimonidine is only used after surgery (LoGTS).'
                ],
                answer: 1,
                explain: 'In NTG, also consider BP review with the GP (avoid over-treating hypertension at night). SLT lowers IOP in NTG (~15–20%), but the absolute drop is smaller because the starting IOP is low.'
            },
            {
                phase: '7. Adherence',
                type: 'mcq',
                question: '“Sometimes I miss a day, so other days I put in two drops.” What do you tell her?',
                options: [
                    'That’s fine: two drops the next day replace the missed dose, so the weekly total stays the same. Latanoprost has a long half-life, so doubling up is safe and keeps lowering steady; space the two drops 5 minutes apart.',
                    'One drop once at night, same time each day. Extra latanoprost doesn’t lower IOP further (it can even reduce efficacy) and adds side effects; if you miss a dose, just carry on the next night. Use reminders and punctal pressure.',
                    'Use it twice every day from now on so a missed dose matters less: more frequent latanoprost lowers IOP further. If you miss a dose, use three drops the next night, and press on the tear duct for 1–2 minutes after each drop.',
                    'If you keep forgetting, it is safer to stop the drop and rely on reviews: intermittent latanoprost raises IOP more than none at all. If you miss a dose, wait a week before restarting so the eye can reset.'
                ],
                answer: 1,
                explain: 'Teach drop technique and adherence strategies (alarms, linking the drop to a routine, family help). Poor adherence is a major cause of apparent progression.'
            }
        ]
    },
    {
        id: 'angle-recession',
        category: 'glaucoma',
        title: 'Angle Recession Glaucoma',
        theme: 'Angle Recession',
        years: ['2019', '2025'],
        patient: '40-year-old man.',
        stem: 'Dull ache in the right eye. VA 6/6 OU. IOP R 25, L 19 mmHg.',
        exhibit: 'Gonioscopy photo, right eye: an irregularly widened ciliary body band in places, a torn iris process and a pigment clump near Schwalbe\'s line.',
        steps: [
            {
                phase: '1. Gonioscopy',
                type: 'viva',
                question: 'Describe the angle-recession signs and how you confirm them.',
                points: [
                    'Abnormally wide or irregular ciliary body band (tear between longitudinal and circular ciliary muscle)',
                    'Torn or absent iris processes',
                    'Posteriorly displaced iris root; deepened angle in that sector',
                    'Scleral spur appears whiter or more prominent',
                    'Compare with the fellow eye and the other quadrants (key to confirming widening)',
                    'Note the extent in degrees (>180° = higher glaucoma risk)'
                ],
                explain: 'Rule out the other trauma tears: cyclodialysis cleft (ciliary body separated from the scleral spur — usually LOW IOP) and iridodialysis (iris root disinserted).'
            },
            {
                phase: '2. History',
                type: 'reveal',
                text: 'He was hit in the right eye by a cricket ball 8 years ago and was told he had “blood in the front of the eye”. Here is the photo from that day: blood layered in the inferior anterior chamber, occupying just under a third of its height.'
            },
            {
                phase: '3. Hyphaema grade',
                type: 'mcq',
                question: 'Grade that original hyphaema.',
                options: [
                    'Grade I: under 1/3 of the AC',
                    'Grade II: over 50% of the chamber',
                    'Grade III: total (8-ball)',
                    'Microhyphaema (cells only)'
                ],
                answer: 0,
                explain: 'Grade I <1/3; Grade II 1/3–1/2; Grade III >1/2 (subtotal); Grade IV total (“8-ball”). Higher grades carry more risk of raised IOP, rebleed and corneal blood staining.',
                recall: 'A 2025 candidate called Grade II “>50%”. Grade II is <strong>1/3 to 1/2</strong>; more than half is Grade III.'
            },
            {
                phase: '4. Risk',
                type: 'mcq',
                question: 'What is the glaucoma risk after angle recession, and what drives it?',
                options: [
                    'Roughly 60–90% over 10 years — higher with <180° recession. Onset is usually within weeks of the injury. The cause is the recession itself pulling the iris root forward over the meshwork.',
                    'Roughly 6–9% over 10 years — higher with >180° recession. Onset can be delayed by years to decades. The cause is TM scarring and damage rather than the recession itself.',
                    'Roughly 6–9% within the first month — no relation to the extent of recession. Onset after the first year is rare. The cause is blood clogging the meshwork.',
                    'Roughly 1% lifetime — only with >360° recession. Onset is at the time of injury or never. The cause is inflammation from the original hyphaema.'
                ],
                answer: 1,
                explain: 'This is why traumatised eyes need lifelong (at least annual) IOP checks. Fellow eyes may also develop POAG later (a higher predisposition has been reported).'
            },
            {
                phase: '5. Fluctuation',
                type: 'mcq',
                question: 'How would you assess IOP fluctuation clinically?',
                options: [
                    'Water-drinking test (IOP before and after 1 L of water)',
                    'Diurnal IOP phasing (several readings across a day)',
                    'A single Goldmann reading at the time of the injury',
                    'Pachymetry with a CCT-corrected IOP at each visit'
                ],
                answer: 1,
                explain: 'The water-drinking test is a stress test of outflow reserve; diurnal phasing captures real fluctuation. Base your target on the peak and mean.',
                recall: 'A 2025 candidate offered the water-drinking test, but the examiner wanted something “more clinical” — <strong>IOP phasing</strong>.'
            },
            {
                phase: '6. Drug choice',
                type: 'mcq',
                question: 'Which drug class is least effective, and may even raise IOP, in angle recession glaucoma?',
                options: [
                    'Prostaglandin analogues',
                    'β-blockers (timolol)',
                    'Topical CAIs (dorzolamide)',
                    'Pilocarpine (miotics)'
                ],
                answer: 3,
                critical: true,
                explain: 'Pilocarpine improves trabecular outflow by pulling on the scleral spur and TM, but the TM is scarred here. It also <em>reduces</em> uveoscleral outflow, which these eyes rely on, so IOP can rise. PGAs, which boost uveoscleral outflow, and aqueous suppressants work well in <strong>chronic</strong> ARG.',
                recall: 'A 2019 recall noted “don\'t use PGA” in a 55-year-old with fresh trauma and IOP 35, and a 2025 candidate picked timolol first and was asked why not a PGA. Both can be right: in the <strong>acute</strong> post-traumatic phase (hyphaema/iritis), avoid PGAs (pro-inflammatory) and miotics; in <strong>chronic</strong> ARG, a PGA is a good first-line choice.'
            },
            {
                phase: '7. Glaucoma management',
                type: 'viva',
                question: 'His IOP is now 28 with early inferior RNFL loss. Outline management.',
                points: [
                    'Secondary glaucoma — start treatment and refer to ophthalmology (RANZCO: not routine collaborative care)',
                    'PGA first-line (provided there are no contraindications) ± aqueous suppressant',
                    'Avoid pilocarpine',
                    'SLT is often less effective in recessed or scarred angles',
                    'Surgery: trabeculectomy with antimetabolite (higher failure from scarring) or tube',
                    'Monitor the fellow eye; advise protective eyewear for sport'
                ],
                explain: 'Workup also includes CCT (thin CCT means IOP is underestimated and risk is higher), OCT, VF and a dilated fundus exam (retinal dialysis or tears from the old trauma).'
            }
        ]
    },
    {
        id: 'steroid-response',
        category: 'glaucoma',
        title: 'Steroid Response in a Teenager',
        theme: 'Steroid-induced OHT',
        years: ['2018', '2025'],
        patient: '17-year-old boy with vernal keratoconjunctivitis.',
        stem: 'He has been using dexamethasone 0.1% (Maxidex) QID for 3 months, refilling an old script against advice. IOP R 34, L 32 mmHg. Discs look healthy.',
        steps: [
            {
                phase: '1. Mechanism',
                type: 'mcq',
                question: 'How do corticosteroids raise IOP?',
                options: [
                    'They increase aqueous production: steroids stimulate the ciliary epithelium and carbonic anhydrase activity, so more aqueous is made while outflow through the TM stays normal.',
                    'They reduce trabecular outflow: extracellular matrix builds up in the TM, phagocytosis falls, cross-linked actin networks form and myocilin (MYOC) is upregulated.',
                    'They close the angle: steroids relax the iris sphincter and dilate the pupil, pushing the peripheral iris into the TM — a secondary angle-closure mechanism reversed by pilocarpine.',
                    'They raise uveoscleral outflow resistance: steroids cause ciliary muscle fibrosis and reduce MMP activity, while the trabecular meshwork itself is unaffected.'
                ],
                answer: 1,
                explain: 'This is a secondary open-angle mechanism. IOP typically rises 2–6 weeks after starting (sooner with potent drops and in children) and usually falls within weeks of stopping, though not always.'
            },
            {
                phase: '2. Who responds',
                type: 'multi',
                question: 'Who is more likely to be a steroid responder?',
                options: ['POAG patients and their first-degree relatives', 'Children', 'High myopes', 'Type 1 diabetes', 'Connective tissue disease (e.g. RA)', 'Hyperopes over 80'],
                answers: [0, 1, 2, 3, 4],
                explain: 'About 90% of POAG patients respond to potent topical steroids. Children respond more often and faster.'
            },
            {
                phase: '3. Numbers',
                type: 'mcq',
                question: 'Classic Armaly/Becker figures for topical dexamethasone in the general population?',
                options: [
                    '~5% high responders (rise >15 mmHg), ~30–35% moderate (6–15 mmHg), the rest low (<6 mmHg).',
                    '~30% high responders (rise >15 mmHg), ~50% moderate (6–15 mmHg), and the rest low (<6 mmHg).',
                    '~1% high responders (rise >15 mmHg), ~5% moderate (6–15 mmHg), the rest low (<6 mmHg).',
                    '~5% high responders (rise >6 mmHg), ~30% moderate (3–6 mmHg), the rest low (<3 mmHg).'
                ],
                answer: 0,
                explain: 'A practical clinical rule is to act on a rise of ~10 mmHg or more, or IOP above ~25–30 mmHg, depending on the disc.',
                recall: 'The mock notes defined steroid response as “IOP ↑ >5 mmHg”. That is too low — a rise under 6 mmHg is a <em>low</em> (normal) response.'
            },
            {
                phase: '4. Penetration',
                type: 'mcq',
                question: 'Which two topical steroids have the highest intraocular penetration and potency — and the highest IOP risk?',
                options: [
                    'Prednisolone acetate 1% and dexamethasone 0.1%',
                    'Fluorometholone 0.1% and loteprednol 0.5%',
                    'Prednisolone sodium phosphate 0.5% and FML',
                    'Hydrocortisone 1% and fluorometholone acetate 0.1%'
                ],
                answer: 0,
                explain: 'Prednisolone <strong>acetate</strong> is a lipophilic suspension → excellent corneal penetration. Prednisolone sodium <strong>phosphate</strong> is a hydrophilic solution and penetrates an intact epithelium poorly. FML and loteprednol are “soft” steroids with lower IOP risk.'
            },
            {
                phase: '5. Management',
                type: 'viva',
                question: 'How do you manage him?',
                points: [
                    'Stop the unsupervised dexamethasone — taper rather than stopping abruptly after long use (rebound VKC)',
                    'Switch to steroid-sparing control of VKC: dual-acting antihistamine/mast cell stabiliser (e.g. olopatadine 0.1% BD); specialist ciclosporin',
                    'If steroid is still needed, use a lower-penetration steroid (FML 0.1%) with IOP monitoring',
                    'Lower IOP with an aqueous suppressant (e.g. timolol if no contraindications) while IOP is high',
                    'Baseline OCT and fields; review IOP every 1–2 weeks until normal',
                    'Educate: no repeat scripts without review; inform the GP and pharmacist',
                    'Refer to ophthalmology if IOP doesn\'t settle or there is any optic neuropathy'
                ],
                explain: 'Long-term monitoring is needed — he is a known responder and VKC flares will tempt future steroid use. Document “steroid responder” in his file.'
            }
        ]
    }
);
