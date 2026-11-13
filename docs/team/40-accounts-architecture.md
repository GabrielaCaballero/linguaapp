# 40 · Accounts and cross-device sync

**Status:** proposal, 2026-11-12 · **Owner of this doc:** SWE/architect · **Code changed:** none yet

**Requirement.** The owner wants to share Lingua with about 5–30 friends. Each person has their own profile, and their progress follows them from one device to another. Hosting is Vercel (`GabrielaCaballero/linguaapp`, `main` = v2). Setup must stay on free tiers and be doable by a PM who is rusty at coding.

**Decision in one line:** **Supabase** (Auth with a 6-digit email code + one Postgres table protected by row-level security), called **only from the browser** with `@supabase/supabase-js`. Sign-up is closed: the owner adds friends by email in the Supabase dashboard. The app stays local-first. localStorage remains the source of truth on each device, and a **single per-user state document** is synced with a deterministic merge. Guests (no account) work exactly as they do today. The LLM key never leaves the device.

---

## 1. Options compared

Constraints from 04-engineering §3–4 that still apply: no server actions, no cookies, no request-reading route handlers in the core (this keeps `output: "export"` and Capacitor possible). `cacheComponents` is on, so any server-side session read must sit behind `<Suspense>` (see `node_modules/next/dist/docs/01-app/02-guides/authentication-with-cache-components.md`). A **client-only** auth SDK avoids that whole problem.

| | **Supabase Auth + Postgres** | Clerk + Neon/Vercel Postgres | Firebase Auth + Firestore | Auth.js + DB | Home-made invite magic link |
|---|---|---|---|---|---|
| Cost at 30 users | Free (50k MAU, 500 MB DB) | Free (Clerk 10k MAU, Neon 0.5 GB) | Free (Spark) | Free, but needs a DB host too | Free + an email provider |
| Vendors / dashboards she must use | **1** | 2 (+ server code to join them) | 1 (Google Cloud console) | 2–3 | 2–3 |
| Works client-only (no Next server, Capacitor-ready) | **Yes**: supabase-js + RLS | No: Clerk's Next SDK expects a proxy/server, and the DB needs a server route | Yes | No: cookie sessions + route handlers | No |
| Plays well with `cacheComponents` | **Nothing on the server** | Session reads need Suspense on every route | Nothing on the server | Same as Clerk | Same as Clerk |
| Invite-only | **Turn sign-ups off + "Add user"** (no code) | Allowlist (free tier) | Needs a blocking function (paid Blaze plan) or custom code | Custom code | All custom |
| Data access control | **Postgres RLS**, 3 lines of SQL | Your own server code | Security rules (a new language to learn) | Your own server code | Your own server code |
| Offline / PWA fit | Good: we sync our own doc. The session lives in localStorage | OK | Best: Firestore has an offline cache, but it fights our localStorage store | Poor | Poor |
| Size limits | jsonb doc, many MB | fine | **1 MiB per document**: a year of reviews (~2 MB) won't fit | fine | fine |
| Privacy / region | EU region (Frankfurt or Zurich) | US by default | Multi-region by default | depends | depends |
| Future Capacitor app | supabase-js runs unchanged. Email codes need no deep links | Capacitor isn't officially supported | Good (plugins) | Poor | Poor |

**Pick Supabase.** It is the only option that is one vendor, client-only, invite-only without writing code, and protected by real database-level access control. Firebase comes second. It loses on the 1 MiB document limit and because closing sign-ups needs a paid plan or custom code.

**Why an email code and not a magic link:** on iOS, a link in an email opens Safari, not the installed PWA. Those two have separate storage, so the user would end up signed in in the wrong place. A Capacitor app would also need deep links. A 6-digit code typed into the app works everywhere. Google sign-in can be added later as an optional extra (it needs a Google Cloud OAuth client, which means more setup).

**Known free-tier caveats** (re-check these during setup):
- Supabase **pauses a free project after about 7 days with no traffic**. Because the app is local-first, nothing breaks: sync just waits. The owner clicks "Restore" in the dashboard.
- **Supabase's built-in email sender is heavily rate-limited and only meant for testing.** It may deliver only to members of the project's team. Use custom SMTP: **Resend** (free tier, needs a domain she owns) or, with no domain, **a Gmail address with an app password** (≈500 emails/day). This is the one fiddly step.

## 2. Data model and sync

