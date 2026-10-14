# Tune Up Bench (`tune-up-bench`)

**Metaphor:** a motorcycle carburettor on a workshop bench, tuned with a flat screwdriver → fine-tuning: the engine (pretrained model) is already built; a tune-up only turns a few small screws (a small set of new weights) so it runs the way you need.
**Series:** how-ai-works, ai-tools
**Axes:** dark · mono · 2.5D · physical-object

## Look
- **Palette:** `#1B1C1E` charcoal wall/bench + ink · `#9AA0A6` cast-alloy steel + meta text · `#D8A23A` brass screws, lamp light, `hl`, active tag · `#E9E4DA` manila tags, masking tape, title, gauge face · `#C8452C` needle, redline, quarter-turn arc, `hl` underline, shop rag (5)
- **Fonts (Google Fonts):** Chivo Mono 800 (title, values, numbers) / Chivo 600 (tag labels, caption) / Chivo Mono 500 (meta)
- **Grid / layout:** 90 px side margins. Pegboard wall y 0–664 with the meta row (y 292) and the title (y 348–640, 66–100 px, fit to ≤ 292 px tall; `hl` amber with a red paint-pen stripe, kept on one line when ≤ 16 chars). Bench edge y 664. Left column x 90–462, y 704–1420: 3–5 manila parts tags (number · label 30 px · value 44 px). Right: rev tester x 640–960 / y 684–1004, carburettor x 500–940 / y 1016–1400 on a rag, screwdriver leaving frame right. Masking-tape caption y 1438–~1570, source y ~1585–1615. Below 1620 = bench with out-of-focus spare washers (decoration only).
- **Signature elements:**
  1. Brass screws on the carburettor, each with a masking-tape number dot that matches its manila parts tag = the items (the screw set you are allowed to touch).
  2. Rev tester: faint ghost needles across 0–3.5 (the rough idle before) and one red needle settled in the amber idle band (after).
  3. Amber-handled flat screwdriver seated in ONE knurled mixture screw (the item matching `hl`, else item 1), with a red quarter-turn arc and a witness-paint mark; its tag turns amber.

## 2-second hook
- **Frame 0 shows:** the full bench: carburettor with numbered screws, screwdriver already seated in screw 1, needle jittering at rough idle; on-screen line "Diubah sedikit, hasilnya beda jauh." (5 words).
- **Motion (0–2 s):** 0–0.8 s the needle jitters over 0.4–3.4 (content, ~3 Hz, ghost trails); 0.8–1.2 s the screwdriver slot rotates one quarter turn (power2.inOut) while the red arc draws in; 1.2–1.7 s the needle eases into the amber idle band and stops dead; hold.
- **Why it stops the scroll:** you see a rough machine become smooth from one tiny turn, a physical "before → after" in under two seconds.
- **Hook type (docs/bank-hook-ending.md):** #6 Sebelum vs sesudah (before vs after, played in time on one gauge).

## Loop ending
- **Last 1 s:** after the CTA (~85%), the screwdriver lifts 20 px out of the slot and settles back in at the frame-0 angle; the needle drops off the idle band back into its rough jitter.
- **Seam:** last frame = frame 0 composition (driver seated, needle at the jitter start) so the quarter turn plays again; the tool's seat "click" SFX matches the opening click. Ending D (benda dibongkar balik), with J (ketukan/SFX) as support. No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` on a strip of masking tape, x 76–908 (text x 110–874), y 1438–~1570, Chivo 600 44 px (40 px if needed), 1–2 balanced lines, karaoke: active word = charcoal `#1B1C1E` chip with amber `#D8A23A` text; others ink on tape.

## Notes for the video build
- Per item beat: its tag slides onto the bench from the left (stagger build), the number dot is pressed onto its screw (stamp, ink settles), the screw's slot ticks a few degrees. Needle reacts only when the hero screw turns.
- Camera = punctuation: still by default; one punch-in on the hero screw + gauge at the payoff beat, hold ≥ 1.5 s, cut (not zoom) back. Nothing wobbles while idle.
- Risk: keep the needle readable (do not shake the whole gauge); values are illustrative unless the data carries a source.

## References
- https://en.wikipedia.org/wiki/Carburetor — idle mixture and idle speed screws are user-adjustable while the jets are preset by the maker: a finished machine with a few tuning screws.
- https://arxiv.org/abs/2106.09685 — LoRA: the base weights stay frozen and only a small added set is trained (why "a few screws" is the honest picture).
- https://en.wikipedia.org/wiki/Tachometer — analogue dial grammar: sweep scale, redline zone, single needle (only the reading changes).
