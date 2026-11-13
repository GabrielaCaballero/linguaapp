import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u23",
  lang: "it",
  index: 23,
  cefr: "B2",
  title: { target: "Discutere", es: "Debatir", en: "Debating" },
  canDo: [
    { es: "Puedo argumentar un punto de vista en orden: primero, además, sin embargo, en conclusión.", en: "I can argue a point of view in order: first, also, however, in conclusion." },
    { es: "Puedo reaccionar con naturalidad: no puedo más, me las arreglo, no te lo tomes a mal.", en: "I can react naturally: I can't take any more, I'll manage, don't take it personally." },
    { es: "Sé usar verbos pronominales (farcela, cavarsela, andarsene, metterci).", en: "I can use pronominal verbs (farcela, cavarsela, andarsene, metterci)." },
  ],
  icon: "🗣️",
  items: build("it", 23, "B2", [
    // ── Connectors ───────────────────────────────────────────
    {
      id: "innanzitutto", type: "word", pos: "adv", target: "innanzitutto",
      gloss: { es: "ante todo, en primer lugar", en: "first of all" },
      accept: [{ text: "innanzi tutto" }],
      distractors: ["dopotutto", "inoltre", "innanzi"],
      tags: ["connectors", "argument"],
    },
    {
      id: "inoltre", type: "word", pos: "adv", target: "inoltre",
      gloss: { es: "además", en: "furthermore / moreover" },
      distractors: ["oltre", "intorno", "invece"],
      tags: ["connectors", "argument"],
    },
    {
      id: "tuttavia", type: "word", pos: "adv", target: "tuttavia",
      gloss: { es: "sin embargo", en: "however / nevertheless" },
      distractors: ["tuttora", "tutt'altro", "tuttalpiù"],
      note: { es: "Ojo: tuttora = todavía, aún hoy.", en: "Careful: tuttora = still (to this day)." },
      tags: ["connectors", "argument"],
    },
    {
      id: "daltra-parte", type: "phrase", pos: "phrase", target: "d'altra parte",
      gloss: { es: "por otra parte", en: "on the other hand" },
      accept: [{ text: "d'altro canto" }],
      distractors: ["d'altro parte", "in altra parte", "a parte"],
      tags: ["connectors", "argument"],
    },
    {
      id: "dal-momento-che", type: "phrase", pos: "phrase", target: "dal momento che",
      gloss: { es: "dado que, ya que", en: "since / given that" },
      accept: [{ text: "visto che" }, { text: "poiché" }],
      distractors: ["al momento che", "nel momento che", "dal momento di"],
      tags: ["connectors", "argument"],
    },
    {
      id: "in-conclusione", type: "phrase", pos: "phrase", target: "in conclusione",
      gloss: { es: "en conclusión", en: "in conclusion" },
      accept: [{ text: "per concludere" }],
      distractors: ["in conclusa", "di conclusione", "con conclusione"],
      tags: ["connectors", "argument"],
    },
    {
      id: "punto-di-vista", type: "phrase", pos: "phrase", target: "il punto di vista",
      gloss: { es: "el punto de vista", en: "the point of view" },
      distractors: ["il punto di vedere", "il posto di vista", "la punta di vista"],
      tags: ["argument"],
    },
    {
      id: "convincere", type: "word", pos: "verb", target: "convincere",
      gloss: { es: "convencer", en: "to convince / persuade" },
      forms: { pp: "convinto" },
      distractors: ["vincere", "convivere", "convenire"],
      tags: ["argument"],
    },

    // ── Pronominal verbs ─────────────────────────────────────
    {
      id: "farcela", type: "word", pos: "verb", target: "farcela",
      gloss: { es: "lograrlo, poder (con algo)", en: "to manage / make it" },
      forms: { io: "ce la faccio", tu: "ce la fai", pp: "ce l'ho fatta" },
      distractors: ["farla", "farci", "farne"],
      tags: ["pronominal-verbs"],
    },
    {
      id: "cavarsela", type: "word", pos: "verb", target: "cavarsela",
      gloss: { es: "arreglárselas, defenderse", en: "to get by / cope" },
      forms: { io: "me la cavo", tu: "te la cavi", pp: "me la sono cavata" },
      distractors: ["cavarla", "cavarsi", "cavalcare"],
      tags: ["pronominal-verbs"],
    },
    {
      id: "andarsene", type: "word", pos: "verb", target: "andarsene",
      gloss: { es: "irse, marcharse", en: "to leave / go away" },
      forms: { io: "me ne vado", tu: "te ne vai", pp: "me ne sono andato/a" },
      distractors: ["andarci", "andarne", "entrarsene"],
      tags: ["pronominal-verbs"],
    },
    {
      id: "prendersela", type: "word", pos: "verb", target: "prendersela",
      gloss: { es: "ofenderse, tomárselo a mal", en: "to take offence / get upset" },
      forms: { io: "me la prendo", tu: "te la prendi", pp: "se l'è presa" },
      distractors: ["prenderla", "prendersi", "riprendere"],
      tags: ["pronominal-verbs"],
    },
    {
      id: "metterci", type: "word", pos: "verb", target: "metterci",
      gloss: { es: "tardar (tiempo)", en: "to take (time)" },
      forms: { io: "ci metto", tu: "ci metti", pp: "ci ho messo" },
      distractors: ["mettersi", "metterla", "mettere"],
      note: { es: "Personal: ci metto un'ora (tardo una hora); impersonal: ci vuole un'ora.", en: "Personal: ci metto un'ora (it takes me an hour); impersonal: ci vuole un'ora." },
      tags: ["pronominal-verbs"],
    },

    // ── Phrases & sentences ──────────────────────────────────
    {
      id: "non-ce-la-faccio-piu", type: "phrase", pos: "phrase", target: "Non ce la faccio più!",
      gloss: { es: "¡Ya no puedo más!", en: "I can't take it any more!" },
      distractors: ["Non la faccio più!", "Non ce lo faccio più!", "Non ci la faccio più!"],
      tags: ["pronominal-verbs", "chunk"],
    },
    {
      id: "non-prendertela", type: "phrase", pos: "phrase", register: "informal", target: "Non prendertela!",
      gloss: { es: "¡No te lo tomes a mal!", en: "Don't take it personally!" },
      accept: [{ text: "Non te la prendere!" }],
      distractors: ["Non prenderla!", "Non prenditela!", "Non te prendere!"],
      tags: ["pronominal-verbs", "chunk"],
    },
    {
      id: "quanto-ci-metti", type: "sentence", register: "informal", target: "Quanto ci metti ad arrivare?",
      gloss: { es: "¿Cuánto tardas en llegar?", en: "How long does it take you to get here?" },
      distractors: ["mi", "tardi", "per"],
      tags: ["pronominal-verbs"],
    },
    {
      id: "me-ne-vado", type: "sentence", target: "Me ne vado.",
      gloss: { es: "Me voy.", en: "I'm leaving." },
      errors: [{ text: "Mi ne vado.", feedback: { es: "Ante «ne», mi → me: me ne vado.", en: "Before 'ne', mi → me: me ne vado." } }],
      distractors: ["Mi", "ci", "vai"],
      tags: ["pronominal-verbs"],
    },
    {
      id: "me-la-cavo", type: "sentence", target: "Con l'inglese me la cavo.",
      gloss: { es: "Con el inglés me defiendo.", en: "I get by in English." },
      accept: [{ text: "Me la cavo con l'inglese." }],
      distractors: ["Mi", "cava", "lo"],
      tags: ["pronominal-verbs"],
    },
    {
      id: "tuttavia-non-sono-daccordo", type: "sentence", target: "Tuttavia, non sono del tutto d'accordo.",
      gloss: { es: "Sin embargo, no estoy del todo de acuerdo.", en: "However, I don't entirely agree." },
      distractors: ["Tuttora", "tutta", "ho"],
      tags: ["argument"],
    },
    {
      id: "dal-momento-che-nessuno", type: "sentence", target: "Dal momento che nessuno risponde, me ne vado.",
      gloss: { es: "Ya que nadie contesta, me voy.", en: "Since nobody's answering, I'm leaving." },
      accept: [{ text: "Visto che nessuno risponde, me ne vado." }],
      distractors: ["risponda", "ci", "mi"],
      tags: ["argument", "pronominal-verbs"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-connettivi", type: "pattern", target: "innanzitutto · inoltre · d'altra parte · tuttavia · quindi · in conclusione",
      gloss: { es: "conectores para argumentar", en: "connectors for arguing a point" },
      pattern: {
        rule: {
          es: "Ordenar: innanzitutto, poi, infine. Añadir: inoltre. Contrastar: tuttavia, d'altra parte, però. Concluir: quindi, in conclusione. Causa: dal momento che, visto che.",
          en: "Order: innanzitutto, poi, infine. Add: inoltre. Contrast: tuttavia, d'altra parte, però. Conclude: quindi, in conclusione. Cause: dal momento che, visto che.",
        },
        table: [["ordine", "innanzitutto · poi · infine"], ["aggiunta", "inoltre"], ["contrasto", "tuttavia · d'altra parte"], ["conclusione", "quindi · in conclusione"]],
      },
      question: {
        prompt: { es: "Elige el conector de contraste: «Il progetto è interessante; ___, costa troppo.»", en: "Pick the contrast connector: 'Il progetto è interessante; ___, costa troppo.'" },
        options: ["tuttavia", "inoltre", "innanzitutto", "quindi"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "connectors"],
    },
    {
      id: "pat-verbi-pronominali", type: "pattern", target: "ce la faccio · me la cavo · me ne vado · te la prendi",
      gloss: { es: "verbos pronominales", en: "pronominal verbs" },
      pattern: {
        rule: {
          es: "Llevan pronombres fijos que cambian el significado: farcela (lograrlo), cavarsela (arreglárselas), andarsene (irse), prendersela (ofenderse). Se conjuga solo el verbo: ce la faccio, ce la fai.",
          en: "Fixed pronouns change the meaning: farcela (manage), cavarsela (get by), andarsene (leave), prendersela (take offence). Only the verb is conjugated: ce la faccio, ce la fai.",
        },
        table: [["farcela", "ce la faccio / ce la fai / ce la facciamo"], ["cavarsela", "me la cavo / te la cavi"], ["andarsene", "me ne vado / te ne vai"], ["prendersela", "me la prendo / te la prendi"]],
      },
      question: {
        prompt: { es: "Completa (noi, farcela): «Non preoccuparti, ce la ___!»", en: "Complete (noi, farcela): 'Non preoccuparti, ce la ___!'" },
        options: ["facciamo", "fanno", "fate", "faccio"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "pronominal-verbs"],
    },
    {
      id: "pat-metterci-volerci", type: "pattern", target: "ci metto un'ora · ci vuole un'ora · ci vogliono due ore",
      gloss: { es: "metterci y volerci (tiempo necesario)", en: "metterci and volerci (time needed)" },
      pattern: {
        rule: {
          es: "metterci tiene sujeto personal (ci metto un'ora = tardo una hora). volerci es impersonal y concuerda con lo necesario: ci vuole un'ora, ci vogliono due ore.",
          en: "metterci has a personal subject (ci metto un'ora = it takes me an hour). volerci is impersonal and agrees with what's needed: ci vuole un'ora, ci vogliono due ore.",
        },
        table: [["metterci", "Quanto ci metti? — Ci metto venti minuti."], ["volerci", "Ci vuole pazienza. · Ci vogliono tre ore."]],
      },
      question: {
        prompt: { es: "Completa: «Per arrivare a Roma ___ tre ore.»", en: "Complete: 'Per arrivare a Roma ___ tre ore.'" },
        options: ["ci vogliono", "ci vuole", "ci metti", "ci vuoi"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "pronominal-verbs"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-smart-working", type: "listening",
      target: "Innanzitutto, lavorare da casa fa risparmiare tempo. Inoltre, riduce il traffico. Tuttavia, molte persone si sentono più sole.",
      gloss: {
        es: "Ante todo, trabajar desde casa ahorra tiempo. Además, reduce el tráfico. Sin embargo, muchas personas se sienten más solas.",
        en: "First of all, working from home saves time. It also reduces traffic. However, many people feel lonelier.",
      },
      question: {
        prompt: { es: "¿Qué desventaja menciona?", en: "What drawback does the speaker mention?" },
        options: [
          { es: "Muchas personas se sienten más solas.", en: "Many people feel lonelier." },
          { es: "Se pierde mucho tiempo.", en: "It wastes a lot of time." },
          { es: "Aumenta el tráfico.", en: "It increases traffic." },
          { es: "Se gana menos dinero.", en: "People earn less." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "argument"],
    },
    {
      id: "dlg-rapporto", type: "dialogue", register: "informal", target: "Me la caverò.",
      gloss: { es: "Me las arreglaré.", en: "I'll manage." },
      turns: [
        { who: "A", target: "Allora, ce la fai a finire il rapporto entro venerdì?", gloss: { es: "Entonces, ¿llegas a terminar el informe para el viernes?", en: "So, can you manage to finish the report by Friday?" } },
        { who: "B", target: "Ci provo, ma non te lo garantisco.", gloss: { es: "Lo intento, pero no te lo garantizo.", en: "I'll try, but I can't promise." } },
        { who: "A", target: "Se hai bisogno di aiuto, dimmelo.", gloss: { es: "Si necesitas ayuda, dímelo.", en: "If you need help, tell me." } },
        { who: "B", target: "Grazie, me la caverò.", gloss: { es: "Gracias, me las arreglaré.", en: "Thanks, I'll manage." } },
      ],
      question: {
        prompt: { es: "¿B promete terminar el informe el viernes?", en: "Does B promise to finish the report by Friday?" },
        options: [
          { es: "Lo intentará, pero no lo garantiza.", en: "B will try but can't promise." },
          { es: "Sí, seguro.", en: "Yes, definitely." },
          { es: "No, ya sabe que no puede.", en: "No, B knows it's impossible." },
          { es: "Solo si alguien lo ayuda.", en: "Only if someone helps." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "pronominal-verbs"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-litigare", type: "bridge", onlyFor: "es", target: "litigare",
      gloss: { es: "pelearse, discutir", en: "to argue / quarrel" },
      question: {
        prompt: { es: "«I miei vicini litigano sempre» significa…", en: "'I miei vicini litigano sempre' means…" },
        options: [
          { es: "Mis vecinos siempre se pelean.", en: "My neighbours are always arguing." },
          { es: "Mis vecinos siempre van a juicio.", en: "My neighbours are always going to court." },
          { es: "Mis vecinos siempre negocian.", en: "My neighbours are always negotiating." },
          { es: "Mis vecinos siempre se quejan.", en: "My neighbours are always complaining." },
        ],
        answer: 0,
      },
      note: { es: "litigare = pelearse (con palabras); un juicio es «una causa» o «un processo»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
  ]),
};
