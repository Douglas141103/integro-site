import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';
import {intgemDatabase} from './intgem-db-fixture.mjs';
import {EggAdventure} from '../integro-box/egg-src/egg-rules.js';
test('five-floor cloud save preserves capacity, rejects invalid/downgraded floors and lost designs, and retains fusion protections',async()=>{
 const {db,run}=await intgemDatabase();try{
 for(const name of ['20261020235725_egg_jetpack.sql','20261021014434_egg_income_tax_luxury.sql','20261104220216_egg_corral_progression_fusion.sql'])await db.exec(await readFile(new URL('../supabase/migrations/'+name,import.meta.url),'utf8'));
 // Fixture predates the event metadata; match the live dispatch capability anchor.
 await db.exec(`do $$declare f text;begin f:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);f:=replace(f,'''vehicles'',12)', '''vehicles'',12,''event'',null)');execute f;end $$;`);
 const sql=await readFile(new URL('../supabase/migrations/20261111215656_egg_five_floor_corrals.sql',import.meta.url),'utf8');await db.exec(sql);await db.exec(sql);
 const save=(n,data,rev)=>run(n,"select public.box_egg('save',p_revision=>$1,p_data=>$2) r",[rev,data]);
 const legacy=new EggAdventure({version:4,secondFloor:true}).save;delete legacy.corralFloors;delete legacy.corralVersion;assert.equal((await save(1,legacy,0)).revision,1);
 const g=new EggAdventure({...legacy,coins:4000000,upgrades:{pen:10}});for(let n=3;n<=5;n++)assert(g.buyCorralFloor(n));assert(g.buy('castle'));
 g.save.creatures=Array.from({length:119},(_,i)=>({uid:'nest-'+i,world:0,rarity:'common',mutation:'normal'}));
 assert.equal((await save(1,g.save,1)).revision,2);const loaded=await run(1,"select public.box_egg('load') r");assert.equal(loaded.save.creatures.length,119);assert.equal(loaded.save.corralFloors,5);assert.equal(loaded.save.decoration,'castle');
 for(const bad of [0,6,2.5,'5',null]){const d={...g.save,corralFloors:bad};assert((await save(1,d,2)).error);}
 const downgraded={...g.save,creatures:[],corralFloors:2};assert.equal((await save(1,downgraded,2)).error,'progression_update_required');delete downgraded.corralFloors;assert.equal((await save(1,downgraded,2)).error,'progression_update_required');
 const lost={...g.save,decorations:['meadow'],decoration:'meadow'};assert.equal((await save(1,lost,2)).error,'progression_update_required');
 assert.equal((await save(1,{...g.save,fusion:{owned:true,charges:3}},2)).error,'progression_update_required');
 assert.equal((await save(1,{...g.save,creatures:[...g.save.creatures,{uid:'excess',world:0,rarity:'common',mutation:'normal'}]},2)).error,'invalid_save');
 assert.equal((await run(1,"select public.box_egg('capabilities') r")).corral_floors,5);
 const f=(await db.query("select pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure) f")).rows[0].f;assert(f.includes("'corralFloors',private.egg_corral_floors(other.data)"));
 }finally{await db.close();}
});
