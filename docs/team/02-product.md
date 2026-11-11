# 02 · Product definition — Lingua v2

_Product manager · 2026-11-12 · Inputs: 00-brief, handover.md, v1 screenshots, web research (sources at end)._

**One-line product:** A calm, phone-first language app for adults with real goals. You tell it what you want and by when, it tells you honestly how much to practise, and every few minutes of practice add up to words you still remember a month later. Italian and German now. Spanish or English as the base language. Bring your own LLM if you like.

---

## 1. Target users & personas

**Who we serve:** adults (25–65) who have a reason to learn (a move, family, travel, an exam, a class they are already taking), little time, and no patience for being treated like a child or a slot machine. Speakers of a Romance language get a real head start with Italian, and the app should use it.

| Persona | Situation | Jobs-to-be-done |
|---|---|---|
| **P1 · Ana, 38, two languages at once** | Native Spanish, fluent English. Lives in a German-speaking city and takes a German evening class (about A2). Also learning Italian for family and holidays (some Duolingo, about A1). Uses iPhone at home and Android at work. | "When I have 15 minutes, help me keep **both** languages moving without me planning which one." "Let me add what we did in class tonight so it gets reviewed." "Don't let German crowd out Italian, or the reverse." |
| **P2 · Mateo, 61, Spanish → Italian** | Retired in Córdoba (AR). Italian grandparents. Trip to Italy in 4 months. Starts from zero but understands a lot from Spanish. | "Get me to real travel conversations by my trip." "Use my Spanish. Don't make me relearn what's already the same word." "Tell me plainly if I'm on track." |
| **P3 · Emma, 29, English → German from zero** | Moving for a job in 7 months. Needs everyday German and wants A2 by the move, B1 later. Motivated but anxious about grammar (der/die/das, cases). | "Tell me the minutes per day it takes to reach A2 by my move date." "Explain *why* I got it wrong, briefly." "Show me progress I can believe in." |
| **P4 · Priya, 34, the commuter** | Two kids, 8 minutes on the train with no signal in the tunnels. Learning Italian casually, with no deadline. | "One tap → useful 5-minute session, works offline, stops cleanly when my stop comes." "No guilt when I skip the weekend." |

The owner sits between P1 and P3. Designing for P1 forces multi-language support. P4 forces offline use and 5-minute sessions.

---

## 2. Product principles & what v1 got wrong

### Principles
1. **One obvious next action.** Open the app and the main button starts the right session. No decisions are needed to practise.
2. **Honest about learning.** Show what you *remember*, not XP. Projections come from published hour estimates and your real pace, with stated uncertainty.
3. **Habit, not hook.** We use cues, short sessions, visible progress and kind reminders. We never use guilt, fake scarcity, lives/hearts, or streak loss that punishes one missed day.
4. **Your goal drives the plan.** Goal → daily minutes → session size → new-vs-review mix. Change the goal and everything re-plans.
5. **The science is invisible but present.** Retrieval first, spacing, interleaving and error feedback are built into the session. Explanations are one tap away, never a wall of text on the home screen.
6. **Private and offline by default.** Everything stays on the device. An LLM is an optional add-on that uses your own key.
7. **Adults, not kids.** Calm visuals, plain language, respect for time.

