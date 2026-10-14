# Full Benches (`full-benches`)

**Metaphor:** a flat side-elevation cutaway of an angkot "ngetem" at a halte, waiting for its benches to fill → batching on AI servers: the server holds requests a few milliseconds so one GPU trip carries many (full benches = cheaper per passenger, waiting = latency; your request rides with strangers' requests).
**Series:** how-ai-works · ai-in-numbers
**Axes:** pastel · condensed · 2D · diagram

## Look
- **Palette:** `#F0E7D8` kerb-dust paper · `#8EB6D4` angkot body, blue chips · `#BE3B2A` route board, red passenger, kerb, caption sticker · `#FFD45C` second route colour (title hl, seat dots, livery) · `#1D1F24` ink (benches/heads in vinyl brown `#4B2E2A`)
- **Fonts (Google Fonts):** Barlow Condensed 800 (sign-written title, route code, NGETEM strip, HALTE, KOSONG) / Plus Jakarta Sans 600-800 (chip labels, caption, source) / JetBrains Mono 800 (values, counter; fallback tabular Plus Jakarta, then Barlow Condensed)
- **Grid / layout:** the angkot carries all the type. Route board x 70-1010, y 300-640: rim strip y 300-350 = kicker as route line ("TRAYEK 01 · CARA KERJA AI" left, date right); route-code box x 98-198; title x 224-982, fit 112→72 px caps, max 248 px tall (2-3 lines, 4 for 60 chars). Brackets + roof rack y 632-666. Body y 664-1228: NGETEM strip y 674-718; cutaway y 732-1208, far bench chips sit at y 954, near bench at y 1182; cab x 812-1010. Wheels to y 1310, kerb y 1316-1342, pavement to y 1700. Halte tab y 1350, plate x 80-912 from y 1388 (≈1590 at 2 caption lines, ≤1620 at 3).
- **Signature elements:**
  1. Papan trayek on the roof: cream sign-written caps with ink keyline + drop shade on the red board, hl painted in the yellow second route colour, route code box at the left end, route line on the top rim.
  2. Cutaway benches: hatched section edge, far + near bench; each item a passenger (head + chip), empty seats dashed and stencilled KOSONG; NGETEM ●●●○○○ 3/6 strip counts seats.
  3. Halte enamel plate on two posts at the kerb: the caption, active word on a red route-colour sticker; source under a dashed rule.

## 2-second hook
- **Frame 0 shows:** the angkot at the halte, board title "KENAPA AI KADANG NUNGGU DULU?", strip NGETEM ●●●○○○ 3/6, first 3 items on the far bench, 3 dashed KOSONG seats on the near bench, driver's arm up.
- **Motion (0-2 s):** the KOSONG outlines march their dashes left→right (3 × 120 ms) and the empty dots blink once; the driver beckons twice (call marks pulse); at ~1.4 s the next chip hops aboard on a shallow arc and the counter ticks 3→4 (count & lock). Camera still.
- **Why it stops the scroll:** every Indonesian viewer has sat in a half-empty angkot that won't leave; three empty seats beg to be filled.
- **Hook type (docs/bank-hook-ending.md):** #11 Daftar bernomor terlihat (visible empty slots: ●●●○○○ 3/6 + dashed seats)

## Loop ending
- **Last 1.2 s:** (CTA + last boarder at ~85%: an unlabelled "kamu" chip, the viewer's request, takes the final seat; strip letters flip NGETEM→PENUH 6/6, dots lock.) Then the angkot pulls out right (0.5 s, ease-in), the next angkot enters from the left with the same board and the same first 3 chips (0.5 s, ease-out) and brakes on the frame-0 mark (0.2 s).
- **Seam:** ending G (progress reset, 6/6 → 3/6) carried by E (exits right, re-enters left): the last frame is frame 0, strip reading NGETEM 3/6.

## Caption / voice-over
- **Slot:** `data-slot="caption"` on the halte plate, x 109-883, y 1409-1518 (2 lines; a 3rd line at 40 px for ~90 chars ends ≈1551), 46→40 px Plus Jakarta Sans 700; spoken words ink, upcoming `#6E5F57`; active word = red `#BE3B2A` sticker, cream text, ink border, -1.5° (D.hl if in the caption, else the first word).

## Notes for the video build
- Beats: each item boards on the word naming it (head lands first, counter locks); seats beyond the items fill with blank "request lain" chips (others' requests) so 6/6 always has data; red chip = the item D.hl names, else the latest boarder.
- No camera moves: PENUH is content (letter flip + dot lock), the departure is the object moving. Nothing bounces; only heads settle.
- Values never go below 30 px: wrap at a space ("Rp" / "1.500.000"), then tabular sans, then condensed; a too-tall chip drops its head instead of overlapping.

## References
- https://en.wikipedia.org/wiki/Angkot — fixed-route shared minibus that waits at stops until it fills: the waiting rule is the metaphor.
- https://en.wikipedia.org/wiki/Cutaway_drawing — remove the near wall and hatch the cut so the interior reads at a glance.
- https://fonts.google.com/specimen/Barlow+Condensed — condensed grotesk modelled on road and plate lettering: sign-painted route board without copying any operator's sign.
