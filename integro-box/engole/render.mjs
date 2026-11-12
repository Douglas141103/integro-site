import {growthGuide} from './guide.mjs?v=20261112-update1';
import {WORLD,COLORS} from './core.mjs';

// All artwork is drawn once into reusable sprites; gameplay and room snapshots stay unchanged.
const INK='#24394f',TAU=Math.PI*2;
const PALETTES=[['#ffbd68','#e77f52','#ffe6a7'],['#f58ca9','#c45f90','#ffd3df'],['#78d8c1','#3b9d9a','#c3f7d4'],['#a5a3ed','#7068bd','#dfd9ff'],['#78c7ee','#428dbb','#c8eeff']];
function shapes(c){
 const ellipse=(x,y,rx,ry,fill,stroke=null,line=2)=>{c.beginPath();c.ellipse(x,y,rx,ry,0,0,TAU);c.fillStyle=fill;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=line;c.stroke();}};
 const box=(x,y,w,h,r,fill,stroke=INK,line=2)=>{c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=fill;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=line;c.stroke();}};
 const poly=(points,fill,stroke=INK,line=2)=>{c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fillStyle=fill;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=line;c.stroke();}};
 const line=(points,color=INK,w=2)=>{c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.strokeStyle=color;c.lineWidth=w;c.lineCap='round';c.lineJoin='round';c.stroke();};
 return {ellipse,box,poly,line};
}
function drawObject(c,o){
 const {ellipse,box,poly,line}=shapes(c),r=o.r,[base,shade,light]=PALETTES[o.color%5];
 c.lineJoin='round';c.lineCap='round';
 ellipse(r*.22,r*.66,r*1.1,r*.38,'#234b5530');
 if(o.kind==='house'){
  // A pitched roof, striped canopy, glazed windows, doorstep and flower boxes.
  box(-r*.85,-r*.6,r*1.45,r*1.38,4,light);
  poly([[r*.6,-r*.6],[r,r*.02],[r,r*.78],[r*.6,r*.78]],shade);
  poly([[-r*1.02,-r*.5],[-r*.18,-r*1.37],[r*.7,-r*.5]],base,INK,3);
  poly([[-r*.18,-r*1.37],[r*.22,-r*1.34],[r*1.08,-r*.52],[r*.7,-r*.5]],shade);
  line([[-r*.82,-r*.51],[r*.62,-r*.51]],'#fff0d6',3);
  box(r*.43,-r*1.3,r*.22,r*.45,2,shade);box(r*.4,-r*1.34,r*.28,r*.1,2,base);
  box(-r*.14,r*.03,r*.38,r*.73,3,shade);ellipse(r*.12,r*.43,1.5,1.5,'#fff1ad');
  for(const x of [-r*.66,r*.33]){box(x,-r*.22,r*.27,r*.35,3,'#81dbed');line([[x+2,-r*.16],[x+r*.2,-r*.16]],'#fff',1.5);box(x-2,r*.17,r*.35,r*.12,2,base);for(let i=0;i<3;i++)ellipse(x+i*r*.1,r*.14,2,3,'#49ad77');}
  box(-r*.22,r*.72,r*.55,r*.14,2,'#f0e3bb');
 }else if(o.kind==='tower'){
  const top=-r*1.46,front=r*.68;
  box(-r*.73,top,r*1.38,r*2.15,5,base,INK,3);
  poly([[r*.65,top],[r*.96,top+r*.24],[r*.96,front],[r*.65,front]],shade,INK,2.5);
  box(-r*.83,top-r*.07,r*1.56,r*.22,4,light,INK,2.5);
  poly([[r*.73,top-r*.07],[r*1.02,top+r*.13],[r*1.02,top+r*.31],[r*.73,top+r*.15]],shade);
  box(-r*.56,top+r*.28,r*1.05,r*.14,2,light,null);
  const step=r*.39;
  for(let y=top+r*.57;y<r*.2;y+=step)for(let x=-r*.53;x<r*.5;x+=r*.37){box(x,y,r*.24,r*.27,2,'#387ca4',INK,1.3);poly([[x+1,y+1],[x+r*.22,y+1],[x+1,y+r*.24]],'#b5f2fa',null);line([[x+2,y+2],[x+r*.2,y+2]],'#eaffff',1.5);}
  box(-r*.17,r*.27,r*.41,r*.41,3,'#377a94');line([[r*.04,r*.3],[r*.04,r*.63]],'#d6faff',1.5);
  box(-r*.31,r*.21,r*.7,r*.12,2,light);box(-r*.27,r*.66,r*.62,r*.1,2,'#fff0cb');
  // Rooftop ventilation and a small antenna give each skyline a silhouette.
  box(-r*.5,top-r*.32,r*.47,r*.25,3,shade);line([[-r*.42,top-r*.2],[-r*.12,top-r*.2]],light,2);
  line([[r*.37,top-r*.07],[r*.37,top-r*.58]],INK,2);ellipse(r*.37,top-r*.6,3,3,'#ffda64',INK,1.5);
 }else if(o.kind==='tree'){
  box(-r*.18,-r*.25,r*.36,r*1.05,3,'#b97c54');line([[0,r*.55],[0,-r*.35],[-r*.4,-r*.55]],'#754e40',2);
  ellipse(0,-r*.67,r*1.02,r*.98,'#24856e',INK,2.5);
  ellipse(-r*.4,-r*.85,r*.66,r*.7,'#43b985',null);
  ellipse(r*.33,-r*.98,r*.67,r*.67,'#62cf8b',null);
  ellipse(-r*.1,-r*1.28,r*.53,r*.46,'#a3e58e',null);
  line([[-r*.64,-r*1.12],[-r*.42,-r*1.35],[-r*.18,-r*1.42]],'#d0f7ab',2);
  for(const [x,y] of [[.36,-.57],[-.4,-.67]])ellipse(r*x,r*y,2.1,2.5,o.color%2?'#ffcb67':'#ff8e85',null);
 }else if(o.kind==='car'){
  for(const x of [-r*.65,r*.6])for(const y of [-r*.56,r*.49]){box(x-3,y-3,6,7,2,INK);line([[x-1,y],[x+1,y]],'#9aaebc',1.5);}
  box(-r,-r*.58,r*2,r*1.15,6,shade,INK,2.3);box(-r*.94,-r*.64,r*1.85,r*.99,5,base,INK,1.5);
  box(-r*.35,-r*.55,r*.92,r*.85,4,'#307192',INK,1.5);
  poly([[-r*.25,-r*.48],[r*.41,-r*.48],[-r*.25,r*.18]],'#b2edf1',null);
  line([[r*.24,-r*.5],[r*.24,r*.25]],light,2.4);line([[-r*.83,-r*.4],[-r*.53,-r*.4]],light,2);
  for(const y of [-r*.39,r*.16]){box(r*.78,y,3,4,1,'#fff3ad',INK,1);box(-r*.98,y,2,4,1,'#ff6e6c',null);}
  box(-r*.1,-r*.77,r*.26,r*.13,1,base,INK,1);line([[-r*.2,r*.38],[r*.4,r*.38]],light,1.5);
 }else if(o.kind==='cone'){
  box(-r*1.2,r*.25,r*2.4,r*.72,2,'#e8793f',INK,1.5);
  poly([[0,-r*1.65],[-r*.86,r*.5],[r*.86,r*.5]],'#ffab56',INK,1.5);
  poly([[-r*.31,-r*.83],[r*.31,-r*.83],[r*.52,-r*.29],[-r*.52,-r*.29]],'#fff5da',null);
  line([[-r*.3,r*.25],[0,-r*.6]],'#ffd890',1);
 }else{
  for(const x of [-r*.48,r*.43])ellipse(x,r*.85,2,2.5,INK);
  box(-r*.77,-r*.85,r*1.54,r*1.67,3,'#4fbaa9',INK,1.7);
  box(-r*.92,-r*1.05,r*1.84,r*.37,2,'#9ae4c5',INK,1.5);
  box(-r*.32,-r*1.25,r*.64,r*.23,1,'#49a99e',INK,1);
  line([[-r*.43,-r*.45],[-r*.43,r*.49]],'#b8f2d2',1.4);
  ellipse(r*.13,0,r*.35,r*.36,'#ddf9ce',null);line([[r*.01,-r*.15],[r*.23,0],[r*.01,r*.15]],'#3b9b87',1);
 }
}
function ground(c){
 const {box,ellipse,line}=shapes(c);
 c.fillStyle='#8ed7a1';c.fillRect(0,0,WORLD,WORLD);
 for(let bx=0;bx<5;bx++)for(let by=0;by<5;by++){
  const x=bx*320,y=by*320;
  box(x+92,y+92,222,222,18,'#cfebaf','#71b887',3);
  box(x+104,y+104,198,198,12,'#a6df9e',null);
  // Garden texture is deterministic and decorative, never an extra gameplay target.
  for(let i=0;i<14;i++){const px=x+110+(i*73+by*31)%184,py=y+112+(i*41+bx*17)%182;line([[px-3,py],[px,py-4],[px+3,py]],'#78be8b',1.5);}
  c.fillStyle='#718fa3';c.fillRect(x,0,88,WORLD);c.fillRect(0,y,WORLD,88);
 }
 // Road paint stays out of intersections. Rounded curbs and crossings frame the blocks.
 for(let i=0;i<5;i++)for(let j=0;j<5;j++){
  const x=i*320,y=j*320;
  for(let t=104;t<304;t+=32){box(x+41,y+t,5,15,2,'#d2e4dc',null);box(x+t,y+41,15,5,2,'#d2e4dc',null);}
  for(let k=0;k<4;k++){box(x+12+k*17,y+96,9,18,2,'#edf4dc',null);box(x+96,y+12+k*17,18,9,2,'#edf4dc',null);}
  line([[x+98,y+125],[x+98,y+298]],'#f3f6d5',3);line([[x+125,y+98],[x+298,y+98]],'#f3f6d5',3);
  ellipse(x+16,y+18,4,4,'#657f91',null);
 }
 c.strokeStyle='#497e81';c.lineWidth=8;c.strokeRect(4,4,WORLD-8,WORLD-8);
}
export function renderer(canvas){
 const c=canvas.getContext('2d'),S=shapes(c),sprites=new Map();let camera={x:800,y:800},width=800,height=600,zoom=1,first=true;
 const layer=canvas.ownerDocument.createElement('canvas');layer.width=layer.height=WORLD;ground(layer.getContext('2d'));
 let orderedWorld=null,ordered=[];
 function resize(){const r=canvas.getBoundingClientRect();width=r.width||800;height=r.height||600;const d=Math.min(2,globalThis.devicePixelRatio||1);canvas.width=Math.round(width*d);canvas.height=Math.round(height*d);c.setTransform(d,0,0,d,0,0);c.imageSmoothingEnabled=true;}
 function object(o,scale=1){
  const key=[o.kind,o.r,o.color].join(':');let sprite=sprites.get(key);
  if(!sprite){const size=Math.ceil(o.r*4.8+16),art=canvas.ownerDocument.createElement('canvas');art.width=art.height=size*2;const ctx=art.getContext('2d');ctx.scale(2,2);ctx.translate(size/2,size/2);drawObject(ctx,o);sprite={art,size};sprites.set(key,sprite);}
  const size=sprite.size*scale;c.drawImage(sprite.art,o.x-size/2,o.y-size/2,size,size);
 }
 function hole(p,time){
  const {ellipse}=S,r=p.r,color=COLORS[p.slot%8];
  c.save();c.translate(p.x,p.y);
  ellipse(3,6,r+5,r*.75+3,'#23455430');ellipse(0,0,r+3,r*.74+3,color,INK,2.5);
  ellipse(0,-1,r*.88,r*.6,'#182d49',INK,2);ellipse(0,-r*.09,r*.69,r*.39,'#0c182f');
  c.beginPath();c.ellipse(0,-2,r*.91,r*.61,0,Math.PI*1.06,Math.PI*1.8);c.strokeStyle='#ffffffaa';c.lineWidth=Math.max(2,r*.045);c.stroke();
  c.beginPath();c.ellipse(0,r*.05,r*.63,r*.35,0,time*1.6,time*1.6+3.4);c.strokeStyle='#8a7feb55';c.lineWidth=2;c.stroke();
  // Expressive eyes sit on the rim, leaving the playable opening visible.
  const eye=Math.max(3.2,Math.min(10,r*.19)),ey=-r*.54;
  for(const x of [-eye*1.35,eye*1.35]){ellipse(x,ey,eye,eye*1.2,'#fffcee',INK,1.5);ellipse(x+eye*.15,ey+eye*.23,eye*.43,eye*.57,INK);ellipse(x+eye*.05,ey,eye*.13,eye*.17,'#fff');}
  if(p.immune>0){c.setLineDash([5,6]);ellipse(0,0,r+9,r*.74+8,'#ffffff09','#fff9',2);c.setLineDash([]);}
  c.restore();
 }
 function paint(world,myId,dt=.016){
  const me=world.players.find(p=>p.id===myId)||world.players[0];
  if(world!==orderedWorld){orderedWorld=world;ordered=[...world.objects].sort((a,b)=>a.y+a.r*.7-b.y-b.r*.7);first=true;}
  if(me&&first){camera={x:me.x,y:me.y};zoom=Math.min(width/(width<600?460:700),height/480,1.3);first=false;}
  if(me){const k=1-Math.exp(-dt*8);camera.x+=(me.x-camera.x)*k;camera.y+=(me.y-camera.y)*k;zoom+=(Math.min(width/(width<600?460:700),height/480,1.3)/(1+Math.max(0,me.r-25)/160)-zoom)*k;}
  const halfW=width/zoom/2,halfH=height/zoom/2;camera.x=halfW<WORLD/2?Math.max(halfW,Math.min(WORLD-halfW,camera.x)):WORLD/2;camera.y=halfH<WORLD/2?Math.max(halfH,Math.min(WORLD-halfH,camera.y)):WORLD/2;
  c.fillStyle='#b1e4e6';c.fillRect(0,0,width,height);c.save();c.translate(width/2,height/2);c.scale(zoom,zoom);c.translate(-camera.x,-camera.y);c.drawImage(layer,0,0);
  for(const p of world.players)if(p.respawn<=0)hole(p,world.time);
  for(const o of ordered){
   if(Math.abs(o.x-camera.x)>width/zoom/2+150||Math.abs(o.y-camera.y)>height/zoom/2+170)continue;
   if(!o.gone)object(o);
   else{const age=world.time-o.at;if(age>=.6||age<0)continue;const a=Math.max(0,1-age/.6),p=world.players.find(p=>p.slot===o.eater);
    if(age<.42){c.save();c.globalAlpha=Math.min(1,a*1.6);if(p)c.translate((p.x-o.x)*(1-a),(p.y-o.y)*(1-a)+age*12);c.translate(o.x,o.y);c.rotate(Math.sin(age*12+o.id)*age*.5);c.translate(-o.x,-o.y);object(o,a);c.restore();}
    if(p){c.save();c.globalAlpha=a;for(let k=0;k<5;k++){const angle=k*TAU/5+o.id,d=(1-a)*25+8,x=o.x+Math.cos(angle)*d,y=o.y+Math.sin(angle)*d*.6;S.poly([[x,y-3],[x+1,y-1],[x+4,y],[x+1,y+1],[x,y+4],[x-1,y+1],[x-4,y],[x-1,y-1]],k%2?'#fff9d2':COLORS[p.slot%8],null);}c.restore();}
   }
  }
  const guide=me&&growthGuide(world,me);if(guide?.target&&me.respawn<=0){const o=guide.target;c.save();c.strokeStyle='#ffe478';c.lineWidth=3;c.setLineDash([7,6]);c.beginPath();c.ellipse(o.x,o.y+4,o.r+10,(o.r+10)*.75,0,0,TAU);c.stroke();c.setLineDash([]);if(Math.hypot(o.x-me.x,o.y-me.y)>me.r+45){const a=Math.atan2(o.y-me.y,o.x-me.x),x=me.x+Math.cos(a)*(me.r+32),y=me.y+Math.sin(a)*(me.r+32);c.translate(x,y);c.rotate(a);S.poly([[10,0],[-6,-7],[-3,0],[-6,7]],'#ffe478',INK,2);}c.restore();}
  for(const p of world.players){if(p.respawn>0)continue;const label=p.id===myId?'VOCÊ':p.bot?'Bot '+p.slot:'Jogador '+(p.slot+1);c.font='900 12px system-ui';c.textAlign='center';const tw=c.measureText(label).width,ly=p.y-p.r*.74-27;S.box(p.x-tw/2-9,ly,tw+18,21,8,p.id===myId?'#fff6d6':INK,INK,1.5);c.fillStyle=p.id===myId?INK:'#fff';c.fillText(label,p.x,ly+14);}
  c.restore();
  const sz=Math.min(108,width*.2),x=width-sz-14,y=height-sz-14;S.box(x-5,y-5,sz+10,sz+10,13,'#fffae9',INK,2.5);c.save();c.beginPath();c.roundRect(x,y,sz,sz,8);c.clip();c.drawImage(layer,x,y,sz,sz);
  for(const p of world.players)if(p.respawn<=0)S.ellipse(x+p.x/WORLD*sz,y+p.y/WORLD*sz,p.id===myId?4:3,p.id===myId?4:3,COLORS[p.slot%8],INK,1);
  c.restore();
 }
 resize();return{paint,resize};
}
