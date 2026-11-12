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

## 3. Make it invite-only (2 min)

1. Left menu → **Authentication** → **Sign In / Providers** (sometimes under *Configuration*).
2. Turn **Allow new users to sign up** → **OFF**. ← the important one.
3. Under **Email**: keep it enabled, keep **Confirm email** on.
4. Leave every other provider (Google, Apple, …) off.

## 4. Make the email show a code instead of a link (3 min)

Why: on iPhone a link opens Safari, not the installed app, so people would end up signed in
in the wrong place. A 6-digit code works everywhere.

1. **Authentication → Emails → Templates** (or *Email Templates*).
2. Open **Magic Link**. Replace the body with:

   ```
   <h2>Your Lingua code</h2>
   <p>Type this code in the app: <strong>{{ .Token }}</strong></p>
   <p>It expires in 1 hour. If you didn't ask for it, ignore this email.</p>
   ```
   Subject: `Your Lingua code`. Save.
3. (Optional) Do the same for **Invite user**.

## 5. Email sending (10 min) — the one fiddly step

Supabase's built-in email only sends a few emails per hour and is meant for testing. It's
fine for **you alone** to try it today. Before inviting friends, set up your own sender:

**Option A — Gmail (no domain needed)**
1. Your Google Account → **Security** → turn on **2-Step Verification** (if not already).
2. Search *App passwords* in your Google Account → create one called `Lingua` → copy the 16 letters.
3. Supabase → **Authentication → Emails → SMTP Settings** → *Enable custom SMTP*:
   - Sender email: your Gmail · Sender name: `Lingua`
   - Host `smtp.gmail.com` · Port `465` · Username: your Gmail · Password: the 16 letters
   - Save.

**Option B — Resend** (if you own a domain): sign up at resend.com, verify the domain,
then paste its SMTP host / user / password into the same Supabase screen.

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

To remove someone: **Users** → ⋯ → *Delete user* (their progress is deleted with them).

## 10. One-time safety check (5 min, before inviting friends)

Create two test users A and B, sign in as each on different browsers and do a lesson.
In Supabase → **Table Editor → user_state** you should see two rows. Then tell me and I'll
run the check that A can't read B's row — or follow `docs/team/42-accounts-security-privacy.md`.

---

### Good to know
- **Free tier pauses after ~7 days with no visits.** The app keeps working (it's offline-first);
  sync just waits. Supabase emails you — click **Restore project**.
- **What you can see as the admin:** everyone's progress (words, answers, goals). Not their
  AI-tutor key — that never leaves their phone. The app tells people this before they sign in.
- **Turn on 2-factor login** for GitHub, Vercel, Supabase and the Gmail you send from.
