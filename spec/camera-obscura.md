# Camera Obscura (`camera-obscura`)

**Metaphor:** A blacked-out room turned camera obscura → a language model only sees a dim, upside-down projection of the world (text written about it), never the world itself.
**Series:** how-ai-works
**Axes:** dark-to-light · grotesque · 2.5D · poster

## Look
- **Palette:** `#0F0E0D` blacked-out room · `#EDE6D8` cream table, type · `#8D7A63` taupe panel, projected ink · `#D6A64B` amber pinhole light · `#33475E` slate value chips
- **Fonts (Google Fonts):** Onest (800 title, strips' values, caption) / Literata (italic projected labels, tracing note)
- **Grid / layout:** kicker y 268; title y 320–~570 (Onest 800, hl amber underlined); typed myth card y ~600; scene y 700–1460: shutter panel right edge with amber pinhole, rays to a tilted cream table (x 130–950, y 880–1460) carrying an inverted skyline; item strips lie on the table y 1100–1390, staggered; caption on the dark wall y ~1470–1616; meta y 1622.
- **Signature elements:**
  1. Amber pinhole with light rays — the only light source in a black room
  2. Inverted street projection hanging down from the table's far edge (clipped to the table)
  3. Typed card "AI paham dunia nyata → bayangannya" with the myth struck out in rust

## 2-second hook
- **Frame 0 shows:** the lit table with the inverted projection and the pinned typed card
- **Motion (0–2 s):** at 0.6 s "dunia nyata" is struck through and "bayangannya." is typed in amber (type-on with caret)
- **Why it stops the scroll:** a bright room inside darkness with a one-word correction — the myth dies visibly
- **Hook type (docs/bank-hook-ending.md):** #4 Mitos dicoret

## Loop ending
- **Last 1 s:** the tracing strips lift off the table one by one
- **Seam:** ending **B — frame kembali persis**: the bare inverted projection of frame 0 remains, composition identical

## Caption / voice-over
- **Slot:** `data-slot="caption"` on the dark wall, x 90–900, y ~1470–1616, Onest 600, 42 px, max 2 lines; active word = dark knocked out of a filled `#D6A64B` block.

## Notes for the video build
- Beats: rays flicker alive → skyline drops inverted onto the table → each strip lands on its spoken word → card correction. One emphasis move: punch-in to the pinhole when the myth breaks. Risk: keep the room dark — only the beam moves.

## References
- https://www.abelardomorell.net/camera-obscura — a whole room as the camera: the inverted outside view projected over interior surfaces (principle only)
- https://en.wikipedia.org/wiki/Camera_obscura — pinhole projection is inverted and dim: the optical fact carries the metaphor
