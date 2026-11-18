import {addOrnaments} from './egg-base-ornaments.js';

export function addTreadmillTrim(parent,type) {
 const galactic=type==='galaxy',light=galactic?0xdcbdff:0xffdb7c;
 const shell=galactic?0xa377e6:0xeebc4e,dark=galactic?0x514282:0xb78b36;
 return addOrnaments(parent,'TrainingPass-'+type,piece=>{
  for(const side of [-1,1]){
   piece('cushion',shell,side*.96,.34,.01,.31,.45,3.24);
   piece('cushion',light,side*.96,.49,-.1,.13,.11,2.75);
   piece('drum',dark,side*.94,.3,1.23,.42,.21,.42,0,0,Math.PI/2);
   piece('cushion',shell,side*.77,1.58,-.48,.17,.15,1.3,-.31);
  }
  piece('cushion',shell,0,1.81,-1.18,1.94,.6,.49);
  piece('block',dark,0,1.86,-.93,1.13,.33,.07);
  for(let i=-1;i<=1;i++)piece('cushion',light,i*.26,1.86,-.886,.15,.15,.05);
  if(galactic){
   for(let i=0;i<9;i++)
    piece('gem',i%3?0xa183ea:0xf1d8ff,Math.sin(i*2.2)*.67,.389,i*.28-1.05,.065,.013,.12);
  }
 });
}

export function addFusionVesselTrim(machine) {
 return addOrnaments(machine,'FusionVesselAssembly',piece=>{
  const aqua=0x69ddd0;
  piece('cushion',0x596e94,0,.41,.02,2.87,.57,1.76);
  for(const side of [-1,1]){
   const x=side*.85;
   piece('drum',0x418e9b,x,.93,0,.87,.25,.87);
   piece('ring',aqua,x,1.089,0,.85,.85,.69,Math.PI/2);
   piece('cushion',0x92d7ec,x,1.46,0,.68,.89,.68);
   piece('cushion',0xd8f3fd,x-.12,1.64,.23,.12,.22,.08,0,0,-.24);
   piece('drum',0x476181,x,.61,.19,1,.15,.82);
  }
  piece('block',0x324f68,0,.94,.81,.71,.4,.12);
  piece('block',aqua,0,1.005,.89,.51,.19,.055);
  for (const side of [-1,1])piece('gem',0xffdb8e,side*.16,.873,.9,.078,.07,.09);
 });
}

export function addFusionCredits(machine) {
 return addOrnaments(machine,'FusionRechargeTickets',piece=>{
  for(let i=0;i<3;i++){
   const offset=i*.07;
   piece('block',0xf0bf58,1.04+offset,.43+offset,.87,.52,.32,.06,0,0,-.12);
   piece('block',0x8a61b4,1.04+offset,.43+offset,.909,.44,.23,.028,0,0,-.12);
  }
  piece('gem',0x9cebd5,1.18,.57,.93,.17,.17,.05);
 });
}
