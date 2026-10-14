# Filter Preset (`filter-preset`)

**Metaphor:** a dark photo-editing app where one street photo of a warung at dusk is split by a before/after handle → LoRA fine-tuning is a preset, not a re-shoot: the big base model (the photo) stays frozen, and a tiny adapter (a few slider moves) restyles it for one job.
**Series:** ai-tools · how-ai-works
**Axes:** dark · condensed · 2D · app-ui

## Look
- **Palette:** `#121316` app chrome · `#1B1D22` bottom sheet · `#EDE8DF` cream text, handle, knobs · `#F2A03D` preset amber (active preset, slider fill, `hl`, caption word) · `#8A8F98` grey (meta, tracks, the "before" half of `hl`). The photo has its own dusk grade (navy `#1D2850` → peach `#F6C47E`).
- **Fonts (Google Fonts):** Fira Sans Extra Condensed 800 (title) / Fira Sans Condensed 500-600 (slider labels, pills, caption) / Fira Mono 500 (values, kicker, date, source)
- **Grid / layout:** 90 px margins. App top bar (icons only) y 190-250 · kicker + date y 300-332 · title y 350-≤574 (fit 112→70 px, max 224 px tall) · photo full-bleed from title +30 down under the sheet (≈ 410-530 px tall, handle at x 540) · bottom sheet from ≈ y 1030-1120 to 1920: grab bar, preset filmstrip (76 px), 3-5 slider rows ending at y 1480 (row 86/76/66 px for 3/4/5 items; all text x ≤ 900) · caption y 1506-1616 · tool bar icons y 1710-1800 (decoration under the platform UI).
- **Signature elements:**
  1. The split photo: ONE SVG scene (warung with tiled roof, zinc awning, hanging sachet strips, cracker jars with red lids, hand-painted sign, scooter, low sun) used twice. The left half only gets a tiny flat/grey colour filter and a lock pill "Asli"; the right half is graded, with "Preset". The split is the metaphor: same base, small change on top.
  2. Preset filmstrip: the same scene seven times through different colour matrices; #1 "asli" is outlined grey, #2 has the amber ring, the last one runs off the edge so the strip reads as scrollable.
  3. Centre-zero sliders = the items (label · track · value). The amber fill grows from the zero tick to the knob as a delta; same-unit numeric values scale the knobs, mixed values use a fixed pattern. Row 1 is the active adjustment. The `hl` word in the title is itself a before/after split: grey half | amber half with a cream handle line.

## 2-second hook
- **Frame 0 shows:** the cover still: the handle parked at the centre, the left half flat and grey, the right half graded, the sliders set.
- **Motion (0-2 s):** at 0.15 s the handle sweeps to x 90 (0.7 s, power3.inOut) and the whole warung turns graded. It then sweeps to x 990 (0.8 s), and the same picture is flat grey edge to edge. The scene never moves; only the clip line does. The active row value counts up while the photo is graded. On screen: the title only (≤ 7 words in the video version, e.g. "Model sama, cuma ganti preset.").
- **Why it stops the scroll:** a before/after wipe is a gesture everyone has done on their phone, and here it shows the "big" model never changing.
- **Hook type (docs/bank-hook-ending.md):** #6 Sebelum vs sesudah terbelah

## Loop ending
- **Last 1 s:** after the CTA (~85%), the handle glides back from the edge to the centre line, the filmstrip scrolls back to its first thumbnails (ring on #2), and every knob slides back to its frame-0 position.
- **Seam:** the last frame is frame 0 exactly (handle at x 540, strip offset 0, same knobs), and the handle's snap "click" at the centre is the same SFX as the first sweep. Ending types B (Frame kembali persis) + J (Ketukan musik). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90-990, y 1506-1616 (max 2 lines), Fira Sans Condensed 500 at 46 px (down to 40), cream on the sheet. Karaoke: the active word (`hl` if it is in the caption, else the first word) sits on an amber pill with dark `#121316` text, the same amber as the active preset ring. In the video the pill steps from word to word.

## Notes for the video build
- One beat per item: the row band jumps to row *i* (selection jump), its knob glides from the zero tick to the value while the digits lock, and the right half's grade gets one step stronger (animate filter strength, not the scene). Elements appear on the word that names them.
- Animate the split by tweening the two clipPath rects (x 540 ± d). Never redraw the scene. Camera: one punch-in on the filmstrip or on the active row at the payoff (e.g. "preset 4 KB vs foto 24 MB"), then hold ≥ 1.5 s. Self-host the 3 fonts. Nine filtered `<use>` copies are fine in a still; check render speed in the video.

## References
- https://arxiv.org/abs/2106.09685: LoRA freezes the pretrained weights and trains small low-rank add-ons (about 10,000x fewer trainable parameters). That is the frozen-photo-plus-preset relationship.
- https://m3.material.io/components/sliders/overview: slider anatomy (track, handle, value label) kept plain, so each adapter job reads as one row.
- https://en.wikipedia.org/wiki/Color_grading: a look applied on top of footage without reshooting it. The base stays, and the grade travels as a small file.
