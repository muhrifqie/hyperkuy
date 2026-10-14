# Anatomy Flaps (`anatomy-flaps`)

**Metaphor:** a 16th-century anatomical fugitive sheet whose woodcut torso is a stack of lift-up paper flaps → what the model actually sees: lift A (your sentence) and its tokens are printed underneath, lift B for token IDs, C for vectors; each flap is one layer deeper.
**Series:** how-ai-works, ai-tools
**Axes:** light · serif · 2.5D · physical-object

## Look
- **Palette:** `#F1EDE2` cool rag paper · `#1F1D1B` woodcut ink (type, outlines, hatching, key letters) · `#C98A72` rose flesh wash (flap A, arms, neck; also behind the hl and the active caption word) · `#6A7C98` grey-ultramarine wash (deeper flaps, 20→54 %; values printed in its deep tone `#2E3F63`) · `#C4A06A` ochre (collar band, cut faces)
- **Fonts (Google Fonts):** IM Fell English (title, labels, italic key letters, caption) / IM Fell English SC (band) / Courier Prime 700 (values under the flaps) + EB Garamond 500 (digits, "=", source + date line)
- **Grid / layout:** thick-over-thin heading rule y 256–267, x 90–990. Title centred x 90–990 from y 300 (150→72 px, ≤ 290 tall). Collar band from y max(612, title + 58), 72 tall, sized to the kicker (≤ x 248–832), neck stump above it. Shoulders slope from the band to deltoids at x ≈ 60 / 1020; arms x 50–200 / 880–1030 (decoration, no text). Flanks taper x 202→250 (mirrored) from armpit to waist at caption top − 70; strips = (waist − band) / n. Key column x 288, labels x 348 → ≤ 790. Caption bottom y 1556, imprint y 1572–1612, imprint rule y 1648–1659.
- **Signature elements:**
  1. A woodcut torso cut like a classical fragment (neck, wrists and hips cross-hatched). Its front is the flap stack: skin → muscle → ribs → gut → vessels. Each deeper flap is longer and wider, with rib hatching on the stepped flanks and shoulders.
  2. Off-register hand colouring: rose flesh on A and the limbs, grey-ultramarine deepening down the layers. The same rose brush mark sits behind the title hl, under its descenders.
  3. A Vesalius-style plate key: small black italic letter, label, and a fine leader line out to a point on the tissue. Values are printed on the layer beneath, under the flap above (literal lift-the-flap).

## 2-second hook
- **Frame 0 shows:** this still, exactly: every flap down and every value hidden. A is sprung 17° on its hinge (perspective 2000 px, eye level at the hinge), with a curled corner and a soft shadow on B. On screen: "Ini yang dibaca AI." (4 words)
- **Motion (0–2 s):** at 0.4 s A swings 17°→100° (0.6 s, power2.inOut) and rests as a thin sliver on the band. Its shadow fades and the value printed beneath ("2 token") is uncovered exactly where "Ken·apa" sat. Camera still.
- **Why it stops the scroll:** a curled corner begs to be lifted, and under a plain word sits a number.
- **Hook type (docs/bank-hook-ending.md):** #7 Yang sebenarnya dilihat AI

## Loop ending
- **Last 1 s:** after the CTA (~85 %), the lifted flaps drop deepest first (0.25 s each, power2.in, soft paper tap) and cover their values again. A lands last and springs back to 17° with its curl.
- **Seam:** ending D, benda dibongkar balik. Closed flaps hide every value, so the end state is the template state, which is frame 0 (no fade). A's tap is the last sound. Frame 0 opens in that silence, and the first lift sound comes at 0.4 s, so the loop reads settle → lift.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 92–898, bottom y 1556, 1–2 lines, Fell 46→40 px, centred and balanced. Karaoke: the active word (hl if spoken, else the first word) sits on a hand-brushed rose watercolour stroke, in ink.

## Notes for the video build
- Each flap is `.layer[data-flap]` (origin at the hinge), and each value is `.val[data-item]` (hidden in the still). Lift on the word that names the flap; show the value once the flap passes ~30°, and raise the lifted flap above the band. Past 90° show a blank verso (`backface-visibility: hidden`). Lift by length: A 100°, B 94°, deeper flaps 92°. Lift renders with every flap up kept each sliver ≥ 35 px below the title in all four test sheets.
- Camera is punctuation: at most one punch-in per scene, onto the revealed value, then hold ≥ 1.5 s. Flaps never wobble while idle.
- Best for real layered pipelines (kalimat → token → ID → vektor); sibling lists read as false depth. Self-host the fonts and mark illustrative values "ilustrasi".

## References
- https://wellcomecollection.org/works/smgggrjm — fugitive sheet with paper flaps: each lift reveals the next layer down.
- https://en.wikipedia.org/wiki/De_humani_corporis_fabrica — Vesalius: truncated torsos dissected layer by layer, parts keyed by small letters.
- https://www.nlm.nih.gov/exhibition/historicalanatomies/home.html — hand-coloured woodcut anatomies: loose washes over a black key block.
