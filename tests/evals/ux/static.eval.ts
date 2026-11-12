// Category: ux-static — localisation completeness/leaks, hard-coded UI strings, owner strings,
// reduced motion and offline worker wiring. Deterministic source checks (no browser).
import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { DICTS } from "@/lib/i18n";

const ROOT = path.resolve(__dirname, "../../..");
const read = (p: string) => fs.readFileSync(path.join(ROOT, p), "utf8");
function walk(dir: string): string[] {
  return fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : /\.(tsx?|css|js)$/.test(e.name) ? [path.join(dir, e.name)] : []));
}

// Render every dictionary entry with sample args so function strings are checked too.
const SAMPLE: unknown[] = [3, "Lena", 2];
function render(v: unknown): string {
  if (typeof v === "string") return v;
  if (typeof v === "function") {
    try {
      return String((v as (...a: unknown[]) => unknown)(...SAMPLE));
    } catch {
      return "";
    }
  }
  if (Array.isArray(v)) return v.map(render).join(" | ");
  if (v && typeof v === "object") return Object.values(v).map(render).join(" | ");
  return "";
}

const EN_WORDS = /\b(the|you|your|and|with|lesson|today|words?|goal|review|start|settings|minutes|day|week|level|back|continue|check|correct|wrong|learn|practice|practise)\b/i;
const ES_WORDS = /[¿¡ñáéíóú]|\b(el|los|las|tu|tú|para|lección|hoy|palabras?|meta|repaso|semana|nivel|día|minutos)\b/i;
// Strings that legitimately look the same / contain the other language (names, codes, target-language examples).
const SAME_OK = /^(\d+ min|Lingua|Claude.*|OK|IT|DE|A1.*|A2|B1|Español|English|Italiano|Deutsch|min|✦.*|.{0,3})$/;
const LEAK_OK_KEYS = new Set(["appName", "baseName", "langName", "levelA11", "levelA1", "levelA2", "levelB1", "sameAs", "tutorProvider", "anthropicName"]);

describe("i18n completeness & leaks (CUJ-1 'UI fully in Spanish')", () => {
  const en = DICTS.en as Record<string, unknown>;
  const es = DICTS.es as Record<string, unknown>;
  it("es and en have identical keys and value kinds", () => {
    expect(Object.keys(es).sort()).toEqual(Object.keys(en).sort());
    for (const k of Object.keys(en)) expect(typeof es[k], k).toBe(typeof en[k]);
  });
  for (const k of Object.keys(en)) {
    it(`key ${k}: translated, no English in es, no Spanish in en`, () => {
      const e = render(en[k]);
      const s = render(es[k]);
      if (LEAK_OK_KEYS.has(k)) return;
      if (e.trim().length > 3 && !SAME_OK.test(e.trim())) expect(s, "es identical to en").not.toBe(e);
      expect(s.match(EN_WORDS)?.[0] ?? null, `English word in es: ${s}`).toBeNull();
      expect(e.match(ES_WORDS)?.[0] ?? null, `Spanish in en: ${e}`).toBeNull();
    });
  }
  it("singular counts read naturally (no '1 words' / '1 palabras', P1-9)", () => {
    for (const d of [DICTS.en, DICTS.es] as Record<string, unknown>[])
      for (const [k, v] of Object.entries(d))
        if (typeof v === "function" && v.length === 1) {
          let out = "";
          try {
            out = String((v as (n: number) => unknown)(1));
          } catch {
            continue;
          }
          expect(out, k).not.toMatch(/\b1\s+(words|items|minutes|days|errors|palabras|minutos|días|errores|elementos)\b/i);
        }
  });
});

describe("no hard-coded UI strings in components (localisation leaks)", () => {
  const files = [...walk("src/app"), ...walk("src/components")].filter((f) => f.endsWith(".tsx"));
  const ALLOW = /^(Lingua( v2)?|Claude|IT|DE|✦|der \/ die \/ das \+ …|·|—|…|→|✓|✕|~|\+|%|\?|\d.*)$/;
  for (const f of files) {
    it(`${f}: no literal English/Spanish text nodes or aria-labels`, () => {
      const src = fs.readFileSync(path.join(ROOT, f), "utf8");
      const hits: string[] = [];
      for (const m of src.matchAll(/>\s*([A-Za-zÁÉÍÓÚáéíóúñ][^<>{}\n]*?)\s*</g)) if (!ALLOW.test(m[1].trim()) && /[a-z]{3,}/i.test(m[1]) && !/[;()[\]=&|]/.test(m[1])) hits.push(m[1].trim());
      for (const m of src.matchAll(/(aria-label|placeholder|title|alt)="([^"]*[A-Za-z]{3,}[^"]*)"/g)) hits.push(`${m[1]}="${m[2]}"`);
      expect(hits).toEqual([]);
    });
  }
});

describe("owner-specific strings are gone everywhere (CUJ-1/12)", () => {
  const files = [...walk("src"), "public/sw.js", "public/manifest.json"].filter((f) => fs.existsSync(path.join(ROOT, f)));
  for (const term of ["Lavello", "Zurigo", "Zürich", "Gabi", "Dante", "fide", "citizenship", "cittadinanza", "Milestones", "/ties"]) {
    it(`no "${term}"`, () => {
      const re = new RegExp(`\\b${term.replace("/", "\\/")}\\b`, "i");
      expect(files.filter((f) => !f.includes("migrate.ts") && re.test(fs.readFileSync(path.join(ROOT, f), "utf8")))).toEqual([]);
    });
  }
});

describe("reduced motion, themes, offline wiring (CUJ-10, CUJ-13)", () => {
  const css = read("src/app/globals.css");
  it("system prefers-reduced-motion disables animations", () => expect(css).toMatch(/@media\s*\(prefers-reduced-motion:\s*reduce\)/));
  it("in-app Reduce motion setting has a CSS hook", () => expect(css).toMatch(/data-motion="reduce"/));
  it("dark theme tokens exist", () => expect(css).toMatch(/prefers-color-scheme:\s*dark|data-theme="dark"/));
  it("confidence chips / buttons declare ≥44px targets", () => expect(css).toMatch(/min-height:\s*(4[4-9]|[5-9]\d)px/));
  const sw = read("public/sw.js");
  it("service worker: cache-first for /_next/static", () => expect(sw).toMatch(/_next\/static/));
  it("service worker: network-first navigation with cache fallback", () => expect(sw).toMatch(/navigate/));
  it("service worker: precaches routes on install", () => expect(sw).toMatch(/install/));
  it("service worker: caches lazily loaded chunks (P1-10)", () => expect(sw).toMatch(/cache-urls|_buildManifest/));
  it("sw.js served with no-cache", () => expect(read("next.config.ts")).toMatch(/sw\.js[\s\S]*no-cache/));
});
