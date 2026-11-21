// Cases from the 2024 therapeutics orals recall (Past Papers/Oral Exam 2024.pdf): candidates' notes from
// Monday to Thursday (examiners Angelica, Lily, Lisa, Fiona, Elizabeth, Rebecca, Wilson, Kathleen and Daisy).
// The notes contain some errors, which are corrected in the "Recall check" boxes.
window.CASES.push(
    {
        id: 'r2024-myopic-disc',
        category: 'professional',
        title: 'Case Report: Myopia and an NTG-Like Disc',
        theme: 'Myopic Neuropathy vs Glaucoma; 10-2 Fields',
        years: ['2024'],
        patient: 'Case-report questions on a myopic patient with normal-tension glaucoma (Monday morning, Angelica).',
        stem: '“You mentioned myopia as a risk factor for glaucoma. Why?” The questions then ran for a long time before the cases.',
        steps: [
            {
                phase: '1. Why myopia?',
                type: 'mcq',
                question: '“Why is myopia a risk factor for glaucoma?”',
                options: [
                    'The longer eye stretches the posterior sclera and lamina cribrosa, which then deforms more under IOP, leaving axons more vulnerable; myopic discs are also harder to judge, hiding early damage.',
                    'Myopes have shallower anterior chambers, so their angles close more easily during dim light or reading; that is why myopia is a risk factor for angle closure rather than open-angle glaucoma.',
                    'Myopes make more aqueous because their ciliary body is larger, so their IOP always runs above average and the nerve is damaged by the higher pressure alone, whatever the disc shape.',
                    'Myopia isn’t a real risk factor at all; the link is an artefact of myopes having more frequent eye tests, so more glaucoma happens to be found in them than in other people.'
                ],
                answer: 0,
                explain: 'Myopia is a risk factor for open-angle glaucoma (and for PDS); hyperopia is the risk factor for angle closure.'
            },
            {
                phase: '2. Telling them apart',
                type: 'multi',
                question: '“How would the myopic disc differ from a glaucomatous one?” Select the features of myopic change rather than glaucoma.',
                options: [
                    'Tilted, oval or enlarged disc with a temporal crescent of peripapillary atrophy',
                    'Tessellated (tigroid) fundus and posterior staphyloma',
                    'No focal rim notching or progressive rim loss',
                    'A field defect that improves with extra minus lens power (a refractive scotoma)',
                    'Field defects that are stable over time rather than progressive',
                    'A disc haemorrhage at the inferior pole'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'A disc haemorrhage is a glaucoma sign. Myopic eyes can also have glaucoma, so progression on repeated OCT and fields is often what decides it.',
                recall: 'The candidate described repeating the field with a −3.00 D lens: if the defect shrinks, it is refractive (from the staphyloma). The examiner seemed to want “enlarged, tilted discs” as well.'
            },
            {
                phase: '3. 10-2 fields',
                type: 'mcq',
                question: '“When would you do a 10-2?”',
                options: [
                    'When there is (or may be) central involvement: NTG, where early defects often sit near fixation; advanced loss with a central island; a paracentral 24-2 defect; or a macular GCL defect.',
                    'Only in angle closure, since central defects never occur in open-angle glaucoma of any type; the 10-2 is the field test that measures how far the angle has narrowed over the years.',
                    'For every new patient instead of a 24-2, since the 10-2 covers more of the visual field than the 24-2 and is quicker and easier for older or less reliable patients.',
                    'Only in neurological disease; a 10-2 has no role in glaucoma, because the 24-2 already tests the central 10 degrees at the same point density as a 10-2.'
                ],
                answer: 0,
                explain: 'The 24-2 has only a few points within the central 10°, spaced 6° apart, so it can miss early paracentral loss.'
            },
            {
                phase: '4. NTG mechanisms',
                type: 'viva',
                question: '“Why does NTG often start near fixation? What other factors would you ask about?”',
                points: [
                    'Vascular (perfusion) theory: poor or unstable blood flow to the disc; mechanical theory: a weak lamina at normal IOP',
                    'Nocturnal hypotension, especially with BP tablets at night',
                    'Migraine, Raynaud’s (vasospasm)',
                    'Sleep apnoea',
                    'Rule out compressive lesions and past shock or blood loss, and do a 10-2'
                ],
                explain: 'CNTGS: a 30% IOP reduction slowed progression in NTG. Disc haemorrhages are common in NTG.'
            }
        ]
    },
    {
        id: 'r2024-arg-gonio',
        category: 'glaucoma',
        title: 'Asymmetric Angles after a Tennis Ball',
        theme: 'Angle-Recession Glaucoma',
        years: ['2024'],
        patient: '60-year-old Caucasian man. Hit in the left eye by a tennis ball 10 years ago. IOP R 20, L 27 mmHg (Monday, Angelica).',
        stem: 'Gonioscopy photos of both eyes.',
        exhibit: 'Gonio: right eye open to the scleral spur; left eye open much wider, to a broad ciliary body band, with more pigment.',
        steps: [
            {
                phase: '1. The angle',
                type: 'mcq',
                question: '“What are the bands in order? What do you see, and what do you write in the records?”',
                options: [
                    'From the cornea: Schwalbe’s line, meshwork, scleral spur, ciliary body band, iris root. Record the deepest structure per quadrant, pigment, iris profile, PAS, and here the wider band on the left.',
                    'From the iris: Schwalbe’s line, scleral spur, meshwork, then the ciliary body band against the cornea. Only the pigment needs recording, since the bands look the same in every eye anyway.',
                    'From the cornea: ciliary body band, scleral spur, meshwork, Schwalbe’s line, then iris root. Record only whether each angle is open or closed, as nothing else on gonio changes management.',
                    'From the cornea: meshwork, Schwalbe’s line, iris root, then scleral spur. Record the van Herick grade in each eye, since a van Herick grade means the same thing as a gonioscopy grade.'
                ],
                answer: 0,
                explain: 'Compare quadrants and eyes. Recession shows as an irregularly widened ciliary body band, torn iris processes and a whiter scleral spur.',
                recall: 'The candidate first misread which eye was wider, and kept repeating “pigment” when asked what else to look for. PAS (synechiae) and the ciliary body band width were what the examiner was after.'
            },
            {
                phase: '2. Pathophysiology',
                type: 'mcq',
                question: '“What is the pathophysiology of angle-recession glaucoma?”',
                options: [
                    'Blunt trauma tears the ciliary body between its longitudinal and circular fibres; the meshwork is also damaged and scars, reducing outflow. Glaucoma can come months to decades later.',
                    'Blunt trauma pushes the lens forward and closes the angle by pupillary block; the IOP rises within hours of the injury and the angle then stays closed for the rest of the patient’s life.',
                    'Blunt trauma releases pigment from the iris, which clogs the meshwork just as it does in pigment dispersion; the pressure rise resolves within a few weeks without any treatment.',
                    'Blunt trauma causes new vessels to grow into the angle, as in diabetic neovascular glaucoma, and a fibrovascular membrane then closes the angle completely over a few months.'
                ],
                answer: 0,
                explain: 'Early IOP changes after trauma (hyphema, inflammation, ciliary shutdown) are separate from the late glaucoma.'
            },
            {
                phase: '3. Target',
                type: 'mcq',
                question: 'Structure and function confirm glaucoma in the left eye. “What target? 20 or 30%?”',
                options: [
                    'A 25–30% reduction (EMGT) to start, adjusted to the damage; matching the uninjured eye (about 20 mmHg) is a sensible way to put it, then reset the target if it progresses.',
                    'A 50% reduction in both eyes, since trauma to one eye means both eyes will go on to develop glaucoma at the same rate, so both need the same target from the very start.',
                    'No target is needed in angle-recession glaucoma, since it never progresses after the first year following the injury; just check the IOP once a year from now on.',
                    'Lower it to below 10 mmHg straight away, since angle-recession glaucoma always needs surgery in the end and drops alone can never reach a useful target pressure.'
                ],
                answer: 0,
                explain: 'Targets are individual: severity, rate of progression, life expectancy. Write the target down and review it.',
                recall: 'The candidate wavered between 20%, 25% and 30% before choosing “match the other eye” (20 mmHg). Pick a number with a reason and stick to it.'
            },
            {
                phase: '4. Drugs and surgery',
                type: 'mcq',
                question: '“Are there any drops you wouldn’t give? What about laser and surgery? What’s the drawback of a PGA here?”',
                options: [
                    'Avoid miotics (they cut uveoscleral outflow and can raise IOP); SLT usually fails; a PGA suits, but in one eye darkens and grows lashes on that side; avoid it soon after injury.',
                    'Avoid PGAs completely, since they are contraindicated for life after any trauma to the eye; pilocarpine is the first-line drop here, and SLT works best of all in recessed angles.',
                    'Avoid β-blockers in all men over 50; SLT is the first-line treatment in angle recession; PGAs have no cosmetic side effects at all when they are used in one eye only.',
                    'All glaucoma drops are equally suitable after trauma; SLT and pilocarpine are both effective in angle recession; a PGA has no drawbacks at all for this particular patient.'
                ],
                answer: 0,
                explain: 'Surgery for ARG is trabeculectomy with an antimetabolite or a tube; failure rates are higher than in POAG.'
            },
            {
                phase: '5. Collaborative care and prognosis',
                type: 'mcq',
                question: '“When would you refer? What do we know about the prognosis of ARG compared with POAG?”',
                options: [
                    'Start treatment, then refer for collaborative care, sooner if advanced, progressing or not at target on maximal drops. ARG is often harder to control and progresses faster than POAG.',
                    'Refer everyone with ARG immediately without starting drops, since optometrists can’t treat secondary glaucoma. ARG has a better prognosis than POAG, so treatment can be gentle.',
                    'Never refer, since angle-recession glaucoma is managed entirely in primary care. Its prognosis is exactly the same as POAG and depends only on the patient’s age at diagnosis.',
                    'Refer only if the fellow eye develops glaucoma as well. The prognosis is excellent, because the IOP in a recessed angle always returns to normal within about 5 years.'
                ],
                answer: 0,
                explain: 'Monitor the fellow eye too: it carries an increased risk of open-angle glaucoma.'
            }
        ]
    },
    {
        id: 'r2024-mk-verbal',
        category: 'cornea',
        title: '“What Are the Signs of a Bacterial Infection?”',
        theme: 'Bacterial Keratitis: Severity and Dosing',
        years: ['2024'],
        patient: 'No photo: an all-verbal case (Monday morning, Lisa).',
        stem: '“What are signs of a bacterial infection?” “Say it was the cornea.”',
        steps: [
            {
                phase: '1. Signs',
                type: 'multi',
                question: 'Select the signs of bacterial keratitis.',
                options: [
                    'An epithelial defect (ulcer) over a dense stromal infiltrate',
                    'Mucopurulent discharge',
                    'Marked conjunctival and ciliary injection',
                    'AC reaction, possibly hypopyon',
                    'Lid oedema',
                    'Photophobia'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Photophobia is a symptom, not a sign; Lisa cut the candidate off for it.',
                recall: 'The candidate called the staining “a corneal defect from injury” before being prompted to say “corneal ulcer”. Use the right term.'
            },
            {
                phase: '2. Severity',
                type: 'mcq',
                critical: true,
                question: '“What would make it severe, needing hospital?”',
                options: [
                    'Central or near-central, larger than about 2 mm, deep or thinning, a marked AC reaction or hypopyon, no response to treatment, an unusual organism, or a one-eyed patient.',
                    'Any ulcer at all in a patient over 40, whatever its size, depth or position, since age is the only factor that decides whether a corneal ulcer can be treated in practice.',
                    'Only an ulcer that has already perforated; anything short of perforation can be managed in practice with chloramphenicol drops and a review in a few days.',
                    'Only an ulcer in a contact lens wearer; ulcers in people who don’t wear lenses are never severe enough to need hospital, whatever their size or position.'
                ],
                answer: 0,
                explain: 'A common rule of thumb is “1-2-3”: grade 1+ AC cells, 2 mm infiltrate, within 3 mm of centre, refer.',
                recall: 'The candidate first said “larger than 4 mm, or over 60”, then corrected to “larger than 2 mm but within 4 mm of the centre”. The examiner nodded at the correction.'
            },
            {
                phase: '3. Dosing',
                type: 'mcq',
                question: 'A 2 mm peripheral, shallow ulcer in a young patient. “What do you do? Does that include overnight?”',
                options: [
                    'Ciprofloxacin 0.3% q15min for 6 h, then q30min for the rest of day one and through the first night (waking to instil); hourly on day 2; then taper; review the next morning.',
                    'Ciprofloxacin 0.3% q15min for 6 h, then stop overnight and use ciprofloxacin ointment instead, since sleep matters more than drops on the first night; review in 2 days.',
                    'Chloramphenicol 0.5% QID through the day and chloramphenicol ointment at night, since a small, shallow peripheral ulcer never needs a loading dose; review in 3 days.',
                    'Ciprofloxacin 0.3% hourly while awake for a week, with no drops overnight so the patient can rest; then QID until healed; review in a week to check the ulcer has closed.'
                ],
                answer: 0,
                explain: 'The aim is to keep high drug levels in the cornea during the first 24–48 h, when the organism load is highest.',
                recall: 'The candidate offered ciprofloxacin ointment as well, then realised that with 30-minute drops overnight it isn’t needed.'
            },
            {
                phase: '4. Anything else?',
                type: 'mcq',
                question: '“What if they are in pain? Why would that help, and what else does it do?”',
                options: [
                    'A cycloplegic (atropine 1% BD or homatropine 2%): eases pain from ciliary spasm, reduces photophobia, and prevents posterior synechiae with an AC reaction; oral analgesia too.',
                    'A topical anaesthetic (proxymetacaine) to use at home every hour: it takes the pain away completely and helps the epithelium heal faster by stopping the patient rubbing.',
                    'A topical NSAID (ketorolac) QID: it gives the strongest pain relief of any eye drop and has no effect on corneal healing, so it can be used for as long as needed.',
                    'A bandage contact lens: it takes the pain away by covering the ulcer, and it lets the antibiotic drops stay in contact with the cornea for longer between doses.'
                ],
                answer: 0,
                explain: 'Never give topical anaesthetics for home use: they delay healing and can cause melting. Bandage lenses on an infected ulcer are dangerous.'
            }
        ]
    },
    {
        id: 'r2024-aau-iritis',
        category: 'uveitis',
        title: '“Anterior Uveitis or Iritis — What’s the Difference?”',
        theme: 'Acute Anterior Uveitis',
        years: ['2024'],
        patient: 'Case-report follow-up questions on AAU (Monday morning, Lily).',
        stem: 'Lily asked about the differentials in the candidate’s case report, then grade 3 cells.',
        steps: [
            {
                phase: '1. Terminology',
                type: 'mcq',
                question: '“Iritis or anterior uveitis — what’s the difference? Do you expect an AC reaction and KPs in both?”',
                options: [
                    'Anterior uveitis is the umbrella term (SUN: AC is the main site), covering iritis and iridocyclitis. Both have AC cells and flare, and both can have KPs (inflammatory cells on the endothelium).',
                    'Iritis has no AC reaction, as the inflammation stays within the iris tissue itself and never spills into the aqueous; KPs only ever occur in chronic uveitis, never in an acute episode.',
                    'Iritis is infective and anterior uveitis is autoimmune; KPs are corneal infiltrates in the anterior stroma, and they only ever appear in iritis, never in anterior uveitis.',
                    'They are separate diseases: iritis always gives a high IOP and anterior uveitis a low one; KPs are pigment deposits on the lens that are only found in anterior uveitis.'
                ],
                answer: 0,
                explain: 'Fine KPs suggest non-granulomatous disease; large “mutton-fat” KPs suggest granulomatous (sarcoid, TB, syphilis, VKH).',
                recall: 'The candidate said they didn’t expect an AC reaction or KPs in iritis, and that KPs aren’t common in acute uveitis. Lily’s face said otherwise.'
            },
            {
                phase: '2. IOP',
                type: 'mcq',
                question: '“What happens to IOP in uveitis?”',
                options: [
                    'Often low early (an inflamed ciliary body makes less aqueous), but it can rise from trabeculitis (herpes, PSS), debris in the meshwork, synechial closure or a steroid response.',
                    'Always high from the very first day, because inflammatory cells block the meshwork straight away; a normal or low IOP therefore rules out uveitis as the cause of the red eye.',
                    'Always normal, since neither the ciliary body nor the trabecular meshwork is ever affected in anterior uveitis, so IOP doesn’t need checking until a steroid is started.',
                    'Always low, and it never rises at any stage of the disease or its treatment; a raised IOP in a red eye means the diagnosis must be angle closure instead of uveitis.'
                ],
                answer: 0,
                explain: 'A raised IOP in AAU should make you think of herpetic or Posner–Schlossman causes.'
            },
            {
                phase: '3. Who needs a work-up?',
                type: 'mcq',
                question: '“What percentage of AAU has a systemic association? Would you refer everyone to the GP for a work-up?”',
                options: [
                    'A minority to about half (HLA-B27 is the largest group). A first, unilateral, non-granulomatous episode with a negative review of systems needs no blood tests; work up atypical or recurrent cases.',
                    'Nearly all of them (over 90%), so every patient needs full blood tests, a chest X-ray, HLA-B27 and syphilis serology arranged at the first visit, whatever the history and examination show.',
                    'None: acute anterior uveitis is always idiopathic, so no systemic questions or work-up are ever needed, even when episodes recur or both eyes become involved.',
                    'Only uveitis after trauma, since traumatic uveitis is the only form with any systemic association; all other cases are treated with drops alone and never referred.'
                ],
                answer: 0,
                explain: 'Traumatic uveitis with a clear history doesn’t need a systemic work-up.',
                recall: 'The candidate first said about 60%, then changed to 30–50% after Lily asked “so the majority?” and “so the minority?”'
            },
            {
                phase: '4. Treatment',
                type: 'mcq',
                question: 'Grade 3 cells. “How would you treat? Atropine just for pain?”',
                options: [
                    'Prednisolone acetate 1% hourly while awake, review in 24–48 h, taper once cells drop two SUN grades; atropine 1% for ciliary spasm pain, the blood–aqueous barrier and synechiae.',
                    'Prednisolone acetate 1% QID for one week and then stop without a taper; atropine only if the pain is severe, since it does nothing else in uveitis apart from relieving the ache.',
                    'Fluorometholone 0.1% hourly for 2 days and then stop; no cycloplegic, since cycloplegics cause angle closure in an eye with active anterior uveitis.',
                    'Oral prednisolone through the GP and no topical steroid, since drops can’t reach the anterior chamber in sufficient amounts when the inflammation is grade 3.'
                ],
                answer: 0,
                explain: 'Atropine can leave the pupil fixed dilated if synechiae form in that position; shorter-acting cycloplegics keep the pupil moving.'
            }
        ]
    },
    {
        id: 'r2024-hzo-neurotrophic',
        category: 'cornea',
        title: 'Elderly Woman with a Facial Rash, then a Numb Cornea',
        theme: 'HZO and Neurotrophic Keratitis',
        years: ['2024'],
        patient: 'Woman in her 80s with a rash over the left forehead; red, uncomfortable eye for about 2 days (Tuesday morning, Fiona).',
        stem: 'First photo: a superior corneal lesion that looks like splattered paint with fluorescein.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: '“Give me some differentials for this staining.”',
                options: [
                    'HSV epithelial keratitis',
                    'HZO pseudodendrites',
                    'Acanthamoeba keratitis',
                    'SEAL (superior epithelial arcuate lesion) from lens wear',
                    'Trauma or healing abrasion',
                    'Fuchs’ endothelial dystrophy'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Fiona wanted “trauma” before moving on. Exposure keratopathy is usually inferior.'
            },
            {
                phase: '2. Findings',
                type: 'reveal',
                text: 'Photo: obvious unilateral vesicular rash in the left ophthalmic division. VA left reduced. IOP normal. Motility full. Pupils PERRL. AC quiet.'
            },
            {
                phase: '3. What to look for',
                type: 'multi',
                question: '“What are you looking for on a DFE? What other complications can HZO cause?”',
                options: [
                    'Acute retinal necrosis or progressive outer retinal necrosis',
                    'Anterior uveitis with raised IOP and sectoral iris atrophy',
                    'Neurotrophic keratitis from loss of corneal sensation',
                    'Stromal (nummular or disciform) keratitis and episcleritis or scleritis',
                    'Cranial nerve palsies (III, IV, VI) and optic neuritis',
                    'Retinal detachment from vitreous traction in the first week'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Later in the case Fiona was clearly after neurotrophic keratitis.'
            },
            {
                phase: '4. Treatment and precautions',
                type: 'mcq',
                critical: true,
                question: '“How would you manage her? What precautions with aciclovir?”',
                options: [
                    'Oral antiviral within 72 h of rash onset (aciclovir 800 mg 5×/day or valaciclovir 1 g TDS, 7 days), with the dose adjusted to her kidney function. Age alone isn’t a reason to withhold it.',
                    'Withhold the antiviral because she is elderly, since aciclovir and valaciclovir are contraindicated over the age of 75; treat the pain with paracetamol and review her again in a week.',
                    'Topical aciclovir 3% ointment alone, since oral antivirals are too toxic for anyone over 80, whatever their kidney function, and the eye can be treated topically.',
                    'Oral aciclovir 400 mg BD for 12 months, as for recurrent HSV; the dose never needs adjusting for kidney function, since aciclovir is cleared by the liver.'
                ],
                answer: 0,
                explain: 'Older people have the most to gain (PHN risk rises with age). Renal impairment is the key precaution.',
                recall: 'The candidate listed “elderly” as a precaution, and Fiona asked: “So you say elderly and this patient is elderly… and you still prescribe aciclovir?” Say renal function, which is often reduced in the elderly, instead.'
            },
            {
                phase: '5. Neurotrophic keratitis',
                type: 'multi',
                question: '“Now she has neurotrophic keratitis. What would you do? What can an optometrist give that comes from the patient?”',
                options: [
                    'Frequent preservative-free lubricants and ointment; stop toxic or unnecessary drops',
                    'Autologous serum eye drops (from the patient’s own blood)',
                    'Bandage contact lens or scleral lens, with antibiotic cover',
                    'Punctal plugs',
                    'Referral for amniotic membrane, tarsorrhaphy or nerve growth factor drops (cenegermin)',
                    'A topical anaesthetic to use at home for comfort'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Neurotrophic corneas heal poorly and can melt or perforate. Topical anaesthetics make it worse.'
            }
        ]
    },
    {
        id: 'r2024-hemianopia',
        category: 'neuro',
        title: 'Macular Splitting or Sparing?',
        theme: 'Homonymous Hemianopia',
        years: ['2024'],
        patient: 'Two fields shown on different days: a congruous homonymous hemianopia splitting fixation (Tuesday, Elizabeth), and one sparing the macula (Tuesday, Fiona).',
        stem: '“Can you tell me why it’s macular splitting and not macular sparing?”',
        steps: [
            {
                phase: '1. Describe first',
                type: 'mcq',
                question: 'Same defect in both eyes, respecting the vertical midline and running through fixation. How do you describe it?',
                options: [
                    'A complete homonymous hemianopia respecting the vertical midline and splitting fixation: a lesion behind the chiasm, opposite the field loss.',
                    'A bitemporal hemianopia splitting fixation in both eyes: a lesion at the chiasm, most often from a pituitary tumour pressing up from below.',
                    'An altitudinal defect in both eyes respecting the horizontal midline: bilateral NAION from poor blood flow to both optic nerve heads.',
                    'A central scotoma in both eyes with the periphery spared: bilateral optic neuritis, which often comes with pain on moving the eyes.'
                ],
                answer: 0,
                explain: 'Describe the defect before you explain it; Elizabeth cut off a candidate who started on the cause.'
            },
            {
                phase: '2. Sparing vs splitting',
                type: 'mcq',
                question: '“Why does a lesion spare or split the macula?”',
                options: [
                    'The occipital pole has a dual supply (PCA and MCA), so a PCA occlusion often spares the macula. Tract or radiation lesions, or ones that include the pole, cut the macular fibres too.',
                    'Macular fibres cross at the chiasm and the non-macular fibres don’t, so any lesion of the chiasm spares the macula, while any lesion of the occipital cortex always splits it.',
                    'Macular sparing is always a testing artefact from the patient moving their eyes towards the hemianopic side; any real homonymous lesion splits the macula through fixation.',
                    'The macula is supplied by the ophthalmic artery alone, so occipital strokes never affect central vision; splitting of the macula only ever happens with retinal disease.'
                ],
                answer: 0,
                explain: 'Congruous defects point to the occipital cortex; incongruous to the tract. A superior “pie in the sky” quadrantanopia points to the temporal lobe; inferior to the parietal.'
            },
            {
                phase: '3. Causes and action',
                type: 'mcq',
                critical: true,
                question: '“What can cause this, and how would you manage the patient?”',
                options: [
                    'Stroke (infarct or haemorrhage), tumour, trauma, infection or demyelination. A new or sudden defect goes to ED urgently; advise no driving and tell the GP.',
                    'Glaucoma in both eyes, which commonly produces matching hemifield loss. Start a PGA in both eyes and repeat the field in 6 months to check for progression.',
                    'Migraine aura, which always leaves a permanent homonymous defect behind. Reassure the patient, advise them to avoid triggers, and review the field in a year.',
                    'Bilateral cataract, which typically causes half of the field to be lost in each eye. Refer routinely for cataract surgery and recheck the field after both operations.'
                ],
                answer: 0,
                explain: 'Homonymous hemianopia usually fails the driving field standard in Australia.'
            }
        ]
    },
    {
        id: 'r2024-aac-later',
        category: 'glaucoma',
        title: 'Sudden Blur, Headache and Haloes, then RNFL Loss',
        theme: 'Acute Angle Closure and its Aftermath',
        years: ['2024'],
        patient: '60-year-old woman. No photos (Tuesday morning, Elizabeth and Fiona).',
        stem: 'Sudden blurred vision, headache, pain and haloes in one eye.',
        steps: [
            {
                phase: '1. Findings',
                type: 'reveal',
                text: 'VA reduced in the affected eye. IOP about 60 mmHg. Pupil fixed and mid-dilated. Cornea hazy. A few AC cells. Fellow eye: narrow angle on gonioscopy (no gonio on the affected eye through the oedema).'
            },
            {
                phase: '2. Drops and pilocarpine',
                type: 'mcq',
                critical: true,
                question: '“It’s AAC. What now? And why would pilocarpine be contraindicated?”',
                options: [
                    'Call the ophthalmologist; acetazolamide via the GP or ED; timolol, apraclonidine, brinzolamide, prednisolone acetate. Pilocarpine only under ~40: above that the sphincter is ischaemic, and it can push the lens forward.',
                    'Call the ophthalmologist; pilocarpine 4% every 5 minutes first, then latanoprost to finish. Pilocarpine is never contraindicated in angle closure, because it always opens the angle by pulling the iris away from it.',
                    'Refer to ED with no treatment, since optometrists can’t use drops in an emergency under the OBA guideline. Pilocarpine is contraindicated because it raises blood pressure in older patients.',
                    'Start atropine 1% to dilate the pupil and pull the iris out of the angle, then timolol. Pilocarpine is contraindicated because it causes a migraine-like headache that hides the symptoms.'
                ],
                answer: 0,
                explain: 'Pilocarpine contraindications more generally: uveitis, neovascular glaucoma, high myopia or retinal detachment risk, and aqueous misdirection.',
                recall: 'The candidate forgot prednisolone acetate, then described the mechanism of the attack itself when asked why pilocarpine might be contraindicated. Elizabeth wanted: ischaemic sphincter at high IOP, and forward lens movement making some closures worse.'
            },
            {
                phase: '3. Laser and demographics',
                type: 'mcq',
                question: '“Why refer, what will they do? Who gets AAC?”',
                options: [
                    'LPI in both eyes within 24–48 h (or lens extraction), as the fellow eye is at high risk. At risk: older, female, East Asian, hyperopic, short eye, thick lens, family history.',
                    'SLT in the affected eye only, since the fellow eye is protected once the first eye has had an attack. At risk: young myopic men who play contact sport or lift weights.',
                    'Trabeculectomy in both eyes straight away, as laser doesn’t work after an attack. At risk: anyone with diabetes or high blood pressure, whatever their refraction or ethnicity.',
                    'No laser is needed once the IOP has come down with drops. At risk: contact lens wearers and people with dry eye, as the lens and the dry surface narrow the angle.'
                ],
                answer: 0,
                explain: 'Shallow AC and short axial length are the anatomical risk factors behind the demographics.'
            },
            {
                phase: '4. Months later',
                type: 'mcq',
                question: 'She returns months later. OCT shows superior RNFL loss greater than inferior. “What field defect do you expect, and how do you manage her?”',
                options: [
                    'An inferior arcuate or altitudinal defect (superior RNFL serves the inferior field); if IOP stays up or damage progresses after the LPI, treat as glaucoma, e.g. latanoprost nocte, with co-management.',
                    'A superior arcuate defect, since the superior RNFL serves the superior field; no treatment is needed, because the attack is over and the laser iridotomy has cured the glaucoma in that eye for good.',
                    'A dense central scotoma, since RNFL loss after angle closure always hits the macula first; start pilocarpine 4% QID for life to keep the angle open and stop any further loss.',
                    'A homonymous hemianopia, since a severe attack damages the optic tract behind the eye; refer for an urgent MRI of the brain before starting any treatment for the pressure.'
                ],
                answer: 0,
                explain: 'After an attack, damage can be sudden and diffuse rather than slowly progressive; PAS may need chronic drops.'
            }
        ]
    },
    {
        id: 'r2024-chronic-uveitis-steroid',
        category: 'uveitis',
        title: 'Pigment-Like Spots on the Cornea, then a New Field Defect',
        theme: 'Granulomatous Uveitis and Steroid-Induced Glaucoma',
        years: ['2024'],
        patient: 'Adult, first episode (Tuesday late morning, Fiona and Rebecca).',
        stem: 'Photo of the cornea with greasy, pigment-looking spots on the endothelium.',
        steps: [
            {
                phase: '1. What are they?',
                type: 'mcq',
                question: '“What do you see?” (“It’s not corneal infiltrates, so what else could it be?”)',
                options: [
                    'Keratic precipitates: large greasy (mutton-fat) or pigmented KPs on the inferior endothelium: granulomatous or chronic uveitis.',
                    'Infiltrates in the anterior stroma from a bacterial keratitis, which need a fluoroquinolone loading dose and a review the next day.',
                    'Guttata from Fuchs’ endothelial dystrophy, which look like beaten metal on the endothelium and need no treatment at this stage.',
                    'A Krukenberg spindle from pigment dispersion: a vertical band of pigment on the central endothelium in a young myopic man.'
                ],
                answer: 0,
                explain: 'KPs often sit inferiorly in Arlt’s triangle because of convection currents. Granulomatous causes include sarcoid, TB, syphilis, VKH and herpes.',
                recall: 'The candidate offered Fuchs’ dystrophy and then “took it back”. Guttata are on the endothelium too, but look like beaten metal, not separate deposits.'
            },
            {
                phase: '2. Low IOP',
                type: 'mcq',
                question: 'IOP 13 and 14 mmHg. “What could be the reason for this?”',
                options: [
                    'An inflamed ciliary body makes less aqueous, which can hide meshwork damage; IOP may rise as the inflammation settles or on steroid.',
                    'A low IOP rules out uveitis altogether, so the spots on the cornea must be something else, such as pigment from an old injury.',
                    'The patient must have a thin cornea, so the true IOP is much higher than the reading and should be corrected with a calculator.',
                    'Steroid drops must already have been used by the patient, since steroids always lower IOP in an eye with active inflammation.'
                ],
                answer: 0,
                explain: 'Check IOP at every review during treatment.'
            },
            {
                phase: '3. Systemic questions',
                type: 'viva',
                question: '“What questions would you ask about systemic associations?” (The candidate used “the 7 Bs” and forgot two.)',
                points: [
                    'Back and joints (spondyloarthropathy, arthritis)',
                    'Breathing: cough, breathlessness, night sweats (sarcoid, TB)',
                    'Bowel (IBD) and bladder or genital symptoms (reactive arthritis, STIs, syphilis)',
                    'Skin: rashes, psoriasis, erythema nodosum; mouth or genital ulcers (Behçet’s)',
                    'Brain and ears: headache, hearing loss, tinnitus, neck stiffness (VKH)',
                    'Blood and body: fever, weight loss, immune suppression, travel'
                ],
                explain: 'A granulomatous picture needs a systemic work-up via the GP or ophthalmology even on the first episode.'
            },
            {
                phase: '4. Treatment',
                type: 'mcq',
                question: 'Grade 3 cells. “What is your management?”',
                options: [
                    'Prednisolone acetate 1% hourly while awake and a cycloplegic; review in 24–48 h, taper as cells fall; systemic work-up and ophthalmology for granulomatous KPs.',
                    'FML 0.1% BD for a week, then stop; no review is needed, since granulomatous uveitis settles by itself and the steroid only speeds the recovery up a little.',
                    'Oral antibiotics via the GP for presumed TB; no topical steroid until TB has been ruled out by a chest X-ray, since steroid would spread the infection.',
                    'Latanoprost nocte to stop the IOP rising later; steroids are avoided in granulomatous uveitis because they make the KPs larger and more numerous.'
                ],
                answer: 0,
                explain: 'In suspected syphilis or TB, the cause needs treating as well; steroid alone can let it progress.'
            },
            {
                phase: '5. The new field',
                type: 'mcq',
                question: 'On the steroid, they return with a nasal step in one eye and an early superior arcuate in the other. “If this is glaucoma, what type and what severity?”',
                options: [
                    'Steroid-induced glaucoma (possibly with a uveitic part): early glaucoma, since there is a repeatable field defect with MD better than −6 dB.',
                    'Pre-perimetric glaucoma, since an MD better than −2 dB always counts as pre-perimetric, even when a repeatable field defect is present.',
                    'Angle closure caused by the cycloplegic; graded severe, since any field defect that appears during uveitis is graded as severe glaucoma.',
                    'Not glaucoma at all: field defects in uveitis come from cells in the vitreous, and they clear completely once the inflammation is treated.'
                ],
                answer: 0,
                explain: 'Manage by switching to a lower-risk steroid (e.g. loteprednol, FML) or reducing it as the inflammation allows, adding an aqueous suppressant, and avoiding PGAs while inflamed.',
                recall: 'The candidate first called it pre-perimetric “by the Mills criteria”. Pre-perimetric means structural loss without a field defect; with a field defect it is at least early glaucoma.'
            }
        ]
    },
    {
        id: 'r2024-naion',
        category: 'neuro',
        title: 'Diabetic Man Walking into Things',
        theme: 'Previous NAION',
        years: ['2024'],
        patient: '50-year-old man with diabetes, first eye exam (Wednesday morning, Wilson and Kathleen).',
        stem: 'He notices he walks into things, but hasn’t noticed his vision being abnormal.',
        steps: [
            {
                phase: '1. Findings',
                type: 'reveal',
                text: 'VA 6/6 R and L. Anterior eye normal. Pupils reported as normal (PERRLA). IOP 14 / 14. Confrontation: right inferior field restricted. Right disc: superior pallor, no cupping. Red-cap desaturation right. 30-2: right inferior altitudinal defect. OCT: superior RNFL thinning.'
            },
            {
                phase: '2. Differentials',
                type: 'mcq',
                question: '“Differentials and most likely diagnosis?”',
                options: [
                    'Previous NAION (vascular risk, altitudinal loss, sectoral pallor without cupping); also past AAION, optic neuritis, papilloedema or a compressive lesion. Glaucoma cups without pallor.',
                    'Primary open-angle glaucoma, since an inferior field defect with a normal IOP is typical of early glaucoma in diabetics; start a PGA and review the field in 3 months to confirm progression.',
                    'Diabetic macular oedema, which typically causes an altitudinal field defect with normal VA in diabetics; refer to the retina service for anti-VEGF injections.',
                    'Bilateral occipital stroke, since altitudinal defects are always cortical in origin; refer to ED immediately, as he may have a second stroke at any time.'
                ],
                answer: 0,
                explain: 'Pallor out of proportion to cupping points away from glaucoma. NAION is usually painless, noticed on waking, in a “disc at risk” (small, crowded disc).',
                recall: 'The candidate warned: don’t be tricked into calling it glaucoma, and don’t forget the medical history (diabetes).'
            },
            {
                phase: '3. AAION vs NAION',
                type: 'multi',
                critical: true,
                question: '“How would you tell an arteritic event from a non-arteritic one?” Select the features of giant cell arteritis.',
                options: [
                    'Age usually over 70',
                    'Jaw claudication, scalp tenderness, new headache',
                    'Malaise, weight loss, fever, polymyalgia (shoulder and hip girdle pain)',
                    'Chalky-white disc swelling; may have cilioretinal artery occlusion',
                    'Raised ESR and CRP, high platelets',
                    'Small crowded disc in the fellow eye'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'A small crowded fellow disc is typical of NAION. Suspected GCA is an emergency: same-day ED or GP for bloods and high-dose steroids, to protect the other eye.'
            },
            {
                phase: '4. Management',
                type: 'mcq',
                question: '“What would you do? Can anything be done for this?”',
                options: [
                    'Nothing restores the vision. Refer to ophthalmology (non-urgent for an old event) and the GP for vascular risks: glucose, BP, lipids, sleep apnoea; the fellow eye risk is about 15% in 5 years.',
                    'Start oral steroids through the GP for 3 months, since steroids restore the lost vision in NAION if they are started within a year of the event, whatever caused it in the first place.',
                    'Start a PGA to lower his IOP, since lowering the pressure reverses NAION damage and improves the field, even when the IOP is already within the normal range.',
                    'Refer for optic nerve sheath decompression surgery, which improves vision in most patients with NAION when it is done within a few months of the event, and protects the fellow eye.'
                ],
                answer: 0,
                explain: 'The IONDT showed optic nerve sheath decompression was not helpful and possibly harmful.'
            }
        ]
    },
    {
        id: 'r2024-mk-dual',
        category: 'cornea',
        title: 'Slept in His Lenses: Central Ulcer',
        theme: 'Severe Bacterial Keratitis and Steroids',
        years: ['2024'],
        patient: '30-year-old man, contact lens wearer; slept in his lenses last night and they are still in (Wednesday morning, Wilson and Kathleen).',
        stem: 'Painful red right eye, vision affected.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: '“What are your differentials?” (Ask the questions you need first.)',
                options: [
                    'Microbial keratitis',
                    'CLPU',
                    'CLARE (contact lens acute red eye)',
                    'Acanthamoeba keratitis',
                    'Corneal abrasion from the lens',
                    'Acute angle closure'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Ask about the lesion’s size, depth and location before treating; the candidate stressed this.'
            },
            {
                phase: '2. Findings',
                type: 'reveal',
                text: '“Let’s just say it’s MK.” A central, 2 mm epithelial defect over a dense infiltrate, AC reaction present.'
            },
            {
                phase: '3. Management',
                type: 'mcq',
                critical: true,
                question: 'Central and 2 mm. What do you do?',
                options: [
                    'Remove and keep the lenses and case for culture; refer the same day for scrapes and fortified cefazolin and tobramycin hourly; start a fluoroquinolone loading dose if there is any delay.',
                    'Remove the lenses and throw them away; chloramphenicol 0.5% QID; review in a week, since central ulcers heal faster than peripheral ones because the cornea is thicker and better supplied there.',
                    'Leave the lenses in to protect the ulcer like a bandage; ciprofloxacin QID; review in 48 hours, and only remove the lenses if the ulcer is larger at the next visit.',
                    'Remove the lenses; prednisolone acetate 1% hourly to protect the visual axis from scarring; antibiotics only once a culture comes back positive for bacteria.'
                ],
                answer: 0,
                explain: 'Central location threatens vision, which makes this severe even at 2 mm.'
            },
            {
                phase: '4. Tobramycin',
                type: 'mcq',
                question: '“What is the mechanism of tobramycin?”',
                options: [
                    'An aminoglycoside: binds the 30S ribosomal subunit, causing misreading and stopping protein synthesis; bactericidal; strong against Gram-negatives including Pseudomonas.',
                    'A β-lactam: blocks cell wall (peptidoglycan) synthesis, so the bacteria lyse; bactericidal; mostly Gram-positive cover, so in hospital it is always paired with ciprofloxacin.',
                    'A fluoroquinolone: blocks DNA gyrase and topoisomerase IV; bactericidal; mostly Gram-positive cover, so it is weak against Pseudomonas and lens-related ulcers.',
                    'A macrolide: binds the 50S ribosomal subunit; bacteriostatic; mainly used for chlamydia and atypical organisms, so it has little role in bacterial keratitis.'
                ],
                answer: 0,
                explain: 'Aminoglycosides are toxic to the epithelium in high doses (punctate keratopathy, delayed healing).'
            },
            {
                phase: '5. Steroid for scarring',
                type: 'mcq',
                question: '“What about any scarring? What do you need before giving a steroid?”',
                options: [
                    'Once infection is controlled (24–48 h of antibiotic, improving, not fungal or Acanthamoeba), a steroid may limit scarring; SCUT: no overall benefit, possible gain in severe central ulcers.',
                    'A steroid can be started on day one together with the antibiotic, since SCUT showed that early steroids prevent all scarring, whatever the organism and however deep the ulcer turns out to be.',
                    'Steroids are never used in bacterial keratitis under any circumstances, since SCUT showed that they always lead to corneal melting and perforation, even once the infection is under control.',
                    'A steroid is only used if the epithelium hasn’t healed after 3 months; the antibiotics should be stopped first so they don’t interfere with the steroid.'
                ],
                answer: 0,
                explain: 'In SCUT, Nocardia ulcers did worse with steroid. Steroids are usually started by the corneal team.',
                recall: 'The candidate said the epithelium had to close first. Steroids are usually started while the epithelium is still open, once the infection is controlled; waiting for closure isn’t the rule.'
            },
            {
                phase: '6. Steroid response',
                type: 'mcq',
                question: '“What if there’s a steroid response?”',
                options: [
                    'Reduce or switch to a lower-risk steroid if the eye allows, and add an aqueous suppressant such as timolol 0.5% BD (no asthma or heart block); avoid PGAs while inflamed.',
                    'Add latanoprost, which works best in inflamed eyes, and keep the steroid going at its full dose, since stopping or reducing it would let the infection flare up again.',
                    'Stop all drops, including the antibiotic, since IOP rises during treatment are caused by the preservative in the drops rather than by the steroid itself.',
                    'Ignore it, since a steroid-induced IOP rise never causes optic nerve damage within the course of treatment and always settles once the steroid is stopped.'
                ],
                answer: 0,
                explain: 'Kathleen nodded when the candidate remembered to check IOP for a steroid response.'
            }
        ]
    },
    {
        id: 'r2024-pss-pregnancy',
        category: 'glaucoma',
        title: 'Young Woman with IOP in the 40s',
        theme: 'Posner–Schlossman and Pregnancy',
        years: ['2024'],
        patient: '34-year-old woman. Grandmother has POAG (Wednesday afternoon, Wilson).',
        stem: 'High IOP found at a routine visit.',
        steps: [
            {
                phase: '1. Findings',
                type: 'reveal',
                text: 'IOP about 35 mmHg, rising to the 40s on a repeat 20 minutes later; the spike is in one eye. History otherwise unremarkable. A few fine KPs and 2 cells. VA normal. Angle open on gonioscopy. Field normal.'
            },
            {
                phase: '2. Differentials',
                type: 'multi',
                question: '“What are your differentials?”',
                options: [
                    'Posner–Schlossman syndrome (glaucomatocyclitic crisis)',
                    'Herpetic (HSV, VZV) or CMV anterior uveitis with trabeculitis',
                    'Steroid response',
                    'Fuchs’ uveitis syndrome',
                    'Acute angle closure',
                    'Primary open-angle glaucoma'
                ],
                answers: [0, 1, 2, 3, 5],
                explain: 'Angle closure is ruled out by the open angle. PSS: recurrent unilateral spikes (often 40–60) with few fine KPs, minimal cells and mild symptoms; linked to CMV.'
            },
            {
                phase: '3. The red flag',
                type: 'mcq',
                critical: true,
                question: 'Before treating a 34-year-old woman, what must you ask?',
                options: [
                    'Whether she is pregnant, could be, or is breastfeeding: it changes which drops are safe.',
                    'Whether she has a family history of glaucoma, as that decides if a steroid can be used.',
                    'Whether she wears contact lenses, as every glaucoma drop is contraindicated with lenses.',
                    'Whether she smokes, since smokers can’t use β-blockers because of the lung damage.'
                ],
                answer: 0,
                explain: 'The candidate didn’t ask and called it a red flag in their notes: ask every woman of childbearing age.'
            },
            {
                phase: '4. If not pregnant',
                type: 'mcq',
                question: '“If it’s Posner–Schlossman and she isn’t pregnant, what is your treatment and review?”',
                options: [
                    'A topical steroid (e.g. prednisolone acetate 1% QID, tapered) plus aqueous suppressants (timolol, brimonidine or a CAI); avoid PGAs and pilocarpine; check IOP for a steroid response.',
                    'Latanoprost nocte on its own; no steroid, since Posner–Schlossman isn’t an inflammatory condition and a steroid would only raise the pressure further; review her again in 3 months.',
                    'Pilocarpine 2% QID to open the angle and pull the iris away, plus oral acetazolamide 250 mg QID prescribed by you; review in a week once the pressure has settled.',
                    'No treatment at all, since the attack always settles by itself within a day, and treating it only adds side effects without changing the long-term outcome for the nerve.'
                ],
                answer: 0,
                explain: 'Episodes usually last days to weeks. Repeated attacks can cause glaucomatous damage, so monitor the disc and field.',
                recall: 'The candidate suggested a PGA and Wilson didn’t object, but PGAs are best avoided in PSS because they can worsen the inflammation.'
            },
            {
                phase: '5. If pregnant',
                type: 'mcq',
                critical: true,
                question: '“And if she is pregnant or breastfeeding?”',
                options: [
                    'Involve the obstetrician, GP and ophthalmologist; fewest drops, with punctal occlusion. Brimonidine is stopped before birth, watch infant heart rate with timolol, avoid PGAs; SLT is attractive.',
                    'Use latanoprost, since it is TGA category A and the safest glaucoma drop in pregnancy; brimonidine is ideal near birth and during breastfeeding, as it doesn’t pass to the baby in milk.',
                    'Stop all treatment until after delivery, since no glaucoma drop can be used in pregnancy, and a high IOP can’t damage the optic nerve within a few months anyway.',
                    'Use oral acetazolamide as first line, since systemic drugs are safer than topical drops in pregnancy, and switch to drops only once she has finished breastfeeding.'
                ],
                answer: 0,
                explain: 'TGA categories: timolol C; latanoprost, brimonidine, dorzolamide, brinzolamide and acetazolamide B3. IOP tends to fall in pregnancy.',
                recall: 'The candidate’s notes said “T1 and T2 BB/AA, T3 CAI”. The underlying points are right (avoid PGAs, stop brimonidine before birth, consider SLT), but there is no fixed trimester rule: decide with the obstetrician.'
            }
        ]
    },
    {
        id: 'r2024-optic-neuritis',
        category: 'neuro',
        title: 'Young Woman with Headache and an RAPD',
        theme: 'Optic Neuritis (Retrobulbar)',
        years: ['2024'],
        patient: '34-year-old woman (Wednesday afternoon, Daisy).',
        stem: 'Recent left-sided headache and reduced vision in the left eye, never experienced before. The GP did blood tests (pending) and sent her to you.',
        steps: [
            {
                phase: '1. Findings',
                type: 'reveal',
                text: 'VA R 6/6, L 6/20. Left RAPD. Anterior eye and gonio normal. Left disc looks normal to slightly suspicious. Not overweight, no weight change. Colour desaturation on the left. Pain on eye movement.'
            },
            {
                phase: '2. Diagnosis',
                type: 'mcq',
                question: 'What is the most likely diagnosis, and why does the disc look normal?',
                options: [
                    'Retrobulbar optic neuritis: the inflammation is behind the globe, so the disc looks normal at first, while VA, colour and the RAPD show the nerve is affected.',
                    'Papilloedema: raised intracranial pressure with a normal-looking disc in the early stage; the one-sided RAPD confirms it and the headache fits.',
                    'NAION: the disc is always normal in the acute stage of NAION, and pain on eye movement is one of its typical early features in younger women.',
                    'Functional visual loss: a normal disc with reduced VA means there is no organic disease, and the RAPD must be an error in the swinging flashlight test.'
                ],
                answer: 0,
                explain: 'Papillitis (swollen disc, about a third) and neuroretinitis (disc swelling with a macular star, often infective, e.g. cat scratch) are the other forms. Papilloedema is bilateral, with normal VA and no RAPD early.',
                recall: 'Daisy kept hinting at “retrobulbar” and the candidate couldn’t find the word.'
            },
            {
                phase: '3. Work-up and referral',
                type: 'mcq',
                critical: true,
                question: 'What do you do next?',
                options: [
                    'Field (central or centrocaecal scotoma), colour vision, and urgent referral (ophthalmology, neurology or ED) for MRI of brain and orbits; watch for atypical red flags.',
                    'Start oral prednisolone 1 mg/kg through the GP straight away, since the ONTT showed that oral steroids alone improve the final vision and reduce later recurrences.',
                    'Reassure and review in 6 months, since optic neuritis always recovers fully on its own and doesn’t need any investigation or referral, even the first time.',
                    'Start a PGA in the left eye, since reduced vision with a normal-looking disc and a normal IOP is the typical picture of early normal-tension glaucoma.'
                ],
                answer: 0,
                explain: 'ONTT: IV methylprednisolone speeds recovery but doesn’t change final VA; oral prednisolone alone increased recurrence. MRI lesions predict MS risk.'
            },
            {
                phase: '4. Advice',
                type: 'mcq',
                question: '“What would you advise the patient about exercising?”',
                options: [
                    'Uhthoff’s phenomenon: heat (exercise, hot showers, fever) can briefly worsen vision because demyelinated fibres conduct poorly; it recovers on cooling.',
                    'Exercise permanently damages the optic nerve during optic neuritis, so she should stop all exercise for the rest of her life to protect the other eye.',
                    'Exercise improves vision in optic neuritis by raising blood pressure to the optic nerve, so she should exercise as hard as she can during recovery.',
                    'Exercise has no effect at all on optic neuritis or on her vision during recovery, so there is no need to give any advice about exercise or heat.'
                ],
                answer: 0,
                explain: 'The candidate ran out of time here and added the answer to their notes afterwards.'
            }
        ]
    },
    {
        id: 'r2024-ra-prednisone',
        category: 'retina',
        title: 'Rheumatoid Arthritis on Oral Prednisone, Blurred Vision',
        theme: 'Steroid Effects: CSCR and Glaucoma',
        years: ['2024'],
        patient: '65-year-old woman with rheumatoid arthritis, taking oral prednisone (Thursday afternoon, Wilson).',
        stem: 'Blurred vision.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: '“What are your differentials?” Select those linked to her history.',
                options: [
                    'Posterior subcapsular cataract (steroids)',
                    'Steroid-induced raised IOP or glaucoma',
                    'Central serous chorioretinopathy (steroids)',
                    'Dry eye or peripheral ulcerative keratitis, scleritis (RA)',
                    'Hydroxychloroquine maculopathy, if she has taken it for RA',
                    'Acute angle closure from the prednisone'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Steroids don’t cause angle closure. Many RA patients are also on hydroxychloroquine or methotrexate.'
            },
            {
                phase: '2. CSCR',
                type: 'mcq',
                question: '“What pachychoroid condition can cause macular fluid? Risk factors? Management?”',
                options: [
                    'CSCR: risk factors are steroids by any route, stress or type A personality, male sex, hypertension, sleep apnoea, pregnancy. Refer to ophthalmology; most acute cases settle.',
                    'Wet AMD: risk factors are steroid use and a young age. Start an anti-VEGF injection programme yourself and tell her to stop the prednisone immediately so the fluid can settle.',
                    'Diabetic macular oedema: risk factors are steroids and stress. Manage it by lowering the IOP with a PGA, which reduces the leakage into the macula.',
                    'Retinitis pigmentosa: risk factors are oral steroids and rheumatoid arthritis. No referral is needed, since it doesn’t progress once the steroid is reduced.'
                ],
                answer: 0,
                explain: 'Never tell a patient to stop oral steroids suddenly (adrenal crisis): changes go through the prescriber.'
            },
            {
                phase: '3. If glaucoma',
                type: 'mcq',
                question: '“Say she has glaucoma. How would you manage it? What can the GP use instead of steroids?”',
                options: [
                    'Ask the GP or rheumatologist about a steroid-sparing drug (e.g. methotrexate) to reduce the prednisone; start drops, e.g. a β-blocker if safe, or a PGA if no inflammatory eye disease.',
                    'Stop the prednisone yourself today, since it is the cause of the glaucoma, and start pilocarpine 4% QID, which is the safest glaucoma drop in patients who have rheumatoid arthritis.',
                    'Double the prednisone dose through the GP, since higher doses suppress the inflammation in the meshwork that is causing the raised pressure and the glaucoma.',
                    'Take no action, since oral steroids can’t raise IOP at all; only steroid eye drops do, so her glaucoma must be unrelated to the prednisone she is taking.'
                ],
                answer: 0,
                explain: 'Oral, inhaled, nasal and skin steroids can all raise IOP, though less than drops.',
                recall: 'The candidate didn’t know the steroid-sparing drug and guessed ciclosporin and NSAIDs; methotrexate (a DMARD) is the usual one.'
            },
            {
                phase: '4. β-blocker contraindications',
                type: 'mcq',
                question: '“Contraindications of β-blockers? If you can’t use one, what else?”',
                options: [
                    'Asthma or severe COPD, bradycardia, heart block, uncompensated heart failure; caution with diabetes, systemic β-blockers, myasthenia. Alternatives: brimonidine or a CAI.',
                    'Hypertension and a fast heart rate; caution with low blood pressure. The alternative is another β-blocker such as betaxolol, which has no restrictions at all in any patient.',
                    'Cataract and dry eye; caution in women over 60. The alternative is pilocarpine, which is safe in all patients whatever their other medical conditions.',
                    'Sulfonamide allergy only; no other condition matters. The alternative is oral acetazolamide, which optometrists can prescribe directly for chronic glaucoma.'
                ],
                answer: 0,
                explain: 'Betaxolol is β1-selective (safer in mild airway disease) but is still a β-blocker and weaker at lowering IOP.'
            }
        ]
    },
    {
        id: 'r2024-swollen-lid-akc',
        category: 'allergy',
        title: 'Case Report: Swollen Eyelid',
        theme: 'Preseptal Cellulitis vs Contact Dermatitis',
        years: ['2024'],
        patient: 'Case-report questions; the candidate’s patient had atopic keratoconjunctivitis (Thursday afternoon, Lily).',
        stem: '“Your patient has a swollen eyelid. What are your differentials?”',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'Select the differentials for a swollen eyelid.',
                options: [
                    'Preseptal cellulitis',
                    'Orbital cellulitis',
                    'Contact dermatitis',
                    'Insect bite',
                    'Allergic or viral conjunctivitis with lid oedema',
                    'Foreign body under the lid',
                    'Bacterial keratitis'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Also hordeolum, chalazion, dacryoadenitis and angio-oedema.'
            },
            {
                phase: '2. Orbital or preseptal',
                type: 'mcq',
                critical: true,
                question: '“How do you tell orbital from preseptal cellulitis, and manage each?”',
                options: [
                    'Orbital: reduced VA, proptosis, painful or restricted movements, RAPD, often fever: ED for IV antibiotics. Preseptal: normal eye, same-day GP for amoxicillin–clavulanate.',
                    'Orbital: lid swelling only, with no change in VA, managed with topical antibiotics at home. Preseptal: proptosis and an RAPD, managed in hospital with IV antibiotics.',
                    'Both are managed with warm compresses alone and a review in a week, since neither preseptal nor orbital cellulitis can spread beyond the eyelid tissues.',
                    'Both need ED for IV antibiotics and imaging, since there is no way to tell orbital from preseptal cellulitis apart in practice without a CT scan of the orbits.'
                ],
                answer: 0,
                explain: 'Lily wanted the reason for ED: risk of cavernous sinus thrombosis, meningitis or brain abscess.'
            },
            {
                phase: '3. Contact dermatitis',
                type: 'mcq',
                question: '“How is contact dermatitis different from preseptal cellulitis, and how do you manage it?”',
                options: [
                    'Allergic or irritant: itchy, dry, scaly skin, often both lids, no tenderness or fever. Avoid the cause; cold compresses, oral antihistamine, brief weak steroid ointment.',
                    'A bacterial infection: painful, hot and tender, usually one lid, with a fever. Oral amoxicillin–clavulanate via the GP, warm compresses, and a review in 24–48 hours.',
                    'A viral infection with vesicles in one dermatome on the forehead. Oral antivirals within 72 hours of the rash and a review for eye involvement.',
                    'A fungal infection of the lid skin. Treat with a topical antifungal cream for 6 weeks and avoid all steroids, since they make fungal infections spread.'
                ],
                answer: 0,
                explain: 'Use steroid on eyelid skin sparingly and briefly (thin skin, IOP).'
            },
            {
                phase: '4. Steroids for allergy',
                type: 'mcq',
                question: '“Why do you use steroids for allergic eye disease?” (Her patient had AKC.)',
                options: [
                    'To suppress the late-phase, T-cell–driven inflammation that antihistamines and mast cell stabilisers don’t reach; short pulses with IOP checks, and ciclosporin or tacrolimus long term.',
                    'Because steroids are antihistamines that block H1 receptors faster than olopatadine does, so they can safely be used indefinitely in place of an antihistamine or mast cell drop.',
                    'Because steroids stop the allergen reaching the eye, so they are used in the weeks before the allergy season instead of a mast cell stabiliser.',
                    'Because atopic keratoconjunctivitis is a bacterial infection of the lid margin, and steroids kill the bacteria and settle the lid swelling.'
                ],
                answer: 0,
                explain: 'AKC is chronic and year-round, in adults with eczema; it can scar the conjunctiva and cornea and is associated with keratoconus and cataract.'
            }
        ]
    }
);
