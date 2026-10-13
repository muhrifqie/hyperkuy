# Batch 100 — build brief

Branch `gaya/batch-100` (worktree `C:\BOT\Hyperkuy-b100`). Goal: 100 new 9:16 designs for an Indonesian AI-education channel (series `how-ai-works`, `ai-in-numbers`, `ai-news`, `ai-tools`). Each design = one strong visual idea, readable on a phone, clearly different from every existing design (see "Worlds already taken" at the bottom) and from the other 99.

## Definition of done (one design)
1. `templates/<id>.html` — ONE key frame (cover) 1080×1920 following `docs/CONTRACT.md` **plus**: a visible **caption / voice-over slot**: an element with `data-slot="caption"` that shows `D.caption || D.sub` as a karaoke caption line (1–2 lines, 40–48 px, one word visibly "active", the active word = `D.hl` if it appears in the caption, else the first word). Inside the safe zone, not overlapping other text.
2. `spec/<id>.md` — max ~40 lines, use `spec/_TEMPLATE.md` exactly: metaphor · palette (hex) · fonts (Google Fonts) · grid/layout · 3 signature elements · 2-SECOND HOOK (what moves, why it stops the scroll, which hook type from the hook bank) · LOOP ENDING (how the last frame flows seamlessly back into the first) · caption position · reference URLs.
3. Renders cleanly with both samples:
   `node tools/hyperkuy.mjs render templates/<id>.html --data data/sample-tokens.json` and `--data data/sample-numbers.json` → `out/<id>__*.png`. Look at both PNGs yourself: no clipped or overlapping text, nothing tiny, object strong.
4. `node tools/hf-check.mjs templates/<id>.html` → `PASS` (real `hyperframes check`: layout, overflow, overlap, contrast). Fix every ✗. Decorative overlap may be marked `data-layout-allow-overlap`; low-contrast text is not allowed — if it is decoration, draw it as SVG paths, not text.
5. Cover: `ffmpeg -v error -y -i out/<id>__sample-tokens.png -vf scale=540:-2 -q:v 3 covers/<id>.jpg`.
6. Catalog entry (returned to the orchestrator, NOT written by builders — one registrar edits `catalog.json`).

## Rules
- Only create/overwrite files of YOUR design: `templates/<id>.html`, `spec/<id>.md`, `covers/<id>.jpg`, `out/<id>__*`. Never edit other templates, `catalog.json`, tools, docs, or any other repo.
- Deterministic: no `Math.random`, `Date.now`; hard-code irregular shapes. Fonts via Google Fonts `<link>`; no external images; inline SVG. If layout depends on web fonts, wait for `document.fonts.ready` before measuring.
- Prefer CSS/SVG (incl. CSS 3D transforms for depth). WebGL/Three.js only if the still actually renders in headless Chrome (check the PNG).
- Taste (`docs/HOUSE-RULES.md`): every frame has a real object, never text alone; green never the background/dominant colour; nothing childish, tacky or dated (no neon-glow overload, rainbow gradients, chrome/WordArt, cheap glitch, emoji spam, glowing brains/robots, generic sci-fi HUD); no brands/trademarks/logos; take PRINCIPLES from references, never copy assets.
- Motion ideas in the spec follow `docs/HOUSE-RULES.md` + `docs/MOTION-VOCAB.md`: liveliness from content, camera as punctuation; hook object visible in frame 0; loop ending flows into frame 0.
- Name: English, plain ASCII, 1–3 words, unique; id = kebab-case of the name.
- Axes vocabulary (catalog): background `light|dark|full-colour|pastel|dark-to-light|dark-and-light` · type `serif|grotesque|mono|condensed` · depth `2D|2.5D|3D` · visual `app-ui|poster|diagram|data|code|physical-object|abstract`.

## Worlds already taken (66 designs — do NOT reuse these worlds)

