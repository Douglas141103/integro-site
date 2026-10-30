begin;
-- The newly installed network extension has never dispatched a request.
-- Recreate its empty installation under extensions before enabling the worker.
do $$begin
 if exists(select 1 from private.egg_bot_control where enabled)
  or exists(select 1 from net.http_request_queue)
  or exists(select 1 from net._http_response) then
  raise exception 'network_extension_already_in_use';
 end if;
end $$;
drop extension pg_net;
create extension pg_net with schema extensions;
commit;
