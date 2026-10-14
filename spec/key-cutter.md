# Key Cutter (`key-cutter`)

**Metaphor:** a locksmith's key duplicator (stylus traces the master, a wheel cuts the blank) → distillation: a small "student" model is cut by tracing a big "teacher" model's answers, profile by profile, until it is almost the same shape. Distillation/copying-first: best for "small vs big model" topics; with generic lists the tracing is decorative.
**Series:** how-ai-works · ai-news
**Axes:** dark-and-light · mono · 2.5D · diagram

## Look
- **Palette:** `#1E2124` steel bench + ink · `#E9E6DF` cream (pegboard wall, enamel sign, reading plate, paper tag; tints #E0DCD2 / #F4F1EA / #ECE8DE) · `#C9A25B` brass (copy key, hl blank, active caption word) · `#9EA4AA` steel (master key, tag rim, dimension lines, meta) · `#D4542E` cutter red (wheel hub, spin arrow, plate stripe — accent only)
- **Fonts (Google Fonts):** Geist Mono 700 (punch-stamped title, bow stamps, values) · 600 kicker · 500 caption + meta / Instrument Serif regular + 0.45 px stroke (item labels = the traced answer type)
- **Grid / layout:** cream pegboard wall from the top; rail of hanging blanks y 80–250 (decor under the top tabs); enamel duplicating sign x 54–1026 from y 266 on two chains: kicker centred y 296 between rules, title centred uppercase from y 350, ≤ 214 px (84 → 52 px), sign bottom = title + 34. Hard wall/bench edge 32 px below the sign: 16 px steel lip `#3A3F45` (1 px white 15 % highlight) + 24 px cast shadow. Bench: bows (r 88, r 78 if needed) → vise → blades. Brass copy x 104–238 on the LEFT, steel master x 842–976 on the RIGHT, mirrored so the cut edges face each other; rows field x 262–818, column centred on the reading plate. Caption tag x 90–900 bottom-anchored above the source line (≤ y 1618).
- **Signature elements:**
  1. Two mirrored keys with real flat-bottom bitting, one cut per item: cuts above the arm copied in brass, below it only scribed (dashed). Dimension line copy notch → master notch; label above / value below, or label + value on one line with the line broken around it when 5 items need the room. Bows stamped SALINAN / MASTER at 32 px.
  2. Tracer arm on the middle item: serrated wheel biting the copy's notch, counter-clockwise red spin arrow, brass shavings spraying down-left over the copy; stylus pointing right into the master's notch; the item on a cream reading plate with a red stripe.
  3. The shop's own surfaces carry the type: title punch-stamped on a cream enamel sign (ink rule, 4 screws) hung from the blank rail (one hook empty: that blank is in the machine); `hl` on a small brass key blank (round bow with punched hole, bitting, tip); caption on a steel-rimmed paper key tag tied by string to the copy's bow.

## 2-second hook
- **Frame 0 shows:** the machine mid-job: arm on the middle row, copy half cut, wheel in the cut, shavings in the air; title ≤ 7 words, e.g. "Model kecil ini nyontek model besar".
- **Motion (0–2 s):** wheel spins counter-clockwise (linear, ~3 rev/s); 0–0.8 s the copy's edge at the active row is carved away from the wheel side (clip reveal, x ≈ 180–240) while shavings fly down-left on hard-coded paths into x 40–220 (power2.out); 1.0–1.5 s the arm steps down one row (power3.inOut), the stylus drops into the next master notch, the new dimension line draws in and its value locks on the plate. All hook motion sits left of x 900; only the static master spine is under the action buttons.
- **Why it stops the scroll:** a copy visibly forming next to its original is satisfying process footage, and the split is readable in frame 0 (copied cuts vs scribed ones).
- **Hook type (docs/bank-hook-ending.md):** #6 Sebelum vs sesudah terbelah — original | copy split side by side, and the copy itself is half "after" (cut) / half "before" (scribed).

## Loop ending
- **Last 1 s:** after the CTA (~85 %); the rail is never touched. 0–0.3 s the left vise knob turns and the finished copy unclamps and slides straight down off the bench (power2.in); 0.2–0.45 s a fresh brass blank slides down into the jaws from behind the bench lip, same downward direction, and clamps; 0.4–1.0 s the arm sweeps back to row 1 and cuts rows 1..active in one 0.6 s pass (notches pop in top-down, a shaving burst at each).
- **Seam:** the pass lands exactly on the frame-0 pose (same row, same half-cut copy, same shavings, wheel at the same speed and angle). Copy exits downward, blank enters downward (E), the composition returns (B), and the grinding SFX runs straight through the loop point (J).

## Caption / voice-over
- **Slot:** `data-slot="caption"` on the paper key tag, text x 158–878, tag ≈ y 1400–1560, Geist Mono 500 46 → 40 px, ink on paper, max 2 lines (longer voice-over shows a 2-line window that keeps the active word); active word = brass `#C9A25B` plate, ink bold; `hl` phrase counts as one unit.

## Notes for the video build
- One beat per item: arm steps down a row → dimension line draws in → value count-and-locks on the plate → copy notch carved. Liveliness from wheel and shavings; camera still, one punch-in on plate + wheel at the `hl` beat, hold ≥ 1.5 s.
- Rotate the wheel around a fixed transform-origin at its hub. Layout adapts: rows stacked → one-line, bows 88 → 78, plate two-line → one-line, labels/values step down to 30/32 px then ellipsis.

## References
- https://www.uhs-hardware.com/blogs/locksmith-industry-news/a-key-duplicator-machine-s-essentials — the stylus follows the original's profile while the cutter mirrors it on the blank: copying by tracing.
- https://patents.google.com/patent/US3682041 — master and blank clamped in parallel on one carriage: the comparison is built into the layout.
