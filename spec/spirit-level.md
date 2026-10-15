# Spirit Level (`spirit-level`)

**Metaphor:** waterpass aluminium di dinding beton → AI alignment: menjaga model tetap "level" antara membantu dan aman — miring ke satu sisi dia menolak semuanya, miring ke sisi lain dia asal nurut; tuning mengembalikan gelembung ke tengah.
**Series:** how-ai-works | ai-news
**Axes:** light · grotesque · 3D · physical-object

## Look
- **Palette:** `#E4E2DD` beton pucat (latar) · `#B9BDC3` aluminium · `#E2B33C` cairan vial · `#1C1D20` tinta · `#2F5FD0` aksen biru (tick aktif / underline judul)
- **Fonts (Google Fonts):** Bricolage Grotesque (judul, label tick, caption) / Sometype Mono (nilai, kicker, label sumber)
- **Grid / layout:** kicker y≈296; label sumber+tanggal = kertas selotip kanan atas (rotasi 2.2°); judul kiri y 352–560 (kolom 596px, 2 baris); badan waterpass 1000×470 diputar -6.5° melintang y ≈ 700–1300, tick label + nilai di bawah vial; caption y ≈ 1500–1614. 300px bawah bebas (hanya segitung kelokan dekoratif).
- **Signature elements:**
  1. Vial amber besar dengan ring batas tengah + gelembung krem di posisi tick `hl`
  2. Dua vial bundar sudut (crosshair) sebagai keseimbangan sumbu kedua
  3. Tick berskuala: label perilaku (Bricolage) + nilai mono di bawahnya, tick aktif diberi chip biru

## 2-second hook
- **Frame 0 shows:** waterpass miring dengan gelembung terjepit di tick ujung ("Asal nurut"), sudah terbaca.
- **Motion (0–2 s):** badan berayun ke posisi level (ease-out 1.2 dtk) dan gelembung meluncus perlahan ke tengah (sebelum/sesudah dalam satu benda).
- **Why it stops the scroll:** kontras sebelum-vs-sesudah pada satu gelembung — pertanyaan "AI selaras itu maksudnya apa?" langsung punya gambaran visual.
- **Hook type (docs/bank-hook-ending.md):** #6 Sebelum vs sesudah terbelah

## Loop ending
- **Last 1 s:** tag "update" baru ditempel di badan level, badan miring lagi ke sudut frame-0.
- **Seam:** ending B frame kembali persis — gelembung kembali ke tick "Asal nurut", sudut & komposisi identik frame pembuka.

## Caption / voice-over
- **Slot:** `data-slot="caption"` x 90–950, y ≈ 1500–1614, 40–46 px; karaoke: kata aktif digarisbawahi blok amber tebal (highlight stroke), kata lain abu gelap.

## Notes for the video build
- Beat: ayun level (tilt settle) → gelembung glide → tick chip biru menyala saat kata "selaras" diucapkan; satu punch-in ke vial saja.
- Risiko: rotasi CSS besar bikin gelembung terlihat "melompat" — animasikan posisi gelembung terpisah dari rotasi badan.

## References
- https://en.wikipedia.org/wiki/Spirit_level — gelembung di antara dua ring = dalam toleransi; beberapa vial untuk beberapa sumbu: satu objek kecil pembawa seluruh ide.
