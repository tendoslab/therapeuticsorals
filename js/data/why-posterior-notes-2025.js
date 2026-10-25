// Why each wrong option is wrong, for the cases in posterior-notes-2025.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'pn-pvd-break#1': {
    4: 'Pigment in the vitreous after new flashes means a retinal break until proven otherwise, not PDS. Gonioscopy doesn’t help.',
  },
  'pn-crao#0': {
    1: 'CRAO is an ocular stroke and needs an ED with a stroke unit now. Massage and timolol are unproven, and anti-VEGF isn’t the treatment.',
    2: 'The stroke risk is highest right after a CRAO, so this can’t wait 48 h. GCA must also be excluded the same day.',
    3: 'Optometrists can’t give oral acetazolamide, and it doesn’t treat CRAO. She needs a stroke assessment now.',
  },
  'pn-gca#0': {
    5: 'Fluorescein angiography isn’t the first test. Bloods (ESR, CRP, platelets) and same-day steroids come first.',
  },
  'pn-gca#1': {
    1: 'A week’s delay risks blindness in the other eye. Steroids start the same day.',
    2: 'Steroids start on suspicion. The biopsy stays positive for a week or more after starting.',
    3: 'This presentation is classic GCA. Steroids shouldn’t wait for MRI.',
  },
  'pn-amd#1': {
    4: 'There’s no evidence AREDS2 prevents AMD in people without intermediate disease.',
    5: 'AREDS didn’t show a benefit for cataract.',
  },
  'pn-amd#2': {
    1: 'Intermediate AMD isn’t treated with injections. Monitor with Amsler and refer if it turns neovascular.',
    2: 'Intermediate AMD needs closer review than 2-yearly, and symptomatic neovascular AMD needs referral within a week.',
    3: 'Amsler changes may mean neovascular AMD, which needs referral within a week, not 3 months.',
  },
  'pn-diabetes#1': {
    1: 'Pregnancy can accelerate diabetic retinopathy. It doesn’t slow it.',
    2: 'Mydriatics aren’t contraindicated in pregnancy, and retinopathy can progress at any stage.',
    3: 'Monitoring is guided by the baseline grade, not monthly for everyone.',
  },
  'pn-diabetes#2': {
    1: 'Fenofibrate is oral and outside optometric prescribing.',
    2: 'Fenofibrate slows existing retinopathy. It isn’t for preventing retinopathy at diagnosis.',
    3: 'Fenofibrate doesn’t replace anti-VEGF for centre-involving DMO.',
  },
  'pn-hcq#0': {
    5: 'Taking it with food doesn’t affect retinal toxicity risk.',
  },
  'pn-hcq#1': {
    1: 'A baseline exam is needed, and screening starts at 5 years (sooner if high risk). OCT is a key screening test.',
    2: 'Hydroxychloroquine toxicity is often not reversible, so screen with OCT and fields rather than wait for symptoms.',
    3: 'Toxicity is rare in the first years. Annual screening from 5 years is enough unless risk is high.',
  },
  'pn-cscr#0': {
    5: 'Cataract surgery is linked to CMO, not CSCR.',
  },
  'pn-cscr#1': {
    1: 'Steroids worsen CSCR, and it isn’t CMO.',
    2: 'Serous detachment with a thick choroid and no blood or drusen in a young man is CSCR, not neovascular AMD.',
    3: 'Laser isn’t first line for a first episode. Most resolve with observation.',
  },
  'pn-horner#0': {
    1: 'Anisocoria worse in the dark means the small pupil can’t dilate, so the small one is abnormal.',
    2: 'With ptosis, a dilation lag and recent neck pain, this isn’t physiological.',
    3: 'Ptosis doesn’t make the pupil smaller. This is a sympathetic defect.',
  },
  'pn-horner#2': {
    1: 'An acute painful Horner after neck strain suggests carotid dissection, which needs imaging today.',
    2: 'Pancoast tumour is one cause, but acute painful Horner after neck strain means dissection until proven otherwise.',
    3: 'Post-exercise Horner with neck pain isn’t a migraine variant. Dissection risks a stroke.',
  },
  'pn-myasthenia#0': {
    5: 'Myasthenia never affects the pupil. An enlarged pupil suggests a third nerve palsy.',
  },
  'pn-iih#0': {
    1: 'Disc haemorrhages, obscured vessels, no SVP and headaches with obscurations point to true papilloedema, not drusen.',
    2: 'Papilloedema needs same-day imaging to exclude a mass or venous sinus thrombosis, and optometrists can’t start acetazolamide.',
    3: 'IIH can cause permanent vision loss, and other causes must be excluded first. It’s urgent.',
  },
  'pn-iih#1': {
    5: 'Paracetamol isn’t associated with intracranial hypertension.',
  },
  'pn-uveitic-iop-script#0': {
    1: 'PGAs are avoided in inflamed eyes because they can worsen inflammation and CMO.',
    2: 'Pilocarpine is contraindicated in uveitis.',
    3: 'Stopping the steroid abruptly risks rebound. Taper as the AC allows, and treat the IOP now.',
  },
  'pn-uveitic-iop-script#1': {
    4: 'A script should name the active ingredient and strength first, not the brand alone.',
    5: '“2 drops” is the wrong dose, and the eye must be specified. It’s 1 drop, right eye, twice daily.',
  },
  'pn-uveitic-iop-script#2': {
    1: 'A “normal” IOP isn’t a target in progressing glaucoma. It needs a lower individualised target.',
    2: 'Targets must be revisited when the disease progresses.',
    3: 'Progression means the target was too high, so lower it substantially; any reduction isn’t enough.',
  },
});
