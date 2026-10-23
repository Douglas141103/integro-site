import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {JSDOM} from 'jsdom';
import {createEggPush} from '../integro-box/egg-push.js';
import {freshSave} from '../integro-box/egg-src/egg-rules.js';
const html=readFileSync(new URL('../integro-box/jogar.html',import.meta.url),'utf8');
const source=readFileSync(new URL('../integro-box/egg-cloud.js',import.meta.url),'utf8').replace(/^import .*;\n/gm,'');
async function boot({storage,server,local}){
 const dom=new JSDOM(html,{runScripts:'outside-only',pretendToBeVisual:true}),w=dom.window;
 w.setInterval=()=>1;w.clearInterval=()=>{};w.BoxStorage={getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)};
 let state=structuredClone(local),writes=0,applies=0;w.BoxEggRuntime={solidarityCredit:amount=>{state.coins+=amount;},save:()=>structuredClone(state),apply:s=>{state=structuredClone(s);applies++;},active:()=>true,playing:()=>true,inBase:()=>true,raceMode(){},message(){},stop(){}};
 const client={async rpc(_,a){if(a.p_action==='capabilities')return{data:{worlds:server.worlds}};if(a.p_action==='load')return{data:{save:structuredClone(server.save),revision:server.rev}};if(a.p_action==='save'){writes++;assert.equal(a.p_revision,server.rev);server.save=structuredClone(a.p_data);server.rev++;const credit=server.solidarityCredit||0;server.save.coins+=credit;server.solidarityCredit=0;return{data:{revision:server.rev,solidarity_credit:credit}};}throw Error(a.p_action);}};
 const AsyncFunction=w.eval('(async function(){}).constructor');await new AsyncFunction('supabase','createEggPush',source)(client,createEggPush);
 return{w,get state(){return state},get writes(){return writes},get applies(){return applies},setState:s=>{state=s},close:()=>dom.window.close()};
}
test('old server cannot overwrite new eggs across reload; matching updated server resumes the pending save',async()=>{
 const storage=new Map(),server={worlds:14,rev:5,save:freshSave()};server.save.coins=200;
 let app=await boot({storage,server,local:freshSave()});assert.equal(app.applies,1);const progress=app.state;progress.eggs=[{id:4,world:19,rarity:'rare',mutation:'normal',remaining:5}];progress.coins=777;app.setState(progress);app.w.BoxEggCloud.dirty();assert.equal(await app.w.BoxEggCloud.flush(),false);assert.equal(app.writes,0);assert(storage.has('integro-box-eggs-expansion-pending'));app.close();
 app=await boot({storage,server,local:progress});assert.equal(app.applies,0);assert.equal(app.state.coins,777);assert.equal(app.state.eggs[0].world,19);assert.equal(app.writes,0);app.close();
 server.worlds=20;app=await boot({storage,server,local:progress});assert.equal(app.applies,0);assert.equal(app.writes,1);assert.equal(server.save.eggs[0].world,19);assert.equal(server.save.coins,777);assert.equal(server.rev,6);assert.equal(storage.has('integro-box-eggs-expansion-pending'),false);app.close();
});
test('a changed cloud revision keeps both copies and requires an explicit choice before replacing local expansion progress',async()=>{
 const storage=new Map([['integro-box-eggs-expansion-pending',JSON.stringify({revision:3})]]),server={worlds:20,rev:4,save:freshSave()},local=freshSave();local.coins=999;local.creatures=[{uid:'new',world:19,rarity:'common',mutation:'normal'}];server.save.coins=20;
 const app=await boot({storage,server,local});try{assert.equal(app.applies,0);assert.equal(app.writes,0);assert.equal(app.state.coins,999);const node=app.w.document.createElement('div');app.w.BoxEggCloud.render(node);assert.match(node.textContent,/versão diferente/);const choose=[...node.querySelectorAll('button')].find(b=>b.textContent==='Usar progresso do perfil');assert(choose);choose.click();await new Promise(r=>setImmediate(r));assert.equal(app.applies,1);assert.equal(app.state.coins,20);assert.equal(JSON.parse(storage.get('integro-box-eggs-recovery')).coins,999);}finally{app.close();}
});

test('confirmed solidarity credit updates the local wallet exactly once without reloading the running game',async()=>{
 const storage=new Map(),server={worlds:21,rev:5,save:freshSave(),solidarityCredit:500};server.save.coins=100;
 const app=await boot({storage,server,local:freshSave()});try{const state=app.state;state.coins+=11;app.setState(state);app.w.BoxEggCloud.dirty();assert.equal(await app.w.BoxEggCloud.flush(),true);assert.equal(app.state.coins,611);assert.equal(server.save.coins,611);assert.equal(app.applies,1);app.w.BoxEggCloud.dirty();assert.equal(await app.w.BoxEggCloud.flush(),true);assert.equal(app.state.coins,611);assert.equal(server.save.coins,611);assert.equal(app.applies,1);}finally{app.close();}
});
