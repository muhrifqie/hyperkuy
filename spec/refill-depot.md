# Refill Depot (`refill-depot`)

**Metaphor:** an Indonesian refill water depot (depot air minum isi ulang) seen from the counter → before an AI answer reaches you it runs through a row of safety filters; one of them catches the problem, and only clear water gets sealed into the gallon.
**Series:** how-ai-works · ai-tools (best for pipeline / safety topics: moderation, guardrails, checks before output)
**Axes:** light · grotesque · 2D · physical-object

## Look
- **Palette:** `#EEF1F2` white tile wall · `#17222E` ink line work + counter front · `#3A6FB5` signboard, housing heads, caps · `#CFE3F1` clean water · `#D24A2E` the catch (price label on the sign, catch sticker band, relief button, flag tags, active-word underline). Dirty water and grit use a tea-brown tint `#9A7D58` (through cream `#E6DCC8`) on the water and grit only, never on a surface. No green.
- **Fonts (Google Fonts):** Archivo Black (signboard title) / Onest 500–800 (sign strip, labels, certificate, caption) / Archivo Narrow 700 (values printed on the housing heads)
- **Grid / layout:** margins 90. Signboard x 90–990, y 308–~615: white top strip "DEPOT AIR MINUM · series · ep", then the centred white title (fit 104→54 px, ≤ 3 lines). Machine below it: stage tabs on the wall bracket → blue heads carrying the value (one common size 50→30 px; a long value may take 2 lines, split on spaces only) → sumps down to y ~1040 with the label sticker just under the collar (bottom ≤ 896; long words get Indonesian soft hyphens, e.g. "Disin-formasi") → UV tube → tap → gallons on the counter top (y ≈ 1478). Framed lab certificate at x 96–474 left of the gallons. Caption on the counter front. Tank, inlet pipe and clump sit in the top-left margin (decoration).
- **Signature elements:**
  1. The shop signboard: a blue acrylic box bolted to the tiles, white title, `hl` as a red price label with a white keyline.
  2. A row of 3–5 filter housings: water murky before the catch and clear after it. The catch (item whose label/value matches `hl`, else the middle stage) has a clogged cartridge, a grit pile with two red flag tags, a red sticker band and a red relief button.
  3. The gallon ritual and the shop's paperwork: a fresh gallon just docked under the tap beside a capped one with a white seal (segel) and red tear strip, plus a framed "Hasil Uji Lab" certificate that carries the source and date.

## 2-second hook
- **Frame 0 shows:** the depot running: a dark clump with a small red flag tag in the brown inlet pipe, murky water up to the catch housing (grit already settled, relief button down), clear water after it, and a fresh gallon at ~5% with the stream just touching its floor. On screen: "Sebelum jawaban AI sampai ke kamu…" (6 words).
- **Motion (0–2 s):** the clump rides the brown tint down the inlet and along the header (0–0.6 s, power2.in), drops into the catch sump and slams onto the cartridge at 0.6 s, where a brown puff spreads and stops (0.6–1.0 s). The catch's red relief button pops up (0.6–0.75 s, power3.out). Downstream sumps stay clear and the gallon keeps filling clear. Camera still.
- **Why it stops the scroll:** dirty in, caught in the middle, clean out, all in one frame, and the viewer wants to know what the red-tagged clump was.
- **Hook type (docs/bank-hook-ending.md):** #12 Kalimat menggantung, with the flagged clump as the mystery detail.

## Loop ending
- **Last 1 s:** the gallon has filled at one steady rate for the whole video. The tap lever closes, the full gallon gets the blue cap and white seal, the old sealed gallon slides out of frame right and the new one slides into its spot (ending E). The next empty gallon rises through the counter hatch under the tap (it cannot drop past the tap and UV pipe) into the frame-0 pose, the tap opens and the water reaches ~5% on the loop point. In the final 0.5 s the red relief button on the catch is pressed: a backwash drains the grit pile back to its frame-0 height, and the next clump drops from the tank to its frame-0 spot in the inlet.
- **Seam:** ending B + E: every element is in its frame-0 pose at the cut, the pipe tints never change (steady flow), and the fill rate is the same on both sides of the cut. The VO's last line hangs into the first (ending A): "…dan itu terjadi setiap kali kamu nanya ke AI:" → "Sebelum jawaban AI sampai ke kamu…".

## Caption / voice-over
- **Slot:** `data-slot="caption"` on the counter front, x 90–990, centred between the counter lip and y 1620, Onest 600 46→40 px, 1–2 lines (a third line lifts the counter top instead of leaving the safe zone). Vinyl lettering: spoken words white, upcoming `#B7C2CC`, exactly one active word in 800 with a 7 px `#D24A2E` underline strip.

## Notes for the video build
- One beat per housing: the tint wipes through the next link, the head value counts up and the sticker lands. The catch gets its grit on the word that names it. The gallon level is linear in time.
- Camera still by default; one punch-in to the catch housing when it is named and one pull-back to the gallon (hold ≥ 1.5 s). Water calm and laminar, the UV lamp a pale line, no glow.

## References
- https://eprints.poltekkesjogja.ac.id/17632/ — Indonesian refill depots chain silica sand, activated carbon, 0.1–0.5 µm cartridges and UV. Principle taken: a real left-to-right treatment order sets the housing order and cartridge types.
- https://en.wikipedia.org/wiki/Piping_and_instrumentation_diagram — Principle taken: one flow line, one unit per step, direction marks on the pipes, drawn flat without perspective.
