import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u06",
  lang: "pt",
  index: 6,
  cefr: "A1.1",
  title: { target: "Onde você mora?", es: "¿Dónde vives?", en: "Where do you live?" },
  canDo: [
    { es: "Puedo describir mi barrio y preguntar dónde queda un lugar.", en: "I can describe my neighbourhood and ask where a place is." },
    { es: "Puedo entender indicaciones sencillas (à direita, em frente).", en: "I can understand simple directions (à direita, em frente)." },
    { es: "Sé usar estar y ficar para ubicar, y las contracciones no, na, ao, à.", en: "I can use estar and ficar for location, and the contractions no, na, ao, à." },
  ],
  icon: "🏙️",
  items: build("pt", 6, "A1.1", [
    {
      id: "s-em", type: "sound", target: "trem",
      gloss: { es: "tren", en: "train" },
      distractors: ["tren", "trém", "treim"],
      note: {
        es: "La -em final es nasal y suena casi «ein»: trem ≈ «tréin», também ≈ «tambéin».",
        en: "Final -em is nasal, close to 'ayn' through the nose: trem ≈ 'trayn', também ≈ 'tam-BAYN'.",
      },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "nasal"],
    },
    // ── Words ────────────────────────────────────────────────
    { id: "rua", type: "word", pos: "noun", target: "a rua", gender: "f", plural: "as ruas", gloss: { es: "la calle", en: "the street" }, distractors: ["o rua", "a ruta", "a roda"], tags: ["city"] },
    { id: "bairro", type: "word", pos: "noun", target: "o bairro", gender: "m", plural: "os bairros", gloss: { es: "el barrio", en: "the neighbourhood" }, distractors: ["a bairra", "o barro", "o barrio"], tags: ["city"] },
    { id: "onibus", type: "word", pos: "noun", target: "o ônibus", gender: "m", plural: "os ônibus", gloss: { es: "el autobús", en: "the bus" }, variants: [{ region: "PT", text: "o autocarro", note: { es: "En Portugal el autobús es «o autocarro».", en: "In Portugal a bus is 'o autocarro'." } }], distractors: ["o autobus", "a ônibus", "o omnibus"], note: { es: "El plural no cambia: dois ônibus.", en: "The plural doesn't change: dois ônibus." }, tags: ["city", "transport"] },
    { id: "trem", type: "word", pos: "noun", target: "o trem", gender: "m", plural: "os trens", gloss: { es: "el tren", en: "the train" }, variants: [{ region: "PT", text: "o comboio", note: { es: "En Portugal el tren es «o comboio».", en: "In Portugal a train is 'o comboio'." } }], distractors: ["o tren", "a trem", "o treme"], tags: ["transport"] },
    { id: "metro", type: "word", pos: "noun", target: "o metrô", gender: "m", plural: "os metrôs", gloss: { es: "el metro", en: "the underground / subway" }, variants: [{ region: "PT", text: "o metro", note: { es: "En Portugal se escribe sin acento y se acentúa en la e: metro.", en: "In Portugal it's spelt and stressed 'metro'." } }], distractors: ["a metrô", "o metrópole", "o metrón"], tags: ["transport"] },
    { id: "farmacia", type: "word", pos: "noun", target: "a farmácia", gender: "f", plural: "as farmácias", gloss: { es: "la farmacia", en: "the pharmacy" }, distractors: ["o farmácia", "a farmacia de", "a fármaco"], tags: ["city", "shops"] },
    { id: "perto", type: "word", pos: "adv", target: "perto", gloss: { es: "cerca", en: "near / close by" }, distractors: ["longe", "certo", "porta"], note: { es: "perto de = cerca de: perto do metrô.", en: "perto de = near: perto do metrô." }, tags: ["directions"] },
    { id: "longe", type: "word", pos: "adv", target: "longe", gloss: { es: "lejos", en: "far" }, distractors: ["perto", "longo", "lento"], tags: ["directions"] },
    { id: "a-direita", type: "phrase", pos: "phrase", target: "à direita", gloss: { es: "a la derecha", en: "on the right" }, accept: [{ text: "na direita" }], errors: [{ text: "a a direita", feedback: { es: "a + a = à (con acento grave, la «crase»).", en: "a + a = à (with a grave accent, the 'crase')." }, ruleId: "pt-g-em-contracoes" }], distractors: ["à esquerda", "a direito", "em direita"], tags: ["directions"] },
    { id: "a-esquerda", type: "phrase", pos: "phrase", target: "à esquerda", gloss: { es: "a la izquierda", en: "on the left" }, accept: [{ text: "na esquerda" }], distractors: ["à direita", "a izquierda", "em esquerda"], tags: ["directions"] },
    { id: "em-frente", type: "phrase", pos: "phrase", target: "em frente", gloss: { es: "derecho / enfrente", en: "straight on / opposite" }, accept: [{ text: "reto" }], distractors: ["de frente", "na frente de", "à frente"], note: { es: "Siga em frente = siga derecho; em frente ao banco = enfrente del banco.", en: "Siga em frente = go straight on; em frente ao banco = opposite the bank." }, tags: ["directions"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "onde-fica-a-estacao", type: "sentence", target: "Onde fica a estação de trem?",
      gloss: { es: "¿Dónde queda la estación de tren?", en: "Where's the train station?" },
      accept: [{ text: "Onde é a estação de trem?" }, { text: "Onde está a estação de trem?" }],
      variants: [{ region: "PT", text: "Onde fica a estação de comboios?" }],
      distractors: ["está", "do", "ônibus"],
      note: { es: "Para lugares fijos se usa «ficar»: onde fica…? = ¿dónde queda…?", en: "For fixed places Portuguese uses ficar: onde fica…? = where is…?" },
      grammar: ["pt-g-estar-ficar"], tags: ["directions"],
    },
    {
      id: "moro-no-centro", type: "sentence", target: "Eu moro no centro, perto do mercado.",
      gloss: { es: "Vivo en el centro, cerca del mercado.", en: "I live in the centre, near the market." },
      accept: [{ text: "Moro no centro, perto do mercado." }],
      errors: [{ text: "Eu moro em o centro, perto de o mercado.", feedback: { es: "em + o = no; de + o = do.", en: "em + o = no; de + o = do." }, ruleId: "pt-g-em-contracoes" }],
      distractors: ["na", "da", "longe"],
      tags: ["city"],
    },
    {
      id: "vou-de-onibus", type: "sentence", target: "Eu vou ao trabalho de ônibus.",
      gloss: { es: "Voy al trabajo en autobús.", en: "I go to work by bus." },
      accept: [{ text: "Vou ao trabalho de ônibus." }, { text: "Eu vou para o trabalho de ônibus." }],
      variants: [{ region: "PT", text: "Eu vou para o trabalho de autocarro." }],
      errors: [{ text: "Eu vou ao trabalho em ônibus.", feedback: { es: "El medio de transporte va con «de»: de ônibus, de carro, de metrô (pero a pé).", en: "Means of transport take 'de': de ônibus, de carro (but a pé, on foot)." } }],
      distractors: ["no", "em", "à"],
      tags: ["transport"],
    },
    {
      id: "a-farmacia-esta-fechada", type: "sentence", target: "A farmácia está fechada hoje.",
      gloss: { es: "La farmacia está cerrada hoy.", en: "The pharmacy is closed today." },
      distractors: ["é", "aberta", "fica"],
      tags: ["city", "shops"],
    },
    {
      id: "fica-a-dez-minutos", type: "sentence", target: "Fica a dez minutos daqui, a pé.",
      gloss: { es: "Queda a diez minutos de aquí, a pie.", en: "It's ten minutes from here, on foot." },
      distractors: ["de", "aqui", "em"],
      note: { es: "daqui = de + aqui. «a pé» (a pie) es la excepción a «de ônibus».", en: "daqui = de + aqui (from here). 'a pé' is the exception to 'de ônibus'." },
      tags: ["directions"],
    },
    {
      id: "desculpe-onde-fica", type: "sentence", target: "Com licença, tem um banco aqui perto?",
      gloss: { es: "Disculpe, ¿hay un banco por aquí cerca?", en: "Excuse me, is there a bank near here?" },
      accept: [{ text: "Com licença, há um banco aqui perto?" }, { text: "Desculpe, tem um banco aqui perto?" }],
      distractors: ["é", "longe", "está"],
      tags: ["directions", "polite"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "tab-estar", type: "paradigm", target: "estar — presente", spoken: "estar",
      gloss: { es: "«estar» en presente", en: "estar (to be) — present" },
      grammar: ["pt-g-estar-ficar"],
      paradigm: {
        caption: { es: "Conjuga «estar» en presente", en: "Conjugate estar in the present tense" },
        cells: [
          { label: "eu", answer: "estou", ruleId: "pt-g-estar-ficar" },
          { label: "você / ele / ela", answer: "está", ruleId: "pt-g-estar-ficar" },
          { label: "nós", answer: "estamos", ruleId: "pt-g-estar-ficar" },
          { label: "vocês / eles / elas", answer: "estão", ruleId: "pt-g-estar-ficar" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    {
      id: "pat-em-contracoes", type: "pattern", target: "em + o = no · a + a = à",
      gloss: { es: "em y a + artículo: no, na, ao, à", en: "em and a + article: no, na, ao, à" },
      pattern: {
        rule: {
          es: "«em» (en) se une con el artículo: no, na, nos, nas. «a» (a) también: ao, aos, à, às. La «à» con acento grave es a + a (la «crase»).",
          en: "em (in, at, on) merges with the article: no, na, nos, nas. So does a (to): ao, aos, à, às. The grave accent in à marks a + a (the 'crase').",
        },
        table: [["em + o", "no bairro"], ["em + a", "na rua"], ["a + o", "ao banco"], ["a + a", "à farmácia"], ["a + as", "às lojas"]],
      },
      question: {
        prompt: { es: "Completa: «Ela mora ___ Rua Augusta.»", en: "Complete: 'Ela mora ___ Rua Augusta.'" },
        options: ["na", "no", "em a", "à"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-em-contracoes"], tags: ["grammar", "contractions"],
    },
    {
      id: "pat-estar-ficar", type: "pattern", target: "O banco fica na praça. · O Paulo está no banco.",
      gloss: { es: "ubicar: ficar (lugares) y estar (personas, cosas que se mueven)", en: "location: ficar (places) and estar (people, movable things)" },
      pattern: {
        rule: {
          es: "Para lugares que no se mueven (ciudades, edificios) se usa «ficar»: onde fica o hotel? Para personas y cosas que cambian de lugar, «estar»: onde está a chave?",
          en: "For places that don't move (cities, buildings) use ficar: onde fica o hotel? For people and things that move, use estar: onde está a chave?",
        },
        table: [["ficar", "Lisboa fica em Portugal."], ["ficar", "A padaria fica na esquina."], ["estar", "Eu estou em casa."], ["estar", "As chaves estão na mesa."]],
      },
      question: {
        prompt: { es: "Completa: «O museu ___ perto da praia.»", en: "Complete: 'O museu ___ perto da praia.'" },
        options: ["fica", "é de", "tem", "estamos"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-estar-ficar"], tags: ["grammar", "location"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-direcoes", type: "listening", target: "Siga em frente até a praça. Depois vire à esquerda. A farmácia fica ao lado do banco.",
      gloss: { es: "Siga derecho hasta la plaza. Después doble a la izquierda. La farmacia está al lado del banco.", en: "Go straight on to the square. Then turn left. The pharmacy is next to the bank." },
      question: {
        prompt: { es: "¿Dónde está la farmacia?", en: "Where is the pharmacy?" },
        options: [
          { es: "Al lado del banco", en: "Next to the bank" },
          { es: "Enfrente del banco", en: "Opposite the bank" },
          { es: "En la plaza", en: "On the square" },
          { es: "A la derecha de la plaza", en: "To the right of the square" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "directions"],
    },
    {
      id: "dlg-onde-mora", type: "dialogue", target: "É bem tranquilo.",
      gloss: { es: "Es muy tranquilo.", en: "It's really quiet." },
      turns: [
        { who: "A", target: "Você mora onde, Rafa?", gloss: { es: "¿Dónde vives, Rafa?", en: "Where do you live, Rafa?" } },
        { who: "B", target: "Em Pinheiros, perto do metrô.", gloss: { es: "En Pinheiros, cerca del metro.", en: "In Pinheiros, near the subway." } },
        { who: "A", target: "E como é o bairro?", gloss: { es: "¿Y cómo es el barrio?", en: "And what's the neighbourhood like?" } },
        { who: "B", target: "É bem tranquilo, mas fica longe da praia, né?", gloss: { es: "Es muy tranquilo, pero queda lejos de la playa, ¿no?", en: "It's really quiet, but it's far from the beach, you know?" } },
      ],
      question: {
        prompt: { es: "¿Qué tiene de malo el barrio de Rafa?", en: "What's the downside of Rafa's neighbourhood?" },
        options: [
          { es: "Queda lejos de la playa", en: "It's far from the beach" },
          { es: "Es muy ruidoso", en: "It's very noisy" },
          { es: "No tiene metro", en: "There's no subway" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "city"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-largo", type: "bridge", onlyFor: "es", target: "largo",
      gloss: { es: "ancho", en: "wide" },
      question: {
        prompt: { es: "«A avenida é muito larga» quiere decir que la avenida es…", en: "'A avenida é muito larga' means the avenue is…" },
        options: [{ es: "muy ancha", en: "very wide" }, { es: "muy larga", en: "very long" }, { es: "muy lenta", en: "very slow" }],
        answer: 0,
      },
      note: { es: "Falso amigo: «largo» es ancho; «largo» en español es «longo» o «comprido»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "city"],
    },
    {
      id: "br-livraria", type: "bridge", onlyFor: "en", target: "a livraria",
      gloss: { es: "la librería", en: "the bookshop" },
      question: {
        prompt: { es: "En una «livraria» puedes…", en: "In a 'livraria' you can…" },
        options: [{ es: "comprar libros", en: "buy books" }, { es: "pedir libros prestados", en: "borrow books" }, { es: "comprar remedios", en: "buy medicine" }],
        answer: 0,
      },
      note: { en: "False friend: a livraria is a bookshop; a library is 'a biblioteca'." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "city"],
    },
  ]),
};
