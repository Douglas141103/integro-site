import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';import {intgemDatabase} from './intgem-db-fixture.mjs';import {uid} from './box-db-fixture.mjs';
import {createEggEconomyUI} from '../integro-box/egg-src/egg-economy-ui.js';
test('reward notices stay private and only their recipient can acknowledge them',async()=>{
 const {db,run}=await intgemDatabase();try{
  const sql=await readFile(new URL('../supabase/migrations/20261030220838_egg_reward_notices.sql',import.meta.url),'utf8');await db.exec(sql);await db.exec(sql);
  const {rows:[notice]}=await db.query("insert into private.egg_reward_notices(user_id,reference,message,item_name) values($1,'test-imperial-award','Parabéns! Você ganhou um avião por ser o jogador com mais tempo de jogo.','Jatinho Imperial') returning id",[uid(1)]);
  const call=(n,action,id=null)=>run(n,'select public.box_egg($1,p_id=>$2) r',[action,id]);
  assert.equal((await call(1,'reward_notices')).notices.length,1);assert.equal((await call(2,'reward_notices')).notices.length,0);
  await call(2,'reward_ack',notice.id);assert.equal((await call(1,'reward_notices')).notices.length,1);
  assert.equal((await call(1,'reward_ack',notice.id)).notices.length,0);assert.equal((await call(1,'reward_ack',notice.id)).notices.length,0);
  await assert.rejects(()=>run(2,'select * from private.egg_reward_notices'),/permission denied/);
 }finally{await db.close();}
});
test('reward popup shows the exact message and inventory prize without fees or tax notices',async()=>{
 const dom=new JSDOM('<main></main>',{pretendToBeVisual:true});globalThis.document=dom.window.document;
 const host=document.querySelector('main'),message='Parabéns! Você ganhou um avião por ser o jogador com mais tempo de jogo.';
 let ui,panel=null,acknowledged=false;
 ui=createEggEconomyUI({rpc:async(action,id)=>{if(action==='reward_notices')return{notices:[{id:'award',message,item_name:'Jatinho Imperial'}]};if(action==='reward_ack'){assert.equal(id,'award');acknowledged=true;}return{notices:[]};},ready:()=>true,active:()=>true,canPresent:()=>!panel,open:p=>{panel=p;ui.render(host);},close:()=>panel=null,refreshWallet:async()=>{},persist(){},getGame:()=>({})});
 try{await ui.check();ui.tick();assert(host.textContent.includes(message));assert(host.textContent.includes('Jatinho Imperial'));assert.doesNotMatch(host.textContent,/imposto|Integros|extrato/);host.querySelector('button').click();await new Promise(setImmediate);assert(acknowledged);assert.equal(panel,null);ui.tick();assert.equal(panel,null);}finally{dom.window.close();delete globalThis.document;}
});
