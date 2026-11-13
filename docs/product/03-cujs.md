# 03 · Critical user journeys (CUJs)

_2026-11-13 · Status: current. CUJ-1 to 13 come from docs/team/10-spec §6. CUJ-14 onward replace the draft numbering in 41-accounts-product-ux §5 so the numbers match the tests._

Each CUJ is a journey a real persona must be able to finish. Every one has acceptance criteria (✔) and what proves it: **[auto]** = an automated eval (`npm run eval`; e2e tests drive a production build in a 390×844 mobile browser), **[manual]** = a device check before release. Criteria not marked are automated.

## Learning journeys

| CUJ | Persona | Journey | Acceptance criteria | Proven by |
|---|---|---|---|---|
| **1 · First open → first lesson** | P2 Mateo, P4 Priya | App language → Italian → explain in Spanish → "a bit" → placement → goal → first session → results → Today | ✔ First answer (placement item) within 4 min ✔ Placement 8–15 items, with "I don't know" and "I'm a beginner" ✔ Result names a band and a unit, with lower/higher ✔ Goal card updates live ✔ UI fully in the chosen language (ux-static + e2e-ux) | e2e-cuj |
| **2 · Absolute beginner** | P3 Emma | "Never studied" → no placement → Unit 1 | ✔ No test items ✔ First items are guess-first with teaching | e2e-cuj |
| **3 · Daily return** | P2 | Next day: open → Start → session ends by itself | ✔ One primary button, ≤ 1 card ✔ Yesterday's reviews appear ✔ The ring fills ✔ "Practise more" offered, never auto-started | e2e-cuj |
| **4 · Second language** | P1 Ana | Switcher → Add Deutsch → explain in English → placement → goal | ✔ Under 3 min ✔ Accent colour switches ✔ Today shows combined minutes and the other-language chip ✔ Italian progress untouched | e2e-cuj |
| **5 · Mistakes** | P3 | Miss 3 items | ✔ Each requeued in-session ✔ Feedback shows the answer and a note ✔ "I was right" works ✔ Tomorrow shows "3 to fix" | e2e-cuj |
| **6 · Checker correctness** | all | Typed answers | ✔ *nono*≠*nonno* ✔ *la zio* wrong ✔ *heisse* correct ✔ *schon*≠*schön* ✔ *citta* almost ✔ lowercase German noun correct with a note | checker (255 cases) |
| **7 · Change goal** | P3 | Me → Edit goal → A2 by an earlier date | ✔ "Very demanding" with two alternatives ✔ Saved in < 60 s [manual] ✔ Today target updates ✔ No history lost | e2e-cuj |
| **8 · Falling behind** | P1 | 9 days absent → open | ✔ "Welcome back" warm-up, reviews only ✔ No missed-day count, no red ✔ Weekly check offers 3 neutral options | e2e-cuj |
| **9 · AI tutor** | P3 | Paste key → Test → typed near-miss | ✔ Instant local verdict, then a "Claude:" upgrade ✔ Offline: silent fallback ✔ Wrong key: clear error ✔ Key absent from backups ✔ Exact answers make no call | engine (mocked provider); live key = manual |
| **10 · Offline** | P4 Priya | Load once → airplane mode → cold start | ✔ App opens ✔ A full session completes and persists | e2e-ux |
| **11 · Backup / restore** | all | Export → Reset → Import | ✔ Preview ✔ Identical state ✔ Malformed file rejected, nothing changed ✔ v1 file migrates | e2e-ux |
| **12 · v1 owner upgrade** | owner | Load with v1 data | ✔ Onboarding skipped except the goal ✔ Due dates ±1 day ✔ No Milestones/Ties | e2e-cuj |
| **13 · Accessibility & themes** | all | Every main screen, es + en | ✔ Dark mode ✔ Reduced motion ✔ ≥ 44 px ✔ Never colour alone ✔ `lang` on target words | e2e-ux |

## Account journeys (branch `accounts-sync`)

