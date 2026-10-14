# Teleprompter (`teleprompter`)

**Metaphor:** a broadcast prompter seen from the presenter's mark. Every line that reaches the glass is read in the same calm voice at the same speed → an AI sounds equally sure whether a line is right or wrong (confidence is not correctness).
**Series:** how-ai-works
**Axes:** dark · grotesque · 3D · app-ui

## Look
- **Palette:** `#0B0C0E` studio black / hood · `#F4F2EC` script white, reverse-video hl · `#F2A23A` cue arrow, line counter, active caption word · `#E04E3E` tally lamp, producer's strike / CEK? · `#7EA2EE` lens coating, YAKIN readout
- **Fonts (Google Fonts):** Schibsted Grotesk 800/700/600/500 (script lines, caption, tape) / DM Mono 500 (margin numbers, read times, status strip, readout)
- **Grid / layout:** one-point perspective, vanishing point (600, 500), slight 3/4 view. Hood front frame x 14–1066, y 282–1426, tally lamp on its top rail. The glass is a trapezoid from the front top edge (y 312) to the back bottom edge (x 141–961, y 1238); side plates and hinge knobs show the 45° wedge, and the face-up monitor sits at y 1244–1390.
- **On the glass:** read line 01 (kicker) slides into the hood's top wall at y 346–395 (painted decoration). **Title = the live line** at x 240–956, top y 410, 116→72 px (prefers ≥ 96), max 4 lines, with the cue arrow (x 160–204) on its first line. Items are the upcoming lines (`label — value`) at 62→52 px, wrapping to 44 only if needed; the margin holds line no. + read time (DM Mono 30). Status strip at y 1182–1230: slug · 02/NN · LAJU 1,0×.
- **Under the hood:** subtitle bar at y ≈ 1430–1560, then the tape with source · date (≤ y 1620). The camera top (y 90–290) and the pedestal (y 1420–1920) are decoration.
- **Signature elements:**
  1. The face-up monitor showing the same script upside-down in perspective. It is painted from the live text, and only a prompter has it.
  2. The single amber cue arrow with the hl in reverse video on the reading line; the camera lens (rim highlight, coating, aperture) is visible through the glass behind it.
  3. Prompter-software status strip (line counter, speed) and the red talent tally. With data: a producer's red strike + CEK? on `flag`/`wrong` lines and one big YAKIN readout from `conf`, labelled "ilustrasi".

## 2-second hook
- **Frame 0 shows:** exactly the cover: the hook line parked on the cue arrow, the upcoming lines below, the tally lit, and the same script upside-down on the monitor.
- **Motion (0–2 s):** at 0.3 s the hook line's upside-down twin on the monitor brightens. From 0.4 to 1.0 s it lifts and flips upright (rotateX 180°→0 around the glass bottom edge, power2.inOut) onto the live line, which flares and settles. At 1.1 s the reverse-video block re-stamps the hl word. The only on-screen words are D.title (from data).
- **Why it stops the scroll:** upside-down text snapping into readable words makes viewers ask "wait, how?", and it shows how a prompter works.
- **Hook type (docs/bank-hook-ending.md):** #9 Detail misterius. If the topic has a flagged line, the #1 payoff (AI salah di depan mata) lands before 70%: the line reaches the arrow, the strike + CEK? slash across it, and YAKIN and LAJU 1,0× do not move.

## Loop ending
- **Last 1 s:** the CTA line passes the arrow at about 85%, then the script hits its end mark. The operator whips it back to the top (0.4 s ease-in-out; the monitor copy runs the opposite way) and parks line 02 on the arrow. Any strike lifts off.
- **Seam:** B (frame kembali persis). The parked glass equals frame 0, the tally never goes off, and there is no fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–990, top y 1442 (min 1430). Centred on-air subtitle bar, each line on its own black box, 44 px (40 floor), 1–2 lines. Karaoke: spoken words `#F4F2EC` 600, upcoming `#B3B1AA` 500, and the active word in amber `#F2A23A` with a 5 px amber underline (D.hl if it is in the caption, else the first word).

## Notes for the video build
- Per beat, the script scrolls one line per spoken item at a steady 1,0×. The counter ticks 02→03, and the monitor copy moves the opposite way because it is the reflection. Read times never change. The camera stays still, with one slow push toward the flagged or payoff line; hold ≥ 1.5 s, cut wide before the loop.
- Data: `items[].conf` (0–1, or "99%") gives the per-line % plus one YAKIN readout labelled "ilustrasi"; `items[].flag`/`wrong` gives the strike + CEK?. If neither field is present, neither is drawn.

## References
- https://en.wikipedia.org/wiki/Teleprompter — the beam splitter reflects a face-up monitor (flipped image) toward the talent while the lens sees straight through.
- https://en.wikipedia.org/wiki/Tally_light — the red lamp tells the talent this camera is live.
- https://en.wikipedia.org/wiki/Reverse_video — swapping foreground and background as on-screen emphasis (prompter cue marking).
