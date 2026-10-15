# Eye Chart (`eye-chart`)

**Metaphor:** A backlit optometrist's eye chart → benchmarks: every row is a harder test, and a model's score is the smallest row it can still read.
**Series:** ai-in-numbers | ai-news
**Axes:** light · grotesque · 2D · poster

## Look
- **Palette:** `#F7F6F2` clinic wall · `#121212` optotype ink / panel frame · `#C9302C` red line, pointer dot, caption block · `#2F5FB3` acuity chips · `#DDDAD2` panel shadow
- **Fonts (Google Fonts):** Archivo (900 optotypes, title) / IBM Plex Mono (labels, margins, caption)
- **Grid / layout:** kicker y 292–330; title y 348–~560 (Archivo 900, auto-fit 100→64, hl red underlined); chart panel x 90–990, y ~590–1470 (header strip, item rows + tumbling-E filler rows shrinking to unreadable); caption y 1490–1600; meta ≤1600.
- **Signature elements:**
  1. Rows of optotypes shrinking purely by type size — difficulty encoded as acuity
  2. Blue acuity chips in the right margin holding each item's value
  3. Black occluder paddle + red pointer wand aimed at the top row; red line under row 2

## 2-second hook
- **Frame 0 shows:** the full chart, pointer on the big top row, occluder parked at mid rows
- **Motion (0–2 s):** the pointer slides down row by row; at row 5 the optotypes blur soft (unreadable) — content-driven, ~350 ms per row
- **Why it stops the scroll:** the clinic ritual everyone has done, now ranking AI — guess-first tension
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu ("Sampai baris mana AI masih bisa baca?")

## Loop ending
- **Last 1 s:** the pointer travels back up to the top row, the blur lifts off the top optotypes
- **Seam:** ending **B — frame kembali persis**: occluder and pointer return to the exact frame-0 position

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–990, y ~1490–1600, IBM Plex Mono 600, 42 px, max 2 lines; active word = white knocked out of a filled `#C9302C` block.

## Notes for the video build
- Per row: optotypes land (type-on at reading size), chip counts its value; one highlight stroke on the failing row. Camera: single punch-in to the unreadable row, hold ≥1.5 s.
- Risk: keep tiny filler rows as SVG paths only — never live text below 26 px.

## References
- https://en.wikipedia.org/wiki/Snellen_chart — rows of shrinking optotypes with fractions in the margin: difficulty encoded purely by type size
- http://recent.design/i/mi01tni-paper-mono-font-site — type presented as an inspected specimen: the glyphs themselves are the object
