# Turning on accounts (≈30 minutes, once)

Lingua works without this: until these steps are done, everyone is a guest and progress
lives only on their phone. After them, people you invite can sign in with their email
and their progress follows them between devices.

You'll create one free **Supabase** account (it stores the progress and sends the sign-in
codes) and paste two values into **Vercel**. No coding.

---

## 1. Create the Supabase project (5 min)

1. Go to **https://supabase.com** → *Start your project* → sign in with GitHub.
2. **New project**
   - Name: `lingua`
   - Database password: click *Generate*, save it in your password manager (the app never uses it).
   - Region: **Central EU (Frankfurt)**, or **Zurich** if it's listed.
   - Plan: Free → *Create new project*. Wait ~1 minute.

## 2. Create the table (2 min)

1. Left menu → **SQL Editor** → *New query*.
2. Open `supabase/schema.sql` from the repo (on GitHub: the `supabase` folder), copy **all** of it, paste it in.
3. Click **Run**. You should see *Success. No rows returned*.
   (Already ran an older version? Run the new file again: it's safe to re-run. It now also
   creates the `user_reviews` table, where every answer is kept.)

## 3. Make it invite-only (2 min)

1. Left menu → **Authentication** → **Sign In / Providers** (sometimes under *Configuration*).
2. Turn **Allow new users to sign up** → **OFF**. ← the important one.
3. Under **Email**: keep it enabled, keep **Confirm email** on.
4. Leave every other provider off for now (Google is optional, step 11).

## 4. Email sending (10 min) — do this before the template

Supabase only lets you edit the email templates (step 5) **after** custom SMTP is set up, and
its built-in email only sends a few emails per hour. So set up your own sender first:

**Option A — Gmail (no domain needed)**
1. Your Google Account → **Security** → turn on **2-Step Verification** (if not already).
2. Search *App passwords* in your Google Account → create one called `Lingua` → copy the 16 letters.
3. Supabase → **Authentication → Emails → SMTP Settings** → *Enable custom SMTP*:
   - Sender email: your Gmail · Sender name: `Lingua`
   - Host `smtp.gmail.com` · Port `465` · Username: your Gmail · Password: the 16 letters
   - Save.

**Option B — Resend** (if you own a domain): sign up at resend.com, verify the domain,
then paste its SMTP host / user / password into the same Supabase screen.

## 5. Make the email show a code instead of a link (3 min)

Why: on iPhone a link opens Safari, not the installed app, so people would end up signed in
in the wrong place. A 6-digit code works everywhere.

1. **Authentication → Emails → Templates** (needs step 4 done first; otherwise Supabase shows
   "Set up custom SMTP to edit templates").
2. Open **Magic link or OTP**. Replace the body with:

   ```
   <h2>Your Lingua code</h2>
   <p>Type this code in the app: <strong>{{ .Token }}</strong></p>
   <p>It expires in 1 hour. If you didn't ask for it, ignore this email.</p>
   ```
   Subject: `Your Lingua code`. Save.
3. (Optional) Do the same for **Invite user**.

## 6. Tell Supabase where the app lives (1 min)

**Authentication → URL Configuration** → **Site URL** = your Vercel address,
e.g. `https://linguaapp.vercel.app`. Save.

## 7. Copy the two public values (1 min)

**Project Settings → API** (or *Data API* / *API Keys*):
- **Project URL** — looks like `https://abcdefgh.supabase.co`
- **anon / publishable key** — a long string

⚠️ **Do NOT copy the `service_role` / secret key anywhere.** The app never needs it.

## 8. Put them in Vercel and redeploy (3 min)

1. **vercel.com** → project **linguaapp** → **Settings → Environment Variables**.
2. Add, ticking **Production** and **Preview**:
   - `NEXT_PUBLIC_SUPABASE_URL` = the Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = the anon key
3. **Deployments** → the latest one → **⋯ → Redeploy**. (The values are baked in when the
   app is built, so this step is required.)

Send me the two values (they're public by design) if you also want sign-in to work on the
version running on your Mac.

## 9. Invite yourself first, then friends (1 min per person)

1. Supabase → **Authentication → Users → Add user → Create new user**.
2. Their email, tick **Auto Confirm User**, leave the password empty → *Create*.
3. Send them the app link. They tap **I have an account** (or *Settings → Sync across
   devices*), type their email, then the 6-digit code from the email.

   Message you can paste into WhatsApp (edit the link):

   > Te invité a Lingua, una app tranquila para aprender italiano o alemán, 5 minutos al día.
   > 1) Abre este enlace en **Safari** (iPhone) o **Chrome** (Android), no dentro de WhatsApp:
   >    https://linguaapp.vercel.app
   > 2) iPhone: Compartir → «Agregar a pantalla de inicio». Android: «Instalar app».
   > 3) Toca «Iniciar sesión», escribe tu correo (este: ___) y el código de 6 dígitos que
   >    te llega. Tu progreso queda guardado en tu cuenta: si cambias de teléfono, solo
   >    vuelves a iniciar sesión.
   > Tu clave de IA (si usas el tutor) nunca sale de tu teléfono. Como yo administro Lingua,
   > puedo ver tus respuestas, metas y palabras agregadas; nada más.

