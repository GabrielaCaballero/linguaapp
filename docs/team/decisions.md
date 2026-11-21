# Decision log

Format: date · who · decision · why

- 2026-11-12 · orchestrator · Work on branch `v2-redesign`; `main` stays as the v1 prototype · Owner reviews in the morning; nothing she has today breaks.
- 2026-11-12 · orchestrator · Remove owner-specific content (Lavello, citizenship, exam dates, fide, Zurich, Ties log, fixed milestones) · Owner asked for a general language-learning app.
- 2026-11-12 · orchestrator · Base language becomes a user setting (Spanish / English in v2) · General app; owner wants Italian from Spanish.
- 2026-11-12 · orchestrator · App must work without an LLM; LLM grading is optional bring-your-own-key · Offline/Capacitor path, privacy, cost.
- 2026-11-12 · orchestrator · Engagement must be ethical (habits yes, dark patterns no) · Learning outcomes and trust over raw time-in-app.
- 2026-11-12 · orchestrator · Added a 6th specialist: native-speaker linguist · Content accuracy is the biggest risk with generated course material.
- 2026-11-12 · linguist · German content uses standard spelling with ß as the primary answer; Swiss "ss" is accepted as fully correct, and Swiss/Austrian forms (Grüezi, Grüß Gott, Natel) appear only as labeled regional notes · General app; ß is the norm in DE/AT, and ss is legitimate Swiss standard, so it shouldn't be penalized.
- 2026-11-12 · linguist · Spanish glosses are written in neutral Latin American Spanish with tú (no voseo), and both words are given where vocabulary differs (boleto/billete, mantequilla/manteca) · Reaches every Spanish speaker; the owner understands it fully; a rioplatense UI locale can come later.
- 2026-11-12 · linguist · The answer checker never treats articles, prepositions, case endings, auxiliaries, Italian double consonants or German umlauts as "typos": fuzzy matching applies only to content words · v1's whole-string Levenshtein accepts nono/nonno, la zio, den/dem and schon/schön, which are exactly the things we teach.
- 2026-11-12 · linguist · Register is taught from A1 in both languages (tu+Lei, du+Sie) and items are tagged formal/informal; the learner's own sentences are gender-neutral or offer both forms · Learners need service-encounter politeness and peer speech immediately; v1 assumed a female learner.
- 2026-11-12 · linguist · Speech recognition is used only for "said roughly the right phrase", never to grade pronunciation or minimal pairs; TTS gets a separate spoken-text field (numbers and abbreviations spelled out) · Web Speech recognition auto-corrects toward real words, and TTS misreads digits and abbreviations.
- 2026-11-12 · ux · Navigation collapses to 3 tabs (Today · Path · Me); lessons/onboarding are full-screen flows; Milestones, Ties and More removed as tabs · v1 had 5 competing cards on Today and 2 tabs the owner disliked; one obvious next action.
- 2026-11-12 · ux · Home is "one big button" + daily-minutes ring; primary actions always pinned in the bottom thumb zone · Owner found v1 not intuitive; thumb reach and clear hierarchy.
- 2026-11-12 · ux · Feedback is a bottom sheet with colour + icon + motion + haptic (sound opt-in, off by default); incorrect = gentle nudge, never a buzzer · Felt, immediate error feedback (Dehaene) without punishment; iOS lacks navigator.vibrate so haptics are progressive enhancement.
- 2026-11-12 · ux · Per-language accent theme (Italian terracotta #C4452A, German Rhine blue #2E5BD8) via [data-lang], full light+dark tokens; no flags in UI chrome · Each course feels like its own world; languages ≠ nations (Swiss/Austrian speakers).
- 2026-11-12 · ux · Fonts: Fraunces (target-language words, titles) + Inter (UI) via next/font, self-hosted · Keeps v1's warmth, more modern/legible, works offline.
- 2026-11-12 · ux · Learning-science explanations move out of the flow (ⓘ / results insight / About page); confidence rating becomes optional chips · v1 lectured mid-lesson; show, don't tell.
- 2026-11-12 · curriculum · Unit order follows textbook consensus (sounds+greetings → self-intro → numbers → articles/food → family → home; first past tense at end of A1), 6 units per language in v2 slice (~125 items each) · Menschen/Netzwerk/Nuovo Espresso/Progetto italiano all converge on this; CEFR can-do driven.
- 2026-11-12 · curriculum · Every item stores the target once with glosses in BOTH es and en; teaching notes written per base language (not translated) · Makes base language a true setting at low cost.
- 2026-11-12 · curriculum · Spanish↔Italian (and English↔German) cognate patterns and false friends become an optional per-base-language "bridge" layer attached to the unit where each word appears · Biggest accelerator for Spanish speakers, meaningless for others.
- 2026-11-12 · curriculum · German canonical spelling is standard DE (with ß); CH/AT forms stored as variants and always accepted · General app; v1's Swiss-first default was owner-specific.
- 2026-11-12 · curriculum · Hour targets use Cambridge cumulative guided hours (A1 ~90, A2 ~190, B1 ~375), German at top of band, Italian-from-Spanish ×0.65–0.7 (to be validated by learning science) · Feeds the goal → minutes/day calculator with sourced numbers.
- 2026-11-12 · curriculum · Placement: self-report gate + adaptive 4 bands × 6 items (≤24), start = band after highest passed, passed items seeded into SRS as "probably known" · Short, self-correcting; extra grammar/false-friend weight for es→it to offset cognate inflation.
- 2026-11-12 · learning-science · Session engine targets ~80–85% success on graded items (adds new items when >90%, eases off when <70%) · Right difficulty maximises learning (Wilson et al. 2019 "85% rule", ZPD, desirable difficulties); v1 used a fixed new-per-day.
- 2026-11-12 · learning-science · Weekly goal ("4 of 5 days") is the primary habit metric; any day streak is opt-in, has 2 rest days/week, and never triggers loss-framed notifications · Lally 2010: a missed day doesn't harm habit formation; daily-streak loss aversion drives anxiety, not learning.
- 2026-11-12 · learning-science · The "snack feed" (Instagram-like swipe of micro-exercises) is always finite (10–15 cards + calm end card) · Borrow quick feedback and honest surprise from social media, never the no-stopping-point infinite scroll.
- 2026-11-12 · learning-science · Placement = 3 can-do self-ratings + adaptive staircase test (15–25 items, ~4 min, "I'm a beginner" skip, "I don't know" option), then continuous calibration via seeded reviews · Self-assessment alone is unreliable (Ross 1998); short adaptive tests place well; seeding self-corrects placement errors.
- 2026-11-12 · learning-science · Max 1 notification/day at the user's chosen anchor time, useful content only, auto-silenced after 2 ignored days · Alerts raise inattention and lower wellbeing (Kushlev et al. 2016); implementation intentions tie habits to cues.
- 2026-11-12 · learning-science · Progress shows delayed retention ("remembered after a week"), "words you can use", and can-do ticks — not XP or minutes · Practice performance ≠ learning (Bjork); delayed, production-based checks prove learning.
- 2026-11-12 · product · v2 IA is three tabs (Today, Progress, You) plus a language switcher; Milestones tab and Ties log removed · Owner found v1 not intuitive; one obvious next action beats five dashboard cards.
- 2026-11-12 · product · Goal drives the plan: user picks a goal (level by date / trip / steady minutes / maintenance) and the app computes min/day from Cambridge CEFR hours × language multiplier (German ×1.25, es→it ×0.7, pending learning-science validation) · Owner's core ask; honest, evidence-based projections are our differentiator.
- 2026-11-12 · product · Habit signal is a weekly practice rhythm (e.g., 5 of 7 days), not a daily streak that resets; replanning is offered neutrally (keep date / move date / keep pace) · Ethical engagement; Duolingo's own data shows tolerant streaks retain better.
- 2026-11-12 · product · North star = Weekly Retained Items (correct recalls after ≥7-day interval); guardrail = retained items per minute; all metrics computed on-device · Measures learning, not time-in-app; no backend, privacy-first.
- 2026-11-12 · product · Overnight MVP = onboarding (base lang, multi-language, adaptive placement, goal picker), Today, Session (v1 engine), Progress, You (backup, add language), basic offline; BYO-LLM is SHOULD, not MUST · Owner must feel "real, intuitive app" tomorrow; LLM must never block core use.
- 2026-11-12 · product · No account, leagues, hearts or XP economy in v2 · Adult audience, privacy, and ethical-engagement standing decision.
- 2026-11-12 · engineering · Grading is deterministic-first: the on-device checker always gives the verdict; an LLM is consulted only on non-exact answers, can raise a grade by at most one step (never to Easy, never down), and never touches scheduling or placement · Works offline, costs nothing by default, and a hallucinated "correction" can never punish a correct answer (mirrors Duolingo: ML/LLM explain, curated answers decide).
- 2026-11-12 · engineering · Replace SM-2 with FSRS (`ts-fsrs`), migrating v1 cards by replaying review logs; desired retention becomes the goal "dial" · Pre-fitted memory model on huge public data (our stand-in for Duolingo's HLR) and it turns a goal into a reviews/minutes-per-day estimate.
- 2026-11-12 · engineering · Placement = IRT-lite adaptive test (Rasch model, EAP estimate, ≤15 items, CEFR-seeded item difficulties, partial credit from checker) · Same principle as Duolingo's adaptive placement; small enough to build overnight and verify by simulation.
- 2026-11-12 · engineering · LLM is bring-your-own-key, called directly from the browser via a provider interface (Claude first; OpenAI/Gemini/local pluggable); key stays on-device, excluded from backups; no Vercel proxy in v2 · Keeps the app server-free (static export / Capacitor), owner pays nothing for others, privacy; proxy only if we ever bundle LLM access.
- 2026-11-12 · engineering · Storage stays localStorage behind an adapter with a versioned v1→v2 migration chain; add a hand-written service worker for offline cold start; Vitest for unit tests · Smallest change that fixes offline and schema evolution; adapter keeps IndexedDB/Capacitor storage open.
- 2026-11-12 · product (spec) · Tabs are Today · Path · Me (UX version); progress lives in Me, settings pushed from Me · Path gives the missing "where am I in the course"; still 3 tabs.
- 2026-11-12 · product (spec) · Scheduler = FSRS (ts-fsrs, retention 0.90, Maintain 0.85) behind a schedule() interface; fall back to SM-2 if it blocks >1 h · Better memory model at no data cost; one dial for goals; logs kept either way.
- 2026-11-12 · product (spec) · Placement = self-report gate + Rasch/EAP adaptive test, 8–15 items (stop at SE<0.45), "I don't know" and "I'm a beginner"; 30-item bank per language (6 × A0/A1.1/A1.2/A2/B1) · 3–4 min respects adults; simulation-verifiable; seeded reviews fix misplacement.
- 2026-11-12 · product (spec) · Spanish glosses neutral Latin-American tú (both words where they differ); rioplatense locale deferred despite owner being Argentine · Reaches all Spanish speakers and the owner reads it effortlessly.
- 2026-11-12 · product (spec) · Goal hours A1.1 45 / A1 90 / A2 190 / B1 375; multipliers es→it 0.7, en→it 1.0, en→de 1.25, es→de 1.3; plan on 5 practice days/week; >45 min/day = "very demanding" with two alternatives · Cambridge + FSI, honest and labelled as estimates.
- 2026-11-12 · product (spec) · No daily streak in v2; habit signal = practice days this week (any language) · Removes loss-aversion; one missed day doesn't harm habits (Lally).
- 2026-11-12 · product (spec) · App language (UI) is global; "explain in" (glosses/notes) is per course · Lets a learner do Italian from Spanish and German from English; content has both glosses anyway.
- 2026-11-12 · product (spec) · Path nodes = units (not lessons); sessions are 5-minute chunks repeated until the daily ring fills · Buildable overnight; commuter-friendly natural stopping points.
- 2026-11-12 · product (spec) · Content contract (src/content/schema.ts) is frozen; content stream writes only src/content/**, engine imports only @/content; items carry legacyId for v1 progress migration · Two parallel streams without file conflicts; owner's real progress survives.
- 2026-11-12 · product (spec) · AI tutor in v2 = Claude only (claude-haiku-5-5, BYO key, browser-direct), below the cut line; may raise a grade one step, never lower, never Easy · Owner asked to explore; must never block or punish; ~$0.10/month.
- 2026-11-12 · product (spec) · No push notifications in v2 (anchor time stored, in-app chip only); snack feed, stories, speak polish and roleplay deferred · iOS PWA push is unreliable; overnight scope.
- 2026-11-12 · content · Unit files use a small helper (`src/content/build.ts`) that fills lang/unit/full id/spoken and auto-adds the Swiss "ss" spelling to `accept` for any German target with ß · Less boilerplate, fewer typos; ss acceptance is explicit in data, not only in the checker.
- 2026-11-12 · content · MCQ keys are authored as option 0 and rotated deterministically per id (`rotateMcq`), for unit questions and placement · Engine may or may not shuffle; this guarantees the key isn't always in the same slot, and output is stable across builds.
- 2026-11-12 · content · Plural-only German nouns (die Eltern, die Geschwister) and country/language names are `pos: "other"` (with `plural`, no gender) · Schema test requires gender for every noun, and inventing a gender for a plural-only noun would teach something false.
- 2026-11-12 · content · v1 items marked R by the linguist (Lavello, comune paperwork, Zurigo, Grüezi, Sono argentina, bisnonno) are dropped with no legacyId; every other v1 item is kept (fixed) with its legacyId, many as `bridge` items in the unit where the word appears · Owner's progress survives (R15) without carrying any owner-specific string, even in ids.
- 2026-11-12 · content · Spanish glosses give both regional words where they differ: apartamento (departamento), boleto (billete), celular (móvil), jugo (zumo), cruasán (medialuna), mantequilla (manteca), falda (pollera); "Chao/Chau" avoided in glosses · R4 neutral tú, readable everywhere.
- 2026-11-12 · content · Units run 25–30 items (spec said ~15–25) because number and bridge items are small; es-only bridges inflate Italian counts but an en learner sees ~22–26 · Kept quality items rather than cutting; session builder only introduces ~5 new per chunk anyway.
- 2026-11-12 · content · `reviewed` is left unset on every item · It should mean a human native-speaker sign-off; AI self-check is documented in 12-build-content.md instead.
- 2026-11-12 · engine · `next.config` reads `distDir` from `NEXT_DIST_DIR` (default `.next`); v2 dev/build run with `NEXT_DIST_DIR=.next-v2` · A v1 `next start -p 3200` (owner's phone server) serves from `.next`; building v2 into `.next` would break it.
- 2026-11-12 · engine · FSRS runs with `enable_short_term: false`, no fuzz; any interval ≥ ½ day rolls to 04:00 local · Misses come back "tomorrow morning" (drives the "N to fix" card); in-session requeue covers the short term; deterministic tests.
- 2026-11-12 · engine · v1 migration keeps the v1 due date after replaying logs into FSRS (stability from the replay, or = interval with no logs) · CUJ-12 asks for due dates ±1 day; replayed dues would otherwise jump.
- 2026-11-12 · engine · A placed band counts as halfway through it for goal maths (A1.1 22.5 h, A1.2 67.5 h, A2 140 h, B1 282.5 h) · H[] are end-of-level hours; using the end would overstate progress, the start would understate it.
- 2026-11-12 · engine · Speed round is logged but never reschedules cards · A 60 s tap race measures fluency, not memory; it must not punish or inflate FSRS.
- 2026-11-12 · engine · LLM-raised grades: wrong→almost (Hard), almost→correct (still Hard via source "llm"); "I was right" = Good + an `alt_candidate` event · Spec R12/§4.10: raise ≤ 1 step, never lower, never Easy; overrides feed the linguist's alt list.
- 2026-11-12 · engine · Default goal level = one step beyond the placed band (A0/A1.1→A1, A1.2→A2, A2/B1→B1); the live commitment card is pinned above "Set my goal" · First test showed the card below the fold — the owner's key ask must always be visible.
- 2026-11-12 · engine · Typed-answer feedback focuses Continue after 250 ms · The Enter that submitted the answer otherwise also "clicked" Continue and the sheet vanished.
- 2026-11-12 · engine (fix round) · Full-screen flows get a per-visit nonce in the URL (`src/lib/nav.ts`) and key their state on `useSearchParams()` · cacheComponents keeps routes alive in `<Activity>`, so a second `/lesson` visit reused the old session (judge P0-1).
- 2026-11-12 · engine (fix round) · Placement maps θ to a **unit**, not a band: units in a band are spread across it (the top band of the slice is stretched over the next band), start = first unit with θ − SE < b(unit) + 0.3, seeds = only units before the start unit, "Start lower/higher" moves one unit; es→it reading items weigh ×0.6 · Content tags units 2–6 all A1.1, so any A1.2+ result jumped to Unit 6 and seeded the whole course (judge P0-2). No content change was needed.
- 2026-11-12 · engine (fix round) · A lesson keeps adding chunks (up to 8) until the chosen minutes have really passed; Results offers "One more round"; misses of the session/yesterday open the next lesson · "5 min" must mean 5 minutes and the ring must be fillable (judge P1-1, P1-3).
- 2026-11-12 · engine (fix round) · Default goal = Steady 15 min/day, capped so all languages total ≤ 30 by default; >90 min shows "90+"; goals above A1 say "more units coming" · Judge P1-2/P1-5/P1-11: no "Very demanding" default, honest numbers, honest course scope.
- 2026-11-12 · engine (fix round) · No weekly check after a ≥ 7-day break or with a 0 average; projections beyond 2 years read "more than 2 years away" · Judge P1-4 (Feb 2034).

## 2026-11-12 · QA eval round: content fixes from the linguist audit (31-eval-log.md)
- de: 9 give-away distractors replaced. A capitalised noun among the options for a lowercase target gives the answer away in German: zehn (Zahn→zehnte), hundert (Hund→hundertste), buchstabieren (Buchstaben→buchstäblich), essen (Essig→vergessen), groß (Gras→grau), hell (Held→schnell), dunkel (Dunst→dumm), teuer (Tür→neu), billig (Bild→bissig).
- de-u01-wie-gehts: the en gloss now ends "(informal)". It was ambiguous with "Wie geht es Ihnen? = How are you? (formal)".
- de-p-30: the key was a word-for-word copy of "Filiale am Marktplatz". It is now paraphrased ("At another branch of the library, in the town centre").
- it-u02-spagnolo: distractor «spagnuolo» (an old-fashioned but correct spelling) → «spagnoli».
- it-u04-tramezzino: en gloss "the triangle sandwich" → "the tramezzino (crustless sandwich)".
- it-p-27: distractor «avrà» is grammatical after *penso che* in speech → «abbiamo».
- it lexicon: minimal pairs quanto/quando and venti/vento added, so a typo can't turn "how much" into "when".

## Accounts (accepted 2026-11-12 by owner; built on branch accounts-sync)
- 2026-11-12 · lead · Reverse "No account in v2": add an optional account so friends get their own profile synced across devices; guest mode stays the default and never needs an account · Owner wants to share with friends (see 40/41/42-accounts-*.md).
- 2026-11-12 · lead · Supabase (EU region) for sign-in + Postgres with row-level security, called from the browser only · One free vendor, no server code, keeps the static/Capacitor path open.
- 2026-11-12 · lead · Sign-in with a 6-digit email code, no passwords, no magic link · On iOS a link opens Safari, whose storage is separate from the installed app.
- 2026-11-12 · lead · Invite-only v1 = owner adds friends in the Supabase dashboard (sign-ups closed); in-app /i/CODE invite links deferred to v1.1 · Zero code for access control, and the friend list is small.
- 2026-11-12 · lead · One state document per user with rev + a lossless mergeDB (reviews never dropped); the AI key never syncs · Simple, and two devices can't erase each other's progress.
- 2026-11-12 · lead · No in-app social in v1, only a "Share my week" card; opt-in study buddies maybe in v1.1 · Consistent with no leagues / no comparison.
- 2026-11-12 · lead · "Reset everything" while signed in also deletes the synced copy · Otherwise the next sync would bring the reset progress straight back.
- 2026-11-12 · lead · Deferred from 41-product-ux: the one-time "Save your progress" offer on the first results screen, /i/CODE invite links, Google sign-in, "Share my week" card · Ship the core sync first; add after the owner's friends have used it.
- 2026-11-13 · lead · Sign in with Google built (pulled forward from the deferred list at the owner's request), behind `NEXT_PUBLIC_AUTH_GOOGLE=1`; PKCE flow; returns to /account on the same origin; email code stays as the always-available fallback · Friends asked for a one-tap option; the flag keeps production unchanged until the owner sets up a Google OAuth client.
- 2026-11-13 · PM · Consolidated product docs in `docs/product/` (strategy, PRD, CUJs, flows, design, architecture) supersede the working papers in `docs/team/` where they disagree; CUJ numbering 14–20 now matches the tests · One current source of truth for new collaborators and reviewers.
- 2026-11-13 · lead (review fixes) · Sync: the server row is never deleted (rev only increases); Reset / import / "Use this device" set a new `epoch` and replace the account copy, other devices adopt it; removed courses and custom words leave tombstones; unknown fields are kept; a newer document format puts older apps in "Update Lingua" and they never write · Uber TL review P1-3/P1-5: deletions came back and a restarted rev could skip a merge.
- 2026-11-13 · lead (review fixes) · Background sync starts as soon as the engine finishes the first sign-in; sign-out waits for a running sync and discards late answers; uploads at lesson end, on hide, and at most every 2 min (was 20 s) · Uber TL P1-1, P1-2, P1-4.
- 2026-11-13 · lead (review fixes) · Hardening: table privileges revoked from `authenticated` then select/insert/update granted; queries also filter by user id; page CSP limits connect-src to self, Supabase and Anthropic; Google disabled offline, "different browser" message, stray ?code handed to /account · Uber TL P2.
- 2026-11-13 · PM (review fixes) · Privacy copy names what the admin sees (answers with times, goals, own words); Welcome install hint; tester export adds WRI (north star), practice days/week and session accuracy band; Strategy puts units 7–12 + end-of-content before v1.1 sharing; launch gates and owner-ops runbook added · Director PM review.
- 2026-11-13 · owner + lead · **Server-first progress.** With accounts on, the account holds the full history (new `user_reviews` table, one row per answer, insert-only, sent once); the phone keeps state + the last 45 days of answers/events (≤ ~1 MB) and still works offline; Welcome leads with Sign in, guests get one "Save your progress" offer on Results · Owner's concerns: phone storage, and progress must follow people with no downloads or exports. Online-only rejected: it would break practising offline.
## 2026-11-13 · Content to B2 (branch `claude/content-to-b2-f81709`)
- 2026-11-13 · content+engine · **Schema change:** `Cefr` gains `"B2"` (no A2.1/B1.1 sub-bands) · Placement bands are one logit wide and goal hours exist only per CEFR level; finer tags would need invented Rasch centres and hour figures with no source. Order inside a level is already given by unit index (`unitDifficulty` spreads units across their band). The contract is otherwise unchanged.
- 2026-11-13 · content · Units 7–24 tagged A1.2 (7–9), A2 (10–12), B1 (13–18), B2 (19–24); 6 units per level instead of the 10 in 01-curriculum §2 (unit map recorded in 01-curriculum §7) · Units 1–6 stop at A1.1, so the A1.2 topics come first; 6 dense units per level keeps a 24-unit course that friends can finish.
- 2026-11-13 · engine · Goal hours: B2 = 600 cumulative (Cambridge guided learning hours B2 500–600; top of band, like German at the top of each band), placed-at-B2 = 487.5 (half-way, as for the other bands); `LEVELS`, `nextLevel`, goal picker and es/en labels gain B2 · Same source and convention as A1–B1.
- 2026-11-13 · engine · GO-7: the "more units coming" line is driven by `courseTop()` (highest goal level the shipped units reach) instead of a hard-coded A1; `beyondCourse` / `resultBeyond` copy names that level · Copy stays honest at every phase and disappears once content reaches B2.
- 2026-11-13 · engine · GO-8: `courseComplete()` — when every visible item from the start unit on has a card, Today shows "You've reached the end of the course", keeps reviews, offers "Keep what I know"; "New words only" is disabled · PRD GO-8.
- 2026-11-13 · engine · Placement: 6th band B2 (b = +2.5 ± 0.4; 6 items/language: 2 vocab, 2 grammar, 1 listening, 1 reading; Italian false friend *intendere*), cut point θ ≥ 2 → B2, EAP grid widened to [−4, 4]; level meter shows 6 bands · Lets advanced learners place into B2; a new 300-learner simulation of A2–B2 learners keeps median error < 0.5.
- 2026-11-13 · QA · Evals generalised, not loosened: unit count 1…N (was exactly 6), 36-item bank (was 30), B2 in hours/goal maths; the seeding bound "< 85 % of items" becomes "never the last unit" (with 12+ units a learner beyond the course legitimately seeds 11/12 units); fixture-based unit test "always right ends at B1" accepts B2 because the grid now reaches it.
- 2026-11-13 · QA · e2e "feedback sheet … 'I was right'" was flaky on the baseline too (3/4 failures at f7181d2): the loop's helper sometimes answered the typed task first, leaving a read-only input. The test now waits for the next task to render and for an editable input (8/8 passes) · A test race, not an app bug.
- 2026-11-13 · phase 1 (units 7–12, A1.2–A2) · it +153 items, de +168 items; evals 1581/1581, 0 open P0/P1; tsc, eslint, npm test clean.
- 2026-11-13 · phase 2 (units 13–18, B1) · it +146 items, de +145 items; versions 2.2.0; evals 1872/1872, 0 open P0/P1; tsc, eslint, npm test clean (after fixing it-u15-comunque distractor «comune», which hit the owner-string blocklist, and widening the unit-test θ range to 4).
- 2026-11-13 · phase 3 (units 19–24, B2) · it +144 items, de +144 items; versions 2.3.0. Content now reaches B2, so GO-7's "more units coming" no longer shows; the CUJ-7 e2e now checks that B2 is offered without it. Evals 2160/2160, 0 open P0/P1; tsc, eslint, npm test (178) clean.
- 2026-11-14 · owner + lead · "I know my level": learners may skip placement and pick A1/A2/B1/B2; start = first unit of that level, earlier units seeded (stability 7 d, confirmed in week 1); A1 skips unit 1 (A0 first steps) · Owner request; adults who know their level shouldn't have to sit a test.
- 2026-11-14 · lead (live fix) · Back on the goal-only step after the v1 upgrade looped (Today redirects pending goals back to onboarding); leaving now clears the pending goal (default 10 min/day) · Reported by the owner on production.
- 2026-11-14 · lead (learning P0) · Typing earlier: 80% of items ("typing" arm, stable hash of the item id) move to typed recall once stability ≥ 1 day and their same-session follow-up starts one tier up; 20% keep the old ladder as an on-device control group. A hint (first letters) caps a right answer at Hard; "I don't know" shows the answer and asks the learner to type it once (logged as a miss) · Owner: "make people type"; docs/team/51 §2.
- 2026-11-14 · lead (learning P1) · Content contract v2.1 (all optional): `GrammarPoint` (rule, steps, table, examples, pitfalls) on the course pack; item `grammar` links, `annot` (what key words do in the sentence), `ruleId` on known errors, and item type `paradigm` + exercise `table` (2–7 cells, one FSRS card per table, partial credit: all right = correct, ≥ 80% = almost, else wrong; "that's the du form" when a cell holds another cell's form). Pilot: de-g-praesens + kommen table, de-g-possessiv + mein (accusative) table + "Ich besuche meine Brüder", it-g-essere-avere + essere table, it-g-prep-art + di + articolo table · Owner: grammar explained like a textbook; full conjugation tables; docs/team/50, 51, 53.
- 2026-11-14 · owner + lead (learning P2) · Writing practice with AI feedback: 4 pilot tasks (de/it × A2/B1). Instant checks on the phone (length, right language, greeting/closing, du/Sie or tu/Lei); grading by the `grade-essay` Supabase Edge Function with the owner's Anthropic key (Claude Haiku 5.5, structured JSON rubric: 1–5 overall + task/grammar/vocabulary/coherence, ≤ 3 corrections, one thing done well). Code guardrails drop any correction that doesn't quote the learner's words. Signed-in learners only; 6 per person per week, 400 per month total, plus an Anthropic spend limit. Essays saved in the learner's account (`essays`, RLS, deletable). Advisory only: never changes reviews, placement or goals · Owner approved the plan in docs/team/53; both A2 and B1 tasks included (the A2-vs-B1 question was left open, so the pilot covers both).
- 2026-11-14 · owner · Sign-in privacy line simplified: progress saved in your account (EU), managed by the person who invited you; AI-tutor key stays on the phone · Owner found the detailed version scary.
- 2026-11-14 · owner + lead · AI tutor providers: Claude, ChatGPT (OpenAI) or Gemini with the learner's own API key, called from the browser (plain REST for OpenAI/Gemini, Anthropic SDK for Claude). The model is not hard-coded for OpenAI/Gemini: "Test connection" lists the models the key can use and picks the cheapest general one (nano → mini; flash-lite → flash), because published model names change often. Strict JSON schema first, JSON mode as fallback; same raise-only guardrails. Gemini keys go in the x-goog-api-key header, never the URL. With an own key, writing feedback uses it (guests too) instead of the owner's server grader. The UI explains that a ChatGPT Plus / Claude Pro / Gemini subscription is not an API key · Owner request; friends pay for different providers; Gemini keys are free with limits.
- 2026-11-14 · owner · Profile: name (used in the greeting and on Me) and a picture: emoji on a colour, or a photo shrunk on the phone to a 256 px JPEG, cached locally and, when signed in, stored in a private Supabase Storage bucket (`avatars/<user id>/avatar.jpg`, own folder only); `profile.avatar.photoAt` tells other devices to fetch it; deleting the account removes the photo first · Owner request.
- 2026-11-14 · lead (bug) · The AI tutor settings screen could crash after a key was saved (getConfig returned a new object on every read, so React re-rendered forever); now cached by the stored string.
- 2026-11-16 · owner · Coursebook order: every unit opens with an overview before its exercises — can-do goals, a model dialogue/text (audio, translation on demand), the unit's grammar (textbook grammar cards where written, otherwise the unit's pattern rule + table + example) and the key words. Shown once before the unit's first new item, any time from Path → Overview; within a unit, grammar patterns/tables are introduced before words. Built from existing unit content, so all 48 units have it now; richer grammar cards follow as grammar points are written (4 of ~116 so far) · "Going to exercises first without an overview makes no sense."
- 2026-11-16 · owner + lead · Textbook grammar cards for every grammar pattern (133 new, 137 in all, A0–B2, de + it), linked from every pattern item so each unit overview shows them. They are AI drafts: reviewed by AI linguist, UX, PM and eng passes (no wrong forms found; 2 Italian rules that taught mistakes and ~15 over-broad rules fixed), but not by a native speaker. `GrammarPoint.reviewed` marks human-reviewed cards. Launch gate: native review of the A0–A1.2 cards (≈46) before friends other than the owner use the app; A2–B2 reviewed before any friend's goal reaches A2. Grammar line on the feedback sheet now only for real mistakes, not typos.
- 2026-11-16 · lead · Next after grammar cards (from the reviews): link typed sentences to their card so "why meine Brüder?" works on any sentence; a one-tap "Helpful? / Something's wrong" under each card plus a golden set of wrong answers; split content per language so a page doesn't load both courses' grammar (+106 KB gzip today); a Grammar index page.
- 2026-11-16 · owner + lead · UX Phase 1 (from the UX audit): "learn a bit, try it" replaces guess-first — a one-screen "This unit" card (goals + dialogue), then each new item is a learn card followed at once by one easy try (practice: logged, but it doesn't move the schedule, isn't requeued and is never "to fix"), with the spaced follow-up typed when the try went well, so learners type in session 1. The full overview stays on Path as "Unit notes". Units open on their easiest word; one retry per miss; wrong options come from the same unit; "How sure?" on ~1 task in 4; feedback shows "you picked X". Onboarding goal is one question (5/10/15 min) with near checkpoints; the full picker is one tap away. Path: current unit as the card, others one line. Contrast fixed (7 failing pairs).
- 2026-11-16 · owner · Added: Vercel Web Analytics (anonymous page views, query strings stripped, only on Vercel builds; privacy line updated); "Can't listen now" on every audio prompt (rest of the lesson in text); tap-a-word hints (dotted underline) from the course's own vocabulary plus a hand-written list of small words — unknown words get no hint.
- 2026-11-16 · owner · Brand: Linguina everywhere, Il filo logo and icons, plum brand colour with Italian/German tints inside courses. No mascot for now (recommended against a parrot: "parroting" is rote repetition). Modern look: Bricolage Grotesque display + Inter UI, flat buttons and option cards.
- 2026-11-16 · owner · Live bug fixes after release: audio no longer hidden when phone voices load late, and speech isn't cancelled-then-dropped; tabs switch without adding history and back arrows go back to their parent (no Back loops), lesson exits go back to Today; an error screen that reloads once after a new deploy; open sign-up (shouldCreateUser: true; Supabase "Allow new users to sign up" ON); course screens (lesson, unit grammar, Path, Write) use the explanation language for every label; the unit's first screen recommends reading the unit grammar (skippable); questions sit right above their answers with long texts in a scrolling box; backup export/import and the "progress follows you" note removed (privacy facts moved to Settings); one labelled language switch on Today; Next.js 16.4.2 → 16.4.6 (security advisory GHSA-mfr8-8qww-v76h). New eval: no English inside Spanish text and vice versa.
- 2026-11-17 · owner · Field report: a guest who took the German test on the phone signed up on the computer and "Continue" looped back to the welcome. Fixed: an empty account on a fresh device says so, keeps checking, and comes in by itself once the other device signs in; "Start here" skips the welcome.
- 2026-11-19 · owner · An account is required before the first lesson (no long-term guests): the welcome leads with "Get started", the level test and course setup need no account, then "Save your progress" (email code or Google) before the first lesson; every other screen leads back there until signed in. Why: guest progress lived on one device only (stranded when switching devices; Safari can wipe storage after days unused). The end-of-lesson "save your progress" offer and the guest card on Me are gone. Needs custom SMTP in Supabase (built-in email sends only a few per hour). Builds without accounts are unchanged.

## 2026-11-19 · Sign in vs. create account; language from the device

- Field report: a new user got two emails ("Confirm your email", then the code). Cause: Supabase's
  **Confirm email** was on, so a new account got the *Confirm signup* link first. Fix: turn it off
  (docs/setup-accounts.md step 3). The emailed code already proves the address.
- The account screen now says which it is: **Crea tu cuenta** (from "Guarda tu progreso") or
  **Entrar** (from "Ya tengo cuenta"), with a link to switch. Signing in with an email that has no
  account says so and offers "Crear una cuenta con este correo" instead of quietly creating one.
- The app's language is a switch on the welcome screen (Español / English), preset from the
  device's preferred languages in order (`navigator.languages`; neither listed → English). The
  separate "which language" step is gone, except after signing in to an empty account.

## 2026-11-19 · Account right after the level step; new welcome; delete-account typing

- Setup order is now: language(s) → where you start (level test, "I know my level", or "never
  studied") → **create your account** → goals → time of day → first lesson. Planning a goal
  before there's an account to keep it in was wasted effort, most visibly for "never studied".
  The answers before sign-up are kept on the device (`lingua:setup`), so leaving for Google or
  the email code, or closing the app, resumes at the same step. Back on the sign-up screen goes
  to the step before. The end-of-setup gate (`from=required`) stays as a fallback for older guests.
- Welcome: headline from the strategy ("memory, not engagement"): "Cinco minutos al día. Y no se
  te olvida." Sub: Italian and German building on the language you already know. Three short
  steps: test (no account) → where to start → account keeps your progress. "Works offline, no
  account" removed.
- Bug: the delete-account sheet lost focus on every letter (phone keyboard closed). The sheet
  re-focused itself whenever its parent re-rendered. It now focuses only when it opens.

## 2026-11-20 · "Explain in…" per language is back; Google is the main sign-in

- Reverses 2026-11-16 ("one language for everything"). Setup asks, for each language, whether it
  is explained in Spanish or English (e.g. Italian from Spanish, German from English). The app's
  own language (welcome switch, Settings) no longer overwrites any course; Settings has one
  "Explain … in" switch per course. Course screens (lessons, Path, unit notes, writing) already
  speak the course's language (`useCourseT`), so a screen still never mixes the two.
- Sign-in: when Google is on (`NEXT_PUBLIC_AUTH_GOOGLE=1`), "Continue with Google" is the one
  main button; the emailed code is behind "Use my email" (people without Gmail, or if Google
  fails inside the installed iPhone app). With Google off, the screen is the email form as before.

## 2026-11-20 · Google's own button, privacy page, kinder typing

- Google sign-in uses Google's own button (Identity Services + `signInWithIdToken`, with a
  one-time nonce) when `NEXT_PUBLIC_GOOGLE_CLIENT_ID` is set, so Google's screen names
  linguina.app, not the Supabase address. The redirect through Supabase stays as the fallback.
  New `/privacy` page (needed for Google's brand verification). "No account needed" removed.
- Typing (owner: "the same exercises over and over because I mistype them"):
  - Swapped neighbouring letters count as one slip; 4-letter words forgive a swap ("caio").
    3-letter words, closed-class words, minimal pairs and German endings stay strict.
  - A typo-only "almost" is scheduled like a right answer (Good), not Hard.
  - A miss rests two days before it comes back (it was already practised again in the lesson;
    once per lesson, REQUEUE_CAP = 1). "I was right" already removed the repeat.

## 2026-11-21 · Design polish, round 1 (from a Duolingo principles audit)

- Mistakes are a calm slate ink (`--miss` #475467 / dark #b7c3d3), not red; ✕ and words stay.
  Red also clashed with the Italian accent.
- One subtle press style: solid buttons and answer options have a 3px ledge in their own darker
  shade that sinks 2px when pressed. Replaces the flat buttons with glow (2026-11-16), kept shallow.
- The progress bar pops briefly on each right answer; exercises enter a little faster (220ms);
  target-language sentences on prompts are a bit larger (2rem).
- Not copied: no mascot, no Duolingo green, no hearts, streak warnings or XP.

## 2026-11-21 · Back mid-lesson no longer loses the lesson

- Back / the swipe-back gesture during a lesson opens "End lesson?" (a history entry of the
  lesson's own catches it); "Keep going" stays. On the Results screen Back just leaves.
- The lesson's place is saved on the device after every step (`lingua:lesson`, 3 h). If the app
  is closed or left anyway, the next lesson of the same kind resumes with "Picking up where you
  left off" and the same summary. Answers were already saved as they happened; ending the lesson
  or finishing it clears the saved place. Speed rounds aren't kept.

## 2026-11-21 · Sign-in screen redesign; new brand (option 1, Warm Terracotta)

- Sign in / sign up is one centred screen (inspired by a reference the owner liked): logo, title
  ("Welcome to Linguina" / "Save your progress"), "Log in or sign up to continue", Google, "or",
  the email field shown right away, "Continue with email" (disabled until the address is valid),
  "By continuing, you agree to the Privacy Policy". The separate "Sign in"/"Create account" modes
  are gone: an existing email or Google account simply signs in ("You already had an account").
- Brand: option 1 of `linguina_brand_assets` (speech bubble that turns into a linguina noodle).
  Chosen over option 2 (Mediterranean blue) because it matches the existing cream/sand/terracotta
  palette and keeps German's blue distinct. `--brand` is now terracotta #B33F26 (dark #FF8B6B),
  `--plum` #5A2349 as the small accent; logos with transparent backgrounds (light and dark),
  app icons from the mark. Fonts were already Bricolage Grotesque + Inter.

## 2026-11-21 · Ready for more languages; welcome shows routes and a sample

- One language registry: `TARGET_LANGS` (schema.ts) + `LANG_INFO` (content/languages.ts: name,
  seal, speech locale, tagline, can-do questions). Screens iterate the registry instead of a fixed
  Italian/German pair; copy says "new languages" instead of "Italian and German". How to add one:
  `docs/team/adding-a-language.md`.
- Welcome stays minimal: the sub-line explains why it sticks ("Each word comes back just before
  you'd forget it"); step 2 states the value ("Real grammar and practice, no games or streaks").
  No language icons or "from Spanish or English" copy (more languages, maybe more bases, later):
  a small "Languages you can learn" link at the bottom opens the list (tap, or hover on a computer),
  next to Privacy. A sample-exercise card was tried and dropped (owner). No invented
  testimonials, store badges or numbers.

## 2026-11-21 · Server-side size and volume limits

- The app runs on the learner's device, so the database also caps what a (modified) app can
  store: progress JSON ≤ 2 MB raw (the old cap measured compressed size, ~30 MB raw), device
  label ≤ 100 chars, answer ids ≤ 40/120/24 chars, and ≤ 3000 answers per learner per day
  (counter table `answer_quota`, only the trigger can touch it). Added as `alter table … not
  valid` so it applies to the existing tables. Owner action: run supabase/schema.sql again.

## 2026-11-21 · Type and welcome points

- Fonts: Gabarito (rounded, friendly geometric) for titles and target-language words, and
  Literata (calm book serif made for screens) for text — "fun + formal", unlike the usual
  AI-built sites (owner picked it from a side-by-side of five pairs; Fraunces, Caprasimo, Young
  Serif and a condensed Bricolage were rejected). Replaces Bricolage Grotesque + Inter.
  Self-hosted via next/font.
- Welcome points merged with the owner's prototype ("Designed for busy days and real retention"):
  a short placement test; short lessons, even offline; real grammar reviewed on time, no games
  or streaks. Nothing else from the prototype (no "3x faster", no store claims).

## 2026-11-21 · Swiss tips in the German course (step 1 of the Swiss plan)

- German words show their Swiss forms on the learn card and in feedback: "CH · In Switzerland:
  Grüezi". Content `variants` with region "CH"; new `dialect: true` marks spoken Swiss German
  (Hoi, Guete Morge, Tschau, Uf Widerluege, Gern gschee, Exgüsi, s Brötli) — shown as a tip, never
  accepted as a standard answer. Swiss Standard German words (das Spital, das Billett, das Natel,
  Grüezi, Merci) stay accepted. Settings → "Swiss tips (CH)", on by default for German learners.
- Later (step 2, if it works): a listening-only "Schwiizerdütsch to understand" module on top of
  German, with recorded audio. A full Swiss German course isn't planned (no standard spelling, no
  phone voices, one dialect would have to be chosen).

## 2026-11-21 · One colour for every course; flags; typing layout

- No per-language accent colours any more (German was blue): the app keeps one look, the brand
  terracotta, in every course. The round "IT"/"DE" seals became flags as postage stamps
  (perforated edge, slight tilt: "learning a language = travelling"; picked over a round flag, a
  typical-object illustration and a colour ribbon). Stripes come from the language registry, so a
  new language brings its own.
- Typing exercises: the answer box sits right under the prompt (no gap pushing it to the bottom),
  so the phone keyboard no longer covers the word you're translating.

## 2026-11-22 · Leaner setup and profile; small-screen layout fix

- Goal step: no pace is preselected; the "what you'll reach" box appears once the learner picks
  5/10/15 min, and the button stays disabled until then. An edit (goal already saved) keeps it.
- No "When will you practise?" step: Linguina has no reminders or notifications, so the answer
  did nothing. The last goal's button is "Start my first lesson"; Today no longer shows "Your
  practice time". Old profiles keep `profile.anchor` (just unused).
- Me: "Remembered after a week" and the long "What you can do" list removed (many words, little
  value; the page was ~5000px tall).
- Small phones: screens centred with `justify-content: center` pushed overflowing content above
  the top (logo over the language switch) and under the bottom button (last lines unreachable).
  `.v-center` (auto margins) centres when there's room and scrolls when there isn't: welcome,
  placement result, lesson results.
- Spanish welcome heading: "Para que tu poco tiempo rinda" (owner).

## 2026-11-22 · Copy: no offline promise, clearer course list, facts on languages

- "Works offline" removed from the welcome and the app description: never tested end to end, so
  not promised (the app still keeps working when the connection drops). Point 2 is now "Short
  lessons — five minutes: the commute, a coffee break, a wait".
- Spanish point 3: "Gramática en serio y repasos en el momento justo" (more natural).
- "Supported languages" → "Languages you can learn" (it read like the explanation languages).
- Install tip says "add a Linguina shortcut to your home screen", now also on Android Chrome.
- Course cards: instead of describing the language, how many people speak it and how hard it is
  from your language (Ethnologue 2024 speakers; FSI training times; sources in languages.ts).

## 2026-11-22 · Spanish pass: natural, not literal

- The owner found the Spanish read like a word-for-word translation ("Elige lo que te entra en un
  día", "Puedo leer en voz alta c, g, ch y gh"). About 45 UI strings rewritten for meaning, e.g.
  "¿Cuánto tiempo tienes en un día normal?", "¿En qué idioma te explicamos el italiano?",
  "Empezar en un nivel más fácil", "1 palabra que fallaste ayer", "Todavía no" (wrong answer),
  "test" instead of "prueba" throughout setup, gender-neutral "seguro/a".
- Unit can-dos: pronunciation ones now say what you'll manage ("Puedo pronunciar bien palabras
  con c, g, ch y gh"), plus nine other can-dos and one unit title ("La infancia").
- Rule for new copy: write the Spanish for meaning first, then check it against the English, not
  the other way round.

## 2026-11-22 · Audio in the iPhone home-screen app

- Owner: no audio at all when Linguina is opened from the iPhone home screen (twice). Known
  WebKit behaviour: a home-screen web app can see a partial voice list (no Italian/German) or an
  empty one, and iOS drops speech that starts before the first touch.
- Fix: on Apple devices `hasVoice` never hides audio because of the list (speech then asks by
  language only), and the first touch anywhere speaks a silent utterance to unlock speech, so a
  word's automatic "listen" works afterwards. Not verified on a real iPhone yet (owner to check
  after deploy; also the ring/silent switch and volume).
