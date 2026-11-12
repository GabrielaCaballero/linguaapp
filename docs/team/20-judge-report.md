# 20 · Judge report: Lingua v2 (`v2-redesign`)

_Judge (product review, QA, UX, language teaching) · 2026-11-12 · tested at 375×812 (mobile emulation) in the Claude Browser pane against `next dev` and `next build && next start` (dist dir `.next-judge`, port 3400). All four personas were played end to end with realistic answers: typos, missing accents and umlauts, ß/ss, wrong register, Spanish transfer errors, "I don't know", quitting mid-lesson, switching languages, editing the goal, export/reset/import, v1 upgrade, and simulated next-day and 9-days-away returns (stored timestamps shifted). Evidence screenshots are in `docs/screenshots/judge/`._

---

## 1. Executive verdict

**The app looks and feels like a real product now, but two engine problems break the core loop. Do not hand it to the owner until the P0s below are fixed.**

v2 fixes most of what made v1 feel unintuitive. There's one big button. Onboarding asks one question per screen. The Today screen is calm. The colour change per language is a nice touch. Tiles, the accent bar and the feedback sheets feel good to use, and the goal card is honest and updates live. The checker is the best part: *arivederci* gets "double consonant", *Abent* is "typo", *Guten Nacht* gets "Nacht is feminine", *tschuss* is "almost", lowercase nouns are accepted with a note, and *Ich bin Anna* is accepted. All 161 unit tests pass, and no owner-specific strings remain.

The core loop is broken in two places, though:

1. **You can't start a second lesson in the same app session.** After you finish or quit a lesson, the next "Start/Continue" (in either language) shows the old lesson's results screen or its "End lesson?" sheet. This happens in both dev and production. In an installed PWA, which stays in memory, the daily ring can't really be filled, and Ana can't do Italian and then German.
2. **Placement sends anyone above A1.1 to Unit 6, marks the whole course as known, and leaves nothing new to learn.** Units 2–6 are all tagged A1.1, so any result of A1.2 or higher means "start at Unit 6" with about 150 seeded words. Ana (and probably the owner herself) finishes onboarding with German at "27 of 27 learned" in every unit, and her first "lesson" is *Hallo* and *Danke*.

Several P1 problems also hurt the "honest, motivating" promise. A "5 min" lesson really lasts 1–2 min, while goals ask for 25–55 min a day, so the ring barely moves. The default goal for German is "Very demanding" (55 min a day). The results screen says "0 to fix", and then Today says "3 to fix". The weekly check projects "February 2034".

| Dimension | Score /10 | One-line reason |
|---|---|---|
| **Intuitiveness** | **6.5** | Onboarding and Today are clear. A stale lesson on the second tap and placement overrides that jump from Unit 6 to Unit 2 undo that clarity. |
| **Delight** | **6** | The look, tiles, combo flame and accent swap are good. Results feel empty ("+6 new · 0 got stronger · 0 to fix"), there's no confetti, and the ring never closes. |
| **Learning quality** | **5** | The checker and feedback notes are excellent. Placement over-places, session dose doesn't match the goal, there's too much guess-first on transparent cognates, no register-specific feedback, and the content ends at A1.1 while goals promise A2/B1. |
| **Content quality** | **7** | Glosses (es + en) are clean and neutral, genders and plurals are consistent, and the notes are short and useful. There are a few ambiguous or weak items (*der Rock* vs "rock music", give-away distractors, the Grüß Gott "Switzerland" note, a hard-coded "ä ≠ a"). |
| **Robustness** | **5** | Tests are green and import/export/migration are solid. The stale lesson state is a release blocker. Offline couldn't be verified (the service worker can't register in this browser pane). |

**Would the owner love it?** She'd like the first 5 minutes: it finally looks like a language app. She'd stop loving it by the second session. She takes German classes and did some Duolingo Italian, so placement would likely seed most of the course. Her German path would show "learned" everywhere with nothing new, a second lesson wouldn't start until she force-closed the app, and her v1 upgrade defaults German to "55 min/day · Very demanding" (85 min/day total). Fix the P0s and the top-5 list and she'd likely be happy.

