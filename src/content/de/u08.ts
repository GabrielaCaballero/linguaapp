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
      distractors: ["schwingen", "schweigen", "stimmen"],
      tags: ["hobbies", "goethe-a1"],
    },
    {
      id: "tanzen", type: "word", pos: "verb", target: "tanzen",
      gloss: { es: "bailar", en: "to dance" },
      distractors: ["tanken", "danken", "tasten"],
      tags: ["hobbies", "goethe-a1"],
    },
    {
      id: "spielen", type: "word", pos: "verb", target: "spielen",
      gloss: { es: "jugar / tocar (un instrumento)", en: "to play" },
      distractors: ["spülen", "spiegeln", "spalten"],
      note: { es: "Sirve para juegos y música: Fußball spielen, Gitarre spielen.", en: "Used for games and music: Fußball spielen, Gitarre spielen." },
      tags: ["hobbies", "goethe-a1"],
    },
    {
      id: "lesen", type: "word", pos: "verb", target: "lesen",
      gloss: { es: "leer", en: "to read" },
      forms: { ich: "lese", du: "liest", er: "liest" },
      distractors: ["lösen", "lernen", "leben"],
      note: { es: "e → ie en du/er: du liest, er liest.", en: "e → ie in du/er: du liest, er liest." },
      tags: ["hobbies", "goethe-a1"],
    },
    {
      id: "fussball", type: "word", pos: "noun", target: "der Fußball", gender: "m", plural: "die Fußbälle",
      gloss: { es: "el fútbol / la pelota de fútbol", en: "football (soccer) / the football" },
      distractors: ["das Fußball", "der Fußweg", "der Volleyball"],
      tags: ["hobbies", "sport", "goethe-a1"],
    },

    // ── Modal verbs ──────────────────────────────────────────
    {
      id: "koennen", type: "word", pos: "verb", target: "können",
      gloss: { es: "poder / saber (hacer algo)", en: "can / to be able to" },
      forms: { ich: "kann", du: "kannst", er: "kann", wir: "können" },
      distractors: ["kennen", "kommen", "kämmen"],
      note: { es: "Ich kann schwimmen = sé nadar. ich y er sin terminación: ich kann, er kann.", en: "ich and er have no ending: ich kann, er kann." },
      tags: ["modals", "goethe-a1"],
    },
    {
      id: "wollen", type: "word", pos: "verb", target: "wollen",
      gloss: { es: "querer", en: "to want" },
      forms: { ich: "will", du: "willst", er: "will", wir: "wollen" },
      distractors: ["wohnen", "sollen", "holen"],
      tags: ["modals", "goethe-a1"],
    },
    {
      id: "muessen", type: "word", pos: "verb", target: "müssen",
      gloss: { es: "tener que, deber", en: "to have to / must" },
      forms: { ich: "muss", du: "musst", er: "muss", wir: "müssen" },
      distractors: ["messen", "mögen", "küssen"],
      tags: ["modals", "goethe-a1"],
    },

    // ── Time & invitations ───────────────────────────────────
    {
      id: "zeit", type: "word", pos: "noun", target: "die Zeit", gender: "f", plural: "die Zeiten",
      gloss: { es: "el tiempo (horas, minutos)", en: "time" },
      distractors: ["der Zeit", "die Seite", "die Zeitung"],
      note: { es: "Zeit haben = estar libre. El clima es «das Wetter».", en: "Zeit haben = to be free. Weather is 'das Wetter'." },
      tags: ["time", "goethe-a1"],
    },
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
      id: "gern", type: "word", pos: "adv", target: "gern",
      gloss: { es: "con gusto (me gusta…)", en: "gladly / like to" },
      accept: [{ text: "gerne" }],
      distractors: ["gar", "fern", "gerade"],
      note: { es: "Verbo + gern = me gusta: Ich lese gern (me gusta leer).", en: "Verb + gern = like doing: Ich lese gern (I like reading)." },
      tags: ["hobbies", "goethe-a1"],
    },
    {
      id: "leider", type: "word", pos: "adv", target: "leider",
      gloss: { es: "lamentablemente, por desgracia", en: "unfortunately" },
      distractors: ["leiser", "lieber", "weiter"],
      tags: ["invitations", "goethe-a1"],
    },
    {
      id: "zusammen", type: "word", pos: "adv", target: "zusammen",
      gloss: { es: "juntos/as", en: "together" },
      distractors: ["zuerst", "zurück", "zuletzt"],
      tags: ["invitations", "goethe-a1"],
    },

    // ── Phrases & sentences ──────────────────────────────────
    {
      id: "ich-kann-leider-nicht", type: "phrase", pos: "phrase", target: "Ich kann leider nicht.",
      gloss: { es: "Lamentablemente no puedo.", en: "Unfortunately I can't." },
      accept: [{ text: "Leider kann ich nicht." }],
      distractors: ["Ich kann nicht leider.", "Ich leider kann nicht.", "Ich kenne leider nicht."],
      tags: ["invitations", "chunk"],
    },
    {
      id: "gute-idee", type: "phrase", pos: "phrase", target: "Gute Idee!",
      gloss: { es: "¡Buena idea!", en: "Good idea!" },
      distractors: ["Guter Idee!", "Gutes Idee!", "Gut Idee!"],
      tags: ["invitations", "chunk"],
    },
    {
      id: "hast-du-zeit", type: "sentence", register: "informal", target: "Hast du am Samstag Zeit?",
      gloss: { es: "¿Estás libre el sábado?", en: "Are you free on Saturday?" },
      distractors: ["Bist", "im", "Zeiten"],
      tags: ["invitations"],
    },
    {
      id: "spiele-gern-fussball", type: "sentence", target: "Ich spiele gern Fußball.",
      gloss: { es: "Me gusta jugar al fútbol.", en: "I like playing football." },
      accept: [{ text: "Ich spiele gerne Fußball." }],
      errors: [{ text: "Ich mag spielen Fußball.", feedback: { es: "«Me gusta + verbo» = verbo + gern: Ich spiele gern Fußball.", en: "'Like doing' = verb + gern: Ich spiele gern Fußball." } }],
      distractors: ["mag", "spielt", "gut"],
      tags: ["hobbies"],
    },
    {
      id: "kannst-du-schwimmen", type: "sentence", register: "informal", target: "Kannst du schwimmen?",
      gloss: { es: "¿Sabes nadar?", en: "Can you swim?" },
      distractors: ["Kennst", "schwimmst", "Können"],
      tags: ["hobbies", "modals"],
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
      id: "ins-kino", type: "sentence", target: "Wir wollen ins Kino gehen.",
      gloss: { es: "Queremos ir al cine.", en: "We want to go to the cinema." },
      errors: [{ text: "Wir wollen gehen ins Kino.", feedback: { es: "El infinitivo va al final: Wir wollen ins Kino gehen.", en: "The infinitive goes to the end: Wir wollen ins Kino gehen." } }],
      distractors: ["willst", "im", "geht"],
      note: { es: "ins = in das (dirección, con acusativo).", en: "ins = in das (direction, accusative)." },
      tags: ["invitations", "modals"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-modalverben", type: "pattern", target: "Ich kann heute nicht kommen.",
      gloss: { es: "verbos modales + infinitivo", en: "modal verbs + infinitive" },
      pattern: {
        rule: {
          es: "El modal va en 2.ª posición y el infinitivo al final. ich y er/sie no llevan terminación: ich kann, er muss.",
          en: "The modal goes in 2nd position, the infinitive at the end. ich and er/sie have no ending: ich kann, er muss.",
        },
        table: [["", "können", "wollen", "müssen"], ["ich", "kann", "will", "muss"], ["du", "kannst", "willst", "musst"], ["er / sie", "kann", "will", "muss"], ["wir / Sie", "können", "wollen", "müssen"]],
      },
      question: {
        prompt: { es: "Completa con «können»: «Er ___ heute nicht kommen.»", en: "Complete with 'können': 'Er ___ heute nicht kommen.'" },
        options: ["kann", "kannst", "könnt", "können"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "modals"],
    },
    {
      id: "pat-gern", type: "pattern", target: "Ich tanze gern. · Ich tanze lieber. · Ich tanze am liebsten.",
      gloss: { es: "gustar con gern", en: "liking with gern" },
      pattern: {
        rule: {
          es: "Para «me gusta + verbo», pon gern después del verbo: Ich koche gern. Más: lieber (prefiero), am liebsten (lo que más me gusta).",
          en: "For 'like doing', put gern after the verb: Ich koche gern. Then lieber (prefer) and am liebsten (like most).",
        },
        table: [["gern", "Ich lese gern."], ["lieber", "Ich lese lieber Romane."], ["am liebsten", "Am liebsten lese ich Krimis."]],
      },
      question: {
        prompt: { es: "«Me gusta bailar» es…", en: "'I like dancing' is…" },
        options: ["Ich tanze gern.", "Ich gern tanze.", "Ich mag tanze.", "Ich tanze gut."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "hobbies"],
    },
    {
      id: "pat-wochentage", type: "pattern", target: "Montag · Dienstag · Mittwoch · Donnerstag · Freitag · Samstag · Sonntag",
      gloss: { es: "los días de la semana", en: "the days of the week" },
      pattern: {
        rule: {
          es: "Todos son masculinos (der Montag) y se dicen con «am»: am Freitag. Cada semana: montags, freitags.",
          en: "All are masculine (der Montag) and take 'am': am Freitag. Every week: montags, freitags.",
        },
        table: [["Mo", "Montag"], ["Di", "Dienstag"], ["Mi", "Mittwoch"], ["Do", "Donnerstag"], ["Fr", "Freitag"], ["Sa", "Samstag"], ["So", "Sonntag"]],
      },
      question: {
        prompt: { es: "Completa: «___ Sonntag schlafe ich lange.»", en: "Complete: '___ Sonntag schlafe ich lange.'" },
        options: ["Am", "Im", "Um", "An der"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "time"],
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
        prompt: { es: "«Ich will nach Hause» significa…", en: "'Ich will nach Hause' means…" },
        options: [
          { es: "Quiero irme a casa.", en: "I want to go home." },
          { es: "Me iré a casa.", en: "I will go home." },
          { es: "Me fui a casa.", en: "I went home." },
          { es: "Tengo que irme a casa.", en: "I must go home." },
        ],
        answer: 0,
      },
      note: { en: "ich will = I want, not 'I will'. The future uses werden: ich werde gehen." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "modals"],
    },
  ]),
};
