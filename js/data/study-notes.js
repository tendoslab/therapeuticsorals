// Study notes tab: a laid-out summary of the Therapeutics Orals Study Sheet (Nov 2026, @em), and its Part 1
// (anterior eye and glaucoma) and Part 2 (post-op, drugs, neuro and posterior) PDFs, with their images.
// Images are built into img/notes/ by tools/study-notes-images.py. Each section: id, title, icon, hue, lead, html.
(() => {
  const fig = (name, caption, wide) => `<figure class="nfig${wide ? ' wide' : ''}"><button type="button" data-act="zoom" data-v="img/notes/${name}.jpg" aria-label="Enlarge: ${caption.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;')}"><img src="img/notes/${name}.jpg" alt="${caption.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;')}" loading="lazy"></button><figcaption>${caption}</figcaption></figure>`;
  const figs = (...items) => `<div class="nfigs">${items.join('')}</div>`;
  const table = (head, rows) => `<div class="tablewrap"><table class="t ntable"><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr>${rows.map((r) => `<tr>${r.map((d, i) => (i ? `<td>${d}</td>` : `<td><b>${d}</b></td>`)).join('')}</tr>`).join('')}</table></div>`;
  const box = (kind, title, html) => `<div class="nbox ${kind}"><p class="label">${title}</p>${html}</div>`;
  const ul = (...li) => `<ul>${li.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  const ol = (...li) => `<ol>${li.map((x) => `<li>${x}</li>`).join('')}</ol>`;
  const h3 = (t) => `<h3>${t}</h3>`;

  window.STUDY_NOTES = [
    {
      id: 'orals', title: 'How the orals run', icon: '🎙️', hue: 225,
      lead: 'Two cases in about 20 minutes: usually one anterior and one glaucoma/posterior or neuro, one examiner per case. Many start from your own case report.',
      html: `<div class="ncols">
        <div>${h3('The question flow (nearly always the same)')}${ol(
          '<b>Describe the photo</b> (often blurry). Start broad (“deposits on the endothelium”), then name it (“likely KPs”). Work out to in: lids, conjunctiva, cornea, AC, iris/pupil, lens.',
          '<b>History</b>, with a reason for each question. Red eye screen: pain, photophobia, discharge, itch, vision, CL wear, trauma, vegetative matter, previous episodes, systemic review.',
          '<b>Differentials</b>: at least 3, always including the sight-threatening ones.',
          '<b>Work-up</b>: VA first, pupils, motility, IOP, slit lamp with NaFl, gonio if appropriate, dilate.',
          '<b>Diagnosis</b>, then management with drug name, concentration, dose, frequency and duration.',
          '<b>Mechanism, contraindications, precautions and side effects</b> of every drug you name.',
          '<b>Review</b> period and what you expect. Worse? When do you refer, and to whom?',
          '<b>Prognosis</b>, with a trial and a number if you can.')}</div>
        <div>${box('bad', '❌ What fails candidates', ul(
          'Not knowing the contraindications of a drug you just prescribed',
          'Getting AAC first aid wrong, or gonioscopy through an oedematous cornea',
          'A PGA in active inflammation, or with an HSK or uveitis history',
          'A steroid on an open epithelial defect or active HSV epithelial keratitis',
          'Not dilating a herpes or uveitis patient',
          'Tapering an antibiotic below qid (below the MIC)',
          'Missing the ocular emergencies in the differentials',
          'Not knowing glaucoma drugs in pregnancy',
          'Needing to be walked through too many answers'))}
        ${box('good', '✅ Exam technique', ul(
          '“What else?” means there is more, not that you’re wrong.',
          'Commit to one drug or one lens. Hedging draws more questions.',
          '“Can we come back to that” and “I’m not sure” are fine. Don’t guess numbers you can’t source.',
          'Secondary glaucomas: state the RANZCO position first (refer), then let them prompt what the ophthalmologist would do.'))}</div></div>`
    },
    {
      id: 'fixes', title: 'Corrections to your notes', icon: '🩹', hue: 0,
      lead: 'Doses and facts the notes get wrong or disagree on. Each one is the kind of thing examiners drill.',
      html: `${table(['Topic', 'Notes say', 'Say this instead'], [
          ['AAC first aid', 'Brimonidine 0.5%', 'Brimonidine is 0.15% or 0.2%. The 0.5% alpha agonist is apraclonidine (Iopidine).'],
          ['Prednefrin Forte', '0.1%', '1% prednisolone acetate + phenylephrine 0.12%, suspension, shake.'],
          ['HZO oral antiviral', 'Aciclovir 400 mg 5×/day; “10 days”', '800 mg 5×/day for 7 days, within 72 h of rash. 400 mg bd is HSV prophylaxis. Valaciclovir 1 g tds × 7 days is the safest to quote.'],
          ['HZO latency', 'Dorsal root ganglion', 'Trigeminal (Gasserian) ganglion, same as ocular HSV. HZO usually once; HSV recurs.'],
          ['LiGHT', '“Better control in 74%”', '74% of SLT-first eyes drop-free at 3 years (~70% at 6).'],
          ['OHTS vs EMGT', '“OHTS: 25% cut, 10% per mmHg”', 'Those are EMGT. OHTS: 5-yr conversion 9.5% → 4.4%, target 20% and ≤24 mmHg.'],
          ['Glaucoma referral', 'Within 3 months', 'Within <b>4 months</b> of starting treatment (OBA, PBS).'],
          ['Steroids in HSV', '“Absolutely contraindicated”', 'Only in active epithelial disease. Stromal HSK: steroid + antiviral cover (HEDS I).'],
          ['Latanoprost', 'Once in the morning', 'At night.'],
          ['Topical CAIs', 'Brinzolamide 2%, dorzolamide 3%', 'Brinzolamide 1% (Azopt), dorzolamide 2% (Trusopt).'],
          ['Tafluprost', '0.015%', '0.0015% (Saflutan).'],
          ['Cromoglycate', '0.2%', '2%.'],
          ['Diamox in AAC', '250 mg bd', '500 mg stat, via GP/ophthalmologist: optometrists can’t prescribe it.'],
          ['Pregnancy categories', 'Cipro C; PGA C', 'Ciprofloxacin B3; latanoprost B3 (still avoid).'],
          ['Chlorsig', '0.1%', 'Drops 0.5%, ointment 1%.'],
          ['Chlamydia', 'Azithromycin 1 g first choice', 'Doxycycline 100 mg bd × 7 days first line; azithromycin 1 g in pregnancy or poor adherence.'],
          ['Post-herpetic neuralgia', 'Pain for 1 month', 'Pain persisting over 3 months (90 days) after the rash.'],
          ['Shingles vaccine', 'Zostavax figures', 'Shingrix on the NIP since Nov 2023: free 65+, First Nations 50+, some immunocompromised 18+.'],
          ['Flarex / FML', 'PBS-listed', 'Flarex withdrawn June 2024; FML off the PBS Aug 2024 (private script). Say FML, or Pred Forte / Maxidex for penetration.'],
          ['Fungal keratitis', 'Refer within 72 h', 'Refer the same day.'],
          ['SCUT', 'Harm in non-Nocardia ulcers', 'The reverse: steroids did worse in Nocardia.'],
          ['Diabetic CN III', 'Pupil-involving', 'Microvascular CN III is usually pupil-sparing (~80%). Dilated pupil = compression (aneurysm).'],
          ['Oral medicines', 'Optometrists can prescribe', 'Topical only (oral prescribing consulted on, not approved as of June 2026). Orals via GP/ophthalmologist.'],
          ['PBS co-payment', '$31.60 / $41', '$25 general, $7.70 concession (from 1 Jan 2026).'],
          ['HSV prophylaxis', '400 mg bd for 6 months', '12 months (HEDS): recurrence roughly halved.'],
          ['Ranitidine (steroid cover)', 'Ranitidine', 'Withdrawn 2019–20. Omeprazole 20 mg daily.'],
          ['Chemical injury', 'Irrigate 10–20 min', 'Go by pH: usually 20–30 min, until pH 7.0–7.5.']
        ])}
        ${box('warn', '⚖️ Figures that differ between docs: pick one you can source', ul(
          'ZAP: 47%, 50% or 69% relative risk reduction (6 vs 14 years). Absolute benefit is small either way.',
          'PDS → pigmentary glaucoma: about 10% at 5 years and 15% at 15 years (Siddiqui 2003). “37.5% from OHTS” is a mix-up.',
          'Steroid IOP rise: “usually within 2–6 weeks, can be any time”.',
          'MK loading: q15min for 6 h, then q30min for the rest of day 1.',
          'AAU loading: “q15min for the first 1–2 hours”.',
          'Field reliability: lead with false positives over 15%.',
          'Acetazolamide and sulfonamide allergy: call it a contraindication.'))}`
    },
    {
      id: 'glaucoma', title: 'Glaucoma: POAG, OHT, NTG', icon: '🎯', hue: 225,
      lead: 'Almost every session has one: describe the disc and field, confirm structure–function agreement, pick a drug, defend the target with a trial, give contraindications, set a review and refer within 4 months.',
      html: `<div class="ncols">
        <div>${h3('History and work-up')}
        <p><b>Typical opener:</b> 55-year-old man, first eye test, mother or sister with glaucoma, IOP mid-20s.</p>
        ${ul('<b>Ask:</b> family history (siblings carry more risk than parents), steroids incl. inhalers, migraine, Raynaud’s, sleep apnoea, BP and BP tablets (nocturnal hypotension), diabetes, myopia, trauma, ethnicity, asthma/COPD and heart rate (before a beta blocker), pregnancy.',
          '<b>Work-up (NHMRC):</b> VA, pupils, IOP with time, CCT, gonioscopy (must be open to call POAG), slit lamp for secondary causes, dilated disc and RNFL, OCT RNFL + GCL, 24-2 field (+10-2 for central defects, NTG, advanced). Two reliable baseline fields early.')}
        ${h3('The disc: 5 Rs (Fingeret)')}${ol('<b>R</b>ing: scleral ring for disc size', '<b>R</b>im: ISNT, notching, colour', '<b>R</b>NFL defects (wedge, red-free)', '<b>R</b>egion of beta-PPA', '<b>R</b>etinal (disc) haemorrhages: inferotemporal, last 6–8 weeks, mark progression')}
        <p>Also CD asymmetry over 0.2, bayonetting, baring of vessels, laminar dot sign. <b>Pallor out of proportion to cupping is not glaucoma:</b> think compressive or neuro.</p></div>
        <div>${figs(fig('disc-poag-session', 'Study session (62-year-old, IOP 26/24): CDR 0.8, inferotemporal notching, PPA, visible lamina pores; matched an inferotemporal RNFL wedge and a superior field defect.', true))}
        ${h3('Fields')}
        ${ul('<b>Reliability first:</b> fixation losses, false positives over 15%, false negatives. Clover-leaf = fatigue.',
          'Then GHT, MD (overall loss), PSD (localised loss), VFI, pattern deviation. Glaucomatous defects respect the horizontal midline.',
          '<b>Grade (Hodapp):</b> early MD better than −6 dB; moderate −6 to −12; advanced worse than −12 or any point within 10°.',
          '<b>Early defect:</b> 3+ adjacent points p&lt;5% with one p&lt;1%, or GHT outside limits, or PSD p&lt;5%.',
          '<b>Progression:</b> deepening (first and most common), widening, then new defects. Event (GPA) vs trend (dB/yr) analysis.')}</div></div>
        ${h3('Target IOP and the trial to quote')}
        ${table(['Situation', 'Target', 'Evidence'], [
          ['High-risk OHT', '20% reduction and ≤24 mmHg', 'OHTS'],
          ['Early POAG', '25% (further 20% if progressing)', 'NHMRC; EMGT: each 1 mmHg ≈ 10% less risk'],
          ['Moderate POAG', '30%', 'NHMRC; LiGHT (30% or under 18)'],
          ['Advanced', 'Under 18 at every visit, ideally low teens', 'AGIS'],
          ['NTG', '30% from baseline', 'CNTGS']])}
        <div class="ncols">
        <div>${h3('Treatment ladder')}
        ${ul('<b>PGA first</b>: most effective, once daily (at night), few systemic effects. Review at 4–6 weeks.',
          'Target missed: check compliance and technique → switch or add → fixed combination.',
          '<b>SLT</b> is a first-line alternative (LiGHT: 74% drop-free at 3 years): adherence, cosmesis, pregnancy, side effects.')}
        ${h3('Pick the drug for the patient')}
        ${ul('Young, active or athletic: avoid timolol (caps heart rate).', 'Asthma/COPD: no timolol; betaxolol only with caution.', 'Already on an oral beta blocker: topical timolol adds little.', 'HSK, uveitis or CMO risk: no PGA, use timolol.', 'One eye or cosmetic worry: warn about iris colour and lashes; offer SLT.', 'Dry eye: preservative-free (Lumigan PF, tafluprost, Cosopt PF).', 'Pregnant: SLT first.')}</div>
        <div>${h3('Referral and collaborative care (RANZCO, OBA)')}
        ${ul('<b>Refer within 4 months</b> of starting treatment; sooner if not stabilising, needs laser/surgery, or side effects. Review every 4–6 weeks at first.',
          '<b>Very high risk (refer):</b> IOP over 27, over 24 with average CCT, over 21 with thin CCT, multiple risk factors, secondary causes with raised IOP.',
          '<b>Ophthalmologist manages:</b> secondary glaucoma (except PXF/PDS), trauma, monocular, advanced or unstable, IOP over 35.',
          'Suspects and early stable: at least 6-monthly, ophthalmologist every 2 years.',
          'Optometrists can’t prescribe acetazolamide, even in angle closure.')}
        ${h3('OHT and NTG')}
        ${ul('<b>OHTS risk:</b> each decade +22%; each 1 mmHg +10%; each 0.1 vertical CD +32%; each 40 µm thinner CCT +71%. Disc haemorrhage: 4–6× conversion.',
          '<b>NTG</b> is a diagnosis of exclusion: thin CCT, missed peaks (phasing), burnt-out PDS, past steroids, trauma, uveitis, neuro causes (pallor, vertical midline, RAPD, poor colour vision → MRI).',
          'NTG risk (CNTGS): female, migraine, disc haemorrhage; also Raynaud’s, sleep apnoea, nocturnal hypotension. Brimonidine attractive (LoGTS); no timolol at night.')}</div></div>`
    },
    {
      id: 'secondary', title: 'Secondary glaucomas', icon: '🧩', hue: 250,
      lead: 'PXF and PDS are the favourites, because they’re the RANZCO exceptions you may manage yourself. For the rest: say you’d refer first.',
      html: `${figs(fig('secondary-glaucoma-flowchart', 'Chair-side flowchart from the study call: cornea → iris → gonioscopy → the secondary cause.', true), fig('pxf-pds-schematic', 'PXF vs PDS signs (schematic): PXF sits at the pupil margin; PDS spreads pigment evenly.', true))}
        ${table(['', 'Pseudoexfoliation (PXF)', 'Pigment dispersion (PDS)'], [
          ['Patient', 'Older (60–70+), female, Nordic, Greek; systemic vascular disease, hearing loss', 'Young (20–45) myopic man'],
          ['Mechanism', 'Fibrillar material (LOXL1) clogs the TM', 'Concave mid-peripheral iris rubs on zonules (reverse pupil block)'],
          ['Lens / iris', 'Bull’s-eye on the lens (dilate); transillumination at the pupil margin, poor dilation', 'Pigment on lens/zonules; spoke-like mid-peripheral TIDs'],
          ['Cornea', 'Flakes on the endothelium', 'Krukenberg spindle (vertical, central)'],
          ['Gonio', 'Patchy pigment; Sampaolesi’s line', 'Dense even TM band, wide angle'],
          ['IOP', 'Labile, asymmetric, spikes', 'Spikes after exercise or dilation'],
          ['Course', '25–50% → PXG; fastest progression (EMGT −3.13 dB/yr); zonular weakness at cataract surgery', '~10% at 5 years; burns out after 40s (don’t mistake for NTG)']])}
        ${figs(fig('pxf-pupil', 'PXF: flaky white material at the pupil margin.'), fig('pxf-gonio', 'PXF gonio: patchy pigment and a wavy Sampaolesi line (arrow) in front of Schwalbe’s line.'), fig('pds-gonio', 'PDS gonio: dense, even pigment band across the trabecular meshwork.'), fig('krukenberg', 'PDS: vertical Krukenberg spindle of pigment on the endothelium.'))}
        <div class="ncols"><div>
        ${h3('Managing PXF and PDS')}
        ${ul('Treat once IOP is 24+ and/or fluctuates more than 4 mmHg; otherwise 6-monthly as a suspect.',
          '<b>PXG:</b> PGA first, SLT works well, higher target and closer reviews, refer early for cataract.',
          '<b>PDS:</b> gonio, DFE (RD risk), IOP after exercise. PGA or low-energy SLT. Avoid timolol in a young active man. Pilocarpine stops iris rubbing but adds myopic blur and RD risk.')}
        ${h3('Angle recession')}
        ${ul('Blunt trauma, sometimes decades ago; always in the differential for unilateral glaucoma.', 'Gonio: irregularly widened ciliary body band, torn iris processes. Over 180° = higher risk; ~6–9% develop glaucoma.', 'No pilocarpine (cuts uveoscleral outflow), SLT doesn’t work, PGA fine once quiet. Refer; check the fellow eye.')}
        </div><div>
        ${h3('Inflammatory')}
        ${ul('<b>Posner-Schlossman:</b> young adult, unilateral IOP spikes 40–60, haloes, few fine KPs, white-ish eye. Pred Forte + timolol; no PGA or pilocarpine.',
          '<b>Fuchs heterochromic iridocyclitis:</b> stellate KPs all over, no synechiae, heterochromia, early PSC. Steroids don’t help much.',
          '<b>Uveitic:</b> treat the inflammation; lower IOP without PGA or pilocarpine.')}
        ${h3('Steroid-induced')}
        ${ul('Onset days to 6 weeks. Dexamethasone and prednisolone acetate raise IOP most; FML and loteprednol least.', 'High risk: POAG, family history, children under 10, high myopia, diabetes, connective tissue disease.', 'Taper or soften the steroid, add timolol or brimonidine, follow as a suspect for life.')}
        ${h3('Neovascular and lens-induced')}
        ${ul('<b>NVG:</b> rubeosis → angle NV → closure; IOP 40–80. Diabetes, CRVO (“90-day glaucoma”), ocular ischaemia. Urgent referral (anti-VEGF, PRP).', '<b>Phacomorphic</b> (swollen lens, closed angle) vs <b>phacolytic</b> (lens protein clogs an open angle).', 'LPI doesn’t help ICE syndrome, Axenfeld–Rieger or topiramate effusion (cycloplegic, no miotic).')}
        </div></div>`
    },
    {
      id: 'aac', title: 'Acute angle closure', icon: '🚨', hue: 5,
      lead: 'The single most examined case. Know the first-aid sequence cold, the contraindications of every drug in it, and why pilocarpine waits.',
      html: `<div class="ncols"><div>
        <p><b>Picture:</b> unilateral red eye, mid-dilated fixed pupil, steamy cornea, shallow AC. Often a 55-year-old Asian woman, hyperope, after time in the dark or dilation. Pain, headache, haloes, nausea and vomiting. IOP 40–80. Call it angle <i>closure</i>, not glaucoma, unless the nerve is damaged.</p>
        ${figs(fig('aac-session', 'Study session: 55-year-old Nepalese woman, RE 50 mmHg. Red eye, mid-dilated pupil, hazy cornea.', true))}
        ${ul('<b>Mechanisms:</b> pupil block (most common), plateau iris, phacomorphic, drugs (topiramate and sulfa drugs: bilateral via ciliary effusion; anticholinergics, antidepressants, antihistamines, decongestants, dilating drops), neovascular. <b>Bilateral attack: think drugs.</b>',
          '<b>No gonioscopy through an oedematous cornea.</b> Check the fellow eye’s angle or use AS-OCT; gonio the affected eye once clear.')}
        </div><div>
        ${box('bad', '🚑 First aid (OBA guideline)', ol(
          '<b>Call the ophthalmologist / eye hospital now.</b> If emergency referral isn’t possible: acetazolamide 500 mg via ophthalmologist, GP or pharmacist (CI: sulfa allergy, renal/hepatic disease, acidosis).',
          '<b>Timolol 0.5%</b>, one drop. Wait 2 min.',
          '<b>Apraclonidine 0.5%</b> (or brimonidine 0.2%). Wait 2 min.',
          '<b>Brinzolamide 1%</b>.',
          'Red, inflamed eye: <b>Pred Forte 1%</b>, then 3 more in the first hour, then hourly.',
          '<b>Pilocarpine 2%</b> only once IOP is below ~40 and with ophthalmologist input (ischaemic sphincter; can worsen block). Exception: closure from your own dilation.',
          'Supine, paracetamol. No cycloplegics, no PGA. Recheck IOP every 15–30 min.'))}
        </div></div>
        ${figs(fig('aac-first-aid', 'First aid sequence: lower the pressure first, then get a laser iridotomy.', true), fig('previous-attack', 'Signs of a previous attack: sectoral iris atrophy (top left), glaukomflecken (bottom left), dilated iris vessels (top right), closed angle on gonio (bottom right).', true))}
        ${table(['Condition', 'Pupil', 'IOP', 'Angle', 'Other'], [
          ['Acute angle closure', 'Mid-dilated, fixed', '40–80', 'Closed', 'Corneal oedema, glaukomflecken, nausea'],
          ['AAU', 'Miotic, synechiae', 'Low or normal', 'Open', 'Cells, KPs'],
          ['Posner-Schlossman', 'Normal', '40–60', 'Open', 'White-ish eye, few fine KPs, young adult'],
          ['Neovascular', 'Ectropion uveae', 'High', 'Closed by NV', 'Rubeosis, CRVO/diabetes'],
          ['Phacomorphic', 'Mid-dilated', 'High', 'Closed', 'Swollen cataract']])}
        <div class="ncols"><div>${h3('Contraindications they ask')}
        ${ul('<b>Timolol:</b> asthma, COPD, bradycardia, heart block, heart failure.', '<b>Apraclonidine/brimonidine:</b> MAOIs, children.', '<b>Brinzolamide/acetazolamide:</b> sulfa allergy, renal disease, corneal graft.', '<b>Pilocarpine:</b> uveitis, neovascular, lens-induced, RD risk.')}</div>
        <div>${h3('After the attack')}
        ${ul('<b>Broken:</b> IOP normal, pupil constricted, angle open. Not broken if IOP stays above the fellow eye.', '<b>LPI in both eyes</b> within 24–48 h (fellow eye 40–80% risk over 5–10 years). Plateau iris: iridoplasty or lens extraction.', '<b>EAGLE:</b> clear lens extraction beat LPI in PAC with high IOP and PACG. <b>ZAP:</b> LPI in PACS roughly halves progression, but absolute risk is low.', 'Rural: first aid, keep in contact, arrange transfer.')}</div></div>`
    },
    {
      id: 'uveitis', title: 'Anterior uveitis and hyphema', icon: '🔥', hue: 20,
      lead: 'Examiners want: dilate everyone, Pred Forte with a loading dose, a cycloplegic, no PGA, and the referral triggers.',
      html: `<div class="ncols"><div>
        <p><b>Typical:</b> 25-year-old man, 3 days of a red, painful, photophobic eye, wearing sunglasses; OTC Chlorsig hasn’t helped. Ask about morning back pain, joints, rashes, ulcers, bowel and urinary symptoms, previous episodes.</p>
        ${figs(fig('kps', 'Anterior uveitis: keratic precipitates (clumps of white cells) on the back of the cornea, with cells in the slit beam.'))}
        <p><b>SUN cells</b> (1×1 mm beam): 0 = &lt;1; 0.5+ = 1–5; 1+ = 6–15; 2+ = 16–25; 3+ = 26–50; 4+ = &gt;50. IOP often low; high suggests herpetic, Posner-Schlossman, trabeculitis or steroid response.</p>
        </div><div>
        ${h3('Management')}
        ${ol('<b>Prednefrin Forte 1%</b> (shake): q15min for 1–2 h if severe, then q1h until a 2-step SUN improvement, then qid until 0 cells, then taper over weeks. By grade: 1+ q4h; 2–3+ q2h; 4+ q1h. Acetate = lipophilic, crosses intact epithelium.',
          '<b>Atropine 1% bd</b> (up to qid): pain, blood–aqueous barrier, breaks synechiae. Avoid narrow angles.',
          'Synechiae won’t break: add phenylephrine 2.5% → 10% (no cardiac risk) → soaked pledget.',
          'IOP up: timolol or brimonidine. <b>Never a PGA.</b> Steroid response = rise over 5 mmHg, usually within 2–6 weeks.',
          'HSV history: oral aciclovir 400 mg bd cover via GP.',
          'Review at 24 h, then every few days. Relapse in 39% within 1.5 years.')}</div></div>
        ${h3('Review of systems')}
        <p>Run through it head to toe on every uveitis patient. A positive answer steers the GP work-up and the referral.</p>
        ${table(['System', 'Ask about', 'Points to'], [
          ['Musculoskeletal', 'Lower back pain and stiffness worse in the morning, better with exercise; swollen joints; heel pain', 'Ankylosing spondylitis, reactive or psoriatic arthritis (HLA-B27); JIA in children'],
          ['Gastrointestinal', 'Diarrhoea, blood or mucus in stool, abdominal pain, weight loss', 'Inflammatory bowel disease (Crohn’s, UC); reactive arthritis after gut infection'],
          ['Genitourinary', 'Discharge, pain passing urine, genital ulcers, new sexual partners', 'Reactive arthritis, syphilis, Behçet’s'],
          ['Skin and mouth', 'Psoriasis or nail pitting; red tender shin lumps; rash on palms and soles; recurrent mouth ulcers; cold sores or shingles', 'Psoriatic arthritis; sarcoid (erythema nodosum); syphilis; Behçet’s; HSV or VZV'],
          ['Respiratory', 'Cough, shortness of breath, coughing blood', 'Sarcoid, TB'],
          ['Constitutional', 'Fever, night sweats, weight loss, fatigue; TB contact, travel or time in a high-risk country', 'TB, lymphoma or other masquerade, TINU'],
          ['Neurological', 'Numbness, weakness, double vision, past optic neuritis; headache, neck stiffness', 'MS (intermediate uveitis), VKH, CNS lymphoma'],
          ['Ears, hair and skin colour', 'Ringing or hearing loss, white patches of skin or lashes, hair loss', 'VKH'],
          ['Renal', 'Flank pain, kidney problems, recent antibiotics or NSAIDs (younger patients)', 'TINU'],
          ['Medications', 'Rifabutin, bisphosphonates, cidofovir, immune checkpoint inhibitors, recent oral moxifloxacin', 'Drug-induced uveitis'],
          ['Immune status', 'HIV risk, immunosuppressants, recent eye surgery or injection', 'CMV, toxoplasma, endophthalmitis'],
        ])}
        <div class="ncols"><div>${box('warn', '↗️ Refer to ophthalmology', `<p>Posterior or intermediate involvement, large or fixed hypopyon, not responding, granulomatous, bilateral, recurrent or chronic, post-surgical, pregnancy, diagnostic doubt.</p><p><b>GP work-up</b> if recurrent, bilateral, granulomatous or systemic symptoms: HLA-B27, ACE + CXR (sarcoid), IGRA (TB), syphilis serology, ANA (JIA), ESR, CRP. First mild episode: no labs.</p>`)}</div>
        <div>${h3('Clues to the cause')}${ul('<b>Hypopyon:</b> HLA-B27, Behçet’s, endophthalmitis, rifabutin, tumour.', '<b>Mutton-fat KPs / nodules:</b> sarcoid, TB, syphilis, VKH.', '<b>Raised IOP:</b> herpetic, Posner-Schlossman, Fuchs, lens-induced.', '<b>White quiet eye:</b> JIA (band keratopathy), Fuchs, masquerade.')}</div></div>
        ${h3('Hyphema and blunt trauma')}
        ${figs(fig('hyphema-grades', 'Hyphema grades: the more of the chamber filled, the higher the grade and the risk.', true), fig('hyphema', 'Small hyphema: blood settled at the bottom of the AC.'))}
        ${ul('<b>Grade:</b> I &lt;1/3; II 1/3–1/2; III &gt;1/2; IV total (“8-ball”, worst).',
          'Front to back after blunt trauma: abrasion, hyphema, traumatic uveitis, sphincter tears, iridodialysis, angle recession, Vossius ring, cataract, subluxed lens, vitreous haemorrhage, commotio, choroidal rupture, retinal dialysis, orbital floor fracture.',
          '<b>Manage:</b> head up 45°, shield, rest; atropine 1% bd; Pred Forte if cells; paracetamol (no aspirin/ibuprofen); ask about blood thinners and sickle cell (avoid CAIs). Review daily: rebleed days 2–5 is worse.',
          'No gonioscopy for about 4 weeks. Then look for recession; review yearly for life.')}`
    },
    {
      id: 'keratitis', title: 'Keratitis and contact lens complications', icon: '🔬', hue: 195,
      lead: 'One tutor estimated 75% of students get an MK question: why this antibiotic, dosing, why not taper, when to refer for fortified therapy, and what the hospital does.',
      html: `${table(['', 'Microbial keratitis', 'CLPU / sterile / marginal'], [
          ['Size', 'Usually over 1–2 mm, irregular', 'Under 1–2 mm, round'],
          ['Location', 'Central or paracentral', 'Peripheral; marginal has a clear zone'],
          ['Epithelium', 'Full-thickness defect over the infiltrate', 'Small or no defect'],
          ['AC', 'Cells, flare, possible hypopyon', 'Quiet or minimal'],
          ['Pain, discharge', 'Severe, worsening; mucopurulent', 'Mild–moderate; watery'],
          ['Lens out', 'No relief', 'Improves']])}
        <p class="muted">If in doubt, treat as MK. PEDAL: Pain, Epithelial defect, Discharge, AC reaction, Location.</p>
        ${figs(fig('cl-ulcer-session', 'Study session: 24-year-old daily CL wearer, inferior infiltrate with pannus; the base stains, so it’s an ulcer with infiltration.'), fig('bacterial-keratitis', 'Bacterial keratitis: dense white infiltrate with an epithelial defect that stains, in a red, sore eye.'))}
        <div class="ncols"><div>
        ${h3('Bacterial MK')}
        ${ul('<b>Ciprofloxacin 0.3%:</b> q15min for 6 h, q30min rest of day 1 (overnight too), q1h day 2, then q4h (minimum qid) until 3 days after re-epithelialisation. <b>Never below qid</b> (MIC, resistance).',
          'Cipro over ofloxacin: less perforation risk; strong against gram-negatives (Pseudomonas, the commonest in CL wearers).',
          'Add atropine 1% for AC reaction or pain, analgesia, stop CLs, <b>never patch</b>. Review at 24 h: infiltrate not growing.',
          '<b>SCUT:</b> steroid only after re-epithelialisation and with antibiotic cover; helps central ulcers with poor VA.')}
        </div><div>
        ${box('bad', '↗️ Refer for fortified therapy', `<p>Central or near the axis, over 2 mm, deeper than 1/3, over 60, hypopyon, not responding, compliance doubt, fungal or Acanthamoeba, immunocompromised, post-surgical, monocular, thinning or positive Seidel.</p><p><b>Hospital:</b> scrape and culture, then cefazolin 5% + tobramycin 1.3% (or gentamicin 1.5%): q10min for 1–2 h, then hourly, alternating on the half hour, day and night. Vancomycin for penicillin allergy or MRSA.</p>`)}
        </div></div>
        ${h3('Fungal, Acanthamoeba, marginal, phlyctenule')}
        ${figs(fig('fungal-keratitis', '<b>Fungal:</b> grey infiltrate with feathery edges, satellite lesions and a hypopyon. Vegetative trauma. Refer same day; natamycin 5% (MUTT). Never steroids.'), fig('acanthamoeba', '<b>Acanthamoeba:</b> pseudodendrites early (A), ring infiltrate later (B), perineural infiltrates (C). CL + water; pain out of proportion. Refer for PHMB or chlorhexidine.'), fig('marginal', '<b>Marginal keratitis:</b> infiltrates just inside the limbus with a clear gap, where the lid margin sits. Lid hygiene + FML + Chlorsig cover.'), fig('phlyctenule', '<b>Phlyctenule:</b> raised nodule at the limbus with a leash of vessels. Staph hypersensitivity (rarely TB).'))}
        ${h3('Contact lens complications: the AC is the tie-breaker')}
        ${figs(fig('clpu', '<b>CLPU:</b> small, round, peripheral, dense; epithelium broken but AC quiet. Stop wear, FML + cipro qid, review 24 h.'), fig('clare', '<b>CLARE:</b> red eye on waking after sleeping in lenses; small faint infiltrates, epithelium intact. Stop wear, FML qid.'), fig('seal', '<b>SEAL:</b> thin arcuate stain 2–3 mm inside the superior limbus. Stop wear, refit lower modulus.'), fig('clpc', '<b>CLPC:</b> papillae on the everted upper lid. Stop wear 4+ weeks, mast cell stabiliser, return in dailies.'), fig('solution-toxicity', '<b>Solution toxicity:</b> diffuse or annular punctate staining. Switch to peroxide or dailies.'))}
        <div class="ncols"><div>
        ${h3('Foreign body, abrasion and RCE')}
        ${figs(fig('corneal-fb', '<b>Corneal FB:</b> check for a rust ring, evert the lids, check the AC. Seidel before IOP.'), fig('epithelial-defect', 'Large epithelial defect lit up with fluorescein (abrasion or erosion).'))}
        ${ul('After removal treat as an abrasion: Chlorsig qid until healed + 2–3 days, cycloplegic, review 24 h. High-velocity: think IOFB, dilate.', '<b>RCE:</b> half trauma, half EBMD. Acute: debride, antibiotic, BCL. Prevent: ointment nocte 3–6 months, hypertonic saline 5%; frequent: doxycycline 50 mg bd + FML (MMP inhibition); then diamond burr or micropuncture. ~40% recur within 4 years.')}
        </div><div>
        ${h3('Chemical injury and others')}
        ${figs(fig('roper-hall', 'Roper-Hall grades: the more of the limbus that’s white and blanched (ischaemic), the worse the outlook.', true))}
        ${ul('<b>Irrigate first</b> (20–30 min, until pH 7.0–7.5, sweep the fornices), then grade. Grade II+: same-day referral. Alkali worse than acid.', '<b>Penetrating injury:</b> no tonometry, no drops; rigid shield, same-day referral.', '<b>Fuchs/bullous:</b> hypertonic saline 5% (compounded), BCL for ruptured bullae.', '<b>Never</b> give topical anaesthetic to take home.')}
        </div></div>`
    },
    {
      id: 'herpes', title: 'Herpetic eye disease', icon: '🦠', hue: 300,
      lead: 'The two classic traps: a steroid on an epithelial dendrite, and not dilating. The usual storyline: epithelial HSK, then the patient returns with stromal haze.',
      html: `${table(['', 'HSV keratitis', 'HZO'], [
          ['Lesion', 'True dendrite with terminal bulbs; ulcerated base stains brightly; edges take rose bengal / lissamine', 'Pseudodendrite: raised, no bulbs, “painted on”, stains poorly'],
          ['Skin', 'Vesicles possible, not dermatomal', 'Dermatomal V1 rash respecting the midline; 2–3 day prodrome'],
          ['Who', 'Any age, recurrent', 'Older or immunocompromised; usually one episode'],
          ['Latency', 'Trigeminal ganglion', 'Trigeminal ganglion (V1)']])}
        ${figs(fig('dendrite-schematic', 'HSV dendrite vs HZO pseudodendrite (schematic).', true), fig('hsv-session', 'Study session: “metal shavings” patient with a cold sore the week before; branching staining lesion with a satellite. HSV epithelial keratitis.', true))}
        <div class="ncols"><div>
        ${h3('HSV epithelial keratitis')}
        ${figs(fig('hsv-dendrite', 'Branching dendrite with end bulbs; the whole ulcer stains.'))}
        ${ul('<b>Aciclovir 3% ointment</b>, 1 cm 5×/day until 3 days after healing (~10–14 days).', 'Debride the edges under PF anaesthetic. Cycloplegic if AC reaction.', '<b>No steroid</b> on an active epithelial lesion (dendrite → geographic ulcer). <b>Dilate.</b>', 'Review 24–48 h, then weekly. Not healing by 2 weeks: compliance, toxicity, neurotrophic, Acanthamoeba.', 'Oral (via GP) if elderly, poor dexterity or immunocompromised: aciclovir 400 mg 5×/day or valaciclovir 500 mg bd–tds.')}
        </div><div>
        ${h3('HSV stromal keratitis')}
        ${figs(fig('hsv-stromal', 'Stromal scarring with blood vessels growing in.'))}
        ${ul('Epithelium healed, stromal haze or disciform oedema.', '<b>Pred Forte 1% qid</b> with a slow taper + oral aciclovir 400 mg bd (HEDS I: faster resolution).', '<b>Then prophylaxis</b> 400 mg bd for 12 months (HEDS II: any ocular HSV 32% → 19%; stromal 28% → 14%).', 'Refer necrotising stromal keratitis or endotheliitis.')}
        </div></div>
        ${h3('HZO')}
        ${figs(fig('hzo-rash', '<b>HZO rash</b> in the first branch of the trigeminal nerve (V1), stopping at the midline.'), fig('hzo-pseudodendrite', '<b>HZO pseudodendrite:</b> raised, rope-like, no end bulbs, stains poorly.'))}
        <div class="ncols"><div>${ul('<b>GP within 72 h</b> for oral antivirals: aciclovir 800 mg 5×/day, or valaciclovir 1 g tds, for 7 days. Still give after 72 h if new lesions or eye involvement. Topical antivirals have no role.',
          '<b>Hutchinson’s sign</b> (tip/side of nose, nasociliary): eye involvement likely.',
          'Stromal keratitis or uveitis: Pred Forte with antiviral cover; IOP rise: timolol (no PGA). <b>Dilate.</b>',
          'Contagious until crusted: avoid pregnant, immunocompromised and unvaccinated contacts.')}</div>
        <div>${ul('<b>Timeline:</b> pseudodendrites first days; <b>nummular infiltrates from ~day 10</b> (steroid-responsive, recur if tapered fast); disciform ~3 months; lipid keratopathy up to 18 months.',
          '<b>PHN:</b> pain over 3 months after the rash; risk with age, severe rash, late antivirals. GP: amitriptyline, gabapentin, pregabalin.',
          '<b>ARN</b> (immunocompetent, vitritis, arteritis) and <b>PORN</b> (HIV): same-day hospital.',
          'Uveitis risk ~1.7× for a year. Long-term follow-up: late keratitis, glaucoma, cataract.')}</div></div>
        <p class="muted">Emma’s case report on HZO nummular keratitis is in the simulator under <b>Cornea &amp; Keratitis</b> (source: Emma’s case report).</p>`
    },
    {
      id: 'anterior', title: 'Other anterior eye', icon: '🌿', hue: 140,
      lead: 'Less common, but each has appeared in recent years: VKC, preseptal cellulitis, episcleritis, EKC, bacterial/chlamydial conjunctivitis, MGD.',
      html: `${h3('Allergy and VKC')}
        ${figs(fig('sac', '<b>Seasonal allergic:</b> chemosis and mild redness in both eyes; the key symptom is itch.'), fig('vkc', '<b>VKC:</b> giant cobblestone papillae on the upper tarsus.'), fig('akc', '<b>AKC:</b> eczema on the lid skin.'))}
        ${ul('<b>SAC/PAC:</b> avoid allergen, cold compress, chilled PF lubricants; olopatadine 0.1% or ketotifen 0.025% bd (no more than bd); loratadine 10 mg <i>once</i> daily. Severe: short FML.',
          '<b>VKC:</b> boy 7–12, warm climate, ropey mucus, cobblestones over 1 mm, Horner-Trantas dots, shield ulcer risk. Combination drop bd + pulse steroid with a fast taper (≈2 weeks; children respond more). Shield ulcer: steroid + Chlorsig ± debridement (Cameron 1 medical; 2 + debridement; 3 + amniotic membrane). Ciclosporin if recurrent.',
          '<b>AKC:</b> adults with eczema, lower-lid papillae, keratoconus and HSV risk. Refer.')}
        ${h3('Conjunctivitis')}
        ${table(['Type', 'Clues', 'Management'], [
          ['Bacterial', 'Mucopurulent, lids stuck. Adults Staph aureus; children H. influenzae, Strep pneumoniae', 'Chloramphenicol 0.5% qid or 1% ointment; review 24–48 h. Hyperacute = gonococcal: same-day referral'],
          ['Adenoviral / EKC', 'Recent cold, watery, follicles, tender node; second eye 2–5 days later; SEIs from day 7–14', 'Supportive; off work 10–14 days; peel membranes; FML only for axial infiltrates. Tonometer tips: disposable or bleach (resists alcohol)'],
          ['Chlamydial', 'Young adult, chronic unilateral follicular, not better on Chlorsig, superior pannus', 'PCR swab; doxycycline 100 mg bd × 7 days via GP (azithromycin 1 g in pregnancy); partner tracing'],
          ['Neonatal', 'Within 2 weeks of birth', 'Immediate referral']])}
        ${figs(fig('gonococcal', '<b>Gonococcal:</b> hyperacute, lots of pus within hours. Same-day referral.'), fig('chlamydia', '<b>Adult chlamydia:</b> large follicles in the lower fornix.'), fig('adenoviral', '<b>Adenoviral:</b> red, watery eyes in both eyes (often one starts first).'), fig('membrane', '<b>Membrane</b> on the lower tarsal conjunctiva; peel it.'))}
        ${h3('Episcleritis vs scleritis')}
        <div class="ncols"><div>${table(['', 'Episcleritis', 'Scleritis'], [
          ['Pain', 'Mild discomfort', 'Deep, boring, wakes at night, worse with movement'],
          ['Colour', 'Bright red, sectoral', 'Bluish-violet, deeper'],
          ['Vessels', 'Move; blanch with phenylephrine 2.5%', 'Don’t move or blanch'],
          ['Systemic', 'Uncommon (~10%)', '~50% (RA, GPA)']])}
          ${ul('<b>Episcleritis:</b> self-limiting 1–3 weeks; cool compresses, FML qid with taper if symptomatic, oral ibuprofen.', '<b>Scleritis:</b> refer. Oral NSAIDs (indometacin, naproxen), then oral prednisolone 60–80 mg once daily; never topical NSAIDs alone.')}</div>
        <div>${figs(fig('episcleritis', '<b>Simple episcleritis:</b> sectoral redness that blanches with phenylephrine.'), fig('nodular-episcleritis', '<b>Nodular episcleritis:</b> a nodule that moves over the sclera.'), fig('scleritis', '<b>Scleritis:</b> deep, purplish, doesn’t blanch; severe boring pain.'))}</div></div>
        ${h3('Lids, orbit and lacrimal')}
        ${figs(fig('chalazion-stye', '<b>Chalazion</b> (top): firm painless lump away from the margin. <b>Stye</b>: tender lump at the margin.'), fig('preseptal', '<b>Preseptal cellulitis:</b> swollen red lid; movements, vision and pupils normal.'), fig('demodex', '<b>Demodex:</b> cylindrical collarettes around the lash base.'), fig('lice', '<b>Phthiriasis:</b> lice and nits on the lashes.'), fig('molluscum', '<b>Molluscum:</b> pearly umbilicated lumps; follicular conjunctivitis.'))}
        <div class="ncols"><div>${ul('<b>Preseptal vs orbital:</b> VA, RAPD, motility and pain on movement, proptosis, colour, fever. Preseptal: GP for amoxicillin–clavulanate (cefalexin if penicillin-allergic). Any orbital sign or a child: ED for IV antibiotics and CT.',
          '<b>Chalazion</b> over 6–8 weeks, or recurring in one spot: refer (sebaceous carcinoma).',
          '<b>Acute dacryocystitis:</b> don’t probe, irrigate or massage; same-day oral antibiotics via GP; DCR later.')}</div>
        <div>${ul('<b>MGD:</b> warm compresses 10 min bd, lid hygiene, lubricants → expression/IPL → short FML → doxycycline 50 mg bd 1–2 weeks then 25–50 mg daily (azithromycin in pregnancy or children).',
          '<b>Demodex:</b> tea tree oil, at least 2–3 weeks (mite life cycle). Lotilaner isn’t available here.',
          '<b>Dry eye (DEWS III):</b> OSDI-6 ≥4 plus one sign (NIBUT &lt;10 s, osmolarity ≥308, staining). Pain without stain → neuropathic; stain without pain → neurotrophic.',
          '<b>Bell’s palsy:</b> GP same day for prednisolone (within 72 h); protect the cornea.')}</div></div>
        ${h3('Spot diagnoses')}
        ${figs(fig('pinguecula', '<b>Pinguecula:</b> yellow nodule; doesn’t cross onto the cornea.'), fig('pterygium', '<b>Pterygium:</b> wing of tissue onto the cornea, usually nasal.'), fig('subconj-haem', '<b>Subconjunctival haemorrhage:</b> bright red, flat, painless. Check BP and anticoagulants.'), fig('thygeson', '<b>Thygeson’s:</b> grey-white spots over a quiet cornea.'), fig('keratoconus', '<b>Keratoconus:</b> Munson’s sign on downgaze.'), fig('hydrops', '<b>Acute hydrops:</b> sudden central swelling in keratoconus. Settles over 8–10 weeks.'), fig('ebmd', '<b>EBMD:</b> maps, dots and fingerprints; a common cause of RCE.'), fig('bullous', '<b>Bullous keratopathy:</b> hazy cornea with epithelial blisters.'))}`
    },
    {
      id: 'postop', title: 'Post-cataract and refractive care', icon: '🩺', hue: 180,
      lead: 'Say first that post-op prescribing follows the operating surgeon’s protocol (Optometry Australia Cataract Care guide, 2025).',
      html: `<div class="ncols"><div>
        ${table(['Visit', 'When', 'Normal'], [
          ['Day 1', '24–48 h', 'VA 6/6–6/18 unaided, wound apposed, mild oedema, cells 1–2+, mild IOP rise'],
          ['Week 1', '3–7 days', 'Settling; check drops and technique'],
          ['Month 1', '4–6 weeks', 'White, quiet; dilate; refract']])}
        <p><b>Usual drops:</b> chloramphenicol 0.5% qid ~1 week; Prednefrin Forte qid tapering over 2–6 weeks; ketorolac 0.5% qid 2–6 weeks (CMO). Diabetics: keep anti-inflammatories ~3 months.</p>
        <p><b>IOP with AC depth:</b> deep + high = viscoelastic or steroid response; shallow + high = pupil block or malignant glaucoma (urgent); shallow + low = wound leak.</p>
        </div><div>
        ${table(['Complication', 'When', 'Clue → action'], [
          ['Wound leak', 'Day 1–2', 'Seidel +, IOP &lt;8, shallow AC → surgeon'],
          ['IOP spike', 'Hours; 2–6 wks', 'IOP &gt;30, microcystic oedema → timolol/brimonidine/CAI; no PGA'],
          ['TASS', '12–48 h', 'Limbus-to-limbus oedema, no vitritis → intensive steroid'],
          ['Endophthalmitis', 'Day 3–5', 'Pain, VA drop, hypopyon → phone the surgeon now (EVS: HM = tap + inject; LP = vitrectomy)'],
          ['CMO', '6–8 weeks', 'Good early VA then worse → ketorolac + Pred Forte'],
          ['PCO', 'Months–years', '“Cataract is back” → YAG'],
          ['RD', '12–40 months', 'Flashes, floaters, curtain → same day']])}</div></div>
        ${figs(fig('endophthalmitis', '<b>Endophthalmitis:</b> red eye with a hypopyon days after surgery. Same-day referral.'), fig('pco', '<b>PCO:</b> cloudy posterior capsule on retroillumination.'), fig('cmo-oct', '<b>CMO on OCT:</b> cystic spaces weeks after surgery.'), fig('corneal-oedema', '<b>Corneal oedema</b> after surgery. Hypertonic saline 5% if it persists; refer if not clearing by ~2 weeks.'))}
        ${h3('After refractive surgery')}
        ${ul('<b>PRK:</b> BCL until healed, Chlorsig qid, FML tapering 1–3 months. An infiltrate under the BCL is infection until proven otherwise.', '<b>DLK</b> (days 1–7, diffuse interface cells, little pain): Pred Forte hourly, tell the surgeon. Focal painful infiltrate = infection.', '<b>PISK:</b> interface fluid on steroid; applanation reads falsely low. <b>Ectasia:</b> refer for CXL.')}`
    },
    {
      id: 'drugs', title: 'Drug reference', icon: '💊', hue: 40,
      lead: 'Say drug, brand, strength, frequency and duration every time, then expect “contraindications?”. Pregnancy categories are the Australian (TGA) ones.',
      html: `${h3('Glaucoma drugs')}
        ${table(['Class', 'Drug and dose', 'How it works', 'Contraindications / cautions', 'Preg.'], [
          ['PGA', 'Latanoprost 0.005% nocte; bimatoprost 0.03%; travoprost 0.004%; tafluprost 0.0015% (PF)', 'FP agonist: more uveoscleral outflow; 25–35%', 'Active inflammation, HSV history, CMO risk. Iris darkening, lashes, periorbitopathy', 'B3 (avoid)'],
          ['Beta blocker', 'Timolol 0.5% bd or mane; betaxolol 0.5% (β1)', 'Less aqueous; 20–25%; little effect overnight', 'Asthma, COPD, bradycardia, heart block, failure. Masks hypoglycaemia; athletes; no nocte in NTG', 'C'],
          ['Alpha-2 agonist', 'Brimonidine 0.2% / 0.15% bd–tid; apraclonidine 0.5% short-term', 'Less aqueous, more uveoscleral; 20–25%', 'MAOIs; children under 2 (CNS depression). Allergy up to 1/3', 'B1/B3'],
          ['Topical CAI', 'Brinzolamide 1% bd–tid; dorzolamide 2%', 'Less aqueous; 15–20%', 'Sulfa allergy, severe renal. Corneal graft or endothelial disease', 'B3'],
          ['Oral CAI', 'Acetazolamide 500 mg stat (AAC)', 'Systemic CAI', 'Sulfa allergy, renal/hepatic disease, acidosis. Via GP only', 'B3'],
          ['Miotic', 'Pilocarpine 1–4%', 'Ciliary contraction opens TM', 'Uveitis, NVG, lens-induced, recession. RD risk, brow ache', 'B2'],
          ['Combinations', 'Xalacom, Ganfort, DuoTrav, Combigan, Cosopt PF, Azarga, Simbrinza', 'Up to 35%', 'PBS: only if not controlled on one drug', '—']])}
        ${box('warn', '🤰 Glaucoma in pregnancy', '<p>Lead with <b>SLT</b>. If drops are needed: brimonidine in trimesters 1–2 (stop before delivery); timolol with punctal occlusion (neonatal bradycardia); topical CAI later; avoid PGAs. IOP often falls 3–4 mmHg in pregnancy anyway.</p>')}
        ${h3('Anti-infectives')}
        ${table(['Drug', 'Dose', 'Mechanism / cover', 'Cautions', 'Preg.'], [
          ['Chloramphenicol', '0.5% drops qid+, 1% ointment; until healed + 2–3 days', '50S, bacteriostatic, broad; misses Pseudomonas', 'Blood dyscrasia history; grey baby is systemic', 'A'],
          ['Ciprofloxacin 0.3%', 'MK schedule (q15min × 6 h …)', 'DNA gyrase, bactericidal, gram-negative', 'White precipitates', 'B3'],
          ['Fortified (hospital)', 'Cefazolin 5% + tobramycin 1.3%', 'Cell wall (gram +) + 30S (gram −)', 'Penicillin allergy; aminoglycoside toxicity', 'B1 / B3'],
          ['Doxycycline (GP)', '50 mg bd 1–2 wks, then 25–50 mg daily', '30S; sub-MIC lipase and MMP inhibition', 'Pregnancy, under 8, photosensitivity', 'D'],
          ['Azithromycin', '1 g single dose (chlamydia)', '50S', 'Macrolide allergy', 'B1'],
          ['Aciclovir', '3% oint 5×/day; oral 400 mg 5×/day, 400 mg bd prophylaxis, 800 mg 5×/day HZO', 'Guanine analogue, viral DNA polymerase', 'Renal dose adjustment', 'B3'],
          ['Valaciclovir', '500 mg daily–bd prophylaxis; 1 g tds × 7 days HZO', 'Aciclovir prodrug', 'As aciclovir', 'B3']])}
        ${h3('Steroids, NSAIDs, cycloplegics, anti-allergy')}
        ${table(['Drug', 'Strength', 'Notes'], [
          ['Prednisolone acetate (Pred Forte)', '1% suspension, shake', 'Most potent; penetrates intact epithelium. PBS for uveitis'],
          ['Dexamethasone (Maxidex)', '0.1%', 'Potent; highest IOP raiser'],
          ['FML', '0.1%', 'Surface/mild disease; fewer IOP rises. Private script'],
          ['Hydrocortisone (Hycor)', '1% ointment nocte', 'Mild; overnight cover'],
          ['Ketorolac / diclofenac', '0.5% / 0.1%', 'Stings; melt risk; not enough alone for uveitis or scleritis'],
          ['Atropine', '1% bd–tid', 'Cycloplegia 7–14 days; avoid narrow angles; 10 mL swallowed can kill a small child'],
          ['Cyclopentolate', '1%', '6–24 h; weaker in an inflamed eye; watch under-6s 30–45 min'],
          ['Phenylephrine', '2.5% (10% if no cardiac risk)', 'Check BP. CI: recent MI, unstable angina, insulin-dependent diabetes, MAOIs'],
          ['Olopatadine / ketotifen', '0.1% bd / 0.025% bd', 'Antihistamine + mast cell stabiliser (from 3 years)'],
          ['Cromoglycate / lodoxamide', '2% / 0.1%', 'Mast cell stabilisers; start 2–4 weeks before the season']])}
        <div class="ncols"><div>${box('bad', '⛔ Steroid contraindications', '<p>Active HSV epithelial keratitis, fungal or untreated bacterial infection, open epithelial defect. Precautions: past HSK, glaucoma/OHT, known responder, children, diabetes, high myopia, family history.</p><p><b>Armaly:</b> ~60% low (&lt;6 mmHg), ~30% moderate (6–15), ~5% high (&gt;15) responders.</p>')}
        ${h3('Prescribing rules')}${ul('One medicine per prescription. S4 script: date, prescriber, patient, drug, strength, form, quantity, eye, repeats, substitution box, directions, signature.', 'Atropine is PBS-listed but optometrists write it private. Apraclonidine isn’t PBS-listed.', 'Ikervis: PBS authority for severe dry eye with keratitis (Oxford ≥4, OSDI ≥23).', 'Oral pain: paracetamol 0.5–1 g q4–6h (max 4 g); ibuprofen 200–400 mg tds–qid. Codeine/opioids: GP.')}</div>
        <div>${h3('Drugs that cause eye problems (ask every patient)')}
        ${ul('<b>Steroids</b> by any route: IOP, cataract, CSCR.', '<b>Tamsulosin:</b> floppy iris at cataract surgery.', '<b>Hydroxychloroquine:</b> ≤5 mg/kg/day; risk after 5 years; screen with 10-2 and OCT (24-2/30-2 in Asian patients).', '<b>Tetracyclines, isotretinoin</b>: IIH. <b>PDE5 inhibitors</b> and bedtime BP tablets: NAION.', '<b>Topiramate:</b> bilateral angle closure.', '<b>Ethambutol, linezolid, amiodarone:</b> optic neuropathy.', '<b>Myasthenia</b> worsened by fluoroquinolones, aminoglycosides, macrolides and beta blockers (even timolol).')}</div></div>`
    },
    {
      id: 'trials', title: 'Key trials', icon: '📊', hue: 270,
      lead: 'Name the trial, then one number. The common slip is quoting the EMGT “10% per mmHg” as OHTS.',
      html: table(['Trial', 'Question', 'Finding to quote'], [
          ['OHTS', 'Treat OHT?', '5-year conversion 9.5% → 4.4%. Target 20% and ≤24 mmHg. Thin CCT (≤555 µm) a risk factor'],
          ['EMGT', 'Treat early OAG?', '~25% IOP cut: progression 62% → 45%; each 1 mmHg ≈ 10% less risk; PXF fastest (−3.13 dB/yr)'],
          ['AGIS', 'Advanced glaucoma', 'IOP under 18 at every visit (mean ~12) = virtually no field loss'],
          ['CNTGS', 'Treat NTG?', '30% reduction: progression 35% → 12%'],
          ['CIGTS', 'Drops vs trabeculectomy', 'Similar fields; fluctuation a risk; surgery raises cataract risk'],
          ['LiGHT', 'SLT vs drops first', '74% drop-free at 3 years (~70% at 6)'],
          ['UKGTS', 'Latanoprost vs placebo', 'Halved field progression within 2 years'],
          ['LoGTS', 'Brimonidine vs timolol in NTG', 'Less progression with brimonidine at the same IOP'],
          ['BMES', 'Australian prevalence', '3% over 49; half undiagnosed; PXF 2.3%'],
          ['ZAP', 'LPI in PACS', 'Roughly halves progression, but absolute risk low'],
          ['EAGLE', 'Lens extraction vs LPI', 'Lens extraction better for IOP, QoL and cost'],
          ['HEDS I', 'HSV stromal keratitis', 'Steroid with antiviral cover speeds resolution'],
          ['HEDS II (APT)', 'Aciclovir 400 mg bd × 1 yr', 'Any ocular HSV 32% → 19%; stromal 28% → 14%'],
          ['SCUT', 'Steroid in bacterial keratitis', 'No overall benefit or harm; better VA in central ulcers with poor VA'],
          ['MUTT', 'Fungal keratitis', 'Natamycin beats voriconazole for filamentous fungi'],
          ['ONTT', 'Optic neuritis', 'IV methylprednisolone speeds recovery, not final VA; oral alone raises recurrence']])
    },
    {
      id: 'neuro', title: 'Neuro and visual field localisation', icon: '🧠', hue: 275,
      lead: 'Candidates struggle here most. One eye = before the chiasm; respects the vertical midline = chiasm or behind; respects the horizontal midline = retina or optic nerve.',
      html: `<div class="ncols"><div>${figs(fig('field-pathway', 'Where the lesion sits decides the field defect. The further back the lesion, the more the two eyes’ defects match.', true))}</div>
        <div>${table(['Lesion', 'Field defect', 'Causes'], [
          ['Retina / ONH', 'Arcuate, nasal step, altitudinal', 'Glaucoma, NAION, BRAO, BRVO'],
          ['Optic nerve', 'Central / centrocaecal, one eye', 'Optic neuritis, toxic, LHON, compressive'],
          ['Junction', 'Central scotoma + other eye superotemporal', 'Compressive'],
          ['Chiasm', 'Bitemporal hemianopia', 'Pituitary (superior first), craniopharyngioma (inferior first)'],
          ['Optic tract', 'Incongruous homonymous + RAPD', 'Tumour, stroke'],
          ['Temporal lobe', 'Superior quadrantanopia (“pie in the sky”)', 'Tumour, MCA stroke'],
          ['Parietal lobe', 'Inferior quadrantanopia (“pie on the floor”)', 'Tumour, MCA stroke'],
          ['Occipital', 'Congruous homonymous, macular sparing', 'PCA stroke']])}</div></div>
        <div class="ncols"><div>
        ${h3('Work-up and when to MRI')}
        ${ul('VA, pupils (RAPD; anisocoria dim and bright), colour (D15/HRR for acquired), red cap, motility, 24-2/30-2, disc, BP.', 'MRI if a field respects the vertical midline, pallor exceeds cupping, unexplained loss in the young, or neuro symptoms.', 'A −3.00 DS lens removing a superotemporal defect = tilted disc, not chiasm.')}
        ${h3('AAION vs NAION')}
        ${figs(fig('naion', 'After NA-AION: inferior disc pallor and RNFL thinning, with matching superior field loss.'))}
        ${ul('<b>AAION:</b> over 70, GCA symptoms, chalky white disc, very high ESR/CRP: urgent steroids to save the other eye.', '<b>NAION:</b> 50–70, vascular risks, crowded “disc at risk”, painless loss on waking, altitudinal. Fellow eye ~15%.', '<b>Optic neuritis:</b> young woman, painful movements, RAPD, central scotoma, often normal disc. Urgent MRI; never oral prednisolone alone (ONTT).')}
        </div><div>
        ${h3('Pupil drug tests')}
        ${table(['Drug', 'Tests for', 'Result'], [
          ['Apraclonidine 0.5%', 'Horner’s', 'Anisocoria reverses (Horner pupil dilates)'],
          ['Cocaine 10%', 'Horner’s', 'Horner pupil fails to dilate'],
          ['Hydroxyamphetamine 1%', 'Where the lesion is', 'No dilation = postganglionic'],
          ['Pilocarpine 0.125%', 'Adie’s', 'Adie pupil constricts'],
          ['Pilocarpine 1%', 'Drug vs CN III', 'A drug-blocked pupil won’t constrict']])}
        ${box('bad', '🚨 Same-day neuro emergencies', '<p>CN III palsy that is pupil-involving, painful, partial or under 50 (aneurysm); new painful Horner’s (dissection); CN VI with papilloedema, a child or bilateral; cavernous sinus; acute INO; pituitary apoplexy; transient monocular loss or retinal embolus (stroke service); TED optic neuropathy; myasthenia with swallowing or breathing trouble; papilloedema (MRI/MRV first).</p>')}
        </div></div>`
    },
    {
      id: 'posterior', title: 'Posterior segment: how fast to refer', icon: '🩸', hue: 95,
      lead: 'Know the urgency. Same day for anything vascular-occlusive with stroke risk, RD, endophthalmitis or papilloedema.',
      html: `${table(['Same day', 'Within days to a week', 'Routine'], [
          ['CRAO/BRAO (stroke: ED; GCA bloods if 50+), AAION, RD or symptomatic tear, vitreous haemorrhage, endophthalmitis, papilloedema, malignant hypertension, chemical burn II+', 'Wet AMD or myopic CNV (within ~a week), PDR (days–weeks), ischaemic CRVO, CMO', 'Stable NPDR, non-ischaemic RVO follow-up, ERM, lamellar hole, first-episode CSCR, VMT']])}
        ${h3('Vascular')}
        ${figs(fig('crao', '<b>CRAO:</b> pale retina with a cherry-red spot.'), fig('brao', '<b>BRAO:</b> whitened retina in one sector.'), fig('crvo', '<b>CRVO:</b> haemorrhages in all four quadrants (“blood and thunder”).'), fig('brvo', '<b>BRVO:</b> haemorrhages in one sector, stopping at the horizontal midline.'), fig('hollenhorst', '<b>Hollenhorst plaque:</b> cholesterol embolus at a branch. Carotid work-up.'), fig('rubeosis', '<b>Rubeosis (NVI):</b> fine new vessels at the pupil margin. After CRVO check it every visit for a year.'))}
        ${figs(fig('hypertensive', 'Hypertensive retinopathy, left to right: haemorrhage, hard exudates, AV nipping, cotton wool spot, arteriolar narrowing. BP 180/110+ with symptoms or disc swelling: same-day ED.', true))}
        ${h3('Diabetic retinopathy')}
        ${figs(fig('npdr', '<b>NPDR:</b> dot and blot haemorrhages.'), fig('flame', '<b>Flame haemorrhage:</b> in the nerve fibre layer.'), fig('cws', '<b>Cotton wool spot:</b> fluffy white ischaemia (with OCT and OCTA).'), fig('irma', '<b>IRMA:</b> abnormal vessels inside the retina; severe NPDR.'), fig('dmo-oct', '<b>DMO on OCT:</b> cystic spaces, hard exudates, or both.'))}
        ${ul('<b>Review:</b> none 2-yearly (yearly if high risk, incl. Aboriginal and Torres Strait Islander patients); mild NPDR 6–12 months; moderate 3–6 months; severe NPDR (4-2-1) refer; PDR urgent. Suggest fenofibrate to the GP (FIELD, ACCORD).', '<b>Pregnancy with diabetes:</b> before conception and in the first trimester; with DR, again at 16–20 weeks; PDR monthly.')}
        ${h3('Macula and periphery')}
        ${figs(fig('drusen', '<b>Intermediate AMD:</b> large drusen at the macula.'), fig('ga', '<b>Geographic atrophy:</b> dark patches on autofluorescence that grow.'), fig('wet-amd-oct', '<b>Wet AMD on OCT:</b> subretinal fluid and hyper-reflective material (SHRM).'), fig('cscr-oct', '<b>CSCR on OCT:</b> a dome of subretinal fluid with a small PED. Ask about steroids.'), fig('macular-hole-oct', '<b>Macular hole on OCT:</b> small to large full-thickness hole.'), fig('horseshoe-tear', '<b>Horseshoe tear:</b> flap with a cuff of fluid and a pigmented border. Same day.'))}
        <p>Clean PVD: re-check in 4–6 weeks (2–5% develop a new break). Amaurosis fugax: same-day stroke assessment (~10% stroke risk in 3 months).</p>`
    },
    {
      id: 'practice', title: 'Practice questions from past orals', icon: '❓', hue: 330,
      lead: 'All asked between 2018 and 2025. Answer out loud, then check the sections above (or run the case in the simulator).',
      html: `<div class="ncols"><div>
        <details open><summary><b>Acute angle closure</b></summary>${ul('Red eye with a mid-dilated pupil: differentials?', 'Why is gonioscopy contraindicated? What instead?', 'First aid drug by drug, with doses and contraindications.', 'How do you get Diamox? What if they vomit it?', 'Why isn’t pilocarpine effective above 40? When would you give it straight away?', 'Rural town, IOP still high after drops: what now?', 'LPI in one eye or both? ZAP and EAGLE?')}</details>
        <details><summary><b>AAU and hyphema</b></summary>${ul('Why Pred Forte and not FML? Why acetate? Loading and taper?', 'What does atropine do? Synechiae won’t break?', 'History of HSV: what changes?', 'IOP 29 at week 3: why, and what do you give?', 'Hyphema: grade, why head at 45°, why atropine, why no ibuprofen, when gonio?')}</details>
        <details><summary><b>MK and keratitis</b></summary>${ul('MK vs CLPU vs marginal vs abrasion?', 'Cipro dosing, why not taper, why cipro over ofloxacin and chloramphenicol?', 'When fortified? Which drugs, why two, why alternate?', 'Worse at review: why? Why scrape, not swab?', 'When would you add a steroid? SCUT?')}</details>
        <details><summary><b>Herpes</b></summary>${ul('Dendrite vs pseudodendrite staining? What does lissamine green stain?', 'Stromal haze after a healed dendrite: what now, what cover?', 'Prophylaxis dose, duration, HEDS?', 'HZO: midline, Hutchinson’s, antiviral dose and timing, day 3 in a rural town?', 'What is PHN? Is HZO more or less recurrent than HSV?')}</details>
        </div><div>
        <details open><summary><b>Glaucoma</b></summary>${ul('Describe this disc (5 Rs). This field: reliability, MD, PSD, VFI, GHT. Grade it.', 'Work-up in order, and why. CCT 610?', 'Target IOP and which paper? Advanced? Patient is 85?', 'PGA mechanism, side effects, CIs. HSV history? Athlete? On propranolol? Asthma? Pregnant?', 'Doesn’t want drops: LiGHT?', 'IOP 26 in one eye only: which secondary glaucomas?')}</details>
        <details><summary><b>Secondary glaucomas</b></summary>${ul('PXF: what else do you see? Gonio vs PDS? Treat a 10 mmHg difference?', 'PDS: Krukenberg location, conversion, IOP spikes, 7 vs 22 vs 50-year-old?', 'Angle recession: degrees that matter, why no pilocarpine?', 'Steroid response: definition, who, %, which steroids, when?')}</details>
        <details><summary><b>Other anterior and post-op</b></summary>${ul('VKC: patient, Trantas dots, shield ulcer, pulse and taper.', 'Preseptal vs orbital: tests, organism, why clavulanate?', 'Episcleritis vs scleritis: phenylephrine test, which steroid?', 'Chlamydia vs adenovirus; how cultured; treatment now and in pregnancy?', 'Post-op day 4 hypopyon: who, how fast, HM vs LP rule?', 'Day 1 IOP 34 with a deep vs shallow AC?', 'Grade a chemical burn: what first?')}</details>
        <details><summary><b>Neuro and prescribing</b></summary>${ul('Draw the field for a lesion at the chiasm, optic tract and occipital cortex (2019, 2025).', 'Homonymous inferior quadrantanopia: where?', 'Centrocaecal scotoma causes? NAION vs AAION?', 'Fixed dilated pupil, well patient, no ptosis: which test?', 'Write a script for latanoprost: what must be on it?', 'PBS co-payment now? Paracetamol, ibuprofen, naproxen doses?')}</details>
        </div></div>`
    }
  ];
})();
