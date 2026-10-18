// Your own case report: recurrent corneal erosion (RCE) secondary to epithelial basement membrane dystrophy (EBMD).
// Every question is built from the marker's comments on the report (80/100), because panels often open
// with "tell us about your case report" and then probe what the marker flagged. `marker` quotes the comment.
window.CASES.push(
    {
        id: 'my-report-rce-history',
        category: 'professional',
        warmup: true,
        title: 'My Case Report: RCE from EBMD (History, Findings & Diagnosis)',
        theme: 'Your Case Report',
        years: ['My case report'],
        patient: '65-year-old East Asian woman, known EBMD (diagnosed 2023 at the eye hospital), father with an unspecified corneal dystrophy. Hypertension on telmisartan (Micardis); taking ibuprofen 400 mg for the eye pain. Not a CL wearer.',
        stem: '“Tell us about your case report.” Day 1: sharp pain RE on waking, FB sensation, no discharge or change in vision. VA 6/12 RE, 6/20 LE (same as her 2025 exam). Both corneas: grey intraepithelial dots and map lines. RE: 3 × 2 mm inferior-paracentral epithelial defect, scattered micropunctate staining, negative staining over the EBMD lesions. Day 2: defect 1 × 1 mm, no pain.',
        steps: [
            {
                phase: '1. Summary',
                type: 'viva',
                question: '“Summarise your case in under a minute, and tell us what you learnt from it.”',
                points: [
                    'One-line summary: 65F, acute RCE in the RE on waking, secondary to bilateral EBMD (map-dot-fingerprint)',
                    'Key signs: inferior-paracentral 3 × 2 mm epithelial defect, bilateral maps and dots, negative staining over the EBMD lesions',
                    'Acute plan: heal the epithelium, relieve pain, prophylactic antibiotic, then long-term lubrication to stop recurrence',
                    'Outcome: defect 1 × 1 mm and pain-free at day 1 review',
                    'What you learnt: a lesson you can defend (e.g. ointment over preserved drops on a fragile epithelium, offering a BCL early, checking a 65-year-old’s analgesic against her blood-pressure medicine)'
                ],
                explain: 'Keep it short and say acronyms in full the first time (“recurrent corneal erosion”, “epithelial basement membrane dystrophy”). The marker flagged undefined acronyms in the clinical findings. Have one honest “what I’d do differently” ready: panels like insight more than a perfect case.',
                marker: '“Please define acronyms before using them.” Overall 80/100: Diagnosis 15/20, Differentials 15/20, Management 15/20, Prognosis 15/20, Literature 20/20.'
            },
            {
                phase: '2. History gaps',
                type: 'viva',
                question: '“What else would you have liked to know in the history?”',
                points: [
                    'Previous episodes: has this happened before, how often, which eye, always on waking? (and the pain score now)',
                    'Any ocular trauma ever, even years ago (fingernail, paper, branch, makeup brush): an old abrasion is a separate RCE cause',
                    'Exactly which lubricant, how often, preserved or not, and why she has been using it less',
                    'The ibuprofen: who suggested it, when, what dose, for how long; any GI, renal, asthma or bleeding history',
                    'The itchy red eyes: allergy, seasonal, hay fever? Floaters in one eye or both?',
                    'How the eye hospital managed her EBMD before (any erosions, treatment, procedures), and whether she was seen at your clinic in 2025 so you can compare findings'
                ],
                explain: 'Most of these were margin questions on the history. The prior-treatment question matters: if she has already failed lubricants, or had a procedure at the hospital, your plan and prognosis change. A prior trauma history also changes the diagnosis from “EBMD alone” to a possible mixed cause.',
                marker: 'Margin comments: “no ocular trauma at all during her life?”, “which drops and how frequently were these drops used?”, “in one eye or both eyes?”, “by whom?” (ibuprofen), “allergy? seasonal? Hay fever?”, “Was the patient previously examined 2025 in the same clinic?” and “Did you have any information re the way [the hospital] had treated this condition previously?”'
            },
            {
                phase: '3. Vision',
                type: 'mcq',
                question: '“Why is the VA worse in the left eye, which isn’t the one with the erosion?”',
                options: [
                    'The left eye must have an occult erosion hidden under the map lines; the 6/20 confirms it, so both eyes need antibiotic prophylaxis and daily review until the left vision recovers to match the right, and refraction should wait until then.',
                    'It matches her 2025 baseline, so it isn’t the erosion. Likely higher myopia and astigmatism, irregular astigmatism from EBMD near the axis, nuclear sclerosis or myopic macular change; check pinhole, retinoscopy reflex, topography and macula.',
                    'It is amblyopia from the higher left prescription, so nothing more is needed. EBMD and nuclear cataract never reduce acuity, and pinhole VA wouldn’t help, because an amblyopic eye can’t improve with a pinhole anyway.',
                    'It is from the ibuprofen, which causes a reversible toxic keratopathy in the less-lubricated eye. Stop the ibuprofen and recheck the left VA in a week, before doing pinhole, retinoscopy or a new refraction.'
                ],
                answer: 1,
                explain: 'Her right eye 6/12 also didn’t drop with the erosion, because the defect was inferior-paracentral, off the axis. Pinhole separates refractive blur (improves) from media or macular causes. Map lines in the axis cause irregular astigmatism and monocular ghosting; topography shows it. This also matters later: EBMD distorts keratometry before cataract surgery.',
                marker: '“pinhole VAs?” and “Why is VA more reduced in the LE rather than the RE (affected eye)?”'
            },
            {
                phase: '4. Findings to record',
                type: 'multi',
                question: '“What would have strengthened your clinical findings?” Select all that apply.',
                options: [
                    'Slit-lamp photos: white light, retroillumination of the maps and dots, and fluorescein with a yellow (Wratten) filter',
                    'Measure the defect with the slit beam and note loose or heaped epithelium at its edges',
                    'Note whether fluorescein diffuses into the stroma (stromal glow) under the defect',
                    'Corneal sensation, lid eversion for a foreign body, and AC cells and flare',
                    'For day 2, report only what changed, and summarise the treatment she used in between',
                    'Gonioscopy and dilated fundus examination before treating, since an erosion can hide angle closure'
                ],
                answers: [0, 1, 2, 3, 4],
                explain: 'Photos let the reader confirm the maps, dots and the defect. Stromal glow shows a true breach of the epithelial barrier and how long the stroma has been exposed. Sensation helps exclude HSV, HZO and neurotrophic disease. Day 2 repeated most of day 1, so a “changes only” table with the treatment in between is clearer. Gonioscopy isn’t needed for an erosion.',
                marker: '“It would have been helpful if you were able to include images.” “No stromal glow with fluorescein in the RE?” “Much of the data presented for Day 2 appears to be a repeat of Day 1… What was the management of the condition which produced the Day 2 results?”'
            },
            {
                phase: '5. EBMD signs',
                type: 'match',
                question: '“What are the dots, maps and fingerprints, and why do they stain negatively?” Match each sign to what it is.',
                pairs: [
                    { label: 'Maps (geographic lines)', answer: 'Sheets of thickened, redundant basement membrane growing into the epithelium' },
                    { label: 'Dots (Cogan microcysts)', answer: 'Intraepithelial pseudocysts of trapped, degenerating cells and debris' },
                    { label: 'Fingerprint lines', answer: 'Parallel ridges of redundant basement membrane, best seen on retroillumination' },
                    { label: 'Negative staining', answer: 'Raised epithelium over the lesions thins the tear film, so fluorescein pools away from them' }
                ],
                explain: 'The name you wanted is Cogan’s <em>microcystic</em> dystrophy, also called map-dot-fingerprint or anterior basement membrane dystrophy. Bron’s blebs are a fourth sign (tiny bubbles on retroillumination). All are best seen with broad oblique light and retroillumination, and they change shape and position over months.',
                marker: '“typo?” on “Cogan’s microcystic”; “because?” on the negative staining; “any thoughts as to what these might be?”'
            },
            {
                phase: '6. Mechanism of pain',
                type: 'mcq',
                question: '“Why does an erosion hurt so much on waking?”',
                options: [
                    'Overnight the cornea dries and the lid sticks to it; on opening, the lid tears away the poorly attached epithelium. Pain comes from exposing the dense sub-basal nerve plexus, not from the lid’s force itself.',
                    'Overnight the IOP rises when lying flat; on waking the pressure spike stretches the cornea and the epithelium splits. The pain is from raised IOP, which is why erosion pain settles with glaucoma drops.',
                    'The lid applies more force than the epithelium can withstand, so the pain is caused directly by the pressure of the lid on the cornea, which is why ptosis props relieve it without the epithelium healing.',
                    'Overnight the stroma swells and pushes on the corneal endothelium; on waking, endothelial pump failure causes sharp pain from Descemet’s membrane, which has its own dense nerve supply.'
                ],
                answer: 0,
                explain: 'In EBMD the basal cells make a faulty, multilaminar basement membrane, so hemidesmosomes and anchoring fibrils (type VII collagen into the anterior stroma) don’t form properly. Overnight tear flow falls and the epithelium swells slightly, so it sticks to the tarsal conjunctiva. Raised MMP-2 and MMP-9 keep digesting new adhesion. The cornea is the most densely innervated tissue in the body, so exposed nerve endings cause the sharp pain. Use “hemidesmosomes and anchoring fibrils”, not “anchor proteins nailing the epithelium down”.',
                marker: '“not sure this quite makes sense. wouldn’t the pain suggest stimulation of the corneal nerves?” and “interesting anatomical term” (on “nailed down by anchor proteins”).'
            },
            {
                phase: '7. Differentials',
                type: 'mcq',
                question: '“You ruled out HSV. What other viral keratitis should you consider in a 65-year-old, and how do you exclude it?”',
                options: [
                    'Adenoviral keratoconjunctivitis: exclude it on the absence of a recent cold, as adenovirus never causes an epithelial defect and only produces subepithelial infiltrates weeks after the conjunctivitis.',
                    'Herpes zoster ophthalmicus: ask about a prodrome, dermatomal rash or Hutchinson sign; look for raised pseudodendrites (no terminal bulbs, stain poorly) and reduced sensation; ask about shingles vaccination.',
                    'Molluscum contagiosum keratitis: exclude it on the absence of umbilicated lid lesions, since molluscum is the commonest viral keratitis over 60 and causes painful epithelial defects on waking.',
                    'Acanthamoeba keratitis: exclude it on the absence of contact lens wear, since it is a virus that behaves like HSV, with dendritiform lesions, radial neuritis and pain out of proportion to the signs.'
                ],
                answer: 1,
                explain: 'Zoster is commoner with age, and HZO can cause pseudodendrites, reduced sensation and later neurotrophic erosions. Her unilateral painful eye with an epithelial defect, no rash, normal sensation, a defect with clean geographic edges (not dendritic) and bilateral EBMD point away from both HSV and HZO. Test sensation in both eyes before drops.',
                marker: '“Quite well written and considered. However, if ruling out HSV, you might have also considered Zoster.”'
            }
        ]
    },
    {
        id: 'my-report-rce-management',
        category: 'professional',
        warmup: true,
        title: 'My Case Report: RCE from EBMD (Management & Prognosis)',
        theme: 'Your Case Report',
        years: ['My case report'],
        patient: 'Same patient: 65F, RCE RE secondary to EBMD; hypertension on telmisartan (Micardis); taking ibuprofen 400 mg.',
        stem: 'Your plan: chloramphenicol 0.5% drops QID RE for 5–7 days, Hyloforte (sodium hyaluronate 0.2%, preservative-free) every 2–4 h both eyes, Vita-POS ointment at bedtime both eyes, continue ibuprofen 400 mg up to 1200 mg/day, warm compresses for MGD; review at 1 day, then every 1–2 days until healed.',
        steps: [
            {
                phase: '1. Goal',
                type: 'mcq',
                question: '“In your discussion you said the primary short-term goal is preventing microbial keratitis. Is it?”',
                options: [
                    'Yes. Infection is the only short-term goal, since the epithelium heals by itself; pain and comfort are long-term issues, so analgesia and lubrication can wait until the antibiotic course has finished and the defect has closed completely.',
                    'Not quite. The immediate goals are relieving pain and getting the epithelium to heal and adhere; the antibiotic is supporting prophylaxis, as a small clean defect in a non-CL wearer is low-risk. Long term: stop recurrence.',
                    'No. The short-term goal is to stop recurrence, so debridement or anterior stromal puncture should be done on day 1, before the epithelium heals and while the abnormal basement membrane is still exposed.',
                    'No. The short-term goal is to treat the dry eye and MGD that caused the erosion; once the meibomian glands are expressed in the chair, the pain and healing take care of themselves within a day or two.'
                ],
                answer: 1,
                explain: 'The patient came in for pain, and healing the defect is what removes both the pain and the infection risk. Frame it as: relieve pain, heal and protect the epithelium, prevent infection while it heals, then stop it coming back. Then you can justify ointment, a BCL or a cycloplegic as part of the acute plan.',
                marker: '“Is the primary short term goal to prevent microbial keratitis or provide the patient with a means of relieving the acute pain?”'
            },
            {
                phase: '2. Chloramphenicol',
                type: 'mcq',
                question: '“Why chloramphenicol, and why the drops? They’re preserved. Could that affect healing?”',
                options: [
                    'Chloramphenicol is reserved for MK, so a fluoroquinolone would have been the right prophylaxis here; the preservative doesn’t matter, because QID dosing for a week is too short to affect epithelial healing, even on an EBMD cornea.',
                    'It is broad-spectrum, cheap, low-resistance and first-line prophylaxis, saving fluoroquinolones for MK and CL wearers. Yes: preservative slows healing of a fragile epithelium, so the 1% ointment (unpreserved, lubricating) suits her better.',
                    'It was chosen because it is bactericidal against Pseudomonas, the commonest cause of infection after an erosion; the preservative speeds healing by killing bacteria on the defect, so drops beat ointment here.',
                    'It was chosen because it is safe in aplastic anaemia; the preservative is irrelevant because the Hyloforte washes it off, and ointment is avoided in erosions because it sticks the lid to the healing epithelium.'
                ],
                answer: 1,
                explain: 'Chlorsig drops contain a preservative; chloramphenicol 1% ointment QID (or at night with drops by day) gives prophylaxis and lubrication in one and avoids preservative on a healing epithelium. It is bacteriostatic (50S ribosome). Ask about personal or family history of blood dyscrasia. Use drops, not ointment, if a BCL goes in.',
                marker: '“The use of chloramphenicol is interesting as the solution is preserved. Do you think that might affect the corneal healing rate? Of the possible topical antibiotics available why do you think chloramphenicol in particular was chosen?” and “would you consider the ointment form for this patient?”'
            },
            {
                phase: '3. Vita-POS',
                type: 'mcq',
                question: '“Why Vita-POS? Tell us about its pharmacology.”',
                options: [
                    'Retinyl palmitate (vitamin A) ointment, preservative- and lanolin-free. Vitamin A supports epithelial differentiation and goblet-cell mucin; the paraffin base stops the lid sticking overnight. It blurs, so use it at bedtime.',
                    'Tocopherol (vitamin E) gel preserved with benzalkonium chloride. Vitamin E is an antioxidant that kills bacteria on the defect; it is used by day because it doesn’t blur, and at night a preserved drop works better.',
                    'Retinol palmitate drops that act as an osmotic agent, drawing water out of the epithelium like hypertonic saline; they are used hourly by day and are contraindicated while an epithelial defect is open.',
                    'A steroid–vitamin combination (fluorometholone with vitamin A) that reduces MMP-9 activity; it needs IOP checks and is the first-line drug for every erosion, before any plain lubricant is tried.'
                ],
                answer: 0,
                explain: 'Over-the-counter, so no prescription is needed, and it can be used long term. The aim at night is to stop the lid shearing off the new epithelium on waking. Continue nightly for at least 3 months after healing (the new basement membrane and hemidesmosomes take weeks to months to re-form).',
                marker: '“any information re pharmacology, actions etc?” and “The same could be said for Vita-POS.”'
            },
            {
                phase: '4. Ibuprofen',
                type: 'mcq',
                question: '“Any concerns about her using ibuprofen long term?”',
                options: [
                    'None. Ibuprofen is sold over the counter, so it is safe long term at up to 2400 mg/day without review; it also lowers blood pressure slightly, so it works well alongside her telmisartan and needs no discussion with her GP.',
                    'Yes. At 65 on telmisartan (an ARB), long-term NSAIDs raise BP, blunt the ARB and risk kidney injury (the “triple whammy” with a diuretic), plus GI bleeds and CV risk. Short course with food; paracetamol first; tell her GP.',
                    'Only that oral ibuprofen slows corneal healing, so she should switch to topical NSAID drops (e.g. ketorolac QID) for the next month, which reach the cornea directly and carry no systemic or corneal risk.',
                    'Yes, but only because ibuprofen is category D in late pregnancy; at 65 with normal kidneys it has no meaningful interactions with an ARB, so she can continue at the OTC limit of 1200 mg/day indefinitely.'
                ],
                answer: 1,
                critical: true,
                explain: 'You can recommend OTC analgesia, but check it against her medicines and history. Topical NSAIDs on an epithelial defect risk corneal melt and slow healing, so avoid them. If pain is severe in the chair, consider a cycloplegic (cyclopentolate 1%) for ciliary spasm, or a BCL.',
                marker: '“did anyone prescribe the Ibuprofen? If so, who and when?” and “Any thoughts re the longterm use of the Ibuprofen?”'
            },
            {
                phase: '5. Bandage lens',
                type: 'viva',
                question: '“Would you consider a bandage contact lens for immediate relief? How would you manage it?”',
                points: [
                    'Yes: a BCL gives immediate pain relief by shielding the epithelium from the lid; reasonable on day 1, not only as a later option',
                    'High-Dk silicone hydrogel approved for extended or therapeutic wear; check movement and centration (not tight)',
                    'Prophylactic antibiotic drops (not ointment) while it is in, e.g. chloramphenicol 0.5% QID; preservative-free lubricants',
                    'Review next day, then weekly; replace monthly; keep it in for weeks (often 6–12) so the basement membrane re-forms',
                    'Risks: MK (higher with extended wear), lens loss, tight-lens syndrome; teach her red flags and when to return'
                ],
                explain: 'Taking a BCL out can tear off new epithelium, so remove it gently after wetting it with lubricant. You mentioned a BCL only as a later option, while the marker suggested it for immediate relief and in the abstract. Be ready to say when you’d use it straight away (severe pain, large or recurrent defect).',
                marker: '“bandage soft contact lenses too?” and “Would you consider the use of a bandage contact lens for a case like this to provide immediate relief?”'
            },
            {
                phase: '6. Preventing recurrence',
                type: 'mcq',
                question: '“You said lubrication lets the hemidesmosomes regenerate. How does that happen, and is hypertonic saline available in Australia?”',
                options: [
                    'Hemidesmosomes regenerate within 24 hours of the defect closing, so lubrication is only needed for a week; hypertonic saline is PBS-listed as 5% drops and can be prescribed by endorsed optometrists like any S4.',
                    'New basal cells lay down basement membrane, hemidesmosomes and anchoring fibrils over 6–8 weeks to months; lubricate for at least 3 months meanwhile. 5% NaCl (e.g. Muro 128) isn’t registered here; it can be compounded.',
                    'Hemidesmosomes never regenerate in EBMD, so lubrication only treats symptoms; hypertonic saline is banned in Australia because it causes corneal melt, so it can’t be compounded, imported or used at all.',
                    'Hemidesmosomes are made by stromal keratocytes, so stromal puncture is the only way to form them and lubrication delays it; hypertonic saline is sold over the counter in every Australian pharmacy as Muro 128.'
                ],
                answer: 1,
                explain: 'Hypertonic saline draws water out of the epithelium osmotically, reducing epithelial oedema and improving adhesion overnight. Check current availability with a compounding pharmacy before quoting it. Your own reference (a lubricant regimen as effective as hypertonic saline) actually supports using the lubricants you have.',
                marker: '“how does this occur?” (hemidesmosome regeneration) and “but is this available in Australia?” (hypertonic saline)'
            },
            {
                phase: '7. If it recurs',
                type: 'mcq',
                question: '“It keeps coming back despite lubricants. Her EBMD is diffuse and the erosion was paracentral. Would anterior stromal puncture suit her?”',
                options: [
                    'Yes. ASP is first-line for every RCE and works best over the visual axis, because the small scars it makes regularise the surface and improve vision; it can be repeated weekly in the chair until the erosions stop.',
                    'Not ideal. ASP suits localised peripheral erosions; axial scars cause glare. Diffuse EBMD near the axis does better with debridement and diamond burr polishing or PTK. Oral doxycycline (GP) plus a short topical steroid is a medical option.',
                    'No. Surgery is contraindicated in EBMD because it worsens the dystrophy, so the only option is lifelong topical ciclosporin with lubricants; oral doxycycline can be prescribed by the optometrist directly, since it is an antibiotic used for the eye.',
                    'Yes, but only with a Nd:YAG laser, which leaves no scar; needle ASP is no longer used anywhere, and diamond burr polishing and PTK are reserved for Fuchs dystrophy and band keratopathy, not for EBMD, which only ever needs lubricants.'
                ],
                answer: 1,
                explain: 'Oral doxycycline 50 mg BD (inhibits MMP-9) needs a GP prescription; warn about photosensitivity and GI upset, take it upright with water, avoid it in pregnancy and children. Escalation path: optimise lubricants → BCL → doxycycline ± short topical steroid → procedures. Some optometrists in Sydney reportedly perform ASP; know your training and scope before offering it.',
                marker: '“A good summary of surgical option with some optometrists apparently performing ASP in Sydney.”'
            },
            {
                phase: '8. Prognosis',
                type: 'viva',
                question: '“What is her overall prognosis?”',
                points: [
                    'This episode: good. Small defect, healing well at day 1, off the visual axis, so no expected vision loss',
                    'Recurrence: likely, because the EBMD is bilateral and lifelong; each episode carries an infection risk',
                    'Recurrences fall with nightly ointment for at least 3 months and compliance; return early if the pain comes back',
                    'If it keeps recurring, procedures (diamond burr polishing, PTK) have high success and can also smooth an irregular surface',
                    'Vision: EBMD in the axis can cause irregular astigmatism; treat it before cataract surgery (she has nuclear sclerosis) so keratometry and the IOL power are accurate'
                ],
                explain: 'Your conclusion said recurrence is high, but didn’t say what that means for her. Answer in three parts: this episode, recurrence, and long-term vision.',
                marker: '“Concise. What do you think is the overall prognosis for this patient?” (Prognosis 15/20.)'
            }
        ]
    }
);
