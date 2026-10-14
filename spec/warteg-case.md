# Warteg Case (`warteg-case`)

**Metaphor:** a warteg etalase, where you point through the glass at the tray you want and get exactly that → RAG: the AI points at the relevant documents (trays) and plates its answer from them, instead of serving a dish that no tray holds.
**Series:** how-ai-works · ai-tools
**Axes:** dark-and-light · condensed · 2.5D · physical-object

## Look
- **Palette:** `#2B58A6` warteg blue (board, case frame, counter apron) · `#F4F1EA` enamel cream (trays, lips, plate, type) · `#1C1A18` dim warung interior · `#E3B04B` turmeric (hl word, tapped tape, ladle path, active caption word) · `#C2412D` sambal red (strike on the plate, kerupuk ties, caption underline)
- **Fonts (Google Fonts):** Oswald 600 (board title, sub-line, values), Oswald 500 (tape labels) / Karla 600 (caption, meta)
- **Grid / layout:** Kerupuk bags hang on a string at y 0–~270 (decor). Name board x 34–1046, bottom fixed at 600, grows upward (title top ≥ 300): centred title 120→72 px (max 224 px tall), with a painted sub-line "series · ep" at y 534 between diamond rules. Etalase y 606–1148, seen from the bench through the sloped top glass: a back row of 3 small distractor trays (648–704), then 2 perspective rows of 3 (middle 722–896, front 934–1110). Items fill 3–5 of the 5 open slots in reading order. Front-right sits in the button zone and is always a distractor, so 4–6 unlabelled trays surround the items. Plate on the wood counter, centred (540, 1262), 584 px wide. Caption painted on the blue counter apron (y 1432–1580), meta at 1586.
- **Signature elements:**
  1. Heaped enamel trays in perspective. Pieces vary in scale and rotation (fixed hash), pile above the back rim, are never cut at the side walls, and have a soft highlight on top. Items: telur balado, tempe orek, perkedel, mie, ayam. Distractors: ikan goreng, sayur nangka, terong balado. Label = masking tape on the glass, value = written on the tray's enamel front lip (one shared size).
  2. A fingertip presses the glass over the tapped tray, from the right edge (or from the left for a left-column tray), with ripple rings. Its tape turns turmeric. The tapped tray = `D.pick`, else the item sharing hl words (3+ letters or a bare number), else items[0]. Item order never changes.
  3. The enamel plate holds rice plus a steak with fries (no warteg sells that), struck out in sambal red. A dashed turmeric ladle path runs from the tapped tray, down the gap between trays, onto the steak.

## 2-second hook
- **Frame 0 shows:** the full etalase and the big plate with rice + steak and fries, not yet struck. The finger hovers 30 px off the glass over the right tray. Every tape is cream, with no ripple and no ladle path. On-screen ≤ 7 words: "AI ngarang? Suruh nunjuk dulu."
- **Motion (0–2 s):** 0.3 s: a red marker strike slashes the steak (0.25 s, ease-out). 0.9 s: the finger presses the glass, the ripple rings expand once and the tape flips to turmeric. 1.2–1.8 s: the dashed ladle path draws from the tray onto the steak. At 1.8 s the frame equals the cover still.
- **Why it stops the scroll:** a steak with fries on a warteg plate is absurd at a glance, with nothing to compare, and every Indonesian knows the "tunjuk kaca" gesture.
- **Hook type (docs/bank-hook-ending.md):** #1 AI salah di depan mata

## Loop ending
- **Last 1 s:** after the CTA (~85%), the correct scoop is lifted off the plate while the VO's last line hangs ("…kalau nggak disuruh nunjuk, ya dia ngarang:"). At t−0.4 s the same steak with fries drops onto the plate at its exact frame-0 position, unstruck. The tape returns to cream, the ripple and the ladle path are gone, and the finger lifts back to its frame-0 hover spot. Cut.
- **Seam:** the last frame equals frame 0 pixel for pixel. The red strike at 0.3 s is the first motion of the next pass, and the opening line completes the hanging sentence. Ending A (kalimat sambung) + B (frame kembali persis).

## Caption / voice-over
- **Slot:** `data-slot="caption"` painted on the counter apron, x 112–888 (left-aligned, clear of the x > 900 button zone), centred in y 1432–1580. Karla 600 at 46→40 px on 1–2 lines; 80–90-character captions get 3 lines at 40 px with a 1.2 line height. The active word is turmeric with ink text, a 6 px radius and a thin sambal-red underline.

## Notes for the video build
- Beats: 2.0–2.6 s, the struck steak lifts off and a scoop of the tapped dish rides the ladle path onto its spot. After that, each item's tape is stuck on the glass on its word and its value is written on the lip (type-on). Distractor trays never animate: they are the chunks that were not retrieved.
- Camera: still by default. At most one punch-in per scene to the pressed tray, and one pull-back near the end. Never zoom in and straight back out. Keep the food static (no idle wobble) so the tapes and values stay readable.

## References
- https://www.cnbcindonesia.com/lifestyle/20250128145003-33-606318/jawaban-misteri-kenapa-warteg-punya-2-pintu-tak-banyak-orang-tahu — dishes behind glass so buyers choose by pointing, blue paint tied to Tegal, benches facing the case: the case is a physical selection interface.
- https://en.wikipedia.org/wiki/Sign_painting — sign-painter conventions: flat caps, centred name board with a small sub-line, one accent colour, a block shade in a darker tone of the ground.
