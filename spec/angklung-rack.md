# Angklung Rack (`angklung-rack`)

**Metaphor:** a school / sanggar angklung stand where every bamboo frame is tuned to ONE note → neurons/features: each unit in a model responds to one small pattern; no single unit holds the meaning, the melody (the answer) only exists when the right few sound together.
**Series:** how-ai-works
**Axes:** light · serif · 2.5D · physical-object

## Look
- **Palette:** `#F1ECE1` warm wall · `#C7A56B` bamboo (tubes, caption cue) · `#6D4F2E` stand wood + rattan · `#1F2A44` ink (all lettering) · `#B13A26` vermilion (hl only: board word, hot frame tab/arcs/twine, caption underline)
- **Fonts (Google Fonts):** Spectral 500 (board title, caption) + 600 (note-tab labels, active word) / IBM Plex Mono 600 (values painted on the base tubes, board kicker), 500 (source)
- **Grid / layout:** front uprights x 24–46 / 1034–1056, back uprights x 60–74 / 1006–1020; all text in x 100–970 (below y 900: x 92–898). Name board from y 290 to title + kicker + 24 (≈ 610 with 2 title lines); title starts y 322, 112→84 px, centred, 2 lines preferred, 3 allowed. Back rail = board bottom + 54, front rail + 80; the sounding frames hang graded (tallest left), bases ≈ y 1100–1260; note tabs tied 18 px under each base; caption bottom ≈ 1568, source ends y 1616. Cipher song sheet pinned on the wall at x 612–972, y 74–270 (decoration, SVG paths only).
- **Signature elements:**
  1. Name-board lettering: the title is painted centred on a cream plank lashed with rattan between the two front finials, and the kicker + date are stencilled on its lower edge. The hl word is vermilion and carries the hot frame's cipher note tab (e.g. 1̇) as a superscript. No squiggle.
  2. The frame IS the item: the value is painted on its big base tube in Plex Mono (30–36 px, wraps to 2 lines on a taller tube), and the label sits on a folded paper note tab tied under the base. Every frame also carries its own cipher note tab on the top rail.
  3. Rattle by rank: the rank of each parsed value (magnitude words like ribu/juta/miliar count) sets 0–4 navy arcs and an echo at 0.1–0.35 opacity, so the quietest frame hangs almost still. The hl frame steps forward with scale 1.08, 5 px vermilion arcs, a 4-ghost echo and a vermilion tab. Silent frames hang hazed on the back rail. The sounding frames are the upper-octave pentatonic notes 1̇ 2̇ 3̇ 5̇ 6̇.

## 2-second hook
- **Frame 0 shows:** the full rack, all 12 frames still, base tubes and note tabs blank. The name board carries the myth "AI punya satu otak yang paham".
- **Motion (0–2 s):** At 0.00 s the first sounding frame rattles (tube echo ±8 px ≈ 8 Hz, arcs grow), with its sound starting on frame 0. The others join 120 ms apart, and each value paints onto its tube as that frame sounds. At 0.9 s a vermilion brush stroke strikes the myth L→R (350 ms, ease-out). At 1.3 s the myth lifts off the board and the real title masks in word by word, with the cipher note tab last.
- **Why it stops the scroll:** the bamboo rattle is heard on frame 0, a sound every Indonesian knows from school music class. Twelve instruments hang but only four move, and a familiar belief gets struck out.
- **Hook type (docs/bank-hook-ending.md):** #4 Mitos dicoret

## Loop ending
- **Last 1 s:** after the CTA (~85%) every sounding frame plays one final chord. While it rings out, the real title masks out R→L, the myth drops back into the board slot and the vermilion strike retracts R→L. Values and labels fade off the tubes and tabs, and the frames settle plumb.
- **Seam:** the last frame matches frame 0 pixel for pixel (ending B). The chord's last ring cuts on the beat straight into the 0.00 s opening rattle (ending J). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 152–900 (voice mark at x 100–144), bottom ≈ y 1568. Spectral 40–46 px at line-height 1.7, which leaves room for the note above. One line is preferred, else 2 balanced lines with a "…" window. The karaoke reads like lyrics under a cipher song sheet. The active word is the hl if it is in the caption, else the first word; a multi-word hl is one run. It is set in ink 600 with a 4 px vermilion underline, and the hot frame's cipher numeral with its octave dot sits above it (bamboo `#C7A56B`, ink outline). Spoken words are ink, upcoming words `#665D4E`. If the active run would land on line 2, the window slides so the run opens line 1.

## Notes for the video build
- Per beat: the frame named by the voice starts to rattle on that word, with intensity set by its value rank. Its value paints onto the base tube L→R and its note tab swings in (settle ≤ 3°, text never bounces). The cue numeral hops to the word being sung. The back tier never moves: silence is the contrast.
- Camera: still by default. One punch-in on the hot frame when the hl is spoken (hold ≥ 1.5 s), one pull-back to the full rack for the chord. Max 1 emphasis move per scene.
- Risk: the rattle must read as sound, not wobble. Keep the amplitude small, move a unit only while it is "on", and sync the rattle SFX to the visual onset.

## References
- https://en.wikipedia.org/wiki/Angklung — each performer holds one pitch; melody only emerges from coordination.
- https://ich.unesco.org/en/RL/indonesian-angklung-00393 — frames graded by size/pitch and played as an ensemble (principle only).
- https://en.wikipedia.org/wiki/Numbered_musical_notation — cipher numerals with octave dots written above lyrics (board note tab, caption cue, wall sheet).
- https://distill.pub/2020/circuits/zoom-in/ — one unit ≈ one detectable feature; meaning comes from combinations.
