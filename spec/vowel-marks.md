# Vowel Marks (`vowel-marks`)

**Metaphor:** a type-specimen sheet for one aksara Jawa base letter, ꦧ (ba), whose vowel marks (sandhangan) are parked around it → context changes meaning: the same letter becomes bi, bu, bê, bar, bang depending on the mark beside it, just as an AI reads "bisa" (can / venom) through the words around it.
**Series:** how-ai-works
**Axes:** full-colour · grotesque · 2D · poster

## Look
- **Palette:** `#4A1E3F` plum colour field · `#F2E7D0` cream letter + text · `#F08A5D` coral snapped mark / active slip · `#C9B9C4` mauve hairlines + meta · `#1A1020` ink (text on coral, slip shade)
- **Fonts (Google Fonts):** Hanken Grotesk 800 (title) / Hanken Grotesk 500–700 (labels, slips, caption) / Noto Sans Javanese 600 (letter + marks, rasterised to canvas)
- **Grid / layout:** margins 90. Meta row y 298; title y 356, fitted 116→72 px, max 3 lines (ends ≤ ~656). Specimen plate from title +52: letter centred on x 495 (centre of the slip columns 90–900), metric guides (mark top, body top, baseline) across 60–1020 with proof labels on the right, formula "ba + wulu = bi" left of the body. Mark rings (Ø100) on a dotted orbit arc ~y 950–1110, one per item; hairline ties down to n equal slips (x 90–900, ~y 1180–1450). Source line, then caption bottom-anchored at y 1612.
- **Signature elements:**
  1. The giant base letter ꦧ on hairline metric guides — the specimen sheet itself; the real font, not a drawing.
  2. Sandhangan isolated as loose pieces (letter+mark minus letter) parked in rings on an orbit arc, each labelled with the syllable it would make (bi / bu / bê / bar / bang) and tied to its slip.
  3. One coral wulu snapped onto the letter (and echoed on the shoulder of `hl` in the title); its ring and slip are lit coral, everything else stays unlit.

## 2-second hook
- **Frame 0 shows:** the bare letter ꦧ on its guides, all marks parked in their rings, every slip unlit; on screen "Kata sama, arti beda. Kok tahu?"
- **Motion (0–2 s):** 0.3 s the coral wulu lifts out of its ring and glides up the orbit arc (0.5 s, ease-in-out), snaps onto the letter with one 4 px settle on the mark only; the formula completes "= bi", the tie draws down and the slip lights coral (0.3 s wipe).
- **Why it stops the scroll:** an unfamiliar, beautiful letter visibly changes meaning the instant one small piece lands on it — the viewer wants to know which meaning wins.
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu (guess which meaning before the reveal)

## Loop ending
- **Last 1 s:** after the CTA (~85%), the wulu lifts off the letter and glides back down the orbit into its ring; the coral slip and tie fade back to hairline; the formula drops back to "ba".
- **Seam:** ending D (object taken apart back to its start): the final frame is the bare letter with all marks parked and nothing lit = frame 0, so the wulu's lift at 0.3 s continues the motion that just ended.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–990, bottom-anchored at y 1612 (1–2 lines, ~1500–1612), 44 px (40 px if it needs a third line); karaoke: active word = ink text on a coral rounded box, spoken words cream, upcoming words mauve.

## Notes for the video build
- Per item: the active mark swaps (wulu out, suku in…), the letter's syllable label changes and the matching slip lights; marks only travel along the orbit arc, never wobble while idle.
- Camera: still by default; one punch-in on the letter when the voice-over says "konteks", hold ≥ 1.5 s, then cut wide for the slips. Self-host Noto Sans Javanese for renders and draw canvases only after `document.fonts.ready`.

## References
- https://en.wikipedia.org/wiki/Javanese_script — abugida: a base letter with an inherent vowel, sandhangan change the vowel; the letter + marks system is the object.
- https://itsnicethat.com/articles/rakhmat-jaka-graphic-design-080822 — Indonesian vernacular reworked with restraint: one strong colour field instead of kitsch ornament.
- https://fonts.google.com/noto/specimen/Noto+Sans+Javanese — glyph-specimen convention: one letter large on metric lines, marks shown as separate pieces.
