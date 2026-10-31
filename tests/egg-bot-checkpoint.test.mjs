import test from 'node:test';import assert from 'node:assert/strict';
import {gzipSync,gunzipSync} from 'node:zlib';
import {packCheckpoint,unpackCheckpoint} from '../supabase/functions/egg-bots/checkpoint.mjs';
import {decodeBot} from '../supabase/functions/egg-bots/simulation.mjs';
const replacer=(_,v)=>v===Infinity?'@Infinity':v===-Infinity?'@-Infinity':v;
test('optimized checkpoint codec reads the previous format and preserves inventories, timers and all game saves',()=>{
 const saved={};for(let id=1;id<=140;id++)saved[id]={version:2,session:id,active:'egg',egg:{game:{save:{coins:id*123,intgem:15,vehicles:['aurora'],name:'Jogador ç'},cooldown:Infinity,previous:-Infinity,items:[null,1,'@Infinity marker']}},games:{math:{seconds:123,actions:17},craft:{runtime:{world:{'1,2,3':4}}}}};
 const old=gzipSync(JSON.stringify(saved,replacer)).toString('base64');assert.deepEqual(unpackCheckpoint(old,decodeBot),saved);
 const current=packCheckpoint(saved);assert.deepEqual(unpackCheckpoint(current,decodeBot),saved);
 // The old decoder can still read new checkpoints, so rollback loses no state.
 const legacy=JSON.parse(gunzipSync(Buffer.from(current,'base64')).toString(),(_,v)=>v==='@Infinity'?Infinity:v==='@-Infinity'?-Infinity:v);assert.deepEqual(legacy,saved);
});
test('fast decoder matches legacy sentinel handling including nested arrays and scalar values',()=>{
 for(const v of [null,1,'@Infinity','@-Infinity',[],[Infinity,-Infinity,null,{x:Infinity}],{x:'hello',a:[1,{b:-Infinity}]}]){
 const text=JSON.stringify(v,replacer);assert.deepEqual(decodeBot(text),JSON.parse(text,(_,v)=>v==='@Infinity'?Infinity:v==='@-Infinity'?-Infinity:v));
 }
 assert.throws(()=>unpackCheckpoint('bad-data',decodeBot));
});
