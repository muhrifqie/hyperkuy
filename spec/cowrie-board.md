# Cowrie Board (`cowrie-board`)

**Metaphor:** A carved boat-shaped congklak board in low 3/4 perspective on linen → self-play reinforcement learning: the AI plays both sides against itself, keeps what wins, improves without copying human games.
**Series:** how-ai-works | ai-in-numbers
**Axes:** light · serif · 3D · physical-object

## Look
- **Palette:** `#E9E1D2` linen · `#7A4B2A` carved wood · `#B47C48` rim + label tan · `#F2E9D7` cup cream · `#2C3F8F` winner's store blue
- **Fonts (Google Fonts):** Fraunces (title, italic hl) / Instrument Sans (labels, values, caption)
- **Grid / layout:** kicker y 296; title y 348–~560; board y ~620–1425 (far row y ~870, near row y ~1070, stores at both ends); engraved value/label cells y ~1200–1400; caption ~1500–1616; source/date y 1660
- **Signature elements:**
  1. Boat-shaped board with 2×7 cups: far + near rows of cream cups with scattered cowries (fixed offset table, no randomness)
  2. The blue store at the right, full of shells — the side that wins at self-play; the cream store left nearly empty
  3. Item cups pulled forward with blue rims; engraved value + small-caps label cells aligned under them in columns

## 2-second hook
- **Frame 0 shows:** both stores visible — one empty, one full — a hand mid-sow
- **Motion (0–2 s):** shells sow cup to cup while the two sides swap colour tint each turn and a game counter races
- **Why it stops the scroll:** "berapa jam sampai jago?" — a familiar game with an unfamiliar player on both sides
- **Hook type (docs/bank-hook-ending.md):** #5 tebak dulu (answer paid with AlphaZero ≈ 9 jam, sourced on screen)

## Loop ending
- **Last 1 s:** the shells are scooped back into the starting cups, seven each
- **Seam:** ending D benda dibongkar balik — the exact opening position of frame 0

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–940, y ~1495–1616, 44 px Instrument Sans; karaoke active word = cream-on-blue knockout

## Notes for the video build
- Beats: sow shell by shell → tint swap per turn → counter race → pay off "9 jam" before 70%; camera = one pull-back to reveal the full board
- Risk: value/label cells are width-limited — long strings ellipsize; keep item values ≤ ~12 chars for clean cells

## References
- https://en.wikipedia.org/wiki/Congklak — boat-shaped board, 2×7 cups plus two stores, 98 shells, sown one per cup
- https://en.wikipedia.org/wiki/AlphaZero — learned purely by self-play; chess training about 9 hours (the citable on-screen number)
