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
function fakeSupabase(invited: string[]) {
  const rows = new Map<string, Row>();
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
    if (p === "/rest/v1/rpc/delete_my_state") return rows.delete(uid), json(route, 200, null);
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

  test("not-invited email gets a clear message and no account is created", async ({ page, context }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    await fake.attach(context);
    await page.goto("/");
    await page.getByRole("button", { name: t.haveAccount }).click();
    await page.getByLabel(t.acctEmail).fill("stranger@example.com");
    await page.getByRole("button", { name: t.acctSendCode }).click();
    await expect(page.locator("main").getByRole("alert")).toHaveText(t.acctErr.notInvited);
    expect(fake.rows.size).toBe(0);
  });

  test("wrong code is rejected, the right one works", async ({ page, context }) => {
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

  test("sign out clears the device (and the tutor key when ticked); progress stays in the account", async ({ page, context }) => {
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

  test("delete account removes the server copy; the device keeps its progress as a guest", async ({ page, context }) => {
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
