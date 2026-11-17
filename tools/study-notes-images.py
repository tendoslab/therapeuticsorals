"""Builds img/notes/ for the Study notes tab from the two Thera Orals study sheet PDFs.

Run from the repo root:  python3 tools/study-notes-images.py
Needs pdfimages (poppler) and Pillow. The image numbers are the order pdfimages lists them in each PDF;
the captions live in js/data/study-notes.js.
"""
import os, subprocess, sys, tempfile, glob
from PIL import Image

OUT = 'img/notes'
P1 = 'Thera_Orals_Part1_Anterior_and_Glaucoma.pdf'
P2 = 'Thera_Orals_Part2_Posterior_Drugs_Neuro.pdf'

NAMES = {
    P1: ['disc-poag-session', 'secondary-glaucoma-flowchart', 'pxf-pds-schematic', 'pxf-pupil', 'pxf-gonio',
         'pds-gonio', 'krukenberg', 'aac-session', 'previous-attack', 'aac-first-aid', 'kps', 'hyphema-grades',
         'hyphema', 'cl-ulcer-session', 'bacterial-keratitis', 'fungal-keratitis', 'acanthamoeba', 'marginal',
         'phlyctenule', 'clpu', 'clare', 'seal', 'clpc', 'solution-toxicity', 'corneal-fb', 'epithelial-defect',
         'roper-hall', 'dendrite-schematic', 'hsv-session', 'hsv-dendrite', 'hsv-stromal', 'hzo-rash',
         'hzo-pseudodendrite', 'sac', 'vkc', 'akc', 'gonococcal', 'chlamydia', 'adenoviral', 'membrane',
         'episcleritis', 'nodular-episcleritis', 'scleritis', 'pinguecula', 'pterygium', 'subconj-haem',
         'thygeson', 'keratoconus', 'hydrops', 'ebmd', 'bullous', 'chalazion-stye', 'preseptal', 'demodex',
         'lice', 'molluscum'],
    P2: ['endophthalmitis', 'pco', 'cmo-oct', 'corneal-oedema', 'field-pathway', 'naion', 'crao', 'brao', 'crvo',
         'brvo', 'hollenhorst', 'rubeosis', 'hypertensive', 'npdr', 'flame', 'cws', 'irma', 'dmo-oct', 'drusen',
         'ga', 'wet-amd-oct', 'cscr-oct', 'macular-hole-oct', 'horseshoe-tear'],
}

def save(src, name):
    im = Image.open(src).convert('RGB')
    if im.width > 1100:
        im = im.resize((1100, round(im.height * 1100 / im.width)), Image.LANCZOS)
    im.save(f'{OUT}/{name}.jpg', quality=82, optimize=True)
    return im.size

def main():
    os.makedirs(OUT, exist_ok=True)
    with tempfile.TemporaryDirectory() as tmp:
        for pdf, names in NAMES.items():
            d = os.path.join(tmp, 'p1' if pdf == P1 else 'p2')
            os.makedirs(d)
            subprocess.run(['pdfimages', '-png', pdf, f'{d}/i'], check=True)
            files = sorted(glob.glob(f'{d}/i-*.png'))
            assert len(files) == len(names), (pdf, len(files), len(names))
            for f, n in zip(files, names):
                print(n, save(f, n))


if __name__ == '__main__':
    main()
