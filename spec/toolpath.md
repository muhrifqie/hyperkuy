# Toolpath (`toolpath`)

**Metaphor:** standing at the front of a CNC mill. A G-code listing is taped to the window, and the back-plot of the next line already runs off the block and into the steel vise jaw → an AI coding agent writes the program and the machine follows it literally, so one wrong line becomes a real crash. That is why you back-plot or sandbox AI-written code before pressing CYCLE START.
**Series:** ai-tools
**Axes:** dark-and-light · condensed · 3D · code

## Look
- **Palette:** `#15171A` ink, nameplate field, display · `#C9CDD2` aluminium + enclosure paint · `#EEE7D6` listing paper, display text · `#3B7DD8` leaders + dashed back-plot · `#F08A24` executing cut, pen loop, hl. One signal red `#D2382B` is used only for the mistake (pen "?", collision star, E-stop).
- **Fonts (Google Fonts):** Barlow Condensed 700/600 (nameplate title, kicker, item labels, button legends) / JetBrains Mono 500/700 (G-code, values, display caption, source)
- **Grid / layout:** The frame is the machine front, in light-grey enclosure paint. y 0–236 is the header panel, with louvres on the left and a stack light on the right (green = running). The nameplate spans x 60–1020 from y 266. Its kicker row sits at y 302, and the centred title fills x 90–990 at 124→76 px, up to 246 px tall (plate bottom ≈ 624–648). The window runs full width, x 0–1080, from the plate bottom + 22 down to y 1402, with a 24 px frame band of screws and a 10 px gasket. Behind the glass, the listing sits at x 54–560 (rotated −1.3°) and the machine at x ≈ 600–990 (block top ≈ y 900–1180). The control display spans x 60–1020, y 1418–1610. The pendant (CYCLE START, FEED HOLD, E-stop) fills y 1626–1920.
- **Signature elements:**
  1. The machine front is the frame. The title sits on a riveted brushed-aluminium nameplate with a black-anodised field: the letters are engraved through to bright metal and the hl is paint-filled orange. The field is black because orange on bare aluminium is about 1.6:1. Around it: the full-width window with gasket and screws, the stack light, the control display and the pendant buttons.
  2. Behind the glass is a real-perspective aluminium block on parallels in a vise on a pallet, with the jaws at the front and back. Finished lines are engraved grooves: a U made of a back run and a right-side arc. The executing line is a fresh orange cut with the end mill standing in it. The next line's dashed blue back-plot runs off the block edge and turns red where it goes through the steel front jaw, marked by a collision star.
  3. A tractor-feed G-code listing is taped to the glass, one block per item: `N10 G01 X.. Y..` (`G02 … R..` for arcs) above the label and value. An orange pen loop circles the executing line, a red-pen "?" follows the wrong line (`G00 Y-48 Z-24`), and `M30 (source)` closes the listing. Marker leaders on the glass (8 px dark underlay, drawn in front of the spindle) link each line to its move: blue = done, orange = executing (points at the tool), red = the crash. No two targets sit within 42 px of each other or on the orange cut.

## 2-second hook
- **Frame 0 shows:** the cover. The tool is in the orange cut, the wrong next line is already back-plotted into the vise jaw with a red star, there is a red "?" on the listing, and the stack light is green.
- **Motion (0–2 s):** 0–0.3 s hold. At 0.3–0.6 s the tool finishes the cut and follows the wrong line at rapid speed (linear, no easing, like G00) along the dashed path into the front jaw. At contact (0.6 s): a short spark burst (6–8 white-orange streaks, 0.15 s), the end-mill tip snaps off and flies away on a spinning arc, the spindle rings stop and the stack light flips green → red. From 0.8 s the display line reads "Satu baris salah, mesinnya nurut." (5 words).
- **Why it stops the scroll:** a machine driving into its own clamp reads as a mistake instantly, with no G-code knowledge needed, and the thumbnail already shows where it will hit.
- **Hook type (docs/bank-hook-ending.md):** #1 AI salah di depan mata

## Loop ending
- **Last 1.4 s (automatic pallet change):** at 0–0.2 s the tool rapids up (`G00 Z50`). At 0.2–0.7 s the pallet with the gouged block slides out to the right while a fresh pallet and block slide in from the left. At 0.7–1.2 s the first grooves draw in on fast-forward (stroke-dashoffset), the marker loop drops down the listing to the executing line and the stack light returns to green. At 1.2–1.4 s the tool comes down into the orange cut.
- **Seam:** ending E (out to the right, in from the left) lands on B: the last frame is exactly frame 0, with the wrong line still waiting in the listing.

## Caption / voice-over
- **Slot:** `data-slot="caption"` inside the control display at x 90–900, y ≈ 1477–1590, in JetBrains Mono 500 at 42→40 px, max 2 lines. A longer line is windowed around the active word with ellipses. Karaoke: the active word (or the whole hl phrase) is ONE reverse-video block (dark on `#E9E4D6`), like the control's current-block cursor. The label above reads `BLOCK N30` (26 px), the marked listing line.

## Notes for the video build
- One beat = one line. The pen loop slides to the line (0.3 s), its leader draws in, and the tool travels the segment while the groove draws in behind it and chips spit. The display's BLOCK number and caption advance in step. After the hook, a tool change (M06, 0.4 s) swaps in a new cutter.
- The camera is still by default. Use at most 1 emphasis move per scene: a punch-in on the jaw for the crash (hook), or later on a listing line. Hold ≥ 1.5 s afterwards.
- Risks: keep orange on one line at a time. Keep the crash star, active cut and leader targets at x < 900 (the template does this). Leaders stay on the glass layer, in front of the machine.

## References
- https://www.machinistguides.com/g01-code/ — each G-code line is one literal, modal motion command you can trace onto the part.
- https://ncviewer.com/ — back-plot the toolpath before cutting: dashed preview vs. cut, and collisions are flagged before they happen.
- https://en.wikipedia.org/wiki/Continuous_stationery — the tractor-feed printout (sprocket holes, perforation) as the physical form of a program listing.
- https://en.wikipedia.org/wiki/Stack_light — the tower light as machine status at a glance (green running, red alarm).
