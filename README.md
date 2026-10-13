# Hyperkuy

**A library of 66 vertical (9:16) design templates for short educational videos, built for [HyperFrames](https://github.com/heygen-com/hyperframes) (HTML → MP4).** Pick a design by its name, give it your topic, get a ready hook frame — then build the full video in the same look.

Made by Waroengku for its AI-education channel, using three AI design partners: **Claude Opus**, **Claude Fable** and **ChatGPT Astra**. Free to use under the [MIT licence](LICENSE).

➡️ **Browse every design with its cover: [CATALOG.md](CATALOG.md)**

## Use a design by name

```bash
# 1. find it (name, id, old id or a unique prefix all work)
node tools/hyperkuy.mjs find "Topo Trail"

# 2. render it with your own topic → out/topo-trail__my-topic.png
node tools/hyperkuy.mjs render "Topo Trail" --data my-topic.json

# 3. not sure which one? get 3 options (Safe / Fresh / Bold) for your series
node tools/hyperkuy.mjs recommend --data my-topic.json --series how-ai-works
```

Working with an AI coding agent? Just say: *"Use the Hyperkuy design **Topo Trail** for this topic"* — the agent reads [AGENTS.md](AGENTS.md) and does the rest.

Your topic file follows [`data/sample-tokens.json`](data/sample-tokens.json):

```json
{
  "series_id": "how-ai-works",
  "series": "How AI works", "ep": "#01",
  "title": "AI doesn't read words. It reads tokens.",
  "hl": "tokens",
  "sub": "That's why it sometimes miscounts the letters in \"strawberry\".",
  "items": [ { "label": "str", "value": "1 token" }, { "label": "aw", "value": "1 token" }, { "label": "berry", "value": "1 token" } ],
  "source": "GPT-4 tokenizer (cl100k_base) — other models split differently",
  "date": "as of 14 Oct 2026"
}
```

`title` is the big hook line, `hl` is the word to highlight, and `items` (3–5) become the design's on-screen object — cards, rows, film frames, map waypoints, depending on the design. Full rules: [docs/CONTRACT.md](docs/CONTRACT.md).

**Requirements:** Node.js 18+ and Chrome, Edge or Chromium (set `CHROME_PATH` if it is not in the usual place). Fonts load from Google Fonts, so rendering needs internet.

## What's inside

| | Count | What it is |
|---|---|---|
| **Templates** | 45 | Data-driven HTML hook frames (`templates/<id>.html`). Render with any topic. |
| **Video references** | 11 | Looks proven in published videos. The cover is a real frame; no template to render. |
| **Concepts** | 10 | Static cover concepts (ChatGPT Astra). Rebuild one to the contract to make it a template. |

| Author | Designs |
|---|---|
| Claude Opus | 35 |
| Claude Fable | 21 |
| ChatGPT Astra | 10 |

Every design has a unique English **name** and kebab-case **id**, a short **idea** (the real-world world it borrows and the AI concept it explains), a **signature move** for animating it, four **look axes** (background · type · depth · visual), the **series** it suits, and an owner **rating** (`liked` / `maybe` / `new`).

### Series
| id | Name | For |
|---|---|---|
| `how-ai-works` | How AI Works | tokens, attention, embeddings, temperature, context, hallucination |
| `ai-in-numbers` | AI in Numbers | one surprising number with an everyday comparison |
| `ai-news` | AI News This Week | releases, features, regulation |
| `ai-tools` | AI Tools & One Prompt | tool reviews, tutorials, one-prompt demos |

## Repository layout

```
catalog.json          single source of truth for every design (schema: docs/SCHEMA.md)
CATALOG.md            generated gallery with covers — do not edit by hand
templates/<id>.html   45 data-driven templates
covers/<id>.jpg       one cover per design (540×960), same sample topic for fair comparison
concepts/             static Astra concept sources + their fonts (OFL)
data/                 sample topic files
tools/hyperkuy.mjs    CLI: list · find · render · recommend · check · gallery · selftest
docs/                 CONTRACT (template rules) · SCHEMA (catalog fields) · HOUSE-RULES (taste, motion, hooks)
```

## Add or update a design
See [CONTRIBUTING.md](CONTRIBUTING.md). In short: pick a **new world** (check the catalog for look-alikes), give it a unique English name, build `templates/<id>.html` to the contract, render it with both sample files, add it to `catalog.json`, then run `node tools/hyperkuy.mjs check` and `node tools/hyperkuy.mjs gallery`.

## Notes
- Templates render a **still** (the hook frame). Each design's `signature` field describes how to animate it in the full video; motion follows [docs/HOUSE-RULES.md](docs/HOUSE-RULES.md) (content-driven motion, camera used sparingly).
- Built-in labels inside some templates are Indonesian (the channel's language); the data you pass can be any language.
- Eight templates adapt HyperFrames' official frame presets (Apache-2.0) to 9:16 — see [NOTICE](NOTICE).
