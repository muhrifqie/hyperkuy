# Unpaid Clicks (`unpaid-clicks`)

**Metaphor:** a "pilih semua kotak..." image-grid verification challenge on a phone → data labelling: every square you ticked taught an AI to see; training data is millions of small, unpaid human clicks.
**Series:** how-ai-works
**Axes:** light · grotesque · 2.5D · app-ui

## Look
- **Palette:** `#E6E3DB` dimmed page behind the modal · `#1B1F27` ink (photo shadows, flipped tiles, text) · `#2F6FE4` blue = the human (header, ticks, button, active word) · `#EF6A4E` coral = the AI (boxes, tags) · `#D9D4C8` warm grey (duotone photo ramp to ink). Card is plain white.
- **Fonts (Google Fonts):** Work Sans 700/800 (title, UI) / Work Sans 500–600 (caption, tags) / IBM Plex Mono 600 (kicker, values)
- **Grid / layout:** white challenge card x 90–990, y 300–1604. Blue instruction band y 314 → ~620–715: kicker (`☐ SERIES · EP` left, date right) + title 72–108 px, max 3 lines. 3×3 photo grid from band +10 to caption −18 (tiles ≈285 × 205–250). Items sit on the left/middle columns in reading order (3: r0c0 r1c1 r2c0 · 4: +r0c1 · 5: r0c0 r0c1 r1c0 r2c0 r2c1). The right column carries no text (TikTok buttons) and r1c2 is the tile caught mid-flip. Caption row y ~1376–1480; footer y 1506–1596 (refresh icon, `Sumber:` fine print, VERIFIKASI). Dimmed page skeleton (browser bar, form, the checkbox that started it) above and below.
- **Signature elements:**
  1. Ticked tile flipped to its back face: a dim crop, a coral bounding box with corner handles and a coral tag (label + value). This is "what the AI keeps" instead of the photo.
  2. One tile caught mid-flip in CSS 3D under a screen-recording touch dot: the next unpaid click.
  3. `hl` as a ticked white chip with a blue check inside the blue instruction band. The kicker opens with an empty checkbox.

## 2-second hook
- **Frame 0 shows:** the same card with every tile still a duotone street photo (motor, zebra cross, lampu merah), title in the band, and the touch dot resting on r0c0.
- **Motion (0–2 s):** the dot taps the item tiles 0.35 s apart (cursor press). Each tap pops a blue check, the tile flips 180° (0.45 s, power2.inOut) to its dark back face, the coral box draws itself (stroke-dashoffset) and the tag slides out of it. The title stays still (≤ 7 words on screen).
- **Why it stops the scroll:** everyone has solved this grid, and nobody has seen the other side of a tile: the familiar chore turns into an AI label record.
- **Hook type (docs/bank-hook-ending.md):** #7 Yang sebenarnya dilihat AI

## Loop ending
- **Last 1 s:** the CTA lands at about 85%. Then the refresh icon turns once, the flipped tiles flip back to photos in reverse reading order, the checks shrink away, the touch dot glides back to r0c0 and the caption resets to its first word.
- **Seam:** the last frame matches frame 0 exactly: an untouched grid with the dot in place, ready for the first tap (ending F, kursor kembali ke kotak kosong). The closing "tap" SFX is the opening tap (J).

## Caption / voice-over
- **Slot:** `data-slot="caption"` = the challenge's audio-transcript row beside the headphone button, x 196–890, y ≈1376–1480, Work Sans 500, 46→40 px, 1–2 lines (longer lines show a 2-line chunk with "…"). Karaoke: spoken words ink, upcoming words grey `#5E636B`, active word (`hl` if present, else the first word) is white on a blue pill.

## Notes for the video build
- One beat per item: the dot glides, taps, the tile flips, the box draws, then the tag. The voice-over word that names the item triggers the tap. Never flip all tiles at once, because the click rhythm is the point.
- Camera stays still. Use one punch-in per scene, onto the tag being read. Use one pull-back near the end to reveal the dimmed page and its checkbox (the scale of "every sign-up"). Hold ≥ 1.5 s after each move.
- Keep it generic: no real captcha brand, logo or wording. The photos stay drawn (duotone + fine halftone) and never use stock images.

## References
- https://en.wikipedia.org/wiki/ReCAPTCHA — image-grid challenges whose human answers also served as labelled data; the UI itself is the metaphor.
- https://cocodataset.org/#explore — an image is stored as boxes + category labels; the back face shows that record, not the picture.
