// Category: e2e-sync — accounts & cross-device sync in the real production build.
// The "sync" build (port 3510) is compiled with a fake Supabase URL; every request to it is
// answered here by an in-test fake (auth: email code; REST: user_state + push_state RPC),
// shared by all browser contexts in a test, so two contexts act like two phones.
// CUJ-14 runs on the normal build (no Supabase configured): accounts must be invisible.
import { expect, test, type BrowserContext, type Page, type Route } from "@playwright/test";
import { onboard, playLesson, readDB, T, watchErrors } from "./helpers";

const SYNC = "http://localhost:3510";
const FAKE = "https://lingua-test.supabase.co";
const CODE = "123456";
const KEY = "sk-ant-api03-e2e-should-never-leave-000000";
const t = T.es;

type Row = { db: unknown; rev: number };
function fakeSupabase(invited: string[], google: { as?: string; cancel?: boolean } = {}) {
  const rows = new Map<string, Row>();
  const authorize: URL[] = [];
  const reads: string[] = [];
  const bodies: string[] = [];
  let down = false;
  const users = new Map(invited.map((e, k) => [e, `00000000-0000-4000-8000-00000000000${k + 1}`]));
  const b64 = (o: object) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const jwt = (sub: string, email: string) => `${b64({ alg: "HS256", typ: "JWT" })}.${b64({ sub, email, role: "authenticated", aud: "authenticated", exp: Math.floor(Date.now() / 1000) + 3600 })}.sig`;
  const who = (route: Route) => {
    const tok = (route.request().headers()["authorization"] ?? "").replace(/^Bearer /, "");
    try {
      return JSON.parse(Buffer.from(tok.split(".")[1], "base64url").toString()).sub as string;
    } catch {
      return null;
    }
  };
  const cors = { "access-control-allow-origin": "*", "access-control-allow-headers": "*", "access-control-allow-methods": "*", "access-control-expose-headers": "*" };
  const json = (route: Route, status: number, body: unknown) => route.fulfill({ status, headers: { ...cors, "content-type": "application/json" }, body: JSON.stringify(body) });

  async function handle(route: Route) {
    const req = route.request();
    if (req.method() === "OPTIONS") return route.fulfill({ status: 204, headers: cors });
    if (down) return route.abort("internetdisconnected");
    const url = new URL(req.url());
    const body = req.postData() ?? "";
    bodies.push(body);
    const p = url.pathname;
    const session = (id: string, email: string, provider: string) => {
      const now = Math.floor(Date.now() / 1000);
      const user = { id, aud: "authenticated", role: "authenticated", email, email_confirmed_at: new Date().toISOString(), app_metadata: { provider }, user_metadata: {}, created_at: new Date().toISOString() };
      return { access_token: jwt(id, email), token_type: "bearer", expires_in: 3600, expires_at: now + 3600, refresh_token: `r-${id}`, user };
    };
    if (p === "/auth/v1/authorize") {
      // Stands in for Supabase + Google's consent screen: bounce straight back to the app.
      authorize.push(url);
      const back = new URL(url.searchParams.get("redirect_to")!);
      if (google.cancel) back.searchParams.set("error", "access_denied");
      else if (!users.has(google.as ?? "")) {
        back.searchParams.set("error", "access_denied");
        back.searchParams.set("error_code", "signup_disabled");
        back.searchParams.set("error_description", "Signups not allowed for this instance");
      } else back.searchParams.set("code", `g-${google.as}`);
      return route.fulfill({ status: 302, headers: { location: back.toString() } });
    }
    if (p === "/auth/v1/token" && url.searchParams.get("grant_type") === "pkce") {
      const { auth_code, code_verifier } = JSON.parse(body);
      const email = String(auth_code).replace(/^g-/, "");
      const id = users.get(email);
      if (!id || !code_verifier) return json(route, 400, { code: 400, error_code: "bad_code_verifier", msg: "invalid flow state" });
      return json(route, 200, session(id, email, "google"));
    }
    if (p === "/auth/v1/otp") {
      const { email } = JSON.parse(body);
      if (!users.has(email)) return json(route, 422, { code: 422, error_code: "otp_disabled", msg: "Signups not allowed for otp" });
      return json(route, 200, {});
    }
    if (p === "/auth/v1/verify") {
      const { email, token } = JSON.parse(body);
      const id = users.get(email);
      if (!id || token !== CODE) return json(route, 403, { code: 403, error_code: "otp_expired", msg: "Token has expired or is invalid" });
      const now = Math.floor(Date.now() / 1000);
      const user = { id, aud: "authenticated", role: "authenticated", email, email_confirmed_at: new Date().toISOString(), app_metadata: { provider: "email" }, user_metadata: {}, created_at: new Date().toISOString() };
      return json(route, 200, { access_token: jwt(id, email), token_type: "bearer", expires_in: 3600, expires_at: now + 3600, refresh_token: `r-${id}`, user });
    }
    if (p === "/auth/v1/logout") return route.fulfill({ status: 204, headers: cors });
    const uid = who(route);
    if (!uid) return json(route, 401, { message: "no auth" });
    if (p === "/rest/v1/user_state") {
      reads.push(url.search);
      // The app also filters by its own user id (defence in depth); a mismatch would be a bug.
      const eq = url.searchParams.get("user_id");
      if (eq && eq !== `eq.${uid}`) return json(route, 200, []);
      const row = rows.get(uid);
      const sel = url.searchParams.get("select") ?? "*";
      const out = row ? (sel === "rev" ? { rev: row.rev } : { db: row.db, rev: row.rev }) : null;
      const single = (req.headers()["accept"] ?? "").includes("vnd.pgrst.object");
      if (single) return out ? json(route, 200, out) : json(route, 406, { code: "PGRST116", message: "no rows" });
      return json(route, 200, out ? [out] : []);
    }
    if (p === "/rest/v1/rpc/push_state") {
      const { expected_rev, doc } = JSON.parse(body);
      const cur = rows.get(uid)?.rev ?? 0;
      if (cur !== expected_rev) return json(route, 200, -1);
      rows.set(uid, { db: doc, rev: cur + 1 });
      return json(route, 200, cur + 1);
    }
    if (p === "/rest/v1/rpc/delete_me") {
      rows.delete(uid);
      for (const [e, id] of users) if (id === uid) users.delete(e);
      return json(route, 200, null);
    }
    return json(route, 404, { message: `fake: ${p}` });
  }
  return {
    rows,
    bodies,
    authorize,
    reads,
    setDown: (v: boolean) => void (down = v),
    attach: (ctx: BrowserContext) => ctx.route(`${FAKE}/**`, handle),
  };
}

