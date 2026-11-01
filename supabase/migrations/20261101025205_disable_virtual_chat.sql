-- Stop new bot messages, including moderation work reserved before this change.
select pg_advisory_xact_lock(hashtext('box-virtual-chat'));

create or replace function public.box_bot_chat(
 p_token text,p_action text,p_message uuid default null,
 p_status text default null,p_reason text default null
) returns jsonb
language sql security invoker set search_path='' as $$
 select jsonb_build_object('empty',true,'disabled',true);
$$;

revoke all on function public.box_bot_chat(text,text,uuid,text,text) from public,anon,authenticated;
grant execute on function public.box_bot_chat(text,text,uuid,text,text) to service_role;

update private.box_chat_messages
set status='blocked',reason='bot_chat_disabled'
where bot_id is not null and status='pending';
