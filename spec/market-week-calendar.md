# Market Week Calendar (`market-week-calendar`)

**Metaphor:** a printed Indonesian wall calendar where every date carries a weekday (7-day cycle) and a pasaran (5-day cycle) → positional encoding: two cycles of different length give every position a unique code (7 × 5 = 35 pairs before it repeats), like the layered waves a model uses to tag each token's position.
**Series:** how-ai-works (positional / ordering topics; for non-positional stats the dates are decorative, so keep it to this series)
**Axes:** light · condensed · 2D · diagram

## Look
- **Palette:** `#F3EEE1` calendar paper · `#1C1C1C` print ink (numerals, binding strip, header rules) · `#C2352B` Sunday / holiday red (Minggu, month name, title holiday box, washes, pencil path; text on washes darkened to `#A3291F`) · `#2A4C9B` ballpoint blue (date ring, item tags, active caption word) · `#B9AE96` wall + grid rules
- **Fonts (Google Fonts):** Sofia Sans Extra Condensed 700/800 (title, numerals, values) / Source Serif 4 500-700 (italic pasaran, item labels, caption) / Sofia Sans Condensed 500-800 (strip kicker, weekday row, pairs, tags, +5, CATATAN, source)
- **Grid / layout:** sheet x 56-934, y 284-1660 hanging from a nail; content x 90-900. The calendar's own text places, no generic stack: series · ep + date printed reversed in white on the black binding strip (y 298-328, where the shop name goes); title = centred sponsor header between printed double rules (y 378-~594, fit 112→72 px, ≤ 3 lines; 62 px floor only in the last compaction mode); weekday row ~y 638; month grid 7 × 5-6 rows ~y 682-1148 (rows ≥ 88 px, ≥ 84 for 6-row months; numerals ≤ 64, 53 px at 5 rows; pasaran 30 px); month name + "7 hari × 5 pasaran = 35" printed in the empty leading/trailing cells (split across both when both exist; header row if < 3 empty cells); keterangan list ~y 1172-1420; ruled CATATAN box y ~1440-1578; source centred y 1592. Ballpoint on a string x 987-1038 (decor only, nothing readable at x > 900).
- **Signature elements:**
  1. Dual-label date cells: big numeral + italic pasaran; the pasaran of date #1 is washed red in every cell and a red dashed pencil path hops wash to wash in date order with a "+5" tick by each numeral it leaves (4 +5 → 9 +5 → 14 → 19 …): 5 drifting two columns left through 7, visible at phone size.
  2. Title highlight printed as a reversed red holiday box ("tanggal merah"); the blue ballpoint only marks the date: a hand-drawn ring (1.14 turns, clamped inside its cell) around date #1 and a double underline under the active caption word.
  3. Keterangan list (the holiday list under real Indonesian calendars): tag, date, stacked weekday/pasaran pair (a mini cell = the position code), label (40→30 px, then wraps; 18 px hard gap before the value), value. Month and pasaran are real (anchor 17 Aug 1945 = Jumat Legi; month from `D.date`).

## 2-second hook
- **Frame 0 shows:** the still (reached after the 6-frame settle, see Seam): October page hanging, ring on 14 RABU / WAGE, washes + dashed path + "+5" ticks printed; title = the question "Kata ke-36 dapat kode apa?" (hl "ke-36" in the red holiday box), so the thumbnail equals frame 0.
- **Motion (0-2 s):** a red pencil tip retraces the path wash to wash (4 → 9 → 14 → 19 → 24 → 29, 220 ms per hop, ease-in-out; each "+5" pulses as the tip passes) while the non-washed cells dip to 40% and come back, so the 5-day drift is the first read; item words then drop onto 15, 16, 17 one per beat (tags press in, keterangan rows build 100 ms apart, no bounce). Camera still.
- **Why it stops the scroll:** every Indonesian has seen Legi/Pahing on a kalender dinding; a question you can actually compute on the page makes viewers count the hops along.
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu

## Loop ending
- **Last 1 s:** CTA lands at ~85%; the curled corner lifts and the October sheet flips up over the binding: 35 days later is 18 Nov, again RABU / WAGE in the same row-3 Rabu cell, the ring lands there and the path redraws through 5 of the same 6 wash positions; in the last 6 frames the lifted sheet hangs curled over the binding.
- **Seam:** ending G Progres reset, cut mid-motion: frame 0 begins with the October sheet settling down from that same curled-over-binding pose (~6 frames of settle, ease-out), so the page motion continues across the cut while the ring, the washes and the Rabu cell stay put; no fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` written in the ruled CATATAN box at x 106-884, y ~1452-1568 (printed "CATATAN:" label 30 px on the first ruled line), Source Serif 4 500, 44→40 px on 58 px ruled lines, 1-2 lines (long lines show a karaoke window with "…"); upcoming words `#4F4A40`, active word ballpoint blue 700 with a double pen underline (D.hl if it is in the caption, else the first word). `sub` is printed only here.

## Notes for the video build
- Beats: one word per date on the word that names it (tag + keterangan row together); when the VO says "geser", replay the path hop by hop; the "35" in the legend locks on the word "35".
- Camera = punctuation: still by default; one punch-in on the ringed cell when its pair is spoken (hold ≥ 1.5 s, no zoom back out); the page flip/settle is the object moving, not the camera.
- Risk: do not hand-type pasaran, let the template compute them; keep item dates inside the month (template clamps); the pen never touches the title or text it does not mean.

## References
- https://en.wikipedia.org/wiki/Javanese_calendar — the 5-day pasaran runs alongside the 7-day week and the pair repeats every 35 days: printed as a dual-label cell, the diagonal drift is the whole idea.
- https://arxiv.org/abs/1706.03762 — sinusoidal positional encoding: several waves of different periods layered so every position gets a unique code (the metaphor, not a visual).
