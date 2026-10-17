// Glaucoma & IOP cases (posterior-eye examiner)
window.CASES.push(
    {
        id: 'aac-first-aid',
        category: 'glaucoma',
        title: 'Acute Angle Closure: Diagnosis & First Aid',
        theme: 'Acute Angle Closure',
        years: ['2019', '2025', 'Mock 2025', 'Case studies', 'Peer recalls'],
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
                    'PSS: closed angle, fixed dilated pupil, severe pain and vomiting — it only differs by being bilateral.',
                    'PSS: posterior synechiae and a miotic pupil with hypopyon.',
                    'PSS: IOP is normal; the cornea is clear and the eye is very red.'
                ],
                answer: 0,
                explain: 'PSS (glaucomatocyclitic crisis) gives recurrent unilateral IOP spikes (often 40–60 mmHg) with an <strong>open angle</strong>, minimal discomfort, a few fine KPs and very little AC reaction — usually in adults aged 20–50. CMV is implicated, especially in Asian patients. Gonioscopy (open angle) is the key separator from AAC.'
            },
            {
                phase: '3. Confirming the mechanism',
                type: 'mcq',
                question: 'The cornea is too hazy to view the left angle. What is your quickest way to support the diagnosis?',
                options: [
                    'Indentation gonioscopy on the inflamed left eye straight away.',
                    'Van Herick and gonioscopy on the FELLOW (right) eye.',
                    'Instil pilocarpine 2% to clear the cornea, then do gonioscopy.',
                    'Dilate the right eye to compare pupil reactions.'
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
                    'Write the prescription yourself — it is on the optometry list.',
                    'Ask the community pharmacist to supply it without a prescription.',
                    'Contact a medical practitioner (on-call ophthalmology registrar, ED or the patient\'s GP) to prescribe or give it, while you start topical first aid — or send the patient to ED.',
                    'It is not needed if topical drops are used.'
                ],
                answer: 2,
                explain: 'Endorsed optometrists in Australia prescribe <strong>topical</strong> ocular medicines. Oral acetazolamide (S4) needs a medical prescriber; a pharmacist can\'t supply it without a prescription. Phone the ophthalmology registrar or ED, start topical first aid and arrange urgent transfer. Typical dose: 500 mg orally stat (two 250 mg tablets), or IV in ED.'
            },
            {
                phase: '8. Vomiting',
                type: 'mcq',
                question: 'She vomits the acetazolamide tablet. What will the hospital most likely do?',
                options: [
                    'Repeat the oral dose every 10 minutes.',
                    'Give IV acetazolamide and/or IV mannitol (hyperosmotic), plus an antiemetic and analgesia.',
                    'Give atropine to relax the ciliary body.',
                    'Nothing more until the cornea clears by itself.'
                ],
                answer: 1,
                explain: 'If oral acetazolamide can\'t be tolerated or is contraindicated, ED or ophthalmology use IV acetazolamide or IV mannitol (check cardiac and renal status — mannitol causes volume load), with an antiemetic and analgesia. AAC is often misdiagnosed in ED as migraine, gastroenteritis or an intracranial event because of the headache and vomiting.'
            },
            {
                phase: '9. Pilocarpine',
                type: 'mcq',
                question: 'Why hold pilocarpine 2% at first, and what else must happen before you use it?',
                options: [
                    'It dilates the pupil; wait until the patient is in hospital.',
                    'Above ~40 mmHg the iris sphincter is ischaemic and won\'t respond, and pilocarpine pulls the lens–iris diaphragm forward. Wait until IOP is below ~40 and ophthalmology has confirmed a pupil-block mechanism (not phacomorphic or aqueous misdirection).',
                    'It permanently damages the ciliary body.',
                    'It only works on open angles, so it is never used in AAC.'
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
                options: ['Dilated fundus exam', 'Gonioscopy (with indentation)', 'Water-drinking test', 'Pachymetry'],
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
                    'R: PAC; L: PACG.',
                    'Both eyes: primary open-angle glaucoma.',
                    'R: normal; L: acute angle closure.'
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
                    'Observe — angle closure doesn\'t need treatment until there is an acute attack.',
                    'Refer to ophthalmology for LPI (both eyes) ± lens extraction; start IOP-lowering for the left eye (e.g. a PGA if not contraindicated) and set a target.',
                    'Start pilocarpine 4% QID long-term as monotherapy.',
                    'Dilate to assess the disc fully, then decide.'
                ],
                answer: 1,
                explain: 'PACG needs the mechanism treated (LPI to relieve pupil block; lens extraction is often better per EAGLE) <strong>and</strong> the IOP controlled. PGAs work well in angle closure because they don\'t depend on the trabecular meshwork. Chronic pilocarpine isn\'t first-line. Say “provided there are no contraindications” and refer to ophthalmology, as angle-closure glaucoma is managed with them.'
            },
            {
                phase: '7. ZAP & access',
                type: 'mcq',
                question: 'For the PACS right eye, the examiner asks what the ZAP trial means for you, and why a metro patient might be treated differently from a rural one.',
                options: [
                    'ZAP showed LPI in PACS greatly lowers risk, so every PACS eye must have LPI urgently.',
                    'ZAP (Chinese PACS) found a statistically significant but small absolute benefit from LPI, so routine prophylaxis isn\'t needed. Treat if there are risk factors such as poor access to emergency eye care (rural/remote), need for frequent dilation, symptoms, fellow-eye attack or strong family history.',
                    'ZAP showed lens extraction is better than LPI for PACS.',
                    'ZAP is a glaucoma surgery trial and doesn\'t apply.'
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
        years: ['2018', '2019', '2025', 'Mock 2025', 'Case studies', 'Peer recalls'],
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
                    'PDS: peripupillary TIDs and patchy TM pigment. PXF: mid-peripheral slit TIDs.',
                    'PXF: patchy TM pigment (heavier inferiorly), Sampaolesi line, peripupillary TIDs, older patients. PDS: dense homogeneous 360° TM pigment, Krukenberg spindle, mid-peripheral radial slit TIDs, young myopes.',
                    'PXF only affects the lens; PDS only affects the TM.',
                    'PXF presents in young myopic men; PDS in older Scandinavian women.'
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
                    'Slowest of all, at about −0.1 dB/year.',
                    'Fastest — about −3.1 dB/year MD, compared with about −1.3 for high-tension POAG and −0.4 for NTG.',
                    'Same as NTG.',
                    'EMGT didn\'t include PXF patients.'
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
                options: ['Timolol 0.5% BD', 'Betaxolol 0.25% BD', 'Latanoprost 0.005% nocte', 'Pilocarpine 2% QID'],
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
                    'Betaxolol lowers IOP more than timolol.',
                    'Betaxolol is β1-selective, so it causes less bronchospasm. It still needs caution in airway disease and lowers IOP less.',
                    'Betaxolol is safe in heart block.',
                    'Betaxolol is a prostaglandin.'
                ],
                answer: 1,
                explain: 'Cardioselectivity is relative, not absolute, so betaxolol is a <em>precaution</em> in asthma and COPD, not a free pass. Betaxolol may also have some calcium-channel (vascular) effects. Check current availability in Australia.'
            },
            {
                phase: '8. Referral & review',
                type: 'mcq',
                question: 'What is your plan after starting latanoprost?',
                options: [
                    'Manage alone indefinitely; review yearly.',
                    'Treat and refer to ophthalmology (secondary glaucoma — not suitable for collaborative care on the RANZCO pathway; OBA requires referral within 4 months of starting glaucoma treatment). Review IOP in ~4 weeks; consider SLT and keep in mind the cataract-surgery risks.',
                    'Refer only if IOP goes above 40.',
                    'Stop treatment once IOP is below 21.'
                ],
                answer: 1,
                explain: 'PXG progresses quickly. You can start treatment, then refer. Ophthalmology may add SLT (often a good initial response in PXF, though it can wane), lens extraction (zonular weakness — capsular tension ring) or surgery. Latanoprost starts working within hours and reaches a stable full effect over a few weeks, so review at ~4 weeks. Medicare limits how often computerised perimetry can be claimed (check the current MBS items); if PXG needs more frequent fields, discuss the fee with the patient.',
                recall: '2025 recalls asked: “What would the ophthalmologist do differently?” (SLT, lens extraction, surgery, systemic or second-line drugs) and “What are the legal requirements when referring glaucoma?” — in the current OBA scheduled medicines guideline, check the 4-month referral rule and collaborative-care plan.'
            },
            {
                phase: '9. Review schedule',
                type: 'mcq',
                question: 'If you found PXF <strong>without</strong> glaucoma (normal IOP, disc and field), how would you monitor?',
                options: ['Discharge — PXF is benign.', 'Every 6–12 months: IOP, disc/OCT and fields — PXF eyes can convert to glaucoma and IOP can spike.', 'Every 5 years.', 'Only when symptomatic.'],
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
        years: ['2019', '2025', 'Mock 2025', 'Case studies'],
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
                    'About 100% within a year.',
                    'About 10% at 5 years and 15% at 15 years (Siddiqui 2003). Risk factors: male sex, high myopia, Krukenberg spindle, higher baseline IOP.',
                    'Under 1% lifetime.',
                    'About 50% at 1 year, mostly in women.'
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
                options: ['Superior arcuate / nasal step', 'Inferior nasal step / inferior arcuate', 'Right homonymous hemianopia', 'Central scotoma'],
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
                    'It always gets worse with age.',
                    'Pigment release falls as the lens enlarges and accommodation and pupil size decline. TM pigment can fade (pigment-reversal sign — more pigment superiorly than inferiorly), TIDs and Krukenberg spindle may lessen, and IOP can normalise.',
                    'It turns into PXF.',
                    'It causes angle closure in all patients.'
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
        years: ['2018', '2019', 'Case studies'],
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
                    'Thin — Goldmann underestimates IOP; higher risk.',
                    'Thicker than average (mean ~540–550 µm) — Goldmann may overestimate IOP, and thicker CCT is linked with lower conversion risk in OHTS. It doesn\'t cancel out the disc haemorrhage or family history.',
                    'Irrelevant to glaucoma risk.',
                    'Means she has corneal oedema.'
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
                    'Normal — discharge.',
                    'High-risk OHT (disc haemorrhage, first-degree family history, IOP 26) or possible pre-perimetric glaucoma. Repeat OCT in ~3 months, rule out other causes of the haemorrhage, and seriously consider treatment.',
                    'Definite POAG — refer urgently.',
                    'NTG.'
                ],
                answer: 1,
                explain: 'Disc haemorrhages usually reabsorb within 2–3 months and often come before detectable RNFL or field loss. With FHx and IOP in the mid-20s her risk is well above average. Repeat structural testing soon and use an OHTS/EGPS risk estimate.'
            },
            {
                phase: '6. OHTS',
                type: 'mcq',
                question: 'If you treat, what does OHTS tell you about benefit and target?',
                options: [
                    'Treatment doesn\'t change conversion.',
                    'Treatment (aiming for ≥20% reduction and IOP ≤24) cut 5-year conversion from 9.5% to 4.4% — roughly half.',
                    'Target a 50% reduction.',
                    'Treatment only helps if IOP is above 35.'
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
                    'Start latanoprost — it is pregnancy category A.',
                    'Weigh risk vs benefit: low-risk OHT can often be watched through pregnancy, or treated with SLT. If drops are needed, brimonidine (B3 — stop before delivery and while breastfeeding: neonatal CNS depression/apnoea) or timolol (C — lowest dose, punctal occlusion) are usual. Avoid PGAs (B3, uterotonic concern).',
                    'Oral acetazolamide is safest.',
                    'All glaucoma drugs are absolutely contraindicated, so nothing can be done.'
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
                    'Timolol causes insomnia.',
                    'It is absorbed better in the morning.',
                    'There is no reason.'
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
                    'SLT is experimental.',
                    'LiGHT: primary SLT kept ~74% of patients drop-free at 3 years, with comparable quality of life, fewer surgeries and lower cost than drops-first.',
                    'SLT only works in angle closure.',
                    'SLT permanently cures OHT.'
                ],
                answer: 1,
                explain: 'SLT is a reasonable first-line option and discussing it was expected. Effect can wane over years, and repeat SLT is possible. The ophthalmologist performs it (involve the GP as needed). Check IOP about 1 hour after laser for a spike; assess the full effect at about 6–8 weeks.'
            },
            {
                phase: '5. Residual IOP',
                type: 'mcq',
                question: 'After SLT his IOP is 24 mmHg. He\'ll now accept a drop but hates the idea of red eyes and eyelash changes. Best next option?',
                options: [
                    'Timolol 0.5% — he is young and active, so no concerns.',
                    'Timolol is possible after checking contraindications (ask about exercise tolerance, asthma, heart rate — involve GP), but in a young active man a topical CAI or brimonidine may suit better. Discuss trade-offs.',
                    'Pilocarpine 4% QID.',
                    'Oral acetazolamide long-term.'
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
                options: ['30-2 SITA Fast', '10-2 (central 10°)', 'Goldmann kinetic perimetry', 'Amsler only'],
                answer: 1,
                explain: 'The 24-2 grid (6° spacing) under-samples the macula. A 10-2 maps paracentral loss, which matters for prognosis and target IOP and is common in NTG and myopic glaucoma.'
            },
            {
                phase: '2. Grade',
                type: 'mcq',
                question: 'How would you grade this field?',
                options: [
                    'Early, because MD is only about −6 dB.',
                    'At least moderate: MD is borderline, and a paracentral defect within the central field upgrades the stage (Hodapp). Confirm repeatability and explain your reasoning.',
                    'Advanced, because the GHT is outside normal limits.',
                    'Ungradable.'
                ],
                answer: 1,
                explain: 'Explain your reasoning aloud — the management (treat, close review, refer) doesn\'t change, but the examiner wants to hear that central involvement raises the threat to vision.'
            },
            {
                phase: '3. Management',
                type: 'mcq',
                question: 'Your management?',
                options: [
                    'Observe for 12 months.',
                    'Start a PGA (e.g. latanoprost 0.005% nocte) provided there are no contraindications (pregnancy, active or past uveitis, CMO risk, herpetic keratitis); aim for ~25–30% reduction; review in ~4 weeks; refer to ophthalmology within 4 months (OBA) for collaborative care.',
                    'Refer only — optometrists can\'t treat glaucoma.',
                    'Pilocarpine first-line.'
                ],
                answer: 1,
                explain: 'Optometrists can diagnose and start treatment for POAG. Refer within 4 months under the OBA guideline (check the current version) and follow the RANZCO collaborative-care pathway.'
            },
            {
                phase: '4. The right eye',
                type: 'mcq',
                question: 'Would you treat the right eye (IOP 22, normal structure and function)?',
                options: [
                    'Yes — always treat both eyes.',
                    'Not necessarily: an IOP of 22 with normal structure and function is low risk on OHTS. Monitor closely (asymmetric POAG often becomes bilateral). Some clinicians treat both for convenience or symmetry — justify either choice.',
                    'Yes, with timolol.',
                    'No, and discharge the right eye.'
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
                    'Reassure her; IOP is normal.',
                    'Check adherence and drop technique, look for IOP fluctuation (phasing), confirm progression with repeat fields/OCT, lower the target, and escalate (add a second agent or combination, SLT, refer for surgery). Her long life expectancy calls for aggressive control.',
                    'Stop the drops.',
                    'Change to a different PGA and review in 12 months.'
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
        years: ['2019', '2025', 'Case studies'],
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
                    'Ishihara is more sensitive to everything.',
                    'Ishihara screens for congenital red–green defects; the D15 picks up acquired defects including blue–yellow (tritan) and grades severity — useful for spotting a non-glaucomatous optic neuropathy.',
                    'D15 measures field loss.',
                    'There is no difference.'
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
                    '30% below 18 → about 12.5 mmHg.',
                    'About 30% below the untreated mean baseline (CNTGS): 14 → about 10 mmHg — while also blunting peaks and fluctuation.',
                    'Below 21 mmHg.',
                    'No target is needed in NTG.'
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
                    'Timolol 0.5% at night.',
                    'A PGA at night (provided there are no contraindications) — 24-hour IOP lowering. Avoid evening β-blockers (nocturnal hypotension reduces optic nerve perfusion). Brimonidine is a reasonable alternative (LoGTS).',
                    'Oral acetazolamide.',
                    'Pilocarpine.'
                ],
                answer: 1,
                explain: 'In NTG, also consider BP review with the GP (avoid over-treating hypertension at night). SLT lowers IOP in NTG (~15–20%), but the absolute drop is smaller because the starting IOP is low.'
            },
            {
                phase: '7. Adherence',
                type: 'mcq',
                question: '“Sometimes I miss a day, so other days I put in two drops.” What do you tell her?',
                options: [
                    'Great — that makes up for it.',
                    'One drop once at night at the same time each day. More latanoprost doesn\'t lower IOP further (more frequent dosing can even reduce efficacy) and adds side effects. If you miss a dose, just continue the next night. Suggest reminders, check technique, close the eyelids gently or press on the tear duct for 1–2 minutes, and wait 5 minutes between different drops.',
                    'Switch to three drops a day.',
                    'Stop the drops if you forget.'
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
        years: ['2019', '2025', 'Peer recalls'],
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
                options: ['Grade I: under 1/3 of the AC', 'Grade II: over 50% of the AC', 'Grade III: total (8-ball)', 'Microhyphaema only'],
                answer: 0,
                explain: 'Grade I <1/3; Grade II 1/3–1/2; Grade III >1/2 (subtotal); Grade IV total (“8-ball”). Higher grades carry more risk of raised IOP, rebleed and corneal blood staining.',
                recall: 'A 2025 candidate called Grade II “>50%”. Grade II is <strong>1/3 to 1/2</strong>; more than half is Grade III.'
            },
            {
                phase: '4. Risk',
                type: 'mcq',
                question: 'What is the glaucoma risk after angle recession, and what drives it?',
                options: [
                    'Every eye with recession develops glaucoma within a year.',
                    'Roughly 6–9% over 10 years — higher with >180° recession. Onset can be delayed by years to decades. The cause is TM scarring and damage rather than the recession itself.',
                    'Zero — recession lowers IOP.',
                    'Only if there is a cataract.'
                ],
                answer: 1,
                explain: 'This is why traumatised eyes need lifelong (at least annual) IOP checks. Fellow eyes may also develop POAG later (a higher predisposition has been reported).'
            },
            {
                phase: '5. Fluctuation',
                type: 'mcq',
                question: 'How would you assess IOP fluctuation clinically?',
                options: ['A single Goldmann reading', 'Diurnal IOP phasing (several readings across a day, ideally including early morning)', 'Corneal topography', 'Pachymetry'],
                answer: 1,
                explain: 'The water-drinking test is a stress test of outflow reserve; diurnal phasing captures real fluctuation. Base your target on the peak and mean.',
                recall: 'A 2025 candidate offered the water-drinking test, but the examiner wanted something “more clinical” — <strong>IOP phasing</strong>.'
            },
            {
                phase: '6. Drug choice',
                type: 'mcq',
                question: 'Which drug class is least effective, and may even raise IOP, in angle recession glaucoma?',
                options: ['Prostaglandin analogues', 'β-blockers', 'Topical CAIs', 'Pilocarpine (miotics)'],
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
        years: ['2018', '2025', 'Peer recalls'],
        patient: '17-year-old boy with vernal keratoconjunctivitis.',
        stem: 'He has been using dexamethasone 0.1% (Maxidex) QID for 3 months, refilling an old script against advice. IOP R 34, L 32 mmHg. Discs look healthy.',
        steps: [
            {
                phase: '1. Mechanism',
                type: 'mcq',
                question: 'How do corticosteroids raise IOP?',
                options: [
                    'They increase aqueous production by the ciliary body.',
                    'They reduce trabecular outflow: extracellular matrix builds up in the TM, phagocytosis falls, cross-linked actin networks form and myocilin (MYOC) is upregulated.',
                    'They close the angle by dilating the pupil.',
                    'They thicken the cornea, so the IOP reading is falsely high.'
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
                    '~50% high responders.',
                    'Nobody responds before 6 months.',
                    '~1% of everyone, regardless of potency.'
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
                    'Hydrocortisone 1% and FML',
                    'Prednisolone sodium phosphate 0.5% and rimexolone'
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
    },
    {
        id: 'pss',
        category: 'glaucoma',
        title: 'Posner–Schlossman: IOP 60 in One Eye',
        theme: 'Glaucomatocyclitic Crisis',
        years: ['2018', 'Peer recalls'],
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
        id: 'poag-staging',
        category: 'glaucoma',
        title: 'Staging POAG & the Fellow Eye',
        theme: 'POAG Staging / Progression',
        years: ['Peer recalls'],
        patient: '64-year-old man referred by his GP for “eye pressure”.',
        stem: 'IOP 25 mmHg OU. Fields: right eye has a small superior cluster of depressed points, MD −2 dB, GHT borderline. Left eye has an almost complete superior hemifield defect.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'Given the IOP and the fields, which diagnoses are you considering?',
                options: [
                    'Primary open-angle glaucoma (left eye established, right eye early or suspect)',
                    'Secondary open-angle glaucoma (pseudoexfoliation, pigment dispersion, angle recession, steroid response)',
                    'Chronic angle-closure glaucoma',
                    'Non-glaucomatous causes of altitudinal loss (old NAION, branch retinal artery occlusion)',
                    'Bitemporal hemianopia from a pituitary adenoma'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Raised IOP with arcuate/altitudinal field loss is POAG until gonioscopy and slit lamp exclude secondary and angle-closure causes. An altitudinal defect can also follow NAION or a BRAO, so check the disc for pallor versus cupping and the history for a sudden event. A pituitary lesion gives temporal loss respecting the vertical midline.'
            },
            {
                phase: '2. Staging',
                type: 'match',
                question: 'Using Hodapp–Parrish–Anderson / Mills-type MD criteria, match the eye to its stage.',
                pairs: [
                    { label: 'Right eye: MD −2 dB, small superior cluster, GHT borderline', answer: 'Early (MD better than −6 dB) — or suspect until repeatable' },
                    { label: 'Left eye: almost complete superior hemifield loss', answer: 'Advanced/severe (MD worse than −12 dB, likely with points near fixation)' }
                ],
                distractors: ['Moderate (MD −6 to −12 dB)', 'End-stage (no measurable field)'],
                explain: 'Hodapp: early MD > −6 dB; moderate −6 to −12 dB; severe < −12 dB (each also has point-count and central-5° criteria). Mills adds stages up to end-stage. Pick one system, name it and use it consistently. An almost complete hemifield will usually breach the central criteria too.',
                recall: 'Peer recall: “Use Mills\' criteria, look at the MD value.” Fine, but quote which system you use — examiners notice when stages are mixed.'
            },
            {
                phase: '3. Work-up',
                type: 'viva',
                question: 'What is your work-up, and what are you looking for in each test?',
                points: [
                    'Gonioscopy: open vs closed angle, PAS, pigment (Sampaolesi line), PXF material, angle recession',
                    'Slit lamp: PXF on the lens, Krukenberg spindle, transillumination defects, KPs or other inflammation',
                    'Stereo disc assessment: rim loss that CORRESPONDS to the defect (inferior rim loss → superior field loss); haemorrhages; pallor vs cupping',
                    'OCT RNFL/GCL: structure–function agreement, and a baseline for progression',
                    'Pachymetry (CCT): thin cornea → IOP underestimated and an independent risk factor (OHTS)',
                    'IOP phasing and a repeat field to confirm the right-eye defect',
                    'History: family history, steroids, trauma, systemic β-blockers, asthma/COPD and cardiac disease before choosing a drug'
                ],
                explain: 'The examiner is checking that you know what each test adds rather than reciting a list.'
            },
            {
                phase: '4. Progression',
                type: 'mcq',
                question: 'How will you look for progression?',
                options: [
                    'Look for any 10 dB drop at any single point.',
                    'Event analysis (Guided Progression Analysis: the same ≥3 points significantly worse than baseline on 2 consecutive tests = “possible”, on 3 = “likely” progression) and trend analysis (MD or VFI slope over time, in dB or % per year), alongside OCT change. Do ~3 fields a year early on to get a reliable rate.',
                    'Wait for the patient to notice a change in vision.',
                    'Repeat the GHT; once it says “outside normal limits” the disease has progressed.'
                ],
                answer: 1,
                explain: 'You need a good baseline (two reliable fields) and enough tests to estimate a rate of progression; front-loading fields in the first two years (e.g. three a year) is the recommended approach. Structural change on OCT often comes before field change in early disease; in advanced disease the RNFL floors out and fields (or macular GCL) matter more.'
            },
            {
                phase: '5. Treatment',
                type: 'mcq',
                question: 'What is your treatment plan?',
                options: [
                    'Treat the left eye only; the right eye is normal.',
                    'Treat both eyes with a PGA (e.g. latanoprost 0.005% one drop nocte OU), provided there are no contraindications. Left target: at least 30% lower (AGIS suggests keeping advanced eyes below ~18 mmHg); right eye is high risk (IOP 25, early defect, fellow eye with advanced POAG). Review IOP in 4–6 weeks; refer to an ophthalmologist within 4 months, and sooner for the advanced left eye.',
                    'Start a fixed combination drop on both eyes on day one.',
                    'Observe both eyes for 12 months to establish a rate before treating.'
                ],
                answer: 1,
                explain: 'Asymmetric POAG often becomes bilateral, and this right eye has high IOP with an early defect — treating both is sensible. Don\'t start with a combination product (step up from monotherapy). Advanced disease threatening fixation warrants earlier ophthalmology involvement; SLT is an alternative or add-on (LiGHT).',
                recall: 'Peer recall questions: “Do you want to treat the other eye? Why?” — answer yes: high IOP, likely bilateral disease and an early defect. “Target IOP? What paper did you use?” — name the trial (EMGT ~25%, CNTGS 30% for NTG, AGIS <18 for advanced).'
            },
            {
                phase: '6. Educate & review',
                type: 'viva',
                question: 'What do you tell the patient, and what do you check at review?',
                points: [
                    'Glaucoma is usually painless and damage is permanent; treatment aims to stop or slow further loss',
                    'One drop at night in both eyes, punctal occlusion/close eyes 1–2 minutes, wipe excess from the lids; space drops 5 minutes apart',
                    'PGA side effects: red eyes (settles), longer darker lashes, iris darkening (permanent, matters if one eye only), periorbital fat atrophy',
                    'Don\'t stop or double up; bring drops to appointments; tell the GP and pharmacist',
                    'At 4–6 weeks: IOP vs target, adherence and technique, side effects, then fields/OCT at planned intervals',
                    'Driving: advanced field loss may affect licensing — discuss and check the field standard'
                ],
                explain: 'Review timing: 4–6 weeks after starting or changing a drop, then every 3–6 months depending on stage and control, with fields front-loaded in the first two years.'
            }
        ]
    },
    {
        id: 'neovascular-glaucoma',
        category: 'glaucoma',
        title: 'Neovascular Glaucoma after a CRVO',
        theme: 'Neovascular Glaucoma',
        years: ['Case studies'],
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
    }
);
