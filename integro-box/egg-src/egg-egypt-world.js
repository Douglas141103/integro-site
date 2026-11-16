import * as THREE from 'three';
import {EGYPT,EGYPT_ROUTE,EGYPT_SAND,EGYPT_LENGTH,egyptPoint,egyptSandState} from './egg-egypt.js';

export function mummyGuardian(g,limbs,{group,box,ball,cyl,torus}){
 g.name='MummyGuardian';
 box(g,.67,.85,.43,0xb5a37b,0,.76,0);ball(g,.32,0xe9dbba,0,1.4,-.04,1,1.13,.9);
 for(let j=0;j<7;j++){const b=box(g,.72,.075,.47,j%2?0xffecc3:0xd7c59e,0,.42+j*.12,0);b.rotation.z=j%2?.07:-.06;}
 for(let j=0;j<4;j++)box(g,.57,.055,.54,0xcfbc92,0,1.21+j*.13,-.02).rotation.z=j%2?.1:-.06;
 box(g,.48,.15,.05,0x354e51,0,1.43,-.32);
 for(const side of [-1,1]){const arm=group(g,side*.49,.91,-.08);box(arm,.22,.57,.24,0xf0dfb6,0,-.12,-.12);for(let j=0;j<4;j++)box(arm,.24,.045,.26,0xbfab7f,0,.08-j*.13,-.12);arm.rotation.x=-.9;limbs.push(arm);const leg=group(g,side*.21,.3,0);box(leg,.25,.52,.29,0xe7d4ac);for(let j=0;j<3;j++)box(leg,.27,.04,.31,0xbfab7f,0,-.16+j*.14,0);limbs.push(leg);box(g,.16,.04,.04,0x70e6bd,side*.14,1.43,-.36);}
 torus(g,.33,.07,0xe0ab43,0,1.12,-.02).rotation.x=Math.PI/2;box(g,.14,.22,.07,0x239eaa,0,1,-.26);
 const tail=box(g,.14,.55,.035,0xffe9bc,.34,.61,-.29);tail.rotation.z=-.4;
 return{faceY:1.43,faceZ:-.37};
}

