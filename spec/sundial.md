# Sundial (`sundial`)

**Metaphor:** a stone garden sundial whose bronze gnomon's shadow is frozen on one engraved mark while the real sun has moved on → knowledge cutoff: the model still reads the shadow of the day its training data stopped.
**Series:** ai-news · how-ai-works
**Axes:** pastel · serif · 3D · physical-object

## Look
- **Palette:** `#E9DCCB` sand ground · `#E8E4D8` limestone dial · `#8C6A3E` bronze (gnomon, plaque, values) · `#2C3B5A` shadow navy (ink, frozen shadow, active word) · `#E5B8A0` pale real sun + today's ghost shadow
- **Fonts (Google Fonts):** Marcellus (title, inscriptions, caption motto) / IBM Plex Mono 500–600 (values, kicker, plaque)
- **Grid / layout:** 90 px margins. Kicker y 300; title y 352 → ≤ 632 (122→72 px). Dial in a real perspective projection (50°, radius wider than the frame, rim cropped left/right); its centre follows the title (y 1010–1085) so the far rim sits just under it. Far half (y ≈ 650–1120) = the calendar fan: items engraved left → over the top → right, packed by a deterministic greedy that hugs the rim, never under the gnomon or across another hour line. Near half: caption motto (y ≈ 1090–1300), bronze plaque with date + source below it (≤ 1500). Column, plinth and ground rings below 1500 are decoration.
- **Signature elements:**
  1. The frozen shadow: a navy wedge from the bronze gnomon onto mark 1, whose inscription is a navy plaque (the reading that never moves).
  2. The pale sun top-left + a dashed peach "ghost" wedge onto the last mark: where today's sun should put the shadow.
  3. A dotted rim arc with an arrowhead from the frozen mark to the last mark, ending in a pale-sun dot: the time the model never saw.

## 2-second hook
- **Frame 0 shows:** the whole dial, the navy shadow already lying on mark 1 ("Data berhenti · Jan 2025") while the sun sits on the opposite side: the shadow points the wrong way. Title ≤ 7 words, e.g. "Jam AI berhenti di sini."
- **Motion (0–2 s):** the sun glides along a short arc to the right (0–0.8 s, ease-in-out); the shadow does not follow: it shivers 2° and snaps back (0.9–1.2 s, power3.out); the plaque date "per 14 Okt 2026" count-locks in (1.2–1.8 s).
- **Why it stops the scroll:** a sundial that ignores the sun is visibly wrong, so the eye checks it twice.
- **Hook type (docs/bank-hook-ending.md):** #9 Detail misterius (with a visibly wrong reading, cf. #1).

## Loop ending
- **Last 1 s:** the ghost wedge fills peach and the shadow finally sweeps clockwise round the dial towards "today", then snaps back to mark 1 on the last beat.
- **Seam:** the snap lands exactly on the frame-0 composition (shadow on mark 1, sun top-left): ending B (frame returns exactly) + H (twist: even after the explanation it still reads the old date). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` = the dial's engraved motto, x 160–900 (90–900 if needed), top ≈ dial centre + 78 px (≥ 8 px below the gnomon), Marcellus 48→40 px, max 2 lines, last two words tied (no widow); active word (D.hl if in the caption, else the first word) = navy pill with cream text, the same navy as the frozen shadow.

## Notes for the video build
- Beats: each inscription engraves in reading order (hour line draw-in, then mask lift, 90 ms stagger); the dotted arc draws clockwise; the plaque stamps on the source line. Camera still; one punch-in per scene at most, spent on the frozen shadow meeting mark 1. Gnomon and dial never wobble.
- Risk: 5 items with long two-word labels pack tightly near the rim; keep labels ≤ 16 characters.

## References
- https://en.wikipedia.org/wiki/Sundial — one pointer, one reading: time read from a single shadow on engraved lines.
- https://en.wikipedia.org/wiki/Knowledge_cutoff — fact base for the metaphor.
- https://www.awwwards.com/sites/messenger — one small self-contained world with soft directional light and a two-tone pastel palette.
