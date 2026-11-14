-- Lingua · accounts & sync schema (paste once into Supabase → SQL Editor → Run).
-- Per user: one row holding the progress state (schedule, goals, settings) and one row per
-- answer in user_reviews. Row-level security means each
-- signed-in person can only ever read or write their own row. Safe to run again.

create table if not exists public.user_state (
  user_id    uuid primary key default auth.uid() references auth.users (id) on delete cascade,
  db         jsonb not null,
  rev        bigint not null default 1,
  updated_at timestamptz not null default now(),
  device     text,
  constraint user_state_db_size check (pg_column_size(db) < 4000000)
);

alter table public.user_state enable row level security;

-- Supabase's default privileges give every role full access to new tables: take it all
-- back, then allow signed-in users only what the app needs (never deleting rows).
revoke all on public.user_state from anon, authenticated, public;
grant select, insert, update on public.user_state to authenticated;

drop policy if exists "read own state" on public.user_state;
drop policy if exists "insert own state" on public.user_state;
drop policy if exists "update own state" on public.user_state;
create policy "read own state" on public.user_state for select to authenticated using (user_id = (select auth.uid()));
create policy "insert own state" on public.user_state for insert to authenticated with check (user_id = (select auth.uid()));
create policy "update own state" on public.user_state for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
-- No delete policy: a progress row is never deleted while the account exists, so its rev
-- only ever increases (a reset uploads a new document instead). delete_me() below removes
-- the whole account, and the row with it.

-- Every answer a learner gives, one row each. The phone sends each answer once and keeps
-- only the last few weeks; the full history lives here. Insert-only for the learner: no
-- updates, no deletes (except "start over" and account deletion, via functions below).
create table if not exists public.user_reviews (
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  epoch   text not null default '',
  t       bigint not null,
  item    text not null,
  mode    text not null,
  r       jsonb not null,
  primary key (user_id, epoch, t, item, mode),
  constraint user_reviews_r_size check (pg_column_size(r) < 2000)
);

alter table public.user_reviews enable row level security;

revoke all on public.user_reviews from anon, authenticated, public;
grant select, insert on public.user_reviews to authenticated;

drop policy if exists "read own answers" on public.user_reviews;
drop policy if exists "add own answers" on public.user_reviews;
create policy "read own answers" on public.user_reviews for select to authenticated using (user_id = (select auth.uid()));
create policy "add own answers" on public.user_reviews for insert to authenticated with check (user_id = (select auth.uid()));

-- Short writing tasks graded by the grade-essay Edge Function (docs/team/52). Each learner
-- sees, adds and deletes only their own. The function writes here as the learner.
create table if not exists public.essays (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null default auth.uid() references auth.users (id) on delete cascade,
  lang       text not null,
  task_id    text not null,
  text       text not null check (char_length(text) <= 4000),
  result     jsonb not null,
  created_at timestamptz not null default now()
);

alter table public.essays enable row level security;

revoke all on public.essays from anon, authenticated, public;
grant select, insert, delete on public.essays to authenticated;

drop policy if exists "read own essays" on public.essays;
drop policy if exists "add own essays" on public.essays;
drop policy if exists "delete own essays" on public.essays;
create policy "read own essays" on public.essays for select to authenticated using (user_id = (select auth.uid()));
create policy "add own essays" on public.essays for insert to authenticated with check (user_id = (select auth.uid()));
create policy "delete own essays" on public.essays for delete to authenticated using (user_id = (select auth.uid()));

-- How many essays the caller graded in the last 7 days, and how many everyone graded this
-- month (counts only, no content), so the function can keep the owner's AI bill capped.
create or replace function public.essay_quota()
returns json
language sql
security definer
set search_path = ''
as $$
  select json_build_object(
    'week', (select count(*) from public.essays where user_id = auth.uid() and created_at > now() - interval '7 days'),
    'month', (select count(*) from public.essays where created_at >= date_trunc('month', now()))
  );
$$;

-- Optimistic write: succeeds only if nobody else wrote since `expected_rev`.
-- Returns the new rev, or -1 on conflict (the app then pulls, merges and retries).
-- SECURITY INVOKER, so the row-level security policies above still apply.
create or replace function public.push_state(expected_rev bigint, doc jsonb, p_device text default null)
returns bigint
language plpgsql
security invoker
set search_path = ''
as $$
declare
  uid uuid := auth.uid();
  new_rev bigint;
begin
  if uid is null then
    raise exception 'not signed in';
  end if;
  if expected_rev = 0 then
    insert into public.user_state (user_id, db, rev, device)
    values (uid, doc, 1, p_device)
    on conflict (user_id) do nothing
    returning rev into new_rev;
  else
    update public.user_state s
       set db = doc, rev = s.rev + 1, updated_at = now(), device = p_device
     where s.user_id = uid and s.rev = expected_rev
    returning s.rev into new_rev;
  end if;
  return coalesce(new_rev, -1);
end;
$$;

-- Older versions had delete_my_state(); deleting the row let rev restart at 1, which could
-- make a device skip a merge. Removed.
drop function if exists public.delete_my_state();

-- After "Reset everything" / importing a backup / "Use this device": remove my answers
-- from before (any other epoch), so they're really gone from the account.
create or replace function public.forget_other_answers(keep_epoch text)
returns void
language sql
security definer
set search_path = ''
as $$
  delete from public.user_reviews where user_id = auth.uid() and epoch <> keep_epoch;
$$;

-- Delete my whole account; my progress row goes with it (on delete cascade).
create or replace function public.delete_me()
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null then
    raise exception 'not signed in';
  end if;
  delete from auth.users where id = auth.uid();
end;
$$;

revoke all on function public.push_state(bigint, jsonb, text) from anon, public;
revoke all on function public.delete_me() from anon, public;
revoke all on function public.forget_other_answers(text) from anon, public;
revoke all on function public.essay_quota() from anon, public;
grant execute on function public.push_state(bigint, jsonb, text) to authenticated;
grant execute on function public.delete_me() to authenticated;
grant execute on function public.forget_other_answers(text) to authenticated;
grant execute on function public.essay_quota() to authenticated;
