import * as T from 'three';
import {profileGeometry,atlasUV} from './art.js';
import {SHOP} from './rules.mjs';
const clamp=T.MathUtils.clamp;
const bone=(name,parent,x=0,y=0,z=0)=>{const b=new T.Bone();b.name=name;b.position.set(x,y,z);parent.add(b);return b;};

export function makeAccessory(art,item){
 const g=new T.Group(),c=item.color,part=(kind,color,x,y,z,sx,sy=sx,sz=sx,tile='cloth',metal=0)=>art.mesh(g,kind,color,x,y,z,sx,sy,sz,tile,metal);
 if(item.model==='cap'||item.model==='hat'){
  const geo=art.own('cap-shell',profileGeometry([[0,.34,.31],[.04,.36,.33],[.14,.34,.31],[.25,.25,.24],[.31,.04,.04],[.315,0,0]],24),'cloth');g.add(new T.Mesh(geo,art.material(c)));
  part('round',c,0,.025,-.27,item.model==='hat'?.94:.64,.07,item.model==='hat'?.84:.52);part('round',0xffe3a6,0,.15,-.31,.16,.12,.03,'trim');
  if(item.model==='hat')part('cyl',0x79513f,0,.06,0,.365,.07,.335,'wood');
 }
 if(item.model==='crown'){part('cyl',c,0,.06,0,.35,.13,.33,'gold',.4);for(let i=0;i<7;i++){const a=i*Math.PI*2/7;part('cone',c,Math.sin(a)*.3,.23,Math.cos(a)*.29,.075,.32,.075,'gold',.3);part('rock',0xe4ffff,Math.sin(a)*.32,.08,Math.cos(a)*.31,.045,.06,.04,'gold');}}
 if(item.model==='halo'){const r=part('ring',c,0,.34,0,.43,.43,.43,'gold',.25);r.rotation.x=Math.PI/2;for(let i=0;i<4;i++)part('rock',0xffffff,Math.sin(i*Math.PI/2)*.43,.34,Math.cos(i*Math.PI/2)*.43,.035);}
 if(item.model==='pack'){part('round',c,0,0,0,.58,.69,.25);part('round',c,0,-.14,.13,.43,.24,.14);part('round',0xffdb9a,0,.02,.146,.48,.035,.025,'trim');for(const x of[-.23,.23])part('round',0x28485b,x,0,-.14,.055,.65,.07,'denim');part('round',0xf5d89d,0,.37,0,.17,.045,.05,'trim');part('round',0xfcf0d4,0,.12,.145,.16,.15,.025,'trim');}
 if(item.model==='wings'){for(const side of[-1,1])for(let j=0;j<5;j++){const feather=part('ball',c,side*(.15+j*.12),.15-j*.08,0,.13,.45-j*.045,.055,'leaf');feather.rotation.z=side*(-.45-j*.1);}part('rock',0xffedbc,0,.1,.06,.11);}
 if(item.model==='suit'){part('round',c,0,0,0,.65,.8,.26);for(const side of[-1,1]){const arm=part('round',c,side*.44,.1,0,.23,.6,.24);arm.rotation.z=side*.3;}part('round',0xffdc92,0,-.15,.14,.36,.2,.03,'trim');part('round',0xf9f4d9,0,.35,.15,.2,.05,.03,'trim');}
 if(item.model==='trail'){for(let i=0;i<12;i++){const a=i/11;part('ball',c,Math.sin(a*5)*.22,(a-.5)*1.2,0,.03+a*.075,.03+a*.075,.03+a*.075,'gold');}}
 return g;
}

