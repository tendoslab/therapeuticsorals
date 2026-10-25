// Why each wrong option is wrong, for the cases in practice-orals.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'po-corneal-fb#1': {
    5: 'Gonioscopy isn’t part of FB assessment, and indenting risks harm if the globe is penetrated.',
  },
  'po-corneal-fb#3': {
    1: 'An off-axis corneal FB usually heals in days with little scarring, and trained optometrists remove rust rings.',
    2: 'Infection or a retained fragment can occur before VA drops. Refer on clinical signs.',
    3: 'Rust doesn’t stain the cornea for life once removed. Pain isn’t a reliable sign of penetration; Seidel and the exam are.',
  },
  'po-aau-steroid-response#0': {
    6: 'Seasonal allergy doesn’t cause circumcorneal flush, photophobia or synechiae.',
  },
  'po-aau-steroid-response#1': {
    1: '25–30 cells is grade 2+ to 3+, not 1+. QID and a week’s review under-treat it.',
    2: 'This is grade 2+ to 3+, not 4+, and it’s managed topically first.',
    3: 'FML is too weak and tropicamide too short-acting. A potent steroid is needed, with IOP monitoring.',
  },
  'po-hsv-pregnancy#1': {
    1: 'Steroid is contraindicated in epithelial HSV, and contact lenses must stop. Review at 24 h.',
    2: 'Antivirals shorten the course and reduce stromal spread. Lenses stay out until healed.',
    3: 'This is epithelial disease, so steroid is contraindicated.',
  },
  'po-hsv-pregnancy#2': {
    1: 'Aciclovir is B3, not D, and topical use gives negligible systemic exposure.',
    2: 'Aciclovir isn’t category X. Treat, and involve the obstetrician or GP if oral therapy is considered.',
    3: 'Aciclovir is B3, not A, and adding oral valaciclovir isn’t needed.',
  },
  'po-pxf-gonio#2': {
    1: 'PXF’s risk is well above the general population, and it progresses fastest (about −3.1 dB/yr).',
    2: 'Most PXF doesn’t convert within 10 years, and untreated PXG lost about −3.1 dB/yr, not −1.3.',
    3: 'Those are PDS figures, and CNTGS is an NTG trial. PXG progresses faster than POAG.',
  },
  'po-arcuate-ntg#0': {
    5: 'A pituitary adenoma gives bitemporal defects that respect the vertical midline.',
  },
  'po-hsv-disciform#1': {
    1: 'Disciform keratitis is immune, so it needs a steroid under antiviral cover (HEDS).',
    2: 'A steroid without antiviral cover risks epithelial reactivation, and stopping abruptly causes rebound.',
    3: 'A steroid under antiviral cover is the treatment. Zoster doses aren’t used for HSV.',
  },
  'po-temporal-lobe#0': {
    1: 'Tract lesions usually give an RAPD and incongruous fields, and they don’t cause formed hallucinations.',
    2: 'The right occipital lobe serves the left field, and occipital lesions give simple, not formed, hallucinations.',
    3: 'Chiasmal lesions give bitemporal, not homonymous, defects.',
  },
  'po-hzo#1': {
    1: '250 mg for 3 days is too low and too short, topical aciclovir doesn’t work for zoster, and steroid isn’t for pain.',
    2: 'The window is 72 h, not 48, so it isn’t too late. Topical aciclovir doesn’t treat zoster.',
    3: 'Oral steroids aren’t routine, and the antiviral is the key treatment.',
  },
  'po-ntg-metoprolol#3': {
    1: 'Correcting IOP for CCT is unreliable, and IOP stays under 21 on phasing.',
    2: 'Burnt-out PDS can mimic NTG, but 2+ pigment alone doesn’t make the diagnosis, and treatment is still needed.',
    3: 'Repeatable structure–function loss isn’t physiological cupping or a cataract artefact.',
  },
  'po-fields-quickfire#0': {
    1: 'It’s the reverse: pituitary lesions press from below (superotemporal loss first); craniopharyngiomas press from above.',
    2: 'Both compress the chiasm and give bitemporal defects, not homonymous or central loss.',
    3: 'Craniopharyngiomas usually press from above, so the pattern can help separate them.',
  },
});
