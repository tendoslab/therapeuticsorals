"""Builds img/cases/*.jpg and js/data/images.js from the source documents in the repo.

Run from the repo root:  python3 tools/case-images.py <work-dir>
(needs Pillow, pymupdf and poppler's pdfimages). It first pulls the raw images into <work-dir>:
  ex/A048-467.png ...   each picture on the 2025 anterior (A) / posterior (P) notes pages,
                        cut from the rendered page and named by page and image xref
  pp/<file>/...         media folders unzipped from the .docx/.pptx past papers
  pdfimg/...            pdfimages -png -p output of the past-paper PDFs
Photos added by hand sit in images/ (no source document) and are read from there.
Each entry below: case id -> list of (source, crop, caption, credit, step).
crop is (left, top, right, bottom) as fractions of the image, or None.
step: the image appears from that step on (None = from the start of the case).
"""
import glob, json, os, subprocess, sys, zipfile
from PIL import Image

W = sys.argv[1]
OUT = 'img/cases'
A = 'Anterior eye notes 2025 (Anterior Compressed.pdf), p. {}: “{}”'
P = 'Posterior eye notes 2025 (Posterior Compressed.pdf), p. {}: “{}”'
PPT = 'Practice Therapeutics Orals deck (Past Papers/Practice-Therapeutics-Orals.pptx), slide {}'
CS16 = '2016 case studies (Past Papers/thera-case-studies.docx): {}'
CS22 = '2022 case studies / YO MOTHs (Past Papers/All_the_case_studies_22.pdf), p. {}'
R25 = '2025 orals recall (Past Papers/THERA-ORALS-2025.pdf), p. {}'
YO25 = '2025 YO mock orals (Past Papers/YO Mock Orals 2025.pdf), p. 3'
ADDED = 'Photo added to the repo (images/{}), not from the exam sources'
SCHEM = 'Schematic drawn for this simulator from the case description (not a real printout)'

def ex(code): return f'{W}/ex/{code}.png'
def ppt(n): return f'{W}/pp/Practice-Therapeutics-Orals.pptx/ppt/media/{n}'
def cs16(n): return f'{W}/pp/thera-case-studies.docx/word/media/{n}'
def pdf(n): return f'{W}/pdfimg/{n}.png'
def added(n): return f'images/{n}'

# Reused sources, named once
BK = (ex('A072-807'), (0, 0, .5, .44))           # top-left panel of a labelled 2x2 grid (bacterial keratitis)
DENDRITE_NOTES = (ex('A076-838'), None)
PXF_RETRO = (pdf('All_the_case_studies_22-009-006'), None)
PXF_CS16 = (cs16('image9.png'), None)
AAC_EXAM = (cs16('image7.png'), None)
SYNECHIAE = (ppt('image2.jpeg'), None)
MARGINAL = (ex('A069-765'), None)
EPISCLERITIS = (ex('A078-864'), None)
KRUKENBERG = (cs16('image15.jpeg'), None)
DRANCE = (ppt('image24.jpeg'), None)
HYPOPYON = (pdf('YO_Mock_Orals_2025-003-000'), (.768, .335, .99, .855))
RECESSION = (added('angle recession glaucoma.jpeg'), None)
KPS = (added('keratic precipitates.jpg'), None)

