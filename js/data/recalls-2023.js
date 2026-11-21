// Cases from the 2023 therapeutics orals recall (Past Papers/2023%20Thera%20Orals%20Qs.pdf): candidates' notes
// from Monday to Thursday (examiners Lily, Nicole, Fiona, Anna, Isabelle, Rebecca and Sophia). The notes are
// written by candidates straight after their orals and contain some errors, which are corrected in the
// "Recall check" boxes.
window.CASES.push(
    {
        id: 'r2023-mk-cl',
        category: 'cornea',
        title: 'Contact Lens Wearer with a Corneal Infiltrate',
        theme: 'Bacterial Keratitis: Mono vs Fortified',
        years: ['2023'],
        patient: 'Young adult soft contact lens wearer (Monday morning with Lily and Nicole Carnt; again on Wednesday with Nicole).',
        stem: 'Red, painful eye.',
        exhibit: 'Photo: a white corneal infiltrate with marked conjunctival hyperaemia; the pupil looks slightly irregular.',
        steps: [
            {
                phase: '1. Work-up',
                type: 'multi',
                question: '“What tests would you do, and why?” Select the tests that matter here.',
                options: [
                    'VA, to grade severity and set a baseline for review',
                    'Pupils, as the pupil looks irregular (synechiae from an AC reaction)',
                    'Slit lamp with fluorescein: size, depth and location of the ulcer, the edges, satellite lesions',
                    'AC cells, flare and hypopyon (SUN grading)',
                    'IOP by a method that suits the epithelial defect (e.g. iCare or palpation), as a baseline',
                    'Gonioscopy, to rule out a secondary angle closure from the inflammation',
                    'Dilated fundus exam before starting any drops, to rule out endophthalmitis'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Gonioscopy on an ulcerated cornea risks spreading infection and adds nothing. A view of the fundus is useful if the media allow, but it shouldn’t delay treatment.',
                recall: 'Candidates were unsure why IOP matters. It is a baseline (inflammation can raise or lower it) and is needed before any later steroid. Use a disposable-tip or non-contact method over an epithelial defect.'
            },
            {
                phase: '2. Infiltrate vs ulcer',
                type: 'mcq',
                question: '“What is an infiltrate made of, and how is it different from an ulcer?”',
                options: [
                    'An infiltrate is white cells (mostly neutrophils) that have moved into the stroma from limbal vessels and tears; an ulcer is epithelial loss with stromal involvement, which stains.',
                    'An infiltrate is a colony of bacteria growing in the stroma under intact epithelium; an ulcer is that colony once it breaks through, so every infiltrate is infective until it stains.',
                    'An infiltrate is stromal oedema from endothelial pump failure under the lesion; an ulcer is the overlying epithelial loss, so an infiltrate always clears once the ulcer heals.',
                    'An infiltrate is lens-derived protein and lipid trapped in the stroma; an ulcer is the epithelium thinned over the deposit, which only stains once it is deeper than a third.'
                ],
                answer: 0,
                explain: 'A sterile infiltrate (e.g. CLPU) usually has intact or minimally staining epithelium; an infective ulcer has an epithelial defect over a dense infiltrate, often with pain, AC reaction and discharge.',
                recall: 'One candidate first said an infiltrate was “excavation of the epithelium”, then corrected themselves. The examiner nodded at “accumulation of white blood cells”.'
            },
            {
                phase: '3. MK vs abrasion',
                type: 'multi',
                question: '“How do you tell microbial keratitis from a corneal abrasion? What corneal signs?”',
                options: [
                    'A stromal infiltrate under the epithelial defect (an abrasion has clear stroma)',
                    'Defect edges that are raised or excavated, with stromal loss',
                    'Satellite lesions or more than one infiltrate',
                    'An AC reaction out of proportion to a simple scratch, or hypopyon',
                    'Mucopurulent discharge and lids stuck together',
                    'A linear defect that matches a history of a fingernail or branch'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'A linear defect with a clear history points to an abrasion. An abrasion in a lens wearer is still treated with anti-pseudomonal cover, because it can become MK.',
                recall: 'Lily pushed one candidate for “corneal signs” specifically: superficial epithelial loss vs a stromal infiltrate, plus satellite lesions.'
            },
            {
                phase: '4. Atypical differentials',
                type: 'match',
                question: '“What differentials do you want to rule out?” Match each organism to its typical clue.',
                pairs: [
                    { label: 'Acanthamoeba', answer: 'Pain out of proportion, pseudodendrites and radial perineuritis early; ring infiltrate late; tap water or swimming in lenses' },
                    { label: 'Fungal (filamentary)', answer: 'Dry, raised infiltrate with feathery edges and satellites; vegetative trauma, hot humid climate' },
                    { label: 'Pseudomonas', answer: 'Rapid, suppurative ulcer with a ground-glass surround and mucopurulent discharge; overnight lens wear' },
                    { label: 'HSV', answer: 'Dendrite with terminal bulbs; reduced corneal sensation; past cold sores' }
                ],
                distractors: ['Bilateral, small, round, white infiltrates with no stain and no pain'],
                explain: 'If the history or signs suggest Acanthamoeba or fungus, refer the same day: these need corneal scrapes and agents optometrists don’t have.'
            },
            {
                phase: '5. Treatment',
                type: 'mcq',
                critical: true,
                question: 'It is a 1.5 mm peripheral ulcer, no hypopyon, mild AC reaction. “What’s your treatment? Would it differ if they weren’t a lens wearer?”',
                options: [
                    'Stop lens wear; ciprofloxacin 0.3% q15min for 6 h, then q30min for the rest of day one including overnight, then taper; cycloplegic; review in 24 h. The same for a non-wearer.',
                    'Stop lens wear; chloramphenicol 0.5% q2h while awake for 2 days, then QID, as it covers the common lens-related organisms; cycloplegic; review in 3 days. The same for a non-wearer.',
                    'Stop lens wear; ciprofloxacin 0.3% QID for a week with a bandage contact lens; prednisolone 1% QID from day one to limit scarring; review in 1 week. A non-wearer gets chloramphenicol.',
                    'Keep wearing daily disposables; ciprofloxacin 0.3% hourly while awake for 2 days and ointment at night; no cycloplegic; review in 48 h. A non-wearer gets the same drops but QID.'
                ],
                answer: 0,
                explain: 'Monotherapy with a fluoroquinolone is as effective as fortified therapy for most small, peripheral ulcers. Lens wear raises the chance of Pseudomonas, so chloramphenicol is not enough.',
                recall: 'One candidate said “cipro QID” first and asked to change their answer; Nicole let them, and nodded at the loading dose. Know the full regimen; a QID dose for MK is a red flag.'
            },
            {
                phase: '6. Worse next day',
                type: 'mcq',
                critical: true,
                question: '“They come back the next day and it’s worse. What could be the reason, and what do you do?”',
                options: [
                    'Wrong organism (resistant, Acanthamoeba, fungal), poor adherence, or a severe ulcer from the start. Check drop use and refer the same day to a corneal unit for scrapes, culture and fortified drops.',
                    'A toxic reaction to the preserved fluoroquinolone, which is common at loading doses. Stop the ciprofloxacin, switch to preservative-free lubricants and review in another 24 h to see if it settles.',
                    'An expected first-day worsening as the bacteria die and release toxins. Continue the same regimen and add prednisolone acetate 1% QID to settle the inflammation, then review again in 48 h.',
                    'Steroid-sensitive immune rings forming around the ulcer. Keep the ciprofloxacin, add FML 0.1% QID and a bandage lens, review in 3 days, and refer only if the VA has fallen by two lines.'
                ],
                answer: 0,
                explain: 'Some worsening of the infiltrate in the first 24 h can happen, but enlarging ulcer, thinning, a new hypopyon or more pain means referral. Don’t add a steroid before the organism is controlled.'
            },
            {
                phase: '7. Fortified therapy',
                type: 'mcq',
                question: '“What will the hospital do? Why dual fortified therapy, and why two drugs?”',
                options: [
                    'Scrape for Gram stain and culture, then fortified cefazolin 5% and tobramycin 1.3% hourly, minutes apart: together they cover Gram-positives and Gram-negatives (including Pseudomonas).',
                    'Swab the lid margin for culture, then fortified ciprofloxacin and ofloxacin together: two fluoroquinolones double the dose of the same class, which overcomes most resistance.',
                    'Scrape for culture, then fortified chloramphenicol 1% and tobramycin 1.3%: chloramphenicol covers the Gram-negatives and tobramycin the Gram-positives, so the pair is synergistic.',
                    'Scrape for PCR only, then fortified vancomycin 5% and cefazolin 5%: both act on the cell wall, giving full synergy, while aminoglycosides are avoided as too toxic to the epithelium.'
                ],
                answer: 0,
                explain: 'Cefazolin (a cephalosporin, cell wall) targets Gram-positives; tobramycin (an aminoglycoside, 30S ribosome) targets Gram-negatives including Pseudomonas. Vancomycin replaces cefazolin for MRSA. Fortified drops are made up by the hospital pharmacy.',
                recall: 'A candidate described dual therapy as “fortified so it’s more strengthened”. Panels wanted the reasons: broad cover of both Gram groups at high concentration while culture is pending.'
            }
        ]
    },
    {
        id: 'r2023-poag-workup',
        category: 'glaucoma',
        title: 'First Eye Exam, Family History of Glaucoma',
        theme: 'POAG: Work-up, Target and Drug Choice',
        years: ['2023'],
        patient: '55-year-old man, first ever eye test. Mother and sister have glaucoma. Takes candesartan. Plays a lot of sport.',
        stem: 'Routine check because of his family history (asked in several sessions with Nicole, Lily and Fiona).',
        steps: [
            {
                phase: '1. Work-up',
                type: 'viva',
                question: '“What tests would you do, in order, and why?”',
                points: [
                    'History: family (who, how severe), steroids, trauma, asthma/heart, BP medication, sleep apnoea, migraine/Raynaud’s',
                    'VA and refraction; pupils (RAPD)',
                    'Slit lamp: van Herick, signs of a secondary cause (PXF, pigment, KPs, trauma)',
                    'IOP (time of day) and CCT',
                    'Gonioscopy: open or closed, PAS, pigment, angle recession, new vessels',
                    'Dilated disc assessment, then OCT RNFL/GCL and a 24-2 field (repeat to confirm)'
                ],
                explain: 'No single order is “right”, but panels like a logical sequence: history, then non-contact tests, then contact tests and dilation last. Candesartan matters: treated hypertension with nocturnal dips is a perfusion risk factor.'
            },
            {
                phase: '2. CCT 610',
                type: 'mcq',
                question: 'IOP is 22 mmHg and CCT is 610 µm. “Explain the importance of this. Would you use a correction calculator?”',
                options: [
                    'A thick cornea makes Goldmann over-read, so his true IOP may be lower; thin corneas raised risk in OHTS. Correction formulas aren’t validated, so use CCT as a risk factor, not to “correct” IOP.',
                    'A thick cornea makes Goldmann under-read, so his true IOP is above 22; correct it with a calculator (about 2 mmHg per 50 µm) and from now on treat to the corrected value rather than the reading.',
                    'A thick cornea was itself a risk factor for glaucoma in OHTS, independent of the reading, so 610 µm raises his risk and he should be treated now, even though his measured pressure is normal.',
                    'CCT only matters when planning refractive surgery. Goldmann is calibrated for every corneal thickness, so the 22 mmHg reading is accurate as it stands and correction calculators aren’t used.'
                ],
                answer: 0,
                explain: 'Goldmann was calibrated for about 520 µm. In OHTS a thinner cornea predicted conversion. Note the CCT and use it in the risk picture.',
                recall: 'A candidate was asked, “Would you use an IOP–CCT correcting calculator in practice?” The expected answer: no, they aren’t validated; use CCT as part of risk assessment.'
            },
            {
                phase: '3. Sleep apnoea',
                type: 'mcq',
                question: '“How would you ask someone if they have sleep apnoea, since most patients don’t know?”',
                options: [
                    'Ask about snoring, a partner seeing pauses in breathing, waking unrefreshed, daytime sleepiness or dozing while driving, morning headaches (STOP-BANG), then refer to the GP for a sleep study.',
                    'Ask whether they have ever been diagnosed with sleep apnoea or use a CPAP machine; if not, assume they don’t have it, as screening questions are unreliable and the GP is unlikely to act on them.',
                    'Ask whether they have trouble falling asleep, take sleeping tablets or wake very early; insomnia is the main feature of sleep apnoea, and the GP can then be asked to prescribe a sleeping tablet.',
                    'Ask about leg cramps, night sweats and passing urine at night, which are the specific symptoms of sleep apnoea; a fasting blood test arranged through the GP then confirms the diagnosis in most people.'
                ],
                answer: 0,
                explain: 'STOP-BANG: Snoring, Tiredness, Observed apnoea, high blood Pressure, BMI >35, Age >50, Neck circumference, male Gender. OSA is associated with NTG and NAION.'
            },
            {
                phase: '4. The field',
                type: 'reveal',
                text: 'Gonioscopy open to ciliary body band, no excess pigment or PXF. IOP 26 / 24 mmHg. The 24-2 shows a superior nasal step and early superior arcuate defect, repeatable. OCT: inferotemporal RNFL thinning matching the field.'
            },
            {
                phase: '5. Where is the damage?',
                type: 'mcq',
                question: '“What part of the nerve would be affected with a superior nasal step?”',
                options: [
                    'The inferotemporal rim and RNFL: superior field is served by inferior retina, and nasal step defects come from arcuate fibres meeting at the temporal raphe.',
                    'The superotemporal rim and RNFL: the field maps directly onto the same half of the disc, and nasal steps come from the papillomacular bundle on the temporal side.',
                    'The nasal rim: nasal field defects come from the nasal side of the disc, which is why a nasal step is often the first sign of damage in a crowded disc.',
                    'The inferonasal rim and RNFL: the field is inverted top to bottom but not side to side, so a nasal step comes from fibres that enter the nasal half of the disc.'
                ],
                answer: 0,
                explain: 'Fields are inverted and reversed relative to the retina. Arcuate fibres don’t cross the horizontal raphe, which is why glaucomatous defects respect the horizontal midline.'
            },
            {
                phase: '6. Target and drug',
                type: 'mcq',
                question: '“What treatment, what target, and from which paper?”',
                options: [
                    'Latanoprost 0.005% one drop nocte (no contraindications), aiming for at least a 25% reduction, based on EMGT (25% lower IOP cut progression from 62% to 45%); review in 4–6 weeks.',
                    'Latanoprost 0.005% one drop nocte, aiming for a 20% reduction based on OHTS (which showed treating early glaucoma halves progression); review in 6 months once the full effect is reached.',
                    'Timolol 0.5% one drop BD first line, aiming for under 18 mmHg at every visit based on AGIS (which compared drops with surgery in early glaucoma); review in 4–6 weeks.',
                    'Latanoprost 0.005% one drop BD, aiming for a 50% reduction based on EMGT (each 1 mmHg cuts risk by half); review in 1 week, since latanoprost reaches its peak effect within days.'
                ],
                answer: 0,
                explain: 'OHTS was ocular hypertension (20% reduction, conversion 9.5% → 4.4% at 5 years). AGIS supports a lower target in advanced disease. PGA peak effect takes a few weeks, hence 4–6 week review.',
                recall: 'Panels asked “why 25%?” in several sessions: EMGT. One candidate quoted OHTS for treating glaucoma, which is the wrong trial.'
            },
            {
                phase: '7. Herpes and sport',
                type: 'mcq',
                critical: true,
                question: 'He has had cold sores and HSV keratitis in the past, and is an active athlete. “Now what?”',
                options: [
                    'Avoid the PGA (history of HSV keratitis); a β-blocker would blunt his exercise heart rate, so offer SLT, or a CAI or α-agonist, checking their contraindications.',
                    'Keep the PGA, as only an active dendrite contraindicates it; a β-blocker is fine in athletes because it improves exercise tolerance by slowing the heart, so add timolol if needed.',
                    'Switch to timolol 0.5% BD, since a past HSV history rules out every other topical class; advise him to stop competitive sport while on the drops to avoid bradycardia.',
                    'Switch to pilocarpine 2% QID, since it is safe after HSV and doesn’t affect the heart; SLT isn’t suitable, as it doesn’t work in men under 60.'
                ],
                answer: 0,
                explain: 'PGAs have been linked to HSV keratitis recurrence. β-blockers reduce exercise tolerance and can cause fatigue and breathlessness. LiGHT: SLT first line is as good as drops, and about three-quarters were drop-free at 3 years.',
                recall: 'Fiona went through it step by step: PGA (but he’s had herpes), BB (but he’s an active athlete), then SLT.'
            },
            {
                phase: '8. Review',
                type: 'multi',
                question: '“How would you tell if there has been progression on the field?”',
                options: [
                    'New defects in previously normal points, confirmed on repeat',
                    'Deepening of an existing defect (look at the raw threshold and pattern deviation values)',
                    'Enlargement of an existing defect',
                    'Trend analysis: VFI or MD slope over time (e.g. GPA)',
                    'A change in the false-positive rate between tests',
                    'A single test that is worse than the last'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Progression must be repeatable. Reliability indices tell you whether to trust a test, not whether disease has progressed.'
            }
        ]
    },
    {
        id: 'r2023-aac',
        category: 'glaucoma',
        title: 'Red Eye with a Mid-Dilated Pupil',
        theme: 'Acute Angle Closure',
        years: ['2023'],
        patient: 'Older adult with a red, painful left eye; right eye quiet (Monday and Tuesday sessions; one panel asked about a bilateral attack).',
        stem: 'Blurred vision, haloes, headache and nausea.',
        exhibit: 'Photo: red left eye with a mid-dilated pupil and a hazy cornea; right eye quiet.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: '“What are your differentials, specific to a red eye with a mid-dilated pupil?”',
                options: [
                    'Acute angle closure',
                    'Neovascular glaucoma',
                    'Posner–Schlossman syndrome (or other uveitic IOP spike)',
                    'Pharmacological mydriasis (e.g. an OTC decongestant drop or a scopolamine patch)',
                    'Traumatic mydriasis',
                    'Acute anterior uveitis with a miotic pupil'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Uveitis usually gives a small pupil from sphincter spasm. One 2023 panel asked which pharmacy drop dilates a pupil: naphazoline (an α-agonist decongestant) can do it in a narrow angle.'
            },
            {
                phase: '2. Gonioscopy?',
                type: 'mcq',
                question: '“Why is gonioscopy contraindicated now? What can you do instead?”',
                options: [
                    'The oedematous cornea gives a poor view and contact is painful, and it delays treatment. Use van Herick and the shadow test, and do gonio in the fellow eye; gonio the affected eye once the cornea clears.',
                    'Pressing the lens on the eye can push the lens forward and cause a rebound spike, so gonio is never safe in angle closure. Use OCT of the angle in both eyes and avoid gonioscopy for the rest of their care.',
                    'The coupling gel blocks the trabecular meshwork and makes the attack worse. Use a non-coupling lens (Zeiss) instead, which is safe in an acute attack, and do it before any drops are given.',
                    'It isn’t contraindicated: the angle must be confirmed closed for 180° before you are allowed to give any first-aid drops under the OBA guideline, so do it first in both eyes.'
                ],
                answer: 0,
                explain: 'Later on, indentation gonioscopy is also used to tell appositional from synechial closure and can itself lower IOP.'
            },
            {
                phase: '3. First aid',
                type: 'mcq',
                critical: true,
                question: '“How would you begin treatment?”',
                options: [
                    'Call the ophthalmologist; check contraindications; timolol 0.5%, apraclonidine or brimonidine, then brinzolamide, minutes apart; prednisolone acetate 1%; acetazolamide 500 mg via the GP or ED.',
                    'Call the ophthalmologist; pilocarpine 4% every 5 minutes for an hour first, as breaking the block is the priority; then latanoprost with timolol; acetazolamide 250 mg prescribed by you; recheck in 2 h.',
                    'Call the GP; latanoprost 0.005% stat as the strongest drop, then timolol 0.5% and atropine 1% for the pain; acetazolamide 500 mg prescribed by you; IOP rechecked by the GP the next morning.',
                    'Send to ED without any treatment, since under the OBA guideline optometrists can’t use IOP-lowering drops in an emergency; advise them to lie flat and take paracetamol for the pain on the way.'
                ],
                answer: 0,
                explain: 'Recheck IOP every 15–30 minutes. Optometrists can’t prescribe oral acetazolamide; it comes via the GP, ED or ophthalmologist. Pilocarpine 1–2% is added once IOP is below about 40 and the ophthalmologist agrees.',
                recall: 'One candidate said “Do you need a GP for Diamox?” was asked: yes, it isn’t on the optometry list. Another said every drug they named was followed by “contraindications?”, so know them for each.'
            },
            {
                phase: '4. Contraindications',
                type: 'match',
                question: '“Asked me about the contraindications for every single drug I gave.” Match each drug to a key contraindication.',
                pairs: [
                    { label: 'Timolol', answer: 'Asthma or severe COPD, bradycardia or heart block, uncompensated heart failure' },
                    { label: 'Brimonidine / apraclonidine', answer: 'MAOI use; young children' },
                    { label: 'Acetazolamide (oral)', answer: 'Sulfonamide allergy, severe renal or hepatic impairment, low potassium or sodium' },
                    { label: 'Brinzolamide / dorzolamide', answer: 'Sulfonamide allergy, severe renal impairment; caution with a compromised endothelium or graft' }
                ],
                distractors: ['Active ocular inflammation or past HSV keratitis'],
                explain: 'Active inflammation and past HSV keratitis are PGA cautions.',
                recall: 'Candidates listed “herpetic” and “corneal graft” as acetazolamide contraindications. A corneal graft is a caution for topical CAIs (endothelium); herpes is a PGA caution.'
            },
            {
                phase: '5. The missing class',
                type: 'mcq',
                question: '“You’ve left out a class of anti-glaucoma drugs. Why?” And “why isn’t pilocarpine effective above 40?”',
                options: [
                    'PGAs act slowly (peak after many hours) and are pro-inflammatory, so add little acutely. Above about 40 mmHg the iris sphincter is ischaemic and can’t respond to pilocarpine.',
                    'PGAs are contraindicated in all glaucoma emergencies because they raise IOP for the first hour. Above about 40 mmHg pilocarpine is absorbed too quickly to act on the sphincter.',
                    'PGAs can only be used after a laser iridotomy. Above about 40 mmHg pilocarpine causes the ciliary body to shut down aqueous production completely, which is dangerous.',
                    'PGAs need a prescription from an ophthalmologist in an emergency. Above about 40 mmHg pilocarpine is fully effective, but it is held back to keep the pupil dilated for the fundus exam.'
                ],
                answer: 0,
                explain: 'Pilocarpine also moves the lens–iris diaphragm forward, which can worsen some lens-related closures; use 1–2%, not 4%.'
            },
            {
                phase: '6. Rural and still high',
                type: 'multi',
                question: '“You’re in a rural town and the IOP is still high after the drops. What else can you do?”',
                options: [
                    'Keep in contact with the ophthalmologist and arrange urgent transfer',
                    'Repeat the topical aqueous suppressants as advised',
                    'Corneal indentation (with a gonio lens or cotton bud) to push aqueous into the angle',
                    'Lie the patient supine so the lens falls back',
                    'Oral glycerol or IV mannitol through the hospital or GP, if no contraindication',
                    'Dilate the pupil with tropicamide to pull the iris out of the angle'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Hyperosmotics (glycerol, mannitol) are given by medical staff; watch diabetes and heart or kidney failure. Dilating can worsen pupil-block closure.'
            },
            {
                phase: '7. Definitive care',
                type: 'mcq',
                question: '“What will the ophthalmologist do, long term? LPI in both eyes or one? How likely is the other eye to have an attack?”',
                options: [
                    'LPI in both eyes once the cornea clears (or lens extraction): untreated, about half of fellow eyes have an attack within 5–10 years. Then monitor IOP, angle and disc long term.',
                    'LPI in the affected eye only: the fellow eye has a normal IOP, and its risk of an attack is under 5% over 10 years, so it is simply watched without any laser or other treatment.',
                    'SLT in both eyes to open the meshwork, then stop all drops: the fellow eye carries little risk once the first eye has been lasered, because the attack itself resets the angle.',
                    'Trabeculectomy in the affected eye straight away, as LPI doesn’t work after an acute attack; the fellow eye is only at raised risk if the patient is a hyperope, so it is left alone.'
                ],
                answer: 0,
                explain: 'Many eyes still need long-term drops after an attack (PAS, damaged meshwork). EAGLE favours clear lens extraction for PAC with high IOP or PACG in people 50 and over.',
                recall: 'Another candidate quoted 75% for the fellow eye; published figures range from about 40% to 80% untreated over 5–10 years. Any of these makes the point.'
            },
            {
                phase: '8. Both eyes at once',
                type: 'mcq',
                critical: true,
                question: '“What causes a bilateral angle-closure attack?”',
                options: [
                    'Usually drugs: topiramate or sulfonamides (ciliochoroidal effusion, not pupil block), or anticholinergics and adrenergics (nebulisers, antihistamines, antidepressants); or dilating both eyes.',
                    'Usually a pituitary tumour pressing on both cavernous sinuses, which raises the episcleral venous pressure in both eyes at once; drugs almost never cause bilateral attacks, so they needn’t be asked about.',
                    'Usually trauma from rubbing both eyes hard, which pushes the iris back into the angle; it is treated with pilocarpine in both eyes, since a bilateral attack is always a pupil-block mechanism.',
                    'Usually long-term PGA use, which thickens the ciliary body over years until both angles close together; stopping the PGA is the definitive treatment and no laser is needed afterwards.'
                ],
                answer: 0,
                explain: 'Topiramate-induced closure is not pupil block: stop the drug, use cycloplegia and steroids, and avoid pilocarpine and LPI (which don’t help).'
            }
        ]
    },
    {
        id: 'r2023-hsv',
        category: 'cornea',
        title: 'Dendrite, then Stromal Haze',
        theme: 'HSV Epithelial → Stromal Keratitis',
        years: ['2023'],
        patient: 'Adult with a red, watery, photophobic eye (asked in most sessions; Nicole’s case on Monday and Wednesday).',
        stem: 'One eye irritated for a few days.',
        exhibit: 'Photo: a branching, brightly staining fluorescein lesion with terminal bulbs, paracentral, 1–2 mm, no stromal involvement.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: '“Describe the pertinent finding. What are your differentials?”',
                options: [
                    'HSV epithelial keratitis (true dendrite)',
                    'HZO pseudodendrite',
                    'Acanthamoeba pseudodendrite (early, lens wearer)',
                    'Healing abrasion or epithelial defect',
                    'Contact lens–related (e.g. SEAL or toxic) keratopathy',
                    'Bacterial MK with a round infiltrate'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Bacterial MK gives a round infiltrate with a defect, not a branching line. Also check for skin vesicles and corneal sensation.'
            },
            {
                phase: '2. HSV or HZO staining',
                type: 'mcq',
                question: '“What’s the difference between HSV and HZO lesions with fluorescein? What do pseudodendrites stain with?”',
                options: [
                    'HSV: an ulcer with terminal bulbs; the base stains with fluorescein, the edges with lissamine green. HZO: raised, “stuck-on” lesions with tapered ends that stain poorly with fluorescein.',
                    'HSV: raised plaques with tapered ends that stain poorly with fluorescein. HZO: an ulcer with terminal bulbs whose base stains brightly. Lissamine green stains both the same, so it can’t help.',
                    'Both stain identically with fluorescein, so only PCR can tell them apart. Zoster is then told apart only by age, since HSV keratitis doesn’t occur over 60 and zoster doesn’t occur under 60.',
                    'HSV: a geographic ulcer that never branches. HZO: a branching ulcer with terminal bulbs. Rose bengal is used routinely in Australia and stains only the HSV lesion, not the zoster one.'
                ],
                answer: 0,
                explain: 'Rose bengal stings and isn’t easy to get in Australia; lissamine green stains the same devitalised cells and mucus.'
            },
            {
                phase: '3. Treatment and review',
                type: 'mcq',
                question: '“What treatment? Review periods? What do you expect at the reviews?”',
                options: [
                    'Aciclovir 3% ointment 5×/day (or ganciclovir gel) in the affected eye ± debridement; no steroid; review in 1–2 days, expecting it to shrink, then weekly until healed.',
                    'Aciclovir 3% ointment 5×/day in both eyes to stop spread to the other eye; prednisolone 1% QID to limit scarring; review in 1 week, expecting full healing by then.',
                    'Oral aciclovir 400 mg BD alone for 12 months; no topical antiviral, as it is toxic to the epithelium; review in 1 month, expecting the dendrite to have cleared.',
                    'Chloramphenicol 0.5% QID to prevent secondary infection while the dendrite heals by itself, as HSV is self-limiting; review in 1 week, expecting it to be gone.'
                ],
                answer: 0,
                explain: 'Taper or stop the antiviral once healed (aciclovir toxicity). Check corneal sensation and IOP. Treat one eye only unless both are affected.'
            },
            {
                phase: '4. Stromal haze',
                type: 'mcq',
                critical: true,
                question: '“The epithelium has healed but there is some stromal haze. How would you treat? Would you require antiviral cover?”',
                options: [
                    'Immune stromal keratitis: a topical steroid (e.g. prednisolone acetate 1% QID) tapered slowly over weeks, with oral aciclovir 400 mg BD (or valaciclovir 500 mg daily) as cover.',
                    'Recurrent epithelial disease: restart aciclovir 3% ointment 5×/day for another 2 weeks, with no steroid, since any steroid after HSV keratitis is contraindicated for life.',
                    'Scarring only: no treatment is needed, since stromal haze after a dendrite never affects vision and will always clear within a month without any drops at all.',
                    'Immune stromal keratitis: a topical steroid QID for 1 week, then stop abruptly; no antiviral cover, since steroids only reactivate HSV while the epithelium is broken.'
                ],
                answer: 0,
                explain: 'HEDS: topical steroid with antiviral cover speeds resolution of stromal keratitis. Taper very slowly (often to once daily or less) to avoid rebound. Monitor IOP on the steroid.',
                recall: 'One candidate chose Flarex because “as an acetate it penetrates better”. Fluorometholone acetate does penetrate better than FML alcohol, but prednisolone acetate 1% is the standard choice for stromal keratitis.'
            },
            {
                phase: '5. HEDS',
                type: 'mcq',
                question: '“The patient wants to make sure this doesn’t happen again. What do you advise, and what did HEDS show?”',
                options: [
                    'Oral aciclovir 400 mg BD (or valaciclovir 500 mg daily) for 12 months: in HEDS, any ocular HSV recurrence fell from 32% to 19%, and stromal recurrence from 28% to 14%.',
                    'Oral valaciclovir 1 g TDS for life: in HEDS, life-long prophylaxis prevented all recurrences, while stopping at 12 months led to recurrence in nearly every patient within a year.',
                    'Topical aciclovir ointment nightly for 12 months: in HEDS, nightly ointment halved the recurrences, and the oral form gave no benefit over placebo in any of the groups.',
                    'No prophylaxis: in HEDS, oral aciclovir didn’t reduce recurrences; it only helped by stopping epithelial disease from turning into stromal disease during the first episode.'
                ],
                answer: 0,
                explain: 'Prophylaxis suits recurrent or stromal disease; consider longer for frequent recurrences. HEDS also found oral aciclovir did not prevent stromal disease developing during an epithelial episode.',
                recall: 'A candidate said valaciclovir 1 g daily for prophylaxis; the usual dose is 500 mg daily. Another said “for life” — prophylaxis is usually 12 months, longer if recurrences continue.'
            },
            {
                phase: '6. Corneal sensation',
                type: 'mcq',
                question: '“How do you assess corneal sensitivity, and what would the patient’s symptoms be over time?”',
                options: [
                    'Before any anaesthetic, touch the cornea with a wisp of tissue or floss (or a Cochet–Bonnet) and compare eyes. Reduced sensation means milder symptoms with recurrences, and neurotrophic risk.',
                    'After proxymetacaine, touch the cornea with a cotton bud and ask about pain. Sensation is raised in HSV, so symptoms get steadily worse with each episode as the nerve becomes more sensitive.',
                    'Measure the blink reflex to a bright light in each eye. Sensation is normal in HSV and only reduced in zoster, so symptoms stay the same between episodes and don’t change over time.',
                    'Ask the patient to rate their pain from 1 to 10. Sensation can only be measured by an ophthalmologist with special equipment, and symptoms always increase with each recurrence.'
                ],
                answer: 0,
                explain: 'Reduced sensation after HSV or HZO makes later episodes less painful and puts the eye at risk of neurotrophic keratopathy.'
            }
        ]
    },
    {
        id: 'r2023-hzo',
        category: 'cornea',
        title: 'Pseudodendrite and a Forehead Rash',
        theme: 'Herpes Zoster Ophthalmicus',
        years: ['2023'],
        patient: 'Older adult; the panel shows a dendritic-looking lesion, then a photo of the patient’s face (Monday and Wednesday sessions).',
        stem: 'Red, uncomfortable eye. Later photo: vesicles over the forehead on one side, respecting the midline.',
        steps: [
            {
                phase: '1. HSV vs HZO',
                type: 'multi',
                question: '“How do you differentiate HZO from HSV?” Select the features that point to zoster.',
                options: [
                    'Pseudodendrites: raised, tapered ends, no terminal bulbs, stain poorly with fluorescein',
                    'A painful dermatomal vesicular rash that stops at the midline',
                    'Older age or immunosuppression',
                    'Hutchinson’s sign (vesicles on the tip or side of the nose)',
                    'Prodrome of tingling or pain in the area days before the rash',
                    'Recurrent episodes several times a year in the same eye'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Frequent recurrence is typical of HSV. Zoster usually happens once, though ocular inflammation can recur or become chronic.'
            },
            {
                phase: '2. Latency and the midline',
                type: 'mcq',
                question: '“What’s the actual difference in latency? Why does HZO respect the vertical midline?”',
                options: [
                    'Both lie latent in sensory ganglia (the trigeminal ganglion for the eye). HSV reactivates often in small areas; VZV usually once along the whole ophthalmic division, which serves one side only.',
                    'HSV lies latent in the trigeminal ganglion; VZV lies in the dorsal root of the spinal cord, so HZO comes from a spinal nerve, and the rash respects the midline because the cord serves one side.',
                    'HSV lies latent in the cornea itself; VZV lies in the trigeminal ganglion. The rash stops at the midline because the virus can’t cross the bridge of the nose, where the skin is much thicker.',
                    'Neither virus becomes latent; both are caught again from other people each time. The rash stops at the midline because the immune response is stronger on the dominant side of the face.'
                ],
                answer: 0,
                explain: 'Reactivation follows the dermatome of one nerve. Waning cell-mediated immunity with age is why zoster is a disease of older or immunosuppressed people.',
                recall: 'The 2023 notes say HZO is latent in “the dorsal root of the spinal cord”. For the trunk, VZV lies in dorsal root ganglia, but for HZO it is the trigeminal (Gasserian) ganglion, the same ganglion as HSV.'
            },
            {
                phase: '3. Hutchinson’s sign',
                type: 'mcq',
                question: '“What does Hutchinson’s sign actually indicate?”',
                options: [
                    'Involvement of the nasociliary branch, which also supplies the globe, so ocular involvement is much more likely.',
                    'Involvement of the maxillary division, so the eye is spared and no eye review is needed after the rash heals.',
                    'A secondary bacterial infection of the nasal vesicles, which needs oral antibiotics before any antiviral.',
                    'Spread of the virus across the midline to the other eye, so both eyes need topical antivirals as well.'
                ],
                answer: 0,
                explain: 'The absence of Hutchinson’s sign doesn’t rule out ocular involvement: examine every HZO patient.'
            },
            {
                phase: '4. Treatment',
                type: 'mcq',
                critical: true,
                question: '“What’s your treatment?”',
                options: [
                    'Oral antiviral within 72 h of rash onset (valaciclovir 1 g TDS, famciclovir 500 mg TDS or aciclovir 800 mg 5×/day, 7 days), adjusted for kidney function; treat eye inflammation as needed.',
                    'Topical aciclovir 3% ointment 5×/day alone for 14 days; oral antivirals are needed only if the cornea is involved, and starting within 72 hours of the rash makes no difference to the outcome.',
                    'Oral prednisolone 50 mg daily for a week first to reduce the pain, then an oral antiviral only if new vesicles appear; topical steroids are also needed in all HZO from the first day.',
                    'Oral aciclovir 400 mg BD for 12 months, as for recurrent HSV; the 72-hour window doesn’t apply to zoster, so there is no rush and a routine GP appointment in a week or two is fine.'
                ],
                answer: 0,
                explain: 'Treatment after 72 h is still worth giving if new vesicles are appearing or the eye is involved. Optometrists can prescribe some oral antivirals where endorsed; otherwise arrange through the GP the same day.'
            },
            {
                phase: '5. Day 3, rural town',
                type: 'mcq',
                question: '“What if they present on day 3 and are in a rural town?”',
                options: [
                    'Start (or arrange) the oral antiviral that day, since it is near the end of the window; examine the eye fully and arrange ophthalmology or telehealth review if the eye is involved.',
                    'Send them by ambulance to the nearest capital-city ED, since the 72-hour window has passed and only IV antivirals given in hospital can still prevent post-herpetic neuralgia at this stage.',
                    'Don’t treat: after 72 hours antivirals have no effect at all, so the patient needs only simple analgesia and a routine review in a month, whatever the eye shows.',
                    'Give topical aciclovir only, since the oral form must be prescribed by an ophthalmologist, and an ophthalmologist can’t be reached from a rural town in time to help.'
                ],
                answer: 0,
                explain: 'The 72-hour window is for the best effect on rash and pain; ocular disease is a reason to treat even later.',
                recall: 'A candidate said “send emergency since it’s >72 h”. Day 3 is still within the window, and no ED transfer is needed if the GP can start treatment.'
            },
            {
                phase: '6. Post-herpetic neuralgia',
                type: 'mcq',
                question: '“What is post-herpetic neuralgia?”',
                options: [
                    'Pain in the affected dermatome lasting beyond about 90 days after the rash; commoner with age. Early antivirals reduce it; the GP can use amitriptyline or gabapentinoids, and the vaccine prevents zoster.',
                    'Itch over the healed rash for about a week, more common in children; it is a side effect of the antiviral tablets and stops once the course is finished, so no treatment or follow-up is ever needed.',
                    'Loss of corneal sensation after the rash, which makes the eye feel numb; it is permanent in everyone over 50 and is only ever treated with lubricants, never with any other medication.',
                    'A second attack of shingles on the other side of the face, more common in younger patients; it is prevented by taking oral aciclovir every day for life after the first episode.'
                ],
                answer: 0,
                explain: 'Shingrix (recombinant zoster vaccine) is recommended for older adults and the immunocompromised to reduce zoster and PHN.'
            }
        ]
    },
    {
        id: 'r2023-preseptal',
        category: 'allergy',
        title: 'Swollen Lid in a Child',
        theme: 'Preseptal vs Orbital Cellulitis',
        years: ['2023'],
        patient: 'Young boy brought in by a parent (Tuesday afternoon, Lily, Fiona and Sophia; again on Thursday).',
        stem: 'Swollen, red left upper lid.',
        exhibit: 'Photo: diffuse swelling and redness of the left upper lid, with some periorbital swelling below; the eye can’t be seen well.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: '“Can you tell me some differentials?” “Anything else?”',
                options: [
                    'Preseptal cellulitis',
                    'Orbital cellulitis',
                    'Insect bite',
                    'Hordeolum or chalazion',
                    'Dacryocystitis or dacryoadenitis',
                    'Contact or allergic dermatitis',
                    'Acute angle closure'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Lily smiled at “insect bite”: it was the one candidates kept missing.'
            },
            {
                phase: '2. Telling them apart',
                type: 'match',
                question: 'Match each differential to its distinguishing feature.',
                pairs: [
                    { label: 'Insect bite', answer: 'A puncture mark; itch more than pain; an inflammatory reaction that peaks and settles rather than spreading' },
                    { label: 'Hordeolum or chalazion', answer: 'A focal, nodular swelling at the lid margin or tarsus, not diffuse lid oedema' },
                    { label: 'Dacryocystitis', answer: 'Tender swelling over the lacrimal sac, below the medial canthal tendon; pus on pressure' },
                    { label: 'Dacryoadenitis', answer: 'Swelling of the lateral upper lid over the lacrimal gland, giving an S-shaped lid' }
                ],
                distractors: ['Proptosis, painful eye movements and reduced VA'],
                explain: 'One candidate placed dacryocystitis at the lacrimal gland; it is the lacrimal sac, medially. Proptosis, painful or restricted eye movements and reduced VA point to orbital cellulitis.'
            },
            {
                phase: '3. Orbital signs',
                type: 'multi',
                critical: true,
                question: '“How do you differentiate preseptal from orbital? How can you assess the optic nerve?”',
                options: [
                    'VA',
                    'Pupils (RAPD)',
                    'Eye movements, and pain on eye movement',
                    'Proptosis',
                    'Colour vision or red-cap desaturation',
                    'Fever, malaise, recent sinusitis',
                    'Corneal staining pattern'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Orbital cellulitis means infection behind the septum (orbital fat, muscles): reduced VA, RAPD, restricted or painful movements, proptosis. Children often have sinusitis as the source.'
            },
            {
                phase: '4. Management',
                type: 'mcq',
                critical: true,
                question: 'VA, motility, pupils and red-cap tests are normal. “How would you treat this case?”',
                options: [
                    'Preseptal cellulitis: same-day GP (or ED for a young or unwell child) for oral amoxicillin–clavulanate, or cefalexin if penicillin-allergic; review in 24–48 h; ED at once if orbital signs appear.',
                    'Preseptal cellulitis: topical chloramphenicol ointment QID and warm compresses, since the infection is limited to the lid; review in 1 week, and start oral antibiotics only if it hasn’t improved.',
                    'Preseptal cellulitis: oral prednisolone via the GP to bring the swelling down, then an antibiotic only if a swab comes back positive; review in 1 week to see whether steroid alone has worked.',
                    'Preseptal cellulitis: no treatment, since it always settles on its own within a few days in children; reassure the parent, and review in a month only if the swelling comes back again.'
                ],
                answer: 0,
                explain: 'Usual organisms are Staphylococcus aureus and Streptococcus pyogenes (and Haemophilus in unvaccinated children). Topical antibiotics don’t reach the tissue.',
                recall: 'A candidate said “amoxicillin 400 mg QID”. Most S. aureus produce β-lactamase, so plain amoxicillin isn’t reliable; Australian guidelines use amoxicillin–clavulanate (or cefalexin), via the GP.'
            },
            {
                phase: '5. The drug',
                type: 'mcq',
                question: '“Can you explain what drug amoxicillin is? Coverage? Mechanism? Would it work for this pathogen?”',
                options: [
                    'A β-lactam penicillin that blocks cell wall (peptidoglycan) synthesis so bacteria lyse; mainly Gram-positive. Clavulanate blocks the β-lactamase most S. aureus make.',
                    'A macrolide that blocks the 50S ribosome and stops protein synthesis; mainly Gram-negative cover. It covers S. aureus well on its own, so clavulanate isn’t needed.',
                    'A fluoroquinolone that blocks DNA gyrase; broad Gram-negative cover. It works poorly in children, so cefalexin is used instead for any child with cellulitis.',
                    'An aminoglycoside that binds the 30S ribosome; mainly Gram-negative cover. It can only be given IV, so preseptal cellulitis always needs a hospital admission.'
                ],
                answer: 0,
                explain: 'Cefalexin (a first-generation cephalosporin) is also a β-lactam and works the same way. Gram-positive bacteria have a thick peptidoglycan wall, so cell-wall agents suit them.'
            },
            {
                phase: '6. If it were orbital',
                type: 'mcq',
                critical: true,
                question: '“What would you do if this was orbital cellulitis, and what are the concerns?”',
                options: [
                    'Send to ED immediately for IV antibiotics and imaging: it can cause optic nerve compression, cavernous sinus thrombosis, meningitis or a brain abscess.',
                    'Start oral amoxicillin–clavulanate via the GP and review in 48 h: orbital cellulitis is managed the same way as preseptal unless the vision has dropped.',
                    'Refer to an ophthalmologist routinely within a week: the main concern is scarring of the lid, which is reduced by early surgery once the swelling settles.',
                    'Give topical ciprofloxacin hourly and review the next day: the main concern is the cornea, which is exposed by the proptosis and can ulcerate overnight.'
                ],
                answer: 0,
                explain: 'Long-term advice after preseptal cellulitis: hand and lid hygiene, avoid rubbing, treat underlying sinus or skin infections.'
            }
        ]
    },
    {
        id: 'r2023-chiasm-ica',
        category: 'neuro',
        title: 'A Lesion at the Side of the Chiasm',
        theme: 'Lateral Chiasmal Compression',
        years: ['2023'],
        patient: 'No patient: Fiona draws the visual pathway and points to the left side of the optic chiasm (Monday afternoon).',
        stem: '“If there was a lesion in this area, draw me the visual field defect you would see.” Later panels asked where a lesion from the internal carotid would sit.',
        steps: [
            {
                phase: '1. The field',
                type: 'mcq',
                question: 'A lesion presses on the left lateral edge of the chiasm. What field defect do you expect?',
                options: [
                    'A left nasal field defect respecting the vertical midline, from the uncrossed temporal fibres of the left eye; if both sides are compressed, a binasal defect.',
                    'A right homonymous hemianopia, because the lesion is on the left of the chiasm, so the right half of both fields is lost and the defect respects the vertical midline.',
                    'A bitemporal hemianopia, because any lesion at the chiasm damages the crossing fibres first, whichever side it presses from.',
                    'A left temporal field defect respecting the vertical midline, from the crossing nasal fibres of the left eye, sparing the right eye completely.'
                ],
                answer: 0,
                explain: 'Crossing (nasal retina) fibres sit centrally in the chiasm; uncrossed (temporal retina) fibres run along its lateral edges. Temporal retina sees nasal field.',
                recall: 'A candidate drew a right-field defect in the left eye, was asked “would you expect any nasal involvement?”, then drew a right homonymous hemianopia. A lateral chiasmal lesion spares the crossing fibres and gives an ipsilateral nasal defect.'
            },
            {
                phase: '2. The cause',
                type: 'mcq',
                question: '“What sort of lesion can cause this? What blood supply runs up there?”',
                options: [
                    'The internal carotid runs beside the chiasm: an aneurysm or an enlarged, atherosclerotic (calcified, ectatic) carotid can compress it from the side.',
                    'The cavernous sinus veins drain up into the chiasm: a sinus thrombosis pushes into the centre of the chiasm and compresses the crossing fibres.',
                    'The posterior cerebral artery supplies the lateral chiasm: an occlusion infarcts the uncrossed fibres, which is the usual cause of a binasal defect.',
                    'The ophthalmic artery runs over the top of the chiasm: a dissection of it causes a sudden binasal defect, which then recovers fully within hours.'
                ],
                answer: 0,
                explain: 'Pituitary tumours compress the chiasm from below and centrally (bitemporal). Binasal defects are more often from glaucoma, disc drusen or other optic nerve or retinal disease, so check those first.'
            },
            {
                phase: '3. Next step',
                type: 'mcq',
                critical: true,
                question: 'You find a field defect that respects the vertical midline and you suspect a compressive lesion. What do you do?',
                options: [
                    'Repeat the field to confirm, check pupils, colour vision and discs, and refer urgently for MRI/MRA (via the GP or neurology, or ED if acute) with a letter describing the field.',
                    'Treat it as glaucoma, since nasal defects are typical of glaucoma; start a PGA and review the field in 6 months to see whether the defect progresses before doing anything else.',
                    'Reassure the patient, since defects respecting the vertical midline are almost always artefacts of the test; repeat the field in 12 months and act only if it is the same.',
                    'Refer routinely to an ophthalmologist within 3 months, since compressive lesions grow slowly and early imaging doesn’t change management or the visual outcome.'
                ],
                answer: 0,
                explain: 'A defect respecting the vertical midline is neurological until proven otherwise. A carotid aneurysm can rupture; sudden headache with a new defect is an emergency.'
            }
        ]
    },
    {
        id: 'r2023-advanced-arg',
        category: 'glaucoma',
        title: 'Advanced Field Loss after a Football Injury',
        theme: 'Angle-Recession Glaucoma',
        years: ['2023'],
        patient: '60-year-old man. Hit in the left eye by a football 20 years ago (Monday afternoon, Fiona and Lily).',
        stem: 'Right eye field: most of the inferior hemifield lost with a cluster of loss superiorly. IOP R 30, L 24 mmHg; the left field shows similar but milder loss.',
        exhibit: 'Right 24-2: dense inferior arcuate loss crossing towards fixation and a superior paracentral cluster; MD about −18 dB.',
        steps: [
            {
                phase: '1. Describe and grade',
                type: 'mcq',
                question: '“Describe the field and grade it.” (Lily: “Don’t worry about the indices, just describe the field.”)',
                options: [
                    'Reliable; a dense inferior arcuate defect respecting the horizontal midline, with a superior paracentral cluster near fixation; MD −18 dB, so advanced (severe) glaucomatous loss.',
                    'Reliable; a right homonymous hemianopia respecting the vertical midline with macular sparing; MD −18 dB, so a moderate defect most likely from an occipital lobe stroke.',
                    'Unreliable, since an MD of −18 dB can’t occur with fixation preserved; repeat the field before describing it, and in the meantime grade it as early glaucomatous loss.',
                    'Reliable; a dense central scotoma with sparing of the whole periphery; MD −18 dB, so only a mild defect, most likely from a macular cause such as age-related macular degeneration.'
                ],
                answer: 0,
                explain: 'Hodapp–Parrish–Anderson: early MD better than −6 dB, moderate −6 to −12, severe worse than −12 (or threatening fixation). Mills staging calls −12 to −20 “advanced”.',
                recall: 'Another 2023 candidate graded an MD of −18 dB as “severe” and was told “advanced”. Different staging systems use different names; say which system you are using.'
            },
            {
                phase: '2. Differentials',
                type: 'multi',
                question: '“What conditions could cause this field defect?”',
                options: [
                    'Glaucoma',
                    'NAION or arteritic AION',
                    'Branch retinal artery or vein occlusion',
                    'Optic disc drusen',
                    'Optic neuritis (past)',
                    'Occipital lobe infarct'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'An occipital lesion gives a homonymous defect respecting the vertical midline in both eyes, not an arcuate one.'
            },
            {
                phase: '3. Why is one eye worse?',
                type: 'mcq',
                question: 'IOP R 30, L 24. “What could cause this glaucoma?” Then: “He was hit in the eye 20 years ago. What’s your work-up?”',
                options: [
                    'Asymmetric disease suggests a secondary cause: PXF, pigment dispersion, uveitic, or angle recession given the trauma. Work-up: gonioscopy (both eyes, compare), IOP, CCT, disc and OCT, field.',
                    'Asymmetric disease suggests normal-tension glaucoma, since the higher eye is the one with less damage. Work-up: a 24-hour BP monitor and carotid Doppler only, as gonioscopy adds nothing.',
                    'Asymmetric disease is always due to the patient sleeping on one side. Work-up: ask about sleep position and repeat IOP in the other position; no other tests are needed.',
                    'Asymmetric disease suggests a pituitary tumour. Work-up: urgent MRI before any eye tests, since gonioscopy and OCT can’t help with a compressive cause.'
                ],
                answer: 0,
                explain: 'Note the injured eye here was the left. Panels expect you to gonio both eyes, since recession is easiest to see by comparing the two.',
                recall: 'A candidate forgot gonioscopy and OCT until prompted. Gonio is the key test after any blunt trauma.'
            },
            {
                phase: '4. Gonioscopy',
                type: 'mcq',
                question: '“What would you expect to see on gonioscopy?”',
                options: [
                    'An irregularly wide ciliary body band compared with the other eye, torn iris processes, a whiter scleral spur, sometimes PAS; glaucoma risk rises with more than 180° recessed.',
                    'A narrower ciliary body band than in the uninjured eye, with the iris pushed forward against the meshwork for 360°, and a Sampaolesi line sitting just above Schwalbe’s line.',
                    'Dense, even pigment over the whole meshwork in both eyes, with a Krukenberg spindle on the cornea and spoke-like transillumination defects in the mid-peripheral iris.',
                    'New vessels crossing the scleral spur onto the meshwork, with a fibrovascular membrane that closes the angle over a few weeks, as in diabetic neovascular glaucoma.'
                ],
                answer: 0,
                explain: 'Angle recession is a tear between the longitudinal and circular muscles of the ciliary body. Glaucoma can come years later from scarring of the damaged meshwork.'
            },
            {
                phase: '5. Target IOP',
                type: 'mcq',
                question: '“What would you aim for? What if he were 85?”',
                options: [
                    'With advanced loss near fixation, a low target: under about 18 at every visit (AGIS), often 30–40% or more lower. At 85, weigh life expectancy, health and treatment burden.',
                    'A 20% reduction, as in OHTS, which is enough for any stage of glaucoma. At 85 the same 20% target applies, since age makes no difference at all to how glaucoma is managed.',
                    'A 25% reduction, as in EMGT, which halved progression in advanced glaucoma. At 85 treatment should simply stop, as glaucoma doesn’t progress in people over the age of 80.',
                    'Any IOP under 21 mmHg, which is the normal range and protects all optic nerves. At 85 a higher target of 25 mmHg is used, since older nerves tolerate pressure better.'
                ],
                answer: 0,
                explain: 'AGIS: eyes with IOP under 18 at all visits (mean about 12 mmHg) had almost no average field progression. EMGT was early glaucoma.',
                recall: 'One candidate quoted “OHTS, 25% over 5 years for a 50% reduction in progression” (that is EMGT, and the numbers were off), then moved to AGIS when Fiona asked if 25% was enough for this field. She smiled at AGIS.'
            },
            {
                phase: '6. Treatment',
                type: 'mcq',
                question: '“What would your treatment be? What surgery? What drops?”',
                options: [
                    'PGA first (uveoscleral outflow bypasses the damaged meshwork), then add suppressants; collaborative care; trabeculectomy with antimetabolite or a tube, as SLT and MIGS work poorly here.',
                    'SLT first, since it works best after trauma because the recessed angle gives the laser easy access to the meshwork; then pilocarpine 2% QID, which opens the recessed angle further.',
                    'Pilocarpine 2% QID first, since miotics pull the iris away from the recessed angle; then MIGS (iStent), the most effective surgery in angle recession because it bypasses the scar.',
                    'Timolol alone, because PGAs are contraindicated in any eye that has had trauma; no surgery is possible, because a trabeculectomy can’t be done after a blunt injury to the eye.'
                ],
                answer: 0,
                explain: 'Miotics can paradoxically raise IOP in angle recession because they reduce uveoscleral outflow, which these eyes depend on.',
                recall: 'A candidate offered trabeculectomy and MIGS. MIGS that work through the meshwork or Schlemm’s canal are of little use when the meshwork is scarred.'
            },
            {
                phase: '7. The other eye',
                type: 'mcq',
                question: '“Is the patient then at risk of glaucoma in the other eye?”',
                options: [
                    'Yes: angle-recession glaucoma carries a high rate of glaucoma in the fellow eye (about half in some series), suggesting a predisposition, so monitor both eyes for life.',
                    'No: angle-recession glaucoma is purely mechanical, so the uninjured eye has the same risk as the general population and only needs routine checks every few years.',
                    'Only if both eyes were hit in the same injury; otherwise the fellow eye can be discharged from glaucoma review once the injured eye’s IOP has been brought under control.',
                    'Only if the fellow eye later develops a hyphema of its own; angle recession never affects the other eye’s outflow, so no extra monitoring of that eye is needed.'
                ],
                answer: 0,
                explain: 'Most recessed angles never develop glaucoma; those that do may have been predisposed. Long-term review applies to any eye with recession.'
            }
        ]
    },
    {
        id: 'r2023-pxf',
        category: 'glaucoma',
        title: 'Routine Check with Mottled Angle Pigment',
        theme: 'Pseudoexfoliation',
        years: ['2023'],
        patient: '67-year-old woman, routine eye check (Tuesday with Lily and Isabelle; Wednesday with Anna and Nicole). IOP 19 and 14 mmHg.',
        stem: 'Photo of material on the anterior lens capsule; later a gonioscopy photo.',
        exhibit: 'Slit lamp: grey-white flaky material on the anterior lens capsule in a target pattern. Gonioscopy: patchy, mottled trabecular pigment and a wavy pigment line anterior to Schwalbe’s line.',
        steps: [
            {
                phase: '1. Other signs',
                type: 'multi',
                question: '“What other signs would you see in PXF?”',
                options: [
                    'Flakes on the pupil margin',
                    'Peripupillary iris transillumination and loss of the pupillary ruff',
                    'Poor dilation',
                    'Phacodonesis or a subluxed lens (weak zonules)',
                    'Patchy trabecular pigment and a Sampaolesi line',
                    'Mid-peripheral spoke-like iris transillumination defects'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Mid-peripheral spoke-like defects are pigment dispersion. PXF defects are at the pupil margin.'
            },
            {
                phase: '2. Pathophysiology',
                type: 'mcq',
                question: '“What is the pathophysiology? What is the material made of?”',
                options: [
                    'An age-related extracellular matrix disorder: fibrillar material with elastic-fibre parts (fibrillin, elastin) builds up on lens, zonules, iris and meshwork; linked to LOXL1, and found systemically.',
                    'A degeneration of the lens capsule itself, which peels apart into layers after years of heat exposure; the material is capsule, found only in the eye, and is caused by working near furnaces.',
                    'A build-up of iris pigment rubbed off onto the zonules in younger myopes; the material is melanin granules from the iris pigment epithelium, and the condition burns out with age.',
                    'An inflammatory disease in which white cells settle on the lens and angle; the material is fibrin left by a chronic uveitis, and it clears completely with a course of topical steroids.'
                ],
                answer: 0,
                explain: 'True exfoliation (capsular delamination from heat, e.g. glassblowers) is a different condition. PXF material is also found in skin, heart and blood vessels.'
            },
            {
                phase: '3. Sampaolesi’s line',
                type: 'mcq',
                question: '“Where’s Sampaolesi’s line? How do you tell PXF from PDS on gonio?”',
                options: [
                    'A wavy pigment line on or just anterior to Schwalbe’s line. PXF: patchy, uneven pigment in an older patient. PDS: a dense, even pigment band in a young myopic man.',
                    'A pigment line running along the scleral spur. PXF: dense, even pigment in a young myope. PDS: patchy pigment in an older woman, with flakes on the pupil margin.',
                    'Another name for Schwalbe’s line itself. PXF and PDS look exactly the same on gonioscopy, so they can only be told apart with an OCT scan of the angle.',
                    'A line of new vessels across the meshwork. PXF: vessels in the inferior angle only. PDS: vessels in every quadrant, with a Krukenberg spindle on the iris.'
                ],
                answer: 0,
                explain: 'Sampaolesi’s line is seen in PXF and in PDS, and in other heavily pigmented angles.',
                recall: 'A candidate called Sampaolesi’s line “Schwalbe’s line”, and talked about Shafer’s sign (pigment in the anterior vitreous, seen with a retinal tear) when asked where else pigment shows. Anna told them to review it.'
            },
            {
                phase: '4. Risk',
                type: 'mcq',
                question: '“How many people with PXF get glaucoma? Why are they treated more aggressively?”',
                options: [
                    'The commonest identifiable cause of open-angle glaucoma; about 15% develop raised IOP or glaucoma within 10 years. IOP runs higher and swings more, and damage progresses faster.',
                    'Fewer than 1% ever develop glaucoma, so PXF only needs checking every 5 years; when glaucoma does occur, it progresses more slowly than POAG and responds better to drops.',
                    'Every patient with PXF already has glaucoma at diagnosis, so all are treated straight away, whatever the IOP, disc and field show, and the target is always a 50% reduction.',
                    'About half develop angle closure within a year, so every patient needs a laser iridotomy at diagnosis, whatever the angle looks like, before any drops are considered.'
                ],
                answer: 0,
                explain: 'In EMGT, PXF was a risk factor for progression. Zonular weakness also matters for cataract surgery: tell the surgeon.'
            },
            {
                phase: '5. Management',
                type: 'mcq',
                critical: true,
                question: 'She has PXG. “What treatment? What if she’s had HSV keratitis? Would SLT work?”',
                options: [
                    'PGA first if no contraindication; with past HSV keratitis use timolol 0.5% BD instead (no asthma, bradycardia or heart block). SLT works well in PXF, though the effect can wane.',
                    'PGA first, whatever her history, since HSV keratitis is only a contraindication to steroids. SLT doesn’t work in PXF, because the flakes block the laser from reaching the meshwork.',
                    'Pilocarpine 2% QID first, since it pulls the flakes out of the meshwork; with past HSV, add a PGA at night. SLT is contraindicated in PXF because the zonules are weak.',
                    'Timolol 0.5% at night only, since it works best while she sleeps; with past HSV, switch to a PGA instead. SLT only works in POAG and has no effect in any secondary glaucoma.'
                ],
                answer: 0,
                explain: 'Pilocarpine can worsen the flake–iris rubbing and causes posterior synechiae in PXF.',
                recall: 'Asked “does timolol have a nocturnal effect?”: very little, because aqueous production is already low at night. That is why timolol is given in the morning if once daily.'
            }
        ]
    },
    {
        id: 'r2023-pds',
        category: 'glaucoma',
        title: 'Young Myope with Pigment on the Cornea',
        theme: 'Pigment Dispersion Syndrome',
        years: ['2023'],
        patient: '29-year-old myopic man, first visit, history of high IOP readings. Plays a lot of sport. Dark brown irides (asked on Tuesday, Wednesday and Thursday by several panels).',
        stem: 'Several photos: cornea, iris (with an optic section), lens and a gonioscopy view.',
        exhibit: 'Slit lamp: a vertical band of pigment on the central endothelium; mid-peripheral, slit-like iris transillumination defects; posterior bowing of the iris on the optic section; pigment on the posterior lens capsule. Gonio: a dense, even pigment band on the meshwork.',
        steps: [
            {
                phase: '1. Signs',
                type: 'multi',
                question: '“Describe the pertinent signs.” Which belong to PDS?',
                options: [
                    'Krukenberg spindle on the corneal endothelium',
                    'Mid-peripheral, radial (spoke-like) iris transillumination defects',
                    'Dense, homogeneous trabecular pigment',
                    'Posteriorly bowed (concave) peripheral iris',
                    'Pigment on the zonules or posterior lens surface (Zentmayer ring)',
                    'Flakes on the pupil margin and anterior capsule'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Flakes are PXF. The classic triad is the spindle, the mid-peripheral TIDs and the dense meshwork pigment.',
                recall: 'A candidate placed the Krukenberg spindle on the lens, then in the AC. It is on the corneal endothelium, vertical because of AC convection currents.'
            },
            {
                phase: '2. Pathophysiology',
                type: 'mcq',
                question: '“Explain the pathophysiology. Why is it a syndrome? Is the iris bowed forward or back?”',
                options: [
                    'The peripheral iris bows back (reverse pupillary block) and rubs on the zonules, freeing pigment; it’s a syndrome as it’s a set of signs, and becomes pigmentary glaucoma with nerve damage.',
                    'The peripheral iris bows forwards against the meshwork, as in angle closure, and pigment is squeezed out of the iris stroma; it is called a syndrome because it always leads to glaucoma.',
                    'The lens capsule sheds pigment as it ages, which then settles on the iris; it is a syndrome because it affects the whole body, as PXF does, and it is linked to the LOXL1 gene.',
                    'Inflammatory cells carry pigment from the ciliary body into the AC; it is called a syndrome because it responds to steroids, and the iris stays flat throughout the condition.'
                ],
                answer: 0,
                explain: 'In reverse pupillary block, blinking and accommodation push aqueous into the AC, which can’t flow back, so AC pressure exceeds posterior chamber pressure and the iris bows back.'
            },
            {
                phase: '3. Conversion and spikes',
                type: 'mcq',
                question: '“What percentage convert to glaucoma? What raises the risk? When do you expect IOP spikes?”',
                options: [
                    'About 10% at 5 years and 15% at 15 years in population studies; higher in men, high myopes and those with high IOP at diagnosis. Spikes follow vigorous exercise or dilation.',
                    'All PDS patients develop glaucoma within 5 years, so risk factors don’t matter; spikes only happen at night while lying flat, so they can’t be detected in the clinic.',
                    'About 1% ever convert, mainly older women with hyperopia; spikes occur only with reading, because accommodation closes the angle by pupil block as in angle closure.',
                    'About 75% convert within a year, so every patient is treated at once; spikes come with nausea and vomiting, as in angle closure, and need emergency first aid.'
                ],
                answer: 0,
                explain: 'Older series (e.g. Farrar) quoted about 35%; population studies give lower figures. Either way, the risk factors and the exercise link are what panels want.',
                recall: 'A candidate guessed 60% and was told 37.5%; another was asked whether they’d expect vomiting (no: that is angle closure).'
            },
            {
                phase: '4. Pre-perimetric',
                type: 'mcq',
                question: 'The left disc shows an inferior notch but the field is full. “What could be the cause? Can glaucoma happen without a field defect?”',
                options: [
                    'Yes: pre-perimetric glaucoma. Structural loss (RNFL, GCL) can come before field loss; expect a matching OCT defect and watch for a superior arcuate or nasal step.',
                    'No: glaucoma needs a field defect by definition, so the notch must be a normal variant, and the patient can be discharged back to routine two-yearly eye checks.',
                    'No: an isolated notch with a full field always means a compressive lesion, so refer for an urgent MRI before doing any further glaucoma work-up.',
                    'Yes, but only in angle closure; in open-angle disease the field always goes first, so this notch must be a different disease from his PDS.'
                ],
                answer: 0,
                explain: 'An inferior notch matches a superior field defect. A 10-2 or SITA-Faster repeat may pick up early central loss.'
            },
            {
                phase: '5. Treatment and cosmesis',
                type: 'mcq',
                question: 'IOP 28 with an early defect. He worries about cosmesis. “What would you give, and would his irides darken?”',
                options: [
                    'Latanoprost 0.005% nocte (25%, EMGT). Lash growth, periorbital darkening and fat loss can occur; iris darkening shows most in hazel or green irides, hardly in dark brown. SLT is an option.',
                    'Latanoprost 0.005% nocte. Iris darkening is worst in dark brown irides and fades once the drop is stopped, so warn him but go ahead; SLT doesn’t work in patients under 40 years old.',
                    'Timolol 0.5% BD first, as PGAs are contraindicated in PDS because they increase pigment release; SLT is contraindicated in PDS because the pigment absorbs too much energy.',
                    'Pilocarpine 2% QID, since its cosmetic side effects are minimal and it stops the iris rubbing on the zonules; PGAs only darken blue irides, which he doesn’t have.'
                ],
                answer: 0,
                explain: 'Iris darkening is permanent. SLT in heavily pigmented angles needs lower energy to avoid an IOP spike.'
            },
            {
                phase: '6. Second line',
                type: 'mcq',
                question: '“If the PGA is contraindicated, would you give a young active man a β-blocker? What about a miotic?”',
                options: [
                    'A β-blocker blunts exercise heart rate (fatigue, breathlessness), so a CAI, α-agonist or SLT suit better. Miotics stop the rubbing but cause brow ache and blur, and detachment risk in myopes.',
                    'β-blockers are ideal in young active men, as they lower blood pressure during exercise and so protect the nerve; miotics are first line in PDS and carry no particular risk in myopes.',
                    'β-blockers are contraindicated in everyone under 40, whatever their health; miotics are never used in PDS because they make the pigment release worse by pulling on the zonules.',
                    'β-blockers and miotics act the same way, by reducing aqueous production, so in practice they are interchangeable and equally suitable for a young athlete with pigment dispersion.'
                ],
                answer: 0,
                explain: 'Pilocarpine is rarely used for PDS now. LPI flattens the iris but hasn’t been shown to prevent glaucoma.',
                recall: 'Asked “what are the risks of miotics in myopes?” — retinal detachment (traction from ciliary contraction), plus induced myopia in a young patient.'
            },
            {
                phase: '7. Age',
                type: 'mcq',
                question: '“How would the picture differ in a 29-year-old and a 50-year-old?”',
                options: [
                    'With age the lens thickens and pushes the iris forward, so rubbing stops (“burnout”): less pigment, IOP may settle, TIDs fill in, and the inferior angle clears (pigment reversal).',
                    'With age the iris bows further back and rubs harder on the zonules, so the 50-year-old has more transillumination defects, more angle pigment and a higher IOP than the 29-year-old.',
                    'There is no difference with age, since PDS signs stay the same for life, so the patient’s age doesn’t change your findings, your diagnosis or your management.',
                    'With age the pigment turns into PXF material, so a 50-year-old with PDS will have flakes on the lens and pupil margin instead of a Krukenberg spindle on the cornea.'
                ],
                answer: 0,
                explain: 'Glaucoma damage that has already happened remains, so a burnt-out PDS can be confused with NTG.'
            }
        ]
    },
    {
        id: 'r2023-aau',
        category: 'uveitis',
        title: 'One White Eye, One Red Eye with Grade 3 Cells',
        theme: 'Acute Anterior Uveitis',
        years: ['2023'],
        patient: 'Adult with a unilateral red, painful, photophobic eye (Tuesday with Lily and Isabelle; Thursday with Lily).',
        stem: 'Photo of both eyes: one white, one red with circumlimbal flush. A later panel showed fine keratic precipitates on the endothelium.',
        exhibit: 'Photo: diffuse fine white keratic precipitates on the corneal endothelium (slit beam).',
        steps: [
            {
                phase: '1. Work-up',
                type: 'multi',
                question: '“What’s your work-up?” “Why do you check pupils?”',
                options: [
                    'VA',
                    'Pupils: a small or irregular pupil from spasm or posterior synechiae; RAPD would point elsewhere',
                    'Cornea: rule out keratitis (no infiltrate or ulcer), look for KPs',
                    'AC cells and flare, graded with SUN',
                    'IOP (often low, but can be raised)',
                    'Dilated fundus exam for vitritis, retinitis or CMO',
                    'Gonioscopy before dilation in every case'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Gonio is useful if the IOP is up or synechiae are suspected, but isn’t mandatory. MK vs uveitis: MK has an infiltrate and epithelial defect, uveitis has a clear cornea.'
            },
            {
                phase: '2. Findings',
                type: 'reveal',
                text: 'Cornea clear apart from fine KPs. AC grade 3+ cells and flare. Angle open. Lids normal. Posterior segment clear after dilation. IOP 12 / 14 mmHg. First episode.'
            },
            {
                phase: '3. Treatment',
                type: 'mcq',
                question: '“What’s your management?” Then “why Pred Forte and not Flarex?”',
                options: [
                    'Prednisolone acetate 1% hourly while awake, review in 24–48 h, taper as cells settle; a cycloplegic. Pred Forte is more potent and penetrates better than fluorometholone.',
                    'Fluorometholone 0.1% hourly while awake, review in a week; no cycloplegic. Flarex is preferred, since it is as strong as Pred Forte and carries no risk of raising the IOP.',
                    'Prednisolone acetate 1% QID for 2 days, then stop; atropine 1% daily for a month. Pred Forte is chosen only because it is cheaper than Flarex, not because it is stronger.',
                    'Loteprednol 0.5% QID, review in 1 week; a cycloplegic only if the patient complains of pain. Loteprednol is the strongest topical steroid available in Australia.'
                ],
                answer: 0,
                explain: 'Taper over 4–6 weeks; stopping too fast causes rebound. Check IOP for a steroid response.',
                recall: 'One candidate started Flarex hourly, was probed about why not Pred Forte, and switched. Use the strongest penetrating steroid for 3+ cells.'
            },
            {
                phase: '4. Cycloplegia',
                type: 'multi',
                question: '“How does cycloplegia help?” (The panel prompted: what if the pupil were irregular?)',
                options: [
                    'Relieves pain from ciliary spasm',
                    'Prevents posterior synechiae, and can break fresh ones',
                    'Stabilises the blood–aqueous barrier, reducing flare',
                    'Reduces photophobia',
                    'Lowers IOP by opening the angle',
                    'Speeds the clearance of cells by itself, so steroid can be stopped sooner'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Atropine 1% (once or twice daily) for severe AAU, homatropine 2% or cyclopentolate 1% for milder cases. Cyclopentolate can be used in the clinic to break fresh synechiae.'
            },
            {
                phase: '5. Past herpes',
                type: 'mcq',
                question: '“What if they have a history of herpetic eye disease?”',
                options: [
                    'Still treat with steroid, but look for herpetic uveitis (raised IOP, sectoral iris atrophy, low corneal sensation) and arrange oral antiviral cover via the GP while on steroid.',
                    'Don’t use any steroid at all; treat with a cycloplegic alone and wait for the uveitis to settle, since a steroid will always reactivate HSV in anyone who has had herpetic eye disease.',
                    'Use topical aciclovir ointment alone, since all uveitis in someone with past herpes is herpetic, and a steroid would make it worse by letting the virus replicate.',
                    'Use the steroid at half strength and half frequency; a past herpes history makes no other difference to the drugs you choose, the review interval or the work-up.'
                ],
                answer: 0,
                explain: 'Herpetic anterior uveitis often has a raised IOP (trabeculitis), unlike typical AAU. Avoid PGAs if IOP needs lowering.'
            },
            {
                phase: '6. Systemic review',
                type: 'viva',
                question: '“What questions would you ask to check systemic associations? When would you refer to the GP?”',
                points: [
                    'Back pain and morning stiffness that eases with exercise (ankylosing spondylitis, HLA-B27)',
                    'Joint pain or swelling, psoriasis or other rash',
                    'Bowel symptoms (Crohn’s, ulcerative colitis)',
                    'Urinary or genital symptoms, recent gastro or STI (reactive arthritis); sexual history (syphilis)',
                    'Cough, breathlessness, night sweats, weight loss (sarcoid, TB); mouth or genital ulcers (Behçet’s)',
                    'Refer for work-up if recurrent, bilateral, granulomatous, with posterior involvement, or the review of systems is positive'
                ],
                explain: 'A first, unilateral, non-granulomatous episode with a negative review of systems doesn’t usually need blood tests. Many panels ask for a mnemonic-style review of systems.'
            }
        ]
    },
    {
        id: 'r2023-mgd',
        category: 'allergy',
        title: 'Capped Glands and Lid Telangiectasia',
        theme: 'Meibomian Gland Dysfunction',
        years: ['2023'],
        patient: 'Adult with burning, gritty eyes, worse later in the day (Tuesday morning).',
        stem: 'Photo of the lower lid.',
        exhibit: 'Photo: capped meibomian gland orifices, thickened lid margin and telangiectasia along the lower lid.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: '“Differentials?”',
                options: [
                    'Meibomian gland dysfunction (posterior blepharitis)',
                    'Ocular rosacea',
                    'Anterior (staphylococcal or seborrhoeic) blepharitis',
                    'Demodex blepharitis',
                    'Aqueous-deficient dry eye (often coexists)',
                    'Acute dacryocystitis'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Telangiectasia with MGD should make you look at the face for rosacea (flushing, papules, rhinophyma).'
            },
            {
                phase: '2. Work-up and first treatment',
                type: 'mcq',
                question: '“Work-up, and how would you treat? How will you know it’s better at the next visit?”',
                options: [
                    'Symptom score, TBUT, staining, meniscus or Schirmer, gland expression; warm compresses 10 min BD, lid massage and hygiene, lipid lubricants; review in 4–6 weeks on the same measures.',
                    'Schirmer test only, since it is the definitive test for MGD; chloramphenicol ointment QID to the lids for 2 weeks; review in 1 week, judging improvement on the Schirmer result alone.',
                    'Corneal topography and pachymetry to rule out keratoconus; punctal plugs inserted straight away; review in 6 months, judging improvement on the patient’s best-corrected VA alone.',
                    'No tests are needed; start oral doxycycline straight away, since warm compresses don’t work in MGD; review in 2 weeks, checking only for a photosensitive rash from the tablets.'
                ],
                answer: 0,
                explain: 'Treatment takes weeks; set expectations. Meibography or LipiView may help but aren’t essential.'
            },
            {
                phase: '3. Not improving',
                type: 'mcq',
                question: '“What would you do if it wasn’t getting better?”',
                options: [
                    'Check compliance and technique; add a short mild steroid course (e.g. FML 0.1% QID, tapering over 1–2 weeks); consider in-office expression, IPL or thermal pulsation.',
                    'Start prednisolone acetate 1% hourly for a month, since stronger steroids work faster on gland inflammation and carry no IOP risk when the problem is in the lids.',
                    'Stop all treatment for a month, since warm compresses make the glands block more if used for too long, then restart the same regimen afterwards.',
                    'Refer for surgical removal of the meibomian glands, since MGD that hasn’t responded within 4 weeks can only be treated by surgery to the lid margin.'
                ],
                answer: 0,
                explain: 'Check IOP on any steroid course. Treat Demodex if present (tea tree products).'
            },
            {
                phase: '4. Steroid contraindicated',
                type: 'mcq',
                question: '“If they’re contraindicated for a steroid (past HSV keratitis), what else could you give?”',
                options: [
                    'Oral doxycycline via the GP at an anti-inflammatory dose (e.g. 50–100 mg daily for weeks); azithromycin instead in pregnancy, children under 8, or if doxycycline isn’t tolerated.',
                    'Oral doxycycline prescribed by you at 200 mg daily for life; it is safe in pregnancy and in young children, which is why it is always preferred over azithromycin for MGD.',
                    'Topical ciprofloxacin hourly for 2 weeks to sterilise the lid margin; oral antibiotics have no role in MGD because the glands themselves are never infected.',
                    'Oral prednisolone via the GP, since only topical steroids are contraindicated after HSV keratitis, and oral steroids carry no risk of reactivating the virus.'
                ],
                answer: 0,
                explain: 'Doxycycline: take with a full glass of water, sitting upright; photosensitivity; avoid in pregnancy and under 8 years (teeth). Topical ciclosporin is another steroid-sparing option.',
                recall: 'The candidate’s dose was “doxycycline 50 mg twice daily for 1–2 weeks then 25 mg once daily”. The study notes use a similar regimen; doses vary, but know that it is a sub-antimicrobial, anti-inflammatory course through the GP.'
            }
        ]
    },
    {
        id: 'r2023-vkc',
        category: 'allergy',
        title: 'Boy with Trantas Dots',
        theme: 'Vernal Keratoconjunctivitis',
        years: ['2023'],
        patient: '11-year-old boy with eczema; itchy, watery eyes every spring (Tuesday sessions).',
        stem: 'Photo of the limbus.',
        exhibit: 'Photo: gelatinous limbal papillae with prominent white Horner–Trantas dots and conjunctival hyperaemia; cornea clear.',
        steps: [
            {
                phase: '1. Describe and grade',
                type: 'mcq',
                question: '“Explain the image. How would you grade severity?”',
                options: [
                    'Limbal VKC with Horner–Trantas dots (eosinophils and epithelial debris); grade by symptoms, tarsal papillae and cornea: moderate, active limbal disease, no corneal involvement.',
                    'Phlyctenulosis with a limbal nodule of lymphocytes from a staphylococcal reaction; grade by the number of nodules: severe here, since more than one nodule is present at the limbus.',
                    'Pinguecula with calcified deposits at the nasal and temporal limbus; grade by size: mild here, since the deposits don’t reach the cornea and the eye is otherwise quiet.',
                    'Adenoviral conjunctivitis with limbal follicles; grade by the type of discharge: moderate here, since the eye is watery rather than purulent and the cornea is still clear.'
                ],
                answer: 0,
                explain: 'Evert the upper lid for giant (cobblestone) papillae in tarsal VKC. Corneal involvement (punctate keratitis, shield ulcer, plaque) makes it severe.'
            },
            {
                phase: '2. Shield ulcer',
                type: 'mcq',
                question: '“What is a shield ulcer?”',
                options: [
                    'A sterile, oval epithelial defect in the upper cornea from toxic mediators (e.g. major basic protein) of the tarsal papillae; a plaque of mucus and fibrin can form and stop healing.',
                    'An infected ulcer from Staphylococcus in the lid margin, sitting at the inferior limbus, which needs fortified antibiotics in hospital and is unrelated to the allergic disease.',
                    'A thinning of the peripheral cornea from long-term steroid use, which needs a bandage contact lens and stopping all the drops the patient has been using.',
                    'A raised scar left after a dendritic ulcer has healed in an atopic child; it is permanent, has no effect on vision and needs no treatment or follow-up.'
                ],
                answer: 0,
                explain: 'Shield ulcers need a steroid plus a prophylactic antibiotic and an ophthalmology referral; a plaque may need debridement.'
            },
            {
                phase: '3. Treatment',
                type: 'mcq',
                question: '“How would you treat?”',
                options: [
                    'Avoid allergens, cold compresses, PF lubricants; olopatadine 0.1% BD through the season; a pulse of prednisolone acetate 1% (e.g. 2-hourly, tapered over 1–2 weeks); ciclosporin to spare steroid.',
                    'Olopatadine 0.2% QID alone; steroids are never used in children, so VKC flares are managed with antihistamines and cold compresses only, however severe the disease becomes over the season.',
                    'Prednisolone acetate 1% QID continuously all year round to stop the flares coming back; antihistamines and mast cell stabilisers don’t work in VKC, so they aren’t used.',
                    'Chloramphenicol 0.5% QID and an oral antihistamine; VKC is a bacterial condition that flares each spring because pollen carries bacteria onto the eye.'
                ],
                answer: 0,
                explain: 'Children are more prone to steroid response, so keep steroid courses short and monitor IOP.',
                recall: 'A candidate prescribed “Patanol 0.2% BD”. In Australia Patanol is olopatadine 0.1% BD. They also added Cromofresh, and the panel steered them back to just Patanol.'
            },
            {
                phase: '4. Steroid response',
                type: 'mcq',
                critical: true,
                question: '“What time do you expect a steroid response?”',
                options: [
                    'Usually 2–6 weeks after starting (sooner in children and with potent steroids), so check IOP at about 2 weeks.',
                    'Within 24 hours of the first drop, so check IOP the next day and stop the steroid if it has risen at all.',
                    'Only after 6 months of continuous use, so short pulses of steroid never need an IOP check during the course.',
                    'Never in children under 12, because their trabecular meshwork can’t respond to steroids until after puberty.'
                ],
                answer: 0,
                explain: 'Children respond more often and faster than adults. Loteprednol and FML carry a lower risk than prednisolone acetate.',
                recall: 'A candidate said 24 hours; the answer was 2 weeks.'
            },
            {
                phase: '5. Afterwards',
                type: 'mcq',
                question: 'Two weeks later it has fully resolved. “What would you do next?”',
                options: [
                    'Taper and stop the steroid; continue olopatadine through the season and start it 2 weeks before next spring; avoid allergens; warn it will likely recur and usually eases after puberty.',
                    'Continue prednisolone acetate 1% QID for the rest of the year to prevent a recurrence next spring; no antihistamine or mast cell stabiliser is needed while he stays on the steroid.',
                    'Stop all the drops and discharge him, since VKC doesn’t come back once it has been treated with a steroid, so no plan, warning or follow-up for next spring is needed.',
                    'Refer for surgery to remove the limbal papillae, which prevents the condition returning and avoids the need for any drops in future seasons.'
                ],
                answer: 0,
                explain: 'VKC often has a family history of atopy; associated conditions include eczema, asthma and hay fever. Watch for keratoconus from rubbing.'
            }
        ]
    },
    {
        id: 'r2023-hyphema',
        category: 'uveitis',
        title: 'Hyphema after a Ball to the Eye',
        theme: 'Traumatic Hyphema and Angle Recession',
        years: ['2023'],
        patient: 'Wednesday: an adult in their 30s after blunt trauma (Anna). Thursday: an 8-year-old boy hit by a soccer ball (Fiona and Rebecca).',
        stem: 'Photo: blood layered in the inferior anterior chamber.',
        exhibit: 'Photo: a layered hyphema filling about a third of the anterior chamber, with conjunctival injection.',
        steps: [
            {
                phase: '1. Grade and source',
                type: 'mcq',
                question: '“Grade it. How do you know? Where does the blood come from?”',
                options: [
                    'Grade 1 (layered blood up to a third of the AC). It comes from torn vessels at the iris root or ciliary body face, the same tear that causes angle recession.',
                    'Grade 3, since any layered blood counts as grade 3. It comes from the conjunctival vessels and has tracked into the AC through a small wound at the limbus.',
                    'Grade 2 (blood filling the whole AC). It comes from the retina and has moved forward through the pupil, so the fundus must be checked first.',
                    'Microhyphaema, since there is no fluid level. It comes from the limbal vessels, which leak after a blow, and has no link to angle recession.'
                ],
                answer: 0,
                explain: 'Grades: microhyphaema (suspended cells), 1 ≤⅓, 2 ⅓–½, 3 >½, 4 total (“eight-ball”).'
            },
            {
                phase: '2. Differentials and causes',
                type: 'multi',
                question: '“What systemic disease can cause a hyphema?” Select the non-traumatic causes.',
                options: [
                    'Sickle cell disease or trait',
                    'Anticoagulants, antiplatelets or a bleeding disorder',
                    'Iris new vessels (diabetes, CRVO)',
                    'An IOL chafing the iris (UGH syndrome)',
                    'Juvenile xanthogranuloma or iris tumours (children)',
                    'Allergic conjunctivitis'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Always ask about blood thinners. Sickle cell matters because even modest IOP rises damage the nerve.',
                recall: 'A candidate said sickle cell and was told “it should be hypertension”. Sickle cell is the classic systemic association; hypertension isn’t a recognised cause of hyphema, though anticoagulants for heart disease are.'
            },
            {
                phase: '3. Work-up',
                type: 'multi',
                question: '“Work-up?” (8-year-old boy, soccer ball.)',
                options: [
                    'VA and IOP',
                    'AC cells and flare (traumatic uveitis)',
                    'Eye movements, and orbital floor (diplopia, restricted up-gaze, infraorbital numbness)',
                    'Lens position (subluxation) and the posterior segment (commotio, tears, detachment)',
                    'Ask about blood thinners and sickle cell status',
                    'Gonioscopy straight away to look for recession'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Defer gonioscopy for about 2–4 weeks, until the rebleed risk has passed. A child with restricted up-gaze, nausea and a quiet-looking eye may have a trapped muscle (“white-eyed blowout”) and needs urgent referral.',
                recall: 'A candidate forgot to check the AC for cells and flare, which the panel probed hard for.'
            },
            {
                phase: '4. Management',
                type: 'mcq',
                question: '“What do you give him? Why 45 degrees?”',
                options: [
                    'Shield, quiet activity, head up 30–45° (blood settles below the visual axis, allowing a fundus view); atropine 1%; prednisolone acetate 1% if AC reaction; paracetamol, no aspirin or NSAIDs.',
                    'Patch both eyes and strict bed rest lying flat for a week; aspirin for the pain; homatropine and pilocarpine alternately to keep the blood moving out of the angle; review in a week.',
                    'Return to school and sport the next day; ibuprofen for the pain; no drops are needed, since a hyphaema always clears by itself; review in a month to check the angle.',
                    'Head down (lying face down) so blood drains away from the angle; NSAID drops QID for the pain; a PGA to keep the IOP low from the start; review in a week.'
                ],
                answer: 0,
                explain: 'Atropine eases pain, stabilises the blood–aqueous barrier and keeps the iris still. Steroids reduce inflammation and may lower rebleed risk.',
                recall: 'Candidates said head elevation is “to promote drainage” and the panel wasn’t happy. The point is that the blood settles in the inferior AC, off the visual axis and away from the corneal endothelium centrally.'
            },
            {
                phase: '5. Rebleed and the eight-ball',
                type: 'mcq',
                question: '“Why is an eight-ball hyphema bad? When do rebleeds happen and why do they matter?”',
                options: [
                    'A total, dark clot blocks aqueous flow, so IOP rises sharply, with a risk of corneal blood staining and optic atrophy. Rebleeds peak at day 2–5 as the clot retracts and are often bigger.',
                    'An eight-ball hyphema is bright red and clears faster than a small one, so it is only bad if it lasts more than a month. Rebleeds happen within the first hour and are always smaller.',
                    'An eight-ball hyphema is only a cosmetic problem, since vision returns fully once it clears. Rebleeds are rare after the first day and make no difference to the final outcome.',
                    'An eight-ball hyphema lowers the IOP, because blood dilutes the aqueous. Rebleeds happen after about 3 months and are caused by the atropine used in the first week.'
                ],
                answer: 0,
                explain: 'Sickle cell patients and those with a total hyphaema or high IOP need ophthalmology care urgently, and some need AC washout.'
            },
            {
                phase: '6. IOP rises',
                type: 'mcq',
                critical: true,
                question: 'IOP rises to 40 mmHg. “What would you do? Why timolol 0.5%?”',
                options: [
                    'Same-day ophthalmology; an aqueous suppressant such as timolol (0.25% or 0.5%) if no asthma or heart block; avoid PGAs and miotics, CAIs in sickle cell, and brimonidine in young children.',
                    'Start latanoprost and pilocarpine together, which are the safest drops after trauma; an IOP of 40 can be managed in the community without referral as long as the patient feels well.',
                    'Start oral acetazolamide prescribed by you, which is the drug of choice in sickle cell disease; no topical drops are needed, and the review can be in a week.',
                    'Start brimonidine 0.2% TDS, which is the first choice in an 8-year-old because it has no systemic effects in children; review in a month to recheck the pressure.'
                ],
                answer: 0,
                explain: 'In sickle cell, CAIs promote sickling (acidosis), and IOP over about 24 mmHg for more than a day is already dangerous. Brimonidine can cause CNS depression and apnoea in young children.',
                recall: 'Asked “why timolol 0.5%?”, a candidate said other concentrations “aren’t available in Australia”. Timolol 0.25% is available; 0.25% is often used in children.'
            },
            {
                phase: '7. Angle recession later',
                type: 'mcq',
                question: 'The boy comes back with IOP 22 (other eye 10) and angle recession. “Why are the field and OCT unreliable? How long on drops?”',
                options: [
                    'A child may not do a reliable field, and OCT normative data don’t cover children. Early rises can settle as the meshwork recovers: treat, reassess, and monitor for life.',
                    'The field and OCT are fully reliable at 8, so they can diagnose glaucoma straight away. He will need drops for life, since angle-recession pressure never comes down.',
                    'The field is unreliable because the hyphema has stained the retina. He needs SLT straight away, since it works especially well in recessed angles in children.',
                    'OCT can’t be done after trauma. He needs a PGA and pilocarpine together, which open the recessed angle; drops can stop once his IOP equals the other eye.'
                ],
                answer: 0,
                explain: 'Recession over 180° (and especially 270°) carries a higher glaucoma risk, which can appear years later. SLT and miotics work poorly in recessed angles.'
            }
        ]
    },
    {
        id: 'r2023-steroid-young-disc',
        category: 'glaucoma',
        title: 'Cupped Disc in a Teenager with Normal IOP',
        theme: 'Steroid Response vs Neurological Cause',
        years: ['2023'],
        patient: '16-year-old boy. Past “inflammatory eye event” treated with a lot of drops; doesn’t know their names. IOP R 12, L 13 mmHg (Wednesday, Anna).',
        stem: 'Photo of both discs: the right disc has an enlarged cup with almost no rim and bayoneting of the vessels.',
        steps: [
            {
                phase: '1. Notching or bayoneting',
                type: 'mcq',
                question: '“What is the difference between bayoneting and notching?”',
                options: [
                    'Notching is focal loss of rim (RGC axons), usually at the poles. Bayoneting is a vessel bending sharply over the edge of a deep, undermined cup, then up onto the rim.',
                    'Notching is a kink in a vessel at the edge of the cup. Bayoneting is a wedge-shaped RNFL defect seen best in red-free light, running from the disc margin outwards.',
                    'Notching is a normal variant seen only in tilted or myopic discs. Bayoneting is a small splinter haemorrhage at the disc margin, which comes and goes over months.',
                    'Both terms mean the same thing: an area of disc pallor larger than the cup, which suggests a neurological cause rather than glaucoma and needs imaging.'
                ],
                answer: 0,
                explain: 'Pallor of the remaining rim (more than the cupping) suggests a non-glaucomatous neuropathy.'
            },
            {
                phase: '2. Differentials',
                type: 'multi',
                question: 'There is structure–function concordance. “What else do you need to exclude before calling it glaucoma?”',
                options: [
                    'Steroid-induced glaucoma (past heavy steroid drops, now off them)',
                    'Uveitic glaucoma from the past inflammation',
                    'Past trauma (angle recession)',
                    'A compressive or other neurological optic neuropathy',
                    'Congenital or juvenile glaucoma',
                    'Normal physiological cupping, needing no further work-up'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Asymmetric cupping with normal IOP in a teenager is never assumed to be physiological without a full work-up.',
                recall: 'The candidate misheard the age as 60 and spent a long time on NTG and AION; once they realised he was 16, the panel moved them to trauma and neurological causes.'
            },
            {
                phase: '3. Steroid response',
                type: 'mcq',
                question: '“What is a steroid response? Who is at risk? What are the moderate and high response levels?”',
                options: [
                    'An IOP rise from reduced meshwork outflow. Classic studies: ~5% high responders (rise over 15 mmHg), ~a third moderate (6–15). At risk: POAG and relatives, high myopes, children, diabetes, RA.',
                    'A fall in IOP from reduced aqueous production on steroids. About half of people are high responders (a fall of over 15 mmHg). At risk: older women with hyperopia and anyone with cataract.',
                    'A rise in IOP that only ever happens with oral steroids, never with drops. About 90% of people are high responders. At risk: anyone over 70; children never show a steroid response.',
                    'Any IOP above 21 mmHg while on steroids, whatever the starting pressure was. Everyone responds equally, so no group is at extra risk, and the size of the rise is never measured.'
                ],
                answer: 0,
                explain: 'Steroid-induced IOP rise usually falls after stopping, but damage done stays. In children responses are faster and larger.'
            },
            {
                phase: '4. Neurological work-up',
                type: 'mcq',
                critical: true,
                question: '“What would you do for the neurological side?”',
                options: [
                    'Pupils (RAPD), colour vision and red-cap, a field looking for a vertical-midline defect, disc colour; refer for MRI (via the GP, neurology or ophthalmology) given his age and asymmetry.',
                    'Nothing further: at 16 any optic neuropathy is glaucoma until proven otherwise, so start a PGA, explain the diagnosis, and review the disc, field and IOP again in 6 months’ time.',
                    'A CT scan arranged directly by you from the practice, with no other tests at all, since imaging alone answers the question and the clinical tests only delay the diagnosis.',
                    'Repeat the IOP every month for a year; if it stays normal throughout, the disc must be physiological, and he can be discharged back to routine two-yearly eye checks.'
                ],
                answer: 0,
                explain: 'Optometrists can refer for imaging in some settings, but the usual route is via the GP or specialist. MRI shows optic nerve and chiasm lesions better than CT.'
            },
            {
                phase: '5. If it is glaucoma',
                type: 'mcq',
                question: '“If this was glaucoma, what is your treatment?”',
                options: [
                    'Avoid a PGA given the past uveitis; timolol 0.25–0.5% BD after checking for asthma and heart rate, or a CAI; involve an ophthalmologist given his age.',
                    'Latanoprost nocte, which is first choice for every patient whatever their history; no specialist input is needed for a teenager with glaucoma.',
                    'Prednisolone acetate 1% QID to settle the old inflammation, which will lower his IOP and reverse the cupping of the right disc over a few months.',
                    'Pilocarpine 4% QID, which is the preferred drop in teenagers because they tolerate the induced myopia and brow ache better than older patients.'
                ],
                answer: 0,
                explain: 'PGAs can provoke inflammation and CMO and are avoided with a history of uveitis where possible.'
            }
        ]
    },
    {
        id: 'r2023-adeno-sei',
        category: 'conj',
        title: 'Spots on the Cornea Ten Days after a Red Eye',
        theme: 'Adenoviral SEIs vs Chlamydia',
        years: ['2023'],
        patient: 'Adult (Tuesday afternoon). Photos at day 7 (two small staining spots) and day 10 (many subepithelial infiltrates).',
        stem: 'Red, watery eye that started about 10 days ago, now with blurred vision and glare.',
        exhibit: 'Day 10: multiple small, round, nummular subepithelial infiltrates across the central cornea.',
        steps: [
            {
                phase: '1. Diagnosis',
                type: 'mcq',
                question: '“Differentials? What is this?” How does it differ from marginal keratitis?',
                options: [
                    'Nummular SEIs after adenoviral keratoconjunctivitis: an immune response to viral antigen, 1–2 weeks after onset. Marginal keratitis is peripheral with a clear zone, and goes with blepharitis.',
                    'Bacterial keratitis with multiple ulcers, where the organism has spread across the cornea from a single site. Marginal keratitis is the same infection, simply caught at an earlier stage.',
                    'Fungal satellite lesions from a contaminated eye drop bottle, where each infiltrate is a cluster of hyphae. Marginal keratitis is caused by fungus living in the lid margin.',
                    'Thygeson’s keratitis, which always follows adenovirus within a week of the red eye. Marginal keratitis, by contrast, is central and has no clear zone from the limbus.'
                ],
                answer: 0,
                explain: 'SEIs stain little or not at all. They can reduce vision and persist for months.'
            },
            {
                phase: '2. Management',
                type: 'mcq',
                question: '“What is the management?”',
                options: [
                    'Supportive care (cold compresses, PF lubricants, hygiene, time off while contagious); FML only if the SEIs reduce vision, tapered slowly as they rebound; check IOP.',
                    'Topical aciclovir 3% 5×/day for 2 weeks, since adenovirus responds well to the herpes antivirals; a steroid is never used for SEIs, however much they reduce the vision.',
                    'Chloramphenicol 0.5% QID for 2 weeks to stop the infiltrates becoming ulcers, plus a steroid hourly for a week to clear them as quickly as possible.',
                    'Oral azithromycin 1 g stat, since all SEIs are chlamydial until proven otherwise, with contact tracing for sexual partners and an STI screen via the GP.'
                ],
                answer: 0,
                explain: 'Steroids shorten symptoms but may prolong viral shedding and SEIs often return on stopping.'
            },
            {
                phase: '3. Chlamydia',
                type: 'mcq',
                question: '“How would chlamydia present differently? How is it diagnosed and managed?”',
                options: [
                    'Chronic (over 2–3 weeks), often one-eyed follicular conjunctivitis in a sexually active young adult, with a node and superior pannus. PCR swab; GP for azithromycin or doxycycline and partner tracing.',
                    'An acute, hyperpurulent conjunctivitis within 24 hours of exposure that can perforate the cornea. It is diagnosed on a standard bacterial culture and treated with chloramphenicol drops alone.',
                    'A bilateral watery conjunctivitis with a sore throat and fever in a child, lasting about a week. It is diagnosed from its appearance alone and treated with cold compresses and hygiene.',
                    'Itchy eyes with tarsal papillae every spring in a child with eczema and asthma. It is diagnosed with allergy skin testing and treated with olopatadine and allergen avoidance.'
                ],
                answer: 0,
                explain: 'Topical antibiotics alone don’t treat the systemic infection. Neonatal chlamydial conjunctivitis needs oral erythromycin and paediatric care.'
            },
            {
                phase: '4. Complications',
                type: 'multi',
                question: '“What are some complications of adenoviral conjunctivitis?”',
                options: [
                    'Subepithelial infiltrates reducing vision',
                    'Pseudomembranes or true membranes',
                    'Symblepharon and conjunctival scarring after membranes',
                    'Dry eye',
                    'Spread to the other eye and to contacts',
                    'Endophthalmitis'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Peel membranes (with care) and consider a steroid for membranous disease.'
            }
        ]
    },
    {
        id: 'r2023-episcleritis',
        category: 'conj',
        title: 'Sectoral Red Eye: Episcleritis or Scleritis?',
        theme: 'Episcleritis vs Scleritis',
        years: ['2023'],
        patient: 'Adult with a sectoral red eye (Tuesday 12:20 and Thursday 3:45 with Lily).',
        stem: 'Blurry red-eye photo; Lily: “Say it’s episcleritis or scleritis — how do you tell?”',
        steps: [
            {
                phase: '1. Telling them apart',
                type: 'multi',
                question: 'Which features point to episcleritis rather than scleritis?',
                options: [
                    'Mild discomfort rather than deep, boring pain that wakes the patient',
                    'Vessels that move over the sclera with a cotton bud',
                    'Redness that blanches with phenylephrine 2.5%',
                    'Salmon-pink rather than violaceous colour in daylight',
                    'Normal VA and no scleral thinning or tenderness',
                    'A history of rheumatoid arthritis or granulomatosis with polyangiitis'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Phenylephrine blanches the superficial episcleral plexus but not the deep plexus in scleritis. Scleritis is associated with systemic disease in about half of cases.'
            },
            {
                phase: '2. Management',
                type: 'mcq',
                question: '“How would you manage episcleritis? Why FML and not Flarex?”',
                options: [
                    'Cold compresses, PF lubricants; if symptomatic, FML 0.1% QID tapering over 1–2 weeks. FML penetrates less, so it acts on the surface with less IOP and cataract risk.',
                    'Prednisolone acetate 1% hourly for a week, since episcleritis needs the strongest penetrating steroid available; FML is far too weak to have any effect on it.',
                    'Oral prednisolone 50 mg daily via the GP straight away, because episcleritis always progresses to scleritis unless it is treated systemically from the start.',
                    'Chloramphenicol 0.5% QID, because episcleritis is caused by bacteria in the episcleral tissue; any steroid would make the infection spread into the sclera.'
                ],
                answer: 0,
                explain: 'Episcleritis is often self-limiting within 1–3 weeks.'
            },
            {
                phase: '3. NSAIDs',
                type: 'mcq',
                question: '“Would you consider NSAIDs? Topical or oral? Are they effective?”',
                options: [
                    'Topical NSAIDs (ketorolac) haven’t been shown to beat artificial tears in episcleritis; oral NSAIDs (ibuprofen) help nodular or recurrent cases. Paracetamol isn’t an NSAID.',
                    'Topical ketorolac QID is the first-line treatment and works better than a steroid for episcleritis; oral NSAIDs are contraindicated, because they can trigger a scleritis.',
                    'Only paracetamol is useful, as it is the strongest of the NSAIDs; ibuprofen is a type of corticosteroid and so carries the same IOP risk as steroid drops.',
                    'NSAIDs are never used in eye inflammation of any kind, because both the topical and oral forms raise IOP more than steroids do and can cause angle closure.'
                ],
                answer: 0,
                explain: 'Oral NSAIDs: caution with peptic ulcer, renal disease, asthma, anticoagulants and pregnancy. Scleritis needs systemic NSAIDs or immunosuppression via ophthalmology.',
                recall: 'A candidate suggested ketorolac and said it would be effective; Fiona gave a look. Topical NSAIDs aren’t effective for episcleritis. They also weren’t sure if ibuprofen and paracetamol are NSAIDs: ibuprofen is, paracetamol isn’t.'
            },
            {
                phase: '4. When to refer',
                type: 'mcq',
                critical: true,
                question: '“When do you think there’s a systemic association? When would you refer?”',
                options: [
                    'Suspected scleritis goes urgently to ophthalmology (half have systemic disease, and it can threaten the eye). For episcleritis, GP work-up if recurrent, bilateral or with symptoms.',
                    'Never refer either one: episcleritis and scleritis are both self-limiting and have no systemic associations, so they can be managed entirely in practice with lubricants alone.',
                    'Refer all episcleritis to ED the same day, since it is a sign of a ruptured globe; scleritis is milder and can be managed in practice with lubricants.',
                    'Refer only if the patient is under 20, since systemic associations of episcleritis and scleritis only ever occur in children and teenagers.'
                ],
                answer: 0,
                explain: 'Episcleritis associations include rosacea, atopy, gout and connective tissue disease, but most are idiopathic.'
            }
        ]
    },
    {
        id: 'r2023-clpu',
        category: 'cornea',
        title: 'Round Superior Infiltrate in a Lens Wearer',
        theme: 'CLPU vs Marginal Keratitis vs MK',
        years: ['2023'],
        patient: 'Soft contact lens wearer (several candidates weren’t sure if their case was CLPU or marginal keratitis).',
        stem: 'Mildly red, irritated eye.',
        exhibit: 'Photo: a small, round, white infiltrate in the superior mid-periphery, with conjunctival hyperaemia and chemosis; minimal overlying staining.',
        steps: [
            {
                phase: '1. History',
                type: 'viva',
                question: '“What questions would you ask?”',
                points: [
                    'Lens type, wearing schedule, sleeping in lenses (overnight wear is the main risk for CLPU)',
                    'Case and solution hygiene, tap water or swimming in lenses',
                    'Onset, pain level, photophobia, discharge',
                    'Past episodes; blepharitis or lid disease',
                    'Past HSV, steroid use'
                ],
                explain: 'Pain out of proportion, a larger or central lesion, or discharge push you towards MK.'
            },
            {
                phase: '2. Pathophysiology',
                type: 'mcq',
                question: '“What is the pathophysiology of CLPU?”',
                options: [
                    'A sterile response to Gram-positive bacterial toxins (usually S. aureus) on the lens or lid, often after overnight wear: a small, round, peripheral infiltrate with little or no staining.',
                    'A Pseudomonas infection that has invaded the stroma through a large epithelial defect, giving a central ulcer with a ground-glass edge and a hypopyon within a day of the first symptoms.',
                    'An allergic reaction to the lens solution, causing giant papillae on the upper tarsus and mucus strands across the eye, with no corneal infiltrate at all.',
                    'Hypoxic swelling of the whole cornea from a tight lens, causing striae and folds across the stroma without any infiltrate or staining of the epithelium.'
                ],
                answer: 0,
                explain: 'Marginal keratitis has a clear zone at the limbus and goes with staphylococcal blepharitis; CLPU tends to be a single round lesion in a lens wearer.'
            },
            {
                phase: '3. Management',
                type: 'mcq',
                question: '“Treatment? Mechanism and contraindications?”',
                options: [
                    'Stop lens wear; if it stains, antibiotic cover (chloramphenicol QID, or a fluoroquinolone if MK is possible); a mild steroid once infection is unlikely; review in 24–48 h.',
                    'Continue lens wear; prednisolone acetate 1% hourly from day one with no antibiotic, since CLPU is always sterile and antibiotic cover isn’t needed; review in 2 weeks.',
                    'Stop lens wear; fortified antibiotics in hospital for every case, since all lens-related infiltrates are infected until proven otherwise; no steroid is ever used.',
                    'Switch to extended-wear silicone hydrogel lenses, which cure CLPU by improving oxygen supply; no drops are needed; review in 3 months to check the lens fit.'
                ],
                answer: 0,
                explain: 'Steroid contraindications: active epithelial HSV, fungal or mycobacterial infection, untreated bacterial infection. If in doubt, treat as MK.'
            },
            {
                phase: '4. History of a viral infection',
                type: 'mcq',
                question: '“If they had a history of HSV, what would you do?”',
                options: [
                    'Avoid the steroid if possible, or use it only with oral antiviral cover and close review; consider whether this is HSV stromal keratitis rather than CLPU.',
                    'Use a stronger steroid, since a past HSV infection makes the infiltrate more inflammatory, so it needs more suppression to settle within the first week.',
                    'Stop all antibiotics, since a past viral infection means the infiltrate can’t be bacterial, so antibiotic cover only adds toxicity to the cornea.',
                    'Nothing changes, since a past HSV infection has no bearing on corneal treatment once the original episode has healed and the eye has been quiet.'
                ],
                answer: 0,
                explain: 'One 2023 panel (Rebecca and Isabelle) asked how to tell a sterile infiltrate from HSV stromal keratitis: HSV has reduced corneal sensation, past episodes, stromal oedema or KPs under the lesion, and often no lens wear.'
            }
        ]
    }
);
