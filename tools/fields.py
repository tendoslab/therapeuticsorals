"""Schematic grey-scale field plots for tools/case-images.py.

Points sit on the 24-2 grid (6° apart, offset 3° from the meridians), plotted as the patient sees
them: the right of each plot is the patient's right, so the blind spot is on the right for the right
eye and on the left for the left eye. Each defect function returns 0 (normal) to 1 (absolute).
"""
from PIL import Image, ImageDraw, ImageFont

CELL = 16          # pixels per 6° cell
SPAN = 30          # degrees from fixation to the edge of the plot
R = SPAN / 6 * CELL

def font(size):
    try:
        return ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', size)
    except OSError:
        return ImageFont.load_default()

def blind(eye, x, y):
    bx = 15 if eye == 'OD' else -15
    return 1.0 if abs(x - bx) <= 3 and -6 <= y <= 0 else 0.0

DEFECTS = {
    'homonymous': {'OS': lambda x, y: 1.0 if x > 0 else 0, 'OD': lambda x, y: 1.0 if x > 0 else 0},
    'bitemporal': {
        'OS': lambda x, y: (1.0 if y > 0 else .55 if x < -9 else .25) if x < 0 else 0,
        'OD': lambda x, y: (1.0 if y > 0 else .55 if x > 9 else .25) if x > 0 else 0},
    'altitudinal': {'OS': lambda x, y: 0, 'OD': lambda x, y: 1.0 if y < 0 else 0},
    'centrocaecal': {
        'OS': lambda x, y: 1.0 if ((x + 7.5) / 10) ** 2 + ((y + 1.5) / 6.5) ** 2 <= 1 else 0,
        'OD': lambda x, y: 1.0 if ((x - 7.5) / 10) ** 2 + ((y + 1.5) / 6.5) ** 2 <= 1 else 0},
    'poag-central': {'OS': lambda x, y: 1.0 if (y > 0 and x > 14) or (y == 3 and -3 <= x <= 3)
                     else .6 if (0 < y <= 9 and 3 < x <= 14) else 0},
    'ntg': {'OS': lambda x, y: 1.0 if 0 < y <= 9 and -9 <= x <= 3 else .4 if y == 15 and -9 <= x <= 3 else 0,
            'OD': lambda x, y: 0},
}

def plot(eye, fn):
    size = int(2 * R + 40)
    im = Image.new('RGB', (size, size + 30), 'white')
    d = ImageDraw.Draw(im)
    c = size / 2
    pts = [v for v in range(-27, 28, 6)]
    for gx in pts:
        for gy in pts:
            if gx * gx + gy * gy > (SPAN - 1) ** 2:
                continue
            if not (abs(gx) <= 21 and abs(gy) <= 21) and not (gx * (1 if eye == 'OD' else -1) < -21 and abs(gy) <= 3):
                continue   # 24-2 shape: two extra nasal points only
            v = max(fn(gx, gy), blind(eye, gx, gy))
            x0, y0 = c + (gx - 3) / 6 * CELL, c - (gy + 3) / 6 * CELL
            shade = int(235 - 215 * v)
            d.rectangle([x0, y0, x0 + CELL - 1, y0 + CELL - 1], fill=(shade,) * 3)
            # stipple, like a printed grey scale
            for sx in range(2, CELL, 4):
                for sy in range(2, CELL, 4):
                    d.point((x0 + sx + (sy // 4) % 2 * 2, y0 + sy), fill=(max(0, shade - 70),) * 3)
    d.line([c - R, c, c + R, c], fill=(90, 90, 90))
    d.line([c, c - R, c, c + R], fill=(90, 90, 90))
    d.text((c, size + 8), {'OS': 'Left eye (OS)', 'OD': 'Right eye (OD)'}[eye], fill='black', font=font(15), anchor='mt')
    return im

def draw(case, path):
    eyes = DEFECTS[case]
    ims = [plot(e, eyes[e]) for e in ('OS', 'OD') if e in eyes]
    w = sum(i.width for i in ims) + 20 * (len(ims) - 1)
    out = Image.new('RGB', (w, ims[0].height), 'white')
    x = 0
    for i in ims:
        out.paste(i, (x, 0))
        x += i.width + 20
    out.save(path)
    return out.size
