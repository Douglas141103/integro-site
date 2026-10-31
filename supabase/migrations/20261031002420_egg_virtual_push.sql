begin;
update private.egg_bots set name='Jogador '||lpad(id::text,2,'0') where id between 1 and 70;
alter table private.egg_bots add column push_queue jsonb not null default '[]',
 add column tick_pushes jsonb not null default '[]',add column push_visual jsonb;
alter table private.box_limits add column last_bot_push timestamptz,
 add column last_bot_request uuid;

create function public.box_egg_bot_push(p_room uuid,p_bot integer,p_request uuid) returns jsonb
language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid(); m private.box_members%rowtype; lim private.box_limits%rowtype;
 b private.egg_bots%rowtype; peer jsonb; s jsonb; t timestamptz:=clock_timestamp(); ms numeric;
 dx double precision; dz double precision; len double precision; travel double precision; event jsonb;
begin
 if u is null or not private.box_can_play(u) then raise exception 'box_access_denied' using errcode='42501';end if;
 if p_request is null or p_bot not between 1 and 70 then return jsonb_build_object('error','invalid_request');end if;
 select bm.* into m from private.box_members bm join private.box_rooms r on r.id=bm.room_id
  where bm.user_id=u and bm.room_id=p_room and bm.seen_at>t-interval '2 seconds'
   and r.game='egg' and not r.closed and r.expires_at>t;
 if m.user_id is null then return jsonb_build_object('error','not_member');end if;
 select * into lim from private.box_limits where user_id=u for update;
 if lim.last_bot_request=p_request then return jsonb_build_object('ok',true,'duplicate',true);end if;
 if lim.last_bot_push>t-interval '3 seconds' then return jsonb_build_object('error','cooldown');end if;
 select * into b from private.egg_bots where id=p_bot and room_id=p_room and is_online and session_until>t and seen_at>t-interval '45 seconds' for update;
 if b.id is null then return jsonb_build_object('error','target_unavailable');end if;
 select value into peer from jsonb_array_elements(private.egg_bot_peers(p_room)) where value->>'identity'='virtual-'||p_bot;
 if peer is null then return jsonb_build_object('error','target_unavailable');end if;
 s:=peer->'state';ms:=extract(epoch from t)*1000;
 if coalesce((b.push_visual->>'at')::numeric,0)>ms-1250 then return jsonb_build_object('error','protected');end if;
 if m.state->>'jetpack'='true' or s->>'jetpack'='true' or m.state->>'zone' is distinct from 'world'
  or s->>'zone' is distinct from 'world' or abs((m.state->>'y')::float-(s->>'y')::float)>=1.6 then return jsonb_build_object('error','out_of_range');end if;
 if b.push_visual is not null and exists(select 1 from jsonb_array_elements(b.push_queue)e where e->>'id'=b.push_visual->>'id') then
 travel:=3.75*(1-exp(-4*least(.55,greatest(0,(ms-(b.push_visual->>'at')::numeric)/1000))));
 s:=s||jsonb_build_object('x',greatest(-9,least(9,(s->>'x')::float+(b.push_visual->>'x')::float*travel)),
  'z',greatest(-1012,least(25,(s->>'z')::float+(b.push_visual->>'z')::float*travel)));
end if;
 dx:=(s->>'x')::float-(m.state->>'x')::float;dz:=(s->>'z')::float-(m.state->>'z')::float;len:=sqrt(dx*dx+dz*dz);
 if len is null or len>4.25 then return jsonb_build_object('error','out_of_range');end if;
 if len<.05 then dx:=-sin((m.state->>'yaw')::float);dz:=-cos((m.state->>'yaw')::float);len:=1;end if;
 if jsonb_array_length(b.push_queue)>=16 then return jsonb_build_object('error','busy');end if;
 event:=jsonb_build_object('id',p_request,'x',dx/len,'z',dz/len,'at',ms,'session',b.session_number);
 update private.egg_bots set push_queue=push_queue||jsonb_build_array(event),push_visual=event where id=b.id;
 update private.box_limits set last_bot_push=t,last_bot_request=p_request where user_id=u;
 return jsonb_build_object('ok',true,'push',event,'serverNow',ms,'slot',(peer->>'slot')::integer,'name',b.name);
