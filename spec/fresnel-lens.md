# Fresnel Lens (`fresnel-lens`)

**Metaphor:** a lighthouse Fresnel lens in a dark lantern room, with a drafting card comparing the fat lens to the stepped one → pruning/compression: Fresnel kept only the glass that bends light and dropped the dead bulk. Pruning keeps the weights that matter, so the model gets lighter but the answer reaches just as far.
**Series:** ai-in-numbers, how-ai-works
**Axes:** dark-to-light · serif · 3D · physical-object

## Look
- **Palette:** `#0D1117` lantern-room night · `#E9E2CF` cream: title, drafting card · `#B88B3A` brass: cage, tags, stepped underline · `#F6D58A` lamp: bullseye, beams, `hl`, active caption word · `#6A7A92` steel: glazing bars, glass in section (text tints: meta `#97A4B8`, caption upcoming `#4A5260`)
- **Fonts (Google Fonts):** Instrument Serif 400 + italic (title, ring numerals, tag values) / Geist 500-600 (caption) / Geist Mono 500 (ring labels, meta, source)
- **Grid / layout:** 90 px margins. Series · No. + date y 296-330. Title y 344 to about 606 (fit 124→72 px, max 262 tall); `hl` in lamp-gold italic on a stepped brass underline. Lens from the finial (title bottom + 44, clamped to 560-690) down to the foot, 18 px above the card. Drum axis x 560, belt x 162-958. Item text stays at x ≤ 884. The beams leave through x 0-170 and x 950-1080. Cream card from y 1432 to the bleed: caption from y 1460, source under it (≤ 1616), then the section drawing under the source (decor, mostly below the UI line). The card rises only when an over-long caption or source needs the room.
- **Signature elements:**
  1. A stepped beehive lens. Each item is one prism ring (I-V, in reading order above and below the lamp belt). Every ring is its own glass cylinder, stepping inward from the belt, so the silhouette itself is the Fresnel step profile. The label is etched in the glass lane between the prism edges, and the value sits on a riveted brass tag.
  2. The lamp belt: a bullseye panel of concentric prisms around a glowing core, foreshortened side bullseyes that sell the cylinder, and two beams cutting through the helical lantern glazing (the bars light up inside the beam).
  3. The drafting card: a fat plano-convex lens (dashed, with hatching for the dead bulk) under the thin stepped profile, with rays from the lamp leaving parallel. The same stepped profile is the title's `hl` underline.

## 2-second hook
- **Frame 0 shows:** the same lens split down its axis. The left half is still one solid, cloudy glass dome with a short dim beam. The right half is the stepped rings with a long bright beam. On screen: "Kacanya dibuang, sinarnya makin jauh."
- **Motion (0-2 s):** at 0.2 s the left half's dead glass shears off in slabs, one ring at a time from the top (120 ms stagger, power2.in), and drops behind the card to reveal the stepped rings. At 1.0 s the left beam stretches to the frame edge (0.6 s, power3.out), and a range figure counts and locks beside it (for example "12 → 20 mil"; verify it and show its source before use). The camera stays still.
- **Why it stops the scroll:** it looks backwards: glass is thrown away and the light visibly goes further, on a jewel-like object nobody sees up close.
- **Hook type (docs/bank-hook-ending.md):** #6 Sebelum vs sesudah terbelah

## Loop ending
- **Last 1 s:** after the CTA (~85%), the drum turns one panel (72°) on its axis with its surface moving left to right. The beams sweep out of the right edge and the next panel's beam enters from the left. The panel coming round from behind is still unpruned (solid bulk).
- **Seam:** the rotation stops when the unpruned panel's leading edge reaches the axis. The left half is bulk and the right half is rings, the same split and beam angle as frame 0. Rotation speed stays constant across the cut. Ending E (Arah gerak menyambung) + B (Frame kembali persis). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` on the cream card at x 96-900, y 1460-1570 (1-2 lines), Geist 500 at 46 px (fits down to 40). Spoken words are ink `#161B24` and upcoming words `#4A5260`. The active word (`hl` if it is in the caption, else the first word) sits in a lamp-gold `#F6D58A` wedge that widens to the right like a beam, in ink at weight 600. In the video the wedge steps from word to word.

## Notes for the video build
- One beat per ring: its prism edges draw in top-down as the lamp pulses, the label types on, and the brass tag stamps on (the overshoot is on the tag only). The slow, constant beam sweep is the only ambient motion. The section drawing builds in the "how" beat: rays draw in, then the hatched bulk wipes away.
- Camera: one punch-in to the bullseye on the payoff number, then a hold of ≥ 1.5 s. No other moves. Keep the glow soft (no bloom/neon). Self-host the fonts for the render. With 5 items the bullseye shrinks (radius about 85 px), so keep those titles to 2 lines.

## References
- https://en.wikipedia.org/wiki/Fresnel_lens — concentric stepped prisms keep the focus of a thick lens with a fraction of the glass. Used as the before/after section drawing and the stepped silhouette.
- https://www.aip.org/inside-science/the-remarkable-lens-in-americas-oldest-lighthouse-station — the lens as a jewel in a dark lantern room, with the beam as the hero.
- https://en.wikipedia.org/wiki/Pruning_(artificial_neural_network) — remove low-importance weights and keep accuracy; the ring tags read as "what is kept".
