// Study notes: more diagrams in the style of js/data/drug-moa.js (inline SVG coloured from the theme tokens, so
// they follow light and dark mode).
// 1. A new "Allergic eye disease" section after "Other anterior eye": the allergy spectrum diagram,
//    how SAC/PAC, VKC, AKC and GPC differ, VKC management by grade, and shield ulcers (Cameron grades).
// 2. Macular splitting vs sparing, dropped into the neuro section where study-notes.js leaves <!--macular-->.
(() => {
  const K = window.NOTES_KIT;
  if (!K) return;
  const { ul, h3, box, table, jump, diagram, flow } = K;

  // ---------------------------------------------------------------- allergy spectrum
  // Four stages across the top; the bars underneath show how far along it each condition goes.
  const COLS = [8, 169, 330, 491], W = 139;
  const end = (c) => COLS[c] + W;
  const stage = (c, title, sub) => `<rect class="dg-box" x="${COLS[c]}" y="44" width="${W}" height="60" rx="8"/>
    <text x="${COLS[c] + W / 2}" y="70" text-anchor="middle" class="b">${title}</text>
    <text x="${COLS[c] + W / 2}" y="91" text-anchor="middle" class="sm muted-up">${sub}</text>`;
  const step = (c) => `<line class="dg-step" x1="${end(c) + 3}" y1="74" x2="${COLS[c + 1] - 3}" y2="74" marker-end="url(#nd-ah)"/>`;
  const band = (y, toCol, kind, text) => `<rect class="dg-band ${kind}" x="${COLS[0]}" y="${y}" width="${end(toCol) - COLS[0]}" height="36" rx="8"/>
    <text x="${(COLS[0] + end(toCol)) / 2}" y="${y + 23}" text-anchor="middle" class="band ${kind}">${text}</text>`;
  const rx = (c, l1, l2) => `<rect class="dg-box rx" x="${COLS[c]}" y="290" width="${W}" height="54" rx="8"/>
    <text x="${COLS[c] + W / 2}" y="313" text-anchor="middle" class="sm b">${l1}</text>
    <text x="${COLS[c] + W / 2}" y="332" text-anchor="middle" class="sm muted-up">${l2}</text>`;
  const bracket = (x1, x2, label) => `<path class="dg-bracket" d="M${x1},34 V28 H${x2} V34"/><text x="${(x1 + x2) / 2}" y="20" text-anchor="middle" class="sm muted-up">${label}</text>`;

  const allergySvg = `<svg viewBox="0 0 640 352" role="img" aria-labelledby="nd-al-t"><title id="nd-al-t">The allergic eye disease spectrum. Four stages run left to right: sensitisation (IgE on mast cells), early phase (histamine release), late phase (eosinophils and Th2 cells), then chronic disease (T cells and fibroblasts). The first three are type I, IgE-mediated; the chronic stage is type IV, cell-mediated. Seasonal and perennial allergic conjunctivitis stop at the late phase and spare the cornea. VKC in children and AKC in adults run the whole way and put the cornea at risk. GPC also runs the whole way, driven by a contact lens or suture. Treatment by stage: allergen avoidance; antihistamine and mast cell stabiliser; a steroid pulse; ciclosporin or tacrolimus.</title>
    <defs><marker id="nd-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="dg-ahead3"/></marker></defs>
    <g class="dg-lbl">
      ${bracket(COLS[0], end(2), 'Type I (IgE-mediated)')}${bracket(COLS[3], end(3), 'Type IV (cell-mediated)')}
      ${stage(0, 'Sensitisation', 'IgE on mast cells')}${stage(1, 'Early phase', 'Histamine, minutes')}${stage(2, 'Late phase', 'Eosinophils, Th2')}${stage(3, 'Chronic', 'T cells, fibroblasts')}
      ${step(0)}${step(1)}${step(2)}
      ${band(122, 2, 'good', 'SAC / PAC: self-limiting, cornea spared')}
      ${band(168, 3, 'bad', 'VKC (children) and AKC (adults): cornea at risk')}
      ${band(214, 3, 'warn', 'GPC: mechanical trigger (CL, suture, prosthesis) plus immune')}
      <text x="${COLS[0]}" y="278" class="sm muted-up">Where treatment acts</text>
      ${rx(0, 'Avoid the allergen', 'cold compress, lubricant')}${rx(1, 'Antihistamine', '+ mast cell stabiliser')}${rx(2, 'Steroid pulse', 'short, fast taper')}${rx(3, 'Ciclosporin', 'or tacrolimus')}
    </g>
  </svg>`;

  // ---------------------------------------------------------------- macular splitting vs sparing
  // Right homonymous hemianopia, drawn as the patient sees it. Sparing keeps a small notch round fixation.
  const R = 105, CY = 148, SPARE = 22;
  const field = (cx, spared, title, l1, l2) => `
    <text x="${cx}" y="22" text-anchor="middle" class="b">${title}</text>
    <path class="dg-defect" d="M${cx},${CY - R} A${R},${R} 0 0 1 ${cx},${CY + R} ${spared ? `L${cx},${CY + SPARE} A${SPARE},${SPARE} 0 0 0 ${cx},${CY - SPARE} Z` : 'Z'}"/>
    <circle class="dg-field" cx="${cx}" cy="${CY}" r="${R}"/>
    <line class="dg-merid" x1="${cx - R}" y1="${CY}" x2="${cx + R}" y2="${CY}"/>
    <line class="dg-vmerid" x1="${cx}" y1="${CY - R}" x2="${cx}" y2="${CY + R}"/>
    <circle class="dg-fix" cx="${cx}" cy="${CY}" r="4.5"/>
    ${spared ? `<line class="dg-lead" x1="${cx + 16}" y1="${CY + 16}" x2="${cx + 42}" y2="${CY + 52}"/><text x="${cx + 46}" y="${CY + 66}" class="sm">spared</text>` : ''}
    <text x="${cx - R / 2}" y="${CY - R / 2 + 6}" text-anchor="middle" class="sm muted-up">seeing</text>
    <text x="${cx + R / 2 + 6}" y="${CY - R / 2 + 6}" text-anchor="middle" class="sm">blind</text>
    <text x="${cx}" y="${CY + R + 30}" text-anchor="middle" class="sm">${l1}</text>
    <text x="${cx}" y="${CY + R + 50}" text-anchor="middle" class="sm muted-up">${l2}</text>`;

  const macularSvg = `<svg viewBox="0 0 640 310" role="img" aria-labelledby="nd-mac-t"><title id="nd-mac-t">Two right homonymous hemianopias. Left: macular splitting, where the defect runs straight through fixation; this points to the optic tract, lateral geniculate nucleus or optic radiations. Right: macular sparing, where the central few degrees on the blind side still see; this points to the occipital cortex, usually a posterior cerebral artery infarct.</title>
    <g class="dg-lbl">
      ${field(162, false, 'Macular splitting', 'Defect cuts straight through fixation', 'Tract, LGN or radiations')}
      ${field(478, true, 'Macular sparing', 'Central few degrees kept on the blind side', 'Occipital cortex (PCA infarct)')}
    </g>
  </svg>`;

  const macular = `${h3('Macular splitting vs sparing')}
    <div class="dgrid">${diagram(macularSvg, '<b>Right homonymous hemianopia, as the patient sees it.</b> Both eyes’ fields look like this when the defect is congruous. The vertical line is the midline the defect respects; the dot is fixation.', true)}
    ${box('warn', '💡 Why the occipital lobe spares the macula', ul(
      '<b>Dual blood supply:</b> the occipital pole (macular cortex) gets collaterals from the <b>MCA</b> as well as the PCA, so a PCA infarct often leaves it alive.',
      '<b>Huge representation:</b> the macula takes up about half of V1, so a lesion rarely knocks all of it out.',
      '<b>Test it properly:</b> on a 24-2 or 30-2 the central points are 3° apart, so sparing under 3° is easy to miss. Real sparing is usually 3–10°; unsteady fixation can fake it (run a 10-2 if it matters).',
      '<b>Bilateral occipital infarcts with sparing</b> leave “keyhole” vision: good VA through a tiny field.',
      '<b>Refer:</b> any new homonymous defect is a stroke or tumour until shown otherwise. Within 48 h of onset or with other neuro signs: ED; older and stable: urgent GP/neurology, imaging, and tell them not to drive (Austroads).'))}</div>`;

  // ---------------------------------------------------------------- the section
  const vkc = {
    id: 'vkc', title: 'Allergic eye disease: VKC and shield ulcers', icon: '🌸', hue: 320,
    lead: 'Allergic eye disease runs from a self-limiting itch to a blinding keratopathy. The cornea sets the stage: once it is involved, VKC is co-managed with an ophthalmologist, and a shield ulcer is a same-day referral.',
    html: `<div class="dgrid">${diagram(allergySvg, '<b>The allergy spectrum.</b> SAC and PAC stop at the late phase and never threaten the cornea. VKC, AKC and GPC go on to chronic, T cell-driven disease, so they need steroid pulses and steroid-sparing drugs, not just drops for the itch.', true)}</div>
      ${h3('Telling them apart')}
      ${table(['', 'Who and when', 'Where to look', 'Cornea', 'Level of care'], [
        ['SAC / PAC', 'Any age; seasonal (pollen) or year-round (dust mite, pets). Hay fever', 'Chemosis, fine papillae, watery; itch is the key symptom', 'Spared', 'Optometrist: avoidance, antihistamine/MCS, short FML if severe'],
        ['VKC', 'Boys 5–15 (most under 10), warm dry climate, spring–summer, atopy in the family. Usually burns out after puberty', '<b>Tarsal:</b> giant cobblestones over 1 mm on the upper lid. <b>Limbal:</b> gelatinous limbus, Horner-Trantas dots. Ropey mucus', 'SPK on the upper third → macroerosion → shield ulcer; pseudogerontoxon later', 'Grades 1–2 optometrist; grade 3+ co-manage; shield ulcer same day'],
        ['AKC', 'Adults 20–50 with atopic dermatitis; perennial', 'Lower tarsus, eczema on lid skin, Dennie-Morgan folds, scarring, symblepharon', 'PEE, scarring, neovascularisation; keratoconus, HSV, anterior subcapsular cataract', 'Refer and co-manage; ciclosporin/tacrolimus long term'],
        ['GPC', 'CL wearer (soft, deposits), exposed suture, prosthesis', 'Upper tarsus papillae over 0.3 mm, CL decentring up, mucus on the lens', 'Usually spared', 'Optometrist: stop CL 1–4 weeks, then daily disposable or RGP, peroxide; MCS; short FML']])}
      ${h3('VKC: management by grade')}
      <p>Grades 0–4 follow the clinical grading used in VKC trials (Bonini). Whatever the grade: cold compresses, preservative-free lubricants to flush allergens, no rubbing, sunglasses and a hat for photophobia, and treat the eczema and asthma with the GP. Check IOP at every steroid visit: children are often steroid responders.</p>
      <div class="vkc-grades">${[
        ['0', 'Quiescent', 'No symptoms and no treatment for 3+ months.', 'Education. Start a mast cell stabiliser or dual-acting drop 2–4 weeks before the season. Review before the season starts.', 'good', 'Optometrist'],
        ['1', 'Mild', 'Itch and mucus, papillae, no photophobia, cornea clear.', '<b>Dual-acting:</b> olopatadine 0.1% bd or ketotifen 0.025% bd, or a <b>stabiliser:</b> lodoxamide 0.1% qid or cromoglycate 2% qid, through the whole season. Oral non-sedating antihistamine (loratadine) if hay fever too. Review 2–4 weeks.', 'good', 'Optometrist'],
        ['2', 'Moderate', 'Photophobia, active tarsal or limbal disease, Trantas dots; no or minimal SPK.', 'Grade 1 plus a <b>steroid pulse:</b> FML 0.1% or loteprednol 0.5% qid for 5–7 days, then taper over 1–2 weeks. Review in 1 week (IOP). Repeat pulses for flares rather than steady low-dose steroid.', 'warn', 'Optometrist, low threshold to refer'],
        ['3', 'Severe', 'Persistent symptoms, punctate keratitis on the upper cornea, macroerosion starting.', '<b>Pulse prednisolone acetate 1%</b> (Pred Forte) 6–8×/day for 3–5 days, fast taper over about 2 weeks, plus the dual-acting drop. Start a <b>steroid-sparing</b> drug: ciclosporin 0.1% (Verkazia) qid or tacrolimus 0.1% ointment, which take weeks to work.', 'bad', 'Refer: co-manage with ophthalmologist'],
        ['4', 'Very severe', 'Diffuse punctate keratitis, <b>shield ulcer or plaque</b>, pseudogerontoxon, limbal stem cell damage.', 'Same-day ophthalmology. Intensive steroid with antibiotic cover, debridement or plaque removal, supratarsal steroid injection; systemic ciclosporin or steroid in rare refractory cases.', 'bad', 'Same-day referral']]
      .map(([g, name, sign, rx, kind, who]) => `<div class="vkc-grade ${kind}"><div class="vg-head"><span class="vg-num">${g}</span><b>${name}</b><span class="vg-who">${who}</span></div><p class="vg-sign">${sign}</p><p>${rx}</p></div>`).join('')}</div>
      ${h3('Shield ulcers')}
      <div class="flows two">
        ${flow('How a shield ulcer forms', [
          { n: 'Giant papillae on the upper tarsus, packed with eosinophils', k: 'start' },
          { a: 'major basic protein and eosinophil cationic protein are toxic to epithelium; papillae rub on every blink' },
          'Punctate keratitis on the upper third of the cornea',
          { a: 'spots join up' },
          'Macroerosion: epithelium lost over an oval area',
          { a: 'mucus, fibrin and eosinophil debris settle on bare Bowman’s' },
          { n: 'Plaque stops the epithelium growing back → <b>shield ulcer</b>', k: 'end' }],
          'Treat the tarsus, not just the cornea: the ulcer won’t heal while the papillae stay active.')}
        <div class="stack">
        ${table(['Cameron grade', 'Base', 'Treatment', 'Outcome'], [
          ['1', 'Clear (transparent) base', 'Medical: steroid + antibiotic cover', 'Heals quickly, little scarring'],
          ['2', 'Translucent base with inflammatory debris', 'Medical plus <b>debridement</b> of the base', 'Slower; scarring likely'],
          ['3', '<b>Raised plaque</b> above the epithelium', 'Surgical plaque removal (superficial keratectomy) ± <b>amniotic membrane</b>', 'Slowest; worst for vision']])}
        <p class="muted" style="font-size:.85rem">Cameron JA (1995). Shield ulcers are oval, on the upper half of the cornea, with a grey, sharply edged base; they sit under the upper lid, so lift it.</p>
        </div>
      </div>
      <div class="ncols">
        ${box('bad', '↗️ Shield ulcer: what you do today', ul(
          '<b>Same-day referral</b> to the ophthalmologist or eye hospital; phone them.',
          'Until seen (and as they usually continue): <b>prednisolone acetate 1%</b> at high frequency, <b>chloramphenicol 0.5% qid</b> as cover while the epithelium is open, and a cycloplegic (homatropine 2% bd) for pain and photophobia.',
          'Keep the dual-acting drop going; stop contact lenses; no rubbing.',
          'They add ciclosporin or tacrolimus, debride or remove the plaque, and may inject steroid above the tarsus.',
          'Steroid on an open epithelium is right here: the defect is immune, not infective. Say so, and say you cover it with an antibiotic.'))}
        ${box('warn', '👀 Follow-up and complications', ul(
          '<b>Bacterial keratitis</b> on the ulcer: new infiltrate, pain, hypopyon → treat as microbial keratitis.',
          '<b>Amblyopia</b> in children under 8 from scarring or astigmatism: check VA each visit and refract; patch with the ophthalmologist.',
          '<b>Steroid side effects:</b> IOP at every visit, lens for PSC.',
          '<b>Scarring</b> and irregular astigmatism (RGP may help later); limbal stem cell deficiency in long-standing limbal VKC.',
          'Keratoconus is more common (rubbing): topography once settled.'))}
      </div>
      <p>${jump('anterior', '🌿 Back to Other anterior eye')} ${jump('moa-inflam', '🔥 How the anti-allergy drugs work')}</p>`
  };

  const N = window.STUDY_NOTES || [];
  const at = N.findIndex((s) => s.id === 'anterior');
  N.splice(at >= 0 ? at + 1 : N.length, 0, vkc);
  const neuro = N.find((s) => s.id === 'neuro');
  if (neuro) neuro.html = neuro.html.includes('<!--macular-->') ? neuro.html.replace('<!--macular-->', macular) : neuro.html + macular;
})();
