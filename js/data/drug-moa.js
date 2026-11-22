// Study notes: "How the drugs work". Four mechanism-of-action sections that sit straight after the drug
// reference, each with a diagram of what the drug acts on and flowcharts of the pathway it blocks.
// Diagrams are inline SVG coloured from the theme tokens (css/styles.css, .dgm) so they follow light and dark mode.
// Flowcharts are plain HTML (.flow) so they reflow on a phone.
(() => {
  const ul = (...li) => `<ul>${li.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  const h3 = (t) => `<h3>${t}</h3>`;
  const box = (kind, title, html) => `<div class="nbox ${kind}"><p class="label">${title}</p>${html}</div>`;
  const table = (head, rows) => `<div class="tablewrap"><table class="t ntable"><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr>${rows.map((r) => `<tr>${r.map((d, i) => (i ? `<td>${d}</td>` : `<td><b>${d}</b></td>`)).join('')}</tr>`).join('')}</table></div>`;
  const jump = (id, label) => `<button type="button" class="btn small ghost" data-act="notes-jump" data-v="${id}">${label}</button>`;

  // A diagram: the SVG scrolls sideways inside its frame on narrow screens rather than shrinking its labels.
  const diagram = (svg, caption, wide) => `<figure class="dgm${wide ? ' wide' : ''}"><div class="dgm-scroll">${svg}</div><figcaption>${caption}</figcaption></figure>`;
  // Numbered legend that matches the circled numbers on a diagram.
  const legend = (items) => `<div class="dlegend">${items.map(([n, title, html, kind]) => `<div class="ditem ${kind || ''}"><span class="dnum" aria-hidden="true">${n}</span><div><b>${title}</b>${html}</div></div>`).join('')}</div>`;

  // Flowchart. Items: 'text' or {n, k} is a box (k: 'end' outcome, 'start' trigger);
  // {a, stop, go} is an arrow with an optional label and the drugs that block (stop) or drive (go) that step;
  // {fork: [[items], [items]]} splits into side-by-side branches.
  const tag = (kind, t) => `<span class="ftag ${kind}">${kind === 'stop' ? '⛔' : '➕'} ${t}</span>`;
  const flowItems = (items) => items.map((it) => {
    if (typeof it === 'string') return `<div class="fnode">${it}</div>`;
    if (it.n) return `<div class="fnode ${it.k || ''}">${it.n}</div>`;
    if (it.fork) return `<div class="ffork" style="--n:${it.fork.length}">${it.fork.map((col) => `<div class="flow">${flowItems(col)}</div>`).join('')}</div>`;
    const tags = [...(it.stop || []).map((t) => tag('stop', t)), ...(it.go || []).map((t) => tag('go', t))].join('');
    return `<div class="farrow"><span class="fvia">${it.a || ''}</span><span class="fline" aria-hidden="true"></span><span class="ftags">${tags}</span></div>`;
  }).join('');
  const flow = (title, items, note) => `<div class="flowcard">${title ? `<p class="label">${title}</p>` : ''}<div class="flow">${flowItems(items)}</div>${note ? `<p class="fnote">${note}</p>` : ''}</div>`;

  // Range bars on a linear (0–max) or log scale. rows: [label, lo, hi, text].
  const bars = (rows, { max, log, ticks, unit }) => {
    const pos = (v) => (log ? (Math.log10(v) / Math.log10(max)) : v / max) * 100;
    return `<div class="rbars">${rows.map(([label, lo, hi, text]) => `<div class="rrow"><span class="rlab">${label}</span><span class="rtrack"><i style="left:${pos(lo).toFixed(1)}%;width:${Math.max(pos(hi) - pos(lo), 1.5).toFixed(1)}%"></i></span><span class="rval">${text}</span></div>`).join('')}
      <div class="rrow raxis"><span class="rlab"></span><span class="rtrack">${ticks.map(([v, t]) => `<em style="left:${pos(v).toFixed(1)}%">${t}</em>`).join('')}</span><span class="rval">${unit || ''}</span></div></div>`;
  };

  // ---------------------------------------------------------------- diagrams
  const arrowDefs = `<defs><marker id="dg-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="dg-ahead"/></marker>
    <marker id="dg-ah2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="dg-ahead2"/></marker></defs>`;
  const num = (x, y, n) => `<g class="dg-num"><circle cx="${x}" cy="${y}" r="13"/><text x="${x}" y="${y + 5}" text-anchor="middle">${n}</text></g>`;

  const aqueousSvg = `<svg viewBox="0 0 600 390" role="img" aria-labelledby="dg-aq-t"><title id="dg-aq-t">Half cross-section of the anterior segment: aqueous is made by the ciliary processes, flows behind the iris, through the pupil and across the anterior chamber, and leaves through the trabecular meshwork into Schlemm’s canal or through the ciliary muscle face into the suprachoroidal space.</title>${arrowDefs}
    <path class="dg-tissue" d="M30,40 Q300,40 400,190 L378,196 Q290,62 30,62 Z"/>
    <path class="dg-sclera" d="M400,190 Q452,262 472,390 L436,390 Q420,282 378,196 Z"/>
    <ellipse class="dg-lens" cx="30" cy="292" rx="200" ry="58"/>
    <path class="dg-cb" d="M370,232 Q402,282 432,372 Q372,350 336,318 Q304,310 292,296 Q298,280 316,274 Q328,262 344,258 Q356,246 370,232 Z"/>
    <g class="dg-zon"><line x1="292" y1="294" x2="231" y2="292"/><line x1="298" y1="281" x2="228" y2="276"/><line x1="304" y1="307" x2="226" y2="307"/></g>
    <path class="dg-iris" d="M372,206 C322,198 202,212 140,219 L140,232 C212,233 322,233 370,233 Z"/>
    <path class="dg-tm" d="M372,198 L387,195 L390,216 L374,218 Z"/>
    <ellipse class="dg-canal" cx="400" cy="205" rx="7" ry="5"/>
    <path class="dg-flow" d="M298,300 C262,252 204,244 152,240" marker-end="url(#dg-ah)"/>
    <path class="dg-flow" d="M150,238 C130,230 124,206 150,191" marker-end="url(#dg-ah)"/>
    <path class="dg-flow" d="M152,189 C242,150 322,166 364,200" marker-end="url(#dg-ah)"/>
    <path class="dg-flow" d="M406,202 C432,188 452,176 488,160" marker-end="url(#dg-ah)"/>
    <path class="dg-flow alt" d="M374,224 C388,262 402,304 420,362" marker-end="url(#dg-ah2)"/>
    <g class="dg-lbl">
      <text x="160" y="30">Cornea</text>
      <text x="196" y="132">Anterior chamber</text>
      <text x="230" y="225" class="sm">Iris</text>
      <text x="70" y="300">Lens</text>
      <text x="300" y="380">Ciliary body</text>
      <text x="476" y="300">Sclera</text>
      <text x="420" y="232" class="sm">Schlemm’s canal</text>
      <text x="494" y="164" class="sm">Episcleral veins</text>
      <text x="436" y="372" class="sm">Suprachoroidal</text>
      <text x="250" y="186" class="sm muted">aqueous</text>
    </g>
    ${num(318, 330, 1)}${num(352, 176, 2)}${num(408, 290, 3)}
  </svg>`;

  const bacteriaSvg = `<svg viewBox="0 0 600 300" role="img" aria-labelledby="dg-bac-t"><title id="dg-bac-t">A bacterial cell with the antibiotic targets numbered: the cell wall, the 30S and 50S ribosomal subunits, DNA gyrase on the chromosome, the folate pathway and the outer membrane.</title>
    <rect class="dg-wall" x="60" y="44" width="480" height="216" rx="108"/>
    <rect class="dg-memb" x="76" y="60" width="448" height="184" rx="92"/>
    <path class="dg-dna" d="M170,152 c14,-30 30,30 44,0 s30,30 44,0 s30,30 44,0 s30,30 44,0"/>
    <g class="dg-ribo"><circle cx="410" cy="104" r="17"/><ellipse class="small" cx="410" cy="128" rx="14" ry="9"/>
      <circle cx="456" cy="184" r="17"/><ellipse class="small" cx="456" cy="208" rx="14" ry="9"/></g>
    <path class="dg-mrna" d="M380,138 L440,138 M426,218 L486,218"/>
    <g class="dg-lbl">
      <text x="300" y="30" text-anchor="middle">Cell wall (peptidoglycan) · outer membrane in gram-negatives</text>
      <text x="236" y="196" text-anchor="middle" class="sm">Chromosome (supercoiled DNA)</text>
      <text x="150" y="104" class="sm">PABA → DHF → THF</text>
      <text x="150" y="120" class="sm muted">(folate for DNA)</text>
      <text x="432" y="108" class="sm">50S</text>
      <text x="430" y="134" class="sm">30S</text>
      <text x="368" y="236" class="sm muted">ribosomes</text>
    </g>
    ${num(110, 50, 1)}${num(370, 128, 2)}${num(410, 70, 3)}${num(300, 122, 4)}${num(132, 100, 5)}${num(540, 152, 6)}
  </svg>`;

  const irisSvg = `<svg viewBox="0 0 600 300" role="img" aria-labelledby="dg-iris-t"><title id="dg-iris-t">Front view of the iris: the sphincter is a ring around the pupil supplied by the parasympathetic system through M3 receptors; the dilator is radial and supplied by the sympathetic system through alpha-1 receptors.</title>
    <circle class="dg-irisface" cx="150" cy="150" r="122"/>
    <g class="dg-dil">${Array.from({ length: 24 }, (_, i) => { const a = (i * 15 * Math.PI) / 180; return `<line x1="${(150 + 64 * Math.cos(a)).toFixed(1)}" y1="${(150 + 64 * Math.sin(a)).toFixed(1)}" x2="${(150 + 114 * Math.cos(a)).toFixed(1)}" y2="${(150 + 114 * Math.sin(a)).toFixed(1)}"/>`; }).join('')}</g>
    <circle class="dg-sph" cx="150" cy="150" r="49"/>
    <circle class="dg-pupil" cx="150" cy="150" r="38"/>
    <line class="dg-lead" x1="186" y1="116" x2="300" y2="74"/>
    <line class="dg-lead" x1="236" y1="198" x2="300" y2="214"/>
    <g class="dg-lbl">
      <text x="306" y="62"><tspan class="b">Sphincter pupillae</tspan> (ring)</text>
      <text x="306" y="82" class="sm">Parasympathetic · CN III · ACh at M3</text>
      <text x="306" y="100" class="sm">Contracts → <tspan class="b">miosis</tspan></text>
      <text x="306" y="202"><tspan class="b">Dilator pupillae</tspan> (radial)</text>
      <text x="306" y="222" class="sm">Sympathetic · noradrenaline at α1</text>
      <text x="306" y="240" class="sm">Contracts → <tspan class="b">mydriasis</tspan></text>
      <text x="150" y="155" text-anchor="middle" class="sm onpupil">pupil</text>
    </g>
  </svg>`;

  window.DRUG_MOA = [
    {
      id: 'moa-glaucoma', title: 'How it works: glaucoma drugs', icon: '🌊', hue: 200,
      lead: 'Every glaucoma drug either makes less aqueous or lets more out. Point to the spot on the diagram, then name the receptor.',
      html: `<div class="dgrid">${diagram(aqueousSvg, '<b>Aqueous in, aqueous out.</b> Made by the ciliary processes (①), it passes behind the iris, through the pupil and across the anterior chamber. About 80–90% leaves through the trabecular meshwork and Schlemm’s canal (②, pressure-dependent); the rest passes through the ciliary muscle face to the suprachoroidal space (③, uveoscleral).', true)}
        ${legend([
          ['1', 'Make less aqueous', `${ul('<b>Beta blockers</b> (timolol, betaxolol)', '<b>Carbonic anhydrase inhibitors</b> (brinzolamide, dorzolamide; oral acetazolamide)', '<b>Alpha-2 agonists</b> (brimonidine, apraclonidine)')}`, 'down'],
          ['2', 'More trabecular outflow', `${ul('<b>Pilocarpine</b>: ciliary muscle pulls the scleral spur and opens the meshwork', '<b>SLT</b>: remodels the meshwork (not a drug, but the same target)')}`, 'up'],
          ['3', 'More uveoscleral outflow', `${ul('<b>Prostaglandin analogues</b> (latanoprost, bimatoprost, travoprost, tafluprost)', '<b>Brimonidine</b>, as a second action')}`, 'up']])}</div>
        ${h3('At the receptor')}
        <div class="flows">
        ${flow('Beta blockers and alpha-2 agonists', [
          { n: 'Sympathetic drive to the ciliary epithelium', k: 'start' },
          { fork: [
            [{ a: 'β2 receptor (Gs)', stop: ['Timolol', 'Betaxolol (β1, weaker)'] }, 'Adenylyl cyclase switched on'],
            [{ a: 'α2 receptor (Gi)', go: ['Brimonidine', 'Apraclonidine'] }, 'Adenylyl cyclase switched off']] },
          { a: '' }, 'cAMP in the non-pigmented epithelium', { a: 'drives ion transport' },
          { n: 'Aqueous secretion ↓ 20–25%', k: 'end' }], 'Aqueous production halves during sleep, so a beta blocker adds little overnight: dose in the morning.')}
        ${flow('Carbonic anhydrase inhibitors', [
          { n: 'CO₂ + H₂O in the ciliary epithelium', k: 'start' },
          { a: 'carbonic anhydrase II', stop: ['Brinzolamide 1%', 'Dorzolamide 2%', 'Acetazolamide (oral)'] },
          'HCO₃⁻ secreted into the posterior chamber', { a: 'Na⁺ and water follow' },
          { n: 'Aqueous secretion ↓ 15–20% (oral more)', k: 'end' }], 'They are sulfonamides: ask about sulfa allergy. Corneal endothelium also uses carbonic anhydrase, so avoid in grafts and Fuchs’.')}
        ${flow('Prostaglandin analogues', [
          { n: 'Drop at night', k: 'start' }, { a: 'FP receptor on ciliary muscle', go: ['Latanoprost', 'Travoprost', 'Tafluprost', 'Bimatoprost (prostamide)'] },
          'Matrix metalloproteinases ↑', { a: 'digest collagen between muscle bundles' }, 'Wider spaces in the ciliary muscle',
          { n: 'Uveoscleral outflow ↑, IOP ↓ 25–35%', k: 'end' }], 'Same receptors in iris melanocytes and lash follicles: iris darkening, longer lashes, orbital fat loss. They are also inflammatory mediators, so avoid in active uveitis, CMO risk and HSV history.')}
        ${flow('Pilocarpine', [
          { n: 'Drop', k: 'start' }, { a: 'muscarinic M3 receptor', go: ['Pilocarpine 1–4%'] },
          { fork: [
            ['Ciliary muscle contracts', { a: 'pulls the scleral spur' }, { n: 'Trabecular meshwork opens: outflow ↑', k: 'end' }],
            ['Iris sphincter contracts (miosis)', { a: 'iris pulled taut' }, { n: 'Peripheral iris pulled off the angle', k: 'end' }]] }],
          'Above about 40–50 mmHg the sphincter is ischaemic and won’t respond, so in an attack it waits until the pressure is coming down. Brow ache and accommodative spasm; the pull on the retina gives the RD warning.')}
        </div>
        ${h3('How far each class lowers IOP')}
        ${bars([['PGA', 25, 35, '25–35%'], ['Beta blocker', 20, 25, '20–25%'], ['Alpha-2 agonist', 20, 25, '20–25%'], ['Topical CAI', 15, 20, '15–20%'], ['Fixed combination', 30, 35, 'up to 35%']], { max: 40, ticks: [[0, '0'], [10, '10'], [20, '20'], [30, '30'], [40, '40%']], unit: '' })}
        ${box('good', '🗣️ Say it in one sentence', table(['Drug', 'Mechanism'], [
          ['Latanoprost', 'A prostaglandin F2α analogue that activates FP receptors in the ciliary muscle, upregulates MMPs and remodels the extracellular matrix to increase uveoscleral outflow.'],
          ['Timolol', 'A non-selective beta blocker that blocks β2 receptors on the non-pigmented ciliary epithelium, lowering cAMP and aqueous production.'],
          ['Brimonidine', 'A selective alpha-2 agonist that lowers cAMP to reduce aqueous production and, with time, increases uveoscleral outflow.'],
          ['Brinzolamide', 'A carbonic anhydrase inhibitor that blocks CA II in the ciliary epithelium, so less bicarbonate, sodium and water are secreted.'],
          ['Pilocarpine', 'A muscarinic agonist that contracts the ciliary muscle to open the trabecular meshwork and constricts the pupil to pull the iris out of the angle.']]))}
        <p>${jump('drugs', '💊 Doses and contraindications')}</p>`
    },
    {
      id: 'moa-inflam', title: 'How it works: steroids, NSAIDs, anti-allergy', icon: '🔥', hue: 15,
      lead: 'Draw the arachidonic acid cascade and you can answer most anti-inflammatory questions: steroids block the top, NSAIDs block one branch, and the leukotriene branch is why NSAIDs alone can’t treat uveitis.',
      html: `<div class="flows two">
        ${flow('The arachidonic acid cascade', [
          { n: 'Tissue injury or inflammatory stimulus', k: 'start' }, 'Cell membrane phospholipids',
          { a: 'phospholipase A2', stop: ['Corticosteroids (via annexin-1 / lipocortin)'] },
          'Arachidonic acid',
          { fork: [
            [{ a: 'cyclo-oxygenase (COX-1, COX-2)', stop: ['NSAIDs: ketorolac, diclofenac, nepafenac'] }, 'Prostaglandins, thromboxane', { n: 'Vasodilation, pain, miosis, blood–aqueous barrier breakdown → flare, CMO', k: 'end' }],
            [{ a: '5-lipoxygenase' }, 'Leukotrienes', { n: 'White cells drawn in (chemotaxis), vascular leak', k: 'end' }]] }],
          'Steroids also switch off transcription of COX-2, cytokines (IL-1, IL-6, TNF) and adhesion molecules, which is why they are so much stronger than NSAIDs.')}
        ${flow('Why steroids cause their side effects', [
          { n: 'Steroid binds the cytoplasmic glucocorticoid receptor', k: 'start' }, { a: 'complex enters the nucleus' }, 'Gene expression changes in every tissue',
          { fork: [
            ['Trabecular meshwork', { a: 'more matrix, myocilin' }, { n: 'Outflow ↓, IOP ↑ (weeks)', k: 'end' }],
            ['Lens and immunity', { a: '' }, { n: 'PSC cataract; infection and HSV flare; slower healing', k: 'end' }]] }],
          'Armaly: about 5% are high responders (IOP up more than 15 mmHg). Dexamethasone raises IOP most, FML least. Check IOP at every steroid review.')}
        </div>
        ${box('warn', '💡 Exam lines', ul('<b>Why NSAIDs before cataract surgery?</b> Prostaglandins released by surgical trauma constrict the pupil and break the blood–aqueous barrier: NSAIDs keep the pupil up and lower CMO risk.', '<b>Why not NSAIDs alone for AAU?</b> The leukotriene branch stays open, so white cells still pour in.', '<b>Why is prednisolone acetate stronger than phosphate?</b> The acetate is lipophilic and crosses an intact epithelium; the phosphate is water-soluble and needs a defect. Suspension: shake.'))}
        ${h3('Allergy: where each drug acts')}
        <div class="flows two">
        ${flow('Type I hypersensitivity (allergic conjunctivitis, VKC, AKC)', [
          { n: 'Allergen meets IgE on a sensitised mast cell', k: 'start' },
          { a: 'calcium influx triggers degranulation', stop: ['Mast cell stabilisers: cromoglycate 2%, lodoxamide 0.1%', 'Dual-acting: olopatadine, ketotifen'] },
          'Histamine and tryptase released (minutes); prostaglandins and leukotrienes made',
          { a: 'H1 receptors on nerves and vessels', stop: ['Antihistamines: olopatadine, ketotifen, azelastine, levocabastine'] },
          { n: 'Early phase: itch, redness, chemosis, tearing', k: 'end' },
          { a: 'late phase 6–24 h: eosinophils, Th2 cells', stop: ['Steroids (short pulse)', 'Ciclosporin in VKC / AKC'] },
          { n: 'Chronic: papillae, Trantas dots, shield ulcer', k: 'end' }],
          'Stabilisers can’t undo histamine already released: start them 2–4 weeks before the season. Dual-acting drugs work on day one and keep working.')}
        ${flow('Ciclosporin (Ikervis) and tacrolimus', [
          { n: 'Antigen presented to a T cell', k: 'start' }, { a: 'calcium signal' }, 'Calcineurin activated',
          { a: 'dephosphorylates NFAT', stop: ['Ciclosporin + cyclophilin', 'Tacrolimus + FKBP12'] },
          'NFAT enters the nucleus', { a: 'IL-2 gene switched on' },
          { n: 'T cell activation and inflammatory cytokines in the ocular surface', k: 'end' }],
          'Steroid-sparing for dry eye with keratitis, VKC and AKC. Takes weeks to months to work, and stings: a short steroid course often bridges the start.')}
        </div>
        ${box('bad', '⛔ Vasoconstrictors (naphazoline)', '<p>Alpha agonists that shrink conjunctival vessels: symptom relief only, rebound redness with regular use, and mydriasis can close a narrow angle. Don’t recommend them for chronic allergy.</p>')}
        <p>${jump('drugs', '💊 Strengths and doses')}</p>`
    },
    {
      id: 'moa-infect', title: 'How it works: antibiotics and antivirals', icon: '🦠', hue: 140,
      lead: 'Name the target, then say whether it kills (bactericidal) or stalls (bacteriostatic). That one fact answers “why ciprofloxacin and not chloramphenicol for a corneal ulcer?”.',
      html: `<div class="dgrid">${diagram(bacteriaSvg, '<b>Where antibiotics hit a bacterium.</b> Bactericidal drugs (①, ④, ⑥, and aminoglycosides at ②) kill; bacteriostatic ones (chloramphenicol, tetracyclines, macrolides) stop growth and rely on the immune system, which is weak in an avascular cornea.', true)}
        ${legend([
          ['1', 'Cell wall synthesis', '<p>β-lactams bind penicillin-binding proteins and stop peptidoglycan cross-linking: the cell bursts. <b>Cefazolin</b> (fortified), <b>amoxicillin + clavulanate</b> (clavulanate blocks β-lactamase). <b>Vancomycin</b> (gram-positive, MRSA). Bactericidal.</p>', 'kill'],
          ['2', '30S ribosome', '<p><b>Aminoglycosides</b> (tobramycin, gentamicin, framycetin) cause misreading of mRNA: bactericidal, strong on gram-negatives. <b>Tetracyclines</b> (doxycycline) block tRNA docking: bacteriostatic; sub-antimicrobial doses inhibit MMPs and lipase.</p>', 'kill'],
          ['3', '50S ribosome', '<p><b>Chloramphenicol</b> blocks peptidyl transferase; <b>macrolides</b> (azithromycin) block the exit tunnel. Both bacteriostatic. Chloramphenicol misses <i>Pseudomonas</i>.</p>', 'stall'],
          ['4', 'DNA gyrase and topoisomerase IV', '<p><b>Fluoroquinolones</b> (ciprofloxacin, ofloxacin, moxifloxacin) stop DNA being unwound and resealed: the chromosome breaks. Bactericidal, broad, excellent on <i>Pseudomonas</i>. Newer ones hit both enzymes, so better gram-positive cover.</p>', 'kill'],
          ['5', 'Folate synthesis', '<p><b>Sulfonamides</b> (sulfacetamide) mimic PABA; <b>trimethoprim</b> blocks dihydrofolate reductase. Together they block two steps.</p>', 'stall'],
          ['6', 'Outer membrane', '<p><b>Polymyxin B</b> acts like a detergent on the gram-negative outer membrane. Bactericidal. Usually paired with trimethoprim.</p>', 'kill']])}</div>
        <div class="flows two">
        ${flow('Aciclovir and valaciclovir (HSV, VZV)', [
          { n: 'Valaciclovir (oral prodrug)', k: 'start' }, { a: 'first-pass metabolism, gut and liver' }, 'Aciclovir: enters all cells',
          { a: 'only <b>viral</b> thymidine kinase can add the first phosphate', go: ['Selective for infected cells'] },
          'Aciclovir monophosphate', { a: 'host kinases' }, 'Aciclovir triphosphate',
          { a: 'competes with dGTP', stop: ['Viral DNA polymerase', 'Chain termination'] },
          { n: 'Viral DNA replication stops', k: 'end' }],
          'It only stops replicating virus: latent virus in the trigeminal ganglion is untouched, so it can’t cure, only suppress (HEDS II prophylaxis). Cleared by the kidneys: adjust the dose in renal impairment. Ganciclovir gel works the same way.')}
        ${flow('Why the choice of antibiotic matters in keratitis', [
          { n: 'Contact lens wearer, central infiltrate with an epithelial defect', k: 'start' },
          { a: 'assume <i>Pseudomonas</i> until proven otherwise' },
          { fork: [
            [{ a: 'bacteriostatic, misses <i>Pseudomonas</i>', stop: ['Chloramphenicol'] }, { n: 'Wrong drug: avascular cornea can’t clear what is only stalled', k: 'end' }],
            [{ a: 'bactericidal, gram-negative', go: ['Ciprofloxacin 0.3%'] }, { n: 'Load hourly or more, never taper below qid (MIC)', k: 'end' }]] }],
          'Fortified cefazolin (gram-positive) + tobramycin (gram-negative) is two drugs with two targets for broad cover; they are alternated so one doesn’t wash out the other.')}
        </div>
        ${h3('Other anti-infectives')}
        ${table(['Drug', 'Acts on', 'Mechanism'], [
          ['Natamycin', 'Filamentous fungi', 'Polyene: binds ergosterol in the fungal membrane (MUTT: beats voriconazole for <i>Fusarium</i>)'],
          ['Voriconazole', 'Fungi, yeasts', 'Azole: blocks ergosterol synthesis'],
          ['PHMB, chlorhexidine', '<i>Acanthamoeba</i> (cysts and trophozoites)', 'Biguanides: bind membrane phospholipids and break the membrane'],
          ['Propamidine (Brolene)', '<i>Acanthamoeba</i>', 'Diamidine: disrupts membrane and DNA synthesis; adjunct to a biguanide'],
          ['Povidone-iodine', 'Bacteria, viruses, fungi', 'Iodine oxidises proteins and membranes; no resistance. Adenoviral and pre-injection use']])}
        <p>${jump('drugs', '💊 Doses and pregnancy categories')}</p>`
    },
    {
      id: 'moa-autonomic', title: 'How it works: pupil drugs and anaesthetics', icon: '👁️', hue: 300,
      lead: 'Two muscles, two nervous systems. Every dilating, constricting and pupil-test drug either mimics or blocks one of them.',
      html: `<div class="dgrid">${diagram(irisSvg, '<b>The iris muscles.</b> The ciliary muscle behind the iris also runs on M3: block it and you lose accommodation (cycloplegia).', true)}
        ${legend([
          ['P', 'Parasympathetic (M3: sphincter and ciliary muscle)', `${ul('<b>Agonist</b> pilocarpine → miosis, accommodative spasm', '<b>Antagonists</b> (antimuscarinics) → mydriasis <i>and</i> cycloplegia: atropine, homatropine, cyclopentolate, tropicamide')}`, 'down'],
          ['S', 'Sympathetic (α1: dilator and Müller’s muscle)', `${ul('<b>Agonist</b> phenylephrine → mydriasis without cycloplegia, lifts the lid', '<b>Apraclonidine</b> is weakly α1: only a supersensitive (Horner’s) dilator responds', '<b>Cocaine</b> blocks noradrenaline reuptake; <b>hydroxyamphetamine</b> releases it from the third-order neuron')}`, 'up']])}</div>
        ${h3('How long the cycloplegics last')}
        ${bars([['Tropicamide 1%', 4, 6, '4–6 h'], ['Cyclopentolate 1%', 6, 24, '6–24 h'], ['Homatropine 2%', 24, 72, '1–3 days'], ['Atropine 1%', 168, 336, '7–14 days']], { max: 400, log: true, ticks: [[1, '1 h'], [6, '6 h'], [24, '1 d'], [72, '3 d'], [168, '1 wk'], [336, '2 wk']] })}
        <div class="flows two">
        ${flow('Why cycloplegics in anterior uveitis', [
          { n: 'Antimuscarinic drop (atropine, homatropine, cyclopentolate)', k: 'start' },
          { fork: [
            [{ a: 'ciliary muscle relaxed' }, { n: 'Ciliary spasm pain eases', k: 'end' }],
            [{ a: 'pupil dilated, kept mobile' }, { n: 'Posterior synechiae prevented or broken', k: 'end' }],
            [{ a: 'vessels in ciliary body stabilised' }, { n: 'Less flare (blood–aqueous barrier)', k: 'end' }]] }],
          'Cyclopentolate is weaker in an inflamed eye; atropine for severe cases. Atropine is toxic to small children if swallowed.')}
        ${flow('How dilating drops can close an angle', [
          { n: 'Narrow angle + antimuscarinic, antihistamine, antidepressant or decongestant', k: 'start' },
          { a: 'pupil stops mid-dilated' }, 'Iris–lens contact is greatest at a mid-dilated pupil',
          { a: 'aqueous trapped behind the iris' }, 'Pupil block: iris bowed forward (bombé)',
          { n: 'Peripheral iris closes the angle → acute angle closure', k: 'end' }],
          'Topiramate and sulfa drugs close the angle another way (ciliary effusion pushes the lens–iris forward), often in both eyes, and pilocarpine makes it worse.')}
        </div>
        ${h3('Pupil tests as a decision tree')}
        ${flow('', [
          { n: 'Anisocoria: which pupil is abnormal?', k: 'start' },
          { fork: [
            [{ a: 'difference bigger in the dark' }, 'Small pupil is abnormal (dilator weak)', { a: '', go: ['Apraclonidine 0.5% (or cocaine 10%)'] },
              { n: 'Small pupil dilates, anisocoria reverses (cocaine: fails to dilate) → <b>Horner’s</b>', k: 'end' },
              { a: '', go: ['Hydroxyamphetamine 1%, another day'] }, { n: 'No dilation → postganglionic (third-order) lesion', k: 'end' }],
            [{ a: 'difference bigger in the light' }, 'Big pupil is abnormal (sphincter weak)', { a: '', go: ['Pilocarpine 0.125%'] },
              { n: 'Constricts (supersensitive) → <b>Adie’s tonic pupil</b>', k: 'end' },
              { a: 'no response', go: ['Pilocarpine 1%'] }, { n: 'Constricts → CN III palsy · stays big → pharmacological block', k: 'end' }]] }],
          'A painful Horner’s or a pupil-involving CN III palsy is same-day referral: test after you have sent them, not instead.')}
        ${box('warn', '💉 Local anaesthetics', '<p>Proxymetacaine 0.5%, oxybuprocaine 0.4% and tetracaine 0.5–1% block voltage-gated sodium channels in the corneal nerves, so no action potential reaches the brain. In-office only: never supply them, because repeated use poisons the epithelium and stops healing (anaesthetic abuse keratitis). A drop of anaesthetic that relieves the pain also tells you the pain is from the surface.</p>')}
        <p>${jump('drugs', '💊 Strengths and cautions')}</p>`
    }
  ];

  // Shared with js/data/notes-diagrams.js, which draws more diagrams in the same style.
  window.NOTES_KIT = { ul, h3, box, table, jump, diagram, legend, flow };

  // Slot the mechanism sections in straight after the drug reference.
  const N = window.STUDY_NOTES || [];
  const at = N.findIndex((s) => s.id === 'drugs');
  if (at >= 0) {
    N[at].html += `<p class="nmoa">Mechanism diagrams and flowcharts: ${window.DRUG_MOA.map((s) => jump(s.id, `${s.icon} ${s.title.replace('How it works: ', '')}`)).join(' ')}</p>`;
    N.splice(at + 1, 0, ...window.DRUG_MOA);
  } else N.push(...window.DRUG_MOA);
})();
