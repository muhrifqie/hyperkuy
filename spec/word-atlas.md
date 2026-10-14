# Word Atlas (`word-atlas`)

**Metaphor:** one sheet of an old printed town plan of the imaginary city "Kota Kata", where the query word sits as a big cluster bubble and its neighbours are lettered pins around it → embeddings: every word has an address, similar meanings live in the same neighbourhood, and semantic search means finding the nearest pins.
**Series:** how-ai-works
**Axes:** light · serif · 2D · diagram

## Look
- **Palette:** `#F5F2EA` paper margin / wash · `#D9CFB8` city blocks (street casing `#C9BC9C`) · `#24324A` navy ink (title, neatline, query bubble, plate rules) · `#C4472C` vermilion (key badges, search radius, A's distance line, hl) · `#3D63C2` blue (values, active caption word; the river is its tint)
- **Fonts (Google Fonts):** Young Serif (title, series, plate labels, query, caption) / Martian Mono (sheet header meta, badge letters, values, address tag, source)
- **Grid / layout:** sheet neatline at inset 30–46 px around a full-bleed street plan (rotated street grids, white avenues, river, hatched squares, no green). Header strip x 90–990, y 300–376. Title x 90–990 from y 404, 108→72 px, ≤ 238 px tall. Object band: row-1 plates (2 columns ≤ 380 px, or 3 columns ≤ 280 px for 5 items) start 36 px under the title; row-2 plates (≤ x 886) end 36 px above the legend; the query bubble (220–246 px, centre x 490) sits midway inside a dotted search radius. Legend cartouche x 90–990, bottom y 1636, grows upward (top ≈ 1385–1420). Scale bar + compass rose y 1696–1848.
- **Signature elements:**
  1. The printed sheet: paper margin, ruled neatline with an alternating graticule band, engraved compass rose and numeral-free scale bar, and a header strip "LEMBAR #ep | SERIES | date box".
  2. The query bubble: `hl` in white inside a navy cluster bubble with a double halo, centred in a dotted vermilion search radius full of word dots; other neighbourhoods are closed clusters marked with dot tallies (no numerals).
  3. Neighbours: flat engraved label plates (double rule, square corners) with lettered vermilion key badges on their outer corners, each joined to the bubble by a dotted, tick-marked distance line; A's line is vermilion and carries a dashed "(x; y) ilustrasi" address tag.

## 2-second hook
- **Frame 0 shows:** the still without the distance lines and the tag: title, the ~240 px query bubble with `hl` in the centre of the frame, plates and badges already in place.
- **Motion (0–2 s):** 0.1–0.6 s the bubble's halo pings once out to the search radius (power2.out); 0.4–1.2 s the distance lines draw from the bubble to each badge, A first, 90 ms stagger (stroke-dashoffset, power3.out), ticks landing in sequence; 1.2–1.8 s A's address tag types on and its leader drops onto the line.
- **Why it stops the scroll:** a word gets measured like a place on a map, which makes the AI's hidden map of meanings visible.
- **Hook type (docs/bank-hook-ending.md):** #7 Yang sebenarnya dilihat AI

## Loop ending
- **Last 1 s:** the tag back-spaces, the distance lines retract into the bubble in reverse order (E→A, power2.in), the halo settles and the caption returns to its first word.
- **Seam:** the last frame equals frame 0 (bubble and plates, no lines), so the opening halo ping restarts the draw. Ending D, Benda dibongkar balik; no fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` in the legend cartouche (double rule, "LEGENDA" tab, vermilion pin key), text x 165–957, Young Serif 46→40 px, max 2 lines; longer captions show the 2-line karaoke window around the active word (with "…") and the video pages through the rest. Said words navy, upcoming words slate, active word (= `hl` if it is in the caption, else the first word) blue with a 5 px blue underline. The source flows 12 px below it (Martian Mono 26 px), wraps and is never cut.

## Notes for the video build
- Liveliness comes from the map content: badges pop onto their plates as each item is named, lines draw, the tag types, the caption underline moves word by word and the legend pages turn. The street plan never wobbles.
- The camera is still by default. Allow one emphasis move per scene: a slow punch-in (1.0→1.12) on the bubble and A when the distance is spoken, then hold ≥ 1.5 s. A topic change slides the sheet to a dot-tally cluster, which becomes the next query bubble.
- The address tag appears only on how-ai-works, and never when the item values are already coordinates. Every other number on the frame comes from `D`.

## References
- https://developers.google.com/maps/documentation/javascript/marker-clustering — nearby markers merge into one cluster bubble and split into pins: the bubble-to-neighbours mechanic.
- https://en.wikipedia.org/wiki/Word_embedding — words become vectors and similar meanings sit close together: neighbourhoods as meaning.
- https://en.wikipedia.org/wiki/Cartographic_labeling — labels knock out the lines behind them and sit beside their point symbols: the engraved label plates.
- https://en.wikipedia.org/wiki/Map_layout — neatline, title, legend, scale bar and north arrow as the furniture of a printed sheet: header strip, legend cartouche, compass.
