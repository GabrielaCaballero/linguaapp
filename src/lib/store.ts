"use client";

import { useSyncExternalStore } from "react";
import { COURSES } from "./content";
import { emptyDB, type AppEvent, type DB } from "./model";
import { migrateAny, type LegacyIndex } from "./migrate";
import { KEYS, localAdapter, type StorageAdapter } from "./storage-adapter";
import type { TargetLang } from "@/content/schema";

const MAX_REVIEWS = 20_000;
const MAX_EVENTS = 10_000;

let legacyIndex: LegacyIndex | null = null;
export function legacy(): LegacyIndex {
  if (!legacyIndex) {
    legacyIndex = new Map();
    for (const lang of ["it", "de"] as TargetLang[])
      for (const u of COURSES[lang].units) for (const i of u.items) if (i.legacyId) legacyIndex.set(i.legacyId, { id: i.id, lang });
  }
  return legacyIndex;
}

function defaultAppLang(): "es" | "en" {
  if (typeof navigator === "undefined") return "es";
  return /^en\b/i.test(navigator.language) ? "en" : /^es\b/i.test(navigator.language) ? "es" : "en";
}

/** Load the DB from storage, migrating v1 on first run. Exported for tests. */
export function loadFrom(store: StorageAdapter, now = Date.now()): DB {
  const raw2 = store.get(KEYS.v2);
  if (raw2) {
    try {
      return migrateAny(JSON.parse(raw2), legacy(), now);
    } catch {
      /* corrupt → fall through to v1 / fresh */
    }
  }
  const raw1 = store.get(KEYS.v1);
  if (raw1) {
    try {
      const db = migrateAny(JSON.parse(raw1), legacy(), now);
      if (!store.get(KEYS.v1Backup)) store.set(KEYS.v1Backup, raw1);
      store.set(KEYS.v2, JSON.stringify(db));
      return db;
    } catch {
      /* ignore */
    }
  }
  return emptyDB(now, defaultAppLang());
}

let cache: DB | null = null;
const listeners = new Set<() => void>();

export function getDB(): DB {
  if (!cache) cache = loadFrom(localAdapter);
  return cache;
}

function persist(db: DB) {
  localAdapter.set(KEYS.v2, JSON.stringify(db));
}

export function update(fn: (db: DB) => DB) {
  const next = fn(getDB());
  if (next.reviews.length > MAX_REVIEWS) next.reviews = next.reviews.slice(-MAX_REVIEWS);
  if (next.events.length > MAX_EVENTS) next.events = next.events.slice(-MAX_EVENTS);
  cache = next;
  persist(next);
  listeners.forEach((l) => l());
}

export function logEvent(e: AppEvent) {
  update((db) => ({ ...db, events: [...db.events, e] }));
}

export function replaceDB(db: DB) {
  update(() => db);
}

export function resetDB() {
  update(() => emptyDB(Date.now(), getDB().profile.appLang));
}

function subscribe(l: () => void) {
  listeners.add(l);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEYS.v2) {
      cache = null;
      l();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(l);
    window.removeEventListener("storage", onStorage);
  };
}

/** null during server render / hydration, then the on-device DB. */
export function useDB(): DB | null {
  return useSyncExternalStore(subscribe, getDB, () => null);
}

/** Ask the browser not to evict our data (Safari is aggressive). */
export function requestPersistence() {
  try {
    void navigator.storage?.persist?.();
  } catch {
    /* ignore */
  }
}
