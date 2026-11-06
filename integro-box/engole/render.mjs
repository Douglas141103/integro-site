import{WORLD,COLORS}from'./core.mjs';
const walls=['#8b99bf','#e1a96b','#9dbb9c','#bf9dab','#8eacbb'];
export function renderer(canvas){
 const c=canvas.getContext('2d');let camera={x:800,y:800},width=800,height=600,zoom=1,first=true;
 function resize(){const r=canvas.getBoundingClientRect();width=r.width||800;height=r.height||600;const d=Math.min(2,globalThis.devicePixelRatio||1);canvas.width=width*d;canvas.height=height*d;c.setTransform(d,0,0,d,0,0);}
 const rect=(x,y,w,h,color)=>{c.fillStyle=color;c.fillRect(x,y,w,h);};
 function object(o,scale=1){
  c.save();c.translate(o.x,o.y);c.scale(scale,scale);const r=o.r;
  c.fillStyle='#18263b25';c.beginPath();c.ellipse(r*.3,r*.45,r*1.2,r*.55,0,0,Math.PI*2);c.fill();
  if(o.kind==='tower'||o.kind==='house'){
   const ht=r*(o.kind==='tower'?1.1:.55);rect(-r,-r,r*2,r*2,walls[o.color]);rect(-r,-r-ht,r*2,r*2,'#edf0e0');rect(r*.65,-r-ht,r*.35,r*2+ht,'#667992');rect(-r,-r+ht*.3,r*1.6,r*1.7,'#8a9aaf');
   for(let x=-r+6;x<r-5;x+=12)for(let y=-r+ht*.4;y<r-2;y+=14)rect(x,y,6,8,'#d2f6ff');
   rect(-r+4,-r-ht+4,r*1.7,r*.9,walls[o.color]);
  }else if(o.kind==='tree'){
   rect(-3,-8,6,17,'#806344');c.fillStyle='#277c62';c.beginPath();c.arc(0,-r*.7,r,0,7);c.fill();c.fillStyle='#57b77b';c.beginPath();c.arc(-r*.25,-r,r*.72,0,7);c.fill();
  }else if(o.kind==='car'){
   rect(-r,-r*.5,r*2,r,['#ffbd45','#ef7e81','#85b6ff','#bba1ec','#ecebce'][o.color]);rect(-r*.2,-r*.5,r*.8,r,'#43677e');for(const x of [-r*.7,r*.6])for(const y of [-r*.7,r*.4])rect(x,y,5,5,'#23374c');
  }else if(o.kind==='cone'){
   c.fillStyle='#f7a759';c.beginPath();c.moveTo(0,-10);c.lineTo(-6,4);c.lineTo(6,4);c.closePath();c.fill();rect(-4,-2,8,3,'#fff5d8');
  }else{rect(-6,-10,12,15,'#557d91');rect(-7,-12,14,3,'#a6d0df');}
  c.restore();
 }
 function paint(world,myId,dt=.016){
  const me=world.players.find(p=>p.id===myId)||world.players[0];
  if(me&&first){camera={x:me.x,y:me.y};zoom=Math.min(width/700,height/480,1.3);first=false;}
  if(me){const k=1-Math.exp(-dt*8);camera.x+=(me.x-camera.x)*k;camera.y+=(me.y-camera.y)*k;zoom+=(Math.min(width/700,height/480,1.3)/(1+Math.max(0,me.r-25)/160)-zoom)*k;}
  rect(0,0,width,height,'#203445');c.save();c.translate(width/2,height/2);c.scale(zoom,zoom);c.translate(-camera.x,-camera.y);
  rect(0,0,WORLD,WORLD,'#9dbca0');
  for(let i=0;i<5;i++){rect(i*320,0,88,WORLD,'#617688');rect(0,i*320,WORLD,88,'#617688');rect(i*320+88,88,7,WORLD-88,'#c3d4cb');rect(88,i*320+88,WORLD-88,7,'#c3d4cb');}
  c.strokeStyle='#e2dbb9';c.lineWidth=2;c.setLineDash([12,14]);for(let i=0;i<5;i++){c.beginPath();c.moveTo(i*320+44,0);c.lineTo(i*320+44,WORLD);c.stroke();c.beginPath();c.moveTo(0,i*320+44);c.lineTo(WORLD,i*320+44);c.stroke();}c.setLineDash([]);
  for(const p of world.players){if(p.respawn>0)continue;c.save();c.translate(p.x,p.y);c.fillStyle='#102131';c.beginPath();c.ellipse(0,0,p.r,p.r*.72,0,0,7);c.fill();c.lineWidth=5;c.strokeStyle=COLORS[p.slot%8];c.stroke();c.strokeStyle='#ffffff35';c.lineWidth=2;c.beginPath();c.ellipse(0,2,p.r*.7,p.r*.45,0,0,7);c.stroke();if(p.immune>0){c.strokeStyle='#ffffff85';c.setLineDash([5,7]);c.beginPath();c.arc(0,0,p.r+7,0,7);c.stroke();c.setLineDash([]);}c.restore();}
  for(const o of world.objects){
   if(Math.abs(o.x-camera.x)>width/zoom/2+130||Math.abs(o.y-camera.y)>height/zoom/2+150)continue;
   if(!o.gone)object(o);
   else if(world.time-o.at<.45){const a=Math.max(0,1-(world.time-o.at)/.45);const p=world.players.find(p=>p.slot===o.eater);c.save();c.globalAlpha=a;if(p){c.translate((p.x-o.x)*(1-a),(p.y-o.y)*(1-a));}object(o,a);c.restore();}
  }
  for(const p of world.players){if(p.respawn>0)continue;c.fillStyle='#fff';c.strokeStyle='#122737';c.lineWidth=4;c.font='bold 14px system-ui';c.textAlign='center';const label=p.id===myId?'VOCÊ':p.bot?'Bot '+p.slot:'Jogador '+(p.slot+1);c.strokeText(label,p.x,p.y-p.r-16);c.fillText(label,p.x,p.y-p.r-16);}
  c.restore();
  // Overview shows the whole shared city and all participants.
  const sz=Math.min(110,width*.21),x=width-sz-14,y=height-sz-14;c.globalAlpha=.88;rect(x-4,y-4,sz+8,sz+8,'#152a3b');rect(x,y,sz,sz,'#789d87');
  for(const p of world.players){c.fillStyle=COLORS[p.slot%8];c.beginPath();c.arc(x+p.x/WORLD*sz,y+p.y/WORLD*sz,p.id===myId?4:2.5,0,7);c.fill();}c.globalAlpha=1;
 }
 resize();return{paint,resize};
}
