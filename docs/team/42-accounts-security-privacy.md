# 42 · Accounts: security & privacy review

Role: Security & Privacy reviewer. Scope: adding invite-only login (5–30 friends) with progress synced to a hosted backend (assumed Supabase + Vercel). Proportionate to a hobby app: protect friends' accounts and emails, don't leak API keys, meet nFADP/GDPR basics. Not a bank.

Note: this reverses two logged decisions ("No account… in v2", "no backend, privacy-first"). Log the reversal in `decisions.md`; the local-only mode should keep working for anyone who never signs in.

## 1. Threat model

**Assets (in order):** (1) each user's Anthropic API key (real money), (2) Supabase session tokens, (3) email addresses, (4) learning progress (low sensitivity), (5) the owner's Supabase/Vercel admin credentials.

| Threat | Likelihood | Impact | Main control |
|---|---|---|---|
| Stranger signs up via the public URL | High if not blocked | Low–med (storage, cost, spam) | Signups disabled; invites only (§2) |
| User A reads/edits user B's progress | Med (one missing policy) | Med | RLS on every table, tested with 2 accounts (§3) |
| XSS steals API key + session token from localStorage | Low | High (key) | No 3rd-party scripts, strict CSP, render LLM text as text (§4) |
| Service-role key leaked to the browser or git | Low–med (common mistake) | Critical (bypasses RLS) | Server-only env var, never `NEXT_PUBLIC_` (§8) |
| Email/OTP endpoint abused (spam, enumeration) | Low | Low | Supabase auth rate limits, custom SMTP (§7) |
| Owner account compromise (GitHub/Vercel/Supabase) | Low | Critical | 2FA on all three |

Out of scope: nation-state attackers, a stolen unlocked phone (stated in UI), insider threat beyond the owner.

## 2. Invite-only signup

- Supabase Auth → *Allow new users to sign up*: **off**. This is the enforcement point; nothing in our UI is trusted for it.
- Owner invites from the dashboard (*Authentication → Users → Invite*) or a one-off script. No invite codes, no allowlist table to get wrong.
- Login = email magic link / OTP (`signInWithOtp({ email, options: { shouldCreateUser: false } })`). No passwords to store or reset. Optionally Google/Apple later; still blocked for non-invited emails because signup is off.
- Redirect URLs: allowlist only the production domain and `http://localhost:3000`. No wildcard `*.vercel.app` (preview URLs would let a crafted link land tokens elsewhere).
- Revoking a friend: delete the user in the dashboard (cascades their data, §6).

## 3. Row-level security (RLS)

One table is enough: the existing `DB` JSON blob per user.

```sql
create table public.progress (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  db         jsonb not null check (pg_column_size(db) < 2000000),
  version    int  not null default 2,
  updated_at timestamptz not null default now()
);
alter table public.progress enable row level security;
create policy "own row" on public.progress for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
revoke all on public.progress from anon;
```

Requirements:
- RLS **enabled on every table** in `public`, no exceptions. Run Supabase *Advisors → Security* before launch; it flags tables without RLS.
- No `anon` access to anything. No `security definer` functions except the delete-account one (§6), with `set search_path = ''`.
- No storage buckets (we have no files). If added later, they need their own policies.
- No profile/name table: display name, if wanted, lives inside `db.profile`.
- **Test:** sign in as A, try `select`/`update`/`upsert` on B's `user_id` from the browser console with the publishable key. Must return 0 rows / error. Add this as a scripted check.
- Conflict handling: `updated_at` last-write-wins is fine at this scale; keep the local copy as source of truth, sync is a mirror.

## 4. API keys: never on the server

