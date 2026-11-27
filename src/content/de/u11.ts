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
    {
      id: "fuss", type: "word", pos: "noun", target: "der Fuß", gender: "m", plural: "die Füße",
      gloss: { es: "el pie", en: "the foot" },
      distractors: ["das Fuß", "der Fluss", "der Fuchs"],
      note: { es: "zu Fuß = a pie.", en: "zu Fuß = on foot." },
      tags: ["body", "goethe-a1"],
    },

    // ── What hurts: Mir tut … weh ────────────────────────────
    {
      id: "wehtun", type: "word", pos: "verb", target: "wehtun",
      gloss: { es: "doler", en: "to hurt" },
      forms: { er: "tut weh", sie: "tun weh", pp: "wehgetan", aux: "haben" },
      distractors: ["wenden", "wehen", "tun"],
      note: { es: "Como «doler», con dativo: Mir tut der Kopf weh.", en: "Takes the dative: Mir tut der Kopf weh (my head hurts)." },
      tags: ["health", "separable"],
    },
    {
      id: "mir-tut-bauch-weh", type: "phrase", pos: "phrase", target: "Mir tut der Bauch weh.",
      gloss: { es: "Me duele la barriga (la panza).", en: "My stomach hurts." },
      annot: {
        Mir: { es: "a mí (me)", en: "(to) me" },
        tut: { es: "duele (con weh: wehtun)", en: "hurts (with weh: wehtun)" },
      },
      distractors: ["Mich tut der Bauch weh.", "Ich tue der Bauch weh.", "Mir tun der Bauch weh."],
      note: { es: "Fíjate en el orden: Mir + tut + la parte del cuerpo + weh.", en: "Note the order: Mir + tut + body part + weh." },
      tags: ["health", "chunk", "dative"],
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
      id: "pat-weh", type: "pattern", target: "Mir tut der Kopf weh. · Mir tun die Füße weh.",
      gloss: { es: "doler: tut weh / tun weh", en: "hurting: tut weh / tun weh" },
      pattern: {
        rule: {
          es: "Como «doler»: la persona en dativo (mir, dir, ihm, ihr) y el verbo concuerda con la parte del cuerpo: tut (singular), tun (plural).",
          en: "The person is in the dative (mir, dir, ihm, ihr) and the verb agrees with the body part: tut (singular), tun (plural).",
        },
        table: [["der Kopf", "Mir tut der Kopf weh."], ["die Füße", "Mir tun die Füße weh."], ["der Bauch", "Tut dir der Bauch weh?"]],
        meanings: [
          { es: "la cabeza: Me duele la cabeza.", en: "the head: My head hurts." },
          { es: "los pies: Me duelen los pies.", en: "the feet: My feet hurt." },
          { es: "la barriga: ¿Te duele la barriga?", en: "the stomach: Does your stomach hurt?" },
        ],
      },
      question: {
        prompt: { es: "Completa: «Ihm ___ die Füße weh.»", en: "Complete: 'Ihm ___ die Füße weh.'" },
        options: ["tun", "tut", "tue", "tust"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-weh"], tags: ["grammar", "dative"],
    },
    {
      id: "kopfschmerzen", type: "sentence", target: "Ich habe Kopfschmerzen.",
      gloss: { es: "Me duele la cabeza.", en: "I have a headache." },
      accept: [{ text: "Mir tut der Kopf weh." }, { text: "Der Kopf tut mir weh." }],
      distractors: ["bin", "Kopf", "hat"],
      note: { es: "Casi siempre en plural: die Kopfschmerzen, die Bauchschmerzen.", en: "Usually plural: Kopfschmerzen, Bauchschmerzen." },
      tags: ["health"],
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
      id: "grippe", type: "word", pos: "noun", target: "die Grippe", gender: "f", plural: "die Grippen",
      gloss: { es: "la gripe", en: "the flu" },
      distractors: ["der Grippe", "die Krippe", "die Gruppe"],
      note: { es: "Un resfriado = die Erkältung.", en: "A cold = die Erkältung." },
      tags: ["health", "goethe-a2"],
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
      id: "gute-besserung", type: "phrase", pos: "phrase", target: "Gute Besserung!",
      gloss: { es: "¡Que te mejores!", en: "Get well soon!" },
      distractors: ["Guten Besserung!", "Gute Besser!", "Gute Bessern!"],
      tags: ["health", "chunk"],
    },
    {
      id: "termin-machen", type: "sentence", target: "Ich möchte einen Termin machen.",
      gloss: { es: "Quisiera pedir una cita.", en: "I'd like to make an appointment." },
      accept: [{ text: "Ich möchte einen Termin vereinbaren." }, { text: "Ich hätte gern einen Termin." }],
      distractors: ["ein", "mache", "Termine"],
      tags: ["health"],
    },
    {
      id: "bleiben", type: "word", pos: "verb", target: "bleiben",
      gloss: { es: "quedarse", en: "to stay" },
      forms: { ich: "bleibe", du: "bleibst", er: "bleibt", wir: "bleiben", ihr: "bleibt", sie: "bleiben", pp: "geblieben", aux: "sein" },
      distractors: ["bleichen", "leiben", "bilden"],
      note: { es: "zu Hause bleiben = quedarse en casa; Perfekt con sein: ich bin geblieben.", en: "zu Hause bleiben = to stay at home; Perfekt with sein: ich bin geblieben." },
      tags: ["verb", "health", "goethe-a1"],
    },
    {
      id: "rauchen", type: "word", pos: "verb", target: "rauchen",
      gloss: { es: "fumar", en: "to smoke" },
      forms: { ich: "rauche", du: "rauchst", er: "raucht", wir: "rauchen", ihr: "raucht", sie: "rauchen", pp: "geraucht", aux: "haben" },
      distractors: ["brauchen", "tauchen", "rufen"],
      tags: ["verb", "health", "goethe-a1"],
    },

    // ── sollen: someone else says so ─────────────────────────
    {
      id: "sollen", type: "word", pos: "verb", target: "sollen",
      gloss: { es: "deber (porque otro lo dice)", en: "to be supposed to / should" },
      forms: { ich: "soll", du: "sollst", er: "soll", wir: "sollen", ihr: "sollt", sie: "sollen", pp: "gesollt", aux: "haben" },
      distractors: ["holen", "wollen", "sorgen"],
      tags: ["modals", "goethe-a2"],
    },
    {
      id: "tab-sollen", type: "paradigm", target: "sollen — Präsens", spoken: "sollen",
      gloss: { es: "sollen (deber, porque otro lo pide) — presente", en: "sollen (to be supposed to) — present" },
      grammar: ["de-g-sollen-duerfen"],
      paradigm: {
        caption: { es: "Conjuga «sollen» (ich y er: sin terminación)", en: "Conjugate sollen (ich and er: no ending)" },
        cells: [
          { label: "ich", answer: "soll", ruleId: "de-g-sollen-duerfen" },
          { label: "du", answer: "sollst", ruleId: "de-g-sollen-duerfen" },
          { label: "er / sie / es", answer: "soll", ruleId: "de-g-sollen-duerfen" },
          { label: "wir", answer: "sollen", ruleId: "de-g-sollen-duerfen" },
          { label: "ihr", answer: "sollt", ruleId: "de-g-sollen-duerfen" },
          { label: "sie / Sie", answer: "sollen", ruleId: "de-g-sollen-duerfen" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "pat-sollen", type: "pattern", target: "Sie sollen im Bett bleiben.",
      gloss: { es: "sollen: otra persona dice que lo hagas", en: "sollen: someone else tells you to" },
      pattern: {
        rule: {
          es: "sollen es «deber» cuando otra persona lo dice o lo pide (el médico, el jefe): Der Arzt sagt, ich soll viel Tee trinken.",
          en: "sollen means you're supposed to because someone else says so (the doctor, the boss): Der Arzt sagt, ich soll viel Tee trinken.",
        },
        table: [["Ich", "soll", "viel Tee", "trinken."], ["Du", "sollst", "im Bett", "bleiben."], ["Sie", "sollen", "nicht", "rauchen."]],
        meanings: [
          { es: "Debo tomar mucho té (me lo dijo el médico).", en: "I'm supposed to drink lots of tea." },
          { es: "Tienes que quedarte en cama (te lo piden).", en: "You're to stay in bed." },
          { es: "Usted no debe fumar (se lo piden).", en: "You're not supposed to smoke." },
        ],
      },
      question: {
        prompt: { es: "El médico te dijo que tomes mucho té. Se lo cuentas a un amigo:", en: "The doctor told you to drink lots of tea. You tell a friend:" },
        options: ["Ich soll viel Tee trinken.", "Ich darf viel Tee trinken.", "Ich will viel Tee trinken.", "Ich kann viel Tee trinken."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-sollen-duerfen"], tags: ["grammar", "modals"],
    },
    {
      id: "im-bett-bleiben", type: "sentence", register: "formal", target: "Sie sollen drei Tage im Bett bleiben.",
      gloss: { es: "Debe quedarse tres días en cama (lo dice el médico).", en: "You should stay in bed for three days (doctor's orders)." },
      distractors: ["sollt", "ins", "bleibt"],
      tags: ["health", "modals"],
    },

    // ── dürfen: allowed / not allowed ────────────────────────
    {
      id: "duerfen", type: "word", pos: "verb", target: "dürfen",
      gloss: { es: "poder (tener permiso)", en: "to be allowed to / may" },
      forms: { ich: "darf", du: "darfst", er: "darf", wir: "dürfen", ihr: "dürft", sie: "dürfen", pp: "gedurft", aux: "haben" },
      distractors: ["drücken", "dulden", "müssen"],
      tags: ["modals", "goethe-a1"],
    },
    {
      id: "tab-duerfen", type: "paradigm", target: "dürfen — Präsens", spoken: "dürfen",
      gloss: { es: "dürfen (tener permiso) — presente", en: "dürfen (to be allowed to) — present" },
      grammar: ["de-g-sollen-duerfen"],
      paradigm: {
        caption: { es: "Conjuga «dürfen» (ü → a en singular)", en: "Conjugate dürfen (ü → a in the singular)" },
        cells: [
          { label: "ich", answer: "darf", ruleId: "de-g-sollen-duerfen" },
          { label: "du", answer: "darfst", ruleId: "de-g-sollen-duerfen" },
          { label: "er / sie / es", answer: "darf", ruleId: "de-g-sollen-duerfen" },
          { label: "wir", answer: "dürfen", ruleId: "de-g-sollen-duerfen" },
          { label: "ihr", answer: "dürft", ruleId: "de-g-sollen-duerfen" },
          { label: "sie / Sie", answer: "dürfen", ruleId: "de-g-sollen-duerfen" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "nicht-rauchen", type: "sentence", target: "Hier darf man nicht rauchen.",
      gloss: { es: "Aquí no se puede fumar.", en: "Smoking isn't allowed here." },
      distractors: ["muss", "dürfen", "raucht"],
      tags: ["modals"],
    },
    {
      id: "pat-sollen-duerfen", type: "pattern", target: "nicht müssen · nicht dürfen",
      gloss: { es: "nicht müssen (no hace falta) o nicht dürfen (prohibido)", en: "nicht müssen (no need) or nicht dürfen (not allowed)" },
      pattern: {
        rule: {
          es: "Con nicht, müssen y dürfen dicen cosas muy distintas: nicht müssen = no hace falta; nicht dürfen = está prohibido.",
          en: "With nicht, müssen and dürfen mean very different things: nicht müssen = there's no need; nicht dürfen = it's not allowed.",
        },
        table: [["Du musst kommen."], ["Du musst nicht kommen."], ["Du darfst kommen."], ["Du darfst nicht kommen."]],
        meanings: [
          { es: "Tienes que venir.", en: "You have to come." },
          { es: "No hace falta que vengas.", en: "You don't need to come." },
          { es: "Puedes venir (tienes permiso).", en: "You may come." },
          { es: "No puedes venir (está prohibido).", en: "You mustn't come." },
        ],
      },
      question: {
        prompt: { es: "No hace falta que vengas. ¿Cómo se dice?", en: "You don't need to come. How do you say it?" },
        options: ["Du musst nicht kommen.", "Du darfst nicht kommen.", "Du sollst kommen.", "Du kannst nicht kommen."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-sollen-duerfen"], tags: ["grammar", "modals"],
    },

    // ── weil: the verb goes to the end ───────────────────────
    {
      id: "weil", type: "word", pos: "other", target: "weil",
      gloss: { es: "porque", en: "because" },
      distractors: ["wenn", "dass", "weit"],
      note: { es: "Manda el verbo al final: …, weil ich krank bin.", en: "Sends the verb to the end: …, weil ich krank bin." },
      tags: ["connectors", "goethe-a2"],
    },
    {
      id: "pat-weil", type: "pattern", target: "…, weil ich krank bin.",
      gloss: { es: "weil: el verbo al final", en: "weil: verb at the end" },
      pattern: {
        rule: {
          es: "Tras weil (y dass, wenn) el verbo conjugado va al final de la oración: Ich bleibe zu Hause, weil ich Fieber habe.",
          en: "After weil (and dass, wenn) the conjugated verb goes to the end: Ich bleibe zu Hause, weil ich Fieber habe.",
        },
        table: [["Ich bin krank.", "…, weil ich krank bin."], ["Ich habe Fieber.", "…, weil ich Fieber habe."], ["Ich muss arbeiten.", "…, weil ich arbeiten muss."]],
        meanings: [
          { es: "Estoy enfermo/a. → …porque estoy enfermo/a.", en: "I'm ill. → …because I'm ill." },
          { es: "Tengo fiebre. → …porque tengo fiebre.", en: "I have a fever. → …because I have a fever." },
          { es: "Tengo que trabajar. → …porque tengo que trabajar.", en: "I have to work. → …because I have to work." },
        ],
      },
      question: {
        prompt: { es: "Elige: «Ich bleibe zu Hause, weil …»", en: "Choose: 'Ich bleibe zu Hause, weil …'" },
        options: ["ich krank bin.", "ich bin krank.", "bin ich krank.", "krank ich bin."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-weil"], tags: ["grammar", "weil", "word-order"],
    },
    {
      id: "weil-ich-krank-bin", type: "sentence", target: "Ich kann nicht kommen, weil ich krank bin.",
      gloss: { es: "No puedo ir porque estoy enfermo/a.", en: "I can't come because I'm ill." },
      accept: [{
        text: "Ich kann nicht kommen, denn ich bin krank.", verdict: "almost",
        feedback: { es: "Correcto con «denn» (verbo en 2.ª posición), pero aquí practicamos «weil»: …, weil ich krank bin.", en: "Correct with 'denn' (verb second), but this one practises 'weil': …, weil ich krank bin." },
      }],
      errors: [{ text: "Ich kann nicht kommen, weil ich bin krank.", feedback: { es: "Después de weil, el verbo va al final: weil ich krank bin.", en: "After weil, the verb goes last: weil ich krank bin." } }],
      distractors: ["denn", "ist", "kranke"],
      tags: ["health", "weil", "word-order"],
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
        prompt: { es: "«Ich brauche ein Rezept» significa…", en: "'Ich brauche ein Rezept' means…" },
        options: [
          { es: "Necesito una receta.", en: "I need a prescription." },
          { es: "Necesito un recibo.", en: "I need a receipt." },
          { es: "Necesito una cita.", en: "I need an appointment." },
          { es: "Necesito un descanso.", en: "I need a break." },
        ],
        answer: 0,
      },
      note: { en: "das Rezept = prescription or recipe; a receipt is die Quittung or der Kassenbon." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "health"],
    },
  ]),
};
