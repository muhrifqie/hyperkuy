# Copybook Line (`copybook-line`)

**Metaphor:** an Indonesian *buku halus* page (teacher's printed model lines on top, the pupil copies below in pencil) → few-shot prompting: give the AI two or three worked examples and it continues in exactly that pattern.
**Series:** ai-tools · how-ai-works
**Axes:** pastel · grotesque · 2D · diagram

## Look
- **Palette:** `#F7F1E4` copybook paper · `#9CB8D9` four-line ruling · `#E59A9A` double margin · `#2C3550` printed ink (+ graphite tint `#4E5467` for the AI's pencil) · `#B53D27` teacher's red pen
- **Fonts (Google Fonts):** Work Sans 800 (title) / Work Sans 500–700 (caption, labels, meta) / Playwrite ES (school joined cursive for the copy lines and the "No." field; chosen over Playwrite ID because its capital I does not read as J)
- **Grid / layout:** 90 px side margins. Header y 288–340 (series caps left, "No. __" field right with the episode number written in). Title y 362 to ≤ 662 (118→72 px, balanced lines). Ruled block from max(660, title + 70) down to caption − 40 (about y 660–1440): double header rule, pink margin at x 176/183, text column x 204–896. Caption bottom-anchored above the foot (about y 1450–1560), foot meta y ~1585–1618.
- **Signature elements:**
  1. Four-line school ruling measured from the cursive's real glyph metrics (ascender, dashed x-height band, baseline, descender), so every copy line sits in its ruling like a real *buku halus*.
  2. Model lines vs copy: items 1…n−1 in printed navy ink, grouped by a printed margin bracket "n CONTOH"; the last item is the AI's line in grainy graphite, same hand, same "input → output" pattern.
  3. The AI's pencil (stamped "AI") still resting on the end of its line, the teacher's red tick in the margin, and empty rows below with dotted "…… → ……" slots: the pattern can go on forever.

## 2-second hook
- **Frame 0 shows:** the page with the printed model lines already in place, the AI row empty (dotted slot only) and the pencil poised at its start; on screen: "Baris terakhir, tebak isinya?"
- **Motion (0–2 s):** hold 0.4 s, then the pencil writes the AI line left to right (stroke reveal of the cursive, pencil tip tracking the end, ~1.2 s, ease-in-out), arrow first pause, value last; the red tick snaps in at ~1.8 s (the only overshoot, on the tick).
- **Why it stops the scroll:** everyone did this in SD; the viewer instinctively predicts the line before the pencil finishes it, which is exactly what the AI does.
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu

## Loop ending
- **Last 1 s:** after the CTA, the page turns (sheet slide, page curls left out of frame) to a fresh page: same printed model lines, empty AI row, pencil lifted back to the start of that row.
- **Seam:** ending F (kursor kembali ke kotak kosong): the pencil back at the empty row = frame 0, same composition and ruling positions, so the guess question plays again without a cut.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–900, bottom-anchored just above the source/date line (about y 1450–1560), 44 px Work Sans 500 (shrinks to 40 px; past two lines it shows a window of words around the active one). Active word: Work Sans 700 in teacher red `#B53D27` with a 5 px red underline (same pen as the title's `hl`).

## Notes for the video build
- One example line writes in per beat (printed lines can fade-print in, the AI line always writes in pencil); the bracket "CONTOH" counter ticks up as each example lands. Each empty slot fills on the word that names it.
- Camera = punctuation: one slow push to the AI line when the pencil writes (max 1 emphasis move per scene), otherwise still. The pencil and tick carry the life.
- Risk: long items shrink the cursive (width-limited to x 896); keep each item ≤ ~28 characters for phone legibility.

## References
- https://en.wikipedia.org/wiki/Copybook_(education) — a printed model at the top, the rest of the page empty rules; the learner repeats the model down the page.
- https://fonts.google.com/specimen/Playwrite+ES — a national school handwriting model; the four-line ruling is derived from the model hand's own proportions, not drawn at arbitrary spacing.
