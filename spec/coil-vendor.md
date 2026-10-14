# Coil Vendor (`coil-vendor`)

**Metaphor:** a glass-front snack vending machine with spiral coils, slot codes and a side keypad → function / tool calling: the model doesn't fetch anything itself, it keys a code and the machine releases one tool result.
**Series:** ai-tools · how-ai-works
**Axes:** dark-and-light · mono · 2.5D · physical-object

## Look
- **Palette:** `#1B1D22` cabinet, rails, text · `#E9ECEF` lit sign + interior · `#C8381F` the vended packet, hl, phantom line · `#2F6FE4` other packets · `#F4D35E` "keyed" (chip, key, LCD, active caption word)
- **Fonts (Google Fonts):** Martian Mono 800 at wdth 75 (title, rail text) / Archivo 600 (caption, meta) / JetBrains Mono 700–800 (LCD with `->` `=>` ligatures, codes, keys)
- **Grid / layout:** cabinet x 24–1056, cropped close. Backlit sign y 222→~590: kicker y 302–336, title from y 354 (2 lines 78–100 px or 3 lines 66–92 px, line-height 1.16, printed straight on the sign, no text boxes). Glass x 66–898 from the sign down to the control row; trays adapt to the item count so no slot is ever empty: 3 items = one tall tray of 3 big standing bags, 4 = 2 + 2, 5 = 3 narrow slots over 2 wide (real machines mix slot widths). Each tray has its own vanishing point 150 px above it and packets stay ≤ 80 % of the bay height. A 112–156 px price rail under each tray. Keypad x 930–1028 above y 896. Control row ~y 1282–1414: LCD x 66–598, delivery flap x 620–912. Riveted instruction plate x 57–911, y ~1428–1634 carries caption + source line (outline only, no fill).
- **Signature elements:**
  1. Perspective coil slots: steel helix receding with a queue of packets; rail = code chip + tool name (label) + returned value (value).
  2. The vended packet (hl slot) frozen mid-tip over the tray lip, leaning to whichever side has room, a red dashed phantom line where it stood (technical-drawing convention); three more wait behind it in the coil.
  3. Yellow two-line LCD written like a vending display: `A1 -> Ken·apa` / `=> 2 token▌` (label verbatim; a label too long for the display shows `PILIH: A1` instead), with the A and 1 keys lit; the title's hl is underlined with a red coil of wire.

## 2-second hook
- **Frame 0 shows:** this still with LCD line 2 still empty (`A1 -> Ken·apa`, caret below); the packet already leaning off its coil; the sign carries a hanging line (≤ 7 words, e.g. "AI-nya nggak ngerjain sendiri…").
- **Motion (0–2 s):** the coil turns its last notch (0.4–0.8 s, ease-in-out), the packet tips past 90° and drops behind the glass with a soft thud at 1.2 s (gravity ease-in, no bounce), the flap swings; `=> 2 token` prints at 1.4 s while the VO finishes the line ("…dia cuma mencet kode.").
- **Why it stops the scroll:** a sentence left hanging over a packet frozen on the edge: two cliffhangers at once, both closed by 1.4 s.
- **Hook type (docs/bank-hook-ending.md):** #12 Kalimat menggantung (spoken + physical cliffhanger), paired with ending A + B.

## Loop ending
- **Last 1 s:** after the CTA (~85 %), the VO hangs again ("…jadi kalau AI bilang 'bentar, aku cek dulu', artinya:"); the LCD clears to `PILIH: _`, the same code is keyed, the hl coil turns one notch: the next packet slides to the edge and leans out, and a fresh packet comes in out of the shaded rear turn so the queue is again tipping + 3.
- **Seam:** A (the hanging last line is completed by the opening "AI-nya nggak ngerjain sendiri…") + B (frame returns): LCD line 1 + caret, leaning packet, queue count and lit keys match frame 0; the notch click is the same SFX as at 0.4 s.

## Caption / voice-over
- **Slot:** `data-slot="caption"` on the instruction plate, x 90–890, y ~1450–1570, Archivo 600 40–46 px, 1–2 balanced lines (3 only for ~80+ characters; the control row and glass then move up), words never break at hyphens; karaoke: the active word(s) share ONE `#F4D35E` lit-key box with ink text, spoken words `#E9ECEF`, upcoming `#AEB3BA`.

## Notes for the video build
- One beat per item: key its code (keys light, LCD retypes line 1), its coil turns a notch, its rail value goes yellow. The helix is a path from `th0`, so turning = redrawing with a new phase while packets advance in z; deterministic.
- The drop well spans the full glass width behind the control row: any packet falls behind the lower trays, out of sight below the last rail; only the flap (x 620–912) swings. Never animate a fall across the LCD.
- Camera = punctuation: still by default; at most one punch-in per scene (LCD on the `=>` beat), hold ≥ 1.5 s; never move during a drop.

## References
- https://wiki.k-space.ee/utilities/vending-machine-manual — one spiral per slot; the code-to-coil mapping is the whole metaphor.
- https://data.epo.org/gpi/EP3540701A1 — spiral thrust elements advance products along channels; a grid of channels reads as an addressable table.
- https://en.wikipedia.org/wiki/Technical_drawing — phantom (dashed) lines show the alternate position of a moving part.
