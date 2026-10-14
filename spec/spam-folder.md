# Spam Folder (`spam-folder`)

**Metaphor:** a calm email client with one message held in Spam → classic AI is classification: words are evidence, their probabilities are combined into one score, and the call is made above a threshold.
**Series:** how-ai-works
**Axes:** light · serif · 2D · app-ui

## Look
- **Palette:** `#FBF9F4` message sheet · `#222222` ink · `#C8402F` spam red (hl squiggle, spammy-word tints, guess badge, score fill) · `#3B5BA9` inbox blue (innocent-word tints, avatar, "Bukan spam", below-threshold state) · `#F3D27A` highlighter (karaoke word only). Backdrop = sheet darkened (`#ECE7DD`).
- **Fonts (Google Fonts):** Literata (folder tabs, subject, sender, body, evidence words) / Red Hat Mono (chips, badge, score, meta)
- **Grid / layout:** one message card x 40–1040, y 206–1634, 90 px margins. Search field 226–280 (decor) · folder tabs + pager chevrons 300–356 · subject = title from 400 (108→70 px, line-height 1.1, max 3 lines) · sender row (series = sender, `ep · date` = timestamp, `.91 SPAM?` right; long names end in an ellipsis) · caption = first body lines · evidence lines down to ~1330 · score block 1360–1496 · source + "Bukan spam" 1522–1590. Everything in the y 900–1500 band ends at x ≤ 900: evidence lines, greeked words, the 810 px score bar, and the caption (narrowed to 810 px if it reaches y 900).
- **Signature elements:**
  1. Evidence words set inside greeked body lines — each item label tinted by its weight (item `p` when given: red above .5, blue below; otherwise by rank, strongest first) with its value as a mono chip. Grey bars = neutral words the filter ignores; faint blue / red bars = mildly innocent / spammy words.
  2. Margin heat strip — one flag per evidence line in the left margin, joined by a thread that turns into the score bar: the evidence is combined into one number.
  3. The filter's guess — badge `.91 SPAM?` plus a score bar labelled `skor spam gabungan` + dashed tag `ilustrasi`, filled past `ambang .90`. Optional `D.score` / `D.threshold` (default .91 / .90); below the threshold the badge turns blue `AMAN?`, Kotak Masuk is selected and the button reads "Tandai spam".

## 2-second hook
- **Frame 0 shows:** the message already in Spam (tab selected, count 1) with the red `.91 SPAM?` badge and the subject (e.g. "Kenapa email ibu masuk spam?"). The body lines are still plain grey bars and the score bar is empty, so the on-screen text is just the subject and the badge.
- **Motion (0–2 s):** 0.2–1.2 s a highlighter wash sweeps left→right down the body; as it passes, grey bars resolve into the evidence words at their tint (120 ms stagger). 1.2–1.9 s the margin flags tick on and the bar fills 0 → .91, crossing the threshold line (ease-out, no overshoot).
- **Why it stops the scroll:** a familiar message flagged "SPAM?" makes the viewer judge it before the filter's evidence appears; with a plainly innocent subject (an email from Ibu), the AI is visibly wrong.
- **Hook type (docs/bank-hook-ending.md):** #1 AI salah di depan mata (innocent subject); for other how-ai-works subjects it plays as #5 Tebak dulu ("spam atau bukan?").

## Loop ending
- **Last 1 s:** after the CTA (~85%: the cursor hovers "Bukan spam", VO "menurutmu spam atau bukan? tulis di komentar"), the VO lands the twist "…dan .91 itu bukan berarti 91% pasti spam, cuma skor yang lewat ambang." Meanwhile the wash retracts right→left, the evidence words fall back into grey bars and the bar drains to 0. The cursor never clicks, so the video never shows the filter ignoring feedback.
- **Seam:** ending G (progress reset) + H (twist). The last frame is frame 0 (same card, grey body, empty bar, badge on), so the wash restarts without a cut and the `SPAM?` badge reads differently on the rewatch.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–990 (90–900 once it reaches y 900), directly under the sender row (y ≈ 790–900, moves with title height), 44 px Literata (40 px min), max 2 lines. Karaoke: active word = solid `#F3D27A` highlighter band + weight 600, spoken words ink, upcoming words `#5A5650`.

## Notes for the video build
- Per beat: resolve one evidence word on the word that names it; its chip value types on; its margin flag drips into the thread. The bar fills only once all evidence is in. Camera: still by default; one punch-in on badge + bar at the verdict (hold ≥ 1.5 s), no other emphasis move in that scene.
- Facts: `.91` / `.90` are illustrative and always carry the on-screen `ilustrasi` tag; pass `D.score` / `D.threshold` only from a real classifier. Use for how-ai-works (classification, confidence, thresholds). Not for ai-news or ai-in-numbers, where a spam verdict would read as the channel judging its own claim.

## References
- https://www.paulgraham.com/spam.html — per-word spam probabilities; combine the most telling words; call it above ~.9. Shown as tinted words and a threshold bar.
- https://en.wikipedia.org/wiki/Naive_Bayes_spam_filtering — each word is separate evidence combined into one score; the output is a score, not a calibrated certainty. Shown as margin flags joined into one thread and as the twist.
