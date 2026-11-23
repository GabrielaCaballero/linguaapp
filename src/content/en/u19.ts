import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u19",
  lang: "en",
  index: 19,
  cefr: "B2",
  title: { target: "The job market", es: "El mundo laboral", en: "The job market" },
  canDo: [
    { es: "Puedo desenvolverme en una entrevista de trabajo y hablar de mis logros.", en: "I can handle a job interview and talk about my achievements." },
    { es: "Puedo hablar de mi carrera, de mis puntos fuertes y de lo que quiero mejorar.", en: "I can talk about my career, my strengths and what I want to improve." },
    { es: "Sé usar el present perfect continuous y elegir entre -ing y «to» después de un verbo.", en: "I can use the present perfect continuous and choose between -ing and 'to' after a verb." },
  ],
  icon: "📈",
  items: build("en", 19, "B2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "resume", type: "word", target: "résumé",
      gloss: { es: "currículum (CV)", en: "résumé (CV)" },
      accept: [{ text: "resume" }, { text: "CV" }],
      distractors: ["summary", "curriculum", "record"],
      note: { es: "En Estados Unidos se dice «résumé» (muchas veces sin tildes); en Reino Unido, «CV»." },
      tags: ["work", "jobs"],
    },
    {
      id: "apply-for", type: "phrase", pos: "phrase", target: "apply for a job",
      gloss: { es: "postularse a un trabajo", en: "to apply for a job" },
      distractors: ["apply to a job's", "apply a job", "postulate for a job"],
      errors: [{ text: "postulate for a job", feedback: { es: "«postularse» a un empleo es «apply for»." } }],
      tags: ["work", "jobs", "chunk"],
    },
    {
      id: "skills", type: "word", target: "skills",
      gloss: { es: "habilidades, competencias", en: "skills" },
      distractors: ["skulls", "abilities's", "kills"],
      tags: ["work"],
    },
    {
      id: "strengths", type: "word", target: "strengths",
      gloss: { es: "puntos fuertes, fortalezas", en: "strengths" },
      distractors: ["strongs", "strenghts", "forces"],
      tags: ["work", "interview"],
    },
    {
      id: "weakness", type: "word", target: "weakness", plural: "weaknesses",
      gloss: { es: "punto débil", en: "weakness" },
      distractors: ["weekness", "weak point's", "wellness"],
      tags: ["work", "interview"],
    },
    {
      id: "achievement", type: "word", target: "achievement", plural: "achievements",
      gloss: { es: "logro", en: "achievement" },
      distractors: ["achieve", "agreement", "attachment"],
      tags: ["work", "interview"],
    },
    {
      id: "promotion", type: "word", target: "promotion", plural: "promotions",
      gloss: { es: "ascenso", en: "promotion" },
      distractors: ["promotor", "promise", "motion"],
      note: { es: "«get a promotion» = conseguir un ascenso; también significa «promoción» comercial." },
      tags: ["work"],
    },
    {
      id: "be-laid-off", type: "phrase", pos: "phrase", target: "be laid off",
      gloss: { es: "quedar despedido/a (por recorte de personal)", en: "to be laid off" },
      distractors: ["be layed off", "be lied off", "be fired off"],
      note: { es: "be fired = despedido por algo que hiciste; be laid off = por recortes de la empresa." },
      tags: ["work"],
    },
    {
      id: "look-forward-to", type: "phrase", pos: "phrase", target: "I look forward to hearing from you.",
      gloss: { es: "Quedo a la espera de su respuesta.", en: "I look forward to hearing from you." },
      accept: [{ text: "I'm looking forward to hearing from you." }],
      distractors: ["I look forward to hear from you.", "I wait your answer.", "I look forward hearing you."],
      errors: [{ text: "I look forward to hear from you.", feedback: { es: "Aquí «to» es preposición: va seguida de -ing (to hearing)." }, ruleId: "en-g-gerund-infinitive" }],
      tags: ["work", "email", "chunk"],
    },
    {
      id: "team-player", type: "word", target: "team player",
      gloss: { es: "persona que trabaja bien en equipo", en: "team player" },
      distractors: ["team worker's", "group player", "teammate"],
      tags: ["work", "interview"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "ive-been-looking", type: "sentence", target: "I've been looking for a job for three months.",
      gloss: { es: "Hace tres meses que busco trabajo.", en: "I've been looking for a job for three months." },
      accept: [{ text: "I have been looking for a job for three months." }],
      errors: [{ text: "I'm looking for a job since three months.", feedback: { es: "Acción que empezó y sigue: have been + -ing, con for + duración." }, ruleId: "en-g-present-perfect-cont" }],
      distractors: ["since", "looked", "am"],
      grammar: ["en-g-present-perfect-cont"],
      tags: ["work", "jobs"],
    },
    {
      id: "how-long-have-you-been", type: "sentence", target: "How long have you been working in sales?",
      gloss: { es: "¿Cuánto tiempo hace que trabajas en ventas?", en: "How long have you been working in sales?" },
      errors: [{ text: "How long are you working in sales?", feedback: { es: "Para preguntar por una duración que sigue: How long have you been…?" }, ruleId: "en-g-present-perfect-cont" }],
      distractors: ["are", "since", "worked"],
      grammar: ["en-g-present-perfect-cont"],
      tags: ["work", "interview", "questions"],
    },
    {
      id: "shes-been-crying", type: "sentence", target: "Her eyes are red. She's been crying.",
      gloss: { es: "Tiene los ojos rojos. Ha estado llorando.", en: "Her eyes are red. She's been crying." },
      accept: [{ text: "Her eyes are red. She has been crying." }],
      distractors: ["cried", "is", "was"],
      grammar: ["en-g-present-perfect-cont"],
      tags: ["present-perfect-continuous"],
    },
    {
      id: "i-enjoy-working", type: "sentence", target: "I enjoy working with people from different cultures.",
      gloss: { es: "Disfruto trabajar con gente de distintas culturas.", en: "I enjoy working with people from different cultures." },
      errors: [{ text: "I enjoy to work with people from different cultures.", feedback: { es: "«enjoy» va seguido de -ing." }, ruleId: "en-g-gerund-infinitive" }],
      distractors: ["to", "work", "differents"],
      grammar: ["en-g-gerund-infinitive"],
      tags: ["work", "interview"],
    },
    {
      id: "i-decided-to-change", type: "sentence", target: "I decided to change careers after ten years in banking.",
      gloss: { es: "Decidí cambiar de profesión después de diez años en la banca.", en: "I decided to change careers after ten years in banking." },
      errors: [{ text: "I decided changing careers after ten years in banking.", feedback: { es: "«decide» va seguido de «to» + verbo." }, ruleId: "en-g-gerund-infinitive" }],
      distractors: ["changing", "of", "career's"],
      grammar: ["en-g-gerund-infinitive"],
      tags: ["work"],
    },
    {
      id: "im-good-at", type: "sentence", target: "I'm good at solving problems under pressure.",
      gloss: { es: "Soy bueno/a resolviendo problemas bajo presión.", en: "I'm good at solving problems under pressure." },
      accept: [{ text: "I am good at solving problems under pressure." }],
      errors: [{ text: "I'm good at solve problems under pressure.", feedback: { es: "Después de una preposición (at, in, of…) el verbo va con -ing." }, ruleId: "en-g-gerund-infinitive" }],
      distractors: ["solve", "in", "to"],
      grammar: ["en-g-gerund-infinitive"],
      tags: ["work", "interview"],
    },
    {
      id: "would-you-mind", type: "sentence", target: "Would you mind sending me the job description?",
      gloss: { es: "¿Te importaría mandarme la descripción del puesto?", en: "Would you mind sending me the job description?" },
      errors: [{ text: "Would you mind to send me the job description?", feedback: { es: "«mind» va seguido de -ing: Would you mind sending…?" }, ruleId: "en-g-gerund-infinitive" }],
      distractors: ["to", "send", "for"],
      grammar: ["en-g-gerund-infinitive"],
      tags: ["work", "polite"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-present-perfect-cont", type: "pattern", target: "I've been working · She's been waiting",
      gloss: { es: "el present perfect continuous", en: "the present perfect continuous" },
      pattern: {
        rule: {
          es: "have / has been + -ing pone el foco en la duración de una actividad que empezó en el pasado y sigue (o acaba de terminar y se notan sus efectos). En español solemos decir «hace… que» o «llevo… -ndo».",
          en: "have / has been + -ing focuses on the duration of an activity that started in the past and continues (or has just stopped, with visible effects).",
        },
        table: [["duración", "I've been studying English for two years."], ["efecto visible", "You're wet! Have you been running?"], ["pregunta", "How long have you been waiting?"]],
      },
      question: {
        prompt: { es: "«Llevo una hora esperándote» es…", en: "Which means you started waiting an hour ago and are still waiting?" },
        options: ["I've been waiting for you for an hour.", "I'm waiting for you since an hour.", "I wait for you for an hour.", "I was waiting for you for an hour ago."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-present-perfect-cont"], tags: ["grammar", "present-perfect-continuous"],
    },
    {
      id: "pat-gerund-infinitive", type: "pattern", target: "enjoy doing · decide to do",
      gloss: { es: "verbo + -ing o verbo + to", en: "verb + -ing or verb + to" },
      pattern: {
        rule: {
          es: "Algunos verbos van seguidos de -ing (enjoy, mind, avoid, finish, suggest) y otros de «to» + verbo (want, decide, hope, plan, agree). Después de una preposición siempre va -ing: good at cooking, interested in learning.",
          en: "Some verbs take -ing (enjoy, mind, avoid, finish, suggest), others 'to' + verb (want, decide, hope, plan, agree). After a preposition it's always -ing: good at cooking, interested in learning.",
        },
        table: [["+ -ing", "+ to"], ["enjoy, mind, avoid", "want, decide, hope"], ["finish, suggest, keep", "plan, agree, refuse"], ["after a preposition", "would like, need"]],
      },
      question: {
        prompt: { es: "Completa: «We've agreed ___ the project by June.»", en: "Complete: 'We've agreed ___ the project by June.'" },
        options: ["to finish", "finishing", "finish", "for finishing"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-gerund-infinitive"], tags: ["grammar", "verb-patterns"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-interview", type: "dialogue", target: "Tell me about yourself.",
      gloss: { es: "Hábleme de usted.", en: "Tell me about yourself." },
      turns: [
        { who: "A", target: "So, tell me about yourself.", gloss: { es: "Bueno, hábleme de usted.", en: "So, tell me about yourself." } },
        { who: "B", target: "I've been working as a project manager for six years, mainly in tech companies.", gloss: { es: "Hace seis años que trabajo como gerente de proyectos, sobre todo en empresas de tecnología.", en: "I've been working as a project manager for six years, mainly in tech companies." } },
        { who: "A", target: "What would you say is your biggest strength?", gloss: { es: "¿Cuál diría que es su mayor fortaleza?", en: "What would you say is your biggest strength?" } },
        { who: "B", target: "I'm good at keeping teams motivated, even when deadlines are tight.", gloss: { es: "Sé mantener motivados a los equipos, incluso cuando los plazos son ajustados.", en: "I'm good at keeping teams motivated, even when deadlines are tight." } },
        { who: "A", target: "And why do you want to leave your current job?", gloss: { es: "¿Y por qué quiere dejar su trabajo actual?", en: "And why do you want to leave your current job?" } },
        { who: "B", target: "I'm looking for new challenges and a chance to work internationally.", gloss: { es: "Busco nuevos desafíos y la oportunidad de trabajar a nivel internacional.", en: "I'm looking for new challenges and a chance to work internationally." } },
      ],
      question: {
        prompt: { es: "¿Cuál es el punto fuerte de B?", en: "What is B's main strength?" },
        options: [
          { es: "Mantener motivados a los equipos", en: "Keeping teams motivated" },
          { es: "Hablar varios idiomas", en: "Speaking several languages" },
          { es: "Programar", en: "Coding" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "work", "interview"],
    },
    {
      id: "lis-voicemail-hr", type: "listening", target: "Hi, this is Karen from Human Resources. We've been reviewing your application, and we'd like to invite you to a second interview next Thursday at ten.",
      gloss: { es: "Hola, habla Karen de Recursos Humanos. Estuvimos revisando su postulación y queremos invitarle a una segunda entrevista el próximo jueves a las diez.", en: "Hi, this is Karen from Human Resources. We've been reviewing your application, and we'd like to invite you to a second interview next Thursday at ten." },
      question: {
        prompt: { es: "¿Para qué llama Karen?", en: "Why is Karen calling?" },
        options: [
          { es: "Para invitar a una segunda entrevista", en: "To invite the candidate to a second interview" },
          { es: "Para ofrecer el puesto", en: "To offer the job" },
          { es: "Para decir que no fue seleccionado", en: "To say the application was rejected" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "work", "interview"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-carrera", type: "bridge", onlyFor: "es", target: "career",
      gloss: { es: "trayectoria profesional", en: "career (professional path)" },
      question: {
        prompt: { es: "«She has had a long career in law» significa…", en: "'She has had a long career in law' means…" },
        options: [
          { es: "Ha trabajado muchos años en derecho.", en: "She has worked in law for many years." },
          { es: "Estudió una carrera larga de Derecho.", en: "She studied a long law degree." },
          { es: "Tardó mucho en terminar Derecho.", en: "She took a long time to finish law school." },
        ],
        answer: 0,
      },
      note: { es: "career = la vida profesional; la carrera universitaria es «degree» o «major»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "work"],
    },
    {
      id: "br-compromise", type: "bridge", onlyFor: "es", target: "commitment",
      gloss: { es: "compromiso (dedicación, responsabilidad)", en: "commitment" },
      question: {
        prompt: { es: "En una entrevista: «We value commitment». Valoran…", en: "In an interview: 'We value commitment'. They value…" },
        options: [
          { es: "el compromiso y la dedicación", en: "dedication" },
          { es: "que sepas ceder en una negociación", en: "being willing to give way in a negotiation" },
          { es: "que estés comprometido/a para casarte", en: "being engaged to be married" },
        ],
        answer: 0,
      },
      note: { es: "compromiso (dedicación) = commitment; «compromise» es ceder o llegar a un acuerdo a medias; comprometido/a para casarse = engaged." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "work"],
    },

    // ── Added to complete the unit ───────────────────────────
    {
      id: "job-interview", type: "word", target: "job interview",
      gloss: { es: "entrevista de trabajo", en: "job interview" },
      distractors: ["work interview's", "job meeting", "job intervention"],
      tags: ["work", "interview"],
    },
    {
      id: "experience", type: "word", target: "experience",
      gloss: { es: "experiencia", en: "experience" },
      distractors: ["experiment", "expertise", "experiense"],
      note: { es: "Para trabajo es incontable: work experience." },
      tags: ["work", "interview"],
    },
  ]),
};
