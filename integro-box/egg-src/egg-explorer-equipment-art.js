import * as THREE from 'three';
import {MUTATIONS,RARITIES} from './egg-rules.js';

const equipmentState = new WeakMap();
const eggTints = new WeakMap();
const maskDirectory = '/integro-box/assets/egg-explorer-v1/';
const shellMasks = ['explorer-egg-mask.webp','explorer-egg-mask-no-pack.webp']
 .map(file=>({file,texture:null,loading:false,retryAfter:0}));
let maskUsers=0;

export function explorerArtVariant(actor,flying=false) {
 const worn=actor.artworkEquipped||{};
 const noCap=Boolean(worn.head&&worn.head!=='headphones'), noPack=Boolean(flying||worn.back);
 if(noCap) return noPack?'bare':'no-cap';
 return noPack?'no-pack':'full';
}

function restoreJet(state){
 if(!state.jet)return;
 const {root,parent,position,quaternion,scale}=state.jet;
 parent.add(root);root.position.copy(position);root.quaternion.copy(quaternion);root.scale.copy(scale);
 state.jet=null;
}

export function setExplorerArtEquipmentVisible(actor,active) {
 // RunnerCharacter.update() drives root visibility during the physics update.
 actor.model.root.visible=!active;
 if(active)return;
 const state=equipmentState.get(actor);
 if(!state)return;
 restoreJet(state);
 state.root.removeFromParent();state.root.clear();
 equipmentState.delete(actor);
}

function nativeOffset(id,slot){
 if(slot==='head')return [0,id==='halo'?.62:id==='headphones'?.25:.48,.015];
 return slot==='face'?[0,.12,-.33]:[0,-.03,.34];
}
function makeWearSlot(actor,source){
 const slot=source.userData.slot;
 const bone=slot==='head'?'cap':slot==='face'?'head':'back';
 // Each worn mesh was merged rigidly in the skeleton's bind space. Return
 // that geometry to the accessory designer's origin; no vertex is copied.
 const slotGroup=new THREE.Group();
 const id=source.name;
 slotGroup.name='IllustratedEquipment-'+id;
 const [x,y,z]=nativeOffset(id,slot);
 const inverse=new THREE.Matrix4().makeTranslation(-x,-y,-z)
  .multiply(actor.model.skeleton.boneInverses[actor.model.index[bone]]);
 for(const part of actor.wear.children.filter(m=>m.userData.slot===slot)){
  const material=part.userData.contour?actor.art.outlineMaterial():actor.art.materials.get('egg-actor-colors')||part.material;
  const view=new THREE.Mesh(part.geometry,material);
  view.name=part.userData.contour?id+'-outline':id;
  view.matrixAutoUpdate=false;view.matrix.copy(inverse);view.renderOrder=part.renderOrder;
  slotGroup.add(view);
 }
 return {group:slotGroup,source};
}

// Positions are expressed in full atlas-cell pixels from the upper left;
// a cell is 280x320 and the feet sit at (140,307). The anchor is the front
// plane of the face, the hat band, or the external mounting point of the back.
const contacts = [
 [[140,32,142,67,140,140,0.78],[134,42,150,71,105,149,0.77],[137,47,167,73,120,152,0.76],[138,52,171,83,121,154,0.9],[139,54,139,82,139,153,0.81]],
 [[146,39,149,80,146,147,0.91],[154,50,174,84,135,158,0.92],[146,55,184,89,94,153,1.0],[149,61,186,98,132,162,0.97],[143,60,143,92,146,159,0.91]],
 [[137,43,141,87,137,151,1.01],[142,55,165,94,98,162,1.05],[146,57,185,92,87,144,1.03],[149,61,188,99,132,164,1.0],[146,61,146,94,150,159,0.96]],
 [[144,38,146,78,144,146,0.94],[147,46,167,79,99,141,1.0],[144,53,183,84,109,157,0.96],[146,61,180,99,123,157,1.03],[138,61,138,94,140,155,0.96]],
 [[139,40,141,82,139,148,0.98],[150,50,169,86,106,147,1.08],[144,54,183,86,111,156,0.97],[148,62,182,101,124,160,1.06],[139,63,139,98,141,157,0.99]]
];
function place(group,slot,id,frame) {
 const {column,row,mirror,width,height}=frame;
 const angle=column*Math.PI/4, side=mirror?-1:1;
 const anchor=contacts[row][column];
 const axis=slot==='head'?0:slot==='face'?2:4;
 const x=(anchor[axis]-140)*width/280*side, y=(307-anchor[axis+1])*height/320;
 // At strict profile the flat center of a visor is edge-on. Rotate it
 // slightly toward the viewer, like the near lens in the drawn profile.
 const profileLens=slot==='face'&&column===2;
 const yaw=Math.PI+side*(angle-(profileLens?.18:0));
 const depth=slot==='face'?.26:slot==='back'?-.26:.012;
 // Depth testing against the atlas' alpha-tested silhouette naturally hides
 // a rear-mounted pack when seen from the front, but exposes its overhang.
 group.position.set(x,y+((id==='halo')?.12:(id==='headphones')?-.13:0),depth*Math.cos(angle)+(profileLens?.018:0));
 group.rotation.set(0,yaw,0);
 group.scale.setScalar(slot==='back'?1:anchor[6]);
}

