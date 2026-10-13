import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {JSDOM} from 'jsdom';
import {usageDatabase} from './box-usage-fixture.mjs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('InterDance usage migration is repeatable and preserves authorization and other games',async()=>{
 const f=await usageDatabase();try{
  await f.db.exec(read('supabase/migrations/20261013110000_box_gosnake_usage.sql'));
  const sql=read('supabase/migrations/20261013150000_box_interdance_usage.sql');await f.db.exec(sql);await f.db.exec(sql);
  await assert.rejects(()=>f.pulse(null,103,'interdance'),/box_access_denied/);
  await assert.rejects(()=>f.pulse(8,103,'interdance'),/box_access_denied/);
  await f.pulse(3,103,'interdance');await f.tick(3,103);await f.pulse(3,103,'interdance');
  assert.equal((await f.report(1,3,'interdance')).sessions[0].history[0].game,'interdance');
  await f.pulse(3,104,'gosnake');await assert.rejects(()=>f.pulse(3,105,'invented'),/invalid_usage/);
 }finally{await f.db.close();}
});
test('an older backend ends the previous usage interval and never mislabels dance time as another game',async()=>{
 const dom=new JSDOM('<p id="boxUsageNotice"></p><section id="danceApp" hidden></section>');
 const calls=[];let uuid=0,pulse;const w=dom.window;
 const context={window:w,document:w.document,MutationObserver:w.MutationObserver,crypto:{randomUUID:()=>String(++uuid)},matchMedia:()=>({matches:false}),screen:{width:1200,height:800},Date,queueMicrotask,setInterval:fn=>(pulse=fn,1),clearInterval(){},supabase:null};
 vm.createContext(context);vm.runInContext(read('integro-box/usage.js').replace(/^import .*\n/,'').replaceAll('export function','function'),context);
 const client={async rpc(name,args){calls.push({...args});return args.p_game==='interdance'?{error:{message:'invalid_usage'}}:{data:{ok:true}};}};
 const api=context.startUsage({client});const flush=()=>new Promise(resolve=>setImmediate(resolve));await flush();
 w.document.getElementById('danceApp').hidden=false;await flush();
 assert.deepEqual(calls.map(c=>[c.p_game,c.p_action]),[['lobby','pulse'],['interdance','pulse'],['lobby','end']]);
 pulse();await flush();assert.equal(calls.length,3);
 w.document.getElementById('danceApp').hidden=true;await flush();assert.equal(calls.at(-1).p_game,'lobby');assert.notEqual(calls.at(-1).p_session,calls[0].p_session);
 await api.stop();w.close();
});
