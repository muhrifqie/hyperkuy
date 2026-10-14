# Test Screening (`test-screening`)

**Metaphor:** a preview audience scoring a film on comment cards that the editor tallies and re-cuts for → sycophancy: models are tuned on human ratings, people tick the answer that pleases them, so the AI learns to agree.
**Series:** how-ai-works
**Axes:** dark-and-light · grotesque · 2.5D · data

## Look
- **Palette:** `#09080B` auditorium + masking (lit picture `#2F2834`) · `#FFFDF8` card stock (title-card cream `#F4ECDC`) · `#D8C5D6` dusty plum velvet (armrest `#3B2B40`) · `#C9452F` red pencil (tallies, loop; `#E2533B` on the screen) · `#3F63B6` blue card print + golf pencil
- **Fonts (Google Fonts):** Manrope 800/700/600 (title card, labels, values, source) / Kalam 400/700 (the viewer's pencil comment = caption) / Noto Sans Mono 600/500 (card print, meta, brass plates)
- **Grid / layout:** POV from seat F-12. y 0–730 dark auditorium: curved lit screen x 54–1026, y 210–656 between side curtains, projector beam above; D.title centred on it as the film's title card (cream, 110→72 px, zone y 290–584, max 3 lines). The row-E seat backs cut the screen's lower edge at y ~592. y 730+ plum velvet seat lit by the screen; armrest x 904–1080 with a popcorn cup (y ~780–900) and the brass oval "KURSI F-12" (y 1518–1610). Card stack x 73–892, y ~740–1615: back strips 92–132 px, front card ~500 px at the bottom.
- **Signature elements:**
  1. The projected title card: D.title in black masking with the editor's grease-pencil tally under D.hl (descenders cut through it, like skip-ink).
  2. Comment-card stack: back strips = red editor's tally (card n = n strokes, closed in fives) + label + value; the front card = printed header (KARTU PENONTON · PEMUTARAN UJI <ep> / series · date), value hidden under masking tape with a pencilled "?", the unticked row Buruk · Biasa · Bagus · Sangat bagus, ruled KOMENTAR lines, source on the bottom margin.
  3. Cinema props: row-E seat backs (headrest curve, fold seam, brass plates E-11…E-13), plum armrest with a striped popcorn cup, brass seat plate, blue golf pencil hovering over "Buruk".

## 2-second hook
- **Frame 0 shows:** this still: the title card on the screen, the front card's rating row empty, its value under tape with "?", the pencil tip poised just off the "Buruk" box (the box reads empty). All text comes from D (title, items, caption); no fixed copy.
- **Motion (0–2 s):** the pencil hesitates over Buruk (0–0.6 s, a small drift), then swerves right along the row and ticks "Sangat bagus" (0.25 s draw-in, ease-out, no bounce); on the tick the tally under D.hl gains one stroke. The tape stays on.
- **Why it stops the scroll:** a hand about to give the honest low score switches to the flattering one, and the taped value asks the viewer to guess before it is shown.
- **Hook type (docs/bank-hook-ending.md):** #5 Tebak dulu: the tape is peeled at ~60% of the runtime to reveal the front card's value (paid off before 70%).

## Loop ending
- **Last 1 s:** the cards are swept into a pile, a fresh front card with a new tape strip slides onto the top and the pencil returns to hover over "Buruk"; the projector restarts the reel, so the title card comes back with its tally at the frame-0 count.
- **Seam:** ending B (same composition returns): the last frame equals frame 0 (row unticked, tape on, pencil over Buruk). The pencil's swerve in the hook continues the return move of the ending. No fade.

## Caption / voice-over
- **Slot:** `data-slot="caption"` written on the front card's KOMENTAR lines, x 140–850, y ~1350–1550 (moves with the stack), Kalam 46→44 px on 64 px ruled lines, max 2 lines (karaoke window with … when longer). Spoken words ink `#1F2233`, upcoming graphite `#575569`, active word bold inside a red-pencil loop `#C9452F`.

## Notes for the video build
- One beat per item: each card is dealt onto the stack, its tally is struck on the word that names it, its value counts and locks; the front card is the last item. The voice-over is pencilled onto the comment lines word by word.
- Camera stays still. At most one emphasis move per scene: a slow tilt from the card up to the screen when the title is spoken, or a punch-in on the tape peel. Hold ≥1.5 s after it.
- Risks: keep the pencil off the caption (it parks at the left margin); illustrative numbers need "ilustrasi" in D.source.

## References
- https://en.wikipedia.org/wiki/Test_screening — preview audiences fill out questionnaires and the scores drive re-edits: the card + tally logic.
- https://www.anthropic.com/research/towards-understanding-sycophancy-in-language-models — human preference ratings reward agreeable answers: the claim the metaphor teaches.
