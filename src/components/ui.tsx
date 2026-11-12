"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { TargetLang } from "@/content/schema";
import { SEAL } from "@/lib/content";
import { dict, type Dict } from "@/lib/i18n";
import type { DB } from "@/lib/model";
import { Icon } from "./icons";

export function useT(db: DB | null): Dict {
  return dict(db?.profile.appLang ?? "es");
}

export function Seal({ lang, size = 56 }: { lang: TargetLang; size?: number }) {
  return (
    <span className="seal" data-l={lang} style={{ ["--size" as string]: `${size}px` }} aria-hidden="true">
      {SEAL[lang]}
    </span>
  );
}

export function Ring({ value, size = 200, stroke = 16, gold = false, children, label }: { value: number; size?: number; stroke?: number; gold?: boolean; children?: ReactNode; label?: string }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const v = Math.max(0, Math.min(1, value));
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(v));
    return () => cancelAnimationFrame(id);
  }, [v]);
  return (
    <div className={`ring${gold ? " gold" : ""}`} style={{ width: size, height: size }} role="img" aria-label={label}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle className="track" cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} />
        <circle className="arc" cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - shown) + (shown > 0 ? 0 : 0.01)} />
      </svg>
      <div className="ring-center">{children}</div>
    </div>
  );
}

export function Sheet({ open, onClose, children, label }: { open: boolean; onClose: () => void; children: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    ref.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <>
      <div className="scrim" onClick={onClose} />
      <div className="sheet" role="dialog" aria-modal="true" aria-label={label} tabIndex={-1} ref={ref}>
        <div className="sheet-grip" />
        {children}
      </div>
    </>
  );
}

export function Switch({ checked, onChange, label, disabled }: { checked: boolean; onChange: (v: boolean) => void; label: string; disabled?: boolean }) {
  return (
    <span className="switch">
      <input type="checkbox" role="switch" checked={checked} disabled={disabled} aria-label={label} onChange={(e) => onChange(e.target.checked)} />
      <span />
    </span>
  );
}

export function Seg<T extends string | number>({ value, options, onChange, label }: { value: T; options: { v: T; label: string }[]; onChange: (v: T) => void; label: string }) {
  return (
    <div className="seg" role="group" aria-label={label}>
      {options.map((o) => (
        <button key={String(o.v)} type="button" aria-pressed={o.v === value} onClick={() => onChange(o.v)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function TabBar({ t }: { t: Dict }) {
  const path = usePathname();
  const tabs = [
    { href: "/", label: t.tabToday, icon: "home", on: path === "/" },
    { href: "/path", label: t.tabPath, icon: "path", on: path.startsWith("/path") },
    { href: "/me", label: t.tabMe, icon: "user", on: path.startsWith("/me") },
  ];
  return (
    <div className="tabbar">
      <nav aria-label={t.mainNav}>
        {tabs.map((x) => (
          <Link key={x.href} href={x.href} className="tab" aria-current={x.on ? "page" : undefined}>
            <span className="tab-ic">
              <Icon name={x.icon} size={22} />
            </span>
            {x.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function Toast({ text, onDone }: { text: string | null; onDone: () => void }) {
  useEffect(() => {
    if (!text) return;
    const id = setTimeout(onDone, 2400);
    return () => clearTimeout(id);
  }, [text, onDone]);
  if (!text) return null;
  return (
    <div className="toast" role="status">
      {text}
    </div>
  );
}

const CONFETTI_COLORS = ["var(--accent)", "var(--gold)", "var(--ok)", "#8ea8ff", "#ff8b6b"];
export function Confetti() {
  const [bits] = useState(() =>
    Array.from({ length: 36 }, (_, k) => ({
      x: `${Math.round((Math.random() - 0.5) * 360)}px`,
      y: `${Math.round(-180 - Math.random() * 320)}px`,
      r: `${Math.round(Math.random() * 720)}deg`,
      c: CONFETTI_COLORS[k % CONFETTI_COLORS.length],
      d: Math.random() * 120,
    })),
  );
  const [on, setOn] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setOn(false), 1400);
    return () => clearTimeout(id);
  }, []);
  if (!on) return null;
  return (
    <div className="confetti" aria-hidden="true">
      {bits.map((b, k) => (
        <i key={k} style={{ background: b.c, animationDelay: `${b.d}ms`, ["--x" as string]: b.x, ["--y" as string]: b.y, ["--r" as string]: b.r }} />
      ))}
    </div>
  );
}

export function WeekDots({ n, goal }: { n: number; goal: number }) {
  return (
    <span className="dots" aria-hidden="true">
      {Array.from({ length: Math.max(goal, n) }, (_, k) => (
        <i key={k} className={k < n ? "on" : ""} />
      ))}
    </span>
  );
}

export function BackHeader({ title, href, right, backLabel }: { title: string; href: string; right?: ReactNode; backLabel: string }) {
  return (
    <div className="row between" style={{ minHeight: 48, marginLeft: -12 }}>
      <Link href={href} className="icon-btn" aria-label={backLabel}>
        <Icon name="back" />
      </Link>
      <h1 className="h2" style={{ flex: 1 }}>
        {title}
      </h1>
      {right}
    </div>
  );
}

/** Wait for the on-device DB (null during SSR/hydration). */
export function Loading() {
  return <div className="screen" aria-busy="true" />;
}
