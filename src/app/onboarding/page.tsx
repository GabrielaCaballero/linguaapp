"use client";

import { InstallHint } from "@/components/InstallHint";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import type { BaseLang, Cefr, TargetLang } from "@/content/schema";
import type { Anchor, Experience, Goal } from "@/lib/model";
import { getDB, useDB } from "@/lib/store";
import { dict } from "@/lib/i18n";
import { LANG_NAME, units } from "@/lib/content";
import { priorMean, selfReported } from "@/lib/placement";
import { clock } from "@/lib/dates";
import { accountHref } from "@/lib/nav";
import { clearSetupDraft, loadSetupDraft, saveSetupDraft } from "@/lib/setupDraft";
import { getEngine, isSyncConfigured, useAccount } from "@/lib/sync/client";
import { applyPlacement, finishOnboarding, saveGoal, setActiveLang, setAnchor, setAppLang, setCourse, skipPendingGoals } from "@/lib/actions";
import { hasVoice, voicesReady } from "@/lib/speech";
import { Icon } from "@/components/icons";
import { Loading, Seal, Seg, Toast } from "@/components/ui";
import { PlacementResult, PlacementTest, type PlacementOutcome } from "@/components/Placement";
import { SimpleGoal } from "@/components/GoalPicker";

type StepId = "welcome" | "appLang" | "langs" | "explain" | "exp" | "level" | "cando" | "pIntro" | "placement" | "pResult" | "account" | "goal" | "anchor";
interface Step { id: StepId; lang?: TargetLang }
interface LangDraft { explainIn: BaseLang; exp?: Experience; canDo: (number | null)[]; outcome?: PlacementOutcome; goal?: Goal; /** "I know my level": pick it instead of taking the test. */ known?: boolean }

export default function Onboarding() {
  return (
    <Suspense fallback={<Loading />}>
      <OnboardingRoute />
    </Suspense>
  );
}

/** Keyed on the URL nonce so "Add a language" always starts a fresh flow. */
function OnboardingRoute() {
  const db = useDB();
  const sp = useSearchParams();
  if (!db) return <Loading />;
  return <Flow key={sp.toString()} signedIn={sp.has("signedIn")} backFromAccount={sp.has("back")} />;
}

/**
 * `signedIn`: arriving from a new, empty account — skip the welcome, whose main button is "Sign in".
 * `backFromAccount`: Back on the mid-setup sign-up screen.
 */
