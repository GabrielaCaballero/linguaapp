import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u11",
  lang: "de",
  index: 11,
  cefr: "A2",
  title: { target: "Gesundheit", es: "La salud", en: "Health" },
  canDo: [
    { es: "Puedo decir qué me duele y pedir una cita con el médico.", en: "I can say what hurts and make a doctor's appointment." },
    { es: "Puedo entender consejos sencillos del médico.", en: "I can understand simple advice from a doctor." },
    { es: "Sé dar una razón con weil (verbo al final) y usar sollen y dürfen.", en: "I can give a reason with weil (verb at the end) and use sollen and dürfen." },
  ],
  icon: "🩺",
  items: build("de", 11, "A2", [
    // ── Body ─────────────────────────────────────────────────
    {
      id: "kopf", type: "word", pos: "noun", target: "der Kopf", gender: "m", plural: "die Köpfe",
      gloss: { es: "la cabeza", en: "the head" },
      distractors: ["das Kopf", "der Topf", "der Knopf"],
      tags: ["body", "goethe-a1"],
    },
    {
      id: "bauch", type: "word", pos: "noun", target: "der Bauch", gender: "m", plural: "die Bäuche",
      gloss: { es: "la barriga (la panza)", en: "the belly / stomach" },
      distractors: ["die Bauch", "der Brauch", "der Rauch"],
      tags: ["body", "goethe-a1"],
    },
    {
      id: "ruecken", type: "word", pos: "noun", target: "der Rücken", gender: "m", plural: "die Rücken",
      gloss: { es: "la espalda", en: "the back" },
      distractors: ["die Rücken", "die Brücke", "der Rock"],
      tags: ["body", "goethe-a1"],
    },
    {
      id: "hals", type: "word", pos: "noun", target: "der Hals", gender: "m", plural: "die Hälse",
      gloss: { es: "el cuello / la garganta", en: "the neck / throat" },
      distractors: ["das Hals", "das Glas", "der Hass"],
      tags: ["body", "goethe-a1"],
    },
    {
      id: "bein", type: "word", pos: "noun", target: "das Bein", gender: "n", plural: "die Beine",
      gloss: { es: "la pierna", en: "the leg" },
      distractors: ["der Bein", "das Bier", "die Biene"],
      tags: ["body", "goethe-a1"],
    },

    // ── At the doctor's ──────────────────────────────────────
    {
      id: "arzt", type: "word", pos: "noun", target: "der Arzt", gender: "m", plural: "die Ärzte",
      gloss: { es: "el médico", en: "the doctor" },
      accept: [{ text: "die Ärztin" }],
      distractors: ["die Arzt", "der Arm", "die Art"],
      note: { es: "Una médica = die Ärztin. Ir al médico = zum Arzt gehen.", en: "A female doctor = die Ärztin. Go to the doctor = zum Arzt gehen." },
      tags: ["health", "goethe-a1"],
    },
    {
      id: "termin", type: "word", pos: "noun", target: "der Termin", gender: "m", plural: "die Termine",
      gloss: { es: "la cita (con el médico, en una oficina)", en: "the appointment" },
      distractors: ["die Termin", "das Thema", "der Tempel"],
      note: { es: "Ojo: no es «el término» (das Ende, die Frist).", en: "Not 'term': a Termin is an appointment." },
      tags: ["health", "goethe-a1"],
    },
    {
      id: "fieber", type: "word", pos: "noun", target: "das Fieber", gender: "n", plural: "die Fieber",
      gloss: { es: "la fiebre", en: "the fever (temperature)" },
      distractors: ["der Fieber", "das Feuer", "die Feier"],
      tags: ["health", "goethe-a1"],
    },
    {
      id: "tablette", type: "word", pos: "noun", target: "die Tablette", gender: "f", plural: "die Tabletten",
      gloss: { es: "la pastilla", en: "the tablet (pill)" },
      distractors: ["der Tablette", "die Tabelle", "das Tablett"],
      note: { es: "Ojo: das Tablett = la bandeja.", en: "Careful: das Tablett = tray." },
      tags: ["health", "goethe-a1"],
    },
    {
      id: "krank", type: "word", pos: "adj", target: "krank",
      gloss: { es: "enfermo/a", en: "ill / sick" },
      distractors: ["kalt", "klar", "blank"],
      tags: ["health", "goethe-a1"],
    },
    {
      id: "gesund", type: "word", pos: "adj", target: "gesund",
      gloss: { es: "sano/a", en: "healthy" },
      distractors: ["gesucht", "gesungen", "bunt"],
      tags: ["health", "goethe-a1"],
    },
    {
      id: "wehtun", type: "word", pos: "verb", target: "wehtun",
      gloss: { es: "doler", en: "to hurt" },
      forms: { "3sg": "tut weh", "3pl": "tun weh" },
      distractors: ["wenden", "wehen", "tun"],
      note: { es: "Como «doler», con dativo: Mir tut der Kopf weh.", en: "Takes the dative: Mir tut der Kopf weh (my head hurts)." },
      tags: ["health", "separable"],
    },
    {
      id: "sollen", type: "word", pos: "verb", target: "sollen",
      gloss: { es: "deber (porque otro lo dice)", en: "to be supposed to / should" },
      forms: { ich: "soll", du: "sollst", er: "soll" },
      distractors: ["holen", "wollen", "sorgen"],
      tags: ["modals", "goethe-a2"],
    },
    {
      id: "duerfen", type: "word", pos: "verb", target: "dürfen",
      gloss: { es: "poder (tener permiso)", en: "to be allowed to / may" },
      forms: { ich: "darf", du: "darfst", er: "darf" },
      distractors: ["drücken", "dulden", "müssen"],
      tags: ["modals", "goethe-a1"],
    },
    {
      id: "weil", type: "word", pos: "other", target: "weil",
      gloss: { es: "porque", en: "because" },
      distractors: ["wenn", "dass", "weit"],
      note: { es: "Manda el verbo al final: …, weil ich krank bin.", en: "Sends the verb to the end: …, weil ich krank bin." },
      tags: ["connectors", "goethe-a2"],
    },

    // ── Phrases & sentences ──────────────────────────────────
    {
      id: "gute-besserung", type: "phrase", pos: "phrase", target: "Gute Besserung!",
      gloss: { es: "¡Que te mejores!", en: "Get well soon!" },
      distractors: ["Guten Besserung!", "Gute Besser!", "Gute Bessern!"],
      tags: ["health", "chunk"],
    },
    {
      id: "kopfschmerzen", type: "sentence", target: "Ich habe Kopfschmerzen.",
      gloss: { es: "Me duele la cabeza.", en: "I have a headache." },
      distractors: ["bin", "Kopf", "hat"],
      note: { es: "Siempre en plural: die Kopfschmerzen, die Bauchschmerzen.", en: "Usually plural: Kopfschmerzen, Bauchschmerzen." },
      tags: ["health"],
    },
    {
      id: "ruecken-tut-weh", type: "sentence", target: "Mir tut der Rücken weh.",
      gloss: { es: "Me duele la espalda.", en: "My back hurts." },
      accept: [{ text: "Der Rücken tut mir weh." }],
      errors: [{ text: "Mich tut der Rücken weh.", feedback: { es: "wehtun va con dativo: mir (no mich).", en: "wehtun takes the dative: mir (not mich)." } }],
      distractors: ["Mich", "den", "tun"],
      tags: ["health", "dative"],
    },
    {
      id: "termin-machen", type: "sentence", target: "Ich möchte einen Termin machen.",
      gloss: { es: "Quisiera pedir una cita.", en: "I'd like to make an appointment." },
      accept: [{ text: "Ich möchte einen Termin vereinbaren." }, { text: "Ich hätte gern einen Termin." }],
      distractors: ["ein", "mache", "Termine"],
      tags: ["health"],
    },
    {
      id: "weil-ich-krank-bin", type: "sentence", target: "Ich kann nicht kommen, weil ich krank bin.",
      gloss: { es: "No puedo ir porque estoy enfermo/a.", en: "I can't come because I'm ill." },
      errors: [{ text: "Ich kann nicht kommen, weil ich bin krank.", feedback: { es: "Después de weil, el verbo va al final: weil ich krank bin.", en: "After weil, the verb goes last: weil ich krank bin." } }],
      distractors: ["denn", "ist", "kranke"],
      tags: ["health", "weil", "word-order"],
    },
    {
      id: "im-bett-bleiben", type: "sentence", register: "formal", target: "Sie sollen drei Tage im Bett bleiben.",
      gloss: { es: "Debe quedarse tres días en cama (lo dice el médico).", en: "You should stay in bed for three days (doctor's orders)." },
      distractors: ["sollt", "ins", "bleibt"],
      tags: ["health", "modals"],
    },
    {
      id: "nicht-rauchen", type: "sentence", target: "Hier darf man nicht rauchen.",
      gloss: { es: "Aquí no se puede fumar.", en: "Smoking isn't allowed here." },
      distractors: ["muss", "dürfen", "raucht"],
      tags: ["modals"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-weil", type: "pattern", target: "…, weil ich krank bin.",
      gloss: { es: "weil: el verbo al final", en: "weil: verb at the end" },
      pattern: {
        rule: {
          es: "Tras weil (y dass, wenn) el verbo conjugado va al final de la oración: Ich bleibe zu Hause, weil ich Fieber habe.",
          en: "After weil (and dass, wenn) the conjugated verb goes to the end: Ich bleibe zu Hause, weil ich Fieber habe.",
        },
        table: [["Ich bin krank.", "…, weil ich krank bin."], ["Ich habe Fieber.", "…, weil ich Fieber habe."], ["Ich muss arbeiten.", "…, weil ich arbeiten muss."]],
      },
      question: {
        prompt: { es: "Elige: «Ich bleibe zu Hause, weil …»", en: "Choose: 'Ich bleibe zu Hause, weil …'" },
        options: ["ich krank bin.", "ich bin krank.", "bin ich krank.", "krank ich bin."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "weil", "word-order"],
    },
    {
      id: "pat-weh", type: "pattern", target: "Mir tut der Kopf weh. · Mir tun die Füße weh.",
      gloss: { es: "doler: tut weh / tun weh", en: "hurting: tut weh / tun weh" },
      pattern: {
        rule: {
          es: "Como «doler»: la persona en dativo (mir, dir, ihm, ihr) y el verbo concuerda con la parte del cuerpo: tut (singular), tun (plural).",
          en: "The person is in the dative (mir, dir, ihm, ihr) and the verb agrees with the body part: tut (singular), tun (plural).",
        },
        table: [["der Kopf", "Mir tut der Kopf weh."], ["die Füße", "Mir tun die Füße weh."], ["der Bauch", "Tut dir der Bauch weh?"]],
      },
      question: {
        prompt: { es: "Completa: «Mir ___ die Beine weh.»", en: "Complete: 'Mir ___ die Beine weh.'" },
        options: ["tun", "tut", "tue", "tust"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "dative"],
    },
    {
      id: "pat-sollen-duerfen", type: "pattern", target: "müssen · nicht müssen · nicht dürfen · sollen",
      gloss: { es: "obligación, permiso y prohibición", en: "obligation, permission and prohibition" },
      pattern: {
        rule: {
          es: "Ojo: nicht müssen = no hace falta; nicht dürfen = está prohibido. sollen = otra persona dice que debes.",
          en: "Careful: nicht müssen = don't need to; nicht dürfen = mustn't. sollen = someone else says you should.",
        },
        table: [["Du musst kommen.", "obligación / obligation"], ["Du musst nicht kommen.", "no hace falta / no need"], ["Du darfst nicht kommen.", "prohibido / not allowed"], ["Du sollst kommen.", "te lo piden / you're asked to"]],
      },
      question: {
        prompt: { es: "«No hace falta que vengas» es…", en: "'You don't need to come' is…" },
        options: ["Du musst nicht kommen.", "Du darfst nicht kommen.", "Du sollst kommen.", "Du kannst nicht kommen."],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "modals"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-arzt", type: "listening", register: "formal",
      target: "Sie haben eine Grippe. Nehmen Sie diese Tabletten dreimal am Tag und trinken Sie viel Tee. Sie dürfen eine Woche nicht arbeiten.",
      gloss: {
        es: "Tiene gripe. Tome estas pastillas tres veces al día y beba mucho té. No puede trabajar durante una semana.",
        en: "You have the flu. Take these tablets three times a day and drink lots of tea. You mustn't work for a week.",
      },
      question: {
        prompt: { es: "¿Cuántas veces al día tiene que tomar las pastillas?", en: "How often a day should the patient take the tablets?" },
        options: [
          { es: "Tres veces", en: "Three times" },
          { es: "Una vez", en: "Once" },
          { es: "Dos veces", en: "Twice" },
          { es: "Siete veces", en: "Seven times" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "health"],
    },
    {
      id: "dlg-praxis", type: "dialogue", register: "formal", target: "Das passt.",
      gloss: { es: "Me viene bien.", en: "That works for me." },
      turns: [
        { who: "A", target: "Praxis Doktor Weber, guten Tag.", gloss: { es: "Consultorio del doctor Weber, buenos días.", en: "Dr Weber's practice, good morning." } },
        { who: "B", target: "Guten Tag, ich brauche einen Termin. Ich habe Fieber.", gloss: { es: "Buenos días, necesito una cita. Tengo fiebre.", en: "Hello, I need an appointment. I have a temperature." } },
        { who: "A", target: "Können Sie heute um vier Uhr kommen?", gloss: { es: "¿Puede venir hoy a las cuatro?", en: "Can you come today at four?" } },
        { who: "B", target: "Ja, das passt. Vielen Dank.", gloss: { es: "Sí, me viene bien. Muchas gracias.", en: "Yes, that works. Thank you very much." } },
      ],
      question: {
        prompt: { es: "¿Cuándo es la cita?", en: "When is the appointment?" },
        options: [
          { es: "Hoy a las cuatro", en: "Today at four" },
          { es: "Mañana a las cuatro", en: "Tomorrow at four" },
          { es: "Hoy a las dos", en: "Today at two" },
          { es: "No consigue cita", en: "There's no appointment" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "health"],
    },

    // ── Bridges (en) ─────────────────────────────────────────
    {
      id: "br-rezept", type: "bridge", onlyFor: "en", target: "das Rezept",
      gloss: { es: "la receta", en: "the prescription / the recipe" },
      question: {
        prompt: { es: "«Der Arzt gibt mir ein Rezept» significa…", en: "'Der Arzt gibt mir ein Rezept' means…" },
        options: [
          { es: "El médico me da una receta.", en: "The doctor gives me a prescription." },
          { es: "El médico me da un recibo.", en: "The doctor gives me a receipt." },
          { es: "El médico me da una cita.", en: "The doctor gives me an appointment." },
          { es: "El médico me da un descanso.", en: "The doctor gives me a break." },
        ],
        answer: 0,
      },
      note: { en: "das Rezept = prescription or recipe; a receipt is die Quittung or der Kassenbon." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "health"],
    },
  ]),
};
