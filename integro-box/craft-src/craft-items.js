export const BLOCKS=[null,
{name:'Grama',color:0x71b84e},{name:'Terra',color:0x9e7050},{name:'Pedra',color:0x919ca1},{name:'Madeira',color:0x89613d},{name:'Folhas',color:0x42995b},{name:'Areia',color:0xe4cd8b},{name:'Tijolo',color:0xb76e55},{name:'Vidro',color:0x9ee5df},{name:'Tábuas',color:0xcb9d64},{name:'Neve',color:0xe6f2f3},{name:'Rocha base',color:0x434957},
{name:'Escada',color:0xc69861,group:'Construção',price:12,pack:4},
{name:'Porta',color:0x99704b,group:'Construção',price:18},
{name:'Cerca',color:0xd5ac72,group:'Construção',price:10,pack:4},
{name:'Cama',color:0xde697b,group:'Casa',price:35},
{name:'Mesa',color:0xc59b65,group:'Casa',price:20},
{name:'Cadeira',color:0x97b9ae,group:'Casa',price:15},
{name:'Baú',color:0xba823f,group:'Casa',price:28},
{name:'Fornalha',color:0x758084,group:'Casa',price:40},
{name:'Luminária',color:0xffd56f,group:'Casa',price:18},
{name:'Banca do marketplace',color:0x559b86,group:'Casa',price:30},
{name:'Água',color:0x4cbdd7,fluid:true},
{name:'Lava',color:0xff7a39,fluid:true},
{name:'Balde vazio',color:0xb9c9cb,group:'Baldes',price:10,tool:true},
{name:'Balde de água',color:0x49b9e5,group:'Baldes',price:14,tool:true},
{name:'Balde de lava',color:0xff7d35,group:'Baldes',price:25,tool:true},
{name:'Vaca',color:0xf2eee1,group:'Animais',price:65,animal:'cow'},
{name:'Porco',color:0xe991a1,group:'Animais',price:45,animal:'pig'},
{name:'Boi',color:0x926b4b,group:'Animais',price:75,animal:'ox'},
{name:'Balde de leite',color:0xfaf3d8,group:'Baldes',tool:true,price:18},
{name:'Trigo',color:0xe7c265,group:'Animais',price:10,pack:5,tool:true},
{name:'Pão',color:0xd7a259,group:'Casa',price:12,tool:true},
{name:'Terra preparada',color:0x715139,group:'Fazenda',cube:true},
{name:'Sementes de trigo',color:0xd8c16e,group:'Fazenda',price:8,pack:4,tool:true},
{name:'Sementes de cenoura',color:0x96b867,group:'Fazenda',price:10,pack:4,tool:true},
{name:'Cenoura',color:0xf5a344,group:'Fazenda',price:8,tool:true},
{name:'Plantação de trigo',color:0xc9c86c,prop:true,nonSolid:true,hidden:true},
{name:'Plantação de cenoura',color:0x75bb64,prop:true,nonSolid:true,hidden:true},
{name:'Minério de carvão',color:0x555962,cube:true,group:'Mineração'},
{name:'Minério de ferro',color:0xd3aa8e,cube:true,group:'Mineração'},
{name:'Minério de ouro',color:0xf3ce60,cube:true,group:'Mineração'},
{name:'Minério de cristal',color:0x6de3e2,cube:true,group:'Mineração'},
{name:'Carvão',color:0x434a55,tool:true,group:'Mineração',price:8},
{name:'Barra de ferro',color:0xc8d9df,tool:true,group:'Mineração',price:24},
{name:'Barra de ouro',color:0xffd663,tool:true,group:'Mineração',price:40},
{name:'Cristal',color:0x77f2e4,tool:true,group:'Mineração',price:70},
{name:'Picareta de madeira',color:0xb88857,tool:true,group:'Mineração',price:15,tier:1,durability:50},
{name:'Picareta de pedra',color:0x9caab0,tool:true,group:'Mineração',price:35,tier:2,durability:100},
{name:'Picareta de ferro',color:0xd9e7eb,tool:true,group:'Mineração',price:70,tier:3,durability:220},
{name:'Machado',color:0xaebec8,tool:true,group:'Mineração',price:30,durability:100},
{name:'Pá',color:0xb3c4c6,tool:true,group:'Mineração',price:20,durability:100},
{name:'Enxada',color:0xc2c3a8,tool:true,group:'Fazenda',price:20,durability:100},
{name:'Capivara',color:0xa98058,animal:'capybara',group:'Animais',price:55},
{name:'Barco',color:0xc49a61,tool:true,group:'Transportes',price:45},
{name:'Trilhos',color:0xa9b9c4,prop:true,nonSolid:true,group:'Transportes',price:12,pack:8},
{name:'Carrinho',color:0x8497a3,tool:true,group:'Transportes',price:65},
{name:'Fio de energia',color:0xdfad58,prop:true,nonSolid:true,group:'Mecanismos',price:10,pack:8},
{name:'Alavanca',color:0xe1b56f,prop:true,nonSolid:true,group:'Mecanismos',price:15},
{name:'Pistão',color:0x91a79a,prop:true,group:'Mecanismos',price:35},
{name:'Mesa de encantamentos',color:0x7f7cc6,prop:true,group:'Mineração',price:100},
{name:'Lã',color:0xf5f0df,cube:true,group:'Construção',price:12,pack:3},
{name:'Ovelha',color:0xfff2d6,animal:'sheep',group:'Animais',price:45},
{name:'Haste do pistão',color:0xc7b087,prop:true,hidden:true}];
export const ITEM_IDS=BLOCKS.map((b,id)=>id).filter(id=>id&&id!==11&&!BLOCKS[id].fluid&&!BLOCKS[id].hidden);
export const RECIPES=[{id:'planks',name:'Tábuas',cost:{4:1},out:9,count:4},{id:'bricks',name:'Tijolos',cost:{3:4},out:7,count:4},{id:'glass',name:'Vidro',cost:{6:3},out:8,count:2},{id:'stairs',name:'Escadas',cost:{9:3},out:12,count:4},{id:'door',name:'Porta',cost:{9:4},out:13,count:1},{id:'fence',name:'Cercas',cost:{9:2},out:14,count:4},{id:'bed',name:'Cama',cost:{9:4,5:3},out:15,count:1},{id:'table',name:'Mesa',cost:{9:3},out:16,count:1},{id:'chair',name:'Cadeira',cost:{9:2},out:17,count:1},{id:'chest',name:'Baú',cost:{9:5},out:18,count:1},{id:'furnace',name:'Fornalha',cost:{3:8},out:19,count:1},{id:'lamp',name:'Luminária',cost:{4:1,8:2},out:20,count:1}];
export const SMELTS=[{id:'glass',name:'Fundir vidro',cost:{6:3,4:1},out:8,count:3,seconds:12},{id:'brick',name:'Assar tijolos',cost:{2:4,4:1},out:7,count:4,seconds:15},{id:'bread',name:'Assar pão',cost:{31:3,4:1},out:32,count:2,seconds:10}];
export const sellPrice=id=>id===30?14:id===32?8:id<=10?1:Math.max(1,Math.floor((BLOCKS[id]?.price||4)/(BLOCKS[id]?.pack||1)*.35));
// Collision shapes use the same local coordinates and rotation as the models.
export function itemBoxes(id,meta={}){
 if(!id||BLOCKS[id]?.nonSolid||BLOCKS[id]?.fluid||BLOCKS[id]?.tool||BLOCKS[id]?.animal)return [];
 let boxes=id===12?[[0,0,0,1,.25,1],[0,.25,.25,1,.5,1],[0,.5,.5,1,.75,1],[0,.75,.75,1,1,1]]:
 id===13?(meta.open?[[0,0,0,.13,1.95,1]]:[[0,0,0,1,1.95,.13]]):
 id===14?[[0,0,.39,1,1.35,.61],[.39,0,0,.61,1.35,1]]:
 id===15?[[.05,0,.03,.95,.55,.97]]:id===16?[[.04,.66,.04,.96,.85,.96]]:
 id===17?[[.15,0,.15,.85,.52,.85],[.15,.52,.72,.85,1.15,.88]]:
 id===18?[[.07,0,.09,.93,.8,.91]]:id===20?[[.37,0,.37,.63,1.45,.63]]:
 id===21?[[0,0,0,1,.9,1]]:[[0,0,0,1,1,1]];
 const rot=meta.rot||0;
 for(let i=0;i<rot;i++)boxes=boxes.map(([a,b,c,d,e,f])=>[c,b,1-d,f,e,1-a]);
 return boxes;
}
export const itemHeight=id=>id===13||id===20||id===21?2:id===14||id===17?1.5:1;

