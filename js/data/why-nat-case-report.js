// Why each wrong option is wrong, for the cases in nat-case-report.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'nat-report-marginal-diagnosis#1': {
    1: 'The infiltrates are sterile: there are no bacteria in them to survive. The antigen comes from the lids.',
    2: 'Benzalkonium isn’t an anti-inflammatory; if anything it irritates the surface.',
    3: 'Chloramphenicol has no antiviral action, and the picture isn’t adenoviral (no follicles, watery discharge or cold).',
  },
  'nat-report-marginal-diagnosis#3': {
    1: 'PUK has no clear zone: it melts the cornea right up to the limbus and is very painful.',
    2: 'The clear zone is part of marginal keratitis, not a sign of partly treated infection.',
    3: 'A phlycten is a raised nodule with feeder vessels; it doesn’t leave a clear zone behind.',
  },
  'nat-report-marginal-diagnosis#4': {
    4: 'A clear zone is a feature of marginal keratitis, not of infection.',
    5: 'Lid-margin disease on both sides supports blepharitis-driven marginal keratitis.',
  },
  'nat-report-marginal-diagnosis#6': {
    5: 'Allergic contact dermatitis causes lid eczema and conjunctivitis, not peripheral stromal infiltrates.',
  },
  'nat-report-marginal-management#0': {
    1: 'A family history of glaucoma is a reason to monitor IOP closely, not a contraindication.',
    2: 'Mild staining smaller than the infiltrate is expected; cover it with an antibiotic rather than withholding.',
    3: 'There is no travel rule, and nothing here suggests adenovirus.',
  },
  'nat-report-marginal-management#1': {
    1: 'Marginal keratitis is self-limiting and rarely perforates; treatment can reasonably be optional.',
    2: 'There is no such law. Treatment is a clinical decision, made with the patient.',
    3: 'The steroid treats the corneal reaction, not the blepharitis; lid hygiene treats the lids.',
  },
  'nat-report-marginal-management#2': {
    1: 'There is no such interaction; antibiotic and steroid combinations are standard.',
    2: 'The infiltrates are sterile, so the steroid is the main treatment and prednisolone is used for severe cases.',
    3: 'Prednisolone acetate penetrates better than FML, and the antibiotic isn’t a bottle preservative.',
  },
  'nat-report-marginal-management#3': {
    1: 'Ointment first blocks the drop: drops go in first, ointment last.',
    2: 'Mixing them on a finger is unhygienic and gives no reliable dose of either.',
    3: 'Both can be used the same day; alternating would under-treat both.',
  },
  'nat-report-marginal-management#4': {
    1: 'Warm compresses don’t raise the IOP or interact with the steroid.',
    2: 'Tea tree wipes don’t inactivate chloramphenicol; both can be used together.',
    3: 'Lid hygiene is the mainstay for anterior blepharitis too.',
  },
  'nat-report-marginal-management#6': {
    5: 'Long-term topical antibiotic invites resistance; lid hygiene is the prevention.',
  },
  'nat-report-marginal-management#7': {
    1: 'Optometrists can’t prescribe oral antibiotics, and tetracyclines are avoided in children and pregnancy.',
    2: 'There is no surgical treatment for recurrent marginal keratitis; the lids are treated with hygiene and orals.',
    3: 'A lifelong steroid is unsafe and unnecessary; treat the blepharitis instead.',
  },
});
