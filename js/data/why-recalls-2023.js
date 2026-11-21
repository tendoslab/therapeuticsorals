// Why each wrong option is wrong, for the cases in recalls-2023.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'r2023-mk-cl#0': {
    5: 'Gonioscopy on an ulcerated cornea risks spreading infection and adds nothing to the diagnosis.',
    6: 'A fundus view helps if the media allow, but it mustn’t delay starting antibiotics; endophthalmitis is rare without perforation or surgery.',
  },
  'r2023-mk-cl#1': {
    1: 'An infiltrate is a host cell response, not a bacterial colony; sterile infiltrates (e.g. CLPU) are common.',
    2: 'Stromal oedema is a separate sign. Infiltrates can scar and persist after the epithelium heals.',
    3: 'Lens deposits sit on the lens, not in the stroma. An ulcer is loss of epithelium over the infiltrate.',
  },
  'r2023-mk-cl#2': {
    5: 'A linear defect with a matching history points to an abrasion, not MK.',
  },
  'r2023-mk-cl#4': {
    1: 'Chloramphenicol covers Pseudomonas poorly, and a lens wearer needs anti-pseudomonal cover with a loading dose and 24-hour review.',
    2: 'QID is under-dosing for MK, a bandage lens on an infected ulcer is dangerous, and steroid from day one is unsafe.',
    3: 'All lens wear stops with MK, a cycloplegic helps pain and synechiae, and QID is under-dosing for anyone.',
  },
  'r2023-mk-cl#5': {
    1: 'Toxicity doesn’t make an ulcer enlarge overnight. Stopping the antibiotic in a worsening MK is dangerous.',
    2: 'Some worsening can happen in the first day, but an enlarging ulcer needs referral, and steroid before the organism is controlled risks a melt.',
    3: 'A worsening infiltrate is infection until proven otherwise; steroid and a bandage lens are unsafe and a 3-day review is too late.',
  },
  'r2023-mk-cl#6': {
    1: 'The lid margin isn’t the infected site; two fluoroquinolones add no extra cover and resistance isn’t overcome this way.',
    2: 'Chloramphenicol isn’t used fortified for MK, and the coverage is the wrong way round: tobramycin is the Gram-negative agent.',
    3: 'Vancomycin is reserved for MRSA, and dropping the aminoglycoside leaves Pseudomonas and other Gram-negatives uncovered.',
  },
  'r2023-poag-workup#1': {
    1: 'A thick cornea makes Goldmann over-read, not under-read, and correction formulas aren’t validated.',
    2: 'In OHTS it was a thin cornea that predicted conversion, not a thick one.',
    3: 'Goldmann assumes a cornea of about 520 µm; thickness does affect the reading and is a risk factor in its own right.',
  },
  'r2023-poag-workup#2': {
    1: 'Most people with sleep apnoea are undiagnosed, so you have to screen for it with targeted questions.',
    2: 'Insomnia isn’t the main feature of sleep apnoea, and sleeping tablets can make it worse.',
    3: 'These aren’t the specific symptoms, and a sleep study, not a blood test, makes the diagnosis.',
  },
  'r2023-poag-workup#4': {
    1: 'Fields are inverted: a superior defect comes from the inferior rim. Nasal steps come from arcuate fibres, not the papillomacular bundle.',
    2: 'Nasal field defects come from temporal retina and the arcuate fibres at the poles of the disc, not the nasal rim.',
    3: 'The field is reversed side to side as well as top to bottom, and nasal steps come from the temporal raphe.',
  },
  'r2023-poag-workup#5': {
    1: 'OHTS studied ocular hypertension, not glaucoma, and a PGA’s full effect is reached in weeks, so 6 months is too long to wait.',
    2: 'PGAs are usually first line, and AGIS compared surgical sequences in advanced glaucoma, not early disease.',
    3: 'Latanoprost is once daily (twice daily is less effective), and 50% isn’t the EMGT figure: each 1 mmHg cut risk by about 10%.',
  },
  'r2023-poag-workup#6': {
    1: 'PGAs have been linked to HSV keratitis recurrence, and β-blockers reduce exercise tolerance rather than improve it.',
    2: 'A past HSV history doesn’t rule out every other class, and stopping his sport isn’t a reasonable first answer when SLT exists.',
    3: 'Pilocarpine is rarely used for POAG now (side effects, QID dosing), and SLT works at any age.',
  },
  'r2023-poag-workup#7': {
    4: 'False positives tell you about the reliability of a test, not whether the disease has progressed.',
    5: 'Progression has to be confirmed on repeat testing; one worse test can be noise.',
  },
  'r2023-aac#0': {
    5: 'Uveitis usually gives a small pupil from sphincter spasm, not a mid-dilated one.',
  },
  'r2023-aac#1': {
    1: 'Gonio isn’t forbidden for life; it is done once the cornea clears, and indentation gonio is even used to break an attack.',
    2: 'Coupling gel doesn’t block the meshwork, and gonio shouldn’t come before treatment in an acute attack.',
    3: 'Treatment shouldn’t wait for gonioscopy; the OBA guideline doesn’t require it before first-aid drops.',
  },
  'r2023-aac#2': {
    1: 'Pilocarpine doesn’t work above about 40 mmHg (ischaemic sphincter), 4% is too strong, and optometrists can’t prescribe acetazolamide.',
    2: 'Latanoprost acts too slowly to help acutely, atropine can worsen angle closure, and optometrists can’t prescribe acetazolamide.',
    3: 'Optometrists can and should start first-aid drops while arranging urgent referral.',
  },
  'r2023-aac#4': {
    1: 'PGAs act slowly and are pro-inflammatory, but they aren’t contraindicated after LPI only; above 40 mmHg the problem is sphincter ischaemia, not absorption.',
    2: 'Neither is right: PGAs are simply slow, and pilocarpine doesn’t shut down aqueous production.',
    3: 'PGAs don’t need an ophthalmologist’s prescription, and pilocarpine is not effective above about 40 mmHg.',
  },
  'r2023-aac#5': {
    5: 'Dilating a pupil-block angle closure can make it worse.',
  },
  'r2023-aac#6': {
    1: 'The fellow eye is at high risk (roughly half attack within 5–10 years untreated), so it is lasered too.',
    2: 'SLT doesn’t treat pupil block, and the attack doesn’t protect the other eye.',
    3: 'LPI is the first treatment after an attack; trabeculectomy is for uncontrolled IOP, and the fellow eye needs laser too.',
  },
  'r2023-aac#7': {
    1: 'Pituitary tumours don’t cause bilateral angle closure; drugs are the usual cause and must be asked about.',
    2: 'Rubbing doesn’t cause bilateral attacks, and drug-induced closure (e.g. topiramate) isn’t pupil block, so pilocarpine doesn’t help.',
    3: 'PGAs don’t cause angle closure.',
  },
  'r2023-hsv#0': {
    5: 'Bacterial MK gives a round infiltrate with an epithelial defect, not a branching lesion.',
  },
  'r2023-hsv#1': {
    1: 'This swaps the two: HSV dendrites are ulcers with terminal bulbs; zoster pseudodendrites are raised and stain poorly.',
    2: 'The staining patterns differ, and both infections occur at any age.',
    3: 'HSV gives the branching ulcer with terminal bulbs; rose bengal isn’t used routinely in Australia.',
  },
  'r2023-hsv#2': {
    1: 'Only the affected eye is treated, and a steroid is contraindicated in active epithelial HSV.',
    2: 'Low-dose oral aciclovir is prophylaxis, not treatment of an active dendrite, and a month is far too long between reviews.',
    3: 'Chloramphenicol doesn’t treat HSV; an untreated dendrite can enlarge or progress.',
  },
  'r2023-hsv#3': {
    1: 'The epithelium has healed; stromal haze is an immune keratitis that responds to steroid under antiviral cover.',
    2: 'Stromal keratitis can scar and reduce vision; it needs treatment.',
    3: 'Stromal HSK steroids are tapered slowly over weeks (rebound is common), and antiviral cover is advised.',
  },
  'r2023-hsv#4': {
    1: 'HEDS used aciclovir 400 mg BD for 12 months; it reduced recurrences but didn’t prevent all of them.',
    2: 'HEDS used oral aciclovir, which did reduce recurrence; it didn’t test nightly topical ointment.',
    3: 'HEDS showed oral aciclovir reduced recurrences; it was during an epithelial episode that it didn’t prevent stromal disease.',
  },
  'r2023-hsv#5': {
    1: 'Anaesthetic abolishes the reflex you’re testing, and sensation is reduced (not raised) after HSV.',
    2: 'The blink to light doesn’t test corneal sensation, and HSV does reduce it.',
    3: 'Corneal sensation is easily tested in the room, and reduced sensation makes later episodes less painful, not more.',
  },
  'r2023-hzo#0': {
    5: 'Frequent recurrence is typical of HSV; zoster usually occurs once.',
  },
  'r2023-hzo#1': {
    1: 'For HZO the virus is latent in the trigeminal (Gasserian) ganglion, the same ganglion as HSV.',
    2: 'HSV is latent in the trigeminal ganglion, not the cornea; the midline is respected because each nerve supplies one side.',
    3: 'Both viruses establish lifelong latency in sensory ganglia; zoster is reactivation, not new infection.',
  },
  'r2023-hzo#2': {
    1: 'The tip of the nose is the nasociliary branch of the ophthalmic division, not the maxillary division.',
    2: 'Hutchinson’s sign is about the nerve involved, not secondary infection.',
    3: 'Zoster doesn’t cross the midline; Hutchinson’s sign predicts involvement of the same eye.',
  },
  'r2023-hzo#3': {
    1: 'Oral antivirals are the main treatment for HZO whatever the cornea shows, and early treatment matters.',
    2: 'Oral steroids aren’t first line and must not delay the antiviral; topical steroids are only for specific inflammation.',
    3: 'That is the HSV prophylaxis dose; acute zoster needs high-dose treatment started quickly.',
  },
  'r2023-hzo#4': {
    1: 'Day 3 is still within the window, and oral antivirals can be started by the GP the same day.',
    2: 'Antivirals are still worth giving after 72 hours if vesicles are forming or the eye is involved.',
    3: 'Topical aciclovir alone doesn’t treat zoster; the oral antiviral can be arranged through the GP the same day.',
  },
  'r2023-hzo#5': {
    1: 'PHN is lasting nerve pain, more common in older people, and not a drug side effect.',
    2: 'Reduced corneal sensation is a separate complication (neurotrophic keratopathy).',
    3: 'PHN is pain after the rash, not a second attack.',
  },
  'r2023-preseptal#0': {
    6: 'Angle closure doesn’t cause diffuse lid swelling, and the eye itself would be red with a hazy cornea.',
  },
  'r2023-preseptal#2': {
    6: 'The corneal staining pattern doesn’t separate preseptal from orbital cellulitis.',
  },
  'r2023-preseptal#3': {
    1: 'Topical antibiotics don’t reach the lid tissue; preseptal cellulitis needs oral antibiotics.',
    2: 'Steroids aren’t the treatment, and delaying antibiotics risks spread to the orbit.',
    3: 'Preseptal cellulitis in a child needs antibiotics and close review; it can spread to the orbit.',
  },
  'r2023-preseptal#4': {
    1: 'Amoxicillin is a β-lactam, not a macrolide, and plain amoxicillin doesn’t reliably cover S. aureus.',
    2: 'Amoxicillin isn’t a fluoroquinolone.',
    3: 'Amoxicillin isn’t an aminoglycoside, and preseptal cellulitis is usually treated with oral antibiotics.',
  },
  'r2023-preseptal#5': {
    1: 'Orbital cellulitis needs IV antibiotics and imaging in hospital, not oral antibiotics.',
    2: 'Orbital cellulitis is an emergency because of the risk to the optic nerve and the brain.',
    3: 'The danger is spread to the optic nerve, cavernous sinus and brain; topical drops don’t treat it.',
  },
  'r2023-chiasm-ica#0': {
    1: 'A lesion at the lateral edge of the chiasm hits the uncrossed fibres; a homonymous defect comes from behind the chiasm.',
    2: 'Bitemporal defects come from central compression of the crossing fibres, e.g. a pituitary tumour from below.',
    3: 'The crossing (nasal retina) fibres sit centrally, so a lateral lesion spares them; temporal field loss would need the crossing fibres to be hit.',
  },
  'r2023-chiasm-ica#1': {
    1: 'The cavernous sinus lies beside, not under, the chiasm, and a thrombosis causes ophthalmoplegia rather than a chiasmal field.',
    2: 'The posterior cerebral artery doesn’t supply the lateral chiasm; binasal defects are more often from glaucoma or the carotid.',
    3: 'The ophthalmic artery runs under the optic nerve into the orbit, not over the chiasm.',
  },
  'r2023-chiasm-ica#2': {
    1: 'A defect respecting the vertical midline is neurological until proven otherwise; don’t treat it as glaucoma without imaging.',
    2: 'Midline-respecting defects need confirming and investigating, not dismissing.',
    3: 'A carotid aneurysm can rupture; this needs urgent imaging, not a routine referral.',
  },
  'r2023-advanced-arg#0': {
    1: 'An arcuate defect respecting the horizontal midline isn’t a homonymous hemianopia, and −18 dB isn’t moderate.',
    2: 'An MD of −18 dB is common in advanced glaucoma with fixation still preserved.',
    3: 'The defect is arcuate, not a central scotoma, and −18 dB is far from mild.',
  },
  'r2023-advanced-arg#1': {
    5: 'An occipital lesion gives a homonymous defect respecting the vertical midline in both eyes, not an arcuate defect.',
  },
  'r2023-advanced-arg#2': {
    1: 'Asymmetric disease with a higher IOP points to a secondary cause, and gonioscopy is the key test after trauma.',
    2: 'Sleep position isn’t an accepted cause of asymmetric glaucoma; the history of trauma is.',
    3: 'Arcuate defects with raised IOP are glaucomatous; a pituitary tumour gives bitemporal loss.',
  },
  'r2023-advanced-arg#3': {
    1: 'Angle recession widens the ciliary body band; it doesn’t close the angle. Sampaolesi’s line is a pigment sign.',
    2: 'That describes pigment dispersion.',
    3: 'That describes neovascular glaucoma.',
  },
  'r2023-advanced-arg#4': {
    1: 'OHTS studied ocular hypertension; advanced glaucoma needs a lower target, and age does change the plan.',
    2: 'EMGT studied early glaucoma; glaucoma can progress at any age, and stopping treatment isn’t automatic at 80.',
    3: 'An IOP in the “normal range” doesn’t protect a badly damaged nerve; targets are lowered, not raised, for advanced disease.',
  },
  'r2023-advanced-arg#5': {
    1: 'SLT works poorly in recessed angles, and miotics can raise IOP there by cutting uveoscleral outflow.',
    2: 'Miotics can raise IOP in angle recession, and MIGS that rely on the meshwork or canal work poorly when it is scarred.',
    3: 'PGAs aren’t contraindicated after old trauma (they suit ARG well), and trabeculectomy can be done, with an antimetabolite.',
  },
  'r2023-advanced-arg#6': {
    1: 'The fellow eye carries a raised risk of open-angle glaucoma, so it needs regular monitoring.',
    2: 'The fellow eye’s raised risk doesn’t depend on it being injured.',
    3: 'The fellow eye’s risk is from predisposition, not a later hyphema.',
  },
  'r2023-pxf#0': {
    5: 'Mid-peripheral spoke-like defects are pigment dispersion; PXF defects are at the pupil margin.',
  },
  'r2023-pxf#1': {
    1: 'Capsular delamination from heat is true exfoliation, a different condition.',
    2: 'That describes pigment dispersion in young myopes.',
    3: 'PXF material is fibrillar extracellular matrix, not inflammatory fibrin, and it doesn’t respond to steroids.',
  },
  'r2023-pxf#2': {
    1: 'Sampaolesi’s line is at or in front of Schwalbe’s line, and the patient profiles are swapped.',
    2: 'Sampaolesi’s line is pigment on or anterior to Schwalbe’s line, and the angle pigment patterns of PXF and PDS differ.',
    3: 'Sampaolesi’s line is pigment, not new vessels.',
  },
  'r2023-pxf#3': {
    1: 'PXF carries a high glaucoma risk, and PXG progresses faster than POAG.',
    2: 'Many people with PXF don’t have glaucoma; treatment depends on IOP, disc and field.',
    3: 'PXF mainly causes open-angle glaucoma; angle closure is less common and laser isn’t given routinely.',
  },
  'r2023-pxf#4': {
    1: 'PGAs are best avoided with past HSV keratitis, and SLT works well in PXF.',
    2: 'Pilocarpine can worsen flake–iris rubbing and synechiae in PXF, and SLT isn’t contraindicated.',
    3: 'Timolol has little effect at night; and a PGA is the drug to avoid after HSV keratitis, not the one to switch to.',
  },
  'r2023-pds#0': {
    5: 'Flakes on the pupil margin and capsule are pseudoexfoliation.',
  },
  'r2023-pds#1': {
    1: 'In PDS the iris bows backwards, not forwards, and PDS doesn’t always lead to glaucoma.',
    2: 'Pigment comes from the iris pigment epithelium, and LOXL1 is linked to PXF.',
    3: 'PDS isn’t inflammatory, and the iris is bowed backwards.',
  },
  'r2023-pds#2': {
    1: 'Most people with PDS never develop glaucoma, and IOP spikes are linked to exercise and dilation.',
    2: 'PDS is a disease of young myopic men, and the spikes follow exercise, not reading.',
    3: 'Conversion is far lower than 75%, and PDS spikes don’t cause vomiting like angle closure.',
  },
  'r2023-pds#3': {
    1: 'Structural loss can come before field loss (pre-perimetric glaucoma).',
    2: 'A focal notch in a patient with PDS and raised IOP is most likely glaucoma; a compressive lesion would usually give pallor and a vertical-midline field.',
    3: 'Pre-perimetric glaucoma occurs in open-angle disease too.',
  },
  'r2023-pds#4': {
    1: 'Iris darkening is permanent and least noticeable in uniformly dark irides; SLT works in young patients.',
    2: 'PGAs aren’t contraindicated in PDS, and SLT can be used with lower energy in pigmented angles.',
    3: 'Pilocarpine has troublesome side effects in young myopes, and PGAs darken mixed-colour irides most, not blue.',
  },
  'r2023-pds#5': {
    1: 'β-blockers reduce exercise tolerance, and miotics carry a retinal detachment risk in myopes.',
    2: 'β-blockers aren’t contraindicated by age alone, and miotics reduce iridozonular contact rather than increase it.',
    3: 'Miotics increase outflow; they don’t reduce aqueous production like β-blockers.',
  },
  'r2023-pds#6': {
    1: 'With age the lens thickens and pushes the iris forward, so rubbing lessens, not increases.',
    2: 'PDS changes with age (burnout), which affects the findings and the IOP.',
    3: 'PDS pigment doesn’t turn into PXF material.',
  },
  'r2023-aau#0': {
    6: 'Gonioscopy is useful if the IOP is up or synechiae are suspected, but isn’t needed in every case.',
  },
  'r2023-aau#2': {
    1: 'Fluorometholone is too weak for 3+ cells, a week is too long before review, and cycloplegia is needed.',
    2: 'Stopping after 2 days causes rebound; steroids are tapered over weeks as the cells settle.',
    3: 'Loteprednol isn’t the strongest steroid, and QID with weekly review is too little for 3+ cells.',
  },
  'r2023-aau#3': {
    4: 'Cycloplegics don’t lower IOP by opening the angle.',
    5: 'Cycloplegia doesn’t clear cells by itself; the steroid still has to be tapered properly.',
  },
  'r2023-aau#4': {
    1: 'The uveitis still needs a steroid; antiviral cover protects against reactivation.',
    2: 'A past herpes history doesn’t make every uveitis herpetic, and herpetic uveitis also needs steroid.',
    3: 'Halving the steroid under-treats the uveitis and ignores the need for antiviral cover and a look for herpetic features.',
  },
  'r2023-mgd#0': {
    5: 'Dacryocystitis is an acute, tender swelling over the lacrimal sac, not lid-margin disease.',
  },
  'r2023-mgd#1': {
    1: 'Schirmer measures tear volume, not gland function, and topical chloramphenicol isn’t MGD treatment.',
    2: 'Topography isn’t part of an MGD work-up, and plugs don’t treat gland dysfunction.',
    3: 'Warm compresses and lid care are first line; doxycycline comes later.',
  },
  'r2023-mgd#2': {
    1: 'Prednisolone acetate hourly for a month is far too strong and risks IOP rise and cataract.',
    2: 'Stopping treatment lets the glands block again; check technique instead.',
    3: 'Gland removal isn’t a treatment for MGD.',
  },
  'r2023-mgd#3': {
    1: 'Doxycycline is contraindicated in pregnancy and young children, and is prescribed via the GP at a low dose for weeks to months.',
    2: 'Topical ciprofloxacin doesn’t treat MGD; oral tetracyclines work through anti-inflammatory effects.',
    3: 'Oral steroids aren’t used for MGD and do carry systemic risks.',
  },
  'r2023-vkc#0': {
    1: 'Phlyctens are single nodules with a staphylococcal or TB link; Trantas dots are many small white limbal spots.',
    2: 'A pinguecula is a degenerative, yellowish lesion, not inflammatory limbal dots.',
    3: 'Adenovirus gives follicles in the fornix, not gelatinous limbal papillae with Trantas dots.',
  },
  'r2023-vkc#1': {
    1: 'A shield ulcer is sterile and superior, caused by the allergic disease itself.',
    2: 'A shield ulcer is an epithelial defect from allergic mediators, not steroid-induced thinning.',
    3: 'A shield ulcer is an active epithelial defect, not a herpetic scar.',
  },
  'r2023-vkc#2': {
    1: 'Short steroid pulses are standard for active VKC in children, with IOP checks; in Australia olopatadine is 0.1% BD.',
    2: 'Continuous steroid risks glaucoma and cataract; antihistamine–mast cell stabilisers are the mainstay.',
    3: 'VKC is allergic, not bacterial.',
  },
  'r2023-vkc#3': {
    1: 'A steroid response usually takes 2 weeks or more.',
    2: 'Responses can occur within weeks, so even short courses need an IOP check.',
    3: 'Children respond more often and faster than adults.',
  },
  'r2023-vkc#4': {
    1: 'Year-round steroid is unsafe; the antihistamine–mast cell stabiliser is the long-term drop.',
    2: 'VKC recurs most springs until it burns out, often after puberty.',
    3: 'Surgery isn’t used to prevent VKC.',
  },
  'r2023-hyphema#0': {
    1: 'Layered blood filling up to a third of the AC is grade 1, and the blood is from intraocular vessels.',
    2: 'Grade 2 is a third to a half; a total hyphaema is grade 4. The blood is from the iris or ciliary body.',
    3: 'A microhyphaema has no level; this has layered blood, and it comes from the iris root or ciliary body.',
  },
  'r2023-hyphema#1': {
    5: 'Allergic conjunctivitis doesn’t cause a hyphema.',
  },
  'r2023-hyphema#2': {
    5: 'Gonioscopy is deferred for a few weeks after a hyphema because of rebleed risk.',
  },
  'r2023-hyphema#3': {
    1: 'Lying flat lets blood spread over the cornea and pupil, aspirin raises rebleed risk, and pilocarpine is avoided.',
    2: 'Activity raises rebleed risk, NSAIDs are avoided, and a hyphaema needs close review.',
    3: 'Head down spreads the blood over the cornea, NSAIDs are avoided, and PGAs are avoided in an inflamed eye.',
  },
  'r2023-hyphema#4': {
    1: 'An eight-ball hyphaema is dark and clotted, clears slowly and is dangerous; rebleeds are often larger.',
    2: 'A total hyphaema risks high IOP, corneal blood staining and optic atrophy.',
    3: 'Blood blocks outflow, raising IOP, and rebleeds happen in the first week, not months later.',
  },
  'r2023-hyphema#5': {
    1: 'PGAs and miotics are avoided in an inflamed eye after trauma, and an IOP of 40 needs same-day ophthalmology.',
    2: 'CAIs are avoided in sickle cell (they promote sickling), and optometrists can’t prescribe oral acetazolamide.',
    3: 'Brimonidine can cause CNS depression and apnoea in young children.',
  },
  'r2023-hyphema#6': {
    1: 'Fields and OCT are less reliable at this age, and an early IOP rise after trauma can settle.',
    2: 'Blood staining affects the cornea, not the retina, and SLT works poorly in recessed angles.',
    3: 'OCT can be done after trauma; miotics can raise IOP in angle recession.',
  },
  'r2023-steroid-young-disc#0': {
    1: 'This swaps them: bayoneting is the vessel sign, and a wedge RNFL defect is a separate finding.',
    2: 'Notching is focal rim loss, not a normal variant; bayoneting is a vessel sign, not a haemorrhage.',
    3: 'Notching and bayoneting are both cupping signs, not pallor.',
  },
  'r2023-steroid-young-disc#1': {
    5: 'Asymmetric cupping in a teenager needs a full work-up before it is called physiological.',
  },
  'r2023-steroid-young-disc#2': {
    1: 'Steroids raise IOP by reducing outflow; they don’t lower it.',
    2: 'Topical steroids carry the highest risk, and children respond more, not less.',
    3: 'A steroid response is defined by the size of the rise from baseline, and some groups are at much higher risk.',
  },
  'r2023-steroid-young-disc#3': {
    1: 'Asymmetric cupping with normal IOP in a teenager needs a neurological work-up before it is treated as glaucoma.',
    2: 'Clinical tests (pupils, colour, field) guide the referral; imaging is usually arranged via the GP or a specialist.',
    3: 'A normal IOP doesn’t make an asymmetric, cupped disc physiological.',
  },
  'r2023-steroid-young-disc#4': {
    1: 'PGAs are best avoided after uveitis, and a teenager with glaucoma needs an ophthalmologist.',
    2: 'Steroid could raise his IOP further and won’t reverse cupping.',
    3: 'Pilocarpine is poorly tolerated in young people (brow ache, induced myopia) and isn’t first line.',
  },
  'r2023-adeno-sei#0': {
    1: 'Bacterial keratitis gives an ulcer with discharge, not many small, non-staining round opacities.',
    2: 'Fungal satellites surround a main ulcer; these are uniform immune infiltrates after a viral conjunctivitis.',
    3: 'Thygeson’s doesn’t reliably follow adenovirus, and marginal keratitis is peripheral, not central.',
  },
  'r2023-adeno-sei#1': {
    1: 'Aciclovir doesn’t treat adenovirus; a steroid can be used if SEIs reduce vision.',
    2: 'SEIs are immune infiltrates, not bacterial, and hourly steroid is excessive.',
    3: 'SEIs after a viral conjunctivitis aren’t chlamydial.',
  },
  'r2023-adeno-sei#2': {
    1: 'That describes gonococcal conjunctivitis, which needs systemic treatment.',
    2: 'That describes adenovirus (pharyngoconjunctival fever).',
    3: 'That describes vernal keratoconjunctivitis.',
  },
  'r2023-adeno-sei#3': {
    5: 'Endophthalmitis isn’t a complication of adenoviral conjunctivitis.',
  },
  'r2023-episcleritis#0': {
    5: 'A history of RA or granulomatosis with polyangiitis points towards scleritis.',
  },
  'r2023-episcleritis#1': {
    1: 'Episcleritis is superficial and mild; a strong penetrating steroid adds risk without benefit.',
    2: 'Episcleritis doesn’t usually progress to scleritis, and oral steroids aren’t first line.',
    3: 'Episcleritis isn’t bacterial.',
  },
  'r2023-episcleritis#2': {
    1: 'Topical NSAIDs haven’t been shown to work for episcleritis; oral NSAIDs are used.',
    2: 'Ibuprofen is an NSAID; paracetamol isn’t.',
    3: 'Oral NSAIDs are a standard treatment for episcleritis and scleritis.',
  },
  'r2023-episcleritis#3': {
    1: 'Scleritis can threaten the eye and is often linked to systemic disease; it needs urgent referral.',
    2: 'Episcleritis isn’t a sign of a ruptured globe, and scleritis is the more serious condition.',
    3: 'Systemic associations occur in adults, not just children.',
  },
  'r2023-clpu#1': {
    1: 'That describes Pseudomonas MK, not CLPU.',
    2: 'That describes giant papillary conjunctivitis.',
    3: 'That describes corneal oedema from hypoxia.',
  },
  'r2023-clpu#2': {
    1: 'Lens wear must stop, and steroid without antibiotic cover over a staining defect is unsafe.',
    2: 'Small, peripheral, minimally staining infiltrates don’t need fortified drops in hospital.',
    3: 'Extended wear raises the risk of CLPU; it doesn’t cure it.',
  },
  'r2023-clpu#3': {
    1: 'A stronger steroid raises the risk of reactivating HSV.',
    2: 'A past viral infection doesn’t rule out a bacterial cause now.',
    3: 'A past HSV history is a key reason to be careful with steroids.',
  },
});
