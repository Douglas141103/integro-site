-- Powers start only on an egg chase; returning to safety closes the owner's
-- shared effect once, even if the explicit client close packet is lost.
begin;
do $migration$
declare source text; anchor text;
begin
 source:=pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure);
 if position('(z<=-1008 or (z<0 and p_state->>''flameChase''=''true''))' in source)=0
  or position('(z<=-1056 or (z<0 and p_state->>''rockChase''=''true''))' in source)=0 then
  raise exception 'power_cast_anchor_changed';
 end if;
 source:=replace(source,'(z<=-1008 or (z<0 and p_state->>''flameChase''=''true''))','(z<3 and p_state->>''flameChase''=''true'')');
 source:=replace(source,'(z<=-1056 or (z<0 and p_state->>''rockChase''=''true''))','(z<3 and p_state->>''rockChase''=''true'')');
 source:=replace(source,'''closed'',true,''nextAt'',extract(epoch from clock_timestamp())*1000+16000','''closed'',true,''nextAt'',extract(epoch from clock_timestamp())*1000');
 source:=replace(source,'''closed'',true,''nextAt'',extract(epoch from clock_timestamp())*1000+40000','''closed'',true,''nextAt'',extract(epoch from clock_timestamp())*1000');
 anchor:='  update private.box_members set state=clean,seen_at=now() where user_id=uid and room_id=r.id;';
 if position(anchor in source)=0 then raise exception 'room_sync_anchor_changed';end if;
 source:=replace(source,anchor,$patch$
  if r.game='egg' and z>=3 then
   foreach k in array array['flame','rock'] loop
    if r.world->k->>'owner'=m.slot::text and r.world->k->>'closed'='false' then
     update private.box_rooms set world=jsonb_set(world,array[k],world->k||jsonb_build_object(
      'closed',true,'nextAt',extract(epoch from clock_timestamp())*1000)),revision=revision+1
      where id=r.id returning * into r;
    end if;
   end loop;
  end if;
$patch$||anchor);
 execute source;
end $migration$;
notify pgrst,'reload schema';
commit;
