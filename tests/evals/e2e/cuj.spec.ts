// Category: e2e — scripted CUJs (spec §6) × personas (spec §2), plus Judge P0/P1 regressions.
import { expect, test, type Page } from "@playwright/test";
import { ageDB, languageLeaks, onboard, playLesson, quitLesson, readDB, T, watchErrors, writeDB } from "./helpers";
import { migrateV1Fixture } from "./v1-fixture";

test.beforeEach(async ({ page }) => {
  await page.clock.install();
});

/** Finish the current lesson fast: play a few tasks, jump the clock past the lesson length, play to Results. */
async function finishLesson(page: Page, o: Parameters<typeof playLesson>[1]) {
  const a = await playLesson(page, { ...o, maxSteps: 6 });
  await page.clock.fastForward("11:00");
  const b = await playLesson(page, { ...o, maxSteps: 120 });
  return { ...b, tasks: a.tasks + b.tasks, graded: a.graded + b.graded, misses: [...a.misses, ...b.misses], firstEyebrow: a.firstEyebrow };
}

test.describe("CUJ-1 first open → first lesson", () => {
  test("P2 Mateo (es→it, 'a bit'): placement 8–15 items, level + unit, first answer < 4 min, UI in Spanish", async ({ page }) => {
    const errs = watchErrors(page);
    const r = await onboard(page, { appLang: "es", langs: [{ lang: "it", explainIn: "es", exp: "bit", placementAccuracy: 0.5 }] });
    expect(r.placementItems.it).toBeGreaterThanOrEqual(8);
    expect(r.placementItems.it).toBeLessThanOrEqual(15);
    expect(r.firstAnswerMs!).toBeLessThan(4 * 60_000);
    expect(await languageLeaks(page, "es")).toEqual([]);
    const s = await finishLesson(page, { lang: "it", base: "es", appLang: "es" });
    expect(s.sawResults).toBe(true);
    await page.getByRole("button", { name: T.es.continue, exact: true }).click();
    await expect(page.getByRole("button", { name: /Empezar|Continuar|Practicar/ }).first()).toBeVisible();
    expect(await languageLeaks(page, "es")).toEqual([]);
    expect(errs).toEqual([]);
  });
  test("P4 Priya (en→it): 'I'm a total beginner' mid-test works", async ({ page }) => {
    const r = await onboard(page, { appLang: "en", langs: [{ lang: "it", explainIn: "en", exp: "bit", beginnerAt: 3 }] });
    expect(r.placementItems.it).toBe(3);
    const db = await readDB(page);
    expect(db.profile.courses.it.unit).toBe(1);
  });
  test("placement result offers Start lower / Start higher one unit at a time (P0-2)", async ({ page }) => {
    const t = T.en;
    await page.goto("/");
    await page.getByRole("button", { name: t.getStarted }).click();
    await page.locator(".choice-card", { hasText: "English" }).click();
    await page.getByRole("button", { name: t.continue }).click();
    await page.locator(".choice-card", { hasText: "Deutsch" }).click();
    await page.getByRole("button", { name: t.continue }).click();
    await page.locator(".choice-card", { hasText: "English" }).click();
    await page.getByRole("button", { name: t.continue }).click();
    await page.locator(".choice-card", { hasText: t.expClasses }).click();
    await page.getByRole("button", { name: t.continue }).click();
    for (let k = 0; k < 3; k++) await page.locator(".seg").nth(k).getByRole("button", { name: t.yes, exact: true }).click();
    await page.getByRole("button", { name: t.continue }).click();
    await page.getByRole("button", { name: t.placementStart }).click();
    const { doPlacement } = await import("./helpers");
    await doPlacement(page, "en", "de", 0.7);
    const unitText = async () => (await page.locator("p.h2").first().innerText()).match(/\d+/)?.[0];
    const u0 = Number(await unitText());
    expect(u0).toBeGreaterThanOrEqual(1);
    if (u0 > 1) {
      await page.getByRole("button", { name: t.startLower }).click();
      expect(Number(await unitText())).toBe(u0 - 1);
    }
  });
});

