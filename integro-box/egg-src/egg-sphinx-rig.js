import * as T from 'three';
export const SPHINX_JOINTS=54;
const clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>x*x*(3-2*x);
// 8 axial joints + 4 legs × 8 joints + 8 tail joints + 6 headdress joints.
// Every joint drives a visible part or a parent chain, including the toes.
export function createSphinxRig(parent,{group,box,softBox,cyl,ball}){
 const body=group(parent);body.name='SphinxBody';const joints=[],legs=[],tail=[],cloth=[],inverse=new T.Matrix4(),point=new T.Vector3();
 function joint(parent,name,x=0,y=0,z=0){const b=new T.Bone();b.name='SphinxJoint_'+name;b.position.set(x,y,z);parent.add(b);joints.push(b);return b;}
 const pelvis=joint(body,'pelvis',0,.55,.55),lumbar=joint(pelvis,'lumbar',0,.08,-.4),thorax=joint(lumbar,'thorax',0,.04,-.42),chest=joint(thorax,'chest',0,.02,-.38);
 const neckBase=joint(chest,'neckBase',0,.4,-.16),neck=joint(neckBase,'neck',0,.35,0),head=joint(neck,'head',0,.3,-.04),jaw=joint(head,'jaw',0,-.18,-.16);
 ball(pelvis,.46,0xcba969,0,0,0,1.35,.9,1.35);ball(lumbar,.43,0xcba969,0,0,-.07,1.35,1,1.5);ball(thorax,.43,0xd6ba7b,0,.02,0,1.3,1.1,1.3);
 softBox(chest,.78,.65,.6,0xd6ba7b,0,.03,0);cyl(neckBase,.26,.35,.42,0xe4c68b,0,.16,0,10);cyl(neck,.25,.27,.35,0xe4c68b,0,.12,0,10);
 ball(head,.4,0xe4c68b,0,.08,0,1,.9,.8);cyl(head,.3,.41,.2,0x6f63a5,0,.5,0,12);
 // Large bright eyes, rounded cheeks and a little smile keep the rig cartoon.
 for(const side of[-1,1]){
  ball(head,.125,0xfff9e6,side*.18,.17,-.29,1,1.1,.4);ball(head,.064,0x31586b,side*.18,.16,-.34,1,1,.35);ball(head,.021,0xffffff,side*.18-.018,.185,-.365);
  const brow=softBox(head,.22,.045,.035,0x6f63a5,side*.18,.33,-.29);brow.rotation.z=-side*.12;
  ball(head,.105,0xe8c887,side*.24,-.015,-.24,1,.65,.5);
 }
 ball(head,.085,0xcba969,0,.005,-.34,.75,1.2,.75);softBox(jaw,.44,.13,.23,0xd6ba7b,0,-.01,-.025);cyl(jaw,.055,.09,.23,0x6f63a5,0,-.15,-.075,6);
 for(const side of[-1,1]){const smile=softBox(jaw,.13,.025,.025,0x765e61,side*.055,.04,-.17);smile.rotation.z=side*.2;}
 for(const side of[-1,1]){
  let parent=head;
  for(let k=0;k<3;k++){
   const b=joint(parent,`headdress_${side}_${k}`,k===0?side*.43:0,k===0?.31:-.25,.015);
   softBox(b,.25,.28,.4,0x6f63a5,0,-.11,0);box(b,.26,.055,.42,0xead18c,0,-.07,0);cloth.push({bone:b,side,k});parent=b;
  }
 }
 for(const front of[true,false])for(const side of[-1,1]){
  const prefix=(front?'front':'rear')+(side===-1?'Left':'Right');
  const yaw=joint(front?chest:pelvis,prefix+'_hipYaw',side*.49,-.04,front?-.13:.22);
  const hip=joint(yaw,prefix+'_hipPitch'),knee=joint(hip,prefix+'_knee',0,-.58,0),ankle=joint(knee,prefix+'_ankle',0,-.54,0),paw=joint(ankle,prefix+'_paw',0,-.04,-.08);
  cyl(hip,.16,.135,.58,0xcba969,0,-.29,0,8);ball(hip,.22,0xd6ba7b,0,-.04,0,1,1.3,1);
  cyl(knee,.13,.1,.54,0xd6ba7b,0,-.27,0,8);ball(knee,.15,0xe1c789,0,0,0);
  softBox(paw,.32,.16,.4,0xe1c789,0,-.04,-.08);
  const toes=Array.from({length:3},(_,k)=>{const toe=joint(paw,prefix+'_toe'+k,(k-1)*.105,-.055,-.26);softBox(toe,.095,.09,.17,0xead39d,0,0,-.03);return toe;});
  legs.push({front,side,yaw,hip,knee,ankle,paw,toes});
 }
 let tailParent=pelvis;
 for(let k=0;k<8;k++){const b=joint(tailParent,'tail'+k,0,k===0?.02:0,k===0?.57:.18);const segment=cyl(b,.075-k*.005,.08-k*.005,.2,0xcba969,0,0,.08,8);segment.rotation.x=Math.PI/2;tail.push(b);tailParent=b;}
 if(joints.length!==SPHINX_JOINTS)throw Error('Sphinx joint layout must contain 54 articulated joints');
 body.userData.jointCount=joints.length;
 function update({stand=0,mode='rest',elapsed=0,reducedMotion=false}={}){
  const standing=smooth(clamp(stand)),moving=mode==='backstep'||mode==='run',strength=reducedMotion?.45:1;
  const rhythm=mode==='backstep'?elapsed/.7:elapsed/.5;
  pelvis.position.y=.55+.65*standing;
  pelvis.rotation.x=moving?Math.sin(rhythm*Math.PI*2)*.025*strength:0;
  lumbar.rotation.x=-.06*standing+(moving?Math.sin(rhythm*Math.PI*2+.7)*.025*strength:0);
  thorax.rotation.x=.035*standing+(moving?Math.sin(rhythm*Math.PI*2+1.2)*.02*strength:0);
  chest.rotation.x=-.025*standing;neckBase.rotation.x=.08*standing;neck.rotation.x=-.05*standing;
  head.rotation.x=moving?Math.sin(rhythm*Math.PI*2)*.025*strength:0;head.rotation.y=moving?Math.sin(rhythm*Math.PI)*.025*strength:0;
  jaw.rotation.x=mode==='run'?.12+Math.sin(rhythm*Math.PI*2)*.025*strength:.015*standing;
  body.updateWorldMatrix(true,true);inverse.copy(body.matrixWorld).invert();
  for(const leg of legs){
   const {front,side,yaw,hip,knee,ankle,paw,toes}=leg;
   const phase=(front===(side===-1)?0:.5),p=((rhythm*(mode==='backstep'?.5:1)+phase)%1+1)%1;
   const swing=moving&&p<.5?Math.sin(p*Math.PI*2):0;
   const span=mode==='run'?.28:.21,travel=p<.5?-span+4*span*p:span-4*span*(p-.5);
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
  for(const {bone,side,k}of cloth){bone.rotation.z=-side*(.12+k*.025);bone.rotation.x=moving?Math.sin(rhythm*Math.PI*2-k*.7)*.06*strength:0;}
  body.userData.pose=mode;body.userData.standing=standing;
 }
 update();
 return{body,joints,update};
}
