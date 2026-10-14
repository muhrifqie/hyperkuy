# Storage Full (`storage-full`)

**Metaphor:** a phone's storage screen where one item won't fit and runs through the BATAS wall → AI always works inside a hard capacity (GPU memory, context, budget): whatever crosses the wall must be shrunk, cut or forgotten. Quantisation is one episode variant (70B: 16-bit 140 GB → 4-bit 35 GB).
**Series:** ai-in-numbers · how-ai-works
**Axes:** light · grotesque · 2.5D · app-ui

## Look
- **Palette:** `#B82E68` berry: thin field frame, warning icon, "100%", a segment, lane hatch tint · `#FFFDF9` sheet cream (page behind `#F1EBE1`) · `#1C1B1A` ink: phone, headline, wall, toast, action · `#2B5BD7` blue: hero segment + overflow nub, title `hl` when it names the hero, back link, download line · `#F4BBD0` blush: a segment, active caption word, toast ring
- **Fonts (Google Fonts):** Bricolage Grotesque 800 (headline 110→84 px, opsz 96) and 600–800 (nav, alert, labels, buttons, caption) / Geist Mono 500–800 (date, values, %, BATAS, source)
- **Grid / layout:** phone near full-bleed (screen x 40–1040 from y 170, 2D tilt −1.2°, bezel cropped by the left, right and bottom edges); the berry field shows only as a ~150 px top band and slivers. Status bar y ~200–240 with `date` in the clock slot, stalled download line y ~260, nav y ~281–355 ("‹ series · ep" back link + "Penyimpanan"). Alert bottom sheet from y ~366 (grabber): alert row y ~414–479 (`alert` · `level`), headline from y ~494 (≤ 4 lines, ends above y ~895), bar 116–184 px, 3–5 legend rows 54–84 px, source line, all in the column x ~95–860. Right of it: the BATAS wall and a pale hatched "beyond capacity" lane x ~880–1040. Toast bottom at y 1608; sheet actions (Nanti · `action`) y ~1653–1765; home indicator y ~1880. The budget shrinks gaps and rows first, then the headline.
- **Signature elements:**
  1. BATAS wall + lane: a capacity line down the whole sheet (solid across the bar); only the hero's blue hatched nub breaks into the lane = "doesn't fit". Hero = largest same-unit value (ties → the `hl` item), else the item `hl` names (fuzzy: "1 detik" ≈ "±1 dtk"), else the last.
  2. An honest bar: same unit → proportional parts of one whole; mixed units → equal widths and "lebar bar ilustrasi" appended to the source; alternatives (labels with bit widths, or `mode: "alternatives"`) → one fill per option from the same edge (hero full, others ghosted with notches), never summed.
  3. The alert sheet as title card: headline in Bricolage 800, `hl` in the hero's blue with a hatched underline (berry when it names no item); legend rows with numbered chips matching the bar.

## 2-second hook
- **Frame 0 shows:** the cover composition with the hero segment stopped just short of BATAS, alert at 96%, download line at 60%. On screen: the headline as the hook line (keep it ≤ 7 words) above the bar.
- **Motion (0–2 s):** 0.4–1.2 s the hero grows from its left edge (power2.inOut) on the spoken `hl` word and pushes through BATAS, the hatched nub breaks into the lane; the level counts 96 → 100% and locks; the download line stalls on a berry dot. Camera still. Quantisation variant (`action: "Kompres"`, alternatives data): 1.4–2 s the action is tapped and the full fill shrinks back to the 4-bit notch while the value counts 140 → 35 GB.
- **Why it stops the scroll:** everyone has watched a download hit "storage full"; seeing the topic's biggest number physically fail to fit is instant and begs "why?".
- **Hook type (docs/bank-hook-ending.md):** #8 Notifikasi relatable (the quantisation variant pays off as #6 Sebelum vs sesudah).

## Loop ending
- **Last 1 s:** after the CTA (~85%) the `action` button is tapped: the hero retracts to just short of BATAS, the nub disappears, the level ticks back to 96% and the download line rewinds to 60%.
- **Seam:** the last frame is frame 0 exactly → ending **G** (progres reset) + **B** (frame kembali); the opening growth then repeats the same left-to-right push. No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` in an ink system toast with a blush progress ring, x ~110–890, bottom y 1608 (~1447–1608), Bricolage 600 46→40 px, 1–2 lines (longer voice-over is windowed with "…" around the active word). Active word = `hl` if in the line, else the first word: blush `#F4BBD0` 800 with a 5 px underline; spoken words cream, upcoming `#A9A39B`.

## Notes for the video build
- Per beat: segments build from the left as their legend rows type on; the hero comes last and breaks the wall on its word. Chrome copy comes from data with neutral defaults: `alert` ("Ruang tidak cukup"), `level` ("100%"), `action` ("Kelola").
- Camera = punctuation: one punch-in to the wall + nub when "nggak muat" is spoken, hold ≥ 1.5 s, no zoom back out. The tilt is a fixed 2D rotate (no perspective seams), no idle wobble.
- Risks: the sheet actions sit in the TikTok caption zone (chrome only, nothing key); generic status bar, no OS logo.

## References
- https://huggingface.co/docs/optimum/concept_guides/quantization — lower-precision weights cut memory in proportion to bits: the variant's shrink.
- https://m3.material.io/components/progress-indicators/overview — a determinate linear indicator read left to right; https://m3.material.io/components/sheets-bottom/overview — a bottom sheet with a grabber as the title card.
