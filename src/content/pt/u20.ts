import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u20",
  lang: "pt",
  index: 20,
  cefr: "B2",
  title: { target: "Notícias", es: "Noticias y actualidad", en: "News and current events" },
  canDo: [
    { es: "Puedo entender titulares y noticias breves y contarlas con mis palabras.", en: "I can understand headlines and short news items and retell them." },
    { es: "Sé usar el estilo indirecto (disse que…, perguntou se…) y el «tenho feito».", en: "I can use reported speech (disse que…, perguntou se…) and 'tenho feito'." },
  ],
  icon: "📰",
  items: build("pt", 20, "B2", [
    { id: "manchete", type: "word", pos: "noun", target: "a manchete", gender: "f", plural: "as manchetes", gloss: { es: "el titular (de un diario)", en: "the headline" }, distractors: ["o manchete", "a mancha", "o título de"], tags: ["news"] },
    { id: "jornal", type: "word", pos: "noun", target: "o jornal", gender: "m", plural: "os jornais", gloss: { es: "el diario, el periódico / el noticiero", en: "the newspaper / TV news" }, distractors: ["a jornal", "o jornalista", "o diário de"], tags: ["news"] },
    { id: "eleicao", type: "word", pos: "noun", target: "a eleição", gender: "f", plural: "as eleições", gloss: { es: "la elección (votación)", en: "the election" }, distractors: ["a eleção", "o eleição", "a elegição"], tags: ["news", "politics"] },
    { id: "governo", type: "word", pos: "noun", target: "o governo", gender: "m", plural: "os governos", gloss: { es: "el gobierno", en: "the government" }, distractors: ["a governa", "o gobierno", "o governador"], tags: ["news", "politics"] },
    { id: "greve", type: "word", pos: "noun", target: "a greve", gender: "f", plural: "as greves", gloss: { es: "la huelga, el paro", en: "the strike" }, distractors: ["o greve", "a grave", "a grade"], note: { es: "fazer greve / entrar em greve = hacer huelga.", en: "fazer greve / entrar em greve = to go on strike." }, tags: ["news", "society"] },
    { id: "segundo", type: "word", pos: "prep", target: "segundo", gloss: { es: "según", en: "according to" }, distractors: ["segun", "seguindo", "conforme de"], note: { es: "Segundo a polícia… = según la policía…; también es «segundo» (2.º) y «segundo» (de tiempo).", en: "Segundo a polícia… = according to the police…; it also means 'second'." }, tags: ["news", "connectors"] },
    { id: "divulgar", type: "word", pos: "verb", target: "divulgar", gloss: { es: "difundir, dar a conocer", en: "to release / make public" }, forms: { "pret.": "divulgou" }, distractors: ["vulgarizar", "dividir", "devolver"], tags: ["news", "verbs"] },
    { id: "ultimamente", type: "word", pos: "adv", target: "ultimamente", gloss: { es: "últimamente", en: "lately" }, distractors: ["ultimadamente", "finalmente", "por último"], tags: ["time"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "ele-disse-que-ia", type: "sentence", target: "O ministro disse que ia renunciar ao cargo.",
      gloss: { es: "El ministro dijo que iba a renunciar al cargo.", en: "The minister said he was going to resign." },
      accept: [{ text: "O ministro disse que renunciaria ao cargo." }],
      errors: [{ text: "O ministro disse que vai renunciar ao cargo.", feedback: { es: "En estilo indirecto con «disse», el futuro pasa a ia / renunciaria (aunque en el habla se oye «vai»).", en: "In reported speech after 'disse', the future shifts to ia / renunciaria." }, ruleId: "pt-g-discurso-indireto" }],
      distractors: ["vai", "do", "dizia"],
      tags: ["news", "reported-speech"],
    },
    {
      id: "perguntou-se", type: "sentence", target: "A jornalista perguntou se o governo ia aumentar os impostos.",
      gloss: { es: "La periodista preguntó si el gobierno iba a subir los impuestos.", en: "The journalist asked if the government was going to raise taxes." },
      accept: [{ text: "A jornalista perguntou se o governo aumentaria os impostos." }],
      distractors: ["que", "vai", "taxas"],
      grammar: ["pt-g-discurso-indireto"], tags: ["news", "reported-speech"],
    },
    {
      id: "segundo-a-policia", type: "sentence", target: "Segundo a polícia, ninguém ficou ferido no acidente.",
      gloss: { es: "Según la policía, nadie resultó herido en el accidente.", en: "According to the police, nobody was hurt in the accident." },
      accept: [{ text: "De acordo com a polícia, ninguém ficou ferido no acidente." }],
      distractors: ["Segun", "nenhum", "foi"],
      tags: ["news"],
    },
    {
      id: "tenho-trabalhado", type: "sentence", target: "Ultimamente eu tenho trabalhado demais.",
      gloss: { es: "Últimamente estoy trabajando demasiado.", en: "Lately I've been working too much." },
      accept: [{ text: "Ultimamente tenho trabalhado demais." }, { text: "Ultimamente eu tenho trabalhado muito." }],
      errors: [{ text: "Ultimamente eu trabalhei demais.", feedback: { es: "Para algo repetido hasta ahora: tenho trabalhado.", en: "For something repeated up to now: tenho trabalhado." }, ruleId: "pt-g-perfeito-composto" }],
      distractors: ["trabalhei", "estou", "tenho trabalho"],
      tags: ["news", "present-perfect"],
    },
    {
      id: "greve-dos-motoristas", type: "sentence", target: "Os motoristas de ônibus entraram em greve nesta segunda.",
      gloss: { es: "Los choferes de autobús se declararon en huelga este lunes.", en: "Bus drivers went on strike this Monday." },
      variants: [{ region: "PT", text: "Os motoristas de autocarro entraram em greve nesta segunda." }],
      distractors: ["fizeram", "na", "paro"],
      tags: ["news", "society"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-discurso-indireto", type: "pattern", target: "«Vou sair.» → Ele disse que ia sair.",
      gloss: { es: "el estilo indirecto", en: "reported speech" },
      pattern: {
        rule: {
          es: "Con un verbo en pasado (disse, perguntou), los tiempos retroceden como en español: presente → imperfeito, perfeito → mais-que-perfeito, futuro → condicional o «ia + infinitivo». Las preguntas sí/no van con «se».",
          en: "After a past reporting verb (disse, perguntou), tenses shift back: present → imperfect, past → past perfect, future → conditional or 'ia + infinitive'. Yes/no questions use 'se' (if).",
        },
        table: [["«Estou cansado.»", "Disse que estava cansado."], ["«Comprei um carro.»", "Disse que tinha comprado um carro."], ["«Vou viajar.»", "Disse que ia viajar."], ["«Você vem?»", "Perguntou se eu vinha."]],
      },
      question: {
        prompt: { es: "«Não posso ir.» → Ela disse que…", en: "'Não posso ir.' → Ela disse que…" },
        options: ["não podia ir.", "não pôde ir.", "não poderá ir.", "não pode foi."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-discurso-indireto"], tags: ["grammar", "reported-speech"],
    },
    {
      id: "pat-tenho-feito", type: "pattern", target: "Tenho estudado muito. ≠ He estudiado.",
      gloss: { es: "«tenho feito»: no es el pretérito perfecto español", en: "'tenho feito': repeated action up to now" },
      pattern: {
        rule: {
          es: "ter (presente) + participio NO equivale al «he hecho» español: indica algo repetido o continuo hasta ahora (tenho dormido mal = últimamente duermo mal). Para «he hecho» / «hice», el portugués usa el pretérito perfeito: já fiz.",
          en: "ter (present) + participle means something repeated or ongoing up to now (tenho dormido mal = I've been sleeping badly). A one-off 'I have done' is the simple past: já fiz.",
        },
        table: [["algo repetido", "Tenho visto muitos filmes."], ["uma vez", "Já vi esse filme."], ["até agora", "Tem chovido muito."]],
      },
      question: {
        prompt: { es: "«Ya he comido, gracias.»", en: "'I've already eaten, thanks.'" },
        options: ["Já comi, obrigado.", "Já tenho comido, obrigado.", "Tenho comido já, obrigado.", "Hei comido, obrigado."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-perfeito-composto"], tags: ["grammar", "present-perfect"],
    },
    // ── Listening & reading ──────────────────────────────────
    {
      id: "lis-noticia", type: "listening", target: "Uma forte chuva atingiu a região serrana do Rio na noite de ontem. Segundo a Defesa Civil, duzentas famílias tiveram que deixar suas casas, mas não há feridos.",
      gloss: { es: "Una fuerte lluvia azotó la región serrana de Río anoche. Según Defensa Civil, doscientas familias tuvieron que dejar sus casas, pero no hay heridos.", en: "Heavy rain hit the mountain region of Rio last night. According to Civil Defence, two hundred families had to leave their homes, but nobody was hurt." },
      question: {
        prompt: { es: "¿Qué pasó con las familias?", en: "What happened to the families?" },
        options: [
          { es: "Tuvieron que dejar sus casas", en: "They had to leave their homes" },
          { es: "Resultaron heridas", en: "They were injured" },
          { es: "Se quedaron sin luz", en: "They lost power" },
          { es: "Nada", en: "Nothing" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "news"],
    },
    {
      id: "dlg-noticia", type: "dialogue", target: "Você viu a notícia?",
      gloss: { es: "¿Viste la noticia?", en: "Did you see the news?" },
      turns: [
        { who: "A", target: "Você viu a notícia? Vão fechar a avenida Paulista aos domingos de novo.", gloss: { es: "¿Viste la noticia? Van a cerrar otra vez la avenida Paulista los domingos.", en: "Did you see the news? They're closing Avenida Paulista on Sundays again." } },
        { who: "B", target: "Vi, sim. Disseram que é para as pessoas poderem passear e andar de bicicleta.", gloss: { es: "Sí, la vi. Dijeron que es para que la gente pueda pasear y andar en bicicleta.", en: "Yes, I saw it. They said it's so people can walk and cycle." } },
        { who: "A", target: "Acho ótimo.", gloss: { es: "Me parece genial.", en: "I think it's great." } },
      ],
      question: {
        prompt: { es: "¿Por qué cierran la avenida?", en: "Why are they closing the avenue?" },
        options: [
          { es: "Para que la gente pasee y ande en bicicleta", en: "So people can walk and cycle" },
          { es: "Por obras", en: "For roadworks" },
          { es: "Por una manifestación", en: "For a protest" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "news", "city"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-jornal", type: "bridge", onlyFor: "es", target: "Li no jornal.",
      gloss: { es: "Lo leí en el diario.", en: "I read it in the paper." },
      question: {
        prompt: { es: "«Li no jornal» significa que lo leíste…", en: "'Li no jornal' means you read it…" },
        options: [{ es: "en el diario", en: "in the newspaper" }, { es: "en tu recibo de sueldo", en: "on your payslip" }, { es: "en una revista científica", en: "in a scientific journal" }],
        answer: 0,
      },
      note: { es: "«o jornal» es el diario o el noticiero de TV; el jornal (sueldo de un día) es «a diária»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "news"],
    },
    {
      id: "br-en-novela", type: "bridge", onlyFor: "en", target: "a novela das nove",
      gloss: { es: "la telenovela de las nueve", en: "the nine o'clock soap opera" },
      question: {
        prompt: { es: "«Você assiste à novela?» pregunta si…", en: "'Você assiste à novela?' asks whether you…" },
        options: [{ es: "ves la telenovela", en: "watch the soap opera" }, { es: "lees una novela", en: "read a novel" }, { es: "vas al teatro", en: "go to the theatre" }],
        answer: 0,
      },
      note: { en: "False friend: a novela is a TV soap opera; a novel is 'o romance'." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "culture"],
    },
  ]),
};
