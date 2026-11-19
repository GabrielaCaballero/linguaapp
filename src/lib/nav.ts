// Full-screen flows (lesson, onboarding, placement) are kept alive by cacheComponents'
// <Activity>. Every visit gets a fresh nonce in the URL, and the page keys its state on
// the search params, so a second visit always starts a brand-new session.
let seq = 0;
const nonce = () => `${Date.now().toString(36)}${(seq++).toString(36)}`;

export function lessonHref(kind: string = "auto", unit?: number): string {
  return `/lesson?kind=${kind}${unit ? `&unit=${unit}` : ""}&n=${nonce()}`;
}
export function onboardingHref(): string {
  return `/onboarding?n=${nonce()}`;
}
/** Back from the sign-up step in setup: the step before it. */
export function setupBackHref(): string {
  return `/onboarding?back=1&n=${nonce()}`;
}
export function placementHref(lang: string): string {
  return `/placement?lang=${lang}&n=${nonce()}`;
}
/** "setup": the sign-up step in the middle of setup, right after the level step. */
export type AccountFrom = "welcome" | "settings" | "home" | "me" | "required" | "setup";
export function accountHref(from: AccountFrom = "settings"): string {
  return `/account?from=${from}&n=${nonce()}`;
}
