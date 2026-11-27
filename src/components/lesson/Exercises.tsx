"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { BaseLang, Item, Lexicon, TargetLang } from "@/content/schema";
import type { Confidence, Mode, Verdict } from "@/lib/model";
import type { Dict } from "@/lib/i18n";
import { check, type CheckResult } from "@/lib/check";
import { gl } from "@/lib/content";
import { slowRate, speak } from "@/lib/speech";
import { setSettings } from "@/lib/actions";
import { track } from "@/lib/metrics";
import { Icon } from "../icons";
import { articleOptions, meaningOptions, seeded, shuffleWith, targetOptions, tileSet } from "./options";
import { TableExercise } from "./Table";
import { WordHints } from "./WordHints";
import { PatternTable } from "./PatternTable";
import { AudioHelp, SilentTip } from "./AudioHelp";

export type Submit = (r: { verdict: Verdict; check?: CheckResult; text?: string; picked?: number; hinted?: boolean; dontKnow?: boolean; cells?: CellResult[]; choice?: { picked: string; answer: string } }) => void;

/** One cell of a table exercise after checking. */
export interface CellResult {
  label: string;
  expected: string;
  text: string;
  verdict: Verdict;
  /** The learner typed another cell's form (e.g. "kommt" in the du row). */
  otherCell?: string;
}

export interface ExProps {
  item: Item;
  mode: Mode;
  base: BaseLang;
  pool: Item[];
  lex: Lexicon;
  t: Dict;
  canListen: boolean;
  locked: boolean;
  taskKey: string;
  onSubmit: Submit;
  speed?: boolean;
  conf: Confidence | undefined;
  setConf: (c: Confidence | undefined) => void;
  showConf: boolean;
  /** "Can't listen now": switch this lesson to text instead of audio. */
  onNoAudio?: () => void;
}

const ACCENTS: Record<TargetLang, string[]> = { it: ["à", "è", "é", "ì", "ò", "ù"], de: ["ä", "ö", "ü", "ß", "Ä", "Ö", "Ü"] , en: [], fr: ["é", "è", "ê", "à", "â", "ç", "î", "ô", "ù", "û", "ë", "ï"], pt: ["ã", "õ", "á", "é", "í", "ó", "ú", "â", "ê", "ô", "à", "ç"] };

/**
 * The tortoise (owner, 2026-11-26): tap it to hear the word slowly, and the three slow speeds
 * appear right beside it; picking one replays at that speed and keeps it (same as Settings).
 */
export function SlowSpeaker({ text, lang, t }: { text: string; lang: TargetLang; t: Dict }) {
  const [open, setOpen] = useState(false);
  const [rate, setRate] = useState(slowRate);
  const pick = (r: 0.75 | 0.6 | 0.5) => {
    setRate(r);
    setSettings({ slowRate: r });
    track("slow_audio", { rate: r, from: "tortoise" });
    speak(text, lang, true);
  };
  return (
    <>
      <Speaker text={text} lang={lang} slow label={t.listenSlow} onPlay={() => setOpen(true)} />
      {open && (
        <span className="speed-row">
          <span className="speed-pick" role="group" aria-label={t.sSlowAudio}>
            {([0.75, 0.6, 0.5] as const).map((r) => (
              <button key={r} type="button" aria-pressed={rate === r} onClick={() => pick(r)}>
                {t.slowRates[String(r)]}
              </button>
            ))}
          </span>
        </span>
      )}
    </>
  );
}

export function Speaker({ text, lang, slow, big, label, auto, onPlay }: { text: string; lang: TargetLang; slow?: boolean; big?: boolean; label: string; auto?: boolean; onPlay?: () => void }) {
  const [on, setOn] = useState(false);
  const play = () => {
    speak(text, lang, slow);
    onPlay?.();
    setOn(true);
    setTimeout(() => setOn(false), Math.min(4000, 600 + text.length * 70));
  };
  const did = useRef(false);
  useEffect(() => {
    if (!auto || did.current) return;
    // Mark as played only when it actually plays (a cancelled timer, e.g. React's dev double-run, retries).
    const id = setTimeout(() => {
      did.current = true;
      speak(text, lang, slow);
    }, 250);
    return () => clearTimeout(id);
  }, [auto, text, lang, slow]);
  return (
    <button type="button" className={`speaker${big ? " big" : ""}${slow ? " slow" : ""}`} onClick={play} aria-label={label}>
      {big && on ? (
        <span className="bars on" aria-hidden="true"><i /><i /><i /><i /><i /></span>
      ) : (
        <Icon name={slow ? "turtle" : "speaker"} size={big ? 36 : slow ? 26 : 22} />
      )}
    </button>
  );
}

