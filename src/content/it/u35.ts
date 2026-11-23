import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "it-u35",
  lang: "it",
  index: 35,
  cefr: "C2",
  title: { target: "Proverbi e sottintesi", es: "Refranes y sobreentendidos", en: "Proverbs and what goes unsaid" },
  canDo: [
    { es: "Entiendo y uso refranes frecuentes, también cuando se citan a medias.", en: "I can understand and use common proverbs, even when only half is quoted." },
    { es: "Capto la ironía de la litote y la antífrasis.", en: "I can catch irony expressed through litotes and antiphrasis." },
    { es: "Elijo modismos adecuados a la situación y al registro.", en: "I can choose idioms that suit the situation and register." },
  ],
  icon: "🦉",
  items: build("it", 35, "C2", [
    // ── Vocabulary ───────────────────────────────────────────
    {
      id: "chi-va-piano", type: "phrase", pos: "phrase", target: "Chi va piano va sano e va lontano.",
      gloss: { es: "Despacio se llega lejos.", en: "Slow and steady wins the race." },
      distractors: ["Chi va piano va lontano e sano.", "Chi va sano va piano e va lontano.", "Chi va piano non va lontano."],
      grammar: ["it-g-proverbi"], tags: ["proverbs"],
    },
    {
      id: "tra-il-dire-e-il-fare", type: "phrase", pos: "phrase", target: "Tra il dire e il fare c'è di mezzo il mare.",
      gloss: { es: "Del dicho al hecho hay mucho trecho.", en: "Easier said than done." },
      accept: [{ text: "Fra il dire e il fare c'è di mezzo il mare." }],
      distractors: ["Tra il fare e il dire c'è di mezzo il mare.", "Tra il dire e il fare c'è di mezzo il monte.", "Tra il dire e il fare c'è di mezzo la terra."],
      grammar: ["it-g-proverbi"], tags: ["proverbs"],
    },
    {
      id: "chi-la-fa-laspetti", type: "phrase", pos: "phrase", target: "Chi la fa l'aspetti.",
      gloss: { es: "El que la hace la paga.", en: "What goes around comes around." },
      distractors: ["Chi lo fa l'aspetti.", "Chi la fa l'aspetta.", "Chi la fa se l'aspetti."],
      note: { es: "aspetti es congiuntivo: «que lo espere».", en: "aspetti is subjunctive: 'let him expect it'." },
      grammar: ["it-g-proverbi", "it-g-congiuntivo-indipendente"], tags: ["proverbs"],
    },
    {
      id: "non-tutte-le-ciambelle", type: "phrase", pos: "phrase", target: "Non tutte le ciambelle riescono col buco.",
      gloss: { es: "No siempre las cosas salen como uno quiere.", en: "Things don't always turn out as planned." },
      distractors: ["Non tutte le ciambelle hanno il buco.", "Non tutti i buchi riescono con la ciambella.", "Tutte le ciambelle riescono col buco."],
      grammar: ["it-g-proverbi"], tags: ["proverbs"],
    },
    {
      id: "paese-che-vai", type: "phrase", pos: "phrase", target: "Paese che vai, usanza che trovi.",
      gloss: { es: "Donde fueres, haz lo que vieres.", en: "When in Rome, do as the Romans do." },
      distractors: ["Paese che trovi, usanza che vai.", "Paese che vedi, usanza che trovi.", "Città che vai, usanza che trovi."],
      grammar: ["it-g-proverbi"], tags: ["proverbs"],
    },
    {
      id: "campa-cavallo", type: "phrase", pos: "phrase", register: "informal", target: "Campa cavallo che l'erba cresce!",
      gloss: { es: "¡Espera sentado!", en: "Don't hold your breath!" },
      distractors: ["Campa cavallo che l'erba muore!", "Corri cavallo che l'erba cresce!", "Campa cavallo che il fieno cresce!"],
      grammar: ["it-g-proverbi"], tags: ["proverbs", "irony"],
    },
    {
      id: "il-troppo-stroppia", type: "phrase", pos: "phrase", target: "Il troppo stroppia.",
      gloss: { es: "Todo exceso es malo.", en: "Too much of a good thing is bad." },
      distractors: ["Il troppo stanca.", "Il poco stroppia.", "Il troppo stroppa."],
      grammar: ["it-g-proverbi"], tags: ["proverbs"],
    },
    {
      id: "labito-non-fa-il-monaco", type: "phrase", pos: "phrase", target: "L'abito non fa il monaco.",
      gloss: { es: "El hábito no hace al monje.", en: "Don't judge a book by its cover." },
      distractors: ["L'abito fa il monaco.", "Il monaco non fa l'abito.", "L'abito non fa il prete."],
      grammar: ["it-g-proverbi"], tags: ["proverbs"],
    },
    {
      id: "lucciole-per-lanterne", type: "phrase", pos: "phrase", target: "prendere lucciole per lanterne",
      gloss: { es: "entender una cosa por otra, confundirse por completo", en: "to get hold of the wrong end of the stick" },
      distractors: ["prendere lanterne per lucciole", "prendere lucciole per candele", "vedere lucciole per lanterne"],
      tags: ["idioms"],
    },
    {
      id: "orecchie-da-mercante", type: "phrase", pos: "phrase", target: "fare orecchie da mercante",
      gloss: { es: "hacerse el sordo", en: "to turn a deaf ear" },
      distractors: ["fare orecchie da mercato", "avere orecchie da mercante", "fare l'orecchio da mercante"],
      tags: ["idioms"],
    },
    {
      id: "colpo-al-cerchio", type: "phrase", pos: "phrase", target: "dare un colpo al cerchio e uno alla botte",
      gloss: { es: "quedar bien con todos, nadar entre dos aguas", en: "to keep both sides happy" },
      distractors: ["dare un colpo alla botte e uno al barile", "dare un colpo al cerchio e uno al centro", "dare due colpi al cerchio"],
      tags: ["idioms"],
    },
    {
      id: "sottinteso", type: "word", pos: "noun", target: "il sottinteso", gender: "m", plural: "i sottintesi",
      gloss: { es: "el sobreentendido, la insinuación", en: "the implication, what's left unsaid" },
      distractors: ["il sottofondo", "il sottoscritto", "il sottopassaggio"],
      note: { es: "Parlare per sottintesi = hablar con indirectas.", en: "Parlare per sottintesi = to speak in hints." },
      grammar: ["it-g-litote-antifrasi"], tags: ["irony"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "chi-dorme-alzati", type: "sentence", register: "informal", target: "Chi dorme non piglia pesci, quindi alzati!",
      gloss: { es: "Camarón que se duerme se lo lleva la corriente, ¡así que levántate!", en: "The early bird catches the worm, so get up!" },
      distractors: ["dormi", "pesce", "alza"],
      grammar: ["it-g-proverbi"], tags: ["proverbs"],
    },
    {
      id: "chi-ha-orecchie", type: "sentence", target: "Chi ha orecchie per intendere, intenda.",
      gloss: { es: "El que tenga oídos, que oiga.", en: "Let those who have ears hear." },
      errors: [{ text: "Chi ha orecchie per intendere, intende.", feedback: { es: "Es una exhortación: va en congiuntivo, intenda.", en: "It's an exhortation, so it takes the subjunctive: intenda." }, ruleId: "it-g-congiuntivo-indipendente" }],
      distractors: ["intende", "orecchi", "capisca"],
      grammar: ["it-g-proverbi", "it-g-congiuntivo-indipendente"], tags: ["proverbs", "congiuntivo"],
    },
    {
      id: "non-e-un-genio", type: "sentence", target: "Non è proprio un genio, diciamo.",
      gloss: { es: "No es precisamente un genio, digamos.", en: "He's not exactly a genius, let's say." },
      distractors: ["genia", "dico", "propria"],
      grammar: ["it-g-litote-antifrasi"], tags: ["irony"],
    },
    {
      id: "complimenti-bel-lavoro", type: "sentence", register: "informal", target: "Complimenti, davvero un bel lavoro!",
      gloss: { es: "¡Felicitaciones, qué buen trabajo! (irónico)", en: "Congratulations, really nice work! (ironic)" },
      distractors: ["Complimento", "bello", "lavori"],
      grammar: ["it-g-litote-antifrasi"], tags: ["irony"],
    },
    {
      id: "simpatico-quando-ti-arrabbi", type: "sentence", register: "informal", target: "Quanto sei simpatico quando ti arrabbi!",
      gloss: { es: "¡Qué simpático eres cuando te enojas! (irónico)", en: "Aren't you charming when you're angry! (ironic)" },
      accept: [{ text: "Quanto sei simpatica quando ti arrabbi!" }],
      distractors: ["Quanta", "arrabbia", "simpatici"],
      grammar: ["it-g-litote-antifrasi"], tags: ["irony"],
    },
    {
      id: "orecchie-da-mercante-frase", type: "sentence", target: "Gli ho parlato per un'ora, ma ha fatto orecchie da mercante.",
      gloss: { es: "Le hablé durante una hora, pero se hizo el sordo.", en: "I talked to him for an hour, but he turned a deaf ear." },
      distractors: ["fatte", "orecchi", "mercato"],
      tags: ["idioms"],
    },
    {
      id: "lucciole-riunione", type: "sentence", target: "Hai preso lucciole per lanterne: la riunione è domani.",
      gloss: { es: "Entendiste todo al revés: la reunión es mañana.", en: "You've got the wrong end of the stick: the meeting is tomorrow." },
      distractors: ["presa", "lanterna", "ieri"],
      tags: ["idioms"],
    },
    {
      id: "capo-cerchio-botte", type: "sentence", target: "Il nuovo capo dà un colpo al cerchio e uno alla botte.",
      gloss: { es: "El nuevo jefe intenta quedar bien con todos.", en: "The new boss tries to keep everyone happy." },
      distractors: ["da", "botti", "cerchi"],
      tags: ["idioms", "work"],
    },

    // ── Patterns & table ─────────────────────────────────────
    {
      id: "pat-chi-proverbi", type: "pattern", target: "Chi dorme non piglia pesci · Chi tace acconsente",
      gloss: { es: "chi en los refranes: «el que…»", en: "chi in proverbs: 'whoever…'" },
      pattern: {
        rule: {
          es: "Muchos refranes empiezan con chi (= el que, quien) y el verbo va siempre en singular. No se cambian las palabras, aunque suenen antiguas (piglia, col).",
          en: "Many proverbs start with chi (= whoever) and the verb is always singular. The words never change, even if they sound old (piglia, col).",
        },
        table: [["Chi dorme", "non piglia pesci."], ["Chi tace", "acconsente."], ["Chi tardi arriva", "male alloggia."]],
      },
      question: {
        prompt: { es: "Completa el refrán: «Chi tardi ___, male alloggia.»", en: "Complete the proverb: 'Chi tardi ___, male alloggia.'" },
        options: ["arriva", "arrivano", "arrivi", "arrivato"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-proverbi"], tags: ["grammar", "proverbs"],
    },
    {
      id: "pat-proverbi-troncati", type: "pattern", target: "Chi la fa… · Tra il dire e il fare… · Paese che vai…",
      gloss: { es: "refranes citados a medias", en: "proverbs quoted only in part" },
      pattern: {
        rule: {
          es: "Al hablar se suele decir solo el comienzo del refrán: quien escucha completa el resto, y ahí está el mensaje.",
          en: "In speech people often say only the start of a proverb: the listener supplies the rest, and that's where the message is.",
        },
        table: [["Chi la fa…", "l'aspetti."], ["Tra il dire e il fare…", "c'è di mezzo il mare."], ["Campa cavallo…", "che l'erba cresce."]],
      },
      question: {
        prompt: { es: "Alguien dice «Eh, tra il dire e il fare…». Quiere decir que…", en: "Someone says 'Eh, tra il dire e il fare…'. They mean that…" },
        options: [
          { es: "hacerlo será más difícil que decirlo", en: "doing it will be harder than saying it" },
          { es: "ya está hecho", en: "it's already done" },
          { es: "prefiere ir al mar", en: "they'd rather go to the seaside" },
          { es: "es mejor no decir nada", en: "it's better to say nothing" },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-proverbi"], tags: ["grammar", "proverbs"],
    },
    {
      id: "pat-litote-antifrasi", type: "pattern", target: "non è un genio · non mi è dispiaciuto · complimenti!",
      gloss: { es: "ironía con litote y antífrasis", en: "irony through litotes and antiphrasis" },
      pattern: {
        rule: {
          es: "La litote niega lo contrario para suavizar (non mi è dispiaciuto = me gustó); la antífrasis dice lo opuesto de lo que se piensa (Complimenti! ante un desastre).",
          en: "Litotes denies the opposite to soften (non mi è dispiaciuto = I liked it); antiphrasis says the opposite of what's meant (Complimenti! at a disaster).",
        },
        table: [["Non è un genio.", "È poco intelligente."], ["Non mi è dispiaciuto.", "Mi è piaciuto."], ["Bel lavoro!", "Che disastro!"]],
      },
      question: {
        prompt: { es: "«Il film non mi è dispiaciuto» quiere decir…", en: "'Il film non mi è dispiaciuto' means…" },
        options: [
          { es: "Me gustó bastante.", en: "I quite liked it." },
          { es: "No me gustó nada.", en: "I didn't like it at all." },
          { es: "Me dio pena.", en: "It made me sad." },
          { es: "No lo vi.", en: "I didn't see it." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-litote-antifrasi"], tags: ["grammar", "irony"],
    },
    {
      id: "tab-proverbi-chi", type: "paradigm", target: "Completa il proverbio",
      gloss: { es: "refranes con chi", en: "proverbs with chi" },
      grammar: ["it-g-proverbi"],
      paradigm: {
        caption: { es: "Completa el refrán", en: "Finish the proverb" },
        cells: [
          { label: "Chi la fa…", answer: "l'aspetti", ruleId: "it-g-proverbi" },
          { label: "Chi tace…", answer: "acconsente", ruleId: "it-g-proverbi" },
          { label: "Chi dorme…", answer: "non piglia pesci", ruleId: "it-g-proverbi" },
          { label: "Chi trova un amico…", answer: "trova un tesoro", ruleId: "it-g-proverbi" },
          { label: "Chi semina vento…", answer: "raccoglie tempesta", ruleId: "it-g-proverbi" },
          { label: "Chi tardi arriva…", answer: "male alloggia", ruleId: "it-g-proverbi" },
        ],
      },
      tags: ["grammar", "proverbs", "table"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-cugino-ristorante", type: "listening",
      target: "Mio cugino voleva aprire un ristorante in tre mesi. Gli ho detto: guarda che tra il dire e il fare… Lui ha fatto orecchie da mercante. Sono passati due anni e il ristorante non c'è ancora. Ogni volta che lo vedo gli chiedo quando inaugura, e lui risponde: presto, presto. Sì, campa cavallo!",
      gloss: {
        es: "Mi primo quería abrir un restaurante en tres meses. Le dije: mira que del dicho al hecho… Él se hizo el sordo. Pasaron dos años y el restaurante todavía no existe. Cada vez que lo veo le pregunto cuándo inaugura, y él contesta: pronto, pronto. Sí, ¡espera sentado!",
        en: "My cousin wanted to open a restaurant in three months. I told him: look, easier said than done… He turned a deaf ear. Two years on, there's still no restaurant. Every time I see him I ask when he's opening, and he says: soon, soon. Yeah, don't hold your breath!",
      },
      question: {
        prompt: { es: "¿Qué piensa quien habla?", en: "What does the speaker think?" },
        options: [
          { es: "Que el restaurante tardará muchísimo o nunca abrirá.", en: "That the restaurant will take ages or never open." },
          { es: "Que su primo lo abrirá muy pronto.", en: "That his cousin will open it very soon." },
          { es: "Que el restaurante fue un éxito.", en: "That the restaurant was a success." },
          { es: "Que su primo debería abrir una granja.", en: "That his cousin should open a farm." },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], grammar: ["it-g-proverbi"], tags: ["listening", "proverbs", "irony"],
    },
    {
      id: "dlg-gita", type: "dialogue", register: "informal", target: "Grazie, sei sempre così delicato!",
      gloss: { es: "¡Gracias, siempre tan delicado!", en: "Thanks, tactful as ever!" },
      turns: [
        { who: "A", target: "Ho saputo della gita: pioveva, il pullman si è rotto e il ristorante era chiuso.", gloss: { es: "Me enteré de la excursión: llovía, el autobús se descompuso y el restaurante estaba cerrado.", en: "I heard about the trip: it rained, the coach broke down and the restaurant was closed." } },
        { who: "B", target: "Eh, non tutte le ciambelle riescono col buco.", gloss: { es: "Bueno, no siempre sale todo como uno quiere.", en: "Well, things don't always go to plan." } },
        { who: "A", target: "Diciamo che non è stata la tua gita migliore.", gloss: { es: "Digamos que no fue tu mejor excursión.", en: "Let's say it wasn't your finest trip." } },
        { who: "B", target: "Grazie, sei sempre così delicato!", gloss: { es: "¡Gracias, siempre tan delicado!", en: "Thanks, tactful as ever!" } },
      ],
      question: {
        prompt: { es: "¿Cómo habla B en su última frase?", en: "How is B speaking in the last line?" },
        options: [
          { es: "Con ironía: en realidad A fue poco delicado.", en: "Ironically: A actually wasn't tactful at all." },
          { es: "Con sinceridad: agradece el apoyo de A.", en: "Sincerely: B is grateful for A's support." },
          { es: "Con tristeza: B quiere cancelar la próxima excursión.", en: "Sadly: B wants to cancel the next trip." },
          { es: "Con enojo: B no quiere hablar más con A.", en: "Angrily: B never wants to speak to A again." },
        ],
        answer: 0,
      },
      exercises: ["question"], grammar: ["it-g-litote-antifrasi"], tags: ["dialogue", "irony"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-piove-sul-bagnato", type: "bridge", onlyFor: "es", target: "piove sul bagnato",
      gloss: { es: "a quien ya tiene mucho, le llega todavía más", en: "the rich get richer, luck goes to the lucky" },
      question: {
        prompt: { es: "«Ha vinto la lotteria ed era già milionario: piove sul bagnato!» Significa…", en: "'Ha vinto la lotteria ed era già milionario: piove sul bagnato!' means…" },
        options: [
          { es: "La suerte le toca a quien ya tiene mucho.", en: "Luck goes to someone who already has plenty." },
          { es: "Una desgracia se suma a otra.", en: "One misfortune piles on another." },
          { es: "Al final todo se arregla.", en: "Everything works out in the end." },
          { es: "Ganar es cuestión de paciencia.", en: "Winning is a matter of patience." },
        ],
        answer: 0,
      },
      note: { es: "En español «llueve sobre mojado» habla de desgracias; en italiano suele referirse a la suerte de quien ya tiene mucho." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "idioms"],
    },
  ]),
};
