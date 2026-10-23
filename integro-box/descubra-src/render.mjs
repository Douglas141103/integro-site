import {ROOMS,COLORS,NAMES} from './rules.mjs';
export function astronaut(ctx,x,y,color,scale=1,walk=0,dead=false){
 ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);ctx.lineWidth=3.4;ctx.strokeStyle='#172333';
 const box=(x,y,w,h,r,fill)=>{ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fillStyle=fill;ctx.fill();ctx.stroke();};
 ctx.fillStyle='#0003';ctx.beginPath();ctx.ellipse(0,24,24,7,0,0,7);ctx.fill();
 if(dead){box(-22,2,44,21,12,color);ctx.fillStyle='#cce7f1';ctx.font='bold 16px sans-serif';ctx.fillText('Zz',-7,-4);ctx.restore();return;}
 box(-25,-17,13,33,5,color);box(-16,7+Math.sin(walk)*3,12,21,5,color);box(4,7-Math.sin(walk)*3,12,21,5,color);box(-18,-37,38,55,18,color);
 box(-7,-28,34,23,9,'#c3e9ee');ctx.fillStyle='#f6ffff';ctx.beginPath();ctx.roundRect(-2,-24,21,6,3);ctx.fill();
 ctx.fillStyle='#fff';ctx.font='bold 13px sans-serif';ctx.textAlign='center';ctx.fillText('i',3,10);ctx.restore();
}
const animations=new WeakMap();
export function drawShip(canvas,state,selected,time=0){
 const c=canvas.getContext('2d'),w=1000,h=690;c.clearRect(0,0,w,h);c.fillStyle='#101d30';c.fillRect(0,0,w,h);
 for(let i=0;i<80;i++){c.fillStyle=i%4?'#91b8d657':'#f9df8d';c.beginPath();c.arc((i*173+31)%1000,(i*97+17)%690,i%4?1:1.8,0,7);c.fill();}
 const box=(x,y,w,h,r,fill,stroke='#243747',width=6)=>{c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=fill;c.fill();if(width){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}};
 // Hull and connected walkways form one unmistakable ship floor plan.
 box(34,8,932,660,76,'#25394c','#0a1525',10);
 c.lineCap='round';for(const r of ROOMS.slice(0,6)){c.beginPath();c.moveTo(r.x+r.w/2,r.y+r.h/2);c.lineTo(500,335);c.strokeStyle='#0e2332';c.lineWidth=65;c.stroke();c.strokeStyle='#8297a8';c.lineWidth=49;c.stroke();c.strokeStyle='#b5c8ce';c.lineWidth=2;c.setLineDash([8,10]);c.stroke();c.setLineDash([]);}
 for(const r of ROOMS){const active=selected===r.id;box(r.x,r.y,r.w,r.h,23,r.color,active?'#f8df88':'#0d2335',active?6:5);box(r.x+9,r.y+36,r.w-18,r.h-45,13,r.id===6?'#b5c4ce':'#d2dadd','#233647',2);
  c.fillStyle='#fff';c.textAlign='center';c.font='bold 13px system-ui';c.fillText(r.short,r.x+r.w/2,r.y+24);
  c.strokeStyle='#a8b7be';c.lineWidth=1;for(let x=r.x+35;x<r.x+r.w-15;x+=34){c.beginPath();c.moveTo(x,r.y+40);c.lineTo(x,r.y+r.h-14);c.stroke();}
  if(r.id===6){box(440,280,120,64,25,'#536d84','#253e50',4);box(481,292,38,31,11,'#ef7380','#34384a',3);c.fillStyle='#42586d';c.font='bold 15px system-ui';c.fillText('INTEGRO',500,407);}
  else if(r.id===2){box(798,131,50,74,12,state?.sabotage?'#f27a76':'#7be0ce','#2c5260',4);for(let i=0;i<3;i++)box(808,143+i*19,30,8,3,'#ecfff0','#ecfff0',0);}
  else if(r.id===3){for(let i=0;i<3;i++){box(90+i*58,451,43,35,6,'#b98967','#5c6d64',3);c.fillStyle='#65b47a';c.beginPath();c.ellipse(111+i*58,448,17,24,i*.5,0,7);c.fill();}}
  else if(r.id===4){for(let i=0;i<2;i++){box(737+i*91,454,60,50,9,'#f6f0da','#92a5ac',3);box(742+i*91,458,50,13,4,'#93d6db','#93d6db',0);}}
  else if(r.id===5){for(let i=0;i<3;i++){box(407+i*59,561,45,37,6,'#c59b71','#735f55',3);c.fillStyle='#e7c89e';c.fillRect(425+i*59,562,8,35);}}
  else if(r.id===1){box(84,128,185,31,7,'#70818e','#334f60',3);for(let i=0;i<4;i++)box(102+i*40,117,17,32,5,['#94dfbc','#da9fe6','#8cd3ec','#f6cd73'][i],'#45576e',2);}
  else{box(400,68,200,39,10,'#3e5c70','#263849',3);for(let i=0;i<3;i++)box(412+i*60,75,48,20,4,'#8ce0d3','#263849',2);}
  if(r.id!==6){c.fillStyle='#213d50';c.font='bold 17px system-ui';c.fillText('◇',r.x+21,r.y+r.h-17);}
 }
 if(!state)return;
 const people=state.players||[];let poses=animations.get(canvas);if(!poses){poses=new Map();animations.set(canvas,poses);}
 for(const p of people){const r=ROOMS[p.room]||ROOMS[6],group=people.filter(q=>q.room===p.room),idx=group.indexOf(p),px=r.x+r.w/2+(idx-(group.length-1)/2)*37,py=r.y+r.h-36;
  let pose=poses.get(p.slot);if(!pose){pose={x:px,y:py,last:time};poses.set(p.slot,pose);}const dt=Math.min(.08,Math.max(0,time-pose.last));pose.last=time;const moving=Math.hypot(px-pose.x,py-pose.y)>2;pose.x+=(px-pose.x)*Math.min(1,dt*7);pose.y+=(py-pose.y)*Math.min(1,dt*7);astronaut(c,pose.x,pose.y,COLORS[p.slot-1],.68,moving?time*13:0,!p.alive);
  c.font=(p.slot===state.slot?'bold ':'')+'11px system-ui';c.fillStyle='#132d3e';c.textAlign='center';c.fillText(p.slot===state.slot?'VOCÊ':NAMES[p.slot-1],px,py+28);
  if(p.slot===state.slot){c.fillStyle='#ffdb70';c.beginPath();c.moveTo(px-6,py-39);c.lineTo(px+6,py-39);c.lineTo(px,py-30);c.fill();}
 }
 if(state.sabotage){c.fillStyle='#f1737c';c.font='bold 17px system-ui';c.textAlign='left';c.fillText('⚠ REATOR EM ALERTA',47,654);}
}
export function pickRoom(canvas,event){const r=canvas.getBoundingClientRect(),x=(event.clientX-r.left)*1000/r.width,y=(event.clientY-r.top)*690/r.height;return ROOMS.find(v=>x>=v.x&&x<=v.x+v.w&&y>=v.y&&y<=v.y+v.h)?.id;}
export function portrait(slot){const canvas=document.createElement('canvas');canvas.width=100;canvas.height=110;astronaut(canvas.getContext('2d'),50,62,COLORS[slot-1],1.25);canvas.setAttribute('aria-label',NAMES[slot-1]);return canvas;}
