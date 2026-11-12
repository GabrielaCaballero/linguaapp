// E2E/CUJ + UX evals. Production build in its own dist dir (.next-qa) on port 3500 so the
// service worker registers and nothing touches the phone server's .next on port 3200.
import { defineConfig, devices } from "@playwright/test";

const PORT = 3500;
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
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: `NEXT_DIST_DIR=.next-qa npx next build && NEXT_DIST_DIR=.next-qa npx next start -p ${PORT}`,
    cwd: "../../..",
    port: PORT,
    reuseExistingServer: true,
    timeout: 300_000,
  },
});
