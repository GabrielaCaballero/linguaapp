// Category: content — every item valid per the content contract (spec §3.3) and the
// linguist's style guide (06 §2). One eval case per rule per course (graded deterministically);
// failures list the offending ids.
import { describe, expect, it } from "vitest";
import { courses } from "@/content";
import type { Item, TargetLang } from "@/content/schema";

const BANNED = /lavello|zurigo|z[uü]rich|\bgabi\b|gabriela|\bdante\b|\bfide\b|citizenship|cittadinanza|ciudadan[ií]a/i;
const VOSEO = /(^|[^\p{L}])(vos|tenés|sos|podés|querés|escuchá|elegí|hablás|vosotros|habláis|tenéis)(?=$|[^\p{L}])/iu;
const IT_ART: Record<string, string[]> = { m: ["il", "lo", "l'", "i", "gli"], f: ["la", "l'", "le"] };
const DE_ART: Record<string, string> = { m: "der", f: "die", n: "das" };

function check(lang: TargetLang, name: string, bad: (i: Item) => string | false) {
  it(`${lang}: ${name}`, () => {
    const items = courses[lang].units.flatMap((u) => u.items);
    const offenders = items.map((i) => { const r = bad(i); return r ? `${i.id}: ${r}` : null; }).filter(Boolean);
    expect(offenders).toEqual([]);
  });
}

