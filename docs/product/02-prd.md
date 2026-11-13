# 02 · PRD: Lingua

_2026-11-13 · PM: Gabriela · Status: v2 live; accounts + Google sign-in in review on `accounts-sync`; revised after the Director PM and Uber TL reviews. Detailed rules live in docs/team/10-spec.md (learning engine) and 40–42 (accounts); this PRD is the requirement-level summary._

## 1. Problem

Adults who learn Italian or German for a real reason can't get three things together in one app: (a) an honest answer to "how much do I need to practise to reach my goal by my date?", (b) practice that is actually scheduled for long-term memory, and (c) something that fits five offline minutes and respects them as adults. Spanish speakers in particular are taught Italian as if they knew nothing. Once friends started using the app, a fourth need appeared: **(d) my progress should be mine, on any of my devices, and nobody else's.**

## 2. Goals and non-goals

**Goals**
- G1. A new user answers their first question (placement item, or first lesson item for "never studied") within 4 minutes of opening, without an account. The first *lesson* answer comes after placement, goal and practice time: target ≤ 8 minutes.
- G2. Every session is 5 real minutes at about 80–85% accuracy, mixing reviews and new words with no choices needed.
- G3. Goals translate into honest minutes per day and a projected date.
- G4. Works fully offline once loaded; installable on iOS and Android.
- G5. Invited friends can keep their progress across devices, and sign-in never costs them progress.
- G6. Grading is linguistically correct for Spanish/English speakers learning Italian/German.

**Non-goals:** see Strategy §4 (no streaks, no required account, no public sign-up, no tracking, no server code, no social graph in v1).

## 3. Users

Personas P1–P5 (Strategy §2). Supported devices: iPhone Safari (iOS 16+) and Android Chrome, installed as a PWA or in the browser; desktop browsers work but are not a design target. Screen design target: 375×812.

## 4. Functional requirements

Priority: **P0** = launch blocker, **P1** = must ship in this release, **P2** = nice to have. Status: ✅ built · 🟡 built, not verified on a real device or service · ⬜ not built.

### 4.1 Onboarding and placement
| ID | Requirement | Pri | Status |
|---|---|---|---|
| ON-1 | One question per screen: app language (es/en, from the device language) → languages to learn (it/de, multi-select) → per-language "explain in" + prior experience + 3 can-do ratings | P0 | ✅ |
| ON-2 | Adaptive placement (Rasch/EAP): 8–15 items, stops at SE < 0.45, "I don't know" on every item, "I'm a beginner" exit; skipped for "never studied" | P0 | ✅ |
| ON-3 | Result names a CEFR band and a start unit, with "Start lower / higher" (one unit each) | P0 | ✅ |
| ON-4 | Goal step with a live commitment card (see 4.4), then the practice-time anchor, then the first session starts | P0 | ✅ |
| ON-5 | "I have a backup" import on Welcome; "I have an account" sign-in on Welcome when accounts are configured | P1 | ✅ / 🟡 |
| ON-6 | Welcome shows one line of install help: in iPhone Safari "Share → Add to Home Screen"; inside another app's browser (Instagram, Facebook…) "Open in Safari or Chrome". Hidden once installed | P1 | ✅ (manual check on devices) |

### 4.2 Practice (sessions and lessons)
| ID | Requirement | Pri | Status |
|---|---|---|---|
| PR-1 | A session is a 5-minute chunk (3/5/10 setting) of ~22 tasks: due reviews first (≤15 per chunk, ≤40 per day), then new items in unit order, introduced with a "guess" and recalled 3–6 tasks later, interleaved | P0 | ✅ |
| PR-2 | Difficulty controller keeps rolling accuracy (last 10 graded) at 80–85%: >90% adds new items and harder modes, <70% eases off | P0 | ✅ |
| PR-3 | Misses are requeued in the same session (max 2) and become "N to fix" tomorrow | P0 | ✅ |
| PR-4 | Exercises: guess, recognize, recall (typed, with an accent bar), tiles, listen, article, pick-spelling, question, speed round (opt-in); listening skipped when the device has no voice | P0 | ✅ |
| PR-5 | Feedback sheet: ✓ / ~ / ✕ plus words, the correct answer, a one-line note, audio, "I was right" (counts as Good and logs the answer for the linguist) | P0 | ✅ |
| PR-6 | Optional confidence chips (sure / think so / guessing) feed the rating | P1 | ✅ |
| PR-7 | Back after ≥ 7 days: the session is reviews only, a warm-up, with no count of missed days | P1 | ✅ |
| PR-8 | Results: ring animation, "+N new · N stronger · N to fix", one insight, a preview of tomorrow, "One more round" | P1 | ✅ |

