# Ronda Roster (`ronda-roster`)

**Metaphor:** the painted plywood night-watch roster at a kampung pos ronda, with 8 residents' name tags per night and a kentongan that calls each shift → Mixture of Experts: the model has many residents (experts), but each token (each night) wakes only the few the router picks, e.g. 2 of 8. The total is huge and the active part is small.
**Series:** how-ai-works, ai-in-numbers
**Axes:** full-colour · condensed · 2.5D · data

## Look
- **Palette:** `#6E2120` oxblood post wall + tonight's row band + values · `#F1EADB` cream board paint + CATATAN slip · `#C99B63` plywood frame, name tags, bamboo · `#E7B526` JAGA yellow (on-duty tags, hl plate, active caption tag) · `#141414` stencil ink, grid, nails, ijuk cords
- **Fonts (Google Fonts):** Big Shoulders Stencil Display 800 (title, values, night numbers, tag faces) / Archivo (rail print, labels, caption, source) / Saira Stencil One (uppercase only: "JADWAL RONDA / POS RT 05", "CATATAN:")
- **Grid / layout:** The board fills the frame: x 56-984, y 290 down to the slip (~1400). Kicker (left) and date (right) are 27 px print on the top frame rail (y 303-330). The title is stencilled in ink on the cream header from y 364 (auto-fit 132→96 px, ≤ 3 lines, largest element). Under it is a band of ~104 px: the kentongan on two pegs at x 108-566 and the sub-header stacked on the right (30 px). Then a painted double rule and 3-5 night rows down to ~1360: number cell (x 91-151) | label + value (value right edge x 884) | 8 nail-hung name tags. Row content stays at x ≤ 884, clear of the action buttons. The CATATAN slip (x 66-898) is tacked over the bottom rail at about y 1390-1560. The source sits on the wall 12 px under it (≤ 2 lines, ends ≤ y 1614). The bulb (y 46-266) and the bale-bale bench (below y 1688) are decoration.
- **Signature elements:**
  1. Name tags on nails, with a resident's initials on the wood side and JAGA on the yellow side. The lit count is the item's own number (1-8: "2 token" lights 2, "8 ahli" lights 8). A value without a count ("0,34 Wh", "1 triliun") lights only tonight's top 2, and the other rows stay asleep.
  2. The title is painted with a stencil. `hl` becomes a yellow JAGA plate nailed over the word (-3°, two nails). Tonight's row (the item that names `hl` as a whole word, else row 01) sits in the oxblood band.
  3. The bamboo kentongan hangs horizontally from two ijuk cords with its slit facing out. The cords slant mid-swing, and the knock marks touch the lip where it was just struck.

## 2-second hook
- **Frame 0 shows:** exactly the cover. Tonight's row 01 is lit with its JAGA tags up, and the kentongan is mid-swing with its knock marks. MoE example: title "1 triliun parameter, yang kerja secuil." Rows: Parameter total · 1 triliun / Aktif per token · 32 miliar / Ahli per lapisan · 8 ahli / Ahli yang jaga · 2 dari 8.
- **Motion (0–2 s):** 0.0 s the kentongan swings back through centre (cords pass vertical). At 0.4 s the knock (SFX) lands: the marks pop and row 01's two JAGA tags spin a full 360° rotateY (the name side shows mid-turn, 0.5 s, power2.inOut), then settle on a ±4° swing that damps out in 0.6 s. At 1.0 s a second knock drops the band to row 02. Row 01's tags turn back to the name side. "32 miliar" counts up from 0 and locks at 1.7 s. No camera move.
- **Why it stops the scroll:** a knock-and-spin on a familiar kampung object, right under a board that reads 1 triliun but works with a sliver.
- **Hook type (docs/bank-hook-ending.md):** #2 Angka mustahil (1 triliun total vs 32 miliar at work).

## Loop ending
- **Last 1 s:** one knock per beat walks the band down the rows. Rows whose value has a count keep their tags lit the whole time. The final knock wraps the band from the last row back to row 01, row 01's two tags turn to JAGA, and the kentongan lands on its frame-0 slant.
- **Seam:** the last frame is the cover (ending B, the board back in its opening state), and the closing knock SFX is the opening knock (ending J). The CTA ("simpan biar inget") is pinned as a second slip at ~85%, then pulled before the wrap. No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` on the CATATAN slip at x 96-874, below the "CATATAN:" label. Archivo 600 ink, 46→40 px (then 94/88% width), max 2 lines, balanced. Karaoke: the active word (or the whole `hl` phrase) sits on a mini yellow JAGA tag with a punched hole, tilted -2°.

## Notes for the video build
- One beat per knock. The band moves down one row, that row's tags flip, and its value counts and locks. Labels appear on the word that names them.
- Camera: still. One punch-in to the payoff row ("2 dari 8") held ≥ 1.5 s, then a cut back to the full board. The kentongan swing is content motion, not camera.
- Risk: keep the spins crisp (rotateY + shadow) and never wobble while idle. The kentongan never carries information.

## References
- https://en.wikipedia.org/wiki/Mixture_of_experts — sparse gating picks the top-k experts per token (k usually 1-2). The JAGA tags are exactly that top-k.
- https://en.wikipedia.org/wiki/Kentongan — the kentongan at the ronda post signals by knock pattern, so the knock is the beat that drives each roster change.