### 2.1 One state document per user (not per-card rows)
Supabase table `public.user_state`: `user_id uuid PK → auth.users`, `db jsonb`, `rev bigint`, `updated_at timestamptz`, `device text`.
- The whole `DB` (model.ts) **minus** `events` (on-device metrics only, per spec §4.11), `legacyTies`, and anything under `lingua:llm*`.
- **Why a document:** the app already reads and writes one `DB` object atomically. Backup, migration and `migrateAny` all work on that whole object. 30 users × <3 MB fits easily in 500 MB. Per-card rows would mean a relational rewrite and many tables with RLS, with no real benefit at this scale.
- **Cost control:** checking `rev` is a one-row select. The app pulls the full doc only when the remote `rev` is newer than the last one it saw. Pushes are debounced (at the end of a session, when the tab is hidden, and at most once every 60 s while active). Sending data in (uploads) is free. Bytes sent out (downloads) stay small because a pull happens only after another device has pushed.

### 2.2 Writes: optimistic concurrency
A Postgres function `push_state(expected_rev bigint, doc jsonb) returns bigint` (SECURITY INVOKER, so RLS still applies). If the stored `rev = expected_rev`, it writes the doc and sets `rev = rev + 1`. Otherwise it returns `-1` (conflict). On a conflict the client **pulls, merges, and pushes again** (up to 3 tries). Local state on the device: `lingua:sync` = `{ userId, rev, dirty, lastSyncAt }`.

### 2.3 Conflict resolution: deterministic `mergeDB(local, remote)`
This is a pure function and the most heavily tested code in the feature. It must be **idempotent** (merging A with A gives A) and must **never drop a review**:
- `reviews`: union keyed by `t|id|mode`, sorted by `t`, then capped at `MAX_REVIEWS` (keeping the newest).
- `sessions`: union keyed by `t|lang`. `custom` items: union by `id` (if both have the same id, the local one wins).
- `cards`: for each card id, the copy with the later `last_review` wins (ties go to more `reps`, then to local). Cards that exist on only one side are kept. *Accepted trade-off:* if the same card is reviewed on two offline devices on the same day, it keeps the later schedule. Both review logs survive, so FSRS stability catches up at the next review. (`replay()` from merged logs is the v2.1 upgrade if this turns out to matter.)
- `profile`: last writer wins on a new `profile.updatedAt`, which `store.update()` stamps whenever the profile object changes. `courses` are merged per language, so adding German on the phone and Italian on the laptop keeps both.
- `events`: always kept from local only, never uploaded.

### 2.4 First sign-in on a device: migrating existing localStorage
1. Before anything is overwritten, copy the raw local blob to `lingua:pre-login-backup` (same pattern as `lingua:v1-backup`).
2. Remote is empty and local has been onboarded → **upload local**. This is the owner's case: her v2 progress becomes her account.
3. Remote has data and local is fresh (not onboarded) → **download**. This is a new phone.
4. Both have data → a sheet: **"Combine both"** (default, uses `mergeDB`) · "Use my account's progress" · "Use this device's progress". It shows the same preview as backup import (`parseBackup` preview: languages, cards, reviews).
5. Every remote blob goes through `migrateAny`. A blob that fails changes nothing locally and shows "couldn't sync".

### 2.5 Guest mode, sign-out, offline
- **Guest is the default.** With no account, or when `NEXT_PUBLIC_SUPABASE_URL` is unset (a fork, local dev, a CI build), the app behaves exactly as it does today, and JSON backup still works. The account UI only appears when sync is configured.
- **Sign out:** first try a final push. If that push fails (offline), warn: "N recent answers aren't saved to your account yet." Then wipe `lingua:v2`, `lingua:sync` and the Supabase session, and return to Welcome. This protects shared or borrowed devices. The tutor key is **not** wiped automatically; it gets its own "Forget key" checkbox, ticked by default.
- **Offline:** nothing changes. Sync runs on `online` / `visibilitychange` / app start. `public/sw.js` already skips cross-origin requests, so Supabase responses are never cached.

## 3. Access control

- **Invite-only, with no code:** Supabase → Authentication → Sign In / Providers → turn **"Allow new users to sign up"** off. Turn off all providers except Email. Friends are added with **Users → Add user → email, "Auto Confirm User"**. The client calls `signInWithOtp({ email, options: { shouldCreateUser: false } })`, so an unknown email can never create an account. The dashboard's user list *is* the allowlist. Removing a friend = delete the user (their row is removed through `on delete cascade`).
- **Rejected: invite codes.** They need a custom table, a signup hook and code-redemption UI. The dashboard does the same job for 30 people.
- **Row-level security** (`supabase/schema.sql`):
  `alter table user_state enable row level security;` with select/insert/update policies `using (user_id = auth.uid())` / `with check (user_id = auth.uid())`. There is no delete policy for clients. A "Delete my synced data" button calls a `delete_my_state()` function that is scoped to `auth.uid()`.