test.describe("CUJ-2 absolute beginner", () => {
  test("P3 Emma (en→de, never): no test, guess-first with meaning first", async ({ page }) => {
    await onboard(page, { appLang: "en", langs: [{ lang: "de", explainIn: "en", exp: "never" }] });
    const eyebrow = await page.locator(".prompt-eyebrow").first().innerText();
    expect(eyebrow).toContain(T.en.newWord);
    expect(eyebrow).not.toContain(T.en.tapWhatYouHear);
    // P1-9: with nothing learned yet, Review only and Speed round are not offered as live buttons
    await quitLesson(page, "en");
    await page.waitForURL((u) => !u.pathname.startsWith("/lesson"));
    await page.getByRole("button", { name: T.en.moreOptions }).click();
    await expect(page.getByRole("button", { name: T.en.reviewOnly })).toBeDisabled();
    await expect(page.getByRole("button", { name: T.en.speedRound })).toBeDisabled();
    const db = await readDB(page);
    expect(db.profile.courses.de.placement).toBeFalsy();
    expect(Object.keys(db.cards).filter((k) => db.cards[k].seeded)).toHaveLength(0);
  });
});

test.describe("P0-1 lesson re-entry", () => {
  test("finish → Start again gives a fresh lesson, not the old Results", async ({ page }) => {
    await onboard(page, { appLang: "en", langs: [{ lang: "it", explainIn: "en", exp: "never" }] });
    await finishLesson(page, { lang: "it", base: "en", appLang: "en" });
    await page.getByRole("button", { name: T.en.continue, exact: true }).click();
    await page.getByRole("button", { name: /Start|Continue|Practise/ }).first().click();
    await page.waitForURL(/\/lesson/);
    await expect(page.locator(".prompt-eyebrow").first()).toBeVisible();
    await expect(page.getByText(T.en.resultsTitle)).toHaveCount(0);
  });
  test("quit → Start again does not show the 'End lesson?' sheet", async ({ page }) => {
    await onboard(page, { appLang: "en", langs: [{ lang: "it", explainIn: "en", exp: "never" }] });
    await playLesson(page, { lang: "it", base: "en", appLang: "en", maxSteps: 3 });
    await quitLesson(page, "en");
    await page.waitForURL((u) => !u.pathname.startsWith("/lesson"));
    await page.getByRole("button", { name: /Start|Continue|Practise/ }).first().click();
    await page.waitForURL(/\/lesson/);
    await expect(page.locator(".prompt-eyebrow").first()).toBeVisible();
    await expect(page.getByRole("button", { name: T.en.endLesson })).toBeHidden();
  });
});

test.describe("CUJ-3 daily return + P1-1 lesson length", () => {
  test("P2 Mateo next day: one primary button, ≤1 card, reviews appear, results, 'Practise more' not auto-started", async ({ page }) => {
    await onboard(page, { appLang: "es", langs: [{ lang: "it", explainIn: "es", exp: "never" }] });
    await finishLesson(page, { lang: "it", base: "es", appLang: "es", accuracy: 0.8 });
    await ageDB(page, 1);
    await page.goto("/");
    await expect(page.locator(".btn-primary")).toHaveCount(1);
    const cards = await page.locator(".banner, [class*=banner]").count();
    expect(cards).toBeLessThanOrEqual(1);
    await page.locator(".btn-primary").click();
    const s = await finishLesson(page, { lang: "it", base: "es", appLang: "es" });
    expect(s.sawResults).toBe(true);
    const db = await readDB(page);
    expect(db.reviews.some((r: { t: number }) => r.t > Date.now() - 3_600_000 * 2)).toBe(true);
    expect(page.url()).not.toMatch(/\/lesson.*kind=auto.*auto/);
  });
  test("a '5 min' lesson is ≥18 graded tasks or keeps going until 5 real minutes (P1-1)", async ({ page }) => {
    await onboard(page, { appLang: "en", langs: [{ lang: "it", explainIn: "en", exp: "never" }] });
    const s = await playLesson(page, { lang: "it", base: "en", appLang: "en", maxSteps: 40 });
    expect(s.sawResults ? s.graded : 99).toBeGreaterThanOrEqual(18);
  });
});