function Flow({ signedIn, backFromAccount }: { signedIn: boolean; backFromAccount: boolean }) {
  const router = useRouter();
  const [initial] = useState(() => getDB());
  const mode: "new" | "add" | "goalOnly" = !initial.profile.onboarded ? "new" : (initial.profile.pendingGoal?.length ?? 0) > 0 ? "goalOnly" : "add";
  // Answers from before the sign-up step (setup continues where it was).
  const [saved] = useState(() => (mode === "new" ? loadSetupDraft<LangDraft>() : null));
  const existing = Object.keys(initial.profile.courses) as TargetLang[];
  const [appLang, setAppLangDraft] = useState<BaseLang>(saved?.appLang ?? initial.profile.appLang);
  const [langs, setLangs] = useState<TargetLang[]>(mode === "goalOnly" ? initial.profile.pendingGoal! : (saved?.langs ?? []));
  const [drafts, setDrafts] = useState<Partial<Record<TargetLang, LangDraft>>>(() => {
    if (saved) return saved.drafts;
    if (mode !== "goalOnly") return {};
    const out: Partial<Record<TargetLang, LangDraft>> = {};
    for (const l of initial.profile.pendingGoal!) out[l] = { explainIn: initial.profile.courses[l]?.explainIn ?? "es", canDo: [] };
    return out;
  });
  const [anchor, setAnchorDraft] = useState<Anchor | undefined>(undefined);
  const [idx, setIdx] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [voices, setVoices] = useState(false);
  const t = dict(appLang);
  const syncOn = isSyncConfigured();
  const acct = useAccount();

  useEffect(() => {
    voicesReady().then(() => setVoices(true));
  }, []);
  // UI language and accent switch at once
  useEffect(() => {
    document.documentElement.lang = appLang;
  }, [appLang]);
  useEffect(() => {
    if (langs[0]) document.documentElement.dataset.lang = langs[0];
  }, [langs]);

  const steps: Step[] = [];
  if (mode === "new") {
    // The welcome screen has the language switch; signed in (no welcome) asks it as a step.
    if (!signedIn) steps.push({ id: "welcome" });
    else steps.push({ id: "appLang" });
  }
  if (mode !== "goalOnly") steps.push({ id: "langs" });
  // Where each language starts first (no account needed), then the account, then goals:
  // there is nothing to plan for before there's somewhere to keep it (owner, 2026-11-19).
  if (mode !== "goalOnly")
    for (const l of langs) {
      const d = drafts[l];
      // Which language explains this one: Spanish or English, per language (owner, 2026-11-20).
      steps.push({ id: "explain", lang: l }, { id: "exp", lang: l });
      if (d?.known) steps.push({ id: "level", lang: l });
      else if (d?.exp && d.exp !== "never") steps.push({ id: "cando", lang: l }, { id: "pIntro", lang: l }, { id: "placement", lang: l }, { id: "pResult", lang: l });
    }
  if (mode === "new" && syncOn && !acct.user && langs.length) steps.push({ id: "account" });
  for (const l of langs) steps.push({ id: "goal", lang: l });
  if (mode === "new") steps.push({ id: "anchor" });
  const step = steps[Math.min(idx, steps.length - 1)];
  const lang = step.lang;
  const d = lang ? drafts[lang] : undefined;
  const go = () => setIdx((i) => i + 1);
  const back = () => setIdx((i) => Math.max(0, i - 1));
  const patch = (l: TargetLang, p: Partial<LangDraft>) => setDrafts((x) => ({ ...x, [l]: { ...(x[l] ?? { explainIn: appLang, canDo: [] }), ...p } }));

  // Coming back to setup with saved answers: straight to the sign-up step (Back: the step
  // before it), or, signed in by now, to the first goal. Once the account state is known.
  const resumed = useRef(false);
  const settled = !syncOn || acct.ready;
  useEffect(() => {
    if (resumed.current || !saved || !settled) return;
    resumed.current = true;
    const at = steps.findIndex((s) => s.id === "account");
    setIdx(at >= 0 ? (backFromAccount ? at - 1 : at) : Math.max(0, steps.findIndex((s) => s.id === "goal")));
  });
  // The sign-up step: keep the answers, then the account screen (it comes back here).
  const atAccount = step.id === "account";
  useEffect(() => {
    if (!atAccount) return;
    saveSetupDraft<LangDraft>({ appLang, langs, drafts });
    setAppLang(appLang);
    router.replace(accountHref("setup"));
  }, [atAccount, appLang, langs, drafts, router]);

  const commit = (lastGoal?: { lang: TargetLang; goal: Goal }) => {
    clearSetupDraft();
    const all = { ...drafts };
    if (lastGoal) all[lastGoal.lang] = { ...(all[lastGoal.lang] as LangDraft), goal: lastGoal.goal };
    if (mode === "new") setAppLang(appLang);
    for (const l of langs) {
      const x = all[l];
      if (!x) continue;
      if (mode !== "goalOnly") {
        setCourse(l, { explainIn: x.explainIn, addedAt: clock(), experience: x.exp, unit: x.outcome?.unit ?? 1 });
        if (x.outcome) {
          const s = x.outcome.state;
          applyPlacement(l, { theta: s.theta, se: s.se, cefr: x.outcome.cefr, at: clock(), items: s.responses.length, seeded: 0 }, x.outcome.unit, x.outcome.seedIds);
        }
      }
      if (x.goal) saveGoal(l, x.goal);
    }
    if (mode !== "goalOnly" && langs[0]) setActiveLang(langs[0]);
    if (anchor) setAnchor(anchor);
    finishOnboarding();
  };

  const onGoal = (g: Goal) => {
    if (!lang) return;
    patch(lang, { goal: g });
    const isLast = idx >= steps.length - 1;
    if (isLast) {
      commit({ lang, goal: g });
      router.replace("/");
    } else go();
  };

  const total = steps.length;
  const header = step.id !== "welcome" && step.id !== "placement" && (
    <div className="row between" style={{ minHeight: 48, marginLeft: -12 }}>
      {idx > 0 || mode !== "new" ? (
        <button
          className="icon-btn"
          aria-label={t.back}
          onClick={() => {
            if (idx > 0) return back();
            // Today sends anyone with a pending goal straight back here, so leaving the
            // goal-only flow must clear it first, or Back would loop forever.
            if (mode === "goalOnly") skipPendingGoals();
            router.replace("/");
          }}
        >
          <Icon name="back" />
        </button>
      ) : (
        <span />
      )}
      <div className="step-dots" aria-hidden="true">
        {Array.from({ length: Math.min(total, 9) }, (_, k) => (
          <i key={k} className={Math.round((idx / Math.max(1, total - 1)) * (Math.min(total, 9) - 1)) === k ? "on" : ""} />
        ))}
      </div>
      <span style={{ width: 44 }} />
    </div>
  );

  let body: React.ReactNode = null;
  switch (step.id) {
    case "welcome":
      body = (
        <>
          <div className="row" style={{ justifyContent: "flex-end", minHeight: 48 }}>
            {/* Saved at once, so "I already have an account" opens in this language too. */}
            <Seg label={t.sAppLang} value={appLang} options={[{ v: "es" as BaseLang, label: "Español" }, { v: "en" as BaseLang, label: "English" }]} onChange={(b) => { setAppLangDraft(b); setAppLang(b); }} />
          </div>
          <div className="grow" style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-logo logo-light" src="/brand/linguina.svg" alt={t.appName} width={180} height={56} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-logo logo-dark" src="/brand/linguina-on-dark.svg" alt={t.appName} width={180} height={56} />
            <h1 className="hero" style={{ fontSize: "2.25rem", marginTop: 32, whiteSpace: "pre-line" }}>{t.welcomeTitle}</h1>
            <p className="muted" style={{ marginTop: 12 }}>{t.welcomeSub}</p>
            {/* How it works: the test is free; the account keeps what comes after. */}
            <ol className="how">
              {(syncOn ? t.welcomeSteps : t.welcomeSteps.slice(0, 2)).map((s, k) => (
                <li key={k}>
                  <span className="how-n" aria-hidden="true">{k + 1}</span>
                  <span>
                    {s}
                    {k === 0 && syncOn && <span className="how-free"> · {t.welcomeStepFree}</span>}
                  </span>
                </li>
              ))}
            </ol>
            <InstallHint t={t} />
          </div>
          <div className="bottom-bar">
            {syncOn ? (
              <>
                {/* New people start (the level test needs no account; saving it does); returning ones sign in. */}
                <button className="btn btn-primary" onClick={go}>{t.getStarted}</button>
                <button className="btn btn-secondary" onClick={() => router.push(accountHref("welcome"))}>{t.haveAccountYes}</button>
              </>
            ) : (
              <button className="btn btn-primary" onClick={go}>{t.getStarted}</button>
            )}
          </div>
        </>
      );
      break;
    case "appLang":
      body = (
        <Question title={t.appLangTitle} sub={t.appLangSub} next={go} t={t}>
          {(["es", "en"] as BaseLang[]).map((b) => (
            <Choice key={b} on={appLang === b} onClick={() => setAppLangDraft(b)} title={t.baseName[b]} />
          ))}
        </Question>
      );
      break;
    case "langs": {
      const avail = (["it", "de"] as TargetLang[]).filter((l) => !existing.includes(l));
      body = (
        <Question title={t.learnWhatTitle} sub={t.learnWhatSub} next={go} disabled={!langs.length} t={t}>
          {avail.map((l) => (
            <Choice
              key={l}
              on={langs.includes(l)}
              onClick={() => {
                setLangs((x) => (x.includes(l) ? x.filter((y) => y !== l) : [...x, l]));
                if (!drafts[l]) patch(l, { explainIn: appLang, canDo: [null, null, null] });
              }}
              title={LANG_NAME[l]}
              sub={l === "it" ? t.itTag : t.deTag}
              seal={l}
              multi
            />
          ))}
        </Question>
      );
      break;
    }
    case "explain":
      body = (
        <Question title={t.explainInTitle(t.langName[lang!])} sub={t.explainInSub} next={go} t={t} seal={lang}>
          {(["es", "en"] as BaseLang[]).map((b) => (
            <Choice key={b} on={d?.explainIn === b} onClick={() => patch(lang!, { explainIn: b })} title={t.baseName[b]} />
          ))}
          {lang === "it" && d?.explainIn === "es" && <p className="card-soft label" style={{ margin: 0 }}>{t.shortcutTip}</p>}
        </Question>
      );
      break;
    case "exp": {
      const opts: { v: Experience; title: string; sub: string }[] = [
        { v: "never", title: t.expNever, sub: t.expNeverSub },
        { v: "bit", title: t.expBit, sub: t.expBitSub },
        { v: "classes", title: t.expClasses, sub: t.expClassesSub },
        { v: "lived", title: t.expLived, sub: t.expLivedSub },
      ];
      body = (
        <Question title={t.experienceTitle(t.langName[lang!])} next={go} disabled={!d?.exp} t={t} seal={lang}>
          {opts.map((o) => (
            <Choice key={o.v} on={!d?.known && d?.exp === o.v} onClick={() => patch(lang!, { exp: o.v, known: false, outcome: o.v === "never" ? undefined : d?.known ? undefined : d?.outcome })} title={o.title} sub={o.sub} />
          ))}
          <Choice on={!!d?.known} onClick={() => patch(lang!, { exp: "classes", known: true, outcome: undefined })} title={t.expKnown} sub={t.expKnownSub} />
        </Question>
      );
      break;
    }
    case "level": {
      const levels: { v: Cefr; title: string; sub: string }[] = [
        { v: "A1.1", title: "A1", sub: t.knowA1 },
        { v: "A2", title: "A2", sub: t.knowA2 },
        { v: "B1", title: "B1", sub: t.knowB1 },
        { v: "B2", title: "B2", sub: t.knowB2 },
      ];
      body = (
        <Question title={t.levelTitle(t.langName[lang!])} sub={t.levelSub} next={go} disabled={!d?.outcome} t={t} seal={lang}>
          {levels.map((o) => (
            <Choice key={o.v} on={d?.outcome?.cefr === o.v} onClick={() => patch(lang!, { outcome: selfReported(units(lang!), o.v) })} title={o.title} sub={o.sub} />
          ))}
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => patch(lang!, { known: false, outcome: undefined })} // the check's steps take this step's place
          >
            {t.takeCheck}
          </button>
        </Question>
      );
      break;
    }
    case "cando": {
      const qs = lang === "it" ? t.canDoIt : t.canDoDe;
      const vals = d?.canDo ?? [null, null, null];
      body = (
        <Question title={t.canDoTitle} next={go} disabled={vals.some((v) => v === null)} t={t} seal={lang}>
          {qs.map((q, k) => (
            <div key={k} className="card stack" style={{ padding: 16, gap: 10 }}>
              <div className="label">{q}</div>
              <div className="seg">
                {[
                  { v: 1, l: t.yes },
                  { v: 0, l: t.partly },
                  { v: -1, l: t.no },
                ].map((o) => (
                  <button key={o.v} aria-pressed={vals[k] === o.v} onClick={() => patch(lang!, { canDo: vals.map((x, j) => (j === k ? o.v : x)) })}>
                    {o.l}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </Question>
      );
      break;
    }
    case "pIntro":
      body = (
        <>
          <div className="grow stack" style={{ justifyContent: "center", textAlign: "center", alignItems: "center", gap: 16 }}>
            <Seal lang={lang!} size={72} />
            <h1 className="title">{t.placementIntroTitle}</h1>
            <p className="muted" style={{ margin: 0 }}>{t.placementIntroSub}</p>
          </div>
          <div className="bottom-bar">
            <button className="btn btn-primary" onClick={go}>{t.placementStart}</button>
            <button
              className="btn btn-ghost"
              onClick={() => {
                patch(lang!, { exp: "never", outcome: undefined });
                setIdx((i) => i - 1); // cando + placement steps disappear; land on this language's goal
              }}
            >
              {t.imBeginner}
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => {
                patch(lang!, { known: true, outcome: undefined });
                setIdx((i) => i - 1); // cando + test steps become the single "pick your level" step
              }}
            >
              {t.expKnown}
            </button>
          </div>
        </>
      );
      break;
    case "placement":
      body = (
        <PlacementTest
          key={lang}
          lang={lang!}
          base={d!.explainIn}
          mu={priorMean(d!.exp ?? "bit", (d!.canDo ?? []).filter((x): x is number => x !== null))}
          t={t}
          canListen={voices && hasVoice(lang!)}
          onClose={back}
          onDone={(o) => {
            patch(lang!, { outcome: o });
            go();
          }}
        />
      );
      break;
    case "pResult":
      body = d?.outcome ? <PlacementResult lang={lang!} base={d.explainIn} outcome={d.outcome} t={t} onChange={(o) => patch(lang!, { outcome: o })} onContinue={go} /> : null;
      break;
    case "account":
      body = <Loading />;
      break;
    case "goal":
      body = (
        <>
          <div className="row" style={{ gap: 12, margin: "8px 0 20px" }}>
            <Seal lang={lang!} size={40} />
            <h1 className="title">{t.goalTitle(t.langName[lang!])}</h1>
          </div>
          <SimpleGoal
            key={lang}
            lang={lang!}
            base={d?.explainIn ?? appLang}
            appLang={appLang}
            current={d?.outcome?.cefr ?? initial.profile.courses[lang!]?.placement?.cefr ?? "A0"}
            startUnit={d?.outcome?.unit ?? initial.profile.courses[lang!]?.unit ?? 1}
            daysPerWeek={initial.profile.settings.daysPerWeek}
            initial={d?.goal ?? initial.profile.courses[lang!]?.goal}
            t={t}
            onSave={onGoal}
          />
        </>
      );
      break;
    case "anchor": {
      const slots: { slot: Anchor["slot"]; label: string; time: string }[] = [
        { slot: "morning", label: t.anchorMorning, time: "08:00" },
        { slot: "commute", label: t.anchorCommute, time: "08:30" },
        { slot: "lunch", label: t.anchorLunch, time: "13:00" },
        { slot: "evening", label: t.anchorEvening, time: "20:00" },
      ];
      body = (
        <>
          <h1 className="title" style={{ marginTop: 8 }}>{t.anchorTitle}</h1>
          <p className="muted">{t.anchorSub}</p>
          <div className="chips" style={{ marginTop: 8 }}>
            {slots.map((s) => (
              <button key={s.slot} className="chip" aria-pressed={anchor?.slot === s.slot} onClick={() => setAnchorDraft({ slot: s.slot, time: anchor?.slot === s.slot ? anchor.time : s.time })}>
                {s.label}
              </button>
            ))}
          </div>
          {anchor && (
            <input type="time" className="input" style={{ marginTop: 16, maxWidth: 160 }} value={anchor.time} onChange={(e) => setAnchorDraft({ ...anchor, time: e.target.value })} aria-label={t.timeLabel} />
          )}
          <div className="bottom-bar">
            <button
              className="btn btn-primary"
              onClick={() => {
                commit();
                // Signed up mid-setup: upload the finished setup now (other devices wait for it).
                void getEngine()?.syncNow();
                // Today becomes the screen under the first lesson (so Back lands there, not outside
                // the app): replace onboarding with Today, which then opens the lesson on top.
                // Without an account, saving the progress comes first (AccountGate); Today then
                // opens the lesson after signing in.
                try {
                  sessionStorage.setItem("lingua:autostart", "1");
                } catch {
                  /* no storage: Today just shows its Start button */
                }
                router.replace(syncOn && !acct.user ? accountHref("required") : "/");
              }}
            >
              {t.startFirst}
            </button>
          </div>
        </>
      );
      break;
    }
  }

  return (
    <main className="screen full" key={`${step.id}-${lang ?? ""}`}>
      {header}
      <div className="fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {body}
      </div>
      <Toast text={toast} onDone={() => setToast(null)} />
    </main>
  );
}

function Question({ title, sub, children, next, disabled, t, seal }: { title: string; sub?: string; children: React.ReactNode; next: () => void; disabled?: boolean; t: ReturnType<typeof dict>; seal?: TargetLang }) {
  return (
    <>
      <div className="stack" style={{ marginTop: 8 }}>
        {seal && <Seal lang={seal} size={40} />}
        <h1 className="title">{title}</h1>
        {sub && <p className="muted" style={{ margin: 0 }}>{sub}</p>}
      </div>
      <div className="stack" style={{ marginTop: 24 }}>{children}</div>
      <div className="bottom-bar">
        <button className="btn btn-primary" disabled={disabled} onClick={next}>
          {t.continue}
        </button>
      </div>
    </>
  );
}

function Choice({ on, onClick, title, sub, seal }: { on: boolean; onClick: () => void; title: string; sub?: string; seal?: TargetLang; multi?: boolean }) {
  return (
    <button className="choice-card" aria-pressed={on} onClick={onClick}>
      {seal && <Seal lang={seal} size={48} />}
      <span className="grow">
        <span style={{ fontWeight: 650, fontSize: "1.0625rem", display: "block" }}>{title}</span>
        {sub && <span className="caption">{sub}</span>}
      </span>
      <span className="check"><Icon name="check" size={16} strokeWidth={3} /></span>
    </button>
  );
}
