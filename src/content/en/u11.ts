import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u11",
  lang: "en",
  index: 11,
  cefr: "A2",
  title: { target: "When I was a kid", es: "Cuando era chico/a", en: "When I was a kid" },
  canDo: [
    { es: "Puedo contar cómo era mi infancia y cómo era mi pueblo o mi ciudad.", en: "I can describe my childhood and the place where I grew up." },
    { es: "Puedo comparar mis costumbres de antes con las de ahora.", en: "I can compare my old habits with my habits now." },
    { es: "Sé usar was / were y «used to» para hábitos del pasado.", en: "I can use was / were and 'used to' for past habits." },
  ],
  icon: "🧸",
  items: build("en", 11, "A2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "childhood", type: "word", target: "childhood",
      gloss: { es: "infancia, niñez", en: "childhood" },
      distractors: ["children", "childish", "neighborhood"],
      tags: ["childhood"],
    },
    {
      id: "grow-up", type: "word", pos: "verb", target: "grow up",
      gloss: { es: "crecer, criarse", en: "to grow up" },
      forms: { past: "grew up", pp: "grown up" },
      distractors: ["grow", "grown", "raise up"],
      note: { es: "«I grew up in Cali» = me crié en Cali." },
      tags: ["childhood"],
    },
    {
      id: "town", type: "word", target: "town", plural: "towns",
      gloss: { es: "pueblo, ciudad pequeña", en: "town" },
      distractors: ["tower", "down", "tone"],
      tags: ["childhood", "places"],
    },
    {
      id: "toy", type: "word", target: "toy", plural: "toys",
      gloss: { es: "juguete", en: "toy" },
      distractors: ["boy", "joy", "tie"],
      tags: ["childhood"],
    },
    {
      id: "shy", type: "word", pos: "adj", target: "shy",
      gloss: { es: "tímido/a", en: "shy" },
      distractors: ["sky", "sly", "timid's"],
      tags: ["childhood", "character"],
    },
    {
      id: "naughty", type: "word", pos: "adj", target: "naughty",
      gloss: { es: "travieso/a (un niño)", en: "naughty" },
      distractors: ["nasty", "knotty", "noisy"],
      tags: ["childhood", "character"],
    },
    {
      id: "strict", type: "word", pos: "adj", target: "strict",
      gloss: { es: "estricto/a", en: "strict" },
      distractors: ["street", "stick", "strike"],
      tags: ["childhood", "character"],
    },
    {
      id: "elementary-school", type: "word", target: "elementary school",
      gloss: { es: "la primaria, la escuela primaria", en: "elementary school" },
      accept: [{ text: "primary school" }, { text: "grade school" }],
      distractors: ["elemental school", "first school", "high school"],
      note: { es: "Después viene «middle school» y luego «high school» (la secundaria / la prepa)." },
      tags: ["childhood", "school"],
    },
    {
      id: "anymore", type: "word", pos: "adv", target: "anymore",
      gloss: { es: "ya no (al final de una frase negativa)", en: "anymore (no longer)" },
      accept: [{ text: "any more" }],
      distractors: ["no more", "already", "yet"],
      note: { es: "«I don't smoke anymore» = ya no fumo." },
      tags: ["childhood", "time"],
    },
    {
      id: "when-i-was-little", type: "phrase", pos: "phrase", target: "when I was little",
      gloss: { es: "cuando era pequeño/a", en: "when I was little" },
      accept: [{ text: "when I was a kid" }, { text: "when I was a child" }, { text: "when I was young" }],
      distractors: ["when I were little", "when I am little", "when was I little"],
      tags: ["childhood", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "i-was-very-shy", type: "sentence", target: "I was very shy when I was a kid.",
      gloss: { es: "De chico/a era muy tímido/a.", en: "I was very shy when I was a kid." },
      accept: [{ text: "I was very shy when I was a child." }, { text: "When I was a kid, I was very shy." }],
      errors: [{ text: "I were very shy when I were a kid.", feedback: { es: "Con «I» el pasado de «be» es «was»." }, ruleId: "en-g-was-were" }],
      distractors: ["were", "am", "child"],
      grammar: ["en-g-was-were"],
      tags: ["childhood", "past"],
    },
    {
      id: "my-parents-were-strict", type: "sentence", target: "My parents were strict but fair.",
      gloss: { es: "Mis padres eran estrictos pero justos.", en: "My parents were strict but fair." },
      errors: [{ text: "My parents was strict but fair.", feedback: { es: "Con plural: were." }, ruleId: "en-g-was-were" }],
      distractors: ["was", "are", "fairs"],
      grammar: ["en-g-was-were"],
      tags: ["childhood", "family"],
    },
    {
      id: "there-was-a-park", type: "sentence", target: "There was a big park near our house.",
      gloss: { es: "Había un parque grande cerca de nuestra casa.", en: "There was a big park near our house." },
      errors: [{ text: "There were a big park near our house.", feedback: { es: "«había» + singular = there was; + plural = there were." }, ruleId: "en-g-was-were" }],
      distractors: ["were", "Had", "ours"],
      grammar: ["en-g-was-were", "en-g-there-is"],
      tags: ["childhood", "places"],
    },
    {
      id: "were-you-a-good-student", type: "sentence", target: "Were you a good student? No, I wasn't.",
      gloss: { es: "¿Eras buen/a estudiante? No.", en: "Were you a good student? No, I wasn't." },
      accept: [{ text: "Were you a good student? No, I was not." }],
      errors: [{ text: "Did you be a good student? No, I didn't.", feedback: { es: "«be» no usa «did»: Were you…? No, I wasn't." }, ruleId: "en-g-was-were" }],
      distractors: ["Was", "did", "weren't"],
      grammar: ["en-g-was-were"],
      tags: ["childhood", "school", "questions"],
    },
    {
      id: "i-used-to-play", type: "sentence", target: "I used to play in the street with my cousins.",
      gloss: { es: "Jugaba en la calle con mis primos.", en: "I used to play in the street with my cousins." },
      errors: [{ text: "I use to play in the street with my cousins.", feedback: { es: "En afirmativo es «used to», con -d." }, ruleId: "en-g-used-to" }],
      distractors: ["use", "on", "played"],
      grammar: ["en-g-used-to"],
      annot: { "used to": { es: "hábito del pasado que ya no existe (= solía, o el imperfecto)", en: "a past habit that no longer exists" } },
      tags: ["childhood", "past"],
    },
    {
      id: "she-didnt-use-to-like", type: "sentence", target: "She didn't use to like vegetables.",
      gloss: { es: "Antes no le gustaban las verduras.", en: "She didn't use to like vegetables." },
      accept: [{ text: "She did not use to like vegetables." }, { text: "She never used to like vegetables." }],
      errors: [{ text: "She didn't used to like vegetables.", feedback: { es: "Después de «didn't»: use to (sin -d)." }, ruleId: "en-g-used-to" }],
      distractors: ["used", "wasn't", "liked"],
      grammar: ["en-g-used-to"],
      tags: ["childhood", "food", "negation"],
    },
    {
      id: "did-you-use-to", type: "sentence", target: "Did you use to have a pet?",
      gloss: { es: "¿Tenías mascota (de chico/a)?", en: "Did you use to have a pet?" },
      errors: [{ text: "Did you used to have a pet?", feedback: { es: "En la pregunta: Did you use to…?" }, ruleId: "en-g-used-to" }],
      distractors: ["used", "Were", "had"],
      grammar: ["en-g-used-to"],
      tags: ["childhood", "questions"],
    },
    {
      id: "i-dont-live-there-anymore", type: "sentence", target: "I grew up in a small town, but I don't live there anymore.",
      gloss: { es: "Me crié en un pueblo, pero ya no vivo allí.", en: "I grew up in a small town, but I don't live there anymore." },
      accept: [{ text: "I grew up in a small town but I don't live there any more." }],
      distractors: ["growed", "their", "no"],
      tags: ["childhood", "places"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-was-were", type: "pattern", target: "I was · you were · he was · they were",
      gloss: { es: "el pasado de «be»: was / were", en: "past of 'be': was / were" },
      pattern: {
        rule: {
          es: "El pasado de «be» tiene dos formas: «was» (I, he, she, it) y «were» (you, we, they). Equivale a «era / estaba / fue». Para preguntar se invierte («Were you…?») y no lleva «did».",
          en: "The past of 'be' has two forms: was (I, he, she, it) and were (you, we, they). Questions invert ('Were you…?') and don't use 'did'.",
        },
        table: [["I / he / she / it", "was", "wasn't"], ["you / we / they", "were", "weren't"]],
      },
      question: {
        prompt: { es: "Completa: «The kids ___ tired after the party.»", en: "Complete: 'The kids ___ tired after the party.'" },
        options: ["were", "was", "did", "are be"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-was-were"], tags: ["grammar", "past", "be"],
    },
    {
      id: "tab-was-were", type: "paradigm", target: "be — past simple", spoken: "be, past simple",
      gloss: { es: "be (ser/estar) — pasado", en: "be — past simple" },
      grammar: ["en-g-was-were"],
      paradigm: {
        caption: { es: "Conjuga «be» en pasado", en: "Conjugate 'be' in the past simple" },
        cells: [
          { label: "I", answer: "was", ruleId: "en-g-was-were" },
          { label: "you", answer: "were", ruleId: "en-g-was-were" },
          { label: "he / she / it", answer: "was", ruleId: "en-g-was-were" },
          { label: "we", answer: "were", ruleId: "en-g-was-were" },
          { label: "they", answer: "were", ruleId: "en-g-was-were" },
        ],
      },
      tags: ["grammar", "past", "be", "table"],
    },
    {
      id: "pat-used-to", type: "pattern", target: "I used to… · I didn't use to… · Did you use to…?",
      gloss: { es: "used to (solía, hábitos del pasado)", en: "used to for past habits" },
      pattern: {
        rule: {
          es: "«used to» + verbo describe hábitos o situaciones del pasado que ya no ocurren; en español solemos usar el imperfecto o «solía». En preguntas y negaciones, con «did», se escribe «use to».",
          en: "'used to' + verb describes past habits or states that are no longer true. In questions and negatives, with 'did', it's spelled 'use to'.",
        },
        table: [["+", "I used to smoke."], ["−", "I didn't use to smoke."], ["?", "Did you use to smoke?"], ["ahora", "I don't smoke anymore."]],
      },
      question: {
        prompt: { es: "«De chico vivía en el campo» es…", en: "Which means 'As a child I lived in the countryside (but not now)'?" },
        options: ["I used to live in the country.", "I use to live in the country.", "I am used to live in the country.", "I used to living in the country."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-used-to"], tags: ["grammar", "past", "habits"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-childhood", type: "dialogue", target: "Where did you grow up?",
      gloss: { es: "¿Dónde te criaste?", en: "Where did you grow up?" },
      turns: [
        { who: "A", target: "Where did you grow up?", gloss: { es: "¿Dónde te criaste?", en: "Where did you grow up?" } },
        { who: "B", target: "In a small town near the coast. We used to go to the beach every weekend.", gloss: { es: "En un pueblo cerca de la costa. Íbamos a la playa todos los fines de semana.", en: "In a small town near the coast. We used to go to the beach every weekend." } },
        { who: "A", target: "Lucky you! Were you a happy kid?", gloss: { es: "¡Qué suerte! ¿Fuiste un niño feliz?", en: "Lucky you! Were you a happy kid?" } },
        { who: "B", target: "Yes, very. But I was really naughty. My teachers weren't too happy!", gloss: { es: "Sí, mucho. Pero era muy travieso. ¡Mis maestros no estaban muy contentos!", en: "Yes, very. But I was really naughty. My teachers weren't too happy!" } },
      ],
      question: {
        prompt: { es: "¿Qué hacía B todos los fines de semana?", en: "What did B use to do every weekend?" },
        options: [
          { es: "Iba a la playa", en: "Go to the beach" },
          { es: "Iba a la escuela", en: "Go to school" },
          { es: "Visitaba a sus maestros", en: "Visit his teachers" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "childhood"],
    },
    {
      id: "lis-grandma", type: "listening", target: "My grandma grew up on a farm. There wasn't any electricity, so she used to read by candlelight and go to bed at eight.",
      gloss: { es: "Mi abuela se crió en una granja. No había electricidad, así que leía a la luz de una vela y se acostaba a las ocho.", en: "My grandma grew up on a farm. There wasn't any electricity, so she used to read by candlelight and go to bed at eight." },
      question: {
        prompt: { es: "¿Por qué leía a la luz de una vela?", en: "Why did she read by candlelight?" },
        options: [
          { es: "Porque no había electricidad", en: "There was no electricity" },
          { es: "Porque le gustaba", en: "She liked it" },
          { es: "Porque se acostaba tarde", en: "She went to bed late" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "childhood"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-remember", type: "bridge", onlyFor: "es", target: "remind",
      gloss: { es: "recordarle algo a alguien", en: "remind (make someone remember)" },
      question: {
        prompt: { es: "«This song reminds me of my childhood» significa…", en: "'This song reminds me of my childhood' means…" },
        options: [
          { es: "Esta canción me recuerda a mi infancia.", en: "This song makes me think of my childhood." },
          { es: "Recuerdo esta canción de mi infancia.", en: "I remember this song from my childhood." },
          { es: "Esta canción habla de mi infancia.", en: "This song is about my childhood." },
        ],
        answer: 0,
      },
      note: { es: "remember = acordarse (tú recuerdas); remind = hacer que otro recuerde: Remind me to call Mom." },
      exercises: ["guess", "question"], tags: ["bridge", "confusable"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "pet", type: "word", target: "pet",
      gloss: { es: "mascota", en: "pet" },
      distractors: ["pit", "bet", "pat"],
      note: { es: "«Do you have any pets?» = ¿Tienes mascotas?" },
      tags: ["childhood", "animals"],
    },
  ]),
};
