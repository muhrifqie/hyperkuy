# Jamu Basket (`jamu-basket`)

**Metaphor:** a jamu seller's corner on a sunlit warung wall: bottles lifted out of the bakul and tipped together into one brimming glass, mixed to order → model merging: a new model is blended from the weights of a few existing models in set shares, not trained from scratch.
**Series:** ai-news · how-ai-works
**Axes:** light · serif · 2.5D · physical-object

## Look
- **Palette:** `#F1EBDD` whitewashed warung wall · `#8E2A22` secang red (signboard, secang brew; hl value ink `#A3302A`) · `#E8A11C` turmeric (hl brew + the only thick stream, hl paint on the sign `#F2AB24`, marker swash and loop) · `#2F5DA8` enamel blue (sticker borders, ceret rims, lurik cloth; ballpoint ink `#1F2B57`) · `#2A1F18` ink (marker lettering, bottle outlines). Bamboo and wood are material tones.
- **Fonts (Google Fonts):** Rammetto One (sign: kicker, title, date) / Patrick Hand (ballpoint caption + source) / Caveat Brush (felt-tip sticker labels; chosen for its flagged "1")
- **Grid / layout:** eaves beam y 0–64, two strings down to the signboard x 74–1006 from y 300 (pinstripe inset 13). On the sign, centred: kicker 28 px, title 104→56 px balanced, date 26 px; the sign ends ≤ 680–700 and gets tighter padding for 3-line titles. Bottles: rows alternate L/R top to bottom (3–5), near-horizontal (tilt 94–97°, hl +6°). Left labels start at x 92 and right labels end ≤ 898. The solver keeps same-side bottles apart, every mouth ≤ 1100 and every label ≤ 1148, so the glass is a no-go zone. When the rows don't fit it steps down label size (37/50 → 30/36), then gaps, then tilt. Glass GX±142 (GX 492–588), y 1162–1442, in front of the bakul (rim 1250, base 1420) on a bench from 1372. The exercise-book sheet (x 78–1002) is anchored at 1628 with its top ≥ 1456. Rhizomes and the ceret below 1620 are decor only.
- **Signature elements:**
  1. Hand-lettered sticker labels on the bottles themselves: white label paper with a printed blue border and felt-tip lettering. They run along each tipped bottle, so the text sits only 4–13° off level. Label = model, value = its share; the hl value is in secang red with a double turmeric swash.
  2. One pour that matters: a tapered 32 px turmeric stream with highlights and thrown droplets. The other streams are 7–12 px and fall behind the bottles below them. Everything lands in one brimming ribbed gelas belimbing (284 px wide) with froth, a splash crown and each brew still swirling.
  3. A secang-red signboard hung from the eaves, painted by a sign painter: drop-shade lettering, hl repainted in turmeric. Around it a sunlit whitewashed wall, the woven bakul with its lurik selendang, and a blue-rim enamel ceret.

## 2-second hook
- **Frame 0 shows:** the brimming glass front and centre with the thick turmeric stream still falling (thin streams too). The sign reads "Tiga AI dicampur jadi satu." (5 words).
- **Motion (0–2 s):** 0–1.0 s the turmeric pour keeps flowing (dash travels down the path), the froth rises and the meniscus domes to the rim. 1.0–1.5 s each bottle tips back 5° (stagger 0.08 s, power2.out) and its stream breaks into drops, top row first, hl last. 1.5–2 s the swirl settles to one amber and the hl swash draws under its value. Camera still.
- **Why it stops the scroll:** the finished drink (the merged model) is there before anything is explained, poured from labelled bottles. It reads as "mixed, not made", and every Indonesian viewer knows the mbok jamu pour.
- **Hook type (docs/bank-hook-ending.md):** #3 Hasil dulu, caranya nanti

## Loop ending
- **Last 1 s:** the CTA lands at ~85% while the glass sits brimming. The level never drops or refills, so nothing reads as a rewind. In the last 0.6 s the same bottles re-tip by the same 5°: hl first, then the others 0.06 s apart. Their streams draw back in from the mouths to the surface.
- **Seam:** the last frame is frame 0: same tilts, same labels, the same brimming glass with every stream falling. A single "gluk" pour SFX on the cut matches the opening pour. Endings B (frame kembali persis) + J (ketukan/SFX).

## Caption / voice-over
- **Slot:** `data-slot="caption"` on a sheet torn from a buku tulis (blue rules every 52 px, double red margin), text x 178–968, y ≈ 1473–1586. Patrick Hand 46→40 px, at most 2 lines, then trimmed with "…". Spoken words are ballpoint `#1F2B57`, upcoming `#56638C`; the active word gets a hand-drawn turmeric marker loop (no box). Source line 27 px at ≈ 1590–1616.

## Notes for the video build
- Per beat: on the word that names it, a bottle lifts 6 px, its value's swash draws in (stroke-dashoffset) and its brew curls once through the glass. The level stays put. Streams stay stopped between beats (no idle wobble).
- Camera: one punch-in to the glass surface on "dicampur" (hold ≥ 1.5 s) and one pull-back near the CTA. Never in and straight back out.
- Best for merge/blend/mixture topics. For unrelated numbers (sample-numbers) the blend is only decoration, so pure ai-in-numbers is better served elsewhere. With 5 long labels the title drops to 56–58 px.

## References
- https://en.wikipedia.org/wiki/Jamu — mbok jamu carry a bakul of bottled brews (turmeric, kencur, secang, bitter) and mix them per customer: a real set of distinct liquids to blend.
- https://en.wikipedia.org/wiki/Sign_painting — hand-painted plank: drop-shade lettering, pinstripe border, one accent colour repainted for the key word.
- https://arxiv.org/abs/2306.01708 — TIES-Merging: a merged model is a weighted sum of existing models' weight changes, so each bottle carries a share you choose (the label value).
