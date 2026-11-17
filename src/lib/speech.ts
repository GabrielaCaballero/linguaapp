"use client";

// Text-to-speech via the Web Speech API. Audio is a bonus: every call is guarded, and
// exercises that need audio are skipped when the device has no voice for the language.
import type { TargetLang } from "@/content/schema";
import { LOCALE } from "./content";

function voicesFor(locale: string): SpeechSynthesisVoice[] {
  try {
    const all = window.speechSynthesis.getVoices();
    const exact = all.filter((v) => v.lang.replace("_", "-").toLowerCase() === locale.toLowerCase());
    return exact.length ? exact : all.filter((v) => v.lang.toLowerCase().startsWith(locale.slice(0, 2)));
  } catch {
    return [];
  }
}

function pickVoice(locale: string): SpeechSynthesisVoice | undefined {
  const v = voicesFor(locale);
  return v.find((x) => /premium|enhanced|natural|google/i.test(x.name)) ?? v[0];
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
  return voicesFor(LOCALE[lang]).length > 0;
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
    const u = new SpeechSynthesisUtterance(text);
    u.lang = LOCALE[lang];
    const v = pickVoice(u.lang);
    if (v) u.voice = v;
    u.rate = slow ? 0.7 : 0.92;
    synth.speak(u);
  } catch {
    /* never break a lesson over audio */
  }
}
