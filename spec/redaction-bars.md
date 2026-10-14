# Redaction Bars (`redaction-bars`)

**Metaphor:** a scanned "RAHASIA" release page lying crooked on a desk, every sensitive value under a black redaction bar except one line that is only marked in red → privacy before you paste: what you type into an AI can be stored or used, so bar names, ID and account numbers first (or use a tool that redacts automatically).
**Series:** ai-tools · ai-news
**Axes:** dark-and-light · serif · 2.5D · poster

## Look
- **Palette:** `#1B1A18` desk (wedge + punch holes) · `#F5F3EE` photocopy paper · `#0E0E0E` typed ink + redaction bars · `#B8322A` red (classification marking, marked box, exposed value, flag, active caption word). No blue.
- **Fonts (Google Fonts):** DM Serif Display (title 108→64 px, caption 46→40) / Courier Prime (header fields 28, `(n)` 30, labels 36→30, bar values 44→32, exemption code + flag 30) / Anton (RAHASIA marking 56)
- **Grid / layout:** one page, top-left corner at (16, 200), rotated −3.5° and bleeding off the right edge and the bottom; the desk shows only as a dark wedge top-left (marker cap on it) and a thin left strip. Inside the page, from top to bottom: RAHASIA centred at y ~225–285; typed fields `Nomor / Tanggal / Dasar` (= series·ep / date / source) at y ~320–470; a double rule; `PERIHAL :`; the title at y ~565 to ≤ 920 (`text-wrap: balance`). Then the paragraphs from y ~820 to ~1400; the caption at y ~1470–1615; RAHASIA again at y ~1770 (decoration in the UI zone). Key text stays inside x 90–900. Two punch holes on the left margin. Paragraphs: `(n) Label :` typed in ink with the bar inline from a fixed colon column. They switch to stacked (label line, full-measure bar below) when the row pitch is ≥ 150 px, or ≥ 132 px if a label would wrap or the value would not fit inline. No leaders, no coloured numbers.
- **Signature elements:**
  1. Inline redaction bars with marker-cut ends, irregular hard-coded lengths and the white exemption code `Ps.17h` at the right end (UU KIP pasal 17 huruf h = personal data, the Indonesian twin of FOIA `(b)(6)`; dropped per bar when it does not fit). Title `hl` = the same bar knocked out of the headline, painted from .14em below the line top so it never eats the descenders above (one bar per word if the hl wraps).
  2. The last paragraph only *marked*: red dashed box tight around the value, value exposed in red, `BELUM DISENSOR` flag (30/38 px; `D.flag` may replace the word for non-privacy topics).
  3. The uncapped felt marker lying on the page next to that line: under its label with the tip at the box's left edge (inline), or right of the flag pointing back (stacked); its cap lies on the desk wedge. RAHASIA marking at the top and bottom of the page.

## 2-second hook
- **Frame 0 shows:** this still: bars 1..n−1 applied, the last value naked in its red dashed box, the marker beside it; privacy use title "Jangan tempel ini ke AI" (5 words).
- **Motion (0–2 s):** 0.15–0.9 s a marker stroke grows from the dashed box's left edge (black bar, `scaleX` from `transform-origin: left`, clipped to the box), runs across the value (power2.out) and stalls at ~70 % of the value width, leaving the last 3–4 characters red and exposed; the marker on the page nudges 10 px toward the box and stops with it. Same rule in the stacked layout. 0.9–2 s hold. Camera still.
- **Why it stops the scroll:** a line that is almost, but not quite, blacked out pulls the eye to the 3–4 red characters still showing, and that reads as your own data leaking.
- **Hook type (docs/bank-hook-ending.md):** #10 Berita yang langsung berdampak (privacy); for token/number videos use #9 Detail misterius (what is under the bars).

## Loop ending
- **Last 1 s:** after the CTA (~85 %, VO "…jadi sebelum paste, sensor dulu baris ini:") every bar, including the last one completed at the payoff, retracts left→right (clip-path wipe toward its right end, 60 ms stagger, power2.in). In the last 0.4 s only bars 1..n−1 redraw from their left edges (`scaleX`, power2.out) to their frame-0 lengths and codes. The last line stays unbarred: dashed box, flag and marker are back in their frame-0 places.
- **Seam:** the final frame is pixel-identical to frame 0 (B). The stall then happens fresh at 0.15–0.9 s, and the left→right wipe direction carries across the cut (E). The VO line is answered by "Jangan tempel ini ke AI" (A).

## Caption / voice-over
- **Slot:** `data-slot="caption"` on the page under the paragraphs, x ~180–870, y ~1470–1615 (rotated with the page, left-aligned), DM Serif Display 46→40 px, max 2 lines. Karaoke: active word = red `#B8322A` bar with paper text, other words ink.

## Notes for the video build
- Each paragraph types on (`(n) Label :`), then its bar is drawn from its own left edge on the word that names it. Bars never translate over labels. Payoff (< 70 %): the stalled stroke completes, `Ps.17h` appears, the flag peels off.
- Data rule: in privacy videos the barred values are replacement tags (`[NAMA]`, `[NIK]`, `[NO. REK]`), so each bar reads as covering something. Only the exposed line carries a dummy value, labelled "data fiktif". Never use a real ID.
- Camera = punctuation: one punch-in per scene onto the exposed red line when the VO names the mistake; hold ≥ 1.5 s, no zoom back out.

## References
- https://www.artofthetitle.com/title/psycho/ — plain bars on fixed, non-crossing paths: a strict graphic wipe (here each bar wipes inside its own slot).
- https://en.wikipedia.org/wiki/Sanitization_(classified_information) — black bars over only the sensitive words; classification marking centred at the top and bottom of every page.
- https://helpx.adobe.com/acrobat/using/removing-sensitive-content-pdfs.html — mark (outline box) then apply (solid bar with overlay text/code); the unapplied outline is our "mistake".
- https://www.cia.gov/readingroom/ — released pages are crooked photocopies with numbered paragraphs and code-tagged redaction boxes.
