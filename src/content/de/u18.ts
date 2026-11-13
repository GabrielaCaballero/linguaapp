import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u18",
  lang: "de",
  index: 18,
  cefr: "B1",
  title: { target: "Pläne und Träume", es: "Planes y sueños", en: "Plans and dreams" },
  canDo: [
    { es: "Puedo hablar de mis planes, metas y sueños para el futuro.", en: "I can talk about my plans, goals and dreams for the future." },
    { es: "Puedo hablar de situaciones imaginarias y dar consejos (wenn ich du wäre…).", en: "I can talk about imaginary situations and give advice (wenn ich du wäre…)." },
    { es: "Sé usar el Futur I, el Konjunktiv II con wenn y la declinación -n (den Kunden).", en: "I can use Futur I, Konjunktiv II with wenn and the n-declension (den Kunden)." },
  ],
  icon: "🌠",
  items: build("de", 18, "B1", [
    // ── Words ────────────────────────────────────────────────
    {
      id: "traum", type: "word", pos: "noun", target: "der Traum", gender: "m", plural: "die Träume",
      gloss: { es: "el sueño (lo que se sueña)", en: "the dream" },
      distractors: ["die Traum", "der Raum", "der Turm"],
      tags: ["dreams", "goethe-b1"],
    },
    {
      id: "traeumen", type: "word", pos: "verb", target: "träumen",
      gloss: { es: "soñar", en: "to dream" },
      distractors: ["trauen", "räumen", "trösten"],
      note: { es: "träumen von + dativo: Ich träume von einem Haus am Meer.", en: "träumen von + dative: Ich träume von einem Haus am Meer." },
      tags: ["dreams", "goethe-b1"],
    },
    {
      id: "plan", type: "word", pos: "noun", target: "der Plan", gender: "m", plural: "die Pläne",
      gloss: { es: "el plan", en: "the plan" },
      distractors: ["die Plan", "das Plan", "der Platz"],
      tags: ["plans", "goethe-a2"],
    },
    {
      id: "planen", type: "word", pos: "verb", target: "planen",
      gloss: { es: "planear, planificar", en: "to plan" },
      distractors: ["pflanzen", "landen", "plaudern"],
      tags: ["plans", "goethe-a2"],
    },
    {
      id: "zukunft", type: "word", pos: "other", target: "die Zukunft",
      gloss: { es: "el futuro", en: "the future" },
      distractors: ["die Ankunft", "die Auskunft", "die Herkunft"],
      note: { es: "In Zukunft = en el futuro, de ahora en adelante.", en: "In Zukunft = in future, from now on." },
      tags: ["plans", "goethe-b1"],
    },
    {
      id: "ziel", type: "word", pos: "noun", target: "das Ziel", gender: "n", plural: "die Ziele",
      gloss: { es: "la meta, el objetivo", en: "the goal / target" },
      distractors: ["der Ziel", "das Zelt", "die Zahl"],
      tags: ["plans", "goethe-b1"],
    },
    {
      id: "erreichen", type: "word", pos: "verb", target: "erreichen",
      gloss: { es: "lograr, alcanzar", en: "to reach / achieve" },
      distractors: ["reichen", "erleichtern", "erzählen"],
      note: { es: "También localizar a alguien: Ich kann ihn nicht erreichen.", en: "Also 'to get hold of': Ich kann ihn nicht erreichen." },
      tags: ["plans", "goethe-b1"],
    },
    {
      id: "werden", type: "word", pos: "verb", target: "werden",
      gloss: { es: "llegar a ser / (auxiliar del futuro)", en: "to become / will (future)" },
      forms: { ich: "werde", du: "wirst", er: "wird", pp: "ist geworden" },
      distractors: ["wenden", "werfen", "werben"],
      note: { es: "Ich werde Lehrerin = voy a ser profesora; ich werde kommen = vendré.", en: "Ich werde Lehrerin = I'm going to be a teacher; ich werde kommen = I will come." },
      tags: ["plans", "future", "goethe-a2"],
    },
    {
      id: "vielleicht", type: "word", pos: "adv", target: "vielleicht",
      gloss: { es: "quizás, tal vez", en: "maybe / perhaps" },
      distractors: ["leicht", "vielmehr", "vielfach"],
      tags: ["plans", "goethe-a1"],
    },
    {
      id: "wahrscheinlich", type: "word", pos: "adv", target: "wahrscheinlich",
      gloss: { es: "probablemente", en: "probably" },
      distractors: ["scheinbar", "sicherlich", "wahrhaftig"],
      tags: ["plans", "goethe-a2"],
    },
    {
      id: "kunde", type: "word", pos: "noun", target: "der Kunde", gender: "m", plural: "die Kunden",
      gloss: { es: "el cliente", en: "the customer" },
      accept: [{ text: "die Kundin" }],
      distractors: ["die Kunde", "die Kunst", "der Hund"],
      note: { es: "Declinación -n: den / dem / des Kunden.", en: "n-declension: den / dem / des Kunden." },
      tags: ["work", "n-declension", "goethe-a2"],
    },
    {
      id: "herr", type: "word", pos: "noun", target: "der Herr", gender: "m", plural: "die Herren",
      gloss: { es: "el señor", en: "the gentleman / Mr" },
      distractors: ["die Herr", "das Heer", "der Herd"],
      note: { es: "Singular con -n fuera del nominativo: Ich spreche mit Herrn Weber.", en: "Takes -n outside the nominative: Ich spreche mit Herrn Weber." },
      tags: ["n-declension", "goethe-a1"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "werde-nach-kanada", type: "sentence", target: "Ich werde nächstes Jahr nach Kanada ziehen.",
      gloss: { es: "El año que viene me voy a mudar a Canadá.", en: "I'm going to move to Canada next year." },
      accept: [{ text: "Nächstes Jahr werde ich nach Kanada ziehen." }, { text: "Ich ziehe nächstes Jahr nach Kanada." }],
      distractors: ["wurde", "würde", "ziehe"],
      tags: ["future", "plans"],
    },
    {
      id: "wenn-ich-geld-haette", type: "sentence", target: "Wenn ich mehr Geld hätte, würde ich eine Weltreise machen.",
      gloss: { es: "Si tuviera más dinero, haría un viaje alrededor del mundo.", en: "If I had more money, I'd travel around the world." },
      errors: [{ text: "Wenn ich mehr Geld habe, würde ich eine Weltreise machen.", feedback: { es: "Situación imaginaria: Konjunktiv II en las dos partes (hätte … würde).", en: "Imaginary situation: Konjunktiv II in both halves (hätte … würde)." } }],
      distractors: ["habe", "werde", "machte"],
      tags: ["konjunktiv2", "dreams"],
    },
    {
      id: "wenn-ich-du-waere", type: "sentence", register: "informal", target: "Wenn ich du wäre, würde ich das Angebot annehmen.",
      gloss: { es: "Si yo fuera tú, aceptaría la oferta.", en: "If I were you, I'd accept the offer." },
      accept: [{ text: "An deiner Stelle würde ich das Angebot annehmen." }],
      distractors: ["bin", "dich", "nehme"],
      tags: ["konjunktiv2", "advice"],
    },
    {
      id: "ich-wuenschte", type: "sentence", target: "Ich wünschte, ich hätte mehr Zeit.",
      gloss: { es: "Ojalá tuviera más tiempo.", en: "I wish I had more time." },
      errors: [{ text: "Ich wünschte, ich habe mehr Zeit.", feedback: { es: "Un deseo irreal va en Konjunktiv II: hätte.", en: "An unreal wish takes Konjunktiv II: hätte." } }],
      distractors: ["habe", "wünsche", "Zeiten"],
      tags: ["konjunktiv2", "wishes"],
    },
    {
      id: "das-wird-schon-klappen", type: "phrase", pos: "phrase", target: "Das wird schon klappen!",
      gloss: { es: "¡Ya va a salir bien!", en: "It'll work out!" },
      distractors: ["Das wird schon klappt!", "Das wird schon geklappt!", "Das werden schon klappen!"],
      tags: ["future", "chunk"],
    },
    {
      id: "mit-dem-kunden", type: "sentence", target: "Ich habe mit dem Kunden telefoniert.",
      gloss: { es: "Hablé por teléfono con el cliente.", en: "I spoke to the customer on the phone." },
      accept: [{ text: "Ich habe mit der Kundin telefoniert." }],
      errors: [{ text: "Ich habe mit dem Kunde telefoniert.", feedback: { es: "Declinación -n: dem Kunden.", en: "n-declension: dem Kunden." } }],
      distractors: ["Kunde", "den", "telefonierte"],
      tags: ["n-declension", "work"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-futur", type: "pattern", target: "Ich werde kommen. · Es wird regnen.",
      gloss: { es: "el Futur I (werden + infinitivo)", en: "Futur I (werden + infinitive)" },
      pattern: {
        rule: {
          es: "werden en 2.ª posición + infinitivo al final, para predicciones, promesas y planes. Con una palabra de tiempo se usa mucho el presente: Morgen fahre ich.",
          en: "werden in 2nd position + infinitive at the end, for predictions, promises and plans. With a time word the present is common: Morgen fahre ich.",
        },
        table: [["ich", "werde"], ["du", "wirst"], ["er / sie / es", "wird"], ["wir / sie / Sie", "werden"], ["ihr", "werdet"]],
      },
      question: {
        prompt: { es: "Completa: «Morgen ___ es regnen.»", en: "Complete: 'Morgen ___ es regnen.'" },
        options: ["wird", "werdet", "wurde", "wirst"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "future"],
    },
    {
      id: "pat-konj2-wenn", type: "pattern", target: "Wenn ich Zeit hätte, würde ich kommen.",
      gloss: { es: "frases irreales con wenn", en: "unreal conditions with wenn" },
      pattern: {
        rule: {
          es: "Situación imaginaria: wenn + Konjunktiv II (hätte, wäre, könnte) al final, y en la principal würde + infinitivo. En la segunda parte, el verbo va primero.",
          en: "Imaginary situation: wenn + Konjunktiv II (hätte, wäre, könnte) at the end, then würde + infinitive. The main clause starts with the verb.",
        },
        table: [["real", "Wenn ich Zeit habe, komme ich."], ["irreal", "Wenn ich Zeit hätte, würde ich kommen."], ["Rat / consejo", "Wenn ich du wäre, würde ich …"]],
      },
      question: {
        prompt: { es: "Completa: «Wenn ich Zeit ___, würde ich dich besuchen.»", en: "Complete: 'Wenn ich Zeit ___, würde ich dich besuchen.'" },
        options: ["hätte", "habe", "hatte", "würde"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "konjunktiv2"],
    },
    {
      id: "pat-n-deklination", type: "pattern", target: "der Kunde → den / dem / des Kunden",
      gloss: { es: "la declinación -n", en: "the n-declension" },
      pattern: {
        rule: {
          es: "Algunos masculinos (en -e: Kunde, Kollege, Junge; -ent, -ist: Student, Polizist; y Herr, Mensch) añaden -(e)n en todos los casos menos el nominativo singular.",
          en: "Some masculine nouns (in -e: Kunde, Kollege, Junge; -ent, -ist: Student, Polizist; plus Herr, Mensch) add -(e)n in every case except nominative singular.",
        },
        table: [["Nom.", "der Student"], ["Akk.", "den Studenten"], ["Dat.", "dem Studenten"], ["Gen.", "des Studenten"]],
      },
      question: {
        prompt: { es: "Completa: «Ich helfe dem Student___.»", en: "Complete: 'Ich helfe dem Student___.'" },
        options: ["-en", "—", "-e", "-s"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "n-declension"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-cafe", type: "listening",
      target: "In fünf Jahren werde ich hoffentlich mein eigenes Café haben. Dafür spare ich jetzt jeden Monat ein bisschen Geld.",
      gloss: {
        es: "Dentro de cinco años espero tener mi propio café. Para eso ahorro ahora un poco de dinero cada mes.",
        en: "In five years I'll hopefully have my own café. That's why I'm saving a little money every month.",
      },
      question: {
        prompt: { es: "¿Qué quiere tener en cinco años?", en: "What does the speaker want to have in five years?" },
        options: [
          { es: "Su propio café", en: "Their own café" },
          { es: "Una casa grande", en: "A big house" },
          { es: "Un trabajo en un banco", en: "A job in a bank" },
          { es: "Mucho dinero ahorrado", en: "A lot of savings" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "plans"],
    },
    {
      id: "dlg-nach-dem-studium", type: "dialogue", register: "informal", target: "Das klingt toll!",
      gloss: { es: "¡Suena genial!", en: "That sounds great!" },
      turns: [
        { who: "A", target: "Was machst du nach dem Studium?", gloss: { es: "¿Qué vas a hacer después de la carrera?", en: "What are you doing after your degree?" } },
        { who: "B", target: "Ich weiß es noch nicht genau. Vielleicht werde ich ein Jahr im Ausland arbeiten.", gloss: { es: "Todavía no lo sé bien. Quizás trabaje un año en el extranjero.", en: "I don't really know yet. Maybe I'll work abroad for a year." } },
        { who: "A", target: "Das klingt toll!", gloss: { es: "¡Suena genial!", en: "That sounds great!" } },
      ],
      question: {
        prompt: { es: "¿Qué hará B quizás?", en: "What might B do?" },
        options: [
          { es: "Trabajar un año en el extranjero", en: "Work abroad for a year" },
          { es: "Seguir estudiando", en: "Keep studying" },
          { es: "Abrir un café", en: "Open a café" },
          { es: "Viajar por todo el mundo", en: "Travel around the world" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "plans"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-rente", type: "bridge", onlyFor: "es", target: "die Rente",
      gloss: { es: "la jubilación, la pensión", en: "the pension / retirement" },
      question: {
        prompt: { es: "«Mein Vater ist in Rente» significa…", en: "'Mein Vater ist in Rente' means…" },
        options: [
          { es: "Mi papá está jubilado.", en: "My dad is retired." },
          { es: "Mi papá vive de rentas.", en: "My dad lives off his investments." },
          { es: "Mi papá alquila una casa.", en: "My dad rents a house." },
          { es: "Mi papá está de vacaciones.", en: "My dad is on holiday." },
        ],
        answer: 0,
      },
      note: { es: "die Rente = la jubilación; el alquiler = die Miete." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
