# Batik Resist (`batik-resist`)

**Metaphor:** a batik tulis workbench: mori cotton lashed in a wooden stretcher, indigo poured over it → guardrails and the system prompt are waxed in *before* any dye (your request) arrives, so they stay undyed however much is poured on later.
**Series:** how-ai-works · ai-tools
**Axes:** full-colour · serif · 2D · physical-object

## Look
- **Palette:** `#1F2F5C` indigo dye (dominant field, values) · `#6B3E1F` soga brown (second bath: wet edge, crackle veins) · `#F1E6CF` mori / wax cream (title, medallions) · `#C98A2E` malam amber, rim `#5A3112` (hl, cecek underline, canting wax) · `#3A2418` bench + text on cream (wood frame `#8B5A2B`)
- **Fonts (Google Fonts):** Gloock (title, item values) / Plus Jakarta Sans 500–800 (cap mark, labels, caption, source)
- **Grid / layout:** symmetric, centred on the waxed field x 90–900. Bench y 0–222 (ladle top right, stream x 856–916) · stretcher bars 222–264 / 1656–1698, sides 0–44 / 1036–1080 · cloth x 62–1018, y 284–1636. Maker's cap mark centred y 302–350. Title centred from cap + 30 (≈ y 380), 72–128 px, ≤ 312 px tall, `text-wrap: balance`. Medallions in a zig-zag from title + 46 to front − 50: left x 98–478, right x 520–900, h = (2·band − 34·(n−1)) / (n+1) ≤ 300, step (h + 34)/2; the two corners the zig-zag leaves empty hold waxed flowers. Border band x 922–1002 fills the action-button strip. Dye front FY = caption top − 76 (1337 tokens / 1431 numbers); raw mori below holds caption + meta (source · date, ends y 1620).
- **Signature elements:**
  1. The title *is* the resisted area: cream letters with a baked rough wax edge (feDisplacementMap, scale 3, seed 7) and 4 soga crack veins (+ 4 short branches) masked to the letterforms; `hl` is fresh malam (amber, dark rim) underlined by a canting cecek-dot row ending in a wax bead.
  2. Lobed wax medallions, one per item (= one rule): irregular lobes (fixed uneven lengths, 6–10 px deep) plus a fixed-sine hand wobble of ±6 px, a cecek-dot outline traced 12 px outside, 5 px feathered indigo bleed inside the edge, soga crackle (3.4 px trunks / 2.1 px branches, 0.7), three dye beads sitting unabsorbed on medallion 1. Text is fitted inside the silhouette (no edge point within 20 px), same type sizes on every medallion.
  3. The wet front: soga wet edge fading up into indigo, dark tide line, drip fingers with beads, raw mori below; around it the workshop: stretcher with thick thread lashings every 150 px, coconut-shell ladle pour, dye bath, copper canting (bamboo handle, bowl, spout, wax drop), maker's cap mark in a pointed wax cartouche.

## 2-second hook
- **Frame 0 shows:** same composition as the cover except the front sits at **y 880** (medallion 1 centre + 40; 880 with both samples): title and cap mark already islanded in indigo, the dye parting around the lower half of medallion 1 and just touching the top of medallion 2, everything below still raw mori with faint wax. On screen e.g. "Kok AI nolak permintaanku?" with `nolak` in malam amber.
- **Motion (0–2 s):** 0–0.6 s the front runs y 880 → 1000 along the precomputed wavy-path keyframes (power2.out), closing under medallion 1 (bottom y 938 tokens / 993 numbers) in the visible middle band; dye beads hit it and stay as beads; its crackle veins ink in 0.3–0.6 s: the rule held, the request is refused. 0.6–2.0 s the front settles to FY (cover state), passing medallions 2–n the same way.
- **Why it stops the scroll:** liquid moving through the middle of the frame, and the dye visibly failing to enter one shape under a complaint every viewer has had.
- **Hook type (docs/bank-hook-ending.md):** #1 AI salah di depan mata (the AI refuses in front of you)

## Loop ending
- **Last 1 s:** after the CTA (~85%), a fresh sheet of mori slides down from the top bar over the dyed one (0.35 s, power2.inOut), carrying the same motifs as faint amber wax; the ladle tips and the front runs from y 284 to **y 880** (0.65 s, power2.out) on the same wavy-path keyframes as the hook.
- **Seam:** the last frame equals frame 0 (front at **y 880**, same title, cap mark and medallions, stream mid-fall); the front then continues 880 → 1000 after the cut, so the pour never stops (B Frame kembali persis). Verify with `npx hyperframes snapshot . --at 0.05,<duration-0.05> --no-end`.

## Caption / voice-over
- **Slot:** `data-slot="caption"` at x 90–900 on the raw mori band between the front and the meta (≈ y 1410–1570), 40–46 px Plus Jakarta Sans 600, max 2 lines (long lines windowed around the active word with "…"); active word = cream on an indigo pill (the word gets "dyed"); spoken words `#3A2418`, upcoming `#6E4420`.

## Notes for the video build
- Per beat: the canting traces a medallion's cecek outline (dots appear along the contour) on the word that names it, then the dye passes and it stays cream. Animate the front with precomputed path keyframes; never animate feTurbulence or the title displacement (bake once).
- Camera is punctuation: still by default; one punch-in (≤ 1.15×) per scene on the medallion being spoken, hold ≥ 1.5 s. The pour is metaphor licence (real batik is dipped, celup); motifs stay generic (cecek, vine border, flowers): never parang, kawung or other royal/sacred patterns.

## References
- https://en.wikipedia.org/wiki/Batik — wax applied with a canting resists dye; what is waxed first is decided before any dye arrives; Javanese sogan cloth = indigo + soga brown + cream.
- https://en.wikipedia.org/wiki/Resist_dyeing — cracked wax lets fine dye veins through (the crackle on title and medallions).
- https://ich.unesco.org/en/RL/indonesian-batik-00170 — batik as living heritage with symbolic motifs: use generic isen-isen, not meaning-laden patterns.
