"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { getDB, useDB } from "@/lib/store";
import { getEngine, isSyncConfigured, sendCode, verifyCode, type AuthError } from "@/lib/sync/client";
import { BadRemoteError, type Choice, type FirstLogin } from "@/lib/sync/engine";
import { onboardingHref } from "@/lib/nav";
import { BackHeader, Loading, useT } from "@/components/ui";
import { Icon } from "@/components/icons";

/** Sign in with an emailed 6-digit code, then settle where the progress comes from. */
export default function AccountPage() {
  return (
    <Suspense fallback={<Loading />}>
      <AccountRoute />
    </Suspense>
  );
}

function AccountRoute() {
  const sp = useSearchParams();
  return <SignIn key={sp.toString()} from={sp.get("from") === "welcome" ? "welcome" : "settings"} />;
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
    if (r) setErr(t.acctErr[r]);
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
      setErr(t.acctErr[r.error as AuthError]);
      return;
    }
    try {
      const first = await getEngine()!.beginLogin(r.user.id);
      setBusy(false);
      if (first.kind === "choose") setStep({ id: "choose", info: first });
      else setStep({ id: "done" });
    } catch (e) {
      setBusy(false);
      setErr(e instanceof BadRemoteError ? t.acctBadRemote : t.acctErr.network);
    }
  };

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
          <p className="muted" style={{ margin: 0 }}>{t.acctSignInSub}</p>
          <input className="input" type="email" inputMode="email" autoComplete="email" autoCapitalize="none" spellCheck={false} placeholder={t.acctEmailPlaceholder} aria-label={t.acctEmail} value={email} onChange={(e) => setEmail(e.target.value)} />
          {err && <p role="alert" className="label" style={{ color: "var(--miss)", margin: 0 }}>{err}</p>}
          <button type="submit" className="btn btn-primary" disabled={busy || !email.includes("@")}>{busy ? t.acctSending : t.acctSendCode}</button>
          <p className="caption" style={{ margin: 0 }}>{t.acctPrivacy}</p>
        </form>
      )}

      {step.id === "code" && (
        <form className="stack" style={{ marginTop: 8, gap: 16 }} onSubmit={(e) => { e.preventDefault(); void verify(); }}>
          <h2 className="title">{t.acctCodeTitle}</h2>
          <p className="muted" style={{ margin: 0 }}>{t.acctCodeSub(email)}</p>
          <input className="input big center tabular" inputMode="numeric" autoComplete="one-time-code" maxLength={10} placeholder="123456" aria-label={t.acctCode} value={code} onChange={(e) => setCode(e.target.value.replace(/[^\d ]/g, ""))} autoFocus />
          {err && <p role="alert" className="label" style={{ color: "var(--miss)", margin: 0 }}>{err}</p>}
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