async function learnABit(page: Page) {
  await onboard(page, { appLang: "es", langs: [{ lang: "it", explainIn: "es", exp: "never" }] });
  const st = await playLesson(page, { lang: "it", base: "es", appLang: "es", accuracy: 0.9 });
  expect(st.sawResults).toBe(true);
  await page.goto("/");
}

async function signIn(page: Page, email: string, from: "settings" | "welcome") {
  if (from === "settings") {
    await page.goto("/me/settings");
    await page.getByRole("link", { name: new RegExp(t.acctSync) }).click();
  } else {
    await page.goto("/");
    await page.getByRole("button", { name: t.haveAccount }).click();
  }
  await page.getByLabel(t.acctEmail).fill(email);
  await page.getByRole("button", { name: t.acctSendCode }).click();
  await page.getByLabel(t.acctCode).fill(CODE);
  await page.getByRole("button", { name: t.acctVerify, exact: true }).click();
}

test.describe("e2e-sync · accounts hidden when not configured", () => {
  test("CUJ-14 guest: no account UI anywhere, no request to any auth server", async ({ page }) => {
    const errs = watchErrors(page);
    const ext: string[] = [];
    page.on("request", (r) => {
      if (!r.url().startsWith("http://localhost")) ext.push(r.url());
    });
    await page.goto("/");
    await expect(page.getByRole("button", { name: T.es.getStarted }).or(page.getByRole("button", { name: T.en.getStarted })).first()).toBeVisible();
    await expect(page.getByRole("button", { name: T.es.haveAccount }).or(page.getByRole("button", { name: T.en.haveAccount }))).toHaveCount(0);
    await learnABit(page);
    await page.goto("/me/settings");
    await expect(page.getByText(t.acctSync)).toHaveCount(0);
    await page.goto("/account");
    await page.waitForURL(/\/me\/settings/);
    expect(ext.filter((u) => /supabase|\/auth\/v1/.test(u))).toEqual([]);
    expect(errs).toEqual([]);
  });
});

