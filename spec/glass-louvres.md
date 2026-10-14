# Glass Louvres (`glass-louvres`)

**Metaphor:** a dim room lit through a jalousie window ("kaca nako") → attention: for each word the model decides how much light to let through; open blade = high attention, shut blade = ignored. Bar length and brightness on the wall = the weight.
**Series:** how-ai-works (also ai-in-numbers: same-unit values, incl. "Rp 500 jt", "Rp 1.500.000", "1,5 M", set the blade angles)
**Axes:** dark-to-light · condensed · 3D · physical-object

## Look
- **Palette:** `#23282B` room in shade (cool slate) · `#F3D8A0` low sun (bars, beams, sky in the gaps) · `#B8BEBE` lettering in shade · `#9BA0A3` aluminium + source · `#C4552E` crank grip (only accent)
- **Fonts (Google Fonts):** Anybody (painted wall lettering: 720 at wdth 62 title, 680 at wdth 68 labels, 540 at wdth 64→56 caption) / Geist Mono 500–600 (values, source, maker's plate)
- **Grid / layout:** the window sets the grid. Window on the left wall in perspective, x ≈ 6–366 (near stile at the frame edge, y ≈ 115–1690), plain wall strip + room corner at x 384, beams cross x ≈ 366–446, text column on the back wall x ≈ 470–990 (≤ 890 for y 900–1500). Blades span y 304–1522 in N = 9–14 equal bands; every band holds one line: title lines (top) · shade gap · one band per item · shade gap · source band(s) · caption (lowest band). Ceiling line y ≈ 222, floor/skirting y ≈ 1712.
- **Signature elements:**
  1. The jalousie window in projected 3D: aluminium frame, reveal, frosted blades on clips with pivot rivets, crank with terracotta grip; each blade's tilt = its band's openness. Series + No. are stamped on a riveted maker's plate on the deep bottom rail (no kicker row).
  2. Light that lands on the wall, one band per blade: title hl in its own fully open band (dark ink in a full parallelogram bar), other title lines in shade. Items: bar length = patchL + o × patch, opacity ∝ o, focus = full bar with dark ink + glow; others pale ink above a partial bar; ties with the max are full length. Non-comparable values: only the focus is lit, the rest equal slits.
  3. Dusty beams + room: each open blade throws a visible sheet of sun across the wall strip into its bar; ceiling, floor, skirting and the concrete sill ledge give the room depth.

## 2-second hook
- **Frame 0 shows:** the same room with every blade at one equal half-open angle: equal bars on every band (the myth made visible). The title bands carry the myth line `D.myth` (e.g. "AI baca semua kata sama rata"); without `D.myth` they carry `D.title`.
- **Motion (0–2 s):** 0.2 s crank click (grip swings 40°); 0.3–1.1 s blades rotate to their real angles top-down (power2.inOut, 50 ms stagger) and every bar stretches or shrinks to its weight; 0.8–1.2 s the blade over the myth's last band shuts and its hard shadow band slides across "sama rata" like a strike-through; 1.2–1.6 s the shadow sweeps on down the title bands and wipes the myth into `D.title`; the hl band opens last.
- **Why it stops the scroll:** a bright, evenly striped wall suddenly goes uneven, and the word "sama rata" is crossed out by a real shadow.
- **Hook type (docs/bank-hook-ending.md):** #4 Mitos dicoret, crossed out with shadow, not with light (light is the highlight language). Without `D.myth`: #5 Tebak dulu ("Kata mana yang paling dilihat AI?" in the caption band over equal bars; the crank answers it).

## Loop ending
- **Last 1 s:** after the CTA (~85%), the crank swings back; blades return to the equal frame-0 angle bottom-up (the reverse of the opening, so it reads as a rewind), bars even out, the shadow band lifts off upward across the title bands and wipes `D.title` back into the myth line.
- **Seam:** the last frame is frame 0 (same crank notch, equal bars, myth line); the closing crank click is the same SFX as the opening click and the cut lands on it. Ending D (benda dibongkar balik) + J (ketukan musik).

## Caption / voice-over
- **Slot:** `data-slot="caption"` in the lowest blade band (x ≈ 470–900, y ≈ 1400–1520), 46→40 px Anybody 540, max 2 lines (ellipsis beyond ~80 chars); karaoke: the lowest blade's bar grows word by word: spoken words dark ink on the bar, active word at its full-bright leading end, upcoming `#A7AEAE` in shade.

## Notes for the video build
- Liveliness = light: per beat one blade opens or closes (tween `open[]`, re-run the geometry); a word swaps to dark ink only once its bar is full (contrast ≥ 4.5:1). Dust motes drift a few px; nothing else idles.
- Camera still; one slow push toward the wall (≤ 8%) when the focus word is spoken, then hold ≥ 1.5 s.
- When values are not comparable the bars are emphasis, not data: say "ilustrasi" in the source.

## References
- https://en.wikipedia.org/wiki/Jalousie_window — parallel blades tilted together by one operator: a physical dial for "how much gets through".
- https://jalammar.github.io/illustrated-transformer/ — attention as a weight from one word to every other; here the weight is bar length and brightness.
- https://en.wikipedia.org/wiki/Church_of_the_Light — a plain dark wall where light is the only ornament; the wall stays empty so the bars carry the meaning.
