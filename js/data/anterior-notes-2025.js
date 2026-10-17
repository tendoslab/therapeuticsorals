// Cases from the 2025 anterior eye therapeutics study notes (OPTM6413 lecture notes, condition tables,
// AMH chapter 11 extracts, PBS/OBA lists and readings). These cover topics the recall-based cases didn't.
// Doses are checked against Australian practice; errors in the notes are flagged in "Recall check" boxes.
window.CASES.push(
    {
        id: 'an-abrasion-rce',
        category: 'cornea',
        title: 'Fingernail Scratch, Then Pain on Waking Months Later',
        theme: 'Corneal Abrasion & Recurrent Erosion',
        years: ['Anterior notes'],
        patient: '34-year-old mother: her toddler scratched her right eye with a fingernail this morning. Severe pain, watering, photophobia.',
        stem: 'VA R 6/9. A 3 × 2 mm inferocentral epithelial defect with clean edges that stains with fluorescein; no infiltrate, quiet AC.',
        steps: [
            {
                phase: '1. Management today',
                type: 'multi',
                question: 'Which belong in your management of this simple traumatic abrasion?',
                options: [
                    'Evert the lids to exclude a retained foreign body',
                    'Prophylactic chloramphenicol 0.5% QID (or 1% ointment) until 3 days after the epithelium closes',
                    'Oral paracetamol or ibuprofen for pain; cyclopentolate 1% in-office if there is ciliary spasm',
                    'Review at 24 hours',
                    'Pressure patch for 24 hours to speed healing',
                    'A bottle of proxymetacaine to use at home if the pain returns',
                    'Fluorometholone 0.1% QID to reduce scarring'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Most abrasions heal in 1–3 days. Use a fluoroquinolone instead of chloramphenicol in contact lens wearers (Pseudomonas). Steroids and patching are avoided; topical anaesthetics are never prescribed for home use.'
            },
            {
                phase: '2. The evidence',
                type: 'mcq',
                question: 'She asks whether a patch or anti-inflammatory drops would help. What does the evidence say?',
                options: [
                    'Cochrane: patching does not speed healing or reduce pain and may slow day-1 healing; topical NSAIDs have little evidence in traumatic abrasions',
                    'Cochrane: patching halves the healing time and pain scores at 24 hours; topical NSAIDs are the first-line analgesic and speed re-epithelialisation',
                    'Cochrane: patching is only harmful in contact lens wearers; topical NSAIDs are contraindicated in all abrasions because they cause corneal melt',
                    'Cochrane: patching and bandage lenses are equivalent and both are first-line; topical NSAIDs are only useful when combined with a steroid drop'
                ],
                answer: 0,
                explain: 'Lim et al. (patching) and Wakai et al. (NSAIDs): 93% of abrasions healed within 24 h and the rest by 48 h whatever was used. Oral analgesia and a cycloplegic for spasm are reasonable; keep a topical NSAID short and stop it if healing stalls.'
            },
            {
                phase: '3. Months later',
                type: 'viva',
                question: 'Four months later she wakes with sudden sharp pain in the same eye, which settles over the morning. There are inferior microcysts and negative staining. Explain the condition and your long-term plan.',
                points: [
                    'Recurrent corneal erosion: poor epithelial adhesion after trauma (about half) or from EBMD (map–dot–fingerprint)',
                    'Acute episode: treat as an abrasion (prophylactic antibiotic, analgesia); debride loose epithelium if needed',
                    'Prevention: lubricants 4–8×/day plus ointment at bedtime for 3–6 months (hypertonic saline 5% ointment at night if compounded)',
                    'Treat MGD/blepharitis; bandage contact lens with antibiotic cover in selected cases',
                    'For frequent recurrences: oral doxycycline 50 mg BD (via GP) with topical FML for about 8 weeks to inhibit MMP-9',
                    'Refer if still recurring: stromal micropuncture or epithelial debridement (each ~30–50% success), PTK (~80%)'
                ],
                explain: 'Warn every abrasion patient that recurrence on waking can happen (around 10% after a fingernail injury) and to open the eye slowly with the ointment in place.',
                recall: 'The notes list oral doxycycline under “treatment” without saying who writes it. Endorsed optometrists prescribe topical medicines only (OBA Appendix B); oral doxycycline goes through the GP.'
            }
        ]
    },
    {
        id: 'an-chemical-burn',
        category: 'uveitis',
        title: 'Cement Splash While Renovating',
        theme: 'Chemical (Alkali) Injury',
        years: ['Anterior notes'],
        patient: '41-year-old builder phones: wet cement splashed into his left eye 10 minutes ago. It burns and he can’t open it.',
        stem: 'He is 15 minutes from your practice.',
        steps: [
            {
                phase: '1. First action',
                type: 'mcq',
                question: 'What do you tell him on the phone, and what do you do when he arrives?',
                options: [
                    'Irrigate now with tap water for 20–30 minutes and keep going on the way in; on arrival, instil anaesthetic and irrigate with saline before anything else',
                    'Come in straight away without rinsing so the burn can be graded accurately; on arrival measure VA and IOP, then irrigate with saline for 5 minutes',
                    'Rinse briefly, then patch the eye firmly and come in; on arrival check the pH and only irrigate if the conjunctival pH is above 8 or below 6',
                    'Go directly to the emergency department without rinsing; irrigation must be done with sterile solutions, so tap water should never be used'
                ],
                answer: 0,
                explain: 'Alkalis (cement, lime, lye, ammonia) saponify cell membranes and penetrate deeper than acids, which coagulate surface proteins. Irrigate until the pH is 7–7.5, check again after 5–10 minutes, and sweep the fornices for particles.',
                critical: true
            },
            {
                phase: '2. Assessment',
                type: 'multi',
                question: 'After irrigation, what do you assess?',
                options: [
                    'Conjunctival pH with litmus, rechecked after a few minutes',
                    'Evert and double-evert the lids to remove retained cement particles',
                    'Epithelial defect size and corneal haze',
                    'Limbal ischaemia (clock hours of blanched limbal vessels) to grade severity',
                    'IOP (can rise from TM damage)',
                    'Visual acuity before irrigation, since irrigation blurs vision'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'The grade (Roper-Hall/Dua) rests on corneal haze and the extent of limbal ischaemia. VA can wait until the eye has been irrigated.'
            },
            {
                phase: '3. Grade 1 management',
                type: 'viva',
                question: 'It is a grade 1 burn: an epithelial defect, no limbal ischaemia. What do you prescribe and when do you review?',
                points: [
                    'Prophylactic antibiotic: chloramphenicol 0.5% QID (unpreserved Minims if frequent)',
                    'Short-term steroid while the epithelium heals: prednisolone sodium phosphate 0.5% Minims (or FML) QID',
                    'Cycloplegic for pain: cyclopentolate 1% or atropine 1% BD',
                    'Preservative-free lubricants; oral analgesia',
                    'Review within 24 hours, then until healed; check IOP'
                ],
                explain: 'Refer grade 2 or worse (any limbal ischaemia or corneal haze) the same day. The hospital adds hourly steroid, topical sodium ascorbate and citrate, oral vitamin C and oral doxycycline (anti-collagenase), and amniotic membrane if needed.',
                recall: 'The notes list “prednisolone phosphate 1%”. In Australia the unpreserved product is prednisolone sodium phosphate 0.5% (Minims); 1% is prednisolone acetate (Prednefrin Forte).'
            }
        ]
    },
    {
        id: 'an-gonococcal-neonate',
        category: 'conj',
        title: 'Three-Day-Old with Pus Pouring from Both Eyes',
        theme: 'Ophthalmia Neonatorum / Hyperacute Conjunctivitis',
        years: ['Anterior notes'],
        patient: 'A 3-day-old baby: copious yellow discharge from both eyes since yesterday, very swollen lids. Vaginal birth; the mother had no antenatal screening.',
        stem: 'Marked chemosis and lid oedema; discharge re-accumulates within a minute of wiping.',
        steps: [
            {
                phase: '1. Cause by timing',
                type: 'match',
                question: 'Match the onset after birth to the most likely cause of neonatal conjunctivitis.',
                pairs: [
                    { label: 'Within 24 hours', answer: 'Chemical (prophylaxis drops)' },
                    { label: 'Days 2–5, hyperacute purulent', answer: 'Neisseria gonorrhoeae' },
                    { label: 'Days 5–14, mucopurulent, may have pneumonitis', answer: 'Chlamydia trachomatis' },
                    { label: '1–2 weeks, vesicles on the lids', answer: 'Herpes simplex' }
                ],
                distractors: ['Adenovirus'],
                explain: 'Ophthalmia neonatorum is conjunctivitis in the first 28 days. Gonococcus can penetrate an intact cornea and perforate within a day or two.'
            },
            {
                phase: '2. What you do',
                type: 'mcq',
                question: 'What is your management?',
                options: [
                    'Same-day referral to a paediatric hospital or ED; phone ahead; swabs for Gram stain, culture and PCR before treatment, then systemic ceftriaxone',
                    'Chloramphenicol 1% ointment QID to both eyes with review in 24 hours, then referral to the GP for swabs if the discharge has not reduced',
                    'Swab both eyes in the practice, start tobramycin 0.3% hourly and send the results to the GP, who can decide whether systemic antibiotics are needed',
                    'Saline cleaning and warm compresses, as most neonatal conjunctivitis is a blocked tear duct; refer routinely if still present at 2 weeks'
                ],
                answer: 0,
                explain: 'Topical treatment alone is inadequate: gonococcal and chlamydial infections need systemic treatment (ceftriaxone; erythromycin or azithromycin for chlamydia). Frequent saline irrigation clears discharge.',
                critical: true
            },
            {
                phase: '3. Beyond the eye',
                type: 'viva',
                question: 'What else must happen, and how would an adult with hyperacute conjunctivitis differ?',
                points: [
                    'Mother and her sexual partners need testing and treatment (sexual health or GP)',
                    'Gonorrhoea and chlamydia are notifiable: the lab notifies, and the doctor completes the public health notification',
                    'Treat presumed chlamydia at the same time (it often coexists)',
                    'Adult: rapid onset, profuse pus, chemosis, preauricular nodes; same-day hospital referral for systemic ceftriaxone plus azithromycin, sexual health work-up and contact tracing',
                    'Check the cornea for peripheral ulceration and perforation risk'
                ],
                explain: 'AMH: ceftriaxone (or cefotaxime) systemically; in adults also give azithromycin because chlamydia often coexists.',
                recall: 'One section of the notes says chlamydial conjunctivitis is “not notifiable in Australia”. Chlamydia and gonorrhoea are both nationally notifiable (via the laboratory). The same notes also list “ceftriaxone 1 g IM × 5 days”; the AMH extract in the notes gives a single dose, and the regimen is the treating doctor’s decision.'
            }
        ]
    },
    {
        id: 'an-chalazion-red-flag',
        category: 'allergy',
        title: 'A Third Chalazion in the Same Lid',
        theme: 'Chalazion vs Sebaceous Gland Carcinoma',
        years: ['Anterior notes'],
        patient: '72-year-old woman: a painless lump in the left upper lid, “the third one there this year”. Each was drained elsewhere.',
        stem: 'A firm, non-tender, yellowish nodule in the tarsus with loss of lashes overlying it and a thickened, irregular lid margin. Unilateral “blepharitis” on that lid only.',
        steps: [
            {
                phase: '1. Hordeolum or chalazion',
                type: 'match',
                question: 'Match each feature to the lesion it suggests.',
                pairs: [
                    { label: 'Acute, tender, red; often S. aureus', answer: 'Hordeolum' },
                    { label: 'Chronic, painless, rubbery tarsal nodule; sterile lipogranuloma', answer: 'Chalazion' },
                    { label: 'Recurrent at one site, lash loss, lid margin distortion, elderly', answer: 'Sebaceous gland carcinoma' },
                    { label: 'Pearly, ulcerated, indurated lesion on the lower lid of a fair outdoor worker', answer: 'Basal cell carcinoma' }
                ],
                distractors: ['Molluscum contagiosum'],
                explain: 'Hordeola usually settle within weeks; a lump lasting more than about 6 weeks is a chalazion. Sebaceous carcinoma masquerades as recurrent chalazion or unilateral chronic blepharoconjunctivitis.'
            },
            {
                phase: '2. This patient',
                type: 'mcq',
                question: 'What is your plan?',
                options: [
                    'Photograph it and refer to an oculoplastic ophthalmologist within about a week for biopsy: possible sebaceous gland carcinoma',
                    'Warm compresses and lid massage for 6 weeks, then refer routinely for incision and curettage if it has not resolved by then',
                    'Chloramphenicol 1% ointment BD and a topical steroid for 2 weeks to shrink it, then review and refer only if it has grown in size',
                    'Refer to her GP for oral doxycycline for 3 months, since recurrent chalazia in older patients usually mean ocular rosacea'
                ],
                answer: 0,
                explain: 'Recurrent “chalazion” at one site in an older patient, with madarosis or margin distortion, needs histology. BCC is the commonest periocular malignancy (no treatment by you; photograph, routine referral, sun protection).'
            },
            {
                phase: '3. A typical chalazion',
                type: 'viva',
                question: 'For a typical first chalazion in a younger patient, what is your management and when do you refer?',
                points: [
                    'Warm compresses 5–10 minutes several times a day, then gentle massage toward the lid margin',
                    'Lid hygiene with a commercial cleanser; treat underlying MGD, blepharitis or rosacea',
                    'Antibiotics are not needed unless secondarily infected',
                    'Refer routinely if still present after about 6 weeks, recurrent, inducing astigmatism or ptosis, or cosmetically unacceptable',
                    'Specialist options: incision and curettage, or intralesional triamcinolone (useful in children)',
                    'An acute hordeolum spreading into preseptal cellulitis needs oral antibiotics via the GP (amoxicillin–clavulanate or cephalexin)'
                ],
                explain: 'Avoid massage during the acute, infected (hordeolum) phase so you don’t spread the infection.'
            }
        ]
    },
    {
        id: 'an-pterygium',
        category: 'conj',
        title: 'Inflamed Fleshy Growth in a Surfer',
        theme: 'Pterygium & Pingueculitis',
        years: ['Anterior notes'],
        patient: '38-year-old surfer: a red, gritty right eye for a week; he has had a “fleshy bit” on the nasal white of the eye for years.',
        stem: 'A triangular fibrovascular lesion crossing 2 mm onto the nasal cornea, injected and slightly elevated; fine iron line at its head. Smooth surface, no feeder vessels or leukoplakia.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'Which differentials should you consider for an inflamed nasal conjunctival lesion?',
                options: [
                    'Inflamed pterygium',
                    'Pingueculitis (no corneal involvement)',
                    'Conjunctival intraepithelial neoplasia / OSSN (gelatinous, leukoplakic, feeder vessels)',
                    'Nodular episcleritis',
                    'Conjunctival melanoma (pigmented, irregular)',
                    'Band keratopathy'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Atypical features (rapid growth, irregular or gelatinous surface, leukoplakia, prominent feeder vessels, temporal location, older age) suggest OSSN and need referral for biopsy.'
            },
            {
                phase: '2. Treatment',
                type: 'mcq',
                question: 'What do you prescribe for the inflammation?',
                options: [
                    'Lubricants plus fluorometholone 0.1% QID for about a week (or ketorolac 0.5% QID if a steroid is unsuitable); UV protection',
                    'Lubricants plus prednisolone acetate 1% hourly for a week, then taper over a month to prevent the pterygium from growing',
                    'Chloramphenicol 0.5% QID for 5 days because inflamed pterygia are usually secondarily infected; no anti-inflammatory is needed',
                    'Naphazoline–pheniramine drops QID long term to whiten the eye, plus lubricants and wrap-around sunglasses outdoors'
                ],
                answer: 0,
                explain: 'A short, low-potency steroid course is enough; check IOP if it is extended. Vasoconstrictors cause rebound hyperaemia and aren’t recommended.'
            },
            {
                phase: '3. Referral',
                type: 'multi',
                question: 'When would you refer for surgery?',
                options: [
                    'Encroaching on the visual axis',
                    'Inducing significant (often with-the-rule) astigmatism or reduced vision',
                    'Progressive growth documented by photos',
                    'Restricted eye movements or diplopia',
                    'Cosmetic concern',
                    'Any pterygium in a patient under 40, to prevent recurrence'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Excision with a conjunctival autograft reduces recurrence (bare sclera excision recurs often). Recurrences are commoner in young patients, so surgery is not done just because of age; UV protection reduces recurrence.'
            }
        ]
    },
    {
        id: 'an-bell-exposure',
        category: 'allergy',
        title: 'Woke with a Droopy Face and Can’t Close Her Eye',
        theme: 'Facial Palsy & Exposure Keratopathy',
        years: ['Anterior notes'],
        patient: '45-year-old woman: woke this morning with the right side of her face drooping; her right eye feels gritty and won’t close.',
        stem: 'She cannot wrinkle her right forehead. Lagophthalmos of 3 mm with a weak Bell’s phenomenon; inferior punctate staining.',
        steps: [
            {
                phase: '1. Central or peripheral',
                type: 'mcq',
                question: 'Why does it matter that she can’t wrinkle her forehead?',
                options: [
                    'Forehead involvement means a peripheral (lower motor neurone) palsy such as Bell’s; a central lesion like a stroke spares the forehead and needs the ED',
                    'Forehead involvement means a central (upper motor neurone) lesion such as a stroke, so she needs an urgent CT; forehead sparing is typical of Bell’s palsy',
                    'Forehead involvement only tells you the palsy is complete; both central and peripheral lesions affect the forehead, so it doesn’t change the urgency',
                    'Forehead involvement suggests myasthenia gravis rather than a facial nerve palsy, so an ice test should be done before anything else'
                ],
                answer: 0,
                explain: 'The upper face has bilateral cortical input, so a stroke spares the forehead. Also check for other neurological signs, ear vesicles (Ramsay Hunt), a parotid mass and hearing loss.'
            },
            {
                phase: '2. Protect the cornea',
                type: 'match',
                question: 'Match the exposure severity to the management.',
                pairs: [
                    { label: 'Mild exposure keratitis', answer: 'Lubricant drops QID plus ointment at night' },
                    { label: 'Moderate exposure keratitis', answer: 'PF drops or gel 1–2-hourly, moisture chamber, lid taping at night' },
                    { label: 'Severe exposure or a non-healing defect', answer: 'Refer for tarsorrhaphy (temporary or permanent)' },
                    { label: 'Expected long-standing palsy', answer: 'Refer for an upper lid gold weight' }
                ],
                distractors: ['Bandage contact lens left in for a month'],
                explain: 'Check corneal sensation (CN V) before anaesthetic: a neurotrophic plus exposed cornea is high risk. Review every few days while the palsy is acute.'
            },
            {
                phase: '3. The rest of the plan',
                type: 'viva',
                question: 'What else do you arrange and tell her?',
                points: [
                    'Same-day GP review: oral prednisolone started within 72 hours improves facial nerve recovery (± an antiviral)',
                    'Look for vesicles in the ear canal and test hearing (Ramsay Hunt: VZV)',
                    'Most Bell’s palsies recover (about 85% within 2 months)',
                    'Return immediately if the eye becomes painful, red or blurry',
                    'Recheck at 1 and 3 months; if not recovering by 3 months, imaging to rule out a mass'
                ],
                explain: 'You can’t prescribe the oral steroid; your job is the cornea, the referral and the follow-up plan.'
            }
        ]
    },
    {
        id: 'an-dacryocystitis',
        category: 'allergy',
        title: 'Painful Swelling at the Inner Corner of the Eye',
        theme: 'Acute Dacryocystitis',
        years: ['Anterior notes'],
        patient: '68-year-old woman: 2 days of a painful red swelling beside the nose under her left eye; she has had a watery eye for years. Feels feverish.',
        stem: 'Tender, red, fluctuant swelling below the medial canthal tendon; pressure produces pus from the punctum. Normal motility, no proptosis.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'Which differentials do you consider?',
                options: [
                    'Acute dacryocystitis (nasolacrimal duct obstruction with infection)',
                    'Preseptal cellulitis',
                    'Orbital cellulitis (check motility, proptosis, pupils and vision)',
                    'Canaliculitis',
                    'Lacrimal sac tumour (blood-stained tears, mass above the medial canthal tendon)',
                    'Pinguecula'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Common organisms: S. aureus, S. pneumoniae, H. influenzae.'
            },
            {
                phase: '2. Management',
                type: 'mcq',
                question: 'What is your management?',
                options: [
                    'Same-day GP or ophthalmology referral for oral antibiotics (e.g. amoxicillin–clavulanate) and warm compresses; no massage, probing or syringing',
                    'Firm massage over the sac 4 times a day to empty it, chloramphenicol 0.5% QID, and syringing of the duct in the practice once the pain settles',
                    'Topical chloramphenicol 0.5% every 2 hours and ointment at night is sufficient, since the sac is reached by the drops; review in a week',
                    'Routine referral for dacryocystorhinostomy; antibiotics are not needed because the infection drains spontaneously through the punctum'
                ],
                answer: 0,
                explain: 'Topical chloramphenicol only treats secondary conjunctivitis; it doesn’t reach the sac. Do not probe, irrigate or massage during acute infection. Emergency referral if there are signs of orbital spread (proptosis, restricted or painful movements, RAPD, reduced vision).'
            },
            {
                phase: '3. Afterwards',
                type: 'viva',
                question: 'What is the long-term plan once it settles?',
                points: [
                    'Routine ophthalmology (oculoplastic) referral for dacryocystorhinostomy (DCR) because the obstruction persists',
                    'DCR joins the lacrimal sac to the nasal mucosa through a new bony opening',
                    'Chronic dacryocystitis (recurrent epiphora, mucopurulent reflux) is also managed with DCR',
                    'Infants with congenital NLDO are different: massage (Crigler) is appropriate and most resolve by 12 months'
                ]
            }
        ]
    },
    {
        id: 'an-phthiriasis',
        category: 'allergy',
        title: 'Itchy Lashes with Tiny Brown Specks',
        theme: 'Phthiriasis Palpebrarum',
        years: ['Anterior notes'],
        patient: '29-year-old man: 2 weeks of intensely itchy eyelids, worse at night. Tried “blepharitis wipes”.',
        stem: 'At high magnification: translucent oval eggs cemented to the lashes, a few crab-like lice gripping lash bases, reddish-brown debris on the lid margins; mild follicular conjunctivitis.',
        steps: [
            {
                phase: '1. Diagnosis',
                type: 'mcq',
                question: 'What is the diagnosis, and how is it told apart from its main mimic?',
                options: [
                    'Phthiriasis (Pthirus pubis): visible lice and nits with blood-stained debris; Demodex gives cylindrical lash sleeves and no visible lice',
                    'Demodex blepharitis: the specks are mites and their eggs; phthiriasis shows cylindrical dandruff at the lash base and no visible organisms',
                    'Staphylococcal blepharitis: collarettes and scales; lice only infest the scalp, so lid involvement points to bacteria rather than parasites',
                    'Molluscum contagiosum: umbilicated papules shed virus causing follicular conjunctivitis; the specks are keratin debris from the papules'
                ],
                answer: 0,
                explain: 'Pubic lice are usually sexually transmitted, but can spread via bedding, towels and clothing.'
            },
            {
                phase: '2. Management',
                type: 'viva',
                question: 'What is your management and advice?',
                points: [
                    'Mechanically remove lice and nits with fine forceps at the slit lamp (± lash trimming)',
                    'Smother remaining lice with bland ointment (paraffin / petroleum jelly) BD for 10–14 days',
                    'Avoid pediculicide lotions near the eye (ocular surface toxicity)',
                    'Hot-wash bedding, towels and clothing; treat close contacts',
                    'Refer to the GP or a sexual health clinic for body treatment and STI screening',
                    'In a child, consider sexual abuse and follow child protection obligations',
                    'Review in 1 week for newly hatched lice'
                ]
            }
        ]
    },
    {
        id: 'an-photokeratitis',
        category: 'cornea',
        title: 'Woke at 2 a.m. with Both Eyes Burning',
        theme: 'UV Photokeratitis (and Christmas Eye)',
        years: ['Anterior notes'],
        patient: '24-year-old apprentice: woke at 2 a.m. with severe pain, watering and photophobia in both eyes. He spent the afternoon helping with arc welding without a mask.',
        stem: 'Lid swelling, blepharospasm; dense interpalpebral punctate staining in both eyes. No foreign body.',
        steps: [
            {
                phase: '1. Management',
                type: 'multi',
                question: 'Which are appropriate?',
                options: [
                    'Cyclopentolate 1% in-office for ciliary spasm',
                    'Oral analgesia (paracetamol 1 g QID or ibuprofen 400 mg TDS–QID if no contraindication)',
                    'Preservative-free lubricants or ointment; cold compresses; sunglasses',
                    'Optional prophylactic chloramphenicol while the epithelium recovers',
                    'A topical anaesthetic to use at home until it settles',
                    'Double patching both eyes for 48 hours',
                    'Prednisolone acetate 1% QID to reduce the inflammation'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Onset is 6–12 hours after exposure; it settles within 24–48 hours. Never prescribe topical anaesthetics for home use: they delay healing and can cause toxic keratopathy and ulceration.',
                critical: true
            },
            {
                phase: '2. Review and advice',
                type: 'viva',
                question: 'What do you tell him and when do you review?',
                points: [
                    'Expect improvement within 24 hours; review in 24–48 hours (sooner if worse)',
                    'Return urgently if vision drops, pain worsens or a white spot appears (infection)',
                    'Proper welding protection (auto-darkening helmet) for himself and bystanders',
                    'Same picture from snow, tanning beds or a sun lamp'
                ],
                explain: 'Christmas eye (rural south-eastern Australia, summer, a beetle toxin) causes a similar sudden severe pain with an inferior or central epithelial defect: supportive care, prophylactic antibiotic, cycloplegia and oral analgesia, review in 24–48 h.'
            }
        ]
    },
    {
        id: 'an-post-cataract',
        category: 'uveitis',
        title: 'Day 1, Week 3 and Week 6 After Cataract Surgery',
        theme: 'Post-Cataract Co-management',
        years: ['Anterior notes'],
        patient: '74-year-old man in shared care after uncomplicated phaco with an intracameral antibiotic. Discharged on chloramphenicol 0.5% QID for a week and Prednefrin Forte + ketorolac TDS for a month.',
        stem: 'You see him at day 1, week 3 and week 6.',
        steps: [
            {
                phase: '1. Day 1: IOP 34',
                type: 'mcq',
                question: 'Day 1: clear cornea, mild flare, IOP 34 mmHg. What is the likely cause and what do you do?',
                options: [
                    'Retained viscoelastic: add an aqueous suppressant (e.g. timolol or brimonidine), recheck within 24 hours and tell the surgeon',
                    'Steroid response: stop the Prednefrin Forte immediately, start latanoprost at night and review the patient again in 4–6 weeks',
                    'Pupil block from the IOL: dilate with phenylephrine 10% and atropine 1% straight away, then recheck the IOP an hour later',
                    'Endophthalmitis: refer to the emergency department the same day for intravitreal antibiotics, since a raised IOP on day 1 is diagnostic'
                ],
                answer: 0,
                explain: 'Early spikes (often over 30) are usually viscoelastic and settle within 24–48 h. PGAs are avoided straight after surgery (inflammation, CMO risk).'
            },
            {
                phase: '2. Week 3: IOP 30',
                type: 'mcq',
                question: 'Week 3: the eye is quiet and the IOP is 30 (it was 18 on day 3). What is your plan?',
                options: [
                    'Likely steroid response: taper or switch to FML or the NSAID alone, add an aqueous suppressant and update the surgeon',
                    'Likely retained viscoelastic: it clears by itself, so continue all drops unchanged and recheck the IOP at the routine 1-month visit',
                    'Likely angle closure from the new lens: refer for laser peripheral iridotomy the same day and stop the ketorolac immediately',
                    'Likely early glaucoma: start latanoprost at night and refer to a glaucoma specialist within 4 months as per the OBA guideline'
                ],
                answer: 0,
                explain: 'A rise after the first week points to a steroid responder; recheck in 1–2 weeks. The NSAID can usually continue. Check gonioscopy if anything suggests a mechanical cause.'
            },
            {
                phase: '3. Week 6: blur',
                type: 'viva',
                question: 'Week 6: vision has dropped from 6/6 to 6/12, with metamorphopsia. OCT shows cystic spaces at the fovea. What is it and how is it managed?',
                points: [
                    'Pseudophakic cystoid macular oedema (Irvine–Gass), peaks around 6 weeks, 1–3.5% of uncomplicated cases',
                    'Risk factors: diabetes, uveitis, previous RVO, ERM, PGA use, posterior capsule rupture',
                    'Topical NSAID (ketorolac 0.5% QID) plus a topical steroid',
                    'Stop a PGA if he is using one (liaise with the prescriber)',
                    'Not an emergency: review in 4–6 weeks; refer to the surgeon if not improving (sub-Tenon or intravitreal steroid)'
                ]
            },
            {
                phase: '4. The emergency',
                type: 'mcq',
                question: 'A different patient, day 3: pain, worsening vision, fibrin and a hypopyon. What do you do?',
                options: [
                    'Suspect endophthalmitis: same-day referral to the surgeon or eye emergency for a vitreous tap and intravitreal antibiotics',
                    'Suspect toxic anterior segment syndrome: double the Prednefrin Forte to 2-hourly and review in 24 hours, referring if the hypopyon has grown',
                    'Suspect severe postoperative uveitis: increase the steroid to hourly, add atropine 1% BD and review the patient in 2–3 days',
                    'Suspect a corneal ulcer under the wound: swab the wound and start hourly ciprofloxacin, then refer if there is no improvement in 48 hours'
                ],
                answer: 0,
                explain: 'Endophthalmitis is rare (under 0.1% with intracameral antibiotic), usually within the first week. Pain, reduced vision and hypopyon need same-day ophthalmology.',
                critical: true
            }
        ]
    },
    {
        id: 'an-post-lasik',
        category: 'cornea',
        title: 'Blurry and Light-Sensitive After LASIK',
        theme: 'Refractive Surgery Complications',
        years: ['Anterior notes'],
        patient: '29-year-old woman 4 days after bilateral LASIK: mild discomfort and blurring in the right eye.',
        stem: 'Fine, granular white cells in the flap interface of the right eye, diffuse and not focal; no epithelial defect over them; quiet AC.',
        steps: [
            {
                phase: '1. Which complication',
                type: 'match',
                question: 'Match the presentation to the post-refractive complication.',
                pairs: [
                    { label: 'Day 1–7: diffuse fine white interface cells (“sands of the Sahara”)', answer: 'Diffuse lamellar keratitis (DLK)' },
                    { label: 'Weeks 2–4: marked light sensitivity, normal VA and a quiet, clear eye', answer: 'Transient light sensitivity syndrome' },
                    { label: 'Focal dense infiltrate with pain, epithelial defect and AC reaction', answer: 'Infectious keratitis' },
                    { label: 'Months–years: myopic shift and inferior steepening on topography', answer: 'Corneal ectasia' }
                ],
                distractors: ['Epithelial basement membrane dystrophy'],
                explain: 'Epithelial ingrowth shows as grey-white nests at the flap edge interface; large or progressive areas need a flap lift.'
            },
            {
                phase: '2. DLK management',
                type: 'mcq',
                question: 'How is DLK managed?',
                options: [
                    'Stages 1–2: intensive topical steroid (e.g. prednisolone acetate 1% hourly) with close review; stage 3 or worse: same-day surgeon for a flap lift',
                    'All stages: chloramphenicol 0.5% QID and lubricants only, because steroids increase the risk of flap melt and interface infection',
                    'Stages 1–2: observation, as DLK always clears within a week without treatment; stage 3: start fluorometholone 0.1% BD and review in a month',
                    'All stages: stop all drops and refer to the surgeon routinely for an enhancement procedure once the interface cells have cleared'
                ],
                answer: 0,
                explain: 'Exclude infection first: focal, dense, painful infiltrates with an epithelial defect suggest infectious keratitis (refer the same day). TLSS responds to a weak steroid such as FML QID.'
            },
            {
                phase: '3. Pain out of proportion',
                type: 'viva',
                question: 'Months later another LASIK patient has severe burning pain but almost no staining. How do you approach it?',
                points: [
                    'Consider neuropathic ocular pain: symptoms out of proportion to signs; allodynia, hyperalgesia',
                    'Proparacaine challenge in the chair: pain gone = peripheral; pain persists = central',
                    'Treat any dry eye and ocular surface disease first',
                    'Refer to a pain specialist / ophthalmologist for systemic agents (tricyclics, gabapentin, pregabalin) if central',
                    'Never give topical anaesthetic for home use'
                ],
                explain: 'Post-refractive dry eye is the commonest complication (LASIK settles over 6–12 months; SMILE recovers faster).'
            }
        ]
    },
    {
        id: 'an-myopia-atropine',
        category: 'professional',
        title: 'Low-Dose Atropine for an 8-Year-Old Myope',
        theme: 'Myopia Control & Amblyopia Penalisation',
        years: ['Anterior notes'],
        patient: '8-year-old East Asian girl: −2.50 D OU, up from −1.25 D a year ago; axial length increased 0.45 mm in 12 months. Both parents are myopic. Mum asks about atropine.',
        stem: 'Healthy eyes, normal binocular vision. No medical history.',
        steps: [
            {
                phase: '1. The evidence',
                type: 'multi',
                question: 'Which statements about atropine for myopia control are accurate?',
                options: [
                    'LAMP: 0.05% gave the best control of refraction and axial length; effects are concentration-dependent',
                    '0.01% has fewer side effects but weaker axial length control',
                    'Atropine 1% is the most effective but causes photophobia, near blur and the largest rebound on stopping',
                    'Combining atropine with ortho-K or myopia-control spectacles/lenses may add benefit',
                    'Its effect is purely through relaxing accommodation, so near work must stop',
                    'Time outdoors (about 2 hours a day) helps prevent myopia onset'
                ],
                answers: [0, 1, 2, 3, 5],
                explain: 'The mechanism is thought to be non-accommodative (retinal/choroidal/scleral muscarinic sites). CHAMP (0.01% vs 0.02%) and MOSAIC (0.01% in Irish children) support efficacy across ethnicities.'
            },
            {
                phase: '2. Safety',
                type: 'multi',
                question: 'What do you check and tell the family before starting?',
                options: [
                    'Caution in Down syndrome, spastic paralysis or brain damage (increased sensitivity)',
                    'Possible photophobia, near blur and allergic conjunctivitis; rarely dry mouth, flushing or tachycardia',
                    'Punctal occlusion after instillation to cut systemic absorption',
                    'Store the bottle out of reach: atropine is toxic if swallowed',
                    'It must be stopped abruptly after 2 years to avoid rebound'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Taper rather than stopping abruptly, then keep monitoring for rebound progression.'
            },
            {
                phase: '3. The script and the plan',
                type: 'mcq',
                question: 'What do you prescribe and how do you monitor?',
                options: [
                    'Atropine 0.01% (Eikance) one drop each eye at night, or 0.05% marked “to be compounded”; review at 1–3 months, then 6-monthly with axial length',
                    'Atropine 1% (Minims) one drop each eye every night for 5 years; review only at 12 months with a non-cycloplegic refraction, since axial length is not needed',
                    'Atropine 0.01% one drop each eye twice daily to cover school hours; review at 2 years once the treatment course has finished',
                    'Cyclopentolate 0.5% one drop each eye at night as a cheaper alternative to atropine; review every 3 months with a subjective refraction only'
                ],
                answer: 0,
                explain: 'Axial growth under about 0.2 mm/year suggests good control. Eikance 0.01% is a Black Triangle product (report adverse events); other strengths are compounded, so write “to be compounded” to avoid dispensing errors with 1%.'
            },
            {
                phase: '4. Penalisation instead',
                type: 'viva',
                question: 'A different 5-year-old has anisometropic amblyopia (R 6/18, L 6/6) after 16 weeks of full-time glasses. How would you use atropine?',
                points: [
                    'Glasses alone first: most improve over about 15–16 weeks (PEDIG); continue until VA plateaus',
                    'Atropine 1% in the better eye, weekend-only (Saturday and Sunday) is as effective as daily for moderate amblyopia',
                    'PEDIG: atropine and 2 h/day patching give similar results in moderate amblyopia; atropine often has better compliance',
                    'Check the better eye is hyperopic enough for near blur to penalise; a plano lens can add penalisation',
                    'Review every 6–8 weeks; watch for reverse amblyopia; taper and monitor for a year after stopping (recurrence ~25%)'
                ]
            }
        ]
    },
    {
        id: 'an-pbs-scripts',
        category: 'professional',
        title: 'Writing the Scripts: Lubricant, Pred Forte, Cipro and Ciclosporin',
        theme: 'PBS Prescribing Rules',
        years: ['Anterior notes'],
        patient: 'Four patients on one morning list need prescriptions.',
        stem: 'Sjögren’s patient sensitive to preservatives; an AAU patient; a contact lens wearer with a small peripheral ulcer; and a severe dry eye patient asking about ciclosporin.',
        steps: [
            {
                phase: '1. Repeats',
                type: 'mcq',
                question: 'Which is the right approach to repeats?',
                options: [
                    'No repeats for acute conditions or for steroid drops; repeats are reasonable for stable chronic conditions such as dry eye or glaucoma',
                    'Always give 5 repeats on PBS scripts, since the PBS maximum saves the patient a return visit, including for steroid drops',
                    'Repeats are only allowed on private scripts; PBS optometrist scripts can never carry repeats, whatever the condition being treated',
                    'One repeat for acute infections so the patient can finish the course, and none for chronic conditions, which need a review first'
                ],
                answer: 0,
                explain: 'Acute infection scripts (chloramphenicol, ciprofloxacin) have no repeats. Avoid repeats on steroids so the patient comes back for IOP checks.'
            },
            {
                phase: '2. PBS restrictions',
                type: 'match',
                question: 'Match each item to its PBS restriction for optometrists.',
                pairs: [
                    { label: 'Preservative-free unit-dose tear supplement', answer: 'Authority required (streamlined): severe dry eye, sensitive to preservatives' },
                    { label: 'Prednisolone acetate 1% + phenylephrine 0.12%', answer: 'Restricted: uveitis' },
                    { label: 'Ciprofloxacin 0.3% or ofloxacin 0.3%', answer: 'Authority required: bacterial keratitis, in consultation with an ophthalmologist' },
                    { label: 'Chloramphenicol 0.5% drops', answer: 'Restricted: Aboriginal or Torres Strait Islander patients' },
                    { label: 'Ciclosporin 0.09% or 0.1%', answer: 'Authority required: severe dry eye with keratitis not controlled by PF tears' }
                ],
                distractors: ['Unrestricted: any indication'],
                explain: 'For other patients chloramphenicol is bought over the counter (S3) or written as a private script. Fluorometholone isn’t on the optometrist PBS list, so it is written privately.'
            },
            {
                phase: '3. Script details',
                type: 'multi',
                question: 'Which details must or should appear on the PBS script?',
                options: [
                    'Active ingredient first (brand optional, after it), strength and form',
                    'Which eye(s), dose, frequency (and “shake well” for suspensions)',
                    'Quantity and number of repeats',
                    'The streamlined authority code where one applies (4105 for Hylo-Fresh/Hylo-Forte, 6172 for other unit-dose tears, 15559 for 60-day unit-dose scripts)',
                    'Your prescriber number, name, address, signature and date; patient name, address (and DOB in NSW)',
                    'Several items on one optometrist PBS form to save paper'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Only one item per optometrist PBS form. Avoid abbreviations like OD or gutt. Eligible patients can be registered for the Closing the Gap PBS co-payment; stable glaucoma and dry eye patients may get 60-day dispensing.'
            },
            {
                phase: '4. Ciclosporin',
                type: 'viva',
                question: 'What are the PBS criteria and counselling points for ciclosporin?',
                points: [
                    'Chronic severe dry eye with keratitis: corneal fluorescein staining grade 4 (modified Oxford) and OSDI at least 23, not adequately controlled by PF tears alone',
                    'Must be the only PBS-subsidised therapy for the condition; used with a PF tear substitute',
                    'Cequa 0.09% BD or Ikervis 0.1% at bedtime; onset is slow (about a month), reassess at 3 months and 6-monthly',
                    'Stinging and redness are common; contraindicated with ocular infection or malignancy',
                    'Leave 15 minutes between it and a lubricant'
                ],
                recall: 'Both ciclosporin products are on the TGA Black Triangle scheme (new medicines; report suspected adverse effects). Lifitegrast was withdrawn from the Australian market in 2022.'
            }
        ]
    },
    {
        id: 'an-filamentary-slk',
        category: 'allergy',
        title: 'Strands on the Cornea in a Woman with Thyroid Disease',
        theme: 'Filamentary Keratitis & SLK',
        years: ['Anterior notes'],
        patient: '52-year-old woman with Graves’ disease: months of foreign body sensation and pain on blinking, worse in the right eye.',
        stem: 'Grey, comma-shaped mucus strands anchored to the superior cornea that stain with fluorescein; a thickened, injected band of superior bulbar conjunctiva with fine superior limbal staining; papillae on the upper tarsus.',
        steps: [
            {
                phase: '1. Diagnosis',
                type: 'multi',
                question: 'Which conditions are present or associated here?',
                options: [
                    'Filamentary keratitis',
                    'Superior limbic keratoconjunctivitis (SLK)',
                    'Underlying dry eye or exposure (thyroid eye disease)',
                    'Neurotrophic keratopathy should be excluded (check corneal sensation)',
                    'Acanthamoeba keratitis'
                ],
                answers: [0, 1, 2, 3],
                explain: 'Filaments are degenerating epithelium and mucus attached at one end. SLK is associated with thyroid disease, dry eye and contact lens wear; check thyroid status.'
            },
            {
                phase: '2. Management',
                type: 'viva',
                question: 'What is your management?',
                points: [
                    'Remove filaments with fine forceps under topical anaesthetic',
                    'Frequent preservative-free lubricants, gel or ointment at night; punctal occlusion',
                    'Hypertonic saline 5% and/or acetylcysteine 5–10% (mucolytic, compounded) 3–4×/day',
                    'Short course of a low-potency steroid (FML 0.1% QID) if inflamed; mast cell stabiliser (cromoglycate) for SLK',
                    'Stop preserved drops and contact lenses',
                    'Refractory SLK or filaments: refer (ciclosporin, silver nitrate, cautery, bandage CL or resection)'
                ]
            }
        ]
    }
);
