import {COLORS, NAMES} from './rules.mjs?v=20261112-update1';
import {ROOMS, CORRIDORS, OBSTACLES, nearTerminal} from './world.mjs?v=20261112-update1';

const art = {};
const scenes = new WeakMap();
let terrain;

export async function prepareArt() {
  await Promise.all(['decks', 'equipment', 'crew'].map(async key => {
    if (art[key]) return;
    const image = new Image();
    image.src = new URL('../assets/descubra-ship-v1/' + key + '.webp', import.meta.url);
    await image.decode();
    art[key] = image;
  }));
}

const equipment = [
  [3,20,378,175], [387,13,378,189], [771,16,378,184],
  [3,242,378,163], [395,219,362,210], [771,242,378,164],
  [3,462,378,155], [387,440,378,199], [771,454,378,172],
  [33,651,318,210], [387,658,378,195], [771,659,378,194]
];
const stations = ['console','samples','reactor','garden','scanner','cargo','meeting'];
function piece(o) {
  if (o.kind === 'cabinet') return o.room === 1 ? 7 : 8;
  if (o.kind === 'garden' && o.w < 200) return 9;
  if (o.kind === 'bed') return 10;
  if (o.kind === 'console' && o.room === 6) return 11;
  return stations.indexOf(o.kind);
}

function label(c, text, x, y, size, ink = '#fff2cf') {
  c.font = 'bold ' + size + 'px system-ui';
  c.textAlign = 'center';
  c.lineJoin = 'round';
  c.strokeStyle = '#162837';
  c.lineWidth = Math.max(3, size / 4);
  c.strokeText(text, x, y);
  c.fillStyle = ink;
  c.fillText(text, x, y);
}

function passage(c, x, y, w, h) {
  // Use only the walkable metal strip of the eighth panel. Rotate its lane
  // markings for north/south passageways and clip the last partial tile.
  c.save();
  c.translate(x, y);
  if (h > w) { c.translate(w, 0); c.rotate(Math.PI / 2); [w, h] = [h, w]; }
  c.beginPath(); c.rect(0, 0, w, h); c.clip();
  const step = h * 2;
  for (let i = 0; i < w; i += step) {
    c.drawImage(art.decks, 1536, 400, 512, 225, i, 0, step, h);
  }
  c.restore();
}

function deckPlan() {
  if (terrain) return terrain;
  terrain = document.createElement('canvas');
  terrain.width = 2200; terrain.height = 1700;
  const c = terrain.getContext('2d');
  c.lineJoin = 'round';
  for (const r of [...ROOMS, ...CORRIDORS]) {
    c.lineWidth = 18; c.strokeStyle = '#263847';
    c.strokeRect(r.x, r.y, r.w, r.h);
    c.lineWidth = 6; c.strokeStyle = '#ab8760';
    c.strokeRect(r.x, r.y, r.w, r.h);
  }
  for (const p of CORRIDORS) passage(c, p.x, p.y, p.w, p.h);
  for (const r of ROOMS) {
    c.drawImage(art.decks, r.id % 4 * 512, Math.floor(r.id / 4) * 320, 512, 320, r.x, r.y, r.w, r.h);
  }
  // Cut openings in the illustrated hull wherever a corridor meets a room.
  for (const [x,y,w,h] of [[1040,362,120,28],[590,410,22,120],[1588,410,22,120],
    [1040,639,120,83],[1040,998,120,24],[590,1090,22,120],[1588,1090,22,120],[1040,1239,120,77]]) {
    // A recessed threshold with lit side rails keeps the opening readable.
    c.save(); c.translate(x, y);
    const northSouth = w === 120;
    const span = northSouth ? w : h, depth = northSouth ? h : w;
    if (!northSouth) { c.translate(0, h); c.rotate(-Math.PI / 2); }
    c.drawImage(art.decks, 1594, 445, 240, depth * 2, 0, 0, span, depth);
    for (const side of [0,span-5]) {
      c.fillStyle='#364958'; c.fillRect(side,0,5,depth);
      c.fillStyle='#e6c78b'; c.fillRect(side+1,0,2,depth);
      c.fillStyle='#a3f4ed'; c.fillRect(side+1,depth*.35,2,depth*.3);
    }
    c.restore();
  }
  label(c, '← LABORATÓRIO', 820, 509, 15); label(c, 'REATOR →', 1380, 509, 15);
  label(c, '← JARDIM', 820, 1189, 15); label(c, 'ENFERMARIA →', 1380, 1189, 15);
  return terrain;
}

function furniture(c,o,alarm,time) {
  const index = piece(o);
  // The smaller stack in the depot uses one latched case from the cargo art.
  const src = o.kind === 'cargo' && o.w < 120 ? [776,245,124,81] : equipment[index];
  const width = o.w, height = Math.min(width * src[3] / src[2], o.h + 37);
  const bottom = o.y + o.h;
  c.drawImage(art.equipment, ...src, o.x, bottom-height, width, height);
  if (alarm && o.kind === 'reactor') {
    c.beginPath(); c.arc(o.x+width/2, bottom-height*.52, width*.12, 0, 2*Math.PI);
    c.fillStyle = 'rgba(255,70,35,' + (.47+.22*Math.sin(time*5)) + ')'; c.fill();
  }
}

function crew(c, slot, frame, x, footY, size, facing=1) {
  c.save(); c.translate(x,footY); c.scale(facing,1);
  c.drawImage(art.crew, frame*128, (slot-1)*128, 128,128, -size/2,-size,size,size);
  c.restore();
}

