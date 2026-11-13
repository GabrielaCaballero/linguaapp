-- Lingua · accounts & sync schema (paste once into Supabase → SQL Editor → Run).
-- One row per user holding their whole progress document. Row-level security means each
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
grant execute on function public.push_state(bigint, jsonb, text) to authenticated;
grant execute on function public.delete_me() to authenticated;
