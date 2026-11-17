// Category: content — every Spanish text is Spanish and every English text is English (owner,
// 2026-11-16: "hay mix de idiomas"). Words of the language being learned are allowed (quoted or
// course vocabulary); English function words inside Spanish text, or the reverse, are not.
import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { courses } from "@/content";

const EN = /\b(the|and|with|your|you|also|this|that|which|it's|isn't|don't|when|where|what|there|here|word|words|sentence)\b/i;
const ES = /\b(el|los|las|que|con|para|pero|también|está|están|cuando|donde|palabra|frase|usted|ustedes|tienes|puedes|nosotros|ellos)\b/i;
const strip = (s: string) => s.replace(/«[^»]*»/g, " ").replace(/'[^']*'/g, " ").replace(/"[^"]*"/g, " ").replace(/\*[^*]*\*/g, " ").replace(/\b\S+:/g, " ").replace(/(^|\s)-\S+/g, " ");

function walk(o: unknown, where: string, known: Set<string>, out: string[]) {
  if (!o || typeof o !== "object") return;
  if (Array.isArray(o)) return o.forEach((x, k) => walk(x, `${where}[${k}]`, known, out));
  const r = o as Record<string, unknown>;
  if (typeof r.es === "string" && typeof r.en === "string") {
    const keep = (s: string) => strip(s).split(/\s+/).filter((w) => !known.has(w.toLowerCase().replace(/[.,;:!?()→'’]/g, ""))).join(" ");
    const a = keep(r.es).match(EN);
    const b = keep(r.en).match(ES);
    if (a) out.push(`${where} (es) has "${a[0]}": ${r.es}`);
    if (b) out.push(`${where} (en) has "${b[0]}": ${r.en}`);
  }
  for (const [k, v] of Object.entries(r)) if (k !== "es" && k !== "en") walk(v, `${where}.${k}`, known, out);
}

describe("language: no English in Spanish text, no Spanish in English text", () => {
  for (const [lang, c] of Object.entries(courses)) {
    it(`${lang} course`, () => {
      const known = new Set(c.units.flatMap((u) => u.items.flatMap((i) => [i.target, ...(i.turns ?? []).map((x) => x.target)].join(" ").toLowerCase().split(/[\s,.!?;:()']+/))));
      for (const g of c.grammar ?? []) for (const e of g.examples) for (const w of e.target.toLowerCase().split(/[\s,.!?;:()']+/)) known.add(w);
      for (const w of c.lexicon.closedClass) known.add(w.toLowerCase());
      const out: string[] = [];
      for (const u of c.units) walk(u, u.id, known, out);
      walk(c.grammar, `${lang}-grammar`, known, out);
      walk(c.placement, `${lang}-placement`, known, out);
      expect(out).toEqual([]);
    });
  }
});

describe("course screens speak the course's explanation language (labels included)", () => {
  const ROOT = path.resolve(__dirname, "../../..");
  for (const f of ["src/app/lesson/page.tsx", "src/app/unit/page.tsx", "src/app/(tabs)/path/page.tsx", "src/app/write/page.tsx"]) {
    it(f, () => {
      const s = fs.readFileSync(path.join(ROOT, f), "utf8");
      expect(s).toMatch(/useCourseT\(/);
      expect(s).not.toMatch(/\buseT\(/);
    });
  }
});
