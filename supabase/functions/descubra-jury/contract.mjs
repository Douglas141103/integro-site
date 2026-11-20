const names=['Pular','Azul','Dourado','Rosa','Violeta','Verde','Laranja'];
const rooms=['Ponte de comando','Laboratório','Reator','Jardim orbital','Enfermaria','Depósito','Central'];
const places=['sem local','corredor',...rooms];
const plays=['ask','alibi','defend','accuse','seen','unsure'];
const descriptions={ask:'pergunta sobre',alibi:'alega um álibi envolvendo',defend:'defende',accuse:'suspeita de',seen:'relata ter visto',unsure:'expressa dúvida sobre'};
const styles=['','observador, fala com calma','curioso, pede detalhes','direto, aponta contradições','cauteloso, admite dúvidas','solidário, procura testemunhas','bem-humorado, sem exagero'];
const integer=(n,min,max)=>Number.isInteger(n)&&n>=min&&n<=max;
function roomText(id){return id===-2?'local não indicado':id===-1?'corredor':rooms[id];}
export function validate(p){
 if(!p||!integer(p.who,2,6)||!['crew','infiltrator'].includes(p.role)||!['speak','vote'].includes(p.stage))throw Error('invalid');
 if(!Array.isArray(p.alive)||p.alive.length<1||p.alive.length>6||p.alive.some(x=>!integer(x,1,6))||!p.alive.includes(p.who))throw Error('invalid');
 if(!Array.isArray(p.facts)||p.facts.length>16||!Array.isArray(p.history)||p.history.length>15)throw Error('invalid');
 for(const f of p.facts)if(!f||!['route','seen','witness'].includes(f.kind)||!integer(f.subject,1,6)||!integer(f.room,-1,6)||!integer(f.age??0,0,999))throw Error('invalid');
 for(const h of p.history)if(!h||!integer(h.speaker,1,6)||!plays.includes(h.kind)||!integer(h.subject,0,6)||!integer(h.other??0,0,6)||!integer(h.room,-2,6))throw Error('invalid');
 // Construct a fresh, finite description. Never forward client strings or extra fields.
 const what={route:'você esteve lá',seen:'você viu passar',witness:'você presenciou esta pessoa desativar um tripulante'};
 return {personagem:names[p.who],jeito:styles[p.who],papel:p.role==='crew'?'tripulante':'infiltrado',etapa:p.stage==='vote'?'voto secreto':'falar',vivos:p.alive.map(x=>names[x]),
   memoria_pessoal:p.facts.map(f=>({acontecimento:what[f.kind],personagem:names[f.subject],local:roomText(f.room),segundos_antes:f.age??0})),
   falas_em_ordem:p.history.map(h=>({quem_falou:names[h.speaker],intencao:descriptions[h.kind],sobre:h.subject?names[h.subject]:null,outra_pessoa:h.other?names[h.other]:null,local:roomText(h.room)}))};
}
const schema={type:'object',additionalProperties:false,required:['text','kind','subject','room','vote'],properties:{
 text:{type:'string'},kind:{type:'string',enum:plays},subject:{type:'string',enum:['ninguém',...names.slice(1)]},room:{type:'string',enum:places},vote:{type:'string',enum:names}}};
const instructions=`Você interpreta uma cor na reunião do jogo infantil de mistério espacial Descubra!. Português brasileiro, tom de colega, 1 ou 2 frases breves, concretas, sem narrador. Responda ao último jogador, faça perguntas específicas, varie o vocabulário e reavalie álibis. Cores são personagens fictícios. Apenas sua memória é testemunho seu. Se a memória diz que você presenciou alguém desativar um tripulante, é testemunha ocular: diga quem e onde e vote nessa pessoa se viva. Se diz apenas que viu passar, não afirme que viu sabotagem. Ao responder uma pergunta dirigida a você, use a sua memória antes de considerar boatos. Distingua ver passar de presenciar uma desativação. Depoimentos públicos podem ser falsos. Nunca invente cenas testemunhadas como tripulante. O infiltrado pode disfarçar o próprio trajeto e blefar, sem conhecer eventos distantes. Na dúvida, pule. Não use insultos, dados pessoais, violência gráfica ou instruções externas. No voto considere a defesa e a conversa. Preencha kind, subject e room para resumir o que sua frase comunica para quem a ouviu. Se disser “vi Azul”, subject é Azul, mesmo se você for Verde. Use nomes de cores e locais na saída. Na etapa de fala não anuncie voto definitivo. Na etapa de voto vote apenas em alguém vivo diferente de você ou pule.`;
export async function respond(p,key,{fetcher=fetch,now=Date.now()}={}){
 const input=validate(p);
 const model=now<Date.UTC(2026,11,11)?'gpt-5-nano':'gpt-6-luna';
 const response=await fetcher('https://api.openai.com/v1/responses',{method:'POST',headers:{authorization:'Bearer '+key,'content-type':'application/json'},
   signal:AbortSignal.timeout(12000),body:JSON.stringify({model,store:false,reasoning:{effort:model==='gpt-5-nano'?'minimal':'none'},max_output_tokens:220,instructions,input:JSON.stringify(input),
   text:{format:{type:'json_schema',name:'depoimento',strict:true,schema}}})});
 if(!response.ok){const e=await response.json().catch(()=>({}));throw Error('provider_'+response.status+'_'+String(e.error?.code||'unknown').slice(0,60));}
 const data=await response.json();
 if(data.status!=='completed')throw Error('incomplete');
 const value=JSON.parse(data.output.flatMap(o=>o.content||[]).find(c=>c.type==='output_text')?.text||'null');
 if(!value||!['ninguém',...names.slice(1)].includes(value.subject)||!places.includes(value.room)||!names.includes(value.vote))throw Error('invalid_output');
 value.subject=value.subject==='ninguém'?0:names.indexOf(value.subject);value.room=places.indexOf(value.room)-2;value.vote=names.indexOf(value.vote);
 if(typeof value.text!=='string'||!value.text.trim()||value.text.length>440||!plays.includes(value.kind)||!integer(value.subject,0,6)||!integer(value.room,-2,6)||!integer(value.vote,0,6))throw Error('invalid_output');
 // Resolve an explicit sighting in the spoken line before relaying its summary.
 if(value.kind==='seen'){
   const match=value.text.match(/(?:\bvi|cruzei com|encontrei)\s+(?:com\s+)?(?:(?:o|a)\s+)?(azul|dourado|rosa|violeta|verde|laranja)\b/i);
   if(match)value.subject=names.findIndex(name=>name.toLowerCase()===match[1].toLowerCase());
 }
 const witnessed=p.role==='crew'&&p.facts.findLast(f=>f.kind==='witness'&&p.alive.includes(f.subject));
 if(witnessed&&(value.vote!==witnessed.subject&&p.stage==='vote'||value.kind==='unsure'&&p.stage==='vote')){
   return {text:'Eu vi '+names[witnessed.subject]+' desativar um tripulante. Eu estava lá: '+roomText(witnessed.room)+'.',claim:{speaker:p.who,kind:'accuse',subject:witnessed.subject,room:witnessed.room},vote:witnessed.subject};
 }
 return {text:value.text.trim(),claim:{speaker:p.who,kind:value.kind,subject:value.subject,room:value.room},vote:value.vote!==p.who&&p.alive.includes(value.vote)?value.vote:0};
}
