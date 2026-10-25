"""Builds the GrafxKid partner sheets in img/sprites (gk-*.png) from the three sprite packs (CC0).

Each pack zip sits in the repo root ("Sprite Pack 3.zip", 6, 8). Every sheet has 42px frames (the 32px art with a
margin, so the feet sit about where they do on the other sheets) and one row per animation, in the order ROWS below; a row is one or more strips from the pack joined end to end. The frame counts
are printed as the `anims` to paste into the partner entries in js/data/ocumon.js.
Usage: python3 tools/gk-sprites.py
"""
import io, json, os, re, sys, zipfile
from PIL import Image

ROOT = os.path.join(os.path.dirname(__file__), '..')
SPRITES = os.path.join(ROOT, 'img', 'sprites')
F = 32    # the packs' frame size
OUT = 42  # the sheet's frame size: the art sits 5px in and 1px down
ROWS = ['idle', 'hurt', 'attack', 'faint', 'spawn']
MS = {'idle': 150, 'hurt': 120, 'attack': 85, 'faint': 150, 'spawn': 110}
MAX = 12  # most frames in a row

# sheet id: (pack, folder, {row: [strip names]}); every character already faces right
CHARS = {
    'gk-gumbot': (3, '1 - Gum Bot', {'idle': ['Idle'], 'hurt': ['Hurt'], 'attack': ['Turn_Around_Poses'], 'faint': ['Hurt', 'Screen-off'], 'spawn': ['Walking']}),
    'gk-twiggy': (3, '2 - Twiggy', {'idle': ['Idle'], 'hurt': ['Hurt_&_Recovery'], 'attack': ['Running'], 'faint': ['Falling', 'Touch_Ground', 'Sleeping_&_Wakeup:1'], 'spawn': ['Jumping', 'Touch_Ground', 'Victory_Pose']}),
    'gk-j5': (3, '3 - Robot J5', {'idle': ['Idle'], 'hurt': ['Hurt'], 'attack': ['Fire_Breath_Running'], 'faint': ['Hurt', 'Sleeping_&_Sitting_Up:1'], 'spawn': ['Jumping', 'Touch_Ground_Landing', 'Victory_Poses']}),
    'gk-tommy': (3, '4 - Tommy', {'idle': ['Idle_Poses'], 'hurt': ['Hurt'], 'attack': ['Kick', 'Throw_Object'], 'faint': ['Hurt', 'Kneeling', 'Sleeping'], 'spawn': ['Jumping', 'Touch_Ground_Landing', 'Victory_Pose']}),
    'gk-geralt': (3, '5 - Geralt', {'idle': ['Idle'], 'hurt': ['Hurt'], 'attack': ['Pushing_Object'], 'faint': ['Hurt', 'Sleeping'], 'spawn': ['Jumping', 'Touch_Ground_Landing', 'Victory_Pose']}),
    'gk-penguin': (6, '1 - Penguin', {'idle': ['Idle'], 'hurt': ['Hurt'], 'attack': ['Belly_Sliding'], 'faint': ['Hurt', 'Falling', 'Lying_On_Ground'], 'spawn': ['Jump', 'Victory_Dance']}),
    'gk-fairy': (6, '2 - Fairy', {'idle': ['Idle_Flying'], 'hurt': ['Hurt'], 'attack': ['Charging_Magic_Flying', 'Magic_Attack_Release'], 'faint': ['Hurt', 'Idle_Ground'], 'spawn': ['Flying_Forward_Movement']}),
    'gk-skeleton': (6, '3 - Skeleton', {'idle': ['Twitching_Idle'], 'hurt': ['Hurt'], 'attack': ['Bone_Toss'], 'faint': ['Crumbling_Into_Bone_Pile'], 'spawn': ['Bone_Pile_Wakeup']}),
    'gk-orange': (6, '4 - Orange', {'idle': ['Idle'], 'hurt': ['Hurt'], 'attack': ['Kick_Attack'], 'faint': ['Smacked', 'Squished'], 'spawn': ['Jumping', 'Falling', 'Blink']}),
    'gk-toggle': (8, '1 - Toggle', {'idle': ['Idle'], 'hurt': ['Hurt'], 'attack': ['Punch'], 'faint': ['Death'], 'spawn': ['Jump', 'Landed', 'Idle_Shooting']}),
    'gk-tracy': (8, '2 - Tracy', {'idle': ['Idle_1'], 'hurt': ['Hurt'], 'attack': ['Standing_Crossbow_Shot'], 'faint': ['Hurt', 'Falling', 'Crouch'], 'spawn': ['Jump', 'Landing_And_Get_Up']}),
    'gk-armand': (8, '3 - Armand', {'idle': ['Idle'], 'hurt': ['Hurt_And_Recovery'], 'attack': ['Punching'], 'faint': ['Falling_Start', 'Falling'], 'spawn': ['Jump_Start', 'Jumping', 'Landing']}),
    'gk-percy': (8, '4 - Percy', {'idle': ['Idle'], 'hurt': ['Hurt'], 'attack': ['Shooting_Fireball'], 'faint': ['Hurt', 'Falling'], 'spawn': ['Jump', 'Landing']}),
    'gk-vessa': (8, '5 - Vessa', {'idle': ['Idle_Dance'], 'hurt': ['Hurt'], 'attack': ['Drill_Attack_Start', 'Drill_Attack'], 'faint': ['Hurt', 'Crouch'], 'spawn': ['Jump', 'Landed']}),
    'gk-angie': (8, '6 - Angie', {'idle': ['Idle_1'], 'hurt': ['Hurt'], 'attack': ['Flower_Whip_Attack'], 'faint': ['Hurt', 'Falling', 'Landed'], 'spawn': ['Flying', 'Landed']}),
    'gk-barry': (8, '7 - Barry Cherry', {'idle': ['Idle'], 'hurt': ['Hurt'], 'attack': ['Jump', 'Landing', 'Running'], 'faint': ['Hurt', 'Falling'], 'spawn': ['Victory_Pose']}),
}


