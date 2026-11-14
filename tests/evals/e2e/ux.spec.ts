// Category: e2e-ux — tap targets, horizontal scroll at 375 px, console errors, contrast,
// reduced motion and localisation, measured in the real browser on every main screen.
// Also CUJ-10 (offline) and CUJ-11 (backup/restore), which need the browser.
import { expect, test, type Page } from "@playwright/test";
import { languageLeaks, onboard, playLesson, quitLesson, readDB, T, watchErrors } from "./helpers";

async function setup(page: Page, appLang: "es" | "en") {
  await page.clock.install();
  await onboard(page, { appLang, langs: [{ lang: "it", explainIn: appLang, exp: "never" }] });
  await playLesson(page, { lang: "it", base: appLang, appLang, maxSteps: 4 });
}

const ROUTES = ["/", "/path", "/me", "/me/settings", "/me/words", "/me/settings/tutor"];

async function smallTargets(page: Page): Promise<string[]> {
  return page.evaluate(() => {
    const out: string[] = [];
    for (const el of document.querySelectorAll<HTMLElement>("button, a[href], input:not([type=hidden]), select, [role=button]")) {
      // a control inside a <label> is tapped through its label: measure the label (WCAG 2.5.8)
      const box = el.tagName === "INPUT" && el.closest("label") ? el.closest("label")! : el;
      const r = box.getBoundingClientRect();
      const st = getComputedStyle(el);
      if (!r.width || !r.height || st.visibility === "hidden" || el.closest("[aria-hidden=true]")) continue;
      if (el.closest(".accent-bar")) continue; // accent keys: 40px allowed by UX doc (keyboard row)
      if (Math.min(r.width, r.height) < 43.5) out.push(`${el.tagName.toLowerCase()}.${el.className} "${(el.innerText || el.getAttribute("aria-label") || "").slice(0, 20)}" ${Math.round(r.width)}×${Math.round(r.height)}`);
    }
    return out;
  });
}

async function lowContrast(page: Page): Promise<string[]> {
  return page.evaluate(() => {
    // rgb()/rgba() are 0–255; CSS color(srgb …) (from color-mix) is 0–1
    const parse = (c: string) => {
      const n = (c.match(/[\d.]+/g) ?? []).map(Number);
      return c.startsWith("color(") ? [...n.slice(0, 3).map((x) => x * 255), ...n.slice(3)] : n;
    };
    const lum = ([r, g, b]: number[]) => {
      const f = (v: number) => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    };
    const bgOf = (el: Element | null): number[] => {
      while (el) {
        const c = parse(getComputedStyle(el).backgroundColor);
        if (c.length >= 3 && (c[3] === undefined || c[3] > 0.5)) return c;
        el = el.parentElement;
      }
      return [255, 255, 255];
    };
    const out: string[] = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const seen = new Set<Element>();
    while (walker.nextNode()) {
      const el = walker.currentNode.parentElement;
      if (!el || seen.has(el) || !walker.currentNode.textContent?.trim()) continue;
      seen.add(el);
      const st = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      if (!r.width || st.visibility === "hidden" || Number(st.opacity) < 0.5 || el.closest("[aria-hidden=true],[disabled]")) continue;
      const fg = parse(st.color);
      const bg = bgOf(el);
      const L1 = lum(fg), L2 = lum(bg);
      const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
      const large = parseFloat(st.fontSize) >= 24 || (parseFloat(st.fontSize) >= 18.66 && Number(st.fontWeight) >= 700);
      if (ratio < (large ? 3 : 4.5)) out.push(`"${walker.currentNode.textContent!.trim().slice(0, 24)}" ${ratio.toFixed(2)}`);
    }
    return out;
  });
}

for (const appLang of ["es", "en"] as const) {
  test.describe(`screens in ${appLang}`, () => {
    for (const route of ROUTES) {
      test(`${route} [${appLang}]: targets ≥44px, no h-scroll at 375, contrast ≥ AA, no console errors, no language leaks`, async ({ page }) => {
        await setup(page, appLang);
        await quitLesson(page, appLang);
        const errs = watchErrors(page);
        await page.setViewportSize({ width: 375, height: 812 });
        await page.goto(route);
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(400);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), "horizontal scroll").toBe(true);
        expect(await smallTargets(page), "tap targets < 44px").toEqual([]);
        expect(await lowContrast(page), "low contrast").toEqual([]);
        expect(await languageLeaks(page, appLang), "other-language strings").toEqual([]);
        expect(errs, "console errors").toEqual([]);
      });
    }
    test(`/lesson [${appLang}]: targets, h-scroll, contrast, leaks, target words carry lang`, async ({ page }) => {
      await setup(page, appLang);
      await page.setViewportSize({ width: 375, height: 812 });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
      expect(await smallTargets(page)).toEqual([]);
      expect(await lowContrast(page)).toEqual([]);
      expect(await languageLeaks(page, appLang)).toEqual([]);
      expect(await page.locator(".prompt [lang=it], .options [lang=it], .teach [lang=it]").count()).toBeGreaterThan(0);
    });
  });
}

