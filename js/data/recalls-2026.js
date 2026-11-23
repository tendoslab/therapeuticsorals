// Cases from the 2026 therapeutics orals, Monday 23 November (candidates’ recalls, “2026 Orals questions_answers”).
// Morning examiners Elizabeth and Ereeny, afternoon Sophia and Daisy. Two cases each (one anterior, one glaucoma);
// case reports were barely asked. Sittings that asked the same case are merged, with the times in `patient`.
window.CASES.push(
    {
        id: 'r2026-aau-hypopyon',
        category: 'uveitis',
        title: 'Photophobia From Symptoms Alone, Then a Hypopyon',
        theme: 'HLA-B27 Acute Anterior Uveitis',
        years: ['2026'],
        patient: '35-year-old woman, recently moved here (Monday 9:20, 10:00 and 2:00).',
        stem: 'Photophobia, watering and some pain, with blur at distance and near. Two similar episodes last year, treated by an optometrist with drops she can’t name. The examiner gives symptoms only and asks for differentials before showing any photo.',
        steps: [
            {
                phase: '1. Differentials from symptoms',
                type: 'multi',
                question: 'From the symptoms alone (pain, photophobia, watering, blur, recurrent), which differentials must you give?',
                options: [
                    'Acute anterior uveitis',
                    'Acute angle closure',
                    'Microbial keratitis (bacterial, fungal, Acanthamoeba)',
                    'HSV keratitis',
                    'Marginal keratitis / Thygeson’s',
                    'Central serous chorioretinopathy'
                ],
                answers: [0, 1, 2, 3, 4],
                critical: true,
                explain: 'Pain + photophobia + blur is AAU, AAC or keratitis until shown otherwise. Recurrence with drops that “worked” points to steroid-responsive disease: AAU above all.',
                recall: 'The 9:20 candidate gave allergic conjunctivitis, keratitis and CSCR, missed uveitis, then was shown a hypopyon. Allergy doesn’t cause real photophobia or blur, and CSCR isn’t painful. Lead with the sight-threatening anterior causes: AAU, AAC, MK.'
            },
            {
                phase: '2. Photo',
                type: 'reveal',
                text: 'Photo: ciliary flush, a hypopyon, posterior synechiae with an irregular pupil, clear cornea. At the slit lamp: grade 3+ AC cells and flare, no mutton-fat KPs, IOP 12 mmHg, no corneal staining.'
            },
            {
                phase: '3. Diagnosis',
                type: 'mcq',
                question: 'What is the most likely diagnosis?',
                options: [
                    'Non-granulomatous acute anterior uveitis, likely HLA-B27 associated: recurrent, unilateral, hypopyon, fibrin and synechiae.',
                    'Granulomatous anterior uveitis from sarcoidosis: recurrent, unilateral, hypopyon, fibrin, low IOP and broad posterior synechiae.',
                    'Endogenous endophthalmitis: hypopyon, fibrin, flare and synechiae seeded from a blood-borne source in a young adult.',
                    'Acute angle closure with secondary inflammation: synechiae, a mid-dilated irregular pupil, ciliary flush and cells.'
                ],
                answer: 0,
                why: {
                    1: 'Granulomatous disease gives mutton-fat KPs and iris nodules and is usually chronic; none are described.',
                    2: 'Endophthalmitis needs a route in (surgery, trauma, a blood-borne source) and the eye is usually much sicker, with vitritis.',
                    3: 'The IOP is 12 and the angle question hasn’t been raised; a hypopyon is inflammation, not closure.'
                },
                explain: 'Hypopyon + fibrin + recurrent unilateral alternating episodes in a young adult = HLA-B27 AAU until proven otherwise.'
            },
            {
                phase: '4. IOP in uveitis',
                type: 'match',
                question: 'Match the typical IOP to the condition (the 10:00 and 2:00 rooms both asked this).',
                pairs: [
                    { label: 'HLA-B27 AAU', answer: 'Usually low or normal: the inflamed ciliary body makes less aqueous' },
                    { label: 'Herpetic (HSV/VZV) anterior uveitis', answer: 'Often raised: trabeculitis' },
                    { label: 'Posner-Schlossman', answer: 'Very high (40–60) with few cells' },
                    { label: 'Acute angle closure', answer: 'Very high with a closed angle and corneal oedema' }
                ],
                explain: 'A raised IOP in uveitis points to herpetic disease, PSS, trabeculitis, PAS or a steroid response. Low IOP is the usual AAU picture.'
            },
            {
                phase: '5. Work-up',
                type: 'viva',
                question: '“What’s your work-up, and what do you ask about systemically?”',
                points: [
                    'VA, pupils, IOP, slit lamp: grade cells and flare (SUN), KPs (fine vs mutton fat), synechiae, fluorescein (rule out keratitis)',
                    'Dilated fundus exam for intermediate or posterior involvement (and to break synechiae)',
                    'HLA-B27 review: low back pain and morning stiffness (ankylosing spondylitis), psoriasis, IBD (Crohn’s, UC), reactive arthritis (urethritis, recent gut or STI infection)',
                    'Also Behçet’s (mouth and genital ulcers), sarcoid, TB, syphilis, herpes, Lyme',
                    'Recurrent or hypopyon: GP for FBC, ESR, CRP, HLA-B27, syphilis serology, chest X-ray if granulomatous'
                ],
                explain: 'The 2:00 room went deep on HLA-B27 diseases: ankylosing spondylitis, Behçet’s, bowel disease. A review-of-systems mnemonic is fine, but name the diseases.'
            },
            {
                phase: '6. Treatment',
                type: 'mcq',
                question: 'What do you prescribe?',
                options: [
                    'Prednisolone acetate 1% q15min for the first hour, then hourly until cells fall by 2 SUN grades, then a slow taper; atropine 1% bd.',
                    'Fluorometholone 0.1% hourly until the cells fall by 2 SUN grades, then qid for a week and stop; cyclopentolate 1% tds to keep the pupil mobile.',
                    'Prednisolone acetate 1% qid for one week then stop; homatropine 2% at night, since atropine would pull the synechiae tighter in an active eye.',
                    'Dexamethasone 0.1% hourly with oral prednisolone 50 mg via the GP; no cycloplegic, since dilating risks a pressure spike in an inflamed eye.'
                ],
                answer: 0,
                critical: true,
                why: {
                    1: 'FML is too weak to penetrate for grade 3+ AAU, and stopping abruptly causes a rebound.',
                    2: 'qid is too little for grade 3+ cells with a hypopyon, and a cycloplegic breaks synechiae rather than tightening them.',
                    3: 'Oral steroids aren’t first line for unilateral AAU, and a cycloplegic is essential (pain, synechiae, blood–aqueous barrier).'
                },
                explain: 'Atropine: relieves ciliary spasm, breaks and prevents synechiae, and stabilises the blood–aqueous barrier. Prednefrin Forte is prednisolone acetate 1% with phenylephrine 0.12% (a decongestant, too weak to dilate).',
                recall: 'One candidate said “Pred Forte + phenylephrine 0.12%”: that is Prednefrin Forte, which is correct. Another called atropine “synergistic with phenylephrine”. Phenylephrine 2.5% helps break fresh synechiae, but the 0.12% in Prednefrin won’t.'
            },
            {
                phase: '7. Steroid safety check',
                type: 'multi',
                question: 'Before starting the steroid, what must you rule out or check?',
                options: [
                    'Active infection, especially HSV epithelial keratitis or a corneal ulcer',
                    'An epithelial defect (stain the cornea)',
                    'A known steroid responder, or glaucoma',
                    'Baseline IOP',
                    'Systolic blood pressure over 140 mmHg'
                ],
                answers: [0, 1, 2, 3],
                critical: true,
                explain: 'Hypertension isn’t a contraindication to a topical steroid.'
            },
            {
                phase: '8. Review',
                type: 'mcq',
                question: '“So how exactly are you reviewing this?” (the examiner meant the review interval)',
                options: [
                    'Next day (hypopyon), then every 2–7 days on intensive drops checking cells, flare, IOP and synechiae; refer the same day if it worsens or the back of the eye is involved.',
                    'In one week, since steroids take 5–7 days to work and an earlier review only shows unchanged cells; IOP at the end of the course; referral if it hasn’t settled at one month.',
                    'In 4–6 weeks at the end of the taper, to confirm it has resolved and check IOP once; interim visits only if pain returns, since daily visits don’t change management.',
                    'Daily until it has fully resolved, with the taper started only once the AC has been completely free of cells for one week, and IOP checked only at the final visit.'
                ],
                answer: 0,
                why: {
                    1: 'With a hypopyon, a week is too long to discover it is getting worse, and the IOP can rise in days.',
                    2: 'Too long a gap on intensive steroids: you would miss a pressure rise or a worsening eye.',
                    3: 'Daily for the whole course isn’t needed, and IOP must be checked at every visit while on a steroid.'
                },
                explain: 'The 9:20 candidate answered with a review of systems; when asked “how are you reviewing?”, give an interval and what you check. A hypopyon warrants same-day discussion with an ophthalmologist in many guidelines.'
            },
            {
                phase: '9. Posterior involvement',
                type: 'mcq',
                question: '“If there is posterior involvement, what does the ophthalmologist do?”',
                options: [
                    'Sub-Tenon’s or intravitreal steroid, oral steroid or immunosuppression, and vitrectomy for non-clearing vitritis.',
                    'Topical NSAIDs added to the topical steroid, with oral aciclovir prophylaxis and repeated anterior chamber taps.',
                    'Laser peripheral iridotomy to stop iris bombé, then topical steroid alone until the vitritis clears.',
                    'Topical steroid only, since posterior inflammation settles once the anterior chamber is quiet.'
                ],
                answer: 0,
                why: {
                    1: 'Topical drugs don’t reach the posterior segment in useful amounts.',
                    2: 'LPI treats pupil block, not posterior inflammation.',
                    3: 'Topical steroid barely reaches the vitreous and retina.'
                },
                explain: 'Topical drops treat the anterior segment only.'
            }
        ]
    },
    {
        id: 'r2026-oht-to-poag',
        category: 'glaucoma',
        title: 'NCT 29/28, Then a New Arcuate in One Eye',
        theme: 'OHT → Unilateral POAG',
        years: ['2026'],
        patient: '65-year-old man, controlled hypertension (Monday 9:20 with Elizabeth, and 9:40).',
        stem: 'Routine visit. IOP by non-contact tonometry R 29, L 28 mmHg (another room: 29 OU with iCare).',
        steps: [
            {
                phase: '1. NCT reading',
                type: 'mcq',
                question: '“His pressures are 29 and 28 with NCT. What are your thoughts?”',
                options: [
                    'Confirm with Goldmann (the reference standard) and note the time and CCT: NCT varies and tends to read above GAT at higher pressures.',
                    'Accept it: NCT agrees with Goldmann to within 1 mmHg at every pressure, so a repeat would only delay treatment of an IOP that is clearly high.',
                    'Repeat the NCT in a week at the same time of day; Goldmann is only needed when the NCT is over 30 mmHg in one or both eyes.',
                    'Measure with iCare instead: rebound tonometry is independent of corneal thickness, so it gives the true IOP without needing pachymetry.'
                ],
                answer: 0,
                why: {
                    1: 'NCT agreement with GAT is worse at higher pressures, and decisions should rest on GAT.',
                    2: 'Any reading that would change management should be confirmed with GAT, not just those over 30.',
                    3: 'iCare is also affected by corneal thickness and rigidity.'
                },
                explain: 'Here GAT was 25 OU.'
            },
            {
                phase: '2. History and work-up',
                type: 'viva',
                question: '“What would you like to know, and what’s your work-up?”',
                points: [
                    'Family history (first-degree), ethnicity, steroid use (all routes), eye trauma or surgery',
                    'Vascular: BP tablets and when taken, migraine, Raynaud’s, sleep apnoea; asthma/COPD and heart rate before a beta blocker',
                    'VA, pupils (RAPD), colour vision (neuro and medicolegal)',
                    'GAT with time, CCT, gonioscopy (open angle; secondary causes: PXF, pigment, recession)',
                    'Dilated disc and RNFL, OCT RNFL + GCL, 24-2 field (two reliable baselines)'
                ],
                explain: 'He was “perfectly healthy”, with normal discs (CD 0.4), OCT and fields at first.'
            },
            {
                phase: '3. CCT 550',
                type: 'mcq',
                question: 'GAT 25 OU, angles open, discs CD 0.4, fields and OCT normal. CCT is 550 µm. Diagnosis, and will you treat?',
                options: [
                    'OHT OU. CCT 550 is about average, so 25 is roughly accurate. Moderate risk (age 65, IOP 25, small cups): monitor 6-monthly or discuss treating.',
                    'OHT OU. CCT 550 is thick, so the true IOP is nearer 20 and he is low risk; treatment is only indicated once the IOP reaches 30, which is the OHTS cut-off.',
                    'POAG OU. An IOP of 25 with a CCT of 550 means damage is inevitable within 5 years, so start a PGA in both eyes today and refer within 4 months.',
                    'Glaucoma suspect OU. CCT 550 is thin, so the true IOP is nearer 30, which makes him very high risk; refer urgently to an ophthalmologist for SLT.'
                ],
                answer: 0,
                why: {
                    1: '550 µm is close to the population average (~540–555), not thick; OHTS has no IOP-30 cut-off for treatment.',
                    2: 'Without disc, RNFL or field damage it is OHT, not POAG, and most OHT never converts.',
                    3: '550 µm isn’t thin; OHTS’s highest-risk group was 555 µm or less.'
                },
                explain: 'OHTS risk factors for conversion: older age, higher IOP, thinner CCT (≤555 µm), larger vertical CD, higher PSD; disc haemorrhage 4–6×. Thin CCT roughly triples the risk (≤555 vs >588 µm). Use the OHTS/EGPS 5-year risk to decide.',
                recall: 'The 9:20 candidate said “average is 535, so 550 is thick and IOP is overestimated” and “I wouldn’t treat as IOP is under 30”. 550 is about average, and 30 isn’t an OHTS threshold. In the 9:40 room the CCT was 515 (thin): then the IOP is under-read and his risk is higher, which favours treating.'
            },
            {
                phase: '4. Field defect',
                type: 'reveal',
                text: 'He returns: a repeatable superior arcuate defect in the right eye, with matching inferior RNFL loss on OCT. MD −2 dB, nothing within the central 10°. The left eye is unchanged.'
            },
            {
                phase: '5. Diagnosis and stage',
                type: 'mcq',
                question: 'What is the diagnosis and stage?',
                options: [
                    'Right early POAG (structure–function agreement, MD better than −6 dB, fixation spared); left OHT.',
                    'Right moderate POAG (any arcuate defect is moderate under Hodapp); left early POAG by association.',
                    'Bilateral OHT: one field defect isn’t enough, so repeat in 12 months before changing the diagnosis.',
                    'Right NTG, since the IOP of 25 is within the normal range once corrected for the thick cornea.'
                ],
                answer: 0,
                why: {
                    1: 'Hodapp stages on MD and the central points, not on the shape; and the left eye has no damage.',
                    2: 'A repeatable defect with matching OCT loss is glaucoma; waiting a year wastes the chance to treat early.',
                    3: '25 mmHg is above the normal range, and the CCT is average, not thick.'
                },
                explain: 'Early: MD better than −6 dB with no point within the central 10° affected (RANZCO/Hodapp).'
            },
            {
                phase: '6. Treatment',
                type: 'multi',
                question: '“How will you treat?” Select all that apply.',
                options: [
                    'PGA (latanoprost 0.005% one drop nocte) if no contraindications, or SLT first-line',
                    'Target about 25% lower (EMGT) for early POAG',
                    'Refer to an ophthalmologist within 4 months of starting treatment (OBA)',
                    'Review IOP in 4–6 weeks with an adherence and drop-technique check',
                    'Oral acetazolamide through the GP to cover him until the ophthalmologist sees him'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Acetazolamide isn’t for chronic glaucoma.'
            },
            {
                phase: '7. SLT',
                type: 'mcq',
                question: '“What do you know about SLT?”',
                options: [
                    'A Q-switched 532 nm laser targets pigmented TM cells without thermal damage, triggering remodelling that improves outflow. LiGHT: 74% drop-free at 3 years; repeatable.',
                    'An argon laser burns the meshwork to shrink it and pull the intertrabecular spaces open. LiGHT: 74% drop-free at 3 years, but it can’t be repeated because of scarring.',
                    'A Nd:YAG laser cuts a hole in the peripheral iris to let aqueous bypass the pupil. LiGHT: 74% drop-free at 3 years, and it works best in angle closure.',
                    'A diode laser destroys part of the ciliary body to cut aqueous production. LiGHT: 74% drop-free at 3 years, but it’s reserved for refractory glaucoma.'
                ],
                answer: 0,
                why: {
                    1: 'That is ALT, which scars the meshwork and is hard to repeat. SLT spares the surrounding tissue.',
                    2: 'That is laser peripheral iridotomy, for angle closure.',
                    3: 'That is cyclophotocoagulation, for refractory glaucoma.'
                },
                explain: 'SLT lowers IOP by about 20–30%; it works less well at a low baseline IOP or in angle recession.'
            },
            {
                phase: '8. One eye or both?',
                type: 'mcq',
                question: '“Will you treat unilaterally or bilaterally?”',
                options: [
                    'Either, if justified: treat the POAG eye, and the OHT eye too if its risk is high (OHTS halved conversion); this also avoids asymmetric PGA effects.',
                    'Right eye only: OHTS showed that treating OHT doesn’t change the risk of conversion, so drops in the left eye would add side effects for no benefit.',
                    'Both eyes, always: once one eye has POAG the fellow eye is defined as POAG too, so they must get identical treatment and an identical target.',
                    'Left eye only at first, to use it as a control: a one-eye trial shows how well the drug works before committing the damaged eye to it.'
                ],
                answer: 0,
                why: {
                    1: 'OHTS showed treatment roughly halved 5-year conversion (9.5% → 4.4%).',
                    2: 'The fellow eye has no damage, so it is OHT, not POAG; its treatment depends on its own risk.',
                    3: 'The damaged eye must be treated; one-eye trials are no longer favoured because the eyes don’t respond symmetrically.'
                },
                explain: 'The examiner wanted a reasoned answer. Unilateral PGA gives asymmetric iris colour, lashes and periorbital changes.'
            }
        ]
    },
    {
        id: 'r2026-hsv-atopic',
        category: 'cornea',
        title: 'Atopic Woman With an Irritated Red Eye',
        theme: 'HSV Epithelial → Stromal and Endothelial Disease',
        years: ['2026'],
        patient: '45-year-old woman with atopy (hay fever, allergies) and dry eye, no contact lenses (Monday 9:40, 10:20, and parts of 1:00 and 2:00).',
        stem: 'One week of discomfort, redness and irritation in the left eye.',
        steps: [
            {
                phase: '1. History',
                type: 'viva',
                question: '“What will you ask?”',
                points: [
                    'Onset, duration, pain, photophobia, discharge, blur, itch',
                    'Past episodes and cold sores; skin rash or tingling on the forehead or nose (zoster)',
                    'Contact lenses, trauma, foreign body',
                    'Drops used (especially steroids) and other medicines; immune status',
                    'Atopy matters: eczema and atopic disease raise the risk of severe, bilateral HSV'
                ],
                explain: 'Atopy is the clue the examiner built in.'
            },
            {
                phase: '2. Photo',
                type: 'reveal',
                text: 'Photo: a branching epithelial lesion staining with fluorescein; the examiner asks you to describe it. Corneal sensation is reduced. No skin rash.'
            },
            {
                phase: '3. HSV or HZO?',
                type: 'mcq',
                question: 'How do you tell an HSV dendrite from a zoster pseudodendrite?',
                options: [
                    'HSV: a true ulcer with terminal bulbs that stains well. HZO: raised “painted-on” pseudodendrites without bulbs that stain poorly, plus a dermatomal rash.',
                    'HSV: raised plaques without terminal bulbs that stain poorly with fluorescein. HZO: a true ulcer with terminal bulbs that stains brightly, and the rash crosses the midline.',
                    'HSV: always bilateral, with a rash that crosses the vertical midline. HZO: unilateral, with a true dendritic ulcer that has terminal bulbs and stains brightly.',
                    'They can’t be told apart clinically, so a corneal scrape for PCR is needed before any treatment is started in either case.'
                ],
                answer: 0,
                why: {
                    1: 'This reverses the two: HSV has the terminal bulbs.',
                    2: 'Zoster respects the vertical midline; HSV is usually unilateral.',
                    3: 'They usually can be told apart at the slit lamp, and treatment shouldn’t wait for PCR.'
                },
                explain: 'Hutchinson’s sign (vesicles on the tip of the nose, nasociliary nerve) predicts eye involvement in zoster. A 10:20 candidate called this HZO: with no rash and clear bulbs, HSV is the answer.'
            },
            {
                phase: '4. Epithelial treatment',
                type: 'mcq',
                question: 'What is your treatment for HSV epithelial keratitis?',
                options: [
                    'Aciclovir 3% ointment 5×/day until healed plus a few days (usually 7–14 days), or oral aciclovir 400 mg 5×/day; ± debridement; no steroid; review in 2–3 days.',
                    'Aciclovir 3% ointment 5×/day for 5 days exactly, then stop whether healed or not, adding FML 0.1% qid to reduce the scarring from the dendrite once the antiviral course has finished.',
                    'Prednisolone acetate 1% qid under oral aciclovir cover to stop the immune response, since the dendrite itself is an immune reaction and settles once the inflammation is controlled.',
                    'Chloramphenicol 0.5% qid with a bandage contact lens, since HSV epithelial disease is self-limiting and the main risk is secondary bacterial infection of the ulcer.'
                ],
                answer: 0,
                critical: true,
                why: {
                    1: 'A fixed 5 days can be too short, and a steroid isn’t added for epithelial disease.',
                    2: 'Steroids are contraindicated in active epithelial HSV: the dendrite is live virus.',
                    3: 'This doesn’t treat the virus.'
                },
                explain: 'Don’t continue topical aciclovir much past 3 weeks (epithelial toxicity). Ganciclovir 0.15% gel 5×/day is an alternative. The 9:40 candidate said “5×/day for 5 days”: say “until healed”.'
            },
            {
                phase: '5. Recurrence and stromal risk',
                type: 'mcq',
                question: '“What’s the recurrence rate at 1 and 5 years, and how often does it become stromal?”',
                options: [
                    'About 10% at 1 year and 40% at 5 years (Liesegang), rising with each episode; about 1 in 4–5 people with ocular HSV get stromal disease.',
                    'About 50% at 1 year and nearly 100% at 5 years, since HSV recurs with every cold sore; around 75% of patients go on to stromal disease.',
                    'About 1% at 1 year and about 5% at 5 years, since the first attack gives lasting immunity; stromal disease follows in under 1% of patients.',
                    'Recurrence is about 10% at 1 year but falls with time; stromal disease only follows epithelial disease if a steroid was used.'
                ],
                answer: 0,
                why: {
                    1: 'Far too high: most patients don’t recur within a year.',
                    2: 'Too low: the risk keeps rising with time and with each recurrence.',
                    3: 'Recurrence risk rises with time, and stromal disease is immune-mediated and happens without steroid misuse.'
                },
                explain: 'Recurrence ~10% at 1 year, ~23% at 2, ~40% at 5, ~63% at 20 (Liesegang 1989). HEDS II: aciclovir 400 mg bd for a year cut any ocular HSV from 32% to 19% and stromal from 28% to 14%.'
            },
            {
                phase: '6. Stromal and endothelial disease',
                type: 'match',
                question: 'Match each HSV form to its treatment (the 10:20 room asked all of these).',
                pairs: [
                    { label: 'Non-necrotising (immune) stromal keratitis, no ulcer', answer: 'Topical steroid tapered slowly over weeks to months, with oral antiviral prophylaxis (aciclovir 400 mg bd) (HEDS)' },
                    { label: 'Stromal keratitis with an epithelial defect', answer: 'Antiviral at treatment dose; hold or reduce the steroid until the epithelium heals; refer' },
                    { label: 'Necrotising stromal keratitis', answer: 'Live virus + inflammation: oral antiviral at treatment dose, cautious steroid, refer urgently (melt and perforation risk)' },
                    { label: 'Endotheliitis (disciform)', answer: 'Topical steroid with oral antiviral (aciclovir 400 mg 5×/day or valaciclovir); watch IOP (trabeculitis)' }
                ],
                explain: 'The two stromal types: non-necrotising (immune, interstitial) and necrotising (viral invasion). Endotheliitis: disc-shaped stromal oedema with KPs beneath it, sometimes raised IOP.'
            }
        ]
    },
    {
        id: 'r2026-rnfl-normal-iop',
        category: 'glaucoma',
        title: 'Wedge Defect, IOP 15, Clear Field',
        theme: 'Pre-perimetric NTG and Ocular Perfusion',
        years: ['2026'],
        patient: '75–85-year-old woman with diabetes and hypertension, both on medication; no symptoms (Monday 10:00 and 10:20).',
        stem: 'Disc photo: CD about 0.8, rim thinning, a superior (and in one room also inferior) RNFL wedge defect in one eye. The other eye is normal.',
        steps: [
            {
                phase: '1. Work-up',
                type: 'viva',
                question: '“What’s your work-up?”',
                points: [
                    'Full glaucoma work-up: GAT with time of day, CCT, gonioscopy, OCT RNFL + GCL, 24-2 and 10-2 fields',
                    'Colour vision, pupils (RAPD), motility: screen for a compressive or other neuropathy',
                    'Look for pallor out of proportion to cupping',
                    'Blood pressure, and when the BP tablets are taken'
                ],
                explain: 'IOP 15, CCT 545–550, open angles, field completely clear, OCT confirms the wedge.'
            },
            {
                phase: '2. Differentials',
                type: 'multi',
                question: 'IOP 15, CCT 550, clear field, OCT-confirmed wedge in one eye. What are your differentials?',
                options: [
                    'Pre-perimetric (normal-tension) glaucoma',
                    'Old branch retinal artery occlusion',
                    'Previous NAION or other ischaemic optic neuropathy',
                    'Compressive optic neuropathy',
                    'Old trauma, or a past steroid or IOP spike',
                    'Myelinated nerve fibres'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'In a diabetic, hypertensive elderly woman, a single wedge in one eye can be an old BRAO. Myelinated fibres look white and feathery, the opposite of a dark wedge.'
            },
            {
                phase: '3. Phasing',
                type: 'mcq',
                question: '“You want to know if her IOP changes through the day. How?”',
                options: [
                    'Diurnal phasing (IOP every 2–3 h) or a water-drinking test: about 1 L in 5 min, then IOP every 15 min for 45–60 min; a big rise suggests poor outflow.',
                    'One IOP reading at 8 pm, since IOP is always highest at night when lying down; if that is under 21, the daytime pressures need no further measurement.',
                    'A water-drinking test of 250 mL over 30 minutes, with a single IOP check at 2 hours; any rise at all confirms glaucoma and is an indication to treat.',
                    'Ask her to stop her BP tablets for a week and repeat the IOP, since antihypertensives lower IOP and mask the true daytime pressure.'
                ],
                answer: 0,
                why: {
                    1: 'One reading misses the peak, and clinic readings can’t capture supine night-time IOP.',
                    2: 'Too little water and the wrong timing; a small rise is normal.',
                    3: 'Never stop BP tablets for an eye test; and systemic BP drugs barely mask IOP.'
                },
                explain: 'A rise of roughly 6 mmHg or more is usually taken as significant. The 10:20 candidate asked whether it really is 1 L: yes, roughly 800 mL–1 L, drunk within 5 minutes.'
            },
            {
                phase: '4. Review',
                type: 'mcq',
                question: 'Pressures are normal and nothing changes. How do you review her?',
                options: [
                    'Glaucoma suspect: repeat field and OCT for baselines, then review 3–6-monthly for a year to measure change; treat if it progresses.',
                    'Discharge her to routine 2-yearly checks, since without any field defect and with an IOP of 15 there is no glaucoma to monitor.',
                    'Start a PGA today in both eyes, since a wedge defect is glaucoma and normal-tension glaucoma always progresses if left untreated.',
                    'Refer urgently for an MRI before any further glaucoma testing, since a wedge defect with a normal IOP is always neurological.'
                ],
                answer: 0,
                why: {
                    1: 'Structural damage with risk factors needs close monitoring; 2 years is far too long.',
                    2: 'CNTGS: about half of untreated NTG didn’t progress over 5 years, so treat on risk or documented progression.',
                    3: 'A wedge that respects the horizontal raphe is typical of glaucoma; MRI is for atypical features.'
                },
                explain: 'Both candidates guessed 3-monthly; that is reasonable.'
            },
            {
                phase: '5. Progression at normal IOP',
                type: 'mcq',
                question: 'At 1 year the IOPs are fine but the RNFL keeps thinning (field still clear). The examiner probes her systemic conditions and the time of day. Why might this be?',
                options: [
                    'Low ocular perfusion pressure (BP minus IOP), worst at night when BP dips, more so with evening BP tablets; diabetes adds to it.',
                    'Her cerebrospinal fluid pressure is higher than her IOP, which pushes the lamina forward and compresses the axons at the rim.',
                    'Her diabetes raises the IOP only in the late afternoon, which clinic readings miss because they are always taken in the morning.',
                    'The OCT is wrong: steady RNFL thinning with a clear field and normal IOP is always artefact from cataract, floaters or poor scans.'
                ],
                answer: 0,
                why: {
                    1: 'It’s the reverse: a low CSF pressure (a bigger pressure gradient across the lamina) is the proposed NTG risk. Perfusion pressure is BP minus IOP.',
                    2: 'Diabetes doesn’t cause a daytime IOP pattern; clinic readings miss night-time IOP and BP dips.',
                    3: 'Consistent, progressive thinning in the wedge’s location is real; artefact gives patchy, inconsistent changes.'
                },
                explain: 'Ocular perfusion pressure ≈ BP − IOP. Nocturnal hypotension, especially with evening antihypertensives, is a known NTG risk factor. Supine IOP is also higher at night.'
            },
            {
                phase: '6. What to change',
                type: 'multi',
                question: '“How would you reduce her risk?” Select all that apply.',
                options: [
                    'Ask the GP to move the antihypertensive to the morning and avoid over-treating BP',
                    'Lower IOP anyway: target 30% from baseline (CNTGS), PGA nocte first',
                    'Brimonidine as a second agent (LoGTS); avoid timolol at night',
                    'Refer to an ophthalmologist to confirm the diagnosis and within 4 months of starting treatment',
                    'Ask the GP to raise her BP target to over 160 systolic'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Coordinate with the GP rather than asking for a specific high BP.',
                recall: 'The 10:00 candidate named CNTGS as the study that found disc haemorrhage a risk factor: correct (CNTGS: female, migraine, disc haemorrhage). The 10:20 candidate offered trabeculectomy: that is the ophthalmologist’s option once drops and SLT haven’t worked.'
            }
        ]
    },
    {
        id: 'r2026-cl-bk',
        category: 'cornea',
        title: 'Sunglasses at 5 pm, Slept in Her Lenses',
        theme: 'CL-Related Bacterial Keratitis',
        years: ['2026'],
        patient: '24-year-old woman (Monday 11:20; the 12:00 room asked the same case: pain and photophobia after sleeping in lenses).',
        stem: 'Comes in wearing sunglasses at 5 pm with pain and photophobia, first time.',
        steps: [
            {
                phase: '1. History',
                type: 'viva',
                question: '“What other history?”',
                points: [
                    'Contact lenses: type, wearing schedule, sleeping in them, water exposure (showering, swimming), solutions and case hygiene',
                    'Vision, discharge, onset and progression',
                    'Trauma, foreign body, vegetative matter',
                    'Self-treatment and drops so far',
                    'Medical history, medicines, allergies'
                ],
                explain: 'She wears daily disposables and slept in them.'
            },
            {
                phase: '2. Differentials',
                type: 'multi',
                question: 'Main differentials?',
                options: [
                    'CL-related bacterial keratitis',
                    'Acanthamoeba or fungal keratitis',
                    'CLPU or a sterile infiltrate',
                    'Acute anterior uveitis',
                    'Acute angle closure',
                    'Allergic conjunctivitis'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Allergy itches; it doesn’t cause pain and photophobia.'
            },
            {
                phase: '3. Findings',
                type: 'reveal',
                text: 'Photo: a central-paracentral ulcer with a dense infiltrate (1.5 mm), overlying staining, surrounding oedema, AC reaction. Angles deep (Van Herick normal), no corneal oedema elsewhere.'
            },
            {
                phase: '4. Treatment',
                type: 'mcq',
                question: '“The ulcer is 1.5 mm. How do you treat it?”',
                options: [
                    'Ciprofloxacin 0.3% q15min for the first hours, then hourly day and night for 24–48 h, tapering by response; atropine 1% bd; no lenses; review in 24 h.',
                    'Chloramphenicol 0.5% qid with ointment at night; cyclopentolate 1% tds; continue daily disposables once the pain settles; review in one week to check the scar.',
                    'Ciprofloxacin 0.3% qid with prednisolone acetate 1% qid from day one to limit the scar (SCUT); no cycloplegic; review in 3 days.',
                    'Refer to hospital the same day for fortified cefazolin and tobramycin before any treatment, since every CL ulcer needs fortified drops and a scrape.'
                ],
                answer: 0,
                critical: true,
                why: {
                    1: 'Chloramphenicol misses Pseudomonas, the key CL pathogen, and qid is far too infrequent.',
                    2: 'SCUT doesn’t support a steroid from day one; it is added later, if at all, by an ophthalmologist.',
                    3: 'A small ulcer away from the axis can be treated with a fluoroquinolone and close review; large, deep or central ones go for fortified drops.'
                },
                explain: 'She asked “including overnight?”: yes, hourly drops continue overnight for the first day or two. Atropine also relieves ciliary spasm.'
            },
            {
                phase: '5. Not improving at 24–48 h',
                type: 'mcq',
                question: '“She returns at 24 h (48 h in the 12:00 room) and isn’t improving. What now?”',
                options: [
                    'Judge by infiltrate, epithelial defect and AC, not symptoms: if worse, refer same day for culture and fortified drops; if unchanged, review in 24 h.',
                    'Switch to chloramphenicol 0.5% hourly, since failing at 24 h proves fluoroquinolone resistance; review in 48 h and refer only if it then perforates.',
                    'Add prednisolone acetate 1% qid to dampen the immune response, which is why the ulcer isn’t improving yet; review in 48 h to judge the steroid.',
                    'Stop all drops for 24 h so a scrape taken off antibiotics gives an accurate culture, then restart with the antibiotic the culture result supports.'
                ],
                answer: 0,
                why: {
                    1: 'One day of non-response doesn’t prove resistance, and chloramphenicol is weaker against Pseudomonas.',
                    2: 'A steroid in a worsening untreated-organism ulcer is dangerous.',
                    3: 'Never stop treatment in a worsening ulcer; a scrape can still be taken on treatment.'
                },
                explain: 'Ulcers can look worse at 24 h as toxins act; don’t panic, but don’t sit on a worsening ulcer.'
            },
            {
                phase: '6. Lab and fortified',
                type: 'multi',
                question: 'Which statements are correct?',
                options: [
                    'Only about half of corneal cultures come back positive (lower once antibiotics have started)',
                    'Acanthamoeba is confirmed by culture (non-nutrient agar with E. coli), PCR or histology; confocal microscopy is strongly supportive',
                    'Fortified drops are indicated for large (over ~2–3 mm), deep, central or non-responding ulcers',
                    'SCUT: adding a steroid after 48 h made no overall difference, but helped central ulcers with poor vision',
                    'A negative culture rules out bacterial keratitis'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Culture is often negative, so treat clinically.',
                recall: 'The candidate said confocal microscopy is the definitive test for Acanthamoeba. It is a fast, strongly supportive test; the definitive tests are culture, PCR or histology.'
            },
            {
                phase: '7. When to send to hospital',
                type: 'multi',
                question: '“When do you refer to hospital?” (12:00 room)',
                options: [
                    'Ulcer over about 2–3 mm, or central or paracentral',
                    'Deep stromal involvement, thinning or perforation risk',
                    'Hypopyon or marked AC reaction',
                    'Suspected Acanthamoeba or fungal keratitis',
                    'Worse at 24–48 h on treatment, or not improving',
                    'Any CL wearer with a small peripheral infiltrate and no staining'
                ],
                answers: [0, 1, 2, 3, 4],
                why: { 5: 'A small peripheral infiltrate with no staining is more likely CLPU or sterile, managed in practice with close review.' },
                explain: 'The “1-2-3 rule”: 1+ cells, 2 mm infiltrate, 3 mm from the centre: meet any and it goes for scraping and fortified drops. A small peripheral infiltrate without staining is more likely CLPU or a sterile infiltrate.'
            },
            {
                phase: '8. Bacterial, Acanthamoeba or fungal',
                type: 'match',
                question: '“How do you tell MK from Acanthamoeba and fungal keratitis?” (12:00 room)',
                pairs: [
                    { label: 'Bacterial (Pseudomonas)', answer: 'Rapid onset over 1–2 days, dense suppurative infiltrate, mucopurulent discharge, often a hypopyon' },
                    { label: 'Acanthamoeba', answer: 'Pain out of proportion to signs, radial perineuritis, ring infiltrate later; water exposure; slow course' },
                    { label: 'Fungal', answer: 'Feathery margins, satellite lesions, dry raised infiltrate; vegetative trauma; slow course' }
                ],
                distractors: ['Dendritic ulcer with terminal bulbs and reduced corneal sensation'],
                explain: 'Suspect Acanthamoeba or fungus when the ulcer doesn’t respond to antibiotics. The dendrite is HSV.'
            }
        ]
    },
    {
        id: 'r2026-ntg-raynauds',
        category: 'glaucoma',
        title: 'IOP 17/18, Raynaud’s, Big Cups',
        theme: 'Normal-Tension Glaucoma',
        years: ['2026'],
        patient: '50-year-old woman with diabetes and Raynaud’s (Monday 11:20).',
        stem: 'IOP 17 and 18 mmHg. Large cups in medium-sized discs.',
        steps: [
            {
                phase: '1. History',
                type: 'viva',
                question: '“What other history?”',
                points: [
                    'Vascular dysregulation: migraine, cold hands, sleep apnoea, low BP or BP tablets at night',
                    'Family history, and whether first-degree (her aunt isn’t: a weaker risk factor)',
                    'Ethnicity (Japanese and East Asian: higher NTG rates)',
                    'Steroids, past trauma, past uveitis, past blood loss or shock',
                    'Neurological symptoms: headaches, vision changes'
                ],
                explain: 'The candidate forgot ethnicity and had to be pushed for age.'
            },
            {
                phase: '2. Risk factors',
                type: 'multi',
                question: 'Which are risk factors for NTG and its progression?',
                options: [
                    'Female sex',
                    'Migraine and Raynaud’s (vasospasm)',
                    'Disc haemorrhage',
                    'Older age (risk climbs steeply over 70–80)',
                    'Japanese or East Asian ethnicity',
                    'Sleep apnoea and nocturnal hypotension',
                    'Hyperopia'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Myopia, not hyperopia, is the glaucoma risk factor. CNTGS: female sex, migraine and disc haemorrhage predicted progression.'
            },
            {
                phase: '3. Findings',
                type: 'reveal',
                text: 'CCT normal, angles open. OCT: rim thinning both eyes, superior and inferior RNFL wedges R>L. Fields: right clear but unreliable; left inferonasal step matching the RNFL loss.'
            },
            {
                phase: '4. Diagnosis',
                type: 'mcq',
                question: 'What is the diagnosis?',
                options: [
                    'Left NTG (structure–function agreement); right glaucoma suspect or pre-perimetric glaucoma: repeat the unreliable field before deciding.',
                    'Bilateral NTG: the right eye’s field is clear only because it was unreliable, so diagnose it the same as the left without retesting.',
                    'Bilateral OHT: the IOPs are over 15, so the damage is pressure-related, and NTG needs an IOP under 12.',
                    'Bilateral optic neuritis: a young-ish woman with bilateral RNFL loss needs an MRI before any glaucoma diagnosis.'
                ],
                answer: 0,
                why: {
                    1: 'Repeat an unreliable field before drawing conclusions.',
                    2: 'NTG means IOP always in the normal range (up to 21), not under 12; and OHT has no damage.',
                    3: 'Optic neuritis is painful with acute vision loss and pallor, not slowly enlarging cups.'
                },
                explain: 'The candidate asked if OCT is good for judging the rim and said stereoscopic disc viewing is better: OCT measures RNFL and GCL well, but rim assessment still needs a clinical look at disc size and colour.'
            },
            {
                phase: '5. Ruling out a neuro cause',
                type: 'multi',
                question: '“What else could it be, and how would you rule it out?” Select all that apply.',
                options: [
                    'Compressive lesion (pituitary, meningioma): pallor beyond cupping, defects respecting the vertical midline → MRI via GP',
                    'Previous NAION or AAION (GCA), and LHON in younger patients',
                    'Colour vision (red cap desaturation, D-15, Ishihara) and RAPD',
                    'Burnt-out PDS, PXF, past steroids, missed IOP peaks (phasing)',
                    'Allergic conjunctivitis'
                ],
                answers: [0, 1, 2, 3],
                critical: true,
                explain: 'NTG is a diagnosis of exclusion. The candidate felt this part “went downhill”: name compressive lesions, ischaemic neuropathy and LHON.'
            },
            {
                phase: '6. Treatment',
                type: 'mcq',
                question: '“How do you treat?”',
                options: [
                    'Treat despite normal IOP: target 30% from baseline (CNTGS); latanoprost 0.005% nocte if no contraindications; refer within 4 months.',
                    'Don’t treat: her IOP is already normal, so lowering it further can’t help; manage her Raynaud’s with the GP and review yearly.',
                    'Timolol 0.5% at night as first line, since it covers the nocturnal IOP peak in NTG; target 15% lower; refer if it progresses.',
                    'Oral acetazolamide long term through the GP, since drops can’t lower an IOP that is already in the teens; review monthly.'
                ],
                answer: 0,
                why: {
                    1: 'CNTGS showed that 30% lowering cut progression from 35% to 12% even at normal IOP.',
                    2: 'Night-time timolol can worsen nocturnal hypotension and perfusion.',
                    3: 'Acetazolamide isn’t a long-term glaucoma drug and topical drugs work.'
                },
                explain: 'She has damage in one eye and risk factors: treat.'
            },
            {
                phase: '7. Thinning at target',
                type: 'mcq',
                question: 'At 1 year the IOPs are at target but the RNFL keeps thinning. What now?',
                options: [
                    'The target was too high: lower it 20% more after checking adherence; add brimonidine (LoGTS) or SLT, raise night-time BP with the GP, refer.',
                    'Switch latanoprost to timolol: LoGTS found timolol protected the nerve better than brimonidine, and timolol is cheaper and well tolerated at night.',
                    'Stop treatment: thinning at target proves the drops aren’t working, so the damage isn’t glaucoma; refer for an MRI instead.',
                    'Keep everything the same: RNFL thinning is normal ageing, and only a repeatable field change counts as progression in NTG.'
                ],
                answer: 0,
                why: {
                    1: 'LoGTS found the opposite: less field progression on brimonidine (about 9% vs 39%).',
                    2: 'Progression at target means the target was too high, not that the diagnosis was wrong.',
                    3: 'Ageing loss is small (~0.5 µm a year); localised progressive thinning is real progression.'
                },
                explain: 'Switching latanoprost to bimatoprost is also reasonable: bimatoprost (a prostamide) lowers IOP about 1–2 mmHg more but causes more hyperaemia.',
                recall: 'The candidate said “LoGTS showed timolol > brimonidine”. It was the reverse. Also asked: why bimatoprost? A different (prostamide) receptor profile, slightly more lowering, more redness.'
            },
            {
                phase: '8. CAI contraindications',
                type: 'multi',
                question: 'Contraindications or cautions for a topical CAI?',
                options: [
                    'Sulfonamide allergy',
                    'Compromised corneal endothelium (Fuchs, graft)',
                    'Severe renal impairment',
                    'Asthma',
                    'Bradycardia'
                ],
                answers: [0, 1, 2],
                explain: 'Asthma and bradycardia are beta-blocker contraindications.'
            }
        ]
    },
    {
        id: 'r2026-clpu',
        category: 'cornea',
        title: 'Sore Eye After Sleeping in Monthlies',
        theme: 'CLPU → Possible Bacterial Keratitis',
        years: ['2026'],
        patient: '32-year-old man (Monday 1:00, Sophia and Daisy).',
        stem: 'Right eye red and sore. The first photo shows almost nothing: conjunctival hyperaemia and a clear cornea.',
        steps: [
            {
                phase: '1. History',
                type: 'viva',
                question: '“What history questions would you ask, and why?”',
                points: [
                    'CL wear: type and replacement (monthly, near the end of the month), slept in them last night',
                    'Pain level (just sore), photophobia, vision',
                    'Discharge (rule out MK: purulent, yellow in MK; watery here) and lid crusting',
                    'Itch (allergy), self-treatment (lubricants helped)',
                    'Better since removing the lenses this morning?'
                ],
                explain: 'Mild symptoms, improving after removal, slept in lenses: a CL inflammatory event rather than infection.'
            },
            {
                phase: '2. Findings',
                type: 'reveal',
                text: 'VA, pupils and IOP normal. Fluorescein: a small peripheral infiltrate under intact or minimally staining epithelium, little AC reaction.'
            },
            {
                phase: '3. Diagnosis',
                type: 'mcq',
                question: 'What is your final diagnosis?',
                options: [
                    'CLPU: a small round peripheral infiltrate with little staining after overnight wear; mild symptoms that ease with the lens out.',
                    'Bacterial keratitis: any infiltrate in a lens wearer is MK until a culture proves otherwise, whatever its size or symptoms.',
                    'CLARE: an acute red eye on waking, with diffuse small infiltrates and no epithelial staining, after overnight wear.',
                    'Marginal keratitis: an infiltrate with a clear zone at the limbus, caused by his staphylococcal blepharitis and lid crusting.'
                ],
                answer: 0,
                why: {
                    1: 'Small, peripheral, minimal staining, mild and improving symptoms: these favour CLPU; treat cautiously and review.',
                    2: 'CLARE wakes the patient with pain and gives diffuse infiltrates; this is a single focal one.',
                    3: 'Possible given the crusting, but the overnight lens wear and the single peripheral lesion fit CLPU better.'
                },
                explain: 'CLPU: peripheral, under 1 mm, round, minimal staining, mild symptoms.'
            },
            {
                phase: '4. Management',
                type: 'multi',
                question: 'Management?',
                options: [
                    'Stop lens wear until resolved',
                    'Prophylactic antibiotic (e.g. chloramphenicol 0.5% or ciprofloxacin 0.3% qid)',
                    'Review the next day: expect improvement or at least no worsening',
                    'Refit or change to daily wear only, no sleeping in lenses',
                    'Prednisolone acetate 1% qid from today'
                ],
                answers: [0, 1, 2, 3],
                explain: 'A steroid waits until infection is excluded.'
            },
            {
                phase: '5. Worse next day',
                type: 'mcq',
                question: '“He comes back and it’s worse. Next step?”',
                options: [
                    'Treat as bacterial keratitis: ciprofloxacin 0.3% q15min for 6 h then hourly incl. overnight, cycloplegic, review in 24 h.',
                    'Continue ciprofloxacin qid and review in a week, since CLPU always looks worse on day 2 before it starts to settle.',
                    'Add FML 0.1% qid to the ciprofloxacin to settle the immune response that is making the infiltrate worse; review in 3 days.',
                    'Swab the eye, stop all drops and wait 48 h for the culture result before choosing the antibiotic for the organism.'
                ],
                answer: 0,
                critical: true,
                why: {
                    1: 'Worsening means possible infection; a week is far too long.',
                    2: 'Adding a steroid to a possibly infected ulcer is dangerous.',
                    3: 'Never stop treatment while waiting for cultures.'
                },
                explain: 'Refer if it keeps worsening. Ciprofloxacin side effect: white corneal precipitates (more with frequent dosing, especially on an epithelial defect), which can slow healing.'
            },
            {
                phase: '6. Zoster (extra time)',
                type: 'multi',
                question: '“We have time: herpes.” Which statements about HZO are correct?',
                options: [
                    'Pseudodendrites without terminal bulbs, staining poorly',
                    'A dermatomal rash (V1) that respects the vertical midline',
                    'Hutchinson’s sign (nasal tip, nasociliary nerve) predicts eye involvement',
                    'Oral antivirals within 72 h of the rash: valaciclovir 1 g tds or aciclovir 800 mg 5×/day for 7 days',
                    'Topical aciclovir alone is enough'
                ],
                answers: [0, 1, 2, 3],
                explain: 'HZO needs oral antivirals.'
            }
        ]
    },
    {
        id: 'r2026-poag-central',
        category: 'glaucoma',
        title: 'Maternal Glaucoma, IOP 24, CCT 510',
        theme: 'Right POAG, Left OHT: Staging a Central Defect',
        years: ['2026'],
        patient: '60-year-old European woman, routine eye exam (Monday 1:00).',
        stem: 'Disc photo: average-sized disc, vertical CD 0.8, lamina pores visible, slight inferior notching, marked PPA, superior and inferior RNFL wedges.',
        steps: [
            {
                phase: '1. History',
                type: 'viva',
                question: '“What history questions would you ask?”',
                points: [
                    'Family history: maternal glaucoma (who, how severe)',
                    'General health and medicines (steroids, BP tablets)',
                    'Vascular: cold hands (Raynaud’s), migraine, sleep apnoea',
                    'Asthma/COPD and heart conditions (before a beta blocker)',
                    'Trauma, eye surgery, myopia'
                ],
                explain: 'The candidate wished they had asked about Raynaud’s.'
            },
            {
                phase: '2. CCT 510',
                type: 'mcq',
                question: 'IOP 24 OU, CCT 510 µm. What does this mean?',
                options: [
                    'A thin cornea: GAT under-reads, so the true IOP is likely higher, and thin CCT is a risk factor in its own right (OHTS).',
                    'A thick cornea: GAT over-reads, so the true IOP is likely nearer 20 and her risk is low enough to monitor.',
                    'An average cornea that needs no adjustment, so both the IOP and her risk can be taken at face value from today’s reading.',
                    'A thin cornea: GAT over-reads, so the true IOP is lower than 24, which makes thin CCT a protective factor.'
                ],
                answer: 0,
                why: {
                    1: '510 µm is thin, not thick.',
                    2: '510 µm is well below the average of about 540–555 µm.',
                    3: 'Thin corneas make GAT read low, and thin CCT raises risk.'
                },
                explain: 'Don’t apply a correction formula; treat CCT as a risk factor.'
            },
            {
                phase: '3. Field',
                type: 'reveal',
                text: '24-2: reliable. Right: an inferior arcuate defect including a point close to fixation; MD −2 dB. Left: clear. Angles open.'
            },
            {
                phase: '4. Stage',
                type: 'mcq',
                question: '“What stage is the right eye? Are you sure? What about the central defect?”',
                options: [
                    'Not simply early: a defect near fixation upgrades it despite MD −2 (Hodapp: a point within 5° under 15 dB = at least moderate).',
                    'Early, because MD is better than −6 dB: Hodapp stages only on MD, so where the defect sits doesn’t change the stage or the target IOP.',
                    'Advanced, because any arcuate defect that reaches the blind spot counts as advanced under Hodapp, whatever the MD or centre.',
                    'Unstageable until there are three reliable fields, so treatment waits until the stage is clear and the defect confirmed.'
                ],
                answer: 0,
                critical: true,
                why: {
                    1: 'Hodapp stages on MD and on the points near fixation; a central defect matters most to the patient.',
                    2: 'Arcuate defects connect to the blind spot by definition; that alone doesn’t make it advanced.',
                    3: 'Repeat the field to confirm, but don’t delay treatment in a structurally damaged eye.'
                },
                explain: 'RANZCO counts involvement within the central 10° as advanced, so the target drops and referral comes sooner. The candidate cited Mills with MD −2 as “early” and was asked “are you sure?”. Always look at the central points.'
            },
            {
                phase: '5. Neuro check',
                type: 'mcq',
                question: '“How would you rule out a neurological cause?”',
                options: [
                    'Glaucoma respects the horizontal midline, neuro the vertical; check pallor vs cupping, colour vision, RAPD and the other eye.',
                    'Glaucomatous defects respect the vertical midline; neurological ones respect the horizontal midline. Recheck IOP and CCT.',
                    'Neurological defects are always central and glaucoma always peripheral, so any central point means an MRI through her GP first.',
                    'Request an MRI for every new glaucoma patient, since the disc and the field can’t reliably separate the two causes.'
                ],
                answer: 0,
                why: {
                    1: 'Reversed: the vertical midline is the neurological one.',
                    2: 'Glaucoma can be paracentral and neuro defects can be peripheral; it is the midline that separates them.',
                    3: 'MRI is for atypical features, not every glaucoma.'
                },
                explain: 'The examiner had to prompt “vertical midline”.'
            },
            {
                phase: '6. Management',
                type: 'multi',
                question: 'Management? Select all that apply.',
                options: [
                    'Latanoprost 0.005% one drop nocte (or SLT)',
                    'Warn about PGA side effects: conjunctival hyperaemia (common, usually settles), iris darkening, lash growth, periorbital fat loss and darkening',
                    'Review IOP in 4–6 weeks; repeat the field to confirm',
                    'Refer to an ophthalmologist within 4 months of starting treatment',
                    'Tell her that red eyes on a PGA mean allergy and to stop the drop'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Hyperaemia is expected with PGAs and usually eases over weeks; stop only for true allergy (itch, lid swelling).',
                recall: 'The candidate forgot hyperaemia (asked “the eyes are red, is that normal?”) and remembered referral only at the end. Say referral when you start the drop.'
            }
        ]
    },
    {
        id: 'r2026-dry-eye',
        category: 'allergy',
        title: 'Dandruff on the Lashes',
        theme: 'Blepharitis and Dry Eye: Emerging Tests and Treatments',
        years: ['2026'],
        patient: 'Adult with sore, dry eyes (Monday 1:40 and 3:00, Daisy).',
        stem: 'Photo of the lids and lashes with scurf (dandruff-like debris) and lid margin changes. The examiner wanted differentials, work-up and the newer tests and treatments.',
        steps: [
            {
                phase: '1. What you see',
                type: 'multi',
                question: 'What are you thinking of?',
                options: [
                    'Anterior (staphylococcal or seborrhoeic) blepharitis',
                    'Demodex blepharitis (cylindrical collarettes)',
                    'Meibomian gland dysfunction (posterior blepharitis)',
                    'Evaporative dry eye secondary to the lid disease',
                    'Phthiriasis (lice and nits)',
                    'Acute angle closure'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Collarettes at the lash base suggest Demodex; nits stuck to the lashes suggest lice.'
            },
            {
                phase: '2. Work-up',
                type: 'viva',
                question: '“What is your work-up? If you’re in a full-scope practice, what else can you use?”',
                points: [
                    'Symptoms: OSDI or DEQ-5; triggers, screens, CL, medicines (antihistamines, isotretinoin), systemic disease (Sjögren’s, rosacea)',
                    'TBUT (non-invasive or fluorescein), corneal and conjunctival staining (fluorescein, lissamine green), lid margin and meibum expression',
                    'Tear volume: meniscus height, Schirmer',
                    'Full scope: tear osmolarity, meibography (gland drop-out), interferometry (lipid layer, e.g. LipiView), MMP-9 test (InflammaDry), Demodex lash epilation',
                    'TFOS DEWS II diagnosis: symptoms plus one sign (NIBUT under 10 s, osmolarity, or staining)'
                ],
                explain: 'The 1:40 room asked about the “emerging machinery” and its normal values.'
            },
            {
                phase: '3. Osmolarity',
                type: 'mcq',
                question: '“What is the tear osmolarity cut-off, and is higher better or worse?”',
                options: [
                    'Higher is worse: over 308 mOsm/L, or more than 8 mOsm/L between the eyes, suggests dry eye (DEWS II).',
                    'Lower is worse: under 280 mOsm/L means the tears are too dilute to protect the ocular surface (DEWS II).',
                    'Higher is better: over 320 mOsm/L shows a healthy, concentrated tear film that is rich in protective proteins.',
                    'Osmolarity only matters in aqueous-deficient dry eye; it stays normal in evaporative dry eye and MGD.'
                ],
                answer: 0,
                why: {
                    1: 'Dry eye raises osmolarity; low osmolarity isn’t the problem.',
                    2: 'Hyperosmolarity damages the surface and drives the inflammation cycle.',
                    3: 'Hyperosmolarity is central to both evaporative and aqueous-deficient dry eye.'
                },
                explain: 'Hyperosmolarity is the core mechanism in the DEWS II definition.'
            },
            {
                phase: '4. Treatments',
                type: 'match',
                question: 'Match each treatment to what it does (the newer ones were asked).',
                pairs: [
                    { label: 'Intense pulsed light (IPL)', answer: 'Treats MGD and lid telangiectasia; reduces inflammation and Demodex' },
                    { label: 'Thermal pulsation (LipiFlow)', answer: 'Heats and massages the meibomian glands to clear them' },
                    { label: 'Perfluorohexyloctane (NovaTears)', answer: 'Water-free drop that spreads over the tear film to slow evaporation' },
                    { label: 'Ciclosporin (Ikervis)', answer: 'Anti-inflammatory for severe dry eye with keratitis (PBS authority)' },
                    { label: 'Tea tree oil (terpinen-4-ol) lid wipes', answer: 'Kills Demodex mites' }
                ],
                distractors: ['Antibiotic that reduces lid bacteria'],
                explain: 'Other options: punctal plugs, autologous serum, oral doxycycline or azithromycin for MGD and rosacea, lid hygiene and warm compresses. Lotilaner drops for Demodex are approved overseas.'
            },
            {
                phase: '5. The study',
                type: 'mcq',
                question: '“What’s the study on dry eye?”',
                options: [
                    'TFOS DEWS II (2017) defines dry eye; the DREAM trial found omega-3 supplements no better than an olive-oil placebo.',
                    'The DREAM trial proved omega-3 supplements cure dry eye, so they are the first step of the DEWS II treatment ladder.',
                    'AREDS showed that fish oil cures evaporative dry eye and should be given to every patient over 50 who has MGD.',
                    'The HEDS trial showed oral aciclovir prevents dry eye and neurotrophic keratitis after refractive surgery.'
                ],
                answer: 0,
                why: {
                    1: 'DREAM found no benefit over placebo.',
                    2: 'AREDS studied AMD supplements, not dry eye.',
                    3: 'HEDS studied herpes simplex keratitis.'
                },
                explain: 'DEWS II (Tear Film and Ocular Surface Society, 2017) is the reference for definition, diagnosis and the stepwise treatment ladder.'
            }
        ]
    },
    {
        id: 'r2026-pdg',
        category: 'glaucoma',
        title: 'Spoke-Like Transillumination, CCT 490',
        theme: 'Pigmentary Glaucoma',
        years: ['2026'],
        patient: 'Adult, both eyes (Monday 1:40, Daisy).',
        stem: 'Photo: mid-peripheral iris transillumination defects in one eye, inferior TIDs in the other.',
        steps: [
            {
                phase: '1. Profile',
                type: 'mcq',
                question: '“If it’s PDS, what is the typical patient?”',
                options: [
                    'A young (20s–40s) myopic man, often white; IOP spikes after exercise or dilation.',
                    'An older (70s) hyperopic woman, often East Asian; IOP spikes in dim light or reading.',
                    'An older (70s) woman of Scandinavian descent; flakes at the pupil and on the lens.',
                    'A child under 10 with a family history of glaucoma; IOP spikes with steroids.'
                ],
                answer: 0,
                why: {
                    1: 'That is the angle-closure profile.',
                    2: 'That is pseudoexfoliation.',
                    3: 'That is a steroid response profile.'
                },
                explain: 'A concave mid-peripheral iris rubs on the zonules (reverse pupil block), shedding pigment.'
            },
            {
                phase: '2. Burnt-out PDS',
                type: 'mcq',
                question: '“What are the signs of burnt-out PDS, and why does it happen?”',
                options: [
                    'Pigment reversal (more pigment in the superior angle than the inferior), fading TIDs; with age the lens grows and the pupil shrinks, so rubbing stops.',
                    'Denser pigment in the inferior angle and new TIDs; with age the iris becomes more concave and rubs harder on the zonules, so more pigment is released.',
                    'A Sampaolesi line and pupillary flakes; with age the dispersed pigment converts into pseudoexfoliation material on the lens.',
                    'A new Krukenberg spindle; with age the pigment migrates onto the endothelium and stops blocking the meshwork, so IOP falls.'
                ],
                answer: 0,
                why: {
                    1: 'That describes active PDS, not burnt-out disease.',
                    2: 'PDS doesn’t convert to PXF; the Sampaolesi line is a PXF sign.',
                    3: 'Krukenberg spindles fade as PDS burns out.'
                },
                explain: 'Burnt-out PDS with old damage and normal IOP can be mistaken for NTG.'
            },
            {
                phase: '3. Work-up and CCT 490',
                type: 'multi',
                question: 'Work-up, and “CCTs are 490: what do you expect of the IOP?”',
                options: [
                    'Gonioscopy: dense, even pigment band, wide open angle, concave iris',
                    'IOP after exercise or dilation; phasing',
                    'Dilated retinal exam: higher RD risk (lattice, myopia)',
                    'CCT 490 is thin: GAT under-reads, so the true IOP is higher, and the risk is higher',
                    'CCT 490 means GAT over-reads, so the true IOP is lower'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Thin corneas under-read and are a risk factor in their own right.'
            },
            {
                phase: '4. Diagnosis and treatment',
                type: 'mcq',
                question: 'Superior and inferior RNFL wedges with matching field defects. Diagnosis and management? And would you expect 30% from latanoprost?',
                options: [
                    'Pigmentary glaucoma OU: treat (PGA nocte or low-energy SLT) and refer. Latanoprost usually gives 25–30%, so 30% is the top end.',
                    'Bilateral PDS without glaucoma: monitor 6-monthly; latanoprost gives 50% or more in PDS, so a single drop is always enough.',
                    'Pigmentary glaucoma OU: timolol first, as a young man’s heart rate tolerates it best; latanoprost doesn’t work in PDS.',
                    'NTG OU: the damage isn’t pressure-related, so no treatment; latanoprost would lower IOP by only about 5% in these eyes.'
                ],
                answer: 0,
                why: {
                    1: 'RNFL wedges with matching field loss is glaucoma, and no drop gives 50%.',
                    2: 'Timolol limits exercise heart rate in young active patients; PGAs work well in PDS.',
                    3: 'PDS raises IOP; matching damage with pigment dispersion is pigmentary glaucoma.'
                },
                explain: 'Pilocarpine stops iris rubbing but causes myopic blur and carries RD risk. Laser iridotomy for PDS is no longer routine.'
            }
        ]
    },
    {
        id: 'r2026-pxg',
        category: 'glaucoma',
        title: 'Flakes at the Pupil, Disc Haemorrhage',
        theme: 'Pseudoexfoliative Glaucoma',
        years: ['2026'],
        patient: 'Older adult (Monday 2:00).',
        stem: 'Pupil photo showing white flaky material.',
        steps: [
            {
                phase: '1. Signs and demographic',
                type: 'multi',
                question: 'What signs and typical patient would you expect?',
                options: [
                    'Bull’s-eye deposits on the anterior lens capsule (dilate)',
                    'Pupil-margin transillumination and poor dilation',
                    'Patchy TM pigment and a Sampaolesi line on gonioscopy',
                    'Older (60–70+), Scandinavian or Greek heritage, female; often asymmetric',
                    'Phacodonesis and zonular weakness (cataract surgery risk)',
                    'Spoke-like mid-peripheral TIDs in a young myope'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Spoke-like TIDs in a young myope is PDS.'
            },
            {
                phase: '2. Findings',
                type: 'reveal',
                text: 'IOP 23 OU, CCT 510 (thin). Disc photo: an inferior disc haemorrhage with an inferior RNFL defect and a matching superior field defect. MD −2 dB.'
            },
            {
                phase: '3. Disc pallor',
                type: 'mcq',
                question: '“What if there was disc pallor? What would you think, and how would you rule it out?”',
                options: [
                    'Pallor beyond cupping suggests a non-glaucoma cause (compression, old ischaemic neuropathy): check colour, RAPD, midline; MRI if needed.',
                    'Pallor is expected in all glaucoma once the cup enlarges, so here it simply confirms PXG and no further tests are needed at all.',
                    'Pallor means the IOP has been very high for some time, so she needs immediate acetazolamide through the GP and referral today.',
                    'Pallor is a normal ageing change in PXF eyes, from the systemic vascular disease that goes with it, so it needs no further investigation.'
                ],
                answer: 0,
                why: {
                    1: 'Glaucoma cups the disc; the remaining rim keeps its colour.',
                    2: 'Pallor doesn’t mean high IOP.',
                    3: 'Pallor beyond the cup is never just ageing.'
                },
                explain: 'Glaucoma: cupping beyond pallor. Neuro: pallor beyond cupping.'
            },
            {
                phase: '4. Diagnosis and treatment',
                type: 'mcq',
                question: 'Diagnosis, treatment and review?',
                options: [
                    'Early PXG: latanoprost nocte or SLT, a lower target and closer review (PXF progresses fastest, EMGT); refer within 4 months.',
                    'PXF without glaucoma: monitor yearly, since an IOP of 23 is normal for PXF and disc haemorrhages are an ageing finding in older eyes.',
                    'Early PXG: timolol is first line because PGAs don’t work in PXF eyes; review in 6 months and refer only if it progresses.',
                    'Advanced PXG: same-day referral for trabeculectomy, since drops and SLT don’t lower the IOP enough in PXF eyes like hers.'
                ],
                answer: 0,
                why: {
                    1: 'Disc haemorrhage with matching RNFL and field loss is glaucoma.',
                    2: 'PGAs work well in PXF; 6 months is too long a first review.',
                    3: 'MD −2 is early, and drops and SLT do work in PXF.'
                },
                explain: 'PXF is one of the RANZCO exceptions optometrists may co-manage.'
            },
            {
                phase: '5. 23 → 22',
                type: 'mcq',
                question: '“The IOP went from 23 to 22 on latanoprost. What do you do? Would you ever just switch to bimatoprost?”',
                options: [
                    'Barely any response: check adherence and technique, then switch PGA (e.g. bimatoprost), add a drug or SLT; tell the ophthalmologist.',
                    'A 1 mmHg drop is the expected PGA response in PXF eyes, so continue latanoprost unchanged and review her in 6 months.',
                    'Stop the PGA and start oral acetazolamide through the GP, since PXG doesn’t respond to topical drops at all and needs systemic treatment.',
                    'Increase latanoprost to twice daily in both eyes, which roughly doubles the IOP-lowering effect without adding side effects.'
                ],
                answer: 0,
                why: {
                    1: 'About 4% is a non-response; PGAs usually give 25–30%.',
                    2: 'Acetazolamide isn’t long-term treatment, and drops do work in PXF.',
                    3: 'Twice-daily PGA lowers IOP less than once daily.'
                },
                explain: 'Within-class switching is reasonable for a true non-responder.',
                recall: 'The candidate said a 1 mmHg drop calls for switching class, and they would switch within the PGA class only if it had dropped about 15%. Both are defensible: first check adherence; a true non-responder to latanoprost usually gets a different class.'
            },
            {
                phase: '6. Follow-up facts',
                type: 'multi',
                question: 'Which are correct?',
                options: [
                    'Disc haemorrhages usually resolve in about 6–8 weeks (up to a few months)',
                    'Redness on latanoprost is conjunctival hyperaemia, a common side effect that usually settles',
                    'A disc haemorrhage is a marker of progression: repeat field and OCT within 3–4 months',
                    'A disc haemorrhage lasts for years, so it can’t be used to time progression'
                ],
                answers: [0, 1, 2],
                explain: 'Recording haemorrhages on photos helps track activity.'
            }
        ]
    },
    {
        id: 'r2026-pacg-pas',
        category: 'glaucoma',
        title: 'Peripheral Anterior Synechiae on Gonioscopy',
        theme: 'Primary Angle-Closure Glaucoma',
        years: ['2026'],
        patient: '70-year-old (Monday 3:00).',
        stem: 'Gonioscopy photo showing peripheral anterior synechiae.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'What could cause these PAS?',
                options: [
                    'Primary angle closure (chronic, creeping)',
                    'Previous uveitis',
                    'Neovascular glaucoma',
                    'ICE syndrome',
                    'Previous angle-closure attack',
                    'Pigment dispersion syndrome'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'PDS gives a wide open angle with a pigment band, not synechiae.'
            },
            {
                phase: '2. Findings',
                type: 'reveal',
                text: 'IOP 28 in this eye, 20 in the other; CCT normal. PAS in 3 quadrants. The field shows a glaucomatous defect (comment on reliability first).'
            },
            {
                phase: '3. Management',
                type: 'mcq',
                question: 'What is your management, and what can the ophthalmologist do?',
                options: [
                    'Refer for LPI (and assess the fellow eye); lens extraction often beats LPI in PACG (EAGLE); trabeculectomy; drops meanwhile.',
                    'Pilocarpine 4% qid long term to pull the iris out of the angle, since the PAS will open with miosis and an LPI won’t be needed.',
                    'Monitor 6-monthly: PAS in 3 quadrants is a stable end-stage finding and needs no treatment while the field loss is still only mild.',
                    'Refer for SLT rather than LPI, since it remodels the meshwork and LiGHT showed it is first-line treatment in angle closure.'
                ],
                answer: 0,
                why: {
                    1: 'Miosis doesn’t open synechiae, and pilocarpine can worsen angle crowding.',
                    2: 'PACG with an IOP of 28 needs treatment and referral.',
                    3: 'SLT needs a visible, open meshwork; LiGHT was in open-angle glaucoma.'
                },
                explain: 'Goniosynechialysis can also strip recent PAS. EAGLE: clear lens extraction beat LPI for IOP, quality of life and cost in PAC with IOP ≥30 or PACG.'
            },
            {
                phase: '4. If they can’t go',
                type: 'mcq',
                question: '“If the patient can’t get to an ophthalmologist, what’s your management? Which drop, dose, one eye or both?”',
                options: [
                    'Latanoprost 0.005% nocte in the affected eye only (uveoscleral outflow); assess the fellow eye for LPI; keep pushing the referral.',
                    'Pilocarpine 2% qid in both eyes long term, since it opens both angles and replaces the need for an LPI in either eye.',
                    'Oral acetazolamide 250 mg qid long term, prescribed by the optometrist, since topical drops can’t lower the IOP in angle closure.',
                    'Latanoprost 0.005% nocte in both eyes, because the fellow eye’s IOP of 20 and its narrow angle mean it is glaucomatous too.'
                ],
                answer: 0,
                why: {
                    1: 'Pilocarpine doesn’t replace an LPI and isn’t a long-term fix in PACG.',
                    2: 'Optometrists can’t prescribe acetazolamide, and it isn’t a long-term drug.',
                    3: 'The fellow eye has a normal IOP; it needs angle assessment, not drops.'
                },
                explain: 'PGA side effects: hyperaemia, iris darkening, lash growth, periorbitopathy, and CMO or uveitis reactivation in at-risk eyes.'
            }
        ]
    },
    {
        id: 'r2026-ntg-asymmetric',
        category: 'glaucoma',
        title: 'CDR 0.4 and 0.8, IOP 18/17',
        theme: 'Asymmetric Normal-Tension Glaucoma',
        years: ['2026'],
        patient: '65-year-old woman with a family history of glaucoma; no medical history or medicines (Monday 12:00).',
        stem: 'IOP R 18, L 17 mmHg. CDR R 0.4, L 0.8. Field: right clear, left inferior arcuate defect.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'Asymmetric cupping with a matching field defect at normal IOP. What are your differentials?',
                options: [
                    'Normal-tension glaucoma',
                    'POAG with missed IOP peaks (diurnal variation, thin CCT)',
                    'Burnt-out secondary glaucoma: past steroid response, PDS, PXF, uveitis or trauma (angle recession)',
                    'Compressive optic neuropathy (pituitary, meningioma)',
                    'Previous ischaemic optic neuropathy (NAION or GCA)',
                    'Physiologically large cup in a large disc',
                    'Central serous chorioretinopathy'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                critical: true,
                why: { 6: 'CSCR is a macular condition; it doesn’t cause cupping or an arcuate defect.' },
                explain: 'A large physiological cup is symmetric and has no field defect, so it doesn’t fit a 0.4 vs 0.8 asymmetry with an arcuate. NTG is a diagnosis of exclusion.'
            },
            {
                phase: '2. Tests',
                type: 'viva',
                question: '“What other tests do you want to do?”',
                points: [
                    'CCT (a thin cornea makes GAT under-read) and IOP phasing or repeat readings at different times of day',
                    'Gonioscopy: open angle, recession, PAS, pigment, PXF material',
                    'Disc size and rim colour (pallor out of proportion to cupping suggests a neurological cause)',
                    'OCT RNFL and GCL: does the structure match the inferior arcuate (superior rim and RNFL loss)?',
                    'Repeat field to confirm; colour vision and RAPD (an asymmetric optic neuropathy should give a left RAPD)',
                    'Blood pressure, history of migraine, Raynaud’s, sleep apnoea, nocturnal hypotension, past blood loss'
                ],
                explain: 'An inferior arcuate field defect comes from superior rim and RNFL loss: say where you expect the structural change.'
            },
            {
                phase: '3. Results',
                type: 'reveal',
                text: 'CCT normal both eyes, angles open with no secondary features. Superior rim thinning and RNFL loss in the left eye matching the field. Discs a similar size, rims pink. Colour vision normal; a small left RAPD.'
            },
            {
                phase: '4. Diagnosis',
                type: 'mcq',
                question: 'What is your diagnosis?',
                options: [
                    'Left NTG (structure and function agree, IOP never over 21, other causes excluded); right eye a glaucoma suspect.',
                    'Bilateral OHT: the IOPs are in the high teens and the family history makes both eyes high risk, but there is no damage yet.',
                    'Left compressive optic neuropathy: any RAPD in glaucoma rules glaucoma out, so she needs an urgent MRI before anything else.',
                    'Bilateral NTG: a family history of glaucoma means the right eye has it too, even with a 0.4 cup and a clear field.'
                ],
                answer: 0,
                why: {
                    1: 'OHT means an IOP over 21 with no damage. Hers is normal and the left eye is damaged.',
                    2: 'Asymmetric glaucoma often gives a small RAPD in the worse eye. Pink rims and an arcuate defect point to glaucoma.',
                    3: 'Family history raises risk but doesn’t diagnose. The right disc and field are normal.'
                },
                explain: 'Pallor, defects that respect the vertical midline, loss of colour vision or VA out of keeping with the cup, or age under 50 would push you to image.'
            },
            {
                phase: '5. Management',
                type: 'mcq',
                question: '“What are your management options: drops, SLT?”',
                options: [
                    'Treat the left eye: target 30% lower (CNTGS); latanoprost 0.005% nocte or SLT first line; refer to an ophthalmologist; review 4–6 weeks.',
                    'Don’t treat: the IOP is already normal, so lowering it further can’t help. Monitor fields and OCT every 6 months and refer if it progresses.',
                    'Treat both eyes with timolol 0.5% at night, since night dosing covers the nocturnal peak in NTG; target 15% lower; review yearly.',
                    'SLT isn’t used in NTG because the IOP is too low to respond, so start drops and refer for a trabeculectomy straight away.'
                ],
                answer: 0,
                why: {
                    1: 'CNTGS: a 30% lowering cut progression from 35% to 12% even at normal IOP.',
                    2: 'Night-time timolol can worsen nocturnal hypotension and optic nerve perfusion, and the right eye isn’t glaucomatous.',
                    3: 'SLT lowers IOP less from a low baseline but is still a reasonable option in NTG; surgery isn’t first line.'
                },
                explain: 'Check for nocturnal hypotension with the GP (BP tablets taken at night). Brimonidine is a good second drug in NTG (LoGTS).'
            }
        ]
    },
    {
        id: 'r2026-marginal-bleph',
        category: 'cornea',
        title: 'A Peripheral Infiltrate at 4 o’clock, Crusty Lashes',
        theme: 'Marginal Keratitis With Blepharitis',
        years: ['2026'],
        patient: '65-year-old woman, not a contact lens wearer, mild discomfort (Monday 3:20, Daisy).',
        stem: 'Photo: conjunctival hyperaemia and a small (about 1 × 2 mm) peripheral corneal infiltrate at 4 o’clock.',
        steps: [
            {
                phase: '1. History',
                type: 'viva',
                question: '“You’ve described the photo. What do you want to ask?”',
                points: [
                    'Pain (mild vs severe), photophobia, discharge, vision: severe pain and a drop in VA suggest infection',
                    'Contact lenses (she doesn’t wear them), trauma, foreign body',
                    'Lid symptoms: crusting, itchy or burning lid margins, worse in the morning; past episodes',
                    'Rosacea, seborrhoeic dermatitis, dry eye',
                    'Past HSV, cold sores, shingles',
                    'Medicines, drops already used, allergies'
                ],
                explain: 'The candidate finished describing and the examiner sat in silence for about 10 seconds: when that happens, go straight on to history.'
            },
            {
                phase: '2. More information',
                type: 'reveal',
                text: 'She has crusty lashes with collarettes and lid margin redness. VA is normal. There is a clear zone between the infiltrate and the limbus, the overlying epithelium is intact or only lightly staining, and the AC is quiet.'
            },
            {
                phase: '3. What causes it',
                type: 'mcq',
                question: '“What is it, and what causes it? Think about the location.”',
                options: [
                    'Marginal keratitis: a hypersensitivity reaction to staphylococcal antigens, at 2, 4, 8 or 10 o’clock where the lid margin rests on the cornea.',
                    'Bacterial keratitis: staphylococci from the lids invade the stroma at 4 o’clock, where the lids leave the cornea most exposed during the blink.',
                    'Mooren’s ulcer: an autoimmune peripheral melt that begins at the limbus without a clear zone and spreads circumferentially around the cornea.',
                    'Phlyctenulosis: a nodule at the limbus from a cell-mediated reaction to TB protein, which always starts at the 6 o’clock position.'
                ],
                answer: 0,
                critical: true,
                why: {
                    1: 'Marginal infiltrates are sterile immune deposits, not infection. A clear zone, an intact epithelium and mild pain don’t fit MK.',
                    2: 'Mooren’s is very painful, has no clear zone and is an ulcerating melt.',
                    3: 'Phlyctens are raised nodules that can cross the limbus, usually in children and young adults, and are now mostly staphylococcal too.'
                },
                explain: 'The examiner wanted the location: the infiltrates sit where the lid margin crosses the limbus, which is where the staphylococcal toxins pool against the cornea.',
                recall: 'The candidate explained the exotoxin reaction but missed what “think about the location” meant: say 2, 4, 8 and 10 o’clock and why.'
            },
            {
                phase: '4. Ruling out infection',
                type: 'multi',
                question: '“What do you want to rule out, and how?” Which features favour infectious keratitis over marginal keratitis?',
                options: [
                    'Severe pain and photophobia, a drop in VA',
                    'An epithelial defect as large as the infiltrate',
                    'No clear zone; a central or paracentral position',
                    'AC reaction, purulent discharge',
                    'Contact lens wear',
                    'Several small infiltrates near the limbus with a clear zone'
                ],
                answers: [0, 1, 2, 3, 4],
                why: { 5: 'Small limbal infiltrates with a clear zone are the marginal keratitis picture.' },
                explain: 'Marginal infiltrates are peripheral, often multiple, with a clear zone, little staining and mild symptoms. Also rule out HSV (dendrites, reduced sensation) before giving a steroid.'
            },
            {
                phase: '5. Management',
                type: 'mcq',
                question: '“What is your management plan?”',
                options: [
                    'Steroid (FML 0.1% or pred acetate 1% qid) with chloramphenicol cover; lid hygiene and warm compresses; review in 1–3 days.',
                    'Ciprofloxacin 0.3% hourly day and night as for MK; no steroid until a culture result is back; review in 24 hours and refer if it isn’t better.',
                    'Lid scrubs only: marginal keratitis is self-limiting, so drops add risk without benefit; review in 4 weeks to see whether it has settled.',
                    'Oral aciclovir 400 mg five times daily: a peripheral infiltrate in a 65-year-old is herpetic until proven otherwise; review in a week.'
                ],
                answer: 0,
                why: {
                    1: 'Hourly fluoroquinolone is for presumed MK. Marginal keratitis is immune-mediated and settles with a steroid.',
                    2: 'Lid hygiene alone is slow; a short steroid course settles the infiltrate and the symptoms.',
                    3: 'Nothing here suggests HSV (no dendrite, intact epithelium, clear zone).'
                },
                explain: 'Taper the steroid over 1–2 weeks. Treat the cause (the blepharitis) or it recurs.',
                recall: 'The candidate gave Pred Forte qid with next-day review, then lid scrubs. The examiner pushed: “What is causing the blepharitis?” Bacteria, so add an antibiotic.'
            },
            {
                phase: '6. Chloramphenicol',
                type: 'mcq',
                question: '“Chloramphenicol comes in two forms. Which are you giving, why, at what concentration and how often?”',
                options: [
                    '0.5% drops qid in the day (no blur); 1% ointment rubbed into the lid margins at night, or tds–qid if used alone.',
                    '1% drops qid and 0.5% ointment at night: the drops are stronger because they wash out faster, so the ointment can be weaker.',
                    '0.5% drops hourly for 48 hours, then qid: blepharitis needs a loading dose like microbial keratitis to clear the lid bacteria.',
                    '1% ointment once a week for a month: the ointment stays on the lid margin long enough that weekly dosing gives continuous cover.'
                ],
                answer: 0,
                why: {
                    1: 'The concentrations are the other way round: drops 0.5%, ointment 1%.',
                    2: 'Blepharitis doesn’t need loading doses; that regimen is for MK.',
                    3: 'Weekly dosing gives no meaningful cover.'
                },
                explain: 'Ointment suits blepharitis because it can be massaged into the lid margin; it blurs, so use it at night if she needs clear vision in the day.'
            },
            {
                phase: '7. Newer treatments',
                type: 'match',
                question: '“She also has SPK. What are the new or emerging treatments?” Match each to what it does.',
                pairs: [
                    { label: 'Intense pulsed light (IPL)', answer: 'Treats MGD and lid telangiectasia; reduces inflammation and Demodex' },
                    { label: 'Low-level light therapy (LLLT)', answer: 'Red light mask that warms the lids and reduces inflammation' },
                    { label: 'Microblepharoexfoliation (BlephEx)', answer: 'Rotating sponge that debrides biofilm and debris from the lid margin' },
                    { label: 'Perfluorohexyloctane (NovaTears)', answer: 'Water-free drop that spreads over the tear film to slow evaporation' },
                    { label: 'Punctal plugs', answer: 'Keeps tears on the eye in aqueous deficiency' }
                ],
                distractors: ['Laser that makes a hole in the iris'],
                explain: 'Also: thermal pulsation (LipiFlow), ciclosporin (Ikervis), tea tree oil wipes for Demodex, oral doxycycline or azithromycin for MGD and rosacea.',
                recall: 'The candidate gave LLLT, remembered IPL only on the way home (and nearly said LPI), and named Rohto as a new drop. Name IPL first, and give NovaTears or ciclosporin for drops. They also forgot punctal occlusion.'
            }
        ]
    },
    {
        id: 'r2026-ntg-neuro-vf',
        category: 'glaucoma',
        title: 'Routine Check, Normal IOP, a Wedge Defect',
        theme: 'NTG: Ruling Out Neuro, Reading the Field, Timolol',
        years: ['2026'],
        patient: '60-year-old woman, routine check; IOP and CCT normal (Monday 3:20, Sophia).',
        stem: 'Fundus photo of the disc. The examiner asked for a description, then went on to neuro causes, the field printout and a non-PGA treatment.',
        steps: [
            {
                phase: '1. The disc',
                type: 'viva',
                question: '“Describe the disc.”',
                points: [
                    'Size (small, medium, large) and shape',
                    'CDR (here about 0.8), thin rims, ISNT rule',
                    'Rim colour: pink or pale',
                    'Laminar dots visible, margins distinct',
                    'Inferior RNFL wedge defect; disc haemorrhage (none here), peripapillary atrophy, vessels (bayoneting, nasal shift)'
                ],
                explain: 'Mention colour: the examiner picked up on it straight away.'
            },
            {
                phase: '2. A pale rim',
                type: 'mcq',
                question: '“You mentioned colour. What do you suspect if the rim is pale?”',
                options: [
                    'Pallor beyond the cupping suggests a non-glaucomatous optic neuropathy: optic neuritis, ischaemic (NAION, GCA) or compressive.',
                    'Pallor is the usual colour of a glaucomatous rim, so it confirms the glaucoma and no other work-up is needed before starting drops.',
                    'A pale rim means the IOP must have been high at some point, so it confirms POAG with missed peaks rather than NTG; start phasing.',
                    'Pallor is a normal ageing change after 60 and doesn’t affect the diagnosis or the plan, so record it and review in a year as usual.'
                ],
                answer: 0,
                critical: true,
                why: {
                    1: 'In glaucoma the remaining rim stays pink; pallor beyond the cup is the warning sign.',
                    2: 'Pallor doesn’t tell you about past IOP, and it points away from glaucoma.',
                    3: 'Rim pallor isn’t a normal ageing change.'
                },
                explain: 'Other red flags for a neuro cause: age under 50, VA or colour vision loss out of keeping with the cup, a field that respects the vertical midline, a fast course.'
            },
            {
                phase: '3. Neuro work-up',
                type: 'match',
                question: '“What work-up would you do to rule those out? What are those?” Match each sign to what it means.',
                pairs: [
                    { label: 'Uhthoff’s phenomenon', answer: 'Vision blurs when body temperature rises (exercise, a hot shower), from slowed conduction in a demyelinated nerve' },
                    { label: 'Pulfrich phenomenon', answer: 'A pendulum swinging in one plane seems to move in an ellipse, because one optic nerve conducts more slowly' },
                    { label: 'RAPD', answer: 'Asymmetric optic nerve input: the pupils dilate when the light swings to the affected eye' },
                    { label: 'Red desaturation', answer: 'A red target looks washed out to the affected eye; an early sign of optic neuropathy' }
                ],
                distractors: ['The blind spot moves with gaze direction'],
                explain: 'Both Uhthoff’s and Pulfrich point to demyelination: multiple sclerosis. Also check VA, colour vision, fields and ask about pain on eye movement.',
                recall: 'The candidate described Uhthoff’s as muscle weakness and fatigue. For the eye, say vision worsens with heat; the examiner only let them explain Uhthoff’s.'
            },
            {
                phase: '4. A neuro field',
                type: 'mcq',
                question: '“What field would you expect if it is neuro?”',
                options: [
                    'Defects that respect the vertical midline (chiasm and beyond), or central scotomas in optic neuritis; glaucoma respects the horizontal.',
                    'Defects that respect the horizontal midline, such as a nasal step, since every optic neuropathy follows the arcuate RNFL bundles exactly.',
                    'A generalised depression with no localised defect, since neurological disease affects every fibre in the optic nerve equally.',
                    'An enlarged blind spot only: any neurological cause of a pale disc shows up as blind-spot enlargement on a 24-2 field and nothing else.'
                ],
                answer: 0,
                why: {
                    1: 'A nasal step is the classic glaucomatous defect; respecting the horizontal is glaucoma or a vascular (altitudinal) cause.',
                    2: 'Neuro defects are usually localised and patterned, not a uniform depression.',
                    3: 'An enlarged blind spot is seen in disc swelling, not as the only sign of optic neuropathy.'
                },
                explain: 'NAION often gives an altitudinal defect, which respects the horizontal: so a horizontal step doesn’t rule out ischaemia.'
            },
            {
                phase: '5. The printout',
                type: 'reveal',
                text: 'HVF 24-2: reliable indices, a superior nasal step, GHT outside normal limits, MD −0.77 dB. The threshold value at the blind-spot point reads 11 dB. Total and pattern deviation maps look the same.'
            },
            {
                phase: '6. Reading the field',
                type: 'multi',
                question: 'The examiner pointed at parts of the printout. Which statements are correct?',
                options: [
                    'The trace along the bottom is the gaze tracker: upward spikes are eye movements or loss of fixation, downward spikes are blinks',
                    'GHT compares mirror-image sectors of the superior and inferior hemifields; a superior nasal step makes it “outside normal limits”',
                    'A value of 11 dB at the blind-spot point means a stimulus was seen there: check fixation (gaze tracker, fixation losses), or the point sits at the blind spot’s edge',
                    'Cataract causes a generalised depression: total deviation shows it, pattern deviation removes it',
                    'If total and pattern deviation look the same, there is little generalised depression, so cataract isn’t explaining the defect',
                    'Pattern deviation hides a localised defect caused by cataract, so a nasal step with a cataract can be ignored'
                ],
                answers: [0, 1, 2, 3, 4],
                why: { 5: 'Pattern deviation removes generalised depression, not localised defects; a nasal step stays visible and matters.' },
                explain: 'The blind spot should read <0 dB. A seen stimulus there is the old Heijl-Krakau fixation check; light scatter from a cataract can also let a bright target be seen at the edge.',
                recall: 'The candidate wasn’t sure why the blind spot read 11 and suggested poor fixation or cataract scatter. Lead with fixation and point to the gaze tracker.'
            },
            {
                phase: '7. Diagnosis and grade',
                type: 'mcq',
                question: '“What is your diagnosis, and how would you grade it?”',
                options: [
                    'NTG (normal IOP and CCT, structure matches function, neuro causes excluded): early, as MD is better than −6 dB and fixation is spared.',
                    'OHT: the IOP is normal, but the field has a defect, so it is high-risk OHT and the field should be repeated yearly before any diagnosis.',
                    'NTG, advanced: any nasal step makes it advanced under Hodapp, whatever the MD, so she needs urgent referral and surgery.',
                    'Not glaucoma: with an MD of −0.77 dB the field counts as normal, so the nasal step and the GHT result can be ignored as noise.'
                ],
                answer: 0,
                why: {
                    1: 'OHT needs a raised IOP and no damage; she has normal IOP and damage.',
                    2: 'Hodapp staging uses MD, the number of depressed points and points near fixation; a nasal step with MD −0.77 is early.',
                    3: 'MD can stay near zero with a localised defect. PSD and GHT catch it; with a matching RNFL wedge it is real.'
                },
                explain: 'Confirm with a repeat field: one abnormal field isn’t enough.'
            },
            {
                phase: '8. No PGA',
                type: 'mcq',
                question: '“She is worried about cosmetic side effects and doesn’t want surgery or laser. What topical treatment can you give, and how?”',
                options: [
                    'Timolol 0.5% once in the morning (or gel-forming 0.5% once daily) if there are no contraindications; can go to bd; avoid an evening dose in NTG.',
                    'Timolol 0.5% at night only, because NTG is driven by the nocturnal IOP peak and timolol works best during sleep when aqueous flow is high.',
                    'Brimonidine 0.2% once a day at night, since it is the only drop with no cosmetic or systemic side effects and is first line in Australia.',
                    'Bimatoprost 0.01% at night, since the lower concentration removes all the cosmetic side effects of the prostaglandin analogues.'
                ],
                answer: 0,
                why: {
                    1: 'Aqueous production falls at night, so night timolol does little and can worsen nocturnal hypotension and perfusion.',
                    2: 'Brimonidine is dosed bd–tds, causes allergy in many patients and isn’t first line.',
                    3: 'Bimatoprost 0.01% still darkens the iris and periorbital skin and grows lashes.'
                },
                explain: 'SLT is the other answer to “cosmetic worries”, though the effect is smaller at a low baseline IOP. The examiner meant “skip the PGA”, not “skip all drops”.',
                recall: 'The candidate said 0.5% once in the morning, then a second drop around lunch if needed. Standard bd dosing is morning and evening; in NTG many keep to a morning dose.'
            },
            {
                phase: '9. Timolol contraindications',
                type: 'multi',
                question: '“What are the contraindications of timolol?”',
                options: [
                    'Asthma and COPD',
                    'Bradycardia, second- or third-degree heart block',
                    'Uncontrolled heart failure',
                    'Caution: oral beta-blockers, diabetes (masks hypoglycaemia), myasthenia gravis, depression',
                    'Sulfonamide allergy'
                ],
                answers: [0, 1, 2, 3],
                why: { 4: 'Sulfonamide allergy is a caution for CAIs, not beta-blockers.' },
                explain: 'Sulfonamide allergy is a CAI caution. Punctal occlusion for 2 minutes cuts systemic absorption.'
            },
            {
                phase: '10. Review and next steps',
                type: 'mcq',
                question: '“When do you review her, and if timolol isn’t enough, what do you add?”',
                options: [
                    'Review in 4–6 weeks (IOP, side effects, adherence), repeat the field to build a baseline, refer within 4 months; add brimonidine or a CAI.',
                    'Review in 12 months, since NTG progresses slowly; if timolol isn’t enough add a second beta-blocker such as betaxolol for a stronger effect.',
                    'Review in 1 week to check for systemic effects, then yearly; if timolol fails switch her to oral acetazolamide through her GP long term.',
                    'No review needed once she is on drops; the ophthalmologist takes over, so add whatever they suggest when the referral letter comes back.'
                ],
                answer: 0,
                why: {
                    1: 'A year is too long after starting a drop, and two beta-blockers don’t add.',
                    2: 'Acetazolamide isn’t long-term glaucoma treatment.',
                    3: 'Starting a drop means you check its effect and side effects yourself.'
                },
                explain: 'Brimonidine has the LoGTS evidence in NTG. The examiner didn’t ask for a brand name, studies or the case report in this sitting.'
            }
        ]
    }
);
