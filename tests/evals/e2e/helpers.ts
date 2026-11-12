// Shared Playwright helpers: UI strings come from the app's own dictionaries, the "learner"
// answers from the real course content (an oracle), and state is read from localStorage.
import { expect, type Page } from "@playwright/test";
import { DICTS } from "../../../src/lib/i18n";
import { courses } from "../../../src/content";
import type { BaseLang, Item, TargetLang } from "../../../src/content/schema";

export const T = DICTS;
export const KEY = "lingua:v2";
const ITEMS: Item[] = (["it", "de"] as TargetLang[]).flatMap((l) => courses[l].units.flatMap((u) => u.items));

export async function readDB(page: Page) {
  return page.evaluate((k) => JSON.parse(localStorage.getItem(k) ?? "null"), KEY);
}
export async function writeDB(page: Page, db: unknown) {
  await page.evaluate(([k, v]) => localStorage.setItem(k as string, JSON.stringify(v)), [KEY, db] as const);
}

/** Collect console errors and page errors for the whole test. */
export function watchErrors(page: Page): string[] {
  const errs: string[] = [];
  page.on("console", (m) => {
    if (m.type() === "error" && !/vibrate|favicon|Failed to load resource.*(404|favicon)/i.test(m.text())) errs.push(m.text());
  });
  page.on("pageerror", (e) => errs.push(String(e)));
  return errs;
}

const btn = (page: Page, name: string | RegExp) => page.getByRole("button", { name, exact: typeof name === "string" });

export interface Plan {
  appLang: BaseLang;
  langs: { lang: TargetLang; explainIn: BaseLang; exp: "never" | "bit" | "classes" | "lived"; canDo?: ("yes" | "partly" | "no")[]; placementAccuracy?: number; beginnerAt?: number }[];
}

export interface OnboardResult { placementItems: Record<string, number>; firstAnswerMs?: number }

/** Drive onboarding through the UI exactly like a learner. Ends on the first lesson. */
export async function onboard(page: Page, plan: Plan, opts: { startLesson?: boolean } = {}): Promise<OnboardResult> {
  const out: OnboardResult = { placementItems: {} };
  const t = T[plan.appLang];
  const t0 = Date.now();
  await page.goto("/");
  await btn(page, T.en.getStarted).or(btn(page, T.es.getStarted)).first().click();
  await page.locator(".choice-card", { hasText: T.en.baseName[plan.appLang] }).first().click();
  await btn(page, t.continue).click();
  for (const l of plan.langs) await page.locator(".choice-card", { hasText: l.lang === "it" ? "Italiano" : "Deutsch" }).click();
  await btn(page, t.continue).click();
  for (const l of plan.langs) {
    await page.locator(".choice-card", { hasText: t.baseName[l.explainIn] }).first().click();
    await btn(page, t.continue).click();
    const expTitle = { never: t.expNever, bit: t.expBit, classes: t.expClasses, lived: t.expLived }[l.exp];
    await page.locator(".choice-card", { hasText: expTitle }).first().click();
    await btn(page, t.continue).click();
    if (l.exp !== "never") {
      const segs = page.locator(".seg");
      const cd = l.canDo ?? ["partly", "partly", "no"];
      for (let k = 0; k < 3; k++) await segs.nth(k).getByRole("button", { name: { yes: t.yes, partly: t.partly, no: t.no }[cd[k]], exact: true }).click();
      await btn(page, t.continue).click();
      await btn(page, t.placementStart).click();
      out.placementItems[l.lang] = await doPlacement(page, plan.appLang, l.lang, l.placementAccuracy ?? 0.6, l.beginnerAt);
      await expect(page.getByText(t.startLower)).toBeVisible();
      await btn(page, t.continue).click();
    }
    await btn(page, t.setGoal).click();
  }
  await btn(page, t.startFirst).click();
  await page.waitForURL(/\/lesson/);
  await page.locator(".answer-area, .teach").first().waitFor();
  out.firstAnswerMs = Date.now() - t0;
  void opts;
  return out;
}

