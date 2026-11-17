// Why each wrong option is wrong, for the cases in emma-case-report.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  'emma-report-hzo-diagnosis#1': {
    1: 'Contagiousness lasts until the lesions crust, whatever the antiviral timing; the eye question is about complications, not time off work.',
    2: 'Late antivirals don’t call for a vitreous tap. ARN is rare, and you dilate to look for it; you don’t treat it blind.',
    3: 'Eye complications aren’t fixed at the rash: prompt antivirals roughly halve later eye disease.',
  },
  'emma-report-hzo-diagnosis#3': {
    1: 'Pseudodendrites appear in the first days and are raised epithelial lesions. JB’s epithelium was intact with negative staining.',
    2: 'Neurotrophic disease breaks down the epithelium and stains; it doesn’t make granular stromal spots under an intact surface.',
    3: 'Disciform keratitis comes around 3 months, with stromal oedema and KPs. JB had no oedema, 3–4 weeks after the rash.',
  },
  'emma-report-hzo-diagnosis#5': {
    5: 'Non-staining infiltrates under an intact epithelium in a quiet eye aren’t scraped. Scraping is for suspected microbial keratitis.',
  },
  'emma-report-hzo-management#0': {
    1: 'Raised IOP is a precaution: you can still use a steroid and watch the pressure (or pick a softer one).',
    2: 'There’s no rule to wait 4 weeks after the oral course; JB’s keratitis is immune-mediated.',
    3: 'Reduced sensation is a precaution (neurotrophic risk), not an absolute contraindication.',
  },
  'emma-report-hzo-management#1': {
    1: 'Many nummular infiltrates stay small or fade without a steroid; they don’t progress to perforation.',
    2: 'Nummular infiltrates are immune-mediated, not live viral replication, so a steroid is the treatment.',
    3: 'Topical steroids do reach the anterior stroma; an oral steroid isn’t needed.',
  },
  'emma-report-hzo-management#2': {
    1: 'All steroids can permit viral reactivation; FML is chosen for its low potency and fewer IOP rises.',
    2: 'Prednisolone acetate penetrates better than FML; it’s the stronger drop for deeper disease.',
    3: 'FML left the PBS in August 2024 and Flarex was withdrawn in June 2024.',
  },
  'emma-report-hzo-management#3': {
    1: 'They are alternatives, never combined, and optometrists can’t prescribe oral antivirals.',
    2: 'All three are approved for zoster. 400 mg bd aciclovir is the HSV prophylaxis dose.',
    3: 'Famciclovir isn’t a single weekly dose, and all three reach the ganglion when given orally.',
  },
  'emma-report-hzo-management#4': {
    1: 'VZV is less sensitive to aciclovir than HSV, and topical aciclovir doesn’t reach the ganglion.',
    2: 'FML doesn’t always reactivate VZV, and aciclovir ointment is PBS-restricted to HSV epithelial keratitis.',
    3: 'Aciclovir eye drops aren’t available in Australia; the issue is evidence, not blur.',
  },
  'emma-report-hzo-management#5': {
    4: 'Stopping a steroid abruptly invites a flare: nummular keratitis recurs when the steroid stops too fast.',
    5: 'Antivirals don’t need tapering, and 12-month prophylaxis is an HSV (HEDS) regimen.',
  },
  'emma-report-hzo-management#7': {
    5: 'Nummular keratitis doesn’t cause angle closure; gonioscopy isn’t needed at every visit.',
  },
});
