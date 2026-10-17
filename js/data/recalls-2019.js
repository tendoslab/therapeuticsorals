// Cases from the 2019 therapeutics exam recall (Monday–Thursday sessions). These cover questions
// that sitting asked which the combined topic cases didn't.
window.CASES.push(
    {
        id: 'r2019-arcuate-ddx',
        category: 'glaucoma',
        title: 'Arcuate Defects: Differentials, Grading and β-Blockers',
        theme: 'Field Defect Differentials',
        years: ['2019'],
        patient: 'Adult with a unilateral arcuate field defect (Alex, Fiona and Lily sessions).',
        stem: 'You are shown an inferior arcuate defect, then a unilateral superior arcuate defect with MD −11 dB.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'Differentials for an arcuate field defect?',
                options: [
                    'Glaucoma',
                    'Optic disc drusen',
                    'Branch retinal artery or vein occlusion',
                    'Non-arteritic or arteritic AION',
                    'Optic neuritis',
                    'Tilted disc / myopic disc',
                    'Pituitary adenoma',
                    'Occipital lobe infarct'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Arcuate defects come from the nerve fibre layer or optic nerve head, so they respect the horizontal midline. Chiasmal and cortical lesions respect the vertical midline.'
            },
            {
                phase: '2. Grade',
                type: 'mcq',
                question: 'The superior arcuate defect has MD −11 dB. How do you grade it, and from what?',
                options: [
                    'Moderate, by MD (−6 to −12 dB) on Hodapp/Mills-type criteria — name the system, and check point counts and central involvement before settling on a stage.',
                    'Severe, because any arcuate defect is classed as severe on Hodapp/Mills criteria once the GHT is outside normal limits, whatever the MD or the central points.',
                    'Early, because MD is better than −12 dB on Hodapp/Mills criteria, and only defects worse than −12 dB count as moderate or worse.',
                    'End-stage, because a defect reaching the blind spot is end-stage on Hodapp/Mills criteria regardless of the MD or the central points.'
                ],
                answer: 0,
                explain: 'Hodapp: early > −6 dB, moderate −6 to −12 dB, severe < −12 dB, plus point-count and central-5° rules.',
                recall: 'A 2019 candidate said “moderate on Mills, MD −11” and the examiner accepted it.'
            },
            {
                phase: '3. Why pachymetry?',
                type: 'mcq',
                question: 'A 66-year-old man whose sister has POAG asks if he has it. “Why measure pachymetry — and why else?”',
                options: [
                    'Corneal thickness affects Goldmann readings (thin under-reads, thick over-reads), and thin CCT is an independent risk factor for conversion in OHTS; it also feeds the risk calculator.',
                    'Corneal thickness decides which drop class to use (thin corneas can’t take PGAs), and thick CCT is the main risk factor for angle closure in OHTS.',
                    'Corneal thickness predicts the type of field defect (thin corneas give central defects, thick ones peripheral), and it is needed before gonioscopy so the lens doesn’t indent the cornea.',
                    'Corneal thickness confirms the diagnosis on its own (under 520 µm is glaucoma), and it is used to set the review interval rather than the IOP.'
                ],
                answer: 0,
                explain: 'Also relevant before refractive surgery and to interpret apparent IOP changes after it.',
                recall: 'The 2019 candidate gave “risk of progression” and “under/overestimation of IOP” and was asked “what else?” — the OHTS risk-calculator role is a good third answer.'
            },
            {
                phase: '4. β-blocker contraindications',
                type: 'multi',
                question: 'Contraindications and cautions for β-blockers?',
                options: [
                    'Asthma, COPD and other airway disease',
                    'Bradycardia and heart block',
                    'Uncontrolled heart failure',
                    'Concurrent systemic β-blocker (precaution)',
                    'Hypersensitivity',
                    'Renal impairment (timolol is renally cleared)',
                    'Sulfonamide allergy'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Also avoid in a very active patient (blunted exercise heart rate, fatigue) — a 2019 panel wanted that point.'
            },
            {
                phase: '5. Treatment by class',
                type: 'match',
                question: 'Match each drug class to its key contraindication.',
                pairs: [
                    { label: 'PGA', answer: 'Active or past uveitis, HSV keratitis, CMO risk; avoid in pregnancy' },
                    { label: 'β-blocker', answer: 'Asthma/COPD, bradycardia, heart block; very active patients' },
                    { label: 'α2-agonist', answer: 'MAOI therapy; children under 2' },
                    { label: 'Topical CAI', answer: 'Sulfonamide allergy (caution), severe renal impairment, compromised endothelium' }
                ],
                distractors: ['Contact lens wear'],
                explain: 'Say “provided there are no contraindications” every time you name a drug.'
            }
        ]
    },
    {
        id: 'r2019-red-eye-mk',
        category: 'cornea',
        title: 'Unilateral Red, Painful Eye → Bacterial Keratitis',
        theme: 'Microbial Keratitis',
        years: ['2019'],
        patient: 'Adult with a unilateral red and painful eye.',
        stem: '“What questions would you ask, what are your differentials, what tests would you do?” It turns out to be MK.',
        steps: [
            {
                phase: '1. History',
                type: 'multi',
                question: 'Which history questions did the 2019 panel want?',
                options: [
                    'When it started and how it has changed',
                    'Contact lens wear',
                    'Sexual history (in the right context) and whether it has happened before',
                    'Discharge and photophobia',
                    'Trauma or recent surgery',
                    'Family history of glaucoma'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Each question should rule something in or out.'
            },
            {
                phase: '2. Differentials & tests',
                type: 'multi',
                question: 'Which differentials and tests fit a unilateral painful red eye?',
                options: [
                    'IOP to rule out Posner–Schlossman and acute angle closure',
                    'Gonioscopy if the cornea is clear enough',
                    'Slit lamp with fluorescein: infiltrate, epithelial defect, AC reaction',
                    'Pre-auricular nodes and corneal sensation',
                    'Episcleritis and scleritis on the differential list',
                    'Dilated fundus exam before measuring IOP'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Bacterial, allergic and viral conjunctivitis also belong on the list.'
            },
            {
                phase: '3. Younger patient',
                type: 'mcq',
                question: 'A small peripheral bacterial keratitis in a younger patient. Management?',
                options: [
                    'Ciprofloxacin 0.3% q15min for 6 h, q30min for the rest of the day and night, hourly on day 2, then 4-hourly until re-epithelialised; atropine 1% BD; no steroid; review in 24 h.',
                    'Ciprofloxacin 0.3% QID for 7 days; atropine 1% BD; prednisolone acetate QID from day 1 to limit scarring near the axis; review in 1 week, since daily reviews add nothing for small ulcers.',
                    'Chloramphenicol 0.5% q2h while awake for 5 days, then QID until healed; atropine 1% BD; no steroid; CL wear can resume once comfortable; review in 3 days if not improving.',
                    'Ciprofloxacin 0.3% q15min for 6 h only, then stop, since the loading dose sterilises the ulcer; homatropine 2% BD; FML QID from day 1 to limit scarring; review in 48 h.'
                ],
                answer: 0,
                explain: 'At 24 h expect minimal improvement or no worsening; review daily until re-epithelialised.'
            },
            {
                phase: '4. Older or severe',
                type: 'mcq',
                question: 'The recall’s plan for an older patient or a severe ulcer was dual fortified therapy. What does that involve?',
                options: [
                    'Cefazolin 5% (loading q10min for 2 h, then hourly) alternating with gentamicin 1.5% or tobramycin 1.3% hourly on the half hour — hospital-compounded, so refer.',
                    'Cefazolin 0.5% hourly mixed into the same bottle as gentamicin 0.3% to save the patient drops — prescribed by the optometrist and filled at a community pharmacy the same day.',
                    'Ciprofloxacin 0.3% plus ofloxacin 0.3% alternating every 15 minutes — two fluoroquinolones give double Gram-negative cover.',
                    'Vancomycin 5% plus amphotericin 0.15% hourly, alternating — bacterial plus fungal cover for every patient over 60, made up by the community pharmacy.'
                ],
                answer: 0,
                explain: 'Never mix them in one bottle (inactivation). Age isn’t a formal cut-off; size, depth, location and response decide.',
                recall: 'The 2019 recall used “<60 → FQ monotherapy, >60 → dual therapy”. Older age raises concern, but it isn’t a rule.'
            },
            {
                phase: '5. Doxycycline',
                type: 'mcq',
                question: 'The recall added “doxycycline 100 mg BID if risk of perforation”. Why, and who prescribes it?',
                options: [
                    'Doxycycline inhibits matrix metalloproteinases (collagenases), slowing stromal melting; it is oral, so the GP or ophthalmologist prescribes it. Avoid in pregnancy and under 8.',
                    'Doxycycline is a stronger antibiotic against Pseudomonas than ciprofloxacin; the optometrist prescribes it as a topical drop four times a day. It is safe in pregnancy and in children.',
                    'Doxycycline thickens the epithelium by stimulating stem cells; the pharmacist supplies it over the counter. Avoid only in patients over 65.',
                    'Doxycycline lowers IOP to protect the thinned cornea from perforating; the optometrist prescribes it orally. Avoid only in contact lens wearers and patients on warfarin.'
                ],
                answer: 0,
                explain: 'Vitamin C is sometimes added for collagen synthesis. Oral NSAIDs (via GP) help pain.'
            },
            {
                phase: '6. Not responding to fortified',
                type: 'mcq',
                question: 'What would the hospital do if it isn’t responding to dual fortified therapy?',
                options: [
                    'Re-culture (often after a brief antibiotic pause), consider fungus or Acanthamoeba, biopsy if cultures are negative, adjust to sensitivities, and protect a thinning cornea (glue, bandage lens, graft).',
                    'Add prednisolone acetate hourly to suppress the inflammation, since non-response to fortified drops usually means sterile inflammation rather than infection; continue the fortified drops unchanged meanwhile.',
                    'Switch to oral ciprofloxacin alone, since oral fluoroquinolones penetrate the stroma better than any topical drop and so replace fortified therapy; re-culturing isn’t needed once drops stop.',
                    'Stop all drops for a week to let the epithelium heal, since fortified drops are toxic to the cornea and toxicity is the usual reason for apparent non-response; then restart at QID.'
                ],
                answer: 0,
                explain: 'Oral antibiotics have a role in scleral extension or perforation risk, not as a replacement for topical therapy.'
            },
            {
                phase: '7. No cipro or oflox',
                type: 'mcq',
                question: '“Out of cipro — what do you use? Out of ofloxacin too?”',
                options: [
                    'Refer the same day for fortified therapy; meanwhile start intensive commercial tobramycin 0.3% (within optometric scope) as interim cover.',
                    'Start chloramphenicol 0.5% hourly as an equivalent alternative, since it covers Pseudomonas as well as the fluoroquinolones do.',
                    'Start prednisolone acetate hourly until the pharmacy restocks, since the steroid controls the infection temporarily.',
                    'Wait 24 hours for the pharmacy to restock ciprofloxacin, since starting a different antibiotic would interfere with the hospital’s culture results.'
                ],
                answer: 0,
                explain: 'Chloramphenicol has poor Pseudomonas cover and isn’t adequate for bacterial keratitis.'
            },
            {
                phase: '8. Lesion in the pupil',
                type: 'mcq',
                question: '“The lesion is in the pupil — sight-threatening. Would you treat?”',
                options: [
                    'Yes — start the antibiotic loading dose now and refer the same day; don’t delay treatment while arranging the referral.',
                    'No — refer without treating, since starting an antibiotic would make the hospital cultures useless.',
                    'Yes — but only with a steroid started first, since central lesions scar and the scar matters more than the infection itself.',
                    'No — observe for 24 hours, since central lesions are usually sterile and settle without treatment.'
                ],
                answer: 0,
                explain: 'The examiner kept asking “would you treat?” — the answer was both: treat and refer.'
            }
        ]
    },
    {
        id: 'r2019-aac-bilateral',
        category: 'glaucoma',
        title: 'Angle Closure: Bilateral Causes and No Phone Lines',
        theme: 'Acute Angle Closure',
        years: ['2019'],
        patient: '45-year-old Asian patient.',
        stem: 'Red eye with perilimbal injection and a steamy cornea. You can’t see the angle. You practise rurally; bushfires have cut the phone lines.',
        steps: [
            {
                phase: '1. Pain & misdiagnosis',
                type: 'mcq',
                question: 'How bad is the pain compared with other red eyes, and what is AAC often misdiagnosed as in hospital?',
                options: [
                    'Among the most painful red eyes (severe eye pain and headache, often with vomiting); often misdiagnosed as migraine, gastroenteritis or an intracranial event.',
                    'Usually painless, like a subconjunctival haemorrhage; it is often misdiagnosed as conjunctivitis in hospital because the cornea stays clear and the pupil reacts.',
                    'Mildly gritty, like dry eye; often misdiagnosed as allergic conjunctivitis in hospital because of the watering, itch and lid swelling.',
                    'Painful only on eye movement, like optic neuritis; often misdiagnosed as orbital cellulitis because of the lid swelling.'
                ],
                answer: 0,
                explain: 'The systemic symptoms send patients to ED, where the eye can be overlooked.'
            },
            {
                phase: '2. Can’t see the angle',
                type: 'mcq',
                question: 'You can’t do van Herick or gonioscopy on this eye. What do you do?',
                options: [
                    'Assess the fellow eye’s angle (van Herick, gonioscopy): an occludable fellow angle supports primary angle closure.',
                    'Dilate the fellow eye to compare the pupil reactions, since an asymmetric dilation response confirms angle closure.',
                    'Wait for the cornea to clear before making any diagnosis, since treating without gonioscopy is unsafe.',
                    'Instil pilocarpine to clear the cornea first, then perform gonioscopy on the affected eye straight away.'
                ],
                answer: 0,
                explain: 'Never dilate the fellow eye.'
            },
            {
                phase: '3. Systemic side effects',
                type: 'match',
                question: 'Match each drug to its systemic side effects.',
                pairs: [
                    { label: 'Timolol', answer: 'Bradycardia, bronchospasm, hypotension, fatigue, depression, masked hypoglycaemia' },
                    { label: 'Oral acetazolamide', answer: 'Paraesthesia, diuresis, metabolic acidosis, hypokalaemia, kidney stones, rare blood dyscrasias' },
                    { label: 'Brimonidine', answer: 'Dry mouth, drowsiness/fatigue, hypotension' }
                ],
                distractors: ['Tachycardia and hyperglycaemia'],
                explain: 'Topical CAIs have far fewer systemic effects than oral acetazolamide (bitter taste, stinging).'
            },
            {
                phase: '4. Bilateral attacks',
                type: 'multi',
                question: 'Which can cause BILATERAL angle closure?',
                options: [
                    'Topiramate and other sulfonamide-type drugs (ciliochoroidal effusion)',
                    'Bilateral pharmacological dilation in predisposed eyes',
                    'Anticholinergic or sympathomimetic medicines (antihistamines, TCAs, decongestants)',
                    'Spherophakia / microspherophakia (e.g. Weill–Marchesani)',
                    'Unilateral traumatic hyphaema',
                    'Central retinal vein occlusion in one eye'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Drug-induced effusion closure is NOT pupil block: pilocarpine and LPI don’t help; stop the drug and use cycloplegia under ophthalmology.'
            },
            {
                phase: '5. The other eye',
                type: 'mcq',
                question: 'What is the chance the fellow eye has an attack if untreated?',
                options: [
                    'Roughly 40–80% over 5–10 years — hence prophylactic LPI in the fellow eye.',
                    'Roughly 1–2% over 5–10 years — so the fellow eye only needs routine review.',
                    'Roughly 10–15% over 5–10 years — so prophylaxis is only for those with symptoms.',
                    'Roughly 100% within a month — so both eyes need emergency surgery that day.'
                ],
                answer: 0,
                explain: 'The fellow eye shares the anatomy.'
            },
            {
                phase: '6. No phone lines',
                type: 'mcq',
                question: 'You can’t contact anyone. You start timolol, brimonidine, a CAI and prednisolone acetate. Do you use pilocarpine?',
                options: [
                    'Yes, once IOP has fallen below ~40 mmHg and the picture fits phakic pupil block — with no specialist reachable, it is reasonable; arrange transport to hospital as soon as possible.',
                    'Yes, straight away every 5 minutes before the other drops, because pilocarpine works best at the highest IOP and replaces the need for hospital.',
                    'No, never without a phone consult, even if IOP falls and the patient can’t reach a hospital for many hours; keep repeating timolol every 15 minutes until a doctor is reached.',
                    'No, use atropine instead, because relaxing the ciliary body moves the lens back and opens the angle once the cornea clears and the IOP has started to fall.'
                ],
                answer: 0,
                explain: 'Candidates who refused pilocarpine outright in this scenario sensed the panel wasn’t happy. Document your reasoning and the drug times.',
                recall: 'From 2019: “Pilo — explained why I didn’t want to but got the sense they weren’t happy with that.”'
            },
            {
                phase: '7. Why oedema and a fixed pupil?',
                type: 'mcq',
                question: 'What causes the corneal oedema and the poor pupil reaction?',
                options: [
                    'High IOP overwhelms the endothelial pump, so fluid enters the cornea; pressure-induced iris ischaemia paralyses the sphincter, leaving a mid-dilated unreactive pupil.',
                    'Inflammatory cells clog the endothelium, causing the oedema; the pupil is mid-dilated because the patient took atropine-like medicines such as antihistamines before the attack.',
                    'Tear film evaporation from the pain causes epithelial oedema; the pupil is fixed because the optic nerve has stopped conducting at such a high pressure.',
                    'The lens swells and pushes forward on the cornea, causing the oedema; the pupil is fixed because of posterior synechiae from an underlying uveitis.'
                ],
                answer: 0,
                explain: 'Ischaemia = reduced blood flow; the panel asked candidates to say exactly that.'
            }
        ]
    },
    {
        id: 'r2019-glaucoma-drugs',
        category: 'glaucoma',
        title: 'Glaucoma Drops: Classes, Combinations and Mechanisms',
        theme: 'Glaucoma Pharmacology',
        years: ['2019', '2025'],
        patient: 'Adult with POAG (a big inferior arcuate defect).',
        stem: '“Talk me through treatment, side effects, and combination drops with their concentrations and dosing.”',
        steps: [
            {
                phase: '1. PGA mechanism',
                type: 'mcq',
                question: 'How do prostaglandin analogues lower IOP?',
                options: [
                    'FP-receptor agonists that increase uveoscleral outflow: they up-regulate matrix metalloproteinases, remodelling the ciliary muscle extracellular matrix.',
                    'Muscarinic agonists that increase trabecular outflow: they contract the ciliary muscle, pull on the scleral spur and so open up the trabecular meshwork.',
                    'β-receptor antagonists that reduce aqueous production: they block cAMP formation in the non-pigmented ciliary epithelium, mainly during the day.',
                    'Carbonic anhydrase inhibitors that reduce aqueous production: they block bicarbonate formation in the ciliary epithelium.'
                ],
                answer: 0,
                explain: 'Pilocarpine is the muscarinic agonist; timolol the β-blocker; dorzolamide/brinzolamide the CAIs.'
            },
            {
                phase: '2. Classes',
                type: 'match',
                question: 'Match each class to its typical peak IOP reduction and dosing.',
                pairs: [
                    { label: 'PGA (latanoprost 0.005%)', answer: '~25–35%; once daily at night' },
                    { label: 'β-blocker (timolol 0.5%)', answer: '~20–25%; once (morning) or twice daily' },
                    { label: 'α2-agonist (brimonidine 0.2%)', answer: '~20–25% at peak (less at trough); BD–TDS' },
                    { label: 'Topical CAI (dorzolamide 2%)', answer: '~15–20%; TDS alone, BD as an add-on' }
                ],
                distractors: ['~50%; once weekly'],
                explain: 'Review about 4–6 weeks after starting or changing a drop, to see the full effect and check side effects and adherence.'
            },
            {
                phase: '3. Combination drops',
                type: 'match',
                question: 'Match each Australian combination product to its ingredients and dosing.',
                pairs: [
                    { label: 'Xalacom', answer: 'Latanoprost 0.005% + timolol 0.5%, once daily' },
                    { label: 'Ganfort', answer: 'Bimatoprost 0.03% + timolol 0.5%, once daily' },
                    { label: 'Cosopt', answer: 'Dorzolamide 2% + timolol 0.5%, twice daily' },
                    { label: 'Combigan', answer: 'Brimonidine 0.2% + timolol 0.5%, twice daily' },
                    { label: 'Simbrinza', answer: 'Brinzolamide 1% + brimonidine 0.2%, twice daily' }
                ],
                distractors: ['Latanoprost 0.005% + brimonidine 0.2%, three times daily'],
                explain: 'DuoTrav (travoprost 0.004% + timolol 0.5%, once daily) and Azarga (brinzolamide 1% + timolol 0.5%, BD) are others. Check current product information and PBS listings.'
            },
            {
                phase: '4. When to combine',
                type: 'mcq',
                question: 'When would you use a combination drop?',
                options: [
                    'When one agent doesn’t reach target and a second is needed: a fixed combination reduces drop burden and washout and helps adherence. Not first-line (step up per guidelines).',
                    'As first-line for every new patient, because two drugs always lower IOP twice as much as one, and adherence doesn’t change with the number of bottles a patient has to use.',
                    'Only after surgery has failed, because combinations are reserved for end-stage disease, carry more side effects and can’t be prescribed by optometrists.',
                    'Only in pregnancy, because combining two drugs in one bottle halves the dose of each and so halves the fetal exposure to both, while keeping the same overall IOP lowering.'
                ],
                answer: 0,
                explain: 'Check each component’s contraindications (the timolol in most combinations is often the problem).'
            },
            {
                phase: '5. Pilocarpine mechanism',
                type: 'mcq',
                question: 'How does pilocarpine lower IOP, and why is it a poor choice in angle recession?',
                options: [
                    'Muscarinic agonist: contracts the ciliary muscle, pulling the scleral spur to open the TM. In recession the TM is scarred and pilocarpine cuts uveoscleral outflow, so IOP can rise.',
                    'Muscarinic antagonist: relaxes the ciliary muscle and widens the uveoscleral pathway. In recession the ciliary body is torn, so the drug can’t reach its target and has no effect.',
                    'α-agonist: constricts the ciliary vessels and reduces aqueous production. In recession the vessels are already constricted by scarring, so it adds nothing to IOP control.',
                    'FP-receptor agonist: remodels the ciliary muscle matrix to increase outflow. In recession the matrix is already remodelled by the trauma, so it gives no further lowering.'
                ],
                answer: 0,
                explain: 'Side effects: brow ache, dim vision, myopic shift, retinal detachment risk.'
            },
            {
                phase: '6. Young and progressing',
                type: 'mcq',
                question: 'A 45-year-old reached IOP 15 on latanoprost but still progressed. “Is there something you need to consider because of this patient’s demographic?”',
                options: [
                    'Age: decades of life ahead, so lower the target and escalate sooner (add a drop, SLT or surgery) after checking adherence and fluctuation.',
                    'Age: younger patients progress more slowly than older ones, so accept the progression, keep the same drop and target, and review in 2 years.',
                    'Sex: women respond less well to PGAs than men, so switch to a β-blocker alone, keep the same target pressure and review in 6 months.',
                    'Ethnicity: progression at a low IOP in this group is always neurological, so stop the drop and order an MRI.'
                ],
                answer: 0,
                explain: 'The 2019 examiner hinted at age; the candidate realised “this patient will need more intervention”.'
            }
        ]
    },
    {
        id: 'r2019-fhx-iop24',
        category: 'glaucoma',
        title: 'Family History and IOP 24: Treat or Watch?',
        theme: 'OHT / Glaucoma Suspect',
        years: ['2019'],
        patient: 'Two 2019 scenarios: a 40-year-old whose brother has glaucoma, and a patient with a Drance haemorrhage.',
        stem: 'Patient A: IOP 24 OU, no other risk factors, everything else normal. Patient B: IOP 24, Drance haemorrhage, VF clear, open angles, CCT 490 µm, family history.',
        steps: [
            {
                phase: '1. Patient A',
                type: 'mcq',
                question: 'The 40-year-old with IOP 24 and a brother with glaucoma, but no other risk factors. Would you treat?',
                options: [
                    'Not necessarily: he is OHT with moderate risk. Complete the work-up (CCT, gonio, OCT, fields), estimate risk (OHTS/EGPS) and monitor 6–12-monthly, treating if risk is high or change appears.',
                    'Yes, always: a sibling with glaucoma makes it glaucoma by definition, so start drops in both eyes today and refer within 24 hours; a risk calculator isn’t needed with any family history.',
                    'No: family history only matters for parents, not siblings, so discharge him from glaucoma monitoring and ask him to return for a routine eye test in 5 years.',
                    'Yes, but only with SLT: glaucoma drops are contraindicated in anyone under 50 because of cosmetic and systemic effects, so refer him for laser now.'
                ],
                answer: 0,
                explain: 'A first-degree relative with glaucoma raises risk, but on its own it doesn’t mandate treatment.'
            },
            {
                phase: '2. Patient B: target',
                type: 'mcq',
                question: 'Patient B (haemorrhage, CCT 490, family history). You treat. What target, and where does it come from?',
                options: [
                    'At least 20% (OHTS); with very thin CCT, a haemorrhage and family history, nearer 30% is reasonable — say why.',
                    '30% because NHMRC set it for OHT — and CNTGS is also an OHT trial, so both agree on 30% for everyone.',
                    '10% because the IOP is only 24 — OHTS showed small reductions are enough when the field is still clear.',
                    '50% because of the haemorrhage — EMGT set 50% as the target IOP reduction for any patient who has had a disc haemorrhage.'
                ],
                answer: 0,
                explain: 'CNTGS (30%) is an NTG trial. OHTS targeted ≥20% and ≤24 mmHg.',
                recall: 'A 2019 candidate said “30% from NHMRC” and also cited CNTGS — “but it’s not NTG so they gave me a look”.'
            },
            {
                phase: '3. SLT or drops',
                type: 'mcq',
                question: 'Discuss SLT vs drops. Who do you involve for SLT?',
                options: [
                    'Both are reasonable first-line (LiGHT: ~74% drop-free at 3 years). SLT is done by an ophthalmologist, so refer (involve the GP as needed); drops give immediate lowering.',
                    'SLT is never first-line, because LiGHT showed it only works after drops have failed. It is done by the optometrist in the consulting room, so no referral to anyone is needed.',
                    'Drops are always better, because LiGHT showed SLT failed in most patients within a year. SLT is done by the GP in a procedural clinic, so refer there.',
                    'SLT is only for angle closure, because LiGHT studied PACG eyes after LPI. It is done by a technician trained in lasers, so book it directly.'
                ],
                answer: 0,
                explain: 'Check IOP after SLT for a spike; assess the full effect at about 6–8 weeks.'
            },
            {
                phase: '4. Drops chain',
                type: 'mcq',
                question: 'Latanoprost is contraindicated; then the β-blocker is contraindicated too. What next?',
                options: [
                    'SLT or an α2-agonist (brimonidine) or a topical CAI, after checking their contraindications.',
                    'Pilocarpine 4% QID as the standard third choice, since miotics are preferred over α-agonists in OHT.',
                    'Oral acetazolamide long-term via the GP, since it is the usual third-line drug for OHT.',
                    'No treatment is possible, so monitor only, since every other drug shares the PGA contraindications.'
                ],
                answer: 0,
                explain: 'Long-term oral acetazolamide is poorly tolerated and isn’t a routine OHT option.'
            },
            {
                phase: '5. Night-time PGA',
                type: 'mcq',
                question: 'Why do we instil PGAs at night?',
                options: [
                    'Evening dosing gave a slightly larger reduction than morning in some studies (~35% vs 32%), the peak covers the early-morning IOP peak, and hyperaemia happens asleep.',
                    'PGAs are inactivated by daylight, so morning dosing has no effect at all and the drop must be used in the dark; they also cause drowsiness, which suits bedtime dosing.',
                    'PGAs cause marked drowsiness and blurred vision for 6 hours, so night dosing avoids sedation while driving; their IOP effect is identical at any time of day.',
                    'PGAs only work while the eyes are closed, because the drug needs the closed lid to reach the ciliary body, so it has to be used right before sleep.'
                ],
                answer: 0,
                explain: 'Consistency (same time daily) matters more than the exact hour.',
                recall: 'A 2019 candidate quoted morning vs evening efficacy (“35% → 32%”) and the examiner accepted it.'
            },
            {
                phase: '6. A defect at 3 weeks',
                type: 'mcq',
                question: 'At the 3-week review a new defect appears with structure–function agreement. What now?',
                options: [
                    'Confirm it is repeatable, check adherence and IOP vs target, then escalate (add a second agent such as a β-blocker if no contraindication, or SLT) and refer.',
                    'Ignore it — new defects can’t appear within 3 weeks of starting treatment, so it must be a learning effect; repeat the field in 12 months and keep the same drop.',
                    'Stop the PGA, because a new defect within 3 weeks means the drop has caused optic nerve toxicity; switch to timolol and review in 3 months.',
                    'Start oral steroids via the GP, because a sudden new defect while on treatment is always optic neuritis, and refer for an urgent MRI.'
                ],
                answer: 0,
                explain: 'The 2019 candidate added a β-blocker and “was free”.'
            }
        ]
    },
    {
        id: 'r2019-aau-drugs',
        category: 'uveitis',
        title: 'AAU: KPs, Atropine, Phenylephrine and Who to Refer',
        theme: 'Acute Anterior Uveitis',
        years: ['2019'],
        patient: 'Adult with a red, photophobic eye.',
        stem: 'Very zoomed-in photo: cells or KPs on the inferior cornea; later a photo of posterior synechiae.',
        steps: [
            {
                phase: '1. Most important sign',
                type: 'mcq',
                question: 'In a photo of posterior synechiae, what is the most important clinical sign, and what does IOP help you separate?',
                options: [
                    'AC cells (active inflammation) with synechiae; IOP separates PSS and herpetic trabeculitis (high) from typical AAU (normal or low).',
                    'Conjunctival redness and discharge; IOP separates bacterial from viral conjunctivitis (high in bacterial, normal in viral infections).',
                    'Lid swelling; IOP separates preseptal from orbital cellulitis (low IOP in orbital, from reduced venous drainage).',
                    'Pupil size alone; IOP separates cataract from uveitis (high IOP in cataract, from the swollen lens pushing forward).'
                ],
                answer: 0,
                explain: 'Trabeculitis (herpetic) and PSS raise IOP; ciliary shutdown in AAU usually lowers it.'
            },
            {
                phase: '2. Granulomatous signs',
                type: 'mcq',
                question: 'Why do mutton-fat KPs form, and which sign is NOT granulomatous?',
                options: [
                    'Clumps of macrophages and epithelioid cells (granulomatous inflammation). Hypopyon is NOT granulomatous — it is typical of severe HLA-B27 disease.',
                    'Pigment granules released from the iris pigment epithelium. Iris nodules are NOT granulomatous — they are typical of severe HLA-B27 disease.',
                    'Fibrin strands from leaky iris vessels. Mutton-fat KPs themselves are NOT granulomatous — they are typical of HSV keratouveitis only.',
                    'Calcium deposits from chronic inflammation. Koeppe nodules are NOT granulomatous — they are typical of pigment dispersion syndrome.'
                ],
                answer: 0,
                explain: 'Granulomatous signs: mutton-fat KPs, Koeppe and Busacca nodules.',
                recall: 'The 2019 recall listed “mutton fat KP, iris nodules, hypopyon” as granulomatous; hypopyon is the odd one out.'
            },
            {
                phase: '3. Phenylephrine contraindications',
                type: 'multi',
                question: 'When is phenylephrine (especially 10%) contraindicated or used with caution?',
                options: [
                    'Hypertension and cardiovascular disease',
                    'MAOI or tricyclic antidepressant use',
                    'Iris-fixated (iris-supported) IOLs',
                    'Narrow, occludable angles',
                    'Thyrotoxicosis; infants and frail older adults',
                    'Asthma (it is a β2 agonist)'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Check BP before and after 10%. Use 2.5% where possible.',
                recall: 'The 2019 candidate wasn’t sure about diabetes: insulin-dependent diabetes is listed as a caution for 10%.'
            },
            {
                phase: '4. Why so frequent?',
                type: 'mcq',
                question: 'Why such a frequent steroid dose and why atropine?',
                options: [
                    'Frequent prednisolone acetate reaches a therapeutic AC level quickly and controls barrier breakdown; atropine relieves spasm, prevents synechiae and stabilises the barrier.',
                    'Frequent dosing prevents the steroid response by keeping receptors saturated; atropine lowers IOP by opening the trabecular meshwork and increasing conventional outflow.',
                    'Frequent dosing is needed because the steroid kills the organism causing the uveitis; atropine increases steroid absorption through the cornea.',
                    'Frequent dosing replaces the need for any taper later; atropine constricts the pupil so that synechiae can’t form at the pupil margin.'
                ],
                answer: 0,
                explain: 'Then taper once there is a 2-step SUN improvement.'
            },
            {
                phase: '5. GP or ophthalmologist',
                type: 'match',
                question: 'Match each situation to where you send the patient (2019 panel answers).',
                pairs: [
                    { label: 'Bilateral, granulomatous or recurrent', answer: 'GP for a systemic work-up' },
                    { label: 'Intermediate/posterior involvement, monocular patient, hypopyon', answer: 'Ophthalmologist' }
                ],
                distractors: ['Nobody — manage alone indefinitely'],
                explain: 'Also refer if not improving or with severe vision impairment.'
            }
        ]
    },
    {
        id: 'r2019-pxf-quickfire',
        category: 'glaucoma',
        title: 'PXF Quick-fire: Conversion, Progression and the Scandinavian Eye',
        theme: 'Pseudoexfoliation',
        years: ['2019'],
        patient: 'Two 2019 PXF sessions (Monday and Thursday).',
        stem: 'Photo of PXF on the pupil margin. Later: a 77-year-old woman, no cataract surgery, VA 6/6, IOP 28.',
        steps: [
            {
                phase: '1. Conversion',
                type: 'mcq',
                question: '“What percentage of PXF converts to glaucoma?”',
                options: [
                    'Roughly 15% at 10 years in population data (more in some clinic series and with raised IOP); quote a range and a source.',
                    'Roughly 1% at 10 years in population data, because PXF almost never converts; quote it as negligible.',
                    'Roughly 90% at 10 years in population data, because PXF almost always converts; quote it as certain.',
                    'Roughly 50% within the first year in population data, as most convert soon after diagnosis; so quote it to the patient as immediate.'
                ],
                answer: 0,
                explain: 'Conversion risk rises with IOP and asymmetry. Monitor closely.'
            },
            {
                phase: '2. The Scandinavian eye',
                type: 'mcq',
                question: '“With Scandinavians, what can you get at the back of the eye?” and how does PXF progression compare with NTG?',
                options: [
                    'Glaucoma (PXG) and more retinal vein occlusion; PXF progresses fastest (EMGT untreated ~−3.1 dB/yr) vs NTG slowest (~−0.4).',
                    'Macular holes and retinal detachment; PXF progresses slowest (EMGT untreated ~−0.4 dB/yr) while NTG is the fastest (~−3.1 dB/yr).',
                    'Optic disc drusen and choroidal naevi; PXF and NTG progress at the same rate (EMGT untreated ~−1.3 dB/yr each).',
                    'Diabetic retinopathy and AMD; PXF doesn’t progress once diagnosed (EMGT untreated 0 dB/yr) vs NTG (~−1.3).'
                ],
                answer: 0,
                explain: 'PXF discs can look worse for a given duration because progression is faster.',
                recall: 'The 2019 candidate quoted “0.3 dB/year for NTG, 3 dB/year for PXF” and impressed the examiner.'
            },
            {
                phase: '3. 77-year-old, IOP 28',
                type: 'mcq',
                question: 'The 77-year-old woman with PXF and IOP 28 refuses surgery. What now?',
                options: [
                    'Start a PGA (if no contraindications), refer to ophthalmology (secondary glaucoma), review IOP in ~4 weeks, and warn about cataract-surgery risks.',
                    'Start timolol 0.5% QID, since PGAs don’t work in PXF and surgery is the only other option; refer only if the IOP stays above 30 mmHg at the 3-month review.',
                    'No treatment, since an IOP of 28 is normal for her age and PXF doesn’t cause glaucoma; review in 12 months and document the refusal.',
                    'Start pilocarpine 4% QID, since the miotic stops pigment and PXF material release; refer for cataract surgery to remove the source.'
                ],
                answer: 0,
                explain: 'PGA contraindications: active/past uveitis, HSV keratitis, CMO risk, pregnancy.'
            }
        ]
    }
);
