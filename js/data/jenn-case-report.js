// Jenn's case report: idiopathic recurrent acute anterior uveitis (AAU), marked 90/100.
// Built like my-case-report.js: the questions follow the marker's comments, which `marker` quotes.
// Source: Case Report/Idiopathic Recurrent Acute Anterior Uveitis Anterior Case Report Jennifer Lo.pdf.pdf (Jennifer Lo).
window.CASES.push(
    {
        id: 'jenn-report-aau-diagnosis',
        category: 'uveitis',
        markerOf: 'Jenn’s case report',
        title: 'Jenn’s Case Report: Idiopathic Recurrent AAU (History, Findings & Diagnosis)',
        theme: 'Recurrent anterior uveitis (case report)',
        years: ['Jenn case report'],
        patient: 'JS, 46-year-old Caucasian man. High cholesterol on fenofibrate; tennis elbow. Right corneal abrasion 2024, pavingstone degeneration OU. No CL wear, surgery, trauma or allergies. No relevant family history.',
        stem: 'Three days of a red, tender right eye with watering and photophobia. In September 2025 the same eye had AAU (G3 cells, G1 flare): an ophthalmologist excluded posterior disease and handed back to optometry; Pred Forte q1h plus atropine; an early taper had to be re-escalated; AC quiet by day 56; treatment stopped 11 November 2025. The GP found no systemic cause. Symptoms returned on 20 February 2026, 101 days after treatment ended.',
        steps: [
            {
                phase: '1. History',
                type: 'viva',
                question: '“What do you need to ask a patient with a second episode of anterior uveitis?”',
                points: [
                    'Back pain and morning stiffness (ankylosing spondylitis), other joint pain or swelling',
                    'Bowel symptoms (IBD), psoriasis or other rashes, mouth or genital ulcers, urethritis or a recent gut or genital infection (reactive arthritis)',
                    'Cough, breathlessness, TB exposure or travel (sarcoid, TB); sexual history and rashes (syphilis)',
                    'Cold sores or shingles, and whether the IOP was high in the first episode (herpetic uveitis)',
                    'All medicines (some, e.g. bisphosphonates and checkpoint inhibitors, cause uveitis), and the first episode’s drops, taper and how he followed it',
                    'Which eye each time, how long it took to settle, and what bloods the GP did'
                ],
                explain: 'Jenn did a full review of systems: no back, gut, urinary, skin or respiratory symptoms, and the elbow pain was put down to tennis elbow. Recurrent AAU in a man in his 40s should make you think of HLA-B27 disease first, which is why the back and gut questions lead.',
                marker: 'Case history: “Good.”'
            },
            {
                phase: '2. Findings',
                type: 'reveal',
                text: 'VA R 6/7.5−1, L 6/6−1. Pain 1/10 on upgaze RE. Pupils PERRL, no RAPD. Fields full. IOP (NCT) R 10, L 11 mmHg. Right: G4 conjunctival hyperaemia; cornea clear, no KPs; VH grade 3; AC cells G3, flare G0 (SUN); small posterior synechiae superiorly; lens clear. Left: G2 hyperaemia, quiet AC, focal brown iris pigment temporally. OCT macula, ganglion cell layers and RNFL normal OU; no posterior involvement after dilation.',
                exhibit: 'Slit-lamp view, right eye: circumcorneal redness, many cells floating in the aqueous in the slit beam, and two small adhesions holding the pupil margin to the lens at 12 o’clock.'
            },
            {
                phase: '3. Classification',
                type: 'mcq',
                question: '“How do you classify his uveitis, and why ‘recurrent’ rather than ‘chronic’?”',
                options: [
                    'Acute, recurrent, non-granulomatous anterior uveitis: sudden onset and limited duration, with more than 3 months off all treatment between episodes (SUN). Chronic means relapse within 3 months of stopping.',
                    'Chronic anterior uveitis: any uveitis that has happened twice is chronic by definition, whatever the gap between episodes, so the second episode makes it chronic and it can no longer be called acute.',
                    'Recurrent intermediate uveitis: the first episode had possible vitritis, so under the SUN criteria the whole course is reclassified as intermediate, even though the second episode had no vitreous cells.',
                    'Acute granulomatous anterior uveitis: posterior synechiae only form in granulomatous disease, so their presence is enough to call it granulomatous even when there are no mutton-fat KPs or iris nodules.'
                ],
                answer: 0,
                explain: 'SUN: acute = sudden onset, limited duration (≤3 months); recurrent = repeated episodes separated by ≥3 months of inactivity off treatment; chronic = persistent, relapsing within 3 months of stopping. JS’s gap was 101 days (3.3 months), so recurrent. Synechiae are common in non-granulomatous AAU.',
                marker: 'Diagnosis 20/20: “Well written and discussed.”'
            },
            {
                phase: '4. Posner-Schlossman',
                type: 'mcq',
                question: '“Your marker said you missed Posner-Schlossman syndrome. What is it, and why isn’t it JS?”',
                options: [
                    'Recurrent one-sided attacks of very high IOP (often 40–60 mmHg) with a mild AC reaction, a few fine KPs, little pain or redness and no synechiae (often CMV). JS had IOP 9–11, G3 cells and synechiae.',
                    'Recurrent bilateral granulomatous uveitis with mutton-fat KPs and iris nodules, usually from sarcoidosis. It is ruled out in JS because his chest X-ray and ACE were normal and his uveitis was one-sided.',
                    'Recurrent uveitis with a hypopyon that shifts with head position, from Behçet’s disease. It is ruled out in JS because he had no hypopyon, no mouth ulcers and no skin lesions on the review of systems.',
                    'Recurrent painless uveitis with iris heterochromia, stellate KPs and cataract, from rubella. It is ruled out in JS because he had no heterochromia in the right eye and his lenses stayed clear at every visit.'
                ],
                answer: 0,
                explain: 'Posner-Schlossman (glaucomatocyclitic crisis) belongs in any recurrent unilateral AU differential, and a raised IOP during the attack is the clue. JS’s low-normal IOP in an inflamed eye (ciliary body hyposecretion) argues strongly against it. The last option describes Fuchs uveitis, which Jenn did discuss.',
                marker: 'Differentials 15/20: “Posner Schlossman is another differential not mentioned. Otherwise good.”'
            },
            {
                phase: '5. Differentials',
                type: 'match',
                question: 'Match each differential to the finding that argues against it in JS.',
                pairs: [
                    { label: 'HLA-B27 associated AAU', answer: 'HLA-B27 negative, no back, gut or skin disease' },
                    { label: 'Herpetic (HSV/VZV/CMV) anterior uveitis', answer: 'IOP 9–11 mmHg and no iris atrophy or transillumination' },
                    { label: 'Fuchs uveitis syndrome', answer: 'Painful, red and photophobic, with no heterochromia' },
                    { label: 'Intermediate uveitis', answer: 'No vitreous cells or haze this episode' },
                    { label: 'Acute angle closure', answer: 'VH grade 3 and a low IOP' },
                    { label: 'Bacterial keratitis', answer: 'Clear cornea with no infiltrate or epithelial defect' }
                ],
                distractors: ['A clear zone between the infiltrate and the limbus'],
                explain: 'Jenn’s table also excluded episcleritis (no AC reaction expected), posterior and traumatic uveitis. Herpetic uveitis matters most before a steroid: raised IOP, sectoral iris atrophy, corneal scarring or reduced sensation all point to it.'
            },
            {
                phase: '6. Work-up',
                type: 'multi',
                question: '“Which investigations are reasonable for recurrent unilateral non-granulomatous AAU?” Select all that apply.',
                options: [
                    'HLA-B27',
                    'Syphilis serology',
                    'Chest X-ray and serum ACE (sarcoidosis), with TB testing (e.g. QuantiFERON) if there is any risk',
                    'FBC, ESR and CRP',
                    'An anterior chamber tap for PCR at the first visit, in every patient',
                    'MRI of the brain and spine to look for multiple sclerosis in every patient'
                ],
                answers: [0, 1, 2, 3],
                explain: 'A first, typical, unilateral non-granulomatous AAU often needs no tests; a recurrence, bilateral or granulomatous disease, or any systemic symptoms do. Syphilis is tested in everyone because it can mimic anything. AC taps are for suspected viral or atypical uveitis, and MRI only when symptoms or intermediate uveitis suggest MS. ANA and RF add little in an adult without symptoms. The optometrist arranges this through the GP.'
            },
            {
                phase: '7. Raised eosinophils',
                type: 'mcq',
                question: '“The GP only found raised eosinophils. What do you make of that?”',
                options: [
                    'Probably not related: eosinophilia is non-specific (allergy, atopy, parasites, drugs). It doesn’t explain AAU, so the label stays idiopathic, a diagnosis of exclusion to revisit if anything systemic turns up.',
                    'It confirms toxocariasis as the cause, so the diagnosis must be changed to parasitic uveitis and the steroid stopped at once, because a steroid will spread the larvae from the anterior chamber into the retina.',
                    'It proves the uveitis is HLA-B27 positive despite the negative blood test, because eosinophils only rise in spondyloarthropathies, so he should be referred to a rheumatologist for biologics this week.',
                    'It shows he is allergic to Pred Forte, so the steroid should be switched to dexamethasone minims straight away and the eosinophil count rechecked before any further drops are put in the right eye.'
                ],
                answer: 0,
                explain: 'Jenn called it “of uncertain significance”, which is right. Ocular toxocariasis is a posterior (retinal granuloma) disease of children, and an allergy to the drop would show as a contact reaction on the lids and conjunctiva, not in the blood count.'
            },
            {
                phase: '8. Pathophysiology',
                type: 'viva',
                question: '“Tell us about the epidemiology and pathophysiology of anterior uveitis.”',
                points: [
                    'Anterior uveitis is the most common type (about 50% generally; about 75% in a Melbourne tertiary series)',
                    'About 80% of anterior uveitis is acute; most often adults aged 20–50',
                    'A large share stays idiopathic after work-up (38–88% in different series); HLA-B27 is the commonest known association',
                    'Incidence about 52 per 100,000 person-years (US population study)',
                    'Breakdown of the blood–aqueous barrier lets activated T cells in; cells, protein and fibrin enter the aqueous',
                    'Fibrin and inflammation make the iris stick to the lens: posterior synechiae'
                ],
                explain: 'Uveitis causes 10–15% of blindness in developed countries, mostly from complications (cataract, glaucoma, CMO), which is why control and monitoring matter. Why idiopathic AAU recurs isn’t known.',
                marker: 'Rubric: diagnosis 20/20, differentials 15/20, management 20/20, prognosis 20/20, literature 15/20; overall 90/100.'
            }
        ]
    },
    {
        id: 'jenn-report-aau-management',
        category: 'uveitis',
        markerOf: 'Jenn’s case report',
        title: 'Jenn’s Case Report: Idiopathic Recurrent AAU (Management & Prognosis)',
        theme: 'Recurrent anterior uveitis (case report)',
        years: ['Jenn case report'],
        patient: 'Same patient: JS, 46M, second episode of right AAU. VA R 6/7.5−1. AC G3 cells, G0 flare. Small superior posterior synechiae. IOP R 10, L 11 mmHg. VH grade 3. Fundus normal.',
        stem: 'Jenn’s plan at presentation: atropine 1% one drop RE in the practice; Pred Forte 1% (prednisolone acetate) q1h RE; GP for a full systemic work-up; review in 48 hours.',
        steps: [
            {
                phase: '1. Safety check',
                type: 'mcq',
                critical: true,
                question: '“Before you start an hourly steroid, what must you have checked?”',
                options: [
                    'That it isn’t infective: no epithelial defect, dendrite or infiltrate; no herpetic signs (high IOP, sectoral iris atrophy, scarring); a dilated fundus free of posterior disease; and a baseline IOP.',
                    'That his cholesterol is controlled, because a topical steroid raises blood cholesterol within days and fenofibrate stops working, so his GP must recheck the lipids before the first drop is put in.',
                    'That he has never had a corneal abrasion, because a steroid is contraindicated for life in any eye with a past abrasion and the right eye would have to be treated with an NSAID drop instead.',
                    'That the HLA-B27 result is back, because a steroid given before the result is known can turn a positive test negative and leave the cause of the uveitis undiagnosed for good.'
                ],
                answer: 0,
                explain: 'The red flags before a steroid are infective keratitis or uveitis (HSV, VZV, CMV, toxoplasma, syphilis, TB) and missed posterior disease. Jenn dilated, did OCT and found nothing posterior, and the cornea was clear. Don’t wait for bloods to treat a G3 AC.'
            },
            {
                phase: '2. Which steroid',
                type: 'mcq',
                question: '“Why Pred Forte hourly, and not FML?”',
                options: [
                    'G3 cells with synechiae need a potent steroid that penetrates well: prednisolone acetate 1%, hourly (a loading phase) until the AC settles. FML is too weak for most AAU; dexamethasone minims suit preservative sensitivity.',
                    'FML can’t be used in men over 40 because of the risk of prostate problems, while prednisolone acetate is safe at every age, so Pred Forte is the only steroid that could be used for a 46-year-old patient.',
                    'Pred Forte is a solution that needs no shaking, so the patient gets the same dose each time, while FML is a suspension that settles in the bottle and gives unreliable doses unless it is shaken for a full minute.',
                    'Hourly dosing is needed only because prednisolone acetate wears off in 60 minutes; FML lasts 12 hours, so it would be used twice a day instead but it costs too much because it isn’t on the PBS.'
                ],
                answer: 0,
                explain: 'Pred Forte is a suspension too: shake it well. Potency should match the severity: hourly prednisolone acetate 1% for moderate–severe AAU, with a 2-hourly to QID start for milder cases. FML is mostly for surface disease and mild AU.',
                marker: 'Management 20/20: “Thorough.”'
            },
            {
                phase: '3. Cycloplegia',
                type: 'mcq',
                question: '“Why atropine, and would you send him home with a cycloplegic?”',
                options: [
                    'It eases ciliary spasm pain and dilates the pupil to break and prevent synechiae. One drop of atropine lasts 1–2 weeks; a home drop such as homatropine 2% BD–TDS or cyclopentolate 1% TDS is a reasonable alternative.',
                    'Atropine lowers the IOP by opening the trabecular meshwork, so it is needed in every uveitis to stop a steroid response; a home cycloplegic should never be given because it causes angle closure in every patient.',
                    'Atropine kills the inflammatory cells in the anterior chamber, so it is the main treatment and the steroid is only added for comfort; one drop is enough because the cells are cleared within 24 hours.',
                    'Atropine is used to test for a hidden RAPD before the steroid starts; it has no treatment role, so a home cycloplegic would not help the synechiae, and the steroid on its own will break them within the week.'
                ],
                answer: 0,
                explain: 'Check the angle before any cycloplegic (VH grade 3 here). Atropine is long-acting, which is useful when compliance is uncertain but also blurs vision for up to 2 weeks. The synechiae were gone by day 8.'
            },
            {
                phase: '4. Reviews',
                type: 'reveal',
                text: 'Day 2: pain gone, mild photophobia; misses some hourly doses, doesn’t dose overnight. VA R 6/7.5+1. AC G2 cells, G0 flare; synechiae still present. IOP R 10. Continue q1h. Day 8: right eye slightly blurry; no redness or photophobia. VA R 6/18. AC G1 cells; synechiae resolved. IOP R 10. OCT macula flat, no posterior inflammation. Continue q1h; repeat bloods with GP.'
            },
            {
                phase: '5. VA 6/18',
                type: 'mcq',
                question: '“On day 8 his VA has dropped to 6/18 while the eye is better. Why, and what do you check?”',
                options: [
                    'Most likely the atropine (it lasts up to 2 weeks): a dilated pupil and paralysed accommodation can unmask latent hyperopia. Check pinhole, and exclude CMO with OCT, as Jenn did; it recovered to 6/7.5 by day 15.',
                    'Most likely a steroid-induced posterior subcapsular cataract, which commonly appears within a week of hourly Pred Forte, so the steroid should be stopped at once and the patient referred for cataract surgery.',
                    'Most likely an optic neuritis triggered by the uveitis, so he needs urgent MRI, a field test and IV methylprednisolone the same day, even though his pupils are reacting and the OCT optic disc is normal.',
                    'Most likely the steroid response has raised the IOP enough to swell the cornea, so the Pred Forte should be switched to FML even though the NCT reading of 10 mmHg is the same as before treatment.'
                ],
                answer: 0,
                explain: 'Always explain a drop in VA. Cycloplegia blurs mainly near vision, but a dilated pupil and uncorrected hyperopia can blur distance too. CMO is the uveitis complication to exclude, and the flat macula on OCT did that.'
            },
            {
                phase: '6. Tapering',
                type: 'mcq',
                question: '“Cells were G1 on day 8. Why keep hourly dosing to day 15, and how would you taper?”',
                options: [
                    'The first episode flared after an early taper, so she held q1h until cells were G0.5. Then step down slowly (q2h, QID, TDS, BD, daily), each step about a week, guided by the AC and IOP; stop only once the AC is quiet.',
                    'Hourly dosing is always kept for exactly 15 days in AAU, whatever the cell count, then the steroid is stopped the next day, because tapering only prolongs the time the patient is exposed to steroid side effects.',
                    'She kept q1h to day 15 only because the patient wasn’t dosing overnight; once he dosed through the night the steroid could be stopped in one step, because the AC would then stay quiet without any taper.',
                    'Steroids should never be tapered in uveitis; the dose is held hourly until the cells are G0, then stopped in one step, and a flare after stopping proves an infection was missed rather than a rebound.'
                ],
                answer: 0,
                explain: 'Common teaching is to start tapering after a clear improvement (e.g. a two-step fall on the SUN scale), but a flare on the last taper is a good reason to wait longer. Taper slowly and never stop while cells are still present: rebound is common. Jenn’s plan was q2h for a week, then QID from day 22, with review.'
            },
            {
                phase: '7. Monitoring',
                type: 'multi',
                question: '“What do you check at every review?” Select all that apply.',
                options: [
                    'AC cells and flare (SUN grades), to guide the taper',
                    'IOP: a steroid response usually shows from about 2 weeks; inflammation can also raise or lower it',
                    'The pupil and synechiae, and the lens (cataract with repeated or long courses)',
                    'VA, and the macula (OCT) if the vision drops, for CMO',
                    'Adherence and drop technique (shake the suspension, punctal occlusion, overnight doses)',
                    'A corneal scrape at every visit to make sure no infection has developed under the steroid'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Jenn saw him at 48 hours, day 8 and day 15 while on hourly drops, checking IOP each time. Adherence was a real issue here (missed doses, no overnight drops), so ask every time. A scrape is only for a new corneal lesion.'
            },
            {
                phase: '8. Referral',
                type: 'mcq',
                question: '“This is his second episode in 6 months. Who do you refer to, and how urgently?”',
                options: [
                    'GP for the systemic work-up, and non-urgent ophthalmology co-management for recurrent AAU. Urgent referral if there’s a hypopyon, bilateral or posterior disease, high IOP, or no improvement within a few days.',
                    'Same-day emergency department referral, because a second episode of uveitis means the eye will be lost without intravitreal injections, and an optometrist may not treat a recurrence of uveitis at all.',
                    'No referral is ever needed, because idiopathic uveitis has no systemic cause by definition, so the GP and the ophthalmologist would have nothing to add while the eye is improving on topical treatment alone.',
                    'Rheumatology only, by the optometrist directly, because every recurrent anterior uveitis needs a biologic such as adalimumab started before the third episode, and the GP has no role in organising the work-up.'
                ],
                answer: 0,
                explain: 'Jenn noted that an ophthalmology review wasn’t arranged in the second episode before his care was transferred, and that co-management would be reasonable after two episodes in 6 months. Frequent or steroid-dependent recurrences are when steroid-sparing treatment is considered, through the ophthalmologist.'
            },
            {
                phase: '9. Prognosis',
                type: 'viva',
                question: '“What’s the prognosis for JS?”',
                points: [
                    'This episode: good. Synechiae gone by day 8, IOP 9–11, clear lens, VA back to 6/7.5−1 by day 15',
                    'Recurrence is common: about two-thirds relapsed in a UK cohort (median 24 months); 10-year recurrence in idiopathic AAU about 38% same eye and 15% fellow eye (NZ)',
                    'His relapse came early (about 5.6 months after onset), so further episodes are likely',
                    'Each episode and steroid course adds risk: cataract, glaucoma, CMO, extensive synechiae and seclusio pupillae',
                    'If it relapses within 3 months of stopping, it becomes chronic; early immunomodulation in recurrent/chronic AAU was linked to less glaucoma',
                    'Same-day review if redness, pain, photophobia or blur return; discard Pred Forte 4 weeks after opening'
                ],
                explain: 'Jenn scored full marks here: she gave a statement for JS himself, the natural history from good cohorts, and the long-term plan. Use the same structure: this episode, recurrence risk, complications, and what the patient does if it comes back.',
                marker: 'Prognosis 20/20. Literature 15/20. Conclusion: “Good.” References: “A good list of relevant references.”'
            }
        ]
    }
);
