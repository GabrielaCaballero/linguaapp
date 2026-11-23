import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u08",
  lang: "fr",
  index: 8,
  cefr: "A1.2",
  title: { target: "Temps libre", es: "Tiempo libre", en: "Free time" },
  canDo: [
    { es: "Puedo hablar de lo que me gusta y no me gusta hacer.", en: "I can talk about what I like and don't like doing." },
    { es: "Puedo proponer un plan y aceptarlo o rechazarlo.", en: "I can suggest a plan and accept or turn it down." },
    { es: "Sé usar la negación ne… pas y «faire du / jouer au».", en: "I can use the negation ne… pas and faire du / jouer au." },
  ],
  icon: "🎾",
  items: build("fr", 8, "A1.2", [
    { id: "aimer", type: "word", pos: "verb", target: "aimer", gloss: { es: "gustar / querer (amar)", en: "to like / to love" }, distractors: ["aider", "aimant", "semer"], note: { es: "j'aime lire = me gusta leer; je t'aime = te quiero.", en: "j'aime lire = I like reading; je t'aime = I love you." }, tags: ["hobbies", "likes"] },
    { id: "adorer", type: "word", pos: "verb", target: "adorer", gloss: { es: "encantar", en: "to love (a thing or activity)" }, distractors: ["adopter", "odorer", "dorer"], tags: ["hobbies", "likes"] },
    { id: "detester", type: "word", pos: "verb", target: "détester", gloss: { es: "odiar, detestar", en: "to hate" }, distractors: ["déguster", "tester", "détecter"], tags: ["hobbies", "likes"] },
    { id: "lire", type: "word", pos: "verb", target: "lire", gloss: { es: "leer", en: "to read" }, distractors: ["rire", "lier", "lit"], tags: ["hobbies"] },
    { id: "nager", type: "word", pos: "verb", target: "nager", gloss: { es: "nadar", en: "to swim" }, distractors: ["neiger", "manger", "naviguer"], tags: ["hobbies", "sport"] },
    { id: "sortir", type: "word", pos: "verb", target: "sortir", gloss: { es: "salir", en: "to go out" }, distractors: ["sortie", "partir", "sourire"], note: { es: "Ojo: «salir» es sortir; «partir» es irse.", en: "sortir = go out; partir = leave." }, tags: ["hobbies"] },
    { id: "cinema", type: "word", pos: "noun", target: "le cinéma", gender: "m", plural: "les cinémas", gloss: { es: "el cine", en: "the cinema / movies" }, distractors: ["la cinéma", "le ciné-club", "le casino"], tags: ["hobbies"] },
    { id: "musique", type: "word", pos: "noun", target: "la musique", gender: "f", plural: "les musiques", gloss: { es: "la música", en: "the music" }, distractors: ["le musique", "le musée", "la mosquée"], tags: ["hobbies"] },
    { id: "foot", type: "word", pos: "noun", target: "le foot", gender: "m", plural: "les foots", gloss: { es: "el fútbol", en: "football / soccer" }, accept: [{ text: "le football" }], distractors: ["la foot", "le fond", "le foodball"], tags: ["sport"] },
    { id: "velo", type: "word", pos: "noun", target: "le vélo", gender: "m", plural: "les vélos", gloss: { es: "la bicicleta", en: "the bike" }, distractors: ["la vélo", "le voile", "le vol"], note: { es: "faire du vélo = andar en bici.", en: "faire du vélo = to cycle." }, tags: ["sport"] },
    { id: "souvent", type: "word", pos: "adv", target: "souvent", gloss: { es: "a menudo, seguido", en: "often" }, distractors: ["jamais", "sous", "suivant"], tags: ["frequency"] },
    { id: "jamais", type: "word", pos: "adv", target: "jamais", gloss: { es: "nunca", en: "never" }, distractors: ["toujours", "déjà", "mais"], note: { es: "Va con «ne»: je ne fume jamais.", en: "It goes with 'ne': je ne fume jamais." }, tags: ["frequency", "negation"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "jaime-lire", type: "sentence", target: "J'aime beaucoup lire.",
      gloss: { es: "Me gusta mucho leer.", en: "I really like reading." },
      accept: [{ text: "J'adore lire." }],
      errors: [{ text: "Je aime beaucoup lire.", feedback: { es: "je + vocal → j': j'aime.", en: "je + vowel → j': j'aime." } }],
      distractors: ["lis", "très", "me"],
      tags: ["likes"],
    },
    {
      id: "je-naime-pas", type: "sentence", target: "Je n'aime pas le football.",
      gloss: { es: "No me gusta el fútbol.", en: "I don't like football." },
      accept: [{ text: "Je n'aime pas le foot." }],
      errors: [{ text: "Je n'aime pas de football.", feedback: { es: "Con aimer/adorer/détester se mantiene el artículo: pas le football.", en: "With aimer/adorer/détester the article stays: pas le football." }, ruleId: "fr-g-negation" }],
      distractors: ["ne", "non", "du"],
      tags: ["likes", "negation"],
    },
    {
      id: "je-fais-du-sport", type: "sentence", target: "Je fais du sport le week-end.",
      gloss: { es: "Hago deporte los fines de semana.", en: "I do sport at the weekend." },
      errors: [{ text: "Je fais de le sport le week-end.", feedback: { es: "de + le = du.", en: "de + le = du." }, ruleId: "fr-g-contractions" }],
      distractors: ["fait", "de", "au"],
      tags: ["sport"],
    },
    {
      id: "je-joue-de-la-guitare", type: "sentence", target: "Je joue de la guitare.",
      gloss: { es: "Toco la guitarra.", en: "I play the guitar." },
      errors: [{ text: "Je joue la guitare.", feedback: { es: "Instrumentos: jouer de (du piano, de la guitare). Deportes: jouer à (au tennis).", en: "Instruments take jouer de (du piano, de la guitare). Sports take jouer à (au tennis)." }, ruleId: "fr-g-faire-jouer" }],
      distractors: ["à", "au", "fais"],
      tags: ["hobbies"],
    },
    {
      id: "on-va-au-cinema", type: "sentence", target: "On va au cinéma ce soir ?", register: "informal",
      gloss: { es: "¿Vamos al cine esta noche?", en: "Shall we go to the cinema tonight?" },
      accept: [{ text: "Tu veux aller au cinéma ce soir ?" }],
      distractors: ["à", "le", "va-t-on"],
      tags: ["plans"],
    },
    {
      id: "desole-je-ne-peux-pas", type: "phrase", pos: "phrase", target: "Désolé, je ne peux pas.",
      gloss: { es: "Lo siento, no puedo.", en: "Sorry, I can't." },
      accept: [{ text: "Désolée, je ne peux pas." }],
      distractors: ["Désolé, je ne peux.", "Désolé, je peux pas ne.", "Désolé, je n'ai pas."],
      note: { es: "Al hablar se omite a menudo el «ne»: je peux pas.", en: "In speech 'ne' is often dropped: je peux pas." },
      tags: ["plans", "chunk", "negation"],
    },
    {
      id: "bonne-idee", type: "phrase", pos: "phrase", target: "Bonne idée !",
      gloss: { es: "¡Buena idea!", en: "Good idea!" },
      distractors: ["Bon idée !", "Bien idée !", "Bonne idéal !"],
      note: { es: "idée es femenino: une bonne idée.", en: "idée is feminine: une bonne idée." },
      tags: ["plans", "chunk"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-negation", type: "pattern", target: "Je ne fume pas. · Je n'ai pas de voiture.",
      gloss: { es: "la negación ne… pas", en: "negation with ne… pas" },
      pattern: {
        rule: {
          es: "La negación rodea al verbo: ne + verbo + pas (ne → n' delante de vocal). Otras: ne… jamais (nunca), ne… rien (nada), ne… plus (ya no). Tras la negación, un/une/des/du se vuelven «de»: je n'ai pas de voiture.",
          en: "Negation wraps the verb: ne + verb + pas (ne → n' before a vowel). Others: ne… jamais (never), ne… rien (nothing), ne… plus (no longer). After a negative, un/une/des/du become 'de': je n'ai pas de voiture.",
        },
        table: [["je fume", "je ne fume pas"], ["j'aime", "je n'aime pas"], ["j'ai un vélo", "je n'ai pas de vélo"]],
      },
      question: {
        prompt: { es: "¿Cómo se dice «No tengo hijos»?", en: "How do you say 'I don't have children'?" },
        options: ["Je n'ai pas d'enfants.", "Je n'ai pas des enfants.", "Je ne pas ai d'enfants.", "Je n'ai d'enfants pas."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-negation"], tags: ["grammar", "negation"],
    },
    {
      id: "pat-faire-jouer", type: "pattern", target: "faire du vélo · jouer au tennis · jouer du piano",
      gloss: { es: "faire de, jouer à, jouer de", en: "faire de, jouer à, jouer de" },
      pattern: {
        rule: {
          es: "Actividades y deportes: faire + du / de la / des (faire du yoga, de la natation). Juegos y deportes de pelota: jouer à (au foot, aux cartes). Instrumentos: jouer de (du piano, de la guitare).",
          en: "Activities and sports: faire + du / de la / des (faire du yoga, de la natation). Games and ball sports: jouer à (au foot, aux cartes). Instruments: jouer de (du piano, de la guitare).",
        },
        table: [["faire", "du ski · de la danse"], ["jouer à", "au tennis · aux échecs"], ["jouer de", "du violon · de la flûte"]],
      },
      question: {
        prompt: { es: "Completa: «Mon fils joue ___ tennis.»", en: "Complete: 'Mon fils joue ___ tennis.'" },
        options: ["au", "du", "de la", "le"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-faire-jouer"], tags: ["grammar", "hobbies"],
    },
    {
      id: "tab-faire", type: "paradigm", target: "faire — présent", spoken: "faire",
      gloss: { es: "«faire» (hacer) en presente", en: "faire (to do / make) — present" },
      grammar: ["fr-g-faire-jouer"],
      paradigm: {
        caption: { es: "Conjuga «faire» en presente", en: "Conjugate faire in the present tense" },
        cells: [
          { label: "je", answer: "fais" },
          { label: "tu", answer: "fais" },
          { label: "il / elle", answer: "fait" },
          { label: "nous", answer: "faisons" },
          { label: "vous", answer: "faites" },
          { label: "ils / elles", answer: "font" },
        ],
      },
      tags: ["grammar", "present", "table"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-loisirs", type: "listening",
      target: "Le samedi, je fais du vélo avec mes amis. Le dimanche, je reste à la maison : je lis ou j'écoute de la musique. Je ne regarde jamais la télé.",
      gloss: {
        es: "Los sábados ando en bici con mis amigos. Los domingos me quedo en casa: leo o escucho música. Nunca veo la tele.",
        en: "On Saturdays I go cycling with my friends. On Sundays I stay at home: I read or listen to music. I never watch TV.",
      },
      question: {
        prompt: { es: "¿Qué no hace nunca?", en: "What does the speaker never do?" },
        options: [
          { es: "Ver la tele", en: "Watch TV" },
          { es: "Andar en bici", en: "Go cycling" },
          { es: "Leer", en: "Read" },
          { es: "Escuchar música", en: "Listen to music" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "hobbies"],
    },
    {
      id: "dlg-cinema", type: "dialogue", target: "Ce soir, je ne peux pas.", register: "informal",
      gloss: { es: "Esta noche no puedo.", en: "I can't tonight." },
      turns: [
        { who: "A", target: "On va au cinéma ce soir ?", gloss: { es: "¿Vamos al cine esta noche?", en: "Shall we go to the cinema tonight?" } },
        { who: "B", target: "Ce soir, je ne peux pas, je travaille. Et demain ?", gloss: { es: "Esta noche no puedo, trabajo. ¿Y mañana?", en: "I can't tonight, I'm working. What about tomorrow?" } },
        { who: "A", target: "Demain, d'accord ! Le film commence à vingt heures.", gloss: { es: "¡Mañana, de acuerdo! La película empieza a las ocho.", en: "Tomorrow, OK! The film starts at eight." } },
        { who: "B", target: "Super, à demain !", gloss: { es: "¡Genial, hasta mañana!", en: "Great, see you tomorrow!" } },
      ],
      question: {
        prompt: { es: "¿Por qué no puede ir esta noche?", en: "Why can't they go tonight?" },
        options: [
          { es: "Porque trabaja", en: "Because they're working" },
          { es: "Porque no le gusta el cine", en: "Because they don't like films" },
          { es: "Porque está cansado/a", en: "Because they're tired" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "plans"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-sale", type: "bridge", onlyFor: "es", target: "sale",
      gloss: { es: "sucio/a", en: "dirty" },
      question: {
        prompt: { es: "«Ma voiture est sale» significa…", en: "'Ma voiture est sale' means…" },
        options: [
          { es: "Mi coche está sucio", en: "My car is dirty" },
          { es: "Mi coche sale (se va)", en: "My car is leaving" },
          { es: "Mi coche está en venta", en: "My car is for sale" },
        ],
        answer: 0,
      },
      note: { es: "Falso amigo: sale = sucio/a. «Salir» es sortir y «salado» es salé." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend"],
    },
    {
      id: "br-ne-pas", type: "bridge", onlyFor: "es", target: "Je ne sais pas.",
      gloss: { es: "No sé.", en: "I don't know." },
      distractors: ["Je ne sais.", "Je sais pas ne.", "Non je sais."],
      note: { es: "No basta con poner «ne» delante como el «no» español: hace falta «pas» detrás del verbo." },
      exercises: ["guess", "recall"], tags: ["bridge", "negation"],
    },
  ]),
};
