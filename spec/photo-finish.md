# Photo Finish (`photo-finish`)

**Metaphor:** a line-scan photo-finish print (racers smear into streaks, a red cursor reads the crossing, judges hand down a decision slip) → benchmark margins: when the gap between the first two chests sits inside the measurement-error band, "model A wins by 0,1" is really a tie.
**Series:** ai-in-numbers · ai-news
**Axes:** light · condensed · 2D · data

## Look
- **Palette:** `#F7F6F2` paper: lanes, title (desk behind the print = `#DAD7CF`, one shade darker) · `#121212` ink: results band, timing scale, limbs, tags (warm grey `#57544D` for upcoming caption words + trailing jerseys) · `#D7263D` cursor red: title `hl`, readout tab, cursor line, active caption chip · `#2B59C3` winner's jersey · `#F2C14E` runner-up jersey, "± galat" bracket
- **Fonts (Google Fonts):** Saira Extra Condensed 800 (title) / Saira Semi Condensed 500/700 (caption, lane labels) / Roboto Mono 500/700 (camera line, readout, values, slip label, source)
- **Grid / layout:** the print sheet (x 48–1032) starts at y 300 and carries all type. Black results band y 300 → ≈720: camera header line at y 322 (`SERIES · HEAT #ep · DATE`, 26 px mono) over a hairline, then the title right-aligned in x 90–990 (136→80 px fit, ≤ 270 px tall), then the red readout tab (54 px) at the band's bottom edge. Lanes ≈720 → ≈1310 (3–5, tags x 92, capped at 420 px). Black timing scale, 66 px. Result slip x 70–920, glued 8 px over the print's bottom edge and bottom-anchored above the source line (y ≈1584–1616). Finish line F = x of the `hl` word, clamped to 700–890. If `hl` would sit right of 890, the title's right edge pulls in (down to 900) and the title is refit. Right of the band is the empty "not yet crossed" scan, so nothing key sits at x > 900 in y 900–1500.
- **Signature elements:**
  1. Line-scan sprinters: one fixed SVG figure (head, jersey torso leaning into the line with a bib carrying the lane number, a forward arm, and legs at toe-off) is scaled to the lane height, stretched 1.2× horizontally, and trails a dash-smear tail. The winner wears blue, the runner-up yellow, and the rest grey.
  2. The data decides the finish. When every value parses with one shared unit (comma decimal, dot thousands: `88,4`, `1.200 poin`, `72,1%`), the lanes are ranked with the largest nearest the line. Each gap is proportional to that lane's relative difference from the leader, and only lanes within 1% of the leader sit inside the grey "± galat" band. Otherwise (`miliaran`, mixed units) the item order is the finishing order, evenly staggered, with no forced tie. The readout shows `Δ <top-two gap>` (e.g. `Δ 0,1`, `Δ 0 token`) or `SERI?`.
  3. The print carries the type: the title sits in the results band, with the tab and cursor line hanging straight down from the red `hl`. The timing scale has unlabelled ticks only (no invented times). The judges' "KEPUTUSAN JURI" slip holds the caption.

## 2-second hook
- **Frame 0 shows:** the full print, with the two hero chests on the red line inside the grey band and the tab lit with the real gap (`Δ 0,1`). Title: "Menang 0,1 poin. Beneran menang?" (5 words).
- **Motion (0–2 s):** 0.2–1.2 s: the cursor nudges from the winner's chest to the runner-up's and back (ease-in-out, 0.3 s legs) while the readout rolls its digits and re-locks on the frame-0 value. 1.3–1.8 s: the band's dashed edges march once top to bottom and the yellow bracket stamps on the scale. The camera stays still.
- **Why it stops the scroll:** everyone has seen a sprint photo finish. Two chests on one red line ask "who won?", and the band answers "nobody".
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu (guess first), paid off when the slip rules it a tie.

## Loop ending
- **Last 1 s:** after the CTA (~85%), the results band, tags, timing scale and slip stay pinned. Only the scan image (racers, tails, band shading, track streaks) slides left out of the print while blank scan wipes in from the right, and the readout blanks to `—`. The next heat brings back all n racers: they scan in chest-first and stop at exactly the frame-0 fronts, and the readout re-locks on the frame-0 value.
- **Seam:** the last frame is frame 0 (same fronts, band and tab text), and the scan direction never reverses, so the cut is invisible → ending **G** (progres reset). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` inside the result slip (x 92–898, ≈ y 1440–1560) under the mono label "KEPUTUSAN JURI". Saira Semi Condensed 500, 46→44 px, 1–2 lines (beyond two, trailing words are cut with "…"). Active word = `hl` if it is in the line, else the first word, shown as white 700 on a cursor-red chip with a small pointer notch (the same shape as the readout tab). Spoken words are ink, upcoming words `#57544D`.

## Notes for the video build
- One lane per beat: the sprinter scans in from the right edge and runs to its data front, the tag drops in on the word that names it, and the value counts up and locks. Track streaks never move while idle.
- Camera = punctuation: one punch-in to the band when the gap is measured, hold ≥ 1.5 s, never straight back out.
- Risks: a higher value always means ahead, so for lower-is-better metrics feed inverted values or reorder the items. Mixed units fall back to item order (say so in the VO). Scores are illustrative, so say so in `source`. Keep the LCG seeded.

## References
- https://en.wikipedia.org/wiki/Photo_finish — line scan: the horizontal axis is time, shapes stretch, and the scale and cursor are the only honest reading; the torso, not the head or arm, decides.
- https://en.wikipedia.org/wiki/Strip_photography — slit-scan: a static scene smears into horizontal stripes while moving subjects keep a readable front edge (track streaks, racer tails).
