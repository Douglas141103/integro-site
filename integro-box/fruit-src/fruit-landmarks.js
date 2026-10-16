// Five distinct silhouettes, kept beside the mission route and away from docks.
export function addIslandLandmarks(art,parent,island){
 if(island.id<15)return [];const moving=[];
 const group=(name,x,z)=>{const g=parent.clone(false);g.clear();g.name=name;g.position.set(x,0,z);parent.add(g);return g;};
 const part=(g,kind,c,x,y,z,sx,sy=sx,sz=sx,tile='stone')=>art.mesh(g,kind,c,x,y,z,sx,sy,sz,tile);
 const c=island.color,gold=0xffcf75,white=0xe7fff3;
 if(island.biome==='mushroom'){
  for(const [i,x,z]of[[0,-23,9],[1,24,15],[2,-27,-5],[3,29,-12]]){
   const g=group('GiantMushroom',x,z),height=3.8+i*.7;
   part(g,'cyl',0xf3dfb4,0,height/2,0,.65,height,.7);part(g,'ball',i%2?0xe88eac:c,0,height,0,3.7,1.25,3.3);
   for(let j=0;j<6;j++){const a=j*Math.PI/3;part(g,'ball',white,Math.sin(a)*2.3,height+.75,Math.cos(a)*2.2,.36,.12,.36);}
   const orb=part(g,'rock',gold,.6,height+1.7,0,.22);moving.push({mesh:orb,type:'float',base:orb.position.y});
  }
 }else if(island.biome==='clockwork'){
  for(const x of[-23,24]){
   const g=group('ClockTower',x,13);part(g,'round',0x607d83,0,3.4,0,4.2,6.8,3.5);part(g,'cone',gold,0,7.6,0,3.1,2.3,2.9,'gold');
   const wheel=group('CopperGear',0,0);g.add(wheel);wheel.position.set(0,5,-1.85);const rim=part(wheel,'ring',gold,0,0,0,1.4,1.4,1.4,'gold');
   for(let j=0;j<12;j++){const a=j*Math.PI/6,p=part(wheel,'round',gold,Math.sin(a)*1.5,Math.cos(a)*1.5,0,.28,.42,.26,'gold');p.rotation.z=-a;}
   part(wheel,'round',white,0,.4,-.13,.12,.9,.12);part(wheel,'round',white,.3,0,-.13,.65,.12,.12);moving.push({mesh:wheel,type:'gear'});
  }
 }else if(island.biome==='sky'){
  for(const x of[-22,23]){
   const g=group('SkyGarden',x,12);for(const side of[-1,1]){part(g,'cyl',white,side*3,3.7,0,.5,7.4,.5);part(g,'ball',0xd3edec,side*3,7.4,0,1.1,.4,1.1);}
   const arch=part(g,'ring',gold,0,7.1,0,3.1,3.1,3.1,'gold');part(g,'round',white,0,7.3,0,7,.35,1);
   for(let j=0;j<4;j++)part(g,'ball',0xf4ffec,j*1.8-2.7,1.5,0,1.7,.65,1.3,'cloud');
   const kite=part(g,'rock',c,0,9.2,0,1.1,1.6,.16,'cloth');moving.push({mesh:kite,type:'float',base:9.2});
  }
 }else if(island.biome==='lunar'){
  const g=group('LunarObservatory',-24,12);part(g,'cyl',0x7c7ca5,0,2,0,5,4,5);part(g,'ball',0xb8b2e7,0,4,0,4.8,2.8,4.8);part(g,'round',gold,0,6,0,.18,4,.18,'gold');
  const orbit=part(g,'ring',gold,0,8.4,0,2.1,2.1,2.1,'gold');moving.push({mesh:orbit,type:'orbit'});part(g,'rock',white,0,8.4,0,.9);
  for(let j=0;j<7;j++){const h=group('MoonCrystal',22+Math.sin(j)*5,8+j*3);part(h,'rock',j%2?c:0x87dbe8,0,2,0,1.1,2.8,1.1);}
 }else if(island.biome==='station'){
  const g=group('IntegroStation',-23,8);part(g,'round',0xf5e7bf,0,2.6,0,10,5.2,6);part(g,'cone',0x399c89,0,6,0,7.3,3.6,4.9,'roof');
  for(const x of[-3.3,0,3.3]){part(g,'round',0x224d5b,x,2.5,-3.05,1.6,3.8,.12);part(g,'round',gold,x,4.4,-3.15,1.8,.12,.18,'gold');}
  const sign=part(g,'round',0x285e65,0,5,-3.3,5.8,.9,.2);sign.name='StationSign';
  for(const x of[-1,1]){const i=part(g,'round',gold,x*.65,5,-3.45,.22,.58,.1,'gold');i.rotation.z=-.18;}
  const train=group('IntegroLocomotive',24,10);part(train,'round',c,0,1.6,0,3,2.6,5.8);part(train,'round',0x20575a,0,3,1.5,3.5,.4,2.6);part(train,'cyl',gold,0,3.3,-1.5,.4,1.8,.4,'gold');
  for(const x of[-1.65,1.65])for(const z of[-1.8,1.6]){const wheel=part(train,'cyl',0x264a58,x,.65,z,.65,.3,.65);wheel.rotation.z=Math.PI/2;}
  for(const x of[-1.1,1.1])part(train,'round',0x5d7b83,x,.12,0,.14,.14,17);for(let j=0;j<12;j++)part(train,'round',0x9b7857,0,.06,j*1.4-7.7,3.3,.1,.25,'wood');
 }
 return moving;
}
export function animateLandmarks(parts,time,reduced){for(const p of parts){const t=reduced?0:time;if(p.type==='float')p.mesh.position.y=p.base+Math.sin(t*1.5)*.18;else if(p.type==='gear')p.mesh.rotation.z=t*.22;else p.mesh.rotation.y=t*.35;}}
