import {inHeaven,heavenPosition} from './egg-heaven.js';
import * as THREE from 'three';
import {ArtResources} from '../rush-src/art.js';
import {bakedToyModel} from './egg-gear-art.js';

const teal=0x1eb5a7, gold=0xffbd39, orange=0xec9143, purple=0x8040bc,
  cream=0xffe7b4, pink=0xf375a2, brown=0x774231, red=0xf25b65;

function trapParts(art,kind){
  const g=new THREE.Group();
  const part=(type,color,x,y,z,w,h,d)=>art.mesh(g,type,color,x,y,z,w,h,d,'trim');
  const ball=(c,x,y,z,w,h,d)=>part('ball',c,x,y,z,w,h,d);
  const disk=(c,x,y,z,r,h)=>part('cyl',c,x,y,z,r,h,r);
  if(kind==='bear'){
    // Tilt the bear face over a dark mouth, opening toward the player (+Z).
    disk(teal,0,.12,0,.56,.21);
    disk(gold,0,.23,0,.545,.075);
    disk(brown,0,.27,0,.47,.065);
    const jaw=new THREE.Group();jaw.position.set(0,.55,-.20);jaw.rotation.x=-.77;g.add(jaw);
    function headShape(type,c,x,y,z,w,h,d){
      const mesh=art.mesh(jaw,type,c,x,y,z,w,h,d,'trim');return mesh;
    }
    headShape('ball',teal,0,.05,0,.54,.31,.47);
    headShape('cyl',gold,0,-.105,0,.529,.08,.455);
    headShape('cyl',brown,0,-.153,0,.47,.045,.406);
    for(const sign of [-1,1]){
      headShape('ball',gold,sign*.35,.22,-.25,.145,.14,.09);
      headShape('ball',pink,sign*.35,.23,-.176,.09,.085,.045);
      headShape('ball',brown,sign*.18,.257,.13,.047,.035,.035);
      ball(gold,sign*.53,.29,-.24,.075,.075,.08);
    }
    headShape('ball',cream,0,.225,.255,.139,.082,.09);
    headShape('ball',brown,0,.272,.266,.079,.048,.062);
    const teeth=[pink,gold,0x82d6ce,0xaa87db];
    for(let i=0;i<4;i++){
      const x=(i-1.5)*.19,z=Math.sqrt(.43*.43-x*x);
      part('round',teeth[3-i],x,.335,z,.106,.095,.10);
      headShape('round',teeth[i],x,-.225,z*.83,.108,.14,.09);
    }
    ball(brown,0,.171,.543,.067,.048,.02);
    for(const x of [-.074,0,.074])ball(brown,x,.222,.536,.022,.029,.018);
  }else if(kind==='mine'){
    disk(purple,0,.13,0,.56,.19);
    ball(purple,0,.20,0,.548,.185,.548);
    disk(0x64329a,0,.33,0,.34,.063);
    disk(red,0,.38,0,.286,.077);ball(red,0,.416,0,.284,.056,.284);
    for(let i=0;i<6;i++){
      const angle=i*Math.PI/3;
      const tab=part('round',orange,Math.sin(angle)*.506,.20,Math.cos(angle)*.506,.12,.10,.057);
      tab.rotation.y=angle;
    }
    const cacheKey='egg-trap:star';
    let geometry=art.geometries.get(cacheKey);
    if(!geometry){
      const points=Array.from({length:10},(_,i)=>{
        const a=Math.PI/2+i*Math.PI/5,r=i%2?.075:.14;
        return new THREE.Vector2(Math.cos(a)*r,Math.sin(a)*r);
      });
      geometry=art.own(cacheKey,new THREE.ExtrudeGeometry(new THREE.Shape(points),{depth:.03,bevelSize:.009,bevelThickness:.008,bevelSegments:2}),'trim');
    }
    const star=new THREE.Mesh(geometry,art.material(gold,'trim'));star.position.set(0,.227,.528);g.add(star);
  }else return null;
  return g;
}

