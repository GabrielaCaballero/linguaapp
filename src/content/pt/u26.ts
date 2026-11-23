import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u26",
  lang: "pt",
  index: 26,
  cefr: "C1",
  title: { target: "Ciência e tecnologia", es: "Ciencia y tecnología", en: "Science and technology" },
  canDo: [
    { es: "Puedo entender y resumir textos de divulgación científica y hablar de tecnología.", en: "I can understand and summarise popular-science texts and talk about technology." },
    { es: "Sé matizar afirmaciones (ao que tudo indica, estima-se que) y usar participios dobles (aceitado / aceito).", en: "I can hedge claims (ao que tudo indica, estima-se que) and use double participles (aceitado / aceito)." },
  ],
  icon: "🔬",
  items: build("pt", 26, "C1", [
    { id: "pesquisa", type: "word", pos: "noun", target: "a pesquisa", gender: "f", plural: "as pesquisas", gloss: { es: "la investigación / la encuesta", en: "the research / survey" }, distractors: ["a pesquiza", "o pesquisa", "a pescaria"], note: { es: "pesquisa = investigación científica, encuesta o búsqueda en internet.", en: "pesquisa = research, an opinion poll, or an online search." }, tags: ["science"] },
    { id: "pesquisador", type: "word", pos: "noun", target: "o pesquisador", gender: "m", plural: "os pesquisadores", gloss: { es: "el investigador", en: "the researcher" }, accept: [{ text: "a pesquisadora" }], variants: [{ region: "PT", text: "o investigador" }], distractors: ["o pesquisante", "o investigadorista", "o pescador"], tags: ["science", "people"] },
    { id: "dados", type: "word", pos: "noun", target: "os dados", gender: "m", plural: "os dados", gloss: { es: "los datos", en: "the data" }, distractors: ["as datas", "os dadores", "o dado de"], note: { es: "«a data» es la fecha.", en: "'a data' means a date." }, tags: ["science", "technology"] },
    { id: "amostra", type: "word", pos: "noun", target: "a amostra", gender: "f", plural: "as amostras", gloss: { es: "la muestra", en: "the sample" }, distractors: ["a mostra", "o amostro", "a montra"], tags: ["science"] },
    { id: "comprovar", type: "word", pos: "verb", target: "comprovar", gloss: { es: "comprobar, demostrar", en: "to prove / confirm" }, forms: { "part.": "comprovado" }, distractors: ["comprar", "provar-se de", "comprometer"], tags: ["science", "verbs"] },
    { id: "celular", type: "word", pos: "noun", target: "o celular", gender: "m", plural: "os celulares", gloss: { es: "el celular, el móvil", en: "the mobile phone" }, variants: [{ region: "PT", text: "o telemóvel", note: { es: "En Portugal: o telemóvel.", en: "In Portugal: o telemóvel." } }], distractors: ["a celular", "o celulário", "o móvel"], tags: ["technology"] },
    { id: "aplicativo", type: "word", pos: "noun", target: "o aplicativo", gender: "m", plural: "os aplicativos", gloss: { es: "la aplicación (app)", en: "the app" }, variants: [{ region: "PT", text: "a aplicação" }], distractors: ["a aplicativa", "o aplicador", "a aplicação de"], tags: ["technology"] },
    { id: "baixar", type: "word", pos: "verb", target: "baixar", gloss: { es: "descargar (un archivo)", en: "to download" }, variants: [{ region: "PT", text: "descarregar" }], distractors: ["abaixar-se", "subir", "descer"], note: { es: "Lo contrario: subir un archivo = fazer upload / subir.", en: "The opposite: to upload = fazer upload / subir." }, tags: ["technology", "verbs"] },
    { id: "ao-que-tudo-indica", type: "phrase", pos: "phrase", target: "ao que tudo indica", gloss: { es: "todo parece indicar que", en: "by all indications" }, accept: [{ text: "tudo indica que" }], distractors: ["ao que tudo indique", "o que tudo indica", "a que tudo indica"], grammar: ["pt-g-atenuacao"], tags: ["science", "hedging"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "estima-se-que", type: "sentence", target: "Estima-se que um terço dos alimentos seja desperdiçado.",
      gloss: { es: "Se estima que un tercio de los alimentos se desperdicia.", en: "An estimated third of all food is wasted." },
      accept: [{ text: "Estima-se que um terço dos alimentos é desperdiçado." }],
      distractors: ["Estimam", "terceiro", "desperdício"],
      grammar: ["pt-g-atenuacao"], tags: ["science", "hedging"],
    },
    {
      id: "os-resultados-sugerem", type: "sentence", target: "Os resultados sugerem que o medicamento é eficaz, mas isso ainda não foi comprovado.",
      gloss: { es: "Los resultados sugieren que el medicamento es eficaz, pero aún no se ha comprobado.", en: "The results suggest the drug is effective, but it hasn't been proven yet." },
      accept: [{ text: "Os resultados sugerem que o medicamento é eficaz, mas ainda não foi comprovado." }],
      distractors: ["sugere", "comprobado", "eficiente"],
      tags: ["science", "hedging"],
    },
    {
      id: "o-artigo-foi-aceito", type: "sentence", target: "O artigo foi aceito por uma revista internacional.",
      gloss: { es: "El artículo fue aceptado por una revista internacional.", en: "The paper was accepted by an international journal." },
      variants: [{ region: "PT", text: "O artigo foi aceite por uma revista internacional.", note: { es: "En Portugal el participio corto es «aceite».", en: "In Portugal the short participle is 'aceite'." } }],
      errors: [{ text: "O artigo foi aceitado por uma revista internacional.", feedback: { es: "Con ser / estar se usa el participio corto: foi aceito.", en: "With ser / estar use the short participle: foi aceito." }, ruleId: "pt-g-participio-duplo" }],
      distractors: ["aceitado", "pela", "jornal"],
      tags: ["science", "passive"],
    },
    {
      id: "baixei-o-aplicativo", type: "sentence", target: "Baixei o aplicativo, mas ele não abre no meu celular.",
      gloss: { es: "Descargué la aplicación, pero no abre en mi celular.", en: "I downloaded the app, but it won't open on my phone." },
      variants: [{ region: "PT", text: "Descarreguei a aplicação, mas não abre no meu telemóvel." }],
      distractors: ["Desci", "abra", "móvel"],
      tags: ["technology"],
    },
    {
      id: "inteligencia-artificial", type: "sentence", target: "A inteligência artificial tem transformado a forma como trabalhamos.",
      gloss: { es: "La inteligencia artificial está transformando la forma en que trabajamos.", en: "Artificial intelligence has been transforming the way we work." },
      distractors: ["transformou", "que", "jeito de"],
      grammar: ["pt-g-perfeito-composto"], tags: ["technology"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-atenuacao", type: "pattern", target: "ao que tudo indica · tudo leva a crer que · é provável que",
      gloss: { es: "matizar afirmaciones", en: "hedging claims" },
      pattern: {
        rule: {
          es: "Para no afirmar de más: verbos impersonales con «se» (estima-se, acredita-se), expresiones como ao que tudo indica / tudo leva a crer que + indicativo, y é provável / possível que + subjuntivo. El futuro del pretérito también atenúa: o suspeito teria fugido (habría huido, según dicen).",
          en: "To avoid overclaiming: impersonal 'se' verbs (estima-se, acredita-se), phrases like ao que tudo indica / tudo leva a crer que + indicative, and é provável / possível que + subjunctive. The conditional also hedges: o suspeito teria fugido (reportedly fled).",
        },
        table: [["impessoal", "Acredita-se que…"], ["indício", "Tudo leva a crer que…"], ["probabilidade", "É provável que seja…"], ["notícia", "O suspeito teria fugido."]],
      },
      question: {
        prompt: { es: "En una noticia, «según fuentes, el ministro renunció» (no confirmado):", en: "In the news, 'the minister has reportedly resigned' (unconfirmed):" },
        options: ["O ministro teria renunciado.", "O ministro renunciou.", "O ministro renunciaria amanhã.", "O ministro tem renunciado."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-atenuacao"], tags: ["grammar", "hedging"],
    },
    {
      id: "pat-participio-duplo", type: "pattern", target: "tinha aceitado · foi aceito",
      gloss: { es: "participios dobles", en: "double participles" },
      pattern: {
        rule: {
          es: "Algunos verbos tienen dos participios: el regular con ter / haver (tinha aceitado, tinha entregado) y el corto con ser / estar (foi aceito, está entregue). Con ganhar, gastar y pagar, el corto es muy frecuente también con ter (tinha pago, tinha ganho).",
          en: "Some verbs have two participles: the regular one with ter / haver (tinha aceitado, tinha entregado) and the short one with ser / estar (foi aceito, está entregue). With ganhar, gastar and pagar the short form is very common with ter too (tinha pago, tinha ganho).",
        },
        table: [["aceitar", "tinha aceitado", "foi aceito"], ["entregar", "tinha entregado", "foi entregue"], ["imprimir", "tinha imprimido", "foi impresso"], ["pagar", "tinha pago", "foi pago"]],
      },
      question: {
        prompt: { es: "Completa: «A encomenda já foi ___.» (entregar)", en: "Complete: 'A encomenda já foi ___.' (entregar)" },
        options: ["entregue", "entregada", "entregado", "entrega"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-participio-duplo"], tags: ["grammar", "participles"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-ciencia", type: "listening", target: "Pesquisadores brasileiros identificaram uma nova espécie de sapo na Mata Atlântica. Segundo o estudo, publicado nesta semana, o animal mede menos de um centímetro.",
      gloss: { es: "Investigadores brasileños identificaron una nueva especie de rana en la Mata Atlántica. Según el estudio, publicado esta semana, el animal mide menos de un centímetro.", en: "Brazilian researchers have identified a new frog species in the Atlantic Forest. According to the study, published this week, the animal is less than a centimetre long." },
      question: {
        prompt: { es: "¿Qué tiene de especial el animal?", en: "What's special about the animal?" },
        options: [
          { es: "Mide menos de un centímetro", en: "It's under a centimetre long" },
          { es: "Es venenoso", en: "It's poisonous" },
          { es: "Vive en el Amazonas", en: "It lives in the Amazon" },
          { es: "Estaba extinguido", en: "It was thought extinct" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "science"],
    },
    {
      id: "dlg-ia", type: "dialogue", target: "Depende de como a gente usa.",
      gloss: { es: "Depende de cómo la usemos.", en: "It depends on how we use it." },
      turns: [
        { who: "A", target: "Você acha que a inteligência artificial vai acabar com muitos empregos?", gloss: { es: "¿Crees que la inteligencia artificial va a terminar con muchos empleos?", en: "Do you think AI is going to wipe out a lot of jobs?" } },
        { who: "B", target: "Alguns, sim. Mas tudo leva a crer que vai criar outros. Depende de como a gente usa.", gloss: { es: "Algunos, sí. Pero todo indica que va a crear otros. Depende de cómo la usemos.", en: "Some, yes. But everything suggests it'll create others. It depends on how we use it." } },
      ],
      question: {
        prompt: { es: "¿Qué opina B?", en: "What's B's view?" },
        options: [
          { es: "Que eliminará algunos empleos y creará otros", en: "It'll remove some jobs and create others" },
          { es: "Que no cambiará nada", en: "Nothing will change" },
          { es: "Que acabará con todos los empleos", en: "It'll destroy all jobs" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "technology", "opinion"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-data", type: "bridge", onlyFor: "es", target: "a data de entrega",
      gloss: { es: "la fecha de entrega", en: "the delivery date" },
      distractors: ["o dado de entrega", "a fecha de entrega", "os dados de entrega"],
      note: { es: "Ojo: «a data» = la fecha; los datos son «os dados»." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-en-pesquisa", type: "bridge", onlyFor: "en", target: "uma pesquisa de opinião",
      gloss: { es: "una encuesta de opinión", en: "an opinion poll" },
      distractors: ["uma busca de opinião", "uma procura de opinião", "uma pesquisadora de opinião"],
      note: { en: "pesquisa covers research, surveys and online searches; context decides." },
      exercises: ["guess", "recall"], tags: ["bridge", "science"],
    },
  ]),
};
