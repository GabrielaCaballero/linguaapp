// Category: engine — recorded audio (scripts/tts → public/audio). The app and the generator must
// agree on every clip's name, and the published list must only point at files that exist.
import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { audioKey } from "@/lib/audioKey";
import { TARGET_LANGS } from "@/content/schema";

describe("recorded audio", () => {
  it("a text always gets the same short file name; different texts get different ones", () => {
    expect(audioKey("Grazie")).toBe(audioKey("  Grazie "));
    expect(audioKey("Grazie")).toMatch(/^[0-9a-f]{8}[0-9a-z]+$/);
    expect(audioKey("Grazie")).not.toBe(audioKey("Grazie!"));
    // é typed as one character or as e + accent: same clip
    expect(audioKey("caffé")).toBe(audioKey("caffé"));
  });
  for (const lang of TARGET_LANGS) {
    it(`${lang}: every clip in index.json exists (no broken audio)`, () => {
      const dir = path.join(process.cwd(), "public/audio", lang);
      const list = JSON.parse(fs.readFileSync(path.join(dir, "index.json"), "utf8")) as { keys: string[] };
      for (const k of list.keys) expect(fs.existsSync(path.join(dir, `${k}.mp3`)), k).toBe(true);
    });
  }
});
