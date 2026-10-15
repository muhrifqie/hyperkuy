# Spine Shelf (`spine-shelf`)

**Metaphor:** Dinding rak perpustakaan → skala data latih: satu rak = seumur hidup membaca satu orang, satu dinding = korpus latih model.
**Series:** ai-in-numbers
**Axes:** dark-to-light · condensed · 3D · data

## Look
- **Palette:** `#1A1714` lorong gelap · `#8C2F25` kain merah pustaka · `#2E3D5C` kain biru · `#C9A55C` emas gilt/angka · `#E8DFCC` kertas
- **Fonts (Google Fonts):** Oswald (judul, angka pelat) / Libre Baskerville (label pelat, bracket italic)
- **Grid / layout:** kicker y 288; judul y 336–536 (auto-fit 92→64px); strip skala y 556; dinding rak full-bleed y 596–1448 (6 rak, buku dari hash deterministik); pelat kuningan item di rak 1..n sisi kiri; bracket kanan "kamu / mesin"; caption y 1466; meta y 1590
- **Signature elements:**
  1. Elevasi dinding rak dengan punggung buku kain + band gilt (SVG, kadang miring) — grafik batang yang menyamar jadi perpustakaan
  2. Pelat kuningan bergaya label perpustakaan per rak, tag "RAK 01.." — item label+nilai
  3. Bracket italic kanan: rak pertama = "kamu", sisa dinding = "mesin"

## 2-second hook
- **Frame 0 shows:** satu punggung buku close-up, dinding samar di belakang
- **Motion (0–2 s):** satu pull-back (satu-satunya gerak kamera) membuka dinding rak sampai keluar frame; pelat angka muncul berurutan (stagger build)
- **Why it stops the scroll:** angka mustahil baru terasa saat skala rak terungkap — reveal jadi punchline
- **Hook type (docs/bank-hook-ending.md):** #2 Angka mustahil

## Loop ending
- **Last 1 s:** kamera mendorong balik ke satu punggung buku yang sama (Bank B)
- **Seam:** frame terakhir = frame 0 persis; arah gerak masuk (push-in) menyambung dengan pull-out pembuka

## Caption / voice-over
- **Slot:** `data-slot="caption"` x 90–950, y 1466–1580, 44px serif; kata aktif di-knock-out blok emas, teks gelap

## Notes for the video build
- Beat 1 close spine, beat 2 pull-back + pelat, beat 3 bracket; kamera hanya 1 move (pull-back), hold ≥1,5 s
- Risiko: jangan sampai dinding terasa seperti pola ulang — variasi tinggi/warna dari hash, sisipkan 1 buku miring per rak

## References
- https://en.wikipedia.org/wiki/Spine_(bookbinding) — judul punggung dibaca atas-ke-bawah sehingga satu rak terbaca sebagai satu indeks
