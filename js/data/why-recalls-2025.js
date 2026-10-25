// Why each wrong option is wrong, for the cases in recalls-2025.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'r2025-hsv-to-bacterial#0': {
    5: 'Marginal keratitis is a peripheral infiltrate with a clear zone to the limbus. It doesn’t produce a branching epithelial lesion.',
  },
  'r2025-hsv-to-bacterial#1': {
    1: 'Steroids are contraindicated in active epithelial HSV, and a week is too long. Review the next day.',
    2: 'Topical antivirals don’t delay healing; they’re first line. Oral 400 mg 5×/day isn’t the standard regimen, and review should be next day.',
    3: 'Chloramphenicol doesn’t treat HSV. An untreated dendrite can enlarge or spread to the stroma.',
  },
  'r2025-hsv-to-bacterial#2': {
    1: 'Adding a steroid to a new infiltrate that may be infected risks a melt. Worsening with an infiltrate is infection until proven otherwise.',
    2: 'Toxicity doesn’t cause a new infiltrate with worsening pain overnight, and a bandage lens on a possibly infected eye is dangerous.',
    3: 'A marginal infiltrate sits at the limbus with a clear zone, not next to a dendrite. Steroid and a 1-week review are unsafe here.',
  },
  'r2025-hsv-to-bacterial#3': {
    1: 'Chloramphenicol is weak against Pseudomonas, and a steroid at day 2 is too early. A fluoroquinolone loading regimen is needed.',
    2: 'q2h while awake is under-dosing for MK (it’s q15min, then q30min including overnight), and a steroid from day one is unsafe.',
    3: 'QID isn’t intensive enough for MK, and a 1-week review is far too late. Review in 24 h.',
  },
  'r2025-supp-aau#0': {
    1: 'Recurrence matters mainly because it suggests a systemic association that needs work-up. Loteprednol is too weak for 3+ cells.',
    2: 'Recurrent AAU is most often HLA-B27, not herpetic. Cycloplegia shouldn’t be withheld.',
    3: 'Recurrent disease needs a systemic work-up, not just a repeat of the last course.',
  },
  'r2025-supp-aau#1': {
    1: 'Posterior involvement can be silent, and dilation helps break synechiae. Dilating doesn’t cause a dangerous spike in an open-angle uveitic eye.',
    2: 'Dilating early helps prevent and break posterior synechiae. Waiting lets them form.',
    3: 'Cycloplegics are part of uveitis treatment and don’t raise IOP in an open angle. Phenylephrine alone wouldn’t relieve ciliary spasm.',
  },
  'r2025-supp-aau#3': {
    1: 'FML is much weaker than Pred Forte and penetrates poorly, so it isn’t enough for 3+ cells.',
    2: 'Loteprednol is weaker than prednisolone acetate in AAU.',
    3: 'Hydrocortisone is among the weakest ocular steroids, with poor penetration.',
  },
  'r2025-supp-aau#4': {
    1: 'Stopping the steroid lets the uveitis flare, and NSAIDs can’t control AAU. Treat the IOP with an aqueous suppressant instead.',
    2: 'Steroid response takes weeks, not 24 h. PGAs are avoided in active uveitis.',
    3: 'Leaving IOP up to 40 risks optic nerve damage, especially with a damaged disc. Treat significant rises now.',
  },
  'r2025-supp-aau#5': {
    1: 'PGAs are avoided in active uveitis of any cause because they’re pro-inflammatory.',
    2: 'Pilocarpine is contraindicated in uveitis: it worsens inflammation and synechiae.',
    3: 'Stopping the steroid flares the uveitis, and optometrists can’t prescribe acetazolamide. QID long-term dosing is also inappropriate.',
  },
  'r2025-supp-aau#6': {
    1: 'Topical NSAIDs are too weak to control AAU, even in steroid responders.',
    2: 'NSAIDs don’t treat HSV stromal disease, which needs a steroid under antiviral cover.',
    3: 'Raised IOP doesn’t make an NSAID adequate for AAU. Keep the steroid and treat the IOP.',
  },
  'r2025-supp-pds#0': {
    5: 'A recent respiratory infection doesn’t help separate PDS from angle recession.',
  },
  'r2025-supp-pds#1': {
    1: 'Convection gives a vertical spindle, not a superior band. Pigment is fine and brown; KPs are cellular aggregates.',
    2: 'Pigment isn’t deposited by blinking, and it doesn’t stain with fluorescein. Its shape comes from convection.',
    3: 'Pigment forms a vertical spindle, not Arlt’s triangle (that’s KPs), and the two look different at the slit lamp.',
  },
  'r2025-supp-pds#2': {
    1: 'An IOP of 35 needs treatment now. Pigmentary glaucoma can progress quickly.',
    2: 'Pilocarpine causes fluctuating myopia, brow ache and a raised RD risk in young myopes, so it isn’t first line.',
    3: 'The value of LPI in PDS is unproven. With IOP 35, start drops and check discs and fields now.',
  },
  'r2025-supp-pds#3': {
    1: 'LPI is controversial in PDS. SLT is the first procedure, at lower energy.',
    2: 'Trabeculectomy isn’t first line, and pigmented angles need lower SLT energy, not higher.',
    3: 'Cataract surgery isn’t a primary treatment for PDS in young patients. Pigmented TM absorbs more laser, so energy is reduced.',
  },
  'r2025-supp-angle-closure#0': {
    1: 'That isn’t how acute and chronic are defined. Acute is the dramatic painful attack; chronic is gradual synechial closure.',
    2: 'Acute attacks are usually unilateral, and chronic angle closure has PAS on gonioscopy. It isn’t open-angle glaucoma.',
    3: 'Acute angle closure can damage the disc within hours and always needs ophthalmology. Chronic is gradual and often painless.',
  },
  'r2025-supp-angle-closure#1': {
    5: 'PDS has deep, wide-open angles and a concave iris, so it doesn’t cause angle closure.',
  },
  'r2025-supp-angle-closure#2': {
    1: 'Brimonidine is 0.2% (or 0.15%); 0.5% is apraclonidine. Atropine is never right in angle closure.',
    2: 'The concentrations given are wrong. Brimonidine doesn’t dilate the pupil and is used in AAC, and any cycloplegic is contraindicated.',
    3: 'Pilocarpine 2% is fine (1% or 2%), but brimonidine 0.5% isn’t a strength, and atropine is always contraindicated in closure.',
  },
  'r2025-supp-angle-closure#3': {
    1: 'Intensive pilocarpine is dangerous: systemic toxicity, and it can worsen lens-related closure. AAC needs urgent, not routine, transfer.',
    2: 'Optometrists don’t give oral glycerol. Steroid is part of first aid but doesn’t replace transfer.',
    3: 'An AAC patient must never be sent home. Continue first aid and arrange transfer.',
  },
  'r2025-shield-akc#0': {
    3: 'SAC doesn’t involve the cornea.',
    4: 'Adenovirus causes SEIs and pseudomembranes, not shield ulcers.',
  },
  'r2025-shield-akc#1': {
    5: 'Terrien’s is a non-inflammatory peripheral thinning, unrelated to AKC.',
  },
  'r2025-shield-akc#2': {
    1: 'Mast-cell stabilisers don’t work within minutes. They prevent, so they take 1–2 weeks of regular use.',
    2: 'They don’t become PRN itch relievers after a few days. They need ongoing regular use.',
    3: 'They work within about 1–2 weeks and are started before the season, not after it.',
  },
  'r2025-shield-akc#3': {
    1: 'There’s no TGA 14-week limit for epithelial toxicity. Duration guidance comes from each product’s PI.',
    2: 'Rebound hyperaemia is a vasoconstrictor problem, not a dual-acting antihistamine one.',
    3: 'Other drops have PI-based duration limits too, and vasoconstrictors in particular should be limited.',
  },
});
