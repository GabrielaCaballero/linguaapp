import type { Item } from "@/lib/types";

// German A1 starter. Bridge language: English. Swiss spelling (ss, never ß) as primary answers.

type Partial_ = Omit<Item, "lang" | "id"> & { id: string };
const de = (x: Partial_): Item => ({ ...x, id: `de-${x.id}`, lang: "de" });

const pattern = (id: string, prompt: string, answer: string, choices: string[], note: string) =>
  de({ id, module: "A1", kind: "pattern", prompt, answer, note, guess: { q: `${prompt} → ?`, choices, a: answer } });

const ff = (id: string, answer: string, meaning: string, choices: string[], note: string) =>
  de({ id, module: "A1", kind: "falsefriend", prompt: meaning, answer, note, guess: { q: `"${answer}" means…`, choices, a: meaning } });

const w = (id: string, prompt: string, answer: string, extra: Partial<Item> = {}) =>
  de({ id, module: "A1", kind: answer.split(" ").length >= 3 ? "phrase" : "word", prompt, answer, ...extra });

const basic = { tags: ["basic"] };

export const GERMAN: Item[] = [
  // ── Basics ───────────────────────────────────────────────────
  w("hallo", "Hello", "Hallo", basic),
  w("morgen", "Good morning", "Guten Morgen", basic),
  w("tag", "Hello / Good day (polite)", "Guten Tag", basic),
  w("gruezi", "Hello (Swiss, polite)", "Grüezi", {
    ...basic,
    alts: ["gruezi"],
    note: "The Swiss German greeting you'll hear everywhere in Zurich. Informal: Hoi or Sali.",
  }),
  w("danke", "Thank you", "Danke", { ...basic, alts: ["danke schön", "danke vielmal"], note: "In Zurich: «Merci vielmal»." }),
  w("bitte", "Please / You're welcome", "Bitte", basic),
  w("entschuldigung", "Excuse me / Sorry", "Entschuldigung", basic),
  w("tschuess", "Bye", "Tschüss", { ...basic, alts: ["tschüs", "ciao"], note: "In Zurich you'll also hear «Ciao» and «Uf Wiederluege»." }),
  w("wiedersehen", "Goodbye (formal)", "Auf Wiedersehen", basic),

  // ── Introducing yourself ─────────────────────────────────────
  w("heisse", "My name is Gabriela", "Ich heisse Gabriela", {
    ...basic,
    alts: ["ich heiße gabriela"],
    note: "Swiss Standard German never uses ß: heisse, Strasse.",
  }),
  w("komme", "I come from Argentina", "Ich komme aus Argentinien", basic),
  w("wohne", "I live in Zurich", "Ich wohne in Zürich"),
  w("spreche", "I speak Spanish and English", "Ich spreche Spanisch und Englisch"),
  w("verstehe", "I don't understand", "Ich verstehe nicht", { alts: ["ich verstehe das nicht"] }),
  w("sprechensie", "Do you speak English? (formal)", "Sprechen Sie Englisch?", { note: "Sie (capital S) = formal you. Verb comes first in yes/no questions." }),
  w("wiebitte", "Sorry? / Pardon? (didn't catch that)", "Wie bitte?"),

  // ── English → German bridge patterns ─────────────────────────
  pattern("p-wasser", "water", "das Wasser", ["das Wasser", "das Water", "das Watter", "das Vasser"], "English t often = German ss/s: water → Wasser, eat → essen, that → das."),
  pattern("p-essen", "to eat", "essen", ["essen", "eaten", "etten", "eassen"], "t → ss: eat → essen, better → besser."),
  pattern("p-zehn", "ten", "zehn", ["zehn", "tehn", "sehn", "tenn"], "t → z (said «ts»): ten → zehn, two → zwei, tongue → Zunge."),
  pattern("p-zwei", "two", "zwei", ["zwei", "twei", "swei", "tvo"], "t → z: two → zwei. W is said like English v."),
  pattern("p-tag", "day", "der Tag", ["der Tag", "der Dag", "der Tay", "der Tage"], "d → t: day → Tag, drink → trinken, door → Tür."),
  pattern("p-trinken", "to drink", "trinken", ["trinken", "drinken", "trinkern", "drinchen"], "d → t: drink → trinken."),
  pattern("p-drei", "three", "drei", ["drei", "threi", "trei", "dree"], "th → d: three → drei, thank → danken, thing → Ding."),
  pattern("p-apfel", "apple", "der Apfel", ["der Apfel", "der Appel", "der Apful", "der Afel"], "p → pf: apple → Apfel, pound → Pfund."),
  pattern("p-haben", "to have", "haben", ["haben", "haven", "hafen", "habben"], "v → b: have → haben, give → geben, live → leben."),

  // ── False friends ────────────────────────────────────────────
  ff("f-gift", "das Gift", "poison", ["poison", "present", "talent", "gift card"], "Gift = poison! A present is «das Geschenk»."),
  ff("f-bekommen", "bekommen", "to get / receive", ["to get / receive", "to become", "to come back", "to welcome"], "«To become» is «werden». «Ich bekomme ein Steak» = I'll get a steak."),
  ff("f-handy", "das Handy", "mobile phone", ["mobile phone", "handy tool", "hand cream", "glove"], "Swiss people also say «das Natel»."),
  ff("f-chef", "der Chef", "boss", ["boss", "cook", "chief of police", "waiter"], "A cook is «der Koch»."),
  ff("f-bald", "bald", "soon", ["soon", "without hair", "bold", "old"], "«Bald» (no hair) is «glatzköpfig»."),
  ff("f-fast", "fast", "almost", ["almost", "quick", "firmly", "hungry"], "Quick is «schnell»."),
  ff("f-also", "also", "so / therefore", ["so / therefore", "too / as well", "always", "although"], "«Too / as well» is «auch»."),
  ff("f-kind", "das Kind", "child", ["child", "kind (nice)", "kindness", "king"], "Kind (nice) is «nett» or «freundlich»."),
  ff("f-rock", "der Rock", "skirt", ["skirt", "rock (stone)", "rock music", "rocket"], "A stone is «der Stein»."),
  ff("f-art", "die Art", "type / kind", ["type / kind", "art", "artist", "craft"], "Art (painting etc.) is «die Kunst»."),

  // ── Everyday ─────────────────────────────────────────────────
  w("bahnhof", "the train station", "der Bahnhof", { note: "Zurich main station = Zürich HB (Hauptbahnhof)." }),
  w("arbeit", "work / the job", "die Arbeit"),
  w("kaffee", "A coffee, please", "Einen Kaffee, bitte", { alts: ["ein kaffee, bitte", "ein kaffee bitte"], note: "«Einen» because Kaffee is masculine and the object of an (implied) «I'd like»." }),
  w("kostet", "How much does that cost?", "Wie viel kostet das?", { alts: ["wieviel kostet das?", "was kostet das?"] }),
  w("rechnung", "The bill, please", "Die Rechnung, bitte", { alts: ["zahlen, bitte", "zahlen bitte"], note: "In Swiss cafés «Zahlen, bitte» is very common." }),
];