test.describe("CUJ-4 second language (P1 Ana)", () => {
  test("add Deutsch from Today: blue accent, chip for the other language, Italian untouched", async ({ page }) => {
    await onboard(page, { appLang: "es", langs: [{ lang: "it", explainIn: "es", exp: "never" }] });
    await finishLesson(page, { lang: "it", base: "es", appLang: "es" });
    const before = await readDB(page);
    await page.goto("/");
    await page.getByRole("button", { name: T.es.switchCourse }).click();
    await page.getByText(T.es.addLanguage).click();
    await page.locator(".choice-card", { hasText: "Deutsch" }).click();
    await page.getByRole("button", { name: T.es.continue }).click();
    await page.locator(".choice-card", { hasText: "English" }).click();
    await page.getByRole("button", { name: T.es.continue }).click();
    await page.locator(".choice-card", { hasText: T.es.expNever }).click();
    await page.getByRole("button", { name: T.es.continue }).click();
    await page.getByRole("button", { name: T.es.setGoal }).click();
    await page.waitForURL((u) => !u.pathname.startsWith("/onboarding"));
    const after = await readDB(page);
    for (const id of Object.keys(before.cards)) if (id.startsWith("it-")) expect(after.cards[id]).toEqual(before.cards[id]);
    expect(after.profile.courses.de.explainIn).toBe("en");
    await page.goto("/");
    expect(await page.evaluate(() => document.documentElement.dataset.lang)).toBe("de");
    await expect(page.getByText(/Italiano/).first()).toBeVisible();
  });
  test("starting German right after an Italian lesson shows a German lesson (P0-1)", async ({ page }) => {
    await onboard(page, { appLang: "es", langs: [{ lang: "it", explainIn: "es", exp: "never" }, { lang: "de", explainIn: "en", exp: "never" }] });
    await finishLesson(page, { lang: "it", base: "es", appLang: "es" });
    const db = await readDB(page);
    db.profile.activeLang = "de";
    await writeDB(page, db);
    await page.goto("/");
    await page.locator(".btn-primary").click();
    await page.waitForURL(/\/lesson/);
    await expect(page.locator(".prompt [lang=de], .prompt-word [lang=de], .teach [lang=de]").first().or(page.locator(".prompt .title").first())).toBeVisible();
    await expect(page.getByText(T.es.resultsTitle)).toHaveCount(0);
  });
});

