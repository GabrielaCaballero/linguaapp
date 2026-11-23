import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u02",
  lang: "en",
  index: 2,
  cefr: "A1.1",
  title: { target: "Where are you from?", es: "¿De dónde eres?", en: "Where are you from?" },
  canDo: [
    { es: "Puedo decir de dónde soy y preguntarle a alguien de dónde es.", en: "I can say where I'm from and ask others." },
    { es: "Puedo decir a qué me dedico y preguntar por el trabajo de otra persona.", en: "I can say what I do and ask about someone's job." },
    { es: "Sé usar el verbo «be» (am, is, are) y elegir entre «a» y «an».", en: "I can use 'be' (am, is, are) and choose between 'a' and 'an'." },
  ],
  icon: "🌎",
  items: build("en", 2, "A1.1", [
    // ── Sounds ───────────────────────────────────────────────
    {
      id: "s-v", type: "sound", target: "very", pair: ["very", "berry"], slow: true,
      gloss: { es: "muy", en: "very" },
      distractors: ["berry", "fery", "wery"],
      note: { es: "La «v» inglesa no es «b»: los dientes de arriba tocan el labio de abajo, como una «f» con voz." },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "v-b"],
    },

    // ── Countries and nationalities ──────────────────────────
    {
      id: "where-are-you-from", type: "phrase", pos: "phrase", target: "Where are you from?",
      gloss: { es: "¿De dónde eres?", en: "Where are you from?" },
      accept: [{ text: "Where do you come from?" }],
      distractors: ["Where are you?", "From where are you?", "Where you are from?"],
      errors: [{ text: "From where are you?", feedback: { es: "En inglés la preposición va al final de la pregunta: Where are you from?" } }],
      note: { es: "La preposición «from» queda al final: Where are you from?" },
      tags: ["introductions", "countries", "chunk"],
    },
    {
      id: "im-from-mexico", type: "sentence", target: "I'm from Mexico.",
      gloss: { es: "Soy de México.", en: "I'm from Mexico." },
      accept: [{ text: "I am from Mexico." }, { text: "I come from Mexico." }],
      errors: [{ text: "I'm of Mexico.", feedback: { es: "Para el origen se usa «from», no «of»: I'm from Mexico." } }],
      distractors: ["of", "in", "is"],
      tags: ["introductions", "countries"],
    },
    {
      id: "country", type: "word", target: "country", plural: "countries",
      gloss: { es: "país", en: "country (nation)" },
      distractors: ["county", "city", "count"],
      note: { es: "Plural: countries (la -y pasa a -ies)." },
      tags: ["countries"],
    },
    {
      id: "mexican", type: "word", pos: "adj", target: "Mexican",
      gloss: { es: "mexicano/a", en: "Mexican" },
      distractors: ["Mexico", "Mexicano", "Mexican's"],
      note: { es: "Las nacionalidades llevan mayúscula en inglés: Mexican, Peruvian." },
      tags: ["countries", "nationality"],
    },
    {
      id: "colombian", type: "word", pos: "adj", target: "Colombian",
      gloss: { es: "colombiano/a", en: "Colombian" },
      distractors: ["Columbian", "Colombia", "Colombiano"],
      tags: ["countries", "nationality"],
    },
    {
      id: "american", type: "word", pos: "adj", target: "American",
      gloss: { es: "estadounidense", en: "American (from the US)" },
      distractors: ["America", "Americano", "Amerikan"],
      note: { es: "En inglés «American» casi siempre quiere decir «de Estados Unidos»; the United States = Estados Unidos." },
      tags: ["countries", "nationality"],
    },
    {
      id: "spanish", type: "word", pos: "adj", target: "Spanish",
      gloss: { es: "español/a (de España, o el idioma)", en: "Spanish" },
      distractors: ["Spain", "Spanol", "Spaniard's"],
      note: { es: "Spain = España; Spanish = español (persona o idioma)." },
      tags: ["countries", "nationality", "languages"],
    },
    {
      id: "english", type: "word", pos: "adj", target: "English",
      gloss: { es: "inglés/inglesa (el idioma, o de Inglaterra)", en: "English" },
      distractors: ["England", "Inglish", "Englis"],
      tags: ["countries", "languages"],
    },

    // ── Jobs ─────────────────────────────────────────────────
    {
      id: "what-do-you-do", type: "phrase", pos: "phrase", target: "What do you do?",
      gloss: { es: "¿A qué te dedicas?", en: "What do you do? (your job)" },
      accept: [{ text: "What do you do for a living?" }, { text: "What's your job?" }],
      distractors: ["What are you doing?", "What you do?", "How do you do?"],
      note: { es: "Pregunta por el trabajo; «What are you doing?» es «¿qué estás haciendo ahora?»." },
      tags: ["work", "chunk"],
    },
    {
      id: "teacher", type: "word", target: "teacher", plural: "teachers",
      gloss: { es: "maestro/a, profesor/a", en: "teacher" },
      distractors: ["teach", "teaser", "preacher"],
      tags: ["work", "jobs"],
    },
    {
      id: "doctor", type: "word", target: "doctor", plural: "doctors",
      gloss: { es: "médico/a, doctor/a", en: "doctor" },
      distractors: ["doctrine", "director", "docter"],
      tags: ["work", "jobs"],
    },
    {
      id: "engineer", type: "word", target: "engineer", plural: "engineers",
      gloss: { es: "ingeniero/a", en: "engineer" },
      distractors: ["engine", "ingenier", "engineering"],
      tags: ["work", "jobs"],
    },
    {
      id: "nurse", type: "word", target: "nurse", plural: "nurses",
      gloss: { es: "enfermero/a", en: "nurse" },
      distractors: ["purse", "nursery", "nose"],
      tags: ["work", "jobs", "health"],
    },
    {
      id: "student", type: "word", target: "student", plural: "students",
      gloss: { es: "estudiante", en: "student" },
      distractors: ["study", "estudent", "studio"],
      note: { es: "Nunca empieza con «e»: student, Spain, school." },
      tags: ["work", "jobs", "school"],
    },
    {
      id: "lawyer", type: "word", target: "lawyer", plural: "lawyers",
      gloss: { es: "abogado/a", en: "lawyer" },
      accept: [{ text: "attorney" }],
      distractors: ["layer", "law", "loyal"],
      note: { es: "En Estados Unidos también se dice «attorney»." },
      tags: ["work", "jobs"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "shes-an-engineer", type: "sentence", target: "She's an engineer.",
      gloss: { es: "Ella es ingeniera.", en: "She's an engineer." },
      accept: [{ text: "She is an engineer." }],
      errors: [
        { text: "She's engineer.", feedback: { es: "Con profesiones el inglés pide «a/an»: She's an engineer." }, ruleId: "en-g-a-an" },
        { text: "She's a engineer.", feedback: { es: "Antes de sonido vocálico va «an»: an engineer." }, ruleId: "en-g-a-an" },
      ],
      distractors: ["a", "He's", "is"],
      grammar: ["en-g-a-an"],
      annot: { an: { es: "artículo antes de sonido vocálico", en: "article before a vowel sound" } },
      tags: ["work", "jobs"],
    },
    {
      id: "hes-a-teacher", type: "sentence", target: "He's a teacher from Chile.",
      gloss: { es: "Es un profesor de Chile.", en: "He's a teacher from Chile." },
      accept: [{ text: "He is a teacher from Chile." }],
      errors: [{ text: "He's teacher from Chile.", feedback: { es: "Falta «a»: He's a teacher." }, ruleId: "en-g-a-an" }],
      distractors: ["an", "of", "She"],
      grammar: ["en-g-a-an", "en-g-be"],
      tags: ["work", "countries"],
    },
    {
      id: "were-colombian", type: "sentence", target: "We're not American. We're Colombian.",
      gloss: { es: "No somos estadounidenses. Somos colombianos.", en: "We're not American. We're Colombian." },
      accept: [{ text: "We are not American. We are Colombian." }, { text: "We aren't American. We're Colombian." }, { text: "We're not Americans. We're Colombians." }],
      distractors: ["no", "is", "Colombia"],
      grammar: ["en-g-be"],
      tags: ["countries", "nationality", "negation"],
    },
    {
      id: "are-you-a-student", type: "sentence", target: "Are you a student? Yes, I am.",
      gloss: { es: "¿Eres estudiante? Sí.", en: "Are you a student? Yes, I am." },
      accept: [{ text: "Are you a student? Yes, I'm a student." }, { text: "Are you a student? Yes." }],
      errors: [{ text: "Are you a student? Yes, I'm.", feedback: { es: "Al final de una respuesta corta no se contrae: Yes, I am." }, ruleId: "en-g-be" }],
      distractors: ["You", "is", "I'm"],
      note: { es: "La respuesta corta repite el verbo: Yes, I am / No, I'm not." },
      grammar: ["en-g-be"],
      tags: ["questions"],
    },
    {
      id: "theyre-nurses", type: "sentence", target: "They're nurses in a big hospital.",
      gloss: { es: "Son enfermeros en un hospital grande.", en: "They're nurses in a big hospital." },
      accept: [{ text: "They are nurses in a big hospital." }],
      errors: [{ text: "They're nurse in a big hospital.", feedback: { es: "Con «they» el sustantivo va en plural: nurses." } }],
      distractors: ["There", "a", "is"],
      grammar: ["en-g-be"],
      tags: ["work", "jobs"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-be", type: "pattern", target: "I am · you are · he/she/it is · we are · they are",
      gloss: { es: "el verbo «be» (ser/estar) en presente", en: "the verb 'be' in the present" },
      pattern: {
        rule: {
          es: "«be» significa a la vez «ser» y «estar». Tiene tres formas: am (I), is (he, she, it) y are (you, we, they). El sujeto nunca se omite.",
          en: "'be' has three present forms: am (I), is (he, she, it) and are (you, we, they). The subject is never left out.",
        },
        table: [["I", "am", "I'm"], ["you / we / they", "are", "you're / we're / they're"], ["he / she / it", "is", "he's / she's / it's"]],
      },
      question: {
        prompt: { es: "Completa: «My sister ___ a doctor.»", en: "Complete: 'My sister ___ a doctor.'" },
        options: ["is", "are", "am", "be"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-be"], tags: ["grammar", "be"],
    },
    {
      id: "tab-be", type: "paradigm", target: "be — present", spoken: "be",
      gloss: { es: "be (ser/estar) — presente", en: "be — present tense" },
      grammar: ["en-g-be"],
      paradigm: {
        caption: { es: "Conjuga «be» en presente", en: "Conjugate 'be' in the present tense" },
        cells: [
          { label: "I", answer: "am", ruleId: "en-g-be" },
          { label: "you", answer: "are", ruleId: "en-g-be" },
          { label: "he / she / it", answer: "is", ruleId: "en-g-be" },
          { label: "we", answer: "are", ruleId: "en-g-be" },
          { label: "they", answer: "are", ruleId: "en-g-be" },
        ],
      },
      tags: ["grammar", "be", "table"],
    },
    {
      id: "pat-a-an", type: "pattern", target: "a teacher · an engineer",
      gloss: { es: "«a» o «an» (un/una)", en: "'a' or 'an'" },
      pattern: {
        rule: {
          es: "«a» y «an» significan «un/una». Se usa «an» cuando la palabra siguiente empieza con sonido de vocal: an engineer, an hour. Con profesiones el artículo es obligatorio: I'm a nurse.",
          en: "Use 'an' before a vowel sound (an engineer, an hour) and 'a' before a consonant sound (a teacher, a university). With jobs the article is required: I'm a nurse.",
        },
        table: [["a", "an"], ["a doctor", "an engineer"], ["a lawyer", "an actor"], ["a university (yu-)", "an hour (h muda)"]],
      },
      question: {
        prompt: { es: "Completa: «He's ___ architect.»", en: "Complete: 'He's ___ architect.'" },
        options: ["an", "a", "—", "the"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-a-an"], tags: ["grammar", "articles"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-where-from", type: "dialogue", target: "I'm a nurse.",
      gloss: { es: "Soy enfermero/a.", en: "I'm a nurse." },
      turns: [
        { who: "A", target: "Where are you from, Sofia?", gloss: { es: "¿De dónde eres, Sofia?", en: "Where are you from, Sofia?" } },
        { who: "B", target: "I'm from Peru, from Lima. And you?", gloss: { es: "Soy de Perú, de Lima. ¿Y tú?", en: "I'm from Peru, from Lima. And you?" } },
        { who: "A", target: "I'm from Canada. What do you do?", gloss: { es: "Soy de Canadá. ¿A qué te dedicas?", en: "I'm from Canada. What do you do?" } },
        { who: "B", target: "I'm a nurse. And you?", gloss: { es: "Soy enfermera. ¿Y tú?", en: "I'm a nurse. And you?" } },
        { who: "A", target: "I'm a student.", gloss: { es: "Soy estudiante.", en: "I'm a student." } },
      ],
      question: {
        prompt: { es: "¿A qué se dedica Sofia?", en: "What does Sofia do?" },
        options: [
          { es: "Es enfermera", en: "She's a nurse" },
          { es: "Es estudiante", en: "She's a student" },
          { es: "Es profesora", en: "She's a teacher" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "introductions", "work"],
    },
    {
      id: "lis-meet-carlos", type: "listening", target: "Hi, I'm Carlos. I'm from Colombia, but I live in Miami. I'm an engineer.",
      gloss: { es: "Hola, soy Carlos. Soy de Colombia, pero vivo en Miami. Soy ingeniero.", en: "Hi, I'm Carlos. I'm from Colombia, but I live in Miami. I'm an engineer." },
      question: {
        prompt: { es: "¿De dónde es Carlos?", en: "Where is Carlos from?" },
        options: [
          { es: "De Colombia", en: "Colombia" },
          { es: "De Miami", en: "Miami" },
          { es: "De México", en: "Mexico" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "introductions"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-capitals", type: "bridge", onlyFor: "es", target: "I speak Spanish and English.",
      gloss: { es: "Hablo español e inglés.", en: "I speak Spanish and English." },
      question: {
        prompt: { es: "¿Cuál está bien escrita?", en: "Which one is spelled correctly?" },
        options: ["I speak Spanish and English.", "I speak spanish and english.", "i speak Spanish and English."],
        answer: 0,
      },
      note: { es: "En inglés llevan mayúscula los idiomas, las nacionalidades, los días y los meses, y siempre el pronombre «I» (yo)." },
      exercises: ["guess", "question"], tags: ["bridge", "spelling"],
    },
    {
      id: "br-carrera", type: "bridge", onlyFor: "es", target: "major",
      gloss: { es: "la carrera universitaria (EE. UU.)", en: "major (university subject)" },
      question: {
        prompt: { es: "«My major is law» significa…", en: "'My major is law' means…" },
        options: [
          { es: "Estudio la carrera de Derecho.", en: "I study law at university." },
          { es: "Mi carrera profesional es el derecho.", en: "My professional career is law." },
          { es: "Mi jefe es abogado.", en: "My boss is a lawyer." },
        ],
        answer: 0,
      },
      note: { es: "«career» es tu trayectoria profesional; lo que estudias en la universidad es tu «major» (en Estados Unidos) o tu «degree»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "school"],
    },
  ]),
};
