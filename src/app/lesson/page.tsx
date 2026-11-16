"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Item, TargetLang } from "@/content/schema";
import type { CardV2, Confidence, Mode, Verdict } from "@/lib/model";
import { getDB, useDB } from "@/lib/store";
import { itemById, itemsFor, lexicon, units } from "@/lib/content";
import { buildSession, chooseMode, lastSessionAt, requeue, type Built, type SessionKind, type Task } from "@/lib/session";
import { toFix } from "@/lib/stats";
import { startOfDay } from "@/lib/dates";
import { lessonHref } from "@/lib/nav";
import { endSession, introduce, recordAnswer, regrade, sessionStart } from "@/lib/actions";
import { hasVoice, voicesReady } from "@/lib/speech";
import { feel } from "@/lib/feel";
import type { CheckResult } from "@/lib/check";
import { Icon } from "@/components/icons";
import { Loading, Sheet, useT } from "@/components/ui";
import { Exercise, Guess, type CellResult } from "@/components/lesson/Exercises";
import { GrammarCard, RuleScreen } from "@/components/lesson/Grammar";
import { TableStudy } from "@/components/lesson/Table";
import { grammarPoint } from "@/lib/content";
import { markSeen } from "@/lib/actions";
import type { GrammarPoint } from "@/content/schema";
import { Feedback, type TutorView } from "@/components/lesson/Feedback";
import { Results, type SessionSummary } from "@/components/lesson/Results";
import { explainWithTutor, gradeWithTutor, tutorAvailable } from "@/lib/llm/tutor";

interface FB {
  cells?: CellResult[];
  verdict: Verdict;
  check?: CheckResult;
  text?: string;
  prevCard?: CardV2;
  confidence?: Confidence;
  overridden: boolean;
  typed: boolean;
  tutor?: TutorView;
}

const SPEED_SECONDS = 60;

export default function LessonPage() {
  return (
    <Suspense fallback={<Loading />}>
      <LessonRoute />
    </Suspense>
  );
}

/** Keyed on the URL (which carries a per-visit nonce): every visit is a fresh session. */
function LessonRoute() {
  const sp = useSearchParams();
  return <LessonEntry key={sp.toString()} kindParam={sp.get("kind")} unitParam={sp.get("unit")} />;
}

function LessonEntry({ kindParam, unitParam }: { kindParam: string | null; unitParam: string | null }) {
  const db = useDB();
  const t = useT(db);
  const router = useRouter();
  const [canListen, setCanListen] = useState<boolean | null>(null);
  const kind: SessionKind = kindParam === "review" || kindParam === "new" || kindParam === "speed" ? kindParam : "auto";
  const u = Number(unitParam);

  useEffect(() => {
    let alive = true;
    voicesReady().then(() => {
      if (!alive) return;
      const d = getDB();
      setCanListen(hasVoice(d.profile.activeLang) && d.profile.settings.listening);
    });
    return () => {
      alive = false;
    };
  }, []);

  if (!db || canListen === null) return <Loading />;
  if (!db.profile.courses[db.profile.activeLang]) {
    router.replace("/");
    return <Loading />;
  }
  return <Player kind={kind} unit={u > 0 ? u : undefined} canListen={canListen} t={t} />;
}

