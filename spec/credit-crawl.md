# Credit Crawl (`credit-crawl`)

**Metaphor:** a hand-cranked credit roller under a rostrum camera (black drum, white condensed credits, crank, one lamp) → the hidden crew behind every model (labellers, raters, writers, chips, power) are the end credits nobody reads, with numbers.
**Series:** ai-news · ai-in-numbers
**Axes:** dark · condensed · 3D · physical-object

## Look
- **Palette:** `#0C0C0C` room + drum black · `#F1ECE2` cream credits, title, camera-gate marks, filler silhouettes (25–30%) · `#C7962E` brass (crank, axles, lamp, flange bead, `hl`, lit number, lamp pool) · `#3E3933` blackened iron (flanges, side frames) · `#C9C2B6` dim cream (end card)
- **Fonts (Google Fonts):** Big Shoulders Display 700/800 (title, values, series, SUMBER) / EB Garamond 400–500 + italic (roles, `hl`, caption, source)
- **Grid / layout:** 90 px margins, centred on x 540. Series · ep centred at y 296. Title y 350–~612, balanced, 80–132 px, billing-block caps set in JS (digits and units such as mW, Gb/s, kWh stay as typed); `hl` = brass Garamond italic. Drum axis y 1032; drum + flanges y ~620–1445, x ~160–920; crank x 16–100, y 1010–1270; bench y 1690. Reading line at the drum equator, camera gate y 972–1092. Caption y 1478 (≤ 2 lines).
- **Signature elements:**
  1. Real CSS 3D drum. Everything printed on the paper foreshortens over the horizon: items as two-column credits (italic role right | number left), filler credits drawn as type silhouettes (italic roles, condensed-caps names, a centred department header every 4th row) and the SUMBER end card (source · date) after the last credit.
  2. Light and camera mark the reading line (no UI arrows). A diagonal shaft from the lamp lands in a brass pool on the middle row, rows outside it sit at 60%, and four cream camera-gate corners frame the lit row. Its number turns brass.
  3. Hardware: blackened-iron flanges with a brass bead and rivets, brass axle stubs, a hand crank with a wooden knob, and a hanging lamp.

## 2-second hook
- **Frame 0 shows:** the drum rolling with the crank mid-turn. The first item row, "Penilai jawaban …… 10.000+" (*ilustrasi*), sits one row step below the reading line (13°, or 16° with 3 items), outside the pool at the 60% shadow level: the role reads and the number is dim grey, not yet brass. On-screen line: "Siapa sebenarnya yang bikin AI?" (5 words).
- **Motion (0–2 s):** the crawl moves up at speed v. From 0.1 s the drum decelerates (power3.out) until the row slides into the pool and stops on the reading line at 0.9 s. From 0.9 to 1.4 s the pool brightens (alpha 0.25 → 0.4) and the light turns the number brass. There is no scramble: printed paper only moves and catches light.
- **Why it stops the scroll:** end credits are the part everyone skips. Here the roll stops on one line nobody reads, and the lamp lights an unexpectedly big number.
- **Hook type (docs/bank-hook-ending.md):** #2 Angka mustahil. The number is already visible (dim) in frame 0 and the light reveal is the payoff, so this is not #9.

## Loop ending
- **Last 1 s:** after the CTA credit (~85%), the crank turns at constant speed v. The SUMBER end card (printed on the paper) rolls up over the top horizon, and the first item row rises from below.
- **Seam:** one drum state. Last frame: the first item row is at −1 step (one step below the reading line), moving up at v, with the crank at the same angle as frame 0. Frame 0 has the same angle and speed, and deceleration only starts at 0.1 s, so the cut does not show (bank E, arah gerak menyambung).

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 110–970, y 1478–~1585. 46 px EB Garamond 500, auto 40 px to stay within 2 lines, set as a centred subtitle. One active word (the first word of the `hl` match, otherwise the first word) is brass with a 5 px brass underline, like the lit number.

## Notes for the video build
- Turn the crawl by adding Δφ to the rotateX of rows, silhouettes and the end card. The facets, pool, shaft and gate stay fixed, so the light stays in place. Opacity is 1 in the pool and 0.6 outside, eased by |φ|. Values are capped at 72% of the title size. Each item reaches the reading line on the word that names it.
- Camera: still by default, with at most 1 emphasis per scene (a ≤ 8% push onto the gate when the key number lights, one pull-back to show the machine at the end card). Never zoom in and back out.
- Paper loop order: items → end card → ≥ 110° of filler → items. Keep printed rows within ±86° (backface sorting) and check facet seams in the MP4.

## References
- https://en.wikipedia.org/wiki/Closing_credits — "staff roll": names on a paper roll pass the camera, bottom to top, at a steady reading speed.
- https://en.wikipedia.org/wiki/Billing_block — highly condensed caps in a strict size hierarchy, small connector words between names.
- https://en.wikipedia.org/wiki/Rostrum_camera — copy under a fixed camera and lamps: only what sits in the gate and the light is read.
