import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';import {JSDOM} from 'jsdom';
const code=await readFile(new URL('../integro-box/player-profile.js',import.meta.url),'utf8');const {loadBoxStudents,playerName,mountPlayerProfile}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
test('student replaces guardian, multi-student selection is explicit, no guardian fallback',async()=>{
 const user={id:'family',boxProfile:{full_name:'Nome do responsável'}};
 const students=[{id:'a',full_name:'Ana <img src=x>'},{id:'b',full_name:'Bruno'}];
 const client={from:table=>table==='student_guardians'?{select:()=>({eq:async()=>({data:students.map(s=>({student_id:s.id}))})})}:{select:()=>({in:()=>({order:async()=>({data:students})})})}};
 const storage={getItem:()=>null,setItem(){}};const loaded=await loadBoxStudents(user,client,storage);assert.equal(loaded.boxStudent,null);assert.equal(playerName(loaded),'Selecione o aluno');assert.equal(playerName(user),'Jogador');
 const dom=new JSDOM('<div><strong id="boxUserName"></strong></div>');let left=0;dom.window.BoxMultiplayer={disconnect:async()=>left++};
 mountPlayerProfile(loaded,{doc:dom.window.document,win:dom.window,storage});const select=dom.window.document.querySelector('select');select.value='a';await select.onchange();
 assert.equal(dom.window.document.querySelector('#boxUserName').textContent,'Ana <img src=x>');assert.equal(dom.window.document.querySelector('img'),null);assert.equal(dom.window.BoxPlayer.studentId,'a');assert.equal(left,1);dom.window.close();
});
