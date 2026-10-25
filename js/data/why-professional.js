// Why each wrong option is wrong, for the cases in professional.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'vf-interpretation#2': {
    0: 'An MD worse than −6 dB is the line between early and moderate, not the threshold for advanced.',
    2: 'Those numbers aren’t the Hodapp criteria, and fixation losses measure reliability, not severity.',
    3: 'Those are early signs of damage. Advanced loss is defined by MD worse than −12 dB or deep central defects.',
  },
  'vf-interpretation#3': {
    0: 'Goldmann assumes about 520 µm, and thin (not thick) CCT was the OHTS risk factor. Thin corneas under-read the IOP.',
    2: 'Goldmann is affected by CCT. Thin CCT was an independent risk factor in OHTS even after IOP was accounted for.',
    3: 'Correction formulas are approximate and not valid for individuals. CCT stays in the OHTS/EGPS risk calculator in its own right.',
  },
  'scope-rules#0': {
    0: 'The guideline allows a few months to refer (4 months as taught), not 24 hours, and you don’t have to stop treatment while you wait.',
    2: 'Referral is required after starting treatment whether or not the target is met. You can’t manage newly treated glaucoma alone indefinitely.',
    3: 'The referral is to an ophthalmologist, not the GP. The GP doesn’t take over glaucoma prescribing.',
  },
  'scope-rules#1': {
    3: 'Oral medicines are outside an optometrist’s scope. Acetazolamide goes through the GP, ED or ophthalmologist.',
    4: 'Oral antivirals are outside scope. Valaciclovir needs the GP or ophthalmologist.',
    5: 'Fortified antibiotics are compounded hospital preparations used under ophthalmology, not something optometrists prescribe.',
  },
  'scope-rules#3': {
    0: 'Clinical need sets the testing interval. MBS limits only govern what Medicare pays, so you can still test and charge privately with consent.',
    2: 'Billing an item for a service you didn’t provide to get around a limit is Medicare fraud.',
    3: 'Every test must be documented. Leaving tests out of the record to avoid an audit breaches record-keeping obligations.',
  },
  'pregnancy-children#1': {
    0: 'The concern isn’t teratogenicity. It’s CNS depression in neonates and infants, so it’s contraindicated under 2 and avoided while breastfeeding.',
    2: 'Brimonidine isn’t linked to jaundice. The risk is apnoea, bradycardia and CNS depression because it crosses the immature blood–brain barrier.',
    3: 'That’s the theoretical concern with prostaglandin analogues, not brimonidine. Brimonidine’s CNS effects in infants are exactly why it’s avoided in children.',
  },
  'nsaid-vs-steroid#0': {
    0: 'The mechanisms are swapped: steroids act upstream on phospholipase A2, and NSAIDs block cyclooxygenase. NSAIDs don’t raise IOP but can cause corneal melts.',
    2: 'Steroids act upstream of cyclooxygenase and block both pathways. Topical NSAIDs are weaker and can’t treat uveitis alone.',
    3: 'NSAIDs block cyclooxygenase (prostaglandins). Steroids block phospholipase A2, upstream of both pathways. NSAIDs don’t raise IOP and can cause melts.',
  },
  'nsaid-vs-steroid#1': {
    3: 'Topical NSAIDs are too weak to control acute anterior uveitis alone. It needs a potent steroid and a cycloplegic.',
    4: 'HSV epithelial keratitis needs an antiviral. NSAIDs don’t treat it and can slow epithelial healing.',
  },
  'nsaid-vs-steroid#3': {
    0: 'FML penetrates poorly and is too weak for active anterior uveitis.',
    2: 'Hydrocortisone is one of the weakest ocular steroids, and an ointment doesn’t give better intraocular penetration.',
    3: 'Topical NSAIDs can’t replace a steroid in AAU. They’re far too weak.',
  },
});
