# Circuit Breakers (`circuit-breakers`)

**Metaphor:** a close phone photo of an open Indonesian MCB panel, one DIN-rail breaker per circuit with marker tape above it → what an AI agent may touch: every breaker is one tool (email, files, browser, payments); flip it down and the agent physically can't use it, so switch on only what the task needs.
**Series:** ai-tools
**Axes:** dark · condensed · 2.5D · physical-object

## Look
- **Palette:** `#3B4148` anthracite powder-coat cover (full bleed) · `#141517` black engraved laminate · `#F2F1EC` white MCB modules + label-maker tape · `#E8D9B8` masking tape · `#C63D29` red: laminate insert, OFF window, marker ring (blue `#2F6BD8` = active caption word only)
- **Fonts (Google Fonts):** Barlow Condensed 700/600 (nameplate, kicker, module print, ON/OFF) / Barlow Semi Condensed 600/500 (label-maker caption, directory card) / Permanent Marker (tape labels)
- **Grid / layout:** steel cover x 40-1040 edge to edge (no wall), cable glands in the top 190 px. Nameplate x 64-1016 from y 272: engraved kicker "PANEL A · 220 V · series ep" (28 px), title in centred, balanced caps of 72-150 px (2 lines preferred while they stay ≥ 96 px, max 3 lines / 300 px), with a screw at each end. Label-maker strip 24 px under the plate. Tapes above the slot: 1 row for 3 items; 2 staggered rows with white paint-marker arrows for 4-5. Slot x 76-1004: items fill x 90-900 (width 810/n), and blanking plates fill x 900-1004, so nothing key enters the action-button band. Each module: number badge 1..n, value in the rating spot (34-44 px, 2 lines max, never under 30 px), ON/OFF window, toggle with UP = ON. Directory card "DAFTAR MCB 1-n" (source + date) sits under the slot, on the side away from the finger, and ends at y ≤ 1606.
- **Signature elements:**
  1. An engraved black laminate nameplate riveted across the cover: the title and kicker are white letters cut through it, and `hl` is a red laminate insert.
  2. White MCBs with a real thrown state: lever up with a grey ON window, or lever down with a red OFF window. A lever is down only when the value is OFF/mati/nonaktif/padam/0. When a value is only a state word, the rating spot prints "—" and the window carries the state.
  3. The hand-made layer on the steel: marker tape labels, the label-maker caption, and one red marker ring on the single item that matches `hl`. A match is any hl word of 2+ letters or any digit run, found in the label or the value; a tie rings nothing. A flat fingertip rests under the ringed item's lever, else under the first OFF lever, else there is no finger.

## 2-second hook
- **Frame 0 shows:** this still. Concept copy: the nameplate reads "NYALAIN AKSES BAYAR BUAT AGEN AI?" (6 words, BAYAR on the red insert). The PEMBAYARAN lever is down with a red OFF window and its tape is ringed. A fingertip rests under that lever, as if about to push it up, and EMAIL, FILE and BROWSER are ON.
- **Motion (0-2 s):** from 0.3 to 0.8 s the finger lifts the lever about 10 px (sine in-out) and stops. It is a hesitation, so there is no click. The strip reads "Tebak dulu: tugasnya cuma cari tiket pesawat." The answer comes at about 55%: the finger lets go, the lever drops back with a dry click, and the finger leaves the frame.
- **Why it stops the scroll:** a finger on the money switch is a decision everyone has an opinion on, and the viewer has to guess before the panel answers.
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu ("nyalain atau jangan?", answered at about 55%).

## Loop ending
- **Last 1 s:** after the CTA (about 85%), only the PEMBAYARAN lever matters, and it is already back down. The finger slides in from below and settles under it while the VO asks "…jadi, nyalain nggak?". No other lever moves and no ring un-draws.
- **Seam:** the last frame is frame 0 (finger under the down PEMBAYARAN lever). The VO question flows into the frame-0 title (C), and the finger's tap on the loop point uses the same click SFX as the reveal (J).

## Caption / voice-over
- **Slot:** `data-slot="caption"` is the white label-maker strip under the nameplate, x 96-984 (804 px wide if it would reach y 900), 44 px (40-42 px to stay within 2 lines), 1-2 lines. Karaoke: spoken words are `#17181A` and upcoming words `#56585C`. The active word is white on a `#2F6BD8` pill: `hl` when its whole words appear in the caption, else its affixed form for a one-word hl of 4+ letters, else the first word.

## Notes for the video build
- Beats: the tapes stick on with an 80 ms stagger as each tool is named, and the values print onto the modules. Every state change is a lever snap, a window colour and a click, never a fade. The ON/OFF changes are the content, so allow at most 3 flips per video.
- The camera is punctuation: one punch-in to the PEMBAYARAN module at the reveal, held ≥ 1.5 s, then a cut back. Otherwise it stays locked off like a phone photo. Keep the finger a flat silhouette and don't animate the cover or the plate.

## References
- https://cufacilities.sites.clemson.edu/documents/capital/Sample%20Electrical%20Panel%20Schedule.docx — a panel directory: numbered circuits with a description column, a permission list in physical form (DAFTAR MCB card, circuits 1..n).
- https://forums.mikeholt.com/threads/panel-schedule-program.806/post-209724 — labels on or next to the breakers, so state and name read together at a glance (tape above each module).
