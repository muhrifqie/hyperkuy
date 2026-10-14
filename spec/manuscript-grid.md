# Manuscript Grid (`manuscript-grid`)

**Metaphor:** a clipped bundle of genko-yoshi manuscript paper. The text sits one character per square, and the tokenizer's cuts appear as brackets in the ruby band under each row → the token tax: the same sentence gets more brackets (tokens, each with an id) in Bahasa Indonesia than in English, because tokenizers learned mostly from English text. The squares are only the text. The cost is the bracket count.
**Series:** ai-in-numbers, how-ai-works
**Axes:** light · serif · 2.5D · physical-object

## Look
- **Palette:** `#F6F1E6` manuscript paper · `#C23B24` vermilion squares, brackets, kenten · `#222222` ink · `#3A62A8` blue pencil (paragraph numbers, ids, tally; chunk tints `#F3DACF`/`#DCE6F5`) · `#E6D9BE` kraft desk
- **Fonts (Google Fonts):** Zen Old Mincho 900/700 (title, caption, episode digits) / DM Mono 400–500 (squares, ids, tally, name line, source)
- **Grid / layout:** black binder clip x 432–648, y 103–302 (decoration above the safe zone). Front sheet x 50–1030, y 236–1688, with two identical sheets under it (0°, offset +6/+8 and +12/+16 px). There is no header row. Title y 322–≤662 (104→68 px, ≤3 lines). Name line 44 px under the title. Grid frame (double rule) x 88–≤752, y ≥530–≤1440 (8–16 columns, 49–74 px squares, 40 px ruby band, a blank line between items when it fits). Blue tally column runs frame+36 → x 900 (44→32 px, wraps at a space). The ※ source · date line sits under the frame. Caption y 1500–1616. Nothing sits at x > 900 between y 900 and 1500.
- **Signature elements:**
  1. Vermilion square strips with a blank ruby band under each. One character per square, a space is a blank square, and there are ruler ticks every 5 squares. This is the paper's own grid, the reason the world was chosen.
  2. Token brackets in the ruby band: one bracket and one illustrative id under each chunk, with chunk squares tinted vermilion/blue in turn. Labels without token breaks leave the band blank, as on real paper. Each item is a paragraph whose indent square holds its number, circled in blue pencil (genko-yoshi indents every paragraph one square). The value is the blue-pencil tally in the margin.
  3. Genko-yoshi conventions run the frame. The title's `hl` is written into squares. The name line (series + episode digits in squares) ends one square short of the grid's right edge, as an author's name does on line 2. The caption's active word gets kenten emphasis dots, and a binder clip holds the stack of identical sheets (2.5D).

## 2-second hook
- **Frame 0 shows:** title "Kalimat sama. Berapa token?". Row ① "I· want· to· eat" is already bracketed with its ids and its tally reads "4 token". Row ② "Saya· mau· mak·an" is written into its squares, but its ruby band is empty and its tally is a blue "?".
- **Motion (0–2 s):** the last letters of row ② type into their squares (60 ms each, type-on), then the "?" is drawn into its tally in blue pencil (0.4 s draw-on, ends at 1.4 s). Camera still.
- **Why it stops the scroll:** the viewer can count the English brackets and wants to guess their own language's count before the brackets appear.
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu. Payoff at about 45%: row ②'s brackets draw in one by one (0.15 s each, stroke-dashoffset), an id fades in under each, and the tally counts 1→5 and locks. The extra brackets after the EN count stops are the cost.

## Loop ending
- **Last 1 s:** the CTA lands at about 85%. Then row ②'s brackets lift off right to left (0.12 s each, stroke un-draw), their ids fade with them, and the tally counts back down and turns into "?" again.
- **Seam:** D, Benda dibongkar balik. The last frame is frame 0 exactly: row ① bracketed, row ② unbracketed, "?" in the tally. The sheets, clip and camera never move. The VO ends by asking the hook again ("…jadi, berapa token?").

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 92–988, y 1500–1616 (starts at y 1500, so it may run past x 900). Zen Old Mincho 700, 44→40 px, at most 2 lines; past that it is cut at a word boundary with "…", never cutting the active word. Karaoke: the active word is vermilion with one kenten dot above each letter. It is `hl` if spoken, else the first word.

## Notes for the video build
- Per beat: characters type into squares, brackets draw in, ids fade in, the tally counts and locks. Paragraph numbers are circled on the word that names the item. Camera is punctuation: at most one punch-in per scene, onto the ruby-band ids ("yang sebenarnya dibaca AI"), then hold ≥ 1.5 s.
- Data: mark token breaks with "·" and keep the spaces ("I· want· to"), because a token may start with a space as in real tokenizers. The ids are illustrative hashes. Use real tokenizer ids/counts, or keep "ilustrasi" on the ※ line.
- Risk: labels over 16 characters wrap to 3 rows. Values over 12 characters wrap at a space.

## References
- https://en.wikipedia.org/wiki/Genk%C5%8D_y%C5%8Dshi — one character per square, paragraphs indented one square, title on line 1 and author on line 2 at the bottom of the line.
- https://en.wikipedia.org/wiki/Emphasis_mark — kenten: dots beside each character mark emphasis in Japanese text (used for the active caption word).
- https://platform.openai.com/tokenizer — tokens shown as alternately tinted spans with ids (principle only, no assets).
