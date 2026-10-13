# Template contract

One template = one design = **one 1080×1920 hook still** that any topic can fill. Keeping every template to this contract is what lets the CLI render, compare and recommend them interchangeably.

## File
- `templates/<id>.html` — `<id>` matches `catalog.json`.
- Self-contained HTML: inline CSS and JS. Fonts may use a Google Fonts `<link>` (fine for stills; self-host them for video renders). Icons are inline SVG. **No external images.**
- `<html>`/`<body>` exactly **1080×1920**, `margin: 0`, `overflow: hidden`, background fills the frame.

## Data
The renderer injects `<script>window.D = {...}</script>` in place of the marker `<!--DATA-->`. Put the marker in `<head>`, **before** the template's own script. Render everything from `window.D`, never from hard-coded copy, and keep a built-in sample for when `window.D` is missing (so the file opens on its own in a browser).

| Field | Meaning | Must appear |
|---|---|---|
| `series`, `ep` | series name, episode number | yes, small (label/kicker) |
| `series_id` | series id (`how-ai-works`…) | optional, e.g. for file-name style labels |
| `kicker` | top label | may replace series + ep |
| `title` | hook line, 20–60 characters | **yes, largest element** |
| `hl` | part of `title` to highlight, in the design's own way | yes, when present in `title` |
| `sub` | one supporting sentence | yes |
| `items` | 3–5 `{label, value}` | **yes — drawn as the design's object** (cards, rows, frames, waypoints, notes…). Never text alone on an empty background. |
| `source`, `date` | source + date | yes, small (meta) |

Must hold up with titles of 20–60 characters and 3–5 items — test with both files in `data/`.

## Layout & legibility
- **Safe zone** (TikTok/Reels UI): key information inside x 90–990, y 300–1620. Keep clear of x > 900 between y 900–1500 (action buttons) and the bottom 300 px.
- The main object fills the middle band, y 470–1500 (about 60% of the height).
- **Text sizes:** body ≥ 40 px · labels/chips ≥ 30 px · meta (date, source, series) ≥ 26 px.
- **Contrast** ≥ 4.5:1 (titles ≥ 72 px may use 3:1).
- Nothing clipped at the edges unless it is deliberate decoration.
- Adapt to vertical: re-compose for 9:16 rather than shrinking a wide layout.

## Determinism
No `Math.random()`, `Date.now()` or anything time-dependent. Irregular "hand-drawn" shapes are hard-coded paths. If layout depends on web fonts, wait for `document.fonts.ready` before measuring.

## Verify
```bash
node tools/hyperkuy.mjs render <id> --data data/sample-tokens.json
node tools/hyperkuy.mjs render <id> --data data/sample-numbers.json
```
Look at both PNGs in `out/` with a critical eye before calling it done.
