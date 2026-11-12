#!/usr/bin/env node
// One command for every eval: `npm run eval` (unit-level only: `npm run eval -- --no-e2e`).
// Runs the vitest eval suite and the Playwright CUJ/UX suite with JSON reporters, then prints
// pass/total per category, the overall %, the category floor, and the open P0/P1 issues.
// Bar: overall ≥ 99 % of cases AND every category ≥ 95 % AND zero open P0/P1 (issues.json).
import { execSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const OUT = path.join(ROOT, "tests/evals/.results");
fs.mkdirSync(OUT, { recursive: true });
const noE2E = process.argv.includes("--no-e2e");
const tsconfig = fs.readFileSync(path.join(ROOT, "tsconfig.json"), "utf8");

const cat = (file) => {
  const f = file.replace(/\\/g, "/");
  if (f.includes("/sync/")) return "sync";
  if (f.includes("account.spec")) return "e2e-sync";
  if (f.includes("/checker/")) return "checker";
  if (f.includes("/engine/")) return "engine";
  if (f.includes("audit.eval")) return "content-audit";
  if (f.includes("/content/")) return "content";
  if (f.includes("/ux/")) return "ux-static";
  if (f.includes("cuj.spec")) return "e2e-cuj";
  if (f.includes("ux.spec")) return "e2e-ux";
  return "other";
};
const score = {};
const fails = [];
const add = (c, ok, name) => {
  score[c] ??= { pass: 0, total: 0 };
  score[c].total++;
  if (ok) score[c].pass++;
  else fails.push(`[${c}] ${name}`);
};

spawnSync("npx", ["vitest", "run", "-c", "tests/evals/vitest.evals.config.ts", "--reporter=json", `--outputFile=${OUT}/unit.json`], { cwd: ROOT, stdio: ["ignore", "ignore", "inherit"] });
const unit = JSON.parse(fs.readFileSync(`${OUT}/unit.json`, "utf8"));
for (const f of unit.testResults) for (const a of f.assertionResults) add(cat(f.name), a.status === "passed", a.fullName ?? a.title);
if (!unit.testResults.length) add("engine", false, "vitest produced no results (compile error?)");

if (!noE2E) {
  try {
    execSync("npx playwright test -c tests/evals/e2e/playwright.config.ts", { cwd: ROOT, stdio: "inherit" });
  } catch {
    /* failures are counted below */
  } finally {
    if (fs.readFileSync(path.join(ROOT, "tsconfig.json"), "utf8") !== tsconfig) fs.writeFileSync(path.join(ROOT, "tsconfig.json"), tsconfig);
  }
  const walk = (s, file) => {
    for (const sp of s.specs ?? []) for (const t of sp.tests) add(cat(sp.file ?? file), t.results.at(-1)?.status === "passed", `${sp.title}`);
    for (const c of s.suites ?? []) walk(c, s.file ?? file);
  };
  if (fs.existsSync(`${OUT}/e2e.json`)) for (const s of JSON.parse(fs.readFileSync(`${OUT}/e2e.json`, "utf8")).suites) walk(s, s.file);
  else add("e2e-cuj", false, "playwright produced no results");
}

const issues = JSON.parse(fs.readFileSync(path.join(ROOT, "tests/evals/issues.json"), "utf8"));
const open = issues.filter((i) => i.status !== "closed" && (i.sev === "P0" || i.sev === "P1"));

let P = 0, N = 0, floor = 100;
console.log("\nLingua eval scoreboard\n");
console.log("category        pass / total     %");
for (const [c, v] of Object.entries(score).sort()) {
  const pct = (100 * v.pass) / v.total;
  floor = Math.min(floor, pct);
  P += v.pass;
  N += v.total;
  console.log(`${c.padEnd(15)} ${String(v.pass).padStart(4)} / ${String(v.total).padEnd(6)} ${pct.toFixed(1).padStart(6)}`);
}
const overall = (100 * P) / N;
console.log(`${"OVERALL".padEnd(15)} ${String(P).padStart(4)} / ${String(N).padEnd(6)} ${overall.toFixed(1).padStart(6)}`);
console.log(`\nopen P0/P1: ${open.length}${open.map((i) => `\n  ${i.sev} ${i.id} ${i.title}`).join("")}`);
if (fails.length) console.log(`\nfailing cases (${fails.length}):\n  ${fails.slice(0, 80).join("\n  ")}${fails.length > 80 ? "\n  …" : ""}`);
const ok = overall >= 99 && floor >= 95 && open.length === 0;
fs.writeFileSync(`${OUT}/scoreboard.json`, JSON.stringify({ at: new Date().toISOString(), score, overall, floor, open: open.map((i) => i.id), fails }, null, 1));
console.log(`\nBAR (overall ≥99 %, every category ≥95 %, 0 open P0/P1): ${ok ? "MET" : "NOT MET"}${noE2E ? " (e2e skipped)" : ""}\n`);
process.exit(ok ? 0 : 1);
