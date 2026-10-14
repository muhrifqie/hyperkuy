# Disorder Plot (`disorder-plot`)

**Metaphor:** a pen plotter drawing rows of concentric squares (after Molnar's *(Des)Ordres*) → temperature / randomness in sampling: the same program draws a perfect grid at T 0; turn the knob up and squares tilt, wobble and drop out. Creativity and chaos are one knob. Made for randomness, temperature and sampling topics; on other topics the passes are only an illustration.
**Series:** how-ai-works · ai-tools
**Axes:** light · mono · 2D · code

## Look
- **Palette:** `#F3F0E8` heavy plotter paper · `#151515` black pen ink · `#D9432B` vermilion second pen (hl, carriage, active word, loop variable) · `#2B5BA6` blue annotation pen (row tags) · `#8A8780` aluminium hardware (rails, beam, registration marks)
- **Fonts (Google Fonts):** Martian Mono 800, width 87.5 → 75 for long titles (plotted title) / Instrument Sans (row labels, caption) / Martian Mono 75 (tags, values, program) + Caveat (pencil sign-off)
- **Grid / layout:** the sheet (x 44–1036) is held by four round magnets on a grey bed between two side rails. Title from y 312, 2–4 lines (104→68 px). Plot from title + 44 down to the beam: one row per item = 56 px header (tag · label — value) over a strip of squares x 90–900, so nothing is plotted right of x 900. Program printed up the left margin (x ~54–80). The bottom is stacked upward from y 1616: caption (≤ 2 lines, x 90–990), pencil sign-off right-aligned to x 900, beam (40 px) with the carriage at its left end.
- **Signature elements:**
  1. Dosed disorder inside one drawing: row 1 is crisp nested squares; each lower row tilts more, its corners wobble and squares drop out (fixed hash; cells keep their grid spot and one of the two outer squares always stays, so nothing looks broken). Rows are tagged `T=` only when the data gives every item a temperature (`item.t`, or a label like "Temperature 0,7" / "suhu 1"), and then T sets the dose. Otherwise rows are plotter passes `P1…Pn` with no invented number.
  2. Plotter lettering: each title glyph is outlined by one 2.5 px pen and filled with a 45° ink hatch. `hl` is a second pass with the vermilion pen, hatched at −45°. The program that drew the sheet runs up the margin: `for p in passes: plot(squares, seed=p)`, or in T mode `for T in (0, 0.5, …): plot(squares, jitter=T)`.
  3. The vermilion carriage is parked at the LEFT end of the gantry beam with its pen down on the first cell of the last row. Under the beam is a pencil sign-off, right-aligned like a signed print: `Cara kerja AI #01 · P1–P4 · 1/1 · 14.10.26`, then `sumber: …`.

## 2-second hook
- **Frame 0 shows:** the whole sheet. The top row is crisp and the bottom row is loose (before and after in one drawing). The carriage is parked left with its pen on the bottom row. Title ≤ 7 words, e.g. "Satu angka bikin AI ngaco."
- **Motion (0–2 s):** 0–1.1 s: the carriage sweeps the beam left→right from its park to the last cell (power3.inOut). As the pen passes each bottom cell, the cell re-plots one notch looser (+10° tilt, one more inner square drops, 80 ms per cell, no bounce). At the same time the bottom tag counts up in vermilion (T mode: T=2.0→2.6; pass mode: P4→P4·2). The top row stays dead still, because that contrast is the point. Hold from 1.3 s.
- **Why it stops the scroll:** order and chaos sit side by side and read at thumbnail size. A 130 px vermilion carriage crossing the screen and shaking the drawing apart makes people ask why.
- **Hook type (docs/bank-hook-ending.md):** #6 Sebelum vs sesudah terbelah

## Loop ending
- **Last 1 s:** the carriage glides back right→left to its park (power2.inOut). As the pen passes each bottom cell, the cell settles to its exact frame-0 geometry, and the bottom tag counts back to its frame-0 value.
- **Seam:** the last frame has the carriage parked left and every cell in frame-0 geometry, so it equals frame 0 (ending B, Frame kembali persis). The next left→right sweep reads as the plotter's next pass, the way a pen shuttles back and forth.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–990, bottom-anchored at y 1616 (about y 1500–1616 for 2 lines), Instrument Sans 46→40 px, max 2 lines (ellipsis beyond). Active word = `hl` if it occurs in the caption, else the first word: paper-coloured bold, knocked out of a vermilion block filled with dense −45° pen hatch.

## Notes for the video build
- Frame 0 is the finished sheet, so beats point rather than build. Per row the carriage rides (pen up) to that row's first cell, the tag underlines in blue pencil, and the value counts and locks on the word that names it. Camera: still. At most one punch-in per scene, on the row being explained, holding ≥ 1.5 s.
- Seek-safe jitter: precompute every square's frame-0 geometry and its "one notch looser" geometry, then tween between the two. Never re-roll noise per frame. During the body the carriage may sit past x 900, but at the hook and the seam it is parked left, clear of the action rail.
- This is the batch's second temperature design after `ac-remote`. The two look very different, but don't recommend both for the same video.

## References
- https://infiniteimages.toledomuseum.org/collection/desordres — Molnar's dosed disorder: removing squares, offsetting axes and tilting cells as a visible "amount of randomness".
- https://www.behance.net/gallery/133523423/AxiDraw-Pen-Plotter-Generative-Artwork — plotter ink on paper driven by code: hatch-filled outline lettering, and the program and drawing belong on the same signed sheet.
