# Rubricator (`rubricator`)

**Metaphor:** the recto of an open codex, one continuous wall of faded textura, until a rubricator adds the red layer: a gilded opening ¶, red pilcrows dropped mid-line, a red closing rule and red chapter numbers in the margin → what a model receives is not separate chat bubbles but one long page, split only by hidden marks (special tokens) that say where each part starts and ends.
**Series:** how-ai-works
**Axes:** light · serif · 2D · physical-object

## Look
- **Palette:** `#EDE3CF` vellum leaf · `#2A2420` iron-gall ink (text, faded wall, gutter shade) · `#B3261E` minium red (rubrication layer + active caption word only) · `#C9A45C` gold (gilded opening ground, silk register, quill vane, board fillet) · `#1B1A22` desk (bottom strip)
- **Fonts (Google Fonts):** Cormorant Garamond 700 (title; `hl` = red rubric, upright) / EB Garamond 500–600 + italic (items, small-caps margin numbers, caption, meta) / JetBrains Mono 600 (margin token names, only when the data gives tags)
- **Grid / layout:** recto of an open codex, bleeding off top and right · gutter x 0–110 (verso edge, fold, sewing thread crossing at the stations, gold silk register x 44–84 running out over the tail onto the desk) · running head y 290–330 (series · ep left, `fol. Nr` right) · title y 346–≤632, 74–122 px; a 40 px italic sub gloss under it only when `caption` is separate · text block ruled at 64 px (72 px for 3 items) from ≈694–760 down to the closing baseline 1376; column x 234–880 (X0 moves right, max 320, for wide mono tags); margin notes right-aligned at X0−20 · caption y ≈1422–1570, x 120–900 · meta y 1580–1616 · page tail y 1668 with stacked leaf edges and leather board; desk y ≈1740–1920 with the minium pot (decoration) · quill: nib at the end of the closing rule, ≈210 px of shaft entering from the right margin (decoration only in the button zone).
- **Signature elements:**
  1. The wall: continuous textura drawn as SVG minims (diamond heads and feet, joins, abbreviation strokes, punctus), no paragraph breaks; only the item lines are legible text.
  2. The red layer: a gilded two-line opening ¶ with one penwork scroll, a red ¶ dropped mid-line per item, a punctus triad + double closing rule. Margin notes are rubricated chapter numbers `cap. i…v` and `explicit`; only when the data supplies tags (`item.tag`, `D.tags[i]`, `D.tags[n]` / `D.tag_end`) do they become mono token names (`<|user|>`, `<eos>`).
  3. The codex: gutter with sewing thread, silk register, stacked tail edges. Long items use the scribe's turn-up (the value is carried to the next ruled line, flush right, opened by a red bracket); nothing passes x 880.

## 2-second hook
- **Frame 0 shows:** the open codex and title, with the gilded ground + large red ¶ already on line 1 (the red/gold focus); below it, one unbroken illegible wall (item lines still script, no other red, empty margin, no quill).
- **Motion (0–2 s):** 0.3 s the quill nib slides in from the right margin (nib + ≤250 px of shaft, never over the column); line 1 resolves from script to text (L→R mask, 300 ms) and `cap. i` writes on. 0.7–1.6 s the nib ticks down the right margin: on each item line a red ¶ stamps in mid-line (overshoot on the mark only), the line resolves, its margin number writes on (≈250 ms stagger). 1.6–1.9 s the closing rule draws L→R into the nib. Hold.
- **Why it stops the scroll:** an illegible wall of old script splits into readable lines the moment the red marks land; structure appears out of noise.
- **Hook type (docs/bank-hook-ending.md):** #9 Detail misterius (mask reveal, no camera zoom); on special-token topics it doubles as #7 Yang sebenarnya dilihat AI.

## Loop ending
- **Last 1 s:** the rubrication is lifted in reverse: the closing rule retracts into the nib, the red ¶ fade last→first (60 ms stagger), lines melt back into script, margin notes unwrite, the quill withdraws off the right edge. The gilded opening ¶ stays.
- **Seam:** the last frame is frame 0 exactly (wall + gilded ¶, empty margin, no quill); the quill re-entering from the right at 0.3 s continues its exit (ending D benda dibongkar balik + B frame kembali persis + E arah gerak; no fade).

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 120–900, between the closing rule and the meta line (y ≈1422–1570), 1–2 balanced lines, EB Garamond italic 44 px (min 40); karaoke: the single active word turns upright semibold vellum on a minium-red block.

## Notes for the video build
- One beat per item: nib ticks the margin → ¶ stamps → line resolves (script run crossfades to text with an L→R mask) → margin number writes; values count up only when numeric. Liveliness comes from the pen, not the camera.
- Camera still; one emphasis move per scene: slow punch-in on the gilded ¶, hold ≥ 1.5 s, then travel down the column to the closing rule (never zoom straight back out). Red stays on the rubrication layer and the active caption word.

## References
- https://en.wikipedia.org/wiki/Rubrication — red added after the black text was finished: pilcrows, initials, chapter numbers, "explicit".
- https://en.wikipedia.org/wiki/Pilcrow — the capitulum was dropped mid-line into continuous text; the space left for it became the paragraph indent.
- https://en.wikipedia.org/wiki/Bookbinding — sewing stations along the fold and the ribbon register (principle only, no assets).
