export const FLAME={world:21,warning:3,hold:4,halfGap:1.35};
export const FLAME_WORLD={name:'Pedras Flamejantes',short:'Chamas',creature:'Dragão Quente',value:45000,color:0xff6934,ground:0x352c32,path:0x62504a,sky:0x853e35,kind:'dragon'};
export const flameGaps=world=>[9,34].map(offset=>-(world*48+offset));
export function flameGapState(time,castAt,world,slot,race=false){
 const age=time-castAt-(21-world)*.16-slot*.4;
 if(race||!Number.isFinite(age)||age<0||age>=8)return{warning:false,open:false,amount:0};
 const amount=age<3?0:age<3.5?(age-3)*2:age<7?1:8-age;
 return{warning:age<3,open:amount>.3,amount};
}
