import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {DinoRun,FINISH,STAGE_TICKS,makeCourse} from '../integro-box/dino/course.mjs';
import {intgemDatabase} from './intgem-db-fixture.mjs';
import {uid} from './box-db-fixture.mjs';
const migration=await readFile(new URL('../supabase/migrations/20261104223447_box_dino_expedicao.sql',import.meta.url),'utf8');
const longMigration=await readFile(new URL('../supabase/migrations/20261105034328_dino_long_tracks.sql',import.meta.url),'utf8');
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
    await db.exec(longMigration);
    for(const seed of [0,91,99990])for(const skip of [-1,0,9,22,51,89]){
      const run=play(seed,skip);
      if(skip===-1){assert.equal(run.tick,FINISH);assert.equal(run.result,'win');assert.equal(run.clears,90);}
      else {assert.equal(run.result,'collision');assert.equal(run.clears,skip);}
      const {rows}=await db.query('select private.dino_grade_long($1,$2,$3) grade',[seed,run.tick,run.jumps]);
      assert.equal(rows[0].grade.score,run.score);assert.equal(rows[0].grade.win,skip===-1);
    }
    const rpc=(n,act,id=null,tick=null,jumps=[])=>asUser(n,'select public.box_dino($1,$2,$3,$4) r',[act,id,tick,JSON.stringify(jumps)]);
    const entry=await rpc(1,'start_long'),good=play(entry.seed);
    await assert.rejects(rpc(1,'finish',entry.run,good.tick,good.jumps),/invalid_time/);
    await db.query("update private.dino_runs set started_at=now()-interval '5 minutes' where user_id=$1",[uid(1)]);
    await assert.rejects(rpc(2,'finish',entry.run,good.tick,good.jumps),/run_replaced/);
    await assert.rejects(rpc(1,'finish',entry.run,good.tick,[10,11]),/invalid_jump/);
    await assert.rejects(rpc(1,'finish',entry.run,good.tick,[]),/invalid_finish/);
    const record=await rpc(1,'finish',entry.run,good.tick,good.jumps);
    assert.deepEqual(await rpc(1,'finish',entry.run,good.tick,good.jumps),record);
    const entry2=await rpc(1,'start_long'),short=play(entry2.seed,0);
    await db.query("update private.dino_runs set started_at=now()-interval '10 seconds' where user_id=$1",[uid(1)]);
    await rpc(1,'finish',entry2.run,short.tick,[]);
    const ranks=await rpc(2,'ranking');assert.equal(ranks.leaders.length,1);assert.equal(ranks.leaders[0].score,good.score);assert.equal(ranks.me,null);
    assert.equal((await rpc(1,'ranking')).me.position,1);
    await assert.rejects(rpc(20,'ranking'),/box_access_denied/);
    await assert.rejects(asUser(2,'select * from private.dino_records'),/permission denied/);
  }finally{await db.close();}
});

test('each of six stages is twice as long and stays playable across varied seeds',()=>{
  assert.equal(STAGE_TICKS/60,40);assert.equal(FINISH/60,240);
  for(const seed of [0,1,17,42,99990]){
    const course=makeCourse(seed);assert.equal(course.length,90);
    for(let stage=0;stage<6;stage++)assert.equal(course.filter(o=>o.stage===stage).length,10+stage*2);
    for(let i=1;i<course.length;i++)assert(course[i].center-course[i-1].center>80);
    assert.equal(play(seed).result,'win');
  }
});
test('a race started before the upgrade still finishes and keeps its record',async()=>{
  const {db,run:asUser}=await intgemDatabase();
  try{
    await db.exec(migration);
    const entry=await asUser(1,"select public.box_dino('start') r");
    await db.query("update private.dino_runs set started_at=now()-interval '3 minutes' where user_id=$1",[uid(1)]);
    const jumps=[];
    for(let phase=0;phase<6;phase++)for(let item=0;item<5+phase;item++)
      jumps.push(phase*1200+140+Math.floor(item*970/(4+phase))+(entry.seed+phase*31+item*13)%23-26);
    const {rows}=await db.query('select private.dino_grade($1,7200,$2) grade',[entry.seed,jumps]);
    await db.exec(longMigration);
    const result=await asUser(1,"select public.box_dino('finish',$1,7200,$2) r",[entry.run,JSON.stringify(jumps)]);
    assert.deepEqual(result,rows[0].grade);assert.equal(result.win,true);
    const board=await asUser(1,"select public.box_dino('ranking') r");assert.equal(board.me.score,result.score);
    const old=await asUser(1,"select public.box_dino('start') r");assert.equal(old.version,1);
    const newer=await asUser(2,"select public.box_dino('start_long') r");assert.equal(newer.version,2);
  }finally{await db.close();}
});
