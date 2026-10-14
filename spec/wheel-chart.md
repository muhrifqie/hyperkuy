# Wheel Chart (`wheel-chart`)

**Metaphor:** a mid-century die-cut cardboard wheel chart (volvelle): turn the riveted top disc to one setting and every cut-out window shows its matching value → a paper calculator for AI ("can my laptop run this model?": dial 7B, the windows read RAM needed per device); every item = one window.
**Series:** ai-tools (also ai-in-numbers, how-ai-works)
**Axes:** full-colour · condensed · 2.5D · physical-object

## Look
- **Palette:** `#E4572E` tomato backdrop · `#1F2A44` navy top disc + pointer tab · `#F5EFE0` cream card, windows, hl window, active caption chip · `#F2B134` mustard scale ring, rivet band, pointer index · `#0E1424` ink type, ticks, card edge shadow
- **Fonts (Google Fonts):** Saira Extra Condensed 800 (title, window values) / Saira Semi Condensed 600 (disc labels, caption) / IBM Plex Mono 500–600 (meta, scale stops, curved instruction, source)
- **Grid / layout:** 90 px side margins. Meta row y 300–342 (series · rule · "No. ep" pill) · title y 352–≈600 (2 lines, 140→104 px; 3 lines 112→72 px, balanced) · the card fitted between title+30 and caption−42 (≈ y 630–1415), 820 px square tilted back 21° in CSS 3D, centred · caption bottom-anchored 18 px above the source line (≈ y 1450–1560) · source + date y ≈1590–1620.
- **Signature elements:**
  1. Die-cut windows — each item is a window cut in the navy disc; the label is printed on the disc, the value shows through on the cream card underneath (inset shadow on the top edge, ring dividers peeking at both ends). 3/4/5 items sit evenly round the rivet; labels place themselves clear of the rivet, rim and curved text, mirror pairs always on the same side.
  2. Brass rivet + pointer tab — the rivet holds the disc; the tab reaches over the mustard 24-stop scale and its little index window shows the episode number, the stop it is set to.
  3. Print furniture — thumb notch cut into the disc rim, hang hole punched through the card, tomato corner flourishes, curved "PUTAR · BACA JENDELA" with arrowheads; the title's hl is the same die-cut window punched into the backdrop.

## 2-second hook
- **Frame 0 shows:** the wheel chart filling the middle, pointer on stop "7B"/the episode stop, every window showing "?"; on screen ≤ 7 words: "Laptopmu kuat jalanin AI?".
- **Motion (0–2 s):** at 0.4 s the top disc (windows, labels, pointer tab) turns 30° clockwise = two stops (0.6 s, power3.inOut, a slight settle on the stop); as each window passes its value it flips "?" → number, one by one (0.15 s stagger). Camera still.
- **Why it stops the scroll:** a personal question plus a physical dial; the viewer guesses their own device before the window opens.
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu.

## Loop ending
- **Last 1 s:** after the CTA (~85%) the disc keeps turning in the same direction and completes its full 360° back to the start stop; windows close to "?" as they pass the pointer; the rivet glint never moves (it does not rotate).
- **Seam:** ending G progres reset — the last frame is the frame-0 composition exactly (pointer on the start stop, all windows "?", glint in the same spot), and the turn is continuous in one direction, so the loop reads as the dial being set again.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–900, bottom-anchored above the source line (≈ y 1450–1560), Saira Semi Condensed 600, 46→40 px, 1–2 balanced lines, ink on tomato; karaoke: the active word (= hl if it is in the caption, else the first word) sits in a cream die-cut chip with navy text, the same window as the title hl.

## Notes for the video build
- Per beat: the disc clicks one stop as the voice names the setting, then one window flips to its value (count & lock for numbers); the pointer index window rolls to the new stop. Rotate `#disc` and `#toprint` together around the rivet inside the tilted plane (preserve-3d); the base card and its scale never move.
- Camera = punctuation: one push-in on the hl window when the key number lands (hold ≥ 1.5 s), otherwise locked off; the 21° tilt stays fixed.
- Risk: labels rotate with the disc, so keep each spoken beat on a stop where the read window is upright; no spin blur, no glow on the rivet.

## References
- https://en.wikipedia.org/wiki/Volvelle — rotating paper discs with cut-out windows that pair values: a paper analog computer for lookups.
- https://en.wikipedia.org/wiki/Slide_rule — aligned circular scales: one setting gives every reading at once, read off at an index.
