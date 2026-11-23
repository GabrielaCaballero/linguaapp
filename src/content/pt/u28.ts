import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u28",
  lang: "pt",
  index: 28,
  cefr: "C1",
  title: { target: "Argumentação escrita", es: "Argumentar por escrito", en: "Written argument" },
  canDo: [
    { es: "Puedo escribir un texto argumentativo (como la redacción del ENEM): tesis, argumentos y conclusión.", en: "I can write an argumentative essay (like Brazil's ENEM essay): thesis, arguments and conclusion." },
    { es: "Sé usar conectores formales (não obstante, por conseguinte, haja vista) y la referencia este / aquele.", en: "I can use formal connectors (não obstante, por conseguinte, haja vista) and este / aquele reference." },
  ],
  icon: "📝",
  items: build("pt", 28, "C1", [
    { id: "tese", type: "word", pos: "noun", target: "a tese", gender: "f", plural: "as teses", gloss: { es: "la tesis", en: "the thesis / main claim" }, distractors: ["o tese", "a tesis", "a tesa"], tags: ["writing"] },
    { id: "paragrafo", type: "word", pos: "noun", target: "o parágrafo", gender: "m", plural: "os parágrafos", gloss: { es: "el párrafo", en: "the paragraph" }, distractors: ["a parágrafa", "o párrafo", "o paragrafo de"], tags: ["writing"] },
    { id: "redacao", type: "word", pos: "noun", target: "a redação", gender: "f", plural: "as redações", gloss: { es: "la redacción, el ensayo escolar", en: "the essay (school / exam)" }, note: { es: "Desde la reforma de 2009 también en Portugal se escribe «redação» (antes «redacção»).", en: "Since the 2009 reform Portugal also writes 'redação' (formerly 'redacção')." }, distractors: ["a redacção de", "o redação", "a reação"], tags: ["writing", "education"] },
    { id: "nao-obstante", type: "phrase", pos: "phrase", target: "não obstante", gloss: { es: "no obstante, sin embargo", en: "nevertheless" }, distractors: ["não obstantemente", "nem obstante", "não obstanto"], tags: ["writing", "connectors"] },
    { id: "por-conseguinte", type: "phrase", pos: "phrase", target: "por conseguinte", gloss: { es: "por consiguiente", en: "consequently" }, accept: [{ text: "consequentemente" }], distractors: ["por consiguinte", "pelo conseguinte", "por conseguido"], tags: ["writing", "connectors"] },
    { id: "haja-vista", type: "phrase", pos: "phrase", target: "haja vista", gloss: { es: "dado que, habida cuenta de", en: "given / in view of" }, distractors: ["haja visto", "hajam vista", "a ja vista"], note: { es: "Haja vista o alto custo… = habida cuenta del alto costo…", en: "Haja vista o alto custo… = given the high cost…" }, tags: ["writing", "connectors"] },
    { id: "diante-do-exposto", type: "phrase", pos: "phrase", target: "Diante do exposto,", gloss: { es: "Por todo lo expuesto,", en: "In light of the above," }, accept: [{ text: "Diante disso," }, { text: "Em vista do exposto," }], distractors: ["Diante de exposto,", "Adiante do exposto,", "Diante o exposto,"], tags: ["writing", "connectors"] },
    { id: "em-suma", type: "phrase", pos: "phrase", target: "em suma", gloss: { es: "en resumen", en: "in short" }, accept: [{ text: "em síntese" }, { text: "resumindo" }], distractors: ["em soma", "na suma", "a suma"], tags: ["writing", "connectors"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "a-medida-que", type: "sentence", target: "À medida que a cidade cresce, aumentam os problemas de mobilidade.",
      gloss: { es: "A medida que la ciudad crece, aumentan los problemas de movilidad.", en: "As the city grows, mobility problems increase." },
      errors: [{ text: "Na medida que a cidade cresce, aumentam os problemas de mobilidade.", feedback: { es: "«à medida que» = a medida que (proporción); «na medida em que» = en tanto que (causa).", en: "'à medida que' = as (proportion); 'na medida em que' = insofar as (cause)." }, ruleId: "pt-g-a-medida-que" }],
      distractors: ["Na", "aumenta", "em que"],
      tags: ["writing", "connectors"],
    },
    {
      id: "este-aquele", type: "sentence", target: "Saúde e educação são prioridades; esta forma cidadãos, aquela preserva vidas.",
      gloss: { es: "La salud y la educación son prioridades; esta forma ciudadanos, aquella preserva vidas.", en: "Health and education are priorities; the latter shapes citizens, the former saves lives." },
      distractors: ["essa", "aquilo", "este"],
      grammar: ["pt-g-este-aquele"], tags: ["writing", "reference"],
    },
    {
      id: "cabe-ao-estado", type: "sentence", target: "Cabe ao Estado garantir o acesso universal à internet.",
      gloss: { es: "Le corresponde al Estado garantizar el acceso universal a internet.", en: "It's up to the State to guarantee universal internet access." },
      errors: [{ text: "Cabe o Estado garantir o acesso universal à internet.", feedback: { es: "caber a alguien: cabe ao Estado.", en: "caber takes 'a': cabe ao Estado." }, ruleId: "pt-g-regencia-formal" }],
      distractors: ["Cabem", "a", "na"],
      tags: ["writing", "society"],
    },
    {
      id: "em-relacao-a", type: "sentence", target: "Em relação ao meio ambiente, as medidas ainda são insuficientes.",
      gloss: { es: "En cuanto al medio ambiente, las medidas todavía son insuficientes.", en: "As regards the environment, the measures are still inadequate." },
      accept: [{ text: "Com relação ao meio ambiente, as medidas ainda são insuficientes." }, { text: "A nível de meio ambiente, as medidas ainda são insuficientes.", verdict: "almost", feedback: { es: "Se entiende y se oye mucho, pero «a nível de» con este sentido es una muletilla mal vista en textos cuidados; usa «em relação a» o «no que diz respeito a».", en: "Understandable and common, but 'a nível de' used this way is a frowned-upon filler in careful writing; use 'em relação a' or 'no que diz respeito a'." } }],
      distractors: ["A nível do", "da", "insuficiente"],
      tags: ["writing"],
    },
    { id: "conclusao", type: "word", pos: "noun", target: "a conclusão", gender: "f", plural: "as conclusões", gloss: { es: "la conclusión", en: "the conclusion" }, distractors: ["o conclusão", "a concluição", "a concussão"], tags: ["writing"] },
    { id: "nesse-sentido", type: "phrase", pos: "phrase", target: "nesse sentido", gloss: { es: "en ese sentido", en: "in that respect" }, distractors: ["em esse sentido", "neste sentido de", "nesse senso"], tags: ["writing", "connectors"] },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-este-aquele", type: "pattern", target: "esta (la última nombrada) · aquela (la primera)",
      gloss: { es: "referencia en el texto: este / esse / aquele", en: "text reference: este / esse / aquele" },
      pattern: {
        rule: {
          es: "En un texto formal, cuando se retoman dos elementos, «este» se refiere al más cercano (el último) y «aquele» al más lejano (el primero). «este» anuncia lo que viene; «esse» retoma lo ya dicho.",
          en: "In formal writing, with two items, 'este' refers to the nearer one (the latter) and 'aquele' to the further one (the former). 'este' points forward to what comes next; 'esse' refers back to what was said.",
        },
        table: [["este", "o último citado / o que vem"], ["aquele", "o primeiro citado"], ["esse", "o que já foi dito"]],
      },
      question: {
        prompt: { es: "«Visitei Recife e Natal; ___ tem dunas lindas.» (Natal, el último)", en: "'Visitei Recife e Natal; ___ tem dunas lindas.' (Natal, the latter)" },
        options: ["esta", "aquela", "essa", "aquilo"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-este-aquele"], tags: ["grammar", "writing", "reference"],
    },
    {
      id: "pat-a-medida-que", type: "pattern", target: "à medida que · na medida em que · em relação a",
      gloss: { es: "conectores que se confunden", en: "easily confused connectors" },
      pattern: {
        rule: {
          es: "«à medida que» = a medida que, conforme (proporción). «na medida em que» = en la medida en que, ya que (causa). Evita los cruces «à medida em que» y «na medida que», y la muletilla «a nível de» (usa em relação a).",
          en: "'à medida que' = as (proportion). 'na medida em que' = insofar as, since (cause). Avoid the hybrids 'à medida em que' and 'na medida que', and the filler 'a nível de' (use em relação a).",
        },
        table: [["proporção", "À medida que estudo, aprendo."], ["causa", "Na medida em que todos pagam, é justo."], ["tema", "Em relação aos custos, …"], ["evitar", "à medida em que / a nível de"]],
      },
      question: {
        prompt: { es: "Completa: «A proposta é justa, ___ beneficia todos.» (ya que)", en: "Complete: 'A proposta é justa, ___ beneficia todos.' (since)" },
        options: ["na medida em que", "à medida que", "na medida que", "à medida em que"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-a-medida-que"], tags: ["grammar", "writing", "connectors"],
    },
    // ── Reading & dialogue ───────────────────────────────────
    {
      id: "lis-redacao", type: "listening", target: "Diante do exposto, é necessário que o Ministério da Educação, em parceria com as escolas, promova campanhas de conscientização, a fim de reduzir a evasão escolar.",
      gloss: { es: "Por todo lo expuesto, es necesario que el Ministerio de Educación, junto con las escuelas, promueva campañas de concientización a fin de reducir la deserción escolar.", en: "In light of the above, the Ministry of Education, together with schools, must run awareness campaigns in order to reduce school dropout." },
      question: {
        prompt: { es: "¿Qué parte de la redacción es esta?", en: "Which part of the essay is this?" },
        options: [
          { es: "La conclusión con una propuesta de intervención", en: "The conclusion with a proposed solution" },
          { es: "La introducción", en: "The introduction" },
          { es: "Un ejemplo personal", en: "A personal example" },
          { es: "El título", en: "The title" },
        ],
        answer: 0,
      },
      note: { es: "La redacción del ENEM termina siempre con una «proposta de intervenção»: quién, qué, cómo y para qué.", en: "The ENEM essay always ends with a 'proposta de intervenção': who, what, how and why." },
      exercises: ["question", "listen"], tags: ["listening", "writing", "education"],
    },
    {
      id: "dlg-redacao", type: "dialogue", target: "Tá muito coloquial.",
      gloss: { es: "Está muy coloquial.", en: "It's too colloquial." },
      turns: [
        { who: "A", target: "Professora, o que a senhora achou da minha redação?", gloss: { es: "Profesora, ¿qué le pareció mi redacción?", en: "Miss, what did you think of my essay?" } },
        { who: "B", target: "Os argumentos são bons, mas tá muito coloquial. Troca «a gente» por «nós» e evita «tipo».", gloss: { es: "Los argumentos son buenos, pero está muy coloquial. Cambia «a gente» por «nós» y evita «tipo».", en: "The arguments are good, but it's too colloquial. Change 'a gente' to 'nós' and avoid 'tipo'." } },
      ],
      question: {
        prompt: { es: "¿Qué tiene que mejorar A?", en: "What does A need to improve?" },
        options: [
          { es: "El registro: es demasiado coloquial", en: "Register: it's too colloquial" },
          { es: "Los argumentos", en: "The arguments" },
          { es: "La ortografía", en: "Spelling" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "writing", "register"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-todavia", type: "bridge", onlyFor: "es", target: "todavia",
      gloss: { es: "sin embargo", en: "however" },
      question: {
        prompt: { es: "«O plano é bom; todavia, é caro.» Significa…", en: "'O plano é bom; todavia, é caro.' means…" },
        options: [{ es: "El plan es bueno; sin embargo, es caro.", en: "The plan is good; however, it's expensive." }, { es: "El plan es bueno; todavía es caro.", en: "The plan is good; it's still expensive." }, { es: "El plan es bueno y además barato.", en: "The plan is good and cheap too." }],
        answer: 0,
      },
      note: { es: "Falso amigo: «todavia» = sin embargo; «todavía» se dice «ainda»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "connectors"],
    },
    {
      id: "br-en-latter", type: "bridge", onlyFor: "en", target: "este último",
      gloss: { es: "este último", en: "the latter" },
      distractors: ["o mais tarde", "o último de", "aquele primeiro"],
      note: { en: "'The latter' is 'este (último)', 'the former' is 'aquele' or 'o primeiro'." },
      exercises: ["guess", "recall"], tags: ["bridge", "writing"],
    },
  ]),
};