def strip(z, pack, folder, spec):
    """Frames of one strip; 'Name:n' keeps only the first n frames. 16px art is centred at the bottom of a 32px frame."""
    name, _, keep = spec.partition(':')
    path = next(n for n in z.namelist() if re.search(rf'/{re.escape(folder)}/{re.escape(name)} \(\d+ x \d+\)\.png$', n))
    im = Image.open(io.BytesIO(z.read(path))).convert('RGBA')
    fw = im.height
    frames = [im.crop((x, 0, x + fw, fw)) for x in range(0, im.width, fw)]
    if fw != F:
        frames = [pad(f) for f in frames]
    return frames[: int(keep)] if keep else frames


def pad(f):
    out = Image.new('RGBA', (F, F))
    out.alpha_composite(f, ((F - f.width) // 2, F - f.height))
    return out


def main():
    zips = {n: zipfile.ZipFile(os.path.join(ROOT, f'Sprite Pack {n}.zip')) for n in (3, 6, 8)}
    anims = {}
    for sid, (pack, folder, rows) in CHARS.items():
        sheet = Image.new('RGBA', (MAX * OUT, len(ROWS) * OUT))
        a = {}
        for r, row in enumerate(ROWS):
            frames = [f for s in rows[row] for f in strip(zips[pack], pack, folder, s)][:MAX]
            for i, f in enumerate(frames):
                sheet.alpha_composite(f, (i * OUT + (OUT - F) // 2, r * OUT + 1))
            a[row] = [r, len(frames), MS[row]] + ([1] if row == 'idle' else [])
        a['front'] = a['idle']
        a['power'] = a['spawn']
        sheet.save(os.path.join(SPRITES, f'{sid}.png'), optimize=True)
        anims[sid] = a
    for sid, a in anims.items():
        print(sid, json.dumps({k: a[k] for k in ['front', 'idle', 'hurt', 'attack', 'faint', 'spawn', 'power']}, separators=(',', ':')))


if __name__ == '__main__':
    sys.exit(main())
