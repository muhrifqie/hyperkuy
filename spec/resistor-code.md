# Resistor Code (`resistor-code`)

**Metaphor:** a laminated resistor colour-code reference card: one horizontal resistor whose bands each drop a stepped leader into a decoder table → a coded name (model file `7B-Instruct-32K-Q4`, a plan tier, a version tag) is a code like resistor bands; decode it part by part and you know what you are getting.
**Series:** ai-tools · ai-in-numbers
**Axes:** light · condensed · 3D · diagram

## Look
- **Palette:** `#EFE6D2` laminated card (full bleed; `#D3C6AB` surface margin) · `#22180F` umber print: title bar, values, rules, leaders · `#D9C6A0` tan resistor body, hl capsule, hl row · `#B8913A` gold tolerance band, caption underline · `#6B5B48` secondary print. Bands and chips use the standard code (0 Hitam … 9 Putih; Emas/Perak for a value with no digit) as functional colour; green only as one key chip or band.
- **Fonts (Google Fonts):** IBM Plex Sans Condensed 700 (title), 600 (row labels) / IBM Plex Sans 500–700 (caption) / IBM Plex Mono 500–600 (meta, chips, values, key, foot)
- **Grid / layout:** card edge inset 36 px, punched hanging hole at (540, 138). Title bar `#22180F` x 46–1034 from y 232: meta row y 300 (series · ep / "KODE WARNA"), title y ≈ 352 (106 → 72 px, ≤ 3 lines, x 90–990), printed 0–9 colour key under it (the first thing dropped when space is tight). Resistor horizontal across the card (centre x 540, scale .62–.9, body ≤ 540 px), leads to both card edges at y ≈ 720–820. Leader buses under the body, gutter lanes x 96–160, decoder table x 176–900 (Pita | Warna | Arti | Nilai; a row whose label + value do not fit gives the value its own line, values ≥ 40 px). Footnote caption bottom-anchored above the foot (source / date end y 1616). PCB footprint + schematic symbol of the part in the bottom UI zone (decoration).
- **Signature elements:**
  1. The resistor: dog-bone body, cylinder shading, curved band edges, soft cast shadow. Each item is one band coloured by the real code for the first digit of its value, read from the right end; the last item sits apart at the left end (tolerance position).
  2. Stepped orthogonal leaders, nested so none crosses: each starts where its band meets the body's lower edge, drops to its own bus, runs left, down the gutter and into its numbered row. 4 px solid ink at 60 %; the `hl` leader 6 px full ink into a tan, ink-boxed row.
  3. The title bar: cream condensed title with the `hl` word printed on a tiny resistor (tan capsule, two bands + gold band, wire stubs) over the 0–9 code key; the caption is the card's printed footnote ("CATATAN:").

## 2-second hook
- **Frame 0 shows:** title only (≤ 7 words, `hl` word plain cream, no capsule yet), the resistor with all bands, the table as numbered empty slots 1…n (blank chip outlines, "?" in Nilai). Labels, colour names, meta, caption and leaders hidden; only each band's dot on the body edge.
- **Motion (0–2 s):** 0–0.3 s the `hl` band's dot grows and its leader draws out step by step to its slot (power2.out); 0.5 s the chip fills with the band colour and its name types on; 0.8 s the value types ("7B = 7 miliar parameter") and the row box strokes on; 1.2 s the capsule wipes in left → right behind the title's `hl` word. Camera still.
- **Why it stops the scroll:** a striped part everyone has seen but few can read, over a numbered table of "?" — one band answers itself and you want the rest.
- **Hook type (docs/bank-hook-ending.md):** #11 Daftar bernomor terlihat (numbered empty slots that fill band by band).

## Loop ending
- **Last 1 s:** after the CTA (~85 %) leaders retract into their bands in reverse order (row n first), values flip back to "?", chips empty to outlines, labels clear. Last 0.4 s: the `hl` leader retracts last while the title capsule wipes back right → left in step; on the last frame the `hl` dot shrinks into its band edge.
- **Seam:** last frame = frame 0 exactly (ending B, slots n/n back to empty = G), and the motion carries over: frame 0's 0.3 s draw-out grows from that same dot. No roll, no fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` x 90–900, bottom-anchored ≈ y 1400–1535 under a 2 px printed rule: mono "CATATAN:" lead-in 30 px, then IBM Plex Sans 500 46 → 40 px, 1–2 lines (longer voice-over windowed with "…" around the active word). Active word = `hl` if in the line, else the first word: ink 700 on a gold tolerance-band underline, punctuation outside; spoken words ink, upcoming `#6B5B48`.

## Notes for the video build
- Per beat: one band → one leader → one row, on the word that names it (top → bottom); numbers count and lock; the set-apart band goes last ("the part people skip"). Built for decoding a coded name or spec string, not a size/quantisation calculator.
- Camera = punctuation: still; one punch-in on the `hl` band and its row when spoken, hold ≥ 1.5 s. Nothing idles.
- Risks: band colour encodes only the first digit (no digit → Perak/Emas); self-host the IBM Plex faces for the video render.

## References
- https://www.allaboutcircuits.com/textbook/reference/chpt-2/resistor-color-codes/ — digit colours 0–9; read from the end opposite the set-apart tolerance band.
- https://eepower.com/resistor-guide/resistor-standards-and-codes — standards-chart presentation: every band mapped to a row in a table; decoding as layout.
