import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {EggAdventure,WORLDS,NESTS,PLAYER_RADIUS,TRACK_HALF_WIDTH,cleanSave} from '../integro-box/egg-src/egg-rules.js';
import {ROCK,rockSites,mountainState} from '../integro-box/egg-src/egg-rock-rules.js';
import {intgemDatabase} from './intgem-db-fixture.mjs';

test('track 23 preserves earlier eggs, and its power grows from pebble to mountain everywhere',()=>{
 assert.equal(WORLDS.length,24);assert.equal(WORLDS[21].name,'Pedras Flamejantes');assert.equal(WORLDS[22].kind,'stoneGiant');
 const old=cleanSave({version:4,creatures:[{world:21,uid:'dragon',rarity:'rare',mutation:'gold'}],eggs:[{world:22,rarity:'epic',mutation:'normal',remaining:120}],seen:Array(22).fill(true)});
 assert.equal(old.creatures[0].world,21);assert.equal(old.eggs[0].world,22);assert.equal(old.seen[22],false);
 const g=new EggAdventure();Object.assign(g.player,NESTS[22]);assert(g.steal(0));assert.equal(g.rock.castAt,0);
 for(let w=0;w<23;w++)for(let k=0;k<2;k++){
  let h=0;for(const time of [1,5,10,16,25,30]){g.time=time;const s=g.mountain(w,k);assert(s.h>=h);h=s.h;}
  assert.equal(h,ROCK.height);const site=rockSites(w)[k];assert(Math.abs(site.x)+ROCK.radius<TRACK_HALF_WIDTH);
  // Opposite flank remains free even at the full radius plus the player's body.
  assert(Math.abs(-Math.sign(site.x)*3-site.x)>ROCK.radius+PLAYER_RADIUS);
 }
 g.time=39;assert.equal(g.mountain(22,0).visible,false);g.time=40;g.updateRock();assert.equal(g.rock.castAt,40);
});
test('growing mountains block sprint tunnelling, allow side detours, and never catch flight or base',()=>{
 for(let w=0;w<23;w++){
  const g=new EggAdventure();g.rock={castAt:0,nextAt:40};g.time=25;
  const site=rockSites(w)[0];Object.assign(g.player,{x:site.x,z:site.z+3,y:0});g.movePlayer(0,-5);
  assert(g.player.z>site.z+ROCK.radius,'sprint must not pass through mountain '+w);
  Object.assign(g.player,{x:3,z:site.z+3,y:0});g.movePlayer(0,-5);assert(Math.abs(g.player.z-(site.z-2))<1e-6,'free flank '+w);
  Object.assign(g.player,{...site,y:0});g.movePlayer(0,0);assert(Math.hypot(g.player.x-site.x,g.player.z-site.z)>=ROCK.radius+PLAYER_RADIUS-.001);
 }
 const g=new EggAdventure();g.rock={castAt:0,nextAt:40};g.time=25;const site=rockSites(22)[0];
 for(const mode of ['flight','race']){g.jetFlight=mode==='flight'?{}:null;g.raceMode=mode==='race';Object.assign(g.player,{...site,y:0});g.movePlayer(0,0);assert.equal(g.player.x,site.x);assert.equal(g.player.z,site.z);}
 g.jetFlight=null;g.raceMode=false;Object.assign(g.player,{x:0,z:15,y:0});g.movePlayer(0,0);assert.equal(g.player.z,15);
 const small=mountainState(1,0,0);assert(small.h<.4);assert(mountainState(25,0,0).h>5);
});
test('shared mountains use server time for different clocks, late joins, pause, and leaving rooms',()=>{
 let nowA=1000,nowB=9000;
 const a=new EggAdventure(null,{now:()=>nowA}),b=new EggAdventure(null,{now:()=>nowB});a.setFlameRoom(true);b.setFlameRoom(true);
 Object.assign(a.player,NESTS[22]);a.steal(0);assert.equal(a.rockRequest.action,'cast');assert.equal(a.mountain(0,0).visible,false);
 const event={id:a.rockRequest.id,castAt:5000000,owner:1,closed:false};a.applyRoomRock(event,5000000);b.applyRoomRock(event,5000000);assert.equal(a.rockRequest,null);
 nowA+=15000;nowB+=15000;assert.deepEqual(a.mountain(0,0),b.mountain(0,0));
 const late=new EggAdventure(null,{now:()=>500});late.setFlameRoom(true);late.applyRoomRock(event,5015000);assert.deepEqual(late.mountain(22,1),a.mountain(22,1));
 for(const g of [a,b,late]){g.setFlameRoom(false);assert.equal(g.mountain(0,0).visible,false);assert.equal(g.rockRequest,null);}
});
test('server stores track 23, shares one mountain cast per cycle and isolates rooms',async()=>{
 const {db,run,call}=await intgemDatabase();try{
  for(const file of ['20261020233803_egg_room_traps.sql','20261020235725_egg_jetpack.sql','20261021001638_egg_welcome_gift.sql','20261021014434_egg_income_tax_luxury.sql','20261023004052_egg_winter_2026.sql','20261103195438_egg_flaming_stones.sql','20261103201639_egg_shared_flame.sql','20261103204608_egg_grande_pedregulho.sql'])await db.exec(await readFile(new URL('../supabase/migrations/'+file,import.meta.url),'utf8'));
  assert.equal((await run(1,"select public.box_egg('capabilities') r")).worlds,23);
  const g=new EggAdventure();g.save.eggs=[{id:1,world:22,rarity:'rare',mutation:'normal',remaining:100}];
  assert.equal((await run(1,"select public.box_egg('save',p_data=>$1,p_revision=>0) r",[g.save])).revision,1);
  assert.equal((await run(1,"select public.box_egg('load') r")).save.eggs[0].world,22);
  const a=await call(1,'create',{p_game:'egg'});await call(2,'join',{p_code:a.code});const other=await call(3,'create',{p_game:'egg'});
  const sync=async(n,room,rock=null,z=15,extra={})=>{await db.exec("update private.box_limits set last_sync='-infinity'");return call(n,'sync',{p_room:room,p_state:{x:0,y:0,z,yaw:0,zone:'world',rock,...extra}});};
  assert.equal((await sync(1,a.id,{id:'base',action:'cast'})).rock,null);
  const cast={id:'mountain-one',action:'cast'},opened=await sync(1,a.id,cast,-1081);assert.equal(opened.rock.owner,1);
  assert.deepEqual((await sync(2,a.id)).rock,opened.rock);
  assert.equal((await sync(1,a.id,cast,-1081)).revision,opened.revision);
  assert.equal((await sync(2,a.id,{id:'competitor',action:'cast'},-1081)).rock.id,cast.id);
  assert.equal((await sync(3,other.id)).rock,null);assert.equal((await sync(3,a.id,cast,-1081)).error,'not_member');
  assert.deepEqual((await call(4,'join',{p_code:a.code})).rock,opened.rock);
  assert.equal((await sync(1,a.id,null,-1103)).error,undefined);
  const flame={id:'dragon',action:'cast'};const both=await sync(2,a.id,null,-1020,{flame});assert.equal(both.flame.id,'dragon');assert.equal(both.rock.id,cast.id);
  await db.exec(`update private.box_rooms set world=jsonb_set(world,'{rock,nextAt}','0') where id='${a.id}';insert into private.box_egg_races(room_id,starts_at,world) values('${a.id}',now(),22);`);
  assert.equal((await sync(1,a.id,{id:'race-cast',action:'cast'},-1081)).rock.id,cast.id);
 }finally{await db.close();}
});
