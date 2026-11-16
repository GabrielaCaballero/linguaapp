// Tap a word to see its meaning (like Duolingo's dotted underline). The dictionary is built from the
// course's own words and phrases, plus a short hand-written list of the most common small words.
// Words it doesn't know get no underline: no hint is better than a wrong one.
import type { BaseLang, Item, TargetLang } from "@/content/schema";

type Small = Record<string, { es: string; en: string }>;

const IT: Small = {
  il: { es: "el", en: "the" }, lo: { es: "el / lo", en: "the / it" }, la: { es: "la", en: "the / her" }, "l'": { es: "el / la", en: "the" },
  i: { es: "los", en: "the" }, gli: { es: "los / le", en: "the / to him" }, le: { es: "las / le", en: "the / to her" },
  un: { es: "un", en: "a" }, uno: { es: "un / uno", en: "a / one" }, una: { es: "una", en: "a / one" }, "un'": { es: "una", en: "a" },
  di: { es: "de", en: "of" }, a: { es: "a / en", en: "to / at / in" }, da: { es: "de / desde / en casa de", en: "from / at" }, in: { es: "en", en: "in" },
  con: { es: "con", en: "with" }, su: { es: "sobre", en: "on" }, per: { es: "para / por", en: "for" },
  del: { es: "del", en: "of the" }, della: { es: "de la", en: "of the" }, al: { es: "al", en: "to the" }, alla: { es: "a la", en: "to the" },
  nel: { es: "en el", en: "in the" }, nella: { es: "en la", en: "in the" },
  io: { es: "yo", en: "I" }, tu: { es: "tú", en: "you" }, lui: { es: "él", en: "he" }, lei: { es: "ella", en: "she" }, Lei: { es: "usted", en: "you (formal)" },
  noi: { es: "nosotros", en: "we" }, voi: { es: "ustedes", en: "you (plural)" }, loro: { es: "ellos", en: "they" },
  mi: { es: "me", en: "me / myself" }, ti: { es: "te", en: "you / yourself" }, si: { es: "se", en: "oneself" }, ci: { es: "nos / ahí", en: "us / there" },
  e: { es: "y", en: "and" }, ma: { es: "pero", en: "but" }, o: { es: "o", en: "or" }, non: { es: "no", en: "not" }, che: { es: "que", en: "that / what" },
  è: { es: "es / está", en: "is" }, sono: { es: "soy / son", en: "I am / they are" }, sei: { es: "eres", en: "you are" }, siamo: { es: "somos", en: "we are" },
  ho: { es: "tengo / he", en: "I have" }, hai: { es: "tienes / has", en: "you have" }, ha: { es: "tiene / ha", en: "has" }, abbiamo: { es: "tenemos", en: "we have" },
  come: { es: "cómo / como", en: "how / like" }, dove: { es: "dónde", en: "where" }, quando: { es: "cuándo", en: "when" }, perché: { es: "por qué / porque", en: "why / because" },
  molto: { es: "mucho / muy", en: "very / a lot" }, anche: { es: "también", en: "also" }, sì: { es: "sí", en: "yes" }, no: { es: "no", en: "no" },
  questo: { es: "este", en: "this" }, questa: { es: "esta", en: "this" }, mio: { es: "mi", en: "my" }, mia: { es: "mi", en: "my" },
};

