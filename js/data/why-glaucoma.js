// Why each wrong option is wrong, for the cases in glaucoma.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'aac-first-aid#1': {
    1: 'PSS has an open angle, a normal pupil and little oedema or pain. It’s unilateral and occurs in younger adults.',
    2: 'PSS has minimal cells, no synechiae and no hypopyon. It’s a quiet eye with a few fine KPs, in adults rather than children.',
    3: 'The IOP spikes sharply during PSS attacks (often 40–60), the eye is quiet with no discharge, and it affects adults aged 20–50.',
  },
  'aac-first-aid#2': {
    0: 'Corneal oedema stops you seeing the angle in the affected eye. The quickest support is the fellow eye’s angle.',
    2: 'Timolol won’t clear the cornea quickly, and waiting delays the diagnosis. Look at the fellow eye now.',
    3: 'Never dilate the fellow eye of an AAC patient: it’s often occludable and could close too.',
  },
  'aac-first-aid#4': {
    0: 'She has asthma, and timolol is a non-selective β-blocker that can trigger bronchospasm.',
    5: 'Atropine dilates the pupil and deepens the closure, so it’s contraindicated in angle closure.',
    6: 'Above ~40 mmHg the sphincter is ischaemic and won’t respond, and pilocarpine can push the lens forward. Hold it until IOP falls and ophthalmology agrees.',
    7: 'PGAs take hours to work, so they’re not the acute agent.',
  },
  'aac-first-aid#6': {
    0: 'Endorsed optometrists in Australia prescribe topical ocular medicines only. Oral acetazolamide needs a medical prescriber.',
    1: 'Acetazolamide is prescription-only (S4). A pharmacist can’t supply it on an optometrist’s note.',
    3: 'Oral acetazolamide is a key part of lowering a 55 mmHg IOP. Arrange it through a doctor or ED.',
  },
  'aac-first-aid#7': {
    0: 'Repeating a tablet that keeps coming back up wastes time. The hospital switches to IV acetazolamide or mannitol.',
    2: 'Atropine is contraindicated in angle closure because it worsens the block.',
    3: 'IV prednisolone isn’t the IOP treatment, and intensive pilocarpine 4% is dangerous (systemic toxicity, lens moves forward).',
  },
  'aac-first-aid#8': {
    0: 'Pilocarpine constricts the pupil; it doesn’t dilate it. The threshold is about 40 mmHg, and ophthalmology must agree on the mechanism.',
    2: 'The issue isn’t absorption. The sphincter is ischaemic above ~40 mmHg, and ophthalmology must confirm a pupil-block mechanism.',
    3: 'It’s held because the ischaemic sphincter can’t respond and the lens can move forward, not because it stings. Ophthalmology’s agreement is still needed.',
  },
  'chronic-angle-closure#0': {
    0: 'Dilating before you know the angle is open risks precipitating closure. Gonioscopy comes first.',
    2: 'Provocative tests aren’t the first step. Gonioscopy shows directly whether the angle is closed.',
    3: 'Pachymetry measures corneal thickness and says nothing about angle closure. Gonioscopy does.',
  },
  'chronic-angle-closure#2': {
    1: 'Without raised IOP or PAS the right eye is a suspect (PACS), and the left has no optic neuropathy, so it’s PAC, not PACG.',
    2: 'The right angle is occludable on the defined criteria (PACS), and PAS or raised IOP make the left eye PAC.',
    3: 'Glaucoma requires optic neuropathy. With normal discs and fields, PAS plus raised IOP is PAC.',
  },
  'chronic-angle-closure#5': {
    0: 'Long-term pilocarpine isn’t first line. LPI and/or lens extraction treats the mechanism, and EAGLE supports early lens extraction.',
    2: 'Angle closure needs its mechanism treated (LPI ± lens extraction) and is managed with ophthalmology. A PGA alone isn’t enough.',
    3: 'Don’t dilate a closed angle. SLT needs a visible open angle and doesn’t treat pupil block.',
  },
  'chronic-angle-closure#6': {
    0: 'ZAP found only a small absolute benefit (high number needed to treat), so routine prophylactic LPI isn’t needed. Access to care does change the decision.',
    2: 'ZAP was a Chinese LPI trial, not lens extraction. EAGLE studied lens extraction in PAC/PACG, not PACS.',
    3: 'ZAP studied PACS and found a small benefit from LPI. Giving rural patients pilocarpine isn’t the answer; their poorer access is an argument for LPI.',
  },
  'pxf#1': {
    0: 'The two are swapped. Dense homogeneous TM pigment, a Krukenberg spindle and mid-peripheral TIDs are PDS; flakes and patchy pigment are PXF.',
    2: 'Mid-peripheral slit TIDs and posterior iris bowing belong to PDS, and white capsular flakes to PXF. PDS affects young myopes, not hyperopes.',
    3: 'The demographics are swapped. PXF is older and often Scandinavian; PDS is young myopic adults, often men.',
  },
  'pxf#3': {
    0: 'PXF was the fastest, not the slowest. NTG was the slowest (about −0.4 dB/year).',
    2: 'PXF progressed much faster than POAG in EMGT, at about −3.1 dB/year.',
    3: 'The numbers are ten times too large. Untreated PXF was about −3.1 dB/year.',
  },
  'pxf#5': {
    0: 'Timolol lowers IOP less than a PGA and has respiratory and cardiac risks. A PGA is first line if there are no contraindications.',
    1: 'Betaxolol is weaker than a PGA and isn’t first line.',
    3: 'Brimonidine is an option, but it lowers IOP less, is dosed BD–TID and often causes allergy. A PGA is first line.',
  },
  'pxf#6': {
    0: 'Betaxolol is β1-selective, not non-selective. It lowers IOP less than timolol and still needs caution in asthma.',
    2: 'Betaxolol is β1-selective, which is what reduces bronchospasm, not bradycardia. It lowers IOP less than timolol.',
    3: 'Betaxolol is a β1-selective blocker, not an α2-agonist. That describes brimonidine.',
  },
  'pxf#7': {
    0: 'PXG is a secondary glaucoma, outside routine collaborative care, and OBA requires referral after starting treatment. SLT often works well initially in PXF.',
    2: 'You can start treatment and then refer. Stopping the latanoprost would leave fast-progressing PXG untreated.',
    3: 'The referral window is about 4 months, not 12, and latanoprost reaches full effect within weeks, so review at about 4 weeks.',
  },
  'pxf#8': {
    0: 'PXF has a high conversion risk and IOP can rise quickly, so it needs fields too, every 6–12 months.',
    2: 'PXF needs closer monitoring than routine care because IOP can spike and conversion is common.',
    3: 'Structure and function should be monitored too. Damage can occur at any IOP.',
  },
  'pds#1': {
    0: 'Population data give about 10% at 5 years. Risk factors are male sex, myopia, a Krukenberg spindle and higher IOP.',
    2: 'Conversion is around 10% at 5 years, not 1%, and those are PXF/POAG risk factors, not PDS ones.',
    3: 'The figures are from Siddiqui (Olmsted County), not EMGT, and the risk factors are male sex, high myopia, a spindle and higher IOP.',
  },
  'pds#3': {
    0: 'The field is inverted. Superotemporal RNFL loss gives an inferior defect.',
    2: 'Homonymous defects come from post-chiasmal lesions, not glaucoma.',
    3: 'Glaucoma spares fixation until late. Early loss is arcuate or a nasal step.',
  },
  'pds#4': {
    1: 'Moderate needs an MD of −6 to −12 dB or a central point below 15 dB. An MD of −3.1 with no central involvement is early.',
    2: 'Advanced needs an MD worse than −12 dB or deep central loss.',
    3: 'Hodapp–Parrish–Anderson exists to grade glaucomatous fields.',
  },
  'pds#6': {
    0: 'Pigment release falls with age as the lens grows and the pupil shrinks, so PDS often burns out.',
    2: 'PDS doesn’t usually convert to angle closure, and the changes are gradual, not universal by 40.',
    3: 'TM pigment fades, often more superiorly (the reversal sign), and the spindle can lessen. That’s why burnt-out PDS can be mistaken for POAG.',
  },
  'oht-disc-haem#1': {
    5: 'A physiologically large cup is a normal variant and doesn’t bleed.',
  },
  'oht-disc-haem#3': {
    0: 'The mean CCT is about 540–550 µm, so 585 µm is thicker than average, not thinner.',
    2: '585 µm is above the population mean, and CCT affects both Goldmann readings and OHTS risk across the range.',
    3: 'Goldmann overestimates in thick corneas, and thick CCT was protective in OHTS.',
  },
  'oht-disc-haem#4': {
    0: 'Disc haemorrhages are a strong risk factor, not a normal finding, and CCT “correction” is unreliable. Review in 3 months, not 12.',
    2: 'A disc haemorrhage raises the risk but isn’t diagnostic on its own. Urgent 24-hour referral isn’t indicated.',
    3: 'IOP 26 isn’t normal-tension. CCT correction formulas don’t make it so, and MRI isn’t indicated.',
  },
  'oht-disc-haem#5': {
    0: 'OHTS aimed for ≥20% reduction and ≤24 mmHg, and treatment roughly halved conversion (9.5% to 4.4%).',
    2: 'Untreated conversion was 9.5% at 5 years, falling to 4.4% with treatment.',
    3: 'Treatment significantly reduced conversion in OHTS, roughly halving it.',
  },
  'oht-disc-haem#6': {
    0: 'PGAs are B3 and best avoided throughout pregnancy (prostaglandins are uterotonic). Brimonidine and timolol aren’t category D.',
    2: 'Oral acetazolamide is B3, not A, and isn’t the safest choice. SLT is a good option in pregnancy.',
    3: 'Brimonidine is B3, not A, and must stop before delivery and during breastfeeding (infant CNS depression). PGAs are avoided throughout.',
  },
  'oht-disc-haem#7': {
    1: 'Aqueous production is highest by day, not at night. Nocturnal hypotension is a real reason to avoid evening dosing.',
    2: 'Absorption doesn’t differ by time of day. The reason is aqueous physiology and nocturnal hypotension.',
    3: 'There is a reason: β-blockers barely work at night when aqueous production is low, and evening doses add hypotension risk.',
  },
  'oht-slt#0': {
    5: 'MRI is for atypical or neurological features, not routine OHT.',
  },
  'oht-slt#2': {
    5: 'Myopia isn’t in the OHTS/EGPS risk model, although it’s a clinical risk for POAG.',
    6: 'Sex wasn’t a significant baseline risk factor in the OHTS model.',
  },
  'oht-slt#3': {
    0: 'LiGHT found comparable quality of life and fewer surgeries with SLT first.',
    2: 'About 74% were drop-free at 3 years, which supports SLT as a genuine first-line option.',
    3: 'LiGHT, not EAGLE, studied SLT in open-angle glaucoma and OHT. EAGLE studied lens extraction in angle closure.',
  },
  'oht-slt#4': {
    0: 'β-blockers blunt exercise heart rate and cause fatigue, which matters in an active man. CAIs and brimonidine are reasonable second agents, not third line.',
    2: 'Pilocarpine causes brow ache and fluctuating myopia, which are poorly tolerated in young patients. There’s no age rule against timolol or brimonidine.',
    3: 'Oral acetazolamide is poorly tolerated long-term (paraesthesia, fatigue, kidney stones) and isn’t used for OHT.',
  },
  'poag-central#0': {
    0: 'A 30-2 has even sparser central spacing. A 10-2 maps paracentral loss.',
    2: 'Kinetic perimetry is for neurological and peripheral mapping, not fine central glaucomatous loss.',
    3: 'An Amsler grid is too crude to map glaucomatous paracentral defects.',
  },
  'poag-central#1': {
    0: 'Location matters. Hodapp upgrades the stage when central points are depressed.',
    2: 'Advanced needs an MD worse than −12 dB or a central point at 0 dB. A paracentral defect alone makes it at least moderate, and drops are still appropriate.',
    3: 'Hodapp can grade central defects; that’s part of its criteria.',
  },
  'poag-central#2': {
    0: 'A PGA, not timolol, is first line. A 10% reduction is too little, and referral is within 4 months, not 12.',
    2: 'Latanoprost is dosed at night, and 50% is unrealistic. Referral is within 4 months, not 24 hours.',
    3: 'Endorsed optometrists can start POAG treatment and then refer. Delaying treatment risks further loss.',
  },
  'poag-central#3': {
    0: 'OHTS showed most OHT eyes don’t convert (about 9.5% at 5 years untreated). The right eye still needs monitoring.',
    2: 'Asymmetric POAG often becomes bilateral, so the right eye needs ongoing monitoring.',
    3: 'Using a different class “to tell which works” isn’t sound practice. A PGA in one eye only does cause cosmetic asymmetry worth discussing.',
  },
  'poag-central#5': {
    0: 'There’s no universal target. A young patient who is progressing needs adherence checks, confirmation and escalation, not a 12-month wait.',
    2: 'Progression doesn’t mean PGA resistance. SLT and surgery aren’t reserved for older patients; younger ones need tighter control.',
    3: 'Progression at IOP 15 isn’t automatically neurological. Check adherence and fluctuation, confirm, then escalate.',
  },
  'ntg#0': {
    6: 'MRI is for atypical features such as young age, pallor, vertical-midline respect or colour loss, not every NTG patient.',
  },
  'ntg#1': {
    0: 'It’s the other way round. Ishihara screens congenital red–green defects; the D15 detects acquired and tritan defects.',
    2: 'The D15 is a colour arrangement test, not a field test.',
    3: 'Ishihara misses tritan and many acquired defects, and the OBA doesn’t mandate the D15. They don’t give the same result.',
  },
  'ntg#2': {
    6: 'An inferior notch matching a superior arcuate defect is classic glaucoma. It doesn’t need imaging.',
  },
  'ntg#3': {
    0: 'CNTGS took 30% from the untreated baseline (mean), not from the peak.',
    2: 'OHTS used 20% for OHT. The NTG evidence (CNTGS) supports 30% from baseline.',
    3: 'NTG damage happens below 21 mmHg, so a lower target (30% below baseline) is needed.',
  },
  'ntg#5': {
    0: 'Evening timolol risks nocturnal hypotension and reduced optic nerve perfusion. PGAs don’t reduce perfusion, and LoGTS favoured brimonidine.',
    2: 'PGAs are dosed at night for 24-hour control. LoGTS supports brimonidine in NTG.',
    3: 'Oral acetazolamide isn’t used long-term for NTG. Topical PGAs are effective, and brimonidine is used medically (LoGTS).',
  },
  'ntg#6': {
    0: 'Doubling up doesn’t lower IOP further and adds side effects. Just carry on the next night.',
    2: 'Twice-daily latanoprost can be less effective than once daily, and tripling up is never right.',
    3: 'Stopping leaves her glaucoma untreated. Missing a dose doesn’t need a week’s break.',
  },
  'angle-recession#2': {
    1: 'Grade II is 1/3 to 1/2. More than half is grade III, and this one was under a third.',
    2: 'A total (“8-ball”) hyphaema is grade IV. This one filled less than a third.',
    3: 'A layered hyphaema isn’t microhyphaema, which is suspended red cells only.',
  },
  'angle-recession#3': {
    0: 'The risk is about 6–9%, higher with more than 180° of recession, and often delayed for years.',
    2: 'The risk relates to the extent of recession and can appear years later.',
    3: 'About 6–9% develop glaucoma, rising with more than 180° of recession, and onset can be decades later.',
  },
  'angle-recession#4': {
    0: 'The water-drinking test is a stress test of outflow reserve. Diurnal phasing measures real fluctuation.',
    2: 'One old reading tells you nothing about fluctuation now.',
    3: 'CCT doesn’t measure fluctuation. Phasing does.',
  },
  'angle-recession#5': {
    0: 'PGAs increase uveoscleral outflow, which these eyes rely on, so they work well in chronic ARG.',
    1: 'Aqueous suppressants like timolol work regardless of the scarred TM.',
    2: 'CAIs reduce aqueous production and work well in ARG.',
  },
  'steroid-response#0': {
    0: 'Steroids reduce outflow through the TM; they don’t increase aqueous production.',
    2: 'Steroid response is an open-angle mechanism, not angle closure.',
    3: 'The resistance is in the trabecular meshwork (ECM build-up, myocilin), not uveoscleral outflow.',
  },
  'steroid-response#1': {
    5: 'Older hyperopes aren’t a recognised responder group. Myopes, children, POAG patients and type 1 diabetics are.',
  },
  'steroid-response#2': {
    1: 'Only about 5% are high responders. 30% high is far too many.',
    2: 'About a third respond moderately and about 5% highly. These figures are too low.',
    3: 'The thresholds are wrong: high is a rise of more than 15 mmHg and moderate is 6–15 mmHg.',
  },
  'steroid-response#3': {
    1: 'These are “soft” steroids with lower penetration and IOP risk.',
    2: 'Sodium phosphate is a hydrophilic solution that penetrates poorly, and FML is weak.',
    3: 'Both are weaker steroids with less penetration and IOP risk.',
  },
});
