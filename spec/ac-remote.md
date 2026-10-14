# AC Remote (`ac-remote`)

**Metaphor:** a top-down bed flat-lay: an AC remote pins a torn answer printout, and answer slips P1..Pn fan out from under it → sampling temperature: the remote picks which answer slip gets used. ▼ cold = always the top slip (P1), ▲ warm = it starts picking lower, riskier slips. The Indonesian pun on "suhu" does the explaining.
**Series:** how-ai-works
**Axes:** pastel · condensed · 3D · physical-object

## Look
- **Palette:** `#DCE6F2` bedsheet · `#FBFBF8` paper, remote plastic, key caps · `#2A3140` ink: text, LCD segments, IR window · `#E8673C` warm: ▲, power ring, lit key LED, title marker swash (text tint `#B9431B`) · `#3D74E0` cool: ▼, snowflake, P1 tag (fill tint `#2F62C8`)
- **Fonts (Google Fonts):** Saira Condensed 600-700 (title, slip labels, keys) / Saira Semi Condensed 500 (caption) / IBM Plex Mono 500-600 (header tag, date, source, slip values, P-tags)
- **Grid / layout:** 90 px margins, all text on an object except the caption. Pillow seen from above y 0-256 (decor). Title printout x 40-1040, y ≈290-780, tilted -2°: mono header row y ≈330-394, title from y ≈394 (fit 116→78 px, ≤ 262 px tall), source footer right-aligned beside the remote. Remote x ≈22-518, rotated -14°, top 26 px under the title's last line, bottom ≤ 1436 (scale ≈0.93, adapts). Slips: paper x ≈330-972, text from the remote's edge + 30 px to x 900, y from under the printout to the caption top − 34 (≈1454). Caption y 1490-1606 (never below 1618).
- **Signature elements:**
  1. The title printout: the largest answer slip, torn top and bottom, with a mono header row (kicker as a bordered tag like the P-tags, date right), the title in ink, `hl` in warm ink with a hand-drawn orange marker swash under each line fragment, and the source as its footer line.
  2. The remote as a real CSS 3D slab (18 extrusion layers, smoked IR window, cast shadow over paper) whose IR end lies across the printout's lower-left corner. Its LCD is only the selector: seven-segment `P1` plus a smaller `/n` (from items.length) with ghost segments and the snowflake lit; preset keys 1..n, key 1 pressed and lit.
  3. Answer slips P1..Pn fanned from under the remote's right edge (each text column starts just right of the remote outline, alternating -2.6…+2.2° tilts). The P1 tag is filled cool blue with a snowflake (= the cold pick). Fit: margins, then value and label shrink (labels ≥ 30 px; values ≥ 40 px, smaller only for one unbreakable over-long chunk). Text wraps only at spaces and only before a new number group, so "95 token/detik" and "RATA-RATA" never split. If it is still too tall, the slips overlap like a pile so every header and value row stays visible.

## 2-second hook
- **Frame 0 shows:** the full flat-lay; the LCD reads `P1` with the snowflake, and slip P1 (blue tag) sits on top. Printout title: "AI juga punya suhu..."
- **Motion (0-2 s):** at 0.2 s ▲ is pressed (the key travels 5 px in 90 ms, power2.out, beep; no drawn hand). Three more presses follow at 0.3 s intervals. The snowflake swaps to the sun on the first one, and the LCD digits lock `P1 → P3 → P2 → P4` (no scramble). On each press the picked slip slides 24 px out from under the remote and the previous one slides back. The camera stays still.
- **Why it stops the scroll:** everyone knows this remote, and watching "suhu" change which answer gets picked is an odd pairing viewers want explained.
- **Hook type (docs/bank-hook-ending.md):** #12 Kalimat menggantung (the printout's sentence is left open)

## Loop ending
- **Last 1 s:** after the CTA (~85%), ▼ is pressed in quick steps; the sun swaps back to the snowflake, the LCD locks back to `P1`, and slip P1 slides back to its frame-0 spot.
- **Seam:** the last frame is frame 0 exactly (same LCD, icon, slip positions), and the closing beep is the same SFX as the first ▲ press. Ending types B (Frame kembali persis) + J (Ketukan musik). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90-900, y 1490-1606 (2 lines, bottom-anchored ≤ 1618 if a long line needs 3), on the sheet under a fold, z above the slips. Saira Semi Condensed 500 at 46 px (down to 40). Karaoke: the active word (`hl` if it is in the caption, else the first word) sits on a raised white key cap in warm text `#B9431B`, and the key cap steps from word to word in the video.

## Notes for the video build
- One beat per item: press preset key *i* → the LCD locks to `Pi` and slip P*i* slides out on the word that names it. The printout and the remote never move; slips never wobble.
- Camera: one punch-in to the LCD at the payoff, then hold ≥ 1.5 s. Self-host the three fonts. 3D layers render in headless Chrome, but check a snapshot after any transform change.

## References
- https://huggingface.co/blog/how-to-generate — lower temperature sharpens the next-word distribution and becomes greedy near 0: cold = always the top slip.
- https://en.wikipedia.org/wiki/Seven-segment_display — seven bars and a limited glyph set (digits, `P`), with ghost segments showing what is unlit.
