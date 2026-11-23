"use client";
// Recorded audio (scripts/tts): a natural neural voice for every fixed word and sentence, the same
// on iPhone, Android and computers. Clips live at /audio/<lang>/<audioKey(text)>.mp3, listed in
// /audio/<lang>/index.json. Once played, a clip is kept on the device (Cache API), so it works
// offline next time. Anything without a recording falls back to the phone's own voice.
import type { TargetLang } from "@/content/schema";
import { audioKey } from "./audioKey";

const CACHE = "lingua-audio-v1";
const manifests = new Map<TargetLang, Promise<Set<string>>>();
const loaded = new Map<TargetLang, Set<string>>();

/** Start loading which texts have a recording (cheap; call early). Never throws. */
export function loadRecorded(lang: TargetLang): Promise<Set<string>> {
  let p = manifests.get(lang);
  if (!p) {
    p = (async () => {
      try {
        const url = `/audio/${lang}/index.json`;
        let res: Response | undefined;
        try {
          res = await fetch(url, { cache: "no-cache" });
        } catch {
          res = typeof caches !== "undefined" ? await (await caches.open(CACHE)).match(url) : undefined;
        }
        if (!res?.ok) return new Set<string>();
        if (typeof caches !== "undefined") void caches.open(CACHE).then((c) => c.put(url, res!.clone())).catch(() => {});
        const j = (await res.json()) as { keys?: string[] };
        return new Set(j.keys ?? []);
      } catch {
        return new Set<string>();
      }
    })().then((s) => {
      loaded.set(lang, s);
      return s;
    });
    manifests.set(lang, p);
  }
  return p;
}

/** True once we know this language has recordings (so audio works even without a phone voice). */
export function hasRecorded(lang: TargetLang): boolean {
  return (loaded.get(lang)?.size ?? 0) > 0;
}

let player: HTMLAudioElement | null = null;
let lastUrl: string | null = null;
function audioEl(): HTMLAudioElement {
  if (!player) player = new Audio();
  return player;
}

/** Stop a clip that is playing (a new one, or the phone's voice, is about to start). */
export function stopRecorded() {
  try {
    player?.pause();
  } catch {
    /* nothing playing */
  }
}

async function clip(url: string): Promise<Blob | null> {
  try {
    const cache = typeof caches !== "undefined" ? await caches.open(CACHE) : null;
    const hit = await cache?.match(url);
    if (hit) return await hit.blob();
    const res = await fetch(url);
    if (!res.ok) return null;
    if (cache) void cache.put(url, res.clone()).catch(() => {});
    return await res.blob();
  } catch {
    return null;
  }
}

/** Play the recording of `text` if there is one. Resolves false when there isn't (or it failed). */
export async function playRecorded(text: string, lang: TargetLang, rate = 1): Promise<boolean> {
  try {
    const have = await loadRecorded(lang);
    const key = audioKey(text);
    if (!have.has(key)) return false;
    const blob = await clip(`/audio/${lang}/${key}.mp3`);
    if (!blob) return false;
    const a = audioEl();
    a.pause();
    if (lastUrl) URL.revokeObjectURL(lastUrl);
    lastUrl = URL.createObjectURL(blob);
    a.src = lastUrl;
    // "Slow" plays the same recording slower, at the same pitch (rate from Settings → Slow audio).
    a.playbackRate = rate;
    (a as HTMLAudioElement & { preservesPitch?: boolean; webkitPreservesPitch?: boolean }).preservesPitch = true;
    (a as HTMLAudioElement & { webkitPreservesPitch?: boolean }).webkitPreservesPitch = true;
    await a.play();
    return true;
  } catch {
    return false;
  }
}

/** iOS: the shared player may only start after a touch; the first touch "plays" a silent clip. */
export function unlockRecorded() {
  try {
    const a = audioEl();
    a.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=";
    void a.play().catch(() => {});
  } catch {
    /* nothing to unlock */
  }
}
