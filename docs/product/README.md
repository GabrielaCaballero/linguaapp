# Lingua: product & engineering docs

_Owner: Gabriela (PM). Last updated 2026-11-13, after the Director PM and Uber TL reviews. Covers what is on `main`, plus branch `accounts-sync` (accounts, sync and Google sign-in)._

These docs are the current, consolidated picture of the product. The older working papers in `docs/team/` (00–42) are the history: the research, debates and build reports these docs were distilled from. **When a working paper and these docs disagree, these docs win.** Any change to a decision also gets a line in `docs/team/decisions.md`.

| # | Doc | Read it to learn… | Audience |
|---|---|---|---|
| 01 | [Strategy](01-strategy.md) | why Lingua exists, who it is for, how it wins, what we will not do, and the roadmap | everyone |
| 02 | [PRD](02-prd.md) | the requirements: what the product must do, how well, and how we measure it | PM, eng, QA |
| 03 | [CUJs](03-cujs.md) | the critical user journeys, each with acceptance criteria and the test that proves it | PM, QA, eng |
| 04 | [User flows](04-flows.md) | every flow as a diagram: onboarding, daily practice, lesson, goals, sign-in, sync, sign-out | design, eng |
| 05 | [Design](05-design.md) | information architecture, screens, visual system, interaction rules, accessibility, copy | design, eng |
| 06 | [Architecture](06-architecture.md) | how the system is built: modules, data model, learning engine, offline, sync, security, testing, deploy | eng |

## Status at a glance (2026-11-13)

| Area | State |
|---|---|
| Learning app (Italian + German, es/en, offline PWA) | **Live** on `main` / Vercel. 1225/1225 evals at release. |
| Accounts + cross-device sync (email code, invite-only) | **Built** on `accounts-sync`; all evals green against a fake Supabase, including the review fixes (sync starts right after sign-in, sign-out race, resets/deletions spreading to every device, upload volume, format gate). Not yet run against a real Supabase: see the launch gates in PRD §6. |
| Sign in with Google | **Built** on `accounts-sync`, behind `NEXT_PUBLIC_AUTH_GOOGLE=1`. Needs a Google OAuth client set up (see `docs/setup-accounts.md` §11). Not yet tried on a real iPhone. |
| Invite links, "Save your progress" offer, "Share my week", study buddies | Specced, not built (v1.1). |
| Native app (App Store / Play) | Not planned yet. See Strategy §7. |