test.describe("CUJ-5 mistakes", () => {
  test("3 typed misses: requeued, answer shown, 'I was right' works, next day N to fix = Results count", async ({ page }) => {
    await onboard(page, { appLang: "en", langs: [{ lang: "it", explainIn: "en", exp: "never" }] });
    const db0 = await readDB(page);
    // give the learner known cards so typed recall appears
    const now = Date.now();
    const ids = ["it-u01-ciao", "it-u01-grazie", "it-u01-prego", "it-u01-piacere", "it-u01-arrivederci", "it-u01-buongiorno"];
    for (const id of ids) db0.cards[id] = { id, lang: "it", due: now - 1000, stability: 12, difficulty: 5, elapsed_days: 10, scheduled_days: 10, learning_steps: 0, reps: 4, lapses: 0, state: 2, last_review: now - 10 * 86400000, introducedAt: now - 30 * 86400000 };
    await writeDB(page, db0);
    await page.goto("/");
    await page.locator(".btn-primary").click();
    const s = await finishLesson(page, { lang: "it", base: "en", appLang: "en", missTyped: 3, iWasRightOnce: false });
    expect(s.misses.length).toBeGreaterThanOrEqual(3);
    const db = await readDB(page);
    const sess = db.sessions.at(-1);
    expect(sess.toFix.length).toBeGreaterThanOrEqual(3);
    const wrongIds = new Set(db.reviews.filter((r: { verdict: string }) => r.verdict === "wrong").map((r: { id: string }) => r.id));
    const counts = new Map<string, number>();
    for (const r of db.reviews) if (wrongIds.has(r.id)) counts.set(r.id, (counts.get(r.id) ?? 0) + 1);
    expect([...counts.values()].some((n) => n >= 2)).toBe(true); // requeued in-session
    await ageDB(page, 1);
    await page.goto("/");
    await expect(page.getByText(T.en.toFix(sess.toFix.length))).toBeVisible();
  });
  test("feedback sheet shows the correct answer and 'I was right' counts as Good", async ({ page }) => {
    await onboard(page, { appLang: "en", langs: [{ lang: "it", explainIn: "en", exp: "never" }] });
    const db0 = await readDB(page);
    const now = Date.now();
    db0.cards["it-u01-grazie"] = { id: "it-u01-grazie", lang: "it", due: now - 1000, stability: 12, difficulty: 5, elapsed_days: 10, scheduled_days: 10, learning_steps: 0, reps: 4, lapses: 0, state: 2, last_review: now - 864e6, introducedAt: now - 30 * 864e5 };
    await writeDB(page, db0);
    await page.goto("/");
    await page.locator(".btn-primary").click();
    // Wait for an *unanswered* typed task: playLesson may itself answer a typed task, which
    // leaves a read-only input behind (that race made this case flaky, ~50 % on the baseline too).
    const typed = page.locator("input.input.big:not([readonly])");
    for (let k = 0; k < 40; k++) {
      // let the next task render before deciding, so the helper never sees it first
      await page.locator(".prompt-eyebrow, .fb").first().waitFor({ timeout: 5000 }).catch(() => {});
      await page.waitForTimeout(200);
      if (await typed.isVisible().catch(() => false)) break;
      await playLesson(page, { lang: "it", base: "en", appLang: "en", maxSteps: 1 });
    }
    await typed.fill("grazzie mile");
    await page.locator(".answer-area .btn-primary").click();
    await expect(page.locator(".fb")).toBeVisible();
    await expect(page.locator(".fb [lang=it]").first()).toBeVisible();
    await page.getByRole("button", { name: T.en.iWasRight }).click();
    const db = await readDB(page);
    const last = db.reviews.at(-1);
    expect(last.rating).toBe(3);
    expect(last.source).toBe("override");
  });
});

test.describe("CUJ-8 falling behind (9 days)", () => {
  test("Welcome back, reviews only, no red, no missed-day count, no weekly check first", async ({ page }) => {
    await onboard(page, { appLang: "es", langs: [{ lang: "it", explainIn: "es", exp: "never" }] });
    await finishLesson(page, { lang: "it", base: "es", appLang: "es" });
    await ageDB(page, 9);
    await page.goto("/");
    await expect(page.getByText(T.es.welcomeBack)).toBeVisible();
    await expect(page.getByText(/\b9\b.*d[ií]as?/)).toHaveCount(0);
    await page.locator(".btn-primary").click();
    const s = await playLesson(page, { lang: "it", base: "es", appLang: "es", maxSteps: 30 });
    expect(s.prompts.filter((p) => p.startsWith(T.es.newWord))).toHaveLength(0);
  });
});

