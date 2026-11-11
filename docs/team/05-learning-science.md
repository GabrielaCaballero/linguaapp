# 05 · Learning science — engagement, placement, goals, proof of learning

_Learning neuroscientist · 2026-11-12. Reads with 00-brief. Evidence labels: **A** = many studies/meta-analyses; **B** = solid but narrower or mostly lab; **C** = plausible, thin or industry-only. Wellbeing risk: **low / med / high**._

---

## 1. The principles that matter, ranked

Ranked by strength of evidence × size of effect on _long-term_ learning (not on time-in-app).

| # | Principle | Plain language | Evidence | What it means for Lingua |
|---|---|---|---|---|
| 1 | **Retrieval practice (testing effect)** | Pulling an answer out of memory strengthens it far more than re-reading it. | **A** — meta-analysis g ≈ 0.6–0.7 (Adesope et al. 2017); Roediger & Karpicke 2006 | Almost every card is a recall attempt, not a "look at this". v1 already does this. |
| 2 | **Spacing** | The same 10 minutes spread over days beats 10 minutes in one go. Optimal gap grows with how long you want to remember. | **A** — 839 comparisons (Cepeda et al. 2006) | SRS is the backbone. Keep it; later, fit intervals per user (Duolingo's half-life regression cut prediction error ~45%: Settles & Meeder 2016). |
| 3 | **Error feedback, immediately** (Dehaene pillar 3) | An error is information, not failure. Prediction error is literally the brain's teaching signal. | **A** (Schultz, Dayan & Montague 1997 for the neural basis; feedback meta-analyses) | Instant, specific, non-punishing correction. No hearts, no lives. |
| 4 | **Right difficulty (~80–85 % success)** | Too easy = nothing to learn; too hard = noise and discouragement. | **B** — Wilson et al. 2019 derive ~85 % for gradient-learning on binary tasks; consistent with Vygotsky's ZPD and Bjork's "desirable difficulties" | Engine targets ~80–85 % correct per session, adjusting in real time. |
| 5 | **Desirable difficulties: interleaving, generation, varied practice** | Mixing topics, producing (typing/saying) rather than recognising, changing contexts — feels harder, sticks better. | **A/B** — interleaving g ≈ 0.42 (Brunmair & Richter 2019); generation effect robust across 86 studies (Bertsch et al. 2007); Bjork & Bjork 2011 | Move cards up a ladder: recognise → assemble → type → say. Mix old and new and mix kinds. |
| 6 | **Sleep consolidation** (Dehaene pillar 4) | Sleep replays and stabilises the day's learning (esp. slow-wave sleep). | **A** (Rasch & Born 2013 review) | Due at 4 am (v1) is right. Evening "one-minute recap" is a cheap, evidence-aligned habit. |
| 7 | **Comprehensible input** | Lots of understandable reading/listening slightly above level builds vocabulary and grammar intuition. | **B** — extensive reading meta-analysis, small–medium effects, larger in adults (Jeon & Day 2016) | Add short graded stories/dialogues: this is also the best _honest_ variable reward (see §2). |
| 8 | **Attention** (Dehaene pillar 1) | Divided attention cuts encoding. Notifications fragment attention. | **A** for attention; **B** for notifications (Kushlev et al. 2016: alerts on → more inattention, lower wellbeing) | One task on screen; few, chosen notifications. |
| 9 | **Self-determination: autonomy, competence, relatedness** | People keep doing things that make them feel capable, in control, and connected. That is what makes games "pull". | **A** (Ryan, Rigby & Przybylski 2006) | Visible competence; real choices; light social. Avoid controlling rewards (Deci, Koestner & Ryan 1999: tangible, contingent rewards can undermine intrinsic motivation). |
| 10 | **Habit = cue + easy behaviour, repeated** | Automaticity takes ~2 months on average (18–254 days); one missed day doesn't hurt. | **B** (Lally et al. 2010); implementation intentions d ≈ 0.65 in 2006 meta-analysis, smaller (~0.15–0.35) after bias correction (Sheeran et al. 2024); Fogg's Tiny Habits (practitioner, **C**) | Tie practice to an existing anchor ("after coffee"); start tiny; never punish a single miss. |
| 11 | **Gamification** | Points/badges/stories help a little on average, depend heavily on design. | **B** — g ≈ 0.49 cognitive, 0.36 motivational, 0.25 behavioural (Sailer & Homner 2020); _narrative_ and _social_ moderators matter | Use story and progress, not points-for-points. |
| 12 | **Micro-learning** | Short bites help retention _when_ they include retrieval and spacing. | **C** — reviews positive but mixed (e.g. Moore et al. 2024) | 2–5-minute units are fine because they ride on #1 and #2, not because "short" is magic. |

Key insight for the owner: **the learning-science "active ingredients" (retrieval, spacing, right difficulty, feedback) happen to fit perfectly into 3-minute phone moments.** The craving for Instagram is a craving for a small, quick, uncertain, positive surprise. We can supply that with genuinely useful content.

---

## 2. Engagement without manipulation — design kit

**The ethical line.** Dopamine neurons fire on _reward-prediction error_ — getting more than expected (Schultz et al. 1997). Slot machines and infinite feeds exploit this with **random rewards decoupled from value**, **no stopping point**, and **loss threats**. We may borrow **surprise, quick feedback, visible progress and stopping-friendly loops**; we must not borrow **infinite scroll without an end, fake scarcity, guilt, or rewards that pay out for opening the app rather than for learning.** Test: _"Would the user endorse this mechanic if they saw exactly how it works?"_ If not, cut it.

| # | Mechanic | Spec | Evidence | Wellbeing risk |
|---|---|---|---|---|
| E1 | **Session length** | Default "Daily dose" = 5 min (range 2–20, user chooses). A session always _ends_ with a clear done screen. "One more round" is offered once, never auto-started. | A (spacing: short frequent > long rare) | low |
| E2 | **Difficulty targeting** | Rolling success target 80–85 % on graded items. If last ~10 items > 90 %: introduce new items / harder mode (type instead of tiles). If < 70 %: more reviews, easier modes, slower new-item rate. Show the user nothing about this except "Tuned to you". | B (Wilson 2019; ZPD; Bjork) | low |
| E3 | **Honest variable rewards** | Surprises that _are_ learning: a short story unlocks when you know its words; a "did you know" culture/etymology card; a song lyric line or idiom you can now understand; a new character in an ongoing story; "you just understood a sentence you couldn't last week" (replay an old miss). Timing may vary; value is always real. **No loot boxes, gems, or random currency.** | B (prediction error; Sailer & Homner: narrative moderates) | low–med (keep it tied to learning) |
| E4 | **Streaks done right** | Show a **weekly goal** ("4 of 5 days this week") as the primary ring. A day streak may exist as a secondary, opt-in counter with: 2 automatic **rest days/week** that don't break it, and "repair" by doing one extra session the next day. Never say "you'll lose…". Never send streak-at-risk notifications. Lally: one missed day doesn't harm habit formation — copy should say so. | B for habits/slack (Lally 2010; Duolingo cites UPenn/UCLA "slack" research for Streak Freeze); C for streaks' net value | daily streak: **med–high** (loss aversion, anxiety); weekly goal: low |
| E5 | **Relatedness / social** | Opt-in only: (a) a "study buddy" — share a weekly summary card with one friend; (b) friend sends a phrase-of-the-day; (c) cooperative weekly target with a friend (not a leaderboard). No public leagues in v2. | B (SDT relatedness; social interaction moderates gamification) | coop: low; competitive leagues: med |
| E6 | **"Snack feed" to replace a scroll** | A vertical, swipeable feed of micro-cards (1 card = 5–15 s): recall card, listen-and-pick, mini-story panel, idiom, "fix the error", culture card. **Finite: 10–15 cards, then a calm end card** ("Done for now. Back to your day — or one more stack?"). Cards are drawn from due SRS items + 1–2 surprise cards. This _is_ the Instagram format, with an end. Deep-link it from a home-screen shortcut/widget so it sits where the doom-scroll thumb goes. | B (ingredients are A; format C) | med if infinite → **must be finite** |
| E7 | **Notifications** | Max 1/day, at the time the user picked when setting their anchor ("after coffee, ~8:00"). Content = something useful ("3 words are ready to review — 2 min"). Silent after 2 ignored days; resume after next open. Weekly summary optional. No guilt copy, no mascot sadness. Duolingo optimises reminder wording with bandits (Yancey & Settles 2020) — we don't need that; we need restraint. | B (Kushlev 2016 on alert costs; Fogg: prompt at the right moment) | med; low with these caps |
| E8 | **End-of-session hook** | End with a _preview_, not a cliffhanger threat: "Tomorrow: the next scene of the story / 4 words reach 'solid'". Note: the Zeigarnik _memory_ effect doesn't replicate well (Ghibellini & Meier 2025 meta-analysis), but the urge to _resume_ unfinished things (Ovsiankina) does. So a gentle "to be continued" is legitimate; don't claim it boosts memory. | B (Ovsiankina); Zeigarnik C | low |
| E9 | **Progress visibility** | (a) "Words you can use" count (only items recalled after ≥ 1 sleep); (b) CEFR-style can-do ladder ("You can order in a café ✔"); (c) story map showing chapters unlocked; (d) start new users with endowed progress honestly earned from placement ("You already know 140 words"). Goal-gradient: people speed up near a visible finish (Kivetz et al. 2006) — so make weekly rings and chapter bars, not one far-off "B2" bar. | A/B (goal-gradient; endowed progress — Nunes & Drèze 2006; SDT competence) | low |
| E10 | **Celebration** | Small, immediate, varied micro-celebrations on correct recall of a hard item (haptic + short animation). Bigger celebration only for real milestones (chapter done, can-do reached). | C (Fogg) | low |
| E11 | **Fresh starts** | Mondays, 1st of month, after a break: offer "fresh start week" (re-plan, see §4). | B (Dai, Milkman & Riis 2014) | low |
| E12 | **Autonomy** | Let users choose: which mode today (Snack / Standard / Story / Speak), topics they care about (travel, work, family), how much. | A (SDT) | low |

**Explicitly not doing:** hearts/lives, gems/currency, leagues with demotion, streak-loss notifications, sad-mascot guilt, countdown timers on rewards, infinite feeds, "your friend passed you" pings.

**Wellbeing guardrail metric (for PM):** share of users whose daily time exceeds 3× their chosen dose for 5+ days → show a "you're doing great, rest helps memory" note. We want frequency, not marathon sessions.

---

## 3. Placement test

**Goal:** in 3–5 minutes, place the user to within roughly half a CEFR level (pre-A1, A1, A2, B1, B2+) and pre-mark known items, so day one feels neither babyish nor brutal.

### 3.1 Flow

1. **Self-assessment (30 s).** 3 can-do questions, e.g. "I can introduce myself / I can order food and ask for directions / I can follow a short conversation about my week" (Yes / Partly / No), plus "Have you studied it before? (Never / a bit / classes / lived there)". Self-assessment correlates only moderately with tested ability and varies a lot between learners (Ross 1998), so it only sets the **starting point**, never the result.
2. **"I'm a total beginner" button** at the top → skip the test, start at pre-A1. (Respect autonomy; nobody should fail 15 items to prove they know nothing.)
3. **Adaptive test (~15–25 items, 3–4 min).** Start one band above or at the self-assessed level (mid-level, e.g. A2, if unsure). Staircase rule: correct → harder band, wrong → easier band, step size shrinks after the first two reversals (classic 1-up/1-down → then 2-up/1-down to converge near ~70 % on the boundary). Stop when: 5 reversals, or 25 items, or estimated level stable for 6 items.
4. **Item mix per band** (all auto-scorable offline): vocabulary recognition (pick meaning), listen-and-pick, cloze (gap fill with 4 options), sentence ordering (tiles), and 1–2 short typed answers at A2+. Each item tagged with CEFR band + skill. Choose items via IRT-style difficulty estimates later; for v2 a hand-tagged item bank of ~120 items per language (Curriculum + Linguist) is enough. Duolingo's English Test shows the full machine-learning CAT version (Settles, LaFlair & Hagiwara 2020) — our target for later, not v2.
5. **"I don't know" button** on every item (counts as wrong, avoids guess noise, less stressful).
6. **Result screen (honest + encouraging):** "You're around **A2** — you can handle everyday situations. You already know ~X of our words. We'll start you at Unit N with a quick warm-up." Show where they're strong/weaker by skill (listening vs. reading). Allow "Start lower / start higher" override.

### 3.2 After placement — continuous calibration

- **Seed the SRS** with items from bands below the placed level as "probably known": schedule them as quick reviews over the first 2 weeks (cheap confirmation). Any miss → item becomes a normal learning card. This corrects placement errors automatically.
- **Rolling success rate** per skill drives difficulty (E2).
- **Level drift check:** if accuracy on new items stays > 92 % for 3 sessions → offer "Skip ahead? Take a 2-minute check." If < 65 % for 3 sessions → slow new items and offer revisiting the previous unit (framed as "consolidation week", not demotion).
- **Re-placement** every ~6 weeks is merged into the progress check (§5), not a separate exam.

---

## 4. Goal-setting science

**Specific, challenging goals beat "do your best"** (Locke & Latham 2002; meta-analytic effects d ≈ 0.4–0.8). But goals must be **attainable**, paired with **feedback**, and broken into **proximal sub-goals**. Vague: "learn Italian". Specific: "reach A2 by June" or "hold a 10-minute conversation with my family by summer".

### 4.1 Onboarding goal (after placement)

1. **Why** (pick 1–2): travel, family/partner, work, exam, move abroad, culture, brain training. Used for topic selection and copy (autonomy + meaning).
2. **What** (target): next CEFR level, or a can-do ("order and chat in a restaurant", "understand a TV episode with subtitles").
3. **By when** (optional) or **how much time/day** — user picks one, app computes the other.
4. **Anchor** (implementation intention): "When will you practise? After ____ (coffee / commute / lunch / brushing teeth)". Stored; used for the single notification time.

### 4.2 Translating ambition into a daily dose

Rough guided-learning hours per CEFR step for a Romance-language speaker (to be **validated by Curriculum/Linguist**; ballparks from common course-hour guidance): pre-A1→A1 ≈ 60–80 h, A1→A2 ≈ 100 h, A2→B1 ≈ 150–180 h, B1→B2 ≈ 200 h. German will be higher for Spanish speakers than Italian (~1.3–1.5×). Note: app time is only part of the needed hours; we should be honest that the app covers vocabulary/grammar/listening, and conversation comes from elsewhere.

Formula: `minutes_per_day = (hours_needed × 60 × app_share) / (days_available × expected_adherence)` with expected adherence = 0.7 (people miss ~30 % of days; plan for it rather than pretend they won't).

Show three ambition levels as a choice, never a single verdict:

| Level | Example (A1→A2 Italian, 4 months) | Copy |
|---|---|---|
| Relaxed | 10 min/day → A2 in ~7 months | "Steady and sustainable" |
| Regular | 20 min/day → A2 in ~4 months | "Hits your date" |
| Intense | 35 min/day → A2 in ~2.5 months | "Ambitious; best with classes" |

If the requested combo is unrealistic (> 45 min/day), say so kindly and suggest a later date or a smaller goal. Start new users **below** their chosen dose for week 1 (Fogg: make it easy first) — e.g. half dose, ramping up once the habit forms.

### 4.3 Re-planning kindly

- Track weekly, not daily. Each Monday: "Last week: 3 of 5 days. You're ~1 week behind your June goal."
- Offer three options, no default guilt: **(a)** keep date, +5 min/day; **(b)** keep dose, move date to X; **(c)** change goal. Never auto-increase dose.
- After a break of ≥ 7 days: "Welcome back" → a short warm-up session of mostly reviews at ~90 % success (rebuild competence), then re-plan. No count of "days missed" on screen.
- Due-review pile caps: if > 60 reviews are due after a break, only show 20/day and quietly re-spread the rest (avoid the "wall of debt" that makes people quit SRS apps).

---

## 5. Proving that users are learning

**Principle:** performance during practice is a poor guide to learning (Bjork: they diverge). Prove learning with **delayed** checks.

| Metric | How | Shown to user? |
|---|---|---|
| **Delayed retention rate** | % correct on first review of an item after ≥ 1 night and after ≥ 7 days. Target ~85–90 % (if much higher, intervals are too short; lower, too long). | Yes, as "Words you remember after a week: 87 %". |
| **Words you can use** | Items recalled correctly in a _production_ mode (type/speak) after ≥ 1 sleep. | Yes — headline number. |
| **Can-do checklist** | CEFR-style descriptors per unit; ticked when the user passes the unit's mini-task _and_ self-rates "I can". Self-rating alone is unreliable (Ross 1998); pairing it with performance is the point. | Yes — the motivating view. |
| **Calibration** | Confidence vs. accuracy (v1 already has it). Shows over/under-confidence. | Yes, as a gentle insight monthly. |
| **Mini progress check** every ~6 weeks / end of each unit | 3–4 min adaptive check using held-out items _never practised_ (transfer, not memorisation). Before/after comparison. | Yes — "6 weeks ago: A1.2 → now: A2.1". |
| **Skill balance** | Share of input/output/focus/fluency (v1's Nation strands). | Simple bar, optional. |
| Engagement health (internal) | Weekly active days, sessions/day, over-use guardrail, 30/90-day retention. | No. |

What **not** to show as "progress": XP, total minutes alone, streak length as the hero metric. Those measure time, not learning.

---

## 6. v1: what to keep, what to change

**Keep (well grounded):**
- Guess-first pretest then retrieval a few cards later (pretesting/generation effects).
- Confidence ratings feeding the scheduler; lucky guesses re-scheduled sooner. Great fluency-illusion antidote.
- In-session requeue of misses (cap 2) and +10 min relearning.
- Due at 4 am "after a night's sleep" (consolidation).
- Interleaving kinds within a module (`mixKinds`), mode ladder (tiles → type).
- Nation's four strands balancing (input-low → more listening).
- No hearts, no punishment.

**Change:**
1. **No difficulty targeting.** `buildQueue` uses a fixed `newPerDay`; add the 80–85 % controller (E2).
2. **Fixed SM-2 constants.** Fine for v2, but log every review (item, mode, gap, outcome) so we can later fit per-user/per-item intervals (HLR/FSRS-style). Use `MAX_REVIEWS` 40 → dynamic cap tied to the daily dose.
3. **Placement = one level question.** Replace with §3.
4. **Milestones with fixed dates** → user goal + dose planner (§4).
5. **No end-of-session preview, no story, no surprise content.** Add E3/E8; graded mini-stories are the biggest missing piece (comprehensible input, strand balance and honest reward at once).
6. **Progress screen measures accuracy, not retention.** Add delayed retention + "words you can use" + can-do.
7. **No habit scaffolding.** Add anchor/implementation intention + one smart notification + weekly goal.
8. **Mode ladder should include speaking** where available (generation + output), and the LLM option for free answers (owner request) fits the "say/type it your own way" top rung.

---

## 7. Inputs I need from others

- **01 Curriculum:** CEFR-tagged units with can-do statements per unit; ~120 placement items per language across bands and skills; graded mini-stories per unit (they double as surprise unlocks); hours-per-level estimates for es→it and en/es→de.
- **06 Linguist:** validate placement item difficulty bands and the CEFR descriptors; sanity-check hours-per-level for German vs Italian from Spanish/English.
- **02 PM:** confirm weekly-goal-first (no daily streak as hero), notification cap, the wellbeing guardrail metric, and which success metrics go on the Progress screen.
- **03 UX:** snack-feed format (finite stack + end card), goal/dose picker with 3 ambition levels, Monday re-plan screen, celebration language that is warm but not childish.
- **04 Engineering:** review-event logging schema; difficulty controller in the queue builder; staircase placement engine; local notification support in PWA vs. Capacitor (iOS PWA push limits); LLM grading as a scored item type that also feeds the success-rate controller.

---

## Sources

- Adesope, Trevisan & Sundararajan (2017), practice-testing meta-analysis — summarised in [PMC10409703](https://pmc.ncbi.nlm.nih.gov/articles/PMC10409703)
- Bertsch et al. (2007), generation effect meta-analysis — [PDF](https://mcdaniel97.github.io/Publications/Bertsch%20et%20al.%202007.pdf)
- Bjork & Bjork (2011), desirable difficulties — [PDF](https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/04/EBjork_RBjork_2011.pdf)
- Brunmair & Richter (2019), interleaving meta-analysis — [PDF](https://www.psychologie.uni-wuerzburg.de/fileadmin/06020400/2019/Brunmair_Richter_in_press__2019_META-ANALYSIS_OF_INTERLEAVED_LEARNING.pdf)
- Cepeda et al. (2006), distributed practice — [PubMed](https://pubmed.ncbi.nlm.nih.gov/16719566/)
- Dai, Milkman & Riis (2014), fresh-start effect — [PDF](https://faculty.wharton.upenn.edu/wp-content/uploads/2014/06/Dai_Fresh_Start_2014_Mgmt_Sci.pdf)
- Deci, Koestner & Ryan (1999), extrinsic rewards and intrinsic motivation, _Psychological Bulletin_ 125(6)
- Duolingo, streak research / Streak Freeze — [blog](https://blog.duolingo.com/duolingo-streak-research/)
- Fogg, Tiny Habits / B=MAP — [summary](https://www.thebehavioralscientist.com/?p=3058)
- Ghibellini & Meier (2025), Zeigarnik/Ovsiankina meta-analysis — [RePEc](https://ideas.repec.org/a/pal/palcom/v12y2025i1d10.1057_s41599-025-05000-w.html)
- Gollwitzer & Sheeran (2006); Sheeran, Listrom & Gollwitzer (2024) — [overview](https://www.thebehavioralscientist.com/glossary/implementation-intentions)
- Jeon & Day (2016), extensive reading meta-analysis — [ScholarSpace](https://scholarspace.manoa.hawaii.edu/items/b52a5591-ec04-4026-816f-434361a4e899)
- Kivetz, Urminsky & Zheng (2006), goal-gradient — [Columbia](https://business.columbia.edu/faculty/research/goal-gradient-hypothesis-resurrected-purchase-acceleration-illusionary-goal); Nunes & Drèze (2006), endowed progress
- Kushlev, Proulx & Dunn (2016), notifications — [CHI paper](https://www.interruptions.net/literature/Kushlev-CHI16.pdf)
- Lally et al. (2010), habit formation — [UCL news](https://www.ucl.ac.uk/news/2009/aug/how-long-does-it-take-form-habit); [critical reading](https://www.thebehavioralscientist.com/articles/how-long-to-form-a-habit)
- Locke & Latham (2002), goal-setting — [PDF](https://goal-lab.psych.umn.edu/orgpsych/2020/readings/5.%20Motivation/Locke%20&%20Latham%20(2002).pdf)
- Moore, Hwang & Moses (2024), mobile micro-learning review — [DOAJ](https://doaj.org/article/b6b940948b034e489c5bd28c73307897)
- Rasch & Born (2013), sleep and memory — [PMC](https://pmc.ncbi.nlm.nih.gov/articles/3768102)
- Ross (1998), self-assessment in L2 testing — [record](https://www.scilit.net/publications/7b2a66a61b285e56b4d1b66af1ce8770)
- Ryan, Rigby & Przybylski (2006), SDT and games — [PDF](https://www.rochester.edu/warner/lida/wp-content/uploads/2022/11/02bfe513dd59366750000000.pdf)
- Sailer & Homner (2020), gamification meta-analysis — [PDF](https://opus.bibliothek.uni-augsburg.de/opus4/files/109056/109056.pdf)
- Schultz, Dayan & Montague (1997), dopamine prediction error — [Dayan page](https://www.gatsby.ucl.ac.uk/~dayan/papers/sdm97.html)
- Settles & Meeder (2016), half-life regression — [ACL](https://preview.aclanthology.org/landing_page/P16-1174)
- Settles, LaFlair & Hagiwara (2020), ML-driven adaptive language assessment — [ACL Anthology](https://aclanthology.org/2020.tacl-1.17)
- Wilson et al. (2019), Eighty Five Percent Rule — [PMC6831579](https://pmc.ncbi.nlm.nih.gov/articles/PMC6831579)
- Yancey & Settles (2020), Duolingo notification bandit — [PDF](https://research.duolingo.com/papers/yancey.kdd20.pdf)
