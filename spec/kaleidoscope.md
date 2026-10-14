# Kaleidoscope (`kaleidoscope`)

**Metaphor:** a brass kaleidoscope, end-on (the mandala) and its object cell in profile (the loose chips) → generative AI only recombines pieces it has already seen: a new turn (seed) gives a "new" picture, but it can never add a chip it did not have.
**Series:** how-ai-works
**Axes:** dark-to-light · serif · 2.5D · abstract

## Look
- **Palette:** `#15161C` night ink (view + text) · `#C9A15B` brass (tube, hl, active word) · `#D8553B` vermilion glass · `#3C6FB4` cobalt glass · `#F0E6D2` light-table cream (max 5)
- **Fonts (Google Fonts):** Fraunces (display 144 opsz, italic for hl) / Fraunces (caption, values) / Victor Mono (meta, chip labels)
- **Grid / layout:** margins x 90–990. Meta row y 298 (kicker left, "Sel · N keping" right). Title y 352 to ≤ 600 (112→72 px, balanced). Eyepiece fills the gap below the title (centre x 540, outer radius ≤ 318, about y 615–1150). Glass object cell in profile x 76–1008 (stub runs off the right edge), 116 px tall, about y 1160–1290. Item columns under the cell (label 30 px mono, value 46 px serif). Caption above the foot, foot (source/date 26 px) ends at y 1616. Background: ink until the lens centre, fades to cream by the cell top.
- **Signature elements:**
  1. The 12-fold mirror mandala built ONLY from the item chips: one 30° wedge holds them, two mirrors repeat it 12×; nothing else is drawn inside the lens.
  2. The dashed "real sector" outline: the one slice between the mirrors that actually exists; the other 11 are reflections.
  3. The loose chips lying in the glass cell between knurled brass collars, each over its label + value; the active chip has a dashed ring (and a cream edge on its 12 copies in the lens).

## 2-second hook
- **Frame 0 shows:** the crisp mandala in the brass eyepiece, title above, the same chips lying in the cell below. On-screen line: "AI bikin gambar dari nol?" (5 words).
- **Motion (0–2 s):** 0–0.6 s hold. 0.6–1.4 s the knurled ring turns 24° (power2.inOut) and the chips inside the wedge slide to new spots, so the mandala re-forms into a different pattern, while the loose chips in the cell tumble a few degrees with the turn. 1.3–1.8 s a brass stroke strikes through "dari nol".
- **Why it stops the scroll:** a hypnotic symmetric picture changes in front of you, and the next frame tells you none of it is new.
- **Hook type (docs/bank-hook-ending.md):** #4 Mitos dicoret (myth: AI creates from nothing).

## Loop ending
- **Last 1 s:** the CTA has already landed (~85%). The loose chips tumble back to their frame-0 tilts, and the ring finishes its last turn landing on an exact multiple of 60° (one mirror pair). The caption resets to its first word.
- **Seam:** 6-fold symmetry makes the 60° landing pixel-identical to frame 0 (six identical notches, 180 knurl ticks, all 12 copies equal, the dashed sector is a screen-fixed overlay). The turn keeps its direction into the 0.6 s turn of the hook. Bank B "Frame kembali persis" (+ E "arah gerak menyambung"). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` x 90–990, bottom-aligned just above the foot (about y 1420–1570), Fraunces 46→40 px, 1–2 lines, karaoke: the active word is italic semibold ink on a brass cut-glass slab (slanted ends). Active = `hl` if it is in the caption, else the first word. `sub` is shown only here.

## Notes for the video build
- Beats: (1) hook turn. (2) "kepingnya cuma ini": each cell chip lights in turn and its 12 copies flash in the lens (stagger build, 90 ms). (3) "seed baru = putar lagi": the ring turns, the pattern changes, the chip count in "Sel · N keping" stays the same. (4) "nggak bisa nambah keping": an empty dashed chip slot appears in the cell and stays empty.
- Camera: still by default. One punch-in on the dashed real sector in beat 2 (the only emphasis move), hold ≥ 1.5 s, then cut back out (never zoom straight back out). Liveliness comes from the turning ring and the chips, not the camera.
- Risks: land every turn on k·60° for the loop. Keep the reflections at equal strength (no dimming) or the seam breaks. Chips must stay inside the wedge clip (hard-coded per 3/4/5 items).

## References
- https://en.wikipedia.org/wiki/Kaleidoscope — angled mirrors repeat a few loose pieces into a symmetric picture; turning the cell changes the view without adding pieces.
- https://en.wikipedia.org/wiki/Dihedral_group — D6 symmetry: one 30° fundamental domain plus reflections generates the whole pattern (the dashed "real sector"), and a 60° turn maps it onto itself (the loop).
