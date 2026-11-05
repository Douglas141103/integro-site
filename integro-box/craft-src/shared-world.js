import {SHARED_SIZE} from './craft-config.js';
import {CraftWorld,SIZE,HEIGHT,index} from './craft-rules.js';
export function makeSharedWorld(legacy){
 const world=new CraftWorld();// Keep the original room terrain and extend with basic blocks only.
 for(let x=0;x<SIZE;x++)for(let z=0;z<SIZE;z++)for(let y=0;y<HEIGHT;y++){
  const n=index(x,y,z),id=world.cells[n];
  world.cells[n]=x>=SHARED_SIZE||z>=SHARED_SIZE?0:id<=11?id:id>=39&&id<=42?3:0;
 }
 for(let x=0;x<48;x++)for(let z=0;z<48;z++)for(let y=0;y<HEIGHT;y++)world.cells[index(x,y,z)]=legacy.get(x,y,z);
 world.base=world.cells.slice();world.edits.clear();world.features.clear();world.props.clear();world.fluidSources.clear();world.flowCells.clear();world.animals=[];world.vehicles=[];world.villagers=[];world.creative=true;world.riding=null;world.seated=false;world.selected=1;world.player={...legacy.player};world.lastSafe={...legacy.lastSafe};
 const update=world.update.bind(world);world.update=(dt,input)=>{update(dt,input);world.player.x=Math.max(.35,Math.min(SHARED_SIZE-.35,world.player.x));world.player.z=Math.max(.35,Math.min(SHARED_SIZE-.35,world.player.z));};
 return world;
}