| CUJ | Persona | Journey | Acceptance criteria | Proven by |
|---|---|---|---|---|
| **14 · Guest, accounts not configured** | P4 | Use the app on a build with no Supabase | ✔ No "I have an account", no sync row in Settings ✔ `/account` redirects away ✔ Zero requests to any auth server | e2e-sync |
| **15 · Progress follows you** | P1 Ana | Phone A: practise as guest → Settings → Sync across devices → email → code → upload. Phone B: Welcome → I have an account → email → code | ✔ Phone B shows the same words, reviews and goals ✔ The AI key appears in no request body ✔ ≤ 4 taps plus typing the code [manual] | e2e-sync + sync evals |
| **15c · Two devices offline, then both sync** | P1 | Phone and laptop both practise offline, then reconnect in any order | ✔ Both end with every answer from both ✔ Each word's schedule follows its most recent review | sync evals (engine) |
| **15d · Reset or import on one device** | P1 | Settings → Reset everything (or import a backup) on the phone | ✔ The other device ends up with exactly the same (empty or imported) progress ✔ Removed languages and custom words never come back | e2e-sync + sync evals |
| **15e · Sign in right after installing** | P5 | Sign in, tap Continue, practise (no app restart) | ✔ Background sync is running immediately | e2e-sync |
| **15b · Progress in two places** | P1 | Sign in on a device that has its own guest progress while the account also has progress | ✔ Choice screen shows both counts ✔ "Combine" keeps every answer from both ✔ "Use account" / "Use device" do what they say, and a pre-login backup stays on the device | sync evals (merge, engine) |
| **16 · Offline with an account** | P4 | Signed in → airplane mode → practise → reconnect | ✔ No spinner or sign-in wall ✔ Status says "Offline — will sync later" ✔ Answers upload on reconnect | e2e-sync |
| **17 · Sign in with Google** | P5 Lucía | Welcome or Settings → Continue with Google → pick account → back in the app | ✔ Signed in and progress uploaded ✔ No `code=` left in the URL ✔ App requested PKCE and a same-origin return ✔ Non-invited Google account → "not invited yet" ✔ Cancel → soft error, email path still there ✔ Button disabled offline ✔ Returns into the **installed** iPhone app [manual, launch gate] | e2e-sync (fake provider) |
| **18 · Not invited / wrong code** | P5 | Unknown email, or wrong code | ✔ Clear "not invited yet" message and no account created ✔ Wrong code rejected, right code works | e2e-sync |
| **19 · Sign out** | P1 | Settings → Sign out | ✔ Device wiped, back to Welcome ✔ Warning if answers are unsynced ✔ Optional "also forget AI key" | e2e-sync |
| **20 · Delete account** | P5 | Settings → Delete my account → type ELIMINAR | ✔ Server copy gone ✔ Device keeps progress as a guest ✔ Export offered first | e2e-sync |

| **25 · Invited friend, today (no invite links yet)** | P5 | Owner adds her email and sends the WhatsApp template → link opens in WhatsApp's browser → Welcome shows "open in Safari/Chrome" or the iPhone install tip → installs → practises as a guest → later Settings → Sync across devices | ✔ Install hint shown in the right place, hidden once installed [manual] ✔ No sign-in asked before the first lesson ✔ Sign-in later uploads everything | e2e-sync (sign-in part); [manual] install |
| **26 · Owner invites a friend, day 1** | Owner | Supabase → Add user → send template → friend signs in | ✔ ≤ 2 min for the owner ✔ Email arrives in the inbox, not spam (Gmail, Outlook, iCloud) [manual, launch gate] | runbook in `docs/setup-accounts.md` |

**Regression guards that must always hold:** CUJ-1 and CUJ-10 pass without ever signing in. CUJ-14: a guest build makes zero requests to any auth server. CUJ-18: an uninvited email never creates an account. CUJ-15b: Combine keeps every answer. CUJ-9's key never leaves the device, signed in or not (closed P0-S2). No sync path can drop a review (closed P0-S1).

## Planned journeys (v1.1, not built)

| CUJ | Journey | Acceptance criteria |
|---|---|---|
| **21 · Invited friend via link** | Open `/i/CODE` on a fresh phone | ✔ "{Name} invited you" ✔ App language pre-filled ✔ First lesson ≤ 3 min without sign-in ✔ Expired code still allows guest practice |
| **22 · Save your progress** | First Results → "Save your progress" → Google or email | ✔ Offered once, secondary to Continue ✔ Offline: "needs a connection", never blocks |
| **23 · Install** | iOS sheet with 3 illustrated steps; Android Install button | ✔ Never shown when already installed ✔ In-app browsers say "Open in Safari/Chrome" |
| **24 · Share my week** | Me → Share my week → image to WhatsApp | ✔ No item text, no email; days + minutes only |
