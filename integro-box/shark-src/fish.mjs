import * as T from 'three';
export const JOINT_COUNT=40;
const gradient=new T.DataTexture(new Uint8Array([80,170,255]),3,1,T.RedFormat);gradient.needsUpdate=true;gradient.minFilter=gradient.magFilter=T.NearestFilter;
const toon=color=>new T.MeshToonMaterial({color,gradientMap:gradient});
const eyeWhite=toon(0xf3fffa),eyeBlack=toon(0x07344a),eyeGeo=new T.SphereGeometry(1,12,8);
// All forty joints influence visible geometry: 20 vertebrae, two five-joint
// pectoral fins, three-joint dorsal/upper tail/lower tail, and one jaw.
export function createFish({color=0x60cbe7,shark=false,variant=0}={}){
 const group=new T.Group(),bones=[],positions=[],indices=[],skinIndex=[],skinWeight=[],colors=[];
 const world=[];
 function bone(name,parent,x,y,z){const b=new T.Bone();b.name=name;const p=parent>=0?world[parent]:[0,0,0];b.position.set(x-p[0],y-p[1],z-p[2]);if(parent>=0)bones[parent].add(b);bones.push(b);world.push([x,y,z]);return bones.length-1;}
 for(let i=0;i<20;i++)bone('spine_'+i,i-1,1.8-i*.2,0,0);
 const baseColor=new T.Color(color),belly=new T.Color(0xe4fbef);
 function vert(x,y,z,a,b=a,w=1,underside=false){positions.push(x,y,z);skinIndex.push(a,b,0,0);skinWeight.push(w,1-w,0,0);const c=underside?belly:baseColor;colors.push(c.r,c.g,c.b);return positions.length/3-1;}
 // Continuous skinned body; weights interpolate adjacent vertebrae.
 const rings=40,sides=16,round=shark?1:1.17+(variant%3)*.13;
 for(let r=0;r<=rings;r++){const t=r/rings,x=1.92-t*4.04,rr=.055+Math.pow(Math.sin(Math.PI*t),.8)*.68*(1-t*.55);const bi=Math.max(0,Math.min(18.999999,(1.8-x)/.2)),a=Math.floor(bi),w=1-(bi-a);
  for(let j=0;j<=sides;j++){const ang=j/sides*Math.PI*2,y=Math.cos(ang)*rr*round,z=Math.sin(ang)*rr;vert(x,y,z,a,a+1,w,y<-.06);if(r<rings&&j<sides){const q=r*(sides+1)+j;indices.push(q,q+sides+1,q+1,q+1,q+sides+1,q+sides+2);}}
 }
 const branches=[];
 function fin(name,parent,start,dir,n,width){const ids=[];for(let i=0;i<n;i++){const t=i/(n-1);ids.push(bone(name+'_'+i,i?ids[i-1]:parent,...start.map((v,k)=>v+dir[k]*t)));}
  const first=positions.length/3;
  for(let i=0;i<n;i++){const t=i/(n-1),p=start.map((v,k)=>v+dir[k]*t),w=width*(1-t*.95);vert(p[0]+w,p[1],p[2],ids[i]);vert(p[0]-w,p[1]+.025,p[2],ids[i]);if(i<n-1){const k=first+i*2;indices.push(k,k+1,k+2,k+1,k+3,k+2);}}
  branches.push({name,ids});return ids;
 }
 fin('pectoral_left',7,[.4,-.15,.35],[-.7,-.3,shark?1.35:1],5,.38);
 fin('pectoral_right',7,[.4,-.15,-.35],[-.7,-.3,shark?-1.35:-1],5,.38);
 fin('dorsal',9,[0,.48,0],[-.5,shark?1.1:.65,0],3,.55);
 fin('tail_upper',19,[-2,0,0],[-.4,shark?1.05:.85,0],3,.30);
 fin('tail_lower',19,[-2,0,0],[-.4,shark?-.75:-.85,0],3,.30);
 const jaw=bone('jaw',1,1.25,-.12,0),j=positions.length/3;
 vert(1.92,-.1,.03,jaw,jaw,1,true);vert(1.25,-.34,.30,jaw,jaw,1,true);vert(1.25,-.34,-.30,jaw,jaw,1,true);indices.push(j,j+1,j+2);
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));geometry.setAttribute('color',new T.Float32BufferAttribute(colors,3));geometry.setAttribute('skinIndex',new T.Uint16BufferAttribute(skinIndex,4));geometry.setAttribute('skinWeight',new T.Float32BufferAttribute(skinWeight,4));geometry.setIndex(indices);geometry.computeVertexNormals();
 const material=new T.MeshToonMaterial({vertexColors:true,gradientMap:gradient,side:T.DoubleSide});const mesh=new T.SkinnedMesh(geometry,material);mesh.add(bones[0]);mesh.bind(new T.Skeleton(bones));mesh.frustumCulled=false;group.add(mesh);
 for(const side of [-1,1]){const eye=new T.Mesh(eyeGeo,eyeWhite);eye.position.set(-.45,.19,side*.30);eye.scale.set(.20,.22,.10);bones[1].add(eye);const pupil=new T.Mesh(eyeGeo,eyeBlack);pupil.position.set(.05,.015,side*.72);pupil.scale.set(.55,.61,.45);eye.add(pupil);const glint=new T.Mesh(eyeGeo,eyeWhite);glint.position.set(.12,.25,side*.8);glint.scale.set(.22,.22,.2);pupil.add(glint);}
 // Dark mouth and gill marks make the rounded silhouette read as a shark.
 const details=[];
 if(shark){for(const s of [-1,1])for(let i=0;i<3;i++){const mark=new T.Mesh(new T.CapsuleGeometry(.018,.21,2,4),eyeBlack);mark.position.set(-.05-i*.12,.0,s*.47);mark.rotation.z=-.25;bones[6].add(mark);details.push(mark);}}
 const crown=new T.Group();crown.position.set(-.5,.62,0);const gold=toon(0xffd166);const band=new T.Mesh(new T.CylinderGeometry(.35,.36,.12,10),gold);crown.add(band);for(let k=0;k<5;k++){const gem=new T.Mesh(new T.ConeGeometry(.1,.30,4),gold);gem.position.set(Math.cos(k*Math.PI*.4)*.28,.18,Math.sin(k*Math.PI*.4)*.28);crown.add(gem);}bones[1].add(crown);crown.visible=false;
 function animate(t,speed=1,bite=0){for(let i=1;i<20;i++){bones[i].rotation.y=Math.sin(t*5*speed-i*.38)*(.006+i*.0019);bones[i].rotation.z=Math.sin(t*2-i*.2)*.004;}
  for(const branch of branches)for(let k=0;k<branch.ids.length;k++){const b=bones[branch.ids[k]];if(branch.name.startsWith('pectoral'))b.rotation.x=Math.sin(t*4*speed-k*.5)*.12;else b.rotation.y=Math.sin(t*5*speed-k*.5)*.055;}
  bones[jaw].rotation.z=-bite*.35;crown.rotation.y=t*.15;
 }
 function tint(hex){const c=new T.Color(hex),attr=geometry.getAttribute('color');for(let i=0;i<attr.count;i++){const y=positions[i*3+1];const v=y<-.06?belly:c;attr.setXYZ(i,v.r,v.g,v.b);}attr.needsUpdate=true;}
 function dispose(){geometry.dispose();material.dispose();mesh.skeleton.dispose();details.forEach(o=>o.geometry.dispose());crown.traverse(o=>{if(o.isMesh)o.geometry.dispose();});gold.dispose();}
 return {group,mesh,bones,crown,animate,tint,dispose,joints:bones.length};
}
