# AGENTS.md — Hyperkuy

You are working in a library of 9:16 design templates for HyperFrames videos. `catalog.json` is the single source of truth.

## When a user names a design ("use Topo Trail", "pakai gaya Bubble Test")
1. Resolve it: `node tools/hyperkuy.mjs find "<name>"` (accepts name, id, legacy id or a unique prefix; ambiguous or unknown names list suggestions — ask the user if still unclear).
2. Check its `type`:
   - `template` → write the user's topic as JSON (shape: `data/sample-tokens.json`, rules: `docs/CONTRACT.md`) and run `node tools/hyperkuy.mjs render "<name>" --data <file>`. Look at the PNG in `out/` before showing it.
   - `reference` → it is a proven look from a published video, not a renderable template; use its cover/frame as the visual reference and its `metaphor`/`signature` as the brief.
   - `concept` → static cover only; rebuild it to `docs/CONTRACT.md` before using it with new topics (see CONTRIBUTING.md).
3. For the full video, animate with the design's `signature` and follow `docs/HOUSE-RULES.md` (content-driven motion, camera as punctuation, hook in frame 0, loop ending).

## When the user has no design in mind
`node tools/hyperkuy.mjs recommend --data <topic.json> --series <series-id>` → Safe / Fresh / Bold options + a comparison sheet in `out/`. Show the sheet; let the user choose.

## Adding or changing designs
Follow CONTRIBUTING.md exactly: a new world (no look-alikes), unique English name, contract-compliant template, both sample renders inspected, catalog entry, then `check`, `selftest`, `gallery`. Never reuse or change an existing id; renames go into `aliases`. Ratings (`tier`) are the owner's call.

## Don't
- Don't hand-edit `CATALOG.md` (generated).
- Don't add external images, randomness, or brand names to templates.
- Don't present illustrative numbers as facts — label them.
