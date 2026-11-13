// A tiny but schema-complete course pack per language, so the engine can be built and
// tested without waiting for the real content (src/content/it, src/content/de).
import type { Cefr, CoursePack, Item, PlacementItem, TargetLang, Unit } from "../../src/content/schema";

type ItemIn = Omit<Item, "lang" | "unit" | "tags" | "cefr" | "spoken"> & Partial<Pick<Item, "tags" | "cefr" | "spoken">>;

function unit(lang: TargetLang, n: number, cefr: Cefr, title: Unit["title"], icon: string, items: ItemIn[]): Unit {
  const id = `${lang}-u${String(n).padStart(2, "0")}`;
  return {
    id,
    lang,
    index: n,
    cefr,
    title,
    icon,
    canDo: [{ es: `Puedo usar lo de la unidad ${n}.`, en: `I can use unit ${n}.` }],
    items: items.map((x) => ({
      cefr,
      spoken: x.target,
      tags: ["fixture"],
      ...x,
      lang,
      unit: id,
    })),
  };
}

const D3 = (a: string, b: string, c: string) => [a, b, c];

export const itUnits: Unit[] = [
  unit("it", 1, "A0", { target: "Ciao!", es: "¡Hola!", en: "Hello!" }, "👋", [
    { id: "it-u01-nonno", legacyId: "it-s-nn", type: "sound", target: "nonno", gloss: { es: "abuelo", en: "grandfather" }, pair: ["nono", "nonno"], distractors: D3("nono", "nonnno", "nono'"), slow: true, note: { es: "Las dobles se sostienen.", en: "Double consonants are held longer." } },
    { id: "it-u01-ciao", type: "word", pos: "phrase", target: "ciao", gloss: { es: "hola / chau", en: "hi / bye" }, distractors: D3("grazie", "prego", "scusi"), register: "informal" },
    { id: "it-u01-grazie", legacyId: "it-grazie", type: "phrase", pos: "phrase", target: "grazie mille", gloss: { es: "muchas gracias", en: "thanks a lot" }, accept: [{ text: "grazie" }], distractors: D3("prego", "ciao", "per favore") },
    { id: "it-u01-buongiorno", legacyId: "it-buongiorno", type: "phrase", pos: "phrase", target: "buongiorno", gloss: { es: "buenos días", en: "good morning" }, distractors: D3("buonasera", "buonanotte", "ciao") },
    { id: "it-u01-citta", legacyId: "it-p-ta1", type: "word", pos: "noun", gender: "f", plural: "le città", target: "città", gloss: { es: "ciudad", en: "city" }, distractors: D3("cittade", "cità", "ciutà") },
    { id: "it-u01-perche", type: "word", pos: "adv", target: "perché", gloss: { es: "por qué / porque", en: "why / because" }, distractors: D3("quando", "dove", "come") },
    { id: "it-u01-burro", type: "bridge", onlyFor: "es", target: "burro", gloss: { es: "mantequilla (manteca)", en: "butter" }, distractors: D3("asino", "burla", "borracho"), tags: ["false-friend"], note: { es: "Falso amigo: burro no es «burro».", en: "" } },
  ]),
  unit("it", 2, "A1.1", { target: "Al bar", es: "En el bar", en: "At the café" }, "☕", [
    { id: "it-u02-caffe", type: "word", pos: "noun", gender: "m", plural: "i caffè", target: "il caffè", gloss: { es: "el café", en: "the coffee" }, distractors: D3("il latte", "il tè", "l'acqua") },
    { id: "it-u02-zio", type: "word", pos: "noun", gender: "m", plural: "gli zii", target: "lo zio", gloss: { es: "el tío", en: "the uncle" }, distractors: D3("la zia", "il nonno", "lo zaino") },
    { id: "it-u02-amico", type: "word", pos: "noun", gender: "m", plural: "gli amici", target: "l'amico", gloss: { es: "el amigo", en: "the friend" }, distractors: D3("l'amica", "lo zio", "il nonno") },
    { id: "it-u02-dove", type: "phrase", pos: "phrase", target: "dov'è il bar?", gloss: { es: "¿dónde está el bar?", en: "where is the café?" }, distractors: D3("cos'è il bar?", "com'è il bar?", "dov'è la banca?") },
    { id: "it-u02-andato", type: "sentence", target: "sono andato al bar", gloss: { es: "fui al bar", en: "I went to the café" }, accept: [{ text: "sono andata al bar" }], errors: [{ text: "ho andato al bar", feedback: { es: "Con verbos de movimiento: sono andato.", en: "Verbs of motion take essere: sono andato." } }], distractors: D3("ho", "andata", "il") },
    { id: "it-u02-del", type: "phrase", pos: "phrase", target: "il libro del nonno", gloss: { es: "el libro del abuelo", en: "grandpa's book" }, distractors: D3("la", "di", "al") },
    { id: "it-u02-italiana", type: "sentence", target: "Lei è italiana", gloss: { es: "Usted es italiana", en: "You are Italian (formal)" }, register: "formal", distractors: D3("e", "sei", "italiano") },
    { id: "it-u02-pattern", type: "pattern", target: "un caffè, per favore", gloss: { es: "un café, por favor", en: "a coffee, please" }, pattern: { rule: { es: "Pide con «per favore».", en: "Ask with «per favore»." } }, question: { prompt: { es: "¿Cómo pides un café?", en: "How do you order a coffee?" }, options: ["un caffè, per favore", "il caffè è", "caffè grazie no"], answer: 0 } },
  ]),
];

