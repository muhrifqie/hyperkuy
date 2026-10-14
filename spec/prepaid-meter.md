# Prepaid Meter (`prepaid-meter`)

**Metaphor:** the prepaid electricity meter ("token listrik") on an Indonesian terrace wall → AI usage is a prepaid quota that runs out: every prompt and long document drains units, and the low-credit beep is the limit you hit (quota running out, not price per unit: that is Petrol Pump).
**Series:** ai-in-numbers · ai-tools
**Axes:** pastel · mono · 2.5D · app-ui

## Look
- **Palette:** `#CFC6B6` rough cement plaster (tile strip is a lighter tint) · `#F2F1EC` cream casing, keys, slip, sticker · `#A7C3E0` blue LCD backlight (+ active caption chip) · `#18202A` ink: LCD text, 7-segment, reverse video, bezel, Enter · `#D3372C` alarm red: LED, MCB ON tab
- **Fonts (Google Fonts):** Doto 900 (title = the LCD message, dot-matrix) / Barlow Semi Condensed 500/700 (caption sticker) / Share Tech Mono (readings, keys, nameplate, plate, slip); 7-segment digits are SVG
- **Grid / layout:** tight crop: casing x 44–1036, y 190–1660; only plaster (top), tile strip (y 1560+) and cables show. Main column x 84–886, right rail x 904–996 (gauge, MCB, seal: no text in the action-button band). Nameplate band y 300–356 (series · ep left, ALARM LED right) · LCD from y 370: title 72–110 px, 2–4 lines, x 120–960 → rule → 7-segment row → readings `01#`… · keypad 2 × 6 (74→68 px keys, one row of 12 if needed) · rating plate (SUMBER + TGL) · caption sticker bottom at y 1612. Budget order: title shrinks, keypad tightens, rows stay ≥ 36 px; a row that does not fit goes two-line (label / leader + value), never ellipsized.
- **Signature elements:**
  1. Dot-matrix LCD message window carrying the title; `hl` in reverse video (ink block, backlit letters), the way an LCD highlights.
  2. Big 7-segment readout with ghost segments: the reading being spoken (`0n#`), or "▲ SISA" + the quota value when credit is low; 10-segment vertical credit gauge beside it.
  3. Real install: black twisted service cable into the top gland, MCB window with a sealed wire, 20-digit token slip taped on top (code hashed from the title, so every episode differs).

## 2-second hook
- **Frame 0 shows:** quota preset (`D.level` ≤ 2, or a sisa/kuota/habis/saldo last item): LED lit, gauge 2/10, "▲ SISA 1.760" on the 7-segment, quota row inverted, LCD message "Token AI kamu juga bisa habis." (6 words). Other topics open calm: LED off, gauge 6/10, the 7-segment shows the reading being spoken (row matching `hl`, else the last numeric one) and that row is inverted.
- **Motion (0–2 s):** 0.1 s = beep 2 of the double beep (beep 1 closed the previous loop): 7-segment digits + LED blink off/on (80 ms) with a backlight dip; 0.6 / 1.1 / 1.6 s silent low-credit blinks of digits + LED; 1.2 s the inverted row flashes once. Calm preset: the 7-segment rolls up to its value (0.6 s, ease-out). Camera still.
- **Why it stops the scroll:** every Indonesian household knows a blinking low number + beep means "beli token sekarang"; reading SISA on an AI quota is instantly relatable, even with the sound off.
- **Hook type (docs/bank-hook-ending.md):** #8 Notifikasi relatable (calm topics: #2 Angka mustahil on the 7-segment).

## Loop ending
- **Last 1 s:** the top-up is the CTA beat (~85–93%): the slip's 20 digits are keyed, they type onto the LCD, Enter, gauge refills to 10/10, LED off. Last 0.8 s only: gauge drains to the frame-0 level, the 7-segment rolls back to the frame-0 number, the trip row inverts, LED lights, beep 1 fires on the final frame.
- **Seam:** final frame = frame 0, and one double beep straddles the cut (beep 1 on the last frame, beep 2 at 0.1 s) → ending **G** (progres reset) + **J** (same SFX). Calm preset: no beep; the Enter-key click on the last frame meets the 7-segment settle at 0.1 s. No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` on the printed sticker at the bottom of the casing, x 108–972, bottom y 1612 (~y 1498–1612), Barlow Semi Condensed 500, 46→40 px, 1–2 lines. Active word = `hl` if it is in the line, else the first word: 700 ink on an LCD-blue chip with a 3 px ink outline; spoken words ink, upcoming `#4A505A`.

## Notes for the video build
- One item per beat: its `0n#` is pressed on the keypad, the reading types onto the LCD, the 7-segment rolls to its value, the gauge loses a segment; the row being spoken is the inverted one. Beeps only at hook, trip and loop.
- Camera = punctuation: one punch-in on the 7-segment at the trip reading, hold ≥ 1.5 s, never straight back out. Keyed digits must match the slip; LED glow stays soft; illustrative values say so on the plate.

## References
- https://listrikindonesia.com/detail/11822/sering-mengganggu-berikut-cara-mematikan-suara-token-listrik — prepaid meters beep when credit runs low (default ~20 kWh): the alarm is the hook sound.
- https://en.wikipedia.org/wiki/Seven-segment_display — unlit segments stay faintly visible; digits are built from 7 bars + a decimal point.
- https://en.wikipedia.org/wiki/Hitachi_HD44780_LCD_controller — 5 × 8 dot-matrix character cells: the grammar of the title window.
