export const ROOMS=[
 {id:0,name:'Ponte de comando',short:'COMANDO',x:375,y:25,w:250,h:145,color:'#527fb3',icon:'⌁',task:'Calibrar a rota'},
 {id:1,name:'Laboratório',short:'LABORATÓRIO',x:60,y:80,w:235,h:200,color:'#8061aa',icon:'⚗',task:'Separar amostras'},
 {id:2,name:'Reator',short:'REATOR',x:705,y:80,w:235,h:200,color:'#d39742',icon:'ϟ',task:'Estabilizar energia'},
 {id:3,name:'Jardim orbital',short:'JARDIM ORBITAL',x:60,y:400,w:235,h:200,color:'#478d75',icon:'♧',task:'Ativar irrigação'},
 {id:4,name:'Enfermaria',short:'ENFERMARIA',x:705,y:400,w:235,h:200,color:'#4a9caa',icon:'✚',task:'Ajustar scanner'},
 {id:5,name:'Depósito',short:'DEPÓSITO',x:375,y:510,w:250,h:145,color:'#ae7261',icon:'▦',task:'Ordenar cargas'},
 {id:6,name:'Central Integro',short:'CENTRAL INTEGRO',x:355,y:240,w:290,h:190,color:'#5e7590',icon:'◎',task:''}
];
export const COLORS=['#4dc5ed','#f5ba4c','#ec6682','#8f7ae2','#7dce85','#f08b52'];
export const NAMES=['Azul','Dourado','Rosa','Violeta','Verde','Laranja'];
export const neighbors=id=>id===6?[0,1,2,3,4,5]:[6];
export const initialPlayer=(i,bot=true)=>({slot:i+1,name:NAMES[i],bot,room:6,alive:true,done:[],vote:null,cooldown:0,meetingUsed:false});
export function initialState(now=0){return {phase:'play',players:Array.from({length:6},(_,i)=>initialPlayer(i)),traitor:1,progress:0,target:10,deadline:now+360,meetingEnd:0,sabotage:null,sabotageReady:now+30,killReady:now+22,lastTick:now,clues:[],reports:[],reason:'',winner:'',round:0};}
export function notice(s,text){s.clues.push(text);s.clues=s.clues.slice(-10);}
export function finish(s,winner,reason){s.phase='ended';s.winner=winner;s.reason=reason;}
export function checkWin(s,now){if(s.phase==='ended')return;if(!s.players[s.traitor-1].alive)finish(s,'crew','O infiltrado foi descoberto!');else if(s.progress>=s.target)finish(s,'crew','Todos os sistemas essenciais estão prontos!');else if(s.players.filter(p=>p.alive).length<=2)finish(s,'infiltrator','O infiltrado dominou a nave.');else if(s.sabotage&&now>=s.sabotage.until)finish(s,'infiltrator','O reator não foi reparado a tempo.');else if(now>=s.deadline)finish(s,'infiltrator','O tempo da missão terminou.');}
export function meeting(s,now,report=false){s.phase='meeting';s.meetingEnd=now+25;s.round++;s.sabotage=null;s.players.forEach(p=>p.vote=null);notice(s,report?'Tripulante desativado encontrado. Reunião de emergência!':'Reunião na Central Integro. Compare as pistas antes de votar.');}
export function resolveVote(s,now,random=Math.random){
 const alive=s.players.filter(p=>p.alive),votes={};
 for(const p of alive){if(p.bot&&p.vote===null){const suspects=alive.filter(q=>q.slot!==p.slot);p.vote=random()<.25?0:(random()<.55&&s.reports.length&&p.slot!==s.traitor?s.traitor:suspects[Math.floor(random()*suspects.length)].slot);}if(p.vote!==null)votes[p.vote]=(votes[p.vote]||0)+1;}
 const ranked=Object.entries(votes).sort((a,b)=>b[1]-a[1]);let out=0;
 if(ranked.length&&ranked[0][0]!=='0'&&(!ranked[1]||ranked[0][1]>ranked[1][1]))out=Number(ranked[0][0]);
 if(out){s.players[out-1].alive=false;notice(s,NAMES[out-1]+' foi enviado à cápsula de segurança.');}else notice(s,'Votação empatada ou pulada. Ninguém saiu.');
 s.phase='play';s.killReady=now+18;s.sabotageReady=now+25;s.players.forEach(p=>p.room=6);checkWin(s,now);
}
export function action(s,slot,type,arg={},now=0){
 const p=s.players[slot-1];if(!p||s.phase==='ended')return false;
 if(type==='vote'&&s.phase==='meeting'&&p.alive&&p.vote===null){const target=Number(arg.target);if(target!==0&&!s.players.some(q=>q.slot===target&&q.alive))return false;p.vote=target;return true;}
 if(s.phase!=='play'||!p.alive)return false;
 if(type==='move'){const room=Number(arg.room);if(!neighbors(p.room).includes(room)||now<p.cooldown)return false;p.room=room;p.cooldown=now+1;return true;}
 if(type==='task'&&p.room!==6&&!p.done.includes(p.room)&&slot!==s.traitor){p.done.push(p.room);s.progress++;checkWin(s,now);return true;}
 if(type==='repair'&&s.sabotage&&p.room===2){s.sabotage=null;notice(s,p.name+' restabeleceu a energia do reator.');return true;}
 if(type==='sabotage'&&slot===s.traitor&&!s.sabotage&&now>=s.sabotageReady){s.sabotage={until:now+45};s.sabotageReady=now+65;notice(s,'Alerta: sabotagem! Vá ao REATOR e estabilize a energia.');return true;}
 if(type==='stun'&&slot===s.traitor&&now>=s.killReady){const q=s.players.find(q=>q.slot===Number(arg.target)&&q.alive&&q.slot!==slot&&q.room===p.room);if(!q)return false;q.alive=false;s.killReady=now+25;s.reports.push({slot:q.slot,room:q.room,reported:false});const decoy=(slot%6)+1;notice(s,'Sensor: '+p.name+' ou '+NAMES[decoy-1]+' passou perto de '+ROOMS[p.room].name+'.');checkWin(s,now);return true;}
 if(type==='report'){const r=s.reports.find(r=>!r.reported&&r.room===p.room);if(!r)return false;r.reported=true;meeting(s,now,true);return true;}
 if(type==='meeting'&&p.room===6&&!p.meetingUsed){p.meetingUsed=true;meeting(s,now);return true;}
 return false;
}
export function tick(s,now,random=Math.random){
 if(s.phase==='ended')return;checkWin(s,now);if(s.phase==='ended')return;
 if(s.phase==='meeting'){if(now>=s.meetingEnd||s.players.filter(p=>p.alive&&!p.bot).every(p=>p.vote!==null))resolveVote(s,now,random);return;}
 if(now-s.lastTick<5)return;s.lastTick=now;
 for(const p of s.players.filter(p=>p.bot&&p.alive)){
  if(s.phase!=='play')break;
  if(p.slot===s.traitor){const q=s.players.find(q=>q.alive&&q.slot!==p.slot&&q.room===p.room);if(q&&now>=s.killReady){action(s,p.slot,'stun',{target:q.slot},now);}else if(now>=s.sabotageReady&&random()<.2)action(s,p.slot,'sabotage',{},now);}
  else {if(s.reports.some(r=>!r.reported&&r.room===p.room)&&random()<.55){action(s,p.slot,'report',{},now);break;}if(s.sabotage&&p.room===2&&random()<.3)action(s,p.slot,'repair',{},now);else if(random()<.20)action(s,p.slot,'task',{},now);}
  if(random()<.7){let options=neighbors(p.room);if(s.sabotage&&p.room===6&&p.slot!==s.traitor&&random()<.7)options=[2];action(s,p.slot,'move',{room:options[Math.floor(random()*options.length)]},now);}
 }
 checkWin(s,now);
}
export class SoloGame{
 constructor(role='crew',random=Math.random){this.random=random;this.time=0;this.state=initialState();this.state.players[0].bot=false;this.state.traitor=role==='infiltrator'?1:2+Math.floor(random()*5);notice(this.state,'Missão iniciada. Observe os trajetos e complete as tarefas.');}
 act(type,arg={}){return action(this.state,1,type,arg,this.time);}
 update(dt){this.time+=Math.min(dt,1);tick(this.state,this.time,this.random);}
 view(){return publicView(this.state,1,this.time);}
}
export function publicView(s,slot,now){const {traitor,...rest}=s;return {...structuredClone(rest),slot,role:slot===traitor?'infiltrator':'crew',now,reveal:s.phase==='ended'?traitor:null};}