function terminal(c,state,me,time) {
  if (!me.alive || me.room < 0) return;
  const needed = me.room === 6 ? !me.meetingUsed :
    (state.role === 'crew' && !me.done.includes(me.room)) || (state.sabotage && me.room === 2);
  if (!needed) return;
  const t = ROOMS[me.room].terminal;
  c.beginPath(); c.ellipse(t.x,t.y+15,54+Math.sin(time*3)*3,22,0,0,Math.PI*2);
  c.strokeStyle = nearTerminal(me) ? '#ffdf70' : '#fff1b59c'; c.lineWidth = 4; c.stroke();
  label(c,'!',t.x,t.y-47,24,'#ffdb63');
}

export function drawShip(canvas,state,selected,time=0) {
  const c = canvas.getContext('2d'), rect = canvas.getBoundingClientRect();
  const w=Math.max(1,rect.width), h=Math.max(1,rect.height), dpr=Math.min(devicePixelRatio||1,2);
  if (canvas.width!==Math.round(w*dpr) || canvas.height!==Math.round(h*dpr)) {
    canvas.width=Math.round(w*dpr); canvas.height=Math.round(h*dpr);
  }
  c.setTransform(dpr,0,0,dpr,0,0);
  c.fillStyle='#0c182b'; c.fillRect(0,0,w,h);
  const me = state.players[state.slot-1];
  let scene = scenes.get(canvas);
  if (!scene) { scene={x:me.x,y:me.y,last:time,poses:new Map()}; scenes.set(canvas,scene); }
  const dt=Math.min(.1,Math.max(0,time-scene.last)); scene.last=time;
  scene.x+=(me.x-scene.x)*Math.min(1,dt*12); scene.y+=(me.y-scene.y)*Math.min(1,dt*12);
  const zoom=Math.min(1.25,Math.max(.9,Math.min(w/750,h/600))), cx=scene.x, cy=scene.y-35;
  for(let i=0;i<65;i++) {
    c.fillStyle=i%5?'#b0d8ec55':'#ffe0a2'; c.beginPath();
    c.arc(((i*173-cx*.09)%w+w)%w,((i*97-cy*.09)%h+h)%h,i%5?1:2,0,7); c.fill();
  }
  c.save(); c.translate(w/2,h/2); c.scale(zoom,zoom); c.translate(-cx,-cy);
  c.drawImage(deckPlan(),0,0);
  for (const r of ROOMS) label(c,r.short,r.x+r.w/2,r.y+r.h-22,17);
  const objects=OBSTACLES.map(o=>({y:o.y+o.h,paint:()=>furniture(c,o,state.sabotage,time)}));
  for (const r of state.reports.filter(r=>!r.reported && Number.isFinite(r.x+r.y))) {
    objects.push({y:r.y,paint:()=>crew(c,r.slot,6,r.x,r.y,62)});
  }
  for (const p of state.players) {
    if (!p.alive && me.alive) continue;
    let pose=scene.poses.get(p.slot);
    if (!pose) { pose={x:p.x,y:p.y,phase:0}; scene.poses.set(p.slot,pose); }
    const moving=p.walking || Math.hypot(p.x-pose.x,p.y-pose.y)>.4;
    const factor=p.slot===state.slot?1:Math.min(1,dt*10);
    pose.x+=(p.x-pose.x)*factor; pose.y+=(p.y-pose.y)*factor;
    pose.phase=moving?(pose.phase+dt*9)%4:0;
    objects.push({y:pose.y,paint:()=>{
      if (p.alive) crew(c,p.slot,Math.floor(pose.phase),pose.x,pose.y+3,71,p.facing||1);
      else crew(c,p.slot,4+Math.floor(time*2)%2,pose.x,pose.y+Math.sin(time*3)*3,72,p.facing||1);
      label(c,p.slot===state.slot?(p.alive?'VOCÊ':'VOCÊ · FANTASMA'):p.name,pose.x,pose.y+17,13);
      if (p.slot===state.slot) {
        c.fillStyle='#ffe286'; c.beginPath(); c.moveTo(pose.x-6,pose.y-80);
        c.lineTo(pose.x+6,pose.y-80); c.lineTo(pose.x,pose.y-72); c.fill();
      }
    }});
  }
  objects.sort((a,b)=>a.y-b.y).forEach(o=>o.paint());
  terminal(c,state,me,time); c.restore();
  if (state.sabotage) { c.strokeStyle='#f2798477'; c.lineWidth=12+4*Math.sin(time*4); c.strokeRect(0,0,w,h); }
}

export function drawOverview(canvas,state) {
  const c=canvas.getContext('2d'), p=state.players[state.slot-1];
  c.clearRect(0,0,canvas.width,canvas.height); c.save(); c.scale(.3,.3); c.drawImage(deckPlan(),0,0);
  for(const o of OBSTACLES) furniture(c,o,state.sabotage,0);
  for(const r of ROOMS) {
    if(r.id!==6) {
      c.fillStyle=p.done.includes(r.id)?'#6ec89e':'#ffdc77'; c.beginPath();
      c.arc(r.terminal.x,r.terminal.y,16,0,7); c.fill(); c.strokeStyle='#24323b'; c.lineWidth=4; c.stroke();
    }
    label(c,r.short,r.x+r.w/2,r.y+r.h*.67,29);
  }
  c.fillStyle=COLORS[p.slot-1]; c.strokeStyle='#fff'; c.lineWidth=7;
  c.beginPath(); c.arc(p.x,p.y,23,0,7); c.fill(); c.stroke(); c.restore();
}
export function portrait(slot) {
  const canvas=document.createElement('canvas'); canvas.width=100; canvas.height=110;
  crew(canvas.getContext('2d'),slot,7,50,105,100); canvas.setAttribute('aria-label',NAMES[slot-1]);
  return canvas;
}
