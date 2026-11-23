import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u31",
  lang: "pt",
  index: 31,
  cefr: "C2",
  title: { target: "Ironia e humor", es: "Ironía y humor", en: "Irony and humour" },
  canDo: [
    { es: "Capto la ironía, las indirectas y el humor de la conversación brasileña, y puedo usarlos con tacto.", en: "I can pick up irony, digs and humour in Brazilian conversation, and use them tactfully." },
    { es: "Domino los marcadores del discurso (pois é, aliás, enfim, sei lá, tipo).", en: "I can handle discourse markers (pois é, aliás, enfim, sei lá, tipo)." },
  ],
  icon: "😏",
  items: build("pt", 31, "C2", [
    { id: "piada", type: "word", pos: "noun", target: "a piada", gender: "f", plural: "as piadas", gloss: { es: "el chiste", en: "the joke" }, distractors: ["o piado", "a pilha", "a piedade"], tags: ["humour"] },
    { id: "trocadilho", type: "word", pos: "noun", target: "o trocadilho", gender: "m", plural: "os trocadilhos", gloss: { es: "el juego de palabras", en: "the pun" }, distractors: ["o trocado", "a trocadilha", "o troco"], tags: ["humour"] },
    { id: "indireta", type: "word", pos: "noun", target: "a indireta", gender: "f", plural: "as indiretas", gloss: { es: "la indirecta", en: "the dig / veiled remark" }, distractors: ["o indireto", "a direta", "a indiscreta"], note: { es: "mandar uma indireta = tirar una indirecta.", en: "mandar uma indireta = to make a pointed remark." }, tags: ["humour", "irony"] },
    { id: "zoar", type: "word", pos: "verb", target: "zoar", register: "informal", gloss: { es: "burlarse, tomar el pelo (informal)", en: "to tease / mess with (informal)" }, forms: { eu: "zoo", "ele (pret.)": "zoou" }, distractors: ["zumbir", "soar", "zangar"], tags: ["humour", "colloquial"] },
    { id: "so-que-nao", type: "phrase", pos: "phrase", target: "Só que não.", register: "informal", gloss: { es: "…o no. (ironía: quiere decir lo contrario)", en: "…not! (irony: means the opposite)" }, distractors: ["Só não que.", "Só que sim.", "Mas que não."], note: { es: "Se añade al final para negar lo dicho: «Adoro acordar cedo… só que não».", en: "Tacked on to cancel what you just said: 'Adoro acordar cedo… só que não'." }, tags: ["irony", "colloquial"] },
    { id: "ate-parece", type: "phrase", pos: "phrase", target: "Até parece!", register: "informal", gloss: { es: "¡Sí, claro! / ¡Ni lo sueñes! (irónico)", en: "Yeah, right! (ironic)" }, distractors: ["Até aparece!", "Parece até!", "Até pareceu!"], tags: ["irony", "chunk"] },
    { id: "fala-serio", type: "phrase", pos: "phrase", target: "Fala sério!", register: "informal", gloss: { es: "¡No me digas! / ¿En serio?", en: "Get out of here! / Seriously?" }, distractors: ["Fala sérios!", "Falar sério!", "Fala a sério de!"], variants: [{ region: "PT", text: "A sério?!" }], tags: ["irony", "chunk"] },
    { id: "levar-na-esportiva", type: "phrase", pos: "phrase", target: "levar na esportiva", gloss: { es: "tomárselo con humor, no enojarse", en: "to take it in good part" }, distractors: ["levar no esporte", "levar à esportiva", "tomar na esportiva de"], tags: ["humour", "idiom"] },
    { id: "pois-e", type: "phrase", pos: "phrase", target: "Pois é.", gloss: { es: "Así es. / Y sí…", en: "Exactly. / I know, right." }, distractors: ["Pois sim.", "Pois não.", "Pois foi."], note: { es: "Ojo: «Pois não?» es «¿En qué puedo ayudarle?» y «pois sim!» es irónico (¡sí, claro!).", en: "Careful: 'Pois não?' means 'How can I help?' and 'pois sim!' is ironic ('yeah, sure')." }, grammar: ["pt-g-marcadores-discursivos"], tags: ["discourse"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "que-beleza-hein", type: "sentence", target: "Que beleza, hein? Choveu justo no dia da praia.",
      gloss: { es: "Qué maravilla, ¿eh? Llovió justo el día de la playa.", en: "Lovely, isn't it? It rained on the very day of the beach trip." },
      distractors: ["Qual", "chove", "justamente de"],
      grammar: ["pt-g-ironia"], tags: ["irony"],
    },
    {
      id: "imagina", type: "sentence", target: "Você vai me ajudar na mudança? — Imagina! Estou de férias.",
      gloss: { es: "¿Me vas a ayudar con la mudanza? — ¡Ni lo sueñes! Estoy de vacaciones.", en: "Are you going to help me move? — You must be joking! I'm on holiday." },
      distractors: ["Imaginou", "mudança de", "Claro"],
      note: { es: "«Imagina!» = de nada; aquí, irónico: ¡ni hablar!", en: "'Imagina!' usually means 'don't mention it'; here it's ironic: 'no way!'." },
      grammar: ["pt-g-ironia"], tags: ["irony"],
    },
    {
      id: "sei-la", type: "sentence", target: "Sei lá, tipo, acho que ele ficou chateado.",
      gloss: { es: "No sé, o sea, creo que se molestó.", en: "I dunno, like, I think he got upset." },
      distractors: ["Sei ali", "chateou", "chatice"],
      grammar: ["pt-g-marcadores-discursivos"], tags: ["discourse", "colloquial"],
    },
    {
      id: "alias", type: "sentence", target: "O filme é ótimo; aliás, o diretor é brasileiro.",
      gloss: { es: "La película es buenísima; por cierto, el director es brasileño.", en: "The film is great; incidentally, the director is Brazilian." },
      distractors: ["alias", "aliás de", "enquanto"],
      tags: ["discourse"],
    },
    {
      id: "enfim", type: "sentence", target: "Enfim, não vale a pena discutir.",
      gloss: { es: "En fin, no vale la pena discutir.", en: "Anyway, it's not worth arguing." },
      distractors: ["Em fim", "vala", "pena de"],
      tags: ["discourse"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-marcadores", type: "pattern", target: "pois é · aliás · enfim · sei lá · tipo · né",
      gloss: { es: "marcadores del discurso", en: "discourse markers" },
      pattern: {
        rule: {
          es: "Organizan la conversación y expresan actitud: pois é (asentir), aliás (por cierto / mejor dicho), enfim (en fin), sei lá (no sé), tipo (o sea, como), né (¿no?). Su función depende de la entonación.",
          en: "They organise conversation and show attitude: pois é (agreeing), aliás (by the way / or rather), enfim (anyway), sei lá (I dunno), tipo (like), né (right?). Intonation decides their function.",
        },
        table: [["concordar", "Pois é."], ["acrescentar / corrigir", "Aliás, …"], ["encerrar", "Enfim, …"], ["hesitar", "Sei lá… tipo…"], ["confirmar", "…, né?"]],
      },
      question: {
        prompt: { es: "Te corriges: «Llegó el lunes, mejor dicho, el martes.»", en: "You correct yourself: 'He arrived on Monday, or rather Tuesday.'" },
        options: ["Ele chegou na segunda, aliás, na terça.", "Ele chegou na segunda, enfim, na terça.", "Ele chegou na segunda, pois é, na terça.", "Ele chegou na segunda, sei lá, na terça."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-marcadores-discursivos"], tags: ["grammar", "discourse"],
    },
    {
      id: "pat-ironia", type: "pattern", target: "Que beleza, hein? · Imagina! · Até parece! · …só que não",
      gloss: { es: "recursos de la ironía", en: "how irony is signalled" },
      pattern: {
        rule: {
          es: "La ironía brasileña se apoya en elogios exagerados con «hein» (que maravilha, hein?), fórmulas fijas (até parece!, pois sim!, vai nessa!) y el remate «só que não». El diminutivo también puede ser irónico: um probleminha (un problemazo).",
          en: "Brazilian irony relies on over-the-top praise with 'hein' (que maravilha, hein?), set phrases (até parece!, pois sim!, vai nessa!) and the tag 'só que não'. Diminutives can be ironic too: um probleminha (a huge problem).",
        },
        table: [["elogio + hein", "Que ótimo, hein?"], ["incredulidade", "Até parece!"], ["negação final", "…só que não."], ["diminutivo", "Um probleminha de nada…"]],
      },
      question: {
        prompt: { es: "Tu amigo llega dos horas tarde y le dices «Chegou cedo, hein?». Quieres decir…", en: "Your friend is two hours late and you say 'Chegou cedo, hein?'. You mean…" },
        options: [
          { es: "que llegó tardísimo", en: "they're very late" },
          { es: "que llegó temprano", en: "they're early" },
          { es: "que no esperabas que viniera", en: "you didn't expect them" },
          { es: "que se puede ir", en: "they can leave" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-ironia"], tags: ["grammar", "irony"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-ironia", type: "listening", target: "Ah, que maravilha! O ônibus quebrou, o celular descarregou e ainda começou a chover. Dia perfeito, hein?",
      gloss: { es: "¡Ah, qué maravilla! Se rompió el autobús, se descargó el celular y encima empezó a llover. Día perfecto, ¿eh?", en: "Oh, wonderful! The bus broke down, my phone died and then it started raining. Perfect day, eh?" },
      question: {
        prompt: { es: "¿Cómo fue el día de la persona?", en: "How was the speaker's day?" },
        options: [
          { es: "Malísimo: lo dice con ironía", en: "Awful: it's ironic" },
          { es: "Perfecto", en: "Perfect" },
          { es: "Normal", en: "Normal" },
          { es: "Bueno, salvo la lluvia", en: "Fine apart from the rain" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "irony"],
    },
    {
      id: "dlg-zoar", type: "dialogue", target: "Tô só te zoando!",
      gloss: { es: "¡Te estoy tomando el pelo!", en: "I'm just messing with you!" },
      turns: [
        { who: "A", target: "Nossa, que camisa linda… pra ir a um baile de 1980!", spoken: "Nossa, que camisa linda… pra ir a um baile de mil novecentos e oitenta!", gloss: { es: "Uy, qué camisa linda… ¡para ir a un baile de 1980!", en: "Wow, what a lovely shirt… for a 1980 dance!" } },
        { who: "B", target: "Ei! Comprei ontem!", gloss: { es: "¡Oye! ¡La compré ayer!", en: "Hey! I bought it yesterday!" } },
        { who: "A", target: "Tô só te zoando! Leva na esportiva, cara.", gloss: { es: "¡Te estoy tomando el pelo! No te lo tomes a mal.", en: "I'm just messing with you! Don't take it the wrong way, mate." } },
      ],
      question: {
        prompt: { es: "¿Qué hace A?", en: "What is A doing?" },
        options: [
          { es: "Se burla de B en broma", en: "Teasing B as a joke" },
          { es: "Le hace un cumplido sincero", en: "Paying a sincere compliment" },
          { es: "Le pide prestada la camisa", en: "Asking to borrow the shirt" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "humour"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-pois-nao", type: "bridge", onlyFor: "es", target: "Pois não?",
      gloss: { es: "¿En qué puedo ayudarle?", en: "How can I help you?" },
      question: {
        prompt: { es: "Entras en una tienda y te dicen «Pois não?». Te están…", en: "You walk into a shop and hear 'Pois não?'. They're…" },
        options: [{ es: "ofreciendo ayuda", en: "offering help" }, { es: "negando algo", en: "refusing something" }, { es: "pidiendo que te vayas", en: "asking you to leave" }],
        answer: 0,
      },
      note: { es: "Aunque tenga «não», «Pois não?» es una fórmula cortés de atención; y como respuesta, «pois não» significa «¡cómo no!»." },
      exercises: ["guess", "question"], tags: ["bridge", "discourse"],
    },
    {
      id: "br-en-tipo", type: "bridge", onlyFor: "en", target: "Foi, tipo, muito estranho.",
      gloss: { es: "Fue, o sea, muy raro.", en: "It was, like, really weird." },
      distractors: ["Foi, como, muito estranho de.", "Foi, gosto, muito estranho.", "Foi, tipo de, estranho muito."],
      note: { en: "Brazilian 'tipo' works like filler 'like' in English speech; avoid it in writing." },
      exercises: ["guess", "recall"], tags: ["bridge", "discourse"],
    },
  ]),
};
