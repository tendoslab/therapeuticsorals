// Topic list. `half` decides how the mock oral pairs cases:
// one 'anterior' case + one 'posterior' case, with a 'casereport' warm-up first.
window.CATEGORIES = [
    { id: 'glaucoma', title: 'Glaucoma & IOP', subtitle: 'AAC, angle closure, POAG, OHT, NTG, PXF, PDS, ARG, steroid response', icon: '🎯', half: 'posterior', classBase: 'cat-glaucoma' },
    { id: 'neuro', title: 'Neuro & Visual Fields', subtitle: 'Chiasm, tract vs cortex, altitudinal, centrocaecal, tilted disc', icon: '🧠', half: 'posterior', classBase: 'cat-neuro' },
    { id: 'cornea', title: 'Cornea & Keratitis', subtitle: 'Bacterial MK, CLPU, marginal, fungal, HSV, HZO, Fuchs', icon: '🔬', half: 'anterior', classBase: 'cat-cornea' },
    { id: 'uveitis', title: 'Uveitis & Trauma', subtitle: 'AAU, hypopyon, granulomatous, paediatric, chronic, hyphaema', icon: '🔥', half: 'anterior', classBase: 'cat-uveitis' },
    { id: 'allergy', title: 'Allergy, Lids & Ocular Surface', subtitle: 'SAC, VKC/shield ulcer, dry eye, blepharitis, dermatitis, preseptal', icon: '🌿', half: 'anterior', classBase: 'cat-allergy' },
    { id: 'conj', title: 'Conjunctiva & Sclera', subtitle: 'Adenoviral, bacterial/chlamydial, episcleritis vs scleritis', icon: '👁️', half: 'anterior', classBase: 'cat-conj' },
    { id: 'professional', title: 'Case Report & Prescribing Rules', subtitle: 'VF indices, scope, OBA/RANZCO, pregnancy, pharmacology', icon: '📋', half: 'casereport', classBase: 'cat-professional' }
];

window.CASES = [];
