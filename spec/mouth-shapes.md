# Mouth Shapes (`mouth-shapes`)

**Metaphor:** an animator's mouth chart (nine inked visemes) under its read dialogue track → AI dubbing and talking avatars: speech is cut into sounds, each sound maps to one of a few mouth shapes, and the face is re-animated to match the new language.
**Series:** ai-tools (also fits how-ai-works)
**Axes:** pastel · serif · 2D · diagram

## Look
- **Palette:** `#F6DCC8` peach animation paper · `#1C1C1C` ink (lips, mouth openings, waveform, all text) · `#2C5DA8` blue non-photo pencil (construction lines, grid, track baseline) · `#C63F28` red pencil (phoneme cuts, rings, key numbers, hl, tongues) · `#FFF8EE` cream key-pose paint + teeth
- **Fonts (Google Fonts):** Alegreya SC 800/700 (lettered title, field labels, track phonemes, legends) / Alegreya italic 500-700 (viseme tags, item labels, field values, caption) / Alegreya 800 (values, key numbers); lining figures
- **Grid / layout:** one sheet column x 72-918, centred on the 3×3 grid x 90-900 (the right margin is left to the app buttons). Dialogue track y 84-290 (decor: waveform y 84-190, phoneme letters y 192-232, tiny mouths y ~250-290) · chart frame from y 316; its top band is the title block: PROD / LEMBAR corner fields y 334-372, centred title from y 392 (100→68 px, ≤ 2 lines, 3 lines only at ≤ 84 px, balanced wrap), double rule · cells 270 px wide, rows ≈ 255-275 px · frame bottom ≤ 1436 with the legends "Bagan 9 bentuk mulut" / "n pose kunci" (30 px) on its bottom rule · caption bottom-aligned at y 1556 · source/date y 1584-1616 · bottom 300 px left empty.
- **Signature elements:**
  1. The dialogue track: a pencil waveform of one spoken word (the `hl` word, else the longest title word) cut by red phoneme ticks; each phoneme is lettered and drawn underneath as the tiny mouth it uses: the word as a dubbing model sees it.
  2. The nine-mouth chart (M·B·P, A, I·E, O, U·W, F·V, L, K·S·T, diam): hard-coded SVG lips over blue construction ellipses, fixed order, so every episode is the same studio sheet.
  3. Items as key poses in reading order: item i always takes a later cell than item i-1 (keys read 1..n left→right, top→bottom), on a mouth one of its letters uses when the order allows (exact DP, first sound preferred). That cell gets cream paint, a two-pass red pencil ring clear of the tag and a red key number, with label + value under it. `hl` in the title is red and underlined with the same red phoneme cuts as the track.

## 2-second hook
- **Frame 0 shows:** the track reading "MAKAN" (M A K A N + its 5 tiny mouths) above the full chart, title "Ini yang dilihat AI dubbing" (5 words), only M·B·P ringed red.
- **Motion (0-2 s):** at 0.3 s a red playhead scrubs the waveform left→right (0.3-1.8 s, linear, locked to the VO "makan"). At each phoneme the ring hops to its cell by strict first sound (M·B·P → A → K·S·T → A → K·S·T, 80 ms paint-in, no bounce) and the tiny mouth under the letter fills cream. Camera still.
- **Why it stops the scroll:** a word everyone says turns into five drawings in under two seconds, showing the hidden layer of a dubbed video.
- **Hook type (docs/bank-hook-ending.md):** #7 Yang sebenarnya dilihat AI.

## Loop ending
- **Last 1 s:** the VO says "makan" once more, the playhead runs the track again, and the lips close after the final N. The ring settles back on M·B·P, the other cells return to bare line drawings and the playhead sits at the track start.
- **Seam:** last frame = frame 0 (playhead at start, only M·B·P ringed) and the closing lip-pop is the same SFX as the 0.3 s pop → ending **B** (frame kembali persis) + **J** (ketukan/SFX). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90-900, bottom-aligned at y 1556 (~1440-1556), Alegreya italic 46 px (→ 40), 1-2 lines, cut with "…" after the active word if longer. Active word (`hl` if in the caption, else the first word): bold inside a red pencil ellipse, the same mark as a key-pose ring.

## Notes for the video build
- Beats: blue construction draws in, then the ink lips. Each item's ring + number lands on the word that names it, in key order 1..n. Mouths lip-sync to the VO only by swapping the ringed cell, never by wobbling.
- Camera = punctuation: still by default; one punch-in to the ringed cell on "satu bentuk, banyak bunyi", hold ≥ 1.5 s, no zoom straight back out.
- Risks: keep the playhead locked to the VO syllables, or the ring reads as random blinking. When all the labels share one sound (e.g. five K/S/T words), one item sits on a mouth it does not use, because reading order wins over phonetics.

## References
- https://en.wikipedia.org/wiki/Viseme — several phonemes share one visible mouth shape, so a small set covers speech.
- https://github.com/DanielSWolf/rhubarb-lip-sync — automatic lip-sync maps recorded audio to a fixed set of ~9 lettered mouth shapes.
- https://en.wikipedia.org/wiki/Lip_sync — in animation, dialogue is read off the track into sounds and keyed to mouth drawings frame by frame.
