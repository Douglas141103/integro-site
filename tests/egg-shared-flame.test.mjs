import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {boxDatabase} from './box-db-fixture.mjs';
import {EggAdventure,NESTS} from '../integro-box/egg-src/egg-rules.js';
import {flameGaps} from '../integro-box/egg-src/egg-flame-rules.js';
const migration='20261103201639_egg_shared_flame.sql';
async function setup(){
 const f=await boxDatabase();
 await f.db.exec(await readFile(new URL('../supabase/migrations/20261013210000_box_egg_expansion.sql',import.meta.url),'utf8'));
 await f.db.exec(`do $$declare s text;begin s:=pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure);execute replace(s,'then -580 else -200','then -1060 else -200');end $$;`);
 await f.db.exec(await readFile(new URL('../supabase/migrations/'+migration,import.meta.url),'utf8'));
 const sync=async(n,room,flame=null,z=15,extra={})=>{await f.db.exec("update private.box_limits set last_sync='-infinity'");return f.call(n,'sync',{p_room:room,p_state:{x:0,y:0,z,yaw:0,zone:'world',flame,...extra}});};
 return {...f,sync};
}
test('one room clock opens for all members, late joiners and closes once for everyone',async()=>{
 const {db,call,sync}=await setup();try{
  const a=await call(1,'create',{p_game:'egg'});await call(2,'join',{p_code:a.code});
  const other=await call(3,'create',{p_game:'egg'});
  assert.equal((await sync(1,a.id,{id:'base',action:'cast'})).flame,null);
  const cast={id:'cast-one',action:'cast'};
  const opened=await sync(1,a.id,cast,-1020);assert.equal(opened.flame.closed,false);assert.equal(opened.flame.owner,1);
  const seen=await sync(2,a.id);assert.deepEqual(seen.flame,opened.flame);assert.equal(seen.revision,opened.revision);
  const retry=await sync(1,a.id,cast,-1020);assert.deepEqual(retry.flame,opened.flame);assert.equal(retry.revision,opened.revision);
  assert.equal((await sync(3,other.id)).flame,null);
  const late=await call(4,'join',{p_code:a.code});assert.deepEqual(late.flame,opened.flame);
  assert.equal((await sync(2,a.id,{id:'competing',action:'cast'},-1020)).flame.id,'cast-one');
  assert.equal((await sync(2,a.id,{id:'wrong-owner',action:'close',castId:'cast-one'})).flame.closed,false);
  assert.equal((await sync(3,a.id,{id:'outsider',action:'close',castId:'cast-one'})).error,'not_member');
  assert.equal((await sync(1,a.id,{id:'stale-close',action:'close',castId:'old-cast'})).flame.closed,false);
  const closed=await sync(1,a.id,{id:'caught',action:'close',castId:'cast-one'});assert.equal(closed.flame.closed,true);
  assert.equal(closed.revision,opened.revision+1);
  assert.equal((await sync(2,a.id)).flame.closed,true);assert.equal((await sync(4,a.id)).flame.closed,true);
  assert.equal((await sync(1,a.id,{id:'caught',action:'close',castId:'cast-one'})).revision,closed.revision);
  assert.equal((await sync(1,a.id,{id:'cooldown',action:'cast'},-1020)).flame.closed,true);
  await db.exec(`update private.box_rooms set world=jsonb_set(world,'{flame,nextAt}','0') where id='${a.id}';insert into private.box_egg_races(room_id,starts_at,world) values('${a.id}',now(),0);`);
  assert.equal((await sync(1,a.id,{id:'during-race',action:'cast'},-1020)).flame.closed,true);
 }finally{await db.close();}
});
test('players with different local clocks share gaps, collisions and late-join phase',()=>{
 let nowA=1000000.125,nowB=3000000.875;
 const a=new EggAdventure(null,{now:()=>nowA}),b=new EggAdventure(null,{now:()=>nowB});
 a.setFlameRoom(true);b.setFlameRoom(true);a.time=150;b.time=3;
 Object.assign(a.player,NESTS[21]);a.steal(0);assert.equal(a.flameRequest.action,'cast');assert.match(a.flameRequest.id,/^[a-zA-Z0-9-]{1,64}$/);assert.equal(a.flameGap(21,0).open,false);
 const f={id:a.flameRequest.id,owner:1,castAt:5000000,closed:false};
 a.applyRoomFlame(f,5000000);b.applyRoomFlame(f,5000000);
 nowA+=7000;nowB+=7000;for(let w=0;w<22;w++)for(let k=0;k<2;k++)assert.deepEqual(a.flameGap(w,k),b.flameGap(w,k));
 assert(a.flameGap(0,0).open);Object.assign(b.player,{x:0,y:0,z:flameGaps(0)[0]});assert(b.checkFlameFall());
 // Room time continues while a panel pauses simulation; joining mid-cycle does not restart the warning.
 const late=new EggAdventure(null,{now:()=>9000000});late.setFlameRoom(true);late.applyRoomFlame(f,5007000);assert.deepEqual(late.flameGap(0,0),a.flameGap(0,0));
 a.save.supplies.shield=1;a.catchEgg(21);assert.equal(a.flameRequest.action,'cast');a.catchEgg(21);assert.equal(a.flameRequest.action,'close');assert.equal(a.flameRequest.castId,f.id);
 for(const g of[a,b,late]){g.applyRoomFlame({...f,closed:true},5007000);assert.equal(g.flameGap(0,0).open,false);g.setFlameRoom(false);assert.equal(g.roomFlame,null);assert.equal(g.flameRequest,null);assert.equal(g.flameGap(0,0).open,false);}
});
test('longitudinal fissures leave safe sides and ends while the centre drops',()=>{
 for(const [x,z,safe]of[[2,-1017,true],[-2,-1017,true],[0,-1024,true],[0,-1017,false]]){
  const g=new EggAdventure();g.flame={castAt:0,nextAt:16};g.time=4;Object.assign(g.player,{x,z,y:0});assert.equal(g.checkFlameFall(),!safe);
 }
});
