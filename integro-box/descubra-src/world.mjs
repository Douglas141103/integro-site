// World coordinates describe the same walkable floor used by the server.
export const SPEED=210,RADIUS=16,REACH=115;
export const ROOMS=[
 {id:0,name:'Ponte de comando',short:'COMANDO',x:850,y:80,w:500,h:300,color:'#527fb3',task:'Calibrar a rota',terminal:{x:1100,y:205}},
 {id:1,name:'Laboratório',short:'LABORATÓRIO',x:100,y:180,w:500,h:380,color:'#8061aa',task:'Separar amostras',terminal:{x:350,y:290}},
 {id:2,name:'Reator',short:'REATOR',x:1600,y:180,w:500,h:380,color:'#d39742',task:'Estabilizar energia',terminal:{x:1850,y:300}},
 {id:3,name:'Jardim orbital',short:'JARDIM ORBITAL',x:100,y:1050,w:500,h:360,color:'#478d75',task:'Ativar irrigação',terminal:{x:350,y:1130}},
 {id:4,name:'Enfermaria',short:'ENFERMARIA',x:1600,y:1050,w:500,h:360,color:'#4a9caa',task:'Ajustar scanner',terminal:{x:1850,y:1130}},
 {id:5,name:'Depósito',short:'DEPÓSITO',x:850,y:1250,w:500,h:320,color:'#ae7261',task:'Ordenar cargas',terminal:{x:1100,y:1490}},
 {id:6,name:'Central Integro',short:'CENTRAL INTEGRO',x:820,y:650,w:560,h:360,color:'#5e7590',task:'Convocar reunião',terminal:{x:960,y:780}}
];
export const CORRIDORS=[{x:1040,y:320,w:120,h:990},{x:540,y:410,w:1120,h:120},{x:540,y:1090,w:1120,h:120}];
export const OBSTACLES=[
 {x:940,y:145,w:320,h:70,kind:'console',room:0},
 {x:190,y:235,w:290,h:70,kind:'samples',room:1},
 {x:1770,y:225,w:160,h:100,kind:'reactor',room:2},
 {x:180,y:1075,w:310,h:65,kind:'garden',room:3},
 {x:1750,y:1075,w:200,h:65,kind:'scanner',room:4},
 {x:970,y:1430,w:260,h:70,kind:'cargo',room:5},
 {x:880,y:730,w:150,h:90,kind:'meeting',room:6},
 {x:140,y:420,w:90,h:85,kind:'cabinet',room:1},
 {x:1940,y:420,w:100,h:85,kind:'cabinet',room:2},
 {x:160,y:1260,w:110,h:85,kind:'garden',room:3},
 {x:1930,y:1250,w:105,h:90,kind:'bed',room:4},
 {x:900,y:1440,w:95,h:80,kind:'cargo',room:5},
 {x:1230,y:740,w:85,h:70,kind:'console',room:6}
];
export const ROUTES=[[[1100,900],[1100,470],[1100,300]],[[1100,900],[1100,470],[350,470],[350,390]],[[1100,900],[1100,470],[1850,470],[1850,400]],[[1100,900],[1100,1150],[550,1150],[550,1230],[350,1230]],[[1100,900],[1100,1150],[1650,1150],[1650,1230],[1850,1230]],[[1100,900],[1100,1150],[1100,1390]],[[1100,900]]];
const inside=(x,y,r)=>x>=r.x&&x<=r.x+r.w&&y>=r.y&&y<=r.y+r.h;
export function walkable(x,y){return Number.isFinite(x)&&Number.isFinite(y)&&[[-RADIUS,0],[RADIUS,0],[0,-RADIUS],[0,RADIUS],[-11,-11],[11,-11],[-11,11],[11,11]].every(([dx,dy])=>[...ROOMS,...CORRIDORS].some(r=>inside(x+dx,y+dy,r)))&&!OBSTACLES.some(r=>x+RADIUS>r.x&&x-RADIUS<r.x+r.w&&y+RADIUS>r.y&&y-RADIUS<r.y+r.h);}
export const roomAt=(x,y)=>ROOMS.find(r=>inside(x,y,r))?.id??-1;
export const distance=(p,q)=>Math.hypot(p.x-q.x,p.y-q.y);
export function movePlayer(p,dx,dy,dt){if(!Number.isFinite(dx+dy+dt)||dt<=0)return;const len=Math.max(1,Math.hypot(dx,dy)),d=Math.min(dt,.1)*SPEED,n=Math.max(1,Math.ceil(d/7));dx=dx/len*d/n;dy=dy/len*d/n;for(let i=0;i<n;i++){if(walkable(p.x+dx,p.y))p.x+=dx;if(walkable(p.x,p.y+dy))p.y+=dy;}if(dx)p.facing=dx<0?-1:1;p.room=roomAt(p.x,p.y);}
export const nearTerminal=p=>p.room>=0&&distance(p,ROOMS[p.room].terminal)<=REACH;
export function placeCrew(s,t=0){s.players.forEach((p,i)=>Object.assign(p,{x:1045+(i%3)*60,y:880+Math.floor(i/3)*65,room:6,facing:1,moveSeq:0,moveAt:t,moveBudget:.3,path:[],botWait:0}));return s;}
export function enableWalking(s,t=0){s.walking=true;s.botTick=t;return placeCrew(s,t);}
export function botRoute(p,dest){const from=p.room>=0?p.room:6;const back=p.room<0?(p.y<650?[[1100,470],[1100,900]]:p.y>1010?[[1100,1150],[1100,900]]:[[1100,900]]):ROUTES[from].slice().reverse();return [...back,...ROUTES[dest].slice(1)].map(([x,y])=>({x,y}));}
