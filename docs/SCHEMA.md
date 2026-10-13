# catalog.json schema

`catalog.json` is the single source of truth. `CATALOG.md` and every CLI command read from it.

## `series.<id>`
| Field | Meaning |
|---|---|
| `name` | display name |
| `about` | what episodes in this series explain |
| `frame` | the fixed series framing that stays the same every episode |
| `pool` | ids of designs suited to this series (used by `recommend`) |

## `styles[]`
| Field | Values | Meaning |
|---|---|---|
| `id` | kebab-case, unique, never changes | how tools and agents refer to the design |
| `name` | English, 1–3 words, unique | what people say ("use **Topo Trail**") |
| `author` | `opus` · `fable` · `astra` | Claude Opus · Claude Fable · ChatGPT Astra |
| `origin` | free text | finer provenance (owner video, preset, wave 2…) |
| `type` | `template` · `reference` · `concept` | data-driven template · real video frame (proven look, nothing to render) · static cover concept |
| `tier` | `liked` · `maybe` · `new` | owner rating; `new` = not yet rated |
| `axes.background` | `light` · `dark` · `full-colour` · `pastel` · `dark-to-light` · `dark-and-light` | |
| `axes.type` | `serif` · `grotesque` · `mono` · `condensed` | dominant typeface |
| `axes.depth` | `2D` · `2.5D` · `3D` | |
| `axes.visual` | `app-ui` · `poster` · `diagram` · `data` · `code` · `physical-object` · `abstract` | visual language |
| `series` | series ids | where it fits |
| `metaphor` | sentence | the real-world world + the AI idea it explains |
| `signature` | sentence | the content-driven move to animate in video |
| `cover` | `covers/<id>.jpg` | 540×960, sample topic |
| `template` | `templates/<id>.html` | `type: template` only |
| `frame` | path | `type: reference` only — the real frame used by `recommend` |
| `references` | project names | `type: reference` only — videos that used it (for rotation history) |
| `source` | `concepts/sources/<id>.html` | `type: concept` only, when a source exists |
| `aliases` | ids | old ids that still resolve (never reuse them for another design) |
| `note`, `format`, `palette`, `objects` | optional | extra context |

`recommend` rotation: it avoids the design used last, prefers options that differ on ≥ 2 axes from it, and picks **Safe** (liked reference), **Fresh** (liked template) and **Bold** (new template, most different). Pass `--history <schedule.md>` to read your upload order; the schedule's `## Queue` table lists project names in backticks, mapped through `references`.
