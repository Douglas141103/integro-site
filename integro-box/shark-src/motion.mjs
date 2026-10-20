const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const angleDelta=(target,current)=>Math.atan2(Math.sin(target-current),Math.cos(target-current));
// Bounded steering and acceleration keep schooling, pursuit and escape continuous.
export function steerFish(f,peers,player,dt,time){
 const pos=f.rig.group.position,distance=Math.hypot(pos.x-player.x,pos.y-player.y,pos.z-player.z),edible=f.level<player.level;
 let dx=Math.cos(f.dir+Math.sin(time*.31+f.phase)*.16),dz=Math.sin(f.dir+Math.sin(time*.31+f.phase)*.16),targetY=f.depth+Math.sin(time*.65+f.phase)*1.5,targetSpeed=2.1+Math.min(f.level,35)*.06;
 let cx=0,cz=0,cy=0,hx=0,hz=0,n=0,sx=0,sz=0;
 for(const other of peers){if(other===f)continue;const q=other.rig.group.position,ox=q.x-pos.x,oz=q.z-pos.z,d2=ox*ox+oz*oz+(q.y-pos.y)**2;if(d2<16&&d2>.01){sx-=ox/d2;sz-=oz/d2;}if(other.school===f.school&&d2<784){cx+=q.x;cz+=q.z;cy+=other.depth;hx+=Math.cos(other.dir);hz+=Math.sin(other.dir);n++;}}
 if(n){dx=dx*.4+hx/n*.7+(cx/n-pos.x)*.025;dz=dz*.4+hz/n*.7+(cz/n-pos.z)*.025;targetY=targetY*.6+cy/n*.4;}dx+=sx*1.8;dz+=sz*1.8;
 const reacting=distance<(edible?player.length+9:26)&&!player.protected;if(reacting){dx=(player.x-pos.x)*(edible?-1:1);dz=(player.z-pos.z)*(edible?-1:1);targetY=edible?f.depth+Math.sin(f.phase)*4:player.y;targetSpeed=edible?9:11;}
 if(pos.x>860)dx-=3;if(pos.x< -860)dx+=3;if(pos.z>560)dz-=3;if(pos.z< -560)dz+=3;
 const delta=angleDelta(Math.atan2(dz,dx),f.dir);f.dir+=clamp(delta,-dt*(reacting?2.8:1.3),dt*(reacting?2.8:1.3));f.speed+=(targetSpeed-f.speed)*(1-Math.exp(-dt*3));f.bank+=(clamp(-delta*.3,-.3,.3)-f.bank)*(1-Math.exp(-dt*4));
 const dy=clamp((targetY-pos.y)*.55,-3,3);pos.x=clamp(pos.x+Math.cos(f.dir)*f.speed*dt,-879,879);pos.z=clamp(pos.z+Math.sin(f.dir)*f.speed*dt,-579,579);pos.y=clamp(pos.y+dy*dt,6,93);f.rig.group.rotation.set(f.bank,-f.dir,Math.atan2(dy,Math.max(1,f.speed))*.65);
 return {distance,edible,turn:clamp(delta,-1,1),speed:f.speed};
}
