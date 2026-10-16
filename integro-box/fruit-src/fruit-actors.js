import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {RunnerCharacter} from '../rush-src/character.js';
import {LegIK,MotionSpring,gaitFoot} from '../rush-src/motion.js';

// Same weighted skin, leg IK, landing compression and secondary springs as Egg.
export class FruitExplorer {
 constructor(art,parent){
  this.g=new T.Group();this.g.name='FruitExplorer';parent.add(this.g);
  this.space=new T.Group();this.space.rotation.y=Math.PI;this.space.scale.setScalar(1.12);this.g.add(this.space);
  this.model=new RunnerCharacter(art,{equipped:{}},{suitColor:0xf2a541,hat:{model:'hat',color:0xffd587},back:{model:'pack',color:0x2f9e91}});
  this.space.add(this.model.root);this.time=0;this.takeoff=9;this.previousVy=0;
  this.weapon=new T.Group();this.model.bones.handR.add(this.weapon);this.weapon.rotation.x=-Math.PI/2;
  art.mesh(this.weapon,'round',0xffe19a,0,-.12,0,.12,.30,.12,'wood');
  art.mesh(this.weapon,'round',0x357d80,0,.04,0,.42,.09,.18,'gold');
  art.mesh(this.weapon,'round',0xdaf6ed,0,.58,0,.14,1.08,.085,'trim');
  art.mesh(this.weapon,'cone',0xffffff,0,1.17,0,.07,.18,.045,'trim');
  this.g.userData.actor=this;
 }
 update(game,dt,reducedMotion=false){
  if(dt<=0)return;this.time+=dt;const p=game.player;
  if(p.vy>this.previousVy+.2)this.takeoff=Math.max(1,p.vy);this.previousVy=p.vy;
  const air=p.y>.002||p.vy>0,phase=T.MathUtils.clamp((1-p.vy/this.takeoff)*.5,0,.99);
  this.model.update({x:0,lane:0,jump:air?(1-phase)*1.05:0,y:0,slide:game.dashing>0?.4:0,invincible:0,speed:18*game.speed/9.2,level:{speed:18}},dt,{preview:(!game.moving&&!air)||game.boating,previewYaw:0,externalVelocityY:p.vy,time:this.time,reducedMotion});
  const b=this.model.bones;this.model.root.rotation.y=0;this.weapon.visible=!game.boating;
  if(game.attackAnim>0){const phase=T.MathUtils.clamp(1-game.attackAnim/.35,0,1);b.shoulderR.rotation.set(-.9+Math.sin(phase*Math.PI)*1.8,0,-.55);b.elbowR.rotation.x=.65;b.chest.rotation.y=Math.sin(phase*Math.PI)*.28;}
  if(game.boating){b.shoulderL.rotation.x=b.shoulderR.rotation.x=.65;b.elbowL.rotation.x=b.elbowR.rotation.x=.5;}
  this.model.root.updateMatrixWorld(true);
 }
 dispose(){this.model.dispose();this.g.removeFromParent();}
}
const bone=(name,parent,x=0,y=0,z=0)=>{const b=new T.Bone();b.name=name;b.position.set(x,y,z);parent.add(b);return b;};

