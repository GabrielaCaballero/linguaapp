import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u29",
  lang: "pt",
  index: 29,
  cefr: "C1",
  title: { target: "Literatura", es: "Literatura", en: "Literature" },
  canDo: [
    { es: "Puedo hablar de libros y autores de lengua portuguesa y comentar un fragmento.", en: "I can talk about Portuguese-language books and authors and comment on an extract." },
    { es: "Reconozco el pluscuamperfecto simple literario (fizera, dissera) y el efecto de la posición del adjetivo.", en: "I can recognise the literary one-word past perfect (fizera, dissera) and how adjective position changes meaning." },
  ],
  icon: "📚",
  items: build("pt", 29, "C1", [
    { id: "romance", type: "word", pos: "noun", target: "o romance", gender: "m", plural: "os romances", gloss: { es: "la novela", en: "the novel" }, distractors: ["a novela", "o romanço", "a romança"], note: { es: "«o romance» = la novela (y también un romance amoroso); «a novela» es la telenovela.", en: "'o romance' = a novel (or a love affair); 'a novela' is a TV soap." }, tags: ["literature"] },
    { id: "conto", type: "word", pos: "noun", target: "o conto", gender: "m", plural: "os contos", gloss: { es: "el cuento", en: "the short story" }, distractors: ["a conta", "o cuento", "o canto"], tags: ["literature"] },
    { id: "cronica", type: "word", pos: "noun", target: "a crônica", gender: "f", plural: "as crônicas", gloss: { es: "la crónica (texto breve sobre lo cotidiano)", en: "the crônica (short piece on everyday life)" }, variants: [{ region: "PT", text: "a crónica" }], distractors: ["o crônico", "a crónica de", "a cronologia"], note: { es: "Género muy brasileño: textos cortos, a menudo con humor, publicados en diarios.", en: "A very Brazilian genre: short, often humorous newspaper pieces about daily life." }, tags: ["literature", "culture"] },
    { id: "personagem", type: "word", pos: "noun", target: "a personagem", gender: "f", plural: "as personagens", gloss: { es: "el personaje", en: "the character" }, accept: [{ text: "o personagem" }], distractors: ["a personaja", "o persona", "a personalidade"], note: { es: "En Brasil se dice «o» o «a personagem»; en Portugal es femenino.", en: "Brazil uses both 'o' and 'a personagem'; in Portugal it's feminine." }, tags: ["literature"] },
    { id: "narrador", type: "word", pos: "noun", target: "o narrador", gender: "m", plural: "os narradores", gloss: { es: "el narrador", en: "the narrator" }, distractors: ["o narrante", "a narradora de", "o narratário"], tags: ["literature"] },
    { id: "desfecho", type: "word", pos: "noun", target: "o desfecho", gender: "m", plural: "os desfechos", gloss: { es: "el desenlace", en: "the ending / outcome" }, distractors: ["o desfeito", "a desfecha", "o despacho"], tags: ["literature"] },
    { id: "verso", type: "word", pos: "noun", target: "o verso", gender: "m", plural: "os versos", gloss: { es: "el verso", en: "the line (of a poem)" }, distractors: ["a versa", "o avesso", "o verbo"], tags: ["literature", "poetry"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "dom-casmurro", type: "sentence", target: "Em Dom Casmurro, o narrador nunca prova que Capitu o traiu.",
      gloss: { es: "En Dom Casmurro, el narrador nunca prueba que Capitu lo traicionó.", en: "In Dom Casmurro, the narrator never proves that Capitu betrayed him." },
      distractors: ["lhe", "traía", "provou"],
      note: { es: "Novela de Machado de Assis (1899), el gran clásico brasileño.", en: "Machado de Assis's 1899 novel, the great Brazilian classic." },
      tags: ["literature", "culture"],
    },
    {
      id: "ja-anoitecera", type: "sentence", target: "Quando ela chegou, já anoitecera.",
      gloss: { es: "Cuando llegó, ya había anochecido.", en: "When she arrived, night had already fallen." },
      accept: [{ text: "Quando ela chegou, já tinha anoitecido." }],
      distractors: ["anoitecia", "anoiteceu", "chegara"],
      grammar: ["pt-g-mais-que-perfeito-simples"], tags: ["literature", "past"],
    },
    {
      id: "um-grande-homem", type: "sentence", target: "Ele não era um homem grande, mas era um grande homem.",
      gloss: { es: "No era un hombre grande, pero era un gran hombre.", en: "He wasn't a big man, but he was a great man." },
      distractors: ["grão", "maior", "homens"],
      grammar: ["pt-g-posicao-adjetivo"], tags: ["literature", "adjectives"],
    },
    {
      id: "li-de-uma-vez", type: "sentence", target: "Li o livro de uma sentada só.",
      gloss: { es: "Leí el libro de un tirón.", en: "I read the book in one sitting." },
      accept: [{ text: "Li o livro numa sentada só." }, { text: "Li o livro de uma vez só." }],
      distractors: ["sentado", "vez de", "lia"],
      tags: ["literature", "idiom"],
    },
    { id: "poema", type: "word", pos: "noun", target: "o poema", gender: "m", plural: "os poemas", gloss: { es: "el poema", en: "the poem" }, distractors: ["a poema", "a poesia de", "o poemo"], note: { es: "Masculino aunque termine en -a, como o problema, o sistema.", en: "Masculine despite the -a, like o problema, o sistema." }, tags: ["literature", "poetry"] },
    { id: "machado", type: "sentence", target: "Machado de Assis é considerado o maior escritor brasileiro.", gloss: { es: "Machado de Assis es considerado el mayor escritor brasileño.", en: "Machado de Assis is regarded as Brazil's greatest writer." }, distractors: ["mais grande", "considerada", "brasilero"], tags: ["literature", "culture"] },
    { id: "obra", type: "word", pos: "noun", target: "a obra", gender: "f", plural: "as obras", gloss: { es: "la obra (de un autor) / las obras (construcción)", en: "the work (of an author) / building work" }, distractors: ["o obro", "a obra-prima de", "a ópera"], tags: ["literature"] },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-mais-que-perfeito-simples", type: "pattern", target: "fizera = tinha feito · dissera = tinha dito",
      gloss: { es: "el pluscuamperfecto simple (literario)", en: "the one-word past perfect (literary)" },
      pattern: {
        rule: {
          es: "En la literatura aparece una forma simple del pluscuamperfecto: pretérito «eles» sin -am + -a (fizeram → fizera). Equivale a «tinha feito». Al hablar no se usa, salvo en fórmulas fijas: quem dera!, tomara!, pudera!",
          en: "Literature uses a one-word past perfect: the 'eles' past minus -am + -a (fizeram → fizera = had done). It's not used in speech, except in set phrases: quem dera!, tomara!, pudera!",
        },
        table: [["fazer", "fizera", "tinha feito"], ["dizer", "dissera", "tinha dito"], ["ser / ir", "fora", "tinha sido / ido"], ["estar", "estivera", "tinha estado"]],
      },
      question: {
        prompt: { es: "«Ele já partira quando ela acordou.» = …", en: "'Ele já partira quando ela acordou.' = …" },
        options: ["Ele já tinha partido quando ela acordou.", "Ele partirá quando ela acordar.", "Ele partiria quando ela acordou.", "Ele já parte quando ela acorda."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-mais-que-perfeito-simples"], tags: ["grammar", "literature", "past"],
    },
    {
      id: "pat-posicao-adjetivo", type: "pattern", target: "um homem pobre ≠ um pobre homem",
      gloss: { es: "la posición del adjetivo", en: "adjective position" },
      pattern: {
        rule: {
          es: "Como en español, el adjetivo detrás del sustantivo describe objetivamente; delante, suele tener sentido figurado o expresivo: um homem pobre (sin dinero) / um pobre homem (un desdichado); um amigo velho (anciano) / um velho amigo (de hace mucho).",
          en: "After the noun an adjective describes objectively; before it, it's often figurative or emotive: um homem pobre (with no money) / um pobre homem (poor wretch); um amigo velho (elderly) / um velho amigo (long-standing).",
        },
        table: [["homem pobre", "pobre homem"], ["amigo velho", "velho amigo"], ["notícia certa", "certa notícia"], ["mulher grande", "grande mulher"]],
      },
      question: {
        prompt: { es: "«Somos amigos desde hace 30 años» →", en: "'We've been friends for 30 years' →" },
        options: ["Somos velhos amigos.", "Somos amigos velhos.", "Somos amigos anciãos.", "Somos velhas amizades de."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-posicao-adjetivo"], tags: ["grammar", "adjectives"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-clarice", type: "listening", target: "Clarice Lispector nasceu na Ucrânia, mas chegou ao Brasil ainda bebê. Seus livros, como «A Hora da Estrela», exploram o mundo interior das personagens mais do que a ação.",
      gloss: { es: "Clarice Lispector nació en Ucrania, pero llegó a Brasil siendo bebé. Sus libros, como «La hora de la estrella», exploran el mundo interior de los personajes más que la acción.", en: "Clarice Lispector was born in Ukraine but came to Brazil as a baby. Her books, such as 'The Hour of the Star', explore the characters' inner world more than the action." },
      question: {
        prompt: { es: "¿Qué caracteriza sus libros?", en: "What characterises her books?" },
        options: [
          { es: "El mundo interior de los personajes", en: "The characters' inner world" },
          { es: "La acción y la aventura", en: "Action and adventure" },
          { es: "El humor", en: "Humour" },
          { es: "La historia de Ucrania", en: "Ukrainian history" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "literature", "culture"],
    },
    {
      id: "dlg-livro", type: "dialogue", target: "Não consegui largar.",
      gloss: { es: "No pude dejarlo.", en: "I couldn't put it down." },
      turns: [
        { who: "A", target: "Terminou «Grande Sertão: Veredas»?", gloss: { es: "¿Terminaste «Gran Sertón: Veredas»?", en: "Did you finish 'The Devil to Pay in the Backlands'?" } },
        { who: "B", target: "Terminei! No começo foi difícil, a linguagem é muito inventiva. Depois não consegui largar.", gloss: { es: "¡Sí! Al principio fue difícil, el lenguaje es muy inventivo. Después no pude dejarlo.", en: "I did! It was hard at first, the language is very inventive. Then I couldn't put it down." } },
      ],
      question: {
        prompt: { es: "¿Qué le costó a B al principio?", en: "What did B find hard at first?" },
        options: [
          { es: "El lenguaje del libro", en: "The book's language" },
          { es: "La trama", en: "The plot" },
          { es: "Encontrar el libro", en: "Finding the book" },
        ],
        answer: 0,
      },
      note: { es: "La novela de Guimarães Rosa (1956) es famosa por sus palabras inventadas.", en: "Guimarães Rosa's 1956 novel is famous for its invented words." },
      exercises: ["question"], tags: ["dialogue", "literature"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-romance", type: "bridge", onlyFor: "es", target: "um romance policial",
      gloss: { es: "una novela policial", en: "a detective novel" },
      distractors: ["uma novela policial", "um romanço policial", "uma romança policial"],
      note: { es: "«romance» = novela (libro); «novela» = telenovela; «conto» = cuento." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend", "literature"],
    },
    {
      id: "br-en-romance", type: "bridge", onlyFor: "en", target: "Ela escreveu três romances.",
      gloss: { es: "Escribió tres novelas.", en: "She wrote three novels." },
      distractors: ["Ela escreveu três novelas.", "Ela escreveu três novéis.", "Ela escreveu três româncias."],
      note: { en: "False friend: um romance is a novel (or a love affair); a novela is a TV soap." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend", "literature"],
    },
  ]),
};
