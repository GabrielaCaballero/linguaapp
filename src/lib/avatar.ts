"use client";
// Profile picture. A photo is shrunk on the phone (256 px JPEG, ~20 KB), cached on the
// phone, and — when signed in — kept privately in the learner's account so it follows
// them to other devices. Or simply an emoji on a colour.
import { useEffect, useSyncExternalStore } from "react";
import { getDB, update } from "./store";
import { KEYS, localAdapter } from "./storage-adapter";
import { downloadAvatar, removeAvatar, uploadAvatar } from "./sync/client";
import type { Avatar } from "./model";

export const AVATAR_EMOJIS = ["🦊", "🐢", "🦉", "🐝", "🌵", "🍋", "🌻", "🚲", "☕", "🎧", "📚", "🏔️"];
export const AVATAR_COLORS = ["#c4452a", "#2e5bd8", "#1f8a4c", "#9a6a00", "#7a3fb0", "#3a3a3a"];

interface Cached {
  at: number;
  data: string;
}

const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

function readCache(): Cached | null {
  try {
    const raw = localAdapter.get(KEYS.avatar);
    return raw ? (JSON.parse(raw) as Cached) : null;
  } catch {
    return null;
  }
}
let cache: Cached | null | undefined;
const cached = () => (cache === undefined ? (cache = readCache()) : cache);
function writeCache(c: Cached | null) {
  cache = c;
  if (c) localAdapter.set(KEYS.avatar, JSON.stringify(c));
  else localAdapter.remove(KEYS.avatar);
  emit();
}

function setAvatar(patch: Partial<Avatar> | null) {
  update((db) => {
    const profile = { ...db.profile };
    if (patch === null) delete profile.avatar;
    else profile.avatar = { ...(db.profile.avatar ?? {}), ...patch };
    return { ...db, profile };
  });
}

export function setName(name: string) {
  const clean = name.replace(/\s+/g, " ").trim().slice(0, 40);
  update((db) => {
    const profile = { ...db.profile };
    if (clean) profile.name = clean;
    else delete profile.name;
    return { ...db, profile };
  });
}

export function setEmoji(emoji: string, color: string) {
  setAvatar({ emoji, color });
}

/** Center-crop and shrink a picked image to a 256 px JPEG. */
export async function shrink(file: Blob, size = 256): Promise<Blob> {
  const bmp = await createImageBitmap(file);
  const side = Math.min(bmp.width, bmp.height);
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(bmp, (bmp.width - side) / 2, (bmp.height - side) / 2, side, side, 0, 0, size, size);
  bmp.close?.();
  return new Promise((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("encode"))), "image/jpeg", 0.85));
}

const toDataUrl = (b: Blob) =>
  new Promise<string>((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = () => reject(r.error);
    r.readAsDataURL(b);
  });

/** Use a picked photo. Returns false if it couldn't be read. Upload failure keeps it on this phone. */
export async function setPhoto(file: Blob): Promise<boolean> {
  try {
    const small = await shrink(file);
    const at = Date.now();
    writeCache({ at, data: await toDataUrl(small) });
    setAvatar({ photoAt: at });
    void uploadAvatar(small);
    return true;
  } catch {
    return false;
  }
}

export async function clearPhoto() {
  writeCache(null);
  update((db) => {
    if (!db.profile.avatar?.photoAt) return db;
    const avatar = { ...db.profile.avatar };
    delete avatar.photoAt;
    return { ...db, profile: { ...db.profile, avatar } };
  });
  void removeAvatar();
}

let fetching = false;
/** The photo to show (data URL), fetching it from the account when another device changed it. */
export function usePhoto(avatar: Avatar | undefined): string | null {
  const c = useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => void listeners.delete(l);
    },
    cached,
    () => null,
  );
  const want = avatar?.photoAt;
  useEffect(() => {
    if (!want || fetching || (c && c.at >= want)) return;
    fetching = true;
    void downloadAvatar()
      .then(async (blob) => {
        if (blob && getDB().profile.avatar?.photoAt === want) writeCache({ at: want, data: await toDataUrl(blob) });
      })
      .finally(() => {
        fetching = false;
      });
  }, [want, c]);
  return want && c ? c.data : null;
}
