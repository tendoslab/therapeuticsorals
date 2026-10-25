// Why each wrong option is wrong, for the cases in peer-recalls.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'poag-staging#0': {
    4: 'A pituitary lesion gives bitemporal loss that respects the vertical midline, not a hemifield defect that respects the horizontal one.',
  },
  'poag-staging#3': {
    0: 'GPA needs 3 or more points worse on 2–3 consecutive tests, not a single point once. Trend analysis is useful after about 5 fields, and OCT helps monitor progression too.',
    2: 'Both event and trend analysis are used clinically, and two fields aren’t enough for a slope. Front-load fields early.',
    3: 'GHT isn’t a progression tool. Use GPA event and trend analysis alongside OCT.',
  },
  'poag-staging#4': {
    0: 'The right eye has high IOP and an early defect, so it needs treatment too. Advanced disease needs a lower target (≥30%), and referral is within 4 months.',
    2: 'Start with monotherapy and step up. Don’t begin with a combination. A target of ≤21 is too high for advanced disease.',
    3: 'With advanced loss near fixation, observing for 12 months risks losing more vision. Treat now.',
  },
  'cn3-palsy#1': {
    0: 'A painful, pupil-involving third nerve palsy is an aneurysm until proven otherwise. A week’s delay could be fatal.',
    2: 'Myasthenia never affects the pupil. A dilated pupil with a third nerve palsy is an emergency.',
    3: 'An Adie’s pupil doesn’t cause ptosis or a down-and-out eye. This needs emergency imaging.',
  },
  'cn3-palsy#2': {
    1: 'It’s the reverse. Pupil fibres run on the outside of the nerve, so compression hits them first and ischaemia of the core spares them.',
    2: 'Pupillomotor fibres travel with CN III to the ciliary ganglion, not with CN VI.',
    3: 'Diabetes doesn’t protect the pupil fibres. They’re spared because of their superficial position.',
  },
  'cn3-palsy#3': {
    0: 'Microvascular palsies usually recover, but not always, and new features (pupil involvement, aberrant regeneration) need imaging. Watch the pupil closely early on.',
    2: 'A pupil-sparing, complete palsy in a vasculopath is usually microvascular, and the GP needs to control the risk factors.',
    3: 'Topical steroids have no role in a cranial nerve palsy.',
  },
  'phlyctenulosis#1': {
    0: 'Phlyctens are a type IV delayed reaction to microbial antigen, not a type I pollen allergy.',
    2: 'The nodule is sterile and immune-mediated, not an infection.',
    3: 'Phlyctens are type IV reactions to staph (or TB) antigen, not immune complexes to HSV.',
  },
  'phlyctenulosis#2': {
    0: 'Phlyctens are sterile, and steroids help them. Doxycycline is contraindicated under 8.',
    2: 'Hourly potent steroid is excessive and must be tapered. Children are more likely to respond to steroids, so IOP checks are essential. The lids need treating to stop recurrence.',
    3: 'A limbal nodule with blepharitis in a child is classic phlyctenulosis, not a tumour, and it responds to steroid.',
  },
  'phlyctenulosis#3': {
    0: 'A new epithelial defect with a dense infiltrate is infection until proven otherwise. Hold the steroid.',
    2: 'Increasing steroid on a possible infection risks a melt, and a bandage lens adds infection risk.',
    3: 'A dense infiltrate with a defect points to bacteria first, not HSV.',
  },
  'brimonidine-allergy#0': {
    0: 'Adenovirus is acute and usually asymmetric, and doesn’t give dry, scaly lids months after a new drop.',
    2: 'BAK toxicity gives punctate staining and irritation. Follicles with eczematous lids months after starting brimonidine point to allergy.',
    3: 'Seasonal allergy gives papillae, not follicles, and wouldn’t cause eczematous lids timed to a new drop.',
  },
  'brimonidine-allergy#1': {
    4: 'GPC is a contact lens or prosthesis problem. This patient isn’t a lens wearer.',
  },
  'brimonidine-allergy#2': {
    0: 'Brimonidine allergy doesn’t settle while the drop continues. Stop it and substitute.',
    2: 'Never stop all glaucoma drops without a plan. The IOP will rise.',
    3: 'Apraclonidine cross-reacts and has even more allergy. Allergies must always be recorded.',
  },
  'peer-paeds-chlamydia#0': {
    1: 'Crusting and purulent discharge are bacterial. Adenovirus is watery, and Pseudomonas isn’t a typical childhood organism.',
    2: 'Pseudomonas and Serratia are contact lens organisms, and gonococcus causes hyperacute neonatal disease.',
    3: 'Allergy causes itch and watery or stringy discharge, not crusting.',
  },
  'peer-paeds-chlamydia#1': {
    1: 'Ciprofloxacin isn’t first line for simple conjunctivitis, and the loading regimen is for keratitis. It isn’t category A.',
    2: 'Tobramycin binds 30S, is bactericidal, and is mainly Gram-negative.',
    3: 'Chloramphenicol binds 50S, is bacteriostatic and broad-spectrum, and is weak against Pseudomonas. 14 days is too long.',
  },
  'peer-paeds-chlamydia#2': {
    0: 'Worsening after treatment needs swabs and a rethink, not just more of the same.',
    2: 'Assuming an allergic reaction and adding a steroid without investigating could worsen an infection.',
    3: 'Switching blindly misses chlamydia, HSV or adenovirus. Swab first.',
  },
  'peer-paeds-chlamydia#3': {
    0: 'Chlamydia is a bacterium, not a virus. It’s an obligate intracellular one, which is why routine culture misses it.',
    2: 'Chlamydia is an obligate intracellular Gram-negative bacterium and doesn’t grow on blood agar.',
    3: 'Chlamydia is a bacterium, not a yeast.',
  },
  'peer-paeds-chlamydia#5': {
    0: 'Topical treatment alone doesn’t eradicate chlamydia. It needs systemic azithromycin and contact tracing.',
    2: 'Doxycycline is contraindicated under 8 (tooth staining) and in pregnancy.',
    3: 'Chlamydia has little peptidoglycan, and amoxicillin isn’t first line. Azithromycin is.',
  },
  'peer-hsv-stromal-steroid#0': {
    0: 'Immune stromal keratitis is T-cell mediated and needs steroid. HEDS showed steroid with antiviral cover works.',
    2: 'Steroid needs antiviral cover in HSV, and a 1-week taper invites rebound.',
    3: 'Stromal disease isn’t debrided, and it needs steroid under antiviral cover.',
  },
  'peer-hsv-stromal-steroid#1': {
    4: 'G6PD deficiency isn’t an aciclovir contraindication. Renal function is the key concern.',
  },
  'peer-hsv-stromal-steroid#2': {
    0: 'Steroid response is defined by the rise from baseline, and it takes weeks to develop and resolve.',
    2: 'The Armaly classes are under 6, 6–15 and over 15 mmHg. A 2 mmHg change is noise.',
    3: 'A steroid response raises IOP; it doesn’t lower it.',
  },
  'peer-hsv-stromal-steroid#3': {
    0: 'Stopping abruptly risks stromal rebound. PGAs are avoided in HSV, and this needs co-management.',
    2: 'High IOP can damage the nerve while you wait. Treat significant rises.',
    3: 'Pilocarpine worsens inflammation, and timolol doesn’t reactivate HSV.',
  },
  'peer-mk#2': {
    1: 'Chloramphenicol QID isn’t enough for MK, contact lenses must stop, and review is at 24 h.',
    2: 'A steroid combination on an untreated ulcer is unsafe.',
    3: '“Cyclo” means cycloplegic, which relaxes the ciliary muscle. Pilocarpine contracts it and worsens pain.',
  },
  'peer-mk#3': {
    0: 'Worsening needs culture and fortified therapy, not more cipro and a week’s wait. The 1-2-3 rule is for bacterial keratitis, and age does affect outcomes.',
    2: 'Worsening is infection until proven otherwise. Adding steroid is dangerous.',
    3: 'A bandage lens on an infected ulcer is unsafe, and a 2-week wait is far too long.',
  },
  'peer-mk#4': {
    0: 'SCUT used prednisolone phosphate after 48 h of moxifloxacin, found no overall benefit, and Nocardia did worse.',
    2: 'SCUT didn’t show more perforations or contraindicate steroids.',
    3: 'SCUT tested topical prednisolone phosphate, not oral steroids.',
  },
  'peer-mk#6': {
    1: 'It’s the reverse: Gram-positives have the thick peptidoglycan wall, and Gram-negatives have the outer LPS membrane.',
    2: 'Gram-positives have a thick wall, and the endotoxin is LPS in the outer membrane, not a capsule.',
    3: 'Gram staining reflects wall structure, not oxygen use. Both groups include cocci and rods.',
  },
  'peer-mk-large-deep#0': {
    5: 'Episcleritis is inflammation of the episclera. It doesn’t cause a corneal stromal infiltrate.',
  },
  'peer-mk-large-deep#1': {
    0: 'A large deep ulcer needs fortified therapy and same-day referral. QID monotherapy and a week’s wait risk perforation.',
    2: 'Fortified drops are compounded by hospital pharmacies, and optometrists don’t prescribe them.',
    3: 'Oral antibiotics don’t replace intensive topical therapy for keratitis.',
  },
  'peer-mk-large-deep#4': {
    0: 'Steroid isn’t always used, it still needs antibiotic cover and a taper, and it’s avoided with fungi, Acanthamoeba and Nocardia.',
    2: 'A steroid can help limit central scarring once the infection is controlled and the organism is known.',
    3: 'Topical, not oral, steroid is used under antibiotic cover, managed by ophthalmology.',
  },
  'peer-glaucoma-discs#1': {
    5: 'A Schirmer test isn’t part of the glaucoma work-up.',
  },
  'peer-glaucoma-discs#2': {
    0: 'Glaucoma is staged by the field (and structure), not by IOP.',
    2: 'Mills is a field-based system, and C/D alone is unreliable because disc size varies.',
    3: 'PSD isn’t the staging metric, and DDLS is a structural disc scale. Hodapp uses MD and point criteria.',
  },
  'peer-glaucoma-discs#4': {
    0: 'The OBA guideline (as taught) requires referral within 4 months of starting treatment, not 2 years.',
    2: 'Referral to an ophthalmologist is required after starting treatment.',
    3: 'The referral is to an ophthalmologist, whatever the IOP. The GP doesn’t become the co-manager.',
  },
  'peer-acg#1': {
    0: 'Treating as uveitis with atropine would worsen an angle closure. Use the fellow eye and AS-OCT to decide.',
    2: 'Never dilate in suspected angle closure. It could worsen the attack or trigger one in the other eye.',
    3: 'Corneal sensation and BP don’t separate AAC from uveitis.',
  },
  'peer-acg#3': {
    0: 'CAIs don’t block insulin or β2 receptors. The risks come from acidosis and hypokalaemia.',
    2: 'CAIs cause acidosis and hypokalaemia, not alkalosis and hyperkalaemia.',
    3: 'Even a single dose causes acidosis and diuresis, which matter in COPD and diabetes.',
  },
  'peer-acg#4': {
    0: 'At very high IOP the sphincter is ischaemic, so pilocarpine won’t work until IOP falls.',
    2: 'With no specialist reachable, pilocarpine is reasonable once IOP is below ~40 in phakic pupil block. Repeating timolol that often isn’t appropriate.',
    3: 'Atropine dilates the pupil and worsens angle closure.',
  },
  'peer-acg#5': {
    0: 'The angle can close again before the LPI. Keep pilocarpine going, including in the occludable fellow eye.',
    2: 'Atropine can re-close the angle. A steroid is needed to settle the inflammation.',
    3: 'PGAs don’t keep the angle open. Pilocarpine is what holds it open until the LPI.',
  },
  'peer-acg#6': {
    0: 'Vision is reduced, they may vomit, and pilocarpine dims vision. They must not drive.',
    2: 'Driving with one eye closed, in pain and possibly vomiting, isn’t safe.',
    3: 'AAC needs same-day hospital care. Waiting overnight risks permanent damage.',
  },
  'peer-pxf#1': {
    0: 'PXF doesn’t thin the cornea, and its angles can narrow as the lens moves forward on weak zonules. Gonioscopy is key.',
    2: 'PXF isn’t a diabetic complication, and fields are part of the baseline work-up.',
    3: 'PXF material doesn’t block meibomian glands. IOP and gonioscopy are needed at diagnosis.',
  },
  'peer-pxf#2': {
    0: 'PXF progresses fastest in EMGT (about −3.1 dB/yr), not slowest. Waiting for VA to fall is far too late.',
    2: 'Cataract surgery doesn’t stop PXF glaucoma. Drops are often needed.',
    3: 'Not all PXF converts (about 15% at 10 years). Treat glaucoma or high-risk PXF, not every eye.',
  },
  'peer-pxf#3': {
    0: 'PXG progresses fast, so yearly review is too infrequent.',
    2: 'Weekly IOP and monthly fields are impractical and unnecessary.',
    3: 'Both need regular monitoring because progression can be rapid.',
  },
  'peer-pxf#4': {
    0: 'LPI is an ophthalmologist’s procedure, done after pilocarpine (not atropine) in the peripheral iris. It does little for plateau iris.',
    2: 'SLT treats the trabecular meshwork. LPI is a hole in the iris.',
    3: 'LPI goes through the peripheral iris, not the cornea, and it doesn’t remove PXF material.',
  },
  'peer-lily-glaucoma#1': {
    0: 'Timolol is less effective than a PGA and has systemic risks in older adults.',
    2: 'Pilocarpine isn’t first line and doesn’t clear PXF material, and its side effects are poorly tolerated.',
    3: 'PGAs are fine in PXF. The precautions are uveitis, HSV and CMO, and one-eye use does cause asymmetry.',
  },
  'peer-lily-glaucoma#2': {
    0: 'With clear structure–function agreement and a moderate defect, treating while you confirm is reasonable, especially in PXF.',
    2: 'IOP doesn’t set the threshold to treat. Structure–function agreement does.',
    3: 'A defect that matches glaucomatous cupping doesn’t need an MRI first.',
  },
  'peer-lily-glaucoma#3': {
    0: 'A single cluster isn’t automatically glaucoma. Confirm with baseline tests unless the risk is high.',
    2: 'A cluster in the fellow eye needs follow-up. OHTS risk factors apply to that eye too.',
    3: 'Waiting for VA to drop is far too late. Review within 3–6 months.',
  },
  'peer-herpes-types#1': {
    0: 'Steroids are contraindicated in epithelial HSV. Antivirals are first line.',
    2: 'Antivirals are needed for epithelial disease, and a bandage lens isn’t the treatment.',
    3: 'Topical antivirals are first line, and oral antibiotics don’t treat HSV.',
  },
  'peer-herpes-types#2': {
    0: 'HEDS tested oral aciclovir 400 mg BD, not lifelong topical. Long-term topical use is toxic.',
    2: 'The 800 mg dose is for zoster. HEDS supports 400 mg BD prophylaxis.',
    3: 'HEDS found oral prophylaxis cut recurrences (32% to 19%).',
  },
  'peer-vf-neuro-quickfire#1': {
    3: 'False negatives rise naturally in damaged fields, so most glaucoma trials don’t use them to exclude a field.',
    4: 'VFI is a summary percentage with no pass/fail cut-off.',
  },
  'peer-vf-neuro-quickfire#2': {
    0: 'A defect that changes with a lens is optical (a refractive scotoma), not malingering.',
    2: 'Glaucomatous defects don’t change with lenses. A change points to a refractive scotoma.',
    3: 'A lens-rim artefact would appear with the lens and vanish without it, which is the opposite of this.',
  },
  'peer-vf-neuro-quickfire#3': {
    0: 'It’s the reverse: photostress is prolonged in maculopathy, and RAPD and colour loss point to optic neuropathy.',
    2: 'Optic neuropathy often reduces VA too. The other tests are what separate the two.',
    3: 'IOP and corneal sensation don’t separate macular from optic nerve disease.',
  },
  'peer-pharm-quickfire#0': {
    0: 'Fluoroquinolones inhibit DNA gyrase, not the cell wall, and tendon rupture and QT are systemic, not topical, issues.',
    2: 'That describes chloramphenicol (50S, bacteriostatic).',
    3: 'That describes aminoglycosides (30S, misreading).',
  },
  'peer-pharm-quickfire#1': {
    0: 'Oral NSAIDs at anti-inflammatory doses are outside optometric prescribing.',
    2: 'Never tell patients to double OTC packs. Refer to the GP.',
    3: 'A pharmacist can’t supply prescription-strength ibuprofen on an optometrist’s note.',
  },
  'peer-pharm-quickfire#2': {
    1: 'Oral PGAs aren’t used, and antihistamine combinations aren’t the main additive concern.',
    2: 'Topical steroid doesn’t add to paracetamol liver toxicity.',
    3: 'Topical drops are absorbed systemically. A medication history always matters.',
  },
  'peer-pharm-quickfire#4': {
    0: 'Aqueous overproduction is rare and isn’t the usual cause of POAG. Tear drainage and CCT don’t raise true IOP.',
    2: 'These aren’t the mechanisms. The Goldmann equation gives outflow, production and episcleral venous pressure.',
    3: 'Raised episcleral venous pressure does raise IOP (e.g. carotid–cavernous fistula).',
  },
});
