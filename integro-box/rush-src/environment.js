import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {rng} from './rules.mjs';

export function batchScenery(root,art){
 root.updateMatrixWorld(true);const inv=root.matrixWorld.clone().invert(),pieces=[];
 root.traverse(o=>{if(!o.isMesh)return;const geo=o.geometry.clone().applyMatrix4(inv.clone().multiply(o.matrixWorld));const non=geo.index?geo.toNonIndexed():geo;if(non!==geo)geo.dispose();const colors=new Float32Array(non.attributes.position.count*3),c=o.material.color;for(let i=0;i<colors.length;i+=3){colors[i]=c.r;colors[i+1]=c.g;colors[i+2]=c.b;}non.setAttribute('color',new T.BufferAttribute(colors,3));pieces.push(non);});root.clear();
 const owned=[],g=mergeGeometries(pieces,false);pieces.forEach(p=>p.dispose());if(g){const material=art.material(0xffffff,'batch');material.vertexColors=true;const mesh=new T.Mesh(g,material);mesh.receiveShadow=true;root.add(mesh);owned.push(g);}
 root.userData.mergedGeometry=owned;return root;
}
export function sceneryPatch(art,region,index,seed){
 const g=new T.Group(),random=rng(seed+index*1013),kind=region.type,side=index%2?1:-1,variant=Math.floor(index/2)%4;
 const part=(shape,c,x,y,z,sx,sy=sx,sz=sx,tile='stone')=>art.mesh(g,shape,c,x,y,z,sx,sy,sz,tile);
 const box=(c,x,y,z,sx,sy,sz,tile='stone')=>part('round',c,x,y,z,sx,sy,sz,tile);
 const rock=(x,y,z,s=1,c=0x83a4a4)=>part('rock',c,x,y,z,s,s*.7,s*.85,'stone');
 const base=kind==='snow'?0xd8e9ed:kind==='lava'?0x615666:kind==='sky'?0xb0b5da:0xc7bd94;
 part('rock',base,0,-3.1,0,4.8,3.1,5,'stone');part('cyl',kind==='snow'?0xf5ffff:kind==='ruins'?0x8eae79:kind==='lava'?0x655462:0xe4cf9c,0,-.6,0,4.3,.8,4.6,kind==='snow'?'snow':'sand');
 function palm(x,z,scale=1){const trunk=part('cyl',0xbc8e59,x,1.9*scale,z,.16*scale,4.8*scale,.2*scale,'wood');trunk.rotation.z=side*.13;
  for(let j=0;j<7;j++){const a=j*Math.PI*2/7,m=part('ball',j%2?0x31aa85:0x6cbe70,x+Math.cos(a)*1.1*scale,4.1*scale,z+Math.sin(a)*1.1*scale,1.55*scale,.09*scale,.43*scale,'leaf');m.rotation.y=-a;m.rotation.z=Math.cos(a)*.2;}
  for(let j=0;j<3;j++)part('ball',0xa26b46,x+(j-1)*.21,3.85*scale,z,.19,.19,.19,'wood');
 }
 function windowFrame(x,y,z,c=0x267b8a){box(0xffe4b5,x,y,z,.72,1.05,.14,'wood');box(c,x,y,z-.09,.52,.82,.08,'plaster');box(0xffe7bf,x,y,z-.15,.035,.87,.025,'wood');}
 function cottage(x,z,roof=0xf1775c,wall=0xf6d39d){box(wall,x,1.25,z,3.5,2.9,2.8,'plaster');box(0xffe5b4,x,2.64,z,3.75,.16,3,'wood');
  for(const sign of[-1,1]){const r=box(roof,x+sign*.95,3.16,z,2.35,.18,3.45,'roof');r.rotation.z=sign*-.48;}
  windowFrame(x-1,1.4,z-1.47);windowFrame(x+1,1.4,z-1.47);box(0x409587,x,.77,z-1.48,.72,1.8,.12,'wood');box(0xffd174,x,.5,z-1.57,.54,.08,.03,'trim');
 }
 if(kind==='island'){
  if(variant===0){cottage(0,0);palm(-2.8,1,.75);box(0x319e9b,0,.12,-2.2,4.5,.2,1.2,'wood');for(const x of[-1.6,1.6])box(0xfbe2b5,x,1.05,-2.5,.12,1.8,.12,'wood');box(0x4b97a4,0,1.65,-2.5,3.4,.14,.13,'wood');}
  else if(variant===1){palm(-1.2,0);palm(1.6,1,.7);for(let j=0;j<6;j++)rock(random()*5-2.5,-.15,random()*4-2,.3+random()*.5,0xc2c7ac);}
  else if(variant===2){box(0xe3b481,0,.1,0,6,.28,4,'wood');for(let j=-2;j<=2;j++)box(0xf3ca8c,j*1.25,.28,0,.045,.05,3.9,'wood');for(const x of[-2.5,2.5])box(0xb57e4a,x,1.2,0,.15,2.3,.15,'wood');box(0x55b7b5,0,2.25,0,5.6,.15,3.5,'cloth');for(let j=0;j<4;j++)part('ball',j%2?0xffb961:0xff7762,(j-1.5)*.6,.5,-.4,.3,.3,.3,'skin');}
  else {cottage(0,0,0x67b7b8,0xf2b99f);palm(2.8,2,.7);}
 }
 if(kind==='ruins'){
  for(const x of[-1.6,1.6]){part('cyl',0xb5c5a5,x,1.6,0,.38,4.1,.38,'stone');box(0xd5dab5,x,3.65,0,1,.36,1,'stone');box(0xb8c697,x,-.15,0,1.1,.32,1.1,'stone');}
  box(0xc4cdad,0,4.03,0,4.6,.6,1.2,'stone');if(variant%2===0){for(let j=0;j<4;j++)box(0x839f89,0,.1+j*.35,1.1,3.3-j*.45,.38,2.2-j*.2,'stone');part('rock',0x6ce3c9,0,2,1,.48,.8,.48,'gold');}
  else {for(let j=0;j<6;j++){const p=part('ball',0x3c9272,-1.6+Math.sin(j)*.3,3.8-j*.55,-.18,.35,.23,.11,'leaf');p.rotation.z=.4;}}
  for(let j=0;j<4;j++)part('ball',0x71a668,random()*4-2,-.1,-1.3,.8,.4,.7,'leaf');
 }
 if(kind==='snow'){
  if(variant===0||variant===3){cottage(0,0,0xbcdfe3,0x9eb5c6);box(0xf5fbff,0,3.85,0,.5,.17,3.5,'snow');}
  else for(let j=0;j<3;j++){const x=(j-1)*2;part('cyl',0x7b7d79,x,.8,0,.14,2.1,.14,'wood');for(let k=0;k<3;k++){part('cone',0x509b9e,x,1.1+k*1.1,0,1.35-k*.25,2,1.35-k*.25,'leaf');part('cone',0xe9fbff,x,1.38+k*1.1,0,1.15-k*.25,1.6,1.15-k*.25,'snow');}}
  for(let j=0;j<3;j++)rock(random()*5-2.5,-.1,-1.9,.55,0xc3ebee);
 }
 if(kind==='lava'){
  if(variant%2===0){part('cone',0x694e60,0,2.1,0,4,7,4,'basalt');part('cone',0xfc8e42,0,5.03,0,1,1.45,1,'gold');for(let j=0;j<5;j++)rock((random()-.5)*4,5.5+random()*2,(random()-.5)*2,.17,0xffb863);}
  else{for(const x of[-1.5,0,1.5])box(0x655263,x,1+random(),0,1.1,3+random()*2,1.2,'basalt');for(let j=0;j<3;j++){const r=box(0xff984b,-1+j,0,-1+j*.7,.18,.07,4,'gold');r.rotation.y=.55;}}
 }
 if(kind==='sky'){
  for(let j=0;j<5;j++)part('ball',0xe9e5fa,(j-2)*1.6,-1.1,Math.sin(j)*1.4,1.7,.7,1.5,'cloud');
  if(variant%2===0){for(const x of[-1.5,1.5])part('cyl',0xe4d8e8,x,1.6,0,.3,4,.3,'stone');const ring=part('ring',0xfbd998,0,3.2,0,1.9,1.9,.6,'gold');ring.rotation.z=.2;part('rock',0x8be8e7,0,1.8,0,.5,.9,.5,'gold');}
  else {for(let j=0;j<3;j++)part('cone',0xab9bd6,(j-1)*1.5,1,0,.8,3.6,.8,'stone');part('ring',0xfbd998,0,3,0,1.1,1.1,1.1,'gold');}
 }
 if(kind==='island'||kind==='ruins'){box(0x81e0df,-side*3.6,-3.4,1,.7,6,.12,'cloud');box(0xe3fcf4,-side*3.55,-3.3,1.12,.13,5.8,.04,'trim');}
 g.position.x=side*(7.9+(variant===1?2:0));g.rotation.y=-side*.18;g.userData.variant=variant;g.userData.type=kind;
 return batchScenery(g,art);
}

export function createBackdrop(art,region){
 const g=new T.Group();for(let i=0;i<10;i++){const x=(i-4.5)*28,h=15+Math.sin(i*3.3)*7;art.mesh(g,'cone',region.type==='snow'?0x9ebed4:region.type==='lava'?0x694a68:0x7ca9ac,x,h*.25-5,-175-(i%3)*14,25,h,24,'stone');}
 for(let i=0;i<7;i++){const x=(i-3)*39;for(let j=0;j<3;j++)art.mesh(g,'ball',region.type==='lava'?0xb58d9d:0xf4f4ed,x+j*7,24+(i%3)*7,-140,8,2.1,3,'cloud');}
 return batchScenery(g,art);
}
