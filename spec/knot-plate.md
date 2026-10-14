# Knot Plate (`knot-plate`)

**Metaphor:** one engraved plate from a seamanship manual: a hero knot drawn tight and pulled from both ends, with smaller numbered specimen knots under it → machine unlearning: training ties data into the weights like a knot. Tying it is easy. Pulling one fact back out only tightens everything around it.
**Series:** how-ai-works · ai-news
**Axes:** light · serif · 2.5D · diagram

## Look
- **Palette:** `#F0EADB` paper · `#2B2B2B` engraving ink · `#C77B3B` manila rope · `#2E4A7A` navy (hl, Gbr. numbers, TARIK, active word) · `#B53A2E` tag red
- **Fonts (Google Fonts):** Playfair Display 800/700 (plate heading, small-caps line, `Pl.`) / Libre Caslon Text italic (labels, sub, legend) / Archivo Narrow 600/700 (Gbr. numbers, values, TARIK, imprint)
- **Grid / layout:** the plate is the page. Plate mark (toned, bevelled) x 70–1010, y 280–1646. Engraved double rule x 90–990 from y 300 down to the legend. Inside: `Pl. I` top-right (y 314), centred small-caps line `PELAT I · <series>` (y 352), centred title from y 398 (caps, 116→72 px, ≤ 3 lines, 4 for long titles, lining figures), then an ornament rule, or the separate `sub` (40 px italic) in its place. Hero band (≥ tag height + 114 px, ≤ 440 px): Turk's-head knot on a line x 134–946, red tag x 540–900. Specimen band: n−1 knots, one row (≤ 3, centred legends) or 2 × 2 (4, legend beside each knot), gutter ≥ 28 px, one label height and one value size for the set. Imprint (source · date) in the plate's bottom margin, x 128–900. Legend (caption) under the bottom rule, ending at y 1614. Text stays left of x 900 in y 900–1500.
- **Signature elements:**
  1. A real engraved plate: double rule over the safe area, plate mark, centred caps heading with roman plate number, ornament rule, italic legend `Gbr. n — …` under the bottom rule.
  2. Engraved rope: each rope is one centreline whose crossings are found geometrically and alternate over/under, with paper gaps, a 2 px ink outline, a hatched shadow side and hatched cast shadow, laid-strand grooves and whipped ends.
  3. Tangle encodes rank, never position by default: specimens go crossing turn (1) → overhand (3) → five-lobe (5) → seven-lobe (7) by the rank of their parsed value, so equal values get the same knot. If the values don't share a unit, the knots follow item order and the imprint adds `simpul: urutan, bukan besaran`. The hero (last item) is always a Turk's head (8), pulled by two navy TARIK arrows that hug its standing parts, with the red tag tied on.

## 2-second hook
- **Frame 0 shows:** the plate exactly as on the cover. In the video, the heading carries the myth: `HAPUS SATU DATA? GAMPANG.` (hl = Gampang, rope underline). That is 4 words.
- **Motion (0–2 s):** at 0.6 s, a 10 px red engraved rule strikes through the heading line by line, left to right (0.25 s, ease-out). At the same instant comes the tug. Both arrows nudge 24 px outward. The hero's torus curve is redrawn at 68 % scale while the rope width W stays the same. Both standing parts lengthen by the path length lost, so the rope visibly runs out through the arrows (0.6–1.3 s, power2.inOut). The paper gaps close and the crossings pile up. The tag jerks +6° and settles back to −2.5° (0.6–1.2 s). Text never bounces.
- **Why it stops the scroll:** the myth is struck out right where the eye lands, and the pull to undo the knot makes it visibly tighter.
- **Hook type (docs/bank-hook-ending.md):** #4 Mitos dicoret

## Loop ending
- **Last 1 s:** the CTA (`Simpan pelat ini`) lands as the legend at about 85 %. Then the tension is released: the arrows retract 24 px inward (0.4 s), the hero eases back to its frame-0 size with no pull (0.5 s, power2.out, legs shorten), the tag swings back to −2.5°, and the red strike retracts right to left. The legend returns to the frame-0 line.
- **Seam:** ending B (frame kembali). The last frame is the frame-0 composition, so the cut lands on the relaxed plate and the 0.6 s tug follows on directly. No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"`, centred x 90–990 (x 120–900 when it needs 3 lines), bottom at y 1614, Libre Caslon Text italic 44 px (40 min), 1–2 lines, prefixed with `Gbr. n —` in brown (the prefix is dropped when the line is long). Karaoke: exactly one active word (the longest word of the hl match, else the first word) in navy roman small caps 700 with a thin whipped-rope underline.

## Notes for the video build
- The plate is fully drawn from frame 0, and legends never disappear. As each item is named, a 3 px navy tracing pass runs along that knot's centreline (stroke-dashoffset, 0.8 s) and its `Gbr.` number gets a navy ring. The trace retracts when the next knot is named, and the last one clears at the CTA.
- Camera: stays still during the hook, because the knot does the moving. One punch-in to the specimen band while the items are named, held ≥ 1.5 s, then a cut back wide for the CTA.
- Layout yields under pressure: the title shrinks to 72 px first. A separate `sub` is dropped only when the plate cannot hold it (for example a 4-line title + a 2-line sub + 5 items).

## References
- https://en.wikipedia.org/wiki/The_Ashley_Book_of_Knots — numbered knot entries: the drawing shows the rope path, and the number identifies the knot
- https://en.wikipedia.org/wiki/Alternating_knot — over/under alternating along the strand makes a believable knot diagram
- https://en.wikipedia.org/wiki/Turk%27s_head_knot — an interwoven sailor's knot as the hero that won't pull apart
- https://en.wikipedia.org/wiki/Intaglio_(printmaking) — engraved line, hatching and the plate mark around the image
