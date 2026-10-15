# Split Tally (`split-tally`)

**Metaphor:** tongkat tally hazel belah dua (stock & foil) di atas vellum bersegel lilin merah → provenance & watermark AI: tanda tak terlihat menetap di dalam konten, dan hanya "broang" sebelahnya (kunci pemeriksa) yang cocok persis — tiruan atau salinan yang diedit tidak akan sejajar.
**Series:** ai-news | how-ai-works
**Axes:** pastel · serif · 3D · code

## Look
- **Palette:** `#EDE4D3` vellum (latar) · `#B88A57` kayu hazel · `#8C6239` bayangan kayu · `#2A2118` tinta · `#9E2B25` segel lilin merah (hl/ring)
- **Fonts (Google Fonts):** EB Garamond (judul serif, label italic katalog) / DM Mono (nilai, kicker, cap "tiruan")
- **Grid / layout:** kicker y≈296; judul serif besar y 352–560 (kolom 860, 2 baris, hl dicoret miring bergaris merah); sepasang stick belah dua diputar 9° melintang y ≈ 620–1010 (face potongan + takaran); baris label spesimen (chip krem) y ≈ 1030–1140; stick palsu + segel lilin y ≈ 1160–1390; caption y ≈ 1500–1614.
- **Signature elements:**
  1. Dua bilah kayu dengan face potongan krem dan takaran bermata lebar tak sama (telapak, ibu jari, kelingking, rambut)
  2. Ring segel merah pada takaran tempat kedua belahan cocok persis (item `hl`)
  3. Segel lilin merah + stick tiruan terpisah dengan satu takaran merah yang tidak sejajar

## 2-second hook
- **Frame 0 shows:** stock dan foil terpisah, stick tiruan tergeletak di sampingnya — tiga benda, satu pertanyaan.
- **Motion (0–2 s):** kedua belahan asli meluncur menyatu dan "klik" rata (0.4 dtk, ease-out); stick tiruan terlihat meleset satu takaran; ring merah muncul di titik sambung.
- **Why it stops the scroll:** penonton diminta menebak dulu mana yang asli — jawabannya terlihat dalam sekejap tapi manis ditonton ulang.
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu

## Loop ending
- **Last 1 s:** pasangan yang sudah cocok dibelah lagi dan meluncur kembali ke posisi awal di samping stick tiruan.
- **Seam:** ending D benda dibongkar balik — komposisi frame terakhir identik frame-0: dua belahan terpisah + tiruan.

## Caption / voice-over
- **Slot:** `data-slot="caption"` x 90–970, y ≈ 1500–1614, 40–46 px; karaoke: kata aktif = blok lilin `#9E2B25` teks krem (knock-out), kata lain cokelat tua.

## Notes for the video build
- Beat: slide-together + klik (J: SFX klik = klik pembuka) → ring merah (Stamp) → takaran tiruan bergoyang menolak menyatu.
- Kamera: satu punch-in ke titik sambung ring. Risiko: tekstur kayu berubah saat rotasi — bake gradient, jangan noise dinamis.

## References
- https://en.wikipedia.org/wiki/Tally_stick — lebar takaran menyimpan nilai dan permukaan belah yang tak beraturan membuat hanya dua bagian asli yang cocok: kode autentikasi fisik.
- https://collection.sciencemuseumgroup.org.uk/objects/co60506 — foto objek museum: satu objek panjang, cahaya menyapu potongan, latar polos.
- https://en.wikipedia.org/wiki/Digital_watermarking — tanda tersembunyi di dalam konten yang bisa diverifikasi detektor.
