# Paper Theatre (`paper-theatre`)

**Metaphor:** a Showa street kamishibai stall (a wooden butai with a picture card in its window and the narrator's script printed on the card's back) → the system prompt: the audience only sees the picture (the reply), while the performance follows a hidden script that shapes every scene.
**Series:** how-ai-works · ai-tools
**Axes:** dark · serif · 3D · physical-object

## Look
- **Palette:** `#2A1D15` walnut night (ground, floor, title ink) · `#EADCC0` washi (title boards, card back, slips, script strip) · `#B8402B` vermilion (hl slip, script margin, row numbers, active caption word, chochin) · `#24406A` indigo (dusk sky, noren, script ink) · `#E3A847` lantern amber (doorway light, noren slits, glow; the honey wood is this amber shaded down). Noren dyes and kawara slate are darkened shades of these.
- **Fonts (Google Fonts):** Shippori Mincho 800 (title, shop labels) / Zen Kaku Gothic New 500-700 (script values, header, caption, source slip)
- **Grid / layout:** Kanban x 58-1022 from y 300 (tiled roof cap above it); title 98→60 px, line pitch 1.32 em, ≤ 284 px tall, centred; kanban ends at title bottom + 24. Butai x 54-534 from kanban bottom + 8 to y 1342, window x 88-500 (sky band ~20 %, then one shop per item; rows grow when a value wraps). Card back x 542-1004: row numbers in the vermilion margin, values from x 594 and measured on screen to stay left of x 896. Candy drawer y 1346-1468, clappers on the floor x 568-858, caption strip y ~1492-1620.
- **Signature elements:**
  1. The two-faced card: the front is a flat Showa poster painting of a lane at dusk (telephone pole, wires and a chochin in the sky), where each item is a shop: kawara eave, split noren lettered with the label, and a lit lantern. The half pulled through the side slot shows the back: the narrator's ruled script with header `NASKAH` + series/ep, one numbered value per line, a tiny sketch of the front, and a sliver of the picture on the turned edge.
  2. The showman's kanban on top of the stall: a honey-wood signboard with a small tiled roof; the title is lettered on nailed washi boards (one per line) and `hl` sits on a hand-cut vermilion slip.
  3. Stall furniture: the left door swung open, brass hinges, the candy drawer carrying the source/date slip, hyoshigi clappers with a vermilion cord, and the chochin hanging top-right as the glow source.

## 2-second hook
- **Frame 0 shows:** the open stall with the card fully in the window (only the painted lane, no script) under the lettered kanban. On screen: "Ada naskah di balik layar." (5 words)
- **Motion (0-2 s):** 0.2 s two clapper strikes (wood SFX, sticks jolt 4 px, no bounce). 0.4-1.2 s the card slides halfway out to the right (power2.inOut); as it clears the slot it turns over (rotateY 180° → 6°, 0.5 s) and the script lines write in 80 ms apart, each number level with its shop.
- **Why it stops the scroll:** a familiar picture literally turns over and shows the text behind it, the hidden instructions behind a "normal" reply.
- **Hook type (docs/bank-hook-ending.md):** #7 Yang sebenarnya dilihat AI

## Loop ending
- **Last 1 s:** after the CTA (~85 %), the last card is pulled fully out to the right. As in real kamishibai, every pulled card goes to the rear of the stack, so card 1 (put back first) is now in the window: the frame-0 picture, doors and kanban unchanged.
- **Seam:** B (Frame kembali persis) + E (Arah gerak menyambung) + J (Ketukan musik): the frame matches frame 0, the rightward exit continues the opening pull, and the closing clapper strike is the opening strike. No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 130-990, y 1504-1612, on a washi script strip with a vermilion margin rule and faint indigo ruling. Zen Kaku Gothic New 500 44 px (drops to 40 px to stay at 2 lines; tested with a 90-character caption). Exactly one active word (the first word overlapping `hl`, else the first word), set in vermilion bold with a vermilion underline stroke that steps word to word in the video.

## Notes for the video build
- Copy stays neutral: the faces read `GAMBAR` / `NASKAH`; set `D.front` / `D.back` (e.g. "YANG KAMU LIHAT" / "YANG DIBACA AI") only when the episode is really about system prompts. One beat per item: its lantern brightens and its script line gets a vermilion tick. Payoff: card 1 is pulled out and card 2 (a different picture) is revealed behind it with the same script, because one script shapes every scene.
- Values keep their units with no-break spaces (`Rp 330.000/bln` never orphans `Rp`). They try one line at 52→34 px first, then wrap to at most 2 lines while their row grows. Labels stay ≤ value + 6 px. Camera: still; one punch-in to the script at the payoff (hold ≥ 1.5 s), then a pull-back before the loop. Self-host both fonts for renders.

## References
- https://fanningtheflames.hoover.org/shorthand-story/7 — picture on the front, script on the back; cards slide through a portable wooden stage.
- https://en.wikipedia.org/wiki/Kamishibai — the butai is a miniature proscenium; the street showman sold candy, struck clappers to gather children, and pulled boards out one by one.
- https://en.wikipedia.org/wiki/Noren — split shop curtains dyed with the shop's name: the item label lives where a real shop's name would.
