# Contributing a design

A new design earns its place by being **a different world**, not a recolour. Follow these steps in order.

## 1. Pick a world that is not taken
- Read [CATALOG.md](CATALOG.md) and search `catalog.json` for your world's keywords (e.g. `grep -i "map\|chart" catalog.json`).
- If an existing design already uses that world (two sewing patterns, two weather charts…), choose another one. Near-misses are listed in the catalog notes; don't add to them.
- Tie the world to **one AI concept** it explains (e.g. *contour map → training walks downhill to the lowest point*). That sentence becomes the `metaphor`.

## 2. Name it
- **English, plain ASCII, 1–3 words**, evocative of the world: `Topo Trail`, `Bubble Test`, `Split-Flap Board`.
- **Unique**: no existing name, id or alias may match (the checker enforces this), and avoid re-using a key word already common in the catalog (*Sheet, Chart, Map, Table, Board, Grid, Night, Dark*…).
- **No brands or trademarks** (no product, app or company names).
- `id` = kebab-case of the name (`topo-trail`). Variants share a stem and add a suffix (`drafting-light` / `drafting-dark`).
- Ids never change once published. If you rename, keep the old id in `aliases`.

## 3. Build the template
- Create `templates/<id>.html` following [docs/CONTRACT.md](docs/CONTRACT.md): the `<!--DATA-->` marker, render from `window.D` with a built-in fallback, 1080×1920, safe zones, minimum text sizes, `items` drawn as the world's own object.
- Follow [docs/HOUSE-RULES.md](docs/HOUSE-RULES.md): every frame has an object, nothing tacky, readable on a phone.
- Deterministic only: no `Math.random()` or `Date.now()`; hard-code any irregular shapes.

## 4. Render and look
```bash
node tools/hyperkuy.mjs render <id> --data data/sample-tokens.json
node tools/hyperkuy.mjs render <id> --data data/sample-numbers.json
```
Open both PNGs in `out/` and fix what you see: clipped text, empty bands, text below the minimum sizes, a weak object, anything that looks like a template rather than a design. Also try a long title (60 characters) and 5 items.

## 5. Register it
Add an entry to `catalog.json` (fields in [docs/SCHEMA.md](docs/SCHEMA.md)): `type: "template"`, `tier: "new"`, your `author`, the four `axes`, `series`, `metaphor`, `signature`, and add the id to each matching `series.<id>.pool`. Save the cover as `covers/<id>.jpg` (540×960, rendered from `data/sample-tokens.json` so every cover shows the same topic):
```bash
ffmpeg -i out/<id>__sample-tokens.png -vf scale=540:-2 -q:v 3 covers/<id>.jpg
```

## 6. Check and regenerate
```bash
node tools/hyperkuy.mjs check      # must print OK
node tools/hyperkuy.mjs selftest   # must print selftest OK
node tools/hyperkuy.mjs gallery    # rewrites CATALOG.md
```

## 7. Commit
One design per commit: `feat(design): add <Name> (<id>)`. Ratings (`tier`) are changed only by the channel owner.

## Turning a concept into a template
Concepts (`type: "concept"`) are static covers with baked-in text. To make one usable, rebuild it as `templates/<id>.html` to the contract, switch its `type` to `template`, add `axes`, render, and update the cover. Keep the id.
