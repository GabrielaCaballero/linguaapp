# Lingua prototype — hand-over (2026-10-18)

Repo: /Users/gabrielacaballero/Documents/Claude/lingua — commit c422878 on main (local only, no remote).
Run: `npm run dev` (or preview config `lingua-dev`, port 3100 in .claude/launch.json).
Stack: Next.js 16.4.2 (App Router, cacheComponents on by default), React 19.3, TS, plain CSS. All pages are client components gated on `useDB()` (localStorage).

## Verified in preview at 375x812
- Today → session → guess-first (ungraded) → follow-up recall (type / tiles / listen / recognize) with confidence → feedback (right / almost / miss) → SM-2 schedule (correct → tomorrow 4am; miss → +10 min + in-session requeue, capped at 2).
- Next-day simulation: sleep nudge, reviews due, tiles, speed round.
- German: level question (some/classes seeds "basic" items as reviews), blue theme, Add from class → cards due now.
- Progress (accuracy vs confidence, strands), Milestones (countdowns, exam-vs-M4 conflict warning), Ties log, More (settings, backup).
- tsc, eslint, next build all clean.

## Not verified / stubbed
- Export/Import buttons (code written, not clicked: download + confirm dialog).
- Audio on a real iPhone/Android (speechSynthesis; voice quality depends on OS voices).
- Speech recognition: mic button appears only where the API exists (Chrome/Android); no iOS.
- No service worker → no offline mode; installable via manifest + icons (iOS "Add to Home Screen" works without SW).
- M2–M4 Italian and A1-complete+ German content not built; milestone dates for exam/trip are placeholders (15 Apr 2027, 1 May 2027).
- No accounts, sync, or backend.

## Open questions for the user
1. German level (asked in-app too).
2. Exam (April 2027) is month 6 of the plan, M4 ends month 9: compress or later exam?
3. Real dates for the exam and the Lavello trip.