/** Answer the adaptive placement; returns the number of items shown. */
export async function doPlacement(page: Page, appLang: BaseLang, lang: TargetLang, accuracy: number, beginnerAt?: number): Promise<number> {
  const t = T[appLang];
  const bank = courses[lang].placement;
  let n = 0;
  for (let guard = 0; guard < 20; guard++) {
    // after each answer a short "got it" card replaces the options: wait for the next item or the result
    const result = page.getByText(t.startLower);
    await page.locator(".opt").first().or(result).first().waitFor({ timeout: 15_000 });
    if (await result.isVisible().catch(() => false)) break;
    n++;
    if (beginnerAt && n === beginnerAt) {
      await btn(page, t.imBeginner).click();
      break;
    }
    // find the item by its option set
    const opts = (await page.locator(".opt").allInnerTexts()).map((s) => s.trim());
    const item = bank.find((b) => b.mcq && b.mcq.options.every((o) => opts.some((x) => x.includes(typeof o === "string" ? o : o[appLang]))));
    const right = Math.random() < accuracy;
    if (!item) await btn(page, t.dontKnow).click();
    else {
      const key = item.mcq!.options[item.mcq!.answer];
      const keyText = typeof key === "string" ? key : key[appLang];
      const idx = opts.findIndex((x) => (right ? x.includes(keyText) : !x.includes(keyText)));
      await page.locator(".opt").nth(Math.max(0, idx)).click();
    }
    await page.waitForTimeout(250);
  }
  return n;
}

export interface LessonStats { tasks: number; graded: number; right: number; misses: string[]; sawResults: boolean; firstEyebrow?: string; prompts: string[] }

/** Text of the first match, or "" immediately when there is none (no auto-wait). */
async function txt(page: Page, sel: string): Promise<string> {
  const l = page.locator(sel).first();
  return (await l.count()) ? ((await l.textContent().catch(() => "")) ?? "").trim() : "";
}

function findByGloss(text: string, lang: TargetLang, base: BaseLang): Item | undefined {
  const s = text.trim();
  return ITEMS.find((i) => i.lang === lang && i.gloss[base].trim() === s);
}

/**
 * Play the lesson on screen. accuracy = chance of answering right when the oracle knows the item.
 * missTyped: force N typed misses ("zzz") first. Stops at the Results screen or after maxSteps.
 */
export async function playLesson(page: Page, o: { lang: TargetLang; base: BaseLang; appLang: BaseLang; accuracy?: number; missTyped?: number; maxSteps?: number; iWasRightOnce?: boolean }): Promise<LessonStats> {
  const t = T[o.appLang];
  const st: LessonStats = { tasks: 0, graded: 0, right: 0, misses: [], sawResults: false, prompts: [] };
  let missLeft = o.missTyped ?? 0;
  let usedRight = false;
  for (let step = 0; step < (o.maxSteps ?? 200); step++) {
    if (await page.getByText(t.resultsTitle).or(page.getByText(t.goalReached)).first().isVisible().catch(() => false)) {
      st.sawResults = true;
      break;
    }
    const fb = page.locator(".fb");
    if (await fb.isVisible().catch(() => false)) {
      if (o.iWasRightOnce && !usedRight && (await btn(page, t.iWasRight).isVisible().catch(() => false))) {
        usedRight = true;
        await btn(page, t.iWasRight).click();
      }
      await fb.getByRole("button", { name: t.continue }).click();
      continue;
    }
    const eyebrow = await txt(page, ".prompt-eyebrow");
    if (!eyebrow) {
      await page.waitForTimeout(150);
      continue;
    }
    if (process.env.QA_DEBUG) console.log("STEP", step, eyebrow, page.url().slice(-30));
    if (st.tasks === 0) st.firstEyebrow = eyebrow;
    st.tasks++;
    st.prompts.push(eyebrow);
    const teach = page.locator(".teach");
    // guess-first: pick any option, then Continue on the teaching card
    if (eyebrow.startsWith(t.newWord)) {
      if (!(await teach.isVisible().catch(() => false))) await page.locator(".opt").first().click();
      await page.locator(".answer-area .btn-primary").click();
      continue;
    }
    st.graded++;
    const want = Math.random() < (o.accuracy ?? 0.85);
    const input = page.locator("input.input.big");
    if (await input.isVisible().catch(() => false)) {
      const gloss = await txt(page, ".prompt .title");
      const item = findByGloss(gloss, o.lang, o.base);
      const text = missLeft > 0 ? "zzz" : item && want ? item.target : "zzz";
      if (text === "zzz") st.misses.push(gloss);
      missLeft = Math.max(0, missLeft - 1);
      await input.fill(text);
      await page.locator(".answer-area .btn-primary").click();
      continue;
    }
    const tiles = page.locator(".tiles-bank .tile");
    if (await tiles.first().isVisible().catch(() => false)) {
      const gloss = await txt(page, ".prompt .title");
      const item = findByGloss(gloss, o.lang, o.base);
      const words = item ? item.target.replace(/[.!?¿¡,]/g, "").split(/\s+/) : [];
      const bank = (await tiles.allInnerTexts()).map((s) => s.trim());
      const used = new Set<number>();
      for (const w of want ? words : words.reverse()) {
        const k = bank.findIndex((b, j) => !used.has(j) && b.replace(/[.!?¿¡,]/g, "") === w);
        if (k >= 0) {
          used.add(k);
          await tiles.nth(k).click();
        }
      }
      if (!used.size) await tiles.first().click();
      await page.locator(".answer-area .btn-primary").last().click();
      continue;
    }
    const opts = page.locator(".opt:not([disabled])");
    if (await opts.first().isVisible().catch(() => false)) {
      const texts = (await opts.allInnerTexts()).map((s) => s.replace(/^\d\s*/, "").trim());
      const word = await txt(page, ".prompt-word [lang]");
      const item = ITEMS.find((i) => i.lang === o.lang && i.target === word);
      let k = item ? texts.findIndex((x) => x === item.gloss[o.base]) : -1;
      if (!want && k >= 0) k = (k + 1) % texts.length;
      await opts.nth(Math.max(0, k)).click();
      await page.locator(".answer-area .btn-primary").last().click();
      continue;
    }
    await page.waitForTimeout(150);
  }
  return st;
}

