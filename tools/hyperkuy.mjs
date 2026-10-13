#!/usr/bin/env node
// Hyperkuy CLI — find, render, recommend and check design templates by NAME.
//   node tools/hyperkuy.mjs list [--author opus|fable|astra] [--tier liked|maybe|new] [--series <id>]
//   node tools/hyperkuy.mjs find "<name or id>"
//   node tools/hyperkuy.mjs render "<name>"... | all [--data data/sample-tokens.json]
//   node tools/hyperkuy.mjs recommend --data <topic.json> [--series <id>] [--history <JADWAL-UPLOAD.md>]
//   node tools/hyperkuy.mjs check        (integrity: unique ids/names/aliases, files exist, contract marker)
//   node tools/hyperkuy.mjs gallery      (regenerates CATALOG.md from catalog.json)
//   node tools/hyperkuy.mjs selftest
import { readFileSync, writeFileSync, mkdirSync, existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, basename } from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolve(fileURLToPath(new URL("..", import.meta.url)));
const OUT = join(ROOT, "out");
const CAT = JSON.parse(readFileSync(join(ROOT, "catalog.json"), "utf8"));
const AXES = ["background", "type", "depth", "visual"];
const CHROME = [process.env.CHROME_PATH, "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"].filter(Boolean).find(existsSync);

const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "");
const diff = (a, b) => (a.axes && b.axes ? AXES.filter((k) => a.axes[k] !== b.axes[k]).length : 4);
const hash = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

// Resolve a design by id, name, alias, or an unambiguous prefix of any of them.
export function find(q) {
  const n = norm(q), all = CAT.styles;
  const keys = (s) => [s.id, s.name, ...(s.aliases || [])].map(norm);
  const exact = all.filter((s) => keys(s).includes(n));
  if (exact.length === 1) return exact[0];
  const pre = all.filter((s) => keys(s).some((k) => k.startsWith(n)));
  if (pre.length === 1) return pre[0];
  const hint = (pre.length ? pre : all.filter((s) => keys(s).some((k) => k.includes(n)))).map((s) => `${s.name} (${s.id})`).slice(0, 8);
  throw new Error(`"${q}" ${pre.length > 1 ? "is ambiguous" : "not found"}${hint.length ? ` — did you mean: ${hint.join(", ")}` : ""}`);
}

function shot(html, png, w = 1080, h = 1920) {
  if (!CHROME) throw new Error("Chrome/Edge/Chromium not found — set CHROME_PATH");
  const tmp = png.replace(/\.png$/, ".tmp.html");
  writeFileSync(tmp, html);
  const profile = mkdtempSync(join(tmpdir(), "hk-chrome-")); // own profile per shot so parallel renders never share one
  try {
    execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1", `--window-size=${w},${h}`,
      `--user-data-dir=${profile}`, "--no-first-run", "--virtual-time-budget=5000", `--screenshot=${png}`, pathToFileURL(tmp).href], { stdio: "ignore" });
  } finally { rmSync(profile, { recursive: true, force: true }); }
  return png;
}

export function render(q, dataFile) {
  const s = typeof q === "string" ? find(q) : q;
  if (s.type !== "template") throw new Error(`${s.name} is a ${s.type} (${s.type === "concept" ? "static cover — rebuild it to docs/CONTRACT.md first" : "real video frame, nothing to render"})`);
  let html = readFileSync(resolve(ROOT, s.template), "utf8");
  if (!html.includes("<!--DATA-->")) throw new Error(`${s.id}: missing <!--DATA--> marker (docs/CONTRACT.md)`);
  html = html.replace("<!--DATA-->", `<script>window.D = ${readFileSync(dataFile, "utf8").trim()};</script>`);
  mkdirSync(OUT, { recursive: true });
  return shot(html, join(OUT, `${s.id}__${basename(dataFile, ".json")}.png`));
}

