import {BLOCKS} from './craft-items.js';
export function itemIcon(id){const color='#'+BLOCKS[id].color.toString(16).padStart(6,'0'),rect=(x,y,w,h,c)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}"/>`;let s='';
 if(id<12||BLOCKS[id].cube)s=`<path d="M4 9L16 3 28 9 16 15Z" fill="${color}"/><path d="M4 9L16 15V29L4 23Z" fill="${color}"/><path d="M16 15L28 9V23L16 29Z" fill="${color}"/><path d="M16 15L28 9V23L16 29Z" fill="#000" opacity=".2"/>`;
 else if(id===12){for(let i=0;i<4;i++)s+=rect(3+i*6,23-i*5,6,6+i*5,color);s+=rect(3,29,24,2,'#795639')}
 else if(id===13)s=rect(7,2,18,29,color)+rect(10,5,12,9,'#a4d7d1')+rect(10,18,12,10,'#735237')+rect(20,16,3,3,'#ffe586');
 else if(id===14)s=rect(3,4,5,26,color)+rect(24,4,5,26,color)+rect(5,9,22,4,color)+rect(5,21,22,4,color);
 else if(id===15)s=rect(3,6,4,24,'#875836')+rect(25,15,4,15,'#875836')+rect(7,13,19,10,color)+rect(7,10,7,5,'#fff8dc')+rect(5,23,23,3,'#875836');
 else if(id===16)s=rect(2,10,28,6,color)+rect(5,16,4,14,'#88603e')+rect(23,16,4,14,'#88603e')+rect(12,6,8,4,'#dbe8c3');
 else if(id===17)s=rect(6,2,20,12,color)+rect(6,14,4,15,'#9d764e')+rect(22,14,4,15,'#9d764e')+rect(5,17,22,5,color);
 else if(id===18)s=rect(3,7,26,21,color)+rect(3,13,26,3,'#805835')+rect(14,12,5,9,'#ffdc7f');
 else if(id===19)s=rect(3,3,26,26,color)+rect(8,7,16,4,'#243643')+rect(8,16,16,10,'#243643')+rect(11,21,10,4,'#ffb153')+rect(16,17,4,5,'#ffda7e');
 else if(id===20)s=rect(13,13,6,16,'#805e49')+rect(9,28,14,3,'#805e49')+rect(7,4,18,15,color)+rect(5,2,22,4,'#805e49');
 else if(id===21){s=rect(4,18,24,12,'#bd8c54')+rect(4,8,3,20,'#815b3a')+rect(25,8,3,20,'#815b3a');for(let i=0;i<6;i++)s+=rect(1+i*5,4,5,8,i%2?'#f5e9ce':color)}
 else if(id>=24&&id<=26||id===30)s=rect(6,12,20,17,'#91a5af')+rect(9,15,14,11,id===24?'#405763':color)+rect(6,6,3,7,'#bbcbd0')+rect(23,6,3,7,'#bbcbd0')+rect(8,4,16,3,'#bbcbd0');
 else if(id>=27&&id<=29){s=rect(5,9,20,17,color)+rect(2,6,7,5,color)+rect(24,6,6,5,color)+rect(7,14,4,4,'#263744')+rect(20,14,4,4,'#263744')+rect(11,21,12,7,id===28?'#cf8294':'#d1af8d');if(id===29)s+=rect(4,2,4,7,'#e3d3af')+rect(25,2,4,7,'#e3d3af');if(id===27)s+=rect(12,9,7,5,'#5a574e')}
 else if(id===31){s=rect(14,4,3,27,color);for(let y=5;y<23;y+=6)s+=rect(7,y,7,4,color)+rect(17,y-2,7,4,color)}
 else if(id===32)s=rect(4,12,24,14,color)+rect(8,8,16,4,color)+rect(10,12,3,6,'#f6d097')+rect(19,12,3,6,'#f6d097');
 if(id===53){s=rect(5,13,22,14,color)+rect(2,8,15,14,'#bd966b')+rect(1,5,4,5,'#96714e')+rect(12,5,4,5,'#96714e')+rect(4,12,3,3,'#2b352d')+rect(2,20,10,4,'#d1ab7f')+rect(7,26,4,5,'#795b42')+rect(22,26,4,5,'#795b42');}
 if(id===62)s=rect(4,6,24,20,color)+rect(10,12,12,16,'#88786a')+rect(11,15,3,3,'#263744')+rect(19,15,3,3,'#263744');
 if([34,35].includes(id)){for(let i=0;i<5;i++)s+=rect(5+(i*7)%20,6+(i*5)%19,4,5,color);s+=rect(14,4,3,8,'#73b569');}
 if(id===36)s='<path d="M10 8H24L13 30H9Z" fill="#f0a04d"/>'+rect(12,1,4,8,'#69a354')+rect(18,3,8,4,'#86ba61');
 if([43,44,45,46].includes(id))s='<path d="M4 18L10 8H25L29 19 22 25H6Z" fill="'+color+'"/>'+rect(11,10,10,3,'#ffffff55');
 if(id>=47&&id<=52){s=rect(13,8,4,23,'#ab7b50');if(id<=49)s+=rect(4,4,24,5,color)+rect(3,7,5,7,color);else if(id===50)s+=rect(4,4,12,14,color);else if(id===51)s+=rect(8,3,15,13,color);else s+=rect(4,4,20,5,color)+rect(4,9,5,6,color);}
 if(id===54)s=rect(3,15,26,11,color)+rect(1,12,5,8,'#85603e')+rect(26,12,5,8,'#85603e')+rect(8,19,17,3,'#e4ba78')+rect(3,28,26,2,'#80d4e1');
 if(id===55){for(let y=4;y<30;y+=6)s+=rect(3,y,26,3,'#ab835a');s+=rect(7,2,3,29,color)+rect(22,2,3,29,color);}
 if(id===56)s=rect(3,7,26,17,color)+rect(6,10,20,8,'#526873')+rect(6,24,6,6,'#303f4a')+rect(22,24,6,6,'#303f4a');
 if(id===57)s=rect(2,15,28,5,color)+rect(14,3,5,28,color)+rect(11,12,11,11,'#f6d67f');
 if(id===58)s=rect(5,22,23,8,'#829791')+rect(14,7,5,18,'#ad8052')+rect(11,3,11,9,color);
 if(id===59)s=rect(2,12,18,18,color)+rect(18,16,9,7,'#bd9159')+rect(26,11,5,16,'#e0bd83');
 if(id===60)s=rect(4,15,24,15,'#595574')+rect(2,12,28,5,color)+rect(7,4,18,9,'#f6e6b7')+rect(15,4,2,10,'#bb9c61');
 if(id===64||id===65)s='<path d="M8 7C15 2 29 5 28 16S18 29 9 26 1 13 8 7Z" fill="'+color+'" stroke="#f5d6a8" stroke-width="2"/><path d="M10 11L21 16M9 17L17 21" stroke="'+(id===65?'#67452e':'#f4b7a2')+'" stroke-width="3" stroke-linecap="round"/>';
 if(!s)s=rect(6,6,20,20,color);
 return `<svg class="craft-item-icon" viewBox="0 0 32 32" aria-hidden="true" shape-rendering="crispEdges">${s}</svg>`;
}
