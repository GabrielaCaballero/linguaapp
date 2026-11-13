"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { getDB, useDB } from "@/lib/store";
import { finishGoogle, getEngine, isGoogleEnabled, isSyncConfigured, readOAuthReturn, sendCode, startGoogle, verifyCode, type AccountUser, type AuthError } from "@/lib/sync/client";
import { BadRemoteError, type Choice, type FirstLogin } from "@/lib/sync/engine";
import { onboardingHref } from "@/lib/nav";
import { BackHeader, Loading, useT } from "@/components/ui";
import { Icon } from "@/components/icons";

/** Sign in with an emailed 6-digit code (or Google), then settle where the progress comes from. */
export default function AccountPage() {
  return (
    <Suspense fallback={<Loading />}>
      <AccountRoute />
    </Suspense>
  );
}

function AccountRoute() {
  const sp = useSearchParams();
  const from = sp.get("from") === "welcome" ? "welcome" : "settings";
  // Keyed on `from` only: Google's ?code=… is stripped from the URL once read, and that
  // must not reset the screen.
  return <SignIn key={from} from={from} />;
}

type Step = { id: "email" } | { id: "code" } | { id: "choose"; info: Extract<FirstLogin, { kind: "choose" }> } | { id: "done" };

function SignIn({ from }: { from: "welcome" | "settings" }) {
  const db = useDB();
  const t = useT(db);
  const router = useRouter();
  const [step, setStep] = useState<Step>({ id: "email" });
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const oauthRead = useRef(false);
  // Leaving for Google offline strands an installed iPhone app on a browser error page.
  const online = useSyncExternalStore(subscribeOnline, () => navigator.onLine !== false, () => true);

  const afterSignIn = async (user: AccountUser) => {
    try {
      const first = await getEngine()!.beginLogin(user.id);
      setBusy(false);
      if (first.kind === "choose") setStep({ id: "choose", info: first });
      else setStep({ id: "done" });
    } catch (e) {
      setBusy(false);
      setErr(e instanceof BadRemoteError ? t.acctBadRemote : "network");
    }
  };

  // Back from Google: exchange ?code=… for a session, then continue like the email path.
  useEffect(() => {
    if (oauthRead.current || !db || !isSyncConfigured()) return;
    oauthRead.current = true;
    const ret = readOAuthReturn(window.location.search, window.location.hash);
    if (!ret) return;
    window.history.replaceState(null, "", `/account?from=${from}`);
    void (async () => {
      setBusy(true);
      const r = await finishGoogle(ret);
      if ("error" in r) {
        setBusy(false);
        setErr(r.error);
        return;
      }
      await afterSignIn(r.user);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db]);

  if (!db) return <Loading />;
  const back = from === "welcome" ? onboardingHref() : "/me/settings";
  if (!isSyncConfigured()) {
    router.replace(back);
    return <Loading />;
  }

  const finish = () => {
    // A fresh device that downloaded nothing still needs onboarding; otherwise go home.
    router.replace(getDB().profile.onboarded ? "/" : onboardingHref());
  };

  const send = async () => {
    const e = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return;
    setBusy(true);
    setErr(null);
    const r = await sendCode(e);
    setBusy(false);
    if (r) setErr(r);
    else {
      setEmail(e);
      setCode("");
      setStep({ id: "code" });
    }
  };

  const verify = async () => {
    const c = code.replace(/\D/g, "");
    if (c.length < 6) return;
    setBusy(true);
    setErr(null);
    const r = await verifyCode(email, c);
    if ("error" in r) {
      setBusy(false);
      setErr(r.error);
      return;
    }
    await afterSignIn(r.user);
  };

  const google = async () => {
    setBusy(true);
    setErr(null);
    const r = await startGoogle(from);
    // On success the browser is already leaving for Google; stay busy.
    if (r) {
      setBusy(false);
      setErr(r);
    }
  };

  const msg = err ? (err in t.acctErr ? t.acctErr[err as AuthError] : err) : null;
  const errLine = msg && <p role="alert" className="label" style={{ color: "var(--miss)", margin: 0 }}>{msg}</p>;


  const choose = async (c: Choice) => {
    setBusy(true);
    await getEngine()!.resolve(c);
    setBusy(false);
    setStep({ id: "done" });
  };

  return (
    <main className="screen">
      <BackHeader title={t.acct} backLabel={t.back} href={back} />

      {step.id === "email" && (
        <form className="stack" style={{ marginTop: 8, gap: 16 }} onSubmit={(e) => { e.preventDefault(); void send(); }}>
          <h2 className="title">{t.acctSignInTitle}</h2>
          {isGoogleEnabled() && (
            <>
              <button type="button" className="btn btn-secondary" disabled={busy || !online} onClick={() => void google()}>
                <GoogleMark /> {t.acctGoogle}
              </button>
              <p className="caption center" style={{ margin: 0 }}>{t.acctOr}</p>
            </>
          )}
          <p className="muted" style={{ margin: 0 }}>{t.acctSignInSub}</p>
          <input className="input" type="email" inputMode="email" autoComplete="email" autoCapitalize="none" spellCheck={false} placeholder={t.acctEmailPlaceholder} aria-label={t.acctEmail} value={email} onChange={(e) => setEmail(e.target.value)} />
          {errLine}
          <button type="submit" className="btn btn-primary" disabled={busy || !email.includes("@")}>{busy ? t.acctSending : t.acctSendCode}</button>
          <p className="caption" style={{ margin: 0 }}>{t.acctPrivacy}</p>
        </form>
      )}

      {step.id === "code" && (
        <form className="stack" style={{ marginTop: 8, gap: 16 }} onSubmit={(e) => { e.preventDefault(); void verify(); }}>
          <h2 className="title">{t.acctCodeTitle}</h2>
          <p className="muted" style={{ margin: 0 }}>{t.acctCodeSub(email)}</p>
          <input className="input big center tabular" inputMode="numeric" autoComplete="one-time-code" maxLength={10} placeholder="123456" aria-label={t.acctCode} value={code} onChange={(e) => setCode(e.target.value.replace(/[^\d ]/g, ""))} autoFocus />
          {errLine}
          <button type="submit" className="btn btn-primary" disabled={busy || code.replace(/\D/g, "").length < 6}>{busy ? t.acctVerifying : t.acctVerify}</button>
          <button type="button" className="btn btn-ghost" disabled={busy} onClick={() => void send()}>{t.acctResend}</button>
          <button type="button" className="btn btn-ghost" disabled={busy} onClick={() => { setErr(null); setStep({ id: "email" }); }}>{t.acctOtherEmail}</button>
        </form>
      )}

      {step.id === "choose" && (
        <div className="stack" style={{ marginTop: 8, gap: 16 }}>
          <h2 className="title">{t.acctChooseTitle}</h2>
          <p className="muted" style={{ margin: 0 }}>{t.acctChooseSub}</p>
          <div className="card stack" style={{ gap: 6 }}>
            <div className="row between"><span className="caption">{t.acctThisDevice}</span><span className="tabular">{t.acctSummary(step.info.local.cards, step.info.local.reviews)}</span></div>
            <div className="row between"><span className="caption">{t.acctYourAccount}</span><span className="tabular">{t.acctSummary(step.info.remote.cards, step.info.remote.reviews)}</span></div>
          </div>
          <button className="btn btn-primary" disabled={busy} onClick={() => void choose("combine")}>{t.acctCombine}</button>
          <p className="caption center" style={{ margin: "-8px 0 0" }}>{t.acctCombineSub}</p>
          <button className="btn btn-secondary" disabled={busy} onClick={() => void choose("account")}>{t.acctUseAccount}</button>
          <button className="btn btn-secondary" disabled={busy} onClick={() => void choose("device")}>{t.acctUseDevice}</button>
        </div>
      )}

      {step.id === "done" && (
        <div className="stack center" style={{ marginTop: 48, gap: 16, alignItems: "center" }}>
          <span className="accent"><Icon name="check" size={48} /></span>
          <h2 className="title" role="status">{t.acctDone}</h2>
          <button className="btn btn-primary" onClick={finish}>{t.continue}</button>
        </div>
      )}
    </main>
  );
}


function subscribeOnline(l: () => void) {
  window.addEventListener("online", l);
  window.addEventListener("offline", l);
  return () => {
    window.removeEventListener("online", l);
    window.removeEventListener("offline", l);
  };
}

/** Google's "G", drawn inline (no external image requests). */
function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true" style={{ verticalAlign: "-3px", marginRight: 6 }}>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}
