export const MAX_LEVEL=60, WORLD={width:1800,depth:1200,minY:5,maxY:95};
export const REGIONS=[
 {name:'Baía dos Corais',subtitle:'Seu primeiro mergulho',x:-600,z:-300,color:'#23d9c4',water:0x138da8,floor:0x96c9b6,kind:'coral',level:1,icon:'✿'},
 {name:'Floresta de Algas',subtitle:'Caminhos que dançam',x:0,z:-300,color:'#9be889',water:0x087f80,floor:0x548b71,kind:'kelp',level:8,icon:'♧'},
 {name:'Navios Esquecidos',subtitle:'Tesouros sob as ondas',x:600,z:-300,color:'#ffd181',water:0x16678c,floor:0x758f9c,kind:'wreck',level:16,icon:'⚓'},
 {name:'Templo das Marés',subtitle:'O segredo da cidade azul',x:-600,z:300,color:'#adacff',water:0x345e9d,floor:0x7376ab,kind:'ruins',level:24,icon:'◇'},
 {name:'Jardim Vulcânico',subtitle:'Um oceano de luz',x:0,z:300,color:'#ff9a83',water:0x344878,floor:0x494d75,kind:'volcano',level:35,icon:'△'},
 {name:'Coroa Glacial',subtitle:'O reino dos gigantes',x:600,z:300,color:'#c2f6ff',water:0x2485a7,floor:0xa0d5df,kind:'ice',level:45,icon:'❄'}
];
export const SHOP=[
 {id:'speed',name:'Nadadeiras turbo',desc:'+12% de velocidade por nível.',icon:'➤',type:'upgrade',price:160,max:3},
 {id:'growth',name:'Apetite de gigante',desc:'+20% de experiência por nível.',icon:'✦',type:'upgrade',price:220,max:3},
 {id:'radar',name:'Sonar de caça',desc:'Mostra presas e perigos no minimapa.',icon:'◎',type:'upgrade',price:350,max:1},
 {id:'magnet',name:'Ímã de pérolas',desc:'Atrai pérolas a 18 metros.',icon:'◉',type:'upgrade',price:280,max:1},
 {id:'shield',name:'Bolha protetora',desc:'Bloqueia um ataque. Leve até 3.',icon:'◌',type:'consumable',price:85,max:3},
 {id:'ocean',name:'Azul oceano',desc:'Seu estilo original.',icon:'●',type:'skin',price:0,color:0x65cfea},
 {id:'coral',name:'Coral solar',desc:'Um toque de pôr do sol.',icon:'●',type:'skin',price:240,color:0xff987f},
 {id:'mint',name:'Menta tropical',desc:'Verde das águas cristalinas.',icon:'●',type:'skin',price:280,color:0x78ecc7},
 {id:'violet',name:'Violeta abissal',desc:'Uma joia das profundezas.',icon:'●',type:'skin',price:420,color:0xb6a0ff},
 {id:'gold',name:'Guardião dourado',desc:'Brilhe em todas as regiões.',icon:'●',type:'skin',price:900,color:0xffd166},
 {id:'crown',name:'Coroa das marés',desc:'Acessório para o rei do oceano.',icon:'♛',type:'accessory',price:650},
 {id:'trail',name:'Rastro aurora',desc:'Deixe bolhas coloridas ao nadar.',icon:'✧',type:'accessory',price:380}
];
export const MISSIONS=[{id:'meal15',name:'Primeiro banquete',desc:'Coma 15 peixes',target:15,reward:160,stat:'eaten'},{id:'level10',name:'Pequeno gigante',desc:'Alcance a evolução 10',target:10,reward:250,stat:'level'},{id:'meal100',name:'Caçador das marés',desc:'Coma 100 peixes',target:100,reward:500,stat:'eaten'},{id:'explore6',name:'Todo o oceano',desc:'Descubra as 6 regiões',target:6,reward:800,stat:'regions'},{id:'level30',name:'Lenda azul',desc:'Alcance a evolução 30',target:30,reward:1000,stat:'level'}];
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const int=(v,max=9999999)=>Number.isFinite(v)?clamp(Math.floor(v),0,max):0;
export const lengthFor=level=>level===0?1.25:2.4*Math.pow(1.052,clamp(level,1,MAX_LEVEL)-1);
export const needXP=level=>18+level*7;
export const canEat=(player,prey)=>prey<player;
export function regionAt(x,z){return (z<0?0:3)+clamp(Math.floor((x+900)/600),0,2);}
export const priceFor=(p,item)=>item.price*(1+(p.upgrades[item.id]||0));
export function clean(data){
 let raw;try{raw=typeof data==='string'?JSON.parse(data):data;}catch{}raw=raw&&typeof raw==='object'?raw:{};
 const p={version:1,level:Math.max(1,int(raw.level,60)),xp:0,coins:int(raw.coins),eaten:int(raw.eaten),algaeEaten:int(raw.algaeEaten),shields:int(raw.shields,3),upgrades:{},owned:['ocean'],skin:'ocean',accessories:[],discovered:[0],claimed:[],position:{x:-600,y:24,z:-300},sound:raw.sound!==false,quality:raw.quality==='low'?'low':'auto',cameraZoom:Number.isFinite(raw.cameraZoom)?clamp(raw.cameraZoom,0,3):1};
 p.xp=Math.min(int(raw.xp),needXP(p.level)-1);
 for(const item of SHOP){if(item.type==='upgrade')p.upgrades[item.id]=int(raw.upgrades?.[item.id],item.max);if(['skin','accessory'].includes(item.type)&&raw.owned?.includes?.(item.id)&&!p.owned.includes(item.id))p.owned.push(item.id);}
 if(SHOP.some(i=>i.id===raw.skin&&i.type==='skin')&&p.owned.includes(raw.skin))p.skin=raw.skin;
 p.accessories=SHOP.filter(i=>i.type==='accessory'&&p.owned.includes(i.id)&&raw.accessories?.includes?.(i.id)).map(i=>i.id);
 p.discovered=[...new Set([0,...(Array.isArray(raw.discovered)?raw.discovered.filter(i=>Number.isInteger(i)&&i>=0&&i<6):[])])];
 p.claimed=MISSIONS.filter(m=>raw.claimed?.includes?.(m.id)).map(m=>m.id);
 if(raw.position&&['x','y','z'].every(k=>Number.isFinite(raw.position[k])))p.position={x:clamp(raw.position.x,-870,870),y:clamp(raw.position.y,5,95),z:clamp(raw.position.z,-570,570)};
 return p;
}
export function purchase(p,id){
 const item=SHOP.find(i=>i.id===id);if(!item)return {ok:false,message:'Item indisponível.'};
 if(item.type==='upgrade'&&p.upgrades[id]>=item.max||item.type==='consumable'&&p.shields>=item.max)return {ok:false,message:'Você já tem o máximo deste item.'};
 const owned=p.owned.includes(id),cost=owned?0:priceFor(p,item);
 if(p.coins<cost)return {ok:false,message:'Colete mais moedas para comprar.'};
 p.coins-=cost;
 if(item.type==='upgrade')p.upgrades[id]++;
 else if(item.type==='consumable')p.shields++;
 else{if(!owned)p.owned.push(id);if(item.type==='skin')p.skin=id;else p.accessories=p.accessories.includes(id)?p.accessories.filter(x=>x!==id):[...p.accessories,id];}
 return {ok:true,message:owned?'Visual atualizado!':'Compra realizada!'};
}
export function eat(p,preyLevel){
 if(!Number.isInteger(preyLevel)||preyLevel<0||!canEat(p.level,preyLevel))return null;
 const xp=Math.round((6+preyLevel*2)*(1+.2*p.upgrades.growth)),coins=3+Math.floor(preyLevel/2);p.eaten++;p.coins+=coins;p.xp+=xp;const before=p.level;
 while(p.level<MAX_LEVEL&&p.xp>=needXP(p.level)){p.xp-=needXP(p.level);p.level++;}
 if(p.level===MAX_LEVEL)p.xp=0;
 return {xp,coins,evolved:p.level>before};
}
export function eatAlgae(p){
 const xp=Math.round((4+Math.floor((p.level-1)/4))*(1+.2*p.upgrades.growth)),before=p.level;
 p.algaeEaten=(p.algaeEaten||0)+1;p.xp+=xp;
 while(p.level<MAX_LEVEL&&p.xp>=needXP(p.level)){p.xp-=needXP(p.level);p.level++;}
 if(p.level===MAX_LEVEL)p.xp=0;
 return{xp,coins:0,evolved:p.level>before};
}
export function discover(p,index){if(p.discovered.includes(index))return false;p.discovered.push(index);p.coins+=100;return true;}
export function claimMissions(p){const got=[];for(const m of MISSIONS){const value=m.stat==='regions'?p.discovered.length:p[m.stat];if(value>=m.target&&!p.claimed.includes(m.id)){p.claimed.push(m.id);p.coins+=m.reward;got.push(m);}}return got;}
export function damage(p,health){if(p.shields>0){p.shields--;return {health,blocked:true};}return {health:Math.max(0,health-1),blocked:false};}
export function respawn(p){p.xp=Math.floor(p.xp*.75);const r=REGIONS[regionAt(p.position.x,p.position.z)];p.position={x:r.x,y:24,z:r.z};return p.position;}