// Rotation history (optional): an upload schedule whose "## Antrean"/"## Queue" table lists project names in backticks;
// projects map to designs through each style's `references`.
export function history(text) {
  if (!text) return [];
  const queue = text.split(/^## /m).find((x) => /^(Antrean|Queue)/.test(x)) ?? "";
  return [...queue.matchAll(/^\|\s*(\d+)\s*\|.*?`([^`]+)`/gm)].sort((a, b) => a[1] - b[1])
    .map((m) => CAT.styles.find((s) => s.references?.includes(m[2]))?.id).filter(Boolean);
}

// Pick SAFE (liked, proven on video), FRESH (liked template not yet used), BOLD (new template, most different).
export function pick({ series, title = "", hist = [] }) {
  const byId = Object.fromEntries(CAT.styles.map((s) => [s.id, s]));
  const last = hist.length ? byId[hist.at(-1)] : null, recent = new Set(hist.slice(-2));
  const pool = (series && CAT.series[series] ? CAT.series[series].pool : CAT.styles.map((s) => s.id)).map((id) => byId[id]).filter((s) => s && s.type !== "concept");
  const ok = (s) => !recent.has(s.id) && (!last || diff(s, last) >= 2);
  const rank = (list, salt) => list.filter(ok).sort((a, b) => (last ? diff(b, last) - diff(a, last) : 0) || hash(a.id + salt) - hash(b.id + salt));
  const tpl = (s) => s.type === "template";
  const safe = rank(pool.filter((s) => s.type === "reference" && s.tier === "liked"), title)[0] ?? rank(CAT.styles.filter((s) => s.type === "reference" && s.tier === "liked"), title)[0];
  const fresh = rank(pool.filter((s) => tpl(s) && s.tier === "liked" && (!safe || diff(s, safe) >= 2)), title)[0] ?? rank(pool.filter((s) => tpl(s) && s.tier === "liked"), title)[0];
  const taken = new Set([safe?.id, fresh?.id]);
  const spread = (list) => list.filter((s) => tpl(s) && !taken.has(s.id) && ok(s)).sort((a, b) => diff(b, safe) + diff(b, fresh ?? safe) - (diff(a, safe) + diff(a, fresh ?? safe)))[0];
  const bold = spread(pool.filter((s) => s.tier === "new")) ?? spread(pool) ?? spread(CAT.styles);
  return { safe, fresh, bold, last };
}

function sheet(opts, data, dataFile) {
  const card = ([label, s]) => {
    if (!s) return `<div class="c"><h2>${label}</h2><p>no candidate</p></div>`;
    const img = s.type === "reference" ? join(ROOT, s.frame) : render(s, dataFile);
    return `<div class="c"><img src="${pathToFileURL(img).href}"><h2>${label} — ${s.name}</h2><p>${AXES.map((k) => s.axes[k]).join(" · ")}</p><p class="m">${s.type === "reference" ? "real video frame" : "template, this topic"} · ${s.author}</p></div>`;
  };
  const html = `<!doctype html><meta charset="utf-8"><style>body{margin:0;width:1680px;height:1240px;background:#f3f4f8;font:22px system-ui;color:#14161f;display:flex;flex-direction:column;padding:28px 36px;box-sizing:border-box;gap:18px}
  header b{font-size:30px}header span{color:#5d6273}.row{display:flex;gap:30px}.c{width:520px}.c img{width:520px;height:924px;object-fit:cover;border-radius:14px;border:1px solid #dfe2ec;background:#000}
  h2{font-size:24px;margin:10px 0 2px}p{margin:0;color:#5d6273;font-size:19px}.m{font-size:16px}</style>
  <header><b>3 design options — ${String(data.title).replace(/</g, "&lt;")}</b><br><span>${data.series ?? ""} ${data.ep ?? ""} · last used: ${opts.last?.name ?? "-"}</span></header>
  <div class="row">${[["Safe", opts.safe], ["Fresh", opts.fresh], ["Bold", opts.bold]].map(card).join("")}</div>`;
  return shot(html, join(OUT, `recommend__${basename(dataFile, ".json")}.png`), 1680, 1240);
}

export function check() {
  const errs = [], seen = new Map();
  const claim = (k, owner) => { const n = norm(k); if (seen.has(n) && seen.get(n) !== owner) errs.push(`"${k}" used by both ${seen.get(n)} and ${owner}`); seen.set(n, owner); };
  for (const s of CAT.styles) {
    for (const k of [s.id, s.name, ...(s.aliases || [])]) claim(k, s.id);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s.id)) errs.push(`${s.id}: id must be lowercase kebab-case`);
    if (/[^\x20-\x7e]/.test(s.name)) errs.push(`${s.id}: name must be plain English ASCII`);
    if (!existsSync(join(ROOT, s.cover))) errs.push(`${s.id}: cover missing (${s.cover})`);
    if (s.type === "template") {
      if (!existsSync(join(ROOT, s.template))) errs.push(`${s.id}: template missing`);
      else if (!readFileSync(join(ROOT, s.template), "utf8").includes("<!--DATA-->")) errs.push(`${s.id}: template lacks <!--DATA-->`);
    }
    for (const sr of s.series || []) if (!CAT.series[sr]) errs.push(`${s.id}: unknown series ${sr}`);
  }
  for (const [k, v] of Object.entries(CAT.series)) for (const id of v.pool) if (!CAT.styles.some((s) => s.id === id)) errs.push(`series ${k}: unknown id ${id}`);
  return errs;
}

export function gallery() {
  const AUTH = { opus: "Claude Opus", fable: "Claude Fable", astra: "ChatGPT Astra" };
  const TIER = { liked: "Liked", maybe: "Maybe", new: "New" };
  const by = (k, v) => CAT.styles.filter((s) => s[k] === v).length;
  let md = `# Hyperkuy catalog\n\n_Generated by \`node tools/hyperkuy.mjs gallery\` from \`catalog.json\` — do not edit by hand._\n\n` +
    `**${CAT.styles.length} designs** · ${Object.entries(AUTH).map(([k, v]) => `${v} ${by("author", k)}`).join(" · ")} · ` +
    `${by("type", "template")} templates · ${by("type", "reference")} video references · ${by("type", "concept")} concepts\n\n` +
    `Use any design by name: \`node tools/hyperkuy.mjs render "Dusk Mode" --data my-topic.json\` (see README).\n`;
  for (const [a, label] of Object.entries(AUTH)) {
    md += `\n## ${label}\n\n| Cover | Name · id | Type · rating | Look (background · type · depth · visual) | Series | Idea |\n|---|---|---|---|---|---|\n`;
    for (const s of CAT.styles.filter((x) => x.author === a).sort((x, y) => x.name.localeCompare(y.name)))
      md += `| <img src="${s.cover}" width="90"> | **${s.name}**<br>\`${s.id}\` | ${s.type} · ${TIER[s.tier]} | ${s.axes ? AXES.map((k) => s.axes[k]).join(" · ") : s.objects ?? ""} | ${(s.series || []).join(", ")} | ${s.metaphor} |\n`;
  }
  writeFileSync(join(ROOT, "CATALOG.md"), md);
  return join(ROOT, "CATALOG.md");
}

function selftest() {
  const a = (c, m) => { if (!c) { console.error("FAIL", m); process.exitCode = 1; } };
  a(find("Dusk Mode").id === "dusk-mode", "find by name");
  a(find("mode-senja").id === "dusk-mode", "find by legacy alias");
  a(find("periodic").id === "periodic-elements", "find by unique prefix");
  let amb = false; try { find("drafting"); } catch { amb = true; } a(amb, "ambiguous prefix throws");
  a(check().length === 0, "catalog check clean: " + check().join("; "));
  const r = pick({ series: "ai-tools", title: "x", hist: ["dusk-mode"] });
  a(r.safe && r.safe.id !== "dusk-mode", "safe avoids the style just used");
  a(!r.safe || diff(r.safe, find("dusk-mode")) >= 2, "safe differs >=2 axes from last");
  for (const sr of Object.keys(CAT.series)) { const o = pick({ series: sr, title: "x", hist: [] }); const ids = [o.safe, o.fresh, o.bold].filter(Boolean).map((s) => s.id); a(new Set(ids).size === ids.length, `${sr}: 3 distinct options`); }
  a(history("## Queue\n| 02 | x | `prompt-kalkulator` |\n| 01 | x | `claude-ux-dark` |\n## Other").join() === "dusk-mode,lockscreen-story", "history ordered by number");
  console.log(process.exitCode ? "selftest FAILED" : "selftest OK");
}

const [cmd, ...rest] = process.argv.slice(2);
const pos = rest.filter((x, i) => !x.startsWith("--") && !(i > 0 && rest[i - 1].startsWith("--")));
try {
  if (cmd === "find") { const s = find(pos.join(" ")); console.log(JSON.stringify(s, null, 2)); }
  else if (cmd === "list") {
    const f = { author: arg("--author"), tier: arg("--tier"), series: arg("--series") };
    for (const s of CAT.styles.filter((s) => (!f.author || s.author === f.author) && (!f.tier || s.tier === f.tier) && (!f.series || s.series?.includes(f.series))))
      console.log(`${s.name.padEnd(22)} ${s.id.padEnd(22)} ${s.author.padEnd(6)} ${s.type.padEnd(9)} ${s.tier}`);
  } else if (cmd === "render") {
    const data = resolve(arg("--data", join(ROOT, "data", "sample-tokens.json")));
    // a path to an .html file renders an unregistered draft (used while building new designs)
    const asFile = (p) => ({ id: basename(p, ".html"), name: basename(p), type: "template", template: resolve(p) });
    const list = pos[0] === "all" ? CAT.styles.filter((s) => s.type === "template") : pos.map((p) => (/\.html$/i.test(p) && existsSync(p) ? asFile(p) : find(p)));
    for (const s of list) { try { console.log("ok  ", render(s, data)); } catch (e) { console.log("FAIL", e.message); process.exitCode = 1; } }
  } else if (cmd === "recommend") {
    const dataFile = resolve(arg("--data", join(ROOT, "data", "sample-tokens.json")));
    const data = JSON.parse(readFileSync(dataFile, "utf8"));
    const hf = arg("--history", process.env.HYPERKUY_HISTORY);
    const opts = pick({ series: arg("--series", data.series_id), title: data.title, hist: history(hf && existsSync(hf) ? readFileSync(hf, "utf8") : "") });
    for (const [k, s] of Object.entries({ safe: opts.safe, fresh: opts.fresh, bold: opts.bold }))
      console.log(`${k.padEnd(6)} ${s ? `${s.name} (${s.id}) — ${AXES.map((a) => s.axes[a]).join(" · ")}${opts.last ? ` · ${diff(s, opts.last)} axes away from ${opts.last.name}` : ""}` : "-"}`);
    console.log("sheet ", sheet(opts, data, dataFile));
  } else if (cmd === "check") { const e = check(); e.forEach((x) => console.log("ERROR", x)); console.log(e.length ? `${e.length} error(s)` : `OK — ${CAT.styles.length} designs, all unique and present`); process.exitCode = e.length ? 1 : 0; }
  else if (cmd === "gallery") console.log("wrote", gallery());
  else if (cmd === "selftest") selftest();
  else console.log(readFileSync(fileURLToPath(import.meta.url), "utf8").split("\n").slice(1, 9).join("\n").replace(/^\/\/ ?/gm, ""));
} catch (e) { console.error(e.message); process.exitCode = 1; }
