# Leak Bucket (`leak-bucket`)

**Metaphor:** a roadside tyre-patch stall (tambal ban): the inner tube is turned through a sawn-off drum of water until one spot bubbles, and every leak found gets a chalk ring → red-teaming and evals: testers turn a model through tricky prompts until a leak (jailbreak, hallucination) shows, mark it, then patch it.
**Series:** ai-news · how-ai-works
**Axes:** light · condensed · 2.5D · physical-object

## Look
- **Palette:** `#1B1B1D` rubber, title ink, marker notes · `#F3EDE0` sign plank, chalk, bubbles · `#2E5FB0` drum blue (cut-wall tint `#4A7BC8`) · `#8FB9D6` water · `#A8351F` sign-paint red: title shade, border, active leak, caption loop (patch rim tint `#D0502C`). Neutral grounds: plaster `#E6DCC8`, cardboard `#C9A46A`.
- **Fonts (Google Fonts):** League Gothic (painted title, kicker) / Inter 600·500 (note labels, caption, source) / Caveat Brush (marker values, chalk numbers, chalk date)
- **Grid / layout:** margins x 90–990. Corrugated zinc roof edge y 0–163 (wavy sheet profile, decoration). Plank sign x 56–1024, tilted −2°, hung on two wires; top 292 (short titles hang lower, bottom ≈ 670): top board y ≈ 314–372 with the kicker painted left and a chalk slate (date) nailed right; title centred below, League Gothic caps 156→84 px fit, ≤ 262 px, balanced, ending in a painted arrow. Object y 714–1470: tube centre (690, 1078), 360×620 centre-line, Ø 108; sawn half-drum as a section, interior x 406–974, rim 1026, water line 1086, floor 1452. Marker notes on the wall x 90–426 (≤ 290 px wide beside the drum): dry notes from under the sign to ~1230, the leak note just above the card. Cardboard card x 70–904, bottom-anchored at 1614 (≈ 1390–1614). Floor from 1440; props (tyre lever, tin of patches, air hose) y 1650–1860 sit in the UI zone.
- **Signature elements:**
  1. The hand-painted tambal-ban plank: two boards, rough edges, red brush border, nail heads, wires; title in black with a red shade, brush-roughened (feDisplacementMap), uneven baseline; `hl` pressed under a real tube patch (black oval, serrated orange-red rim); the painted "this way" arrow points down at the drum.
  2. The tube dunked in a blue drum sawn in half, drawn as a section: lighter cut-wall band with a ragged saw line and two rolling hoops, dark interior above the water, submerged rubber seen through the water, and the hero leak: 10 bubbles (r 12–34) rising ~250 px in a slightly curved column into a boil, a splash crown and 3 ripple rings out to the drum wall.
  3. Found leaks = numbered chalk rings (1–4, no X) on the dry, rising left arm, each tied by a marker leader to a note (label Inter, value in marker); the active leak = red marker ring round the bubbling spot, its value in red. Leak = `D.leak` / `item.leak` if given, else the item naming `hl`, else the last.

## 2-second hook
- **Frame 0 shows:** the same frame as the cover with the drum already open: sign + patch, tube in the sectioned drum, the bubble column streaming and boiling at one surface spot; no chalk rings or notes yet; card reads "Di sini AI-nya bocor." (4 words).
- **Motion (0–2 s):** the tube turns slowly and continuously from frame 0 (~6°/s, valve stem and sheen drift clockwise); bubbles rise at a steady speed and break in ripple rings every ~0.4 s; 0.5–1.3 s the red marker ring draws itself round the bubbling spot (two strokes, ease-out); karaoke advances on the card. Camera still.
- **Why it stops the scroll:** a bright stream of bubbles out of black rubber is an image every Indonesian viewer knows from the roadside, and "AI-nya bocor" makes them ask what is leaking.
- **Hook type (docs/bank-hook-ending.md):** #9 Detail misterius (no camera zoom).

## Loop ending
- **Last 1 s:** after the CTA (~85%) the tube gets one last push: every chalk-marked section rides over the top, down the right arm and through the water; real chalk dissolves, so each ring and number washes off as it goes under, and its note retracts along its leader into the mark at that moment (newest first). The push eases back to the base 6°/s. Total turn over the video = whole revolutions, so the frame-0 leak is back at the bottom and the bubbles keep breaking at the same surface spot; the red ring undraws. Title, patch, drum and card never leave.
- **Seam:** last frame = frame 0 (ending **B**) with unbroken rotation at the same speed (**E**), plus a sentence seam (**A**): the last VO line ends "…dan ketemu lagi titik bocornya:" and frame 0 answers "Di sini AI-nya bocor." No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` on the torn cardboard price card, x ≈ 116–860, y ≈ 1426–1540, Inter 600 44 px (44→40 fit), ink on `#C9A46A`, max 2 lines (`text-wrap: pretty`); long lines show a phrase window around the active word with "…". Active word = `hl` if in the line, else the first word: looped in red marker (`#A8351F`, 4.5 px). Source as fine print on the card (Inter 500 26 px).

## Notes for the video build
- One item per beat: a 0.6 s push (on top of the base turn) brings the next spot to the bottom; bubbles show; as it rises out of the water the red ring becomes a chalk ring + number (0.5 s draw-on), the leader draws to the wall and the note writes on in marker on the word that names it. `hl` lands as the patch pressed onto the sign (the only overshoot); the arrow paints on with a brush wipe.
- Camera = punctuation: still; one push-in to the drum section on the leak beat (≤ 1.1×), hold ≥ 1.5 s, cut wider on the next beat, never straight back out.
- Risks: move marks along the ellipse parameter, keep numbers upright; bubbles rise linearly, never bounce; values are illustrative unless sourced.

## References
- https://mojok.co/terminal/tips-dari-tukang-tambal-ban-cara-deteksi-dini-ban-bocor-atau-kempes-belaka/ — dunk the tube, bubbles show the leak: one legible detection gesture carries the whole idea.
- https://www.sahapedia.org/hand-painted-signs-forgotten-markers-city-space — hand-painted roadside lettering: flat letters with a contrasting painted shade, restrained two-colour palette.
