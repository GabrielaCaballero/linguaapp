"use client";

// Text-to-speech via the Web Speech API. Audio is a bonus: every call is guarded, and
// exercises that need audio are skipped when the device has no voice for the language.
import type { TargetLang } from "@/content/schema";
import { LOCALE } from "./content";

/** The voice fields the ranking reads (a plain object in tests, a real voice in the browser). */
export type VoiceLike = Pick<SpeechSynthesisVoice, "name" | "lang" | "voiceURI" | "localService" | "default">;

const norm = (lang: string) => lang.replace(/_/g, "-").toLowerCase();

/** Voices for a locale: the exact region when there is one (it-IT), else any region (it-CH). */
export function matchVoices<V extends VoiceLike>(all: readonly V[], locale: string): V[] {
  const exact = all.filter((v) => norm(v.lang) === norm(locale));
  return exact.length ? exact : all.filter((v) => norm(v.lang).startsWith(norm(locale).slice(0, 2)));
}

// Apple's "Eloquence" voices (Eddy, Flo, Grandma, Grandpa, Reed, Rocko, Sandy, Shelley) ship in
// every language on macOS/iOS and are listed early, so "first voice for it-IT" was often one of
// them: the classic robotic 80s sound. The novelty voices (Zarvox, Bells…) are worse still.
const ELOQUENCE = /\b(eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley)\b/i;
const NOVELTY = /\b(albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|fred|junior|kathy|ralph)\b/i;

/**
 * How natural a voice is likely to sound (higher is better). Signals, strongest first: Apple's
 * downloaded Premium/Enhanced voices (in the voiceURI on Safari, sometimes the name), neural
 * "Natural"/"Online" voices (Edge), Chrome's Google voices; then the exact region and a local voice.
 * Robotic families sink to the bottom but stay usable, so a device with only those still speaks.
 */
export function voiceScore(v: VoiceLike, locale: string, online = true): number {
  const id = `${v.name} ${v.voiceURI}`.toLowerCase();
  let s = 0;
  if (/premium/.test(id)) s += 60;
  else if (/enhanced|siri/.test(id)) s += 50;
  else if (/neural|natural/.test(id)) s += 45;
  else if (/google/.test(id)) s += 35;
  if (/compact/.test(id)) s -= 10;
  if (/eloquence/.test(id) || ELOQUENCE.test(v.name)) s -= 80;
  if (NOVELTY.test(v.name)) s -= 100;
  if (norm(v.lang) === norm(locale)) s += 20;
  // Network voices (Google, Edge "Online") fail silently offline: only worth it when online.
  if (!v.localService) s += online ? 0 : -150;
  else s += 5;
  if (v.default) s += 2;
  return s;
}

/** Best voice for a locale, or undefined when the device has none. */
export function bestVoice<V extends VoiceLike>(all: readonly V[], locale: string, online = true): V | undefined {
  let best: V | undefined;
  let top = -Infinity;
  for (const v of matchVoices(all, locale)) {
    const s = voiceScore(v, locale, online);
    if (s > top) [best, top] = [v, s];
  }
  return best;
}

function allVoices(): SpeechSynthesisVoice[] {
  try {
    return window.speechSynthesis.getVoices();
  } catch {
    return [];
  }
}

// The chosen voice per locale, so every word in a session sounds like the same person. Cleared
// when the voice list changes (late load, a voice downloaded) or a network voice failed.
const chosen = new Map<string, SpeechSynthesisVoice>();
let networkFailed = false;
let listening = false;

function pickVoice(locale: string): SpeechSynthesisVoice | undefined {
  if (!listening) {
    listening = true;
    try {
      window.speechSynthesis.addEventListener?.("voiceschanged", () => chosen.clear());
    } catch {
      /* ignore */
    }
  }
  const online = !networkFailed && (typeof navigator === "undefined" || navigator.onLine !== false);
  const key = `${locale}|${online}`;
  const hit = chosen.get(key);
  if (hit) return hit;
  const v = bestVoice(allVoices(), locale, online);
  if (v) chosen.set(key, v);
  return v;
}

export function canSpeak(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

/**
 * True when the device can speak this language. Voices load late on some phones (the list is
 * still empty after the first second): then we assume yes rather than hiding all audio; only a
 * loaded list without this language means no.
 */
export function hasVoice(lang: TargetLang): boolean {
  if (!canSpeak()) return false;
  try {
    if (window.speechSynthesis.getVoices().length === 0) return true;
  } catch {
    return false;
  }
  return matchVoices(allVoices(), LOCALE[lang]).length > 0;
}

/** Resolve once voices are loaded (or after a short timeout). */
export function voicesReady(timeout = 1200): Promise<void> {
  if (!canSpeak()) return Promise.resolve();
  if (window.speechSynthesis.getVoices().length) return Promise.resolve();
  return new Promise((res) => {
    const done = () => res();
    window.speechSynthesis.addEventListener?.("voiceschanged", done, { once: true });
    setTimeout(done, timeout);
  });
}

export function speak(text: string, lang: TargetLang, slow = false) {
  if (!canSpeak()) return;
  try {
    const synth = window.speechSynthesis;
    // Cancel only when something is playing: on some phones a cancel right before speak drops it.
    if (synth.speaking || synth.pending) synth.cancel();
    // Chrome can leave synthesis paused (e.g. after the tab was in the background).
    synth.resume();
    const locale = LOCALE[lang];
    const u = utterance(text, locale, slow, pickVoice(locale));
    // A network voice (Chrome's Google voices) errors when the connection drops: retry once with
    // the best on-device voice and stop choosing network voices for the rest of the session.
    if (u.voice && !u.voice.localService) {
      u.onerror = (e) => {
        if (e.error === "interrupted" || e.error === "canceled") return;
        networkFailed = true;
        try {
          synth.speak(utterance(text, locale, slow, pickVoice(locale)));
        } catch {
          /* ignore */
        }
      };
    }
    synth.speak(u);
  } catch {
    /* never break a lesson over audio */
  }
}

function utterance(text: string, locale: string, slow: boolean, voice: SpeechSynthesisVoice | undefined) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = locale;
  if (voice) u.voice = voice;
  // Close to natural speed: much below ~0.9 most engines stretch vowels and sound synthetic.
  // "Slow" stays clearly slower without dropping into the drawl of 0.7.
  u.rate = slow ? 0.75 : 0.95;
  u.pitch = 1;
  u.volume = 1;
  return u;
}
