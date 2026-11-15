import {Chess} from 'chess.js';
export {Chess};
export const names={p:'Peão',n:'Cavalo',b:'Bispo',r:'Torre',q:'Rainha',k:'Rei'};
export const icons={p:'♟',n:'♞',b:'♝',r:'♜',q:'♛',k:'♚'};
export const attacks={p:['Hora da marretada!','Um pequeno soldado. Uma grande marreta.'],n:['Salto de batalha!','Um salto heroico e um coice nada discreto.'],b:['Abracadabra!','O cajado transforma o rival em uma nuvem de estrelas.'],r:['Fogo de confete!','Prepare o canhão: vem uma bolada por aí.'],q:['Vendaval real!','Uma pirueta e o adversário sai voando.'],k:['Pelo meu reino!','O rei bate o cetro e faz o chão tremer.']};
export function capturedSquare(move){return move.flags.includes('e')?move.to[0]+move.from[1]:move.captured?move.to:null;}
export function resultText(game){
 if(game.isCheckmate())return {title:`Vitória do Reino ${game.turn()==='w'?'Violeta':'Solar'}!`,detail:'Xeque-mate! O rei não tem mais nenhuma saída.'};
 if(game.isStalemate())return {title:'Empate por afogamento',detail:'O jogador da vez não tem lances legais, mas seu rei não está em xeque.'};
 if(game.isThreefoldRepetition())return {title:'Empate por repetição',detail:'A mesma posição apareceu três vezes.'};
 if(game.isInsufficientMaterial())return {title:'Empate por material',detail:'Não há peças suficientes para dar xeque-mate.'};
 if(game.isDraw())return {title:'A paz venceu!',detail:'Empate pela regra dos 50 lances.'};
 return null;
}
const values={p:100,n:320,b:335,r:500,q:900,k:0};
function evaluate(g){let score=0;for(const row of g.board())for(const p of row){if(!p)continue;const file=p.square.charCodeAt(0)-97,rank=Number(p.square[1])-1,progress=p.color==='w'?rank:7-rank;const center=3.5-Math.abs(file-3.5)+3.5-Math.abs(rank-3.5);score+=(p.color==='w'?1:-1)*(values[p.type]+(p.type==='p'?progress*8+center*2:p.type==='k'?-center*3:center*6));}return score*(g.turn()==='w'?1:-1);}
export function chooseMove(fen,level='normal',budget=850){
 const g=new Chess(fen),start=Date.now();let nodes=0;
 const ordered=()=>g.moves({verbose:true}).sort((a,b)=>((values[b.captured]||0)*10-values[b.piece]+(b.promotion?800:0)) - ((values[a.captured]||0)*10-values[a.piece]+(a.promotion?800:0)));
 function search(depth,alpha,beta,ply){nodes++;if(g.isCheckmate())return -100000+ply;if(g.isDraw())return 0;if(depth===0)return evaluate(g);if(nodes%128===0&&Date.now()-start>budget)throw new Error('budget');let best=-Infinity;for(const m of ordered()){g.move(m);let score;try{score=-search(depth-1,-beta,-alpha,ply+1);}finally{g.undo();}best=Math.max(best,score);alpha=Math.max(alpha,score);if(alpha>=beta)break;}return best;}
 const moves=ordered();if(!moves.length)return null;let best=moves[0];
 for(let depth=1;depth<=(level==='easy'?1:level==='hard'?3:2);depth++){let pass=best,score=-Infinity;try{for(const m of moves){g.move(m);let v;try{v=-search(depth-1,-Infinity,Infinity,1);}finally{g.undo();}if(v>score){score=v;pass=m;}}best=pass;}catch{break;}}
 return {from:best.from,to:best.to,...(best.promotion?{promotion:best.promotion}:{})};
}
