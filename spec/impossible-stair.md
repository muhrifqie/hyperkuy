# Impossible Stair (`impossible-stair`)

**Metaphor:** a Penrose staircase model painted like Bofill's La Muralla Roja, on a museum pedestal, its four flights closing into a ring → hallucination: every step (sentence) checks out on its own, yet the whole cannot exist, and the AI keeps climbing it with full confidence. Use it for hallucination / overconfidence topics only: on a sourced-fact topic the impossible stair suggests the facts are false.
**Series:** how-ai-works
**Axes:** pastel · grotesque · 3D · diagram

## Look
- **Palette:** `#D5E0E8` pale sky · `#E9B7A8` stucco treads (walls `#C65A44` lit / `#A8392A` shade) · `#2E3560` indigo well + painted numerals · `#C2412D` red (title stair stroke, pennant, footstep trail, ticks, karaoke tread) · `#6B7FA8` slate pedestal. Cards are plaster `#FAF7F2` with a 2 px ink `#2C2A33` hairline.
- **Fonts (Google Fonts):** Bricolage Grotesque 800 opsz 96 (title) and 600–700 (caption, tag labels) / Fragment Mono 400 (values, catalogue line) / Saira Stencil One (numerals painted on treads and on tags)
- **Grid / layout:** margins x 90–990, no kicker row. The title starts at y 300: 2 lines at 112→80 px, or 3 lines capped at 92 px. Each line sits one 56 px tread further right. A red 6 px riser+tread stroke traces the steps at the left, drops one more step beside the 01 tag, and runs on as a stringer into the summit landing (about y 620–760). The model is centred and ≤ 900 px wide (720 px or more even with a 60-character title, 5 items and a 3-line caption). Its foot tucks behind the label card. The lower tags hang on the near walls left→right. The label card spans x 90–900 and is bottom-anchored at y 1620 (about y 1290–1620). The pedestal runs off the bottom edge.
- **Signature elements:**
  1. An honest Penrose ring as flat stucco planes with no outlines. It is a real open spiral whose end sits exactly (d, d, d) from its start, so it closes in isometric view. Pink treads with shadow joints on the long flights, red walls in two tones, and a flat indigo well with one hard lit band on the far walls.
  2. The title is the stair's first flight. Its lines step down and right on the red stroke, the 01 tag is the next step, and the stroke runs into the summit. Highlighted words stand on a painted stucco step: a pink block with a red riser band.
  3. The AI's red "AI" pennant is planted on the summit. The ~90 px climber, wearing a red sash, stands one riser below it. A red dashed footstep trail runs round the whole ring behind him. Each tagged tread has a stencilled numeral and a red tick painted on it. Tags are numbered in climbing order: 01 top-left, then the bottom row left→right.

## 2-second hook
- **Frame 0 shows:** the still. The climber is one riser below his own pennant, with his trail round the ring behind him and the numbered, ticked treads.
- **Motion (0–2 s):** he climbs one full lap. He steps onto the flag landing and keeps going round the ring, about 16 risers at about 140 ms each (power2.inOut, no bounce), with a fresh red trail drawing behind him. Each tick re-strokes as he passes it. At 2.2 s he lands back on the frame-0 riser and turns his head to his flag: the double take. On screen: "Tiap langkah benar. Totalnya mustahil." (5 words). The camera stays still.
- **Why it stops the scroll:** a confident climber goes up the whole way and ends exactly below the flag he planted. You see the impossible loop happen.
- **Hook type (docs/bank-hook-ending.md):** #1 AI salah di depan mata. The figure flagged "AI" confidently climbs a loop that cannot exist.

## Loop ending
- **Last 1 s:** after the CTA (about 85%), he finishes his last lap at the same cadence. The final riser puts him on the frame-0 step, facing his pennant, with the trail complete.
- **Seam:** ending E (motion continues across the cut). His step rhythm carries over the cut, and the last frame equals frame 0 (B as backup). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` inside the plinth label card (x 90–900, card about y 1290–1620). Bricolage Grotesque 600, 48→40 px, 1–2 lines; a third line at 40 px appears only for captions over about 80 characters. Spoken words are ink, upcoming words `#645C62`. The active word (D.hl if it is in the caption, else the first word) stands on a red 6 px riser+tread stroke. Below a hairline sits the Fragment Mono 26 px catalogue: "series ep · Tangga Penrose, model 1:50 / Sumber: … · date".

## Notes for the video build
- One beat per item: the climber reaches the numbered tread as it is named, the leader draws numeral→tag and the tick strokes in. The one big reveal is a pull-back from a tight crop of a single flight (a normal stair) to the whole ring.
- Camera = punctuation, at most 1 emphasis move per scene. Never orbit or add perspective, because that breaks the isometric illusion and exposes the seam. Keep AX = cos 30° and AY = 0.5.
- Five items use a row of four narrow lower tags (192 px, numeral on top, text wraps). That is still legible, but labels should stay ≤ 16 characters.

## References
- https://en.wikipedia.org/wiki/Penrose_stairs: each flight is an acceptable stair; only the connections make the whole impossible.
- https://en.wikipedia.org/wiki/La_Muralla_Roja: flat stucco planes coloured by face (pink, red, indigo), where the stair is the architecture.
- https://en.wikipedia.org/wiki/Ascending_and_Descending: a populated endless stair reads instantly as "busy, confident, going nowhere".
- https://en.wikipedia.org/wiki/Isometric_projection: the (1,1,1) direction collapses to a point, which is how a real open spiral closes on screen.
