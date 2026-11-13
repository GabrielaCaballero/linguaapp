# 01 · Strategy

_2026-11-13 · Status: current; revised after the Director PM review the same day. Sources: docs/team/00-brief, 02-product, 05-learning-science, 41-accounts-product-ux, decisions.md._

## 1. Why Lingua exists

Busy adults who learn a language for a real reason have two kinds of tools today:

- **Gamified apps** (streaks, leagues, hearts). They keep you opening the app, but they optimise for opening, not for remembering. They are also built for one language at a time and treat a Spanish speaker learning Italian like any other beginner.
- **Classes and textbooks.** They have real structure, but they have no memory model and nothing for the eight minutes on a train.

Lingua is the calm middle. **You tell it what you want and by when. It tells you honestly how many minutes a day that takes, and every 5 minutes of practice turn into words you still remember a month later.**

## 2. Who it is for

Adults aged 25–65 with a reason to learn: a move, family, a trip, a class they already take. They have little time and no patience for being treated like children. Four personas drive every decision; a fifth was added with accounts.

| Persona | What they need | What it forces into the product |
|---|---|---|
| **P1 Ana, 38.** Spanish speaker learning German (in a class) and Italian (for family) at once | Keep both languages moving without planning | Several languages, a per-course "explain in" language, one shared daily goal |
| **P2 Mateo, 61.** Spanish → Italian from zero, trip in 4 months | Use the Spanish he already has, and plain "am I on track?" | Spanish→Italian bridges, honest goal maths, a large and readable UI |
| **P3 Emma, 29.** English → German from zero, moving in 7 months | Believable numbers, short "why was I wrong?" answers | Goal calculator, a precise answer checker, a one-line note on every miss |
| **P4 Priya, 34.** Commuter, 5–10 min a day, often offline | One tap, works in a tunnel, no guilt | 5-minute sessions, offline-first, no daily streak |
| **P5 Lucía, 45.** Friend invited by the owner, wary of sign-ups | "I started in a minute and nobody made me register" | Guest-first. An account is optional and only adds sync |

**Primary user today:** the owner and roughly 5–20 invited friends. This is a **personal product shared with friends**, not a startup, and that shapes every cost and scale decision below.

## 3. How Lingua wins (the bets)

1. **Memory, not engagement.** A real memory model (FSRS) chooses what you review. We show how much you remember a week later (for example "remembered after a week: 87%"), not XP.
2. **Honest goals.** Hours come from published course estimates, adjusted for your language pair (Spanish→Italian ×0.7). If your goal is unrealistic, the app says so and offers two alternatives.
3. **Your first language is an asset.** Spanish speakers get cognate rules and false-friend warnings for Italian. Every item is glossed in both Spanish and English.
4. **One obvious next action.** Today shows one ring and one Start button. You never have to decide what to practise.
5. **Private and offline by default.** Everything works with no account and no network. An account only adds sync. The optional AI tutor uses your own key, and that key never leaves your phone.
6. **Accurate grading.** A linguistically careful answer checker: accents count as "almost", articles must be exact, and a typo can never turn *nonno* into *nono*. An optional LLM can only *raise* a grade, never lower it.

## 4. What we will not do (non-goals)

- No daily streak, hearts, leagues, leaderboards, guilt notifications or fake scarcity.
- No account required to practise, ever.
- No public sign-up. Access is by invitation from the owner.
- No ads, no tracking, no analytics leaving the device. Metrics are on-device and exported by hand.
- No server code of our own: no API servers to run, patch or pay for.
- No content beyond A2 in 2027. Units 7–12 (to A2) are the next content push; B1 waits until friends reach A2.
- No in-app social graph in v1.

## 5. Success: how we know it works

At friends-and-family scale, a dashboard means little. The real signals are qualitative (a monthly chat with each friend) plus numbers each tester copies from **Me → Stats for testers**. That export is per device (on-device events never sync), so a friend with two devices sends both.

**North star: Weekly Retained Items (WRI)**, the number of answers in a week that were right after a gap of at least 7 days since that word's last review. It grows only when spacing and practice both happen, so it rewards remembering, not opening the app.

