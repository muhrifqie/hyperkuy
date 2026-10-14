# Incoming Call (`incoming-call`)

**Metaphor:** a call at 02.14 that the phone screens for you, from a familiar caller whose silhouette and voice are half rebuilt from identical blocks → AI voice cloning: a few seconds of public audio can fake a voice you trust; the defence is to hang up and call back a number you already know.
**Series:** ai-news (recommend only for voice / deepfake / scam topics)
**Axes:** dark · serif · 2D · app-ui

## Look
- **Palette:** `#0C0E14` night screen · `#F2EEE6` cream caller ID / paper (disc `#EDE6DA`) · `#E2483D` coral: paper caller, decline, live dot · `#3C7CF0` blue: clone blocks, hl (text tint `#6E9BF5`), answer · `#9F9A92` muted meta
- **Fonts (Google Fonts):** DM Serif Display (title as caller ID, item values) / Inter Tight 500–700 (screening pill, kicker, labels, transcript, buttons)
- **Grid / layout:** call-screen column. Screening pill "02.14 · menyaring panggilan…" y 192–256 (call chrome, no status bar / home bar) · kicker y 300 · title y 346–≤622 (74–112 px, ≤ 3 lines, centred on x 540) · source · date under it where a phone shows the number. **Lower band lives in x 150–900 on axis x 525** (clear of the action rail): split portrait 220–380 px + sound arcs · voice waveform (label above, value below; segment widths follow the words, silence gaps, dividers only for n ≤ 4; labels ≤ 3 lines, one value size for the whole row, ≤ 1 wrap) · transcript box x 150–900 ending y 1446 · Tolak / Jawab x 285 / 765, y 1474–1619. Bottom 300 px empty.
- **Signature elements:**
  1. Split paper-cut contact silhouette — a neutral default-avatar bust (no face, no identity): left half coral cut paper with drop-shadow layers, right half the same silhouette sampled into identical blue squares: the clone. Seam = the disc's vertical centre.
  2. Screened voice waveform — every segment is organic cream bars (a real voice); only the segment whose label or value contains `hl` is snapped into blue blocks (none when nothing matches): the cloned part of the call.
  3. Synthetic-block underline — `hl` in blue upright serif over a row of identical squares (the clone's square); the transcript's active word gets the same block underline.

## 2-second hook
- **Frame 0 shows:** exactly the still/cover: screening pill, caller-ID title, split portrait with the seam at the disc centre (x 525), waveform as the data sets it, transcript box, buttons.
- **Motion (0–2 s):** 0–0.8 s the sound arcs pulse outward twice (ring rhythm, ease-out); 0.8–1.6 s the seam slides left ~70 px (x 525 → ~455) and the paper strip it crosses snaps into blue blocks column by column (40 ms stagger, power2.out, no bounce); 0.6–2 s the transcript types "Ini bukan suara ibumu." with the block-underlined active word.
- **Why it stops the scroll:** it looks like the viewer's own phone screening a 2 a.m. call, and the familiar silhouette visibly turns into blocks.
- **Hook type (docs/bank-hook-ending.md):** #10 Berita yang langsung berdampak (voice-clone topics); on other topics it is #8 Notifikasi relatable, so never schedule it right after Lockscreen Story.

## Loop ending
- **Last 1 s:** after the CTA at ~85% ("tutup, telepon balik nomor yang kamu simpan"), the seam slides back from ~x 455 to the disc centre (the strip un-snaps to paper), the transcript returns to its opening line and the arcs start their first pulse: the last frame equals the still = frame 0.
- **Seam:** ending B (frame returns exactly) + C, the voice-over asks the hook again ("…kalau dia nelpon lagi?"); the same ring SFX sits on the cut (J). No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` = live-transcript box, x 150–900, bottom y 1446 (top ~1280–1300), 40–46 px Inter Tight, max 2 balanced lines (longer text windows around the active word with "…"); active word = white bold with a blue block underline; spoken words cream, upcoming `#A9A49B`.

## Notes for the video build
- Beats: segments draw left→right with the voice; the segment that names the clone (`hl`) snaps to blocks on that spoken word, not as a positional ramp. Advice beat: items = Tutup · Telepon balik · Kode keluarga, all organic (real voice). Camera still; one punch-in on the seam in the reveal scene, hold ≥ 1.5 s.
- Risks: caller stays a neutral paper silhouette, never a real person's photo or voice; cloned audio is labelled as an illustration. Mock system call UI is fine organically but not for paid boosts (ad policies reject fake system UI). Labels over 16 chars clamp to 3 lines with "…".

## References
- https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes — the defence: don't trust the voice, call back a number you know.
- https://www.apple.com/newsroom/2023/06/ios-17-makes-iphone-more-personal-and-intuitive/ — Live Voicemail (a live transcript while the call rings) and the contact poster (caller identity as a full-screen display name over a portrait).
