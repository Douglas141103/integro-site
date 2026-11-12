export const GROWTH=[{r:5,name:'cones'},{r:7,name:'lixeiras'},{r:13,name:'árvores'},{r:17,name:'carros'},{r:25,name:'casas'},{r:42,name:'prédios'},{r:58,name:'torres'}];
export function growthGuide(world,me){
 if(!me)return null;const size=me.r*.82,level=GROWTH.findLastIndex(x=>x.r<=size),next=GROWTH[level+1],low=Math.max(18,(GROWTH[level]?.r||0)/.82),high=next?.r/.82||me.r;
 let target=null,nearest=Infinity;for(const o of world.objects){if(o.gone||o.r>size)continue;const d=Math.hypot(o.x-me.x,o.y-me.y);if(d<nearest){nearest=d;target=o;}}
 const danger=world.players.find(p=>p!==me&&p.respawn<=0&&p.r>=me.r*1.4&&Math.hypot(p.x-me.x,p.y-me.y)<p.r+140);
 return{target,danger,available:GROWTH[Math.max(0,level)].name,next:next?.name||null,progress:next?Math.max(0,Math.min(1,(me.r-low)/(high-low))):1};
}
