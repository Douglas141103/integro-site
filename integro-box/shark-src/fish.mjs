import * as T from 'three';
export const JOINT_COUNT=40;
export const SPECIES=['clown','tang','butterfly','wrasse','puffer'];
const gradient=new T.DataTexture(new Uint8Array([76,150,215,255]),4,1,T.RedFormat);gradient.needsUpdate=true;gradient.minFilter=gradient.magFilter=T.NearestFilter;
const profiles={shark:[0x43b5d9,0x268ba5,1,1,.23,'Tubarão'],clown:[0xff8c32,0xffc65d,1.05,.75,.22,'Peixe-palhaço'],tang:[0x386fe3,0xffd34d,1.3,.58,.21,'Cirurgião-azul'],butterfly:[0xffd760,0xffa745,1.55,.48,.20,'Peixe-borboleta'],wrasse:[0x47d6b2,0xdb68be,.85,.68,.21,'Bodião'],puffer:[0xe7bd68,0xb58040,1.32,1.2,.25,'Baiacu']};
// 20 vertebrae + 10 pectoral + 3 dorsal + 6 caudal + 1 jaw.
// Facial details share the skinned mesh, avoiding one draw call per eye/gill.
export function createFish({color,shark=false,variant=0,species}={}){
 species=shark?'shark':species||SPECIES[Math.abs(variant)%SPECIES.length];const profile=profiles[species]||profiles.clown;
 const [,accent,sy,sz,eye,speciesName]=profile,group=new T.Group(),bones=[],world=[],positions=[],indices=[],skinIndex=[],skinWeight=[],paint=[];
 const palette=[color??profile[0],0xe4f4e9,0x153747,0xffffff,accent,0x24667b,0xffde76].map(c=>new T.Color(c));
 function bone(name,parent,x,y,z){const b=new T.Bone(),p=parent<0?[0,0,0]:world[parent];b.name=name;b.position.set(x-p[0],y-p[1],z-p[2]);if(parent>=0)bones[parent].add(b);bones.push(b);world.push([x,y,z]);return bones.length-1;}
 function vert(x,y,z,a,b=a,w=1,tag=0){positions.push(x,y,z);skinIndex.push(a,b,0,0);skinWeight.push(w,1-w,0,0);paint.push(tag);return positions.length/3-1;}
 for(let i=0;i<20;i++)bone('spine_'+i,i-1,1.8-i*.2,0,0);
 const rings=64,sides=28;
 for(let r=0;r<=rings;r++){const t=r/rings,x=1.98-t*4.08,rr=.045+Math.pow(Math.sin(Math.PI*Math.pow(t,.72)),.72)*(shark?.91:species==='puffer'?1.03:.83)*(1-t*.38),bi=Math.max(0,Math.min(18.999999,(1.8-x)/.2)),a=Math.floor(bi),w=1-(bi-a);
  for(let j=0;j<=sides;j++){const ang=j/sides*Math.PI*2,y=Math.cos(ang)*rr*sy,z=Math.sin(ang)*rr*sz;let tag=y<-.26*sy?1:0;
   if(species==='clown'){const band=Math.min(...[.19,.48,.76].map(v=>Math.abs(t-v)));if(band<.047)tag=3;else if(band<.067)tag=2;}
   if(species==='tang'){if(t>.76)tag=4;else if(Math.abs(y/sy-.2)<.18&&t>.25)tag=2;}
   if(species==='butterfly'&&(Math.abs(t-.2)<.048||t>.4&&Math.sin(t*65)>.58))tag=2;
   if(species==='wrasse'&&Math.sin(ang*7+t*3)>.45)tag=4;
   if(species==='puffer'&&Math.sin(t*66)*Math.cos(ang*13)>.65&&y>-.1)tag=4;
   vert(x,y,z,a,a+1,w,tag);if(r<rings&&j<sides){const q=r*(sides+1)+j;indices.push(q,q+sides+1,q+1,q+1,q+sides+1,q+sides+2);}
  }
 }
 function append(geo,id,tag,scale,position,rz=0){geo.applyMatrix4(new T.Matrix4().compose(new T.Vector3(...position),new T.Quaternion().setFromAxisAngle(new T.Vector3(0,0,1),rz),new T.Vector3(...scale)));const offset=positions.length/3,attr=geo.attributes.position;for(let i=0;i<attr.count;i++)vert(attr.getX(i),attr.getY(i),attr.getZ(i),id,id,1,tag);const ix=geo.index;for(let i=0;i<(ix?ix.count:attr.count);i++)indices.push(offset+(ix?ix.getX(i):i));geo.dispose();}
 const sphere=(id,tag,scale,pos)=>append(new T.SphereGeometry(1,12,8),id,tag,scale,pos);
 const line=(points,radius,id,tag=2)=>append(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),12,radius,5,false),id,tag,[1,1,1],[0,0,0]);
 const branches=[];
 function fin(name,parent,start,dir,n,width){const ids=[];for(let i=0;i<n;i++){const t=i/(n-1);ids.push(bone(name+'_'+i,i?ids[i-1]:parent,...start.map((v,k)=>v+dir[k]*t)));}const first=positions.length/3,pectoral=name.startsWith('pectoral');
  for(let i=0;i<n;i++){const t=i/(n-1),p=start.map((v,k)=>v+dir[k]*t),w=width*(1-t*.93);for(const [edge,face] of [[1,1],[-1,1],[1,-1],[-1,-1]])vert(p[0]+edge*w,p[1]+(pectoral?face*.025:0),p[2]+(pectoral?0:face*.025),ids[i],ids[i],1,i===n-1?2:shark?0:4);if(i<n-1){const q=first+i*4;indices.push(q,q+1,q+4,q+1,q+5,q+4,q+2,q+6,q+3,q+3,q+6,q+7,q,q+4,q+2,q+2,q+4,q+6,q+1,q+3,q+5,q+3,q+7,q+5);}}
  branches.push({name,ids});
 }
 fin('pectoral_left',7,[.4,-.16,.57*sz],[-.76,-.23,shark?1.22:.82],5,.40);
 fin('pectoral_right',7,[.4,-.16,-.57*sz],[-.76,-.23,shark?-1.22:-.82],5,.40);
 fin('dorsal',9,[0,.67*sy,0],[-.55,shark?1.03:species==='butterfly'?.8:.55,0],3,.55);
 fin('tail_upper',19,[-2,0,0],[-.48,shark?1.03:species==='tang'?1.05:.8,0],3,.35);
 fin('tail_lower',19,[-2,0,0],[-.48,shark?-.74:species==='tang'?-1.05:-.8,0],3,.35);
 const surfaceZ=(x,y)=>{const t=Math.max(.001,Math.min(.999,(1.98-x)/4.08)),r=.045+Math.pow(Math.sin(Math.PI*Math.pow(t,.72)),.72)*(shark?.91:species==='puffer'?1.03:.83)*(1-t*.38);return Math.sqrt(Math.max(.01,r*r-(y/sy)**2))*sz;};
 const jaw=bone('jaw',4,1,-.25,0);sphere(jaw,1,[.61,.16,.42*sz],[1.43,-.27,0]);
 for(const s of [-1,1]){const x=1.13,y=.29*sy,z=s*(surfaceZ(x,y)-.035);
  sphere(4,2,[eye*1.17,eye*1.2,eye*.55],[x,y,z]);sphere(4,3,[eye,eye*1.05,eye*.53],[x+.025,y+.015,z+s*.045]);sphere(4,2,[eye*.55,eye*.64,eye*.30],[x+.09,y+.01,z+s*.13]);sphere(4,3,[eye*.20,eye*.22,eye*.15],[x+.12,y+.075,z+s*.18]);
  line([[1.65,-.09],[1.4,-.22],[1.12,-.23],[.94,-.12]].map(([px,py])=>[px,py,s*(surfaceZ(px,py)+.018)]),.021,4);
  if(shark){line([[1.32,.53,s*.57],[1.12,.58,s*.66],[.93,.54,s*.70]],.035,4);for(let i=0;i<3;i++)line([[.33-i*.17,.24,s*.73],[.25-i*.17,.02,s*.81],[.28-i*.17,-.17,s*.76]],.025,7);for(let i=0;i<3;i++)append(new T.ConeGeometry(.055,.13,3),jaw,3,[1,1,1],[1.36-i*.16,-.21,s*.57],Math.PI);}
  else line([[.68,.24*sy],[.55,0],[.67,-.25*sy]].map(([px,py])=>[px,py,s*(surfaceZ(px,py)+.018)]),.022,6,4);
 }
 const colors=[];for(const tag of paint){const c=palette[tag];colors.push(c.r,c.g,c.b);}const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));geometry.setAttribute('color',new T.Float32BufferAttribute(colors,3));geometry.setAttribute('skinIndex',new T.Uint16BufferAttribute(skinIndex,4));geometry.setAttribute('skinWeight',new T.Float32BufferAttribute(skinWeight,4));geometry.setIndex(indices);geometry.computeVertexNormals();
 const material=new T.MeshToonMaterial({vertexColors:true,gradientMap:gradient,side:T.FrontSide}),mesh=new T.SkinnedMesh(geometry,material);mesh.add(bones[0]);mesh.bind(new T.Skeleton(bones));mesh.frustumCulled=false;group.add(mesh);
 const outlineGeo=geometry.clone(),op=outlineGeo.attributes.position,on=outlineGeo.attributes.normal;for(let i=0;i<op.count;i++)op.setXYZ(i,op.getX(i)+on.getX(i)*.022,op.getY(i)+on.getY(i)*.022,op.getZ(i)+on.getZ(i)*.022);const outline=new T.SkinnedMesh(outlineGeo,new T.MeshBasicMaterial({color:0x124253,side:T.BackSide}));outline.bind(mesh.skeleton,mesh.bindMatrix);outline.bindMode='detached';outline.frustumCulled=false;group.add(outline);
 const crown=new T.Group();crown.position.set(.12,.93*sy,0);const gold=new T.MeshToonMaterial({color:0xffd166,gradientMap:gradient});crown.add(new T.Mesh(new T.CylinderGeometry(.35,.36,.12,10),gold));for(let k=0;k<5;k++){const gem=new T.Mesh(new T.ConeGeometry(.1,.30,4),gold);gem.position.set(Math.cos(k*Math.PI*.4)*.28,.18,Math.sin(k*Math.PI*.4)*.28);crown.add(gem);}bones[4].add(crown);crown.visible=false;
 let phase=variant*.6,lastTime=null,smoothedSpeed=1;
 function animate(t,speed=1,bite=0,turn=0){const dt=lastTime===null?0:Math.max(0,Math.min(.1,t-lastTime));lastTime=t;smoothedSpeed+=(speed-smoothedSpeed)*(1-Math.exp(-dt*5));phase+=dt*(2.8+smoothedSpeed*3.2);let prev=0;for(let i=1;i<20;i++){const tail=i/19,a=Math.sin(phase-i*.25)*(.035+.32*tail**1.8)*(.7+smoothedSpeed*.3)+turn*tail*.25;bones[i].rotation.y=a-prev;prev=a;bones[i].rotation.z=Math.sin(phase*.45-i*.2)*.003;}
  for(const branch of branches)for(let k=0;k<branch.ids.length;k++){const b=bones[branch.ids[k]];if(branch.name.startsWith('pectoral'))b.rotation.x=Math.sin(phase*.65-k*.3)*.10*(branch.name.endsWith('left')?1:-1);else b.rotation.y=Math.sin(phase-4.5-k*.3)*.07;}
  bones[jaw].rotation.z=-bite*.38;crown.rotation.y=t*.15;
 }
 function tint(hex){palette[0].set(hex);const attr=geometry.attributes.color;for(let i=0;i<attr.count;i++){const c=palette[paint[i]];attr.setXYZ(i,c.r,c.g,c.b);}attr.needsUpdate=true;}
 function dispose(){geometry.dispose();material.dispose();outlineGeo.dispose();outline.material.dispose();mesh.skeleton.dispose();crown.traverse(o=>{if(o.isMesh)o.geometry.dispose();});gold.dispose();}
 return {group,mesh,outline,bones,crown,animate,tint,dispose,joints:bones.length,species,speciesName};
}
