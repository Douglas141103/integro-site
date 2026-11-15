import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {capturedSquare} from './chess-core.js';
const geo={ball:new T.SphereGeometry(1,24,18),box:new RoundedBoxGeometry(1,1,1,2,.09),cyl:new T.CylinderGeometry(1,1,1,32),cone:new T.ConeGeometry(1,1,24),gem:new T.OctahedronGeometry(1),ring:new T.TorusGeometry(1,.11,10,36)};
const mats=new Map();
function mat(color){if(!mats.has(color))mats.set(color,new T.MeshStandardMaterial({color,roughness:color===gold?.28:.48,metalness:color===gold?.55:.08}));return mats.get(color);}
function mesh(parent,shape,color,pos=[0,0,0],scale=[1,1,1]){const m=new T.Mesh(geo[shape],mat(color));m.position.set(...pos);m.scale.set(...scale);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
function group(parent,x=0,y=0,z=0){const g=new T.Group();g.position.set(x,y,z);parent.add(g);return g;}
const skin=0xf2c792,ink=0x26303b,gold=0xe4b15a;
export function createCharacter(type,color){
 const root=new T.Group(),body=group(root),white=color==='w';
 const main=white?0xf1dfbb:0x8865b5,dark=white?0x315e56:0x393258,accent=white?0xe6b44f:0x75dcc4,light=white?0xfff3d6:0xd1b5ed;
 root.userData={type,color,body};
 mesh(body,'cyl',dark,[0,.08,0],[.34,.12,.34]);mesh(body,'cyl',main,[0,.15,0],[.31,.1,.31]);
 for(const x of [-.15,.15])mesh(body,'ball',dark,[x,.24,.08],[.115,.105,.16]);
 const tall=type==='k'||type==='q',y=tall?1.12:1.00;
 mesh(body,type==='b'||type==='q'?'cone':'ball',main,[0,.58,0],type==='b'||type==='q'?[.31,.8,.31]:[.31,.37,.23]);
 mesh(body,'box',dark,[0,.43,.01],[.55,.075,.43]);
 mesh(body,'box',gold,[0,.43,.245],[.13,.12,.045]);
 mesh(body,'gem',accent,[0,.70,.235],[.085,.11,.035]);
 const collar=mesh(body,'ring',gold,[0,.82,0],[.19,.19,.19]);collar.rotation.x=Math.PI/2;
 for(const side of [-1,1]){
  mesh(body,'ball',light,[side*.31,.73,0],[.15,.11,.16]);
  mesh(body,'ball',accent,[side*.31,.75,.10],[.07,.045,.04]);
  mesh(body,'box',light,[side*.15,.25,.19],[.15,.07,.08]);
 }
 const trim=mesh(body,'ring',gold,[0,.19,0],[.30,.30,.30]);trim.rotation.x=Math.PI/2;
 const head=group(body,0,y,0);root.userData.head=head;
 if(type==='n'){
  mesh(head,'ball',main,[0,-.05,0],[.28,.34,.25]);mesh(head,'ball',light,[0,-.11,.22],[.25,.2,.27]);
  for(const s of [-1,1]){mesh(head,'cone',main,[s*.16,.28,-.08],[.10,.28,.1]);mesh(head,'ball',ink,[s*.11,-.04,.44],[.026,.027,.023]);}
  for(let j=0;j<4;j++)mesh(head,'box',dark,[0,.18-j*.13,-.23],[.15,.15,.12]);
 }else{
  mesh(head,'ball',skin,[0,0,0],[.245,.25,.225]);
  mesh(head,'ball',skin,[0,-.025,.24],[.065,.06,.055]);
 }
 for(const s of [-1,1]){
  const eye=group(head,s*(type==='n'?.17:.095),type==='n'?.055:.035,type==='n'?.18:.194);
  mesh(eye,'ball',0xfffbeb,[0,0,0],[.074,.092,.043]);mesh(eye,'ball',ink,[0,-.005,.035],[.034,.052,.018]);mesh(eye,'ball',0xffffff,[-.009,.02,.049],[.011,.014,.006]);
  const brow=mesh(head,'box',dark,[s*.1,.15,.21],[.12,.035,.035]);brow.rotation.z=-s*.12;
  if(type!=='n')mesh(head,'ball',0xe99e86,[s*.18,-.07,.16],[.055,.027,.04]);
 }
 if(type!=='n'){const smile=mesh(head,'ring',0x895145,[0,-.10,.211],[.065,.045,.04]);smile.rotation.z=Math.PI;}
 const armL=group(body,-.32,.66,0),armR=group(body,.32,.66,0);root.userData.armR=armR;root.userData.armL=armL;
 for(const [s,a]of [[-1,armL],[1,armR]]){mesh(a,'ball',main,[s*.015,-.09,0],[.11,.19,.12]);mesh(a,'ball',skin,[s*.02,-.23,.03],[.105,.105,.105]);}
 const weapon=group(armR,.02,-.15,.08);root.userData.weapon=weapon;
 if(type==='p'){
  mesh(head,'ball',dark,[0,.15,-.025],[.27,.19,.24]);mesh(head,'box',main,[0,.09,.06],[.53,.07,.44]);mesh(head,'cone',accent,[0,.37,-.02],[.07,.23,.07]);
  mesh(weapon,'cyl',0x7b513b,[0,.18,.1],[.035,.6,.035]);mesh(weapon,'box',gold,[0,.49,.1],[.36,.22,.23]);for(const x of [-.18,.18])mesh(weapon,'box',dark,[x,.49,.1],[.045,.24,.25]);
  const shield=mesh(armL,'ball',dark,[-.04,-.15,.13],[.19,.23,.07]);mesh(shield,'box',accent,[0,0,.8],[.22,1.2,.22]);mesh(shield,'box',accent,[0,.05,.8],[1.1,.22,.22]);
 }else if(type==='r'){
  mesh(head,'cyl',main,[0,.21,0],[.29,.20,.26]);for(let i=0;i<5;i++){const a=i*Math.PI*2/5;mesh(head,'box',light,[Math.sin(a)*.22,.38,Math.cos(a)*.22],[.13,.18,.13]);}
  const cannon=mesh(weapon,'cyl',dark,[0,.12,.22],[.11,.50,.11]);cannon.rotation.x=Math.PI/2;mesh(weapon,'cyl',ink,[0,.12,.48],[.083,.015,.083]).rotation.x=Math.PI/2;
 }else if(type==='b'){
  mesh(head,'cone',main,[0,.37,-.01],[.28,.70,.25]);mesh(head,'cyl',accent,[0,.14,0],[.28,.07,.26]);mesh(head,'gem',gold,[0,.37,.155],[.055,.09,.03]);
  mesh(weapon,'cyl',0x89623f,[0,.32,.02],[.035,1.05,.035]);mesh(weapon,'gem',accent,[0,.89,.02],[.13,.19,.13]);
  mesh(head,'cone',light,[0,-.23,.17],[.13,.27,.08]).rotation.z=Math.PI;
 }else if(type==='n'){
  mesh(body,'box',accent,[0,.75,.22],[.17,.24,.06]);mesh(weapon,'box',0xd4e0de,[0,.35,.07],[.07,.65,.06]);mesh(weapon,'box',gold,[0,.06,.07],[.23,.07,.1]);
 }else{
  const crown=group(head,0,.19,0);mesh(crown,'cyl',gold,[0,.04,0],[.27,.14,.25]);for(let i=0;i<5;i++){const a=i*Math.PI*2/5;mesh(crown,'cone',gold,[Math.sin(a)*.21,.22,Math.cos(a)*.21],[.075,.27,.075]);mesh(crown,'ball',accent,[Math.sin(a)*.21,.35,Math.cos(a)*.21],[.04,.04,.04]);}
  mesh(head,'gem',accent,[0,.22,.255],[.07,.09,.03]);
  const cape=mesh(body,'cone',dark,[0,.65,-.13],[.37,.84,.25]);cape.rotation.x=-.15;
  mesh(weapon,'cyl',gold,[0,.32,.03],[.035,.90,.035]);mesh(weapon,'ball',accent,[0,.80,.03],[.12,.12,.12]);
  if(type==='k'){mesh(crown,'box',gold,[0,.49,0],[.065,.25,.065]);mesh(crown,'box',gold,[0,.51,0],[.22,.065,.065]);for(const s of [-1,1])mesh(head,'ball',0x89664e,[s*.065,-.09,.24],[.09,.035,.04]);}
  else{for(const s of [-1,1])mesh(head,'ball',gold,[s*.23,-.12,0],[.08,.25,.13]);}
 }
 // Faces point along local +Z; armies face one another across the board.
 root.rotation.y=white?Math.PI:0;
 root.userData.restYaw=root.rotation.y;
 return root;
}
export const position=sq=>new T.Vector3(sq.charCodeAt(0)-100.5,0,4.5-Number(sq[1]));
function textSprite(text,color='#e9d6ad',size=70){const canvas=document.createElement('canvas');canvas.width=128;canvas.height=128;const c=canvas.getContext('2d');c.font=`600 ${size}px Georgia`;c.fillStyle=color;c.textAlign='center';c.textBaseline='middle';c.fillText(text,64,68);const tex=new T.CanvasTexture(canvas),m=new T.SpriteMaterial({map:tex,transparent:true,depthWrite:false});const s=new T.Sprite(m);s.scale.set(.28,.28,1);return s;}
function burstSprite(){const c=document.createElement('canvas');c.width=512;c.height=256;const x=c.getContext('2d');x.translate(256,128);x.fillStyle='#ffe2a1';x.strokeStyle='#403a42';x.lineWidth=7;x.beginPath();for(let i=0;i<24;i++){const a=i*Math.PI/12,r=i%2?80:116;x.lineTo(Math.cos(a)*r*1.7,Math.sin(a)*r);}x.closePath();x.fill();x.stroke();x.font='italic 900 83px Georgia';x.textAlign='center';x.textBaseline='middle';x.fillStyle='#704d59';x.fillText('POF!',0,8);const s=new T.Sprite(new T.SpriteMaterial({map:new T.CanvasTexture(c),depthTest:false,transparent:true}));s.scale.set(2.4,1.2,1);s.renderOrder=10;return s;}
// Fit both the board rim and the tallest characters, independent of screen ratio.
export function fitBoardCamera(camera,aspect){
 camera.updateMatrixWorld(true);let x=0,y=0;
 for(const [extent,height] of [[4.5,-.5],[4.5,.1],[3.85,2.05]])for(const a of [-extent,extent])for(const b of [-extent,extent]){
  const p=new T.Vector3(a,height,b).applyMatrix4(camera.matrixWorldInverse);x=Math.max(x,Math.abs(p.x));y=Math.max(y,Math.abs(p.y));
 }
 const half=Math.max(y,x/aspect)*1.045;camera.left=-half*aspect;camera.right=half*aspect;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();
}
export class BoardScene{
 constructor(host,onSquare,onImpact){
  this.host=host;this.onSquare=onSquare;this.onImpact=onImpact;this.pieces=new Map();this.effects=[];this.animation=null;this.reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;this.flipped=false;this.top=false;this.clickables=[];
  this.scene=new T.Scene();this.scene.fog=new T.Fog(0x263e43,24,60);
  this.renderer=new T.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});this.renderer.setPixelRatio(Math.min(devicePixelRatio,2));this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=T.PCFSoftShadowMap;this.renderer.outputColorSpace=T.SRGBColorSpace;this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.08;host.append(this.renderer.domElement);this.renderer.domElement.setAttribute('aria-label','Tabuleiro tridimensional de Reinos em Duelo');
  this.camera=new T.OrthographicCamera(-7,7,6,-6,.1,100);this.camera.position.set(3.5,17,11.5);this.camera.lookAt(0,0,0);
  this.controls=new OrbitControls(this.camera,this.renderer.domElement);this.controls.target.set(0,.4,0);this.controls.enablePan=false;this.controls.minPolarAngle=.10;this.controls.maxPolarAngle=1.1;this.controls.minZoom=.85;this.controls.maxZoom=1.5;this.controls.enableDamping=true;this.controls.dampingFactor=.09;this.controls.rotateSpeed=.6;this.controls.zoomSpeed=.7;
  this.scene.add(new T.HemisphereLight(0xf5f4df,0x55727c,1.8));const sun=new T.DirectionalLight(0xffe4b7,3.2);sun.position.set(-6,12,8);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.5,far:32});sun.shadow.bias=-.0008;sun.shadow.normalBias=.025;this.scene.add(sun);const rim=new T.DirectionalLight(0xa7cafa,1.5);rim.position.set(5,5,-5);this.scene.add(rim);
  this.board=group(this.scene);this.actorRoot=group(this.scene);this.highlights=group(this.scene);this.scenery=group(this.scene);
  this.makeBoard();this.makeScenery();
  const ray=new T.Raycaster(),pointer=new T.Vector2();let down=null;
  host.addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY,id:e.pointerId,moved:false};});
  host.addEventListener('pointermove',e=>{if(down&&Math.hypot(e.clientX-down.x,e.clientY-down.y)>7)down.moved=true;});
  host.addEventListener('pointercancel',()=>down=null);
  host.addEventListener('pointerup',e=>{if(!down||down.moved||down.id!==e.pointerId||this.animation)return;down=null;const r=this.renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(pointer,this.camera);const hits=ray.intersectObjects([...this.clickables,...this.pieces.values()],true);for(const hit of hits){let o=hit.object;while(o&&!o.userData.square)o=o.parent;if(o?.userData.square){onSquare(o.userData.square);break;}}});
  this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(host);this.controls.update();this.resize();this.previous=performance.now();this.frame=this.frame.bind(this);requestAnimationFrame(this.frame);
 }
 makeBoard(){
  mesh(this.board,'box',0x635446,[0,-.31,0],[8.72,.6,8.72]);mesh(this.board,'box',0xb39467,[0,-.16,0],[8.85,.16,8.85]);mesh(this.board,'box',0xddc599,[0,-.06,0],[8.54,.15,8.54]);
  for(let f=0;f<8;f++)for(let r=1;r<=8;r++){const sq=String.fromCharCode(97+f)+r,pos=position(sq);const tile=mesh(this.board,'box',(f+r)%2?0x87a79a:0xeee0bc,[pos.x,.015,pos.z],[.985,.10,.985]);tile.userData.square=sq;this.clickables.push(tile);}
  for(let n=0;n<8;n++){const a=textSprite('abcdefgh'[n]);a.position.set(n-3.5,.13,4.22);this.board.add(a);const b=textSprite(String(8-n));b.position.set(-4.21,.13,n-3.5);this.board.add(b);}
  for(const x of [-4.31,4.31])for(const z of [-4.31,4.31])mesh(this.board,'ball',gold,[x,-.03,z],[.1,.1,.1]);
  for(const x of [-3.5,3.5])for(const z of [-3.5,3.5])mesh(this.board,'cyl',0x4a5149,[x,-.85,z],[.4,.65,.4]);
  const platform=mesh(this.scenery,'cyl',0x394e4d,[0,-1.19,0],[6.4,.40,6.4]);platform.geometry=new T.CylinderGeometry(1,1.04,1,8);platform.rotation.y=Math.PI/8;
  mesh(this.scenery,'cyl',0x263f44,[0,-1.6,0],[6.1,.5,6.1]);
 }
 makeScenery(){
  for(const [x,z,s] of [[-5.4,-3.1,1.1],[5.4,-3.8,1.25],[-4.9,3.6,.65],[5.2,2.8,.8],[-2.8,-5.1,.7],[3.2,-5.2,.8]]){
   const tree=group(this.scenery,x,-1,z);mesh(tree,'cyl',0x66594a,[0,.45,0],[.12,.95,.12]);for(let i=0;i<3;i++)mesh(tree,'cone',i%2?0x527e6b:0x436857,[0,.9+i*.4*s,0],[s*(.60-i*.1),s*.95,s*(.60-i*.1)]);
  }
  for(let i=0;i<16;i++){const a=i*2.399,r=5.3+(i%3)*.18;mesh(this.scenery,'ball',i%2?0x60776e:0x879181,[Math.cos(a)*r,-.86,Math.sin(a)*r],[.22+(i%3)*.08,.18,.22]);}
  this.motes=[];for(let i=0;i<12;i++){const m=mesh(this.scenery,'ball',0xd1c89a,[Math.cos(i*2.1)*5.6,1+(i%3),Math.sin(i*2.1)*5.6],[.025,.025,.025]);m.castShadow=false;this.motes.push(m);}
 }
 resize(){const {width:w,height:h}=this.host.getBoundingClientRect();if(!w||!h)return;fitBoardCamera(this.camera,w/h);this.renderer.setSize(w,h);}
 setBoard(game){for(const p of this.pieces.values())this.actorRoot.remove(p);this.pieces.clear();for(const row of game.board())for(const p of row){if(!p)continue;const model=createCharacter(p.type,p.color);model.position.copy(position(p.square));model.userData.square=p.square;this.actorRoot.add(model);this.pieces.set(p.square,model);}this.mark(null,[]);}
 mark(selected,moves,last=null,check=null){for(const child of this.highlights.children){child.geometry.dispose();child.material.dispose();}this.highlights.clear();const add=(sq,color,ring=false)=>{const p=position(sq),geometry=ring?new T.RingGeometry(.34,.42,32):new T.CircleGeometry(.115,24),m=new T.Mesh(geometry,new T.MeshBasicMaterial({color,transparent:true,opacity:.85,depthWrite:false}));m.rotation.x=-Math.PI/2;m.position.set(p.x,.09,p.z);this.highlights.add(m);};if(last){add(last.from,0xd1af64,true);add(last.to,0xd1af64,true);}if(selected)add(selected,0xffc25f,true);const seen=new Set();for(const m of moves){if(seen.has(m.to))continue;seen.add(m.to);add(m.to,m.captured?0xf0a070:0x315e57,!!m.captured);}if(check)add(check,0xff765f,true);}
 orient(){this.controls.reset();this.controls.target.set(0,.4,0);this.camera.zoom=1;const s=this.flipped?-1:1;this.camera.position.set(this.top?.01:3.5*s,this.top?20:17,this.top?.01:11.5*s);if(this.top)this.camera.position.z=.01*s;this.camera.lookAt(this.controls.target);this.camera.updateProjectionMatrix();this.controls.update();this.resize();}
 resetView(){if(this.animation)return;this.flipped=false;this.top=false;this.orient();}
 flip(){if(this.animation)return;this.flipped=!this.flipped;this.orient();}
 overhead(){if(this.animation)return;this.top=!this.top;this.orient();}
 animateMove(move,{duel=true,demo=false}={}){
  const attacker=this.pieces.get(move.from),victim=this.pieces.get(capturedSquare(move));if(!attacker)return Promise.resolve();
  this.mark(null,[]);const from=attacker.position.clone(),to=position(move.to),capture=!!victim,cinema=capture&&duel&&!this.reduced;
  const duration=cinema?2.65:this.reduced?.12:capture?.65:.38;
  let rook=null,rookFrom=null,rookTo=null;if(move.flags.includes('k')||move.flags.includes('q')){const rank=move.from[1],right=move.flags.includes('k');rook=this.pieces.get((right?'h':'a')+rank);rookFrom=rook?.position.clone();rookTo=position((right?'f':'d')+rank);}
  this.controls.enabled=false;
  if(victim){const facing=from.clone().sub(to);victim.rotation.y=Math.atan2(facing.x,facing.z);}
  return new Promise(resolve=>{this.animation={move,attacker,victim,from,to,capture,cinema,duration,elapsed:0,resolve,hit:false,rook,rookFrom,rookTo,cameraFrom:this.camera.position.clone(),targetFrom:this.controls.target.clone(),demo};});
 }
 spawnImpact(a){
  this.onImpact?.(a.move.piece);const center=a.victim.position.clone();center.y=1;
  const label=burstSprite();label.position.copy(center).add(new T.Vector3(0,1,0));this.scene.add(label);this.effects.push({mesh:label,age:0,life:.9,kind:'label'});
  for(let i=0;i<26;i++){const angle=i*2.4,s=i%3===0;const m=mesh(this.scene,s?'gem':'ball',s?0xffd56f:i%2?0xf0e5ca:0xb8c9c0,center.toArray(),[s?.09:.14,s?.09:.14,s?.09:.14]);this.effects.push({mesh:m,age:0,life:.7+(i%4)*.18,kind:'particle',v:new T.Vector3(Math.cos(angle)*(1+i%3),1+(i%5)*.45,Math.sin(angle)*(1+i%3))});}
  if(a.move.piece==='k'||a.move.piece==='q'){const m=mesh(this.scene,'ring',gold,[center.x,.15,center.z],[.5,.5,.5]);m.rotation.x=Math.PI/2;this.effects.push({mesh:m,age:0,life:.7,kind:'ring'});}
 }
 updateAnimation(dt){const a=this.animation;if(!a)return;a.elapsed+=dt;const t=Math.min(a.elapsed/a.duration,1),smooth=x=>{x=T.MathUtils.clamp(x,0,1);return x*x*(3-2*x);};const {attacker:p,victim:v}=a;
  if(!a.cinema){p.position.lerpVectors(a.from,a.to,smooth(t));p.position.y=Math.sin(t*Math.PI)*.3;if(v&&t>.5){v.scale.setScalar(Math.max(.001,1-(t-.5)*2));if(!a.hit){a.hit=true;this.onImpact?.(a.move.piece);}}}
  else{
   const direction=a.to.clone().sub(a.from).normalize(),near=a.to.clone().addScaledVector(direction,-.63);p.rotation.y=Math.atan2(direction.x,direction.z);
   const approach=smooth(t/.30);p.position.lerpVectors(a.from,near,approach);p.position.y=Math.sin(approach*Math.PI)*(a.move.piece==='n'?.85:.25);
   const wind=smooth((t-.30)/.22),hit=smooth((t-.52)/.11),recover=smooth((t-.72)/.28),swing=Math.sin(Math.max(0,Math.min(1,(t-.30)/.42))*Math.PI);
   const body=p.userData.body,arm=p.userData.armR;
   if(a.move.piece==='p'){arm.rotation.x=-wind*2.7+hit*3.1;body.rotation.x=-wind*.2+hit*.35;}
   if(a.move.piece==='n'){p.position.y+=Math.sin(Math.min(1,Math.max(0,(t-.3)/.4))*Math.PI)*1.5;body.rotation.x=-swing*.6;}
   if(a.move.piece==='r'){arm.rotation.x=-wind*1.25;body.position.z=-Math.sin(hit*Math.PI)*.2;}
   if(a.move.piece==='b'){arm.rotation.x=-wind*1.7;arm.rotation.z=-swing*.5;}
   if(a.move.piece==='q'){body.rotation.y=wind*Math.PI*4;p.position.y+=swing*.55;}
   if(a.move.piece==='k'){arm.rotation.x=-wind*2.2+hit*2.7;body.scale.y=1-swing*.1;}
   if(t>=.60&&!a.hit){a.hit=true;this.spawnImpact(a);}
   if(t>.60){const death=smooth((t-.60)/.29);v.position.y= Math.sin(death*Math.PI)*1.15;v.position.x=a.to.x+direction.x*death*.85;v.position.z=a.to.z+direction.z*death*.85;v.rotation.z=death*2.4;v.rotation.x=death*1.3;v.scale.setScalar(Math.max(.001,1-death));}
   if(t>.72){p.position.lerpVectors(near,a.to,recover);p.position.y=Math.sin(recover*Math.PI)*.18;body.rotation.x*=1-recover;body.rotation.y*=1-recover;body.position.z*=1-recover;body.scale.y=1;arm.rotation.x*=1-recover;arm.rotation.z*=1-recover;}
   if((a.move.piece==='b'||a.move.piece==='r')&&t>.43&&t<.62){if(!a.projectile){a.projectile=mesh(this.scene,a.move.piece==='r'?'ball':'gem',a.move.piece==='r'?0x7a8990:0x97e4d4,[0,0,0],[.18,.18,.18]);}a.projectile.position.lerpVectors(near,a.to,smooth((t-.43)/.17));a.projectile.position.y=1.1+Math.sin((t-.43)/.17*Math.PI)*.25;}else if(a.projectile){this.scene.remove(a.projectile);a.projectile=null;}
   // A gentle focus keeps the duel visible without disorienting the player.
   const focus=a.from.clone().lerp(a.to,.7);focus.y=.3;const blend=Math.sin(t*Math.PI)*.20;this.controls.target.lerpVectors(a.targetFrom,focus,blend);
  }
  if(a.rook)a.rook.position.lerpVectors(a.rookFrom,a.rookTo,smooth(t));
  if(t>=1){p.position.copy(a.to);p.userData.body.rotation.set(0,0,0);p.userData.body.position.set(0,0,0);p.userData.body.scale.set(1,1,1);p.userData.armR.rotation.set(0,0,0);p.rotation.y=p.userData.restYaw;if(v){this.actorRoot.remove(v);this.pieces.delete(capturedSquare(a.move));}this.pieces.delete(a.move.from);this.pieces.set(a.move.to,p);p.userData.square=a.move.to;if(a.rook){this.pieces.delete((a.move.flags.includes('k')?'h':'a')+a.move.from[1]);const s=(a.move.flags.includes('k')?'f':'d')+a.move.from[1];this.pieces.set(s,a.rook);a.rook.userData.square=s;}
   this.controls.target.copy(a.targetFrom);this.controls.enabled=true;this.animation=null;a.resolve();}
 }
 frame(now){requestAnimationFrame(this.frame);const dt=Math.min((now-this.previous)/1000,.05);this.previous=now;if(document.hidden)return;this.updateAnimation(dt);for(const e of this.effects){e.age+=dt;const t=e.age/e.life;if(e.kind==='particle'){e.v.y-=dt*3;e.mesh.position.addScaledVector(e.v,dt);e.mesh.scale.multiplyScalar(Math.pow(.96,dt*60));e.mesh.rotation.x+=dt*3;}else if(e.kind==='label'){e.mesh.position.y+=dt*.4;e.mesh.material.opacity=Math.max(0,1-t*t);}else if(e.kind==='ring')e.mesh.scale.setScalar(.5+t*2.2);if(t>=1){this.scene.remove(e.mesh);if(e.kind==='label'){e.mesh.material.map.dispose();e.mesh.material.dispose();}}}this.effects=this.effects.filter(e=>e.age<e.life);
  if(!this.reduced){for(let i=0;i<this.motes.length;i++)this.motes[i].position.y=1.5+Math.sin(now/1800+i)*.7;for(const p of this.pieces.values()){if(p===this.animation?.attacker||p===this.animation?.victim)continue;p.userData.head.rotation.z=Math.sin(now/2000+p.position.x)*.018;}}
  this.controls.update();this.renderer.render(this.scene,this.camera);
 }
 async demo(type){for(const p of this.pieces.values())this.actorRoot.remove(p);this.pieces.clear();for(const [sq,t,c]of [['d4',type,'w'],['e5','p','b']]){const p=createCharacter(t,c);p.position.copy(position(sq));p.userData.square=sq;this.actorRoot.add(p);this.pieces.set(sq,p);}await this.animateMove({from:'d4',to:'e5',piece:type,captured:'p',color:'w',flags:'c'},{duel:true,demo:true});}
}
