// Why each wrong option is wrong, for the cases in uveitis.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'aau-synechiae#1': {
    0: 'Those questions screen for infectious causes like TB, Lyme and rickettsia, which are uncommon. In a young man, the commonest association is HLA-B27 disease.',
    1: 'Those questions screen for herpetic uveitis. Ask first about HLA-B27 disease: back stiffness, joints, bowel and skin.',
    3: 'Atopy causes allergic conjunctivitis, not anterior uveitis. The target is HLA-B27 spondyloarthropathy.',
  },
  'aau-synechiae#2': {
    1: 'FML is too weak for active AAU, and starting low lets synechiae form. Start potent and frequent, then taper.',
    2: 'Sodium phosphate is a hydrophilic solution with poorer penetration, and QID is too infrequent. Tropicamide is too short-acting to break synechiae.',
    3: 'QID is too infrequent to start with, and pilocarpine is contraindicated: it worsens synechiae and breaks down the blood–aqueous barrier.',
  },
  'aau-synechiae#3': {
    0: 'Phenylephrine isn’t an antimuscarinic. It’s an α1-agonist acting on the dilator, which is exactly why it adds to atropine.',
    2: 'Phenylephrine doesn’t relax the ciliary body; cycloplegics do. Cyclopentolate isn’t contraindicated in uveitis; it just adds nothing on top of atropine.',
    3: 'Phenylephrine is an α1 (not β) agonist that contracts the dilator. Atropine relaxes the sphincter; it doesn’t contract the dilator.',
  },
  'aau-synechiae#4': {
    0: 'IOP and angle assessment matter before dilating, but the specific danger with 10% phenylephrine is a hypertensive crisis. Check blood pressure.',
    2: 'Comparing pupils doesn’t make 10% phenylephrine safer. The risk is systemic (hypertension, arrhythmia), so measure BP before and after.',
    3: 'Corneal sensation is relevant to herpetic disease, but it isn’t the safety check for phenylephrine 10%. That’s blood pressure.',
  },
  'aau-synechiae#5': {
    0: 'Cells take days to fall, so a few remaining at 24 h is expected, not steroid resistance. IOP should be checked at every visit.',
    2: 'It’s too early to stop atropine or taper. Taper only after a clear improvement, and check IOP sooner (the rise usually appears from 2 weeks).',
    3: 'Pain should ease, not worsen. IOP, pupils, synechiae and the posterior segment should all be checked at the next-day review.',
  },
  'aau-synechiae#6': {
    6: 'A first, unilateral, non-granulomatous episode that responds well is within optometric scope. It doesn’t need referral.',
  },
  'aau-hypopyon#0': {
    5: 'Posner–Schlossman gives very high IOP with a few fine KPs and minimal cells. It doesn’t cause a hypopyon.',
  },
  'aau-hypopyon#1': {
    0: 'Hypopyon is a sign of severe non-granulomatous inflammation and is classic in HLA-B27 disease. The granulomatous signs are mutton-fat KPs and iris nodules.',
    2: 'Age doesn’t decide it. Granulomatous vs non-granulomatous is defined by the KPs and nodules.',
    3: 'IOP doesn’t classify uveitis. Hypopyon is a non-granulomatous sign whatever the pressure.',
  },
  'aau-hypopyon#2': {
    0: 'FML is too weak, and dilating is part of treatment (to break and prevent synechiae). A hypopyon needs referral within 24 h, not a week.',
    2: 'Start treatment while you arrange referral, after excluding infection. A known AS patient with a clear cornea is classic sterile HLA-B27 hypopyon.',
    3: 'With a clear cornea, no recent surgery and known AS, this is sterile HLA-B27 disease. Withholding the steroid lets synechiae and damage develop.',
  },
  'aau-hypopyon#3': {
    0: 'HLA-B27 AAU is acute and recurrent, not usually chronic. Recurrences are common, often in alternating eyes.',
    2: 'Cells take weeks, not days, to clear (about 2–6 weeks), and recurrences are common, including in the other eye.',
    3: 'With treatment, the hypopyon clears without scarring. Recurrences are common and usually one eye at a time.',
  },
  'granulomatous-au#0': {
    5: 'HLA-B27 disease gives non-granulomatous AAU with fine KPs, fibrin or hypopyon, not mutton-fat KPs.',
  },
  'granulomatous-au#1': {
    1: 'These are epithelial or stromal lines and rings, or arcus at the limbus. None of them sit on the endothelium except Kayser–Fleischer (at Descemet’s).',
    2: 'These are epithelial and subepithelial lesions. The question is about the endothelium.',
    3: 'Guttae are endothelial (Fuchs’), and PXF flakes can deposit on the endothelium as well as the lens.',
  },
  'paeds-au#1': {
    1: 'Enthesitis-related (HLA-B27) arthritis does cause red, painful uveitis. The silent uveitis is oligoarticular ANA-positive JIA, not RF-positive disease.',
    2: 'Kawasaki disease gives a non-exudative conjunctivitis, and JIA uveitis is common in young children, especially girls.',
    3: 'Paediatric uveitis often has a systemic cause (JIA, sarcoid, TINU), so a work-up is essential.',
  },
  'paeds-au#2': {
    6: 'Orbital MRI doesn’t help work up anterior uveitis. Blood tests, urinalysis and a chest X-ray do.',
  },
  'paeds-au#3': {
    0: 'Children are more likely, not less, to be steroid responders, and they get more cataract and amblyopia. Paediatric uveitis needs urgent co-management.',
    2: 'Topical steroid is still the mainstay, given under supervision with close IOP checks. Untreated inflammation causes more harm.',
    3: 'Topical steroids do reach the anterior chamber in children. Steroid response is common in children, so IOP needs close checks.',
  },
  'paeds-au#4': {
    0: 'Stopping abruptly causes rebound, which is especially common in children. Taper slowly once quiet.',
    2: 'A 5-day taper from hourly is too fast and invites rebound. Step down about weekly.',
    3: 'Oral steroids carry more systemic risk for anterior uveitis, and topical therapy works. Switching isn’t the taper.',
  },
  'chronic-au#0': {
    1: 'Chronic means more than 3 months and is usually quiet, white and often bilateral. It isn’t always granulomatous, and complications are common.',
    2: 'A second episode after an inactive gap is “recurrent”, not chronic. Chronic means persistent, or relapsing within 3 months of stopping.',
    3: 'Chronic means more than 3 months, not more than a year, and hypopyon isn’t typical. Its complications include cataract and glaucoma.',
  },
  'traumatic-iritis#0': {
    8: 'An embedded foreign body comes from a sharp or high-velocity projectile, not blunt trauma from a ball.',
  },
  'traumatic-iritis#1': {
    0: 'Indentation gonioscopy soon after blunt trauma risks a rebleed and is painful. Defer it 2–4 weeks.',
    2: 'Angle recession can cause glaucoma years later, so the angle should be checked once things settle, whatever the IOP.',
    3: 'Scleral indentation soon after trauma risks a rebleed. Defer it.',
  },
  'traumatic-iritis#2': {
    1: 'Hourly steroid for 6 weeks is excessive for grade 2 traumatic iritis. IOP must be checked first because trauma can raise it, and stopping abruptly causes rebound.',
    2: 'Miotics worsen inflammation and pain. A cycloplegic is part of treatment, and FML is too weak.',
    3: 'A steroid and a cycloplegic treat traumatic iritis. With no epithelial defect, there’s no wound-healing reason to avoid the steroid.',
  },
  'traumatic-iritis#3': {
    0: 'Angle-recession glaucoma can appear years or decades later, so lifelong IOP checks are needed if recession is found.',
    2: 'Gonioscopy and a dilated exam for retinal tears or dialysis are essential, even with 6/6 vision. MRI isn’t routine.',
    3: 'Annual (not weekly) IOP checks are needed if there’s recession, and no MRI. Dilated exams with depression are done once it’s safe.',
  },
  'hyphaema#1': {
    1: 'A layer under 1/3 is grade I, and the rebleed risk peaks at days 2–5, not in the first hours.',
    2: 'The grade is right, but rebleeds peak at days 2–5, while the clot retracts and lyses.',
    3: 'A layered hyphaema isn’t microhyphaema (which is cells only), and the peak rebleed risk is days 2–5.',
  },
  'hyphaema#3': {
    0: 'PGAs are pro-inflammatory and slow, and miotics worsen inflammation and pupil block. Timolol is fine and first line. IOP of 35 needs same-day referral.',
    2: 'Topical CAIs are avoided in sickle cell (acidosis promotes sickling in the anterior chamber). Timolol and brimonidine are first line here.',
    3: 'Optometrists can’t prescribe oral acetazolamide, and PGAs are avoided. IOP of 35 with hyphaema risks blood staining and needs same-day referral.',
  },
});
