# Seven Pieces (`seven-pieces`)

**Metaphor:** seven flat lacquered tangram pieces laid on a printed black silhouette (a sitting cat), the seventh still sliding in → a model owns a fixed set of pieces (its token vocabulary) and composes endless new sentences by rearranging them; it builds, it does not look answers up.
**Series:** how-ai-works
**Axes:** pastel · grotesque · 2D · abstract

## Look
- **Palette:** `#F1E9DD` sand board (ground, grain) · `#1C1C1C` ink (silhouette, title, leaders, seams) · `#C4441F` vermilion lacquer (the sliding piece, title hl; deepened from #D6542E so cream text reaches 4.6:1) · `#2F5DA8` cobalt lacquer (head, back, caption active word) · `#E8B04A` ochre lacquer (ears, chest, tail)
- **Fonts (Google Fonts):** Bricolage Grotesque 800 (title, word on the piece) / Bricolage Grotesque 600-700 (labels, caption) / Martian Mono 500-600 at wdth 78-85 (kicker, values, card, meta)
- **Grid / layout:** margins x 90-990. Kicker y 294. Title y 350 → ≤ 300 px tall (fit 124→76 px). Puzzle card x 96-346, from title bottom +52, 280 px tall, rotated −3.5°. Figure: exact tangram on a unit grid, u = min(100 px, height/7); floor line ≈ y 1370-1416, ears at floor − 7u; tail x ≈ 92-392, body x 392-792, sliding piece ends at x 892. Labels: left column x 96-358 (card bottom → tail top), right column x 632-900 (object top → above the sliding apex). Caption sits on the footer (≈ y 1418-1530); footer bottom y 1614.
- **Signature elements:**
  1. The printed black silhouette with six lacquered pieces on it (6 px black seams, a thin lacquer sheen line); the uncovered black wedge = the one missing token.
  2. The seventh piece: the big vermilion triangle mid-slide down-left along the back piece, carrying `D.hl`, three ink speed strokes behind it; the title hl uses the same vermilion slab cut at a tangram slant.
  3. Puzzle card "KARTU 07 · 6/7 TERPASANG" showing the target as outline only, plus hairline leaders tying each item (label + mono value) to its piece like a puzzle-book solution page.

## 2-second hook
- **Frame 0 shows:** the cat one piece from done (the still), on-screen "7 keping, kalimat tak terbatas" with "tak terbatas" on the vermilion slab.
- **Motion (0-2 s):** the triangle finishes its slide down-left (0-0.9 s, power2.out, no overshoot) and locks with a wooden tick at 0.9 s, seams close; card counter count-and-locks 6/7 → 7/7; 1.2-2.0 s the card swaps to KARTU 08 (a runner outline) and two pieces lift 8 px, ready to rearrange. Camera still.
- **Why it stops the scroll:** a puzzle one piece from done begs to be finished, and "7 pieces, endless sentences" sounds impossible.
- **Hook type (docs/bank-hook-ending.md):** #2 Angka mustahil (impossible number)

## Loop ending
- **Last 1 s:** after the CTA (~85%) the pieces glide out of the last figure back onto the cat silhouette (ease-out, 80 ms stagger, 45° rotation steps); the card flips back to KARTU 07 · 6/7; the vermilion triangle re-enters from upper right on the same diagonal.
- **Seam:** ending D (object taken apart back to its start): the cut lands while the triangle is at its frame-0 offset, still moving down-left, so frame 0 simply continues the slide and the 0.9 s tick closes it. Same composition, same motion direction, no fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90-890, y ≈ 1418-1530 (between the figure floor and the footer), 46→40 px Bricolage Grotesque 600, 1-2 lines; said words ink, upcoming `#6B6259`; active word (D.hl if in the caption, else the first word) in cream on a cobalt parallelogram slab (0.22 em tangram slant).

## Notes for the video build
- Each item = one beat: its piece lifts 6 px, its leader draws (stroke-dashoffset) and the label mask-lifts on the word that names it; values count & lock. The payoff beat: the same seven pieces rearrange into a runner (translate + 45° rotation steps, 100 ms stagger) = a new sentence from the same vocabulary.
- Camera = punctuation: still by default; one punch-in on the sliding triangle when the hl word is spoken, hold ≥ 1.5 s. Max 1 emphasis move per scene.
- Risks: pieces never scale or overlap (fixed vocabulary); keep rotations at 45° multiples and seams constant; text never bounces, only the piece settles.

## References
- https://en.wikipedia.org/wiki/Tangram — seven fixed pieces, all used, no overlap, target given only as an outline: limited parts, unlimited figures.
- https://en.wikipedia.org/wiki/Byte_pair_encoding — a fixed subword vocabulary composes any text; the pieces on the board stand for those vocabulary entries.
