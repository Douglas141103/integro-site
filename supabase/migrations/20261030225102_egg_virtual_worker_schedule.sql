begin;
create extension if not exists pg_net;
do $$declare token text;begin
 token:=encode(extensions.gen_random_bytes(32),'hex');
 perform vault.create_secret(token,'egg_virtual_worker','Private scheduler credential for virtual game characters');
 update private.egg_bot_control set token_hash=sha256(convert_to(token,'UTF8')) where id;
end $$;
create function private.egg_bots_wake() returns bigint
language plpgsql security definer set search_path='' as $$
declare token text; request bigint;
begin
 if not exists(select 1 from private.egg_bot_control where enabled) then return null;end if;
 select decrypted_secret into token from vault.decrypted_secrets where name='egg_virtual_worker';
 if token is null then return null;end if;
 select net.http_post(
  url:='https://kvdfnmwuxmpalsyuytwt.supabase.co/functions/v1/egg-bots',
  headers:=jsonb_build_object('Content-Type','application/json','x-bot-key',token),
  body:='{}'::jsonb,timeout_milliseconds:=20000) into request;
 return request;
end $$;
revoke all on function private.egg_bots_wake() from public,anon,authenticated,service_role;
select cron.schedule('egg-virtual-players','15 seconds','select private.egg_bots_wake()');
commit;
