// Cases from the Young Optometrists 2026 therapeutics study session (Past Papers/YO 2026 Session_compressed.pdf):
// several breakout rooms' notes on the same cases, plus the tutors' tips and red flags. The notes contain some
// errors, which are corrected in the "Recall check" boxes.
window.CASES.push(
    {
        id: 'yo26-aac',
        category: 'glaucoma',
        title: 'Painful Cloudy Eye, Headache and Vomiting',
        theme: 'Acute Angle Closure',
        years: ['Mock 2026'],
        patient: '55-year-old Nepalese woman. No medications, no surgery or trauma, not a contact lens wearer.',
        stem: 'Right eye cloudy and painful with a headache for 2 days. Nausea, vomiting and haloes around lights. First episode.',
        exhibit: 'Photos of both eyes: right eye injected 360° with a hazy cornea and a mid-dilated pupil; left eye quiet.',
        steps: [
            {
                phase: '1. Findings',
                type: 'reveal',
                text: 'VA R 6/120, L 6/7.5. IOP R 50, L 14 mmHg. Right: corneal oedema, 360° conjunctival hyperaemia, mid-dilated pupil that doesn’t react. Left: shallow but quiet anterior chamber.'
            },
            {
                phase: '2. Diagnosis',
                type: 'mcq',
                question: 'What is the diagnosis, and how do you tell it from the main differentials?',
                options: [
                    'Acute angle closure: IOP 50, corneal oedema and a fixed mid-dilated pupil with nausea. Uveitis has a small pupil and open angles; Posner–Schlossman has open angles and milder symptoms.',
                    'Acute anterior uveitis with a secondary IOP spike: the mid-dilated pupil is from posterior synechiae. Angle closure always has a small pupil, and the nausea and vomiting point to a migraine.',
                    'Posner–Schlossman syndrome: IOP 50 with a quiet fellow eye is typical of it. Angle closure is bilateral at onset, and corneal oedema only appears in angle closure after a week or more.',
                    'Neovascular glaucoma: a 2-day history of IOP 50 with a red eye in a 55-year-old means rubeosis until proven otherwise. Angle closure doesn’t cause haloes, nausea or vomiting.'
                ],
                answer: 0,
                explain: 'The pupil helps most: mid-dilated and fixed in angle closure (ischaemic sphincter), small in uveitis.'
            },
            {
                phase: '3. Gonioscopy now?',
                type: 'mcq',
                critical: true,
                question: 'You want to confirm the angle is closed. Do you do gonioscopy before treating?',
                options: [
                    'No: start IOP-lowering treatment straight away; the oedematous cornea limits the view anyway. Assess the fellow eye’s angle, and gonio the affected eye once IOP is down and the cornea clears.',
                    'Yes: do full gonioscopy of both eyes first, since treatment can’t start until you have shown 180° of closure, and the drops will change how the angle looks afterwards, hiding the diagnosis.',
                    'No: gonioscopy is contraindicated in angle closure at any stage, because the lens pressure pushes the iris further forward. Van Herick is used in both eyes for the rest of her care instead.',
                    'Yes: indentation gonioscopy is the treatment and breaks the attack in most eyes. Drops and acetazolamide are only needed if the IOP is still above 40 mmHg after 30 minutes of indentation.'
                ],
                answer: 0,
                explain: 'The tutors called delaying treatment for gonioscopy a red flag. On gonio, the angle is closed when the posterior pigmented trabecular meshwork can’t be seen for 180° or more.',
                recall: 'One room wrote “check if angles open, with gonioscopy and VH” first; the tutors said there is no time for gonio in an acute attack. Treat first; examine the angle once the cornea allows.'
            },
            {
                phase: '4. First aid',
                type: 'mcq',
                critical: true,
                question: 'Which first-aid plan is right, and where does pilocarpine fit?',
                options: [
                    'Check contraindications; timolol 0.5%, apraclonidine or brimonidine and a topical CAI a few minutes apart, prednisolone acetate 1% if inflamed; acetazolamide 500 mg via the GP or ED; pilocarpine once IOP is under ~40.',
                    'Check contraindications; pilocarpine 2% every 5 minutes for an hour to break the block, timolol 0.5% once; acetazolamide 500 mg prescribed by you; prednisolone acetate only if IOP is still above 40 after 2 hours.',
                    'Check contraindications; latanoprost and timolol 0.5% together, cyclopentolate 1% to relax the ciliary body and deepen the chamber; acetazolamide 500 mg via the GP or ED; pilocarpine is never used in angle closure.',
                    'Check contraindications; timolol 0.5% and brimonidine together, atropine 1% for the pain and photophobia; acetazolamide 250 mg prescribed by you; pilocarpine 4% straight away, since it works best at very high IOP.'
                ],
                answer: 0,
                explain: 'Above about 40 mmHg the iris sphincter is ischaemic, so pilocarpine doesn’t work. Optometrists can’t prescribe acetazolamide; arrange it through the GP or ED, and the ophthalmologist for laser within 24–48 h.',
                recall: 'The notes list “history of corneal graft” as a contraindication to Diamox. That caution belongs to topical CAIs (dorzolamide, brinzolamide) with a compromised endothelium. Acetazolamide’s are sulfonamide allergy, severe renal or hepatic impairment, low potassium or sodium.'
            },
            {
                phase: '5. Laser and the trials',
                type: 'mcq',
                question: 'What does the ophthalmologist do, and what do ZAP and EAGLE tell you?',
                options: [
                    'LPI in both eyes (the fellow eye is at high risk of an attack). ZAP: LPI in suspects roughly halved a low risk, a small absolute gain. EAGLE: clear lens extraction beat LPI in PAC with high IOP or PACG.',
                    'LPI in the affected eye only (the fellow eye has a normal IOP). ZAP: about half of untreated suspects closed within 5 years. EAGLE: LPI beat lens extraction, so lens surgery waits for a cataract.',
                    'Lens extraction in both eyes the same day (LPI no longer has a role). ZAP: LPI made no difference at all in suspects. EAGLE: lens extraction only helps those over 75 with dense cataract.',
                    'SLT in both eyes to open the trabecular meshwork. ZAP: SLT prevented closure in half of suspects. EAGLE: lens extraction and LPI were the same, so the cheaper LPI is preferred.'
                ],
                answer: 0,
                explain: 'ZAP (889 Chinese suspects, one eye lasered): over about 6 years, 19 treated vs 36 untreated eyes reached the endpoint. EAGLE studied people 50 and over.',
                recall: 'One room wrote that in ZAP “almost 50% will develop angle closure in 5 years”. The ~50% is the relative reduction in risk with LPI; the absolute risk was low (a few per cent), so routine LPI for suspects isn’t needed.'
            },
            {
                phase: '6. Mechanisms',
                type: 'match',
                question: 'Match each mechanism to the treatment that addresses it.',
                pairs: [
                    { label: 'Pupillary block', answer: 'LPI gives aqueous a route from posterior to anterior chamber' },
                    { label: 'Plateau iris', answer: 'Iridoplasty or lens extraction, as LPI doesn’t fix the crowding' },
                    { label: 'Thick or cataractous lens', answer: 'Lens extraction (EAGLE)' },
                    { label: 'Drug-induced (e.g. topiramate effusion)', answer: 'Stop the drug; cycloplegia, avoid miotics' }
                ],
                distractors: ['SLT to the trabecular meshwork'],
                explain: 'Iridoplasty uses low-power, long-duration burns to contract the peripheral iris away from the angle, and can be done with a hazy cornea.'
            },
            {
                phase: '7. Signs of a past attack',
                type: 'multi',
                question: 'The panel shows four photos of another patient. Which signs point to a previous angle-closure attack?',
                options: [
                    'Sectoral iris stromal atrophy',
                    'Glaukomflecken (anterior subcapsular flecks)',
                    'Dilated iris vessels',
                    'Peripheral anterior synechiae on gonioscopy',
                    'A Krukenberg spindle',
                    'Horner–Trantas dots'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Iris atrophy and glaukomflecken come from ischaemia during the high IOP. A Krukenberg spindle is pigment dispersion.'
            }
        ]
    },
    {
        id: 'yo26-hsk-grinder',
        category: 'cornea',
        title: 'Metal Grinder with a Branching Corneal Lesion',
        theme: 'HSV Epithelial Keratitis',
        years: ['Mock 2026'],
        patient: '32-year-old man, works as a metal grinder and wears safety goggles. Not a CL wearer. Had a cold sore the week before.',
        stem: 'Right eye red, watery and irritated for 2 days, “like metal shavings flew in”. Slight blur and photophobia, no discharge. Chloramphenicol from the chemist didn’t help.',
        exhibit: 'Slit lamp photos, white light and fluorescein: an irregular, branching epithelial lesion inferonasal to centre with a small satellite lesion and mild stromal haze.',
        steps: [
            {
                phase: '1. History',
                type: 'viva',
                question: '“It’s a red eye. Take me through your history, quickly.”',
                points: [
                    'A set structure (e.g. FOLDARQ): onset, which eye, duration, worse or better, what helped',
                    'Pain, photophobia, discharge, itch, blur',
                    'Contact lens wear; trauma and foreign body (and any vegetative matter)',
                    'Cold sores, skin rash or tingling, recent illness, past episodes',
                    'Medications (what the chemist gave), allergies, general health'
                ],
                explain: 'The tutors wanted the same screening questions for every red eye, asked efficiently. Here the cold sore is the clue that matters.'
            },
            {
                phase: '2. Findings',
                type: 'reveal',
                text: 'VA R 6/9, L 6/6. Pupils, motility normal. IOP 15 / 16 mmHg. No skin vesicles. Fluorescein: an irregular branching defect with terminal bulbs, about 1.5 mm (half the 3 mm pupil), inferonasal but near centre, with a small satellite lesion and mild stromal haze.'
            },
            {
                phase: '3. Diagnosis',
                type: 'mcq',
                question: 'What is it, and how do you separate it from the differentials?',
                options: [
                    'HSV epithelial keratitis: a true dendrite with terminal bulbs that stains well with fluorescein. HZO pseudodendrites are raised, stain poorly and come with a dermatomal rash.',
                    'Herpes zoster keratitis: the branching lesion and recent cold sore are both signs of zoster. HSV dendrites never have terminal bulbs, and stain only with rose bengal, not fluorescein.',
                    'A metallic foreign body track: grinders get linear abrasions that branch as they heal. Herpes is unlikely as he wore goggles, and true dendrites are always central, never inferonasal.',
                    'Fungal keratitis: a satellite lesion is diagnostic of fungus. HSV never has satellite lesions, and the cold sore is unrelated, as oral and ocular herpes are caused by different viruses.'
                ],
                answer: 0,
                explain: 'Satellite lesions raise fungal keratitis, but that needs vegetative trauma and has feathery edges. Acanthamoeba: pain out of proportion, water exposure in CL wearers.',
                recall: 'The notes wrote “Herpes Simplex… cranial nerve 5 but in ganglion”: HSV-1 is latent in the trigeminal ganglion. Zoster pseudodendrites stain poorly with fluorescein and better with rose bengal.'
            },
            {
                phase: '4. Treatment',
                type: 'mcq',
                critical: true,
                question: 'How do you treat him?',
                options: [
                    'Aciclovir 3% ointment 5×/day until healed and for at least 3 days after, lubricants; consider debridement. No topical steroid on an open epithelial defect. Review in 2–3 days.',
                    'Aciclovir 3% ointment 5×/day plus prednisolone acetate 1% QID to clear the stromal haze and scarring; stop the ointment once the haze clears. Review in 1 week.',
                    'Chloramphenicol 0.5% QID for 5 more days, since the chemist course was too short to work; add aciclovir 3% ointment only if a dendrite is still there at the 1-week review.',
                    'Aciclovir 3% ointment twice a day for 3 days, then stop it to avoid toxicity; FML 0.1% QID for comfort, as it is too weak a steroid to worsen the epithelial disease.'
                ],
                answer: 0,
                explain: 'Ointment pools inferiorly, which is why the follow-up staining is heavier there. Most dendrites heal in 7–10 days.',
                recall: 'Steroid on an open HSV defect was called an automatic fail. Stromal haze here is mild oedema around an active epithelial lesion, not immune stromal keratitis.'
            },
            {
                phase: '5. Must you dilate?',
                type: 'mcq',
                critical: true,
                question: 'The examiner asks if you would dilate him.',
                options: [
                    'Yes: herpetic disease can involve the uvea and retina (e.g. acute retinal necrosis), so check for AC cells and do a dilated fundus exam; posterior disease is an emergency.',
                    'No: dilation spreads the virus from the cornea to the uvea by relaxing the iris, so it is avoided until the dendrite has fully healed, at the 2-week review visit.',
                    'No: the IOP is normal and there is no AC reaction, so a dilated exam adds nothing in epithelial HSV disease; it is only needed in zoster, which can cause a retinitis.',
                    'Yes, but only to relieve the photophobia: cyclopentolate is part of every HSV treatment, and the fundus needn’t be examined unless the acuity is worse than 6/12.'
                ],
                answer: 0,
                explain: 'The tutors listed not dilating a herpes patient as a red flag.'
            },
            {
                phase: '6. When are oral antivirals used?',
                type: 'multi',
                question: 'When would you arrange oral antivirals (through the GP) for HSV keratitis?',
                options: [
                    'Topical toxicity or intolerance while still active',
                    'Poor adherence or dexterity (e.g. older patients)',
                    'Immunocompromised patient',
                    'Stromal keratitis or keratouveitis needing steroid cover',
                    'Prophylaxis after recurrent or stromal disease (HEDS)',
                    'Every first dendrite, as orals clear the infection faster than topicals'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Treatment dose for epithelial disease: aciclovir 400 mg 5×/day or valaciclovir 500 mg BD–TDS for 7–10 days. Prophylaxis: aciclovir 400 mg BD. Optometrists arrange orals through the GP.',
                recall: 'The notes give “aciclovir 400 mg 5×/day for zoster → BD for simplex” and say famciclovir “might not be available in Australia”. Zoster is 800 mg 5×/day; 400 mg BD is HSV prophylaxis, not treatment; famciclovir (Famvir) is available here.'
            },
            {
                phase: '7. Follow-up photo',
                type: 'mcq',
                question: 'At review the fluorescein shows patchy green and dark areas, heavier inferiorly, with no bright glowing defect. What does it mean?',
                options: [
                    'The dendrite has healed: the dark patches are negative staining over irregular epithelium, and the inferior pattern is ointment pooling and mild toxicity. Lubricate and finish the course.',
                    'The dendrite has become geographic: the dark areas are full-thickness epithelial loss, and the inferior pattern shows spread. Double the ointment to hourly and add oral aciclovir.',
                    'Stromal keratitis has started: the dark areas are stromal scars, and the inferior pattern is spread. Start prednisolone acetate 1% hourly now, as the epithelium is no longer the problem.',
                    'Neurotrophic keratopathy: the dark areas show where corneal nerves are lost. Stop all drops at once and fit a bandage lens, since the aciclovir has caused the nerve damage.'
                ],
                answer: 0,
                explain: 'True staining glows. Negative staining is dark, where raised or irregular epithelium breaks up the tear film.'
            },
            {
                phase: '8. HEDS',
                type: 'mcq',
                question: 'What did the Herpetic Eye Disease Study show?',
                options: [
                    'Oral aciclovir 400 mg BD for a year cut ocular HSV recurrence by about 41%, and stromal recurrence by half in those with past stromal disease. Topical steroid sped stromal recovery.',
                    'Oral aciclovir 400 mg BD for a year cut recurrence by 90% in everyone, so all patients get lifelong prophylaxis after a first dendrite. Topical steroid made stromal disease worse.',
                    'Oral aciclovir 800 mg 5×/day for a year prevented all stromal recurrences, but not epithelial ones. Topical steroid made no difference to how quickly stromal keratitis resolved.',
                    'Oral aciclovir 400 mg BD for a month was as good as a year of prophylaxis, so short courses are used. Topical steroid improved final vision at 6 months by two lines.'
                ],
                answer: 0,
                explain: 'Steroid sped resolution of stromal keratitis but didn’t change 6-month vision. Adding oral aciclovir to steroid for stromal keratitis didn’t help. Sunlight, stress and CL wear weren’t linked to recurrence.',
                recall: 'One room wrote “HEDS 1: prophylactic oral 38% reduction”. The prophylaxis trial gave a 41% reduction (recurrence about 19% vs 32% in a year), and 50% for stromal keratitis.'
            }
        ]
    },
    {
        id: 'yo26-mk-dailies',
        category: 'cornea',
        title: 'Dailies Wearer: Inferior Ulcer and Pannus',
        theme: 'CL Bacterial Keratitis',
        years: ['Mock 2026'],
        patient: '24-year-old woman, daily disposable lenses. Doesn’t sleep or shower in them. General and ocular health clear.',
        stem: 'Vision slightly blurry for a few months, worse in the last 2 days. Left eye sore, watery, red and light-sensitive. No itch or discharge. Lubricants didn’t help; stopping the lenses hasn’t either.',
        exhibit: 'Left eye: limbal redness, nasal pterygium, an inferior white infiltrate with an overlying staining defect, and vessels crossing the inferior limbus (pannus).',
        steps: [
            {
                phase: '1. Findings',
                type: 'reveal',
                text: 'VA (old glasses) R 6/12, L 6/7.5; pinhole R 6/7.5, L no improvement. IOP R 16, L 12. Left: inferior infiltrate with an overlying epithelial defect (ulcer with infiltration), pannus, grade 1 AC cells.'
            },
            {
                phase: '2. Differentials',
                type: 'match',
                question: 'Match each differential to the feature that argues for or against it here.',
                pairs: [
                    { label: 'Microbial keratitis', answer: 'Staining ulcer with AC cells in a CL wearer' },
                    { label: 'CLPU', answer: 'Small, round and peripheral; little or no AC reaction' },
                    { label: 'Marginal keratitis', answer: 'Clear zone at the limbus, with blepharitis' },
                    { label: 'Peripheral ulcerative keratitis', answer: 'Very painful, with autoimmune disease' }
                ],
                distractors: ['Dendrite with terminal bulbs'],
                explain: 'Pannus means chronic hypoxia, so ask about wearing time and lens type. Ask about water and vegetative matter for Acanthamoeba and fungus.'
            },
            {
                phase: '3. Mono or dual?',
                type: 'mcq',
                question: 'How do you choose between a fluoroquinolone and fortified dual therapy?',
                options: [
                    'Fluoroquinolone monotherapy (e.g. ciprofloxacin 0.3%) for small peripheral ulcers; fortified dual therapy (cefazolin + gentamicin) for large, central or severe ulcers and the elderly.',
                    'Fortified dual therapy for every CL ulcer, as Pseudomonas now resists fluoroquinolones in Australia; ciprofloxacin is only used for marginal keratitis, where infection is unlikely.',
                    'Chloramphenicol 0.5% for small peripheral ulcers, as it covers Pseudomonas well; fluoroquinolones only for central ulcers, and fortified drops are no longer used in Australia.',
                    'Fluoroquinolone monotherapy for every ulcer, whatever its size or position, as SCUT showed fortified drops did worse; dual therapy only after a scrape grows a fungus.'
                ],
                answer: 0,
                explain: 'Chloramphenicol doesn’t cover Pseudomonas, the key organism in CL keratitis. The tutors said to know why dual therapy, and the mechanism of each drug.'
            },
            {
                phase: '4. Ciprofloxacin regimen',
                type: 'mcq',
                question: 'Give the ciprofloxacin regimen the way the panel wants it: day by day, with the concentration.',
                options: [
                    'Ciprofloxacin 0.3%: every 15 min for 6 h, every 30 min for the rest of day 1, hourly on day 2, then 4-hourly from day 3 until healed (up to 14 days). Never below QID.',
                    'Ciprofloxacin 0.3%: every 15 min for 2 h, every 30 min for 2 h, then hourly until healed, then taper weekly by one drop a day down to once daily before stopping.',
                    'Ciprofloxacin 0.5%: every 15 min for 6 h, hourly overnight, then QID from day 2 until healed (minimum 21 days), with a taper to BD in the last week to avoid rebound.',
                    'Ciprofloxacin 0.3%: hourly while awake for 2 days, then 2-hourly for 5 days, then BD for a week, since the lower doses keep the epithelium healthy while it closes.'
                ],
                answer: 0,
                explain: 'An antibiotic isn’t tapered below QID (sub-MIC doses breed resistance). White precipitates in the defect are typical of ciprofloxacin, harmless, and show the drops are being used.',
                recall: 'The rooms gave two different loading schedules (“every 15 min for 2 h, then half-hourly for 2 h” and “every 15 min for 6 h, hourly for 6–24 h”). The Ciloxan product information is the one above.'
            },
            {
                phase: '5. Fortified drops',
                type: 'mcq',
                question: 'For a central ulcer in an older patient you use fortified cefazolin and gentamicin. How are they given, and why?',
                options: [
                    'Alternated as separate drops, each every 30 min (one drop every 15 min): the β-lactam inactivates the aminoglycoside if mixed. Cefazolin: Gram-positives (cell wall); gentamicin: Gram-negatives (30S).',
                    'Mixed in one bottle and given every 30 min, as they are synergistic: the β-lactam opens the cell wall to let gentamicin in. Cefazolin covers Gram-negatives, gentamicin Gram-positives via the 30S.',
                    'Given at the same moment, one drop straight after the other, every hour: gentamicin needs cefazolin on the surface to work. Both cover Gram-positives by acting on the bacterial 50S ribosome.',
                    'Cefazolin by day and gentamicin at night, as together they are too toxic to the epithelium: the β-lactam makes the aminoglycoside precipitate. Both act on Gram-negative cell walls.'
                ],
                answer: 0,
                explain: 'Corneal regeneration is slower in older patients, which is one reason they get dual therapy sooner.'
            },
            {
                phase: '6. Steroids and SCUT',
                type: 'mcq',
                question: 'When would a steroid come in, and which one?',
                options: [
                    'Only once it is clearly improving on antibiotics (SCUT added it after 48 h), keeping antibiotic cover. SCUT: no overall benefit, some gain in severe central ulcers. Peripheral: FML or none.',
                    'From the first visit, with the antibiotic, as SCUT showed early steroid halves scarring in every ulcer. Peripheral ulcers get prednisolone acetate 1% hourly, central ones FML QID for a week.',
                    'Never in bacterial keratitis, as SCUT showed steroids double the perforation rate in every type of ulcer. Scarring is managed later with a rigid contact lens or a lamellar corneal graft.',
                    'Once the epithelium is closed and the antibiotic stopped, as SCUT showed steroids are safe without cover then. Use dexamethasone, as it penetrates better than prednisolone.'
                ],
                answer: 0,
                explain: 'Avoid steroid with possible fungal or Nocardia infection. Steroid choice depends on location: central and scarring-prone vs peripheral.',
                recall: 'One room wrote SCUT showed “no short-term improvement but long-term improvement in scarring”. SCUT found no overall difference in vision or scar size; benefit appeared only in subgroups (severe central ulcers, early steroid, non-Nocardia).'
            }
        ]
    },
    {
        id: 'yo26-poag',
        category: 'glaucoma',
        title: 'Routine Check: IOP 26 and a Notched Disc',
        theme: 'Advanced POAG',
        years: ['Mock 2026'],
        patient: '62-year-old man for glasses, no complaints. Mild myope. Hypertension, well managed on a β-blocker. Father has glaucoma. No asthma, no steroid use.',
        stem: 'Routine exam: no concerns.',
        exhibit: 'Right disc photo (CDR about 0.8, inferotemporal notch, PPA), an OCT RNFL report and a 24-2 SITA Faster grey scale.',
        steps: [
            {
                phase: '1. History',
                type: 'viva',
                question: '“What else do you want to know?”',
                points: [
                    'Family: who, when diagnosed, how severe (first-degree relatives matter most)',
                    'Vascular: migraine, Raynaud’s, low blood pressure at night, sleep apnoea',
                    'Steroid use in any form; past eye trauma or surgery',
                    'Asthma or COPD, heart rate and heart block (before any β-blocker)',
                    'Allergies (sulfonamides) and kidney function (before a CAI)'
                ],
                explain: 'He is already on a systemic β-blocker, which matters for both his measured IOP and your drop choice.'
            },
            {
                phase: '2. Findings',
                type: 'reveal',
                text: 'VA 6/6 OU. Pupils PERRL, no RAPD. IOP (Goldmann) R 26, L 24. CCT R 528, L 531 µm. Gonioscopy: open angles (grade 3–4), even pigment, no PAS. Disc R: CDR 0.8, inferotemporal notch, PPA, visible lamina pores, no pallor.'
            },
            {
                phase: '3. Reading the OCT',
                type: 'mcq',
                question: 'How do you present the OCT?',
                options: [
                    'Describe first: the thickness and deviation maps show inferotemporal RNFL thinning, the TSNIT plot dips inferiorly and differs between the eyes, matching the disc notch. Then interpret.',
                    'Give the diagnosis first (“this is glaucoma”), then pick out the RNFL values that support it; describing each map wastes time, as the panel can already read them for themselves.',
                    'Report only the average RNFL thickness: if it is within normal limits the OCT excludes glaucoma, whatever the sector maps show, since the average is the most repeatable value.',
                    'Say the OCT is unreliable with a CDR of 0.8 and can’t be interpreted (floor effect); only fields count in advanced disease, so move straight to the visual field and stage from it.'
                ],
                answer: 0,
                explain: 'The tutors: don’t jump to the problem. Say what you see, then whether structure and function agree.'
            },
            {
                phase: '4. Reading the field',
                type: 'mcq',
                question: 'It is a first 24-2 SITA Faster. What do you comment on?',
                options: [
                    'Reliability (FP, gaze tracking; Faster has no false-negative trials), MD, PSD, probability plots and GHT: a dense superior arcuate defect that matches the inferior notch. A baseline: repeat it.',
                    'Only the grey scale, as it shows the defect most clearly; reliability indices don’t apply to SITA Faster, and one field is enough to stage the disease and to confirm progression later.',
                    'Only the MD: an MD worse than −2 dB is glaucoma whatever the pattern, and where the defect sits doesn’t matter. SITA Faster can’t be used for a first field, so repeat it as SITA Standard.',
                    'Fixation losses only, since they are the one index SITA Faster reports; then describe an inferior arcuate defect matching the notch, since a notch causes loss in the same hemifield.'
                ],
                answer: 0,
                explain: 'An inferior notch gives a superior field defect. A first field carries a learning effect, so it isn’t enough on its own for staging or progression.',
                recall: 'The notes say SITA Faster is “more likely to drop out false negatives”. It has no false-negative catch trials at all, and uses gaze tracking rather than blind-spot checks for fixation.'
            },
            {
                phase: '5. Diagnosis and stage',
                type: 'mcq',
                question: 'What is your diagnosis and stage, and what next for the field?',
                options: [
                    'POAG, advanced (Hodapp: MD worse than −12 dB, or points near fixation lost). The defect nears fixation, so add a 10-2. Exclude other optic neuropathies: no pallor, no RAPD.',
                    'Ocular hypertension: IOP 26 with a 0.8 disc is OHT until the field has been repeated three times. Repeat the 24-2 in 12 months before using the word glaucoma.',
                    'Normal-tension glaucoma, since thin CCT means the true IOP is about 18. Stage as early, and do a 30-2 next to look at the periphery.',
                    'POAG, early (Hodapp: any field defect under −6 dB counts as early). The field is too unreliable on a first test, so no further tests are needed until the 12-month review.'
                ],
                answer: 0,
                explain: 'Pallor out of proportion to cupping, or an RAPD without matching field loss, points away from glaucoma (compressive, ischaemic, inherited).',
                recall: 'One room wrote the stage as “late stage, MD worse than 12”; Hodapp’s cut-off is −12 dB. The rooms also listed NAION and vascular occlusion: possible, but there’s no pallor and the defect fits the notch.'
            },
            {
                phase: '6. First drop',
                type: 'mcq',
                question: 'Which first drop, and why not timolol?',
                options: [
                    'Latanoprost 0.005% nocte: raises uveoscleral outflow (remodels the ciliary muscle matrix). Not timolol: he is on a systemic β-blocker, so less added effect and more bradycardia and hypotension.',
                    'Timolol 0.5% BD: β-blockers add to each other, so his systemic tablet makes timolol work better. Latanoprost is avoided in men over 60, as it causes orbital fat atrophy and ptosis in men.',
                    'Brinzolamide 1% TDS: carbonic anhydrase inhibitors are first-line in hypertensive patients. Latanoprost is avoided as it raises blood pressure, and timolol only works while he is awake.',
                    'Pilocarpine 2% QID: miotics are first-line in open-angle glaucoma with a myopic eye, as they pull the TM open. Latanoprost is only for patients who have already failed SLT.'
                ],
                answer: 0,
                explain: 'PGA side effects: lash growth, redness, iris and periocular darkening, periorbital fat loss, stinging; avoid with active inflammation, CMO risk or past herpetic keratitis.'
            },
            {
                phase: '7. Target and review',
                type: 'mcq',
                question: 'What target do you set, when do you review, and what if it isn’t enough?',
                options: [
                    'At least 25–30% (26 → about 18 mmHg), lower given advanced disease; review in about 6 weeks for IOP, side effects and technique; then check adherence, add a drop or offer SLT.',
                    'A 10% reduction (26 → about 23 mmHg); review in 12 months with fields. If it isn’t reached, stop the drop and observe, since advanced disease responds poorly to any drops.',
                    'An IOP below 21 mmHg, as that is the normal range; review in 1 week. If it isn’t reached, double the latanoprost to BD, which gives an extra 20% reduction in IOP.',
                    'A 50% reduction (26 → 13 mmHg) on one drop; review in 6 months. If it isn’t reached, refer for trabeculectomy, since SLT doesn’t work in advanced glaucoma.'
                ],
                answer: 0,
                explain: 'Latanoprost BD is less effective than nocte. SLT is as effective as drops first-line (LiGHT) and avoids adherence problems; it can be repeated.'
            },
            {
                phase: '8. Script and referral',
                type: 'mcq',
                question: 'How do you write it, and what about referral?',
                options: [
                    'Latanoprost 0.005%, one drop each night in the eyes treated, 1 bottle with repeats; refer to an ophthalmologist within 4 months of starting (OBA guideline), sooner as it is advanced.',
                    'Latanoprost 0.005%, one drop each night, 12 months of repeats so he needn’t come back; no referral is needed while you manage him, as the drop is PBS-listed for optometrists.',
                    'Latanoprost 0.05%, two drops each morning, 1 bottle; refer only if the IOP target isn’t reached after a year of treatment, since collaborative care is optional in POAG.',
                    'Latanoprost/timolol combination, one drop each night, 5 repeats; combination drops are PBS-listed first-line, so referral is only needed if a second drop is added.'
                ],
                answer: 0,
                explain: 'PBS combination products need monotherapy to have been inadequate. The notes say to keep scripts to about 6 months until he is stable.',
                recall: 'The rooms gave both “diagnosed by an ophthalmologist within 3 months” and “within 4 months”. The repo’s 2025 recall audit uses the OBA guideline’s 4 months; check the current PBS and OBA wording.'
            },
            {
                phase: '9. OHTS risk factors',
                type: 'mcq',
                question: 'Which baseline factors predicted conversion in the OHTS multivariate model?',
                options: [
                    'Older age, higher IOP, thinner CCT, larger vertical CDR, higher PSD.',
                    'Diabetes, African ancestry and myopia, with family history the strongest.',
                    'Family history, female sex, hyperopia and a past history of migraine.',
                    'Higher MD, thicker CCT, smaller vertical CDR and younger age at entry.'
                ],
                answer: 0,
                explain: 'Family history and African ancestry were significant only before adjustment (African ancestry largely through thinner CCT and larger CDR).',
                recall: 'The notes list the OHTS multivariate factors as “diabetes, African ethnicity, myopia”. Those aren’t the multivariate predictors; diabetes even appeared protective, probably from how participants were selected.'
            },
            {
                phase: '10. Pregnancy',
                type: 'mcq',
                question: 'If this were a pregnant woman with the same findings, what would you do?',
                options: [
                    'Prefer SLT; if drops are needed, timolol (TGA C) at the lowest dose with punctal occlusion. PGAs are B3 (uterotonic concern); avoid brimonidine near term and when breastfeeding.',
                    'Latanoprost is safest (TGA category A) and is continued unchanged through the pregnancy; avoid timolol completely, as β-blockers are category X in pregnancy whatever the dose.',
                    'Stop all treatment until after delivery, as every glaucoma drop is category X in pregnancy; advanced glaucoma rarely progresses over 9 months, so the risk of waiting is low.',
                    'Brimonidine first, as category C is the safest; PGAs are fine in the first trimester only, and SLT is avoided in pregnancy because the laser energy reaches the fetus.'
                ],
                answer: 0,
                explain: 'Brimonidine can cause CNS depression and apnoea in infants; it is contraindicated under 2 years. Involve the obstetrician and ophthalmologist.',
                recall: 'The notes say “C is better than B3 (C formally tested, B3 no study)”. TGA categories aren’t a ranking: B3 means animal studies showed harm with limited human data; C means a pharmacological effect on the fetus (e.g. β-blockade). Use the drug’s own risks.'
            },
            {
                phase: '11. Six-week review',
                type: 'reveal',
                text: 'At the 6-week IOP check he complains his vision is blurry. A new field shows a dense defect filling one half of the field, with a sharp edge along the vertical midline.'
            },
            {
                phase: '12. What now?',
                type: 'mcq',
                critical: true,
                question: 'What does this field mean?',
                options: [
                    'A defect respecting the vertical midline is neurological (chiasmal or behind it), not glaucoma, which respects the horizontal. Test the other eye’s field, look for pallor; urgent neuroimaging.',
                    'Glaucoma progression: the superior arcuate has spread around fixation into the nasal field. Add timolol to the latanoprost and repeat the field in 6 months to confirm the change before acting.',
                    'A learning effect: a second field often looks worse than the first. Repeat the field in 3 months, and only refer if the same pattern appears on two more consecutive fields after that.',
                    'A latanoprost side effect: PGAs cause cystoid macular oedema, which blurs vision and gives hemianopic defects. Stop the drop and switch to brinzolamide 1% TDS instead.'
                ],
                answer: 0,
                explain: 'A compressive lesion can also cup the disc. Arrange imaging through the GP or ED and refer to neuro-ophthalmology.'
            }
        ]
    },
    {
        id: 'yo26-pds',
        category: 'glaucoma',
        title: 'Pigment on the Endothelium and a Pigmented Angle',
        theme: 'PDS / Pigmentary Glaucoma',
        years: ['Mock 2026'],
        patient: 'Young adult man, myopic.',
        stem: 'Referred after a routine exam. IOP raised; he mentions blurring after vigorous exercise.',
        exhibit: 'Slit lamp: fine pigmented deposits on the endothelium in a vertical spindle, plus a gonioscopy photo of a heavily pigmented trabecular meshwork.',
        steps: [
            {
                phase: '1. Describe it',
                type: 'mcq',
                question: 'You are shown the endothelium photo. How do you start?',
                options: [
                    'Broad first: “pigmented deposits on the central endothelium in a vertical spindle”, then “this looks like a Krukenberg spindle, suggesting pigment dispersion”, then what else to look for.',
                    'Name the condition straight away (“pigmentary glaucoma”), since describing the photo wastes the panel’s time, then stage the glaucoma from how much pigment is on the cornea and in the angle.',
                    'Call them keratic precipitates from uveitis, since all deposits on the endothelium are inflammatory cells, then ask for the AC cell grade and start prednisolone acetate 1%.',
                    'Say the photo shows the cornea guttata of Fuchs dystrophy, since central endothelial dots are guttae, then ask for the pachymetry, the endothelial count and ask about blur on waking.'
                ],
                answer: 0,
                explain: 'The tutors: start broad (“deposits”, “something on the cornea”), then refine. If you are wrong, a broad start leaves room to correct yourself.'
            },
            {
                phase: '2. What else?',
                type: 'multi',
                question: 'Which findings support pigment dispersion?',
                options: [
                    'Mid-peripheral spoke-like iris transillumination defects',
                    'Posterior iris bowing (concave iris) on gonioscopy',
                    'Heavy, even trabecular pigment, most dense inferiorly',
                    'Pigment on the posterior lens capsule at the zonules (Zentmayer ring)',
                    'IOP spikes after exercise or dilation',
                    'Dandruff-like flakes on the anterior lens capsule'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Pigment is released as the posteriorly bowed iris rubs on the zonules. Flakes on the lens are pseudoexfoliation.'
            },
            {
                phase: '3. Natural history',
                type: 'mcq',
                question: 'How often does PDS convert to pigmentary glaucoma, and what happens later in life?',
                options: [
                    'About 10% at 5 years and 15% at 15 years in a population study (Olmsted County), more in hospital series. It can burn out, leaving superior angle pigment above inferior (pigment reversal sign).',
                    'About 90% within 5 years, so all PDS is treated as glaucoma from diagnosis. It never burns out with age, and the inferior angle stays the most heavily pigmented part for life as pigment keeps building up.',
                    'Under 1% ever convert, so PDS is discharged once diagnosed. It worsens with age, as the thickening lens pushes the iris further back and rubs more pigment off the zonules each year.',
                    'About 50% within a year of the first IOP spike. Later the iris becomes convex and closes the angle, so LPI is needed in every PDS patient over 40 to prevent angle closure.'
                ],
                answer: 0,
                explain: 'Pigment clears from the inferior angle first as dispersion slows, so the superior angle ends up more pigmented.',
                recall: 'The rooms gave conversion as “10–40%” and “20–50%”. The 35–50% figures come from older hospital-based series; the population-based figure is about 10% at 5 years, 15% at 15 years.'
            },
            {
                phase: '4. Treatment',
                type: 'mcq',
                question: 'He has pigmentary glaucoma. What do you weigh up?',
                options: [
                    'A PGA works well. SLT works but lasts less and spikes more with heavy pigment (use lower energy). LPI cuts iridozonular contact, but evidence it prevents glaucoma is weak. Surgery if uncontrolled.',
                    'LPI cures pigmentary glaucoma by flattening the iris, so no drops are needed after it. SLT is contraindicated, as the pigment blocks the laser completely. PGAs worsen pigment release from the iris.',
                    'Pilocarpine is first-line, as it stops the iris rubbing on the zonules and is well tolerated in young myopes. SLT works better in pigmented angles than in any other type of glaucoma.',
                    'Observe until there is field loss, as PDS pressures always settle with age and burnout. Timolol is avoided, as it increases pigment dispersion during exercise in young men.'
                ],
                answer: 0,
                explain: 'Pilocarpine reverses the iris bowing but young myopes tolerate it poorly (brow ache, myopic shift) and it carries a retinal detachment risk.',
                recall: 'The notes say “not much evidence around PDS”, which is fair: there are few high-quality RCTs, and in the one RCT of LPI it didn’t prevent progression to raised IOP.'
            },
            {
                phase: '5. Theories of damage',
                type: 'match',
                question: 'The panel asks for the three theories of glaucomatous damage.',
                pairs: [
                    { label: 'Mechanical', answer: 'IOP deforms the lamina cribrosa and blocks axonal transport' },
                    { label: 'Vascular', answer: 'Poor or unstable optic nerve perfusion (NTG, disc haemorrhages)' },
                    { label: 'Cellular / mitochondrial', answer: 'Metabolic failure and oxidative stress cause ganglion cell apoptosis' }
                ],
                distractors: ['Bacterial infection of the optic nerve head'],
                explain: 'Glaucoma: a progressive optic neuropathy with ganglion cell and axon loss, structural damage to the disc and matching field loss; IOP is the main modifiable risk factor.'
            }
        ]
    },
    {
        id: 'yo26-pxf',
        category: 'glaucoma',
        title: 'Flakes on the Lens in an Older Patient',
        theme: 'PXG',
        years: ['Mock 2026'],
        patient: 'Woman in her 70s of Scandinavian descent.',
        stem: 'Raised IOP in one eye at a routine exam.',
        exhibit: 'Dilated slit lamp photos: grey-white flaky material on the anterior lens capsule in a central disc and peripheral band (bull’s-eye), and a moth-eaten pupillary ruff.',
        steps: [
            {
                phase: '1. Signs',
                type: 'multi',
                question: 'Which findings fit pseudoexfoliation?',
                options: [
                    'Bull’s-eye pattern of material on the anterior capsule',
                    'Loss of the pupillary ruff and peripupillary TIDs',
                    'Patchy trabecular pigment and a Sampaolesi line',
                    'Poor dilation',
                    'Phacodonesis (weak zonules)',
                    'A Krukenberg spindle in a young myope'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Sampaolesi line: pigment anterior to Schwalbe’s line. PDS gives mid-peripheral TIDs; PXF gives peripupillary ones.'
            },
            {
                phase: '2. Risk',
                type: 'mcq',
                question: 'How likely is she to get glaucoma, and how does PXF glaucoma behave?',
                options: [
                    'PXF with normal IOP: about 5% at 5 and 15% at 10 years; with OHT, about twice the conversion of OHT alone. PXG has higher, swinging IOP and progresses faster (EMGT).',
                    'Every PXF patient has glaucoma within 5 years, so treat her now. PXG progresses more slowly than POAG, so yearly reviews are enough once treatment has started.',
                    'PXF has no link with glaucoma; her raised IOP is a coincidence. EMGT found PXF eyes progressed at the same rate as POAG and responded better to drops.',
                    'About 1% at 10 years; PXF is benign in Australia, where UV levels prevent conversion. PXG has a lower IOP than POAG, so a 20% target is enough for her.'
                ],
                answer: 0,
                explain: 'More common at high latitudes and in Nordic populations, rising steeply with age; LOXL1 variants are a risk factor. It is a systemic matrix disorder.',
                recall: 'The notes give a “60% cumulative risk at 5 years” and “30% in over-70s in Scandinavia”. The ~55–60% figure is for PXF with OHT over about 10 years; prevalence in older Nordic people is high but varies a lot between studies.'
            },
            {
                phase: '3. Management',
                type: 'mcq',
                question: 'How does management differ from POAG?',
                options: [
                    'Lower target and closer follow-up (bigger diurnal swings); drops work less well, so combinations come sooner; SLT responds well at first; refer, as it is a secondary glaucoma.',
                    'Higher target and less follow-up, as PXF eyes tolerate IOP well; drops work better than in POAG, so one drop is always enough; laser is contraindicated in a PXF angle.',
                    'The same as POAG in every way; the only difference is that PGAs are contraindicated, because they wash the exfoliative material into the angle and block it.',
                    'Pilocarpine is first-line, as it holds the pupil still so less material is rubbed off; other drops are avoided, as β-blockers make the zonular weakness worse in PXF eyes.'
                ],
                answer: 0,
                explain: 'Tell the cataract surgeon: weak zonules (phacodonesis, dropped lens, later IOL dislocation), poor dilation, post-op IOP spikes.'
            }
        ]
    },
    {
        id: 'yo26-sac',
        category: 'allergy',
        title: 'Itchy Swollen Lids After a Move',
        theme: 'Allergic Conjunctivitis',
        years: ['Mock 2026'],
        patient: '21-year-old man, recently moved to Australia from Pakistan with his family. Penicillin allergy. Not a CL wearer.',
        stem: 'Itchy, irritated, red, swollen, watery eyes for 6 days: right first, now both. Worse in the morning. Rubs his eyes a lot. Little pain, mild light sensitivity, vision unaffected. First time.',
        exhibit: 'External photo: upper and lower lid oedema and redness with darker skin under the eyes. Lower lid everted: hyperaemic palpebral conjunctiva with papillae.',
        steps: [
            {
                phase: '1. Findings',
                type: 'reveal',
                text: 'VA R 6/7.5, L 6/6. Pupils and motility normal, no pain on eye movement. IOP R 22, L 21. Lid oedema and erythema, inferior papillae, watery discharge only. Cornea clear with fluorescein, AC quiet. Upper lid eversion similar.'
            },
            {
                phase: '2. Papillae or follicles?',
                type: 'match',
                question: 'Match each feature to what it suggests.',
                pairs: [
                    { label: 'Papillae: vascular core, cobblestone', answer: 'Allergic (or CL-related) inflammation' },
                    { label: 'Follicles: avascular, rice-grain, lymphoid', answer: 'Viral or chlamydial infection, or drug toxicity' },
                    { label: 'No pain on eye movement, no fever', answer: 'Orbital cellulitis unlikely' },
                    { label: 'Dark skin under the eyes', answer: 'Allergic shiners from congestion and rubbing' }
                ],
                distractors: ['Bacterial keratitis'],
                explain: 'Differentials: seasonal or perennial allergic conjunctivitis, viral conjunctivitis, contact dermatitis, preseptal cellulitis (ask about a recent stye), dry eye.'
            },
            {
                phase: '3. First-line',
                type: 'mcq',
                question: 'What do you prescribe first?',
                options: [
                    'Ketotifen 0.025% (Zaditen) BD, chilled lubricants, cold compresses, and allergen avoidance (shower before bed, wash bedding, keep pets out of the bedroom). Review in 1–2 weeks.',
                    'Ketotifen 0.025% hourly for the first day, then QID, as more frequent doses work faster; lubricants at room temperature; no lifestyle changes until the allergen is known.',
                    'Chloramphenicol 0.5% QID for a week, since swollen lids may be infective; antihistamine drops only if the swelling persists after the antibiotic course. Review in 1 week.',
                    'Prednisolone acetate 1% QID for 2 weeks with a slow taper, since lid swelling means severe allergy; antihistamines aren’t needed while he is on a steroid. Review in 2 weeks.'
                ],
                answer: 0,
                explain: 'Dual-acting drops (ketotifen, olopatadine) are about equally effective. The antihistamine effect starts within minutes; mast-cell stabilisation builds over days to weeks, so start before a season.',
                recall: 'The notes say Zaditen “will take 2–4 weeks to work” and that more than BD causes “reversal and histamine release”. Its H1 effect is immediate; only the mast-cell action takes longer. BD is the labelled dose, and extra doses add preservative without benefit.'
            },
            {
                phase: '4. No better at review',
                type: 'mcq',
                question: 'He is no better at review. What next?',
                options: [
                    'Check adherence and the diagnosis; then add a low-potency steroid briefly (e.g. FML 0.1% BD–QID for 1–2 weeks), check IOP, keep the ketotifen; oral antihistamine via the GP or pharmacy.',
                    'Switch to prednisolone acetate 1% hourly for a month and stop the ketotifen; there is no need to check IOP, as steroid IOP responses only happen with oral steroids.',
                    'Add a topical NSAID QID and stop everything else, as NSAIDs work better than antihistamines in allergic conjunctivitis and don’t sting; review him again in about 3 months.',
                    'Start ciclosporin 0.1% QID yourself as the first escalation, since it works within 24 hours; steroids are never used in allergic conjunctivitis because of the cataract risk in young men.'
                ],
                answer: 0,
                explain: 'Topical NSAIDs help a little but sting. Ciclosporin is for severe chronic disease such as VKC and AKC, through an ophthalmologist.'
            }
        ]
    },
    {
        id: 'yo26-vkc',
        category: 'allergy',
        title: 'Boy with Ropy Discharge and Limbal Dots',
        theme: 'VKC',
        years: ['Mock 2026'],
        patient: '11-year-old boy, recently moved to Australia. No health problems, medications or allergies. Not a CL wearer.',
        stem: 'Both eyes itchy and swollen for a week, with white watery discharge, discomfort, photophobia and blur.',
        exhibit: 'Photos: limbal hyperaemia with raised gelatinous thickening; inferior palpebral conjunctiva oedematous, velvety and hyperaemic with a white ropy strand; everted upper lid with large cobblestone papillae.',
        steps: [
            {
                phase: '1. Findings',
                type: 'reveal',
                text: 'VA R 6/9, L 6/7.5 (mild astigmatism). Pupils, motility normal. IOP R 16, L 14. Gelatinous limbal thickening with white dots, temporal and inferior hyperaemia, white ropy mucus, giant cobblestone papillae on the upper tarsus. No shield ulcer.'
            },
            {
                phase: '2. Diagnosis',
                type: 'mcq',
                question: 'What is it, and why?',
                options: [
                    'Vernal keratoconjunctivitis (limbal and tarsal): young boy, warm dry climate, itch with ropy mucus, cobblestone papillae and Horner–Trantas dots. Mainly IgE (type I), with T cells too.',
                    'Atopic keratoconjunctivitis: young boys with cobblestone papillae, which starts in childhood and resolves at puberty. It is a type IV reaction with no IgE or mast-cell involvement at all.',
                    'Giant papillary conjunctivitis from contact lenses: giant papillae always mean a CL or a suture, even though he says he doesn’t wear lenses, so ask him and his parents about lens wear again.',
                    'Marginal keratitis: the white limbal dots are staphylococcal infiltrates, and the ropy discharge shows blepharitis. Treat the lids with scrubs and the limbal dots will clear.'
                ],
                answer: 0,
                explain: 'Boys are affected about 3–4 times as often as girls. AKC is in older adults with eczema. Ask about CL wear even in children (GPC).'
            },
            {
                phase: '3. Treatment',
                type: 'mcq',
                question: 'How do you treat him?',
                options: [
                    'Ketotifen BD long term plus a short pulse of FML 0.1% QID with a quick taper (about 2 weeks), so the mast-cell stabiliser has taken effect when the steroid ends. Cold compresses.',
                    'Prednisolone acetate 1% hourly for a month with a slow taper over another month, as VKC needs deep penetration; antihistamine drops are useless in VKC, so they aren’t used here.',
                    'FML 0.1% QID indefinitely as the only treatment, since children don’t get steroid IOP rises and FML can’t cause cataract; review once a year with an IOP and fundus check.',
                    'Chloramphenicol 0.5% QID for the ropy discharge, plus lid scrubs; steroids are never used in children, because steroid drops stunt growth. Review in 2 weeks.'
                ],
                answer: 0,
                explain: 'The tutors’ taper: fast (e.g. 3, 2, 1 a day). Severe or steroid-dependent disease: ciclosporin 0.1% (Verkazia) via ophthalmology.'
            },
            {
                phase: '4. Steroid safety',
                type: 'mcq',
                critical: true,
                question: 'What must you do while he is on the steroid?',
                options: [
                    'Check IOP within 1–2 weeks and while on it: children respond to steroids more often and faster, with rises usually at 3–6 weeks. Look for shield ulcers; keep courses short.',
                    'Nothing extra: FML can’t raise IOP, and children are less likely than adults to be steroid responders, so IOP is checked only once a year at his routine eye examination.',
                    'Check his height and weight each month, as topical FML stunts growth in children; IOP isn’t a concern below age 12, as the trabecular meshwork can’t respond to steroids yet.',
                    'Check IOP only if he reports a headache or blur, as a steroid IOP rise is always symptomatic in children; otherwise review him at 6 months, when the course has finished.'
                ],
                answer: 0,
                explain: 'Refer a shield ulcer or plaque to ophthalmology. Steroid cataract (posterior subcapsular) is another reason to keep courses short.'
            },
            {
                phase: '5. Prognosis',
                type: 'mcq',
                question: 'His parents ask whether it will come back.',
                options: [
                    'Probably, each warm season, until puberty: most outgrow it within 4–10 years of onset. Long term: allergen avoidance, cold compresses, a mast-cell stabiliser before the season, allergy testing.',
                    'No: VKC is a single episode that clears for good once it has been treated, so no follow-up visits or preventive drops are needed after this course, and he can be discharged from your care today.',
                    'Yes, for life, and it gets worse each year; most children with VKC need a corneal graft by adulthood, so refer him to a corneal surgeon now to plan for one while he is still young.',
                    'Only if he goes back to Pakistan: VKC is caused by an allergen found only in that region, so in Australia it won’t recur, and the ketotifen can be stopped after this episode.'
                ],
                answer: 0,
                explain: 'Rarely, scarring from shield ulcers or limbal stem cell deficiency affects vision long term.'
            }
        ]
    },
    {
        id: 'yo26-aau',
        category: 'uveitis',
        title: 'Red Painful Eye with a Hypopyon and a Sore Back',
        theme: 'Acute Anterior Uveitis',
        years: ['Mock 2026'],
        patient: '25-year-old man, walks in wearing sunglasses. No CL wear, trauma, surgery, medications or allergies. Occasional sore back.',
        stem: 'Left eye increasingly red, achy and light-sensitive for 3 days (7/10), mild tearing, vision a bit blurry. First episode. Chloramphenicol drops from the chemist haven’t helped.',
        exhibit: 'Photos of the left eye: diffuse hyperaemia (more nasally) with ciliary flush, an irregular pupil, a small hypopyon, and large white deposits on the inferior endothelium.',
        steps: [
            {
                phase: '1. Findings',
                type: 'reveal',
                text: 'VA R 6/6, L 6/12 (no pinhole improvement). IOP R 16, L 11. Left: ciliary flush, hazy cornea, KPs central to inferior, grade 4 cells, grade 3 flare, small hypopyon, irregular pupil. No pain on eye movement. Fluorescein: no staining.'
            },
            {
                phase: '2. Differentials',
                type: 'multi',
                question: 'Which differentials must you think about or rule out?',
                options: [
                    'Acute anterior uveitis (HLA-B27)',
                    'Endophthalmitis (no surgery or penetrating injury here)',
                    'Masquerade (e.g. lymphoma in older patients)',
                    'Microbial keratitis (no ulcer, no CL wear)',
                    'Acute angle closure (IOP low, angle open, no oedema)',
                    'Allergic conjunctivitis'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'A hypopyon is also seen in endophthalmitis and microbial keratitis, so say why each is unlikely.'
            },
            {
                phase: '3. Before treating',
                type: 'mcq',
                question: 'What else do you do before starting treatment?',
                options: [
                    'Grade cells and flare (SUN), check the angle and IOP, then dilate for a fundus exam to rule out posterior involvement (OCT for oedema). Ask about joints, back pain, rashes, bowel, fever.',
                    'Nothing more: start the steroid now and leave dilation until the 1-month review, as dilating a uveitic eye causes angle closure in every case. Ask only about symptoms in the other eye.',
                    'Take a conjunctival swab for culture before any drop, since a hypopyon is infective until the swab is negative; ask about recent travel, and start antibiotics while you wait for it.',
                    'Do gonioscopy and visual fields first, as the low IOP means the ciliary body has shut down for good and he needs a glaucoma work-up; ask about family history of glaucoma.'
                ],
                answer: 0,
                explain: 'Low IOP in AAU comes from reduced aqueous production by the inflamed ciliary body.'
            },
            {
                phase: '4. Steroid',
                type: 'mcq',
                question: 'Which steroid, and how often?',
                options: [
                    'Prednisolone acetate 1% (suspension: shake): every 15 min for the first hour, every 30 min for 2 h, then hourly; review the next day; taper once SUN cells drop 2 steps.',
                    'FML 0.1% QID, since a young patient is at high risk of a steroid IOP response; increase to prednisolone acetate only if the hypopyon is still there after 2 weeks.',
                    'Prednisolone sodium phosphate 0.5% BD, as phosphate penetrates the intact cornea best; review in 2 weeks and stop the drops as soon as the eye is white.',
                    'Dexamethasone 0.1% hourly for 2 days, then stop without a taper, as a hypopyon points to infection that a longer steroid course would only make worse.'
                ],
                answer: 0,
                explain: 'Acetate is lipophilic and penetrates an intact cornea best. A 2-step SUN drop (or to 0) counts as improvement.',
                recall: 'The notes say Pred Forte “has phenylephrine, help to resolve synechiae”. That is Prednefrin Forte (prednisolone acetate 1% + phenylephrine 0.12%); Pred Forte has none. 0.12% phenylephrine is a vasoconstrictor too weak to break synechiae.'
            },
            {
                phase: '5. Cycloplegic',
                type: 'mcq',
                question: 'Why add a cycloplegic, and which?',
                options: [
                    'Atropine 1% (or homatropine 2%): eases ciliary spasm and photophobia, breaks and prevents posterior synechiae and stabilises the blood–aqueous barrier. Atropine lasts about a week.',
                    'Tropicamide 0.5%: it lasts the longest of the cycloplegics, so once a week is enough; its main job here is to raise the low IOP back to normal by relaxing the shut-down ciliary body.',
                    'Pilocarpine 1%: constricting the pupil pulls the iris off the lens so synechiae can’t form, and it lowers the inflammation, so it can replace the steroid in a mild case of AAU.',
                    'Cyclopentolate 1% hourly: it is the most anti-inflammatory cycloplegic, so it can be used instead of the steroid in mild cases, and it lasts longer than atropine does.'
                ],
                answer: 0,
                explain: 'The notes add phenylephrine 2.5% if the cycloplegic alone hasn’t broken the synechiae.'
            },
            {
                phase: '6. Three weeks on',
                type: 'reveal',
                text: 'Reviewed every 5 days and tapering. At 3 weeks: cells 0.5+, no flare, no hypopyon. VA 6/6 OU. IOP left 29 mmHg.'
            },
            {
                phase: '7. IOP 29',
                type: 'mcq',
                question: 'What is happening, and what do you do?',
                options: [
                    'Probably a steroid response, as the inflammation has settled: keep tapering, add timolol (if no asthma or bradycardia) or brimonidine, or a combination; avoid a PGA. Check for PAS.',
                    'Rebound uveitis from the taper: put the prednisolone back to hourly and add latanoprost, since PGAs are the strongest drop and inflammation doesn’t affect how they work.',
                    'Angle closure caused by the atropine: stop the cycloplegic, start pilocarpine 2% QID to open the angle, then refer for an LPI in both eyes within the next fortnight.',
                    'Normal for this stage: IOP always rises as uveitis settles and the ciliary body recovers, so no treatment is needed; recheck the IOP in 3 months once the drops have stopped.'
                ],
                answer: 0,
                explain: 'PGAs are pro-inflammatory and avoided while the eye is inflamed. Other causes of raised IOP in uveitis: trabeculitis, PAS, debris.'
            },
            {
                phase: '8. Other eye, 6 months later',
                type: 'mcq',
                critical: true,
                question: 'He returns with the same in the other eye. Besides treating, what now?',
                options: [
                    'Recurrent, alternating AAU with back pain: refer via the GP for work-up (HLA-B27, spine X-ray or MRI, ESR/CRP, syphilis serology, TB testing, chest X-ray) and rheumatology.',
                    'Nothing more: a second episode is still idiopathic in most patients. Treat it exactly the same way and only investigate if there is a third episode in the same eye.',
                    'Refer for a vitreous biopsy, as recurrent uveitis in a young man is intraocular lymphoma until proven otherwise; HLA-B27 testing isn’t useful after the first episode.',
                    'Start long-term prednisolone acetate 1% once daily in both eyes to prevent further attacks; blood tests and X-rays won’t change management, so they aren’t needed.'
                ],
                answer: 0,
                explain: 'Refer to ophthalmology if it is bilateral, severe, posterior, not responding to steroid, or after recent surgery.'
            }
        ]
    },
    {
        id: 'yo26-panel-tips',
        category: 'professional',
        title: 'Red Flags and Tips from the YO Tutors',
        theme: 'Exam Technique',
        years: ['Mock 2026'],
        patient: 'Advice from the tutors at the end of the 2026 YO session.',
        stem: 'The tutors listed what costs candidates the most, and how to present.',
        steps: [
            {
                phase: '1. Red flags',
                type: 'multi',
                question: 'Which did the tutors call red flags?',
                options: [
                    'Tapering an antibiotic below QID',
                    'Delaying angle-closure treatment to do gonioscopy',
                    'Missing a contraindication',
                    'A PGA in an inflamed eye',
                    'Not dilating a patient with herpetic disease',
                    'A steroid on an open HSV epithelial defect',
                    'Asking whether that is all the information you get',
                    'Starting an exhibit with a broad description'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Asking “is that all the information?” and starting broad were both tutor tips, not mistakes.'
            },
            {
                phase: '2. Describing a lesion',
                type: 'multi',
                question: 'What should you say when describing a corneal lesion?',
                options: [
                    'Which eye, and where (e.g. inferonasal, paracentral)',
                    'Shape, depth and size',
                    'Size against the pupil (e.g. half a 3 mm pupil ≈ 1.5 mm)',
                    'Whether it stains, and how (glowing vs negative staining)',
                    'Lids and lashes → conjunctiva → cornea → AC → pupil, outside in',
                    'The diagnosis first, before any description'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Working from outside in keeps you from missing the lids or the AC.'
            },
            {
                phase: '3. Prescribing',
                type: 'viva',
                question: '“Tell us exactly what you’d prescribe.” What must a prescribing answer include?',
                points: [
                    'Drug name and concentration (e.g. ciprofloxacin 0.3%)',
                    'A clear schedule, day by day where it changes',
                    'Mechanism of action, and why this drug over the alternatives',
                    'Contraindications checked, and how you’d monitor side effects',
                    'When you review, and what changes the plan'
                ],
                explain: 'The tutors: justify everything you say, and know why it is A and not B.'
            }
        ]
    }
);