test.describe("e2e-sync · with an account", () => {
  test.use({ baseURL: SYNC, locale: "es-ES" });

  test("CUJ-15 progress follows you: phone signs in and uploads, a second device downloads the same progress", async ({ browser }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    const phoneCtx = await browser.newContext({ baseURL: SYNC, locale: "es-ES", viewport: { width: 390, height: 844 } });
    await fake.attach(phoneCtx);
    const phone = await phoneCtx.newPage();
    const errs = watchErrors(phone);
    await learnABit(phone);
    await phone.evaluate((k) => localStorage.setItem("lingua:llm", JSON.stringify({ provider: "anthropic", apiKey: k })), KEY);
    const mine = await readDB(phone);
    expect(mine.reviews.length).toBeGreaterThan(0);

    await signIn(phone, "ana@example.com", "settings");
    await expect(phone.getByRole("status").filter({ hasText: t.acctDone })).toBeVisible();
    expect(fake.rows.size).toBe(1);
    const stored = [...fake.rows.values()][0].db as { reviews: unknown[]; events: unknown[] };
    expect(stored.reviews).toHaveLength(mine.reviews.length);
    expect(stored.events).toEqual([]);

    await phone.getByRole("button", { name: t.continue }).click();
    await phone.goto("/me/settings");
    await expect(phone.getByText(t.acctSignedInAs("ana@example.com"))).toBeVisible();

    const laptopCtx = await browser.newContext({ baseURL: SYNC, locale: "es-ES", viewport: { width: 390, height: 844 } });
    await fake.attach(laptopCtx);
    const laptop = await laptopCtx.newPage();
    await signIn(laptop, "ana@example.com", "welcome");
    await expect(laptop.getByRole("status").filter({ hasText: t.acctDone })).toBeVisible();
    await laptop.getByRole("button", { name: t.continue }).click();
    await laptop.waitForURL((u) => u.pathname === "/");
    const theirs = await readDB(laptop);
    expect(theirs.profile.onboarded).toBe(true);
    expect(theirs.reviews.map((r: { t: number }) => r.t)).toEqual(mine.reviews.map((r: { t: number }) => r.t));
    expect(Object.keys(theirs.cards).sort()).toEqual(Object.keys(mine.cards).sort());

    // P0-S2: no request body ever carried the tutor key
    expect(fake.bodies.some((b) => b.includes("sk-ant-"))).toBe(false);
    expect(errs).toEqual([]);
    await phoneCtx.close();
    await laptopCtx.close();
  });

  test("CUJ-18 not-invited email gets a clear message and no account is created", async ({ page, context }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    await fake.attach(context);
    await page.goto("/");
    await page.getByRole("button", { name: t.haveAccount }).click();
    await page.getByLabel(t.acctEmail).fill("stranger@example.com");
    await page.getByRole("button", { name: t.acctSendCode }).click();
    await expect(page.locator("main").getByRole("alert")).toHaveText(t.acctErr.notInvited);
    expect(fake.rows.size).toBe(0);
  });

  test("CUJ-18 wrong code is rejected, the right one works", async ({ page, context }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    await fake.attach(context);
    await page.goto("/");
    await page.getByRole("button", { name: t.haveAccount }).click();
    await page.getByLabel(t.acctEmail).fill("ana@example.com");
    await page.getByRole("button", { name: t.acctSendCode }).click();
    await page.getByLabel(t.acctCode).fill("000000");
    await page.getByRole("button", { name: t.acctVerify, exact: true }).click();
    await expect(page.locator("main").getByRole("alert")).toHaveText(t.acctErr.badCode);
    await page.getByLabel(t.acctCode).fill(CODE);
    await page.getByRole("button", { name: t.acctVerify, exact: true }).click();
    await expect(page.getByRole("status").filter({ hasText: t.acctDone })).toBeVisible();
  });

  test("CUJ-16 offline: changes made while the server is unreachable upload on reconnect", async ({ page, context }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    await fake.attach(context);
    await learnABit(page);
    await signIn(page, "ana@example.com", "settings");
    await page.getByRole("button", { name: t.continue }).click();
    await page.goto("/me/settings");
    fake.setDown(true);
    await page.getByRole("button", { name: "10′" }).click(); // lesson length → profile change
    await page.getByRole("button", { name: t.acctSyncNow }).click();
    await expect(page.getByText(t.acctStatus.error).or(page.getByText(t.acctStatus.offline))).toBeVisible();
    fake.setDown(false);
    await page.getByRole("button", { name: t.acctSyncNow }).click();
    await expect(page.getByText(/^Última sincronización/)).toBeVisible();
    const stored = [...fake.rows.values()][0].db as { profile: { settings: { sessionMinutes: number } } };
    expect(stored.profile.settings.sessionMinutes).toBe(10);
  });

  test("CUJ-19 sign out clears the device (and the tutor key when ticked); progress stays in the account", async ({ page, context }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    await fake.attach(context);
    await learnABit(page);
    await page.evaluate((k) => localStorage.setItem("lingua:llm", JSON.stringify({ provider: "anthropic", apiKey: k })), KEY);
    await signIn(page, "ana@example.com", "settings");
    await page.getByRole("button", { name: t.continue }).click();
    await page.goto("/me/settings");
    await page.getByRole("button", { name: t.acctSignOut }).click();
    await expect(page.getByText(t.acctSignOutSub)).toBeVisible();
    await page.locator(".sheet").getByRole("button", { name: t.acctSignOut }).click();
    await page.waitForURL(/\/onboarding/);
    const left = await page.evaluate(() => ({ db: JSON.parse(localStorage.getItem("lingua:v2") ?? "null"), llm: localStorage.getItem("lingua:llm"), auth: localStorage.getItem("lingua:auth"), sync: localStorage.getItem("lingua:sync") }));
    expect(left.db?.profile?.onboarded ?? false).toBe(false);
    expect(left.db?.reviews?.length ?? 0).toBe(0);
    expect(left.llm).toBeNull();
    expect(left.auth).toBeNull();
    expect(left.sync).toBeNull();
    expect(([...fake.rows.values()][0].db as { reviews: unknown[] }).reviews.length).toBeGreaterThan(0);
  });

  test("CUJ-20 delete account removes the server copy; the device keeps its progress as a guest", async ({ page, context }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    await fake.attach(context);
    await learnABit(page);
    await signIn(page, "ana@example.com", "settings");
    await page.getByRole("button", { name: t.continue }).click();
    await page.goto("/me/settings");
    await page.getByRole("button", { name: t.acctDelete }).click();
    await page.getByRole("textbox", { name: t.acctDeleteWord }).fill(t.acctDeleteWord);
    await page.locator(".sheet").getByRole("button", { name: t.acctDelete }).click();
    await expect(page.getByText(t.acctDeleted)).toBeVisible();
    expect(fake.rows.size).toBe(0);
    await expect(page.getByText(t.acctSync)).toBeVisible();
    const db = await readDB(page);
    expect(db.reviews.length).toBeGreaterThan(0);
  });
});

