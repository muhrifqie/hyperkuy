# Petrol Pump (`petrol-pump`)

**Metaphor:** a roadside fuel pump in red enamel with linked drum registers → the pump's own formula, TOTAL Rp = LITER × HARGA/LITER, is the AI bill: tokens are litres, price per 1 jt token is the price per litre, and the money register only rolls because the litre register rolls (not a quota counting down like Prepaid Meter, not a price comparison like Price Picks); a premium model is a pricier grade.
**Series:** ai-in-numbers (main) · ai-tools (model tiers / price comparison)
**Axes:** full-colour · condensed · 2.5D · data

## Look
- **Palette:** `#BF3329` enamel red (pump face, active caption word) · `#F4F1EA` cream (title lettering, drum wheels, insert cards, plates) · `#15171C` charcoal (meter bezel, crown, nozzle, ink) · `#F2C14E` grade yellow (hl decal, lamp, canopy stripe) · `#2E5AAC` calibration blue (date sticker, 3rd grade button)
- **Fonts (Google Fonts):** Big Shoulders Display 900/800 (title, crown sign, wheel digits, insert cards) / IBM Plex Sans Condensed 500-700 (caption, source) / IBM Plex Mono 600 (labels, units, prefixes)
- **Grid / layout:** canopy y 0-176 · pump face x 46-902 + 2.5D side to x 1012 · crown sign x 104-840, y 284-358 (series left, "NO. ep" plate right) · title centred x 100-860 from y 404, auto-fit 132→72 px, max ~4 lines · meter bezel x 86-866 from max(title+34, 680) to ~1336 · grade buttons + reset lever ~1358-1416 · caption plate bottom-anchored at y 1606 · nozzle, boot, hose at x 900-1080 (decoration only; key text never right of x 860).
- **Signature elements:**
  1. Linked drum registers — item 1 is the centred TOTAL register (wheel height ≤ 1.1× the fitted title size, so the title always stays the largest type; padded with muted leading zeros, "0002"), items 2..n are rows (label left, wheels right, unit printed on the glass). When items 1-3 really multiply (v1 = v2 × v3 × 10^3k) the glass prints "=" and "×" between them; otherwise no operator is printed, never a false equation. A word value is a printed cream insert card in the window, never one letter per wheel.
  2. Lit crown grade sign carrying the series and pump number; the title is centred decal lettering on the enamel, with D.hl as a die-cut yellow grade decal pasted at -1.6°.
  3. The blue calibration ("tera") sticker holding the date, the nozzle seated in its boot with the hose to the island, three grade buttons (yellow pressed = current tier) and a reset lever.

## 2-second hook
- **Frame 0 shows:** the full pump, nozzle seated in its boot, every wheel at 0 (the muted padding zeros never move), insert-card windows still empty, title on the face (≤ 7 words, e.g. "Satu jawaban AI = Rp 47").
- **Motion (0-2 s):** 0.0 s the nozzle lifts out of the boot with the trigger click (SFX). 0.2-1.4 s the LITER wheels roll upward as digit strips (rightmost fastest, odometer carries, power3.out) and the TOTAL rolls with them on the same progress; TOTAL locks at 1.4 s with one hard detent (no bounce), its lamp turns yellow, then "=" and "×" print onto the glass.
- **Why it stops the scroll:** every Indonesian knows the SPBU moment of watching rupiah run with the litres; seeing it run for one AI answer turns an abstract price into a felt one and lands on a surprising number.
- **Hook type (docs/bank-hook-ending.md):** #2 Angka mustahil

## Loop ending
- **Last 1.5 s:** after the CTA on the caption plate (~85%), the nozzle clunks back into the boot (0.3 s), the reset lever swings (0.3 s), every wheel rolls back down to 0 and the insert cards slide out (0.6 s, power2.inOut), hold 0.3 s; caption: "Mulai dari nol, ya…".
- **Seam:** ending G (progress reset) + J (beat): the last frame equals frame 0 (wheels at 0, nozzle seated, empty card windows) and the click of the next lift is the click that opens the video; the attendant's "mulai dari nol" is completed by the opening sentence.

## Caption / voice-over
- **Slot:** `data-slot="caption"` = cream instruction plate x 92-866, bottom at y 1606 (top ~1440), 46→40 px IBM Plex Sans Condensed 500, 1-2 balanced lines; active word = D.hl if it is in the caption (else first word), set 700 in cream on a red enamel step-number tab with a darker bottom edge. Longer captions show the window of words around the active word with ellipses.

## Notes for the video build
- Wheels = clipped 0-9 strips moved by translateY on the paused timeline (seek-safe). Gear the TOTAL to the LITER register (same progress value) — that link is the lesson. Pressing the blue grade button = premium model: the HARGA register re-rolls and the TOTAL follows.
- Camera = punctuation: one punch-in on the TOTAL window when it locks, one pull-back to the whole pump for the "× miliaran" moment; hold ≥ 1.5 s after each. Never roll a register the viewer is still reading.

## References
- https://en.wikipedia.org/wiki/Fuel_dispenser — two linked counters (volume × unit price = total) on one face: a ready-made cost-per-unit diagram.
- https://en.wikipedia.org/wiki/Odometer — drum wheels where the rightmost turns fastest and carries into the next: the motion grammar of the registers.
- https://www.awwwards.com/inspiration/number-counter-animation-shifta-by-elisava — a counting number as the hero motion, not decoration.