export function createEgyptWorld({root,entrance,content,helpers}){
 const {group,box,ball,cyl,torus,label}=helpers,g=content,sand=[],walls=[],torches=[];g.name='EgyptPyramidWorld';
 function portal(parent,p,title,mini=false){const d=group(parent,p.x,0,p.z);d.name=mini?'EgyptEntrancePortal':'EgyptDesertReturnPortal';
  for(const side of [-1,1]){box(d,.8,4.7,.9,0xc39248,side*2.7,2.35,0);box(d,.17,3.7,.94,0x25b8bf,side*2.7,2.4,0);cyl(d,0,.53,.85,0xf3d27c,side*2.7,5.1,0,4).rotation.y=Math.PI/4;}
  box(d,6.2,.75,1,0xe3b765,0,4.8,0);const top=cyl(d,0,4.1,2.5,0xd8ad64,0,6.3,.5,4);top.rotation.y=Math.PI/4;top.scale.z=.38;
  const glow=box(d,4.6,4.2,.06,0x36c4c7,0,2.1,.17);glow.material=glow.material.clone();Object.assign(glow.material,{transparent:true,opacity:.32,depthWrite:false});glow.material.emissive.setHex(0x239eaa);
  label(d,title,0,8,0,7,'#563915','#fff0bf');label(d,mini?'ENTRE · SUBA · FUJA DA MÚMIA':'SAÍDA · VOLTE COM O OVO',0,7.25,0,6.7,'#fff6d8','#306c72');
 }
 portal(entrance,EGYPT.gate,'PORTA DA PIRÂMIDE',true);portal(g,EGYPT.exit,'PORTAL DO DESERTO');
 box(g,210,.7,240,0xd7ac6c,0,-.4,-2270).name='EgyptDesert';
 // Exterior dunes and monuments frame the full-size pyramid.
 for(let j=0;j<20;j++){const a=j*2.4,r=80+(j%3)*12;ball(g,8+j%4,0xe7bd7c,Math.sin(a)*r,-2,EGYPT.center.z+Math.cos(a)*r,1.7,.5,1);}
 for(const side of [-1,1]){const ob=group(g,side*14,0,-2205);box(ob,2,1,2,0x9e7139,0,.5,0);box(ob,.9,9,.9,0xc69349,0,5,0);cyl(ob,0,.67,1.3,0xf8db80,0,10.1,0,4).rotation.y=Math.PI/4;for(let k=0;k<5;k++){const t=torus(ob,.17,.045,0x48b4b9,0,2+k*1.3,.47);t.scale.y=1.5;}}
 // Four masonry faces. The front face has a real doorway opening.
 const wallMaterial=new THREE.MeshStandardMaterial({color:0xd2a45d,roughness:.95,side:THREE.DoubleSide});
 function triangle(vertices){const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices.flat(),3));geometry.computeVertexNormals();const m=new THREE.Mesh(geometry,wallMaterial);g.add(m);walls.push(m);return m;}
 const z=EGYPT.center.z,H=86,B=65,A=[0,H,z];
 triangle([[-B,0,z-B],[B,0,z-B],A]);triangle([[B,0,z-B],[B,0,z+B],A]);triangle([[-B,0,z+B],[-B,0,z-B],A]);
 // Front face quadrilaterals around a six-metre opening.
 const gateTopZ=z+B*(1-7/H),left=[-4.5,7,gateTopZ],right=[4.5,7,gateTopZ];
 triangle([[-B,0,z+B],[-4.5,0,z+B],left]);triangle([[-B,0,z+B],left,A]);triangle([[B,0,z+B],A,right]);triangle([[B,0,z+B],right,[4.5,0,z+B]]);triangle([left,right,A]);
 const masonry=group(g);masonry.name='PyramidMasonry';
 for(let j=0;j<29;j++){const y=j*2.8,b=B*(1-y/H);for(const side of [-1,1]){box(masonry,.12,.07,b*2,0xb88a49,side*b,y,z);if(j>2)box(masonry,b*2,.07,.12,0xb88a49,0,y,z+side*b);else for(const sign of [-1,1])box(masonry,b-5,.07,.12,0xb88a49,sign*(b+5)/2,y,z+side*b);}}
 const doorway=group(g,0,0,z+B+.2);for(const side of [-1,1])box(doorway,1.4,7,2,0xb7833d,side*5.2,3.5,0);box(doorway,11.8,1.2,2,0xe2b563,0,7.4,0);label(doorway,'PIRÂMIDE DO FARAÓ',0,9.4,0,10,'#62431e','#ffe1a0');
 // Continuous sloped surface; both edges are visibly guarded so there are no shortcuts between turns.
 const verts=[],indices=[];
 for(let i=0;i<EGYPT_ROUTE.length;i++){const p=EGYPT_ROUTE[i],q=EGYPT_ROUTE[Math.min(i+1,EGYPT_ROUTE.length-1)],prev=EGYPT_ROUTE[Math.max(0,i-1)],dx=q.x-prev.x,dz=q.z-prev.z,len=Math.hypot(dx,dz),nx=dz/len,nz=-dx/len;for(const side of [-1,1])verts.push(p.x+nx*EGYPT.halfWidth*side,p.y-.025,p.z+nz*EGYPT.halfWidth*side);if(i<EGYPT_ROUTE.length-1){const n=i*2;indices.push(n,n+2,n+1,n+1,n+2,n+3);}
  if(i%6===0&&i>22){for(const side of [-1,1]){const post=box(g,.19,1,.19,0xd5a44f,p.x+nx*EGYPT.halfWidth*side,p.y+.45,p.z+nz*EGYPT.halfWidth*side);post.name='SpiralGuardrail';}const tile=box(g,5.8,.035,.14,0xcfa354,p.x,p.y,p.z);tile.rotation.y=Math.atan2(dx,dz);}
  if(i>0&&i%3===0){const a=EGYPT_ROUTE[i-3],length=Math.hypot(p.x-a.x,p.z-a.z),yaw=Math.atan2(p.x-a.x,p.z-a.z);for(const side of [-1,1]){const rail=box(g,.16,.16,length+.2,0x37a7a9,(p.x+a.x)/2+nx*EGYPT.halfWidth*side,(p.y+a.y)/2+.9,(p.z+a.z)/2+nz*EGYPT.halfWidth*side);rail.rotation.y=yaw;rail.rotation.x=-Math.atan2(p.y-a.y,length);}}
 }
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));geometry.setIndex(indices);geometry.computeVertexNormals();const ramp=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color:0xf4d6a0,side:THREE.DoubleSide,roughness:.83}));ramp.name='ContinuousSpiralRamp';ramp.receiveShadow=true;g.add(ramp);
 for(let i=0;i<EGYPT_SAND.length;i++){const h=EGYPT_SAND[i],p=egyptPoint(h.s),node=group(g,p.x,p.y,p.z);node.rotation.y=Math.atan2(p.tx,p.tz);node.name='FallingSandTrap';const x=h.side*1.1;box(node,4.6,.35,2.5,0x9a703b,x,5.7,0);box(node,4,.15,1.6,0x624927,x,5.48,0);const curtain=box(node,3.8,5.4,1.4,0xe9bc65,x,2.7,0);curtain.material=curtain.material.clone();Object.assign(curtain.material,{transparent:true,opacity:.32,depthWrite:false});const grains=Array.from({length:22},(_,j)=>ball(node,.045+(j%3)*.02,0xffdf9c,x+(j%6-2.5)*.6,1,((j*7)%11-5)*.11));const pile=ball(node,1,0xe1b467,x,.13,0,1.9,.22,1.25);sand.push({h,node,curtain,grains,pile,stoneMaterial:node.children[0].material});}
 for(let s=50;s<EGYPT_LENGTH;s+=38){const p=egyptPoint(s),x=p.x+p.tz*3,z=p.z-p.tx*3;cyl(g,.13,.22,1.4,0x765330,x,p.y+.7,z,8);const flame=ball(g,.27,0xffbc51,x,p.y+1.65,z,.65,1.7,.65);torches.push({flame,y:p.y+1.65});}
 const top=egyptPoint(EGYPT_LENGTH);cyl(g,4.3,4.7,.4,0xc49447,top.x,top.y-.2,top.z,24);label(g,'OVOS DA MÚMIA',top.x,top.y+6,top.z,7,'#fbe2a1','#39545c');
 const tomb=group(g,top.x,top.y,top.z-4.5);box(tomb,2.1,3.8,.9,0x336c78,0,1.9,0);box(tomb,1.7,3.3,1,0xd5ad56,0,1.9,0);ball(tomb,.46,0xefd295,0,2.9,-.55,1,1.2,.35);for(let j=0;j<4;j++)box(tomb,1.7,.14,1.02,0x35848d,0,.5+j*.43,0);
 let warningMaterial;
 return{update(game,reduced){g.visible=game.inEgypt();if(!g.visible)return;const inside=game.egyptProgress()>31;wallMaterial.transparent=inside;wallMaterial.opacity=inside?.09:1;wallMaterial.depthWrite=!inside;for(const m of walls)m.visible=true;masonry.visible=!inside;for(const t of torches)t.flame.scale.y=reduced?1.7:1.6+Math.sin(game.time*9+t.y)*.15;for(const v of sand){const state=egyptSandState(v.h,game.time);v.curtain.visible=state.active;v.pile.visible=state.active;v.node.children[0].material=state.warning?newWarningMaterial():v.stoneMaterial;for(let j=0;j<v.grains.length;j++){const b=v.grains[j];b.visible=state.active;b.position.y=reduced?2.7:5.4-((game.time*5+j*.29)%5.4);}}},dispose(){geometry.dispose();wallMaterial.dispose();warningMaterial?.dispose();}};
 function newWarningMaterial(){return warningMaterial||(warningMaterial=new THREE.MeshStandardMaterial({color:0xffc85a,emissive:0xe9922a,emissiveIntensity:.25}));}
}
