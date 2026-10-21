import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';import {intgemDatabase} from './intgem-db-fixture.mjs';import {uid} from './box-db-fixture.mjs';import {EggAdventure} from '../integro-box/egg-src/egg-rules.js';
const migration=await readFile(new URL('../supabase/migrations/20261021030058_room_equipped_appearance.sql',import.meta.url),'utf8');
test('room shares only owned equipped appearance; changes propagate, forged state and nonmembers cannot read inventories',async()=>{
 const {db,call,rpc,run}=await intgemDatabase();try{
 await db.exec(await readFile(new URL('../supabase/migrations/20261016190709_egg_intgem_shop.sql',import.meta.url),'utf8'));await db.exec(migration);await db.exec(migration);
 await rpc(1);await rpc(2);await db.query('update private.intgem_wallets set balance=100 where user_id=$1',[uid(2)]);
 for(const [item,price] of [['egg_station_head',4],['egg_coral_aura',5],['egg_station_companion',7],['bairro_jade',4]])assert.equal((await rpc(2,'buy',{item,price})).error,undefined);
 const g=new EggAdventure();g.save.accessories=['crown','wings'];g.save.equipped={head:'crown',face:'goggles',back:'wings'};g.save.creatures=[{uid:'owned-pet',world:1,rarity:'rare',mutation:'gold'}];g.save.companionId='owned-pet';
 assert.equal((await run(2,"select public.box_egg('save',p_revision=>0,p_data=>$1) r",[g.save])).error,undefined);
 const room=await call(1,'create',{p_game:'egg'});const joined=await call(2,'join',{p_code:room.code});const other=joined.players.find(p=>p.slot===joined.slot);
 assert.deepEqual(other.state.appearance.accessories,{head:'crown',back:'wings'});assert.equal(other.state.appearance.premium.head,'egg_station_head');assert.equal(other.state.appearance.premium.aura,'egg_coral_aura');assert.equal(other.state.appearance.premium.companion,'egg_station_companion');assert.deepEqual(other.state.appearance.companion,{world:1,rarity:'rare',mutation:'gold'});
 assert(!JSON.stringify(joined.players).includes(uid(2)));assert(!JSON.stringify(joined.players).includes('balance'));assert(!JSON.stringify(joined.players).includes('inventory'));
 assert.equal((await call(3,'sync',{p_room:room.id})).error,'not_member');await assert.rejects(()=>run(1,"select private.box_room_appearance($1,'egg') r",[uid(2)]),/permission denied/);
 // The caller's arbitrary appearance is discarded; only server-owned equipment is sent.
 const forged=await call(1,'sync',{p_room:room.id,p_state:{x:0,y:0,z:10,yaw:0,zone:'world',appearance:{premium:{head:'egg_royal_head'}}}});
 assert.deepEqual(forged.players.find(p=>p.slot===room.slot).state.appearance.premium,{});
 await rpc(2,'unequip',{item:'egg_station_head'});const refreshed=await call(2,'sync',{p_room:room.id,p_state:{x:1,y:0,z:10,yaw:0,zone:'world'}});assert.equal(refreshed.players.find(p=>p.slot===joined.slot).state.appearance.premium.head,undefined);
 await call(2,'leave',{p_room:room.id});const bairro=await call(2,'create',{p_game:'bairro'});assert.deepEqual(bairro.players[0].state.appearance,{accessories:{},companion:null,premium:{aura:'bairro_jade'}});
 }finally{await db.close();}
});
