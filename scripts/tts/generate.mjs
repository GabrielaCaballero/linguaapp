#!/usr/bin/env node
// Recorded audio for the course, made once on a computer (never in the app).
//
//   npm run audio:collect             list every text the app speaks → scripts/tts/texts.json
//   npm run audio:samples             a few sentences in several voices → public/audio-samples/
//                                     (open http://localhost:3100/audio-samples/ to listen)
//   npm run audio:generate            every clip in the voice from voices.json → public/audio/<lang>/
//
// The Google key comes from GOOGLE_TTS_API_KEY or the file .env.tts.local (git-ignored). It is
// used only here; the app plays plain mp3 files and never sees it. Existing clips are skipped, so
// re-running after a content change only makes the new ones.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const HERE = path.join(ROOT, "scripts/tts");
const mode = process.argv[2] ?? "generate";

function apiKey() {
  if (process.env.GOOGLE_TTS_API_KEY) return process.env.GOOGLE_TTS_API_KEY.trim();
  const f = path.join(ROOT, ".env.tts.local");
  if (fs.existsSync(f)) {
    const m = fs.readFileSync(f, "utf8").match(/^GOOGLE_TTS_API_KEY=(.+)$/m);
    if (m) return m[1].trim().replace(/^["']|["']$/g, "");
  }
  console.error("No key. Put GOOGLE_TTS_API_KEY=… in .env.tts.local (see docs/team/audio.md).");
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Google's per-minute quota (low for Chirp3-HD voices): pace requests and, on 429, wait and retry.
async function synth(key, text, voice) {
  for (let attempt = 0; ; attempt++) {
    try {
      return await synthOnce(key, text, voice);
    } catch (e) {
      if (!/HTTP 429/.test(String(e.message)) || attempt >= 6) throw e;
      await sleep(15_000 * (attempt + 1));
    }
  }
}

async function synthOnce(key, text, voice) {
  const languageCode = voice.split("-").slice(0, 2).join("-");
  const res = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${encodeURIComponent(key)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input: { text }, voice: { languageCode, name: voice }, audioConfig: { audioEncoding: "MP3", sampleRateHertz: 24000 } }),
  });
  if (!res.ok) throw new Error(`${voice}: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`);
  const { audioContent } = await res.json();
  return Buffer.from(audioContent, "base64");
}

const texts = () => {
  const f = path.join(HERE, "texts.json");
  if (!fs.existsSync(f)) {
    console.error("Run npm run audio:collect first.");
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(f, "utf8"));
};

async function samples() {
  const key = apiKey();
  const SAMPLE = {
    it: ["Buongiorno! Come stai?", "Vorrei un caffè, per favore.", "Ieri sono andata al mercato con mia sorella.", "gli, gn, sc: famiglia, gnocchi, pesce"],
    de: ["Guten Morgen! Wie geht's?", "Ich hätte gern einen Kaffee, bitte.", "Gestern bin ich mit meiner Schwester ins Kino gegangen.", "ä, ö, ü, ß: Mädchen, schön, Tür, Straße"],
  };
  const VOICES = {
    it: ["it-IT-Chirp3-HD-Aoede", "it-IT-Chirp3-HD-Charon", "it-IT-Neural2-A", "it-IT-Neural2-C", "it-IT-Wavenet-A"],
    de: ["de-DE-Chirp3-HD-Aoede", "de-DE-Chirp3-HD-Charon", "de-DE-Neural2-G", "de-DE-Neural2-H", "de-DE-Wavenet-B"],
  };
  const dir = path.join(ROOT, "public/audio-samples");
  fs.mkdirSync(dir, { recursive: true });
  const rows = [];
  for (const lang of Object.keys(SAMPLE)) {
    for (const voice of VOICES[lang]) {
      const files = [];
      for (const [k, text] of SAMPLE[lang].entries()) {
        try {
          const f = `${voice}-${k}.mp3`;
          fs.writeFileSync(path.join(dir, f), await synth(key, text, voice));
          files.push([f, text]);
        } catch (e) {
          console.warn(String(e.message ?? e));
        }
      }
      if (files.length) rows.push({ lang, voice, files });
      console.log(`${voice}: ${files.length} samples`);
    }
  }
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  fs.writeFileSync(
    path.join(dir, "index.html"),
    `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Linguina · voces</title>
<style>body{font:16px system-ui;margin:24px;max-width:720px}h2{margin-top:32px}section{border:1px solid #ddd;border-radius:12px;padding:12px 16px;margin:12px 0}code{font-weight:700}audio{width:100%;height:36px}p{margin:8px 0 2px}</style>
<h1>Elige una voz</h1><p>Escucha cada voz y dime cuál prefieres para cada idioma.</p>
${rows.map((r) => `<section><h2>${r.lang === "it" ? "Italiano" : "Deutsch"} · <code>${r.voice}</code></h2>${r.files.map(([f, t]) => `<p>${esc(t)}</p><audio controls preload="none" src="${f}"></audio>`).join("")}</section>`).join("")}`,
  );
  console.log("Open http://localhost:3100/audio-samples/ to listen.");
}

async function generate() {
  const key = apiKey();
  const voices = JSON.parse(fs.readFileSync(path.join(HERE, "voices.json"), "utf8"));
  const all = texts();
  for (const lang of Object.keys(all)) {
    const voice = voices[lang];
    const dir = path.join(ROOT, "public/audio", lang);
    fs.mkdirSync(dir, { recursive: true });
    let made = 0;
    let kept = 0;
    const failed = [];
    const queue = [...all[lang]];
    // Two at a time with a short pause: inside Google's per-minute quota for HD voices.
    await Promise.all(
      Array.from({ length: 2 }, async () => {
        for (let x = queue.shift(); x; x = queue.shift()) {
          const f = path.join(dir, `${x.key}.mp3`);
          if (fs.existsSync(f)) {
            kept++;
            continue;
          }
          try {
            fs.writeFileSync(f, await synth(key, x.text, voice));
            made++;
            await sleep(400);
            if (made % 50 === 0) console.log(`${lang}: ${made} made…`);
          } catch (e) {
            failed.push(`${x.key} «${x.text}»: ${String(e.message ?? e).slice(0, 120)}`);
          }
        }
      }),
    );
    // The app reads this list to know which texts have a recording (others use the phone's voice).
    const have = all[lang].map((x) => x.key).filter((k) => fs.existsSync(path.join(dir, `${k}.mp3`)));
    fs.writeFileSync(path.join(dir, "index.json"), JSON.stringify({ voice, keys: have }) + "\n");
    console.log(`${lang}: ${made} new, ${kept} kept, ${failed.length} failed, ${have.length}/${all[lang].length} available (${voice})`);
    for (const f of failed.slice(0, 10)) console.log("  ✗", f);
  }
}

if (mode === "samples") await samples();
else if (mode === "generate") await generate();
else console.error("Usage: node scripts/tts/generate.mjs samples|generate");
