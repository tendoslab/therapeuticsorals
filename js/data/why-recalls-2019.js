// Why each wrong option is wrong, for the cases in recalls-2019.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'r2019-arcuate-ddx#0': {
    6: 'Pituitary lesions compress the chiasm and respect the vertical midline. They don’t cause arcuate defects.',
    7: 'Occipital lesions give homonymous defects that respect the vertical midline, not arcuate defects.',
  },
  'r2019-arcuate-ddx#1': {
    1: 'An abnormal GHT doesn’t make a defect severe. With an MD of −11 dB, it’s moderate.',
    2: 'Early is an MD better than −6 dB. −6 to −12 dB is moderate.',
    3: 'Reaching the blind spot doesn’t define end-stage. Staging uses MD, point counts and central involvement.',
  },
  'r2019-arcuate-ddx#2': {
    1: 'CCT doesn’t decide the drug class, and in OHTS thin (not thick) CCT predicted conversion to open-angle glaucoma.',
    2: 'CCT doesn’t predict the defect type, and it isn’t needed before gonioscopy.',
    3: 'No CCT value diagnoses glaucoma. It’s a risk factor and affects the IOP reading.',
  },
  'r2019-arcuate-ddx#3': {
    5: 'Renal impairment isn’t a β-blocker contraindication. Timolol is mainly cleared by the liver.',
    6: 'Sulfonamide allergy is relevant to CAIs (dorzolamide, acetazolamide), not β-blockers.',
  },
  'r2019-red-eye-mk#0': {
    5: 'A family history of glaucoma doesn’t help sort out an acutely painful red eye.',
  },
  'r2019-red-eye-mk#1': {
    5: 'Measure IOP and assess the angle before dilating. Dilating first risks precipitating angle closure.',
  },
  'r2019-red-eye-mk#2': {
    1: 'QID is too infrequent for MK, a steroid from day 1 is unsafe, and review must be daily.',
    2: 'Chloramphenicol is weak against Pseudomonas, contact lenses must stay out, and review should be at 24 h.',
    3: 'Loading doesn’t sterilise an ulcer; treatment continues until healed. Steroid from day 1 is unsafe.',
  },
  'r2019-red-eye-mk#3': {
    1: 'Mixing them in one bottle inactivates the aminoglycoside. Fortified drops are hospital-made, and optometrists don’t prescribe them.',
    2: 'Two fluoroquinolones add nothing. Fortified therapy pairs a cephalosporin (Gram-positive) with an aminoglycoside (Gram-negative).',
    3: 'Vancomycin and amphotericin aren’t routine first-line therapy, and age alone isn’t a reason for antifungal cover.',
  },
  'r2019-red-eye-mk#4': {
    1: 'Doxycycline is oral, used here as an MMP inhibitor rather than an antibiotic, and it’s contraindicated in pregnancy and under 8.',
    2: 'It works by inhibiting MMPs, not by stimulating stem cells, and it needs a prescription.',
    3: 'Doxycycline doesn’t lower IOP, and optometrists can’t prescribe oral drugs.',
  },
  'r2019-red-eye-mk#5': {
    1: 'Non-response usually means the wrong organism or resistance, not sterile inflammation. Re-culture and rethink before adding steroid.',
    2: 'Oral fluoroquinolones don’t replace intensive topical therapy. They have a role only with scleral extension or perforation risk.',
    3: 'Stopping treatment on an active ulcer is dangerous. Toxicity is considered, but infection must be excluded first.',
  },
  'r2019-red-eye-mk#6': {
    1: 'Chloramphenicol has poor Pseudomonas cover and isn’t adequate for bacterial keratitis.',
    2: 'A steroid doesn’t control infection and can make it worse.',
    3: 'A 24-hour delay risks rapid melting. Start an alternative now and refer.',
  },
  'r2019-red-eye-mk#7': {
    1: 'Delaying the antibiotic risks the cornea. Start the loading dose and refer the same day.',
    2: 'A steroid before the infection is controlled risks a melt. The antibiotic comes first.',
    3: 'A central infiltrate with pain is presumed infective. Waiting 24 h is unsafe.',
  },
  'r2019-aac-bilateral#0': {
    1: 'AAC is severely painful, with oedema and a fixed, mid-dilated pupil. It isn’t painless.',
    2: 'AAC causes severe pain, not grittiness or itch.',
    3: 'Pain on eye movement is optic neuritis. AAC gives constant severe ache, headache and vomiting.',
  },
  'r2019-aac-bilateral#1': {
    1: 'Never dilate the fellow eye: it may be occludable too.',
    2: 'Waiting delays first aid. The fellow eye’s angle gives the answer now.',
    3: 'Pilocarpine doesn’t clear the cornea and won’t work at very high IOP.',
  },
  'r2019-aac-bilateral#3': {
    4: 'A hyphaema in one eye causes a unilateral pressure rise, not bilateral angle closure.',
    5: 'A CRVO in one eye can cause neovascular glaucoma in that eye only, months later.',
  },
  'r2019-aac-bilateral#4': {
    1: 'The fellow eye shares the anatomy, and its risk is high (around 40–80%), which is why it gets an LPI.',
    2: 'The risk is far higher, so prophylactic LPI is offered whether or not there are symptoms.',
    3: 'The risk is high but not certain or immediate. The fellow eye gets a prophylactic LPI, not emergency surgery.',
  },
  'r2019-aac-bilateral#5': {
    1: 'At very high IOP the sphincter is ischaemic and pilocarpine won’t work. It doesn’t replace hospital care.',
    2: 'When no specialist can be reached, pilocarpine is reasonable once IOP has fallen below about 40, and timolol shouldn’t be repeated that often.',
    3: 'Atropine dilates the pupil and worsens angle closure.',
  },
  'r2019-aac-bilateral#6': {
    1: 'The oedema comes from pressure overwhelming the endothelial pump, and the fixed pupil from ischaemia, not from prior medicines.',
    2: 'The oedema isn’t from evaporation, and the pupil is fixed because of iris ischaemia, not optic nerve failure.',
    3: 'The cornea swells because pressure overwhelms the pump, and the pupil is fixed from ischaemia, not synechiae.',
  },
  'r2019-glaucoma-drugs#0': {
    1: 'That’s pilocarpine. PGAs act on FP receptors to increase uveoscleral outflow.',
    2: 'That’s timolol. PGAs increase outflow; they don’t reduce production.',
    3: 'That’s dorzolamide or brinzolamide. PGAs work on outflow.',
  },
  'r2019-glaucoma-drugs#3': {
    1: 'Combinations aren’t first line, because a second drug doesn’t double the effect. Fewer bottles do help adherence.',
    2: 'Combinations are used as a second step, not only after failed surgery. Optometrists can prescribe them.',
    3: 'Combinations don’t halve each drug’s dose, and pregnancy isn’t their indication.',
  },
  'r2019-glaucoma-drugs#4': {
    1: 'Pilocarpine is an agonist, not an antagonist. In recession, the scarred TM can’t respond and uveoscleral outflow is cut.',
    2: 'Pilocarpine is a muscarinic agonist, not an α-agonist.',
    3: 'That describes a PGA, which actually works well in angle recession.',
  },
  'r2019-glaucoma-drugs#5': {
    1: 'Younger patients have more years to lose sight, so progression needs escalation, not acceptance.',
    2: 'There’s no sex difference in PGA response that justifies switching. Age is the point.',
    3: 'Progression at a low IOP isn’t always neurological. Check adherence and fluctuation, confirm, then escalate.',
  },
  'r2019-fhx-iop24#0': {
    1: 'A family history doesn’t make it glaucoma. With normal structure and function, it’s OHT, and the risk calculator helps decide.',
    2: 'Siblings count as first-degree relatives and raise the risk. He needs monitoring.',
    3: 'Drops aren’t contraindicated under 50. Both drops and SLT are options.',
  },
  'r2019-fhx-iop24#1': {
    1: 'CNTGS is an NTG trial, not OHT. OHTS used ≥20%.',
    2: '10% is too little. OHTS aimed for at least 20%.',
    3: 'EMGT didn’t set a 50% target. That’s unrealistic.',
  },
  'r2019-fhx-iop24#2': {
    1: 'LiGHT showed SLT works well first line, and an ophthalmologist does it.',
    2: 'LiGHT found about 74% drop-free at 3 years, and SLT is done by an ophthalmologist.',
    3: 'LiGHT studied OAG and OHT, not angle closure.',
  },
  'r2019-fhx-iop24#3': {
    1: 'Pilocarpine isn’t a standard third choice; it’s poorly tolerated. SLT, brimonidine or a CAI come first.',
    2: 'Long-term oral acetazolamide is poorly tolerated and isn’t used for OHT.',
    3: 'Brimonidine, CAIs and SLT don’t share PGA contraindications.',
  },
  'r2019-fhx-iop24#4': {
    1: 'PGAs aren’t inactivated by daylight and don’t cause drowsiness.',
    2: 'PGAs don’t sedate. Night dosing covers the early-morning peak and hides the redness.',
    3: 'Closed lids aren’t needed. The reasons are a slightly better effect and hiding hyperaemia.',
  },
  'r2019-fhx-iop24#5': {
    1: 'New defects can appear at any time. A confirmed one needs action, not a 12-month wait.',
    2: 'PGAs don’t damage the optic nerve. A new defect means escalating treatment.',
    3: 'A defect that matches the structure is glaucomatous progression, not optic neuritis.',
  },
  'r2019-aau-drugs#0': {
    1: 'That’s about conjunctivitis. With synechiae, the key sign is AC cells, and IOP separates PSS or herpetic causes from typical AAU.',
    2: 'Lid swelling isn’t relevant here, and IOP doesn’t separate preseptal from orbital cellulitis.',
    3: 'Pupil size alone isn’t the key sign, and IOP doesn’t separate cataract from uveitis.',
  },
  'r2019-aau-drugs#1': {
    1: 'Mutton-fat KPs are macrophage and epithelioid cell clumps, and iris nodules are granulomatous.',
    2: 'Mutton-fat KPs are the hallmark of granulomatous uveitis, not fibrin.',
    3: 'They’re cellular, not calcium, and Koeppe nodules are granulomatous.',
  },
  'r2019-aau-drugs#2': {
    5: 'Phenylephrine is an α1-agonist, not a β2-agonist, and asthma isn’t a contraindication.',
  },
  'r2019-aau-drugs#3': {
    1: 'Frequent dosing doesn’t prevent steroid response, and atropine doesn’t lower IOP that way.',
    2: 'Steroids don’t kill organisms, and atropine doesn’t increase steroid absorption.',
    3: 'A taper is still needed, and atropine dilates the pupil; it doesn’t constrict it.',
  },
  'r2019-pxf-quickfire#0': {
    1: 'Conversion isn’t negligible. It’s around 15% at 10 years.',
    2: 'Most PXF doesn’t convert. About 15% at 10 years is the population figure.',
    3: 'Conversion is gradual, not mostly in the first year.',
  },
  'r2019-pxf-quickfire#1': {
    1: 'The rates are swapped. PXF progresses fastest (about −3.1 dB/yr) and NTG slowest.',
    2: 'PXF progresses much faster than NTG, and drusen and naevi aren’t PXF associations.',
    3: 'PXF does progress, and fastest of all. Diabetic retinopathy and AMD aren’t PXF associations.',
  },
  'r2019-pxf-quickfire#2': {
    1: 'PGAs work well in PXF, and timolol is BD at most, never QID. Secondary glaucoma needs referral now.',
    2: 'IOP 28 isn’t normal, and PXF commonly causes glaucoma.',
    3: 'Pilocarpine 4% isn’t first line, and PXF material isn’t pigment release. Surgery wasn’t the question.',
  },
});
