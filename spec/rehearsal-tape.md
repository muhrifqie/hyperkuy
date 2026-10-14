# Rehearsal Tape (`rehearsal-tape`)

**Metaphor:** a rehearsal-room floor seen from above, covered in colour-coded spike tape, where the chair has moved but the actor's footprints still land on the old mark → overfitting: a model that memorised its rehearsal marks hits them perfectly, then stands in the wrong place when the scene changes; it learned positions, not the play.
**Series:** how-ai-works
**Axes:** pastel · serif · 2D · diagram

## Look
- **Palette:** `#DDE4EA` scuffed marley floor (background) · `#2A2733` ink: type, chair, corner tape, gaffer strip · `#E8B630` spike yellow: the stale X, title highlight, active caption word · `#D94F3A` grease-pencil red: the ring only · `#4C76C2` spike blue: furniture L-marks (label tape is a cream tint `#F6F4EC`)
- **Fonts (Google Fonts):** Literata 640/720 (title, values, caption) / Red Hat Mono 500–600 (labels, meta)
- **Grid / layout:** 90 px margins. Meta row y 298. Title y 350 to ≤614 (fit 112→72 px, max 264 px tall). Acting area (ink corner Ls at x 72/1008) from max(560, title+40) down to the caption top minus 30, so about y 590–1350. Left column x 72–460 = hero (chair at the top, empty L-marks in the middle, ringed X at the bottom). Right column x 520–900 = item strips, evenly pitched, each with its spike mark at x ≈ 474. Caption strip right above the footer. Source/date footer ends at y 1620.
- **Signature elements:**
  1. Torn strips of cream label tape (one per item), each with a scene-colour band, the label in mono and the value in serif. Each strip sits on its own spike mark (X = actor, L-corners = furniture), and a pencil blocking route links the marks in order.
  2. The overfitting tableau: the chair has moved upstage, its blue L-marks are empty (a clean dust patch with leg dents shows where it stood, and a dashed pencil arrow traces the move), and sneaker prints still stand on the old yellow X.
  3. A red grease-pencil ring around the prints, drawn by hand and overshooting where it closes. The title's key word sits on a strip of yellow spike tape.

## 2-second hook
- **Frame 0 shows:** the full floor: chair displaced upstage, empty blue L-marks, footprints exactly on the yellow X, ringed red; title "Hafal posisi, gagal di adegan baru" (6 words) with "Hafal" on yellow tape.
- **Motion (0–2 s):** 0.2–1.0 s the dust patch inside the empty L-marks brightens and the dashed arrow draws from it up to the chair (stroke-dashoffset, ease-out). At 1.1–1.7 s the red ring gets a second grease-pencil pass over itself (draw-in, 0.6 s). Nothing else moves.
- **Why it stops the scroll:** it is a visible mistake you can read without sound: someone is standing perfectly on a mark for furniture that is no longer there.
- **Hook type (docs/bank-hook-ending.md):** #1 AI salah di depan mata

## Loop ending
- **Last 1 s:** after the payoff (the actor re-learns the scene and walks to the chair's new spot), the floor resets. The prints step back onto the stale X (left stamp at −0.8 s, right at −0.5 s), the chair slides back up along its dashed arrow (0.6 s ease-in-out), and the ring's overshoot tail lands on the loop point.
- **Seam:** ending B (frame kembali persis). The last frame equals frame 0, pixel for pixel: same chair angle, the same prints on the X, the ring closed. The final footstep stamp and the first frame's held pose join with no cut and no fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"`, a torn ink gaffer-tape strip at x 90–900 with its bottom 22 px above the footer (about y 1375–1560, 1–2 lines), Literata 560 at 44–46 px. Karaoke: spoken words bright cream, upcoming words dim lilac-grey, and the active word on a yellow spike-tape chip with ink text (D.hl when spoken, else the first word).

## Notes for the video build
- Per beat: each item lands on the word that names it. Its spike draws in as two tape strokes, then the label strip slaps down with a 1° rotation settle (no bounce), staggered 120 ms; the route dashes draw from one mark to the next. Count values up only when they are numbers.
- Camera = punctuation: still by default. At most one emphasis move per scene: a single punch-in (×1.25) on the ringed prints in the payoff scene, then hold ≥1.5 s. Never zoom straight back out.
- Red belongs to the ring alone. Keep the feTurbulence floor grain static (or pre-render it to a PNG) so the renders stay fast and nothing shimmers.

## References
- https://en.wikipedia.org/wiki/Spike_(stagecraft) — crosses for performers, L-corners for furniture, colour-coded by scene: a floor that records where things were rehearsed.
- https://en.wikipedia.org/wiki/Blocking_(stage) — positions and moves noted as marks plus pencil routes in the prompt book; the source of the dashed route and arrows.
- https://en.wikipedia.org/wiki/Overfitting — fitting the training examples too closely and failing on new data.
