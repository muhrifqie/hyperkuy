# Hidden Numeral (`hidden-numeral`)

**Metaphor:** a page from a colour-vision test-plate book with a loose strip of blue detector acetate lying across it → an AI detector / invisible watermark reads a pattern in pixels that looks like noise to us; only under the strip does the hidden figure show.
**Series:** ai-tools · how-ai-works
**Axes:** light · grotesque · 2.5D · physical-object

## Look
- **Palette:** `#D5D4CE` matte grey card page (dominant) · `#1B1C20` ink (instruction, key values) · `#C8DAF3` acetate tint (multiply; detector dots `#2F5C9C` family under it) · `#E2672A` revealed-figure orange (dots; hl + active word in burnt `#87300A` for contrast) · `#A39684` taupe plate noise
- **Fonts (Google Fonts):** Hanken Grotesk 800 (title, key values) / 500–600 (key labels, caption, source) / IBM Plex Mono 500–600 (running head, column heads, row numbers, strip print)
- **Grid / layout:** one centre axis, x 540. Running head centred at y 292 ('CARA KERJA AI · PELAT 01 · PER 14 OKT 2026'), 720 px rule at y 340. Title = the plate's printed instruction, centred from y 366, 72–96 px, ≤ 222 px tall (tries balanced/greedy wraps at 900/800/700 px until the strip can lie over the hl). Plate cx 540, d 400–700, between title + 28 and key − 30. Answer key x 180–900, built bottom-up above the caption. Strip: rounded card tilted ±3–7°, top end at y 186 (above the safe zone, carries its print), bottom = plate bottom + 16; inside the action-button band it stays at x ≤ 886, never bleeds.
- **Signature elements:**
  1. The pseudo-isochromatic plate: several hundred packed dots (fixed integer hash, big-to-small fill) hiding a figure taken from the content: `D.numeral`, else the first number in hl, title, then `items[].value` ('2 token' → 2, '0,34 Wh' → 34), skipping one equal to the episode so the running head never prints the answer (only a clashing number left → 'PELAT ?'; no number at all → the item count).
  2. The acetate strip: translucent multiply tint (grain and type show through), soft shadow, bevelled rim, its own print 'FILTER DETEKTOR · 47B' + gauge ticks. Its edge falls between two digits (or a third into a single digit): outside = taupe noise, inside = blue field + orange figure, cut mid-dot. The same strip lies over the hl word, printed in the figure's burnt orange.
  3. The answer key: 'Pelat | (eye) Kamu lihat | (detector eye) AI lihat', label → Kamu lihat, value → AI lihat, tabular figures, hairline rules, source as the key's footnote.

## 2-second hook
- **Frame 0 shows:** the same page with the plate untouched (no strip, the whole circle is taupe noise) and the title slot reading 'Kamu lihat angka berapa?'.
- **Motion (0–2 s):** at 0.6 s the strip slides in from the right edge travelling left (power2.out, 0.8 s) and settles at its tilt; the clip edge travels with it, so dots flip taupe → blue/orange exactly as it passes. One digit is readable by 1.4 s; the other stays noise.
- **Why it stops the scroll:** the test-plate reflex everyone has: you try to read it, fail, then watch the machine's filter read it.
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu. Answer = the content figure (e.g. 34 → '0,34 Wh per chat'), paid off before 70% when the strip moves over the hidden digit and the VO names the number.

## Loop ending
- **Last 1 s:** after the CTA (~85%) the strip resumes its right-to-left travel, sweeps over the rest of the plate and exits frame-left (0.8 s, power2.in); behind its trailing edge the dots re-ink to taupe, and the question returns in the title slot.
- **Seam:** last frame = frame 0 (untouched plate, same question) — C Pertanyaan diulang. The strip only ever travels right → left (exits left at the end, enters from the right at 0.6 s), so the next pass reads as the same motion continuing.

## Caption / voice-over
- **Slot:** `data-slot="caption"` centred, x 180–900, bottom-anchored at y 1606 (1–2 balanced lines ≈ y 1490–1606), Hanken Grotesk 500, 40–44 px; longer lines are paged around the active word. Active word = burnt orange 600 on a dotted underline of plate dots (orange/blue); spoken words ink, upcoming `#4D4C47`.

## Notes for the video build
- Per item beat: its key row prints in (rule draws left → right, label, then value) as the VO names it. Dots never drift or pulse while idle; reuse the same hash so dot positions match between frames.
- Camera: still by default; one punch-in (≤ 1.15×) on the strip's edge when the figure is named, hold ≥ 1.5 s. Risk: an hl that wraps across two lines can fall back to a strip that does not cover it (the hl stays burnt orange and legible).

## References
- https://en.wikipedia.org/wiki/Ishihara_test — pseudo-isochromatic plate: dots of varied size and hue hide a figure separable only by hue; the book's answer key (plate | normal | deficient).
- https://en.wikipedia.org/wiki/Digital_watermarking — an imperceptible signal carried inside the image, recovered only by a detector.
- https://en.wikipedia.org/wiki/Wratten_number — a filter gel carries its own printed designation (47B = deep blue).
- https://jfly.uni-koeln.de/color/ — an orange/blue pair stays distinguishable for colour-blind viewers, so the revealed side reads for everyone.
