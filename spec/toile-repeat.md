# Toile Repeat (`toile-repeat`)

**Metaphor:** a one-ink toile wallpaper where every drop repeats the same pastoral vignette, but in one repeat the sheep is black → anomaly detection: the AI learns the repeat so well that one small break in the pattern (a fraud payment, a factory defect) jumps out at once.
**Series:** how-ai-works · ai-tools. Best for outlier and anomaly topics (fraud, defects, "which one is different"); other topics still work, but no row is then accused (see notes).
**Axes:** pastel · serif · 2.5D · abstract

## Look
- **Palette:** `#F2DFD8` blush wallpaper ground · `#2F3E73` indigo one-ink: print, all text, active caption block · `#C64B3B` vermilion: rings, outlier tag and leader (darkened to `#B4402F` for small red text) · `#FBF5F0` cream: roll label, tags, border strip · `#E3CBC1` plaster under the peeling corner
- **Fonts (Google Fonts):** Baskervville 700 / 600 italic, lining figures (title, `hl`, tag values; Baskerville is the 1760s face of the toile era) / Public Sans 500–800 (meta, tag labels, caption)
- **Grid / layout:** full-bleed wall of 500 px drops (seams x 500, 1000) in a half-drop repeat. Roll label x 90–990 from y 300: meta row (series · Motif No. ep zero-padded, date right), title 128→72 px fit (≤ 4 lines; the `hl` line gets 0.14em extra leading), source under a rule; ends ≈ y 710–900. Tag cascade in the band label+34 → strip−26: sheep anchors zigzag x 220 / x 720, tags A x 90–495, B x 515–900, spacing adapts to 3–5 items (title shrinks first). Caption strip x 90–900, bottom y 1606.
- **Signature elements:**
  1. The repeat itself: tree, thatched cottage, fence, birds, sheep on a hatched island, engraved in one indigo ink; butt seams, 7 px misregistration between drops, a corner peeling off the plaster. This is "the pattern the model learned".
  2. The black sheep, ringed by two loose vermilion passes. It sits in the flagged repeat only when the data has a real outlier (`D.anomaly`, else a unique `hl` hit, a numeric outlier, or a clear unique max in one unit). Otherwise every tag stays indigo and the black sheep sits in the untagged repeat after the last tag. The title `hl` (vermilion italic, inline-block with its own side room) wears the same loop, sized from the glyphs so it never touches the neighbouring words or lines.
  3. Inspection tags hung by pin and leader under each item's repeat: label / value, index 01–05 and a sheep glyph (solid + red tag only for a real outlier). The label has notched corners and a double rule; the caption runs on a wallpaper border strip with a scallop frieze.

## 2-second hook
- **Frame 0 shows:** the calm repeat with the black sheep already black in plain sight (it never "fills"), no sheep ring, no pins, no tags; the roll label with the real `D.title` (and its `hl` loop, static all video); in the meta row's date slot a stamped vermilion tick "KETEMU? 3"; the empty border strip.
- **Motion (0–2 s):** only the tick (3 → 2 → 1 at 0 / 0.6 / 1.2 s, each digit stamped in place) and 2–3 pins dropping onto white sheep as decoys (from 0.4 s, 0.3 s ease-out, 150 ms stagger). Camera still, wallpaper never moves. The date stamps over the tick at ~2 s.
- **Why it stops the scroll:** spot-the-difference is an instinct; the viewer scans the wall for the odd sheep while the pins point the wrong way.
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu. The ring draws only at the outlier beat (~55–65% of runtime), so the guess is paid off before 70%.

## Loop ending
- **Last 1 s:** after the CTA (~85%), tags slide back up their leaders into the pins (reverse stagger, 90 ms), leaders and the sheep ring un-draw, the caption strip clears; in the last 0.3 s the pins lift off and the date slot re-stamps "KETEMU? 3".
- **Seam:** the last frame = frame 0: same label and title loop, black sheep in plain sight, no pins, tags or sheep ring, tick at 3. Only the tick, pins, ring and tags ever move, so the cut is invisible → ending **B** (Frame kembali persis). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` inside the border strip, x 120–870, bottom y 1606 (≈ y 1430–1606), Public Sans 600 46→40 px fit, balanced 1–2 lines (a 80–90-char caption falls to 3 lines at 40 px); karaoke: active word = cream on an indigo block (800). Active = `hl` if it is in the caption, else the first word.

## Notes for the video build
- One beat per item: its pin is in place (decoy) or drops, the leader draws down, the tag slides down it and settles without swinging, the value counts and locks. Outlier beat (~55–65%): the ring draws round the black sheep (stroke-dashoffset, 0.45 s, second pass 80 ms behind); with a real outlier its pin and red tag land on the word that names it, otherwise the VO names the break and no tag turns red. The still = the state just after this beat.
- Camera = punctuation: one punch-in on the black sheep at the outlier beat, hold ≥ 1.5 s, then a sheet slide (not a zoom-out) to the caption strip. Data: `D.anomaly` = item index, or `false` / `-1` to force "no outlier".
- Risks: never scroll the wallpaper (screensaver); keep hatching ≥ 1 px against moiré; the ring stays a hand-inked loop, never a HUD reticle; scores are illustrative, so the source line must say so. Extreme stress (60-char title + 5 items + 3-line caption) packs the cascade tight: tags brush the next sheep and the ring flattens.

## References
- https://www.stashmedia.tv/?p=80899 — White Lotus titles: idyllic wallpaper repeats hide unsettling details; physical seams and misregistration sell the material.
- https://en.wikipedia.org/wiki/Toile — toile = single-colour pastoral scenes repeated on an off-white ground; one ink, engraved hatching for tone.
