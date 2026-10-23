export const ECONOMY_VERSION=2;
// Shared definitions are adjusted once, before any store or game instance uses them.
const applied=new WeakSet();
export function applyCoinPrices({UPGRADES,SUPPLIES,ACCESSORIES,DECORATIONS,VEHICLES,ABILITIES},premium){
 const scale=(items,factor,skip=()=>false)=>{for(const [id,d] of Object.entries(items)){if(applied.has(d)||skip(id))continue;applied.add(d);if(d.price>0)d.price=Math.ceil(d.price*factor(d.price,id));}};
 for(const d of Object.values(UPGRADES)){if(!applied.has(d)){d.base*=2;applied.add(d);}}
 scale(SUPPLIES,()=>2);
 scale(ACCESSORIES,p=>p<1000?2:p<10000?4:p<100000?10:20,id=>!!premium[id]);
 scale(DECORATIONS,()=>5);
 scale(ABILITIES,()=>4);
 const luxury={carAurora:10000000,carRoyal:30000000,jetAurora:80000000,jetImperial:180000000};
 scale(VEHICLES,(p,id)=>luxury[id]?luxury[id]/p:p<10000?3:p<100000?8:15);
}
