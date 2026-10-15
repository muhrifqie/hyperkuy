# Handling Marks (`handling-marks`)

**Metaphor:** sisi peti kardus korugasi dengan stensil aturan penanganan → guardrail: model AI "dikirim" lengkap dengan aturan (tolak ini, jangan bocorkan itu, sebut sumber) yang harus dihormati tiap aplikasi yang memegangnya.
**Series:** ai-tools | ai-news
**Axes:** full-colour · condensed · 3D · physical-object

## Look
- **Palette:** `#B98A57` kraft (latar penuh) · `#E8DCC4` kertas waybill/label · `#1E1B18` tinta stensil · `#C83A2B` piktogram aksen · `#6E5236` bayangan/metanya
- **Fonts (Google Fonts):** Saira Stencil One (judul & nilai, distensil di kardus) / Archivo Narrow (label, caption, meta)
- **Grid / layout:** full-bleed permukaan kardus (alur flute vertikal + rotasi -1.6°, sisi samping gelap di kanan, strapping baja x≈940). Waybill pocket y 288–420 (series, ep, sumber, tanggal). Judul stensil y ≈ 470–660. Blok aturan y ≈ 690–1560. Selotip caption y ≈ 1450–1620. 300px bawah bebas.
- **Signature elements:**
  1. Sakata waybill kertas krem — nama "MODEL AI", sumber & tanggal, dunia logistik yang nyata
  2. Piktogram stensil merah ala ISO 780 (payung, gelas pecah, arah atas, tumpuk-silang) per aturan
  3. Strapping baja vertikal + lipatan sisi kardus untuk kedalaman 3D tipis

## 2-second hook
- **Frame 0 shows:** peti utuh dengan satu stensil broken-glass merah besar sudah terlihat.
- **Motion (0–2 s):** mask crop ketat pada piktogram gelas pecah, terbuka (circle open) 0.6 dtk ke peti penuh; waybill "MODEL AI" terungkap (mask lift).
- **Why it stops the scroll:** tanda peringatan yang Familiar dikontekstualisasi ulang — kardus yang dikirim ternyata sebuah model AI.
- **Hook type (docs/bank-hook-ending.md):** #9 Detail misterius

## Loop ending
- **Last 1 s:** peti meluncur keluar ke kanan di atas rol.
- **Seam:** ending E arah gerak — peti yang sama masuk dari kiri ke posisi crop frame-0; komposisi & pencahayaan identik.

## Caption / voice-over
- **Slot:** `data-slot="caption"` pada selotip kertas krem x 96–816, y ≈ 1450–1620, 40–46 px; karaoke: kata aktif = blok merah `#C83A2B` dengan teks krem (knock-out), kata lain cokelat tua.

## Notes for the video build
- Stagger build per blok aturan (60–90 ms), piktogram di-`draw-in` sebelum teksnya; satu glint sweep di waybill sebagai satu-satunya emphasis.
- Kamera: hanya crop-mask pembuka; tanpa zoom. Risiko: flute texture jarring saat rotasi — bake sebagai pola tetap.

## References
- https://webstore.ansi.org/preview-pages/ISO/preview_ISO+780-2015.pdf — ISO 780: simbol penanganan tanpa kata, dipakai seperlunya, terbaca lintas bahasa.
