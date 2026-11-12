// A v1 ("lingua:v1") blob shaped like the owner's real data, using real legacy ids.
import { courses } from "../../../src/content";

export function migrateV1Fixture(now: number) {
  const DAY = 86_400_000;
  const legacy = (["it", "de"] as const).flatMap((l) => courses[l].units.flatMap((u) => u.items.filter((i) => i.legacyId)));
  const it = legacy.filter((i) => i.lang === "it").slice(0, 6);
  const de = legacy.filter((i) => i.lang === "de").slice(0, 4);
  const cards: Record<string, unknown> = {};
  [...it, ...de].forEach((i, k) => (cards[i.legacyId!] = { id: i.legacyId, due: now + (k - 2) * DAY, interval: 3 + k, ease: 2.5, reps: 2, lapses: 0, introducedAt: now - 30 * DAY }));
  cards["it-zurigo"] = { id: "it-zurigo", due: now, interval: 2, ease: 2.5, reps: 1, lapses: 0, introducedAt: now - 30 * DAY };
  return {
    version: 1,
    settings: { lang: "it", minutesPerLang: 15 },
    cards,
    custom: [],
    reviews: [],
    sessions: [{ t: now - DAY, lang: "it", seconds: 300, tasks: 20, correct: 15, graded: 18 }],
    ties: [{ id: "t1", date: "2026-10-02", type: "course", note: "class" }],
  };
}