### What v1 got wrong (owner: "not intuitive enough")
| v1 | Problem | v2 |
|---|---|---|
| Milestones tab (M0–M4, exam countdowns, conflict warnings) | Hard-coded to the owner's life. Dates are imposed, not chosen. A whole tab for something the user can't act on. | **Removed.** Replaced by *one goal per language*, shown as a single progress line on Progress. |
| "Ties to Italy" log | Personal citizenship artifact. Means nothing to anyone else. | **Removed entirely.** |
| Today screen has 5 cards (sleep note, session, milestone, 4-strands, ties) | Too much to read before practising. Theory (Nation's strands) shown as a dashboard. | Today = goal ring + **one Start button** + at most one contextual card (e.g., "12 mistakes to fix"). |
| Language-specific UI language (Spanish UI for Italian, English UI for German) | Confusing when you switch languages. Not a user choice. | One **base language** per user, chosen at onboarding, editable. |
| "German level" dropdown in settings | Placement buried in settings. | **Placement test** in onboarding, per language. |
| Settings expose internals (new items/day, plan start date) | User must tune the algorithm. | The user sets a goal. The app derives minutes and new items. An "Advanced" section lets experts tune it. |
| Progress shows accuracy-vs-confidence and strand percentages up front | Interesting, but reads like a lab report. Shows 19% recall on day 1, which is demoralising. | Lead with *level estimate, words remembered, goal projection*. Calibration insight moves to a detail view. |

**Keep from v1:** guess-first pretesting, the forgiving answer checker ("almost"), confidence ratings (silently, used for calibration), SRS, the speed round, add-from-class, and the warm visual tone.

---

## 3. Competitive analysis

| Product | Strengths | Weaknesses | Copy | Avoid |
|---|---|---|---|---|
| **Duolingo** | Best-in-class habit loop. DAU/MAU rose to about 35% (Q4 2024) and is reportedly about 40% by 2026. 10M+ users with year-long streaks. Adaptive placement test. Birdbrain personalises difficulty. Daily goal options 5/10/15/20 min. Published efficacy: finishing the beginner Spanish/French course gave reading and listening comparable to 4 university semesters (Duolingo-affiliated, with a skewed sample). | Optimises engagement, which sometimes trades against learning (their own team says so). Hearts, leagues and streak anxiety. Heavy recognition and little production. Thin grammar explanations. Max costs about $30/mo for AI roleplay/video call. | 5-min placement that adapts. Goal picker at onboarding. **Separating the daily goal from the streak** (their A/B test: +3.3% D14 retention). Weekend-tolerant streak ("Weekend Amulet"). A notification at a user-chosen time. | Hearts, leagues and loss-aversion copy. Fake urgency. XP as a proxy for learning. |
| **Babbel** | Structured, grammar-aware lessons written by linguists. Dialogues for adults. Review manager. Strong base-language specific content. | Little adaptivity, no meaningful goal planner, paywall at once. AI speaking ("Babbel Speak") is still in beta. | Base-language-specific explanations (Spanish speakers learning Italian get different notes). Short adult dialogues. | Lesson-linear rigidity. |
| **Busuu** | CEFR-aligned levels, a study plan with a target date, human (community) correction of writing and speaking. | Community feedback is slow and uneven. Gamification is generic. | **Study plan: "reach level X by date Y" → days/week.** CEFR language in progress. | Social features we can't moderate. |
| **Memrise** | Native-speaker video clips. Good vocabulary SRS. AI chat partner. | Content quality and direction have wobbled with several pivots. Weak grammar. | Real-speaker audio and context for items. | Constant reinvention. |
| **Anki** | The gold standard of spacing. FSRS (opt-in since 23.10) needs about 20–30% fewer reviews than SM-2 for the same retention (open benchmark, about 350M reviews). Fully offline. Data ownership. | No curriculum, a brutal UX, review backlogs that cause burnout. | **FSRS-class scheduling.** A retention target. Offline-first. Export of your data. | Review avalanches. Settings soup. |
| **Speak** | Conversation-first AI tutor, good speech recognition, confident speaking. | Expensive (about $16/mo+). Little grammar. Mostly English-as-target and a few targets. | Short, scenario-based speaking practice with instant feedback (via the user's LLM). | Black-box "you're doing great". |
| **Pimsleur** | 30-min audio, recall under time pressure, graduated interval recall. Great for commuters and pronunciation. | Expensive. Audio only. Little reading and writing. Slow pace. | **Anticipation (prompt → pause → answer → model)** as a hands-free/listen mode later. | 30-min fixed lessons. |
| **Coursera** | Deadlines and personalised schedules. Its data: learners on track with deadlines in weeks 1–2 are about 2× more likely to keep going. Research on goal-setting and implementation-intention prompts shows completion gains. | Not a habit app. | **Early-weeks commitment and an "if-then" plan** ("I'll practise after ___"). | Hard deadlines that turn into failure states. |

### Where Lingua can be distinctively better
1. **Honest goal planner.** "A2 in German by 1 June ≈ 35 min/day; your recent pace says August. Here are your options." Nobody does this with CEFR-hour evidence and kindness.
2. **Multi-language learners as first-class users.** One daily budget split across languages, with a fair mix and no fighting between two separate apps or streaks.
3. **Bring-your-own-model.** Free-answer grading, "explain my mistake" and roleplay at the cost of the user's own key (not $30/mo). Fixed algorithms stay the default, so it works offline.
4. **Learning-science honesty.** Progress = "words you'd still recall today (estimated)", not XP. A "you feel sure, but…" calibration insight. Sleep-aware review nudges.
5. **Base-language transfer.** Spanish → Italian cognates and false friends make the path for Spanish speakers measurably shorter, and we say so.
6. **Private and offline.** No account required, data on the device, export anytime.

---

## 4. Core user journeys

**CUJ-1 · First open → first lesson (target: under 4 minutes to the first answer, under 8 to the end of the first session)**
1. Welcome: "Learn Italian or German, at your pace." → *Start*.
2. **Base language:** "I speak… Español / English" (pre-selected from the device locale). The UI switches at once.
3. **Choose language(s):** Italian / German (multi-select). If two are picked: "We'll split your daily time between them. You can change it later."
4. **Prior experience** per language: "New to it / I know some / I've taken classes." This decides whether placement runs.
5. **Placement** (skippable, about 2–4 min, 8–15 items, adaptive up/down, "I don't know" button is fine). Result: "You're around **A1**. We'll start at *Unit X*, skipping what you know." Items answered correctly are seeded as known.
6. **Goal** (see §5): pick a goal type → date/level → app shows **recommended minutes/day** with a feasibility label → user accepts or adjusts with a slider and sees the projection update live.
7. **Habit cue (optional):** "When will you practise?" (morning coffee / commute / lunch / evening + time) → asks for notification permission *after* the explanation.
8. **First session** starts directly (short: about 5 min) → end screen: "You learned 6 words. Tomorrow we'll check you still remember them." → Today.

*Success:* ≥80% of new users answer their first item. ≥70% finish the first session. The goal is set by ≥60% (the rest default to "Casual 10 min").

**CUJ-2 · Daily return session**
1. Notification at the chosen time (one per day max, kind copy) → open → Today shows the goal ring ("0 / 15 min") and **Start**.
2. Session (sized to the plan): due reviews first, then guess-first new items, interleaved production, optional speed round. Exit anytime; progress saves after each item.
3. End: what you remembered, what's new, how today counts for the goal ("on track for A2 by June"). No forced upsell or extra lesson; "One more round" is optional.

*Success:* time to the first item under 3 seconds after open. Median session 5–15 min. ≥90% of started sessions save progress.

**CUJ-3 · Adding a second language**
1. Language switcher (top of Today) → "+ Add language" → choose → prior experience → placement → goal.
2. App proposes a **time split** (e.g., 15 min → German 10 / Italian 5 based on goal urgency). The user can adjust it.
3. Today then shows one Start per language, or "Start mixed session" (default for 2 languages: blocks by language, never items mixed within a block).

*Success:* a second language is added in under 3 min. The combined daily recommendation is shown before confirming.

**CUJ-4 · Reviewing mistakes**
1. After a session with misses, Today shows the card "8 things to fix" → tap → focused set: the item, your answer, the correct answer, a one-line why (fixed explanation; LLM explanation if connected).
2. Items re-enter SRS with short intervals. Progress → "Tricky items" lists persistent leeches.

*Success:* missed items are re-tested within 24 h. The leech rate drops over 2 weeks.

**CUJ-5 · Changing the goal**
1. Progress → goal card → *Edit*, or after a weekly check-in.
2. Change the type, level, date or minutes. The projection recalculates live. Confirm.
3. The plan re-sizes sessions from tomorrow. History is kept.

*Success:* done in under 60 s. No data loss. The new recommendation is visible on Today.

**CUJ-6 · Connecting an LLM (optional)**
1. You → "AI tutor (optional)" → explains what it adds and the privacy tradeoff (your answers go to the provider you choose) → choose a provider (Anthropic/OpenAI/other compatible) → paste your own API key → *Test* (one tiny call) → on.
2. Effects: free-text answers get graded with a short explanation. "Explain my mistake" appears. Later: roleplay.
3. If offline, there's no key or a call fails, the app falls back silently to the built-in checker.

*Success:* connected in under 2 min. Zero blocking failures when the LLM is unavailable. The key is stored only on the device and can be deleted in one tap.

**CUJ-7 · Offline use**
1. After the first load, the app (shell, content, audio where possible) is cached. Practise in a tunnel and progress saves locally.
2. Offline-unavailable features (LLM, some voices) are greyed out with "needs connection".

*Success:* a full daily session completes in airplane mode after one prior online visit.

**CUJ-8 · Backup / restore / move devices**
1. You → Backup → *Export* (a file saved via share sheet/download) → on the new phone, *Import* → preview ("2 languages, 340 items, goal A2 June") → confirm replace.
2. Monthly gentle reminder: "Your progress lives only on this phone. Back up?"

*Success:* round trip iPhone ↔ Android with no loss. Import of a malformed file fails safely and changes nothing.

---

## 5. Goal-setting design

### Goal options (per language)
| Goal type | User input | What we compute |
|---|---|---|
| **Reach a level by a date** ("A2 by June") | Target CEFR level + date | Min/day needed |
| **Get ready for a trip/event** ("travel conversations in 3 months") | Date + scenario (travel, work, family) | A scoped "survival kit" (about A1 + a scenario pack) → min/day |
| **Steady progress** ("casual 5 / regular 10 / serious 20 / intense 30+ min/day") | Minutes | Projected date for the next level |
| **Keep it alive** (maintenance) | — | Reviews only, about 5 min, few new items |

### Hours model (to be validated by learning science + linguist)
- **Cumulative guided learning hours from zero (Cambridge):** A1 ≈ 90–100, A2 ≈ 180–200, B1 ≈ 350–400, B2 ≈ 500–600. We use the low end, because an app session is denser than classroom time but narrower in skills. We say that it's an estimate.
- **Language multiplier (from FSI):** Italian 24 weeks / about 600 h vs German 30–36 weeks / about 750–900 h for English speakers → **German ×1.25 relative to Italian**.
- **Base-language transfer:** Spanish → Italian ×0.7 (assumption; cognates and grammar overlap; *needs learning-science confirmation*). English → German ×1.0 baseline. Spanish → German about ×1.05.
- **Practice days:** assume 6 days/week (a missed day is normal, not a failure).
- **Outside study counts:** a user in classes (P1) can log "class hours/week" once, and the projection includes them. That's honest and avoids "the app says 2 years".

`hours_needed = (hours[target] − hours[current]) × multiplier`
`min/day = hours_needed × 60 / (days_until_date × 6/7)` (from app time plus logged outside time)

**Worked examples** (app time only):
| Learner | Goal | Hours needed | Recommendation |
|---|---|---|---|
| Mateo (es→it, zero) | Travel kit (≈ A1 core, ~45 h) in 4 months | ~45 | ≈ 26 min/day · *Ambitious but doable* |
| Emma (en→de, zero) | A2 in 7 months | 180 × 1.25 = 225 | ≈ 75 min/day · *Very demanding* → offer: A1 by the move (≈ 30 min/day) + A2 three months later, or log a class |
| Priya (en→it) | Casual 10 min/day | — | Next level (A1) ≈ in 13 months; maintenance plus slow growth |
| Ana (de A2→B1 + classes 3 h/wk) | B1 in 9 months | (350−180) × 1.25 ≈ 212 − 117 class hours ≈ 95 h | ≈ 25 min/day German + 10 Italian |

**Feasibility labels:** ≤15 min *Relaxed* · 16–30 *Steady* · 31–60 *Ambitious* · >60 *Very demanding*, which always offers alternatives (later date, nearer level, add classes, narrower scenario). Caps: we never recommend more than 90 min/day of app time.

The app-time numbers are sobering. That honesty is a feature, and the "log your class/other practice" option keeps it from being demoralising. **Open question for the learning scientist:** do we credit app minutes 1:1 against guided hours, or apply a factor (e.g., production-heavy SRS ≈ 1.2× efficient for vocabulary but ≈ 0 for conversation)? For the MVP: 1:1, and we say so.

### Re-adjusting without guilt
- **Weekly check-in** (Sunday, or first open after 7 days, dismissible): "Last 2 weeks you averaged **11 min/day**. At that pace: A2 around **September** (goal: June)." Three equal-weight buttons: **Keep June → 24 min/day** · **Move goal to September** · **Keep pace, no date**. Neutral colours. No red, no "behind", no sad mascot.
- **Missed days:** no penalty and no streak reset. When you return after a gap: "Welcome back. We'll start with what you're likely to have forgotten." The session is reviews-first and the backlog is capped (never more than 1 session's worth of reviews; the rest are spread out).
- **Habit signal = weekly rhythm,** not a daily streak: "Practice days this week: ●●●○○ (goal 5)". Weeks in a row hitting your rhythm form the "streak". This follows Duolingo's own evidence that tolerant streaks (weekend amulet, freeze) retain better, without daily anxiety.

---

## 6. Information architecture (v2)

**Three tabs plus a language switcher.** That's all.

```
[Language switcher: 🇮🇹 Italiano ▾ | 🇩🇪 Deutsch | + ]   (top of Today & Progress)

1. Today      Goal ring (min today / target), Start (or Start both), one contextual card max
              (mistakes to fix | review after sleep | weekly check-in | backup reminder)
   └ Session  (full-screen, exit anytime) → Session summary
2. Progress   Level estimate (A1 → A2 bar), goal card + projection (Edit goal),
              Words remembered (known / learning / tricky), week rhythm.
              └ Details: calibration (sure vs right), skills mix, tricky items list
3. You        Languages & goals, base language, daily reminder, Add my own words,
              AI tutor (optional), Backup & restore, Advanced (new items/day, retention target),
              About the method
```

**Removed from v1:** Milestones tab, Ties to Italy log, plan start date, hard-coded exam/trip dates, the "German level" setting (→ placement), the 4-strands card on Today (→ Progress details), the per-language UI language (→ global base language). "Add from my class" → renamed **"Add my own words"** under You (and as a shortcut after a session for P1-style learners).

---

## 7. Metrics

**North star: Weekly Retained Items (WRI)**: items per active learner per week whose review was answered correctly after an interval of ≥7 days. It rewards remembering, not opening the app. It grows only when spacing and practice both happen.

| Category | Metric | Initial target (directional) |
|---|---|---|
| Learning | Recall rate on mature reviews (interval ≥21 d) | 85–90% (matches the SRS retention target) |
| | Items known (correct on ≥2 spaced reviews) per language | Rising weekly |
| | Level progress: estimated CEFR band from the item bank plus periodic 5-item check | Movement consistent with the projection ±25% |
| | Calibration gap ("sure" accuracy − 100%) | Shrinking |
| Goal | % of learners with a goal. % of weeks "on plan". Projected vs actual date drift | Goal set ≥60% |
| Engagement | D1 / D7 / D30 return. Sessions/week. Rhythm weeks met | D1 ≥ 50%, D7 ≥ 30%, D30 ≥ 15% (the education-app median D30 is roughly 2–8%) |
| Onboarding | Time to the first answer. Placement completion. First-session completion | under 4 min, ≥75%, ≥70% |
| **Guardrails** | **Retained items per minute** (efficiency, must not fall as time rises). Median session length (alarm if >25 min is common, which suggests compulsive use). Review backlog size. Notifications sent/day ≤1. LLM failures causing a blocked answer = 0 | |

**Measuring locally, privacy-first:**
- An append-only **event log on the device** (IndexedDB): `session_start/end, item_answered{correct, interval, confidence, mode}, goal_set/changed, checkin_choice, placement_result`. No identifiers. No network.
- Metrics are computed on the device and shown to the user in "Progress → Details" (transparency is part of the product).
- For the team: an **"Export anonymous stats"** button produces an aggregate JSON (counts and rates, no item text) that testers can email or paste. Later, optional opt-in telemetry to a minimal endpoint, off by default.
- For the judge (07): seeded test profiles plus a "simulate days" dev flag to validate D1/D7 flows and projections.

---

## 8. MVP scope: overnight build vs later

**Bar for tomorrow morning:** the owner opens it on her phone, in under 3 minutes picks Italian (from Spanish) and German, takes a short placement, sets a goal, sees "X min/day", completes a lesson, and thinks "this is a real language app, and obvious."

**MUST (overnight)**
1. Onboarding CUJ-1 complete: base language (es/en), multi-select languages, prior experience, **adaptive placement (8–15 items)**, **goal picker with the live min/day recommendation and feasibility label**, first session.
2. Today: goal ring, one Start button (plus "both" when there are two languages), max one contextual card (mistakes to fix).
3. Session: reuse the v1 engine (guess-first, recall modes, almost/miss feedback, SRS) with a cleaner end summary tied to the goal.
4. Progress: level bar, goal card + projection + Edit goal (CUJ-5), words remembered.
5. You: base language, languages & goals (add a second language, CUJ-3), backup export/import (CUJ-8, *tested*), reset.
6. All owner-specific content removed. UI strings in es + en.
7. Content: enough items per language to make placement meaningful (A0 → A2 bands, about 120+ per language, with glosses in es and en). That's a curriculum/linguist dependency.
8. Basic offline support: a service worker caching the shell and content (CUJ-7 for practice).

**SHOULD (if time allows, else next)**
- AI tutor connect (CUJ-6) with LLM grading of free-text answers plus fallback.
- Weekly check-in re-plan card.
- Week-rhythm dots. A daily reminder (web push is unreliable on iOS PWA, so in-app plus a calendar cue first).
- Review-mistakes focused mode (CUJ-4) beyond re-queuing.

**LATER**
- FSRS scheduler replacing SM-2. Roleplay/conversation with the LLM. Speech scoring. Pimsleur-style listen mode. Stories/reading input. More languages (fr, pt). Opt-in telemetry. Capacitor native wrap plus real notifications. Cloud sync. Exam-specific packs.

**Explicitly NOT doing:** leagues, hearts/lives, social feeds, ads, an account requirement, XP economy.

---

## 9. Inputs I need from others

| From | I need | By |
|---|---|---|
| **01 Curriculum** | A0–A2 unit map per language with CEFR can-do statements. Item tagging (level, unit, skill). Which items carry es *and* en glosses. A "travel kit" scenario pack definition (~45 h scope). | Before build |
| **03 UX** | Onboarding flow (7 steps, skippable placement). Goal picker with live slider/projection. 3-tab IA. Language switcher for 2 languages. Non-guilt copy for the check-in and the return after a gap. | Before build |
| **04 Engineering** | Feasibility of overnight scope. Placement algorithm (simple staircase vs IRT-lite). Service-worker plan in Next 16. BYO-LLM architecture (key storage, CORS/provider support from the browser, fallback). Local event log schema. SM-2 → FSRS later? | Before build |
| **05 Learning science** | Validate the hours model, the 1:1 crediting of app minutes, the es→it ×0.7 transfer factor, weekly-rhythm vs daily streak, notification policy, the recommended retention target (85% vs 90%), and placement length/accuracy. | Before build |
| **06 Linguist** | Accuracy review of all items and placement items. CEFR level tags. Spanish→Italian false-friend list. German article/case error patterns for feedback copy. | Before build |
| **07 Judge** | Run CUJ-1…8 against the build with personas P1–P4 at 375×812, including airplane mode and backup round-trip. | After build |

---

### Sources
- Duolingo Q4 2024 shareholder letter (DAU/MAU 34.7%, 10M+ year-long streaks): https://www.sec.gov/Archives/edgar/data/1562088/000156208825000039/q4fy24duolingo12-31x24shar.htm
- Duolingo Q2 2026 earnings (CURR 84%): https://www.fool.com/earnings/call-transcripts/2026/08/12/duolingo-duol-q2-2026-earnings-call-transcript/
- Duolingo, "Improving the streak" (goal/streak separation A/B): https://blog.duolingo.com/improving-the-streak · Streak wager / weekend amulet: https://making.duolingo.com/how-streaks-keep-duolingo-learners-committed-to-their-language-goals
- Birdbrain: https://blog.duolingo.com/learning-how-to-help-you-learn-introducing-birdbrain · IEEE Spectrum: https://spectrum.ieee.org/duolingo · Placement: https://blog.duolingo.com/partial-credit-improvements-to-duolingos-placement-test/
- Duolingo efficacy (Jiang et al. 2021): https://duolingo-papers.s3.amazonaws.com/reports/Duolingo_whitepaper_language_read_listen_2021.pdf · critique: https://callej.org/index.php/journal/article/download/419/347/1013
- Duolingo Max: https://www.engadget.com/duolingos-max-plan-offers-ai-tutoring-for-30-per-month-203625446.html · https://storylearning.com/duolingo-max-review
- Cambridge guided learning hours: https://support.cambridgeenglish.org/hc/en-gb/articles/202838506 · LanguageCert: https://www.languagecert.org/Guided-Learning-Hours
- FSI difficulty (Italian 24 wk; German 30–36 wk): https://en.wikibooks.org/wiki/Language_Learning_Difficulty_for_English_Speakers
- FSRS benchmark: https://expertium.github.io/Benchmark.html
- Coursera early deadlines: https://blog.coursera.org/from-start-to-finish-how-early-course-design-can-drive-online-learner-completion · Kizilcec et al. 2020: https://www.sciencedaily.com/releases/2020/06/200615152116.htm
- Babbel/Busuu/Speak comparisons (secondary): https://toolradar.com/compare/busuu-vs-babbel · https://toolradar.com/compare/speak-vs-babbel
- App retention benchmarks (secondary): https://lovable.dev/guides/what-is-a-good-retention-rate-for-an-app
