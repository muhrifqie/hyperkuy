# Molecule String (`molecule-string`)

**Metaphor:** A chemistry bench — a dark SMILES label strip unrolling onto white paper and folding into a ball-and-stick model → molecules are one line of text, so a language model "writes" drug candidates with the same next-token trick it uses for sentences.
**Series:** ai-news | how-ai-works
**Axes:** dark-to-light · mono · 2.5D · code

## Look
- **Palette:** `#14161A` label-strip ink · `#F4F1EA` bench paper · `#2E5BD0` atom blue · `#D2462F` hl red · `#8A8F98` meta grey
- **Fonts (Google Fonts):** Martian Mono / Instrument Serif (italic for voice)
- **Grid / layout:** dark strip y 0–400 (kicker + printed string); title y 470–~700 on paper; model + segment boxes y ~760–1470; caption bottom-anchored ~1500–1616; source/date y ~1640
- **Signature elements:**
  1. SMILES-style string printed on the dark strip — the item labels chained by dashes, one "sentence" of chemistry
  2. Ball-and-stick model (fixed benzene-ring + branch skeleton), each item's atoms solid blue, hl item solid red
  3. Shadow-boxed segment cards with dashed hairline leaders from string to atoms

## 2-second hook
- **Frame 0 shows:** the printed string on the strip and the half-built model below it
- **Motion (0–2 s):** parentheses in the string flash (0.4 s), then branches click onto the model one by one (draw-in, bonds stroke in, atoms pop 120 ms apart)
- **Why it stops the scroll:** a molecule you can READ — the reveal that chemistry is literally a sentence
- **Hook type (docs/bank-hook-ending.md):** #7 yang sebenarnya dilihat AI

## Loop ending
- **Last 1 s:** the model unbuilds atom by atom back up its leaders into the strip
- **Seam:** ending D benda dibongkar balik — the strip rolls back to the half-built state of frame 0

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–900, y ~1500–1616, 44 px Instrument Serif; karaoke active word = white-on-blue knockout (or red underline if it is the hl)

## Notes for the video build
- Beats: string types on → bonds draw → each segment card clicks to its atoms; camera = one punch-in on the hl atoms only
- Risk: long item labels overflow the strip — shrink-to-fit already handles to 26 px; keep captions ≤ 2 lines

## References
- https://en.wikipedia.org/wiki/Simplified_Molecular_Input_Line_Entry_System — molecule as ASCII: parentheses = branches, digits = ring closures
- https://arxiv.org/abs/1701.01329 — networks trained on SMILES generate molecules as strings
