# Night Facade (`night-facade`)

**Metaphor:** an office tower at night seen from the street, its rooftop sign shouting the headline and its windows counting the numbers → AI figures as a unit chart you can stand under: count the lit windows against the legend and the scale becomes physical.
**Series:** ai-in-numbers | ai-news
**Axes:** dark · grotesque · 3D · data

## Look
- **Palette:** `#070A12` night sky · `#121A2B` dark glass · `#FFB547` sodium amber (active band, hl letters, active caption word) · `#F4EEE2` warm light (channel letters, other counted windows, type) · `#4E6A9E` steel (lattice, sign edges, glass reflection); plus a tiny `#FF5A4E` aircraft beacon
- **Fonts (Google Fonts):** Archivo 800 stretched 100–116% (rooftop channel letters) · Archivo 600/800 semi-condensed (band labels, values, caption) / Martian Mono 500–600 condensed (plates, legend, band numbers, notes)
- **Grid / layout:** eye at street level, camera pitched 30° up, tower axis x 520 so the facade stays ≤ x 892 down to y 1440 (clear of the action rail). Rooftop sign: letters from y 340, 72–112 px, ≤3 lines, centred, lattice ≈x 80–960; kicker plate (left) and date plate (right) hang under its catwalk; the parapet with the legend sits just below (≈y 600–720). Bands fill the facade down to ≈y 1400: per item a 52–56 px band sign (header) → 2–5 rows of 15 windows → 18–22 px floor slab, item 01 on top. Canopy fascia with the LED ticker + source ≈y 1425–1612; lobby and street below are decoration only. Neighbour towers at both edges.
- **Signature elements:**
  1. The title is the tower's rooftop sign: backlit channel letters (returns visible from below, hl letters amber) on a steel lattice with a catwalk, struts down to the parapet, a spire with a red beacon above.
  2. Unit-chart bands: the windows directly under each sign count its value in reading order against the parapet legend "1 jendela = <step> <unit>" (rb/ribu, jt/juta, M/miliar, T/triliun are applied; step = 1·2·5×10ⁿ, a round 10ⁿ preferred). Only items in the active item's unit light (active = item containing `hl`, else the first numeric one); another unit stays dark with a "BEDA SATUAN" plate; `%` has its own per-band scale (band = 100%, tag "% LANTAI"); a word value such as "miliaran" or "habis" is hatched "TAK TERHITUNG"; under half a window gets "< 1 JENDELA".
  3. The night street: neighbour towers whose corner edges and side faces converge on the same vanishing point, sparse warm lit offices on them only (the main facade is count-only), water tank, masts and beacons, a low city glow; the caption runs on an LED ticker in the lobby canopy.

## 2-second hook
- **Frame 0 shows:** the cover with the active band's windows still dark: rooftop title lit, active sign amber, legend as generated: "1 jendela = 0,01 Wh" (numbers sample) / "1 jendela = 1 token" (tokens sample).
- **Motion (0–2 s):** no hold: at 0.2 s the active band's windows switch on one by one in reading order (hard on/off with a soft click, 30 ms each, several per frame above 40 windows) while the value on its sign counts up and locks on the last window by ≈1.4 s (Count & lock). 34 windows for 0,34 Wh; a 2-token value is two deliberate clicks 0.2 s apart.
- **Why it stops the scroll:** a whole building counting a number with its lights makes the size physical before the viewer reads it.
- **Hook type (docs/bank-hook-ending.md):** #2 Angka mustahil (strongest with ai-in-numbers values, e.g. "1 jendela = 100 juta").

## Loop ending
- **Last 1 s:** the counted windows switch off in reverse order (last lit first) until the active band is dark again; signs, legend and rooftop sign stay lit.
- **Seam:** Bank G progress reset + J: the count returns to the frame-0 state with the camera locked, and the last switch-off click is the same SFX as the first switch-on.

## Caption / voice-over
- **Slot:** `data-slot="caption"` = the LED ticker panel in the canopy fascia, x 96–900, bottom-anchored above the source line (≈y 1425–1565 for 2 lines), 40–46 px Archivo 600 (stretch 94→78% keeps it ≤2 lines); karaoke: spoken words `#F4EEE2`, upcoming `#8E97AB`, active word lit sodium amber `#FFB547` with a faint LED glow (no box).

## Notes for the video build
- Per beat one band: the amber state moves to the next sign, its windows count on, its value locks; if the next item has another unit, swap the legend first and dim the old count. Beacons blink at 1 Hz; neighbour offices change very rarely.
- Camera = punctuation: at most one tilt-up from the canopy to the rooftop sign when the biggest number lands; otherwise locked, hold ≥1.5 s after it. Risks: keep halos faint (no bloom); never animate the sign type.

## References
- https://www.artofthetitle.com/title/north-by-northwest/ — an abstract grid resolves into a glass facade seen from the street.
- https://en.wikipedia.org/wiki/Isotype_(picture_language) — one symbol = one fixed quantity, repeated and never resized, so counts read at a glance.
