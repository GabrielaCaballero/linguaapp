import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u05",
  lang: "en",
  index: 5,
  cefr: "A1.1",
  title: { target: "My family", es: "Mi familia", en: "My family" },
  canDo: [
    { es: "Puedo presentar a mi familia y hablar de ella con frases sencillas.", en: "I can introduce my family and talk about them simply." },
    { es: "Puedo describir a una persona: cómo es y cómo se ve.", en: "I can describe a person's looks and character." },
    { es: "Sé usar my, your, his, her…, el «'s» posesivo y have / has.", en: "I can use my, your, his, her…, possessive 's and have / has." },
  ],
  icon: "👨‍👩‍👧",
  items: build("en", 5, "A1.1", [
    // ── Family ───────────────────────────────────────────────
    {
      id: "mother", type: "word", target: "mother", plural: "mothers",
      gloss: { es: "madre", en: "mother" },
      accept: [{ text: "mom" }],
      distractors: ["brother", "other", "father"],
      note: { es: "En familia se dice «mom» (Estados Unidos) o «mum» (Reino Unido)." },
      tags: ["family"],
    },
    {
      id: "father", type: "word", target: "father", plural: "fathers",
      gloss: { es: "padre", en: "father" },
      accept: [{ text: "dad" }],
      distractors: ["farther", "mother", "feather"],
      tags: ["family"],
    },
    {
      id: "parents", type: "word", target: "parents",
      gloss: { es: "los padres (papá y mamá)", en: "parents" },
      distractors: ["relatives", "fathers", "parent's"],
      note: { es: "«parents» = padres; los «relatives» son todos los parientes." },
      tags: ["family", "false-friend"],
    },
    {
      id: "brother", type: "word", target: "brother", plural: "brothers",
      gloss: { es: "hermano", en: "brother" },
      distractors: ["mother", "bother", "sister"],
      tags: ["family"],
    },
    {
      id: "sister", type: "word", target: "sister", plural: "sisters",
      gloss: { es: "hermana", en: "sister" },
      distractors: ["sitter", "brother", "mister"],
      tags: ["family"],
    },
    {
      id: "siblings", type: "word", target: "brothers and sisters",
      gloss: { es: "hermanos (hermanos y hermanas)", en: "brothers and sisters (siblings)" },
      accept: [{ text: "siblings" }],
      distractors: ["brothers", "cousins and sisters", "brother and sisters"],
      note: { es: "«brothers» son solo hombres; para mezclar se dice «brothers and sisters» o «siblings»." },
      tags: ["family"],
    },
    {
      id: "son", type: "word", target: "son", plural: "sons",
      gloss: { es: "hijo (varón)", en: "son" },
      distractors: ["sun", "song", "soon"],
      tags: ["family"],
    },
    {
      id: "daughter", type: "word", target: "daughter", plural: "daughters",
      gloss: { es: "hija", en: "daughter" },
      distractors: ["doctor", "laughter", "dotter"],
      note: { es: "La «gh» no suena: «dóter»." },
      tags: ["family"],
    },
    {
      id: "grandparents", type: "word", target: "grandparents",
      gloss: { es: "abuelos", en: "grandparents" },
      distractors: ["grandsons", "great parents", "big parents"],
      tags: ["family"],
    },
    {
      id: "husband", type: "word", target: "husband", plural: "husbands",
      gloss: { es: "esposo, marido", en: "husband" },
      distractors: ["wife", "hasbend", "headband"],
      tags: ["family"],
    },
    {
      id: "wife", type: "word", target: "wife", plural: "wives",
      gloss: { es: "esposa, mujer", en: "wife" },
      distractors: ["wives", "wild", "life"],
      note: { es: "Plural irregular: wives." },
      tags: ["family"],
    },
    {
      id: "cousin", type: "word", target: "cousin", plural: "cousins",
      gloss: { es: "primo/a", en: "cousin" },
      distractors: ["cushion", "kitchen", "cuisine"],
      note: { es: "Sirve para primo y prima; se pronuncia «késin»." },
      tags: ["family"],
    },

    // ── Describing people ────────────────────────────────────
    {
      id: "tall", type: "word", pos: "adj", target: "tall",
      gloss: { es: "alto/a (persona)", en: "tall" },
      distractors: ["high", "tail", "small"],
      note: { es: "Para personas se dice «tall»; «high» es para cosas, como una montaña o un precio." },
      tags: ["describe"],
    },
    {
      id: "funny", type: "word", pos: "adj", target: "funny",
      gloss: { es: "gracioso/a, divertido/a", en: "funny" },
      distractors: ["fun", "sunny", "phony"],
      tags: ["describe", "character"],
    },
    {
      id: "friendly", type: "word", pos: "adj", target: "friendly",
      gloss: { es: "amable, simpático/a", en: "friendly" },
      distractors: ["friend", "friendship", "frankly"],
      tags: ["describe", "character"],
    },
    {
      id: "married", type: "word", pos: "adj", target: "married",
      gloss: { es: "casado/a", en: "married" },
      distractors: ["merry", "marry", "single"],
      note: { es: "Se dice «married to» (casado con): She's married to a doctor." },
      tags: ["family"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "this-is-my-sister", type: "sentence", target: "This is my sister, Laura.",
      gloss: { es: "Te presento a mi hermana, Laura.", en: "This is my sister, Laura." },
      accept: [{ text: "This is my sister Laura." }],
      distractors: ["He", "mine", "These"],
      note: { es: "Para presentar a alguien se usa «This is…», no «He/She is…»." },
      tags: ["family", "introductions"],
    },
    {
      id: "her-husband", type: "sentence", target: "Her husband is from Ecuador.",
      gloss: { es: "Su esposo (de ella) es de Ecuador.", en: "Her husband is from Ecuador." },
      errors: [{ text: "His husband is from Ecuador.", feedback: { es: "El posesivo concuerda con el dueño: ella → her." }, ruleId: "en-g-possessives" }],
      distractors: ["His", "She", "of"],
      grammar: ["en-g-possessives"],
      annot: { Her: { es: "de ella (la dueña es una mujer)", en: "belonging to a woman" } },
      tags: ["family"],
    },
    {
      id: "his-parents", type: "sentence", target: "His parents live in Boston.",
      gloss: { es: "Sus padres (de él) viven en Boston.", en: "His parents live in Boston." },
      errors: [{ text: "Her parents live in Boston.", feedback: { es: "Si son los padres de él, el posesivo es «his»." }, ruleId: "en-g-possessives" }],
      distractors: ["Her", "lives", "He"],
      grammar: ["en-g-possessives"],
      tags: ["family"],
    },
    {
      id: "marias-brother", type: "sentence", target: "Maria's brother is very funny.",
      gloss: { es: "El hermano de María es muy gracioso.", en: "Maria's brother is very funny." },
      errors: [{ text: "The brother of Maria is very funny.", feedback: { es: "Con personas el inglés usa «'s»: Maria's brother." }, ruleId: "en-g-possessive-s" }],
      distractors: ["of", "The", "Marias"],
      grammar: ["en-g-possessive-s"],
      annot: { "Maria's": { es: "de María («'s» indica a quién pertenece)", en: "belonging to Maria" } },
      tags: ["family"],
    },
    {
      id: "i-have-two-sisters", type: "sentence", target: "I have two sisters and a brother.",
      gloss: { es: "Tengo dos hermanas y un hermano.", en: "I have two sisters and a brother." },
      accept: [{ text: "I've got two sisters and a brother." }, { text: "I have two sisters and one brother." }],
      distractors: ["has", "sister", "am"],
      grammar: ["en-g-have"],
      tags: ["family"],
    },
    {
      id: "she-has-blue-eyes", type: "sentence", target: "She has long hair and blue eyes.",
      gloss: { es: "Tiene el pelo largo y los ojos azules.", en: "She has long hair and blue eyes." },
      accept: [{ text: "She's got long hair and blue eyes." }],
      errors: [{ text: "She have long hair and blue eyes.", feedback: { es: "Con he / she / it: has." }, ruleId: "en-g-have" }],
      distractors: ["have", "hairs", "the"],
      grammar: ["en-g-have"],
      note: { es: "«hair» (pelo) es incontable: long hair, nunca «hairs»." },
      tags: ["family", "describe"],
    },
    {
      id: "our-kids", type: "sentence", target: "Our kids are tall, like their dad.",
      gloss: { es: "Nuestros hijos son altos, como su papá.", en: "Our kids are tall, like their dad." },
      accept: [{ text: "Our children are tall, like their dad." }, { text: "Our kids are tall, like their father." }],
      errors: [{ text: "Our kids are tall, like there dad.", feedback: { es: "their = su (de ellos); there = allí." }, ruleId: "en-g-possessives" }],
      distractors: ["there", "they're", "Ours"],
      grammar: ["en-g-possessives"],
      tags: ["family", "describe"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-possessives", type: "pattern", target: "my · your · his · her · its · our · their",
      gloss: { es: "los posesivos (mi, tu, su…)", en: "possessive adjectives" },
      pattern: {
        rule: {
          es: "El posesivo depende del dueño, no de la cosa: his = de él, her = de ella, their = de ellos. No cambia en plural: my brothers (mis hermanos).",
          en: "The possessive agrees with the owner, not the thing: his = belonging to a man, her = to a woman, their = to a group. It never takes a plural -s.",
        },
        table: [["I → my", "we → our"], ["you → your", "you → your"], ["he → his · she → her · it → its", "they → their"]],
      },
      question: {
        prompt: { es: "Hablas de la mamá de Pedro: «___ mother is a nurse.»", en: "You're talking about Pedro's mother: '___ mother is a nurse.'" },
        options: ["His", "Her", "Their", "He"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-possessives"], tags: ["grammar", "possessives"],
    },
    {
      id: "pat-possessive-s", type: "pattern", target: "Anna's car · my parents' house",
      gloss: { es: "el posesivo «'s» (de alguien)", en: "possessive 's" },
      pattern: {
        rule: {
          es: "Para decir «el/la … de [persona]», el dueño va primero con «'s»: Anna's car (el auto de Anna). Si el dueño es un plural con -s, solo se añade el apóstrofo: my parents' house.",
          en: "The owner comes first with 's: Anna's car. A plural owner ending in -s takes only the apostrophe: my parents' house.",
        },
        table: [["español", "inglés"], ["el auto de Anna", "Anna's car"], ["la casa de mis padres", "my parents' house"], ["el cuarto de los niños", "the children's room"]],
      },
      question: {
        prompt: { es: "«la hermana de mi amigo» es…", en: "Which is right for 'the sister of my friend'?" },
        options: ["my friend's sister", "my friend sister", "the sister my friend's", "my sister's friend"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-possessive-s"], tags: ["grammar", "possessives"],
    },
    {
      id: "pat-have-has", type: "pattern", target: "I have · she has",
      gloss: { es: "have / has (tener)", en: "have / has" },
      pattern: {
        rule: {
          es: "«have» (tener) cambia a «has» con he, she e it. Con el resto de las personas es siempre «have».",
          en: "'have' becomes 'has' with he, she and it. With every other person it stays 'have'.",
        },
        table: [["I / you / we / they", "have"], ["he / she / it", "has"]],
      },
      question: {
        prompt: { es: "Completa: «My cousin ___ three kids.»", en: "Complete: 'My cousin ___ three kids.'" },
        options: ["has", "have", "is", "haves"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-have"], tags: ["grammar", "have"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-photo", type: "dialogue", target: "Who's this?",
      gloss: { es: "¿Quién es?", en: "Who's this?" },
      turns: [
        { who: "A", target: "Nice photo! Who's this?", gloss: { es: "¡Qué linda foto! ¿Quién es?", en: "Nice photo! Who's this?" } },
        { who: "B", target: "That's my brother, Daniel. He's twenty-five.", gloss: { es: "Es mi hermano, Daniel. Tiene veinticinco años.", en: "That's my brother, Daniel. He's twenty-five." } },
        { who: "A", target: "And the woman next to him?", gloss: { es: "¿Y la mujer que está a su lado?", en: "And the woman next to him?" } },
        { who: "B", target: "That's his wife, Kate. They have a baby girl.", gloss: { es: "Es su esposa, Kate. Tienen una bebé.", en: "That's his wife, Kate. They have a baby girl." } },
      ],
      question: {
        prompt: { es: "¿Quién es Kate?", en: "Who is Kate?" },
        options: [
          { es: "La esposa del hermano", en: "The brother's wife" },
          { es: "La hermana", en: "The sister" },
          { es: "La hija de Daniel", en: "Daniel's daughter" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "family"],
    },
    {
      id: "lis-family", type: "listening", target: "My name is Rosa. I'm married and I have two sons. My husband's parents live with us.",
      gloss: { es: "Me llamo Rosa. Estoy casada y tengo dos hijos. Los padres de mi esposo viven con nosotros.", en: "My name is Rosa. I'm married and I have two sons. My husband's parents live with us." },
      question: {
        prompt: { es: "¿Quién vive con Rosa además de su familia?", en: "Who else lives with Rosa's family?" },
        options: [
          { es: "Sus suegros", en: "Her husband's parents" },
          { es: "Sus padres", en: "Her own parents" },
          { es: "Su hermana", en: "Her sister" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "family"],
    },

    // ── Bridges (es) ─────────────────────────────────────────
    {
      id: "br-parents", type: "bridge", onlyFor: "es", target: "relatives",
      gloss: { es: "parientes, familiares", en: "relatives" },
      question: {
        prompt: { es: "«I have a lot of relatives in Texas» significa…", en: "'I have a lot of relatives in Texas' means…" },
        options: [
          { es: "Tengo muchos parientes en Texas.", en: "I have many family members in Texas." },
          { es: "Tengo muchos padres en Texas.", en: "I have many parents in Texas." },
          { es: "Tengo muchos amigos en Texas.", en: "I have many friends in Texas." },
        ],
        answer: 0,
      },
      note: { es: "«parents» son solo papá y mamá; tíos, primos y abuelos son «relatives»." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "family"],
    },
  ]),
};
