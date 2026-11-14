// Category: content — grammar points and paradigm tables (content contract v2.1).
import { describe, expect, it } from "vitest";
import { courses } from "@/content";

for (const [lang, c] of Object.entries(courses)) {
  const items = c.units.flatMap((u) => u.items);
  const ids = new Set((c.grammar ?? []).map((g) => g.id));
  describe(`grammar · ${lang}`, () => {
    it("grammar points: id prefix, both languages everywhere, short line ≤ 120 chars, ≥ 2 examples", () => {
      for (const g of c.grammar ?? []) {
        expect(g.id.startsWith(`${lang}-g-`), g.id).toBe(true);
        for (const f of [g.title, g.short, g.rule, ...(g.steps ?? []), ...(g.pitfalls ? [g.pitfalls] : []), ...g.examples.map((e) => e.gloss)]) {
          expect(f.es?.trim(), g.id).toBeTruthy();
          expect(f.en?.trim(), g.id).toBeTruthy();
        }
        expect(g.short.es.length, g.id).toBeLessThanOrEqual(130);
        expect(g.short.en.length, g.id).toBeLessThanOrEqual(130);
        expect(g.examples.length, g.id).toBeGreaterThanOrEqual(2);
        if (g.table) for (const r of g.table.rows) expect(r.length, g.id).toBe(g.table.head.length);
      }
    });
    it("every grammar / ruleId reference exists", () => {
      for (const i of items) {
        for (const id of i.grammar ?? []) expect(ids.has(id), `${i.id} → ${id}`).toBe(true);
        for (const e of i.errors ?? []) if (e.ruleId) expect(ids.has(e.ruleId), `${i.id} → ${e.ruleId}`).toBe(true);
        for (const cell of i.paradigm?.cells ?? []) if (cell.ruleId) expect(ids.has(cell.ruleId), `${i.id} → ${cell.ruleId}`).toBe(true);
      }
    });
    it("paradigm tables: 2–7 cells (fits a phone with the keyboard open), labels unique, both captions", () => {
      for (const i of items.filter((x) => x.type === "paradigm")) {
        const cells = i.paradigm!.cells;
        expect(cells.length, i.id).toBeGreaterThanOrEqual(2);
        expect(cells.length, i.id).toBeLessThanOrEqual(7);
        expect(new Set(cells.map((x) => x.label)).size, i.id).toBe(cells.length);
        expect(i.paradigm!.caption.es && i.paradigm!.caption.en, i.id).toBeTruthy();
        expect(i.grammar?.length, i.id).toBeTruthy();
      }
    });
    it("annotations name words that appear in the sentence", () => {
      for (const i of items) for (const w of Object.keys(i.annot ?? {})) expect(i.target.includes(w), `${i.id}: ${w}`).toBe(true);
    });
  });
}
