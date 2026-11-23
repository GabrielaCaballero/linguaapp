import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u17",
  lang: "fr",
  index: 17,
  cefr: "B1",
  title: { target: "Si j'étais…", es: "Si yo fuera…", en: "If I were…" },
  canDo: [
    { es: "Puedo hablar de situaciones imaginarias y de lo que haría.", en: "I can talk about imaginary situations and what I would do." },
    { es: "Puedo pedir cosas con cortesía y expresar deseos.", en: "I can make polite requests and express wishes." },
    { es: "Sé usar el condicional presente y «si + imparfait».", en: "I can use the present conditional and 'si + imparfait'." },
  ],
  icon: "💭",
  items: build("fr", 17, "B1", [
    { id: "rever", type: "word", pos: "verb", target: "rêver", gloss: { es: "soñar", en: "to dream" }, distractors: ["revoir", "lever", "river"], note: { es: "rêver de + algo: je rêve de voyager.", en: "rêver de + something: je rêve de voyager." }, tags: ["wishes"] },
    { id: "gagner", type: "word", pos: "verb", target: "gagner", gloss: { es: "ganar", en: "to win / earn" }, distractors: ["gagnant", "garder", "baigner"], note: { es: "gagner au loto = ganar la lotería; gagner sa vie = ganarse la vida.", en: "gagner au loto = to win the lottery; gagner sa vie = to earn a living." }, tags: ["wishes", "money"] },
    { id: "loto", type: "word", pos: "noun", target: "le loto", gender: "m", plural: "les lotos", gloss: { es: "la lotería", en: "the lottery" }, distractors: ["la loto", "le lot", "le logo"], tags: ["wishes"] },
    { id: "monde", type: "word", pos: "noun", target: "le monde", gender: "m", plural: "les mondes", gloss: { es: "el mundo", en: "the world" }, distractors: ["la monde", "le mode", "la ronde"], note: { es: "tout le monde = todo el mundo, todos; faire le tour du monde = dar la vuelta al mundo.", en: "tout le monde = everybody; faire le tour du monde = to travel round the world." }, tags: ["wishes", "travel"] },
    { id: "a-ta-place", type: "phrase", pos: "phrase", target: "À ta place, je…", register: "informal", gloss: { es: "Yo que tú…", en: "If I were you… (informal)" }, accept: [{ text: "Si j'étais toi, je…" }], distractors: ["À ma place, je…", "À votre place, je…", "En ta place, je…"], tags: ["advice", "chunk"] },
    { id: "a-votre-place", type: "phrase", pos: "phrase", target: "À votre place, je…", register: "formal", gloss: { es: "Yo que usted…", en: "If I were you… (formal)" }, distractors: ["À ta place, je…", "À vous place, je…", "Dans votre place, je…"], tags: ["advice", "chunk"] },
    { id: "volontiers", type: "word", pos: "adv", target: "volontiers", gloss: { es: "con gusto", en: "gladly / I'd love to" }, distractors: ["volontaire", "voleur", "volets"], note: { es: "Es un sí amable a una invitación o una oferta (como «con mucho gusto»).", en: "A warm yes to an invitation or offer." }, tags: ["polite"] },
    { id: "au-moins", type: "word", pos: "adv", target: "au moins", gloss: { es: "al menos, por lo menos", en: "at least" }, distractors: ["au mois", "à moins", "au mieux"], tags: ["connectors"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "si-javais-le-temps", type: "sentence", target: "Si j'avais le temps, j'apprendrais le piano.",
      gloss: { es: "Si tuviera tiempo, aprendería a tocar el piano.", en: "If I had time, I'd learn the piano." },
      errors: [{ text: "Si j'aurais le temps, j'apprendrais le piano.", feedback: { es: "Tras «si» nunca va condicional: si j'avais (como «si tuviera»).", en: "Never the conditional after 'si': si j'avais." }, ruleId: "fr-g-si-imparfait" }],
      distractors: ["aurais", "apprendrai", "eu"],
      tags: ["hypotheses"],
    },
    {
      id: "si-je-gagnais", type: "sentence", target: "Si je gagnais au loto, je ferais le tour du monde.",
      gloss: { es: "Si me ganara la lotería, daría la vuelta al mundo.", en: "If I won the lottery, I'd travel round the world." },
      errors: [{ text: "Si je gagnerais au loto, je ferais le tour du monde.", feedback: { es: "si + imparfait, y el condicional en la otra parte: si je gagnais…, je ferais.", en: "si + imparfait, then the conditional: si je gagnais…, je ferais." }, ruleId: "fr-g-si-imparfait" }],
      distractors: ["gagnerais", "fais", "le loto"],
      tags: ["hypotheses", "wishes"],
    },
    {
      id: "pourriez-vous", type: "sentence", target: "Pourriez-vous m'aider, s'il vous plaît ?", register: "formal",
      gloss: { es: "¿Podría ayudarme, por favor?", en: "Could you help me, please? (formal)" },
      accept: [{ text: "Vous pourriez m'aider, s'il vous plaît ?" }],
      distractors: ["Pouvez", "me", "aidez"],
      tags: ["polite", "conditional"],
    },
    {
      id: "jaimerais-bien", type: "sentence", target: "J'aimerais bien vivre au bord de la mer.",
      gloss: { es: "Me encantaría vivir junto al mar.", en: "I'd really like to live by the sea." },
      distractors: ["aimerai", "à", "mère"],
      tags: ["wishes", "conditional"],
    },
    {
      id: "ce-serait-genial", type: "phrase", pos: "phrase", target: "Ce serait génial !",
      gloss: { es: "¡Sería genial!", en: "That would be great!" },
      distractors: ["Ce sera génial !", "Ce serais génial !", "Ce était génial !"],
      tags: ["conditional", "chunk"],
    },
    {
      id: "a-ta-place-je-partirais", type: "sentence", target: "À ta place, je partirais en vacances.", register: "informal",
      gloss: { es: "Yo que tú, me iría de vacaciones.", en: "If I were you, I'd go on holiday." },
      distractors: ["partirai", "pars", "au"],
      tags: ["advice", "conditional"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-conditionnel", type: "pattern", target: "je parlerais, tu parlerais, il parlerait…",
      gloss: { es: "el condicional presente", en: "the present conditional" },
      pattern: {
        rule: {
          es: "Raíz del futuro + terminaciones del imparfait: -ais, -ais, -ait, -ions, -iez, -aient (je serais, j'aurais, j'irais, je ferais). Sirve para hipótesis, deseos y pedir con cortesía.",
          en: "Future stem + imparfait endings: -ais, -ais, -ait, -ions, -iez, -aient (je serais, j'aurais, j'irais, je ferais). Used for hypotheses, wishes and polite requests.",
        },
        table: [["je voudrais", "nous voudrions"], ["tu voudrais", "vous voudriez"], ["il / elle voudrait", "ils / elles voudraient"]],
      },
      question: {
        prompt: { es: "Completa: «Nous ___ venir, mais nous travaillons.» (aimer)", en: "Complete: 'Nous ___ venir, mais nous travaillons.' (aimer)" },
        options: ["aimerions", "aimerons", "aimions", "aimerez"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-conditionnel"], tags: ["grammar", "conditional"],
    },
    {
      id: "tab-cond-pouvoir", type: "paradigm", target: "pouvoir — conditionnel", spoken: "pouvoir, conditionnel",
      gloss: { es: "«pouvoir» (poder) en condicional", en: "pouvoir (can) — conditional" },
      grammar: ["fr-g-conditionnel"],
      paradigm: {
        caption: { es: "Conjuga «pouvoir» en condicional", en: "Conjugate pouvoir in the conditional" },
        cells: [
          { label: "je", answer: "pourrais", ruleId: "fr-g-conditionnel" },
          { label: "tu", answer: "pourrais", ruleId: "fr-g-conditionnel" },
          { label: "il / elle", answer: "pourrait", ruleId: "fr-g-conditionnel" },
          { label: "nous", answer: "pourrions", ruleId: "fr-g-conditionnel" },
          { label: "vous", answer: "pourriez", ruleId: "fr-g-conditionnel" },
          { label: "ils / elles", answer: "pourraient", ruleId: "fr-g-conditionnel" },
        ],
      },
      tags: ["grammar", "conditional", "table"],
    },
    {
      id: "pat-si-imparfait", type: "pattern", target: "Si j'avais de l'argent, j'achèterais une maison.",
      gloss: { es: "si + imparfait → condicional", en: "si + imparfait → conditional" },
      pattern: {
        rule: {
          es: "Para lo imaginario: si + imparfait, y el resultado en condicional. Donde el español usa el subjuntivo (si tuviera), el francés usa el imparfait (si j'avais).",
          en: "For imaginary situations: si + imparfait, then the result in the conditional, like 'if I had…, I would…'.",
        },
        table: [["si + imparfait", "conditionnel"], ["Si j'étais riche,", "je voyagerais."], ["Si tu venais,", "on serait contents."]],
      },
      question: {
        prompt: { es: "Completa: «Si elle ___ le temps, elle viendrait.» (avoir)", en: "Complete: 'Si elle ___ le temps, elle viendrait.' (avoir)" },
        options: ["avait", "aurait", "ait", "aura"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-si-imparfait"], tags: ["grammar", "hypotheses"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-reve", type: "listening",
      target: "Si je pouvais changer de vie, je quitterais la ville. J'habiterais dans une petite maison à la campagne et j'aurais des poules. Mais je ne sais pas si je serais vraiment heureux.",
      gloss: {
        es: "Si pudiera cambiar de vida, me iría de la ciudad. Viviría en una casita en el campo y tendría gallinas. Pero no sé si de verdad sería feliz.",
        en: "If I could change my life, I'd leave the city. I'd live in a little house in the countryside and keep chickens. But I don't know if I'd really be happy.",
      },
      question: {
        prompt: { es: "¿Qué duda tiene la persona?", en: "What is the speaker unsure about?" },
        options: [
          { es: "Si de verdad sería feliz", en: "Whether he'd really be happy" },
          { es: "Si tendría bastante dinero", en: "Whether he'd have enough money" },
          { es: "Dónde viviría", en: "Where he'd live" },
          { es: "Si le gustan las gallinas", en: "Whether he likes chickens" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "hypotheses"],
    },
    {
      id: "dlg-conseil", type: "dialogue", target: "À ta place, j'accepterais.", register: "informal",
      gloss: { es: "Yo que tú, aceptaría.", en: "If I were you, I'd accept." },
      turns: [
        { who: "A", target: "On m'a proposé un poste à Montréal. Qu'est-ce que tu ferais, toi ?", gloss: { es: "Me ofrecieron un puesto en Montreal. ¿Tú qué harías?", en: "I've been offered a job in Montreal. What would you do?" } },
        { who: "B", target: "À ta place, j'accepterais. Ce serait une super expérience.", gloss: { es: "Yo que tú, aceptaría. Sería una experiencia increíble.", en: "If I were you, I'd accept. It would be a great experience." } },
        { who: "A", target: "Oui, mais si je partais, ma famille me manquerait.", gloss: { es: "Sí, pero si me fuera, extrañaría a mi familia.", en: "Yes, but if I left, I'd miss my family." } },
        { who: "B", target: "Tu pourrais revenir pour les vacances !", gloss: { es: "¡Podrías volver en vacaciones!", en: "You could come back for the holidays!" } },
      ],
      question: {
        prompt: { es: "¿Qué le preocupa a A?", en: "What worries A?" },
        options: [
          { es: "Extrañaría a su familia", en: "She'd miss her family" },
          { es: "El sueldo es bajo", en: "The salary is low" },
          { es: "No habla francés", en: "She doesn't speak French" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "advice"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-si-imparfait", type: "bridge", onlyFor: "es", target: "si j'avais",
      gloss: { es: "si tuviera", en: "if I had" },
      distractors: ["si j'aurais", "si j'aie", "si j'eusse"],
      note: { es: "Donde el español pone subjuntivo tras «si» (si tuviera), el francés pone imparfait: si j'avais, si j'étais." },
      exercises: ["guess", "recall"], tags: ["bridge", "hypotheses"],
    },
    {
      id: "br-manquer", type: "bridge", onlyFor: "es", target: "Tu me manques.",
      gloss: { es: "Te extraño.", en: "I miss you." },
      question: {
        prompt: { es: "«Tu me manques» significa…", en: "'Tu me manques' means…" },
        options: [
          { es: "Te extraño", en: "I miss you" },
          { es: "Me faltas al respeto", en: "You disrespect me" },
          { es: "Me mandas", en: "You boss me around" },
        ],
        answer: 0,
      },
      note: { es: "manquer funciona al revés: lo que se extraña es el sujeto. Tu me manques = yo te extraño a ti." },
      exercises: ["guess", "question"], tags: ["bridge", "feelings"],
    },
  ]),
};
