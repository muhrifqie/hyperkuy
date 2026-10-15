# Automaton Rows (`automaton-rows`)

**Metaphor:** Rule 30 pada strip kertas → emergence: aturan latih model mungil (prediksi token berikutnya, tiap baris dari baris di atasnya) namun hasil yang tumbuh terlihat kaya dan mengejutkan.
**Series:** how-ai-works
**Axes:** dark-to-light · mono · 2D · code

## Look
- **Palette:** `#121212` kartu aturan & sel aktif · `#F2ECDF` gading strip · `#2A2724` tepi/bingkai · `#D1462F` vermilion baris terbaru/aturan bernilai 1 · `#8F8A80` abu meta
- **Fonts (Google Fonts):** DM Mono (kicker, pin, meta) / Instrument Serif (judul, caption)
- **Grid / layout:** kicker y 240; kartu aturan gelap x 90–990, y 300–654 (judul auto-fit 84→64px + deretan 8 ikon neighbourhood); strip gading full-bleed y 660–1446 dengan lubang tractor-feed; evolusi Rule 30 63×48 sel (y 736–1408), baris terbaru vermilion + 3 sel induk digaris vermilion; pin callout item di baris tersebar kiri/kanan; caption y 1480; meta y 1596
- **Signature elements:**
  1. Kartu aturan gelap: 8 ikon neighbourhood → hasil, seluruh program dalam satu baris
  2. Strip kertas tractor-feed dengan segitiga Rule 30 ala kerang kerucut — grafik yang menyamar jadi cetakan
  3. Pin spesimen ala lembar pengamatan: label + nilai dijangkarkan ke baris tertentu

## 2-second hook
- **Frame 0 shows:** kartu aturan di atas, segitiga kacau raksasa sudah tercetak di bawah
- **Motion (0–2 s):** pada 0,3 s baris baru tercetak di bawah dan tiga sel induknya berkedip vermilion (grow from baseline per sel)
- **Why it stops the scroll:** "8 aturan" melawan pola raksasa yang tak tertebak — kontras skala sebab-akibat
- **Hook type (docs/bank-hook-ending.md):** #2 Angka mustahil

## Loop ending
- **Last 1 s:** strip terus menyumbu ke atas; bagian yang masuk kembali di detik akhir (Bank E)
- **Seam:** arah gerak menyambung — elemen keluar atas di akhir, masuk dari bawah di frame 0, komposisi kartu+segitiga kembali utuh

## Caption / voice-over
- **Slot:** `data-slot="caption"` x 90–970, y 1480–1590, 46px serif di bidang gelap; kata aktif di-knock-out blok vermilion

## Notes for the video build
- Beat 1 kartu + strip diam, beat 2 cetak baris + induk berkedip, beat 3 pin muncul satu per satu; kamera still, mungkin 1 punch-in ke sel induk
- Risiko: evolusi dihitung (Rule 30), jangan diganti hash — pola khasnya justru buktinya

## References
- https://en.wikipedia.org/wiki/Rule_30 — waktu mengalir ke bawah halaman, tiap baris bergantung pada tiga sel di atasnya; seluruh program muat dalam delapan ikon
- https://www.wolframscience.com/nks/p177/ — ikon aturan di atas evolusinya: aturan dan hasil dalam satu komposisi
