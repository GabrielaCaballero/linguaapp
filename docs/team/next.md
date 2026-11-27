# Next up (owner's list)

Written 2026-11-21 for the next session. Newest first; move items to decisions.md when done.

## To do

- **Catch-up review for learners already past the reworked units** (owner, 2026-11-28). Learners
  past German u12 never get the new u01–u12 items (new verbs, the 29 conjugation tables, split
  patterns), because new items only come from the current unit on. Add a "catch up" (e.g. a
  card on Today, or new early items mixed into their lessons) so they get them too.
- **Apply the German A0–A2 rework to the whole German course, then to every language**
  (owner, 2026-11-28). Same method: a beginner-student agent + a teaching-expert agent review,
  then the author reworks following docs/team/german-a1-redesign.md (verb → table → sentences,
  one rule per pattern, meanings in every table, nothing used before it's taught). Widen
  tests/evals/content/introduced.eval.ts (SCOPE) as each course/level is done: German u13–u36,
  then Italian, French, Portuguese, English.

## Waiting on the owner
- Supabase → SQL Editor: run `supabase/schema.sql` again (creates `content_reports` for "Report a
  problem"). Read reports with `docs/team/metrics.sql` section 9.
- Native review of the AI-written content: Portuguese (whole course), French C1–C2, English/German/Italian C2.
- Recorded audio: enable Cloud Text-to-Speech, create a restricted API key, put it in
  `.env.tts.local`, then `npm run audio:samples` and pick voices (docs/team/audio.md).
- Open and merge the PR `require-account` → `main`:
  https://github.com/GabrielaCaballero/linguaapp/compare/main...require-account
- Supabase → SQL Editor: run `supabase/schema.sql` again (new size and daily-answer limits).
- Vercel: `NEXT_PUBLIC_GOOGLE_CLIENT_ID`; Google Cloud: `https://linguina.app` as an authorized
  JavaScript origin (Google's own button). Then: Google brand verification (Branding page, privacy
  link `https://linguina.app/privacy`) so Google shows "Linguina" instead of the address.
- Supabase: turn off "Confirm email" and set up custom SMTP (codes reach the inbox, no low limit).
- Google sign-in error "This account already exists on your device": seen in an incognito window,
  likely Android adding an account that's already on the phone (Google's page, not ours). Confirm
  the device; if it's Android, consider a hint "Trouble with Google? Use your email".

## Ideas for later
- Swiss German, step 2: a listening-only "Schwiizerdütsch to understand" module on top of German,
  with recorded audio (step 1, Swiss tips, is done).
- Content (from the language reviewers):
  - units 1–6: sentence distractors are whole sentences, but the tiles exercise needs single words;
  - allow an optional subject pronoun ("Io mi alzo…") in the checker instead of per-item accepts;
  - German uncountable nouns are tagged `pos: "other"` to dodge the plural rule, so they never get
    the der/die/das drill: let nouns without a plural through the schema;
  - German units 14–24 could use one or two more everyday sentences each.
- Content on a server (per-unit, signed-in, rate-limited) once the content has commercial value.

## PR order (2026-11-23)
Merge in this order (each is based on the previous one):
1. `require-account` → main (natural Spanish, leaner setup, iPhone audio fix)
2. `app-audio-typing` → recorded audio, kinder typing, no repeats, C1 levels in the app
3. `c1-italian-german` → C1 content + Italian/German audio
4. `english-french-courses` → English and French courses + audio
After merging: run supabase/schema.sql only if it changed (it hasn't since 2026-11-21).
Still open: native review of the C1, English and French content (AI drafts).
