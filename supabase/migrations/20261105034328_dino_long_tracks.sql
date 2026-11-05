-- Keep existing and cached-client runs valid while new races use forty-second stages.
alter table private.dino_runs add column course_version smallint not null default 1 check (course_version in (1,2));

create function private.dino_grade_long(seed integer, finish_tick integer, jumps integer[])
returns jsonb language plpgsql immutable set search_path='' as $$
declare
  phase integer; item integer; center_tick integer; variant integer; half_width integer;
  delta integer; t integer; jump_index integer:=0; age integer; altitude integer;
  cleared integer:=0; amber integer:=0; hit integer; last_jump integer:=-52; val integer;
begin
  if finish_tick is null or finish_tick not between 1 and 14400 or cardinality(jumps)>277 then raise exception 'invalid_run'; end if;
  foreach val in array jumps loop
    if val is null or val not between 1 and finish_tick or val-last_jump<52 then raise exception 'invalid_jump'; end if;
    last_jump:=val;
  end loop;
  <<course>>
  for phase in 0..5 loop
    for item in 0..(9+phase*2) loop
      variant:=(seed+phase*17+item*7)%3;
      center_tick:=phase*2400+140+(item*2170)/(9+phase*2)+(seed+phase*31+item*13)%23;
      half_width:=6+variant;
      for delta in -half_width..half_width loop
        t:=center_tick+delta;
        if t>finish_tick then exit course;end if;
        while jump_index<cardinality(jumps) and jumps[jump_index+1]<=t loop jump_index:=jump_index+1;end loop;
        age:=t-coalesce(jumps[jump_index],-52);
        altitude:=case when age between 1 and 51 then (512*age*(52-age))/2704 else 0 end;
        if altitude<39+variant*8 then hit:=t;exit course;end if;
        if delta=0 and (item+phase)%2=0 and altitude>=116 then amber:=amber+1;end if;
      end loop;
      if center_tick+half_width<finish_tick then cleared:=cleared+1;end if;
    end loop;
  end loop;
  if coalesce(hit,14400)<>finish_tick then raise exception 'invalid_finish';end if;
  return jsonb_build_object('score',finish_tick/6+cleared*25+amber*50+(finish_tick/2400)*100,
    'stage',least(6,finish_tick/2400+1),'win',hit is null);
end $$;
revoke all on function private.dino_grade_long(integer,integer,integer[]) from public,anon,authenticated;

create or replace function public.box_dino(p_action text, p_run uuid default null, p_tick integer default null, p_jumps jsonb default '[]')
returns jsonb language plpgsql security definer set search_path='' as $$
declare
  player uuid:=auth.uid(); run private.dino_runs; grade jsonb; board jsonb; own jsonb; jumps integer[];
begin
  if player is null or not private.box_can_play(player) then raise exception 'box_access_denied' using errcode='42501';end if;
  if p_action in ('start','start_long') then
    insert into private.dino_runs as active(user_id,run_id,seed,started_at,course_version)
      values(player,gen_random_uuid(),floor(random()*99991)::integer,clock_timestamp(),case when p_action='start_long' then 2 else 1 end)
      on conflict(user_id) do update set run_id=excluded.run_id,seed=excluded.seed,started_at=excluded.started_at,course_version=excluded.course_version,result=null
      returning * into run;
    return jsonb_build_object('run',run.run_id,'seed',run.seed,'version',run.course_version);
  elsif p_action='finish' then
    select * into run from private.dino_runs where user_id=player and run_id=p_run for update;
    if not found then raise exception 'run_replaced';end if;
    if run.result is not null then return run.result;end if;
    if p_tick is null or p_tick not between 1 and (case when run.course_version=2 then 14400 else 7200 end) or p_tick>60*extract(epoch from (clock_timestamp()-run.started_at))+6 then raise exception 'invalid_time';end if;
    if jsonb_typeof(p_jumps) is distinct from 'array' then raise exception 'invalid_jump';end if;
    if jsonb_array_length(p_jumps)>(case when run.course_version=2 then 277 else 139 end) then raise exception 'invalid_jump';end if;
    select coalesce(array_agg(value::integer order by ordinal),'{}'::integer[]) into jumps
      from jsonb_array_elements_text(p_jumps) with ordinality as j(value,ordinal);
    if run.course_version=2 then grade:=private.dino_grade_long(run.seed,p_tick,jumps);
    else grade:=private.dino_grade(run.seed,p_tick,jumps);end if;
    update private.dino_runs set result=grade where user_id=player;
    insert into private.dino_records as best(user_id,score,stage,reached_at)
      values(player,(grade->>'score')::integer,(grade->>'stage')::integer,clock_timestamp())
      on conflict(user_id) do update set score=excluded.score,stage=excluded.stage,reached_at=excluded.reached_at
      where excluded.score>best.score;
    return grade;
  elsif p_action='ranking' then
    with leaders as (select * from private.dino_records order by score desc,reached_at,runner_number limit 10),
    listed as (select rank() over(order by l.score desc) as position,l.score,l.stage,l.reached_at,l.runner_number,
      l.user_id=player as mine,'Corredor '||l.runner_number as name from leaders l)
    select coalesce(jsonb_agg(to_jsonb(listed)-'runner_number'-'reached_at' order by score desc,reached_at,runner_number),'[]') into board from listed;
    select jsonb_build_object('position',1+(select count(*) from private.dino_records other where other.score>me.score),
      'name','Corredor '||me.runner_number,'score',me.score,'stage',me.stage) into own
      from private.dino_records me where me.user_id=player;
    return jsonb_build_object('leaders',board,'me',own);
  end if;
  raise exception 'invalid_action';
end $$;
revoke all on function public.box_dino(text,uuid,integer,jsonb) from public,anon,authenticated;
grant execute on function public.box_dino(text,uuid,integer,jsonb) to authenticated;

