// Category: engine — table exercises (grading, partial credit, "that's the du form") and the
// hint rule. Docs: docs/team/51-exercises-tables-typing.md, 50-grammar-explanations.md.
import { describe, expect, it } from "vitest";
import { courses } from "@/content";
import type { Item } from "@/content/schema";
import { gradeTable, stemOf } from "@/components/lesson/Table";
import { hintFor } from "@/components/lesson/Exercises";
import { check } from "@/lib/check";

const all: Item[] = Object.values(courses).flatMap((c) => c.units.flatMap((u) => u.items));
const kommen = all.find((i) => i.id === "de-u02-tab-kommen")!;
const essere = all.find((i) => i.id === "it-u02-tab-essere")!;
const di = all.find((i) => i.id === "it-u09-tab-di-articolo")!;
const lex = (i: Item) => courses[i.lang].lexicon;
const answers = (i: Item) => i.paradigm!.cells.map((c) => c.answer);

describe("tables · grading", () => {
  it("all cells right → correct", () => {
    expect(gradeTable(kommen, answers(kommen), "es", lex(kommen)).verdict).toBe("correct");
    expect(gradeTable(di, answers(di), "en", lex(di)).verdict).toBe("correct");
  });
  it("one wrong cell out of six → wrong overall is too harsh: ≥ 80% right → almost", () => {
    const typed = answers(kommen);
    typed[1] = "kommt";
    const r = gradeTable(kommen, typed, "es", lex(kommen));
    expect(r.cells[1].verdict).toBe("wrong");
    expect(r.score).toBeCloseTo(5 / 6, 5);
    expect(r.verdict).toBe("almost");
  });
  it("two or more wrong → wrong (schedules it again soon)", () => {
    const typed = answers(kommen);
    typed[0] = "kommst";
    typed[1] = "kommt";
    expect(gradeTable(kommen, typed, "es", lex(kommen)).verdict).toBe("wrong");
  });
  it("names the mix-up: 'kommt' in the du row is another person's form", () => {
    const typed = answers(kommen);
    typed[1] = "kommt";
    expect(gradeTable(kommen, typed, "es", lex(kommen)).cells[1].otherCell).toBe("er / sie / es");
  });
  it("Italian accent: 'e' for 'è' is almost, not right", () => {
    const typed = answers(essere);
    typed[2] = "e";
    expect(gradeTable(essere, typed, "es", lex(essere)).cells[2].verdict).not.toBe("correct");
  });
  it("blank cells count as wrong", () => {
    expect(gradeTable(kommen, kommen.paradigm!.cells.map(() => ""), "es", lex(kommen)).verdict).toBe("wrong");
  });
  it("endings stage: the shared stem is given (komm-), none when forms share < 2 letters", () => {
    expect(stemOf(kommen.paradigm!.cells)).toBe("komm");
    expect(stemOf(essere.paradigm!.cells)).toBe("");
  });
});

describe("hints and the meine/meinen mistake", () => {
  it("hint shows first letters only", () => {
    expect(hintFor("der Bruder")).toBe("d·· B·····");
    expect(hintFor("è")).toBe("è");
  });
  it("'Ich besuche meinen Brüder' is diagnosed with its grammar point", () => {
    const s = all.find((i) => i.id === "de-u05-ich-besuche-meine-brueder")!;
    const r = check("Ich besuche meinen Brüder.", s, { lexicon: lex(s), base: "es" });
    expect(r.verdict).toBe("wrong");
    expect(r.ruleId).toBe("de-g-possessiv");
    expect(r.feedback).toMatch(/meinen Bruder/);
  });
});
