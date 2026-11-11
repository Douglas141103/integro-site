// One geometry contract for nest slots, rendered stairs and player support.
export const CORRAL_ORIGIN={x:-5,z:14};
export const MAX_CORRAL_FLOORS=5,FLOOR_HEIGHT=2.65,FLOOR_SLOTS=24;
export const CORRAL_FLOOR_PRICES={2:250000,3:500000,4:1000000,5:2000000};
export const CORRAL_STAIRS={x:4.2,width:1.25,laneGap:1.5,halfRun:3.25,steps:18,landingZ:3.65,landingDepth:.8};
export function corralFloors(save={}){
 const floors=Number.isInteger(save.corralFloors)?Math.max(1,Math.min(MAX_CORRAL_FLOORS,save.corralFloors)):1;
 return Math.max(save.secondFloor===true?2:1,floors);
}
export function stairPoint(level,t){
 const s=CORRAL_STAIRS,direction=level%2?-1:1;
 return{x:s.x+(level%2?0:s.laneGap),y:(level-1+t)*FLOOR_HEIGHT,z:direction*(t*2-1)*s.halfRun};
}
export function corralSurface(save,p,ceiling=p.y+.025){
 const x=p.x-CORRAL_ORIGIN.x,z=p.z-CORRAL_ORIGIN.z,s=CORRAL_STAIRS,n=corralFloors(save);
 let support=0;
 const consider=h=>{if(h<=ceiling+1e-6&&h>support)support=h;};
 for(let floor=1;floor<n;floor++){
  const y=floor*FLOOR_HEIGHT;
  if(Math.abs(x)<=3.55&&Math.abs(z)<=3.9)consider(y);
  if(x>=3.1&&x<=s.x+s.laneGap+s.width/2&&Math.abs(Math.abs(z)-s.landingZ)<=s.landingDepth/2+.02)consider(y);
 }
 if(Math.abs(z)<=s.halfRun+.02){
  for(let level=1;level<n;level++){
   const lane=stairPoint(level,0).x;if(Math.abs(x-lane)>s.width/2)continue;
   const direction=level%2?-1:1,t=Math.max(0,Math.min(1,(direction*z/s.halfRun+1)/2));
   // Actual stair treads, not a floating or decorative ladder.
   consider((level-1+Math.ceil(t*s.steps-1e-7)/s.steps)*FLOOR_HEIGHT);
  }
 }
 return support;
}
export function nearCorral(p){return p.x>=-9&&p.x<=1.5&&p.z>=9.7&&p.z<=18.2;}
export const CORRAL_DESIGNS={
 meadow:{name:'Prado',price:0,color:0x94c67d,roof:0x7764b1,rail:0xf4dfb3,trim:0xb28d60,desc:'Madeira, flores e ninhos em um jardim campestre.'},
 candy:{name:'Doceria',price:600,color:0xf1b1cc,roof:0x7dcccf,rail:0xffefc5,trim:0xc76d9c,desc:'Colunas de doce, pirulitos e cobertura de confeitaria.'},
 space:{name:'Observatório',price:1200,color:0x7785b8,roof:0xddaaff,rail:0x92f5f1,trim:0x454569,desc:'Anéis orbitais, antenas e estrelas em cada andar.'},
 bamboo:{name:'Jardim de bambu',price:800,color:0x76b985,roof:0xddba68,rail:0xd6e6a1,trim:0x547951,desc:'Bambus, lanternas e detalhes de jardim oriental.'},
 castle:{name:'Castelo dos Ninhos',price:6000,color:0xc1bedc,roof:0x8970cc,rail:0xf3d990,trim:0x787ba4,desc:'Torres, ameias e bandeiras para um curral real.'},
 tropical:{name:'Refúgio Tropical',price:3000,color:0x8adbc2,roof:0xf4bc68,rail:0xffedbd,trim:0x9f774e,desc:'Palmeiras, telhado de palha e flores tropicais.'},
 neon:{name:'Estação Neon',price:10000,color:0x4b6380,roof:0xb284f1,rail:0x72f5df,trim:0x34425f,desc:'Arcos luminosos, painéis e cristais futuristas.'}
};
