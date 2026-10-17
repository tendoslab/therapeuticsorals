// Cases from the undated "Oral therapeutics exam" recall (a candidate's two cases, written up after the oral).
window.CASES.push(
    {
        id: 'er-hzo-fiona',
        category: 'cornea',
        title: 'Vesicles on the Nose and a Staining Cornea',
        theme: 'Herpes Zoster Ophthalmicus',
        years: ['Exam recall'],
        patient: 'Elderly Caucasian woman, symptoms for 48 hours (Fiona’s anterior-eye case).',
        stem: 'Two photos: vesicles on the forehead and the tip of the nose, and a slit-lamp view of corneal staining.',
        steps: [
            {
                phase: '1. Differentials',
                type: 'multi',
                question: 'What are your differentials for the corneal staining?',
                options: [
                    'Herpes zoster (VZV) epithelial keratitis',
                    'Herpes simplex epithelial keratitis',
                    'Acanthamoeba keratitis',
                    'Bacterial (microbial) keratitis',
                    'Fungal keratitis',
                    'Fuchs’ endothelial dystrophy'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'The candidate listed the right five. The skin rash makes zoster the most likely: pseudodendrites are raised, “stuck-on” plaques with tapered ends that stain poorly, unlike the ulcerated, terminal-bulb dendrites of HSV.'
            },
            {
                phase: '2. Ocular involvement',
                type: 'mcq',
                question: 'How do you know the eye is likely to be involved, and which nerve explains it?',
                options: [
                    'Hutchinson’s sign: vesicles on the nasal tip mean the nasociliary branch of V1 is involved, and that branch also supplies the cornea.',
                    'Hutchinson’s sign: vesicles on the nasal tip mean the infratrochlear branch of V2 is involved, and that branch also supplies the iris.',
                    'Vesicles on the forehead mean the frontal branch of V1 is involved, and that branch also supplies the cornea and the ciliary body.',
                    'Vesicles crossing the midline mean both trigeminal nerves are involved, so the cornea of each eye is at risk and both need treating.'
                ],
                answer: 0,
                explain: 'The nasociliary nerve (V1) supplies the side and tip of the nose and, via the long ciliary nerves, the cornea. Zoster respects the midline; crossing it suggests HSV or another cause.'
            },
            {
                phase: '3. Management at 48 hours',
                type: 'mcq',
                question: 'She has had symptoms for 48 hours. What is your management?',
                options: [
                    'Contact the GP the same day for oral aciclovir 800 mg 5×/day for 7 days (or valaciclovir 1 g TDS or famciclovir 500 mg TDS), started within 72 h of the rash.',
                    'Contact the GP within the week for oral aciclovir 400 mg 5×/day for 7 days; topical aciclovir 3% 5×/day covers the cornea until the tablets start working.',
                    'Start topical aciclovir 3% 5×/day alone, since oral antivirals only help if they are started within 24 h of the rash appearing and she is now past that point.',
                    'Contact the GP the same day for oral aciclovir 500 mg QID for 7 days, plus prednisolone 1% QID straight away to protect the cornea from stromal keratitis.'
                ],
                answer: 0,
                critical: true,
                explain: 'Oral antivirals within 72 h of rash onset speed healing, reduce ocular complications and may reduce post-herpetic neuralgia. Topical antivirals don’t treat zoster. Add lubricants, cool compresses for the skin and pain relief.',
                recall: 'The candidate said 500 mg QID and knew it was wrong. Zoster needs high-dose aciclovir: 800 mg five times a day for 7 days. The alternative they gave, valaciclovir 1 g TDS for 7 days, is correct.'
            },
            {
                phase: '4. Review and other signs',
                type: 'viva',
                question: 'When will you review her, what do you expect, and what other ocular signs will you look for?',
                points: [
                    'Review within a few days while the rash is active (sooner if the cornea is involved), then at about 1 week, not only at the end of the antiviral course',
                    'Expect the skin to crust and the epithelial lesions to settle; check corneal sensation (often reduced, so a neurotrophic risk)',
                    'Look for pseudodendrites and punctate keratitis, nummular (anterior stromal) infiltrates, disciform keratitis',
                    'Anterior uveitis with raised IOP and sectoral iris atrophy; episcleritis or scleritis',
                    'Dilate: retinitis (acute retinal necrosis), optic neuritis; check eye movements for cranial nerve palsies',
                    'Late: neurotrophic keratopathy, exposure from lid scarring, post-herpetic neuralgia'
                ],
                explain: 'Ocular complications can appear weeks after the rash, so a single 7-day review is not enough. A candidate who answers “lesions? keratitis?” is showing the examiner they haven’t organised the list. Go front to back.'
            }
        ]
    },
    {
        id: 'er-pxf-anna',
        category: 'glaucoma',
        title: 'Retro-illumination of PXF: Asymmetric IOP 18 vs 10',
        theme: 'Pseudoexfoliation',
        years: ['Exam recall'],
        patient: 'Older patient (Anna’s glaucoma case).',
        stem: 'Retro-illumination photo: white flaky material on the pupil margin and the central anterior lens surface.',
        steps: [
            {
                phase: '1. Other signs',
                type: 'viva',
                question: 'Where else would you expect pseudoexfoliative material, and what other signs?',
                points: [
                    'Lens: central disc, clear zone, peripheral granular zone (best seen dilated)',
                    'Pupil margin flakes; peripupillary (sphincter-region) transillumination defects, moth-eaten pupil ruff',
                    'Patchy, irregular TM pigment and a Sampaolesi line on gonioscopy',
                    'Poor dilation, phacodonesis or weak zonules (a cataract-surgery risk), corneal endothelium flakes',
                    'Often asymmetric or unilateral, with higher IOP in the more affected eye'
                ],
                explain: 'The examiner pushed on how the TIDs and pigment differ from PDS: PXF TIDs are near the pupil margin; PDS gives mid-peripheral, slit-like radial TIDs.'
            },
            {
                phase: '2. PXF vs PDS pigment',
                type: 'match',
                question: 'Match each finding to PXF or PDS.',
                pairs: [
                    { label: 'Patchy, uneven TM pigment', answer: 'PXF' },
                    { label: 'Dense, homogeneous 360° TM pigment band', answer: 'PDS' },
                    { label: 'Peripupillary transillumination defects', answer: 'PXF' },
                    { label: 'Mid-peripheral radial slit-like transillumination defects', answer: 'PDS' },
                    { label: 'Older patient, often female, Scandinavian ancestry', answer: 'PXF' },
                    { label: 'Young myopic male, posterior iris bowing', answer: 'PDS' }
                ],
                explain: 'Why patchy in PXF? Pigment is released by the rubbing of the pupil margin on the rough lens surface and deposits unevenly with the flakes. In PDS the concave iris rubs the zonules evenly, so pigment is uniform.'
            },
            {
                phase: '3. Patient profile',
                type: 'mcq',
                question: 'The candidate said a typical PXF patient is a “frail elderly Caucasian female”. The examiner asked what “frail” meant. What is the better answer?',
                options: [
                    'Older age and Northern European ancestry, often female; PXF is a systemic elastic-fibre disorder linked to vascular disease and LOXL1 gene variants.',
                    'Older age and Northern European ancestry, often male; PXF is an autoimmune disorder linked to rheumatoid arthritis and HLA-B27 gene variants.',
                    'Older age and East Asian ancestry, often female; PXF is a pigment-cell disorder linked to myopia, lattice degeneration and retinal detachment.',
                    'Older age and African ancestry, often male; PXF is a degenerative disorder linked to diabetes, chronic steroid use and thin central corneas.'
                ],
                answer: 0,
                explain: 'Avoid vague descriptors like “frail”. PXF material is found in skin, heart, lung and blood vessels; associations reported include cardiovascular disease, hearing loss and abdominal aortic aneurysm. It is not an autoimmune disease.'
            },
            {
                phase: '4. Risk and IOP',
                type: 'viva',
                question: 'What work-up and what IOP plan? The PXF eye reads 18 mmHg and the other 10 mmHg, discs and fields normal. Would you treat?',
                points: [
                    'Full baseline: IOP, CCT, gonioscopy, stereo disc and RNFL, VF, OCT; check the fellow eye',
                    'Phase the IOP: PXF IOP swings widely, and a diurnal variation over ~10 mmHg is suspicious',
                    'An 8 mmHg asymmetry is a risk sign, but without disc, RNFL or field damage it is PXF, not PXG',
                    'Reasonable to watch closely (phasing, review about every 3–6 months) or to treat if IOP peaks are high or other risks add up; justify either',
                    'Know the numbers: PXG converts and progresses fast (EMGT untreated MD loss about −3 dB/year; PXF was the strongest progression risk)'
                ],
                explain: 'The examiner wanted a reasoned answer, not a reflex. Saying “borderline, so I’d phase the IOP and review closely” is defensible.',
                recall: 'The candidate quoted “30% chance of progressing to glaucoma (EMGT)” and was corrected to “25–50%”. Quoted figures vary by follow-up length: roughly 5% at 5 years and 15% at 10 years in population studies, rising to around half over a lifetime. Name the study and time frame when you quote one.'
            },
            {
                phase: '5. If you treat',
                type: 'viva',
                question: 'If you were to treat, what would you use, and what are the contraindications to β-blockers?',
                points: [
                    'Latanoprost 0.005% one drop at night in the affected eye (night dosing matches the trials and blunts the morning peak)',
                    'PGA contraindication: active uveitis; precautions: history of CMO, HSV keratitis, aphakia or a torn posterior capsule',
                    'SLT is a good first-line alternative and works well in PXF (heavy TM pigment)',
                    'Timolol contraindications: asthma, COPD, bradycardia, heart block, uncontrolled heart failure',
                    'β-blocker precautions: diabetes (masks hypoglycaemia), hypotension, myasthenia, concurrent systemic β-blocker, pregnancy and breastfeeding'
                ],
                explain: 'Refer within 4 months of starting glaucoma treatment under the OBA guideline. PXG is a secondary glaucoma, often better co-managed early with an ophthalmologist.',
                recall: 'The candidate said latanoprost “once in the morning”. Once daily works at either time, but give the standard answer (at night) unless you can explain the choice.'
            }
        ]
    }
);
