# Dry Transfer (`dry-transfer`)

**Metaphor:** a half-used rub-down lettering sheet ("huruf gosok") with a burnisher resting on it → tokenizer frequency: common pieces ("nya", "kan", "ber") get their own token because they are used all the time, so on the sheet they are the ones that run out first.
**Series:** how-ai-works, ai-in-numbers
**Axes:** pastel · grotesque · 2D · data

## Look
- **Palette:** `#E7E4F0` artwork paper (background) · `#1E1E24` ink: transfer letters, title, tallies · `#D6CFE6` carrier film + caption chip · `#E26D3D` burnisher handle, token cut dots, next-piece bar (hl text tint `#C24D1C`) · `#4A5BA8` spacing-guide bars, perforation, sheet print (text tint `#3D4B94`)
- **Fonts (Google Fonts):** Schibsted Grotesk 800 (title) / Schibsted Grotesk 700 (transfer pieces), 500 (caption, source) / IBM Plex Mono 500-600 (kicker, sheet print, row codes, tallies)
- **Grid / layout:** 90 px margins. Kicker + date y 296-332 · title y 352 to ≤ 642 (fit 128→72 px, ≤ 290 px tall, ≤ 252 with 5 items) on pencil baselines · sheet x 44-1036, y max(title + 40, 600)-1452: print header (70 px), one row per item (row code x 92, pieces from x 150, dashed perforation, tally right-aligned at x 896; 1-2 stock lines per row, letter size S fitted and ≤ 0.8 × title), rules strip (132 px) under the burnisher, source in the footer margin · spare-punctuation column x 960-1000 (decoration only, in the button zone) · caption y ≈ 1482-1598 · frosted tape + crop marks in the top/bottom 300 px (decoration only).
- **Signature elements:**
  1. Rows of rub-down pieces: the label split at "·" into tokens with orange dotted cut lines, each piece on a blue spacing-guide bar. Used stock is a frosted window with burnisher scribble and its guide bar left behind. The empty slots are the chart; the tally at the row end is the value.
  2. The burnisher (steel tip, knurled collar, orange handle) resting across a strip of transfer rules, with a soft shadow. It is the tool that makes every hole.
  3. The title is lettering already rubbed onto the paper (non-photo-blue pencil baselines). `hl` is the freshly rubbed piece: orange letters that still carry their guide bars. A peeled film corner shows the backing.

## 2-second hook
- **Frame 0 shows:** the half-used sheet with the burnisher at rest; the next piece in row 01 already carries the orange guide bar. On screen: "Potongan mana paling cepat habis?" (5 words).
- **Motion (0-2 s):** 0.3 s the burnisher lifts (shadow tightens) and glides to the orange-barred piece (power2.inOut, 0.3 s). 0.6-1.2 s: three short rub strokes, the white scribble draws in (stroke-dashoffset) and the black piece greys. 1.3 s: the film lifts 6 px and settles, the piece stays on the paper, and the slot becomes a frosted hole. 1.5 s: the row tally does a count & lock. The camera stays still.
- **Why it stops the scroll:** "huruf gosok" is a school/stationery object Indonesians remember; a letter physically peeling off is tactile and satisfying, and the question makes viewers scan the rows to guess.
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu

## Loop ending
- **Last 1 s:** after the CTA (~85%), every rub made in the video rewinds in reverse order (0.8 s): the pieces lift off the paper and snap back into their holes, the scribble un-draws, and the burnisher slides back to its resting angle on the rules strip.
- **Seam:** the last frame is frame 0 exactly (same holes, same orange-barred piece, same burnisher angle), and the closing VO asks the hook again: "…jadi, potongan mana yang paling cepat habis?". Ending types D (Benda dibongkar balik) + C (Pertanyaan diulang). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90-900, y ≈ 1482-1598 (sheet bottom + 30, max 2 lines), Schibsted Grotesk 500 at 46 px (down to 40). Spoken words are ink, upcoming words `#565269`. Karaoke: the active word (`hl` if it is in the caption, else the first word) is bold ink on a film chip `#D6CFE6` with an orange inset guide bar, like a piece mid-transfer. In the video, pre-measure the word positions so the chip steps without reflowing the line.

## Notes for the video build
- One beat per item: the burnisher glides to row *i* on the word that names it, rubs one stock piece (scribble draws, piece lifts, hole opens) and the tally counts up. Rows and holes never wobble, and the burnisher only moves when it works.
- Camera: still by default. One punch-in to the most-used row at the payoff, then hold for ≥ 1.5 s. Self-host both fonts. Piece positions depend on the font metrics, so wait for fonts. Cache the sheet drop-shadow as a static layer.

## References
- https://en.wikipedia.org/wiki/Dry_transfer — rub the carrier with a stylus and the letter grips the paper; every use leaves a visible gap on the sheet, so the gaps record what was used.
- https://huggingface.co/learn/nlp-course/chapter6/5 — BPE merges the most frequent pairs first, so frequent pieces become single tokens (the frequency → own-piece logic).
- https://en.wikipedia.org/wiki/Non-photo_blue — paste-up guides drawn in a blue the camera ignores; used for the title's pencil baselines.
