import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import {BLOCKS} from './craft-items.js';
const mat=c=>new THREE.MeshLambertMaterial({color:c});
function builder(group,center=.5){const palette=new Map();return(w,h,d,c,x,y,z,glow=false)=>{const key=c+':'+glow;if(!palette.has(key)){const m=mat(c);if(glow){m.emissive=new THREE.Color(c);m.emissiveIntensity=.7}palette.set(key,m)}const b=new THREE.Mesh(new RoundedBoxGeometry(w,h,d,1,Math.min(w,h,d)*.16),palette.get(key));b.position.set(x-center,y,z-center);group.add(b);return b}}
export function makeProp(id,meta={}){const g=new THREE.Group(),box=builder(g),wood=0xba8b56,dark=0x715039,cream=0xf5e9ce;
 if(id===12){for(let i=0;i<4;i++){box(1,(i+1)*.25,.25,wood,.5,(i+1)*.125,(i+.5)*.25);box(.98,.035,.23,0xdfb67d,.5,(i+1)*.25+.008,(i+.5)*.25)}}
 if(id===13){const door=new THREE.Group(),b=builder(door,0);door.position.set(-.5,0,-.5);b(1,1.92,.12,wood,.5,.96,.06);for(const x of[.11,.89])b(.09,1.84,.14,dark,x,.96,.06);for(const y of[.12,1.02,1.81])b(.85,.08,.14,dark,.5,y,.06);for(const x of[.3,.65])b(.2,.47,.015,0xa8d4d0,x,1.39,-.01);b(.08,.09,.1,0xf7d372,.83,.92,-.03);if(meta.open){door.rotation.y=-Math.PI/2;door.position.x+=.12;}g.add(door)}
 if(id===14){for(const [x,z]of[[.5,.5]]){box(.2,1.35,.2,wood,x,.675,z);box(.25,.08,.25,cream,x,1.36,z)}for(const y of[.43,.93]){box(1,.13,.1,wood,.5,y,.5);box(.1,.13,1,wood,.5,y,.5)}}
 if(id===15){box(.9,.18,.94,dark,.5,.18,.5);box(.87,.17,.9,cream,.5,.36,.5);box(.88,.08,.59,0xd86981,.5,.49,.64);box(.67,.1,.24,0xffffed,.5,.51,.2);box(.9,.65,.07,wood,.5,.325,.04);for(const x of[.12,.88])for(const z of[.14,.86])box(.1,.22,.1,wood,x,.11,z)}
 if(id===16){box(.96,.15,.96,wood,.5,.76,.5);for(const x of[.15,.85])for(const z of[.15,.85])box(.11,.7,.11,dark,x,.35,z);box(.23,.02,.23,cream,.5,.85,.5);box(.11,.12,.11,0x83b0a5,.7,.91,.38)}
 if(id===17){for(const x of[.2,.8])for(const z of[.2,.8])box(.11,.47,.11,dark,x,.235,z);box(.72,.13,.72,0x8cb4a0,.5,.48,.5);for(const x of[.2,.8])box(.1,.75,.1,wood,x,.79,.8);box(.69,.28,.08,0x8cb4a0,.5,1,.8)}
 if(id===18){box(.85,.67,.79,wood,.5,.37,.5);box(.88,.14,.82,0xcc9c5f,.5,.76,.5);for(const x of[.15,.85])box(.08,.8,.84,dark,x,.4,.5);box(.12,.16,.05,0xf9d970,.5,.58,.07)}
 if(id===19){box(1,1,1,0x7b8588,.5,.5,.5);for(const y of[.16,.52,.85]){box(.99,.045,1.01,0x535f66,.5,y,.5)}box(.61,.38,.025,0x1b2934,.5,.38,-.014);box(.58,.15,.025,0x1b2934,.5,.82,-.014);if(meta.job?.remaining>0){for(let i=0;i<3;i++)box(.13,.16+i%2*.12,.035,i%2?0xffd357:0xff823a,.3+i*.19,.3+i%2*.06,-.035);box(.35,.08,.035,0xffe387,.5,.23,-.036)}else if(meta.job)box(.38,.13,.035,0x9bebbc,.5,.35,-.035)}
 if(id===20){box(.42,.1,.42,dark,.5,.05,.5);box(.1,1.1,.1,dark,.5,.6,.5);box(.42,.38,.42,meta.lit===false?0x74796c:0xffd775,.5,1.24,.5,meta.lit!==false);box(.5,.08,.5,dark,.5,1.45,.5);for(const x of[.3,.7])for(const z of[.3,.7])box(.04,.4,.04,dark,x,1.24,z)}
 if(id===21){box(1,.72,.86,wood,.5,.36,.5);box(1,.12,1,dark,.5,.8,.5);for(const x of[.07,.93])box(.09,1.8,.09,dark,x,.9,.92);for(let i=0;i<5;i++)box(.2,.13,1,i%2?cream:0x469c7a,.1+i*.2,1.81,.5);box(.8,.28,.08,0x2b6556,.5,1.45,.9);box(.22,.16,.25,0xe9ad4b,.23,.92,.35);box(.22,.2,.25,0xd77971,.55,.94,.35);box(.2,.17,.25,0x82b868,.81,.93,.4)}
 if(id===22||id===23){const m=new THREE.MeshLambertMaterial({color:BLOCKS[id].color,transparent:id===22,opacity:id===22?.7:1,emissive:id===23?0xc7350d:0,emissiveIntensity:.5});const b=new THREE.Mesh(new THREE.BoxGeometry(.99,.8,.99),m);b.position.y=.4;g.add(b);for(let i=0;i<3;i++)box(.17,.012,.07,id===22?0xb1f4fb:0xffd360,.2+i*.25,.81,.23+(i%2)*.4,id===23)}

 if(id===37||id===38){const stage=meta.stage||0,h=.16+stage*.19;for(const [x,z]of [[.25,.25],[.7,.25],[.25,.7],[.7,.7]]){box(.045,h,.045,0x6eab51,x,h/2,z);box(.24,.07,.07,stage===3&&id===37?0xe8c562:0x77be64,x,h*.7,z);box(.07,.06,.25,0x92c168,x,h*.45,z);if(stage===3)box(id===37?.11:.12,id===37?.2:.18,.11,id===37?0xe1c16c:0xf0a04d,x,id===37?h:.08,z)}}
 if(id===54){box(1.15,.12,1.75,wood,.5,.12,.5);for(const x of[-.1,1.1])box(.12,.43,1.9,dark,x,.31,.5);for(const z of[-.4,1.4])box(1.2,.38,.12,wood,.5,.29,z);box(1.1,.12,.25,cream,.5,.4,.5);box(.08,.08,2,0xe6b777,-.28,.47,.6)}
 if(id===55){for(const x of[.12,.4,.7,.94])box(.1,.065,.95,wood,x,.035,.5);for(const z of[.18,.82])box(1,.07,.08,0xbbc9cc,.5,.09,z)}
 if(id===56){box(.94,.18,1.05,0x536470,.5,.2,.5);for(const x of[.05,.95])box(.1,.65,1.05,0x9aaeb5,x,.49,.5);for(const z of[0,1])box(.9,.65,.1,0xaebfc2,.5,.49,z);for(const x of[0,1])for(const z of[.22,.78])box(.16,.23,.23,0x344350,x,.11,z)}
 if(id===57){const c=meta.powered?0xffe48b:0xb07b45;box(1,.035,.09,c,.5,.03,.5,meta.powered);box(.09,.035,1,c,.5,.03,.5,meta.powered);box(.16,.06,.16,c,.5,.045,.5)}
 if(id===58){box(.55,.16,.55,0x6e8585,.5,.08,.5);box(.09,.42,.09,wood,.5,.32,meta.on?.66:.34);box(.17,.13,.17,meta.on?0xa6df71:0xecc578,.5,.58,meta.on?.66:.34)}
 if(id===59){box(1,.8,1,0x798b84,.5,.4,.5);box(.96,.8,.12,wood,.5,.42,.02);for(const x of[.13,.87])box(.08,.78,1.02,0xaec0b2,x,.41,.5)}
 if(id===63){box(.2,.2,1,dark,.5,.5,.5);box(.85,.85,.13,wood,.5,.5,.02)}
 if(id===60){box(.95,.7,.95,0x4c526b,.5,.35,.5);box(1,.15,1,0x947ac4,.5,.76,.5);box(.5,.08,.65,0xffe9b0,.5,.89,.5);box(.05,.12,.67,0xede0a2,.5,.92,.5);for(const x of[.12,.88])box(.12,.15,.12,0x74ead6,x,.85,.12,true)}
 g.rotation.y=(meta.rot||0)*Math.PI/2;return g;
}
export function makeFarmAnimal(type){
 if(type==='capybara'){const g=new THREE.Group(),b=builder(g,0);b(.86,.61,1.38,0xa98058,0,.61,.1);b(.65,.57,.69,0xb68c61,0,.87,-.66);b(.62,.35,.28,0xc59b6d,0,.74,-1.06);for(const x of[-.24,.24]){b(.16,.17,.14,0x977047,x,1.18,-.62);b(.055,.07,.045,0x302f2b,x,.94,-1.08);b(.04,.025,.03,0xffffff,x,.97,-1.105);}for(const x of[-.28,.28])for(const z of[-.37,.49]){b(.18,.34,.22,0x96704c,x,.17,z);b(.2,.07,.27,0x70583f,x,.045,z-.03)}b(.11,.06,.025,0x725841,0,.74,-1.21);return g;}
 const g=new THREE.Group(),b=builder(g,0),pig=type==='pig',ox=type==='ox',sheep=type==='sheep',skin=pig?0xe9a2b0:ox?0x916749:0xf4e9d3,leg=pig?0xcc7d92:0x604e42;
 b(pig?.7:.87,pig?.5:.65,pig?1:1.3,skin,0,pig?.58:.88,0);b(.5,.47,.48,skin,0,pig?.65:1.05,-.7);b(.36,.21,.16,pig?0xd78195:0xc0a58b,0,pig?.54:.93,-.96);
 for(const x of[-.28,.28]){b(.2,.12,.19,skin,x,pig?.91:1.3,-.68);b(.055,.07,.08,0x263441,x*.72,pig?.73:1.15,-.96)}for(const x of[-.25,.25])for(const z of[-.37,.37]){b(.15,pig?.36:.61,.16,leg,x,pig?.18:.3,z);b(.16,.12,.17,0x403b36,x,.065,z)}
 if(type==='cow'){b(.18,.29,.56,0x555653,-.443,.92,.03);b(.27,.05,.38,0x555653,.2,1.218,-.2);b(.29,.18,.26,0xdda3a3,0,.48,.35)}
 if(ox){for(const x of[-.29,.29]){b(.11,.27,.11,0xe6d7ac,x,1.4,-.64);b(.16,.1,.1,0xe6d7ac,x*1.16,1.48,-.64)}b(.36,.3,.23,0x5e4639,0,1.27,-.5)}
 if(sheep){for(const x of[-.34,.34])for(const z of[-.35,.25])b(.28,.28,.36,0xfff5dc,x,1.03,z)}
 b(.08,pig?.15:.4,.09,leg,0,pig?.67:.77,pig?.56:.71);return g;
}
export function disposeModel(g){const mats=new Set();g.traverse(o=>{o.geometry?.dispose();if(o.material)mats.add(o.material)});for(const m of mats)m.dispose()}

export function makeVillager(kind){const g=new THREE.Group(),b=builder(g,0),color=kind==='farmer'?0x65996e:0x627e9f;b(.58,.73,.35,color,0,.96,0);b(.47,.48,.43,0xd6a374,0,1.59,0);b(.71,.1,.6,kind==='farmer'?0xd9b969:0x9badb2,0,1.86,0);for(const x of[-.14,.14]){b(.2,.6,.22,0x4a595c,x,.31,0);b(.07,.06,.035,0x283842,x,1.64,-.23)}for(const x of[-.39,.39])b(.17,.68,.2,color,x,1.02,0);return g;}
