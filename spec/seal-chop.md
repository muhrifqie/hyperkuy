# Seal Chop (`seal-chop`)

**Metaphor:** a hanging ink-landscape scroll whose margins slowly fill with red collector seals, each one recording who owned, approved or changed it → content provenance / AI labels: an image now carries a chain of stamps (made with AI, edited, uploaded, checked).
**Series:** ai-news (also fits ai-tools: "how to read the label on a photo")
**Axes:** light · serif · 2D · physical-object

## Look
- **Palette:** `#F3ECDD` rice paper · `#B3261E` cinnabar seal paste (seals, hl, active word) · `#2B2622` sumi ink (landscape, text) · `#3F4F6B` indigo silk mount · `#C8B48A` brocade bands + roller knobs (wall = paper tint `#E3DACA`)
- **Fonts (Google Fonts):** Old Standard TT (inscription/title, carved seal values, caption) / Instrument Sans at 78–85% width (seal labels, meta)
- **Grid / layout:** scroll mount x 72–1008, top rod y 148, painting x 104–976 / y 252–1636, roller y 1724. Text column x 150–930. Meta y 300 · title from y 352, ≤ 300 px tall (fit 108→70 px, balanced lines) · landscape zone ≈ y 620–1380 (starts 44 px under the title) · seals stamped in date order from 15% of the zone downward, alternating margins (left x ≥ 146, right edge ≤ 890 so x > 900 stays clear), last seal always lower-left · caption bottom-anchored ≈ y 1400–1550 · colophon (source left, date right) ends y 1608.
- **Signature elements:**
  1. Red collector seals = the items — three carving styles in rotation (solid block with a paper hairline frame, red-on-paper double border, pebble "leisure" seal), tilted ±2°, flecked impression texture, label carved in condensed caps over a serif value.
  2. The inscription gets stamped: `hl` sits in a tilted seal block inside the title, so the headline itself is "labelled".
  3. The scroll as an object — indigo silk mount, brocade bands, hanging strips, rod + roller with knobs; an ink shanshui with mist bands, hemp-fibre texture strokes, moss dots, an old pine over the water and a fisherman.

## 2-second hook
- **Frame 0 shows:** the whole scroll on the wall, a clean, beautiful ink landscape with the inscription already written — no seals, `hl` still plain ink.
- **Motion (0–2 s):** 0.45 s the first seal slams onto the upper margin (scale 1.18 → 1, 120 ms, tiny overshoot on the seal only, flecks of paste settle 150 ms); 1.1 s a second hit stamps the `hl` word in the title. Landscape stays dead still.
- **Why it stops the scroll:** a calm picture you'd trust is suddenly branded — one red stamp changes how you read the whole image.
- **Hook type (docs/bank-hook-ending.md):** #10 Berita yang langsung berdampak (news card + stamp).

## Loop ending
- **Last 1 s:** the bottom roller rolls the painting up (0.45 s, seals vanish into the roll), a 0.1 s beat at the top rod, then it unrolls down again (0.45 s) over a clean, unstamped landscape.
- **Seam:** the roller lands at y 1724 on the final frame = frame 0 exactly (same scroll, no seals, plain title); the unroll "thwap" sits on the loop beat right before the first seal's thunk. Ending **B** (frame kembali persis). CTA goes before it (~85%).

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 150–930, bottom-anchored ≈ y 1400–1550 under the landscape, 1–2 lines, Old Standard TT 44 px (46→40 fit), ink; karaoke: active word in cinnabar, bold, 5 px cinnabar underline (= `hl` if it is in the caption, else the first word). `sub` is shown only here.

## Notes for the video build
- One seal per spoken item, landing on the word that names it (stamp/slam), in date order top → bottom; values never count — they are carved, they arrive with the stamp.
- Camera: still by default; one punch-in per scene to the seal being spoken, hold ≥ 1.5 s, then the next seal lands (no zoom straight back out); a single pull-back to the full scroll for the payoff.
- Risk: feTurbulence filters are heavy per frame — pre-render the landscape + seal textures once (static seeds, never animate the seed or it flickers).

## References
- https://en.wikipedia.org/wiki/Seal_(East_Asia) — collectors stamp their seals on a work; over time the seals become a provenance record written on the work itself.
- https://en.wikipedia.org/wiki/Shan_shui — layered peaks separated by mist and empty paper; forms fade into the paper instead of ending at hard edges.
- https://c2pa.org/ — content credentials: every actor (creator, editor, publisher) adds its own assertion to the chain; the seals stand for those entries.
