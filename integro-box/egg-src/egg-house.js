export const HOUSE={z:35,size:4,columns:3,rows:3,maxModules:9,baseEnd:49};
export const HOUSE_MODULES={
 room:{name:'Sala de palha',short:'Sala',price:25000,icon:'⌂',color:0xd9b76c,desc:'Um novo cômodo para ampliar sua casa.'},
 bedroom:{name:'Quarto de palha',short:'Quarto',price:40000,icon:'☾',color:0xb0cda0,desc:'Cama e tapete para seu cantinho.'},
 kitchen:{name:'Cozinha de palha',short:'Cozinha',price:35000,icon:'♨',color:0xe6b18b,desc:'Bancada, pia e mesa de madeira.'},
 porch:{name:'Varanda de palha',short:'Varanda',price:15000,icon:'❀',color:0x8dcbc0,desc:'Espaço aberto com bancos e plantas.'}
};
export const initialHouse=()=>({version:1,modules:[{id:'home',type:'room',col:1,row:0,rotation:0}]});
export function connectedHouse(modules){const reached=new Set(['home']);for(let i=0;i<modules.length;i++)for(const m of modules)if(modules.some(n=>reached.has(n.id)&&Math.abs(n.col-m.col)+Math.abs(n.row-m.row)===1))reached.add(m.id);return modules.every(m=>reached.has(m.id));}
export function validHouse(h){if(h?.version!==1||!Array.isArray(h.modules)||!h.modules.length||h.modules.length>9)return false;const ids=new Set(),cells=new Set();for(const m of h.modules){if(!m||!/^home$|^m[1-8]$/.test(m.id)||!Object.hasOwn(HOUSE_MODULES,m.type)||![m.col,m.row].every(v=>Number.isInteger(v)&&v>=0&&v<3)||!Number.isInteger(m.rotation)||m.rotation<0||m.rotation>3||ids.has(m.id)||cells.has(`${m.col},${m.row}`))return false;ids.add(m.id);cells.add(`${m.col},${m.row}`);}return h.modules.some(m=>m.id==='home'&&m.type==='room'&&m.col===1&&m.row===0)&&connectedHouse(h.modules);}
export function cleanHouse(h){return validHouse(h)?{version:1,modules:h.modules.map(({id,type,col,row,rotation})=>({id,type,col,row,rotation}))}:initialHouse();}
export const modulePosition=m=>({x:(m.col-1)*HOUSE.size,z:HOUSE.z+m.row*HOUSE.size});
export function houseWalls(h){const modules=cleanHouse(h).modules,walls=[];for(const m of modules){if(m.type==='porch')continue;const p=modulePosition(m);for(const [dx,dz]of[[0,-1],[1,0],[0,1],[-1,0]]){const neighbor=modules.find(n=>n.col===m.col+dx&&n.row===m.row+dz);if(neighbor&&neighbor.type!=='porch'&&(dx>0||dz>0))continue;const door=neighbor||(m.id==='home'&&dz===-1);for(const offset of door?[-1.35,1.35]:[0])walls.push({x:p.x+dx*2+(dz?offset:0),z:p.z+dz*2+(dx?offset:0),w:dx?.15:door?1.3:4,d:dz?.15:door?1.3:4});}}return walls;}
export function installHouse(Game){Object.assign(Game.prototype,{
 houseSave(){return cleanHouse((this.corralView||this.save).house);},
 canBuildHouse(){return this.inBase()&&!this.raceMode&&!this.jetFlight&&!this.corralView&&this.carrying===null&&this.mode==='run';},
 canPlaceHouse(type,col,row,moving=null){const ms=this.save.house.modules;if(!Object.hasOwn(HOUSE_MODULES,type)||![col,row].every(v=>Number.isInteger(v)&&v>=0&&v<3)||moving==='home'||(moving&&!ms.some(m=>m.id===moving))||(!moving&&ms.length>=9)||ms.some(m=>m.id!==moving&&m.col===col&&m.row===row))return false;return connectedHouse([...ms.filter(m=>m.id!==moving),{id:moving||'new',type,col,row}]);},
 placeHouse(type,col,row,moving=null){if(!this.canBuildHouse())return false;const ms=this.save.house.modules,old=ms.find(m=>m.id===moving);if(old)type=old.type;if(!this.canPlaceHouse(type,col,row,moving))return false;const price=old?0:HOUSE_MODULES[type].price;if(this.spendable()<price)return false;this.save.coins-=price;if(old){old.col=col;old.row=row;}else ms.push({id:Array.from({length:8},(_,i)=>'m'+(i+1)).find(id=>!ms.some(m=>m.id===id)),type,col,row,rotation:0});this.houseChanged(old?'Módulo reposicionado!':HOUSE_MODULES[type].name+' construída!');return true;},
 rotateHouse(id){if(!this.canBuildHouse())return false;const m=this.save.house.modules.find(m=>m.id===id);if(!m)return false;m.rotation=(m.rotation+1)%4;this.houseChanged('Móveis girados!');return true;},
 houseChanged(text){if(this.player.z>30)Object.assign(this.player,{x:0,z:31,y:0,vy:0});this.emit('upgrade',text);},
 goHouse(){if(!this.canBuildHouse())return false;this.endSkates();this.clearPush();Object.assign(this.player,{x:0,z:31,y:0,vy:0});return true;},
 collideHouse(p,r=.4){if(p.z<30||p.y>2.4)return;const h=(this.corralView||this.save).house,key=JSON.stringify(h);if(this._houseKey!==key){this._houseKey=key;this._houseWalls=houseWalls(h);}for(const w of this._houseWalls){const dx=p.x-w.x,dz=p.z-w.z,ox=w.w/2+r-Math.abs(dx),oz=w.d/2+r-Math.abs(dz);if(ox>0&&oz>0){if(ox<oz)p.x+=Math.sign(dx||1)*ox;else p.z+=Math.sign(dz||1)*oz;}}}
});}
