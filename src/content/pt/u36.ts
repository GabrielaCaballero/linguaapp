import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "pt-u36",
  lang: "pt",
  index: 36,
  cefr: "C2",
  title: { target: "Provérbios e expressões cultas", es: "Refranes y expresiones cultas", en: "Proverbs and learned expressions" },
  canDo: [
    { es: "Entiendo y uso refranes brasileños y sé cuándo encajan en la conversación.", en: "I can understand and use Brazilian proverbs and know when they fit a conversation." },
    { es: "Reconozco los latinismos de los textos cultos (a priori, grosso modo, sine qua non).", en: "I can recognise the Latin phrases of educated texts (a priori, grosso modo, sine qua non)." },
  ],
  icon: "🦉",
  items: build("pt", 36, "C2", [
    { id: "quem-nao-tem-cao", type: "phrase", pos: "phrase", target: "Quem não tem cão caça com gato.", gloss: { es: "A falta de pan, buenas son tortas.", en: "Make do with what you've got." }, distractors: ["Quem não tem gato caça com cão.", "Quem tem cão não caça gato.", "Quem não tem cão caça sem gato."], grammar: ["pt-g-proverbios"], tags: ["proverb"] },
    { id: "de-grao-em-grao", type: "phrase", pos: "phrase", target: "De grão em grão, a galinha enche o papo.", gloss: { es: "Poco a poco se llega lejos.", en: "Every little helps. / Slowly but surely." }, distractors: ["De grão a grão, a galinha come o papo.", "Grão a grão, o galo enche o papo.", "De grão em grão, a galinha enche a panela."], tags: ["proverb"] },
    { id: "agua-mole", type: "phrase", pos: "phrase", target: "Água mole em pedra dura, tanto bate até que fura.", gloss: { es: "La gota horada la piedra.", en: "Constant dripping wears away the stone." }, distractors: ["Água dura em pedra mole, tanto bate até que fura.", "Água mole em pedra dura, tanto fura até que bate.", "Pedra dura em água mole, tanto bate até que fura."], tags: ["proverb"] },
    { id: "quem-ve-cara", type: "phrase", pos: "phrase", target: "Quem vê cara não vê coração.", gloss: { es: "Las apariencias engañan.", en: "Appearances can be deceptive." }, distractors: ["Quem vê coração não vê cara.", "Quem vê a cara vê o coração.", "Quem não vê cara vê coração."], grammar: ["pt-g-proverbios"], tags: ["proverb"] },
    { id: "cavalo-dado", type: "phrase", pos: "phrase", target: "Cavalo dado não se olham os dentes.", gloss: { es: "A caballo regalado no se le miran los dientes.", en: "Don't look a gift horse in the mouth." }, accept: [{ text: "A cavalo dado não se olham os dentes." }, { text: "Cavalo dado não se olha os dentes." }], distractors: ["Cavalo dado não se olham as patas.", "Cavalo comprado não se olham os dentes.", "Cavalo dado se olham os dentes."], tags: ["proverb"] },
    { id: "mais-vale", type: "phrase", pos: "phrase", target: "Mais vale um pássaro na mão do que dois voando.", gloss: { es: "Más vale pájaro en mano que cien volando.", en: "A bird in the hand is worth two in the bush." }, distractors: ["Mais vale dois pássaros na mão do que um voando.", "Mais vale um pássaro voando do que dois na mão.", "Menos vale um pássaro na mão do que dois voando."], tags: ["proverb"] },
    { id: "cada-macaco", type: "phrase", pos: "phrase", target: "Cada macaco no seu galho.", gloss: { es: "Cada uno en lo suyo. / Zapatero a tus zapatos.", en: "Mind your own business; stick to what you know." }, distractors: ["Cada galho no seu macaco.", "Cada macaco no galho dele de.", "Todo macaco no mesmo galho."], tags: ["proverb"] },
    { id: "a-priori", type: "phrase", pos: "phrase", target: "a priori", gloss: { es: "a priori, de antemano", en: "a priori, in advance" }, distractors: ["à priori", "a príori", "a prior"], note: { es: "Sin crase: es una expresión latina, no «a + a».", en: "No crase: it's Latin, not 'a + a'." }, grammar: ["pt-g-latinismos"], tags: ["latin", "formal"] },
    { id: "grosso-modo", type: "phrase", pos: "phrase", target: "grosso modo", gloss: { es: "grosso modo, a grandes rasgos", en: "roughly speaking" }, distractors: ["a grosso modo", "grossamente modo", "em grosso modo"], note: { es: "Sin «a» delante: «a grosso modo» es un error común.", en: "No 'a' in front: 'a grosso modo' is a common mistake." }, grammar: ["pt-g-latinismos"], tags: ["latin", "formal"] },
    { id: "sine-qua-non", type: "phrase", pos: "phrase", target: "condição sine qua non", gloss: { es: "condición sine qua non, indispensable", en: "an essential condition" }, distractors: ["condição sem qua non", "condição sine que non", "condição sine qua nom"], tags: ["latin", "formal"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "como-diz-o-ditado", type: "sentence", target: "Como diz o ditado, quem tem boca vai a Roma.",
      gloss: { es: "Como dice el refrán, preguntando se llega a Roma.", en: "As the saying goes, if you don't know, ask." },
      accept: [{ text: "Como diz o ditado: quem tem boca vai a Roma." }],
      distractors: ["dito", "à", "vaia"],
      note: { es: "Algunos dicen, en broma, que el original era «quem tem boca vaia Roma» (abuchea a Roma).", en: "Some joke that the original was 'quem tem boca vaia Roma' (boos Rome)." },
      tags: ["proverb"],
    },
    {
      id: "santo-de-casa", type: "sentence", target: "Ninguém o valoriza na empresa: santo de casa não faz milagre.",
      gloss: { es: "Nadie lo valora en la empresa: nadie es profeta en su tierra.", en: "Nobody values him at work: a prophet is never honoured in his own land." },
      distractors: ["lhe", "milagres", "faça"],
      tags: ["proverb", "work"],
    },
    {
      id: "in-loco", type: "sentence", target: "A comissão fez uma visita in loco às obras.",
      gloss: { es: "La comisión hizo una visita in situ a las obras.", en: "The committee made an on-site visit to the works." },
      accept: [{ text: "A comissão fez uma visita in loco nas obras." }],
      distractors: ["no loco", "as", "em loco"],
      grammar: ["pt-g-latinismos"], tags: ["latin", "formal"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-proverbios", type: "pattern", target: "Quem + verbo… · Mais vale… do que… · Cada…",
      gloss: { es: "la gramática de los refranes", en: "the grammar of proverbs" },
      pattern: {
        rule: {
          es: "Los refranes usan un sujeto genérico (quem, cada), el presente atemporal y estructuras paralelas o rimadas (quem vê cara não vê coração). En la conversación a menudo se dice solo la primera mitad: «Quem não tem cão…».",
          en: "Proverbs use a generic subject (quem, cada), the timeless present and parallel or rhyming structures (quem vê cara não vê coração). In conversation people often say just the first half: 'Quem não tem cão…'.",
        },
        table: [["quem + verbo", "Quem espera sempre alcança."], ["mais vale", "Mais vale tarde do que nunca."], ["cada", "Cada um sabe onde o sapato aperta."], ["meia frase", "Quem não tem cão…"]],
      },
      question: {
        prompt: { es: "Alguien llega tardísimo pero llega. Dices…", en: "Someone is very late but turns up. You say…" },
        options: ["Antes tarde do que nunca.", "Quem não tem cão caça com gato.", "Cada macaco no seu galho.", "Água mole em pedra dura…"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-proverbios"], tags: ["grammar", "proverb"],
    },
    {
      id: "pat-latinismos", type: "pattern", target: "a priori · grosso modo · in loco · ipsis litteris · data venia",
      gloss: { es: "latinismos en textos cultos", en: "Latin phrases in educated texts" },
      pattern: {
        rule: {
          es: "Muy usados en el derecho, la academia y la prensa: a priori, a posteriori, grosso modo, in loco (en el lugar), ipsis litteris (textualmente), data venia (con el debido respeto), sine qua non. No llevan crase ni preposición delante.",
          en: "Common in law, academia and the press: a priori, a posteriori, grosso modo, in loco (on site), ipsis litteris (word for word), data venia (with all due respect), sine qua non. No crase or extra preposition in front.",
        },
        table: [["a priori", "de antemão"], ["grosso modo", "aproximadamente"], ["in loco", "no próprio local"], ["ipsis litteris", "textualmente"], ["data venia", "com o devido respeito"]],
      },
      question: {
        prompt: { es: "¿Cuál está bien escrita?", en: "Which one is correct?" },
        options: ["Grosso modo, o projeto custa um milhão.", "A grosso modo, o projeto custa um milhão.", "À grosso modo, o projeto custa um milhão.", "Em grosso modo, o projeto custa um milhão."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["pt-g-latinismos"], tags: ["grammar", "latin", "formal"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-ditado", type: "listening", target: "Minha avó sempre dizia: «Deus ajuda quem cedo madruga.» Por isso até hoje eu acordo às cinco da manhã.",
      gloss: { es: "Mi abuela siempre decía: «Al que madruga, Dios lo ayuda.» Por eso hasta hoy me despierto a las cinco de la mañana.", en: "My grandmother always said: 'God helps those who rise early.' That's why I still get up at five in the morning." },
      question: {
        prompt: { es: "¿Qué efecto tuvo el refrán en la persona?", en: "What effect did the proverb have on the speaker?" },
        options: [
          { es: "Sigue levantándose muy temprano", en: "She still gets up very early" },
          { es: "Se volvió muy religiosa", en: "She became very religious" },
          { es: "Duerme hasta tarde", en: "She sleeps in" },
          { es: "Ayuda a su abuela", en: "She helps her grandmother" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "proverb"],
    },
    {
      id: "dlg-ditado", type: "dialogue", target: "Quem vê cara não vê coração.",
      gloss: { es: "Las apariencias engañan.", en: "Appearances can be deceptive." },
      turns: [
        { who: "A", target: "Nunca imaginei que o Rodrigo, tão educado, fosse capaz disso.", gloss: { es: "Nunca imaginé que Rodrigo, tan educado, fuera capaz de eso.", en: "I never imagined that Rodrigo, so polite, could do that." } },
        { who: "B", target: "Pois é. Quem vê cara não vê coração.", gloss: { es: "Así es. Las apariencias engañan.", en: "I know. Appearances can be deceptive." } },
      ],
      question: {
        prompt: { es: "¿Qué quiere decir B?", en: "What does B mean?" },
        options: [
          { es: "Que no se puede juzgar a alguien por su aspecto", en: "You can't judge someone by their looks" },
          { es: "Que Rodrigo está enfermo del corazón", en: "Rodrigo has a heart condition" },
          { es: "Que Rodrigo es muy guapo", en: "Rodrigo is very handsome" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "proverb"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-refrao", type: "bridge", onlyFor: "es", target: "o ditado",
      gloss: { es: "el refrán, el dicho", en: "the saying" },
      distractors: ["o refrão", "o dito de", "o ditador"],
      note: { es: "Ojo: «o refrão» es el estribillo de una canción; el refrán es «o ditado» o «o provérbio»." },
      exercises: ["guess", "recall"], tags: ["bridge", "false-friend", "proverb"],
    },
    {
      id: "br-en-boca-roma", type: "bridge", onlyFor: "en", target: "Quem tem boca vai a Roma.",
      gloss: { es: "Preguntando se llega a Roma.", en: "If in doubt, ask." },
      distractors: ["Todos os caminhos levam a Roma.", "Quem tem boca come em Roma.", "Roma não se fez num dia."],
      note: { en: "Literally 'whoever has a mouth gets to Rome': ask and you'll find your way." },
      exercises: ["guess", "recall"], tags: ["bridge", "proverb"],
    },
  ]),
};
