# Reverse Camera (`reverse-camera`)

**Metaphor:** a car's rear-view camera at night, with dynamic guide lines split into distance bands → guardrails: the model moves freely, the safety rules are the guide lines, and when an answer drifts into the red band the system brakes (refuses or redirects).
**Series:** how-ai-works, ai-news
**Axes:** dark · condensed · 2.5D · app-ui

## Look
- **Palette:** `#0B0C0F` display black · `#F2F0EA` cream text / far band · `#F2B134` amber hl, mid band, R gear · `#E2412F` red STOP band · `#6C8EF5` blue (top-down car, cold lamp pool only)
- **Fonts (Google Fonts):** Archivo (wdth 66, 800, uppercase title) / Archivo Narrow 600–700 (chip labels, caption) / Spline Sans Mono 500–700 (values, meta, gear strip)
- **Grid / layout:** portrait infotainment screen in a 14 px bezel, 90 px margins. Status bar y 196–236 (decor) · kicker + P R N D strip y 298–342 · title y 362 → ≤ 632 (fit 128→72 px, ≤ 270 px tall) · camera pane x 60–1020 from title +34 to caption −26 (≈ y 600–1430) · caption ≈ y 1440–1560 · meta bottom-anchored at y 1618 · dock icons y 1716–1826 (decor).
- **Signature elements:**
  1. Dynamic guide lines that bend with the steering, split into distance bands: each item = one rung with a chip (label on black, value on the band colour); far = cream, then amber, nearest = red STOP band with hatch. Rung spacing follows perspective but never closer than one chip.
  2. Wide-angle night feed, all from one ground-plane projection + barrel distortion: worn bay lines, wheel stop, hazard-striped column, oil stains, rear bumper arch, grain + lens vignette, reverse-light pool and red tail glow.
  3. A striped bollard already inside the red band with red sonar arcs on the ground, echoed by the top-down car inset (left rear arcs amber → red, STOP block). The hl word sits on its own amber guide rung in the title.

## 2-second hook
- **Frame 0 shows:** this still: R engaged, guide lines curving into the bay, the bollard touching the red band, inset arcs lit.
- **Motion (0–2 s):** the ground creeps toward the viewer (car reversing: bay lines + joints slide ~40 px, linear). At 0.6 s the reverse-light pool reaches the bollard and reveals its hang tag (video-only layer) with the risky prompt, a light-mask wipe, not a zoom. At 0.9 s the inset arcs step amber → red ring by ring (80 ms stagger), the red rung + hatch flash once (200 ms, power2.out), STOP blinks once. Camera still.
- **Why it stops the scroll:** everyone knows the beep-beep-STOP moment; seeing it fire on an AI answer makes the viewer ask "what is that post?".
- **Hook type (docs/bank-hook-ending.md):** #9 Detail misterius (tag revealed by the reverse light, mask reveal, no camera zoom).

## Loop ending
- **Last 1 s:** gear strip flips R → D, the ground slides back up (car pulls forward), the guide lines relax to their frame-0 curve and the bollard drifts back to its frame-0 spot; on the last frame R lights again.
- **Seam:** ending B (frame kembali persis) reached through E (arah gerak menyambung): the last frame equals frame 0 and the ground motion carries straight into the frame-0 creep; cut on the sensor beep that opens the video, no fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–990, y ≈ 1440–1560 (bottom-anchored above meta), 46 px (fits down to 40, max 2 lines) Archivo Narrow 600. Karaoke: spoken words cream, upcoming grey `#8E929B`, active word (= hl if in the caption, else the first word) as an amber pill with near-black text.

## Notes for the video build
- One rung per beat: side lines draw in far → near (stroke-dashoffset), each chip drops onto its rung on the word that names it, the band fill fades in beneath, the matching inset arc lights. Ground creep is the only ambient motion.
- Camera: still; one punch-in to the red rung + bollard on "tolak"/STOP, hold ≥ 1.5 s, then cut (never zoom straight back out).
- Keep chips crisp above the grain/vignette; never animate the barrel distortion itself.

## References
- https://en.wikipedia.org/wiki/Backup_camera — guide overlay drawn straight over the live view, coloured by distance.
- https://en.wikipedia.org/wiki/Parking_sensor — segmented sensor arcs that step up in urgency as the obstacle nears.
- https://arxiv.org/abs/2212.08073 — Constitutional AI: written principles are the lines an answer must stay within.
