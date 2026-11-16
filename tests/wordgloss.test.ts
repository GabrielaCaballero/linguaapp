import { describe, expect, it } from "vitest";
import { courses } from "@/content";
import { glossary, tokenize } from "@/lib/wordGloss";

const items = (l: "it" | "de") => courses[l].units.flatMap((u) => u.items);

describe("tap a word to see its meaning", () => {
  it("Italian dialogue line: course words and small words get a meaning; spacing is kept", () => {
    const g = glossary("it", "en", items("it"));
    const tk = tokenize("Buongiorno! Mi chiamo Anna. E Lei?", g);
    expect(tk.map((x) => x.text).join("")).toBe("Buongiorno! Mi chiamo Anna. E Lei?");
    const m = Object.fromEntries(tk.filter((x) => x.meaning).map((x) => [x.text, x.meaning]));
    expect(m["Buongiorno!"]).toBeTruthy();
    expect(m["E"]).toBe("and");
    expect(m["Lei?"]).toBe("you (formal)");
    expect(m["Anna."]).toBeUndefined(); // names and unknown words get no underline
  });
  it("German, Spanish explanations; nouns are found without their article", () => {
    const g = glossary("de", "es", items("de"));
    const tk = tokenize("Ich trinke einen Kaffee.", g);
    const m = Object.fromEntries(tk.filter((x) => x.meaning).map((x) => [x.text, x.meaning]));
    expect(m["Ich"]).toBe("yo");
    expect(m["Kaffee."]).toBeTruthy();
  });
});
