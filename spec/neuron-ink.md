# Neuron Ink (`neuron-ink`)

**Metaphor:** A scientist's pen-and-ink drawing of a single neuron → where "neural network" comes from: a neuron sums weighted inputs and fires; the artificial neuron copies only that sketch and nothing more.
**Series:** how-ai-works
**Axes:** pastel · serif · 2D · diagram

## Look
- **Palette:** `#EDE3CC` aged notebook paper · `#1A1714` ink · `#3B5BA0` blue stamp, weights, signal arrows · `#A6402E` rust output plate, margin rule, strikethrough · `#CFC2A3` stains, ruled lines
- **Fonts (Google Fonts):** Crimson Pro (600 title, italic hand-lettered labels) / Inter Tight (weights, slip, caption)
- **Grid / layout:** kicker y 266; title y 322–~560 (Crimson 600, hl rust-underlined); neuron drawing x 66–1010, y 560–1400 (soma ~470,1030, dendrites fanning left, myelinated axon down-right); typed myth slip top-right y ~600; rust OUTPUT plate at the axon terminal ~y 1270; blue catalogue stamp (caption) x 480–990, y ~1360–1620, rotated −2.5°; meta bottom-left y ≤1620.
- **Signature elements:**
  1. Hand-drawn ink neuron — soma blob with nucleus, wavy dendrites, myelin diamonds, signal arrows A·B·C
  2. Dendrite tips labelled as weighted inputs (italic word + blue weight)
  3. Typed slip with "otak manusia" struck out and "sketsa ini" written in blue

## 2-second hook
- **Frame 0 shows:** the untouched ink drawing with the typed slip "AI meniru otak manusia" laid on the page
- **Motion (0–2 s):** at 0.6 s "otak manusia" is struck through in rust and "sketsa ini" is written in above the arrow — mask-lift write-on
- **Why it stops the scroll:** a confident correction performed as a physical gesture on an archival document
- **Hook type (docs/bank-hook-ending.md):** #4 Mitos dicoret

## Loop ending
- **Last 1 s:** the closing line "…dan semuanya berawal dari satu gambar tinta:" as the slip is lifted off the page
- **Seam:** ending **A — kalimat sambung**: the cut returns to the untouched frame-0 drawing, sentence completing the opening

## Caption / voice-over
- **Slot:** `data-slot="caption"` inside the blue catalogue stamp, x 480–990, y ~1360–1620, Inter Tight 600, 40–42 px, max 2 lines; active word knocked out of a filled `#3B5BA0` block in cream.

## Notes for the video build
- Beats: dendrites draw-in (stroke-dashoffset) → each input's weight stamps on its spoken word → axon fires (pulse to terminal) → OUTPUT plate stamps. One emphasis move per scene; camera: single punch-in to the soma.
- Risk: ink jitter must stay fixed (hash), never animated wobble.

## References
- https://www.quantamagazine.org/why-the-first-drawings-of-neurons-were-defaced-20170928/ — fine pen-and-ink cells with signal arrows and a blue catalogue stamp: the archival mark becomes a graphic element
- https://hyperallergic.com/427071/the-beautiful-brain-the-drawings-of-santiago-ramon-y-cajal/ — ink on small notebook sheets: restraint, one specimen per page, lots of paper
