# Cuff Checklist (`cuff-checklist`)

**Metaphor:** A tiny ring-bound mission checklist strapped to the white fabric cuff of a pressure suit, shot close against black → an AI agent's plan: terse steps, one tool call per line, ticks off one by one; flipping a tab = next phase.
**Series:** ai-tools | how-ai-works
**Axes:** dark · mono · 3D · physical-object

## Look
- **Palette:** `#0B0D10` suit black · `#E9E6DD` cuff grey-cream · `#F5F1E6` page paper · `#E0662B` phase/hl orange · `#2F5DA8` tool blue
- **Fonts (Google Fonts):** B612 Mono (everything — terse mission shorthand) / Archivo Narrow (reserve for dense sub-labels)
- **Grid / layout:** kicker y 296; title y 348–~660 on black; white cuff band (−4°) with booklet page (−3°) y ~800–1360; caption y ~1500–1616; source/date y 1668
- **Signature elements:**
  1. Ring-bound page: binding rings, binding strip, orange + blue phase tabs on the right edge
  2. Checklist lines: 56 px tick boxes, caps step + blue tool/time value, hairline rules; box 1 pre-ticked orange
  3. Pencil-sketch margin doodle (arrow + box, SVG strokes) — the astronaut's aside

## 2-second hook
- **Frame 0 shows:** the open page with boxes 1/3 2/3 3/3, first line ticked, orange tab at the edge
- **Motion (0–2 s):** a gloved thumb silhouette flips the orange tab (tilt settle, 0.5 s) and the second box draws its tick
- **Why it stops the scroll:** a strange real object with a visible list length — the payoff is promised to be short and complete
- **Hook type (docs/bank-hook-ending.md):** #11 daftar bernomor terlihat

## Loop ending
- **Last 1 s:** the last box ticks, the page flips forward around the ring binding
- **Seam:** ending G progres reset — the wrap lands on page 1 with empty boxes: frame 0

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–910, y ~1500–1616, 42 px B612 Mono; karaoke active word = dark-on-cream knockout block

## Notes for the video build
- Beats: tab flip → ticks per line (each lands on its spoken word) → page flip; camera = one punch-in on the ticking boxes, hold ≥ 1.5 s
- Risk: title hl is solid orange text (no knockout) so line-wraps never break contrast; keep step labels ≤ ~18 chars

## References
- https://www.solist.blog/lunar-surface-cuff-checklist/ — small wrist-worn booklet: terse shorthand directions, spreads per task, tiny marginal sketches