export class RunnerCharacter {
 constructor(art,progress){
  this.art=art;this.root=new T.Group();this.root.name='RushExplorer';this.rig=new T.Group();this.root.add(this.rig);this.meshes=[];this.ownedGeometry=[];
  const h=bone('hips',this.rig,0,.88,0),sp=bone('spine',h,0,.19,0),ch=bone('chest',sp,0,.26,0),neck=bone('neck',ch,0,.24,0),head=bone('head',neck,0,.12,0);
  this.bones={hips:h,spine:sp,chest:ch,neck,head};
  for(const [side,sign]of[['L',-1],['R',1]]){
   const sh=bone('shoulder'+side,ch,sign*.32,.09,0),el=bone('elbow'+side,sh,sign*.07,-.31,0),hand=bone('hand'+side,el,0,-.29,0);
   const thigh=bone('thigh'+side,h,sign*.18,-.04,0),knee=bone('knee'+side,thigh,0,-.38,.025),foot=bone('foot'+side,knee,0,-.34,-.025);
   Object.assign(this.bones,{['shoulder'+side]:sh,['elbow'+side]:el,['hand'+side]:hand,['thigh'+side]:thigh,['knee'+side]:knee,['foot'+side]:foot});
  }
  this.rig.updateMatrixWorld(true);this.skeleton=new T.Skeleton(Object.values(this.bones));this.index=Object.fromEntries(this.skeleton.bones.map((b,i)=>[b.name,i]));
  const suit=SHOP.find(x=>x.id===progress.equipped.suit)?.color||0x23b9ad;
  this.skinPart('torso',[[.84,.23,.16],[.91,.28,.19],[1.12,.3,.2],[1.35,.34,.2],[1.46,.27,.17],[1.53,.13,.12]],suit,'cloth',v=>{const t=clamp((v.y-.98)/.42,0,1);return [['hips',1-t],['chest',t]];});
  this.skinPart('head',[[1.56,.09,.08,-.02],[1.63,.22,.2,-.025],[1.73,.31,.27,-.01],[1.91,.35,.3],[2.07,.31,.27],[2.18,.21,.2],[2.23,0,0]],0xf0b58d,'skin',()=>[['head',1]]);
  for(const [side,sign]of[['L',-1],['R',1]]){
   const arm=this.profile([[.83,.08,.075],[.88,.105,.095],[.94,.115,.105],[1.11,.13,.12],[1.3,.14,.13],[1.42,.13,.125]],16);
   const ap=arm.attributes.position;for(let i=0;i<ap.count;i++)ap.setX(i,ap.getX(i)+sign*(.39-(ap.getY(i)-1.1)*.08));
   this.bindPart(arm,suit,'cloth',v=>{const t=clamp((1.16-v.y)/.18,0,1);return [['shoulder'+side,1-t],['elbow'+side,t]];});
   const leg=this.profile([[.12,.11,.12],[.24,.13,.13],[.44,.14,.15],[.66,.16,.16],[.87,.17,.17]],18);const lp=leg.attributes.position;for(let i=0;i<lp.count;i++)lp.setX(i,lp.getX(i)+sign*.18);
   this.bindPart(leg,0x29445e,'denim',v=>{const t=clamp((.55-v.y)/.18,0,1);return [['thigh'+side,1-t],['knee'+side,t]];});
   const hand=this.bones['hand'+side];this.part(hand,'ball',0xf0b58d,0,-.05,0,.105,.14,.075,'skin');this.part(hand,'ball',0xf0b58d,-sign*.085,-.045,-.015,.055,.075,.05,'skin');
   const foot=this.bones['foot'+side];this.part(foot,'round',0xf3f0dc,0,-.035,-.065,.3,.15,.49,'sole');this.part(foot,'round',0xf78962,0,.055,-.055,.275,.19,.41,'cloth');this.part(foot,'round',0xfdf7e7,0,.04,-.23,.27,.13,.14,'sole');
   for(let j=0;j<3;j++)this.part(foot,'round',0xfffce9,0,.155,-.02-j*.055,.18,.018,.022,'trim');this.part(foot,'round',0xffcb6c,sign*.147,.055,-.06,.015,.065,.2,'trim');
   this.part(head,'ball',0xf0b58d,sign*.315,.1,0,.075,.11,.075,'skin');
   this.part(head,'ball',0xfffbf0,sign*.125,.18,-.272,.085,.106,.035,'trim');this.part(head,'ball',0x21404f,sign*.126,.18,-.304,.041,.058,.018,'trim');this.part(head,'ball',0xffffff,sign*.126-.012,.2,-.32,.012,.018,.007,'trim');
   const brow=this.part(head,'round',0x49362d,sign*.125,.31,-.274,.15,.035,.025,'hair');brow.rotation.z=sign*.12;
  }
  this.part(head,'ball',0xe9a375,0,.055,-.295,.073,.065,.065,'skin');this.part(head,'round',0x864a41,0,-.025,-.223,.1,.02,.02,'skin');
  const hair=profileGeometry([[.12,.32,.27,.035],[.28,.36,.31,.025],[.41,.29,.27,.04],[.48,.14,.16,.035],[.49,0,0]],24);
  const hm=new T.Mesh(art.own('runner-hair',hair,'hair'),art.material(0x41332e,'hair'));head.add(hm);
  for(let i=0;i<4;i++){const tuft=this.part(head,'ball',0x41332e,(i-1.5)*.12,.36,-.225,.085,.16,.09,'hair');tuft.rotation.z=-.3;}
  this.part(neck,'cyl',0xf0b58d,0,0,0,.105,.14,.095,'skin');
  // Hoodie hood, pocket, zipper, seams and tiny drawstrings follow the chest bone.
  this.part(ch,'ball',suit,0,.19,.12,.22,.19,.13,'cloth');this.part(ch,'round',0xf4d28b,0,-.23,-.205,.36,.18,.035,'trim');this.part(ch,'round',0xf8e8c0,0,0,-.209,.025,.4,.018,'trim');
  for(const x of[-.085,.085])this.part(ch,'round',0xfdf2d3,x,.08,-.22,.02,.17,.02,'trim');
  const hat=SHOP.find(x=>x.id===progress.equipped.head);if(hat){const accessory=makeAccessory(art,hat);accessory.position.y=.39;head.add(accessory);}
  const back=SHOP.find(x=>x.id===progress.equipped.back);if(back){const accessory=makeAccessory(art,back);accessory.position.set(0,-.03,.3);ch.add(accessory);}
  this.root.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=false;}});
  this.mixer=new T.AnimationMixer(this.rig);this.clips=this.createClips();this.actions={};for(const clip of this.clips){const a=this.mixer.clipAction(clip);a.play();a.setEffectiveWeight(clip.name==='idle'?1:0);this.actions[clip.name]=a;}
  this.current='idle';this.landing=0;this.hit=0;this.previousY=0;this.slideBlend=0;this.footPoint=new T.Vector3();
 }
 part(parent,kind,c,x,y,z,sx,sy=sx,sz=sx,tile='cloth'){return this.art.mesh(parent,kind,c,x,y,z,sx,sy,sz,tile);}
 profile(rings,segments){return profileGeometry(rings,segments);}
 skinPart(name,rings,color,tile,weights){return this.bindPart(this.profile(rings,24),color,tile,weights);}
 bindPart(geo,color,tile,weights){
  atlasUV(geo,tile);const indices=[],values=[],p=new T.Vector3();for(let i=0;i<geo.attributes.position.count;i++){p.fromBufferAttribute(geo.attributes.position,i);const w=weights(p);for(let j=0;j<4;j++){indices.push(w[j]?this.index[w[j][0]]:0);values.push(w[j]?.[1]||0);}}
  geo.setAttribute('skinIndex',new T.Uint16BufferAttribute(indices,4));geo.setAttribute('skinWeight',new T.Float32BufferAttribute(values,4));
  const mesh=new T.SkinnedMesh(geo,this.art.material(color,tile));mesh.frustumCulled=false;this.rig.add(mesh);mesh.bind(this.skeleton,new T.Matrix4());this.meshes.push(mesh);this.ownedGeometry.push(geo);return mesh;
 }
 createClips(){
  const frame=(duration,poses)=>{const tracks=[],times=poses.map((_,i)=>i/(poses.length-1)*duration);for(const name of Object.keys(this.bones)){
   const values=[];for(const pose of poses){const a=pose[name]||[0,0,0],q=new T.Quaternion().setFromEuler(new T.Euler(...a));values.push(q.x,q.y,q.z,q.w);}tracks.push(new T.QuaternionKeyframeTrack(name+'.quaternion',times,values));}
   return tracks;};
  const run=[];for(let i=0;i<=12;i++){const t=i/12*Math.PI*2,s=Math.sin(t),c=Math.cos(t);run.push({spine:[.13,Math.sin(t)*.06,0],chest:[0,-s*.09,0],head:[-.08,s*.035,0],shoulderL:[-.8*s,0,-.12],shoulderR:[.8*s,0,.12],elbowL:[-.9+Math.max(0,s)*.25,0,0],elbowR:[-.9+Math.max(0,-s)*.25,0,0],thighL:[s*.86,0,0],thighR:[-s*.86,0,0],kneeL:[Math.max(0,-s)*1.18+.12,0,0],kneeR:[Math.max(0,s)*1.18+.12,0,0],footL:[-Math.max(0,-c)*.35,0,0],footR:[-Math.max(0,c)*.35,0,0]});}
  const idle=[];for(let i=0;i<=8;i++){const t=i/8*Math.PI*2;idle.push({chest:[Math.sin(t)*.025,0,0],head:[0,Math.sin(t)*.06,0],shoulderL:[-.1,0,-.08],shoulderR:[-.1,0,.08],elbowL:[-.16,0,0],elbowR:[-.16,0,0]});}
  const jump={spine:[.15,0,0],head:[-.12,0,0],shoulderL:[-1.1,0,-.22],shoulderR:[-.8,0,.22],elbowL:[-.7,0,0],elbowR:[-.9,0,0],thighL:[-.65,0,0],thighR:[.3,0,0],kneeL:[1.05,0,0],kneeR:[1.35,0,0],footL:[-.3,0,0],footR:[-.4,0,0]};
  const slide={spine:[-1.3,0,0],head:[.9,0,0],shoulderL:[.4,0,-.35],shoulderR:[.4,0,.35],elbowL:[-.6,0,0],elbowR:[-.6,0,0],thighL:[-1.3,0,-.08],thighR:[-1.2,0,.08],kneeL:[1.9,0,0],kneeR:[1.8,0,0],footL:[-.5,0,0],footR:[-.5,0,0]};
  const hit={spine:[-.2,0,.17],head:[-.15,-.2,0],shoulderL:[-.8,0,-.6],shoulderR:[-.3,0,.7],elbowL:[-.8,0,0],elbowR:[-.5,0,0],thighL:[-.25,0,0],kneeL:[.4,0,0]};
  return [new T.AnimationClip('run',.68,frame(.68,run)),new T.AnimationClip('idle',3,frame(3,idle)),new T.AnimationClip('jump',1,frame(1,[jump,jump])),new T.AnimationClip('slide',1,frame(1,[slide,slide])),new T.AnimationClip('hit',.4,frame(.4,[hit,hit]))];
 }
 event(type){if(type==='hit'||type==='shield-hit')this.hit=.32;}
 update(run,dt,{paused=false,preview=false,time=0,reducedMotion=false}={}){
  dt=clamp(dt,0,.05);if(this.previousY>.02&&run.y<=.02)this.landing=.19;this.previousY=run.y;this.landing=Math.max(0,this.landing-dt);this.hit=Math.max(0,this.hit-dt);
  const target=preview||paused?'idle':this.hit>0?'hit':run.slide>0?'slide':run.jump>0?'jump':'run';
  if(target!==this.current){const old=this.actions[this.current],next=this.actions[target];next.reset().setEffectiveWeight(1).play();old.crossFadeTo(next,target==='slide'?.075:.13,false);this.current=target;}
  this.mixer.update(paused&&!preview?0:dt);const squash=this.landing/.19,bob=target==='run'?Math.abs(Math.sin(run.time*18))*.035:0;
  this.slideBlend+=((target==='slide'?1:0)-this.slideBlend)*(1-Math.exp(-dt*30));this.rig.rotation.x=-.3*this.slideBlend;
  this.rig.position.y=-.32*this.slideBlend+bob-squash*.06;
  const stretch=!reducedMotion&&target==='jump'?.055*Math.sin((1-run.jump/1.05)*Math.PI):0;
  this.rig.scale.set(1+squash*.07-stretch*.3,1-squash*.1+stretch,1+squash*.04);
  this.root.position.set(preview?0:run.x,preview?0:run.y,0);
  this.root.rotation.y=preview?Math.PI+Math.sin(time*.4)*.25:(run.lane*2.55-run.x)*-.12;
  this.root.rotation.z=preview?0:(run.lane*2.55-run.x)*-.05;
  if(preview||!run.jump){this.root.updateMatrixWorld(true);let minY=Infinity;for(const side of['L','R'])for(const x of[-.15,.15])for(const z of[-.3,.18]){this.footPoint.set(x,-.11,z).applyMatrix4(this.bones['foot'+side].matrixWorld);minY=Math.min(minY,this.footPoint.y);}this.root.position.y+=(preview?0:run.y)-minY+.012;}
  this.root.visible=preview||run.invincible<=0||Math.floor(time*10)%2===0;
 }
 dispose(){this.mixer.stopAllAction();this.mixer.uncacheRoot(this.rig);this.skeleton.dispose();for(const g of this.ownedGeometry)g.dispose();this.root.removeFromParent();}
}
