# Suggestion Strip (`suggestion-strip`)

**Metaphor:** a whole phone screen in a light chat app with the keyboard up (status bar, chat header, the last message, a half-typed reply, the predictive suggestion bar) → a base language model is a giant suggestion bar that only continues text; instruction tuning is what turns "keep tapping the middle word" into actually answering.
**Series:** how-ai-works
**Axes:** light · grotesque · 2D · app-ui

## Look
- **Palette:** `#F2F1EC` chat background · `#FFFFFF` app bar, bubble, composer, key caps · `#1B1D22` ink · `#2F6BFF` accent (pressed chip, picked cell, composing word, hl, send) · `#D8D5CC` keyboard tray
- **Fonts (Google Fonts):** Instrument Sans 600/700 (title, header, candidates; `wdth` 76–100 only when long labels need it) / Instrument Sans 400–500 (keys, caption, subtitle) / Martian Mono 500–600 (values, avatar, panel numbers)
- **Grid / layout:** white app bar y 0–412: status row y 172–212 (time left, signal/wifi/battery right), chat header y 300–390 (‹, avatar = `ep`, name = `series`, grey subtitle = `date`, call icons). Chat y 412 → keyboard: the title is the last received bubble (x 60–1020, tail top-left, anchored above the composer, fitted 124→56 px, 2 clean lines preferred), "Hari ini" day chip only when space is left. Composer x 60–1020 sits 18 px above the tray. Keyboard is built bottom-up: bottom row y 1520–1616, z-m row y 1410–1506. **n ≤ 3:** strip y 962–1178 (one slot per item, label ≥ 32 + value ≥ 30, the real fit is 48/40 on the numbers sample), q-p and a-l rows y 1190–1396. **n ≥ 4, or if the strip can't hold label 32 / value 30:** the strip (y ~1036–1156) keeps the pick plus its 2 neighbours (labels only), and the expanded-suggestions panel replaces q-p and a-l: numbered 2-column candidate grid x 12–900, label 42→34 px / value 36→32 px, rows grow upward (ends at y 1396), collapse key x 914–1068.
- **Signature elements:**
  1. The keyboard *is* the data: suggestion strip + expanded candidate panel. The pick is the item whose label/value equals `hl`, else the largest comparable value (greedy = argmax), else the middle one. It is pressed in the strip (white chip, blue type, two tap-ripple rings) and ringed blue in the panel.
  2. The composer types the voice-over: typed words in ink, the composing word with blue tint, underline and caret, the rest as grey ghost prediction (inline autocomplete).
  3. Phone furniture carries the meta: avatar = episode, header = series + date, and the source sits on the space bar where the keyboard language label normally is. `hl` is the blue inserted-suggestion word in the title bubble.

## 2-second hook
- **Frame 0 shows:** the chat with the bubble "AI = autocomplete raksasa?", composer "Apa ibu kota Indonesia?|", strip `Jakarta | Apa | Ibu` with **Apa** pressed in the middle.
- **Motion (0–2 s):** a tap every 0.22 s on the middle chip (press 80 ms, ripple grows and fades). Each tapped word slides up into the field and the strip refills (120 ms). The text keeps going "…Apa ibu kota Malaysia? Apa ibu kota Thailand?": the model continues the pattern of quiz questions and never answers "Jakarta". Camera still.
- **Why it stops the scroll:** everyone has played "tap the middle suggestion", and here the "AI" visibly asks more questions instead of answering. That is exactly what a base model does with a question, so the payoff explains it honestly.
- **Hook type (docs/bank-hook-ending.md):** #1 AI salah di depan mata.

## Loop ending
- **Last 1 s:** after the CTA (~85%) the field holds the payoff answer "Apa ibu kota Indonesia? Jakarta." Backspace is held: the key goes pressed, words delete right to left (90 ms each), the caret walks back, and the strip rewinds to `Jakarta | Apa | Ibu` with Apa pressed.
- **Seam:** ending D (object taken apart back to its start) landing on B. The last frame equals frame 0 (same bubble, field text, caret and pressed chip), so the next tap simply continues the rhythm. No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` inside the composer, x 104–900, centred in the field, 46→40 px (`wdth` down to 80 only past ~90 chars), max 2 lines. Active word (`hl` if it is in the caption, else the first word) = `#1D4FD6` on `#E4EBFF` with a 5 px blue underline and a caret after it; earlier words ink, later words ghost `#6B6A65`.
- **Demo beats (hook 0–2 s, payoff):** the composer holds the demo prompt, so the karaoke moves into a reply-quote bar docked on top of the composer (white, 6 px `#2F6BFF` left rule, 40 px, same karaoke styling, max 2 lines). The tapped continuation itself is not voiced. When the demo text is cleared, the bar undocks and the caption types back into the composer.

## Notes for the video build
- One beat = one item: chip press → word drops into the field → strip refills; for n ≥ 4 the panel slides up out of the strip (200 ms) and cells fill in order on the word that names them. Payoff = instruction tuning: the strip re-ranks so **Jakarta** sits in the middle chip, one tap answers, and the collapse key closes the panel.
- Camera = punctuation: still by default, at most one punch-in per scene onto the strip/panel on the "probability" line, hold ≥ 1.5 s. Keys stay idle except backspace in the loop. No data text at x > 900 between y 900–1500; only decorative key caps (p, l, backspace), the strip mic and the collapse key sit there.

## References
- https://en.wikipedia.org/wiki/Predictive_text — ranked next-word predictions with the most probable as default: the bar is literally a tiny next-word model.
- https://patents.google.com/patent/US11120220 — a dedicated suggestion region above the on-screen keyboard holding several candidates: the layout, with the middle slot as the greedy pick.
- https://arxiv.org/abs/2203.02155 — instruction tuning with human feedback is what separates a chat model from raw continuation: the payoff.
- https://openai.com/index/instruction-following/ — base GPT-3 answered an instruction with more instructions in the same pattern: the hook's "more questions instead of an answer".
