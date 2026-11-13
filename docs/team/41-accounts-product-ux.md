# 41 · Accounts, invites and friends: product + UX

_PM + UX · 2026-11-12 · Reads with 02-product, 03-ux, 05-learning-science, 10-spec. Status: proposal, no code yet._

**Owner's ask:** "I want to share Lingua with friends, and each of them should have their own profile."
**Our answer:** an **optional** account (Google, or an email code). Practice never waits on it. The owner shares a personal invite link. Each friend gets their own private profile, synced across their devices. In v1 friends don't see each other inside the app. Each person can share their own week if they want to (§4).

**Reverses a standing decision.** `decisions.md` says "No account … in v2". Proposed new entry: _"2026-11-12 · product · Optional account (Google / email code), never required to practise. Guest-first. No passwords, no leagues, no in-app social graph in v1."_ Principle 6 in 02-product ("Private and offline. No account required") still holds. It changes from "no account" to "no account **required**".

---

## 1. Where login sits: guest-first, offer to save after the first lesson

**Decision: guest mode by default.** Onboarding gets **zero new steps** before the first lesson. Sign-in is offered once, at the moment progress has value, which is the Results screen of the first session.

| Option | Steps before lesson 1 | Verdict |
|---|---|---|
| Login first (welcome → sign in → …) | +2–3 (pick method, open email / Google consent, return) | ✗ Breaks CUJ-1's "first lesson in ~3 min" and adds a drop-off point before any value. It also fails offline (P4 in a tunnel). |
| Login after placement, before goal | +2–3 mid-flow | ✗ Switching to the mail app midway through placement on iOS loses the flow. Placement drafts aren't committed yet. |
| **Guest → "Save your progress" on first Results** | **0** | ✔ The user has just seen "+8 words", so saving means something. If they skip, nothing is lost on this device. |

**Rules**
- Onboarding itself is unchanged. One exception: an invite can **pre-fill the app language** and skip that screen (§2), so invited friends have one step *fewer*.
- First Results screen: one card under the stats, "Save your progress", with [Continue with Google] [Use my email]. The primary button stays **Continue**, so saving is secondary (03-ux principle 1).
- If skipped, it isn't offered again in lessons. It lives as the top row of Me → Settings, plus one gentle reminder on Me after the **5th** session ("You have 120 words on this phone only"). It never shows mid-lesson and never sends a push.
- **Methods:** Google (one tap on Android, a sheet on iOS) and **email with a 6-digit code plus a magic link in the same email**. The code matters: on iOS, a magic link opens Safari, not the installed PWA, and the two have **separate storage**. Typing the code keeps the user inside the app they're using. No passwords. Sign in with Apple is later, if iOS friends ask for it.
- **First sign-in merges, it never replaces.** Guest data uploads to the new account. If the account already has data (second device), show a preview ("This phone: Italian, 140 words · Your account: Italian, 310 words") and **merge** (review logs are append-only, so union and replay into FSRS). There is no "pick one" choice that discards data.
- Offline: the save card shows "Needs a connection — you can do this later" and never blocks.

## 2. Invite flow and install

**How the owner invites.** Me → Settings → **Invite a friend** → a sheet with:
- the friend's name (optional, so the welcome can say "Hola Lucía"), their app language (es/en, defaults to the owner's) and a suggested language (it/de/either);
- [Share link] opens the native share sheet (WhatsApp, etc.) with a pre-written message (copy in §6). The link is `/i/K7Q2MX`. The code is the last 6 characters, so it can be read aloud and typed in the "Use my email" sheet if a link gets lost.
- A list of sent invites (Pending / Joined) that only the owner sees. She can revoke a pending one.

**Gating.** Practising as a guest needs no invite, because the app is a public PWA. **Creating an account needs a valid invite** during the friends phase. That caps server cost and keeps the circle known. Each invite is single-use and expires after 30 days. Only the owner (admin) can invite in v1. A setting for "friends can invite 3" can come later.

