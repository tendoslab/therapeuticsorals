// Why each wrong option is wrong, for the cases in recalls-2024.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'r2024-myopic-disc#0': {
    1: 'Myopes have deeper chambers; hyperopia is the risk factor for angle closure.',
    2: 'Myopes don’t make more aqueous; the risk comes from the structure of the disc and lamina.',
    3: 'Myopia is an established, independent risk factor for open-angle glaucoma.',
  },
  'r2024-myopic-disc#1': {
    5: 'A disc haemorrhage is a sign of glaucoma, not of myopic change.',
  },
  'r2024-myopic-disc#2': {
    1: 'Central defects are common in glaucoma, especially NTG; fields don’t measure the angle.',
    2: 'The 10-2 covers less of the field than the 24-2; it tests the centre in more detail.',
    3: 'The 24-2 has only a few points in the central 10°, spaced 6° apart, so it can miss paracentral loss.',
  },
  'r2024-arg-gonio#0': {
    1: 'The order runs from the cornea, starting at Schwalbe’s line, and recession shows as differences between eyes and quadrants.',
    2: 'That order is reversed, and gonio findings such as recession and PAS do change management.',
    3: 'The order is wrong, and van Herick estimates the chamber depth; it isn’t a gonioscopy grade.',
  },
  'r2024-arg-gonio#1': {
    1: 'Angle recession widens the angle; pupil block is a different mechanism.',
    2: 'Pigment release describes pigment dispersion; recession glaucoma comes from meshwork scarring.',
    3: 'New vessels describe neovascular glaucoma.',
  },
  'r2024-arg-gonio#2': {
    1: 'The uninjured eye doesn’t have glaucoma and doesn’t need the same target.',
    2: 'Angle-recession glaucoma can progress years after the injury.',
    3: 'Drops are tried first, and a target under 10 isn’t a routine starting goal.',
  },
  'r2024-arg-gonio#3': {
    1: 'PGAs suit ARG well; miotics are the drops to avoid, and SLT works poorly in recessed angles.',
    2: 'β-blockers aren’t ruled out by age and sex alone, and PGAs used in one eye give visible asymmetry.',
    3: 'Miotics can raise IOP in ARG, and SLT usually fails.',
  },
  'r2024-arg-gonio#4': {
    1: 'Endorsed optometrists can start treatment, and ARG is usually harder to control than POAG, not easier.',
    2: 'Collaborative care is advised for secondary glaucoma, especially if advanced or progressing.',
    3: 'IOP in a recessed angle doesn’t reliably return to normal; monitor for life.',
  },
  'r2024-mk-verbal#0': {
    5: 'Photophobia is a symptom, not a sign.',
  },
  'r2024-mk-verbal#1': {
    1: 'Severity depends on size, depth, position and AC reaction, not age alone.',
    2: 'Many non-perforated ulcers need hospital care; chloramphenicol is a poor choice for MK.',
    3: 'Ulcers in non-lens wearers can be just as severe.',
  },
  'r2024-mk-verbal#2': {
    1: 'Drug levels must stay high through the first night; ointment isn’t a substitute for the 30-minute drops.',
    2: 'Chloramphenicol QID under-treats MK and covers Pseudomonas poorly.',
    3: 'Hourly while awake with no overnight dosing is too little for the first 24–48 h.',
  },
  'r2024-mk-verbal#3': {
    1: 'Topical anaesthetics must never be given for home use: they delay healing and can cause corneal melting.',
    2: 'Topical NSAIDs can delay healing and are not the treatment for MK pain.',
    3: 'A bandage lens on an infected ulcer is dangerous.',
  },
  'r2024-aau-iritis#0': {
    1: 'Iritis does give an AC reaction, and KPs are common in acute anterior uveitis.',
    2: 'Both are usually immune-mediated, and KPs sit on the endothelium; they are not stromal infiltrates.',
    3: 'Iritis is a form of anterior uveitis; IOP varies in both, and KPs are inflammatory cells on the endothelium.',
  },
  'r2024-aau-iritis#1': {
    1: 'IOP is often low early in uveitis; a low IOP doesn’t rule it out.',
    2: 'The ciliary body and meshwork are often involved, and IOP should be checked from the first visit.',
    3: 'IOP can rise in uveitis (herpetic, PSS, synechiae, steroid response).',
  },
  'r2024-aau-iritis#2': {
    1: 'Many acute anterior uveitis cases are idiopathic; a first, typical episode doesn’t need blood tests.',
    2: 'Many cases are linked to HLA-B27 and systemic disease, especially when recurrent.',
    3: 'Traumatic uveitis is the one form that doesn’t need a systemic work-up.',
  },
  'r2024-aau-iritis#3': {
    1: 'QID is too little for grade 3 cells, stopping without a taper causes rebound, and atropine does more than relieve pain.',
    2: 'FML is too weak for grade 3 cells, and cycloplegics are standard in uveitis.',
    3: 'Topical prednisolone acetate reaches the AC well; oral steroid isn’t first line.',
  },
  'r2024-hzo-neurotrophic#0': {
    5: 'Fuchs’ dystrophy affects the endothelium and doesn’t cause a stained epithelial lesion.',
  },
  'r2024-hzo-neurotrophic#2': {
    5: 'Retinal detachment from vitreous traction isn’t a typical complication of HZO in the first week.',
  },
  'r2024-hzo-neurotrophic#3': {
    1: 'Age isn’t a contraindication; older people have the most to gain. Adjust the dose for kidney function.',
    2: 'Oral antivirals are the main treatment for HZO and are given in older patients with dose adjustment.',
    3: 'That is the HSV prophylaxis dose, and aciclovir is cleared by the kidneys, so the dose must be adjusted.',
  },
  'r2024-hzo-neurotrophic#4': {
    5: 'Topical anaesthetics worsen neurotrophic keratitis and can cause melting.',
  },
  'r2024-hemianopia#0': {
    1: 'A bitemporal defect affects the temporal field of each eye; here the same side is lost in both eyes.',
    2: 'The defect respects the vertical, not the horizontal, midline.',
    3: 'This is a hemifield defect, not a central scotoma.',
  },
  'r2024-hemianopia#1': {
    1: 'Macular fibres cross at the chiasm like other nasal fibres; sparing depends on the occipital blood supply.',
    2: 'Macular sparing is real and reflects the dual blood supply to the occipital pole.',
    3: 'The occipital cortex is supplied by the posterior and middle cerebral arteries, not the ophthalmic artery.',
  },
  'r2024-hemianopia#2': {
    1: 'Glaucoma doesn’t cause matching defects respecting the vertical midline.',
    2: 'Migraine aura is usually transient; a fixed homonymous defect needs urgent investigation.',
    3: 'Cataract causes general blur, not a hemianopia.',
  },
  'r2024-aac-later#1': {
    1: 'High-strength pilocarpine doesn’t work above about 40 mmHg and can worsen lens-related closure; PGAs act too slowly.',
    2: 'Optometrists should start first-aid drops while arranging urgent referral.',
    3: 'Dilating can worsen pupil-block angle closure.',
  },
  'r2024-aac-later#2': {
    1: 'SLT doesn’t treat angle closure, and the fellow eye is at high risk; AAC is linked with hyperopia, not myopia.',
    2: 'LPI is the first treatment; trabeculectomy is for uncontrolled IOP.',
    3: 'Laser is still needed after the IOP comes down, and contact lens wear isn’t a risk factor.',
  },
  'r2024-aac-later#3': {
    1: 'The superior RNFL serves the inferior field, and the LPI doesn’t reverse damage already done.',
    2: 'RNFL loss doesn’t always hit the macula first, and long-term pilocarpine isn’t the treatment.',
    3: 'Angle closure damages the optic nerve head, not the optic tract.',
  },
  'r2024-chronic-uveitis-steroid#0': {
    1: 'These are deposits on the endothelium, not stromal infiltrates.',
    2: 'Guttata look like beaten metal; these are separate greasy deposits.',
    3: 'A Krukenberg spindle is a thin vertical band of pigment, not scattered greasy deposits.',
  },
  'r2024-chronic-uveitis-steroid#1': {
    1: 'IOP is often low in active uveitis.',
    2: 'Nothing suggests a thin cornea; ciliary body inflammation explains it.',
    3: 'Steroids can raise IOP; they don’t lower it.',
  },
  'r2024-chronic-uveitis-steroid#3': {
    1: 'Grade 3 cells need prednisolone acetate and close review; granulomatous uveitis needs a work-up.',
    2: 'TB is one of several causes; the uveitis is treated while the work-up proceeds, and the cause treated too.',
    3: 'PGAs are avoided in active uveitis, and steroids are the main treatment.',
  },
  'r2024-chronic-uveitis-steroid#4': {
    1: 'Pre-perimetric means structural loss without a field defect; here there is a repeatable defect.',
    2: 'Nothing points to angle closure, and an early field defect isn’t graded severe.',
    3: 'Vitreous cells don’t cause repeatable glaucomatous field defects.',
  },
  'r2024-naion#1': {
    1: 'Glaucoma causes cupping without pallor; this disc has sectoral pallor and no cupping.',
    2: 'Macular oedema reduces central vision; it doesn’t cause altitudinal field loss with 6/6 VA.',
    3: 'Altitudinal defects are usually from the optic nerve or retina, not the cortex.',
  },
  'r2024-naion#2': {
    5: 'A small, crowded fellow disc is typical of NAION, not GCA.',
  },
  'r2024-naion#3': {
    1: 'Steroids don’t restore vision after NAION.',
    2: 'Lowering a normal IOP doesn’t reverse NAION.',
    3: 'The IONDT showed decompression doesn’t help and may harm.',
  },
  'r2024-mk-dual#0': {
    5: 'Angle closure doesn’t fit a lens wearer who slept in lenses and has a painful, red eye with reduced vision; the cornea is the focus.',
  },
  'r2024-mk-dual#2': {
    1: 'Keep the lenses and case for culture, and chloramphenicol QID is far too little for a central ulcer.',
    2: 'Lens wear must stop, and QID ciprofloxacin is under-dosing.',
    3: 'Steroid without antibiotics in active MK risks melting and perforation.',
  },
  'r2024-mk-dual#3': {
    1: 'Tobramycin is an aminoglycoside, not a β-lactam.',
    2: 'Tobramycin isn’t a fluoroquinolone.',
    3: 'Tobramycin isn’t a macrolide; it is bactericidal and strong against Gram-negatives.',
  },
  'r2024-mk-dual#4': {
    1: 'SCUT found no overall benefit, and steroids are started only once the infection is controlled.',
    2: 'SCUT didn’t show harm overall; steroids are used carefully once the infection is controlled.',
    3: 'Steroids are considered after 24–48 h of effective antibiotic, not months later, and antibiotics continue.',
  },
  'r2024-mk-dual#5': {
    1: 'PGAs are avoided while the eye is inflamed.',
    2: 'Stopping the antibiotic risks the infection returning, and the IOP rise is from the steroid.',
    3: 'A steroid-induced IOP rise can damage the nerve and needs treating.',
  },
  'r2024-pss-pregnancy#1': {
    4: 'The angle is open on gonioscopy, so angle closure is ruled out.',
  },
  'r2024-pss-pregnancy#2': {
    1: 'Family history matters for glaucoma risk but doesn’t decide whether a steroid can be used.',
    2: 'Glaucoma drops can be used by lens wearers, with lenses removed while instilling.',
    3: 'Smoking doesn’t contraindicate topical β-blockers; asthma and heart block do.',
  },
  'r2024-pss-pregnancy#3': {
    1: 'PSS is inflammatory and needs a steroid; PGAs are best avoided.',
    2: 'PSS is open-angle; pilocarpine is avoided, and optometrists can’t prescribe acetazolamide.',
    3: 'Attacks can last days to weeks, and repeated spikes can damage the nerve.',
  },
  'r2024-pss-pregnancy#4': {
    1: 'Latanoprost is category B3 and avoided in pregnancy; brimonidine is stopped before birth and in breastfeeding.',
    2: 'Untreated very high IOP can damage the nerve; treatment is chosen carefully with the obstetrician.',
    3: 'Oral acetazolamide isn’t first line in pregnancy, and topical drops with punctal occlusion are preferred.',
  },
  'r2024-optic-neuritis#1': {
    1: 'Papilloedema is bilateral, with normal VA and no RAPD early.',
    2: 'NAION has a swollen disc in the acute stage and is usually painless.',
    3: 'An RAPD is an objective sign of optic nerve disease.',
  },
  'r2024-optic-neuritis#2': {
    1: 'In the ONTT, oral prednisolone alone increased recurrence; IV methylprednisolone sped recovery only.',
    2: 'Optic neuritis needs MRI because of the MS risk, and atypical cases need other causes ruled out.',
    3: 'Glaucoma doesn’t cause sudden reduced VA with pain and an RAPD.',
  },
  'r2024-optic-neuritis#3': {
    1: 'Exercise doesn’t permanently damage the nerve; heat effects are temporary.',
    2: 'Exercise and heat can briefly worsen vision (Uhthoff’s), not improve it.',
    3: 'Heat and exercise can briefly worsen vision, so advice is worth giving.',
  },
  'r2024-ra-prednisone#0': {
    5: 'Steroids don’t cause angle closure.',
  },
  'r2024-ra-prednisone#1': {
    1: 'Wet AMD isn’t caused by steroids, optometrists don’t give injections, and oral steroids must never be stopped suddenly.',
    2: 'Steroids aren’t a risk factor for diabetic macular oedema, and lowering IOP doesn’t treat it.',
    3: 'Retinitis pigmentosa is inherited and unrelated to steroids.',
  },
  'r2024-ra-prednisone#2': {
    1: 'Never stop oral steroids suddenly (adrenal crisis); changes go through the prescriber.',
    2: 'Higher steroid doses raise IOP further.',
    3: 'Oral, inhaled, nasal and skin steroids can all raise IOP.',
  },
  'r2024-ra-prednisone#3': {
    1: 'β-blockers lower BP and heart rate, and betaxolol is still a β-blocker with similar cautions.',
    2: 'Cataract and dry eye aren’t contraindications, and pilocarpine has its own side effects.',
    3: 'Sulfonamide allergy is a CAI contraindication, and optometrists can’t prescribe oral acetazolamide.',
  },
  'r2024-swollen-lid-akc#0': {
    6: 'Bacterial keratitis is a corneal infection, not a cause of a swollen lid on its own.',
  },
  'r2024-swollen-lid-akc#1': {
    1: 'This swaps the two: proptosis and RAPD mean orbital cellulitis.',
    2: 'Both need antibiotics, and orbital cellulitis can spread to the brain.',
    3: 'They can usually be told apart clinically (VA, pupils, movements, proptosis).',
  },
  'r2024-swollen-lid-akc#2': {
    1: 'That describes preseptal cellulitis, not contact dermatitis.',
    2: 'That describes herpes zoster.',
    3: 'Contact dermatitis is allergic or irritant, not fungal.',
  },
  'r2024-swollen-lid-akc#3': {
    1: 'Steroids aren’t antihistamines and can’t be used indefinitely.',
    2: 'Steroids don’t block allergens; mast cell stabilisers are the preventive drops.',
    3: 'AKC is allergic, not bacterial.',
  },
});