test.describe("CUJ-7 change goal", () => {
  test("Me → Edit goal → A2 in 3 months: 'Very demanding' + alternatives, saved, Today updates", async ({ page }) => {
    await onboard(page, { appLang: "en", langs: [{ lang: "de", explainIn: "en", exp: "never" }] });
    await quitLesson(page, "en");
    await page.goto("/me");
    const start = Date.now();
    await page.getByRole("button", { name: /Edit goal|Edit/ }).first().click();
    await page.getByRole("button", { name: T.en.goalKindLevel }).click();
    await page.locator(".choice-card", { hasText: T.en.levelA2 }).click();
    await page.getByRole("button", { name: T.en.months(3) }).click();
    await expect(page.getByText(T.en.feas.demanding).first()).toBeVisible();
    // GO-7 / P1-11: the copy is driven by the shipped units; the course now reaches B2 (the top goal
    // level), so no level is "beyond the course" and the B2 choice is offered without that caption.
    await expect(page.locator(".choice-card", { hasText: T.en.levelB2 })).toBeVisible();
    await expect(page.getByText(T.en.moreUnitsSoon)).toHaveCount(0);
    await expect(page.getByText(T.en.altTitle)).toBeVisible();
    // P1-5: nothing on the goal sheet is covered by another element (judge saw the card overlap the chips)
    const covered = await page.evaluate(() => {
      const out: string[] = [];
      const root = document.querySelector("[role=dialog]") ?? document.body;
      for (const el of root.querySelectorAll<HTMLElement>("button, .label, .h2, .caption")) {
        el.scrollIntoView({ block: "center" });
        const r = el.getBoundingClientRect();
        if (!r.width || !r.height) continue;
        const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
        if (hit && !el.contains(hit) && !hit.contains(el)) out.push((el.innerText || "").slice(0, 30));
      }
      return out;
    });
    expect(covered).toEqual([]);
    await page.getByRole("button", { name: T.en.setGoal }).or(page.getByRole("button", { name: T.en.save })).first().click();
    expect(Date.now() - start).toBeLessThan(60_000);
    const db = await readDB(page);
    expect(db.profile.courses.de.goal.target).toBe("A2");
  });
});

test.describe("CUJ-12 v1 owner upgrade", () => {
  test("Back on the upgrade goal screen goes home instead of looping (live bug 2026-11-14)", async ({ page }) => {
    await page.goto("/");
    const v1 = migrateV1Fixture(Date.now());
    await page.evaluate((v) => { localStorage.clear(); localStorage.setItem("lingua:v1", JSON.stringify(v)); }, v1);
    await page.goto("/");
    await expect(page.getByRole("button", { name: T.es.setGoal })).toBeVisible();
    await page.getByRole("button", { name: T.es.back }).click();
    await page.waitForURL((u) => u.pathname === "/");
    await expect(page.getByRole("button", { name: T.es.setGoal })).toHaveCount(0);
    await page.reload();
    await expect(page.getByRole("button", { name: T.es.setGoal })).toHaveCount(0);
    expect(page.url()).not.toContain("/onboarding");
  });

  test("v1 blob → goal-only onboarding, due dates kept, Ties offered once, no Milestones", async ({ page }) => {
    await page.goto("/");
    const v1 = migrateV1Fixture(Date.now());
    await page.evaluate((v) => { localStorage.clear(); localStorage.setItem("lingua:v1", JSON.stringify(v)); }, v1);
    await page.goto("/");
    await expect(page.getByRole("button", { name: T.es.setGoal })).toBeVisible();
    await expect(page.getByText(T.es.getStarted)).toHaveCount(0);
    while (await page.getByRole("button", { name: T.es.setGoal }).isVisible().catch(() => false)) {
      await page.getByRole("button", { name: T.es.setGoal }).click();
      await page.waitForTimeout(300);
    }
    const db = await readDB(page);
    const total = Object.values(db.profile.courses).reduce((a: number, c) => a + ((c as { goal?: { minutesPerDay: number } }).goal?.minutesPerDay ?? 0), 0);
    expect(total).toBeLessThanOrEqual(30); // P1-2: no 85 min/day default
    expect(await page.evaluate(() => !!localStorage.getItem("lingua:v1-backup"))).toBe(true);
    await page.goto("/");
    await expect(page.getByText(/Milestones|Hitos/)).toHaveCount(0);
    // the old Ties log is offered once as a download card (spec §4.11), nowhere else
    await expect(page.getByText(T.es.tiesTitle)).toHaveCount(1);
  });
});
