import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u06",
  lang: "de",
  index: 6,
  cefr: "A1.1",
  title: { target: "Wohnen", es: "La vivienda", en: "Home" },
  canDo: [
    { es: "Puedo describir mi casa o apartamento: habitaciones, muebles y cómo es.", en: "I can describe my flat: rooms, furniture and what it's like." },
    { es: "Sé formar el plural y elegir entre nicht y kein.", en: "I can form plurals and choose between nicht and kein." },
  ],
  icon: "🏠",
  items: build("de", 6, "A1.1", [
    // ── Rooms ────────────────────────────────────────────────
    {
      id: "wohnung", type: "word", pos: "noun", target: "die Wohnung", gender: "f", plural: "die Wohnungen",
      gloss: { es: "el apartamento (departamento)", en: "the flat / apartment" },
      distractors: ["der Wohnung", "das Wohnzimmer", "die Wohnungen"],
      note: { es: "-ung siempre es femenino: die Wohnung, die Rechnung.", en: "-ung nouns are always feminine: die Wohnung, die Rechnung." },
      tags: ["home", "goethe-a1"],
    },
    {
      id: "zimmer", type: "word", pos: "noun", target: "das Zimmer", gender: "n", plural: "die Zimmer",
      gloss: { es: "la habitación", en: "the room" },
      distractors: ["der Zimmer", "der Eimer", "die Zimmer"],
      note: { es: "Plural igual: die Zimmer.", en: "Same in the plural: die Zimmer." },
      tags: ["home", "goethe-a1"],
    },
    {
      id: "schlafzimmer", type: "word", pos: "noun", target: "das Schlafzimmer", gender: "n", plural: "die Schlafzimmer",
      gloss: { es: "el dormitorio", en: "the bedroom" },
      distractors: ["die Schlafzimmer", "das Wohnzimmer", "der Schlafsack"],
      note: { es: "schlafen (dormir) + das Zimmer → das Schlafzimmer.", en: "schlafen (to sleep) + das Zimmer → das Schlafzimmer." },
      tags: ["home", "compound"],
    },
    {
      id: "kueche", type: "word", pos: "noun", target: "die Küche", gender: "f", plural: "die Küchen",
      gloss: { es: "la cocina", en: "the kitchen" },
      distractors: ["der Kuchen", "die Kirche", "die Küchen"],
      note: { es: "Ojo: der Kuchen = el pastel (la torta); die Küche = la cocina.", en: "Careful: der Kuchen = cake; die Küche = kitchen." },
      tags: ["home", "goethe-a1"],
    },
    {
      id: "bad", type: "word", pos: "noun", target: "das Bad", gender: "n", plural: "die Bäder",
      gloss: { es: "el baño", en: "the bathroom" },
      distractors: ["der Bad", "das Bett", "das Rad"],
      note: { es: "También «das Badezimmer».", en: "False friend: Bad = bath(room), not 'bad' (schlecht)." },
      tags: ["home", "goethe-a1"],
    },

    // ── Furniture ────────────────────────────────────────────
    {
      id: "tisch", type: "word", pos: "noun", target: "der Tisch", gender: "m", plural: "die Tische",
      gloss: { es: "la mesa", en: "the table" },
      distractors: ["die Tisch", "der Fisch", "die Tasche"],
      note: { es: "¡Masculino, aunque en español sea «la mesa»!", en: "Masculine: der Tisch." },
      tags: ["home", "furniture", "goethe-a1"],
    },
    {
      id: "stuhl", type: "word", pos: "noun", target: "der Stuhl", gender: "m", plural: "die Stühle",
      gloss: { es: "la silla", en: "the chair" },
      distractors: ["die Stuhl", "der Stahl", "die Stühle"],
      tags: ["home", "furniture", "goethe-a1"],
    },
    {
      id: "bett", type: "word", pos: "noun", target: "das Bett", gender: "n", plural: "die Betten",
      gloss: { es: "la cama", en: "the bed" },
      distractors: ["der Bett", "das Beet", "das Brett"],
      tags: ["home", "furniture", "goethe-a1"],
    },
    {
      id: "sofa", type: "word", pos: "noun", target: "das Sofa", gender: "n", plural: "die Sofas",
      gloss: { es: "el sofá", en: "the sofa" },
      distractors: ["die Sofa", "der Sessel", "das Soda"],
      tags: ["home", "furniture", "goethe-a1"],
    },

    // ── Adjectives ───────────────────────────────────────────
    {
      id: "gross", type: "word", pos: "adj", target: "groß",
      gloss: { es: "grande", en: "big / large" },
      distractors: ["grob", "Gras", "klein"],
      tags: ["describe", "goethe-a1"],
    },
    {
      id: "klein", type: "word", pos: "adj", target: "klein",
      gloss: { es: "pequeño/a", en: "small" },
      distractors: ["kein", "rein", "groß"],
      tags: ["describe", "goethe-a1"],
    },
    {
      id: "neu", type: "word", pos: "adj", target: "neu",
      gloss: { es: "nuevo/a", en: "new" },
      distractors: ["neun", "nie", "alt"],
      tags: ["describe", "goethe-a1"],
    },
    {
      id: "alt", type: "word", pos: "adj", target: "alt",
      gloss: { es: "viejo/a, antiguo/a", en: "old" },
      distractors: ["alle", "als", "neu"],
      tags: ["describe", "goethe-a1"],
    },
    {
      id: "hell", type: "word", pos: "adj", target: "hell",
      gloss: { es: "luminoso/a, claro/a", en: "bright / light" },
      distractors: ["hallo", "Held", "dunkel"],
      note: { es: "Lo contrario: dunkel (oscuro).", en: "False friend: hell = bright. Hell is 'die Hölle'." },
      tags: ["describe", "false-friend", "goethe-a1"],
    },
    {
      id: "dunkel", type: "word", pos: "adj", target: "dunkel",
      gloss: { es: "oscuro/a", en: "dark" },
      distractors: ["Dunst", "dünn", "hell"],
      tags: ["describe", "goethe-a1"],
    },
    {
      id: "teuer", type: "word", pos: "adj", target: "teuer",
      gloss: { es: "caro/a", en: "expensive" },
      distractors: ["treu", "Tür", "billig"],
      tags: ["describe", "money", "goethe-a1"],
    },
    {
      id: "billig", type: "word", pos: "adj", target: "billig",
      gloss: { es: "barato/a", en: "cheap" },
      distractors: ["bitte", "Bild", "teuer"],
      note: { es: "Más neutro y positivo: günstig.", en: "More neutral (and positive): günstig." },
      tags: ["describe", "money", "goethe-a1"],
    },
    {
      id: "bahnhof", legacyId: "de-bahnhof", type: "word", pos: "noun", target: "der Bahnhof", gender: "m", plural: "die Bahnhöfe",
      gloss: { es: "la estación de tren", en: "the train station" },
      distractors: ["der Bauernhof", "die Bahn", "der Flughafen"],
      example: {
        target: "Die Wohnung ist nah am Bahnhof.",
        gloss: { es: "El apartamento está cerca de la estación.", en: "The flat is close to the station." },
      },
      note: { es: "La estación central = der Hauptbahnhof (Hbf).", en: "Main station = der Hauptbahnhof (Hbf)." },
      tags: ["town", "travel", "goethe-a1"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "klein-aber-hell", type: "sentence", target: "Die Wohnung ist klein, aber hell.",
      gloss: { es: "El apartamento es pequeño pero luminoso.", en: "The flat is small but bright." },
      accept: [{ text: "Die Wohnung ist klein aber hell." }],
      errors: [{
        text: "Die Wohnung ist kleine, aber helle.",
        feedback: { es: "Tras «sein» el adjetivo no cambia: ist klein, ist hell.", en: "After 'sein' the adjective has no ending: ist klein, ist hell." },
      }],
      distractors: ["Die Wohnung ist kleine, aber helle.", "Die Wohnung sind klein, aber hell.", "Das Wohnung ist klein, aber hell."],
      tags: ["home", "describe"],
    },
    {
      id: "nicht-teuer", type: "sentence", target: "Das Zimmer ist nicht teuer.",
      gloss: { es: "La habitación no es cara.", en: "The room isn't expensive." },
      errors: [{
        text: "Das Zimmer ist kein teuer.",
        feedback: { es: "Con adjetivos se usa «nicht»: nicht teuer.", en: "Adjectives are negated with 'nicht': nicht teuer." },
      }],
      distractors: ["Das Zimmer ist kein teuer.", "Das Zimmer nicht ist teuer.", "Der Zimmer ist nicht teuer."],
      tags: ["home", "negation"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-plural", type: "pattern", target: "der Tisch → die Tische",
      gloss: { es: "el plural", en: "plural forms" },
      pattern: {
        rule: {
          es: "Hay varias terminaciones: -e (Tische), -(e)n (Wohnungen, Betten), -er con diéresis (Bäder), -s (Sofas) o ninguna (Zimmer). El artículo plural es siempre «die», así que aprende el plural con la palabra.",
          en: "German has several plural endings: -e (Tische), -(e)n (Wohnungen, Betten), -er with umlaut (Bäder), -s (Sofas) or none (Zimmer). The plural article is always 'die', so learn the plural with the noun.",
        },
        table: [["der Tisch", "die Tische"], ["die Wohnung", "die Wohnungen"], ["das Bett", "die Betten"], ["das Bad", "die Bäder"], ["das Zimmer", "die Zimmer"], ["das Sofa", "die Sofas"]],
      },
      question: {
        prompt: { es: "El plural de «der Stuhl» es…", en: "The plural of 'der Stuhl' is…" },
        options: ["die Stühle", "die Stuhls", "der Stühle", "die Stuhlen"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "plural"],
    },
    {
      id: "pat-nicht-kein", type: "pattern", target: "nicht · kein",
      gloss: { es: "negar: nicht o kein", en: "negation: nicht or kein" },
      pattern: {
        rule: {
          es: "«kein» niega un sustantivo con ein o sin artículo: Das ist kein Bad. «nicht» niega verbos, adjetivos y lo demás: Die Wohnung ist nicht groß.",
          en: "'kein' negates a noun with ein or no article: Das ist kein Bad. 'nicht' negates verbs, adjectives and everything else: Die Wohnung ist nicht groß.",
        },
        table: [["Das ist ein Tisch.", "Das ist kein Tisch."], ["Die Küche ist groß.", "Die Küche ist nicht groß."]],
      },
      question: {
        prompt: { es: "Completa: «Die Wohnung hat ___ Balkon.» (der Balkon)", en: "Complete: 'Die Wohnung hat ___ Balkon.' (der Balkon)" },
        options: ["keinen", "nicht", "kein", "keine"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "negation", "accusative"],
    },
    {
      id: "pat-komposita", type: "pattern", target: "die Küche + der Tisch = der Küchentisch",
      gloss: { es: "sustantivos compuestos", en: "compound nouns" },
      pattern: {
        rule: {
          es: "En una palabra compuesta, la última parte decide el género: die Küche + der Tisch = der Küchentisch.",
          en: "In a compound noun, the last part decides the gender: die Küche + der Tisch = der Küchentisch.",
        },
        table: [["das Wohnzimmer", "wohnen + das Zimmer"], ["der Küchentisch", "die Küche + der Tisch"], ["die Haustür", "das Haus + die Tür"]],
      },
      question: {
        prompt: { es: "¿Qué artículo? «___ Küchenstuhl»", en: "Which article? '___ Küchenstuhl'" },
        options: ["der", "die", "das"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "compound", "gender"],
    },

    // ── Sound ────────────────────────────────────────────────
    {
      id: "s-st-sp", type: "sound", target: "Straße",
      gloss: { es: "calle", en: "street" },
      distractors: ["Schtraße", "Strahse", "Sträße"],
      note: {
        es: "Al inicio de palabra, st y sp suenan «sht» y «shp»: Straße, Stuhl, sprechen. sch = «sh»: Schlafzimmer.",
        en: "At the start of a word, st and sp sound like 'sht' and 'shp': Straße, Stuhl, sprechen. sch = 'sh': Schlafzimmer.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound"],
    },

    // ── Listening ────────────────────────────────────────────
    {
      id: "lis-anzeige", type: "listening",
      target: "Schöne Wohnung zu vermieten: drei Zimmer, Küche, Bad. Hell und ruhig, nicht teuer: achthundert Euro im Monat.",
      gloss: {
        es: "Se alquila apartamento lindo: tres habitaciones, cocina, baño. Luminoso y tranquilo, no es caro: ochocientos euros al mes.",
        en: "Nice flat to rent: three rooms, kitchen, bathroom. Bright and quiet, not expensive: eight hundred euros a month.",
      },
      question: {
        prompt: { es: "¿Cuánto cuesta al mes?", en: "How much is it per month?" },
        options: [
          { es: "800 €", en: "€800" },
          { es: "300 €", en: "€300" },
          { es: "3000 €", en: "€3,000" },
          { es: "80 €", en: "€80" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "home"],
    },
    {
      id: "br-rock", legacyId: "de-f-rock", type: "bridge", onlyFor: "en", target: "der Rock",
      gloss: { es: "la falda (pollera)", en: "the skirt" },
      question: {
        prompt: { es: "«der Rock» significa…", en: "'der Rock' means…" },
        options: [
          { es: "la falda", en: "skirt" },
          { es: "la roca", en: "rock (stone)" },
          { es: "el rock (música)", en: "rock music" },
          { es: "el cohete", en: "rocket" },
        ],
        answer: 0,
      },
      note: { en: "A stone is 'der Stein'; rock music is 'die Rockmusik'." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-art", legacyId: "de-f-art", type: "bridge", onlyFor: "en", target: "die Art",
      gloss: { es: "el tipo, la clase", en: "type / kind" },
      question: {
        prompt: { es: "«die Art» significa…", en: "'die Art' means…" },
        options: [
          { es: "el tipo, la clase", en: "type / kind" },
          { es: "el arte", en: "art" },
          { es: "el artista", en: "artist" },
          { es: "la artesanía", en: "craft" },
        ],
        answer: 0,
      },
      note: { en: "Art (painting etc.) is 'die Kunst'." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
