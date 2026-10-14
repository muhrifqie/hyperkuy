# Domino Run (`domino-run`)

**Metaphor:** a U-shaped run of black-and-ivory dominoes, each engraved with one word, going from shadow into a pool of light → the model writes one token at a time and each one tips the next, so one wrong word early on drags everything after it the wrong way (a confident answer snowballing into a hallucination).
**Series:** how-ai-works (also ai-in-numbers: a chain of values ending in the consequence)
**Axes:** dark-to-light · grotesque · 3D · physical-object

## Look
- **Palette:** `#141414` table in shadow / ink · `#ECE8E1` ivory tile faces · `#F8F5EE` pool of light, title · `#B83A22` the wrong tile, red pips · `#3557A7` pencil guide line, the right path
- **Fonts (Google Fonts):** Inter Tight 800/700/600 (title, tile labels, caption) / DM Mono 500/400 (tile values, meta)
- **Grid / layout:** 90 px margins. Meta row y 292 (series · ep left, date right). Title y 352–604 (auto-fit 118→72 px, max 252 px tall). Run y 615–1390: back row bases y 960–969 in shadow (scale .72–.8, 1–3 items), turn x 870–1000 (pip tiles only, no text in the action-button zone), front row bases y 1372 in the light (item n-1 + red item n), wrong branch x 40–330 y 800–1290. Caption y 1456–1570. Source y 1586–1617.
- **Signature elements:**
  1. Word tiles: CSS 3D boxes (face, top, sides), label engraved on the upper half, value on the lower half, split by the domino centre bar and pin. A token and its value read as one domino.
  2. The red tile twisted off the blue pencil guide. Behind it, a wrong branch of black tiles with red pips veers back into the dark.
  3. One empty dashed blue footprint with an arrow: the right next tile that never got placed. The title's hl word is an ivory tile tipping 2°, the same lean as the first tile.

## 2-second hook
- **Frame 0 shows:** the cover itself. The full run is standing, the first tile leans 10° into the second, two push strokes sit behind it, and the red tile is already twisted. On screen: "Satu kata salah, sisanya ikut."
- **Motion (0–2 s):** the first tile finishes falling (0–0.25 s, power2.in). The ripple runs through the back row, the turn and the front row at 110 ms per tile. At about 1.3 s the red tile falls sideways and the chain veers onto the red-pip branch, which topples into the shadow. The blue footprint stays empty.
- **Why it stops the scroll:** everyone can predict domino physics, so seeing the chain visibly go the wrong way is an instant "wait, why?".
- **Hook type (docs/bank-hook-ending.md):** #1 AI salah di depan mata

## Loop ending
- **Last 1 s:** the run stands back up in a reverse ripple, from the last branch tile through the red tile back to the first tile (rewind, 70 ms per tile, power2.out). It stops with the first tile at a 10° lean as the push strokes redraw.
- **Seam:** the final frame equals frame 0 (same composition, same lean, same twisted red tile), so the hook's first fall starts again right away. The first tile's click is the same SFX as frame 0's. Ending D (benda dibongkar balik) with a J beat match. No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–990, y 1456–1570, Inter Tight 600 at 46→40 px (1–2 lines), ink on the lit table. The active word (D.hl if it is in the caption, else the first word) is a black domino face: `#141414` chip, `#F8F5EE` text, 9 px radius.

## Notes for the video build
- Per beat: each item tile rises out of the table and settles (no bounce) on the VO word that names it. The guide line draws first (stroke-dashoffset), and the falls are the main liveliness (rotateX about the base edge, seek-safe GSAP).
- Camera stays still. Allow one emphasis move per scene: a slow punch-in to the red tile on the word that goes wrong, then hold ≥ 1.5 s. Never zoom straight back out.
- Risks: keep face yaw ≤ 32° so labels stay legible. Fallen tiles need their top/side faces so empty backs never show. The turn tiles sit in the action-button zone, so keep text out of there.

## References
- https://www.awwwards.com/sites/artificial-physics — physics as the only content on a clean field; the mechanism is the message, no ornament.
- https://en.wikipedia.org/wiki/Domino_effect — each element triggers the next, a direct analogue of autoregressive generation.
- https://en.wikipedia.org/wiki/Domino_show — show builders' "splits" and planned gaps: a line can fork or stop at one missing tile (the branch + empty footprint).
