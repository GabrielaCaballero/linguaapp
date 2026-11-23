import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u30",
  lang: "it",
  index: 30,
  cefr: "C1",
  title: { target: "Cultura, arte e stile", es: "Cultura, arte y estilo", en: "Culture, art and style" },
  canDo: [
    { es: "Puedo leer biografías y textos de arte narrados en passato remoto.", en: "I can read biographies and art texts narrated in the passato remoto." },
    { es: "Puedo comentar una obra o una exposición con vocabulario preciso.", en: "I can discuss a work of art or an exhibition with precise vocabulary." },
    { es: "Sé reconocer el registro literario (egli, ove, giacché) y expresiones cultas.", en: "I can recognise literary register (egli, ove, giacché) and cultured expressions." },
  ],
  icon: "🎨",
  items: build("it", 30, "C1", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "pala-daltare", type: "word", pos: "noun", target: "la pala d'altare", gender: "f", plural: "le pale d'altare",
      gloss: { es: "el retablo", en: "the altarpiece" },
      distractors: ["la palla d'altare", "il palo d'altare", "la pala dell'alto"],
      note: { es: "la pala = la pala (herramienta) y también el retablo; la palla = la pelota.", en: "la pala = shovel, and also altarpiece; la palla = ball." },
      tags: ["art"],
    },
    {
      id: "chiaroscuro", type: "word", pos: "noun", target: "il chiaroscuro", gender: "m", plural: "i chiaroscuri",
      gloss: { es: "el claroscuro", en: "chiaroscuro (light and shade)" },
      distractors: ["il chiaro scuro", "lo scurochiaro", "la chiarezza"],
      tags: ["art"],
    },
    {
      id: "tela", type: "word", pos: "noun", target: "la tela", gender: "f", plural: "le tele",
      gloss: { es: "el lienzo", en: "the canvas" },
      distractors: ["il telo", "la tenda", "la stoffa"],
      note: { es: "olio su tela = óleo sobre lienzo.", en: "olio su tela = oil on canvas." },
      tags: ["art"],
    },
    {
      id: "committente", type: "word", pos: "noun", target: "il committente", gender: "m", plural: "i committenti",
      gloss: { es: "el comitente (quien encarga una obra)", en: "the patron (who commissions a work)" },
      distractors: ["il commesso", "il commissario", "il comitato"],
      tags: ["art"],
    },
    {
      id: "allestimento", type: "word", pos: "noun", target: "l'allestimento", gender: "m", plural: "gli allestimenti",
      gloss: { es: "el montaje (de una exposición o una obra de teatro)", en: "the staging / exhibition design" },
      distractors: ["l'allenamento", "l'allevamento", "l'alloggiamento"],
      tags: ["art", "culture"],
    },
    {
      id: "commissionare", type: "word", pos: "verb", target: "commissionare",
      gloss: { es: "encargar (una obra de arte)", en: "to commission (a work of art)" },
      forms: { pp: "commissionato" },
      distractors: ["commuovere", "commerciare", "comunicare"],
      tags: ["art"],
    },
    {
      id: "egli", type: "word", pos: "pron", target: "egli",
      gloss: { es: "él (literario)", en: "he (literary)" },
      distractors: ["ella", "esso", "elli"],
      note: { es: "En la lengua hablada se usa lui; egli aparece en ensayos y textos antiguos.", en: "Speech uses lui; egli appears in essays and older texts." },
      grammar: ["it-g-registro-letterario"], tags: ["literary", "register"],
    },
    {
      id: "ove", type: "word", pos: "adv", target: "ove",
      gloss: { es: "donde (literario)", en: "where (literary)" },
      distractors: ["ovvero", "ovunque", "onde"],
      note: { es: "También significa «en caso de que» en textos jurídicos: ove necessario.", en: "In legal texts it also means 'if': ove necessario." },
      grammar: ["it-g-registro-letterario"], tags: ["literary", "register"],
    },
    {
      id: "giacche", type: "word", pos: "other", target: "giacché",
      gloss: { es: "ya que, puesto que", en: "since / seeing that (formal)" },
      distractors: ["già", "giacca", "perciò"],
      grammar: ["it-g-registro-letterario"], tags: ["literary", "connectors"],
    },
    {
      id: "nonche", type: "word", pos: "other", target: "nonché",
      gloss: { es: "así como, y también", en: "as well as" },
      distractors: ["non che", "neanche", "nonostante"],
      note: { es: "No significa «no solo»: pittore nonché scultore = pintor y también escultor.", en: "It doesn't mean 'not only': pittore nonché scultore = painter as well as sculptor." },
      grammar: ["it-g-registro-letterario"], tags: ["literary", "connectors"],
    },
    {
      id: "parte-del-leone", type: "phrase", pos: "phrase", target: "fare la parte del leone",
      gloss: { es: "llevarse la mejor parte", en: "to take the lion's share" },
      distractors: ["fare il leone della parte", "fare la parte di leone", "fare la porta del leone"],
      tags: ["idioms"],
    },
    {
      id: "cresta-dellonda", type: "phrase", pos: "phrase", target: "essere sulla cresta dell'onda",
      gloss: { es: "estar en la cresta de la ola, en pleno éxito", en: "to be riding high" },
      distractors: ["essere sulla cresta del mare", "essere nella cresta dell'onda", "essere sulla testa dell'onda"],
      tags: ["idioms"],
    },
    {
      id: "canto-del-cigno", type: "phrase", pos: "phrase", target: "il canto del cigno",
      gloss: { es: "el canto del cisne (la última obra)", en: "the swan song" },
      distractors: ["il canto della cicogna", "il canto dei cigni", "il conto del cigno"],
      tags: ["idioms", "culture"],
    },
    {
      id: "rendere-omaggio", type: "phrase", pos: "phrase", target: "rendere omaggio a",
      gloss: { es: "rendir homenaje a", en: "to pay tribute to" },
      distractors: ["dare omaggio a", "rendere omaggio di", "rendere l'omaggio a"],
      tags: ["culture", "chunk"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "michelangelo-impiego", type: "sentence", target: "Michelangelo impiegò quattro anni per dipingere la volta della Cappella Sistina.",
      gloss: { es: "Miguel Ángel tardó cuatro años en pintar la bóveda de la Capilla Sixtina.", en: "Michelangelo took four years to paint the Sistine Chapel ceiling." },
      distractors: ["dipinse", "ha", "Capella"],
      grammar: ["it-g-passato-remoto-forme"], tags: ["art", "passato-remoto"],
    },
    {
      id: "opera-fu-commissionata", type: "sentence", target: "L'opera fu commissionata da un ricco mercante fiorentino.",
      gloss: { es: "La obra fue encargada por un rico comerciante florentino.", en: "The work was commissioned by a wealthy Florentine merchant." },
      errors: [{ text: "L'opera fu commissionata per un ricco mercante fiorentino.", feedback: { es: "El agente de la pasiva va con «da», no con «per».", en: "The agent of a passive takes da, not per." }, ruleId: "it-g-passivo-essere" }],
      distractors: ["commissionato", "per", "era"],
      grammar: ["it-g-passivo-essere", "it-g-passato-remoto-forme"], tags: ["art", "passive"],
    },
    {
      id: "dopo-che-ebbe-terminato", type: "sentence", target: "Dopo che ebbe terminato l'affresco, il pittore partì per Roma.",
      gloss: { es: "Una vez terminado el fresco, el pintor partió hacia Roma.", en: "Once he had finished the fresco, the painter left for Rome." },
      errors: [{ text: "Dopo che ha terminato l'affresco, il pittore partì per Roma.", feedback: { es: "Con un passato remoto (partì), lo anterior tras «dopo che» va en trapassato remoto: ebbe terminato.", en: "With a passato remoto (partì), the earlier action after 'dopo che' takes the trapassato remoto: ebbe terminato." }, ruleId: "it-g-trapassato-remoto" }],
      distractors: ["aveva", "partito", "a"],
      grammar: ["it-g-trapassato-remoto"], tags: ["art", "passato-remoto"],
    },
    {
      id: "non-appena-mostra", type: "sentence", target: "Non appena la mostra fu inaugurata, le critiche si moltiplicarono.",
      gloss: { es: "Apenas se inauguró la exposición, se multiplicaron las críticas.", en: "As soon as the exhibition opened, criticism poured in." },
      distractors: ["è", "moltiplicano", "critica"],
      grammar: ["it-g-passato-remoto-forme"], tags: ["art", "passato-remoto"],
    },
    {
      id: "egli-si-reco", type: "sentence", target: "Egli si recò a Venezia, ove rimase fino alla morte.",
      gloss: { es: "Se trasladó a Venecia, donde permaneció hasta su muerte.", en: "He went to Venice, where he remained until his death." },
      distractors: ["recava", "ovunque", "alle"],
      grammar: ["it-g-registro-letterario", "it-g-passato-remoto-forme"], tags: ["literary", "passato-remoto"],
    },
    {
      id: "pittore-nonche-scultore", type: "sentence", target: "Fu pittore nonché scultore e architetto.",
      gloss: { es: "Fue pintor, además de escultor y arquitecto.", en: "He was a painter as well as a sculptor and architect." },
      distractors: ["È", "neanche", "scultura"],
      grammar: ["it-g-registro-letterario"], tags: ["art", "literary"],
    },
    {
      id: "sulla-cresta-romanzo", type: "sentence", target: "Con quel romanzo l'autrice era sulla cresta dell'onda.",
      gloss: { es: "Con esa novela la autora estaba en pleno éxito.", en: "With that novel the author was riding high." },
      distractors: ["nella", "onde", "del"],
      tags: ["culture", "idioms"],
    },
    {
      id: "mostra-rende-omaggio", type: "sentence", target: "La mostra rende omaggio a una pittrice dimenticata.",
      gloss: { es: "La exposición rinde homenaje a una pintora olvidada.", en: "The exhibition pays tribute to a forgotten woman painter." },
      distractors: ["rendere", "pittore", "dimenticato"],
      tags: ["art", "culture"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-trapassato-remoto", type: "pattern", target: "dopo che ebbe finito, uscì · appena fu arrivata, telefonò",
      gloss: { es: "trapassato remoto en la narración", en: "the trapassato remoto in narrative" },
      pattern: {
        rule: {
          es: "En un relato en passato remoto, la acción que termina justo antes, tras dopo che, (non) appena o quando, va en trapassato remoto: ebbe / fu + participio.",
          en: "In a passato remoto narrative, the action finished just before, after dopo che, (non) appena or quando, takes the trapassato remoto: ebbe / fu + participle.",
        },
        table: [["avere", "dopo che ebbe finito, uscì"], ["essere", "appena fu arrivata, telefonò"]],
      },
      question: {
        prompt: { es: "Completa (registro escrito): «Dopo che ___ la lettera, la regina scoppiò a piangere.»", en: "Complete (written register): 'Dopo che ___ la lettera, la regina scoppiò a piangere.'" },
        options: ["ebbe letto", "ha letto", "avrà letto", "abbia letto"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-trapassato-remoto"], tags: ["grammar", "passato-remoto"],
    },
    {
      id: "pat-registro-letterario", type: "pattern", target: "egli · ove · giacché · nonché · sovente · recarsi",
      gloss: { es: "palabras del registro literario y sus equivalentes neutros", en: "literary words and their neutral equivalents" },
      pattern: {
        rule: {
          es: "El italiano culto tiene equivalentes de muchas palabras comunes: egli (lui), ove (dove), giacché (perché), nonché (e anche), sovente (spesso), recarsi (andare). Se reconocen al leer; al hablar suenan afectados.",
          en: "Formal Italian has twins for many common words: egli (lui), ove (dove), giacché (perché), nonché (e anche), sovente (spesso), recarsi (andare). Recognise them when reading; in speech they sound affected.",
        },
        table: [["lui", "egli"], ["dove", "ove"], ["perché", "giacché"], ["spesso", "sovente"], ["andare", "recarsi"]],
      },
      question: {
        prompt: { es: "«Giacché era tardi, se ne andò» significa…", en: "'Giacché era tardi, se ne andò' means…" },
        options: [
          { es: "Como era tarde, se fue.", en: "Since it was late, he left." },
          { es: "Aunque era tarde, se fue.", en: "Although it was late, he left." },
          { es: "Cuando ya era tarde, se fue.", en: "When it was already late, he left." },
          { es: "Antes de que fuera tarde, se fue.", en: "He left before it got late." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-registro-letterario"], tags: ["grammar", "literary"],
    },
    {
      id: "pat-passato-remoto-irregolare", type: "pattern", target: "nacque · visse · dipinse · morì",
      gloss: { es: "passato remoto en las biografías", en: "the passato remoto in biographies" },
      pattern: {
        rule: {
          es: "Las biografías y la historia del arte se cuentan en passato remoto. Muchos verbos frecuentes son irregulares en lui y loro: nacque / nacquero, visse / vissero, dipinse / dipinsero.",
          en: "Biographies and art history are told in the passato remoto. Many common verbs are irregular in lui and loro: nacque / nacquero, visse / vissero, dipinse / dipinsero.",
        },
        table: [["nascere", "nacque"], ["vivere", "visse"], ["dipingere", "dipinse"], ["morire", "morì"]],
      },
      question: {
        prompt: { es: "Elige el passato remoto de «nascere» (lui):", en: "Pick the passato remoto of 'nascere' (lui):" },
        options: ["nacque", "nascé", "nasse", "nascì"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-passato-remoto-forme"], tags: ["grammar", "passato-remoto"],
    },
    {
      id: "tab-passato-remoto-lui", type: "paradigm", target: "passato remoto: lui / lei",
      gloss: { es: "passato remoto irregular (lui / lei)", en: "irregular passato remoto (lui / lei)" },
      grammar: ["it-g-passato-remoto-forme"],
      paradigm: {
        caption: { es: "Escribe la forma de lui / lei", en: "Write the lui / lei form" },
        cells: [
          { label: "fare", answer: "fece", ruleId: "it-g-passato-remoto-forme" },
          { label: "dire", answer: "disse", ruleId: "it-g-passato-remoto-forme" },
          { label: "vedere", answer: "vide", ruleId: "it-g-passato-remoto-forme" },
          { label: "nascere", answer: "nacque", ruleId: "it-g-passato-remoto-forme" },
          { label: "dipingere", answer: "dipinse", ruleId: "it-g-passato-remoto-forme" },
          { label: "vivere", answer: "visse", ruleId: "it-g-passato-remoto-forme" },
        ],
      },
      tags: ["grammar", "passato-remoto", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-artemisia", type: "listening",
      target: "Artemisia Gentileschi nacque a Roma alla fine del Cinquecento. Dopo che ebbe imparato il mestiere nella bottega del padre, si trasferì a Firenze, dove fu la prima donna ammessa all'Accademia delle Arti del Disegno.",
      gloss: {
        es: "Artemisia Gentileschi nació en Roma a fines del siglo dieciséis. Tras aprender el oficio en el taller de su padre, se mudó a Florencia, donde fue la primera mujer admitida en la Academia de las Artes del Dibujo.",
        en: "Artemisia Gentileschi was born in Rome in the late sixteenth century. Having learnt her craft in her father's workshop, she moved to Florence, where she became the first woman admitted to the Academy of the Arts of Drawing.",
      },
      question: {
        prompt: { es: "¿Qué logró en Florencia?", en: "What did she achieve in Florence?" },
        options: [
          { es: "Fue la primera mujer admitida en la Academia.", en: "She was the first woman admitted to the Academy." },
          { es: "Abrió un taller con su padre.", en: "She opened a workshop with her father." },
          { es: "Pintó la cúpula de la catedral.", en: "She painted the cathedral dome." },
          { es: "Fundó una academia de arte.", en: "She founded an art academy." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["it-g-trapassato-remoto"], tags: ["listening", "art", "passato-remoto"],
    },
    {
      id: "dlg-mostra", type: "dialogue", register: "informal", target: "Che te ne pare della mostra?",
      gloss: { es: "¿Qué te parece la exposición?", en: "What do you make of the exhibition?" },
      turns: [
        { who: "A", target: "Allora, che te ne pare della mostra?", gloss: { es: "¿Y? ¿Qué te parece la exposición?", en: "So, what do you make of the exhibition?" } },
        { who: "B", target: "L'allestimento è splendido, ma le didascalie sono scritte in un italiano un po' aulico.", gloss: { es: "El montaje es espléndido, pero los textos de las obras están escritos en un italiano un poco rebuscado.", en: "The staging is superb, but the labels are written in rather lofty Italian." } },
        { who: "A", target: "Tipo?", gloss: { es: "¿Por ejemplo?", en: "Like what?" } },
        { who: "B", target: "Tipo: egli si recò ove la luce era più viva. Sembra un libro dell'Ottocento!", gloss: { es: "Por ejemplo: «se dirigió adonde la luz era más intensa». ¡Parece un libro del siglo diecinueve!", en: "Like: 'he betook himself where the light was brightest'. It sounds like a nineteenth-century book!" } },
      ],
      question: {
        prompt: { es: "¿Qué le molesta a B?", en: "What bothers B?" },
        options: [
          { es: "Que los textos de las obras tengan un estilo muy rebuscado.", en: "That the labels are written in a very lofty style." },
          { es: "Que el montaje sea feo.", en: "That the staging is ugly." },
          { es: "Que haya poca luz en las salas.", en: "That the rooms are too dark." },
          { es: "Que la entrada sea muy cara.", en: "That the ticket is very expensive." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-registro-letterario"], tags: ["dialogue", "art", "register"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-bottega", type: "bridge", onlyFor: "es", target: "la bottega",
      gloss: { es: "el taller (de un artista o artesano); la tienda pequeña", en: "the (artist's) workshop; a small shop" },
      question: {
        prompt: { es: "«Leonardo si formò nella bottega del Verrocchio» significa…", en: "'Leonardo si formò nella bottega del Verrocchio' means…" },
        options: [
          { es: "Leonardo se formó en el taller de Verrocchio.", en: "Leonardo trained in Verrocchio's workshop." },
          { es: "Leonardo se formó en la bodega de vinos de Verrocchio.", en: "Leonardo trained in Verrocchio's wine cellar." },
          { es: "Leonardo se formó en el depósito de Verrocchio.", en: "Leonardo trained in Verrocchio's warehouse." },
          { es: "Leonardo se formó en la galería de Verrocchio.", en: "Leonardo trained in Verrocchio's gallery." },
        ],
        answer: 0,
      },
      note: { es: "Una bodega de vinos es «una cantina»; un depósito es «un magazzino»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "art"],
    },
  ]),
};
