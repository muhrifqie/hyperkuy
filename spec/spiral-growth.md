# Spiral Growth (`spiral-growth`)

**Metaphor:** a hand-inked exposition bar chart on beige presentation cardboard whose last bar is too long for its ruled field and coils into a spiral → AI growth (training compute, users, context length) outruns a straight page: the newest step is so big a straight bar can no longer hold it.
**Series:** ai-in-numbers (also ai-news for growth stories)
**Axes:** light · condensed · 2D · data

## Look
- **Palette:** `#E6D7BE` cardboard board · `#1B1B1B` ink (type, axis, margin rule; never a bar) · `#B8232F` crimson (the coiled bar, hl, big value) · `#E2A93B` gold (1st bar, caption stroke) · `#6B83A8` slate (2nd bar). The 3rd/4th bars use the same 1900 plates' rose `#D99A92` and umber `#6E4A2E`, so 5 items never repeat a colour.
- **Fonts (Google Fonts):** Saira Condensed 600, wide-tracked caps (title, labels; 700 for values and the big value) / Literata 400 with optical sizing (caption legend, italic note) / Saira Condensed 500 (meta)
- **Grid / layout:** double ink frame 38/50 px, pins in 4 corners; kicker centred y 302; title centred from y 358 (72–132 px, ≤ 3 lines) on pencil guide rules; chart from title + 64 to ~y 1420: labels right-aligned x 94–330, axis x 348, bars 46 px from x 352, a ruled inner margin (double rule) at x 892–899 that the crimson bar presses against; coil centred near x 630, r ≤ 250, entirely left of x 890; big value at x 90 under the last label, above the coil's centre line; italic note in the lower-left corner; source line centred x 180–900 above the caption; caption legend centred x 90–990, bottom at y 1614. Unused pencil guides at y 196/242 and 1712/1758, gouache test dabs on the bottom one.
- **Signature elements:**
  1. The crimson bar that runs into the ruled margin and coils inward, its turns set by the data: ¾ turn on a tie, +1 turn per ×10 above the largest straight bar, max 2¾.
  2. Gouache bars ordered by their real values (ties equal, log scale when the spread is wide) on fibre-grain cardboard, title hand-lettered on pencil guides: a 1900 data plate, not a dashboard.
  3. The big value lettered in crimson in the free corner (always ≤ 0.82× the title size) with a dotted leader to its bar, plus the plate's own honesty note "panjang batang = urutan, bukan skala".

## 2-second hook
- **Frame 0 shows:** the cover plate with the crimson bar already pressed against the margin rule and curled ¾ turn; the big value slot empty.
- **Motion (0–2 s):** the bar keeps winding inward to its data turns (one path, stroke-dashoffset, 0.2–1.2 s, power2.inOut); the dotted leader draws and the big value counts up from 0.8 s and locks by 1.4 s (Count & lock). On a tie the bar stays at ¾ and the value just counts.
- **Why it stops the scroll:** a chart that runs out of room makes an impossible number visible before a digit is read.
- **Hook type (docs/bank-hook-ending.md):** #2 Angka mustahil

## Loop ending
- **Last 1 s:** after the CTA (~85%), the leader retracts, the big value un-counts to blank and the coil unwinds outward (dashoffset reversed, 0.9 s, power2.in) back to the ¾ curl against the margin rule.
- **Seam:** G Progres reset. The last frame is exactly frame 0, and the outward unwinding hands straight into frame 0's inward winding. No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` centred x 90–990, bottom at y 1614 (2 lines at 44 px start ≥ y 1505, clear of the action column), Literata 400, 44→40 px, then slight negative tracking for the longest captions, max 2 lines; ONE active word (first caption word inside `hl`, else the first word): ink 600 with a gold gouache stroke beneath it.

## Notes for the video build
- The straight bars are already drawn in frame 0 and stay; in the body, each row gets a pencil tick and its value counts up on the word that names it (no bars re-growing). The crimson bar is ONE path animated by stroke-dashoffset; never scale it.
- Camera stays still. One punch-in toward the coil when the big number is spoken (hold ≥ 1.5 s), no other emphasis move in that scene. Keep paint/grain filters on static layers (or pre-render).
- Data rules: values are parsed (0,34 · 2×10^25 · 128K · 800 jt · miliaran); if the last value is smaller it is drawn straight (no coil); if values have no number, ordered steps + "= ilustrasi". Always a real source and date.

## References
- https://www.cooperhewitt.org/exhibition/deconstructing-power-w-e-b-du-bois-at-the-1900-worlds-fair — hand-drawn data plates on presentation board: shape, line and flat colour carry the argument.
- https://flourish.studio/2021/10/18/masters-web-dubois/ — a spiral as the device for a quantity too big for the page; one dominant red plus two or three flat colours.
