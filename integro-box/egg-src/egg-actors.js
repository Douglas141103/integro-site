import {createEggJetpackModel} from './egg-jetpack-model.js';
import {VEHICLES} from './egg-expansion.js';
import {vehicleModel} from './egg-expansion-models.js';
import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {RunnerCharacter} from '../rush-src/character.js';
import {sculptGeometry} from '../rush-src/art.js';
import {LegIK,MotionSpring,gaitFoot,smooth} from '../rush-src/motion.js';
import {ACCESSORIES} from './egg-rules.js';

const clamp=T.MathUtils.clamp;
function bone(name,parent,x=0,y=0,z=0){const b=new T.Bone();b.name=name;b.position.set(x,y,z);parent.add(b);return b;}
function vertexMaterial(art){if(!art.materials.has('egg-actor-colors'))art.materials.set('egg-actor-colors',new T.MeshToonMaterial({color:0xffffff,vertexColors:true,gradientMap:art.toonRamp}));return art.materials.get('egg-actor-colors');}
function coloredGeometry(mesh,matrix){const g=mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry.clone();g.applyMatrix4(matrix);const colors=[],c=mesh.material.color;for(let i=0;i<g.attributes.position.count;i++)colors.push(c.r,c.g,c.b);g.setAttribute('color',new T.Float32BufferAttribute(colors,3));return g;}
function addOutline(surface,art,skeleton){const m=surface.isSkinnedMesh?new T.SkinnedMesh(surface.geometry,art.outlineMaterial()):new T.Mesh(surface.geometry,art.outlineMaterial());m.userData.contour=true;m.renderOrder=1;m.frustumCulled=false;surface.parent.add(m);if(skeleton&&surface.isSkinnedMesh)m.bind(skeleton,surface.bindMatrix);return m;}

