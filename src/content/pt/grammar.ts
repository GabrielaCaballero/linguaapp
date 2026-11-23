import type { GrammarPoint } from "../schema";
import { grammar1 } from "./grammar1";
import { grammar2 } from "./grammar2";
import { grammar3 } from "./grammar3";
import { grammar4 } from "./grammar4";
import { grammar5 } from "./grammar5";

// Grammar points (content v2.1): the rule as a textbook states it, how to work the form out,
// the table, examples, and the classic mistake. Items link to them through `grammar` / `ruleId`.
// Units 1–8, 9–16, 17–24, 25–30 (C1) and 31–36 (C2): one card per grammar pattern.
export const grammar: GrammarPoint[] = [...grammar1, ...grammar2, ...grammar3, ...grammar4, ...grammar5];
