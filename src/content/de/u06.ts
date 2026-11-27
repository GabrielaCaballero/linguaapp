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
    // ── Rooms & things ───────────────────────────────────────
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
    {
      id: "fenster", type: "word", pos: "noun", target: "das Fenster", gender: "n", plural: "die Fenster",
      gloss: { es: "la ventana", en: "the window" },
      distractors: ["der Fenster", "die Fenster", "das Futter"],
      note: { es: "Neutro, y el plural no cambia: die Fenster.", en: "Neuter, and the plural doesn't change: die Fenster." },
      tags: ["home", "goethe-a1"],
    },
    {
      id: "balkon", type: "word", pos: "noun", target: "der Balkon", gender: "m", plural: "die Balkone",
      gloss: { es: "el balcón", en: "the balcony" },
      distractors: ["die Balkon", "das Balkon", "der Ballon"],
      note: { es: "Plural: die Balkone o die Balkons; las dos formas son correctas.", en: "Plural: die Balkone or die Balkons; both are correct." },
      tags: ["home", "goethe-a1"],
    },
    {
      id: "haus", type: "word", pos: "noun", target: "das Haus", gender: "n", plural: "die Häuser",
      gloss: { es: "la casa", en: "the house" },
      distractors: ["der Haus", "die Maus", "das Haar"],
      note: { es: "zu Hause = en casa; nach Hause = a casa.", en: "zu Hause = at home; nach Hause = (to) home." },
      tags: ["home", "goethe-a1"],
    },
    {
      id: "tuer", type: "word", pos: "noun", target: "die Tür", gender: "f", plural: "die Türen",
      gloss: { es: "la puerta", en: "the door" },
      distractors: ["der Tür", "das Tier", "die Tour"],
      tags: ["home", "goethe-a1"],
    },

    // ── What it's like ───────────────────────────────────────
    {
      id: "gross", type: "word", pos: "adj", target: "groß",
      gloss: { es: "grande", en: "big / large" },
      distractors: ["grob", "grau", "klein"],
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
      distractors: ["hallo", "schnell", "dunkel"],
      note: { es: "Lo contrario: dunkel (oscuro).", en: "False friend: hell = bright. Hell is 'die Hölle'." },
      tags: ["describe", "false-friend", "goethe-a1"],
    },
    {
      id: "dunkel", type: "word", pos: "adj", target: "dunkel",
      gloss: { es: "oscuro/a", en: "dark" },
      distractors: ["dumm", "dünn", "hell"],
      tags: ["describe", "goethe-a1"],
    },
    {
      id: "teuer", type: "word", pos: "adj", target: "teuer",
      gloss: { es: "caro/a", en: "expensive" },
      distractors: ["treu", "neu", "billig"],
      tags: ["describe", "money", "goethe-a1"],
    },
    {
      id: "billig", type: "word", pos: "adj", target: "billig",
      gloss: { es: "barato/a", en: "cheap" },
      distractors: ["bitte", "bissig", "teuer"],
      note: { es: "Más neutro y positivo: günstig.", en: "More neutral (and positive): günstig." },
      tags: ["describe", "money", "goethe-a1"],
    },
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

    // ── Plural, step 1: always die ───────────────────────────
    {
      id: "pat-plural-die", type: "pattern", target: "der Tisch → die Tische",
      gloss: { es: "el plural siempre lleva «die»", en: "the plural always takes 'die'" },
      pattern: {
        rule: {
          es: "En plural, el artículo es siempre die, sea la palabra der, die o das: der Tisch → die Tische, das Bett → die Betten.",
          en: "In the plural the article is always die, whether the noun is der, die or das: der Tisch → die Tische, das Bett → die Betten.",
        },
        table: [["der Tisch", "die Tische"], ["die Küche", "die Küchen"], ["das Bett", "die Betten"]],
        meanings: [
          { es: "la mesa → las mesas", en: "the table → the tables" },
          { es: "la cocina → las cocinas", en: "the kitchen → the kitchens" },
          { es: "la cama → las camas", en: "the bed → the beds" },
        ],
      },
      question: {
        prompt: { es: "El plural de «das Zimmer» es…", en: "The plural of 'das Zimmer' is…" },
        options: ["die Zimmer", "das Zimmer", "der Zimmer"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-plural"], tags: ["grammar", "plural"],
    },
    {
      id: "die-zimmer-sind-gross", type: "sentence", target: "Die Zimmer sind groß.",
      gloss: { es: "Las habitaciones son grandes.", en: "The rooms are big." },
      errors: [{ text: "Die Zimmer ist groß.", feedback: { es: "Plural → sind: Die Zimmer sind groß.", en: "Plural → sind: Die Zimmer sind groß." } }],
      distractors: ["Die Zimmer ist groß.", "Das Zimmer sind groß.", "Die Zimmern sind groß."],
      tags: ["home", "plural"],
    },

    // ── Plural, step 2: the endings ──────────────────────────
    {
      id: "pat-plural", type: "pattern", target: "der Tisch → die Tische",
      gloss: { es: "el plural", en: "plural forms" },
      pattern: {
        rule: {
          es: "La terminación del plural cambia de palabra a palabra: -e (Tische), -(e)n (Wohnungen, Betten), -s (Sofas) o ninguna (Zimmer). Por eso cada sustantivo se aprende con su plural.",
          en: "The plural ending varies from noun to noun: -e (Tische), -(e)n (Wohnungen, Betten), -s (Sofas) or none (Zimmer). That's why you learn every noun with its plural.",
        },
        table: [["der Tisch", "die Tische"], ["die Wohnung", "die Wohnungen"], ["das Bett", "die Betten"], ["das Zimmer", "die Zimmer"], ["das Sofa", "die Sofas"]],
        meanings: [
          { es: "-e: las mesas", en: "-e: the tables" },
          { es: "-en: los apartamentos", en: "-en: the flats" },
          { es: "-en: las camas", en: "-en: the beds" },
          { es: "sin cambio: las habitaciones", en: "no change: the rooms" },
          { es: "-s: los sofás", en: "-s: the sofas" },
        ],
      },
      question: {
        prompt: { es: "El plural de «das Fenster» es…", en: "The plural of 'das Fenster' is…" },
        options: ["die Fenster", "die Fensters", "die Fenstern", "der Fenster"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-plural"], tags: ["grammar", "plural"],
    },
    {
      id: "drei-zimmer", type: "sentence", target: "Die Wohnung hat drei Zimmer und zwei Balkone.",
      gloss: { es: "El apartamento tiene tres habitaciones y dos balcones.", en: "The flat has three rooms and two balconies." },
      accept: [{ text: "Die Wohnung hat drei Zimmer und zwei Balkons." }],
      distractors: ["Die Wohnung hat drei Zimmern und zwei Balkone.", "Die Wohnung hat drei Zimmer und zwei Balkon.", "Die Wohnung ist drei Zimmer und zwei Balkone."],
      tags: ["home", "plural"],
    },

    // ── Plural, step 3: some add an umlaut ───────────────────
    {
      id: "pat-plural-umlaut", type: "pattern", target: "der Stuhl → die Stühle",
      gloss: { es: "plurales con diéresis (¨)", en: "plurals with an umlaut (¨)" },
      pattern: {
        rule: {
          es: "Algunos plurales ponen diéresis en la vocal: a → ä, o → ö, u → ü, au → äu. der Stuhl → die Stühle, das Bad → die Bäder, das Haus → die Häuser.",
          en: "Some plurals put an umlaut on the vowel: a → ä, o → ö, u → ü, au → äu. der Stuhl → die Stühle, das Bad → die Bäder, das Haus → die Häuser.",
        },
        table: [["der Stuhl", "die Stühle"], ["das Bad", "die Bäder"], ["das Haus", "die Häuser"]],
        meanings: [
          { es: "la silla → las sillas", en: "the chair → the chairs" },
          { es: "el baño → los baños", en: "the bathroom → the bathrooms" },
          { es: "la casa → las casas", en: "the house → the houses" },
        ],
      },
      question: {
        prompt: { es: "El plural de «der Stuhl» es…", en: "The plural of 'der Stuhl' is…" },
        options: ["die Stühle", "die Stuhls", "der Stühle", "die Stuhlen"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-plural"], tags: ["grammar", "plural", "umlaut"],
    },

    // ── nicht or kein ────────────────────────────────────────
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
    {
      id: "pat-nicht-kein", type: "pattern", target: "nicht · kein",
      gloss: { es: "negar: nicht o kein", en: "negation: nicht or kein" },
      pattern: {
        rule: {
          es: "«kein» niega un sustantivo con ein o sin artículo: Das ist kein Bad. «nicht» niega verbos, adjetivos y lo demás: Die Wohnung ist nicht groß.",
          en: "'kein' negates a noun with ein or no article: Das ist kein Bad. 'nicht' negates verbs, adjectives and everything else: Die Wohnung ist nicht groß.",
        },
        table: [["Das ist ein Tisch.", "Das ist kein Tisch."], ["Die Küche ist groß.", "Die Küche ist nicht groß."]],
        meanings: [
          { es: "Es una mesa. → No es una mesa.", en: "It's a table. → It's not a table." },
          { es: "La cocina es grande. → No es grande.", en: "The kitchen is big. → It isn't big." },
        ],
      },
      question: {
        prompt: { es: "Completa: «Die Wohnung hat ___ Balkon.» (der Balkon)", en: "Complete: 'Die Wohnung hat ___ Balkon.' (der Balkon)" },
        options: ["keinen", "nicht", "kein", "keine"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-nicht-kein"], tags: ["grammar", "negation", "accusative"],
    },
    {
      id: "kein-sofa", type: "sentence", target: "Das ist kein Sofa, das ist ein Bett.",
      gloss: { es: "Esto no es un sofá, es una cama.", en: "That's not a sofa, it's a bed." },
      errors: [{ text: "Das ist nicht ein Sofa, das ist ein Bett.", feedback: { es: "Un sustantivo con ein se niega con kein: kein Sofa.", en: "A noun with ein is negated with kein: kein Sofa." }, ruleId: "de-g-nicht-kein" }],
      distractors: ["Das ist nicht ein Sofa, das ist ein Bett.", "Das ist keine Sofa, das ist ein Bett.", "Das ist nicht Sofa, das ist ein Bett."],
      tags: ["home", "negation"],
    },

    // ── finden: du findest (stems in -t/-d) ──────────────────
    {
      id: "finden", type: "word", pos: "verb", target: "finden",
      gloss: { es: "encontrar / opinar (me parece…)", en: "to find / to think (opinion)" },
      forms: { ich: "finde", du: "findest", er: "findet", wir: "finden", ihr: "findet", sie: "finden" },
      distractors: ["fahren", "fangen", "binden"],
      note: { es: "Wie findest du die Wohnung? = ¿Qué te parece el apartamento?", en: "Wie findest du die Wohnung? = What do you think of the flat?" },
      tags: ["verb", "opinion", "goethe-a1"],
    },
    {
      id: "pat-findest", type: "pattern", target: "du findest, er findet",
      gloss: { es: "raíz en -t o -d: du findest", en: "stem in -t or -d: du findest" },
      pattern: {
        rule: {
          es: "Si la raíz termina en -t o -d, se pone una -e- antes de -st y -t para poder pronunciarlo: find- → du findest, er findet.",
          en: "If the stem ends in -t or -d, add an -e- before -st and -t so it can be pronounced: find- → du findest, er findet.",
        },
        table: [["ich", "finde"], ["du", "findest"], ["er / sie / es", "findet"], ["ihr", "findet"]],
        meanings: [
          { es: "yo encuentro / opino", en: "I find / think" },
          { es: "tú encuentras / opinas", en: "you find / think (du)" },
          { es: "él, ella encuentra / opina", en: "he, she finds / thinks" },
          { es: "ustedes encuentran / opinan (de confianza)", en: "you find / think (several friends)" },
        ],
      },
      question: {
        prompt: { es: "Completa: «Wie ___ du die Wohnung?»", en: "Complete: 'Wie ___ du die Wohnung?'" },
        options: ["findest", "findst", "findet", "finde"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-praesens"], tags: ["grammar", "present"],
    },
    {
      id: "tab-finden", type: "paradigm", target: "finden — Präsens", spoken: "finden",
      gloss: { es: "finden (encontrar, opinar) — presente", en: "finden (to find) — present" },
      grammar: ["de-g-praesens"],
      paradigm: {
        caption: { es: "Conjuga «finden» (-e- antes de -st y -t)", en: "Conjugate finden (-e- before -st and -t)" },
        cells: [
          { label: "ich", answer: "finde", ruleId: "de-g-praesens" },
          { label: "du", answer: "findest", ruleId: "de-g-praesens" },
          { label: "er / sie / es", answer: "findet", ruleId: "de-g-praesens" },
          { label: "wir", answer: "finden", ruleId: "de-g-praesens" },
          { label: "ihr", answer: "findet", ruleId: "de-g-praesens" },
          { label: "sie / Sie", answer: "finden", ruleId: "de-g-praesens" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "ich-finde-schoen", type: "sentence", target: "Ich finde die Wohnung schön.",
      gloss: { es: "El apartamento me parece lindo.", en: "I think the flat is nice." },
      accept: [{ text: "Die Wohnung finde ich schön." }],
      distractors: ["Ich finde die Wohnung schon.", "Ich findet die Wohnung schön.", "Ich finde der Wohnung schön."],
      tags: ["home", "opinion"],
    },

    // ── Compound nouns ───────────────────────────────────────
    {
      id: "wohnzimmer", type: "word", pos: "noun", target: "das Wohnzimmer", gender: "n", plural: "die Wohnzimmer",
      gloss: { es: "la sala (el living)", en: "the living room" },
      distractors: ["die Wohnzimmer", "das Schlafzimmer", "die Wohnung"],
      note: { es: "wohnen (vivir) + das Zimmer → das Wohnzimmer.", en: "wohnen (to live) + das Zimmer → das Wohnzimmer." },
      tags: ["home", "compound", "goethe-a1"],
    },
    {
      id: "schlafzimmer", type: "word", pos: "noun", target: "das Schlafzimmer", gender: "n", plural: "die Schlafzimmer",
      gloss: { es: "el dormitorio", en: "the bedroom" },
      distractors: ["die Schlafzimmer", "das Wohnzimmer", "der Schlafsack"],
      note: { es: "schlafen (dormir) + das Zimmer → das Schlafzimmer.", en: "schlafen (to sleep) + das Zimmer → das Schlafzimmer." },
      tags: ["home", "compound"],
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
        meanings: [
          { es: "la sala = vivir + la habitación", en: "the living room = to live + the room" },
          { es: "la mesa de cocina = la cocina + la mesa", en: "the kitchen table = the kitchen + the table" },
          { es: "la puerta de la casa = la casa + la puerta", en: "the front door = the house + the door" },
        ],
      },
      question: {
        prompt: { es: "«die Küche» + «der Stuhl» = la silla de cocina. ¿Cuál es correcta?", en: "'die Küche' + 'der Stuhl' = the kitchen chair. Which is right?" },
        options: ["der Küchenstuhl", "die Küchenstuhl", "das Küchenstuhl"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-komposita"], tags: ["grammar", "compound", "gender"],
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