---

## 2. CUJ × persona results

✅ pass · ⚠️ pass with notable issues · ❌ fail · — not applicable · ⦸ not testable here

| CUJ | P1 Ana (es UI; IT from es ~A1, DE from en ~A2) | P2 Mateo (es→it, zero, trip) | P3 Emma (en→de, zero, A2 in 7 mo) | P4 Priya (en→it, commuter) |
|---|---|---|---|---|
| 1 First open → first lesson | ⚠️ About 4 min for two languages including two 15-item placements. Placement over-placed both languages (P0-2). UI fully Spanish ✔ | ✅ 33 s to the first item | ✅ | ✅ ("I'm a total beginner" mid-test works) |
| 2 Absolute beginner | — | ⚠️ No test ✔, guess-first ✔. The very first task is an audio spelling guess with no meaning (P1-8) | ✅ | ✅ |
| 3 Daily return | ❌ Next day ✔, "3 to fix" ✔, one button ✔. Ring can't fill: second lesson broken (P0-1), lessons 1–2 min against a 35 min goal (P1-1) | ❌ same | ❌ same | ⚠️ 5-min goal is fine, but "Practise more" is broken (P0-1) |
| 4 Second language | ❌ Chip and blue accent ✔. Starting German after Italian showed the Italian results screen (P0-1). German course fully seeded (P0-2). No combined minutes | — | — | — |
| 5 Mistakes | ⚠️ Requeue ✔, answer + note ✔, "I was right" ✔. Results "0 to fix" vs Today "3 to fix" (P1-3). The sheet hides the correct option (P2) | ⚠️ same | ⚠️ | ✅ |
| 6 Checker | ✅ heisst/Grüss accepted, lowercase note, Guten Nacht, Abent, tschuss, arivederci, buon giorno/buona sera/buona notte. Wrong umlaut named in the note (P1-6). No register feedback (P1-7) | ✅ | ✅ (golden tests 161/161) | ✅ |
| 7 Change goal | ✅ Saved in 15 s, Today updated, "Very demanding" + 2 alternatives. Picking "30 min/day" then shows 35 (P2) | — | ⚠️ Card overlaps the date chips, alternatives hidden under the button, 94 min shown as 90 (P1-5) | — |
| 8 Falling behind (9 days) | — | ⚠️ "Qué bueno verte" + reviews only ✔, no red ✔. The weekly check came first: "averaged 0 min/day → February 2034", and the third button hides behind the primary button. "Keep my pace" silently turned the trip goal into a 5-min steady goal (P1-4) | — | — |
| 9 AI tutor | ⦸ Settings screen and copy are good and the button is disabled without a key. Not exercised: the judge doesn't enter API keys, and a test call would send the key to Anthropic. The exported backup has no `llm` field ✔ | | | |
| 10 Offline | ⦸ The service worker fails to register in this browser pane ("unknown error fetching the script"), though `/sw.js` is served with the right headers. Static review in §4 (P1-10) | | | ⦸ |
| 11 Backup/restore | ✅ Export → typed-confirm reset → import gives an identical DB (only `lastBackupAt` differs). Malformed file rejected, nothing changed ✔. Import from the welcome screen skips the preview (P2) | | | |
| 12 v1 owner upgrade | ⚠️ Goal-only onboarding ✔, due dates kept (0 d diff) ✔, zurigo dropped ✔, Ties card once ✔. Defaults to IT 30 + DE 55 = 85 min/day "Very demanding" (P1-2) | | | |
| 13 A11y & themes | ⚠️ Dark ✔, `lang="it"` on options ✔, ✓/✕ + words, not colour only ✔. Confidence chips are 36 px tall (<44). Reduced motion not checked | | | |

**Persona "must feel" lines**

