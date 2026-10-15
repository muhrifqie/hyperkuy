# Tempeh Culture (`tempeh-culture`)

**Metaphor:** iritan melintang blok tempe di talenan gelap → training membangun koneksi: data mulai sebagai kecapai (kacang) lepas; sepanjang run, benang (bobot) tumbuh di antaranya sampai semuanya terikat menjadi satu model padat.
**Series:** how-ai-works | ai-in-numbers
**Axes:** dark · mono · 3D · abstract

## Look
- **Palette:** `#1B1A17` talenan gelap (latar) · `#D7C399` kacang kedelai · `#A78D5B` tepi/label cokelat · `#F6F3EC` miselium & teks terang · `#3B5BA9` aksen biru (iritan hl, kata aktif)
- **Fonts (Google Fonts):** Fragment Mono (jam, nilai, kicker) / Work Sans (judul, label, caption)
- **Grid / layout:** kicker y≈296; judul y 352–590 (hl = patch krem); deretan 3–5 iritan 214×380 y ≈ 640–1160, chip "JAM n" di sudut tiap iritan, nilai mono + label di bawahnya; pisah istirahat di samping y ≈ 1230; caption y ≈ 1300–1614. 300px bawah bebas.
- **Signature elements:**
  1. Iritan tempe SVG: kecapai bundar berkilau + miselium (garis putih) yang bertambah rapat tiap iritan
  2. Chip stempel waktu "JAM 0/12/24/36" menempel di sudut iritan — iritan hl diberi bingkai biru
  3. Pisau dalam posisi istirahat + talenan gelap ber-gradient: dunia dapur yang nyata

## 2-second hook
- **Frame 0 shows:** deretan iritan dari kecapai lepas (jam 0) sampai blok terikat — benang terlihat tumbuh dari kiri ke kanan.
- **Motion (0–2 s):** time-lapse: penghitung "jam 0 → jam 36" berjalan sementara benang menggambar diri (draw-in) mengikat kecapai jadi blok.
- **Why it stops the scroll:** kalimat menggantung "Model AI itu tumbuh, bukan..." menahan penonton di benda yang berubah pelan tapi jelas.
- **Hook type (docs/bank-hook-ending.md):** #12 Kalimat menggantung

## Loop ending
- **Last 1 s:** pisau memotong satu iritan yang hancur kembali jadi kecapai lepas.
- **Seam:** ending D benda dibongkar balik — kecapai berhamburan menata ulang diri ke susunan iritan jam-0 di frame pembuka.

## Caption / voice-over
- **Slot:** `data-slot="caption"` x 90–970, y ≈ 1300–1614, 40–46 px; karaoke: kata aktif = blok biru `#3B5BA9` teks krem (knock-out), kata lain krem pudar.

## Notes for the video build
- Beat: draw-in miselium per iritan (kiri→kanan) mengikuti waktu; Count & lock pada persentase; chip "JAM n" muncul saat waktunya (Stagger build).
- Kamera: satu travel pelan menyusuri deretan iritan saja; risiko: 5 iritan bikin chip sempit — nilai sudah menyusut otomatis sampai 26px.

## References
- https://en.wikipedia.org/wiki/Tempeh — miselium Rhizopus mengikat kecapai lepas jadi kue padat dalam ±24–36 jam pada ±30 °C: garis waktu nyata untuk time-lapse.
