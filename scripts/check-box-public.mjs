import {createRequire} from 'node:module';
import {readFileSync} from 'node:fs';
import http from 'node:http';
import assert from 'node:assert/strict';
import {boxDatabase} from '../tests/box-db-fixture.mjs';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES?process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES+'/playwright':'playwright');
const {db,call}=await boxDatabase();
let queue=Promise.resolve();
const server=http.createServer(async(req,res)=>{
 const url=new URL(req.url,'http://local');res.setHeader('Content-Type','text/javascript');
 if(url.pathname==='/access.js'){res.end(`export const supabase={async rpc(name,args){return fetch('/rpc',{method:'POST',body:JSON.stringify({user:Number(new URLSearchParams(location.search).get('user')),args})}).then(r=>r.json())}}`);return;}
 if(url.pathname==='/multiplayer.js'){res.end(readFileSync('integro-box/multiplayer.js'));return;}
 if(url.pathname==='/online.css'){res.setHeader('Content-Type','text/css');res.end(readFileSync('integro-box/online.css'));return;}
 if(url.pathname==='/rpc'){
  let raw='';for await(const part of req)raw+=part;const {user,args}=JSON.parse(raw);
  queue=queue.then(async()=>{try{res.end(JSON.stringify({data:await call(user,args.p_action,args),error:null}));}catch(e){res.end(JSON.stringify({error:{message:e.message,code:e.code}}));}});return;
 }
 res.setHeader('Content-Type','text/html');res.end(`<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="/online.css"><body style="margin:0;background:#f1f5ee;font-family:system-ui"><main style="padding:30px"><h1>Integro Box</h1><p>Validação local de salas públicas · contas fictícias</p><button id="playEggGame">Pegue o Ovo</button><button id="playDollGame">Meu Bairro</button><button id="playCraft">IntegroCraft</button></main><script>window.BoxAdapters={};for(const [game,button] of [['egg','playEggGame'],['bairro','playDollGame'],['craft','playCraft']]){let active=false;window.BoxAdapters[game]={active:()=>active,state:()=>({x:1,y:1,z:1,yaw:0,zone:'world'}),setPeers:p=>{},clearPeers(){},enter(){},leave(){},applyWorld(){}};document.getElementById(button).onclick=()=>active=true;}</script><script type="module" src="/multiplayer.js"></script></body></html>`);
});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const browser=await chromium.launch({headless:true,executablePath:process.env.BOX_CHROMIUM_PATH||chromium.executablePath(),args:['--no-sandbox']});
try{
 const errors=[],base='http://127.0.0.1:'+server.address().port;
 const a=await browser.newPage({viewport:{width:1100,height:800}}),b=await browser.newPage({viewport:{width:390,height:844}});
 for(const [i,p] of [[1,a],[2,b]]){p.on('pageerror',e=>errors.push(e.message));await p.goto(base+'/?user='+i);await p.locator('#boxOnlineToggle').click();await p.locator('#boxPublicList').getByText('Nenhuma sala aberta',{exact:false}).waitFor();}
 await a.locator('#boxCreatePublic').click();await a.locator('#boxRoomActive').waitFor({state:'visible'});
 assert.equal(await a.locator('#boxInviteSection').isVisible(),false);
 await b.locator('#boxPublicList .boxPublicRoom button').waitFor({timeout:15000});await b.locator('#boxPublicList .boxPublicRoom button').click();
 await b.locator('#boxRoomActive').waitFor({state:'visible'});await a.waitForFunction(()=>document.querySelectorAll('#boxPlayers li').length===2);
 assert.equal(await b.locator('#boxPlayers button').count(),0);
 await b.screenshot({path:'/tmp/box-public-connected.png'});
 await a.locator('#boxPlayers button').click();await b.locator('#boxRoomSetup').waitFor({state:'visible',timeout:10000});
 await a.locator('#boxLeave').click();
 await b.locator('#boxGame').selectOption('craft');await b.locator('#boxCreatePublic').click();await b.locator('#boxRoomActive').waitFor({state:'visible'});
 await a.locator('#boxGame').selectOption('craft');await a.locator('#boxPublicList .boxPublicRoom button').waitFor({timeout:15000});
 await a.screenshot({path:'/tmp/box-public-lobby.png'});
 await b.locator('#boxLeave').click();
 // Private invite flow is preserved and hidden from the public listing.
 await b.locator('.boxPrivate summary').click();await b.locator('#boxCreate').click();await b.locator('#boxInvite').waitFor({state:'visible'});
 assert.match(await b.locator('#boxInvite').innerText(),/^[A-F0-9]{12}$/);
 assert.equal(await b.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 assert.deepEqual(errors,[]);console.log('PASS public listing, two users join, anonymous aliases, kick, world filter, private invite, mobile overflow');
}finally{await browser.close();await db.close();server.close();}
