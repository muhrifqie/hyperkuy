# Reroute (`reroute`)

**Metaphor:** a night-mode navigation app hits a closed road and recalculates → an AI agent runs plan → act → observe → re-plan (ReAct): when a step or tool call fails, it reroutes instead of giving up.
**Series:** how-ai-works, ai-tools
**Axes:** dark · grotesque · 2.5D · app-ui

## Look
- **Palette:** `#0F1420` night ground, route casing · `#1E2738` slate cards, blocks, sheet · `#3D7CFF` live route, pins, hl route-shield · `#F4B23E` road-closed amber (barricade, banner, active caption word) · `#EEF1F6` text, puck
- **Fonts (Google Fonts):** Schibsted Grotesk (800 title, 600–700 UI) / Geist Mono (values, pin numbers, meta, steps pill)
- **Grid / layout:** 90 px side margins. Meta row y 298–332. Turn-instruction card + amber banner from y 346 (bottom ~640–690; title auto-fits 104→68 px, 2–3 lines, sized so the stops always fit). Full-bleed map from a real perspective camera (pitch 50°). Stops between head bottom +20 and ~1370: before the detour the callouts sit left of the lower leg (x ≤ ~780), after it left of the upper leg (x ≤ ~530); old plan + barricade own the right column (x 690–890). Voice sheet x 60–1020, bottom y 1614.
- **Signature elements:**
  1. Perspective blue route ribbon (true ground projection: wide near, thin far, white chevrons) that bends one block around the closure: the new plan.
  2. Amber two-rail barricade with a round "closed" sign standing on the old road; the old plan stays as a grey dashed line running straight into it and on to the same destination.
  3. Nav chrome carries the data: title = turn-instruction card (detour arrow, hl in a blue route-shield), "Menghitung ulang rute…" banner, numbered map pins with callouts (= items), voice-guidance sheet (= caption) with an "n langkah" steps pill.

## 2-second hook
- **Frame 0 shows:** the blue route running straight up into the amber barricade, banner spinner mid-turn, puck at the bottom, on-screen line "AI-nya nyasar. Terus gimana?".
- **Motion (0–2 s):** 0–0.3 s the segment past the corner snaps from blue to grey dashes; 0.4–1.3 s the new blue detour draws in from the corner around the block (stroke-dashoffset, power2.inOut), chevrons trail it; 1.3–2.0 s pins 1..n pop along it (stagger 90 ms), the spinner completes its turn and stops.
- **Why it stops the scroll:** everyone knows the "recalculating" moment; seeing the AI's plan hit a wall and redraw itself is a visible failure and recovery inside one second.
- **Hook type (docs/bank-hook-ending.md):** #1 AI salah di depan mata.

## Loop ending
- **Last 1 s:** the puck reaches the destination pin, the steps pill ticks to n/n then resets to 0/n, the blue detour retracts to the corner and the straight blue line grows back into the barricade; the banner slides back in.
- **Seam:** the last frame is the frame-0 composition (same camera, same barricade, straight route, banner): ending B "frame kembali persis". No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` inside the voice-guidance sheet, x 172–990, y ~1400–1510, 46→40 px Schibsted Grotesk 600, max 2 lines (a long sub shows a word window around the active word with "…"). Active word = amber pill `#F4B23E` with dark text; spoken words `#EEF1F6`, upcoming `#9DA8BA`; blue speaker disc on the left. `sub` is not printed elsewhere.

## Notes for the video build
- Per beat: one pin pops on the word that names it, its callout morphs out of the pin, the puck advances along the ribbon; karaoke advances word by word. Re-project the route per data set (geometry is computed from the card layout), never CSS-transform the SVG map.
- Camera = punctuation: still by default; one emphasis move only, a slow punch-in to the barricade when the failure is explained (hold ≥ 1.5 s), then cut back. No continuous map rotation.
- Keep amber the only warm colour; blue = current plan, grey dashed = abandoned plan.

## References
- https://arxiv.org/abs/2210.03629 — ReAct: reasoning traces let the model track and update its plan as observations arrive; re-planning is the core motion.
- https://www.anthropic.com/engineering/building-effective-agents — agents need ground truth from the environment at every step; the closed road is that feedback.
