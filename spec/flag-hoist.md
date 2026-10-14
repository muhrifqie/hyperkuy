# Flag Hoist (`flag-hoist`)

**Metaphor:** a ship's signal hoist under a pale overcast sky, read off the International Code book clamped to the mast → one shared protocol: any ship can talk to any ship because all carry the same book, and AI tools now plug into many apps the same way (one agreed "signal book" instead of a custom cable per pair).
**Series:** ai-news, ai-tools
**Axes:** light · serif · 2.5D · physical-object

## Look
- **Palette:** `#C9D3DC`→`#E4E8EC` overcast sky · `#8E979C` haze grey (mast, bulwark) · `#13264A` navy ink (all type, rules, chips, rope) · `#F4F0E6` cream (code-book page, log slip) · `#D3332A` + `#F2C230` signal red/yellow, used only in the flags, the K plate, the hl row band and the caption tape
- **Fonts (Google Fonts):** Zilla Slab 700 (title, values; italic 500 deck) / IBM Plex Sans Condensed 600 (labels, caption) / IBM Plex Mono 600–500 (running head, column head, letter chips, log stamp, source)
- **Grid / layout:** the code-book page is one inverted-L sheet: page head x 90–990 from y 266 (running head y 300 over a double rule at y 342–350, then the title y 368–≤634, sentence case, fit 116→62 px, ≤ 266 px tall; optional deck = `sub` when a separate `caption` is given), then it narrows into the row column (mast +32 → x 990, text x ≤ 896) down behind the rail at y 1404. In the notch: masthead + code pennant at head bottom +38, the hoist from +116 to rail −26 (≈ y 740–1378). Fly length is capped (172–286 px, fly tip at x 76) so the column text stays ≥ 400 px wide for 3–5 items. Haze-grey bulwark below the rail holds the log slip (y 1430–≈1575) and the source (≤ y 1618); water y 1822+ sits under the UI.
- **Signature elements:**
  1. The hoist: one code flag per item (K, C, P, R, I, palette only) on one halyard with toggles; flat (u,v) patterns warped by a fixed wave with fold shading from its slope. The hl item's flag has just broken out: 8% longer fly, two navy airflow lines and the parted stop yarn at its hoist.
  2. The code book carries the type: running head "BUKU KODE · <series> · BAB <ep>  per <date>", the title as its page head, and the hl word on a flat K-flag plate (yellow hoist half with the word, navy fly half, toggled to a rope). Column rows: navy letter chip + label (shrinks to 30 px, then wraps to 2 lines) + value at one shared size + flat swatch; the hl row is a signal-yellow band.
  3. The signal log: a cream slip clipped to the haze-grey bulwark, a mono time stamp "09.15 |" and the caption, active word underlined with yellow hoist tape over a navy rope line.

## 2-second hook
- **Frame 0 shows:** the cover itself (page head with title, every row filled, every flag flying) except the hl flag, which is still a tight furled roll 24 px below its slot; its row has no yellow band and an empty value line, and the title's K plate shows only its yellow half.
- **Motion (0–2 s):** 0–0.6 s the halyard hauls the roll up into its slot (power2.out); 0.6 s it breaks out: the flag unrolls from the hoist (scaleX 0.12→1 from the hoist edge, power3.out 0.35 s) while the K plate's navy fly half slides out in sync; 0.9 s the yellow band wipes across its row (0.3 s) and the value locks in.
- **Why it stops the scroll:** in a frame that is otherwise complete, one bundle is still rolled up, and it cracks open into the brightest colour on screen. The eye goes to the gap and is paid at 0.6 s.
- **Hook type (docs/bank-hook-ending.md):** #9 Detail misterius (the furled flag is the mystery; the break-out reveals it).

## Loop ending
- **Last 1 s:** after the CTA (~85%) the hl flag furls back into a roll while it is eased 48 px down (power2.in 0.5 s); its band wipes off right→left and the K plate's fly half folds away. In the last 0.3 s the halyard starts hauling the roll back up.
- **Seam:** D (benda dibongkar balik) + E (arah gerak menyambung): the last frame equals frame 0 (roll 24 px below its slot, everything else unchanged), and the upward haul started before the cut continues into the 0–0.6 s haul of frame 0, so nothing stops at the cut. The block's rope squeak at the end = the one at 0 s.

## Caption / voice-over
- **Slot:** `data-slot="caption"` inside the log slip, x 90–896, y ≈1444–1545, IBM Plex Sans Condensed 600 46→40 px, max 2 lines (balanced; long entries set tighter, then the stamp moves onto the slip's top edge as a navy tab, and only then "…"). Karaoke: active word = navy on cream with a yellow hoist-tape underline, = `hl` when it occurs in the caption, else the first word. Source in mono 26 px under the slip.

## Notes for the video build
- Per beat: the item's flag breaks out on the word that names it, its row types on (label), the value counts and locks, the swatch stamps. Cloth ripples only while a flag hauls or breaks out, then settles (no idle wobble).
- Camera = punctuation: still by default; one punch-in on the hl flag + its row in the payoff scene, hold ≥ 1.5 s, no zoom straight back out.
- Risk: the warp is rebuilt in JS (pathUV per flag). Precompute 8–12 phase keyframes per flag or tween the phase on the paused timeline; keep clipPath/gradient ids unique.

## References
- https://en.wikipedia.org/wiki/International_maritime_signal_flags — plain geometric flags with fixed meanings, read against the sky, so ships of any language understand each other: a protocol made visible (and the code pennant that announces it).
- https://www.amnautical.com/blogs/the-mariners-blog/international-code-of-signals-flag-sound-light-signals-guide — one flag carries a whole message and groups are looked up in a book both sides own: meaning lives in the shared book, which is why the book carries the type here.
