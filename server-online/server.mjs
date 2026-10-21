import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {createHmac} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';

export function livekitToken(config, identity, grant, name='') {
 const now=Math.floor(Date.now()/1000);
 const header=Buffer.from(JSON.stringify({alg:'HS256',typ:'JWT'})).toString('base64url');
 const payload=Buffer.from(JSON.stringify({iss:config.apiKey,sub:identity,nbf:now-5,exp:now+120,name,video:grant})).toString('base64url');
 const signature=createHmac('sha256',config.apiSecret).update(header+'.'+payload).digest('base64url');
 return header+'.'+payload+'.'+signature;
}
export function participantGrant(context) {
 return {room:context.room,roomJoin:true,canSubscribe:true,canPublish:true,canPublishData:false,canUpdateOwnMetadata:false,
 canPublishSources:context.is_teacher?['camera','microphone','screen_share','screen_share_audio']:['camera','microphone']};
}
const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export function createApp(config, overrides={}) {
 const fetcher=overrides.fetch||fetch;
 const rates=new Map();
 let queue=Promise.resolve();
 async function rpc(token,action,data){
  const response=await fetcher(config.supabaseUrl+'/rest/v1/rpc/online_portal',{method:'POST',headers:{apikey:config.publishableKey,Authorization:'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify({p_action:action,p_data:data}),signal:AbortSignal.timeout(12000)});
  const value=await response.json();
  if(!response.ok)throw Object.assign(new Error(value.message||'Acesso não autorizado.'),{status:403});
  return value;
 }
 async function rtc(method,body={}){
  const token=livekitToken(config,'server',{roomCreate:true,roomList:true,roomAdmin:true,room:body.room||body.name||''});
  const response=await fetcher(config.livekitInternal+'/twirp/livekit.RoomService/'+method,{method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify(body),signal:AbortSignal.timeout(8000)});
  if(!response.ok){if(method==='DeleteRoom'&&response.status===404)return {};throw Object.assign(new Error('O servidor de vídeo não respondeu. Verifique se ele está ligado.'),{status:503});}
  return response.json();
 }
 const handler=async(req,res)=>{
  const origin=req.headers.origin;
  const cors=origin&&config.allowedOrigins.includes(origin);
  res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');
  if(origin&&!cors){res.writeHead(403);res.end();return;}
  if(cors){res.setHeader('Access-Control-Allow-Origin',origin);res.setHeader('Vary','Origin');res.setHeader('Access-Control-Allow-Headers','authorization,content-type');res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS');}
  const send=(status,data)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8'});res.end(JSON.stringify(data));};
  if(req.method==='OPTIONS'){res.writeHead(204);res.end();return;}
  const path=new URL(req.url,'http://localhost').pathname;
  try {
   if(req.method==='GET'&&path==='/api/health'){
    await rtc('ListRooms');send(200,{ok:true,maxStudents:4});return;
   }
   if(req.method!=='POST'||!['/api/start','/api/join','/api/end'].includes(path)){send(404,{error:'Não encontrado.'});return;}
   const token=req.headers.authorization?.match(/^Bearer (\S+)$/)?.[1];
   if(!token){send(401,{error:'Entre com sua conta do portal.'});return;}
   if(rates.size>10000) rates.clear();
   const key=createHmac('sha256',config.apiSecret).update(token).digest('hex');const now=Date.now();
   const rate=rates.get(key)||{time:now,count:0};if(now-rate.time>60000){rate.time=now;rate.count=0;}rates.set(key,rate);
   if(++rate.count>30){send(429,{error:'Aguarde um momento antes de tentar novamente.'});return;}
   let raw='';for await(const chunk of req){raw+=chunk;if(Buffer.byteLength(raw)>4096){send(413,{error:'Solicitação muito grande.'});return;}}
   let body;try{body=JSON.parse(raw);}catch{send(400,{error:'Solicitação inválida.'});return;}
   if(!uuid.test(body.lesson_id||'')||(body.student_id&&!uuid.test(body.student_id))){send(400,{error:'Aula ou aluno inválido.'});return;}
   const context=await rpc(token,path==='/api/end'?'end_context':'join_context',body);
   // Serialize room lifecycle so two start/join/end requests cannot race.
   const operation=queue.then(async()=>{
    if(path==='/api/end'){
     if(!context.is_teacher)throw Object.assign(new Error('Somente o professor pode encerrar a aula.'),{status:403});
     await rpc(token,'lesson_status',{lesson_id:body.lesson_id,status:'ended'});
     await rtc('DeleteRoom',{room:context.room});return {ok:true};
    }
    const current=await rpc(token,'join_context',body);
    const {rooms=[]}=await rtc('ListRooms');
    if(path==='/api/start'){
     if(!current.is_teacher)throw Object.assign(new Error('Somente o professor pode abrir a sala.'),{status:403});
     if(rooms.some(r=>r.name!==current.room))throw Object.assign(new Error('Há outra aula em andamento neste computador. Encerre-a primeiro.'),{status:409});
     if(!rooms.some(r=>r.name===current.room))await rtc('CreateRoom',{name:current.room,maxParticipants:5,emptyTimeout:900,departureTimeout:60,metadata:JSON.stringify({endsAt:current.ends_at,lessonId:body.lesson_id})});
     await rpc(token,'lesson_status',{lesson_id:body.lesson_id,status:'live'});
    }else if(current.status!=='live'||!rooms.some(r=>r.name===current.room)){
     throw Object.assign(new Error('Aguarde o professor abrir a sala.'),{status:409});
    }
    return {url:config.livekitPublic,token:livekitToken(config,current.identity,participantGrant(current),current.name),isTeacher:current.is_teacher};
   });
   queue=operation.catch(()=>{});send(200,await operation);
  }catch(error){send(error.status||503,{error:error.status?error.message:'Não foi possível conectar ao servidor das aulas. Tente novamente.'});}
 };
 return {handler,rtc};
}

if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const folder=resolve(process.argv[2]||fileURLToPath(new URL('./runtime',import.meta.url)));
 const config=JSON.parse((await readFile(resolve(folder,'server.json'),'utf8')).replace(/^\uFEFF/,''));
 if(!config.apiSecret||config.apiSecret.length<32)throw new Error('Execute setup.mjs primeiro.');
 const app=createApp(config);
 const server=http.createServer(app.handler);server.requestTimeout=20000;server.headersTimeout=10000;
 server.listen(config.apiPort||8787,'127.0.0.1',()=>console.log('Servidor das aulas pronto em http://127.0.0.1:8787/api/health'));
 const timer=setInterval(async()=>{
  try{const {rooms=[]}=await app.rtc('ListRooms');for(const room of rooms){
   const endsAt=JSON.parse(room.metadata||'{}').endsAt;if(endsAt&&Date.now()>Date.parse(endsAt))await app.rtc('DeleteRoom',{room:room.name});
  }}catch{/* next health check reports readiness; no credential or pupil data in logs */}
 },30000);timer.unref();
}
