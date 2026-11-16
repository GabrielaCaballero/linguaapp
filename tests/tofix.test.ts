import { describe, expect, it } from "vitest";
import { toFix } from "@/lib/stats";
import { emptyDB, type ReviewLog } from "@/lib/model";
import { newCard } from "@/lib/scheduler";
import { DAY, startOfDay } from "@/lib/dates";

describe("to fix (Today's 'N words to fix' = the lesson's count)", () => {
  it("a miss on the try right after a learn card is practice, not 'to fix'; a real miss is", () => {
    const now = startOfDay(Date.now()) + 10 * 3600_000;
    const y = now - DAY;
    const db = emptyDB(now);
    db.cards = { a: newCard("a", "it", y), b: newCard("b", "it", y) };
    const log = (id: string, practice?: boolean): ReviewLog => ({ t: y, id, lang: "it", mode: "recognize", verdict: "wrong", rating: 1, source: "checker", ...(practice ? { practice: true as const } : {}) });
    db.reviews = [log("a", true), log("b")];
    expect(toFix(db, "it", now)).toEqual(["b"]);
  });
});
