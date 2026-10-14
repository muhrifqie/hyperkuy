# Scout Cipher (`scout-cipher`)

**Metaphor:** a pos-rally clue card (kartu soal pos penjelajahan) with a sandi kotak key and solved code pairs → few-shot prompting: from a few solved examples you infer the rule and crack the next code yourself, no rulebook needed.
**Series:** ai-tools · how-ai-works
**Axes:** pastel · condensed · 2.5D · code

## Look
- **Palette:** `#CBDCE3` pastel morning sky · `#F0DFA4` manila karton card · `#232019` marker ink (title, glyphs, key) · `#A62B23` scout red (stamp, highlight + rumput, token ticks, answer box, caption loop) · `#9B6B3D` tongkat wood / jute rope
- **Fonts (Google Fonts):** Big Shoulders Stencil Display 900 (stencilled caps title) / Kalam 700 (pencilled words + caption), Caveat 700 (pencilled answers) / Courier Prime 700/400 (stamp, key letters, printed form labels, meta, source)
- **Grid / layout:** manila card x 118–996, y 196–1690, hung straight on a scale-marked tongkat (x 30–92, full height) by two rope lashings through brass grommets: the top one (y 200–300) ends in a knot and a whipped tail lying across the card top (x 150–560); the bottom tail hangs to y 1880. Stamp "SOAL POS <ep>" + series/date y 300–372. Title x 176–960 from y 386, 96–124 px. KEY below the title (cells 52–84 px, legend to its right). Table SANDI | JAWAB x 162–880 (divider x 648) fills down to the caption. Caption y ≈ 1440–1557, source ≤ 1604. Every text below y 900 stays at x ≤ 900.
- **Signature elements:**
  1. The sandi kotak KEY drawn big in marker: # grid A–I with red •J–R, X grid S–V with red •W–Z, legend "• titik = merah". Every glyph on the card is generated from this key (real pigpen, not decoration).
  2. The decode table: each row is the label written in sandi kotak, with one glyph pitch for all rows. Strips wrap and never truncate, and a red tick marks a token/syllable break. The decoded word is pencilled under each strip and the answer in the JAWAB cell. Puzzle row: the decoded word on a strip of masking tape, the answer in a double red sketch box. Dense data switches to "wide" rows: the code strip runs across the table, with the answer cells under it.
  3. The title highlight in red, underlined with sandi rumput: each Morse symbol is its own grass blade (dot short, dash tall with a curved tip) on a straight ground line, spelling `hl`. A long multi-word highlight spells only its first word, at ≤ ~60% of the highlight width.

## 2-second hook
- **Frame 0 shows:** the card, with the puzzle row's tape strip blank and its red box empty. The glyphs are already drawn, so the thumbnail shows the code. Caption slot reads `Tebak: <last label> = ?` (built from data, ≤ 7 words, e.g. "Tebak: ng·arang = ?").
- **Motion (0–2 s):** 0.2–1.0 s a red pencil-grain tick runs under the puzzle glyphs one by one (left→right, 80 ms stagger). 1.0–1.6 s the empty red box re-sketches itself twice (stroke draw-in 0.25 s each, ease-out). All motion stays in x 176–880. No camera.
- **Why it stops the scroll:** every Indonesian ex-scout has cracked a sandi at a pos. The solved rows give the rule away (count the red ticks: 2 chunks = 2 tokens), so the viewer solves the puzzle before the voice does. That is few-shot happening in their own head.
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu.

## Loop ending
- **Last 1 s:** after the CTA (~85%), two eraser strokes run left→right across the puzzle row. They wipe the pencilled word off the tape and the red answer out of the box, and the caption returns to `Tebak: <last label> = ?`.
- **Seam:** ending C (question asked again) on B (frame returns exactly). The glyphs stay drawn at both ends; the last frame has a blank tape strip, an empty box outline and the same question, which is frame 0. The 0.2 s tick run continues the eraser's left→right direction, so nothing pops.

## Caption / voice-over
- **Slot:** `data-slot="caption"` is the card's printed "PETUNJUK:" line, x 176–900, bottom-anchored at y ≈ 1557, Kalam 700 at 46→40 px, ≤ 2 lines on dotted writing lines. The label moves above the caption only if that saves a line. Karaoke: the active word (`hl` if it is in the caption, else the first word) is ringed by a red-pencil loop; the other words stay ink.

## Notes for the video build
- One beat per row: the glyphs draw stroke by stroke → the word pencils in under them → the answer writes in (mask wipe). The tape and red box stay blank until the payoff (≤ 60%). The still/cover is that solved state; frame 0 differs only by the blank tape, the empty box and the hook caption.
- Camera is punctuation: one punch-in on the puzzle row at the payoff, then hold ≥ 1.5 s. The rope, staff and card never wobble.
- Risk: at the contract extreme (60-char title + 5 rows of 16-char labels + 90-char caption), the title steps down to 84 px and the key goes compact (primary letters, dot rule in the legend) or steps aside. Glyph pitch never drops below 42 px and labels never below 38 px.

## References
- https://www.ruangguru.com/blog/macam-macam-sandi-pramuka-contohnya — sandi rumput draws Morse as short and tall grass; sandi kotak places letters by grid position: code that is also a drawing.
- https://www.antaranews.com/berita/4249951/15-sandi-dalam-pramuka — a national repertoire of ciphers every scout learns, so the audience recognises the key at once.
- https://en.wikipedia.org/wiki/Pigpen_cipher — a letter is the shape of its grid cell, and a dot doubles the alphabet. Only the glyph logic is taken.