// Shared Rush skeleton and skinning, with Egg's colours, backpack, free
// movement, physical jump and a two-handed carrying pose.
export class EggExplorer {
 constructor(art,parent,color=0x25afaa){
  this.art=art;this.g=new T.Group();this.g.name='EggExplorer';parent.add(this.g);
  this.model=new RunnerCharacter(art,{equipped:{}},{suitColor:color,hat:{model:'cap',color:0x7864ce},back:{model:'pack',color:0xf2af58}});
  this.space=new T.Group();this.space.scale.setScalar(.82);this.g.add(this.space);this.space.add(this.model.root);
  const b=this.model.bones;this.carry=new T.Group();this.carry.position.set(0,-.10,-.53);b.chest.add(this.carry);
  this.wear=new T.Group();this.model.rig.add(this.wear);this.hat=new T.Group();this.hat.name='DefaultEggCap';for(const child of [...b.cap.children])this.hat.add(child);b.cap.add(this.hat);
  this.pack=new T.Group();for(const child of [...b.back.children])this.pack.add(child);b.back.add(this.pack);
  this.elapsed=0;this.previous=null;this.takeoff=8;this.carryBlend=0;this.g.userData.actor=this;
 }
 update(dt,{player,moving=0,training=false,carrying=false,speed=9,push=false,reducedMotion=false,vehicle=null,flying=false}={}){
  const p=player||{x:0,y:0,z:0,vy:0};dt=clamp(dt,0,.05);if(!dt)return;this.elapsed+=dt;
  if(flying&&!this.jetVisual)this.jetVisual=createEggJetpackModel(this.model.bones.chest);this.jetVisual?.update({visible:flying,flying,time:this.elapsed,reducedMotion});this.pack.visible=!flying&&!this.backEquipped;for(const m of this.wear.children)if(m.userData.slot==='back')m.visible=!flying;
  const vehicleId=!flying&&!training&&VEHICLES[vehicle]?vehicle:null;if(vehicleId!==this.vehicleId){this.ride?.removeFromParent();this.vehicleId=vehicleId;this.ride=vehicleId?vehicleModel(this.art,vehicleId,VEHICLES[vehicleId]):null;if(this.ride)this.g.add(this.ride);}
  const rideType=VEHICLES[vehicleId]?.type;this.space.position.y=this.ride?(rideType==='car'?.84:rideType==='jet'?.94:.52)+Math.sin(this.elapsed*4)*.018:0;if(this.ride){this.ride.position.y=rideType==='car'?.02:rideType==='jet'?.45:this.space.position.y-.22;this.ride.rotation.z=Math.sin(this.elapsed*2)*.015;for(const wheel of this.ride.userData.wheels||[])wheel.rotation.x-=dt*speed*moving*3;}
  if(p.vy>0&&(!this.previous||p.vy>this.previous.vy+.2||this.previous.y===0))this.takeoff=Math.max(1,p.vy);
  const airborne=p.y>.002||p.vy>0,phase=clamp((1-p.vy/this.takeoff)*.5,0,.99),idle=!training&&(moving<.02||this.ride)&&!airborne;
  this.model.update({x:0,lane:0,jump:airborne?(1-phase)*1.05:0,y:0,slide:0,invincible:0,speed:18*clamp(speed/9,.8,2.1),level:{speed:18}},dt,{preview:idle,previewYaw:0,externalVelocityY:p.vy/.82,time:this.elapsed,reducedMotion});
  this.model.root.rotation.y=0;
  this.carryBlend+=(Number(carrying)-this.carryBlend)*(1-Math.exp(-dt*16));
  const b=this.model.bones,w=this.carryBlend;
  if(this.ride){
   b.hips.position.y=.72-Math.max(0,Math.sin(this.model.landAge/.22*Math.PI))*(this.model.landAge<.22?.07:0);b.spine.rotation.x=-.10;b.chest.rotation.z=this.ride.rotation.z;b.head.rotation.x=.08;
   this.model.root.updateMatrixWorld(true);const q=this.space.getWorldQuaternion(new T.Quaternion()),skate=VEHICLES[vehicleId].type!=='scooter';
   for(const [side,sign]of[['L',-1],['R',1]]){const target=new T.Vector3(sign*.20,.115,skate?sign*.28:sign*.18).applyMatrix4(this.space.matrixWorld);this.model.legs[side].solve(target,q);b['shoulder'+side].rotation.set(skate?.18:1.05,0,skate?sign*.38:sign*.05);b['elbow'+side].rotation.x=skate?.45:.2;}
  }
  if(flying){b.spine.rotation.x=.12;b.chest.rotation.z=Math.sin(this.elapsed*2)*.025;for(const side of ['L','R']){if(b['thigh'+side])b['thigh'+side].rotation.x=-.12;b['knee'+side].rotation.x=.35;b['shoulder'+side].rotation.z=side==='L'?.25:-.25;}}
  for(const [side,sign]of[['L',1],['R',-1]]){const arm=b['shoulder'+side],elbow=b['elbow'+side];arm.rotation.x=T.MathUtils.lerp(arm.rotation.x,.87,w);arm.rotation.z=T.MathUtils.lerp(arm.rotation.z,sign*.35,w);elbow.rotation.x=T.MathUtils.lerp(elbow.rotation.x,1.18,w);if(push){arm.rotation.x=1.35;elbow.rotation.x=.20;}}
  b.chest.rotation.y*=1-w*.7;this.model.root.updateMatrixWorld(true);this.previous={y:p.y,vy:p.vy};
 }
 equip(equipped,makeAccessory){
  this.clearWear();this.backEquipped=!!equipped.back;this.hat.visible=!equipped.head||equipped.head==='headphones';this.pack.visible=!equipped.back;
  const m=this.model;
  for(const id of Object.values(equipped)){const def=ACCESSORIES[id];if(!def)continue;const holder=new T.Group(),asset=makeAccessory(holder,id),slot=def.slot;
   const name=slot==='head'?'cap':slot==='face'?'head':'back',index=m.index[name];
   asset.position.set(0,slot==='head'?(id==='halo'?.62:id==='headphones'?.25:.48):slot==='face'?.12:-.03,slot==='face'?-.33:slot==='back'?.34:.015);
   holder.updateMatrixWorld(true);const bind=m.skeleton.boneInverses[index].clone().invert(),parts=[];
   holder.traverse(part=>{if(part.isMesh)parts.push(coloredGeometry(part,new T.Matrix4().multiplyMatrices(bind,part.matrixWorld)));});
   const geo=mergeGeometries(parts);parts.forEach(g=>g.dispose());if(!geo)continue;const indices=[],weights=[];
   for(let i=0;i<geo.attributes.position.count;i++){indices.push(index,0,0,0);weights.push(1,0,0,0);}geo.setAttribute('skinIndex',new T.Uint16BufferAttribute(indices,4));geo.setAttribute('skinWeight',new T.Float32BufferAttribute(weights,4));
   const mesh=new T.SkinnedMesh(geo,vertexMaterial(this.art));mesh.name=id;mesh.userData.slot=slot;mesh.frustumCulled=false;mesh.castShadow=true;this.wear.add(mesh);mesh.bind(m.skeleton,new T.Matrix4());addOutline(mesh,this.art,m.skeleton).userData.slot=slot;
  }
 }
 clearWear(){for(const mesh of this.wear.children)if(!mesh.userData.contour)mesh.geometry.dispose();this.wear.clear();}
 dispose(){this.jetVisual?.dispose();this.clearWear();this.model.dispose();this.g.removeFromParent();}
}

