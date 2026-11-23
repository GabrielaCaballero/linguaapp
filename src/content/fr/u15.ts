import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u15",
  lang: "fr",
  index: 15,
  cefr: "B1",
  title: { target: "À mon avis", es: "En mi opinión", en: "In my opinion" },
  canDo: [
    { es: "Puedo dar mi opinión, estar de acuerdo o no y justificarlo.", en: "I can give my opinion, agree or disagree, and say why." },
    { es: "Puedo expresar deseos, necesidades y dudas.", en: "I can express wishes, needs and doubts." },
    { es: "Sé usar el subjuntivo presente tras il faut que, je veux que, je ne pense pas que.", en: "I can use the present subjunctive after il faut que, je veux que, je ne pense pas que." },
  ],
  icon: "💬",
  items: build("fr", 15, "B1", [
    { id: "avis", type: "word", pos: "noun", target: "l'avis", gender: "m", plural: "les avis", gloss: { es: "la opinión", en: "the opinion" }, distractors: ["la avis", "l'avion", "l'aviso"], note: { es: "à mon avis = en mi opinión; changer d'avis = cambiar de opinión.", en: "à mon avis = in my opinion; changer d'avis = to change your mind." }, tags: ["opinion"] },
    { id: "daccord", type: "phrase", pos: "phrase", target: "Je suis d'accord avec toi.", register: "informal", gloss: { es: "Estoy de acuerdo contigo.", en: "I agree with you. (informal)" }, accept: [{ text: "Je suis d'accord." }], distractors: ["J'ai d'accord avec toi.", "Je suis d'accord à toi.", "Je suis accord avec toi."], tags: ["opinion", "chunk"] },
    { id: "pas-daccord", type: "phrase", pos: "phrase", target: "Je ne suis pas d'accord avec vous.", register: "formal", gloss: { es: "No estoy de acuerdo con usted.", en: "I don't agree with you. (formal)" }, distractors: ["Je ne suis d'accord pas avec vous.", "Je n'ai pas d'accord avec vous.", "Je ne suis pas d'accord avec toi."], tags: ["opinion", "chunk"] },
    { id: "selon-moi", type: "phrase", pos: "phrase", target: "selon moi", gloss: { es: "para mí, según yo", en: "as I see it" }, accept: [{ text: "pour moi" }, { text: "à mon avis" }], distractors: ["selon je", "selon mien", "selon à moi"], tags: ["opinion"] },
    { id: "croire", type: "word", pos: "verb", target: "croire", gloss: { es: "creer", en: "to believe / think" }, forms: { je: "crois", nous: "croyons", pp: "cru" }, distractors: ["croître", "crier", "courir"], tags: ["opinion", "verbs"] },
    { id: "avoir-raison", type: "phrase", pos: "phrase", target: "avoir raison", gloss: { es: "tener razón", en: "to be right" }, distractors: ["être raison", "avoir raisonne", "avoir tort"], note: { es: "Lo contrario: avoir tort (estar equivocado/a).", en: "The opposite: avoir tort (to be wrong)." }, tags: ["opinion"] },
    { id: "pourtant", type: "word", pos: "adv", target: "pourtant", gloss: { es: "sin embargo", en: "yet / however" }, distractors: ["pourquoi", "pendant", "pourvu"], tags: ["connectors"] },
    { id: "parce-que", type: "phrase", pos: "phrase", target: "parce que", gloss: { es: "porque", en: "because" }, distractors: ["pour que", "par que", "pourquoi"], note: { es: "Ojo: pourquoi = por qué; pour que = para que (+ subjuntivo).", en: "Careful: pourquoi = why; pour que = so that (+ subjunctive)." }, tags: ["connectors"] },
    { id: "important", type: "word", pos: "adj", target: "important", gloss: { es: "importante", en: "important" }, forms: { m: "important", f: "importante" }, accept: [{ text: "importante" }], distractors: ["importun", "importé", "impotent"], tags: ["opinion"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "je-pense-que", type: "sentence", target: "Je pense que c'est une bonne idée.",
      gloss: { es: "Creo que es una buena idea.", en: "I think it's a good idea." },
      errors: [{ text: "Je pense que ce soit une bonne idée.", feedback: { es: "En afirmativo, penser que va con indicativo: je pense que c'est…", en: "In the affirmative, penser que takes the indicative: je pense que c'est…" }, ruleId: "fr-g-opinion" }],
      distractors: ["soit", "un", "qu'il"],
      tags: ["opinion"],
    },
    {
      id: "je-ne-pense-pas-que", type: "sentence", target: "Je ne pense pas que ce soit vrai.",
      gloss: { es: "No creo que sea verdad.", en: "I don't think it's true." },
      errors: [{ text: "Je ne pense pas que c'est vrai.", feedback: { es: "En negativo, la duda lleva subjuntivo: que ce soit vrai (como «no creo que sea»).", en: "In the negative, doubt takes the subjunctive: que ce soit vrai." }, ruleId: "fr-g-opinion" }],
      distractors: ["est", "sois", "vraie"],
      tags: ["opinion", "subjonctif"],
    },
    {
      id: "il-faut-que-tu-viennes", type: "sentence", target: "Il faut que tu viennes avec nous.",
      gloss: { es: "Tienes que venir con nosotros.", en: "You have to come with us." },
      errors: [{ text: "Il faut que tu viens avec nous.", feedback: { es: "Tras il faut que va subjuntivo: que tu viennes.", en: "il faut que takes the subjunctive: que tu viennes." }, ruleId: "fr-g-subjonctif" }],
      distractors: ["viens", "venir", "nous"],
      tags: ["subjonctif"],
    },
    {
      id: "je-veux-que-tu-saches", type: "sentence", target: "Je veux que vous sachiez la vérité.", register: "formal",
      gloss: { es: "Quiero que sepa (usted) la verdad.", en: "I want you to know the truth. (formal)" },
      errors: [{ text: "Je veux que vous savez la vérité.", feedback: { es: "vouloir que + subjuntivo: que vous sachiez.", en: "vouloir que + subjunctive: que vous sachiez." }, ruleId: "fr-g-subjonctif" }],
      distractors: ["savez", "saviez", "connaissiez"],
      tags: ["subjonctif"],
    },
    {
      id: "cest-dommage-que", type: "sentence", target: "C'est dommage qu'il ne puisse pas venir.",
      gloss: { es: "Qué pena que no pueda venir.", en: "It's a shame he can't come." },
      accept: [{ text: "Dommage qu'il ne puisse pas venir." }],
      distractors: ["peut", "pas", "veut"],
      tags: ["subjonctif", "feelings"],
    },
    {
      id: "a-mon-avis-trop-cher", type: "sentence", target: "À mon avis, les loyers sont trop chers en ville.",
      gloss: { es: "En mi opinión, los alquileres en la ciudad son demasiado caros.", en: "In my opinion, rents in town are too high." },
      distractors: ["cher", "loyer", "très"],
      tags: ["opinion", "housing"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-subjonctif", type: "pattern", target: "que je parle, que tu finisses, qu'il vienne…",
      gloss: { es: "el subjuntivo presente", en: "the present subjunctive" },
      pattern: {
        rule: {
          es: "Raíz de «ils» en presente (ils finiss-ent) + -e, -es, -e, -ions, -iez, -ent. Va tras verbos de voluntad, necesidad y emoción: il faut que, je veux que, je suis content que. Irregulares: être → que je sois, avoir → que j'aie, aller → que j'aille, faire → que je fasse.",
          en: "Take the 'ils' present stem (ils finiss-ent) + -e, -es, -e, -ions, -iez, -ent. Used after verbs of wanting, need and emotion: il faut que, je veux que, je suis content que. Irregular: être → que je sois, avoir → que j'aie, aller → que j'aille, faire → que je fasse.",
        },
        table: [["que je finisse", "que nous finissions"], ["que tu finisses", "que vous finissiez"], ["qu'il / elle finisse", "qu'ils / elles finissent"]],
      },
      question: {
        prompt: { es: "Completa: «Il faut que nous ___ à l'heure.» (partir)", en: "Complete: 'Il faut que nous ___ à l'heure.' (partir)" },
        options: ["partions", "partons", "partirons", "partissions"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-subjonctif"], tags: ["grammar", "subjonctif"],
    },
    {
      id: "tab-subj-etre", type: "paradigm", target: "être — subjonctif présent", spoken: "être, subjonctif",
      gloss: { es: "«être» en subjuntivo presente", en: "être — present subjunctive" },
      grammar: ["fr-g-subjonctif"],
      paradigm: {
        caption: { es: "Conjuga «être» en subjuntivo (que…)", en: "Conjugate être in the subjunctive (after que)" },
        cells: [
          { label: "que je", answer: "sois", ruleId: "fr-g-subjonctif" },
          { label: "que tu", answer: "sois", ruleId: "fr-g-subjonctif" },
          { label: "qu'il / elle", answer: "soit", ruleId: "fr-g-subjonctif" },
          { label: "que nous", answer: "soyons", ruleId: "fr-g-subjonctif" },
          { label: "que vous", answer: "soyez", ruleId: "fr-g-subjonctif" },
          { label: "qu'ils / elles", answer: "soient", ruleId: "fr-g-subjonctif" },
        ],
      },
      tags: ["grammar", "subjonctif", "table"],
    },
    {
      id: "tab-subj-irreg", type: "paradigm", target: "subjonctifs irréguliers (que je…)", spoken: "subjonctifs irréguliers",
      gloss: { es: "subjuntivos irregulares frecuentes", en: "common irregular subjunctives" },
      grammar: ["fr-g-subjonctif"],
      paradigm: {
        caption: { es: "Escribe la forma de «que je / j'»", en: "Write the 'que je / j'' form" },
        cells: [
          { label: "avoir", answer: "aie", ruleId: "fr-g-subjonctif" },
          { label: "aller", answer: "aille", ruleId: "fr-g-subjonctif" },
          { label: "faire", answer: "fasse", ruleId: "fr-g-subjonctif" },
          { label: "pouvoir", answer: "puisse", ruleId: "fr-g-subjonctif" },
          { label: "savoir", answer: "sache", ruleId: "fr-g-subjonctif" },
          { label: "vouloir", answer: "veuille", ruleId: "fr-g-subjonctif" },
        ],
      },
      tags: ["grammar", "subjonctif", "table"],
    },
    {
      id: "pat-opinion", type: "pattern", target: "Je pense que c'est vrai. · Je ne pense pas que ce soit vrai.",
      gloss: { es: "opinión: indicativo o subjuntivo", en: "opinion: indicative or subjunctive" },
      pattern: {
        rule: {
          es: "Como en español: je pense / je crois / je trouve que + indicativo (creo que es). En negativo o con duda, subjuntivo: je ne pense pas que ce soit, je doute que ce soit.",
          en: "je pense / je crois / je trouve que + indicative. In the negative or with doubt, subjunctive: je ne pense pas que ce soit, je doute que ce soit.",
        },
        table: [["je pense que", "il a raison"], ["je ne pense pas que", "il ait raison"], ["je doute que", "il ait raison"]],
      },
      question: {
        prompt: { es: "Completa: «Je crois qu'elle ___ malade.»", en: "Complete: 'Je crois qu'elle ___ malade.'" },
        options: ["est", "soit", "sera-t-elle", "être"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-opinion"], tags: ["grammar", "opinion", "subjonctif"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-teletravail", type: "listening",
      target: "Selon moi, le télétravail, c'est pratique, parce qu'on ne perd pas de temps dans les transports. Pourtant, il faut qu'on voie ses collègues de temps en temps.",
      gloss: {
        es: "Para mí, el teletrabajo es práctico, porque no se pierde tiempo en el transporte. Sin embargo, hay que ver a los compañeros de vez en cuando.",
        en: "As I see it, working from home is practical, because you don't waste time commuting. Still, you need to see your colleagues from time to time.",
      },
      question: {
        prompt: { es: "¿Qué opina la persona del teletrabajo?", en: "What does the speaker think of working from home?" },
        options: [
          { es: "Es práctico, pero hay que ver a los compañeros a veces", en: "It's practical, but you need to see colleagues sometimes" },
          { es: "Es una pérdida de tiempo", en: "It's a waste of time" },
          { es: "Es mejor ir a la oficina todos los días", en: "It's better to go to the office every day" },
          { es: "No tiene opinión", en: "They have no opinion" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "opinion", "work"],
    },
    {
      id: "dlg-velo", type: "dialogue", target: "Tu as raison, mais…", register: "informal",
      gloss: { es: "Tienes razón, pero…", en: "You're right, but…" },
      turns: [
        { who: "A", target: "À mon avis, il faut que la ville interdise les voitures au centre.", gloss: { es: "En mi opinión, la ciudad tiene que prohibir los autos en el centro.", en: "In my opinion, the city should ban cars from the centre." } },
        { who: "B", target: "Tu as raison, mais je ne pense pas que ce soit facile.", gloss: { es: "Tienes razón, pero no creo que sea fácil.", en: "You're right, but I don't think it'll be easy." } },
        { who: "A", target: "Pourquoi ? Il y a des vélos et des bus partout.", gloss: { es: "¿Por qué? Hay bicis y autobuses por todas partes.", en: "Why? There are bikes and buses everywhere." } },
        { who: "B", target: "Oui, mais les commerçants ne sont pas d'accord.", gloss: { es: "Sí, pero los comerciantes no están de acuerdo.", en: "Yes, but the shopkeepers don't agree." } },
      ],
      question: {
        prompt: { es: "¿Qué piensa B?", en: "What does B think?" },
        options: [
          { es: "Que la idea es buena pero difícil", en: "The idea is good but difficult" },
          { es: "Que es una mala idea", en: "It's a bad idea" },
          { es: "Que es fácil de hacer", en: "It's easy to do" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "opinion"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-subj", type: "bridge", onlyFor: "es", target: "Il faut que tu partes.",
      gloss: { es: "Tienes que irte.", en: "You have to leave." },
      distractors: ["Il faut que tu pars.", "Il faut tu partes.", "Il faut que tu partir."],
      note: { es: "El subjuntivo francés se usa casi como el español (quiero que vengas), pero «il faut que» siempre lo pide, y «espérer que» no: j'espère qu'il viendra." },
      exercises: ["guess", "recall"], tags: ["bridge", "subjonctif"],
    },
    {
      id: "br-actuellement", type: "bridge", onlyFor: "es", target: "actuellement",
      gloss: { es: "actualmente", en: "currently" },
      question: {
        prompt: { es: "«Actuellement, je travaille à Lyon» significa…", en: "'Actuellement, je travaille à Lyon' means…" },
        options: [
          { es: "Actualmente trabajo en Lyon", en: "I currently work in Lyon" },
          { es: "En realidad trabajo en Lyon", en: "Actually, I work in Lyon" },
          { es: "Al final trabajo en Lyon", en: "In the end I work in Lyon" },
        ],
        answer: 0,
      },
      note: { es: "Aquí no hay trampa para ti: actuellement = actualmente. «En realidad» se dice «en fait»." },
      exercises: ["guess", "question"], tags: ["bridge", "cognate"],
    },
  ]),
};