**Recommendation: the Anthropic key never leaves the device except to `api.anthropic.com`.** Not synced, not stored in Supabase "encrypted", not proxied.
- Why: storing 30 friends' keys makes our database a target worth attacking and makes the owner responsible for other people's billing credentials. Encryption at rest doesn't help if the server can decrypt it.
- Cost: users re-enter the key on each new device. Acceptable; say so in the UI ("Your key isn't synced. Add it on each device.").
- Enforcement: sync only `KEYS.v2` (the `DB`); `lingua:llm` and `lingua:llm-cache` are separate keys (`src/lib/storage-adapter.ts`) and `backup.ts` already excludes them. Add a unit test asserting the sync payload never contains a string starting `sk-ant-`.

**XSS implications.** After login, localStorage holds both the API key and the Supabase refresh token. Any script running on our origin can read both. Controls, in order of value:
1. **No third-party scripts** (no analytics, chat widgets, tag managers). Keep it that way.
2. **Add a page CSP** (today `next.config.ts` sets CSP only on `/sw.js`). Suggested:
   `default-src 'self'; script-src 'self' 'sha256-<hash of BOOT>'; style-src 'self' 'unsafe-inline'; connect-src 'self' https://<project>.supabase.co https://api.anthropic.com; img-src 'self' data:; frame-ancestors 'none'; base-uri 'self'; form-action 'self'`.
   The inline `BOOT` script in `src/app/layout.tsx` needs its hash (or a nonce; a hash avoids forcing dynamic rendering). Verify Next's own inline scripts still run; ship as `Content-Security-Policy-Report-Only` for a week first.
3. Never `dangerouslySetInnerHTML` LLM output or user-typed text (`alt_candidate.text`). Current single use is the static `BOOT` constant: fine.
4. UI copy already advises a dedicated key with a low spend limit; keep it. That caps the damage of any theft.

## 5. Data minimization and hosting

