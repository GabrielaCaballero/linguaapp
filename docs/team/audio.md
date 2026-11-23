# Recorded audio (natural voice on every device)

Phones speak through their own voices: Android's are natural, iPhone gives web apps only basic,
robotic ones. So the course's fixed words and sentences are recorded once with a neural voice
(Google Cloud Text-to-Speech) and served as small mp3 files from linguina.app. The app plays the
recording when there is one and falls back to the phone's voice otherwise.

- About 1,700 clips (≈830 Italian, ≈830 German), ≈40,000 characters in total, ≈10 KB each.
- Cost: inside Google's free monthly quota; even paid, under 1 USD for the whole course.
- The Google key is used only on the computer that makes the files. It is never in the app,
  in Vercel or in the repo (`.env.tts.local` is git-ignored).

## One-time setup (owner, ~5 min)

1. **console.cloud.google.com** → the Linguina project → **APIs & Services → Library** → search
   **"Cloud Text-to-Speech API"** → **Enable**. (If it asks for billing: the free quota still
   applies; set a budget alert at 5 USD under Billing → Budgets.)
2. **APIs & Services → Credentials → Create credentials → API key**. Then **Edit API key →
   API restrictions → Restrict key → Cloud Text-to-Speech API** → Save.
3. In the project folder, create a file named `.env.tts.local` with one line:
   `GOOGLE_TTS_API_KEY=` followed by the key. Don't paste the key in a chat.

## Making the audio

```bash
npm run audio:samples     # a few sentences in 5 voices per language
```
Open http://localhost:3100/audio-samples/, listen, pick a voice per language, and put the names in
`scripts/tts/voices.json`. Then:

```bash
npm run audio:generate    # every clip → public/audio/<lang>/*.mp3 + index.json
```
Commit `public/audio/` and deploy. After a content change, run `npm run audio:generate` again:
only new or changed texts are made. To change a voice: edit `voices.json`, delete
`public/audio/<lang>/*.mp3`, run it again.

## How the app uses it

- `src/lib/audioKey.ts`: text → file name (same function in the app and the generator).
- `src/lib/recorded.ts`: loads `/audio/<lang>/index.json`, plays the clip (slow = same clip at
  0.75×, same pitch), keeps played clips on the device (Cache API `lingua-audio-v1`, kept across
  app updates by the service worker), unlocks iPhone audio on the first touch.
- `src/lib/speech.ts` `speak()`: recording first, phone voice as fallback.
- `scripts/tts/collect.test.ts` lists what the app speaks (items' `spoken`, dialogue and example
  lines' `spoken ?? target`); it fails if two texts would share a file name.