M = {
  # ---- glaucoma
  'aac-first-aid': [(*AAC_EXAM, 'Anterior eye photo', CS16.format('angle-closure case (same photo as the 2022 YO MOTHs case)'), None)],
  'pxf': [(pdf('THERA-ORALS-2025-024-002'), None, 'Anterior eye photo, dilated', R25.format(24) + ' (PXG case, “gives photo of ant eye”)', None)],
  'pds': [(ex('P071-877'), None, 'Gonioscopy photo', P.format(71, 'Shows pigmentary dispersion (heavily pigmented angle)'), None)],
  'r2025-supp-pds': [(ex('P071-880'), None, 'Gonioscopy photo', P.format(71, 'Shows pigmentary dispersion (heavily pigmented angle)'), None)],
  'r2018-pxf-diurnal': [(*PXF_RETRO, 'Photo of the pupil', CS22.format(9) + ' (PXF glaucoma)', None)],
  'er-pxf-anna': [(*PXF_RETRO, 'Retro-illumination photo', CS22.format(9) + ' (PXF glaucoma)', None)],
  'r2019-pxf-quickfire': [(*PXF_CS16, 'Photo of the pupil margin', CS16.format('PXF glaucoma case'), None)],
  'peer-pxf': [(*PXF_CS16, 'Anterior eye photo', CS16.format('PXF glaucoma case'), None)],
  'yo25-pxg': [(*PXF_CS16, 'Anterior eye photo', CS16.format('PXF glaucoma case'), None)],
  'mp-pxg': [(*PXF_RETRO, 'Slit-lamp photo', CS22.format(9) + ' (PXF glaucoma)', None)],
  'cs16-pxf-glaucoma': [
      (*PXF_CS16, 'Anterior eye photo (poor dilation)', CS16.format('PXF glaucoma case (also YO MOTHs 2022, p. 9)'), None),
      (cs16('image10.png'), None, 'Disc photos, right and left', CS16.format('PXF glaucoma case (also YO MOTHs 2022, p. 10)'), 0)],
  'po-pxf-gonio': [
      (ppt('image7.png'), (.06, .09, .86, .93), 'Anterior eye photo, left eye', PPT.format(8), None),
      (ppt('image8.jpeg'), None, 'Gonioscopy, inferior angle', PPT.format(8) + ' (image: Ed Sung MD & Lee Alward MD, U of Iowa 2004)', None)],
  'cs16-pds': [
      (*KRUKENBERG, 'Anterior eye photo', CS16.format('Pigment dispersion case'), None),
      (cs16('image16.jpeg'), None, 'Retro-illumination photo', CS16.format('Pigment dispersion case'), None)],
  'mp-pigmentary-glaucoma': [(*KRUKENBERG, 'Anterior eye photo', CS16.format('Pigment dispersion case'), None)],
  'yo25-pds-iop35': [(*KRUKENBERG, 'Anterior eye photo', CS16.format('Pigment dispersion case'), None)],
  'cs16-aac': [(*AAC_EXAM, 'Anterior eye photo', CS16.format('angle-closure case'), None)],
  'yo-aac': [(pdf('All_the_case_studies_22-013-008'), None, 'Anterior eye photo', CS22.format(13) + ' (YO MOTHs angle-closure case)', None)],
  'peer-acg': [(ppt('image21.jpeg'), None, 'Anterior eye photo', PPT.format(27) + ' (a similar case from the deck)', None)],
  'mp-aac': [(ppt('image21.jpeg'), None, 'Anterior eye photo', PPT.format(27) + ' (a similar case from the deck)', None)],
  'po-aac-contraindications': [(ppt('image21.jpeg'), None, 'Anterior eye photo, left eye', PPT.format(27), None)],
  'r2018-anna-disc-haem': [(*DRANCE, 'Disc photos', PPT.format(36) + ' (a similar disc from the deck)', None)],
  'po-ntg-metoprolol': [
      (*DRANCE, 'Disc photos, right and left', PPT.format(36), None),
      (ppt('image25.png'), None, 'Field printouts', PPT.format(38), 1)],
  'po-arcuate-ntg': [
      (ppt('image10.png'), None, 'Field printout, left eye', PPT.format(10), None),
      (ppt('image9.png'), None, 'Field printout, right eye', PPT.format(10), None),
      (ppt('image11.jpeg'), None, 'Left disc photo', PPT.format(11) + ' (image watermarked EyeRounds.org)', 1)],
  'angle-recession': [
      (*RECESSION, 'Gonioscopy photo, right eye', ADDED.format('angle recession glaucoma.jpeg'), None),
      (added('hyphema.jpg'), None, 'Photo from the day of the injury', ADDED.format('hyphema.jpg') + ' (a similar hyphaema)', 1)],
  'mp-angle-recession': [(*RECESSION, 'Gonioscopy photo', ADDED.format('angle recession glaucoma.jpeg'), None)],
  'neovascular-glaucoma': [(added('neovascular glaucoma.webp'), None, 'Slit-lamp photo, right eye', ADDED.format('neovascular glaucoma.webp') + ' (a similar eye)', None)],
  'peer-lily-glaucoma': [(pdf('All_the_case_studies_22-010-007'), None, 'Disc photos, right and left', CS22.format(10) + ' (a similar pair from the YO MOTHs PXF case)', None)],
  'cs16-oht-to-poag': [
      (cs16('image11.jpeg'), None, 'Right disc, 15 years later', CS16.format('Glaucoma case 3, 15 years later'), 4),
      (cs16('image12.png'), None, 'Field printout, 15 years later', CS16.format('Glaucoma case 3, 15 years later'), 4)],
  'cs16-ntg': [
      (cs16('image13.jpeg'), None, 'Disc photos, right and left', CS16.format('Glaucoma case 4'), None),
      (cs16('image14.png'), None, 'Field printouts', CS16.format('Glaucoma case 4'), 0)],
  'peer-glaucoma-discs': [(pdf('All_the_case_studies_22-010-007'), None, 'Disc photos, right and left', CS22.format(10) + ' (a similar pair from the YO MOTHs PXF case)', None)],
  'r2019-arcuate-ddx': [(cs16('image14.png'), None, 'Field printouts', CS16.format('Glaucoma case 4 (a similar arcuate defect)'), None)],
  # ---- neuro
  'po-temporal-lobe': [(ppt('image18.jpeg'), None, 'Field printouts', PPT.format(23), None)],
  'po-fields-quickfire': [(ppt('image12.png'), None, 'Field printout, 15-year-old', PPT.format(13), None)],
  'cn3-palsy': [(ex('P056-771'), None, 'External photos, primary gaze', P.format(56, 'Isolated CN3 palsy'), None)],
  'pn-horner': [(ex('P054-741'), None, 'External photo', P.format(54, 'Horner syndrome'), None)],
  'pn-myasthenia': [(ex('P058-802'), None, 'External photo', P.format(58, 'Myasthenia gravis'), None)],
  'an-bell-exposure': [(ex('P058-799'), None, 'External photo, attempted eye closure', P.format(58, 'Isolated CN7 palsy: demonstrates lagophthalmos'), None)],
  'pn-iih': [(ex('P061-817'), None, 'Disc photo', P.format(61, 'Papilloedema'), None)],
  'tilted-disc': [(added('tilted disc.jpg'), None, 'Disc photo, one eye', ADDED.format('tilted disc.jpg') + ' (a similar disc)', None)],
  'pn-gca': [(ex('P062-825'), None, 'Right disc photo', P.format(62, 'Arteritic AION (giant cell arteritis)'), None)],
  # ---- retina
  'pn-pvd-break': [(ex('P009-306'), None, 'Peripheral fundus photo, right eye', P.format(9, 'Retinal break (tear)'), None)],
  'pn-crao': [(ex('P023-502'), None, 'Fundus photo, right eye', P.format(23, 'Central retinal artery occlusion'), None)],
  'pn-diabetes': [(ex('P026-556'), None, 'Fundus photo', P.format(26, 'Diabetic retinopathy'), None)],
  'pn-cscr': [(ex('P015-404'), None, 'Fundus photo, right eye', P.format(15, 'Central serous chorioretinopathy'), None)],
  # ---- cornea
  'cl-bacterial-keratitis': [(*BK, 'Slit-lamp photo', A.format(72, 'Bacterial keratitis') + ' (one panel of a labelled grid)', None)],
  'mp-cl-mk': [(*BK, 'Slit-lamp photo', A.format(72, 'Bacterial keratitis') + ' (one panel of a labelled grid)', None)],
  'yo-cl-mk': [(pdf('All_the_case_studies_22-017-009'), None, 'Slit-lamp photo with fluorescein', CS22.format(17) + ' (YO MOTHs contact lens keratitis case)', None)],
  'peer-mk': [(pdf('All_the_case_studies_22-017-009'), None, 'Slit-lamp photo', CS22.format(17) + ' (a similar case)', None)],
  'cs16-mk-ew': [(cs16('image3.jpeg'), None, 'Slit-lamp photo', CS16.format('Extended-wear lens case'), None)],
  'mk-vs-clpu': [(ex('A065-703'), (0, 0, .93, .57), 'Slit-lamp photo', A.format(65, 'CLPU (contact lens peripheral ulcer)'), None)],
  'marginal-keratitis': [(*MARGINAL, 'Slit-lamp photo', A.format(69, 'Marginal keratitis') + ' (image watermarked EyeRounds.org)', None)],
  'r2018-mk-vs-marginal': [(*MARGINAL, 'White-light photo', A.format(69, 'Marginal keratitis') + ' (image watermarked EyeRounds.org)', None)],
  'mp-marginal-rosacea': [(*MARGINAL, 'Slit-lamp photo', A.format(69, 'Marginal keratitis') + ' (image watermarked EyeRounds.org)', None)],
  'fungal-keratitis': [(ex('A072-811'), None, 'Slit-lamp photo', A.format(72, 'Fungal (mycotic) keratitis'), None)],
  'hsv-keratitis': [(*DENDRITE_NOTES, 'Fluorescein photo', A.format(76, 'HSV epithelial keratitis'), None)],
  'r2018-hsv-epithelial': [(*DENDRITE_NOTES, 'Fluorescein photo', A.format(76, 'HSV epithelial keratitis'), None)],
  'mp-hsv-hzo': [(*DENDRITE_NOTES, 'Fluorescein photo', A.format(76, 'HSV epithelial keratitis'), None)],
  'cs16-hsv': [(cs16('image2.png'), None, 'Fluorescein photo', CS16.format('Dendrite case'), None)],
  'cs22-hsk': [(pdf('All_the_case_studies_22-001-003'), None, 'Fluorescein photo', CS22.format(1) + ' (“Photo of HSK epithelial disease with dendritic ulcer”)', None)],
  'r2025-hsv-to-bacterial': [(pdf('THERA-ORALS-2025-018-000'), None, 'Fluorescein photos', R25.format(18) + ' (“Case 2: shows an image like this”)', None)],
  'po-hsv-pregnancy': [
      (ppt('image3.png'), None, 'External photo', PPT.format(6), None),
      (ppt('image4.png'), None, 'Lower tarsal conjunctiva', PPT.format(6), None),
      (ppt('image5.png'), None, 'Fluorescein, cobalt blue', PPT.format(6), None),
      (ppt('image6.png'), None, 'Fluorescein, later', PPT.format(6), 1)],
  'po-hsv-disciform': [(ppt('image13.gif'), None, 'Slit-lamp photo, right eye (pupil dilated)', PPT.format(14), None)],
  'peer-herpes-types': [(*DENDRITE_NOTES, 'Fluorescein photo', A.format(76, 'HSV epithelial keratitis'), None)],
  'hzo': [(ex('A077-848'), None, 'External photo', A.format(77, 'Herpes zoster ophthalmicus'), None)],
  'er-hzo-fiona': [
      (ex('A077-848'), None, 'External photo', A.format(77, 'Herpes zoster ophthalmicus') + ' (a similar case)', None),
      (ex('A077-854'), None, 'Slit-lamp photo with fluorescein', A.format(77, 'Herpes zoster ocular manifestations') + ' (a similar case)', None)],
  'cs16-hzo': [(cs16('image6.png'), None, 'Anterior eye photo with fluorescein', CS16.format('Blurry eye, headache and fevers case'), None)],
  'po-hzo': [(ppt('image22.jpeg'), None, 'Slit-lamp photo with fluorescein', PPT.format(32) + ' (image watermarked EyeRounds.org)', None)],
  'fuchs': [(ex('A068-736'), None, 'Slit-lamp photo', A.format(68, 'Fuchs’ dystrophy'), None)],
  'po-corneal-fb': [(ppt('image1.jpeg'), None, 'Slit-lamp photo, right eye', PPT.format(2), None)],
  'an-abrasion-rce': [(ex('A067-723'), None, 'Fluorescein photo', A.format(67, 'Corneal abrasions'), None)],
  'an-photokeratitis': [(ex('A069-753'), (0, .27, 1, 1), 'External photo', A.format(69, 'Photokeratitis'), None)],
  'an-filamentary-slk': [
      (ex('A071-800'), None, 'Slit-lamp photo with fluorescein', A.format(71, 'Filamentary keratitis'), None),
      (ex('A054-563'), None, 'Superior bulbar conjunctiva', A.format(54, 'Superior limbic keratoconjunctivitis (SLK)'), None)],
  # ---- uveitis
  'aau-synechiae': [(ex('A080-893'), None, 'Anterior eye photo, right eye', A.format(80, 'Uveitis'), None)],
  'r2025-supp-aau': [(ex('A080-893'), None, 'Anterior eye photo', A.format(80, 'Uveitis') + ' (a similar case)', None)],
  'aau-hypopyon': [(*HYPOPYON, 'Anterior eye photo', YO25 + ' (AC cells and flare grading slide)', None)],
  'yo25-aau-fibrin': [(*HYPOPYON, 'Anterior eye photo', YO25 + ' (AC cells and flare grading slide)', None)],
  'po-aau-steroid-response': [(*SYNECHIAE, 'Anterior eye photo, left eye', PPT.format(4) + ' (image watermarked University of Michigan Kellogg Eye Center)', None)],
  'r2018-lily-synechiae': [(*SYNECHIAE, 'Anterior eye photo', PPT.format(4) + ' (a similar case)', None)],
  'r2019-aau-drugs': [
      (*KPS, 'Zoomed-in slit-lamp photo, inferior cornea', ADDED.format('keratic precipitates.jpg'), None),
      (*SYNECHIAE, 'Anterior eye photo', PPT.format(4) + ' (a similar case)', None)],
  'granulomatous-au': [(*KPS, 'Slit-lamp photo, endothelium', ADDED.format('keratic precipitates.jpg') + ' (a similar eye)', None)],
  'cs22-aau': [(pdf('All_the_case_studies_22-004-004'), None, 'External photo, left eye', CS22.format(4) + ' (unilateral AAU case)', None)],
  'cs16-aau-joints': [(cs16('image1.tiff'), (0, 0, 1, .86), 'Anterior eye photo, right eye', CS16.format('Case 1, anterior uveitis'), None)],
  # ---- allergy / lids
  'sac': [(ex('A060-639'), None, 'Anterior eye photo', A.format(60, 'Allergic conjunctivitis'), None)],
  'vkc-shield': [
      (ex('A050-498'), None, 'Everted upper lid', A.format(50, 'Vernal keratoconjunctivitis (VKC)'), None),
      (ex('A050-501'), None, 'Right cornea', A.format(50, 'VKC shield ulcer'), None)],
  'cs16-vkc': [(cs16('image4.png'), None, 'Anterior eye and everted lid photos', CS16.format('VKC case'), None)],
  'mp-vkc-atopic': [(ex('A050-498'), None, 'Everted upper lid', A.format(50, 'Vernal keratoconjunctivitis (VKC)'), None)],
  'po-vkc-shield': [(ppt('image14.jpeg'), None, 'Anterior eye photo', PPT.format(18), None)],
  'blepharitis': [(ex('A057-594'), None, 'Lid margin', A.format(57, 'Demodex'), None)],
  'contact-dermatitis': [(ex('A051-511'), None, 'External photo', A.format(51, 'Atopic dermatitis (eczema)') + ' (a similar appearance)', None)],
  'brimonidine-allergy': [(ex('A051-514'), None, 'External photo', A.format(51, 'Contact blepharoconjunctivitis'), None)],
  'preseptal': [(ex('A050-495'), None, 'External photo', A.format(50, 'Cellulitis'), None)],
  'an-dacryocystitis': [(ex('A054-551'), None, 'External photo', A.format(54, 'Acute dacryocystitis') + ' (an infant: the sign, not the patient)', None)],
  'an-phthiriasis': [(ex('A051-520'), None, 'Lashes at high magnification', A.format(51, 'Phthiriasis (pediculosis ciliaris, lice)'), None)],
  # ---- conjunctiva
  'adenoviral': [(ex('A062-667'), None, 'Slit-lamp photo, cornea', A.format(62, 'EKC nummular infiltrates'), None)],
  'cs16-adenoviral': [(pdf('All_the_case_studies_22-024-014'), (0, .42, 1, .99), 'External and everted-lid photos', CS22.format(24) + ' (images watermarked Jordan M Graff MD, U of Iowa)', 0)],
  'mp-ekc-childcare': [(ex('A062-673'), None, 'Everted lower lid', A.format(62, 'Membranous conjunctivitis'), None)],
  'chlamydial-conj': [(cs16('image8.tiff'), None, 'Everted lower lid, left eye', CS16.format('Case 9, chlamydia'), 1)],
  'mp-inclusion-conj': [(ex('A063-686'), None, 'Tarsal conjunctiva and cornea', A.format(63, 'Adult inclusion conjunctivitis'), None)],
  'an-gonococcal-neonate': [(ex('A063-680'), None, 'External photo', A.format(63, 'Hyperacute bacterial conjunctivitis') + ' (an adult: the sign, not the patient)', None)],
  'episcleritis': [(*EPISCLERITIS, 'Anterior eye photo', A.format(78, 'Episcleritis'), None)],
  'mp-episcleritis': [(*EPISCLERITIS, 'Anterior eye photo', A.format(78, 'Episcleritis'), None)],
  'cs16-episcleritis': [(cs16('image5.png'), None, 'Anterior eye photo', CS16.format('47-year-old with a red eye'), None)],
  'phlyctenulosis': [(added('phlyctenulosis.jpg'), None, 'Slit-lamp photo', ADDED.format('phlyctenulosis.jpg') + ' (a similar case)', None)],
  'an-pterygium': [(ex('A055-570'), None, 'Anterior eye photo', A.format(55, 'Pterygium'), None)],
  'mp-subconj-haem': [(ex('A055-573'), None, 'Anterior eye photo', A.format(55, 'Subconjunctival haemorrhage'), None)],
}

