// Why each wrong option is wrong, for the cases in conj.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'adenoviral#1': {
    0: 'Itch and seasonal triggers point to allergy. A watery red eye that moves from one eye to the other after a contact’s red eye is adenovirus, so ask about contacts.',
    2: 'That question screens for contact dermatitis or drop toxicity, which give itchy, flaky lids rather than a contagious red eye.',
    3: 'Contact lens history matters for keratitis, but the clue here is spread between people. Ask about sick contacts.',
  },
  'adenoviral#3': {
    0: 'SEIs are an immune reaction to adenoviral antigen, not a bacterial infection, so an antibiotic does nothing. Steroids don’t make them permanent; the problem is rebound when they’re stopped.',
    2: 'SEIs aren’t live virus, and aciclovir has no effect on adenovirus. Steroid is the treatment when vision is affected.',
    3: 'SEIs often rebound after a short burst, so a slow taper over weeks is needed. Any steroid course needs IOP checks.',
  },
  'adenoviral#4': {
    0: 'SEIs sit under intact epithelium. New staining with more pain is a warning sign for a secondary infection, not something to watch for a week.',
    2: 'More steroid on a possibly infected ulcer could let it melt, and a bandage lens adds infection risk. Stop the steroid and treat as MK.',
    3: 'Adenovirus doesn’t reactivate like HSV, and aciclovir doesn’t treat it. An eye on steroids is more prone to MK, not protected from it.',
  },
  'paeds-bacterial-conj#0': {
    0: 'Pseudomonas is a contact-lens organism. In a toddler with otitis, the usual organism is non-typeable H. influenzae.',
    2: 'Gonococcus and chlamydia cause neonatal or sexually acquired conjunctivitis, not conjunctivitis–otitis in a 2-year-old.',
    3: 'Adenovirus gives a watery eye. Sticky yellow discharge with otitis is bacterial, typically H. influenzae.',
  },
  'paeds-bacterial-conj#1': {
    0: 'That loading regimen is for microbial keratitis, not conjunctivitis. Chloramphenicol is not contraindicated in children; it’s first line and TGA category A.',
    2: 'Tobramycin binds the 30S subunit and is bactericidal. Eye drops don’t treat otitis media, so the child needs the GP.',
    3: 'Chloramphenicol binds 50S and is bacteriostatic; the 30S/misreading mechanism describes aminoglycosides. A 3-week course is far too long, and the otitis needs the GP.',
  },
  'paeds-bacterial-conj#2': {
    4: 'Mild mucopurulent conjunctivitis in a school-age child is exactly what topical chloramphenicol is for.',
  },
  'episcleritis#1': {
    0: 'There’s no necrotising episcleritis (that’s a scleritis subtype). Episcleritis is commoner in women, and most cases have no associated disease.',
    2: 'Anterior/posterior is how scleritis is classified, and choroidal folds are posterior scleritis. About a third of episcleritis has an association, and it’s commoner in women.',
    3: 'Granulomatous/non-granulomatous classifies uveitis, and HLA-B27 is linked to AAU. Optometrists don’t prescribe oral NSAIDs.',
  },
});
