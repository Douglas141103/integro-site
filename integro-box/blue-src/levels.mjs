// Units are metres in the collision plane. y is the top of each platform.
const land=(a,b,y=0)=>({x:(a+b)/2,y,w:b-a,h:5,kind:'land'});
const step=(x,y,w=2.5)=>({x,y,w,h:.6,kind:'stone'});
const lift=(x,y,w,axis,amplitude,speed,phase=0)=>({x,y,w,h:.4,kind:'lift',axis,amplitude,speed,phase,oneWay:true});
const bridge=(a,b,group)=>({x:(a+b)/2,y:0,w:b-a,h:.25,kind:'bridge',group,oneWay:true});
const root=(x,w)=>({x,y:3.5,w,h:2.45,kind:'root'});
const seed=(x,y)=>({x,y});
const enemy=(a,b,y=0)=>({a,b,y});
const mark=(x,text)=>({x,text});
export const WORLDS=['Campos do Orvalho','Moinhos do Vento','Cavernas Prisma','Baía das Engrenagens','Forjas do Sol','Cidadela do Véu'];
export const LEVELS=[
 {id:0,name:'A primeira gota',subtitle:'O despertar da Nascente',length:126,spawn:{x:3,y:0},end:{x:121,y:0},
  intro:['Pip','Blue! O Véu apagou os faróis. Siga as sementes de luz: elas mostram o caminho.'],
  outro:['Pip','Você encontrou a marca da Nascente! Seu Pulso Azul pode fazer as pontes florescerem.'],
  platforms:[land(-4,24),step(12,.65,3),step(17,1.35,3),land(26,43),land(45.5,62),land(64,83),step(72,1.1,3),step(76,2.2,3),land(85.5,107),step(95,.9,3),land(109,132),
   {x:25,y:-2.2,w:4,h:.5,kind:'stone'},step(23,-1,1.5),{x:84.2,y:-1.5,w:4,h:.5,kind:'stone'}],
  seeds:[seed(17,2.05),seed(76,2.95),seed(104,.75)],
  enemies:[enemy(34,39),enemy(91,94)],checkpoints:[{x:47,y:0},{x:88,y:0}],switches:[],
  signs:[mark(3,'← → para andar · Pular: toque curto ou segure'),mark(10,'Segure Pular para alcançar o degrau mais alto.'),mark(21,'Olhe o pouso. Você pode voltar a subir se cair aqui.'),mark(31,'Salte sobre o Saltim para libertá-lo do Véu.'),mark(68,'Há uma semente lá em cima. Explore!')],theme:'meadow'},
 {id:1,name:'Pontes que florescem',subtitle:'A trilha de raízes luminosas',length:144,spawn:{x:3,y:0},end:{x:139,y:0},
  intro:['Tula','Chegue perto da espiral e use Pulso. A ponte fica acesa por quatro segundos. Você pode ativar de novo!'],
  outro:['Tula','As raízes despertaram! O moinho está logo adiante. Leve a luz até o jardim suspenso.'],
  platforms:[land(-4,18),bridge(18,25,'a'),land(25,43),step(32,1.2,3),bridge(43,50,'b'),land(50,58),bridge(58,65,'c'),land(65,85),step(75,1.3,3),land(87.5,105),bridge(105,112,'d'),land(112,120),bridge(120,127,'e'),land(127,150)],
  switches:[{x:16,y:0,group:'a'},{x:41,y:0,group:'b'},{x:56,y:0,group:'c'},{x:103,y:0,group:'d'},{x:118,y:0,group:'e'}],
  seeds:[seed(32,1.95),seed(75,2.05),seed(123.5,.85)],enemies:[enemy(34,38),enemy(94,99),enemy(132,135)],checkpoints:[{x:29,y:0},{x:68,y:0},{x:114,y:0}],
  signs:[mark(10,'Espiral perto? Use Pulso ✧ para acender a ponte.'),mark(37,'A ponte pisca antes de apagar. Pare na ilha para descansar.'),mark(69,'Seu Pulso também atordoa os pequenos guardiões.'),mark(113,'Uma ilha segura entre as duas pontes.')],theme:'grove'},
 {id:2,name:'O moinho adormecido',subtitle:'O jardim sobre as nuvens',length:130,spawn:{x:3,y:0},end:{x:125,y:2},
  intro:['Pip','As plataformas do moinho ainda se movem. Espere a aproximação, suba e siga o jardim!'],
  outro:['Pip','Bront está preso ao Véu! Espere a rolagem terminar e use o Pulso na raiz luminosa.'],
  platforms:[land(-4,18),lift(21,0,3,'x',2.2,1),land(24,40),root(33,5),land(42,57),step(49,1.1,3),lift(60,1,3.8,'y',1,1.1,-Math.PI/2),land(63,78,2),lift(82,2,3.6,'x',2.1,.8),land(86,101,2),step(94,3.1,3),lift(104,1.1,3.5,'y',.9,1.2),land(107,114),bridge(114,120,'garden'),land(120,135,2),step(119,1,2.5)],
  switches:[{x:112,y:0,group:'garden'}],seeds:[seed(35,.65),seed(94,3.85),seed(122,2.75)],enemies:[enemy(46,48),enemy(89,92,2)],checkpoints:[{x:43,y:0},{x:67,y:2},{x:109,y:0}],
  signs:[mark(12,'A plataforma vem até você. Espere, pule e acompanhe.'),mark(29,'Segure ↓ Agachar para passar sob a raiz.'),mark(53,'Suba no elevador quando ele estiver baixo.'),mark(76,'Espere a plataforma chegar à borda.'),mark(108,'Acenda a ponte e use o degrau para alcançar o jardim.')],theme:'mill'},
 {id:3,name:'Bront, o tatu de musgo',subtitle:'O primeiro farol',length:20,spawn:{x:3,y:0},end:{x:18,y:0},boss:true,arena:{left:1,right:19,rollLeft:4,rollRight:16,bossStart:16},
  intro:['Pip','Bront não é mau: o Véu o confundiu. Pule a rolagem. Quando ele descansar, aproxime-se e use Pulso!'],
  outro:['Bront','A luz voltou… Obrigado, Blue! O vento está soprando outra vez. O primeiro farol de Lúmina está aceso.'],
  platforms:[land(-3,23)],seeds:[],enemies:[],checkpoints:[],switches:[],signs:[],theme:'sanctuary'}
].map(l=>({...l,platforms:l.platforms.map((p,i)=>({...p,id:`p${i}`})),seeds:l.seeds.map((s,i)=>({...s,id:`${l.id}:${i}`}))}));

export function platformAt(p,time){return {...p,x:p.x+(p.axis==='x'?Math.sin(time*p.speed+p.phase)*p.amplitude:0),y:p.y+(p.axis==='y'?Math.sin(time*p.speed+p.phase)*p.amplitude:0)};}
