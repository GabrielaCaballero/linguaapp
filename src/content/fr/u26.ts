import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u26",
  lang: "fr",
  index: 26,
  cefr: "C1",
  title: { target: "Argumenter", es: "Argumentar con matices", en: "Building an argument" },
  canDo: [
    { es: "Puedo defender una postura y conceder un punto sin perder el hilo.", en: "I can defend a position and concede a point without losing the thread." },
    { es: "Sé usar conectores de concesión: bien que, quoique, pour autant, avoir beau.", en: "I can use concessive connectors: bien que, quoique, pour autant, avoir beau." },
    { es: "Sé expresar causa y consecuencia con d'autant plus que, si bien que y faute de.", en: "I can express cause and consequence with d'autant plus que, si bien que and faute de." },
  ],
  icon: "⚖️",
  items: build("fr", 26, "C1", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "quoique", type: "word", pos: "other", target: "quoique",
      gloss: { es: "aunque (formal)", en: "although (formal)" },
      distractors: ["quoi que", "pourquoi", "lorsque"],
      note: { es: "quoique (= bien que) va con subjuntivo; «quoi que» separado significa «lo que sea que».", en: "quoique (= bien que) takes the subjunctive; quoi que in two words means 'whatever'." },
      grammar: ["fr-g-concession"], tags: ["debate", "connectors"],
    },
    {
      id: "pour-autant", type: "phrase", pos: "phrase", target: "pour autant",
      gloss: { es: "no por eso, sin que eso signifique", en: "for all that / even so" },
      distractors: ["pourtant", "autant que", "par autant"],
      note: { es: "Suele ir en frase negativa: il est riche, il n'est pas heureux pour autant.", en: "Usually in a negative clause: il est riche, il n'est pas heureux pour autant." },
      grammar: ["fr-g-concession"], tags: ["debate", "connectors"],
    },
    { id: "certes", type: "word", pos: "adv", target: "certes", gloss: { es: "es cierto que, sin duda (para conceder)", en: "admittedly" }, distractors: ["certains", "certainement", "certaines"], note: { es: "Casi siempre seguido de «mais»: certes…, mais…", en: "Almost always followed by mais: certes…, mais…" }, grammar: ["fr-g-concession"], tags: ["debate", "connectors"] },
    { id: "dautant-plus-que", type: "phrase", pos: "phrase", target: "d'autant plus que", gloss: { es: "tanto más cuanto que, sobre todo porque", en: "all the more so because" }, distractors: ["d'autant que plus", "autant plus que", "de tant plus que"], grammar: ["fr-g-cause-consequence"], tags: ["debate", "connectors"] },
    { id: "dans-la-mesure-ou", type: "phrase", pos: "phrase", target: "dans la mesure où", gloss: { es: "en la medida en que", en: "insofar as" }, distractors: ["dans la mesure que", "en la mesure où", "dans la mesure dont"], grammar: ["fr-g-cause-consequence"], tags: ["debate", "connectors"] },
    {
      id: "avoir-beau", type: "phrase", pos: "phrase", target: "avoir beau",
      gloss: { es: "por más que, por mucho que", en: "no matter how much" },
      distractors: ["avoir bien", "être beau", "faire beau"],
      note: { es: "avoir beau + infinitivo: j'ai beau chercher, je ne trouve pas.", en: "avoir beau + infinitive: j'ai beau chercher, je ne trouve pas." },
      grammar: ["fr-g-concession"], tags: ["debate", "chunk"],
    },
    { id: "toujours-est-il", type: "phrase", pos: "phrase", target: "toujours est-il que", gloss: { es: "lo cierto es que, el caso es que", en: "the fact remains that" }, distractors: ["toujours il est que", "toujours c'est que", "toujours est-ce que"], tags: ["debate", "connectors", "formal"] },
    { id: "faute-de", type: "phrase", pos: "phrase", target: "faute de", gloss: { es: "por falta de, a falta de", en: "for lack of" }, distractors: ["par faute de", "faute du", "à faute de"], grammar: ["fr-g-cause-consequence"], tags: ["debate", "connectors"] },
    { id: "raisonnement", type: "word", pos: "noun", target: "le raisonnement", gender: "m", plural: "les raisonnements", gloss: { es: "el razonamiento", en: "the reasoning" }, distractors: ["la raison", "le résonnement", "la réflexion"], tags: ["debate"] },
    { id: "these", type: "word", pos: "noun", target: "la thèse", gender: "f", plural: "les thèses", gloss: { es: "la tesis, la postura que se defiende", en: "the thesis / position argued" }, distractors: ["le thème", "la théorie", "la taxe"], tags: ["debate"] },
    { id: "refuter", type: "word", pos: "verb", target: "réfuter", gloss: { es: "refutar, rebatir", en: "to refute" }, forms: { pp: "réfuté" }, distractors: ["réputer", "refuser", "rétracter"], tags: ["debate"] },
    { id: "etayer", type: "word", pos: "verb", target: "étayer", gloss: { es: "respaldar, fundamentar (un argumento)", en: "to back up / support (an argument)" }, forms: { je: "étaye", pp: "étayé" }, distractors: ["étaler", "essayer", "étager"], tags: ["debate"] },
    { id: "nuance", type: "word", pos: "noun", target: "la nuance", gender: "f", plural: "les nuances", gloss: { es: "el matiz", en: "the nuance / shade of meaning" }, distractors: ["le nuage", "la nuisance", "la nuée"], tags: ["debate"] },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "bien-quil-ait-raison", type: "sentence", target: "Bien qu'il ait raison sur le fond, je ne suis pas d'accord avec la forme.",
      gloss: { es: "Aunque tiene razón en el fondo, no estoy de acuerdo con la forma.", en: "Although he's right in substance, I disagree with the way he puts it." },
      accept: [{ text: "Quoiqu'il ait raison sur le fond, je ne suis pas d'accord avec la forme." }],
      errors: [{ text: "Bien qu'il a raison sur le fond, je ne suis pas d'accord avec la forme.", feedback: { es: "«bien que» pide subjuntivo: qu'il ait.", en: "bien que takes the subjunctive: qu'il ait." }, ruleId: "fr-g-concession" }],
      distractors: ["a", "même", "fonds"],
      grammar: ["fr-g-concession"], tags: ["debate", "subjunctive"],
    },
    {
      id: "meme-sil-pleut", type: "sentence", target: "Même s'il pleut, on sortira.",
      gloss: { es: "Aunque llueva, vamos a salir igual.", en: "Even if it rains, we'll still go out." },
      errors: [{ text: "Même s'il pleuve, on sortira.", feedback: { es: "«même si» va con indicativo, aunque en español digas «aunque llueva»: s'il pleut.", en: "même si takes the indicative: s'il pleut." }, ruleId: "fr-g-concession" }],
      distractors: ["pleuve", "bien", "sortirait"],
      grammar: ["fr-g-concession"], tags: ["debate"],
    },
    {
      id: "jai-beau", type: "sentence", target: "J'ai beau lui expliquer, il ne comprend pas.",
      gloss: { es: "Por más que se lo explico, no entiende.", en: "No matter how often I explain, he doesn't understand." },
      errors: [{ text: "J'ai beau de lui expliquer, il ne comprend pas.", feedback: { es: "avoir beau va directamente con infinitivo, sin «de».", en: "avoir beau takes a bare infinitive, no de." }, ruleId: "fr-g-concession" }],
      distractors: ["bien", "de", "comprenne"],
      grammar: ["fr-g-concession"], tags: ["debate", "chunk"],
    },
    {
      id: "pas-irremplacable-pour-autant", type: "sentence", target: "Il est compétent, mais il n'est pas irremplaçable pour autant.",
      gloss: { es: "Es competente, pero no por eso es irreemplazable.", en: "He's competent, but that doesn't make him irreplaceable." },
      distractors: ["pourtant", "remplaçable", "donc"],
      grammar: ["fr-g-concession"], tags: ["debate", "connectors"],
    },
    {
      id: "faute-de-moyens", type: "sentence", target: "Le projet a échoué faute de moyens.",
      gloss: { es: "El proyecto fracasó por falta de recursos.", en: "The project failed for lack of resources." },
      accept: [{ text: "Le projet a échoué par manque de moyens." }, { text: "Le projet a échoué faute de ressources." }],
      errors: [{ text: "Le projet a échoué par faute de moyens.", feedback: { es: "Se dice «faute de», sin preposición delante.", en: "It's just faute de, with no preposition before it." }, ruleId: "fr-g-cause-consequence" }],
      distractors: ["par", "fautes", "échoue"],
      grammar: ["fr-g-cause-consequence"], tags: ["debate", "connectors"],
    },
    {
      id: "si-bien-que", type: "sentence", target: "Les loyers ont augmenté, si bien que beaucoup de familles ont quitté le centre.",
      gloss: { es: "Los alquileres subieron, de modo que muchas familias se fueron del centro.", en: "Rents went up, with the result that many families left the city centre." },
      accept: [{ text: "Les loyers ont augmenté, de sorte que beaucoup de familles ont quitté le centre." }],
      distractors: ["sorte", "quoique", "quitter"],
      grammar: ["fr-g-cause-consequence"], tags: ["debate", "society"],
    },
    {
      id: "dautant-plus-grave", type: "sentence", target: "C'est d'autant plus grave que personne n'a été prévenu.",
      gloss: { es: "Es todavía más grave porque nadie fue avisado.", en: "It's all the more serious because nobody was warned." },
      distractors: ["moins", "prévenus", "car"],
      grammar: ["fr-g-cause-consequence"], tags: ["debate", "connectors"],
    },
    {
      id: "certes-seduisante", type: "sentence", target: "Certes, l'idée est séduisante, mais elle coûte cher.",
      gloss: { es: "Es cierto que la idea es atractiva, pero sale cara.", en: "Admittedly, the idea is appealing, but it's expensive." },
      distractors: ["Certain", "séduisant", "chère"],
      grammar: ["fr-g-concession"], tags: ["debate", "connectors"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-concession", type: "pattern", target: "bien que / quoique + subjonctif · même si + indicatif · avoir beau + infinitif",
      gloss: { es: "conceder: bien que, quoique, même si, avoir beau", en: "conceding: bien que, quoique, même si, avoir beau" },
      pattern: {
        rule: {
          es: "bien que y quoique llevan subjuntivo (bien qu'il soit tard). même si lleva indicativo (même s'il est tard), aunque en español uses subjuntivo. avoir beau + infinitivo = por más que; pour autant = no por eso.",
          en: "bien que and quoique take the subjunctive (bien qu'il soit tard). même si takes the indicative (même s'il est tard). avoir beau + infinitive = however much; pour autant = for all that.",
        },
        table: [["bien que / quoique", "il soit tard"], ["même si", "il est tard"], ["avoir beau", "j'ai beau essayer"], ["pour autant", "il n'a pas renoncé pour autant"]],
      },
      question: {
        prompt: { es: "Completa: «Quoiqu'il ___ tard, elle continue à travailler.»", en: "Complete: 'Quoiqu'il ___ tard, elle continue à travailler.'" },
        options: ["soit", "est", "sera", "était"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-concession"], tags: ["grammar", "connectors"],
    },
    {
      id: "pat-cause-consequence", type: "pattern", target: "d'autant plus que · dans la mesure où · si bien que · faute de",
      gloss: { es: "causa y consecuencia en la argumentación", en: "cause and consequence in an argument" },
      pattern: {
        rule: {
          es: "Causa: d'autant plus que (razón que refuerza), dans la mesure où (en la medida en que), faute de + sustantivo (por falta de). Consecuencia: si bien que / de sorte que + indicativo (de modo que).",
          en: "Cause: d'autant plus que (a reason that adds weight), dans la mesure où (insofar as), faute de + noun (for lack of). Consequence: si bien que / de sorte que + indicative (so that, with the result that).",
        },
        table: [["d'autant plus que", "+ indicatif"], ["dans la mesure où", "+ indicatif"], ["faute de", "+ nom / infinitif"], ["si bien que", "+ indicatif"]],
      },
      question: {
        prompt: { es: "Completa: «Il a beaucoup plu, ___ la route a été fermée.»", en: "Complete: 'Il a beaucoup plu, ___ la route a été fermée.'" },
        options: ["si bien que", "bien que", "pour que", "quoique"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-cause-consequence"], tags: ["grammar", "connectors"],
    },
    {
      id: "tab-concession", type: "paradigm", target: "subjonctif ou indicatif ?",
      gloss: { es: "¿subjuntivo o indicativo tras el conector?", en: "subjunctive or indicative after the connector?" },
      grammar: ["fr-g-concession"],
      paradigm: {
        caption: { es: "Escribe la forma del verbo entre paréntesis", en: "Write the right form of the verb in brackets" },
        cells: [
          { label: "bien qu'il (être)", answer: "soit", ruleId: "fr-g-concession" },
          { label: "même s'il (être)", answer: "est", ruleId: "fr-g-concession" },
          { label: "quoique nous (avoir)", answer: "ayons", ruleId: "fr-g-concession" },
          { label: "même si tu (pouvoir)", answer: "peux", ruleId: "fr-g-concession" },
          { label: "bien qu'elles (faire)", answer: "fassent", ruleId: "fr-g-concession" },
          { label: "j'ai beau (dire)", answer: "dire", ruleId: "fr-g-concession" },
        ],
      },
      tags: ["grammar", "subjunctive", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-voitures-electriques",
      type: "listening",
      target: "Certes, les voitures électriques polluent moins en ville. Elles ne sont pas pour autant la solution miracle : leur fabrication consomme beaucoup d'énergie, d'autant plus que les batteries sont difficiles à recycler.",
      gloss: {
        es: "Es cierto que los autos eléctricos contaminan menos en la ciudad. No por eso son la solución milagrosa: fabricarlos consume mucha energía, sobre todo porque las baterías son difíciles de reciclar.",
        en: "Admittedly, electric cars pollute less in town. That doesn't make them a miracle solution: making them uses a lot of energy, all the more so because the batteries are hard to recycle.",
      },
      question: {
        prompt: { es: "¿Cuál es la postura de quien habla?", en: "What is the speaker's position?" },
        options: [
          { es: "Tienen ventajas, pero no resuelven todo.", en: "They have advantages, but don't solve everything." },
          { es: "Son la solución milagrosa.", en: "They're the miracle solution." },
          { es: "Contaminan más que los autos de gasolina.", en: "They pollute more than petrol cars." },
          { es: "Sus baterías son fáciles de reciclar.", en: "Their batteries are easy to recycle." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["fr-g-concession", "fr-g-cause-consequence"], tags: ["listening", "debate", "environment"],
    },
    {
      id: "dlg-semaine-quatre-jours", type: "dialogue", target: "J'ai beau y réfléchir, je ne vois pas d'inconvénient.",
      gloss: { es: "Por más que lo pienso, no le veo ningún inconveniente.", en: "However much I think about it, I can't see a downside." },
      turns: [
        { who: "A", target: "La semaine de quatre jours ? J'ai beau y réfléchir, je ne vois pas d'inconvénient.", gloss: { es: "¿La semana de cuatro días? Por más que lo pienso, no le veo ningún inconveniente.", en: "The four-day week? However much I think about it, I can't see a downside." } },
        { who: "B", target: "Certes, les salariés seraient moins fatigués. Mais ce n'est pas adapté à tous les métiers.", gloss: { es: "Es cierto que los empleados estarían menos cansados. Pero no sirve para todos los oficios.", en: "Admittedly, staff would be less tired. But it doesn't suit every job." } },
        { who: "A", target: "Dans la mesure où la productivité ne baisse pas, je ne vois pas le problème.", gloss: { es: "En la medida en que la productividad no baje, no veo el problema.", en: "As long as productivity doesn't drop, I don't see the problem." } },
        { who: "B", target: "Toujours est-il que les hôpitaux, eux, ne peuvent pas fermer le vendredi !", gloss: { es: "¡Lo cierto es que los hospitales no pueden cerrar los viernes!", en: "The fact remains that hospitals can't close on Fridays!" } },
      ],
      question: {
        prompt: { es: "¿Qué objeción plantea B?", en: "What objection does B raise?" },
        options: [
          { es: "No todos los oficios pueden adaptarse.", en: "Not every job can adapt." },
          { es: "Los empleados estarían más cansados.", en: "Staff would be more tired." },
          { es: "La productividad bajaría seguro.", en: "Productivity would certainly fall." },
          { es: "Ninguna: está de acuerdo en todo.", en: "None: B agrees completely." },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "debate"],
    },

    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-pour-autant", type: "bridge", onlyFor: "es", target: "pour autant",
      gloss: { es: "no por eso (≠ por lo tanto)", en: "for all that (not 'therefore')" },
      question: {
        prompt: { es: "«Il a gagné, mais il n'est pas content pour autant» significa…", en: "'Il a gagné, mais il n'est pas content pour autant' means…" },
        options: [
          { es: "Ganó, pero no por eso está contento.", en: "He won, but he isn't happy for all that." },
          { es: "Ganó y, por lo tanto, no está contento.", en: "He won and therefore isn't happy." },
          { es: "Ganó tanto que no está contento.", en: "He won so much that he isn't happy." },
        ],
        answer: 0,
      },
      note: { es: "«por lo tanto» se dice «donc» o «par conséquent»; «pour autant» significa «no por eso»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "connectors"],
    },
  ]),
};
