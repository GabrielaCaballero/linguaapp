// E2E/CUJ + UX evals. Production build in its own dist dir (.next-qa) on port 3500 so the
// service worker registers and nothing touches the phone server's .next on port 3200.
import { defineConfig, devices } from "@playwright/test";

// Overridable so two checkouts (e.g. parallel sessions) can run evals at the same time.
const PORT = Number(process.env.EVAL_PORT ?? 3500);
const SYNC_PORT = Number(process.env.EVAL_SYNC_PORT ?? 3510);
const SYNC_URL = "https://lingua-test.supabase.co";
export default defineConfig({
  testDir: __dirname,
  testMatch: /.*\.spec\.ts$/,
  outputDir: "../.results/e2e-artifacts",
  timeout: 180_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  workers: 2,
  retries: 0,
  reporter: [["list"], ["json", { outputFile: "../.results/e2e.json" }]],
  use: {
    ...devices["Pixel 7"],
    browserName: "chromium",
    viewport: { width: 390, height: 844 },
    baseURL: `http://localhost:${PORT}`,
    serviceWorkers: "block",
    actionTimeout: 10_000,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: [
    {
      command: `NEXT_DIST_DIR=.next-qa npx next build && NEXT_DIST_DIR=.next-qa npx next start -p ${PORT}`,
      cwd: "../../..",
      port: PORT,
      reuseExistingServer: true,
      timeout: 300_000,
    },
    {
      // Same app built with a (fake) Supabase configured, for account.spec.ts. Built after the
      // first so the two builds never race on tsconfig.json.
      command: `until curl -sf http://localhost:${PORT}/ >/dev/null; do sleep 2; done; NEXT_DIST_DIR=.next-qa-sync NEXT_PUBLIC_SUPABASE_URL=${SYNC_URL} NEXT_PUBLIC_SUPABASE_ANON_KEY=test-anon-key NEXT_PUBLIC_AUTH_GOOGLE=1 npx next build && NEXT_DIST_DIR=.next-qa-sync NEXT_PUBLIC_SUPABASE_URL=${SYNC_URL} NEXT_PUBLIC_SUPABASE_ANON_KEY=test-anon-key npx next start -p ${SYNC_PORT}`,
      cwd: "../../..",
      port: SYNC_PORT,
      reuseExistingServer: true,
      timeout: 600_000,
    },
  ],
});
