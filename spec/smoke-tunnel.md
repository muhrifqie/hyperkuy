# Smoke Tunnel (`smoke-tunnel`)

**Metaphor:** the test section of a smoke wind tunnel → the AI's knowledge is the airflow and never changes; the shape of your prompt (role, context, example, format) is the wing, and it decides how that same flow bends into an answer.
**Series:** ai-tools · how-ai-works
**Axes:** dark · condensed · 2D · physical-object

## Look
- **Palette:** `#2A2C30` painted-steel rails · `#08090B` window backdrop · `#F2F0EA` stencil paint, smoke, wing · `#E8692F` safety-orange paint (hl, hl tuft/thread, active word) · `#D9BE8C` manila tags (+ `#8DB6DC` pale blue for the dashed 22-deg ghost layer only)
- **Fonts (Google Fonts):** Big Shoulders Stencil Display 800-900 (title, kicker marking, station numbers) / Barlow Condensed 500-700 (tags, caption, sub) / DM Mono 400-500 (data plate, serial plate, DAQ header)
- **Grid / layout:** full-bleed steel panel with an edge-to-edge window slot. Top rail y 0 to ~606 (flange + bolt row at 172-204, painted flow arrow at 228): kicker marking "TEST SECTION · <series> · RUN <ep>" y 296 left, riveted date plate y 284 right (x to 990), stencil title y 350, uppercase, 120 → 88 px, max 2 lines (3 only at ≤ 97 px); sub under it only when `caption` differs. Window x 0-1080 between the rail lips (about y 606-1330), mm-ruler floor 38 px. Wing chord x 140-880, pivot at 27 % chord. Bottom rail: DAQ readout x 90-900 bottom-anchored above the serial plate, serial plate (source) bottom at 1620.
- **Signature elements:**
  1. Stencil lettering painted on the rail: title in paper-white paint, hl in safety-orange paint with no box, kicker as a small stencil marking; the date on an engraved riveted data plate, the source on the frame's serial plate.
  2. Real streamlines: Joukowski-wing potential flow (Kutta condition, 7 deg) traced from an evenly spaced rake, around a big matte-white wing. Over it a dashed pale-blue ghost of the same wing stalled at 22 deg with hard-coded torn wake vortices behind its trailing edge, plus a swing arrow 22 → 7 deg: before and after in one frame.
  3. Items = wool tufts (100 × 14 px, visible tape square) along the wing, each with a stencilled station number 01-05 on the skin and a manila shipping tag tied by a straight thread that trails downstream: one tag row above the wing, one below, leading edge kept clear. The hl item (label match first, then exact value, else none) gets an orange tuft, thread and station number.

## 2-second hook
- **Frame 0 shows:** the same window, rake and wing, but the turntable holds the wing stalled at 22 deg; the smoke behind it is torn into the hard-coded wake vortices (the ghost layer of the still, drawn solid). Readout header: "RUN LOG · α 22°". On screen ≤ 7 words: the title.
- **Motion (0-2 s):** smoke streams continuously (stroke-dashoffset, left to right, linear). At 1.2 s the turntable rotates the wing 22 → 7 deg (0.5 s, power2.inOut), the filaments re-route from the wake paths to the attached streamlines (0.5 s) and the header ticks to "7°".
- **Why it stops the scroll:** the classic smoke-tunnel demo: the same smoke visibly re-attaches the instant the angle changes; the before/after reads without sound.
- **Hook type (docs/bank-hook-ending.md):** #6 Sebelum vs sesudah, superimposed in one window instead of split (the still keeps the 22-deg ghost next to the 7-deg wing).

## Loop ending
- **Last 1 s:** CTA lands at about 85% ("Coba bentuk prompt-mu"); the tags peel off downstream with the flow, the smoke keeps leaving the right edge, and on the final beat the turntable swings back to 22 deg: the flow separates and the wake vortices return.
- **Seam:** Ending E (arah gerak menyambung) + D: the dash phase of the smoke at the last frame equals frame 0 and the wing is back at the stalled 22 deg exactly as frame 0 has it, so the loop restarts on the same stall.

## Caption / voice-over
- **Slot:** `data-slot="caption"` inside the DAQ readout bolted to the bottom rail, x 120-870, about y 1430-1540, 44 px Barlow Condensed 500 (fits 2 lines, steps to 40 px), karaoke: spoken words `#F2F0EA`, active word `#E8692F` bold with a 4 px orange underline cursor (no box), upcoming words `#8D949C`. Active = `hl` if it is in the caption, else the first word. Header line drops when the window gets short.

## Notes for the video build
- Per item: tuft taped on (stamp, overshoot on the tape only) → station number sprayed (stencil wipe) → thread draws to the tag, tag settles into the flow on the word that names it. Values count & lock.
- Camera still; one punch-in on the hl tuft in the payoff scene, hold 1.5 s, no zoom back out. Liveliness comes from the smoke and the turntable, never the camera.
- Risk: ~16 filaments × 3 layers of blurred paths: keep the blur static, animate only dash offsets; precompute both path sets (22 and 7 deg) for the morph.

## References
- https://www.grc.nasa.gov/www/K-12/airplane/tunsmoke.html - smoke released upstream from a rake, the streams pass the model: the motion is the content.
- https://www.grc.nasa.gov/www/K-12/airplane/tunvis.html - tufts taped to the surface show attached vs separated flow: labels that live on the object.
- https://en.wikipedia.org/wiki/Joukowsky_transform - a circle mapped to a wing gives exact streamlines; the drawn flow is physically honest.
