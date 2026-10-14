# Phoropter (`phoropter`)

**Metaphor:** the patient's view in an eye exam: an acuity chart, the phoropter in front of your eyes and the near card on its rod, "satu… atau dua?" → RLHF: people keep picking the better of two answers, and each pick clicks the model one step closer to sharp.
**Series:** how-ai-works
**Axes:** light · grotesque · 3D · physical-object

## Look
- **Palette:** `#F2F0EB` wall (backlit screen and card paper are a lighter `#FBFAF7`) · `#1E1F22` ink, chart bezel, knobs · `#D9D3C4` cream instrument body · `#2F62D1` blue = the tested word on the chart + the active caption word · `#C6452E` red index marks only (chart pointers, cross-cylinder and aux-knob dots, sphere-window hairline)
- **Fonts (Google Fonts):** Lexend 600 uppercase, +0.1em tracking, Sloan-style (acuity chart, aperture view) / Tinos, the Times-style roman near cards are printed in (Jaeger lines, caption, source) / Spline Sans Mono (chin meta, acuity fractions, J tags)
- **Grid / layout:** centred, no top-left text block. Chart monitor x 72–1008, y 244–744: title lines x 186–894, y 300–676 (top line fits 136→40 px, each line ×0.87, floor 46 px, max 5 lines, the words of `hl` stay on one line); fractions 6/60…6/12 at x 106–168; chin y 704–732 = series·ep left, date right. Phoropter y 736–1092: forehead rest overlaps the chin, apertures centred y 928 at x 372 / 708. Reading rod x 532–548, pivot y 800 → clip y 1050. Near card x 150–930, y 1074–1600: Jaeger rows y 1110–1402 inside x 184–866, caption y 1428–1532, source y 1548–1580 (one line, ellipsis). No text at x > 900 between y 900–1500 (only the sphere wheel, card edge and window digits, all decoration).
- **Signature elements:**
  1. Backlit acuity chart carrying the title: Sloan-style capitals, each line one step smaller, acuity fractions in the margin. The line holding `hl` is the line being tested: the hl word in blue, red index pointers on both sides (right only when the line is full width). No `hl` → the last line is tested.
  2. Real phoropter anatomy, not two dials: wing-shaped lens batteries (wider than tall, flat outer edge) with an edge-on sphere wheel, a sphere power window (−1.25 / −0.75), an aux-lens knob with position dots, a cylinder knob, a 0–180 axis ring with engraved numerals drawn as paths, and a Jackson cross-cylinder (red/white axis dots) on a flip arm in front of each small aperture. Both apertures show the tested word out of focus: lens 1 blur 6 px, lens 2 blur 3 px. This still is the hook state, not the answer.
  3. Near-point reading rod (graduated chrome bar) + clip + near-vision card: items are printed as Jaeger lines J1–J5 (J1 smallest, print steps up per line; label floor 30 px, value 44→34 px with max-width; a label that still does not fit wraps to 2 lines at 3–4 items or ends in an ellipsis at 5). The card's last paragraph is the caption, its fine print the source.

## 2-second hook
- **Frame 0 shows:** this still with the card's value fields blank (J tags, labels and dotted leaders only); title crisp on the chart, both apertures soft, badges 1 and 2 neutral.
- **Motion (0–2 s):** 0.2 s badge 1 presses in, lens 1 firms 6 → 4 px. 0.9 s the sphere wheel clicks one detent (axis ring turns 15°, 180 ms power2.out), badge 2 presses, lens 2 firms 3 → 2 px. Neither lens is crisp yet: the answer is held for the payoff (≤ 70%).
- **Why it stops the scroll:** anyone who has sat in an optician's chair answers "dua!" or squints by reflex, so the viewer is already testing their own eyes.
- **Hook type (docs/bank-hook-ending.md):** preference / comparison topics (RLHF, model A vs B, prompt vs prompt) → #5 Tebak dulu, first VO line "Satu… atau dua?". Any other topic (tokens, numbers, news) → #9 Detail misterius, first VO line "Kebaca?" with the hl soft in both lenses and resolved by focus, never by camera zoom.

## Loop ending
- **Last 1 s:** CTA sits before the loop point (~85%). Then the sphere wheel clicks once: every printed value on the card defocuses and drops out at once (back to blank leaders), the lens disc slides sideways in both tubes and brings in a new soft pair (6 px / 3 px), the badges return to neutral and the caption asks the opening line again.
- **Seam:** the cut lands on that click, so the last frame equals frame 0 (same still camera, blank values, same blur pair, same caption). The first motion after the cut is the 0.2 s badge-1 press, so the reset click and the press read as one gesture. Ending C (pertanyaan diulang) on a B composition (frame kembali persis).

## Caption / voice-over
- **Slot:** `data-slot="caption"` on the near card at x 184–866, y 1428–1532, Tinos 400, 44 px (fits down to 40), 1–2 lines. Karaoke: spoken words ink, upcoming words grey, the active word white on a blue key. A multi-word `hl` found in the caption is one unit; overflow shows a word window around the active word with an ellipsis.

## Notes for the video build
- One beat per item, on the word that names it: its card value prints in with a focus pull (blur 6 → 0 px, 300 ms), the wheel clicks, lens 2 sharpens one step. Payoff: both lenses resolve and the chosen badge turns blue; a "seri" round leaves both equally soft.
- Camera stays still. One emphasis move allowed: a crop-in on aperture 2 at the payoff, hold ≥ 1.5 s, cut back; never zoom straight out. Text never bounces; nothing wobbles at idle.
- Risk: CSS blur on text is expensive in video, so blur only the two small aperture layers and the value spans.

## References
- https://www.allaboutvision.com/eye-care/eye-tests/refraction-which-is-better/ — repeated two-option comparisons, each answer steering the next pair, converge on the sharpest setting.
- https://eyesight.org/2019/06/18/which-is-better-1-or-2/ — "I can't tell" is a valid answer: ties belong in preference data (a "seri" round).
- https://en.wikipedia.org/wiki/Snellen_chart — rows shrink line by line, each labelled with its acuity fraction; even-stroke capitals with wide spacing.
- https://en.wikipedia.org/wiki/Jaeger_chart — near cards are paragraphs of Times-style print labelled J1 (smallest) upward.
- https://en.wikipedia.org/wiki/Phoropter — anatomy only (lens batteries, sphere wheel, axis scale, cross-cylinder, near-point rod). Draw the working parts, never a maker's look or logo.