const DE: Small = {
  der: { es: "el", en: "the" }, die: { es: "la / los", en: "the" }, das: { es: "el / eso", en: "the / that" }, den: { es: "al / a los", en: "the" },
  dem: { es: "al", en: "(to) the" }, des: { es: "del", en: "of the" }, ein: { es: "un", en: "a" }, eine: { es: "una", en: "a" }, einen: { es: "un", en: "a" },
  kein: { es: "ningún / no", en: "no" }, keine: { es: "ninguna / no", en: "no" },
  ich: { es: "yo", en: "I" }, du: { es: "tú", en: "you" }, er: { es: "él", en: "he" }, sie: { es: "ella / ellos", en: "she / they" }, Sie: { es: "usted", en: "you (formal)" },
  es: { es: "eso / ello", en: "it" }, wir: { es: "nosotros", en: "we" }, ihr: { es: "ustedes / su", en: "you (plural) / her" },
  mich: { es: "me", en: "me" }, mir: { es: "me / a mí", en: "(to) me" }, dich: { es: "te", en: "you" }, dir: { es: "te / a ti", en: "(to) you" },
  und: { es: "y", en: "and" }, aber: { es: "pero", en: "but" }, oder: { es: "o", en: "or" }, nicht: { es: "no", en: "not" }, auch: { es: "también", en: "also" },
  ist: { es: "es / está", en: "is" }, bin: { es: "soy / estoy", en: "am" }, bist: { es: "eres / estás", en: "are" }, sind: { es: "somos / son", en: "are" },
  habe: { es: "tengo", en: "have" }, hast: { es: "tienes", en: "have" }, hat: { es: "tiene", en: "has" }, haben: { es: "tener", en: "have" },
  in: { es: "en", en: "in" }, im: { es: "en el", en: "in the" }, mit: { es: "con", en: "with" }, aus: { es: "de / desde", en: "from" }, nach: { es: "a / después de", en: "to / after" },
  zu: { es: "a / demasiado", en: "to / too" }, zum: { es: "al", en: "to the" }, zur: { es: "a la", en: "to the" }, von: { es: "de", en: "of / from" }, für: { es: "para", en: "for" },
  wie: { es: "cómo / como", en: "how / like" }, wo: { es: "dónde", en: "where" }, woher: { es: "de dónde", en: "where from" }, was: { es: "qué", en: "what" }, wann: { es: "cuándo", en: "when" },
  ja: { es: "sí", en: "yes" }, nein: { es: "no", en: "no" }, sehr: { es: "muy", en: "very" }, gern: { es: "con gusto", en: "gladly" },
  mein: { es: "mi", en: "my" }, meine: { es: "mi / mis", en: "my" }, dein: { es: "tu", en: "your" },
};

const SMALL: Record<TargetLang, Small> = { it: IT, de: DE };

export type Glossary = Map<string, string>;

const norm = (w: string) => w.toLowerCase().replace(/[.,!?;:«»"“”()¿¡…]/g, "").trim();

const ART = /^(il|lo|la|l'|i|gli|le|un|uno|una|un'|der|die|das|ein|eine)\s+/i;

const cache = new Map<string, Glossary>();

/** word (lower case) → meaning in the learner's base language. */
export function glossary(lang: TargetLang, base: BaseLang, items: Item[]): Glossary {
  const key = `${lang}-${base}-${items.length}`;
  const hit = cache.get(key);
  if (hit) return hit;
  const g: Glossary = new Map();
  for (const [w, m] of Object.entries(SMALL[lang])) g.set(w === "Lei" || w === "Sie" ? w : w.toLowerCase(), m[base]);
  for (const i of items) {
    if (i.type !== "word" && i.type !== "phrase") continue;
    const meaning = i.gloss[base];
    if (!meaning) continue;
    const t = norm(i.target);
    if (!g.has(t)) g.set(t, meaning);
    const bare = t.replace(ART, "");
    if (bare !== t && !g.has(bare)) g.set(bare, meaning);
    if (i.plural) {
      const p = norm(i.plural).replace(ART, "");
      if (!g.has(p)) g.set(p, meaning);
    }
  }
  cache.set(key, g);
  return g;
}

export interface Token { text: string; meaning?: string }

/** Split a sentence into words and spaces; words (or 2–3 word phrases) the glossary knows get a meaning. */
export function tokenize(sentence: string, g: Glossary): Token[] {
  const parts = sentence.split(/(\s+)/);
  const out: Token[] = [];
  for (let k = 0; k < parts.length; k++) {
    const p = parts[k];
    if (!p.trim()) {
      out.push({ text: p });
      continue;
    }
    // longest phrase first (e.g. "come stai", "Guten Morgen")
    let done = false;
    for (const n of [3, 2]) {
      const span = parts.slice(k, k + n * 2 - 1);
      if (span.length < n * 2 - 1) continue;
      const phrase = span.join("");
      const m = g.get(norm(phrase));
      if (m) {
        out.push({ text: phrase, meaning: m });
        k += n * 2 - 2;
        done = true;
        break;
      }
    }
    if (done) continue;
    const exact = p.replace(/[.,!?;:«»"“”()¿¡…]/g, "");
    const m = g.get(exact === "Lei" || exact === "Sie" ? exact : norm(p)) ?? (p.includes("'") ? g.get(norm(p.split("'")[0] + "'")) : undefined);
    out.push({ text: p, meaning: m });
  }
  return out;
}
