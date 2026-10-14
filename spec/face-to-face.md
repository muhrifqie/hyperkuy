# Face to Face (`face-to-face`)

**Metaphor:** a phone lying on a cafe table in two-way conversation mode, its screen split head-to-tail for the person opposite → translation is where the transformer was born: the encoder reads your side whole, the decoder writes the other side word by word while looking back across the fold (attention).
**Series:** how-ai-works · ai-tools
**Axes:** full-colour · condensed · 2D · app-ui

## Look
- **Palette:** `#F05A28` near half (your side) · `#1E3FA8` far half (the AI's side, upside down) · `#FFF6EA` hinge, far-side type, cup, active-word pill · `#111111` phone body, near-side type, title slab · `#E6D6BC` terrazzo table
- **Fonts (Google Fonts):** Big Shoulders Display 800 (title, values, row numbers) / Instrument Sans 500-700 (labels, caption, meta, pills)
- **Grid / layout:** phone x 118-962 · y 96-1844, screen x 132-948, text column x 184-900. Far half y 110-790 (whole half rotated 180°): dock y 160-290 (mic, "AI" pill), values y ≈ 320-770 (row pitch 90-132, ≤ 0.8 × title size). Hinge y 790-842 (series · ep left, date right). Near half y 842-1830: labels from y 864 (pitch 56-62, 40 px), title centred between labels and caption (150 → 64 px fit), caption ≈ 1440-1560, source line ends y 1608, dock y 1658-1786 in the platform zone. Threads x ≈ 480-904. Table (cup, teaspoon, water ring, terrazzo chips) only in the margins.
- **Signature elements:**
  1. Tete-beche split screen: the far half is printed upside down for whoever sits across the table, one object read from two sides (encoder side / decoder side).
  2. Threads across the fold: each label is tied to its value by a thick thread that changes colour (ink → cream) as it passes under the hinge, plus faint threads to every other row: attention looks back at the whole source, one link strongest.
  3. The physical cafe table: coffee cup tucked in the corner, teaspoon, water ring, terrazzo. The title's `hl` is a black slab, like the phrase the app just recognised.

## 2-second hook
- **Frame 0 shows:** the phone already on the table, your orange half complete (labels + title), the blue half holding only value 01 upside down with its thread. The thumbnail already poses the question: why is half the screen upside down?
- **Motion (0-2 s):** values 02..n write in upside down one by one (type-on in their own reading direction, so right-to-left on screen, 0.3 s each, ease-out), and on the same beat each thread draws from its label across the hinge (stroke-dashoffset 0.4 s). The far mic ring pulses once. Camera still.
- **Why it stops the scroll:** upside-down type is an instant "wait, what?". The thumb stops to tilt the head, and the threads promise an explanation.
- **Hook type (docs/bank-hook-ending.md):** #9 Detail misterius (revealed by writing, not by zooming)

## Loop ending
- **Last 1 s:** CTA lands at ~85 %; then the AI half un-writes: values n..02 slide back into the hinge last-in-first-out (0.12 s apart), their threads reel back under it, the caption resets to its first word, and the orange mic gives one tap pulse.
- **Seam:** ending D (benda dibongkar balik) + J (ketukan): the last frame is exactly frame 0 (only value 01 left, same composition), and the mic tap SFX at the end is the same tap that opens frame 0.

## Caption / voice-over
- **Slot:** `data-slot="caption"` = the live transcript in your half, x 184-900, bottom-anchored above the source line (≈ y 1440-1560), 46 → 40 px Instrument Sans 600, 1-2 lines, `text-wrap: balance`; a longer line shows the chunk around the active word. Active word = cream `#FFF6EA` pill, bold black text, 5 px blue `#1E3FA8` underline (D.hl if it is in the caption, else the first word). A 3-bar waveform glyph at x 154 marks it as live speech.

## Notes for the video build
- Beats: labels mask-lift row by row on the word that names them; each value types in upside down while its thread draws across, and the faint threads fade up to 34 % only after the main thread lands. Payoff at ~55 %: the phone spins 180° on the table (object move, 0.9 s ease-in-out, shadow stays) so the AI half reads upright. Hold ≥ 1.5 s, then spin back.
- Camera = punctuation: still by default; at most one slow push toward the hinge when the voice-over says "attention" (hold ≥ 1.5 s, no zoom straight back out). The spin is object motion, not camera.
- Risk: keep values ≤ ~14 chars (the fit shrinks to 44 px). Self-host both fonts for the video render.

## References
- https://en.wikipedia.org/wiki/T%C3%AAte-b%C3%AAche — a joined pair printed head-to-tail: one object read from two sides.
- https://arxiv.org/abs/1706.03762 — the transformer was introduced on machine translation: an encoder-decoder with attention between the two halves.
- https://jalammar.github.io/visualizing-neural-machine-translation-mechanics-of-seq2seq-models-with-attention/ — attention drawn as weighted links between source and target words (one strong, many faint).
