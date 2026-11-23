// Category: e2e-sync — accounts & cross-device sync in the real production build.
// The "sync" build (port 3510) is compiled with a fake Supabase URL; every request to it is
// answered here by an in-test fake (auth: email code; REST: user_state + push_state RPC),
// shared by all browser contexts in a test, so two contexts act like two phones.
// CUJ-14 runs on the normal build (no Supabase configured): accounts must be invisible.
import { expect, test, type BrowserContext, type Page, type Route } from "@playwright/test";
import { onboard, playLesson, readDB, T, watchErrors, pickGoal } from "./helpers";

const SYNC = `http://localhost:${process.env.EVAL_SYNC_PORT ?? 3510}`;
const FAKE = "https://lingua-test.supabase.co";
const CODE = "123456";
const KEY = "sk-ant-api03-e2e-should-never-leave-000000";
const t = T.es;

type Row = { db: unknown; rev: number };
/** invited = existing accounts. signupsOff mimics Supabase with "Allow new users to sign up" turned off. */
function fakeSupabase(invited: string[], google: { as?: string; cancel?: boolean } = {}, signupsOff = false) {
  const rows = new Map<string, Row>();
  // user_reviews: one row per answer, keyed like the real primary key.
  const answers = new Map<string, { uid: string; epoch: string; t: number; r: unknown }>();
  const mineOf = (uid: string) => [...answers.values()].filter((a) => a.uid === uid);
  // essays + the grade-essay Edge Function (the real one calls Claude; this one answers a fixed grade)
  // storage: avatars bucket (private; path must start with the caller's id)
  const files = new Map<string, Buffer>();
  const essays: { id: string; uid: string; task_id: string; lang: string; text: string; result: unknown; created_at: string }[] = [];
  const authorize: URL[] = [];
  const idTokens: { provider: string; nonce: string }[] = [];
  const events: { uid: string; name: string; props: Record<string, unknown> }[] = [];
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
      else if (!users.has(google.as ?? "") && !signupsOff && google.as) users.set(google.as, `00000000-0000-4000-8000-0000000000${String(users.size + 10).padStart(2, "0")}`);
      if (google.cancel) {
        /* error set above */
      } else if (!users.has(google.as ?? "")) {
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
    if (p === "/auth/v1/token" && url.searchParams.get("grant_type") === "id_token") {
      // Google's own button: the ID token stands for the Google account ("gis-<email>").
      const { id_token, nonce, provider } = JSON.parse(body);
      idTokens.push({ provider, nonce });
      const email = String(id_token).replace(/^gis-/, "");
      if (!users.has(email) && !signupsOff) users.set(email, `00000000-0000-4000-8000-0000000000${String(users.size + 10).padStart(2, "0")}`);
      const id = users.get(email);
      if (!id) return json(route, 422, { code: 422, error_code: "signup_disabled", msg: "Signups not allowed for this instance" });
      return json(route, 200, session(id, email, "google"));
    }
    if (p === "/auth/v1/otp") {
      const { email, create_user } = JSON.parse(body);
      if (!users.has(email) && (signupsOff || !create_user)) return json(route, 422, { code: 422, error_code: "otp_disabled", msg: "Signups not allowed for otp" });
      if (!users.has(email)) users.set(email, `00000000-0000-4000-8000-0000000000${String(users.size + 10).padStart(2, "0")}`);
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
    if (p === "/rest/v1/app_events") {
      // Usage statistics: insert-only, each row must be the caller's (like the real RLS).
      if (req.method() !== "POST") return json(route, 403, { message: "rls" });
      for (const e of JSON.parse(body) as { user_id?: string; name: string; props: Record<string, unknown> }[]) {
        if (e.user_id && e.user_id !== uid) return json(route, 403, { message: "rls" });
        events.push({ uid, name: e.name, props: e.props });
      }
      return route.fulfill({ status: 201, headers: cors });
    }
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
    if (p === "/rest/v1/user_reviews") {
      const eqv = (k: string) => url.searchParams.get(k)?.replace(/^eq\./, "");
      if (eqv("user_id") && eqv("user_id") !== uid) return json(route, 200, []);
      if (req.method() === "POST") {
        for (const a of JSON.parse(body) as { user_id: string; epoch: string; t: number; item: string; mode: string; r: unknown }[]) {
          if (a.user_id !== uid) return json(route, 403, { message: "rls" });
          const k = `${uid}|${a.epoch}|${a.t}|${a.item}|${a.mode}`;
          if (!answers.has(k)) answers.set(k, { uid, epoch: a.epoch, t: a.t, r: a.r });
        }
        return route.fulfill({ status: 201, headers: cors });
      }
      const epoch = eqv("epoch") ?? "";
      const since = Number((url.searchParams.get("t") ?? "gte.0").replace(/^gte\./, ""));
      const list = mineOf(uid).filter((a) => a.epoch === epoch && a.t >= since).sort((x, y) => x.t - y.t);
      if (req.method() === "HEAD") return route.fulfill({ status: 200, headers: { ...cors, "content-range": `*/${list.length}` } });
      const off = Number(url.searchParams.get("offset") ?? 0);
      const lim = Number(url.searchParams.get("limit") ?? 1000);
      return json(route, 200, list.slice(off, off + lim).map((a) => ({ r: a.r })));
    }
    if (p.startsWith("/storage/v1/object/")) {
      const path = decodeURIComponent(p.replace(/^\/storage\/v1\/object\/(authenticated\/)?/, ""));
      if (!path.startsWith(`avatars/${uid}/`)) return json(route, 403, { message: "rls" });
      if (req.method() === "POST" || req.method() === "PUT") {
        files.set(path, req.postDataBuffer() ?? Buffer.alloc(0));
        return json(route, 200, { Key: path });
      }
      if (req.method() === "DELETE") return files.delete(path), json(route, 200, []);
      const f = files.get(path);
      return f ? route.fulfill({ status: 200, headers: { ...cors, "content-type": "image/jpeg" }, body: f }) : json(route, 404, { message: "not found" });
    }
    if (p === "/storage/v1/object/avatars" && req.method() === "DELETE") return json(route, 200, []);
    if (p === "/functions/v1/grade-essay") {
      const { taskId, text } = JSON.parse(body);
      const quote = String(text).split(/\s+/).slice(0, 2).join(" ");
      const result = {
        overall: 4,
        scores: { task: 4, grammar: 3, vocabulary: 4, coherence: 4 },
        corrections: [{ quote, fix: `${quote}!`, why: "Fake grader: a punctuation note." }],
        wellDone: "Fake grader: a clear invitation.",
        summary: "Fake grader: good work.",
        checks: [],
        model: "fake",
      };
      const row = { id: `e${essays.length + 1}`, uid, task_id: taskId, lang: "de", text, result, created_at: new Date().toISOString() };
      essays.push(row);
      return json(route, 200, { id: row.id, result });
    }
    if (p === "/rest/v1/essays") {
      if (req.method() === "DELETE") {
        const id = (url.searchParams.get("id") ?? "").replace(/^eq\./, "");
        const k = essays.findIndex((e) => e.id === id && e.uid === uid);
        if (k >= 0) essays.splice(k, 1);
        return route.fulfill({ status: 204, headers: cors });
      }
      return json(route, 200, essays.filter((e) => e.uid === uid).map(({ uid: _u, ...e }) => (void _u, e)).reverse());
    }
    if (p === "/rest/v1/rpc/forget_other_answers") {
      const { keep_epoch } = JSON.parse(body);
      for (const [k, a] of answers) if (a.uid === uid && a.epoch !== keep_epoch) answers.delete(k);
      return json(route, 200, null);
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
      for (const [k, a] of answers) if (a.uid === uid) answers.delete(k);
      for (const [e, id] of users) if (id === uid) users.delete(e);
      return json(route, 200, null);
    }
    return json(route, 404, { message: `fake: ${p}` });
  }
  return {
    rows,
    answers,
    essays,
    files,
    bodies,
    authorize,
    idTokens,
    events,
    reads,
    setDown: (v: boolean) => void (down = v),
    /** `gsi: false`: Google's script can't load, so the app falls back to the redirect. */
    attach: async (ctx: BrowserContext, o: { gsi?: boolean } = {}) => {
      await ctx.route(/^https:\/\/accounts\.google\.com\/gsi\/client/, (route) =>
        o.gsi === false
          ? route.abort("blockedbyclient")
          : route.fulfill({ status: 200, contentType: "text/javascript", body: gsiStub(google.as ?? "") }),
      );
      await ctx.route(`${FAKE}/**`, handle);
    },
  };
}

/** Stands in for Google's script: a "Continue with Google" button that picks `as` at once. */
function gsiStub(as: string) {
  return `window.google = { accounts: { id: {
    initialize(o) { window.__gsi = o; },
    renderButton(el) {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = ${JSON.stringify(t.acctGoogle)};
      b.onclick = () => window.__gsi.callback({ credential: ${JSON.stringify("gis-" + as)} });
      el.appendChild(b);
    },
  } } };`;
}

async function learnABit(page: Page, email = "ana@example.com") {
  // Lessons end at their time limit; jump the clock past it after a few steps (as the CUJ journeys do).
  // With accounts on, the account is created right before the first lesson (as every learner does).
  await page.clock.install();
  await onboard(page, { appLang: "es", langs: [{ lang: "it", explainIn: "es", exp: "never" }] }, { signUp: { email, code: CODE } });
  await playLesson(page, { lang: "it", base: "es", appLang: "es", accuracy: 0.9, maxSteps: 16 });
  await page.clock.fastForward("11:00");
  const st = await playLesson(page, { lang: "it", base: "es", appLang: "es", accuracy: 0.9 });
  expect(st.sawResults).toBe(true);
  await page.goto("/");
}

/**
 * A returning learner on a new device: "I already have an account" on the welcome screen.
 * One screen signs in or signs up: an email without an account gets one (`_o` kept for callers).
 */
async function signIn(page: Page, email: string, _o: { create?: boolean } = {}) {
  await page.goto("/");
  await page.getByRole("button", { name: t.haveAccountYes }).click();
  await enterCode(page, email);
}

async function enterCode(page: Page, email: string) {
  await page.getByLabel(t.acctEmail).fill(email);
  await page.getByRole("button", { name: t.acctContinueEmail }).click();
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
    await expect(page.getByRole("button", { name: T.es.haveAccountYes }).or(page.getByRole("button", { name: T.en.haveAccountYes }))).toHaveCount(0);
    await learnABit(page);
    await page.goto("/me/settings");
    await expect(page.getByText(t.acctSync)).toHaveCount(0);
    await page.goto("/account");
    await page.waitForURL(/\/me\/settings/);
    expect(ext.filter((u) => /supabase|\/auth\/v1/.test(u))).toEqual([]);
    expect(errs).toEqual([]);
  });
});

