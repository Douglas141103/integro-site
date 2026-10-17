import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {animePose} from './anime-motion.mjs';
import {createLegSolver} from './dance-kinematics.mjs';

const INK=0x20243e, WHITE=0xfff5e6;
export const FINGER_NAMES=Object.freeze(['thumb','index','middle','ring','little']);
const FINGER_LENGTHS=[[.045,.033,.027],[.05,.036,.029],[.055,.04,.032],[.05,.036,.029],[.04,.029,.024]];
export function makeToonRamp() {
  const ramp=new T.DataTexture(new Uint8Array([80,80,80,255,164,164,164,255,255,255,255,255]),3,1,T.RGBAFormat);
  ramp.minFilter=ramp.magFilter=T.NearestFilter;ramp.generateMipmaps=false;ramp.needsUpdate=true;return ramp;
}
// Flatten the front-facing normals, without changing the head silhouette.
// Facial marks are painted separately, so the nose never casts a heavy cheek shadow.
export function editFaceNormals(geometry) {
  const n=geometry.attributes.normal,p=geometry.attributes.position;
  const normal=new T.Vector3();
  for(let i=0;i<n.count;i++) {
    const weight=T.MathUtils.smoothstep(p.getZ(i),.03,.19)*.82;
    normal.set(n.getX(i)*(1-weight),n.getY(i)*(1-weight),n.getZ(i)*(1-weight)+weight).normalize();
    n.setXYZ(i,normal.x,normal.y,normal.z);
  }
  n.needsUpdate=true;return geometry;
}
function outlineMaterial() {
  const m=new T.MeshToonMaterial({color:0x000000,emissive:INK,side:T.BackSide});
  m.onBeforeCompile=shader=>{
    shader.vertexShader=shader.vertexShader.replace('#include <skinning_vertex>',
      '#include <skinning_vertex>\ntransformed += normalize( objectNormal ) * 0.012;');
  };
  m.customProgramCacheKey=()=> 'interdance-inverted-hull-v1';return m;
}
function paintedTexture(kind,document) {
  if(!document)return null;
  const c=document.createElement('canvas');c.width=c.height=256;const p=c.getContext('2d');if(!p)return null;
  p.clearRect(0,0,256,256);p.lineCap='round';p.lineJoin='round';
  if(kind==='jacket') {
    p.fillStyle='#fff8ee';p.fillRect(0,0,256,256);
    p.fillStyle='#d6d0df';p.beginPath();p.moveTo(0,140);p.lineTo(74,154);p.lineTo(33,165);p.lineTo(0,158);p.fill();
    p.beginPath();p.moveTo(256,180);p.lineTo(194,190);p.lineTo(230,205);p.lineTo(256,198);p.fill();
    p.strokeStyle='#aaa2b4';p.lineWidth=4;p.beginPath();p.moveTo(128,19);p.lineTo(128,238);p.stroke();
    p.strokeStyle='#fff';p.lineWidth=3;p.beginPath();p.moveTo(135,27);p.lineTo(135,233);p.stroke();
    p.strokeStyle='#82768f';p.lineWidth=3;for(const side of [-1,1]) {p.beginPath();p.moveTo(128+side*22,151);p.lineTo(128+side*61,162);p.lineTo(128+side*57,195);p.stroke();}
    p.fillStyle='#fff3c4';p.beginPath();for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2,r=i%2?10:20;p.lineTo(183+Math.cos(a)*r,88+Math.sin(a)*r);}p.closePath();p.fill();
    p.fillStyle='#54486e';p.font='bold 18px sans-serif';p.fillText('ID',59,93);
  } else {
    // Authored graphic brush strokes on the hair: two light bands, never a specular gradient.
    p.fillStyle='#ffffff';p.fillRect(0,0,256,256);p.fillStyle='#d9c9e8';p.fillRect(0,166,256,90);
    p.fillStyle='#fff8d9';p.beginPath();p.moveTo(0,57);p.bezierCurveTo(72,30,169,88,256,53);p.lineTo(256,72);p.bezierCurveTo(159,107,65,54,0,78);p.closePath();p.fill();
  }
  const texture=new T.CanvasTexture(c);texture.colorSpace=T.SRGBColorSpace;texture.anisotropy=1;return texture;
}

