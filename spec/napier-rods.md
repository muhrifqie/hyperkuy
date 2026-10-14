# Napier Rods (`napier-rods`)

**Metaphor:** a walnut box of boxwood Napier's rods lined up to multiply, with a carry pencilled in red → why AI slips on arithmetic: a language model reads numbers as chunks and recalls patterns instead of computing digit by digit, so a carry that crosses a chunk gets lost — which is why AI now hands real maths to a calculator tool.
**Series:** how-ai-works · ai-tools
**Axes:** dark · serif · 3D · physical-object

## Look
- **Palette:** `#1E1612` desk (background) · `#E9DCC0` boxwood (rods, title, slip) · `#2B2219` walnut ink (digits, labels) · `#A8301F` red pencil (carry ring, hl underline, active word, hot chip) · `#B48A4A` brass (index rod, meta, fittings)
- **Fonts (Google Fonts):** Libre Caslon Text 400/700 + italic (title, hl, rod digits, labels, caption) / IBM Plex Mono 500/600 (kicker, date, tape chips)
- **Grid / layout:** margins 90. Kicker + date y 300. Title y 350 → max 600 (fit 120→72 px, ≤ 3 balanced lines, lh 1.12). Box in real CSS 3D (perspective 1900, rotateX 16°) on screen y ≈ 622–1404: brass index rod x 98–160, 3–5 item rods x 172–896 (equal widths), spare rod + red pencil x 908–998 (decoration, no text). Rod = head digit 80 px · 9 lattice rows (40 px, reading row 76 px) · label foot ≈ 124 px. AI tape y 1300–1386. Caption slip y 1426 → ≈ 1565, source ≤ y 1620. Sliding lid lies in the bottom UI band (decoration only).
- **Signature elements:**
  1. Napier rods as the items — one rod per item (head digit from the value, slanted-diagonal lattice, label at the foot); the reading row is lit and taller, its number circled on the brass index rod.
  2. Red-pencil carry — the diagonal channel that overflows is ringed and "+1" is pencilled across the slanted bar into the next channel; the row is chosen so the arithmetic is real, not faked.
  3. The AI's punched reading tape — one chunk chip per rod (the values), a red slash where the carry crosses the chunk boundary, hot chip red-bordered: the same number as the model sees it.

## 2-second hook
- **Frame 0 shows:** the open box, rods aligned; the paper slip reads "9,11 > 9,9 ?" with a pencilled AI answer "Ya".
- **Motion (0–2 s):** 0.4 s a red pencil strikes "Ya" (300 ms stroke, ease-out); 0.8 s the rods slide one notch and the reading row lights, brass index circle jumps to it (400 ms, power2.out); 1.3 s the ring draws round the overflowing channel and "+1" is written; on-screen text "AI salah hitung. Kenapa?" (4 words).
- **Why it stops the scroll:** a "smart" AI is visibly wrong on a simple comparison, shown on a strange, precise antique object.
- **Hook type (docs/bank-hook-ending.md):** #1 AI salah di depan mata

## Loop ending
- **Last 1 s:** after the CTA (~85%) the pencil marks erase in reverse, the tape rolls back, the rods slide down notch by notch into their slots and the slip returns to its frame-0 position with the same question "9,11 > 9,9 ?" and "Ya".
- **Seam:** last frame = frame 0 composition exactly (ending D, object taken apart back to its start) and the hook question is asked again (C); the pencil strike at 0.4 s lands on the loop. No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` = the torn paper slip at x 90–900, y 1426 → ≈ 1565, Libre Caslon 46→40 px, 1–2 balanced lines; active word = red-pencil `#A8301F` pill with bone text (D.hl if in the caption, else the first word). `sub` is shown only here.

## Notes for the video build
- Per beat: the rod named by the voice rises out of its slot (rise on arcs, 400 ms) and its chip types onto the tape; reading-row change = selection jump on the index rod; carry = draw-in ring + "+1" (highlight stroke), then the chunk slash; tool payoff = the red pencil is set aside and a "kalkulator" chip stamps the tape.
- Camera: still by default; one punch-in on the ringed channel when the carry is spoken (hold ≥ 1.5 s), one pull-back for the payoff. Max 1 emphasis move per scene; never animate the box tilt while digits are being read.
- Risk: 30 px lattice digits shrink under the tilt — keep rotateX ≤ 16° and only the reading row carries the message.

## References
- https://catalogue.museogalileo.it/indepth/NapiersBones.html — each rod is a table of multiples split by slanted bars; you read a row instead of calculating (lookup, not arithmetic).
- https://collection.sciencemuseumgroup.org.uk/objects/co60408/set-of-napiers-bones-18th-century-napiers-bones — the boxed set as a museum object: small rods, precise engraving, the box as the frame.
- https://www.beren.io/2023-02-04-Integer-tokenization-is-insane/ — numbers are split into irregular chunks by the tokenizer, so digit-level operations like carries are hard for a model.
