import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u13",
  lang: "fr",
  index: 13,
  cefr: "B1",
  title: { target: "Santé et conseils", es: "Salud y consejos", en: "Health and advice" },
  canDo: [
    { es: "Puedo explicarle a un médico o farmacéutico qué me duele y desde cuándo.", en: "I can tell a doctor or pharmacist what hurts and since when." },
    { es: "Puedo entender instrucciones y dar consejos sencillos.", en: "I can understand instructions and give simple advice." },
    { es: "Sé usar «avoir mal à», el imperativo y «il faut / devoir».", en: "I can use avoir mal à, the imperative and il faut / devoir." },
  ],
  icon: "🩺",
  items: build("fr", 13, "B1", [
    { id: "tete", type: "word", pos: "noun", target: "la tête", gender: "f", plural: "les têtes", gloss: { es: "la cabeza", en: "the head" }, distractors: ["le tête", "la tette", "la fête"], note: { es: "El acento circunflejo recuerda una s perdida: tête ↔ testa.", en: "The circumflex marks a lost s: tête ↔ 'testa' (Latin)." }, tags: ["body"] },
    { id: "ventre", type: "word", pos: "noun", target: "le ventre", gender: "m", plural: "les ventres", gloss: { es: "el vientre, la panza", en: "the stomach / belly" }, distractors: ["la ventre", "le vendre", "la vente"], tags: ["body"] },
    { id: "dos", type: "word", pos: "noun", target: "le dos", gender: "m", plural: "les dos", gloss: { es: "la espalda", en: "the back" }, distractors: ["la dos", "deux", "le doigt"], note: { es: "Suena «do»: la s no suena. «dos» (2) es deux.", en: "Pronounced 'doh': the s is silent." }, tags: ["body"] },
    { id: "gorge", type: "word", pos: "noun", target: "la gorge", gender: "f", plural: "les gorges", gloss: { es: "la garganta", en: "the throat" }, distractors: ["le gorge", "la gorgée", "la forge"], tags: ["body"] },
    { id: "rhume", type: "word", pos: "noun", target: "le rhume", gender: "m", plural: "les rhumes", gloss: { es: "el resfriado (el catarro)", en: "the cold (illness)" }, distractors: ["la rhume", "le rhum", "le reflux"], note: { es: "être enrhumé/e = estar resfriado/a.", en: "être enrhumé/e = to have a cold." }, tags: ["health"] },
    { id: "fievre", type: "word", pos: "noun", target: "la fièvre", gender: "f", plural: "les fièvres", gloss: { es: "la fiebre", en: "the fever / temperature" }, distractors: ["le fièvre", "la lièvre", "la fibre"], tags: ["health"] },
    { id: "ordonnance", type: "word", pos: "noun", target: "l'ordonnance", gender: "f", plural: "les ordonnances", gloss: { es: "la receta médica", en: "the prescription" }, distractors: ["le ordonnance", "l'ordinateur", "la recette"], note: { es: "Ojo: la recette = la receta de cocina.", en: "Careful: la recette = a cooking recipe." }, tags: ["health"] },
    { id: "pharmacie", type: "word", pos: "noun", target: "la pharmacie", gender: "f", plural: "les pharmacies", gloss: { es: "la farmacia", en: "the pharmacy / chemist's" }, distractors: ["le pharmacie", "la farmacie", "le pharmacien"], tags: ["health", "shops"] },
    { id: "medecin", type: "word", pos: "noun", target: "le médecin", gender: "m", plural: "les médecins", gloss: { es: "el médico / la médica", en: "the doctor" }, distractors: ["la médecin", "la médecine", "le médicament"], note: { es: "Se usa también para mujeres: elle est médecin. Al hablar: le docteur.", en: "Also used for women: elle est médecin. In speech: le docteur." }, tags: ["health", "people"] },
    { id: "medicament", type: "word", pos: "noun", target: "le médicament", gender: "m", plural: "les médicaments", gloss: { es: "el medicamento", en: "the medicine" }, distractors: ["la médicament", "le médecin", "le médaillon"], tags: ["health"] },
    { id: "se-sentir", type: "word", pos: "verb", target: "se sentir", gloss: { es: "sentirse", en: "to feel" }, forms: { je: "me sens", nous: "nous sentons" }, distractors: ["sentir", "s'asseoir", "se servir"], note: { es: "Je me sens mieux = me siento mejor.", en: "Je me sens mieux = I feel better." }, tags: ["health", "reflexive"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "jai-mal-a-la-tete", type: "sentence", target: "J'ai mal à la tête depuis hier.",
      gloss: { es: "Me duele la cabeza desde ayer.", en: "I've had a headache since yesterday." },
      accept: [{ text: "Ma tête me fait mal depuis hier.", verdict: "almost", feedback: { es: "Correcto, pero lo más habitual es «j'ai mal à + parte del cuerpo».", en: "Correct, but the usual phrase is 'j'ai mal à + body part'." } }],
      distractors: ["au", "de", "suis"],
      tags: ["health", "body"],
    },
    {
      id: "jai-mal-au-dos", type: "sentence", target: "J'ai mal au dos.",
      gloss: { es: "Me duele la espalda.", en: "My back hurts." },
      errors: [{ text: "J'ai mal à le dos.", feedback: { es: "à + le = au: j'ai mal au dos.", en: "à + le = au: j'ai mal au dos." }, ruleId: "fr-g-contractions" }],
      distractors: ["à", "le", "aux"],
      tags: ["health", "body"],
    },
    {
      id: "je-suis-enrhume", type: "sentence", target: "Je suis enrhumé et j'ai de la fièvre.",
      gloss: { es: "Estoy resfriado/a y tengo fiebre.", en: "I've got a cold and a temperature." },
      accept: [{ text: "Je suis enrhumée et j'ai de la fièvre." }],
      distractors: ["constipé", "du", "ai"],
      tags: ["health"],
    },
    {
      id: "il-faut-se-reposer", type: "sentence", target: "Il faut vous reposer et boire beaucoup d'eau.", register: "formal",
      gloss: { es: "Tiene que descansar y tomar mucha agua.", en: "You need to rest and drink plenty of water." },
      accept: [{ text: "Vous devez vous reposer et boire beaucoup d'eau." }],
      distractors: ["faut-il", "de l'", "te"],
      tags: ["health", "advice"],
    },
    {
      id: "prenez-deux-comprimes", type: "sentence", target: "Prenez deux comprimés par jour.", register: "formal",
      gloss: { es: "Tome dos pastillas al día.", en: "Take two tablets a day. (formal)" },
      accept: [{ text: "Prenez deux cachets par jour." }],
      distractors: ["Prends", "le", "pour"],
      tags: ["health", "imperative"],
    },
    {
      id: "ne-mange-pas-trop", type: "sentence", target: "Ne mange pas trop de sucre !", register: "informal",
      gloss: { es: "¡No comas demasiado azúcar!", en: "Don't eat too much sugar!" },
      errors: [{ text: "Ne manges pas trop de sucre !", feedback: { es: "En el imperativo de tú, los verbos en -er pierden la -s: mange.", en: "In the tu imperative, -er verbs drop the -s: mange." }, ruleId: "fr-g-imperatif" }],
      distractors: ["manges", "du", "jamais"],
      tags: ["health", "imperative", "advice"],
    },
    {
      id: "tu-devrais", type: "sentence", target: "Tu devrais aller chez le médecin.", register: "informal",
      gloss: { es: "Deberías ir al médico.", en: "You should go to the doctor's." },
      errors: [{ text: "Tu devrais aller au médecin.", feedback: { es: "Con personas se usa «chez»: chez le médecin.", en: "With people use 'chez': chez le médecin." } }],
      distractors: ["au", "dois", "à"],
      note: { es: "chez + persona = a / en casa o consultorio de: chez le dentiste.", en: "chez + person = to / at someone's place: chez le dentiste." },
      tags: ["advice"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-avoir-mal", type: "pattern", target: "j'ai mal à la tête · au ventre · aux dents",
      gloss: { es: "avoir mal à (doler)", en: "avoir mal à (to hurt)" },
      pattern: {
        rule: {
          es: "Para decir qué te duele: avoir mal + à + artículo + parte del cuerpo. Recuerda las contracciones: au dos, aux pieds.",
          en: "To say what hurts: avoir mal + à + article + body part. Remember the contractions: au dos, aux pieds.",
        },
        table: [["la tête", "j'ai mal à la tête"], ["le ventre", "j'ai mal au ventre"], ["l'oreille", "j'ai mal à l'oreille"], ["les dents", "j'ai mal aux dents"]],
      },
      question: {
        prompt: { es: "Completa: «Il a mal ___ pieds.»", en: "Complete: 'Il a mal ___ pieds.'" },
        options: ["aux", "à les", "des", "au"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-avoir-mal"], tags: ["grammar", "health"],
    },
    {
      id: "pat-imperatif", type: "pattern", target: "Prends ! · Prenons ! · Prenez !",
      gloss: { es: "el imperativo", en: "the imperative" },
      pattern: {
        rule: {
          es: "Se usan las formas de tu, nous y vous del presente, sin pronombre. Los verbos en -er pierden la -s con tu: tu parles → parle ! Con pronombre va detrás y con guion: lève-toi, asseyez-vous.",
          en: "Use the tu, nous and vous present forms without the pronoun. -er verbs drop the -s with tu: tu parles → parle ! Pronouns go after, with a hyphen: lève-toi, asseyez-vous.",
        },
        table: [["tu", "mange · prends · lève-toi"], ["nous", "mangeons · prenons"], ["vous", "mangez · prenez · asseyez-vous"]],
      },
      question: {
        prompt: { es: "Le dices a un amigo «¡Descansa!»:", en: "You tell a friend 'Rest!':" },
        options: ["Repose-toi !", "Te repose !", "Reposes-toi !", "Reposez-toi !"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-imperatif"], tags: ["grammar", "imperative"],
    },
    {
      id: "pat-il-faut", type: "pattern", target: "Il faut dormir. · Tu dois dormir. · Tu devrais dormir.",
      gloss: { es: "obligación y consejo: il faut, devoir", en: "obligation and advice: il faut, devoir" },
      pattern: {
        rule: {
          es: "il faut + infinitivo = hay que (general). devoir + infinitivo = tener que (je dois partir). Para aconsejar con suavidad, el condicional: tu devrais (deberías).",
          en: "il faut + infinitive = one must / you need to (general). devoir + infinitive = to have to (je dois partir). For gentle advice, the conditional: tu devrais (you should).",
        },
        table: [["général", "Il faut boire de l'eau."], ["obligation", "Je dois prendre ce médicament."], ["conseil", "Vous devriez vous reposer."]],
      },
      question: {
        prompt: { es: "Quieres dar un consejo amable: «Deberías dormir más».", en: "You want to give friendly advice: 'You should sleep more'." },
        options: ["Tu devrais dormir plus.", "Tu dois dormir plus.", "Il faut que dormir plus.", "Tu devras dormir plus."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-il-faut"], tags: ["grammar", "advice"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-pharmacie", type: "listening",
      target: "Alors, prenez ce sirop trois fois par jour, après les repas. Si la fièvre ne baisse pas dans deux jours, il faut consulter un médecin.",
      gloss: {
        es: "Bueno, tome este jarabe tres veces al día, después de las comidas. Si la fiebre no baja en dos días, hay que ir al médico.",
        en: "So, take this syrup three times a day, after meals. If the temperature doesn't go down in two days, you need to see a doctor.",
      },
      question: {
        prompt: { es: "¿Cuándo hay que tomar el jarabe?", en: "When should the syrup be taken?" },
        options: [
          { es: "Tres veces al día, después de comer", en: "Three times a day, after meals" },
          { es: "Dos veces al día, antes de comer", en: "Twice a day, before meals" },
          { es: "Solo en la noche", en: "Only at night" },
          { es: "Cada dos días", en: "Every two days" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "health"],
    },
    {
      id: "dlg-medecin", type: "dialogue", target: "Qu'est-ce qui ne va pas ?", register: "formal",
      gloss: { es: "¿Qué le pasa?", en: "What seems to be the problem?" },
      turns: [
        { who: "A", target: "Bonjour, asseyez-vous. Qu'est-ce qui ne va pas ?", gloss: { es: "Buenos días, siéntese. ¿Qué le pasa?", en: "Hello, have a seat. What seems to be the problem?" } },
        { who: "B", target: "J'ai mal à la gorge et je tousse beaucoup depuis trois jours.", gloss: { es: "Me duele la garganta y toso mucho desde hace tres días.", en: "I have a sore throat and I've been coughing a lot for three days." } },
        { who: "A", target: "Vous avez de la fièvre ?", gloss: { es: "¿Tiene fiebre?", en: "Do you have a temperature?" } },
        { who: "B", target: "Un peu, oui, trente-huit.", gloss: { es: "Un poco, sí, treinta y ocho.", en: "A little, yes, thirty-eight." } },
        { who: "A", target: "C'est une angine. Je vous fais une ordonnance.", gloss: { es: "Es una amigdalitis. Le hago una receta.", en: "It's tonsillitis. I'll write you a prescription." } },
      ],
      question: {
        prompt: { es: "¿Qué le duele al paciente?", en: "What hurts the patient?" },
        options: [
          { es: "La garganta", en: "The throat" },
          { es: "La cabeza", en: "The head" },
          { es: "El estómago", en: "The stomach" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "health"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-constipe", type: "bridge", onlyFor: "es", target: "constipé",
      gloss: { es: "estreñido/a", en: "constipated" },
      question: {
        prompt: { es: "Si le dices al médico «je suis constipé», entiende que…", en: "If you tell the doctor 'je suis constipé', they understand that…" },
        options: [
          { es: "estás estreñido/a", en: "you're constipated" },
          { es: "estás resfriado/a", en: "you have a cold" },
          { es: "tienes la nariz tapada", en: "you have a blocked nose" },
        ],
        answer: 0,
      },
      note: { es: "Falso amigo: constipé = estreñido/a. «Estoy constipado/a» (resfriado/a) es «je suis enrhumé/e»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "health"],
    },
    {
      id: "br-chez", type: "bridge", onlyFor: "es", target: "chez le dentiste",
      gloss: { es: "al / en el dentista", en: "at / to the dentist's" },
      distractors: ["au dentiste", "à le dentiste", "chez la dentiste du"],
      note: { es: "Con personas se dice «chez»: je vais chez le coiffeur, chez Paul. Con lugares, «à»: à la pharmacie." },
      exercises: ["guess", "recall"], tags: ["bridge", "prepositions"],
    },
  ]),
};
