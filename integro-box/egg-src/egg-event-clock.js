import * as T from 'three';
import {winterCountdown} from './egg-winter-rules.js';
// A fixed, double-sided clock between the two event totems at the corral entrance.
export function createEventClock(parent){
 const root=new T.Group();root.name='WinterEventClock';root.position.set(0,4.45,5.8);parent.add(root);
 const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=384;
 const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;
 const material=new T.MeshBasicMaterial({map:texture,transparent:true,side:T.DoubleSide,fog:false,toneMapped:false});
 const geometry=new T.PlaneGeometry(8,3);
 for(const side of [1,-1]){const face=new T.Mesh(geometry,material);face.position.z=side*.08;if(side<0)face.rotation.y=Math.PI;root.add(face);}
 const backing=new T.Mesh(new T.BoxGeometry(8.1,3.1,.13),new T.MeshStandardMaterial({color:0x276582,roughness:.7}));root.add(backing);
 let previous='';
 return {root,update(now){const time=winterCountdown(now);root.userData.time=time;if(previous===time)return;previous=time;
  const c=canvas.getContext('2d');c.clearRect(0,0,1024,384);c.fillStyle='#082c42';c.fillRect(0,0,1024,384);c.strokeStyle='#a4eaff';c.lineWidth=12;c.strokeRect(8,8,1008,368);
  c.textAlign='center';c.textBaseline='middle';c.fillStyle='#d6f7ff';c.font='bold 43px Arial';c.fillText('FIM DO EVENTO · INVERNO 2026',512,66);
  c.fillStyle='#ffffff';c.font='bold 142px monospace';c.fillText(time,512,197);
  c.fillStyle='#b7e7ec';c.font='bold 31px Arial';c.fillText('A PISTA DA FÊNIX GELADA CONTINUA',512,319);texture.needsUpdate=true;
 }};
}
