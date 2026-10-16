// Private local display: never send names or student IDs to multiplayer channels.
export async function loadBoxStudents(user,client,storage=localStorage){
 const {data:links,error}=await client.from('student_guardians').select('student_id').eq('guardian_profile_id',user.id);
 if(error)throw new Error('Não foi possível carregar o aluno vinculado. Tente novamente.');
 const ids=[...new Set((links||[]).map(x=>x.student_id))];
 let students=[];
 if(ids.length){const result=await client.from('students').select('id,full_name').in('id',ids).order('full_name');if(result.error)throw new Error('Não foi possível carregar o aluno vinculado. Tente novamente.');students=result.data||[];}
 let saved;try{saved=storage.getItem('box:'+user.id+':student')}catch{}
 const selected=students.find(s=>s.id===saved)||(students.length===1?students[0]:null);
 return {...user,boxStudents:students,boxStudent:selected};
}
export function playerName(user){return user.boxStudent?.full_name?.trim()||(user.boxStudents?.length?'Selecione o aluno':user.boxName||'Jogador');}
export function mountPlayerProfile(user,{doc=document,win=window,storage=localStorage}={}){
 const label=doc.getElementById('boxUserName');label.textContent=playerName(user);
 win.BoxPlayer={studentId:user.boxStudent?.id||null};
 if((user.boxStudents?.length||0)<2)return;
 const select=doc.createElement('select');select.id='boxStudentSelect';select.setAttribute('aria-label','Quem está jogando?');
 const placeholder=doc.createElement('option');placeholder.value='';placeholder.textContent='Quem está jogando?';select.append(placeholder);
 for(const student of user.boxStudents){const option=doc.createElement('option');option.value=student.id;option.textContent=student.full_name;select.append(option);}
 select.value=user.boxStudent?.id||'';label.parentElement.append(select);
 select.onchange=async()=>{select.disabled=true;try{await win.BoxMultiplayer?.disconnect();user.boxStudent=user.boxStudents.find(s=>s.id===select.value)||null;win.BoxPlayer.studentId=user.boxStudent?.id||null;label.textContent=playerName(user);try{storage.setItem('box:'+user.id+':student',win.BoxPlayer.studentId||'')}catch{}win.dispatchEvent(new win.Event('box-player-change'));}finally{select.disabled=false;}};
}
