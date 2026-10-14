# Lontar Leaves (`lontar-leaves`)

**Metaphor:** an opened Balinese lontar bundle seen from above, every leaf threaded on one red cord. Each language gets one leaf, but only its share of the training data is really there, as a torn fragment inside the outline of the whole leaf. Below sits the shut rest of the bundle: everything else the AI read. Indonesian and regional languages are a scrap against a library.
**Series:** ai-in-numbers
**Axes:** dark-and-light · serif · 2.5D · physical-object

## Look
- **Palette:** `#1C1410` teak table (soot ink `#24180F` is its near-black twin) · `#D8C08E` palm leaf, carved kicker + colophon · `#3A2A1E` cakepan boards · `#A8432F` red cord, graphic only (its shade `#6E2619` is the red-brown ink for `hl` and the active caption word) · `#EFE4CC` words written on the bare table
- **Fonts (Google Fonts):** Spectral 600 (title) / Spectral 600 italic (leaf labels), 500 (caption) / Space Mono 700-400 (values, kicker, folio, colophon)
- **Grid / layout:** flat top-down, no 3D rig; bundle x 72-1008, cord down the centre x 540. Top board y 292-350 (kicker text y 300-341) · title leaf from y 360, 2 lines at 96-112 px (≈360-650); 3-4 lines for long titles; only a 50-60-character title with 5 items steps down to 82-90 px · item leaves from title+16, 56-92 px tall (≤84 for 5), gaps 8-36 · shut stack ≥150 px visible · bottom board ≈1300-1406 · cord tail + coin · caption strip ≈1440-1617. Text x 92-980 above y 900; x ≤ 888 for y 900-1500 (values end at 886, colophon date at 880). Only leaf ends, boards and coin, all decoration, reach x 900-1008.
- **Signature elements:**
  1. The title leaf: the first leaf of the bundle. The title is incised in soot-dark ink with a pale lip, three holes run along its top margin, and the cord enters the centre hole from a knot on the top board. `hl` is red-brown italic, lashed under with a length of cord and knotted (one length per line fragment). Rows of pseudo-script finish the last line.
  2. Item leaves = the whole leaf drawn as a faint incised outline with three holes, cord through the centre. When all values share a unit, only value/max of the leaf is real: a torn palm fragment of at least 56 px; the empty outline is the rest. Words are incised on the fragment when they fit, else written on the bare table inside the outline. A leaf shifts a few px at most so no word straddles its tear, and equal values stay equal. Mixed units → every leaf whole. One label/value size for all leaves (38/44, never below 30/34). The written part carries rows of SVG hairline pseudo-script (not text), and leaf edges and ends are darkened.
  3. The shut stack: ≥150 px of leaf edges whose top leaf shows script and three holes, and the cord dives into it. Carved boards: a tumpal band with the kicker + "n lembar", and a colophon board (source + date) with a kawung flower. A kepeng coin hangs on the cord tail, and the caption sits on a loose leaf strip.

## 2-second hook
- **Frame 0 shows:** the cover itself: title leaf tied on the cord, the leaves fanned (±0.6°) with their outlines, one whole leaf against torn scraps, the shut stack below.
- **Motion (0-2 s):** 0.2-1.4 s a brighter soot line runs along each empty outline from the tear to the far end (stroke-dashoffset, power1.inOut, stagger 120 ms), so the eye measures what is missing. 1.4-1.8 s the `hl` cord pulls taut. Camera still.
- **Why it stops the scroll:** a whole leaf next to scraps inside empty leaf outlines shows the absurd ratio before anyone reads a number, in an object from home ("ini ngaruh ke kita").
- **Hook type (docs/bank-hook-ending.md):** #2 Angka mustahil

## Loop ending
- **Last 1 s:** after the CTA (~85%), the punched-in leaf settles back into the fan, the soot line runs back from the far end to each tear, and the cord pulls taut on the knot.
- **Seam:** the last frame is frame 0 exactly (same fan angles, same knot), and the soft "tap" of the cord tightening is the first SFX of frame 0. Ending B (frame kembali persis) + J. No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` on a loose palm-leaf strip, text x 92-888 ending ≤ y 1610. Spectral 500 at 46 px (down to 40), 1-2 balanced lines, soot ink on palm. Karaoke: the active word (`hl` if it is in the caption, else the first word) is incised in red-brown `#6E2619`, bold italic. An 80-90-character caption gets a wider strip that sits wholly below y 1500 (text x 92-972).

## Notes for the video build
- Per item beat: on the word that names it, that leaf's outline re-cuts and its value counts up and locks. Fragments never grow past their share; the empty outline carries the point.
- Camera: one punch-in per scene at most, on the scrap leaf when its number is spoken, hold ≥1.5 s. Fan angles stay ≤0.6° and never animate rotation on text. Self-host Spectral + Space Mono for the render.

## References
- https://en.wikipedia.org/wiki/Palm-leaf_manuscript — letters incised with a stylus and darkened with soot, holed leaves threaded on a cord between wooden boards: text as relief, book as a bundle.
- https://en.wikipedia.org/wiki/Balinese_script — rounded looping letter shapes without a headline, used only as the rhythm of the pseudo-script rows (no real letters drawn).
- https://en.wikipedia.org/wiki/Cash_(Chinese_coin) — the round coin with a square hole (kepeng in Bali) as the cord's stopper.
