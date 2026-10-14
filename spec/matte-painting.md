# Matte Painting (`matte-painting`)

**Metaphor:** a glass-shot matte painting seen through the lens (a small real set behind clear glass, a vast vaulted hall painted on the glass above it) → outpainting / generative fill: the AI paints what is not there so it lines up with what is, convincing at the seam and invented beyond it.
**Series:** ai-tools
**Axes:** full-colour · serif · 2.5D · physical-object

## Look
- **Palette:** `#2A2724` charcoal (rig, note scrims, subtitle strip) · `#EDE6D8` cream (title, notes, marker loops) · `#6E8FAF` dusty blue (painted vault, DILUKIS chip) · `#C27C4A` copper (real checker floor, ASLI chip) · `#F4C15D` lamp yellow (seam marker, hl, active subtitle word, glare)
- **Fonts (Google Fonts):** Gloock (title, note values) / Work Sans 500–700 (camera report, note labels, chips, subtitle, meta; also the `= ± × ≈ % + −` signs inside Gloock text)
- **Grid / layout:** the frame is the camera's view. Rig band y 0–284 (pipe, hanging lamp). Pane top frame y 284–300, side edges at x 34–44 / 1036–1046; outside them the real flats stop at the cornice. Camera report strip taped to the frame at x 90, y 304–352. Title centred x 90–990 from y 384 (Gloock 92–112 px in 2 lines, else 72–104 px in 3), on the vault darkened under it. Lens at cornice height: the seam is one level line at y 1010; painting above, real set below (doorway ≈1030–1116, floor to y 1920). Notes pinned to fixed features in reading order: coffer (left, y≈718) · lunette (right, ≈835) · upper arcade (left, ≈950) · doorway (left, ≈1073) · floor tile (right, ≈1193); 3 items use lunette/arcade/doorway, 4 add the floor tile, 5 add the coffer. Seam legend chips right-aligned at x 890. Subtitle strip from ≈y 1440 (higher with a dek) to 1650; meta ends at y 1618.
- **Signature elements:**
  1. The seam: a lamp-yellow china-marker dash line along the painting's lower edge, with a dark sliver under it where the bumped glass slipped (painted pilasters jog 9 px off the real ones); "DILUKIS AI" above it, "ASLI" below, describing the picture, not the data.
  2. The painted hall: coffered barrel vault, fan-window lunette, upper arcade; warm where it meets the real wall, cool and invented higher up; dry-brush strokes show only where the lamp glare crosses the glass, and the glare also lights a streak through the hl word.
  3. China-marker notes on the glass: compact cream label + Gloock value on a thin dark scrim, a hand-drawn cream loop round the named feature, a short horizontal leader; no per-item chip unless `item.tag` is set ("asli" / "dilukis"), and then the note moves to a feature on the matching side of the seam.

## 2-second hook
- **Frame 0 shows:** the same locked-off framing as the cover minus glare, seam marker, notes and legend, with the painting in register: one seamless grand hall, the title already lettered on the glass (hl in lamp yellow), the subtitle strip, the camera report.
- **Motion (0–2 s):** still until 0.7 s; a hand bumps the glass: the whole painting slips ~8 px against the real set (0.12 s, sharp ease-out, then a damped 2-cycle settle), the dark sliver opens at the seam, the lamp's reflection sweeps in from the left across the centre of the pane and stops on the hl (0.6 s, power2.out), brush strokes flash up under it; at 1.3 s the marker dash line draws itself left to right along the seam (0.6 s).
- **Why it stops the scroll:** the viewer has already accepted the hall as real; a knock shows the top half is a picture on glass, starting with the very word in the title.
- **Hook type (docs/bank-hook-ending.md):** #9 Detail misterius (revealed by a physical tell, no camera zoom)

## Loop ending
- **Last 1 s:** after the CTA (~85%), a cloth wipes the notes, loops and legend off the glass right to left (0.5 s), the glass settles back into register so the sliver closes (0.2 s), and the reflection slides on to the right and out of the pane.
- **Seam:** camera locked for the whole video; t=0 and t=end are the identical framing (no lamp glare on the pane, painting in register, title and subtitle strip in place). The glare leaves right and re-enters from the left at 0.7 s. Ending B (Frame kembali persis) + E (Arah gerak menyambung). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` = burned-in film subtitle centred on x 495 (x 90–900, clear of the action buttons), bottom of the plate at ≈y 1474–1580, 40–46 px Work Sans 500 cream on the dark strip; active word lamp yellow 600; words still to come `#C4BBAB`; the last two words never split. It prints `caption || sub`; a separate sub gets its own 40 px dek line above it in the strip. Captions over ~75 characters wrap to 3 lines.

## Notes for the video build
- Per beat: a note is written on the glass on the word that names it (marker loop draws round the feature, then the leader, then label and value; numbers count and lock). Glare can pass again over the painted area as emphasis; never over the real set's notes.
- Camera: locked off the whole video (the tell is in the glass moving, not the camera). Pre-render the painting + brush strokes as one still layer; animate only the glass offset, glare, marker paths and HTML text.
- Risk: keep the glare peak ≤ 0.26 over the title so contrast holds; the bump must read as a knock, not a glitch (one jolt, damped, no RGB split).

## References
- https://en.wikipedia.org/wiki/Matte_painting — painted glass in front of the lens extends a small real set; the join hides along an architectural line and the painting stays static while the action is live.
- https://www.artofthetitle.com/title/panic-room/ — type accepted as part of the plate when it takes the plate's light and perspective (title lettered on the glass, glare crossing it).
