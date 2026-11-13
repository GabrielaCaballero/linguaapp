// Validates every rule in docs/team/10-spec.md §3.3 for the real course packs
// (src/content, via @/content) and for the engine's test fixture.
// Content stream: run `npx vitest run tests/content.test.ts` before every commit.
import { describe, expect, it } from "vitest";
import * as contentModule from "@/content";
import type { CoursePack, Item, Mcq, TargetLang } from "@/content/schema";
import { fixtureCourses } from "./fixtures/mini-course";

const real = (contentModule as unknown as { courses?: Partial<Record<TargetLang, CoursePack>> }).courses;

const FORBIDDEN = /lavello|zurig|zürich|zurich|gabriela|\bgabi\b|comune|cittadinanza|citizenship|\bfide\b|dante alighieri society|plida/i;
// The engine fixture keeps the original five bands; the real course packs add B2 (decisions.md 2026-11-13).
const FIXTURE_BANDS = ["A0", "A1.1", "A1.2", "A2", "B1"] as const;
const BANDS = [...FIXTURE_BANDS, "B2"] as const;

function mcqOk(m: Mcq | undefined, where: string, problems: string[]) {
  if (!m) return;
  if (!m.prompt?.es || !m.prompt?.en) problems.push(`${where}: mcq prompt needs es+en`);
  if (!Array.isArray(m.options) || m.options.length < 2) problems.push(`${where}: mcq needs ≥2 options`);
  if (!(Number.isInteger(m.answer) && m.answer >= 0 && m.answer < m.options.length)) problems.push(`${where}: mcq answer index out of range`);
  m.options.forEach((o, k) => {
    if (typeof o !== "string" && (!o.es || !o.en)) problems.push(`${where}: option ${k} needs es+en`);
  });
}

