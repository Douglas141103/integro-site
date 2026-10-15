begin;
create table if not exists private.box_chat_identities (
 id bigint generated always as identity primary key,
 user_id uuid not null references auth.users(id) on delete cascade,
 student_id uuid references public.students(id) on delete cascade,
 code text unique not null
);
create unique index if not exists box_chat_identity_owner on private.box_chat_identities(user_id,coalesce(student_id,'00000000-0000-0000-0000-000000000000'::uuid));
create sequence if not exists private.box_chat_code_seq start 10000;
create table if not exists private.box_chat_messages (
 id uuid primary key default gen_random_uuid(),request_id uuid not null,
 room_id uuid not null references private.box_rooms(id) on delete cascade,
 user_id uuid not null references auth.users(id) on delete cascade,
 identity_id bigint not null references private.box_chat_identities(id) on delete cascade,
 code text not null,body text not null check(char_length(body) between 1 and 280),
 status text not null default 'pending' check(status in ('pending','approved','blocked','error')),
 reason text,created_at timestamptz not null default now(),approved_at timestamptz,
 unique(user_id,request_id)
);
create index if not exists box_chat_room_time on private.box_chat_messages(room_id,approved_at);
create index if not exists box_chat_user_time on private.box_chat_messages(user_id,created_at);
create table if not exists private.box_chat_reports (
 message_id uuid references private.box_chat_messages(id) on delete cascade,
 reporter_id uuid references auth.users(id) on delete cascade,
 created_at timestamptz not null default now(),primary key(message_id,reporter_id)
);
alter table private.box_chat_identities enable row level security;
alter table private.box_chat_messages enable row level security;
alter table private.box_chat_reports enable row level security;
revoke all on private.box_chat_identities,private.box_chat_messages,private.box_chat_reports from public,anon,authenticated;
revoke all on sequence private.box_chat_code_seq from public,anon,authenticated;

create or replace function private.box_chat_identity(p_user uuid,p_student uuid) returns bigint
language plpgsql security definer set search_path='' as $$
declare v_name text; v_id bigint; v_initial text;
begin
 if not exists(select 1 from public.profiles where id=p_user and role::text in ('responsavel','integro_admin','diretor','coordenacao','professor')) then raise exception 'forbidden' using errcode='42501';end if;
 if p_student is not null then
  select s.full_name into v_name from public.students s join public.student_guardians g on g.student_id=s.id where s.id=p_student and g.guardian_profile_id=p_user;
  if not found then raise exception 'student_not_linked' using errcode='42501';end if;
 elsif exists(select 1 from public.student_guardians where guardian_profile_id=p_user) then raise exception 'select_student' using errcode='22023';
 else v_name:='Jogador';end if;
 select id into v_id from private.box_chat_identities where user_id=p_user and student_id is not distinct from p_student;
 if v_id is null then
  v_initial:=left(translate(upper(trim(v_name)),'ÁÀÂÃÄÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇ','AAAAAEEEEIIIIOOOOOUUUUC'),1);
  if v_initial !~ '^[A-Z]$' then v_initial:='J';end if;
  insert into private.box_chat_identities(user_id,student_id,code) values(p_user,p_student,v_initial||nextval('private.box_chat_code_seq')::text) on conflict do nothing returning id into v_id;
  if v_id is null then select id into v_id from private.box_chat_identities where user_id=p_user and student_id is not distinct from p_student;end if;
 end if;
 return v_id;
end $$;
revoke all on function private.box_chat_identity(uuid,uuid) from public,anon,authenticated;

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
 (select id,code,body,approved_at from private.box_chat_messages where room_id=p_room and status='approved' and created_at>now()-interval '7 days' order by approved_at desc,id desc limit 50)t;
 return jsonb_build_object('code',v_code,'messages',v_messages);
end $$;
revoke all on function public.box_chat(uuid,uuid,uuid) from public,anon;
grant execute on function public.box_chat(uuid,uuid,uuid) to authenticated;

