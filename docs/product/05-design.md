# 05 · Design doc: experience and interface

_2026-11-13 · Status: current. Detailed screen specs and research live in docs/team/03-ux.md; this doc covers the decisions that shape every screen._

## 1. Design principles

1. **One obvious next action.** Each screen has exactly one primary button, in the bottom thumb zone. Today is basically one big button.
2. **Show, don't lecture.** The learning science lives in the mechanics (guess first, spacing, confidence chips). Explanations sit behind an ⓘ or in one line.
3. **Progressive disclosure.** New users see Today and Path. Stats, the AI tutor, accounts and fine settings live under Me.
4. **Every answer gets a felt response** within 100 ms: colour, a short spring, a haptic where the device supports it, optional sound. Right answers pop; wrong ones are gentle.
5. **Calm but alive.** A warm paper-like background with a strong per-language accent. Nothing blinks or nags.
6. **Celebrate effort, not perfection.** Rings fill with minutes practised. Progress says "got stronger", never "% wrong". No streak to lose.
7. **Optional means optional.** Accounts, the AI tutor and speaking practice never stand between the user and practice.

## 2. Information architecture

Three tabs. Full-screen flows hide the tab bar.

| Surface | Purpose | Contents |
|---|---|---|
| **Today** `/` | Start practising | Course seal ▾ (switch/add language), "●●●○○ this week", ring with today's minutes and the current unit, **at most one card** (weekly check › N to fix › sleep-ready words › backup reminder), one primary button, ⋯ menu (review only / new only / speed round), other-language chip |
| **Path** `/path` | Where am I in the course | 6 units per language: progress ring, can-do statements, 3 sample words, "Practise this unit" |
| **Me** `/me` | Progress and settings | Goal card, week strip, word stages, "remembered after a week", can-do list, calibration, ⚙ Settings, My words |
| **Settings** `/me/settings` | Control | Courses, app language, session length, practice days, exercise toggles, sounds/vibration/motion/theme, **Account** (sync), AI tutor, Your data, How Lingua teaches |
| **Lesson** `/lesson` (full screen) | Practise | ✕, progress bar, prompt, answer area in the bottom 55%, confidence chips, Check → feedback sheet |
| **Onboarding / Placement** (full screen) | Get started | One question per screen, Back always available |
| **Account** `/account` (full screen) | Sign in | Google (if enabled) → "or with your email" → email → code → choice → done |

## 3. Key screens and their states

| Screen | Default | Empty / first time | Offline | Error |
|---|---|---|---|---|
| Today | Ring + Start | First day: no cards, "Start · 5 min" | Pill "Offline — practice still works" | — |
| Lesson | Task + Check | — | Listening/tutor skipped silently | Tutor failure falls back to the local verdict |
| Results | Ring fills, three counts, one insight | Guest on an accounts-on build: one "Save your progress" card, shown once (then the sounds/tutor offers) | — | — |
| Welcome | Accounts on: **Sign in** (primary), "Try it first, without an account", I have a backup. Accounts off: Get started, I have a backup | Install tip in iPhone Safari; "open in Safari/Chrome" inside other apps' browsers; nothing once installed | Works | — |
| Account | Email form (+ Google button) | — | Google button disabled; sending a code shows the network error | Not invited · wrong code · too many tries · network · Google didn't finish · Google returned to a different browser (all in plain words, inline, `role=alert`) |
| Settings → Account | "Signed in as…", status, last sync, Sync now, Sign out, Delete | Guest: one row "Sync across devices · Invite only" | "Offline — will sync later" | "Couldn't sync — will retry" · "Update Lingua to keep syncing" |

## 4. Visual system

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` / `--surface` | `#faf7f2` / `#fff` | `#121110` / `#1c1a18` | Paper-like base |
| Accent, Italian | terracotta `#c4452a` | `#ff8b6b` | Set by `[data-lang="it"]` |
| Accent, German | Rhine blue `#2e5bd8` | lighter blue | Set by `[data-lang="de"]` |
| `--almost` | amber `#9a6a00` | | "Almost" verdicts |
| `--miss` | `#b3261e` | | Wrong answers and errors |

- **Type:** Fraunces (display: target words, titles) + Inter (UI), self-hosted with `next/font` so they work offline.
- **Buttons:** 3D pressable primary; secondary and ghost variants. All targets ≥ 44 px.
- **Iconography:** one inline SVG set; no flags in the interface (course seals read "IT" / "DE"). Emoji only inside content (unit icons).
- **Brand marks:** the Google "G" on "Continue with Google" is drawn inline (no external image request), following Google's button guidance: white/secondary button, the G at left, the words "Continue with Google".

## 5. Interaction rules

- **Feedback sheet:** ✓ / ~ / ✕ **and** a word (never colour alone), the correct answer in Fraunces, 🔊, a one-line note with ⓘ to expand, "I was right", Continue. After a typed answer, focus moves to Continue after 250 ms so the Enter key doesn't skip the sheet.
- **Accent bar** above the keyboard for typed answers: à è é ì ò ù or ä ö ü ß. `autocorrect` off.
- **Confidence chips** (sure / think so / guessing) are optional and change only the rating.
- **Destructive actions** (Reset, Delete account) use a bottom sheet with a typed confirmation word, in the app language (ELIMINAR / DELETE).
- **Sign-out sheet** explains that the device will be cleared, and warns in plain words if answers aren't synced yet.
- **Motion:** short springs; `prefers-reduced-motion` removes them. Haptics are progressive enhancement (iOS WebKit has no Vibration API).

## 6. Content and copy

- **Voice:** warm, plain, adult. No exclamation-mark pressure, no guilt ("Welcome back — let's warm up", never "You missed 9 days").
- **Spanish:** neutral Latin-American *tú*, no voseo. Where words differ by region, give both: "mantequilla (manteca)".
- **Every UI string** lives in `src/lib/i18n.ts` in both languages; a static eval fails on any hard-coded text, aria-label or placeholder, and on English inside Spanish.
- **Privacy copy** shown before sign-in: progress is stored in the EU; the person who runs this Lingua can see, as administrator, every answer with its time (so when and how much you practise), your goals and the words you add yourself; the AI-tutor key and on-device stats are never uploaded.
- **Honesty copy:** goal estimates are labelled "Estimate based on typical course hours" with an ⓘ; goals beyond the content say "more units coming".

## 7. Accessibility

Targets ≥ 44 px · WCAG AA contrast in both themes · correctness shown with icon + word + colour · `lang="it"`/`lang="de"` on every target-language word so screen readers switch voice · reduced motion respected · no horizontal scroll at 375 px · aria-labels localised. All are checked automatically on every main screen in both languages (e2e-ux).

## 8. Open design questions

1. Whether sign-in needs a discovery point this release (today: Welcome and Settings only), or waits for the v1.1 "Save your progress" card.
2. Where exactly the one-time "Save your progress" card sits on the first Results screen (v1.1), and how it ranks against "One more round".
3. Whether "Continue with Google" should be hidden in installed iOS mode if the OAuth return proves unreliable there.
4. An illustrated iOS install sheet (v1.1); the one-line Welcome tip is the stopgap.
