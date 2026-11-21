// Why each wrong option is wrong, for the cases in recalls-2014-2020.js. Keyed "caseId#step" → { option index: reason }.
window.WHY = window.WHY || {};
Object.assign(window.WHY, {
  // ---- 2020 glaucoma
  'r2020-ntg-workup#0': {
    1: 'The distinction changes the work-up (rule out other causes) and the target (CNTGS used 30% from baseline).',
    2: 'Many NTG eyes do progress; CNTGS showed treatment slowed field loss in those that did.',
    3: 'Family history is a risk factor for both POAG and NTG; relatives of either should be checked.',
  },
  'r2020-ntg-workup#1': {
    6: 'About half of untreated NTG eyes in CNTGS didn’t progress in 5 years, so treatment isn’t automatic at the first visit.',
  },
  'r2020-ntg-workup#2': {
    5: 'An attack in progress gives a very high IOP, not 12 mmHg.',
  },
  'r2020-ntg-workup#3': {
    1: 'Pilocarpine isn’t first-line for either; PACG needs the angle opened by laser or lens extraction.',
    2: 'NTG has an open angle; iridotomy has no role. PACG is treated by opening the angle first.',
    3: 'Drops, laser and lens surgery come before trabeculectomy, and optometrists can start treatment for open-angle glaucoma.',
  },
  'r2020-iop-check#0': {
    6: 'Without the baseline, target, drops and history you can’t judge today’s reading or choose a safe change.',
  },
  'r2020-iop-check#1': {
    1: 'A fall that misses the target isn’t good enough; the target exists so you know when to step up treatment.',
    2: '23 mmHg on treatment is still above a 20–30% target from 27; stopping the drop would let IOP rise back.',
    3: 'Treatment is stepped up first (adherence, second drop, SLT); surgery isn’t the next step after one reading.',
  },
  'r2020-iop-check#2': {
    1: 'IOP varies through the day, so readings are compared at the same time of day; the timing isn’t about refills.',
    2: 'Most drops reach full effect within weeks, not 6 months; waiting that long leaves an uncontrolled eye untreated.',
    3: 'Drops don’t reach full effect in 48 hours (PGAs take a few weeks), and IOP isn’t reliably lowest at 6 pm.',
  },
  'r2020-iop-check#3': {
    1: 'A new defect on treatment must be confirmed and acted on; waiting 12 months risks further loss.',
    2: 'The OBA guidelines require referral within 4 months of starting treatment, and sooner if it progresses.',
    3: 'Glaucoma drops don’t cause field defects; progression goes to an ophthalmologist, not the GP.',
  },
  'r2020-fhx-preperimetric#2': {
    1: 'Structural loss often comes before field loss; repeatable RNFL thinning with raised IOP is a reason to treat.',
    2: 'Glaucoma commonly shows RNFL thinning before a field defect; a compressive lesion is suspected from other features.',
    3: 'Age-related thinning is slow and diffuse; thinning beyond that with IOP 23–24 and a family history needs action.',
  },
  'r2020-fhx-preperimetric#3': {
    1: 'Latanoprost is 0.005% once at night; asthma and heart block are β-blocker contraindications.',
    2: 'PGAs are dosed at night, usually in both eyes; sulfonamide allergy and kidney stones belong to CAIs.',
    3: 'Latanoprost is 0.005% once daily (more often is less effective); children under 2 and MAOIs belong to brimonidine.',
  },
  'r2020-fhx-preperimetric#4': {
    1: 'Herpes doesn’t bar every drop, and topical timolol does reach the bloodstream enough to cause bronchospasm and bradycardia.',
    2: 'β-blockers have no antiviral effect, and they are the drop to avoid with heart and lung disease.',
    3: 'Lifelong aciclovir isn’t needed to use a drop, and long-term oral acetazolamide has more side effects than drops.',
  },
  'r2020-low-iop-progressing#0': {
    6: 'IOP can’t be judged from a disc photo; it has to be measured.',
  },
  'r2020-low-iop-progressing#1': {
    1: 'Early is an MD better than −6 dB; −8 dB is moderate.',
    2: 'MD is part of the staging; an arcuate defect with MD −8 dB and no central involvement is moderate.',
    3: 'End-stage means only a central or temporal island is left; an MD of −8 dB is far from that.',
  },
  'r2020-low-iop-progressing#2': {
    1: 'The grey-scale is the least useful plot for progression; compare deviation values point by point.',
    2: 'Fixation losses measure reliability, not progression.',
    3: 'Progression can be judged by comparing printouts by hand; waiting for software delays treatment.',
  },
  'r2020-low-iop-progressing#3': {
    1: 'Damage with progression is glaucoma, not OHT, and timolol at night can lower BP and nerve perfusion in NTG.',
    2: 'Pilocarpine isn’t first-line, and progression can happen at any IOP; an individual target is needed.',
    3: 'Optic neuritis presents with acute vision loss and pain, not cupping with arcuate loss; steroid would raise IOP.',
  },
  'r2020-low-iop-progressing#4': {
    4: 'Lower IOP lowers the risk of progression; the problems are hypotony and the cost of over-treatment.',
  },
  'r2020-arg-trauma#0': {
    1: 'The 24-2 doesn’t test the full 90° field, and glaucoma usually starts within the central 30°.',
    2: 'The 24-2 is a threshold test, and threshold values are what allow staging and progression analysis.',
    3: 'That describes the 10-2; glaucoma defects often start outside the central 10°.',
  },
  'r2020-arg-trauma#2': {
    1: 'Trauma is a key glaucoma history question, and a widened ciliary body band in one eye is recession, not normal.',
    2: 'Torn iris processes and a widened band show recession of an open angle, not angle closure.',
    3: 'A matching rim and field defect with high IOP is glaucoma, not a corneal scar or eye rubbing.',
  },
  'r2020-arg-trauma#3': {
    1: 'The late picture is a quiet white eye; ongoing bleeding isn’t a feature years later.',
    2: 'Early changes (hyphaema, iritis, IOP spikes) are common in the first weeks, so injured eyes need checking.',
    3: 'Late glaucoma from a scarred meshwork doesn’t resolve; it is the late phase that causes the chronic glaucoma.',
  },
  'r2020-arg-trauma#4': {
    1: 'Pilocarpine can raise IOP in recessed angles by reducing uveoscleral outflow; PGAs are the useful first drop.',
    2: 'Steroid doesn’t treat the scarred meshwork, and it can raise IOP.',
    3: 'Atropine doesn’t treat open-angle glaucoma, and glaucoma drops do work in angle recession.',
  },
  'r2020-arg-trauma#5': {
    1: 'The fellow eye is at some extra risk, but it isn’t certain to develop glaucoma; monitor rather than treat a normal eye.',
    2: 'A normal eye isn’t treated to match the other cosmetically.',
    3: 'The fellow eye can develop glaucoma too, so it is checked at every visit.',
  },
  'r2020-slt-vs-drops#0': {
    1: 'Long-term oral acetazolamide has too many side effects for first-line use, and 10 mmHg isn’t needed for early POAG.',
    2: 'Early glaucoma can progress at any age; treatment starts once glaucoma is diagnosed.',
    3: 'Pilocarpine isn’t first-line for open-angle glaucoma; PGAs or SLT are.',
  },
  'r2020-slt-vs-drops#1': {
    1: 'LiGHT showed SLT as effective as drops as first-line treatment, and SLT can be repeated.',
    2: 'SLT is for open-angle glaucoma and OHT; it needs an open angle with visible meshwork.',
    3: 'SLT’s effect lasts months to years and fades gradually; it doesn’t raise the IOP above baseline.',
  },
  'r2020-slt-vs-drops#2': {
    4: 'Bronchospasm is a β-blocker contraindication, not an alpha agonist one.',
    5: 'Sulfonamide allergy is a CAI contraindication.',
  },
  'r2020-slt-vs-drops#3': {
    1: 'Fixation losses and false positives are reliability indices; total and pattern deviation describe field loss.',
    2: 'They are different plots: pattern deviation removes the general depression seen in total deviation.',
    3: 'Total deviation compares with age-matched normals, not the raw threshold; neither plot compares with the last visit.',
  },
  'r2020-aac-diamox#1': {
    1: 'Dilating drops can worsen pupil block, and angle closure needs same-day treatment and referral.',
    2: 'PGAs act too slowly for an emergency, and angle closure is referred the same day, not reviewed at 4 weeks.',
    3: 'Pilocarpine doesn’t work above about 40–50 mmHg (ischaemic sphincter), strong or repeated doses can worsen things, and referral is always needed.',
  },
  'r2020-aac-diamox#2': {
    1: 'PGAs don’t act quickly on the angle; they are too slow for an emergency, not too fast.',
    2: 'PGAs aren’t contraindicated by ethnicity; they are just too slow and pro-inflammatory here.',
    3: 'PGAs don’t constrict the pupil; pilocarpine has a role once the IOP is coming down.',
  },
  'r2020-aac-diamox#3': {
    5: 'Bronchospasm is a β-blocker effect; acetazolamide’s respiratory concern is acidosis in COPD.',
  },
  'r2020-pxf-cataract#0': {
    4: 'PSC is at the back of the lens; it doesn’t put white material on the anterior capsule.',
  },
  'r2020-pxf-cataract#1': {
    1: 'Dense, even pigment and a Krukenberg spindle are signs of pigment dispersion.',
    2: 'Gonioscopy is needed in PXF: the angle can be narrow, and other secondary causes must be ruled out.',
    3: 'New vessels and blood in Schlemm’s canal are signs of other conditions, not PXF.',
  },
  'r2020-pxf-cataract#2': {
    5: 'A Krukenberg spindle and mid-peripheral spoke-like TIDs are PDS signs; in PXF the TIDs sit near the pupil margin.',
  },
  'r2020-pxf-cataract#4': {
    1: 'Cataract surgery can lower IOP in PXF, but it doesn’t cure the glaucoma; raised IOP still needs treatment.',
    2: 'PGAs carry a CME risk after surgery, so they are usually held while the eye is inflamed.',
    3: 'Drops aren’t contraindicated for a year after surgery; leaving glaucoma untreated that long risks more loss.',
  },
  'r2020-pxf-cataract#5': {
    1: 'PXF is a major cause of secondary open-angle glaucoma; many patients convert.',
    2: 'Not every PXF eye becomes glaucoma within a year; treat damage or raised IOP, not the material alone.',
    3: 'PXG progresses faster than POAG and needs a more aggressive target.',
  },
  'r2020-pxf-field-reliability#0': {
    1: 'Brown pigment, a Krukenberg spindle and spoke-like TIDs describe pigment dispersion, not this photo.',
    2: 'Mutton-fat KPs and posterior synechiae describe granulomatous uveitis, not material on the lens.',
    3: 'PSC sits at the back of the lens, and here the pupil margin is abnormal.',
  },
  'r2020-pxf-field-reliability#1': {
    1: 'A few fixation losses or false positives are expected; there are accepted thresholds.',
    2: 'Test time doesn’t make a field reliable; the reliability indices must be checked.',
    3: '50% is far too lax; false positives above about 15% make a SITA field unreliable.',
  },
  'r2020-pxf-field-reliability#2': {
    1: 'PXG progresses quickly, so it needs treatment and close review, not a 2-year wait.',
    2: 'Pilocarpine is avoided in PXF, and PXG needs referral within 4 months of starting treatment.',
    3: 'Steroid would raise the IOP; PXF material isn’t made by inflammation.',
  },
  'r2020-pxf-field-reliability#3': {
    1: 'Using a PGA twice daily can make it less effective, and a year is far too long between reviews.',
    2: 'Other drops, combinations and SLT can still reach the target; observing isn’t the answer.',
    3: 'Two PGAs together don’t add to each other and can raise IOP.',
  },
  // ---- 2020 fields and anterior eye
  'r2020-goldmann-chiasm#0': {
    1: 'A tract lesion gives a homonymous defect, not loss of both temporal fields.',
    2: 'Arcuate defects respect the horizontal midline; this one respects the vertical midline.',
    3: 'Central scotomas centre on fixation; this loss is hemianopic, bounded by the vertical midline.',
  },
  'r2020-goldmann-chiasm#1': {
    1: 'It is the other way round: the pituitary lies below the chiasm, so the upper temporal fields go first.',
    2: 'Chiasmal compression usually starts in the temporal periphery, not at fixation.',
    3: 'The crossing nasal fibres are damaged first, so the temporal fields are lost first.',
  },
  'r2020-goldmann-chiasm#3': {
    1: 'A defect that crosses the vertical midline in a tilted disc is often refractive; repeat the field first.',
    2: 'Tilted discs aren’t glaucomatous, and a field shouldn’t be treated before it is repeated.',
    3: 'Tilted discs can cause field defects (refractive scotomas), so the field is repeated, not ignored.',
  },
  'r2020-episcleritis-systemic#0': {
    5: 'Vessels that blanch and move with the conjunctiva point to episcleritis or conjunctivitis, not scleritis.',
  },
  'r2020-episcleritis-systemic#1': {
    1: 'Episcleritis is commoner in younger women, and RA, SLE and sarcoid are autoimmune, not infections.',
    2: 'Scleritis has a strong systemic link (about half), and these are autoimmune diseases, not allergies.',
    3: 'RA, SLE and sarcoid are autoimmune connective tissue diseases, commoner in women.',
  },
  'r2020-episcleritis-systemic#3': {
    1: 'Episcleritis is usually self-limiting and doesn’t turn into scleritis; oral steroid isn’t needed.',
    2: 'Episcleritis is inflammatory, not bacterial; antibiotics don’t help.',
    3: 'Pred forte hourly is far too strong for episcleritis, and stopping suddenly causes rebound.',
  },
  'r2020-nummular-seis#0': {
    5: 'SEIs are an immune reaction to viral antigen; there are no organisms in them to culture.',
  },
  'r2020-nummular-seis#1': {
    1: 'That swaps them: EKC is the adult, more severe form with infiltrates; PCF is the childhood form with fever.',
    2: 'Both are adenoviral; neither needs antibiotics or antivirals.',
    3: 'They are different clinical patterns caused by different adenovirus types.',
  },
  'r2020-nummular-seis#2': {
    1: 'Stopping a strong steroid suddenly brings infiltrates back, and steroids can raise IOP in anyone.',
    2: 'Steroids are used for SEIs that affect vision; the bar is for HSV, not adenovirus.',
    3: 'Topical steroid reaches SEIs well; oral steroid isn’t used for them.',
  },
  'r2020-nummular-seis#3': {
    1: 'Recurrent SEIs are an immune rebound after the taper, not a new infection.',
    2: 'Recurrent SEIs usually respond to restarting the steroid; they aren’t permanent scars at 3 weeks.',
    3: 'Doubling the dose and stopping suddenly is what causes rebound; a slow taper prevents it.',
  },
  'r2020-papillae-chlamydia#0': {
    5: 'Adenovirus mainly causes follicles, not papillae.',
  },
  'r2020-papillae-chlamydia#2': {
    1: 'Topical antibiotics alone don’t clear chlamydia, which is a genital infection too; partners need treating.',
    2: 'Chlamydia is a bacterium that needs PCR from epithelial cells; aciclovir doesn’t treat it.',
    3: 'Steroid doesn’t treat chlamydia and can make it worse; swab before treatment.',
  },
  'r2020-papillae-chlamydia#3': {
    1: 'Aciclovir has no effect on adenovirus; SEIs that need treatment get a soft steroid.',
    2: 'SEIs are immune infiltrates, not a bacterial infection.',
    3: 'Central SEIs can reduce vision and last months, so troublesome ones are treated.',
  },
  'r2020-uveitis-refer-fever#0': {
    6: 'A first episode of mild, unilateral, non-granulomatous AAU is the case optometrists can treat.',
  },
  'r2020-uveitis-refer-fever#1': {
    1: 'Hourly drops are put in by the patient at home, with review the next day.',
    2: 'Frequent steroid doesn’t protect against an IOP rise; check IOP at each review.',
    3: 'The hourly dose is reduced once cells fall, not kept up for 6 months.',
  },
  'r2020-uveitis-refer-fever#2': {
    5: 'Blood tests and a chest X-ray are usually kept for recurrent, bilateral or granulomatous disease.',
  },
  'r2020-uveitis-refer-fever#3': {
    1: 'Fever with uveitis can mean infection, and TB can cause granulomatous uveitis.',
    2: 'HLA-B27 disease isn’t usually febrile, and TB can cause uveitis with cough and weight loss.',
    3: 'Fever doesn’t mean healing; TB symptoms are cough, night sweats and weight loss, not itch.',
  },
  'r2020-uveitis-refer-fever#4': {
    1: 'Optometrists don’t order chest X-rays or start oral treatment for systemic disease.',
    2: 'The systemic causes involve many organs, not just the skin; the GP coordinates the work-up.',
    3: 'Most uveitis with systemic associations doesn’t need admission; refer to the GP and an ophthalmologist.',
  },
  'r2020-fortified-cephazolin#1': {
    1: 'Gram-positives have a thick wall; it is gram-negatives that have the outer membrane.',
    2: 'Gram staining depends on wall structure, not electric charge.',
    3: 'Both groups are bacteria; cefazolin is an antibiotic, not an antiviral.',
  },
  'r2020-fortified-cephazolin#2': {
    1: 'Penicillin allergy is real, and an immediate IgE reaction matters before giving a cephalosporin.',
    2: 'Asthma and heart block are β-blocker contraindications; immediate IgE penicillin allergy is the serious type.',
    3: 'Tendon rupture is linked with oral fluoroquinolones, and eye drops can cause allergic reactions.',
  },
  'r2020-fortified-cephazolin#3': {
    4: 'Tendon rupture is a risk of oral fluoroquinolones, not topical drops.',
  },
  'r2020-fortified-cephazolin#4': {
    1: 'Antibiotics shouldn’t be withheld while waiting for the hospital; take a scrape first if you can.',
    2: 'Optometrists with therapeutic endorsement can treat MK, and delaying antibiotics risks the eye.',
    3: 'Peripheral ulcers can be infected too, and need treatment if they look microbial.',
  },
  // ---- 2014
  'r2014-aac-headache#0': {
    5: 'Screen time has nothing to do with angle closure; dim light, reading and dilating drops do.',
  },
  'r2014-aac-headache#2': {
    1: 'Pilocarpine has contraindications (aphakic, pseudophakic and lens-induced closure) and doesn’t work at very high IOP.',
    2: 'Pilocarpine is used in pupil-block angle closure, once the IOP is coming down.',
    3: 'Pilocarpine is used before iridotomy to pull the iris out of the angle; the cornea isn’t the limit, the IOP is.',
  },
  'r2014-aac-headache#3': {
    1: 'The fellow eye shares the anatomy and is at high risk, so it has a prophylactic iridotomy.',
    2: 'Most attacks are in one eye; a quiet fellow eye doesn’t rule out angle closure.',
    3: 'The fellow eye’s risk is about 50% over 5–10 years, far above the general population.',
  },
  'r2014-aac-headache#4': {
    1: 'Medical treatment comes first to lower the IOP, then laser; trabeculectomy isn’t the first step.',
    2: 'SLT is for open angles; laser iridotomy is the laser for angle closure.',
    3: 'Laser iridotomy or lens extraction is needed to stop further attacks; drops alone aren’t enough.',
  },
  'r2014-mk-sterile-dual#0': {
    5: 'Small, round, peripheral, non-staining infiltrates with mild symptoms point to a sterile cause.',
  },
  'r2014-mk-sterile-dual#1': {
    1: 'Lenses don’t filter out bacteria; most lens-related MK is bacterial, and overnight wear raises the risk.',
    2: 'Adenovirus doesn’t cause lens-related ulcers; most are bacterial.',
    3: 'Pseudomonas is the commonest organism in lens wearers.',
  },
  'r2014-mk-sterile-dual#2': {
    1: 'A fluoroquinolone alone works for most ulcers; fortified dual therapy is kept for severe ones.',
    2: 'Chloramphenicol covers Pseudomonas poorly, and two antibiotics don’t cancel out.',
    3: 'Antibiotics start straight away, before culture results; dual therapy is antibacterial, not antiviral.',
  },
  'r2014-mk-sterile-dual#3': {
    1: 'Worsening at 24 hours isn’t expected, and steroid before the infection is controlled is dangerous.',
    2: 'Drug toxicity doesn’t make an ulcer enlarge overnight; stopping the antibiotic is dangerous.',
    3: 'A worsening ulcer needs same-day referral, not a 2-day wait.',
  },
  'r2014-mk-sterile-dual#4': {
    1: 'SCUT found no overall benefit, and steroids are dangerous with fungus and Nocardia.',
    2: 'SCUT didn’t show more perforations with steroid; they can be used carefully once the infection is controlled.',
    3: 'The antibiotic is never stopped and replaced with a steroid.',
  },
  'r2014-uveitis-idiopathic#0': {
    1: 'HSV causes a minority of anterior uveitis; it is suspected with high IOP, sectoral iris atrophy or a past herpes history.',
    2: 'TB is an uncommon cause in Australia; a chest X-ray isn’t needed for a single mild episode.',
    3: 'Contact lens wear doesn’t cause anterior uveitis.',
  },
  'r2014-uveitis-idiopathic#1': {
    1: 'Pain after lifting that eases with rest is mechanical; ankylosing spondylitis starts in younger adults.',
    2: 'Mechanical back pain is very common; the inflammatory pattern is what points to HLA-B27 disease.',
    3: 'Back pain matters in uveitis because of ankylosing spondylitis.',
  },
  'r2014-uveitis-idiopathic#3': {
    1: 'Stopping hourly steroid suddenly causes rebound inflammation; it needs a taper.',
    2: 'Steroid starts high and comes down; it isn’t built up from QID, and stopping suddenly causes rebound.',
    3: 'FML once daily is too weak for AAU, and the dose is adjusted as the cells fall.',
  },
  'r2014-uveitis-idiopathic#4': {
    1: 'Pilocarpine makes the pupil small, which encourages posterior synechiae and can worsen inflammation.',
    2: 'Cyclopentolate is short-acting and may attract leucocytes; hourly dosing isn’t used.',
    3: 'Steroid doesn’t break established synechiae; a cycloplegic does, and it also eases pain.',
  },
  'r2014-uveitis-idiopathic#5': {
    5: 'Steroids raise IOP; patients with glaucoma need extra care.',
  },
  // ---- 2018
  'r2018-child-chlamydia#0': {
    1: 'Seven days of crusting with mucopurulent discharge is bacterial; aciclovir doesn’t treat bacteria.',
    2: 'Pseudomonas isn’t a usual cause in children; ciprofloxacin isn’t first-line for simple conjunctivitis.',
    3: 'Crusting with mucopurulent discharge isn’t allergic; steroids don’t block histamine receptors.',
  },
  'r2018-child-chlamydia#2': {
    1: 'A negative culture doesn’t rule out chlamydia, which doesn’t grow on standard culture.',
    2: 'Chlamydia is a bacterium, not a virus; it is treated with azithromycin.',
    3: 'Chlamydia is a bacterium, not a fungus, and it is detected by PCR.',
  },
  'r2018-child-chlamydia#3': {
    1: 'Chlamydia isn’t caught from pools, and topical drops alone don’t clear it.',
    2: 'Chlamydia needs systemic antibiotics, and child-protection duties apply to children.',
    3: 'Chlamydia doesn’t need corneal surgery, and you have your own reporting duties.',
  },
  'r2018-child-chlamydia#4': {
    1: 'SAFE is the WHO trachoma strategy, not general advice for every conjunctivitis.',
    2: 'SAFE is for trachoma, not uveitis, and chlamydia doesn’t always cause uveitis.',
    3: 'SAFE isn’t a reporting rule; it stands for Surgery, Antibiotics, Facial cleanliness, Environment.',
  },
  'r2018-two-eyes-fields#1': {
    1: 'Superior defects respecting the horizontal midline are optic nerve or vascular, not chiasmal.',
    2: 'IOP 25 is raised, and these defects match the discs.',
    3: 'Optic neuritis causes acute vision loss with central defects; each eye is staged on its own.',
  },
  'r2018-two-eyes-fields#2': {
    1: 'A dense defect that matches the disc with raised IOP doesn’t need to wait a year.',
    2: 'Age doesn’t rule out treatment, and family history and CCT do affect the decision.',
    3: 'A field defect should match the disc; field alone, with no structural change, needs repeating.',
  },
  'r2018-two-eyes-fields#3': {
    1: 'Timolol isn’t dosed four times a day, and lost vision doesn’t come back once IOP falls.',
    2: 'Pilocarpine isn’t first-line, and has side effects; targets are individual.',
    3: 'Brimonidine is dosed twice or three times daily, and every glaucoma patient needs a target.',
  },
  'r2018-two-eyes-fields#4': {
    1: 'Drops reach full effect in weeks, and side effects and adherence affect how well treatment works.',
    2: 'Glaucoma drops don’t need daily review; 4–6 weeks is usual.',
    3: 'Glaucoma progression is usually silent; review must be scheduled, not left to symptoms.',
  },
  'r2018-two-eyes-fields#5': {
    1: 'A high-risk fellow eye can be treated before it reaches the same stage.',
    2: 'IOP 25 isn’t safe in a fellow eye of glaucoma; one eye’s disease doesn’t protect the other.',
    3: 'Drops work in a fellow eye; surgery isn’t the only option.',
  },
  'r2018-hsv-stromal-steroid#1': {
    1: 'Steroid is contraindicated with live epithelial virus, and dendrites often recur.',
    2: 'Dendrites need antiviral treatment, whether or not there is a cold sore.',
    3: 'A dendrite isn’t a mechanical abrasion; antivirals speed healing.',
  },
  'r2018-hsv-stromal-steroid#2': {
    1: 'Steroid with antiviral cover is the treatment for immune stromal keratitis (HEDS).',
    2: 'Antiviral cover is used with steroid because the virus can reactivate in the epithelium.',
    3: 'Prophylaxis is for people with past HSV keratitis, not everyone with a cold sore, at 400 mg BD.',
  },
  'r2018-hsv-stromal-steroid#3': {
    1: 'Aciclovir isn’t a β-blocker, and age isn’t a contraindication.',
    2: 'Aciclovir isn’t a CAI, and it needs dose adjustment in kidney disease.',
    3: 'Aciclovir is used in people who have had herpes before; that is who it is for.',
  },
  'r2018-hsv-stromal-steroid#5': {
    1: 'A steroid response is a rise above baseline, and it doesn’t settle while the steroid continues.',
    2: 'Moderate responses are common, and PGAs are avoided with herpes and inflammation.',
    3: 'A steroid response is a rise in IOP, and stopping a steroid suddenly causes rebound inflammation.',
  },
  'r2018-joseph-pxf#0': {
    1: 'Pigment on the lens in young myopes is pigment dispersion; this photo shows white material in three zones.',
    2: 'PSC is at the back of the lens; here the material is on the front.',
    3: 'Uveitic deposits and broken synechiae don’t form a central disc with a clear ring.',
  },
  'r2018-joseph-pxf#2': {
    1: 'PXF eyes are treated for damage or high-risk IOP well below 40 mmHg, and IOP swings matter.',
    2: 'PXF with a normal IOP, disc and field is monitored, not treated.',
    3: 'Older PXF patients are at high risk of rapid loss; age doesn’t rule out treatment.',
  },
  'r2018-joseph-pxf#3': {
    1: 'PGAs are TGA category B3 and uterotonic; brimonidine is an alpha-2 agonist.',
    2: 'Oral acetazolamide is category B3 and best avoided in pregnancy; brimonidine isn’t a CAI.',
    3: 'Some drops can be used with care in pregnancy; brimonidine is an alpha-2 agonist, not a prostaglandin.',
  },
});
