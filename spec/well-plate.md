# Well Plate (`well-plate`)

**Metaphor:** microplate 96-sumbat tiga-perempat disuapi pipet 8-kanal → butuh GPU: CPU menuang satu sumbat sekali gerak, GPU mengisi ribuan sekaligus — AI didominasi jutaan hitungan kecil identik yang jalan paralel.
**Series:** ai-in-numbers | how-ai-works
**Axes:** pastel · mono · 3D · data

## Look
- **Palette:** `#E8EEF2` bench pastel (latar) · `#1C2A3A` tinta/teks · `#E86F5A` koral · `#F2C46D` amber · `#7C8FB7` periwinkle
- **Fonts (Google Fonts):** Geist Mono (judul, chip "1/3", printout) / Onest (label, caption)
- **Grid / layout:** kicker y≈296, judul mono kiri (lebar 620, y 352–560), strip printout kanan atas (rotasi 2.4°, sumber+tanggal). Chip data 3–5 di kolom kiri x 90–340 (y 560–1330). Plat 3D (`rotateX 34°`) x 290–890, y ≈ 640–1420 dengan chip rim `1/3` per grup kolom. Caption selotip y ≈ 1470–1614. 300px bawah bebas.
- **Signature elements:**
  1. Grid 12×8 sumbat dengan shading inset — kolom dikelompokkan & di-tint koral/amber/periwinkle per item
  2. Pipet 8-kanal melayang tepat di atas grup kolom `hl` — paralelisme sebagai satu gestur
  3. Strip printout plate-reader (kertas putih, garis perforasi) untuk sumber + tanggal

## 2-second hook
- **Frame 0 shows:** plat dengan grup kolom 1/3 · 2/3 · 3/3 sudah ter-label dan pipet 8-kanal melayang siap turun.
- **Motion (0–2 s):** pipet turun satu gerakan, satu kolom penuh terisi serentak (8 sumbat sekali tekan); chip rim menyala bergantian (stagger build).
- **Why it stops the scroll:** daftar bernomor yang terlihat membuat penonton tahu durasinya dan ingin menunggu 3/3.
- **Hook type (docs/bank-hook-ending.md):** #11 Daftar bernomor terlihat

## Loop ending
- **Last 1 s:** plat penuh meluncur keluar ke kanan.
- **Seam:** ending E arah gerak — plat kosong masuk dari kiri ke posisi persis frame-0, pipet kembali melayang di atasnya.

## Caption / voice-over
- **Slot:** `data-slot="caption"` selotip x 90–990, y ≈ 1470–1614, 40–46 px; karaoke: kata aktif = blok solid `#1C2A3A` teks krem (knock-out), kata lain biru-abu.

## Notes for the video build
- Beat: pipet turun → kolom terisi serentak → chip rim `n/n` menyala satu per satu (Count & lock pada nilai chip kiri).
- Kamera still; satu punch-in ke kolom di bawah pipet saat beat penjelasan. Risiko: grid 96 sumbat berat saat animasi — render sumbat sebagai satu layer grup.

## References
- https://en.wikipedia.org/wiki/Microplate — grid standar 8×12 (A–H, 1–12): data grid yang langsung terbaca di benda nyata.
- https://docs.opentrons.com/v2/pipettes/characteristics.html — pipet 8-kanal menyapu satu kolom dalam satu gerak: paralelisme sebagai satu gestur.