- The **anon/publishable key is public by design**; RLS is what protects the data. The **service_role / secret key is never put in the app, in Vercel, or in the repo.**
- **Privacy, in plain words in the UI:** "Your progress is stored in our database (EU) so it can follow you. The app's owner can see it as the administrator. Your AI-tutor key and on-device stats are never uploaded." Supabase region: **Frankfurt (eu-central-1)** or **Zurich (eu-central-2)**.

## 4. The LLM key stays on the device, never synced

`lingua:llm` and `lingua:llm-cache` stay outside `DB` (model.ts header, backup.ts header), and the sync payload is built from `DB` only. Reasons:
1. **It's a spending credential.** Synced, it would sit in a database whose administrator (the owner) can read every row. Friends would be handing her their Anthropic keys. A misconfigured policy or a leaked secret key would expose all of them at once.
2. **It would break a promise the app already makes.** Settings currently says "Stored only on this device. Sent only to Anthropic." (spec §4.10). Breaking that silently is a trust failure.
3. **Little benefit.** Pasting a key once per device is cheap, and the tutor is optional.
Enforcement: an eval asserts that the sync payload never contains a `lingua:llm*` key or an `sk-ant-` value (§5.3).

## 5. Implementation plan

### 5.1 Files (in build order)
| File | Change |
|---|---|
| `package.json` | Add `@supabase/supabase-js` (the only new dependency; no `@supabase/ssr`, because there are no cookies). |
| `supabase/schema.sql` *(new)* | `user_state` table, RLS + 3 policies, `push_state()`, `delete_my_state()`. The owner pastes it into the SQL editor once. |
| `.env.example` *(new)* + `.gitignore` | Add `!.env.example` (currently `.env*` ignores it). List the two public vars. |
| `src/lib/model.ts` | `Profile.updatedAt?: number`. Optional, so no version bump; `normalizeV2` already fills defaults. |
| `src/lib/storage-adapter.ts` | `KEYS.sync = "lingua:sync"`, `KEYS.preLogin = "lingua:pre-login-backup"`. Supabase gets its own `storageKey: "lingua:auth"` routed through this adapter (Capacitor swap point). |
| `src/lib/store.ts` | Stamp `profile.updatedAt` when the profile reference changes. Add `onCommit(listener)` so sync can mark the doc dirty. Add `replaceDB(db, { fromSync: true })` so a pulled doc doesn't trigger a push straight back. |
| `src/lib/sync/merge.ts` *(new)* | `mergeDB(local, remote)` and `toPayload(db)` (strips `events`, `legacyTies`). Pure, no imports from browser APIs. |
| `src/lib/sync/remote.ts` *(new)* | A `RemoteAdapter` interface (`getRev`, `pull`, `push`, `deleteMine`) with a `supabaseRemote()` implementation and a `memoryRemote()` for tests. The client is created lazily, and only if the env vars are set (`isSyncConfigured()`). |
| `src/lib/sync/engine.ts` *(new)* | Sync logic: first-login cases (§2.4), debounce, conflict retry, the online/visibility triggers, `status` (`off/idle/syncing/offline/error`). Depends only on `StorageAdapter` + `RemoteAdapter`, so it can be tested in Node. |
| `src/lib/sync/auth.ts` *(new)* | `sendCode(email)`, `verifyCode(email, code)`, `signOut()`, and a `useAccount()` hook (`useSyncExternalStore` over `onAuthStateChange`). |
| `src/app/account/page.tsx` *(new, client)* | Email → 6-digit code → (only if both sides have data) the combine/choose sheet. A static shell: no `cookies()`, nothing to Suspend. |
| `src/app/(tabs)/layout.tsx` | Mount a client `<SyncRunner/>` that starts the engine when signed in. Show a small sync pill next to the offline pill. |
| `src/app/(tabs)/me/settings/page.tsx` | New "Account" section: signed out → "Sync across devices (invite only)"; signed in → email, last synced, Sync now, Sign out, Delete synced data. |
| `src/app/onboarding/page.tsx` | Welcome: add "I have an account → Sign in" next to "I have a backup". |
| `src/lib/i18n.ts` | es/en strings for everything above, including the privacy copy in §3. |
| `public/sw.js` | Add `/account` to `ROUTES` and bump `VERSION` to `lingua-v2-2`. |
| `next.config.ts` | When the app-wide CSP from 04-eng §3 lands, `connect-src` must include `https://<ref>.supabase.co`. |
| `docs/team/decisions.md`, `04-engineering.md` §4 | Record the decision and replace "localStorage only" with "localStorage + optional sync". |

