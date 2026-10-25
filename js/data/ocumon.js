// Ocumon: the partners you raise and the wild eye conditions you catch (see the Ocumon tab).
// Each wild creature belongs to a topic and fights with the questions from the cases whose title or
// theme matches `match` (case-insensitive); a hunt tops the pool up with other questions from the topic.
// Run `node tools/check-ocumon.js` after editing. `tier` 1 common, 2 uncommon, 3 rare (more HP, more XP).
// `hint` is the line shown once caught; keep it short and clinically right.
window.OCUMON = {
  // Partners: the Ocumon you raise. Pick a starter, and a new partner joins every MON_UNLOCK new catches,
  // in this order. `sprite` is a sheet in img/sprites: 'animal' sheets are the Little Animals Pack
  // (free to use, not to resell), 'char' sheets are 72 Cute Pixel Character (BDragon1727, free licence).
  // `strong` topics take ×1.25 damage. Each partner keeps its own level.
  partners: [
    { id: 'kitlet', name: 'Kitlet', sprite: 'cat', kind: 'animal', hue: 350, starter: true, strong: ['cornea', 'uveitis'], blurb: 'Shines a tapetum at the slit lamp. Strong on cornea and uveitis.' },
    { id: 'hopticus', name: 'Hopticus', sprite: 'bunny', kind: 'animal', hue: 220, starter: true, strong: ['neuro', 'retina'], blurb: 'Ears up for every field defect. Strong on neuro and retina.' },
    { id: 'blinkster', name: 'Blinkster', sprite: 'char-1', kind: 'char', hue: 45, starter: true, strong: ['allergy', 'conj'], blurb: 'Never stops blinking. Strong on lids, allergy and conjunctiva.' },
    { id: 'ursight', name: 'Ursight', sprite: 'bear', kind: 'animal', hue: 30, strong: ['glaucoma', 'professional'], blurb: 'Slow, steady and hard to fool on pressure. Strong on glaucoma and prescribing rules.' },
    { id: 'rosacea', name: 'Rosacea', sprite: 'char-6', kind: 'char', hue: 330, strong: ['allergy', 'cornea'], blurb: 'Flushes pink and fights back at the lid margin. Strong on lids and cornea.' },
    { id: 'patchbeard', name: 'Patchbeard', sprite: 'char-9', kind: 'char', hue: 260, strong: ['neuro', 'professional'], blurb: 'Patched one eye as a boy and never looked back. Strong on neuro and prescribing rules.' },
    { id: 'pinkeye', name: 'Pinkeye', sprite: 'pig', kind: 'animal', hue: 340, strong: ['conj', 'allergy'], blurb: 'Red, sticky and cheerful about it. Strong on conjunctiva and allergy.' },
    { id: 'mohawkeye', name: 'Mohawkeye', sprite: 'char-4', kind: 'char', hue: 120, strong: ['glaucoma', 'retina'], blurb: 'Spikes up like an IOP trace. Strong on glaucoma and retina.' },
    { id: 'lupupil', name: 'Lupupil', sprite: 'wolf', kind: 'animal', hue: 210, strong: ['uveitis', 'glaucoma'], blurb: 'Howls at a fixed, mid-dilated pupil. Strong on uveitis and glaucoma.' },
    { id: 'visorian', name: 'Visorian', sprite: 'char-14', kind: 'char', hue: 220, strong: ['cornea', 'professional'], blurb: 'Never takes off the eye protection. Strong on cornea and prescribing rules.' },
    { id: 'foxglove', name: 'Foxglove', sprite: 'char-15', kind: 'char', hue: 25, strong: ['retina', 'neuro'], blurb: 'Sees the world a little yellow. Strong on retina and neuro.' },
    { id: 'redreflex', name: 'Redreflex', sprite: 'char-3', kind: 'char', hue: 10, strong: ['retina', 'uveitis'], blurb: 'Checks every red reflex twice. Strong on retina and uveitis.' },
    { id: 'nightblind', name: 'Nightblind', sprite: 'char-13', kind: 'char', hue: 235, strong: ['retina', 'glaucoma'], blurb: 'Moves in the dark, mostly by memory. Strong on retina and glaucoma.' },
    { id: 'capsulo', name: 'Capsulo', sprite: 'char-5', kind: 'char', hue: 200, strong: ['uveitis', 'cornea'], blurb: 'Keeps a close eye on the lens capsule. Strong on uveitis and cornea.' },
    { id: 'irisius', name: 'Irisius', sprite: 'char-10', kind: 'char', hue: 0, strong: ['uveitis', 'conj'], blurb: 'A crest the colour of an inflamed iris. Strong on uveitis and conjunctiva.' },
    { id: 'cyanopsia', name: 'Cyanopsia', sprite: 'char-8', kind: 'char', hue: 190, strong: ['neuro', 'professional'], blurb: 'Everything looks a bit blue today. Strong on neuro and prescribing rules.' },
    { id: 'greenlid', name: 'Greenlid', sprite: 'char-7', kind: 'char', hue: 150, strong: ['allergy', 'conj'], blurb: 'Hat pulled down over a swollen lid. Strong on allergy and conjunctiva.' },
    { id: 'sparticle', name: 'Sparticle', sprite: 'char-12', kind: 'char', hue: 210, strong: ['glaucoma', 'cornea'], blurb: 'Shields up against foreign bodies. Strong on glaucoma and cornea.' },
    { id: 'spikecone', name: 'Spikecone', sprite: 'char-2', kind: 'char', hue: 100, strong: ['retina', 'allergy'], blurb: 'Hair like a field of cones. Strong on retina and allergy.' },
    { id: 'shadowscope', name: 'Shadowscope', sprite: 'char-11', kind: 'char', hue: 240, strong: ['neuro', 'glaucoma'], blurb: 'Finds the scotoma you missed. Strong on neuro and glaucoma.' },
    { id: 'prismo', name: 'Prismo', sprite: 'char-16', kind: 'char', hue: 275, strong: ['neuro', 'conj'], blurb: 'Bends light, and diplopia, to its will. Strong on neuro and conjunctiva.' },
    { id: 'goggleon', name: 'Goggleon', sprite: 'char-17', kind: 'char', hue: 355, strong: ['professional', 'cornea'], blurb: 'Reads every product information sheet. Strong on prescribing rules and cornea.' },
    { id: 'mouches', name: 'Mouches', sprite: 'char-18', kind: 'char', hue: 35, strong: ['retina', 'uveitis'], blurb: 'Drifts across your vision like a floater. Strong on retina and uveitis.' },
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
