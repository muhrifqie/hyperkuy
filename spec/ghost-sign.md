# Ghost Sign (`ghost-sign`)

**Metaphor:** a shop's brick gable repainted edge to edge with a new sign, while the old sign's lettering keeps resurfacing through the paint → an AI's friendly persona is painted over the base model, and its old habits keep showing through.
**Series:** how-ai-works
**Axes:** full-colour · serif · 2D · poster

## Look
- **Palette:** `#8E3B2A` brick, hl ink · `#EDE3CB` new cream coat, caption text · `#23303B` sky, title ink, old lettering, fascia · `#D9A23A` old ochre sign, hl shade, active word · `#5B2A22` mortar, values, signature
- **Fonts (Google Fonts):** Ultra (title, Clarendon-style sign face) / Oswald (old-sign lettering: labels, values, kicker, date, caption) / Yellowtail (painter's signature = source)
- **Grid / layout:** sky + gable 0–262 · kicker on brick 300–336 · cream coat runs to both wall edges, y 352–1466, no frame · title x 110–970 from y 404 (Ultra 124→64 px, ≤ 340 tall) · ghost band right under the title (caps ≤ 90 px and never taller than the title caps, ≤ 812 wide, centred) · flakes: right edges all at x 900 (value column), only left edges stagger (x 120 + 72/0/40/14/56), rows 76–118 px, gap 24 · signature (source left, date right) ending y 1426 · string course 1478–1494 · navy shop fascia 1494–1638 with the caption · roll shutter from 1652.
- **Signature elements:**
  1. Ghost lettering: `D.ghost || D.series` in one-stroke capitals (SVG, A–Z 0–9, 1–3 strokes per glyph, missing glyphs skipped), flat navy at 0.24 with a 7 px ochre shade, eroded only by a hard noise threshold: crisp paint under paint, never a glow.
  2. Flakes: each item is a jagged chip where the coat fell off (height varies ~15 px, a deep bite in a margin, a lost bottom-left corner on odd rows): hard navy shadow on the top/left inside, 4 px cream lip (coat thickness), mortar joints, and one fragment of the old navy lettering cropped by the flake edge behind the leader dots. Row 1 keeps a chip half lifted: hinged on its left edge, ochre stuck to its underside, hard shadow.
  3. Painted on the wall, not printed on a card: brick relief (mortar joints, brick-face tone) runs through the title letters; hl in brick red with a hard ochre drop shade; patchy vertical paint-loss streaks at both edges wash the coat down to brick or old ochre; S-tie anchors on the gable; caption lettered on the shop fascia.

## 2-second hook
- **Frame 0 shows:** the cover's wall: title painted, ghost already there at 0.24, row 1 open with its chip half lifted (curled cream, hard shadow, ochre under it); rows 2–n still under the coat, their outlines faint ridges. No empty panel.
- **Motion (0–2 s):** 0.2 s the chip snaps off and drops out of frame (power2.in, 0.35 s) as row 1's value lands; 0.3–1.0 s a raking light sweeps left → right (sine.inOut) and the ghost rises 0.24 → 0.38 behind it. On-screen text = the title (≤ 7 words). VO opens a hanging line from the topic, e.g. "Yang kamu lihat cuma cat barunya. Di baliknya…".
- **Why it stops the scroll:** a flake falling and old letters surfacing on a real wall feel like a discovery, and the sentence is left hanging.
- **Hook type (docs/bank-hook-ending.md):** #9 detail misterius + #12 kalimat menggantung.

## Loop ending
- **Last 1.2 s:** CTA sits at ~85%, before this. A paint roller starts just below the title (top of the ghost band), wipes down to the signature line in 0.8 s (power2.inOut), lifts and exits below the string course. Title and signature layers sit above the roller layer, so they stay untouched. The flakes go under fresh cream (edges left as faint ridges); the ghost drops 0.38 → 0.24 but never disappears; in the last 0.3 s the new coat over row 1 cracks and the same chip curls up (power2.out). VO: "…cat lama nggak pernah benar-benar hilang." then the opening line.
- **Seam:** the final frame equals frame 0 pixel for pixel (B: frame kembali persis) and the closing sentence leads into the opening one (A: kalimat sambung). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 96–984, y 1504–1618, lettered on the navy fascia, Oswald 500 46 px (fits down to 40), max 2 lines, cream; karaoke: the active word (D.hl if in the caption, else the first word) turns ochre with a hard brick drop shade and a painted ochre underline, no filled box.

## Notes for the video build
- Data: optional `ghost` (≤ 14 chars, A–Z 0–9 space - .) names the old sign, e.g. "MODEL DASAR" for a fine-tuning episode; without it the series name is used. Rows 2–n flake off on the word that names them (chip lifts, turns 8°, falls; value types on).
- Camera still; one punch-in (≤ 1.12×) on the flake being explained in the middle scene, hold ≥ 1.5 s, never straight back out. Render wall, coat, ghost and relief once as static layers and animate only opacity and masks (turbulence filters are heavy). Self-host the fonts for the video render.

## References
- https://en.wikipedia.org/wiki/Ghost_sign — old hand-painted ads survive for decades and resurface through later coats of paint.
- https://en.wikipedia.org/wiki/Palimpsest — a surface written over again still lets the earlier text through; both layers stay readable.
- https://letterformarchive.org/news/inside-boutiques-magnifiques/ — sign-painter lettering stays readable at a distance: robust strokes, few flourishes.
