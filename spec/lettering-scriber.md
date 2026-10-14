# Lettering Scriber (`lettering-scriber`)

**Metaphor:** a draughtsman's scriber lettering through a grooved orange template → constrained decoding. The pen can still write any content, but it only moves along grooves the template (the schema) allows, so the format always comes out valid.
**Series:** ai-tools
**Axes:** light · mono · 2.5D · diagram

## Look
- **Palette:** `#EEF1F4` drafting film · `#1B2330` ink: title, field content, pen (text tint `#46505F`) · `#E25A2C` template orange: template, strike, ghost edges (lettered orange uses the deep shade `#B1411A`) · `#8A96A6` steel: scriber plate, pins, tape edge · `#2E5BBA` non-repro blue: guidelines, `hl` baseline, registration marks, pen band
- **Fonts (Google Fonts):** no font for the lettering. Title, fields and the `✗ FORMAT RUSAK` mark use the template's own single-stroke glyphs (A–Z, 0–9, punctuation) as monoline SVG strokes with round ends / Public Sans 600–800 (caption, source) / B612 Mono 700/400 (meta) / Caveat 600 (only the struck freehand line)
- **Grid / layout:** 90 px margins. Meta at y 292 · title lettered from cap line y 366, 1–3 lines (cap 40–84 px, ≤ 900 px wide), each line on its own blue cap and base guidelines · freehand line ≈ title + 38 (struck), with the orange mark right-aligned under it · fields from ≈ y 700: one field per template step (cap 29–46 px, rows ≤ x 880), closing `}` alone on the last step · template top 18 px under the `}` baseline, 240–300 px tall, grooves 0.44 × height (≈ 119–132 px) · caption 42 px under the template · source under the caption, ≤ y 1612. Everything is fitted from the data; slack goes to the template step and template height.
- **Signature elements:**
  1. One glyph set for template and ink. The engraved grooves `{ } " : , A–H 0–9` and every lettered character are the same paths, so the title and fields visibly come out of this template.
  2. The parked rig. The `}` groove is floored dark with the tracer pin in it, and the steel nib touches the film right after the lettered `}` above it. Blue dashed registration marks (a circle, an ellipse and a leader) pair the groove with the ink. All rig parts sit at x ≤ 490.
  3. Template steps on a tracing overlay hinged under the tape. Each field is lettered on the template's top edge, and dashed orange ghost edges (ticks, rounded left end, fading right) show where the template sat for each earlier field. There are no notebook lines and no margin rule.

## 2-second hook
- **Frame 0 shows:** the cover layout at field 1. The AI's freehand attempt is visibly broken (no quotes, label run into value `kenapa2 token`, value in the key slot, an unclosed quote) and struck once in orange, with `✗ FORMAT RUSAK` lettered under it. Directly below, row 1 is already perfectly lettered, the template sits one step under it, and the nib is parked at the start of row 2.
- **Motion (0–1.5 s):** the tracer snaps groove to groove (power2.inOut, ~0.07 s per glyph) while the template slides under it. Each engraved groove flashes dark on the exact frame its ink copy appears on the overlay, so row 2 is lettered by 1.4 s. The camera stays still.
- **Why it stops the scroll:** the wrong output and the forced-correct output sit on screen together, and the groove-to-ink flash shows where the correctness comes from.
- **Hook type (docs/bank-hook-ending.md):** #1 AI salah di depan mata (the struck line is a correction, not decoration)

## Loop ending
- **Last 1 s:** after the CTA (~85%) the `}` is lettered (the cover state). The tracing overlay flips up on its tape hinge and out of the top edge, taking every field and ghost with it. The title and the struck line stay on the base film, and a fresh overlay lies beneath. The template slides back up to the first step with `{` under the tracer, and the pen letters row 1 in one fast pass (0.5 s, grooves flashing).
- **Seam:** the cut lands on the nib tap after row 1. That gives frame 0 exactly: row 1 lettered, pen at the start of row 2, and the same tap SFX as the opening. Ending D/F (object back to its start, pen back at an empty line) + J (same SFX).

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–900, y ≈ template bottom + 42 (y 1445–1555 in the samples). Public Sans 600 at 46 → 40 px, max 2 lines. A long caption shows the 2-line window that contains the active word. Karaoke: the active word (`hl` if it is in the caption, else the first word) is set in orange `#B1411A` 800 and stands on a short blue guideline with an orange start tick, with no chip. Other words are `#46505F`.

## Notes for the video build
- One beat per field. The template steps down one notch (its ghost edge stays), then the row is lettered on the word that names it, 40–60 ms per glyph, with each groove flashing. Structure glyphs land orange and content lands ink. While a row is lettered the rig travels right; for rows past x 600 the overlay and template track left together, so the tracer–nib pair never enters x > 820.
- Camera: one punch-in only, on the `}` groove ↔ `}` ink pair at x 90–260, then hold ≥ 1.5 s. Nothing idles.

## References
- https://www.typotheque.com/articles/from_lettering_guides_to_cnc_plotters — one pin rides a straight groove while the tracer follows engraved glyphs and the pen copies them: freedom bounded by a template, plain monoline forms.
- https://en.wikipedia.org/wiki/Lettering_guide — template, scriber and guidelines as one set. The template is slid along a straightedge for each line, and uniform lettering comes from the guide, not the hand.
- https://openai.com/index/introducing-structured-outputs-in-the-api/ — constrained decoding masks every token the schema does not allow, so the output always parses: the groove principle in software.
