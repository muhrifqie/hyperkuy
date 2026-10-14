# Stone and Chalk (`stone-and-chalk`)

**Metaphor:** an unframed slate plaque with V-cut Roman capitals, and chalk written over the same stone → weights vs context: what the model learned in training is cut into the stone and stays; what you tell it in a chat is chalk, wiped when the conversation ends.
**Series:** how-ai-works
**Axes:** dark-and-light · serif · 2.5D · physical-object

## Look
- **Palette:** `#2E2C29` slate face · `#6F6C66` weathered stone (scored guidelines, broken laminae) · `#D9D4C8` lime plaster wall + the pale stone exposed inside every V-cut · `#F4F1EA` chalk · `#E0874F` red-ochre (minium paint in the `hl` groove, ochre chalk for the active caption word)
- **Fonts (Google Fonts):** Cinzel 700 (everything carved: title, labels, numerals, sub, meta, source) / Caveat 700 (everything chalk: values, caption)
- **Grid / layout:** unframed tabula ansata on lime plaster: face x 84–996, y 222–1650, no moulding or inner border, 22 px thickness below/right, dovetail handles x 34–84 / 996–1046 (y 852–1028) with bronze-capped fixings, bottom-right corner snapped off (996,1472)→(856,1650). Meta y 304–339 centred · title from y 366, centred, x 140–940, 116→72 px, ≤ 322 px tall, balanced lines, scored cap/baseline guidelines · interpunct divider at title bottom + 50 · items from divider + 52 to caption top − 44, as a block centred under the title, always within x 150–880 · caption x 150–880, bottom ≤ 1484 · source/date centred x 180–900, bottom 1598.
- **Signature elements:**
  1. Real V-cut lettering: a stepped-erode height map lit from the lower right (relief 10, floor 0.1), so every stroke shows a dark upper-left facet and a lit lower-right facet and reads as cut even at feed size. The `hl` word is the same cut filled with red-ochre paint (shallower relief, so it is paint and not metal), then circled in chalk. The loop is a superellipse (n = 3) whose curve passes outside the padded cap box. Its height is capped by the real gap to the lines above and below, and the word gets just enough side margin for the loop's reach. When that does not fit (hl split over lines, too close to the face edge, or the title would overflow), a chalk double underline is used instead.
  2. Carved line + chalk note: each item label is cut on its own scored line, and its value is chalked under it on a hooked arrow (what this chat said about what the model knows). When rows are too short for values ≥ 54 px, the value follows the label on the same line after a short chalk arrow. It is never a right-aligned price column.
  3. The stone itself: the snapped corner shows the stepped cleavage (a wedge of exposed lamina plane, then layered laminae across the thickness), plus a pencil-round arris, faint riven streaks and pits, and faint sponge-wipe arcs from chats already erased.

## 2-second hook
- **Frame 0 shows:** the cover composition (carving + chalk values, hooked arrows, `hl` loop). Only the caption band differs: the chalk tip is finishing "Namaku Dina, ingat ya." in one line at 76 px (617 px wide from x 150, bottom-aligned in the caption slot, tokens sample y ~1350–1440). The cover/thumbnail is the same frame with the karaoke caption in that band.
- **Motion (0–2 s):** 0–1.0 s: the line finishes and holds (4 words need ~0.8 s to read). 1.0–1.5 s: a damp sponge sweeps one arc across the whole face (ease-in-out) and takes ALL the chalk: the hook line, values, arrows and loop, leaving wipe streaks. The carving under it does not change. 1.5–2.1 s: chalk writes "Kok AI-nya lupa?" in the same place and size (stroke draw-in, word-staggered). Generic version: chalk writes the episode's line or question, the sponge wipes the stone, the carving stays.
- **Why it stops the scroll:** the whole tablet visibly loses its chalk while the cut letters stay. Everyone has had an AI forget what they just said, and here you see what goes and what stays before anyone explains it.
- **Hook type (docs/bank-hook-ending.md):** #8 Notifikasi relatable ("kok AI-nya lupa obrolan tadi?")

## Loop ending
- **Last 1 s:** after the CTA (~85%), the recap has chalked the values, arrows and loop back on. The sponge wipes only the caption band, and the chalk tip writes "Namaku Dina, ingat ya." at the same 76 px size and position. The cut lands just before the last word is finished.
- **Seam:** ending F + B: the stone returns to exactly the frame-0 composition with the chalk still moving, so the cut continues the stroke. Sentence seam (A): the last VO words "…dan chat baru mulai dari nol:" are completed by the first chalk line.

## Caption / voice-over
- **Slot:** `data-slot="caption"`, x 150–880, bottom ≤ y 1484 (tokens sample y 1309–1439), Caveat 700, 56 px (floor 40, max 2 balanced lines), chalk `#F4F1EA` with a softer grain than the values. Karaoke: the active word (`hl` if it is in the caption, else the first word) is ochre chalk `#E0874F` with a double ochre underline. If `D.caption` differs from `sub`, `sub` is carved as a 34 px line under the divider.

## Notes for the video build
- Carved elements appear by a chisel reveal (mask lift per line along the guidelines, never bouncing). Chalk draws in on the word that names it. Sponge wipes are the beat transitions.
- Camera still. At most one emphasis move per scene: a punch-in to the chalk loop when `hl` is spoken, then hold ≥ 1.5 s. Never zoom straight back out. The loop point is a cut.
- Risk: the SVG lighting filters are heavy, so render the carved layer once and animate only masks and opacity.

## References
- https://en.wikipedia.org/wiki/Trajan%27s_Column — Roman square capitals cut in V-section on scored guidelines. Taken: the cut face as "permanent", the ordinatio lines.
- https://en.wikipedia.org/wiki/Tabula_ansata — the dovetail-handled tablet. Taken: the silhouette that says "inscription" and not "blackboard".
- https://en.wikipedia.org/wiki/Slate — slate splits along its cleavage into thin plates. Taken: the snapped corner showing stepped laminae.
- https://en.wikipedia.org/wiki/Interpunct — triangular word-stops of Latin inscriptions. Taken: the divider under the title.
