import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';
import {intgemDatabase} from './intgem-db-fixture.mjs';import {uid} from './box-db-fixture.mjs';
import {EggAdventure,WORLDS,RARITIES,MUTATIONS} from '../integro-box/egg-src/egg-rules.js';
const sql=await readFile(new URL('../supabase/migrations/20261104220216_egg_corral_progression_fusion.sql',import.meta.url),'utf8');
const pet=(uid,world)=>({uid,world,rarity:'common',mutation:'normal',winterReward:false});
test('IntGem fusion purchases and uses are atomic, idempotent, account-owned and protected against save replay',async()=>{
 const {db,run}=await intgemDatabase();try{
  for(const name of ['20261020235725_egg_jetpack.sql','20261021014434_egg_income_tax_luxury.sql'])await db.exec(await readFile(new URL('../supabase/migrations/'+name,import.meta.url),'utf8'));
  await db.exec(sql);await db.exec(sql);
  const save=(n,data,revision)=>run(n,"select public.box_egg('save',p_revision=>$1,p_data=>$2) r",[revision,data]);
  const act=(n,action,id,rev,main=null,donor=null)=>run(n,'select public.box_egg(p_action=>$1,p_id=>$2,p_revision=>$3,p_offer=>$4,p_want=>$5) r',[action,uid(id),rev,main,donor]);
  const g=new EggAdventure({version:4,coins:12345,creatures:[pet('main',0),pet('donor',2),pet('third',1)]});assert.equal((await save(1,g.save,0)).revision,1);assert.equal((await save(2,new EggAdventure().save,0)).revision,1);
  await db.exec(`insert into private.intgem_wallets(user_id,balance) values('${uid(1)}',20),('${uid(2)}',9)`);
  assert.equal((await act(2,'fusion_buy',90,1)).error,'insufficient_intgem');assert.equal((await act(1,'fusion_buy',90,0)).error,'conflict');
  let d=await act(1,'fusion_buy',90,1);assert.equal(d.balance,10);assert.equal(d.save.coins,12345);assert.equal(d.save.fusion.charges,10);assert.equal(d.revision,2);
  const again=await act(1,'fusion_buy',90,1);assert.equal(again.balance,10);assert.equal(again.save.fusion.charges,10);assert.equal(again.revision,2);
  assert.equal((await act(1,'fusion_use',90,2,'main','donor')).error,'request_changed');
  assert.equal((await act(1,'fusion_use',91,2,'main','main')).error,'invalid_fusion');assert.equal((await act(1,'fusion_use',91,2,'main','missing')).error,'pet_missing');
  const before=new EggAdventure(d.save).incomeRate(),preview=new EggAdventure(d.save).fusionPreview('main','donor');d=await act(1,'fusion_use',91,2,'main','donor');assert.equal(d.revision,3);assert.equal(d.save.fusion.charges,9);assert.equal(d.save.creatures.length,2);
  assert(Math.abs(new EggAdventure(d.save).baseCreatureIncomeRate(d.save.creatures[0])-preview.after)<1e-8);assert(new EggAdventure(d.save).incomeRate()>before);
  assert.equal((await act(1,'fusion_use',91,2,'main','donor')).save.fusion.charges,9);assert.equal((await act(2,'fusion_use',91,1,'main','donor')).error,'fusion_empty');
  const forged=structuredClone(d.save);forged.fusion.charges=10;assert.equal((await save(1,forged,3)).error,'progression_update_required');forged.fusion.charges=9;forged.creatures[0].fusionBonus*=2;assert.equal((await save(1,forged,3)).error,'progression_update_required');
  const canonical=new EggAdventure(d.save);assert.equal((await save(1,canonical.save,3)).revision,4);canonical.save.coins=250000;assert(canonical.buySecondFloor());canonical.save.creatures=Array.from({length:25},(_,i)=>i===0?canonical.save.creatures[0]:pet('extra-'+i,0));canonical.save.eggs=[];assert.equal((await save(1,canonical.save,4)).revision,5);
  canonical.save.secondFloor=false;assert.equal((await save(1,canonical.save,5)).error,'invalid_save');
  const ledger=(await db.query("select count(*)::int n,sum(delta)::int total from private.intgem_ledger where reference like 'egg-fusion:%'")).rows[0];assert.equal(ledger.n,1);assert.equal(ledger.total,-10);
  await assert.rejects(()=>run(1,'select * from private.egg_fusion_operations'),/permission denied/);await assert.rejects(()=>act(20,'fusion_buy',99,0),/box_access_denied/);
  const specimens=[];for(let world=0;world<WORLDS.length;world++)for(const rarity of Object.keys(RARITIES))for(const mutation of Object.keys(MUTATIONS))specimens.push({world,rarity,mutation,winterReward:world===20,fusionBonus:1.23});
  const rows=(await db.query('select private.egg_fusion_rate(value)::float8 rate from jsonb_array_elements($1::jsonb)',[JSON.stringify(specimens)])).rows;
  rows.forEach((r,i)=>assert(Math.abs(r.rate-g.baseCreatureIncomeRate(specimens[i]))<1e-8,'SQL and game income formulas agree'));
 }finally{await db.close();}
});