test("dark theme renders with a dark background and readable text (CUJ-13)", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await setup(page, "en");
  await quitLesson(page, "en");
  await page.goto("/");
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  const n = (bg.match(/\d+/g) ?? []).slice(0, 3).map(Number);
  expect(n.reduce((a, b) => a + b, 0) / 3).toBeLessThan(80);
  expect(await lowContrast(page)).toEqual([]);
});

test("reduced motion: no long animations or transitions (CUJ-13)", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await setup(page, "en");
  const long = await page.evaluate(() => {
    const out: string[] = [];
    for (const el of document.querySelectorAll<HTMLElement>("*")) {
      const st = getComputedStyle(el);
      const dur = (s: string) => Math.max(...s.split(",").map((x) => parseFloat(x) * (x.includes("ms") ? 1 : 1000)));
      if (st.animationName !== "none" && dur(st.animationDuration) > 200) out.push(`${el.className} anim ${st.animationDuration}`);
      if (dur(st.transitionDuration) > 200) out.push(`${el.className} trans ${st.transitionDuration}`);
    }
    return out;
  });
  expect(long).toEqual([]);
});

test("correctness is never shown by colour alone (✓/✕ + words) (CUJ-13)", async ({ page }) => {
  await setup(page, "en");
  for (let k = 0; k < 20 && !(await page.locator(".fb").isVisible()); k++) await playLesson(page, { lang: "it", base: "en", appLang: "en", maxSteps: 1 });
  const text = await page.locator(".fb").innerText();
  expect(text).toMatch(new RegExp(`${T.en.correct}|${T.en.almost}|${T.en.notQuite}`));
});

test("CUJ-11 backup: export → reset → import gives the same state; a bad file changes nothing", async ({ page }) => {
  await setup(page, "en");
  await quitLesson(page, "en");
  const before = await readDB(page);
  await page.goto("/me/settings");
  const [dl] = await Promise.all([page.waitForEvent("download"), page.getByRole("button", { name: /Export/ }).click()]);
  const file = await dl.path();
  // bad file first: nothing changes
  const input = page.locator("input[type=file][accept^=\"application/json\"]");
  await input.setInputFiles({ name: "bad.json", mimeType: "application/json", buffer: Buffer.from("{nope") });
  await page.waitForTimeout(500);
  expect((await readDB(page)).cards).toEqual(before.cards);
  // reset then import
  await page.evaluate(() => localStorage.removeItem("lingua:v2"));
  await page.goto("/me/settings");
  await page.locator("input[type=file][accept^=\"application/json\"]").setInputFiles(file!);
  const confirm = page.getByRole("button", { name: /Import|Restore|Replace|Importar|Restaurar/ }).last();
  if (await confirm.isVisible().catch(() => false)) await confirm.click();
  await page.waitForTimeout(500);
  const after = await readDB(page);
  expect(after.cards).toEqual(before.cards);
  expect(after.profile.courses).toEqual(before.profile.courses);
});

test.describe("CUJ-10 offline", () => {
  test.use({ serviceWorkers: "allow" });
  test("after one online visit, the app cold-starts offline and a lesson completes", async ({ page, context }) => {
    await page.clock.install();
    await onboard(page, { appLang: "en", langs: [{ lang: "it", explainIn: "en", exp: "never" }] });
    await playLesson(page, { lang: "it", base: "en", appLang: "en", maxSteps: 3 });
    await quitLesson(page, "en");
    for (const r of ["/", "/path", "/me"]) await page.goto(r);
    await page.waitForFunction(() => navigator.serviceWorker?.controller != null, null, { timeout: 30_000 });
    await page.waitForTimeout(1500);
    await context.setOffline(true);
    await page.goto("/");
    await expect(page.locator(".btn-primary")).toBeVisible();
    const before = (await readDB(page)).reviews.length;
    await page.locator(".btn-primary").click();
    await page.waitForURL(/\/lesson/);
    await playLesson(page, { lang: "it", base: "en", appLang: "en", maxSteps: 6 });
    expect((await readDB(page)).reviews.length).toBeGreaterThan(before);
    await context.setOffline(false);
  });
});