-- Only the trusted Edge Function can reserve work or publish reviewed messages.
create or replace function public.box_chat_moderate(p_action text,p_user uuid,p_room uuid,p_student uuid default null,p_request uuid default null,p_body text default null,p_message uuid default null,p_status text default null,p_reason text default null) returns jsonb
language plpgsql security definer set search_path='' as $$
declare v_identity bigint;v_row private.box_chat_messages%rowtype;v_context jsonb;
begin
 perform pg_advisory_xact_lock(hashtext('box-chat:'||p_user::text));
 if p_action='finish' then
  select * into v_row from private.box_chat_messages where id=p_message and user_id=p_user and room_id=p_room for update;
  if not found then raise exception 'message_not_found';end if;
  if v_row.status<>'pending' then return jsonb_build_object('status',v_row.status);end if;
  if p_status is null or p_status not in ('approved','blocked','error') then raise exception 'invalid_status';end if;
  if p_status='approved' and (v_row.created_at<now()-interval '60 seconds' or not exists(select 1 from private.box_members m join private.box_rooms r on r.id=m.room_id where m.user_id=p_user and r.id=p_room and not r.closed and r.expires_at>now() and m.seen_at>now()-interval '30 seconds')) then p_status:='error';end if;
  update private.box_chat_messages set status=p_status,reason=left(p_reason,80),approved_at=case when p_status='approved' then now() end where id=v_row.id;
  return jsonb_build_object('status',p_status);
 end if;
 if p_action<>'reserve' or p_request is null or p_body is null or char_length(trim(p_body)) not between 1 and 280 then raise exception 'invalid_request';end if;
 if not exists(select 1 from private.box_members m join private.box_rooms r on r.id=m.room_id where m.user_id=p_user and r.id=p_room and not r.closed and r.expires_at>now() and m.seen_at>now()-interval '30 seconds') then raise exception 'not_member' using errcode='42501';end if;
 v_identity:=private.box_chat_identity(p_user,p_student);
 select * into v_row from private.box_chat_messages where user_id=p_user and request_id=p_request;
 if found then return jsonb_build_object('status',v_row.status,'duplicate',true);end if;
 if exists(select 1 from private.box_chat_messages where user_id=p_user and created_at>now()-interval '3 seconds') or (select count(*) from private.box_chat_messages where user_id=p_user and created_at>now()-interval '1 minute')>=10 then return jsonb_build_object('error','rate_limit');end if;
 insert into private.box_chat_messages(request_id,room_id,user_id,identity_id,code,body) select p_request,p_room,p_user,v_identity,code,trim(p_body) from private.box_chat_identities where id=v_identity returning * into v_row;
 select coalesce(jsonb_agg(to_jsonb(t) order by t.approved_at),'[]'::jsonb) into v_context from (select code,body,approved_at from private.box_chat_messages where room_id=p_room and status='approved' and created_at>now()-interval '10 minutes' order by approved_at desc limit 6)t;
 return jsonb_build_object('id',v_row.id,'body',v_row.body,'code',v_row.code,'context',v_context,'status','pending');
end $$;
revoke all on function public.box_chat_moderate(text,uuid,uuid,uuid,uuid,text,uuid,text,text) from public,anon,authenticated;
grant execute on function public.box_chat_moderate(text,uuid,uuid,uuid,uuid,text,uuid,text,text) to service_role;
-- Moderation console: admin-wide, directors only for students in their school.
create or replace function public.box_chat_review(p_hide uuid default null) returns jsonb
language plpgsql security definer set search_path='' as $$
declare v_role text;v_school uuid;v_rows jsonb;
begin
 select role::text,school_id into v_role,v_school from public.profiles where id=auth.uid();
 if v_role is null or v_role not in ('integro_admin','diretor') or (v_role='diretor' and v_school is null) then raise exception 'forbidden' using errcode='42501';end if;
 if p_hide is not null then
  update private.box_chat_messages m set status='blocked',reason='human_review' from private.box_chat_identities i left join public.students s on s.id=i.student_id where m.id=p_hide and i.id=m.identity_id and (v_role='integro_admin' or s.school_id=v_school);
  if not found then raise exception 'forbidden' using errcode='42501';end if;
 end if;
 delete from private.box_chat_messages where created_at<now()-interval '7 days';
 select coalesce(jsonb_agg(to_jsonb(t) order by t.created_at desc),'[]'::jsonb) into v_rows from
 (select m.id,m.code,m.body,m.status,m.reason,m.created_at,s.full_name as student_name,
 (select count(*) from private.box_chat_reports r where r.message_id=m.id) as reports
 from private.box_chat_messages m join private.box_chat_identities i on i.id=m.identity_id left join public.students s on s.id=i.student_id
 where m.created_at>now()-interval '7 days' and (v_role='integro_admin' or s.school_id=v_school)
 order by m.created_at desc limit 100)t;
 return jsonb_build_object('messages',v_rows);
end $$;
revoke all on function public.box_chat_review(uuid) from public,anon;
grant execute on function public.box_chat_review(uuid) to authenticated;
notify pgrst,'reload schema';
commit;
