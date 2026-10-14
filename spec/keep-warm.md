# Keep Warm (`keep-warm`)

**Metaphor:** a white Indonesian "magic com" rice cooker switching from MASAK to HANGAT → prompt caching: a long prompt that was already "cooked" is kept warm, so the next request reuses it instead of cooking from raw (faster, far cheaper), until the warm timer runs out.
**Series:** ai-tools · ai-in-numbers
**Axes:** light · condensed · 3D · physical-object

## Look
- **Palette:** `#E8E1D3` tiled wall and counter · `#FFFFFF` cooker body, domed lid, panel face, hang-tag · `#2D3340` ink: title decal, LCD segments, printed labels · `#E64B2E` MASAK lamp, hang-tag stripe (label printed darker, `#B12E18`, for 4.5:1) · `#F2A33A` HANGAT lamp, LCD backlight, `hl` sticker, karaoke chip
- **Fonts (Google Fonts):** Antonio 700/600 (title decal, model line, key and lamp labels, units) / IBM Plex Sans Condensed 500 (caption, rating print) / IBM Plex Mono 600 (LCD label)
- **Grid / layout:** everything centred on x 540. Handle arc top y ~190 and steam up to y ~70 (decoration only). Domed lid y 264-474 (rim centre y 394, dome rises 72 px above it). Pot-bellied body ~860 px wide (x ~110-970), foot ring at y ~1346-1372. On the body: model line y 492-522, title decal y 536-748 (780 px wide, fit 132→60 px, ≤ 212 px tall, vertically centred), panel x 170-910, y 768-1174 (grows to 1234 when key names or tags wrap), rating print just below it. Hang-tag on the counter x 84-1000, bottom fixed at y 1615. All text in the y 900-1500 band stays at x ≤ 890 (measured max 869).
- **Signature elements:**
  1. The title is the cooker's own printed feature decal: Antonio caps in ink under a "— SERIES · #EP —" model line, with `hl` as an amber die-cut retail sticker slapped across it (-2°, tilting less when long so it never covers the line above).
  2. White/silver printed control panel: ONE amber-backlit LCD for the hero item (the one matching `hl`, else the first), ink seven-segment digits with faint ghost segments, a pot/steam LCD icon, right-aligned like a real readout and capped at 0.8 × the title size; beside it MASAK (red, unlit) and HANGAT (amber, lit, warm-timer ring) lamps over their keys. Below, the menu-key bank: one round rubber key per other item, a fixed-size pale-amber LCD tag above (value) and the name printed under in grey ink.
  3. The cooker as a 3D object: domed lid with vent and two steam wisps, arched carry handle on side bosses, bulged body with foot ring and cast shadow, power cord across the counter with the paper hang-tag tied to it.

## 2-second hook
- **Frame 0 shows:** the full cooker exactly as in the cover, in the cook state: MASAK lit red, HANGAT dark, hero LCD labelled `JAWABAN 1` reading `00:12`; the decal reads "Kenapa jawaban kedua lebih cepat?"
- **Motion (0-2 s):** at 0.5 s the HANGAT key presses (5 px, 120 ms, power2.out, click SFX); on the click the LCD label flips to `JAWABAN 2` and the digits SNAP to `00:01` in one frame (no count-through), MASAK goes dark, HANGAT lights and its ring draws in 400 ms. Steam keeps its slow rise; the camera stays still.
- **Why it stops the scroll:** the same cooker answers the same question 12× faster the second time, a before/after on one familiar display, and the viewer wants to know why.
- **Hook type (docs/bank-hook-ending.md):** #6 Sebelum vs sesudah (in place, on one LCD)

## Loop ending
- **Last 1 s:** the HANGAT ring runs down to empty (the cache expires), HANGAT goes dark, MASAK relights red and, on the same click SFX, the LCD snaps back to `JAWABAN 1` / `00:12`.
- **Seam:** the last frame equals frame 0 (same composition, lamps and LCD; no mask, no fade). Ending G (progres reset) with J (the closing click = the opening click).

## Caption / voice-over
- **Slot:** `data-slot="caption"` on the paper hang-tag, text x 114-926, bottom at y 1615, IBM Plex Sans Condensed 500 44 px (40 px if needed), max 2 lines. Longer lines: the tag narrows (text ≤ x 890), leading 1.08, and grows upward against the cooker base (119-character test: 3 lines, y 1469-1608). Karaoke: active word in an amber highlighter chip with ink text; it steps word by word in the video.

## Notes for the video build
- Beats: each menu key presses and its tag lights on the word that names it; the hero LCD carries the payoff number; only the two steam wisps move while idle.
- Camera: one punch-in to the LCD and lamps in the payoff scene, then hold ≥ 1.5 s. CTA at 80-90% before the reset. Self-host the three fonts for the render.

## References
- https://en.wikipedia.org/wiki/Rice_cooker — cook phase, then a thermostat switches to low-power keep-warm: two lamps and one state change everyone in Indonesia knows.
- https://en.wikipedia.org/wiki/Seven-segment_display — seven bars per digit, a limited glyph set: big unmistakable numbers drawn as SVG, not a web font.
- https://platform.claude.com/docs/en/build-with-claude/prompt-caching — cached prompt prefixes are reused at a lower price for a limited lifetime: the warm timer.