const SPECIES={
 chick:{head:[1,-.07],hip:.37,leg:.32,foot:.055,r:.055,wing:true},
 fox:{head:[.95,-.18],hip:.40,leg:.35,foot:.055,r:.075,quad:true},
 deer:{head:[1.06,-.23],hip:.55,leg:.50,foot:.045,r:.052,quad:true},
 penguin:{head:[1.1,-.06],hip:.35,leg:.30,foot:.055,r:.07,wing:true,waddle:true},
 dragon:{head:[1.06,-.23],hip:.45,leg:.39,foot:.065,r:.10,wing:true},
 turtle:{head:[.4,-.56],hip:.23,leg:.17,foot:.065,r:.085,quad:true,low:true},
 cat:{head:[.95,-.18],hip:.40,leg:.35,foot:.055,r:.075,quad:true,wing:true},
 axolotl:{head:[.7,-.24],hip:.23,leg:.18,foot:.055,r:.065,quad:true,low:true},
 rabbit:{head:[.99,-.13],hip:.37,leg:.31,foot:.065,r:.105,hop:true},
 panda:{head:[1.07,-.12],hip:.43,leg:.37,foot:.065,r:.12,arms:true},
 robot:{head:[1.22,-.06],hip:.45,leg:.40,foot:.055,r:.10,arms:true},
 griffin:{head:[1.08,-.17],hip:.43,leg:.37,foot:.065,r:.085,wing:true},
 phoenix:{head:[1.12,-.16],hip:.43,leg:.37,foot:.065,r:.075,wing:true},
 clockOwl:{head:[1.16,-.1],hip:.37,leg:.31,foot:.065,r:.06,wing:true},
 hedgehog:{head:[.88,-.27],hip:.40,leg:.34,foot:.06,r:.075,quad:true},
 otter:{head:[1.13,-.12],hip:.42,leg:.36,foot:.065,r:.09,arms:true},
 scorpion:{head:[.43,-.35],hip:.24,leg:.18,foot:.06,r:.04,quad:true,low:true,legPairs:4},
 auroraWolf:{head:[1.04,-.22],hip:.52,leg:.46,foot:.06,r:.075,quad:true},
 galaxyAlien:{head:[1.14,-.1],hip:.45,leg:.39,foot:.065,r:.09,arms:true},
 integroConductor:{head:[1.23,-.05],hip:.45,leg:.39,foot:.065,r:.10,arms:true}
};

