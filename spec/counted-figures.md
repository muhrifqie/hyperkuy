# Counted Figures (`counted-figures`)

**Metaphor:** A 1930s Vienna-method pictorial-statistics board (Isotype) → AI scale told so the viewer literally COUNTS it: a bigger number is more identical figures, never a bigger icon.
**Series:** ai-in-numbers | ai-news
**Axes:** light · grotesque · 2D · data

## Look
- **Palette:** `#F1EAD8` card cream · `#1C1C1C` linocut ink · `#C2412D` value red · `#2F4F8F` row blue · `#B9A88A` hairline tan
- **Fonts (Google Fonts):** Jost (display + small-caps labels) / Newsreader (values + voice)
- **Grid / layout:** kicker y 296; title y 352–~600; neatline board y ~640–1456 (rows + key band; board is re-centred in the band below the title when a short title leaves slack); caption y ~1490–1616
- **Signature elements:**
  1. Rows of identical flat SVG pictograms (chip / bolt / drop / rack), one row per item, count parsed from the value
  2. Overflow row: uncountable values ("miliaran") stamp figures past the board edge, ending in a cut figure
  3. Key box "1 ikon = 1 satuan" + double neatline frame — the Isotype contract on screen

## 2-second hook
- **Frame 0 shows:** the board with rows already stamped and the key box legible
- **Motion (0–2 s):** figures stamp one by one, 80 ms apart (stagger build); the overflow row keeps stamping and runs off the edge
- **Why it stops the scroll:** the rhythm makes viewers count along, and the row that will not stop sells the scale
- **Hook type (docs/bank-hook-ending.md):** #2 angka mustahil

## Loop ending
- **Last 1 s:** the overflowing row collapses figure by figure into the single figure in the key box
- **Seam:** ending G progres reset + J ketukan — the last collapse lands on the same stamp beat as the first, back at frame 0

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–950, y ~1490–1616, 44 px Newsreader; karaoke active word = cream-on-blue knockout

## Notes for the video build
- Beats: key box in → rows stamp top-down → overflow row runs (the only emphasis move); camera still, one punch-in on the cut figure
- Risk: long labels at 30 px caps — keep ≤ ~30 chars or they wrap to 2 lines inside the row

## References
- https://en.wikipedia.org/wiki/Isotype_(picture_language) — greater quantities = more same-size pictograms; rows read like sentences
- https://gerdarntz.org/content/gerd-arntz.html — flat linocut pictograms, one consistent weight so a crowd stays calm
