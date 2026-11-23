-- Linguina metrics — paste one query at a time into Supabase → SQL Editor → Run (save the ones
-- you like with "Save"). Two sources:
--   • user_reviews: every answer of every learner with an account (always there; learning data).
--   • app_events:   usage events, only from learners who said yes to "Share usage statistics".
-- Times are UTC. user_reviews.t is milliseconds since 1970.

-- ── 1. Active learners per day / week / month (from answers) ─────────────────────────────
select date_trunc('day', to_timestamp(t / 1000)) as day, count(distinct user_id) as learners
from public.user_reviews
where to_timestamp(t / 1000) > now() - interval '30 days'
group by 1 order by 1 desc;

select count(distinct user_id) filter (where to_timestamp(t / 1000) > now() - interval '1 day')   as dau,
       count(distinct user_id) filter (where to_timestamp(t / 1000) > now() - interval '7 days')  as wau,
       count(distinct user_id) filter (where to_timestamp(t / 1000) > now() - interval '30 days') as mau
from public.user_reviews;

-- ── 2. Retention: of those who started in a week, how many came back on day 1 / 7 / 30 ────
with days as (
  select user_id, date_trunc('day', to_timestamp(t / 1000))::date as d from public.user_reviews group by 1, 2
), first as (
  select user_id, min(d) as d0 from days group by 1
)
select date_trunc('week', f.d0)::date as cohort_week,
       count(*) as started,
       round(100.0 * count(*) filter (where exists (select 1 from days x where x.user_id = f.user_id and x.d = f.d0 + 1)) / count(*)) as "day1_%",
       round(100.0 * count(*) filter (where exists (select 1 from days x where x.user_id = f.user_id and x.d between f.d0 + 7 and f.d0 + 13)) / count(*)) as "week2_%",
       round(100.0 * count(*) filter (where exists (select 1 from days x where x.user_id = f.user_id and x.d between f.d0 + 28 and f.d0 + 41)) / count(*)) as "month2_%"
from first f group by 1 order by 1 desc;

-- ── 3. Most popular languages ─────────────────────────────────────────────────────────────
-- Learners with each course (from their saved progress)…
select course as lang, count(*) as learners
from public.user_state, jsonb_object_keys(db -> 'profile' -> 'courses') as course
group by 1 order by 2 desc;
-- …and active in the last 30 days, by the language of what they answered.
select split_part(item, '-', 1) as lang, count(distinct user_id) as active_learners, count(*) as answers
from public.user_reviews
where to_timestamp(t / 1000) > now() - interval '30 days'
group by 1 order by 2 desc;
-- Which language the app is used in (es / en) and which explains each course.
select db -> 'profile' ->> 'appLang' as app_lang, count(*) from public.user_state group by 1;

-- ── 4. Time spent (statistics on) ─────────────────────────────────────────────────────────
-- Minutes per learner per day in the app (all screens) and in lessons.
select date_trunc('day', t)::date as day,
       round(sum((props ->> 'seconds')::int) / 60.0 / count(distinct user_id), 1) as minutes_per_learner
from public.app_events where name = 'screen_time' and t > now() - interval '30 days'
group by 1 order by 1 desc;

-- Where the time goes: total minutes and share per screen.
select props ->> 'path' as screen,
       round(sum((props ->> 'seconds')::int) / 60.0) as minutes,
       round(100.0 * sum((props ->> 'seconds')::int) / sum(sum((props ->> 'seconds')::int)) over ()) as "share_%"
from public.app_events where name = 'screen_time' and t > now() - interval '30 days'
group by 1 order by 2 desc;

-- ── 5. Lessons: finished vs left, length, accuracy, per language ─────────────────────────
select props ->> 'lang' as lang,
       count(*) as lessons,
       round(100.0 * count(*) filter (where (props ->> 'completed')::boolean) / count(*)) as "finished_%",
       round(avg((props ->> 'seconds')::int) / 60.0, 1) as avg_minutes,
       round(100.0 * sum((props ->> 'correct')::int) / nullif(sum((props ->> 'graded')::int), 0)) as "accuracy_%"
from public.app_events where name = 'lesson_end' and t > now() - interval '30 days'
group by 1 order by 2 desc;
-- Where people leave a lesson (task number out of the lesson's tasks).
select (props ->> 'at')::int as left_at_task, count(*) from public.app_events
where name = 'lesson_end' and not (props ->> 'completed')::boolean group by 1 order by 1;

-- ── 6. Setup funnel: account → first answer → second day → a week later ──────────────────
with u as (
  select a.id, a.created_at,
         (select min(to_timestamp(t / 1000)) from public.user_reviews r where r.user_id = a.id) as first_answer,
         (select count(distinct date_trunc('day', to_timestamp(t / 1000))) from public.user_reviews r where r.user_id = a.id) as days
  from auth.users a
)
select count(*) as accounts,
       count(first_answer) as did_a_lesson,
       count(*) filter (where days >= 2) as came_back_another_day,
       count(*) filter (where days >= 5) as practised_5_days
from u;
-- How people start a course (level test, "I know my level", never studied) and where.
select props ->> 'lang' as lang, props ->> 'start' as start, props ->> 'cefr' as level, count(*)
from public.app_events where name = 'course_added' group by 1, 2, 3 order by 4 desc;

-- ── 7. Content that may be wrong or too hard: items most often missed (≥ 20 answers) ─────
select item, count(*) as answers,
       round(100.0 * count(*) filter (where r ->> 'verdict' = 'wrong') / count(*)) as "wrong_%",
       round(100.0 * count(*) filter (where r ->> 'source' = 'override') / count(*)) as "i_was_right_%"
from public.user_reviews
where coalesce((r ->> 'practice')::boolean, false) = false
group by 1 having count(*) >= 20
order by 3 desc limit 50;
-- Exercise types: accuracy and speed.
select mode, count(*) as answers,
       round(100.0 * count(*) filter (where r ->> 'verdict' <> 'wrong') / count(*)) as "right_%",
       round(avg((r ->> 'ms')::int) / 1000.0, 1) as avg_seconds
from public.user_reviews group by 1 order by 2 desc;

-- ── 8. Devices and audio ─────────────────────────────────────────────────────────────────
select platform, count(distinct user_id) as learners from public.app_events
where name = 'app_open' and t > now() - interval '30 days' group by 1 order by 2 desc;
select name, props, count(*) from public.app_events where name in ('audio_help', 'slow_audio') group by 1, 2 order by 3 desc;
