// Why each wrong option is wrong, for the cases in mock-2026.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'yo26-aac#1': {
    1: 'Uveitis gives a small pupil and a low or normal IOP more often than 50. Angle closure gives a fixed mid-dilated pupil, and nausea and vomiting are typical of it.',
    2: 'Posner–Schlossman has open angles, mild symptoms and little or no corneal oedema. Angle closure is usually unilateral at onset, and oedema appears within hours.',
    3: 'Nothing here suggests rubeosis (no diabetes or vein occlusion). Haloes, nausea and vomiting are classic angle-closure symptoms.',
  },
  'yo26-aac#2': {
    1: 'Treatment can’t wait for gonioscopy; the tutors called this a red flag. The oedematous cornea limits the view anyway.',
    2: 'Gonioscopy isn’t contraindicated; it is done once IOP is down and the cornea clears, and the fellow eye should be assessed.',
    3: 'Indentation can help, but it doesn’t replace IOP-lowering treatment, which starts straight away.',
  },
  'yo26-aac#3': {
    1: 'Pilocarpine doesn’t work above about 40 mmHg (ischaemic sphincter), and optometrists can’t prescribe acetazolamide.',
    2: 'Cycloplegics worsen angle closure, and latanoprost is too slow for first aid. Pilocarpine does have a role once IOP falls.',
    3: 'Atropine worsens pupil block, optometrists can’t prescribe acetazolamide, and pilocarpine 4% doesn’t work at very high IOP.',
  },
  'yo26-aac#4': {
    1: 'The fellow eye is at high risk of an attack and also gets LPI. ZAP’s ~50% was a relative reduction; the absolute risk was low. EAGLE favoured lens extraction.',
    2: 'LPI still has a role. ZAP showed a small but real benefit, and EAGLE studied people 50 and over with PAC and high IOP or PACG, not only dense cataract.',
    3: 'SLT treats open angles, not angle closure, and neither ZAP nor EAGLE studied it. EAGLE favoured lens extraction over LPI.',
  },
  'yo26-aac#6': {
    4: 'A Krukenberg spindle is pigment dispersion, not a past angle-closure attack.',
    5: 'Horner–Trantas dots are a sign of vernal keratoconjunctivitis.',
  },
  'yo26-hsk-grinder#2': {
    1: 'A cold sore points to HSV, not zoster. HSV dendrites have terminal bulbs and stain well with fluorescein; zoster pseudodendrites stain poorly.',
    2: 'Abrasions don’t branch with terminal bulbs, and dendrites can sit anywhere on the cornea. Goggles don’t prevent reactivation of latent HSV.',
    3: 'Satellite lesions suggest fungus but aren’t diagnostic; there was no vegetative trauma. Cold sores and ocular HSV are usually the same virus (HSV-1).',
  },
  'yo26-hsk-grinder#3': {
    1: 'Steroid on an open HSV epithelial defect can make it geographic. Stopping the antiviral when the haze clears is too early.',
    2: 'Chloramphenicol doesn’t treat HSV, and waiting a week lets the dendrite enlarge.',
    3: 'Aciclovir 3% is 5×/day until healed and for 3 days after. Any steroid on an active dendrite is wrong.',
  },
  'yo26-hsk-grinder#4': {
    1: 'Dilation doesn’t spread virus; it is how you rule out uveitis and retinitis.',
    2: 'HSV can also involve the uvea and retina, so a dilated exam is still needed; the tutors called skipping it a red flag.',
    3: 'Cyclopentolate isn’t routine in epithelial HSV, and the fundus is examined whatever the acuity.',
  },
  'yo26-hsk-grinder#5': {
    5: 'Topical aciclovir 3% works well for a first dendrite. Orals are for specific situations, not every case.',
  },
  'yo26-hsk-grinder#6': {
    1: 'Geographic ulcers stain brightly with fluorescein. Dark patches without a glow are negative staining.',
    2: 'Stromal keratitis shows stromal infiltrate or oedema, not dark tear-film patches, and the defect is closed.',
    3: 'Nothing points to neurotrophic disease; the pattern fits ointment pooling and mild toxicity on a healed epithelium.',
  },
  'yo26-hsk-grinder#7': {
    1: 'The reduction was about 41%, not 90%, and prophylaxis is offered after recurrent or stromal disease, not every first dendrite. Steroid helped stromal disease.',
    2: 'The prophylaxis dose was 400 mg BD, not 800 mg 5×/day, and steroid did speed stromal resolution.',
    3: 'Prophylaxis ran for a year, and steroid didn’t change 6-month vision.',
  },
  'yo26-mk-dailies#2': {
    1: 'Fluoroquinolones still cover most CL Pseudomonas. Monotherapy suits small peripheral ulcers.',
    2: 'Chloramphenicol doesn’t cover Pseudomonas, and fortified drops are still used for severe ulcers.',
    3: 'SCUT was a steroid trial, not an antibiotic comparison. Large or central ulcers get dual therapy.',
  },
  'yo26-mk-dailies#3': {
    1: 'The loading phase is 6 hours, and an antibiotic is never tapered below QID (sub-MIC doses breed resistance).',
    2: 'Ciprofloxacin is 0.3%, not 0.5%. QID from day 2 is too little, and antibiotics aren’t tapered to BD.',
    3: 'Hourly while awake is too little for the first day, and BD is below the minimum inhibitory frequency.',
  },
  'yo26-mk-dailies#4': {
    1: 'They must not be mixed: the β-lactam inactivates the aminoglycoside. Cefazolin covers Gram-positives, gentamicin Gram-negatives.',
    2: 'Given together they still interact on the eye; they are alternated. Gentamicin acts on the 30S subunit.',
    3: 'Both are given round the clock, alternating. The problem is inactivation, not toxicity.',
  },
  'yo26-mk-dailies#5': {
    1: 'SCUT added steroid after 48 h of antibiotic, and found no overall benefit. Strong steroid isn’t given to a small peripheral ulcer.',
    2: 'SCUT found steroid safe with antibiotic cover in bacterial ulcers (except Nocardia); it didn’t double perforations.',
    3: 'Steroid is given with antibiotic cover, not after stopping it. Prednisolone acetate penetrates well.',
  },
  'yo26-poag#2': {
    1: 'The tutors said to describe first, then interpret.',
    2: 'An average within normal limits can hide sectoral loss; the sector and deviation maps matter.',
    3: 'The OCT still shows sectoral thinning here; describe it and check it matches the field.',
  },
  'yo26-poag#3': {
    1: 'Reliability indices still matter on SITA Faster, and one field can’t show progression.',
    2: 'MD alone misses localised loss; the pattern and location matter. SITA Faster can be used for a first field.',
    3: 'SITA Faster reports more than fixation losses. An inferior notch gives a superior field defect.',
  },
  'yo26-poag#4': {
    1: 'Glaucomatous disc damage with a matching field defect is glaucoma, not OHT.',
    2: 'IOP 26 isn’t normal tension; CCT of 528 doesn’t make the true IOP 18.',
    3: 'Hodapp’s early stage is an MD better than −6 dB. A defect near fixation needs a 10-2.',
  },
  'yo26-poag#5': {
    1: 'Systemic and topical β-blockers overlap, so timolol adds less and raises the risk of bradycardia. PGAs aren’t avoided in older men.',
    2: 'CAIs are not first-line, latanoprost doesn’t raise blood pressure, and timolol works less well at night, not only at night.',
    3: 'Pilocarpine isn’t first-line in POAG (side effects, QID dosing, RD risk in myopes).',
  },
  'yo26-poag#6': {
    1: '10% is too little for advanced disease, and 12 months is far too long to wait.',
    2: '21 mmHg is a population figure, not a target. Latanoprost BD is less effective than once daily.',
    3: '50% on one drop is unrealistic for a first target, and SLT works at any stage.',
  },
  'yo26-poag#7': {
    1: 'He needs referral (OBA guideline: within 4 months of starting), and scripts are kept short until he is stable.',
    2: 'Latanoprost is 0.005%, one drop at night.',
    3: 'Combination drops are PBS-restricted to patients not controlled on monotherapy.',
  },
  'yo26-poag#8': {
    1: 'These weren’t multivariate predictors in OHTS; diabetes even appeared protective.',
    2: 'Family history was significant only before adjustment; sex, hyperopia and migraine weren’t predictors.',
    3: 'The direction is reversed: thinner CCT, larger CDR and older age raised risk.',
  },
  'yo26-poag#9': {
    1: 'Latanoprost is TGA B3 (uterotonic concern), not A, and timolol is category C, not X.',
    2: 'Glaucoma drops aren’t category X, and advanced glaucoma can progress in 9 months.',
    3: 'TGA categories aren’t a ranking; brimonidine is B3 and avoided near term. SLT is the preferred option in pregnancy.',
  },
  'yo26-poag#11': {
    1: 'Glaucoma respects the horizontal midline; a vertical-midline defect is neurological.',
    2: 'A dense hemifield defect with new blur needs urgent investigation, not repeat fields.',
    3: 'CMO lowers central vision but doesn’t cause a hemianopic field.',
  },
  'yo26-pds#0': {
    1: 'The tutors said to start broad and then refine; naming it first leaves no room if you are wrong.',
    2: 'A vertical spindle of pigment is a Krukenberg spindle, not inflammatory KPs.',
    3: 'Guttae are beaten-metal excrescences, not a pigmented vertical spindle.',
  },
  'yo26-pds#1': {
    5: 'Flakes on the lens capsule are pseudoexfoliation.',
  },
  'yo26-pds#2': {
    1: 'Most PDS never converts (about 10% at 5 years), and it can burn out.',
    2: 'Conversion is real, and pigment release tends to fall with age as the lens grows and the pupil narrows.',
    3: 'There is no 50%-in-a-year figure, and the iris becomes less concave with age, not convex.',
  },
  'yo26-pds#3': {
    1: 'LPI doesn’t cure it, and evidence it prevents glaucoma is weak. SLT can be used, at lower energy.',
    2: 'Young myopes tolerate pilocarpine poorly, and SLT is less durable in heavily pigmented angles.',
    3: 'Glaucoma with damage is treated; you don’t wait for burnout. Timolol doesn’t increase pigment release.',
  },
  'yo26-pxf#0': {
    5: 'A Krukenberg spindle in a young myope is pigment dispersion.',
  },
  'yo26-pxf#1': {
    1: 'Not every PXF patient gets glaucoma, and PXG progresses faster than POAG.',
    2: 'PXF is the commonest identifiable cause of secondary open-angle glaucoma; EMGT found faster progression.',
    3: 'PXF does convert, and PXG has higher IOP than POAG, needing lower targets.',
  },
  'yo26-pxf#2': {
    1: 'PXG needs a lower target and closer follow-up; drops work less well, and laser can be used.',
    2: 'PGAs aren’t contraindicated in PXF; the differences are the target, follow-up and need for combinations.',
    3: 'Pilocarpine isn’t first-line, and β-blockers don’t weaken zonules.',
  },
  'yo26-sac#2': {
    1: 'Ketotifen is BD; more often adds preservative without benefit. Allergen avoidance starts now.',
    2: 'Itch, papillae and watery discharge point to allergy, not infection.',
    3: 'A strong steroid isn’t first-line in allergic conjunctivitis; start with a dual-acting drop.',
  },
  'yo26-sac#3': {
    1: 'Prednisolone hourly is far too strong, and topical steroids do raise IOP.',
    2: 'NSAIDs help a little but sting and don’t beat antihistamines; 3 months is too long.',
    3: 'Ciclosporin is for severe chronic disease through ophthalmology, and takes weeks. Short low-potency steroids are used.',
  },
  'yo26-vkc#1': {
    1: 'AKC is in older adults with eczema; VKC is the childhood disease that resolves at puberty.',
    2: 'Giant papillae can also be VKC; with limbal dots in a young boy who doesn’t wear lenses, VKC fits.',
    3: 'Limbal Horner–Trantas dots aren’t marginal infiltrates, and there is no blepharitis.',
  },
  'yo26-vkc#2': {
    1: 'Deep penetration isn’t needed for surface disease; a short pulse of FML with a mast-cell stabiliser is safer.',
    2: 'Children are more likely to be steroid responders, and long-term steroid risks cataract.',
    3: 'The ropy discharge is allergic mucus, not infection. Short steroid courses are used in children.',
  },
  'yo26-vkc#3': {
    1: 'Children respond more often and faster than adults, so IOP is checked during the course.',
    2: 'Topical FML doesn’t stunt growth, and children can have steroid IOP rises at any age.',
    3: 'Steroid IOP rises are usually silent; they must be measured.',
  },
  'yo26-vkc#4': {
    1: 'VKC recurs seasonally until puberty.',
    2: 'Most children outgrow VKC; grafts are rarely needed.',
    3: 'VKC is linked to warm, dry climates and atopy, not one country’s allergen.',
  },
  'yo26-aau#1': {
    5: 'Allergic conjunctivitis doesn’t give a hypopyon, KPs or an irregular pupil.',
  },
  'yo26-aau#2': {
    1: 'Dilation doesn’t cause angle closure here (open angle, low IOP), and posterior involvement must be ruled out.',
    2: 'A sterile hypopyon is typical of HLA-B27 AAU; no swab is needed without risk factors for infection.',
    3: 'Low IOP is temporary ciliary body shutdown from inflammation, not a glaucoma.',
  },
  'yo26-aau#3': {
    1: 'FML is too weak for grade 4 cells and a hypopyon.',
    2: 'Phosphate penetrates an intact cornea less well than acetate, and BD is far too little.',
    3: 'This is AAU, not infection; steroid is tapered, never stopped abruptly.',
  },
  'yo26-aau#4': {
    1: 'Tropicamide is the shortest-acting and isn’t used to raise IOP.',
    2: 'Pilocarpine worsens inflammation and promotes synechiae; it is contraindicated in uveitis.',
    3: 'Cyclopentolate isn’t a substitute for steroid, and atropine lasts longer.',
  },
  'yo26-aau#6': {
    1: 'The inflammation has resolved, so this isn’t rebound, and PGAs are avoided in uveitis.',
    2: 'The angle is open; there is no sign of closure, and pilocarpine is contraindicated in uveitis.',
    3: 'IOP 29 needs treating; a steroid response is likely.',
  },
  'yo26-aau#7': {
    1: 'Recurrent, alternating AAU with back pain needs systemic work-up now.',
    2: 'Lymphoma is a concern in older patients; HLA-B27 disease is far more likely here.',
    3: 'Long-term prophylactic steroid isn’t used, and investigations change management (e.g. treating spondyloarthritis).',
  },
  'yo26-panel-tips#0': {
    6: 'Asking whether that is all the information was a tutor tip, not a red flag.',
    7: 'Starting broad was a tutor tip: it leaves room to correct yourself.',
  },
  'yo26-panel-tips#1': {
    5: 'Describe first, then give the diagnosis.',
  },
});
