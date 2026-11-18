import {addOrnaments} from './egg-base-ornaments.js';

const wood=0xb7854e;
const honey=0xd9a962;
const linen=0xffe8b7;

function pottedPlant(p,x,z,height=0) {
 p('drum',0xbb7449,x,height+.18,z,.36,.36,.36);
 for (const [dx,dz,tilt] of [[-.12,0,.45],[.11,.04,-.4],[0,-.05,.15]])
  p('cushion',dx<0?0x619852:0x70a951,x+dx,height+.51,z+dz,.17,.53,.21,0,0,tilt);
}

function lounge(p) {
 p('cushion',0xdbb879,-.12,.066,0,2.09,.045,1.38);
 p('block',wood,-.29,.26,1.29,1.96,.4,.67);
 p('cushion',0xa75f39,-.29,.52,1.31,2,.54,.8);
 p('cushion',0xc7764b,-.29,.76,1.55,2.04,.73,.35);
 for (const side of [-1,1]){
  p('cushion',0xbe7449,-.29+side*.96,.62,1.29,.29,.54,.82);
  p('cushion',linen,-.29+side*.58,.7,1.38,.42,.43,.29,-.16,0,side*.16);
 }
 p('drum',honey,-.21,.46,.22,.86,.13,.86);
 p('drum',wood,-.21,.26,.22,.31,.39,.31);
 pottedPlant(p,1.26,1.37);
}

function bedroom(p) {
 p('block',wood,-.79,.27,.21,1.36,.41,1.96);
 p('block',honey,-.79,.62,1.16,1.45,.86,.13);
 p('cushion',linen,-.79,.48,.21,1.39,.25,1.98);
 p('block',0x80ad7b,-.79,.59,-.12,1.34,.12,1.33);
 p('block',0x9bc590,-.79,.665,.42,1.34,.06,.19);
 p('cushion',linen,-.79,.66,.83,.98,.22,.41);
 p('block',0xc79563,.91,.38,1.13,.7,.7,.61);
 p('block',honey,.91,.75,1.13,.78,.08,.67);
 p('drum',0xf5d98c,.91,1,1.13,.29,.4,.29);
 p('cushion',0x9dc58d,.73,.086,-.03,1.03,.056,1.49);
}

function kitchen(p) {
 p('block',wood,.06,.44,1.4,2.84,.81,.69);
 p('block',linen,.06,.9,1.4,2.99,.11,.81);
 p('block',0x7aafb3,-.72,.969,1.38,.68,.045,.45);
 p('drum',0x96adb1,-.74,1.12,1.67,.066,.34,.066);
 p('block',0x96adb1,-.74,1.27,1.56,.067,.067,.26);
 p('block',0x504e49,.79,.98,1.4,.76,.07,.53);
 for(const x of [.57,1.01])p('drum',0x9b8566,x,1.028,1.4,.24,.045,.24);
 for(const x of [-.84,0,.84]){
  p('block',honey,x,.45,1.041,.73,.58,.06);
  p('cushion',0x9d6e42,x,.63,.985,.18,.045,.07);
 }
 p('block',honey,1.21,.67,-.56,.92,.12,.74);
 for(const x of [.92,1.47])p('block',wood,x,.32,-.56,.13,.63,.49);
}

function porch(p) {
 p('block',wood,0,.44,1.39,2.14,.16,.62);
 p('block',honey,0,.77,1.61,2.16,.54,.13);
 for(const side of [-1,1]){
  p('block',wood,side*.83,.24,1.39,.15,.42,.52);
  p('cushion',0x79c8b9,side*.49,.55,1.37,.95,.15,.58);
 }
 pottedPlant(p,-1.48,.59);
 pottedPlant(p,1.36,1.2);
}

const furniture={room:lounge,bedroom,kitchen,porch};
export function furnishModule(parent,type) {
 return addOrnaments(parent,'HouseFurniture-'+type,furniture[type]);
}