// Keep all fourteen recognisable species. Rebind their low-poly surfaces to a
// real skeleton, replace rigid feet with jointed legs and give flexible parts
// independent controls. One merged surface per bone keeps draw calls bounded.
export class EggCreatureRig {
 constructor(g,oldLimbs,kind,color,art){
  this.g=g;this.kind=kind;this.art=art;this.config={...SPECIES[kind]};this.owned=[];this.legs=[];this.wings=[];this.arms=[];this.loose=[];this.phase=0;this.elapsed=0;this.blend=0;
  const config=this.config,parent=g.parent,scale=g.scale.clone(),raise=config.low?.045:.14;config.hip+=raise;config.leg+=raise;config.head=[config.head[0]+raise,config.head[1]];
  g.removeFromParent();g.scale.setScalar(1);g.updateMatrixWorld(true);const parts=[...g.children];for(const part of parts)part.position.y+=raise;
  this.rig=new T.Group();g.add(this.rig);const hips=bone('hips',this.rig),chest=bone('chest',hips,0,(config.low?.30:.55)+raise,0),head=bone('head',chest,0,config.head[0]-chest.position.y,config.head[1]);this.bones={hips,chest,head};
  const torso=[];
  for(const part of parts){
   const x=part.position.x,y=part.position.y,z=part.position.z;
   // Original feet were unjointed boxes or spheres; they are rebuilt below.
   if(part.isMesh&&y<.30+raise&&Math.abs(x)>.10){g.remove(part);continue;}
   let target=chest;
   if(oldLimbs.includes(part)&&y>.30+raise){
    if(z>.35&&Math.abs(x)<.15){target=bone('tail',hips,0,.4+raise,.4);this.bones.tail=target;this.loose.push({bone:target,type:'tail',spring:new MotionSpring(15,.63)});}
    else if(Math.abs(x)>.30){const sign=Math.sign(x),name=(config.arms?'arm':'wing')+(sign<0?'L':'R');target=bone(name,chest,sign*.32,.24,.04);this.bones[name]=target;(config.arms?this.arms:this.wings).push({bone:target,sign});}
   }else if(z>.4&&y<.7+raise&&Math.abs(x)<.3){target=this.bones.tail||bone('tail',hips,0,.4+raise,.4);if(!this.bones.tail){this.bones.tail=target;this.loose.push({bone:target,type:'tail',spring:new MotionSpring(15,.63)});}}
   else if(y>config.head[0]-.22&&(z<.15||y>1.2+raise)&&!(config.low&&z>-.25)){target=head;}
   if(kind==='rabbit'&&y>1.3+raise){const sign=Math.sign(x),name='ear'+(sign<0?'L':'R');target=this.bones[name]||bone(name,head,sign*.16,.25,.05);if(!this.bones[name]){this.bones[name]=target;this.loose.push({bone:target,type:'ear',spring:new MotionSpring(17,.6)});}}
   g.updateMatrixWorld(true);target.attach(part);
   if(target===chest)part.traverse(mesh=>{if(mesh.isMesh)torso.push(mesh);});
  }
  const legColor=['panda','penguin'].includes(kind)?0x274e4b:['chick','griffin','phoenix','clockOwl'].includes(kind)?0xeab25e:color;
  for(const sign of[-1,1])for(let row=0;row<(config.legPairs||(config.quad?2:1));row++){const rear=row>0;
   const name=(sign<0?'L':'R')+(config.legPairs?String(row):rear?'Back':'Front'),z=config.legPairs?-.3+row*.22:config.quad?(rear?.31:-.25):0,x=sign*(config.low?.34:.21),l1=config.leg*.52,l2=config.leg*.48;
   const thigh=bone('thigh'+name,hips,x,config.hip,z),knee=bone('knee'+name,thigh,0,-l1,0),foot=bone('foot'+name,knee,0,-l2,0);
   Object.assign(this.bones,{['thigh'+name]:thigh,['knee'+name]:knee,['foot'+name]:foot});
   const footShape=art.mesh(foot,['robot','integroConductor'].includes(kind)?'round':'ball',legColor,0,0,-.055,config.hop?.17:config.low?.16:.12,config.foot,config.hop?.30:config.waddle?.24:.18,'trim');
   if(['robot','integroConductor'].includes(kind))footShape.scale.set(.22,.11,.32);
   this.legs.push({name,thigh,knee,foot,x,z,l1,l2,phase:config.hop?0:(sign<0?0:.5)+(rear?.5:0),target:new T.Vector3()});
  }
  // Add articulated forearms to the two humanoid species.
  for(const arm of this.arms){const b=arm.bone,children=[...b.children];for(const c of children)b.remove(c);const fore=bone(b.name+'Elbow',b,0,-.23,0);this.bones[fore.name]=fore;arm.elbow=fore;
   art.mesh(b,'ball',legColor,0,-.10,0,.12,.19,.12,'trim');art.mesh(fore,['robot','integroConductor'].includes(kind)?'round':'ball',legColor,0,-.12,-.02,.14,.19,.13,'trim');
  }
  this.rig.updateMatrixWorld(true);this.skeleton=new T.Skeleton(Object.values(this.bones));this.index=Object.fromEntries(this.skeleton.bones.map((b,i)=>[b.name,i]));
  // A smoothly weighted torso bends between hips and chest instead of moving
  // as one rigid sphere. Head, eyes and beak share the head bone.
  const bodyParts=torso.map(m=>coloredGeometry(m,m.matrixWorld));torso.forEach(m=>m.removeFromParent());
  if(bodyParts.length){const geo=mergeGeometries(bodyParts);bodyParts.forEach(g=>g.dispose());this.skin(geo,p=>{const t=smooth((config.low?.14:.25)+raise,(config.low?.42:.80)+raise,p.y);return [[this.index.hips,1-t],[this.index.chest,t]];});}
  for(const leg of this.legs){const y0=config.hip-config.leg,yk=config.hip-leg.l1,r=config.r;
   const geo=sculptGeometry([[y0,0,0],[y0+.04,r*.8,r*.8],[yk-.05,r,r],[yk+.05,r,r],[config.hip-.03,r*1.2,r*1.2],[config.hip,0,0]],12,1);geo.translate(leg.x,0,leg.z);
   const c=new T.Color(legColor),colors=[];for(let i=0;i<geo.attributes.position.count;i++)colors.push(c.r,c.g,c.b);geo.setAttribute('color',new T.Float32BufferAttribute(colors,3));
   this.skin(geo,p=>{const t=1-smooth(yk-.08,yk+.08,p.y);return [[this.index[leg.thigh.name],1-t],[this.index[leg.knee.name],t]];});leg.ik=new LegIK(leg.thigh,leg.knee,leg.foot);
  }
  this.batch();this.rig.traverse(m=>{if(m.isMesh){m.castShadow=!m.userData.contour;m.receiveShadow=false;}});
  g.scale.copy(scale);parent?.add(g);g.userData.actor=this;this.target=new T.Vector3();this.orientation=new T.Quaternion();this.pitch=new T.Quaternion();this.euler=new T.Euler();
 }
 skin(geo,weights){if(!geo.attributes.uv)geo.setAttribute('uv',new T.Float32BufferAttribute(new Float32Array(geo.attributes.position.count*2),2));const indices=[],values=[],p=new T.Vector3();for(let i=0;i<geo.attributes.position.count;i++){p.fromBufferAttribute(geo.attributes.position,i);const w=weights(p);for(let j=0;j<4;j++){indices.push(w[j]?.[0]||0);values.push(w[j]?.[1]||0);}}
  geo.setAttribute('skinIndex',new T.Uint16BufferAttribute(indices,4));geo.setAttribute('skinWeight',new T.Float32BufferAttribute(values,4));const mesh=new T.SkinnedMesh(geo,vertexMaterial(this.art));mesh.frustumCulled=false;this.rig.add(mesh);mesh.bind(this.skeleton,new T.Matrix4());this.owned.push(geo);addOutline(mesh,this.art,this.skeleton);
 }
 batch(){this.rig.updateMatrixWorld(true);for(const b of Object.values(this.bones)){const children=b.children.filter(c=>!c.isBone),parts=[],inverse=b.matrixWorld.clone().invert();for(const child of children)child.traverse(m=>{if(m.isMesh&&!m.isSkinnedMesh)parts.push(coloredGeometry(m,new T.Matrix4().multiplyMatrices(inverse,m.matrixWorld)));});if(!parts.length)continue;const geo=mergeGeometries(parts);parts.forEach(g=>g.dispose());children.forEach(c=>b.remove(c));const mesh=new T.Mesh(geo,vertexMaterial(this.art));mesh.name=b.name+'-surface';b.add(mesh);this.owned.push(geo);if(b.name==='head'||b.name==='chest')addOutline(mesh,this.art);}}
 update(dt,moving=0,speed=9,reducedMotion=false){dt=clamp(dt,0,.05);if(!dt)return;this.elapsed+=dt;this.blend+=(clamp(moving,0,1)-this.blend)*(1-Math.exp(-dt*12));const a=this.blend,c=this.config,pace=clamp(speed/12,.55,2),rate=(c.low?1.3:c.hop?2.5:2.0)*Math.sqrt(pace);this.phase=(this.phase+dt*rate*a)%1;
  const t=this.phase*Math.PI*2,subtle=reducedMotion?.3:1,b=this.bones;
  const hop=c.hop?(1-Math.cos(t))*.065*a:0;
  b.hips.position.y=-.025+Math.sin(t*2)*.018*a+hop; b.hips.rotation.set(0,Math.sin(t)*.035*a,Math.sin(t)*(c.waddle?.10:.025)*a*subtle);
  b.chest.rotation.set(-.08*a,Math.sin(t)*-.06*a,Math.sin(t)*.025*a);b.head.rotation.set(.05*a+Math.sin(this.elapsed*2)*.025,Math.sin(this.elapsed*1.6)*.09*(1-a),-b.hips.rotation.z*.5);
  const squash=(Math.sin(t*2)*(c.hop?.045:.018)*a+Math.sin(this.elapsed*2)*.008*(1-a))*subtle;b.chest.scale.set(1+squash*.3,1-squash,1+squash*.3);
  for(const {bone,sign}of this.wings){bone.rotation.z=sign*(.1+Math.sin(t+sign*.2)*(.14+a*.48)*subtle);bone.rotation.x=.08+Math.cos(t)*a*.12;}
  for(const {bone,elbow,sign}of this.arms){bone.rotation.x=Math.cos(t+(sign<0?0:Math.PI))*a*.65;bone.rotation.z=sign*.10;elbow.rotation.x=.4+a*.4;}
  for(const loose of this.loose){const value=loose.spring.step(Math.sin(t)*(loose.type==='tail'?.25:.12)*a*subtle,dt);loose.bone.rotation.z=value;loose.bone.rotation.x=loose.type==='ear'?-a*.15+value*.3:0;}
  this.g.updateWorldMatrix(true,true);this.g.getWorldQuaternion(this.orientation).normalize();
  for(const leg of this.legs){const gait=gaitFoot(this.phase+leg.phase),k=c.leg/.72,fore=gait.z*k*.68*a,lift=Math.max(0,gait.y-.112)*k*(c.hop?.12:.4)*a,pitch=gait.pitch*.4*a;
   this.target.set(leg.x,c.foot+.012+lift+hop+Math.abs(Math.sin(pitch))*.18,leg.z+fore).applyMatrix4(this.g.matrixWorld);this.pitch.setFromEuler(this.euler.set(pitch,0,0));leg.ik.solve(this.target,new T.Quaternion().copy(this.orientation).multiply(this.pitch));leg.ik.contact=a<.05||gait.contact;
  }
  this.g.updateMatrixWorld(true);
 }
 dispose(){for(const geo of this.owned)geo.dispose();this.skeleton.dispose();this.g.removeFromParent();}
}

export function rigCreature(g,limbs,kind,color,art){const animator=new EggCreatureRig(g,limbs,kind,color,art);return{g,limbs:animator.legs.map(l=>l.thigh),kind,animator,dispose:()=>animator.dispose()};}
