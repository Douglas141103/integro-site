import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {intgemDatabase} from './intgem-db-fixture.mjs';
import {uid} from './box-db-fixture.mjs';
const old=await readFile(new URL('../supabase/migrations/20261021005058_shark_fishing_cages.sql',import.meta.url),'utf8');
const sql=await readFile(new URL('../supabase/migrations/20261021012037_shark_persistent_fishing.sql',import.meta.url),'utf8');
test('persistent fishing locks one use at placement, collects only full cages and survives retries',async()=>{
 const {db,rpc,run}=await intgemDatabase();try{await db.exec(old);await db.exec(sql);await db.exec(sql);await db.exec(`insert into private.intgem_wallets(user_id,balance) values('${uid(1)}',1)`);
 const bought=await rpc(1,'shark_cage_buy',{tier:1,request:uid(101)}),cage=bought.cages[0].id,position={x:-600,y:24,z:-300};
 assert.equal((await rpc(1,'shark_cage_cast',{cage,request:uid(102),levels:[0]})).error,'cage_update_required');
 assert.equal((await rpc(1,'shark_cage_place',{cage,request:uid(102),position:{x:999,y:24,z:0}})).error,'invalid_position');
 for(let cycle=0;cycle<5;cycle++){
  const payload={cage,request:uid(200+cycle),position},placed=await rpc(1,'shark_cage_place',payload),id=placed.active.id;
  assert.equal(placed.active.uses_left,4-cycle);assert.deepEqual(placed.active.levels,[]);assert.equal(placed.cast,null);assert.equal((await rpc(1,'shark_cage_place',payload)).active.id,id);
  assert.equal((await rpc(1,'shark_cage_place',{...payload,request:uid(300+cycle)})).error,'cage_active');
  assert.equal((await rpc(2,'shark_cage_catch',{run:id,request:uid(400),level:0})).error,'not_owned');
  assert.equal((await rpc(1,'shark_cage_collect',{run:id,request:uid(500+cycle)})).error,'cage_not_full');
  for(let n=0;n<3;n++){const catchPayload={run:id,request:uid(600+cycle*10+n),level:0};const caught=await rpc(1,'shark_cage_catch',catchPayload);assert.equal(caught.active.levels.length,n+1);assert.equal(caught.active.uses_left,4-cycle);assert.equal(caught.cast,null);assert.equal((await rpc(1,'shark_cage_catch',catchPayload)).active.levels.length,n+1);}
  const snapshot=await rpc(1,'shark_cages');assert.deepEqual(snapshot.active.position,position);assert.equal(snapshot.active.levels.length,3);
  assert.equal((await rpc(1,'shark_cage_catch',{run:id,request:uid(800+cycle),level:0})).error,'cage_full');
  const collect={run:id,request:uid(900+cycle)},reward=await rpc(1,'shark_cage_collect',collect);assert.equal(reward.active,null);assert.equal(reward.cast.id,id);assert.deepEqual(reward.cast.levels,[0,0,0]);assert.deepEqual((await rpc(1,'shark_cage_collect',collect)).cast,reward.cast);
  assert.equal((await rpc(1,'shark_cage_collect',{...collect,request:uid(950+cycle)})).error,'already_collected');
 }
 assert.equal((await rpc(1,'shark_cage_place',{cage,request:uid(999),position})).error,'cage_empty');assert.equal((await rpc(1,'shark_cages')).cages.length,0);
 await assert.rejects(()=>run(1,'select * from private.shark_fishing_runs'),/permission denied/);await assert.rejects(()=>run(1,"select private.shark_fishing_action('shark_cages','{}') r"),/permission denied/);
 }finally{await db.close();}
});
