import type { Item } from "./types";

// Answer checking that is strict about meaning but kind about typing on a phone.

export type Verdict =
  | { ok: true; almost: false }
  | { ok: true; almost: true; reason: "accent" | "typo" | "article" }
  | { ok: false };

const ARTICLES = /^(?:(?:il|lo|la|i|gli|le|un|uno|una|der|die|das|ein|eine|einen)\s+|l'|un')/;

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/ß/g, "ss")
    .replace(/[.,!?¿¡;:«»"]/g, "")
    .replace(/'\s+/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function stripAccents(s: string): string {
  return s
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function lev(a: string, b: string): number {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return dp[a.length][b.length];
}

export function check(input: string, item: Item): Verdict {
  const given = normalize(input);
  if (!given) return { ok: false };
  const targets = [item.answer, ...(item.alts ?? [])].map(normalize);

  if (targets.includes(given)) return { ok: true, almost: false };

  const bare = stripAccents(given);
  if (targets.some((t) => stripAccents(t) === bare)) return { ok: true, almost: true, reason: "accent" };

  if (targets.some((t) => ARTICLES.test(t) && t.replace(ARTICLES, "") === given))
    return { ok: true, almost: true, reason: "article" };

  for (const t of targets) {
    const d = lev(stripAccents(t), bare);
    const allowed = t.length >= 14 ? 2 : t.length >= 5 ? 1 : 0;
    if (d <= allowed) return { ok: true, almost: true, reason: "typo" };
  }
  return { ok: false };
}

export const ALMOST_TEXT = {
  accent: "Almost — watch the accent.",
  typo: "Almost — small typo.",
  article: "Almost — remember the article.",
} as const;
