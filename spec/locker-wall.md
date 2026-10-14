# Locker Wall (`locker-wall`)

**Metaphor:** a changing-room locker bank, with a wooden key tag burned with one word and lockers opening for it → attention as soft lookup: the word's tag (query) is checked against every locker (keys), the better the match the wider the door swings, and what the open lockers hold (values) is blended into the meaning.
**Series:** how-ai-works · ai-in-numbers
**Axes:** dark · grotesque · 3D · physical-object

## Look
- **Palette:** `#1F2A36` room slate (wall, name rail, card ink) · `#6F8295` locker steel (doors, frame) · `#E9DFC9` cream (stencil paint, locker cards, enamel sign, rules card) · `#F2A33A` amber (lit interiors, light spill, `hl` paint, active caption word) · `#C29A64` honey wood (bench slats, key tag; burned ink `#3A2213` is a derived tint)
- **Fonts (Google Fonts):** Saira Stencil One (title, locker numbers, tag word) + Big Shoulders Stencil Display 800 (narrow card labels) / Red Hat Text 600 (caption, sub) / Red Hat Mono 500-600 (sign, values, rules header, source)
- **Grid / layout:** no ceiling light and no tiled wall: a plain painted wall with a wooden towel-hook rail at y 170-250 (decoration, top UI band). The enamel sign is centred at y 300-352 and screwed across the top edge of the riveted name rail (rail top y 326). Title at y 370, centred and balanced, 136→80 px, ≤ 3 lines; an optional 40 px sub sits under it, and the rail ends 30 px below. The bank has N columns across x 90-990 plus two cut-off neighbours. Each column has a stencil number plate (64 px), a cream card (label ≤ 2 lines at 48→30 px, never split mid-word; value 30 px mono; all cards the same height), a door bay (≥ 330 px) and a kick plate. In front: the slatted bench seat (≈ 56 px, same perspective) with a 22 px nosing, then the bench base carrying the rules card, bottom-anchored at y 1620. Dense data first gets a compact pass (lower seat, kick and plates, title floor 72 px), so the bays stay ≥ ≈ 205 px in the worst stress case.
- **Signature elements:**
  1. Spray-stencilled name rail: the hook line is painted in cream on the riveted dark-steel rail along the top of the bank. The `hl` is in amber paint, and each line keeps the soft overspray rectangle a stencil sheet leaves. The locker numbers use the same stencil.
  2. Doors in true CSS 3D (one vanishing point), where the door angle is the match. When every value is a number in one unit, angle = 10 + 102·v/vmax, and tied values share the angle and the amber light (tokens 2/1/1/2 → 112/61/61/112°). Otherwise (text or mixed units), lockers whose label or value matches the query (the `hl` text, its number, or a ≥ 4-letter word of it) open 112° and the rest stand equally ajar at 24°; if nothing matches, locker 01 opens. Lit lockers glow amber inside and spill light onto the bench slats.
  3. Wooden key tag burned with the QUERY word (the `hl`, upper case), not a locker number. It hangs on a translucent plastic wrist coil from a brass cup hook on the door-head rail, at the seam or unlit locker that hides the least of the lit interiors, and is clamped so its rotated box stays inside x 70-890.

## 2-second hook
- **Frame 0 shows:** exactly the rendered still (it is the thumbnail): the tag face-on with its query word readable, the doors already at their match angles, the matching lockers lit, and the hook line painted on the rail (samples: 7 words).
- **Motion (0-2 s):** frame 0 catches the tag at the outer point of its swing. It swings through vertical and back (rotateZ 6° → -4° → 0°, sine.inOut, 1.4 s) while the coil stretches and relaxes. Each time the tag passes vertical, the matching lockers' light flares 80 → 100 % and the spill runs further along the slats (power2.out, 0.4 s). Doors and text stay still; the camera stays still.
- **Why it stops the scroll:** a key tag that names a word instead of a number, with lockers already open for it by different amounts, makes the viewer ask "why these ones?" before reading anything.
- **Hook type (docs/bank-hook-ending.md):** #3 Hasil dulu, caranya nanti: the result (which lockers one word opens, and how wide) is visible in frame 0; the matching is explained after.

## Loop ending
- **Last 1 s:** after the CTA (~85 %), the scene is back in its frame-0 state. Every door is at its frame-0 angle, the same lockers are lit, the caption card shows its opening line with the same active word, and the tag swings up to the same outer point.
- **Seam:** ending B (frame kembali persis). The last frame equals frame 0 including all on-screen text: the painted title never leaves, and the caption line is identical. The tag's swing carries on across the cut in the same direction, and the latch "clack" that ends the video also opens it (J).

## Caption / voice-over
- **Slot:** `data-slot="caption"` inside the laminated cream "PERATURAN LOKER" card bolted to the bench base, text x 114-966, bottom-anchored (card ends at y 1620; caption ≈ y 1400-1515 for 2 lines, ≈ 1490-1550 for 1). Red Hat Text 600, 46→40 px, left-aligned. Spoken words `#1F2A36`, upcoming `#4E5A68`, active word in dark ink on an amber marker block `#F2A33A`. Card header is 30 px mono; source and date are 26 px mono at the card foot.

## Notes for the video build
- Beats: after the hook, the doors shut in reading order (latch clacks, 0.3 s). For each item, its card brightens and its door swings to its angle on the word that names it (power3.out, 0.6 s) while the value counts up. The amber light blooms only when the best match is named, and by the payoff the frame-0 state is rebuilt. Doors never wobble while idle; only the tag sways (damped), in the hook and the loop.
- Camera is punctuation: still by default, with one punch-in through the widest door at the payoff (hold ≥ 1.5 s). Keep one perspective (P 1500, VP x 540 / y = door top + 20 % of the bay) for interiors, doors, bench and spill, or the depth breaks.

## References
- https://www.zoomjapan.info/wp/2013/11/12/no16-practical-information-what-you-need-to-know/ — bathhouse lockers with a wooden key tag: the tag-to-locker match is the whole interaction (here the tag carries the query word, and the match shows only as door angle).
- https://ajproducts.co.uk/changing-room/lockers/accessories-for-lockers/clothes-locker-accessories/numbered-key-fob-162626-162624 — a key fob paired with a locker's plate: query and key as two separate printed objects.
