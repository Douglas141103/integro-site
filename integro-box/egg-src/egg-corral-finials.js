import {addOrnaments} from './egg-base-ornaments.js';

const halfTurn = Math.PI / 2;
const gold = 0xf6c950;
const ivory = 0xffefcc;

function candy(p) {
 p('cushion',0xf59fba,0,.1,0,4.75,1.35,2.5);
 for (let i=-3; i<=3; i++)
  p('cushion',ivory,i*.58,-.12,.85,.77,.39,.65);
 p('cushion',0xffc9cf,0,.68,0,2.25,.8,1.37);
 p('cushion',ivory,0,1.06,0,1.35,.59,1);
 p('cushion',0xde506e,0,1.45,0,.59,.53,.59);
}

function observatory(p) {
 p('cushion',0x8370bb,0,.08,0,3.35,2.1,2.12);
 p('ring',gold,0,.48,0,3.45,1.52,1.15,.35,.13,.4);
 p('cushion',0x61e5e4,-1.43,.1,.38,.42,.42,.42);
 p('drum',gold,0,1.2,0,.09,.59,.09);
 p('gem',gold,0,1.58,0,.39,.52,.39);
}

function bamboo(p) {
 for (const [y,size] of [[.06,4.2],[.55,2.9]]) {
  p('peak',0x36734d,0,y,0,size,1.05,size*.58,0,Math.PI/4);
  for (const side of [-1,1])
   p('cushion',0x62a052,side*size*.33,y+.04,0,size*.49,.24,.64,0,0,side*.24);
 }
 p('gem',gold,0,1.25,0,.33,.59,.33);
 for (const side of [-1,1]) {
  p('drum',0x785b38,side*1.63,-.29,.56,.05,.45,.05);
  p('cushion',0xffcf79,side*1.63,-.62,.56,.39,.54,.39);
 }
}

function castle(p) {
 for (const side of [-1,1]) {
  const x=side*2.51;
  p('drum',0xb2a5d0,x,-.02,0,.82,1.26,.82);
  p('cone',0x8668b7,x,.9,0,1.06,.94,1.06);
  p('drum',gold,x,1.55,0,.055,.58,.055);
  p('peak',0xc75e92,x+.19,1.65,0,.49,.25,.09,0,0,-halfTurn);
  p('block',0x64597f,x,.16,.413,.18,.38,.035);
 }
 for (let i=-2;i<=2;i++) p('block',ivory,i*.48,.44,.48,.27,.32,.27);
}

function tropical(p) {
 p('cone',0xdca550,0,.18,0,3.75,1.33,2.1);
 for (const side of [-1,1]) {
  const x=side*2.4;
  p('drum',0xa37749,x,.19,.03,.2,1.35,.2,0,0,-side*.13);
  for (let n=0;n<6;n++) {
   const a=n*Math.PI/3;
   p('cushion',n%2?0x429a61:0x67ab65,x+Math.cos(a)*.42,.9,.03+Math.sin(a)*.42,1.19,.19,.39,0,-a);
  }
  p('cushion',0x7b573c,x,.73,.19,.27,.27,.27);
  for (let n=0;n<5;n++){
   const a=n*2*Math.PI/5;
   p('cushion',0xf38058,x+Math.cos(a)*.18,-.14+Math.sin(a)*.18,.38,.33,.31,.15);
  }
  p('cushion',gold,x,-.14,.47,.18,.18,.1);
 }
}

function neon(p) {
 for (const z of [-.46,.46]){
  p('ring',0x444a73,0,.12,z,4.86,2.57,.8);
  p('ring',0x62eddf,0,.12,z+.05,4.47,2.16,.6);
 }
 for (const [x,y,h] of [[-.42,1.17,.78],[0,1.52,1.21],[.4,1.19,.82]])
  p('gem',x===0?0xc18afa:0x9d71dc,x,y,0,.44,h,.44,0,0,-x*.48);
}

const crowns={candy,space:observatory,bamboo,castle,tropical,neon};

export function addThemeCrown(floor,id,y) {
 if (!crowns[id]) return null;
 const crown=addOrnaments(floor,'CorralRoof-'+id,crowns[id]);
 crown.position.set(0,y+3.29,2.5);
 return crown;
}