end $$;
revoke all on function public.box_egg_bot_push(uuid,integer,uuid) from public,anon;
grant execute on function public.box_egg_bot_push(uuid,integer,uuid) to authenticated;

create function private.egg_bot_push_snapshot(p_now timestamptz) returns jsonb
language plpgsql set search_path='' as $$begin
 update private.egg_bots b set tick_pushes=coalesce((select jsonb_agg(e) from jsonb_array_elements(b.push_queue)e
  where b.is_online and (e->>'session')::integer=b.session_number and (e->>'at')::numeric>extract(epoch from p_now-interval '60 seconds')*1000),'[]'::jsonb)
  where b.id between 1 and 70;
 return (select jsonb_object_agg(id,tick_pushes) from private.egg_bots);
end $$;
revoke all on function private.egg_bot_push_snapshot(timestamptz) from public,anon,authenticated,service_role;

do $$declare f text; anchor text;begin
 f:=pg_get_functiondef('public.box_bot_tick(text,text,uuid,text,jsonb)'::regprocedure);
 anchor:='sessions jsonb;';if position(anchor in f)=0 then raise exception 'worker_sessions_missing';end if;
 f:=replace(f,anchor,anchor||' pushes jsonb;');
 f:=replace(f,'  v:=gen_random_uuid();','  pushes:=private.egg_bot_push_snapshot(t);'||chr(10)||'  v:=gen_random_uuid();');
 f:=replace(f,'''sessions'',sessions);','''sessions'',sessions,''pushes'',pushes);');
 anchor:='  -- Same daily IntGem rule';if position(anchor in f)=0 then raise exception 'worker_commit_anchor_missing';end if;
 f:=replace(f,anchor,$insert$
  -- Remove only events included in this committed simulation. Concurrent pushes
  -- stay queued, and retries consume the same events only with a valid lease.
  update private.egg_bots b set push_queue=coalesce((select jsonb_agg(e) from jsonb_array_elements(b.push_queue)e
   where (e->>'at')::numeric>extract(epoch from t-interval '60 seconds')*1000
    and not exists(select 1 from jsonb_array_elements(b.tick_pushes)a where a->>'id'=e->>'id')),'[]'::jsonb)
   where b.id between 1 and 70;
  -- Same daily IntGem rule$insert$);
 -- Avoid conflict with the existing PL/pgSQL b record.
 f:=replace(f,'update private.egg_bots b set push_queue','update private.egg_bots pushed set push_queue');
 f:=replace(f,'jsonb_array_elements(b.push_queue)e','jsonb_array_elements(pushed.push_queue)e');
 f:=replace(f,'jsonb_array_elements(b.tick_pushes)a','jsonb_array_elements(pushed.tick_pushes)a');
 f:=replace(f,'where b.id between 1 and 70;','where pushed.id between 1 and 70;');
 execute f;
 f:=pg_get_functiondef('private.egg_bot_peers(uuid)'::regprocedure);
 anchor:='''state'',pose||';if position(anchor in f)=0 then raise exception 'bot_peer_anchor_missing';end if;
 f:=replace(f,anchor,'''state'',pose||jsonb_build_object(''botPush'',case when (push_visual->>''at'')::numeric>extract(epoch from now()-interval ''16 seconds'')*1000 then push_visual||jsonb_build_object(''serverNow'',extract(epoch from now())*1000,''applied'',not exists(select 1 from jsonb_array_elements(push_queue)e where e->>''id''=push_visual->>''id'')) else null end)||');
 execute f;
end $$;
notify pgrst,'reload schema';
commit;
