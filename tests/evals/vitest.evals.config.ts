// Vitest config for the QA eval suite (tests/evals/**). Kept separate from the unit suite so
// `npm test` stays the engineers' fast loop and evals can fail without blocking them.
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname, "../../src") } },
  test: {
    root: path.resolve(__dirname, "../.."),
    include: ["tests/evals/**/*.eval.ts"],
    exclude: ["**/node_modules/**", "tests/evals/e2e/**"],
    environment: "node",
    testTimeout: 60_000,
  },
});