export const deUnits: Unit[] = [
  unit("de", 1, "A0", { target: "Hallo!", es: "¡Hola!", en: "Hello!" }, "👋", [
    { id: "de-u01-hallo", legacyId: "de-hallo", type: "word", pos: "phrase", target: "Hallo", gloss: { es: "hola", en: "hello" }, distractors: D3("Tschüss", "Danke", "Bitte") },
    { id: "de-u01-tschuess", legacyId: "de-tschuess", type: "word", pos: "phrase", target: "Tschüss", gloss: { es: "chau", en: "bye" }, accept: [{ text: "Tschüs" }], distractors: D3("Hallo", "Danke", "Bitte") },
    { id: "de-u01-heisse", legacyId: "de-heisse", type: "sentence", target: "Ich heiße Lena", gloss: { es: "Me llamo Lena", en: "My name is Lena" }, distractors: D3("bin", "heißt", "Sie") },
    { id: "de-u01-schoen", type: "word", pos: "adj", target: "schön", gloss: { es: "lindo", en: "beautiful" }, distractors: D3("schon", "schnell", "klein") },
    { id: "de-u01-gruess", type: "phrase", pos: "phrase", target: "Guten Tag", gloss: { es: "buenos días", en: "good day" }, variants: [{ region: "AT", text: "Grüß Gott" }, { region: "CH", text: "Grüezi" }], distractors: D3("Gute Nacht", "Hallo", "Tschüss") },
    { id: "de-u01-sie", type: "sentence", target: "Wie heißen Sie?", gloss: { es: "¿Cómo se llama usted?", en: "What's your name? (formal)" }, register: "formal", distractors: D3("heißt", "du", "bist") },
  ]),
  unit("de", 2, "A1.1", { target: "Essen & Trinken", es: "Comer y beber", en: "Food & drink" }, "🥨", [
    { id: "de-u02-kaffee", type: "word", pos: "noun", gender: "m", plural: "die Kaffees", target: "der Kaffee", gloss: { es: "el café", en: "the coffee" }, distractors: D3("die Milch", "das Wasser", "der Tee") },
    { id: "de-u02-milch", type: "word", pos: "noun", gender: "f", plural: "die Milch", target: "die Milch", gloss: { es: "la leche", en: "the milk" }, distractors: D3("der Kaffee", "das Brot", "die Butter") },
    { id: "de-u02-brot", type: "word", pos: "noun", gender: "n", plural: "die Brote", target: "das Brot", gloss: { es: "el pan", en: "the bread" }, distractors: D3("die Milch", "der Käse", "das Wasser") },
    { id: "de-u02-einen", type: "phrase", pos: "phrase", target: "einen Kaffee, bitte", gloss: { es: "un café, por favor", en: "a coffee, please" }, accept: [{ text: "ein Kaffee, bitte", verdict: "almost", feedback: { es: "Con «möchte/nehme» va acusativo: einen Kaffee.", en: "It's the object, so accusative: einen Kaffee." } }], distractors: D3("ein", "der", "danke") },
    { id: "de-u02-zahlen", type: "word", pos: "verb", target: "zahlen", gloss: { es: "pagar", en: "to pay" }, distractors: D3("zählen", "zeigen", "sagen") },
    { id: "de-u02-stadt", type: "word", pos: "noun", gender: "f", plural: "die Städte", target: "die Stadt", gloss: { es: "la ciudad", en: "the city" }, distractors: D3("der Staat", "die Straße", "das Land") },
    { id: "de-u02-kino", type: "phrase", pos: "phrase", target: "im Kino", gloss: { es: "en el cine", en: "at the cinema" }, distractors: D3("in", "dem", "am") },
    { id: "de-u02-dialog", type: "dialogue", target: "Was möchten Sie?", gloss: { es: "¿Qué desea?", en: "What would you like?" }, turns: [
      { who: "A", target: "Was möchten Sie?", gloss: { es: "¿Qué desea?", en: "What would you like?" } },
      { who: "B", target: "Einen Kaffee, bitte.", gloss: { es: "Un café, por favor.", en: "A coffee, please." } },
    ], question: { prompt: { es: "¿Qué pide B?", en: "What does B order?" }, options: [{ es: "un café", en: "a coffee" }, { es: "un té", en: "a tea" }, { es: "agua", en: "water" }], answer: 0 } },
  ]),
];

