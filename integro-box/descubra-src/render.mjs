import {COLORS,NAMES} from './rules.mjs?v=20261023-walk2';
import {ROOMS,CORRIDORS,OBSTACLES,nearTerminal} from './world.mjs?v=20261023-walk2';
export function astronaut(ctx,x,y,color,scale=1,walk=0,dead=false){
 ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);ctx.lineWidth=3.4;ctx.strokeStyle='#172333';
 const box=(x,y,w,h,r,fill)=>{ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fillStyle=fill;ctx.fill();ctx.stroke();};
 ctx.fillStyle='#0003';ctx.beginPath();ctx.ellipse(0,24,24,7,0,0,7);ctx.fill();
 if(dead){box(-22,2,44,21,12,color);ctx.fillStyle='#cce7f1';ctx.font='bold 16px sans-serif';ctx.fillText('Zz',-7,-4);ctx.restore();return;}
 box(-25,-17,13,33,5,color);box(-16,7+Math.sin(walk)*3,12,21,5,color);box(4,7-Math.sin(walk)*3,12,21,5,color);box(-18,-37,38,55,18,color);
 box(-7,-28,34,23,9,'#c3e9ee');ctx.fillStyle='#f6ffff';ctx.beginPath();ctx.roundRect(-2,-24,21,6,3);ctx.fill();
 ctx.fillStyle='#fff';ctx.font='bold 13px sans-serif';ctx.textAlign='center';ctx.fillText('i',3,10);ctx.restore();
}
const scenes=new WeakMap();
function box(c,x,y,w,h,r,fill,stroke='#152a3b',width=4){c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=fill;c.fill();if(width){c.lineWidth=width;c.strokeStyle=stroke;c.stroke();}}
function floor(c){
 const rects=[...ROOMS,...CORRIDORS];c.lineJoin='round';
 for(const r of rects){c.lineWidth=30;c.strokeStyle='#07111e';c.strokeRect(r.x,r.y+8,r.w,r.h);c.lineWidth=18;c.strokeStyle='#4e7188';c.strokeRect(r.x,r.y,r.w,r.h);}
 for(const r of rects){c.fillStyle=r.color?'#b8c8cd':'#809aa9';c.fillRect(r.x,r.y,r.w,r.h);}
 c.save();c.beginPath();for(const r of rects)c.rect(r.x,r.y,r.w,r.h);c.clip();
 c.strokeStyle='#233e4f18';c.lineWidth=2;for(let x=0;x<2200;x+=55){c.beginPath();c.moveTo(x,0);c.lineTo(x,1700);c.stroke();}for(let y=0;y<1700;y+=55){c.beginPath();c.moveTo(0,y);c.lineTo(2200,y);c.stroke();}c.restore();
 for(const r of ROOMS){box(c,r.x+18,r.y+10,r.w-36,34,8,r.color,'#263f51',2);c.textAlign='center';c.fillStyle='#fff';c.font='bold 19px system-ui';c.fillText(r.short,r.x+r.w/2,r.y+34);c.fillStyle=r.color+'35';c.fillRect(r.x+24,r.y+r.h-45,r.w-48,22);}
 // Door tracks bridge each room and its corridor. No invisible doorway barriers.
 for(const [x,y,w,h] of [[1040,375,120,10],[595,410,10,120],[1595,410,10,120],[1040,645,120,10],[1040,1005,120,10],[595,1090,10,120],[1595,1090,10,120],[1040,1245,120,10]]){c.fillStyle='#304f64';c.fillRect(x,y,w,h);c.fillStyle='#8bf0d0';c.fillRect(x+2,y+2,Math.max(3,w-4),Math.max(3,h-4));}
 c.fillStyle='#4e687c';c.textAlign='center';c.font='900 34px system-ui';c.fillText('INTEGRO',1100,970);
 c.font='bold 16px system-ui';c.fillStyle='#e7f8fb';c.fillText('← LABORATÓRIO     ·     REATOR →',1100,500);c.fillText('← JARDIM     ·     ENFERMARIA →',1100,1180);
}
function furniture(c,o,state,time){const {x,y,w,h,kind}=o;box(c,x+4,y+8,w,h,14,'#1d344d55','#0000',0);box(c,x,y,w,h,14,kind==='garden'?'#b6815e':'#526b80');
 if(kind==='console'||kind==='samples'){box(c,x+10,y+9,w-20,h-24,7,'#203e53','#152a3b',2);if(kind==='samples'){for(let i=0;i<5;i++)box(c,x+22+i*(w-35)/5,y+13,23,33,6,['#7ee1bf','#b89be8','#f4d17b','#7bcfe9','#ef97b4'][i],'#3d5867',2);}else for(let i=0;i<3;i++){box(c,x+15+i*(w-20)/3,y+13,(w-40)/3,26,4,'#8de2da','#264c60',2);c.fillStyle='#edfff1';c.fillRect(x+20+i*(w-20)/3,y+20,15,3);}}
 else if(kind==='reactor'){box(c,x+28,y-15,w-56,h+8,28,state.sabotage?'#ed8493':'#69b5b7');for(let i=0;i<3;i++)box(c,x+42,y+7+i*22,w-84,11,5,state.sabotage?'#ffe396':'#c2ffdb','#0000',0);}
 else if(kind==='meeting'){box(c,x+15,y+15,w-30,h-30,18,'#7d9aab');box(c,x+w/2-22,y+h/2-20,44,37,14,'#f77e89');c.fillStyle='#fff0cf';c.fillRect(x+w/2-11,y+h/2-13,22,5);}
 else if(kind==='garden'){for(let i=0;i<Math.max(1,Math.floor(w/90));i++){const px=x+35+i*90;box(c,px-20,y+h-32,43,28,7,'#d1a078','#805c4d',2);c.fillStyle='#55a96f';c.beginPath();c.ellipse(px,y+h-43,22,30,-.4,0,7);c.fill();c.fillStyle='#8cd59a';c.beginPath();c.ellipse(px+15,y+h-46,14,24,.6,0,7);c.fill();}}
 else if(kind==='scanner'||kind==='bed'){box(c,x+10,y+10,w-20,h-20,12,'#edf1dd','#a4bac0',2);box(c,x+15,y+15,w-30,17,6,'#85d1d4','#0000',0);c.fillStyle='#589dab';c.font='bold 24px sans-serif';c.textAlign='center';c.fillText('+',x+w/2,y+h-15);}
 else{for(let i=0;i<Math.max(1,Math.floor(w/85));i++){box(c,x+6+i*85,y+5,Math.min(75,w-12),h-10,8,'#c39b70','#725e52',3);c.fillStyle='#e9c99b';c.fillRect(x+32+i*85,y+6,12,h-12);}}
}
export function drawShip(canvas,state,selected,time=0){
 const c=canvas.getContext('2d'),rect=canvas.getBoundingClientRect(),w=Math.max(1,rect.width),h=Math.max(1,rect.height),dpr=Math.min(devicePixelRatio||1,2);if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);}
 c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle='#0c182b';c.fillRect(0,0,w,h);const me=state.players[state.slot-1];let scene=scenes.get(canvas);if(!scene){scene={x:me.x,y:me.y,last:time,poses:new Map()};scenes.set(canvas,scene);}const dt=Math.min(.1,Math.max(0,time-scene.last));scene.last=time;scene.x+=(me.x-scene.x)*Math.min(1,dt*12);scene.y+=(me.y-scene.y)*Math.min(1,dt*12);
 const zoom=Math.min(1.25,Math.max(.9,Math.min(w/750,h/600))),cx=scene.x,cy=scene.y-35;
 for(let i=0;i<65;i++){c.fillStyle=i%5?'#b0d8ec55':'#ffe0a2';c.beginPath();c.arc(((i*173-cx*.09)%w+w)%w,((i*97-cy*.09)%h+h)%h,i%5?1:2,0,7);c.fill();}
 c.save();c.translate(w/2,h/2);c.scale(zoom,zoom);c.translate(-cx,-cy);floor(c);for(const o of OBSTACLES)furniture(c,o,state,time);
 if(me.alive&&me.room>=0){const r=ROOMS[me.room],t=r.terminal,needed=me.room===6?!me.meetingUsed:state.role==='crew'&&!me.done.includes(me.room)||state.sabotage&&me.room===2;if(needed){c.beginPath();c.ellipse(t.x,t.y+15,55+Math.sin(time*3)*3,28,0,0,7);c.strokeStyle=nearTerminal(me)?'#ffe275':'#fff7b570';c.lineWidth=5;c.stroke();c.fillStyle='#ffe275';c.font='bold 26px system-ui';c.textAlign='center';c.fillText('!',t.x,t.y-35);}}
 const people=state.players.slice().sort((a,b)=>a.y-b.y);
 for(const p of people){if(!p.alive&&!state.reports.some(r=>r.slot===p.slot&&!r.reported)&&p.slot!==state.slot)continue;let pose=scene.poses.get(p.slot);if(!pose){pose={x:p.x,y:p.y};scene.poses.set(p.slot,pose);}const moving=Math.hypot(p.x-pose.x,p.y-pose.y)>1;if(p.slot===state.slot){pose.x=p.x;pose.y=p.y;}else{pose.x+=(p.x-pose.x)*Math.min(1,dt*10);pose.y+=(p.y-pose.y)*Math.min(1,dt*10);}c.save();c.translate(pose.x,pose.y-22);c.scale(p.facing||1,1);if(!p.alive)c.globalAlpha=.65;astronaut(c,0,0,COLORS[p.slot-1],1,moving||p.walking?time*14:0,!p.alive);c.restore();c.fillStyle='#132e42';c.font='bold 15px system-ui';c.textAlign='center';c.fillText(p.slot===state.slot?'VOCÊ':p.name,pose.x,pose.y+24);if(p.slot===state.slot){c.fillStyle='#ffe286';c.beginPath();c.moveTo(pose.x-8,pose.y-78);c.lineTo(pose.x+8,pose.y-78);c.lineTo(pose.x,pose.y-66);c.fill();}}
 c.restore();if(state.sabotage){c.strokeStyle='#f2798477';c.lineWidth=12+4*Math.sin(time*4);c.strokeRect(0,0,w,h);}
}
export function drawOverview(canvas,state){const c=canvas.getContext('2d');c.clearRect(0,0,660,510);c.save();c.scale(.3,.3);floor(c);for(const r of ROOMS){if(r.id===6)continue;c.fillStyle=state.players[state.slot-1].done.includes(r.id)?'#6ec89e':'#ffdc77';c.beginPath();c.arc(r.terminal.x,r.terminal.y,25,0,7);c.fill();}const p=state.players[state.slot-1];c.fillStyle=COLORS[p.slot-1];c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.arc(p.x,p.y,23,0,7);c.fill();c.stroke();c.restore();}
export function portrait(slot){const canvas=document.createElement('canvas');canvas.width=100;canvas.height=110;astronaut(canvas.getContext('2d'),50,62,COLORS[slot-1],1.25);canvas.setAttribute('aria-label',NAMES[slot-1]);return canvas;}
