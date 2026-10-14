import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';
import {boxDatabase,uid} from './box-db-fixture.mjs';
import {EggAdventure,ACCESSORIES,WORLDS,NESTS,CORRAL,cleanSave,freshSave} from '../integro-box/egg-src/egg-rules.js';
test('sixteen new accessories have prices, purchase checks, visual slots and persistent equipment',()=>{
 const legacy=['crown','headphones','halo','goggles','wings','cape'];const items=Object.entries(ACCESSORIES).filter(([id])=>!legacy.includes(id));assert.equal(items.length,16);assert.ok(items.filter(([,v])=>v.price>=20000).length>=4);assert.ok(items.some(([,v])=>v.price>=100000));
 const g=new EggAdventure();assert.equal(g.buy('infinityWings'),false);g.save.coins=1000000;
 for(const [id,item] of items){const before=g.save.coins;assert.ok(g.buy(id));assert.equal(g.save.coins,before-item.price);assert.equal(g.save.equipped[item.slot],id);assert.equal(g.buy(id),false);const reloaded=new EggAdventure(g.save);assert.ok(reloaded.save.accessories.includes(id));assert.equal(reloaded.save.equipped[item.slot],id);assert.equal(reloaded.save.coins,g.save.coins);}
 g.player.z=-100;assert.equal(g.buy('crown'),false,'purchases still require the base');
});
test('the thirteenth nest yields a persistent phoenix, income and a higher training recommendation',()=>{
 assert.equal(WORLDS.length,13);assert.equal(NESTS.length,13);const g=new EggAdventure();assert.equal(g.nestEggs[12].length,3);assert.ok(g.recommendedTraining(12)>g.recommendedTraining(11));Object.assign(g.player,NESTS[12]);assert.equal(g.zone(),12);assert.equal(g.steal(0),true);Object.assign(g.player,CORRAL);assert.equal(g.interact(),'deposit');for(let i=0;i<170;i++)g.update(.05);assert.equal(g.save.creatures[0].world,12);assert.equal(WORLDS[12].kind,'phoenix');assert.ok(g.saleValue(12)>=9500);const copy=cleanSave(g.save);assert.equal(copy.creatures[0].world,12);assert.ok(copy.seen[12]);
 const old=freshSave();old.seen=old.seen.slice(0,12);old.visited=old.visited.slice(0,12);old.coins=8721;assert.equal(cleanSave(old).coins,8721);assert.equal(cleanSave(old).seen.length,13);
});
test('migration is repeatable, preserves room authorization, and allows storm races and saved pets',async()=>{
 const {db,call}=await boxDatabase();try{
 await db.exec(await readFile(new URL('../supabase/migrations/20261013210000_box_egg_expansion.sql',import.meta.url),'utf8'));
 const sql=await readFile(new URL('../supabase/migrations/20261014220000_box_egg_storm.sql',import.meta.url),'utf8');await db.exec(sql);await db.exec(sql);
 const egg=(user,action,args={})=>db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query("select set_config('test.uid',$1,true)",[user?uid(user):'']);return(await tx.query('select public.box_egg($1,$2,$3,$4,$5,$6,$7,$8,$9) r',[action,args.rev??-1,args.save??null,args.room??null,null,null,null,null,args.world??0])).rows[0].r});
 assert.equal((await egg(1,'capabilities')).worlds,13);await assert.rejects(egg(0,'capabilities'));await assert.rejects(egg(8,'capabilities'));
 const save=freshSave();save.creatures=[{id:1,uid:'storm-pet',world:12,rarity:'secret',mutation:'cosmic'}];save.accessories=['infinityWings'];save.equipped={back:'infinityWings'};assert.equal((await egg(1,'save',{rev:0,save})).revision,1);assert.equal((await egg(1,'load')).save.creatures[0].world,12);
 const room=await call(1,'create',{p_game:'egg'});await call(2,'join',{p_code:room.code});for(const n of [1,2])await call(n,'sync',{p_room:room.id,p_state:{x:0,y:0,z:15,yaw:0,zone:'world'}});
 assert.equal((await egg(1,'race_start',{room:room.id,world:12})).race.world,12);
 await db.exec("update private.box_limits set last_sync='-infinity';update private.box_egg_races set starts_at=now()-interval '40 seconds'");assert.equal((await call(1,'sync',{p_room:room.id,p_state:{x:0,y:0,z:-603,yaw:0,zone:'world'}})).error,undefined);
 assert.equal((await egg(1,'race_tick',{room:room.id})).race.results['1'].checkpoint,true);
 assert.equal((await call(3,'sync',{p_room:room.id,p_state:{x:0,y:0,z:-603,yaw:0,zone:'world'}})).error,'not_member');
 }finally{await db.close()}
});
