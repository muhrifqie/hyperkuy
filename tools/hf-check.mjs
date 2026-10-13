#!/usr/bin/env node
// Run the real `hyperframes check` (layout, overflow, overlap, contrast) on a template still.
//   node tools/hf-check.mjs <id | templates/<id>.html> [--data data/sample-tokens.json] [--keep]
// Wraps the template (data injected) in a 1080x1920 one-composition HyperFrames project under out/hfcheck/<id>/,
// runs `npx hyperframes@<pinned> check`, prints the ✗ errors, exits 1 when the check fails.
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { join, resolve, basename } from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const HF_VERSION = "0.8.154";
const ROOT = resolve(fileURLToPath(new URL("..", import.meta.url)));
const args = process.argv.slice(2);
const target = args.find((a) => !a.startsWith("--") && args[args.indexOf(a) - 1] !== "--data");
const dataFile = resolve(args.includes("--data") ? args[args.indexOf("--data") + 1] : join(ROOT, "data", "sample-tokens.json"));
if (!target) { console.error("usage: node tools/hf-check.mjs <id | path.html> [--data file.json]"); process.exit(2); }

const file = /\.html$/i.test(target) ? resolve(target) : join(ROOT, "templates", `${target}.html`);
if (!existsSync(file)) { console.error(`template not found: ${file}`); process.exit(2); }
const id = basename(file, ".html");

let html = readFileSync(file, "utf8");
if (!html.includes("<!--DATA-->")) { console.error(`${id}: missing <!--DATA--> marker`); process.exit(1); }
html = html.replace("<!--DATA-->", `<script>window.D = ${readFileSync(dataFile, "utf8").trim()};</script>`);

// wrap the body in a single static composition so HyperFrames can seek and inspect it
const open = html.match(/<body[^>]*>/i);
if (!open) { console.error(`${id}: no <body>`); process.exit(1); }
html = html.replace(open[0], `${open[0]}\n<div id="hk-root" data-composition-id="main" data-start="0" data-duration="2" data-width="1080" data-height="1920" style="position:relative;width:1080px;height:1920px;overflow:hidden">`);
html = html.replace(/<\/body>/i, `</div>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
<script>window.__timelines = window.__timelines || {}; window.__timelines.main = gsap.timeline({ paused: true }).to({}, { duration: 2 });</script>
</body>`);

const dir = join(ROOT, "out", "hfcheck", id);
rmSync(dir, { recursive: true, force: true });
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "index.html"), html);
writeFileSync(join(dir, "hyperframes.json"), JSON.stringify({ paths: { assets: "assets" } }));

let out = "", failed = false;
try { out = execFileSync("npx", ["--yes", `hyperframes@${HF_VERSION}`, "check", dir], { encoding: "utf8", shell: true, stdio: ["ignore", "pipe", "pipe"], timeout: 240000 }); }
catch (e) { out = (e.stdout || "") + (e.stderr || ""); failed = true; }
const clean = out.replace(/\x1b\[[0-9;]*m/g, "");
const errors = clean.split("\n").filter((l) => /^\s*✗/.test(l)).map((l) => l.replace(/t=[0-9., ]+s /, "").trim());
const passed = /Check passed/.test(clean) && !failed;
for (const e of errors) console.log("ERROR", e.slice(0, 300));
const summary = clean.split("\n").filter((l) => /\d+ error\(s\)|text checks pass|Check (passed|failed)/.test(l)).map((l) => l.trim());
console.log(summary.join(" | ") || clean.slice(-400));
console.log(passed ? `PASS ${id}` : `FAIL ${id}`);
process.exit(passed ? 0 : 1);
