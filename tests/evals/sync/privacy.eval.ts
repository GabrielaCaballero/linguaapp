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
  it("Google sign-in uses PKCE and only returns to this app's own origin", () => {
    const src = read("src/lib/sync/client.ts");
    expect(src).toMatch(/flowType:\s*"pkce"/);
    expect(src).toMatch(/redirectTo:\s*`\$\{window\.location\.origin\}\/account\?from=\$\{from\}`/);
    expect(src).toMatch(/NEXT_PUBLIC_AUTH_GOOGLE === "1"/);
  });
  it("the Google client secret is never in the app", () => {
    for (const f of files) expect(read(f), f).not.toMatch(/GOOGLE_CLIENT_SECRET|client_secret|GOCSPX-/);
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
    // Progress rows are never deleted by learners; only their own essays can be (docs/team/52).
    expect(policies.filter((p) => p.includes("for delete")).every((p) => p.includes("public.essays"))).toBe(true);
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
    for (const f of ["push_state", "delete_me"]) expect(sql).toMatch(new RegExp(`revoke all on function public\\.${f}\\([^)]*\\) from anon`));
  });
  it("signed-in users get no DELETE on the table, and the progress row is never deleted by the app", () => {
    expect(sql).toMatch(/revoke all on public\.user_state from anon, authenticated, public/);
    expect(sql).not.toMatch(/grant[^;]*delete[^;]*on public\.user_state/);
    expect(sql).toMatch(/drop function if exists public\.delete_my_state/);
    expect(read("src/lib/sync/remote.ts")).not.toMatch(/delete_my_state/);
  });
  it("queries also filter by the signed-in user's id (defence in depth)", () => {
    const src = read("src/lib/sync/remote.ts");
    for (const q of src.match(/client\.from\("user_(state|reviews)"\)\.select[^;]*/g) ?? []) expect(q).toMatch(/\.eq\("user_id", (await me\(\)|uid)\)/);
    expect((src.match(/client\.from\("user_(state|reviews)"\)\.select/g) ?? []).length).toBe(4);
  });
  it("pages send a CSP that limits where data can be sent", () => {
    const cfg = read("next.config.ts");
    expect(cfg).toMatch(/connect-src 'self' \$\{SUPABASE\} https:\/\/api\.anthropic\.com/);
    expect(cfg).toMatch(/frame-ancestors 'none'/);
  });
  it("answers table: row-level security, read/insert own only, never update or delete", () => {
    expect(sql).toContain("alter table public.user_reviews enable row level security");
    expect(sql).toMatch(/revoke all on public\.user_reviews from anon, authenticated, public/);
    expect(sql).toMatch(/grant select, insert on public\.user_reviews to authenticated;/);
    const own = policies.filter((p) => p.includes("public.user_reviews"));
    expect(own.map((p) => (p.match(/for (\w+)/) ?? [])[1]).sort()).toEqual(["insert", "select"]);
    expect(sql).toMatch(/user_reviews \([\s\S]*references auth\.users \(id\) on delete cascade/);
  });
  it("forget_other_answers can't be called anonymously and only touches the caller", () => {
    expect(sql).toMatch(/revoke all on function public\.forget_other_answers\(text\) from anon/);
    expect(sql).toMatch(/delete from public\.user_reviews where user_id = auth\.uid\(\) and epoch <> keep_epoch/);
  });
  it("essays: RLS on, learners read/add/delete only their own, anon has nothing", () => {
    expect(sql).toContain("alter table public.essays enable row level security");
    expect(sql).toMatch(/revoke all on public\.essays from anon, authenticated, public/);
    const own = policies.filter((p) => p.includes("public.essays"));
    expect(own.map((p) => (p.match(/for (\w+)/) ?? [])[1]).sort()).toEqual(["delete", "insert", "select"]);
    expect(sql).toMatch(/revoke all on function public\.essay_quota\(\) from anon/);
  });
  it("the AI grader's key lives only in the Edge Function's secrets, never in the app", () => {
    const fn = read("supabase/functions/grade-essay/index.ts");
    expect(fn).toMatch(/Deno\.env\.get\("ANTHROPIC_API_KEY"\)/);
    expect(fn).not.toMatch(/sk-ant-/);
    expect(fn).toMatch(/const MODEL = "claude-haiku-5-5"/);
    expect(fn).toMatch(/\/auth\/v1\/user/); // every call is a signed-in learner
    for (const f of walk("src").filter((x) => /\.(ts|tsx)$/.test(x))) expect(read(f), f).not.toMatch(/ANTHROPIC_API_KEY/);
  });
  it("rows are deleted with the user (on delete cascade) and size-capped", () => {
    expect(sql).toContain("on delete cascade");
    expect(sql).toMatch(/check \(pg_column_size\(db\) < \d+\)/);
  });
});
