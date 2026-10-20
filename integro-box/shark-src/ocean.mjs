import * as T from 'three';
import {REGIONS,WORLD} from './rules.mjs';
const rand=(seed=>()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;})(918273);
export function makeOcean(scene){
 const objects=[],geometries=new Set(),materials=new Set(),animated=[],landmarks=[];
 const mat=(color,emissive=0)=>{const m=new T.MeshToonMaterial({color,emissive,emissiveIntensity:.3});materials.add(m);return m;};
 const sphere=new T.IcosahedronGeometry(1,1),cube=new T.BoxGeometry(1,1,1),cylinder=new T.CylinderGeometry(1,1,1,8),cone=new T.ConeGeometry(1,1,7);[sphere,cube,cylinder,cone].forEach(g=>geometries.add(g));
 const palette={rock:mat(0x547b91),pink:mat(0xf191b0),orange:mat(0xffbf82),purple:mat(0xb59beb),kelp:mat(0x3fbba0),kelp2:mat(0x83cba1),wood:mat(0x83716d),wood2:mat(0xba967d),stone:mat(0xa2bfe0),gold:mat(0xfbd784),lava:mat(0xff9472,0xff683b),black:mat(0x4c5478),ice:mat(0xc1f4ff)};
 const matrix=new T.Object3D();
 function batch(geo,material,items){const mesh=new T.InstancedMesh(geo,material,items.length);items.forEach((p,i)=>{matrix.position.set(p.x,p.y,p.z);matrix.rotation.set(p.rx||0,p.ry||0,p.rz||0);matrix.scale.set(p.sx||1,p.sy||1,p.sz||1);matrix.updateMatrix();mesh.setMatrixAt(i,matrix.matrix);});mesh.computeBoundingSphere();scene.add(mesh);objects.push(mesh);return mesh;}
 function part(group,geo,material,x,y,z,sx,sy,sz,rz=0,ry=0){const m=new T.Mesh(geo,material);m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.rotation.set(0,ry,rz);group.add(m);return m;}
 const terrain=new T.PlaneGeometry(WORLD.width,WORLD.depth,120,80);terrain.rotateX(-Math.PI/2);const attr=terrain.attributes.position,colors=[];
 for(let i=0;i<attr.count;i++){const x=attr.getX(i),z=attr.getZ(i),y=Math.sin(x*.025)*Math.cos(z*.019)*2+Math.sin(x*.06+z*.03);attr.setY(i,y-3);const ri=(z<0?0:3)+Math.max(0,Math.min(2,Math.floor((x+900)/600))),c=new T.Color(REGIONS[ri].floor);c.multiplyScalar(.85+rand()*.24);colors.push(c.r,c.g,c.b);}
 terrain.setAttribute('color',new T.Float32BufferAttribute(colors,3));terrain.computeVertexNormals();geometries.add(terrain);const floorMat=new T.MeshToonMaterial({vertexColors:true});materials.add(floorMat);const floor=new T.Mesh(terrain,floorMat);scene.add(floor);objects.push(floor);
 for(const [ri,r] of REGIONS.entries()){
  const rocks=[],corals=[],branches=[],leaves=[],pillars=[],tops=[];
  for(let i=0;i<95;i++){const x=r.x+(rand()-.5)*565,z=r.z+(rand()-.5)*565,s=3+rand()*9;rocks.push({x,y:s*.3-1,z,sx:s,sy:s*.7,sz:s,ry:rand()*6});
   for(let j=0;j<3;j++){const bx=x+(rand()-.5)*s*2,bz=z+(rand()-.5)*s*2,h=3+rand()*8;
    if(r.kind==='kelp'){branches.push({x:bx,y:h,z:bz,sx:.6,sy:h*2,sz:.6,rz:(rand()-.5)*.3});for(let k=1;k<4;k++)leaves.push({x:bx+Math.sin(k)*2,y:k*h*.5,z:bz,sx:2.8,sy:1.1,sz:.8,rz:k*.7});}
    else if(r.kind==='ice')pillars.push({x:bx,y:h,z:bz,sx:2+rand()*3,sy:h*2,sz:2+rand()*3,rz:(rand()-.5)*.3});
    else if(r.kind==='volcano'){pillars.push({x:bx,y:h*.4,z:bz,sx:3,sy:h,sz:3});tops.push({x:bx,y:h*.9,z:bz,sx:1.8,sy:.5,sz:1.8});}
    else{branches.push({x:bx,y:h*.4,z:bz,sx:.75,sy:h,sz:.75,rz:(rand()-.5)*.8});corals.push({x:bx,y:h*.8,z:bz,sx:1.4+rand()*2,sy:1.5,sz:1.5});}
   }
  }
  batch(sphere,r.kind==='volcano'?palette.black:palette.rock,rocks);
  if(corals.length){batch(sphere,ri===0?palette.pink:palette.purple,corals);batch(cylinder,palette.orange,branches);}
  if(leaves.length){batch(cylinder,palette.kelp,branches);animated.push(batch(sphere,palette.kelp2,leaves));}
  if(pillars.length)batch(r.kind==='ice'?cone:cylinder,r.kind==='ice'?palette.ice:palette.black,pillars);
  if(tops.length)batch(sphere,palette.lava,tops);
  const g=new T.Group();g.position.set(r.x+25,0,r.z-35);landmarks.push(g);scene.add(g);objects.push(g);
  if(r.kind==='coral'){
   for(let i=0;i<11;i++){const a=i/10*Math.PI;part(g,sphere,i%2?palette.pink:palette.purple,Math.cos(a)*20,Math.sin(a)*23+4,0,5,6,6);}
   for(let i=0;i<10;i++)part(g,sphere,palette.orange,(rand()-.5)*50,3,(rand()-.5)*30,4,4,4);
  }else if(r.kind==='kelp'){
   for(let i=0;i<16;i++){const a=i/16*Math.PI*2;part(g,cylinder,palette.kelp,Math.cos(a)*25,26,Math.sin(a)*25,1.5,52,1.5,Math.sin(a)*.15);for(let j=0;j<4;j++)part(g,sphere,palette.kelp2,Math.cos(a)*25+Math.sin(j)*5,12+j*11,Math.sin(a)*25,8,2,3,j*.5);}
  }else if(r.kind==='wreck'){
   g.rotation.z=.15;part(g,sphere,palette.wood,0,6,0,43,10,15);part(g,cube,palette.wood2,0,12,0,65,2,24);part(g,cube,palette.wood,-24,19,0,16,14,20);
   for(const x of [-10,16]){part(g,cylinder,palette.wood2,x,33,0,1,45,1);part(g,cube,palette.wood2,x,43,0,1,1,28);part(g,cube,palette.stone,x,34,0,.5,17,24,.08);}
   for(let k=0;k<7;k++)for(const side of [-1,1])part(g,sphere,palette.black,-17+k*7,8,side*13,2,2,1);
   part(g,cube,palette.gold,35,3,12,6,5,5);
  }else if(r.kind==='ruins'){
   part(g,cube,palette.stone,0,2,0,80,4,65);
   for(const x of [-27,0,27])for(const z of [-22,22]){part(g,cylinder,palette.stone,x,18,z,3,30,3);part(g,cube,palette.gold,x,33,z,8,3,8);}
   part(g,cube,palette.stone,0,36,0,76,4,60);part(g,cone,palette.purple,0,44,0,40,15,30);part(g,sphere,palette.gold,0,16,0,8,8,8);
  }else if(r.kind==='volcano'){
   part(g,cone,palette.black,0,16,0,48,40,48);part(g,cylinder,palette.lava,0,33,0,12,2,12);
   for(let i=0;i<9;i++){const a=i/9*Math.PI*2;part(g,sphere,palette.lava,Math.cos(a)*27,7,Math.sin(a)*27,4,3,4);}
  }else{
   for(let i=0;i<9;i++){const a=i/9*Math.PI*2;part(g,cone,palette.ice,Math.cos(a)*30,30,Math.sin(a)*30,10,60+rand()*20,10,Math.sin(a)*.15);}
   part(g,sphere,palette.purple,0,10,0,14,14,14);
  }
 }
 // Water ceiling, sun shafts, and a gently drifting field of suspended bubbles.
 const surfaceGeo=new T.PlaneGeometry(2500,1900);surfaceGeo.rotateX(Math.PI/2);geometries.add(surfaceGeo);const surfaceMat=new T.MeshBasicMaterial({color:0x94f4e8,transparent:true,opacity:.20,side:T.DoubleSide,depthWrite:false});materials.add(surfaceMat);const surface=new T.Mesh(surfaceGeo,surfaceMat);surface.position.y=108;scene.add(surface);objects.push(surface);
 const bubbleGeo=new T.BufferGeometry(),bp=[];for(let i=0;i<500;i++)bp.push((rand()-.5)*600,rand()*100,(rand()-.5)*600);bubbleGeo.setAttribute('position',new T.Float32BufferAttribute(bp,3));geometries.add(bubbleGeo);const bubbleMat=new T.PointsMaterial({color:0xb9fff0,size:.3,transparent:true,opacity:.38,depthWrite:false});materials.add(bubbleMat);const bubbles=new T.Points(bubbleGeo,bubbleMat);scene.add(bubbles);objects.push(bubbles);
 const rayMat=new T.MeshBasicMaterial({color:0xbbfff0,transparent:true,opacity:.028,side:T.DoubleSide,depthWrite:false});materials.add(rayMat);const rays=new T.Group();for(let i=0;i<8;i++){const ray=part(rays,cone,rayMat,(i-4)*34,45,(i%3-1)*70,10,130,10,Math.PI-.15);ray.rotation.x=.2;}scene.add(rays);objects.push(rays);
 return {landmarks,update(t,position){bubbles.position.set(position.x,0,position.z);bubbles.rotation.y=t*.008;rays.position.set(position.x,0,position.z);surface.material.opacity=.18+Math.sin(t*.3)*.015;landmarks.forEach(g=>{g.visible=Math.hypot(g.position.x-position.x,g.position.z-position.z)<500;});},dispose(){objects.forEach(o=>scene.remove(o));geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());}};
}
