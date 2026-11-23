// Lists every text the app can speak (what <Speaker> and speak() receive): items' `spoken`, and
// dialogue / example lines' `spoken ?? target`. Writes scripts/tts/texts.json:
// { it: [{ key, text }], de: [...] }. Run: npm run audio:collect
import { it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { courses } from "@/content";
import { TARGET_LANGS, type TargetLang } from "@/content/schema";
import { audioKey } from "@/lib/audioKey";

it("collect spoken texts", () => {
  const out: Partial<Record<TargetLang, { key: string; text: string }[]>> = {};
  for (const lang of TARGET_LANGS) {
    const texts = new Map<string, string>();
    const add = (t: unknown) => {
      if (typeof t !== "string" || !t.trim()) return;
      const key = audioKey(t);
      const prev = texts.get(key);
      if (prev !== undefined && prev.trim().normalize("NFC") !== t.trim().normalize("NFC")) throw new Error(`audio key collision: «${prev}» vs «${t}»`);
      texts.set(key, t.trim().normalize("NFC"));
    };
    const walk = (x: unknown) => {
      if (Array.isArray(x)) return x.forEach(walk);
      if (!x || typeof x !== "object") return;
      const o = x as Record<string, unknown>;
      // An item, a dialogue turn or an example line: what the app reads aloud.
      if (typeof o.spoken === "string") add(o.spoken);
      else if (typeof o.target === "string" && ("who" in o || "gloss" in o)) add(o.target);
      for (const v of Object.values(o)) if (v && typeof v === "object") walk(v);
    };
    walk(courses[lang]);
    out[lang] = [...texts].map(([key, text]) => ({ key, text })).sort((a, b) => a.key.localeCompare(b.key));
  }
  const file = path.join(__dirname, "texts.json");
  fs.writeFileSync(file, JSON.stringify(out, null, 1) + "\n");
  for (const lang of TARGET_LANGS) console.log(`${lang}: ${out[lang]!.length} clips, ${out[lang]!.reduce((n, x) => n + x.text.length, 0)} characters`);
});
