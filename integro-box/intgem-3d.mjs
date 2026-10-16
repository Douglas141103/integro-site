// Tiny shared toon accessory; ownership comes from the server-backed wallet.
export function createIntGem3D(T,parent){
 const root=new T.Group();root.name='IntGem';parent.add(root);
 const bodyMat=new T.MeshToonMaterial({color:0xffc96a});
 const accentMat=new T.MeshToonMaterial({color:0x63e7e5});
 const eyeMat=new T.MeshBasicMaterial({color:0x173b50});
 const ringMat=new T.MeshBasicMaterial({color:0x54ead2,transparent:true,opacity:.65,depthWrite:false});
 const companion=new T.Group();root.add(companion);
 const gem=new T.Mesh(new T.OctahedronGeometry(.29,0),bodyMat);gem.scale.y=1.2;companion.add(gem);
 const crown=new T.Mesh(new T.ConeGeometry(.21,.16,5),accentMat);crown.position.y=.33;companion.add(crown);
 for(const x of [-.085,.085]){const eye=new T.Mesh(new T.SphereGeometry(.032,6,4),eyeMat);eye.position.set(x,.03,.23);companion.add(eye);}
 const ring=new T.Mesh(new T.TorusGeometry(.7,.025,4,36),ringMat);ring.rotation.x=Math.PI/2;ring.position.y=.055;root.add(ring);
 const stars=new T.Group();root.add(stars);
 for(let i=0;i<4;i++){const star=new T.Mesh(new T.OctahedronGeometry(.065,0),accentMat);const a=i*Math.PI/2;star.position.set(Math.cos(a)*.7,.14,Math.sin(a)*.7);stars.add(star);}
 let signature='';root.visible=false;
 return {root,update(equipment={},time=0,reducedMotion=false){
  const {aura,companion:pet}=equipment||{},key=(aura?.id||'')+':'+(pet?.id||'');
  if(key!==signature){signature=key;root.visible=!!(aura||pet);companion.visible=!!pet;ring.visible=!!aura;stars.visible=!!aura;if(aura){ringMat.color.set(aura.color);accentMat.color.set(aura.secondary);}if(pet)bodyMat.color.set(pet.color);}
  const t=reducedMotion?0:time;companion.position.set(.86,1.25+Math.sin(t*2.4)*.075,.12);companion.rotation.y=Math.sin(t*.8)*.3;stars.rotation.y=t*.65;
 },dispose(){root.removeFromParent();const geometry=new Set(),materials=new Set();root.traverse(o=>{if(o.isMesh){geometry.add(o.geometry);materials.add(o.material);}});geometry.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());}};
}
