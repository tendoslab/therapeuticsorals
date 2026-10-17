// Allergy, lids & ocular surface cases (anterior-eye examiner)
window.CASES.push(
    {
        id: 'sac',
        category: 'allergy',
        title: 'Seasonal Allergic Conjunctivitis',
        theme: 'Allergy Pharmacology',
        years: ['2019', '2025'],
        patient: '26-year-old man with hayfever.',
        stem: 'Itchy, watery, red eyes in both eyes every spring. Also a runny nose and sneezing.',
        exhibit: 'A (blurry) photo of the inferior palpebral conjunctiva: diffuse hyperaemia, chemosis and fine papillae.',
        steps: [
            {
                phase: '1. Papillae vs follicles',
                type: 'match',
                question: 'Match the feature to papillae or follicles.',
                pairs: [
                    { label: 'Central vascular core with a pale border; polygonal mosaic', answer: 'Papillae' },
                    { label: 'Avascular, translucent, dome-shaped lymphoid aggregates; vessels around the base', answer: 'Follicles' },
                    { label: 'Allergy, CL-related GPC, bacterial conjunctivitis, blepharitis', answer: 'Papillae' },
                    { label: 'Adenovirus, chlamydia, HSV, toxic (e.g. brimonidine, atropine), molluscum', answer: 'Follicles' }
                ],
                explain: 'Papillae are epithelial hyperplasia around a vascular core. Follicles are lymphoid germinal centres.'
            },
            {
                phase: '2. Differentials',
                type: 'mcq',
                question: 'How do SAC, PAC, VKC and AKC differ?',
                options: [
                    'SAC/PAC: seasonal or perennial, mild, no corneal involvement. VKC: young boys, warm climates, giant upper papillae, Trantas dots, shield ulcer. AKC: adults with eczema, lower-lid involvement, scarring, corneal vessels.',
                    'SAC/PAC: seasonal or perennial, with shield ulcers in most cases. VKC: older adults, cold climates, lower-lid follicles, no corneal signs. AKC: children with hay fever, giant upper papillae, Trantas dots, resolves at puberty.',
                    'SAC/PAC: giant papillae and corneal neovascularisation. VKC: young girls, cold climates, follicles and pseudomembranes, recurrent dendrites. AKC: adults with hay fever only, mild, seasonal, no scarring or corneal signs.',
                    'SAC/PAC: type IV reactions with eczematous lids and scarring. VKC: adults over 40, perennial, lower-lid papillae, no Trantas dots. AKC: young boys in warm climates, giant upper papillae, shield ulcers, resolves at puberty.'
                ],
                answer: 0,
                explain: 'SAC and PAC are type I (IgE / mast cell) reactions. VKC and AKC also involve chronic T-cell (Th2) and eosinophil-mediated inflammation and can threaten sight.',
                recall: 'A 2025 candidate was asked how SAC presents outside the eye — they wanted the non-ocular atopic features: rhinitis (runny nose, sneezing), itchy throat, cough, asthma, eczema.'
            },
            {
                phase: '3. Drug classes',
                type: 'match',
                question: 'Match each drug to its class and onset.',
                pairs: [
                    { label: 'Olopatadine 0.1% (Patanol) BD', answer: 'Dual-acting antihistamine + mast cell stabiliser — itch relief within minutes' },
                    { label: 'Sodium cromoglycate 2% QID', answer: 'Mast cell stabiliser only — needs ~1–2 weeks of regular use (preventive)' },
                    { label: 'Antazoline / naphazoline (e.g. Albalon-A)', answer: 'Antihistamine + vasoconstrictor — quick, short-term relief; rebound hyperaemia' },
                    { label: 'Fluorometholone 0.1% (FML)', answer: 'Mild corticosteroid — short pulses for severe flares only; monitor IOP' }
                ],
                explain: 'Other dual-acting options: ketotifen 0.025% (Zaditen) BD, azelastine 0.05% BD. Lodoxamide 0.1% QID is another mast-cell stabiliser. Vasoconstrictors: limit to a few days, avoid in narrow angles.',
                recall: 'Panels asked for brand names and challenged with “are you sure?” Know: Patanol = olopatadine 0.1%; Zaditen = ketotifen; Opticrom / Cromolux = sodium cromoglycate; Lomide = lodoxamide.'
            },
            {
                phase: '4. Management',
                type: 'viva',
                question: 'Run through your management and review.',
                points: [
                    'Allergen avoidance (wraparound sunglasses, shower and change after outdoors, pollen counts, wash bedding)',
                    'Cold compresses and refrigerated preservative-free lubricants (dilute and wash out allergens) — immediate relief',
                    'Dual-acting drop (e.g. olopatadine 0.1% BD) — start before the season where possible',
                    'Avoid rubbing (mast cell degranulation; keratoconus risk)',
                    'Short mild steroid pulse only if severe (with IOP checks)',
                    'GP / pharmacist for oral antihistamines and nasal steroid; allergist / immunotherapy for severe cases',
                    'Review in about 1–2 weeks (or sooner by phone if bad)'
                ],
                explain: 'Dual-acting agents are fine for regular seasonal use (check the product information for duration). Unlike steroids, they don\'t raise IOP or cause cataract.'
            }
        ]
    },
    {
        id: 'vkc-shield',
        category: 'allergy',
        title: 'VKC with a Shield Ulcer',
        theme: 'Vernal Keratoconjunctivitis',
        years: ['2019', '2025'],
        patient: '12-year-old boy, asthma and eczema.',
        stem: 'Intensely itchy eyes for years, worse in spring and summer. Now blurred and painful in the right eye, photophobic, with stringy mucus.',
        exhibit: 'Everted upper lids: giant cobblestone papillae. Gelatinous limbal nodules with white dots (Horner–Trantas). Right cornea: a superior oval epithelial defect with a translucent base (shield ulcer).',
        steps: [
            {
                phase: '1. Pathophysiology',
                type: 'mcq',
                question: 'What type of hypersensitivity is VKC, and what are Horner–Trantas dots?',
                options: [
                    'Type II (antibody-mediated cytotoxic) hypersensitivity only, like pemphigoid; Trantas dots are calcium deposits at the limbus that remain after each flare and slowly enlarge.',
                    'Type I (IgE/mast cell) plus type IV (Th2, eosinophil-mediated) hypersensitivity; Trantas dots are limbal clumps of degenerated eosinophils and epithelial cells.',
                    'Type III (immune-complex) hypersensitivity, like marginal keratitis; Trantas dots are lymphoid follicles at the superior limbus.',
                    'Type I hypersensitivity only, identical to SAC; Trantas dots are pigment clumps from limbal melanocytes that darken with sun exposure.'
                ],
                answer: 1,
                explain: 'Typical patient: boys aged ~5–20, warm and dry climates, atopy. It often resolves after puberty. Two forms: palpebral, limbal or mixed.'
            },
            {
                phase: '2. Shield ulcer',
                type: 'viva',
                question: 'How does a shield ulcer form, and how is it different from an infectious ulcer?',
                points: [
                    'Toxic eosinophil mediators (major basic protein) cause epithelial breakdown',
                    'Mechanical rubbing from giant papillae',
                    'A plaque (mucus, fibrin, inflammatory debris) on the base stops re-epithelialisation',
                    'Superior or central, oval / shield-shaped, sterile; little stromal infiltrate or AC reaction',
                    'Infectious ulcer: an active infiltrate with tissue destruction, AC reaction, purulence'
                ],
                explain: 'Cameron grading: grade 1 (clear base — heals well with medical treatment), grade 2 (translucent base), grade 3 (opaque, raised plaque — usually needs surgical debridement / superficial keratectomy ± amniotic membrane).'
            },
            {
                phase: '3. Treatment',
                type: 'mcq',
                question: 'What is your treatment plan?',
                options: [
                    'Olopatadine BD and cold compresses only: steroids are avoided in children with a corneal ulcer because of cataract and glaucoma risk, and antibiotics aren’t needed because shield ulcers are sterile; review in 2 weeks and refer if not healed.',
                    'Potent steroid pulse (prednisolone acetate, then taper) + prophylactic chloramphenicol until healed + dual-acting antihistamine + cold compresses; refer for debridement ± amniotic membrane if there is a plaque; close IOP checks.',
                    'Bandage CL and chloramphenicol QID until healed; add FML BD only if it hasn’t healed by 4 weeks; continue the dual-acting antihistamine; no referral needed, since debridement is reserved for adults with AKC.',
                    'Oral prednisolone via the GP plus oral antibiotics, since topical drops can’t reach under the plaque; stop the antihistamine drops; cold compresses; review in a week and refer if the ulcer is still open.'
                ],
                answer: 1,
                critical: true,
                explain: 'There <strong>is</strong> an epithelial defect, so antibiotic cover is essential. Shield ulcers heal slowly (often weeks) because the plaque blocks re-epithelialisation — unlike a simple abrasion or RCE, which heal within days. Children are high steroid responders, so check IOP often.',
                recall: 'A 2025 candidate forgot the prophylactic antibiotic until heavily prompted (“Do you expect an epithelial defect? So what do you do?”). They also said “1–2 weeks” for healing and got side-eye — plaque-based shield ulcers can take much longer without debridement.'
            },
            {
                phase: '4. Steroid MoA & contraindications',
                type: 'viva',
                question: 'What is the mechanism of action and what are the contraindications of topical corticosteroids?',
                points: [
                    'Bind glucocorticoid receptors → altered gene transcription; induce lipocortin (annexin-1) → inhibit phospholipase A2 → block arachidonic acid release',
                    'This blocks BOTH prostaglandin (COX) and leukotriene (LOX) pathways (NSAIDs only block COX); also reduce cytokines, cell migration, capillary permeability and fibroblast activity',
                    'Contraindicated: HSV epithelial keratitis, fungal or mycobacterial infection, untreated bacterial infection, varicella/vaccinia, hypersensitivity',
                    'Precautions: known steroid responder or glaucoma, children, thin or melting cornea, cataract risk, diabetes, delayed wound healing'
                ],
                explain: 'Examiners dug for the phospholipase A2 / arachidonic acid step and for <strong>infections</strong> as contraindications (HSV, fungus, untreated bacterial).',
                recall: 'A 2025 candidate answered MoA as “inhibits prostaglandin synthesis and keratocyte activity” — the examiner wanted the phospholipase A2 / lipocortin pathway.'
            },
            {
                phase: '5. Maintenance',
                type: 'mcq',
                question: 'The ulcer heals. Trantas dots keep recurring with mild symptoms. Long-term plan?',
                options: [
                    'Long-term dexamethasone 0.1% QID to suppress the Trantas dots, with IOP checks every 2 years; antihistamines add nothing once dots appear.',
                    'Year-round dual-acting antihistamine; short FML pulses for flares; specialist ciclosporin (e.g. Verkazia) or tacrolimus; allergen strategies; regular IOP checks.',
                    'Stop all drops between flares and treat each recurrence with a 6-month course of prednisolone acetate QID; ciclosporin is only for adults.',
                    'Oral prednisolone via the GP at a low dose indefinitely, plus a bandage CL during spring; all topical drops are stopped to avoid preservative toxicity and steroid response.'
                ],
                answer: 1,
                explain: 'Avoid long-term potent steroids (steroid glaucoma and cataract). See the “Steroid response in a teenager” case for what goes wrong.'
            }
        ]
    },
    {
        id: 'dry-eye',
        category: 'allergy',
        title: 'Dry Eye Work-up & Ciclosporin',
        theme: 'Dry Eye Disease',
        years: ['2019', '2025'],
        patient: '58-year-old woman.',
        stem: '“Both my eyes feel gritty and irritated, worse at the end of the day and on screens.”',
        steps: [
            {
                phase: '1. History',
                type: 'viva',
                question: 'What do you ask, and why?',
                points: [
                    'Symptom questionnaire (OSDI or DEQ-5) to quantify severity',
                    'Timing (end of day = evaporative; morning = lagophthalmos / exposure, blepharitis)',
                    'Screen use, environment, CL wear',
                    'Medications: antihistamines, antidepressants, isotretinoin, diuretics, HRT, glaucoma drops (BAK)',
                    'Systemic: Sjögren\'s (dry mouth), RA, thyroid eye disease, rosacea, menopause, diabetes, previous refractive surgery',
                    'Itch (allergy) vs burning; discharge (infection); unilateral (other pathology)'
                ],
                explain: 'Differentials: blepharitis / MGD, allergic conjunctivitis, conjunctivochalasis, exposure, toxic keratopathy, superior limbic keratoconjunctivitis.'
            },
            {
                phase: '2. Diagnosis',
                type: 'mcq',
                question: 'TFOS DEWS II diagnostic approach?',
                options: [
                    'Symptoms (OSDI ≥33 or DEQ-5 ≥12) plus all three homeostasis markers: Schirmer under 5 mm, fluorescein BUT under 5 s and positive staining. Subtyping isn’t part of DEWS II and is left to specialists.',
                    'Symptoms (OSDI ≥13 or DEQ-5 ≥6) plus one homeostasis marker: NIBUT under 10 s, raised or asymmetric osmolarity, or ocular surface staining. Then subtype (meibography, meniscus, Schirmer).',
                    'A Schirmer test under 10 mm alone is diagnostic; symptoms are excluded because they correlate poorly with signs. Then treat with lubricants before any further subtyping.',
                    'Symptoms alone (any OSDI score) are enough; homeostasis markers are only used to grade severity. Then subtype by meibography, with osmolarity reserved for research.'
                ],
                answer: 1,
                explain: 'TFOS DEWS III (2025) builds on this — worth a skim if your examiner loves dry eye (recalls suggest some do).'
            },
            {
                phase: '3. Stepped management',
                type: 'viva',
                question: 'Outline stepped management.',
                points: [
                    'Education, environment, screen breaks, blink exercises',
                    'Lubricants — preservative-free if used more than ~4–6 times a day; lipid-based for evaporative',
                    'Lid hygiene, warm compresses, treat MGD / blepharitis',
                    'Omega-3 (evidence mixed — DREAM study negative)',
                    'Punctal plugs for aqueous deficiency (after controlling inflammation)',
                    'Short pulse of a mild topical steroid (FML / loteprednol, 2–4 weeks) for inflammatory flares',
                    'Topical ciclosporin for chronic inflammatory disease; IPL / thermal pulsation for MGD; autologous serum (specialist)'
                ],
                explain: 'Steroids help dry eye by breaking the inflammatory vicious circle (cytokines, MMP-9, T-cell activation) that damages the surface and goblet cells. Use short pulses only.'
            },
            {
                phase: '4. Ciclosporin',
                type: 'mcq',
                question: 'You prescribe ciclosporin 0.1% cationic emulsion (Ikervis). Which counselling is correct?',
                options: [
                    'One drop twice daily, morning and night; a corticosteroid (blocks phospholipase A2); works within 48 hours (symptoms improve before signs); any burning means allergy, so stop it straight away.',
                    'One drop once daily at bedtime; a calcineurin inhibitor (blocks T-cell activation/IL-2); builds over 1–3+ months (signs before symptoms); burning is common at first; space 15 min from other drops.',
                    'One drop as needed for flares only; a mast-cell stabiliser (blocks histamine release); works within minutes; insert with the eye closed at the inner canthus so it seeps in slowly.',
                    'One drop once daily in the morning; an NSAID (blocks cyclo-oxygenase); full effect after a week; it can be used with contact lenses in and needs no gap from other drops.'
                ],
                answer: 1,
                explain: 'Ikervis (0.1% cationic emulsion) is dosed once daily at bedtime. Some other ciclosporin products are BD. Expect slow onset, so set expectations to improve adherence.',
                recall: 'A 2025 candidate guessed “morning and night” for ciclosporin and said drops were instilled “closed eye in punctal area”. Ikervis is <strong>once daily at bedtime</strong>, instilled normally into the lower fornix (then gentle lid closure / punctal pressure).'
            }
        ]
    },
    {
        id: 'blepharitis',
        category: 'allergy',
        title: 'Anterior Blepharitis & Demodex',
        theme: 'Blepharitis',
        years: ['2019', '2025'],
        patient: '62-year-old man.',
        stem: 'Itchy, crusty lids, worse in the morning, for months.',
        exhibit: 'Lid margins: hyperaemia, telangiectasia, scaling. Cuffs of waxy, sleeve-like material at the base of many lashes.',
        steps: [
            {
                phase: '1. Staph vs Demodex',
                type: 'mcq',
                question: 'How do you tell Demodex blepharitis from staphylococcal blepharitis?',
                options: [
                    'Demodex: hard brittle scales with lid-margin ulceration and marginal keratitis; confirm by culture of the lid margin. Staph: cylindrical sleeves hugging the lash base and intense itch; confirm by epilating a lash.',
                    'Demodex: cylindrical dandruff (sleeves at the lash base), itch, lash loss; confirm by epilating or rotating a lash. Staph: hard scales or ring collarettes, ulceration, madarosis, marginal keratitis, phlyctenules.',
                    'Demodex: greasy foamy tears, capped meibomian glands and chalazia; confirm with meibography. Staph: cylindrical dandruff and lash loss; confirm by a positive Schirmer test.',
                    'They can only be told apart by lid-margin swabs: both give identical crusting, itch and collarettes, so treat both with oral doxycycline until the swab result is back.'
                ],
                answer: 1,
                explain: 'Rotating a lash with forceps can draw mites out to the base. Both can coexist with MGD and rosacea.'
            },
            {
                phase: '2. Treatment',
                type: 'viva',
                question: 'How would you treat each?',
                points: [
                    'Lid hygiene (commercial lid scrubs / foams), warm compresses',
                    'Staph: chloramphenicol 1% ointment rubbed into the lid margins with a cotton bud BD–TDS for ~1–2 weeks (or at night)',
                    'Demodex: tea tree oil–derived (terpinen-4-ol) lid products for ~6 weeks (mite life cycle about 2–3 weeks); treat partners and bedding; lotilaner 0.25% where available (US-approved — check TGA status)',
                    'Treat MGD and rosacea (the GP may prescribe oral doxycycline)',
                    'Review in about 4–6 weeks; this is chronic control, not a cure'
                ],
                explain: 'If Sterilid / lid scrubs alone don\'t work → add the antibiotic ointment (Staph) or a tea tree oil product (Demodex), and look for MGD.',
                recall: 'A 2025 candidate initially said to apply chloramphenicol ointment to the lower fornix. For blepharitis, apply it <strong>to the lid margins</strong> (e.g. with a cotton bud).'
            },
            {
                phase: '3. Alternatives',
                type: 'mcq',
                question: 'If chloramphenicol is contraindicated (e.g. personal or family history of blood dyscrasia), what topical ointment can you use, and how does it differ?',
                options: [
                    'Tobramycin 0.3% ointment — an aminoglycoside binding the 30S subunit (bactericidal, mainly Gram-negative but active against Staph). Chloramphenicol binds 50S and is bacteriostatic.',
                    'Natamycin 5% ointment — a polyene binding the 50S subunit (bactericidal against Staph). Chloramphenicol binds the 30S subunit and is bactericidal.',
                    'Aciclovir 3% ointment — a nucleoside analogue that is also bactericidal against Staph. Chloramphenicol inhibits DNA gyrase and is bacteriostatic.',
                    'Ciprofloxacin ointment — a fluoroquinolone binding the 50S subunit (bacteriostatic, Gram-positive only), so it covers Staph well. Chloramphenicol binds DNA gyrase and is bactericidal.'
                ],
                answer: 0,
                explain: 'Framycetin (an aminoglycoside) or fusidic acid have been used where available — check what is currently on the market in Australia. Chloramphenicol is TGA category A, broad-spectrum and cheap.'
            }
        ]
    },
    {
        id: 'contact-dermatitis',
        category: 'allergy',
        title: 'Swollen Lids: Contact Dermatitis',
        theme: 'Eyelid Inflammation',
        years: ['2019'],
        patient: '45-year-old woman.',
        stem: 'Both upper and lower lids are red, swollen and itchy, with flaky skin. The eyes are a little watery.',
        exhibit: 'Bilateral eczematous lid skin with scaling and mild crusting; mildly injected conjunctiva; no lid tenderness or warmth.',
        steps: [
            {
                phase: '1. History',
                type: 'mcq',
                question: 'Which history question is most useful, in patient-friendly language?',
                options: [
                    '“Have there been any changes in your environment, home or workplace, or exposures to new allergens recently?”',
                    '“Have you started any new face creams, make-up, eye drops, hair dye or nail polish in the last few weeks?”',
                    '“Which preservatives and ingredients are in the moisturiser and cosmetics you use?”',
                    '“Have you had a fever, a sore throat, or been around anyone with a red, sticky eye?”'
                ],
                answer: 1,
                explain: 'Common culprits: cosmetics, nail polish (transferred by touching the face), preservatives (BAK), neomycin, atropine, brimonidine, hair dye. Contact dermatitis is a type IV delayed reaction, so onset is 24–72 h after exposure.',
                recall: 'In 2019 “any change in environment” was not “lay” enough, and asking patients about ingredients wasn\'t useful — they won\'t know.'
            },
            {
                phase: '2. Differentials',
                type: 'mcq',
                question: 'What distinguishes this from preseptal cellulitis and acute allergic angioedema?',
                options: [
                    'Dermatitis: itchy, scaly eczematous skin, usually bilateral, non-tender, afebrile. Preseptal: unilateral, tender, warm, often from a stye or sinusitis. Angioedema: sudden boggy swelling, little skin change, may involve the airway.',
                    'Dermatitis: tender, warm and unilateral, often from a stye or sinusitis, with fever. Preseptal: itchy, scaly skin, usually bilateral, never tender. Angioedema: slow onset over weeks with marked scaling and crusting of both lids.',
                    'Dermatitis: sudden boggy swelling involving the lips and airway. Preseptal: bilateral and itchy with flaky skin. Angioedema: unilateral, tender and warm with fever, from sinusitis.',
                    'They can’t be told apart clinically: all three are usually bilateral and itchy, so all need oral antibiotics and steroids via the GP until a skin biopsy shows which it is, and any may involve the airway.'
                ],
                answer: 0,
                explain: 'Airway involvement with angioedema is an emergency (call 000).'
            },
            {
                phase: '3. Management',
                type: 'viva',
                question: 'Management?',
                points: [
                    'Identify and remove the allergen (stop the new product)',
                    'Cool compresses; bland emollient; avoid rubbing',
                    'Short course of a mild topical steroid to the lid skin (e.g. hydrocortisone 1% eye ointment) for a few days, avoiding prolonged use (thin skin)',
                    'Preservative-free lubricants; avoid unnecessary drops',
                    'Oral antihistamine for itch (pharmacy / GP)',
                    'GP / dermatologist for patch testing if recurrent'
                ],
                explain: 'Lid skin is thin and steroid-sensitive, so keep courses short and potencies low.'
            }
        ]
    },
    {
        id: 'preseptal',
        category: 'allergy',
        title: 'Hordeolum → Preseptal Cellulitis',
        theme: 'Periorbital Infection',
        years: ['2025'],
        patient: '30-year-old woman.',
        stem: 'A painful lump on the right upper lid 3 days ago; now the whole lid is red, swollen and tender.',
        exhibit: 'Diffuse right upper-lid erythema and swelling spreading from a pointing lesion at the lid margin. The eye opens; conjunctiva mildly injected.',
        steps: [
            {
                phase: '1. Orbital red flags',
                type: 'multi',
                question: 'Which findings would suggest ORBITAL (post-septal) cellulitis?',
                options: ['Reduced VA or colour vision', 'RAPD', 'Painful or restricted eye movements / diplopia', 'Proptosis', 'Chemosis', 'Fever and systemic illness', 'A tender lid lump only'],
                answers: [0, 1, 2, 3, 4, 5],
                explain: 'Orbital cellulitis is an emergency (ED for IV antibiotics and CT) — risks include optic nerve compression, cavernous sinus thrombosis and meningitis. Usually from ethmoid sinusitis, especially in children.'
            },
            {
                phase: '2. Treatment',
                type: 'mcq',
                question: 'No orbital signs, afebrile. Management?',
                options: [
                    'Topical chloramphenicol QID prescribed by you, warm compresses and analgesia; review in a week; oral antibiotics only if a fever develops, since topical drops penetrate the lid tissue well.',
                    'Oral antibiotics via the GP (e.g. amoxicillin–clavulanate; cefalexin if non-severe penicillin allergy), warm compresses, analgesia; review in 24–48 h; ED if it spreads or orbital signs appear.',
                    'Oral flucloxacillin plus oral prednisolone via the GP to settle the swelling quickly; review in a week; ED only if vision drops, since orbital spread is rare in adults.',
                    'IV antibiotics in ED for every preseptal cellulitis with CT orbits; warm compresses are avoided because heat spreads infection; review after discharge.'
                ],
                answer: 1,
                explain: 'Why oral rather than topical antibiotics? The infection is in the lid soft tissue deep to the skin, which topical drops don\'t reach. A topical antibiotic may be added for a draining hordeolum or conjunctivitis.',
                recall: 'A 2025 examiner asked “why are oral antibiotics better than topical here?” — tissue penetration.'
            },
            {
                phase: '3. Hordeolum alone',
                type: 'mcq',
                question: 'If it had been a simple external hordeolum without cellulitis?',
                options: [
                    'Oral antibiotics via the GP for every hordeolum to stop spread; cold compresses; most resolve in 3–4 days; incise it yourself at the slit lamp if it hasn’t drained.',
                    'Warm compresses and lid massage several times a day, lid hygiene; topical antibiotic only if draining or with conjunctivitis; most resolve in 1–2 weeks; refer if persistent.',
                    'Topical steroid–antibiotic combination QID and cold compresses; avoid massage (it spreads infection); most resolve in a month; refer for a steroid injection at 1 week.',
                    'IV antibiotics via ED if it is larger than 5 mm; warm compresses only once it has drained; most need surgical drainage; review in 2 days.'
                ],
                answer: 1,
                explain: 'Recurrent lesions in the same place in an older patient — consider sebaceous gland carcinoma and biopsy.'
            }
        ]
    }
);
