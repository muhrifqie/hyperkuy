# Seat Map (`seat-map`)

**Metaphor:** a cinema booking app's seat map → the context window is a house with a fixed number of seats: every token takes room, and when the house is full the earliest arrivals are walked out through KELUAR, which is why AI forgets the start of a long chat.
**Series:** how-ai-works · ai-in-numbers (best with token counts; other numbers render as a sold-out house in proportional sections)
**Axes:** dark · grotesque · 2D · app-ui

## Look
- **Palette:** `#101218` auditorium dark · `#2A2F3A` aisle runner, timer pill · `#F2EEE6` the lit screen, labels, released-seat outlines · `#3D6FE0` occupied seats (token mode: opacity 0.5 → 1 oldest → newest; numbers mode: sections alternate 1 / 0.62) · `#E4572E` tooltip, toast, empty seat ring, KELUAR route, active caption word (title `hl` uses the deeper `#D2461F` for contrast on the screen)
- **Fonts (Google Fonts):** Schibsted Grotesk 800 (title) / 500-700 (caption, signs, toast, tooltip, legend) / IBM Plex Mono 500-600 (studio no., timer, row letters, values, LAYAR, KELUAR, scale)
- **Grid / layout:** margins x 90-990. App bar y 288-340 (‹ Studio {ep} • series, timer pill). Token mode: toast hangs off the timer pill (y 356-418, right-aligned). Screen = curved lit panel x 90-990 from y ≈ 434 (≈ 360 without toast): title centred inside (104→72 px, ≤ 3 lines), caption = its subtitle in the lower third. LAYAR + KELUAR sign under it. House bottom-anchored to y 1474, rows A-L, pitch 48 → 40: item signs right-aligned x 90-352, block bracket x 374, row letters x 394, seats 4 | aisle | 4 at x 432-894 (42 px chairs). Legend ≈ rows + 28, source/date y 1584. Nothing but the toast/screen goes past x 896, and only above y 900.
- **Signature elements:**
  1. Data-true house: each item's block height = its share of 12 rows by parsed value (largest remainder, min 1 row; equal split only when values don't parse or units differ). A 40.000-token PDF eats 8 rows, a 300-token message gets 1. The legend's scale is computed for this house ("1 token = 2 baris", "1 baris ≈ 3.500 token", "1 blok = 1 angka (tak berskala)").
  2. Booking UI as the story (token mode): toast from the timer "A1–A8 dilepas · konteks penuh", row A in released outlines with a dashed route to KELUAR, oldest block dimmed with a dashed bracket.
  3. The empty selected seat at the back (L6, orange ring) with its tooltip "L6 · token baru": the next token's seat. Numbers mode hides toast, release, route and tooltip.

## 2-second hook
- **Frame 0 shows:** the title projected on the lit screen, the toast under the timer, row A emptied, and the orange ring + tooltip on the empty seat L6 (≤ 7 words besides the title).
- **Motion (0-2 s):** the active subtitle word lifts off the screen as a small orange token, travels down the aisle and drops into L6 at 0.6 s (ease-out, no bounce): the ring fills orange. On the same beat the last blue seat in row B flips to an outline, the KELUAR route marches (dash offset) and the timer ticks 04:59 → 04:58. Camera still.
- **Why it stops the scroll:** a phone notification telling you your first seats were released is a familiar, slightly alarming UI moment, and the empty front row shows exactly where your first message went.
- **Hook type (docs/bank-hook-ending.md):** #8 Notifikasi relatable (the release toast; "kok AI-nya lupa obrolan tadi?")

## Loop ending
- **Last 1 s:** CTA lands at ~85 %; then the house slides forward one row pitch (0.6 s, ease-in-out): row A leaves up the KELUAR route, a fresh row enters at the back with the empty orange ring on L6. Seats, brackets, signs and leaders ride the slide; row letters stay printed on the floor, so the rows re-letter (B→A …).
- **Seam:** ending B + G (treadmill): the slide layer is the frame-0 house offset one row back, so the slide ends pixel-identical to frame 0: same blocks, same released row A, same empty ring and tooltip on L6, toast still hanging; the timer snaps back to 04:59 on the same beat.

## Caption / voice-over
- **Slot:** `data-slot="caption"` inside the screen's lower third, x 130-950 (widens to x 106-974 before it would wrap to 3 lines), 46→40 px Schibsted Grotesk 600, centred, never more than 2 lines: if 40 px still needs 3, it shows a karaoke window (the phrase holding the active word, ended on a phrase boundary). Spoken words `#101218`, upcoming `#5C606B`, active word = `#E4572E` block with `#101218` text (D.hl if in the caption, else the first word).

## Notes for the video build
- Beats: build the house back to front block by block on the word that names each item (60-90 ms per seat); its sign fades up when the block completes. Releases only at the front, arrivals only at the back.
- Camera = punctuation: one punch-in on row A as the first message leaves (hold ≥ 1.5 s); the closing slide is object motion, not camera.
- Items should share one context in order (messages, attachments, word pieces); alternatives (model A vs B) belong in numbers mode or another design.

## References
- https://seatmap.pro/features/ — seat states as colour tokens; holds expire and seats are released.
- https://m3.material.io/components/snackbar/overview — a brief notice of something the app just did, attached to an edge; here hung from the timer.
- https://en.wikipedia.org/wiki/Movie_theater — curved rows facing a screen, centre aisle, exit routes: plan-view conventions read at a glance.
