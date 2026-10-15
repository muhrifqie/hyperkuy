# Bubble Chamber (`bubble-chamber`)

**Metaphor:** Foto bubble chamber → interpretability: partikel tak pernah terlihat, hanya jejaknya — peneliti membaca fitur internal yang "menyala" untuk menjelaskan jawaban model.
**Series:** how-ai-works | ai-news
**Axes:** dark · mono · 2D · diagram

## Look
- **Palette:** `#050608` lapangan foto hitam · `#E9E7E1` jejak putih · `#F2C14E` pensil grease kuning · `#8C93A3` fiducial abu · `#B23A3A` satu jejak merah
- **Fonts (Google Fonts):** Azeret Mono (judul, angka, nomor frame) / Instrument Sans (label grease, caption)
- **Grid / layout:** kicker y 288 + nomor frame kanan; judul mono y 336–572; foto (vertex kiri-bawah, 15 track dotted, 2 spiral, cross fiducial) full-bleed y 572–1460; label grease di anchor tetap dekat track; caption y 1466; meta y 1590
- **Signature elements:**
  1. Track partikel titik-titik (stroke-dasharray) dari satu vertex berkilau — item = fitur + kekuatan
  2. Lingkaran ganda grease pencil mengelilingi spiral (ini D.hl)
  3. Cross fiducial + mottle fotografis + nomor frame "FR 2026-10-14 / 0347" — bahasa arsip lab

## 2-second hook
- **Frame 0 shows:** semburan track tanpa label — foto bukti yang indah tapi kriptik
- **Motion (0–2 s):** pada 1,0 s grease pencil melingkar spiral dua kali lalu menulis namanya (draw-in + type-on grease)
- **Why it stops the scroll:** foto ilmiah yang cantik dan belum jelas apa, lalu satu detail diberi nama — bukti dari dalam AI
- **Hook type (docs/bank-hook-ending.md):** #9 Detail misterius

## Loop ending
- **Last 1 s:** track menyusut balik ke vertex seperti waktu berjalan mundur, label grease terangkat (Bank D)
- **Seam:** foto bersih frame 0 kembali utuh — komposisi identik, siap dianotasi lagi

## Caption / voice-over
- **Slot:** `data-slot="caption"` x 90–950, y 1466–1580, 44px; kata aktif di-knock-out blok kuning grease, teks hitam

## Notes for the video build
- Beat 1 foto diam, beat 2 lingkaran+tulis, beat 3 label track lain satu per satu; kamera still, tanpa zoom (crop/mask saja)
- Risiko: track dotted harus tetap terbaca di layar ponsel — tebal 4px minimum

## References
- https://scienceinschool.org/content/track-inspection-how-spot-subatomic-particles — track dibaca dari kelengkungan, spiral, vertex: bentuk jejak mengkode nilainya
- https://scienceinschool.web.cern.ch/wp-content/uploads/2019/03/issue46_bubblechamber.pdf — praktik menganotasi foto chamber: label tangan di atas medan fotografis
