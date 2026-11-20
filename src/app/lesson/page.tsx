"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Item, TargetLang } from "@/content/schema";
import type { CardV2, Confidence, Mode, Verdict } from "@/lib/model";
import { getDB, useDB } from "@/lib/store";
import { itemById, itemsFor, lexicon, units } from "@/lib/content";
import { BASE_NEW, buildSession, chooseMode, lastSessionAt, requeue, type Built, type SessionKind, type Task } from "@/lib/session";
import { toFix } from "@/lib/stats";
import { startOfDay } from "@/lib/dates";
import { lessonHref } from "@/lib/nav";
import { previousPath } from "@/lib/navstack";
import { clearLessonDraft, loadLessonDraft, saveLessonDraft } from "@/lib/lessonDraft";
import { endSession, introduce, recordAnswer, regrade, sessionStart } from "@/lib/actions";
import { hasVoice, voicesReady } from "@/lib/speech";
import { feel } from "@/lib/feel";
import type { CheckResult } from "@/lib/check";
import { Icon } from "@/components/icons";
import { Loading, Sheet, useCourseT } from "@/components/ui";
import { Exercise, type CellResult } from "@/components/lesson/Exercises";
import { GrammarCard } from "@/components/lesson/Grammar";
import { Learn } from "@/components/lesson/Learn";
import { UnitIntro, UnitOverview, overviewSeenKeys } from "@/components/UnitOverview";
import { TableStudy } from "@/components/lesson/Table";
import { grammarPoint, unitOf } from "@/lib/content";
import { markSeen } from "@/lib/actions";
import type { GrammarPoint } from "@/content/schema";
import { Feedback, type TutorView } from "@/components/lesson/Feedback";
import { Results, type SessionSummary } from "@/components/lesson/Results";
import { explainWithTutor, gradeWithTutor, tutorAvailable } from "@/lib/llm/tutor";

interface FB {
  cells?: CellResult[];
  /** Multiple choice: what was picked and what the right option says ("you picked X, it's Y"). */
  choice?: { picked: string; answer: string };
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
const MAX_NEW_PER_LESSON = 10;

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
  // Next keeps visited pages alive in the background; a hidden lesson must not rebuild itself
  // (and start a phantom session) every time the URL changes elsewhere (QA 2026-11-16).
  if (usePathname() !== "/lesson") return null;
  return <LessonEntry key={sp.toString()} kindParam={sp.get("kind")} unitParam={sp.get("unit")} />;
}

function LessonEntry({ kindParam, unitParam }: { kindParam: string | null; unitParam: string | null }) {
  const db = useDB();
  const t = useCourseT(db);
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

  const noCourse = !!db && !db.profile.courses[db.profile.activeLang];
  useEffect(() => {
    if (noCourse) router.replace("/");
  }, [noCourse, router]);
  if (!db || canListen === null || noCourse) return <Loading />;
  return <Player kind={kind} unit={u > 0 ? u : undefined} canListen={canListen} t={t} />;
}