| Persona | Must feel | Holds? |
|---|---|---|
| Ana | "Both languages are moving, and I didn't have to plan it." | **No.** German has nothing new to learn after placement, and switching languages shows a stale screen. |
| Mateo | "It uses my Spanish and tells me plainly if I'm on track." | **Partly.** The Spanish bridges are lovely (*ciao ≈ «chao»*, *gn = ñ*). "On track" is undermined by the 2034 projection and a ring that never fills. |
| Emma | "Honest numbers, clear 'why' when I'm wrong." | **Mostly.** The "why" notes are excellent. The numbers are clamped (94 shown as 90) and the default is "Very demanding". |
| Priya | "One tap, works in the tunnel, no guilt." | **Partly.** One tap and no guilt hold. Offline is unverified. The "5 min" lesson is really about 1 min, and Speed round with nothing to review ends instantly and credits +1 min. |

---

## 3. Prioritized issues

### P0 — blocks a core journey

**P0-1 · The second lesson in the same app session shows the previous lesson's state.**
- *Steps:* Finish (or quit with ✕ → End) any lesson → Today → tap "Start/Continue · 5 min" (or the other-language chip and then Start, or ⋯ → Speed round).
- *Expected:* A fresh session for the active language.
- *Actual:* The old Results screen ("Lección terminada +2 min …") appears, recoloured to the new language. After a quit, the old exercise appears with the "End lesson?" sheet still open. A full reload fixes it. Reproduced in `next dev` and `next start`. Evidence: `09-P0-stale-results-on-second-lesson.jpg`.
- *Cause:* `next.config.ts` sets `cacheComponents: true`, so routes are kept alive in React `<Activity>`. `/lesson` reads its params in a `useEffect([])` and builds the session in `useState(() => buildSession…)`, so neither runs again on the next visit.
- *Fix:* Give the player a fresh key per visit, e.g. `router.push('/lesson?kind=auto&n=' + Date.now())` and `<Player key={searchParams.toString()} …/>`, using `useSearchParams` instead of reading `window.location` once. Or reset state on route entry. Check `/onboarding` and `/placement` for the same pattern. Add an e2e test: finish lesson → start lesson → the first task is not Results.

**P0-2 · Placement at A1.2 or above means "start at Unit 6" and the whole course is seeded, so there's nothing new to learn.**
- *Steps:* Ana, German, "Classes" + can-dos Yes/Yes/Partly → realistic answers (10/15) → "You're around B1, start at Unit 6 · you already know ~150 words". Path: every unit shows "N of N learned", including Unit 6 ("27 de 27 aprendidas"), and Me lists every can-do. The first German lesson was two false-friend bridges plus *Hallo, Danke, Bitte, Ja*. Italian: Ana answered 4 of 5 grammar items wrong with Spanish-transfer errors (*ha andato*, *salir*, *piacciono*) and still placed "cerca de A2 · unidad 6 · 148 palabras". "Start lower" goes A2 → A1.2 (still Unit 6, 148 words) → A1.1 (Unit 2, 28 words) → A0, so Units 3–5 can't be chosen. Evidence: `02-…overplaced.jpg`, `10-P0-path-all-learned…jpg`.
- *Expected:* Start at the first unit with unknown material, with a sensible number of seeded words and new items available.
- *Cause:* Units 2–6 all have `cefr: "A1.1"`. The start unit is "first unit whose cefr ≥ placed band", and seeds are "every unit item in bands below", so ≥A1.2 means everything. Reading items are easy for Spanish speakers through cognates, so θ climbs even when grammar is wrong.
- *Fix:* (a) Map θ to a **unit**, not a band. Give each unit a difficulty (e.g. U2 −1.3, U3 −1.0 … U6 −0.2) and start at the first unit with b > θ − 0.3. (b) "Start lower/higher" should step **one unit** at a time and show the unit name. (c) Never seed the start unit or later units, and cap seeds at the items placement actually covered (its `seeds`) plus the units before the start unit. (d) For es→it, weight grammar/false-friend items more than reading (the spec already has ×1.5 for false friends; consider ×0.6 for reading) and stop early when SE < 0.45. Every run here used all 15 items. (e) When placed beyond the content, say so plainly and suggest a goal of "Maintain" or "Keep what I know" instead of an empty Path.

