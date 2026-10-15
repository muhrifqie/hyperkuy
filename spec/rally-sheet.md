# Rally Sheet (`rally-sheet`)

**Metaphor:** Lembar skor wasit bulu tangkis → arena model: dua jawaban anonim bertanding, manusia memilih yang lebih baik, jutaan "ralli" membangun rating Elo — satu poin per ralli, bukan satu ujian besar.
**Series:** ai-in-numbers | ai-news
**Axes:** light · condensed · 2.5D · code

## Look
- **Palette:** `#F7F5EF` kertas lembar · `#1B2A4A` navy tinta tusi/Model A · `#D23C2F` merah pensil/Model B · `#C9A27A` (aksen kayu) · `#B8BCC2` aluminium clipboard
- **Fonts (Google Fonts):** Antonio (judul, skor, MODEL A/B) / IBM Plex Mono (alasan, kicker, meta)
- **Grid / layout:** kicker y 252; lembar x 90–990, y 316–1504; judul di lembar y ~350–550 (auto-fit 88→64px); baris "SKOR GAME 19–19" + catatan margin "+n ELO (ilustrasi)"; rail MODEL A y ~616, kolom ralli y 700–1048, rail MODEL B y ~1066; caption di lembar y 1352; meta di aluminium y 1592; shuttlecock di pojok kanan-bawah lembar
- **Signature elements:**
  1. Kolom ralli bertinaan: alasan di kepala kolom, skor berjalan besar, kotak centang A/B dengan tick tinta
  2. Lingkaran merah pensil di ralli penentu + catatan margin Elo berlabel ilustrasi
  3. Shuttlecock bulu SVG bersandar di sudut lembar — benda asli dunia ini

## 2-second hook
- **Frame 0 shows:** lembar tergantung di 19–19 dengan dua kotak jawaban kosong di atas
- **Motion (0–2 s):** shuttlecock jatuh ke lembar (0,4 s), satu tick pensil masuk kotak (type-on tinta), kalimat: "Kamu pilih jawaban yang mana?"
- **Why it stops the scroll:** penonton ikut memilih sebelum tahu hasilnya
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu

## Loop ending
- **Last 1 s:** gim selesai 21–19, lembar atas dibalikkan melewati clipboard (Bank G)
- **Seam:** lembar segar 0–0 dengan dua kotak kosong yang sama duduk persis seperti frame 0 — progres reset

## Caption / voice-over
- **Slot:** `data-slot="caption"` x 132–892 (di atas kertas), y 1352–1500, 42px mono; kata aktif di-knock-out blok merah `#D23C2F`

## Notes for the video build
- Beat 1 dua jawaban turun ke kotak, beat 2 tick + lingkaran merah, beat 3 catatan Elo; kamera: 1 punch-in ke lingkaran
- Risiko: alasan kolom (2 kata) harus muat — auto-wrap sudah diuji 3 dan 4 item

## References
- https://www.badmintonquebec.com/wp-content/uploads/2016/08/BWF-Umpire-Training-Manual-Tips-August-2016.pdf — notasi S/R/0 tiap gim: tanda langka yang teratur, satu tanda = satu ralli
- https://en.wikipedia.org/wiki/Elo_rating_system — rating diperbarui tiap hasil head-to-head: matika di balik leaderboard berpasangan