function validate(pack: CoursePack, opts: { strictPlacement: boolean; bands?: readonly string[] }): string[] {
  const p: string[] = [];
  const lang = pack.lang;
  const ids = new Set<string>();
  const legacy = new Set<string>();
  const allItems: Item[] = [];
  if (!pack.version) p.push("pack.version missing");
  const unitIdx = new Set<number>();
  for (const u of pack.units) {
    if (!new RegExp(`^${lang}-u\\d\\d$`).test(u.id)) p.push(`unit id ${u.id} must be ${lang}-uNN`);
    if (u.lang !== lang) p.push(`${u.id}: lang`);
    if (unitIdx.has(u.index)) p.push(`${u.id}: duplicate index`);
    unitIdx.add(u.index);
    if (!u.title?.target || !u.title?.es || !u.title?.en) p.push(`${u.id}: title needs target+es+en`);
    if (!u.canDo?.length || u.canDo.length > 3) p.push(`${u.id}: canDo must have 1–3 entries`);
    for (const c of u.canDo ?? []) if (!c.es || !c.en) p.push(`${u.id}: canDo needs es+en`);
    if (!u.icon) p.push(`${u.id}: icon`);
    for (const i of u.items) {
      allItems.push(i);
      const w = i.id;
      if (ids.has(i.id)) p.push(`duplicate id ${i.id}`);
      ids.add(i.id);
      if (!new RegExp(`^${lang}-u\\d\\d-[a-z0-9-]+$`).test(i.id)) p.push(`${w}: id must be ${lang}-uNN-slug (ascii)`);
      if (!i.id.startsWith(u.id + "-")) p.push(`${w}: id prefix must match unit ${u.id}`);
      if (i.unit !== u.id) p.push(`${w}: unit field ${i.unit} ≠ ${u.id}`);
      if (i.lang !== lang) p.push(`${w}: lang`);
      if (!i.target?.trim()) p.push(`${w}: target`);
      if (!i.gloss?.es?.trim() || !i.gloss?.en?.trim()) p.push(`${w}: gloss needs es AND en`);
      if (!i.spoken?.trim()) p.push(`${w}: spoken`);
      if (!Array.isArray(i.tags)) p.push(`${w}: tags`);
      if ((i.type === "word" || i.type === "phrase") && (i.distractors?.length ?? 0) < 3) p.push(`${w}: ≥3 distractors for words/phrases`);
      if (i.pos === "noun" && (!i.gender || !i.plural)) p.push(`${w}: nouns need gender + plural`);
      if (i.type === "bridge" && !i.onlyFor) p.push(`${w}: bridge items need onlyFor`);
      if ((i.type === "listening" || i.type === "dialogue") && !i.question) p.push(`${w}: ${i.type} needs a question`);
      if (i.type === "dialogue" && !i.turns?.length) p.push(`${w}: dialogue needs turns`);
      if (i.type === "pattern" && !i.pattern && !i.question) p.push(`${w}: pattern needs pattern or question`);
      if (i.type === "sound" && !i.pair && (i.distractors?.length ?? 0) < 1) p.push(`${w}: sound needs pair or distractors`);
      mcqOk(i.question, w, p);
      for (const t of i.turns ?? []) if (!t.gloss?.es || !t.gloss?.en) p.push(`${w}: turn gloss needs es+en`);
      if (i.example && (!i.example.gloss?.es || !i.example.gloss?.en)) p.push(`${w}: example gloss needs es+en`);
      if (i.pattern && (!i.pattern.rule?.es || !i.pattern.rule?.en)) p.push(`${w}: pattern rule needs es+en`);
      if (i.legacyId) {
        if (legacy.has(i.legacyId)) p.push(`${w}: duplicate legacyId ${i.legacyId}`);
        legacy.add(i.legacyId);
      }
      if (i.difficulty !== undefined && (i.difficulty < -3 || i.difficulty > 2)) p.push(`${w}: difficulty out of −3…+2`);
      for (const n of [i.note?.es, i.note?.en]) if (n && n.split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ¿¡«"])/).filter(Boolean).length > 3) p.push(`${w}: note ≤2 sentences`);
      const text = JSON.stringify(i);
      if (FORBIDDEN.test(text)) p.push(`${w}: owner-specific string (${text.match(FORBIDDEN)?.[0]})`);
    }
  }
  // placement
  const pIds = new Set<string>();
  const bands = opts.bands ?? BANDS;
  if (opts.strictPlacement && pack.placement.length < 6 * bands.length) p.push(`placement has ${pack.placement.length} items (need ≥${6 * bands.length})`);
  for (const band of bands) {
    const n = pack.placement.filter((x) => x.cefr === band).length;
    if (opts.strictPlacement && n < 6) p.push(`placement band ${band} has ${n} items (need 6)`);
  }
  for (const x of pack.placement) {
    const w = x.id;
    if (!new RegExp(`^${lang}-p-\\d\\d$`).test(x.id)) p.push(`${w}: placement id must be ${lang}-p-NN`);
    if (pIds.has(x.id) || ids.has(x.id)) p.push(`${w}: duplicate / shared with unit item`);
    pIds.add(x.id);
    if (x.lang !== lang) p.push(`${w}: lang`);
    if (typeof x.b !== "number" || x.b < -4 || x.b > 3) p.push(`${w}: b out of range`);
    if ((x.kind === "mcq" || x.kind === "listen" || x.kind === "cloze") && !x.mcq) p.push(`${w}: ${x.kind} needs mcq`);
    if (x.kind === "type" && !x.answer) p.push(`${w}: type needs answer`);
    if (x.kind === "listen" && !x.spoken) p.push(`${w}: listen needs spoken`);
    if (x.kind === "cloze" && !x.stem?.includes("___")) p.push(`${w}: cloze stem needs ___`);
    mcqOk(x.mcq, w, p);
    for (const s of x.seeds ?? []) if (!ids.has(s)) p.push(`${w}: seed ${s} does not exist`);
    if (FORBIDDEN.test(JSON.stringify(x))) p.push(`${w}: owner-specific string`);
  }
  // lexicon
  if (!pack.lexicon?.closedClass?.length) p.push("lexicon.closedClass empty");
  for (const pair of pack.lexicon?.minimalPairs ?? []) if (pair.length !== 2 || pair[0] === pair[1]) p.push(`bad minimal pair ${pair}`);
  return p;
}

describe("fixture course packs", () => {
  for (const pack of Object.values(fixtureCourses)) {
    it(`${pack.lang} fixture is valid`, () => expect(validate(pack, { strictPlacement: true, bands: FIXTURE_BANDS })).toEqual([]));
  }
});

describe("real course packs (@/content)", () => {
  if (!real) {
    it.skip("src/content/index.ts does not export `courses` yet", () => {});
    return;
  }
  for (const lang of ["it", "de"] as TargetLang[]) {
    const pack = real[lang];
    it(`${lang}: pack exists`, () => expect(pack).toBeTruthy());
    if (!pack) continue;
    it(`${lang}: follows every content rule`, () => {
      const problems = validate(pack, { strictPlacement: true });
      expect(problems, problems.slice(0, 40).join("\n")).toEqual([]);
    });
    it(`${lang}: has at least one unit with items`, () => expect(pack.units.some((u) => u.items.length > 0)).toBe(true));
  }
  it("ids are unique across languages", () => {
    const all = Object.values(real).flatMap((p) => p!.units.flatMap((u) => u.items.map((i) => i.id)));
    expect(new Set(all).size).toBe(all.length);
  });
  it("Italian placement has ≥1 false friend per band", () => {
    const pack = real.it;
    if (!pack) return;
    const missing = BANDS.filter((b) => !pack.placement.some((x) => x.cefr === b && x.falseFriend));
    expect(missing).toEqual([]);
  });
});
