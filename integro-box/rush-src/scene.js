import * as T from 'three';
import {REGIONS,SHOP,distanceAt} from './rules.mjs';
import {ArtResources,createShadowTexture} from './art.js';
import {RunnerCharacter,makeAccessory} from './character.js';
import {sceneryPatch,createBackdrop} from './environment.js';

export class QualityController {
 constructor(mode='auto',dpr=1){this.mode=mode;this.scale=mode==='low'?1:Math.min(1.6,dpr);this.distance=mode==='low'?130:185;this.samples=0;this.total=0;this.slow=0;this.cooldown=0;}
 observe(dt){if(this.mode!=='auto'||dt<=0||dt>.2)return false;this.total+=dt;this.samples++;if(this.total<3)return false;const fps=this.samples/this.total;this.total=0;this.samples=0;if(fps<42)this.slow++;else this.slow=Math.max(0,this.slow-1);if(this.slow>=2&&(this.scale>1||this.distance>130)){this.scale=Math.max(1,this.scale-.25);this.distance=Math.max(130,this.distance-15);this.slow=0;return true;}return false;}
}

export class RushScene {
 constructor(canvas,quality='auto',{rendererFactory=options=>new T.WebGLRenderer(options)}={}){
  this.canvas=canvas;this.quality=quality;this.resources=new ArtResources({curved:true});this.characterArt=new ArtResources();this.controller=new QualityController(quality,globalThis.window?.devicePixelRatio||1);this.reducedMotion=globalThis.window?.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches||false;
  this.renderer=rendererFactory({canvas,antialias:quality!=='low',alpha:false,powerPreference:'high-performance'});this.renderer.outputColorSpace=T.SRGBColorSpace;this.renderer.toneMapping=T.NeutralToneMapping;this.renderer.toneMappingExposure=1;this.renderer.shadowMap.enabled=quality!=='low';this.renderer.shadowMap.type=T.PCFSoftShadowMap;
  this.scene=new T.Scene();this.camera=new T.PerspectiveCamera(57,1,.1,280);this.scene.add(new T.HemisphereLight(0xfff6e6,0x50718e,1.05));
  this.sun=new T.DirectionalLight(0xffefce,2.45);this.sun.position.set(-6,12,4);this.sun.castShadow=quality!=='low';this.sun.shadow.mapSize.set(1024,1024);Object.assign(this.sun.shadow.camera,{left:-7,right:7,top:10,bottom:-5,near:.5,far:35});this.sun.shadow.bias=-.0004;this.sun.shadow.normalBias=.035;this.scene.add(this.sun);this.scene.add(this.sun.target);
  const rim=new T.DirectionalLight(0xafeaff,.38);rim.position.set(3,4,-8);this.scene.add(rim);
  this.world=new T.Group();this.scene.add(this.world);this.objects=new Map();this.scenery=[];this.particles=[];this.merged=[];this.pools=new Map();this.thumbnails=new Map();this.lastTime=null;this.cameraX=0;this.cameraLean=0;this.kick=0;this.bounce=0;this.lastY=0;this.preview=false;this.previewAngle=0;this.textureShadow=createShadowTexture();this.resize();
 }
 mat(c,metal=0,tile='stone'){return this.resources.material(c,tile,metal);}
 geo(kind,tile='stone'){return this.resources.geometry(kind,tile);}
 mesh(g,kind,c,x,y,z,sx=1,sy=sx,sz=sx,metal=0,tile='stone'){return this.resources.mesh(g,kind,c,x,y,z,sx,sy,sz,tile,metal);}
 box(g,c,x,y,z,sx,sy,sz,tile='stone'){return this.mesh(g,'round',c,x,y,z,sx,sy,sz,0,tile);}
 ball(g,c,x,y,z,r,tile='stone'){return this.mesh(g,'ball',c,x,y,z,r,r,r,0,tile);}
 group(parent=this.world){const g=new T.Group();parent.add(g);return g;}
 resize(){const w=Math.max(1,this.canvas.clientWidth||960),h=Math.max(1,this.canvas.clientHeight||600);this.renderer.setPixelRatio(this.controller.scale);this.renderer.setSize(w,h,false);this.camera.aspect=w/h;this.camera.fov=w<h?Math.min(72,Math.max(62,T.MathUtils.radToDeg(2*Math.atan(.30/(w/h))))):57;this.camera.updateProjectionMatrix();if(this.previewCamera){this.previewCamera.aspect=w/h;this.previewCamera.updateProjectionMatrix();}}
 clearLevel(){
  this.character?.dispose();this.previewCharacter?.dispose();this.previewCharacter=null;this.aura?.material.dispose();this.shadow?.material.dispose();this.shadow?.geometry.dispose();this.ribbon?.geometry.dispose();this.ribbon?.material.dispose();
  this.world?.traverse(o=>{if(o.isInstancedMesh)o.dispose();});this.merged.forEach(g=>g.dispose());this.merged=[];this.world.clear();this.objects.clear();this.pools.clear();this.scenery=[];this.particles=[];this.lastTime=null;
 }
 setLevel(run,progress){
  this.clearLevel();this.run=run;this.progress=progress;this.region=REGIONS[run.level.region];const r=this.region;this.trackDistances=new Map(run.track.map(o=>[o,distanceAt(run.level,o.time)]));
  this.scene.background=new T.Color(r.sky);this.scene.fog=new T.Fog(r.fog,65,230);this.sun.color.set(r.type==='lava'?0xffb084:0xffefce);
  this.mesh(this.world,'box',r.water,0,-5,-95,500,.2,500,0,r.type==='lava'?'basalt':'cloud');
  const backdrop=createBackdrop(this.resources,r);this.merged.push(...backdrop.userData.mergedGeometry);this.world.add(backdrop);
  this.roadParts=[];this.matrix=new T.Matrix4();this.rotation=new T.Quaternion();this.position=new T.Vector3();this.scale=new T.Vector3();const tile={island:'sand',ruins:'stone',snow:'snow',lava:'basalt',sky:'plaster'}[r.type];
  for(let lane=-1;lane<=1;lane++){const slabs=new T.InstancedMesh(this.geo('box',tile),this.mat(r.road,0,tile),120);slabs.instanceMatrix.setUsage(T.DynamicDrawUsage);slabs.frustumCulled=false;slabs.receiveShadow=true;slabs.userData.lane=lane;this.world.add(slabs);this.roadParts.push(slabs);}
  this.lines=new T.InstancedMesh(this.geo('box','trim'),this.mat(0xf6deb4,0,'trim'),100);this.lines.instanceMatrix.setUsage(T.DynamicDrawUsage);this.lines.frustumCulled=false;this.world.add(this.lines);
  const count=this.quality==='low'?12:this.quality==='high'?24:16;for(let i=0;i<count;i++){const g=sceneryPatch(this.resources,r,i,run.level.seed);g.userData.slot=i*288/count;this.merged.push(...g.userData.mergedGeometry);this.world.add(g);this.scenery.push(g);}
  this.character=new RunnerCharacter(this.characterArt,progress);this.player=this.character.root;this.world.add(this.player);
  this.shadow=new T.Mesh(new T.PlaneGeometry(1,1),new T.MeshBasicMaterial({map:this.textureShadow,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1}));this.shadow.rotation.x=-Math.PI/2;this.shadow.position.set(0,.013,0);this.shadow.scale.set(1.65,1.25,1);this.world.add(this.shadow);
  this.aura=this.mesh(this.player,'ball',0x63e6ff,0,1.1,0,1.1,1.35,1.1);this.aura.material=new T.MeshBasicMaterial({color:0x72efff,transparent:true,opacity:.14,depthWrite:false,wireframe:false});this.aura.visible=false;
  this.trailColor=SHOP.find(x=>x.id===progress.equipped.trail)?.color||0x6cffe0;
  this.fx=new T.InstancedMesh(this.characterArt.geometry('ball','gold'),this.characterArt.material(0xffffff,'gold'),72);this.fx.instanceMatrix.setUsage(T.DynamicDrawUsage);this.fx.frustumCulled=false;this.fx.count=0;this.world.add(this.fx);
  const ribbonGeo=new T.BufferGeometry(),vertices=new Float32Array(18*2*3),indices=[];
  for(let i=0;i<17;i++){const a=i*2;indices.push(a,a+2,a+1,a+1,a+2,a+3);}ribbonGeo.setAttribute('position',new T.BufferAttribute(vertices,3).setUsage(T.DynamicDrawUsage));ribbonGeo.setIndex(indices);
  this.ribbon=new T.Mesh(ribbonGeo,new T.MeshBasicMaterial({color:this.trailColor,transparent:true,opacity:.45,depthWrite:false,side:T.DoubleSide}));this.ribbon.frustumCulled=false;this.ribbon.renderOrder=1;this.world.add(this.ribbon);this.trailHistory=Array(18).fill(run.x);
  this.cameraX=run.x*.42;this.cameraLean=0;this.kick=0;this.bounce=0;this.lastY=run.y;this.nextDust=0;
  this.previewScene=new T.Scene();this.previewScene.background=new T.Color(0x173e50);this.previewScene.add(new T.HemisphereLight(0xfff2d8,0x5fabc0,1.05));const key=new T.DirectionalLight(0xffedca,2.45);key.position.set(-3,6,4);this.previewScene.add(key);const fill=new T.DirectionalLight(0xa2dff2,.4);fill.position.set(3,2,-4);this.previewScene.add(fill);this.previewCamera=new T.PerspectiveCamera(35,1,.1,20);this.previewCamera.position.set(0,1.3,4.7);this.previewCamera.lookAt(0,1.15,0);
  if(this.preview)this.setPreview(true);
 }
 setPreview(on){this.preview=on;if(on&&!this.previewCharacter){this.previewCharacter=new RunnerCharacter(this.characterArt,this.progress);this.previewScene.add(this.previewCharacter.root);}this.resize();}
 turnPreview(amount){this.previewAngle+=amount;}
 thumbnail(item){
  if(this.thumbnails.has(item.id))return this.thumbnails.get(item.id);const g=makeAccessory(this.characterArt,item),s=new T.Scene();s.background=new T.Color(0x1a4355);s.add(new T.HemisphereLight(0xffffff,0x7898a7,1.05));const sun=new T.DirectionalLight(0xffedc9,2.45);sun.position.set(-2,4,4);s.add(sun);s.add(g);g.rotation.y=item.slot==='head'?.5:-.45;
  const bounds=new T.Box3().setFromObject(g),size=bounds.getSize(new T.Vector3()),center=bounds.getCenter(new T.Vector3());g.position.sub(center);const radius=Math.max(size.x,size.y,size.z)*.65||1,camera=new T.PerspectiveCamera(35,1,.01,20);camera.position.set(0,radius*.38,radius*3.6);camera.lookAt(0,0,0);
  const target=new T.WebGLRenderTarget(128,128),previous=this.renderer.getRenderTarget();target.texture.colorSpace=T.SRGBColorSpace;let url='';try{this.renderer.setRenderTarget(target);this.renderer.render(s,camera);const pixels=new Uint8Array(128*128*4);this.renderer.readRenderTargetPixels(target,0,0,128,128,pixels);const canvas=document.createElement('canvas');canvas.width=canvas.height=128;const ctx=canvas.getContext('2d'),out=ctx.createImageData(128,128);for(let y=0;y<128;y++)out.data.set(pixels.subarray((127-y)*512,(128-y)*512),y*512);ctx.putImageData(out,0,0);url=canvas.toDataURL('image/png');this.thumbnails.set(item.id,url);}finally{this.renderer.setRenderTarget(previous);target.dispose();}return url;
 }
 makeObstacle(o){const g=this.group(),type=o.type;g.userData={...o};
  if(type==='coin'){const m=this.mesh(g,'cyl',0xffd157,0,1.05,0,.3,.09,.3,.35,'gold');m.rotation.x=Math.PI/2;this.mesh(g,'ring',0xfff1a2,0,1.05,-.065,.2,.2,.2,.25,'gold');this.box(g,0xfff4b4,0,1.05,-.075,.055,.22,.025,'gold');}
  if(type==='rock'){this.mesh(g,'rock',this.region.type==='snow'?0xb0deef:0x688f94,0,1,0,.95,1.1,.8,0,'stone');this.mesh(g,'rock',0x93b0a8,.4,.5,.2,.5,.5,.5,0,'stone');this.box(g,0xffd180,0,1,-.73,1.15,.18,.08,'trim');}
  if(type==='log'){const m=this.mesh(g,'cyl',0xbc8551,0,.52,0,.48,2,.48,0,'wood');m.rotation.z=Math.PI/2;for(const x of[-1.01,1.01]){const e=this.mesh(g,'cyl',0xf0cea0,x,.52,0,.39,.035,.39,0,'wood');e.rotation.z=Math.PI/2;}for(const x of[-.56,.56]){const b=this.mesh(g,'ring',0x987252,x,.52,0,.49,.49,.49,0,'wood');b.rotation.y=Math.PI/2;}}
  if(type==='arch'){for(const x of[-.98,.98]){this.box(g,0x518f97,x,1.65,0,.22,3.3,.42,'wood');this.box(g,0x305768,x,.12,0,.43,.22,.65,'stone');}this.box(g,0xf5bd68,0,2.2,0,2.3,1.65,.55,'wood');for(const x of[-.75,0,.75]){const stripe=this.box(g,0x355765,x,2.2,.3,.16,1.55,.03,'trim');stripe.rotation.z=-.3;}}
  if(type==='gap'){for(const z of[-1.05,1.05])this.box(g,0xffd77b,0,.05,z,2.45,.1,.2,'trim');for(const x of[-1.13,1.13])this.box(g,0xffd77b,x,.04,0,.14,.08,2.1,'trim');this.box(g,0x193c52,0,-2.3,0,2.4,.08,2.3);}
  if(type==='magnet'){const geo=this.resources.own('magnet-horseshoe',new T.TorusGeometry(.35,.13,8,18,Math.PI*1.5),'trim');const m=new T.Mesh(geo,this.mat(0xf56b7e,0,'trim'));m.rotation.z=-Math.PI*.25;m.position.y=1.25;g.add(m);for(const x of[-.25,.25])this.box(g,0xf5ffff,x,1.02,0,.22,.2,.25,'trim');}
  if(type==='shield'){this.mesh(g,'rock',0x6de2f3,0,1.2,0,.48,.62,.25,.25,'gold');this.box(g,0xffffe8,0,1.2,.26,.12,.5,.04,'trim');}
  g.traverse(m=>{if(m.isMesh)m.receiveShadow=true;});return g;
 }
 emit(type,run){this.character?.event(type);if(type==='hit'){this.kick=.22;this.burst(run.x,1.2,0,0xffb98a,12);}else if(type==='coin')this.burst(run.x,1.15,0,0xffdf75,6);else if(type==='checkpoint')this.burst(run.x,1.8,0,0xc1ffd5,20);else if(type==='shield-hit'||type==='shield')this.burst(run.x,1.4,0,0x9defff,18);else if(type==='magnet')this.burst(run.x,1.2,0,0xffb8cc,14);else if(type==='win')this.burst(run.x,2,0,0xffe7a3,35);}
 burst(x,y,z,color,count){if(this.reducedMotion)count=Math.ceil(count*.4);for(let i=0;i<count&&this.particles.length<72;i++){const a=i*2.399;this.particles.push({x,y,z,vx:Math.sin(a)*(1+i%3),vy:1.2+(i%5)*.4,vz:Math.cos(a)*1.2,life:.55+(i%4)*.1,max:.85,size:.035+(i%3)*.018,color});}}
 effects(dt,run,paused){
  if(!paused&&run.y<.06&&run.slide<=0&&run.time>this.nextDust){this.nextDust=run.time+.16;this.burst(run.x,.09,.25,0xead6b3,2);}
  for(const p of this.particles){p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.z+=p.vz*dt;p.vy-=4*dt;}
  this.particles=this.particles.filter(p=>p.life>0);this.fx.count=this.particles.length;
  this.particles.forEach((p,i)=>{this.position.set(p.x,p.y,p.z);const size=p.size*Math.min(1,p.life*4);this.scale.setScalar(size);this.matrix.compose(this.position,this.rotation,this.scale);this.fx.setMatrixAt(i,this.matrix);this.fx.setColorAt(i,new T.Color(p.color));});this.fx.instanceMatrix.needsUpdate=true;if(this.fx.instanceColor)this.fx.instanceColor.needsUpdate=true;
 }
 draw(run,time,paused=false){
  if(!this.player)return;const raw=this.lastTime==null?1/60:time-this.lastTime,dt=Math.max(0,Math.min(.05,raw));this.lastTime=time;
  if(this.preview){this.previewCharacter.update(run,dt,{preview:true,time,reducedMotion:this.reducedMotion});this.previewCharacter.root.rotation.y+=this.previewAngle;this.renderer.render(this.previewScene,this.previewCamera);return;}
  if(!paused&&this.controller.observe(raw))this.resize();const travel=run.distance,positions=run.track.map(o=>({o,z:travel-(this.trackDistances.get(o)??distanceAt(run.level,o.time))})),gaps=positions.filter(({o,z})=>o.type==='gap'&&Math.abs(z)<285);
  for(const slabs of this.roadParts){const lane=slabs.userData.lane;for(let i=0;i<120;i++){const z=18-((i*2.4-travel%288+288)%288),gap=gaps.some(g=>g.o.lane===lane&&Math.abs(z-g.z)<1.25);this.position.set(lane*2.55,gap?-50:-.32,z);this.scale.set(2.51,.58,2.42);this.matrix.compose(this.position,this.rotation,this.scale);slabs.setMatrixAt(i,this.matrix);}slabs.instanceMatrix.needsUpdate=true;}
  for(let i=0;i<100;i++){this.position.set(i%2?3.85:-3.85,.025,18-((Math.floor(i/2)*6-travel%300+300)%300));this.scale.set(.09,.06,3.5);this.matrix.compose(this.position,this.rotation,this.scale);this.lines.setMatrixAt(i,this.matrix);}this.lines.instanceMatrix.needsUpdate=true;
  for(const g of this.scenery){g.position.z=20-((g.userData.slot-travel%288+288)%288);g.visible=g.position.z>-this.controller.distance;}
  const wanted=new Set();for(const {o,z} of positions){if(z < -this.controller.distance || z>12||run.claimed.has(o.id))continue;wanted.add(o.id);let g=this.objects.get(o.id);if(!g){const pool=this.pools.get(o.type);g=pool?.pop()||this.makeObstacle(o);g.userData={...o};g.visible=true;this.world.add(g);this.objects.set(o.id,g);}g.rotation.set(0,0,0);g.position.set(o.lane*2.55,0,z);if(['coin','magnet','shield'].includes(o.type)){g.rotation.y=time*1.6+o.id;g.position.y=Math.sin(time*2+o.id)*.1;if(o.type==='coin'&&run.magnet>0&&z>-10&&z<0){const t=(z+10)/10;g.position.x=T.MathUtils.lerp(g.position.x,run.x,t*t);g.position.y+=t*.4;}}}
  for(const [id,g]of this.objects)if(!wanted.has(id)){g.visible=false;this.world.remove(g);this.objects.delete(id);if(!this.pools.has(g.userData.type))this.pools.set(g.userData.type,[]);this.pools.get(g.userData.type).push(g);}
  this.character.update(run,dt,{paused,time,reducedMotion:this.reducedMotion});this.aura.visible=run.shield>0;this.aura.rotation.y=time*.65;
  this.shadow.position.x=run.x;const shadowScale=1-run.y*.12;this.shadow.scale.set(1.65*shadowScale,1.25*shadowScale,1);this.shadow.material.opacity=1-run.y*.16;
  this.ribbon.visible=!!this.progress.equipped.trail&&!paused&&!this.reducedMotion;
  if(this.ribbon.visible){this.trailHistory.unshift(run.x);this.trailHistory.pop();const p=this.ribbon.geometry.attributes.position;
   for(let i=0;i<18;i++){const width=.15*(1-i/17),z=.15+i*.16,x=this.trailHistory[i]+Math.sin(i*.4+time*4)*.025;for(let side=0;side<2;side++)p.setXYZ(i*2+side,x+(side?width:-width),.035,z);}p.needsUpdate=true;}
  if(this.lastY>.03&&run.y<.03&&!paused){this.bounce=.11;this.burst(run.x,.1,0,0xf1dcbd,10);}this.lastY=run.y;this.bounce=Math.max(0,this.bounce-dt);this.kick=Math.max(0,this.kick-dt);
  const smooth=1-Math.exp(-dt*9);this.cameraX+=(run.x*.42-this.cameraX)*smooth;this.cameraLean+=((run.lane*2.55-run.x)*.018-this.cameraLean)*smooth;
  const impact=this.reducedMotion?0:this.kick*Math.sin(time*46)*.15,land=this.reducedMotion?0:Math.sin(this.bounce/.11*Math.PI)*.07;
  this.camera.position.set(this.cameraX+impact,4.8-land,8.2);this.camera.lookAt(this.cameraX*.7,.8,-7);if(!this.reducedMotion)this.camera.rotateZ(-this.cameraLean);
  this.effects(paused?0:dt,run,paused);this.renderer.render(this.scene,this.camera);
 }
 dispose(){this.clearLevel();this.resources.dispose();this.characterArt.dispose();this.textureShadow.dispose();this.sun.shadow.map?.dispose();this.renderer.dispose();this.thumbnails.clear();}
}