| Goal | Signal | Target | How it's measured today |
|---|---|---|---|
| They actually remember | **WRI** per active learner per week | rising week over week for the first 8 weeks | `signals.weeklyRetainedItems` in the export |
| People come back | Practice days per week | ≥ 4 of 7, median, after week 2 | `signals.practiceDaysPerWeek` (last 4 weeks) |
| The scheduler is calibrated | "Remembered after a week" (first review at ≥ 7 days) | ≥ 85% (FSRS aims at 90%; this checks calibration, not learning by itself) | `perLang.rememberedAfterWeek` |
| Sessions feel right | Sessions (≥ 10 answers) inside 75–90% accuracy | ≥ 70% of sessions | `signals.sessionsInComfortZonePct` (and the strict 80–85% band) |
| Goals are honest | Projected date holds within ±2 weeks at the 4-week check | ≥ 60% of users | **Not measured yet:** ask at the monthly chat; add to the export later |
| Getting started is easy | Open → first answer | ≤ 4 min (placement or first item) | e2e CUJ-1 timing; no open event recorded on device |
| Accounts don't hurt | Friends who signed in and lost no progress | 100% (P0 if not) | Friend reports + sync evals |
| Quality | Evals passing; open P0/P1 | ≥ 99%, every category ≥ 95%; 0 | `npm run eval` |

## 6. Roadmap

| Horizon | Theme | Items |
|---|---|---|
| **Now (shipping)** | Share with friends | Accounts + sync (email code), Sign in with Google, install hint on Welcome, owner setup guide and launch gates. Owner turns on Supabase and invites ~5 friends |
| **Next** | Content runway, then effortless sharing | **Units 7–12 (to A2) and an end-of-content state** come first, because friends on A2 goals reach the end of Unit 6 in roughly 6–10 weeks. Then v1.1 sharing: `/i/CODE` invite links, one-time "Save your progress" offer, illustrated iOS install sheet, "Share my week". **Trigger for v1.1:** at least 3 friends practising ≥ 3 days a week, or 2 friends asking how to invite someone |
| **Later** | Depth | Speaking practice polish; stories/dialogues; a rioplatense Spanish UI locale; opt-in study buddies (one shared weekly target); server backups |
| **Only if needed** | Native shell | Capacitor wrapper for real push reminders and store presence (see §7) |

## 7. Should Lingua become a native app?

**Not yet.** The installable PWA already gives the home-screen icon, full-screen use and offline practice. Accounts now give each friend their own synced profile. A native app would add App Store review, a developer account (Apple $99/year), and a second release process, for a few users.

**What would change the answer:**

- Friends use it daily, **and** they ask for reminders. Push notifications on iOS PWAs work only after install (iOS 16.4+) and are less reliable. This is the strongest trigger.
- iPhone users hit storage eviction (iOS can clear PWA data after weeks without use). Sync now protects against this, which weakens this trigger.
- Someone wants it in the App Store to find or trust it.
- Google sign-in can't return into the installed iPhone app (a native wrapper handles OAuth returns properly). The email code works either way, so this alone is a weak trigger.

**Decision point:** revisit on 2027-02-01 with four weeks of friend data.

**We kept the door open on purpose:** there is no server code, sign-in uses a typed code rather than a link, and storage goes through one adapter. Wrapping the same app in Capacitor is a weekend of work, not a rewrite.

## 8. Risks

| Risk | Likelihood | Mitigation |
|---|---|---|
| Content runs out (6 units ≈ A1) before goals are reached | High for A2 goals | Goal screen says "more units coming"; next content push is units 7–12 |
| The owner becomes a support desk (invites, lost codes, Supabase pause) | Medium | Invite-only via dashboard; a 10-step setup guide; free tier pause is harmless because the app is offline-first |
| Sync loses progress, or brings deleted progress back | Low, P0 if it happens | Merge keeps every answer; deletions and resets are remembered (epoch + tombstones); 150 sync evals; launch gates in PRD §6. No server backups yet |
| Privacy expectations: the admin can see friends' progress | Certain | Said plainly before sign-in; no AI key or on-device stats uploaded; delete-account in-app |
| iOS PWA quirks (storage, OAuth return, audio voices) | Medium | Email-code sign-in always available; manual device checks before inviting |
| Friends open the link inside WhatsApp/Instagram and never install | High | Welcome install hint now; illustrated install sheet in v1.1 |
| Spending the next quarter on both content and distribution | Medium | Content first (see Roadmap) |
