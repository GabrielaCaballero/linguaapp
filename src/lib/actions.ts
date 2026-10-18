import { itemsFor } from "@/content";
import { newCard } from "./srs";
import { update } from "./store";
import type { Settings } from "./types";

export function setGermanLevel(level: Settings["germanLevel"]) {
  update((db) => {
    const cards = { ...db.cards };
    if (level === "some" || level === "classes") {
      // Already met the basics in class: skip "guess first" and go straight to review.
      const now = Date.now();
      for (const i of itemsFor("de", db)) if (i.tags?.includes("basic") && !cards[i.id]) cards[i.id] = newCard(i.id, now);
    }
    return { ...db, cards, settings: { ...db.settings, germanLevel: level, newPerDay: level === "unset" ? db.settings.newPerDay : level === "zero" ? 8 : 10 } };
  });
}
