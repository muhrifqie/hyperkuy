# Plate Number (`plate-number`)

**Metaphor:** stamped aluminium number plates bolted to a rack on a garage wall → token IDs: every piece of text is issued a fixed number; the model never reads the word written on the wall, only the plate it was given.
**Series:** how-ai-works
**Axes:** dark · condensed · 3D · physical-object

## Look
- **Palette:** `#121314` charcoal block wall · `#F3F4F2` plate face, title · `#0E0F11` embossed ink, plate rim · `#2F6FD6` slotted steel uprights · `#C9A13B` lumber-crayon words + arrows, episode number
- **Fonts (Google Fonts):** Saira Condensed 700 (title, embossed plate numbers) / Saira Semi Condensed 500-600 (caption) / IBM Plex Mono 500-600 (series plate, expiry row, meta) + Kalam 700 (crayon words on the wall)
- **Grid / layout:** margins x 90-990. Tube light y 104-186 (decor). Meta y 300-354 (series on a small black plate left, `EP #nn` right). Title y 384 → ≤ 646 (118→76 px fit, uppercase, ≤ 262 tall). Rack band from title + 80 (≥ 640) to caption − 72: N plates (ratio ≈ 2.7:1, ≤ 566×206) right-aligned to x 884 on two blue uprights, the whole rack at rotateY −11° / rotateX 3°; crayon label column to their left (x ≥ 90, ≤ 2 lines, 60→40 px) with a short crayon arrow into each plate. Caption bottom-anchored 26 px above meta; source/date bottom-anchored at y 1620. Workbench y 1704-1920 (decor: crayon, screws, a stack of blank plates).
- **Signature elements:**
  1. Real 3D plates: stacked edge layers, raised black rim, embossed characters with a light top edge and cast shadow, two cross-head bolts, each hand-bolted a few tenths of a degree off level; `value` is the main row.
  2. The expiry row reused as the position index (`01.04` = plate 1 of 4) under a stamped rule: the number is official, the order is fixed.
  3. The human word in yellow lumber crayon on the wall, arrowed into its plate; the title `hl` and the active caption word are each stamped on their own mini plate ("a plate = what the AI reads").

## 2-second hook
- **Frame 0 shows:** bare blue uprights with empty slots and one word ("Indonesia") written large in crayon across them; on-screen "Ini yang dibaca AI" (4 words).
- **Motion (0-2 s):** at 0.5 s two plates stamp down over the word (Stamp/slam: 0.18 s in, 2 px overshoot on the plate only, bolts spin in 0.25 s), reading only numbers (`#15836`, `#3200`); the crayon word slides left into the label column and the arrows draw in (0.4 s, power2.out). Camera still.
- **Why it stops the scroll:** a word you can read is covered by something official you cannot, in under a second: "what does the AI actually see?" is answered visually before it is asked.
- **Hook type (docs/bank-hook-ending.md):** #7 Yang sebenarnya dilihat AI

## Loop ending
- **Last 1 s:** after the CTA (~85 %), the bolts unscrew and the plates are lifted off the uprights bottom-up (0.12 s stagger, ease-in, up and out of frame), the label column slides back and the crayon word is whole on the bare rack again.
- **Seam:** ending D (benda dibongkar balik): the last frame is exactly frame 0 (bare uprights + whole word), so the stamp at 0.5 s re-issues the plates; the bolt "click" that ends the video is the click that opens it (J).

## Caption / voice-over
- **Slot:** `data-slot="caption"` x 90-900, bottom-anchored 26 px above the source line (≈ y 1400-1525 for 2 lines, ≈ 1490-1555 for 1), 46→40 px Saira Semi Condensed 500 `#D2D4D0`; active word stamped on a mini plate (`#F3F4F2` face, `#0E0F11` rim + 600 text). Longer than 2 lines → a window around the active word with ellipses.

## Notes for the video build
- Beats: per item, the crayon word writes itself (Draw-in), the arrow draws, then its plate slides onto the uprights and the bolts spin in on the word that names it; digits Count & lock before the plate settles. Nothing wobbles while idle; one Glint sweep across the plate being explained.
- Camera = punctuation: still by default; one punch-in to a single plate face at the payoff (hold ≥ 1.5 s), no other emphasis move in that scene.
- Plates stamp values in capitals unless a unit is mixed-case (`Wh`, `kB`); keep values ≤ ~10 chars and labels ≤ ~20 chars, 5 items shrink plates to ~120 px tall.

## References
- https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Indonesia — fixed format with a small expiry row; switched to black-on-white for camera readability: the plate is made to be read by a machine.
- https://en.wikipedia.org/wiki/FE-Schrift — tamper-resistant letterforms designed for machine reading first: a typeface whose real reader is not human.
