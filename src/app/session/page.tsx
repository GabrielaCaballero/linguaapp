"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Page, SpeakButton } from "@/components/Shell";
import { itemById } from "@/content";
import { check, type Verdict } from "@/lib/check";
import { t } from "@/lib/i18n";
import { buildQueue, requeue, shuffle, speedPool, type Task } from "@/lib/session";
import { getRecognizer, speak } from "@/lib/speech";
import { gradeFrom, newCard, schedule } from "@/lib/srs";
import { getDB, update } from "@/lib/store";
import type { CardState, Confidence, DB, Item, Lang, ReviewLog } from "@/lib/types";

const CONF: { v: Confidence; icon: string }[] = [
  { v: 1, icon: "🤷" },
  { v: 2, icon: "🤔" },
  { v: 3, icon: "💪" },
];

type Result = {
  verdict: Verdict;
  given: string;
  confidence?: Confidence;
  prevCard?: CardState;
  requeuedKey?: string;
};

type Stats = { graded: number; correct: number; tasks: number; sure: number; sureRight: number };

function mmss(s: number) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

function Session({ db }: { db: DB }) {
  const router = useRouter();
  const lang = db.settings.lang;
  const tx = t(lang);
  const items = useMemo(() => itemById(db), [db]);
  const [queue, setQueue] = useState<Task[]>(() => buildQueue(getDB(), lang, Date.now()));
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"answer" | "feedback" | "speed" | "done">(() =>
    queue.length ? "answer" : speedPool(getDB(), lang).length >= 4 ? "speed" : "done",
  );
  const [typed, setTyped] = useState("");
  const [picked, setPicked] = useState<string | null>(null);
  const [built, setBuilt] = useState<number[]>([]);
  const [result, setResult] = useState<Result | null>(null);
  const [startedAt] = useState(() => Date.now());
  const [elapsed, setElapsed] = useState(0);
  const [stats, setStats] = useState<Stats>({ graded: 0, correct: 0, tasks: 0, sure: 0, sureRight: 0 });
  const [dismissedTime, setDismissedTime] = useState(false);
  const recorded = useRef(false);

  useEffect(() => {
    const t = setInterval(() => setElapsed(Math.round((Date.now() - startedAt) / 1000)), 1000);
    return () => clearInterval(t);
  }, [startedAt]);

  const task = queue[idx];
  const item = task ? items.get(task.itemId) : undefined;

  function recordSession(extraTasks = 0) {
    if (recorded.current || stats.tasks + extraTasks === 0) return;
    recorded.current = true;
    update((d) => ({
      ...d,
      sessions: [
        ...d.sessions,
        { t: Date.now(), lang, seconds: Math.round((Date.now() - startedAt) / 1000), tasks: stats.tasks + extraTasks, correct: stats.correct, graded: stats.graded },
      ],
    }));
  }

  function log(entry: Omit<ReviewLog, "t" | "lang">, card?: CardState) {
    update((d) => ({
      ...d,
      cards: card ? { ...d.cards, [card.id]: card } : d.cards,
      reviews: [...d.reviews, { ...entry, t: Date.now(), lang }],
    }));
  }

  function submit(confidence?: Confidence, pickedNow: string | null = picked) {
    if (!task || !item) return;
    const now = Date.now();
    let verdict: Verdict;
    let given = "";
    if (task.mode === "type") {
      given = typed;
      verdict = check(typed, item);
    } else if (task.mode === "tiles") {
      given = built.map((i) => task.tiles![i]).join(" ");
      verdict = check(given, item);
    } else {
      given = pickedNow ?? "";
      verdict = pickedNow === task.correctChoice ? { ok: true, almost: false } : { ok: false };
    }
    const prev = getDB().cards[item.id];
    speak(item.answer, lang);

    if (!task.graded) {
      // Pretest: never scored. Create the card so it's scheduled; the follow-up task grades it.
      log({ id: item.id, mode: task.mode, strand: task.strand, correct: verdict.ok }, prev ?? newCard(item.id, now));
      setStats((s) => ({ ...s, tasks: s.tasks + 1 }));
      setResult({ verdict, given });
      setPhase("feedback");
      return;
    }

    const conf = confidence ?? 1;
    const base = prev ?? newCard(item.id, now);
    const next = schedule(base, gradeFrom(verdict.ok, verdict.ok && verdict.almost, conf), now);
    log({ id: item.id, mode: task.mode, strand: task.strand, correct: verdict.ok, confidence: conf }, next);
    let requeuedKey: string | undefined;
    if (!verdict.ok) {
      const q = requeue(queue, idx, getDB(), item);
      if (q !== queue) {
        requeuedKey = q[Math.min(q.length - 1, idx + 4)].key;
        setQueue(q);
      }
    }
    setStats((s) => ({
      tasks: s.tasks + 1,
      graded: s.graded + 1,
      correct: s.correct + (verdict.ok ? 1 : 0),
      sure: s.sure + (conf === 3 ? 1 : 0),
      sureRight: s.sureRight + (conf === 3 && verdict.ok ? 1 : 0),
    }));
    setResult({ verdict, given, confidence: conf, prevCard: base, requeuedKey });
    setPhase("feedback");
  }

  function overrideCorrect() {
    if (!result || !item || !result.prevCard) return;
    const next = schedule(result.prevCard, "good", Date.now());
    update((d) => {
      const reviews = [...d.reviews];
      const last = reviews[reviews.length - 1];
      if (last && last.id === item.id) reviews[reviews.length - 1] = { ...last, correct: true };
      return { ...d, cards: { ...d.cards, [item.id]: next }, reviews };
    });
    setQueue((q) => q.filter((t) => t.key !== result.requeuedKey));
    setStats((s) => ({ ...s, correct: s.correct + 1 }));
    setResult({ ...result, verdict: { ok: true, almost: false }, requeuedKey: undefined });
  }

  function advance() {
    setTyped("");
    setPicked(null);
    setBuilt([]);
    setResult(null);
    const n = idx + 1;
    if (n >= queue.length) {
      if (speedPool(getDB(), lang).length >= 4) setPhase("speed");
      else finish();
      return;
    }
    setIdx(n);
    setPhase("answer");
    const nt = queue[n];
    const ni = items.get(nt.itemId);
    if (ni && nt.mode === "listen") speak(ni.answer, lang); // inside the tap, so iOS allows it
  }

  function finish() {
    recordSession();
    setPhase("done");
  }

  function exit() {
    recordSession();
    router.push("/");
  }

  const progress = phase === "done" || phase === "speed" ? 1 : queue.length ? idx / queue.length : 1;
  const overTime = elapsed >= db.settings.minutesPerLang * 60 && !dismissedTime && phase === "answer";

  return (
    <>
      <div className="s-top">
        <button className="icon-btn" aria-label={tx.closeSession} onClick={exit}>
          ✕
        </button>
        <div className="bar">
          <i style={{ width: `${progress * 100}%` }} />
        </div>
        <span className="timer">{mmss(elapsed)}</span>
      </div>

      {overTime && (
        <div className="banner">
          <span>{tx.minReached(db.settings.minutesPerLang)}</span>
          <span className="row">
            <button className="btn small" onClick={finish}>
              {tx.finish}
            </button>
            <button className="link" onClick={() => setDismissedTime(true)}>
              {tx.keepGoing}
            </button>
          </span>
        </div>
      )}

      {phase === "speed" && (
        <SpeedRound
          pool={speedPool(getDB(), lang)}
          lang={lang}
          onDone={(n) => {
            recordSession(n);
            setPhase("done");
          }}
        />
      )}

      {phase === "done" && <Done stats={stats} elapsed={elapsed} lang={lang} onHome={exit} />}

      {(phase === "answer" || phase === "feedback") && task && item && (
        <div className="task">
          <TaskView
            task={task}
            item={item}
            lang={lang}
            locked={phase === "feedback"}
            typed={typed}
            setTyped={setTyped}
            picked={picked}
            setPicked={(c) => {
              setPicked(c);
              if (!task.graded) submit(undefined, c);
            }}
            built={built}
            setBuilt={setBuilt}
          />

          {phase === "feedback" && result && (
            <Feedback task={task} item={item} lang={lang} result={result} onOverride={overrideCorrect} />
          )}

          <div className="spacer" />

          <div className="dock">
          {phase === "answer" && task.graded && (
            <>
              <div className="conf-label">{tx.howSure}</div>
              <div className="conf">
                {CONF.map((c) => (
                  <button
                    key={c.v}
                    disabled={!canSubmit(task, typed, picked, built)}
                    onClick={() => submit(c.v)}
                  >
                    <span>{c.icon}</span>
                    {tx.conf[c.v]}
                  </button>
                ))}
              </div>
              {(task.mode === "type" || task.mode === "tiles") && (
                <button className="link" style={{ alignSelf: "center" }} onClick={() => submit(1)}>
                  {tx.dontKnow}
                </button>
              )}
            </>
          )}
          {phase === "feedback" && (
            <button className="btn" onClick={advance} autoFocus>
              {tx.continue}
            </button>
          )}
          </div>
        </div>
      )}
    </>
  );
}

