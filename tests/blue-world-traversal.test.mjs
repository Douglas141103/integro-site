import test from 'node:test';
import assert from 'node:assert/strict';
import {BlueRun} from '../integro-box/blue-src/engine.mjs';
for(let level=0;level<3;level++)test('full traversal '+(level+1)+' uses only normal movement commands',()=>{
 const r=new BlueRun(level);let held=0,maxX=0,trace=[],lastMark=0;
 for(let f=0;f<9000&&r.status==='playing';f++){
  const p=r.player,surfaces=r.surfaces(),floor=surfaces.find(s=>s.id===p.platform);
  const down=level===2&&p.x>28.7&&p.x<36.2;
  let right=true,jump=false;
  if(p.grounded&&!down){
   const obstacle=surfaces.find(s=>s.kind!=='root'&&s.y>p.y+.2&&s.y<p.y+2.1&&s.x-s.w/2-p.x<1.3&&s.x-s.w/2>p.x-.2);
   const edge=floor?floor.x+floor.w/2-p.x:9;
   const groundAhead=surfaces.find(s=>s.id!==floor?.id&&s.kind!=='root'&&s.x-s.w/2<=p.x+1.4&&s.x+s.w/2>=p.x+1.4&&s.y<=p.y+.1&&s.y>p.y-(floor?.kind==='stone'?2.3:.1));
   if(obstacle)jump=true;
   else if(floor?.kind==='lift'){
    const target=surfaces.filter(s=>s.x-s.w/2>p.x+.4&&s.kind==='land').sort((a,b)=>(a.x-a.w/2)-(b.x-b.w/2))[0];
    if(target&&target.x-target.w/2-p.x<3.4&&target.y-p.y<1.35)jump=true;else right=false;
   }else if(edge<1.2&&!groundAhead){
    const target=surfaces.filter(s=>s.x+s.w/2>p.x+1&&s.x-s.w/2>floor.x+floor.w/2-.2&&s.y>=p.y-.1&&s.y<=p.y+2).sort((a,b)=>(a.x-a.w/2)-(b.x-b.w/2))[0];
    if(target&&target.x-target.w/2-p.x<3.5)jump=true;else if(edge<.6)right=false;
   }
   if(r.enemies.some(e=>!e.freed&&e.x>p.x&&e.x-p.x<1.6&&Math.abs(e.y-p.y)<.5))jump=true;
  }
  if(jump&&!r.previousInput.jump)held=38;else jump=false;if(held>0){jump=true;held--;}
  const pulse=r.cooldown<=0&&r.level.switches.some(s=>Math.abs(s.x-p.x)<2.3&&(r.bridges[s.group]||0)<2.8);
  r.update(1/60,{right,down,jump,pulse});maxX=Math.max(maxX,p.x);
  if(Math.floor(p.x/10)>lastMark){lastMark=Math.floor(p.x/10);trace.push([f,Math.round(p.x),Math.round(p.y*10)/10]);}
 }
 assert.equal(r.status,'won',JSON.stringify({x:r.player.x,maxX,trace}));assert.equal(r.deaths,0);
});

test('Bront is beatable across three cycles with ordinary movement and pulse input',()=>{
 const r=new BlueRun(3);let held=0;
 for(let f=0;f<9000&&r.status==='playing';f++){
  const p=r.player,b=r.boss,dist=b.x-p.x,close=Math.abs(dist)<2.1;let jump=false;
  if(p.grounded&&!r.previousInput.jump&&((b.phase==='roll'&&Math.abs(dist)<3.3)||r.waves.some(w=>Math.abs(w.x-p.x)<1.9)))held=38;
  if(held){jump=true;held--;}
  const follow=b.phase==='rest'||b.phase==='recover'||b.phase==='roll';
  r.update(1/60,{right:follow&&!close&&dist>0,left:follow&&!close&&dist<0,jump,pulse:b.phase==='rest'&&Math.abs(dist)<2.3&&r.cooldown<=0});
 }
 assert.equal(r.status,'won');assert.equal(r.boss.hits,3);assert.equal(r.deaths,0);
});
