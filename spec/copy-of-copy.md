# Copy of Copy (`copy-of-copy`)

**Metaphor:** a shingled stack of five photocopies of one copy-log slip, each copied from the one before → model collapse: a model trained on AI output loses detail every generation, and the hook sentence itself visibly collapses down the ladder.
**Series:** ai-news · how-ai-works (use only for model collapse, AI trained on AI output, or summary-of-summary topics; on other topics the GEN ladder wrongly says "this degrades")
**Axes:** light · mono · 2.5D · physical-object

## Look
- **Palette:** `#E3DFD4` desk · `#F6F5F1` fresh paper (GEN 1; the copies' paper is computed from it, fogging toward grey) · `#111111` toner ink (type, rules, LCD, caption block) · `#8E8C85` copier grey (glass ruler, log row rules) · `#D3452C` red stamp ink (GEN stamps, `hl` frame, LCD lamp)
- **Fonts (Google Fonts):** Courier Prime 700/400 (title, log entries, LCD, stamps, caption) / Familjen Grotesk 700/600 (printed form labels: `LOG SALINAN`, `NO · ISI · NILAI`, `ASAL`, series label)
- **Grid / layout:** sheet edge x 92, type x 128. Glass ruler y 258–284 (decoration). Control panel y 300–354: series · ep left, black LCD `● SALINAN 05/05` right. Stack y ≈367–1490. GEN 1 (≈367–908, ~42% of the 470–1500 band) holds a header chip `LOG SALINAN` + No. + date, a boxed copy log `NO | ISI | NILAI` (3–5 rows, no dot leaders), then the title typed in Courier Prime 700 with `hl` in a tilted red stamp frame (fit 96→54 px, 2–3 lines; 70 px on both samples, 1.75× the caption), then a rule and an `ASAL:` source line in small print. GEN 2–5 are four strips (≥120 px, ≈145 on the samples) under it. Each strip shows the foot of its copy: the title's last line plus the source line. Caption y 1512–1612.
- **Signature elements:**
  1. The collapsing hook line. The title's last line appears five times, and each copy is rendered from the previous canvas: grey optics, resolution loss, blur, skew, toner curve, fog, dust, drum streaks and auto-exposure. The red frame turns grey at GEN 2 and is gone by GEN 4. The small source print dies first (the rare tails go first) and the big type goes last.
  2. Red `GEN n` stamps with a big digit. Each stamp lands on the previous stamp's ghost (7 px nudge, about 1° turn), so older stamps show only as a dark toner sliver, never as a second number.
  3. Copier hardware cues: the glass ruler, the LCD copy counter and a fax-style transmit header (`14/10 P.01 |`) in front of the caption.

## 2-second hook
- **Frame 0 shows:** the full ladder as in the still. GEN 1 sits on top with the crisp typed hook line, GEN 5 at the bottom carries the same line as a smear, and the LCD reads 05/05.
- **Motion (0–2 s):** the copier light bar (a thin bright band) sweeps down the stack once, 0.2–1.4 s, ease-in-out. As it crosses each strip, that strip's stamp gives one small thump (scale 1.06→1, 120 ms) and the LCD ticks 01→05 in sync. Nothing else moves.
- **Why it stops the scroll:** the same sentence goes from sharp to unreadable in one glance, before any explanation.
- **Hook type (docs/bank-hook-ending.md):** #6 Sebelum vs sesudah terbelah (GEN 1 against GEN 5 in one frame)

## Loop ending
- **Last 1 s:** after the CTA, strips GEN 2–4 (pulled aside during the explainer) slide back into the shingled ladder from bottom to top. The light bar parks at the top edge of GEN 1 and the LCD reads 05/05 again.
- **Seam:** the last frame is frame 0 (ending B). The VO's last line asks the hook again: "…jadi, AI belajar dari AI. Hasilnya?" (C).

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 92–988, anchored to the bottom at y 1612 (1–2 lines, so it starts at y 1512 or 1562). Courier Prime 700 40/50 px `#111111`, after a weight-400 transmit header `dd/mm P.01 |` built from `D.date`. Karaoke: the active word is a solid toner block (`#F6F5F1` on `#111111`). It is `hl` when `hl` is in the caption, otherwise the first word. A longer line is cut to a chunk ending in "…".

## Notes for the video build
- Compute the 4 copies once at load (deterministic hash noise, about 100 ms each) and animate only transforms and opacity. The log rows are already readable at frame 0. On the word that names a row, a red tick appears in its NO cell, so nothing types on.
- The camera stays still. There is one emphasis move for the whole piece: a slow punch-in on the GEN 5 strip at "nggak kebaca lagi", held ≥1.5 s, then a cut (never zoom back out).
- The layout solver shrinks the title before it shrinks the ladder. With a very long title and 5 rows, the source moves under the log and the strips keep only the title line. The title can then drop to 54 px, which is still the largest text.

## References
- https://en.wikipedia.org/wiki/Generation_loss — every re-copy adds distortion and the loss compounds. Here each sheet is literally rendered from the previous one.
- https://www.nature.com/articles/s41586-024-07566-y — model collapse: the rare "tails" vanish first. Here the small source print dies before the big hook line.
- https://en.wikipedia.org/wiki/Photocopier — mono optics turn red into grey, the copier suppresses the background, and drum scratches repeat at the same x. These became the stamp ghosts, the auto-exposure and the streaks.
