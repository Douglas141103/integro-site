import {createRequire} from 'node:module';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
// Local-only verification: isolated database and synthetic accounts. Never serves production auth.
const root=process.cwd();
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES?process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES+'/playwright':'playwright');
const {boxDatabase}=await import(root+'/tests/box-db-fixture.mjs');
const {db,call}=await boxDatabase();
const errors=[];
let queue=Promise.resolve();
const server=http.createServer(async(req,res)=>{
 const url=new URL(req.url,'http://local');const route=url.pathname;
 if(route==='/integro-box/access.js'){
  const user=Number(req.headers['x-box-test-user']||1);
  res.setHeader('Content-Type','text/javascript');res.end(`export const requireFamily=async()=>({id:'test-family-${user}'});export const supabase={auth:{onAuthStateChange(){},async signOut(){}},async rpc(name,args){return fetch('/test-rpc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({user:${user},args})}).then(r=>r.json())}};`);return;
 }
 if(route==='/test-rpc'){
  let raw='';for await(const part of req)raw+=part;
  const {user,args}=JSON.parse(raw);
  queue=queue.then(async()=>{try {const data=await call(user,args.p_action,args);res.end(JSON.stringify({data,error:null}));}catch(e){res.end(JSON.stringify({data:null,error:{message:e.message}}));}});return;
 }
 try{const f=path.join(root,route.endsWith('/')?route+'index.html':route);const data=fs.readFileSync(f);res.setHeader('Content-Type',route.endsWith('.js')?'text/javascript':route.endsWith('.css')?'text/css':route.endsWith('.png')?'image/png':route.endsWith('.jpg')?'image/jpeg':'text/html');res.end(data);}catch{res.statusCode=404;res.end('not found');}
});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const base=`http://127.0.0.1:${server.address().port}`;
const browser=await chromium.launch({headless:true,executablePath:process.env.BOX_CHROMIUM_PATH||chromium.executablePath(),args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const pages=[];
try {
 for(const n of [1,2]){
  const context=await browser.newContext({viewport:{width:1100,height:770},extraHTTPHeaders:{'x-box-test-user':String(n)}});
  const page=await context.newPage();page.on('pageerror',e=>{errors.push(e.message);console.log('PAGEERROR',e.message)});
  await page.goto(base+'/integro-box/jogar.html');
  await page.waitForFunction(()=>window.BoxMultiplayer,{timeout:30000});pages.push(page);
 }
 const [a,b]=pages;
 for(const [game,button] of [['egg','playEggGame'],['bairro','playDollGame'],['craft','playCraft']]){
  console.log('START',game);
  await a.locator('#boxOnlineToggle').click();await a.locator('#boxGame').selectOption(game);await a.locator('#boxCreate').click();
  await a.locator('#boxInvite').waitFor({state:'visible',timeout:60000}).catch(async e=>{console.log('STATUS',await a.locator('#boxOnlineStatus').innerText());throw e});
  const code=await a.locator('#boxInvite').innerText();
  await b.locator('#boxOnlineToggle').click();await b.locator('#boxCode').fill(code);await b.locator('#boxJoinForm button').click();
  await b.locator('#boxInvite').waitFor({state:'visible',timeout:60000});
  await a.waitForFunction(()=>document.querySelectorAll('#boxPlayers li').length===2,{timeout:30000});
  for(const page of pages) await page.locator('#boxOnlineClose').click();
  // Close the game's introductory panel through its visible control.
  for(const page of pages){
   const sel={egg:'#eggCloseSheet',bairro:'#dollClosePanel',craft:'#craftClose'}[game];
   if(await page.locator(sel).isVisible())await page.locator(sel).click();
  }
  if(game==='bairro')for(const page of pages){if(await page.locator('[data-avatar-pick]').count())await page.locator('[data-avatar-pick]').first().click();if(await page.locator('#dollClosePanel').isVisible())await page.locator('#dollClosePanel').click();if(await page.locator('#dollExitPlace').isVisible())await page.locator('#dollExitPlace').click();}
  const before=await a.evaluate(g=>window.BoxAdapters[g].state(),game);
  await a.keyboard.down('w');await a.waitForTimeout(650);await a.keyboard.up('w');await a.waitForTimeout(1400);
  const after=await a.evaluate(g=>window.BoxAdapters[g].state(),game);
  console.log('MOVEMENT',game,JSON.stringify({before,after}));
  if(before.x===after.x&&before.z===after.z)throw new Error('Player did not move');
  const both=await b.evaluate(g=>({active:window.BoxAdapters[g].active(),peers:window.BoxAdapters[g].scene().children.filter(n=>n.children?.some(c=>c.isSprite && c.position.y===2.05)).map(n=>({visible:n.visible,position:n.position.toArray()}))}),game);
  console.log('PEERS',game,JSON.stringify(both));
  if(!both.active||!both.peers.length)throw new Error('No remote avatar: '+game);
  // In-world preview uses actual game pixels; no account identity is shown.
  if(game==='bairro')await a.locator('#dollCamera').click();
  await a.waitForTimeout(1000);
  await a.screenshot({path:'/tmp/box-'+game+'.png'});
  const canvas=game==='egg'?'#eggCanvas':game==='bairro'?'#dollCanvas':'#craftCanvas';
  await a.locator(canvas).screenshot({path:'/tmp/'+game+'-preview.jpg',type:'jpeg',quality:82});
  if(game==='craft'){
   const state=await a.evaluate(()=>window.BoxAdapters.craft.state());
   const edit={x:Math.floor(state.x)+2,y:Math.floor(state.y),z:Math.floor(state.z),block:7};
   await a.evaluate(e=>window.BoxMultiplayer.edit(e),edit);
   await a.waitForTimeout(1500);
   const worlds=await Promise.all(pages.map(p=>p.evaluate(()=>window.IntegroCraft.getState().edits)));
   console.log('CRAFT_SHARED',JSON.stringify(worlds));
   if(JSON.stringify(worlds[0])!==JSON.stringify(worlds[1])||!worlds[0].length)throw new Error('Worlds did not sync');
  }
  await a.locator('#boxOnlineToggle').click();await a.locator('#boxLeave').click();await a.locator('#boxOnlineClose').click();
  await b.waitForFunction(()=>!window.BoxMultiplayer.connected,{timeout:10000});
 }
 console.log('ERRORS',JSON.stringify(errors));if(errors.length)throw new Error('JS errors');
 const publicPage=await browser.newPage({viewport:{width:390,height:844}});
 await publicPage.goto(base+'/integro-box/');await publicPage.screenshot({path:'/tmp/box-landing-mobile.png',fullPage:true});
 console.log('MOBILE_OVERFLOW',await publicPage.evaluate(()=>document.documentElement.scrollWidth>innerWidth));
}finally{await browser.close();await db.close();server.close();}
