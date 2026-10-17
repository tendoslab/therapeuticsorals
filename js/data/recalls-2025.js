// Cases from the 2025 therapeutics orals recall (including the supplementary orals) that cover
// questions the combined topic cases didn't.
window.CASES.push(
    {
        id: 'r2025-hsv-to-bacterial',
        category: 'cornea',
        title: 'Dendritic Lesion That Worsens Overnight',
        theme: 'HSV → Bacterial Keratitis',
        years: ['2025'],
        patient: 'Adult with a painful red eye (Tuesday afternoon, Rebecca and Fiona).',
        stem: 'A blurry photo of a branching epithelial lesion.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'Give your differentials.',
                options: [
                    'HSV epithelial keratitis',
                    'Herpes zoster pseudodendrite',
                    'Healing abrasion',
                    'Acanthamoeba keratitis',
                    'Bacterial keratitis',
                    'Marginal (staphylococcal) keratitis'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Fuchs is an endothelial disease without an epithelial ulcer.'
            },
            {
                phase: '2. HSV treatment',
                type: 'mcq',
                question: 'If this is HSV, what is your treatment and why review the next day?',
                options: [
                    'Topical aciclovir 3% (or ganciclovir gel) 5×/day ± debridement and lubricants; review next day to catch any worsening early.',
                    'Topical aciclovir 3% 5×/day plus prednisolone 1% QID to limit scarring; review in 1 week once the antiviral has taken effect.',
                    'Oral aciclovir 400 mg 5×/day alone, avoiding topicals that could delay healing; review in 1 week to assess the dendrite size.',
                    'Chloramphenicol 0.5% QID to cover secondary infection while the HSV heals itself; review next day to confirm drop adherence.'
                ],
                answer: 0,
                explain: 'No steroid in active epithelial disease.'
            },
            {
                phase: '3. Next day: an infiltrate',
                type: 'mcq',
                question: 'Next day the symptoms are worse and there is a new infiltrate beside the lesion. What now?',
                options: [
                    'Suspect secondary bacterial keratitis: treat as bacterial (ciprofloxacin loading, cycloplegic), continue the antiviral if HSV is still likely, review in 24 h, refer if worse.',
                    'Suspect immune stromal keratitis: add prednisolone acetate 1% QID under aciclovir cover, continue the cycloplegic, review in 48 h, refer if the infiltrate is still enlarging.',
                    'Suspect aciclovir epithelial toxicity: stop the antiviral, switch to preservative-free lubricants and a bandage CL, review in 48 h, and refer if the infiltrate keeps growing.',
                    'Suspect a sterile marginal infiltrate: add a weak steroid (FML QID) to the antiviral, use cool compresses and lid hygiene, review in 1 week, and refer only if pain increases.'
                ],
                answer: 0,
                explain: 'A new infiltrate with worsening symptoms is infection until proven otherwise.'
            },
            {
                phase: '4. Bacterial management',
                type: 'mcq',
                question: 'If this were bacterial keratitis, how would you manage it?',
                options: [
                    'Ciprofloxacin 0.3% q15min for 6 h, q30min for the rest of the day, then taper by response; atropine 1% BD; review next day.',
                    'Chloramphenicol 0.5% hourly for 48 h, then QID for a week; homatropine 2% BD; add prednisolone at day 2 to limit scarring.',
                    'Ciprofloxacin 0.3% q2h while awake for 48 h, then QID; prednisolone 1% QID from day one; review in 3 days to check the scar.',
                    'Tobramycin 0.3% QID plus chloramphenicol ointment nocte; cyclopentolate 1% TDS; review in 1 week once the culture result is back.'
                ],
                answer: 0,
                explain: 'Ciprofloxacin covers Pseudomonas well.'
            }
        ]
    },
    {
        id: 'r2025-supp-aau',
        category: 'uveitis',
        title: 'Supplementary Oral: AAU Drugs and Rising IOP',
        theme: 'Acute Anterior Uveitis',
        years: ['2025'],
        patient: 'Adult with grade 3+ AC cells (Wednesday supplementary and Lily’s cases).',
        stem: 'Blurry photo: a constricted pupil and cells in the slit-lamp reflection; after dilation the pupil is very irregular.',
        steps: [
            {
                phase: '1. Why ask about recurrence?',
                type: 'mcq',
                question: '“You asked if this has happened before. Why?”',
                options: [
                    'Recurrent or bilateral episodes suggest a systemic association (e.g. HLA-B27) and change management: systemic work-up via the GP, possibly ophthalmology co-management.',
                    'Recurrent episodes suggest a steroid-induced IOP risk from past courses, so you would choose loteprednol over prednisolone and check IOP at every visit through the taper.',
                    'Recurrent episodes suggest an infective (herpetic) cause, so you would start oral aciclovir prophylaxis before any steroid and avoid a cycloplegic until it is excluded.',
                    'Recurrent episodes suggest the last course was tapered too fast, so you would treat it as a rebound and simply restart the previous steroid regimen without further work-up.'
                ],
                answer: 0,
                explain: 'Grade 3 cells aren’t expected in EKC; think AAU, HSV, trauma.'
            },
            {
                phase: '2. Dilate everyone?',
                type: 'mcq',
                question: '“Would you dilate every single uveitis patient?”',
                options: [
                    'Yes — to check for intermediate/posterior involvement (it also helps the synechiae), unless the angle is narrow/occludable or the drops are contraindicated.',
                    'No — only when there are floaters or reduced vision, since posterior involvement in HLA-B27 uveitis is always symptomatic and dilating risks a pressure spike.',
                    'No — wait until the AC cells have settled, since dilating an actively inflamed eye releases pigment and increases the risk of posterior synechiae forming.',
                    'Yes — but only with phenylephrine 2.5% alone, since tropicamide and cyclopentolate are contraindicated in an inflamed eye because they raise the IOP.'
                ],
                answer: 0,
                explain: 'A 2025 candidate said “don’t dilate because IOP will rise” in the first oral and was asked about it again in the supplementary.'
            },
            {
                phase: '3. Mechanisms',
                type: 'match',
                question: 'Match each mydriatic to its mechanism.',
                pairs: [
                    { label: 'Phenylephrine', answer: 'α1-agonist: contracts the iris dilator (no cycloplegia)' },
                    { label: 'Cyclopentolate', answer: 'Muscarinic antagonist: relaxes the sphincter and ciliary muscle (shorter acting)' },
                    { label: 'Atropine', answer: 'Muscarinic antagonist: relaxes the sphincter and ciliary muscle (long acting, 7–14 days)' }
                ],
                distractors: ['β-agonist: relaxes the dilator'],
                explain: 'Phenylephrine contraindications: hypertension and cardiovascular disease, MAOIs/TCAs, iris-fixated IOLs, narrow angles.'
            },
            {
                phase: '4. No Pred Forte',
                type: 'mcq',
                question: '“No Pred Forte — what then? No Flarex either?”',
                options: [
                    'Dexamethasone 0.1% (Maxidex): potent with good penetration, but a higher IOP risk.',
                    'FML 0.1% (fluorometholone): similar potency to Pred Forte, with a lower IOP risk.',
                    'Loteprednol 0.5% (Lotemax): equal to Pred Forte in AAU, with a lower IOP risk.',
                    'Hydrocortisone 0.5% (Hydrocortisone Sigma): good penetration, lower IOP risk.'
                ],
                answer: 0,
                explain: 'Potency/penetration: prednisolone acetate ≈ dexamethasone > fluorometholone acetate > FML > loteprednol/hydrocortisone.'
            },
            {
                phase: '5. IOP rises',
                type: 'mcq',
                question: 'Why review the next day, and when would an IOP rise prompt treatment?',
                options: [
                    'To confirm no worsening and check IOP (inflammatory or early steroid rise). Treat a rise of ~10 mmHg or IOP above ~25–30 (lower with disc damage) with an aqueous suppressant, keeping the steroid.',
                    'To confirm the cells are reducing before tapering. Treat any IOP above 21 mmHg by stopping the steroid and switching to a topical NSAID, since a steroid response worsens the longer it continues.',
                    'To check for a steroid response, which peaks in the first 24 h. Treat any IOP above 21 mmHg with latanoprost, since PGAs are the most effective agent and are safe once a steroid is on board.',
                    'To check the synechiae have broken. Leave raised IOP untreated unless it is over 40 mmHg, since inflammatory rises settle once the uveitis settles and treating them masks the response.'
                ],
                answer: 0,
                explain: 'Avoid PGAs during active uveitis.'
            },
            {
                phase: '6. Timolol isn’t enough',
                type: 'mcq',
                question: 'Timolol isn’t lowering the IOP enough. What next?',
                options: [
                    'Add a second agent (brimonidine or a topical CAI) or switch to a fixed combination with timolol; still avoid PGAs and pilocarpine in active uveitis; involve ophthalmology.',
                    'Add latanoprost nocte, since PGAs give the greatest IOP lowering and the uveitis risk only applies in herpetic disease; continue the steroid and review in 1 week.',
                    'Add pilocarpine 1% QID to increase trabecular outflow and stop timolol to avoid systemic effects; continue the steroid, review in 1 week, then involve ophthalmology.',
                    'Stop the steroid to remove any steroid response, keep timolol and add oral acetazolamide 250 mg QID for a month; involve ophthalmology if the IOP is still high.'
                ],
                answer: 0,
                explain: 'Timolol more often than BD adds systemic risk without extra effect.'
            },
            {
                phase: '7. NSAID or steroid',
                type: 'mcq',
                question: 'Fiona: “When would you prescribe a topical NSAID rather than a steroid, e.g. in collaborative care?”',
                options: [
                    'After cataract surgery (CMO prevention and post-op inflammation, with a steroid); NSAIDs are too weak to treat uveitis alone.',
                    'In steroid responders with mild AAU, since an NSAID controls the cells as well as prednisolone without the IOP rise.',
                    'In HSV stromal keratitis, since NSAIDs reduce the inflammation without the risk of reactivating epithelial disease.',
                    'In acute anterior uveitis with IOP above 30 mmHg, since NSAIDs settle the cells without adding a steroid-related pressure rise.'
                ],
                answer: 0,
                explain: 'Post-cataract drops: antibiotic, steroid ± NSAID.'
            }
        ]
    },
    {
        id: 'r2025-supp-pds',
        category: 'glaucoma',
        title: 'Supplementary Oral: Pigmented Angle — PDS or Recession?',
        theme: 'PDS / Angle Recession',
        years: ['2025'],
        patient: 'Young adult (Thursday supplementary, Angelica and Lily; Friday, Rebecca and Fiona).',
        stem: 'A gonioscopy image: heavily pigmented trabecular meshwork, possibly with angle recession.',
        steps: [
            {
                phase: '1. History',
                type: 'multi',
                question: 'Which history questions separate PDS from angle recession?',
                options: [
                    'Previous blunt trauma (sport, assault), even decades ago',
                    'Haloes or blur after exercise',
                    'Myopia',
                    'Previous hyphaema',
                    'Family history of glaucoma',
                    'Recent upper respiratory tract infection'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Recession is unilateral and traumatic; PDS is bilateral in young myopes.'
            },
            {
                phase: '2. Dusting or KPs?',
                type: 'mcq',
                question: 'Endothelial dusting: why is pigment there, and how do you tell it from KPs?',
                options: [
                    'Aqueous convection (warm near the iris rising, cool near the cornea falling) leaves pigment in a vertical Krukenberg spindle; pigment is fine and brown, KPs are cellular, whiter, often inferior.',
                    'Aqueous flow from the pupil sweeps pigment upward against the cornea, so it collects superiorly as a horizontal band; pigment is coarse and grey, KPs are flat, brown and clustered centrally.',
                    'Blinking presses the iris against the endothelium, leaving pigment in a diffuse central patch; pigment is raised and stains with fluorescein, KPs are flat and spread evenly across the cornea.',
                    'Gravity settles the pigment inferiorly in a triangular pattern (Arlt’s triangle), identical to KPs; pigment is distinguished only by a lack of AC flare and by its reaction to topical steroid.'
                ],
                answer: 0,
                explain: 'Convection currents explain the spindle shape.'
            },
            {
                phase: '3. IOP 35',
                type: 'mcq',
                question: 'IOP is 35 mmHg in PDS. What do you do?',
                options: [
                    'Start IOP lowering now (PGA if no contraindications), check discs and fields, review soon, and refer — pigmentary glaucoma can progress fast when active.',
                    'Repeat IOP at a different time of day before treating, since pigment release after exercise gives transient spikes; refer for LPI if the IOP is still high in 3 months.',
                    'Start pilocarpine 1% QID to reverse the iris concavity and stop pigment release, check discs and fields, and refer routinely since miotics treat the cause.',
                    'Refer for LPI first without starting drops, since flattening the iris stops the pigment release and the IOP falls; check the discs and fields after the laser.'
                ],
                answer: 0,
                explain: 'Avoid β-blockers in a young, active patient.'
            },
            {
                phase: '4. No drops',
                type: 'mcq',
                question: 'They can’t use drops. Rank the procedural options and explain how they work.',
                options: [
                    'SLT first (targets pigmented TM cells and triggers remodelling; use lower energy and check for a spike), then trabeculectomy or MIGS if needed; LPI is controversial.',
                    'LPI first (flattens the iris and stops pigment release, so the TM recovers), then SLT at standard energy if the IOP stays high, and trabeculectomy only as a last resort.',
                    'Trabeculectomy first (most reliable lowering in young myopes), then SLT at high energy to clear the pigment from the TM, with LPI reserved for plateau iris configuration.',
                    'Cataract surgery first (removes the lens–zonule contact causing pigment release), then SLT at higher energy, since pigmented TM absorbs less laser and needs more power.'
                ],
                answer: 0,
                explain: 'Pigmented angles absorb more laser energy, hence the spike risk.'
            }
        ]
    },
    {
        id: 'r2025-supp-angle-closure',
        category: 'glaucoma',
        title: 'Supplementary Oral: Acute vs Chronic Angle Closure',
        theme: 'Angle Closure',
        years: ['2025'],
        patient: 'Older adult with a red, oedematous eye (Thursday supplementary).',
        stem: 'Pain and redness since this morning. The ophthalmologist isn’t available for 2 hours.',
        steps: [
            {
                phase: '1. Acute vs chronic',
                type: 'mcq',
                question: 'What is the difference between acute and chronic angle closure?',
                options: [
                    'Acute: sudden very high IOP (40–60+) with pain, nausea, haloes, oedema and a mid-dilated pupil. Chronic: gradual synechial closure, moderately raised IOP, often painless, PAS and optic neuropathy.',
                    'Acute: appositional closure from plateau iris, with IOP in the 30s and mild ache but a clear cornea. Chronic: pupil block with repeated intermittent attacks, each with IOP above 50 and corneal oedema.',
                    'Acute: sudden closure with very high IOP, usually bilateral and needing immediate LPI to both eyes. Chronic: open-angle glaucoma with a narrow but open angle, normal IOP and no PAS on gonioscopy.',
                    'Acute: closure lasting under 24 hours that never causes disc damage, so it is managed by the optometrist alone. Chronic: closure lasting over 24 hours with oedema, needing referral to ophthalmology.'
                ],
                answer: 0,
                explain: 'Chronic disease is often discovered on routine gonioscopy.'
            },
            {
                phase: '2. Causes of chronic closure',
                type: 'multi',
                question: 'Causes of chronic angle closure?',
                options: [
                    'Recurrent appositional closure (pupil block) forming PAS',
                    'Plateau iris',
                    'Lens-related crowding (cataract)',
                    'PAS after uveitis or a previous acute attack',
                    'Neovascular membrane',
                    'Pigment dispersion syndrome'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'PDS has deep, open angles.'
            },
            {
                phase: '3. First aid errors',
                type: 'mcq',
                question: 'The candidate gave “brimonidine 0.5%, pilocarpine 2.5% and atropine for pain”. What’s wrong?',
                options: [
                    'Brimonidine is 0.2% (apraclonidine is 0.5%), pilocarpine comes as 1%, 2% or 4%, and atropine is contraindicated (it worsens closure).',
                    'Brimonidine is 0.15% (0.5% is the glaucoma strength), pilocarpine 2.5% should be 4% for AAC, and atropine is fine for pain once IOP falls.',
                    'The concentrations are right, but brimonidine is contraindicated in AAC (it dilates the pupil) and atropine should be homatropine 2% for pain.',
                    'Pilocarpine 2.5% should be 1% for AAC and brimonidine 0.5% is correct; atropine is fine once the IOP is below 30 mmHg to relieve ciliary spasm.'
                ],
                answer: 0,
                explain: 'Oral analgesia (paracetamol, ibuprofen) and antiemetics via a doctor are fine.'
            },
            {
                phase: '4. Two hours to wait',
                type: 'mcq',
                question: '“The ophthalmologist isn’t available for 2 hours.” What do you do?',
                options: [
                    'Continue first aid with repeated IOP checks; contact ED or the on-call registrar (or GP) for acetazolamide; consider pilocarpine once IOP is below ~40 if pupil block is likely; arrange transfer.',
                    'Give pilocarpine 2% every 5 minutes for an hour to force the pupil small, then latanoprost and timolol; recheck IOP after 2 hours and refer routinely if it has fallen below 30 mmHg.',
                    'Continue first aid and give the patient oral glycerol from your practice; if the IOP has not fallen in 2 hours, start topical prednisolone hourly to reduce the inflammation before transfer.',
                    'Continue first aid, then send the patient home lying supine to deepen the angle and ask them to return in 2 hours; transfer only if pain or vomiting returns before the ophthalmologist is free.'
                ],
                answer: 0,
                explain: 'Document the times and IOPs.'
            }
        ]
    },
    {
        id: 'r2025-shield-akc',
        category: 'allergy',
        title: 'Shield Ulcer Differentials and AKC',
        theme: 'AKC / VKC',
        years: ['2025'],
        patient: 'Atopic patient (Wednesday morning, Lily).',
        stem: '“Shield ulcer — differentials? Not just VKC — what else?”',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'Which conditions can produce a shield ulcer?',
                options: [
                    'Vernal keratoconjunctivitis',
                    'Atopic keratoconjunctivitis',
                    'Severe GPC (rarely)',
                    'Seasonal allergic conjunctivitis',
                    'Adenoviral keratoconjunctivitis'
                ],
                answers: [0, 1, 2],
                explain: 'SAC doesn’t involve the cornea.'
            },
            {
                phase: '2. AKC corneal signs',
                type: 'multi',
                question: 'Which corneal signs occur in AKC?',
                options: [
                    'Punctate epithelial erosions, persistent epithelial defects',
                    'Corneal neovascularisation and scarring',
                    'Shield ulcer / plaque',
                    'Keratoconus (rubbing)',
                    'Higher risk of HSV keratitis',
                    'Terrien marginal degeneration'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Candidates forgot neovascularisation.'
            },
            {
                phase: '3. Mast-cell stabilisers',
                type: 'mcq',
                question: '“What is the onset of mast-cell stabilisers?”',
                options: [
                    'Slow: about 1–2 weeks of regular use for full effect (preventive), unlike dual-acting antihistamines, which relieve itch within minutes.',
                    'Fast: within 15–30 minutes, similar to antihistamines, but the effect only lasts 2 hours so they must be used up to six times a day.',
                    'Moderate: about 2–3 days of regular use, after which they relieve itch as quickly as antihistamines and can then be used as needed.',
                    'Variable: about 4–6 weeks of use before any effect, so they are only started at the end of the season to prevent the next year’s flare.'
                ],
                answer: 0,
                explain: 'Start before the season.'
            },
            {
                phase: '4. Combination drops',
                type: 'mcq',
                question: 'A candidate said dual-acting drops can be used for a maximum of “14 weeks”. What should you say?',
                options: [
                    'Duration limits come from the product information (e.g. trial durations), so check the PI for the specific product; dual-acting drops don’t raise IOP and can be used through the season.',
                    'That is correct: dual-acting drops are TGA-limited to 14 weeks because longer use causes corneal epithelial toxicity, so switch to a mast-cell stabiliser after that and recheck the cornea.',
                    'It is 14 days, not weeks: like vasoconstrictors, dual-acting drops cause rebound hyperaemia with longer use, so after two weeks switch to a short pulse of a soft steroid such as FML.',
                    'There is no limit for any allergy drop because none are absorbed systemically; the only drops with duration limits are the steroids, and these depend on the IOP rather than the PI.'
                ],
                answer: 0,
                explain: 'Vasoconstrictors (e.g. naphazoline) are the ones to limit to a few days.'
            }
        ]
    }
);