/** Quit the current lesson through ✕ → End lesson. */
export async function quitLesson(page: Page, appLang: BaseLang) {
  const t = T[appLang];
  await page.getByRole("button", { name: t.close }).first().click();
  await btn(page, t.endLesson).click();
}

/** Shift every stored timestamp back by `days` (simulates time passing, like the Judge did). */
export async function ageDB(page: Page, days: number) {
  const D = days * 86_400_000;
  await page.evaluate(([k, d]) => {
    const db = JSON.parse(localStorage.getItem(k as string)!);
    const shift = (o: Record<string, unknown>, keys: string[]) => keys.forEach((x) => typeof o[x] === "number" && ((o[x] as number) -= d as number));
    for (const c of Object.values(db.cards) as Record<string, unknown>[]) shift(c, ["due", "last_review", "introducedAt"]);
    for (const r of db.reviews) shift(r, ["t"]);
    for (const s of db.sessions) shift(s, ["t"]);
    for (const e of db.events) shift(e, ["t"]);
    for (const c of Object.values(db.profile.courses) as Record<string, Record<string, unknown>>[]) {
      shift(c, ["addedAt"]);
      if (c.goal) shift(c.goal as Record<string, unknown>, ["setAt"]);
      if (c.placement) shift(c.placement as Record<string, unknown>, ["at"]);
    }
    shift(db.profile, ["createdAt", "lastBackupAt"]);
    if (db.profile.seen) for (const k2 of Object.keys(db.profile.seen)) db.profile.seen[k2] -= d as number;
    localStorage.setItem(k as string, JSON.stringify(db));
  }, [KEY, D] as const);
}

/** Visible text that should be in the UI language but is in the other one. Target-language nodes (lang=it/de) are excluded. */
export async function languageLeaks(page: Page, appLang: BaseLang): Promise<string[]> {
  const other = appLang === "es" ? T.en : T.es;
  const mine = T[appLang];
  const strings = new Set<string>();
  for (const [k, v] of Object.entries(other)) {
    if (typeof v === "string" && v.length >= 8 && v !== (mine as Record<string, unknown>)[k]) strings.add(v);
  }
  const text: string = await page.evaluate(() => {
    const walk = (n: Node): string => {
      if (n.nodeType === 3) return n.textContent ?? "";
      const el = n as HTMLElement;
      if (el.getAttribute?.("lang") && ["it", "de"].includes(el.getAttribute("lang")!)) return "";
      if (el.tagName === "SCRIPT" || el.tagName === "STYLE") return "";
      if (el.getAttribute?.("aria-hidden") === "true") return "";
      return [...n.childNodes].map(walk).join(" ");
    };
    return walk(document.body);
  });
  return [...strings].filter((s) => text.includes(s));
}