function canSubmit(task: Task, typed: string, picked: string | null, built: number[]) {
  if (task.mode === "type") return typed.trim().length > 0;
  if (task.mode === "tiles") return built.length > 0;
  return picked !== null;
}

function TaskView(props: {
  task: Task;
  item: Item;
  lang: Lang;
  locked: boolean;
  typed: string;
  setTyped: (s: string) => void;
  picked: string | null;
  setPicked: (s: string) => void;
  built: number[];
  setBuilt: (b: number[]) => void;
}) {
  const { task, item, lang, locked } = props;
  const tx = t(lang);
  const isSound = item.kind === "sound";

  let eyebrow = "";
  let prompt = "";
  let hint = "";
  if (task.mode === "guess") {
    eyebrow = tx.guessEyebrow;
    if (isSound) {
      prompt = tx.whichSpelling;
      hint = tx.listenPick;
    } else if (item.kind === "falsefriend") {
      prompt = task.q!;
      hint = tx.ffHint[lang];
    } else if (item.kind === "pattern") {
      prompt = task.q!;
      hint = tx.patternHint[lang];
    } else {
      prompt = item.prompt;
      hint = tx.whichInTarget(tx.target[lang]);
    }
  } else if (task.mode === "type") {
    eyebrow = tx.recallType(tx.target[lang]);
    prompt = item.prompt;
  } else if (task.mode === "tiles") {
    eyebrow = tx.recallTiles;
    prompt = item.prompt;
  } else if (task.mode === "listen") {
    eyebrow = tx.listen;
    prompt = isSound ? tx.whichHeard : tx.whatMeans;
  } else if (task.mode === "recognize") {
    eyebrow = tx.ffEyebrow;
    prompt = item.answer;
  }

  const showPlay = task.mode === "listen" || (task.mode === "guess" && isSound);

  return (
    <>
      <div className="eyebrow">{eyebrow}</div>
      {showPlay && (
        <button className={`big-listen ${locked ? "small" : ""}`} aria-label={tx.playAudio} onClick={() => speak(item.answer, lang, 0.85)}>
          ▶
        </button>
      )}
      <h1 className="prompt">{prompt}</h1>
      {hint && <p className="hint">{hint}</p>}
      {!hint && <div style={{ height: 16 }} />}

      {task.choices && (
        <div className="choices">
          {task.choices.map((c) => {
            const right = locked && c === task.correctChoice;
            const wrong = locked && c === props.picked && c !== task.correctChoice;
            return (
              <button
                key={c}
                className={`choice ${right ? "right" : ""} ${wrong ? "picked-wrong" : ""}`}
                aria-pressed={props.picked === c}
                disabled={locked}
                onClick={() => props.setPicked(c)}
              >
                {c}
              </button>
            );
          })}
        </div>
      )}

      {task.mode === "type" && <TypeInput {...props} />}

      {task.mode === "tiles" && task.tiles && (
        <>
          <div className="built">
            {props.built.map((ti, k) => (
              <button key={k} className="tile" disabled={locked} onClick={() => props.setBuilt(props.built.filter((_, j) => j !== k))}>
                {task.tiles![ti]}
              </button>
            ))}
          </div>
          {!locked && (
            <div className="tiles">
              {task.tiles.map((w, ti) => (
                <button
                  key={ti}
                  className={`tile ${props.built.includes(ti) ? "used" : ""}`}
                  onClick={() => props.setBuilt([...props.built, ti])}
                >
                  {w}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}

function TypeInput({ lang, locked, typed, setTyped }: { lang: Lang; locked: boolean; typed: string; setTyped: (s: string) => void }) {
  const [listening, setListening] = useState(false);
  const [hasMic] = useState(() => getRecognizer(lang) !== null);
  function dictate() {
    const r = getRecognizer(lang);
    if (!r) return;
    r.onresult = (e) => setTyped(e.results[0][0].transcript);
    r.onerror = () => setListening(false);
    r.onend = () => setListening(false);
    setListening(true);
    r.start();
  }
  return (
    <div className="row">
      <input
        className="answer-input"
        value={typed}
        onChange={(e) => setTyped(e.target.value)}
        disabled={locked}
        autoFocus
        autoCapitalize="off"
        autoCorrect="off"
        autoComplete="off"
        spellCheck={false}
        lang={lang}
        placeholder={lang === "it" ? "Scrivi qui…" : "Hier schreiben…"}
      />
      {hasMic && !locked && (
        <button className="icon-btn" aria-label={t(lang).sayIt} onClick={dictate} style={{ width: 52, height: 52 }}>
          {listening ? "…" : "🎤"}
        </button>
      )}
    </div>
  );
}

function Feedback({ task, item, lang, result, onOverride }: { task: Task; item: Item; lang: Lang; result: Result; onOverride: () => void }) {
  const tx = t(lang);
  const v = result.verdict;
  const guess = !task.graded;
  const cls = guess ? "guess" : !v.ok ? "miss" : v.almost ? "almost" : "ok";
  const head = guess
    ? v.ok
      ? tx.goodGuess
      : tx.hereItIs
    : !v.ok
      ? tx.hereAnswer
      : v.almost
        ? tx.almost[v.reason]
        : tx.right;
  const showMeaning = task.mode === "listen" || task.mode === "recognize" || task.mode === "guess";

  let calib = "";
  if (guess) calib = tx.calibGuess;
  else if (!v.ok && result.confidence === 3) calib = tx.calibSureMiss;
  else if (!v.ok) calib = tx.calibMiss;
  else if (result.confidence === 1) calib = tx.calibLuckyGuess;

  return (
    <div className={`fb ${cls}`}>
      <div className="fb-head">{head}</div>
      <div className="fb-answer">
        <span>{item.answer}</span>
        <SpeakButton text={item.answer} lang={lang} />
      </div>
      {showMeaning && item.kind !== "sound" && <div className="yours">= {item.prompt}</div>}
      {!v.ok && result.given && !guess && (
        <div className="yours">
          {tx.you}: <s>{result.given}</s>
        </div>
      )}
      {v.ok && v.almost && (
        <div className="yours">
          {tx.you}: {result.given}
        </div>
      )}
      {item.note && <div className="note">{item.note}</div>}
      {calib && <div className="calib">{calib}</div>}
      {!guess && !v.ok && result.given && (task.mode === "type" || task.mode === "tiles") && (
        <button className="link" onClick={onOverride}>
          {tx.countIt}
        </button>
      )}
    </div>
  );
}

function SpeedRound({ pool, lang, onDone }: { pool: Item[]; lang: Lang; onDone: (n: number) => void }) {
  const SECONDS = 45;
  const [started, setStarted] = useState(false);
  const [left, setLeft] = useState(SECONDS);
  const [q, setQ] = useState(() => makeQ(pool));
  const [flash, setFlash] = useState<"ok" | "miss" | null>(null);
  const [score, setScore] = useState({ n: 0, right: 0 });
  const logs = useRef<ReviewLog[]>([]);

  useEffect(() => {
    if (!started) return;
    const t = setInterval(() => setLeft((l) => Math.max(0, l - 1)), 1000);
    return () => clearInterval(t);
  }, [started]);

  useEffect(() => {
    if (left === 0 && logs.current.length) {
      const entries = logs.current;
      logs.current = [];
      update((d) => ({ ...d, reviews: [...d.reviews, ...entries] }));
    }
  }, [left]);

  function pick(c: string) {
    const ok = c === q.item.prompt;
    logs.current.push(speedLog(q.item.id, lang, ok));
    setScore((s) => ({ n: s.n + 1, right: s.right + (ok ? 1 : 0) }));
    setFlash(ok ? "ok" : "miss");
    setTimeout(() => {
      setFlash(null);
      setQ(makeQ(pool, q.item.id));
    }, 250);
  }

  const tx = t(lang);

  if (!started)
    return (
      <div className="task">
        <div className="eyebrow">{tx.fluency}</div>
        <h1 className="prompt">{tx.speedRound}</h1>
        <p className="hint">{tx.speedIntro(SECONDS)}</p>
        <div className="spacer" />
        <button className="btn" onClick={() => setStarted(true)}>
          {tx.go}
        </button>
        <button className="link" style={{ alignSelf: "center" }} onClick={() => onDone(0)}>
          {tx.skip}
        </button>
      </div>
    );

  if (left === 0)
    return (
      <div className="task">
        <div className="eyebrow">{tx.fluency}</div>
        <h1 className="prompt">{tx.inSeconds(score.right, SECONDS)}</h1>
        <p className="hint">{tx.perMinute(Math.round((score.right / SECONDS) * 60))}</p>
        <div className="spacer" />
        <button className="btn" onClick={() => onDone(score.n)}>
          {tx.finish}
        </button>
      </div>
    );

  return (
    <div className="task">
      <div className="row between">
        <div className="eyebrow">{tx.speedRound}</div>
        <div className="countdown">{left}s</div>
      </div>
      <div className={`fb ${flash === "ok" ? "ok" : flash === "miss" ? "miss" : ""}`} style={{ textAlign: "center", padding: "36px 18px", margin: "18px 0" }}>
        <div className="prompt" style={{ margin: 0 }}>
          {q.item.answer}
        </div>
      </div>
      <div className="choices">
        {q.options.map((o) => (
          <button key={o} className="choice" style={{ textAlign: "center" }} onClick={() => pick(o)} disabled={!!flash}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function speedLog(id: string, lang: Lang, correct: boolean): ReviewLog {
  return { t: Date.now(), id, lang, mode: "speed", strand: "fluency", correct };
}

function makeQ(pool: Item[], avoid?: string) {
  const candidates = pool.filter((p) => p.id !== avoid);
  const item = candidates[Math.floor(Math.random() * candidates.length)];
  const other = shuffle(pool.filter((p) => p.id !== item.id && p.prompt !== item.prompt))[0];
  return { item, options: shuffle([item.prompt, other.prompt]) };
}

function Done({ stats, elapsed, lang, onHome }: { stats: Stats; elapsed: number; lang: Lang; onHome: () => void }) {
  const tx = t(lang);
  const acc = stats.graded ? Math.round((stats.correct / stats.graded) * 100) : null;
  return (
    <div className="task">
      <div className="eyebrow">{tx.sessionDone}</div>
      <h1 className="prompt">{lang === "it" ? "Bravissima! 🎉" : "Super gemacht! 🎉"}</h1>
      <p className="hint">{tx.sleepNext}</p>
      <div className="stats">
        <div className="stat">
          <b>{Math.max(1, Math.round(elapsed / 60))}</b>
          <span>{tx.minutes}</span>
        </div>
        <div className="stat">
          <b>{stats.tasks}</b>
          <span>{tx.tasks}</span>
        </div>
        <div className="stat">
          <b>{acc === null ? "—" : `${acc}%`}</b>
          <span>{tx.recalled}</span>
        </div>
      </div>
      {stats.sure > 0 && (
        <div className="card" style={{ marginTop: 12 }}>
          <p>
            {tx.sureSummary(stats.sureRight, stats.sure)}
            {stats.sureRight < stats.sure && tx.sureMissNote}
          </p>
        </div>
      )}
      <div className="spacer" />
      <button className="btn" onClick={onHome}>
        {tx.backToToday}
      </button>
    </div>
  );
}

export default function SessionPage() {
  return <Page full>{(db) => <Session db={db} />}</Page>;
}