| Data | Where | Needed? |
|---|---|---|
| Email | Supabase Auth | Yes (login). Only PII we hold. |
| `DB` blob: profile settings, goals, cards (FSRS state), reviews, sessions, events | Supabase `progress` | Yes (that's sync). No free text except `alt_candidate.text` (a typed answer); acceptable, or strip it before upload. |
| Auth logs (IP, user agent) | Supabase, Vercel | Platform default; short retention. Don't add our own. |
| API key, LLM cache, roleplay transcripts | Device only | Never uploaded. |
| Analytics, name, age, location | Nowhere | Don't collect. |

- **Region:** Supabase project in the EU (Frankfurt `eu-central-1`; Zurich if offered when creating it; region can't be changed later). Vercel function region `fra1` if any server code is added; the static frontend via CDN holds no personal data.
- **Transfers:** Supabase and Vercel are US companies. Accept their DPAs (SCCs / Swiss-US DPF cover CH and EU users). Argentina has EU adequacy; no extra steps for friends there.
- **Retention:** delete accounts inactive for 24 months (owner reviews yearly; manual is fine at 30 users).
- **Legal basis:** contract/consent from friends who asked to join. No DPO, no records-of-processing beyond this doc.

## 6. Account deletion and export

- **Export:** reuse `exportBackup` (already excludes the key). Add "Download my data" in *You*; it covers GDPR Art. 20 / nFADP portability.
- **Delete synced data:** "Delete my cloud data" = RLS-allowed `delete from progress where user_id = auth.uid()`. Local data stays unless they also tap "Reset".
- **Delete account:** a `security definer` RPC `delete_me()` that runs `delete from auth.users where id = auth.uid()` (cascades `progress`), executable only by `authenticated`. Avoids putting the service-role key anywhere. Alternative: email the owner, who deletes within 30 days; state this in the notice.
- Confirmation screen in-app (no `confirm()`), sign out, clear the session after deletion.

## 7. Rate limiting and abuse

- Signups off → the main abuse vector is gone. No CAPTCHA needed.
- Supabase Auth has built-in limits on OTP/magic-link sends; the default shared SMTP is ~a few emails/hour and only for testing. Configure custom SMTP (e.g., Resend free tier) with SPF/DKIM so links don't land in spam.
- Sync writes: debounce to at most one upsert per 30 s and on session end; 2 MB `check` on `db` caps storage abuse by a valid user.
- LLM cost abuse is each user's own key and spend limit; no shared budget to drain.
- Set Supabase/Vercel spend caps or alerts (free tiers: stay on free, no card, or set a hard cap).

## 8. Secrets on Vercel

| Variable | Exposure | Notes |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Public (in browser bundle) | Fine. |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (formerly "anon key") | Public | Safe *only because* RLS is on. |
| `SUPABASE_SECRET_KEY` / service-role key | **Server-only** | Ideally not set in Vercel at all (nothing needs it with the `delete_me` RPC). Never `NEXT_PUBLIC_`, never in git, never in client code. |
| Anthropic keys | None in Vercel | Users' keys stay on their devices; the owner's key must not be added "for testing". |

- `.env.local` in `.gitignore` (check); run `git log -p | grep -iE "sk-ant-|service_role|sb_secret_"` before making the repo public.
- Separate Supabase projects (or at least separate keys) for preview vs. production; preview deployments should not point at prod data.
- 2FA on GitHub, Vercel, Supabase, and the SMTP provider.

## 9. Privacy notice (put in *You → Privacy*, link from login)

**ES —** *Lingua es una app personal para amigos, gestionada por [nombre], Zúrich ([email]). Si inicias sesión guardamos tu email y tu progreso de aprendizaje (tarjetas, repasos, metas y ajustes) para sincronizarlo entre tus dispositivos. Los datos se alojan en la UE (Supabase, Frankfurt) y la web la sirve Vercel; ambos son proveedores con contratos de protección de datos. No usamos analítica, publicidad ni cookies de seguimiento. Tu clave de Anthropic, si la añades, se queda solo en tu dispositivo y se envía únicamente a Anthropic; nunca llega a nuestro servidor. Puedes descargar tus datos o borrar tu cuenta en cualquier momento desde "Tú", o escribiendo a [email]; lo hacemos en 30 días como máximo. Borramos cuentas inactivas tras 24 meses. Tienes derecho a acceder, corregir y borrar tus datos, y a reclamar ante el FDPIC (Suiza) o la autoridad de tu país.*

**EN —** *Lingua is a personal app for friends, run by [name], Zurich ([email]). If you sign in, we store your email and your learning progress (cards, reviews, goals and settings) to sync it across your devices. Data is hosted in the EU (Supabase, Frankfurt) and the site is served by Vercel; both are processors under data-protection agreements. No analytics, ads or tracking cookies. Your Anthropic key, if you add one, stays on your device and is sent only to Anthropic; it never reaches our server. You can download your data or delete your account anytime in "You", or by emailing [email]; we act within 30 days. Accounts inactive for 24 months are deleted. You may access, correct and delete your data, and complain to the FDPIC (Switzerland) or your local authority.*

## 10. Pre-launch checklist

- [ ] Supabase: signups disabled; redirect URLs = prod domain + localhost only; project in EU region.
- [ ] RLS enabled on every `public` table; Security Advisor shows 0 warnings.
- [ ] Cross-account test (A cannot read/write B) scripted and passing.
- [ ] Sync payload test: no `sk-ant-`, no `lingua:llm*` content.
- [ ] Page CSP live (report-only first, then enforced); no third-party scripts.
- [ ] No `dangerouslySetInnerHTML` except the static `BOOT` script (grep in CI).
- [ ] Only `NEXT_PUBLIC_SUPABASE_URL` and publishable key in Vercel; no service-role key in client, env, or git history.
- [ ] Custom SMTP with SPF/DKIM; magic link tested from Gmail and Outlook.
- [ ] Export, delete-cloud-data and delete-account flows work end-to-end; deleted user cannot log in.
- [ ] Privacy notice (ES/EN) linked from login and *You*; owner contact filled in.
- [ ] Supabase/Vercel DPAs accepted; spend caps/alerts on.
- [ ] 2FA on GitHub, Vercel, Supabase, SMTP.
- [ ] Local-only mode still works signed-out and offline.
