import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u20",
  lang: "it",
  index: 20,
  cefr: "B2",
  title: { target: "Cronaca e notizie", es: "Noticias y sucesos", en: "News and current events" },
  canDo: [
    { es: "Puedo entender noticias y contar lo que pasó con mis palabras.", en: "I can understand news reports and retell what happened in my own words." },
    { es: "Puedo repetir lo que otra persona dijo o preguntó.", en: "I can report what someone else said or asked." },
    { es: "Sé usar el estilo indirecto y la concordancia de tiempos (ha detto che sarebbe venuto).", en: "I can use reported speech and the sequence of tenses (ha detto che sarebbe venuto)." },
  ],
  icon: "🗞️",
  items: build("it", 20, "B2", [
    // ── News words ───────────────────────────────────────────
    {
      id: "cronaca", type: "word", pos: "noun", target: "la cronaca", gender: "f", plural: "le cronache",
      gloss: { es: "la crónica (noticias de sucesos)", en: "the news report / local news" },
      distractors: ["il cronaca", "la cornice", "la cronologia"],
      note: { es: "cronaca nera = sucesos policiales; cronaca rosa = prensa del corazón.", en: "cronaca nera = crime news; cronaca rosa = celebrity gossip." },
      tags: ["news"],
    },
    {
      id: "giornalista", type: "word", pos: "noun", target: "il giornalista", gender: "m", plural: "i giornalisti",
      gloss: { es: "el/la periodista", en: "the journalist" },
      accept: [{ text: "la giornalista" }],
      distractors: ["il giornalaio", "il giornale", "il giardiniere"],
      note: { es: "Ojo: il giornalaio = el vendedor de diarios.", en: "Careful: il giornalaio = newsagent." },
      tags: ["news"],
    },
    {
      id: "intervista", type: "word", pos: "noun", target: "l'intervista", gender: "f", plural: "le interviste",
      gloss: { es: "la entrevista (periodística)", en: "the (press) interview" },
      distractors: ["l'intervallo", "l'inchiesta", "l'intesa"],
      note: { es: "Para un trabajo se dice «il colloquio».", en: "A job interview is 'il colloquio'." },
      tags: ["news"],
    },
    {
      id: "incidente", type: "word", pos: "noun", target: "l'incidente", gender: "m", plural: "gli incidenti",
      gloss: { es: "el accidente", en: "the accident" },
      distractors: ["l'incendio", "l'incidenza", "l'indizio"],
      note: { es: "incidente stradale = accidente de tránsito; l'incendio = el incendio.", en: "incidente stradale = road accident; l'incendio = fire." },
      tags: ["news"],
    },
    {
      id: "testimone", type: "word", pos: "noun", target: "il testimone", gender: "m", plural: "i testimoni",
      gloss: { es: "el/la testigo", en: "the witness" },
      accept: [{ text: "la testimone" }],
      distractors: ["il testamento", "la testina", "il timone"],
      tags: ["news"],
    },
    {
      id: "dichiarare", type: "word", pos: "verb", target: "dichiarare",
      gloss: { es: "declarar", en: "to state / declare" },
      distractors: ["chiarire", "decorare", "dimezzare"],
      tags: ["news", "reporting"],
    },
    {
      id: "affermare", type: "word", pos: "verb", target: "affermare",
      gloss: { es: "afirmar", en: "to claim / assert" },
      distractors: ["affettare", "fermare", "afferrare"],
      tags: ["news", "reporting"],
    },
    {
      id: "smentire", type: "word", pos: "verb", target: "smentire",
      gloss: { es: "desmentir", en: "to deny (a report)" },
      forms: { io: "smentisco" },
      distractors: ["mentire", "smettere", "sentire"],
      tags: ["news", "reporting"],
    },
    {
      id: "avvenire", type: "word", pos: "verb", target: "avvenire",
      gloss: { es: "ocurrir, tener lugar", en: "to occur / take place" },
      forms: { pp: "avvenuto", aux: "essere" },
      distractors: ["avvertire", "divenire", "avviare"],
      note: { es: "Registro formal de «succedere». Il futuro / l'avvenire = el porvenir.", en: "Formal for 'succedere'. As a noun, l'avvenire = the future." },
      tags: ["news"],
    },
    {
      id: "secondo-la-polizia", type: "phrase", pos: "phrase", target: "secondo la polizia",
      gloss: { es: "según la policía", en: "according to the police" },
      distractors: ["seconda la polizia", "secondo della polizia", "dopo la polizia"],
      tags: ["news", "reporting"],
    },
    {
      id: "in-seguito-a", type: "phrase", pos: "phrase", target: "in seguito a",
      gloss: { es: "a raíz de, tras", en: "following / as a result of" },
      distractors: ["in seguito di", "al seguito a", "in seguita a"],
      tags: ["news", "connectors"],
    },
    {
      id: "a-quanto-pare", type: "phrase", pos: "phrase", target: "a quanto pare",
      gloss: { es: "al parecer", en: "apparently" },
      distractors: ["a quanto appare", "per quanto pare", "quanto a pare"],
      tags: ["news", "reporting"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "sarebbe-arrivato", type: "sentence", target: "Ha detto che sarebbe arrivato in ritardo.",
      gloss: { es: "Dijo que llegaría tarde.", en: "He said he would arrive late." },
      errors: [{ text: "Ha detto che arriverebbe in ritardo.", feedback: { es: "El futuro visto desde el pasado va en condicional compuesto: sarebbe arrivato.", en: "The future seen from the past takes the past conditional: sarebbe arrivato." } }],
      distractors: ["arriverebbe", "arriverà", "era"],
      tags: ["reported-speech", "concordanza"],
    },
    {
      id: "mi-ha-chiesto-se", type: "sentence", target: "Mi ha chiesto se volevo uscire.",
      gloss: { es: "Me preguntó si quería salir.", en: "She asked me if I wanted to go out." },
      distractors: ["voglio", "che", "chiesta"],
      tags: ["reported-speech"],
    },
    {
      id: "ministro-ha-dichiarato", type: "sentence", target: "Il ministro ha dichiarato che la legge sarà cambiata.",
      gloss: { es: "El ministro declaró que la ley será modificada.", en: "The minister stated that the law will be changed." },
      accept: [{ text: "Il ministro ha dichiarato che la legge verrà cambiata." }],
      distractors: ["dichiarata", "viene", "cambiato"],
      tags: ["news", "passive"],
    },
    {
      id: "nessuno-ferito", type: "sentence", target: "Secondo la polizia, nessuno è rimasto ferito.",
      gloss: { es: "Según la policía, nadie resultó herido.", en: "According to the police, nobody was hurt." },
      errors: [{ text: "Secondo la polizia, nessuno non è rimasto ferito.", feedback: { es: "«nessuno» delante del verbo no lleva «non».", en: "'nessuno' before the verb takes no 'non'." } }],
      distractors: ["Seconda", "nessun", "ferita"],
      tags: ["news"],
    },
    {
      id: "pare-che-sia-avvenuto", type: "sentence", target: "Pare che l'incidente sia avvenuto di notte.",
      gloss: { es: "Al parecer, el accidente ocurrió de noche.", en: "It seems the accident happened at night." },
      accept: [{ text: "Sembra che l'incidente sia avvenuto di notte." }],
      errors: [{ text: "Pare che l'incidente è avvenuto di notte.", feedback: { es: "pare che + congiuntivo: sia avvenuto.", en: "pare che takes the subjunctive: sia avvenuto." } }],
      distractors: ["è", "avvenuta", "notturno"],
      tags: ["news", "congiuntivo"],
    },
    {
      id: "le-ho-detto-di", type: "sentence", target: "Le ho detto di non preoccuparsi.",
      gloss: { es: "Le dije que no se preocupara.", en: "I told her not to worry." },
      distractors: ["preoccuparti", "che", "Gli"],
      tags: ["reported-speech"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-discorso-indiretto", type: "pattern", target: "«Vengo domani.» → Ha detto che sarebbe venuto il giorno dopo.",
      gloss: { es: "el estilo indirecto", en: "reported speech" },
      pattern: {
        rule: {
          es: "Con un verbo introductorio en pasado: presente → imperfetto, passato prossimo → trapassato, futuro → condizionale passato. También cambian personas y marcadores: domani → il giorno dopo, qui → lì.",
          en: "With a past reporting verb: present → imperfetto, passato prossimo → trapassato, future → past conditional. People and markers shift too: domani → il giorno dopo, qui → lì.",
        },
        table: [["«Sono stanco.»", "Ha detto che era stanco."], ["«Ho finito.»", "Ha detto che aveva finito."], ["«Verrò.»", "Ha detto che sarebbe venuto."], ["domani · oggi · qui", "il giorno dopo · quel giorno · lì"]],
      },
      question: {
        prompt: { es: "Marco: «Domani vengo.» → Marco ha detto che ___ il giorno dopo.", en: "Marco: 'Domani vengo.' → Marco ha detto che ___ il giorno dopo." },
        options: ["sarebbe venuto", "verrà", "verrebbe", "viene"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "reported-speech"],
    },
    {
      id: "pat-concordanza", type: "pattern", target: "Penso che sia · Pensavo che fosse",
      gloss: { es: "la concordancia de tiempos con congiuntivo", en: "sequence of tenses with the subjunctive" },
      pattern: {
        rule: {
          es: "Verbo principal en presente → congiuntivo presente (penso che sia); en pasado → congiuntivo imperfetto o trapassato (pensavo che fosse / fosse stato). Igual que en español.",
          en: "Main verb in the present → present subjunctive (penso che sia); in the past → imperfect or pluperfect subjunctive (pensavo che fosse / fosse stato).",
        },
        table: [["presente", "Credo che venga."], ["passato, contemporaneo", "Credevo che venisse."], ["passato, anteriore", "Credevo che fosse già venuto."]],
      },
      question: {
        prompt: { es: "Completa: «Pensavo che tu ___ già partito.»", en: "Complete: 'Pensavo che tu ___ già partito.'" },
        options: ["fossi", "sia", "sei", "saresti"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "concordanza"],
    },
    {
      id: "pat-domande-indirette", type: "pattern", target: "Mi ha chiesto se… · dove… · quando…",
      gloss: { es: "preguntas indirectas", en: "indirect questions" },
      pattern: {
        rule: {
          es: "Sí/no → se (si); con palabra interrogativa se conserva (dove, quando, perché). Los tiempos cambian como en el estilo indirecto: «Hai fame?» → Mi ha chiesto se avevo fame.",
          en: "Yes/no → se (if); question words stay (dove, quando, perché). Tenses shift as in reported speech: «Hai fame?» → Mi ha chiesto se avevo fame.",
        },
        table: [["«Vieni?»", "Mi ha chiesto se venivo."], ["«Dove abiti?»", "Mi ha chiesto dove abitavo."]],
      },
      question: {
        prompt: { es: "Paolo: «Hai fame?» → Paolo mi ha chiesto ___ avevo fame.", en: "Paolo: 'Hai fame?' → Paolo mi ha chiesto ___ avevo fame." },
        options: ["se", "che", "come", "quando"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "reported-speech"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-incendio", type: "listening",
      target: "Un incendio è scoppiato ieri sera in un magazzino alla periferia di Torino. Secondo i vigili del fuoco, nessuno è rimasto ferito, ma i danni sono ingenti.",
      gloss: {
        es: "Anoche se desató un incendio en un depósito de las afueras de Turín. Según los bomberos, nadie resultó herido, pero los daños son enormes.",
        en: "A fire broke out last night in a warehouse on the outskirts of Turin. According to the fire brigade, nobody was hurt, but the damage is huge.",
      },
      question: {
        prompt: { es: "¿Hubo heridos?", en: "Was anyone hurt?" },
        options: [
          { es: "No, pero los daños son enormes.", en: "No, but the damage is huge." },
          { es: "Sí, dos bomberos.", en: "Yes, two firefighters." },
          { es: "Sí, varios trabajadores.", en: "Yes, several workers." },
          { es: "Todavía no se sabe.", en: "It isn't known yet." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "news"],
    },
    {
      id: "dlg-giulia", type: "dialogue", register: "informal", target: "Ti ha detto perché?",
      gloss: { es: "¿Te dijo por qué?", en: "Did she tell you why?" },
      turns: [
        { who: "A", target: "Hai sentito Giulia?", gloss: { es: "¿Hablaste con Giulia?", en: "Have you heard from Giulia?" } },
        { who: "B", target: "Sì, mi ha detto che non sarebbe venuta alla festa.", gloss: { es: "Sí, me dijo que no vendría a la fiesta.", en: "Yes, she told me she wouldn't come to the party." } },
        { who: "A", target: "Ti ha detto perché?", gloss: { es: "¿Te dijo por qué?", en: "Did she tell you why?" } },
        { who: "B", target: "Ha detto che doveva lavorare.", gloss: { es: "Dijo que tenía que trabajar.", en: "She said she had to work." } },
      ],
      question: {
        prompt: { es: "¿Por qué Giulia no va a la fiesta?", en: "Why isn't Giulia coming to the party?" },
        options: [
          { es: "Tiene que trabajar.", en: "She has to work." },
          { es: "Está enferma.", en: "She's ill." },
          { es: "No la invitaron.", en: "She wasn't invited." },
          { es: "Está de viaje.", en: "She's away." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "reported-speech"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-incidente", type: "bridge", onlyFor: "es", target: "l'incidente",
      gloss: { es: "el accidente", en: "the accident" },
      question: {
        prompt: { es: "«Ha avuto un incidente in autostrada» significa…", en: "'Ha avuto un incidente in autostrada' means…" },
        options: [
          { es: "Tuvo un accidente en la autopista.", en: "He had an accident on the motorway." },
          { es: "Tuvo un pequeño problema sin importancia en la autopista.", en: "He had a minor hitch on the motorway." },
          { es: "Vio un incendio en la autopista.", en: "He saw a fire on the motorway." },
          { es: "Lo multaron en la autopista.", en: "He got a fine on the motorway." },
        ],
        answer: 0,
      },
      note: { es: "En italiano «incidente» es sobre todo un accidente (incidente stradale); «un imprevisto» es un contratiempo." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "news"],
    },
  ]),
};
