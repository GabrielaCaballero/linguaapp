"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { BaseLang, Item, Lexicon, TargetLang } from "@/content/schema";
import type { Confidence, Mode, Verdict } from "@/lib/model";
import type { Dict } from "@/lib/i18n";
import { check, type CheckResult } from "@/lib/check";
import { gl, per, LANG_NAME } from "@/lib/content";
import { speak } from "@/lib/speech";
import { Icon } from "../icons";
import { articleOptions, meaningOptions, seeded, shuffleWith, targetOptions, tileSet } from "./options";

export type Submit = (r: { verdict: Verdict; check?: CheckResult; text?: string; picked?: number }) => void;

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
}

const ACCENTS: Record<TargetLang, string[]> = { it: ["à", "è", "é", "ì", "ò", "ù"], de: ["ä", "ö", "ü", "ß", "Ä", "Ö", "Ü"] };

export function Speaker({ text, lang, slow, big, label, auto }: { text: string; lang: TargetLang; slow?: boolean; big?: boolean; label: string; auto?: boolean }) {
  const [on, setOn] = useState(false);
  const play = () => {
    speak(text, lang, slow);
    setOn(true);
    setTimeout(() => setOn(false), Math.min(4000, 600 + text.length * 70));
  };
  const did = useRef(false);
  useEffect(() => {
    if (auto && !did.current) {
      did.current = true;
      const id = setTimeout(() => speak(text, lang, slow), 250);
      return () => clearTimeout(id);
    }
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

function Prompt({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <div className="prompt">
      <div className="prompt-eyebrow">{eyebrow}</div>
      {children}
    </div>
  );
}

function TargetWord({ item, canListen, t, size = "hero", auto }: { item: Item; canListen: boolean; t: Dict; size?: "hero" | "title"; auto?: boolean }) {
  return (
    <div className="prompt-word">
      <span className={size} lang={item.lang}>{item.target}</span>
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

export function Exercise(p: ExProps) {
  switch (p.mode) {
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
      return { options: idx.map(String), answer: idx.indexOf(q.answer), lang: undefined, labels };
    }
    const o = meaningOptions(item, pool, base, taskKey);
    return { ...o, lang: undefined, labels: o.options as ReactNode[] };
  }, [item, mode, pool, base, taskKey]);

  const submit = (k: number) => p.onSubmit({ verdict: k === spec.answer ? "correct" : "wrong", picked: k, text: spec.options[k] });
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
          <Speaker text={item.spoken} lang={item.lang} slow label={t.listenSlow} />
        </div>
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
        <QuestionStem item={item} base={base} t={t} canListen={canListen} />
        <div className="h2">{item.question ? gl(item.question.prompt, base) : ""}</div>
      </Prompt>
    );
  } else {
    prompt = (
      <Prompt eyebrow={t.whatMeans}>
        <TargetWord item={item} canListen={canListen} t={t} auto={p.speed ? false : canListen} />
        {item.register && <span className="pill" style={{ alignSelf: "flex-start" }}>{item.register}</span>}
      </Prompt>
    );
  }

  const grid = spec.options.every((o) => String(o).length <= 14) && (mode === "article" || mode === "pick-spelling" || p.speed);
  return (
    <>
      {prompt}
      <div className="answer-area">
        <Choices options={spec.labels} answer={spec.answer} lang={spec.lang} locked={locked} picked={picked} setPicked={setPicked} speed={p.speed} onSpeed={onSpeed} grid={grid} />
        {!p.speed && <CheckBar t={t} disabled={picked === null} onCheck={() => picked !== null && submit(picked)} conf={p.conf} setConf={p.setConf} showConf={p.showConf} locked={locked} />}
      </div>
    </>
  );
}

export function QuestionStem({ item, base, t, canListen }: { item: Item; base: BaseLang; t: Dict; canListen: boolean }) {
  if (item.turns?.length)
    return (
      <div className="turns">
        {item.turns.map((x, k) => (
          <div key={k} className={`turn ${x.who}`}>
            <div className="row" style={{ gap: 8 }}>
              <span lang={item.lang} className="display" style={{ fontSize: "1.125rem" }}>{x.target}</span>
              {canListen && <Speaker text={x.spoken ?? x.target} lang={item.lang} label={t.listen} />}
            </div>
          </div>
        ))}
      </div>
    );
  if (item.type === "listening")
    return (
      <div className="listen-row">
        <Speaker text={item.spoken} lang={item.lang} big label={t.listen} auto />
        <Speaker text={item.spoken} lang={item.lang} slow label={t.listenSlow} />
        {!canListen && <p lang={item.lang} className="title">{item.target}</p>}
      </div>
    );
  if (item.pattern)
    return (
      <div className="card stack" style={{ padding: 16 }}>
        <div className="label">{gl(item.pattern.rule, base)}</div>
        {item.pattern.table && (
          <table style={{ borderCollapse: "collapse", fontSize: "0.9375rem" }} lang={item.lang}>
            <tbody>
              {item.pattern.table.map((row, k) => (
                <tr key={k}>{row.map((c, j) => <td key={j} style={{ padding: "4px 10px 4px 0", fontWeight: j === 0 ? 400 : 600 }}>{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  return <TargetWord item={item} canListen={canListen} t={t} size="title" />;
}

function Recall(p: ExProps) {
  const { item, base, t, locked, lex } = p;
  const [text, setText] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const id = setTimeout(() => ref.current?.focus(), 200);
    return () => clearTimeout(id);
  }, []);
  const submit = () => {
    if (!text.trim() || locked) return;
    const r = check(text, item, { lexicon: lex, base });
    p.onSubmit({ verdict: r.verdict, check: r, text });
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
      <Prompt eyebrow={`${t.translate} ${LANG_NAME[item.lang]}`}>
        <div className="title">{gl(item.gloss, base)}</div>
        {item.register && <span className="pill" style={{ alignSelf: "flex-start" }}>{item.register}</span>}
        {item.pos === "noun" && item.lang === "de" && <span className="caption">der / die / das + …</span>}
      </Prompt>
      <div className="answer-area">
        <input
          ref={ref}
          className="input big"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder={t.typeAnswer}
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
          <div className="accent-bar" aria-label="Accents">
            {ACCENTS[item.lang].map((c) => (
              <button key={c} type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insert(c)} lang={item.lang}>
                {c}
              </button>
            ))}
          </div>
        )}
        <CheckBar t={t} disabled={!text.trim()} onCheck={submit} conf={p.conf} setConf={p.setConf} showConf={p.showConf} locked={locked} />
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

/** Guess first: an ungraded MCQ before teaching, then a teaching card replaces the options. */
export function Guess({ item, base, pool, t, canListen, taskKey, onReveal, onDone }: { item: Item; base: BaseLang; pool: Item[]; t: Dict; canListen: boolean; taskKey: string; onReveal: () => void; onDone: () => void }) {
  const [picked, setPicked] = useState<number | null>(null);
  const spec = useMemo(() => {
    if (item.type === "sound") {
      const o = targetOptions(item, pool, taskKey);
      return { ...o, labels: o.options as ReactNode[], lang: item.lang as TargetLang | undefined, kind: "sound" as const };
    }
    if (item.question && (item.type === "dialogue" || item.type === "listening" || item.type === "pattern")) {
      const q = item.question;
      const labels = q.options.map((o, k) => (typeof o === "string" ? <span key={k} lang={item.lang}>{o}</span> : gl(o, base)));
      return { options: q.options.map((_, k) => String(k)), answer: q.answer, labels, lang: undefined, kind: "question" as const };
    }
    const o = meaningOptions(item, pool, base, taskKey);
    return { ...o, labels: o.options as ReactNode[], lang: undefined, kind: "meaning" as const };
  }, [item, pool, base, taskKey]);
  const revealed = picked !== null;
  const pick = (k: number) => {
    if (revealed) return;
    setPicked(k);
    onReveal();
  };
  const note = per(item.note, base);
  return (
    <>
      <Prompt eyebrow={`${t.newWord} · ${t.guessFirst}`}>
        {spec.kind === "sound" ? (
          <div className="listen-row">
            <Speaker text={item.spoken} lang={item.lang} big label={t.listen} auto />
            <Speaker text={item.spoken} lang={item.lang} slow label={t.listenSlow} />
          </div>
        ) : spec.kind === "question" ? (
          <>
            <QuestionStem item={item} base={base} t={t} canListen={canListen} />
            <div className="h2">{gl(item.question!.prompt, base)}</div>
          </>
        ) : (
          <TargetWord item={item} canListen={canListen} t={t} auto={canListen} />
        )}
        {!revealed && spec.kind === "sound" && !canListen && <div className="title" lang={item.lang}>{item.target}</div>}
      </Prompt>
      <div className="answer-area">
        {!revealed ? (
          <Choices options={spec.labels} answer={spec.answer} lang={spec.lang} locked={false} picked={null} setPicked={pick} grid={spec.kind === "sound"} />
        ) : (
          <div className="teach" role="status">
            <div className="row" style={{ gap: 8 }}>
              <span className={picked === spec.answer ? "accent" : "muted"} style={{ fontWeight: 700 }}>
                {picked === spec.answer ? `✓ ${t.correct}` : `→ ${t.correctAnswer}`}
              </span>
            </div>
            <div className="row" style={{ gap: 10 }}>
              <span className="title" lang={item.lang}>{item.target}</span>
              {canListen && <Speaker text={item.spoken} lang={item.lang} slow={item.slow} label={t.listen} />}
            </div>
            <div style={{ fontSize: "1.125rem" }}>{gl(item.gloss, base)}</div>
            {item.plural && <div className="caption" lang={item.lang}>{item.plural}</div>}
            {note && <div className="label muted">{note}</div>}
            {item.example && (
              <div className="label">
                <span lang={item.lang} className="display">{item.example.target}</span> — <span className="muted">{gl(item.example.gloss, base)}</span>
              </div>
            )}
          </div>
        )}
        <button type="button" className="btn btn-primary" disabled={!revealed} onClick={onDone} autoFocus={revealed}>
          {t.continue}
        </button>
      </div>
    </>
  );
}
