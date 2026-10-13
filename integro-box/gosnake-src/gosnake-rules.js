export const WIDTH=32,DEPTH=28;
export const DIRS=[[0,-1],[1,0],[0,1],[-1,0]];
const theme=(name,snakeName,ground,wall,sky,snake,belly,decor)=>({name,snakeName,ground,wall,sky,snake,belly,decor});
export const LEVELS=[
 theme('Jardim das Melancias','Broto',0x65a887,0x346b58,0xc4e9d8,0xd6ee68,0xf7f3b7,'garden'),
 theme('Bosque das Peras','Esmeralda',0x719862,0x405e48,0xcde0bd,0x53d699,0xe4f4b2,'forest'),
 theme('Dunas Douradas','Areia',0xd9b880,0xad7b54,0xfae4bb,0xf8c666,0xfff3d2,'desert'),
 theme('Recife Coral','Coral',0x57aaa9,0x366a80,0xc3e9ef,0xfa887a,0xffddbf,'coral'),
 theme('Vale de Lavanda','Violeta',0x9b8cb3,0x65587d,0xe8dced,0xaf8bf1,0xf2d8fe,'flowers'),
 theme('Serra Nevada','Nevasca',0xb8d8e2,0x698aab,0xe0f2f6,0xf4fbff,0x94d9f5,'ice'),
 theme('Cânion de Cobre','Cobre',0xc98d65,0x865446,0xf4d4bf,0xe7984b,0xffd79c,'canyon'),
 theme('Floresta de Bambu','Jade',0x6e9e83,0x3b6353,0xc2ddd1,0x56c5b4,0xcaedd1,'bamboo'),
 theme('Ilha Vulcânica','Brasa',0x66647a,0x373745,0xccb5c0,0xff8152,0xffd279,'volcano'),
 theme('Reino dos Doces','Confete',0xd6a2b8,0xa86789,0xffe1ea,0xfa96c7,0xffecbe,'candy'),
 theme('Caverna de Cristal','Ametista',0x707fa8,0x404c75,0xb8bedf,0x87caff,0xd4efff,'crystal'),
 theme('Pântano Luminoso','Vaga-lume',0x608c80,0x354e59,0xa3c9c6,0xbce961,0xe6f9a6,'mushroom'),
 theme('Cidade Neon','Circuito',0x46567d,0x25364f,0x98abd3,0x70f4d0,0xe1fff1,'neon'),
 theme('Templo do Sol','Solar',0xc6aa77,0x826c57,0xf8deb5,0xffde6d,0xfff5be,'temple'),
 theme('Jardim Celestial','Aurora',0x93abc3,0x627b9b,0xe1e7ff,0xa59cff,0xf4e0ff,'aurora')
].map((t,i)=>({...t,id:i,goal:7+Math.floor(i/2),speed:3.6+i*.14}));
export const POWERS={shield:{name:'Escudo',duration:16,color:0x65dafa,description:'Protege de uma batida e faz uma curva de emergência.'},slow:{name:'Câmera lenta',duration:9,color:0xb6a0ff,description:'Reduz a velocidade por 9 segundos.'},magnet:{name:'Ímã de frutas',duration:9,color:0xff9ec2,description:'Atrai frutas próximas, sem atravessar paredes.'},double:{name:'Pontos ×2',duration:12,color:0xffd56d,description:'Dobra os pontos por 12 segundos.'}};
export const cellKey=(x,z)=>x+z*WIDTH;
export const same=(a,b)=>a.x===b.x&&a.z===b.z;
export function makeArena(level=0){
 const walls=new Set(),tunnels=[];const put=(x,z)=>{if(x>0&&x<WIDTH-1&&z>0&&z<DEPTH-1)walls.add(cellKey(x,z))};
 for(let x=0;x<WIDTH;x++){walls.add(cellKey(x,0));walls.add(cellKey(x,DEPTH-1))}for(let z=0;z<DEPTH;z++){walls.add(cellKey(0,z));walls.add(cellKey(WIDTH-1,z))}
 const gateZ=[6+level%3,20-level%3];for(let z=3;z<=24;z++)put(16,z);for(const z of gateZ){walls.delete(cellKey(16,z));tunnels.push({x:16,z,axis:'x'})}
 if(level>=2){const row=5+level%2;for(let x=4;x<=27;x++)put(x,row);for(const x of[8,24]){walls.delete(cellKey(x,row));tunnels.push({x,z:row,axis:'z'})}}
 if(level>=5){const row=22;for(let x=4;x<=27;x++)put(x,row);for(const x of[9,23]){walls.delete(cellKey(x,row));tunnels.push({x,z:row,axis:'z'})}}
 for(let i=0;i<2+Math.floor(level/2);i++){const x=4+(i*7+level*3)%23,z=9+(i*3+level)%11;for(let j=0;j<2+(level%3);j++)put(x+(i%2?j:0),z+(i%2?0:j))}
 // Keep an ample, predictable starting corridor, and both mouths of every tunnel clear.
 for(let x=2;x<=12;x++)for(let z=11;z<=17;z++)walls.delete(cellKey(x,z));
 for(const t of tunnels)for(let d=-2;d<=2;d++)walls.delete(cellKey(t.x+(t.axis==='x'?d:0),t.z+(t.axis==='z'?d:0)));
 const reachable=new Set([cellKey(6,14)]),queue=[{x:6,z:14}];for(let i=0;i<queue.length;i++){const p=queue[i];for(const[dX,dZ]of DIRS){const x=p.x+dX,z=p.z+dZ,k=cellKey(x,z);if(x<1||z<1||x>=WIDTH-1||z>=DEPTH-1||walls.has(k)||reachable.has(k))continue;reachable.add(k);queue.push({x,z})}}
 // Any enclosed decorative pocket is solid, so food never appears in an unreachable area.
 for(let x=1;x<WIDTH-1;x++)for(let z=1;z<DEPTH-1;z++)if(!reachable.has(cellKey(x,z)))walls.add(cellKey(x,z));
 return{walls,tunnels,free:queue};
}
export function cleanProgress(raw){const p=raw&&typeof raw==='object'?raw:{};return{unlocked:Math.max(1,Math.min(15,Math.floor(Number(p.unlocked)||1))),best:LEVELS.map((_,i)=>Math.max(0,Math.min(999999,Math.floor(Number(p.best?.[i])||0)))),completed:LEVELS.map((_,i)=>p.completed?.[i]===true),camera:p.camera==='follow'?'follow':'arena'}};
export class SnakeRun{
 constructor(level=0,seed=Date.now()){this.level=Math.max(0,Math.min(14,Math.floor(level)));this.theme=LEVELS[this.level];this.arena=makeArena(this.level);this.seed=seed>>>0;this.snake=[6,5,4,3].map(x=>({x,z:14}));this.previous=this.snake.map(p=>({...p}));this.direction=1;this.turns=[];this.desiredDirection=null;this.elapsed=0;this.accumulator=0;this.score=0;this.eaten=0;this.status='ready';this.fruits=[];this.power=null;this.effects={};this.powerIndex=0;this.powerWait=0;this.event='';this.eventSerial=0;this.growth=0;this.grace=0;this.tunnelTrips=0;for(const kind of['melon','pear','melon','pear'])this.spawnFruit(kind);this.spawnPower()}
 random(){this.seed=(Math.imul(this.seed,1664525)+1013904223)>>>0;return this.seed/4294967296}
 occupied(p){return this.snake.some(b=>same(p,b))||this.fruits.some(f=>same(f,p))||(this.power&&same(this.power,p))}
 empty(){const free=this.arena.free.filter(p=>!this.occupied(p));return free.length?{...free[Math.floor(this.random()*free.length)]}:null}
 spawnFruit(kind){const p=this.empty();if(p)this.fruits.push({...p,kind})}
 spawnPower(){const p=this.empty();if(p)this.power={...p,kind:Object.keys(POWERS)[this.powerIndex++%4]}}
 turn(side){if(this.status!=='playing'||![-1,1].includes(side)||this.turns.length>=2)return false;this.turns.push(side);return true}
 steer(direction){if(this.status!=='playing'||!Number.isInteger(direction)||direction<0||direction>3)return false;this.turns=[];this.desiredDirection=null;if((direction+2)%4===this.direction)return false;this.desiredDirection=direction;return true}
 interval(){return (this.effects.slow>0?1.65:1)/this.theme.speed}
 announce(text){this.event=text;this.eventSerial++}
 blocked(p,body=this.snake){return p.x<0||p.z<0||p.x>=WIDTH||p.z>=DEPTH||this.arena.walls.has(cellKey(p.x,p.z))||body.some(b=>same(b,p))}
 fruitPath(p){const start=this.snake[0],seen=new Set([cellKey(start.x,start.z)]),q=[{...start,d:0}];for(let i=0;i<q.length;i++){const a=q[i];if(same(a,p))return true;if(a.d>=3)continue;for(const [dx,dz]of DIRS){const n={x:a.x+dx,z:a.z+dz},k=cellKey(n.x,n.z);if(seen.has(k)||this.arena.walls.has(k)||n.x<1||n.z<1||n.x>=WIDTH-1||n.z>=DEPTH-1)continue;seen.add(k);q.push({...n,d:a.d+1})}}return false}
 eat(f){this.fruits.splice(this.fruits.indexOf(f),1);const points=(f.kind==='melon'?50:30)*(this.effects.double>0?2:1);this.score+=points;this.eaten++;this.growth++;this.announce((f.kind==='melon'?'Melancia':'Pera')+' +'+points);this.spawnFruit(f.kind)}
 step(){if(this.status!=='playing')return;this.previous=this.snake.map(p=>({...p}));if(this.desiredDirection!==null){this.direction=this.desiredDirection;this.desiredDirection=null}else if(this.turns.length)this.direction=(this.direction+this.turns.shift()+4)%4;const [dx,dz]=DIRS[this.direction],next={x:this.snake[0].x+dx,z:this.snake[0].z+dz};const eating=this.fruits.some(f=>same(f,next)),body=this.growth||eating?this.snake:this.snake.slice(0,-1);
  if(this.blocked(next,body)){if(this.effects.shield>0){delete this.effects.shield;this.turns=[];let safe=false;for(const side of[-1,1]){const d=(this.direction+side+4)%4,n={x:this.snake[0].x+DIRS[d][0],z:this.snake[0].z+DIRS[d][1]};if(!this.blocked(n,body)){this.direction=d;safe=true;break}}this.grace=safe?.55:1.2;this.announce('Escudo protegeu! Vire para um caminho livre.');return}this.status='lost';this.announce(this.arena.walls.has(cellKey(next.x,next.z))?'Você encostou na parede. Vamos tentar de novo?':'Cuidado com o próprio corpo!');return}
  this.snake.unshift(next);const fruit=this.fruits.find(f=>same(f,next));if(fruit)this.eat(fruit);if(this.growth>0)this.growth--;else this.snake.pop();
  if(this.arena.tunnels.some(t=>same(t,next))){this.tunnelTrips++;if(!fruit)this.announce('Pelo túnel!')}
  if(this.power&&same(this.power,next)){const kind=this.power.kind;this.effects[kind]=POWERS[kind].duration;this.power=null;this.powerWait=6;this.announce(POWERS[kind].name+' ativado!')}
  if(this.effects.magnet>0)for(const f of [...this.fruits])if(this.fruitPath(f))this.eat(f);
  if(this.eaten>=this.theme.goal){this.status='won';this.announce('Fase concluída!')}
 }
 update(dt){if(this.status!=='playing')return;dt=Math.min(.1,Math.max(0,dt));this.elapsed+=dt;for(const k of Object.keys(this.effects)){this.effects[k]-=dt;if(this.effects[k]<=0)delete this.effects[k]}if(!this.power){this.powerWait-=dt;if(this.powerWait<=0)this.spawnPower()}if(this.grace>0){this.grace-=dt;return}this.accumulator+=dt;let guard=0;while(this.accumulator>=this.interval()&&this.status==='playing'&&guard++<4){this.accumulator-=this.interval();this.step()}}
}