# Schematic field plots for the field cases with no printout in the sources.
SCHEMATIC = {
  'homonymous': ('Field plots, both eyes', None),
  'bitemporal': ('24-2 grey scale, both eyes', None),
  'altitudinal': ('24-2 grey scale, both eyes', None),
  'centrocaecal': ('Field plots, both eyes', None),
  'poag-central': ('24-2 grey scale, left eye', None),
  'ntg': ('24-2 grey scale, both eyes', None),
}

def extract():
    import pymupdf
    os.makedirs(f'{W}/ex', exist_ok=True)
    for name, tag, pages in [('Anterior Compressed.pdf', 'A', range(48, 83)), ('Posterior Compressed.pdf', 'P', None)]:
        doc = pymupdf.open(name)
        for pno, page in enumerate(doc, 1):
            if pages and pno not in pages:
                continue
            for info in page.get_image_info(xrefs=True):
                r = pymupdf.Rect(info['bbox'])
                if r.width < 40 or r.height < 30:
                    continue
                page.get_pixmap(clip=r, dpi=200).save(f"{W}/ex/{tag}{pno:03d}-{info['xref']}.png")
    for f in glob.glob('Past Papers/*.docx') + glob.glob('Past Papers/*.pptx'):
        with zipfile.ZipFile(f) as z:
            z.extractall(f'{W}/pp/{os.path.basename(f)}', [n for n in z.namelist() if '/media/' in n])
    os.makedirs(f'{W}/pdfimg', exist_ok=True)
    for f in glob.glob('Past Papers/*.pdf'):
        stem = os.path.splitext(os.path.basename(f))[0].replace(' ', '_')
        subprocess.run(['pdfimages', '-png', '-p', f, f'{W}/pdfimg/{stem}'], check=True)

