import * as T from 'three';
import {createAnimeActor,makeToonRamp} from './anime-actor.mjs';
import {POSE_FPS} from './anime-motion.mjs';

// One small offscreen WebGL context, rendered only when a held anime pose changes.
// Notes, music, input and the main Canvas keep their own uninterrupted clocks.
export function createAnimePainter({onUnavailable=()=>{},document=globalThis.document,Renderer=T.WebGLRenderer}={}) {
  if(!globalThis.WebGL2RenderingContext&&Renderer===T.WebGLRenderer)return null;
  const canvas=document.createElement('canvas');let renderer;
  try{renderer=new Renderer({canvas,alpha:true,antialias:true,powerPreference:'low-power',preserveDrawingBuffer:false});}catch{return null;}
  renderer.setPixelRatio(1);renderer.setSize(384,448,false);renderer.setClearColor(0x000000,0);
  renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.NoToneMapping;
  const scene=new T.Scene(),camera=new T.OrthographicCamera(-1.36,1.36,2.99,-.18,.1,20);
  camera.position.set(0,0,8);camera.lookAt(0,0,0);
  const light=new T.DirectionalLight(0xfff3de,2.5);light.position.set(-3,5,6);scene.add(light);
  scene.add(new T.AmbientLight(0xb5bbec,.55));
  const ramp=makeToonRamp(),actors=new Map();let disposed=false,lost=false,tempo=140,reduced=false;
  const unavailable=()=>{if(!lost&&!disposed){lost=true;onUnavailable();}};
  const onLost=e=>{e.preventDefault();unavailable();};canvas.addEventListener('webglcontextlost',onLost);
  renderer.debug.onShaderError=unavailable;
  function entry(person) {
    const key=person.artist+'|'+person.look;
    let value=actors.get(key);
    if(value){actors.delete(key);actors.set(key,value);return value;}
    if(actors.size>=4){const first=actors.keys().next().value;actors.get(first).actor.dispose();actors.delete(first);}
    const actor=createAnimeActor(person,{ramp,document}),sprite=document.createElement('canvas');sprite.width=384;sprite.height=448;
    value={actor,sprite,context:sprite.getContext('2d'),poseKey:null};actors.set(key,value);return value;
  }
  function draw(ctx,x,y,size,person,beat=0,lane=-1,mirrored=false) {
    if(disposed||lost)return false;
    try{
      const seconds=beat*60/(person.bpm||tempo),value=entry(person),stamp=Math.floor(Math.max(0,seconds)*POSE_FPS);
      const key=[stamp,lane,reduced,mirrored,person.monochrome>.8].join(':');
      if(value.poseKey!==key){
        value.actor.setPalette(person);value.actor.pose(seconds,person.bpm||tempo,lane,reduced);
        value.actor.root.rotation.y=mirrored?-.12:.12;
        scene.add(value.actor.root);renderer.render(scene,camera);value.actor.root.removeFromParent();
        if(lost)return false;
        value.context.clearRect(0,0,384,448);value.context.drawImage(canvas,0,0);value.poseKey=key;
      }
      ctx.save();try{ctx.translate(x,y);if(mirrored)ctx.scale(-1,1);
        if(person.monochrome)ctx.filter='grayscale('+person.monochrome+')';
        ctx.drawImage(value.sprite,-size*.557,-size*.23,size*1.114,size*1.3);
      }finally{ctx.restore();}return true;
    }catch{unavailable();return false;}
  }
  return {draw,setOptions(options){tempo=options.bpm||140;reduced=!!options.reduced;},
    dispose(){if(disposed)return;disposed=true;canvas.removeEventListener('webglcontextlost',onLost);for(const value of actors.values())value.actor.dispose();actors.clear();ramp.dispose();renderer.dispose();renderer.forceContextLoss();}};
}
