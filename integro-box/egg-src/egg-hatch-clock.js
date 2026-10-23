import * as THREE from 'three';
import {formatHatchTime} from './egg-incubation.js';
// One texture per egg; redraw only when its displayed second or progress changes.
export function createHatchClock(parent){
 const canvas=document.createElement('canvas');canvas.width=384;canvas.height=168;
 const context=canvas.getContext('2d'),texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
 const material=new THREE.SpriteMaterial({map:texture,depthWrite:false,depthTest:false});
 const sprite=new THREE.Sprite(material);sprite.name='EggHatchClock';sprite.scale.set(1.34,.586,1);sprite.renderOrder=8;parent.add(sprite);let signature='';
 function update({seconds,progress,rarity,color,boosted,paused}){
  const time=formatHatchTime(seconds),percent=Math.round(Math.max(0,Math.min(1,progress))*100),caption=paused?'PAUSADO':boosted?'INCUBAÇÃO 2×':rarity.toUpperCase(),key=[time,percent,caption,color].join(':');
  sprite.userData.time=time;sprite.userData.seconds=seconds;sprite.userData.boosted=boosted;sprite.userData.paused=paused;
  if(key===signature)return;signature=key;
  const c=context;c.clearRect(0,0,384,168);c.fillStyle='#102f46';c.beginPath();c.roundRect(4,4,376,150,30);c.fill();c.strokeStyle='#'+color.toString(16).padStart(6,'0');c.lineWidth=6;c.stroke();
  c.fillStyle=boosted?'#b8f77d':'#d8eff5';c.font='bold 23px Arial';c.textAlign='center';c.textBaseline='middle';c.fillText(caption,192,31,330);
  c.strokeStyle='#f4fbff';c.lineWidth=6;c.beginPath();c.arc(69,83,24,0,Math.PI*2);c.stroke();c.beginPath();c.moveTo(69,66);c.lineTo(69,83);c.lineTo(83,90);c.stroke();
  c.fillStyle='#ffffff';c.font='bold 59px Arial';c.textAlign='left';c.fillText(time,112,86,246);
  c.fillStyle='#36536b';c.beginPath();c.roundRect(28,129,328,10,5);c.fill();if(percent){c.fillStyle=boosted?'#b8f77d':'#8bdce5';c.beginPath();c.roundRect(28,129,328*percent/100,10,5);c.fill();}
  texture.needsUpdate=true;
 }
 function dispose(){parent.remove(sprite);texture.dispose();material.dispose();}
 return{sprite,update,dispose};
}