test.describe("e2e-sync · after the first sign-in (no reload)", () => {
  test.use({ baseURL: SYNC, locale: "es-ES" });

  test("background sync starts right after signing in, without restarting the app (P1-1)", async ({ page, context }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    await fake.attach(context);
    await learnABit(page);
    await signIn(page, "ana@example.com", "settings");
    await page.getByRole("button", { name: t.continue }).click(); // client-side navigation, same JS session
    await page.waitForURL((u) => u.pathname === "/");
    const before = fake.reads.length;
    // Leaving the app (switching away) must trigger an upload attempt.
    await page.evaluate(() => document.dispatchEvent(new Event("visibilitychange")));
    await expect.poll(() => fake.reads.length).toBeGreaterThan(before);
  });

  test("Reset everything on one device empties the account on the other device too", async ({ page, context, browser }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    await fake.attach(context);
    await learnABit(page);
    await signIn(page, "ana@example.com", "settings");
    await page.getByRole("button", { name: t.continue }).click();
    const revBefore = [...fake.rows.values()][0].rev;

    const ctx2 = await browser.newContext({ locale: "es-ES", baseURL: SYNC });
    await fake.attach(ctx2);
    const p2 = await ctx2.newPage();
    await signIn(p2, "ana@example.com", "welcome");
    await p2.getByRole("button", { name: t.continue }).click();
    await expect.poll(async () => (await readDB(p2)).reviews.length).toBeGreaterThan(0);

    await page.goto("/me/settings");
    await page.getByRole("button", { name: t.sReset }).first().click();
    await page.getByRole("textbox", { name: t.resetWord }).fill(t.resetWord);
    await page.locator(".sheet").getByRole("button", { name: t.sReset }).click();
    await page.waitForURL(/\/onboarding/);
    await expect.poll(() => ([...fake.rows.values()][0].db as { reviews: unknown[] }).reviews.length).toBe(0);
    expect([...fake.rows.values()][0].rev).toBeGreaterThan(revBefore);

    await p2.goto("/me/settings");
    await p2.getByRole("button", { name: t.acctSyncNow }).click();
    await expect.poll(async () => (await readDB(p2)).reviews.length).toBe(0);
    await ctx2.close();
  });
});

