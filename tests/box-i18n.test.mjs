import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { JSDOM } from 'jsdom';
const root=new URL('../',import.meta.url);
const read=p=>fs.readFileSync(new URL(p,root),'utf8');
const runtime=read('integro-box/i18n.js');
const dictionaries=Object.fromEntries(['en','de'].map(l=>[l,JSON.parse(read('integro-box/locales/'+l+'.json'))]));
const tick=()=>new Promise(r=>setTimeout(r,40));
function setup(html='<header><div class="head"></div></header><main></main>', stored='pt'){
 const dom=new JSDOM('<!doctype html><html lang="pt-BR"><body>'+html+'</body></html>',{url:'https://www.institutointegro.com.br/integro-box/jogar.html',runScripts:'outside-only',pretendToBeVisual:true});
 const w=dom.window;
 w.localStorage.setItem('integro-box-language-v1',stored);
 w.fetch=async url=>({ok:true,json:async()=>dictionaries[url.includes('/de.json')?'de':'en']});
 w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};w.HTMLDialogElement.prototype.close=function(){this.open=false;};
 w.CanvasRenderingContext2D=function(){};
 w.CanvasRenderingContext2D.prototype.fillText=function(text){this.drawn=text;};
 w.CanvasRenderingContext2D.prototype.measureText=function(text){return {width:text.length};};
 w.eval(runtime);return dom;
}
test('selected language persists and translated DOM reverses without changing names, answers or form values',async()=>{
 const dom=setup('<header><div class="head"></div></header><main><h1>Ranking do Pegue o Ovo</h1><button id="play" title="Jogar Pegue o Ovo">Jogar agora</button><select><option>Todos</option></select><strong id="boxUserName">Sol</strong><span translate="no">Curral</span><div class="memory">gato</div><input value="Loja" placeholder="Buscar um jogo…"><div class="egg-ranking-table"><table><tbody><tr><td>1º</td><td>Sol<span class="egg-ranking-you">Você</span></td></tr></tbody></table></div></main>');
 const w=dom.window,d=w.document;await w.BoxI18n.ready;
 let clicks=0;d.querySelector('#play').onclick=()=>clicks++;
 await w.BoxI18n.setLanguage('en');await tick();
 assert.equal(d.documentElement.lang,'en-GB');assert.equal(d.querySelector('h1').textContent,'Catch the Egg leaderboard');
 assert.equal(d.querySelector('#boxUserName').textContent,'Sol');assert.equal(d.querySelector('[translate=no]').textContent,'Curral');assert.equal(d.querySelector('.memory').textContent,'gato');assert.equal(d.querySelector('input').value,'Loja');assert.equal(d.querySelector('input').placeholder,'Search for a game…');
 assert.equal(d.querySelector('option').value,'Todos');assert.equal(d.querySelector('option').textContent,'All');
 assert.match(d.querySelector('#play').title,/Catch the Egg/);d.querySelector('#play').click();assert.equal(clicks,1);
 await w.BoxI18n.setLanguage('de');await tick();assert.equal(d.documentElement.lang,'de-DE');assert.equal(w.localStorage.getItem('integro-box-language-v1'),'de');
 await w.BoxI18n.setLanguage('pt');await tick();assert.equal(d.querySelector('h1').textContent,'Ranking do Pegue o Ovo');assert.equal(d.querySelector('#play').textContent,'Jogar agora');assert.equal(d.querySelector('option').textContent,'Todos');dom.window.close();
});
test('dynamic game updates, templates, numbers and canvas labels use selected locale',async()=>{
 const dom=setup(undefined,'en'),w=dom.window;await w.BoxI18n.ready;
 const p=w.document.createElement('p');p.textContent='Atualizar ranking';w.document.querySelector('main').append(p);await tick();assert.equal(p.textContent,w.BoxI18n.t('Atualizar ranking'));
 p.textContent='Voltar ao jogo';await tick();assert.equal(p.textContent,w.BoxI18n.t('Voltar ao jogo'));
 assert.equal(w.BoxI18n.t('19.424.455'),'19,424,455');assert.equal(w.BoxI18n.t('2 pessoas online'),'2 people online');
 assert.equal(w.BoxI18n.t('Jogar Pegue o Ovo'),'Play Catch the Egg');
 const ctx=new w.CanvasRenderingContext2D();ctx.fillText('TREINO RECOMENDADO',0,0);assert.equal(ctx.drawn,w.BoxI18n.t('TREINO RECOMENDADO'));assert.equal(ctx.measureText('Loja').width,w.BoxI18n.t('Loja').length);
 await w.BoxI18n.setLanguage('pt');assert.equal(p.textContent,'Voltar ao jogo');dom.window.close();
});
test('catalog covers change and restore; dynamically inserted covers localize too',async()=>{
 const original='./assets/catalog-v1/pegue-o-ovo.webp';const dom=setup('<header><div class="head"></div></header><main><img src="'+original+'" alt="Pegue o Ovo"></main>');const w=dom.window;await w.BoxI18n.ready;
 await w.BoxI18n.setLanguage('de');const img=w.document.querySelector('img');assert.match(img.src,/pegue-o-ovo-de\.svg/);assert.equal(img.alt,'Schnapp das Ei');
 const second=w.document.createElement('img');second.src='./assets/catalog-v1/meu-bairro.webp';w.document.querySelector('main').append(second);await tick();assert.match(second.src,/meu-bairro-de\.svg/);
 await w.BoxI18n.setLanguage('pt');assert.equal(img.getAttribute('src'),original);assert.equal(img.alt,'Pegue o Ovo');dom.window.close();
});
test('failed language loading preserves the working language and stored preference',async()=>{
 const dom=setup(),w=dom.window;await w.BoxI18n.ready;w.fetch=async()=>({ok:false});await assert.rejects(w.BoxI18n.setLanguage('de'));assert.equal(w.BoxI18n.language,'pt');assert.equal(w.localStorage.getItem('integro-box-language-v1'),'pt');dom.window.close();
});
test('catalog search accepts translated titles and retains functional category IDs',async()=>{
 const html=read('integro-box/jogar.html');const dom=setup();const w=dom.window;w.document.body.innerHTML=new JSDOM(html).window.document.body.innerHTML;
 await w.BoxI18n.ready;w.eval(read('integro-box/catalog.js'));await w.BoxI18n.setLanguage('en');await tick();
 const input=w.document.querySelector('.catalog-search');input.value='Catch the Egg';input.dispatchEvent(new w.Event('input'));await tick();
 const visible=[...w.document.querySelectorAll('.catalog-card')].filter(e=>!e.hidden);assert.equal(visible.length,1);assert.equal(visible[0].dataset.catalogGame,'pegue-o-ovo');
 assert.equal(w.document.querySelector('[data-category="Todos"]').textContent,'All');
 w.BoxI18n.open();assert.equal(w.document.querySelector('#boxLanguageDialog').open,true);assert.equal(w.document.querySelectorAll('.box-language-option').length,3);await tick();dom.window.close();
});
test('all locale templates keep placeholder identity and localized SVG covers are self-contained',()=>{
 for(const data of Object.values(dictionaries))for(const [k,v]of Object.entries(data))assert.deepEqual((k.match(/\{\d+\}/g)||[]).sort(),(v.match(/\{\d+\}/g)||[]).sort(),k);
 for(const id of ['pegue-o-ovo','meu-bairro','rua-das-descobertas','torre-da-matematica','ponte-das-palavras','rota-do-robo','memoria-em-ingles'])for(const lang of ['en','de']){
  const svg=read('integro-box/assets/catalog-i18n/'+id+'-'+lang+'.svg');assert.match(svg,/data:image\/webp;base64,/);assert.match(svg,/<text/);assert.doesNotMatch(svg,/<script|onload=/);assert.match(svg,/clipPath/);
 }
});
test('translated word puzzles remain solvable and memory pairs retain both learning languages',async()=>{
 for(const lang of ['pt','en','de']){
  const dom=setup(),w=dom.window;const original=new JSDOM(read('integro-box/jogar.html'));
  w.document.body.innerHTML=original.window.document.body.innerHTML;original.window.close();w.scrollTo=()=>{};
  await w.BoxI18n.ready;await w.BoxI18n.setLanguage(lang);
  w.eval(read('integro-box/classic-games.js')+'\nwindow.__vocabularyTest={word:()=>wordItems[round].word,bank:l=>localizedWordBank(l),memory:()=>tiles};');
  for(const level of [0,1,2])assert.equal(w.__vocabularyTest.bank(level).length,8);
  w.document.querySelector('[data-game="words"]').click();await tick();
  const word=w.__vocabularyTest.word();for(const letter of word.toUpperCase()){
   const button=[...w.document.querySelectorAll('[data-letter]')].find(b=>!b.disabled&&b.textContent===letter);assert.ok(button,'answer letter exists: '+letter);button.click();
  }
  w.document.querySelector('#checkWord').click();await tick();assert.equal(w.document.querySelector('#feedback [translate=no]').textContent,word.toUpperCase());assert.equal(w.document.querySelector('#next').classList.contains('hidden'),false);
  w.document.querySelector('[data-game="memory"]').click();await tick();
  const cards=w.__vocabularyTest.memory();const pair=cards.map((t,i)=>({t,i})).filter(x=>x.t.pair===0);assert.equal(pair.length,2);
  for(const item of pair)w.document.querySelector('[data-tile="'+item.i+'"]').click();await tick();assert.equal(w.document.querySelectorAll('.tile.matched').length,2);
  assert.match(w.document.querySelector('#feedback [translate=no]').textContent,lang==='de'?/Katze/:/gato/);dom.window.close();
 }
});