def save(src, crop, name):
    im = Image.open(src)
    im.seek(0)
    im = im.convert('RGB')
    if crop:
        w, h = im.size
        im = im.crop((int(crop[0] * w), int(crop[1] * h), int(crop[2] * w), int(crop[3] * h)))
    if im.width > 1100:
        im = im.resize((1100, round(im.height * 1100 / im.width)), Image.LANCZOS)
    im.save(f'{OUT}/{name}.jpg', quality=82, optimize=True)
    return im.size

def main():
    extract()
    os.makedirs(OUT, exist_ok=True)
    done, data = {}, {}
    for cid, items in M.items():
        data[cid] = []
        for src, crop, caption, credit, step in items:
            key = (src, crop)
            if key not in done:
                tag = 'ppt-' if '.pptx' in src else 'cs16-' if '.docx' in src else 'added-' if src.startswith('images/') else ''
                name = tag + os.path.splitext(os.path.basename(src))[0].lower().replace('_', '-').replace(' ', '-')
                if crop: name += '-crop'
                done[key] = (name, save(src, crop, name))
            name, (w, h) = done[key]
            e = {'src': f'{OUT}/{name}.jpg', 'w': w, 'h': h, 'caption': caption, 'credit': credit}
            if step is not None: e['step'] = step
            data[cid].append(e)
    import fields
    for cid, (caption, step) in SCHEMATIC.items():
        w, h = fields.draw(cid, f'{OUT}/field-{cid}.png')
        e = {'src': f'{OUT}/field-{cid}.png', 'w': w, 'h': h, 'caption': caption + ' (schematic)', 'credit': SCHEM}
        if step is not None: e['step'] = step
        data[cid] = [e]
    with open('js/data/images.js', 'w') as f:
        f.write('// Photos and printouts for cases (generated by tools/case-images.py; edit there, not here).\n')
        f.write('// caption is shown with the image; credit (where it came from) stays hidden until the first answer in the case,\n')
        f.write('// because the source often names the diagnosis. step: the image appears from that step on.\n')
        f.write('window.CASE_IMAGES = ' + json.dumps(data, indent=1, ensure_ascii=False) + ';\n')
    print(len(data), 'cases,', len(done) + len(SCHEMATIC), 'images')

if __name__ == '__main__':
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    main()
