const types={pdf:'application/pdf',jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',webp:'image/webp',txt:'text/plain',doc:'application/msword',docx:'application/vnd.openxmlformats-officedocument.wordprocessingml.document',xls:'application/vnd.ms-excel',xlsx:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',ppt:'application/vnd.ms-powerpoint',pptx:'application/vnd.openxmlformats-officedocument.presentationml.presentation'};
export function classroomFile(file){
 const extension=file.name.split('.').pop().toLowerCase(),type=types[extension];
 if(!type)throw Error('Use PDF, imagem, Word, Excel, PowerPoint ou TXT.');
 if(file.size<=0||file.size>20*1024*1024)throw Error('Cada arquivo deve ter conteúdo e até 20 MB.');
 const name=file.name.normalize('NFKC').replace(/[^\p{L}\p{N}. _()-]/gu,'_').slice(-160);
 return {type,name};
}
export function mountRoomFiles(root,{db,room,download,feedback}){
 const $=id=>root.querySelector('#'+id),bucket=db.storage.from('online-room-files'),lesson=room.context.lesson_id;
 let disposed=false,loading=false,signature='',busy=false;
 $('live-upload-form').hidden=!room.self.isTeacher;
 async function refresh(){
  if(disposed||loading)return;loading=true;
  try{const {data,error}=await bucket.list(lesson,{limit:100,sortBy:{column:'created_at',order:'desc'}});if(error)throw error;if(disposed)return;
   const files=(data||[]).filter(f=>f.id),next=files.map(f=>f.id).join();$('live-file-count').textContent=String(files.length);
   if(signature===next&&$('live-file-list').childNodes.length)return;signature=next;
   const list=$('live-file-list');list.replaceChildren();
   if(!files.length){const p=document.createElement('p');p.className='muted';p.textContent='Os arquivos enviados pelo professor aparecerão aqui.';list.append(p);}
   for(const file of files){const row=document.createElement('article');row.className='live-file';const name=file.name.slice(37)||file.name;
    const label=document.createElement('strong');label.textContent=name;const size=document.createElement('small');size.textContent=`${((file.metadata?.size||0)/1024/1024).toFixed(1)} MB`;
    const button=document.createElement('button');button.className='secondary';button.textContent='Baixar';button.setAttribute('aria-label','Baixar '+name);
    button.onclick=async()=>{button.disabled=true;try{const {data,error}=await bucket.download(`${lesson}/${file.name}`);if(error)throw error;if(!disposed)download(data,name);}catch(e){if(!disposed)feedback(e.message,true);}finally{button.disabled=false;}};
    row.append(label,size,button);
    if(room.self.isTeacher){const remove=document.createElement('button');remove.className='secondary';remove.textContent='Excluir';remove.onclick=async()=>{if(!globalThis.confirm(`Excluir o arquivo “${name}” da aula?`))return;remove.disabled=true;try{const {error}=await bucket.remove([`${lesson}/${file.name}`]);if(error)throw error;await refresh();}catch(e){feedback(e.message,true);}finally{remove.disabled=false;}};row.append(remove);}
    list.append(row);
   }
  }catch(e){if(!disposed)$('live-file-status').textContent='Não foi possível atualizar os arquivos. '+e.message;}
  finally{loading=false;}
 }
 $('live-upload-form').onsubmit=async event=>{
  event.preventDefault();if(busy||!room.self.isTeacher||disposed)return;
  busy=true;const button=$('live-file-send');button.disabled=true;
  try{const files=[...$('live-file-input').files];if(!files.length||files.length>5)throw Error('Escolha de 1 a 5 arquivos por envio.');
   const checked=files.map(classroomFile);let sent=0;
   for(let i=0;i<files.length;i++){
    if(disposed||room.closed)break;
    $('live-file-status').textContent=`Enviando ${i+1} de ${files.length}…`;
    const {error}=await bucket.upload(`${lesson}/${crypto.randomUUID()}-${checked[i].name}`,files[i],{contentType:checked[i].type,upsert:false});
    if(error)throw Error(`${sent} arquivo(s) enviado(s). ${error.message}`);sent++;
   }
   if(!disposed){$('live-file-input').value='';$('live-file-status').textContent=`${sent} arquivo(s) enviado(s) para a turma.`;await refresh();}
  }catch(e){if(!disposed)$('live-file-status').textContent=e.message;}
  finally{busy=false;if(!disposed)button.disabled=false;}
 };
 $('live-files-refresh').onclick=refresh;refresh();const timer=setInterval(refresh,8000);
 return ()=>{disposed=true;clearInterval(timer);$('live-upload-form').onsubmit=null;$('live-files-refresh').onclick=null;$('live-file-input').value='';$('live-file-list').replaceChildren();$('live-file-status').textContent='';$('live-file-send').disabled=false;};
}