### 5.2 What the owner sets up (≈30 min, once)
1. **supabase.com** → sign in with GitHub → **New project** `lingua`. Region **Frankfurt** or **Zurich**. Save the DB password in your password manager (the app never uses it).
2. **SQL Editor** → New query → paste `supabase/schema.sql` → **Run**. You should see "Success. No rows returned".
3. **Authentication → Sign In / Providers:** turn **Allow new users to sign up** OFF. Keep **Email** ON. Leave **Confirm email** ON.
4. **Authentication → Emails → Templates → Magic Link:** replace the link with `Your Lingua code: {{ .Token }}`. Do the same in the "Invite" template.
5. **Authentication → Emails → SMTP Settings:** enable custom SMTP. *Option A, Gmail:* host `smtp.gmail.com`, port 465, user = your Gmail, password = a Google **App password** (Google Account → Security → 2-Step Verification → App passwords). *Option B, Resend:* verify your domain in Resend, then copy its SMTP host, user and API key.
6. **Authentication → URL Configuration:** Site URL = your Vercel URL (e.g. `https://linguaapp.vercel.app`).
7. **Project Settings → API:** copy the **Project URL** and the **anon / publishable** key. **Do not copy the service_role / secret key anywhere.**
8. **vercel.com** → project `linguaapp` → Settings → **Environment Variables** → add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` for Production *and* Preview → **Redeploy**. `NEXT_PUBLIC_` values are baked in at build time, so they only take effect after a redeploy.
9. Locally: copy `.env.example` to `.env.local` and paste the same two values.
10. **Inviting a friend:** Supabase → Authentication → **Users → Add user → Create new user** → their email, tick **Auto Confirm User**, leave the password empty → send them the app link. They tap *Sign in*, type their email, and enter the code.

### 5.3 Eval suite extensions (`tests/evals`, `npm run eval`)
- `scoreboard.mjs` `cat()`: map `/sync/` → **`sync`**, `account.spec` → **`e2e-sync`**. The existing bar (≥99 % overall, every category ≥95 %, 0 open P0/P1) then covers them automatically.
- `tests/evals/sync/merge.eval.ts` (~60 cases, generated from `lib/fixtures.ts`): merging A with A gives A; merge(A, B) and merge(B, A) have the same reviews, cards and sessions; no review is lost; reviews have no duplicates; caps still hold; card last-writer-wins plus the tie rules; per-language course merge; profile last-writer-wins on `updatedAt`; `events` and `legacyTies` are never in `toPayload`.
- `tests/evals/sync/engine.eval.ts` (on `memoryAdapter` + `memoryRemote`): all four first-login cases; `pre-login-backup` is written before any overwrite; two devices go offline → both review → reconnect → nothing is lost; a `rev` conflict retries and settles; a garbage or v1 remote blob goes through `migrateAny` or is rejected without touching local data; sign-out wipes data but warns when the doc is dirty; guest mode (`isSyncConfigured() === false`) makes zero remote calls.
- `tests/evals/sync/privacy.eval.ts` (static + runtime): payloads built from a DB whose storage also holds `lingua:llm` never contain `lingua:llm`, `sk-ant-`, or `apiKey`. `src/` never mentions `service_role`, `SUPABASE_SERVICE`, or `sb_secret_`. `schema.sql` contains `enable row level security` and every policy references `auth.uid()`.
- `tests/evals/e2e/account.spec.ts` (Playwright, Supabase faked with `page.route` on `**/auth/v1/**` and `**/rest/v1/**`): **CUJ-14** a guest never sees an error and the account UI is hidden when unconfigured; **CUJ-15** sign in with a code → existing local progress is uploaded → a second browser context signs in and sees the same streak and cards; **CUJ-16** offline answers sync after reconnecting; sign-out returns to Welcome and the tutor key is forgotten when the box is ticked.
- **Manual RLS check (once, before inviting anyone):** in the dashboard, create test users A and B. Signed in as A, try to read or update B's row through the app's browser console: it should return 0 rows or an error. Record the result in `31-eval-log.md`.
- `issues.json`: pre-register two P0 classes: "sync loses a review" and "LLM key leaves the device".

**Size:** about 5 new source files, about 700 lines including UI, about 1 day of build + 0.5 day of evals. Nothing in the deterministic core (checker, scheduler, content) changes.
