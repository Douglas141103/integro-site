begin;
-- Explicit scope for the API's safe-update requirement: only the virtual roster.
do $$declare f text; anchor text;begin
 f:=pg_get_functiondef('private.egg_bot_sessions(timestamptz,timestamptz)'::regprocedure);
 anchor:='session_started_at)))) else 0 end;';
 if position(anchor in f)=0 then raise exception 'session_budget_anchor_changed';end if;
 f:=replace(f,anchor,'session_started_at)))) else 0 end where id between 1 and 70;');
 execute f;
end $$;
commit;
