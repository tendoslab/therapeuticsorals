// Why each wrong option is wrong, for the cases in mock-2025.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'yo25-apacg-dilation#0': {
    1: 'Risk is greatest at mid-dilation, not full mydriasis, and the at-risk eye is short, hyperopic and older, with a shallow chamber and thick lens.',
    2: 'Phenylephrine doesn’t block outflow at the TM. Closure comes from pupil block and iris crowding in an anatomically narrow angle.',
    3: 'Tropicamide doesn’t close Schlemm’s canal. Closure needs a narrow angle and comes from pupil block at mid-dilation.',
  },
  'yo25-apacg-dilation#1': {
    1: 'Flashes and floaters with a family history of RD need the retina examined (B-scan if no view). Van Herick is unreliable with arcus.',
    2: 'Fully dilating both eyes risks another attack, especially in the occludable fellow eye. Treat the angle first.',
    3: 'Flashes and floaters point to a tear or detachment, not CRVO. B-scan can detect detachments; OCT can’t see the periphery.',
  },
  'yo25-apacg-dilation#2': {
    1: 'Latanoprost is slow and not an acute agent. Prednisolone is still part of AAC first aid. When dilation caused the attack, pilocarpine can start early.',
    2: 'Intensive pilocarpine 4% risks systemic toxicity and can push the lens forward. Optometrists can’t arrange oral steroids directly.',
    3: 'Cycloplegics are contraindicated in angle closure because they worsen the block.',
  },
  'yo25-apacg-dilation#4': {
    1: 'Pilocarpine alone at IOP 60 won’t work (ischaemic sphincter), and this can’t wait for routine referral. Escalate to ophthalmology or ED now.',
    2: 'Timolol is contraindicated in asthma at any strength; punctal occlusion doesn’t remove the risk.',
    3: 'Brimonidine is contraindicated with MAOIs, and CAIs carry renal and pregnancy cautions. Escalate rather than give contraindicated drugs.',
  },
  'yo25-mk-dd#0': {
    1: 'A peripheral lesion with a clear zone and mild discomfort favours a sterile infiltrate, not infection.',
    2: 'Small lesions with little staining and mild pain favour sterile infiltrates.',
    3: 'Daily disposables carry the lowest MK risk. Lens type doesn’t make infection likelier here.',
  },
  'yo25-mk-dd#1': {
    4: 'Small peripheral infiltrates without high-risk features don’t routinely need scraping.',
  },
  'yo25-mk-dd#2': {
    1: 'From day 3 the PI gives 4-hourly, not 2-hourly, and up to 14 days, not a minimum of 14.',
    2: 'Day 2 is hourly, day 3 onwards is 4-hourly, and the course is up to 14 days.',
    3: 'Loading starts at q15min for 6 h, then q30min, then hourly on day 2.',
  },
  'yo25-mk-dd#3': {
    1: 'The concern is chemical inactivation of the aminoglycoside by the β-lactam, not pH precipitation.',
    2: 'They aren’t split by toxicity into day and night. They’re alternated as separate drops.',
    3: 'Fortified drops are compounded without preservative. The issue is β-lactam inactivating the aminoglycoside.',
  },
  'yo25-mk-dd#4': {
    1: 'Ciprofloxacin is B3 in Australia, not D. Tendon rupture is a systemic risk, and white precipitates are harmless.',
    2: 'C is the old US label; Australia’s TGA category is B3. Precipitates aren’t fungal.',
    3: 'It’s B3, not A. Precipitates are a known harmless effect of ciprofloxacin, not a melt.',
  },
  'yo25-mk-dd#5': {
    1: 'SCUT used moxifloxacin and prednisolone phosphate from 48 h, and found no overall benefit.',
    2: 'SCUT studied bacterial ulcers only; steroids are avoided in fungal keratitis.',
    3: 'SCUT used prednisolone phosphate after 48 h. The possible benefit was in severe central ulcers, and Nocardia did worse.',
  },
  'yo25-aau-fibrin#1': {
    1: 'In a young man with typical AAU, a small hypopyon is usually sterile HLA-B27 inflammation. Adding an antibiotic and stopping the steroid isn’t indicated.',
    2: 'HLA-B27 is far more likely than Behçet’s. Delaying the steroid lets synechiae and damage develop.',
    3: 'NSAIDs don’t dissolve fibrin, and a hypopyon needs referral within 24 h.',
  },
  'yo25-aau-fibrin#2': {
    1: 'Severe AAU starts intensively with a loading dose, not QID. Waking 2-hourly overnight isn’t the usual approach.',
    2: 'Dexamethasone isn’t the notes’ choice, and stopping without a taper causes rebound.',
    3: '24 h of q15min dosing then stopping after a week invites rebound. A cycloplegic doesn’t replace the steroid.',
  },
  'yo25-aau-fibrin#3': {
    1: 'A 10-day taper is too fast for severe fibrinous AAU and invites rebound.',
    2: 'Stopping abruptly causes rebound. Steroid response is managed by monitoring IOP, not by stopping early.',
    3: 'Switching to a weak steroid doesn’t prevent rebound; a slow taper does.',
  },
  'yo25-aau-fibrin#4': {
    1: 'Armaly grades the rise from baseline. Stopping the steroid in active uveitis causes a flare, and NSAIDs can’t replace it.',
    2: 'A rise under 6 mmHg is a low (normal) response, and PGAs are avoided in active uveitis.',
    3: 'Steroid response usually develops over 2–6 weeks, not within 24 h, and a later rise isn’t a reason to increase the steroid.',
  },
  'yo25-pds-iop35#0': {
    1: 'Glaucoma requires optic neuropathy. High IOP and pigment signs with healthy discs and fields is PDS with OHT.',
    2: 'TID severity doesn’t define glaucoma. Optic nerve damage does.',
    3: 'Provoked IOP spikes don’t define glaucoma. Disc and field damage do.',
  },
  'yo25-pds-iop35#1': {
    1: 'Pigmented TM absorbs more energy, so it needs less power, in stages, with an early IOP check.',
    2: 'More spots and pilocarpine pre-treatment aren’t the approach. Use lower energy, staged treatment and an α-agonist.',
    3: 'α-agonists help prevent spikes, and IOP must be checked after laser whether or not it hurts.',
  },
  'yo25-pds-iop35#4': {
    1: 'Drops take about 4 weeks to assess, SLT about 6–8 weeks. Annual review is too long for active PDS with IOP 35.',
    2: 'Fields every 2 years is too infrequent. Pigmentary glaucoma can progress fast when active.',
    3: 'Most drops reach effect within weeks, so review at about 4 weeks, with regular reviews after.',
  },
  'yo25-pxg#0': {
    1: 'PXG has higher, not lower, IOP, and the reason is fast progression (EMGT), not CCT.',
    2: 'PXG IOP is typically higher than POAG, and progression is faster. LPI isn’t standard before drops.',
    3: 'PXG progresses faster than POAG (EMGT), so yearly review is too infrequent.',
  },
  'yo25-pxg#1': {
    5: 'Thyroid eye disease isn’t associated with PXF.',
  },
  'yo25-pxg#2': {
    1: 'A Krukenberg spindle and iris prolapse aren’t the PXF risks, and stopping glaucoma drops before surgery is wrong.',
    2: 'PXF isn’t mainly about guttae, and technique does change: weak zonules may need capsular tension rings.',
    3: 'Capsular tension rings are often used in PXF, and sulcus placement isn’t routine.',
  },
  'yo25-pxg#3': {
    3: 'Stable fields at IOP 18 on one drop don’t need urgent referral, though PXG still needs routine ophthalmology input.',
  },
});
