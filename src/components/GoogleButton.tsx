"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { finishGoogleToken, googleClientId, googleNonce, type AccountUser, type AuthError } from "@/lib/sync/client";

/**
 * Google's own "Continue with Google" button (Google Identity Services). Google's account picker
 * then names linguina.app, not the Supabase project. If Google's script can't load (offline, a
 * blocker), `fallback` (the redirect through Supabase) is shown instead.
 */
type Gsi = {
  accounts: {
    id: {
      initialize(o: { client_id: string; nonce: string; callback: (r: { credential: string }) => void; use_fedcm_for_button?: boolean; itp_support?: boolean }): void;
      renderButton(el: HTMLElement, o: Record<string, unknown>): void;
    };
  };
};

const SRC = "https://accounts.google.com/gsi/client";
let loading: Promise<Gsi> | null = null;
function loadGsi(): Promise<Gsi> {
  const w = window as unknown as { google?: Gsi };
  if (w.google?.accounts?.id) return Promise.resolve(w.google);
  if (!loading)
    loading = new Promise<Gsi>((resolve, reject) => {
      const s = document.createElement("script");
      s.src = SRC;
      s.async = true;
      const timer = window.setTimeout(() => reject(new Error("timeout")), 8000);
      s.onload = () => {
        window.clearTimeout(timer);
        if (w.google?.accounts?.id) resolve(w.google);
        else reject(new Error("no gsi"));
      };
      s.onerror = () => {
        window.clearTimeout(timer);
        reject(new Error("load"));
      };
      document.head.appendChild(s);
    }).catch((e) => {
      loading = null; // try again next time
      throw e;
    });
  return loading;
}

export function GoogleButton({ lang, busy, onStart, onDone, fallback }: { lang: string; busy: boolean; onStart: () => void; onDone: (r: { user: AccountUser } | { error: AuthError }) => void; fallback: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"loading" | "ready" | "failed">(() => (googleClientId() ? "loading" : "failed"));
  // Latest handlers without re-rendering Google's button on every parent render.
  const cb = useRef({ onStart, onDone });
  useEffect(() => {
    cb.current = { onStart, onDone };
  });

  useEffect(() => {
    const id = googleClientId();
    if (!id) return;
    let live = true;
    void (async () => {
      try {
        const [g, nonce] = await Promise.all([loadGsi(), googleNonce()]);
        if (!live || !box.current) return;
        g.accounts.id.initialize({
          client_id: id,
          nonce: nonce.hashed,
          use_fedcm_for_button: true,
          itp_support: true,
          callback: (r) => {
            cb.current.onStart();
            void finishGoogleToken(r.credential, nonce.raw).then((x) => cb.current.onDone(x));
          },
        });
        box.current.replaceChildren();
        g.accounts.id.renderButton(box.current, {
          type: "standard",
          theme: "outline",
          size: "large",
          shape: "pill",
          text: "continue_with",
          logo_alignment: "center",
          width: Math.min(400, Math.max(200, box.current.clientWidth)),
          locale: lang,
        });
        setState("ready");
      } catch {
        if (live) setState("failed");
      }
    })();
    return () => {
      live = false;
    };
  }, [lang]);

  if (state === "failed") return <>{fallback}</>;
  return (
    <div
      ref={box}
      className="google-btn"
      aria-busy={state === "loading" || busy}
      style={{ minHeight: 44, display: "flex", justifyContent: "center", opacity: busy ? 0.5 : 1, pointerEvents: busy ? "none" : undefined }}
    />
  );
}