function Player({ kind, unit, canListen: deviceCanListen, t }: { kind: SessionKind; unit?: number; canListen: boolean; t: ReturnType<typeof useCourseT> }) {
  // "Can't listen now": the rest of this lesson uses text instead of audio.
  const [noAudio, setNoAudio] = useState(false);
  const canListen = deviceCanListen && !noAudio;
  const onNoAudio = deviceCanListen && !noAudio ? () => setNoAudio(true) : undefined;
  const router = useRouter();
  const db = useDB()!;
  const lang: TargetLang = db.profile.activeLang;
  const course = db.profile.courses[lang]!;
  const base = course.explainIn;
  const settings = db.profile.settings;
  const lex = lexicon(lang);

  const make = (exclude?: Set<string>, onlyReview?: boolean): Built => {
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
      kind: onlyReview && kind === "auto" ? "review" : kind,
      priority: exclude ? undefined : [...new Set([...d.sessions.filter((x) => x.lang === lang && x.t >= startOfDay(now)).flatMap((x) => x.toFix), ...toFix(d, lang, now)])],
      exclude,
    });
  };
  // A lesson left by mistake (Back, a swipe, the app closed) picks up where it was.
  const [draft] = useState(() => (kind === "speed" ? null : loadLessonDraft({ lang, kind, unit, exists: (id) => !!itemById(getDB(), id) })));
  const [built] = useState<Built>(() => (draft ? { tasks: draft.tasks, welcomeBack: false, reviewCount: 0, newCount: 0, shift: 0 } : make()));
  const pool = useMemo(() => itemsFor(lang, getDB(), base), [lang, base]);

  const [tasks, setTasks] = useState<Task[]>(built.tasks);
  const [idx, setIdx] = useState(draft?.at ?? 0);
  const [fb, setFb] = useState<FB | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [conf, setConf] = useState<Confidence | undefined>(undefined);
  const [confirmClose, setConfirmClose] = useState(false);
  const [summary, setSummary] = useState<SessionSummary | null>(null);
  const [combo, setCombo] = useState(draft?.combo ?? 0);
  const [startedAt] = useState(() => Date.now() - (draft?.elapsed ?? 0) * 1000);
  const [taskStart, setTaskStart] = useState(() => Date.now());
  const [speedLeft, setSpeedLeft] = useState(SPEED_SECONDS);
  const [hist, setHist] = useState<boolean[]>(draft?.hist ?? []);
  // Grammar: the full rule in a sheet (from a mistake). New patterns are taught on their learn card.
  const [ruleOpen, setRuleOpen] = useState<GrammarPoint | null>(null);
  // How the "try" right after each learn card went: decides whether its follow-up is typed.
  const [tries, setTries] = useState<Record<string, boolean>>(draft?.tries ?? {});
  const counts = useRef(new Map<string, number>(draft?.counts ?? []));
  const stats = useRef(
    draft
      ? { ...draft.stats, newItems: new Set(draft.stats.newItems), stronger: new Set(draft.stats.stronger), toFix: new Set(draft.stats.toFix) }
      : { graded: 0, correct: 0, newItems: new Set<string>(), stronger: new Set<string>(), toFix: new Set<string>(), sureWrong: 0, guessRight: 0, typedMiss: false, confUsed: 0 },
  );
  const finished = useRef(false);
  const leaving = useRef(false);
  const [readingGrammar, setReadingGrammar] = useState(false);
  const extensions = useRef(draft?.extensions ?? 0);
  const speed = kind === "speed";

  useEffect(() => {
    if (!draft) sessionStart(lang, kind);
  }, [lang, kind, draft]);

  // Keep the lesson's place on the device after every step (answered → the next task).
  useEffect(() => {
    if (speed || summary || finished.current) return;
    const at = fb ? idx + 1 : idx;
    if (at >= tasks.length) return clearLessonDraft();
    const st = stats.current;
    saveLessonDraft({
      lang,
      kind,
      unit,
      tasks,
      at,
      elapsed: Math.round((Date.now() - startedAt) / 1000),
      hist,
      combo,
      tries,
      counts: [...counts.current],
      extensions: extensions.current,
      stats: { ...st, newItems: [...st.newItems], stronger: [...st.stronger], toFix: [...st.toFix] },
    });
  }, [speed, summary, fb, idx, tasks, hist, combo, tries, lang, kind, unit, startedAt]);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    clearLessonDraft();
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
    return chooseMode(item, getDB().cards[item.id], { canListen, shift, role: task.role, tryOk: tries[item.id] });
  }, [task, item, canListen, shift, tries]);

  const next = useCallback(() => {
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
      // Enough new words for one sitting: after MAX_NEW_PER_LESSON, extra rounds are review only.
      // A round adds up to BASE_NEW + 1 new items, so stop adding new ones early enough to stay ≤ the cap.
      const capped = stats.current.newItems.size + BASE_NEW + 1 > MAX_NEW_PER_LESSON;
      let more = make(new Set(tasks.map((x) => x.itemId)), capped).tasks;
      // Capped and nothing else waiting (e.g. a beginner's first lessons): practise this session's
      // words again, weakest first, so "5 minutes" stays 5 minutes without more new words.
      if (!more.length && capped) more = make(new Set(), true).tasks;
      if (more.length) {
        setTasks((ts) => [...ts, ...more.map((m) => ({ ...m, key: `x${extensions.current}-${m.key}` }))]);
        setIdx((i) => i + 1);
        return;
      }
    }
    finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, tasks, finish, speed, settings.sessionMinutes, startedAt]);

  // Back / the swipe-back gesture mid-lesson asks first ("End lesson?") instead of leaving: a
  // history entry of our own sits on top of the lesson and catches it (owner, 2026-11-21).
  const guarded = useRef(false);
  const afterPop = useRef<(() => void) | null>(null);
  const goHomeRef = useRef<() => void>(() => {});
  useEffect(() => {
    const push = () => {
      if (window.history.state?.lessonGuard) return;
      window.history.pushState({ ...window.history.state, lessonGuard: true }, "", window.location.href);
    };
    push();
    guarded.current = true;
    const onPop = () => {
      if (afterPop.current) {
        const go = afterPop.current;
        afterPop.current = null;
        return go();
      }
      if (leaving.current) return;
      guarded.current = false;
      // Lesson over (Results on screen): Back just leaves.
      if (finished.current) return goHomeRef.current();
      push();
      guarded.current = true;
      setConfirmClose(true);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  /** Run a navigation once our guard entry is gone, so it never stays behind in history. */
  const leave = (go: () => void) => {
    if (!guarded.current) return go();
    guarded.current = false;
    afterPop.current = go;
    window.history.back();
  };

  // Leaving a lesson goes *back* to Today when we came from it, so Back/swipe never re-opens it.
  // Once only: a double tap on Continue must not go back twice.
  const goHome = () => {
    if (leaving.current) return;
    leaving.current = true;
    leave(() => (previousPath() === "/" ? router.back() : router.replace("/")));
  };
  useEffect(() => {
    goHomeRef.current = goHome;
  });
  if (summary) return <Results t={t} summary={summary} onDone={goHome} onMore={speed ? undefined : () => leave(() => router.replace(lessonHref("auto")))} />;
  if (!task || !item || !mode) return <Loading />;

  const onSubmit = (r: { verdict: Verdict; check?: CheckResult; text?: string; hinted?: boolean; dontKnow?: boolean; cells?: CellResult[]; choice?: { picked: string; answer: string } }) => {
    if (fb) return;
    const prevCard = getDB().cards[item.id];
    // "I don't know" answers aren't the learner's own attempt: no "I was right", no tutor.
    const typed = (mode === "recall" || mode === "tiles") && !r.dontKnow;
    // The try right after a learn card is practice, not memory: it doesn't move the schedule,
    // isn't requeued and isn't "to fix". The spaced follow-up a few tasks later is the real check.
    const isTry = task.role === "try";
    if (isTry) setTries((x) => ({ ...x, [item.id]: r.verdict !== "wrong" }));
    recordAnswer({ item, mode, verdict: r.verdict, confidence: conf, source: "checker", ms: Date.now() - taskStart, reschedule: !speed && !isTry, hinted: r.hinted, practice: isTry, typo: r.check?.reason === "typo" });
    const s = stats.current;
    s.graded++;
    if (conf) s.confUsed++;
    setHist((h) => [...h, r.verdict !== "wrong"]);
    if (r.verdict !== "wrong") {
      s.correct++;
      // "Got stronger": a correct recall of a word you already had (reviews, seeds, practice).
      if (task.role !== "followup" && !isTry && prevCard && prevCard.state !== 0 && !s.toFix.has(item.id)) s.stronger.add(item.id);
      if (conf === "guess") s.guessRight++;
      setCombo((c) => c + 1);
    } else {
      if (!isTry) s.toFix.add(item.id);
      if (conf === "sure") s.sureWrong++;
      if (typed) s.typedMiss = true;
      setCombo(0);
      if (!speed && !isTry) setTasks((ts) => requeue(ts, idx, counts.current));
    }
    feel(r.verdict === "correct" ? "success" : r.verdict === "almost" ? "almost" : "miss", getDB().profile.settings);

    if (speed) {
      setTimeout(next, r.verdict === "correct" ? 350 : 900);
      setFb({ verdict: r.verdict, overridden: false, typed: false });
      return;
    }
    const view: FB = { verdict: r.verdict, check: r.check, text: r.text, prevCard, confidence: conf, overridden: false, typed, cells: r.cells, choice: r.choice };
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

  // A unit's first new item: open with a one-screen "This unit" card (goals, the dialogue to listen to).
  const openerUnit = !speed && task.role === "intro" && !fb ? unitOf(item) : undefined;
  const opener = openerUnit && !getDB().profile.seen?.[`unit:${openerUnit.id}`] ? openerUnit : null;

  const progress = speed && settings.speedTimer ? 1 - speedLeft / SPEED_SECONDS : idx / Math.max(1, tasks.length);
  // "How sure?" costs a row: ask on about one review in four, never on a try.
  const showConf = !speed && task.role !== "intro" && task.role !== "try" && mode !== "guess" && mode !== "question" && idx % 4 === 2;

  return (
    <main className={`lesson${speed ? " speed" : ""}`} data-lesson>
      <RefSync tasks={tasks} idx={idx} />
      <div className="lesson-top">
        <button className="icon-btn" aria-label={t.close} onClick={() => setConfirmClose(true)}>
          <Icon name="close" />
        </button>
        <div className={`progress${combo >= 3 ? " combo" : ""}`} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}>
          {/* A small pop on each right answer (p0/p1 alternate so the animation restarts). */}
          <i className={hist.length && hist[hist.length - 1] ? `p${hist.filter(Boolean).length % 2}` : undefined} style={{ width: `${Math.max(3, progress * 100)}%` }} />
        </div>
        <span className="combo-chip tabular" aria-label={combo >= 3 ? t.inARow(combo) : undefined}>
          {speed && settings.speedTimer ? t.speedLeft(Math.max(0, speedLeft)) : combo >= 3 ? <><Icon name="flame" size={16} />{combo}</> : null}
        </span>
      </div>
      {built.welcomeBack && idx === 0 && !fb && <div className="card-soft label fade-in" style={{ marginTop: 8 }}>{t.welcomeBack}</div>}
      {draft && idx === draft.at && !fb && <div className="card-soft label fade-in" role="status" style={{ marginTop: 8 }}>{t.lessonResumed}</div>}

      <div key={task.key} className="fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {opener && readingGrammar ? (
          // "Read the grammar first": the unit grammar right here, then on with this same lesson.
          // Page scroll (not an inner scroller), so the pinned "Start practising" stays on screen.
          <div style={{ paddingTop: 8 }}>
            <UnitOverview
              unit={opener}
              base={base}
              t={t}
              canListen={canListen}
              onStart={() => {
                for (const k of overviewSeenKeys(opener)) markSeen(k);
                setReadingGrammar(false);
                window.scrollTo(0, 0);
              }}
            />
          </div>
        ) : opener ? (
          <UnitIntro
            unit={opener}
            base={base}
            t={t}
            canListen={canListen}
            onReadGrammar={() => {
              setReadingGrammar(true);
              window.scrollTo(0, 0);
            }}
            onStart={() => {
              for (const k of overviewSeenKeys(opener)) markSeen(k);
            }}
          />
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
          <Learn
            item={item}
            base={base}
            t={t}
            canListen={canListen}
            onLearned={() => {
              if (!revealed) {
                setRevealed(true);
                introduce(item);
                stats.current.newItems.add(item.id);
              }
            }}
            onDone={next}
            onNoAudio={onNoAudio}
          />
        ) : (
          <>
          {task.role === "try" && !fb && <div className="try-tag label">{t.tryIt}</div>}
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
            onNoAudio={onNoAudio}
            speed={speed}
            conf={conf}
            setConf={setConf}
            showConf={showConf}
            stage={task.role === "try" || task.role === "followup" || task.role === "requeue" || (getDB().cards[item.id]?.stability ?? 0) < 1 ? "endings" : "full"}
          />
          </>
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
          choice={fb.choice}
        />
      )}

      <Sheet open={!!ruleOpen} onClose={() => setRuleOpen(null)} label={t.ruleTitle}>
        {ruleOpen && (
          <div className="stack" style={{ paddingBottom: 8, maxHeight: "70vh", overflowY: "auto" }}>
            <GrammarCard point={ruleOpen} base={base} t={t} mode="mistake" />
            <div className="bottom-bar">
              <button className="btn btn-primary" onClick={() => setRuleOpen(null)}>{t.understood}</button>
            </div>
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
              clearLessonDraft();
              goHome();
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
