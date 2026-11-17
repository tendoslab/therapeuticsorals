// Why each wrong option is wrong, for the cases in jenn-case-report.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'jenn-report-aau-diagnosis#2': {
    1: 'Two episodes don’t make it chronic: chronic means relapse within 3 months of stopping treatment.',
    2: 'The first episode was cleared of posterior involvement, and this one has no vitreous cells.',
    3: 'Posterior synechiae are common in non-granulomatous AAU; granulomatous needs mutton-fat KPs or nodules.',
  },
  'jenn-report-aau-diagnosis#3': {
    1: 'That describes sarcoid uveitis, not Posner-Schlossman.',
    2: 'That describes Behçet’s disease, not Posner-Schlossman.',
    3: 'That describes Fuchs uveitis syndrome, which Jenn did discuss.',
  },
  'jenn-report-aau-diagnosis#5': {
    4: 'An AC tap is for suspected viral or atypical uveitis, not every patient at the first visit.',
    5: 'MRI is only for symptoms or intermediate uveitis that suggest MS.',
  },
  'jenn-report-aau-diagnosis#6': {
    1: 'Ocular toxocariasis is a posterior disease of children; eosinophilia alone doesn’t diagnose it.',
    2: 'Eosinophils don’t rise in spondyloarthropathies, and a negative HLA-B27 is negative.',
    3: 'A drop allergy shows on the lids and conjunctiva, not in the blood count.',
  },
  'jenn-report-aau-management#0': {
    1: 'Topical steroid drops don’t affect cholesterol or fenofibrate.',
    2: 'A healed abrasion from 2024 is no contraindication to a steroid.',
    3: 'Treat a G3 AC now; a steroid doesn’t change an HLA-B27 result.',
  },
  'jenn-report-aau-management#1': {
    1: 'There is no prostate issue with FML; it is simply too weak for most AAU.',
    2: 'Pred Forte is a suspension too and must be shaken.',
    3: 'Hourly dosing is a loading phase for severity, not because the drug wears off in an hour.',
  },
  'jenn-report-aau-management#2': {
    1: 'Atropine doesn’t lower IOP, and a home cycloplegic is fine with an open angle.',
    2: 'Atropine doesn’t kill inflammatory cells; the steroid is the main treatment.',
    3: 'Atropine is a treatment here (spasm, synechiae), not a test for an RAPD.',
  },
  'jenn-report-aau-management#4': {
    1: 'A steroid cataract takes months of use, not a week, and the lens was clear.',
    2: 'Pupils were reactive, the disc normal, and he improved by day 15 without treatment for neuritis.',
    3: 'The IOP was unchanged at 10 mmHg and the cornea was clear.',
  },
  'jenn-report-aau-management#5': {
    1: 'Duration follows the AC response, not a fixed day count, and stopping abruptly invites rebound.',
    2: 'Steroids are tapered whatever the overnight dosing; stopping in one step invites rebound.',
    3: 'Rebound after an abrupt stop is common; it doesn’t mean infection was missed.',
  },
  'jenn-report-aau-management#6': {
    5: 'A scrape is only for a new corneal lesion, not routine at every visit.',
  },
  'jenn-report-aau-management#7': {
    1: 'Recurrent AAU is managed topically by optometrists with co-management; it isn’t an emergency.',
    2: 'Idiopathic is a label of exclusion; the GP work-up and ophthalmology still have a role.',
    3: 'Biologics aren’t automatic, and the GP organises the work-up.',
  },
});
