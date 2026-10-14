# Margin Bell (`margin-bell`)

**Metaphor:** a portable typewriter's margin scale, right margin stop and bell → max output tokens: every reply has a fixed length budget; the bell warns a few characters before the stop, then the carriage locks and the answer stops mid-sentence until you type "lanjutkan".
**Series:** how-ai-works · ai-tools
**Axes:** pastel · mono · 2.5D · physical-object

## Look
- **Palette:** `#C9D6DF` powder-blue desk · `#F6F1E7` typing paper · `#1E2A38` ink + enamel body · `#B5452C` red half of the ribbon (hl, right stop, bell zone, active word) · `#A7A9AC` steel (scale, bail, bell, key rings)
- **Fonts (Google Fonts):** Courier Prime 700/400 (everything typed: title, items, caption, meta) / Instrument Sans 600 (numbers stamped into the steel scale)
- **Grid / layout:** one column grid shared by type and scale: text x 140–900 = left stop (col 10) to right stop (col 70). Paper x 96–964, y 176–1300. Meta y 300–380 · title y ~410–750 (auto 104→62 px, ≤ 4 lines) · items y ~770–1014 · rack + scale y 1026–1112 · bail y 1112–1136 · caption y ~1150–1276 on the platen · type guide y 1276–1336 · enamel body with ribbon, spools and bell y 1336–1620 · keys below 1620 (decor only).
- **Signature elements:**
  1. Steel margin scale 0–80 with two stops: ink-blue left stop, ribbon-red right stop, red-hatched bell zone (cols 64–70); a dashed red hard margin rises from the right stop through the sheet.
  2. Typed ledger: every item value is pushed flush against the right stop, so the lines visibly fill the budget; `hl` is re-struck in the red half of the ribbon with a typed underline.
  3. Chrome bell dome with the hammer mid-swing and two red ring arcs, between two-tone (black/red) ribbon spools.

## 2-second hook
- **Frame 0 shows:** carriage hard against the red right stop, the last typed line ending "...dan yang ketiga ad" at col 70, bell hammer mid-swing; title on the sheet "Kok jawabannya kepotong?" (3 words, "kepotong" in red ribbon).
- **Motion (0–2 s):** 0.4 s the hammer completes its swing, one sharp "ting" + the two red arcs pulse out once (300 ms, ease-out); 0.9 s a typebar strikes but nothing prints, the stop tab shudders 4 px (locked); 1.3 s the red dashed hard margin draws up through the sheet (draw-in, 500 ms). Camera still.
- **Why it stops the scroll:** everyone has watched an AI answer die mid-word; the bell gives that annoyance a physical, audible cause in the first half second.
- **Hook type (docs/bank-hook-ending.md):** #1 AI salah di depan mata, staged as #12 kalimat menggantung (the cut line).

## Loop ending
- **Last 1 s:** VO "...makanya jawabannya berhenti di" — the return lever throws the carriage left (450 ms, ease-in-out), paper indexes one line, a fast type-on runs "...dan yang ketiga ad" back to col 70 and the hammer lifts into its mid-swing pose.
- **Seam:** the last frame is frame 0 (carriage at the stop, hammer mid-swing) and the hanging "...berhenti di" is completed by frame 0's "kepotong?" → ending **A** (kalimat sambung); the bell "ting" at 0.4 s is also the cut beat (**J**). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` = the line on the platen, x 140–900, bottom-aligned at y 1276 (~y 1150–1276), Courier Prime 44 px (→ 40), 1–2 lines; a longer line shows the 2-line window around the active word with "..." at the cut. Active word: bold cream on a red-ribbon block; the type guide's red index on the front rail sits under it.

## Notes for the video build
- Items type on character by character (type-on, ~35 ms/char) with the carriage stepping; when a line enters the bell zone the hatch flashes and the bell rings once; return lever + line feed between items. `hl` is re-struck in red on the word that names it.
- Camera = punctuation: still by default, max 1 emphasis move per scene: a punch-in to the scale (bell zone + right stop) when the limit is spoken, hold ≥ 1.5 s, never zoom back out straight away.
- Risk: keep typing SFX under the VO; one ring per beat at most, or the bell becomes noise.

## References
- https://typecast.munk.org/2015/11/02/come-on-ring-those-bells/ — bell and line lock share the right margin stop: a warning a few characters early, then a hard stop (= token limit behaviour).
- https://patents.google.com/patent/US990834 — a cam on the carriage trips the bell by position: the limit is mechanical, not a choice.
