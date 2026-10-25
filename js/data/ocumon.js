// Ocumon: the companions you raise and the wild eye conditions you catch (see the Ocumon tab).
// Each wild creature belongs to a topic and fights with the questions from the cases whose title or
// theme matches `match` (case-insensitive); a hunt tops the pool up with other questions from the topic.
// Run `node tools/check-ocumon.js` after editing. `tier` 1 common, 2 uncommon, 3 rare (more HP, more XP).
// `hint` is the line shown once caught; keep it short and clinically right.
window.OCUMON = {
  starters: [
    { id: 'owl', hue: 35, stages: [
      { name: 'Hootlet', icon: '🐣' }, { name: 'Strigil', icon: '🦉' }, { name: 'Nightsight', icon: '🦅' }],
      blurb: 'Huge eyes for low light. Hits hardest on glaucoma and neuro questions.', strong: ['glaucoma', 'neuro', 'retina'] },
    { id: 'cat', hue: 195, stages: [
      { name: 'Kitlet', icon: '🐱' }, { name: 'Tapetail', icon: '🐈' }, { name: 'Lucidon', icon: '🐆' }],
      blurb: 'Shines a tapetum at the slit lamp. Hits hardest on cornea and uveitis questions.', strong: ['cornea', 'uveitis', 'professional'] },
    { id: 'lizard', hue: 140, stages: [
      { name: 'Chamelet', icon: '🦎' }, { name: 'Swivelid', icon: '🐊' }, { name: 'Dracornea', icon: '🐉' }],
      blurb: 'Each eye swivels on its own. Hits hardest on lids, allergy and conjunctiva questions.', strong: ['allergy', 'conj', 'professional'] },
  ],
  wild: [
    // Glaucoma & IOP
    { id: 'pressure-golem', name: 'Pressure Golem', icon: '🗿', cat: 'glaucoma', tier: 3, match: 'angle closure|acute angle|\\bAAC\\b', hint: 'Shuts the angle and drives IOP into the 50s. Same-day referral after first aid.' },
    { id: 'flakefrost', name: 'Flakefrost', icon: '❄️', cat: 'glaucoma', tier: 2, match: 'pseudoexfol|\\bPXF\\b', hint: 'Sheds flaky material on the lens capsule; IOP runs high and swings.' },
    { id: 'pigmoth', name: 'Pigmoth', icon: '🦋', cat: 'glaucoma', tier: 2, match: 'pigment', hint: 'Rubs pigment off the back of the iris: Krukenberg spindle and transillumination defects.' },
    { id: 'silent-thief', name: 'Silent Thief', icon: '🥷', cat: 'glaucoma', tier: 2, match: 'POAG|arcuate|staging|central defect|unreliable field', hint: 'Takes the field from the edges in, with no symptoms until late.' },
    { id: 'lowtide', name: 'Lowtide', icon: '🌊', cat: 'glaucoma', tier: 2, match: 'normal-tension|\\bNTG\\b', hint: 'Damages the disc while the IOP stays in the normal range.' },
    { id: 'highwater', name: 'Highwater', icon: '💧', cat: 'glaucoma', tier: 1, match: '\\bOHT\\b|IOP 2\\d|family history|drops|haemorrhage', hint: 'High IOP with a healthy disc and field. Weigh the risk factors: treat or watch?' },
    { id: 'steroidon', name: 'Steroidon', icon: '💊', cat: 'glaucoma', tier: 1, match: 'steroid', hint: 'Raises the IOP a few weeks after steroids start. Check the pressure at review.' },
    { id: 'posnerling', name: 'Posnerling', icon: '🌀', cat: 'glaucoma', tier: 3, match: 'posner|schlossman|\\bPSS\\b|IOP 60', hint: 'One eye, very high IOP, a few fine KPs and a fairly quiet eye. It comes back.' },
    { id: 'recessor', name: 'Recessor', icon: '🥊', cat: 'glaucoma', tier: 2, match: 'recession', hint: 'A torn, widened ciliary body band years after blunt trauma, then glaucoma.' },
    { id: 'neovine', name: 'Neovine', icon: '🌿', cat: 'glaucoma', tier: 3, match: 'neovasc|\\bNVG\\b|rubeosis', hint: 'New vessels close the angle after retinal ischaemia. Find and treat the cause.' },
    // Retina & vascular
    { id: 'tobacco-duster', name: 'Tobacco Duster', icon: '🌫️', cat: 'retina', tier: 3, match: 'flashes|cobweb|tobacco|detach', hint: 'Pigment in the vitreous (Shafer’s sign) means a retinal tear until proven otherwise.' },
    { id: 'occluder', name: 'Occluder', icon: '🧱', cat: 'retina', tier: 3, match: 'light perception|CRAO|artery', hint: 'A stroke of the eye: a pale retina and a cherry-red spot. Send to the emergency department.' },
    { id: 'drusenoid', name: 'Drusenoid', icon: '🟡', cat: 'retina', tier: 1, match: 'drusen|AMD|supplement', hint: 'Drusen and pigment change. Stop smoking, consider AREDS2, and use an Amsler grid.' },
    { id: 'sugarsprite', name: 'Sugarsprite', icon: '🍬', cat: 'retina', tier: 2, match: 'diabet|NPDR', hint: 'Haemorrhages, exudates and venous beading. Pregnancy can speed it up.' },
    { id: 'serous-sam', name: 'Serous Sam', icon: '🫧', cat: 'retina', tier: 2, match: 'distorted|CSCR|stressed', hint: 'A blister of fluid under the macula. Ask about steroids, including creams and sprays.' },
    { id: 'bullseye', name: 'Bullseye', icon: '🎯', cat: 'retina', tier: 2, match: 'hydroxychloroquine', hint: 'Toxic to the macula with dose and time. Baseline, then yearly screening after five years.' },
    // Neuro & visual fields
    { id: 'chiasmora', name: 'Chiasmora', icon: '✂️', cat: 'neuro', tier: 2, match: 'chiasm|bitemporal|apoplexy', hint: 'Presses on the chiasm and cuts both temporal fields.' },
    { id: 'hemihalf', name: 'Hemihalf', icon: '🌗', cat: 'neuro', tier: 2, match: 'post-chiasmal|homonymous|traffic|tract|parietal|field', hint: 'Takes the same half of the field in both eyes. The more congruous, the further back.' },
    { id: 'arteritor', name: 'Arteritor', icon: '🦖', cat: 'neuro', tier: 3, match: 'jaw|altitudinal|arteritic|\\bGCA\\b', hint: 'Jaw claudication and a pale, swollen disc. ESR and CRP today, and same-day referral.' },
    { id: 'third-wheel', name: 'Third Wheel', icon: '🛞', cat: 'neuro', tier: 3, match: 'third nerve|CN III', hint: 'Eye down and out with ptosis. A dilated pupil means imaging today.' },
    { id: 'hornet', name: 'Hornet', icon: '🐝', cat: 'neuro', tier: 2, match: 'small pupil|horner|neck pain', hint: 'Ptosis and a small pupil. After neck pain, think carotid dissection.' },
    { id: 'fatiguer', name: 'Fatiguer', icon: '😴', cat: 'neuro', tier: 2, match: 'by evening|myasthen', hint: 'Ptosis and double vision that get worse through the day.' },
    { id: 'pressure-balloon', name: 'Swelldisc', icon: '🎈', cat: 'neuro', tier: 2, match: 'swollen discs|papilloed|\\bIIH\\b|doxycycline', hint: 'Raised intracranial pressure: headache and two swollen discs. Check the drug history.' },
    { id: 'tilty', name: 'Tilty', icon: '📐', cat: 'neuro', tier: 1, match: 'tilted|centrocaecal', hint: 'Looks scary on the field, but some discs are just built that way. Compare old records.' },
    // Cornea & keratitis
    { id: 'pseudomonaut', name: 'Pseudomonaut', icon: '🦠', cat: 'cornea', tier: 2, match: 'bacterial|microbial|\\bMK\\b|infiltrate|ulcer|extended-wear|sleeps', hint: 'Lens-related keratitis that can melt the cornea in a day. Hourly fluoroquinolone.' },
    { id: 'dendrake', name: 'Dendrake', icon: '🐍', cat: 'cornea', tier: 2, match: '\\bHSV\\b|dendrit|herpe|cold sore', hint: 'Branching dendrites with terminal bulbs. No steroids for the epithelial form.' },
    { id: 'zosterix', name: 'Zosterix', icon: '⚡', cat: 'cornea', tier: 3, match: 'zoster|\\bHZO\\b|vesicle', hint: 'A rash on the tip of the nose (Hutchinson’s sign) warns that the eye may be involved.' },
    { id: 'fungoid', name: 'Fungoid', icon: '🍄', cat: 'cornea', tier: 3, match: 'fung|garden', hint: 'A feathery, raised infiltrate after plant-matter injury. Refer.' },
    { id: 'marginalis', name: 'Marginalis', icon: '🌙', cat: 'cornea', tier: 1, match: 'marginal|CLPU|CLARE|rosacea|peripheral', hint: 'A sterile peripheral infiltrate with a clear gap to the limbus.' },
    { id: 'guttatum', name: 'Guttatum', icon: '🫗', cat: 'cornea', tier: 2, match: 'fuchs|endothel', hint: 'Guttata and morning blur as the endothelial pump fails.' },
    // Uveitis & trauma
    { id: 'flarecell', name: 'Flarecell', icon: '🔥', cat: 'uveitis', tier: 1, match: '\\bAAU\\b|uveitis|photophob|chemist drops|joint', hint: 'Cells, flare, ciliary flush and photophobia. Steroid plus cycloplegic.' },
    { id: 'hypopyrex', name: 'Hypopyrex', icon: '🥛', cat: 'uveitis', tier: 3, match: 'hypopyon|fibrin', hint: 'A settled layer of white cells in the anterior chamber.' },
    { id: 'mutton-mauler', name: 'Mutton Mauler', icon: '🐑', cat: 'uveitis', tier: 3, match: 'mutton|granulomatous|chronic|irregular pupil', hint: 'Mutton-fat KPs: think sarcoid, TB and syphilis.' },
    { id: 'synechion', name: 'Synechion', icon: '⛓️', cat: 'uveitis', tier: 2, match: 'synechiae|atropine', hint: 'Sticks the iris to the lens. Break it early with a strong cycloplegic.' },
    { id: 'hyphemite', name: 'Hyphemite', icon: '🩸', cat: 'uveitis', tier: 2, match: 'hyphaema|soccer|blunt|trauma', hint: 'Blood in the anterior chamber after a blow. Watch for a rebleed and IOP rise.' },
    { id: 'alkalord', name: 'Alkalord', icon: '🧪', cat: 'uveitis', tier: 3, match: 'cement|splash|chemical', hint: 'Alkali burn: irrigate first, ask questions later.' },
    { id: 'postop-imp', name: 'Post-op Imp', icon: '🩹', cat: 'uveitis', tier: 2, match: 'cataract surgery|day 1', hint: 'Lurks after cataract surgery: CMO, endophthalmitis and steroid response.' },
    // Allergy, lids & ocular surface
    { id: 'pollenix', name: 'Pollenix', icon: '🌼', cat: 'allergy', tier: 1, match: 'seasonal|allergic|itch|spring', hint: 'Itch above all. Mast cell stabiliser plus antihistamine.' },
    { id: 'shieldback', name: 'Shieldback', icon: '🛡️', cat: 'allergy', tier: 3, match: '\\bVKC\\b|shield|vernal|\\bAKC\\b|eczema', hint: 'Giant papillae and a shield ulcer in a young atopic boy.' },
    { id: 'dry-spell', name: 'Dry Spell', icon: '🏜️', cat: 'allergy', tier: 1, match: 'dry eye|ciclosporin|strands|thyroid', hint: 'Unstable tear film. Work out evaporative vs aqueous-deficient first.' },
    { id: 'demodexa', name: 'Demodexa', icon: '🕷️', cat: 'allergy', tier: 1, match: 'blephar|demodex|lashes', hint: 'Cylindrical dandruff at the lash base. Tea tree and lid hygiene.' },
    { id: 'chalazoid', name: 'Chalazoid', icon: '🔴', cat: 'allergy', tier: 1, match: 'chalaz|hordeol|third chalazion', hint: 'A blocked meibomian gland. A third one in the same spot needs a biopsy.' },
    { id: 'cellulord', name: 'Cellulord', icon: '🎈', cat: 'allergy', tier: 2, match: 'preseptal|cellulitis|inner corner|swollen lids|dermatitis', hint: 'A swollen, red lid. Check eye movements and vision for orbital spread.' },
    { id: 'bellwether', name: 'Bellwether', icon: '🔔', cat: 'allergy', tier: 2, match: 'droopy face|close her eye|glaucoma drops', hint: 'A face that won’t close the eye, or drops the eye won’t tolerate. Protect the surface.' },
    // Conjunctiva & sclera
    { id: 'adenoid', name: 'Adenoid', icon: '🤧', cat: 'conj', tier: 1, match: 'adenovir|sore throat|childcare|watery', hint: 'Watery, red, follicles and a tender node. Highly contagious.' },
    { id: 'gonoclaw', name: 'Gonoclaw', icon: '🦀', cat: 'conj', tier: 3, match: 'three-day|pus pouring|neonat', hint: 'Pus pouring from a newborn’s eyes. Same-day referral.' },
    { id: 'chlamydon', name: 'Chlamydon', icon: '🪱', cat: 'conj', tier: 2, match: 'chlamyd|won.t settle|six weeks', hint: 'Follicular conjunctivitis that won’t settle on drops. It needs systemic treatment.' },
    { id: 'sclerok', name: 'Sclerok', icon: '🪨', cat: 'conj', tier: 2, match: 'scler|sectoral', hint: 'Deep, boring pain that wakes you at night is scleritis, not episcleritis.' },
    { id: 'phlyctenix', name: 'Phlyctenix', icon: '🫘', cat: 'conj', tier: 2, match: 'phlyct|limbal', hint: 'A limbal nodule from a reaction to staph (or TB) antigen.' },
    { id: 'pterygon', name: 'Pterygon', icon: '🏄', cat: 'conj', tier: 1, match: 'pteryg|surfer|fleshy', hint: 'A wing of tissue growing onto the cornea in sun-exposed eyes.' },
    { id: 'stickeye', name: 'Stickeye', icon: '🍯', cat: 'conj', tier: 1, match: 'bacterial conj|crusty|toddler|diabetes', hint: 'Sticky, crusted lids in the morning.' },
    // Case report & prescribing rules
    { id: 'scope-creep', name: 'Scope Creep', icon: '📜', cat: 'professional', tier: 1, match: 'scope|scripts|quick-fire', hint: 'Knows exactly what an optometrist may prescribe, and when to refer.' },
    { id: 'bump-guardian', name: 'Bump Guardian', icon: '🤰', cat: 'professional', tier: 2, match: 'pregnan|breastfeed|children|myope', hint: 'Guards the safe drug choices for pregnancy, breastfeeding and children.' },
    { id: 'fieldreader', name: 'Fieldreader', icon: '📈', cat: 'professional', tier: 2, match: 'field printout', hint: 'Reads reliability indices, MD, PSD and the GHT before the plot.' },
    { id: 'pharmakon', name: 'Pharmakon', icon: '⚗️', cat: 'professional', tier: 1, match: 'drug class|mechanism|nsaid', hint: 'Knows every mechanism, onset time and contraindication.' },
    { id: 'erodon', name: 'Erodon', icon: '🪞', cat: 'professional', tier: 3, match: 'RCE|EBMD', hint: 'Tears the epithelium off on waking. The boss of your own case report.' },
  ],
};
