// Why each wrong option is wrong, for the cases in allergy.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'sac#1': {
    1: 'Shield ulcers belong to VKC, not SAC/PAC. VKC affects young boys in warm climates with upper-lid papillae; AKC affects adults with eczema and does not resolve at puberty.',
    2: 'SAC/PAC never cause giant papillae or corneal vessels. VKC is mostly boys in warm climates (not follicles, pseudomembranes or dendrites), and AKC causes scarring and corneal signs.',
    3: 'SAC/PAC are type I (IgE) reactions with no scarring. The descriptions of VKC and AKC are swapped: VKC is young boys with giant upper papillae; AKC is adults with eczema and lower-lid involvement.',
  },
  'vkc-shield#0': {
    0: 'VKC is not type II, and Trantas dots aren’t calcium. They are clumps of degenerated eosinophils and epithelial cells that come and go with activity.',
    2: 'VKC is type I plus type IV, not immune-complex. Trantas dots are eosinophil clumps, not lymphoid follicles.',
    3: 'Unlike SAC, VKC adds chronic Th2/eosinophil (type IV) inflammation, which is why it can scar the cornea. Trantas dots are not pigment.',
  },
  'vkc-shield#2': {
    0: 'A shield ulcer is driven by inflammation, so it needs a potent steroid pulse (with IOP checks); an antihistamine alone won’t heal it. There’s an epithelial defect, so prophylactic antibiotic cover is needed too.',
    2: 'Weak FML and waiting 4 weeks under-treats it, and the plaque stops re-epithelialisation. Plaque debridement is done for VKC shield ulcers (by the ophthalmologist), not just AKC.',
    3: 'Topical potent steroid is the treatment. Oral steroids and antibiotics aren’t needed, and the antihistamine should continue.',
  },
  'vkc-shield#4': {
    0: 'Long-term potent steroid risks steroid glaucoma and cataract, especially in children, who are high responders. IOP needs checking far more often than every 2 years, and the antihistamine is the maintenance backbone.',
    2: 'Six-month potent steroid courses are dangerous. Ciclosporin (Verkazia) is licensed for children with VKC, and a year-round dual-acting antihistamine prevents flares.',
    3: 'Indefinite oral steroids in a child are never the answer: systemic side effects, growth and IOP. Topical dual-acting antihistamine plus a specialist steroid-sparing drug is the long-term plan.',
  },
  'dry-eye#1': {
    0: 'The cut-offs are wrong (OSDI ≥13, DEQ-5 ≥6) and DEWS II needs only one homeostasis marker, not all three. Subtyping (evaporative vs aqueous-deficient) is part of the approach.',
    2: 'Schirmer alone isn’t diagnostic, and symptoms are required for the diagnosis. DEWS II uses symptoms plus one marker (NIBUT, osmolarity or staining).',
    3: 'Symptoms alone overlap with many conditions. DEWS II needs a positive symptom score plus at least one homeostasis marker, and osmolarity is one of those markers.',
  },
  'dry-eye#3': {
    0: 'Ikervis is once daily at bedtime and is a calcineurin inhibitor, not a steroid. It takes 1–3+ months, and initial burning is common and not an allergy.',
    2: 'It isn’t a PRN drug or a mast-cell stabiliser. It’s used every night for months because the effect builds slowly, and it goes in the lower fornix like any drop.',
    3: 'It isn’t an NSAID. It’s dosed at bedtime, takes 1–3+ months for full effect, and needs a 15-minute gap from other drops.',
  },
  'blepharitis#0': {
    0: 'The two are swapped. Cylindrical dandruff and itch are Demodex (confirmed by epilating a lash); hard scales, ulceration and marginal keratitis are staphylococcal.',
    2: 'Capped glands and foamy tears are MGD. Cylindrical dandruff is the sign of Demodex, not staph, and Schirmer has nothing to do with it.',
    3: 'They can be told apart clinically by the lash-base signs, and swabs aren’t routine. Oral doxycycline isn’t first line for either.',
  },
  'blepharitis#2': {
    1: 'Natamycin is an antifungal (it binds ergosterol), with no antibacterial action. Chloramphenicol binds the 50S subunit and is bacteriostatic.',
    2: 'Aciclovir is an antiviral with no effect on bacteria. Chloramphenicol works on the 50S ribosome, not DNA gyrase.',
    3: 'Fluoroquinolones inhibit DNA gyrase/topoisomerase IV and are bactericidal and broad-spectrum. Chloramphenicol is the 50S, bacteriostatic one.',
  },
  'contact-dermatitis#0': {
    0: 'Too vague and too technical for a patient. Asking about specific new products (creams, make-up, drops, hair dye, nail polish) gets a useful answer.',
    2: 'Patients rarely know the ingredients or preservatives in their products. Ask what’s new, not what’s in it.',
    3: 'That screens for infection (viral conjunctivitis). Itchy, flaky, swollen lids on both sides point to contact dermatitis, so ask about new products.',
  },
  'contact-dermatitis#1': {
    1: 'The descriptions of dermatitis and preseptal cellulitis are swapped. Angioedema is sudden, not slow, and has little skin change.',
    2: 'The labels are shuffled. Sudden boggy swelling is angioedema, itchy flaky lids are dermatitis, and a tender, warm unilateral lid is preseptal cellulitis.',
    3: 'They can be told apart clinically by itch vs tenderness, laterality, skin change and speed of onset. No biopsy is needed.',
  },
  'preseptal#0': {
    6: 'A tender lid lump on its own is a hordeolum or preseptal cellulitis. It stays in front of the orbital septum and spares vision, eye movements and the globe.',
  },
  'preseptal#1': {
    0: 'Topical drops don’t reach infection in the lid soft tissue, so preseptal cellulitis needs oral antibiotics. Review within 24–48 h, not a week.',
    2: 'Flucloxacillin alone misses the sinus organisms, and steroids aren’t routine. Orbital spread can happen at any age, and review should be within 24–48 h.',
    3: 'An afebrile preseptal cellulitis without orbital signs is treated with oral antibiotics in the community. IV antibiotics and CT are for orbital signs or failure. Warm compresses help.',
  },
  'preseptal#2': {
    0: 'A simple hordeolum doesn’t need oral antibiotics. Warm (not cold) compresses help it drain, and optometrists don’t incise it at the slit lamp.',
    2: 'A steroid–antibiotic isn’t indicated, and massage with warm compresses is the mainstay. Most settle within 1–2 weeks.',
    3: 'IV antibiotics are for orbital cellulitis, not a stye. Warm compresses are what help it drain, and most resolve without surgery.',
  },
});
