// Reuse the exact rules still shipped inside the legacy browser bundle.
// Dependency extraction follows resolved bindings, never a second game economy.
import fs from 'node:fs';
import {parse} from 'acorn';
import {analyze} from 'eslint-scope';
const source=fs.readFileSync(new URL('../worlds.js',import.meta.url),'utf8');
const ast=parse(source,{ecmaVersion:2022,ranges:true});
const scopes=analyze(ast,{ecmaVersion:2022});
const scope=scopes.scopes.find(s=>s.type==='function'&&s.block===ast.body[0].expression.callee);
const vars=new Map(scope.variables.map(v=>[v.name,v]));
const selected=new Map();
const references=scopes.scopes.flatMap(s=>s.references);
function add(name){
 if(selected.has(name))return;
 const v=vars.get(name),d=v?.defs[0],node=d?.type==='Variable'?d.node:d?.node;
 if(!node)throw Error('Missing legacy rule: '+name);
 selected.set(name,node);
 for(const ref of references)if(ref.identifier.start>=node.start&&ref.identifier.end<=node.end){
  if(ref.resolved?.scope===scope&&ref.resolved.name!==name)add(ref.resolved.name);
  if(!ref.resolved&&['document','window','localStorage','requestAnimationFrame'].includes(ref.identifier.name))throw Error('UI dependency in '+name);
 }
}
for(const name of ['fY','cM','xM','oM','Si','ws','Es','EG','qD','vD'])add(name);
const stationPush=ast.body[0].expression.callee.body.body.find(n=>n.type==='ExpressionStatement'&&source.slice(n.start,n.end).startsWith('RM.push('));
let output='// Generated from worlds.js by extract-legacy-bots.mjs. Do not edit.\n';
for(const [name,node]of [...selected].sort((a,b)=>a[1].start-b[1].start))output+=(name==='ws'?'Object.assign(EG,Es);\n':'')+(node.type==='VariableDeclarator'?'const ':'')+source.slice(node.start,node.end)+';\n';
output+=source.slice(stationPush.start,stationPush.end)+'\n';
output+='Object.assign(oM.prototype,Si);\n';
output+='export {fY as FruitCutRun,cM as InterBallRun,xM as BairroRun,oM as SharedCraftRun,ws as streetHouses,EG as streetRooms,qD as streetKey,vD as streetCar};\n';
fs.writeFileSync(new URL('./legacy-bot-rules.mjs',import.meta.url),output);
console.log('Extracted',selected.size,'shared bindings',output.length,'characters');

const classic=fs.readFileSync(new URL('../classic-games.js',import.meta.url),'utf8');
const ca=parse(classic,{ecmaVersion:2022});
const wanted=new Set(['makeMath','rand','wordBanks','memoryBanks']);
let shared='// Generated from classic-games.js.\n';
for(const n of ca.body){if(n.type==='FunctionDeclaration'&&wanted.has(n.id.name))shared+=classic.slice(n.start,n.end)+'\n';if(n.type==='VariableDeclaration')for(const d of n.declarations)if(wanted.has(d.id.name))shared+='const '+classic.slice(d.start,d.end)+';\n';}
shared+='export {makeMath,wordBanks,memoryBanks};\n';
fs.writeFileSync(new URL('./classic-bot-rules.mjs',import.meta.url),shared);
