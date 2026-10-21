import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {intgemDatabase} from './intgem-db-fixture.mjs';
import {uid} from './box-db-fixture.mjs';
const sql=await readFile(new URL('../supabase/migrations/20261021005058_shark_fishing_cages.sql',import.meta.url),'utf8');
test('cages charge 1/2/3 IntGem once and allow exactly five capacity-limited casts per owner',async()=>{
 const {db,rpc,run}=await intgemDatabase();try{await db.exec(sql);await db.exec(sql);await db.exec(`insert into private.intgem_wallets(user_id,balance) values('${uid(1)}',6),('${uid(2)}',1)`);
  assert.equal((await rpc(2,'shark_cage_buy',{tier:3,request:uid(100)})).error,'insufficient_balance');assert.equal((await rpc(1,'shark_cage_buy',{tier:0,request:uid(100)})).error,'invalid_cage');
  let data;for(const tier of [1,2,3]){data=await rpc(1,'shark_cage_buy',{tier,request:uid(100+tier),price:0,capacity:100,uses_left:100});assert.equal(data.cages.length,tier);assert.equal((await rpc(1,'shark_cage_buy',{tier,request:uid(100+tier)})).cages.length,tier);}
  assert.equal(data.balance,0);assert.deepEqual(data.cages.map(c=>c.capacity).sort((a,b)=>a-b),[3,6,10]);assert(data.cages.every(c=>c.uses_left===5));
  assert.equal((await rpc(1,'shark_cage_buy',{tier:2,request:uid(101)})).error,'request_changed');
  const cage=data.cages.find(c=>c.tier===1),cast=(n,request,levels)=>rpc(n,'shark_cage_cast',{cage:cage.id,request:uid(request),levels});
  assert.equal((await cast(2,120,[0])).error,'not_owned');assert.equal((await cast(1,120,[])).error,'invalid_catch');assert.equal((await cast(1,120,[0,0,0,0])).error,'invalid_catch');assert.equal((await cast(1,120,[60])).error,'invalid_catch');assert.equal((await cast(1,120,['0'])).error,'invalid_catch');
  assert.equal((await rpc(1,'shark_cages')).cages.find(c=>c.id===cage.id).uses_left,5);
  for(let i=0;i<5;i++){const result=await cast(1,130+i,[0,0,0]);assert.equal(result.cast.uses_left,4-i);const replay=await cast(1,130+i,[4,4,4]);assert.equal(replay.cast.uses_left,4-i);assert.deepEqual(replay.cast.levels,[0,0,0]);}
  assert.equal((await cast(1,140,[0])).error,'cage_empty');assert.equal((await cast(1,134,[0])).cast.uses_left,0);assert.equal((await rpc(1,'shark_cages')).cages.length,2);assert.equal((await rpc(2,'shark_cages')).cages.length,0);
  assert.equal((await db.query('select sum(delta)::int n from private.intgem_ledger where user_id=$1',[uid(1)])).rows[0].n,-6);assert.equal((await db.query('select count(*)::int n from private.shark_cage_casts')).rows[0].n,5);
  await assert.rejects(()=>rpc(20,'shark_cages'),/box_access_denied/);await assert.rejects(()=>run(1,'select uses_left r from private.shark_cages'),/permission denied/);await assert.rejects(()=>run(1,"select private.shark_cage_action('shark_cages','{}') r"),/permission denied/);
 }finally{await db.close();}
});
