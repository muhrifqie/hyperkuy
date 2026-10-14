# Dazzle Plan (`dazzle-plan`)

**Metaphor:** an Admiralty dazzle design sheet: the title painted as dazzle lettering, a numbered paint key, and the painted model on its observation turntable → adversarial examples: dazzle never hid the ship, it fooled the eye about what it was looking at, the way a few odd stripes or stickers make a vision model misread an image and stay very confident.
**Series:** how-ai-works, ai-news
**Axes:** dark-and-light · condensed · 3D · diagram

## Look
- **Palette:** `#2F4B7C` Admiralty navy ground · `#E9E4D8` paper (band, design sheet, light paint) · `#161616` ink (dark paint, title, key frame) · `#C9A44C` brass (hl wedge, rules, zone outlines, table rim, active word) · `#8FA3B8` slate (mid paint, table top, rigging, remarks ruling); tonal navy shards in the masthead, a navy-slate tint for the lit deck tops
- **Fonts (Google Fonts):** Big Shoulders Stencil Display 900 (title, key and hull numbers) / Big Shoulders Display 900 + Big Shoulders Text 700 (values; labels, caption) / IBM Plex Mono 500–600 (key header, sheet cells, source)
- **Grid / layout:** masthead y 0–280 (tonal only, sits under the top UI) · full-bleed dazzle band from y ≈280 to the title bottom + 50 (title x 90–990 from y 322, 132→78 px, ≤ 252 px) · middle band: paint key x 90–394 (widens to ≤ 482 for long labels), rows 104–180 px, centred; model + turntable fitted between the key and x 1046, centred, forward zone number kept ≤ x 890 · design sheet anchored to the bottom: source ends y 1612, cell row above it, remarks caption above that, optional sub line on top; the sheet bleeds off the bottom with the line-only elevation at y 1640–1920
- **Signature elements:**
  1. Dazzle lettering: stencil title painted across a paper band of 45° stripes and rays converging on a false vanishing point; a paper copy clipped to the dark wedges flips every crossed letter fragment. The hl is one more wedge of the scheme, painted brass and bleeding off the band edge.
  2. Paint key ↔ numbered colour zones: each chip is painted in its zone's colour with a stencil number; the same numbers are stencilled in brass-outlined hull zones (1 aft → n forward) and a sight line runs from each chip to its zone.
  3. The model on the brass degree turntable, turned bow-on (−46°) with lit deck tops, a dashed ghost "perceived heading" pointer and error arc on the ring; below it the design sheet's title block (remarks / SKEMA · SERI · TGL. / small-print source) over the side elevation with the zone outlines.

## 2-second hook
- **Frame 0 shows:** the painted band with the hook line "Coretan ini bikin AI salah." (5 words), the model at −46° with bare zone outlines, the key as numbered empty chips (no zone values yet, they drop in per beat), and one reading tag "AI: 97% PAUS" in the free top-right of the middle band, between the band and the masts (x ≈ 600–960, y ≈ 620–730 with a two-line title), whose leader drops straight to the forecastle zone at x ≈ 860 (< 880).
- **Motion (0–2 s):** at 0.5 s the table swings +40° (−46° → −6°, power2.inOut, 0.7 s): content motion, camera still, leader end recomputed from the projection; at 1.2 s the tag flips to "AI: 94% PULAU" and its brass dot stamps once.
- **Why it stops the scroll:** a loud dazzle object plus an obvious, confident error: everyone sees a ship, the "smart" AI insists it is a whale.
- **Hook type (docs/bank-hook-ending.md):** #1 AI salah di depan mata.

## Loop ending
- **Last 1 s:** after the CTA (~85%) the table swings back −40° (−6° → −46°), the opposite way to the hook turn, and the tag flips back to "AI: 97% PAUS"; key values clear to numbered chips. The model stays within ±40° of frame 0, so the one-sided painted slab never shows its edge or back.
- **Seam:** B frame kembali persis (same heading, same composition) + J: the closing flip SFX = the 0.5 s flip SFX, and the swing back makes the opening swing read as the next beat of one ping-pong.

## Caption / voice-over
- **Slot:** `data-slot="caption"` x 104–900 in the sheet's remarks field (ends ≈ y 1512, 1–2 lines up from ≈ 1400), 48→42 px Big Shoulders Text 700 ink on paper, slate rule under each line; karaoke: active word = ink on a brass paint chip with an ink underline (first word of `hl` if it is in the caption, else the first word). With a separate `caption`, `sub` stays as a 40 px line above it.

## Notes for the video build
- Per beat: chip n fills (label types on, value counts and locks), its hull number is stencilled in (mask wipe), the sight line draws on (dashoffset). Between beats the table may swing ≤ 20°; sight lines come from the analytic projection, so recompute them each frame.
- Camera = punctuation: one punch-in on the zone being paid off, hold ≥ 1.5 s, no zoom straight back out.
- Risk: 9 ship layers + 7 disc layers in preserve-3d; test seek renders for depth-sort flicker. If the title animates, re-clip the flipped copy every frame.

## References
- https://en.wikipedia.org/wiki/Dazzle_camouflage — not concealment: contrast breaks the outline to mislead heading, range and speed; schemes were trialled on models before painting.
- https://rmg.co.uk/collections/objects/rmgc-object-140363 — the side-elevation sheet carrying the scheme is the artefact (the elevation and title block at the bottom).
- https://arxiv.org/abs/1412.6572 — a tiny crafted perturbation flips a classifier to a wrong label with high confidence; https://arxiv.org/abs/1707.08945 — stickers on a real stop sign do it in the physical world.
