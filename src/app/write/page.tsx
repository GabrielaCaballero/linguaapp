"use client";
// Writing practice (docs/team/52): a short text on a real task, instant checks on the phone,
// then feedback from the AI tutor run by the owner (signed-in learners only, with quotas).
// Advisory only: grades never change the review schedule, placement or goals.
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useDB } from "@/lib/store";
import { accountHref } from "@/lib/nav";
import { BackHeader, Loading, useT } from "@/components/ui";
import { Icon } from "@/components/icons";
import { deleteEssay, gradeEssay, isSyncConfigured, myEssays, useAccount, type EssayError, type EssayResult, type EssayRow } from "@/lib/sync/client";
import { instantChecks, taskById, wordCount, WRITING_TASKS, type InstantCheck, type WritingTask } from "../../../supabase/functions/_shared/writing";

export default function WritePage() {
  return (
    <Suspense fallback={<Loading />}>
      <WriteRoute />
    </Suspense>
  );
}

function WriteRoute() {
  const sp = useSearchParams();
  const id = sp.get("task");
  return id ? <Task key={id} id={id} /> : <TaskList />;
}

function TaskList() {
  const db = useDB();
  const t = useT(db);
  const acct = useAccount();
  const [mine, setMine] = useState<EssayRow[] | null>(null);
  const signedIn = !!acct.user;
  useEffect(() => {
    if (!signedIn) return;
    let live = true;
    void myEssays().then((r) => live && setMine(r));
    return () => {
      live = false;
    };
  }, [signedIn]);
  if (!db) return <Loading />;
  const lang = db.profile.activeLang;
  const base = db.profile.courses[lang]?.explainIn ?? db.profile.appLang;
  const tasks = WRITING_TASKS.filter((w) => w.lang === lang);
  return (
    <main className="screen">
      <BackHeader title={t.writeTitle} backLabel={t.back} href="/path" />
      <p className="muted" style={{ margin: "4px 0 16px" }}>{t.writeSub}</p>
      <div className="stack" style={{ gap: 12 }}>
        {tasks.map((w) => (
          <Link key={w.id} href={`/write?task=${w.id}`} className="card stack" style={{ gap: 4, textDecoration: "none", color: "inherit" }}>
            <span className="caption">{w.cefr} · {w.register === "formal" ? t.writeFormal : t.writeInformal}</span>
            <span className="h2" style={{ fontSize: "1.05rem" }}>{w.title[base]}</span>
            <span className="caption">{t.writeWordsAim(w.minWords, w.maxWords)}</span>
          </Link>
        ))}
      </div>
      {signedIn && mine && mine.length > 0 && (
        <section style={{ marginTop: 28 }}>
          <h2 className="h2">{t.writeHistory}</h2>
          <div className="stack" style={{ gap: 8, marginTop: 8 }}>
            {mine.map((e) => (
              <div key={e.id} className="card row between" style={{ gap: 8 }}>
                <div className="stack grow" style={{ gap: 2 }}>
                  <span className="label">{taskById(e.task_id)?.title[base] ?? e.task_id}</span>
                  <span className="caption">
                    {new Date(e.created_at).toLocaleDateString()} · {t.writeOverall} {e.result.overall}/5
                  </span>
                </div>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={async () => {
                    if (await deleteEssay(e.id)) setMine((m) => (m ?? []).filter((x) => x.id !== e.id));
                  }}
                >
                  {t.writeDelete}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
      <p className="caption" style={{ marginTop: 24 }}>{t.writePrivacy}</p>
    </main>
  );
}

function Task({ id }: { id: string }) {
  const db = useDB();
  const t = useT(db);
  const router = useRouter();
  const acct = useAccount();
  const task = taskById(id);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<EssayError | null>(null);
  const [result, setResult] = useState<EssayResult | null>(null);
  const checks = useMemo(() => (task && text.trim() ? instantChecks(task, text) : []), [task, text]);
  if (!db) return <Loading />;
  if (!task) {
    router.replace("/write");
    return <Loading />;
  }
  const base = db.profile.courses[task.lang]?.explainIn ?? db.profile.appLang;
  const n = wordCount(text);
  const signedIn = isSyncConfigured() && !!acct.user;

  const submit = async () => {
    setBusy(true);
    setErr(null);
    const r = await gradeEssay(task.id, text, base);
    setBusy(false);
    if ("error" in r) setErr(r.error);
    else setResult(r.result);
  };

  return (
    <main className="screen">
      <BackHeader title={t.writeTitle} backLabel={t.back} href="/write" />
      <div className="stack" style={{ gap: 12, marginTop: 4 }}>
        <span className="caption">{task.cefr} · {task.register === "formal" ? t.writeFormal : t.writeInformal}</span>
        <h1 className="title" style={{ margin: 0 }}>{task.title[base]}</h1>
        <p style={{ margin: 0 }}>{task.prompt[base]}</p>
        <div className="card-soft label">
          <b>{t.writePoints}</b>
          <ul style={{ margin: "4px 0 0", paddingLeft: 18 }}>
            {task.points.map((p, k) => <li key={k}>{p[base]}</li>)}
          </ul>
        </div>
        {!result && (
          <>
            <textarea
              className="input"
              rows={9}
              lang={task.lang}
              value={text}
              onChange={(e) => setText(e.target.value)}
              aria-label={t.writeYourText}
              placeholder={t.writeYourText}
              spellCheck={false}
              autoCorrect="off"
              autoCapitalize="sentences"
              style={{ minHeight: 200, fontFamily: "var(--font-display)", fontSize: "1.05rem", lineHeight: 1.5 }}
              maxLength={2500}
            />
            <div className="row between">
              <span className="caption tabular">{t.writeWordsCount(n, task.minWords, task.maxWords)}</span>
            </div>
            {checks.length > 0 && <Checks checks={checks} task={task} t={t} />}
            {err && <p role="alert" className="label" style={{ color: "var(--miss)", margin: 0 }}>{t.writeErr[err]}</p>}
            {signedIn ? (
              <button className="btn btn-primary" disabled={busy || n < 5} onClick={() => void submit()}>
                {busy ? t.writeGrading : t.writeSubmit}
              </button>
            ) : isSyncConfigured() ? (
              <div className="card stack" style={{ gap: 8 }}>
                <span className="label">{t.writeSignIn}</span>
                <Link className="btn btn-secondary" href={accountHref("home")}>{t.haveAccount}</Link>
              </div>
            ) : (
              <p className="caption">{t.writeNoServer}</p>
            )}
            <p className="caption" style={{ margin: 0 }}>{t.writePrivacy}</p>
          </>
        )}
        {result && <Result result={result} text={text} task={task} t={t} onAgain={() => { setResult(null); setText(""); }} />}
      </div>
    </main>
  );
}

function Checks({ checks, task, t }: { checks: InstantCheck[]; task: WritingTask; t: ReturnType<typeof useT> }) {
  const label = (c: InstantCheck) =>
    c.id === "length"
      ? t.writeCheck.length(task.minWords, task.maxWords)
      : c.id === "register"
        ? task.register === "formal"
          ? t.writeCheck.formal(task.lang)
          : t.writeCheck.informal(task.lang)
        : c.id === "language"
          ? t.writeCheck.language(t.langName[task.lang])
          : t.writeCheck[c.id];
  return (
    <ul className="stack" style={{ gap: 4, margin: 0, padding: 0, listStyle: "none" }} aria-label={t.writeChecks}>
      {checks.map((c) => (
        <li key={c.id} className="row label" style={{ gap: 8, color: c.ok ? "var(--ok)" : "var(--text-2)" }}>
          <span aria-hidden="true">{c.ok ? "✓" : "○"}</span>
          <span>{label(c)}</span>
          <span className="sr-only">{c.ok ? t.correct : t.notYet}</span>
        </li>
      ))}
    </ul>
  );
}

function Result({ result, text, task, t, onAgain }: { result: EssayResult; text: string; task: WritingTask; t: ReturnType<typeof useT>; onAgain: () => void }) {
  return (
    <div className="stack" style={{ gap: 12 }} role="status">
      <div className="card row between">
        <span className="h2">{t.writeOverall}</span>
        <span className="stat tabular">{result.overall}/5</span>
      </div>
      <div className="card" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {(["task", "grammar", "vocabulary", "coherence"] as const).map((k) => (
          <div key={k} className="row between label">
            <span>{t.writeScore[k]}</span>
            <b className="tabular">{result.scores[k]}/5</b>
          </div>
        ))}
      </div>
      {result.wellDone && (
        <div className="card-soft label">
          <b>{t.writeWellDone}</b> {result.wellDone}
        </div>
      )}
      {result.corrections.length > 0 && (
        <div className="card stack" style={{ gap: 10 }}>
          <b className="label">{t.writeFixes}</b>
          {result.corrections.map((c, k) => (
            <div key={k} className="stack" style={{ gap: 2 }}>
              <span lang={task.lang}>
                <s>{c.quote}</s> → <b>{c.fix}</b>
              </span>
              <span className="caption">{c.why}</span>
            </div>
          ))}
        </div>
      )}
      {result.summary && <p className="label" style={{ margin: 0 }}>{result.summary}</p>}
      <details>
        <summary className="caption">{t.writeYourText}</summary>
        <p lang={task.lang} style={{ whiteSpace: "pre-wrap" }}>{text}</p>
      </details>
      <p className="caption" style={{ margin: 0 }}>
        <Icon name="sparkle" size={14} /> {t.writeByAi}
      </p>
      <button className="btn btn-primary" onClick={onAgain}>{t.writeAgain}</button>
      <Link className="btn btn-ghost" href="/write">{t.writeOther}</Link>
    </div>
  );
}
