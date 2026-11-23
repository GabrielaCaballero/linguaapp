import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u13",
  lang: "en",
  index: 13,
  cefr: "B1",
  title: { target: "Health and advice", es: "Salud y consejos", en: "Health and advice" },
  canDo: [
    { es: "Puedo explicarle al médico qué me pasa y desde cuándo.", en: "I can tell a doctor what's wrong and since when." },
    { es: "Puedo dar y pedir consejos sobre salud y hábitos.", en: "I can give and ask for advice about health and habits." },
    { es: "Sé usar «should», «have to», «must» y «don't have to».", en: "I can use should, have to, must and don't have to." },
  ],
  icon: "🩺",
  items: build("en", 13, "B1", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "headache", type: "word", target: "headache", plural: "headaches",
      gloss: { es: "dolor de cabeza", en: "headache" },
      distractors: ["head pain", "heartache", "backache"],
      note: { es: "«-ache» (se dice «eik») = dolor: headache, stomachache, backache, toothache." },
      tags: ["health", "body"],
    },
    {
      id: "sore-throat", type: "word", target: "sore throat",
      gloss: { es: "dolor de garganta", en: "sore throat" },
      distractors: ["throat ache", "sour throat", "sore thought"],
      tags: ["health", "body"],
    },
    {
      id: "fever", type: "word", target: "fever",
      gloss: { es: "fiebre", en: "fever" },
      distractors: ["favor", "flavor", "never"],
      note: { es: "«I have a fever» = tengo fiebre (con «a»)." },
      tags: ["health"],
    },
    {
      id: "cough", type: "word", target: "cough",
      gloss: { es: "tos; toser", en: "cough" },
      distractors: ["cuff", "couch", "tough"],
      note: { es: "Se pronuncia «kof»: la «gh» suena como «f»." },
      tags: ["health"],
    },
    {
      id: "appointment", type: "word", target: "appointment", plural: "appointments",
      gloss: { es: "cita (con el médico, el dentista…)", en: "appointment" },
      distractors: ["appoint", "apartment", "date"],
      note: { es: "Una cita romántica es «a date»; con un profesional, «an appointment»." },
      tags: ["health"],
    },
    {
      id: "prescription", type: "word", target: "prescription", plural: "prescriptions",
      gloss: { es: "receta médica", en: "prescription" },
      distractors: ["recipe", "description", "subscription"],
      tags: ["health"],
    },
    {
      id: "feel-sick", type: "phrase", pos: "phrase", target: "I feel sick.",
      gloss: { es: "Me siento mal / Tengo náuseas.", en: "I feel sick." },
      accept: [{ text: "I don't feel well." }, { text: "I feel ill." }],
      distractors: ["I'm feeling sickness.", "I sick.", "I feel me sick."],
      errors: [{ text: "I feel me sick.", feedback: { es: "«feel» no es reflexivo: I feel sick." } }],
      tags: ["health", "chunk"],
    },
    {
      id: "get-some-rest", type: "phrase", pos: "phrase", target: "get some rest",
      gloss: { es: "descansar un poco", en: "to get some rest" },
      accept: [{ text: "rest" }],
      distractors: ["take some rest", "make a rest", "get some rests"],
      tags: ["health", "chunk"],
    },
    {
      id: "allergic", type: "word", pos: "adj", target: "allergic",
      gloss: { es: "alérgico/a", en: "allergic" },
      distractors: ["allergy", "alergic", "energetic"],
      note: { es: "Va con «to»: I'm allergic to penicillin." },
      tags: ["health"],
    },
    {
      id: "hurt", type: "word", pos: "verb", target: "hurt",
      gloss: { es: "doler; lastimar", en: "to hurt" },
      forms: { past: "hurt", pp: "hurt" },
      distractors: ["heart", "hurts", "heat"],
      note: { es: "«My back hurts» = me duele la espalda: la parte del cuerpo es el sujeto." },
      tags: ["health", "body"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "my-back-hurts", type: "sentence", target: "My back hurts when I sit for a long time.",
      gloss: { es: "Me duele la espalda cuando estoy sentado/a mucho tiempo.", en: "My back hurts when I sit for a long time." },
      errors: [{ text: "Me hurts the back when I sit for a long time.", feedback: { es: "En inglés: [parte del cuerpo] + hurts: My back hurts." } }],
      distractors: ["Me", "hurt", "the"],
      tags: ["health", "body"],
    },
    {
      id: "you-should-see-a-doctor", type: "sentence", target: "You should see a doctor.",
      gloss: { es: "Deberías ir al médico.", en: "You should see a doctor." },
      accept: [{ text: "You should go to the doctor." }, { text: "You should see the doctor." }],
      errors: [{ text: "You should to see a doctor.", feedback: { es: "Después de «should» va el verbo sin «to»." }, ruleId: "en-g-should" }],
      distractors: ["to", "must", "saw"],
      grammar: ["en-g-should"],
      tags: ["health", "advice"],
    },
    {
      id: "you-shouldnt-smoke", type: "sentence", target: "You shouldn't drink coffee at night.",
      gloss: { es: "No deberías tomar café de noche.", en: "You shouldn't drink coffee at night." },
      accept: [{ text: "You should not drink coffee at night." }],
      errors: [{ text: "You don't should drink coffee at night.", feedback: { es: "«should» se niega solo: shouldn't." }, ruleId: "en-g-should" }],
      distractors: ["don't", "take", "in"],
      grammar: ["en-g-should"],
      tags: ["health", "advice"],
    },
    {
      id: "i-have-to-take", type: "sentence", target: "I have to take these pills twice a day.",
      gloss: { es: "Tengo que tomar estas pastillas dos veces al día.", en: "I have to take these pills twice a day." },
      errors: [{ text: "I must to take these pills twice a day.", feedback: { es: "«must» va sin «to»; con «to» es «have to»." }, ruleId: "en-g-have-to" }],
      distractors: ["must", "this", "two"],
      grammar: ["en-g-have-to"],
      tags: ["health"],
    },
    {
      id: "you-dont-have-to-come", type: "sentence", target: "You don't have to come with me.",
      gloss: { es: "No hace falta que vengas conmigo.", en: "You don't have to come with me." },
      accept: [{ text: "You do not have to come with me." }],
      errors: [{ text: "You mustn't come with me.", feedback: { es: "«mustn't» es una prohibición; «no hace falta» es «don't have to»." }, ruleId: "en-g-have-to" }],
      distractors: ["mustn't", "haven't", "to"],
      grammar: ["en-g-have-to"],
      annot: { "don't have to": { es: "no es necesario (no es una prohibición)", en: "it isn't necessary (not a prohibition)" } },
      tags: ["advice"],
    },
    {
      id: "you-mustnt", type: "sentence", target: "You mustn't drive after taking this medicine.",
      gloss: { es: "No debes manejar después de tomar este medicamento.", en: "You mustn't drive after taking this medicine." },
      accept: [{ text: "You must not drive after taking this medicine." }, { text: "You can't drive after taking this medicine." }],
      distractors: ["don't", "take", "to"],
      grammar: ["en-g-have-to"],
      tags: ["health", "rules"],
    },
    {
      id: "what-should-i-do", type: "sentence", target: "I can't sleep. What should I do?",
      gloss: { es: "No puedo dormir. ¿Qué hago?", en: "I can't sleep. What should I do?" },
      accept: [{ text: "I can't sleep. What do you think I should do?" }],
      distractors: ["do", "must", "make"],
      grammar: ["en-g-should"],
      tags: ["health", "advice", "questions"],
    },
    {
      id: "ive-had-a-cough", type: "sentence", target: "I've had a cough since Monday.",
      gloss: { es: "Tengo tos desde el lunes.", en: "I've had a cough since Monday." },
      accept: [{ text: "I have had a cough since Monday." }],
      errors: [{ text: "I have a cough since Monday.", feedback: { es: "Para algo que empezó en el pasado y sigue, con «since»: I've had." }, ruleId: "en-g-for-since" }],
      distractors: ["from", "for", "has"],
      grammar: ["en-g-for-since"],
      tags: ["health", "present-perfect"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-should", type: "pattern", target: "You should… · You shouldn't…",
      gloss: { es: "should (deberías) para consejos", en: "should for advice" },
      pattern: {
        rule: {
          es: "«should» + verbo sin «to» equivale a «deberías» y sirve para dar consejos y opiniones. Es igual para todas las personas y se niega con «shouldn't».",
          en: "'should' + verb (no 'to') gives advice and opinions. It's the same for every person and its negative is 'shouldn't'.",
        },
        table: [["+", "You should rest."], ["−", "You shouldn't work today."], ["?", "Should I call a doctor?"]],
      },
      question: {
        prompt: { es: "Tu amiga tiene fiebre. Le aconsejas:", en: "Your friend has a fever. You advise her:" },
        options: ["You should stay in bed.", "You should to stay in bed.", "You should staying in bed.", "You shoulds stay in bed."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-should"], tags: ["grammar", "modals", "advice"],
    },
    {
      id: "pat-have-to", type: "pattern", target: "have to · must · don't have to · mustn't",
      gloss: { es: "obligación, prohibición y falta de necesidad", en: "obligation, prohibition and lack of necessity" },
      pattern: {
        rule: {
          es: "«have to» y «must» expresan obligación (tener que). En negativo cambian de sentido: «mustn't» = está prohibido; «don't have to» = no hace falta.",
          en: "'have to' and 'must' express obligation. In the negative they differ: 'mustn't' = it's forbidden; 'don't have to' = it isn't necessary.",
        },
        table: [["have to / must", "obligación"], ["mustn't", "prohibición"], ["don't have to", "no hace falta"]],
      },
      question: {
        prompt: { es: "Mañana es feriado: «I ___ get up early.»", en: "Tomorrow is a holiday: 'I ___ get up early.'" },
        options: ["don't have to", "mustn't", "have to", "must"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-have-to"], tags: ["grammar", "modals"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-doctor", type: "dialogue", target: "How long have you felt like this?",
      gloss: { es: "¿Desde cuándo se siente así?", en: "How long have you felt like this?" },
      turns: [
        { who: "A", target: "So, what seems to be the problem?", gloss: { es: "Bueno, ¿qué le pasa?", en: "So, what seems to be the problem?" } },
        { who: "B", target: "I have a sore throat and a fever, and I feel really tired.", gloss: { es: "Me duele la garganta, tengo fiebre y me siento muy cansado.", en: "I have a sore throat and a fever, and I feel really tired." } },
        { who: "A", target: "How long have you felt like this?", gloss: { es: "¿Desde cuándo se siente así?", en: "How long have you felt like this?" } },
        { who: "B", target: "Since Saturday.", gloss: { es: "Desde el sábado.", en: "Since Saturday." } },
        { who: "A", target: "It's probably the flu. You should drink lots of water and get some rest. You don't have to take antibiotics.", gloss: { es: "Seguramente es gripe. Debería tomar mucha agua y descansar. No hace falta que tome antibióticos.", en: "It's probably the flu. You should drink lots of water and get some rest. You don't have to take antibiotics." } },
      ],
      question: {
        prompt: { es: "¿Qué le dice el médico sobre los antibióticos?", en: "What does the doctor say about antibiotics?" },
        options: [
          { es: "Que no hace falta tomarlos", en: "They aren't necessary" },
          { es: "Que tiene que tomarlos", en: "He must take them" },
          { es: "Que tiene prohibido tomarlos", en: "He's forbidden to take them" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "health"],
    },
    {
      id: "lis-pharmacy", type: "listening", target: "Take one tablet every eight hours with food. Don't take more than three a day, and you shouldn't drink alcohol with it.",
      gloss: { es: "Tome una pastilla cada ocho horas con comida. No tome más de tres al día, y no debería beber alcohol con este medicamento.", en: "Take one tablet every eight hours with food. Don't take more than three a day, and you shouldn't drink alcohol with it." },
      question: {
        prompt: { es: "¿Cada cuánto hay que tomar la pastilla?", en: "How often should you take a tablet?" },
        options: [
          { es: "Cada ocho horas, con comida", en: "Every eight hours, with food" },
          { es: "Tres veces por la mañana", en: "Three times in the morning" },
          { es: "Una vez al día, en ayunas", en: "Once a day, on an empty stomach" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "health"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-constipated", type: "bridge", onlyFor: "es", target: "constipated",
      gloss: { es: "estreñido/a", en: "constipated" },
      question: {
        prompt: { es: "Tienes la nariz tapada por un resfriado. ¿Qué dices?", en: "Your nose is blocked because of a cold. What do you say?" },
        options: ["I have a cold and a stuffy nose.", "I'm constipated.", "I'm constipation."],
        answer: 0,
      },
      note: { es: "«constipated» significa «estreñido/a»; estar resfriado/a es «have a cold», y la nariz tapada es «a stuffy nose»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "health"],
    },
    {
      id: "br-embarrassed", type: "bridge", onlyFor: "es", target: "embarrassed",
      gloss: { es: "avergonzado/a, apenado/a", en: "embarrassed" },
      question: {
        prompt: { es: "«I was so embarrassed!» significa…", en: "'I was so embarrassed!' means…" },
        options: [
          { es: "¡Qué vergüenza me dio!", en: "I felt so embarrassed!" },
          { es: "¡Estaba embarazada!", en: "I was pregnant!" },
          { es: "¡Estaba muy enojada!", en: "I was so angry!" },
        ],
        answer: 0,
      },
      note: { es: "embarrassed = avergonzado/a; embarazada es «pregnant»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "medicine", type: "word", target: "medicine",
      gloss: { es: "medicamento, remedio", en: "medicine" },
      distractors: ["medicin", "medical", "medicate"],
      note: { es: "«take medicine» = tomar un remedio." },
      tags: ["health"],
    },
  ]),
};
