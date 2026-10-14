# Parenthetical (`parenthetical`)

**Metaphor:** a shooting-script page: scene heading, centred character cue, (parenthetical), dialogue. → Role prompting: give the AI a scene, a character and a tone in brackets and it plays the part. The format is the instruction.
**Series:** ai-tools
**Axes:** light · mono · 2D · code

## Look
- **Palette:** `#FBFAF6` script paper · `#1A1A1A` typewriter ink · `#C23B22` red pencil (brackets, pencil) · `#3557A6` revision blue (markup gutter, date, karaoke selection) · `#E8E3D5` desk / punched holes
- **Fonts (Google Fonts):** Instrument Serif (title, italic hl) / Courier Prime 400, 400i, 700 (everything in the script)
- **Grid / layout:** the page bleeds off the bottom, desk band y 0–204 with the red/blue pencil. Header y 300 (date in blue, `#ep.` as the page number) · title y 370–~700 (Instrument Serif 132→74 px, balanced) · `FADE IN:` + `INT. <SERIES> — MALAM` · dual-dialogue grid x 190–900 (pairs of 330 px cells, an odd last item centred 520 px) · `NARATOR (V.O.)` + caption · footer y 1566–1620: source left, `CUT TO:` right. Blue markup gutter x 96–172 at the binding edge. Gaps stretch or shrink so 3–5 items always fill y 470–1550.
- **Signature elements:**
  1. Dual dialogue: the same `AI` cue repeated, each with a different (parenthetical) = item label and a different line = item value. "Same actor, different direction, different answer."
  2. Red-pencil parentheses drawn around every parenthetical and around `hl` in the title (italic): an editor bracketing the line that matters.
  3. Plain-text markup gutter (`>` `.` `@ ^` `( )`) beside the formatted lines, plus brads and punched holes: the raw source sits right next to its formatted output.

## 2-second hook
- **Frame 0 shows:** the page with the first dual pair: two identical `AI` cues, two different red-bracketed parentheticals, two different lines. Title on screen: "Beda satu kurung, beda jawaban" (5 words).
- **Motion (0–2 s):** 0.2–0.6 s the red pencil draws the left brackets (stroke-dashoffset, ease-out). 0.6–1.4 s the right parenthetical types on in Courier with a caret, and the line under it types a visibly different answer. 1.4–2 s karaoke starts on the V.O. line. Camera stays still.
- **Why it stops the scroll:** two identical speakers giving different answers is an instant spot-the-difference, and the cause is the bracket.
- **Hook type (docs/bank-hook-ending.md):** #6 Sebelum vs sesudah terbelah (before/after split)

## Loop ending
- **Last 1 s:** CTA lands at about 85%. Then `CUT TO:` types bottom right with a typewriter carriage-return ding, and the whole sheet slides up one page (sheet slide), bringing in a fresh page.
- **Seam:** the new page's first line is `FADE IN:`, in the same composition as frame 0. The screenplay's own grammar finishes the sentence (CUT TO: → FADE IN:), the upward motion carries into the settled frame 0, and the ding equals the first key strike. Bank A (kalimat sambung) + J (ketukan). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` under the `NARATOR (V.O.)` cue, x 140–900, about y 1420–1545, Courier Prime 44→40 px. Captions longer than 2 lines switch to Instrument Serif 48→40. Karaoke: the active word sits in a revision-blue selection block (paper text, bold). Active word = `hl` if it is in the caption, else the first word.

## Notes for the video build
- One beat per item: the gutter glyph types first (`@`, `( )`), then the formatted cue, parenthetical and line snap to their screenplay indents. Then the red pencil brackets the parenthetical.
- Camera is punctuation: at most one punch-in per scene, to the parenthetical being spoken, then hold ≥ 1.5 s. Text never bounces. Only the pencil strokes and the caret are hand-made motion.
- Risk: Courier is wide. Keep values ≤ 10 characters (they shrink to fit, 36 px floor). Long labels wrap to 3 lines inside the brackets.

## References
- https://fountain.io/syntax — plain-text screenplay markup (INT. headings, ALL-CAPS cues, (parentheticals), `^` dual dialogue, transitions ending in TO:): the format is the instruction.
- https://en.wikipedia.org/wiki/Screenplay — strict page conventions (indents, cue/parenthetical/dialogue order, page numbers): the layout grammar, not any asset.