To remove someone: **Users** → ⋯ → *Delete user* (their progress is deleted with them).

## 10. One-time safety check (5 min, before inviting friends)

Create two test users A and B, sign in as each on different browsers and do a lesson.
In Supabase → **Table Editor → user_state** you should see two rows, and
**user_reviews** should have rows for both (one per answer). Then tell me and I'll
run the check that A can't read B's row — or follow `docs/team/42-accounts-security-privacy.md`.

## Before the first friend: launch checklist

- [ ] Step 10 safety check passed (B can't see A's row).
- [ ] The sign-in email reached the **inbox** (not spam) of a Gmail, an Outlook/Hotmail and an iCloud address.
- [ ] On your iPhone, in the **installed** app: sign in with the code works; a lesson shows up on your other device.
- [ ] Reset everything on one device → the other device is empty after Sync now.
- [ ] If you turned on Google (step 11): it returns into the installed iPhone app.
- [ ] Optional: in Supabase **SQL Editor**, save this query as "Last syncs" to see that sync works:
      `select u.email, s.updated_at, s.device, s.rev from public.user_state s join auth.users u on u.id = s.user_id order by s.updated_at desc;`

## 11. Optional: "Continue with Google" (≈15 min)

Do this after steps 1–10 work. Invite-only still applies: only emails you added in step 9
can sign in with Google, and they must use that same Gmail address.

1. **console.cloud.google.com** → top bar → *New project* → name `Lingua` → Create.
2. **APIs & Services → OAuth consent screen** (or *Google Auth Platform → Branding*):
   - User type **External** · App name `Lingua` · support email = your Gmail · Save.
   - Scopes: leave the defaults (`email`, `profile`, `openid`). Nothing sensitive, so no Google review.
   - **Audience:** you can leave it in *Testing* and add each friend's Gmail under *Test users*
     (max 100). That is an extra invite list. Or click *Publish app* so any invited email works.
3. **APIs & Services → Credentials → Create credentials → OAuth client ID**:
   - Type **Web application**, name `Lingua (Supabase)`.
   - **Authorized redirect URIs** → add `https://<your-project>.supabase.co/auth/v1/callback`
     (copy it from Supabase → Authentication → Sign In / Providers → Google, it's shown there).
   - Create → copy the **Client ID** and **Client secret**.
4. **Supabase → Authentication → Sign In / Providers → Google** → Enable → paste Client ID and
   Client secret → Save. ⚠️ The client secret goes **only here**, never into Vercel or the repo.
5. **Supabase → Authentication → URL Configuration → Redirect URLs** → add
   `https://linguaapp.vercel.app/account*` (your real Vercel address). Add your preview address
   too if you want to test Google on PR previews.
6. **Vercel → Settings → Environment Variables** → add `NEXT_PUBLIC_AUTH_GOOGLE` = `1`
   (Production and Preview) → **Redeploy**.
7. Test on your **iPhone, installed app**: Sign in → Continue with Google. You should land back in
   the app signed in. If it opens Safari and stays there, tell me and I'll hide the Google button
   inside the installed iPhone app (the email code always works).

To turn Google off again: delete `NEXT_PUBLIC_AUTH_GOOGLE` in Vercel and redeploy.

---

### Good to know
- **Free tier pauses after ~7 days with no visits.** The app keeps working (it's offline-first);
  Settings shows "Couldn't sync". Supabase emails you — click **Restore project** soon (paused
  projects can only be restored for a limited time).
- **No automatic backups on the free plan.** Ask friends to use Settings → Export now and then.
- **If you ever turn accounts off** (delete the Vercel variables): anyone who had *signed out*
  has an empty phone; their progress is only in Supabase until you turn accounts back on.
- **What you can see as the admin:** everyone's progress (words, answers, goals). Not their
  AI-tutor key — that never leaves their phone. The app tells people this before they sign in.
- **Turn on 2-factor login** for GitHub, Vercel, Supabase and the Gmail you send from.