### P1 — hurts the experience

**P1-1 · Lesson length doesn't match the goal, so the ring never fills.** The button says "5 min", but a beginner session is 13–24 tasks in about 1–2 min. The Today ring counts real minutes against goals of 25 (Mateo), 35 (Emma, Ana-IT after the edit) or 55 min. Mateo would need around 20 lessons a day, and (with P0-1) each one needs a reload. *Fix:* Size the chunk by time (keep adding tasks until ~5 min of active time, or at least 22 graded tasks as the spec says), auto-offer "one more round?" inside the lesson, or count a completed chunk as 5 min toward the ring. Label honestly ("~2 min").

**P1-2 · Default goals land on "Very demanding".** New German learner: "A1 by May 2027 · 55 min/day · Very demanding" (Emma, the v1 owner). Owner upgrade: Today shows IT 30 + DE 55 = **85 min/day**. *Fix:* Pre-select the date or level that gives ≤20 min/day (the "kinder" option), and keep the ambitious option one tap away.

**P1-3 · "To fix" disagrees between Results and Today.** Results said "0 para corregir" (the misses were answered correctly later in the session), then the next day's Today said "3 palabras para corregir de ayer". It also said "Van primero en tu próxima lección", but the next lesson opened with 5 guess-first new words, and the first "to fix" item came at task 11. *Fix:* Use one definition (any miss in the session). On Results say "3 to fix · they'll come back first", and actually put them first in the next session.

**P1-4 · The weekly check after a break is discouraging and breaks the layout.** After 9 days away it shows "averaged 0 min/day → February 2034 (goal: March 2027)", and the 3rd button ("Keep my pace") is hidden behind the floating primary button. It also outranks the "Welcome back" card. "Keep my pace" silently switched the trip goal to a 5-min steady goal. *Fix:* Skip the weekly check when the 14-day average is 0 or the user is returning after ≥7 days (show Welcome back instead). Cap projections ("more than 2 years at this pace"). Make the card scroll above the button. Label the third option "Switch to 5 min/day (no date)".

**P1-5 · Goal sheet layout and honesty.** In onboarding, the sticky commitment card covers the date chips, and the "Two kinder options" text bleeds out under "Set my goal" (`15-emma-goal-overlap-clamped-90.jpg`). In the Me → Edit goal sheet, the alternatives are below the fold. When the raw figure is above 90 min, the card says "90 min a day" (Emma needs 94). The spec clamps, but "Honest numbers" is Emma's must-feel. *Fix:* Put the card in normal flow (or reserve its height), show the alternatives above the card, and show "90+ min a day".

**P1-6 · Umlaut feedback names the wrong letter.** *tschuss* → "ä ≠ a — la diéresis importa: Tschüss". The text is hard-coded in `i18n.ts:182/497`. *Fix:* Pass the actual pair (`ü ≠ u`) from `check.ts`.

**P1-7 · No register feedback.** Typing *Wie heisst du?* for "What's your name? (formal)" gives a bare "Not quite" with no "you used du, this one is Sie". Register is a stated U1 learning goal. *Fix:* When the answer matches another item's target or accept of opposite register (or `du`↔`Sie` / `tu`↔`Lei` tokens differ), return a `register` reason with a one-line note. Also add a targeted note for *chao* → *ciao* (Spanish spelling).

