// Why each wrong option is wrong, for the cases in neuro.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'homonymous#0': {
    0: 'The pathways cross. A right-sided homonymous defect comes from a lesion on the left, behind the chiasm.',
    2: 'Chiasmal lesions give bitemporal defects (both temporal fields), not a same-sided defect in both eyes.',
    3: 'A junctional lesion gives a central scotoma in one eye with a superotemporal defect in the other, not a homonymous hemianopia.',
  },
  'homonymous#2': {
    0: 'Tract lesions are incongruous, give a contralateral RAPD and eventually band atrophy. This defect has none of those.',
    1: 'Meyer’s loop gives a “pie in the sky” superior quadrantanopia that is fairly incongruous, without macular sparing.',
    2: 'Parietal lesions give an inferior (“pie on the floor”) defect, often with neurological signs. A highly congruous, macula-sparing hemianopia is occipital.',
  },
  'bitemporal#0': {
    0: 'Tract lesions give homonymous defects. Bitemporal loss needs damage to the crossing nasal fibres, at the chiasm.',
    2: 'Occipital lesions give homonymous defects. A bitemporal defect means the crossing fibres at the chiasm.',
    3: 'Papillomacular damage gives central or centrocaecal scotomas, not temporal hemifield loss that respects the vertical midline.',
  },
  'bitemporal#2': {
    0: 'Chiasmal defects usually start peripherally (often superotemporally), so a 10-2 would miss them.',
    2: 'An Amsler grid only covers the central 10°. Chiasmal defects need peripheral mapping.',
    3: 'FDT screening isn’t enough to map the defect, and threshold fields don’t over-call it. Kinetic or 30-2 testing shows the full extent.',
  },
  'altitudinal#0': {
    6: 'A pituitary adenoma compresses the chiasm and gives bitemporal defects that respect the vertical midline, not the horizontal one.',
  },
  'altitudinal#1': {
    5: 'GCA almost never occurs under 50. Young age argues against it.',
    6: 'A crowded “disc at risk” is the substrate for non-arteritic AION. Arteritic AION often has a normal-sized cup.',
  },
  'altitudinal#2': {
    0: 'Waiting 2 weeks risks blindness in the other eye. Steroids start on suspicion; the biopsy stays positive for a week or more after starting.',
    2: 'Topical steroids don’t treat a systemic vasculitis, and a week’s delay is dangerous. This needs same-day ED and systemic steroids.',
    3: 'GCA and NAION are managed very differently. GCA needs same-day systemic steroids, and aspirin alone is not treatment.',
  },
  'centrocaecal#0': {
    6: 'Early glaucoma causes arcuate and nasal-step defects and spares fixation until late. It doesn’t cause centrocaecal scotomas.',
  },
  'centrocaecal#2': {
    0: 'Pallor with centrocaecal loss and normal IOP in a young adult points to a non-glaucomatous optic neuropathy. Treating it as NTG would delay finding the cause.',
    2: 'Topical steroids don’t reach the optic nerve, and bilateral pallor over 2 months isn’t acute optic neuritis. This needs neuro-ophthalmology work-up.',
    3: 'Bilateral temporal pallor with reduced vision is never a normal variant. Delay can make toxic or nutritional causes permanent.',
  },
  'tilted-disc#1': {
    0: 'That pattern describes chiasmal compression: it respects the vertical midline, progresses and doesn’t change with lenses.',
    2: 'Nasal steps that respect the horizontal midline and progress are glaucomatous.',
    3: 'Tilted-disc defects cross the vertical midline and shrink with extra minus. They don’t enlarge with it.',
  },
  'tilted-disc#2': {
    0: 'With normal IOP and a typical tilted-disc defect, there’s no basis to treat. Stability over time separates it from glaucoma, so document and monitor first.',
    2: 'Imaging is for defects that respect the vertical midline or progress. Repeating fields with extra minus does help separate the two.',
    3: 'Tilted discs commonly cause refractive field defects, so you can’t assume artefact. OCT is still useful with care, and a baseline is essential.',
  },
});
