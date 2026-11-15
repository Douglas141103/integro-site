import {chooseMove} from './chess-core.js';
self.onmessage=({data})=>{try{self.postMessage({id:data.id,move:chooseMove(data.fen,data.level)});}catch{self.postMessage({id:data.id,error:true});}};