### 4.3 Grading (answer checker)
| ID | Requirement | Pri | Status |
|---|---|---|---|
| GR-1 | Deterministic verdict correct / almost / wrong with a reason, instantly and offline | P0 | ✅ |
| GR-2 | Language rules: Italian accents → almost (meaning pairs like e/è get a specific note); German ss/ae/oe/ue accepted; a missing umlaut → almost unless it forms another word; closed-class words (articles, prepositions, pronouns, auxiliaries) must be exact; typos allowed only on open-class words and never across a minimal pair | P0 | ✅ |
| GR-3 | Optional AI tutor (user's own Anthropic key): for typed answers marked almost/wrong only, online only, 6 s timeout, may raise the grade by one step, never lower it, never to Easy; "Why?" explanation on request | P2 | ✅ (live key 🟡) |

### 4.4 Goals and progress
| ID | Requirement | Pri | Status |
|---|---|---|---|
| GO-1 | Goal types: level by date (A1.1/A1/A2/B1), trip, steady (5–30 min → projected date), maintain (reviews only) | P0 | ✅ |
| GO-2 | Minutes per day = hours needed × language-pair multiplier, minus class hours, ÷ (weeks × practice days); labelled Relaxed / Steady / Ambitious / Very demanding; demanding goals offer two alternatives | P0 | ✅ |
| GO-3 | Weekly check (≥ 7 days after setting the goal): keep date (+X min) / move date / keep pace; never automatic, never red | P1 | ✅ |
| GO-4 | Today: weekly practice dots, a ring for today's minutes, at most one contextual card, one primary button; other-language chip when there are two languages | P0 | ✅ |
| GO-5 | Me: goal status, week strip, word stages, "remembered after a week", can-do list per unit, calibration | P1 | ✅ |
| GO-6 | Path: 6 units per language with progress, can-do statements and sample words | P1 | ✅ |
| GO-7 | Content honesty: goals above A1 are labelled "more units coming"; placement beyond the slice suggests a "Keep what I know" goal | P0 | ✅ |
| GO-8 | **End of content:** when every unit of a language is introduced, Today says so plainly, keeps reviews going, and offers Maintain | P1 | ⬜ define + build before friends finish Unit 6 (~6–10 weeks) |

### 4.5 Data, privacy and offline
| ID | Requirement | Pri | Status |
|---|---|---|---|
| DA-1 | Signed in, progress is stored in the account and nobody ever has to download, export or move it; practice works with no network after the first load | P0 | 🟡 |
| DA-1b | Signed in, Lingua uses at most ~1 MB of phone storage for progress (last 45 days cached; full history in the account), plus ~2.3 MB for the app | P0 | ✅ (eval: a year of daily practice < 1 MB) |
| DA-1c | Guests (no account) keep everything on the phone (≤ ~3 MB) and are offered, once after their first lesson, to save it to an account | P1 | ✅ |
| DA-2 | Installable PWA; service worker precaches all routes | P0 | ✅ |
| DA-3 | Export/import backup (JSON) with preview; a malformed file changes nothing; the AI key is never in a backup | P0 | ✅ |
| DA-4 | v1 → v2 migration keeps the owner's progress (due dates ±1 day) | P0 | ✅ |
| DA-5 | Reset everything with a typed confirmation | P1 | ✅ |

### 4.6 Accounts and sync
| ID | Requirement | Pri | Status |
|---|---|---|---|
| AC-1 | Accounts are invisible when the server isn't configured. When it is, Welcome leads with **Sign in** and offers "Try it first, without an account"; guests never hit a sign-in wall | P0 | ✅ |
| AC-2 | Invite-only: only emails the owner has added can sign in; anyone else gets "not invited yet" | P0 | 🟡 |
| AC-3 | Sign in with a 6-digit email code (works inside the installed iOS app) | P0 | 🟡 |
| AC-4 | **Sign in with Google** as an alternative, shown only when the owner enables it; same invite rule; email code always available as fallback | P1 | 🟡 |
| AC-5 | First sign-in on a device with progress in both places asks: Combine (recommended) / Use account / Use device, showing counts; nothing is lost on Combine | P0 | 🟡 (fake server only) |
| AC-6 | Sync runs on open, on reconnect, when the app is shown or hidden, at the end of each lesson, and at most every 2 minutes while practising, starting right after the first sign-in; status and "Sync now" in Settings | P0 | 🟡 |
| AC-7 | Merge keeps every answer from every device (up to the newest 20 000 per user); for each word the most recent review sets the schedule | P0 | 🟡 |
| AC-8 | Sign out wipes this device (even if a sync is running), warns if answers are unsynced, optionally forgets the AI key | P0 | 🟡 |
| AC-9 | Delete account in-app (type ELIMINAR/DELETE); the device keeps its progress as a guest | P0 | ✅ |
| AC-10 | The AI-tutor key and on-device stats are never uploaded | P0 | ✅ |
| AC-11 | Invite links `/i/CODE`, "Save your progress" offer after the first lesson, "Share my week" card | P2 | ⬜ v1.1 |
| AC-12 | Deliberate removals stay removed on every device: a removed language or custom word, "Reset everything", an imported backup, "Use this device" | P0 | 🟡 |
| AC-13 | A device running an older app never overwrites progress written by a newer one; it asks the user to update | P1 | 🟡 |
| AC-14 | Before signing in, people are told exactly what the administrator can see: every answer with its time, goals, and their own added words; not the AI key or on-device stats | P0 | ✅ |

### 4.7 Owner operations (the person who runs this Lingua)
| ID | Requirement | Pri | Status |
|---|---|---|---|
| OP-1 | Invite a friend: add the email in Supabase (Auto Confirm), send the template message from `docs/setup-accounts.md` | P0 | ✅ (runbook) |
| OP-2 | Remove a friend: delete the user in Supabase; their row goes with it | P0 | ✅ (runbook) |
| OP-3 | Friend changes email / lost access to it: the owner moves the account to the new address (progress is attached to the user id, not the email) | P1 | ⬜ find and document the exact dashboard steps |
| OP-4 | A friend who deleted their account wants back in: the owner adds them again; they start with an empty account and can import a backup | P1 | ✅ (runbook) |
| OP-5 | Lost or new phone: sign in on the new phone; everything comes down. Nothing to do for the owner | P0 | 🟡 |
| OP-6 | Free project paused: the owner gets an email and clicks Restore; the app keeps working meanwhile | P1 | ✅ (runbook) |
| OP-7 | Sign-in emails land in the inbox (not spam) for Gmail, Outlook and iCloud | P0 | ⬜ verify before inviting |
| OP-8 | Know when sync is broken: a saved SQL query listing each user's last sync time and device | P2 | ⬜ |

## 5. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | First answer ≤ 4 min from first open; lesson task transitions feel instant (no network on the answer path) |
| Offline | Every learner flow except sign-in, sync and the AI tutor works in airplane mode |
| Accessibility | Tap targets ≥ 44 px; WCAG AA contrast; correctness never by colour alone; reduced motion; dark mode; `lang` attribute on target-language words |
| Localisation | Full UI in Spanish (neutral *tú*) and English; no mixed-language strings; content glossed in both |
| Privacy | No third-party analytics; the AI key and stats stay on device; data stored in the EU; the admin's visibility stated before sign-in |
| Security | Row-level security on the server; no secret keys in the app or repo; PKCE for Google sign-in |
| Cost | €0/month at friends-and-family scale (Vercel Hobby, Supabase Free); AI tutor about $0.10/user/month on the user's own key |
| Quality bar | `npm run eval` ≥ 99% overall, every category ≥ 95%, zero open P0/P1 |

## 6. Release plan for accounts (this release)

1. Merge `accounts-sync` → Vercel builds. With no Supabase variables set, production is unchanged (AC-1).
2. Owner follows `docs/setup-accounts.md` steps 1–10 (~30 min), and §11 for Google (~15 min).
3. **Launch gates** (all must pass before the first friend):
   - RLS check on the real project (setup step 10): user B can't see user A's row.
   - Sign-in email arrives in the inbox for a Gmail, an Outlook and an iCloud address (OP-7).
   - On the owner's iPhone, **installed app**: email-code sign-in works; Google sign-in returns into the app (or the Google button is hidden there).
   - Two devices: a lesson on one appears on the other; Reset on one empties the other.
4. Invite 2–3 friends; watch for a week; then the rest.

**Rollback (turn accounts off):** remove the Supabase variables in Vercel and redeploy. What happens:
- Signed-in people keep the progress on their device and continue as guests. Nothing on the server is deleted.
- **People who signed out** have an empty device; their progress is only on the server and is stranded until accounts are turned on again. Before rolling back, check in Supabase whether anyone is in that state.
- Installed apps keep the old build until the service worker updates (usually the next open or two), so sync may keep running briefly.
- Turning accounts back on later: devices that were signed in still hold their session and sync state, so they resume and merge; nothing is lost. This path is not yet covered by a test.

**Recovering from a bad sync release:** there are no server backups on the free plan (06 §13). Ship a fix, and ask affected friends to export a backup from a device that still has good data.

## 7. Open questions (and the PM questions from the review)

1. Does Google sign-in return correctly into an **installed iOS PWA** on current iOS? (Test on the owner's iPhone before inviting iOS friends. If not, hide the Google button in iOS standalone mode.)
2. Gmail SMTP (500/day) versus Resend for the sign-in codes once there are more than ~10 friends.
3. Should a friend be able to see the inviter's name before signing in (needs invite links, v1.1)?
4. When should units 7–12 start, given most A2 goals will hit the end of the content in ~3 months? (Strategy now puts them in **Next**.)
5. What does success look like for the friends in 8 weeks: "still practising at week 6", or "I learned Italian"? Pick one primary.
6. Should the owner use the synced data (with consent) for the success metrics, instead of per-device exports? This would reverse "no analytics leaving the device", so decide it explicitly.
7. Who handles a friend's lost data late at night: the owner, or a self-serve backup? Today it's the owner plus the Export button.
