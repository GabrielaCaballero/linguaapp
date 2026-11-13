import type { NextConfig } from "next";

// The page may only talk to itself, the Supabase project and Anthropic (the AI tutor). The
// sign-in session and the AI key live in localStorage, so this limits where an injected
// script could send them. Scripts/styles aren't restricted here (Next inlines bootstrap code).
const SUPABASE = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const CSP = [
  `connect-src 'self' ${SUPABASE} https://api.anthropic.com`.replace(/\s+/g, " ").trim(),
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  // Lets a v2 build/dev server live next to a running v1 `next start` (which reads .next).
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: CSP },
        ],
      },
      {
        source: "/sw.js",
        headers: [
          { key: "Content-Type", value: "application/javascript; charset=utf-8" },
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self'" },
        ],
      },
    ];
  },
};

export default nextConfig;
