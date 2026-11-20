import {createClient} from 'npm:@supabase/supabase-js@2.49.8';
import {validate,respond} from './contract.mjs';
const origins=new Set(['https://www.institutointegro.com.br','https://institutointegro.com.br']);
Deno.serve(async req=>{
 const origin=req.headers.get('origin')||'';
 const headers={'Content-Type':'application/json','Cache-Control':'no-store','Vary':'Origin',
   'Access-Control-Allow-Headers':'authorization, apikey, x-client-info, content-type','Access-Control-Allow-Methods':'POST, OPTIONS',...(origins.has(origin)?{'Access-Control-Allow-Origin':origin}:{})};
 const reply=(obj:unknown,status=200)=>new Response(JSON.stringify(obj),{status,headers});
 if(origin&&!origins.has(origin))return reply({error:'origin'},403);
 if(req.method==='OPTIONS')return new Response(null,{status:204,headers});
 if(req.method!=='POST')return reply({error:'method'},405);
 const key=Deno.env.get('OPENAI_API_KEY');if(!key)return reply({error:'unavailable'},503);
 const authorization=req.headers.get('authorization')||'';
 if(!/^Bearer \S+$/i.test(authorization))return reply({error:'login'},401);
 const client=createClient(Deno.env.get('SUPABASE_URL')!,Deno.env.get('SUPABASE_ANON_KEY')!,{global:{headers:{Authorization:authorization}},auth:{persistSession:false}});
 const {data,error}=await client.auth.getUser();if(error||!data.user)return reply({error:'login'},401);
 if(Number(req.headers.get('content-length')||0)>8192)return reply({error:'invalid'},400);
 let payload;
 try{const raw=await req.text();if(raw.length>8192)throw Error();payload=JSON.parse(raw);validate(payload);}catch{return reply({error:'invalid'},400);}
 const {data:allowed,error:denied}=await client.rpc('descubra_jury_reserve');if(denied||!allowed)return reply({error:'limit'},429);
 try{return reply(await respond(payload,key));}catch(e){console.warn('descubra-jury',e instanceof Error&&/^(provider_\w+|incomplete)$/.test(e.message)?e.message:'unavailable');return reply({error:'unavailable'},503);}
});