const BAND_B: Record<Cefr, number> = { A0: -2.5, "A1.1": -1.5, "A1.2": -0.5, A2: 0.5, B1: 1.5, B2: 2.5 };
const BANDS: Cefr[] = ["A0", "A1.1", "A1.2", "A2", "B1"];

function placementBank(lang: TargetLang, units: Unit[]): PlacementItem[] {
  const out: PlacementItem[] = [];
  const skills: PlacementItem["skill"][] = ["vocab", "vocab", "grammar", "grammar", "listening", "reading"];
  const offsets = [-0.3, 0.2, -0.1, 0.3, 0, -0.2];
  let n = 1;
  for (const band of BANDS) {
    skills.forEach((skill, k) => {
      const seedUnit = units.find((u) => u.cefr === band);
      out.push({
        id: `${lang}-p-${String(n).padStart(2, "0")}`,
        lang,
        cefr: band,
        b: BAND_B[band] + offsets[k],
        skill,
        kind: skill === "listening" ? "listen" : skill === "reading" ? "cloze" : "mcq",
        stem: skill === "reading" ? `Frase ___ ${n}` : `parola${n}`,
        spoken: skill === "listening" ? `parola ${n}` : undefined,
        mcq: { prompt: { es: `Pregunta ${n}`, en: `Question ${n}` }, options: ["a", "b", "c", { es: "no sé", en: "not sure" }], answer: 0 },
        seeds: seedUnit && k === 0 ? [seedUnit.items[0].id] : undefined,
        falseFriend: lang === "it" && k === 0 ? true : undefined,
      });
      n++;
    });
  }
  return out;
}

export const itCourse: CoursePack = {
  lang: "it",
  version: "0.0.1-fixture",
  units: itUnits,
  placement: placementBank("it", itUnits),
  lexicon: {
    closedClass: ["il", "lo", "la", "i", "gli", "le", "l", "un", "uno", "una", "di", "a", "da", "in", "con", "su", "per", "del", "al", "dal", "nel", "sul", "della", "alla", "sono", "ho", "è", "sei", "io", "tu", "lei", "lui"],
    minimalPairs: [["nono", "nonno"], ["pala", "palla"], ["caro", "carro"]],
  },
};

export const deCourse: CoursePack = {
  lang: "de",
  version: "0.0.1-fixture",
  units: deUnits,
  placement: placementBank("de", deUnits),
  lexicon: {
    closedClass: ["der", "die", "das", "den", "dem", "des", "ein", "eine", "einen", "einem", "einer", "im", "am", "zum", "zur", "in", "an", "zu", "von", "mit", "bei", "ich", "du", "sie", "er", "es", "wir", "ihr", "bin", "bist", "ist", "sind", "habe", "hast", "hat"],
    minimalPairs: [["schon", "schön"], ["zahlen", "zählen"], ["Staat", "Stadt"], ["Bar", "Bär"]],
  },
};

export const fixtureCourses: Record<TargetLang, CoursePack> = { it: itCourse, de: deCourse };
