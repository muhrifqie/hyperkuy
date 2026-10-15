# Survey Meter (`survey-meter`)

**Metaphor:** A civil-defence radiation survey meter → sampling: every word an AI picks is a weighted dice roll, yet the needle's average stays steady and predictable.
**Series:** how-ai-works | ai-in-numbers
**Axes:** full-colour · condensed · 3D · physical-object

## Look
- **Palette:** `#E8B820` yellow enamel case · `#1B1B1A` ink/knobs/plates · `#F3EEDF` cream dial, tally tag · `#C8322B` needle red, danger arc · `#6F6A5E` olive bench
- **Fonts (Google Fonts):** Barlow Condensed (title, row labels) / IBM Plex Mono (numerals, values, caption)
- **Grid / layout:** kicker y 268; title centered y 322–~560 (condensed 800 uppercase, hl = black on yellow block); case x 80–1000, y ~636–1462 with handle, stencil plate top-left, cream dial 0–5 (y 746–1046) + reading chip, black range knob bottom-left, engraved candidate strip x 336–940 y 1128–1362; caption on the bench y ~1470–1610; meta y 1618.
- **Signature elements:**
  1. One big analogue dial with fine tenth ticks and a red danger arc — probability read as a needle
  2. Black range knob whose positions are the candidate next words (item rows, active row red-ringed)
  3. Cream tally tag on the case shoulder with click tick marks (one per item)

## 2-second hook
- **Frame 0 shows:** the meter already live — needle trembling around 2.7, three click ticks on the tag
- **Motion (0–2 s):** needle twitches (spring settle, no idle wobble after 1.2 s); click ticks stamp onto the tag one per beat
- **Why it stops the scroll:** a live analogue instrument twitching in frame 0 — the sentence hangs unanswered
- **Hook type (docs/bank-hook-ending.md):** #12 Kalimat menggantung ("Tiap kata dari AI itu sebenarnya…")

## Loop ending
- **Last 1 s:** a final click lands; the knob's yellow pointer turns back to ×1 and the needle settles at the opening reading
- **Seam:** ending **A — kalimat sambung**: closing line "…dikocok, persis bunyi alat ini:" lands on the same click that opens frame 0

## Caption / voice-over
- **Slot:** `data-slot="caption"` on the bench, x 90–910, y ~1470–1610, IBM Plex Mono 600, 40–42 px, max 2 lines; active word knocked out of a `#C8322B` block in cream.

## Notes for the video build
- Beats: needle twitch + clicks → knob turns through positions (rows light in order) → reading chip counts & locks. One emphasis move: cursor press on the active knob position. Camera still; risk: needle must stop trembling when idle.

## References
- https://en.wikipedia.org/wiki/Civil_defense_Geiger_counters — yellow case, black knobs, one analogue meter plus a multiplier knob: the whole interface is a single needle and a range selector
- https://www.thehenryford.org/collections/explore/artifact/547573 — labelled selector positions and stencilled warning plates: printed labels on the object become the data slots
