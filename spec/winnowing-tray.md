# Winnowing Tray (`winnowing-tray`)

**Metaphor:** a woven bamboo tampah caught mid-toss, lying half over a flattened rice sack → training-data curation: one big mixture goes in, most of it is swept to the rim (duplicates, spam, junk), and only one small clean heap is kept to train on.
**Series:** ai-in-numbers · how-ai-works
**Axes:** dark-and-light · condensed · 2.5D · physical-object

## Look
- **Palette:** `#1D1A17` floor · `#E6E0CF` woven-plastic sack · `#1C3F86` flexo blue ink (title, small print, discard stamps) · `#B5322A` flexo red ink (hl, top band, active word; the kept slip uses stamp-pad red `#8E2217`) · `#C8A36A` bamboo weave
- **Fonts (Google Fonts):** Anton (sack lettering, slip values) / Barlow Condensed 500–700 (top band, small print, hem label, slip labels, caption)
- **Grid / layout:** margins x 90–990. The sack (rotated −1.2°) spans y 220–1030, half under the tray. Red top band y 290–338 = kicker. Title printed on the sack at x 96–982 from y ≥ 358, fitted 140→72 px, ≤ 246 px tall; title + small print are centred in the print area (y 350–672). The source is the sack's small print 22 px under the title. The date is on a paper label sewn into the hem (x 752–978, y 236–350). Tray ellipse centre (540, 1062), 920 × 736 plus a 24 px lip → y 694–1454. Inside the tray: row 1 (back rim piles) → kept heap + its slip (centre) → row 2 (front rim piles); slip text ≤ x 880 below y 900. Caption y ≈ 1474–1600.
- **Signature elements:**
  1. The sack print carries all the type: 2-colour flexo with the red plate 3 px off the blue (hl in red over a blue sliver), ink broken by the woven tapes plus small dropouts, keylines, a lower red band, a rice-stalk emblem, a chain-stitched hem with a sewn-in paper label.
  2. The tampah: 2/2 twill bamboo weave, lashed rolled rim, visible lip and a cast shadow on the sack; mid-toss grain and chaff hang in the air and drift off the right edge.
  3. Item routing: the item that matches `hl` (label words, or the same number: hl "cuma 6" ↔ value "6%"), or `item.keep: true`, else the last item, becomes the clean centre heap. It is the only lit spot, has a wooden centong pushed into it, and sits on a torn brown-paper slip stamped in red (value 80→50 px). The other 2–4 items are rim piles of different fractions (husk, grit + stones, paddy, broken rice + bran), each sitting on a torn scrap of brown paper stamped in blue.

## 2-second hook
- **Frame 0 shows:** the same sack and tray with one mixed mound in the centre (rice, husk, grit and paddy together). The slips are tucked under the rim, and the title is already printed.
- **Motion (0–2 s):** at 0.2 s the tray itself flicks: translateY −18 px and scaleY 0.96 on the lip side over 0.18 s, then back with power2.out over 0.35 s. In sync, grains rise on short arcs (shadows shrink, then grow) and the husk cloud peels off to the right edge (0.9 s). After that the tray stays dead still. From 0.9 to 1.4 s the fractions slide to the rim and their slips slide out from under it (stagger 80 ms). The clean heap stays in the centre while the light pool fades up on it, and at 1.5 s the centong is pushed in. On-screen text ≤ 7 words, e.g. "94% data AI dibuang."
- **Why it stops the scroll:** a familiar kitchen flick throws away almost everything in one second, and what is left is shockingly small.
- **Hook type (docs/bank-hook-ending.md):** #2 Angka mustahil. Numbers are illustrative unless a sourced figure and date are on screen.

## Loop ending
- **Last 1 s:** after the CTA (~85%), the other real winnowing gesture: a 0.8 s circular swirl of the tray (nampi shake, ±10 px circular translate, one turn). It drags the rim piles and the kept heap back into the single mixed mound, the slips slide back under the rim, and the light pool and centong withdraw.
- **Seam:** ending B/D. The last frame is pixel-identical to frame 0 (same mound, same tray position), so the 0.2 s flick replays without a cut. No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–900, y ≈ 1474–1600 (1–2 lines, Barlow Condensed 600, 48→40 px, cream on the floor). Karaoke: the active word is a red-ink block with cream bold text (active = `hl` when it appears in the caption, else the first word; a multi-word hl may break across lines as two blocks). `sub` is shown only here.

## Notes for the video build
- Per beat: the named fraction slides to the rim, its slip slides out and its value is stamped (scale 1.04→1, no bounce), then the next one. The tray and sack never wobble at rest.
- Camera = punctuation: at most one push-in per scene onto the slip being named (hold ≥ 1.5 s), and one pull-back at the payoff to show how small the kept heap is.
- Risk: ~2,500 SVG grains. Pre-render sack + tray + weave as one layer; animate only the mound/piles, airborne grains, slips and centong.

## References
- https://en.wikipedia.org/wiki/Winnowing — one repeated gesture does the separating: air carries chaff off while heavy grain falls back.
- https://en.wikipedia.org/wiki/Flexography — 2-colour flexo on woven polypropylene sacks: separate plates, visible misregistration, ink broken by the weave.
- https://en.wikipedia.org/wiki/Isotype_(picture_language) — show quantity as countable units of the same grain, not enlarged icons.
