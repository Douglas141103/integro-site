import * as T from 'three';
export function createCageEffect(scene){
 const root=new T.Group(),points=[];
 for(const y of [-1,-.35,.35,1])for(let i=0;i<32;i++){const a=i/32*Math.PI*2,b=(i+1)/32*Math.PI*2;points.push(Math.cos(a),y,Math.sin(a),Math.cos(b),y,Math.sin(b));}
 for(let i=0;i<12;i++){const a=i/12*Math.PI*2;points.push(Math.cos(a),-1,Math.sin(a),Math.cos(a),1,Math.sin(a));}
 for(let i=0;i<16;i++){const a=i/16*Math.PI,b=(i+1)/16*Math.PI;points.push(Math.cos(a)*.45,1+Math.sin(a)*.45,0,Math.cos(b)*.45,1+Math.sin(b)*.45,0);}
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(points,3));const material=new T.LineBasicMaterial({color:0xffdc83,transparent:true});root.add(new T.LineSegments(geometry,material));root.name='FishingCage';scene.add(root);root.visible=false;
 const fishGeometry=new T.SphereGeometry(.17,8,5),fishMaterial=new T.MeshToonMaterial({color:0xffb95d});const fish=[];
 for(let i=0;i<10;i++){const m=new T.Mesh(fishGeometry,fishMaterial);m.scale.set(1.8,.8,.7);m.position.set(Math.cos(i*2.4)*.5,-.65+(i%4)*.4,Math.sin(i*2.4)*.5);root.add(m);fish.push(m);}
 return{set(run){root.visible=!!run;if(!run)return;root.position.set(run.position.x,run.position.y,run.position.z);root.scale.setScalar(2.5+run.capacity*.13);material.color.set(run.levels.length===run.capacity?0xb9ff80:0xffdc83);fish.forEach((f,i)=>f.visible=i<run.levels.length);},update(dt){for(const f of fish)f.rotation.y+=dt*.7;},dispose(){scene.remove(root);geometry.dispose();material.dispose();fishGeometry.dispose();fishMaterial.dispose();}};
}
