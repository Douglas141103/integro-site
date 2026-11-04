import * as T from 'three';
import {ArtResources,sculptGeometry,atlasUV} from '../rush-src/art.js';
export const SPHINX_JOINTS=54;
const clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>x*x*(3-2*x);
// 8 axial + 4 × 8 leg + 8 tail + 6 headdress joints, under a soft cartoon skin.
export function createSphinxRig(parent,{group,actorArt=new ArtResources()}){
 const body=group(parent);body.name='SphinxBody';const joints=[],legs=[],tail=[],cloth=[],skins=[],inverse=new T.Matrix4(),point=new T.Vector3();
 const gold=0xe9b856,cream=0xffdf8e,blue=0x426bb8,ink=0x243d60;
 function joint(parent,name,x=0,y=0,z=0){const b=new T.Bone();b.name='SphinxJoint_'+name;b.position.set(x,y,z);parent.add(b);joints.push(b);return b;}
 // Use the explorer's painted toon materials and thin ink silhouette.
 function surface(parent,geometry,color){const m=new T.Mesh(atlasUV(geometry,'skin'),actorArt.material(color,'skin'));parent.add(m);m.castShadow=true;return m;}
 function oval(parent,color,x,y,z,sx,sy,sz){const g=new T.SphereGeometry(1,24,16);g.scale(sx,sy,sz);g.translate(x,y,z);return surface(parent,g,color);}
 function skin(geometry,color,weights){skins.push({geometry,color,weights});}
 const pelvis=joint(body,'pelvis',0,.55,.55),lumbar=joint(pelvis,'lumbar',0,.08,-.4),thorax=joint(lumbar,'thorax',0,.04,-.42),chest=joint(thorax,'chest',0,.02,-.38);
 const neckBase=joint(chest,'neckBase',0,.27,-.13),neck=joint(neckBase,'neck',0,.17,-.04),head=joint(neck,'head',0,.15,-.08),jaw=joint(head,'jaw',0,-.2,-.32);
 // A single plump torso replaces the stack of rigid balls and neck cylinders.
 body.updateWorldMatrix(true,true);
 const bodyInverse=body.matrixWorld.clone().invert(),local=b=>new T.Matrix4().multiplyMatrices(bodyInverse,b.matrixWorld);
 function blend(chain,value,positions){let i=0;while(i<positions.length-2&&value>positions[i+1])i++;const t=clamp((value-positions[i])/(positions[i+1]-positions[i]));return [[chain[i],1-t],[chain[i+1],t]];}
 const torso=new T.SphereGeometry(1,32,24);torso.scale(.66,.53,1.13);torso.translate(0,.64,-.04);
 skin(torso,gold,v=>blend([chest,thorax,lumbar,pelvis],v.z,[-.65,-.27,.15,.55]));
 const collar=sculptGeometry([[0,.34,.31],[.12,.4,.33],[.32,.36,.3],[.6,.29,.26],[.7,0,0]],24,3);collar.applyMatrix4(local(chest));
 skin(collar,cream,v=>blend([chest,neckBase,neck,head],v.y,[.69,.96,1.13,1.28]));
 // Big expressive face, broad cheeks and a compact chin; no dangling jaw block.
 oval(head,cream,0,.18,-.06,.57,.56,.44);
 oval(head,blue,0,.58,.06,.65,.28,.46);
 for(const side of[-1,1]){
  oval(head,cream,side*.55,.13,-.01,.14,.21,.16);
  oval(head,0xfff9ec,side*.225,.26,-.435,.17,.205,.065);
  oval(head,ink,side*.225,.25,-.488,.084,.115,.035);
  oval(head,0xffffff,side*.205,.3,-.518,.031,.04,.015);
  const brow=oval(head,blue,side*.23,.49,-.405,.19,.045,.035);brow.rotation.z=-side*.08;
  oval(head,0xf5c66e,side*.3,-.005,-.39,.19,.14,.075);
 }
 oval(head,gold,0,.06,-.505,.105,.12,.095);
 oval(jaw,cream,0,.01,-.07,.31,.15,.14);
 const smile=new T.EllipseCurve(0,0,.16,.075,Math.PI,Math.PI*2,false,0).getPoints(16).map(p=>new T.Vector3(p.x,p.y+.07,-.205));
 surface(jaw,new T.TubeGeometry(new T.CatmullRomCurve3(smile),16,.014,6,false),ink);
 oval(head,blue,0,-.39,-.25,.09,.15,.075);
 oval(head,gold,0,.65,-.39,.1,.13,.04);
 for(const side of[-1,1]){
  let parent=head;const chain=[];
  for(let k=0;k<3;k++){const b=joint(parent,`headdress_${side}_${k}`,k===0?side*.53:0,k===0?.43:-.25,.06);cloth.push({bone:b,side,k});chain.push(b);parent=b;}
  body.updateWorldMatrix(true,true);
  const g=sculptGeometry([[-.73,0,0],[-.65,.16,.22],[-.4,.18,.26],[-.1,.2,.29],[.1,.16,.26],[.17,0,0]],24,3);
  const base=local(chain[0]);g.applyMatrix4(base);const inv=base.clone().invert();
  skin(g,blue,v=>blend(chain,-v.clone().applyMatrix4(inv).y,[0,.25,.5]));
  // Painted-looking gold bands follow the same continuous cloth skin.
  for(const y of[-.12,-.34,-.56]){const band=sculptGeometry([[y-.025,.184,.273],[y+.025,.184,.273]],24,1);band.applyMatrix4(base);skin(band,gold,v=>blend(chain,-v.clone().applyMatrix4(inv).y,[0,.25,.5]));}
 }
 for(const front of[true,false])for(const side of[-1,1]){
  const prefix=(front?'front':'rear')+(side===-1?'Left':'Right');
  const yaw=joint(front?chest:pelvis,prefix+'_hipYaw',side*.49,-.04,front?-.13:.22);
  const hip=joint(yaw,prefix+'_hipPitch'),knee=joint(hip,prefix+'_knee',0,-.58,0),ankle=joint(knee,prefix+'_ankle',0,-.54,0),paw=joint(ankle,prefix+'_paw',0,-.04,-.08);
  body.updateWorldMatrix(true,true);const base=local(hip),inv=base.clone().invert();
  const limb=sculptGeometry([[-1.18,0,0],[-1.1,.18,.19],[-.86,.2,.21],[-.58,.24,.25],[-.3,.3,.31],[0,.34,.35],[.22,0,0]],24,3);limb.applyMatrix4(base);
  skin(limb,gold,v=>blend([hip,knee,ankle],-v.clone().applyMatrix4(inv).y,[.18,.58,1.12]));
  oval(paw,cream,0,-.015,-.1,.29,.19,.36);
  const toes=Array.from({length:3},(_,k)=>{const toe=joint(paw,prefix+'_toe'+k,(k-1)*.15,-.025,-.31);oval(toe,cream,0,0,-.035,.095,.115,.15);return toe;});
  legs.push({front,side,yaw,hip,knee,ankle,paw,toes});
 }
 let tailParent=pelvis;
 for(let k=0;k<8;k++){const b=joint(tailParent,'tail'+k,0,k===0?.02:0,k===0?.77:.18);tail.push(b);tailParent=b;}
 body.updateWorldMatrix(true,true);const base=local(tail[0]),inv=base.clone().invert();
 const tailGeometry=sculptGeometry([[0,.12,.12],[.4,.095,.095],[.9,.075,.075],[1.28,.065,.065],[1.4,0,0]],16,4);tailGeometry.rotateX(Math.PI/2);tailGeometry.applyMatrix4(base);
 skin(tailGeometry,gold,v=>blend(tail,v.clone().applyMatrix4(inv).z,tail.map((_,k)=>k*.18)));
 oval(tail.at(-1),blue,0,0,.1,.14,.13,.22);
 if(joints.length!==SPHINX_JOINTS)throw Error('Sphinx joint layout must contain 54 articulated joints');
 body.userData.jointCount=joints.length;body.userData.style='explorer-cartoon';
 const skeleton=new T.Skeleton(joints);skeleton.calculateInverses();
 for(const {geometry,color,weights}of skins){
  const indices=[],values=[],v=new T.Vector3(),pos=geometry.attributes.position;
  for(let i=0;i<pos.count;i++){const pairs=weights(v.fromBufferAttribute(pos,i));indices.push(...pairs.map(([b])=>joints.indexOf(b)),0,0);values.push(...pairs.map(([,w])=>w),0,0);}
  geometry.setAttribute('skinIndex',new T.Uint16BufferAttribute(indices,4));geometry.setAttribute('skinWeight',new T.Float32BufferAttribute(values,4));
  const m=new T.SkinnedMesh(atlasUV(geometry,'skin'),actorArt.material(color,'skin'));body.add(m);m.bind(skeleton,body.matrixWorld);m.frustumCulled=false;m.castShadow=true;
 }
 const surfaces=[];body.traverse(m=>{if(m.isMesh)surfaces.push(m);});
 for(const m of surfaces){
  const g=m.geometry.clone(),p=g.attributes.position,n=g.attributes.normal;for(let i=0;i<p.count;i++)p.setXYZ(i,p.getX(i)+n.getX(i)*.012,p.getY(i)+n.getY(i)*.012,p.getZ(i)+n.getZ(i)*.012);
  const mat=new T.MeshBasicMaterial({color:0x163747,side:T.BackSide,depthWrite:false});mat.userData.contour=true;
  const outline=m.isSkinnedMesh?new T.SkinnedMesh(g,mat):new T.Mesh(g,mat);outline.userData.contour=true;outline.frustumCulled=false;m.add(outline);
  if(m.isSkinnedMesh)outline.bind(skeleton,m.bindMatrix);
 }
 function update({stand=0,mode='rest',elapsed=0,reducedMotion=false}={}){
  const standing=smooth(clamp(stand)),moving=mode==='backstep'||mode==='run',strength=reducedMotion?.45:1;
  const rhythm=mode==='backstep'?elapsed/.7:elapsed/.5;
  pelvis.position.y=.55+.65*standing;
  pelvis.rotation.x=moving?Math.sin(rhythm*Math.PI*2)*.025*strength:0;
  lumbar.rotation.x=-.06*standing+(moving?Math.sin(rhythm*Math.PI*2+.7)*.025*strength:0);
  thorax.rotation.x=.035*standing+(moving?Math.sin(rhythm*Math.PI*2+1.2)*.02*strength:0);
  chest.rotation.x=-.025*standing;neckBase.rotation.x=.08*standing;neck.rotation.x=-.05*standing;
  head.rotation.x=moving?Math.sin(rhythm*Math.PI*2)*.025*strength:0;head.rotation.y=moving?Math.sin(rhythm*Math.PI)*.025*strength:0;
  jaw.rotation.x=mode==='run'?.035+Math.sin(rhythm*Math.PI*2)*.01*strength:.008*standing;
  body.updateWorldMatrix(true,true);inverse.copy(body.matrixWorld).invert();
  for(const leg of legs){
   const {front,side,yaw,hip,knee,ankle,paw,toes}=leg;
   const phase=(front===(side===-1)?0:.5),p=((rhythm*(mode==='backstep'?.5:1)+phase)%1+1)%1;
   const swing=moving&&p<.5?Math.sin(p*Math.PI*2):0;
   const span=mode==='run'?.28:.21,travel=-span*Math.cos(p*Math.PI*2);
   const ease=moving?smooth(clamp(elapsed/.18)):0;
   const footZ=(front?-.32:.16)*(1-standing)+travel*(mode==='run'?-1:1)*ease;
   const lift=swing*(mode==='run'?.24:.18)*strength*ease;
   // Two-link IK keeps the paw near the ground as the body rises or changes gait.
   point.setFromMatrixPosition(yaw.matrixWorld).applyMatrix4(inverse);
   const down=Math.max(.15,point.y-.18-lift),distance=Math.min(1.119,Math.max(.06,Math.hypot(down,footZ))),bend=front?1:-1;
   const shoulder=Math.acos(Math.max(-1,Math.min(1,(.58**2+distance**2-.54**2)/(2*.58*distance))));
   const kneeAngle=Math.PI-Math.acos(Math.max(-1,Math.min(1,(.58**2+.54**2-distance**2)/(2*.58*.54))));
   yaw.rotation.y=side*(.035+(moving?Math.sin(rhythm*Math.PI)*.025*strength:0));
   hip.rotation.x=Math.atan2(-footZ,down)-bend*shoulder;knee.rotation.x=bend*kneeAngle;ankle.rotation.x=-hip.rotation.x-knee.rotation.x;
   paw.rotation.x=-swing*.12*strength;
   for(let k=0;k<toes.length;k++)toes[k].rotation.x=swing*(.16+k*.025)*strength+(1-standing)*.035;
  }
  for(let k=0;k<tail.length;k++){tail[k].rotation.y=.12+(moving?Math.sin(rhythm*Math.PI*.6-k*.45)*.09*strength:0);tail[k].rotation.x=-.04+standing*.025;}
  for(const {bone,side,k}of cloth){bone.rotation.z=-side*(.12+k*.025);bone.rotation.x=moving?Math.sin(rhythm*Math.PI*2-k*.7)*.025*strength:0;}
  body.updateWorldMatrix(true,true);skeleton.update();
  body.userData.pose=mode;body.userData.standing=standing;
 }
 update();
 return{body,joints,update};
}
