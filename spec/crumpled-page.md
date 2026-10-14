# Crumpled Page (`crumpled-page`)

**Metaphor:** a printed encyclopedia page that was balled up, then pressed flat again on a black desk → a language model is a lossy compression of the internet: everything was squeezed into the weights, and when it unfolds an answer the creases show where details were lost or guessed back.
**Series:** how-ai-works
**Axes:** dark-and-light · serif · 3D · physical-object

## Look
- **Palette:** `#141414` desk (lamp-lit to `#262522`, grain) · `#EDEAE4` paper (facets lit 0.72–1.06 of it) · `#1C1C1C` printing ink (title, headwords, rules) · `#9C2E1F` re-ink red (hl, values, `[hilang]`, red half of the pencil) · `#3156A6` blue pencil (entry rings + numbers, blue half of the pencil)
- **Fonts (Google Fonts):** Source Serif 4 (700 title, 700 italic hl, 600 headwords, 400 caption) / IBM Plex Mono (500 values, running head, foot, `[hilang]`)
- **Grid / layout:** sheet x 60–1020, y 278–1488 (960×1210, turned −1.2° with a 5° rotateX lean), 60 px inner margins. Running head y ≈ 314–350 + rule; title from y ≈ 390, fit 112→72 px, ≤ 320 px tall, balanced wrap; 0–3 greeked lede lines (dropped first when entries need room); entries from below the lede to y ≈ 1358, one row ≤ 176 px, values right-aligned at x ≈ 872 (clear of the action column); foot rule y ≈ 1386, source/date y ≈ 1402–1460. Caption on the desk y 1516–1620. Props: the next page still balled up y 40–270 top-left; the editor's red/blue pencil y 1700–1800 (UI zone, decor only).
- **Signature elements:**
  1. The pressed-flat crumple: ~400 hard-coded facets with vertex heights lit from the upper left, deeper in the margins than under the ink; creases drawn as a dark valley + light ridge pair; the top-right corner folded under; soft cast shadow on the black desk.
  2. The main fold through `hl`: one full-length crease runs just before the highlighted word, which is knocked 7 px out of line, turned −1.6° and re-inked in red italic; the running-head and foot rules break and jog where the same fold crosses them.
  3. Entries as recovered lines: blue-pencil ringed number, serif headword, a dotted leader cut by its own fold, the value re-inked in red mono and jogged across it; the greeked definition line under every other entry loses its words in the fold, marked `[hilang]`.

## 2-second hook
- **Frame 0 shows:** the crumpled paper ball sitting where the sheet will be, same lamp, same pencil; on screen ≤ 7 words: "AI hafal seluruh isi internet." (6 words).
- **Motion (0–2 s):** 0.3 s the red pencil strikes the line through (one stroke, power2.out). 0.5–1.5 s the ball opens: facets peel outward from the centre in two waves while their shading relaxes from deep to pressed-flat (expo.out, paper-crunch SFX); the creases stay as lines. 1.5–2 s the title lands on the sheet and the `hl` word drops into its fold, re-inked red; line swaps to "Dia meremasnya." (2 words).
- **Why it stops the scroll:** a satisfying, physical unfold that corrects a common belief with a sharper picture in one gesture.
- **Hook type (docs/bank-hook-ending.md):** #4 Mitos dicoret

## Loop ending
- **Last 1 s:** after the CTA (~85%), the sheet crumples back: facets fold inward in the reverse order, the shading deepens, the ball rolls 20 px and stops exactly at the frame-0 position; the pencil is already back at its frame-0 angle.
- **Seam:** D (Benda dibongkar balik) + J (Ketukan musik): the last frame is frame 0 (ball, lamp, pencil), and the closing paper crunch is the opening crunch; last voice line "…tiap kamu tanya, dia buka lagi:" runs into the frame-0 line. No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–990, y 1516–1620 on the desk directly under the sheet, Source Serif 4 400 44 px (40 px when needed; longer lines are cut at a word with "…"), words in spans, `#EDEAE4` on the desk. Active word (`hl` if it appears in the caption, else the first word): 600 ink on a paper chip with a 5 px red underside, like a scrap of the page; in the video the chip steps word to word.

## Notes for the video build
- One beat per entry: its fold draws on (stroke-dashoffset), the leader jogs, then the value types in red mono as if re-inked; `[hilang]` appears as the gap opens. The ball → sheet unfold needs pre-baked facet keyframes (or a scale + shading crossfade); the sheet mesh is fixed at 960×1210.
- Camera still by default; one punch-in to the `hl` fold at the payoff (hold ≥ 1.5 s), one pull-back before the crumple. Nothing wobbles while idle. Self-host both fonts; the registry's `grain-overlay` is animated, keep the static SVG grain instead.

## References
- https://www.newyorker.com/tech/annals-of-technology/chatgpt-is-a-blurry-jpeg-of-the-web — an LLM as a lossy compression of the web; errors are compression artefacts.
- https://en.wikipedia.org/wiki/Crumpling — crumpling concentrates the sheet into a network of ridges between flat facets; flattening keeps that network.
- http://recent.design/i/unwr3n7-movo-paper-collection — crumpled 3D paper forms opening up to reveal graphic content (principle only).
