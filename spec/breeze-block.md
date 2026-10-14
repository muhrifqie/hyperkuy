# Breeze Block (`breeze-block`)

**Metaphor:** a sunlit roster (pierced concrete breeze-block) wall with a photo print hung behind it, seen from upstairs above its terrazzo terrace → convolution in image AI: one small 3×3 block (= a filter, opening size = weight) repeats across the photo, and the light it throws on the floor is the feature map.
**Series:** how-ai-works
**Axes:** dark-and-light · condensed · 3D · physical-object

## Look
- **Palette:** `#D9CFBE` painted parapet plaster · `#837D74` terrazzo in shade · `#EFDDB3` sunlight (floor patches, hl cut) · `#2A241F` relief letters + ink · `#2F4FA0` sliding-window blue (the only accent; the photo behind the wall adds ginger/cream/amber pieces)
- **Fonts (Google Fonts):** Alumni Sans 800 (relief title, condensed caps) / Familjen Grotesk 700 values · 600 chiselled labels · 500 caption / Roboto Mono 600 maker's stamp · 500 meta
- **Grid / layout:** shift-lens camera, verticals stay vertical, horizon at y 40. Eave 0–56 and two cast list lines at title −62/−40. Title y 318 → ≤ 618 (fit 150→80 px, ≤ 300 tall), x 90–990. Precast lintel 30 px under the title, 66 px, stamp pressed into it at x 90. Roster: 2 courses, pitch 88–108 px (≤ 126 for 3 items), ≈ y 660–880, bleeds both edges. Terrazzo floor ≈ y 880–1350 = the hero; its near edge is solved from the bottom stack and the sun slope is solved so the item course's light ends at the step. Step riser ≈ 1350–1410 holds the labels. Shaded yard below: caption + meta stacked up from y 1616. Values and labels stay inside x 90–900.
- **Signature elements:**
  1. Relief-lettered parapet: the title is cast-cement caps lit by the same sun (bright top faces, shadow down-right). The hl word is cut through the plaster like a roster opening, so the sun glows through it inside the cut's dark rim, and it carries the same 3×3-ticked blue frame as the window.
  2. Light map on the terrazzo: every opening is projected along one sun vector (flipped and stretched in perspective). Regular blocks have four quarter-circle openings and a centre diamond. Item blocks are filters with square openings whose size is the weight (large, medium, small or closed, in edge and diagonal arrangements). Each value is inked inside its own patch, in the band thrown by the filter's top row. The labels are chiselled into the riser right below. With 5 items and long values, every second value moves up into its own patch's middle band, and long label words break at a syllable with a visible hyphen.
  3. The photo behind the wall: a flat cat print, so every block shows a 3×3 sample of it. The print hangs so the blue window frames the cat's eye. The footprint of each filter the window has read carries the photo's colours, and every other patch is plain sunlight. Dashed rays run from the window to its footprint.

## 2-second hook
- **Frame 0 shows:** the wall and the floor's plain sunlight lattice. The blue window sits halfway across the bleed block left of 01 (col −1), entering. The on-screen line is "Begini AI melihat foto." (4 words).
- **Motion (0–2 s):** 0–0.35 s: the window lands on 01 (power2.inOut). On landing, its footprint snaps from plain sun to the photo's colours in one frame, and the eye appears in light on the floor. Strides at 0.7 s and 1.1 s use the same ease, and each snaps a new piece of the photo into the next footprint while that value inks in.
- **Why it stops the scroll:** a familiar Indonesian wall behaves like a machine: move the 3×3 window and a piece of the cat appears in light on the floor.
- **Hook type (docs/bank-hook-ending.md):** #7 Yang sebenarnya dilihat AI.

## Loop ending
- **Last 1 s:** after the CTA (~85%), the window keeps the same stride tempo past the last item, through the regular blocks and off the right edge. Behind it the coloured footprints fade back to plain sunlight, left to right, and in the last 0.2 s the window re-enters halfway across col −1.
- **Seam:** ending E + B. The final frame equals frame 0: plain floor, window entering at col −1. The regular blocks repeat at one pitch, so col −1 is pixel-identical. There is no ruler or counter, so nothing resets. Thumbnail = the frame at 0.35 s (window on 01, its footprint in colour), which is this still.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–900 on the shaded yard below the step (≈ y 1450–1560), 46→40 px Familjen Grotesk 500, max 2 lines. Karaoke: the active word is a sunlit chip `#F3D58E` with ink text, spoken words are cream `#F6EEDF`, upcoming words are `#D3CABB`.

## Notes for the video build
- Beats: the sun "comes out" (the lattice exposure ramps over 0.6 s). Then, per item, the window strides, the footprint snaps to the photo colours, the value inks in and its label is chiselled in (a mask wipe). The hl frame draws in on the word that names it.
- Camera is punctuation: still by default, at most one push-in per scene to the active footprint when the VO says "peta fitur", then hold ≥ 1.5 s. Drive the projection from one progress value and never animate the 1,500 terrazzo chips.
- The print is fixed for the whole video, with the eye behind the filter that `hl` names. The hl cut's own light falls past the step, out of frame.

## References
- https://en.wikipedia.org/wiki/Breeze_block — one pierced module repeated is the whole surface, exactly like a filter tiled over an image.
- https://binus.ac.id/bandung/interior-design/2023/02/01/roster-salah-satu-pilihan-material-cantik/ — roster as an Indonesian tropical-house element that filters light and air and throws pattern shadows inside.
- https://cs231n.github.io/convolutional-networks/ — the kernel moved one stride at a time, each position producing one output cell (principle only, no assets).
