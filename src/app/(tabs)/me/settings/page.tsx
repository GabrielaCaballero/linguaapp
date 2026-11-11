"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, useSyncExternalStore } from "react";
import type { TargetLang } from "@/content/schema";
import type { DB, Settings } from "@/lib/model";
import { getDB, legacy, replaceDB, resetDB, update, useDB } from "@/lib/store";
import { LANG_NAME } from "@/lib/content";
import { removeCourse, saveGoal, setAppLang, setCourse, setSettings } from "@/lib/actions";
import { downloadText, exportBackup, parseBackup, type BackupPreview } from "@/lib/backup";
import { getConfig, subscribeConfig } from "@/lib/llm/provider";
import { courseLangs } from "@/lib/stats";
import { BackHeader, Loading, Seal, Seg, Sheet, Switch, Toast, useT } from "@/components/ui";
import { Icon } from "@/components/icons";
import { GoalPicker } from "@/components/GoalPicker";

export default function SettingsPage() {
  const db = useDB();
  const t = useT(db);
  const router = useRouter();
  const tutor = useSyncExternalStore(subscribeConfig, () => !!getConfig(), () => false);
  const [toast, setToast] = useState<string | null>(null);
  const [preview, setPreview] = useState<{ db: DB; preview: BackupPreview } | null>(null);
  const [reset, setReset] = useState(false);
  const [resetText, setResetText] = useState("");
  const [removing, setRemoving] = useState<TargetLang | null>(null);
  const [goalFor, setGoalFor] = useState<TargetLang | null>(null);
  const [about, setAbout] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  if (!db) return <Loading />;
  const s = db.profile.settings;
  const set = (p: Partial<Settings>) => setSettings(p);
  const langs = courseLangs(db);

  const exportNow = () => {
    downloadText(`lingua-backup-${new Date().toISOString().slice(0, 10)}.json`, exportBackup(getDB()));
    update((d) => ({ ...d, profile: { ...d.profile, lastBackupAt: Date.now() } }));
  };
  const onFile = async (f: File) => {
    try {
      setPreview(parseBackup(await f.text(), legacy()));
    } catch {
      setToast(t.importBad);
    }
  };

  return (
    <main className="screen">
      <BackHeader title={t.settings} href="/me" />

      <div className="group-title">{t.sCourses}</div>
      <div className="group">
        {langs.map((l) => {
          const c = db.profile.courses[l]!;
          return (
            <div key={l} style={{ padding: "12px 16px", borderBottom: "1px solid var(--line)" }} className="stack">
              <div className="row">
                <Seal lang={l} size={36} />
                <span className="grow" style={{ fontWeight: 650 }}>{LANG_NAME[l]}</span>
                <button className="icon-btn" aria-label={t.sRemove} onClick={() => setRemoving(l)}><Icon name="trash" size={20} /></button>
              </div>
              <div className="row between">
                <span className="label">{t.sExplainIn}</span>
                <div style={{ width: 180 }}>
                  <Seg label={t.sExplainIn} value={c.explainIn} options={[{ v: "es", label: "Español" }, { v: "en", label: "English" }]} onChange={(v) => setCourse(l, { explainIn: v })} />
                </div>
              </div>
              <div className="row" style={{ gap: 8 }}>
                <button className="btn btn-secondary btn-sm" onClick={() => setGoalFor(l)}>{t.sGoal}</button>
                <button className="btn btn-secondary btn-sm" onClick={() => router.push(`/placement?lang=${l}`)}>{t.sRetake}</button>
              </div>
            </div>
          );
        })}
        {langs.length < 2 && (
          <button className="cell" onClick={() => router.push("/onboarding")}>
            <Icon name="plus" size={20} className="accent" />
            <span className="grow">{t.addLanguage}</span>
          </button>
        )}
      </div>

      <div className="group-title">{t.sAppLang}</div>
      <div className="group" style={{ padding: 12 }}>
        <Seg label={t.sAppLang} value={db.profile.appLang} options={[{ v: "es", label: "Español" }, { v: "en", label: "English" }]} onChange={setAppLang} />
      </div>

      <div className="group-title">{t.sLearning}</div>
      <div className="group">
        <div className="cell">
          <span className="grow">{t.sSession}</span>
          <div style={{ width: 160 }}>
            <Seg label={t.sSession} value={s.sessionMinutes} options={[3, 5, 10].map((v) => ({ v: v as 3 | 5 | 10, label: `${v}′` }))} onChange={(v) => set({ sessionMinutes: v })} />
          </div>
        </div>
        <div className="cell">
          <span className="grow">{t.sDays}</span>
          <button className="icon-btn" aria-label="−" onClick={() => set({ daysPerWeek: Math.max(3, s.daysPerWeek - 1) })}>−</button>
          <span className="tabular" style={{ fontWeight: 700, minWidth: 16, textAlign: "center" }}>{s.daysPerWeek}</span>
          <button className="icon-btn" aria-label="+" onClick={() => set({ daysPerWeek: Math.min(7, s.daysPerWeek + 1) })}>+</button>
        </div>
        <Row label={t.sListening} on={s.listening} onChange={(v) => set({ listening: v })} />
        <Row label={t.sSpeaking} sub={t.sSpeakingSoon} on={false} onChange={() => {}} disabled />
        <Row label={t.sBridge} on={s.bridgeTips} onChange={(v) => set({ bridgeTips: v })} />
        <Row label={t.sSpeed} on={s.speedTimer} onChange={(v) => set({ speedTimer: v })} />
      </div>

      <div className="group-title">{t.sFeel}</div>
      <div className="group">
        <Row label={t.sSounds} on={s.sounds} onChange={(v) => set({ sounds: v })} />
        <Row label={t.sVibration} on={s.vibration} onChange={(v) => set({ vibration: v })} />
        <Row label={t.sMotion} on={s.reduceMotion === "on"} onChange={(v) => set({ reduceMotion: v ? "on" : "system" })} />
        <div className="cell">
          <span className="grow">{t.sTheme}</span>
          <div style={{ width: 210 }}>
            <Seg label={t.sTheme} value={s.theme} options={[{ v: "system", label: t.themeSystem }, { v: "light", label: t.themeLight }, { v: "dark", label: t.themeDark }]} onChange={(v) => set({ theme: v })} />
          </div>
        </div>
      </div>

      <div className="group-title">✦</div>
      <div className="group">
        <Link href="/me/settings/tutor" className="cell">
          <Icon name="sparkle" size={20} className="accent" />
          <span className="grow">
            {t.sTutor}
            <div className="cell-sub">{tutor ? t.tutorOn : t.tutorNot}</div>
          </span>
          <Icon name="chevron" size={18} className="muted" />
        </Link>
      </div>

      <div className="group-title">{t.sData}</div>
      <div className="group">
        <button className="cell" onClick={exportNow}><Icon name="download" size={20} /><span className="grow">{t.sExport}</span></button>
        <button className="cell" onClick={() => fileRef.current?.click()}><Icon name="upload" size={20} /><span className="grow">{t.sImport}</span></button>
        <button className="cell" onClick={() => setReset(true)} style={{ color: "var(--miss)" }}><Icon name="trash" size={20} /><span className="grow">{t.sReset}</span></button>
        <input ref={fileRef} type="file" accept="application/json,.json" hidden onChange={(e) => { if (e.target.files?.[0]) onFile(e.target.files[0]); e.target.value = ""; }} />
      </div>

      <div className="group" style={{ marginTop: 24 }}>
        <button className="cell" onClick={() => setAbout(true)}><Icon name="book" size={20} /><span className="grow">{t.sAbout}</span><Icon name="chevron" size={18} className="muted" /></button>
      </div>
      <p className="caption center" style={{ marginTop: 24 }}>Lingua v2</p>

      <Sheet open={!!preview} onClose={() => setPreview(null)} label={t.importPreview}>
        {preview && (
          <div className="stack">
            <h2 className="h2">{t.importPreview}</h2>
            <p className="muted" style={{ margin: 0 }}>{t.importReplace}</p>
            <div className="card stack" style={{ gap: 6 }}>
              <div className="row between"><span className="caption">{t.importLangs}</span><span>{preview.preview.langs.map((l) => LANG_NAME[l]).join(", ") || "—"}</span></div>
              <div className="row between"><span className="caption">{t.importItems}</span><span className="tabular">{preview.preview.cards}</span></div>
              <div className="row between" style={{ alignItems: "flex-start" }}><span className="caption">{t.importGoals}</span><span style={{ textAlign: "right" }}>{preview.preview.goals.map((g) => <div key={g}>{g}</div>)}</span></div>
            </div>
            <button className="btn btn-primary" onClick={() => { replaceDB(preview.db); setPreview(null); setToast(t.importDone); }}>{t.importDo}</button>
            <button className="btn btn-ghost" onClick={() => setPreview(null)}>{t.cancel}</button>
          </div>
        )}
      </Sheet>

      <Sheet open={reset} onClose={() => setReset(false)} label={t.sReset}>
        <div className="stack">
          <h2 className="h2">{t.sReset}</h2>
          <p className="muted" style={{ margin: 0 }}>{t.resetType(t.resetWord)}</p>
          <input className="input" value={resetText} onChange={(e) => setResetText(e.target.value)} autoCapitalize="characters" aria-label={t.resetWord} />
          <button className="btn btn-primary" disabled={resetText.trim().toUpperCase() !== t.resetWord} style={{ background: resetText.trim().toUpperCase() === t.resetWord ? "var(--miss)" : undefined }} onClick={() => { resetDB(); setReset(false); router.replace("/onboarding"); }}>
            {t.sReset}
          </button>
          <button className="btn btn-ghost" onClick={() => setReset(false)}>{t.cancel}</button>
        </div>
      </Sheet>

      <Sheet open={!!removing} onClose={() => setRemoving(null)} label={t.sRemove}>
        {removing && (
          <div className="stack">
            <h2 className="h2">{t.sRemoveConfirm(LANG_NAME[removing])}</h2>
            <button className="btn btn-primary" style={{ background: "var(--miss)", boxShadow: "none" }} onClick={() => { removeCourse(removing); setRemoving(null); if (langs.length <= 1) router.replace("/onboarding"); }}>{t.sRemove}</button>
            <button className="btn btn-ghost" onClick={() => setRemoving(null)}>{t.cancel}</button>
          </div>
        )}
      </Sheet>

      <Sheet open={!!goalFor} onClose={() => setGoalFor(null)} label={t.sGoal}>
        {goalFor && (
          <>
            <h2 className="title" style={{ marginBottom: 16 }}>{t.goalTitle(t.langName[goalFor])}</h2>
            <GoalPicker lang={goalFor} base={db.profile.courses[goalFor]!.explainIn} appLang={db.profile.appLang} current={db.profile.courses[goalFor]!.placement?.cefr ?? "A0"} daysPerWeek={s.daysPerWeek} initial={db.profile.courses[goalFor]!.goal} t={t} cta={t.save} onSave={(g) => { saveGoal(goalFor, g); setGoalFor(null); }} />
          </>
        )}
      </Sheet>

      <Sheet open={about} onClose={() => setAbout(false)} label={t.sAbout}>
        <h2 className="h2" style={{ marginBottom: 12 }}>{t.sAbout}</h2>
        <ul className="stack" style={{ paddingLeft: 18, margin: "0 0 16px" }}>
          {t.about.map((x) => <li key={x} className="label">{x}</li>)}
        </ul>
        <button className="btn btn-secondary" onClick={() => setAbout(false)}>{t.close}</button>
      </Sheet>
      <Toast text={toast} onDone={() => setToast(null)} />
    </main>
  );
}

function Row({ label, sub, on, onChange, disabled }: { label: string; sub?: string; on: boolean; onChange: (v: boolean) => void; disabled?: boolean }) {
  return (
    <label className="cell" style={{ opacity: disabled ? 0.55 : 1 }}>
      <span className="grow">
        {label}
        {sub && <div className="cell-sub">{sub}</div>}
      </span>
      <Switch checked={on} onChange={onChange} label={label} disabled={disabled} />
    </label>
  );
}