test.describe("e2e-sync · sign in with Google", () => {
  test.use({ baseURL: SYNC, locale: "es-ES" });

  test("CUJ-17 invited Google account: progress uploads, the code never stays in the URL", async ({ page, context }) => {
    const errs = watchErrors(page);
    const fake = fakeSupabase(["ana@gmail.com"], { as: "ana@gmail.com" });
    await fake.attach(context);
    await learnABit(page);
    await page.goto("/me/settings");
    await page.getByRole("link", { name: new RegExp(t.acctSync) }).click();
    await page.getByRole("button", { name: t.acctGoogle }).click();
    await expect(page.getByRole("status").filter({ hasText: t.acctDone })).toBeVisible();
    expect(page.url()).not.toContain("code=");
    expect(page.url()).toContain("/account?from=settings");
    // The app asked for PKCE and to come back to its own origin.
    const a = fake.authorize[0];
    expect(a.searchParams.get("provider")).toBe("google");
    expect(a.searchParams.get("code_challenge")).toBeTruthy();
    expect(new URL(a.searchParams.get("redirect_to")!).origin).toBe(SYNC);
    await expect.poll(() => fake.rows.size).toBe(1);
    const row = [...fake.rows.values()][0].db as { reviews: unknown[] };
    expect(row.reviews.length).toBeGreaterThan(0);
    await page.goto("/me/settings");
    await expect(page.getByText(t.acctSignedInAs("ana@gmail.com"))).toBeVisible();
    expect(errs).toEqual([]);
  });

  test("Google account that isn't invited gets the invite message; cancelling shows a soft retry", async ({ page, context }) => {
    const fake = fakeSupabase(["ana@gmail.com"], { as: "stranger@gmail.com" });
    await fake.attach(context);
    await page.goto("/");
    await page.getByRole("button", { name: t.haveAccount }).click();
    await page.getByRole("button", { name: t.acctGoogle }).click();
    await expect(page.locator("main").getByRole("alert")).toHaveText(t.acctErr.notInvited);
    expect(page.url()).not.toContain("error=");
    expect(fake.rows.size).toBe(0);

    const ctx2 = await context.browser()!.newContext({ locale: "es-ES", baseURL: SYNC });
    const cancel = fakeSupabase(["ana@gmail.com"], { cancel: true });
    await cancel.attach(ctx2);
    const p2 = await ctx2.newPage();
    await p2.goto("/");
    await p2.getByRole("button", { name: t.haveAccount }).click();
    await p2.getByRole("button", { name: t.acctGoogle }).click();
    await expect(p2.locator("main").getByRole("alert")).toHaveText(t.acctErr.google);
    // The email path is still right there.
    await expect(p2.getByLabel(t.acctEmail)).toBeVisible();
    await ctx2.close();
  });
});
