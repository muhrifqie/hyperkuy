# Grille Overlay (`grille-overlay`)

**Metaphor:** an oxblood Cardan-grille card laid in register on the printed HTML source of an innocent web page → prompt injection: the human reads a recipe, the AI reads the order through the holes.
**Series:** how-ai-works · ai-news (hidden-reading topics: prompt injection, "what the AI actually reads", tokens). Number topics (ai-in-numbers) should use another design.
**Axes:** light · serif · 2.5D · code

## Look
- **Palette:** `#EEE8DA` laid paper (page, inside every hole, cream text on the card) · `#1C1A18` ink (code; tint `#57524A` for tags, gutter, meta, clipped neighbour glyphs) · `#8E2C24` oxblood grille card, the dominant colour (darker shades `#6A1F19`/`#5E1A15` only for its edge and ruling) · `#2F4A7A` blue = what the AI reads (hole words, hl, hidden-row numbers, active caption word) · `#C8BEA6` laid/chain lines, gutter rule
- **Fonts (Google Fonts):** Libre Caslon Text (title 104→72 px cream on the card, caption 44→40 px, values italic 32/30 px) / IBM Plex Mono (page code and hole words 36 px/500, card serial and footer 30 px, gutter/meta/print header 26 px)
- **Grid / layout:** the page = 28 printed rows × 58 px (y 140–1764): gutter numbers x 90–148, hairline x 166, code x 186. Print header y 62 (date · page title), print footer y 1812 (`view-source:` URL · 1/1). Card x 176–1032, height sized to the item count: serial row + title rows + (2n−1) slot rows + footer row. At least 3 innocent rows above it (card top ≥ y 308) and at least 1 between card and caption. Then the caption (1–2 rows), the source/date comment (ends ≤ y 1590), then the page's closing rows. Key text ≤ x 890 in the slot zone; card x 900–1032 is decoration.
- **Signature elements:**
  1. The grille card is the whole object. It carries a stamped serial `KISI NO. 01 · <series>` and the title stamped in cream. It also has a thumb notch, staggered die-cut holes numbered 1–n, and register pin holes in the footer row where the page crosshairs show through. Debossed ruling and edge ticks lock it to the page rows.
  2. The holes are real holes. Each one shows the page row under it: the hidden word in the page's own mono, size and weight, only blue, with half-clipped neighbour glyphs (`b>`, `</`, letters) at its edges. The title's hl is a big die-cut hole with code peeking in at both sides. Values are small cream italic notes beside the holes, not table cells.
  3. The innocent page around the card, a recipe by default (`D.page = {title, url, lines[]}` swaps it for a news topic's page). The line-number gutter runs past the whole card, with hidden-row numbers in bold blue.

## 2-second hook
- **Frame 0 shows:** the same sheet with the card visibly out of register, about 140 px down-right and rotated −7°. The gutter ticks and pin crosshairs are clearly misaligned, and every hole, the hl hole included, shows only grey fragments of innocent rows. The only on-screen text is the stamped title; there is no separate hook line, so write titles of ≤7 words for this design (e.g. "Halaman ini menyuruh AI-mu."). The cover shows the in-register state at about 1.2 s.
- **Motion (0–2 s):** from 0.2 to 1.2 s the card slides and rotates into register (power3.inOut), then clicks with a 2 px settle on the card only while its shadow tightens. On the click the holes land on the hidden words, which turn blue with a 60 ms stagger 1→n; the hidden-row numbers flip to blue and the hl hole lands on its blue word.
- **Why it stops the scroll:** a big red card snapping into place turns noise into a readable order, which is mechanical and satisfying. The threat (your AI obeying a web page) is personal.
- **Hook type (docs/bank-hook-ending.md):** #9 Detail misterius (revealed by the holes, no camera zoom)

## Loop ending
- **Last 1 s:** after the CTA (~85%) the card lifts (its shadow grows), slides about 140 px down-right and rotates to −7°. The holes slide off the words onto grey fragments and the blue numbers fade to grey.
- **Seam:** the last frame is exactly frame 0, combining B (frame kembali persis) and D (benda dibongkar balik). The lift tick at the end and the register click at frame 0 share one SFX (J).

## Caption / voice-over
- **Slot:** `data-slot="caption"` is set as the page's printed line under the card, x 186–900, on 1–2 page rows (about y 1300–1480 depending on the item count). It uses Libre Caslon Text 44→40 px with line-height equal to one row and text-wrap: balance; long lines are trimmed to a chunk with "…". Karaoke: the active word is blue on paper inside a 4 px oxblood die-cut ring, spoken words are ink, upcoming words `#57524A`.

## Notes for the video build
- The rows under the card are real code lines in the same mono, with the hidden words at the hole columns, so off-register frames show true fragments. Give each hole one beat: its word turns blue on the line that names it, and its note writes on. Early beat (~30%, after hole 2): lift the card's corner to show the hidden line printed white-on-white on the live page, invisible to the human and plain to the AI. This keeps viewers from reading the grille as "the AI reads less".
- Keep the camera still by default, with at most one punch-in per scene (onto the hole being spoken). Animate the card as one transform layer.

## References
- https://en.wikipedia.org/wiki/Grille_(cryptography) — a card with holes over filler text: an innocent layer and a hidden layer share one sheet.
- https://genai.owasp.org/llmrisk/llm01-prompt-injection/ — indirect injection: instructions hidden in external content the model reads, invisible to the human.
