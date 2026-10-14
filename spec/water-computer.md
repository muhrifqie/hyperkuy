# Water Computer (`water-computer`)

**Metaphor:** a Phillips-style hydraulic computer (acrylic tanks, brass taps, floats driving pens, a pump returning the water) → a forward pass: input water runs through taps (weights), tanks add it up (sum), a tank only passes water on once it reaches its overflow line (activation), and the floats plot the outputs on one shared strip chart.
**Series:** how-ai-works (also ai-in-numbers: the strip compares values on one scale)
**Axes:** full-colour · grotesque · 2.5D · diagram

## Look
- **Palette:** `#2346A0` cobalt pegboard · `#E9A23B` amber water, answer marks, karaoke fill · `#F3EAD7` cream lettering, plates, chart paper · `#1B1E27` ink text, levers, rods, traces · `#C9D3E6` acrylic glass (brass/brown water tones are shades of the amber)
- **Fonts (Google Fonts):** Host Grotesk 800 (title lettering) / Host Grotesk 600 (caption, sub, mark labels) / Red Hat Mono 500-700 (values, nameplate, weight tags, source)
- **Grid / layout:** the board sets all the type. Enamel nameplate (series · ep, 2 screws) y 300-350, bolted on the rim of the input reservoir (x 100-978, y 348-≈680); the title is cream lettering on its front glass (94→72 px, ≤3 lines, 4 at ≤82 px), and amber water fills it to just above the line that starts with `hl` (`hl` = ink, the rest of the wet text = brown, both on amber). Below: 3 big taps + ×0,9/×0,2/×0,7 tags, 3 sum tanks (≈200 px) with one dashed overflow line, manifold, one tap + short tank per item (x 94-896), drain collector, strip chart x 90-900, then a bolted placard bottom-anchored at y 1616 (sub when a separate caption exists · karaoke caption · source · date). Decoration only: pump top-left + return pipe across y 224, return riser x 44 and drain x 74 on the left margin, sump y 1684-1768. Nothing past x 900 in y 900-1500.
- **Signature elements:**
  1. Title under a real waterline: the reservoir's water level is set by `hl`, so the highlighted word is literally in the water; the inlet tube and the pour from the top pipe feed the same tank.
  2. Weighted taps + one dashed overflow line through three large sum tanks: two pour into the manifold, the ×0,2 tank stays under it and its outlet is a dry glass stub over an X drip tray (activation, visible).
  3. Float → rigid rod → pen on ONE strip chart (pen band = tank height); each item = a trace + a printed mark, the answer marks are amber. Honest levels: same unit → proportional (floor 0.12), equal values = equal levels, the unique max (or every tied max, unless all tie) brims; mixed units → one shared level and only the item the title points at (`hl` text, else a shared number/word, e.g. "1 detik" → "±1 dtk") brims.

## 2-second hook
- **Frame 0 shows:** the machine running: pump turning, water pouring into the reservoir, whose glass reads "Setiap jawaban AI sebenarnya mengalir lewat…" (6 words); tap 1 pouring, sum tank 1 just under the dashed line; output tanks empty, but the strip still carries the last run's traces and amber answer mark (paper keeps the record), so the answer is already in frame 0.
- **Motion (0-2 s):** 0.15 s tap 2 quarter-turns (0.3 s, power2.inOut), 0.4 s tap 3; streams drop from the spouts (scaleY, 0.25 s); at ~1.0 s sum tank 1 touches the dashed line and its outlet spurts into the manifold (first payoff); 1.2-2 s the strip advances and the pens start new traces. Camera still.
- **Why it stops the scroll:** a machine visibly "thinking" with water, under a sentence that stops halfway.
- **Hook type (docs/bank-hook-ending.md):** #12 Kalimat menggantung. The glass completes it at ~3.0 s ("…tiga keran dan satu ambang batas."), then the lettering swaps to the episode title and the water rises over the `hl` line (3.5 s).

## Loop ending
- **Last 1 s:** after the CTA (~85%) the VO ends "Jadi lain kali kamu nanya ke AI, ingat:"; drain valves open, the tanks empty into the collector, water runs down the left margin into the sump, the pump spins, amber climbs the left riser, crosses the top band and pours into the reservoir; taps 2-3 close; the glass returns to the hanging line.
- **Seam:** A + G: the last frame equals frame 0 (same pour, same strip record), and the closing line runs straight into "Setiap jawaban AI sebenarnya mengalir lewat…". No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` inside the bolted placard, x 117-873, placard bottom at y 1616. One line if it fits at ≥ 42 px, else 2 balanced lines at 46→40 px. Read words ink, unread slate `#4E5670`; the active word (`hl` if in the caption, else the first word) is ink on an amber water fill whose surface sits just under the cap height.

## Notes for the video build
- One beat per item: its tap opens on the word that names it, the tank fills (clip from the bottom, 0.6 s, power2.out), the float lifts the pen and the trace draws (stroke-dashoffset); brimming tanks come last. Bubbles only while a stream falls.
- Camera: one punch-in on the dashed line + X tray when activation is explained, hold ≥ 1.5 s. Self-host both fonts for the render.

## References
- https://en.wikipedia.org/wiki/Phillips_Machine — tanks and pipes on a board, flows set by taps, floats driving pens on a chart, a pump returning the water: a computation you can watch, with a built-in loop.
- https://museumofhstm.leeds.ac.uk/collections/business/ — shown as a teaching object: legible flow over realism.
- https://www.3blue1brown.com/lessons/neural-networks — layers as weighted sums plus a threshold you can follow step by step (principle only).