export function createTrapPreview(art,kind){
  return bakedToyModel(art,'trap:'+kind,()=>trapParts(art,kind));
}

export function createEggTrapVisuals(parent,sharedArt) {
  const root = new THREE.Group();
  root.name = 'Egg trap visuals';
  root.userData.eggTrapVisuals = true;
  parent.add(root);
  const entries = new Map(), materials = new Set();
  let art=sharedArt, disposed = false, elapsed = 0;
  const ringGeometry=new THREE.RingGeometry(.86,1.02,40);
  function ringMaterial(color,opacity){
    const value=new THREE.MeshBasicMaterial({color,transparent:true,opacity,side:THREE.DoubleSide,
      depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1});
    materials.add(value);return value;
  }
  const palette={
    ownRing:ringMaterial(0x8af1c7,.72), otherRing:ringMaterial(0xffa18b,.72),
    ownWaiting:ringMaterial(0x8af1c7,.25), otherWaiting:ringMaterial(0xffa18b,.25)
  };

  function create(row) {
    art ||= new ArtResources();
    const group=createTrapPreview(art,row.kind);
    group.name='Egg trap '+row.kind;
    group.userData.kind=row.kind;group.userData.id=row.id;
    const ring=new THREE.Mesh(ringGeometry,palette.ownWaiting);
    ring.rotation.x=-Math.PI/2;ring.position.y=.022;ring.renderOrder=2;
    group.add(ring);root.add(group);
    return {id:row.id,kind:row.kind,group,ring,owned:null,armed:null};
  }

  function sync(traps = []) {
    if (disposed) return;
    const seen = new Set();
    for (const row of Array.isArray(traps) ? traps : []) {
      if (!row || !['bear', 'mine'].includes(row.kind) || !Number.isFinite(row.x) || !Number.isFinite(row.z)
        || !['string', 'number'].includes(typeof row.id) || row.id === ''
        || (typeof row.id === 'number' && !Number.isFinite(row.id))) continue;
      if (seen.has(row.id)) continue;
      seen.add(row.id);
      let entry = entries.get(row.id);
      if (entry && entry.kind !== row.kind) {
        root.remove(entry.group);
        entries.delete(row.id);
        entry = null;
      }
      if (!entry) {
        entry = create(row);
        entries.set(row.id, entry);
      }
      const pos=heavenPosition({...row,y:0});entry.group.position.set(pos.x,pos.y,pos.z);entry.group.rotation.z=inHeaven(row)?Math.PI:0;
      const owned = row.mine === true, armed = row.armed === true;
      if (entry.owned !== owned || entry.armed !== armed) {
        entry.ring.material = owned
          ? (armed ? palette.ownRing : palette.ownWaiting)
          : (armed ? palette.otherRing : palette.otherWaiting);
        entry.group.userData.mine = owned;
        entry.group.userData.armed = armed;
        entry.owned = owned;
        entry.armed = armed;
        entry.ring.scale.setScalar(1);
      }
    }
    for (const [id, entry] of entries) if (!seen.has(id)) {
      root.remove(entry.group);
      entries.delete(id);
    }
  }

  function tick(dt = 0, time) {
    if (disposed) return;
    elapsed = Number.isFinite(time) ? time : elapsed + Math.min(.1, Math.max(0, Number.isFinite(dt) ? dt : 0));
    const pulse = Math.sin(elapsed * 2.6);
    for (const entry of entries.values()) {
      entry.ring.scale.setScalar(entry.armed ? 1 + pulse * .025 : 1);
    }
  }

  function clear() {
    for (const entry of entries.values()) root.remove(entry.group);
    entries.clear();
  }

  function dispose() {
    if (disposed) return;
    clear();
    root.removeFromParent();
    ringGeometry.dispose();
    if(!sharedArt)art?.dispose();
    for (const value of materials) value.dispose();
    materials.clear();
    disposed = true;
  }
  return { sync, tick, clear, dispose };
}