for (const lang of ["it", "de"] as TargetLang[]) {
  const c = courses[lang];
  describe(`content ${lang}`, () => {
    it(`${lang}: 6 units, indices 1–6, ids ${lang}-uNN, cefr non-decreasing`, () => {
      expect(c.units.map((u) => u.index)).toEqual([1, 2, 3, 4, 5, 6]);
      const order = ["A0", "A1.1", "A1.2", "A2", "B1"];
      c.units.forEach((u, k) => {
        expect(u.id).toBe(`${lang}-u0${u.index}`);
        if (k) expect(order.indexOf(u.cefr)).toBeGreaterThanOrEqual(order.indexOf(c.units[k - 1].cefr));
        expect(u.canDo.length).toBeGreaterThanOrEqual(1);
        expect(u.canDo.length).toBeLessThanOrEqual(3);
        for (const cd of u.canDo) expect(cd.es && cd.en).toBeTruthy();
        expect(u.title.es && u.title.en && u.title.target).toBeTruthy();
      });
    });
    it(`${lang}: ids unique, ascii, prefixed with the unit`, () => {
      const ids = c.units.flatMap((u) => u.items.map((i) => i.id));
      expect(new Set(ids).size).toBe(ids.length);
      for (const u of c.units) for (const i of u.items) {
        expect(i.id).toMatch(/^[a-z0-9-]+$/);
        expect(i.id.startsWith(u.id + "-")).toBe(true);
        expect(i.unit).toBe(u.id);
        expect(i.lang).toBe(lang);
      }
    });
    check(lang, "both glosses present", (i) => (!i.gloss?.es?.trim() || !i.gloss?.en?.trim() ? "missing gloss" : false));
    check(lang, "spoken present, no digits (TTS reads numbers in words)", (i) => (!i.spoken?.trim() ? "no spoken" : /\d/.test(i.spoken) ? `digits in spoken "${i.spoken}"` : false));
    check(lang, "tags present", (i) => (!i.tags?.length ? "no tags" : false));
    check(lang, "words/phrases have ≥3 distinct distractors (bridges/questions excepted)", (i) => {
      if (i.type !== "word" && i.type !== "phrase") return false;
      const d = i.distractors ?? [];
      return d.length < 3 ? `${d.length} distractors` : new Set(d.map((x) => x.toLowerCase())).size !== d.length ? "duplicate distractors" : false;
    });
    check(lang, "no distractor is the target or an accepted/variant answer", (i) => {
      const ok = new Set([i.target, ...(i.accept ?? []).map((a) => a.text), ...(i.variants ?? []).map((v) => v.text)].map((x) => x.toLowerCase().replace(/[.!?¿¡]/g, "").trim()));
      const hit = (i.distractors ?? []).find((d) => ok.has(d.toLowerCase().replace(/[.!?¿¡]/g, "").trim()));
      return hit ? `distractor "${hit}" is accepted` : false;
    });
    check(lang, "nouns carry gender + plural with article", (i) => (i.pos === "noun" && (!i.gender || !i.plural) ? "missing gender/plural" : false));
    check(lang, "noun target starts with the article matching its gender", (i) => {
      if (i.pos !== "noun" || !i.gender || i.type === "bridge") return false;
      const first = i.target.toLowerCase().match(/^(l')|^(\S+)/)!;
      const art = first[1] ?? first[2];
      if (lang === "de") return art === DE_ART[i.gender] ? false : `"${i.target}" vs gender ${i.gender}`;
      return IT_ART[i.gender]?.includes(art) ? false : `"${i.target}" vs gender ${i.gender}`;
    });
    if (lang === "de") {
      check(lang, "German nouns are capitalised after the article", (i) => (i.pos === "noun" && !/^(der|die|das) [A-ZÄÖÜ]/.test(i.target) ? `"${i.target}"` : false));
      check(lang, "German canonical uses ß, not Swiss ss, where standard (strasse/heissen/gross/dreissig/weiss)", (i) => (/(strasse|heiss|gross\b|dreissig|weiss\b|fuss\b|gruss)/i.test(i.target) ? `"${i.target}"` : false));
      check(lang, "German distractors match the target's capitalisation (no give-away nouns among adjectives)", (i) => {
        if (i.type !== "word" || i.target.includes(" ")) return false;
        const up = (s: string) => s[0] !== s[0].toLowerCase();
        const hit = (i.distractors ?? []).find((d) => !d.includes(" ") && up(d) !== up(i.target));
        return hit ? `"${hit}" vs "${i.target}"` : false;
      });
    } else {
      check(lang, "Italian accents: no á í ó ú (Italian uses grave, acute only on é)", (i) => (/[áíóú]/.test([i.target, ...(i.accept ?? []).map((a) => a.text)].join(" ")) ? `"${i.target}"` : false));
      check(lang, "Italian elision uses an apostrophe, not pò", (i) => (/\bpò\b/.test(i.target) ? `"${i.target}"` : false));
      check(lang, "Italian: no uncontracted preposition+article in answers (di il, a il…)", (i) => (/\b(di|a|da|in|su) (il|lo|la|i|gli|le)\b/i.test([i.target, ...(i.accept ?? []).map((a) => a.text)].join(" | ")) ? `"${i.target}"` : false));
    }
    check(lang, "Spanish glosses: neutral tú, no voseo or vosotros", (i) => (VOSEO.test([i.gloss.es, i.note?.es ?? ""].join(" ")) ? `"${i.gloss.es}"` : false));
    check(lang, "English glosses have no Spanish characters", (i) => (/[¿¡ñ]/.test(i.gloss.en) ? `"${i.gloss.en}"` : false));
    check(lang, "notes ≤ 2 sentences per base language", (i) => {
      for (const b of ["es", "en"] as const) {
        const n = i.note?.[b];
        if (n && (n.match(/[.!?](\s|$)/g)?.length ?? 0) > 2) return `${b} note has >2 sentences`;
      }
      return false;
    });
    check(lang, "register-tagged items say so in the English gloss when an opposite-register twin exists", (i) => {
      if (!i.register) return false;
      const strip = (s: string) => s.replace(/\((in)?formal\)|\(polite\)/gi, "").trim().toLowerCase();
      const twin = c.units.flatMap((u) => u.items).find((o) => o !== i && o.register && o.register !== i.register && strip(o.gloss.en) === strip(i.gloss.en));
      return twin && !/\((in)?formal\)/i.test(i.gloss.en) ? `ambiguous with ${twin.id}` : false;
    });
    check(lang, "no two recall-able items share an identical prompt gloss (es or en)", (i) => {
      if (!["word", "phrase", "sentence"].includes(i.type)) return false;
      const twin = c.units.flatMap((u) => u.items).find((o) => o !== i && ["word", "phrase", "sentence"].includes(o.type) && (o.gloss.en.toLowerCase() === i.gloss.en.toLowerCase() || o.gloss.es.toLowerCase() === i.gloss.es.toLowerCase()));
      return twin ? `same gloss as ${twin.id}` : false;
    });
    check(lang, "bridge items have onlyFor; MCQs valid", (i) => {
      if (i.type === "bridge" && !i.onlyFor) return "bridge without onlyFor";
      if (i.question) {
        const q = i.question;
        if (q.answer < 0 || q.answer >= q.options.length) return "answer index out of range";
        if (q.options.length < 3) return "<3 options";
        if (!q.prompt.es || !q.prompt.en) return "prompt not glossed";
      }
      return false;
    });
    check(lang, "no owner-specific or banned strings", (i) => (BANNED.test(JSON.stringify(i)) ? "banned string" : false));

    it(`${lang}: placement bank 30 items, 6 per band, 2 vocab/2 grammar/1 listening/1 reading`, () => {
      const p = c.placement;
      expect(p.length).toBe(30);
      for (const band of ["A0", "A1.1", "A1.2", "A2", "B1"]) {
        const b = p.filter((x) => x.cefr === band);
        expect(b.length, band).toBe(6);
        const n = (s: string) => b.filter((x) => x.skill === s).length;
        expect([n("vocab"), n("grammar"), n("listening"), n("reading")], band).toEqual([2, 2, 1, 1]);
        if (lang === "it") expect(b.some((x) => x.falseFriend), `${band} false friend`).toBe(true);
      }
    });
    it(`${lang}: placement b within ±0.4 of the band centre; MCQ valid; seeds exist`, () => {
      const centre: Record<string, number> = { A0: -2.5, "A1.1": -1.5, "A1.2": -0.5, A2: 0.5, B1: 1.5 };
      const unitIds = new Set(c.units.flatMap((u) => u.items.map((i) => i.id)));
      for (const x of c.placement) {
        expect(Math.abs(x.b - centre[x.cefr]), x.id).toBeLessThanOrEqual(0.4 + 1e-9);
        expect(x.id).toMatch(new RegExp(`^${lang}-p-\\d\\d$`));
        if (x.mcq) {
          expect(x.mcq.answer, x.id).toBeGreaterThanOrEqual(0);
          expect(x.mcq.answer, x.id).toBeLessThan(x.mcq.options.length);
          expect(new Set(x.mcq.options.map((o) => JSON.stringify(o))).size, x.id).toBe(x.mcq.options.length);
        }
        for (const s of x.seeds ?? []) expect(unitIds.has(s), `${x.id} seed ${s}`).toBe(true);
      }
    });
    it(`${lang}: placement MCQ keys are not always the same position`, () => {
      const pos = new Set(c.placement.filter((x) => x.mcq).map((x) => x.mcq!.answer));
      expect(pos.size).toBeGreaterThanOrEqual(3);
    });
    it(`${lang}: lexicon has closed class + ≥20 minimal pairs, all lowercase-comparable`, () => {
      expect(c.lexicon.closedClass.length).toBeGreaterThan(40);
      expect(c.lexicon.minimalPairs.length).toBeGreaterThanOrEqual(20);
    });
  });
}
