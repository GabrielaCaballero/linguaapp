"use client";

// Felt feedback: haptics (progressive enhancement — iOS Safari has no Vibration API) and
// optional Web Audio tones (no files). Both respect the user's settings.
import type { Settings } from "./model";

type Kind = "tap" | "success" | "almost" | "miss" | "finish";

const PATTERNS: Record<Kind, number | number[]> = {
  tap: 10,
  success: [12, 40, 12],
  almost: 10,
  miss: [30],
  finish: [15, 60, 15, 60, 30],
};

export function haptic(kind: Kind, s: Pick<Settings, "vibration">) {
  if (!s.vibration) return;
  try {
    navigator.vibrate?.(PATTERNS[kind]);
  } catch {
    /* ignore */
  }
}

let ctx: AudioContext | null = null;
function audio(): AudioContext | null {
  try {
    if (!ctx) ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    return ctx;
  } catch {
    return null;
  }
}

function tone(freq: number, start: number, dur: number, gain = 0.06) {
  const a = audio();
  if (!a) return;
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = "sine";
  o.frequency.value = freq;
  g.gain.setValueAtTime(0, a.currentTime + start);
  g.gain.linearRampToValueAtTime(gain, a.currentTime + start + 0.015);
  g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + start + dur);
  o.connect(g).connect(a.destination);
  o.start(a.currentTime + start);
  o.stop(a.currentTime + start + dur + 0.02);
}

export function sound(kind: Kind, s: Pick<Settings, "sounds">) {
  if (!s.sounds) return;
  try {
    if (kind === "success") {
      tone(660, 0, 0.12);
      tone(880, 0.09, 0.18);
    } else if (kind === "almost") tone(587, 0, 0.18);
    else if (kind === "miss") tone(330, 0, 0.22, 0.05);
    else if (kind === "finish") [523, 659, 784, 1047].forEach((f, k) => tone(f, k * 0.09, 0.2));
    else tone(1200, 0, 0.03, 0.02);
  } catch {
    /* ignore */
  }
}

export function feel(kind: Kind, s: Pick<Settings, "sounds" | "vibration">) {
  haptic(kind, s);
  sound(kind, s);
}
