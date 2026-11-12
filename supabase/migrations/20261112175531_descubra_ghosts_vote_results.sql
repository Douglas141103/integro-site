-- Ghosts use the same sequenced movement budget; only collisions are bypassed.
-- Dead players remain excluded from voting, tasks, reporting and sabotage.
do $migration$
declare f text;anchor text;
begin
 f:=pg_get_functiondef('private.descubra_act(jsonb,integer,text,jsonb,numeric)'::regprocedure);
 anchor:='if s->>''phase''<>''play'' or not (p->>''alive'')::boolean then return s;end if;';
 if position('a<>''walk''' in f)=0 then
  if position(anchor in f)=0 then raise exception 'ghost_action_anchor_missing';end if;
  f:=replace(f,anchor,'if s->>''phase''<>''play'' or (not (p->>''alive'')::boolean and a<>''walk'') then return s;end if;');execute f;
 end if;
 f:=pg_get_functiondef('private.descubra_step(jsonb,numeric,numeric,numeric)'::regprocedure);
 if position('2184' in f)=0 then
  anchor:='for i in 1..n loop if private.descubra_walkable(x+dx,y) then x:=x+dx;end if;if private.descubra_walkable(x,y+dy) then y:=y+dy;end if;end loop;';
  if position(anchor in f)=0 then raise exception 'ghost_step_anchor_missing';end if;
  f:=replace(f,anchor,'if p->>''alive''=''false'' then x:=greatest(16,least(2184,x+dx*n));y:=greatest(16,least(1684,y+dy*n));else '||anchor||' end if;');execute f;
 end if;
 f:=pg_get_functiondef('private.descubra_tick_legacy(jsonb,numeric)'::regprocedure);
 if position('lastVote' in f)=0 then
  anchor:='if winner>0 then s:=';
  if position(anchor in f)=0 then raise exception 'vote_result_anchor_missing';end if;
  f:=replace(f,anchor,'s:=s||jsonb_build_object(''lastVote'',jsonb_build_object(''round'',(s->>''round'')::integer,''counts'',votes,''out'',winner)); '||anchor);execute f;
 end if;
end $migration$;