test.describe("e2e-sync · an account before the first lesson", () => {
  test.use({ baseURL: SYNC, locale: "es-ES" });

  test("Welcome leads with Start; returning learners have 'I already have an account'", async ({ page, context }) => {
    const fake = fakeSupabase([]);
    await fake.attach(context);
    await page.goto("/");
    await expect(page.getByRole("button", { name: t.getStarted })).toHaveClass(/btn-primary/);
    await expect(page.getByRole("button", { name: t.haveAccountYes })).toBeVisible();
  });

  test("the level test needs no account; the account comes right after it, then goals and the first lesson", async ({ page, context }) => {
    const errs = watchErrors(page);
    const fake = fakeSupabase([]);
    await fake.attach(context);
    const r = await onboard(page, { appLang: "es", langs: [{ lang: "de", explainIn: "es", exp: "bit", placementAccuracy: 0.5 }] });
    expect(r.gated).toBe(true);
    expect(r.placementItems.de).toBeGreaterThan(0);
    await page.waitForURL(/\/account\?from=setup/);
    await expect(page.getByRole("heading", { name: t.acctRequiredTitle })).toBeVisible();
    await expect(page.getByText(t.acctSetupSub)).toBeVisible();
    // Leaving and coming back lands on this same step, with the test result kept.
    await page.goto("/");
    await page.waitForURL(/\/account\?from=setup/);
    // Back goes to the result, which is still there.
    await page.getByRole("link", { name: t.back }).click();
    await expect(page.getByText(t.startLower)).toBeVisible();
    await page.getByRole("button", { name: t.continue, exact: true }).click();
    await page.waitForURL(/\/account\?from=setup/);
    // Sign up → setup goes on at the goal (no welcome, no test again) → the first lesson.
    await enterCode(page, "nuevo@example.com");
    await expect(page.getByRole("status").filter({ hasText: t.acctDone })).toBeVisible();
    await page.getByRole("button", { name: t.continue }).click();
    await pickGoal(page, t);
    await page.waitForURL(/\/lesson/);
    // The finished setup is in the account right away.
    await expect.poll(() => fake.rows.size).toBe(1);
    const db = await readDB(page);
    expect(db.profile.courses.de?.placement).toBeTruthy();
    expect(db.profile.courses.de?.goal).toBeTruthy();
    expect(errs).toEqual([]);
  });

  test("never studied it: the account comes right after that answer, before any planning", async ({ page, context }) => {
    const fake = fakeSupabase([]);
    await fake.attach(context);
    const r = await onboard(page, { appLang: "es", langs: [{ lang: "it", explainIn: "es", exp: "never" }] });
    expect(r.gated).toBe(true);
    await expect(page.getByRole("heading", { name: t.acctRequiredTitle })).toBeVisible();
    await expect(page.getByRole("button", { name: t.setGoal })).toHaveCount(0);
  });

  test("phone → computer: the test on the phone, sign-up before the first lesson, and the computer has it all (field report 2026-11-17)", async ({ browser }) => {
    const fake = fakeSupabase([]);
    const opts = { baseURL: SYNC, locale: "es-ES", viewport: { width: 390, height: 844 } };
    // 1. Computer first (as the friend did): a new, empty account; it says why and waits.
    const laptopCtx = await browser.newContext({ ...opts, viewport: { width: 1280, height: 800 } });
    await fake.attach(laptopCtx);
    const laptop = await laptopCtx.newPage();
    const laptopErrs = watchErrors(laptop);
    await signIn(laptop, "amigo@example.com", { create: true });
    await expect(laptop.getByRole("status").filter({ hasText: t.acctEmptyTitle })).toBeVisible();
    await laptop.getByRole("button", { name: t.acctFetch }).click();
    await expect(laptop.locator("main").getByRole("alert")).toHaveText(t.acctStillEmpty);

    // 2. Phone: the German test, then the same email before the first lesson.
    const phoneCtx = await browser.newContext(opts);
    await fake.attach(phoneCtx);
    const phone = await phoneCtx.newPage();
    const phoneErrs = watchErrors(phone);
    await onboard(phone, { appLang: "es", langs: [{ lang: "de", explainIn: "es", exp: "bit", placementAccuracy: 0.5 }] }, { signUp: { email: "amigo@example.com", code: CODE } });
    const mine = await readDB(phone);

    // 3. Computer: comes in by itself, with the German test result and starting unit.
    await expect(laptop.getByRole("status").filter({ hasText: t.acctDone })).toBeVisible({ timeout: 15_000 });
    await laptop.getByRole("button", { name: t.continue }).click();
    await laptop.waitForURL((u) => u.pathname === "/");
    const theirs = await readDB(laptop);
    expect(theirs.profile.onboarded).toBe(true);
    expect(theirs.profile.courses.de?.placement).toEqual(mine.profile.courses.de?.placement);
    expect(theirs.profile.courses.de?.unit).toBe(mine.profile.courses.de?.unit);
    expect(phoneErrs).toEqual([]);
    // 422 = the expected "no account with this email" answer before "Create an account with this email".
    expect(laptopErrs.filter((e) => !/status of 422/.test(e))).toEqual([]);
    await phoneCtx.close();
    await laptopCtx.close();
  });
});

