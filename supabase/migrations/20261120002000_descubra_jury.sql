create table private.descubra_jury_usage (
 user_id uuid primary key references auth.users(id) on delete cascade,
 day date not null, calls integer not null, minute timestamptz not null, burst integer not null
);
alter table private.descubra_jury_usage enable row level security;
revoke all on private.descubra_jury_usage from public, anon, authenticated;
create function private.descubra_jury_reserve() returns boolean
language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid(); today date:=(now() at time zone 'UTC')::date; bucket timestamptz:=date_trunc('minute',now()); ok boolean;
begin
 if u is null then return false; end if;
 perform public.box_access();
 insert into private.descubra_jury_usage as q values(u,today,1,bucket,1)
 on conflict(user_id) do update set day=today,minute=bucket,
 calls=case when q.day=today then q.calls+1 else 1 end,
 burst=case when q.minute=bucket then q.burst+1 else 1 end
 where (q.day<>today or q.calls<240) and (q.minute<>bucket or q.burst<20)
 returning true into ok;
 return coalesce(ok,false);
end $$;
create function public.descubra_jury_reserve() returns boolean language sql security invoker set search_path='' as $$ select private.descubra_jury_reserve() $$;
revoke all on function private.descubra_jury_reserve(), public.descubra_jury_reserve() from public,anon;
grant execute on function private.descubra_jury_reserve(),public.descubra_jury_reserve() to authenticated;
-- Remove secret-role targeting from existing online rooms as well.
do $$
declare def text:=pg_get_functiondef('private.descubra_tick_legacy(jsonb,numeric)'::regprocedure);
 cheat text:=$rule$elsif random()<.55 and jsonb_array_length(s->'reports')>0 and i+1<>(s->>'traitor')::int then choice:=(s->>'traitor')::int;$rule$;
begin
 if position(cheat in def)=0 then raise exception 'unrecognized vote rule'; end if;
 execute replace(def,cheat,'');
end $$;
-- A public sensor can name the location. Its word order must not reveal the actor.
do $$
declare def text:=pg_get_functiondef('private.descubra_act_legacy(jsonb,integer,text,jsonb,numeric)'::regprocedure);
 old_text text:=$old$'Sensor: '||(p->>'name')||' ou '||(s#>>array['players',(decoy-1)::text,'name'])||' passou perto de '$old$;
begin
 if position(old_text in def)=0 then raise exception 'unrecognized sensor rule';end if;
 execute replace(def,old_text,'''Sensor de emergência acionado em ''');
end $$;
