import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "de-u28",
  lang: "de",
  index: 28,
  cefr: "C1",
  title: { target: "Ironie und Umgangssprache", es: "Ironía y lenguaje coloquial", en: "Irony and colloquial speech" },
  canDo: [
    { es: "Puedo captar la ironía y los dobles sentidos en conversaciones cotidianas.", en: "I can pick up irony and double meanings in everyday conversation." },
    { es: "Puedo pasar del registro coloquial al formal según la situación.", en: "I can switch between colloquial and formal speech to suit the situation." },
    { es: "Sé matizar lo que digo con partículas como etwa, bloß, ruhig, wohl y eh.", en: "I can add nuance with particles like etwa, bloß, ruhig, wohl and eh." },
  ],
  icon: "😏",
  items: build("de", 28, "C1", [
    // ── Irony & colloquial chunks ────────────────────────────
    {
      id: "na-toll", type: "phrase", pos: "phrase", register: "informal", target: "Na toll!",
      gloss: { es: "¡Genial! (con ironía)", en: "Oh, great! (ironic)" },
      distractors: ["Na gut!", "Na und?", "Na los!"],
      note: { es: "El tono lo dice todo: suele significar justo lo contrario.", en: "The tone says it all: it usually means the opposite." },
      tags: ["irony", "colloquial"],
    },
    {
      id: "kann-ja-heiter-werden", type: "phrase", pos: "phrase", register: "informal", target: "Das kann ja heiter werden!",
      gloss: { es: "¡Esto promete! (irónico: se viene algo complicado)", en: "Well, this should be fun! (ironic)" },
      distractors: ["Das kann ja heiter sein!", "Das muss ja heiter werden!", "Das kann ja heiter machen!"],
      note: { es: "heiter = alegre, despejado; aquí se usa en sentido irónico.", en: "heiter = cheerful, sunny; here it's ironic." },
      tags: ["irony", "idioms"],
    },
    {
      id: "auf-den-arm-nehmen", type: "phrase", pos: "phrase", register: "informal", target: "jemanden auf den Arm nehmen",
      gloss: { es: "tomarle el pelo a alguien", en: "to pull someone's leg" },
      distractors: ["jemanden in den Arm nehmen", "jemandem auf den Arm nehmen", "jemanden auf die Arme nehmen"],
      note: { es: "Ojo: jemanden in den Arm nehmen = abrazar a alguien.", en: "Careful: jemanden in den Arm nehmen = to hug someone." },
      tags: ["humour", "idioms"],
    },
    {
      id: "mir-wurscht", type: "phrase", pos: "phrase", register: "informal", target: "Das ist mir wurscht.",
      gloss: { es: "Me da exactamente lo mismo.", en: "I couldn't care less." },
      accept: [{ text: "Das ist mir wurst." }, { text: "Das ist mir Wurst." }],
      distractors: ["Das ist mich wurscht.", "Das bin ich wurscht.", "Das hat mir wurscht."],
      note: { es: "Muy coloquial; en registro neutro: Das ist mir egal.", en: "Very colloquial; neutral: Das ist mir egal." },
      tags: ["colloquial", "register"],
    },
    {
      id: "keinen-bock", type: "phrase", pos: "phrase", register: "informal", target: "keinen Bock haben",
      gloss: { es: "no tener ni ganas (coloquial)", en: "to not be up for it (slang)" },
      distractors: ["keinen Bock sein", "keinen Bock machen", "keinen Bock geben"],
      note: { es: "Neutro: keine Lust haben. Con auf: Ich habe keinen Bock auf Arbeit.", en: "Neutral: keine Lust haben. With auf: Ich habe keinen Bock auf Arbeit." },
      tags: ["colloquial", "register", "slang"],
    },
    {
      id: "klappe-halten", type: "phrase", pos: "phrase", register: "informal", target: "die Klappe halten",
      gloss: { es: "cerrar el pico", en: "to keep your mouth shut" },
      distractors: ["die Klappe machen", "die Klappe schließen", "die Kappe halten"],
      note: { es: "Bastante brusco: Halt die Klappe! = ¡Cállate!", en: "Quite rude: Halt die Klappe! = Shut up!" },
      tags: ["colloquial", "register"],
    },
    {
      id: "nicht-ohne", type: "phrase", pos: "phrase", register: "informal", target: "Das ist nicht ohne.",
      gloss: { es: "No es poca cosa, tiene su dificultad.", en: "That's no small thing." },
      distractors: ["Das ist nicht mit.", "Das ist ohne nicht.", "Das ist nicht ohnehin."],
      tags: ["colloquial"],
    },
    {
      id: "spass-beiseite", type: "phrase", pos: "phrase", target: "Spaß beiseite",
      gloss: { es: "bromas aparte", en: "joking aside" },
      distractors: ["Spaß beiseit", "Spaß nebenbei", "Spaß zur Seite"],
      tags: ["humour"],
    },

    // ── Words ────────────────────────────────────────────────
    {
      id: "pointe", type: "word", pos: "noun", target: "die Pointe", gender: "f", plural: "die Pointen",
      gloss: { es: "el remate (de un chiste)", en: "the punchline" },
      distractors: ["der Pointe", "das Pointe", "die Punkte"],
      note: { es: "Palabra tomada del francés.", en: "A loan word from French." },
      tags: ["humour"],
    },
    {
      id: "anspielung", type: "word", pos: "noun", target: "die Anspielung", gender: "f", plural: "die Anspielungen",
      gloss: { es: "la indirecta, la alusión", en: "the allusion, hint" },
      distractors: ["der Anspielung", "die Anstellung", "die Einstellung"],
      note: { es: "auf etwas anspielen = aludir a algo.", en: "auf etwas anspielen = to allude to something." },
      tags: ["humour", "irony"],
    },
    {
      id: "schlagfertig", type: "word", pos: "adj", target: "schlagfertig",
      gloss: { es: "rápido/a para contestar, con salidas ingeniosas", en: "quick-witted" },
      distractors: ["schlagkräftig", "fertig", "schlaflos"],
      tags: ["humour", "personality"],
    },
    {
      id: "eh", type: "word", pos: "adv", register: "informal", target: "eh",
      gloss: { es: "igual, de todas formas (coloquial)", en: "anyway (colloquial)" },
      distractors: ["ehe", "eben", "etwa"],
      note: { es: "Coloquial, sobre todo en el sur y en Austria; neutro: sowieso.", en: "Colloquial, especially in the south and Austria; neutral: sowieso." },
      grammar: ["de-g-modalpartikeln-c1"], tags: ["particles", "colloquial"],
    },

    // ── Particles in sentences ───────────────────────────────
    {
      id: "doch-nicht-etwa", type: "sentence", register: "informal", target: "Du willst doch nicht etwa schon gehen?",
      gloss: { es: "¿No me digas que ya te vas?", en: "You're not leaving already, are you?" },
      annot: { "etwa": { es: "sorpresa: «espero que no»", en: "surprise: 'I hope not'" } },
      distractors: ["etwas", "gehst", "kein"],
      grammar: ["de-g-modalpartikeln-c1"], tags: ["particles"],
    },
    {
      id: "komm-bloss-nicht", type: "sentence", register: "informal", target: "Komm bloß nicht zu spät!",
      gloss: { es: "¡Ni se te ocurra llegar tarde!", en: "Don't you dare be late!" },
      accept: [{ text: "Komm ja nicht zu spät!" }, { text: "Komm nur nicht zu spät!" }],
      annot: { "bloß": { es: "advertencia: «ni se te ocurra»", en: "warning: 'don't you dare'" } },
      distractors: ["blass", "kommst", "später"],
      grammar: ["de-g-modalpartikeln-c1"], tags: ["particles"],
    },
    {
      id: "ruhig-noch-ein-stueck", type: "sentence", register: "informal", target: "Du kannst ruhig noch ein Stück nehmen.",
      gloss: { es: "Sírvete otro pedazo, con toda confianza.", en: "Go ahead, have another piece." },
      annot: { "ruhig": { es: "permiso amable: «tranquilo/a, hazlo»", en: "friendly permission: 'go ahead'" } },
      distractors: ["ruhige", "Stücke", "nimmst"],
      grammar: ["de-g-modalpartikeln-c1"], tags: ["particles"],
    },
    {
      id: "klappt-eh-nicht", type: "sentence", register: "informal", target: "Das klappt eh nicht.",
      gloss: { es: "Igual no va a funcionar.", en: "It won't work anyway." },
      accept: [{ text: "Das klappt sowieso nicht." }],
      distractors: ["ehe", "klappen", "nichts"],
      grammar: ["de-g-modalpartikeln-c1"], tags: ["particles", "colloquial"],
    },
    {
      id: "wohl-verschlafen", type: "sentence", target: "Er wird wohl verschlafen haben.",
      gloss: { es: "Seguro que se quedó dormido.", en: "He must have overslept." },
      annot: { "wohl": { es: "suposición: «seguramente»", en: "assumption: 'probably'" } },
      distractors: ["werden", "hat", "schon"],
      grammar: ["de-g-modalpartikeln-c1"], tags: ["particles", "future"],
    },
    {
      id: "spinnst-wohl", type: "sentence", register: "informal", target: "Du spinnst wohl!",
      gloss: { es: "¡Estás loco/a!", en: "You must be mad!" },
      distractors: ["spinnt", "Spinne", "spannst"],
      note: { es: "spinnen = hilar, pero coloquialmente «estar chiflado/a».", en: "spinnen = to spin, but colloquially 'to be crazy'." },
      grammar: ["de-g-modalpartikeln-c1"], tags: ["particles", "colloquial"],
    },

    // ── Register shifts ──────────────────────────────────────
    {
      id: "ziemlich-daneben", type: "sentence", register: "informal", target: "Das finde ich ehrlich gesagt ziemlich daneben.",
      gloss: { es: "Sinceramente, me parece bastante fuera de lugar.", en: "Honestly, I think that's pretty out of line." },
      distractors: ["ziemliche", "danach", "sage"],
      grammar: ["de-g-umgangssprache"], tags: ["register", "colloquial"],
    },
    {
      id: "unangemessen", type: "sentence", register: "formal", target: "Ich halte dieses Verhalten für unangemessen.",
      gloss: { es: "Considero que esa conducta es inapropiada.", en: "I consider this behaviour inappropriate." },
      errors: [{ text: "Ich halte dieses Verhalten als unangemessen.", feedback: { es: "halten für = considerar (gelten als, en cambio, lleva als).", en: "halten für = to consider (it's gelten als that takes als)." } }],
      distractors: ["angemessen", "als", "hält"],
      grammar: ["de-g-umgangssprache"], tags: ["register", "formal"],
    },
    {
      id: "jetzt-regnet-es-auch-noch", type: "sentence", register: "informal", target: "Super, jetzt regnet es auch noch.",
      gloss: { es: "Genial, y encima ahora llueve.", en: "Great, and now it's raining too." },
      annot: { "auch noch": { es: "«encima», «para colmo»", en: "'on top of everything'" } },
      distractors: ["nach", "Regen", "schon"],
      tags: ["irony"],
    },

    // ── Patterns ─────────────────────────────────────────────
    {
      id: "pat-partikeln-c1", type: "pattern", target: "etwa · bloß · ruhig · wohl · eh",
      gloss: { es: "más partículas modales", en: "more modal particles" },
      pattern: {
        rule: {
          es: "etwa en preguntas muestra sorpresa o temor; bloß / nur en órdenes son advertencias; ruhig da permiso con amabilidad; wohl expresa una suposición; eh (= sowieso) significa «de todas formas».",
          en: "etwa in questions shows surprise or worry; bloß / nur in commands are warnings; ruhig gives friendly permission; wohl marks an assumption; eh (= sowieso) means 'anyway'.",
        },
        table: [["etwa", "Bist du etwa krank?"], ["bloß", "Sag das bloß nicht!"], ["ruhig", "Frag ruhig!"], ["wohl", "Er ist wohl krank."], ["eh", "Ich komme eh später."]],
      },
      question: {
        prompt: { es: "«Du kannst ___ reinkommen, ich beiße nicht.» ¿Qué partícula anima a hacerlo?", en: "'Du kannst ___ reinkommen, ich beiße nicht.' Which particle encourages you?" },
        options: ["ruhig", "bloß", "etwa", "denn"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-modalpartikeln-c1"], tags: ["grammar", "particles"],
    },
    {
      id: "pat-umgangssprache", type: "pattern", target: "Ich hab keinen Bock. → Ich habe keine Lust.",
      gloss: { es: "del coloquial al estándar", en: "from colloquial to standard" },
      pattern: {
        rule: {
          es: "En el habla se acortan formas (hab, gibt's, 'ne) y se usan palabras coloquiales (Bock, kriegen, wurscht). Por escrito o en situaciones formales se usan las formas completas y palabras neutras.",
          en: "Speech shortens forms (hab, gibt's, 'ne) and uses colloquial words (Bock, kriegen, wurscht). In writing or formal situations use the full forms and neutral words.",
        },
        table: [["Ich hab keinen Bock.", "Ich habe keine Lust."], ["Gibt's noch Kaffee?", "Gibt es noch Kaffee?"], ["Hast du 'ne Minute?", "Hast du eine Minute?"], ["Das ist mir wurscht.", "Das ist mir egal."]],
      },
      question: {
        prompt: { es: "¿Cuál es la versión neutra de «Ich hab keinen Bock»?", en: "Which is the neutral version of 'Ich hab keinen Bock'?" },
        options: ["Ich habe keine Lust.", "Ich hab null Bock.", "Ich hab kein Bock.", "Bock hab ich nicht."],
        answer: 0,
      },
      exercises: ["question"], grammar: ["de-g-umgangssprache"], tags: ["grammar", "register"],
    },

    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-verspaetung-ironie", type: "listening",
      target: "Na super, der Zug hat schon wieder Verspätung. Ich liebe die Bahn, wirklich!",
      gloss: {
        es: "Genial, el tren otra vez viene con retraso. Me encanta el tren, de verdad.",
        en: "Oh, brilliant, the train is late again. I just love the railway, really!",
      },
      question: {
        prompt: { es: "¿Qué piensa realmente quien habla?", en: "What does the speaker really think?" },
        options: [
          { es: "Que los retrasos son un fastidio", en: "That the delays are annoying" },
          { es: "Que el tren es el mejor transporte", en: "That trains are the best way to travel" },
          { es: "Que el tren llegó puntual", en: "That the train was on time" },
          { es: "Que va a ir en auto (coche)", en: "That they'll go by car" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "irony"],
    },
    {
      id: "dlg-vorstellungsgespraech", type: "dialogue", register: "informal", target: "Die nehmen mich eh nicht.",
      gloss: { es: "Igual no me van a elegir.", en: "They won't take me anyway." },
      turns: [
        { who: "A", target: "Und, wie war das Vorstellungsgespräch?", gloss: { es: "¿Y? ¿Cómo te fue en la entrevista?", en: "So, how was the interview?" } },
        { who: "B", target: "Frag lieber nicht. Ich bin voll ins Fettnäpfchen getreten.", gloss: { es: "Mejor ni preguntes. Metí la pata a lo grande.", en: "Don't ask. I really put my foot in it." } },
        { who: "A", target: "Ach komm, so schlimm wird es schon nicht gewesen sein.", gloss: { es: "Vamos, no habrá sido para tanto.", en: "Oh come on, it can't have been that bad." } },
        { who: "B", target: "Doch! Ich hab den Chef geduzt. Die nehmen mich eh nicht.", gloss: { es: "¡Sí que lo fue! Tuteé al jefe. Igual no me van a elegir.", en: "Yes, it was! I called the boss 'du'. They won't take me anyway." } },
      ],
      question: {
        prompt: { es: "¿Qué cree B?", en: "What does B think?" },
        options: [
          { es: "Que no le van a dar el puesto", en: "That they won't get the job" },
          { es: "Que la entrevista salió muy bien", en: "That the interview went very well" },
          { es: "Que el jefe es muy simpático", en: "That the boss is very nice" },
          { es: "Que va a llamar al jefe", en: "That they'll call the boss" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "colloquial"],
    },
  ]),
};
