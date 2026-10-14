# Bullet Rig (`bullet-rig`)

**Metaphor:** a bullet-time stage: 24 still cameras on tripods in a semicircle around a frozen coffee splash, in a white infinity cove, with a clapperboard slate at the back → photo-to-3D (NeRF / Gaussian splatting): photos shot around one object are fused into a 3D scene that can be viewed from angles nobody shot.
**Series:** ai-tools · how-ai-works
**Axes:** light · condensed · 3D · diagram

## Look
- **Palette:** `#ECEAE4` white cove (falls off to `#CFCBC2`) · `#161618` ink (slate, tags, monitor bar, plinth; graphite camera bodies shade up to `#707076`) · `#F2F0EA` chalk (slate type, tag text; gaffer tape `#F4F2EC`) · `#E5332A` signal red, the only accent (tally lamps, ghost cameras, hl, caption tick; `#F04A3E` for hl on the slate, `#D42A20` behind the white slug text) · `#8A5733` coffee (crown, lit side `#C08655`)
- **Fonts (Google Fonts):** Big Shoulders Stencil Display 800 (title chalked on the slate) / Mohave 700/500 (tag label + value, slug) / Sometype Mono 500/700 (slate fields, CAM, source, burn-in caption)
- **Grid / layout:** 90 px margins. Open clapper sticks hinged at the left, y ≈ 95–296 (decoration). Slate x 90–990 from y 300: field row PROD. = series · SCENE = ep · TAKE 1; title in stencil caps (fit 150→80 px, ≤ 236 px tall), hl written in red; bottom row DATE = date · CAM 01–24. A C-stand riser runs from the slate down behind the splash, so the slate stands at the back of the cove. Rig + splash fill slate bottom + 26 px → source line (true perspective, auto-scaled, horseshoe ≤ 860 px wide, centre x 528). The CAM 01/24 tags sit in the band under the slate and are always placed above the ghosts. Front tags hang from their tripod heads. Source line sits above the monitor bar, and the bar's bottom is at y 1616.
- **Signature elements:**
  1. The clapperboard slate, which starts every bullet-time take, is the title card. Its own fields carry series, ep and date, and the hl word is written in red marker.
  2. 24 identical graphite cameras on tripods in a true-perspective semicircle, joined by a thin sync cable. Each item is a picked camera: red tally lamp on, lit LCD, a grey view cone into the splash, and a black tag with a white gaffer-tape CAM number (how real rigs label cameras).
  3. 6 red dashed ghost cameras at 1.6× size float on the back arc beside the splash (14/34/54° and 126/146/166°): the views nobody shot. The one at 146° throws a dashed red view cone into the crown and carries the "SUDUT BARU" slug.

## 2-second hook
- **Frame 0 shows:** the cover. The slate is chalked with "24 foto jadi satu dunia 3D" (6 words), the frozen crown is ringed by the rig, and CAM 01's tally lamp is lit.
- **Motion (0–2 s):** the clapper sticks snap shut at 0.1 s; the clap is the sync. Then the video cuts to the camera POVs: the scene is re-rendered from each CAM's lens (EYE = lens, TGT = splash), CAM 01 → 24, in 24 hard cuts of 0.08 s each (1.92 s, ending at ≈ 2.0 s), with every droplet locked mid-air. That is the true bullet-time orbit around the frozen crown, not a turntable spin. The burn-in counts FRM 01/24 → 24/24, and the hook line stays in the bar.
- **Why it stops the scroll:** time is frozen but the viewpoint orbits. That impossible camera move reads as "bullet time" in under a second.
- **Hook type (docs/bank-hook-ending.md):** #3 Hasil dulu, caranya nanti (result first: the finished orbit plays before any explanation).

## Loop ending
- **Last ≈ 1.1 s:** after the CTA (~85%), the POV cuts resume at CAM 19 → 24 (5 × 0.08 s = 0.4 s). They then run on through the back-arc views the AI renders: the 6 drawn ghosts plus 3 hidden behind the splash (72°, 90°, 108°), so 9 × 0.08 s = 0.72 s. Each rendered view gets a red dashed frame line and a "SUDUT BARU" burn-in. Total 1.12 s.
- **Seam:** the orbit closes on CAM 01 with a hard cut to the overview, which is frame 0 exactly: slate open, CAM 01 lit, and "24 foto jadi satu dunia 3D" back in the bar. The 0.08 s shutter-click rhythm carries over the cut into the 0.1 s clap (ending E, motion continues; J, same click on both sides).

## Caption / voice-over
- **Slot:** `data-slot="caption"` inside a black camera-monitor burn-in bar, x 90–900, bottom at y 1616. The top row is Sometype Mono 26 px "● FRM 01/24 · TC 00:00:00:01". Under it, the caption is Sometype Mono 44→40 px, max 2 lines; a longer caption shows a word window with "…" around the active word. The active word is white bold with a red underline tick; the rest is chalk.

## Notes for the video build
- Per beat: each tag slaps on as its picked camera is named, the tally lamp blinks on, and its grey cone draws lens → splash. The ghosts draw their red dashes on "sudut baru", with the SUDUT BARU cone last. FRM/TC run in the burn-in.
- Camera: the overview holds still by default. The POV cuts are content (the rig's own photos), not camera moves. Max 1 emphasis move per scene (e.g. one push toward the ghost cone). The rig is a real projection (EYE/TGT in the script), so POVs are true re-renders; hide the slate, tags and leaders in POV mode and keep the droplets identical across cuts.

## References
- https://en.wikipedia.org/wiki/Bullet_time — an arc of still cameras captures one instant from many viewpoints; played in order it orbits a frozen moment.
- https://en.wikipedia.org/wiki/Neural_radiance_field — a scene rebuilt from 2D photos can be viewed from new, unshot viewpoints (the red ghost cameras).
- https://en.wikipedia.org/wiki/Clapperboard — slate fields (production, scene, take, date) and the clap that syncs every camera.
- https://en.wikipedia.org/wiki/Tally_light — a red lamp marks the camera that is live (the picked cameras).
- https://en.wikipedia.org/wiki/Harold_Eugene_Edgerton — the milk-drop coronet: a crown with a droplet on every tine reads as "frozen instant" at a glance.
