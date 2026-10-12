// Local-only test server with synthetic accounts and isolated PostgreSQL.
import fs from 'node:fs';import http from 'node:http';import path from 'node:path';import {createRequire} from 'node:module';
import {usageDatabase} from '../tests/box-usage-fixture.mjs';import {uid} from '../tests/box-db-fixture.mjs';
const require=createRequire(import.meta.url),{chromium}=require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES+'/playwright');
const f=await usageDatabase(),root=process.cwd();let queue=Promise.resolve(),holdReport=false,releaseReport;
for(const [i,g] of ['craft','egg','bairro','math','words','memory'].entries()){
 await f.pulse(3,300+i,g);await f.db.query('update private.box_usage_spans set active_seconds=$1::numeric,connected_seconds=$1::numeric+200 where session_id=$2',[600+i*420,uid(300+i)]);
 await f.pulse(3,300+i,g,false,false,null,'end');
}
const server=http.createServer(async(req,res)=>{
 const u=new URL(req.url,'http://local'),route=u.pathname;
 if(route==='/integro-box/access.js'){
  const user=Number(req.headers['x-test-user']||1);const role=user===1?'integro_admin':user===2?'diretor':'responsavel';
  res.setHeader('Content-Type','text/javascript');res.end(`let callback;export const requireFamily=async()=>({id:'${uid(user)}'});export const supabase={auth:{async getUser(){return {data:{user:{id:'${uid(user)}'}}}},onAuthStateChange(cb){callback=cb;window.testLogout=()=>cb('SIGNED_OUT',null)},async signOut(){callback?.('SIGNED_OUT',null)}},from(){return {select(){return {eq(){return {async single(){return {data:{role:'${role}',full_name:'Gestão de demonstração'}}}}}}}}},async rpc(name,args){return fetch('/test-rpc',{method:'POST',body:JSON.stringify({user:${user},name,args})}).then(r=>r.json())}};`);return;
 }
 if(route==='/test-rpc'){
  let raw='';for await(const chunk of req)raw+=chunk;const {user,name,args}=JSON.parse(raw);
  if(name==='box_usage_report'&&holdReport){holdReport=false;await new Promise(resolve=>releaseReport=resolve);}
  queue=queue.then(async()=>{try{
   const data=await f.db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query("select set_config('test.uid',$1,true)",[uid(user)]);
    const params=name==='box_usage'?[args.p_session,args.p_action,args.p_game,args.p_active,args.p_visible,args.p_room,args.p_device]:[args.p_from,args.p_to,args.p_user,args.p_game,args.p_mode,args.p_page];
    const fn=name==='box_usage'?'box_usage':'box_usage_report';
    return (await tx.query('select public.'+fn+'('+params.map((_,i)=>'$'+(i+1)).join(',')+') result',params)).rows[0].result;
   });res.end(JSON.stringify({data,error:null}));
  }catch(e){res.end(JSON.stringify({data:null,error:{code:e.code,message:e.message}}));}});return;
 }
 if(route==='/site-release.json'){res.end('{"version":"20261012-box4","maintenance":false}');return;}
 try{let data=fs.readFileSync(path.join(root,route));if(route==='/integro-box/usage.js')data=Buffer.from(data.toString().replace('setInterval(check,30000)','setInterval(check,1100)'));
  res.setHeader('Content-Type',route.endsWith('.js')?'text/javascript':route.endsWith('.css')?'text/css':route.endsWith('.png')?'image/png':route.endsWith('.jpg')?'image/jpeg':'text/html');res.end(data);
 }catch{res.statusCode=404;res.end('not found');}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base='http://127.0.0.1:'+server.address().port;
const browser=await chromium.launch({headless:true,executablePath:process.env.BOX_CHROMIUM_PATH,args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const errors=[];
try{
 const context=await browser.newContext({viewport:{width:1440,height:1000},extraHTTPHeaders:{'x-test-user':'1'}});const admin=await context.newPage();admin.on('pageerror',e=>errors.push(e.message));
 await admin.goto(base+'/portal/integro-box.html');await admin.waitForFunction(()=>document.querySelector('#sessionsCount').textContent==='6');
 await admin.screenshot({path:'/tmp/integro-box-gestao-desktop.png',fullPage:false});
 await admin.locator('#game').selectOption('craft');await admin.locator('#filters button').click();await admin.waitForFunction(()=>document.querySelector('#sessionsCount').textContent==='1');
 await admin.locator('#sessions summary').click();await admin.locator('#sessions table').waitFor();
 const mobile=await context.newPage({viewport:{width:390,height:844}}).catch(()=>null);
 if(mobile){await mobile.setViewportSize({width:390,height:844});await mobile.goto(base+'/portal/integro-box.html');await mobile.waitForFunction(()=>document.querySelector('#sessionsCount').textContent==='6');await mobile.screenshot({path:'/tmp/integro-box-gestao-mobile.png',fullPage:true});if(await mobile.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Mobile overflow');}
 // A late response must never repaint private information after logout.
 holdReport=true;await admin.locator('#refresh').click();await admin.waitForTimeout(150);await admin.evaluate(()=>window.testLogout());releaseReport();await admin.waitForTimeout(300);
 if(await admin.locator('#management').isVisible()||await admin.locator('#people tr').count())throw Error('Logout leaked report');
 const famContext=await browser.newContext({extraHTTPHeaders:{'x-test-user':'3'}});const family=await famContext.newPage();family.on('pageerror',e=>errors.push(e.message));
 await family.goto(base+'/portal/integro-box.html');await family.getByText('Esta área é exclusiva de administradores e diretores.').waitFor();
 await family.goto(base+'/integro-box/jogar.html');await family.waitForFunction(()=>window.BoxUsage);await family.locator('[data-game="math"]').click();await family.waitForTimeout(1600);
 const tracked=(await f.db.query('select game from private.box_usage_sessions where user_id=$1 order by started_at desc limit 1',[uid(3)])).rows[0];if(tracked.game!=='math')throw Error('Game not tracked: '+JSON.stringify(tracked));
 if(errors.length)throw Error(errors.join('\n'));console.log('PASS: dashboard filters, history, mobile, late-response logout, denied family and live game tracking');
}finally{await browser.close();server.close();await f.db.close();}
