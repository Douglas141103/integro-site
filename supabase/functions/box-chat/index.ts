import {createClient} from 'npm:@supabase/supabase-js@2.49.8';
import {normalizeMessage,moderate} from './moderation.mjs';
const origins=new Set(['https://www.institutointegro.com.br','https://institutointegro.com.br']);
const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
Deno.serve(async request=>{
 const origin=request.headers.get('origin');
 const headers={'Content-Type':'application/json','Cache-Control':'no-store','Vary':'Origin','Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type','Access-Control-Allow-Methods':'POST, OPTIONS',...(origin&&origins.has(origin)?{'Access-Control-Allow-Origin':origin}:{})};
 const reply=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers});
 if(origin&&!origins.has(origin))return reply({error:'origin_not_allowed'},403);
 if(request.method==='OPTIONS')return new Response(null,{status:204,headers});
 if(request.method!=='POST')return reply({error:'method_not_allowed'},405);
 const key=Deno.env.get('OPENAI_API_KEY');
 if(!key)return reply({error:'moderation_unavailable'},503);
 const url=Deno.env.get('SUPABASE_URL')!,anon=Deno.env.get('SUPABASE_ANON_KEY')!,service=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
 const authorization=request.headers.get('authorization')||'';
 if(!/^Bearer\s+\S+$/i.test(authorization))return reply({error:'authentication_required'},401);
 const client=createClient(url,anon,{global:{headers:{Authorization:authorization}},auth:{persistSession:false}});
 const {data:auth,error:authError}=await client.auth.getUser();
 if(authError||!auth.user)return reply({error:'authentication_required'},401);
 let input;
 try{
  if(Number(request.headers.get('content-length')||0)>4096)throw new Error();
  const raw=await request.text();if(new TextEncoder().encode(raw).length>4096)throw new Error();
  input=JSON.parse(raw);
  if(!uuid.test(input.room)||!uuid.test(input.request)||(input.student!==null&&!uuid.test(input.student)))throw new Error();
  input.body=normalizeMessage(input.body);
 }catch{return reply({error:'invalid_request'},400);}
 const admin=createClient(url,service,{auth:{persistSession:false}});
 const params={p_user:auth.user.id,p_room:input.room};
 const {data:ticket,error}=await admin.rpc('box_chat_moderate',{...params,p_action:'reserve',p_student:input.student,p_request:input.request,p_body:input.body});
 if(error)return reply({error:'chat_not_available'},403);
 if(ticket.error)return reply({error:ticket.error},429);
 if(ticket.duplicate)return reply({status:ticket.status});
 let state='error',reason='provider_error';
 try{const result=await moderate(ticket,{key,model:Deno.env.get('BOX_CHAT_MODEL')||'gpt-4.1-mini'});state=result.allow?'approved':'blocked';reason=result.reason;}catch{/* Never publish on timeout, refusal, malformed output or provider failure. */}
 const {data:finished,error:finishError}=await admin.rpc('box_chat_moderate',{...params,p_action:'finish',p_message:ticket.id,p_status:state,p_reason:reason});
 if(finishError||finished?.status==='error')return reply({error:'moderation_unavailable'},503);
 return reply({status:finished.status});
});
