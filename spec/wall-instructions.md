# Wall Instructions (`wall-instructions`)

**Metaphor:** a LeWitt-style gallery wall: one written instruction, carried out in graphite by different drafters → one prompt, many models. A fair comparison gives every model the same instruction, then checks who followed it word for word.
**Series:** ai-tools (model comparisons only; not recommended for ai-in-numbers)
**Axes:** light · mono · 2D · diagram

## Look
- **Palette:** `#ECECE8` gallery wall (light pools `#F9F9F6`) · `#1A1A1A` ink (vinyl title, values) · `#55554F` graphite (drawings only, never text) · `#B8331F` stamp red (hl, "INSTRUKSI", stamp, active word) · `#FBFBF9` museum-label card
- **Fonts (Google Fonts):** Sometype Mono (title, instruction, labels, small print) / Inter Tight (values, caption)
- **Grid / layout:** 90 px margins. Vinyl title x 90–900 from y 304 (64–104 px; capped at 330/276/222 px tall for 3/4/5 items), then a 2 px ink rule. Wall text follows: "INSTRUKSI · Gambar dinding #ep · series" (26 px) and the instruction on one typed line (30–34 px). The hang runs x 90–894 from wall text +36 to caption −34: 3 items = triptych (one row, panels up to 2.2× as tall as wide); 4 = 2×2; 5 = 3 over 2. Each panel has its label 14 px under it. Caption ends 24 px above the small print, and the small print ends at y 1614. x 900–990 stays empty at y 900–1500. Decoration only outside the safe zone: hairline track y 150–220 and skirting/floor y 1690+.
- **Signature elements:**
  1. **Panels:** graphite ruled straight onto the wall, corners overshooting like ruler lines, one per item. One reading is exact: straight lines from the centre point to the edge. Each other reading breaks one word of the instruction: rings (not straight), fans from two corners (not from the centre), wavy rays (not straight), quarter hatching (from the centre lines, not the point). Line count follows each value's rank (more = denser), so the wall is the data too.
  2. **Labels (tombstones):** a museum label under each panel: letter box, label (mono 30), value (Inter Tight 42). The label sits on one line when it fits, otherwise it is stacked. It replaces any separate list.
  3. **Stamp:** a red "SESUAI INSTRUKSI" rubber stamp (double rule, ink-pad edge) on the exact panel, and the letter box turns red. It appears only when the data names the winner (`D.pick` = label, letter or 0-based index, or `hl` matching a label). Otherwise there is no mark, the exact reading sits at B, and the wall is a puzzle.

## 2-second hook
- **Frame 0 shows:** title "Prompt sama, 3 AI. Siapa benar?", the instruction line "Garis lurus dari titik tengah ke tiap tepi.", and three panels drawn to 85%. The labels show letters and labels, with values still blank and no stamp.
- **Motion (0–2 s):** the last graphite lines draw out from each centre or corner (stroke draw-in, 120 ms stagger, power2.out, done by 1.3 s). The instruction's full stop types in at 1.4 s. The camera stays still.
- **Why it stops the scroll:** the rule is printed right above the drawings, so the viewer can test radial against rings against fans and pick a winner before the voice does.
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu (with ending B)

## Loop ending
- **Last 1.5 s:** after the CTA (~85%), a paint roller crosses left→right in 0.35 s, whiting out the panels, values and stamp (the labels' letters stay). The graphite then redraws in order A→B→C for ~1.1 s and stops at 85%.
- **Seam:** B, frame kembali persis. The last frame is frame 0 (title, instruction, 85% panels, blank values), so the frame-0 draw-in simply continues it. The title and wall text never move, and nothing fades.

## Caption / voice-over
- **Slot:** `data-slot="caption"` x 90–900, ends 24 px above the small print (about y 1450–1560), 1–2 lines, 44 px Inter Tight 600 (40 px when long; a longer line pages, and the still shows page 1 with "…"). Karaoke: the active word is ink 700 inside a red ruled box whose sides overshoot like the panel frames. Spoken words are ink and upcoming words `#5C5C58`.

## Notes for the video build
- Beats: the title and instruction are on the wall from frame 0 (no type-on). On the word naming each model, its panel finishes and its value appears on the label. At the payoff (before 70%) the stamp lands on the exact panel (scale 1.15→1, 0.25 s, no bounce) and the letter turns red.
- Camera: one punch-in to the stamped panel and its label at the payoff, hold ≥ 1.5 s, then still. Bake the graphite and ink-pad displacement filters into static layers before animating stroke draw-in.

## References
- https://massmoca.org/sol-lewitt/ — the written instruction is the work, and drafters execute it, so each wall is one execution. Taken: show the instruction beside the executions.
- https://en.wikipedia.org/wiki/Sol_LeWitt — the same instruction yields different walls depending on who draws it. Taken: graphite ruled on the wall, and each misreading breaks one word of the rule.
