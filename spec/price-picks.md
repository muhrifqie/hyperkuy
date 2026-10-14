# Price Picks (`price-picks`)

**Metaphor:** a market stall seen from above. Heaps of shallots, garlic, dried chili, candlenut and rice sit on a cobalt tarp, and each heap has a hand-cut cardboard price card on a bamboo skewer. AI prices then read like market prices: heap height is the value (for example, cost per million tokens). When a price drops, its heap slumps to a pinch and the card gets rewritten.
**Series:** ai-in-numbers, ai-news
**Axes:** full-colour · condensed · 2.5D · data

## Look
- **Palette:** `#213F95` woven cobalt tarp (background) · `#F4EEDF` cream for title, caption and the chalk ghost · `#CFAB76` kraft cardboard for cards and the hl/active-word patch · `#161616` marker ink · `#6E1512` red marker for the rewritten price. The goods use their natural tints (shallot mauve, garlic, chili, candlenut, rice) and are not UI colours. There is no green.
- **Fonts (Google Fonts):** Big Shoulders Display 800/700 (title, kicker) / Permanent Marker (card labels and values, ep tag) / Bricolage Grotesque 500-700 (caption, meta)
- **Grid / layout:** 90 px margins. Kicker and ep tag at y 296-346. Title from y 360, fitted 136→76 px with a maximum height of 300 px. The object band runs from title bottom +40 down to caption top −26 (about y 630-1420). It has 2 rows: 3 items = 2+1, 4 = 2+2, 5 = 3+2. Cards are 252-400 px wide on column centres 316/706 (or 232/500/768). All card text stays at x ≤ 900. Heaps sit under their cards on skewers. Caption sits at about y 1440-1548, and the masking-tape meta strip ends at y 1620. The tarp hem with grommets is at y 1644-1702, with the market floor below it. A reserve tampah, cropped by the frame at the top right (y 0-270), is decoration only.
- **Signature elements:**
  1. **Heaps as a physical bar chart.** Hundreds of grains on a jittered dome, lit from the upper left, with contact shadows. When all values share a unit, height = value (0.3 + 0.7·v/max). Otherwise the sizes are illustrative.
  2. **Hand-cut kraft price cards** on bamboo skewers. Each has a ragged cut, flute stripes showing through, a staple, and on one card a peeled liner corner. The label is on the top line and the value is the big marker number.
  3. **The collapsed hero.** The hero is the item `hl` points to; otherwise the cheapest item, otherwise the last. Its heap is a pinch with strays, and a dashed chalk ghost shows the heap it used to be. Its card is rewritten: the old figure is scribbled out, with a red ↓ and the new value beneath it.

## 2-second hook
- **Frame 0 shows:** the full stall in the cover composition. The hero heap is still full, filling the exact ghost outline, and its card shows the opening figure. On-screen text: "Harga AI turun lagi minggu ini." (5 words).
- **Motion (0-2 s):** At 0.25 s the hero heap slumps. Grains slide down its flanks and the height eases to a pinch over 0.7 s (power2.in, a small settle, no bounce). As it goes, the dashed ghost draws in along its old outline (0.4 s draw-in). At 1.1 s the card spins once on its skewer (rotateY 180°, 0.45 s) and lands on the scribbled-out figure plus the red ↓ value. The camera is still.
- **Why it stops the scroll:** a heap of goods collapsing is the most physical "price drop" a viewer has ever seen, and it happens in a place they know: the pasar.
- **Hook type (docs/bank-hook-ending.md):** #10 Berita yang langsung berdampak. For ai-in-numbers episodes, #2 Angka mustahil also fits.

## Loop ending
- **Last 1 s:** after the CTA (~85%), the vendor tips the reserve tampah from the top-right corner. Grains pour into the pinch and it grows back to the ghost outline, and the dashes vanish as the heap fills them. The card spins back to its opening figure, and the other heaps top up to their frame-0 heights.
- **Seam:** the last frame is frame 0: same heaps, same cards, same opening numbers. The card-flip "flick" SFX at the loop point is the same one that opens the hook, so the slump starts again on the beat. Ending G (Progres reset) + J (Ketukan musik). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"`, x 90-900, bottom 22 px above the tape (about y 1440-1548), max 2 lines, Bricolage Grotesque 500 at 46 px (down to 40), cream on the tarp. Karaoke: the active word (`hl` if it appears in the caption, else the first word) is Bricolage 700 in ink on the same hand-cut kraft patch as the title `hl`. In the video the patch hops from word to word.

## Notes for the video build
- One beat per item: the card is stabbed into place on the word that names it (fast in, tiny overshoot on the card only), then grains pour from the tampah and the heap grows from baseline to its value. The values lock 1 s before the beat ends. Grains never wobble while idle.
- Camera: a static top-down view. Allow one punch-in to the hero card at the payoff and hold ≥ 1.5 s, with no other moves. Animate each heap as one pre-rendered group (scaleY plus a clip), not as per-grain tweens, since there are about 1,500 SVG nodes. Self-host the three fonts.
- Any "old" figure shown in the hook must come from the episode's sourced data (source + date on the tape). With no sourced old figure, the card shows the scribble only.

## References
- https://en.wikipedia.org/wiki/Isotype_(picture_language) — reduction, with one clear number per unit: each heap carries exactly one card and nothing else.
- https://www.inews.id/regional/jateng/informasi-harga-mulai-dipasang-di-pasar-tradisional-kendal-ini-tujuannya — Indonesian markets post daily prices that change every day, so prices are a public, moving number.
- https://en.wikipedia.org/wiki/Angle_of_repose — granular heaps settle at a fixed slope, so a bigger value means a taller and wider mound, which keeps the "bar chart" physically believable.
