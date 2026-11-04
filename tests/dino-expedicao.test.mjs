import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {DinoRun,FINISH} from '../integro-box/dino/course.mjs';
import {intgemDatabase} from './intgem-db-fixture.mjs';
import {uid} from './box-db-fixture.mjs';
const migration=await readFile(new URL('../supabase/migrations/20261104223447_box_dino_expedicao.sql',import.meta.url),'utf8');
function play(seed,skip=-1){
  const run=new DinoRun(seed);
  while(!run.result){
    const o=run.obstacles[run.next];
    if(o&&run.next!==skip&&o.center-run.tick===27)assert(run.jump());
    run.advance();
  }
  return run;
}
test('every stage is reachable and the database independently reproduces a win or collision',async()=>{
  const {db,run:asUser}=await intgemDatabase();
  try{
    await db.exec(migration);
    for(const seed of [0,91,99990])for(const skip of [-1,0,7,28,44]){
      const run=play(seed,skip);
      if(skip===-1){assert.equal(run.tick,FINISH);assert.equal(run.result,'win');assert.equal(run.clears,45);}
      else {assert.equal(run.result,'collision');assert.equal(run.clears,skip);}
      const {rows}=await db.query('select private.dino_grade($1,$2,$3) grade',[seed,run.tick,run.jumps]);
      assert.equal(rows[0].grade.score,run.score);assert.equal(rows[0].grade.win,skip===-1);
    }
    const rpc=(n,act,id=null,tick=null,jumps=[])=>asUser(n,'select public.box_dino($1,$2,$3,$4) r',[act,id,tick,JSON.stringify(jumps)]);
    const entry=await rpc(1,'start'),good=play(entry.seed);
    await assert.rejects(rpc(1,'finish',entry.run,good.tick,good.jumps),/invalid_time/);
    await db.query("update private.dino_runs set started_at=now()-interval '3 minutes' where user_id=$1",[uid(1)]);
    await assert.rejects(rpc(2,'finish',entry.run,good.tick,good.jumps),/run_replaced/);
    await assert.rejects(rpc(1,'finish',entry.run,good.tick,[10,11]),/invalid_jump/);
    await assert.rejects(rpc(1,'finish',entry.run,good.tick,[]),/invalid_finish/);
    const record=await rpc(1,'finish',entry.run,good.tick,good.jumps);
    assert.deepEqual(await rpc(1,'finish',entry.run,good.tick,good.jumps),record);
    const entry2=await rpc(1,'start'),short=play(entry2.seed,0);
    await db.query("update private.dino_runs set started_at=now()-interval '10 seconds' where user_id=$1",[uid(1)]);
    await rpc(1,'finish',entry2.run,short.tick,[]);
    const ranks=await rpc(2,'ranking');assert.equal(ranks.leaders.length,1);assert.equal(ranks.leaders[0].score,good.score);assert.equal(ranks.me,null);
    assert.equal((await rpc(1,'ranking')).me.position,1);
    await assert.rejects(rpc(20,'ranking'),/box_access_denied/);
    await assert.rejects(asUser(2,'select * from private.dino_records'),/permission denied/);
  }finally{await db.close();}
});
