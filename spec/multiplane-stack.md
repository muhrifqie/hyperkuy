# Multiplane Stack (`multiplane-stack`)

**Metaphor:** a multiplane animation camera (camera on top, one painted glass plate per layer, a lit light table below) → what the AI reads is many layers seen at once as ONE picture: each item is its own plate, and the lens shows them composited under the title.
**Series:** how-ai-works · ai-tools
**Axes:** dark · grotesque · 2.5D · diagram

## Look
- **Palette:** `#0B0B0D` studio black (backdrop, ground glass, ink) · `#F3F0E8` cel white (title lettering, grease-pencil values, plate 5) · `#F5C518` cadmium yellow (hl, plate 1, cue + active word) · `#F25C3B` vermilion (plate 2, tally light) · `#6F9CFF` cobalt (plate 3); plate 4 uses a rose cel tint `#F49AC1`
- **Fonts (Google Fonts):** Rubik 800/700 (title card, composite, strip labels) / Barlow Semi Condensed 400-700 (caption, source; Barlow Condensed only if a long caption would need a third line) / Spline Sans Mono 500-600 (kicker, 12 FLD, PL cue, plate numbers) + Caveat Brush (grease-pencil values)
- **Grid / layout:** The top half is the camera's ground-glass viewfinder, x 90-990, y 300 to 860-904 (it grows to fit the content). It holds the kicker and the 12 FLD counter at y 338, the title card centred in x 130-950 at 66-116 px with each sentence on its own line, a centre cross, and the composite labels in x 150-930 on at most 2 lines. Below it, the stand in side view, x 104-876, runs from the viewfinder bottom to y 1446: the camera with its reels, then the plates evenly spaced, then the light table at y 1404-1446. Strips start at x 168 and values end at x ≤ 820. Caption y 1474-1582, source/date y 1592.
- **Signature elements:**
  1. The viewfinder IS the cover: 12 FLD crop marks, a field scale and a centre cross. Inside it the title is lettered on the front glass, and below it every item label lands in the lens: item 0 largest and sharpest, deeper plates smaller and slightly soft (tokens: "Ken·apa AI bisa ng·arang").
  2. The stand seen from the side: a camera with two film reels, a lens, and a dashed field cone down to the lit light table, which is the only lit object. There is one clear glass plate per item, each with an opaque cel-paint patch exactly where its label sits in the lens (inside the cone), so plates near the lens carry small patches.
  3. Each plate has a lettered cel strip on its front edge (number tab + label, in its own cel colour) and its value in grease pencil. The active plate (label matching `hl`, else plate 1) gets tinted glass, a coloured front edge and a white rim.

## 2-second hook
- **Frame 0 shows:** exactly the cover. The viewfinder shows the composited title and labels, with the exploded stand already visible below it.
- **Motion (0-2 s):** Hold until 0.6 s so the title reads. From 0.6 to 1.5 s the view tilts down from the viewfinder into the stand: the plates separate further along the racks (gap +18%, power3.inOut, 0.9 s), and in the viewfinder the labels shift by parallax (front +14 px, back +4 px). From 1.2 s a yellow light runs down the cone, and each strip flashes front→back with a soft tick.
- **Why it stops the scroll:** the viewer reads a clean title card, then sees it is made of separate glass layers stacked under one lens.
- **Hook type (docs/bank-hook-ending.md):** #7 Yang sebenarnya dilihat AI

## Loop ending
- **Last 1 s:** after the CTA (~85%), the plates slide back to their cover spacing (power3.inOut) and the viewfinder labels settle back into register (parallax returns to 0). The yellow lens ring blinks once.
- **Seam:** the last frame equals frame 0 (the cover). The plate "clunk" at the end is the same SFX as the separation at 0.6 s. Ending type B (Frame kembali persis), no fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90-900, y 1474-1582, Barlow Semi Condensed 500 at 40-46 px, max 2 lines. It opens with a mono yellow camera cue "PL n ▸" (n = the active plate). The active word (`hl` if it is in the caption, else the first word) is black bold on a lit yellow cel strip with a white top edge. In the video the strip steps word to word, and the cue number follows the plate being spoken about.

## Notes for the video build
- One beat per plate: on the word that names it, its strip flashes, its patch brightens and its label in the viewfinder sharpens (blur → 0). Glass never wobbles; the reels turn slowly only while "shooting".
- Camera: still, with one push-in to the viewfinder at the payoff, then hold ≥ 1.5 s. Self-host the fonts. Labels over 16 characters shrink to 30 px, and values over 12 characters shrink the grease pencil before the label.

## References
- https://en.wikipedia.org/wiki/Multiplane_camera — separate painted glass planes at distances read as one image; the field narrows toward the lens.
- https://en.wikipedia.org/wiki/Traditional_animation — opaque cel paint on clear acetate, field guides and grease-pencil notes on cels.
- https://www.artofthetitle.com/title/united-states-of-tara/ — layered sets shot as passes; travel through the layers to reveal what the flat frame hides.
