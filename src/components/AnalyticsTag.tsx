"use client";
// Vercel Web Analytics: anonymous page-view counts (no cookies, no personal data). Query strings are
// dropped before sending, so lesson nonces or unit ids never leave the page with the visit.
import { Analytics } from "@vercel/analytics/next";

export function AnalyticsTag() {
  return <Analytics beforeSend={(e) => ({ ...e, url: e.url.split("?")[0] })} />;
}
