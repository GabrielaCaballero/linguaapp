import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u17",
  lang: "de",
  index: 17,
  cefr: "B1",
  title: { target: "Medien und Meinung", es: "Medios y opiniones", en: "Media and opinions" },
  canDo: [
    { es: "Puedo hablar de noticias, programas y artículos que leí o vi.", en: "I can talk about news, programmes and articles I've read or seen." },
    { es: "Puedo dar mi opinión, estar de acuerdo o no, y dar una consecuencia (deshalb).", en: "I can give my opinion, agree or disagree, and give a consequence (deshalb)." },
    { es: "Sé las terminaciones del adjetivo tras ein y der.", en: "I can use adjective endings after ein and der." },
  ],
  icon: "📰",
  items: build("de", 17, "B1", [
    // ── Media ────────────────────────────────────────────────
    {
      id: "nachricht", type: "word", pos: "noun", target: "die Nachricht", gender: "f", plural: "die Nachrichten",
      gloss: { es: "la noticia / el mensaje", en: "the piece of news / message" },
      distractors: ["der Nachricht", "die Nachsicht", "das Gericht"],
      note: { es: "die Nachrichten (plural) = el noticiero.", en: "die Nachrichten (plural) = the news programme." },
      tags: ["media", "goethe-a2"],
    },
    {
      id: "zeitung", type: "word", pos: "noun", target: "die Zeitung", gender: "f", plural: "die Zeitungen",
      gloss: { es: "el periódico (el diario)", en: "the newspaper" },
      distractors: ["der Zeitung", "die Leitung", "die Zeit"],
      tags: ["media", "goethe-a1"],
    },
    {
      id: "sendung", type: "word", pos: "noun", target: "die Sendung", gender: "f", plural: "die Sendungen",
      gloss: { es: "el programa (de TV o radio)", en: "the (TV or radio) programme" },
      distractors: ["der Sendung", "die Wendung", "die Senkung"],
      tags: ["media", "goethe-a2"],
    },
    {
      id: "artikel", type: "word", pos: "noun", target: "der Artikel", gender: "m", plural: "die Artikel",
      gloss: { es: "el artículo", en: "the article" },
      distractors: ["die Artikel", "das Artikel", "der Partikel"],
      tags: ["media", "goethe-a2"],
    },
    {
      id: "werbung", type: "word", pos: "other", target: "die Werbung",
      gloss: { es: "la publicidad", en: "advertising / adverts" },
      distractors: ["die Bewerbung", "die Wirkung", "die Wertung"],
      tags: ["media", "goethe-b1"],
    },

    // ── Opinion ──────────────────────────────────────────────
    {
      id: "meinung", type: "word", pos: "noun", target: "die Meinung", gender: "f", plural: "die Meinungen",
      gloss: { es: "la opinión", en: "the opinion" },
      distractors: ["der Meinung", "die Mahnung", "die Mischung"],
      tags: ["opinion", "goethe-a2"],
    },
    {
      id: "meiner-meinung-nach", type: "phrase", pos: "phrase", target: "meiner Meinung nach",
      gloss: { es: "en mi opinión", en: "in my opinion" },
      accept: [{ text: "nach meiner Meinung" }],
      distractors: ["meine Meinung nach", "meiner Meinung zu", "in meiner Meinung"],
      note: { es: "Ocupa la posición 1 y luego el verbo: Meiner Meinung nach ist das falsch.", en: "It fills position 1, then the verb: Meiner Meinung nach ist das falsch." },
      tags: ["opinion", "chunk"],
    },
    {
      id: "glauben", type: "word", pos: "verb", target: "glauben",
      gloss: { es: "creer", en: "to believe / think" },
      distractors: ["klauen", "loben", "glätten"],
      tags: ["opinion", "goethe-a1"],
    },
    {
      id: "zustimmen", type: "word", pos: "verb", target: "zustimmen",
      gloss: { es: "estar de acuerdo (con)", en: "to agree (with)" },
      forms: { ich: "stimme zu", pp: "hat zugestimmt" },
      distractors: ["bestimmen", "abstimmen", "zustellen"],
      note: { es: "Con dativo: Ich stimme dir zu.", en: "Takes the dative: Ich stimme dir zu." },
      tags: ["opinion", "separable", "goethe-b1"],
    },
    {
      id: "wichtig", type: "word", pos: "adj", target: "wichtig",
      gloss: { es: "importante", en: "important" },
      distractors: ["richtig", "witzig", "nichtig"],
      tags: ["opinion", "goethe-a1"],
    },
    {
      id: "deshalb", type: "word", pos: "adv", target: "deshalb",
      gloss: { es: "por eso", en: "that's why / so" },
      accept: [{ text: "deswegen" }],
      distractors: ["weshalb", "dennoch", "halb"],
      note: { es: "En posición 1 + verbo: …, deshalb bleibe ich zu Hause.", en: "Position 1 + verb: …, deshalb bleibe ich zu Hause." },
      tags: ["connectors", "goethe-a2"],
    },
    {
      id: "ehrlich-gesagt", type: "phrase", pos: "phrase", target: "ehrlich gesagt",
      gloss: { es: "la verdad, sinceramente", en: "to be honest" },
      distractors: ["ehrlich sagt", "ehrlich gesagen", "herrlich gesagt"],
      tags: ["opinion", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "ich-finde-dass", type: "sentence", target: "Ich finde, dass das eine gute Idee ist.",
      gloss: { es: "Me parece que es una buena idea.", en: "I think that's a good idea." },
      accept: [{ text: "Ich finde, das ist eine gute Idee." }, { text: "Ich glaube, dass das eine gute Idee ist." }],
      errors: [{ text: "Ich finde, dass das ist eine gute Idee.", feedback: { es: "Tras dass, el verbo va al final.", en: "After dass, the verb goes last." } }],
      distractors: ["finden", "gutes", "sind"],
      tags: ["opinion", "dass"],
    },
    {
      id: "da-stimme-ich-zu", type: "sentence", register: "informal", target: "Da stimme ich dir zu.",
      gloss: { es: "En eso estoy de acuerdo contigo.", en: "I agree with you there." },
      errors: [{ text: "Da stimme ich dich zu.", feedback: { es: "zustimmen va con dativo: dir.", en: "zustimmen takes the dative: dir." } }],
      distractors: ["dich", "stimmt", "bei"],
      tags: ["opinion"],
    },
    {
      id: "das-sehe-ich-anders", type: "phrase", pos: "phrase", target: "Das sehe ich anders.",
      gloss: { es: "Yo lo veo de otra manera.", en: "I see it differently." },
      distractors: ["Das sehe ich andere.", "Ich sehe das andere.", "Das sieht ich anders."],
      tags: ["opinion", "chunk"],
    },
    {
      id: "interessanter-artikel", type: "sentence", target: "Das ist ein interessanter Artikel.",
      gloss: { es: "Es un artículo interesante.", en: "That's an interesting article." },
      errors: [{ text: "Das ist ein interessante Artikel.", feedback: { es: "Tras ein, masculino nominativo: -er (ein interessanter Artikel).", en: "After ein, masculine nominative: -er (ein interessanter Artikel)." } }],
      distractors: ["interessante", "interessantes", "einen"],
      tags: ["adjective-endings"],
    },
    {
      id: "spannenden-film", type: "sentence", target: "Ich habe einen spannenden Film gesehen.",
      gloss: { es: "Vi una película emocionante.", en: "I saw an exciting film." },
      errors: [{ text: "Ich habe einen spannende Film gesehen.", feedback: { es: "Masculino acusativo: einen …-en Film.", en: "Masculine accusative: einen …-en Film." } }],
      distractors: ["spannende", "spannender", "ein"],
      tags: ["adjective-endings"],
    },
    {
      id: "deshalb-bleibe-ich", type: "sentence", target: "Es regnet, deshalb bleibe ich zu Hause.",
      gloss: { es: "Llueve, por eso me quedo en casa.", en: "It's raining, so I'm staying at home." },
      accept: [{ text: "Es regnet, deswegen bleibe ich zu Hause." }],
      errors: [{ text: "Es regnet, deshalb ich bleibe zu Hause.", feedback: { es: "Tras deshalb va el verbo: deshalb bleibe ich.", en: "The verb follows deshalb: deshalb bleibe ich." } }],
      distractors: ["weil", "bleiben", "nach"],
      tags: ["connectors", "word-order"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-adjektiv-ein", type: "pattern", target: "ein guter Film · eine gute Idee · ein gutes Buch",
      gloss: { es: "terminaciones del adjetivo tras ein / kein / mein", en: "adjective endings after ein / kein / mein" },
      pattern: {
        rule: {
          es: "Tras ein, el adjetivo muestra el género cuando el artículo no lo hace: ein guter (m), ein gutes (n), eine gute (f). En acusativo masculino y en dativo: -en.",
          en: "After ein, the adjective shows the gender when the article doesn't: ein guter (m), ein gutes (n), eine gute (f). Masculine accusative and all datives: -en.",
        },
        table: [["", "m", "f", "n"], ["Nom.", "ein guter Film", "eine gute Idee", "ein gutes Buch"], ["Akk.", "einen guten Film", "eine gute Idee", "ein gutes Buch"], ["Dat.", "einem guten Film", "einer guten Idee", "einem guten Buch"]],
      },
      question: {
        prompt: { es: "Completa: «Das ist ein gut___ Buch.»", en: "Complete: 'Das ist ein gut___ Buch.'" },
        options: ["-es", "-er", "-e", "-en"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "adjective-endings"],
    },
    {
      id: "pat-adjektiv-der", type: "pattern", target: "der neue Kollege · den neuen Kollegen",
      gloss: { es: "terminaciones del adjetivo tras der / die / das", en: "adjective endings after der / die / das" },
      pattern: {
        rule: {
          es: "Tras der/die/das el artículo ya marca el caso: -e en nominativo singular (y acusativo f/n); en todo lo demás, -en.",
          en: "After der/die/das the article already marks the case: -e in the nominative singular (and accusative f/n); everywhere else, -en.",
        },
        table: [["", "m", "f", "n", "pl"], ["Nom.", "der neue", "die neue", "das neue", "die neuen"], ["Akk.", "den neuen", "die neue", "das neue", "die neuen"], ["Dat.", "dem neuen", "der neuen", "dem neuen", "den neuen"]],
      },
      question: {
        prompt: { es: "Completa: «Ich kenne den neu___ Kollegen.»", en: "Complete: 'Ich kenne den neu___ Kollegen.'" },
        options: ["-en", "-e", "-er", "-es"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "adjective-endings"],
    },
    {
      id: "pat-meinung", type: "pattern", target: "Ich finde, dass … · Meiner Meinung nach ist …",
      gloss: { es: "dar una opinión", en: "giving an opinion" },
      pattern: {
        rule: {
          es: "Ich finde / glaube / denke, dass + verbo al final. Meiner Meinung nach + verbo en 2.ª posición. Acuerdo: Da hast du recht / Ich stimme dir zu; desacuerdo: Das sehe ich anders.",
          en: "Ich finde / glaube / denke, dass + verb last. Meiner Meinung nach + verb second. Agreeing: Da hast du recht / Ich stimme dir zu; disagreeing: Das sehe ich anders.",
        },
        table: [["dass", "Ich finde, dass es zu teuer ist."], ["V2", "Meiner Meinung nach ist es zu teuer."]],
      },
      question: {
        prompt: { es: "Elige la frase correcta.", en: "Choose the correct sentence." },
        options: ["Meiner Meinung nach ist das falsch.", "Meiner Meinung nach das ist falsch.", "Meine Meinung nach ist das falsch.", "Nach meine Meinung ist das falsch."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "opinion"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-nachrichten", type: "listening",
      target: "Ich lese die Nachrichten meistens auf dem Handy. Eine gedruckte Zeitung kaufe ich nur noch am Wochenende.",
      gloss: {
        es: "Casi siempre leo las noticias en el celular. El periódico impreso ya solo lo compro el fin de semana.",
        en: "I mostly read the news on my phone. These days I only buy a printed newspaper at the weekend.",
      },
      question: {
        prompt: { es: "¿Cuándo compra el periódico impreso?", en: "When does the speaker buy a printed paper?" },
        options: [
          { es: "Solo el fin de semana", en: "Only at the weekend" },
          { es: "Todos los días", en: "Every day" },
          { es: "Nunca", en: "Never" },
          { es: "Los lunes", en: "On Mondays" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "media"],
    },
    {
      id: "dlg-stadion", type: "dialogue", register: "informal", target: "Hast du den Artikel gelesen?",
      gloss: { es: "¿Leíste el artículo?", en: "Have you read the article?" },
      turns: [
        { who: "A", target: "Hast du den Artikel über das neue Stadion gelesen?", gloss: { es: "¿Leíste el artículo sobre el estadio nuevo?", en: "Have you read the article about the new stadium?" } },
        { who: "B", target: "Ja. Ehrlich gesagt finde ich das Projekt viel zu teuer.", gloss: { es: "Sí. La verdad, el proyecto me parece demasiado caro.", en: "Yes. To be honest, I think the project is far too expensive." } },
        { who: "A", target: "Das sehe ich anders. Die Stadt braucht es.", gloss: { es: "Yo lo veo de otra manera. La ciudad lo necesita.", en: "I see it differently. The city needs it." } },
      ],
      question: {
        prompt: { es: "¿Qué opina B del proyecto?", en: "What does B think of the project?" },
        options: [
          { es: "Que es demasiado caro.", en: "It's far too expensive." },
          { es: "Que la ciudad lo necesita.", en: "The city needs it." },
          { es: "Que es una buena idea.", en: "It's a good idea." },
          { es: "No tiene opinión.", en: "B has no opinion." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "opinion"],
    },

    // ── Bridges (en) ─────────────────────────────────────────
    {
      id: "br-aktuell", type: "bridge", onlyFor: "en", target: "aktuell",
      gloss: { es: "actual", en: "current / up to date" },
      question: {
        prompt: { es: "«die aktuellen Nachrichten» significa…", en: "'die aktuellen Nachrichten' means…" },
        options: [
          { es: "las últimas noticias", en: "the latest news" },
          { es: "las noticias verdaderas", en: "the actual (real) news" },
          { es: "las noticias importantes", en: "the important news" },
          { es: "las noticias de ayer", en: "yesterday's news" },
        ],
        answer: 0,
      },
      note: { en: "aktuell = current; 'actual(ly)' is tatsächlich or eigentlich." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
