import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u15",
  lang: "de",
  index: 15,
  cefr: "B1",
  title: { target: "Menschen und Beziehungen", es: "Personas y relaciones", en: "People and relationships" },
  canDo: [
    { es: "Puedo describir a amigos, pareja y familia, y cómo nos llevamos.", en: "I can describe friends, partners and family, and how we get on." },
    { es: "Puedo dar detalles sobre personas y cosas con oraciones de relativo.", en: "I can give details about people and things with relative clauses." },
    { es: "Sé usar verbos con preposición (warten auf, sich freuen auf) y worauf / darauf.", en: "I can use verbs with prepositions (warten auf, sich freuen auf) and worauf / darauf." },
  ],
  icon: "🤝",
  items: build("de", 15, "B1", [
    // ── Relationships ────────────────────────────────────────
    {
      id: "beziehung", type: "word", pos: "noun", target: "die Beziehung", gender: "f", plural: "die Beziehungen",
      gloss: { es: "la relación", en: "the relationship" },
      distractors: ["der Beziehung", "die Erziehung", "die Bezahlung"],
      tags: ["relationships", "goethe-b1"],
    },
    {
      id: "freund", type: "word", pos: "noun", target: "der Freund", gender: "m", plural: "die Freunde",
      gloss: { es: "el amigo / el novio", en: "the friend / boyfriend" },
      accept: [{ text: "die Freundin" }],
      distractors: ["die Freund", "der Feind", "der Fremde"],
      note: { es: "«mein Freund» suele ser «mi novio»; un amigo = ein Freund (von mir).", en: "'mein Freund' usually means 'my boyfriend'; a friend = ein Freund (von mir)." },
      tags: ["relationships", "goethe-a1"],
    },
    {
      id: "sich-verlieben", type: "word", pos: "verb", target: "sich verlieben",
      gloss: { es: "enamorarse", en: "to fall in love" },
      forms: { pp: "hat sich verliebt" },
      distractors: ["sich verlieren", "sich verletzen", "sich verloben"],
      note: { es: "sich verlieben in + acusativo: sie hat sich in ihn verliebt. Ojo: sich verloben = comprometerse.", en: "sich verlieben in + accusative: sie hat sich in ihn verliebt. Careful: sich verloben = get engaged." },
      tags: ["relationships", "reflexive", "goethe-b1"],
    },
    {
      id: "heiraten", type: "word", pos: "verb", target: "heiraten",
      gloss: { es: "casarse", en: "to get married" },
      forms: { pp: "hat geheiratet" },
      distractors: ["heizen", "beraten", "reiten"],
      note: { es: "Sin preposición: Sie heiratet ihn (se casa con él).", en: "No preposition: Sie heiratet ihn (she's marrying him)." },
      tags: ["relationships", "goethe-a2"],
    },
    {
      id: "sich-trennen", type: "word", pos: "verb", target: "sich trennen",
      gloss: { es: "separarse", en: "to split up / separate" },
      distractors: ["sich treffen", "sich drehen", "sich wenden"],
      tags: ["relationships", "reflexive", "goethe-b1"],
    },
    {
      id: "sich-streiten", type: "word", pos: "verb", target: "sich streiten",
      gloss: { es: "pelearse, discutir", en: "to argue / quarrel" },
      forms: { pp: "hat sich gestritten" },
      distractors: ["streicheln", "sich strecken", "sich setzen"],
      tags: ["relationships", "reflexive", "goethe-b1"],
    },
    {
      id: "sich-freuen-auf", type: "phrase", pos: "phrase", target: "sich freuen auf",
      gloss: { es: "tener ganas de (algo que viene)", en: "to look forward to" },
      distractors: ["sich freuen über", "sich freuen an", "sich freuen von"],
      note: { es: "auf = algo futuro; über = algo que ya pasó o ya tienes: ich freue mich über das Geschenk.", en: "auf = something ahead; über = something that's happened or you have: ich freue mich über das Geschenk." },
      tags: ["relationships", "verb-preposition"],
    },
    {
      id: "warten-auf", type: "phrase", pos: "phrase", target: "warten auf",
      gloss: { es: "esperar (a alguien o algo)", en: "to wait for" },
      distractors: ["warten für", "warten an", "erwarten von"],
      tags: ["verb-preposition"],
    },
    {
      id: "sich-interessieren-fuer", type: "phrase", pos: "phrase", target: "sich interessieren für",
      gloss: { es: "interesarse por", en: "to be interested in" },
      distractors: ["sich interessieren in", "sich interessieren über", "interessant für"],
      tags: ["verb-preposition"],
    },
    {
      id: "eifersuechtig", type: "word", pos: "adj", target: "eifersüchtig",
      gloss: { es: "celoso/a", en: "jealous" },
      distractors: ["neugierig", "süchtig", "eilig"],
      tags: ["relationships", "character", "goethe-b1"],
    },
    {
      id: "zuverlaessig", type: "word", pos: "adj", target: "zuverlässig",
      gloss: { es: "confiable, responsable", en: "reliable" },
      distractors: ["zufällig", "zulässig", "zornig"],
      tags: ["character", "goethe-b1"],
    },
    {
      id: "vertrauen", type: "word", pos: "other", target: "das Vertrauen",
      gloss: { es: "la confianza", en: "trust" },
      distractors: ["das Verständnis", "das Verhalten", "die Vertretung"],
      tags: ["relationships", "goethe-b1"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "mann-den-ich", type: "sentence", target: "Das ist der Mann, den ich gestern kennengelernt habe.",
      gloss: { es: "Ese es el hombre que conocí ayer.", en: "That's the man I met yesterday." },
      errors: [{ text: "Das ist der Mann, der ich gestern kennengelernt habe.", feedback: { es: "En la relativa es objeto (acusativo): den.", en: "In the relative clause he's the object (accusative): den." } }],
      distractors: ["der", "dem", "kennenlernte"],
      tags: ["relative-clauses"],
    },
    {
      id: "frau-mit-der", type: "sentence", target: "Die Frau, mit der ich arbeite, kommt aus Italien.",
      gloss: { es: "La mujer con la que trabajo es de Italia.", en: "The woman I work with is from Italy." },
      errors: [{ text: "Die Frau, mit die ich arbeite, kommt aus Italien.", feedback: { es: "mit + dativo; femenino → der.", en: "mit + dative; feminine → der." } }],
      distractors: ["die", "dem", "kommen"],
      tags: ["relative-clauses", "dative"],
    },
    {
      id: "freue-mich-auf", type: "sentence", target: "Ich freue mich auf das Wochenende.",
      gloss: { es: "Tengo ganas de que llegue el fin de semana.", en: "I'm looking forward to the weekend." },
      accept: [{ text: "Ich freue mich aufs Wochenende." }],
      errors: [{ text: "Ich freue mich für das Wochenende.", feedback: { es: "Algo que viene: sich freuen auf.", en: "Something ahead: sich freuen auf." } }],
      distractors: ["für", "dem", "freut"],
      tags: ["verb-preposition", "reflexive"],
    },
    {
      id: "worauf-wartest-du", type: "sentence", register: "informal", target: "Worauf wartest du?",
      gloss: { es: "¿Qué estás esperando?", en: "What are you waiting for?" },
      accept: [{ text: "Auf was wartest du?", verdict: "almost", feedback: { es: "Coloquial; en estándar: worauf.", en: "Colloquial; standard German: worauf." } }],
      distractors: ["Was", "Wofür", "wartet"],
      tags: ["verb-preposition"],
    },
    {
      id: "wir-haben-uns-getrennt", type: "sentence", target: "Wir haben uns getrennt.",
      gloss: { es: "Nos separamos.", en: "We've split up." },
      distractors: ["sind", "getrennen", "euch"],
      tags: ["relationships", "reflexive"],
    },
    {
      id: "interessiere-mich-kunst", type: "sentence", target: "Ich interessiere mich für Kunst.",
      gloss: { es: "Me interesa el arte.", en: "I'm interested in art." },
      errors: [{ text: "Ich interessiere mich in Kunst.", feedback: { es: "sich interessieren für (no «in»).", en: "sich interessieren für (not 'in')." } }],
      distractors: ["in", "mir", "interessant"],
      tags: ["verb-preposition", "reflexive"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-relativsatz", type: "pattern", target: "der Mann, der … · den … · dem …",
      gloss: { es: "oraciones de relativo", en: "relative clauses" },
      pattern: {
        rule: {
          es: "El pronombre toma el género del sustantivo y el caso de su función en la relativa; el verbo va al final. Casi igual que el artículo, salvo dativo plural «denen».",
          en: "The pronoun takes the gender of the noun and the case of its role in the clause; the verb goes last. Same as the article except dative plural 'denen'.",
        },
        table: [["", "m", "f", "n", "pl"], ["Nom.", "der", "die", "das", "die"], ["Akk.", "den", "die", "das", "die"], ["Dat.", "dem", "der", "dem", "denen"]],
      },
      question: {
        prompt: { es: "Completa: «Das ist das Buch, ___ ich dir empfohlen habe.»", en: "Complete: 'Das ist das Buch, ___ ich dir empfohlen habe.'" },
        options: ["das", "dem", "der", "den"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "relative-clauses"],
    },
    {
      id: "pat-verben-praep", type: "pattern", target: "warten auf · denken an · sich freuen auf / über",
      gloss: { es: "verbos con preposición fija", en: "verbs with fixed prepositions" },
      pattern: {
        rule: {
          es: "Muchos verbos llevan una preposición fija que hay que aprender con el verbo: warten auf + Akk., denken an + Akk., Angst haben vor + Dat., sich interessieren für + Akk.",
          en: "Many verbs have a fixed preposition to learn with them: warten auf + acc., denken an + acc., Angst haben vor + dat., sich interessieren für + acc.",
        },
        table: [["warten auf", "Ich warte auf den Bus."], ["denken an", "Ich denke an dich."], ["Angst haben vor", "Sie hat Angst vor Hunden."], ["sich kümmern um", "Er kümmert sich um die Kinder."]],
      },
      question: {
        prompt: { es: "Completa: «Ich denke oft ___ meine Kindheit.»", en: "Complete: 'Ich denke oft ___ meine Kindheit.'" },
        options: ["an", "auf", "über", "von"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "verb-preposition"],
    },
    {
      id: "pat-wo-da", type: "pattern", target: "Worauf …? — Darauf. · Auf wen …? — Auf ihn.",
      gloss: { es: "worauf / darauf (cosas) y auf wen / auf ihn (personas)", en: "worauf / darauf (things) vs auf wen / auf ihn (people)" },
      pattern: {
        rule: {
          es: "Para cosas: wo(r) + preposición en preguntas (worauf, wofür) y da(r) + preposición en respuestas (darauf, dafür). Para personas: preposición + pronombre (auf wen? auf ihn).",
          en: "For things: wo(r) + preposition in questions (worauf, wofür) and da(r) + preposition in answers (darauf, dafür). For people: preposition + pronoun (auf wen? auf ihn).",
        },
        table: [["Sache / cosa", "Worauf wartest du? — Darauf."], ["Person / persona", "Auf wen wartest du? — Auf ihn."]],
      },
      question: {
        prompt: { es: "«Freust du dich auf den Urlaub?» — «Ja, ich freue mich sehr ___.»", en: "'Freust du dich auf den Urlaub?' — 'Ja, ich freue mich sehr ___.'" },
        options: ["darauf", "worauf", "dafür", "daran"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "verb-preposition"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-freundin", type: "listening",
      target: "Meine beste Freundin heißt Sara. Wir kennen uns seit der Schule. Sie ist sehr zuverlässig, und ich kann ihr alles erzählen.",
      gloss: {
        es: "Mi mejor amiga se llama Sara. Nos conocemos desde la escuela. Es muy confiable y le puedo contar todo.",
        en: "My best friend is called Sara. We've known each other since school. She's very reliable, and I can tell her everything.",
      },
      question: {
        prompt: { es: "¿Desde cuándo se conocen?", en: "How long have they known each other?" },
        options: [
          { es: "Desde la escuela", en: "Since school" },
          { es: "Desde el año pasado", en: "Since last year" },
          { es: "Desde la universidad", en: "Since university" },
          { es: "Desde que trabajan juntas", en: "Since they started working together" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "relationships"],
    },
    {
      id: "dlg-verliebt", type: "dialogue", register: "informal", target: "Wie schön!",
      gloss: { es: "¡Qué lindo!", en: "How lovely!" },
      turns: [
        { who: "A", target: "Du siehst so glücklich aus!", gloss: { es: "¡Te ves tan feliz!", en: "You look so happy!" } },
        { who: "B", target: "Ich habe mich verliebt! Er heißt Jonas.", gloss: { es: "¡Me enamoré! Se llama Jonas.", en: "I've fallen in love! His name's Jonas." } },
        { who: "A", target: "Wie schön! Wo habt ihr euch kennengelernt?", gloss: { es: "¡Qué lindo! ¿Dónde se conocieron?", en: "How lovely! Where did you meet?" } },
        { who: "B", target: "Beim Tanzkurs.", gloss: { es: "En la clase de baile.", en: "At a dance class." } },
      ],
      question: {
        prompt: { es: "¿Dónde se conocieron?", en: "Where did they meet?" },
        options: [
          { es: "En una clase de baile", en: "At a dance class" },
          { es: "En el trabajo", en: "At work" },
          { es: "En una fiesta", en: "At a party" },
          { es: "En la escuela", en: "At school" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "relationships"],
    },

    // ── Bridges (en) ─────────────────────────────────────────
    {
      id: "br-sensibel", type: "bridge", onlyFor: "en", target: "sensibel",
      gloss: { es: "sensible", en: "sensitive" },
      question: {
        prompt: { es: "«Er ist sehr sensibel» significa…", en: "'Er ist sehr sensibel' means…" },
        options: [
          { es: "Es muy sensible.", en: "He's very sensitive." },
          { es: "Es muy sensato.", en: "He's very sensible." },
          { es: "Es muy sociable.", en: "He's very sociable." },
          { es: "Es muy serio.", en: "He's very serious." },
        ],
        answer: 0,
      },
      note: { en: "sensibel = sensitive; 'sensible' is vernünftig." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
