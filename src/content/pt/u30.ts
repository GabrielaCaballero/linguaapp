import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u30",
  lang: "pt",
  index: 30,
  cefr: "C1",
  title: { target: "Brasil e Portugal", es: "Brasil y Portugal", en: "Brazil and Portugal" },
  canDo: [
    { es: "Entiendo a hablantes de Portugal y conozco las principales diferencias de vocabulario, gramática y pronunciación.", en: "I can understand speakers from Portugal and know the main differences in vocabulary, grammar and pronunciation." },
    { es: "Reconozco el «tu» europeo (tu falas, tu foste) y el «estar a + infinitivo».", en: "I can recognise European 'tu' (tu falas, tu foste) and 'estar a + infinitive'." },
  ],
  icon: "🌍",
  items: build("pt", 30, "C1", [
    { id: "banheiro", type: "word", pos: "noun", target: "o banheiro", gender: "m", plural: "os banheiros", gloss: { es: "el baño", en: "the bathroom / toilet" }, variants: [{ region: "PT", text: "a casa de banho", note: { es: "En Portugal: a casa de banho.", en: "In Portugal: a casa de banho." } }], distractors: ["o banho", "a banheira", "o baño"], tags: ["home", "pt-br"] },
    { id: "geladeira", type: "word", pos: "noun", target: "a geladeira", gender: "f", plural: "as geladeiras", gloss: { es: "el refrigerador, la heladera", en: "the fridge" }, variants: [{ region: "PT", text: "o frigorífico", note: { es: "En Portugal: o frigorífico.", en: "In Portugal: o frigorífico." } }], distractors: ["a geleira", "o gelado", "o refrigerante"], tags: ["home", "pt-br"] },
    { id: "terno", type: "word", pos: "noun", target: "o terno", gender: "m", plural: "os ternos", gloss: { es: "el traje (de hombre)", en: "the suit" }, variants: [{ region: "PT", text: "o fato", note: { es: "En Portugal el traje es «o fato» (en Brasil, «fato» es un hecho).", en: "In Portugal a suit is 'o fato' (in Brazil 'fato' means a fact)." } }], distractors: ["o traje de", "o terço", "a terna"], tags: ["clothes", "pt-br"] },
    { id: "fila", type: "word", pos: "noun", target: "a fila", gender: "f", plural: "as filas", gloss: { es: "la fila, la cola", en: "the queue / line" }, distractors: ["a cola", "o filo", "a fileira de"], note: { es: "En Portugal también se oye «a bicha», pero en Brasil esa palabra es un insulto: usa siempre «fila».", en: "In Portugal you may hear 'a bicha', but in Brazil that word is an insult: always say 'fila'." }, tags: ["pt-br", "everyday"] },
    { id: "ponto-de-onibus", type: "word", pos: "noun", target: "o ponto de ônibus", gender: "m", plural: "os pontos de ônibus", gloss: { es: "la parada de autobús", en: "the bus stop" }, variants: [{ region: "PT", text: "a paragem de autocarro", note: { es: "En Portugal: a paragem (de autocarro).", en: "In Portugal: a paragem (de autocarro)." } }], distractors: ["a parada de ônibus", "o ponto do ônibus de", "a estação de ônibus"], tags: ["transport", "pt-br"] },
    { id: "acougue", type: "word", pos: "noun", target: "o açougue", gender: "m", plural: "os açougues", gloss: { es: "la carnicería", en: "the butcher's" }, variants: [{ region: "PT", text: "o talho" }], distractors: ["a açougue", "o açúcar", "a carniçaria"], tags: ["shops", "pt-br"] },
    { id: "moca", type: "word", pos: "noun", target: "a moça", gender: "f", plural: "as moças", gloss: { es: "la muchacha, la chica", en: "the girl / young woman" }, accept: [{ text: "a menina" }, { text: "a garota" }], variants: [{ region: "PT", text: "a rapariga", note: { es: "En Portugal «rapariga» es simplemente «chica»; en Brasil es ofensivo: allí di «moça».", en: "In Portugal 'rapariga' just means girl; in Brazil it's offensive: say 'moça' there." } }], distractors: ["a moço", "a mossa", "a rapariga de"], tags: ["people", "pt-br"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "tu-falas", type: "sentence", target: "Tu falas muito depressa!", register: "informal",
      gloss: { es: "¡Hablas muy rápido! (tú, como en Portugal)", en: "You speak very fast! (European 'tu')" },
      accept: [{ text: "Você fala muito depressa!" }, { text: "Você fala muito rápido!" }],
      distractors: ["fala", "falaste", "rápida"],
      note: { es: "En Portugal «tu» lleva la terminación propia en -s: tu falas, tu és, tu tens.", en: "In Portugal 'tu' has its own -s ending: tu falas, tu és, tu tens." },
      grammar: ["pt-g-tu-europeu"], tags: ["pt-br", "grammar"],
    },
    {
      id: "estou-a-ver", type: "sentence", target: "Estou vendo que você não gostou.",
      gloss: { es: "Veo que no te gustó.", en: "I can see you didn't like it." },
      variants: [{ region: "PT", text: "Estou a ver que não gostaste.", note: { es: "En Portugal: estar a + infinitivo, y «tu» con su forma propia (gostaste).", en: "In Portugal: estar a + infinitive, and 'tu' with its own form (gostaste)." } }],
      distractors: ["a ver", "gostaste", "vejo-te"],
      tags: ["pt-br"],
    },
    {
      id: "pequeno-almoco", type: "sentence", target: "A gente toma café da manhã às oito.",
      gloss: { es: "Desayunamos a las ocho.", en: "We have breakfast at eight." },
      accept: [{ text: "Nós tomamos café da manhã às oito." }],
      variants: [{ region: "PT", text: "Tomamos o pequeno-almoço às oito." }],
      distractors: ["almoçamos", "o", "pequeno"],
      tags: ["pt-br", "meals"],
    },
    {
      id: "fato-facto", type: "sentence", target: "O fato é que ninguém sabia de nada.",
      gloss: { es: "El hecho es que nadie sabía nada.", en: "The fact is nobody knew anything." },
      variants: [{ region: "PT", text: "O facto é que ninguém sabia de nada.", note: { es: "En Portugal se mantiene la c pronunciada: facto, contacto.", en: "Portugal keeps the pronounced c: facto, contacto." } }],
      distractors: ["feito", "sabe", "ninguna"],
      tags: ["pt-br", "spelling"],
    },
    { id: "camisola", type: "sentence", target: "Em Portugal, «camisola» é um suéter.", gloss: { es: "En Portugal, «camisola» es un suéter.", en: "In Portugal, 'camisola' is a jumper." }, distractors: ["camisa", "Brasil", "pijama"], note: { es: "En Brasil «camisola» es el camisón de dormir.", en: "In Brazil 'camisola' is a nightdress." }, tags: ["pt-br", "clothes"] },
    { id: "pegar", type: "word", pos: "verb", target: "pegar", gloss: { es: "tomar, agarrar (un bus, un objeto)", en: "to take / catch (a bus, an object)" }, variants: [{ region: "PT", text: "apanhar", note: { es: "En Portugal: apanhar o autocarro.", en: "In Portugal: apanhar o autocarro." } }], distractors: ["pagar", "pregar", "chegar"], tags: ["pt-br", "verbs"] },
    { id: "economico", type: "word", pos: "adj", target: "econômico", gloss: { es: "económico", en: "economic / economical" }, accept: [{ text: "econômica" }], variants: [{ region: "PT", text: "económico", note: { es: "En Portugal, tilde aguda: económico, académico, António.", en: "In Portugal, acute accent: económico, académico, António." } }], distractors: ["economico de", "econômigo", "ecônomo"], tags: ["pt-br", "spelling"] },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-tu", type: "paradigm", target: "tu — formas europeias", spoken: "tu",
      gloss: { es: "formas de «tu» (Portugal)", en: "'tu' forms (Portugal)" },
      grammar: ["pt-g-tu-europeu"],
      paradigm: {
        caption: { es: "Escribe la forma de «tu»", en: "Write the 'tu' form" },
        cells: [
          { label: "falar (pres.)", answer: "falas", ruleId: "pt-g-tu-europeu" },
          { label: "ser (pres.)", answer: "és", ruleId: "pt-g-tu-europeu" },
          { label: "ter (pres.)", answer: "tens", ruleId: "pt-g-tu-europeu" },
          { label: "falar (pret.)", answer: "falaste", ruleId: "pt-g-tu-europeu" },
          { label: "ir (pret.)", answer: "foste", ruleId: "pt-g-tu-europeu" },
        ],
      },
      tags: ["grammar", "pt-br", "table"],
    },
    {
      id: "pat-pe-pb", type: "pattern", target: "Brasil: Estou te ligando. · Portugal: Estou a ligar-te.",
      gloss: { es: "portugués de Brasil y de Portugal", en: "Brazilian and European Portuguese" },
      pattern: {
        rule: {
          es: "Gramática: Portugal usa «tu» con su conjugación, estar a + infinitivo y pronombre detrás del verbo (diz-me); Brasil, «você», gerundio y pronombre delante (me diz). Pronunciación: en Portugal las vocales átonas casi desaparecen y la s final suena «sh».",
          en: "Grammar: Portugal uses 'tu' with its own verb forms, estar a + infinitive and pronouns after the verb (diz-me); Brazil uses você, the gerund and pronouns first (me diz). Pronunciation: in Portugal unstressed vowels nearly vanish and final s sounds 'sh'.",
        },
        table: [["Brasil", "Portugal"], ["Você quer?", "Queres?"], ["Estou falando.", "Estou a falar."], ["Me diz.", "Diz-me."], ["ônibus, trem", "autocarro, comboio"]],
      },
      question: {
        prompt: { es: "¿Qué frase suena típicamente europea?", en: "Which sentence sounds typically European?" },
        options: ["Estás a gozar comigo?", "Você está brincando comigo?", "Cê tá me zoando?", "Tá de brincadeira?"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-pe-pb"], tags: ["grammar", "pt-br"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-lisboa", type: "listening", target: "Olha, apanhas o autocarro aqui na paragem e sais no Rossio. Depois são cinco minutos a pé até à estação de comboios.",
      gloss: { es: "Mira, tomas el autobús aquí en la parada y te bajas en Rossio. Después son cinco minutos a pie hasta la estación de tren.", en: "Look, you catch the bus here at the stop and get off at Rossio. Then it's five minutes' walk to the train station." },
      question: {
        prompt: { es: "¿Dónde hay que bajarse del autobús?", en: "Where do you get off the bus?" },
        options: [
          { es: "En Rossio", en: "At Rossio" },
          { es: "En la estación de tren", en: "At the train station" },
          { es: "En la parada siguiente", en: "At the next stop" },
          { es: "En el aeropuerto", en: "At the airport" },
        ],
        answer: 0,
      },
      note: { es: "En Portugal «apanhar» = tomar (un transporte); en Brasil se dice «pegar».", en: "In Portugal 'apanhar' = to catch (transport); Brazilians say 'pegar'." },
      exercises: ["question", "listen"], tags: ["listening", "pt-br", "transport"],
    },
    {
      id: "dlg-pt-br", type: "dialogue", target: "Aqui a gente diz «celular».",
      gloss: { es: "Aquí decimos «celular».", en: "Here we say 'celular'." },
      turns: [
        { who: "A", target: "Desculpa, podes emprestar-me o teu telemóvel?", gloss: { es: "Perdón, ¿me prestas tu celular?", en: "Sorry, could you lend me your mobile?" } },
        { who: "B", target: "Claro! Você é de Portugal, né? Aqui a gente diz «celular».", gloss: { es: "¡Claro! Eres de Portugal, ¿no? Aquí decimos «celular».", en: "Sure! You're from Portugal, right? Here we say 'celular'." } },
        { who: "A", target: "Sou, sim, de Coimbra. E vocês dizem «você» para toda a gente!", gloss: { es: "Sí, de Coímbra. ¡Y ustedes dicen «você» a todo el mundo!", en: "Yes, from Coimbra. And you all say 'você' to everybody!" } },
      ],
      question: {
        prompt: { es: "¿De dónde es A?", en: "Where is A from?" },
        options: [
          { es: "De Portugal (Coímbra)", en: "Portugal (Coimbra)" },
          { es: "De Brasil", en: "Brazil" },
          { es: "De Angola", en: "Angola" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "pt-br"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-propina-pt", type: "bridge", onlyFor: "es", target: "a gorjeta",
      gloss: { es: "la propina (al mesero)", en: "the tip (to a waiter)" },
      distractors: ["a propina", "a gorja", "a gorjeia"],
      note: { es: "La propina es «a gorjeta». «propina» es soborno en Brasil y la tasa de matrícula universitaria en Portugal." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend", "pt-br"],
    },
    {
      id: "br-en-rapariga", type: "bridge", onlyFor: "en", target: "a moça",
      gloss: { es: "la muchacha", en: "the young woman (say it in Brazil)" },
      distractors: ["a rapariga", "a moço", "a mossa"],
      note: { en: "In Portugal 'rapariga' just means girl, but in much of Brazil it's an insult: say 'moça' or 'menina' there." },
      exercises: ["guess", "recall"], tags: ["bridge", "pt-br"],
    },
  ]),
};
