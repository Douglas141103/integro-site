import * as T from 'three';
import {profileGeometry,sculptGeometry,atlasUV} from './art.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {SHOP} from './rules.mjs';
const clamp=T.MathUtils.clamp;
const bone=(name,parent,x=0,y=0,z=0)=>{const b=new T.Bone();b.name=name;b.position.set(x,y,z);parent.add(b);return b;};
const shade=(c,v)=>new T.Color(c).multiplyScalar(v).getHex();
function piping(art,parent,key,points,color,radius=.009,tile='trim'){
 const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));
 const geo=art.own(key,new T.TubeGeometry(curve,12,radius,5,false),tile),mesh=new T.Mesh(geo,art.material(color,tile));parent.add(mesh);return mesh;
}

export function makeAccessory(art,item){
 const g=new T.Group(),c=item.color,part=(kind,color,x,y,z,sx,sy=sx,sz=sx,tile='cloth',metal=0)=>art.mesh(g,kind,color,x,y,z,sx,sy,sz,tile,metal);
 if(item.model==='cap'||item.model==='hat'){
  const geo=art.own('cap-shell-v2',sculptGeometry([[0,.357,.327],[.06,.375,.345],[.18,.348,.325],[.29,.26,.255],[.35,.13,.13],[.372,0,0]],24,2),'cloth');g.add(new T.Mesh(geo,art.material(c)));
  if(item.model==='hat'){part('round',c,0,.025,-.07,.98,.07,.9);part('cyl',0x79513f,0,.06,0,.375,.07,.345,'wood');}
  else{
   const s=new T.Shape();s.moveTo(-.31,-.13);s.bezierCurveTo(-.44,-.37,-.34,-.63,0,-.66);s.bezierCurveTo(.34,-.63,.44,-.37,.31,-.13);s.quadraticCurveTo(0,-.3,-.31,-.13);
   const brim=new T.ExtrudeGeometry(s,{depth:.035,bevelEnabled:true,bevelSize:.012,bevelThickness:.012,bevelSegments:1,curveSegments:8});brim.rotateX(Math.PI/2);brim.translate(0,.025,0);
   g.add(new T.Mesh(art.own('cap-visor-v2',brim,'cloth'),art.material(shade(c,.58))));
   piping(art,g,'cap-brim-seam',[[-.28,.026,-.34],[-.23,.026,-.55],[0,.026,-.61],[.23,.026,-.55],[.28,.026,-.34]],0xffdbaf,.007);
   for(const side of[-1,1])piping(art,g,'cap-panel-'+side,[[side*.28,.04,-.21],[side*.26,.17,-.23],[side*.17,.29,-.19],[0,.375,0]],shade(c,1.35),.007,'cloth');
   part('ball',shade(c,.65),0,.374,0,.045,.02,.045,'cloth');
  }
  part('round',0x183c54,0,.14,-.326,.23,.17,.032,'denim');
  const mark=part('round',0xffedba,-.035,.14,-.35,.037,.11,.015,'trim');mark.rotation.z=-.3;
  const mark2=part('round',0xffedba,.035,.14,-.35,.037,.11,.015,'trim');mark2.rotation.z=-.3;
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
  const h=bone('hips',this.rig,0,.9,0),sp=bone('spine',h,0,.19,0),ch=bone('chest',sp,0,.26,0),neck=bone('neck',ch,0,.24,0),head=bone('head',neck,0,.12,0);
  this.bones={hips:h,spine:sp,chest:ch,neck,head};
  for(const [side,sign]of[['L',-1],['R',1]]){
   const sh=bone('shoulder'+side,ch,sign*.355,.07,0),el=bone('elbow'+side,sh,sign*.035,-.30,0),hand=bone('hand'+side,el,0,-.28,0);
   const thigh=bone('thigh'+side,h,sign*.19,-.04,0),knee=bone('knee'+side,thigh,0,-.38,.025),foot=bone('foot'+side,knee,0,-.34,-.025);
   Object.assign(this.bones,{['shoulder'+side]:sh,['elbow'+side]:el,['hand'+side]:hand,['thigh'+side]:thigh,['knee'+side]:knee,['foot'+side]:foot});
  }
  this.rig.updateMatrixWorld(true);this.skeleton=new T.Skeleton(Object.values(this.bones));this.index=Object.fromEntries(this.skeleton.bones.map((b,i)=>[b.name,i]));
  const suit=SHOP.find(x=>x.id===progress.equipped.suit)?.color||0x18bcae,ink=0x17384d,skin=0xeeb087,hairColor=0x382b31,cream=0xffeac7;
  const torso=this.skinPart('jacket',[[.85,.24,.17],[.91,.29,.2],[1.05,.32,.215],[1.26,.365,.22],[1.39,.35,.205],[1.48,.23,.16],[1.53,.13,.11]],suit,'cloth',v=>{const t=clamp((v.y-1)/.4,0,1);return [['hips',1-t],['chest',t]];});
  // Baked colour blocking gives the jacket a deliberate front/back design,
  // with a cream shirt opening and dark waist, instead of a striped cylinder.
  const tp=torso.geometry.attributes.position,tc=[];
  for(let i=0;i<tp.count;i++){const x=tp.getX(i),y=tp.getY(i),z=tp.getZ(i);let c=new T.Color(suit);if(y<.94)c.set(ink);else if(z<-.14&&Math.abs(x)<.10)c.set(cream);else if(y>1.3&&z>.1)c.set(shade(suit,.66));tc.push(c.r,c.g,c.b);}
  torso.geometry.setAttribute('color',new T.Float32BufferAttribute(tc,3));torso.material=this.colourMaterial('cloth');
  this.headMesh=this.skinPart('face',[[1.57,.055,.06,-.035],[1.62,.17,.16,-.04],[1.72,.285,.245,-.025],[1.84,.326,.287],[1.99,.32,.285,.012],[2.12,.25,.235,.02],[2.19,.13,.135,.02],[2.22,0,0,.02]],skin,'skin',()=>[['head',1]]);
  const eye=(c,x,y,z,sx,sy)=>{const m=this.part(head,'disk',c,x,y,z,sx,sy,1,'trim');m.rotation.y=Math.PI;return m;};
  for(const [side,sign]of[['L',-1],['R',1]]){
   const arm=this.profile([[.81,0,0],[.84,.095,.09],[.89,.12,.11],[.98,.14,.125],[1.12,.145,.13],[1.28,.16,.145],[1.4,.16,.14],[1.47,.10,.095],[1.49,0,0]],16);
   const ap=arm.attributes.position;for(let i=0;i<ap.count;i++)ap.setX(i,ap.getX(i)+sign*(.4-(ap.getY(i)-1.12)*.09));
   const sleeve=this.bindPart(arm,suit,'cloth',v=>{const t=clamp((1.19-v.y)/.2,0,1);return [['shoulder'+side,1-t],['elbow'+side,t]];});
   const sc=[];for(let i=0;i<ap.count;i++){const c=new T.Color(ap.getY(i)<.92?ink:ap.getY(i)>1.29?shade(suit,.72):suit);sc.push(c.r,c.g,c.b);}sleeve.geometry.setAttribute('color',new T.Float32BufferAttribute(sc,3));sleeve.material=this.colourMaterial('cloth');
   const leg=this.profile([[.13,.115,.13],[.22,.14,.145],[.33,.162,.17],[.47,.165,.175],[.67,.18,.19],[.85,.19,.185],[.94,.17,.16]],18),lp=leg.attributes.position;
   for(let i=0;i<lp.count;i++)lp.setX(i,lp.getX(i)+sign*.19);
   this.bindPart(leg,0x315672,'denim',v=>{const t=clamp((.59-v.y)/.22,0,1);return [['thigh'+side,1-t],['knee'+side,t]];});
   const hand=this.bones['hand'+side];this.part(hand,'ball',skin,0,-.055,-.005,.105,.135,.09,'skin');this.part(hand,'ball',skin,-sign*.085,-.03,-.035,.055,.075,.055,'skin');
   this.part(hand,'cyl',ink,0,.035,0,.116,.09,.105,'cloth');
   const foot=this.bones['foot'+side];
   this.part(foot,'round',ink,0,-.055,-.09,.365,.09,.59,'sole');this.part(foot,'round',0xfff8e6,0,-.005,-.1,.36,.13,.58,'sole');
   this.part(foot,'round',0xff8255,0,.10,-.055,.31,.22,.445,'cloth');this.part(foot,'ball',cream,0,.07,-.265,.163,.105,.145,'sole');
   this.part(foot,'round',ink,0,.12,.13,.32,.18,.07,'denim');this.part(foot,'round',0xffcf69,0,.22,-.08,.18,.075,.19,'cloth');
   for(let j=0;j<3;j++)this.part(foot,'round',0xfff9df,0,.225-j*.012,-.06-j*.055,.21,.022,.03,'trim');
   const stripe=this.part(foot,'round',cream,sign*.16,.10,-.055,.022,.075,.21,'trim');stripe.rotation.x=-.25;
   this.part(foot,'round',cream,0,.205,.16,.075,.15,.045,'trim');
   this.part(this.bones['knee'+side],'cyl',0x203e57,0,-.22,-.01,.145,.13,.145,'denim');
   // Ears, eyelids and expressive eyes are recessed into a single closed head.
   this.part(head,'ball',skin,sign*.315,.09,.005,.076,.102,.065,'skin');this.part(head,'ball',0xd78c70,sign*.357,.09,-.014,.024,.053,.025,'skin');
   eye(0x9f5d4c,sign*.124,.155,-.286,.091,.089);
   eye(0xfff9e9,sign*.124,.16,-.29,.083,.08);
   eye(0x375b66,sign*.126,.157,-.294,.034,.048);eye(0x142938,sign*.127,.16,-.298,.024,.038);
   eye(0xffffff,sign*.126-.013,.18,-.302,.012,.017);
   const brow=this.part(head,'round',hairColor,sign*.125,.287,-.258,.16,.039,.035,'hair');brow.rotation.z=sign*.12;
   this.part(head,'ball',0xf0a487,sign*.21,.025,-.223,.055,.033,.013,'skin');
   // Sideburns close the seam by the ears, including under optional crowns.
   const lock=this.part(head,'ball',hairColor,sign*.294,.175,.025,.05,.16,.22,'hair');lock.rotation.z=-sign*.12;
  }
  this.part(head,'ball',skin,0,.052,-.282,.071,.072,.079,'skin');
  piping(art,head,'runner-smile-v2',[[-.065,-.038,-.207],[0,-.052,-.218],[.064,-.033,-.209]],0x884842,.009,'skin');
  this.part(head,'ball',0xf7c8a2,0,-.07,-.17,.08,.024,.026,'skin');
  // A closed, asymmetric hair shell surrounds the complete upper skull. Its
  // crown is above the skin crown; no scalp can poke through when viewed down.
  const hair=this.profile([[.015,.26,.225,.025],[.10,.326,.287,.022],[.27,.351,.312,.024],[.42,.315,.287,.024],[.515,.22,.21,.02],[.55,.10,.10,.02],[.56,0,0,.02]],24);
  const hp=hair.attributes.position;for(let i=0;i<hp.count;i++){const y=hp.getY(i),z=hp.getZ(i);if(y<.27&&z<0)hp.setY(i,y+Math.pow(Math.max(0,-z/.32),2)*(.27-y));}hair.computeVertexNormals();
  const hm=new T.Mesh(art.own('runner-hair-v2',hair,'hair'),art.material(hairColor,'hair'));hm.name='closed-hair';head.add(hm);
  for(let i=0;i<3;i++){const tuft=this.part(head,'ball',hairColor,-.17+i*.105,.32+i*.025,-.25,.12,.16,.10,'hair');tuft.rotation.z=-.45;}
  this.part(neck,'cyl',skin,0,0,0,.105,.14,.095,'skin');
  // The hood is a hollow rim with a darker inset, not a sphere on the neck.
  this.part(ch,'ball',shade(suit,.54),0,.12,.185,.255,.19,.12,'cloth');
  piping(art,ch,'runner-hood-v2',[[-.2,.24,.11],[-.24,.09,.21],[0,-.015,.31],[.24,.09,.21],[.2,.24,.11]],suit,.052,'cloth');
  this.part(ch,'round',cream,0,-.15,.236,.23,.23,.023,'trim');
  for(const sign of[-1,1]){const badge=this.part(ch,'round',suit,sign*.04,-.15,.255,.04,.13,.013,'trim');badge.rotation.z=-.35;}
  for(const x of[-.12,.12]){piping(art,ch,'runner-cord-'+x,[[x,.12,-.17],[x*.9,.02,-.225],[x*1.1,-.085,-.23]],cream,.01);this.part(ch,'cyl',0xffb94c,x*1.1,-.085,-.23,.014,.04,.014,'trim');}
  for(const sign of[-1,1]){const pocket=this.part(ch,'round',shade(suit,.66),sign*.21,-.22,-.182,.12,.023,.025,'cloth');pocket.rotation.z=-sign*.45;}
  const hat=SHOP.find(x=>x.id===progress.equipped.head)||{color:0xf36d4d,model:'cap'};
  const accessory=makeAccessory(art,hat);accessory.position.set(0,hat.model==='cap'||hat.model==='hat'?.25:.38,.015);
  if(hat.model==='cap')accessory.rotation.set(.06,Math.PI+.12,-.075);head.add(accessory);
  const back=SHOP.find(x=>x.id===progress.equipped.back);if(back){const accessory=makeAccessory(art,back);accessory.position.set(0,-.03,.32);ch.add(accessory);}
  this.batchAttachments();
  this.addContours();
  this.root.traverse(o=>{if(o.isMesh){o.castShadow=!o.userData.contour;o.receiveShadow=false;}});
  this.mixer=new T.AnimationMixer(this.rig);this.clips=this.createClips();this.actions={};for(const clip of this.clips){const a=this.mixer.clipAction(clip);a.play();a.setEffectiveWeight(clip.name==='idle'?1:0);this.actions[clip.name]=a;}
  this.current='idle';this.landing=0;this.hit=0;this.previousY=0;this.slideBlend=0;this.footPoint=new T.Vector3();
 }
 part(parent,kind,c,x,y,z,sx,sy=sx,sz=sx,tile='cloth'){return this.art.mesh(parent,kind,c,x,y,z,sx,sy,sz,tile);}
 profile(rings,segments=24){return sculptGeometry(rings,segments,2);}
 skinPart(name,rings,color,tile,weights){const mesh=this.bindPart(this.profile(rings,24),color,tile,weights);mesh.name=name;return mesh;}
 colourMaterial(tile){const material=this.art.material(0xffffff,tile);material.vertexColors=true;return material;}
 addContours(){
  const surfaces=[];this.rig.traverse(m=>{if(m.isMesh)surfaces.push(m);});
  for(const surface of surfaces){const outline=surface.isSkinnedMesh?new T.SkinnedMesh(surface.geometry,this.art.outlineMaterial()):new T.Mesh(surface.geometry,this.art.outlineMaterial());
   outline.name='ink-'+surface.name;outline.userData.contour=true;outline.frustumCulled=false;outline.renderOrder=1;surface.parent.add(outline);if(surface.isSkinnedMesh)outline.bind(this.skeleton,surface.bindMatrix);}
 }
 batchAttachments(){
  // Preserve the 17-bone rig, but combine rigid details by bone. The cap,
  // seams, eyes and laces share one atlas instead of adding a draw per detail.
  this.rig.updateMatrixWorld(true);
  for(const b of Object.values(this.bones)){
   const direct=b.children.filter(c=>!c.isBone),parts=[],inverse=b.matrixWorld.clone().invert();
   for(const child of direct)child.traverse(m=>{if(!m.isMesh||m.isSkinnedMesh)return;const g=m.geometry.index?m.geometry.toNonIndexed():m.geometry.clone();g.applyMatrix4(new T.Matrix4().multiplyMatrices(inverse,m.matrixWorld));const c=m.material.color,a=[];for(let i=0;i<g.attributes.position.count;i++)a.push(c.r,c.g,c.b);g.setAttribute('color',new T.Float32BufferAttribute(a,3));parts.push(g);});
   if(!parts.length)continue;const geo=mergeGeometries(parts);parts.forEach(g=>g.dispose());if(!geo)throw Error('Invalid runner attachments');
   for(const child of direct)b.remove(child);const mesh=new T.Mesh(geo,this.colourMaterial('trim'));mesh.name=b.name+'-details';b.add(mesh);this.ownedGeometry.push(geo);
  }
 }
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
