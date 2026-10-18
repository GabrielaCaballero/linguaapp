"use client";

import type { Lang } from "./types";

const LOCALE: Record<Lang, string> = { it: "it-IT", de: "de-DE" };

function pickVoice(locale: string): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  const exact = voices.filter((v) => v.lang.replace("_", "-") === locale);
  // Prefer higher-quality voices when the OS offers them.
  return (
    exact.find((v) => /premium|enhanced|natural|google/i.test(v.name)) ??
    exact[0] ??
    voices.find((v) => v.lang.startsWith(locale.slice(0, 2)))
  );
}

export function canSpeak(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function speak(text: string, lang: Lang, rate = 0.9) {
  if (!canSpeak()) return;
  try {
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = LOCALE[lang];
    const v = pickVoice(u.lang);
    if (v) u.voice = v;
    u.rate = rate;
    synth.speak(u);
  } catch {
    /* audio is a bonus; never break the session over it */
  }
}

type Recognition = {
  lang: string;
  interimResults: boolean;
  onresult: (e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void;
  onerror: () => void;
  onend: () => void;
  start: () => void;
};

/** Optional speech recognition (works in Chrome/Android; unreliable on iOS). */
export function getRecognizer(lang: Lang): Recognition | null {
  if (typeof window === "undefined") return null;
  const W = window as unknown as { SpeechRecognition?: new () => Recognition; webkitSpeechRecognition?: new () => Recognition };
  const Ctor = W.SpeechRecognition ?? W.webkitSpeechRecognition;
  if (!Ctor) return null;
  const r = new Ctor();
  r.lang = LOCALE[lang];
  r.interimResults = false;
  return r;
}
