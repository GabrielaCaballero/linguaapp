import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u33",
  lang: "pt",
  index: 33,
  cefr: "C2",
  title: { target: "Sotaques e regionalismos", es: "Acentos y regionalismos de Brasil", en: "Brazilian accents and regionalisms" },
  canDo: [
    { es: "Entiendo a hablantes de distintas regiones de Brasil y reconozco sus palabras y rasgos típicos.", en: "I can understand speakers from different Brazilian regions and recognise their typical words and features." },
    { es: "Reconozco el «tu» regional con verbo de você (tu vai) y las principales diferencias de acento.", en: "I can recognise regional 'tu' with the você verb (tu vai) and the main accent differences." },
  ],
  icon: "🗺️",
  items: build("pt", 33, "C2", [
    { id: "oxente", type: "phrase", pos: "phrase", target: "Oxente!", register: "informal", gloss: { es: "¡Caramba! (Nordeste)", en: "Goodness! (Northeast)" }, accept: [{ text: "Oxe!" }], distractors: ["Uai!", "Bah!", "Égua!"], note: { es: "Expresión de sorpresa típica de Bahía, Pernambuco y todo el Nordeste.", en: "A typical exclamation of surprise from Bahia, Pernambuco and the whole Northeast." }, tags: ["regional", "northeast"] },
    { id: "bah", type: "phrase", pos: "phrase", target: "Bah, tchê!", register: "informal", gloss: { es: "¡Uf, che! (Rio Grande do Sul)", en: "Wow, mate! (far south)" }, distractors: ["Oxe, tchê!", "Uai, sô!", "Bah, mermão!"], note: { es: "El gaúcho (sur) comparte palabras con el Río de la Plata: tchê, guri, bergamota (mandarina).", en: "Gaúcho Portuguese shares words with the River Plate: tchê, guri, bergamota (tangerine)." }, tags: ["regional", "south"] },
    { id: "uai", type: "phrase", pos: "phrase", target: "Uai, sô!", register: "informal", gloss: { es: "¡Pues, hombre! (Minas Gerais)", en: "Well, man! (Minas Gerais)" }, distractors: ["Oxe, sô!", "Ué, tchê!", "Uai, mermão!"], note: { es: "«uai» marca sorpresa o evidencia; «sô» viene de «senhor».", en: "'uai' marks surprise or 'obviously'; 'sô' comes from 'senhor'." }, tags: ["regional", "minas"] },
    { id: "trem", type: "word", pos: "noun", target: "o trem", gender: "m", plural: "os trens", gloss: { es: "la cosa, el asunto (en Minas)", en: "the thing / stuff (in Minas)" }, distractors: ["o comboio", "a coisa de", "o treco mineiro"], note: { es: "En Minas «trem» sirve para cualquier cosa: «que trem bão!» (¡qué cosa tan buena!).", en: "In Minas 'trem' can mean anything: 'que trem bão!' (what a good thing!)." }, tags: ["regional", "minas"] },
    { id: "mandioca", type: "word", pos: "noun", target: "a mandioca", gender: "f", plural: "as mandiocas", gloss: { es: "la yuca, la mandioca", en: "the cassava" }, accept: [{ text: "o aipim" }, { text: "a macaxeira" }], distractors: ["a mandiga", "o manjericão", "a batata-doce"], note: { es: "Mandioca (Sudeste), aipim (Río, Sur), macaxeira (Nordeste): la misma raíz.", en: "Mandioca (Southeast), aipim (Rio, South), macaxeira (Northeast): the same root." }, tags: ["regional", "food"] },
    { id: "biscoito", type: "word", pos: "noun", target: "o biscoito", gender: "m", plural: "os biscoitos", gloss: { es: "la galleta", en: "the biscuit / cookie" }, accept: [{ text: "a bolacha" }], distractors: ["o bisconte", "a galheta", "o bolo"], note: { es: "Río dice «biscoito», São Paulo «bolacha»: una rivalidad clásica.", en: "Rio says 'biscoito', São Paulo 'bolacha': a classic rivalry." }, tags: ["regional", "food"] },
    { id: "arretado", type: "word", pos: "adj", target: "arretado", register: "informal", gloss: { es: "buenísimo / furioso (Nordeste)", en: "awesome / furious (Northeast)" }, accept: [{ text: "arretada" }], distractors: ["arrestado", "arretido", "atarefado"], tags: ["regional", "northeast"] },
    { id: "guri", type: "word", pos: "noun", target: "o guri", gender: "m", plural: "os guris", gloss: { es: "el chico, el niño (Sur)", en: "the kid / boy (far south)" }, accept: [{ text: "a guria" }], distractors: ["o gurí", "o guru", "o garoto de"], tags: ["regional", "south"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "tu-vai", type: "sentence", target: "Tu vai na festa amanhã?",
      gloss: { es: "¿Vas a la fiesta mañana? (habla del Sur o del Norte de Brasil)", en: "Are you going to the party tomorrow? (southern / northern Brazilian speech)" },
      accept: [{ text: "Você vai na festa amanhã?" }, { text: "Você vai à festa amanhã?" }],
      variants: [{ region: "PT", text: "Tu vais à festa amanhã?" }],
      distractors: ["vais", "à", "foi"],
      grammar: ["pt-g-tu-regional"], tags: ["regional"],
    },
    {
      id: "que-trem-bom", type: "sentence", target: "Nossa, que trem bom esse pão de queijo, sô!",
      gloss: { es: "¡Qué cosa tan rica este pan de queso, hombre!", en: "Wow, this cheese bread is really good, man!" },
      distractors: ["comboio", "bão de", "senhor"],
      tags: ["regional", "minas", "food"],
    },
    {
      id: "oxe-que-calor", type: "sentence", target: "Oxe, tá um calor arretado hoje!",
      gloss: { es: "¡Uy, hace un calor tremendo hoy!", en: "Gosh, it's boiling hot today!" },
      distractors: ["faz", "arrestado", "Uai"],
      tags: ["regional", "northeast"],
    },
    { id: "egua", type: "phrase", pos: "phrase", target: "Égua!", register: "informal", gloss: { es: "¡Guau! / ¡Caramba! (Pará)", en: "Wow! (Pará, North)" }, distractors: ["Água!", "Éguas!", "Égüe!"], note: { es: "Exclamación multiuso de Belém y el Pará: sorpresa, admiración o fastidio.", en: "An all-purpose exclamation in Belém and Pará: surprise, awe or annoyance." }, tags: ["regional", "north"] },
    { id: "mermao", type: "word", pos: "noun", target: "o mermão", gender: "m", plural: "os mermãos", register: "informal", gloss: { es: "hermano, amigo (vocativo carioca)", en: "bro (Rio slang)" }, distractors: ["o meu irmã", "o mermano", "o irmãozão"], tags: ["regional", "rio"] },
    { id: "jerimum", type: "word", pos: "noun", target: "o jerimum", gender: "m", plural: "os jerimuns", gloss: { es: "el zapallo, la calabaza (Nordeste)", en: "the pumpkin (Northeast)" }, accept: [{ text: "a abóbora" }], distractors: ["o jeribá", "a jerimuna", "o gergelim"], note: { es: "En el resto de Brasil: a abóbora.", en: "Elsewhere in Brazil: a abóbora." }, tags: ["regional", "food"] },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-tu-regional", type: "pattern", target: "tu vai · tu falou · tu é (Sul, Norte, Nordeste)",
      gloss: { es: "el «tu» regional brasileño", en: "regional Brazilian 'tu'" },
      pattern: {
        rule: {
          es: "En el Sur, partes del Norte y del Nordeste se usa «tu» en vez de «você», pero casi siempre con el verbo de «você»: tu vai, tu falou. En Porto Alegre y Florianópolis a veces se oye con la terminación clásica (tu vais). La norma escrita pide tu vais / você vai.",
          en: "In the South and parts of the North and Northeast people say 'tu' instead of você, usually with the você verb: tu vai, tu falou. Classic endings (tu vais) are sometimes heard in the far south. The written standard requires tu vais / você vai.",
        },
        table: [["fala regional", "Tu vai?"], ["norma (tu)", "Tu vais?"], ["norma (você)", "Você vai?"], ["passado regional", "Tu falou com ela?"]],
      },
      question: {
        prompt: { es: "En Porto Alegre oyes «Tu viu o jogo?». En la norma escrita sería…", en: "In Porto Alegre you hear 'Tu viu o jogo?'. In the written standard it would be…" },
        options: ["Tu viste o jogo? / Você viu o jogo?", "Tu viu o jogo?", "Tu vistes o jogo?", "Tu vias o jogo?"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-tu-regional"], tags: ["grammar", "regional"],
    },
    {
      id: "pat-sotaques", type: "pattern", target: "carioca: «sh» · paulistano: r de «porta» · nordestino: «te» sin «tch»",
      gloss: { es: "rasgos de los acentos brasileños", en: "features of Brazilian accents" },
      pattern: {
        rule: {
          es: "Río: la s final suena «sh» (mais ≈ «maish») y la r es aspirada. Interior paulista y Minas: r «retrofleja» como en inglés (porta). Gran parte del Nordeste: t y d antes de i no se palatalizan (tia ≈ «tía», no «chía») y las vocales son más abiertas.",
          en: "Rio: final s sounds 'sh' (mais ≈ 'maish') and r is breathy. Inland São Paulo and Minas: an English-like 'r' (porta). Much of the Northeast: t and d before i don't become 'ch' / 'j' (tia ≈ 'tee-a'), and vowels are more open.",
        },
        table: [["Rio", "mais ≈ maish"], ["interior SP / MG", "porta com r inglês"], ["Nordeste", "tia ≈ tia (sem tch)"], ["Sul", "leite ≈ leite (e final fechado)"]],
      },
      question: {
        prompt: { es: "Oyes «dois mil e dez» como «doish mil e desh». La persona probablemente es…", en: "You hear 'dois mil e dez' as 'doysh mil ee desh'. The speaker is probably…" },
        options: [
          { es: "carioca (de Río)", en: "from Rio" },
          { es: "gaúcha (del Sur)", en: "from the far south" },
          { es: "de Minas", en: "from Minas" },
          { es: "paulista del interior", en: "from inland São Paulo" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-sotaques"], tags: ["grammar", "regional", "sound"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-regional", type: "listening", target: "Lá no Recife a gente diz macaxeira, no Rio é aipim e em São Paulo é mandioca. Mas é tudo a mesma coisa, viu?",
      gloss: { es: "En Recife decimos macaxeira, en Río es aipim y en São Paulo es mandioca. Pero es todo lo mismo, ¿eh?", en: "In Recife we say macaxeira, in Rio it's aipim and in São Paulo it's mandioca. But it's all the same thing, you know?" },
      question: {
        prompt: { es: "¿Qué dice la persona?", en: "What's the speaker's point?" },
        options: [
          { es: "Que la misma raíz tiene tres nombres", en: "The same root has three names" },
          { es: "Que son tres raíces distintas", en: "They're three different roots" },
          { es: "Que en Recife no se come mandioca", en: "Nobody eats cassava in Recife" },
          { es: "Que prefiere la de São Paulo", en: "She prefers São Paulo's" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "regional", "food"],
    },
    {
      id: "dlg-bolacha", type: "dialogue", target: "É biscoito!",
      gloss: { es: "¡Es galleta!", en: "It's 'biscoito'!" },
      turns: [
        { who: "A", target: "Me passa a bolacha?", gloss: { es: "¿Me pasas la galleta?", en: "Pass me the cookie?" } },
        { who: "B", target: "Bolacha? Aqui no Rio é biscoito, mermão!", gloss: { es: "¿«Bolacha»? ¡Acá en Río se dice «biscoito», hermano!", en: "'Bolacha'? Here in Rio it's 'biscoito', bro!" } },
        { who: "A", target: "Paulista não muda de opinião, meu.", gloss: { es: "Un paulista no cambia de opinión, amigo.", en: "A paulista doesn't change his mind, mate." } },
      ],
      question: {
        prompt: { es: "¿De dónde es A?", en: "Where is A from?" },
        options: [
          { es: "De São Paulo", en: "São Paulo" },
          { es: "De Río", en: "Rio" },
          { es: "De Minas", en: "Minas" },
        ],
        answer: 0,
      },
      note: { es: "«mermão» (meu irmão) es muy carioca; «meu» como vocativo es muy paulistano.", en: "'mermão' (my brother) is very Rio; 'meu' as a form of address is very São Paulo." },
      exercises: ["question"], tags: ["dialogue", "regional"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-bergamota", type: "bridge", onlyFor: "es", target: "a bergamota",
      gloss: { es: "la mandarina (Sur de Brasil)", en: "the tangerine (far south)" },
      distractors: ["a bergamonta", "a mandarina", "a bergamotta"],
      note: { es: "La mandarina es «tangerina» en Río, «mexerica» en São Paulo y Minas y «bergamota» en el Sur, como en Argentina." },
      exercises: ["guess", "recall"], tags: ["bridge", "regional", "food"],
    },
    {
      id: "br-en-trem", type: "bridge", onlyFor: "en", target: "Pega aquele trem ali pra mim.",
      gloss: { es: "Agarra esa cosa de ahí por mí.", en: "Grab that thing over there for me. (Minas)" },
      distractors: ["Pega aquele comboio ali pra mim.", "Pega aquela coisa trem pra mim.", "Pega aquele treno ali pra mim."],
      note: { en: "In Minas Gerais 'trem' means 'thing' as often as 'train'." },
      exercises: ["guess", "recall"], tags: ["bridge", "regional"],
    },
  ]),
};
