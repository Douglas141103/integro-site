const storage=(()=>{try{return window.parent!==window&&window.parent.BoxStorage||localStorage;}catch{return localStorage;}})();
import {Chess,names,icons,attacks,resultText} from './chess-core.js';
import {BoardScene} from './scene.js';
const $=id=>document.getElementById(id),key='reinos-duelo-v1';
let game=new Chess(),mode='ai',level='normal',animated=!matchMedia('(prefers-reduced-motion: reduce)').matches,sound=false,busy=false,thinking=false,selected=null,legal=[],pendingMode=null,pendingPromotion=null,worker=null,workerResolve=null,revision=0,toastTimer=null,scene=null;
try{const data=JSON.parse(storage.getItem(key)||'null');if(data){if(data.pgn)game.loadPgn(data.pgn);mode=data.mode==='local'?'local':'ai';level=['easy','normal','hard'].includes(data.level)?data.level:'normal';animated=data.animated!==false;sound=data.sound===true;}}catch{game=new Chess();}
function persist(){try{storage.setItem(key,JSON.stringify({pgn:game.pgn(),mode,level,animated,sound}));}catch{toast('Não foi possível salvar neste navegador. A partida continua normalmente.');}}
function toast(text){$('toast').textContent=text;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,3800);}
let audio;
function tone(freq,duration=.1,kind='sine',delay=0){if(!sound)return;try{audio??=new AudioContext();void audio.resume();const o=audio.createOscillator(),gain=audio.createGain(),t=audio.currentTime+delay;o.type=kind;o.frequency.setValueAtTime(freq,t);o.frequency.exponentialRampToValueAtTime(Math.max(40,freq*.6),t+duration);gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(.06,t+.01);gain.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(gain);gain.connect(audio.destination);o.start(t);o.stop(t+duration+.02);}catch{}}
function hitSound(type){tone(type==='b'?700:type==='r'?90:160,.24,type==='q'?'sine':'triangle');tone(450,.1,'sine',.1);}
function cancelWorker(){if(worker){worker.terminate();worker=null;}if(workerResolve){workerResolve(null);workerResolve=null;}thinking=false;}
function askComputer(){cancelWorker();return new Promise(resolve=>{workerResolve=resolve;try{worker=new Worker(new URL('./ai-worker.js',location.href),{type:'module'});const id=++revision;worker.onmessage=e=>{if(e.data.id!==id)return;const done=workerResolve;worker.terminate();worker=null;workerResolve=null;done?.(e.data.move||null);};worker.onerror=()=>{const done=workerResolve;worker?.terminate();worker=null;workerResolve=null;done?.(null);};worker.postMessage({id,fen:game.fen(),level});}catch{workerResolve=null;resolve(null);}});}
function checkSquare(){if(!game.isCheck())return null;for(const row of game.board())for(const p of row)if(p?.type==='k'&&p.color===game.turn())return p.square;return null;}
function highlights(){const history=game.history({verbose:true});scene?.mark(selected,legal,history.at(-1),checkSquare());}
function clearSelection(){selected=null;legal=[];highlights();}
function isHumanTurn(){return mode==='local'||game.turn()==='w';}
function render(){
 const turn=game.turn(),ending=resultText(game),history=game.history({verbose:true});
 $('aiMode').classList.toggle('active',mode==='ai');$('localMode').classList.toggle('active',mode==='local');$('aiMode').setAttribute('aria-pressed',String(mode==='ai'));$('localMode').setAttribute('aria-pressed',String(mode==='local'));$('difficultyRow').hidden=mode!=='ai';$('difficulty').value=level;$('animations').checked=animated;
 $('opponentSub').textContent=mode==='ai'?`Computador · ${{easy:'Aprendiz',normal:'Explorador',hard:'Estrategista'}[level]}`:'Jogador 2 · Peças pretas';$('playerSub').textContent=mode==='ai'?'Você · Peças brancas':'Jogador 1 · Peças brancas';
 $('turnChip').querySelector('span').textContent=ending?'Partida encerrada':busy?'Duelo em andamento':thinking?'Pensando…':turn==='w'?(mode==='ai'?'Sua vez':'Vez do Solar'):'Vez do Violeta';
 const inCheck=game.isCheck();$('turnChip').classList.toggle('in-check',inCheck);if(inCheck&&!ending&&!busy)$('turnChip').querySelector('span').textContent='Xeque · '+(turn==='w'?'Solar':'Violeta');$('statusIcon').textContent=ending?'♛':inCheck?'♚':thinking?'✦':icons[game.get(selected)?.type||'p'];
 $('statusEyebrow').textContent=ending?'UMA BATALHA PARA LEMBRAR':inCheck?'ATENÇÃO AO SEU REI':thinking?'ESTUDANDO O TABULEIRO':selected?`${names[game.get(selected)?.type]?.toUpperCase()} · ${selected.toUpperCase()}`:turn==='w'?'TURNO DO REINO SOLAR':'TURNO DO REINO VIOLETA';
 $('statusTitle').textContent=ending?ending.title:inCheck?'Seu rei está em xeque!':thinking?'Planejando o próximo lance…':selected?`${legal.length} movimentos possíveis.`:isHumanTurn()?'Qual será sua estratégia?':'O rival está pensando.';
 $('statusDetail').textContent=ending?ending.detail:inCheck?'Mova o rei, bloqueie o ataque ou capture a ameaça.':selected?'Toque em uma casa marcada para jogar.':'Cada pequeno passo pode mudar a partida.';
 $('boardHint').textContent=busy?'Aguarde o fim do duelo.':ending?'Partida encerrada. Comece uma nova aventura quando quiser.':thinking?'O computador está calculando.':selected?`${names[game.get(selected)?.type]} em ${selected}: escolha uma casa iluminada.`:'Escolha uma peça. As casas iluminadas mostram seus movimentos.';
 $('moveCount').textContent=String(history.length).padStart(2,'0');
 if(history.length){$('history').replaceChildren();for(let i=0;i<history.length;i+=2){const r=document.createElement('div');r.className='move-row';for(const text of [String(i/2+1)+'.',history[i].san,history[i+1]?.san||'…']){const s=document.createElement('span');s.textContent=text;r.append(s);}$('history').append(r);}$('history').scrollTop=$('history').scrollHeight;}
 else $('history').innerHTML='<div class="empty-history"><span>♟</span><p>Toda aventura começa<br>com um primeiro passo.</p></div>';
 for(const c of ['w','b']){$('captured'+c.toUpperCase()).textContent=history.filter(m=>m.color===c&&m.captured).map(m=>icons[m.captured]).join(' ')||'—';}
 for(const id of ['newBtn','aiMode','localMode','demoBtn','difficulty'])$(id).disabled=busy||!!pendingPromotion;
 $('demoBtn').disabled=busy||!!pendingPromotion||!scene;
 $('undoBtn').disabled=busy||!!pendingPromotion||!history.length;$('hintBtn').disabled=busy||thinking||!!pendingPromotion||!!ending||!isHumanTurn();
 $('soundBtn').setAttribute('aria-pressed',String(sound));$('soundBtn').setAttribute('aria-label',sound?'Desativar som':'Ativar som');$('soundBtn').querySelector('span').hidden=sound;
 $('quickUndo').disabled=$('undoBtn').disabled;$('quickHint').disabled=$('hintBtn').disabled;
 document.body.classList.toggle('is-busy',busy);renderAccessible();
}
function renderAccessible(){if($('accessibleBoard').hidden)return;const focus=document.activeElement?.dataset?.square;$('accessibleBoard').replaceChildren();for(let rank=8;rank>=1;rank--)for(let f=0;f<8;f++){const sq='abcdefgh'[f]+rank,p=game.get(sq),b=document.createElement('button');b.className=(f+rank)%2?'dark':'light';b.classList.toggle('legal',legal.some(m=>m.to===sq)||selected===sq);b.textContent=p?icons[p.type]:'·';b.dataset.square=sq;b.setAttribute('aria-label',`${sq}: ${p?`${names[p.type]} ${p.color==='w'?'branco':'preto'}`:'vazia'}${legal.some(m=>m.to===sq)?', destino permitido':''}`);b.onclick=()=>onSquare(sq);b.disabled=busy||thinking;$('accessibleBoard').append(b);}if(focus)$('accessibleBoard').querySelector(`[data-square="${focus}"]`)?.focus();}
async function onSquare(sq){
 if(busy||thinking||pendingPromotion||game.isGameOver()||!isHumanTurn())return;
 const moves=legal.filter(m=>m.to===sq);
 if(selected&&moves.length){if(moves.some(m=>m.promotion)){pendingPromotion={from:selected,to:sq};render();$('promotionDialog').showModal();return;}await move({from:selected,to:sq});return;}
 const piece=game.get(sq);if(piece?.color===game.turn()){if(selected===sq){clearSelection();render();return;}selected=sq;legal=game.moves({square:sq,verbose:true});tone(350,.055);if(!legal.length)toast('Essa peça não tem movimentos disponíveis agora.');}else{clearSelection();}highlights();render();
}
async function move(input){
 if(busy)return;let m;try{m=game.move(input);}catch{toast('Esse movimento não é permitido.');return;}
 busy=true;selected=null;legal=[];render();tone(260,.08);if(m.captured&&animated){$('duelTitle').textContent=attacks[m.piece][0];$('duelCaption').hidden=false;}
 try{await scene?.animateMove(m,{duel:animated});}finally{busy=false;$('duelCaption').hidden=true;scene?.setBoard(game);highlights();persist();render();}
 const result=resultText(game);if(result){$('resultTitle').textContent=result.title;$('resultDetail').textContent=result.detail;$('resultDialog').showModal();tone(500,.3);tone(750,.35,'sine',.2);return;}
 if(game.isCheck()){toast('Xeque! O rei precisa de proteção.');tone(180,.2);}
 await computerTurn();
}
async function computerTurn(){if(mode!=='ai'||game.turn()!=='b'||game.isGameOver()||busy)return;thinking=true;render();const fen=game.fen();const request=askComputer();thinking=true;render();const m=await request;if(fen!==game.fen()||mode!=='ai')return;thinking=false;if(m)await move(m);else{toast('O computador não pôde calcular. Tente desfazer e jogar novamente.');render();}}
function requestNew(nextMode=mode){if(busy)return;pendingMode=nextMode;if(!game.history().length){resetGame();return;}$('newDialog').showModal();}
function resetGame(){cancelWorker();revision++;game=new Chess();mode=pendingMode||mode;pendingMode=null;pendingPromotion=null;selected=null;legal=[];busy=false;scene?.setBoard(game);highlights();persist();render();for(const d of document.querySelectorAll('dialog[open]'))d.close();toast('Os reinos estão prontos. As brancas começam!');}
for(const b of document.querySelectorAll('.close-dialog,.close-action'))b.onclick=()=>b.closest('dialog').close();
for(const d of document.querySelectorAll('dialog'))d.addEventListener('click',e=>{if(e.target!==d)return;const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();});
$('helpBtn').onclick=()=>$('helpDialog').showModal();$('aiMode').onclick=()=>{if(mode!=='ai')requestNew('ai');};$('localMode').onclick=()=>{if(mode!=='local')requestNew('local');};$('newBtn').onclick=()=>requestNew();$('confirmNew').onclick=resetGame;$('playAgain').onclick=()=>{pendingMode=mode;resetGame();};
$('difficulty').onchange=e=>{level=e.target.value;persist();render();};$('animations').onchange=e=>{animated=e.target.checked;persist();};
$('undoBtn').onclick=()=>{if(busy)return;cancelWorker();revision++;game.undo();if(mode==='ai'&&game.turn()==='b')game.undo();clearSelection();scene?.setBoard(game);highlights();persist();render();toast('Lance desfeito. Pode escolher outro caminho.');};
$('hintBtn').onclick=async()=>{if(busy||thinking||!isHumanTurn())return;const fen=game.fen();const request=askComputer();thinking=true;render();const m=await request;thinking=false;if(fen!==game.fen())return;if(m){selected=m.from;legal=game.moves({square:selected,verbose:true});highlights();toast(`Uma ideia: ${names[game.get(m.from).type]} de ${m.from} para ${m.to}.`);}else toast('Não foi possível calcular uma dica agora.');render();};
$('quickUndo').onclick=()=>$('undoBtn').click();$('quickHint').onclick=()=>$('hintBtn').click();$('resetViewBtn').onclick=()=>scene?.resetView();
$('rotateBtn').onclick=()=>scene?.flip();$('viewBtn').onclick=()=>scene?.overhead();$('soundBtn').onclick=()=>{sound=!sound;persist();render();tone(520,.13);};
$('fullBtn').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{toast('Tela cheia indisponível neste navegador. Gire o aparelho para ampliar.');}};
$('accessibleBtn').onclick=()=>{$('accessibleBoard').hidden=!$('accessibleBoard').hidden;document.body.classList.toggle('accessible-mode',!$('accessibleBoard').hidden);$('accessibleBtn').textContent=$('accessibleBoard').hidden?'Tabuleiro acessível':'Ocultar tabuleiro acessível';renderAccessible();};
for(const type of ['q','r','b','n']){const b=document.createElement('button');b.innerHTML=`<span>${icons[type]}</span>${names[type]}`;b.onclick=async()=>{const p=pendingPromotion;pendingPromotion=null;$('promotionDialog').close();if(p)await move({...p,promotion:type});};$('promotionOptions').append(b);}
$('promotionDialog').addEventListener('close',()=>{pendingPromotion=null;render();});
$('demoBtn').onclick=()=>$('demoDialog').showModal();for(const type of ['p','n','b','r','q','k']){const b=document.createElement('button');b.innerHTML=`<span>${icons[type]}</span>${names[type]}`;b.title=attacks[type][1];b.onclick=async()=>{if(busy)return;cancelWorker();$('demoDialog').close();busy=true;render();$('duelTitle').textContent=attacks[type][0];$('duelCaption').hidden=false;try{await scene?.demo(type);}finally{scene?.setBoard(game);busy=false;highlights();$('duelCaption').hidden=true;render();void computerTurn();}};$('demoOptions').append(b);}
const mobileLayout=matchMedia('(max-width: 900px)'),sidebar=document.querySelector('.sidebar');
function placeSettings(){if(mobileLayout.matches)$('settingsContent').append(sidebar);else{$('settingsDialog').close();document.querySelector('.layout').append(sidebar);}}
mobileLayout.addEventListener('change',placeSettings);placeSettings();
$('settingsBtn').onclick=()=>$('settingsDialog').showModal();
for(const id of ['newBtn','demoBtn','hintBtn','undoBtn'])$(id).addEventListener('click',()=>{if($('settingsDialog').open)$('settingsDialog').close();});
try{scene=new BoardScene($('scene'),onSquare,hitSound);scene.setBoard(game);$('loading').hidden=true;highlights();}catch(e){document.body.classList.add('no-webgl');console.error(e);$('loading').innerHTML='<span class="load-knight">♞</span><p>O 3D não está disponível neste navegador.</p><p>Você pode jogar no tabuleiro acessível abaixo.</p>';$('accessibleBoard').hidden=false;$('demoBtn').disabled=true;}
render();void computerTurn();