- **Dusk Mode** (`dusk-mode`, opus) — A dark AI chat app that brightens as a one-prompt result is built and edited on screen.
- **Lockscreen Story** (`lockscreen-story`, opus) — Starts on a phone lock screen full of relatable notifications, then turns into a step-by-step result.
- **Design Canvas** (`design-canvas`, opus) — The whole explainer lives inside a design tool: selections, cursors, dotted connectors.
- **Caution Tape Pop** (`caution-tape-pop`, opus) — Loud news-style poster: caution tape running top and bottom, giant tight headline, stickers.
- **Frosted Orbs** (`frosted-orbs`, opus) — Calm launch-film look: soft blurred colour orbs behind frosted glass cards.
- **Sticker Collage** (`sticker-collage`, opus) — Pastel design board mixing a selection-boxed headline with 3D icon stickers and price cards.
- **Prompt Classroom** (`prompt-classroom`, opus) — A friendly prompt lesson: character chips, a chat box being filled, before/after cards.
- **Repo Cards** (`repo-cards`, opus) — Dark GitHub-style repo cards with stars, licence and activity, ranked #1, #2, #3.
- **Electric Sunburst** (`electric-sunburst`, opus) — Electric-blue poster with tall condensed type and engraved sunburst lines.
- **Ember Docs** (`ember-docs`, opus) — Warm charcoal docs page: cream serif headline with an ember-orange italic, terminal boxes.
- **Midnight Chat** (`midnight-chat`, opus) — Pure-black chat transcript where each slide is a question bubble followed by its answer.
- **Biennale Yellow** (`biennale-yellow`, opus) — Exhibition catalogue on warm paper with a yellow haze and thin navy serif.
- **Blockframe** (`blockframe`, opus) — Sharp neo-brutalist cards: thick black borders, hard offset shadows, slight tilts.
- **Bold Poster** (`bold-poster`, opus) — Vintage sports-magazine poster: classical serif, tomato red, a ruled stats table.
- **Broadside** (`broadside`, opus) — Fire-orange broadside with massive flat type and black slabs.
- **Capsule** (`capsule`, opus) — High-contrast Bodoni with candy-coloured capsule pills.
- **Cobalt Grid** (`cobalt-grid`, opus) — Graph paper with electric cobalt riso printing and an indexed table.
- **Cartesian** (`cartesian`, opus) — Quiet museum catalogue: specimen cards, hairlines, compass geometry.
- **Code Editorial** (`code-editorial`, opus) — Editorial page in Garamond with a navy YAML code window and footnoted sources.
- **Terminal Noir** (`terminal-noir`, opus) — A terminal window where each item is a line of command output.
- **Marquee Select** (`marquee-select`, opus) — Dark headline panel with a design-tool selection box on the key word and stat chips.
- **Leaderboard** (`leaderboard`, opus) — A league standings table: position, name, value and a bar per row, plus a winner card.
- **IDE Nocturne** (`ide-nocturne`, opus) — A night-mode code editor: tabs, line numbers, minimap; items become an object literal.
- **Drafting Light** (`drafting-light`, opus) — Engineering drawing sheet on millimetre grid: title block, crop marks, spec card, design-tool selection with dotted connectors.
- **Drafting Dark** (`drafting-dark`, opus) — The dark twin of Drafting Light: deep blue-charcoal sheet, glassy spec card, terminal accents.
- **Split-Flap Board** (`split-flap`, fable) — A station split-flap departure board; news, numbers and status flip in line by line.
- **Transit Map** (`transit-map`, fable) — A Beck-style transit diagram: one AI concept = one line, each step = a station.
- **Nutrition Label** (`nutrition-label`, fable) — A 'Nutrition Facts' label reading out what a model, prompt or feature contains.
- **Instrument Panel** (`instrument-panel`, fable) — A synth/instrument faceplate where AI parameters (temperature, top-p, context) are knobs and LCDs.
- **Data Annotation** (`data-annotation`, fable) — Data-journalism chart: one clean graphic, one point that matters, one editorial note pointing at it.
- **Architect's Model** (`architect-model`, fable) — A white cardboard architect's study model on a grey site board; block height = magnitude.
- **Rice Parcel** (`rice-parcel`, fable) — A folded rice parcel as the context window: it only holds so much; each fold opened = one part of the context.
- **Card Catalog** (`card-catalog`, fable) — A library card catalogue as RAG/embeddings: cards stored near their neighbours.
- **Postage Stamps** (`postage-stamps`, fable) — A sheet of stamps: one stamp = one token with a face value; the sheet = the context window.
- **Chess Notation** (`chess-notation`, fable) — Chess diagram with move notation as chain-of-thought: thinking several moves ahead.
- **Piano Roll** (`piano-roll`, fable) — A player-piano roll: the next hole not yet visible = the next token.
- **Rock Strata** (`rock-strata`, fable) — Rock layers as the stages of building a model: thick pre-training at the bottom, thin fine-tuning on top.
- **Weather Chart** (`weather-chart`, fable) — A synoptic weather chart: AI output is a probability forecast, not certainty.
- **Bento Box** (`bento-box`, fable) — A bento box as structured output / JSON: each compartment = a field.
- **Nautical Night** (`nautical-night`, fable) — A night nautical chart: soundings = how confident the model is; shallows = hallucination risk.
- **Tree Rings** (`tree-rings`, fable) — Tree rings as history: one ring per year or model release; thick = boom year, thin = AI winter.
- **Dartboard** (`dartboard`, fable) — Accuracy vs precision vs hallucination: tight but off-centre = consistent but wrong.
- **Chromatography Strip** (`chromatography`, fable) — A chromatography strip separating one mixture (prompt, dataset, trend) into its components.
- **Fingerpost** (`fingerpost`, fable) — A signpost with arms pointing to options: routing a prompt to a model, tool or plan; distance = cost.
- **Woodcut Print** (`woodcut`, fable) — Carved wooden type as model weights fixed in training; each print pull = one inference.
- **Loom Weave** (`loom-weave`, fable) — A loom as attention: each token = a warp thread; each pass of the weft touches every thread.
- **Contact Sheet** (`contact-sheet`, opus) — A photographer's contact sheet: film strips, edge printing, red grease-pencil picks. Metaphor: the AI picks one candidate out of many.
- **Engraved Score** (`engraved-score`, opus) — Engraved sheet music with staves and lyrics. Metaphor: predicting the next note = predicting the next token.
- **Assembly Manual** (`assembly-manual`, opus) — A flat-pack assembly manual in black line art. Metaphor: how AI works, assembled part by part.
- **Live Spreadsheet** (`live-spreadsheet`, opus) — A spreadsheet with a formula bar, active cell and in-cell data bars. Metaphor: AI numbers and costs computed cell by cell.
- **Topo Trail** (`topo-trail`, opus) — A topographic hiking map whose orange trail is a true steepest descent. Metaphor: training = walking downhill to the lowest point.
- **Periodic Elements** (`periodic-elements`, opus) — A navy periodic table where every AI term is an element. Metaphor: build a vocabulary of AI 'elements'.
- **E-Reader Lookup** (`e-reader`, opus) — An e-ink reader page: long-press a word, a dictionary popover explains it. Metaphor: tap an AI term, get its meaning.
- **Sewing Pattern** (`sewing-pattern`, opus) — A tissue sewing pattern on a slate cutting mat. Metaphor: tokenisation = cutting a pattern into pieces.
- **Bubble Test** (`bubble-test`, opus) — A machine-graded multiple-choice answer sheet with 2B pencil bubbles. Metaphor: the AI chooses an answer by likelihood.
- **Lab Report** (`lab-report`, opus) — A clinical lab report with reference ranges and H/L flags. Metaphor: read AI numbers against a normal range. Ranges are illustrative.
- **Letterpress Desk** (`letterpress-desk`, astra) — Metal type blocks and a press compose the text a little at a time.
- **Ticket Raffle** (`ticket-raffle`, astra) — A clear raffle box of tickets; one ticket is drawn to continue the sentence.
- **Receipt Printer** (`receipt-printer`, astra) — A receipt printer printing the answer bit by bit, like the AI building a reply.
- **Next Stitch** (`next-stitch`, astra) — Fabric, thread and tailor's chalk: each new stitch continues the previous ones.
- **Accordion Book** (`accordion-book`, astra) — A folding accordion book with tabs that unfold the explanation page by page.
- **Tile Library** (`tile-library`, astra) — A ceramic tile sample library where each tile is a filed piece of knowledge.
- **Measuring Glass** (`measuring-glass`, astra) — Graduated glasses filled to different levels: how likely each next word is.
- **Marble Gates** (`marble-gates`, astra) — One brass marble, many gates: the path it takes is the answer being chosen.
- **Open Kitchen** (`open-kitchen`, astra) — An open kitchen with order tickets and covered plates: the reply is cooked step by step.
- **Baggage Belt** (`baggage-belt`, astra) — A baggage conveyor with diverters routing sentence pieces to the right place.

## Backlog ideas already proposed but not built (allowed only with a clearly different execution; prefer new worlds)

Tide table · climbing topo · field-guide plate · contour path · coffee cupping form · classified ads · sumo ranking sheet (banzuke) · blank form · direction road sign · watermark/terawang · tactics board · microscope slide · seismograph · X-ray film · gel electrophoresis · calibration chart · star chart · floor plan · blueprint · pin-feed paper · Swiss grid · standards manual · fold-out timetable · tear-off calendar · typed report card · playing cards · vinyl label · stage setlist · circuit schematic · orbit diagram · crossed-out price list · ticked postcard · lap-time sheet
