# Salt Pans (`salt-pans`)

**Metaphor:** an aerial plan of coastal salt pans, where seawater steps pond by pond and evaporates until only salt is left → summarising: a long text loses its "water" at every step and what remains is the key point (pages in at the sea gate, a few lines out on the heap).
**Series:** how-ai-works · ai-tools · ai-in-numbers
**Axes:** dark-to-light · condensed · 2D · data

## Look
- **Palette:** `#24384F` deep sea / ink · `#8AABC5` brine and heap shade (the pond ramp `#2E4A68 → #45678A → #8AABC5 → #AFC3D2 → #C9D6DF` is steps between sea, brine and crystal; mid tones skipped so pond text passes 4.5:1) · `#FBFBF8` salt crystal · `#9A7A5A` dike earth · `#6E5238` gate wood
- **Fonts (Google Fonts):** Sofia Sans Extra Condensed 800/700 (title, values, harvest, pond numbers) / Sofia Sans 500–700 (labels, gauge, caption, meta)
- **Grid / layout:** 90 px margins. Sea y 0–280 (salt boat). Sea-gate board x 36–1044: top rail y 298–352 carries the kicker (28 px at y 308), then one stop-log plank per title line from y 358 (caps 84–150 px, plank = 1.04 × size, stack ≤ 304 px, so the board ends by y 662). A 46 px sea wall sits under it with the sluice, a tide staff and the gauge plate "MASUK · items[0].value" (30 px, right edge x 990). Ponds run from the wall to the harvest row: one row per item, all the same height, 14 px dikes, brickwork meander (even rows x 60–900, odd rows x 180–1040), pond text x 90–880. Heights scale (1.14 → 0.86) only when every value is a number with the same unit and strictly decreasing. Harvest row is 150–210 px and ends at y 1400. Legend box y about 1438–1636, white yard below under the app UI.
- **Signature elements:**
  1. Sea-gate stop-logs: the title is lettered in cream caps on wooden planks, one plank per line. `hl` is a white salt-crust plate set into its plank, and a salt tide-line crusts the lowest plank.
  2. Salinity-ramp ponds: the colour steps lighter and the white crust along the dikes thickens pond by pond (evaporation you can see). Sluices alternate left and right so the eye snakes down like the brine. Ponds are equal in size so area never fakes magnitude.
  3. The crystalliser: one big raked salt heap (crystal lit face, brine shade face, long sea-blue shadow thrown east, a rake at its foot) whose peak breaks up through the dike. The label reads "INTINYA · n PETAK" (or `D.harvest`) over `hl` at 0.6× the title. Gauge in vs heap out = the ratio. A windmill pump and the salt boat set the place.

## 2-second hook
- **Frame 0 shows:** the result first. The gauge at the sea gate reads "MASUK · 100 HALAMAN", and at the bottom the big white heap stands under "INTINYA · 3 KALIMAT", with every pond already at its stepped tone.
- **Motion (0–2 s):** 0–0.4 s a glint sweeps right to left across the heap's lit face. 0.4–0.8 s the sluice plank lifts and the tide staff's water mark rises. 0.8–2.0 s one brine front: a flat band of fresh `#2E4A68` water with a 3 px crystal foam edge drops through pond 01's west gate and sweeps left to right across pond 02 (`#45678A`, ease-in-out). The band travels, so the water behind it settles back to pond 02's tone.
- **Why it stops the scroll:** the input and the answer are both on screen (100 pages at the gate, a heap of "3 kalimat" at the end), and the moving water asks how one became the other.
- **Hook type (docs/bank-hook-ending.md):** #3 Hasil dulu, caranya nanti (result first, method later)

## Loop ending
- **Last 1 s:** after the CTA (about 85%), the rake pulls the last pan's salt right to left into the big heap, which reaches its frame-0 size. On the final beat the sluice plank drops shut.
- **Seam:** ending B (frame returns exactly) with E (motion continues). The last frame is the frame-0 composition, and the 0–0.4 s glint continues the rake's right-to-left pull. The hook's front is the only water front in the video. The voice-over ends "…dan yang tersisa cuma:" and frame 0's harvest word completes it.

## Caption / voice-over
- **Slot:** `data-slot="caption"` inside the plan's legend box "KETERANGAN" (frame x 76–1004, tab label 26 px). The text runs x 148–900, first line at about y 1465, in 46 px Sofia Sans 500 (40 px minimum), 1–2 lines. A 38 px pond-tone swatch leads the first line. Active word: ink `#24384F` at 700 weight with a 6 px dike-brown `#9A7A5A` underline bar, with punctuation left outside the bar. Spoken words are ink and upcoming words slate `#56677A`. A longer line becomes a 2-line window with an ellipsis. Source and date sit inside the box, ending by y 1620.

## Notes for the video build
- One beat per item: the brine front reaches pond n, its crust grows, then the label and value appear (value count-up when numeric). The heap rises from its base when `hl` is spoken. The windmill turns slowly the whole time and ripples drift ≤ 4 px. Nothing else idles.
- Camera stays still. There is one emphasis move in the payoff scene: a slow pull-back from the heap to the whole field (reveal scale), then hold ≥ 1.5 s. No zoom in and back out.
- Risk: keep the front a flat band (no wobble or glow). The tones must stay on the ramp; a mid-luminance pond fails contrast.

## References
- https://en.wikipedia.org/wiki/Salt_evaporation_pond — ponds in series where brine concentrates step by step and colour shows salinity. Principle taken: a stepped colour gradient read as data.
- https://en.wikipedia.org/wiki/Stop_log — stacked timber beams that close a sluice. Principle taken: one beam per title line.
- https://en.wikipedia.org/wiki/Madura_Island — Indonesia's "salt island". Principle taken: salt-farm vernacular (earth dikes, wooden sluices, windmill pumps, raked heaps) drawn as plan symbols, not copied imagery.
