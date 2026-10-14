# Dope Sheet (`dope-sheet`)

**Metaphor:** an animator's exposure sheet, one ruled row = one frame = 1/24 s → AI video in numbers: a 5-second clip is 120 rows the model must fill with consistent pictures, which is why one AI video costs far more than one AI image (illustrative).
**Series:** ai-in-numbers · how-ai-works
**Axes:** full-colour · condensed · 2D · data

## Look
- **Palette:** `#4A2B4F` plum board · `#F4EEDC` sheet paper + title · `#1E1B1A` ink (print, keys, peg bar) · `#E8A33D` amber pencil (row 1, row 120, key loop on hl, active caption word) · `#7FA3C8` blue pencil (frame hairlines, timing wiggles)
- **Fonts (Google Fonts):** Archivo Narrow 700/600 (title, item labels, caption) / Space Mono 700/400 (printed form, frame numbers, circled values)
- **Grid / layout:** margins x 90–990. Bouncing-ball pencil study y 80–265 (decoration, top UI zone). Title y 318–≤594 (2–3 lines, fitted 128→72 px). Peg bar + punched sheet top at title + 74. Sheet x 70–1010 down to y 1668: header row (series · ep / 24 FPS), column heads DTK | AKSI | DLG | NILAI | KAM, then exactly 120 frame rows (~y 800–1440, ~5 px a row). Caption ~y 1460–1580, source/date ~y 1590–1618. Two-colour pencil y 1700–1800 (decoration).
- **Signature elements:**
  1. The 120-row frame grid: a hairline per frame, heavier every 8th, an ink rule every 24th numbered `24 · 1 dtk` … `120 · 5 dtk`; row 1 amber with a playhead tab, row 120 amber with `120` circled.
  2. Peg bar through the punched sheet, over a stack of drawings: unmistakably the animation desk.
  3. Pencil notation: each item is a key block (key line + dot, label in AKSI, value circled in NILAI), blue timing wiggles below, sustain brackets in DLG, a truck-in wedge in KAM.

## 2-second hook
- **Frame 0 shows:** the whole sheet on its pegs, row 1 lit amber, the ball resting on its first drawing; on-screen line `5 detik = 120 gambar`.
- **Motion (0–2 s):** the amber playhead tab races down the margin row by row (linear, 1.6 s) while the DTK counter rolls 1→120 and the ball study ticks through its drawings; at 1.7 s the pencil loop draws itself round `120` (draw-in 0.3 s, Count & lock).
- **Why it stops the scroll:** "5 seconds" is suddenly 120 visible rows you watch being counted, and each one is a picture the AI has to draw.
- **Hook type (docs/bank-hook-ending.md):** #2 Angka mustahil (impossible number).

## Loop ending
- **Last 1 s:** the playhead lands on row 120, the sheet lifts off the pegs (Sheet slide, up and out), revealing an identical fresh sheet beneath with row 1 lit and the ball back on drawing 1.
- **Seam:** Bank G (progress reset): the fresh sheet is exactly the frame-0 composition; the counter's last tick is the same tick sound that opens frame 0.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 96–984, y ~1460–1580 (laid out bottom-up above the source line, so it never meets the grid), 46→40 px Archivo Narrow 600, max 2 lines. Karaoke: spoken words ink, upcoming words muted `#66595C`, active word ink bold on an amber pencil block (= D.hl if it appears in the caption, else the first word).

## Notes for the video build
- Per beat: rows fill one per frame (Stagger build), the key line stamps in on the word that names the item, the value loop draws itself (Draw-in), the blue wiggle draws down its block, numbers Count & lock. Liveliness comes from the pencil, not the camera.
- Camera = punctuation: still by default; at most one punch-in per scene to the key block being spoken, and one pull-back to the whole sheet for the `120` payoff; hold ≥ 1.5 s after it.
- Risk: ~5 px hairlines can shimmer when scaled; keep punch-ins ≤ 1.15× or thicken the hairlines during the move.

## References
- https://en.wikipedia.org/wiki/Exposure_sheet — each row is one frame; columns hold action, dialogue and camera: time made visible as a grid.
- https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation — slow in / slow out: drawings bunch at the top of the bounce, the logic behind the ball study.
