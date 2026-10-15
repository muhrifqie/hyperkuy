# Quiz Podium (`quiz-podium`)

**Metaphor:** Set kuis TV 1950-an → kontaminasi benchmark: skor 100 bisa berarti hafalan, karena soal+jawaban bocor ke data latih.
**Series:** ai-news | how-ai-works
**Axes:** dark · grotesque · 3D · physical-object

## Look
- **Palette:** `#101318` panggung gelap · `#E9E3D6` ivory skor/teks · `#D9A441` emas sorot/highlight · `#C2392E` merah flag "soal bocor?" · `#3F6DB5` biru chip tanda tanya
- **Fonts (Google Fonts):** Familjen Grotesk (judul/skor-label) / IBM Plex Mono (angka, kicker, meta)
- **Grid / layout:** kicker y 288–318; judul y 338–592 (kiri, auto-fit 96→64px); papan skor x 90–846, y 614–1440; kartu jawaban panggung mengintip dari kanan x 864–1080, y 614–880 (rotasi −5°); caption y 1466; meta y 1586
- **Signature elements:**
  1. Baris papan skor flip-clock — nilai skor dalam kartu flip gelap, satu baris per item
  2. Flag merah "soal bocor?" pada skor tertinggi + kartu jawaban ("KARTU JAWABAN · B") di sayap kanan
  3. Kerucut spotlight SVG dari atas + lantai panggung gelap di y > 1508

## 2-second hook
- **Frame 0 shows:** papan skor sudah terpasang, satu baris menyala merah, kartu jawaban mengintip dari sayap
- **Motion (0–2 s):** baris papan flip masuk satu per satu (flip-clock, 90 ms stagger), flag "soal bocor?" stamp di skor tertinggi, tepi spotlight melebar sekali ke arah kartu (glint sweep)
- **Why it stops the scroll:** skor sempurna dan kartu jawaban di sayap saling bertentangan — kontaminasi terlihat sebelum dijelaskan
- **Hook type (docs/bank-hook-ending.md):** #9 Detail misterius

## Loop ending
- **Last 1 s:** spotlight menyempit kembali ke podium; papan duduk di 100 seperti semula (Bank C)
- **Seam:** pertanyaan frame 0 terulang dengan komposisi identik — penonton sekarang tahu soal kartunya

## Caption / voice-over
- **Slot:** `data-slot="caption"` x 90–910, y 1466–1580, 44px; kata aktif di-knock-out blok emas `#D9A441` teks gelap

## Notes for the video build
- Beat 1 flip baris, beat 2 flag stamp, beat 3 reveal kartu; kamera: 1 punch-in ke flag saja
- Risiko: flag hanya bermakna bila kartu jawaban sempat terlihat sebelum 70% durasi

## References
- https://en.wikipedia.org/wiki/1950s_quiz_show_scandals — peserta diberi jawaban di muka sementara acaranya tampil sebagai kontes adil
