import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';
import {intgemDatabase} from './intgem-db-fixture.mjs';import {EggAdventure} from '../integro-box/egg-src/egg-rules.js';
const migration=name=>readFile(new URL('../supabase/migrations/'+name,import.meta.url),'utf8');
test('server publishes shared deadline, denies expired gifts and stale clients, keeps 21 worlds',async()=>{
 const {db,run}=await intgemDatabase();try{
  for(const f of ['20261020233803_egg_room_traps.sql','20261020235725_egg_jetpack.sql','20261021001638_egg_welcome_gift.sql','20261021014434_egg_income_tax_luxury.sql','20261023004052_egg_winter_2026.sql','20261023020406_egg_winter_skates_intgem.sql'])await db.exec(await migration(f));
  const sql=await migration('20261028213739_egg_winter_event_deadline.sql');const future=sql.replaceAll('2026-10-29','2099-10-29');await db.exec(future);await db.exec(future);
  const call=(n,a,data=null,rev=-1)=>run(n,'select public.box_egg(p_action=>$1,p_data=>$2,p_revision=>$3) r',[a,data,rev]);
  const cap=await call(1,'capabilities');assert.equal(cap.worlds,21);assert.equal(cap.event.active,true);assert.equal((await call(1,'event_state')).event.ends_at,'2099-10-29T03:32:00.000Z');
  const g=new EggAdventure();assert.equal((await call(1,'save',g.save,0)).revision,1);
  await db.exec(sql.replaceAll('2026-10-29','2000-10-29'));
  assert.equal((await call(1,'event_state')).event.active,false);assert.equal((await call(2,'winter_claim')).error,'winter_ended');assert.equal((await db.query('select count(*)::int n from private.egg_winter_inventory')).rows[0].n,0);
  assert.equal((await call(1,'save',g.save,1)).error,'event_update_required');g.save.winterEnded=true;assert.equal((await call(1,'save',g.save,1)).revision,2);
  const old={...g.save};delete old.eventVersion;assert.equal((await call(1,'save',old,2)).error,'event_update_required');
  assert.equal((await call(1,'capabilities')).worlds,21);await assert.rejects(()=>call(null,'event_state'),/box_access_denied/);await assert.rejects(()=>run(1,'select private.egg_winter_event_state() r'),/permission denied/);
 }finally{await db.close();}
});