// One weighted surface and one outline per guardian. Joint weights blend at
// elbows and knees; the feet use the same analytic two-bone IK as the explorer.
export class FruitGuardian {
 constructor(art,parent,{color=0x65baa2,biome='beach',boss=false,npc=false}={}){
  this.g=new T.Group();this.g.name=npc?'FruitGuide':'FruitGuardian';parent.add(this.g);
  this.space=new T.Group();this.space.rotation.y=Math.PI;this.g.add(this.space);
  this.rig=new T.Group();this.space.add(this.rig);this.phase=0;this.elapsed=0;this.previous=null;this.spring=new MotionSpring(17,.7);this.npc=npc;
  const hips=bone('hips',this.rig,0,1.08,0),spine=bone('spine',hips,0,.46,0),head=bone('head',spine,0,.79,0);
  this.bones={hips,spine,head};
  for(const [side,sign]of[['L',-1],['R',1]]){
   const shoulder=bone('shoulder'+side,spine,sign*.73,.25,0),elbow=bone('elbow'+side,shoulder,sign*.03,-.52,0),hand=bone('hand'+side,elbow,0,-.44,0);
   const thigh=bone('thigh'+side,hips,sign*.34,-.07,0),knee=bone('knee'+side,thigh,0,-.44,.03),foot=bone('foot'+side,knee,0,-.41,-.03);
   Object.assign(this.bones,{['shoulder'+side]:shoulder,['elbow'+side]:elbow,['hand'+side]:hand,['thigh'+side]:thigh,['knee'+side]:knee,['foot'+side]:foot});
  }
  this.rig.updateMatrixWorld(true);this.skeleton=new T.Skeleton(Object.values(this.bones));const index=Object.fromEntries(this.skeleton.bones.map((b,i)=>[b.name,i]));
  const geometries=[],ink=0x234653,cream=0xffedbe,trim=new T.Color(color).lerp(new T.Color(cream),.45).getHex();
  const part=(name,kind,c,x,y,z,sx,sy=sx,sz=sx,next=null)=>{
   const geo=art.geometry(kind).clone(),matrix=new T.Matrix4().compose(new T.Vector3(x,y,z),new T.Quaternion(),new T.Vector3(sx,sy,sz));
   geo.applyMatrix4(matrix);const local=geo.attributes.position,weights=[],indices=[],colors=[],col=new T.Color(c);
   for(let i=0;i<local.count;i++){const mix=next?T.MathUtils.smoothstep(-local.getY(i),.25,.52)*.85:0;indices.push(index[name],index[next]||0,0,0);weights.push(1-mix,mix,0,0);colors.push(col.r,col.g,col.b);}
   const inverse=new T.Matrix4().copy(this.rig.matrixWorld).invert();geo.applyMatrix4(inverse.multiply(this.bones[name].matrixWorld));geo.setAttribute('skinIndex',new T.Uint16BufferAttribute(indices,4));geo.setAttribute('skinWeight',new T.Float32BufferAttribute(weights,4));geo.setAttribute('color',new T.Float32BufferAttribute(colors,3));geometries.push(geo.index?geo.toNonIndexed():geo);if(geo.index)geo.dispose();
  };
  part('hips','ball',ink,0,.05,0,.57,.38,.39);part('spine','round',color,0,.03,0,1.15,.94,.76);part('spine','rock',trim,0,.20,-.43,.20,.24,.09);
  part('head','ball',npc?0xefbb91:color,0,0,0,.52,.46,.42);
  for(const x of[-.18,.18]){part('head','ball',cream,x,.06,-.38,.105,.12,.04);part('head','ball',ink,x,.05,-.414,.047,.065,.025);part('head','round',ink,x,.23,-.38,.23,.045,.04);}
  part('head','round',cream,0,-.18,-.4,.23,.045,.035);
  for(const [side,sign]of[['L',-1],['R',1]]){
   part('shoulder'+side,'ball',trim,0,0,0,.32,.29,.32);part('shoulder'+side,'cyl',color,0,-.27,0,.22,.56,.23,'elbow'+side);
   part('elbow'+side,'ball',trim,0,0,0,.225,.21,.225);part('elbow'+side,'cyl',color,0,-.22,0,.19,.44,.20);part('hand'+side,'round',npc?0xefbb91:ink,0,-.02,-.035,.39,.35,.36);
   part('thigh'+side,'cyl',ink,0,-.23,0,.23,.48,.245,'knee'+side);part('knee'+side,'ball',trim,0,0,-.07,.245,.22,.22);part('knee'+side,'cyl',color,0,-.20,0,.20,.42,.21);part('foot'+side,'round',ink,0,-.035,-.13,.46,.24,.65);part('foot'+side,'round',cream,0,-.13,-.13,.47,.06,.66);
  }
  if(biome==='mushroom'){
   part('head','ball',0xb574d1,0,.43,0,.76,.31,.66);for(const x of[-.35,0,.35])part('head','ball',cream,x,.62,-.18,.13,.06,.12);
  }else if(biome==='clockwork'||biome==='station'){
   part('head','cyl',ink,0,.41,0,.46,.18,.42);part('head','round',trim,0,.37,-.34,.72,.08,.36);part('head','rock',cream,0,.47,-.43,.1);
   for(const sign of[-1,1])part('spine','cyl',trim,sign*.63,.23,.08,.15,.27,.15);
  }else if(biome==='lunar'||biome==='sky'){
   for(const sign of[-1,1])for(let j=0;j<3;j++)part('spine','rock',j%2?cream:trim,sign*(.6+j*.18),.38-j*.13,.18,.16,.47,.13);
   part('head','rock',cream,0,.53,0,.18,.32,.14);
  }else if(npc){part('head','cyl',trim,0,.36,0,.65,.1,.56);part('head','ball',0xe99d52,0,.49,0,.43,.22,.38);}
  else{for(const sign of[-1,1])part('head','cone',trim,sign*.37,.49,.02,.12,.48,.13);}
  if(boss)for(const x of[-.3,0,.3])part('head','rock',0xffd26f,x,.69,0,.11,.25,.11);
  this.geometry=mergeGeometries(geometries);geometries.forEach(g=>g.dispose());
  this.material=new T.MeshToonMaterial({color:0xffffff,vertexColors:true,gradientMap:art.toonRamp});
  this.mesh=new T.SkinnedMesh(this.geometry,this.material);this.mesh.castShadow=true;this.mesh.frustumCulled=false;this.rig.add(this.mesh);this.mesh.bind(this.skeleton,this.rig.matrixWorld);
  this.outline=new T.SkinnedMesh(this.geometry,art.outlineMaterial());this.outline.frustumCulled=false;this.rig.add(this.outline);this.outline.bind(this.skeleton,this.rig.matrixWorld);
  this.legs=Object.fromEntries(['L','R'].map(s=>[s,new LegIK(this.bones['thigh'+s],this.bones['knee'+s],this.bones['foot'+s])]));this.g.userData.actor=this;
 }
 update(state,dt,time,reduced=false){
  if(dt<=0)return;this.elapsed+=dt;const b=this.bones;
  const speed=this.previous?Math.hypot(state.x-this.previous.x,state.z-this.previous.z)/dt:0;this.previous={x:state.x,z:state.z};const moving=speed>.05&&!this.npc;
  if(moving)this.phase=(this.phase+dt*Math.min(2.1,.9+speed*.13))%1;
  const winding=state.windup>0?Math.sin(Math.min(1,state.windup/(state.boss?1.1:.85))*Math.PI):0,impact=state.recover>1?Math.sin(Math.min(1,(state.recover-1)/.3)*Math.PI):0;
  b.hips.position.y=1.01+(moving?Math.sin(this.phase*Math.PI*4)*.025:Math.sin(time*2)*.012)-winding*.1;
  b.spine.rotation.x=winding*.16-impact*.18;b.head.rotation.x=-b.spine.rotation.x*.4;
  const loose=this.spring.step(moving?Math.sin(this.phase*Math.PI*2)*.04:0,dt);b.head.rotation.z=reduced?0:loose;
  this.rig.scale.set(1+winding*.035,1-winding*.04,1+winding*.025);
  for(const [side,sign,offset]of[['L',-1,0],['R',1,.5]]){
   b['shoulder'+side].rotation.set(state.windup>0?-1.8:impact>0?1.2:Math.sin((this.phase+offset)*Math.PI*2)*.42*Number(moving),0,sign*.11);b['elbow'+side].rotation.x=-.22;
   const foot=moving?gaitFoot(this.phase+offset):{z:0,y:.15,pitch:0};this.space.updateWorldMatrix(true,true);
   const target=new T.Vector3(sign*.34,Math.max(.16,foot.y),foot.z*.74).applyMatrix4(this.space.matrixWorld),orientation=this.space.getWorldQuaternion(new T.Quaternion());
   this.legs[side].solve(target,orientation);
  }
  this.material.emissive.setHex(state.flash>0?0x657575:0);this.rig.updateMatrixWorld(true);
 }
 dispose(){this.skeleton.dispose();this.geometry.dispose();this.material.dispose();this.g.removeFromParent();}
}
