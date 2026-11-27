"use client";
// Grammar explained like a textbook (content v2.1, docs/team/50): the rule, how to work the
// form out, the full table, examples and the classic mistake. The same card everywhere, always
// led by its one-line rule (the line learners also see on a mistake), ordered for the moment:
//   overview  → title, one line, table; the rest behind "Full explanation" (a unit opener must stay short)
//   intro     → before a new pattern's first exercise: one line, table, steps, the classic mistake
//   mistake   → from the feedback sheet: the classic mistake first, then one line and table
import type { ReactNode } from "react";
import type { BaseLang, Glossed, GrammarPoint, TargetLang } from "@/content/schema";
import { WordHints } from "./WordHints";
import type { Dict } from "@/lib/i18n";
import { gl } from "@/lib/content";

//   learn     → the learn card before its first try: one line, table, one example; the rest one tap away
type Mode = "overview" | "learn" | "intro" | "mistake";

/** A grammar table: header cells in the learner's language when the content gives them, every
 *  course word tappable for its meaning, and each row's meaning underneath when there is one. */
export function GrammarTable({ table, lang, label, base }: { table: { head: (string | Glossed)[]; rows: string[][]; meanings?: (Glossed | null)[] }; lang: string; label: string; base: BaseLang }) {
  const tl = lang as TargetLang;
  const cell = (c: string) => (c ? <WordHints text={c} lang={tl} base={base} /> : null);
  return (
    // Focusable region so keyboard users can scroll a wide table; the shadows show there is more.
    <div className="gtable-wrap" tabIndex={0} role="region" aria-label={label}>
      <table className="gtable" lang={lang}>
        <thead>
          <tr>
            {table.head.map((h, k) =>
              h === "" ? <td key={k} aria-hidden="true" /> : typeof h === "string" ? <th key={k} scope="col">{h}</th> : <th key={k} scope="col" lang={base}>{gl(h, base)}</th>,
            )}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((r, k) => {
            const m = table.meanings?.[k];
            return (
              <tr key={k}>
                {r.map((c, j) =>
                  j === 0 ? (
                    <th key={j} scope="row">{cell(c)}</th>
                  ) : (
                    <td key={j}>
                      {cell(c)}
                      {j === r.length - 1 && m ? <span className="ptable-mean" lang={base}>{gl(m, base)}</span> : null}
                    </td>
                  ),
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function GrammarCard({ point, base, t, mode = "intro", onOpen }: { point: GrammarPoint; base: BaseLang; t: Dict; mode?: Mode; onOpen?: () => void }) {
  const rule = <p style={{ margin: 0 }}>{gl(point.rule, base)}</p>;
  const table = point.table && <GrammarTable table={point.table} lang={point.lang} label={gl(point.title, base)} base={base} />;
  const steps = point.steps && point.steps.length > 0 && (
    <div>
      <div className="label" style={{ fontWeight: 600 }}>{t.howToWorkOut}</div>
      <ol style={{ margin: "4px 0 0", paddingLeft: 20 }}>
        {point.steps.map((s, k) => <li key={k} className="label">{gl(s, base)}</li>)}
      </ol>
    </div>
  );
  const examples = (
    <div>
      <div className="label" style={{ fontWeight: 600 }}>{t.examples}</div>
      <ul style={{ margin: "4px 0 0", paddingLeft: 20 }}>
        {point.examples.map((e, k) => (
          <li key={k} className="label">
            <span lang={point.lang} className="display">{e.target}</span> — {gl(e.gloss, base)}
          </li>
        ))}
      </ul>
    </div>
  );
  const pitfall = point.pitfalls && (
    <div className="card-soft label">
      <b>{t.watchOut}</b> {gl(point.pitfalls, base)}
    </div>
  );
  const more = (children: ReactNode) => (
    <details className="gmore" onToggle={(e) => (e.currentTarget as HTMLDetailsElement).open && onOpen?.()}>
      <summary className="link">{t.fullExplanation}</summary>
      <div className="stack" style={{ gap: 14, marginTop: 8 }}>{children}</div>
    </details>
  );
  const Heading = mode === "overview" ? "h3" : "h2";
  const [first, ...rest] = point.examples;
  const oneExample = first && (
    <div className="label">
      <span lang={point.lang} className="display" style={{ fontSize: "1.125rem" }}>{first.target}</span> — <span className="muted">{gl(first.gloss, base)}</span>
    </div>
  );
  const moreExamples = rest.length > 0 && (
    <div>
      <div className="label" style={{ fontWeight: 600 }}>{t.examples}</div>
      <ul style={{ margin: "4px 0 0", paddingLeft: 20 }}>
        {rest.map((e, k) => (
          <li key={k} className="label">
            <span lang={point.lang} className="display">{e.target}</span> — {gl(e.gloss, base)}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="stack grammar-card" lang={base} style={{ gap: 14, textAlign: "left" }}>
      <div>
        {mode !== "overview" && mode !== "learn" && <div className="prompt-eyebrow">{t.ruleTitle}</div>}
        <Heading className="h2" style={{ margin: mode === "overview" ? 0 : "4px 0 0" }}>{gl(point.title, base)}</Heading>
        <p className="label grammar-short" style={{ margin: "6px 0 0", fontWeight: 600 }}>{gl(point.short, base)}</p>
      </div>
      {mode === "mistake" && pitfall}
      {table}
      {mode === "overview" && more(<>{rule}{steps}{examples}{pitfall}</>)}
      {mode === "learn" && (
        <>
          {oneExample}
          {more(<>{rule}{steps}{moreExamples}{pitfall}</>)}
        </>
      )}
      {mode === "intro" && (
        <>
          {steps}
          {pitfall}
          {examples}
          {more(rule)}
        </>
      )}
      {mode === "mistake" && more(<>{rule}{steps}{examples}</>)}
    </div>
  );
}
