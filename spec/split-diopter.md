# Split Diopter (`split-diopter`)

**Metaphor:** the director's field monitor showing a split-diopter shot of a long typed document standing in a row on a studio floor: page 1 sharp up close, the last page sharp far away, the pages in between soft in the seam → "lost in the middle": with a very long input, a model uses the start and the end well but often misses what sits in the middle.
**Series:** how-ai-works · ai-tools
**Axes:** dark-to-light · mono · 3D · physical-object

## Look
- **Palette:** `#0B0C0E` set black (monitor hood, back wall, status bar, ink) · `#F3EDE2` typed paper · `#A88257` warm lit floor (lower half of the set) · `#FFC83A` focus peaking, AC tape, seam notches, active subtitle word · `#B42318` typewriter red ribbon (`hl`, typed red + underscored)
- **Fonts (Google Fonts):** Special Elite (everything typed on the pages: title heading 136/116→96 px, labels, values, HLM n, source/date) / Atkinson Hyperlegible 700 (burnt-in subtitle) / Red Hat Mono 600 (monitor status line)
- **Grid / layout:** the whole frame is the monitor. Hood y 0–176 (decoration under the app header); picture x 54–1026 from y 176 to the frame bottom, bezels outside it. Status line y 292–350 = kicker. Far page top y 372; the item pages step down to page 1, whose top edge sits at y ≈ 950–1010 (follows the title). Page 1 = x 82–998, cropped by the frame bottom; typed column x 110–900: header (HLM 1 · date), title heading, "Sumber: …". Subtitle bottom y 1614. Nothing typed at x > 900 between y 900–1500.
- **Signature elements:**
  1. The receding typed document: item pages stand behind page 1, smaller and higher with distance (HLM 25…100). Blur follows sin(πt): page body, typed filler lines and shadow up to 3.7 px, the label/value layer capped at 1.8 px, so the middle reads soft but legible. The middle pages also fall out of the key light.
  2. Focus peaking, the monitor's yellow edge paint, only on what is sharp: page 1's heading and edges, the far page's text and edges. The middle pages get none; the AC's camera-tape "?" sits on the bezel at their height.
  3. The split-glass edge: a thin straight line across the picture through the middle page, under its typed value, amber index notches where it meets the bezels; the status line reads `◐ 0,6 m · ∞` (two focus planes at once).

## 2-second hook
- **Frame 0 shows:** the full still: page 1 and the last page sharp with peaking, the middle pages soft, the "?" tape on the bezel. The title is page 1's typed heading, e.g. "Halaman tengah dibaca nggak?" (4 words).
- **Motion (0–2 s):** 0–0.3 s the focus readout clicks to `0,6 m` and page 1's peaking flares (3→4 px, full opacity) as it snaps; 0.3–0.6 s second click to `∞`: the peaking jumps up the row to the far page, skipping the middle pages, which never get any (two detents, power3.out). 0.6–2 s hold; only the subtitle words advance.
- **Why it stops the scroll:** two pages are crisp and outlined, the ones between are not; the eye tries to focus them and the viewer is already guessing what the middle says.
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu (answer = the U-shaped recall values, read page by page before 70%).

## Loop ending
- **Last 1 s:** the diopter glass slides out: its straight edge sweeps down across the picture (seam → frame bottom, 0.35 s, power2.in), page 1 loses its peaking and goes soft; 0.15 s hold; the glass slides back up (0.3 s, power3.out) to its notches with a click, page 1 snaps sharp and its peaking returns.
- **Seam:** ending B + J: the click lands exactly on the cut and the last frame equals frame 0 (same blur, peaking, tape, readout). Hard cut, no fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` = burnt-in film subtitle, centred, x 120–960 (x 90–990 when that keeps it to 2 lines; a 3rd line only at x 90–900), bottom y 1614, top ≥ 1500 for 2 lines. Atkinson Hyperlegible 700, 44→40 px, on a 68% black line box (55% is too light for the amber word over the lit page). Karaoke: spoken words white, upcoming `#C9CDD2`, active word (D.hl if in the caption, else the first word) in peaking amber.

## Notes for the video build
- One beat per page: the readout racks to that page, its value is typed in (key strike + carriage sound), its blur steps toward the sin(πt) state; the middle never gets peaking. Payoff: all values readable together as a U.
- The camera is the lens, so it stays still; one emphasis move: a slow push-in on the middle page at the payoff, hold ≥ 1.5 s, no zoom back out. The glass slide is reserved for the loop.
- Risk: animated CSS blur on big layers is expensive; pre-render 3–4 blur steps per page and keep the text layer ≤ 1.8 px.

## References
- https://nofilmschool.com/split-diopter-shot — a half lens keeps foreground and background sharp at once, with a soft seam between. Principle: compose near and far on either side of the seam.
- https://arxiv.org/abs/2307.03172 — Lost in the Middle: recall is best when the relevant text sits at the start or end of a long context. Values shown are illustrative.
- https://en.wikipedia.org/wiki/Focus_peaking — monitors paint the edges of in-focus areas in a bright colour. Principle: peaking as the readable mark of what is "in focus" (remembered).
