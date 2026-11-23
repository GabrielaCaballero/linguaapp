import type { Unit } from "../schema";
import { build } from "../build";

export const unit: Unit = {
  id: "en-u06",
  lang: "en",
  index: 6,
  cefr: "A1.1",
  title: { target: "Where do you live?", es: "¿Dónde vives?", en: "Where do you live?" },
  canDo: [
    { es: "Puedo describir mi casa y mi barrio.", en: "I can describe my home and my neighborhood." },
    { es: "Puedo preguntar dónde está algo y entender la respuesta.", en: "I can ask where something is and understand the answer." },
    { es: "Sé usar «there is / there are» y las preposiciones in, on, at, next to, under.", en: "I can use 'there is / there are' and the prepositions in, on, at, next to, under." },
  ],
  icon: "🏠",
  items: build("en", 6, "A1.1", [
    // ── Sounds ───────────────────────────────────────────────
    {
      id: "s-live-leave", type: "sound", target: "live", pair: ["live", "leave"], slow: true,
      gloss: { es: "vivir", en: "to live" },
      distractors: ["leave", "life", "lift"],
      note: { es: "La «i» corta de «live» (vivir) es breve y relajada; la «ea» de «leave» (irse) es una «i» larga." },
      exercises: ["pick-spelling", "listen"], tags: ["sound", "vowels", "minimal-pair"],
    },

    // ── Home ─────────────────────────────────────────────────
    {
      id: "apartment", type: "word", target: "apartment", plural: "apartments",
      gloss: { es: "departamento, apartamento", en: "apartment" },
      accept: [{ text: "flat" }],
      distractors: ["department", "compartment", "appointment"],
      note: { es: "«department» es un departamento de una empresa o del gobierno; la vivienda es «apartment» (en Reino Unido, «flat»)." },
      tags: ["home", "false-friend"],
    },
    {
      id: "kitchen", type: "word", target: "kitchen", plural: "kitchens",
      gloss: { es: "cocina (el cuarto)", en: "kitchen" },
      distractors: ["chicken", "kitten", "cooker"],
      note: { es: "kitchen (cocina) no es chicken (pollo)." },
      tags: ["home"],
    },
    {
      id: "bedroom", type: "word", target: "bedroom", plural: "bedrooms",
      gloss: { es: "dormitorio, recámara", en: "bedroom" },
      distractors: ["bathroom", "bedtime", "living room"],
      tags: ["home"],
    },
    {
      id: "bathroom", type: "word", target: "bathroom", plural: "bathrooms",
      gloss: { es: "baño", en: "bathroom" },
      accept: [{ text: "restroom" }],
      distractors: ["bedroom", "bath", "bathrobe"],
      note: { es: "En un lugar público, en Estados Unidos se pregunta por el «restroom»." },
      tags: ["home"],
    },
    {
      id: "living-room", type: "word", target: "living room", plural: "living rooms",
      gloss: { es: "sala, living", en: "living room" },
      distractors: ["live room", "bedroom", "dining room"],
      tags: ["home"],
    },
    {
      id: "yard", type: "word", target: "yard", plural: "yards",
      gloss: { es: "patio, jardín (de una casa)", en: "yard" },
      accept: [{ text: "backyard" }, { text: "garden" }],
      distractors: ["year", "yarn", "card"],
      tags: ["home"],
    },
    {
      id: "neighborhood", type: "word", target: "neighborhood", plural: "neighborhoods",
      gloss: { es: "barrio, colonia", en: "neighborhood" },
      accept: [{ text: "neighbourhood" }],
      distractors: ["neighbor", "childhood", "nearby"],
      note: { es: "Ortografía americana: neighborhood; británica: neighbourhood." },
      tags: ["home", "city"],
    },
    {
      id: "downtown", type: "word", pos: "adv", target: "downtown",
      gloss: { es: "en el centro (de la ciudad)", en: "downtown (city center)" },
      accept: [{ text: "in the city center" }],
      distractors: ["down town", "uptown", "downstairs"],
      note: { es: "«I live downtown» = vivo en el centro; sin «in»." },
      tags: ["city"],
    },
    {
      id: "supermarket", type: "word", target: "supermarket", plural: "supermarkets",
      gloss: { es: "supermercado", en: "supermarket" },
      accept: [{ text: "grocery store" }],
      distractors: ["supermarked", "market", "superstore's"],
      tags: ["city", "shopping"],
    },
    {
      id: "pharmacy", type: "word", target: "pharmacy", plural: "pharmacies",
      gloss: { es: "farmacia", en: "pharmacy" },
      accept: [{ text: "drugstore" }],
      distractors: ["farmacy", "pharmacist", "factory"],
      note: { es: "«ph» suena «f»; en Estados Unidos también se dice «drugstore»." },
      tags: ["city", "health"],
    },
    {
      id: "next-to", type: "word", pos: "prep", target: "next to",
      gloss: { es: "al lado de", en: "next to" },
      accept: [{ text: "beside" }],
      distractors: ["near of", "next of", "besides"],
      tags: ["places", "prepositions"],
    },
    {
      id: "under", type: "word", pos: "prep", target: "under",
      gloss: { es: "debajo de", en: "under" },
      distractors: ["over", "inder", "and"],
      tags: ["places", "prepositions"],
    },
    {
      id: "across-from", type: "word", pos: "prep", target: "across from",
      gloss: { es: "enfrente de", en: "across from" },
      accept: [{ text: "opposite" }],
      distractors: ["in front of", "behind", "across of"],
      note: { es: "«in front of» = delante de (no necesariamente cruzando la calle)." },
      tags: ["places", "prepositions"],
    },

    // ── Sentences ────────────────────────────────────────────
    {
      id: "i-live-in-chicago", type: "sentence", target: "I live in an apartment in Chicago.",
      gloss: { es: "Vivo en un departamento en Chicago.", en: "I live in an apartment in Chicago." },
      accept: [{ text: "I live in a flat in Chicago." }],
      errors: [{ text: "I live in a apartment in Chicago.", feedback: { es: "apartment empieza con vocal: an apartment." }, ruleId: "en-g-a-an" }],
      distractors: ["leave", "on", "a"],
      grammar: ["en-g-prep-place"],
      tags: ["home", "city"],
    },
    {
      id: "there-are-two-bedrooms", type: "sentence", target: "There are two bedrooms and one bathroom.",
      gloss: { es: "Hay dos dormitorios y un baño.", en: "There are two bedrooms and one bathroom." },
      accept: [{ text: "There are two bedrooms and a bathroom." }],
      errors: [
        { text: "There is two bedrooms and one bathroom.", feedback: { es: "Con un plural después: there are." }, ruleId: "en-g-there-is" },
        { text: "Have two bedrooms and one bathroom.", feedback: { es: "«hay» es «there is / there are», no «have»." }, ruleId: "en-g-there-is" },
      ],
      distractors: ["is", "Have", "Their"],
      grammar: ["en-g-there-is"],
      tags: ["home"],
    },
    {
      id: "is-there-a-pharmacy", type: "sentence", target: "Is there a pharmacy near here?",
      gloss: { es: "¿Hay una farmacia cerca de aquí?", en: "Is there a pharmacy near here?" },
      accept: [{ text: "Is there a pharmacy nearby?" }, { text: "Is there a drugstore near here?" }],
      errors: [{ text: "There is a pharmacy near here?", feedback: { es: "En la pregunta, «is» va antes: Is there…?" }, ruleId: "en-g-there-is" }],
      distractors: ["Are", "of", "Has"],
      grammar: ["en-g-there-is"],
      tags: ["city", "questions"],
    },
    {
      id: "keys-on-table", type: "sentence", target: "Your keys are on the kitchen table.",
      gloss: { es: "Tus llaves están en la mesa de la cocina.", en: "Your keys are on the kitchen table." },
      errors: [{ text: "Your keys are in the kitchen table.", feedback: { es: "Sobre una superficie se usa «on»: on the table." }, ruleId: "en-g-prep-place" }],
      distractors: ["in", "is", "at"],
      grammar: ["en-g-prep-place"],
      annot: { on: { es: "sobre una superficie", en: "on a surface" } },
      tags: ["home", "prepositions"],
    },
    {
      id: "at-work", type: "sentence", target: "My sister is at work and my parents are at home.",
      gloss: { es: "Mi hermana está en el trabajo y mis padres están en casa.", en: "My sister is at work and my parents are at home." },
      accept: [{ text: "My sister's at work and my parents are at home." }],
      errors: [{ text: "My sister is in work and my parents are in home.", feedback: { es: "Expresiones fijas con «at»: at work, at home, at school." }, ruleId: "en-g-prep-place" }],
      distractors: ["in", "the", "on"],
      grammar: ["en-g-prep-place"],
      tags: ["home", "prepositions"],
    },
    {
      id: "bank-across-from", type: "sentence", target: "The bank is across from the park.",
      gloss: { es: "El banco está enfrente del parque.", en: "The bank is across from the park." },
      accept: [{ text: "The bank is opposite the park." }],
      distractors: ["of", "in", "front"],
      grammar: ["en-g-prep-place"],
      tags: ["city", "prepositions"],
    },

    // ── Grammar ──────────────────────────────────────────────
    {
      id: "pat-there-is", type: "pattern", target: "there is · there are",
      gloss: { es: "«hay» en inglés", en: "there is / there are" },
      pattern: {
        rule: {
          es: "«Hay» se dice «there is» (con singular) o «there are» (con plural). En preguntas se invierte («Is there…?», «Are there…?») y en negativo se dice «there isn't» / «there aren't».",
          en: "Use 'there is' with a singular and 'there are' with a plural. Questions invert: Is there…? / Are there…? Negative: there isn't / there aren't.",
        },
        table: [["", "singular", "plural"], ["+", "There's a park.", "There are two parks."], ["?", "Is there a park?", "Are there any parks?"], ["−", "There isn't a park.", "There aren't any parks."]],
      },
      question: {
        prompt: { es: "Completa: «___ three supermarkets in my neighborhood.»", en: "Complete: '___ three supermarkets in my neighborhood.'" },
        options: ["There are", "There is", "They are", "Have"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-there-is"], tags: ["grammar", "there-is"],
    },
    {
      id: "pat-in-on-at", type: "pattern", target: "in · on · at",
      gloss: { es: "en (lugar): in, on, at", en: "in, on, at for places" },
      pattern: {
        rule: {
          es: "El español usa «en» para todo; el inglés distingue: in = dentro (in the kitchen, in Chicago), on = sobre una superficie (on the table, on the wall), at = en un punto o lugar de actividad (at home, at work, at the bus stop).",
          en: "in = inside (in the kitchen, in Chicago), on = on a surface (on the table, on the wall), at = at a point or place of activity (at home, at work, at the bus stop).",
        },
        table: [["in", "on", "at"], ["in the box", "on the table", "at home"], ["in Mexico", "on the wall", "at work"], ["in the car", "on the floor", "at the door"]],
      },
      question: {
        prompt: { es: "Completa: «The photo is ___ the wall.»", en: "Complete: 'The photo is ___ the wall.'" },
        options: ["on", "in", "at", "of"],
        answer: 0,
      },
      exercises: ["question"], grammar: ["en-g-prep-place"], tags: ["grammar", "prepositions"],
    },

    // ── Dialogue + listening ─────────────────────────────────
    {
      id: "dlg-new-apartment", type: "dialogue", target: "Is there a yard?",
      gloss: { es: "¿Tiene patio?", en: "Is there a yard?" },
      turns: [
        { who: "A", target: "So, how's your new place?", gloss: { es: "¿Y qué tal tu casa nueva?", en: "So, how's your new place?" } },
        { who: "B", target: "I love it! It's a small apartment downtown, next to a park.", gloss: { es: "¡Me encanta! Es un departamento chico en el centro, al lado de un parque.", en: "I love it! It's a small apartment downtown, next to a park." } },
        { who: "A", target: "How many bedrooms are there?", gloss: { es: "¿Cuántos dormitorios tiene?", en: "How many bedrooms are there?" } },
        { who: "B", target: "Just one, but the kitchen is really big.", gloss: { es: "Solo uno, pero la cocina es muy grande.", en: "Just one, but the kitchen is really big." } },
        { who: "A", target: "Is there a yard?", gloss: { es: "¿Tiene patio?", en: "Is there a yard?" } },
        { who: "B", target: "No, there isn't. But there's a balcony.", gloss: { es: "No. Pero tiene balcón.", en: "No, there isn't. But there's a balcony." } },
      ],
      question: {
        prompt: { es: "¿Qué tiene el departamento?", en: "What does the apartment have?" },
        options: [
          { es: "Un dormitorio, una cocina grande y un balcón", en: "One bedroom, a big kitchen and a balcony" },
          { es: "Dos dormitorios y un patio", en: "Two bedrooms and a yard" },
          { es: "Un dormitorio y un patio", en: "One bedroom and a yard" },
        ],
        answer: 0,
      },
      exercises: ["question"], tags: ["dialogue", "home"],
    },
    {
      id: "lis-directions", type: "listening", target: "The pharmacy? It's on Main Street, next to the supermarket and across from the bank.",
      gloss: { es: "¿La farmacia? Está en Main Street, al lado del supermercado y enfrente del banco.", en: "The pharmacy? It's on Main Street, next to the supermarket and across from the bank." },
      question: {
        prompt: { es: "¿Qué hay al lado de la farmacia?", en: "What is next to the pharmacy?" },
        options: [
          { es: "El supermercado", en: "The supermarket" },
          { es: "El banco", en: "The bank" },
          { es: "Un parque", en: "A park" },
        ],
        answer: 0,
      },
      note: { es: "Las calles van con «on»: on Main Street." },
      exercises: ["question", "listen"], tags: ["listening", "city", "prepositions"],
    },

    // ── Bridge (es) ──────────────────────────────────────────
    {
      id: "br-apartment", type: "bridge", onlyFor: "es", target: "department",
      gloss: { es: "departamento (de una empresa o del gobierno)", en: "department (of a company or government)" },
      question: {
        prompt: { es: "«She works in the sales department» significa…", en: "'She works in the sales department' means…" },
        options: [
          { es: "Trabaja en el departamento de ventas.", en: "She works in the sales section of a company." },
          { es: "Trabaja en un departamento en venta.", en: "She works in an apartment for sale." },
          { es: "Vende departamentos.", en: "She sells apartments." },
        ],
        answer: 0,
      },
      note: { es: "La vivienda es «apartment»; «department» es una sección de una empresa, una tienda o el gobierno." },
      exercises: ["guess", "question"], tags: ["bridge", "false-friend", "home"],
    },
  ]),
};
