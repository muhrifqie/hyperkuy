# Shophouse Section (`shophouse-section`)

**Metaphor:** an architect's section of a narrow 4-storey ruko → a transformer is a stack of layers: your sentence enters the street-level shop, climbs the stair floor by floor (each floor reworks it) and the answer leaves from the roof.
**Series:** how-ai-works
**Axes:** light · serif · 2.5D · diagram

## Look
- **Palette:** `#F3EFE6` drafting paper · `#1E2430` ink (line work, poché, text) · `#AD4420` brick (hl, answer parcel, drainpipe return) · `#2F5DA8` blue (sentence parcel, walking line, active caption word) · `#D9D2C3` room tones (floors, walls beyond)
- **Fonts (Google Fonts):** Newsreader (title 118→72 px, room-tag names, caption) / IBM Plex Mono (kicker, level marks, values, meta)
- **Grid / layout:** margins 90. Kicker y 290–346 (ep bubble + series, date right) · title y 372–≤622 · section y ≈620–1446: roof objects from roof slab −118, n floors stacked to the ground line y 1412 (ground floor 1.16× taller), earth band to 1446. Building x 234–886, stair x 664–866, level marks x 90–206, drainpipe x 203–235, dimension string x 924–948 (decoration only) · caption y ≈1468–1582 · source y 1588–1618.
- **Signature elements:**
  1. Poché section cut (45° hatch, one merged outline) with rooms receding to one vanishing point at street-eye level — a dollhouse cutaway; each item = one floor: room tag (name / rule / value) on the back wall + level mark `LT n` with elevation in the margin.
  2. The loop drawn in one still: blue parcel at the half-open shop shutter → blue walking line through the shop and up the dog-leg stair → roof hatch → brick answer parcel → dashed brick route over the parapet and down the drainpipe back to the shutter.
  3. `hl` set in brick italic with an architect's dimension line under it (extension ticks + 45° slashes); rooftop water tank (toren) and open hatch lid as the ruko's silhouette.

## 2-second hook
- **Frame 0 shows:** the cut-open ruko, shutter half down, blue parcel waiting at it, stair empty (no blue line yet), roof parcel absent; on screen "Kalimatmu naik 96 lantai."
- **Motion (0–2 s):** shutter rolls up (0–0.3 s, ease-out); the blue walking line draws itself from the parcel through the shop and up the flights (stroke-dashoffset, 0.3–1.6 s) while the parcel rides it to LT 2; the margin level mark counts `LT 1 → 96` (count & lock at 1.6 s).
- **Why it stops the scroll:** dollhouse-cutaway curiosity (everyone knows a ruko) meets an impossible number for a single sentence.
- **Hook type (docs/bank-hook-ending.md):** #2 Angka mustahil

## Loop ending
- **Last 1 s:** the brick answer parcel slides off the roof into the hopper, drops down the drainpipe (chevrons run downward), shoots out of the shoe and lands at the shutter, turning blue on landing; the blue line un-draws back down the stair and the shutter drops to half.
- **Seam:** the landing pose = frame 0 exactly (parcel, shutter, empty stair); the downward drop hands straight into frame 0's waiting parcel, landing thunk = opening beat. Ending types D (benda dibongkar balik) + B (frame kembali persis). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–900, y ≈1468–1582 (under the ground line, above the source), Newsreader 500, 46→40 px, 1–2 lines, `sub` shown only here; karaoke: active word = solid blue `#2F5DA8` block with paper text (the sentence's colour), other words ink.

## Notes for the video build
- One beat per floor: the line draws through that floor's two flights, the parcel rides it, the room tag's rule draws then name/value mask-lift in; level mark ticks. Payoff: parcel exits the hatch and turns brick (match cut blue → brick).
- Camera = punctuation: still by default; max one punch-in per scene to the floor being spoken, one pull-back to the full section at the payoff; never in-and-straight-out. "96" is narration/overlay, not a data field; keep labels ≤ 22 chars (5 floors shrink tags to ~40 px).

## References
- https://en.wikipedia.org/wiki/Shophouse — narrow, deep vernacular type with one function per floor stacked vertically and an arcade at street level: a ready-made layer diagram Indonesians recognise.
- https://en.wikipedia.org/wiki/Architectural_drawing — section conventions: cut elements heavy and poché'd, things beyond in lighter line, level marks and dimension strings as the drawing's own typography.
- https://www.awwwards.com/sites/mam-com-vietnamese-feast — a culturally specific everyday object used as the whole interface instead of generic UI.
