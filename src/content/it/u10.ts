import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u10",
  lang: "it",
  index: 10,
  cefr: "A2",
  title: { target: "Il fine settimana", es: "El fin de semana", en: "The weekend" },
  canDo: [
    { es: "Puedo contar qué hice el fin de semana.", en: "I can say what I did at the weekend." },
    { es: "Puedo preguntar a alguien qué tal le fue.", en: "I can ask someone how something went." },
    { es: "Sé formar el passato prossimo con avere y essere.", en: "I can form the passato prossimo with avere and essere." },
  ],
  icon: "🏖️",
  items: build("it", 10, "A2", [
    // ── Time words ───────────────────────────────────────────
    {
      id: "ieri", type: "word", pos: "adv", target: "ieri",
      gloss: { es: "ayer", en: "yesterday" },
      distractors: ["oggi", "domani", "prima"],
      tags: ["time", "past"],
    },
    {
      id: "settimana-scorsa", type: "phrase", pos: "phrase", target: "la settimana scorsa",
      gloss: { es: "la semana pasada", en: "last week" },
      accept: [{ text: "la scorsa settimana" }],
      distractors: ["la settimana prossima", "la settimana corsa", "la settimana passato"],
      tags: ["time", "past"],
    },
    {
      id: "due-giorni-fa", type: "phrase", pos: "phrase", target: "due giorni fa",
      gloss: { es: "hace dos días", en: "two days ago" },
      distractors: ["fra due giorni", "da due giorni", "due giorni dopo"],
      note: { es: "«fa» va detrás: un mese fa = hace un mes.", en: "'fa' goes after: un mese fa = a month ago." },
      tags: ["time", "past"],
    },
    {
      id: "fine-settimana", type: "word", pos: "noun", target: "il fine settimana", gender: "m", plural: "i fine settimana",
      gloss: { es: "el fin de semana", en: "the weekend" },
      distractors: ["la fine settimana", "il fine mese", "la fine"],
      note: { es: "También se dice «il weekend».", en: "Italians also say 'il weekend'." },
      tags: ["time"],
    },

    // ── Places & verbs ───────────────────────────────────────
    {
      id: "museo", type: "word", pos: "noun", target: "il museo", gender: "m", plural: "i musei",
      gloss: { es: "el museo", en: "the museum" },
      distractors: ["la museo", "il musico", "il muso"],
      tags: ["leisure", "places"],
    },
    {
      id: "mostra", type: "word", pos: "noun", target: "la mostra", gender: "f", plural: "le mostre",
      gloss: { es: "la exposición (muestra)", en: "the exhibition" },
      distractors: ["il mostro", "la mosca", "la nostra"],
      tags: ["leisure"],
    },
    {
      id: "spiaggia", type: "word", pos: "noun", target: "la spiaggia", gender: "f", plural: "le spiagge",
      gloss: { es: "la playa", en: "the beach" },
      distractors: ["la pioggia", "lo spiaggio", "la spiga"],
      note: { es: "«andare al mare» = ir a la playa (a la costa).", en: "'andare al mare' = to go to the seaside." },
      tags: ["leisure", "places"],
    },
    {
      id: "visitare", type: "word", pos: "verb", target: "visitare",
      gloss: { es: "visitar (un lugar)", en: "to visit (a place)" },
      forms: { pp: "visitato", aux: "avere" },
      distractors: ["vivere", "avvisare", "vedere"],
      note: { es: "Para personas se dice «andare a trovare»: vado a trovare la nonna.", en: "For people, say 'andare a trovare': vado a trovare la nonna." },
      tags: ["leisure"],
    },
    {
      id: "divertirsi", type: "word", pos: "verb", target: "divertirsi",
      gloss: { es: "divertirse", en: "to have fun" },
      forms: { pp: "divertito", aux: "essere" },
      distractors: ["divertire", "dividersi", "divergere"],
      tags: ["leisure", "reflexive"],
    },
    {
      id: "riposarsi", type: "word", pos: "verb", target: "riposarsi",
      gloss: { es: "descansar", en: "to rest" },
      forms: { pp: "riposato", aux: "essere" },
      distractors: ["risposarsi", "ripassare", "rispondere"],
      note: { es: "Ojo: «risposarsi» = volver a casarse.", en: "Careful: 'risposarsi' = to remarry." },
      tags: ["leisure", "reflexive"],
    },
    {
      id: "stanco", type: "word", pos: "adj", target: "stanco",
      gloss: { es: "cansado/a", en: "tired" },
      forms: { m: "stanco", f: "stanca", mpl: "stanchi", fpl: "stanche" },
      accept: [{ text: "stanca" }],
      distractors: ["stanza", "bianco", "stagno"],
      tags: ["feelings"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "ieri-ho-mangiato", type: "sentence", target: "Ieri ho mangiato una pizza.",
      gloss: { es: "Ayer comí una pizza.", en: "Yesterday I ate a pizza." },
      accept: [{ text: "Ho mangiato una pizza ieri." }],
      errors: [{ text: "Ieri sono mangiato una pizza.", feedback: { es: "mangiare lleva avere: ho mangiato.", en: "mangiare takes avere: ho mangiato." } }],
      distractors: ["sono", "mangiata", "mangio"],
      tags: ["past", "avere"],
    },
    {
      id: "sono-andato-al-mare", type: "sentence", target: "Sabato sono andato al mare.",
      gloss: { es: "El sábado fui a la playa.", en: "On Saturday I went to the seaside." },
      accept: [{ text: "Sabato sono andata al mare." }],
      errors: [{ text: "Sabato ho andato al mare.", feedback: { es: "andare lleva essere: sono andato/a (en español «he ido» usa haber).", en: "andare takes essere: sono andato/a." } }],
      distractors: ["ho", "vado", "alla"],
      tags: ["past", "essere"],
    },
    {
      id: "cosa-hai-fatto", type: "sentence", register: "informal", target: "Che cosa hai fatto il fine settimana?",
      gloss: { es: "¿Qué hiciste el fin de semana?", en: "What did you do at the weekend?" },
      accept: [{ text: "Cosa hai fatto il fine settimana?" }, { text: "Cos'hai fatto il fine settimana?" }, { text: "Che hai fatto il fine settimana?" }],
      distractors: ["fai", "sei", "fatta"],
      tags: ["past"],
    },
    {
      id: "siamo-rimasti", type: "sentence", target: "Siamo rimasti a casa.",
      gloss: { es: "Nos quedamos en casa.", en: "We stayed at home." },
      accept: [{ text: "Siamo rimaste a casa." }, { text: "Siamo restati a casa." }],
      errors: [{ text: "Abbiamo rimasto a casa.", feedback: { es: "rimanere lleva essere: siamo rimasti.", en: "rimanere takes essere: siamo rimasti." } }],
      distractors: ["abbiamo", "rimasto", "nella"],
      tags: ["past", "essere"],
    },
    {
      id: "non-ho-visto", type: "sentence", target: "Non ho visto il film.",
      gloss: { es: "No vi la película.", en: "I didn't see the film." },
      errors: [{ text: "Ho non visto il film.", feedback: { es: "«non» va antes del auxiliar: non ho visto.", en: "'non' goes before the auxiliary: non ho visto." } }],
      distractors: ["sono", "vedo", "la"],
      tags: ["past", "irregular-pp"],
    },
    {
      id: "mi-sono-divertito", type: "sentence", target: "Mi sono divertito molto.",
      gloss: { es: "Me divertí mucho.", en: "I had a lot of fun." },
      accept: [{ text: "Mi sono divertita molto." }, { text: "Mi sono divertito tanto." }, { text: "Mi sono divertita tanto." }],
      errors: [{ text: "Mi ho divertito molto.", feedback: { es: "Los reflexivos llevan essere: mi sono divertito/a.", en: "Reflexive verbs take essere: mi sono divertito/a." } }],
      distractors: ["ho", "diverto", "molta"],
      tags: ["past", "reflexive"],
    },
    {
      id: "e-stato-bellissimo", type: "phrase", pos: "phrase", target: "È stato bellissimo!",
      gloss: { es: "¡Fue maravilloso!", en: "It was wonderful!" },
      distractors: ["Ha stato bellissimo!", "È stata bellissimo!", "È stato bellissima!"],
      note: { es: "essere también lleva essere: è stato.", en: "essere itself takes essere: è stato." },
      tags: ["past", "chunk"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-pp-avere", type: "pattern", target: "ho mangiato · ho venduto · ho dormito",
      gloss: { es: "passato prossimo con avere", en: "passato prossimo with avere" },
      pattern: {
        rule: {
          es: "avere (presente) + participio: -are → -ato, -ere → -uto, -ire → -ito. El participio no cambia: ho mangiato, abbiamo mangiato.",
          en: "avere (present) + past participle: -are → -ato, -ere → -uto, -ire → -ito. The participle doesn't change: ho mangiato, abbiamo mangiato.",
        },
        table: [["mangiare", "ho mangiato"], ["vendere", "ho venduto"], ["dormire", "ho dormito"]],
      },
      question: {
        prompt: { es: "Completa (io): «Ieri ___ dormito poco.»", en: "Complete (io): 'Ieri ___ dormito poco.'" },
        options: ["ho", "sono", "sei", "è"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "past"],
    },
    {
      id: "pat-pp-essere", type: "pattern", target: "sono andato/a · siamo usciti/e",
      gloss: { es: "passato prossimo con essere", en: "passato prossimo with essere" },
      pattern: {
        rule: {
          es: "Verbos de movimiento o cambio (andare, venire, uscire, partire, rimanere) y todos los reflexivos van con essere; el participio concuerda: Anna è andata.",
          en: "Verbs of movement or change (andare, venire, uscire, partire, rimanere) and all reflexive verbs take essere; the participle agrees: Anna è andata.",
        },
        table: [["lui", "è andato"], ["lei", "è andata"], ["loro (m)", "sono andati"], ["loro (f)", "sono andate"]],
      },
      question: {
        prompt: { es: "Completa: «Maria è ___ a Roma.»", en: "Complete: 'Maria è ___ a Roma.'" },
        options: ["andata", "andato", "andati", "andare"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "past", "essere"],
    },
    {
      id: "pat-pp-irregolari", type: "pattern", target: "fatto · visto · preso · letto · scritto · detto",
      gloss: { es: "participios irregulares", en: "irregular past participles" },
      pattern: {
        rule: {
          es: "Muchos verbos en -ere tienen participio irregular: fare → fatto, vedere → visto, prendere → preso, leggere → letto, scrivere → scritto.",
          en: "Many -ere verbs have irregular participles: fare → fatto, vedere → visto, prendere → preso, leggere → letto, scrivere → scritto.",
        },
        table: [["fare", "fatto"], ["vedere", "visto"], ["prendere", "preso"], ["leggere", "letto"], ["scrivere", "scritto"], ["dire", "detto"], ["essere", "stato"]],
      },
      question: {
        prompt: { es: "El participio de «prendere» es…", en: "The past participle of 'prendere' is…" },
        options: ["preso", "prenduto", "prendito", "presto"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "past", "irregular-pp"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-firenze", type: "listening",
      target: "Il fine settimana sono andata a Firenze con mia sorella. Abbiamo visitato gli Uffizi e abbiamo mangiato benissimo.",
      gloss: {
        es: "El fin de semana fui a Florencia con mi hermana. Visitamos los Uffizi y comimos muy bien.",
        en: "At the weekend I went to Florence with my sister. We visited the Uffizi and ate really well.",
      },
      question: {
        prompt: { es: "¿Con quién fue a Florencia?", en: "Who did she go to Florence with?" },
        options: [
          { es: "Con su hermana", en: "With her sister" },
          { es: "Con su madre", en: "With her mother" },
          { es: "Con una amiga", en: "With a friend" },
          { es: "Sola", en: "Alone" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "past"],
    },
    {
      id: "dlg-lunedi", type: "dialogue", target: "Com'è andato il fine settimana?",
      gloss: { es: "¿Qué tal el fin de semana?", en: "How was the weekend?" },
      turns: [
        { who: "A", target: "Ciao! Com'è andato il fine settimana?", gloss: { es: "¡Hola! ¿Qué tal el fin de semana?", en: "Hi! How was the weekend?" } },
        { who: "B", target: "Benissimo! Sono andato al mare con degli amici. E tu?", gloss: { es: "¡Muy bien! Fui a la playa con unos amigos. ¿Y tú?", en: "Great! I went to the seaside with some friends. And you?" } },
        { who: "A", target: "Io sono rimasta a casa e mi sono riposata.", gloss: { es: "Yo me quedé en casa y descansé.", en: "I stayed at home and rested." } },
      ],
      question: {
        prompt: { es: "¿Qué hizo A el fin de semana?", en: "What did A do at the weekend?" },
        options: [
          { es: "Se quedó en casa y descansó.", en: "She stayed at home and rested." },
          { es: "Fue a la playa.", en: "She went to the seaside." },
          { es: "Trabajó todo el fin de semana.", en: "She worked all weekend." },
          { es: "Visitó a unos amigos.", en: "She visited some friends." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "past"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-sono-andato", type: "bridge", onlyFor: "es", target: "sono andato",
      gloss: { es: "fui / he ido", en: "I went / I have gone" },
      question: {
        prompt: { es: "«He ido al cine» se dice…", en: "'I have been to the cinema' is…" },
        options: ["Sono andato al cinema.", "Ho andato al cinema.", "Ho ito al cinema.", "Sono ito al cinema."],
        answer: 0,
      },
      note: { es: "El español usa «haber» con todos los verbos; el italiano usa essere con los de movimiento: sono andato, sono uscita." },
      exercises: ["guess", "question"], tags: ["bridge", "transfer-tip", "essere"],
    },
    {
      id: "br-restare", type: "bridge", onlyFor: "es", target: "restare",
      gloss: { es: "quedarse", en: "to stay" },
      question: {
        prompt: { es: "«Resto a casa» significa…", en: "'Resto a casa' means…" },
        options: [
          { es: "Me quedo en casa.", en: "I'm staying at home." },
          { es: "Resto cuentas en casa.", en: "I do subtraction at home." },
          { es: "Regreso a casa.", en: "I'm going back home." },
          { es: "Descanso en casa.", en: "I'm resting at home." },
        ],
        answer: 0,
      },
      note: { es: "restare / rimanere = quedarse. Restar (matemáticas) es «sottrarre»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
