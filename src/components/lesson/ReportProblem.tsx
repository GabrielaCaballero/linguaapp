"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import type { BaseLang, Item } from "@/content/schema";
import type { Verdict } from "@/lib/model";
import type { Dict } from "@/lib/i18n";
import { report, type ReportReason } from "@/lib/reports";
import { track } from "@/lib/metrics";
import { Sheet } from "../ui";
import { Icon } from "../icons";

/**
 * "Report a problem" under every correction (owner, 2026-11-23): the learner says what's wrong —
 * their answer should count, the translation, the audio, a mistake in the sentence or note — with
 * an optional comment. Sent to the owner (src/lib/reports.ts); the lesson goes on unchanged.
 */
export function ReportProblem({
  t,
  item,
  base,
  verdict,
  text,
  mode,
}: {
  t: Dict;
  item: Item;
  base: BaseLang;
  verdict: Verdict;
  text?: string;
  mode?: string;
}) {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState<ReportReason | null>(null);
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);

  const reasons: { v: ReportReason; label: string }[] = [
    ...(text && verdict !== "correct"
      ? [{ v: "answer_ok" as const, label: t.reportAnswerOk }]
      : []),
    { v: "translation", label: t.reportTranslation },
    { v: "audio", label: t.reportAudio },
    { v: "mistake", label: t.reportMistake },
    { v: "other", label: t.reportOther },
  ];

  const send = () => {
    if (!reason) return;
    report({
      item_id: item.id,
      lang: item.lang,
      base,
      reason,
      mode,
      verdict,
      answer: text,
      comment,
    });
    track("content_report", { reason });
    setSent(true);
    setOpen(false);
  };

  if (sent)
    return (
      <div className="caption report-sent" role="status">
        {t.reportThanks}
      </div>
    );
  return (
    <>
      <button
        type="button"
        className="link report-link"
        onClick={() => setOpen(true)}
      >
        <Icon name="flag" size={14} /> {t.reportProblem}
      </button>
      {/* On the page itself: inside the feedback panel (fixed, animated) the sheet would be clipped. */}
      {open &&
        createPortal(
          <Sheet
            open={open}
            onClose={() => setOpen(false)}
            label={t.reportProblem}
          >
            <div className="stack" style={{ paddingBottom: 8 }}>
              <div>
                <div className="h2">{t.reportTitle}</div>
                <div
                  className="caption"
                  lang={item.lang}
                  style={{ marginTop: 4 }}
                >
                  {item.target}
                </div>
              </div>
              <div className="stack" style={{ gap: 8 }}>
                {reasons.map((r) => (
                  <button
                    key={r.v}
                    type="button"
                    className="choice-card"
                    style={{ minHeight: 48, padding: "10px 16px" }}
                    aria-pressed={reason === r.v}
                    onClick={() => setReason(r.v)}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
              <label className="stack" style={{ gap: 4 }}>
                <span className="caption">{t.reportComment}</span>
                <textarea
                  className="input"
                  rows={3}
                  style={{ resize: "none", minHeight: 80 }}
                  maxLength={500}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder={t.reportCommentHint}
                />
              </label>
              <div className="bottom-bar">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!reason}
                  onClick={send}
                >
                  {t.reportSend}
                </button>
              </div>
            </div>
          </Sheet>,
          document.body,
        )}
    </>
  );
}
