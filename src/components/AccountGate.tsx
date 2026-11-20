"use client";
// Accounts are required to learn (owner, 2026-11-19): anyone can take the level test and set
// up a course without one, but before the first lesson they create an account or sign in, so
// progress is never kept only on one device (a phone's guest progress was stranded; Safari
// can also wipe a site's storage after days unused). Builds without accounts are unaffected.
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDB } from "@/lib/store";
import { useAccount } from "@/lib/sync/client";
import { accountHref } from "@/lib/nav";

/** Screens open without an account: setting up a course, signing in, the privacy page. */
const OPEN = ["/onboarding", "/account", "/privacy"];

/** True when this device has a course but nobody is signed in (accounts on). */
export function useMustSignIn(): boolean {
  const db = useDB();
  const acct = useAccount();
  return acct.configured && acct.ready && !acct.user && !!db?.profile.onboarded;
}

export function AccountGate() {
  const must = useMustSignIn();
  const path = usePathname();
  const router = useRouter();
  const open = OPEN.some((p) => path === p || path.startsWith(`${p}/`));
  useEffect(() => {
    if (must && !open) router.replace(accountHref("required"));
  }, [must, open, router]);
  return null;
}
