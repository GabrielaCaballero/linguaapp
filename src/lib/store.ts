"use client";

import { useSyncExternalStore } from "react";
import type { DB } from "./types";
import { todayISO } from "./dates";

// On-device persistence. localStorage is wrapped in try/catch everywhere: in private mode
// or with blocked storage the app still works for the session, it just won't remember.

const KEY = "lingua:v1";
const MAX_REVIEWS = 5000;

export function emptyDB(): DB {
  return {
    version: 1,
    settings: { lang: "it", minutesPerLang: 15, newPerDay: 8, germanLevel: "unset", startDate: todayISO() },
    cards: {},
    custom: [],
    reviews: [],
    sessions: [],
    ties: [],
  };
}

let cache: DB | null = null;
const listeners = new Set<() => void>();

function load(): DB {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return migrate(JSON.parse(raw));
  } catch {
    /* storage unavailable or corrupt: start fresh in memory */
  }
  return emptyDB();
}

function migrate(x: Partial<DB>): DB {
  const base = emptyDB();
  return { ...base, ...x, settings: { ...base.settings, ...(x.settings ?? {}) }, version: 1 };
}

function persist(db: DB) {
  try {
    localStorage.setItem(KEY, JSON.stringify(db));
  } catch {
    /* ignore: quota or private mode */
  }
}

export function getDB(): DB {
  if (!cache) cache = load();
  return cache;
}

export function update(fn: (db: DB) => DB) {
  const next = fn(getDB());
  if (next.reviews.length > MAX_REVIEWS) next.reviews = next.reviews.slice(-MAX_REVIEWS);
  cache = next;
  persist(next);
  listeners.forEach((l) => l());
}

export function replaceDB(x: unknown) {
  if (!x || typeof x !== "object" || (x as DB).version !== 1) throw new Error("Not a Lingua backup file");
  update(() => migrate(x as DB));
}

function subscribe(l: () => void) {
  listeners.add(l);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = load();
      l();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(l);
    window.removeEventListener("storage", onStorage);
  };
}

/** Returns null during server render / first hydration pass, then the on-device DB. */
export function useDB(): DB | null {
  return useSyncExternalStore(subscribe, getDB, () => null);
}
