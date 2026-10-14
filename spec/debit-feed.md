# Debit Feed (`debit-feed`)

**Metaphor:** an e-wallet "Riwayat transaksi" screen where every item is a debit row → AI numbers read as money leaving the wallet; in its history episode each row is one chat turn and its strip shows that every new message resends the whole chat (turn t reads t messages).
**Series:** ai-in-numbers · how-ai-works
**Axes:** dark-to-light · grotesque · 2.5D · app-ui

## Look
- **Palette:** `#101828` navy balance header · `#F7F6F2` paper statement sheet · `#1A1A1A` ink · `#D93A2B` debit red (text `#C2301F`, on navy `#F26B5B`) · `#3366E0` earlier/history cells, pill, caption underline
- **Fonts (Google Fonts):** Golos Text 700/600/500 (title, labels, caption) / Spline Sans Mono 600–700 (title hl as tabular figures, amounts, chips, account chip, "Catatan:")
- **Grid / layout:** all text x 90–990; past x 900 in y 900–1500 only chevrons and card edges. Navy balance block, centred: label + eye icon and account chip (series · ep) y 300–346 · title = the balance line y 368 → ~570–615 (120→72 px, 2 lines preferred, max 3; samples 98 / 104 px) · quick actions: two 84 px round buttons (centres x 190 / 890) joined by a 28 px transfer strip, labels under, ~y 600–765 · sheet rises ~y 760–785 over two older statements · "Hari ini · date" + pill · one white list card, 3–5 rows ~y 850–1340 (4 measured modes; labels and amounts never < 40 px, long labels wrap; the detail line shows on every row or none; strips and chips never hide) · source · outlined "Catatan:" memo y ~1450–1606. Status/app bar (y 40–190) and tab bar (y 1636+) are decoration outside the safe zone.
- **Signature elements:**
  1. Every row ends in a 24–30 px segmented strip that is also its divider; a mono chip rides the strip just past the filled run (×1 ×5 … or 1/n … n/n), so the chips step right down the list like a staircase.
  2. Balance block: the title set as the balance line, hl in tabular mono figures ("Rp 60"); two round quick-action buttons joined by a transfer strip. Statement: "n transaksi" → "total <unit>" (only when every value shares one unit, else "Unduh mutasi"). History: "kamu ketik T" → "AI baca T(T+1)/2", one cell per message read.
  3. Statement furniture: out-arrow icons, minus only on numeric debits (words and percentages become a grey info pill with an "i" icon), the latest row tinted red, the caption inside a "Catatan:" memo field.

## 2-second hook
- **Frame 0 shows:** history episode (5 turns, Rp 12 per message read): balance block with "Pesan ke-5 dipotong Rp 60" (hl "Rp 60"), buttons "kamu ketik 1 · AI baca 1", sheet with only row "Pesan ke-1 −Rp 12 ×1" and, below it, a greyed "Kemarin" group of 3 older debit rows (40% opacity) so the sheet is never empty.
- **Motion (0–2 s):** rows 2–5 stagger in under row 1 every 110 ms (rise 240 ms, ease-out), pushing "Kemarin" down; each strip draws its cells left → right and its chip lands ×2 … ×5; amounts count and lock −Rp 24 … −Rp 60; the big "AI baca" number races 1 → 15 while "kamu ketik" only ticks to 5; at 1.6 s the last row tints red. Camera still.
- **Why it stops the scroll:** a debit list where every charge is bigger than the last reads as bill shock in under a second: "kok saldo kepotong segini?".
- **Hook type (docs/bank-hook-ending.md):** #8 Notifikasi relatable (bill shock on a wallet statement).

## Loop ending
- **Last 1 s:** after the CTA (~85%) the "+ Chat baru" pill is pressed (fills blue, 120 ms); rows 2–5 fold up into row 1 (400 ms ease-in-out), strips retract to one red cell, chips fall back to ×1, counters drop to "kamu ketik 1 · AI baca 1", and "Kemarin" slides back up under row 1.
- **Seam:** the final frame equals frame 0 (same header, single row, same "Kemarin" group), so the stagger build restarts from there: ending **G** progress reset; the pill tap and row 1's tick share one SFX (**J**). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` inside the outlined "Catatan:" memo field (box x 90–990, label notch Spline Sans Mono 600 30 px), text x 114–900, bottom-anchored y 1592 (~y 1478–1592), Golos Text 500 46→40 px, 1–2 lines (overflow ends in "…"). Karaoke: active word = `hl` if in the caption else the first word, ink Golos 700 with a segmented underline (blue dashes + red tail, the strip again); spoken words ink, upcoming `#5B6272`.

## Notes for the video build
- The data decides the layer: by default a neutral statement (strip k = k of n transactions, chip k/n, no "pesan"/"AI baca" wording); `mode: "history"` or `turn` fields switch on the context-cost layer (chip ×t, t cells per row, AI baca = T(T+1)/2). Turns may skip (1, 5, 10, 15, 20 → AI baca 210, −Rp 12 → −Rp 240). Amounts stay illustrative, so keep "Sumber: ilustrasi …" on screen.
- One row per beat: the row arrives on the word that names it, its strip draws left → right (60 ms per cell), the chip lands, the amount counts and locks, and the header counters tick in sync. Camera = punctuation: one punch-in on the last row's strip at "dibaca ulang semuanya", hold ≥ 1.5 s.
- Risks: never a real e-wallet's brand (generic glyphs and palette only); soft shadows, no glow.

## References
- https://platform.claude.com/docs/en/build-with-claude/context-windows — every turn's input carries all earlier turns plus the new one: t cells on row t, AI baca = T(T+1)/2.
- https://en.wikipedia.org/wiki/Bank_statement — a chronological debit ledger with a running total: rows, a running-count strip, the balance block.
