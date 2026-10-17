// Cases from the "Practice therapeutics orals" slide deck (questions on one slide, model answers and
// speaker notes on the next). Doses are checked against Australian practice.
window.CASES.push(
    {
        id: 'po-corneal-fb',
        category: 'cornea',
        title: 'Something Flew into His Eye Working on the Car',
        theme: 'Corneal Foreign Body',
        years: ['Practice orals'],
        patient: '25-year-old man: photophobia, mild pain and watering after “something flew into his right eye” working on his car yesterday.',
        stem: 'A small dark corneal foreign body with a rust ring, temporal mid-periphery about 4 mm from the visual axis; conjunctival injection.',
        steps: [
            {
                phase: '1. Describe and history',
                type: 'viva',
                question: 'Describe what you see, and what else do you ask?',
                points: [
                    'Metallic corneal FB, about 0.5 mm, with a rust ring, temporal mid-periphery, clear of the visual axis; conjunctival injection; no iris defect',
                    'What was he doing (grinding, hammering metal on metal = high velocity, think penetration)',
                    'Eye protection worn? When did it happen? Has he rinsed or rubbed it?',
                    'Vision change, pain level, previous injuries, tetanus status'
                ],
                explain: 'A rust ring starts forming within hours (often quoted as 4–6 h) as iron oxidises into the surrounding stroma.'
            },
            {
                phase: '2. Tests',
                type: 'multi',
                question: 'Which tests do you do before removing it?',
                options: [
                    'Visual acuity (before anaesthetic)',
                    'Evert both lids to look for more FBs',
                    'Seidel test for a leak',
                    'Check for an iris hole, irregular pupil or lens opacity',
                    'Fluorescein to size the defect',
                    'Gonioscopy with indentation'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'If penetration is suspected, don’t indent or apply pressure: shield the eye and refer the same day for imaging (CT, not MRI, for metal) and a dilated exam.'
            },
            {
                phase: '3. Management',
                type: 'viva',
                question: 'What is your management, provided it isn’t penetrating?',
                points: [
                    'Consent; topical anaesthetic (proxymetacaine or oxybuprocaine)',
                    'Remove at the slit lamp: saline irrigation, cotton bud, then 25G needle or spud; burr (Alger brush) for the rust ring',
                    'Fluorescein to measure the defect and check its depth',
                    'Prophylactic chloramphenicol 0.5% QID until healed (plus a few days)',
                    'Cycloplegic for photophobia if needed (homatropine 2%), oral analgesia, lubricants',
                    'No patching (no benefit for small abrasions, Cochrane); BCL only in selected cases with close review',
                    'Review at 24 h, then until re-epithelialised; safety glasses'
                ],
                explain: 'If rust remains, review within 24 h; it often softens and lifts more easily the next day.',
                recall: 'The deck suggests in-office tropicamide for photophobia. Tropicamide is a short-acting mydriatic with weak cycloplegia; homatropine 2% or cyclopentolate 1% gives more lasting relief.'
            },
            {
                phase: '4. Prognosis and referral',
                type: 'mcq',
                question: 'What is the prognosis, and when do you refer?',
                options: [
                    'Good, since it is off-axis; heals in days (longer in diabetes). Refer if penetration is suspected, the defect lasts over 3 days or it becomes infected.',
                    'Poor, since metal causes permanent scarring; heals over months. Refer all metallic foreign bodies the same day, as optometrists shouldn’t remove rust rings themselves.',
                    'Good, since it is off-axis; heals in days. Refer only if the vision drops below 6/12, as an infection or a retained fragment will always reduce the visual acuity first.',
                    'Fair, since rust stains the cornea for life; heals in 2–3 weeks. Refer if pain persists after 24 hours, as pain is the only reliable sign that a fragment has penetrated.'
                ],
                answer: 0,
                explain: 'A deeper FB that reaches the stroma can scar. If a stromal scar forms, steroids are an ophthalmology decision once the epithelium has healed and infection is excluded.'
            }
        ]
    },
    {
        id: 'po-aau-steroid-response',
        category: 'uveitis',
        title: 'First Episode of AAU with 25–30 Cells',
        theme: 'Acute Anterior Uveitis',
        years: ['Practice orals'],
        patient: '22-year-old man: 1 day of a red, painful left eye with blurred vision and photophobia. No previous episodes.',
        stem: 'Conjunctival injection with 360° circumcorneal flush (worse superiorly) and an irregular pupil.',
        steps: [
            {
                phase: '1. Describe and differentials',
                type: 'multi',
                question: 'The irregular pupil suggests posterior synechiae. Which differentials do you consider?',
                options: [
                    'Acute anterior uveitis (HLA-B27)',
                    'Posner–Schlossman syndrome or Fuchs’ uveitis',
                    'Traumatic iritis',
                    'Infectious keratouveitis (HSV, VZV) or endophthalmitis',
                    'Drug-induced uveitis (rifabutin, cidofovir, bisphosphonates)',
                    'Acute angle closure',
                    'Seasonal allergic conjunctivitis'
                ],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Check the AC (cells and flare), fluorescein, IOP and dilate to exclude posterior involvement.'
            },
            {
                phase: '2. Grade and treat',
                type: 'mcq',
                question: 'You count 25–30 cells in a 1 × 1 mm beam. What grade is this, and what do you prescribe?',
                options: [
                    'SUN grade 2+ to 3+ (16–25 is 2+, 26–50 is 3+): prednisolone acetate 1% every 15 min for an hour, then 2-hourly, plus homatropine 2% or atropine 1%.',
                    'SUN grade 1+ (6–15 cells): prednisolone acetate 1% QID plus cyclopentolate 1% TDS, reviewing in a week to see whether the cell count has fallen.',
                    'SUN grade 4+ (over 50 cells): refer straight to hospital for oral prednisolone and a sub-Tenon’s injection, without starting any topical treatment.',
                    'SUN grade 2+ to 3+: fluorometholone 0.1% QID plus tropicamide 1% TDS, since a potent steroid would risk an IOP spike in a young myopic man.'
                ],
                answer: 0,
                explain: 'Prednisolone acetate is a suspension that penetrates an intact epithelium best; shake it. The cycloplegic eases pain, breaks or prevents synechiae and stabilises the blood–aqueous barrier. Cyclopentolate is said to be chemotactic for leukocytes, so it is usually avoided.'
            },
            {
                phase: '3. Steroid-induced IOP rise',
                type: 'viva',
                question: 'What are the side effects of treatment? Explain the mechanisms of steroid-induced IOP rise, the classification and who is most at risk.',
                points: [
                    'Side effects: IOP rise, posterior subcapsular cataract, infection risk, delayed healing',
                    'Mechanisms: cytoskeletal change in TM cells (cross-linked actin networks), extracellular matrix deposition (myocilin, glycosaminoglycans, fibronectin), reduced TM phagocytosis and protease activity',
                    'Armaly/Becker classes after weeks of topical steroid: under 6 mmHg rise (about 65%), 6–15 mmHg (about 30%), over 15 mmHg (about 5%)',
                    'High risk: POAG and first-degree relatives, high myopia, children under 10, type 1 diabetes, connective tissue disease, PDS',
                    'Treat a response with aqueous suppressants (timolol first); avoid PGAs in active uveitis'
                ],
                explain: 'In early AAU the IOP is often lower than the fellow eye (ciliary body shutdown); a rise suggests trabeculitis, debris, synechiae or a steroid response.'
            },
            {
                phase: '4. Review, taper and tests',
                type: 'viva',
                question: 'How do you review and taper, and when would you order blood tests or refer?',
                points: [
                    'Review at 24–48 h, then every few days until a 2-step improvement (SUN), then begin tapering',
                    'Taper over about 6 weeks to prevent rebound (e.g. q1–2h → QID → TDS → BD → daily)',
                    'First, unilateral, typical non-granulomatous AAU: tests not routinely needed, but HLA-B27 if back pain is present',
                    'Recurrent, bilateral or granulomatous: CBC, ESR/CRP, HLA-B27, syphilis serology, ACE and chest X-ray, TB test (via GP)',
                    'Refer: hypopyon, bilateral, intermediate/posterior/panuveitis, recent surgery or bleb, severe or atypical, no response'
                ],
                explain: 'The notes also quote a review of systems: back pain, urinary, respiratory, gut, skin.'
            }
        ]
    },
    {
        id: 'po-hsv-pregnancy',
        category: 'cornea',
        title: 'Contact Lens Wearer, Second Trimester, Dendritic Ulcer',
        theme: 'HSV Epithelial Keratitis',
        years: ['Practice orals'],
        patient: '36-year-old woman: 1 day of left eye pain, photophobia and reduced vision (6/12 with pinhole). Contact lens wearer.',
        stem: 'Conjunctival injection, serous discharge, follicular reaction.',
        steps: [
            {
                phase: '1. Differentials and tests',
                type: 'viva',
                question: 'What are your differentials at this stage, and what tests do you do?',
                points: [
                    'HSV keratitis; adenovirus; VZV; EBV; CMV',
                    'Acanthamoeba (contact lens wearer), bacterial and fungal keratitis',
                    'Follicular conjunctivitis without keratitis',
                    'Tests: fluorescein (and rose bengal or lissamine green), corneal sensation (reduced in HSV), IOP, pre-auricular nodes, lid vesicles'
                ],
                explain: 'Adenovirus forms pseudomembranes; HSV rarely does.'
            },
            {
                phase: '2. Treatment',
                type: 'mcq',
                question: 'Fluorescein shows a dendrite with terminal bulbs. What is your management?',
                options: [
                    'Aciclovir 3% ointment 5×/day until healed, cold compresses, lubricants, no lens wear, infection control; no steroid; review at 24 h.',
                    'Aciclovir 3% ointment 5×/day with FML 0.1% QID to reduce scarring; continue lens wear with daily disposables; review at 1 week.',
                    'Chloramphenicol 0.5% QID and lubricants, as HSV epithelial keratitis is self-limiting; resume lenses in 3 days; review at 1 week.',
                    'Prednisolone 1% QID and oral aciclovir 400 mg BD, as stromal involvement is likely in a lens wearer; resume lenses once it has healed.'
                ],
                answer: 0,
                critical: true,
                explain: 'Steroids can turn a dendrite into a geographic ulcer. Most epithelial HSV resolves within 3 weeks even untreated, but antivirals shorten it and reduce stromal spread.'
            },
            {
                phase: '3. Pregnancy',
                type: 'mcq',
                question: 'She is in her second trimester. Does that change your plan?',
                options: [
                    'No. Aciclovir is TGA category B3, but topical use gives negligible systemic levels and untreated HSV risks the cornea; explain and document.',
                    'Yes. Aciclovir is TGA category D, so switch to lubricants and cool compresses alone until she delivers, then start an antiviral if still needed.',
                    'Yes. Aciclovir is TGA category X in pregnancy, so refer to the obstetrician before giving any treatment, even topical, for a corneal infection.',
                    'No. Aciclovir is TGA category A, so there are no pregnancy concerns, and you could also add oral valaciclovir to clear the infection faster.'
                ],
                answer: 0,
                explain: 'B3: limited human data; animal studies showed some effects of uncertain relevance. Use the lowest effective treatment and involve the obstetrician or GP if oral therapy is considered. Aciclovir passes into breast milk in small amounts and is considered compatible with breastfeeding.',
                recall: 'The deck’s notes say limited human data show aciclovir “does NOT pass into breast milk”. It does, in low amounts; it is still considered safe with breastfeeding.'
            },
            {
                phase: '4. Sequelae',
                type: 'viva',
                question: 'What can happen if it is left untreated, or treated with a steroid?',
                points: [
                    'Geographic ulcer (especially with steroid)',
                    'Stromal keratitis (about 10% within a year of epithelial disease) and endotheliitis',
                    'Scarring, neovascularisation, thinning and perforation',
                    'Neurotrophic keratopathy from reduced corneal sensation',
                    'Recurrence (stress, UV, fever, immunosuppression)'
                ],
                explain: 'Ocular HSV most often involves the epithelium (about 70%), then lids and conjunctiva, stroma and uvea.'
            }
        ]
    },
    {
        id: 'po-pxf-gonio',
        category: 'glaucoma',
        title: 'Sister Just Diagnosed with Glaucoma: Flakes and a Sampaolesi Line',
        theme: 'Pseudoexfoliation',
        years: ['Practice orals'],
        patient: '76-year-old woman, routine exam because her sister was recently diagnosed with glaucoma.',
        stem: 'Anterior eye photo of the left eye: white material on the lens in a central disc, clear zone and granular periphery. Second image: gonioscopy of the inferior angle.',
        steps: [
            {
                phase: '1. Describe both images',
                type: 'viva',
                question: 'Describe the photo and the gonioscopy image.',
                points: [
                    'PXF material on the anterior lens: central disc, clear intermediate zone, peripheral granular zone',
                    'No obvious peripupillary transillumination in this view (look for flakes on the pupil margin)',
                    'Gonioscopy of the inferior angle: open to ciliary body band',
                    'Sampaolesi line: wavy pigment anterior to Schwalbe’s line; patchy TM pigment'
                ],
                explain: 'Name the structures you can see in the angle in order: iris root, CBB, scleral spur, TM, Schwalbe’s line.'
            },
            {
                phase: '2. Pathophysiology and signs',
                type: 'viva',
                question: 'What is the pathophysiology, and what other signs would you expect?',
                points: [
                    'Abnormal fibrillar extracellular material (elastic microfibril disorder), strongly linked to LOXL1 gene variants',
                    'Material and pigment clog the TM, reducing outflow and raising IOP',
                    'Systemic deposits too (skin, vessels, heart)',
                    'Other signs: endothelial flakes and guttata, peripupillary atrophy, poor dilation, phacodonesis, frosted zonules'
                ],
                explain: 'LOXL1 variants are common in the general population too, so they confer risk rather than causing PXF alone.'
            },
            {
                phase: '3. Numbers',
                type: 'mcq',
                question: 'What is her risk of glaucoma, and how fast does untreated PXG progress?',
                options: [
                    'Risk roughly 5% at 5 years and 15% at 10 years, high over a lifetime; untreated PXG lost about −3.1 dB/year in EMGT, the fastest of any group.',
                    'Risk roughly 1% at 5 years and 2% at 10 years, similar to the general population; untreated PXG lost about −0.4 dB/year in EMGT, like NTG.',
                    'Risk roughly 50% at 5 years and 90% at 10 years, so everyone with PXF should be treated; untreated PXG lost about −1.3 dB/year in EMGT.',
                    'Risk roughly 10% at 5 years and 15% at 15 years, the same as PDS; untreated PXG lost about −0.2 dB/year in CNTGS, slower than POAG.'
                ],
                answer: 0,
                explain: 'EMGT untreated MD loss: PXF about −3.1, high-tension about −1.3, NTG about −0.4 dB/year. PXF was the strongest predictor of progression.'
            }
        ]
    },
    {
        id: 'po-arcuate-ntg',
        category: 'glaucoma',
        title: 'Superior Arcuates and an Inferior Notch',
        theme: 'NTG / Glaucoma Staging',
        years: ['Practice orals'],
        patient: 'Same 76-year-old woman, second part.',
        stem: 'Fields: left eye dense superior arcuate with a nasal step; right eye early superior arcuate. Left disc photo shown.',
        steps: [
            {
                phase: '1. Fields',
                type: 'multi',
                question: 'Neither field respects the vertical midline. Which differentials fit superior arcuate defects?',
                options: [
                    'Glaucoma',
                    'Optic disc drusen',
                    'Old inferior NAION or branch retinal artery occlusion',
                    'Optic neuritis',
                    'Bilateral tilted discs',
                    'Pituitary adenoma'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'A pituitary lesion respects the vertical midline. Tilted discs give superotemporal defects that don’t respect it and often improve with a myopic correction.'
            },
            {
                phase: '2. Disc',
                type: 'viva',
                question: 'Describe the left disc.',
                points: [
                    'Average size disc; C/D about 0.8 vertical, 0.6 horizontal',
                    'Inferior rim notch, thin temporal rim (fails ISNT)',
                    'Wide inferior RNFL wedge defect',
                    'Peripapillary atrophy; no disc haemorrhage at present',
                    'Inferior damage matches the superior field loss'
                ],
                explain: 'Always state disc size first; it changes how you read the cup.'
            },
            {
                phase: '3. Diagnosis and stage',
                type: 'match',
                question: 'Same patient, IOP never above the low teens. Match each eye to its stage (Mills/Hodapp MD).',
                pairs: [
                    { label: 'Left eye, MD −11.6 dB', answer: 'Moderate' },
                    { label: 'Right eye, MD −3.8 dB', answer: 'Early' }
                ],
                distractors: ['Advanced', 'End-stage'],
                explain: 'With repeatable structure–function agreement and normal IOP, this is normal-tension glaucoma (after excluding compressive and other causes). Hodapp: early better than −6 dB; moderate −6 to −12 dB; severe worse than −12 dB.'
            }
        ]
    },
    {
        id: 'po-hsv-disciform',
        category: 'cornea',
        title: 'Painless Red Eye with a Disc of Stromal Haze',
        theme: 'HSV Stromal / Disciform Keratitis',
        years: ['Practice orals'],
        patient: '30-year-old woman with a painless red right eye and gradually blurring vision over a week. VA R 6/15, L 6/6. No previous episodes. Round, blister-like lesions along her eyelid.',
        stem: 'Central disc of stromal oedema with Descemet’s folds and KPs beneath it; conjunctival injection. Pupil pharmacologically dilated in the photo.',
        steps: [
            {
                phase: '1. Tests and differentials',
                type: 'viva',
                question: 'What tests would confirm your diagnosis, why is it painless, and what are your differentials?',
                points: [
                    'Corneal sensation (reduced, which explains the lack of pain)',
                    'Fluorescein for epithelial involvement; pre-auricular nodes; IOP (trabeculitis)',
                    'Dilated fundus exam to exclude retinitis (e.g. acute retinal necrosis, PORN in immunosuppression)',
                    'Differentials: HSV stromal/endothelial keratitis, anterior uveitis, VZV keratitis, Acanthamoeba, fungal keratitis'
                ],
                explain: 'The lid vesicles point to HSV. Stromal disease can be the first presentation even without previous epithelial episodes.'
            },
            {
                phase: '2. Management',
                type: 'mcq',
                question: 'It is HSV disciform (endothelial) keratitis. What is your management?',
                options: [
                    'Prednisolone acetate 1% QID with antiviral cover (topical or oral aciclovir), review closely, then taper the steroid over at least 4 weeks.',
                    'Topical aciclovir 3% 5×/day alone, since steroids are contraindicated in every form of HSV keratitis; review in 1 week to see if the haze is clearing.',
                    'Prednisolone acetate 1% hourly alone, since there is no epithelial ulcer and so no live virus; stop it abruptly once the haze has cleared at 1 week.',
                    'Chloramphenicol 0.5% QID and atropine 1% BD for the inflammation, with oral aciclovir 800 mg 5×/day for 7 days as for herpes zoster.'
                ],
                answer: 0,
                critical: true,
                explain: 'HEDS showed topical steroid with antiviral cover speeds resolution of stromal keratitis. Taper slowly: rebound is common. Check IOP.'
            },
            {
                phase: '3. Prophylaxis',
                type: 'viva',
                question: 'Once it resolves, would you recommend prophylaxis?',
                points: [
                    'Yes: previous stromal keratitis and multiple episodes are the main recurrence risks',
                    'Oral aciclovir 400 mg BD (HEDS) reduced recurrence of ocular HSV by about half',
                    'Benefit lasts only while taking it; typically 12 months, longer for frequent recurrences',
                    'Prescribed via GP or ophthalmologist; check renal function on long-term use'
                ],
                explain: 'Explain stromal HSV carries the highest morbidity of ocular herpes: scarring, vascularisation, lipid keratopathy.'
            }
        ]
    },
    {
        id: 'po-vkc-shield',
        category: 'allergy',
        title: 'Itchy Since September with a Shield Ulcer',
        theme: 'Vernal Keratoconjunctivitis',
        years: ['Practice orals'],
        patient: '8-year-old boy with bilateral itchy red eyes, worse since the start of September, with yellow-white discharge.',
        stem: 'A well-defined, grey-white superior corneal ulcer; giant papillae on the upper tarsus; limbal dots.',
        steps: [
            {
                phase: '1. Lesion and signs',
                type: 'viva',
                question: 'Describe the lesion and its pathophysiology. What other signs might you see?',
                points: [
                    'Superior shield ulcer: well-delineated sterile ulcer, often with a plaque',
                    'Mechanical: giant papillae abrade the cornea; toxic: eosinophil major basic protein damages the epithelium',
                    'Plaque of eosinophil debris blocks re-epithelialisation',
                    'Giant cobblestone papillae (palpebral VKC), gelatinous limbal thickening with Horner–Trantas dots (limbal VKC), stringy mucus, ptosis'
                ],
                explain: 'September is spring in Australia: seasonal VKC flares.'
            },
            {
                phase: '2. Differentials',
                type: 'match',
                question: 'Match each differential to the feature that argues against it.',
                pairs: [
                    { label: 'Seasonal allergic conjunctivitis', answer: 'Watery discharge, no corneal involvement' },
                    { label: 'Bacterial conjunctivitis', answer: 'Acute, one eye then the other, not itchy' },
                    { label: 'Atopic keratoconjunctivitis', answer: 'Adults, perennial, lower-lid papillae, eczema' },
                    { label: 'Microbial keratitis', answer: 'Infiltrate with AC reaction, often a risk factor such as lens wear' }
                ],
                distractors: ['Bilateral itch with giant papillae'],
                explain: 'Also consider PUK, SLK and neurotrophic keratopathy. Grade the shield ulcer (Cameron 1–3).'
            },
            {
                phase: '3. Management',
                type: 'viva',
                question: 'What is your management?',
                points: [
                    'Cool compresses, allergen avoidance, no rubbing (keratoconus risk)',
                    'Dual-action drop: ketotifen 0.025% or olopatadine 0.1% BD',
                    'Pulsed steroid: prednisolone 1% 2-hourly for 4–7 days, then QID for 4–7 days (about 2 weeks total), checking IOP',
                    'Antibiotic cover while the epithelium is broken (chloramphenicol)',
                    'Grade 2–3 ulcer: debridement ± amniotic membrane via ophthalmology',
                    'Review in 1–3 days; prophylactic mast cell stabiliser (sodium cromoglycate 2% QID) started weeks before the season'
                ],
                explain: 'A shield ulcer takes about 3 weeks to heal. Most VKC resolves around puberty; about 1 in 8 continue as AKC.',
                recall: 'The deck lists “chloramphenicol ointment 1% QID OU”. Cover the eye with the ulcer; and its notes ask about a cycloplegic: reasonable for comfort with a large ulcer, but not routine.'
            }
        ]
    },
    {
        id: 'po-temporal-lobe',
        category: 'neuro',
        title: 'Missing Traffic Signs and a Red Flower on the Wall',
        theme: 'Homonymous Hemianopia',
        years: ['Practice orals'],
        patient: '52-year-old man having trouble seeing some traffic signs. Head injury in a car accident 3 years ago.',
        stem: 'During the exam he reports seeing a red flower on the consulting room wall. Pupils equal and reactive, no RAPD. Fundus normal. Field: incomplete right homonymous hemianopia.',
        steps: [
            {
                phase: '1. Localise',
                type: 'mcq',
                question: 'Where is the lesion most likely to be?',
                options: [
                    'Left temporal lobe: right homonymous loss, formed visual hallucinations and no RAPD all fit a post-tract lesion in the temporal lobe.',
                    'Left optic tract: right homonymous loss with formed visual hallucinations; an RAPD is not expected because tract lesions spare the pupil fibres.',
                    'Right occipital lobe: right homonymous loss with formed visual hallucinations, as the occipital cortex mainly represents the same-side field.',
                    'Optic chiasm: right homonymous loss with formed visual hallucinations, caused by an old pituitary haemorrhage from the original head injury.'
                ],
                answer: 0,
                explain: 'An optic tract lesion usually gives an RAPD in the eye with temporal loss (contralateral) and incongruous fields. Occipital lesions tend to be congruous, with macular sparing, and cause simple (unformed) rather than formed hallucinations.'
            },
            {
                phase: '2. What next',
                type: 'viva',
                question: 'What do you do next?',
                points: [
                    'Refer to the GP or neurologist for imaging (MRI) if not already investigated; new or worsening defect = urgent',
                    'Driving: a homonymous hemianopia usually fails the Australian field standard; advise not to drive and discuss with the GP',
                    'Ask about seizures (formed hallucinations can be temporal lobe seizures)',
                    'Repeat fields for congruity and progression; check the fellow side for neglect'
                ],
                explain: 'Lay language: “Your brain is not receiving information from the right side of what you see.”'
            }
        ]
    },
    {
        id: 'po-aac-contraindications',
        category: 'glaucoma',
        title: 'Left Headache, Blurred Vision and a Mid-Dilated Sluggish Pupil',
        theme: 'Acute Angle Closure',
        years: ['Practice orals'],
        patient: '50-year-old woman with a left-sided headache, eye pain and blurred left vision since last night.',
        stem: 'Moderate injection, shallow AC on van Herick, mid-dilated pupil, corneal oedema.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'match',
                question: 'Match each differential to the feature that separates it from acute angle closure.',
                pairs: [
                    { label: 'Posner–Schlossman syndrome', answer: 'Open angle, few fine KPs, minimal injection' },
                    { label: 'Pigmentary glaucoma', answer: 'Krukenberg spindle, radial TIDs, deep AC' },
                    { label: 'Inflammatory glaucoma', answer: 'Open angle with a marked AC reaction' },
                    { label: 'Fuchs’ endothelial dystrophy', answer: 'Guttata and bilateral oedema, worse in the morning' }
                ],
                distractors: ['Shallow AC and a fixed mid-dilated pupil'],
                explain: 'The distractor describes acute angle closure itself.'
            },
            {
                phase: '2. Mechanisms and risk',
                type: 'viva',
                question: 'What causes primary and secondary angle closure, and what are the risk factors?',
                points: [
                    'Primary: pupil block (iris bombé) or angle crowding (plateau iris, thick peripheral iris)',
                    'Secondary: PAS from inflammation, phacomorphic (swollen lens), neovascular membrane, medication-induced (e.g. topiramate ciliochoroidal effusion), malignant glaucoma',
                    'Risk: hyperopia, Asian ancestry, female, family history, older age, phakic',
                    'Triggers: dim light, dilating drops, anticholinergic or adrenergic medicines'
                ],
                explain: 'Topiramate-induced angle closure is bilateral and myopic-shift; pilocarpine and PI don’t help it.'
            },
            {
                phase: '3. Contraindications',
                type: 'match',
                question: 'Match each first-aid drug to a contraindication you check before giving it.',
                pairs: [
                    { label: 'Oral acetazolamide', answer: 'Sulfonamide allergy, severe renal or hepatic impairment, acidosis' },
                    { label: 'Timolol', answer: 'Asthma, COPD, bradycardia, heart block, verapamil' },
                    { label: 'Apraclonidine', answer: 'MAOI use; young children' },
                    { label: 'Brinzolamide', answer: 'Sulfonamide allergy, corneal graft, endothelial dystrophy' },
                    { label: 'Pilocarpine', answer: 'Malignant glaucoma, pseudophakic pupil block, lens-induced closure' }
                ],
                explain: 'Ring the ophthalmologist first; give drops a couple of minutes apart. Pilocarpine 2% once IOP is under ~40 mmHg (iris ischaemia stops it working at higher pressures). Topical steroid if inflamed. Laser PI once the cornea clears.'
            }
        ]
    },
    {
        id: 'po-hzo',
        category: 'cornea',
        title: 'Stabbing Facial Pain, Then a Rash and a Painful Eye',
        theme: 'Herpes Zoster Ophthalmicus',
        years: ['Practice orals'],
        patient: '71-year-old man with a painful, blurry, photophobic left eye. Stabbing pain over the left face 3 days ago, now a rash around the left eye and the side of the nose.',
        stem: 'A central pseudodendritic epithelial lesion that stains partially with fluorescein.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'match',
                question: 'Match each differential to the feature that distinguishes it from HZO.',
                pairs: [
                    { label: 'HSV epithelial keratitis', answer: 'Younger, terminal bulbs, stains brightly, rash can cross the midline' },
                    { label: 'Healing abrasion', answer: 'History of trauma, negative staining, no skin rash' },
                    { label: 'Recurrent corneal erosion', answer: 'Previous episodes on waking, no rash' },
                    { label: 'Acanthamoeba keratitis', answer: 'Lens wearer, chronic, pain out of proportion' },
                    { label: 'Contact dermatitis', answer: 'Itchy lid rash, no corneal involvement' }
                ],
                explain: 'Prodromal dermatomal pain 2–3 days before the rash is reported by most zoster patients.'
            },
            {
                phase: '2. Management',
                type: 'mcq',
                question: 'What is your management?',
                options: [
                    'Same-day GP referral for famciclovir 500 mg TDS or valaciclovir 1 g TDS for 7 days; cool compresses for the skin; paracetamol; lubricants.',
                    'Same-day GP referral for famciclovir 250 mg TDS for 3 days; topical aciclovir 3% 5×/day to the cornea; prednisolone 1% QID for the pain.',
                    'Topical aciclovir 3% 5×/day alone, since the rash started 3 days ago and oral antivirals don’t help once 48 h have passed since onset.',
                    'Same-day GP referral for oral prednisolone 50 mg daily to stop post-herpetic neuralgia; chloramphenicol ointment to the skin lesions.'
                ],
                answer: 0,
                critical: true,
                explain: 'Oral antivirals within 72 h of rash onset speed healing, reduce corneal and uveal complications and may reduce post-herpetic neuralgia. Topical antivirals don’t work for zoster. Paracetamol 1 g every 4–6 h (max 4 g/day); refer to the GP for significant pain.',
                recall: 'The deck gives famciclovir 250 mg TDS. The zoster dose is famciclovir 500 mg TDS for 7 days.'
            },
            {
                phase: '3. Spread and prognosis',
                type: 'viva',
                question: 'How do you limit spread, and what is the prognosis?',
                points: [
                    'Fluid in uncrusted vesicles can transmit VZV (chickenpox) to non-immune people: avoid pregnant women, newborns and immunocompromised people',
                    'Cover lesions until crusted (about a week)',
                    'Post-herpetic neuralgia (pain beyond 3 months): more common with age (common over 70) and with prodromal pain; can last months to years',
                    'Stromal keratitis (nummular) in the second week in about a quarter; also uveitis, neurotrophic keratopathy',
                    'Shingles vaccination for prevention (discuss with the GP)'
                ],
                explain: 'Review within a few days and keep reviewing for weeks; complications appear late.'
            }
        ]
    },
    {
        id: 'po-ntg-metoprolol',
        category: 'glaucoma',
        title: 'Drance Haemorrhage in a Woman on Metoprolol',
        theme: 'Normal-Tension Glaucoma',
        years: ['Practice orals'],
        patient: '65-year-old Japanese woman, routine exam. Told 2 years ago to return for a field but never did. On metoprolol for high blood pressure.',
        stem: 'BCVA 6/6 OU (−2.00 / −1.75). IOP R 19, L 18 mmHg. Pupils normal, no RAPD. Grade 1 nuclear sclerosis.',
        steps: [
            {
                phase: '1. Discs',
                type: 'viva',
                question: 'Describe the discs (assume average size).',
                points: [
                    'Right: inferior rim thinning (fails ISNT), inferotemporal disc haemorrhage at 8 o’clock, 360° β-PPA, C/D 0.6 V / 0.65 H, distinct margins, no pallor',
                    'Left: inferior rim thinning, C/D about 0.5 V / 0.65 H, near-360° β-PPA',
                    'Mention RNFL reflectivity and disc size even if not shown'
                ],
                explain: 'Disc haemorrhages are especially common in NTG and predict progression.'
            },
            {
                phase: '2. Field',
                type: 'reveal',
                text: 'Fields: right eye dense superior defect, GHT outside normal limits. Left eye scattered, non-contiguous inferotemporal points, GHT within normal limits.'
            },
            {
                phase: '3. History and tests',
                type: 'viva',
                question: 'What else do you ask, and what tests do you do?',
                points: [
                    'Migraine, Raynaud’s (cold hands), sleep apnoea',
                    'Past major blood loss or shock (haemodynamic crisis)',
                    'Steroid use (inhalers for asthma, creams, tablets)',
                    'Nocturnal hypotension; timing of antihypertensives',
                    'Tests: CCT, gonioscopy, IOP phasing, OCT if available, repeat field'
                ],
                explain: 'In the deck the panel reveals: CCT 505 / 515 µm, angles open to CBB with 2+ even pigment, no OCT available, diurnal IOP R 14–20, L 13–19.'
            },
            {
                phase: '4. Diagnosis',
                type: 'mcq',
                question: 'What is the diagnosis, and why?',
                options: [
                    'Normal-tension glaucoma: repeatable structure–function loss, open angles and IOP under 21 on phasing, once compressive causes are excluded.',
                    'Primary open-angle glaucoma: her thin corneas mean the true IOP is well above 24 mmHg, so these are high-tension discs and fields in disguise.',
                    'Pigmentary glaucoma: 2+ angle pigment in a myope means a burnt-out PDS, so the NTG label does not apply and no treatment is needed.',
                    'Physiological cupping: the discs are within normal limits for a Japanese myope and the field defects are artefacts from the early cataract.'
                ],
                answer: 0,
                explain: 'Moorfields NTG criteria: mean untreated IOP consistently ≤21 mmHg on phasing with no reading over 24; open angles; no secondary cause; typical disc damage matching the field. Exclude a compressive lesion if pallor exceeds cupping, the field respects the vertical midline, or vision or colour is reduced.'
            },
            {
                phase: '5. Management',
                type: 'viva',
                question: 'The field defects repeat. How will you manage her, and what is the prognosis?',
                points: [
                    'PGA (latanoprost nocte), aiming for at least a 30% reduction (CNTGS: progression 12% treated vs 35% untreated)',
                    'Avoid topical β-blockers: she is already on metoprolol (additive bradycardia and hypotension, reduced IOP effect)',
                    'Discuss night-time BP dips with the GP; don’t change her antihypertensives yourself',
                    'NTG defects lie close to fixation: add a 10-2 field',
                    'Refer within 4 months of starting treatment (OBA), with a collaborative care plan',
                    'Prognosis: CNTGS untreated rate varied widely (many stable, some fast); EMGT NTG about −0.4 dB/year'
                ],
                explain: 'Brimonidine is a reasonable second drug (LoGTS) if tolerated.'
            }
        ]
    },
    {
        id: 'po-fields-quickfire',
        category: 'neuro',
        title: 'Field Quick-fire: Chiasm, Parietal Lobe and Apoplexy',
        theme: 'Visual Fields / Neuro',
        years: ['Practice orals'],
        patient: 'A run of field printouts from the deck.',
        stem: 'Each printout is shown with a one-line history.',
        steps: [
            {
                phase: '1. Bitemporal defect',
                type: 'mcq',
                question: '15-year-old girl, incomplete bitemporal hemianopia on a 30-2. Which pattern suggests which lesion?',
                options: [
                    'A pituitary adenoma presses from below, so loss starts superotemporally; a craniopharyngioma presses from above, so loss starts inferotemporally.',
                    'A pituitary adenoma presses from above, so loss starts inferotemporally; a craniopharyngioma presses from below, so loss starts superotemporally.',
                    'A pituitary adenoma presses from the side, so loss is homonymous; a craniopharyngioma presses from the front, so loss is a central scotoma.',
                    'Both press from below, so loss always starts superotemporally; the pattern can’t distinguish them, and only the patient’s age separates the two.'
                ],
                answer: 0,
                explain: 'Craniopharyngioma peaks in childhood (and again in middle age), so it is a real possibility at 15. Urgent referral for MRI.'
            },
            {
                phase: '2. Field differentials',
                type: 'match',
                question: 'Match each field and history to the most likely cause.',
                pairs: [
                    { label: '15-year-old who can’t copy from the board, homonymous inferior quadrantanopia after trauma', answer: 'Parietal lobe lesion (“pie on the floor”)' },
                    { label: '57-year-old woman on hormone replacement, sudden painless temporal loss in one eye with an RAPD, normal discs', answer: 'Pituitary apoplexy (haemorrhage into an adenoma)' },
                    { label: '67-year-old hypertensive woman, superior arcuate or altitudinal defect', answer: 'Glaucoma, disc drusen, inferior BRVO/BRAO, AION or optic neuritis' },
                    { label: 'Young adult, bilateral centrocaecal scotomas', answer: 'LHON, dominant optic atrophy, toxic/nutritional neuropathy' },
                    { label: 'Former premature baby, temporal pallor and bilateral inferior field loss with normal IOP', answer: 'Periventricular leukomalacia' }
                ],
                explain: 'Pituitary apoplexy is an emergency: sudden headache, vision loss and ophthalmoplegia can follow. Periventricular leukomalacia causes cupping that can mimic NTG.'
            }
        ]
    }
);
