// Category: content-audit — the linguist rubric (audit.ts) as eval cases: one case per audited item.
// AUDIT_WRITE=1 re-pins the hashes after a re-grade (only after actually re-reading the changed items).
import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { courses } from "@/content";
import { hash } from "../lib/fixtures";
import { FAILS } from "./audit";

const file = path.join(__dirname, "audit-hashes.json");
const items = (["it", "de"] as const).flatMap((l) => [...courses[l].units.flatMap((u) => u.items), ...courses[l].placement]);
const h = (x: unknown) => hash(JSON.stringify(x));

if (process.env.AUDIT_WRITE) fs.writeFileSync(file, JSON.stringify(Object.fromEntries(items.map((i) => [i.id, h(i)])), null, 1) + "\n");
const pinned: Record<string, string> = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : {};

describe("content audit (linguist rubric)", () => {
  it("covers ≥60 items per language", () => {
    for (const l of ["it", "de"]) expect(Object.keys(pinned).filter((id) => id.startsWith(l + "-")).length).toBeGreaterThanOrEqual(60);
  });
  for (const i of items) {
    it(`${i.id}`, () => {
      expect(pinned[i.id], "not audited yet").toBeTruthy();
      expect(pinned[i.id] === h(i), "STALE: item changed since grading — re-grade and re-pin").toBe(true);
      const f = FAILS[i.id];
      expect(f ? `${f.fail.join(",")}: ${f.note}` : "pass").toBe("pass");
    });
  }
});