export function createAnimeActor(person,{ramp=makeToonRamp(),document=globalThis.document}={}) {
  const root=new T.Group(),rig=new T.Group();root.name='InterDance anime · '+person.artist;root.add(rig);
  const resources=new Set(),palette={},outline=outlineMaterial();resources.add(outline);
  const material=(name,color,map=null,basic=false)=>{
    const m=basic?new T.MeshBasicMaterial({color,map}):new T.MeshToonMaterial({color,map,gradientMap:ramp});
    resources.add(m);if(name)palette[name]=m;return m;
  };
  const jacketTexture=paintedTexture('jacket',document),hairTexture=paintedTexture('hair',document);
  if(jacketTexture)resources.add(jacketTexture);if(hairTexture)resources.add(hairTexture);
  const cloth=material('color',person.color||'#80cbe6',jacketTexture),accent=material('accent',person.accent||'#e2e7a2');
  const skin=material('skin',person.skin||'#d2a082'),hair=material('hair',person.hair||'#302c47',hairTexture);
  const ink=material(null,INK),cream=material(null,WHITE),pants=material(null,0x34415f),eyeInk=material(null,INK,null,true),eyeWhite=material(null,WHITE,null,true),iris=material(null,0x715344,null,true);
  const bone=(name,parent,x=0,y=0,z=0)=>{const b=new T.Bone();b.name=name;b.position.set(x,y,z);parent.add(b);return b;};
  const rootBone=bone('root',rig),hips=bone('hips',rootBone,0,1.04,0),spine=bone('spine',hips,0,.18,0),chest=bone('chest',spine,0,.25,0);
  const upperChest=bone('upperChest',chest,0,.14,0),neck=bone('neck',upperChest,0,.22,0),head=bone('head',neck,0,.25,0);
  head.scale.setScalar(.83);
  const jaw=bone('jaw',head,0,-.13,0);
  const bones={root:rootBone,hips,spine,chest,upperChest,neck,head,jaw};
  for(const [side,sign] of [['L',-1],['R',1]])bones['eye'+side]=bone('eye'+side,head,sign*(person.look==='capybara'?.18:.13),.015,person.look==='capybara'?.285:person.look==='robot'?.29:.244);
  for(const [side,sign] of [['L',-1],['R',1]]) {
    const clavicle=bone('clavicle'+side,upperChest,sign*.16,0,0);
    const shoulder=bone('shoulder'+side,clavicle,sign*.22,0,0),elbow=bone('elbow'+side,shoulder,0,-.32,0),hand=bone('hand'+side,elbow,0,-.28,0);
    const thigh=bone('thigh'+side,hips,sign*.17,-.02,0),knee=bone('knee'+side,thigh,0,-.41,0),foot=bone('foot'+side,knee,0,-.41,0);
    const toe=bone('toe'+side,foot,0,-.055,.18);
    Object.assign(bones,{['clavicle'+side]:clavicle,['toe'+side]:toe,['shoulder'+side]:shoulder,['elbow'+side]:elbow,['hand'+side]:hand,['thigh'+side]:thigh,['knee'+side]:knee,['foot'+side]:foot});
    for(let f=0;f<FINGER_NAMES.length;f++){
      let parent=hand;
      for(let joint=0;joint<3;joint++){
        const name=FINGER_NAMES[f]+side+(joint+1);
        const b=bone(name,parent,joint?0:sign*[-.075,-.045,-.01,.027,.059][f],joint?-FINGER_LENGTHS[f][joint-1]:f===0?-.035:-.105,f===0&&!joint?.015:.025*(joint===0));
        if(!joint&&f===0)b.rotation.z=-sign*.7;
        bones[name]=b;parent=b;
      }
    }
  }
  rig.updateMatrixWorld(true);const skeleton=new T.Skeleton(Object.values(bones));
  const ball=(x,y,z)=>new T.SphereGeometry(1,20,14).scale(x,y,z);
  const box=(x,y,z,r=.07)=>new RoundedBoxGeometry(x,y,z,2,r);
  const mesh=(parent,geometry,mat,x=0,y=0,z=0,outlined=true)=>{
    resources.add(geometry);const part=new T.Mesh(geometry,mat);part.position.set(x,y,z);parent.add(part);
    if(outlined){const hull=new T.Mesh(geometry,outline);hull.name='inverted-hull';part.add(hull);}return part;
  };
  const ellipsoid=(parent,mat,x,y,z,sx,sy,sz,outlined=true)=>mesh(parent,ball(sx,sy,sz),mat,x,y,z,outlined);
  const detail=(parent,points,mat,r=.012)=>{
    const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));
    return mesh(parent,new T.TubeGeometry(curve,12,r,5,false),mat,0,0,0,false);
  };
  const skinnedPart=(geometry,mat,name,outlined=true)=>{
    resources.add(geometry);
    for(const m of outlined?[mat,outline]:[mat]) {const part=new T.SkinnedMesh(geometry,m);part.name=m===outline?'skinned-inverted-hull':name;part.frustumCulled=false;rig.add(part);part.bind(skeleton);}
  };
  // Continuous weighted sleeves and trousers bend across elbows/knees.
  function limb(upper,lower,length,radius,mat) {
    const geometry=new T.CylinderGeometry(radius*.92,radius*.76,length,12,12,false).translate(0,-length/2,0);
    const position=geometry.attributes.position,indices=[],weights=[],a=skeleton.bones.indexOf(bones[upper]),b=skeleton.bones.indexOf(bones[lower]);
    const joint=-bones[lower].position.y;
    for(let i=0;i<position.count;i++){const w=T.MathUtils.smoothstep(-position.getY(i),joint-.10,joint+.10);indices.push(a,b,0,0);weights.push(1-w,w,0,0);}
    geometry.applyMatrix4(bones[upper].matrixWorld);geometry.setAttribute('skinIndex',new T.Uint16BufferAttribute(indices,4));geometry.setAttribute('skinWeight',new T.Float32BufferAttribute(weights,4));
    skinnedPart(geometry,mat,upper+' weighted cloth');
  }
  // The jacket follows three spine segments instead of rotating as one block.
  function jacketPart(geometry,mat,name,outlined=true){
    const indices=[],weights=[];
    for(let i=0;i<geometry.attributes.position.count;i++){
      const y=geometry.attributes.position.getY(i),lower=y<-.1;
      const a=lower?spine:chest,b=lower?chest:upperChest;
      const w=T.MathUtils.smoothstep(y,lower?-.33:-.1,lower?-.1:.16);
      indices.push(skeleton.bones.indexOf(a),skeleton.bones.indexOf(b),0,0);weights.push(1-w,w,0,0);
    }
    geometry.applyMatrix4(chest.matrixWorld);geometry.setAttribute('skinIndex',new T.Uint16BufferAttribute(indices,4));geometry.setAttribute('skinWeight',new T.Float32BufferAttribute(weights,4));skinnedPart(geometry,mat,name,outlined);
  }
  jacketPart(box(.67,.62,.38,.12).translate(0,-.06,0),cloth,'articulated jacket');
  jacketPart(box(.28,.45,.035,.015).translate(0,-.015,.211),ink,'jacket center',false);
  for(const side of [-1,1])jacketPart(box(.12,.42,.045,.025).rotateZ(side*-.14).translate(side*.22,.005,.216),cream,'jacket panel',false);
  jacketPart(box(.10,.065,.045,.008).translate(-.24,.11,.25),accent,'jacket badge',false);
  mesh(hips,box(.49,.23,.30),pants,0,0,0);
  mesh(upperChest,new T.TorusGeometry(.18,.055,6,18),accent,0,.12,0).rotation.x=Math.PI/2;
  mesh(spine,box(.65,.08,.39,.025),accent,0,-.09,0);
  for(const [side,sign] of [['L',-1],['R',1]]) {
    limb('shoulder'+side,'elbow'+side,.60,.145,cloth);limb('thigh'+side,'knee'+side,.82,.14,pants);
    ellipsoid(bones['shoulder'+side],cloth,0,0,0,.145,.13,.14);
    ellipsoid(bones['hand'+side],skin,0,-.04,.025,.085,.085,.055);
    mesh(bones['hand'+side],box(.19,.055,.18,.02),accent,0,.07,0);
    // Thirty finger bones deform visible geometry. Merge all fifteen segments
    // per hand into one mesh (+ outline), keeping the draw-call cost constant.
    const fingers=[];
    for(let f=0;f<FINGER_NAMES.length;f++)for(let joint=0;joint<3;joint++){
      const b=bones[FINGER_NAMES[f]+side+(joint+1)],length=FINGER_LENGTHS[f][joint],radius=(f===0?.021:f===4?.014:.017)*(1-joint*.1);
      let geometry=new T.CapsuleGeometry(radius,Math.max(.005,length-2*radius),2,6).translate(0,-length/2,0);
      geometry.applyMatrix4(b.matrixWorld);geometry=geometry.toNonIndexed();
      const indices=[],weights=[];for(let i=0;i<geometry.attributes.position.count;i++){indices.push(skeleton.bones.indexOf(b),0,0,0);weights.push(1,0,0,0);}
      geometry.setAttribute('skinIndex',new T.Uint16BufferAttribute(indices,4));geometry.setAttribute('skinWeight',new T.Float32BufferAttribute(weights,4));fingers.push(geometry);
    }
    skinnedPart(mergeGeometries(fingers),skin,'articulated fingers '+side);for(const geometry of fingers)geometry.dispose();
    mesh(bones['foot'+side],box(.28,.17,.29,.06),cream,0,-.06,.015);
    mesh(bones['foot'+side],box(.29,.045,.30,.015),ink,0,-.135,.015);
    mesh(bones['toe'+side],box(.28,.14,.18,.05),cream,0,-.005,.07);
    mesh(bones['toe'+side],box(.29,.045,.18,.015),ink,0,-.08,.07);
    mesh(bones['foot'+side],box(.25,.07,.26,.025),accent,0,.015,.13);
    for(const y of [.05,.10,.15])detail(bones['foot'+side],[[-.07,.057,y],[0,.065,y-.01],[.07,.057,y]],cream,.009);
  }
  // A microphone is attached to the hand bone, so it follows all dance poses.
  const microphone=new T.Group();bones.handR.add(microphone);microphone.position.set(0,-.02,.09);microphone.rotation.x=-.35;
  mesh(microphone,new T.CylinderGeometry(.035,.03,.25,10),ink,0,.07,0);
  ellipsoid(microphone,cream,0,.23,0,.075,.095,.075);
  for(const y of [.19,.23,.27])mesh(microphone,new T.TorusGeometry(.072,.007,4,12),ink,0,y,0,false).rotation.x=Math.PI/2;

  const look=person.look,robot=look==='robot',capy=look==='capybara',carton=look==='box';
  const faceGeometry=capy?ball(.38,.34,.31):robot||carton?box(.64,.64,.47,.13):ball(.32,.39,.27);
  // Keep the outline based on the original geometric normals.
  const faceHull=faceGeometry.clone();resources.add(faceHull);editFaceNormals(faceGeometry);
  mesh(head,faceGeometry,robot?cream:carton?accent:skin,0,0,0,false);
  mesh(head,faceHull,outline,0,0,0,false).name='face-inverted-hull';
  const face=new T.Group();head.add(face);
  if(capy){ellipsoid(head,skin,.055,-.11,.23,.34,.17,.22);for(const sign of [-1,1])ellipsoid(head,skin,sign*.27,.29,0,.115,.14,.08);}
  else if(robot){mesh(head,box(.56,.27,.09,.07),ink,0,.025,.235);detail(head,[[0,.32,0],[0,.44,0],[.07,.48,0]],ink,.02);ellipsoid(head,accent,.07,.49,0,.065,.065,.065);}
  else if(carton){mesh(head,box(.07,.31,.02,.005),cream,0,.19,.241);}
  else for(const sign of [-1,1])ellipsoid(head,skin,sign*.32,-.025,0,.075,.10,.065);
  const eyes=[];
  for(const sign of [-1,1]) {
    const e=bones[sign<0?'eyeL':'eyeR'];eyes.push(e);
    ellipsoid(e,eyeWhite,0,0,0,.067,.079,.020,false);
    ellipsoid(e,robot?accent:iris,.008,-.013,.026,.038,.052,.009,false);
    ellipsoid(e,eyeInk,.01,-.005,.035,.019,.037,.008,false);
    ellipsoid(e,eyeWhite,-.008,.031,.044,.013,.017,.006,false);
    ellipsoid(e,eyeWhite,.025,-.039,.043,.009,.012,.006,false);
    detail(e,[[-.065,.028,.016],[-.033,.073,.021],[.025,.075,.022],[.063,.040,.016]],eyeInk,.014);
    detail(head,[[sign*.205,.17,.239],[sign*.13,.19,.263],[sign*.055,.165,.253]],hair,.014);
    if(!robot&&!carton){const blush=material(null,0xcd7d86,null,true);for(let j=0;j<2;j++)detail(head,[[sign*(.18+j*.035),-.13,.22],[sign*(.17+j*.035),-.16,.23]],blush,.008);}
  }
  if(!robot&&!carton){detail(head,[[.006,-.04,.278],[.027,-.075,.289],[.003,-.08,.282]],material(null,0xa46b66),.008);}
  const smile=detail(jaw,[[-.062,-.05,.233],[0,-.07,.249],[.07,-.04,.233]],eyeInk,.012);
  const mouth=ellipsoid(jaw,eyeInk,0,-.05,.25,.057,.057,.01,false);mouth.visible=false;
  ellipsoid(mouth,eyeWhite,0,.017,.012,.038,.012,.003,false);
  const hairGroup=new T.Group();head.add(hairGroup);
  if(!robot&&!carton&&!capy) {
    mesh(hairGroup,new T.SphereGeometry(1,20,12,0,Math.PI*2,0,1.67).scale(.36,.35,.29),hair,0,.13,-.025);
    for(let i=0;i<5;i++){
      const shape=new T.Shape();const x=(i-2)*.115;
      shape.moveTo(x-.09,.19);shape.quadraticCurveTo(x+.10,.21,x+.055,-.035-(i%2)*.045);shape.quadraticCurveTo(x-.015,.005,x-.09,.19);
      const geo=new T.ExtrudeGeometry(shape,{depth:.055,bevelEnabled:true,bevelSize:.012,bevelThickness:.012,bevelSegments:1,steps:1,curveSegments:6});
      mesh(hairGroup,geo,hair,0,.1,.205-Math.abs(x)*.13);
    }
    for(const sign of [-1,1])ellipsoid(hairGroup,hair,sign*.30,-.035,-.015,.08,.23,.12);
    if(['flower','leaf','star','feather','crown'].includes(look))for(const sign of [-1,1]) {
      const tail=ellipsoid(hairGroup,hair,sign*.29,-.20,-.19,.11,.40,.13);tail.rotation.z=sign*-.16;
    }
  }
  const ornament=new T.Group();head.add(ornament);
  const star=(parent,x,y,z,r,mat)=>{const shape=new T.Shape();for(let i=0;i<10;i++){const a=i*Math.PI/5+Math.PI/2,rad=i%2?r*.45:r;if(i===0)shape.moveTo(Math.cos(a)*rad,Math.sin(a)*rad);else shape.lineTo(Math.cos(a)*rad,Math.sin(a)*rad);}shape.closePath();return mesh(parent,new T.ExtrudeGeometry(shape,{depth:.028,bevelEnabled:false}),mat,x,y,z);};
  if(['cap','visor'].includes(look)) {
    mesh(ornament,new T.SphereGeometry(1,20,10,0,Math.PI*2,0,Math.PI/2).scale(.38,.19,.30),accent,0,.29,-.025);
    mesh(ornament,box(.53,.045,.34,.02),cloth,.07,.29,.23);star(ornament,0,.37,.28,.065,cream);
  } else if(look==='phones'||capy||robot) {
    mesh(ornament,new T.TorusGeometry(.34,.035,6,20,Math.PI),ink,0,.04,-.01);
    for(const sign of [-1,1]) {ellipsoid(ornament,ink,sign*.35,.03,0,.075,.15,.11);ellipsoid(ornament,accent,sign*.40,.03,0,.045,.105,.09);}
  } else if(look==='crown') {
    mesh(ornament,new T.CylinderGeometry(.32,.32,.1,16,1,true),accent,0,.34,0);
    for(let i=0;i<5;i++){const x=(i-2)*.135;mesh(ornament,new T.ConeGeometry(.075,.19+(i===2?.08:0),4),accent,x,.47,0);}
    star(ornament,0,.37,.32,.075,cream);
  } else if(look==='flower') {
    for(let i=0;i<5;i++){const a=i*Math.PI*2/5;ellipsoid(ornament,accent,-.27+Math.cos(a)*.075,.26+Math.sin(a)*.075,.24,.062,.055,.028);}
    ellipsoid(ornament,cream,-.27,.26,.27,.042,.042,.025);
  } else if(look==='leaf') {
    const leaf=ellipsoid(ornament,accent,-.27,.34,.19,.07,.18,.025);leaf.rotation.z=-.5;
  } else if(look==='star'||carton)star(ornament,carton?0:-.28,carton?.43:.30,.23,.13,accent);
  else if(look==='flame')for(let i=0;i<5;i++){const x=(i-2)*.12;const tuft=mesh(ornament,new T.ConeGeometry(.12,.32+(i%2)*.15,5),i%2?accent:material(null,0xf58b64),x,.39,0);tuft.rotation.z=-x;}
  else if(look==='feather')for(let i=0;i<4;i++){const feather=ellipsoid(ornament,i%2?cloth:accent,(i-1.5)*.13,.41,.01,.065,.22,.035);feather.rotation.z=-(i-1.5)*.2;}

  const shadow=mesh(root,new T.CircleGeometry(.45,28),new T.MeshBasicMaterial({color:0x1a2039,transparent:true,opacity:.23,depthWrite:false}),0,.02,0,false);resources.add(shadow.material);shadow.rotation.x=0;shadow.scale.y=.16;shadow.position.z=-.2;
  function setPalette(p) {for(const key of ['color','skin','hair','accent'])if(p[key])palette[key].color.set(p[key]);}
  const solveLeg=createLegSolver(rig,bones);
  let previous=null,lastTime=-Infinity;
  function pose(seconds,bpm,lane,reduced=false,cue={}){
    const target=animePose(seconds,bpm,lane,reduced,cue);
    // Blend articulation targets without delaying the musical clock or judgment.
    // Rewinds/restarts and reduced motion reset immediately to a deterministic pose.
    const reset=!previous||reduced||seconds<lastTime||seconds-lastTime>.25;
    const blend=reset?1:1-Math.exp(-Math.max(0,seconds-lastTime)*22);
    const p={...target};
    for(const key of Object.keys(target))if(typeof target[key]==='number'&&!['stamp','beat'].includes(key))
      p[key]=reset?target[key]:T.MathUtils.lerp(previous[key],target[key],blend);
    previous=p;lastTime=seconds;
    rootBone.rotation.y=p.rootTurn;
    hips.position.set(p.hipX,p.hipY,p.hipZ);
    hips.rotation.set(0,p.hipTurn,p.hipRoll);
    spine.rotation.set(p.spineBend,0,p.spineRoll);
    chest.rotation.set(-p.spineBend*.35,p.chestTurn,p.chestRoll);
    upperChest.rotation.set(p.upperBend,p.upperTurn,-p.chestRoll*.4);
    neck.rotation.set(p.headNod*.4,p.neckTurn,-p.chestRoll*.5);
    head.rotation.set(p.headNod,-p.chestTurn*.35,-p.spineRoll*.35);
    for(const [side,sign]of [['L',-1],['R',1]]){
      const left=side==='L';
      bones['clavicle'+side].rotation.set(0,sign*p.chestTurn*.2,sign*p.clavicleLift);
      bones['shoulder'+side].rotation.set(left?p.leftShoulder:p.rightShoulder,sign*.08,left?p.leftArm:p.rightArm);
      bones['elbow'+side].rotation.set(left?p.leftElbow:p.rightElbow,0,sign*.06);
      bones['hand'+side].rotation.set(-.08,sign*.12,left?p.leftWrist:p.rightWrist);
      for(let f=0;f<FINGER_NAMES.length;f++)for(let joint=0;joint<3;joint++){
        const b=bones[FINGER_NAMES[f]+side+(joint+1)];
        const curl=left?p.leftCurl*(f===1?1-p.leftPoint*.92:1):p.rightCurl;
        b.rotation.set(-curl*(f===0?.65:1)*(joint===0?.75:1),0,joint===0?(f===0?-sign*.7:sign*(f-2)*p.fingerSpread):0);
      }
    }
    rig.updateWorldMatrix(true,true);
    for(const side of ['L','R'])solveLeg(side,p.feet[side]);
    hairGroup.rotation.z=p.hairLag;ornament.rotation.z=p.hairLag*.45;
    jaw.rotation.x=p.jawOpen;
    for(const eye of eyes){eye.scale.y=p.blink?.12:1;eye.rotation.y=p.eyeLook;}
    mouth.visible=p.singing;smile.visible=!p.singing;
    root.updateMatrixWorld(true);skeleton.update();return p;
  }
  pose(0,140,-1,true);
  return {root,bones,skeleton,palette,faceGeometry,pose,setPalette,dispose(){root.removeFromParent();skeleton.dispose();for(const resource of resources)resource.dispose();}};
}
