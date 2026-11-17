// Emma's case report: nummular keratitis after herpes zoster ophthalmicus (HZO), marked 90/100.
// Built like my-case-report.js: the questions follow the marker's comments, which `marker` quotes.
// Source: Case Report/Anterior Case Report - z5421013.pdf (Emma Pham).
window.CASES.push(
    {
        id: 'emma-report-hzo-diagnosis',
        category: 'cornea',
        markerOf: 'Emma’s case report',
        title: 'Emma’s Case Report: Nummular Keratitis after HZO (History, Findings & Diagnosis)',
        theme: 'HZO nummular keratitis (case report)',
        years: ['Emma case report'],
        patient: 'JB, 54-year-old Caucasian man. Rosacea (20 years), hypertension on medication. Pterygium excision 2022. Not a CL wearer. No known allergies.',
        stem: 'Shingles 3–4 weeks ago: a vesicular rash over the right scalp, beneath the hairline, treated by his GP with a course of oral antiviral. Since the rash cleared the right eye “hasn’t been the same”: blurred vision, photophobia and watering. No pain, discharge or itch.',
        steps: [
            {
                phase: '1. History gaps',
                type: 'viva',
                question: '“What else would you have liked to know in the history?”',
                points: [
                    'When the GP started the antiviral relative to the rash (within 72 h?), and which drug, dose and duration',
                    'Exactly where the rash was: forehead, upper lid, tip or side of the nose (Hutchinson’s sign: nasociliary branch of V1)',
                    'Was the eye red, sore or light-sensitive during the rash, or only after it cleared?',
                    'When was his last eye examination, and what was his VA then (a baseline for the 6/7.5)?',
                    'Name of the blood-pressure medicine and any other medicines, especially steroids (inhaled, oral, skin)',
                    'Immune status (diabetes, cancer, immunosuppressants) and shingles vaccination (Shingrix)'
                ],
                explain: 'The rash was on the scalp beneath the hairline, which is still V1 (the supraorbital and supratrochlear branches run back to the vertex). Timing of the antiviral matters because the oral antiviral given within 72 h cuts later eye disease. A recent eye exam tells you whether 6/7.5 is new. Rosacea is worth a line too: it means lid and ocular-surface disease that can add to the irritation.',
                marker: '“Any thoughts re how soon the treatment by the GP was initiated after the presentation of the rash? Why might this be important?” and, on the history, “last eye examination?”'
            },
            {
                phase: '2. Why timing matters',
                type: 'mcq',
                question: '“Why does it matter how soon the GP started the antiviral?”',
                options: [
                    'Oral antivirals started within 72 h of the rash shorten viral shedding and roughly halve later eye disease (stromal keratitis, uveitis), so a late start means more risk and a closer review.',
                    'Starting the antiviral late makes the rash contagious for much longer, so the main reason to ask is to tell him to stay home from work until his eye symptoms clear completely, however long that takes.',
                    'An antiviral started after 72 h raises the risk of acute retinal necrosis tenfold, so any patient treated late needs a same-day vitreous tap and intravitreal foscarnet regardless of the anterior findings.',
                    'It only matters for post-herpetic neuralgia. Eye complications are fixed by the time the rash appears, so whether treatment started on day 1 or day 7 doesn’t change his risk of keratitis or uveitis.'
                ],
                answer: 0,
                explain: 'Without antivirals about half of HZO patients develop eye disease; prompt oral aciclovir (800 mg 5×/day), valaciclovir (1 g tds) or famciclovir for 7 days roughly halves that, and is still worth giving after 72 h if new lesions or eye involvement appear. Early treatment also lowers the chance of post-herpetic neuralgia. So a late or missing course is a reason to look harder and review sooner.',
                marker: '“Any thoughts re how soon the treatment by the GP was initiated after the presentation of the rash? Why might this be important?”'
            },
            {
                phase: '3. Findings',
                type: 'reveal',
                text: 'VA R 6/7.5, L 6/6. Pupils PERRL, no RAPD. Motility full. Fields full to confrontation. IOP (NCT) R 15, L 13 mmHg. Right: G2 conjunctival hyperaemia; 4–5 discrete focal infiltrates, 1–2 mm, one in the visual axis; no epithelial staining (negative staining over the infiltrates); no dendrite or pseudodendrite; no stromal oedema or haze; AC deep and quiet. Left: G2 hyperaemia, cornea clear. Undilated 90D: CDR 0.4 both eyes, macula and vessels normal.',
                exhibit: 'Slit-lamp photo: many small round grey-white granular spots scattered through the anterior stroma in the slit beam; the epithelium looks smooth.'
            },
            {
                phase: '4. Diagnosis',
                type: 'mcq',
                question: '“What’s your diagnosis, and what is going on in the cornea?”',
                options: [
                    'Nummular keratitis after HZO: an immune reaction to viral antigen in the anterior stroma, giving small coin-shaped granular infiltrates under an intact epithelium, from about the second week.',
                    'Active VZV epithelial keratitis: live virus replicating in the epithelium, giving raised pseudodendrites that stain brightly with fluorescein, so the negative staining here is a sign of viral cell death.',
                    'Neurotrophic keratopathy after HZO: loss of corneal sensation lets the stroma melt in small round pits, which is why the spots don’t stain and why the eye isn’t painful despite the inflammation.',
                    'Disciform (endothelial) keratitis after HZO: inflammation of the endothelium causing round patches of stromal oedema with KPs underneath, which usually appears in the first three days of the rash.'
                ],
                answer: 0,
                explain: 'Nummular keratitis is a delayed, immune-mediated anterior stromal keratitis: multiple fine granular infiltrates, epithelium intact, appearing around day 10 (often in the second week) and in roughly a quarter to a third of HZO eyes. Pseudodendrites come in the first days and stain poorly; disciform keratitis comes later (around 3 months) with stromal oedema; neurotrophic disease gives epithelial breakdown that stains.',
                marker: 'Diagnosis scored 20/20: “Well presented.”'
            },
            {
                phase: '5. Differentials',
                type: 'match',
                question: 'Match each differential to the finding that argues against it in JB.',
                pairs: [
                    { label: 'Adenoviral (post-EKC) subepithelial infiltrates', answer: 'No preceding red, watery, contagious conjunctivitis or second eye involved' },
                    { label: 'Microbial keratitis', answer: 'Intact epithelium over the infiltrates, no pain, discharge or AC reaction' },
                    { label: 'HSV stromal keratitis', answer: 'No previous episodes, no dendrite, no stromal oedema or vessels' },
                    { label: 'Thygeson’s keratitis', answer: 'One eye only, first episode, flat infiltrates rather than raised “breadcrumbs”' },
                    { label: 'Acanthamoeba keratitis', answer: 'No CL or water exposure, no pain, no ring or perineural infiltrates' }
                ],
                distractors: ['Clear zone between the infiltrates and the limbus, with blepharitis'],
                explain: 'Emma also ruled out marginal keratitis: it sits peripherally with a clear zone, comes from staph hypersensitivity, and doesn’t reach the visual axis. She noted that post-adenoviral infiltrates look the same; the recent zoster on the same side is what tips it to VZV. Microbial keratitis must always be excluded because it is sight-threatening.',
                marker: 'Differentials scored 20/20: “Quite well written and considered.”'
            },
            {
                phase: '6. Better findings',
                type: 'multi',
                question: '“How could your clinical findings have been stronger?” Select all that apply.',
                options: [
                    'Map every infiltrate (clock hour, distance from the limbus, depth), not just the one in the visual axis',
                    'Use a photo of your own patient, or say clearly that the image is illustrative',
                    'Test corneal sensation and look at the skin for scarring and the nose for Hutchinson’s sign',
                    'Dilate: HZO can cause uveitis, retinitis and vasculitis, so an undilated 90D view isn’t enough',
                    'Measure IOP with Goldmann before starting a steroid, as a reliable baseline',
                    'Scrape the infiltrates for culture and PCR before treating, since they could hide a fungal infection'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'The marker asked where the other infiltrates were and whether the photo was of JB. Sensation matters for the prognosis (neurotrophic risk) and HZO eyes are dilated to exclude posterior disease. A steroid is about to start, so a Goldmann baseline makes later steroid-response checks meaningful. Non-staining infiltrates with an intact epithelium in a quiet eye aren’t scraped.',
                marker: '“Where were the other infiltrates if not central?” “Was the initial image the one of your patient?” Clinical findings: “Do you know if the infiltrates finally resolved and how long it took to do so?”'
            },
            {
                phase: '7. Pathophysiology',
                type: 'viva',
                question: '“Tell us about the pathophysiology and epidemiology of HZO and nummular keratitis.”',
                points: [
                    'VZV lies latent in the trigeminal (Gasserian) ganglion after chickenpox and reactivates along V1 (ophthalmic division)',
                    'Risk rises as VZV cell-mediated immunity falls: age over 50, immunosuppression',
                    'HZO is about 10–20% of zoster; without antivirals about half get eye disease',
                    'Nummular keratitis: about 25–33% of HZO, around day 10 (second week), an immune reaction to viral antigen rather than live viral replication',
                    'The rash respects the midline; Hutchinson’s sign (nasociliary branch) strongly predicts eye involvement',
                    'Usually one episode, unlike HSV, but HZO eye disease can be chronic or recur (about 1 in 4)'
                ],
                explain: 'Emma’s timeline fits: rash 3–4 weeks ago, eye symptoms after the rash cleared. Keep the corrected facts: latency is in the trigeminal ganglion (not the dorsal root ganglion of the spinal cord for HZO), and Hutchinson’s sign predicts, but doesn’t guarantee, eye involvement.',
                marker: '“Please define acronyms before using them” applies here too: say “herpes zoster ophthalmicus” and “varicella zoster virus” in full the first time.'
            }
        ]
    },
    {
        id: 'emma-report-hzo-management',
        category: 'cornea',
        markerOf: 'Emma’s case report',
        title: 'Emma’s Case Report: Nummular Keratitis after HZO (Management & Prognosis)',
        theme: 'HZO nummular keratitis (case report)',
        years: ['Emma case report'],
        patient: 'Same patient: JB, 54M, nummular keratitis RE 3–4 weeks after HZO; rosacea, hypertension. VA R 6/7.5, IOP 15 / 13 mmHg.',
        stem: 'Emma’s plan: fluorometholone (FML) 0.1% suspension QID RE, shake well; aciclovir 3% eye ointment, 1 cm into the lower fornix 5×/day RE; preservative-free lubricants; sunglasses; don’t stop the steroid without review; return sooner if pain, redness, photophobia or vision worsen. Review in 1 week.',
        steps: [
            {
                phase: '1. Safety check',
                type: 'mcq',
                critical: true,
                question: '“Before you start a steroid on this eye, what must you have confirmed?”',
                options: [
                    'That the epithelium is intact (no staining defect, ulcer, dendrite or pseudodendrite) and there are no signs of microbial keratitis: pain, discharge, AC reaction or a growing infiltrate.',
                    'That the IOP is under 21 mmHg in both eyes on two separate days, because a steroid can never be started in a patient whose pressure is above the normal range, even for a short course of a soft steroid.',
                    'That his GP has finished the oral antiviral course at least 4 weeks earlier, because a topical steroid is unsafe while VZV DNA can still be found in the tears or in the blood.',
                    'That his corneal sensation is completely normal, because a steroid is absolutely contraindicated in any eye with reduced sensation and nummular keratitis must then be left untreated.'
                ],
                answer: 0,
                explain: 'A steroid on an open epithelial defect, active herpetic epithelial disease or an unrecognised infection is the classic red-flag error. JB had negative staining, no dendrites and a quiet AC, so a steroid was safe. Raised IOP and reduced sensation are precautions to monitor, not absolute contraindications.'
            },
            {
                phase: '2. Treat or watch?',
                type: 'mcq',
                question: '“Do nummular infiltrates always need a steroid?”',
                options: [
                    'No. Small peripheral infiltrates that don’t bother the patient can be watched on lubricants. Treat when symptomatic, persistent or in the visual axis, as here: photophobia and 6/7.5 with an axial infiltrate.',
                    'Yes. Every nummular infiltrate must get a steroid on the day it is seen, because untreated infiltrates always progress to disciform keratitis and then on to a corneal perforation within a few weeks.',
                    'No. Nummular infiltrates are a sign of live viral replication, so they are treated with a topical antiviral alone, and any steroid would only spread the virus deeper into the stroma and the AC.',
                    'Yes, but only an oral steroid: topical steroids can’t reach the anterior stroma through an intact epithelium, so his GP should prescribe oral prednisolone 50 mg daily for two weeks, then taper.'
                ],
                answer: 0,
                explain: 'Treatment follows the location, visual effect and symptoms, not the presence of infiltrates alone (Minor & Payne 2021). JB’s axial infiltrate, photophobia and reduced VA justify a steroid; the dose is then titrated to the response with a gradual taper.'
            },
            {
                phase: '3. Which steroid',
                type: 'mcq',
                question: '“Why this particular corticosteroid?”',
                options: [
                    'FML 0.1% is a low-potency steroid with fewer IOP rises, enough for superficial infiltrates under an intact epithelium. Prednisolone acetate 1% is kept for deeper stromal disease or uveitis. FML is a private script now.',
                    'FML is the only steroid that is safe in herpes zoster, because prednisolone and dexamethasone directly reactivate VZV in the trigeminal ganglion, while FML has no effect on the virus or the host immune response.',
                    'FML penetrates the cornea better than prednisolone acetate, so it reaches the stromal infiltrates faster. Prednisolone acetate stays on the surface, so it is only used for allergic conjunctivitis and episcleritis.',
                    'FML was chosen because it is PBS-listed for HZO keratitis, while Pred Forte is restricted to uveitis and Flarex is the first-line steroid for corneal infiltrates on the current Australian schedule.'
                ],
                answer: 0,
                explain: 'Matching potency to depth is the answer the marker wanted: a soft steroid for mild, superficial, immune-mediated disease, with less risk of a steroid response; prednisolone acetate 1% (e.g. q4–8h with a taper) for more substantial HZO stromal inflammation. Flarex was withdrawn in June 2024 and FML came off the PBS in August 2024.',
                marker: '“Why this particular corticosteroid?”'
            },
            {
                phase: '4. Oral antivirals',
                type: 'mcq',
                question: '“You listed aciclovir, valaciclovir and famciclovir for acute HZO. All of these drugs, or only one? Is one preferred?”',
                options: [
                    'Only one, for 7 days, within 72 h of the rash: aciclovir 800 mg 5×/day, valaciclovir 1 g tds or famciclovir 500 mg tds. Valaciclovir is often preferred (better absorbed, tds dosing). The GP prescribes it.',
                    'All three together for 10 days, because each acts on a different viral enzyme and combining them prevents resistance. The optometrist can start them on an S4 script if the GP is unavailable.',
                    'Only aciclovir, because valaciclovir and famciclovir aren’t TGA-approved for zoster in Australia. It is given at 400 mg twice a day for 6 months to stop the eye complications from appearing at all.',
                    'Only famciclovir, because aciclovir and valaciclovir can’t cross into the trigeminal ganglion. It is given as a single 1.5 g dose on the day of the rash, then repeated once a week for a month.'
                ],
                answer: 0,
                explain: 'They are alternatives, not a combination. Valaciclovir 1 g tds for 7 days is the same in every source, so it’s the safest one to quote; famciclovir appears as both 250 mg and 500 mg tds. 400 mg bd aciclovir is HSV prophylaxis, not zoster treatment. Optometrists prescribe topical medicines only, so orals go through the GP.',
                marker: '“All of these drugs or only one? Is one preferred over the others?”'
            },
            {
                phase: '5. Antiviral cover',
                type: 'mcq',
                question: '“Why topical aciclovir as cover? Is that standard?”',
                options: [
                    'Not really. Aciclovir ointment is for HSV epithelial keratitis, with little evidence in VZV disease. When cover is wanted with a steroid in HZO stromal disease, it’s usually an oral antiviral via the GP.',
                    'Yes. Topical aciclovir is first-line for all HZO eye disease and is more effective than oral antivirals, because VZV is far more sensitive to aciclovir than HSV and the ointment reaches the trigeminal ganglion.',
                    'Yes. It is needed because FML on its own always reactivates VZV within days, and topical aciclovir 3% is PBS-listed for HZO keratitis as a mandatory partner for any steroid drop in that eye.',
                    'Not really, but only because the ointment blurs vision. The ideal cover would be aciclovir 3% drops every hour while awake, which are on the PBS and give a much higher corneal drug concentration.'
                ],
                answer: 0,
                explain: 'Emma said herself that this is where her management differed from convention. In a ZEDS investigator survey most clinicians used a topical steroid with an oral antiviral for HZO stromal keratitis. VZV is less sensitive to aciclovir than HSV, and aciclovir 3% ointment is PBS-restricted to HSV epithelial keratitis. Be ready to defend or revise the choice.'
            },
            {
                phase: '6. Stopping and tapering',
                type: 'multi',
                question: '“When should the aciclovir and FML be stopped, and should they be tapered?” Select all that apply.',
                options: [
                    'Taper the FML slowly (e.g. QID → TDS → BD → daily over weeks to months), guided by the infiltrates and symptoms at each step',
                    'Expect a flare if the steroid stops too fast: recurrences cluster in the months after it stops, so some patients need a very low maintenance dose',
                    'Keep any antiviral cover going while the steroid is at a meaningful dose; it doesn’t need tapering itself',
                    'Stop the aciclovir ointment once cover isn’t needed: long use causes punctate epithelial toxicity',
                    'Stop the FML on the day the infiltrates look smaller, since tapering only prolongs the steroid response risk',
                    'Taper the aciclovir ointment first and keep it going for 12 months, as with HSV prophylaxis'
                ],
                answers: [0, 1, 2, 3],
                explain: 'In a cohort of 869 HZO eyes, recurrence came at a median of 1.4 months after topical steroid was stopped, and 90% of those recurrences were within 7 months (Scott 2024), so a slow taper and follow-up after stopping are essential. Antivirals don’t rebound and don’t need tapering. 12-month prophylaxis is an HSV (HEDS) regimen.',
                marker: '“When should the Acyclovir and FML be stopped (and should they be tapered)?”'
            },
            {
                phase: '7. Review',
                type: 'reveal',
                text: 'One week: symptoms much better, good adherence. VA R 6/7.5+2. Infiltrates smaller, 0.5–1 mm. Epithelium intact, no defect, AC quiet. IOP R 16, L 13 mmHg. Plan: continue both for another week, then start tapering.'
            },
            {
                phase: '8. Monitoring',
                type: 'multi',
                question: '“What do you check at every visit while he’s on the steroid?” Select all that apply.',
                options: [
                    'IOP, against the pre-steroid baseline (a rise over about 5 mmHg suggests a steroid response)',
                    'Fluorescein staining: a new defect, pseudodendrite or neurotrophic breakdown changes the plan',
                    'Size and number of infiltrates (mapped or photographed) and the VA, to judge response and taper',
                    'AC cells and flare, and the iris for sectoral atrophy (HZO uveitis)',
                    'Drop technique and adherence: shake the suspension; drop first, ointment at least 5 minutes later',
                    'Gonioscopy at every visit, because nummular keratitis causes angle closure in most patients'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'The steroid side effects (IOP, delayed healing, infection, cataract with long use) and HZO complications (uveitis with high IOP, neurotrophic keratopathy, scleritis) are what you’re watching for. Lens and posterior segment are checked at intervals, and the patient is told to return sooner if pain, redness or vision worsen.'
            },
            {
                phase: '9. Prognosis',
                type: 'viva',
                question: '“So what is the prognosis for this particular patient? And any thoughts on recurrent neuropathic pain in HZO?”',
                points: [
                    'For JB: good. Superficial infiltrates, intact epithelium, no uveitis, already better at 1 week; expect VA back to about 6/6 with at most a faint axial scar',
                    'Risk of recurrence when the steroid is tapered; HZO eye disease recurs in about 1 in 4 (median about 3.5 months), so follow up for months after stopping',
                    'Long term: corneal scarring is the main cause of vision loss in HZO, and the risk rises with each recurrence; also watch for neurotrophic keratopathy, glaucoma and cataract',
                    'Post-herpetic neuralgia: pain persisting more than 3 months after the rash; risk rises with age, severe rash or prodrome, ophthalmic involvement and late antivirals',
                    'JB has had no pain, which is reassuring; new pain needs examining to separate recurrent inflammation from neuropathic pain',
                    'PHN is treated by the GP or a pain specialist (amitriptyline, gabapentin, pregabalin); recommend asking the GP about Shingrix (recommended from 50, free from 65)'
                ],
                explain: 'Prognosis was the section that lost marks (15/20): Emma gave the literature but not a statement about JB himself. Start with the patient (“good, because…”), then the risks and how you’ll watch for them. Have one line on neuropathic pain ready: the marker asked about it directly.',
                marker: 'Prognosis 15/20: “So what do you think is the prognosis for this particular patient? Any thoughts re recurrent neuropathic pain in patients with HZO?” Literature 15/20. Overall 90/100.'
            }
        ]
    }
);
