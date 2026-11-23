import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "fr-u21",
  lang: "fr",
  index: 21,
  cefr: "B2",
  title: { target: "Si j'avais su…", es: "Si lo hubiera sabido…", en: "If I'd known…" },
  canDo: [
    { es: "Puedo hablar de lo que habría pasado si las cosas hubieran sido distintas.", en: "I can talk about what would have happened if things had been different." },
    { es: "Puedo expresar arrepentimiento, reproches y alivio.", en: "I can express regret, reproach and relief." },
    { es: "Sé usar el condicional pasado y «si + plus-que-parfait».", en: "I can use the past conditional and 'si + plus-que-parfait'." },
  ],
  icon: "🔁",
  items: build("fr", 21, "B2", [
    { id: "regret", type: "word", pos: "noun", target: "le regret", gender: "m", plural: "les regrets", gloss: { es: "el arrepentimiento, el pesar", en: "the regret" }, distractors: ["la regret", "le retrait", "le regard"], note: { es: "Je n'ai aucun regret = no me arrepiento de nada.", en: "Je n'ai aucun regret = I have no regrets." }, tags: ["regret"] },
    { id: "regretter", type: "word", pos: "verb", target: "regretter", gloss: { es: "lamentar, arrepentirse de", en: "to regret / to be sorry" }, distractors: ["regarder", "regrouper", "rejeter"], note: { es: "Je regrette de ne pas être venu/e = lamento no haber venido.", en: "Je regrette de ne pas être venu/e = I'm sorry I didn't come." }, tags: ["regret"] },
    { id: "occasion", type: "word", pos: "noun", target: "l'occasion", gender: "f", plural: "les occasions", gloss: { es: "la oportunidad / la ocasión", en: "the opportunity / chance" }, distractors: ["le occasion", "l'accusation", "l'évasion"], note: { es: "une voiture d'occasion = un auto de segunda mano.", en: "une voiture d'occasion = a second-hand car." }, tags: ["regret"] },
    { id: "heureusement", type: "word", pos: "adv", target: "heureusement", gloss: { es: "por suerte, afortunadamente", en: "fortunately" }, distractors: ["malheureusement", "heureux", "honnêtement"], tags: ["connectors"] },
    { id: "malheureusement", type: "word", pos: "adv", target: "malheureusement", gloss: { es: "lamentablemente, por desgracia", en: "unfortunately" }, distractors: ["heureusement", "malhonnêtement", "mal"], tags: ["connectors"] },
    { id: "se-tromper", type: "word", pos: "verb", target: "se tromper", gloss: { es: "equivocarse", en: "to make a mistake / be wrong" }, distractors: ["tromper", "se troubler", "tremper"], note: { es: "Je me suis trompé/e de numéro = me equivoqué de número.", en: "Je me suis trompé/e de numéro = I dialled the wrong number." }, tags: ["regret", "reflexive"] },
    { id: "prevenir", type: "word", pos: "verb", target: "prévenir", gloss: { es: "avisar", en: "to let (someone) know / warn" }, forms: { pp: "prévenu" }, distractors: ["prévoir", "provenir", "revenir"], tags: ["regret"] },
    { id: "sinon", type: "word", pos: "adv", target: "sinon", gloss: { es: "si no, de lo contrario", en: "otherwise" }, distractors: ["si non", "selon", "sans"], tags: ["connectors"] },
    { id: "tant-pis", type: "phrase", pos: "phrase", target: "Tant pis !", gloss: { es: "¡Lástima! / ¡Qué se le va a hacer!", en: "Oh well! / Too bad!" }, distractors: ["Tant mieux !", "Tant pire !", "Temps pis !"], note: { es: "Lo contrario, cuando algo sale bien: Tant mieux ! (¡Mejor!).", en: "The opposite, when something turns out well: Tant mieux !" }, tags: ["chunk", "feelings"] },
    // ── Sentences ────────────────────────────────────────────
    {
      id: "si-javais-su", type: "sentence", target: "Si j'avais su, je serais venu plus tôt.",
      gloss: { es: "Si lo hubiera sabido, habría venido antes.", en: "If I'd known, I would have come earlier." },
      accept: [{ text: "Si j'avais su, je serais venue plus tôt." }],
      errors: [{ text: "Si j'aurais su, je serais venu plus tôt.", feedback: { es: "Tras «si», nunca condicional: si j'avais su.", en: "Never the conditional after 'si': si j'avais su." }, ruleId: "fr-g-si-pqp" }],
      distractors: ["aurais", "suis", "sais"],
      tags: ["hypotheses", "past-unreal"],
    },
    {
      id: "si-tu-mavais-prevenu", type: "sentence", target: "Si tu m'avais prévenu, je t'aurais aidé.", register: "informal",
      gloss: { es: "Si me hubieras avisado, te habría ayudado.", en: "If you'd told me, I would have helped you." },
      accept: [{ text: "Si tu m'avais prévenue, je t'aurais aidé." }, { text: "Si tu m'avais prévenu, je t'aurais aidée." }, { text: "Si tu m'avais prévenue, je t'aurais aidée." }],
      distractors: ["aurais", "prévenais", "serais"],
      tags: ["hypotheses", "past-unreal"],
    },
    {
      id: "jaurais-du", type: "sentence", target: "J'aurais dû étudier davantage.",
      gloss: { es: "Debería haber estudiado más.", en: "I should have studied more." },
      accept: [{ text: "J'aurais dû étudier plus." }, { text: "Je devrais avoir étudié davantage.", verdict: "almost", feedback: { es: "Es posible, pero lo natural para un reproche sobre el pasado es «j'aurais dû + infinitivo».", en: "Possible, but the natural way to express regret about the past is 'j'aurais dû + infinitive'." } }],
      distractors: ["devrais", "étudié", "dois"],
      tags: ["regret", "conditional"],
    },
    {
      id: "tu-aurais-pu", type: "sentence", target: "Tu aurais pu me le dire !", register: "informal",
      gloss: { es: "¡Me lo podrías haber dicho!", en: "You could have told me!" },
      distractors: ["pourrais", "lui", "dit"],
      tags: ["regret", "reproach"],
    },
    {
      id: "ca-aurait-ete-mieux", type: "sentence", target: "Ça aurait été mieux d'attendre.",
      gloss: { es: "Habría sido mejor esperar.", en: "It would have been better to wait." },
      accept: [{ text: "Il aurait mieux valu attendre." }],
      distractors: ["serait", "meilleur", "attendu"],
      tags: ["regret", "conditional"],
    },
    {
      id: "si-je-navais-pas", type: "sentence", target: "Si je n'avais pas raté le train, je serais déjà chez moi.",
      gloss: { es: "Si no hubiera perdido el tren, ya estaría en casa.", en: "If I hadn't missed the train, I'd be home already." },
      distractors: ["aurais", "suis", "à"],
      note: { es: "Hipótesis mixta: pasado irreal (si j'avais…) con resultado presente (je serais).", en: "Mixed conditional: unreal past (si j'avais…) with a present result (je serais)." },
      tags: ["hypotheses", "past-unreal"],
    },
    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-cond-passe", type: "pattern", target: "j'aurais fait · je serais parti",
      gloss: { es: "el condicional pasado", en: "the past conditional" },
      pattern: {
        rule: {
          es: "avoir o être en condicional + participio, como «habría hecho». Con devoir y pouvoir expresa reproche o arrepentimiento: j'aurais dû (debería haber), tu aurais pu (podrías haber).",
          en: "avoir or être in the conditional + participle: 'would have done'. With devoir and pouvoir it expresses regret or reproach: j'aurais dû (I should have), tu aurais pu (you could have).",
        },
        table: [["avoir", "j'aurais mangé"], ["être", "je serais parti(e)"], ["devoir", "j'aurais dû venir"], ["pouvoir", "tu aurais pu appeler"]],
      },
      question: {
        prompt: { es: "Completa: «Elle ___ venir, mais elle était malade.» (aimer, pasado)", en: "Complete: 'Elle ___ venir, mais elle était malade.' (aimer, past)" },
        options: ["aurait aimé", "serait aimée", "aimerait eu", "avait aimé"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-cond-passe"], tags: ["grammar", "conditional"],
    },
    {
      id: "tab-cond-passe", type: "paradigm", target: "faire — conditionnel passé", spoken: "faire, conditionnel passé",
      gloss: { es: "«faire» en condicional pasado", en: "faire — past conditional" },
      grammar: ["fr-g-cond-passe"],
      paradigm: {
        caption: { es: "Conjuga «faire» en condicional pasado", en: "Conjugate faire in the past conditional" },
        cells: [
          { label: "j'", answer: "aurais fait", ruleId: "fr-g-cond-passe" },
          { label: "tu", answer: "aurais fait", ruleId: "fr-g-cond-passe" },
          { label: "il / elle", answer: "aurait fait", ruleId: "fr-g-cond-passe" },
          { label: "nous", answer: "aurions fait", ruleId: "fr-g-cond-passe" },
          { label: "vous", answer: "auriez fait", ruleId: "fr-g-cond-passe" },
          { label: "ils / elles", answer: "auraient fait", ruleId: "fr-g-cond-passe" },
        ],
      },
      tags: ["grammar", "conditional", "table"],
    },
    {
      id: "pat-si-pqp", type: "pattern", target: "Si j'avais su, je serais venu.",
      gloss: { es: "si + plus-que-parfait → condicional pasado", en: "si + plus-que-parfait → past conditional" },
      pattern: {
        rule: {
          es: "Para lo irreal en el pasado: si + plus-que-parfait, y el resultado en condicional pasado («si hubiera…, habría…»). Si el resultado es presente: condicional simple (si j'avais étudié, j'aurais un meilleur travail).",
          en: "For unreal past situations: si + plus-que-parfait, then the past conditional ('if I had…, I would have…'). With a present result: simple conditional (si j'avais étudié, j'aurais un meilleur travail).",
        },
        table: [["présent irréel", "Si j'avais le temps, je viendrais."], ["passé irréel", "Si j'avais eu le temps, je serais venu."], ["mixte", "Si j'avais étudié, j'aurais un bon travail."]],
      },
      question: {
        prompt: { es: "Completa: «Si nous ___ plus tôt, nous aurions vu le début.» (partir)", en: "Complete: 'Si nous ___ plus tôt, nous aurions vu le début.' (partir)" },
        options: ["étions partis", "serions partis", "avions parti", "partions"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["fr-g-si-pqp"], tags: ["grammar", "hypotheses"],
    },
    // ── Listening & dialogue ─────────────────────────────────
    {
      id: "lis-regret", type: "listening",
      target: "À vingt ans, on m'a proposé de partir travailler au Canada. J'ai refusé, parce que j'avais peur. Aujourd'hui, je le regrette un peu : si j'avais accepté, ma vie aurait été très différente.",
      gloss: {
        es: "A los veinte años me ofrecieron irme a trabajar a Canadá. Dije que no, porque tenía miedo. Hoy me arrepiento un poco: si hubiera aceptado, mi vida habría sido muy distinta.",
        en: "At twenty I was offered a job in Canada. I said no, because I was scared. Today I regret it a little: if I'd accepted, my life would have been very different.",
      },
      question: {
        prompt: { es: "¿Por qué rechazó la oferta?", en: "Why did the speaker turn the offer down?" },
        options: [
          { es: "Porque tenía miedo", en: "Out of fear" },
          { es: "Porque el sueldo era bajo", en: "The salary was low" },
          { es: "Porque no hablaba inglés", en: "They didn't speak English" },
          { es: "Porque estaba enfermo/a", en: "They were ill" },
        ],
        answer: 0,
      },
      exercises: ["question", "listen"], tags: ["listening", "regret"],
    },
    {
      id: "dlg-anniversaire", type: "dialogue", target: "J'aurais dû te prévenir.", register: "informal",
      gloss: { es: "Debería haberte avisado.", en: "I should have let you know." },
      turns: [
        { who: "A", target: "Tu n'es pas venu à mon anniversaire samedi…", gloss: { es: "No viniste a mi cumpleaños el sábado…", en: "You didn't come to my birthday on Saturday…" } },
        { who: "B", target: "Je suis désolé, j'étais malade. J'aurais dû te prévenir.", gloss: { es: "Lo siento, estaba enfermo. Debería haberte avisado.", en: "I'm sorry, I was ill. I should have let you know." } },
        { who: "A", target: "Oui, tu aurais pu m'envoyer un message ! Je t'ai attendu.", gloss: { es: "¡Sí, me podrías haber mandado un mensaje! Te estuve esperando.", en: "Yes, you could have sent me a message! I waited for you." } },
        { who: "B", target: "Tu as raison. Je t'invite à dîner pour me faire pardonner ?", gloss: { es: "Tienes razón. ¿Te invito a cenar para que me perdones?", en: "You're right. Can I take you out to dinner to make up for it?" } },
      ],
      question: {
        prompt: { es: "¿Qué le reprocha A a B?", en: "What does A reproach B for?" },
        options: [
          { es: "No haberle avisado", en: "Not letting her know" },
          { es: "Haber llegado tarde", en: "Arriving late" },
          { es: "No haberle traído un regalo", en: "Not bringing a present" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "regret"],
    },
    // ── Bridges ──────────────────────────────────────────────
    {
      id: "br-si-pqp", type: "bridge", onlyFor: "es", target: "si j'avais su",
      gloss: { es: "si hubiera sabido", en: "if I had known" },
      distractors: ["si j'aurais su", "si j'eus su", "si je savais eu"],
      note: { es: "«si hubiera…» → si + plus-que-parfait (si j'avais su); nunca condicional después de «si», igual que en español culto." },
      exercises: ["guess", "recall"], tags: ["bridge", "hypotheses"],
    },
    {
      id: "br-deception", type: "bridge", onlyFor: "es", target: "la déception",
      gloss: { es: "la decepción, la desilusión", en: "the disappointment" },
      question: {
        prompt: { es: "«Quelle déception !» significa…", en: "'Quelle déception !' means…" },
        options: [
          { es: "¡Qué decepción!", en: "What a disappointment!" },
          { es: "¡Qué engaño!", en: "What a deception!" },
          { es: "¡Qué recepción!", en: "What a reception!" },
        ],
        answer: 0,
      },
      note: { es: "Aquí sí coincide con el español: déçu/e = decepcionado/a. «Engañar» es tromper." },
      exercises: ["guess", "question"], tags: ["bridge", "feelings"],
    },
  ]),
};
