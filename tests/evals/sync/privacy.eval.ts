// Category: sync — privacy & access control. P0 class: "LLM key leaves the device".
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { createEngine } from "@/lib/sync/engine";
import { memoryRemote } from "@/lib/sync/remote";
import { toPayload } from "@/lib/sync/merge";
import { KEYS, memoryAdapter } from "@/lib/storage-adapter";
import { learner, NOW } from "./fixtures";

const ROOT = path.resolve(__dirname, "../../..");
const read = (p: string) => fs.readFileSync(path.join(ROOT, p), "utf8");
function walk(dir: string): string[] {
  return fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
}
const KEY = "sk-ant-api03-SECRET-test-key-000000";

describe("privacy · the AI-tutor key never leaves the device", () => {
  it("the uploaded document never contains the key, even when storage holds it", async () => {
    const server = memoryRemote();
    const db = learner({ n: 8 });
    const storage = memoryAdapter({ [KEYS.v2]: JSON.stringify(db), [KEYS.llm]: JSON.stringify({ provider: "anthropic", apiKey: KEY }), [KEYS.llmCache]: "{}" });
    const engine = createEngine({ storage, remote: server.remote, getDB: () => db, applyDB: () => {}, legacy: new Map(), now: () => NOW });
    await engine.beginLogin("u1");
    const sent = JSON.stringify(server.row);
    expect(sent).not.toContain(KEY);
    expect(sent).not.toContain("sk-ant-");
    expect(sent).not.toContain("lingua:llm");
    expect(sent).not.toMatch(/apiKey/i);
  });
  it("toPayload has exactly the DB fields, nothing else", () => {
    expect(Object.keys(toPayload(learner())).sort()).toEqual(["cards", "custom", "events", "profile", "reviews", "sessions", "version"]);
  });
  it("sync code never reads the tutor key", () => {
    for (const f of walk("src/lib/sync").filter((f) => f.endsWith(".ts") && !f.endsWith("client.ts"))) expect(read(f)).not.toMatch(/KEYS\.llm|lingua:llm|apiKey/);
  });
  it("sign-out only forgets the key when asked (client.ts)", () => {
    const src = read("src/lib/sync/client.ts");
    expect(src).toMatch(/if \(opts\.forgetKey\)\s*\{\s*saveConfig\(null\)/);
  });
});

describe("privacy · no server secrets in the app", () => {
  const files = walk("src").filter((f) => /\.(ts|tsx)$/.test(f));
  it("no service-role / secret key names anywhere in src/", () => {
    for (const f of files) expect(read(f), f).not.toMatch(/service_role|SUPABASE_SERVICE|sb_secret_|SUPABASE_SECRET/);
  });
  it("only NEXT_PUBLIC_SUPABASE_URL and _ANON_KEY are read from env", () => {
    const envs = new Set(files.flatMap((f) => [...read(f).matchAll(/process\.env\.([A-Z_]+)/g)].map((m) => m[1])).filter((n) => n.includes("SUPABASE")));
    expect([...envs].sort()).toEqual(["NEXT_PUBLIC_SUPABASE_ANON_KEY", "NEXT_PUBLIC_SUPABASE_URL"]);
  });
  it(".env files are git-ignored, .env.example is not and has no values", () => {
    const gi = read(".gitignore");
    expect(gi).toMatch(/^\.env\*$/m);
    expect(gi).toMatch(/^!\.env\.example$/m);
    for (const line of read(".env.example").split("\n").filter((l) => /^[A-Z_]+=/.test(l))) expect(line).toMatch(/=$/);
  });
  it("sign-up is never possible from the app (shouldCreateUser: false)", () => {
    expect(read("src/lib/sync/client.ts")).toMatch(/shouldCreateUser:\s*false/);
  });
  it("the auth session uses the storage adapter, not cookies", () => {
    const src = read("src/lib/sync/client.ts");
    expect(src).toMatch(/storageKey:\s*KEYS\.auth/);
    expect(src).not.toMatch(/@supabase\/ssr|cookies\(/);
  });
});

describe("privacy · database access control (supabase/schema.sql)", () => {
  const sql = read("supabase/schema.sql").toLowerCase();
  const policies = [...sql.matchAll(/create policy[^;]+;/g)].map((m) => m[0]);
  it("row-level security is enabled", () => expect(sql).toContain("alter table public.user_state enable row level security"));
  it("anon gets nothing", () => expect(sql).toMatch(/revoke all on public\.user_state from anon/));
  it("there are select, insert and update policies and no delete policy", () => {
    expect(policies.some((p) => p.includes("for select"))).toBe(true);
    expect(policies.some((p) => p.includes("for insert"))).toBe(true);
    expect(policies.some((p) => p.includes("for update"))).toBe(true);
    expect(policies.some((p) => p.includes("for delete"))).toBe(false);
  });
  it("every policy is scoped to auth.uid() and to authenticated users", () => {
    for (const p of policies) {
      expect(p).toContain("auth.uid()");
      expect(p).toContain("to authenticated");
    }
  });
  it("push_state runs as the caller (RLS applies)", () => expect(sql).toMatch(/function public\.push_state[\s\S]*?security invoker/));
  it("definer functions only touch the caller's own row / user", () => {
    for (const m of sql.matchAll(/create or replace function public\.(\w+)[\s\S]*?\$\$([\s\S]*?)\$\$/g)) {
      if (!/security definer/.test(m[0])) continue;
      expect(m[2], m[1]).toMatch(/auth\.uid\(\)/);
      expect(m[0], m[1]).toMatch(/set search_path = ''/);
    }
  });
  it("functions can't be called anonymously", () => {
    for (const f of ["push_state", "delete_my_state", "delete_me"]) expect(sql).toMatch(new RegExp(`revoke all on function public\\.${f}\\([^)]*\\) from anon`));
  });
  it("rows are deleted with the user (on delete cascade) and size-capped", () => {
    expect(sql).toContain("on delete cascade");
    expect(sql).toMatch(/check \(pg_column_size\(db\) < \d+\)/);
  });
});
