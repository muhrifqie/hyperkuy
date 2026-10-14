# Approval Prompt (`approval-prompt`)

**Metaphor:** a system permission sheet rising over a dimmed desktop where an AI agent's terminal is paused mid-task → human in the loop: a good agent stops at checkpoints before risky actions, and you are the last approval step.
**Series:** ai-tools · ai-news. Fits agent/tool topics best (what an agent may do, send, delete, pay). Statement titles still work (the "aksi berikutnya:" line frames them as the agent's next action), but they read weaker. Schedule it apart from `circuit-breakers` (same topic).
**Axes:** dark-and-light · grotesque · 2.5D · app-ui

## Look
- **Palette:** `#1B1D22` desktop / dimmed agent window · `#FFFFFF` permission sheet · `#C2362A` risky action (red button + `hl` argument chip) · `#F0AE3C` agent paused (status chip) · `#2F6BEA` system focus (ring on the safe button, caption underline)
- **Fonts (Google Fonts):** Geist 700 (title) / Geist 500-600 (keys, buttons, caption) / Geist Mono (hl chip, values, action line, status, date)
- **Grid / layout:** agent window x 44-1036 from y 196: title-bar dots, a meta row at y 290-330 (kicker left, date right), then the agent log drawn as monospaced word-cells (SVG, no text). Done lines have a grey tick. The current line has an amber chevron and ends in the amber chip "⏸ menunggu persetujuan", always just above the sheet. Sheet x 104-976, top 512 (rises to 432 for long content), bottom about 50 px above the caption. Sheet anatomy: header (app glyph + `D.ask` / `D.step`), mono line `D.action` ("aksi berikutnya:"), title 64-104 px, then a definition list of the 3-5 items (grey key 30-36 px left, mono value 40 px right, hairlines only, no icons), source fine print, and two buttons (`D.no` / `D.yes`). Content stays left of x 900 below y 896. Two queued sheets peek 16/30 px underneath. Caption strip x 90-990, bottom at y 1620. The agent's input box (disabled, pause glyph) sits at y 1676-1768 as decoration.
- **Signature elements:**
  1. Outcome-labelled buttons: the safe one has the default blue focus ring. The risky one is red, the same red as the title's `hl`, which is set as a mono argument chip (like a command parameter in a real confirm sheet). The risky word and the risky button read as one thing.
  2. The agent behind the sheet is visibly paused: finished log lines, the current line in amber with the "menunggu persetujuan" status chip. The sheet is what it is waiting for.
  3. The cursor plus the queued sheets underneath: you decide now, and the agent will ask again.

## 2-second hook
- **Frame 0 shows:** this still. The sheet is up, the title and rows are readable, and the cursor rests 14 px under the focused "Jangan izinkan" (where the previous loop's click left it).
- **Motion (0-2 s):** 0.15-0.95 s: the cursor glides about 380 px right (ease-out, no overshoot) and stops 6 px under "Izinkan sekali". It never enters the button and the button gets no hover state. At 1.3 s it makes one 12 px hesitation back to the left (0.25 s, sine in-out), then holds. VO/caption: "Agen AI kamu tiba-tiba nanya begini."
- **Why it stops the scroll:** everyone has hovered over an "Allow" button and hesitated. Here the prompt comes from an AI agent, and the cursor visibly drifts from the safe choice to the risky one.
- **Hook type (docs/bank-hook-ending.md):** #8 Notifikasi relatable (a system permission prompt is the most familiar notification on any phone or laptop).

## Loop ending
- **Last 1 s:** the cursor slides back left and clicks "Jangan izinkan" (button darkens 80 ms, focus ring flashes). The sheet drops out of frame (0.35 s, ease-in). The agent re-plans at the same step: the amber chip's pause glyph blinks blue once and returns to amber, and `D.step` stays unchanged. The first queued sheet rises and scales into the exact front-sheet geometry with the same request. The second moves up one slot while a new ghost slides in at the back, so 2 sheets still peek. The cursor eases down 14 px from the click point and lands on its frame-0 rest point on the cut frame.
- **Seam:** last frame = frame 0 pixel for pixel: same sheet, 2 ghosts, amber chip, step, and cursor under the safe button. The hook's rightward glide then continues from that rest. Ending type F (UI back to its start state) + B (frame returns exactly).

## Caption / voice-over
- **Slot:** `data-slot="caption"` x 90-990, bottom at y 1620. Live-caption strip, max 2 lines (44 px, 40 px if needed; past 2 lines it shows the 2-line window around the active word with "…", like a scrolling live caption). Said words are white, upcoming `#9DA2AC`, and the active word is white 600 with a 0.15 em `#2F6BEA` underline. If `hl` is in the caption, all its words get ONE underline; otherwise the first word is active.

## Notes for the video build
- Beats: the definition list builds row by row (80 ms stagger) as each is named, values type on in mono, and the `hl` chip fill wipes in on its word. Explanations can swap the rows (same sheet, new details) instead of cutting to new scenes.
- Camera = punctuation: one punch-in to the cursor/red-button gap at the payoff (about 60%), hold 1.5 s, cut back. The sheet's motion is the content, not the camera.
- Risk: keep the cursor strictly outside the red button in every hook frame, or the hesitation reads as a click. Chrome copy is overridable (`D.ask`, `D.step`, `D.action`, `D.no`, `D.yes`, `D.status`), so match the buttons to the request (for example "Kirim 240 email" / "Jangan kirim").

## References
- https://www.nngroup.com/articles/confirmation-dialog/ — restate the action and the exact items affected; label buttons with the outcome, never a generic "Are you sure?".
- https://www.anthropic.com/engineering/building-effective-agents — agents pause for human feedback at checkpoints or blockers; the sheet is that checkpoint.