test.describe("e2e-sync · with an account", () => {
  test.use({ baseURL: SYNC, locale: "es-ES" });

  test("CUJ-15 progress follows you: phone signs up and uploads, a second device downloads the same progress", async ({ browser }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    const phoneCtx = await browser.newContext({ baseURL: SYNC, locale: "es-ES", viewport: { width: 390, height: 844 } });
    await fake.attach(phoneCtx);
    const phone = await phoneCtx.newPage();
    const errs = watchErrors(phone);
    await learnABit(phone);
    await phone.evaluate((k) => localStorage.setItem("lingua:llm", JSON.stringify({ provider: "anthropic", apiKey: k })), KEY);
    const mine = await readDB(phone);
    expect(mine.reviews.length).toBeGreaterThan(0);
    await expect.poll(() => fake.answers.size).toBe(mine.reviews.length);
    expect(fake.rows.size).toBe(1);
    const stored = [...fake.rows.values()][0].db as { reviews: unknown[]; events: unknown[] };
    expect(stored.reviews).toEqual([]); // answers travel in their own table, each once
    expect(stored.events).toEqual([]);
    await phone.goto("/me/settings");
    await expect(phone.getByText(t.acctSignedInAs("ana@example.com"))).toBeVisible();

    const laptopCtx = await browser.newContext({ baseURL: SYNC, locale: "es-ES", viewport: { width: 390, height: 844 } });
    await fake.attach(laptopCtx);
    const laptop = await laptopCtx.newPage();
    await signIn(laptop, "ana@example.com");
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

  for (const via of ["email", "google"] as const)
    test(`an existing account that signs up again (${via}) is signed in: its progress, home, no goal setup`, async ({ browser }) => {
      const fake = fakeSupabase(["ana@gmail.com"], { as: "ana@gmail.com" });
      const opts = { baseURL: SYNC, locale: "es-ES", viewport: { width: 390, height: 844 } };
      // Ana already learns Italian on her phone.
      const phoneCtx = await browser.newContext(opts);
      await fake.attach(phoneCtx);
      const phone = await phoneCtx.newPage();
      await onboard(phone, { appLang: "es", langs: [{ lang: "it", explainIn: "es", exp: "never" }] }, { signUp: { email: "ana@gmail.com", code: CODE } });
      await expect.poll(() => fake.rows.size).toBe(1);
      const mine = await readDB(phone);

      // New laptop: she doesn't say she has an account, takes the setup again and "creates" one.
      const laptopCtx = await browser.newContext(opts);
      await fake.attach(laptopCtx);
      const laptop = await laptopCtx.newPage();
      const errs = watchErrors(laptop);
      const r = await onboard(laptop, { appLang: "es", langs: [{ lang: "de", explainIn: "en", exp: "never" }] });
      expect(r.gated).toBe(true);
      if (via === "google") await laptop.getByRole("button", { name: t.acctGoogle }).click();
      else {
        await laptop.getByLabel(t.acctEmail).fill("ana@gmail.com");
        await laptop.getByRole("button", { name: t.acctContinueEmail }).click();
        await laptop.getByLabel(t.acctCode).fill(CODE);
        await laptop.getByRole("button", { name: t.acctVerify, exact: true }).click();
      }
      await expect(laptop.getByRole("status").filter({ hasText: t.acctWelcomeBack })).toBeVisible();
      await laptop.getByRole("button", { name: t.continue }).click();
      await laptop.waitForURL((u) => u.pathname === "/");
      await expect(laptop.getByRole("button", { name: t.setGoal })).toHaveCount(0);
      const theirs = await readDB(laptop);
      expect(Object.keys(theirs.profile.courses)).toEqual(Object.keys(mine.profile.courses));
      expect(theirs.profile.courses.it?.unit).toBe(mine.profile.courses.it?.unit);
      // The German setup on the laptop was dropped for the account's own progress.
      expect(theirs.profile.courses.de).toBeUndefined();
      // Still one account, and the setup draft is gone (no resuming setup later).
      expect(fake.rows.size).toBe(1);
      expect(await laptop.evaluate(() => localStorage.getItem("lingua:setup"))).toBeNull();
      expect(errs).toEqual([]);
      await phoneCtx.close();
      await laptopCtx.close();
    });

  test("usage statistics: asked once after the first lesson; nothing is sent before yes, then screens and lessons are", async ({ page, context }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    await fake.attach(context);
    await learnABit(page);
    await expect(page.getByText(t.statsAskTitle)).toBeVisible();
    expect(fake.events).toEqual([]); // not asked yet = off
    await page.getByRole("button", { name: t.statsYes }).click();
    await expect(page.getByText(t.statsAskTitle)).toHaveCount(0);
    // Move around the app like a learner (tabs), a few seconds on each screen (the lesson
    // helpers froze the clock, so time is moved on by hand).
    await page.clock.fastForward(5000);
    await page.getByRole("link", { name: t.tabPath }).click();
    await page.waitForURL(/\/path/);
    await page.clock.fastForward(5000);
    await page.getByRole("link", { name: t.tabToday }).click();
    await page.waitForURL((u) => u.pathname === "/");
    await expect.poll(() => fake.events.filter((e) => e.name === "screen_time").length, { timeout: 15_000 }).toBeGreaterThan(0);
    // Never the email or typed text in an event.
    expect(JSON.stringify(fake.events)).not.toContain("ana@example.com");
    // Turned off in Settings: nothing more is sent.
    await page.goto("/me/settings");
    await page.getByText(t.sShareStats).click();
    const n = fake.events.length;
    await page.clock.fastForward(5000);
    await page.getByRole("link", { name: t.tabPath }).click();
    await page.clock.fastForward(5000);
    await page.getByRole("link", { name: t.tabToday }).click();
    await page.waitForTimeout(1500);
    expect(fake.events.length).toBe(n);
  });

  test("CUJ-18 open sign-up: a new email gets a code and its account is created", async ({ page, context }) => {
    const fake = fakeSupabase([]);
    await fake.attach(context);
    await page.goto("/");
    await page.getByRole("button", { name: t.haveAccountYes }).click();
    await page.getByLabel(t.acctEmail).fill("new@example.com");
    await page.getByRole("button", { name: t.acctContinueEmail }).click();
    await expect(page.getByText(t.acctCodeTitle)).toBeVisible();
    await expect(page.locator("main").getByRole("alert")).toHaveCount(0);
  });

  test("CUJ-18 if sign-ups are closed on the server, a new email gets a clear message and no account", async ({ page, context }) => {
    const fake = fakeSupabase(["ana@example.com"], {}, true);
    await fake.attach(context);
    await page.goto("/");
    await page.getByRole("button", { name: t.haveAccountYes }).click();
    await page.getByLabel(t.acctEmail).fill("stranger@example.com");
    await page.getByRole("button", { name: t.acctContinueEmail }).click();
    await expect(page.locator("main").getByRole("alert")).toHaveText(t.acctErr.notInvited);
    expect(fake.rows.size).toBe(0);
  });

  test("one screen signs in or signs up: Google first, then the email, and the privacy policy", async ({ page, context }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    await fake.attach(context);
    await page.goto("/");
    await page.getByRole("button", { name: t.haveAccountYes }).click();
    await expect(page.getByRole("heading", { name: t.acctWelcomeTitle })).toBeVisible();
    await expect(page.getByText(t.acctWelcomeSub)).toBeVisible();
    // Google above the email, both on screen at once (no extra step)
    const g = await page.getByRole("button", { name: t.acctGoogle }).boundingBox();
    const e = await page.getByLabel(t.acctEmail).boundingBox();
    expect(g!.y).toBeLessThan(e!.y);
    // "Continue with email" waits for a real address
    await expect(page.getByRole("button", { name: t.acctContinueEmail })).toBeDisabled();
    await page.getByLabel(t.acctEmail).fill("nueva@");
    await expect(page.getByRole("button", { name: t.acctContinueEmail })).toBeDisabled();
    await page.getByLabel(t.acctEmail).fill("nueva@example.com");
    await page.getByRole("button", { name: t.acctContinueEmail }).click();
    await expect(page.getByRole("heading", { name: t.acctCodeTitle })).toBeVisible();
    await page.getByRole("button", { name: t.acctOtherEmail }).click();
    await page.getByRole("link", { name: t.privacyPolicy }).click();
    await page.waitForURL(/\/privacy/);
  });

  test("CUJ-18 wrong code is rejected, the right one works", async ({ page, context }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    await fake.attach(context);
    await page.goto("/");
    await page.getByRole("button", { name: t.haveAccountYes }).click();
    await page.getByLabel(t.acctEmail).fill("ana@example.com");
    await page.getByRole("button", { name: t.acctContinueEmail }).click();
    await page.getByLabel(t.acctCode).fill("000000");
    await page.getByRole("button", { name: t.acctVerify, exact: true }).click();
    await expect(page.locator("main").getByRole("alert")).toHaveText(t.acctErr.badCode);
    await page.getByLabel(t.acctCode).fill(CODE);
    await page.getByRole("button", { name: t.acctVerify, exact: true }).click();
    await expect(page.getByRole("status").filter({ hasText: t.acctEmptyTitle })).toBeVisible();
  });

  test("a new account on a fresh computer gets into the app, not back to the welcome (field report 2026-11-17)", async ({ page, context }) => {
    // The code worked but "Continue" led back to the welcome screen, whose main button was "Sign in".
    const errs = watchErrors(page);
    const fake = fakeSupabase([]);
    await fake.attach(context);
    await signIn(page, "amigo@example.com", { create: true });
    // Says the account is empty and where other progress would come from.
    await expect(page.getByRole("status").filter({ hasText: t.acctEmptyTitle })).toBeVisible();
    await expect(page.getByText(t.acctEmptySub)).toBeVisible();
    await page.getByRole("button", { name: t.acctStartHere }).click();
    await page.waitForURL((u) => u.pathname === "/onboarding");
    // Straight into setup: no welcome, no second "Sign in".
    await expect(page.getByRole("button", { name: t.haveAccountYes })).toHaveCount(0);
    await expect(page.getByText(t.appLangTitle)).toBeVisible();
    expect(errs.filter((e) => !/status of 422/.test(e))).toEqual([]);
  });

  test("CUJ-16 offline: changes made while the server is unreachable upload on reconnect", async ({ page, context }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    await fake.attach(context);
    await learnABit(page);
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
    await expect.poll(() => fake.answers.size).toBeGreaterThan(0);
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
    expect(fake.answers.size).toBeGreaterThan(0);
  });

  test("CUJ-20 delete account removes the server copy; the device keeps its progress and asks for an account to go on", async ({ page, context }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    await fake.attach(context);
    await learnABit(page);
    await expect.poll(() => fake.rows.size).toBe(1);
    await page.goto("/me/settings");
    await page.getByRole("button", { name: t.acctDelete }).click();
    // Typed letter by letter, like a person: the field must keep focus (it used to lose it per letter).
    const word = page.getByRole("textbox", { name: t.acctDeleteWord });
    await word.click();
    await page.keyboard.type(t.acctDeleteWord, { delay: 30 });
    await expect(word).toBeFocused();
    await expect(word).toHaveValue(t.acctDeleteWord);
    await page.locator(".sheet").getByRole("button", { name: t.acctDelete }).click();
    await expect.poll(() => fake.rows.size).toBe(0);
    await page.waitForURL(/\/account\?from=required/);
    const db = await readDB(page);
    expect(db.reviews.length).toBeGreaterThan(0);
  });
});

test.describe("e2e-sync · after the first sign-in (no reload)", () => {
  test.use({ baseURL: SYNC, locale: "es-ES" });

  test("background sync starts right after signing up, without restarting the app (P1-1)", async ({ page, context }) => {
    const fake = fakeSupabase([]);
    await fake.attach(context);
    // Sign-up happens inside onboarding; the lesson opens by client-side navigation (same JS session).
    await onboard(page, { appLang: "es", langs: [{ lang: "it", explainIn: "es", exp: "never" }] }, { signUp: { email: "ana@example.com", code: CODE } });
    const before = fake.reads.length;
    // Leaving the app (switching away) must trigger an upload attempt.
    await page.evaluate(() => document.dispatchEvent(new Event("visibilitychange")));
    await expect.poll(() => fake.reads.length).toBeGreaterThan(before);
  });

  test("Reset everything on one device empties the account on the other device too", async ({ page, context, browser }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    await fake.attach(context);
    await learnABit(page);
    await expect.poll(() => fake.answers.size).toBeGreaterThan(0);
    const revBefore = [...fake.rows.values()][0].rev;

    const ctx2 = await browser.newContext({ locale: "es-ES", baseURL: SYNC });
    await fake.attach(ctx2);
    const p2 = await ctx2.newPage();
    await signIn(p2, "ana@example.com");
    await p2.getByRole("button", { name: t.continue }).click();
    await expect.poll(async () => (await readDB(p2)).reviews.length).toBeGreaterThan(0);

    await page.goto("/me/settings");
    await page.getByRole("button", { name: t.sReset }).first().click();
    await page.getByRole("textbox", { name: t.resetWord }).fill(t.resetWord);
    await page.locator(".sheet").getByRole("button", { name: t.sReset }).click();
    await page.waitForURL(/\/onboarding/);
    await expect.poll(() => fake.answers.size).toBe(0); // old answers removed from the account
    expect([...fake.rows.values()][0].rev).toBeGreaterThan(revBefore);

    await p2.goto("/me/settings");
    await p2.getByRole("button", { name: t.acctSyncNow }).click();
    await expect.poll(async () => (await readDB(p2)).reviews.length).toBe(0);
    await ctx2.close();
  });
});

test.describe("e2e-sync · sign in with Google", () => {
  test.use({ baseURL: SYNC, locale: "es-ES" });

  for (const gsi of [true, false])
    test(`CUJ-17 Google before the first lesson (${gsi ? "Google's own button" : "fallback redirect"}): the account is created, no code in the URL`, async ({ page, context }) => {
      const errs = watchErrors(page);
      const fake = fakeSupabase(["ana@gmail.com"], { as: "ana@gmail.com" });
      await fake.attach(context, { gsi });
      const r = await onboard(page, { appLang: "es", langs: [{ lang: "it", explainIn: "es", exp: "never" }] });
      expect(r.gated).toBe(true);
      await page.getByRole("button", { name: t.acctGoogle }).click();
      await expect(page.getByRole("status").filter({ hasText: t.acctDone })).toBeVisible();
      expect(page.url()).not.toContain("code=");
      expect(page.url()).toContain("/account?from=setup");
      if (gsi) {
        // Google's button on our own page (Google names linguina.app): no trip through Supabase,
        // and the token is bound to a one-time nonce.
        expect(fake.authorize).toHaveLength(0);
        expect(fake.idTokens).toHaveLength(1);
        expect(fake.idTokens[0].provider).toBe("google");
        expect(fake.idTokens[0].nonce).toMatch(/^[0-9a-f]{32}$/);
      } else {
        // The app asked for PKCE and to come back to its own origin.
        const a = fake.authorize[0];
        expect(a.searchParams.get("provider")).toBe("google");
        expect(a.searchParams.get("code_challenge")).toBeTruthy();
        expect(new URL(a.searchParams.get("redirect_to")!).origin).toBe(SYNC);
      }
      await page.getByRole("button", { name: t.continue }).click();
      await pickGoal(page, t);
      await page.waitForURL(/\/lesson/);
      await expect.poll(() => fake.rows.size).toBe(1);
      await page.goto("/me/settings");
      await expect(page.getByText(t.acctSignedInAs("ana@gmail.com"))).toBeVisible();
      // (The fallback run blocks Google's script on purpose.)
      expect(errs.filter((e) => !/ERR_BLOCKED_BY_CLIENT/.test(e))).toEqual([]);
    });

  test("Google account that isn't invited gets the invite message; cancelling shows a soft retry", async ({ page, context }) => {
    const fake = fakeSupabase(["ana@gmail.com"], { as: "stranger@gmail.com" }, true);
    await fake.attach(context);
    await page.goto("/");
    await page.getByRole("button", { name: t.haveAccountYes }).click();
    await page.getByRole("button", { name: t.acctGoogle }).click();
    await expect(page.locator("main").getByRole("alert")).toHaveText(t.acctErr.notInvited);
    expect(page.url()).not.toContain("error=");
    expect(fake.rows.size).toBe(0);

    const ctx2 = await context.browser()!.newContext({ locale: "es-ES", baseURL: SYNC });
    const cancel = fakeSupabase(["ana@gmail.com"], { cancel: true });
    await cancel.attach(ctx2, { gsi: false });
    const p2 = await ctx2.newPage();
    await p2.goto("/");
    await p2.getByRole("button", { name: t.haveAccountYes }).click();
    await p2.getByRole("button", { name: t.acctGoogle }).click();
    await expect(p2.locator("main").getByRole("alert")).toHaveText(t.acctErr.google);
    // The email is right there too.
    await expect(p2.getByLabel(t.acctEmail)).toBeVisible();
    await ctx2.close();
  });
});

test.describe("e2e-sync · writing practice", () => {
  test.use({ baseURL: SYNC, locale: "es-ES" });

  test("CUJ-28 write a short text, get feedback, find it in 'Your texts', delete it", async ({ page, context }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    await fake.attach(context);
    await onboard(page, { appLang: "es", langs: [{ lang: "de", explainIn: "es", exp: "never" }] }, { signUp: { email: "ana@example.com", code: CODE } });
    await page.goto("/path");
    await page.getByRole("link", { name: new RegExp(t.writeOpen) }).click();
    await page.getByRole("link", { name: /cumpleaños/ }).click();
    const text = "Liebe Lena, am Samstag feiere ich meinen Geburtstag bei mir zu Hause. Die Party beginnt um acht Uhr. Wir essen Pizza und tanzen. Ich hoffe, du hast Zeit! Bitte schreib mir bis Donnerstag. Viele Grüße, Anna";
    await page.getByRole("textbox", { name: t.writeYourText }).fill(text);
    await expect(page.getByLabel(t.writeChecks)).toContainText(t.writeCheck.greeting);
    await page.getByRole("button", { name: t.writeSubmit }).click();
    await expect(page.getByRole("status")).toContainText(t.writeOverall);
    await expect(page.getByRole("status")).toContainText("4/5");
    await expect(page.getByRole("status")).toContainText("a punctuation note");
    expect(fake.essays).toHaveLength(1);
    expect(fake.bodies.some((b) => b.includes("sk-ant-"))).toBe(false);
    await page.goto("/write");
    await expect(page.getByText(t.writeHistory)).toBeVisible();
    await page.getByRole("button", { name: t.writeDelete }).click();
    await expect.poll(() => fake.essays.length).toBe(0);
  });
});

test.describe("e2e-sync · profile photo follows you", () => {
  test.use({ baseURL: SYNC, locale: "es-ES" });

  test("a photo set on the phone is private to the account and shows on the laptop", async ({ page, context, browser }) => {
    const fake = fakeSupabase(["ana@example.com"]);
    await fake.attach(context);
    await learnABit(page);
    await page.goto("/me/settings");
    await page.getByRole("textbox", { name: t.yourName }).fill("Ana");
    await page.getByRole("textbox", { name: t.yourName }).press("Enter");
    const png = await page.evaluate(async () => {
      const c = document.createElement("canvas");
      c.width = c.height = 300;
      c.getContext("2d")!.fillRect(0, 0, 300, 300);
      const b: Blob = await new Promise((r) => c.toBlob((x) => r(x!), "image/png"));
      return Array.from(new Uint8Array(await b.arrayBuffer()));
    });
    await page.locator('input[type="file"][accept="image/*"]').setInputFiles({ name: "me.png", mimeType: "image/png", buffer: Buffer.from(png) });
    await expect.poll(() => [...fake.files.keys()]).toEqual([expect.stringMatching(/^avatars\/[0-9a-f-]+\/avatar\.jpg$/)]);
    await page.getByRole("button", { name: t.acctSyncNow }).click();
    await expect(page.getByText(/^Última sincronización/)).toBeVisible();

    const ctx2 = await browser.newContext({ locale: "es-ES", baseURL: SYNC });
    await fake.attach(ctx2);
    const laptop = await ctx2.newPage();
    await signIn(laptop, "ana@example.com");
    await laptop.getByRole("button", { name: t.continue }).click();
    await laptop.goto("/me");
    await expect(laptop.getByRole("heading", { level: 1 })).toHaveText("Ana");
    await expect(laptop.getByRole("img", { name: t.profilePhoto }).first()).toHaveAttribute("src", /^data:image\/jpeg/);
    await ctx2.close();
  });
});
