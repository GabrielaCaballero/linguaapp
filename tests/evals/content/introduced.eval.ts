// Category: content — nothing a learner must read is used before it was taught (owner, 2026-11-27:
// "Wann ___ der Kurs an?" before "wann"; tables of words with no meaning). Walks the course in path
// order (unit, then the order items are written, which is the order lessons introduce them) and
// checks the target-language text a learner has to understand to answer:
//   - German inside a question's prompt («Wann ___ der Kurs an?»),
//   - rule-card tables (pattern.table) unless each row has its meaning (pattern.meanings),
//   - the tables of the grammar cards an item links to, unless they give row meanings.
// Known = closed-class words, names, numbers, and every word of every earlier item (its target,
// forms, table answers, dialogue lines, examples), plus the item's own words and `annot` glosses.
// Strict for German A0–A2 (units 1–12); other courses and levels follow as they're reworked.
import { describe, expect, it } from "vitest";
import { courses } from "@/content";
import type { GrammarPoint, Item, TargetLang } from "@/content/schema";

const SCOPE: { lang: TargetLang; upTo: number }[] = [{ lang: "de", upTo: 12 }];

const words = (s: string) =>
  s
    .split(/[\s/,.;:!?¡¿«»"“”()…+=→–—]+/)
    .map((w) => w.replace(/^'+|'+$/g, "").toLowerCase())
    .filter((w) => w && !/\d/.test(w) && !/^_+$/.test(w) && !/^-|-$/.test(w));

function taughtBy(i: Item): string[] {
  const out = [i.target, ...Object.values(i.forms ?? {}), ...(i.accept ?? []).map((a) => a.text)];
  if (i.example) out.push(i.example.target);
  for (const t of i.turns ?? []) out.push(t.target);
  for (const c of i.paradigm?.cells ?? []) out.push(c.answer, c.label);
  for (const r of i.pattern?.table ?? []) if (i.pattern?.meanings) out.push(...r);
  return out.flatMap(words);
}

/** Target-language text quoted inside the Spanish prompt: «…» (the English prompt quotes the same
 *  text, but its '…' can also be English). */
const quoted = (s: string) => [...s.matchAll(/«([^»]+)»/g)].map((m) => m[1]);

describe("every word a learner must read was taught earlier (path order)", () => {
  for (const { lang, upTo } of SCOPE) {
    it(`${lang}: units 1–${upTo}`, () => {
      const c = courses[lang];
      const grammar = new Map<string, GrammarPoint>((c.grammar ?? []).map((g) => [g.id, g]));
      const known = new Set<string>([...c.lexicon.closedClass, ...(c.lexicon.names ?? [])].flatMap(words));
      const problems: string[] = [];
      const units = [...c.units].sort((a, b) => a.index - b.index).filter((u) => u.index <= upTo);
      for (const u of units)
        for (const i of u.items) {
          const local = new Set([...known, ...taughtBy(i), ...Object.keys(i.annot ?? {}).flatMap(words)]);
          const need: [string, string][] = [];
          if (i.question) for (const q of quoted(i.question.prompt.es)) need.push(["question", q]);
          if (i.pattern?.table && !i.pattern.meanings) for (const r of i.pattern.table) for (const cell of r) need.push(["table", cell]);
          for (const gid of i.grammar ?? []) {
            const g = grammar.get(gid);
            if (g?.table && !g.table.meanings) for (const r of g.table.rows) for (const cell of r) need.push([`card ${gid}`, cell]);
          }
          for (const [where, text] of need) {
            const miss = [...new Set(words(text).filter((w) => !local.has(w)))];
            if (miss.length) problems.push(`${i.id} (${where}): ${miss.join(", ")}`);
          }
          for (const w of taughtBy(i)) known.add(w);
        }
      const uniq = [...new Set(problems)];
      expect(uniq, `${uniq.length} places use words not taught yet`).toEqual([]);
    });
  }
});
