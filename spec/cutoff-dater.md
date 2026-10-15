# Cutoff Dater (`cutoff-dater`)

**Metaphor:** A self-inking date stamp on a lavender desk → knowledge cutoff: a model's knowledge is stamped with one date; ask about anything after it and it confidently stamps the old date.
**Series:** ai-news | how-ai-works
**Axes:** pastel · condensed · 2.5D · physical-object

## Look
- **Palette:** `#E6E1F0` lavender desk · `#4B3F8F` violet stamp body, dates, hl block · `#1F1F22` ink/knob/base · `#FBF9F4` paper pages · `#C8402F` red "?" stamp, caption block
- **Fonts (Google Fonts):** Sofia Sans Extra Condensed (800 uppercase title, page labels, caption) / Spline Sans Mono (dates, band window, meta)
- **Grid / layout:** kicker y 264; title y 316–~570 (condensed 800 uppercase, hl = white on violet block); stamp device mid-press x 300–780, y ~600–880; violet impression of the set date y ~890–980; fanned pages (items) x 250–870, y 1000–1460, each rotated −2.4°→+4°; caption y ~1470–1616; meta y 1622.
- **Signature elements:**
  1. Self-inking dater mid-press — dark knob, violet body, white band window with the one set date
  2. Fan of stamped pages: every event gets the identical date; page 1 carries the red "?" ring
  3. Oversized violet impression on the desk under the die

## 2-second hook
- **Frame 0 shows:** the stamp mid-press on today's headline page, violet date already visible under the die
- **Motion (0–2 s):** the stamp lands at 0.6 s (fast in, tiny overshoot on the knob only, ink settles) — stamp/slam
- **Why it stops the scroll:** an object caught mid-action with the wrong date on today's news — AI visibly getting it wrong, with a news angle
- **Hook type (docs/bank-hook-ending.md):** #1 AI salah di depan mata (#10 news angle)

## Loop ending
- **Last 1 s:** after the CTA the stamp lifts, re-inks on its internal pad
- **Seam:** ending **B — frame kembali persis**: it comes down on a fresh page in the same press as frame 0

## Caption / voice-over
- **Slot:** `data-slot="caption"` bottom of the desk, x 90–920, y ~1470–1616, Sofia Sans Extra Condensed 600, 42–46 px, max 2 lines; active word knocked out of a filled `#C8402F` block in paper white.

## Notes for the video build
- Beats: press (thunk) → pages fan out one per spoken event, each stamped with the same date → the red "?" slams on page 1. One emphasis move; camera still. Risk: band window date must read as mechanical, never re-typed per page.

## References
- https://patents.justia.com/patent/20130291744 — bands of numerals rotate to set the date and re-ink on every press: the date is set once and repeated mechanically
- https://patents.justia.com/patent/9248681 — self-inking swing arm: the die flips from pad to paper, a natural press/lift animation cycle
