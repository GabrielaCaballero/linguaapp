import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u22",
  lang: "it",
  index: 22,
  cefr: "B2",
  title: { target: "Arte e cultura", es: "Arte y cultura", en: "Art and culture" },
  canDo: [
    { es: "Puedo hablar de libros, cuadros, obras de teatro y su historia.", en: "I can talk about books, paintings, plays and their history." },
    { es: "Puedo entender textos y audioguías que usan el passato remoto.", en: "I can understand texts and audio guides that use the passato remoto." },
    { es: "Sé usar benché, affinché, purché y prima che con congiuntivo.", en: "I can use benché, affinché, purché and prima che with the subjunctive." },
  ],
  icon: "🎨",
  items: build("it", 22, "B2", [
    // ── Art words ────────────────────────────────────────────
    {
      id: "opera", type: "word", pos: "noun", target: "l'opera", gender: "f", plural: "le opere",
      gloss: { es: "la obra (de arte) / la ópera", en: "the work (of art) / the opera" },
      distractors: ["l'operaio", "l'operazione", "l'ora"],
      tags: ["art"],
    },
    {
      id: "quadro", type: "word", pos: "noun", target: "il quadro", gender: "m", plural: "i quadri",
      gloss: { es: "el cuadro", en: "the painting" },
      distractors: ["il quaderno", "la quadra", "il quarto"],
      tags: ["art"],
    },
    {
      id: "capolavoro", type: "word", pos: "noun", target: "il capolavoro", gender: "m", plural: "i capolavori",
      gloss: { es: "la obra maestra", en: "the masterpiece" },
      distractors: ["il capoluogo", "il capolinea", "il lavoro"],
      note: { es: "Ojo: il capoluogo = la capital de una región o provincia.", en: "Careful: il capoluogo = regional or provincial capital." },
      tags: ["art"],
    },
    {
      id: "scrittore", type: "word", pos: "noun", target: "lo scrittore", gender: "m", plural: "gli scrittori",
      gloss: { es: "el escritor / la escritora", en: "the writer" },
      accept: [{ text: "la scrittrice" }],
      distractors: ["il scrittore", "lo scrittoio", "lo scultore"],
      tags: ["art", "books"],
    },
    {
      id: "romanzo", type: "word", pos: "noun", target: "il romanzo", gender: "m", plural: "i romanzi",
      gloss: { es: "la novela", en: "the novel" },
      distractors: ["la romanza", "il romano", "il racconto"],
      tags: ["books"],
    },
    {
      id: "palcoscenico", type: "word", pos: "noun", target: "il palcoscenico", gender: "m", plural: "i palcoscenici",
      gloss: { es: "el escenario", en: "the stage" },
      distractors: ["il paesaggio", "il porticato", "la scenografia"],
      tags: ["art", "theatre"],
    },
    {
      id: "dipingere", type: "word", pos: "verb", target: "dipingere",
      gloss: { es: "pintar (un cuadro)", en: "to paint (a picture)" },
      forms: { pp: "dipinto", "pass. rem.": "dipinse" },
      distractors: ["dipendere", "spingere", "fingere"],
      note: { es: "Pintar una pared = pitturare / imbiancare.", en: "To paint a wall = pitturare / imbiancare." },
      tags: ["art"],
    },
    {
      id: "secolo", type: "word", pos: "noun", target: "il secolo", gender: "m", plural: "i secoli",
      gloss: { es: "el siglo", en: "the century" },
      distractors: ["il secchio", "la secolo", "il segnale"],
      note: { es: "Los siglos se nombran así: il Quattrocento = el siglo XV, il Novecento = el siglo XX.", en: "Centuries by hundreds: il Quattrocento = the 1400s, il Novecento = the 1900s." },
      tags: ["art", "history"],
    },
    {
      id: "nascere", type: "word", pos: "verb", target: "nascere",
      gloss: { es: "nacer", en: "to be born" },
      forms: { pp: "nato", aux: "essere", "pass. rem.": "nacque" },
      distractors: ["nascondere", "crescere", "nuocere"],
      tags: ["history"],
    },
    {
      id: "benche", type: "word", pos: "other", target: "benché",
      gloss: { es: "aunque (+ subjuntivo)", en: "although" },
      accept: [{ text: "sebbene" }],
      distractors: ["perché", "bensì", "benissimo"],
      note: { es: "Siempre con congiuntivo: benché sia tardi.", en: "Always with the subjunctive: benché sia tardi." },
      tags: ["connectors", "congiuntivo"],
    },
    {
      id: "affinche", type: "word", pos: "other", target: "affinché",
      gloss: { es: "para que", en: "so that" },
      distractors: ["finché", "affatto", "infatti"],
      tags: ["connectors", "congiuntivo"],
    },
    {
      id: "prima-che", type: "phrase", pos: "phrase", target: "prima che",
      gloss: { es: "antes de que", en: "before (+ clause)" },
      distractors: ["prima di che", "primo che", "appena che"],
      note: { es: "Sujeto distinto: prima che tu parta; mismo sujeto: prima di partire.", en: "Different subject: prima che tu parta; same subject: prima di partire." },
      tags: ["connectors", "congiuntivo"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "leonardo-nacque", type: "sentence", target: "Leonardo nacque nel 1452.",
      spoken: "Leonardo nacque nel millequattrocentocinquantadue.",
      gloss: { es: "Leonardo nació en 1452.", en: "Leonardo was born in 1452." },
      accept: [{ text: "Leonardo è nato nel 1452." }],
      distractors: ["nacqui", "nato", "naque"],
      note: { es: "Ojo a la ortografía: nacque (con -cq-).", en: "Spelling: nacque (with -cq-)." },
      tags: ["passato-remoto", "history"],
    },
    {
      id: "michelangelo-dipinse", type: "sentence", target: "Michelangelo dipinse la Cappella Sistina.",
      gloss: { es: "Miguel Ángel pintó la Capilla Sixtina.", en: "Michelangelo painted the Sistine Chapel." },
      accept: [{ text: "Michelangelo ha dipinto la Cappella Sistina." }],
      distractors: ["dipingeva", "dipinto", "dipinsi"],
      tags: ["passato-remoto", "art"],
    },
    {
      id: "benche-sia-difficile", type: "sentence", target: "Benché sia difficile, questo romanzo mi piace molto.",
      gloss: { es: "Aunque es difícil, esta novela me gusta mucho.", en: "Although it's difficult, I really like this novel." },
      accept: [{ text: "Sebbene sia difficile, questo romanzo mi piace molto." }],
      errors: [{ text: "Benché è difficile, questo romanzo mi piace molto.", feedback: { es: "benché va siempre con congiuntivo: benché sia.", en: "benché always takes the subjunctive: benché sia." } }],
      distractors: ["è", "romanza", "piaccio"],
      tags: ["congiuntivo", "books"],
    },
    {
      id: "affinche-tu-capisca", type: "sentence", register: "informal", target: "Te lo spiego affinché tu capisca.",
      gloss: { es: "Te lo explico para que entiendas.", en: "I'm explaining it so that you understand." },
      accept: [{ text: "Te lo spiego perché tu capisca." }],
      distractors: ["capisci", "finché", "Ti"],
      tags: ["congiuntivo"],
    },
    {
      id: "prima-che-piova", type: "sentence", target: "Usciamo prima che cominci a piovere.",
      gloss: { es: "Salgamos antes de que empiece a llover.", en: "Let's go out before it starts to rain." },
      errors: [{ text: "Usciamo prima che comincia a piovere.", feedback: { es: "prima che + congiuntivo: cominci.", en: "prima che takes the subjunctive: cominci." } }],
      distractors: ["comincia", "di", "piove"],
      tags: ["congiuntivo"],
    },
    {
      id: "quadro-piu-bello", type: "sentence", target: "È il quadro più bello che io abbia mai visto.",
      gloss: { es: "Es el cuadro más lindo que haya visto jamás.", en: "It's the most beautiful painting I've ever seen." },
      accept: [
        { text: "È il quadro più bello che abbia mai visto." },
        { text: "È il quadro più bello che ho mai visto.", verdict: "almost", feedback: { es: "Se dice así al hablar; en registro cuidado: che io abbia mai visto.", en: "Common in speech; in careful Italian: che io abbia mai visto." } },
      ],
      distractors: ["visti", "vista", "fosse"],
      tags: ["congiuntivo", "art"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-passato-remoto-forme", type: "pattern", target: "parlai · parlò · parlarono · ebbe · fece · disse",
      gloss: { es: "formas del passato remoto", en: "passato remoto forms" },
      pattern: {
        rule: {
          es: "Regulares: -ai, -asti, -ò, -ammo, -aste, -arono (parlare); -ei/-etti (credere); -ii (dormire). Muchos irregulares cambian solo en io, lui/lei y loro: ebbi, ebbe, ebbero.",
          en: "Regular: -ai, -asti, -ò, -ammo, -aste, -arono (parlare); -ei/-etti (credere); -ii (dormire). Many irregulars change only in io, lui/lei and loro: ebbi, ebbe, ebbero.",
        },
        table: [["", "parlare", "avere", "fare", "dipingere"], ["io", "parlai", "ebbi", "feci", "dipinsi"], ["lui / lei", "parlò", "ebbe", "fece", "dipinse"], ["loro", "parlarono", "ebbero", "fecero", "dipinsero"]],
      },
      question: {
        prompt: { es: "«Pintó» (lui, dipingere) es…", en: "'He painted' (dipingere, passato remoto) is…" },
        options: ["dipinse", "dipingé", "dipinto", "dipingeva"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "passato-remoto"],
    },
    {
      id: "pat-congiunzioni", type: "pattern", target: "benché · sebbene · affinché · purché · prima che · a meno che",
      gloss: { es: "conjunciones con congiuntivo", en: "conjunctions with the subjunctive" },
      pattern: {
        rule: {
          es: "Siempre van con congiuntivo: benché / sebbene (aunque), affinché (para que), purché (con tal de que), prima che (antes de que), a meno che (a menos que).",
          en: "Always followed by the subjunctive: benché / sebbene (although), affinché (so that), purché (provided that), prima che (before), a meno che (unless).",
        },
        table: [["benché", "Benché piova, esco."], ["purché", "Vengo purché tu guidi."], ["prima che", "Parto prima che faccia buio."], ["a meno che", "Vengo, a meno che non piova."]],
      },
      question: {
        prompt: { es: "Completa con «riportare»: «Ti presto la macchina purché tu la ___ entro sera.»", en: "Complete with 'riportare': 'Ti presto la macchina purché tu la ___ entro sera.'" },
        options: ["riporti", "riporta", "riporterai", "riportassi"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "congiuntivo"],
    },
    {
      id: "pat-superlativo", type: "pattern", target: "il più bello del mondo · il più bello che abbia mai visto",
      gloss: { es: "el superlativo relativo", en: "the relative superlative" },
      pattern: {
        rule: {
          es: "il / la più + adjetivo + di (+ artículo): la città più bella del mondo. Con «che» en registro cuidado va congiuntivo: il libro più bello che io abbia letto.",
          en: "il / la più + adjective + di (+ article): la città più bella del mondo. With 'che', careful Italian uses the subjunctive: il libro più bello che io abbia letto.",
        },
        table: [["di", "il museo più famoso d'Italia"], ["che + congiuntivo", "il film più bello che abbia visto"]],
      },
      question: {
        prompt: { es: "Completa: «È la città più bella ___ mondo.»", en: "Complete: 'È la città più bella ___ mondo.'" },
        options: ["del", "che", "nel", "di"],
        answer: 0,
      },
      exercises: ["question"], tags: ["grammar", "comparison"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-affresco", type: "listening",
      target: "Questo affresco fu dipinto nel Quattrocento e fu restaurato solo pochi anni fa. Per proteggerlo, è vietato usare il flash.",
      gloss: {
        es: "Este fresco fue pintado en el siglo XV y restaurado hace solo unos años. Para protegerlo, está prohibido usar el flash.",
        en: "This fresco was painted in the fifteenth century and restored only a few years ago. To protect it, flash photography is not allowed.",
      },
      question: {
        prompt: { es: "¿Qué está prohibido?", en: "What isn't allowed?" },
        options: [
          { es: "Usar el flash", en: "Using a flash" },
          { es: "Tocar el fresco", en: "Touching the fresco" },
          { es: "Hablar en voz alta", en: "Talking loudly" },
          { es: "Entrar con mochila", en: "Bringing in a backpack" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "art"],
    },
    {
      id: "dlg-teatro", type: "dialogue", register: "informal", target: "Ne vale la pena.",
      gloss: { es: "Vale la pena.", en: "It's worth it." },
      turns: [
        { who: "A", target: "Com'era lo spettacolo?", gloss: { es: "¿Qué tal estuvo la obra?", en: "How was the show?" } },
        { who: "B", target: "Bellissimo, anche se è durato tre ore!", gloss: { es: "¡Buenísima, aunque duró tres horas!", en: "Wonderful, even though it lasted three hours!" } },
        { who: "A", target: "Io non sono mai stato a teatro.", gloss: { es: "Yo nunca fui al teatro.", en: "I've never been to the theatre." } },
        { who: "B", target: "Dovresti andarci: ne vale la pena.", gloss: { es: "Deberías ir: vale la pena.", en: "You should go: it's worth it." } },
      ],
      question: {
        prompt: { es: "¿Cuánto duró el espectáculo?", en: "How long did the show last?" },
        options: [
          { es: "Tres horas", en: "Three hours" },
          { es: "Una hora", en: "One hour" },
          { es: "Dos horas", en: "Two hours" },
          { es: "No lo dice", en: "It doesn't say" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "theatre"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-romanzo", type: "bridge", onlyFor: "es", target: "il romanzo",
      gloss: { es: "la novela", en: "the novel" },
      question: {
        prompt: { es: "«Sto leggendo un romanzo» significa…", en: "'Sto leggendo un romanzo' means…" },
        options: [
          { es: "Estoy leyendo una novela.", en: "I'm reading a novel." },
          { es: "Estoy leyendo un romance.", en: "I'm reading a love story." },
          { es: "Estoy leyendo un poema.", en: "I'm reading a poem." },
          { es: "Estoy leyendo sobre los romanos.", en: "I'm reading about the Romans." },
        ],
        answer: 0,
      },
      note: { es: "il romanzo = la novela; una historia de amor es «una storia d'amore»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "books"],
    },
  ]),
};