function Player({ kind, unit, canListen, t }: { kind: SessionKind; unit?: number; canListen: boolean; t: ReturnType<typeof useT> }) {
  const router = useRouter();
  const db = useDB()!;
  const lang: TargetLang = db.profile.activeLang;
  const course = db.profile.courses[lang]!;
  const base = course.explainIn;
  const settings = db.profile.settings;
  const lex = lexicon(lang);

  const make = (exclude?: Set<string>): Built => {
    const d = getDB();
    const items = itemsFor(lang, d, base).filter((i) => (settings.bridgeTips || i.type !== "bridge") && (kind !== "speed" || i.type !== "paradigm"));
    const idx = new Map(units(lang).map((u) => [u.id, u.index]));
    const now = Date.now();
    return buildSession({
      lang,
      items,
      cards: d.cards,
      reviews: d.reviews,
      lastSessionAt: lastSessionAt(d, lang),
      startUnit: unit ?? course.unit ?? 1,
      unitIndexOf: (i) => idx.get(i.unit) ?? 0,
      now,
      minutes: settings.sessionMinutes,
      kind,
      priority: exclude ? undefined : [...new Set([...d.sessions.filter((x) => x.lang === lang && x.t >= startOfDay(now)).flatMap((x) => x.toFix), ...toFix(d, lang, now)])],
      exclude,
    });
  };
  const [built] = useState<Built>(() => make());
  const pool = useMemo(() => itemsFor(lang, getDB(), base), [lang, base]);

  const [tasks, setTasks] = useState<Task[]>(built.tasks);
  const [idx, setIdx] = useState(0);
  const [fb, setFb] = useState<FB | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [conf, setConf] = useState<Confidence | undefined>(undefined);
  const [confirmClose, setConfirmClose] = useState(false);
  const [summary, setSummary] = useState<SessionSummary | null>(null);
  const [combo, setCombo] = useState(0);
  const [startedAt] = useState(() => Date.now());
  const [taskStart, setTaskStart] = useState(() => Date.now());
  const [speedLeft, setSpeedLeft] = useState(SPEED_SECONDS);
  const [hist, setHist] = useState<boolean[]>([]);
  // Grammar: the full rule in a sheet, and the one-time rule card after a new pattern.
  const [ruleOpen, setRuleOpen] = useState<GrammarPoint | null>(null);
  const [ruleCard, setRuleCard] = useState<GrammarPoint | null>(null);
  const counts = useRef(new Map<string, number>());
  const stats = useRef({ graded: 0, correct: 0, newItems: new Set<string>(), stronger: new Set<string>(), toFix: new Set<string>(), sureWrong: 0, guessRight: 0, typedMiss: false, confUsed: 0 });
  const finished = useRef(false);
  const extensions = useRef(0);
  const speed = kind === "speed";

  useEffect(() => {
    sessionStart(lang, kind);
  }, [lang, kind]);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    const s = stats.current;
    const seconds = Math.round((Date.now() - startedAt) / 1000);
    endSession({ lang, seconds, tasks: idx + 1, graded: s.graded, correct: s.correct, newItems: s.newItems.size, stronger: s.stronger.size, toFix: [...s.toFix], startedAt });
    feel("finish", getDB().profile.settings);
    setSummary({ lang, seconds, newItems: s.newItems.size, stronger: s.stronger.size, toFix: [...s.toFix], sureWrong: s.sureWrong, guessRight: s.guessRight, graded: s.graded, correct: s.correct, typedMiss: s.typedMiss, welcomeBack: built.welcomeBack, confUsed: s.confUsed });
  }, [lang, idx, startedAt, built.welcomeBack]);

  // speed round timer
  useEffect(() => {
    if (!speed || !settings.speedTimer || summary) return;
    const id = setInterval(() => setSpeedLeft((x) => x - 1), 1000);
    return () => clearInterval(id);
  }, [speed, settings.speedTimer, summary]);
  useEffect(() => {
    if (speed && settings.speedTimer && speedLeft <= 0 && !finished.current) {
      const id = setTimeout(finish, 0);
      return () => clearTimeout(id);
    }
  }, [speed, settings.speedTimer, speedLeft, finish]);

  // nothing to do (e.g. review-only with nothing due)
  useEffect(() => {
    if (!tasks.length && !finished.current) {
      const id = setTimeout(finish, 0);
      return () => clearTimeout(id);
    }
  }, [tasks.length, finish]);

  const task = tasks[idx];
  const item: Item | undefined = task ? itemById(getDB(), task.itemId) : undefined;

  // live controller: in-session accuracy shifts the mode ladder
  const shift = useMemo(() => {
    const h = hist.slice(-10);
    if (h.length < 5) return built.shift;
    const acc = h.filter(Boolean).length / h.length;
    return acc > 0.9 ? 1 : acc < 0.7 ? -1 : 0;
  }, [hist, built.shift]);

  const mode: Mode | null = useMemo(() => {
    if (!task || !item) return null;
    return chooseMode(item, getDB().cards[item.id], { canListen, shift, role: task.role });
  }, [task, item, canListen, shift]);

  const next = useCallback(() => {
    setRuleCard(null);
    setFb(null);
    setRevealed(false);
    setConf(undefined);
    setTaskStart(Date.now());
    const elapsed = (Date.now() - startedAt) / 1000;
    const timeUp = !speed && elapsed >= settings.sessionMinutes * 60;
    if (timeUp) {
      // Time's up, but a miss still waiting for its in-session retry gets it (CUJ-5).
      const j = tasks.findIndex((x, k) => k > idx && x.role === "requeue");
      if (j > idx) return setIdx(j);
      return finish();
    }
    if (idx + 1 < tasks.length) return setIdx((i) => i + 1);
    // Out of tasks before the time is up: keep the "5 minutes" honest with another chunk.
    if (!speed && extensions.current < 8) {
      extensions.current++;
      const more = make(new Set(tasks.map((x) => x.itemId))).tasks;
      if (more.length) {
        setTasks((ts) => [...ts, ...more.map((m) => ({ ...m, key: `x${extensions.current}-${m.key}` }))]);
        setIdx((i) => i + 1);
        return;
      }
    }
    finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, tasks, finish, speed, settings.sessionMinutes, startedAt]);

  if (summary) return <Results t={t} summary={summary} onDone={() => router.replace("/")} onMore={speed ? undefined : () => router.replace(lessonHref("auto"))} />;
  if (!task || !item || !mode) return <Loading />;

  const onSubmit = (r: { verdict: Verdict; check?: CheckResult; text?: string; hinted?: boolean; dontKnow?: boolean; cells?: CellResult[] }) => {
    if (fb) return;
    const prevCard = getDB().cards[item.id];
    // "I don't know" answers aren't the learner's own attempt: no "I was right", no tutor.
    const typed = (mode === "recall" || mode === "tiles") && !r.dontKnow;
    recordAnswer({ item, mode, verdict: r.verdict, confidence: conf, source: "checker", ms: Date.now() - taskStart, reschedule: !speed, hinted: r.hinted });
    const s = stats.current;
    s.graded++;
    if (conf) s.confUsed++;
    setHist((h) => [...h, r.verdict !== "wrong"]);
    if (r.verdict !== "wrong") {
      s.correct++;
      // "Got stronger": a correct recall of a word you already had (reviews, seeds, practice).
      if (task.role !== "followup" && prevCard && prevCard.state !== 0 && !s.toFix.has(item.id)) s.stronger.add(item.id);
      if (conf === "guess") s.guessRight++;
      setCombo((c) => c + 1);
    } else {
      s.toFix.add(item.id);
      if (conf === "sure") s.sureWrong++;
      if (typed) s.typedMiss = true;
      setCombo(0);
      if (!speed) setTasks((ts) => requeue(ts, idx, counts.current));
    }
    feel(r.verdict === "correct" ? "success" : r.verdict === "almost" ? "almost" : "miss", getDB().profile.settings);

    if (speed) {
      setTimeout(next, r.verdict === "correct" ? 350 : 900);
      setFb({ verdict: r.verdict, overridden: false, typed: false });
      return;
    }
    const view: FB = { verdict: r.verdict, check: r.check, text: r.text, prevCard, confidence: conf, overridden: false, typed, cells: r.cells };
    // AI tutor: only typed answers the checker didn't accept exactly
    if (typed && r.verdict !== "correct" && r.text && tutorAvailable()) {
      view.tutor = { status: "checking" };
      const key = task.key;
      gradeWithTutor(item, r.text, r.verdict, r.check?.reason, base).then((g) => {
        setFb((cur) => {
          if (!cur || tasksRef.current[idxRef.current]?.key !== key) return cur;
          if (g.kind === "discard") return { ...cur, tutor: { status: "failed" } };
          if (g.kind === "unsure") return { ...cur, tutor: { status: "unsure" } };
          if (g.raised && !cur.overridden) {
            regrade(item, prevCard, g.verdict, "llm", conf);
            if (r.verdict === "wrong") {
              stats.current.toFix.delete(item.id);
              stats.current.correct++;
            }
          }
          return { ...cur, verdict: g.raised ? g.verdict : cur.verdict, tutor: { status: "done", text: g.text, raised: g.raised } };
        });
      });
    }
    setFb(view);
  };

  const onRight = () => {
    if (!fb) return;
    regrade(item, fb.prevCard, "correct", "override", undefined, fb.text);
    const s = stats.current;
    if (fb.verdict === "wrong") s.correct++;
    s.toFix.delete(item.id);
    // drop the requeued copy
    setTasks((ts) => {
      const k = ts.findIndex((x, j) => j > idx && x.itemId === item.id && x.role === "requeue");
      return k >= 0 ? [...ts.slice(0, k), ...ts.slice(k + 1)] : ts;
    });
    setFb({ ...fb, overridden: true });
  };

  const onWhy = fb?.typed && fb.text && fb.verdict !== "correct" && tutorAvailable()
    ? () => {
        const text = fb.text!;
        setFb((cur) => (cur ? { ...cur, tutor: { ...(cur.tutor ?? { status: "done" }), whyLoading: true } } : cur));
        explainWithTutor(item, text, fb.verdict, base).then((why) =>
          setFb((cur) => (cur ? { ...cur, tutor: { ...(cur.tutor ?? { status: "done" }), whyLoading: false, why: why ?? "—" } } : cur)),
        );
      }
    : undefined;

  const progress = speed && settings.speedTimer ? 1 - speedLeft / SPEED_SECONDS : idx / Math.max(1, tasks.length);
  const showConf = !speed && task.role !== "intro" && mode !== "guess";

  return (
    <main className={`lesson${speed ? " speed" : ""}`} data-lesson>
      <RefSync tasks={tasks} idx={idx} />
      <div className="lesson-top">
        <button className="icon-btn" aria-label={t.close} onClick={() => setConfirmClose(true)}>
          <Icon name="close" />
        </button>
        <div className={`progress${combo >= 3 ? " combo" : ""}`} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}>
          <i style={{ width: `${Math.max(3, progress * 100)}%` }} />
        </div>
        <span className="combo-chip tabular" aria-label={combo >= 3 ? `${combo} in a row` : undefined}>
          {speed && settings.speedTimer ? t.speedLeft(Math.max(0, speedLeft)) : combo >= 3 ? <><Icon name="flame" size={16} />{combo}</> : null}
        </span>
      </div>
      {built.welcomeBack && idx === 0 && !fb && <div className="card-soft label fade-in" style={{ marginTop: 8 }}>{t.welcomeBack}</div>}

      <div key={task.key} className="fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {ruleCard ? (
          <RuleScreen point={ruleCard} base={base} t={t} onDone={next} />
        ) : task.role === "intro" && item.type === "paradigm" ? (
          <TableStudy
            item={item}
            base={base}
            t={t}
            onRule={grammarPoint(item.grammar?.[0]) ? () => setRuleOpen(grammarPoint(item.grammar?.[0])!) : undefined}
            onDone={() => {
              if (!revealed) {
                setRevealed(true);
                introduce(item);
                stats.current.newItems.add(item.id);
              }
              for (const g of item.grammar ?? []) markSeen(`g:${g}`);
              next();
            }}
          />
        ) : task.role === "intro" ? (
          <Guess
            item={item}
            base={base}
            pool={pool}
            t={t}
            canListen={canListen}
            taskKey={task.key}
            onReveal={() => {
              if (!revealed) {
                setRevealed(true);
                introduce(item);
                stats.current.newItems.add(item.id);
                feel("tap", getDB().profile.settings);
              }
            }}
            onDone={() => {
              // First meeting with a new pattern: show its rule card once, then carry on.
              const g = grammarPoint(item.grammar?.find((id) => !getDB().profile.seen?.[`g:${id}`]));
              if (g) {
                markSeen(`g:${g.id}`);
                setRuleCard(g);
              } else next();
            }}
          />
        ) : (
          <Exercise
            item={item}
            mode={speed ? "recognize" : mode}
            base={base}
            pool={pool}
            lex={lex}
            t={t}
            canListen={canListen}
            locked={!!fb}
            taskKey={task.key}
            onSubmit={onSubmit}
            speed={speed}
            conf={conf}
            setConf={setConf}
            showConf={showConf}
            stage={task.role === "followup" || task.role === "requeue" || (getDB().cards[item.id]?.stability ?? 0) < 1 ? "endings" : "full"}
          />
        )}
      </div>

      {fb && !speed && (
        <Feedback
          t={t}
          item={item}
          base={base}
          verdict={fb.verdict}
          check={fb.check}
          text={fb.typed ? fb.text : undefined}
          canListen={canListen}
          onContinue={next}
          onRight={onRight}
          canOverride={fb.typed}
          overridden={fb.overridden}
          tutor={fb.tutor && fb.tutor.status !== "failed" ? fb.tutor : fb.typed && onWhy ? { status: "done" } : undefined}
          onWhy={onWhy}
          grammar={grammarPoint(ruleIdFor(item, fb.check?.ruleId))}
          onRule={() => {
            const g = grammarPoint(ruleIdFor(item, fb.check?.ruleId));
            if (g) setRuleOpen(g);
          }}
          cells={fb.cells}
        />
      )}

      <Sheet open={!!ruleOpen} onClose={() => setRuleOpen(null)} label={t.ruleTitle}>
        {ruleOpen && (
          <div className="stack" style={{ paddingBottom: 8, maxHeight: "70vh", overflowY: "auto" }}>
            <GrammarCard point={ruleOpen} base={base} t={t} />
            <button className="btn btn-primary" onClick={() => setRuleOpen(null)}>{t.understood}</button>
          </div>
        )}
      </Sheet>

      <Sheet open={confirmClose} onClose={() => setConfirmClose(false)} label={t.closeLesson}>
        <div className="stack" style={{ paddingBottom: 8 }}>
          <h2 className="h2">{t.closeLesson}</h2>
          <p className="muted" style={{ margin: 0 }}>{t.closeLessonSub}</p>
          <button className="btn btn-primary" onClick={() => setConfirmClose(false)}>{t.keepGoing}</button>
          <button
            className="btn btn-ghost"
            onClick={() => {
              if (stats.current.graded > 0 || stats.current.newItems.size > 0) finish();
              router.replace("/");
            }}
          >
            {t.endLesson}
          </button>
        </div>
      </Sheet>
    </main>
  );
}

/** Which grammar point explains this answer: the matched mistake's rule, else the item's own. */
function ruleIdFor(item: Item, fromCheck?: string): string | undefined {
  return fromCheck ?? item.grammar?.[0] ?? item.paradigm?.cells.find((c) => c.ruleId)?.ruleId;
}

// Async tutor results must check they still belong to the task on screen.
const tasksRef: { current: Task[] } = { current: [] };
const idxRef: { current: number } = { current: 0 };
function RefSync({ tasks, idx }: { tasks: Task[]; idx: number }) {
  useEffect(() => {
    tasksRef.current = tasks;
    idxRef.current = idx;
  }, [tasks, idx]);
  return null;
}
