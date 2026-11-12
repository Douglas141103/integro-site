// Shared geometry for nest floors, elevator platforms and player support.
export const CORRAL_ORIGIN={x:-5,z:14};
export const MAX_CORRAL_FLOORS=5,FLOOR_HEIGHT=2.65,FLOOR_SLOTS=24;
export const CORRAL_FLOOR_PRICES={2:250000,3:500000,4:1000000,5:2000000};
export const CORRAL_ELEVATOR={x:6.2,z:0,width:1.9,depth:2.4,speed:4.2,exitX:5.15};
export function elevatorFloor(save,p){
 const e=CORRAL_ELEVATOR,floor=1+Math.round(p.y/FLOOR_HEIGHT);
 return floor>=1&&floor<=corralFloors(save)&&Math.abs(p.y-(floor-1)*FLOOR_HEIGHT)<.06&&Math.abs(p.vy||0)<.1&&Math.abs(p.x-CORRAL_ORIGIN.x-e.x)<=.72&&Math.abs(p.z-CORRAL_ORIGIN.z-e.z)<=.85?floor:0;
}
export function corralFloors(save={}){
 const floors=Number.isInteger(save.corralFloors)?Math.max(1,Math.min(MAX_CORRAL_FLOORS,save.corralFloors)):1;
 return Math.max(save.secondFloor===true?2:1,floors);
}
export function corralSurface(save,p,ceiling=p.y+.025){
 const x=p.x-CORRAL_ORIGIN.x,z=p.z-CORRAL_ORIGIN.z,e=CORRAL_ELEVATOR,n=corralFloors(save);
 let support=0;
 for(let floor=1;floor<n;floor++){
  const y=floor*FLOOR_HEIGHT;
  const deck=Math.abs(x)<=3.55&&Math.abs(z)<=3.9;
  const landing=x>=3.1&&x<=e.x+e.width/2&&Math.abs(z-e.z)<=e.depth/2;
  if((deck||landing)&&y<=ceiling+1e-6)support=y;
 }
 return support;
}
export function nearCorral(p){return p.x>=-9&&p.x<=2.5&&p.z>=9.7&&p.z<=18.2;}
export const CORRAL_DESIGNS={
 meadow:{name:'Prado',price:0,color:0x94c67d,roof:0x7764b1,rail:0xf4dfb3,trim:0xb28d60,desc:'Madeira, flores e ninhos em um jardim campestre.'},
 candy:{name:'Doceria',price:600,color:0xf1b1cc,roof:0x7dcccf,rail:0xffefc5,trim:0xc76d9c,desc:'Colunas de doce, pirulitos e cobertura de confeitaria.'},
 space:{name:'Observatório',price:1200,color:0x7785b8,roof:0xddaaff,rail:0x92f5f1,trim:0x454569,desc:'Anéis orbitais, antenas e estrelas em cada andar.'},
 bamboo:{name:'Jardim de bambu',price:800,color:0x76b985,roof:0xddba68,rail:0xd6e6a1,trim:0x547951,desc:'Bambus, lanternas e detalhes de jardim oriental.'},
 castle:{name:'Castelo dos Ninhos',price:6000,color:0xc1bedc,roof:0x8970cc,rail:0xf3d990,trim:0x787ba4,desc:'Torres, ameias e bandeiras para um curral real.'},
 tropical:{name:'Refúgio Tropical',price:3000,color:0x8adbc2,roof:0xf4bc68,rail:0xffedbd,trim:0x9f774e,desc:'Palmeiras, telhado de palha e flores tropicais.'},
 neon:{name:'Estação Neon',price:10000,color:0x4b6380,roof:0xb284f1,rail:0x72f5df,trim:0x34425f,desc:'Arcos luminosos, painéis e cristais futuristas.'}
};
