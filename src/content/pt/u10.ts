import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u10",
  lang: "pt",
  index: 10,
  cefr: "A2",
  title: { target: "O fim de semana", es: "El fin de semana", en: "The weekend" },
  canDo: [
    { es: "Puedo contar qué hice el fin de semana o en las vacaciones.", en: "I can say what I did at the weekend or on holiday." },
    { es: "Sé el pretérito perfeito de los verbos regulares y de ser, ir, fazer, ter y estar.", en: "I can use the pretérito perfeito of regular verbs and of ser, ir, fazer, ter and estar." },
  ],
  icon: "🏖️",
  items: build("pt", 10, "A2", [
    // ── Words ────────────────────────────────────────────────
    { id: "ontem", type: "word", pos: "adv", target: "ontem", gloss: { es: "ayer", en: "yesterday" }, distractors: ["anteontem", "amanhã", "hoje"], tags: ["time", "past"] },
    { id: "semana-passada", type: "phrase", pos: "phrase", target: "a semana passada", gloss: { es: "la semana pasada", en: "last week" }, accept: [{ text: "semana passada" }], distractors: ["a semana passado", "a passada semana de", "a próxima semana"], tags: ["time", "past"] },
    { id: "churrasco", type: "word", pos: "noun", target: "o churrasco", gender: "m", plural: "os churrascos", gloss: { es: "el asado (la parrillada)", en: "the barbecue" }, distractors: ["a churrasco", "o churro", "o assado de"], tags: ["leisure", "food", "culture"] },
    { id: "passeio", type: "word", pos: "noun", target: "o passeio", gender: "m", plural: "os passeios", gloss: { es: "el paseo, la salida", en: "the outing / trip" }, distractors: ["a passeia", "o passaporte", "o paseio"], note: { es: "dar um passeio = dar una vuelta. En Portugal, «o passeio» también es la vereda.", en: "dar um passeio = to go for a stroll. In Portugal 'o passeio' is also the pavement." }, tags: ["leisure"] },
    { id: "sair", type: "word", pos: "verb", target: "sair", gloss: { es: "salir", en: "to go out / to leave" }, forms: { eu: "saio", "eu (pret.)": "saí", "ele (pret.)": "saiu" }, distractors: ["salir", "subir", "sai"], tags: ["leisure", "verbs"] },
    { id: "encontrar", type: "word", pos: "verb", target: "encontrar", gloss: { es: "encontrar / quedar con alguien", en: "to meet (up with)" }, forms: { "eu (pret.)": "encontrei", "ele (pret.)": "encontrou" }, distractors: ["encontro", "conhecer", "contar"], tags: ["leisure", "verbs"] },
    { id: "cansado", type: "word", pos: "adj", target: "cansado", gloss: { es: "cansado", en: "tired" }, accept: [{ text: "cansada" }], distractors: ["casado", "canseira", "cansaço"], tags: ["feelings"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "o-que-voce-fez", type: "sentence", target: "O que você fez no fim de semana?", register: "informal",
      gloss: { es: "¿Qué hiciste el fin de semana?", en: "What did you do at the weekend? (informal)" },
      variants: [{ region: "PT", text: "O que fizeste no fim de semana?" }],
      errors: [{ text: "O que você fazeu no fim de semana?", feedback: { es: "fazer es irregular: eu fiz, você fez.", en: "fazer is irregular: eu fiz, você fez." }, ruleId: "pt-g-preterito-irregular" }],
      distractors: ["fiz", "faz", "na"],
      tags: ["past", "leisure"],
    },
    {
      id: "fui-a-praia", type: "sentence", target: "No sábado eu fui à praia com uns amigos.",
      gloss: { es: "El sábado fui a la playa con unos amigos.", en: "On Saturday I went to the beach with some friends." },
      accept: [{ text: "No sábado fui à praia com uns amigos." }, { text: "No sábado eu fui para a praia com uns amigos." }],
      distractors: ["foi", "na", "vou"],
      tags: ["past", "leisure"],
    },
    {
      id: "comemos-churrasco", type: "sentence", target: "No domingo a gente fez um churrasco e comeu demais.",
      gloss: { es: "El domingo hicimos un asado y comimos demasiado.", en: "On Sunday we had a barbecue and ate far too much." },
      accept: [{ text: "No domingo nós fizemos um churrasco e comemos demais." }],
      variants: [{ region: "PT", text: "No domingo fizemos um churrasco e comemos demasiado." }],
      distractors: ["fazeu", "comi", "fiz"],
      note: { es: "«a gente» (nosotros) va con el verbo en 3.ª persona singular: a gente fez.", en: "'a gente' (we) takes the he/she verb form: a gente fez." },
      grammar: ["pt-g-a-gente"], tags: ["past", "leisure", "food"],
    },
    {
      id: "fiquei-em-casa", type: "sentence", target: "Eu fiquei em casa e assisti a uma série.",
      gloss: { es: "Me quedé en casa y vi una serie.", en: "I stayed in and watched a series." },
      accept: [{ text: "Fiquei em casa e assisti a uma série." }, { text: "Eu fiquei em casa e assisti uma série." }],
      errors: [{ text: "Eu fiquei na casa e assisti a uma série.", feedback: { es: "«en casa» (la propia) es «em casa», sin artículo.", en: "'At home' is 'em casa', with no article." } }],
      distractors: ["fico", "na", "assistiu"],
      tags: ["past", "leisure"],
    },
    {
      id: "nao-tive-tempo", type: "sentence", target: "Não tive tempo de ligar para você, desculpa!", register: "informal",
      gloss: { es: "No tuve tiempo de llamarte, ¡perdón!", en: "I didn't have time to call you, sorry!" },
      accept: [{ text: "Não tive tempo de te ligar, desculpa!" }],
      distractors: ["teve", "a", "tenho"],
      note: { es: "ligar para alguien = llamar por teléfono a alguien.", en: "ligar para alguém = to phone someone." },
      tags: ["past"],
    },
    {
      id: "foi-otimo", type: "sentence", target: "Foi ótimo, mas eu estou morto de cansado.",
      gloss: { es: "Estuvo genial, pero estoy muerto de cansancio.", en: "It was great, but I'm dead tired." },
      accept: [{ text: "Foi ótimo, mas eu estou morta de cansada." }, { text: "Foi ótimo, mas estou morto de cansado." }],
      distractors: ["Era", "Esteve", "cansaço"],
      tags: ["past", "feelings"],
    },
    {
      id: "voce-ja-foi", type: "sentence", target: "Você já foi a Salvador?", register: "informal",
      gloss: { es: "¿Ya fuiste a Salvador?", en: "Have you ever been to Salvador? (informal)" },
      accept: [{ text: "Você já esteve em Salvador?" }],
      distractors: ["vai", "em", "foste"],
      note: { es: "Para experiencias, el pretérito perfeito con «já»: já fui (ya fui / he ido).", en: "For experiences Portuguese uses the simple past with já: já fui = I've been." },
      tags: ["past", "travel"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-falar-preterito", type: "paradigm", target: "falar — pretérito perfeito", spoken: "falar",
      gloss: { es: "«falar» en pretérito perfeito (pasado)", en: "falar — simple past" },
      grammar: ["pt-g-preterito-regular"],
      paradigm: {
        caption: { es: "Conjuga «falar» en pasado (falei…)", en: "Conjugate falar in the simple past (falei…)" },
        cells: [
          { label: "eu", answer: "falei", ruleId: "pt-g-preterito-regular" },
          { label: "você / ele / ela", answer: "falou", ruleId: "pt-g-preterito-regular" },
          { label: "nós", answer: "falamos", accept: ["falámos"], ruleId: "pt-g-preterito-regular" },
          { label: "vocês / eles / elas", answer: "falaram", ruleId: "pt-g-preterito-regular" },
        ],
      },
      tags: ["grammar", "past", "table"],
    },
    {
      id: "tab-ir-preterito", type: "paradigm", target: "ser / ir — pretérito perfeito", spoken: "ser, ir",
      gloss: { es: "«ser» e «ir» en pasado (iguales)", en: "ser and ir in the simple past (same forms)" },
      grammar: ["pt-g-preterito-irregular"],
      paradigm: {
        caption: { es: "Conjuga «ir» (= «ser») en pasado", en: "Conjugate ir (= ser) in the simple past" },
        cells: [
          { label: "eu", answer: "fui", ruleId: "pt-g-preterito-irregular" },
          { label: "você / ele / ela", answer: "foi", ruleId: "pt-g-preterito-irregular" },
          { label: "nós", answer: "fomos", ruleId: "pt-g-preterito-irregular" },
          { label: "vocês / eles / elas", answer: "foram", ruleId: "pt-g-preterito-irregular" },
        ],
      },
      tags: ["grammar", "past", "table"],
    },
    {
      id: "pat-preterito", type: "pattern", target: "falei · comi · abri — falou · comeu · abriu",
      gloss: { es: "el pretérito perfeito regular", en: "the regular simple past" },
      pattern: {
        rule: {
          es: "Es el pasado simple (hablé, comí). -ar: -ei, -ou, -amos, -aram. -er: -i, -eu, -emos, -eram. -ir: -i, -iu, -imos, -iram. En Brasil «falamos» es presente y pasado; el contexto decide.",
          en: "It's the simple past (spoke, ate). -ar: -ei, -ou, -amos, -aram. -er: -i, -eu, -emos, -eram. -ir: -i, -iu, -imos, -iram. In Brazil 'falamos' is both present and past.",
        },
        table: [["", "-ar", "-er", "-ir"], ["eu", "falei", "comi", "abri"], ["você / ele", "falou", "comeu", "abriu"], ["nós", "falamos", "comemos", "abrimos"], ["vocês / eles", "falaram", "comeram", "abriram"]],
      },
      question: {
        prompt: { es: "Completa: «Ontem eu ___ muito.» (trabalhar)", en: "Complete: 'Ontem eu ___ muito.' (trabalhar)" },
        options: ["trabalhei", "trabalhou", "trabalho", "trabalhé"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-preterito-regular"], tags: ["grammar", "past"],
    },
    {
      id: "pat-preterito-irregular", type: "pattern", target: "fui · fiz · tive · estive",
      gloss: { es: "pretéritos irregulares frecuentes", en: "common irregular past forms" },
      pattern: {
        rule: {
          es: "ser e ir comparten el pasado (fui, foi, fomos, foram), como en español. fazer: fiz, fez. ter: tive, teve. estar: estive, esteve. poder: pude, pôde.",
          en: "ser and ir share their past forms (fui, foi, fomos, foram). fazer: fiz, fez. ter: tive, teve. estar: estive, esteve. poder: pude, pôde.",
        },
        table: [["", "eu", "ele / você"], ["ser / ir", "fui", "foi"], ["fazer", "fiz", "fez"], ["ter", "tive", "teve"], ["estar", "estive", "esteve"], ["poder", "pude", "pôde"]],
      },
      question: {
        prompt: { es: "Completa: «Ela não ___ vir à festa.» (poder, pasado)", en: "Complete: 'Ela não ___ vir à festa.' (poder, past)" },
        options: ["pôde", "pode", "pudo", "podeu"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-preterito-irregular"], tags: ["grammar", "past"],
    },
    {
      id: "pat-a-gente", type: "pattern", target: "a gente vai = nós vamos",
      gloss: { es: "«a gente» = nosotros", en: "a gente = we" },
      pattern: {
        rule: {
          es: "En el Brasil hablado, «a gente» reemplaza casi siempre a «nós» y va con el verbo en 3.ª persona singular: a gente mora aqui = nós moramos aqui.",
          en: "In spoken Brazilian Portuguese, 'a gente' (literally 'the people') usually replaces nós and takes the he/she verb form: a gente mora aqui = we live here.",
        },
        table: [["nós", "a gente"], ["nós vamos", "a gente vai"], ["nós fizemos", "a gente fez"], ["nós estamos", "a gente está"]],
      },
      question: {
        prompt: { es: "Completa: «Ontem a gente ___ ao cinema.»", en: "Complete: 'Ontem a gente ___ ao cinema.'" },
        options: ["foi", "fomos", "foram", "fui"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-a-gente"], tags: ["grammar", "colloquial"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-ferias", type: "listening", target: "Nas férias eu fui para Florianópolis. Fiquei numa pousada perto do mar e visitei quase todas as praias da ilha. Choveu só um dia!",
      gloss: { es: "En las vacaciones fui a Florianópolis. Me quedé en una posada cerca del mar y visité casi todas las playas de la isla. ¡Llovió solo un día!", en: "On holiday I went to Florianópolis. I stayed at a guesthouse near the sea and visited almost all the island's beaches. It only rained one day!" },
      question: {
        prompt: { es: "¿Qué tal estuvo el tiempo?", en: "What was the weather like?" },
        options: [
          { es: "Bueno: llovió solo un día", en: "Good: it only rained one day" },
          { es: "Malo: llovió todos los días", en: "Bad: it rained every day" },
          { es: "Hizo mucho frío", en: "It was very cold" },
          { es: "No lo dice", en: "The speaker doesn't say" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "past", "travel"],
    },
    {
      id: "dlg-segunda", type: "dialogue", target: "Que inveja!",
      gloss: { es: "¡Qué envidia!", en: "I'm so jealous!" },
      turns: [
        { who: "A", target: "E aí, como foi o fim de semana?", gloss: { es: "¿Y? ¿Cómo estuvo el fin de semana?", en: "So, how was the weekend?" } },
        { who: "B", target: "Foi ótimo! Fui a um show do Gilberto Gil.", gloss: { es: "¡Buenísimo! Fui a un concierto de Gilberto Gil.", en: "Great! I went to a Gilberto Gil gig." } },
        { who: "A", target: "Que inveja! Eu só trabalhei.", gloss: { es: "¡Qué envidia! Yo solo trabajé.", en: "I'm so jealous! I just worked." } },
      ],
      question: {
        prompt: { es: "¿Qué hizo A el fin de semana?", en: "What did A do at the weekend?" },
        options: [
          { es: "Trabajó", en: "Worked" },
          { es: "Fue a un concierto", en: "Went to a gig" },
          { es: "Se quedó en casa descansando", en: "Rested at home" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "past"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-embaracada", type: "bridge", onlyFor: "es", target: "Fiquei embaraçada.",
      gloss: { es: "Me dio vergüenza.", en: "I was embarrassed." },
      question: {
        prompt: { es: "Una amiga te cuenta «Fiquei tão embaraçada!». Quiere decir que…", en: "A friend says 'Fiquei tão embaraçada!'. She means…" },
        options: [{ es: "pasó mucha vergüenza", en: "she was really embarrassed" }, { es: "quedó embarazada", en: "she got pregnant" }, { es: "se enojó mucho", en: "she got really angry" }],
        answer: 0,
      },
      note: { es: "Falso amigo: «embaraçada» = avergonzada o confundida; «embarazada» se dice «grávida»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "feelings"],
    },
    {
      id: "br-en-ja", type: "bridge", onlyFor: "en", target: "Já comi.",
      gloss: { es: "Ya comí.", en: "I've already eaten." },
      distractors: ["Tenho comido.", "Já tenho comido.", "Eu comido."],
      note: { en: "English 'have done' is usually the simple past in Portuguese: já comi; 'tenho comido' means 'I've been eating (lately)'." },
      exercises: ["guess", "recall"], tags: ["bridge", "past"],
    },
  ]),
};
