// Category: engine — which browser voice speaks Italian/German (src/lib/speech.ts). Robotic
// voices (Apple's Eloquence family, novelty voices) must lose to any natural one, but still be
// used when they are all the device has.
import { describe, expect, it } from "vitest";
import { bestVoice, matchVoices, type VoiceLike } from "../../../src/lib/speech";

const v = (name: string, lang: string, voiceURI = name, localService = true, def = false): VoiceLike => ({ name, lang, voiceURI, localService, default: def });

const SAFARI_IT = [
  v("Eddy (italiano (Italia))", "it-IT", "com.apple.eloquence.it-IT.Eddy"),
  v("Flo (italiano (Italia))", "it-IT", "com.apple.eloquence.it-IT.Flo"),
  v("Alice", "it-IT", "com.apple.voice.compact.it-IT.Alice"),
  v("Federica", "it-IT", "com.apple.voice.enhanced.it-IT.Federica"),
  v("Anna", "de-DE", "com.apple.voice.compact.de-DE.Anna"),
];

describe("speech · voice ranking", () => {
  it("prefers an Enhanced Apple voice over compact and Eloquence voices", () => {
    expect(bestVoice(SAFARI_IT, "it-IT")?.name).toBe("Federica");
  });
  it("prefers a compact voice over the robotic Eloquence voices listed first", () => {
    expect(bestVoice(SAFARI_IT.filter((x) => x.name !== "Federica"), "it-IT")?.name).toBe("Alice");
  });
  it("still speaks when only robotic voices exist", () => {
    expect(bestVoice(SAFARI_IT.slice(0, 2), "it-IT")).toBeDefined();
  });
  it("Premium beats Enhanced; exact region beats another region", () => {
    const list = [v("Petra", "de-DE", "com.apple.voice.enhanced.de-DE.Petra"), v("Anna (Premium)", "de-DE", "com.apple.voice.premium.de-DE.Anna"), v("Helena", "de-AT")];
    expect(bestVoice(list, "de-DE")?.name).toBe("Anna (Premium)");
    expect(bestVoice([v("Luca", "it-CH"), v("Alice", "it_IT")], "it-IT")?.name).toBe("Alice");
  });
  it("Chrome: Google network voice online, a local voice offline", () => {
    const list = [v("Microsoft Elsa - Italian (Italy)", "it-IT"), v("Google italiano", "it-IT", "Google italiano", false)];
    expect(bestVoice(list, "it-IT", true)?.name).toBe("Google italiano");
    expect(bestVoice(list, "it-IT", false)?.name).toBe("Microsoft Elsa - Italian (Italy)");
  });
  it("no voice for the language means none (hasVoice relies on this)", () => {
    expect(matchVoices(SAFARI_IT, "fr-FR")).toHaveLength(0);
    expect(bestVoice(SAFARI_IT, "fr-FR")).toBeUndefined();
    expect(matchVoices(SAFARI_IT, "de-DE").map((x) => x.name)).toEqual(["Anna"]);
  });
});
