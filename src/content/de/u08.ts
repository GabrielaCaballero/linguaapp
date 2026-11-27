import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u08",
  lang: "de",
  index: 8,
  cefr: "A1.2",
  title: { target: "Freizeit", es: "Tiempo libre", en: "Free time" },
  canDo: [
    { es: "Puedo hablar de mis pasatiempos y de lo que me gusta hacer.", en: "I can talk about my hobbies and what I like doing." },
    { es: "Puedo quedar con alguien: proponer un día, aceptar o decir que no puedo.", en: "I can make plans: suggest a day, accept, or say I can't." },
    { es: "Sé usar können, wollen y müssen con el infinitivo al final.", en: "I can use können, wollen and müssen with the infinitive at the end." },
  ],
  icon: "⚽",
  items: build("de", 8, "A1.2", [
    // ── Hobbies ──────────────────────────────────────────────
    {
      id: "freizeit", type: "word", pos: "other", target: "die Freizeit",
      gloss: { es: "el tiempo libre", en: "free time" },
      distractors: ["die Freiheit", "der Freitag", "die Zeitung"],
      tags: ["hobbies", "goethe-a1"],
    },
    {
      id: "hobby", type: "word", pos: "noun", target: "das Hobby", gender: "n", plural: "die Hobbys",
      gloss: { es: "el pasatiempo (hobby)", en: "the hobby" },
      distractors: ["der Hobby", "die Lobby", "die Hobbys"],
      note: { es: "Plural con -s, no «Hobbies».", en: "German plural: die Hobbys (not 'Hobbies')." },
      tags: ["hobbies", "goethe-a1"],
    },
    {
      id: "schwimmen", type: "word", pos: "verb", target: "schwimmen",
      gloss: { es: "nadar", en: "to swim" },
      forms: { ich: "schwimme", du: "schwimmst", er: "schwimmt", wir: "schwimmen", ihr: "schwimmt", sie: "schwimmen" },
      distractors: ["schwingen", "schweigen", "stimmen"],
      tags: ["hobbies", "goethe-a1"],
    },
    {
      id: "tanzen", type: "word", pos: "verb", target: "tanzen",
      gloss: { es: "bailar", en: "to dance" },
      forms: { ich: "tanze", du: "tanzt", er: "tanzt", wir: "tanzen", ihr: "tanzt", sie: "tanzen" },
      distractors: ["tanken", "danken", "tasten"],
      tags: ["hobbies", "goethe-a1"],
    },
    {
      id: "spielen", type: "word", pos: "verb", target: "spielen",
      gloss: { es: "jugar / tocar (un instrumento)", en: "to play" },
      forms: { ich: "spiele", du: "spielst", er: "spielt", wir: "spielen", ihr: "spielt", sie: "spielen" },
      distractors: ["spülen", "spiegeln", "spalten"],
      note: { es: "Sirve para juegos y música: Fußball spielen, Gitarre spielen.", en: "Used for games and music: Fußball spielen, Gitarre spielen." },
      tags: ["hobbies", "goethe-a1"],
    },
    {
      id: "fussball", type: "word", pos: "noun", target: "der Fußball", gender: "m", plural: "die Fußbälle",
      gloss: { es: "el fútbol / la pelota de fútbol", en: "football (soccer) / the football" },
      distractors: ["das Fußball", "der Fußweg", "der Volleyball"],
      tags: ["hobbies", "sport", "goethe-a1"],
    },

    // ── gern: what you like doing ────────────────────────────
    {
      id: "gern", type: "word", pos: "adv", target: "gern",
      gloss: { es: "con gusto (me gusta…)", en: "gladly / like to" },
      accept: [{ text: "gerne" }],
      distractors: ["gar", "fern", "gerade"],
      note: { es: "Verbo + gern = me gusta: Ich lese gern (me gusta leer).", en: "Verb + gern = like doing: Ich lese gern (I like reading)." },
      tags: ["hobbies", "goethe-a1"],
    },
    {
      id: "pat-gern", type: "pattern", target: "Ich tanze gern.",
      gloss: { es: "me gusta…: verbo + gern", en: "I like doing…: verb + gern" },
      pattern: {
        rule: {
          es: "Para decir que te gusta hacer algo, pon gern después del verbo: Ich tanze gern (me gusta bailar). Si no te gusta: nicht gern.",
          en: "To say you like doing something, put gern after the verb: Ich tanze gern (I like dancing). If you don't: nicht gern.",
        },
        table: [["Ich tanze.", "Ich tanze gern."], ["Ich spiele Fußball.", "Ich spiele gern Fußball."], ["Ich schwimme.", "Ich schwimme nicht gern."]],
        meanings: [
          { es: "Bailo. → Me gusta bailar.", en: "I dance. → I like dancing." },
          { es: "Juego al fútbol. → Me gusta jugar al fútbol.", en: "I play football. → I like playing football." },
          { es: "Nado. → No me gusta nadar.", en: "I swim. → I don't like swimming." },
        ],
      },
      question: {
        prompt: { es: "Me gusta bailar. ¿Cómo se dice?", en: "I like dancing. How do you say it?" },
        options: ["Ich tanze gern.", "Ich gern tanze.", "Ich mag tanze.", "Ich tanze gut."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-gern"], tags: ["grammar", "hobbies"],
    },
    {
      id: "spiele-gern-fussball", type: "sentence", target: "Ich spiele gern Fußball.",
      gloss: { es: "Me gusta jugar al fútbol.", en: "I like playing football." },
      accept: [{ text: "Ich spiele gerne Fußball." }],
      errors: [{ text: "Ich mag spielen Fußball.", feedback: { es: "«Me gusta + verbo» = verbo + gern: Ich spiele gern Fußball.", en: "'Like doing' = verb + gern: Ich spiele gern Fußball." } }],
      distractors: ["mag", "spielt", "gut"],
      tags: ["hobbies"],
    },

    // ── lesen (e → ie) ───────────────────────────────────────
    {
      id: "lesen", type: "word", pos: "verb", target: "lesen",
      gloss: { es: "leer", en: "to read" },
      forms: { ich: "lese", du: "liest", er: "liest", wir: "lesen", ihr: "lest", sie: "lesen" },
      distractors: ["lösen", "lernen", "leben"],
      note: { es: "e → ie en du/er: du liest, er liest.", en: "e → ie in du/er: du liest, er liest." },
      tags: ["hobbies", "goethe-a1"],
    },
    {
      id: "tab-lesen", type: "paradigm", target: "lesen — Präsens", spoken: "lesen",
      gloss: { es: "lesen (leer) — presente", en: "lesen (to read) — present" },
      grammar: ["de-g-vokalwechsel"],
      paradigm: {
        caption: { es: "Conjuga «lesen» (e → ie con du y er/sie/es)", en: "Conjugate lesen (e → ie with du and er/sie/es)" },
        cells: [
          { label: "ich", answer: "lese", ruleId: "de-g-vokalwechsel" },
          { label: "du", answer: "liest", ruleId: "de-g-vokalwechsel" },
          { label: "er / sie / es", answer: "liest", ruleId: "de-g-vokalwechsel" },
          { label: "wir", answer: "lesen", ruleId: "de-g-vokalwechsel" },
          { label: "ihr", answer: "lest", ruleId: "de-g-vokalwechsel" },
          { label: "sie / Sie", answer: "lesen", ruleId: "de-g-vokalwechsel" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "liest-du-gern", type: "sentence", register: "informal", target: "Liest du gern?",
      gloss: { es: "¿Te gusta leer?", en: "Do you like reading?" },
      errors: [{ text: "Lest du gern?", feedback: { es: "lesen cambia e → ie con du: du liest.", en: "lesen changes e → ie with du: du liest." }, ruleId: "de-g-vokalwechsel" }],
      distractors: ["Lest du gern?", "Liest du gut?", "Lesen du gern?"],
      tags: ["hobbies", "vowel-change"],
    },
    {
      id: "kino", type: "word", pos: "noun", target: "das Kino", gender: "n", plural: "die Kinos",
      gloss: { es: "el cine", en: "the cinema (movie theater)" },
      distractors: ["der Kino", "die Kinos", "das Kinn"],
      note: { es: "ins Kino gehen = ir al cine.", en: "ins Kino gehen = to go to the cinema." },
      tags: ["hobbies", "goethe-a1"],
    },
    {
      id: "zeit", type: "word", pos: "noun", target: "die Zeit", gender: "f", plural: "die Zeiten",
      gloss: { es: "el tiempo (horas, minutos)", en: "time" },
      distractors: ["der Zeit", "die Seite", "die Zeitung"],
      note: { es: "Zeit haben = estar libre. El clima es «das Wetter».", en: "Zeit haben = to be free. Weather is 'das Wetter'." },
      tags: ["time", "goethe-a1"],
    },

    // ── Modal verbs, one by one ──────────────────────────────
    {
      id: "koennen", type: "word", pos: "verb", target: "können",
      gloss: { es: "poder / saber (hacer algo)", en: "can / to be able to" },
      forms: { ich: "kann", du: "kannst", er: "kann", wir: "können", ihr: "könnt", sie: "können" },
      distractors: ["kennen", "kommen", "kämmen"],
      note: { es: "Ich kann schwimmen = sé nadar. ich y er sin terminación: ich kann, er kann.", en: "ich and er have no ending: ich kann, er kann." },
      tags: ["modals", "goethe-a1"],
    },
    {
      id: "tab-koennen", type: "paradigm", target: "können — Präsens", spoken: "können",
      gloss: { es: "können (poder, saber hacer) — presente", en: "können (can) — present" },
      grammar: ["de-g-modalverben"],
      paradigm: {
        caption: { es: "Conjuga «können» (ich y er: sin terminación)", en: "Conjugate können (ich and er: no ending)" },
        cells: [
          { label: "ich", answer: "kann", ruleId: "de-g-modalverben" },
          { label: "du", answer: "kannst", ruleId: "de-g-modalverben" },
          { label: "er / sie / es", answer: "kann", ruleId: "de-g-modalverben" },
          { label: "wir", answer: "können", ruleId: "de-g-modalverben" },
          { label: "ihr", answer: "könnt", ruleId: "de-g-modalverben" },
          { label: "sie / Sie", answer: "können", ruleId: "de-g-modalverben" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "leider", type: "word", pos: "adv", target: "leider",
      gloss: { es: "lamentablemente, por desgracia", en: "unfortunately" },
      distractors: ["leiser", "lieber", "weiter"],
      tags: ["invitations", "goethe-a1"],
    },
    {
      id: "ich-kann-leider-nicht", type: "phrase", pos: "phrase", target: "Ich kann leider nicht.",
      gloss: { es: "Lamentablemente no puedo.", en: "Unfortunately I can't." },
      accept: [{ text: "Leider kann ich nicht." }],
      distractors: ["Ich kann nicht leider.", "Ich leider kann nicht.", "Ich kenne leider nicht."],
      tags: ["invitations", "chunk"],
    },
    {
      id: "wollen", type: "word", pos: "verb", target: "wollen",
      gloss: { es: "querer", en: "to want" },
      forms: { ich: "will", du: "willst", er: "will", wir: "wollen", ihr: "wollt", sie: "wollen" },
      distractors: ["wohnen", "sollen", "holen"],
      tags: ["modals", "goethe-a1"],
    },
    {
      id: "tab-wollen", type: "paradigm", target: "wollen — Präsens", spoken: "wollen",
      gloss: { es: "wollen (querer) — presente", en: "wollen (to want) — present" },
      grammar: ["de-g-modalverben"],
      paradigm: {
        caption: { es: "Conjuga «wollen» (ich y er: sin terminación)", en: "Conjugate wollen (ich and er: no ending)" },
        cells: [
          { label: "ich", answer: "will", ruleId: "de-g-modalverben" },
          { label: "du", answer: "willst", ruleId: "de-g-modalverben" },
          { label: "er / sie / es", answer: "will", ruleId: "de-g-modalverben" },
          { label: "wir", answer: "wollen", ruleId: "de-g-modalverben" },
          { label: "ihr", answer: "wollt", ruleId: "de-g-modalverben" },
          { label: "sie / Sie", answer: "wollen", ruleId: "de-g-modalverben" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "zusammen", type: "word", pos: "adv", target: "zusammen",
      gloss: { es: "juntos/as", en: "together" },
      distractors: ["zuerst", "zurück", "zuletzt"],
      tags: ["invitations", "goethe-a1"],
    },
    {
      id: "gute-idee", type: "phrase", pos: "phrase", target: "Gute Idee!",
      gloss: { es: "¡Buena idea!", en: "Good idea!" },
      distractors: ["Guter Idee!", "Gutes Idee!", "Gut Idee!"],
      tags: ["invitations", "chunk"],
    },
    {
      id: "muessen", type: "word", pos: "verb", target: "müssen",
      gloss: { es: "tener que, deber", en: "to have to / must" },
      forms: { ich: "muss", du: "musst", er: "muss", wir: "müssen", ihr: "müsst", sie: "müssen" },
      distractors: ["messen", "mögen", "küssen"],
      tags: ["modals", "goethe-a1"],
    },
    {
      id: "tab-muessen", type: "paradigm", target: "müssen — Präsens", spoken: "müssen",
      gloss: { es: "müssen (tener que) — presente", en: "müssen (to have to) — present" },
      grammar: ["de-g-modalverben"],
      paradigm: {
        caption: { es: "Conjuga «müssen» (ich y er: sin terminación)", en: "Conjugate müssen (ich and er: no ending)" },
        cells: [
          { label: "ich", answer: "muss", ruleId: "de-g-modalverben" },
          { label: "du", answer: "musst", ruleId: "de-g-modalverben" },
          { label: "er / sie / es", answer: "muss", ruleId: "de-g-modalverben" },
          { label: "wir", answer: "müssen", ruleId: "de-g-modalverben" },
          { label: "ihr", answer: "müsst", ruleId: "de-g-modalverben" },
          { label: "sie / Sie", answer: "müssen", ruleId: "de-g-modalverben" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },

    // ── The verb bracket: modal … infinitive ─────────────────
    {
      id: "pat-modalverben", type: "pattern", target: "Ich kann heute nicht kommen.",
      gloss: { es: "modal en 2.º lugar, infinitivo al final", en: "modal in place 2, infinitive at the end" },
      pattern: {
        rule: {
          es: "Con un modal hay dos verbos: el modal conjugado va en 2.º lugar y el otro verbo, sin conjugar (infinitivo), se va al final de la frase: Ich kann heute nicht kommen.",
          en: "With a modal there are two verbs: the conjugated modal goes in place 2 and the other verb, unchanged (infinitive), goes to the end of the sentence: Ich kann heute nicht kommen.",
        },
        table: [["Ich", "kann", "heute nicht", "kommen."], ["Wir", "wollen", "ins Kino", "gehen."], ["Du", "musst", "heute", "arbeiten."]],
        meanings: [
          { es: "Hoy no puedo venir.", en: "I can't come today." },
          { es: "Queremos ir al cine.", en: "We want to go to the cinema." },
          { es: "Hoy tienes que trabajar.", en: "You have to work today." },
        ],
      },
      question: {
        prompt: { es: "¿Qué frase es correcta?", en: "Which sentence is correct?" },
        options: ["Ich muss heute arbeiten.", "Ich muss arbeiten heute.", "Ich arbeiten muss heute.", "Ich heute muss arbeiten."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-modalverben"], tags: ["grammar", "modals"],
    },
    {
      id: "kannst-du-schwimmen", type: "sentence", register: "informal", target: "Kannst du schwimmen?",
      gloss: { es: "¿Sabes nadar?", en: "Can you swim?" },
      distractors: ["Kennst", "schwimmst", "Können"],
      tags: ["hobbies", "modals"],
    },
    {
      id: "ins-kino", type: "sentence", target: "Wir wollen ins Kino gehen.",
      gloss: { es: "Queremos ir al cine.", en: "We want to go to the cinema." },
      errors: [{ text: "Wir wollen gehen ins Kino.", feedback: { es: "El infinitivo va al final: Wir wollen ins Kino gehen.", en: "The infinitive goes to the end: Wir wollen ins Kino gehen." } }],
      distractors: ["willst", "im", "geht"],
      note: { es: "ins = in das (dirección, con acusativo).", en: "ins = in das (direction, accusative)." },
      tags: ["invitations", "modals"],
    },

    // ── Days of the week ─────────────────────────────────────
    {
      id: "montag", type: "word", pos: "noun", target: "der Montag", gender: "m", plural: "die Montage",
      gloss: { es: "el lunes", en: "Monday" },
      distractors: ["die Montag", "der Monat", "der Mittwoch"],
      note: { es: "Todos los días son masculinos: am Montag = el lunes.", en: "All weekdays are masculine: am Montag = on Monday." },
      tags: ["time", "goethe-a1"],
    },
    {
      id: "wochenende", type: "word", pos: "noun", target: "das Wochenende", gender: "n", plural: "die Wochenenden",
      gloss: { es: "el fin de semana", en: "the weekend" },
      distractors: ["die Wochenende", "der Wochentag", "die Woche"],
      note: { es: "das Ende → das Wochenende; am Wochenende = el fin de semana.", en: "das Ende → das Wochenende; am Wochenende = at the weekend." },
      tags: ["time", "compound", "goethe-a1"],
    },
    {
      id: "pat-wochentage", type: "pattern", target: "Montag · Dienstag · Mittwoch · Donnerstag · Freitag · Samstag · Sonntag",
      gloss: { es: "los días de la semana", en: "the days of the week" },
      pattern: {
        rule: {
          es: "Los días son todos masculinos (der Montag). Para decir «el lunes», «el viernes»… se usa am: am Freitag.",
          en: "The days are all masculine (der Montag). For 'on Monday', 'on Friday'… use am: am Freitag.",
        },
        table: [["Mo", "Montag"], ["Di", "Dienstag"], ["Mi", "Mittwoch"], ["Do", "Donnerstag"], ["Fr", "Freitag"], ["Sa", "Samstag"], ["So", "Sonntag"]],
        meanings: [
          { es: "lunes", en: "Monday" },
          { es: "martes", en: "Tuesday" },
          { es: "miércoles", en: "Wednesday" },
          { es: "jueves", en: "Thursday" },
          { es: "viernes", en: "Friday" },
          { es: "sábado", en: "Saturday" },
          { es: "domingo", en: "Sunday" },
        ],
      },
      question: {
        prompt: { es: "Completa: «___ Sonntag schlafe ich bis zehn.»", en: "Complete: '___ Sonntag schlafe ich bis zehn.'" },
        options: ["Am", "Im", "Um", "An der"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-wochentage"], tags: ["grammar", "time"],
    },
    {
      id: "muss-montag-arbeiten", type: "sentence", target: "Ich muss am Montag arbeiten.",
      gloss: { es: "El lunes tengo que trabajar.", en: "I have to work on Monday." },
      accept: [{ text: "Am Montag muss ich arbeiten." }],
      errors: [{ text: "Ich muss arbeiten am Montag.", feedback: { es: "Con un modal, el infinitivo va al final: Ich muss am Montag arbeiten.", en: "With a modal, the infinitive goes to the end: Ich muss am Montag arbeiten." } }],
      distractors: ["arbeite", "musst", "um"],
      tags: ["modals", "word-order"],
    },
    {
      id: "hast-du-zeit", type: "sentence", register: "informal", target: "Hast du am Samstag Zeit?",
      gloss: { es: "¿Estás libre el sábado?", en: "Are you free on Saturday?" },
      distractors: ["Bist", "im", "Zeiten"],
      tags: ["invitations"],
    },
    {
      id: "pat-montags", type: "pattern", target: "am Montag · montags",
      gloss: { es: "cada semana: montags (los lunes)", en: "every week: montags (on Mondays)" },
      pattern: {
        rule: {
          es: "Para algo que pasa todas las semanas, se añade -s al día y se escribe con minúscula: montags = los lunes (cada lunes).",
          en: "For something that happens every week, add -s to the day and write it in lower case: montags = on Mondays (every Monday).",
        },
        table: [["am Montag", "montags"], ["am Samstag", "samstags"], ["am Sonntag", "sonntags"]],
        meanings: [
          { es: "el lunes · los lunes", en: "on Monday · on Mondays" },
          { es: "el sábado · los sábados", en: "on Saturday · on Saturdays" },
          { es: "el domingo · los domingos", en: "on Sunday · on Sundays" },
        ],
      },
      question: {
        prompt: { es: "Completa (todos los lunes): «Ich arbeite ___.»", en: "Complete (every Monday): 'Ich arbeite ___.'" },
        options: ["montags", "am Montags", "Montag", "im Montag"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-wochentage"], tags: ["grammar", "time"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-wochenende", type: "listening",
      target: "Am Wochenende habe ich Zeit. Am Samstag spiele ich Fußball, und am Sonntag gehe ich mit Freunden schwimmen.",
      gloss: {
        es: "El fin de semana tengo tiempo. El sábado juego al fútbol y el domingo voy a nadar con amigos.",
        en: "At the weekend I have time. On Saturday I play football, and on Sunday I go swimming with friends.",
      },
      question: {
        prompt: { es: "¿Qué hace el domingo?", en: "What does the speaker do on Sunday?" },
        options: [
          { es: "Va a nadar con amigos.", en: "Goes swimming with friends." },
          { es: "Juega al fútbol.", en: "Plays football." },
          { es: "Trabaja.", en: "Works." },
          { es: "Va al cine.", en: "Goes to the cinema." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "hobbies"],
    },
    {
      id: "dlg-kino", type: "dialogue", register: "informal", target: "Samstag geht auch.",
      gloss: { es: "El sábado también me viene bien.", en: "Saturday works too." },
      turns: [
        { who: "A", target: "Hast du am Freitag Zeit? Wir wollen ins Kino gehen.", gloss: { es: "¿Estás libre el viernes? Queremos ir al cine.", en: "Are you free on Friday? We want to go to the cinema." } },
        { who: "B", target: "Am Freitag kann ich leider nicht, ich muss arbeiten. Und am Samstag?", gloss: { es: "El viernes lamentablemente no puedo, tengo que trabajar. ¿Y el sábado?", en: "Unfortunately I can't on Friday, I have to work. What about Saturday?" } },
        { who: "A", target: "Samstag geht auch. Gute Idee!", gloss: { es: "El sábado también me viene bien. ¡Buena idea!", en: "Saturday works too. Good idea!" } },
      ],
      question: {
        prompt: { es: "¿Por qué B no puede el viernes?", en: "Why can't B go on Friday?" },
        options: [
          { es: "Tiene que trabajar.", en: "B has to work." },
          { es: "No le gusta el cine.", en: "B doesn't like the cinema." },
          { es: "Está enfermo/a.", en: "B is ill." },
          { es: "Va a nadar.", en: "B is going swimming." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "invitations"],
    },

    // ── Bridges (en) ─────────────────────────────────────────
    {
      id: "br-will", type: "bridge", onlyFor: "en", target: "ich will",
      gloss: { es: "quiero", en: "I want" },
      question: {
        prompt: { es: "«Ich will ins Kino» significa…", en: "'Ich will ins Kino' means…" },
        options: [
          { es: "Quiero ir al cine.", en: "I want to go to the cinema." },
          { es: "Iré al cine.", en: "I will go to the cinema." },
          { es: "Fui al cine.", en: "I went to the cinema." },
          { es: "Tengo que ir al cine.", en: "I must go to the cinema." },
        ],
        answer: 0,
      },
      note: { en: "ich will = I want, not 'I will'. The future uses werden: ich werde gehen." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "modals"],
    },
  ]),
};
