// Why each wrong option is wrong, for the cases in recalls-2018.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'pss#0': {
    5: 'NTG has normal IOP by definition, so it can’t explain a spike to 60.',
    6: 'Rosacea causes surface inflammation, not an IOP of 60.',
  },
  'pss#3': {
    1: 'Pilocarpine worsens inflammation and the angle is already open. PSS needs a steroid, and an IOP of 60 can’t wait 1–2 weeks.',
    2: 'PGAs are avoided in inflammatory glaucoma, hourly steroid is excessive for PSS, and review must be within days.',
    3: 'An IOP of 60 can damage the nerve and needs lowering now. A cycloplegic isn’t needed in PSS.',
  },
  'pss#4': {
    0: 'Recurrent spikes can cause glaucomatous damage (about a quarter), and recurrent PSS is linked to CMV, so it needs ophthalmology.',
    2: 'PSS is an open-angle inflammatory condition. It doesn’t convert to angle closure, and pilocarpine worsens inflammation.',
    3: 'LPI treats pupil block. PSS has an open angle, so LPI does nothing.',
  },
  'pss#5': {
    0: 'A new attack brings back the KPs and cells. A quiet eye with IOP rising weeks into treatment points to the steroid.',
    2: 'Steroids don’t cause angle closure by dilating the pupil. This is an open-angle steroid response.',
    3: 'Steroids don’t meaningfully thicken the cornea. The rise is real: a steroid response.',
  },
  'ntg-young-unreliable-vf#1': {
    6: 'Don’t start treatment before you have a diagnosis. Complete the work-up first.',
  },
  'ntg-young-unreliable-vf#3': {
    0: 'A clover-leaf pattern with high false negatives isn’t a reliable glaucomatous defect. Repeat it before diagnosing anything.',
    2: 'A clover-leaf pattern isn’t bitemporal and doesn’t respect the vertical midline. It’s an inattention artefact.',
    3: 'High false negatives usually mean fatigue or inattention, not malingering. Accusing the patient isn’t appropriate.',
  },
  'ntg-young-unreliable-vf#4': {
    1: 'A clover-leaf field is an artefact, not proof of glaucoma. Base decisions on reliable, repeatable fields.',
    2: 'Asymmetric discs in a 30-year-old need monitoring, not discharge. A new defect must be confirmed before treating.',
    3: 'MRI is for features suggesting a neurological cause, not every abnormal field. Confirm repeatability first.',
  },
  'ntg-young-unreliable-vf#5': {
    0: 'Past CMO is a relative contraindication to PGAs, so they aren’t automatically first line here.',
    2: 'Evening timolol worsens nocturnal hypotension and optic nerve perfusion in NTG. The NTG target comes from CNTGS (30%), not OHTS.',
    3: 'CNTGS showed IOP lowering does slow NTG.',
  },
  'r2018-aau-workup#0': {
    7: 'Colour vision isn’t part of the routine AAU work-up. Optic nerve involvement is assessed on the dilated fundus exam.',
  },
  'r2018-aau-workup#2': {
    0: 'Mechanical back pain is common and nonspecific. It’s inflammatory back pain that points to HLA-B27 disease.',
    2: 'Not all back pain in uveitis is ankylosing spondylitis. The pattern matters.',
    3: 'Sciatica is mechanical nerve-root pain, not the inflammatory pattern of spondyloarthropathy.',
  },
  'r2018-aau-workup#3': {
    1: 'FML BD is far too weak for active AAU, and a 2-week review lets synechiae and complications develop.',
    2: 'Pilocarpine is contraindicated in uveitis, and QID with a week’s review is too little, too late.',
    3: 'Topical prednisolone acetate works well for anterior uveitis. Oral steroids aren’t first line.',
  },
  'r2018-aau-workup#4': {
    0: 'Pilocarpine constricts the pupil and worsens uveitis. Alternating miotics and mydriatics isn’t a recognised technique.',
    2: 'Stacking antimuscarinics on the same sphincter receptor adds little. Add phenylephrine, which acts on the dilator.',
    3: 'Synechiae don’t reliably release on their own, and globe massage isn’t a technique. Escalate mydriatics.',
  },
  'r2018-hsv-epithelial#1': {
    5: 'Exposure keratopathy gives an inferior band of punctate staining, not a branching lesion.',
  },
  'r2018-hsv-epithelial#2': {
    0: 'The two viruses are swapped. HSV lives in the trigeminal ganglion and recurs often; VZV (chickenpox) reactivates usually once as shingles.',
    2: 'Neither is latent in the cornea. Dermatomal rashes are VZV, and recurrent cold sores and dendrites are HSV.',
    3: 'Both are herpesviruses (DNA viruses), not bacterial toxins.',
  },
  'r2018-hsv-epithelial#3': {
    1: 'Eye disease is mostly HSV-1, and both cause epithelial dendrites. Typing doesn’t change treatment.',
    2: 'HSV-2 can infect the eye, classically in neonates.',
    3: 'You can’t tell the types apart by dendrite shape. Both give true dendrites with terminal bulbs that stain with fluorescein.',
  },
  'r2018-hsv-epithelial#4': {
    5: 'Frequent recurrence is typical of HSV. Zoster usually happens once.',
  },
  'r2018-hsv-epithelial#5': {
    0: 'Steroids are contraindicated in active epithelial HSV. Debridement helps, and review should be within 1–2 days.',
    2: 'Antivirals are the treatment, and an untreated dendrite can spread. Review in 1–2 days, not a month.',
    3: 'Oral 400 mg BD is prophylaxis, not treatment. Active dendrites need treatment doses and early review.',
  },
  'r2018-pxf-diurnal#1': {
    0: 'Young myopic men describes PDS, and myocilin is linked with juvenile/POAG. PXF is older and LOXL1-associated.',
    2: 'Atopic children with HLA-B27 describes nothing like PXF, which affects older adults.',
    3: 'Hyperopic East Asian women describes angle-closure risk. PXF is linked to LOXL1, and CYP1B1 to congenital glaucoma.',
  },
  'r2018-pxf-diurnal#2': {
    0: 'A single reading of 15 doesn’t rule out risk in PXF, where IOP fluctuates and peaks.',
    2: 'PXF without glaucoma isn’t automatically treated. Phase and monitor first.',
    3: 'PXF eyes don’t always have occludable angles. Check gonioscopy rather than assume.',
  },
  'r2018-pxf-diurnal#3': {
    0: 'An asymmetry of 3 mmHg doesn’t diagnose glaucoma. Glaucoma needs optic neuropathy.',
    2: 'PXF has a high conversion risk, so annual review isn’t close enough.',
    3: 'There’s no glaucoma to operate on, and drops work in PXF when needed.',
  },
  'r2018-pxf-diurnal#4': {
    0: 'EMGT showed treatment slows progression across IOP levels. Waiting for 30 is unsafe in PXF.',
    2: 'Pilocarpine isn’t first line and doesn’t treat PXF material release.',
    3: 'Optometrists can’t prescribe acetazolamide, and there’s no systemic treatment for PXF. A topical drop is first line.',
  },
  'r2018-pxf-diurnal#5': {
    1: 'It’s the reverse. Melanin binds drug, so darker irides may need 0.5%, and light irides do well on 0.25%.',
    2: 'β-blockers aren’t contraindicated in PXF, and pilocarpine 4% QID isn’t a sensible second line.',
    3: 'Timolol is given in the morning, not at night, and strength does affect systemic risk.',
  },
  'r2018-pxf-diurnal#6': {
    0: 'PGAs are B3 and avoided in pregnancy. Brimonidine and timolol aren’t category D.',
    2: 'Acetazolamide is B3, not A, and isn’t the safest choice. Brimonidine is B3 and avoided while breastfeeding.',
    3: 'Risk continues after the first trimester (e.g. PGAs are uterotonic, brimonidine affects neonates). Brimonidine is B3, not B1.',
  },
  'r2018-mk-vs-marginal#2': {
    1: 'QID is too low for MK, and you never taper below QID while treating. Review the next day.',
    2: 'Chloramphenicol is weak against Pseudomonas, and steroid isn’t added just because pain eases.',
    3: 'A presumed bacterial ulcer isn’t treated as immune. Steroid first risks a melt, and an antibiotic tapered to daily breeds resistance.',
  },
  'r2018-mk-vs-marginal#3': {
    0: 'Ulcers don’t resolve in 24 h. Stable or slightly improved is the expected response.',
    2: 'Worsening at 24–48 h means treatment failure: culture and refer.',
    3: 'A new hypopyon means worsening and needs referral.',
  },
  'r2018-mk-vs-marginal#4': {
    0: 'SCUT added steroid after 48 h and found no overall benefit. Day-1 steroid is unsafe.',
    2: 'Steroids aren’t banned for life. SCUT showed possible benefit in selected central ulcers.',
    3: 'SCUT studied topical prednisolone phosphate, not oral steroids.',
  },
  'r2018-anna-disc-haem#0': {
    1: 'Vessel calibre is unreliable for judging disc size. Without a reference, size is a guess.',
    2: 'Rim, RNFL and especially the haemorrhage can and should be described.',
    3: 'Photo magnification doesn’t give disc size, and the haemorrhage is the key finding, to describe now.',
  },
  'r2018-anna-disc-haem#1': {
    4: 'A physiologically large cup is a normal variant and doesn’t bleed.',
    5: 'An optic pit is a congenital defect linked to macular schisis or detachment, not disc haemorrhages.',
  },
  'r2018-anna-disc-haem#3': {
    5: 'B-scan is for disc drusen or no fundus view. It doesn’t help assess a disc haemorrhage.',
  },
  'r2018-anna-disc-haem#4': {
    1: 'CCT “correction” is unreliable, and OHTS treatment helped across CCT levels. A haemorrhage with a family history is high risk.',
    2: 'A haemorrhage raises risk but isn’t diagnostic on its own. Urgent 24-hour referral isn’t needed.',
    3: 'Don’t assume a PVD caused it. OHTS did show treatment reduced conversion.',
  },
  'r2018-anna-disc-haem#5': {
    1: 'That’s nearer timolol’s profile. Latanoprost starts at 3–4 h and peaks at 8–12 h.',
    2: 'Latanoprost doesn’t give 40–50% reduction or take 6 months.',
    3: 'Latanoprost starts within hours and lowers IOP by about 25–35%.',
  },
  'r2018-anna-disc-haem#6': {
    1: 'Avoid PGAs throughout pregnancy where possible, not just the last trimester.',
    2: 'PGAs are B3, not A, and punctal occlusion still helps.',
    3: 'PGAs are B3, not D, and they’re avoided throughout pregnancy, not preferred after 12 weeks.',
  },
  'r2018-anna-disc-haem#7': {
    1: 'Aqueous production peaks by day, not at night. Light irides need less drug, not more.',
    2: 'Night dosing is avoided because of nocturnal hypotension. Blood pressure is lower at night.',
    3: 'Strength does affect systemic effects, and once-daily morning timolol often controls IOP.',
  },
  'r2018-anna-disc-haem#8': {
    5: 'Well-controlled hypertension on an ACE inhibitor isn’t a contraindication to topical β-blockers.',
  },
  'r2018-anna-disc-haem#9': {
    1: 'Only about 5% are high responders, and the rise takes 2–6 weeks, not 24–48 h.',
    2: 'About a third respond moderately, and the rise appears within weeks. Angle-closure suspects aren’t a risk group.',
    3: 'Most people are low responders, and the rise happens during use, not after stopping.',
  },
  'r2018-lily-synechiae#0': {
    5: 'Schirmer testing has no role in the uveitis work-up.',
  },
  'r2018-lily-synechiae#1': {
    3: 'Atropine doesn’t lower IOP, and it can raise it in narrow angles.',
    4: 'Atropine has no antimicrobial action, and most AAU isn’t infective anyway.',
  },
  'r2018-lily-synechiae#2': {
    1: 'Phenylephrine isn’t an antimuscarinic; it’s an α1-agonist on the dilator. Cyclopentolate adds little; it doesn’t cancel atropine.',
    2: 'Atropine relaxes the sphincter, and phenylephrine contracts the dilator. Cyclopentolate is avoided because it adds nothing, not because it stings.',
    3: 'They act on different muscles; that’s the point. Cyclopentolate acts on the sphincter, like atropine.',
  },
  'r2018-lily-synechiae#3': {
    1: 'Pilocarpine constricts the pupil, which is the opposite of what’s needed, and it worsens inflammation.',
    2: 'If atropine hasn’t broken them, more atropine rarely will. Add a stronger dilator stimulus.',
    3: 'Globe massage isn’t a way to break synechiae.',
  },
  'r2018-lily-synechiae#4': {
    4: 'Asthma and COPD are cautions for β-blockers, not atropine.',
    5: 'Previous uveitis isn’t a contraindication. Atropine is part of uveitis treatment.',
  },
  'r2018-lily-synechiae#5': {
    1: 'QID is too infrequent to start moderate AAU, and stopping abruptly causes rebound.',
    2: 'FML penetrates far less well than Pred Forte and is too weak for moderate AAU.',
    3: 'A 2-day burst followed by stopping invites rebound, and atropine once weekly isn’t a regimen.',
  },
  'r2018-lily-synechiae#6': {
    5: 'A first episode that’s improving can be managed without referral.',
  },
});
