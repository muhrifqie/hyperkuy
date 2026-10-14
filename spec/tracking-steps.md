# Tracking Steps (`tracking-steps`)

**Metaphor:** a courier tracking screen where the parcel is your chat → where a prompt actually goes after you hit send (server, log, review, retention), told as a delivery with numbered checkpoints and an unknown final destination. Best for journey topics (data flow, agent steps, retention); not for token-count or price topics.
**Series:** ai-news · ai-tools
**Axes:** pastel · grotesque · 2D · app-ui

## Look
- **Palette:** `#F6E7DA` peach map ground · `#22201C` ink: title, past checkpoints, barcode · `#CC4620` signal orange = current position: hl, parcel, newest checkpoint, status pill, active caption word · `#CFC3B4` warm grey: perforation, dotted legs, grab handle · `#FFF8F1` paper: card, pills, map streets (muted text `#6B6259` and map blocks `#EFDCCB` are tints)
- **Fonts (Google Fonts):** Familjen Grotesk 700/600/500 (title, screen name, checkpoint labels, ISI, source, caption) / Azeret Mono 700/500 (status pill, index column, values, resi, field labels, series chip, date)
- **Grid / layout:** the whole frame is the app. Pale street map full-bleed (text never sits on it). App bar y 300-364: back button, "Lacak kiriman" pill, series · #ep chip right-aligned to x 990. One paper card x 90-990, y 384-1640 with a grab handle, inner x 134-946: status pill + date y 426-476 · title y 500 → ≤ 752 (fit 108→64 px, ≤ 252 tall) · route strip (116 px) right under it · stepper fills down to the perforation · tear-off stub laid out bottom-up: ISI + barcode/resi, SUMBER, "CATATAN KURIR", caption ending at y 1612. In y 900-1500 all text ends at x ≤ 890.
- **Signature elements:**
  1. Route strip: your phone at stop 01, one stop per item, the travelled leg solid orange, the parcel (112 px taped box with a speech-bubble shipping sticker = your chat, orange halo) on the newest stop, placed under the orange hl word when it can be, then a dashed leg to a "?" destination.
  2. Checkpoint stepper: index column 01-05 (or `items[].time` when the data carries real times), dotted line, ink dots for past stops, orange dot + halo and the value as an orange status tag on the newest, a "-- · Tujuan akhir: ?" tail when the rows stay roomy (dropped for 5 items). One shared label size for every row (46→30 px), always inline.
  3. Tear-off waybill stub: dashed perforation with notches cut from the card edges, ISI KIRIMAN "1 pesan chat" in ink 700 38 px (`D.isi` overrides), a barcode generated from the resi `CHAT-<ddmm>-<ep>` (e.g. `CHAT-1410-01`), the SUMBER field, and the caption printed as the courier's note.

## 2-second hook
- **Frame 0 shows:** the cover composition with only checkpoint 01 printed: rows 02-0n are empty grey slots with their numbers visible, the parcel sits beside the phone at stop 01, the "?" pin waits at the end, the title is the status headline.
- **Motion (0-2 s):** 0.2 s the status pill pulses once (scan beep); 0.5-1.1 s the parcel slides one stop (power2.inOut) while the orange leg draws behind it; 1.0-1.6 s checkpoint 02 prints into its slot (mask lift, value types on, dot drops 40 px in 260 ms). Camera still.
- **Why it stops the scroll:** everyone checks a resi; this parcel is a chat bubble, and the numbered empty slots ask "where does it go next?".
- **Hook type (docs/bank-hook-ending.md):** #11 Daftar bernomor terlihat (numbered empty slots)

## Loop ending
- **Last 1 s:** the newest checkpoint prints, the parcel reaches its stop next to "?" and holds one beat; then the rows fold back into empty slots, newest first (60 ms stagger), the orange leg retracts and the parcel slides back to the phone.
- **Seam:** the final frame is frame 0 (only checkpoint 01, parcel at the phone), and the closing scan beep is the opening beep. Ending G (progress reset) + J (SFX match), the 11 + G pair from the bank; no fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` in the stub under "CATATAN KURIR", x 130-950, bottom at y 1612 (2 lines ≈ y 1512-1612), Familjen Grotesk 500 44→40 px, max 2 lines (a longer line wraps to 3 inside x ≤ 890). Karaoke: one active word as an orange status-tag chip with paper bold text: the first caption word touching `hl`, else the first word.

## Notes for the video build
- Each item = one beat: on the word that names it the parcel advances one stop and that checkpoint prints in its slot; count & lock only on numeric values. Camera: one punch-in on the newest checkpoint at the payoff, then hold ≥ 1.5 s. CTA at 80-90%, before the reset.
- Retention and review practices differ per provider: keep SUMBER + date on screen and label illustrative values. Self-host both fonts for the render.

## References
- https://dribbble.com/shots/15360017-Package-Tracker-Screen — pair "where is it now" with a dated history list; one glance answers the question.
- https://m3.material.io/components/bottom-sheets/overview — the map stays visible behind a sheet that carries the status and the details.
- https://www.nngroup.com/articles/progress-indicators/ — show progress and the remaining steps at an honest pace, hence the empty slots and the "?" destination.
- https://en.wikipedia.org/wiki/Air_waybill — a waybill is a structured label (number, barcode, contents, shipper), so meta lives in fields, not footnotes.
