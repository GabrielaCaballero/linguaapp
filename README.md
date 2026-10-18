# Lingua

A personal, phone-first web app for Italian and German, 15 minutes per language per day.
**Prototype**: everything is stored on the device; there's no backend yet.

```bash
npm install
npm run dev        # http://localhost:3000
```

## How it learns (Dehaene's four pillars + Nation's four strands)

- **Attention**: one task per screen, short sessions, a gentle nudge at 15 minutes. No hearts, no streaks.
- **Active engagement**: you answer before you see anything. New items start with a **guess first** pretest
  (Spanish → Italian, English → German), then come back a few cards later as real recall.
- **Error feedback**: immediate and neutral, always shows the correct form. Misses come back in the same
  session and again ~10 minutes later. No penalties.
- **Consolidation**: SM-2-style spaced repetition (`src/lib/srs.ts`). "Tomorrow" means 4am, after sleep.
  Reviews are interleaved. A "review after sleep" card appears the next day, and a 45-second speed round builds fluency.
- **Confidence**: each answer is submitted with Guessing / Think so / Sure. Progress shows accuracy at each
  confidence level, which exposes the fluency illusion.
- **Four strands**: each task is tagged input / output / language focus / fluency, and the week's balance is shown.

## Layout

| Path | What |
| --- | --- |
| `src/content/it.ts`, `de.ts` | Course content (Italian M0 + M1 starter slice, German A1 starter) |
| `src/lib/session.ts` | Builds today's queue: due reviews + new items, interleaved |
| `src/lib/srs.ts` | Scheduler |
| `src/lib/check.ts` | Answer checking (tolerates accents, typos, missing article: "almost") |
| `src/lib/store.ts` | On-device storage (localStorage) + backup import |
| `src/app/*` | Screens: Today, Session, Progress, Milestones, More, Add from class, Ties to Italy |

Screenshots from the prototype review are in `docs/screenshots/`.
