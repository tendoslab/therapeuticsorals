// Why each wrong option is wrong, for the cases in case-studies-2016.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'chlamydial-conj#0': {
    5: 'Flights and air conditioning cause dryness, not a non-resolving follicular conjunctivitis.',
  },
  'chlamydial-conj#3': {
    0: 'Chlamydia is obligate intracellular and doesn’t grow on routine agar. PCR is needed.',
    2: 'Giemsa staining is insensitive and rarely used now. PCR is the standard.',
    3: 'HLA-B27 has nothing to do with chlamydial conjunctivitis, and serology isn’t the diagnostic test. Swab PCR is.',
  },
  'chlamydial-conj#4': {
    0: 'Topical antibiotics don’t eradicate chlamydia. It needs systemic treatment, and partners must be tested and treated.',
    2: 'Longer topical courses don’t clear it, and a steroid isn’t indicated. Systemic azithromycin or doxycycline is.',
    3: 'Amoxicillin isn’t first line for chlamydia. Partners need treatment regardless of symptoms, and retesting is advised.',
  },
  'neovascular-glaucoma#1': {
    5: 'PDS raises IOP through pigment, with no ischaemia or new vessels.',
  },
  'neovascular-glaucoma#3': {
    0: 'Pilocarpine doesn’t work in a synechially closed angle and worsens inflammation. NVG has no pupil block, so LPI doesn’t help, and anti-VEGF is central.',
    2: 'There’s no pupil block in NVG, and steroid and atropine help it. PGAs are avoided in an inflamed eye.',
    3: 'NVG needs same-day referral for anti-VEGF and PRP whatever the IOP. Pilocarpine is avoided.',
  },
  'cs16-aau-joints#0': {
    0: 'It’s the other way round. Circumcorneal flush means intraocular inflammation or keratitis; redness worse in the fornices means conjunctivitis.',
    2: 'The pattern does matter: ciliary vs conjunctival injection points to different causes.',
    3: 'Uveitis gives ciliary (limbal) flush, not redness in the fornices.',
  },
  'cs16-aau-joints#2': {
    0: 'The KP types are swapped: mutton-fat KPs are granulomatous (sarcoid, TB, syphilis). IOP is often low early in AAU.',
    2: 'KP type does change the work-up, and IOP can be high with trabeculitis.',
    3: 'KP types relate to uveitis aetiology, not endophthalmitis versus fungal infection.',
  },
  'cs16-aau-joints#6': {
    1: 'FML BD is too weak, IOP must be checked at baseline, and stopping the steroid when symptoms ease causes rebound.',
    2: 'Stopping abruptly causes rebound, and pilocarpine is contraindicated in uveitis.',
    3: 'Chloramphenicol isn’t indicated, and withholding the steroid until HLA-B27 results lets synechiae and damage develop.',
  },
  'cs16-aau-joints#7': {
    0: 'PGAs are avoided in active uveitis because they’re pro-inflammatory, and a rising IOP needs co-management.',
    2: 'Stopping the steroid flares the uveitis, and IOP doesn’t always fall quickly. Treat the pressure.',
    3: 'Pilocarpine is contraindicated in uveitis.',
  },
  'cs16-hsv#0': {
    0: 'IOP matters because herpetic trabeculitis can raise it, and dilation checks the posterior segment, not the size of the dendrite.',
    2: 'Herpetic disease can raise IOP (trabeculitis), and dilation doesn’t spread the virus.',
    3: 'Raised IOP and posterior involvement can occur in HSV, so check them now.',
  },
  'cs16-hsv#1': {
    0: 'Early Acanthamoeba does cause epithelial pseudodendrites, and it’s linked to contact lenses and water, not plant trauma.',
    2: 'Acanthamoeba gives pseudodendrites without terminal bulbs, is very painful early, and doesn’t respond to antivirals.',
    3: 'Rapid onset with a hypopyon on day 1 is bacterial. Acanthamoeba is slow and often misdiagnosed early.',
  },
  'cs16-hsv#2': {
    4: 'Aciclovir doesn’t raise IOP. That’s a steroid effect.',
  },
  'cs16-hsv#3': {
    0: 'Epithelial HSV is active viral replication. Steroid makes it worse, and an antiviral or debridement is needed.',
    2: 'Untreated dendrites can enlarge or spread to the stroma. Debride from the outside in, not centrally outward.',
    3: 'The HEDS dose is prophylaxis, not treatment. Ganciclovir gel and debridement are valid options.',
  },
  'cs16-hsv#5': {
    0: 'HEDS found about 32% recurrence on placebo vs 19% on aciclovir. Adding oral to topical didn’t speed epithelial healing.',
    2: 'Prophylaxis reduced recurrence; it didn’t increase it.',
    3: 'HEDS tested oral aciclovir prophylaxis, not FML, and it worked.',
  },
  'cs16-mk-ew#0': {
    5: 'Family history of glaucoma or keratoconus doesn’t help assess an acutely painful, staining lesion.',
  },
  'cs16-mk-ew#1': {
    0: 'Necrotising stromal HSV can have an overlying epithelial defect, which is why it mimics MK.',
    2: 'HSV stromal keratitis is usually unilateral, without dendrites at that stage.',
    3: 'Terminal bulbs are a feature of epithelial dendrites, not stromal infiltrates.',
  },
  'cs16-mk-ew#2': {
    0: 'Pseudomonas isn’t normal corneal flora, and overnight wear multiplies the risk.',
    2: 'Pseudomonas isn’t resistant to all antibiotics, and daily disposables carry the lowest risk.',
    3: 'Pseudomonas is a Gram-negative bacterium, not a fungus, and dailies don’t increase risk.',
  },
  'cs16-mk-ew#3': {
    0: 'The loading phase is too short and must continue overnight. Contact lenses stop in both eyes, and review is at 24 h.',
    2: 'Loading is q15min, and you never taper below QID. Review is at 24 h.',
    3: 'Once-daily dosing is far too low for MK. Never go below QID during treatment.',
  },
  'cs16-mk-ew#4': {
    0: 'Never give topical anaesthetic to take home: it delays healing and can cause a melt.',
    2: 'Steroid on an untreated ulcer is unsafe, and cycloplegics relieve ciliary spasm pain.',
    3: 'Pilocarpine causes ciliary spasm. A cycloplegic relieves it.',
  },
  'cs16-mk-ew#6': {
    0: 'Overnight wear carries the biggest risk. Silicone hydrogels have similar infection rates, and daily disposables don’t carry more risk.',
    2: 'Silicone hydrogels didn’t eliminate MK, and dailies still carry some risk.',
    3: 'Extended (overnight) wear is the riskiest modality, not the safest.',
  },
  'cs16-adenoviral#2': {
    0: 'Follicles on both lids occur in both conditions. History, course and PCR separate them.',
    2: 'Adenovirus is acute with sore throat and fever; chlamydia is chronic. Gram stain doesn’t confirm a virus.',
    3: 'Adenovirus causes SEIs, not hypopyon or ulcers. Chlamydia doesn’t grow on blood agar.',
  },
  'cs16-adenoviral#3': {
    0: 'Incubation is 5–12 days and shedding lasts up to about 2 weeks. Hand hygiene is essential throughout.',
    2: 'Chloramphenicol doesn’t affect adenovirus or its contagiousness.',
    3: 'Adenovirus spreads mainly by hands and fomites and survives on surfaces, so towels mustn’t be shared.',
  },
  'cs16-adenoviral#4': {
    0: 'Antibiotics don’t shorten adenoviral conjunctivitis. Povidone-iodine is a diluted in-office wash, not an oral antiviral, and has contraindications.',
    2: 'Aciclovir doesn’t treat adenovirus. Povidone-iodine is an in-office wash, not a nightly home drop.',
    3: 'Steroid from day 1 may prolong viral shedding. Povidone-iodine is used diluted, never with alcohol, and not in infants.',
  },
  'cs16-adenoviral#5': {
    0: 'Short bursts cause SEI rebound, so a very slow taper is needed. IOP checks are needed within weeks.',
    2: 'SEIs are immune, not bacterial. Steroids don’t make them permanent.',
    3: 'SEIs can persist for months and reduce vision. Steroid helps when vision is affected, with a slow taper.',
  },
  'cs16-vkc#1': {
    5: 'Atopy and VKC don’t cause posterior uveitis.',
  },
  'cs16-vkc#2': {
    0: 'VKC isn’t a type III staph reaction (that’s marginal keratitis), and it usually resolves around puberty.',
    2: 'VKC isn’t an infection. It’s an allergic (type I and IV) disease.',
    3: 'VKC isn’t an autoimmune vasculitis and doesn’t progress to scleritis.',
  },
  'cs16-vkc#3': {
    0: 'Long-term antibiotics don’t prevent shield ulcers. Topical steroid pulses (with IOP checks) are needed, and shield ulcers need steroid plus antibiotic and referral.',
    2: 'Oral steroids each spring carry systemic risks. Topical dual-acting drops and pulsed steroid are the mainstay.',
    3: 'Year-round potent steroid risks glaucoma and cataract, especially in children. Mast-cell stabilisers still help, and optometrists don’t debride shield ulcers.',
  },
  'cs16-episcleritis#0': {
    5: 'Family history of glaucoma isn’t relevant to a sectoral red eye.',
  },
  'cs16-episcleritis#1': {
    0: 'It’s the reverse: episcleral vessels blanch and deep scleral vessels don’t. Scleritis is the bluish, very painful one.',
    2: 'The test is about vessel blanching, not dilating the pupil.',
    3: 'Phenylephrine doesn’t stain tissue. It blanches superficial vessels.',
  },
  'cs16-episcleritis#2': {
    0: 'The proportions and descriptions are swapped. Simple is the common (~75%) quick sectoral form, and episcleritis doesn’t become necrotising.',
    2: 'Simple episcleritis isn’t always bilateral or long-lasting, and boring pain that wakes you suggests scleritis.',
    3: 'They’re separate forms, and episcleritis doesn’t usually progress to scleritis.',
  },
  'cs16-episcleritis#4': {
    0: 'Episcleritis usually self-limits within weeks. Topical steroids do help, and oral steroids aren’t needed.',
    2: 'Episcleritis is inflammatory, not bacterial, and often recurs.',
    3: 'Episcleritis and scleritis can usually be told apart clinically. Most episcleritis doesn’t need urgent referral.',
  },
  'cs16-hzo#2': {
    0: 'Zoster is reactivation of latent VZV after chickenpox, travelling down the nerve to the skin and eye.',
    2: 'HSV doesn’t transform into VZV. HZO involves V1, not V2.',
    3: 'Zoster is a viral reactivation along a nerve, not a bacterial superinfection, and it respects the midline.',
  },
  'cs16-hzo#3': {
    0: 'Oral antivirals within 72 h are indicated for HZO at any age. Topical aciclovir doesn’t treat zoster, and contact precautions matter.',
    2: 'The HEDS dose is HSV prophylaxis. Zoster needs treatment doses early. Day-1 steroid isn’t routine, and vesicles can spread VZV.',
    3: 'Antivirals are recommended for HZO. Zoster can cause chickenpox in people who are not immune.',
  },
  'cs16-hzo#4': {
    0: 'Zostavax was replaced on the NIP by Shingrix. Neither needs repeating every 5 years, and vaccination does reduce PHN.',
    2: 'A zoster vaccine (Shingrix) is available. Vaccines prevent shingles; they don’t treat it.',
    3: 'Shingrix is for older and immunocompromised adults, not children.',
  },
  'cs16-aac#0': {
    5: 'The anterior chamber is shallow in AAC, not deep.',
  },
  'cs16-aac#1': {
    5: 'High myopia (long eye, deep chamber) protects against angle closure.',
  },
  'cs16-aac#2': {
    0: 'Optometrists can’t prescribe oral acetazolamide, and its contraindications are sulfa allergy, electrolyte, renal and hepatic issues, not β-blocker ones.',
    2: 'Acetazolamide is prescription-only and isn’t dosed every 15 minutes.',
    3: 'Oral acetazolamide is still used for AAC. Diabetes alone isn’t a contraindication, though it needs care.',
  },
  'cs16-aac#3': {
    4: 'Dilating worsens angle closure.',
  },
  'cs16-pxf-glaucoma#1': {
    5: 'NVG needs rubeosis and retinal ischaemia, and neither is present.',
  },
  'cs16-pxf-glaucoma#2': {
    0: 'Dense homogeneous pigment and a Krukenberg spindle describe PDS. Sampaolesi’s line is classically PXF.',
    2: 'PXF doesn’t typically cause angle neovascularisation.',
    3: 'Angle recession comes from trauma, not PXF.',
  },
  'cs16-pxf-glaucoma#4': {
    0: 'A PGA is first line, the target is lower, and referral is within 4 months. PXG progresses faster than POAG.',
    2: 'PXG progresses fast, so observing for a year is unsafe, and PGAs work well in PXG.',
    3: 'Pilocarpine doesn’t clear PXF material, and drops are first line, not trabeculectomy.',
  },
  'cs16-oht-to-poag#0': {
    5: 'The brand of contact lens solution doesn’t inform glaucoma risk.',
  },
  'cs16-oht-to-poag#1': {
    0: 'Occludable is judged by the posterior TM, not the ciliary body band, and without indentation.',
    2: 'Pigment or a Sampaolesi line doesn’t make an angle occludable.',
    3: 'Van Herick grades 3–4 indicate an open angle, and gonioscopy defines occludability.',
  },
  'cs16-oht-to-poag#3': {
    0: 'OHTS showed most untreated OHT does not convert (about 9.5% at 5 years). Risk-stratify instead.',
    2: 'OHT can convert, so it needs risk assessment and monitoring.',
    3: 'With open angles on gonioscopy, angle closure isn’t presumed, and LPI isn’t indicated.',
  },
  'cs16-oht-to-poag#5': {
    0: 'Depth and central involvement matter. A deep arcuate defect near fixation isn’t early.',
    2: 'Mills uses MD and point depth, not just the shape of the defect.',
    3: 'Each eye is staged on its own.',
  },
  'cs16-ntg#1': {
    5: 'RP causes waxy pallor and ring scotomas with bone-spicule pigment, not notched, cupped discs.',
  },
  'cs16-ntg#2': {
    0: 'NTG discs tend to be larger, with localised notching and haemorrhages. Vascular factors are central to the proposed mechanism.',
    2: 'Pale discs with bitemporal loss suggest compression. That’s an NTG mimic, not NTG.',
    3: 'A tilted-disc refractive scotoma is an NTG mimic, not the mechanism of NTG.',
  },
  'cs16-ntg#3': {
    0: 'Lowering IOP by 30% did reduce progression (12% vs 35%), and the risk factors were female sex, migraine and disc haemorrhage.',
    2: 'About 65% of untreated eyes didn’t progress, so not all NTG must be treated at diagnosis.',
    3: 'The target was 30%, not 20%, and progression wasn’t stopped completely.',
  },
  'cs16-ntg#4': {
    0: 'Evening timolol worsens nocturnal hypotension. PGAs are first line, and pilocarpine isn’t used.',
    2: 'LoGTS compared brimonidine with timolol, not PGAs, and SLT does lower IOP in NTG.',
    3: 'Oral acetazolamide isn’t used long-term, and drops do lower IOP in NTG.',
  },
  'cs16-pds#0': {
    4: 'White flakes on the lens capsule are pseudoexfoliation, not PDS.',
  },
  'cs16-pds#1': {
    0: 'PDS is reverse pupil block: the iris bows backwards and rubs on the zonules.',
    2: 'The pigment comes from the iris pigment epithelium, not the lens.',
    3: 'PDS is mechanical, not inflammatory, and steroids don’t reverse it.',
  },
  'cs16-pds#2': {
    0: 'PDS affects young myopic Caucasians, with PG more common in men. Most don’t convert, and it burns out with age.',
    2: 'PDS is a young-adult myopic condition, and IOP at presentation does predict conversion.',
    3: 'That describes PXF demographics. PDS is young, myopic and often male.',
  },
  'cs16-secondary-glaucomas#1': {
    0: 'Miotics and PGAs are avoided in hyphaema, as is aspirin. β-blockers and cycloplegics are used.',
    2: 'Topical CAIs are avoided in sickle cell, NSAIDs increase bleeding, and steroid helps.',
    3: 'High IOP in hyphaema needs treatment now, and a cycloplegic and steroid are standard.',
  },
  'cs16-secondary-glaucomas#2': {
    0: 'Only about 6–9% develop glaucoma, and risk persists for decades. Lifelong monitoring is needed, and the fellow eye too.',
    2: 'Recession leads to glaucoma (from TM damage), not hypotony.',
    3: 'Recession isn’t pupil block, and LPI doesn’t help. Lifelong monitoring is needed.',
  },
  'cs16-secondary-glaucomas#3': {
    4: 'Fuchs heterochromic iridocyclitis responds poorly to steroids, and long-term use is avoided.',
  },
  'cs16-secondary-glaucomas#4': {
    0: 'Steroid response is an open-angle TM mechanism, not angle closure, and pilocarpine or LPI isn’t the treatment.',
    2: 'Steroids reduce outflow; they don’t increase production. More steroid makes it worse.',
    3: 'The pressure rise is real, not a CCT artefact.',
  },
});
