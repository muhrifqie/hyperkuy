# Cracker Bloom (`cracker-bloom`)

**Metaphor:** a kerupuk drying yard in hard noon sun, where one raw chip has been fried and bloomed into a coiled cracker whose dough rope is printed with numbers → embeddings: a token is a tiny hard chip; inside the model it puffs into a vector of thousands of numbers ("1 kata = 4.096 angka", illustrative 7B dimension). For ai-in-numbers topics the rope carries the topic's own values instead: a small number puffing up into a big one.
**Series:** how-ai-works · ai-in-numbers
**Axes:** pastel · grotesque · 3D · physical-object

## Look
- **Palette:** `#F2D9C9` peach yard (ground, haze; straw tints `#D0B38A`/`#C6A87F` for the weave) · `#E9A27C` terracotta (raw chips, cap seal, active caption word; `#C4683E` for the dashed footprint) · `#F6E7C8` fried-dough cream (the bloom) · `#FBF4EC` pack-label paper · `#2B2523` ink (all text)
- **Fonts (Google Fonts):** Rubik 900 (title), 800 (chip values, footprint stamp), 700 (chip labels, label small print), 600 (caption), 500 (source/date) / Azeret Mono 400 + 700 only for the numbers printed on the rope (the "code")
- **Grid / layout:** full-bleed yard, top-down with mild perspective. Far rack (soft, blurred, desaturated) y 0–214 → main rack's back pole y 252–274 → **pack label** from y 270, x 66–1014, tilted −1.8° and lying over the back pole: small print row y ≈ 300–335 (series left, "NETTO · #ep" right) over a double rule, title from y ≈ 362 (2 lines at 92→78 px preferred, else 3 lines down to 62 px; text x 114–966), label ends ≈ y 590–700. Bloom from label+26 down into the chip rows (≈ y 620–1180, x ≈ 65–975, centre x 520). Raw chips: 1 row (≤ 3) or 2 staggered rows (4 = 2+2, 5 = 3+2), text boxes 246 px, all chip text x ≤ 900. **Caption strip** x 116–924, tilted +1.1°, bottom-anchored at y 1614. Front pole y 1647–1693; below it the rack's dappled shadow, a serok and the edge of a wajan of hot oil (y 1693–1920).
- **Signature elements:**
  1. The bloom as a coiled dough rope: 5–7 thick relief turns (own shadow, sheen and highlight per turn), blisters and pores, a visible strand end at upper left. The numbers are set ALONG the rope with textPath, upright on the upper arcs and (reversed path) on the lower arcs, headed `// vektor (ilustrasi)`. Data-driven: how-ai-works / token topics print a vector of ±0,xx values; ai-in-numbers, or an hl with digits, print the item values + hl repeating, headed `// ilustrasi` (or `// D.note`).
  2. The dashed terracotta footprint (no fill) in the plain-dough core, exactly a raw chip's size, stamped with `hl` (vector mode) or the first item's value (numbers mode): the raw size inside the bloomed size.
  3. The wholesale-pack paper: zigzag heat-seal crimps top and bottom, a hang hole, a plastic sheen; `hl` is the pack's oval "cap" seal (terracotta, inner ink ring, printed askew; long phrases get a rounded-stadium seal). The caption sits on a second, narrower crimped strip with source/date as its small print. Raw chips carry the same coil, small; value first (Rubik 800, 40→30 px, no wrap), label below (30 px; one line when n ≥ 4). Every object casts the same hard shadow down-right.

## 2-second hook
- **Frame 0 shows:** the published cover exactly: bloomed cracker printed with numbers, raw chips, pack label, and the wajan's shimmering oil (one chip already puffing in it) at the bottom-right edge.
- **Motion (0–2 s):** 0–0.3 s the numbers retract along the rope and the bloom deflates into the footprint as a hard terracotta chip (expo-in) → 0.3–0.55 s the serok scoops it and dips it into the oil at the frame edge; sizzle SFX + shimmer flare at 0.45 s → 0.55–1.2 s it lands back in the footprint and blooms ~3× (outline morph, terracotta → cream, blisters pop at 40 ms stagger, shadow grows in lockstep; expo-out, no bounce) → 1.0–1.9 s the numbers type on along the rope, outer turn first. At 1.9 s the frame equals frame 0.
- **Why it stops the scroll:** a snack every Indonesian knows does its one satisfying trick in real hot oil, and the puffed cracker turns out to be made of numbers.
- **Hook type (docs/bank-hook-ending.md):** #2 Angka mustahil (with a #7 "yang sebenarnya dilihat AI" payoff)

## Loop ending
- **Last 1 s:** the CTA has played (~85%) while the cracker sits deflated as a raw chip for the outro; the serok dips it once more (same sizzle SFX), it re-blooms and the numbers retype, settling on the cover composition. Last 0.2 s: still.
- **Seam:** last frame = frame 0 (type B, same composition and same bloom state), so the opening deflate starts from exactly where the loop lands; the VO closes "…dan semuanya mulai dari satu keping kecil:", which the opening line "Satu kata, jadi 4.096 angka." completes (type A).

## Caption / voice-over
- **Slot:** `data-slot="caption"` on the bottom crimped strip, text x 156–884, ≈ y 1380–1520, Rubik 600 at 48→40 px, max 2 lines (cut with "…"). Karaoke: the active word is Rubik 800 ink on a terracotta oval seal with an inner ink ring; spoken words ink, upcoming words `#6E5A4A`.

## Notes for the video build
- One beat per item: its chip gives a small sizzle and its value prints into the next free stretch of rope. Rack, mat, label and shadows stay still; the sun never moves, so the shadow direction is fixed.
- Camera = punctuation: one slow punch-in (≤ 1.15×) on the footprint when the VO names the vector size, hold ≥ 1.5 s, no zoom back out. Pre-render the weave and far rack as one static layer; self-host Rubik + Azeret Mono. Keep "4.096" labelled as an illustration.

## References
- https://en.wikipedia.org/wiki/Krupuk — raw krupuk is small, hard and sun-dried and only puffs to several times its size in hot oil: one object with a real before/after in size, and a world-true trigger (the wajan).
- https://jalammar.github.io/illustrated-word2vec/ — show a word next to its row of numbers and stress a few values, so "a word is a vector" reads without maths.
