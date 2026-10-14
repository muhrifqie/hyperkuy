# Murmuration (`murmuration`)

**Metaphor:** a dusk murmuration of starlings over power lines and a flooded sawah → emergent abilities: each bird follows three simple local rules, yet the flock draws a shape no bird planned; scale simple next-word prediction up far enough and new abilities appear.
**Series:** how-ai-works · ai-in-numbers
**Axes:** dark-to-light · serif · 2.5D · abstract

## Look
- **Palette:** `#1E2A44` dusk navy (sky crown, moon + stars) · `#6C7A99` slate (sky behind the title, fading to mauve) · `#E9C9A8` peach (horizon glow, water mirror, moon) · `#121212` starling ink (title, flock, notes, caption, wires, silhouettes) · `#F4EFE6` cream (hl knock-out, tally tags, ellipse halos)
- **Fonts (Google Fonts):** Spectral (500 title/values/caption, italic 500 active word) / IBM Plex Mono (600 kicker ring, labels, tallies; 500 field log)
- **Grid / layout:** one silhouette photograph: everything dark is ink, the sky and its mirror are the light. Kicker ring y 290–340. Title y 364 → T (ink, 116→72 px, ≤300 tall). Flock T+58 → ≤1196: the stream enters from the right edge (item 1), the crescent body keeps 48 px clear of the notes column (x 90–~450, each note level with its section). Pole x 46, two sagging wires; caption words perch on them, x 104–900, y ≈1190–1370. Horizon y 1404. The flooded sawah below mirrors the sky and the flock, with irregular dykes. Field-log line y ≈1536–1602 on the near dyke. The bottom 300 px hold the flock's reflection and rice tufts (decoration).
- **Signature elements:**
  1. The murmuration is one crescent ribbon of about 19k seeded birds. A thin stream of single wing-marks (item 1) swells into a body with one long fold crest crossing it (near layer: bigger, darker dots; far layer: paler), then tapers to a soft tail. No straight edges. Each item is one section: a slight density pinch, a dashed field-glass ellipse, and a birder's tally tag whose count doubles section by section (≈120 → ≈11.000 ekor). Scale makes the shape.
  2. The `hl` word is knocked out in cream from its own small flock: a stippled ink patch that hugs the letters, so the birds crowd tighter around tall letters. The patch never leaves its own title line. When `hl` is on the last line, a few birds peel off towards the stream.
  3. The caption perches on the power lines. Each word sits on wire 1 or wire 2, rotated to the wire's slope. The active word is the bird taking off, which leaves a gap in the roost. The kicker is stamped on an aluminium bird ring, and the source + date sit on the near dyke like a field-log entry.

## 2-second hook
- **Frame 0 shows:** this composition with the flock formed. The caption slot shows the hanging sentence, built from the data: `D.caption || D.sub` cut at its last inner `,` `;` or `—` when that keeps at least 3 words, otherwise with the final third of the words dropped, and ending in "…". Birds sit on the wire where the missing words will land. Examples only: "Makanya AI kadang salah hitung huruf…", "Kecil? Kalikan miliaran chat…".
- **Motion (0–2 s):** 0–0.4 s: the perched birds lift off and a density wave ripples from the stream into the body. 0.4–1.8 s: the fold crest rolls down the ribbon and the body swells about 8% as stream birds pour in. Edge birds of the `hl` patch shimmer. Ease sine.inOut, camera still.
- **Why it stops the scroll:** thousands of dots change shape together while the sentence on the wire is visibly unfinished.
- **Hook type (docs/bank-hook-ending.md):** #12 Kalimat menggantung

## Loop ending
- **Last 1 s:** the CTA lands at about 85%. Then the fold crest rolls back up to its frame-0 position and the 8% swell reverses, so the body is back to frame-0 size. The tail drains while the stream keeps entering from the right. The last VO line hangs ("…makanya:") and the lifted birds glide back onto their exact frame-0 perch spots.
- **Seam:** birds flow along the ribbon as a conveyor whose phase advances exactly one period, so the dot field equals frame 0 and the frame-0 hanging sentence follows the last VO line. Endings A (kalimat sambung) + E (arah gerak menyambung), no fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"`, words perched on wire 1 (y ≈1190–1290) then wire 2 (≈1260–1370), x 104–900, Spectral 500 46→40 px. If the text still does not fit, whole words are dropped from the end and "…" is added (never a cut inside a word). Karaoke: the active word (`hl` word if it is in the caption, else the first word) is italic, lifted 16 px, with a 4 px ink underline and a small flyer. Spoken words are ink `#121212`, upcoming words `#464A56`.

## Notes for the video build
- Per beat, the spoken item's ellipse draws itself (Draw-in), its tally counts up (Count & lock) and the leader draws in. The flock flow slows to about 30% during item beats, so nothing competes with the text and nothing wobbles while idle. Bird parameters are seeded once and positions are a pure function of time along the ribbon, so the flock stays seek-safe.
- Camera: still. One emphasis move in the whole video, a slow pull-back on the last item that reveals the wires and the mirrored sawah, then hold ≥1.5 s. Risk: the roost birds and the cut caption must match frame 0 exactly.

## References
- https://en.wikipedia.org/wiki/Boids — three local rules produce complex flock shapes: emergence without a central plan.
- https://www.awwwards.com/sites/lidar-drone-scanning — thousands of points forming one readable shape in a restrained two-colour palette.
