import type { Mcq, PlacementItem } from "../schema";
import { spreadAnswers } from "../build";

// 36 items · 6 per band (A0, A1.1, A1.2, A2, B1, B2) · per band: 2 vocab, 2 grammar,
// 1 listening, 1 reading. False friends for Spanish speakers flagged (weighted ×1.5 es→fr).
// b: A0 −2.5 · A1.1 −1.5 · A1.2 −0.5 · A2 +0.5 · B1 +1.5 · B2 +2.5 (±0.4 within band).
// Authors write the key as option 0; spreadAnswers rotates it deterministically.
const MEAN: Mcq["prompt"] = { es: "¿Qué significa?", en: "What does it mean?" };
const CLOZE: Mcq["prompt"] = { es: "Completa la frase.", en: "Complete the sentence." };
const HEARD: Mcq["prompt"] = { es: "¿Qué oíste?", en: "What did you hear?" };

const bank: PlacementItem[] = [
  // ── A0 ─────────────────────────────────────────────────────
  {
    id: "fr-p-01", lang: "fr", cefr: "A0", b: -2.8, skill: "vocab", kind: "mcq", stem: "Bonne nuit !",
    mcq: { prompt: MEAN, options: [{ es: "¡Buenas noches! (al irse a dormir)", en: "Good night!" }, { es: "¡Buenos días!", en: "Good morning!" }, { es: "¡Hasta luego!", en: "See you later!" }, { es: "¡Gracias!", en: "Thank you!" }], answer: 0 },
    seeds: ["fr-u01-bonne-nuit", "fr-u01-bonsoir", "fr-u01-bonjour"],
  },
  {
    id: "fr-p-02", lang: "fr", cefr: "A0", b: -2.3, skill: "vocab", kind: "mcq", stem: "Merci beaucoup !",
    mcq: { prompt: MEAN, options: [{ es: "¡Muchas gracias!", en: "Thank you very much!" }, { es: "¡De nada!", en: "You're welcome!" }, { es: "¡Perdón!", en: "Sorry!" }, { es: "¡Por favor!", en: "Please!" }], answer: 0 },
    seeds: ["fr-u01-merci-beaucoup", "fr-u01-merci", "fr-u01-de-rien"],
  },
  {
    id: "fr-p-03", lang: "fr", cefr: "A0", b: -2.6, skill: "grammar", kind: "cloze", stem: "Salut ! Comment tu t'___ ?",
    mcq: { prompt: CLOZE, options: ["appelles", "appelle", "appelez", "appelons"], answer: 0 },
    seeds: ["fr-u01-comment-tu-tappelles", "fr-u01-je-mappelle"],
  },
  {
    id: "fr-p-04", lang: "fr", cefr: "A0", b: -2.2, skill: "grammar", kind: "mcq",
    mcq: {
      prompt: { es: "Quieres pedirle algo a una señora que no conoces. ¿Qué dices primero?", en: "You want to ask a woman you don't know something. What do you say first?" },
      options: ["Excusez-moi, madame.", "Excuse-moi, madame.", "Salut, madame.", "De rien, madame."], answer: 0,
    },
    seeds: ["fr-u01-excusez-moi", "fr-u01-excuse-moi", "fr-u01-pat-tu-vous"],
  },
  {
    id: "fr-p-05", lang: "fr", cefr: "A0", b: -2.5, skill: "listening", kind: "listen", spoken: "Bonsoir, monsieur.",
    mcq: { prompt: HEARD, options: ["Bonsoir, monsieur.", "Bonjour, monsieur.", "Bonne nuit, monsieur.", "Au revoir, monsieur."], answer: 0 },
    seeds: ["fr-u01-bonsoir"],
  },
  {
    id: "fr-p-06", lang: "fr", cefr: "A0", b: -2.4, skill: "reading", kind: "mcq", stem: "Bonjour, je m'appelle Paul. Et vous ?",
    mcq: {
      prompt: { es: "¿Qué dice Paul?", en: "What does Paul say?" },
      options: [{ es: "Dice su nombre y pregunta el tuyo.", en: "He says his name and asks yours." }, { es: "Dice que se va.", en: "He says he's leaving." }, { es: "Pregunta cómo estás.", en: "He asks how you are." }, { es: "Dice de dónde es.", en: "He says where he's from." }],
      answer: 0,
    },
    seeds: ["fr-u01-je-mappelle", "fr-u01-bonjour"],
  },

  // ── A1.1 ───────────────────────────────────────────────────
  {
    id: "fr-p-07", lang: "fr", cefr: "A1.1", b: -1.3, skill: "vocab", kind: "mcq", stem: "Au restaurant : « La carte, s'il vous plaît. »", falseFriend: true,
    mcq: { prompt: { es: "¿Qué pide el cliente?", en: "What is the customer asking for?" }, options: [{ es: "El menú (la carta con los platos)", en: "The menu" }, { es: "Una carta para enviar", en: "A letter to post" }, { es: "La cuenta", en: "The bill" }, { es: "Un mapa de la ciudad", en: "A street map" }], answer: 0 },
    seeds: ["fr-u04-br-carte"],
  },
  {
    id: "fr-p-08", lang: "fr", cefr: "A1.1", b: -1.7, skill: "vocab", kind: "mcq", stem: "la sœur",
    mcq: { prompt: MEAN, options: [{ es: "la hermana", en: "the sister" }, { es: "la madre", en: "the mother" }, { es: "la hija", en: "the daughter" }, { es: "la abuela", en: "the grandmother" }], answer: 0 },
    seeds: ["fr-u05-soeur", "fr-u05-frere"],
  },
  {
    id: "fr-p-09", lang: "fr", cefr: "A1.1", b: -1.6, skill: "grammar", kind: "cloze", stem: "J'ai trente ___.",
    mcq: { prompt: CLOZE, options: ["ans", "années", "an", "âges"], answer: 0 },
    seeds: ["fr-u03-jai-trente-ans", "fr-u03-pat-avoir", "fr-u03-avoir"],
  },
  {
    id: "fr-p-10", lang: "fr", cefr: "A1.1", b: -1.4, skill: "grammar", kind: "cloze", stem: "Nous ___ français, et vous ?",
    mcq: { prompt: CLOZE, options: ["sommes", "sont", "êtes", "suis"], answer: 0 },
    seeds: ["fr-u02-pat-etre", "fr-u02-tab-etre"],
  },
  {
    id: "fr-p-11", lang: "fr", cefr: "A1.1", b: -1.2, skill: "listening", kind: "listen", spoken: "Ça fait soixante-quinze euros.",
    mcq: { prompt: { es: "¿Cuánto hay que pagar?", en: "How much do you have to pay?" }, options: ["75 €", "65 €", "95 €", "57 €"], answer: 0 },
    seeds: ["fr-u03-pat-nombres", "fr-u03-soixante-dix"],
  },
  {
    id: "fr-p-12", lang: "fr", cefr: "A1.1", b: -1.8, skill: "reading", kind: "mcq", stem: "J'habite à Lyon avec ma sœur. Elle est médecin et elle parle trois langues.",
    mcq: {
      prompt: { es: "¿Qué sabemos de la hermana?", en: "What do we know about the sister?" },
      options: [{ es: "Es médica y habla tres idiomas.", en: "She's a doctor and speaks three languages." }, { es: "Vive sola en Lyon.", en: "She lives alone in Lyon." }, { es: "Es profesora.", en: "She's a teacher." }, { es: "Habla dos idiomas.", en: "She speaks two languages." }],
      answer: 0,
    },
    seeds: ["fr-u05-ma-soeur-habite", "fr-u02-jhabite-a-lyon", "fr-u02-langue"],
  },

  // ── A1.2 ───────────────────────────────────────────────────
  {
    id: "fr-p-13", lang: "fr", cefr: "A1.2", b: -0.3, skill: "vocab", kind: "mcq", stem: "Ta chemise est sale.", falseFriend: true,
    mcq: { prompt: MEAN, options: [{ es: "Tu camisa está sucia.", en: "Your shirt is dirty." }, { es: "Tu camisa sale (se va).", en: "Your shirt is leaving." }, { es: "Tu camisa está salada.", en: "Your shirt is salty." }, { es: "Tu camisa está en oferta.", en: "Your shirt is on sale." }], answer: 0 },
    seeds: ["fr-u08-br-sale"],
  },
  {
    id: "fr-p-14", lang: "fr", cefr: "A1.2", b: -0.6, skill: "vocab", kind: "mcq", stem: "J'attends le bus.", falseFriend: true,
    mcq: { prompt: MEAN, options: [{ es: "Espero el autobús.", en: "I'm waiting for the bus." }, { es: "Atiendo el autobús.", en: "I'm serving the bus." }, { es: "Entiendo el autobús.", en: "I understand the bus." }, { es: "Tomo el autobús.", en: "I'm taking the bus." }], answer: 0 },
    seeds: ["fr-u09-br-attendre", "fr-u09-attendre", "fr-u09-jattends-le-bus"],
  },
  {
    id: "fr-p-15", lang: "fr", cefr: "A1.2", b: -0.4, skill: "grammar", kind: "cloze", stem: "Je n'ai pas ___ voiture.",
    mcq: { prompt: CLOZE, options: ["de", "une", "la", "des"], answer: 0 },
    seeds: ["fr-u08-pat-negation", "fr-u09-pas-de-lait"],
  },
  {
    id: "fr-p-16", lang: "fr", cefr: "A1.2", b: -0.7, skill: "grammar", kind: "cloze", stem: "Le matin, je bois ___ café.",
    mcq: { prompt: CLOZE, options: ["du", "de la", "de", "des"], answer: 0 },
    seeds: ["fr-u09-pat-partitif", "fr-u09-je-voudrais-du-fromage"],
  },
  {
    id: "fr-p-17", lang: "fr", cefr: "A1.2", b: -0.5, skill: "listening", kind: "listen", spoken: "Je me lève à sept heures et quart.",
    mcq: { prompt: { es: "¿A qué hora se levanta?", en: "What time does the speaker get up?" }, options: ["7:15", "7:45", "6:15", "7:30"], answer: 0 },
    seeds: ["fr-u07-je-me-leve-a-sept", "fr-u07-pat-heure", "fr-u07-se-lever"],
  },
  {
    id: "fr-p-18", lang: "fr", cefr: "A1.2", b: -0.2, skill: "reading", kind: "mcq", stem: "Le samedi, je fais du vélo. Je ne regarde jamais la télé : je préfère lire.",
    mcq: {
      prompt: { es: "¿Qué no hace nunca esta persona?", en: "What does this person never do?" },
      options: [{ es: "Ver la tele", en: "Watch TV" }, { es: "Andar en bici", en: "Go cycling" }, { es: "Leer", en: "Read" }, { es: "Hacer deporte", en: "Do sport" }],
      answer: 0,
    },
    seeds: ["fr-u08-jamais", "fr-u08-je-fais-du-sport", "fr-u08-lire"],
  },

  // ── A2 ─────────────────────────────────────────────────────
  {
    id: "fr-p-19", lang: "fr", cefr: "A2", b: 0.6, skill: "vocab", kind: "mcq", stem: "Ce week-end, je reste à la maison.", falseFriend: true,
    mcq: { prompt: MEAN, options: [{ es: "Este fin de semana me quedo en casa.", en: "This weekend I'm staying at home." }, { es: "Este fin de semana descanso en casa.", en: "This weekend I'm resting at home." }, { es: "Este fin de semana vuelvo a casa.", en: "This weekend I'm going back home." }, { es: "Este fin de semana limpio la casa.", en: "This weekend I'm cleaning the house." }], answer: 0 },
    seeds: ["fr-u10-br-rester"],
  },
  {
    id: "fr-p-20", lang: "fr", cefr: "A2", b: 0.3, skill: "vocab", kind: "mcq", stem: "le quai",
    mcq: { prompt: MEAN, options: [{ es: "la plataforma del tren", en: "the platform" }, { es: "el boleto", en: "the ticket" }, { es: "la maleta", en: "the suitcase" }, { es: "el retraso", en: "the delay" }], answer: 0 },
    seeds: ["fr-u12-quai", "fr-u12-quel-quai"],
  },
  {
    id: "fr-p-21", lang: "fr", cefr: "A2", b: 0.5, skill: "grammar", kind: "cloze", stem: "Hier, Sophie ___ arrivée en retard.",
    mcq: { prompt: CLOZE, options: ["est", "a", "ai", "ont"], answer: 0 },
    seeds: ["fr-u12-pat-pc-etre", "fr-u12-elle-est-arrivee", "fr-u12-je-suis-alle"],
  },
  {
    id: "fr-p-22", lang: "fr", cefr: "A2", b: 0.7, skill: "grammar", kind: "cloze", stem: "Quand j'étais petit, je ___ au foot tous les mercredis.",
    mcq: { prompt: CLOZE, options: ["jouais", "joue", "jouerai", "jouerais"], answer: 0 },
    seeds: ["fr-u11-pat-pc-imparfait", "fr-u11-pat-imparfait", "fr-u11-on-jouait"],
  },
  {
    id: "fr-p-23", lang: "fr", cefr: "A2", b: 0.4, skill: "listening", kind: "listen", spoken: "Le train pour Marseille partira avec vingt minutes de retard.",
    mcq: {
      prompt: { es: "¿Qué pasa con el tren?", en: "What's happening with the train?" },
      options: [{ es: "Sale con veinte minutos de retraso.", en: "It's leaving twenty minutes late." }, { es: "Sale veinte minutos antes.", en: "It's leaving twenty minutes early." }, { es: "Está cancelado.", en: "It's cancelled." }, { es: "Sale a las ocho de la noche.", en: "It leaves at eight p.m." }],
      answer: 0,
    },
    seeds: ["fr-u12-retard", "fr-u12-partir"],
  },
  {
    id: "fr-p-24", lang: "fr", cefr: "A2", b: 0.2, skill: "reading", kind: "mcq", stem: "Samedi, nous sommes allés à la plage. Il faisait beau, mais l'eau était froide.",
    mcq: {
      prompt: { es: "¿Cómo estaba el agua?", en: "What was the water like?" },
      options: [{ es: "Fría", en: "Cold" }, { es: "Caliente", en: "Warm" }, { es: "Sucia", en: "Dirty" }, { es: "No se dice", en: "It doesn't say" }],
      answer: 0,
    },
    seeds: ["fr-u12-plage", "fr-u12-nous-sommes-partis", "fr-u11-pat-pc-imparfait"],
  },

  // ── B1 ─────────────────────────────────────────────────────
  {
    id: "fr-p-25", lang: "fr", cefr: "B1", b: 1.4, skill: "vocab", kind: "mcq", stem: "Docteur, je suis constipé.", falseFriend: true,
    mcq: { prompt: { es: "¿Qué problema tiene el paciente?", en: "What is the patient's problem?" }, options: [{ es: "Está estreñido.", en: "He's constipated." }, { es: "Está resfriado.", en: "He has a cold." }, { es: "Está muy cansado.", en: "He's very tired." }, { es: "Tiene fiebre.", en: "He has a temperature." }], answer: 0 },
    seeds: ["fr-u13-br-constipe", "fr-u13-rhume"],
  },
  {
    id: "fr-p-26", lang: "fr", cefr: "B1", b: 1.7, skill: "vocab", kind: "mcq", stem: "Je cherche un stage dans une banque.", falseFriend: true,
    mcq: { prompt: MEAN, options: [{ es: "Busco hacer prácticas en un banco.", en: "I'm looking for an internship at a bank." }, { es: "Busco un escenario en un banco.", en: "I'm looking for a stage in a bank." }, { es: "Busco un ascenso en un banco.", en: "I'm looking for a promotion at a bank." }, { es: "Busco un préstamo de un banco.", en: "I'm looking for a bank loan." }], answer: 0 },
    seeds: ["fr-u14-br-stage", "fr-u14-chercher"],
  },
  {
    id: "fr-p-27", lang: "fr", cefr: "B1", b: 1.5, skill: "grammar", kind: "cloze", stem: "Il faut que tu ___ avec nous ce soir. (venir)",
    mcq: { prompt: CLOZE, options: ["viennes", "viens", "viendras", "venir"], answer: 0 },
    seeds: ["fr-u15-il-faut-que-tu-viennes", "fr-u15-pat-subjonctif"],
  },
  {
    id: "fr-p-28", lang: "fr", cefr: "B1", b: 1.6, skill: "grammar", kind: "cloze", stem: "Si j'___ le temps, je viendrais.",
    mcq: { prompt: CLOZE, options: ["avais", "aurais", "ai", "aurai"], answer: 0 },
    seeds: ["fr-u17-si-javais-le-temps", "fr-u17-pat-si-imparfait"],
  },
  {
    id: "fr-p-29", lang: "fr", cefr: "B1", b: 1.2, skill: "listening", kind: "listen", spoken: "Prenez ce sirop trois fois par jour, après les repas.",
    mcq: {
      prompt: { es: "¿Cuándo hay que tomar el jarabe?", en: "When should the syrup be taken?" },
      options: [{ es: "Tres veces al día, después de comer", en: "Three times a day, after meals" }, { es: "Dos veces al día, antes de comer", en: "Twice a day, before meals" }, { es: "Solo en la noche", en: "Only at night" }, { es: "Cada tres días", en: "Every three days" }],
      answer: 0,
    },
    seeds: ["fr-u13-prenez-deux-comprimes", "fr-u13-pat-imperatif"],
  },
  {
    id: "fr-p-30", lang: "fr", cefr: "B1", b: 1.8, skill: "reading", kind: "mcq", stem: "Je ne pense pas que le télétravail soit idéal : on perd le contact avec les collègues.",
    mcq: {
      prompt: { es: "¿Qué opina la persona?", en: "What does the speaker think?" },
      options: [{ es: "Que el teletrabajo tiene una desventaja: se pierde el contacto.", en: "Working from home has a drawback: you lose contact." }, { es: "Que el teletrabajo es ideal.", en: "Working from home is ideal." }, { es: "Que hay que ver menos a los compañeros.", en: "You should see colleagues less." }, { es: "Que no tiene opinión.", en: "They have no opinion." }],
      answer: 0,
    },
    seeds: ["fr-u15-je-ne-pense-pas-que", "fr-u15-pat-opinion"],
  },

  // ── B2 ─────────────────────────────────────────────────────
  {
    id: "fr-p-31", lang: "fr", cefr: "B2", b: 2.4, skill: "vocab", kind: "mcq", stem: "L'usine a licencié cinquante personnes.", falseFriend: true,
    mcq: { prompt: MEAN, options: [{ es: "La fábrica despidió a cincuenta personas.", en: "The factory laid off fifty people." }, { es: "La fábrica dio licencia a cincuenta personas.", en: "The factory gave fifty people leave." }, { es: "Cincuenta personas se licenciaron en la fábrica.", en: "Fifty people graduated at the factory." }, { es: "La fábrica contrató a cincuenta personas.", en: "The factory hired fifty people." }], answer: 0 },
    seeds: ["fr-u19-br-licencier", "fr-u19-licencier", "fr-u19-embaucher"],
  },
  {
    id: "fr-p-32", lang: "fr", cefr: "B2", b: 2.7, skill: "vocab", kind: "mcq", stem: "Il m'a posé un lapin.",
    mcq: { prompt: MEAN, options: [{ es: "Me dejó plantado/a.", en: "He stood me up." }, { es: "Me regaló un conejo.", en: "He gave me a rabbit." }, { es: "Me hizo una pregunta tonta.", en: "He asked me a silly question." }, { es: "Llegó muy temprano.", en: "He arrived very early." }], answer: 0 },
    seeds: ["fr-u24-poser-un-lapin"],
  },
  {
    id: "fr-p-33", lang: "fr", cefr: "B2", b: 2.5, skill: "grammar", kind: "cloze", stem: "C'est le livre ___ j'ai besoin.",
    mcq: { prompt: CLOZE, options: ["dont", "que", "où", "lequel"], answer: 0 },
    seeds: ["fr-u19-ce-dont-jai-besoin", "fr-u19-pat-dont", "fr-u19-le-projet-dont"],
  },
  {
    id: "fr-p-34", lang: "fr", cefr: "B2", b: 2.8, skill: "grammar", kind: "cloze", stem: "Si j'avais su, je ___ plus tôt.",
    mcq: { prompt: CLOZE, options: ["serais venu", "serai venu", "venais", "suis venu"], answer: 0 },
    seeds: ["fr-u21-si-javais-su", "fr-u21-pat-si-pqp", "fr-u21-pat-cond-passe"],
  },
  {
    id: "fr-p-35", lang: "fr", cefr: "B2", b: 2.3, skill: "listening", kind: "listen", spoken: "Bien qu'il soit compétent, il n'a pas obtenu le poste.",
    mcq: {
      prompt: { es: "¿Qué pasó?", en: "What happened?" },
      options: [{ es: "No consiguió el puesto, aunque es competente.", en: "He didn't get the job, although he's competent." }, { es: "Consiguió el puesto porque es competente.", en: "He got the job because he's competent." }, { es: "No es competente para el puesto.", en: "He isn't competent for the job." }, { es: "Rechazó el puesto.", en: "He turned the job down." }],
      answer: 0,
    },
    seeds: ["fr-u19-bien-quil-soit", "fr-u23-pat-subj-conjonctions"],
  },
  {
    id: "fr-p-36", lang: "fr", cefr: "B2", b: 2.6, skill: "reading", kind: "mcq", stem: "Le maire a affirmé qu'il interdirait les voitures au centre. Néanmoins, les commerçants s'y opposent.",
    mcq: {
      prompt: { es: "¿Qué hacen los comerciantes?", en: "What are the shopkeepers doing?" },
      options: [{ es: "Se oponen a la medida.", en: "They oppose the measure." }, { es: "Apoyan al alcalde.", en: "They support the mayor." }, { es: "Ya prohibieron los coches.", en: "They've already banned cars." }, { es: "Cierran sus tiendas.", en: "They're closing their shops." }],
      answer: 0,
    },
    seeds: ["fr-u23-affirmer", "fr-u23-neanmoins", "fr-u23-il-a-dit-que"],
  },
];

export const placement: PlacementItem[] = spreadAnswers(bank);