**What a friend sees on first open (`/i/K7Q2MX`)**
1. **Welcome, invite variant:** the same two seals, with the title "Ana te invitó a Lingua" and the usual subtitle. [Empezar]. The "I have a backup" link stays.
2. App language is pre-filled from the invite, so that screen is skipped. **Learn what?** has the suggested language pre-selected. The rest of onboarding runs as in CUJ-1.
3. First lesson → Results → **Save your progress** card, with copy that mentions the invite ("Ana's invite is saved for 30 days"). The invite token is held locally until the account is created.
4. Install sheet (below).

**Install on the phone (PWA)**
- **When:** after the first Results screen (and after saving, if they chose to), shown once as a bottom sheet. If dismissed, it's available in Settings → "Add to home screen". It isn't shown if the app is already running standalone (`display-mode: standalone`).
- **Android Chrome:** a real [Install] button using `beforeinstallprompt`.
- **iOS Safari:** illustrated 3 steps: Share ⎋ → "Add to Home Screen" → Add. On iOS the **home-screen app does not share storage with Safari**. Copy says so plainly, and if the user is a guest it pushes "Save your progress first, then sign in from the icon". This is the strongest product reason for accounts.
- **iOS in-app browsers** (WhatsApp/Instagram webviews can't install): a slim card, "Open in Safari to install", with a copy-link button.
- **iOS Safari, not installed, on the invite welcome:** a non-blocking tip, "Tip: add Lingua to your home screen first, so your progress lives there." It never blocks practice.

## 3. Profile and account settings

**Me header** (03-ux §5.6 already plans an initial avatar): a circle with the initial plus the **display name**, and "Learning since Oct 2026". Guests see "Guest · progress on this phone only" with a link to save.

**Settings → new top group "Account"** (52px inset rows):

| Row | Guest | Signed in |
|---|---|---|
| **Save your progress** | ✔ top row | — |
| Name | "Add your name" (stored locally) | Display name, editable. 1–30 chars, first name is fine. Never shown to anyone else in v1. |
| Email / method | — | "ana@… · Google" (read-only) |
| Sync | — | "Synced · 2 min ago" / "Offline — will sync later". Tap to sync now. |
| Invite a friend | — | Owner only (v1) |

Existing groups are unchanged but now sync: **Learning** (courses, explain-in es/en per course, goal per course, practice days, session length), **App language** (es/en), Feel, AI tutor. **The AI key never syncs** and stays device-only (10-spec §4.10).

**Your data** (existing group, extended): Export backup (unchanged JSON, now also with name and email) · Import backup · Reset course · **Sign out** · **Delete account**.
- **Sign out:** confirm sheet. If everything is synced, it removes this profile from the device and returns to Welcome. If there are unsynced changes (offline), it warns "3 sessions haven't synced yet" with [Sync first] (primary) and [Sign out anyway]. So a shared family tablet can switch people cleanly.
- **Delete account:** a sheet that offers **Export first** (primary), then typed confirmation of the word "BORRAR"/"DELETE" (same pattern as Reset). It deletes server data immediately and permanently, with no 30-day limbo. Device data is also cleared, with an option to "Keep practising as a guest on this phone". This matters legally because friends are in CH/ES/AR (GDPR erasure, Swiss FADP).
- **Export:** the existing JSON (GDPR portability). Telemetry stays on-device and isn't synced (10-spec §4.11).

**What the server stores:** name, email, appLang, courses/goals, cards, review log, sessions, custom words, invite record. **It doesn't store** the AI key, the events log, or anything about other users. A short "What we store" line sits under Account, with a "How Lingua teaches" style page behind it.

## 4. Social: none inside the app in v1, plus a user-owned "Share my week"

**Recommendation:** no friend list, no visibility of others, no feed, no leaderboard in v1. Instead, a **"Share my week" card** that the user sends wherever they like.

Why:
- 05-LS §1 #9 and E5: relatedness helps, but only opt-in, cooperative, and low-pressure. Leagues and "your friend passed you" are explicitly out.
- This group already talks on WhatsApp. A social graph inside Lingua duplicates that and adds consent, privacy and moderation work. It would also make the account feel required.
- Sharing an image you chose to send passes the LS test ("would the user endorse this mechanic if they saw how it works?") with no ambiguity.

**Share my week (v1):** on Me → week strip → [Share] (Results already has ▢ Share in 03-ux §5.4). It generates a card with the seal(s), "4 practice days this week", "+32 words", and one can-do ("Puedo pedir en un café ✔"). It never includes accuracy, minutes vs. target, or anything that compares. It uses the native share sheet and stores nothing on the server.

**Study buddies (v1.1, specced here, built only if the owner asks after ~3 weeks of use):**
- Both sides opt in through a buddy link (mutual). Max 3 buddies.
- **One** shared signal: a **Monday check-in card** on Today, "Lucía y tú: 7 días de práctica la semana pasada (meta juntos: 8)". It's a cooperative weekly target that both people's practice days fill. No individual ranking or per-person numbers unless each opts in to show their own days.
- No push, no nudge buttons, no "Lucía is ahead". Leaving is silent (the other person sees "Buddy check-in ended"). The card is dismissible and counts as Today's ≤1 contextual card (CUJ-3).

## 5. New CUJs (continuing 10-spec §6) and persona impact

**CUJ-14 · Invited friend → first lesson.** Open `/i/CODE` on a fresh phone. ✔ The welcome says "{Name} te invitó". ✔ App language is pre-filled and its screen skipped. ✔ First lesson in ≤3 min plus placement, with no sign-in asked. ✔ An expired or revoked code still lets the friend practise as a guest, with a quiet "This invite has expired — ask {Name} for a new one".

**CUJ-15 · Save progress (guest → account).** After the first Results → Use my email → type the 6-digit code **inside the installed PWA**. ✔ ≤4 taps plus typing the code. ✔ All cards, reviews and the goal are present afterwards. ✔ Offline shows "needs a connection" and doesn't block. ✔ Google path works on Android Chrome and iOS Safari.

**CUJ-16 · Second device.** Ana signs in on her work Android. ✔ Both languages, goals and due dates appear (±0 days). ✔ A session on phone A shows on phone B after a sync. ✔ If both had guest data, the merge preview shows counts and nothing is lost.

**CUJ-17 · Install.** iOS Safari: the sheet shows 3 steps, and the installed icon opens standalone. If the user was signed in, sign-in from the icon restores everything. Android: the [Install] button works. ✔ In-app browser shows "Open in Safari". ✔ It's never shown when already standalone.

**CUJ-18 · Owner invites.** Settings → Invite a friend → Share link. ✔ ≤30 s. ✔ The invite list shows Pending → Joined after the friend saves progress. ✔ Revoke works.

**CUJ-19 · Sign out / delete.** Sign out with unsynced sessions → warning shown → Sync first → signed out → Welcome. Delete: Export first, then type DELETE. ✔ Signing in again with the same email gives an empty new account (when invited). ✔ The exported JSON imports as a guest (CUJ-11 still passes).

**CUJ-20 · Offline with an account.** CUJ-10 runs signed in, in airplane mode. ✔ No spinner or sign-in wall. ✔ Sync resumes silently, and the "Offline — will sync later" row is accurate.

**Regression guards:** CUJ-1 and CUJ-10 must pass **without ever signing in**. CUJ-9: the AI key never leaves the device. CUJ-11: backups are unchanged.

**New persona, P5 · Lucía, 45, invited friend.** Spanish speaker in Madrid, Android, opens links from WhatsApp, wary of sign-ups. Must feel: _"I started in a minute, and nobody made me register to try it."_

| Persona | Impact |
|---|---|
| P1 Ana (iPhone + work Android) | **Biggest win.** Sync solves her two-device job. She's also the likely owner/inviter. |
| P2 Mateo, 61 | Google one-tap or a 6-digit code is easier than a password. The iOS install steps must be illustrated, not described. |
| P3 Emma | Wants to know what's stored. The "What we store" line and real deletion build trust. |
| P4 Priya, offline commuter | Must be **unchanged**: no sign-in prompts in sessions, sync never blocks, guest is fine forever. |
| P5 Lucía | Invite welcome, skipped language screen, zero sign-up before value. |

## 6. Copy (es = neutral _tú_, no voseo, per R4; en = plain, warm)

| Key | es (Italian learners) | en (German learners) |
|---|---|---|
| welcomeSub (change) | Italiano y alemán. Funciona sin conexión. Sin registrarte. | Italian and German. Works offline. No sign-up needed. |
| inviteWelcome | {name} te invitó a Lingua | {name} invited you to Lingua |
| inviteExpired | Esta invitación venció. Pídele una nueva a {name}; mientras, puedes practicar igual. | This invite has expired. Ask {name} for a new one — you can still practise meanwhile. |
| saveTitle | Guarda tu progreso | Save your progress |
| saveSub | Así no lo pierdes si cambias de teléfono. | So you keep it if you change phones. |
| saveSubInvite | Así no lo pierdes, y la invitación de {name} queda guardada. | So you keep it — and {name}'s invite is saved. |
| google | Continuar con Google | Continue with Google |
| email | Usar mi correo | Use my email |
| codeSent | Te enviamos un código de 6 dígitos a {email}. | We sent a 6-digit code to {email}. |
| codeHint | Escríbelo aquí. También puedes tocar el enlace del correo. | Type it here. You can also tap the link in the email. |
| needsConnection | Necesita conexión. Puedes hacerlo más tarde. | Needs a connection. You can do this later. |
| guestLine | Invitado · tu progreso está solo en este teléfono | Guest · your progress is on this phone only |
| guestNudge | Tienes {n} palabras solo en este teléfono. ¿Las guardamos? | You have {n} words on this phone only. Save them? |
| synced / offlineSync | Sincronizado · hace {t} / Sin conexión: se sincroniza después | Synced · {t} ago / Offline — will sync later |
| installTitle | Ten Lingua a mano | Keep Lingua one tap away |
| installIos | Toca Compartir ⎋, luego «Agregar a inicio». | Tap Share ⎋, then "Add to Home Screen". |
| installIosNote | En iPhone, la app de inicio no ve lo que hiciste en Safari. Guarda tu progreso primero. | On iPhone, the home-screen app can't see what you did in Safari. Save your progress first. |
| openInSafari | Ábrela en Safari para instalarla. | Open it in Safari to install. |
| inviteFriend | Invitar a alguien | Invite a friend |
| inviteMessage | Estoy aprendiendo italiano con Lingua, unos minutos al día. Pruébala: {link} | I'm learning German with Lingua, a few minutes a day. Try it: {link} |
| signOut / signOutWarn | Cerrar sesión / {n} sesiones aún no se sincronizaron. | Sign out / {n} sessions haven't synced yet. |
| syncFirst / signOutAnyway | Sincronizar primero / Cerrar sesión igual | Sync first / Sign out anyway |
| deleteTitle | Borrar mi cuenta | Delete my account |
| deleteSub | Se borra todo lo guardado en la nube, para siempre. Descarga una copia antes si la quieres. | Everything stored online is deleted for good. Download a copy first if you want one. |
| deleteType | Escribe BORRAR para confirmar | Type DELETE to confirm |
| whatWeStore | Guardamos tu nombre, correo y progreso. Tu clave de IA nunca sale de este teléfono. | We store your name, email and progress. Your AI key never leaves this phone. |
| shareWeek | Compartir mi semana | Share my week |
| shareCard | {d} días de práctica esta semana · +{w} palabras | {d} practice days this week · +{w} words |
| buddyCard (v1.1) | {name} y tú: {d} días de práctica (meta juntos: {g}) | You and {name}: {d} practice days (shared goal: {g}) |

## 7. Open questions for engineering (→ 42-accounts-eng)
1. Auth and sync backend (e.g. Supabase Auth + Postgres: email OTP, magic link, Google), and its cost at ~20 users.
2. Merge: union review logs → FSRS replay, so it's deterministic on both devices. Last-write-wins for profile fields.
3. `localStorage` → sync queue. Keep the storage adapter; the server is a mirror, never the source of truth for a live session.
4. Is Google OAuth redirect reliable in iOS standalone PWAs? If not, show only the email code on iOS standalone.
