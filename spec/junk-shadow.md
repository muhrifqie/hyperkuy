# Junk Shadow (`junk-shadow`)

**Metaphor:** A heap of scrap on a gallery plinth, lit by one floor projector, throws a crisp shadow of a person thinking → AI "understanding" is a pile of statistics that, from the right angle, casts the convincing silhouette of a mind. Look at what is actually on the plinth.
**Series:** how-ai-works
**Axes:** dark-and-light · condensed · 2.5D · physical-object

## Look
- **Palette:** `#1A1714` gallery dark, shadow, vinyl ink · `#EDE4D3` projected light, wall label, knocked-out letters · `#8A7F72` scrap taupe, print marks · `#D2532F` rust sign letter, tag eyelets, label accent rule (rust text uses `#A8401F`) · `#3E5C8A` keycap, can band (wire `#7E98BF`)
- **Fonts (Google Fonts):** Antonio 700 (wall title, knock-out, tag values) / Libre Franklin 500–700 + italic 500 (wall label, tag labels)
- **Grid / layout:** Light fan: soft elliptical far edge (top ≈ y 160) and two hard side edges aimed at the lamp lens (540, 1792), x = 540 ± 0.3655·(1792 − y). Wall title centred in x 110–970, bottom-aligned at y ≈ 552 (top ≥ 318), Antonio 118→60 px, every line kept inside the lit fan. Shadow: crown y 572, head x ≈ 358–728, chin ≈ 943, fist ≈ 955–1068. Plinth top 1116–1150, front 1150–1664 (x 64–1016). Heap y ≈ 1030–1170. Tags hang from the front edge, y ≈ 1164–1330, x 98–892. Wall label x 90, 640–810 wide (never past x 900), top = tags + 16, bottom ≤ 1620. Floor and lamp at 1664–1880 sit under the UI on purpose; the beam edges point at the lamp.
- **Signature elements:**
  1. The shadow and its cause share one outline. The heap's dark body continues the shadow's contour: the receipt roll and its printed paper tongue form the shoulder, the snapped ruler's edge forms the forearm, and the wire coil's loose end traces the knuckles. Pieces are lit from the front-below with darker tops.
  2. Gallery type. The title is matte vinyl lettering on the lit wall. The `hl` is knocked out of the shadow's head (cream letters inside the shadow) and fitted with `isPointInFill` so it stays ≥ 18 px clear of every edge. When the hl is missing, at the very start, or followed by more than 16 characters, the whole title is vinyl and the hl turns rust (`#A8401F`).
  3. The museum wall label (tombstone) on the plinth front: the artist line is series · ep, the label text is the karaoke caption, then a hairline and "Bahan: source · date". Manila tags with rust eyelets are tied by twine to single heap pieces (the items). Tags and label cast their shadows upward because the light comes from below.

## 2-second hook
- **Frame 0 shows:** the fan of light and the thinking silhouette. The wall reads "KELIHATANNYA AI SEDANG" in vinyl, with "BERPIKIR" knocked out of the head (4 words; the template renders this with title + hl = "berpikir"). Room light is off, so the heap is rim-lit only and no tags or label are hung yet.
- **Motion (0–2 s):** 0–0.6 s hold. At 0.6 s a rust stroke strikes through "BERPIKIR" inside the head (0.3 s, ease-out). At 1.0 s the room light rises (0.9 s, ease-out): the heap's tops and colours come up, and the eye drops from the head to the junk that casts it. The silhouette never moves.
- **Why it stops the scroll:** a convincing thinking head has its "thought" crossed out, and then turns out to be junk. The viewer wants the twist explained.
- **Hook type (docs/bank-hook-ending.md):** #4 Mitos dicoret (the reveal is done with light, not a camera zoom)

## Loop ending
- **Last 1 s:** the CTA lands at ~85 %. From 0.0 to 0.8 s the room light dims (ease-in): heap tops, tags, wall label, caption and the wall title go dark with it (the title letters fade out 0.0–0.4 s), while the fan and the shadow stay lit. From 0.5 to 1.0 s the hook line types into the same places: "KELIHATANNYA AI SEDANG" in vinyl, then "BERPIKIR" knocked out of the head, with no strike.
- **Seam:** the last frame is frame 0 exactly: fan, silhouette, rim-lit heap and the full hook line, unstruck. The strike starts at 0.6 s of the next pass. Bank **B, Frame kembali persis**. There is no fade to black because the fan never goes out.

## Caption / voice-over
- **Slot:** `data-slot="caption"` is the label text inside the wall label (x 118 → ≤ 876, y ≈ 1394–1494), Libre Franklin 600 at 42→40 px. It runs 1–2 lines (3 only for ~80–90 character captions), with the last two words glued together. Karaoke: spoken words are ink `#1A1714` and upcoming words `#6B6157`. The active word (`hl` if it is in the caption, else the first word) is bold ink over a 5 px rust accent rule, not a box.

## Notes for the video build
- Per beat: a tag swings onto its twine as its word is spoken (pendulum settle, twine draws from its knot), and the label's accent rule slides from word to word. Optional proof beat: the lamp slides 2°, the silhouette breaks into a shapeless blob, then the lamp slides back ("only from the right angle").
- Camera: still by default. At most one emphasis per scene: a slow push to the heap when the room light rises, then hold ≥ 1.5 s. Never push in and straight back out.
- Deliberate stylisation: the projector would light the heap in frame 0, so keep it rim-lit (front edges only) instead of hiding it. Keep values labelled as illustrations.

## References
- https://en.wikipedia.org/wiki/Tim_Noble_and_Sue_Webster — rubbish assembled and lit from one fixed angle casts a precise figurative shadow; the illusion holds from one viewpoint only.
- https://en.wikipedia.org/wiki/Shigeo_Fukuda — shadow sculptures: a pile of unrelated objects whose shadow is a clean figure. Keep the pile honest-looking and the shadow edge crisp.
