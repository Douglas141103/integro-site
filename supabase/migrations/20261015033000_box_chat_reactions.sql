begin;
create table if not exists private.box_chat_reactions (
 message_id uuid not null references private.box_chat_messages(id) on delete cascade,
 identity_id bigint not null references private.box_chat_identities(id) on delete cascade,
 reaction text not null check(reaction in ('like','star','fireworks','happy')),
 created_at timestamptz not null default now(),
 primary key(message_id,identity_id,reaction)
);
alter table private.box_chat_reactions enable row level security;
revoke all on private.box_chat_reactions from public,anon,authenticated;

create or replace function public.box_chat(p_room uuid,p_student uuid default null,p_report uuid default null) returns jsonb
language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid();v_identity bigint;v_code text;v_messages jsonb;
begin
 if v_user is null then raise exception 'forbidden' using errcode='42501';end if;
 if not exists(select 1 from private.box_members m join private.box_rooms r on r.id=m.room_id where m.user_id=v_user and r.id=p_room and not r.closed and r.expires_at>now() and m.seen_at>now()-interval '30 seconds') then raise exception 'not_member' using errcode='42501';end if;
 v_identity:=private.box_chat_identity(v_user,p_student);
 select code into v_code from private.box_chat_identities where id=v_identity;
 delete from private.box_chat_messages where created_at<now()-interval '7 days';
 if p_report is not null then
  if not exists(select 1 from private.box_chat_messages where id=p_report and room_id=p_room and status='approved') then raise exception 'message_not_found';end if;
  insert into private.box_chat_reports(message_id,reporter_id) values(p_report,v_user) on conflict do nothing;
 end if;
 select coalesce(jsonb_agg(to_jsonb(t) order by t.approved_at,t.id),'[]'::jsonb) into v_messages from
 (select m.id,m.code,m.body,m.approved_at,
  coalesce((select jsonb_object_agg(c.reaction,c.total) from
   (select reaction,count(*) as total from private.box_chat_reactions where message_id=m.id group by reaction)c),'{}'::jsonb) as reactions,
  coalesce((select jsonb_agg(reaction order by reaction) from private.box_chat_reactions where message_id=m.id and identity_id=v_identity),'[]'::jsonb) as my_reactions
 from private.box_chat_messages m where m.room_id=p_room and m.status='approved' and m.created_at>now()-interval '7 days' order by m.approved_at desc,m.id desc limit 50)t;
 return jsonb_build_object('code',v_code,'messages',v_messages);
end $$;
revoke all on function public.box_chat(uuid,uuid,uuid) from public,anon;
grant execute on function public.box_chat(uuid,uuid,uuid) to authenticated;

create or replace function public.box_chat_react(p_room uuid,p_message uuid,p_reaction text,p_active boolean,p_student uuid default null) returns jsonb
language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid();v_identity bigint;
begin
 if v_user is null then raise exception 'forbidden' using errcode='42501';end if;
 if p_reaction is null or p_reaction not in ('like','star','fireworks','happy') or p_active is null then raise exception 'invalid_reaction' using errcode='22023';end if;
 if not exists(select 1 from private.box_members m join private.box_rooms r on r.id=m.room_id where m.user_id=v_user and r.id=p_room and not r.closed and r.expires_at>now() and m.seen_at>now()-interval '30 seconds') then raise exception 'not_member' using errcode='42501';end if;
 v_identity:=private.box_chat_identity(v_user,p_student);
 perform 1 from private.box_chat_messages where id=p_message and room_id=p_room and status='approved' and created_at>now()-interval '7 days' for update;
 if not found then raise exception 'message_not_found';end if;
 if p_active then
  insert into private.box_chat_reactions(message_id,identity_id,reaction) values(p_message,v_identity,p_reaction) on conflict do nothing;
 else
  delete from private.box_chat_reactions where message_id=p_message and identity_id=v_identity and reaction=p_reaction;
 end if;
 return jsonb_build_object('ok',true);
end $$;
revoke all on function public.box_chat_react(uuid,uuid,text,boolean,uuid) from public,anon;
grant execute on function public.box_chat_react(uuid,uuid,text,boolean,uuid) to authenticated;
notify pgrst,'reload schema';
commit;
