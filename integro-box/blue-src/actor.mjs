import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

export const PALETTE={ink:0x16384e,blue:0x28aee8,light:0xaceef0,white:0xfff8db,coral:0xf17d71,leaf:0x82bb75};
export function toonRamp(){const t=new T.DataTexture(new Uint8Array([85,85,85,255,172,172,172,255,255,255,255,255]),3,1);t.minFilter=t.magFilter=T.NearestFilter;t.generateMipmaps=false;t.needsUpdate=true;return t;}
export function outlineMaterial(width=.012){
 const m=new T.MeshBasicMaterial({color:PALETTE.ink,side:T.BackSide});
 m.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace('#include <skinning_vertex>','#include <skinning_vertex>\n#if !defined(USE_ENVMAP) && !defined(USE_SKINNING)\nvec3 objectNormal = vec3(normal);\n#endif\ntransformed += normalize(objectNormal) * '+width.toFixed(4)+';');};
 m.customProgramCacheKey=()=>`blue-hull-${width}`;m.userData.outline=true;return m;
}
function faceNormals(g){const p=g.attributes.position,n=g.attributes.normal,v=new T.Vector3();for(let i=0;i<p.count;i++){const w=T.MathUtils.smoothstep(p.getZ(i),.04,.2)*.8;v.set(n.getX(i)*(1-w),n.getY(i)*(1-w),n.getZ(i)*(1-w)+w).normalize();n.setXYZ(i,v.x,v.y,v.z);}return g;}
const sphere=(x,y,z)=>new T.SphereGeometry(1,16,12).scale(x,y,z);
export function createBlue(ramp=toonRamp()){
 const root=new T.Group(),rig=new T.Group();root.name='Blue';root.add(rig);const bones={},parts=new Map(),materials={},resources=new Set();
 for(const [name,color] of Object.entries(PALETTE)){const mat=new T.MeshToonMaterial({color,gradientMap:ramp});materials[name]=mat;resources.add(mat);}
 materials.ink=new T.MeshBasicMaterial({color:PALETTE.ink});resources.add(materials.ink);
 const bone=(name,parent,x=0,y=0,z=0)=>{const b=new T.Bone();b.name=name;b.position.set(x,y,z);parent.add(b);bones[name]=b;return b;};
 const base=bone('root',rig),hips=bone('hips',base,0,.6),spine=bone('spine',hips,0,.12),chest=bone('chest',spine,0,.14),upper=bone('upperChest',chest,0,.09),neck=bone('neck',upper,0,.09),head=bone('head',neck,0,.19);
 for(const [side,sign] of [['L',-1],['R',1]]){
  const clavicle=bone('clavicle'+side,upper,sign*.12),arm=bone('arm'+side,clavicle,sign*.12,-.02),elbow=bone('elbow'+side,arm,0,-.2),hand=bone('hand'+side,elbow,0,-.19);
  const thigh=bone('thigh'+side,hips,sign*.115),knee=bone('knee'+side,thigh,0,-.25),foot=bone('foot'+side,knee,0,-.25),toe=bone('toe'+side,foot,0,-.025,.09);
  for(let f=0;f<5;f++){let parent=hand;for(let j=0;j<3;j++)parent=bone(`finger${f}${side}${j}`,parent,j?0:(f-2)*.026,j?-.033:-.06,f===0?.025:.004);}
 }
 const scarf0=bone('scarf0',neck,0,0,-.1),scarf1=bone('scarf1',scarf0,0,-.16,-.08);bone('scarf2',scarf1,0,-.16,-.02);
 root.updateMatrixWorld(true);const skeleton=new T.Skeleton(Object.values(bones));
 function add(g,b,mat,offset=[0,0,0],face=false){
  if(face)faceNormals(g);g.translate(...offset);g.applyMatrix4(b.matrixWorld);
  const idx=skeleton.bones.indexOf(b),n=g.attributes.position.count,indices=new Uint16Array(n*4),weights=new Float32Array(n*4);
  for(let i=0;i<n;i++){indices[i*4]=idx;weights[i*4]=1;}
  g.setAttribute('skinIndex',new T.Uint16BufferAttribute(indices,4));g.setAttribute('skinWeight',new T.Float32BufferAttribute(weights,4));
  if(!parts.has(mat))parts.set(mat,[]);parts.get(mat).push(g);
 }
 function limb(a,b,length,r0,r1,mat='blue'){
  const joint=-bones[b].position.y,g=new T.CylinderGeometry(1,1,1,12,20),p=g.attributes.position,n=p.count,idx=[],weights=[];
  const correction=g.clone();
  for(let i=0;i<n;i++){
   const d=(.5-p.getY(i))*length,w=T.MathUtils.smoothstep(d,joint-.045,joint+.045),r=T.MathUtils.lerp(r0,r1,d/length);
   p.setXYZ(i,p.getX(i)*r,-d,p.getZ(i)*r*.92);idx.push(skeleton.bones.indexOf(bones[a]),skeleton.bones.indexOf(bones[b]),0,0);weights.push(1-w,w,0,0);
  }
  correction.dispose();g.computeVertexNormals();g.applyMatrix4(bones[a].matrixWorld);g.setAttribute('skinIndex',new T.Uint16BufferAttribute(idx,4));g.setAttribute('skinWeight',new T.Float32BufferAttribute(weights,4));
  if(!parts.has(mat))parts.set(mat,[]);parts.get(mat).push(g);
 }
 add(sphere(.19,.19,.14),hips,'blue',[0,.065,0]);add(sphere(.2,.19,.135),chest,'blue',[0,-.035,0]);
 add(sphere(.12,.15,.022),chest,'light',[0,-.03,.125]);add(sphere(.095,.095,.09),neck,'blue');
 add(sphere(.265,.285,.225),head,'blue',[0,0,0],true);
 // Three sculpted wave tips and a painted-looking pale highlight on the crest.
 for(const [x,y,z,s] of [[-.17,.21,-.01,.8],[0,.29,0,1],[.17,.23,-.02,.72]]){
  const g=new T.SphereGeometry(1,12,10).scale(.085*s,.16*s,.09*s);g.rotateZ(-.3);add(g,head,'blue',[x,y,z]);
 }
 add(sphere(.055,.095,.014),head,'light',[-.075,.3,.075]);
 for(const sign of [-1,1]){
  add(sphere(.068,.1,.022),head,'white',[sign*.105,.015,.209]);
  add(sphere(.033,.062,.014),head,'ink',[sign*.105,.013,.229]);
  add(sphere(.012,.02,.008),head,'white',[sign*.105-.009,.038,.243]);
  add(sphere(.037,.012,.01),head,'blue',[sign*.11,.13,.204]);
  add(sphere(.032,.012,.01),head,'light',[sign*.19,-.075,.164]);
 }
 // Small graphic smile, merged with the face marks rather than separate draw calls.
 const smile=new T.TorusGeometry(.04,.007,5,12,Math.PI);smile.rotateZ(Math.PI);add(smile,head,'ink',[0,-.1,.213]);
 add(new T.TorusGeometry(.102,.035,7,20).rotateX(Math.PI/2),neck,'coral',[0,-.01,0]);
 for(let i=0;i<3;i++)add(sphere(.078,.115,.023),bones['scarf'+i],'coral',[0,-.07,0]);
 add(sphere(.065,.01,.026),bones.scarf2,'white',[0,-.145,0]);
 for(const [side,sign] of [['L',-1],['R',1]]){
  add(sphere(.08,.08,.08),bones['arm'+side],'blue');limb('arm'+side,'elbow'+side,.39,.072,.048);
  add(sphere(.063,.075,.045),bones['hand'+side],'light',[0,-.025,0]);
  limb('thigh'+side,'knee'+side,.5,.088,.056);add(sphere(.085,.075,.13),bones['foot'+side],'light',[0,-.023,.045]);
  add(sphere(.08,.035,.065),bones['toe'+side],'white',[0,-.025,.02]);
  for(let f=0;f<5;f++)for(let j=0;j<3;j++)add(new T.SphereGeometry(1,8,6).scale(.014,.023,.014),bones[`finger${f}${side}${j}`],'light',[0,-.012,0]);
 }
 const outline=outlineMaterial(.012);resources.add(outline);
 for(const [name,geometries] of parts){
  const geometry=mergeGeometries(geometries);geometries.forEach(g=>g.dispose());resources.add(geometry);
  for(const mat of name==='ink'||name==='white'?[materials[name]]:[materials[name],outline]){
   const mesh=new T.SkinnedMesh(geometry,mat);mesh.name=mat===outline?'Blue contour':'Blue '+name;mesh.frustumCulled=false;rig.add(mesh);mesh.bind(skeleton);
  }
 }
 const initial=new Map(Object.values(bones).map(b=>[b,b.position.clone()]));let lastPose=-1;
 function pose(player,time,{pulseAge=99,won=false,reduced=false}={}){
  root.position.set(player.x,player.y,0);root.rotation.y=player.facing*.68;
  // Pose sampling does not quantize movement, camera or collision.
  const tick=Math.floor(time*(reduced?12:12));if(tick===lastPose)return;lastPose=tick;const t=tick/12;
  for(const b of Object.values(bones)){b.rotation.set(0,0,0);b.position.copy(initial.get(b));b.scale.set(1,1,1);}
  const speed=Math.min(1,Math.abs(player.vx)/5.5),stride=t*12,air=!player.grounded;
  const compression=player.landed>0?.9:air&&player.vy>2?1.06:1;rig.scale.set(1/Math.sqrt(compression),compression,1/Math.sqrt(compression));
  hips.position.y+=speed*Math.abs(Math.sin(stride))*.025;
  chest.rotation.z=-player.facing*speed*.04;head.rotation.z=player.facing*.035;
  for(const [side,sign] of [['L',-1],['R',1]]){
   bones['thigh'+side].rotation.x=air?-.35+sign*.25:Math.sin(stride+sign*Math.PI/2)*speed*.65;
   bones['knee'+side].rotation.x=air?.75:Math.max(0,-Math.sin(stride+sign*Math.PI/2))*speed*.8;
   bones['arm'+side].rotation.x=air?-.5:-Math.sin(stride+sign*Math.PI/2)*speed*.65;
   bones['arm'+side].rotation.z=-sign*(air?.45:.12);
   bones['elbow'+side].rotation.x=-.15-speed*.3;
   bones['foot'+side].rotation.x=air?.2:-bones['thigh'+side].rotation.x*.3;
   bones['toe'+side].rotation.x=Math.max(0,Math.sin(stride))*speed*.1;
   bones['clavicle'+side].rotation.z=-sign*speed*.04;
   for(let f=0;f<5;f++)for(let j=0;j<3;j++)bones[`finger${f}${side}${j}`].rotation.x=pulseAge<.3?-.15:.25+speed*.3;
  }
  if(!speed&&!air){chest.scale.y=1+Math.sin(t*2.4)*.012;head.rotation.y=Math.sin(t*.7)*.08;}
  if(player.crouching){hips.position.y=.26;spine.rotation.x=.2;head.position.y=.16;for(const side of ['L','R']){bones['thigh'+side].rotation.x=-1.05;bones['knee'+side].rotation.x=1.6;bones['arm'+side].rotation.x=-.7;}rig.scale.y=.74;}
  if(pulseAge<.35){for(const [side,sign] of [['L',-1],['R',1]]){bones['arm'+side].rotation.x=-1.3;bones['arm'+side].rotation.z=-sign*.3;bones['elbow'+side].rotation.x=-.15;}chest.rotation.x=-.06;}
  if(won){hips.position.y+=Math.abs(Math.sin(t*5))*.1;head.rotation.z=Math.sin(t*4)*.1;root.rotation.y=t*.9;for(const [side,sign] of [['L',-1],['R',1]])bones['arm'+side].rotation.z=-sign*2.1;}
  for(let i=0;i<3;i++){bones['scarf'+i].rotation.x=.3+speed*.5+Math.sin(t*8-i*.6)*.18;bones['scarf'+i].rotation.z=Math.sin(t*4-i)*.12;}
  root.visible=player.invulnerable<.05||Math.floor(time*12)%2===0;
 }
 return {root,bones,skeleton,pose,dispose(){resources.forEach(r=>r.dispose());skeleton.dispose();}};
}