/** "Can't listen now" (like Duolingo): the rest of the lesson shows text instead of audio. */
/** Under an audio exercise: "Can't listen now" (text instead of audio) and "Audio problems?". */
export function NoAudio({ t, onNoAudio }: { t: Dict; onNoAudio?: () => void }) {
  return (
    <>
      <SilentTip t={t} />
      <div className="row" style={{ justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
        {onNoAudio && (
          <button type="button" className="link label no-audio" onClick={onNoAudio}>
            <Icon name="speaker" size={16} /> {t.cantListen}
          </button>
        )}
        <AudioHelp t={t} />
      </div>
    </>
  );
}

function ConfChips({ t, conf, setConf }: { t: Dict; conf?: Confidence; setConf: (c: Confidence | undefined) => void }) {
  const opts: { v: Confidence; label: string }[] = [
    { v: "sure", label: t.sure },
    { v: "think", label: t.thinkSo },
    { v: "guess", label: t.guessing },
  ];
  return (
    <div className="conf" role="group" aria-label={t.howSure}>
      <span className="caption">{t.howSure}</span>
      {opts.map((o) => (
        <button key={o.v} type="button" className="chip" aria-pressed={conf === o.v} onClick={() => setConf(conf === o.v ? undefined : o.v)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

function CheckBar({ t, disabled, onCheck, conf, setConf, showConf, locked }: { t: Dict; disabled: boolean; onCheck: () => void; conf?: Confidence; setConf: (c: Confidence | undefined) => void; showConf: boolean; locked: boolean }) {
  if (locked) return <div style={{ height: 56 }} />;
  return (
    <>
      {showConf && <ConfChips t={t} conf={conf} setConf={setConf} />}
      <button type="button" className="btn btn-primary" disabled={disabled} onClick={onCheck}>
        {t.check}
      </button>
    </>
  );
}

export function Prompt({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <div className="prompt">
      <div className="prompt-eyebrow">{eyebrow}</div>
      {children}
    </div>
  );
}

export function TargetWord({ item, canListen, t, size = "hero", auto, base }: { item: Item; canListen: boolean; t: Dict; size?: "hero" | "title"; auto?: boolean; base?: BaseLang }) {
  // Whole sentences get tap-a-word hints; a single word or phrase never does (it would be the answer).
  const hints = base && (item.type === "sentence" || item.type === "dialogue" || item.type === "listening");
  return (
    <div className="prompt-word">
      {hints ? <WordHints text={item.target} lang={item.lang} base={base} className={size} /> : <span className={size} lang={item.lang}>{item.target}</span>}
      {canListen && <Speaker text={item.spoken} lang={item.lang} slow={item.slow} label={t.listen} auto={auto} />}
    </div>
  );
}

/** Multiple-choice answer area used by recognize / listen / pick-spelling / article / question / speed. */
function Choices({ options, answer, lang, locked, picked, setPicked, speed, onSpeed, grid }: { options: ReactNode[]; answer: number; lang?: TargetLang; locked: boolean; picked: number | null; setPicked: (k: number) => void; speed?: boolean; onSpeed?: (k: number) => void; grid?: boolean }) {
  useEffect(() => {
    if (locked) return;
    const onKey = (e: KeyboardEvent) => {
      const n = Number(e.key);
      if (n >= 1 && n <= options.length && !(e.target instanceof HTMLInputElement)) {
        if (speed) onSpeed?.(n - 1);
        else setPicked(n - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [locked, options.length, speed, onSpeed, setPicked]);
  return (
    <div className={`options${grid ? " grid2" : ""}`}>
      {options.map((o, k) => {
        const cls = locked ? (k === answer ? "is-ok" : k === picked ? "is-miss" : "is-dim") : "";
        return (
          <button
            key={k}
            type="button"
            className={`opt ${cls}`}
            aria-pressed={!locked && picked === k}
            disabled={locked}
            lang={lang}
            onClick={() => (speed ? onSpeed?.(k) : setPicked(k))}
          >
            {!grid && <span className="key" aria-hidden="true">{k + 1}</span>}
            <span>{o}</span>
            {locked && k === answer && <span className="mark" aria-hidden="true">✓</span>}
            {locked && k === picked && k !== answer && <span className="mark" aria-hidden="true">✕</span>}
          </button>
        );
      })}
    </div>
  );
}

export function Exercise(p: ExProps & { stage?: "endings" | "full" }) {
  switch (p.mode) {
    case "table":
      return <TableExercise {...p} stage={p.stage ?? "full"} />;
    case "recall":
      return <Recall {...p} />;
    case "tiles":
      return <Tiles {...p} />;
    default:
      return <ChoiceExercise {...p} />;
  }
}

function ChoiceExercise(p: ExProps) {
  const { item, mode, base, pool, t, canListen, locked, taskKey } = p;
  const [picked, setPicked] = useState<number | null>(null);
  const spec = useMemo(() => {
    if (mode === "listen" || mode === "pick-spelling") {
      const o = targetOptions(item, pool, taskKey);
      return { ...o, lang: item.lang as TargetLang | undefined, labels: o.options as ReactNode[] };
    }
    if (mode === "article") {
      const a = articleOptions(item, taskKey);
      if (a) return { options: a.options, answer: a.answer, lang: item.lang as TargetLang | undefined, labels: a.options as ReactNode[], rest: a.rest };
    }
    if (mode === "question" && item.question) {
      const q = item.question;
      const r = seeded(taskKey);
      const idx = shuffleWith(q.options.map((_, k) => k), r);
      const labels = idx.map((k) => {
        const o = q.options[k];
        return typeof o === "string" ? <span key={k} lang={item.lang}>{o}</span> : gl(o, base);
      });
      const texts = idx.map((k) => {
        const o = q.options[k];
        return typeof o === "string" ? o : gl(o, base);
      });
      return { options: idx.map(String), answer: idx.indexOf(q.answer), lang: undefined, labels, texts };
    }
    const o = meaningOptions(item, pool, base, taskKey);
    return { ...o, lang: undefined, labels: o.options as ReactNode[] };
  }, [item, mode, pool, base, taskKey]);

  const label = (k: number) => ("texts" in spec && spec.texts ? spec.texts[k] : String(spec.options[k]));
  const submit = (k: number) => p.onSubmit({ verdict: k === spec.answer ? "correct" : "wrong", picked: k, text: spec.options[k], choice: { picked: label(k), answer: label(spec.answer) } });
  const onSpeed = (k: number) => {
    setPicked(k);
    submit(k);
  };

  let prompt: ReactNode;
  if (mode === "listen" || mode === "pick-spelling") {
    prompt = (
      <Prompt eyebrow={mode === "listen" ? t.whatHear : t.howSpelled}>
        <div className="listen-row">
          <Speaker text={item.spoken} lang={item.lang} big label={t.listen} auto />
          <SlowSpeaker text={item.spoken} lang={item.lang} t={t} />
        </div>
        <NoAudio t={t} onNoAudio={p.onNoAudio} />
      </Prompt>
    );
  } else if (mode === "article" && "rest" in spec) {
    prompt = (
      <Prompt eyebrow={t.pickArticle}>
        <div className="prompt-word">
          <span className="hero" lang={item.lang}>
            <span className="muted">___ </span>
            {spec.rest}
          </span>
          {canListen && <Speaker text={item.spoken} lang={item.lang} label={t.listen} />}
        </div>
        <div className="muted">{gl(item.gloss, base)}</div>
      </Prompt>
    );
  } else if (mode === "question") {
    prompt = (
      <Prompt eyebrow={t.readAnswer}>
        {/* A long text scrolls in its own box, so the question and the answers stay on screen together. */}
        <StemBox t={t}>
          <QuestionStem item={item} base={base} t={t} canListen={canListen} onNoAudio={p.onNoAudio} />
        </StemBox>
      </Prompt>
    );
  } else {
    prompt = (
      <Prompt eyebrow={t.whatMeans}>
        <TargetWord item={item} canListen={canListen} t={t} auto={p.speed ? false : canListen} base={p.speed ? undefined : base} />
      </Prompt>
    );
  }

  const grid = spec.options.every((o) => String(o).length <= 14) && (mode === "article" || mode === "pick-spelling" || p.speed);
  return (
    <>
      {prompt}
      <div className={`answer-area${mode === "question" ? " tight" : ""}`}>
        {mode === "question" && item.question && <div className="h2 question-text">{gl(item.question.prompt, base)}</div>}
        <Choices options={spec.labels} answer={spec.answer} lang={spec.lang} locked={locked} picked={picked} setPicked={setPicked} speed={p.speed} onSpeed={onSpeed} grid={grid} />
        {!p.speed && <CheckBar t={t} disabled={picked === null} onCheck={() => picked !== null && submit(picked)} conf={p.conf} setConf={p.setConf} showConf={p.showConf} locked={locked} />}
      </div>
    </>
  );
}

/** The text a question is about, capped so the answers stay on screen; says so when there's more to scroll. */
function StemBox({ t, children }: { t: Dict; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [more, setMore] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setMore(el.scrollHeight - el.scrollTop - el.clientHeight > 8);
    check();
    el.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);
  return (
    <>
      <div ref={ref} className={`stem-box${more ? " has-more" : ""}`} tabIndex={0} role="region" aria-label={t.readAnswer}>
        {children}
      </div>
      {more && (
        <button type="button" className="stem-more caption" onClick={() => ref.current?.scrollBy({ top: 140, behavior: "smooth" })}>
          {t.scrollText} ↓
        </button>
      )}
    </>
  );
}

export function QuestionStem({ item, base, t, canListen, onNoAudio }: { item: Item; base: BaseLang; t: Dict; canListen: boolean; onNoAudio?: () => void }) {
  if (item.turns?.length)
    return (
      <div className="turns">
        {item.turns.map((x, k) => (
          <div key={k} className={`turn ${x.who}`}>
            <div className="row" style={{ gap: 8 }}>
              <WordHints text={x.target} lang={item.lang} base={base} className="display" style={{ fontSize: "1.125rem" }} />
              {canListen && <Speaker text={x.spoken ?? x.target} lang={item.lang} label={t.listen} />}
            </div>
          </div>
        ))}
      </div>
    );
  if (item.type === "listening")
    // Without audio (no voice, or "Can't listen now") the text is shown instead.
    return canListen ? (
      <>
        <div className="listen-row">
          <Speaker text={item.spoken} lang={item.lang} big label={t.listen} auto />
          <SlowSpeaker text={item.spoken} lang={item.lang} t={t} />
        </div>
        <NoAudio t={t} onNoAudio={onNoAudio} />
      </>
    ) : (
      <p className="title" style={{ margin: 0 }}><WordHints text={item.target} lang={item.lang} base={base} /></p>
    );
  if (item.pattern)
    return (
      <div className="card stack" style={{ padding: 16 }}>
        <div className="label">{gl(item.pattern.rule, base)}</div>
        {item.pattern.table && <PatternTable table={item.pattern.table} meanings={item.pattern.meanings} lang={item.lang} base={base} />}
      </div>
    );
  return <TargetWord item={item} canListen={canListen} t={t} size="title" />;
}

/** First letter of each word, the rest hidden: "d… B…" for "der Bruder". */
export function hintFor(target: string): string {
  return target
    .split(/\s+/)
    .map((w) => (w.length <= 1 ? w : `${w[0]}${"·".repeat(Math.min(6, w.length - 1))}`))
    .join(" ");
}

function Recall(p: ExProps) {
  const { item, base, t, locked, lex } = p;
  const [text, setText] = useState("");
  const [hinted, setHinted] = useState(false);
  // "I don't know": show the answer and ask the learner to type it once (typing helps memory).
  const [shown, setShown] = useState(false);
  const [copyMiss, setCopyMiss] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const id = setTimeout(() => ref.current?.focus(), 200);
    return () => clearTimeout(id);
  }, []);
  const submit = () => {
    if (!text.trim() || locked) return;
    const r = check(text, item, { lexicon: lex, base });
    if (shown) {
      if (r.verdict === "wrong") return setCopyMiss(true);
      p.onSubmit({ verdict: "wrong", check: r, text, dontKnow: true });
      return;
    }
    p.onSubmit({ verdict: r.verdict, check: r, text, hinted });
  };
  const insert = (ch: string) => {
    const el = ref.current;
    if (!el) return setText((x) => x + ch);
    const s = el.selectionStart ?? text.length;
    const e = el.selectionEnd ?? text.length;
    const next = text.slice(0, s) + ch + text.slice(e);
    setText(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(s + ch.length, s + ch.length);
    });
  };
  return (
    <>
      <Prompt eyebrow={`${t.translate} ${t.langName[item.lang]}`}>
        <div className="title">{gl(item.gloss, base)}</div>
        {item.register && <span className="pill" style={{ alignSelf: "flex-start" }}>{item.register}</span>}
        {item.pos === "noun" && item.lang === "de" && !shown && <span className="caption">der / die / das + …</span>}
        {hinted && !shown && (
          <span className="caption tabular" lang={item.lang} aria-label={t.hint}>
            {hintFor(item.target)}
          </span>
        )}
        {shown && (
          <div className="card-soft stack" style={{ gap: 4 }}>
            <span className="label" lang={item.lang} style={{ fontWeight: 600 }}>{item.target}</span>
            <span className="caption">{copyMiss ? t.typeItAgain : t.typeItOnce}</span>
          </div>
        )}
      </Prompt>
      {/* Typing: the box sits right under the word, so the phone keyboard never hides the prompt. */}
      <div className="answer-area typing">
        <input
          ref={ref}
          className="input big"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setCopyMiss(false);
          }}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder={shown ? t.typeItOnce : t.typeAnswer}
          lang={item.lang}
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          spellCheck={false}
          enterKeyHint="done"
          readOnly={locked}
          aria-label={t.typeAnswer}
        />
        {!locked && (
          <div className="accent-bar" aria-label={t.accentKeys}>
            {ACCENTS[item.lang].map((c) => (
              <button key={c} type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insert(c)} lang={item.lang}>
                {c}
              </button>
            ))}
          </div>
        )}
        {!locked && !shown && (
          <div className="row" style={{ gap: 8, justifyContent: "center" }}>
            <button type="button" className="btn btn-ghost btn-sm" disabled={hinted} onClick={() => setHinted(true)}>
              {t.hint}
            </button>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => { setShown(true); setText(""); requestAnimationFrame(() => ref.current?.focus()); }}>
              {t.dontKnow}
            </button>
          </div>
        )}
        <CheckBar t={t} disabled={!text.trim()} onCheck={submit} conf={p.conf} setConf={p.setConf} showConf={p.showConf && !shown} locked={locked} />
      </div>
    </>
  );
}

function Tiles(p: ExProps) {
  const { item, base, t, locked, lex, taskKey } = p;
  const set = useMemo(() => tileSet(item, lex, taskKey), [item, lex, taskKey]);
  const [placed, setPlaced] = useState<number[]>([]);
  const toggle = (k: number) => {
    if (locked) return;
    setPlaced((x) => (x.includes(k) ? x.filter((y) => y !== k) : [...x, k]));
  };
  const submit = () => {
    const text = placed.map((k) => set.tiles[k]).join(" ");
    const r = check(text, item, { lexicon: lex, base });
    p.onSubmit({ verdict: r.verdict, check: r, text });
  };
  return (
    <>
      <Prompt eyebrow={t.buildIt}>
        <div className="title">{gl(item.gloss, base)}</div>
      </Prompt>
      <div className="answer-area">
        <div className="tiles-line" aria-label={t.tapTiles} lang={item.lang}>
          {placed.map((k) => (
            <button key={k} type="button" className="tile" onClick={() => toggle(k)}>
              {set.tiles[k]}
            </button>
          ))}
        </div>
        <div className="tiles-bank" lang={item.lang}>
          {set.tiles.map((w, k) => (
            <button key={k} type="button" className={`tile${placed.includes(k) ? " ghost" : ""}`} onClick={() => toggle(k)} tabIndex={placed.includes(k) ? -1 : 0}>
              {w}
            </button>
          ))}
        </div>
        <CheckBar t={t} disabled={!placed.length} onCheck={submit} conf={p.conf} setConf={p.setConf} showConf={p.showConf} locked={locked} />
      </div>
    </>
  );
}

function fold(s: string): string {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/ß/g, "ss");
}

/** Target and meaning are (nearly) the same word: "italiano" ↔ "italiano/a", "Hotel" ↔ "hotel". */
export function isCognate(item: Item, base: BaseLang): boolean {
  if (item.type !== "word" && item.type !== "phrase") return false;
  const target = fold(item.target).replace(/^(il|lo|la|l'|i|gli|le|un|una|der|die|das|ein|eine)\s+/, "").replace(/[^a-z ]/g, "").trim();
  const glosses = fold(gl(item.gloss, base)).split(/[/,;()]| o | or /).map((g) => g.replace(/^(el|la|los|las|un|una|the|a|an|to)\s+/, "").replace(/[^a-z ]/g, "").trim());
  if (target.length < 4) return false;
  const single = (x: string) => x.replace(/([a-z])\1/g, "$1");
  return glosses.some((g) => g.length >= 4 && (g === target || single(g) === single(target) || (Math.abs(g.length - target.length) <= 1 && g.slice(0, -1) === target.slice(0, -1))));
}
