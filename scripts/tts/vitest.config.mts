// Runs scripts/tts/collect.test.ts (TypeScript + the @ alias, like the evals) to list every text
// the app can speak. Not part of the eval suite.
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname, "../../src") } },
  test: { root: path.resolve(__dirname, "../.."), include: ["scripts/tts/collect.test.ts"], environment: "node" },
});
