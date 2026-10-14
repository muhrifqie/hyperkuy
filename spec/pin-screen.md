# Pin Screen (`pin-screen`)

**Metaphor:** a white pinscreen board lit hard from the side, ~3,000 pins pushed out to different depths so their shadows draw an eye; a brass loupe resting on it shows each block of pins as its grey value → what an image model actually receives: not a picture but a grid of numbers (0 = dark, 255 = light).
**Series:** how-ai-works
**Axes:** dark-and-light · grotesque · 3D · physical-object

## Look
- **Palette:** `#161618` graphite backdrop + pin shadows (`#1A1A1C`) · `#E9E7E1` pin-board white (dominant object, active-word chip) · `#C7A15A` brass (loupe rim/barrel, hl text + pin-head underline, tag eyelets, active-word bar) · `#F7F6F2` tag paper · `#9E9A93` warm grey (upcoming caption words, meta)
- **Fonts (Google Fonts):** Geist 600 (title) / Geist 500 (tag labels, caption) / Geist Mono 600–700 (tag values, loupe numbers, meta)
- **Grid / layout:** 90 px margins. Meta row y 298 (series · ep left, date right, mono 28). Title x 90–990 from y 350, 72–116 px, ≤ 262 px tall. Board slab x 62–1004, from title + 52 (≈ y 574–664) to y 1396, top + right edges drawn receding up-right. Eye on the board's upper half (centre x ≈ 505, scaled 76–112 % to fit); loupe glass r 179 + 20 px rim on the iris' right half (numbers x ≈ 560–860). Tags: two staggered columns x 92–482 / 504–894, left under the lower lid, right under the loupe, ending ≥ 14 px above the board edge. Caption + source hang under the board (≈ y 1432–1610).
- **Signature elements:**
  1. The pin field: one analytic depth function → each pin gets a raking shadow (length + width = depth), a shaft and a lit head leaning down-left; the shadows merge into a shaded eye with a catchlight.
  2. The brass watchmaker's loupe: barrel + knurling on the receding side, a ring shadow with a bright caustic on the board, and under the glass the same eye as 4×4-pin grey cells with their 0–255 value (21 numbered cells, ink picked for ≥ 4.7:1).
  3. Paper luggage tags hung on single pins (brass eyelet, pin head through it, hard shadow): one tag per item, label + mono value.

## 2-second hook
- **Frame 0 shows:** the shaded pin eye, loupe resting at the board's right edge over the lashes (glass shows plain pins), title slot "Ini yang sebenarnya dilihat AI." No tags yet.
- **Motion (0–2 s):** 0.2 s the loupe slides left onto the iris (power2.inOut, 0.9 s), its ring shadow + caustic travelling with it; as the glass edge passes each 4×4 block, those pins sink flush (shadow length → 0, 120 ms) and the block's grey cell + number counts up and locks. All 21 numbers locked at 1.4 s.
- **Why it stops the scroll:** a recognisable eye visibly turns into a spreadsheet of numbers under a jeweller's lens — the hidden machinery is revealed in one gesture.
- **Hook type (docs/bank-hook-ending.md):** #7 Yang sebenarnya dilihat AI

## Loop ending
- **Last 1 s:** after the CTA (~85 %) the tags have been lifted off; the loupe slides back right to its resting spot (power2.inOut, 0.8 s) and, behind its trailing edge, the numbered cells drop away and the pins push back out to their depths, shadows regrowing — the hook run in reverse. Title slot returns to the hook line.
- **Seam:** the last frame is frame 0 pixel for pixel (same loupe position, same pins, same line) — B Frame kembali persis; the loupe's slide-right ends exactly where its slide-left begins.

## Caption / voice-over
- **Slot:** `data-slot="caption"` x 90–900, hung 36 px under the board (≈ y 1432–1552 for 2 lines), Geist 500 40–46 px, 1–2 lines. Active word = graphite text on a board-white chip with a 5 px brass baseline bar; spoken words cream `#ECEAE4`, upcoming warm grey.

## Notes for the video build
- Per item beat: its tag swings onto its pin from −8° and settles at its fixed tilt (0.5 s, no bounce) as the VO names it; for "angka/nilai" beats one loupe cell's number counts & locks. Pins never jitter while idle; any depth change is pins sliding with their shadows.
- Camera = punctuation: still in the hook (the loupe is the motion); max one punch-in per scene (≤ 1.15× on the loupe when 0–255 is explained), hold ≥ 1.5 s. Risk: ~3,000 pins — draw per depth bucket (9 paths) or to canvas; keep the depth function deterministic so frames match.

## References
- https://en.wikipedia.org/wiki/Pinscreen_animation — pins slid in and out under side light; each pin's shadow length becomes a tone, so the image is literally a field of depths.
- https://en.wikipedia.org/wiki/Grayscale — 8-bit grey: one number 0–255 per pixel; the loupe prints that number instead of the tone.
- https://en.wikipedia.org/wiki/Loupe — a short-barrel lens resting on the surface: magnifier as the "look closer" gesture, its barrel and ring shadow sell the depth.
