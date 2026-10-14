# Band Formation (`band-formation`)

**Metaphor:** a printed marching-band drill chart, where every performer is a dot that moves set by set until the band spells a picture → diffusion image generation: the image starts as random scattered dots (noise), and each set is one denoising step that moves every dot a little closer, until the picture (a cat's head) reads.
**Series:** how-ai-works · ai-tools
**Axes:** light · grotesque · 2.5D · diagram

## Look
- **Palette:** `#F8F7F3` drill-sheet paper (card = lighter tint `#FFFEFA`) · `#141414` ink: performers, title, rules · `#B9C0C9` yard lines, 4-step grid, card row rules · `#E4572E` vermilion: title hl, tracked performer, pen circles, card header rule · `#2F5BD3` blue: the move from the previous set into this one
- **Fonts (Google Fonts):** Archivo 820 at wdth 84 % (title, split yard numbers) / Archivo 600 at wdth 92–94 % (card labels, caption) / JetBrains Mono 700–800 (cell labels, SET/HIT., values, set stops, note label, date)
- **Grid / layout:** margins x 90–990. Punched holes y 150 (decoration). **Title block** from y 300, 3 px ink outer rule: big PERTUNJUKAN cell (26 px mono label left, series right; title 112→72 px, ≤ 3 lines) over a strip of three cells (1.5 px rules): SET n/n · HITUNGAN 16 · HAL. ep; block ends ~y 650–710. **Field** bleeds x 0–1080 from block + 24 down to the front sideline (~y 1330–1390): yard lines every 225 px, dashed 4-step grid, hash ticks, ticked sidelines. The cat sits upper-right (centre x 645, ≤ 450 px, right edge ≤ 870), clearing the card's tilted top edge. **Dot-book card** x 96–716 (widens to ≤ 816 for long rows), rotated 2°, hanging ~34 px over the front sideline; rows 45–50 px. **Note line** (label + caption) x 90–900 above the footer; source/date bottom at y 1618.
- **Signature elements:**
  1. Ruled drill-sheet title block: the title is the show name, the set and counts sit in their own cells, and the hl word gets a company front (a rank of r 11 performer dots under it, ending in the vermilion tracked-performer ring).
  2. The chart: split yard numbers (4|5 ▸), hash ticks, grey SET-1 rings (the noise) under an ink cat formation. Only the eyes and nose carry blue strokes (one block move from the previous set). A vermilion tracked performer walks stops 1…n, and stop n is filled beside its ringed ear tip.
  3. A ring-bound dot-book card lying on the chart: SET | HIT. | label · value per set, an index-card vermilion header rule, the current set circled in vermilion pen. The same pen circle marks the active word on the "CATATAN SET n:" note line.

## 2-second hook
- **Frame 0 shows:** SET n−1, half-formed. The head outline (ears, crown, jaw) already stands in ink. The eyes and nose are still a loose clump lower-left inside the head, with blue strokes pointing where they will go. The ear-tip ring is still empty, and the tracked performer waits one stop short of it. The SET cell reads (n−1)/n. Title in the block, ≤ 7 words for the hook cut (e.g. "Gambar AI lahir dari acak.").
- **Motion (0–2 s):** at 0.4 s the band marches the final set. Counts are compressed on purpose: the HITUNGAN cell ticks 1→16 in ~1.2 s, so video time is not music time. The clump slides along its blue strokes into eyes and nose (straight tweens, ease-in-out, all together). The tracked performer steps into the ear ring, stop n stamps vermilion, and SET flips to n/n. The camera stays still.
- **Why it stops the scroll:** an almost-finished face made of dots makes the brain fill in the missing eyes before the band does.
- **Hook type (docs/bank-hook-ending.md):** #9 Detail misterius (revealed by the performers marching, not by a camera zoom)

## Loop ending
- **Last 1 s:** the final set holds (CTA said at ~85 %). Then the eyes and nose step back one set along their blue strokes into the loose clump, and the tracked performer steps back one stop. The SET cell and the circled card row return to n−1.
- **Seam:** ending D (Benda dibongkar balik): the last frame is exactly frame 0's half-formed SET n−1, so the opening march into the final set plays as the next set.

## Caption / voice-over
- **Slot:** `data-slot="caption"` on the drill writer's note line at x 90–900, about y 1430–1560, under a 28 px mono label "CATATAN SET n:" with ruled note lines. Archivo 600 at 46→40 px (the width axis narrows to 80 % for 90-character captions), ≤ 2 lines. Karaoke: spoken words ink, upcoming words ink at 72 %. The active word stays ink inside a hand-drawn vermilion pen ring (`D.hl` if it is in the caption, else the first word).

## Notes for the video build
- After the hook, the dots fly back out to the SET 1 scatter (forward noising, ~0.8 s). Then one beat = one set: the band marches on the word that names the set, that card row gets the pen circle, the SET and HITUNGAN cells update, and the blue strokes draw in for the move just made. The grey SET-1 rings never move.
- Camera = punctuation. One emphasis move in the whole piece: a slow pull-back from the tracked performer to the full chart at the set where the cat first reads, then hold ≥ 1.5 s.
- Risk: with a 3-line title and 5 sets the cat shrinks to ~320 px (still reads in the stress render). Keep the title to 2 lines when possible.

## References
- https://en.wikipedia.org/wiki/Dot_book — every performer is a numbered dot with a position and a count per set: motion written as a list of positions.
- https://en.wikipedia.org/wiki/Diffusion_model — generation as repeated small denoising steps from pure noise to an image.
- https://en.wikipedia.org/wiki/Marching_band — picture formations only read from above (the press-box view); the printed drill chart is that view, with the set and counts in its header.
