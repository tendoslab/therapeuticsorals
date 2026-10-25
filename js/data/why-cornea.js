// Why each wrong option is wrong, for the cases in cornea.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'cl-bacterial-keratitis#1': {
    0: 'This lesion meets the 1-2-3 criteria for size and location, so it needs culture and hospital care, not optometric management.',
    1: 'QID dosing is far too low for MK, and a steroid on an untreated ulcer risks a melt. A 3-day review is too long.',
    3: 'Oral antibiotics don’t treat bacterial keratitis; intensive topical therapy does. This needs a corneal service, not the GP.',
  },
  'cl-bacterial-keratitis#2': {
    1: 'A 4-hour delay with possible Pseudomonas risks rapid melting. Agree a plan with the registrar and start a fluoroquinolone. Never patch a contact lens ulcer.',
    2: 'Never start a steroid on an untreated active ulcer: it can let the infection run and melt the cornea.',
    3: 'Chloramphenicol is weak against Pseudomonas. A fluoroquinolone is the empirical choice for contact lens keratitis.',
  },
  'cl-bacterial-keratitis#3': {
    0: 'The loading phase is too short and stops overnight, and the course is too rigid. The PI regimen is every 15 min for 6 h, then every 30 min including overnight, and review is at 24 h.',
    2: 'The intervals are wrong. It starts every 15 min, goes hourly on day 2, and every 4 h (not BD) from day 3. A 1-week review is far too late.',
    3: 'From day 3 it’s every 4 hours, not QID, and review is daily until healed, not every 3 days.',
  },
  'cl-bacterial-keratitis#4': {
    0: 'The drugs are swapped. Ciprofloxacin is the potent Gram-negative one and can leave white precipitates; ofloxacin has been linked with more perforations.',
    2: 'Fluoroquinolones don’t cover fungi or Acanthamoeba, and ofloxacin covers Gram-negatives too. Ciprofloxacin is known for white precipitates.',
    3: 'Ciprofloxacin is a second-generation fluoroquinolone with weaker Gram-positive cover. Ofloxacin is available, and ciprofloxacin can precipitate.',
  },
  'cl-bacterial-keratitis#6': {
    0: 'Starting a steroid at presentation is unsafe. SCUT added the steroid only after 48 h of antibiotic and found no overall benefit.',
    2: 'SCUT didn’t show more perforations with steroid. It showed no overall benefit, with possible benefit in severe central ulcers.',
    3: 'A steroid never replaces the antibiotic. If an ulcer is worse at 24 h, that means escalation and referral.',
  },
  'mk-vs-clpu#1': {
    0: 'The two are swapped. An abrasion is a clean defect; an ulcer has an infiltrate in the stroma under the defect.',
    2: 'Both stain with fluorescein. What separates them is whether there’s an infiltrate under the defect.',
    3: 'Edge shape doesn’t define them. An ulcer is an epithelial defect over a stromal infiltrate.',
  },
  'mk-vs-clpu#2': {
    0: 'CLPU is a sterile inflammatory response, not early Pseudomonas, so fortified antibiotics aren’t needed. A mild steroid helps once infection is excluded.',
    2: 'Contact lens wear stops, and hourly potent steroid is excessive. Prophylactic antibiotic cover is needed while the epithelium is open, and extended wear is a risk factor.',
    3: 'If you’re confident it’s CLPU, MK loading doses aren’t needed. Steroid starts once infection is excluded, review is at 24–48 h, and refitting is usually possible.',
  },
  'marginal-keratitis#0': {
    0: 'These are features of microbial keratitis. Marginal keratitis is peripheral with a clear zone, little staining early and a quiet AC.',
    2: 'Radial perineuritis and pain out of proportion are Acanthamoeba.',
    3: 'Feathery margins, satellites and an endothelial plaque after plant injury are fungal keratitis.',
  },
  'marginal-keratitis#2': {
    0: 'Long-term steroid isn’t justified and risks IOP rise and cataract. Persistent burning and blur after blepharitis point to dry eye.',
    2: 'Marginal keratitis rarely leaves visually significant scarring. These are dry eye symptoms, not a reason for a graft.',
    3: 'Optometrists can’t prescribe oral doxycycline. And the next step is a dry eye work-up, not assuming rosacea.',
  },
  'fungal-keratitis#0': {
    4: 'Marginal keratitis is a sterile immune reaction near the limbus. It doesn’t follow vegetable-matter trauma with a worsening infiltrate.',
  },
  'fungal-keratitis#1': {
    0: 'That describes fungal keratitis. Acanthamoeba is painful, with perineural infiltrates and ring infiltrates, after contact lens wear with water exposure.',
    2: 'Rapid onset with hypopyon on day 1 is bacterial (Pseudomonas). Acanthamoeba is slower and often misdiagnosed early.',
    3: 'True dendrites with terminal bulbs are HSV. Acanthamoeba gives pseudodendrites without terminal bulbs.',
  },
  'fungal-keratitis#2': {
    0: 'Natamycin isn’t on the optometry list, and suspected fungal keratitis needs same-day referral for scraping. Steroids are avoided.',
    2: 'MUTT I found natamycin better than voriconazole for filamentous (especially Fusarium) ulcers. Steroids should be stopped, not continued.',
    3: 'Waiting 3 days on an antibiotic lets a fungal ulcer progress. This history needs same-day referral and culture.',
  },
  'fungal-keratitis#3': {
    0: 'MUTT II found no overall benefit from adding oral voriconazole. It isn’t standard.',
    2: 'MUTT II tested oral voriconazole, not steroids. Steroids are generally avoided in fungal keratitis.',
    3: 'Natamycin was the better topical in MUTT I, and oral voriconazole was only tested as an add-on, not a replacement.',
  },
  'hsv-keratitis#2': {
    0: 'Steroids are contraindicated in epithelial HSV because it’s active viral replication. Review in 24–48 h; antivirals start working quickly.',
    2: 'Topical antivirals are first line for epithelial HSV. Oral 400 mg BD is the prophylaxis dose, not treatment, and review should be within 48 h.',
    3: 'Antivirals are needed for epithelial disease. Leaving a dendrite untreated risks enlargement and stromal involvement.',
  },
  'hsv-keratitis#3': {
    0: 'The epithelium has healed. Disciform oedema with KPs is an immune reaction to viral antigen, which needs a steroid under antiviral cover.',
    2: 'There’s no epithelial defect or infiltrate to suggest bacteria. Disciform oedema with KPs is immune HSV disease.',
    3: 'Disciform keratitis is immune HSV endotheliitis, not drug toxicity. It needs a steroid under antiviral cover.',
  },
  'hsv-keratitis#4': {
    5: 'Oral aciclovir prophylaxis lowers the risk of recurrence (HEDS roughly halved it). It doesn’t raise it.',
  },
  'hzo#1': {
    0: 'Topical aciclovir doesn’t treat zoster effectively, and oral steroids aren’t routine. Oral antivirals within 72 h are the key treatment.',
    2: 'The 400 mg BD HEDS dose is HSV prophylaxis. Zoster needs treatment doses (e.g. valaciclovir 1 g TDS for 7 days) started within 72 h.',
    3: 'Australian optometrists can’t prescribe oral antivirals, and the window is 72 h from rash onset, not 7 days.',
  },
  'hzo#3': {
    0: 'Asthma isn’t a precaution for oral antivirals. That’s the concern with topical beta-blockers.',
    2: 'Aciclovir doesn’t raise IOP. The concern in older patients is renal clearance.',
    3: 'Oral antivirals don’t raise blood pressure. The dose needs adjusting for kidney function.',
  },
  'fuchs#1': {
    0: 'Topical CAIs worsen endothelial pump function, and long-term steroid doesn’t protect the endothelium. Grafting is for visually significant disease, not the first guttae.',
    2: 'Hypertonic saline is pharmacy-only and used by day and night. Warm air (not cool) helps clear morning oedema, and PGAs don’t thin the cornea.',
    3: 'Hypertonic saline helps, and DMEK/DSAEK grafts do well in Fuchs’. Topical CAIs should be avoided.',
  },
});