export function alignExplorerArtEquipment(actor,billboard,frame) {
 // The procedural driver resets the visibility bit each animation step.
 actor.model.root.visible=false;
 let state=equipmentState.get(actor);
 if(!state){
  state={root:new THREE.Group(),slots:new Map(),jet:null,jetSlot:new THREE.Group(),wear:null};
  state.root.name='ExplorerIllustratedEquipment';state.root.add(state.jetSlot);billboard.add(state.root);
  equipmentState.set(actor,state);
 }
 // equip() replaces the immutable selection. Lookups and scene mutations
 // therefore only happen on a real outfit change, independent of framerate.
 if(state.wear!==actor.artworkEquipped){
  for(const {group} of state.slots.values())group.removeFromParent();
  state.slots.clear();state.wear=actor.artworkEquipped;
  for(const source of actor.wear.children){
   if(source.userData.contour)continue;
   const slot=source.userData.slot,view=makeWearSlot(actor,source);
   state.root.add(view.group);state.slots.set(slot,view);
  }
 }
 for(const [slot,{group,source}] of state.slots){
  group.visible=!(slot==='back'&&frame.flying);
  if(group.visible)place(group,slot,source.name,frame);
 }
 if(!frame.flying||!actor.jetVisual){restoreJet(state);return;}
 const jet=actor.jetVisual.root;
 if(!state.jet){
  state.jet={root:jet,parent:jet.parent,position:jet.position.clone(),quaternion:jet.quaternion.clone(),scale:jet.scale.clone()};
  state.jetSlot.add(jet);jet.position.set(0,0,0);jet.quaternion.identity();
 }
 place(state.jetSlot,'back','jetpack',frame);
}

function requestEggMask(entry) {
 if(entry.texture||entry.loading||typeof document==='undefined'||Date.now()<entry.retryAfter)return;
 entry.loading=true;
 function failed(){entry.loading=false;entry.retryAfter=Date.now()+15000;}
 try{
  new THREE.TextureLoader().load(maskDirectory+entry.file,texture=>{
   entry.loading=false;
   if(!maskUsers){texture.dispose();return;}
   texture.colorSpace=THREE.NoColorSpace;texture.wrapS=texture.wrapT=THREE.ClampToEdgeWrapping;
   texture.minFilter=THREE.LinearMipmapLinearFilter;texture.magFilter=THREE.LinearFilter;
   entry.texture=texture;
  },undefined,failed);
 }catch{failed();}
}

function makeEggTint(actor) {
 // Shared uniforms let a room-departure material clone use the very same
 // selector and mask as the original mesh (it copies the compile hook).
 const uniforms={eggMask:{value:null},eggTone:{value:new THREE.Color()},eggMode:{value:0}};
 function attach(material){
  material.customProgramCacheKey=()=> 'egg-illustrated-shell-v1';
  material.onBeforeCompile=shader=>{
   Object.assign(shader.uniforms,uniforms);
   shader.fragmentShader='uniform sampler2D eggMask;\nuniform vec3 eggTone;\nuniform float eggMode;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>', `#include <map_fragment>
    #ifdef USE_MAP
    if(eggMode>.5) {
     vec4 shellMask=texture2D(eggMask,vMapUv);
     float coverage=shellMask.r*shellMask.a;
     vec3 shellTone=eggTone;
     if(eggMode>1.5) {
      vec2 cell=fract(vMapUv*5.0);
      float phase=cell.x*.78+cell.y*.67;
      shellTone=.54+.43*cos(6.2831853*(phase+vec3(.0,.33,.67)));
     }
     vec3 original=diffuseColor.rgb;
     float light=dot(original,vec3(.2126,.7152,.0722));
     vec3 dyed=shellTone*(.14+.93*light)+vec3(.15)*pow(light,5.);
     diffuseColor.rgb=mix(original,dyed,coverage*.83);
    }
    #endif`);
  };
  material.needsUpdate=true;
 }
 attach(actor.artwork.material);
 if(actor.artwork.mesh.material!==actor.artwork.material)attach(actor.artwork.mesh.material);
 maskUsers++;
 const tint={uniforms,rarity:'',mutation:''};eggTints.set(actor,tint);return tint;
}

export function setExplorerEggTint(actor,egg) {
 const rare=Object.hasOwn(RARITIES,egg?.rarity)?egg.rarity:'common';
 const mutation=Object.hasOwn(MUTATIONS,egg?.mutation)?egg.mutation:'normal';
 const special=!!egg&&(mutation!=='normal'||rare!=='common');
 let tint=eggTints.get(actor);
 if(!special){if(tint)tint.uniforms.eggMode.value=0;return;}
 if(!actor.artwork)return;
 if(!tint)tint=makeEggTint(actor);
 // A previous atlas may still be onscreen while a new outfit downloads.
 // The shell must be sampled at the coordinates of that displayed image.
 const displayed=actor.artwork.displayedAtlas?.url;
 const withoutPack=displayed?displayed.endsWith('/explorer-no-pack.webp')||displayed.endsWith('/explorer-no-cap-pack.webp'):
  Boolean(actor.artwork.frame.flying||actor.artworkEquipped?.back);
 const mask=shellMasks[Number(withoutPack)];
 requestEggMask(mask);
 const {uniforms}=tint;uniforms.eggMask.value=mask.texture;
 uniforms.eggMode.value=mask.texture?(mutation==='rainbow'?2:1):0;
 if(tint.rarity===rare&&tint.mutation===mutation)return;
 tint.rarity=rare;tint.mutation=mutation;
 uniforms.eggTone.value.setHex(MUTATIONS[mutation].color??RARITIES[rare].color);
}

export function disposeExplorerEggTint(actor){
 if(!eggTints.delete(actor))return;
 if(--maskUsers===0)for(const entry of shellMasks){entry.texture?.dispose();entry.texture=null;entry.retryAfter=0;}
}