**P1-8 · Beginner first minutes are thin and repetitive.** Mateo's first task ever is an audio-only spelling guess (*ciao/giao/sciao/chiao*) with no meaning and no instruction ("Palabra nueva · Adivina — todavía no hay respuestas incorrectas"). It only works with sound on, and Mateo is 61 and may be on a bus. Ana's Unit 2 starts with 5 consecutive guess-first nationalities (*italiano→italiano/a*), then the same 5 again as recognition. That's trivial for a Spanish speaker and not interleaved. *Fix:* Start Unit 1 with a meaning item (*Ciao = Hola / Chau*). Put a one-line instruction on every exercise ("Tap what you hear"). Skip guess-first for transparent cognates (identical stems): show a quick "Same as Spanish! ✓" card instead. Interleave new items with reviews from task 2.

**P1-9 · Results screen is flat.** "+6 new · 0 got stronger · 0 to fix" after correctly reviewing ~15 seeded words. The insight "Your confidence matched your answers — nice self-awareness" appears even when no confidence chip was used. There's no confetti or goal moment (03-ux §5.4). Speed round with nothing due ends instantly with "Lesson done +1 min · Tomorrow: 1 words". *Fix:* Count correct reviews of seeded or existing cards as "got stronger". Only show the calibration insight when ≥3 chips were used. Hide Speed round / Review only when nothing is due ("Nothing to review yet"). Pluralise "1 word". Add the celebration.

