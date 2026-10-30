// A server-issued, one-shot departure. Cached peer updates must not restart it.
export function createDepartureClock(now=()=>Date.now()){
 let stamp=null,ends=0,duration=0;
 return {
  set(value){
   if(!value){stamp=null;ends=duration=0;return;}
   const {start,end,serverNow}=value;
   if(![start,end,serverNow].every(Number.isFinite)||end<=start)return;
   if(stamp!==null&&stamp>=serverNow)return;
   stamp=serverNow;duration=end-start;ends=now()+Math.max(0,end-serverNow);
  },
  get active(){return duration>0;},
  opacity(){return duration?Math.max(0,Math.min(1,(ends-now())/duration)):1;},
  remaining(){return duration?Math.max(0,ends-now()):null;}
 };
}

// Models share materials: clone only the affected meshes, never the pool.
export function createModelFade(){
 const entries=new Map();
 function restore(mesh,entry){
  if(mesh.material===entry.faded)mesh.material=entry.original;
  mesh.castShadow=entry.castShadow;
  for(const material of entry.materials)material.dispose();
 }
 return {
  apply(roots,opacity){
   if(opacity>=1){this.clear();return;}
   const seen=new Set();
   for(const root of roots)root?.traverse(mesh=>{
    if(!mesh.material)return;seen.add(mesh);
    let entry=entries.get(mesh);
    if(entry&&mesh.material!==entry.faded){restore(mesh,entry);entries.delete(mesh);entry=null;}
    if(!entry){
     const original=mesh.material,materials=(Array.isArray(original)?original:[original]).map(m=>{
      const copy=m.clone();copy.onBeforeCompile=m.onBeforeCompile;copy.customProgramCacheKey=m.customProgramCacheKey;return copy;
     });
     const faded=Array.isArray(original)?materials:materials[0];
     entry={original,materials,faded,opacity:materials.map(m=>m.opacity),castShadow:mesh.castShadow};
     mesh.material=faded;entries.set(mesh,entry);
     for(const m of materials){m.transparent=true;m.depthWrite=false;m.needsUpdate=true;}
    }
    entry.materials.forEach((m,i)=>{m.opacity=entry.opacity[i]*opacity;});mesh.castShadow=false;
   });
   for(const [mesh,entry] of entries)if(!seen.has(mesh)){restore(mesh,entry);entries.delete(mesh);}
  },
  clear(){for(const [mesh,entry] of entries)restore(mesh,entry);entries.clear();}
 };
}
