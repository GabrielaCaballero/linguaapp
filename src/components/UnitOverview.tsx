"use client";
// The unit opener, like the first pages of a coursebook unit (owner, 2026-11-16): what you'll
// be able to do, a model dialogue or text in context, the unit's grammar explained with its
// tables, and the key words. Only then the exercises. Built from the unit's own content.
import { useState } from "react";
import type { BaseLang, Item, Unit } from "@/content/schema";
import type { Dict } from "@/lib/i18n";
import { gl, grammarPoint, visible } from "@/lib/content";
import { markSeen } from "@/lib/actions";
import { GrammarCard, GrammarTable } from "./lesson/Grammar";
import { Speaker } from "./lesson/Exercises";

export function UnitOverview({ unit, base, t, canListen, onStart, startLabel }: { unit: Unit; base: BaseLang; t: Dict; canListen: boolean; onStart: () => void; startLabel?: string }) {
  const [translate, setTranslate] = useState(false);
  const items = unit.items.filter((i) => visible(i, base));
  const model = items.find((i) => i.type === "dialogue" && i.turns?.length) ?? items.find((i) => i.type === "listening");
  const grammar = items.filter((i) => i.type === "pattern" || i.type === "paradigm");
  const words = items.filter((i) => i.type === "word" || i.type === "phrase");
  const lang = unit.lang;

  return (
    <div className="stack unit-overview" style={{ gap: 20, paddingBottom: 8 }}>
      <header className="stack" style={{ gap: 6 }}>
        <span className="caption">{t.unitN(unit.index)} · {unit.cefr}</span>
        <h1 className="title" style={{ margin: 0 }}>
          <span aria-hidden="true">{unit.icon} </span>
          <span lang={lang} className="display">{unit.title.target}</span>
        </h1>
        <span className="muted">{gl(unit.title, base)}</span>
      </header>

      <section className="card stack" style={{ gap: 6 }}>
        <h2 className="h2" style={{ margin: 0 }}>{t.youWillLearn}</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }} className="label">
          {unit.canDo.map((c, k) => <li key={k}>{gl(c, base)}</li>)}
        </ul>
      </section>

      {model && (
        <section className="stack" style={{ gap: 8 }}>
          <div className="row between">
            <h2 className="h2" style={{ margin: 0 }}>{t.modelText}</h2>
            <button type="button" className="btn btn-ghost btn-sm" aria-pressed={translate} onClick={() => setTranslate((x) => !x)}>
              {translate ? t.hideTranslation : t.showTranslation}
            </button>
          </div>
          <div className="card stack" style={{ gap: 10 }}>
            {(model.turns ?? [{ who: "A" as const, target: model.target, spoken: model.spoken, gloss: model.gloss }]).map((turn, k) => (
              <div key={k} className="row" style={{ alignItems: "flex-start", gap: 8 }}>
                {model.turns && <b className="caption" style={{ minWidth: 16 }}>{turn.who}</b>}
                <div className="stack grow" style={{ gap: 2 }}>
                  <span lang={lang} className="display">{turn.target}</span>
                  {translate && <span className="caption">{gl(turn.gloss, base)}</span>}
                </div>
                {canListen && <Speaker text={turn.spoken ?? turn.target} lang={lang} label={t.listen} />}
              </div>
            ))}
          </div>
        </section>
      )}

      {grammar.length > 0 && (
        <section className="stack" style={{ gap: 12 }}>
          <h2 className="h2" style={{ margin: 0 }}>{t.grammarHere}</h2>
          {dedupe(grammar).map((g) => <GrammarBlock key={g.id} item={g} base={base} t={t} />)}
        </section>
      )}

      {words.length > 0 && (
        <section className="stack" style={{ gap: 8 }}>
          <h2 className="h2" style={{ margin: 0 }}>{t.keyWords}</h2>
          <div className="card" style={{ padding: 0 }}>
            {words.map((w) => (
              <div key={w.id} className="row between" style={{ padding: "8px 14px", borderBottom: "1px solid var(--line)", gap: 12 }}>
                <span lang={lang} className="display">
                  {w.target}
                  {w.plural && <span className="caption"> · {w.plural}</span>}
                </span>
                <span className="caption" style={{ textAlign: "right" }}>{gl(w.gloss, base)}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pinned, so nobody has to scroll past the grammar to start. */}
      <div className="goal-bar overview-start">
        <button type="button" className="btn btn-primary" style={{ width: "100%" }} onClick={onStart}>{startLabel ?? t.startPractising}</button>
      </div>
    </div>
  );
}

/** One explanation per grammar point: a linked textbook card replaces the items that use it. */
function dedupe(items: Item[]): Item[] {
  const seen = new Set<string>();
  return items.filter((i) => {
    const g = i.grammar?.[0];
    if (!g) return i.type === "pattern" || i.type === "paradigm";
    if (seen.has(g)) return false;
    seen.add(g);
    return true;
  });
}

function GrammarBlock({ item, base, t }: { item: Item; base: BaseLang; t: Dict }) {
  const point = grammarPoint(item.grammar?.[0]);
  // The overview shows the short version; opening "Full explanation" counts as having read the
  // card. Unopened cards still appear as a rule card right before the pattern's first exercise.
  if (point) return <div className="card"><GrammarCard point={point} base={base} t={t} mode="overview" onOpen={() => markSeen(`g:${point.id}`)} /></div>;
  const table = item.pattern?.table;
  return (
    <div className="card stack" style={{ gap: 10 }}>
      <b lang={item.lang} className="display">{item.target}</b>
      {item.pattern && <p style={{ margin: 0 }}>{gl(item.pattern.rule, base)}</p>}
      {table && table.length > 1 && table[0][0] === "" && <GrammarTable table={{ head: table[0], rows: table.slice(1) }} lang={item.lang} label={item.target} />}
      {table && table.length > 1 && table[0][0] !== "" && (
        <div className="gtable-wrap" tabIndex={0} role="region" aria-label={item.target}>
          <table className="gtable" lang={item.lang}>
            {/* Content tables have a header row only when its first cell is empty (["", "kommen", "wohnen"]). */}
            {table[0][0] === "" && (
              <thead>
                <tr>{table[0].map((h, k) => <th key={k} scope="col">{h}</th>)}</tr>
              </thead>
            )}
            <tbody>
              {(table[0][0] === "" ? table.slice(1) : table).map((r, k) => (
                <tr key={k}>{r.map((c, j) => (j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>))}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {item.example && (
        <span className="label">
          <span lang={item.lang} className="display">{item.example.target}</span> — {gl(item.example.gloss, base)}
        </span>
      )}
    </div>
  );
}

/** Mark a unit's opener as seen. Its grammar cards count as read only when opened (see GrammarBlock),
 *  so a card the learner scrolled past still shows right before the pattern's first exercise. */
export function overviewSeenKeys(unit: Unit): string[] {
  return [`unit:${unit.id}`];
}
