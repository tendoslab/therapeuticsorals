// Topic list. `half` decides how the mock oral pairs cases:
// one 'anterior' case + one 'posterior' case, with a 'casereport' warm-up first.
// `hue` tints the topic's cards and pills.
window.CATEGORIES = [
    { id: 'glaucoma', title: 'Glaucoma & IOP', subtitle: 'AAC, PSS, POAG staging, OHT, NTG, PXF, PDS, NVG, ARG, steroid response', icon: '🎯', half: 'posterior', hue: 225 },
    { id: 'retina', title: 'Retina & Vascular', subtitle: 'PVD/RD, CRAO, AMD, diabetic retinopathy, CSCR, hydroxychloroquine', icon: '🩸', half: 'posterior', hue: 95 },
    { id: 'neuro', title: 'Neuro & Visual Fields', subtitle: 'Chiasm, tract vs cortex, altitudinal, centrocaecal, tilted disc, CN III palsy', icon: '🧠', half: 'posterior', hue: 275 },
    { id: 'cornea', title: 'Cornea & Keratitis', subtitle: 'Bacterial MK, CLPU, marginal, fungal, HSV, HZO, Fuchs', icon: '🔬', half: 'anterior', hue: 195 },
    { id: 'uveitis', title: 'Uveitis & Trauma', subtitle: 'AAU, hypopyon, granulomatous, paediatric, chronic, hyphaema', icon: '🔥', half: 'anterior', hue: 15 },
    { id: 'allergy', title: 'Allergy, Lids & Ocular Surface', subtitle: 'SAC, VKC/shield ulcer, dry eye, blepharitis, dermatitis, drop allergy, preseptal', icon: '🌿', half: 'anterior', hue: 140 },
    { id: 'conj', title: 'Conjunctiva & Sclera', subtitle: 'Adenoviral, bacterial, chlamydial, phlyctenulosis, episcleritis vs scleritis', icon: '👁️', half: 'anterior', hue: 330 },
    { id: 'professional', title: 'Case Report & Prescribing Rules', subtitle: 'VF indices, scope, OBA/RANZCO, pregnancy, pharmacology', icon: '📋', half: 'casereport', hue: 40 }
];

window.CASES = [];