export const isCube=id=>!!id&&(id<=11||!!BLOCKS[id]?.cube);
export const isProp=id=>id>=12&&id<=23||!!BLOCKS[id]?.prop;
RECIPES.push(
{id:'pickwood',name:'Picareta de madeira',cost:{9:5},out:47,count:1},
{id:'pickstone',name:'Picareta de pedra',cost:{3:5,9:2},out:48,count:1},
{id:'pickiron',name:'Picareta de ferro',cost:{44:3,9:2},out:49,count:1},
{id:'axe',name:'Machado',cost:{3:3,9:2},out:50,count:1},
{id:'shovel',name:'Pá',cost:{3:1,9:2},out:51,count:1},
{id:'hoe',name:'Enxada',cost:{3:2,9:2},out:52,count:1},
{id:'boat',name:'Barco',cost:{9:8},out:54,count:1},
{id:'rail',name:'Trilhos',cost:{44:2,9:2},out:55,count:12},
{id:'cart',name:'Carrinho',cost:{44:5},out:56,count:1},
{id:'wire',name:'Fio de energia',cost:{45:1},out:57,count:12},
{id:'lever',name:'Alavanca',cost:{3:1,9:1},out:58,count:1},
{id:'piston',name:'Pistão',cost:{44:2,9:3},out:59,count:1},
{id:'enchant',name:'Mesa de encantamentos',cost:{46:2,9:4,3:4},out:60,count:1});
SMELTS.push({id:'iron',name:'Fundir ferro',cost:{40:2,43:1},out:44,count:2,seconds:18},{id:'gold',name:'Fundir ouro',cost:{41:2,43:1},out:45,count:2,seconds:22});
