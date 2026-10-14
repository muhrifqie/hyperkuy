# Phase Lock (`phase-lock`)

**Metaphor:** an analogue CRT oscilloscope in X-Y mode → image-text embeddings: the picture goes into CH1 (X), the sentence into CH2 (Y); a mismatch draws a tangle, a true match collapses into one clean diagonal.
**Series:** how-ai-works · ai-tools
**Axes:** dark · mono · 2.5D · data

## Look
- **Palette:** `#0B0D10` bench + CRT glass · `#1C2128` front panel · `#CFE3FF` phosphor trace, title, paper tags · `#7FA6D9` graticule, readouts, upcoming caption words · `#E9A23B` amber: hl cursors, CH2 cable, locked tag, active word
- **Fonts (Google Fonts):** Martian Mono (width 75–87.5 %, 500–700: title, readouts, values, meta) / Inter Tight (500–700: caption, tag labels)
- **Grid / layout:** 90 px margins, built bottom-up. Meta row y 296 (series · EP left, date right) · title y 352–~540 (2 lines ≤ 96 px, 3-line fallback ≥ 54 px) · scope panel x 54–1026, y ~560–~1190: 10×8 graticule (≤ 68 px/div) at x 100–780, control column x ~800–1026 (FASE knob, CH1/CH2 BNC jacks) · tilt-bail tube ~y 1210 · item tags x 90–900, y ~1250–1430 · caption ~1450–1570 · source ends at y 1620. The screen takes the room that is left; text never sits right of x 900 between y 900–1500.
- **Signature elements:**
  1. The locked trace: one diagonal with brighter turning ends (the beam slows there), over the dim persistence of every earlier candidate (tangle 3:4 → figure-eight → ellipses), older = dimmer.
  2. Cable tags hanging from the scope's tilt bail: index, a mini-graticule glyph of the figure that item drew, label, value. The amber tag is crimped onto the CH2 cable (= label containing hl, else the last item).
  3. A scope cursor pair (thin amber bars with triangular heads) brackets the hl words; the FASE knob pointer is parked on the amber zero mark.

## 2-second hook
- **Frame 0 shows:** the scope with a bright, tangled 3:4 Lissajous on the graticule, the amber CH2 plug hovering 40 px below its jack, on-screen line "Garis lurus = AI bilang cocok." (5 words).
- **Motion (0–2 s):** 0–0.9 s the beam dot keeps running the tangle (content motion only); 1.0 s the plug seats (fast in, tiny overshoot on the plug only, click); the FASE pointer sweeps to 0 while the figure morphs tangle → ellipse → diagonal in 0.45 s (power3.out); end dots flare once; "● TERKUNCI" lights at 1.5 s.
- **Why it stops the scroll:** chaos snapping into one clean line is an instant, satisfying payoff that reads without sound.
- **Hook type (docs/bank-hook-ending.md):** #9 Detail misterius (the unreadable tangle resolves on its own; reveal through the trace, no camera zoom).

## Loop ending
- **Last 1 s:** after the CTA (~85 %), the amber plug is pulled 40 px out of CH2; the diagonal swells back through an ellipse into the tangle (0.5 s, power2.in), the lamp goes dark, and the next tag's cable swings toward the jack.
- **Seam:** the last frame is frame 0: same tangle, same 40 px plug gap, same composition; the click at 1.0 s answers the unplug. Ending G (progres reset), with J (same SFX) as the sound match. No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–900, bottom-anchored above the source (~y 1450–1570), Inter Tight 500 44 px / 1.26, 1–2 lines, words in spans; spoken words `#CFE3FF`, upcoming `#7FA6D9`, active word (= hl if in the caption, else the first word) set 700 in dark ink on an amber pill.

## Notes for the video build
- One beat per item: its tag rises on its hook, its cable plugs into CH2, the trace morphs into that tag's figure, the previous figure stays as dimmer persistence; values count & lock. The hl item locks the diagonal last.
- Camera = punctuation: default still; one punch-in on the screen at the lock moment only, hold ≥ 1.5 s, never zoom straight back out. One glow layer on the trace only; graticule and panel never move.
- Risk: 5 items with long labels make the tags tall and the screen smaller; keep labels ≤ 16 characters.

## References
- https://www.testandmeasurementtips.com/using-scope-display-lissajous-patterns/ — in X-Y mode in-phase signals draw a diagonal and phase differences open it into ellipses: shape = degree of agreement.
- https://digilent.com/blog/how-to-read-an-oscilloscope/ — the 10×8 graticule as the only grid; readings live on the instrument face, in divisions.
- https://en.wikipedia.org/wiki/Lissajous_curve — the frequency ratio sets the lobe count (3:4 tangle, 1:2 figure-eight), used for the hard-coded figures.