**P1-10 · Offline could not be verified. Static review shows risks.** `sw.js` precaches route HTML plus the `/_next/static` assets referenced in that HTML. Chunks loaded later (lazy components, the lesson player's split chunks) aren't precached until visited online, and RSC requests return 503 offline. *Fix/verify:* Test on a real phone (airplane mode, cold start, complete a lesson). Precache the build manifest's chunk list (read `/_next/static/<buildId>/_buildManifest.js`) or cache-on-first-visit with a warm-up pass after install.

**P1-11 · Goals promise levels the content can't deliver.** There are 6 units per language, all A0/A1.1 (~165 items), but the goal picker offers A2/B1 with dates and minutes. At 25 min/day a learner finishes the content in a few weeks. *Fix:* Mark A2/B1 as "coming soon", or say "our course currently covers up to A1.1. After that we'll keep you reviewing", and treat finishing the course as an explicit, celebrated state.

### P2 — polish

- **Correct-guess feedback is terracotta, not green.** In guess-first, "✓ Correcto" uses the Italian accent (red-orange), which reads like an error. Graded answers use green. Use `--ok` everywhere (`06-guess-first-trivial-cognate.jpg`).
- **The feedback sheet covers the options,** so after a miss you can't see which option you picked next to the correct one (`05-miss-sheet-covers-options.jpg`). Shrink the sheet or move the options up. In guess mode the options vanish entirely, so "you picked X" is lost.
- **Mixed languages on screen:** the German placement in a Spanish UI shows "Pregunta 1 · Complete the sentence · Soy principiante total". Unit titles and can-dos follow explain-in ("Unidad 6 · Wohnen · Home"), while checker notes follow the app language ("¡Correcto! En alemán los sustantivos…" on an English-glossed course). Pick one rule per string type and document it.
- **Grüß Gott note:** typing *Grüss Gott* gives "En Suiza ß se escribe ss", but Grüß Gott is Austrian/Bavarian. Use the variant's region note.
- **Content:** *der Rock* MCQ offers "rock music", which is arguably also correct in German ("Rock" = rock music). Replace it with "the rock (stone)"/"the jacket". The *die Art* guess has "ten" as a distractor. *parlare* has "¿De dónde eres?" and "el cruasán" as distractors (wrong part of speech, so it's guessable by elimination). de-p-06's answer "branch on the market square" is a word-for-word match of *Filiale am Marktplatz*. Recognition prompts show the register tag ("formal"), which gives away the answer between two options. "Alemán no es «germano»" isn't a mistake Spanish speakers make, so use "no es «alemano»".
- **The goal alternative "same level by Oct 2027 · 30 min/day"** saves as 35 min/day (rounding). Compute the alternative's date with roundUp5 so the card matches.
- **Import preview** shows raw codes ("it: A2 · 2027-10-06 · 35 min"). Localise it. Importing from the welcome screen skips the preview and confirm entirely.
- **Me:** "3 min/día · 10 min al día" is unexplained. "Pregúntanos en una semana — esto se completa después de tus primeras pausas largas" is confusing copy. The week strip has no rest-day moons. There's no "on track" bar on the goal card. "Lo que ya puedes hacer" lists every can-do for seeded courses.
- **Onboarding:** the step dots don't advance between experience → can-dos → placement intro. The anchor step stores 08:30/08:00 without asking for a time. The Deutsch tagline "Preciso, lógico" is a stereotype; use something like "Se habla en 7 países". The A0 result still shows "Start lower". "Ya sabes unas 2 palabras" reads oddly.
- **Words:** custom words show as a bare "+ la stazione" line instead of a card. The placeholder "In Italiano" should be "In Italian" / "En italiano".
- **Export** gives no confirmation toast.
- **Cold load** shows a blank screen for about 1 s with no skeleton (client-only render).
- **A11y:** the confidence chips are 56–85×36 px (<44). Onboarding option buttons have empty accessible names in the a11y tree.
- **Console:** only `navigator.vibrate` blocked before the first tap (harmless; guard it with `navigator.userActivation.hasBeenActive`). There are no app errors.

---

## 4. Notes on things that work well (keep them)

- Checker quality and the per-language teaching notes (*gn ≈ ñ*, *ch + e/i = «k» como en queso*, *Nacht ist feminin*, *Bis später = see you later today*). These carry the "why" promise.
- Tiles with ghost slots, the accent bar, combo flame and gold progress bar, the bottom-sheet feedback, and "I was right" (logged, counted as Good).
- Onboarding with one question per screen, instant UI-language switch, the per-language accent, the honest ⓘ "How we calculate", and the class-hours field that updates live.
- Backup, reset and import round trip, the malformed-file guard, v1 migration (due dates exact, Ties offered once), and the AI-tutor privacy copy.
- No owner-specific strings anywhere in `src` (grep for Lavello/Zurigo/Gabi/Dante/fide/citizenship: none).

---

## 5. Top 5 changes that would most improve the app

1. **Fix lesson re-entry (P0-1).** Key the player per visit and add an e2e test. Without this nothing else matters on a phone.
2. **Make placement map to units, step overrides one unit at a time, and seed conservatively (P0-2).** This is critical for the owner, who isn't a beginner in either language.
3. **Make "5 minutes" true and close the ring.** Time-based chunks, an in-lesson "one more round?", and a celebration when the daily goal is reached. Default goals to ≤20 min/day (P1-1, P1-2, P1-9).
4. **One "to fix" truth, and put fixes first.** The same count on Results and Today, and misses open the next session. Add register-aware and Spanish-transfer feedback (*chao*, *ha andato*, du/Sie) (P1-3, P1-6, P1-7).
5. **Respect the beginner's first minute and the expert's time.** Start with meaning, not audio-only spelling. Skip guess-first for transparent cognates. Interleave from task 2. Be explicit that the course currently ends at A1.1 (P1-8, P1-11).

---

## 6. Evidence

`docs/screenshots/judge/`:
`01-welcome` · `02-ana-placement-overplaced` · `03-placement-listen-first` · `04-ana-de-goal-one-alternative` · `05-miss-sheet-covers-options` · `06-guess-first-trivial-cognate` · `07-results-0-to-fix-after-misses` · `08-ana-today` · `09-P0-stale-results-on-second-lesson` · `10-P0-path-all-learned-after-placement` · `11-next-day-3-to-fix` · `12-tiles-correct-good` · `13-v1-upgrade-ties-card-85min-default` · `14-mateo-9days-weekly-check-2034` · `15-emma-goal-overlap-clamped-90`.

_Environment caveats: the Browser pane can't register service workers, so offline wasn't tested. No real TTS was heard (voices exist). No real API key was used. The test run left `tsconfig.json` modified by `next dev` (the include of `.next-judge/types`). That change was reverted and not committed._
