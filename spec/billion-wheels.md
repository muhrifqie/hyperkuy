# Billion Wheels (`billion-wheels`)

**Metaphor:** a giant nickel combination lock with one knurled number wheel per item, the front lock in an endless row of identical locks → parameters: each wheel is one adjustable number, a 7B model is 7 billion wheels, and training turns all of them until the lock opens on the right answer.
**Series:** ai-in-numbers (also fits how-ai-works)
**Axes:** dark · condensed · 3D · physical-object

## Look
- **Palette:** `#0E0F11` night, haze and black lacquer · `#B2B6BA` polished nickel (nameplate collar, wheels) · `#9C8152` aged matte brass, accent only (shackle, rings, letter wheels, rivets, flat caption chip) · `#EAE0C8` cream engraving on the lacquer plate · `#3F6CC2` blue enamel index arrow
- **Fonts (Google Fonts):** Antonio 700 (engraved title, letter wheels) / Barlow Condensed 500–600 (wheel labels, caption, small print) / Azeret Mono 600–700 (maker's mark, wheel values)
- **Grid / layout:** every word sits on the object; lock axis x≈548, level camera just under the collar (verticals stay vertical, the plate is a true rectangle). Shackle y≈150–300 (decor) · nameplate collar y≈300–650: maker's mark at y ≥ 306, then the title centred in 628 px, fitted 100→64 px (2–3 lines; 55+ characters give 4 lines at 64 px) · wheel stack down to y≈1390; wheel height is solved so the shackle tops out near y 116 and the collar text never rises above y 306 · reading cells x≈320–780 between the rails · riveted lacquer plate from y≈1410, bottom anchored at y 1636: caption + small print x 100–890 · the row of copies converges just off the left edge at eye height, so nothing sits under the right-side action buttons.
- **Signature elements:**
  1. The combination: the hl is dialled in on aged-brass letter wheels set into a slot in the nameplate, one wheel per character, with the alphabet neighbours ghosted above and below. The rest of the title is engraved maker's lettering (dark-filled condensed caps, 1 px lower highlight) under a stamped mark "SERI <series> · NO. <ep>" taken from D.
  2. Item wheels: each item is one knurled nickel wheel, label + value in a reading window framed by two raised dark-steel rails that run over the whole stack, spare digits curling round the sides (small, quiet). A small blue enamel arrow on the left rail marks the wheel being turned: the item holding hl, else the item holding hl's leading number, else the last. Its side digits sit half a click off with a smear.
  3. The endless row: identical locks on identical plinths recede off the left edge; far copies fade into the haze by opacity (no dark wedge). The lacquer plate carries only D text (caption, source, date), no computed claims.

## 2-second hook
- **Frame 0 shows:** the lock already filling the frame, every reading window blurred mid-spin, the letter wheels in the nameplate slot mid-roll, the row behind.
- **Motion (0–2 s):** 0–0.6 s all number wheels spin down and land top to bottom on their values (ease-out, 80 ms stagger, one click per landing); 0.6–1.2 s the hl letter wheels dial in left to right; at 1.2 s the blue arrow snaps to the turned wheel. Content moves, the camera stays still.
- **Why it stops the scroll:** a giant tactile lock whose numbers are still spinning; the eye waits for them to land.
- **Hook type (docs/bank-hook-ending.md):** #9 Detail misterius (default, works for any topic). For ai-in-numbers topics whose items hold a big number, use #2 Angka mustahil instead: the turned wheel lands last, on that value from D (e.g. "miliaran"); never an invented number.

## Loop ending
- **Last 1 s:** the one big camera move of the video: a fly-past forward along the row diagonal toward the vanishing point, the hero sliding out on the right, ending on the next copy framed exactly like frame 0. That copy must be rendered with its cells and title, and its wheels start spinning as the camera arrives.
- **Seam:** the landing copy with wheels mid-spin is frame 0 (B + E); the click on the loop point is frame 0's first landing click (J).

## Caption / voice-over
- **Slot:** `data-slot="caption"` on the lacquer plate, x 100–890, plate top + 24 (≈ y 1432–1545), 1–2 lines, Barlow Condensed 600, 46→40 px, cream engraving; karaoke: spoken `#EAE0C8`, upcoming `#A39982`, active word (hl if it is in the caption, else the first word) on a flat aged-brass chip `#B39058` with dark text.

## Notes for the video build
- Per beat: one wheel clicks to its value as the voice names it (digit ring turns ~36°, ease-out 0.35 s) and the blue arrow steps to it. Re-project per frame; the wheel angle offsets and the camera position are the only inputs.
- The "N roda = 10^N kombinasi" line is not part of the template. Show it only in the parameters beat of a video about parameters, as a stamped strip on the plate, with a source.
- Camera still except the closing fly-past (at most one punch-in elsewhere). Risk: titles over ~50 characters make a 4-line nameplate and shorter wheels.

## References
- https://home.howstuffworks.com/combination-lock.htm — wheel pack: one wheel per number of the combination, read against a fixed index.
- https://mathcentral.uregina.ca/QandQ/topics/combinations%20lock — positions to the power of wheels (used only in the parameters beat).
