# Master Drawings (`master-drawings`)

**Metaphor:** vellum master drawings of one letter on a light table glowing in a dark type studio, from a hairline master to an ultra-black master with blue-pencil in-between sheets → latent-space interpolation: an image model blends between known points and produces in-between results nobody ever drew.
**Series:** how-ai-works
**Axes:** dark-and-light · grotesque · 2D · diagram

## Look
- **Palette:** `#1A1917` studio desk (dark surround) · `#FCFBF7` lit table (the vellum is a warm-grey tint of it, the glyph strip is `#F2EEE4`) · `#1D1F24` master ink · `#2F4DB8` blue pencil (instances, metric guides, highlight, selected glyph cell) · `#A8321F` master red (master tags, Bézier handles, master squares, wght chip, active underline)
- **Fonts (Google Fonts):** Hanken Grotesk only (variable 100–900), so weight does all the work like a specimen proof: title 660, labels 330→820 along the axis, tags 640 caps 30 px, values 520, caption 420/820, meta 500–560
- **Grid / layout:** dark desk y 0–214 and 1660–1920 (decoration only), with a printed glyph-cell strip `a b c d e i l n o p` at y ~84–214 and cell "a" selected in blue. Light table x 20–1060, y 214–1660. Meta row y 296. Title x 90–990 from y 340: 2–3 balanced lines, 106→74 px (max 96 px with 5 items), guides x 40–1040. n sheets x 98–990, from max(title + 30, 620) to slug − 26 (about y 1400), 14 px overlap. Glyph cell on the left, text ends at x 880, slider in the gutter at x 58. Proof slug: a rule 24 px above the caption runs to the table's bottom edge. Caption is about y 1450–1560 and the meta line ends at y 1614.
- **Signature elements:**
  1. The same parametric single-storey "a", with the same 10 on-curve points, in a glyph cell on every sheet (em box, unit ticks, x-height, baseline, sidebearings). The 2 masters are solid ink with red Bézier handles and a draftsperson's mark. The n−2 instances are blue-pencil hatched (constant ~7 px spacing at any size) on dashed-frame sheets. Tags are neutral world terms: `MASTER A`, `INSTANS · t=0,33`, `MASTER B`.
  2. The weight slider in the gutter has one meaning: the knob marks how far along the axis the in-betweens are computed. The still has it at t = 1. Dotted travel paths run through the two selected (filled) points on every sheet, so each point visibly moves in a straight line.
  3. The title is a proof line. Cap-height, x-height and baseline guides are measured from the font and run through every line. The highlight is its own weight ramp: letters 450→900, figures and symbols fixed at 860. It sits on a blue axis on its baseline, between a hollow master square and a filled one. The caption is the proof slug: a red `wght 820` chip and the karaoke line.

## 2-second hook
- **Frame 0 shows:** exactly the still. n sheets: both masters plus the n−2 hatched instances at their interpolated weights. The knob sits on t = 1 and the tags are readable. The caption slot holds the myth "AI cuma nempel gambar orang?" (5 words).
- **Motion (0–2 s):** the question types on as karaoke (0–0.5 s). A blue-pencil strike (a hard-coded wobbly path, dashoffset, power2.out) crosses it at 0.6–1.0 s. Then the two selected points light up sheet by sheet from master A to master B while their dotted travel paths draw (1.0–1.9 s, 0.15 s per sheet). The camera stays still.
- **Why it stops the scroll:** a myth argued over in every AI-art thread gets struck out over letters whose shared points visibly travel from one drawn master to the other. The payoff comes at about 50 %: the knob drops to 0 and the in-betweens thin to hairline, then it sweeps 0→1 (2.4 s) and each one swells into place. Nobody drew them; they were computed.
- **Hook type (docs/bank-hook-ending.md):** #4 Mitos dicoret

## Loop ending
- **Last 1 s:** the knob settles on t = 1 with every in-between at full weight, which is the frame-0 composition. The caption asks the same question, "AI cuma nempel gambar orang?", now unstruck. The CTA comes before this, at about 85 %.
- **Seam:** the last frame is frame 0 exactly (composition B), so the strike draws again with no cut. The viewer now knows the answer. Type C Pertanyaan diulang.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–900, about y 1450–1560, bottom-anchored 20 px above the meta line. Hanken Grotesk 44 px (40 px minimum), 1–2 lines, with the first line indented after the `wght 820` chip (30 px). A longer line shows the phrase around the active word. Inactive words: weight 420, `#3A3D45`. Active word: jumps to the heavy master weight 820 in ink, with a 5 px `#A8321F` underline.

## Notes for the video build
- Claims come only from data. `items[i].tag` overrides a tag (it splits at " · " when too wide). `D.interp: true` switches to `DIGAMBAR MANUSIA` / `TAK PERNAH DIGAMBAR`, which is only for interpolation topics where that is literally true. At 5 items a long tag falls back to `TAK DIGAMBAR`.
- Payoff beat: tween each instance's `w` and rebuild its paths as the knob passes its tick. The knob has a single meaning, so frame 0, the payoff and the loop all read the same way. Reserve each caption word's bold width so the karaoke never reflows.
- The camera stays still except for one punch-in on the middle instance at the payoff. Rebuild the hatch at the zoomed scale (its spacing is in screen px), then hold for at least 1.5 s.

## References
- https://en.wikipedia.org/wiki/Multiple_master_fonts — masters at the ends of an axis; every instance between them is interpolated from compatible outlines (same points).
- https://letterformarchive.org/collections/#linotype — master drawings as large single-letter sheets with measurements and a draftsperson's mark; the annotation is part of the beauty.
- https://en.wikipedia.org/wiki/Variable_font — one continuous design space with named instances along an axis (the weight ramp in the title, sheet labels and caption).
