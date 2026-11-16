"use client";
// A sentence in the language you're learning, with a dotted underline under each word the course
// knows: hover (computer) or tap (phone) to see what it means. Never used on the word being asked
// about, so it can't give the answer away.
import { useEffect, useMemo, useState } from "react";
import type { BaseLang, TargetLang } from "@/content/schema";
import { units } from "@/lib/content";
import { glossary, tokenize } from "@/lib/wordGloss";

export function WordHints({ text, lang, base, className, style }: { text: string; lang: TargetLang; base: BaseLang; className?: string; style?: React.CSSProperties }) {
  const tokens = useMemo(() => tokenize(text, glossary(lang, base, units(lang).flatMap((u) => u.items))), [text, lang, base]);
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    if (open === null) return;
    const close = () => setOpen(null);
    const id = setTimeout(() => document.addEventListener("click", close, { once: true }), 0);
    return () => {
      clearTimeout(id);
      document.removeEventListener("click", close);
    };
  }, [open]);
  return (
    <span lang={lang} className={className} style={style}>
      {tokens.map((tk, k) =>
        tk.meaning ? (
          <span key={k} className="gw-wrap">
            <button
              type="button"
              className="gw"
              aria-expanded={open === k}
              aria-label={`${tk.text}: ${tk.meaning}`}
              onClick={(e) => {
                e.stopPropagation();
                setOpen(open === k ? null : k);
              }}
              onMouseEnter={() => setOpen(k)}
              onMouseLeave={() => setOpen((o) => (o === k ? null : o))}
            >
              {tk.text}
            </button>
            {open === k && (
              <span className="gw-pop" role="tooltip" lang={base}>
                {tk.meaning}
              </span>
            )}
          </span>
        ) : (
          <span key={k}>{tk.text}</span>
        ),
      )}
    </span>
  );
}
