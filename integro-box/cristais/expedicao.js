
(() => {
'use strict';

const canvas = document.getElementById('game');
const gameWrap = document.getElementById('gameWrap');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled=true;
const W = 1280, H = 720;
const lumiSheet = new Image();
lumiSheet.decoding = 'async';
lumiSheet.src = './lumi-exploradora.webp';
let scenery;
let sceneryCity;
let enemyAtlas, enemyAtlasCity;
function selectEnemyAtlas(city) {
  if (city === enemyAtlasCity && (!enemyAtlas.complete || enemyAtlas.naturalWidth)) return;
  enemyAtlasCity = city;
  enemyAtlas = new Image();
  enemyAtlas.decoding = 'async';
  enemyAtlas.src = './viloes/' + city + '.webp';
}
function selectScenery(city) {
  selectEnemyAtlas(city);
  if (city === sceneryCity && scenery && (!scenery.complete || scenery.naturalWidth)) return;
  sceneryCity = city;
  scenery = new Image();
  scenery.decoding = 'async';
  scenery.src = city === 'manaus' ? './manaus.webp' : './cenarios/' + city + '.webp';
}
const $ = id => document.getElementById(id);
const ui = {
  intro: $('introScreen'), introCanvas: $('introCanvas'), introStart: $('introStart'), introSkip: $('introSkip'),
  title: $('titleScreen'), levels: $('levelScreen'), how: $('howScreen'), pause: $('pauseScreen'), result: $('resultScreen'),
  touch: $('touchControls'), top: $('topButtons'), toast: $('toast'), levelGrid: $('levelGrid'), worldMap: $('worldMap'), mapViewport: $('worldMapViewport'),
  resultTitle: $('resultTitle'), resultText: $('resultText'), nextBtn: $('nextBtn'), soundBtn: $('soundBtn'),
  topFullBtn: $('topFullBtn'), fullBtn: $('fullBtn'),
  missileBtn: $('missileBtn'), fireBtn: $('fireBtn'), flyBtn: $('flyBtn'), invisBtn: $('invisBtn')
};

const state = {
  screen:'intro', levelIndex:0, level:null, player:null, cameraX:0,
  time:0, last:performance.now(), shake:0, flash:0, toastTimer:0,
  coins:0, crystals:0, score:0, audio:true, locationCard:0, nightTime:0
};

let stickAxis = 0;
const controls = {
  left:false,right:false,jump:false,jumpPressed:false,
  missile:false,missilePressed:false,fire:false,firePressed:false,
  fly:false,invisible:false,invisiblePressed:false
};

/* --------------------------------------------------------------------------
   POLY WORLD — camada WebGL leve, inspirada no renderizador do Múltiplo Run.
   Toda forma é montada com triângulos; o Canvas 2D antigo permanece de fallback.
   -------------------------------------------------------------------------- */
const polyCanvas=$('polyWorld');
const colorRGB=value=>{const s=String(value||'#000');if(s.startsWith('rgb')){const q=s.match(/[\d.]+/g)||[0,0,0];return[q[0]/255,q[1]/255,q[2]/255];}const v=parseInt(s.replace('#','').slice(0,6),16)||0;return[(v>>16&255)/255,(v>>8&255)/255,(v&255)/255];};
const shadeHex=(value,amount=0)=>{const source=String(value||'#000'),[r,g,b]=colorRGB(source),f=x=>Math.max(0,Math.min(255,Math.round((x*255)+(amount>=0?(255-x*255)*amount:x*255*amount)))),alpha=source.startsWith('rgba')?Number((source.match(/[\d.]+/g)||[])[3]||1):1;return alpha<1?`rgba(${f(r)},${f(g)},${f(b)},${alpha})`:`rgb(${f(r)},${f(g)},${f(b)})`;};
const pmul=(a,b)=>{const o=new Float32Array(16);for(let c=0;c<4;c++)for(let r=0;r<4;r++){let s=0;for(let k=0;k<4;k++)s+=a[k*4+r]*b[c*4+k];o[c*4+r]=s;}return o;};
const ppersp=(fov,asp,n,f)=>{const q=1/Math.tan(fov/2),nf=1/(n-f);return new Float32Array([q/asp,0,0,0,0,q,0,0,0,0,(f+n)*nf,-1,0,0,2*f*n*nf,0]);};
const plook=(eye,target)=>{let zx=eye[0]-target[0],zy=eye[1]-target[1],zz=eye[2]-target[2],zl=Math.hypot(zx,zy,zz)||1;zx/=zl;zy/=zl;zz/=zl;let xx=zz,xz=-zx,xl=Math.hypot(xx,xz)||1;xx/=xl;xz/=xl;const yx=zy*xz,yz=zy*xx,yy=zz*xx-zx*xz;return new Float32Array([xx,yx,zx,0,0,yy,zy,0,xz,yz,zz,0,-(xx*eye[0]+xz*eye[2]),-(yx*eye[0]+yy*eye[1]+yz*eye[2]),-(zx*eye[0]+zy*eye[1]+zz*eye[2]),1]);};
const pmodel=(x,y,z,sx,sy,sz,ry=0,rx=0)=>{const cy=Math.cos(ry),syy=Math.sin(ry),cx=Math.cos(rx),sxx=Math.sin(rx);return new Float32Array([cy*sx,syy*sxx*sx,-syy*cx*sx,0,0,cx*sy,sxx*sy,0,syy*sz,-cy*sxx*sz,cy*cx*sz,0,x,y,z,1]);};

class PolyWorldRenderer{
  constructor(canvas){this.canvas=canvas;this.ok=false;try{const gl=canvas.getContext('webgl2',{alpha:false,antialias:true,depth:true,powerPreference:'high-performance'})||canvas.getContext('webgl',{alpha:false,antialias:true,depth:true,powerPreference:'high-performance'});if(!gl)return;this.gl=gl;const vs=`attribute vec3 aP;attribute vec3 aN;uniform mat4 uMVP;uniform mat4 uM;varying float vL;varying float vR;varying float vD;void main(){vec4 w=uM*vec4(aP,1.0);vec3 n=normalize(mat3(uM)*aN);float l=.30+max(dot(n,normalize(vec3(-.45,.82,.52))),0.0)*.70;vL=floor(l*5.0+.5)/5.0;vR=pow(1.0-abs(dot(n,normalize(vec3(.0,.18,1.0)))),2.0);vD=clamp((-w.z-18.0)/72.0,0.0,1.0);gl_Position=uMVP*vec4(aP,1.0);}`,fs=`precision mediump float;uniform vec3 uC;uniform vec3 uFog;varying float vL;varying float vR;varying float vD;void main(){vec3 c=uC*(vL+vR*.16);gl_FragColor=vec4(mix(c,uFog,vD*.58),1.0);}`,shader=(type,src)=>{const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s;};this.program=gl.createProgram();gl.attachShader(this.program,shader(gl.VERTEX_SHADER,vs));gl.attachShader(this.program,shader(gl.FRAGMENT_SHADER,fs));gl.linkProgram(this.program);if(!gl.getProgramParameter(this.program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(this.program));
      const all=[],meshes={},add=(name,data)=>{meshes[name]={start:all.length/6,count:data.length/6};all.push(...data);},tri=(v,n,a,b,c)=>{for(const p of[a,b,c])v.push(...p,...n);};
      {const v=[],p=[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]],f=[[0,3,2,1,[0,0,-1]],[4,5,6,7,[0,0,1]],[0,4,7,3,[-1,0,0]],[1,2,6,5,[1,0,0]],[3,7,6,2,[0,1,0]],[0,1,5,4,[0,-1,0]]];for(const q of f){tri(v,q[4],p[q[0]],p[q[1]],p[q[2]]);tri(v,q[4],p[q[0]],p[q[2]],p[q[3]]);}add('box',v);}
      {const v=[],top=[0,1.4,0],b=[[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1]];tri(v,[0,-1,0],b[0],b[2],b[1]);tri(v,[0,-1,0],b[0],b[3],b[2]);for(let i=0;i<4;i++){const a=b[i],c=b[(i+1)%4],nx=(a[0]+c[0])*.5,nz=(a[2]+c[2])*.5,l=Math.hypot(nx,.7,nz);tri(v,[nx/l,.7/l,nz/l],a,c,top);}add('pyramid',v);}
      {const v=[],N=10;for(let i=0;i<N;i++){const a=i*Math.PI*2/N,b=(i+1)*Math.PI*2/N,p0=[Math.cos(a),-1,Math.sin(a)],p1=[Math.cos(b),-1,Math.sin(b)],p2=[Math.cos(b),1,Math.sin(b)],p3=[Math.cos(a),1,Math.sin(a)],n=[Math.cos((a+b)/2),0,Math.sin((a+b)/2)];tri(v,n,p0,p1,p2);tri(v,n,p0,p2,p3);tri(v,[0,1,0],[0,1,0],p3,p2);tri(v,[0,-1,0],[0,-1,0],p1,p0);}add('cylinder',v);}
      {const v=[],N=8,top=[0,1.45,0],bottom=[0,-1.45,0];for(let i=0;i<N;i++){const a=i*Math.PI*2/N,b=(i+1)*Math.PI*2/N,p0=[Math.cos(a),0,Math.sin(a)],p1=[Math.cos(b),0,Math.sin(b)],n=[Math.cos((a+b)/2),.65,Math.sin((a+b)/2)],m=[Math.cos((a+b)/2),-.65,Math.sin((a+b)/2)];tri(v,n,p0,p1,top);tri(v,m,p1,p0,bottom);}add('diamond',v);}
      this.meshes=meshes;this.buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,this.buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(all),gl.STATIC_DRAW);this.aP=gl.getAttribLocation(this.program,'aP');this.aN=gl.getAttribLocation(this.program,'aN');this.uMVP=gl.getUniformLocation(this.program,'uMVP');this.uM=gl.getUniformLocation(this.program,'uM');this.uC=gl.getUniformLocation(this.program,'uC');this.uFog=gl.getUniformLocation(this.program,'uFog');gl.enable(gl.DEPTH_TEST);gl.enable(gl.CULL_FACE);gl.cullFace(gl.BACK);this.ok=true;
    }catch(e){console.warn('Poly World indisponível; usando o cenário Canvas.',e);}}
  begin(theme,camera,time){const gl=this.gl,[r,g,b]=colorRGB(theme.sky1);gl.viewport(0,0,this.canvas.width,this.canvas.height);gl.clearColor(r*.58,g*.68,b*.76,1);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.useProgram(this.program);gl.bindBuffer(gl.ARRAY_BUFFER,this.buffer);gl.enableVertexAttribArray(this.aP);gl.enableVertexAttribArray(this.aN);gl.vertexAttribPointer(this.aP,3,gl.FLOAT,false,24,0);gl.vertexAttribPointer(this.aN,3,gl.FLOAT,false,24,12);gl.uniform3fv(this.uFog,colorRGB(theme.sky2));const drift=Math.sin(camera*.0016)*1.2;this.vp=pmul(ppersp(Math.PI/3.35,W/H,.1,180),plook([drift,8.2,19],[drift*.15,3.3,-34]));this.time=time;}
  mesh(name,x,y,z,sx,sy,sz,color,ry=0,rx=0){const gl=this.gl,m=pmodel(x,y,z,sx,sy,sz,ry,rx),q=this.meshes[name];gl.uniformMatrix4fv(this.uM,false,m);gl.uniformMatrix4fv(this.uMVP,false,pmul(this.vp,m));gl.uniform3fv(this.uC,colorRGB(color));gl.drawArrays(gl.TRIANGLES,q.start,q.count);}
  box(...a){this.mesh('box',...a);} pyramid(...a){this.mesh('pyramid',...a);} cylinder(...a){this.mesh('cylinder',...a);} diamond(...a){this.mesh('diamond',...a);}
  tree(x,z,theme,s=1){this.cylinder(x,1.15*s,z,.18*s,1.15*s,.18*s,'#69442e');this.diamond(x,3*s,z,1.35*s,1.35*s,1.35*s,theme.mid);this.diamond(x-.65*s,2.75*s,z+.15,.8*s,.8*s,.8*s,theme.ground);}
  landmark(th,x,z){const a=th.accent,mid=th.mid,far=th.far,white='#eaf3ed',gold='#e1b746',red='#b9463f';switch(th.id){
    case'manaus':this.box(x,1.2,z,4.2,1.2,1.7,'#cf6b70');this.box(x,2.55,z,2.7,.18,1.2,'#ead7ae');this.cylinder(x,3.35,z,1.2,.55,1.2,'#318978');this.diamond(x,4.2,z,1.25,.55,1.25,'#e2c64c');break;
    case'rio':this.pyramid(x-1.4,1.3,z,3.3,2.6,2.2,far);this.pyramid(x+1.4,1.55,z,3,3.1,2.1,mid);this.cylinder(x+1.4,4.35,z,.18,.75,.18,white);this.box(x+1.4,4.72,z,.75,.1,.12,white);break;
    case'saopaulo':this.box(x,1.7,z,4.1,1.45,.42,'#b9d0d4');this.box(x-3.8,1.65,z,.2,1.8,.5,'#d43a47');this.box(x+3.8,1.65,z,.2,1.8,.5,'#d43a47');this.box(x,3.2,z,4.2,.18,.5,'#d43a47');break;
    case'mexicocity':this.cylinder(x,2.1,z,.5,2.1,.5,'#bdad89');this.box(x,.35,z,1.5,.35,1.1,'#8e7d68');this.diamond(x,4.8,z,.55,.7,.55,gold);break;
    case'cancun':for(let i=0;i<5;i++)this.box(x,0.28+i*.38,z,3.2-i*.45,.2,2.2-i*.3,i%2?'#b68d58':'#d5b576');break;
    case'oaxaca':this.box(x,1,z,3.8,1,1.3,'#d4ae79');for(const q of[-2.8,2.8]){this.box(x+q,1.3,z,.7,1.3,.7,'#d8b47e');this.pyramid(x+q,2.9,z,.85,.7,.85,'#ba8d62');}this.pyramid(x,2.3,z,1.7,.8,1.1,'#c59667');break;
    case'newyork':this.box(x,1,z,2.3,1,1.5,'#887765');this.cylinder(x,2.6,z,.45,1.45,.45,'#65a386');this.diamond(x,4.3,z,.5,.55,.5,'#65a386');this.diamond(x,5.05,z,.2,.5,.2,gold);break;
    case'losangeles':this.box(x,.7,z,4.4,.7,1.4,white);this.cylinder(x,1.85,z,1.2,.65,1.2,'#678a89');for(const q of[-2.8,2.8])this.cylinder(x+q,1.15,z,.7,.4,.7,'#678a89');break;
    case'hollywood':for(let i=-4;i<=4;i++)this.box(x+i*.85,2.2+(i%2)*.12,z,.3,.85,.22,white);this.pyramid(x,0,z+1,6.3,2.1,3,'#34424a');break;
    case'cairo':this.box(x,.8,z,4, .8,1.5,'#b38d62');this.cylinder(x,2,z,1.4,.7,1.4,'#c8a97b');for(const q of[-3.2,3.2]){this.cylinder(x+q,2.2,z,.18,2.2,.18,'#cdb38c');this.diamond(x+q,4.65,z,.35,.5,.35,gold);}break;
    case'giza':this.pyramid(x-1.6,1.6,z,3.3,3.2,3.3,'#d7a755');this.pyramid(x+2.2,1.05,z,2.5,2.1,2.5,'#bd8645');break;
    case'luxor':for(let i=-3;i<=3;i++)this.cylinder(x+i*.9,1.35,z,.24,1.35,.24,'#b8884b');this.pyramid(x,3.3,z,.35,2.4,.35,'#d9aa58');break;
    case'moscow':for(let i=-2;i<=2;i++){this.box(x+i*1.15,1.15,z,.45,1.15,.5,red);this.diamond(x+i*1.15,2.65+(i%2)*.3,z,.72,.85,.72,[a,'#3f8d72','#3e77af','#dfb53d'][Math.abs(i)%4]);}break;
    case'petersburg':this.box(x,1.05,z,5.2,1.05,1.1,'#5e9a92');for(let i=-4;i<=4;i++)this.cylinder(x+i*1.1,1.15,z+.6,.12,1.15,.12,'#eadfc8');this.pyramid(x,2.6,z,1.5,.7,1,'#d7bb58');break;
    case'sochi':this.box(x,.7,z,4.3,.7,1.2,white);this.cylinder(x,2,z,.65,1.3,.65,white);this.pyramid(x,4,z,.25,2,.25,'#4c746d');break;
    case'paris':for(const q of[-1,1])this.box(x+q*.8,1.8,z,.18,2.1,.18,'#404b59',q*.09);this.box(x,1.15,z,2.3,.12,.2,'#404b59');this.box(x,2.55,z,1.1,.1,.18,'#697783');this.pyramid(x,4.7,z,.18,1.8,.18,'#404b59');break;
    case'london':this.box(x,1.8,z,.8,1.8,.8,'#765943');this.pyramid(x,4.1,z,1,1.1,1,'#664b38');this.cylinder(x,2.75,z+.82,.48,.18,.48,white,0,Math.PI/2);break;
    case'rome':this.box(x,1,z,4.8,1,1.3,'#a27455');for(let i=-3;i<=3;i++)this.cylinder(x+i*1.25,.75,z+1.35,.38,.75,.35,'#594640',0,Math.PI/2);break;
    case'beijing':this.box(x,.75,z,4.2,.75,1.4,red);this.box(x,1.9,z,3.1,.48,1.1,red);this.pyramid(x,2.7,z,3.9,.5,1.8,gold);this.pyramid(x,3.55,z,2.8,.4,1.4,gold);break;
    case'agra':this.box(x,.65,z,3.6,.65,1.2,white);this.cylinder(x,1.9,z,1.25,.85,1.25,white);this.diamond(x,3.35,z,1.35,.75,1.35,white);for(const q of[-3.4,3.4]){this.cylinder(x+q,1.65,z,.25,1.65,.25,white);this.diamond(x+q,3.55,z,.32,.48,.32,white);}break;
    case'tokyo':this.pyramid(x-2.2,1.65,z,3.4,3.3,2.5,'#dbe9ef');for(const q of[-1.3,1.3])this.box(x+2.4+q,2,z,.12,2,.15,q<0?'#e74f60':white,q*.13);for(let y=1;y<4.6;y+=.7)this.box(x+2.4,y,z,1.2,.07,.17,y%1.4<.2?white:'#e74f60');break;
  }}
  render(th,camera,time){if(!this.ok)return;this.begin(th,camera,time);this.box(0,-1.15,-39,28,1.2,46,shadeHex(th.soil,-.18));for(let i=-5;i<=5;i++){const x=i*6-Math.sin(camera*.0008)*2,z=-58-(i%3)*4;this.pyramid(x,2.8+(i%2),z,4.8,4.8+(i%3),4.2,i%2?th.far:th.mid);}for(let i=-7;i<=7;i++){const x=i*4.3-((camera*.006)%4.3),z=-46-(Math.abs(i)%3)*2,h=1.8+(Math.abs(i*17+th.id.length)%5);this.box(x,h*.5,z,1.3,h,1.6,i%3?th.far:th.mid);}
    const nature=['rainforest','beach','caribbean','colonial','california','snowCoast','beijing'];for(let i=-5;i<=5;i++){const x=i*5.1-((camera*.009)%5.1),z=-22-(i%3)*3;if(nature.includes(th.visual))this.tree(x,z,th,.72+(i&1)*.15);else{this.cylinder(x,.65,z,.13,.65,.13,'#313c4d');this.diamond(x,1.6,z,.34,.55,.34,th.accent);}}
    this.landmark(th,-2-Math.sin(camera*.0009)*2,-31);for(let i=0;i<11;i++){const x=-18+i*3.7,z=-17-(i%4)*5,y=4.8+(i%3)*1.1+Math.sin(time*1.3+i)*.18;this.diamond(x,y,z,.14+(i%2)*.05,.32,.14,i%3?th.accent:'#f6ffff',time*.28+i);}}
}
const polyWorld=new PolyWorldRenderer(polyCanvas);
if(polyWorld.ok){polyCanvas.style.display='block';}

// The standalone edition retains its original save. Box accounts have separate passports.
const tourStorage = window.parent !== window && document.referrer.startsWith(location.origin + '/')
  ? window.parent.BoxStorage || localStorage : localStorage;
let save = loadSave();
state.audio = save.audio;

function loadSave(){
  try{
    const s = JSON.parse(tourStorage.getItem('aventuraCristaisWorldTour1') || '{}');
    return { unlocked: Math.max(1, s.unlocked || 1), best: s.best || {}, fragments: s.fragments || {}, audio: s.audio !== false };
  }catch{
    return { unlocked:1, best:{}, fragments:{}, audio:true };
  }
}
function persist(){
  save.audio = state.audio;
  try { tourStorage.setItem('aventuraCristaisWorldTour1', JSON.stringify(save)); } catch { showToast('O progresso desta sessão não pôde ser salvo neste navegador.'); }
}
function refreshFullscreenButtons(){
  const active = !!document.fullscreenElement;
  ui.fullBtn.textContent = active ? 'Sair da tela cheia' : 'Tela cheia';
  ui.topFullBtn.textContent = ui.fullBtn.textContent;
}
async function enterFullscreen(){
  try{
    if(!document.fullscreenElement){
      if(gameWrap.requestFullscreen){
        try { await gameWrap.requestFullscreen({navigationUI:'hide'}); }
        catch { await gameWrap.requestFullscreen(); }
      }
      if(screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(()=>{});
    }
  }catch{ showToast('Se não abrir em tela cheia, use o menu do navegador.'); }
  refreshFullscreenButtons();
}
async function toggleFullscreen(){
  try{ if(document.fullscreenElement) await document.exitFullscreen(); else await enterFullscreen(); }
  catch{ showToast('Se não abrir em tela cheia, use o menu do navegador.'); }
  refreshFullscreenButtons();
}
document.addEventListener('fullscreenchange', refreshFullscreenButtons);

class Sound {
  constructor(){ this.ctx=null; this.master=null; this.musicTimer=null; this.musicStep=0; this.musicCfg=null; this.musicToken=0; this.toneNodes=[]; this.toneEvents=[]; this.toneTransport=null; }
  ensure(){
    if(!state.audio) return false;
    if(!this.ctx){
      const AC = window.AudioContext || window.webkitAudioContext;
      if(!AC) return false;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = .13;
      this.master.connect(this.ctx.destination);
    }
    if(this.ctx.state==='suspended') this.ctx.resume();
    return true;
  }
  tone(freq=440,dur=.08,type='sine',slide=0,vol=1){
    if(!this.ensure()) return;
    const now=this.ctx.currentTime;
    const o=this.ctx.createOscillator(), g=this.ctx.createGain();
    o.type=type; o.frequency.setValueAtTime(freq,now);
    if(slide) o.frequency.exponentialRampToValueAtTime(Math.max(30,freq+slide),now+dur);
    g.gain.setValueAtTime(.0001,now); g.gain.exponentialRampToValueAtTime(Math.max(.0002,.24*vol),now+.01); g.gain.exponentialRampToValueAtTime(.0001,now+dur);
    o.connect(g); g.connect(this.master); o.start(now); o.stop(now+dur+.05);
  }
  jump(){ this.tone(360,.12,'square',220,.6); }
  coin(){ this.tone(880,.07,'triangle',420,.75); setTimeout(()=>this.tone(1250,.08,'triangle',80,.55),55); }
  crystal(index=0){
    const notes = [523.25,659.25,783.99];
    notes.slice(0,index+1).forEach((hz,i)=>setTimeout(()=>this.tone(hz,.22,'sine',0,.8),i*80));
  }
  hit(){ this.tone(180,.18,'sawtooth',-100,.85); }
  stomp(){ this.tone(145,.09,'square',-40,.7); }
  missile(){ this.tone(520,.08,'square',200,.55); }
  fire(){ this.tone(460,.11,'sawtooth',-130,.55); }
  power(){ this.tone(420,.25,'triangle',620,.6); }
  portal(){ [380,480,620,820].forEach((f,i)=>setTimeout(()=>this.tone(f,.18,'sine',120,.55),i*80)); }
  boss(){ this.tone(90,.35,'sawtooth',-35,.8); }
  makeLead(kind,bus){
    const T=window.Tone,pluck=['pluck','oud','balalaika','mandolin','guzheng','sitar','koto'].includes(kind);
    let node;
    if(pluck) node=new T.PluckSynth({attackNoise:kind==='sitar'?2.2:1.1,dampening:kind==='guzheng'||kind==='koto'?3600:2600,resonance:(kind==='mandolin'||kind==='balalaika') ? .91 : .84,volume:-16});
    else if(kind==='brass'||kind==='bell') node=new T.FMSynth({harmonicity:kind==='bell'?3.4:1.45,modulationIndex:kind==='bell'?12:5,oscillator:{type:kind==='bell'?'sine':'sawtooth'},envelope:{attack:.02,decay:.22,sustain:.24,release:.8},modulationEnvelope:{attack:.01,decay:.25,sustain:.12,release:.6},volume:-18});
    else if(kind==='accordion') node=new T.AMSynth({harmonicity:1.5,oscillator:{type:'triangle'},envelope:{attack:.04,decay:.12,sustain:.58,release:.55},volume:-19});
    else node=new T.MonoSynth({oscillator:{type:kind==='jazz'?'fatsine':kind==='strings'?'fattriangle':kind==='reed'?'square':'triangle'},filter:{Q:2,type:'lowpass',rolloff:-24},envelope:{attack:kind==='strings'?.18:.03,decay:.18,sustain:kind==='strings'?.66:.35,release:kind==='strings'?1.2:.55},filterEnvelope:{attack:.02,decay:.2,sustain:.28,release:.7,baseFrequency:280,octaves:kind==='reed'?2.2:3.2},volume:-18});
    node.connect(bus);return node;
  }
  startFallback(cfg,token){
    if(token!==this.musicToken||!cfg||!this.ensure())return;
    this.musicCfg=cfg;this.musicStep=0;
    const notes=cfg.notes||['C4','E4','G4','E4'];
    const noteFreq=n=>{const map={C:0,D:2,E:4,F:5,G:7,A:9,B:11},m=/^([A-G])(#|b)?(\d)$/.exec(n);if(!m)return 220;let sem=map[m[1]]+(m[2]==='#'?1:m[2]==='b'?-1:0)+(Number(m[3])+1)*12;return 440*Math.pow(2,(sem-69)/12);};
    const beat=()=>{if(token!==this.musicToken||!state.audio||state.screen!=='playing')return;const i=this.musicStep++%notes.length;this.tone(noteFreq(notes[i]),.16,'triangle',0,.12);if(i%4===0)this.tone(noteFreq((cfg.bass||['C2'])[Math.floor(i/4)%(cfg.bass||['C2']).length]),.28,'sine',0,.09);};
    beat();this.musicTimer=setInterval(beat,Math.max(120,60000/cfg.tempo/2));
  }
  playRecording(recording, token){
    recording.play().catch(error => {
      if (token !== this.musicToken || state.screen !== 'playing' || !state.audio) return;
      if (error.name !== 'NotAllowedError') {
        if (error.name !== 'AbortError') showToast('Não foi possível carregar a música desta fase.');
        return;
      }
      const retry = () => {
        this.cancelRecordingRetry();
        if (token === this.musicToken) this.playRecording(recording, token);
      };
      this.cancelRecordingRetry = () => {
        document.removeEventListener('pointerup', retry, true);
        document.removeEventListener('keydown', retry, true);
        this.cancelRecordingRetry = null;
      };
      document.addEventListener('pointerup', retry, true);
      document.addEventListener('keydown', retry, true);
    });
  }
  startMusic(cfg, resume = false){
    this.stopMusic();const token=++this.musicToken;this.musicCfg=cfg;
    if(!cfg||!state.audio)return;
    if (cfg.recording) {
      if (this.recordingPath !== cfg.recording) {
        this.recordingPath = cfg.recording;
        this.recording = new Audio(cfg.recording);
        this.recording.loop = true;
        this.recording.volume = 0.32;
      }
      if (!resume) this.recording.currentTime = 0;
      this.playRecording(this.recording, token);
      return;
    }
    if(!window.Tone){this.startFallback(cfg,token);return;}
    this.startToneMusic(cfg,token).catch(()=>{if(token===this.musicToken){this.stopMusic();const fallbackToken=++this.musicToken;this.startFallback(cfg,fallbackToken);}});
  }
  async startToneMusic(cfg,token){
    const T=window.Tone;await T.start();
    if(token!==this.musicToken||!state.audio||state.screen!=='playing')return;
    const transport=T.getTransport();this.toneTransport=transport;transport.stop();transport.cancel(0);transport.bpm.value=cfg.tempo;transport.timeSignature=cfg.meter===6?[6,8]:[cfg.meter||4,4];transport.swing=cfg.swing||0;transport.swingSubdivision='8n';
    const bus=new T.Gain(.34).toDestination();
    const filter=new T.Filter({frequency:5200,type:'lowpass',rolloff:-24,Q:.7}).connect(bus);
    const delay=new T.FeedbackDelay({delayTime:cfg.meter===3?'8n.':'8n',feedback:.12,wet:.11}).connect(filter);
    const lead=this.makeLead(cfg.lead,delay);
    const bass=new T.MonoSynth({oscillator:{type:'sine'},filter:{type:'lowpass',frequency:650,Q:1},envelope:{attack:.01,decay:.16,sustain:.25,release:.34},volume:-17}).connect(filter);
    const chords=new T.PolySynth(T.Synth,{maxPolyphony:6,volume:-24,oscillator:{type:'triangle'},envelope:{attack:.08,decay:.18,sustain:.2,release:.8}}).connect(filter);
    const kick=new T.MembraneSynth({pitchDecay:.035,octaves:4,envelope:{attack:.001,decay:.2,sustain:.01,release:.18},volume:-15}).connect(bus);
    const shaker=new T.NoiseSynth({noise:{type:'white'},envelope:{attack:.001,decay:.045,sustain:0,release:.025},volume:-23}).connect(bus);
    this.toneNodes.push(bus,filter,delay,lead,bass,chords,kick,shaker);
    const leadSeq=new T.Sequence((time,note)=>lead.triggerAttackRelease(note,cfg.lead==='strings'?'8n':'16n',time,.68),cfg.notes,cfg.subdivision||'8n').start(0);
    const bassSeq=new T.Sequence((time,note)=>bass.triggerAttackRelease(note,'8n',time,.65),cfg.bass,'4n').start(0);
    const drumSeq=new T.Sequence((time,hit)=>{if(hit===2)kick.triggerAttackRelease('C1','8n',time,.72);else if(hit===1)shaker.triggerAttackRelease('32n',time,.38);},cfg.drums,cfg.subdivision||'8n').start(0);
    let chordIndex=0;const chordLoop=new T.Loop(time=>{const chord=cfg.chords[chordIndex++%cfg.chords.length];chords.triggerAttackRelease(chord,cfg.meter===3?'2n':'1m',time,.38);},'1m').start(0);
    this.toneEvents.push(leadSeq,bassSeq,drumSeq,chordLoop);
    if(cfg.drone){for(const note of cfg.drone){const osc=new T.Oscillator({frequency:note,type:'sine',volume:-32}).connect(filter).start();this.toneNodes.push(osc);}}
    transport.start('+0.05');
  }
  startMenuMusic(){
    if(!state.audio)return;if(this.musicCfg==='menu'&&this.musicTimer)return;this.stopMusic();const token=++this.musicToken;if(!this.ensure())return;this.musicCfg='menu';this.musicStep=0;
    const lead=[392,494,587.33,783.99,659.25,587.33,494,440,392,523.25,659.25,783.99,880,783.99,659.25,523.25],bass=[98,130.81,146.83,110];
    const beat=()=>{if(token!==this.musicToken||!state.audio||!['intro','title','levels','how'].includes(state.screen))return;const i=this.musicStep++%lead.length;this.tone(lead[i],.12,i%4===3?'triangle':'square',i%8===7?35:0,.16);if(i%2===0)this.tone(lead[(i+4)%lead.length]/2,.18,'triangle',0,.07);if(i%4===0)this.tone(bass[(i/4)%bass.length],.3,'sine',0,.12);if(i===7||i===15)setTimeout(()=>this.tone(1174.66,.08,'triangle',80,.09),75);};
    beat();this.musicTimer=setInterval(beat,205);
  }
  logoSting(kind=0){
    const seq=kind===0?[261.63,392,523.25]:kind===1?[329.63,493.88,659.25,987.77]:[392,523.25,659.25,783.99,1046.5];seq.forEach((f,i)=>setTimeout(()=>this.tone(f,.2,i%2?'triangle':'square',kind===2?80:35,.22),i*85));
  }
  stopMusic(){
    this.cancelRecordingRetry?.();
    if (this.recording && !this.recording.paused) this.recording.pause();
    this.musicToken++;if(this.musicTimer){clearInterval(this.musicTimer);this.musicTimer=null;}
    if(this.toneTransport){try{this.toneTransport.stop();this.toneTransport.cancel(0);}catch{}this.toneTransport=null;}
    for(const event of this.toneEvents.splice(0)){try{event.stop(0);event.dispose();}catch{}}
    for(const node of this.toneNodes.splice(0).reverse()){try{if(node.stop)node.stop();node.dispose();}catch{}}
    this.musicCfg=null;
  }
}
const sound = new Sound();

const introCtx=ui.introCanvas.getContext('2d');introCtx.imageSmoothingEnabled=false;
const INTRO_FONT={
  A:['01110','10001','10001','11111','10001','10001','10001'],B:['11110','10001','10001','11110','10001','10001','11110'],C:['01111','10000','10000','10000','10000','10000','01111'],D:['11110','10001','10001','10001','10001','10001','11110'],E:['11111','10000','10000','11110','10000','10000','11111'],F:['11111','10000','10000','11110','10000','10000','10000'],G:['01111','10000','10000','10111','10001','10001','01111'],H:['10001','10001','10001','11111','10001','10001','10001'],I:['11111','00100','00100','00100','00100','00100','11111'],J:['00111','00010','00010','00010','10010','10010','01100'],K:['10001','10010','10100','11000','10100','10010','10001'],L:['10000','10000','10000','10000','10000','10000','11111'],M:['10001','11011','10101','10101','10001','10001','10001'],N:['10001','11001','10101','10011','10001','10001','10001'],O:['01110','10001','10001','10001','10001','10001','01110'],P:['11110','10001','10001','11110','10000','10000','10000'],Q:['01110','10001','10001','10001','10101','10010','01101'],R:['11110','10001','10001','11110','10100','10010','10001'],S:['01111','10000','10000','01110','00001','00001','11110'],T:['11111','00100','00100','00100','00100','00100','00100'],U:['10001','10001','10001','10001','10001','10001','01110'],V:['10001','10001','10001','10001','10001','01010','00100'],W:['10001','10001','10001','10101','10101','10101','01010'],X:['10001','10001','01010','00100','01010','10001','10001'],Y:['10001','10001','01010','00100','00100','00100','00100'],Z:['11111','00001','00010','00100','01000','10000','11111'],
  '0':['01110','10001','10011','10101','11001','10001','01110'],'1':['00100','01100','00100','00100','00100','00100','01110'],'2':['01110','10001','00001','00010','00100','01000','11111'],'3':['11110','00001','00001','01110','00001','00001','11110'],':':['00000','00100','00100','00000','00100','00100','00000'],'-':['00000','00000','00000','11111','00000','00000','00000'],'·':['00000','00000','00000','00100','00000','00000','00000'],' ':['00000','00000','00000','00000','00000','00000','00000']
};
function cleanIntroText(text){return text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase();}
function introTextWidth(text,scale){return Math.max(0,cleanIntroText(text).length*6*scale-scale);}
function drawIntroText(text,x,y,scale,color,alpha=1,center=true,shadow=true){
  const value=cleanIntroText(text),width=introTextWidth(value,scale),start=center?Math.round(x-width/2):x;introCtx.save();introCtx.globalAlpha=alpha;
  const pass=(ox,oy,fill)=>{introCtx.fillStyle=fill;let cx=start;for(const ch of value){const glyph=INTRO_FONT[ch]||INTRO_FONT[' '];for(let row=0;row<7;row++)for(let col=0;col<5;col++)if(glyph[row][col]==='1')introCtx.fillRect(cx+col*scale+ox,y+row*scale+oy,scale,scale);cx+=6*scale;}};
  if(shadow)pass(scale,scale,'rgba(1,5,18,.85)');pass(0,0,color);introCtx.restore();return width;
}
function drawIntroItalicText(text,x,y,scale,color,alpha=1){
  const value=cleanIntroText(text),slant=Math.max(2,Math.round(scale/3)),width=introTextWidth(value,scale)+slant*3;introCtx.save();introCtx.globalAlpha=alpha;
  const pass=(ox,oy,fill)=>{introCtx.fillStyle=fill;let cx=x;for(const ch of value){const glyph=INTRO_FONT[ch]||INTRO_FONT[' '];for(let row=0;row<7;row++){const shift=(6-row)*slant;for(let col=0;col<5;col++)if(glyph[row][col]==='1')introCtx.fillRect(cx+col*scale+shift+ox,y+row*scale+oy,scale,scale);}cx+=6*scale;}};
  pass(scale,scale,'rgba(32,55,21,.2)');pass(0,0,color);introCtx.restore();return width;
}
function introBlock(x,y,w,h,color,a=1){introCtx.globalAlpha=a;introCtx.fillStyle=color;introCtx.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h));introCtx.globalAlpha=1;}
function introPoly(points,color,a=1,stroke='rgba(230,255,255,.16)',line=2){introCtx.save();introCtx.globalAlpha=a;introCtx.beginPath();introCtx.moveTo(points[0][0],points[0][1]);for(let i=1;i<points.length;i++)introCtx.lineTo(points[i][0],points[i][1]);introCtx.closePath();introCtx.fillStyle=color;introCtx.fill();if(stroke){introCtx.strokeStyle=stroke;introCtx.lineWidth=line;introCtx.stroke();}introCtx.restore();}
function introDiamond(cx,cy,rx,ry,color,a=1,cell=6){
  introPoly([[cx,cy-ry],[cx+rx,cy],[cx,cy+ry],[cx-rx,cy]],color,a);introPoly([[cx,cy-ry],[cx,cy],[cx-rx,cy]],shadeHex(color,.18),a*.78,null);introPoly([[cx,cy+ry],[cx,cy],[cx+rx,cy]],shadeHex(color,-.18),a*.76,null);
}
function introBubble(cx,cy,r,color,a=1){
  const pts=[];for(let i=0;i<12;i++){const q=-Math.PI/2+i*Math.PI*2/12;pts.push([cx+Math.cos(q)*r,cy+Math.sin(q)*r]);}for(let i=1;i<pts.length-1;i++)introPoly([[cx,cy],pts[i],pts[i+1]],i%2?color:shadeHex(color,.18),a,null);introPoly(pts,'rgba(0,0,0,0)',a,'rgba(239,255,201,.42)',3);introPoly([[cx-r*.45,cy-r*.52],[cx-r*.18,cy-r*.6],[cx-r*.08,cy-r*.36],[cx-r*.34,cy-r*.28]],'#efffc9',a*.72,null);
}
function drawIntroBackdrop(t,accent='#62efff'){
  const grad=introCtx.createLinearGradient(0,0,0,720);grad.addColorStop(0,'#061223');grad.addColorStop(.55,'#0b3040');grad.addColorStop(1,'#04101f');introCtx.fillStyle=grad;introCtx.fillRect(0,0,1280,720);
  const size=116;for(let row=-1;row<8;row++)for(let col=-1;col<13;col++){const x=col*size+(row%2)*size/2,y=row*92,seed=(row*17+col*31);introPoly([[x,y],[x+size,y+14],[x+size/2,y+92]],seed%3?shadeHex('#123e4d',seed%2?.12:-.08):shadeHex(accent,-.58),.22,null);introPoly([[x,y],[x+size/2,y+92],[x-size/2,y+92]],seed%2?'#0a2536':'#0d3240',.24,null);}
  for(let i=0;i<78;i++){const x=(i*173)%1280,y=(i*97)%650,s=i%13===0?5:2;introBlock(x,y,s,s,i%9===0?accent:'#dfffff',.22+.22*Math.sin(t*2+i));}
  for(let i=0;i<7;i++){const x=((i*241-t*(8+i))%1580+1580)%1580-150,y=90+(i%4)*96;introPoly([[x,y],[x+78,y-8],[x+58,y+10]],'#c9f8ff',.055,null);}
}
function drawPixelCrystalLogo(x,y,s,t,color='#62efff'){
  const pulse=.55+.45*Math.sin(t*5),p=(q,c,a=1)=>introPoly(q.map(v=>[x+v[0]*s,y+v[1]*s]),c,a,null);introCtx.save();introCtx.shadowColor=color;introCtx.shadowBlur=(12+12*pulse)*s;p([[0,-31],[-23,-16],[-16,8],[0,30],[17,8],[23,-16]],color,.28+.15*pulse);introCtx.shadowBlur=0;p([[0,-31],[-23,-16],[0,-8]],'#eaffff');p([[0,-31],[0,-8],[23,-16]],shadeHex(color,.24));p([[-23,-16],[-16,8],[0,-8]],shadeHex(color,.04));p([[23,-16],[0,-8],[17,8]],shadeHex(color,-.22));p([[-16,8],[0,30],[0,-8]],shadeHex(color,-.1));p([[17,8],[0,-8],[0,30]],shadeHex(color,-.38));introCtx.restore();introDiamond(x-29*s,y-3*s,3*s,5*s,'#fff6a2',pulse);introDiamond(x+27*s,y-13*s,2.5*s,4*s,'#fff6a2',1-pulse*.35);
}
function drawInstituteLogo(t,p,alpha){
  const ease=1-Math.pow(1-Math.min(1,p),3),cx=640,cy=320,s=.74+.26*ease,icx=380,icy=320;introCtx.save();introCtx.translate(cx,cy);introCtx.scale(s,s);introCtx.translate(-cx,-cy);introCtx.globalAlpha=alpha;
  introBlock(177,164,936,354,'#020817',.64);introBlock(163,150,936,354,'#f7f8ef');introBlock(163,150,936,10,'#5b7f17');introBlock(163,494,936,10,'#5b7f17');introBlock(163,150,10,354,'#5b7f17');introBlock(1089,150,10,354,'#5b7f17');
  /* Páginas/folhas sobrepostas do símbolo original, convertidas em losangos escalonados. */
  introDiamond(icx-12,icy+52,112,53,'#0d4329',ease);introDiamond(icx-20,icy+32,108,50,'#176233',ease);introDiamond(icx+3,icy+13,104,49,'#3a8b32',ease);introDiamond(icx+15,icy-7,98,47,'#8db719',ease);introDiamond(icx-8,icy-22,92,42,'#54a13a',ease);
  introBlock(icx-14,icy-65,26,16,'#ffffff',ease);introBlock(icx-10,icy-44,24,12,'#ffffff',ease);for(let row=0;row<7;row++)introBlock(icx-8-row*2,icy-32+row*12,25,12,'#ffffff',ease);introBlock(icx-27,icy+49,45,12,'#ffffff',ease);
  /* Três brilhos do canto superior direito do ícone. */
  introBlock(icx+83,icy-86,8,24,'#a9bf13',.75+.25*Math.sin(t*5));introBlock(icx+75,icy-78,24,8,'#a9bf13',.75+.25*Math.sin(t*5));introBlock(icx+105,icy-67,6,18,'#a9bf13',.72);introBlock(icx+99,icy-61,18,6,'#a9bf13',.72);introBlock(icx+70,icy-105,5,13,'#d1d933',.75);introBlock(icx+66,icy-101,13,5,'#d1d933',.75);
  drawIntroItalicText('INSTITUTO',535,244,9,'#91a916',ease);drawIntroItalicText('INTEGRO',535,326,12,'#174f2a',ease);
  introCtx.restore();
}
function drawBooblesLogo(t,p,alpha){
  const ease=1-Math.pow(1-Math.min(1,p),3),cx=640,cy=320,s=.74+.26*ease;introCtx.save();introCtx.translate(cx,cy);introCtx.scale(s,s);introCtx.translate(-cx,-cy);introCtx.globalAlpha=alpha;
  introBlock(177,164,936,354,'#020817',.64);introBlock(163,150,936,354,'#f7f8ef');introBlock(163,150,936,10,'#5b7f17');introBlock(163,494,936,10,'#5b7f17');introBlock(163,150,10,354,'#5b7f17');introBlock(1089,150,10,354,'#5b7f17');
  /* Mesma assinatura do Instituto, substituindo o símbolo pelas três bolhas verdes solicitadas. */
  introBubble(365,286,66,'#174f2a',ease);introBubble(318,354,49,'#5c8e1d',ease);introBubble(417,355,42,'#9db719',ease);introBlock(351,272,15,12,'#f4ffd7',ease*.72);introBlock(302,341,10,8,'#f4ffd7',ease*.66);introBlock(405,344,8,7,'#ffffff',ease*.68);
  drawIntroItalicText('INTEGRO',535,244,10,'#91a916',ease);drawIntroItalicText('BOOBLES',535,332,11,'#174f2a',ease);
  introCtx.restore();drawIntroText('APRESENTA',640,570,5,'#fff0a0',alpha*Math.min(1,p*1.7));
}
function drawTitleLogo(t,p,alpha){
  const ease=1-Math.pow(1-Math.min(1,p),3),cx=640,cy=245;introCtx.save();introCtx.globalAlpha=alpha;
  for(let row=-18;row<=18;row++){const half=Math.round(Math.sqrt(Math.max(0,1-(row/18)**2))*18);introBlock(cx-half*7,cy+row*7,(half*2+1)*7,7,'#167da0',.8);}
  [[-92,-45,70,35],[-50,-10,48,28],[-15,22,38,60],[26,-58,82,32],[44,-20,74,40],[65,28,38,24]].forEach((q,i)=>introBlock(cx+q[0],cy+q[1],q[2],q[3],i%2?'#50a96c':'#79b866',.86));
  for(let i=0;i<21;i++){const a=-2.65+i*.265,r=146;introBlock(cx+Math.cos(a)*r-3,cy+Math.sin(a)*r*.68-3,6,6,i<8?'#ffd75e':'#65efff',.7);}
  drawPixelCrystalLogo(cx+Math.cos(t*.7)*155,cy+Math.sin(t*.7)*78,1,t,'#ffd75e');introCtx.restore();
  drawIntroText('A AVENTURA DOS CRISTAIS',640,408,7,'#eaffff',alpha*ease);introBlock(222,472,836*ease,6,'#65efff',alpha);introBlock(310,485,660*ease,5,'#ff6fae',alpha);drawIntroText('O MUNDO',640,518,13,'#ffd75e',alpha*ease);drawIntroText('21 CIDADES · UMA GRANDE AVENTURA',640,635,4,'#82efff',alpha*Math.min(1,p*1.6));
}
let introRunning=false,introStartTime=0,introPhase=-1,introLoopStarted=false;
function introFade(local,duration){return Math.min(1,local/.42,Math.max(0,(duration-local)/.48));}
function renderIntroFrame(now){
  if(ui.intro.classList.contains('hidden'))return;const t=now/1000;drawIntroBackdrop(t,introRunning?'#65efff':'#ffd75e');
  if(!introRunning){drawPixelCrystalLogo(640,290,2.05,t,'#65efff');drawIntroText('UMA AVENTURA EM LOW-POLY 3D',640,475,5,'#dfffff',.72+.22*Math.sin(t*3));}
  else{const elapsed=(now-introStartTime)/1000;let phase,local,duration;if(elapsed<2.7){phase=0;local=elapsed;duration=2.7;drawInstituteLogo(t,local/1.2,introFade(local,duration));}else if(elapsed<5.5){phase=1;local=elapsed-2.7;duration=2.8;drawBooblesLogo(t,local/1.2,introFade(local,duration));}else{phase=2;local=elapsed-5.5;duration=3.6;drawTitleLogo(t,local/1.35,introFade(local,duration));}
    if(phase!==introPhase){introPhase=phase;if(phase>0)sound.logoSting(phase);}if(elapsed>=9.1){finishIntro();return;}}
  requestAnimationFrame(renderIntroFrame);
}
function finishIntro(){introRunning=false;ui.intro.classList.add('hidden');showTitle();}
function startIntroPresentation(){
  state.screen='intro';ui.intro.classList.remove('hidden');ui.introStart.classList.remove('hidden');ui.introSkip.classList.add('hidden');if(!introLoopStarted){introLoopStarted=true;requestAnimationFrame(renderIntroFrame);}
}
ui.introStart.addEventListener('click',()=>{sound.ensure();sound.startMenuMusic();sound.logoSting(0);introRunning=true;introStartTime=performance.now();introPhase=0;ui.introStart.classList.add('hidden');ui.introSkip.classList.remove('hidden');});
ui.introSkip.addEventListener('click',finishIntro);


const WORLD_THEMES = [
  {
    world:'Rota 1', name:'Brasil', color:'#16a36a', bossName:'Colosso de Neon', bossType:'brazil',
    scenes:[
      {id:'manaus',name:'Manaus',country:'Brasil',tag:'O portal da Amazônia',story:'Às margens do Rio Negro, cipós mecânicos tomaram os fragmentos próximos ao Teatro Amazonas.',outro:'As águas se acalmam e a bússola de cristal aponta para o litoral brasileiro.',visual:'rainforest',motif:'leaf',enemyNames:['Cipó Saltador','Morcego do Rio','Torre Vitória-Régia'],sky1:'#56c5e9',sky2:'#f3d58b',far:'#176c62',mid:'#0f8b68',ground:'#48a64d',soil:'#63452f',accent:'#ffd75e',enemy:['#50d176','#68e1dd','#e94a72'],music:{root:196,scale:[0,2,4,7,9],tempo:116,wave:'triangle'}},
      {id:'rio',name:'Rio de Janeiro',country:'Brasil',tag:'Entre o mar e as montanhas',story:'Ondas de energia cercam o Pão de Açúcar enquanto drones-planadores escondem o segundo caminho.',outro:'Do alto da cidade, Lumi avista a rota luminosa que segue para São Paulo.',visual:'beach',motif:'wave',enemyNames:['Onda Travessa','Asa-Delta Drone','Totem do Calçadão'],sky1:'#48bcea',sky2:'#ffe5a7',far:'#568a78',mid:'#247986',ground:'#74c95e',soil:'#b8864c',accent:'#ffe66b',enemy:['#48d6ea','#f6d75a','#3858bd'],music:{root:220,scale:[0,2,4,7,9,11],tempo:124,wave:'sine'}},
      {id:'saopaulo',name:'São Paulo',country:'Brasil',tag:'A cidade que não para',story:'Engrenagens urbanas correm pela Avenida Paulista e o cristal pulsa entre arranha-céus.',outro:'O Colosso de Neon cai, liberando a ponte aérea de cristal rumo ao México.',visual:'megacity',motif:'gear',enemyNames:['Cone Turbo','Drone Expresso','Farol Neon'],sky1:'#6e83a9',sky2:'#f0a78f',far:'#4c5c78',mid:'#35455f',ground:'#788492',soil:'#38404b',accent:'#ffdd55',enemy:['#ff7a45','#5ee1ff','#f4368e'],music:{root:164.81,scale:[0,3,5,7,10],tempo:132,wave:'square'}}
    ]
  },
  {
    world:'Rota 2', name:'México', color:'#e05b3f', bossName:'Jaguar Alebrije', bossType:'mexico',
    scenes:[
      {id:'mexicocity',name:'Cidade do México',country:'México',tag:'Vale dos vulcões',story:'Um enxame de engrenagens de obsidiana bloqueia o caminho entre o Zócalo e o Anjo da Independência.',outro:'A energia do vale revela uma trilha azul até o Caribe.',visual:'volcanoCity',motif:'cactus',enemyNames:['Engrenagem de Obsidiana','Águia Mecânica','Totem do Metrô'],sky1:'#5ab5de',sky2:'#f6c98d',far:'#7b7180',mid:'#b15e52',ground:'#6d9c50',soil:'#845032',accent:'#ffcf4c',enemy:['#414859','#e5b645','#2d8d78'],music:{root:174.61,scale:[0,2,3,7,9],tempo:120,wave:'triangle'}},
      {id:'cancun',name:'Cancún',country:'México',tag:'Portais do Caribe',story:'Corais luminosos sobem das águas turquesa e formam plataformas instáveis pela costa.',outro:'A maré entrega a Lumi uma peça colorida do mapa de Oaxaca.',visual:'caribbean',motif:'coral',enemyNames:['Caranguejo Coral','Arraia Voadora','Torre da Maré'],sky1:'#26c8e2',sky2:'#fff1bd',far:'#4ac7bd',mid:'#168f9e',ground:'#e4cb73',soil:'#aa7142',accent:'#ff7d8f',enemy:['#ff7d62','#805de8','#28c9c1'],music:{root:220,scale:[0,2,4,7,9],tempo:128,wave:'sine'}},
      {id:'oaxaca',name:'Oaxaca',country:'México',tag:'Cores entre montanhas',story:'Criaturas de madeira pintada guardam os becos, os arcos e as montanhas de Oaxaca.',outro:'O Jaguar Alebrije devolve o cristal e abre a rota continental para os Estados Unidos.',visual:'colonial',motif:'flower',enemyNames:['Alebrije Saltador','Beija-flor Solar','Guardião de Barro'],sky1:'#55a9dc',sky2:'#ffd08b',far:'#8d6b73',mid:'#bb6453',ground:'#75a954',soil:'#9e563a',accent:'#ffd941',enemy:['#6bdb8f','#f6509f','#ec8c35'],music:{root:196,scale:[0,3,5,7,10],tempo:112,wave:'triangle'}}
    ]
  },
  {
    world:'Rota 3', name:'Estados Unidos', color:'#4674d8', bossName:'Diretor Eclipse', bossType:'usa',
    scenes:[
      {id:'newyork',name:'Nova York',country:'Estados Unidos',tag:'A ilha dos arranha-céus',story:'Táxis-robôs e pombos metálicos patrulham as pontes sob a luz dos grandes edifícios.',outro:'A Estátua da Liberdade acende uma rota dourada em direção à costa oeste.',visual:'nyc',motif:'star',enemyNames:['Táxi-Bot','Pombo Metálico','Semáforo Laser'],sky1:'#4a79b8',sky2:'#ffb990',far:'#3f5876',mid:'#273d5b',ground:'#687384',soil:'#303845',accent:'#68efff',enemy:['#f5c841','#8ba1b4','#ff4e55'],music:{root:220,scale:[0,3,5,6,7,10],tempo:136,wave:'square'}},
      {id:'losangeles',name:'Los Angeles',country:'Estados Unidos',tag:'Sol da Califórnia',story:'Drones velozes cruzam palmeiras e avenidas enquanto o observatório rastreia o cristal.',outro:'O telescópio encontra um sinal estranho nas colinas de Hollywood.',visual:'california',motif:'palm',enemyNames:['Skate Turbo','Drone Solar','Torre-Palmeira'],sky1:'#56c7ed',sky2:'#ffd29f',far:'#ad8b88',mid:'#816b76',ground:'#78af62',soil:'#8b6045',accent:'#ffdf59',enemy:['#ff735e','#53d9ee','#58a06d'],music:{root:246.94,scale:[0,2,4,7,9],tempo:126,wave:'sine'}},
      {id:'hollywood',name:'Hollywood',country:'Estados Unidos',tag:'A fase das estrelas',story:'Câmeras autônomas projetam ilusões e fecham o caminho até o estúdio abandonado.',outro:'O Diretor Eclipse encerra sua última cena e o portal se abre para o Egito.',visual:'hollywood',motif:'camera',enemyNames:['Claquete Saltadora','Spotlight Drone','Câmera Sentinela'],sky1:'#3c4b94',sky2:'#ef7e91',far:'#342f5d',mid:'#20274a',ground:'#596a58',soil:'#3a3443',accent:'#ffd45e',enemy:['#191f31','#e8e7dc','#d94163'],music:{root:207.65,scale:[0,3,5,7,10],tempo:118,wave:'sawtooth'}}
    ]
  },
  {
    world:'Rota 4', name:'Egito', color:'#c9953c', bossName:'Guardião Solar de Luxor', bossType:'egypt',
    scenes:[
      {id:'cairo',name:'Cairo',country:'Egito',tag:'A metrópole do Nilo',story:'A energia do Nilo desperta escaravelhos mecânicos entre minaretes e barcos antigos.',outro:'O rio desenha no deserto uma seta que leva até Gizé.',visual:'nileCity',motif:'nile',enemyNames:['Escaravelho do Nilo','Falcão de Bronze','Farol do Rio'],sky1:'#6db9d8',sky2:'#f3cb8b',far:'#a98868',mid:'#786b62',ground:'#c0a05b',soil:'#7d5638',accent:'#58deef',enemy:['#2c8e9d','#be7d32','#d8ba55'],music:{root:146.83,scale:[0,1,4,5,7,8,11],tempo:104,wave:'triangle'}},
      {id:'giza',name:'Gizé',country:'Egito',tag:'O enigma das pirâmides',story:'O vento abre passagens entre pirâmides enquanto sentinelas de areia protegem o segundo cristal.',outro:'A Esfinge revela um corredor de luz seguindo o Nilo para o sul.',visual:'pyramids',motif:'pyramid',enemyNames:['Escaravelho de Areia','Falcão Solar','Pirâmide Sentinela'],sky1:'#5ca9d6',sky2:'#ffd995',far:'#d09c53',mid:'#ae783d',ground:'#deb867',soil:'#956338',accent:'#ffd75d',enemy:['#c97b35','#f2c54c','#8b623e'],music:{root:146.83,scale:[0,1,4,5,7,8,10],tempo:100,wave:'sawtooth'}},
      {id:'luxor',name:'Luxor',country:'Egito',tag:'Templos do sol',story:'Colunas gigantes e obeliscos canalizam o poder do último fragmento egípcio.',outro:'O Guardião Solar se rende; uma aurora fria anuncia a chegada à Rússia.',visual:'temple',motif:'sun',enemyNames:['Chacal de Pedra','Pássaro Solar','Obelisco Arcano'],sky1:'#467ec0',sky2:'#f3aa5a',far:'#895b52',mid:'#624847',ground:'#c19b55',soil:'#775037',accent:'#ffe165',enemy:['#7b685a','#f28c3b','#d9b45b'],music:{root:164.81,scale:[0,1,4,5,7,8,11],tempo:108,wave:'triangle'}}
    ]
  },
  {
    world:'Rota 5', name:'Rússia', color:'#62a1d8', bossName:'Titã da Nevasca', bossType:'russia',
    scenes:[
      {id:'moscow',name:'Moscou',country:'Rússia',tag:'Cúpulas sob a neve',story:'Flocos magnéticos cercam torres coloridas e transformam a praça em um labirinto gelado.',outro:'Os sinos de cristal marcam a direção de São Petersburgo.',visual:'moscow',motif:'onion',enemyNames:['Boneco de Gelo','Corvo Mecânico','Cúpula Sentinela'],sky1:'#7aa6d9',sky2:'#e8d8d1',far:'#8b7892',mid:'#645972',ground:'#b7d6e5',soil:'#66748a',accent:'#ffcf58',enemy:['#d9edf7','#6a7186','#d34e5e'],music:{root:174.61,scale:[0,2,3,5,7,8,11],tempo:108,wave:'triangle'}},
      {id:'petersburg',name:'São Petersburgo',country:'Rússia',tag:'Pontes sobre canais',story:'Autômatos de porcelana fecham as pontes e escondem o cristal entre palácios e canais.',outro:'A ponte se abre e uma corrente de luz segue para o Mar Negro.',visual:'canals',motif:'canal',enemyNames:['Engrenagem Imperial','Gaivota de Prata','Ponte Autômata'],sky1:'#799fca',sky2:'#f0c8ad',far:'#7c7790',mid:'#5d627c',ground:'#9ebec7',soil:'#59687c',accent:'#8df0ff',enemy:['#d5a750','#e5edf4','#4f6e9c'],music:{root:196,scale:[0,2,3,5,7,8,11],tempo:112,wave:'sine'}},
      {id:'sochi',name:'Sóchi',country:'Rússia',tag:'Do mar às montanhas',story:'A rota sobe das praias às montanhas nevadas, onde o Titã da Nevasca protege a passagem.',outro:'A tempestade termina e o cristal projeta no céu três destinos europeus.',visual:'snowCoast',motif:'snow',enemyNames:['Esquiador-Bot','Águia da Neve','Canhão de Gelo'],sky1:'#5eb5e1',sky2:'#f2fbff',far:'#cbe1ec',mid:'#8ab2c7',ground:'#9dd0d9',soil:'#6c8193',accent:'#e7fbff',enemy:['#eaf8ff','#527b9c','#76d5ec'],music:{root:185,scale:[0,2,3,5,7,8,10],tempo:120,wave:'triangle'}}
    ]
  },
  {
    world:'Rota 6', name:'Europa', color:'#7d60c7', bossName:'Colosso do Coliseu', bossType:'europe',
    scenes:[
      {id:'paris',name:'Paris',country:'França',tag:'Luzes sobre o Sena',story:'Relógios encantados alteram as pontes e levam Lumi até a torre de ferro iluminada.',outro:'Do alto da torre, o cristal aponta para Londres.',visual:'paris',motif:'tower',enemyNames:['Relógio Saltador','Pássaro de Luz','Mini-Torre Laser'],sky1:'#5c79a8',sky2:'#f0a2a6',far:'#665d7c',mid:'#3e4a66',ground:'#718166',soil:'#4c4d51',accent:'#ffd974',enemy:['#d2b66f','#e9e2d6','#5d5367'],music:{root:220,scale:[0,2,4,5,7,9,11],tempo:112,wave:'sine'}},
      {id:'london',name:'Londres',country:'Reino Unido',tag:'Névoa e grandes relógios',story:'A névoa cobre o Tâmisa enquanto guardiões de bronze patrulham pontes e relógios.',outro:'Quando o grande sino toca, uma estrada antiga surge em direção a Roma.',visual:'london',motif:'clock',enemyNames:['Guarda-Chuva Bot','Corvo do Tâmisa','Relógio Sentinela'],sky1:'#7086a1',sky2:'#c9ced4',far:'#5f6875',mid:'#424c59',ground:'#71806c',soil:'#4b5054',accent:'#f0c45f',enemy:['#60758b','#27323f','#c49a45'],music:{root:196,scale:[0,2,3,5,7,9,10],tempo:106,wave:'triangle'}},
      {id:'rome',name:'Roma',country:'Itália',tag:'Ecos do mundo antigo',story:'Arcos de pedra se movem e o Coliseu abriga o chefão da grande rota europeia.',outro:'Com o Colosso derrotado, três constelações orientais surgem no mapa.',visual:'rome',motif:'arch',enemyNames:['Mosaico Vivo','Águia de Bronze','Arco Sentinela'],sky1:'#619fd0',sky2:'#f5c58d',far:'#a87961',mid:'#76584f',ground:'#8aa060',soil:'#76513a',accent:'#ffd15f',enemy:['#b88b66','#bd8a4d','#7e6f61'],music:{root:207.65,scale:[0,2,4,5,7,9,10],tempo:116,wave:'triangle'}}
    ]
  },
  {
    world:'Rota 7', name:'Ásia', color:'#d14c72', bossName:'Dragão de Neon', bossType:'asia',
    scenes:[
      {id:'beijing',name:'Pequim',country:'China',tag:'Muralhas e telhados imperiais',story:'Dragões de papel metálico percorrem os telhados e a Grande Muralha guarda o primeiro fragmento asiático.',outro:'O sino do portão abre uma rota de luz rumo à Índia.',visual:'beijing',motif:'wall',enemyNames:['Leão de Pedra','Pipa-Dragão','Pagode Sentinela'],sky1:'#5aa0c8',sky2:'#f4bd87',far:'#6f7c71',mid:'#47594d',ground:'#79975c',soil:'#63503c',accent:'#f4d34e',enemy:['#c44d3e','#e1c24a','#384d49'],music:{root:220,scale:[0,2,4,7,9],tempo:110,wave:'sine'}},
      {id:'agra',name:'Agra',country:'Índia',tag:'Jardins do Taj Mahal',story:'Lótus luminosos flutuam pelos jardins enquanto elefantes mecânicos protegem os espelhos d’água.',outro:'O mármore reflete uma flor de cristal apontando para o Japão.',visual:'agra',motif:'lotus',enemyNames:['Elefante-Bot','Pavão de Luz','Cúpula de Mármore'],sky1:'#64b7df',sky2:'#f4d1a8',far:'#b69ba0',mid:'#866f83',ground:'#6ea875',soil:'#7b5b45',accent:'#ffbdde',enemy:['#7c6ec7','#23b1a5','#e5e2dd'],music:{root:196,scale:[0,1,4,5,7,8,11],tempo:118,wave:'sawtooth'}},
      {id:'tokyo',name:'Tóquio',country:'Japão',tag:'A cidade do futuro',story:'Neons, portais torii e trens de luz conduzem Lumi à batalha final sob o Monte Fuji.',outro:'O Dragão de Neon devolve todos os cristais. A volta ao mundo está completa!',visual:'tokyo',motif:'neon',enemyNames:['Trenzinho Turbo','Tanuki Mecânico','Torre Neon'],sky1:'#25386e',sky2:'#e85d8f',far:'#47385e',mid:'#252844',ground:'#596478',soil:'#2d3345',accent:'#65f3ff',enemy:['#ff506f','#7e60d9','#40e3e8'],music:{root:220,scale:[0,2,3,7,9],tempo:132,wave:'square'}}
    ]
  }
];

const LANDMARK_RESEARCH = {
  manaus:{landmark:'Teatro Amazonas',features:'fachada rosada e branca, colunas clássicas e cúpula mosaico verde, amarela e azul'},
  rio:{landmark:'Cristo Redentor no Corcovado',features:'estátua clara em estilo Art Déco, braços abertos e montanha coberta pela Mata Atlântica'},
  saopaulo:{landmark:'MASP',features:'galeria retangular de vidro suspensa por quatro grandes apoios e vigas vermelhas, com vão livre'},
  mexicocity:{landmark:'Anjo da Independência',features:'Vitória alada dourada com coroa de louros sobre coluna alta e pedestal escultórico'},
  cancun:{landmark:'Zona Arqueológica El Meco',features:'pirâmide maia escalonada de pedra clara, escadaria central e vegetação tropical'},
  oaxaca:{landmark:'Templo de Santo Domingo de Guzmán',features:'fachada barroca em cantera clara, portal ornamentado e duas torres simétricas'},
  newyork:{landmark:'Estátua da Liberdade',features:'cobre esverdeado, coroa de sete raios, tocha elevada, tábua e pedestal em forma de estrela'},
  losangeles:{landmark:'Griffith Observatory',features:'fachada Art Déco clara com uma grande cúpula central e duas cúpulas menores laterais'},
  hollywood:{landmark:'Hollywood Sign',features:'nove letras brancas espaçadas sobre a encosta seca e arbustiva de Mount Lee'},
  cairo:{landmark:'Mesquita de Muhammad Ali',features:'grande cúpula otomana, semicúpulas e dois minaretes muito esguios na Cidadela do Cairo'},
  giza:{landmark:'Grande Pirâmide e Esfinge',features:'pirâmide de Quéops em calcário e Esfinge reclinada com corpo de leão'},
  luxor:{landmark:'Templo de Luxor',features:'primeiro pilone, um obelisco remanescente, estátuas colossais e colunas de arenito'},
  moscow:{landmark:'Catedral de São Basílio',features:'conjunto assimétrico de capelas de tijolo vermelho e nove cúpulas coloridas em forma de cebola'},
  petersburg:{landmark:'Palácio de Inverno',features:'longa fachada barroca verde e branca, colunas, detalhes dourados e estátuas no telhado'},
  sochi:{landmark:'Terminal Marítimo de Sóchi',features:'edifício neoclássico branco com arcadas, torre em três níveis e agulha alta junto ao porto'},
  paris:{landmark:'Torre Eiffel',features:'quatro pilares curvos, arcos inferiores, treliça metálica e três plataformas visíveis'},
  london:{landmark:'Elizabeth Tower',features:'torre neogótica de pedra dourada, quatro mostradores de relógio e pináculos'},
  rome:{landmark:'Coliseu',features:'anfiteatro elíptico de travertino com ordens sobrepostas de arcos e trecho superior incompleto'},
  beijing:{landmark:'Salão da Suprema Harmonia',features:'grande salão vermelho de telhado dourado em beirais sobre terraço triplo de mármore branco'},
  agra:{landmark:'Taj Mahal',features:'mausoléu de mármore branco perfeitamente simétrico, cúpula bulbosa, quatro minaretes e espelho d’água'},
  tokyo:{landmark:'Tokyo Tower',features:'torre treliçada vermelho-alaranjada e branca, dois observatórios e antena afilada'}
};

const MUSIC_RESEARCH = {
  manaus:{style:'Carimbó amazônico',tempo:112,meter:4,subdivision:'8n',lead:'pluck',notes:['D4','F#4','A4','B4','A4','F#4','E4','D4'],bass:['D2','D2','A2','D2'],drums:[2,0,1,2,0,1,2,1],chords:[['D3','F#3','A3'],['G3','B3','D4'],['A3','C#4','E4'],['D3','F#3','A3']]},
  rio:{style:'Samba e bossa nova',tempo:124,meter:4,subdivision:'8n',lead:'soft',notes:['G4','B4','D5','E5','D5','B4','A4','G4'],bass:['G2','D3','E3','D3'],drums:[2,1,0,1,2,1,0,1],chords:[['G3','B3','D4','F#4'],['A3','C4','E4','G4'],['D3','F#3','A3','C4'],['G3','B3','D4','F#4']]},
  saopaulo:{style:'Samba-jazz urbano',tempo:132,meter:4,subdivision:'8n',lead:'brass',notes:['C4','D#4','F4','G4','A#4','G4','F4','D#4'],bass:['C2','G2','A#2','G2'],drums:[2,1,1,0,2,1,0,1],chords:[['C3','D#3','G3'],['F3','G#3','C4'],['A#2','D3','F3'],['G2','A#2','D3']]},
  mexicocity:{style:'Mariachi em compasso ternário',tempo:118,meter:3,subdivision:'8n',lead:'brass',notes:['G4','B4','D5','B4','A4','C5','E5','D5','B4','G4','A4','F#4'],bass:['G2','D3','D3'],drums:[2,1,1,2,1,1],chords:[['G3','B3','D4'],['D3','F#3','A3'],['C3','E3','G3']]},
  cancun:{style:'Son mexicano costeiro',tempo:128,meter:6,subdivision:'8n',lead:'pluck',notes:['A4','C#5','E5','C#5','B4','D5','F#5','E5','C#5','B4','A4','E4'],bass:['A2','E3','D3','E3'],drums:[2,0,1,2,1,0,2,0,1,2,1,1],chords:[['A3','C#4','E4'],['D3','F#3','A3'],['E3','G#3','B3']]},
  oaxaca:{style:'Huapango e cordas mexicanas',tempo:116,meter:6,subdivision:'8n',lead:'pluck',notes:['E4','G#4','B4','E5','D5','B4','A4','C#5','B4','G#4','F#4','E4'],bass:['E2','B2','A2','B2'],drums:[2,0,1,2,1,0,2,0,1,2,1,1],chords:[['E3','G#3','B3'],['A3','C#4','E4'],['B2','D#3','F#3']]},
  newyork:{style:'Jazz e blues nova-iorquino',tempo:132,meter:4,subdivision:'8n',swing:.58,lead:'jazz',notes:['C4','D#4','F4','F#4','G4','A#4','C5','A#4'],bass:['C2','G2','A2','A#2'],drums:[2,0,1,1,2,0,1,1],chords:[['C3','D#3','G3','A#3'],['F3','G#3','C4','D#4'],['G3','A#3','D4','F4'],['C3','D#3','G3','A#3']]},
  losangeles:{style:'Funk ensolarado da Califórnia',tempo:120,meter:4,subdivision:'8n',lead:'clean',notes:['E4','G#4','B4','C#5','B4','G#4','F#4','E4'],bass:['E2','B2','C#3','B2'],drums:[2,1,0,1,2,1,1,0],chords:[['E3','G#3','B3'],['A3','C#4','E4'],['C#3','E3','G#3'],['B2','D#3','F#3']]},
  hollywood:{style:'Trilha cinematográfica',tempo:104,meter:4,subdivision:'8n',lead:'strings',notes:['D4','A4','D5','F5','E5','C5','A4','D5'],bass:['D2','A2','A#2','C3'],drums:[2,0,0,1,2,0,1,0],chords:[['D3','F3','A3'],['A2','C#3','E3'],['A#2','D3','F3'],['C3','E3','G3']]},
  cairo:{style:'Modo árabe inspirado em maqam Bayati',tempo:104,meter:4,subdivision:'8n',lead:'oud',notes:['D4','D#4','F4','G4','A4','A#4','C5','A4'],bass:['D2','A2','A#2','A2'],drums:[2,0,1,2,0,1,0,1],chords:[['D3','F3','A3'],['D#3','G3','A#3'],['A#2','D3','F3'],['A2','C3','E3']]},
  giza:{style:'Modo Hijaz e percussão de moldura',tempo:98,meter:4,subdivision:'8n',lead:'oud',notes:['D4','D#4','F#4','G4','A4','A#4','C#5','A4'],bass:['D2','A2','D2','C#3'],drums:[2,0,1,0,2,1,0,1],chords:[['D3','F#3','A3'],['D#3','G3','A#3'],['A3','C#4','E4'],['D3','F#3','A3']]},
  luxor:{style:'Procissão egípcia cerimonial',tempo:92,meter:4,subdivision:'8n',lead:'reed',notes:['E4','F4','G#4','A4','B4','C5','D#5','B4'],bass:['E2','B2','C3','B2'],drums:[2,0,0,1,2,0,1,1],chords:[['E3','G#3','B3'],['F3','A3','C4'],['B2','D#3','F#3'],['E3','G#3','B3']]},
  moscow:{style:'Balalaica e dança russa',tempo:118,meter:2,subdivision:'8n',lead:'balalaika',notes:['A4','C5','E5','A5','G#5','E5','D5','C5'],bass:['A2','E3'],drums:[2,1,2,1],chords:[['A3','C4','E4'],['E3','G#3','B3']]},
  petersburg:{style:'Valsa russa',tempo:108,meter:3,subdivision:'8n',lead:'accordion',notes:['D4','F4','A4','D5','C#5','A4','G4','F4','E4','G4','A4','C#5'],bass:['D2','A2','A2'],drums:[2,1,1,2,1,1],chords:[['D3','F3','A3'],['G3','A#3','D4'],['A2','C#3','E3']]},
  sochi:{style:'Troika acelerada',tempo:136,meter:2,subdivision:'8n',lead:'balalaika',notes:['E4','G4','B4','E5','D5','B4','A4','G4'],bass:['E2','B2'],drums:[2,1,2,1],chords:[['E3','G3','B3'],['B2','D#3','F#3']]},
  paris:{style:'Valsa musette parisiense',tempo:108,meter:3,subdivision:'8n',lead:'accordion',notes:['A4','C#5','E5','A5','G#5','E5','D5','C#5','B4','D5','F5','E5'],bass:['A2','E3','E3'],drums:[2,1,1,2,1,1],chords:[['A3','C#4','E4'],['D3','F#3','A3'],['E3','G#3','B3']]},
  london:{style:'Marcha orquestral e sinos',tempo:106,meter:4,subdivision:'8n',lead:'bell',notes:['G4','B4','D5','G5','F#5','D5','C5','B4'],bass:['G2','D3','C3','D3'],drums:[2,0,1,0,2,1,0,1],chords:[['G3','B3','D4'],['C3','E3','G3'],['D3','F#3','A3'],['G3','B3','D4']]},
  rome:{style:'Tarantela italiana',tempo:144,meter:6,subdivision:'8n',lead:'mandolin',notes:['D4','F#4','A4','D5','C#5','A4','G4','B4','A4','F#4','E4','D4'],bass:['D2','A2','G2','A2'],drums:[2,0,1,2,1,0,2,0,1,2,1,1],chords:[['D3','F#3','A3'],['G3','B3','D4'],['A3','C#4','E4']]},
  beijing:{style:'Pentatônica chinesa e guzheng',tempo:106,meter:4,subdivision:'8n',lead:'guzheng',notes:['D4','E4','F#4','A4','B4','A4','F#4','E4'],bass:['D2','A2','B2','A2'],drums:[2,0,1,0,2,1,0,1],chords:[['D3','F#3','A3'],['G3','B3','D4'],['B2','D3','F#3'],['A2','D3','E3']]},
  agra:{style:'Raga Desh inspirado, tabla e drone',tempo:96,meter:4,subdivision:'8n',lead:'sitar',notes:['D4','E4','G4','A4','C5','A4','G4','E4'],bass:['D2','A2','D2','A2'],drums:[2,0,1,1,2,0,1,1],chords:[['D3','A3','D4'],['G3','D4','G4'],['A3','E4','A4'],['D3','A3','D4']],drone:['D2','A2']},
  tokyo:{style:'Koto e shakuhachi inspirados',tempo:112,meter:4,subdivision:'8n',lead:'koto',notes:['E4','F4','A4','B4','C5','B4','A4','F4'],bass:['E2','B2','C3','B2'],drums:[2,0,1,0,2,1,0,1],chords:[['E3','A3','B3'],['F3','A3','C4'],['C3','E3','A3'],['B2','E3','F3']]}
};

const CITY_ART = {
  manaus:{hero:'explorer',platform:'madeira amazônica',hazard:'root',hazardName:'caixa de cipós amazônicos'},
  rio:{hero:'visor',platform:'mosaico de ondas',hazard:'wave',hazardName:'caixa do calçadão'},
  saopaulo:{hero:'urban',platform:'concreto e vigas vermelhas',hazard:'barrier',hazardName:'caixa urbana refletiva'},
  mexicocity:{hero:'charro',platform:'pedra vulcânica',hazard:'obsidian',hazardName:'caixa de obsidiana'},
  cancun:{hero:'sunhat',platform:'pedra maia e areia',hazard:'coral',hazardName:'caixa de coral caribenho'},
  oaxaca:{hero:'flower',platform:'azulejos coloridos',hazard:'pot',hazardName:'caixa de barro pintado'},
  newyork:{hero:'citycap',platform:'aço rebitado',hazard:'hydrant',hazardName:'caixa de aço nova-iorquina'},
  losangeles:{hero:'sunglasses',platform:'concreto ensolarado',hazard:'cone',hazardName:'caixa solar californiana'},
  hollywood:{hero:'director',platform:'película de cinema',hazard:'film',hazardName:'caixa de película'},
  cairo:{hero:'desertscarf',platform:'arenito e faixas do Nilo',hazard:'papyrus',hazardName:'caixa do Nilo'},
  giza:{hero:'headwrap',platform:'blocos de calcário',hazard:'sandspike',hazardName:'caixa de calcário'},
  luxor:{hero:'sunband',platform:'lajes de templo',hazard:'column',hazardName:'caixa de hieróglifos'},
  moscow:{hero:'ushanka',platform:'tijolos e neve',hazard:'ice',hazardName:'caixa de gelo colorido'},
  petersburg:{hero:'imperialcoat',platform:'pontes verde e ouro',hazard:'gear',hazardName:'caixa imperial dourada'},
  sochi:{hero:'skigoggles',platform:'gelo costeiro',hazard:'snowdrift',hazardName:'caixa da neve costeira'},
  paris:{hero:'beret',platform:'treliça parisiense',hazard:'bollard',hazardName:'caixa de treliça parisiense'},
  london:{hero:'detective',platform:'tijolos e relógios',hazard:'puddle',hazardName:'caixa-relógio londrina'},
  rome:{hero:'laurel',platform:'travertino em arcos',hazard:'rubble',hazardName:'caixa de travertino'},
  beijing:{hero:'redjacket',platform:'muralha vermelha e dourada',hazard:'lion',hazardName:'caixa do leão de pedra'},
  agra:{hero:'lotussash',platform:'mármore com incrustações',hazard:'lotus',hazardName:'caixa de mármore e lótus'},
  tokyo:{hero:'neonband',platform:'circuitos de neon',hazard:'neon',hazardName:'caixa holográfica de neon'}
};

const countryRecordings = {
  Brasil: {recording: './audio/beyond-the-emerald-gate.mp3', style: 'Beyond the Emerald Gate'},
  México: {recording: './audio/sunrise-above-the-painted-mesa.mp3', style: 'Sunrise Above the Painted Mesa'}
};
WORLD_THEMES.forEach(route => route.scenes.forEach(scene => {
  const score = MUSIC_RESEARCH[scene.id];
  const recording = countryRecordings[scene.country];
  const music = recording ? {...score, ...recording} : score;
  Object.assign(scene, LANDMARK_RESEARCH[scene.id], { music, art: CITY_ART[scene.id] });
}));

const POWER_INFO = {
  missile:{ cell:0, icon:'🚀', label:'Míssil teleguiado', color:'#6ec6ff' },
  fire:{ cell:1, icon:'🔥', label:'Fogo', color:'#ff9b59' },
  fly:{ cell:2, icon:'🪽', label:'Voar', color:'#dff7ff' },
  invisible:{ cell:3, icon:'👻', label:'Invisível', color:'#c69cff' }
};

const powerSheet = new Image();
powerSheet.src = './poderes.webp';

function paintPower(type, x, y, size, alpha = 1) {
  if (!powerSheet.complete || !powerSheet.naturalWidth) return false;
  const cell = POWER_INFO[type].cell;
  ctx.save();
  ctx.globalAlpha *= alpha;
  ctx.drawImage(powerSheet, (cell % 2) * 192, Math.floor(cell / 2) * 192, 192, 192,
    x - size / 2, y - size / 2, size, size);
  ctx.restore();
  return true;
}

const ENEMY_DRAW = {};
WORLD_THEMES.forEach((route,regionIndex)=>route.scenes.forEach(scene=>{
  scene.regionIndex=regionIndex;
  scene.groundEnemy=`${scene.id}_ground`; scene.flyEnemy=`${scene.id}_fly`; scene.turretEnemy=`${scene.id}_turret`;
  ENEMY_DRAW[scene.groundEnemy]={kind:'ground',color:scene.enemy[0],eye:'#142039',accent:scene.accent,motif:scene.motif,label:scene.enemyNames[0]};
  ENEMY_DRAW[scene.flyEnemy]={kind:'fly',color:scene.enemy[1],accent:'#25304a',motif:scene.motif,label:scene.enemyNames[1]};
  ENEMY_DRAW[scene.turretEnemy]={kind:'turret',color:scene.enemy[2],accent:'#29324a',motif:scene.motif,label:scene.enemyNames[2]};
}));

function nBetween(min,max,t){ return min + (max-min) * t; }

function buildLevels(){
  const levels=[];
  WORLD_THEMES.forEach((theme, worldIndex)=>{
    for(let phase=1; phase<=3; phase++) levels.push(generateLevel(worldIndex, phase));
  });
  return levels;
}

function addHeart(hearts, x, y){ hearts.push([Math.round(x), Math.round(y)]); }

function generateLevel(worldIndex, phase){
  const route = WORLD_THEMES[worldIndex];
  const scene = route.scenes[phase-1];
  const theme = {...scene,world:route.world,routeName:route.name,routeColor:route.color,bossName:route.bossName,bossType:route.bossType};
  const boss = phase===3;
  const difficulty = worldIndex * 3 + phase;
  const width = phase===1 ? 4700 + worldIndex*130 : phase===2 ? 5250 + worldIndex*150 : 6400 + worldIndex*190;
  const spawn = [120,520];
  const groundY = 620;
  const citySeed = [...scene.id].reduce((sum,ch)=>sum+ch.charCodeAt(0),0);
  const safeZoneEnd = 1550;
  const platforms = [];
  const groundSegments = [];
  const coins=[], crystals=[], powers=[], enemies=[], hearts=[], hazards=[];
  let x = safeZoneEnd, idx = 1;
  let bossArena = null;

  groundSegments.push([0,groundY,safeZoneEnd,100]);
  platforms.push([260,groundY-125-(citySeed%2)*18,180,28]);
  platforms.push([650,groundY-210-(citySeed%3)*12,170,28]);
  platforms.push([1010,groundY-135-(citySeed%2)*20,190,28]);

  if(phase===1){
    while(x < width - 900){
      const gap = 68 + ((citySeed + idx*29) % 72);
      x += gap;
      const segW = 470 + ((citySeed*3 + idx*41) % 245);
      groundSegments.push([x, groundY, segW, 100]);
      platforms.push([x+62+(citySeed%35), groundY-118-(idx%2)*26, 150+(citySeed+idx*7)%45, 28]);
      if(segW > 460) platforms.push([x+segW/2-88, groundY-238-(citySeed%3)*6, 176+(idx%3)*12, 28]);
      if(segW > 560) platforms.push([x+segW-225, groundY-142-(idx%3)*15, 156+(citySeed%4)*8, 28]);
      x += segW;
      idx++;
    }
    groundSegments.push([width-760, groundY, 760, 100]);
    platforms.push([width-530, groundY-180, 170, 28]);
  } else if(phase===2){
    while(x < width - 980){
      const gap = 92 + ((citySeed*2 + idx*37) % 96);
      x += gap;
      const segW = 275 + ((citySeed + idx*53) % 135);
      groundSegments.push([x, groundY, segW, 100]);
      const direction=(idx+citySeed)%2===0?1:-1,base=x+segW/2-78;
      platforms.push([base, groundY-138-(citySeed%3)*7, 156+(idx%3)*10, 28]);
      platforms.push([base + direction*(64+(citySeed%28)), groundY-263, 148+(citySeed%4)*10, 28]);
      platforms.push([base - direction*(8+(citySeed%26)), groundY-385+(idx%2)*8, 158+(idx%2)*14, 28]);
      if((idx+citySeed)%2 === 1) platforms.push([x+segW-112, groundY-202-(citySeed%3)*8, 116+(idx%3)*8, 28]);
      x += segW;
      idx++;
    }
    groundSegments.push([width-720, groundY, 720, 100]);
    platforms.push([width-530, groundY-330, 190, 28]);
    platforms.push([width-320, groundY-220, 170, 28]);
  } else {
    const regularEnd = width - 2300;
    while(x < regularEnd){
      const gap = 105 + ((citySeed*3 + idx*43) % 110);
      x += gap;
      const segW = 300 + ((citySeed*2 + idx*61) % 185);
      groundSegments.push([x, groundY, segW, 100]);
      platforms.push([x+32+(citySeed%26), groundY-155-(idx%2)*18, 130+(citySeed%4)*10, 28]);
      if((idx+citySeed)%2 === 0) platforms.push([x+segW/2-76, groundY-286-(citySeed%3)*8, 148+(idx%3)*10, 28]);
      if((idx+citySeed)%3 !== 0) platforms.push([x+segW-168, groundY-198-(idx%2)*17, 132+(citySeed%3)*10, 28]);
      x += segW;
      idx++;
    }

    const transitionStart = width - 2200;
    groundSegments.push([transitionStart, groundY, 540, 100]);
    platforms.push([transitionStart+120, groundY-150, 160, 28]);
    platforms.push([transitionStart+340, groundY-260, 160, 28]);

    const bridgeStart = width - 1540;
    groundSegments.push([bridgeStart, groundY, 300, 100]);
    platforms.push([bridgeStart+40, groundY-155, 130, 28]);
    platforms.push([bridgeStart+190, groundY-240, 130, 28]);

    const arenaStart = width - 1180;
    const arenaWidth = 720;
    groundSegments.push([arenaStart, groundY, arenaWidth, 100]);
    platforms.push([arenaStart+95, groundY-185, 175, 28]);
    platforms.push([arenaStart+arenaWidth-270, groundY-185, 175, 28]);

    const portalFloorX = width - 360;
    groundSegments.push([portalFloorX, groundY, 360, 100]);
    platforms.push([width-250, groundY-180, 120, 28]);

    bossArena = { minX: arenaStart + 20, maxX: arenaStart + arenaWidth - 20, floorY: groundY, centerX: arenaStart + arenaWidth/2 };
  }
  for(const g of groundSegments) platforms.unshift(g);

  for(const s of platforms){
    if(s[3]===28 && s[1] < groundY){
      coins.push([s[0]+s[2]/2-25, s[1]-26]);
      if(s[2] > 150) coins.push([s[0]+s[2]/2+25, s[1]-26]);
    }
  }
  if(bossArena)for(let i=coins.length-1;i>=0;i--)if(coins[i][0]>=bossArena.minX&&coins[i][0]<=bossArena.maxX)coins.splice(i,1);

  const crystalTargets = phase===1 ? [0.22,0.48,0.80] : phase===2 ? [0.18,0.50,0.84] : [0.14,0.36,0.60];
  crystalTargets.forEach((t,i)=>{
    const ledges = platforms.filter(p => p[3] === 28);
    const choices = i === 2 ? ledges.filter(p => groundSegments.some(([gx,,gw]) => p[0]+p[2]/2 >= gx && p[0]+p[2]/2 <= gx+gw)) : ledges;
    const plat = nearestPlatform(choices.length ? choices : platforms, width*t);
    crystals.push([plat[0] + plat[2]/2, plat[1]-42-(i%2)*12]);
  });

  const heartTargets = phase===1 ? [0.36] : phase===2 ? [0.24,0.68] : [0.12,0.48,0.90];
  heartTargets.forEach((t,i)=>{
    const ledges = platforms.filter(p => p[3] === 28);
    const choices = i === 2 ? ledges.filter(p => groundSegments.some(([gx,,gw]) => p[0]+p[2]/2 >= gx && p[0]+p[2]/2 <= gx+gw)) : ledges;
    const plat = nearestPlatform(choices.length ? choices : platforms, width*t);
    addHeart(hearts, plat[0] + plat[2]/2 + (i%2?18:-18), plat[1]-58);
  });
  if(bossArena){
    for(let i=hearts.length-1;i>=0;i--)if(hearts[i][0]>=bossArena.minX-80)hearts.splice(i,1);
    addHeart(hearts,bossArena.minX+162,groundY-245);
    addHeart(hearts,bossArena.maxX-162,groundY-245);
  }

  const powerSet = phase===1 ? ['missile','fly'] : phase===2 ? ['fire','invisible'] : ['missile','fire','fly','invisible'];
  powerSet.forEach((type, i)=>{
    const px = width * (phase===3 ? 0.10 + i*0.10 : 0.18 + i*0.25);
    const plat = nearestPlatform(platforms, px);
    powers.push([plat[0]+plat[2]/2 + (i%2?24:-24), plat[1]-58, type]);
  });

  const groundType = theme.groundEnemy, flyType = theme.flyEnemy, turretType = theme.turretEnemy;
  const pattern = phase===1 ? ['ground','ground','fly'] : phase===2 ? ['ground','fly','ground','turret'] : ['ground','fly','turret','ground','fly'];
  const enemyCount = phase===1 ? 9 + worldIndex : phase===2 ? 12 + worldIndex : 13 + worldIndex;
  const enemyStart = safeZoneEnd + 230;
  const enemyEnd = width * (phase===3 ? .68 : .82);
  for(let i=0;i<enemyCount;i++){
    // Introduce the city's sentry after two walking/flying groups on each route's first stage.
    const kind = phase === 1 && i === 6 ? 'turret' : pattern[i % pattern.length];
    const px = enemyStart + (i/Math.max(1,enemyCount-1))*(enemyEnd-enemyStart);
    const tier = Math.min(3, 1 + Math.floor((difficulty + i/3) / 7));
    if(kind==='fly' && flyType){
      const p = nearestPlatform(platforms, px);
      enemies.push([Math.max(enemyStart,p[0]+p[2]/2), Math.max(220, p[1]-125-(i%2)*18), flyType, tier]);
    } else if(kind==='turret' && turretType){
      const g = nearestGround(groundSegments, px);
      const ex=Math.max(g[0]+58,Math.min(g[0]+g[2]-110,px));
      if(ex>safeZoneEnd) enemies.push([ex, g[1]-52, turretType, tier]);
    } else {
      const g = nearestGround(groundSegments, px);
      const ex=Math.max(g[0]+50,Math.min(g[0]+g[2]-100,px+(i%3-1)*38));
      if(ex>safeZoneEnd) enemies.push([ex, g[1]-40, groundType, tier]);
    }
  }

  const hazardCount=phase===1?5:phase===2?7:9;
  for(let i=1;i<groundSegments.length&&hazards.length<hazardCount;i++){
    const g=groundSegments[i];
    if(g[0]+g[2]<safeZoneEnd+280||g[0]>width-760||(bossArena&&g[0]>bossArena.minX-180))continue;
    const room=Math.max(0,g[2]-210),hx=Math.max(g[0]+88,safeZoneEnd+230)+((citySeed+i*73)%Math.max(1,room));
    if(hx+48<g[0]+g[2]-54)hazards.push([hx,groundY-48,48,48,theme.art.hazard]);
  }

  if(bossArena)for(let i=enemies.length-1;i>=0;i--)if(enemies[i][0]>=bossArena.minX-100)enemies.splice(i,1);

  const bossSpawn = boss && bossArena ? [bossArena.centerX - 60, 420] : null;
  const portal = boss ? [width-220, 500] : [width-160, 500];

  return {
    worldIndex, phase, world: route.world, worldName: route.name, country:scene.country,
    phaseName: scene.name, locationTag:scene.tag, enemyNames:scene.enemyNames, storyIntro: scene.story, storyOutro: scene.outro,
    title: `${scene.country} · ${scene.name}`,
    width, spawn, portal, theme, boss, difficulty, bossArena, safeZoneEnd,
    bossName: route.bossName, bossType: route.bossType, bossSpawn,
    platforms, coins, crystals, powers, enemies, hearts, hazards
  };
}

function nearestPlatform(platforms, x){
  let best = platforms[0], dist = Infinity;
  for(const p of platforms){
    const center = p[0] + p[2]/2;
    const d = Math.abs(center - x) + (p[3]===28 ? 0 : 80);
    if(d < dist){ dist = d; best = p; }
  }
  return best;
}
function nearestGround(segments, x){
  let best = segments[0], dist = Infinity;
  for(const p of segments){
    const center = p[0] + p[2]/2;
    const d = Math.abs(center - x);
    if(d < dist){ dist = d; best = p; }
  }
  return best;
}

const LEVELS = buildLevels();

function cloneLevel(def){
  const level = {
    ...def,
    platforms: def.platforms.map(p=>({x:p[0],y:p[1],w:p[2],h:p[3],type:'solid'})),
    coins: def.coins.map(c=>({x:c[0],y:c[1],r:14,active:true,bob:Math.random()*6.28})),
    crystals: def.crystals.map(([x,y],index)=>({x,y,index,active:true,revealed:index!==2,bob:Math.random()*6.28})),
    hearts: def.hearts.map(h=>({x:h[0],y:h[1],active:true,bob:Math.random()*6.28})),
    powers: def.powers.map(p=>({x:p[0],y:p[1],type:p[2],active:true,bob:Math.random()*6.28})),
    hazards: def.hazards.map(h=>({x:h[0],y:h[1],w:h[2],h:h[3],type:h[4],phase:Math.random()*6.28})),
    enemies: def.enemies.map(e=>makeEnemy(e[0],e[1],e[2],def.theme,e[3]||1)),
    projectiles:[], enemyShots:[], particles:[], powerEvents:[], portalOpen:false, complete:false, bossDefeated:false,
    bossArena: def.bossArena ? {...def.bossArena} : null
  };
  if(def.boss) level.enemies.push(makeBoss(def.bossSpawn[0], def.bossSpawn[1], def.bossType, def.bossName, def.theme));
  return level;
}



function makeEnemy(x,y,type,theme,tier=1){
  const info = ENEMY_DRAW[type];
  const levelTier = Math.min(3, Math.max(1, tier));
  if(info.kind==='ground') return {type,x,y,w:48,h:40,vx:0,vy:0,dir:Math.random()<.5?-1:1,speed:76+levelTier*16,alive:true,onGround:false,hp:levelTier,phase:Math.random()*6.28,theme,elite:levelTier>1};
  if(info.kind==='fly') return {type,x,y,w:52,h:36,baseX:x,baseY:y,dir:1,speed:88+levelTier*15,alive:true,hp:Math.min(2,levelTier),phase:Math.random()*6.28,theme,elite:levelTier>1};
  return {type,x,y,w:52,h:52,alive:true,hp:2+Math.max(0,levelTier-2),cooldown:1.2+Math.random()*.5,phase:0,theme,elite:levelTier>1};
}
function makeBoss(x,y,bossType,bossName,theme){
  return {
    type:'boss',bossType,bossName,theme,x,y,w:118,h:128,vx:0,vy:0,dir:-1,alive:true,onGround:false,
    hp:14,maxHp:14,cooldown:1.2,phase:0,pattern:0,specialCd:1.2,arenaMin:x-500,arenaMax:x+900
  };
}

function createPlayer(x,y){
  return {
    x,y,w:46,h:60,vx:0,vy:0,dir:1,onGround:false,coyote:0,jumpBuffer:0,
    health:3,maxHealth:5,inv:0,dead:false,anim:0,landPose:0,
    powers:{ missile:false, fire:false, fly:false, invisible:false },
    cooldowns:{ missile:0, fire:0, invisible:0 },
    flyEnergy:100, invisibleTime:0
  };
}



function startLevel(index){
  if (portrait.matches) return;
  clearPad();
  state.levelIndex = Math.max(0,Math.min(index,LEVELS.length-1));
  state.level = cloneLevel(LEVELS[state.levelIndex]);
  selectScenery(state.level.theme.id);
  state.player = createPlayer(...state.level.spawn);
  state.cameraX = 0; state.time = 0; state.coins = 0; state.crystals = 0; state.score = 0; state.flash=0; state.shake=0; state.locationCard=0; state.nightTime=0;
  state.screen='playing';
  showToast(state.level.phaseName + ' · ' + state.level.theme.landmark, 2100);
  hideAllScreens(); ui.touch.classList.remove('hidden'); ui.top.classList.remove('hidden');
  ui.soundBtn.textContent = state.audio ? 'Desligar som' : 'Ligar som';
  refreshPowerButtons();
  sound.startMusic(state.level.theme.music);
}

function hideAllScreens(){ [ui.title,ui.levels,ui.how,ui.pause,ui.result].forEach(x=>x.classList.add('hidden')); }
function showTitle(playMusic=true){state.screen='title';hideAllScreens();ui.title.classList.remove('hidden');ui.touch.classList.add('hidden');ui.top.classList.add('hidden');if(playMusic)sound.startMenuMusic();}
function showLevels(){selectScenery(LEVELS[currentMapDestination()].theme.id);state.screen='levels';hideAllScreens();ui.levels.classList.remove('hidden');ui.touch.classList.add('hidden');ui.top.classList.add('hidden');sound.startMenuMusic();$('atlasView').classList.remove('hidden');$('passportView').classList.add('hidden');renderLevelGrid();}
function pauseGame(){ if(state.screen!=='playing') return; sound.stopMusic(); clearPad(); state.screen='paused'; ui.pause.classList.remove('hidden'); ui.touch.classList.add('hidden'); }
function resumeGame(){ if(state.screen!=='paused' || portrait.matches) return; state.screen='playing'; ui.pause.classList.add('hidden'); ui.touch.classList.remove('hidden'); state.last=performance.now(); sound.startMusic(state.level.theme.music, true); }

// Coordinates in the painted 600 × 300 atlas, in the same order as the stages.
const atlasStops = [
  [165,159], [202,190], [196,193], [112,125], [142,118], [117,130],
  [170,90], [82,98], [80,96], [320,104], [317,106], [323,113],
  [324,61], [308,53], [327,82], [262,80], [254,69], [281,90],
  [478,91], [395,122], [522,97]
];
function currentMapDestination(){
  const next = LEVELS.findIndex((_, i) => i < save.unlocked && !save.best[i]);
  return next < 0 ? Math.min(save.unlocked, LEVELS.length - 1) : next;
}
function drawWorldMap(){
  const map = ui.worldMap;
  const ink = map.getContext('2d');
  const next = currentMapDestination();
  ink.clearRect(0, 0, map.width, map.height);
  ink.save();
  ink.scale(map.width / 600, map.height / 300);
  ink.lineWidth = 1.25;
  ink.setLineDash([3, 3]);
  atlasStops.forEach(([x, y], i) => {
    if (!i) return;
    ink.beginPath();
    ink.moveTo(...atlasStops[i-1]);
    ink.lineTo(x, y);
    ink.strokeStyle = i < save.unlocked ? '#fff4b7' : 'rgba(10,43,52,.53)';
    ink.stroke();
  });
  ink.setLineDash([]);
  function pin(i){
    const [x,y] = atlasStops[i];
    ink.beginPath();
    ink.arc(x, y, i === next ? 5 : 2.8, 0, Math.PI * 2);
    ink.fillStyle = i === next ? '#ffcd62' : save.best[i] ? '#9bffcf' : '#6f8791';
    ink.fill();
    ink.strokeStyle = '#103945';
    ink.stroke();
    if (i === next) {
      ink.beginPath(); ink.arc(x,y,7.5,0,Math.PI*2); ink.strokeStyle='#fff8de'; ink.stroke();
    }
  }
  atlasStops.forEach((_,i) => { if(i !== next) pin(i); });
  pin(next);
  ink.restore();
}
ui.worldMap.addEventListener('click', e => {
  const bounds = ui.worldMap.getBoundingClientRect();
  const x = (e.clientX-bounds.left)*600/bounds.width;
  const y = (e.clientY-bounds.top)*300/bounds.height;
  const nearby = atlasStops.map(([px,py],i)=>({i, distance:Math.hypot(x-px,y-py)}))
    .filter(stop=>stop.distance <= Math.max(6, 11*600/bounds.width))
    .sort((a,b)=>a.distance-b.distance);
  if (!nearby.length) return;
  const target = nearby.find(stop=>stop.i<save.unlocked) || nearby[0];
  if (target.i < save.unlocked) startLevel(target.i);
  else showToast(LEVELS[target.i].phaseName + ' · destino bloqueado');
});
$('openPassport').onclick=()=>{
  $('atlasView').classList.add('hidden');
  $('passportView').classList.remove('hidden');
  $('closePassport').focus();
};
$('closePassport').onclick=()=>{
  $('passportView').classList.add('hidden');
  $('atlasView').classList.remove('hidden');
  $('openPassport').focus();
};
function renderLevelGrid(){
  ui.levelGrid.replaceChildren();
  const stamped = LEVELS.filter((_,i)=>save.best[i]>0).length;
  $('passportSummary').textContent = stamped + ' de ' + LEVELS.length + ' cidades carimbadas';
  const next = currentMapDestination();
  $('nextStop').textContent = 'Jogar em ' + LEVELS[next].phaseName + ' →';
  for (const [i,l] of LEVELS.entries()) {
    const unlocked=i<save.unlocked, completed=Boolean(save.best[i]);
    const mask=completed ? 7 : save.fragments[i] || 0;
    const found=[1,2,4].filter(bit=>mask & bit).length;
    const card=document.createElement('button');
    card.type='button'; card.disabled=!unlocked;
    card.className='levelCard passport-page'+(unlocked?'':' locked');
    card.style.setProperty('--route',l.theme.routeColor);
    const stamp=document.createElement('canvas'); stamp.width=208; stamp.height=120;
    stamp.setAttribute('aria-hidden','true');
    const ink=stamp.getContext('2d'); ink.scale(.34,.34);
    drawResearchedMonument(l.theme,305,321,ink);
    card.append(stamp);
    for(const [tag,text] of [['small',l.country],['b',l.phaseName],['span',l.theme.landmark],['small',completed?'Carimbada · 3/3 fragmentos':unlocked?found+'/3 fragmentos':'Destino bloqueado']]){
      const label=document.createElement(tag); label.textContent=text;card.append(label);
    }
    if(unlocked) card.addEventListener('click',()=>startLevel(i));
    ui.levelGrid.append(card);
  }
  drawWorldMap();
}

function showToast(text,duration=1900){ ui.toast.textContent=text; ui.toast.classList.add('show'); clearTimeout(state.toastTimer); state.toastTimer=setTimeout(()=>ui.toast.classList.remove('show'),duration); }
function refreshPowerButtons(){
  const p = state.player;
  if(!p) return;
  ui.missileBtn.classList.toggle('hidden', !p.powers.missile);
  ui.fireBtn.classList.toggle('hidden', !p.powers.fire);
  ui.flyBtn.classList.toggle('hidden', !p.powers.fly);
  ui.invisBtn.classList.toggle('hidden', !p.powers.invisible);
}


function finishLevel(){
  if(state.level.complete) return;
  clearPad();
  state.level.complete = true; state.screen='result'; sound.stopMusic();
  ui.touch.classList.add('hidden'); ui.top.classList.add('hidden');
  const stars = state.player.health>=4 ? 3 : state.player.health>=2 ? 2 : 1;
  save.best[state.levelIndex] = Math.max(save.best[state.levelIndex] || 0, stars);
  save.unlocked = Math.max(save.unlocked, Math.min(LEVELS.length, state.levelIndex + 2));
  persist();
  const last = state.levelIndex === LEVELS.length - 1;
  ui.resultTitle.textContent = last ? 'Volta ao mundo concluída!' : (state.level.phase===3 ? 'Chefão derrotado!' : 'Destino concluído!');
  ui.resultText.innerHTML = `${state.level.country} · ${state.level.phaseName}<br>${state.level.storyOutro}<br>Fragmentos: <b>${state.crystals}/3</b> · Moedas: <b>${state.coins}</b> · Energia: <b>${state.player.health}/${state.player.maxHealth}</b><br>Pontuação: <b>${state.score}</b>`;
  ui.nextBtn.classList.toggle('hidden', last);
  ui.result.classList.remove('hidden'); sound.portal();
}

function gameOver(){
  clearPad();
  sound.stopMusic(); state.screen='result'; ui.touch.classList.add('hidden'); ui.top.classList.add('hidden');
  ui.resultTitle.textContent='Lumi precisa tentar outra vez';
  ui.resultText.textContent='Observe o caminho, use os poderes e tente novamente.';
  ui.nextBtn.classList.add('hidden'); ui.result.classList.remove('hidden');
}

function aabb(a,b){ return a.x < b.x+b.w && a.x+a.w > b.x && a.y < b.y+b.h && a.y+a.h > b.y; }
function circleRect(cx,cy,r,rect){ const qx=Math.max(rect.x,Math.min(cx,rect.x+rect.w)); const qy=Math.max(rect.y,Math.min(cy,rect.y+rect.h)); const dx=cx-qx,dy=cy-qy; return dx*dx+dy*dy<r*r; }

function update(dt){
  state.time += dt;
  if(state.screen !== 'playing') return;
  state.locationCard=Math.max(0,state.locationCard-dt);
  const p = state.player, l = state.level;
  state.nightTime=Math.max(0,state.nightTime-dt);
  p.inv = Math.max(0,p.inv-dt);
  p.anim += dt*Math.abs(p.vx)*.03;
  p.cooldowns.missile = Math.max(0,p.cooldowns.missile-dt);
  p.cooldowns.fire = Math.max(0,p.cooldowns.fire-dt);
  p.cooldowns.invisible = Math.max(0,p.cooldowns.invisible-dt);
  p.invisibleTime = Math.max(0,p.invisibleTime-dt);
  if(p.onGround){ p.coyote=.14; } else p.coyote=Math.max(0,p.coyote-dt);
  p.jumpBuffer=Math.max(0,p.jumpBuffer-dt);
  if(controls.jumpPressed){ p.jumpBuffer=.16; controls.jumpPressed=false; }
  if(controls.missilePressed){ shootMissile(); controls.missilePressed=false; }
  if(controls.firePressed){ shootFire(); controls.firePressed=false; }
  if(controls.invisiblePressed){ activateInvisibility(); controls.invisiblePressed=false; }

  const keyboardAxis = Number(controls.right) - Number(controls.left);
  const direction = keyboardAxis || stickAxis;
  const wantedSpeed = direction * 410;
  const accel = direction ? (p.onGround ? 2400 : 1500) : (p.onGround ? 2500 : 680);
  const change = wantedSpeed - p.vx;
  p.vx += Math.sign(change) * Math.min(Math.abs(change), accel * dt);
  if (direction) p.dir = Math.sign(direction);

  if(p.jumpBuffer>0 && p.coyote>0){
    p.vy=-815; p.onGround=false; p.coyote=0; p.jumpBuffer=0; spawnBurst(p.x+p.w/2,p.y+p.h,'#eafcff',7); sound.jump();
  }
  if(controls.fly && p.powers.fly && p.flyEnergy>0){
    p.vy -= 2300*dt; p.flyEnergy = Math.max(0,p.flyEnergy-40*dt); spawnTrail(p.x+p.w/2,p.y+p.h/2,'rgba(230,250,255,.55)',1);
  } else { p.flyEnergy = Math.min(100,p.flyEnergy+18*dt); }
  if(!controls.jump && p.vy< -180 && !(controls.fly && p.powers.fly && p.flyEnergy>0)) p.vy += 900*dt;
  p.vy += 1760*dt; p.vy=Math.min(1040,p.vy);

  const wasFalling = !p.onGround && p.vy > 100;
  movePlayerX(p.vx*dt); movePlayerY(p.vy*dt);
  p.landPose = wasFalling && p.onGround ? .09 : Math.max(0, p.landPose - dt);
  if(p.y>H+240) damagePlayer(true);

  updateCollectibles(dt);
  updateHazards(dt);
  updatePowerEvents(dt);
  updateEnemies(dt);
  updateProjectiles(dt);
  updateParticles(dt);

  const desired = Math.max(0,Math.min(l.width-W,p.x-W*.42));
  state.cameraX += (desired-state.cameraX)*Math.min(1,dt*5.2);
  state.shake=Math.max(0,state.shake-dt*22); state.flash=Math.max(0,state.flash-dt*2.4);

  const portal={x:l.portal[0],y:l.portal[1],w:82,h:120};
  l.portalOpen = state.crystals>=3 && (!l.boss || l.bossDefeated);
  if(aabb(p,portal)){
    if(l.portalOpen) finishLevel();
    else if(state.crystals<3) showToast(`Faltam ${3-state.crystals} fragmento(s).`);
    else showToast('Derrote o chefão para abrir o portal.');
  }
}

function movePlayerX(dx){
  const p=state.player; p.x+=dx;
  for(const s of [...state.level.platforms,...state.level.hazards]){ if(aabb(p,s)){ if(dx>0) p.x=s.x-p.w; else if(dx<0) p.x=s.x+s.w; p.vx=0; } }
  p.x=Math.max(0,Math.min(state.level.width-p.w,p.x));
}
function movePlayerY(dy){
  const p=state.player; p.onGround=false; p.y+=dy;
  for(const s of [...state.level.platforms,...state.level.hazards]){ if(aabb(p,s)){ if(dy>0){ p.y=s.y-p.h; p.vy=0; p.onGround=true; } else if(dy<0){ p.y=s.y+s.h; p.vy=20; } } }
}


function updateCollectibles(dt){
  const p=state.player,l=state.level;
  for(const c of l.coins) if(c.active && circleRect(c.x,c.y,20,p)){ c.active=false; state.coins++; state.score+=100; spawnBurst(c.x,c.y,'#ffe472',10); sound.coin(); }
  for (const crystal of l.crystals) {
    if (!crystal.active) continue;
    if (!crystal.revealed && Math.abs(p.x + p.w/2 - crystal.x) < 175) {
      crystal.revealed = true;
      spawnBurst(crystal.x, crystal.y, '#aefff1', 14);
      showToast('A pista revelou um fragmento!');
    }
    if (!crystal.revealed || !circleRect(crystal.x, crystal.y, 27, p)) continue;
    crystal.active = false;
    state.crystals++;
    state.score += 500;
    const previous = save.fragments[state.levelIndex] || 0;
    save.fragments[state.levelIndex] = previous | (1 << crystal.index);
    if (previous !== save.fragments[state.levelIndex]) persist();
    spawnBurst(crystal.x, crystal.y, '#74f3ff', 18);
    sound.crystal(crystal.index);
    showToast(['Exploração', 'Salto', 'Observação'][crystal.index] + ' · ' + state.crystals + '/3 fragmentos');
  }
  for(const h of l.hearts) if(h.active && circleRect(h.x,h.y,24,p)){
    h.active=false; spawnBurst(h.x,h.y,'#ff7a93',16);
    if(p.health < p.maxHealth){ p.health++; showToast('Vida coletada! Energia aumentada.'); }
    else { state.score += 180; showToast('Coração extra convertido em pontos.'); }
  }
  for(const q of l.powers) if(q.active && circleRect(q.x,q.y,25,p)){
    q.active=false; state.score+=250; sound.power(); spawnBurst(q.x,q.y,POWER_INFO[q.type].color,16); p.powers[q.type]=true;l.powerEvents.push({type:q.type,x:q.x,y:q.y,time:0,duration:q.type==='invisible'?2.35:2.2});if(q.type==='invisible')state.nightTime=5;refreshPowerButtons();
    if(q.type==='missile') showToast('Poder desbloqueado: Míssil teleguiado');
    if(q.type==='fire') showToast('Poder desbloqueado: Fogo');
    if(q.type==='fly') showToast('Poder desbloqueado: Voar');
    if(q.type==='invisible') showToast('Poder desbloqueado: Invisibilidade');
  }
}

function updateHazards(dt){
  for(const h of state.level.hazards)h.phase+=dt;
}

function updatePowerEvents(dt){
  for(const e of state.level.powerEvents)e.time+=dt;
  state.level.powerEvents=state.level.powerEvents.filter(e=>e.time<e.duration);
}


function updateEnemies(dt){
  const p=state.player,l=state.level;
  for(const e of l.enemies){
    if(!e.alive) continue; e.phase += dt;
    if(e.type==='boss'){ updateBoss(e,dt); }
    else {
      const info = ENEMY_DRAW[e.type];
      if(info.kind==='ground'){
        e.vx=e.dir*e.speed; e.vy+=1800*dt; enemyMove(e,dt);
        const aheadX=e.dir>0?e.x+e.w+8:e.x-8, footY=e.y+e.h+8;
        const groundAhead=l.platforms.some(s=>aheadX>=s.x&&aheadX<=s.x+s.w&&footY>=s.y&&footY<=s.y+s.h+18);
        if(!groundAhead)e.dir*=-1;
      } else if(info.kind==='fly'){
        e.x += e.dir*e.speed*dt; e.y=e.baseY+Math.sin(state.time*2.4+e.phase)*46;
        if(Math.abs(e.x-e.baseX)>155)e.dir*=-1;
      } else if(info.kind==='turret'){
        e.cooldown -= dt;
        if(e.cooldown<=0 && Math.abs(p.x-e.x)<760){
          e.cooldown = 1.9;
          e.lastAttack = e.phase;
          const dx=(p.x+p.w/2)-(e.x+e.w/2),dy=(p.y+p.h/2)-(e.y+20),m=Math.hypot(dx,dy)||1;
          l.enemyShots.push({x:e.x+e.w/2,y:e.y+18,vx:dx/m*320,vy:dy/m*320,r:10,life:4,type:'orb',color:info.color});
          sound.tone(220,.08,'square',-80,.35);
        }
      }
    }
    if(aabb(p,e) && p.invisibleTime<=0){
      const topHit = p.vy>180 && p.y+p.h-e.y<32 && e.type!=='boss' && (!ENEMY_DRAW[e.type] || ENEMY_DRAW[e.type].kind!=='turret');
      if(topHit){ p.y=e.y-p.h; p.vy=-500; hitEnemy(e,1); sound.stomp(); spawnBurst(e.x+e.w/2,e.y,'#fff0b0',10); }
      else damagePlayer(false,e.x+e.w/2);
    }
  }
}

function enemyMove(e,dt){
  e.x+=e.vx*dt;
  for(const s of state.level.platforms){ if(aabb(e,s)){ if(e.vx>0)e.x=s.x-e.w; else e.x=s.x+s.w; e.dir*=-1; } }
  e.onGround=false; e.y+=e.vy*dt;
  for(const s of state.level.platforms){ if(aabb(e,s)){ if(e.vy>0){e.y=s.y-e.h;e.vy=0;e.onGround=true;} else {e.y=s.y+s.h;e.vy=0;} } }
}


function updateBoss(e,dt){
  const p=state.player,l=state.level;
  e.cooldown -= dt; e.specialCd -= dt; e.dir = p.x < e.x ? -1 : 1;
  const arena = l.bossArena || {minX:l.portal[0]-900,maxX:l.portal[0]-260,floorY:620,centerX:l.portal[0]-560};
  e.arenaMin = arena.minX;
  e.arenaMax = arena.maxX;
  const enraged = e.hp <= e.maxHp/2;
  if(e.onGround){
    const dist = (p.x+p.w/2) - (e.x+e.w/2);
    e.vx = Math.sign(dist || e.dir) * (enraged ? 170 : 125);
    if(e.specialCd <= 0 && Math.abs(dist) < 160){
      e.vx = -Math.sign(dist || 1) * (enraged ? 280 : 220);
      e.vy = -530;
      e.specialCd = enraged ? 1.1 : 1.6;
    }
    if(e.cooldown <= 0){
      e.pattern = (e.pattern + 1) % 3;
      e.lastAttack = e.phase;
      sound.boss();
      if(e.pattern === 0){
        e.vx = e.dir * (enraged ? 460 : 360);
        e.vy = -300;
        e.cooldown = enraged ? .85 : 1.15;
      } else if(e.pattern === 1){
        e.vy = enraged ? -760 : -660;
        e.vx = e.dir * (enraged ? 260 : 180);
        const count = enraged ? 4 : 3;
        for(let i=0;i<count;i++){
          const spread = (i-(count-1)/2)*70;
          l.enemyShots.push({x:e.x+e.w/2,y:e.y+20,vx:e.dir*(160+i*30),vy:-280+spread,r:14,life:5,type:'boss',color:e.theme.accent});
        }
        e.cooldown = enraged ? 1.0 : 1.45;
      } else {
        const count = enraged ? 5 : 3;
        for(let i=0;i<count;i++){
          const spread = (i-(count-1)/2)*95;
          l.enemyShots.push({x:e.x+e.w/2,y:e.y+10,vx:e.dir*(220 + Math.abs(spread)*.15),vy:-180+spread,r:13,life:5,type:'boss',color:e.theme.accent});
        }
        e.cooldown = enraged ? 1.05 : 1.55;
      }
    }
  } else {
    e.vx += e.dir * 180 * dt;
  }
  e.vy += 1750*dt;
  enemyMove(e,dt);
  if(e.x < e.arenaMin){ e.x = e.arenaMin; e.vx = Math.abs(e.vx); e.dir = 1; }
  if(e.x + e.w > e.arenaMax){ e.x = e.arenaMax - e.w; e.vx = -Math.abs(e.vx); e.dir = -1; }
  if(e.y > H + 120){ e.x = arena.centerX - e.w/2; e.y = 400; e.vx = 0; e.vy = -480; }
}



function hitEnemy(e,amount){
  e.hp -= amount; state.score += e.type==='boss' ? 350 : 150;
  if(e.hp<=0){
    e.alive=false;
    if(e.type==='boss'){
      state.level.bossDefeated = true; spawnBurst(e.x+e.w/2,e.y+e.h/2,e.theme.accent,48); state.level.hearts.push({x:e.x+e.w/2,y:e.y-30,active:true,bob:Math.random()*6.28}); showToast(`${e.bossName} derrotado! O portal foi liberado.`,2600);
    } else { spawnBurst(e.x+e.w/2,e.y+e.h/2,'#b8ff9b',14); if(Math.random() < 0.18) state.level.hearts.push({x:e.x+e.w/2,y:e.y-20,active:true,bob:Math.random()*6.28}); }
  } else { state.shake=7; spawnBurst(e.x+e.w/2,e.y+e.h/2,'#fff',8); }
}


function shootMissile(){
  const p=state.player; if(!p.powers.missile || p.cooldowns.missile>0 || state.screen!=='playing') return;
  p.cooldowns.missile=.5; state.level.projectiles.push({kind:'missile',x:p.x+p.w/2+p.dir*24,y:p.y+28,vx:p.dir*760,vy:0,r:11,life:1.5,damage:2,color:'#84d9ff',trail:'#c3eeff'}); sound.missile();
}
function shootFire(){
  const p=state.player; if(!p.powers.fire || p.cooldowns.fire>0 || state.screen!=='playing') return;
  p.cooldowns.fire=.34; state.level.projectiles.push({kind:'fire',x:p.x+p.w/2+p.dir*24,y:p.y+24,vx:p.dir*610,vy:-40,r:13,life:1.5,damage:1,color:'#ff8b4d',trail:'#ffcb75',gravity:260}); sound.fire();
}
function activateInvisibility(){
  const p=state.player; if(!p.powers.invisible || p.cooldowns.invisible>0 || state.screen!=='playing') return;
  p.cooldowns.invisible = 9; p.invisibleTime = 4.5; sound.power(); showToast('Lumi ficou invisível por alguns segundos.'); spawnBurst(p.x+p.w/2,p.y+p.h/2,'#c69cff',24);
}

function drawPlayerShot(shot) {
  ctx.save();
  ctx.translate(shot.x, shot.y);
  if (shot.kind === 'missile') ctx.rotate(Math.atan2(shot.vy, shot.vx));
  if (!shot.kind || !paintPower(shot.kind, 0, 0, shot.r * 3.5)) {
    drawShot(0, 0, shot.r, shot.color || '#ffe172');
  }
  ctx.restore();
}

function guideMissile(shot, enemies, dt) {
  if (!shot.target?.alive) {
    shot.target = null;
    let nearest = 800;
    for (const enemy of enemies) {
      if (!enemy.alive) continue;
      const x = enemy.x + enemy.w / 2;
      const dx = x - shot.x, dy = enemy.y + enemy.h / 2 - shot.y;
      if (x < state.cameraX || x > state.cameraX + W || dx * shot.vx + dy * shot.vy < 0) continue;
      const distance = Math.hypot(dx, dy);
      if (distance < nearest) {
        nearest = distance;
        shot.target = enemy;
      }
    }
  }
  if (!shot.target) return;
  const target = shot.target;
  const heading = Math.atan2(shot.vy, shot.vx);
  const desired = Math.atan2(target.y + target.h / 2 - shot.y, target.x + target.w / 2 - shot.x);
  const turn = Math.atan2(Math.sin(desired - heading), Math.cos(desired - heading));
  const angle = heading + Math.max(-7 * dt, Math.min(7 * dt, turn));
  const speed = Math.hypot(shot.vx, shot.vy);
  shot.vx = Math.cos(angle) * speed;
  shot.vy = Math.sin(angle) * speed;
}

function updateProjectiles(dt){
  const l=state.level,p=state.player;
  for(const s of l.projectiles){
    if(s.life<=0) continue;
    if(s.kind==='missile') guideMissile(s,l.enemies,dt);
    s.life-=dt; s.x+=s.vx*dt; s.y+=s.vy*dt; if(s.gravity) s.vy += s.gravity*dt;
    spawnTrail(s.x,s.y,s.trail||s.color,1);
    if([...l.platforms,...l.hazards].some(r=>circleRect(s.x,s.y,s.r,r))) s.life=0;
    for(const e of l.enemies){ if(e.alive && circleRect(s.x,s.y,s.r,e)){ s.life=0; hitEnemy(e,s.damage||1); break; } }
  }
  for(const s of l.enemyShots){
    if(s.life<=0) continue; s.life-=dt; s.x+=s.vx*dt; s.y+=s.vy*dt; s.vy += (s.type==='boss'?340:0)*dt;
    if([...l.platforms,...l.hazards].some(r=>circleRect(s.x,s.y,s.r,r))){ s.life=0; spawnBurst(s.x,s.y,s.color||'#88aaff',6); }
    if(s.life>0 && circleRect(s.x,s.y,s.r,p) && p.invisibleTime<=0){ s.life=0; damagePlayer(false,s.x); }
  }
  l.projectiles = l.projectiles.filter(s=>s.life>0); l.enemyShots=l.enemyShots.filter(s=>s.life>0);
}

function damagePlayer(fall=false, sourceX=null){
  const p=state.player; if(p.inv>0 || p.dead || p.invisibleTime>0) return;
  if(fall){
    p.health--; sound.hit(); state.flash=1; state.shake=12;
    if(p.health<=0){ p.dead=true; setTimeout(gameOver,450); return; }
    p.x=state.level.spawn[0]; p.y=state.level.spawn[1]; p.vx=0; p.vy=0; p.inv=2; showToast('Cuidado com os abismos!'); return;
  }
  p.health--; p.inv=1.4; p.vy=-420; p.vx=(sourceX!=null && sourceX<p.x)?280:-280; state.flash=1; state.shake=12; sound.hit();
  if(p.health<=0){ p.dead=true; setTimeout(gameOver,500); }
  else showToast('Você perdeu uma energia.');
}

function spawnBurst(x,y,color,count){
  for(let i=0;i<count;i++){ const a=Math.random()*Math.PI*2, s=80+Math.random()*260; state.level.particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-70,life:.35+Math.random()*.5,max:.85,size:3+Math.random()*6,color}); }
}
function spawnTrail(x,y,color,count){
  for(let i=0;i<count;i++) state.level.particles.push({x:x+(Math.random()*6-3),y:y+(Math.random()*6-3),vx:(Math.random()*40-20),vy:(Math.random()*40-20),life:.16+Math.random()*.15,max:.25,size:2+Math.random()*3,color});
}
function updateParticles(dt){ for(const p of state.level.particles){ p.life-=dt; p.x+=p.vx*dt; p.y+=p.vy*dt; p.vy+=420*dt; p.vx*=.985; } state.level.particles=state.level.particles.filter(p=>p.life>0); }

function draw(){
  ctx.clearRect(0,0,W,H);
  if(state.screen==='title'||state.screen==='levels'||state.screen==='how') return;
  else if(state.level){
    const shakeX=state.shake? (Math.random()-.5)*state.shake:0, shakeY=state.shake?(Math.random()-.5)*state.shake:0;
    ctx.save(); ctx.translate(shakeX,shakeY); drawWorld(); ctx.restore(); drawHUD(); drawLocationCard();
    if(state.flash>0){ ctx.fillStyle=`rgba(255,255,255,${state.flash*.45})`; ctx.fillRect(0,0,W,H); }
  }
}

function drawAttract(){
  const t=performance.now()/1000, theme=LEVELS[Math.floor(t/4)%LEVELS.length].theme; drawBackground(theme,t*35); ctx.save(); ctx.translate(-((t*60)%64),0); for(let x=-64;x<W+64;x+=64) drawPlatform({x,y:H-100,w:64,h:100},theme); ctx.restore();
  drawLumi(210+Math.sin(t*1.4)*14,H-160,1,t*6,false,0,theme); for(let i=0;i<6;i++) drawCoin(520+i*82,H-180-Math.sin(t*2+i)*30,t+i); drawCrystal(1060,H-205,t);
}


function drawCityLight(theme){
  if (theme.id!=='manaus' && theme.id!=='tokyo') return;
  ctx.save();
  const dusk=theme.id==='manaus';
  const sky=ctx.createLinearGradient(0,30,0,580);
  sky.addColorStop(0,dusk?'rgba(238,165,108,.27)':'rgba(97,68,161,.23)');
  sky.addColorStop(1,'rgba(26,51,58,0)');
  ctx.fillStyle=sky;ctx.fillRect(0,0,W,580);
  if(dusk){
    const offset=state.cameraX*.24;
    for(let k=0;k<8;k++){
      const x=(k*250-offset%250)-90;
      ctx.fillStyle='#324d4a';ctx.fillRect(x,515,5,91);
      ctx.fillStyle='#ffe7a4';ctx.beginPath();ctx.arc(x+2,511,6,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,220,145,.19)';ctx.beginPath();ctx.arc(x+2,511,15,0,Math.PI*2);ctx.fill();
    }
  }
  ctx.restore();
}
function drawReflectionClue(crystal,theme){
  const pulse=Math.sin(state.time*2)*.5+.5;
  ctx.save();ctx.translate(crystal.x,617);
  ctx.fillStyle=theme.id==='manaus'?'#447d88':'#3d7885';
  ctx.beginPath();ctx.ellipse(0,0,43,5,0,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#adfff3';ctx.lineWidth=2;
  for(let i=0;i<3;i++){
    const width=7+(2-i)*4+pulse*5;
    ctx.beginPath();ctx.moveTo(-width,i*-4-2);ctx.lineTo(width,i*-4-2);ctx.stroke();
  }
  ctx.translate(0,-22-pulse*3);ctx.fillStyle='#acfff2';ctx.rotate(Math.PI/4);ctx.fillRect(-4,-4,8,8);
  ctx.restore();
}

function drawWorld(){
  const l=state.level, theme=l.theme; drawBackground(theme,state.cameraX); drawCityLight(theme); ctx.save(); ctx.translate(-state.cameraX,0);
  if(state.nightTime>0)drawTemporaryNight(state.cameraX,state.nightTime);
  for(const s of l.platforms) drawPlatform(s,theme);
  drawWelcomeMarker(l);
  drawPortal(l.portal[0],l.portal[1],l.portalOpen,state.time,theme);
  for(const c of l.coins) if(c.active) drawCoin(c.x,c.y+Math.sin(state.time*4+c.bob)*6,state.time+c.bob);
  for (const c of l.crystals) {
    if (!c.active || c.x < state.cameraX-60 || c.x > state.cameraX+W+60) continue;
    if (c.index === 2) drawReflectionClue(c,theme);
    if (c.revealed) drawCrystal(c.x,c.y+Math.sin(state.time*3+c.bob)*9,state.time+c.bob);
  }
  for(const h of l.hearts) if(h.active) drawHeart(h.x,h.y+Math.sin(state.time*4+h.bob)*5,state.time+h.bob);
  for(const q of l.powers) if(q.active) drawPower(q.x,q.y+Math.sin(state.time*3+q.bob)*8,q.type,state.time);
  for(const e of l.powerEvents)drawPowerEvent(e,theme);
  for(const h of l.hazards) drawHazard(h,theme);
  for(const e of l.enemies) if(e.alive) drawEnemy(e);
  for(const s of l.projectiles) drawPlayerShot(s);
  for(const s of l.enemyShots) drawShot(s.x,s.y,s.r,s.color||'#7fa7ff');
  for(const q of l.particles){ctx.globalAlpha=Math.max(0,q.life/q.max);ctx.fillStyle=q.color;const ps=Math.max(2,Math.round(q.size/2)*2);ctx.fillRect(Math.round(q.x/2)*2,Math.round(q.y/2)*2,ps,ps);if(ps>4){ctx.globalAlpha*=.45;ctx.fillRect(Math.round(q.x)-3,Math.round(q.y)-3,3,3);}}
  ctx.globalAlpha=1;
  const p=state.player; if(!(p.inv>0&&Math.floor(p.inv*12)%2===0)) drawLumi(p.x,p.y,p.dir,p.anim,p.powers,p.invisibleTime,theme,p);
  ctx.restore();
}


function drawBackground(th,camera){
  if (sceneryCity === th.id && scenery?.complete && scenery.naturalWidth) {
    // Cover the playfield and move the panorama more slowly than the platforms.
    const scale = Math.max((W + 250) / scenery.naturalWidth, H / scenery.naturalHeight);
    const width = scenery.naturalWidth * scale, height = scenery.naturalHeight * scale;
    const distance = Math.max(1, state.level.width - W);
    const progress = Math.max(0, Math.min(1, camera / distance));
    ctx.drawImage(scenery, -(width - W)*progress, (H-height)*.53, width, height);
    return;
  }
  if(polyWorld&&polyWorld.ok){polyWorld.render(th,camera,state.time);drawDetailedBackdropLandmark(th,camera);return;}
  const g=ctx.createLinearGradient(0,0,0,H); g.addColorStop(0,th.sky1); g.addColorStop(1,th.sky2); ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
  const night=th.visual==='hollywood'||th.visual==='tokyo';
  if(night){
    ctx.globalAlpha=.72; for(let i=0;i<48;i++){ const x=(i*193-camera*.025)%1380-40,y=28+(i*79)%330,r=1+(i%3); ctx.fillStyle=i%7===0?th.accent:'#fff'; ctx.fillRect(x,y,r,r); } ctx.globalAlpha=1;
    ctx.fillStyle='rgba(255,241,202,.86)'; ctx.beginPath(); ctx.arc(1090,105,42,0,6.3); ctx.fill(); ctx.fillStyle=th.sky1; ctx.beginPath(); ctx.arc(1106,92,40,0,6.3); ctx.fill();
  } else {
    const sunX=(th.visual==='rainforest'||th.visual==='nileCity')?1080:170; ctx.fillStyle='rgba(255,231,144,.62)'; ctx.beginPath(); ctx.arc(sunX,112,48,0,6.3); ctx.fill();
    for(let i=0;i<6;i++){ const x=((i*310-camera*.07)%2100)-300,y=72+(i%3)*58; drawCloud(x,y,.78+(i%2)*.3); }
  }

  const mountainScenes=['rainforest','beach','volcanoCity','colonial','california','snowCoast','beijing','tokyo'];
  if(mountainScenes.includes(th.visual)) drawMountains(th,camera);
  else if(['megacity','nyc','hollywood','nileCity','moscow','canals','paris','london','rome'].includes(th.visual)) drawSkyline(th,camera*.14,true);
  else drawDunes(th,camera);

  if(['megacity','nyc','hollywood','nileCity','moscow','canals','paris','london'].includes(th.visual)) drawSkyline(th,camera*.25,false);
  if(['rainforest','beach','caribbean','nileCity','canals','snowCoast'].includes(th.visual)){
    const water=ctx.createLinearGradient(0,500,0,650); water.addColorStop(0,'rgba(85,220,235,.5)'); water.addColorStop(1,'rgba(20,92,145,.78)'); ctx.fillStyle=water; ctx.fillRect(0,515,W,125);
    ctx.strokeStyle='rgba(255,255,255,.32)'; ctx.lineWidth=3; for(let i=0;i<7;i++){ const y=530+i*15,off=(camera*.14+i*71)%150; for(let x=-off;x<W;x+=150){ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x+32,y-6,x+70,y);ctx.stroke();} }
  }

  drawDetailedBackdropLandmark(th,camera);

  if(th.visual==='snowCoast'||th.visual==='moscow'||th.visual==='canals'){
    ctx.fillStyle='rgba(255,255,255,.65)'; for(let i=0;i<24;i++){ const x=(i*83-camera*.09)%1360-20,y=(i*61+state.time*28*(1+i%3))%520; ctx.beginPath(); ctx.arc(x,y,2+(i%3),0,6.3); ctx.fill(); }
  }
  if(th.visual==='rainforest'){
    ctx.strokeStyle='rgba(28,100,52,.34)'; ctx.lineWidth=5; for(let i=0;i<9;i++){ const x=(i*169-camera*.22)%1450; ctx.beginPath();ctx.moveTo(x,0);ctx.bezierCurveTo(x+35,100,x-35,165,x+10,270);ctx.stroke(); }
  }
  if(th.visual==='tokyo'||th.visual==='hollywood'){
    ctx.globalAlpha=.28; for(let i=0;i<9;i++){ctx.fillStyle=i%2?th.accent:'#ff4da6';ctx.fillRect((i*173-camera*.19)%1450,250+(i%4)*62,4,105);} ctx.globalAlpha=1;
  }
}

function drawMountains(th,camera){
  const snow=th.visual==='snowCoast'||th.visual==='tokyo';
  ctx.fillStyle=th.far; ctx.beginPath();ctx.moveTo(0,H); for(let x=-180;x<W+260;x+=250){const xx=x-((camera*.10)%250),peak=th.visual==='volcanoCity'&&x%500===0?235:300+(x%3)*24;ctx.lineTo(xx+125,peak);ctx.lineTo(xx+260,H); } ctx.fill();
  if(snow){ctx.fillStyle='rgba(245,252,255,.74)';ctx.beginPath();for(let x=-180;x<W+260;x+=250){const xx=x-((camera*.10)%250);ctx.moveTo(xx+91,352);ctx.lineTo(xx+125,300+(x%3)*24);ctx.lineTo(xx+164,358);ctx.lineTo(xx+140,347);ctx.lineTo(xx+126,364);ctx.lineTo(xx+110,346);ctx.closePath();}ctx.fill();}
  ctx.fillStyle=th.mid; ctx.beginPath();ctx.moveTo(0,H);for(let x=-120;x<W+200;x+=175){const xx=x-((camera*.21)%175);ctx.lineTo(xx+85,420+(x%4)*13);ctx.lineTo(xx+190,H);}ctx.fill();
}

function drawDunes(th,camera){
  ctx.fillStyle=th.far;ctx.beginPath();ctx.moveTo(0,H);for(let x=-260;x<W+360;x+=330){const xx=x-((camera*.1)%330);ctx.quadraticCurveTo(xx+165,365+(x%3)*20,xx+330,505);}ctx.lineTo(W,H);ctx.closePath();ctx.fill();
  ctx.fillStyle=th.mid;ctx.beginPath();ctx.moveTo(0,H);for(let x=-220;x<W+320;x+=280){const xx=x-((camera*.2)%280);ctx.quadraticCurveTo(xx+140,445+(x%4)*12,xx+280,565);}ctx.lineTo(W,H);ctx.closePath();ctx.fill();
}

function drawSkyline(th,camera,far){
  const base=far?505:555,alpha=far?.32:.58; ctx.save();ctx.globalAlpha=alpha;ctx.fillStyle=far?th.far:th.mid;
  const shift=camera%150; for(let i=-2;i<12;i++){const x=i*145-shift,w=58+(i*37+500)%64,h=(far?65:95)+((i*53+420)%145);ctx.fillRect(x,base-h,w,h);if(!far){ctx.fillStyle='rgba(255,226,130,.3)';for(let wy=base-h+15;wy<base-12;wy+=24)for(let wx=x+12;wx<x+w-8;wx+=22)ctx.fillRect(wx,wy,5,8);ctx.fillStyle=th.mid;}}
  ctx.restore();
}

function drawLandmark(th,x,base){
  ctx.save();ctx.translate(x,base);ctx.globalAlpha=.88;ctx.lineCap='round';ctx.lineJoin='round';
  switch(th.id){
    case 'manaus':
      ctx.fillStyle='#efd5a0';ctx.fillRect(-115,-105,230,105);ctx.fillStyle='#de6b72';ctx.fillRect(-92,-78,184,78);ctx.fillStyle='#f2c85b';ctx.beginPath();ctx.arc(0,-108,58,Math.PI,0);ctx.fill();ctx.strokeStyle='#247d75';ctx.lineWidth=9;for(let a=-42;a<=42;a+=21){ctx.beginPath();ctx.moveTo(a,-108);ctx.quadraticCurveTo(a*.7,-151,0,-164);ctx.stroke();}ctx.fillStyle='#f4e4bd';for(let i=-3;i<=3;i++)ctx.fillRect(i*27-6,-61,12,61);break;
    case 'rio':
      ctx.fillStyle='#395b54';ctx.beginPath();ctx.moveTo(-180,0);ctx.quadraticCurveTo(-128,-165,-48,-8);ctx.quadraticCurveTo(35,-240,105,0);ctx.fill();ctx.strokeStyle='#f3eee2';ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(68,-260);ctx.lineTo(68,-185);ctx.moveTo(28,-232);ctx.lineTo(108,-232);ctx.stroke();ctx.fillStyle='#f3eee2';ctx.beginPath();ctx.arc(68,-271,13,0,6.3);ctx.fill();break;
    case 'saopaulo':
      for(let i=-4;i<=4;i++){const h=95+((i*i*31+73)%150);ctx.fillStyle=i===0?'#657184':'#414e64';ctx.fillRect(i*52-20,-h,42,h);ctx.fillStyle='#ffd45e';for(let y=-h+15;y<-8;y+=22)ctx.fillRect(i*52-7,y,7,9);}ctx.strokeStyle='#ff4f73';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-190,-18);ctx.lineTo(190,-18);ctx.stroke();break;
    case 'mexicocity':
      ctx.fillStyle='#c09a69';ctx.fillRect(-150,-84,300,84);ctx.fillStyle='#5c7358';ctx.beginPath();ctx.arc(0,-118,16,0,6.3);ctx.fill();ctx.strokeStyle='#d7b468';ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(0,-105);ctx.lineTo(0,-245);ctx.stroke();ctx.fillStyle='#d7b468';ctx.beginPath();ctx.arc(0,-248,18,0,6.3);ctx.fill();ctx.beginPath();ctx.moveTo(-58,-210);ctx.lineTo(58,-210);ctx.lineTo(0,-145);ctx.closePath();ctx.stroke();break;
    case 'cancun':
      for(let i=-2;i<=2;i++){ctx.fillStyle=i%2?'#f4eee1':'#d8f0ee';ctx.fillRect(i*85-35,-110-(i%2)*28,70,110+(i%2)*28);ctx.fillStyle='#48b8cf';for(let y=-95;y<-8;y+=24)ctx.fillRect(i*85-20,y,40,9);}drawPalm(-210,0,1.15);drawPalm(220,0,.9);break;
    case 'oaxaca':
      ctx.fillStyle='#d58b57';ctx.fillRect(-180,-96,360,96);ctx.fillStyle='#f2c27d';for(let i=-2;i<=2;i++){ctx.beginPath();ctx.arc(i*68,-48,24,Math.PI,0);ctx.lineTo(i*68+24,0);ctx.lineTo(i*68-24,0);ctx.fill();}ctx.fillStyle='#d7c38f';ctx.fillRect(-42,-138,84,138);ctx.beginPath();ctx.arc(0,-140,42,Math.PI,0);ctx.fill();break;
    case 'newyork':
      for(let i=-4;i<=4;i++){const h=110+((i*67+420)%170);ctx.fillStyle=i===1?'#52667a':'#33495e';ctx.fillRect(i*52-20,-h,40,h);}ctx.fillStyle='#6ab592';ctx.beginPath();ctx.moveTo(-205,0);ctx.lineTo(-170,-110);ctx.lineTo(-135,0);ctx.fill();ctx.fillRect(-179,-178,18,70);ctx.beginPath();ctx.arc(-170,-190,16,0,6.3);ctx.fill();ctx.strokeStyle='#f3d56c';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-170,-208);ctx.lineTo(-170,-238);ctx.stroke();break;
    case 'losangeles':
      ctx.fillStyle='#c8d5d7';ctx.beginPath();ctx.ellipse(0,-46,120,48,0,Math.PI,0);ctx.fill();ctx.fillRect(-115,-48,230,48);ctx.fillStyle='#71879b';ctx.beginPath();ctx.arc(0,-52,42,Math.PI,0);ctx.fill();drawPalm(-205,0,1.25);drawPalm(205,0,1.1);break;
    case 'hollywood':
      ctx.fillStyle='#34414b';ctx.beginPath();ctx.moveTo(-260,0);ctx.quadraticCurveTo(0,-160,260,0);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 42px system-ui';ctx.textAlign='center';ctx.fillText('HOLLYWOOD',0,-77);ctx.strokeStyle='#ffe68c';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-190,0);ctx.lineTo(-115,-205);ctx.lineTo(-40,0);ctx.moveTo(115,0);ctx.lineTo(45,-165);ctx.lineTo(-5,0);ctx.stroke();break;
    case 'cairo':
      ctx.fillStyle='#c7a46c';ctx.fillRect(-190,-75,380,75);for(let i of [-115,115]){ctx.fillRect(i-12,-205,24,130);ctx.beginPath();ctx.arc(i,-211,18,Math.PI,0);ctx.fill();}ctx.beginPath();ctx.arc(0,-94,74,Math.PI,0);ctx.fill();ctx.fillStyle='#4fa9b5';ctx.fillRect(-230,-15,460,15);break;
    case 'giza':
      drawPyramid(-105,0,180,'#d9ad64');drawPyramid(85,0,135,'#c99450');ctx.fillStyle='#ae7f47';ctx.beginPath();ctx.ellipse(220,-22,55,22,0,0,6.3);ctx.fill();ctx.beginPath();ctx.arc(247,-50,25,0,6.3);ctx.fill();break;
    case 'luxor':
      ctx.fillStyle='#c39954';for(let i=-3;i<=3;i++){ctx.fillRect(i*55-12,-142,24,142);ctx.fillRect(i*55-19,-154,38,14);}ctx.fillStyle='#d4ad64';ctx.beginPath();ctx.moveTo(0,-250);ctx.lineTo(16,-218);ctx.lineTo(10,-20);ctx.lineTo(-10,-20);ctx.lineTo(-16,-218);ctx.closePath();ctx.fill();break;
    case 'moscow':
      for(let i=-2;i<=2;i++){const xx=i*78,h=95+(i%2?28:0);ctx.fillStyle=i%2?'#4e9b77':'#d45559';ctx.fillRect(xx-25,-h,50,h);ctx.fillStyle=i%2?'#f5bd4d':'#4b8abd';ctx.beginPath();ctx.moveTo(xx-34,-h);ctx.quadraticCurveTo(xx,-h-70,xx+34,-h);ctx.fill();ctx.fillStyle='#ffd762';ctx.fillRect(xx-3,-h-70,6,18);}break;
    case 'petersburg':
      ctx.fillStyle='#77a5a2';ctx.fillRect(-210,-108,420,108);ctx.fillStyle='#e6c66d';for(let i=-3;i<=3;i++)ctx.fillRect(i*55-8,-82,16,82);ctx.beginPath();ctx.arc(0,-130,52,Math.PI,0);ctx.fill();ctx.strokeStyle='#75d7e6';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-260,0);ctx.quadraticCurveTo(0,-85,260,0);ctx.stroke();break;
    case 'sochi':
      ctx.fillStyle='#e5f4fa';ctx.beginPath();ctx.moveTo(-270,0);ctx.lineTo(-90,-210);ctx.lineTo(10,-65);ctx.lineTo(115,-235);ctx.lineTo(280,0);ctx.fill();ctx.strokeStyle='#5a7082';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-180,-70);ctx.lineTo(170,-170);ctx.moveTo(-50,-215);ctx.lineTo(-50,0);ctx.stroke();ctx.fillStyle='#ef4f5e';ctx.fillRect(-60,-222,20,12);break;
    case 'paris':
      ctx.strokeStyle='#3f4a59';ctx.lineWidth=14;ctx.beginPath();ctx.moveTo(-95,0);ctx.lineTo(-22,-250);ctx.lineTo(22,-250);ctx.lineTo(95,0);ctx.moveTo(-72,-68);ctx.lineTo(72,-68);ctx.moveTo(-45,-145);ctx.lineTo(45,-145);ctx.stroke();ctx.lineWidth=6;ctx.strokeRect(-14,-286,28,36);break;
    case 'london':
      ctx.fillStyle='#735742';ctx.fillRect(-35,-232,70,232);ctx.fillStyle='#947359';ctx.fillRect(-50,-205,100,30);ctx.beginPath();ctx.moveTo(-42,-232);ctx.lineTo(0,-290);ctx.lineTo(42,-232);ctx.fill();ctx.fillStyle='#edf3e8';ctx.beginPath();ctx.arc(0,-187,27,0,6.3);ctx.fill();ctx.strokeStyle='#30384a';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(0,-187);ctx.lineTo(0,-207);ctx.moveTo(0,-187);ctx.lineTo(15,-178);ctx.stroke();ctx.strokeStyle='#8fb5c4';ctx.lineWidth=9;ctx.beginPath();ctx.arc(150,-98,74,0,6.3);ctx.stroke();break;
    case 'rome':
      ctx.fillStyle='#a67856';roundRect(ctx,-210,-150,420,150,38);ctx.fill();ctx.fillStyle=th.sky2;for(let y=0;y<2;y++)for(let i=-3;i<=3;i++){ctx.beginPath();ctx.arc(i*54,-112+y*58,17,Math.PI,0);ctx.lineTo(i*54+17,-67+y*58);ctx.lineTo(i*54-17,-67+y*58);ctx.fill();}break;
    case 'beijing':
      ctx.fillStyle='#a63f35';ctx.fillRect(-185,-102,370,102);ctx.fillStyle='#d39d45';ctx.beginPath();ctx.moveTo(-230,-104);ctx.lineTo(230,-104);ctx.lineTo(165,-146);ctx.lineTo(-165,-146);ctx.closePath();ctx.fill();ctx.fillStyle='#b54636';ctx.fillRect(-85,-185,170,40);ctx.fillStyle='#d39d45';ctx.beginPath();ctx.moveTo(-120,-185);ctx.lineTo(120,-185);ctx.lineTo(78,-220);ctx.lineTo(-78,-220);ctx.closePath();ctx.fill();break;
    case 'agra':
      ctx.fillStyle='#e9ebe6';ctx.fillRect(-175,-72,350,72);ctx.fillRect(-116,-135,232,65);ctx.beginPath();ctx.arc(0,-150,85,Math.PI,0);ctx.fill();for(let i of [-205,205]){ctx.fillRect(i-13,-178,26,178);ctx.beginPath();ctx.arc(i,-185,22,Math.PI,0);ctx.fill();}ctx.fillStyle='#6db8bd';ctx.fillRect(-250,-12,500,12);break;
    case 'tokyo':
      ctx.fillStyle='#d9e9f0';ctx.beginPath();ctx.moveTo(-290,0);ctx.lineTo(-75,-195);ctx.lineTo(100,0);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.moveTo(-160,-119);ctx.lineTo(-75,-195);ctx.lineTo(-5,-117);ctx.lineTo(-50,-135);ctx.lineTo(-72,-113);ctx.lineTo(-95,-139);ctx.closePath();ctx.fill();ctx.strokeStyle='#e84f61';ctx.lineWidth=16;ctx.beginPath();ctx.moveTo(155,0);ctx.lineTo(155,-135);ctx.moveTo(245,0);ctx.lineTo(245,-135);ctx.moveTo(125,-135);ctx.lineTo(275,-135);ctx.moveTo(142,-165);ctx.lineTo(258,-165);ctx.stroke();break;
  }
  ctx.globalAlpha=1;ctx.restore();
}

/* Monumentos redesenhados a partir de referências arquitetônicas oficiais.
   Esta camada 2D detalhada fica sobre o cenário WebGL e atrás da jogabilidade. */
function drawDetailedBackdropLandmark(th,camera){
  const span=1760,offset=(camera*.105)%span;
  for(let k=-1;k<2;k++){
    const x=890-offset+k*span;
    if(x<-430||x>W+430)continue;
    drawResearchedMonument(th,x,535);
  }
}

function drawResearchedMonument(th,x,base,ctx=canvas.getContext('2d')){
  ctx.save();ctx.translate(Math.round(x),Math.round(base));ctx.globalAlpha=.9;ctx.lineJoin='round';ctx.lineCap='round';
  const ink='rgba(7,18,36,.82)',hi='rgba(255,255,255,.24)',lo='rgba(3,10,24,.24)';
  const B=(x,y,w,h,c,stroke=true)=>{ctx.fillStyle=c;ctx.fillRect(x,y,w,h);if(stroke){ctx.strokeStyle=ink;ctx.lineWidth=2.5;ctx.strokeRect(x,y,w,h);}};
  const P=(pts,c,stroke=true)=>{ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)ctx.lineTo(pts[i][0],pts[i][1]);ctx.closePath();ctx.fillStyle=c;ctx.fill();if(stroke){ctx.strokeStyle=ink;ctx.lineWidth=2.5;ctx.stroke();}};
  const L=(pts,c=ink,w=3)=>{ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)ctx.lineTo(pts[i][0],pts[i][1]);ctx.strokeStyle=c;ctx.lineWidth=w;ctx.stroke();};
  const E=(cx,cy,rx,ry,c,stroke=true,a0=0,a1=Math.PI*2)=>{ctx.beginPath();ctx.ellipse(cx,cy,rx,ry,0,a0,a1);ctx.fillStyle=c;ctx.fill();if(stroke){ctx.strokeStyle=ink;ctx.lineWidth=2.5;ctx.stroke();}};
  const arch=(cx,y,w,h,c)=>{ctx.beginPath();ctx.moveTo(cx-w/2,y+h);ctx.lineTo(cx-w/2,y+w/2);ctx.arc(cx,y+w/2,w/2,Math.PI,0);ctx.lineTo(cx+w/2,y+h);ctx.closePath();ctx.fillStyle=c;ctx.fill();ctx.strokeStyle=ink;ctx.lineWidth=2;ctx.stroke();};
  const windows=(x0,y0,cols,rows,dx,dy,w,h,c)=>{for(let r=0;r<rows;r++)for(let q=0;q<cols;q++)B(x0+q*dx,y0+r*dy,w,h,c,false);};
  const facets=(pts)=>{ctx.save();ctx.globalAlpha=.17;for(const f of pts)P(f,hi,false);ctx.restore();};
  ctx.save();ctx.globalAlpha=.18;E(0,8,260,28,'#020817',false);ctx.restore();

  switch(th.id){
    case 'manaus':{
      B(-196,-116,392,116,'#d96d72');B(-164,-154,328,40,'#f0d19c');P([[-178,-154],[0,-205],[178,-154]],'#efe0bd');B(-58,-205,116,34,'#e7c886');
      for(let i=-5;i<=5;i++){B(i*29-7,-107,14,107,'#f4e3c2');B(i*29-10,-113,20,8,'#caa770');}
      windows(-145,-94,5,2,72,35,28,20,'#31485a');arch(0,-91,42,90,'#432e3d');
      E(0,-213,82,54,'#e4c949',true,Math.PI,Math.PI*2);P([[-82,-213],[0,-274],[82,-213]],'#e9c943');
      const tiles=['#247b57','#e6c73e','#247b88','#f3df77'];for(let r=0;r<6;r++)for(let q=0;q<11-r;q++){const xx=(q-(10-r)/2)*14,yy=-218-r*9;P([[xx-7,yy],[xx,yy-7],[xx+7,yy],[xx,yy+7]],tiles[(q+r)%4],false);}
      L([[-196,-116],[0,-146],[196,-116]],hi,4);facets([[[-196,-116],[-80,-116],[-196,0]],[[-58,-205],[0,-239],[0,-205]]]);break;
    }
    case 'rio':{
      P([[-265,0],[-225,-62],[-185,-38],[-125,-176],[-72,-78],[-25,-292],[32,-91],[92,-208],[145,-70],[214,-128],[272,0]],'#355c4e');
      P([[-56,0],[-32,-36],[32,-36],[58,0]],'#9b9589');B(-24,-111,48,77,'#d9d5c7');P([[-19,-111],[-11,-194],[11,-194],[19,-111]],'#eeeade');E(0,-210,15,20,'#eeeade');
      P([[-13,-184],[-146,-160],[-143,-142],[-7,-159]],'#eeeade');P([[13,-184],[146,-160],[143,-142],[7,-159]],'#eeeade');
      L([[0,-112],[0,-192]],'#c5c0b5',3);L([[-130,-157],[-48,-161],[0,-174],[48,-161],[130,-157]],hi,3);facets([[[-25,-292],[32,-91],[-2,-114]],[[-146,-160],[-7,-159],[-78,-150]]]);break;
    }
    case 'saopaulo':{
      for(let i=-5;i<=5;i++){const h=88+((i*i*31+Math.abs(i)*47)%155);B(i*49-20,-h,40,h,i%2?'#36475b':'#52667a');windows(i*49-12,-h+16,2,Math.max(1,Math.floor((h-28)/26)),14,26,5,8,'#f6d468');}
      B(-210,-142,420,31,'#cf3945');B(-210,-18,420,18,'#cf3945');B(-188,-142,24,142,'#d9424d');B(164,-142,24,142,'#d9424d');
      B(-155,-126,310,93,'rgba(91,142,156,.76)');for(let q=-4;q<=4;q++)L([[q*34,-125],[q*34,-34]],'rgba(225,247,249,.52)',2);for(let r=0;r<4;r++)L([[-154,-113+r*22],[154,-113+r*22]],'rgba(225,247,249,.42)',2);
      P([[-210,-142],[-164,-142],[-188,0],[-210,0]],'#ef5a5c',false);P([[210,-142],[164,-142],[188,0],[210,0]],'#a9283c',false);break;
    }
    case 'mexicocity':{
      B(-154,-38,308,38,'#a78869');B(-126,-67,252,30,'#bea17c');B(-91,-96,182,30,'#d0b78f');
      for(const xx of [-108,108]){E(xx,-81,18,23,'#69705c');B(xx-12,-69,24,31,'#7d765f');}
      B(-27,-113,54,20,'#9c8062');P([[-19,-113],[-12,-250],[12,-250],[19,-113]],'#c7af85');for(let y=-224;y<-120;y+=24)L([[-12,y],[12,y]],'#9e8568',3);
      E(0,-264,17,20,'#b68a3f');P([[-8,-270],[-58,-296],[-18,-253]],'#d1a84d');P([[8,-270],[58,-296],[18,-253]],'#d1a84d');L([[0,-261],[0,-302]],'#d1a84d',5);E(-3,-305,7,6,'#d1a84d');
      P([[-69,-20],[-42,-42],[-18,-20]],'#7b674f');E(-48,-48,12,12,'#8a7254');P([[48,-24],[82,-43],[104,-24]],'#846d51');facets([[[-12,-250],[12,-250],[8,-113]],[[-154,-38],[0,-38],[-126,-67]]]);break;
    }
    case 'cancun':{
      const colors=['#b59058','#c9a967','#d8bd7e','#e3cc94'];for(let s=0;s<4;s++)B(-190+s*27,-38-s*45,380-s*54,39,colors[s]);
      for(let s=0;s<4;s++)P([[-28,-38-s*45],[28,-38-s*45],[20,-76-s*45],[-20,-76-s*45]],'#d9c18a');
      B(-72,-252,144,74,'#c4a267');P([[-84,-252],[84,-252],[65,-273],[-65,-273]],'#dac28b');for(let q=-1;q<=1;q++)arch(q*42,-239,26,60,'#263b3a');
      E(-38,-9,10,6,'#b18b4d');P([[-46,-11],[-68,-20],[-53,-5]],'#b18b4d');E(38,-9,10,6,'#b18b4d');P([[46,-11],[68,-20],[53,-5]],'#b18b4d');
      for(let y=-217;y<-70;y+=45)L([[-160+(y+217)*.55,y],[160-(y+217)*.55,y]],hi,3);break;
    }
    case 'oaxaca':{
      B(-202,-126,404,126,'#c99660');B(-86,-188,172,188,'#d1a66d');for(const xx of [-154,154]){B(xx-39,-205,78,205,'#c79a62');B(xx-47,-218,94,22,'#e2c58e');E(xx,-230,43,34,'#e9e5d5',true,Math.PI,Math.PI*2);for(let q=-4;q<=4;q++)P([[xx+q*8-4,-230],[xx+q*8,-238],[xx+q*8+4,-230],[xx+q*8,-222]],q%2?'#3a77b5':'#e9f1ef',false);}
      P([[-98,-188],[0,-244],[98,-188]],'#e0c18d');arch(0,-150,66,149,'#4a3a38');for(const xx of [-67,67])for(let r=0;r<3;r++){E(xx,-154+r*43,10,13,'#5a4a43');E(xx,-154+r*43,4,8,'#d5b27d',false);}
      windows(-187,-104,3,2,52,45,27,27,'#4d5960');windows(108,-104,2,2,52,45,27,27,'#4d5960');L([[-202,-126],[0,-175],[202,-126]],hi,4);break;
    }
    case 'newyork':{
      for(let i=-5;i<=5;i++){const h=82+((i*67+470)%175);B(i*50-18,-h,36,h,i%2?'#34495e':'#52677c');windows(i*50-10,-h+14,2,Math.max(1,Math.floor((h-25)/24)),13,24,5,8,'#e8ce66');}
      P([[-234,0],[-214,-50],[-185,-63],[-154,-50],[-136,0]],'#8e826e');B(-210,-128,50,78,'#a79b86');P([[-217,-128],[-153,-128],[-164,-151],[-206,-151]],'#b7aa93');
      P([[-198,-151],[-199,-228],[-184,-255],[-169,-225],[-172,-151]],'#66a98d');E(-184,-266,14,18,'#69b096');P([[-171,-247],[-126,-231],[-132,-218],[-174,-228]],'#69b096');B(-179,-243,17,45,'#5d9e86');P([[-195,-203],[-224,-173],[-210,-163],[-181,-190]],'#69b096');
      B(-130,-239,9,31,'#bb8a38');E(-125,-245,9,14,'#f3cc4d');for(let a=-1.4;a<1.5;a+=.47)L([[-184+Math.cos(a)*17,-278+Math.sin(a)*17],[-184+Math.cos(a)*35,-278+Math.sin(a)*35]],'#d8efe7',3);
      B(-142,-210,23,30,'#6d8f79');L([[-140,-205],[-122,-183]],'#d8efe7',2);break;
    }
    case 'losangeles':{
      drawPalm(-225,0,1.05);drawPalm(226,0,.95);B(-205,-84,410,84,'#d8e4e2');P([[-205,-84],[-164,-111],[164,-111],[205,-84]],'#eef3ec');
      E(0,-123,73,63,'#b9c9c6',true,Math.PI,Math.PI*2);E(0,-128,58,49,'#d9e3df',false,Math.PI,Math.PI*2);B(-68,-124,136,45,'#d5e0dc');
      for(const xx of [-135,135]){E(xx,-100,38,29,'#c8d5d3',true,Math.PI,Math.PI*2);B(xx-37,-100,74,38,'#dbe5e1');}
      for(let q=-7;q<=7;q++)B(q*25-6,-72,12,72,'#c4d1ce');windows(-185,-56,4,2,35,30,19,18,'#678495');windows(88,-56,3,2,35,30,19,18,'#678495');
      L([[-70,-124],[0,-178],[70,-124]],hi,3);facets([[[-205,-84],[-30,-84],[-164,-111]],[[0,-178],[73,-123],[0,-123]]]);break;
    }
    case 'hollywood':{
      P([[-330,0],[-286,-95],[-221,-78],[-160,-164],[-95,-132],[-23,-210],[53,-166],[130,-201],[205,-125],[286,-148],[340,0]],'#334539');
      ctx.save();ctx.translate(0,-126);ctx.rotate(-.035);ctx.font='900 48px Impact,Arial Black,sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.strokeStyle=ink;ctx.lineWidth=7;ctx.strokeText('HOLLYWOOD',0,0);ctx.fillStyle='#f1f3e8';ctx.fillText('HOLLYWOOD',0,0);ctx.restore();
      for(let q=-4;q<=4;q++){const xx=q*53;L([[xx,-104],[xx-5,-45]],'#59655d',3);L([[xx,-104],[xx+14,-45]],'#59655d',2);}
      B(186,-218,6,71,'#647064');L([[189,-218],[211,-235]],'#8b968b',3);E(214,-238,8,5,'#879488');for(let i=0;i<22;i++)B(-280+(i*97)%550,-18-(i*37)%35,3,3,'#f3d67a',false);break;
    }
    case 'cairo':{
      B(-210,-94,420,94,'#c6a978');for(const xx of [-185,185]){B(xx-14,-238,28,144,'#c8ad7e');P([[xx-18,-238],[xx,-280],[xx+18,-238]],'#d4bd90');B(xx-7,-302,14,31,'#c8ad7e');P([[xx-10,-302],[xx,-325],[xx+10,-302]],'#d8c49b');}
      E(0,-144,105,88,'#d6c195',true,Math.PI,Math.PI*2);E(-91,-118,52,48,'#cfb789',true,Math.PI,Math.PI*2);E(91,-118,52,48,'#cfb789',true,Math.PI,Math.PI*2);for(const xx of [-145,145])E(xx,-102,33,31,'#dbc79e',true,Math.PI,Math.PI*2);
      B(-7,-245,14,22,'#c8ae80');E(0,-249,9,8,'#d9c699');L([[0,-257],[0,-279]],'#987c4f',3);arch(0,-72,54,71,'#34434a');
      B(-126,-45,58,45,'#c8a774');B(-120,-75,46,31,'#dcc392');E(-97,-80,24,16,'#d7bd8a',true,Math.PI,Math.PI*2);E(-97,-60,11,11,'#edf2db');break;
    }
    case 'giza':{
      P([[-260,0],[-92,-301],[92,0]],'#d5ad6b');P([[-92,-301],[-18,0],[92,0]],'#b9864c');for(let r=1;r<13;r++){const y=-r*23,left=-260+(168*r/13),right=92-(184*r/13);L([[left,y],[right,y]],'rgba(86,55,34,.35)',2);}
      P([[40,0],[155,-205],[257,0]],'#c49554');P([[155,-205],[181,0],[257,0]],'#aa7541');P([[128,-160],[155,-205],[182,-160]],'#efe0b7',false);
      E(230,-29,81,27,'#a97c4d');P([[175,-36],[143,-18],[177,-8]],'#a97c4d');B(248,-72,42,48,'#b2875b');P([[243,-84],[269,-103],[295,-82],[287,-53],[249,-53]],'#b99165');P([[247,-84],[263,-112],[279,-85]],'#c2a075');B(153,-18,89,14,'#b68b59');B(252,-16,75,12,'#b68b59');B(225,-35,10,23,'#8d6945');break;
    }
    case 'luxor':{
      P([[-230,0],[-210,-171],[-66,-151],[-55,0]],'#c39856');P([[55,0],[66,-151],[210,-171],[230,0]],'#b98c4e');L([[-210,-171],[-66,-151]],hi,4);L([[66,-151],[210,-171]],hi,4);
      P([[-13,0],[-10,-272],[10,-272],[13,0]],'#d7b267');P([[-10,-272],[0,-302],[10,-272]],'#ebcf89');
      for(const xx of [-108,108]){B(xx-28,-73,56,73,'#b68b50');E(xx,-84,25,28,'#c49b5d');B(xx-19,-44,38,19,'#9c7344');}
      const cols=[-192,-151,-110,-69,69,110,151,192];for(const xx of cols){B(xx-10,-145,20,145,'#c9a15b');B(xx-17,-157,34,14,'#deb971');E(xx,-159,18,8,'#d4ad65');L([[xx-5,-139],[xx-5,-6]],hi,2);}
      for(const xx of [-35,35])for(let d=0;d<5;d++){const px=xx+(xx<0?-d:d)*28,py=-118+d*25;B(px-8,py,16,118-py*-0.22,'#b98b50');E(px,py-3,12,6,'#d7ad63');}break;
    }
    case 'moscow':{
      B(-206,-96,412,96,'#b54646');for(let q=-7;q<=7;q++)B(q*27-7,-88,14,88,q%2?'#d36657':'#a93843');
      const towers=[[-154,-151,35,'#4b91aa'],[-82,-183,43,'#e1b94f'],[0,-224,54,'#4b986b'],[82,-177,40,'#d65b57'],[154,-145,34,'#d8b442']];
      towers.forEach((v,i)=>{const [xx,y,rr]=v;B(xx-25,y,50,-y-10,i%2?'#bb4a45':'#d55a50');E(xx,y,rr,rr*.75,i===0?'#3f8faf':i===1?'#e7bc4a':i===2?'#55a56e':i===3?'#d85862':'#e3bd45');P([[xx-rr,y],[xx,y-rr*1.08],[xx+rr,y]],i%2?'#f0d15f':'#66af7d');L([[xx,y-rr*.8],[xx,y-rr-25]],'#d6bb4f',4);});
      for(let q=-3;q<=3;q++)arch(q*49,-63,25,62,'#273746');for(let i=0;i<5;i++)L([[towers[i][0]-towers[i][2]*.65,towers[i][1]],[towers[i][0]+towers[i][2]*.65,towers[i][1]]],hi,3);break;
    }
    case 'petersburg':{
      B(-286,-142,572,142,'#6f9f94');B(-108,-178,216,36,'#77aa9f');P([[-126,-178],[0,-218],[126,-178]],'#e6d2a4');
      for(let q=-9;q<=9;q++){B(q*29-5,-136,10,136,'#efe0bd');B(q*29-9,-143,18,10,'#d6bc81');if(q<9)arch(q*29+14,-105,17,53,'#496a6c');B(q*29+7,-42,15,23,'#446268',false);}
      for(let q=-8;q<=8;q+=2){P([[q*29-6,-147],[q*29,-161],[q*29+6,-147]],'#dbc17e');E(q*29,-164,5,8,'#eee1bf');}
      B(-286,-12,572,12,'#d4c099');L([[-286,-142],[0,-125],[286,-142]],hi,3);facets([[[-286,-142],[-108,-142],[-286,0]],[[0,-218],[126,-178],[0,-178]]]);break;
    }
    case 'sochi':{
      B(-272,-78,544,78,'#e7efec');P([[-286,-78],[-195,-119],[195,-119],[286,-78]],'#f6f6eb');for(let q=-8;q<=8;q++)arch(q*31,-66,18,65,'#7592a0');
      B(-62,-188,124,109,'#e8eeea');B(-48,-229,96,41,'#f4f2e4');B(-35,-270,70,41,'#e5ece8');for(const y of [-208,-250])E(0,y,15,15,'#edf5f1');
      P([[-12,-270],[0,-350],[12,-270]],'#dbe5e2');P([[-3,-351],[0,-366],[3,-351]],'#d6aa3e');
      for(const xx of [-48,-16,16,48])E(xx,-176,5,9,xx<0?'#d3b06c':'#c29a61');for(const xx of [-28,28])E(xx,-257,6,7,'#79a4ad');L([[-272,-78],[0,-109],[272,-78]],hi,4);break;
    }
    case 'paris':{
      const iron='#5e554a';P([[-128,0],[-43,-281],[-20,-281],[-54,0]],iron);P([[128,0],[43,-281],[20,-281],[54,0]],'#49464a');P([[-45,-281],[0,-336],[45,-281]],'#5e554a');B(-67,-168,134,18,'#665f54');B(-104,-75,208,22,'#5b554e');B(-29,-284,58,14,'#6f6658');B(-11,-343,22,12,'#5b554e');L([[0,-343],[0,-375]],iron,5);
      for(let y=-260;y<-82;y+=28){const t=(y+280)/220,left=-41-t*54,right=41+t*54;L([[left,y],[right,y+28]],'#a0927d',2);L([[right,y],[left,y+28]],'#a0927d',2);}
      for(let y=-63;y<-6;y+=25){const left=-110+(y+63)*-.22,right=110+(y+63)*.22;L([[left,y],[right,y+24]],'#998b76',2);L([[right,y],[left,y+24]],'#998b76',2);}
      ctx.beginPath();ctx.moveTo(-104,-74);ctx.quadraticCurveTo(0,-150,104,-74);ctx.strokeStyle='#7d7160';ctx.lineWidth=8;ctx.stroke();break;
    }
    case 'london':{
      B(-57,-258,114,258,'#93744d');B(-66,-226,132,26,'#c7a65e');B(-52,-302,104,45,'#a98452');for(const xx of [-46,46])P([[xx-13,-302],[xx,-331],[xx+13,-302]],'#cfad65');
      E(0,-231,42,42,'#e9eadf');E(0,-231,35,35,'#f8f4df');for(let a=0;a<Math.PI*2;a+=Math.PI/6)L([[Math.cos(a)*28,-231+Math.sin(a)*28],[Math.cos(a)*34,-231+Math.sin(a)*34]],'#3b4e58',2);L([[0,-231],[0,-257]],'#293a45',4);L([[0,-231],[22,-219]],'#293a45',4);
      for(let r=0;r<5;r++){const y=-180+r*35;for(const xx of [-31,0,31])arch(xx,y,16,26,'#46545b');}
      P([[-47,-302],[0,-368],[47,-302]],'#b39159');P([[-21,-347],[0,-394],[21,-347]],'#c5a462');L([[0,-394],[0,-420]],'#bba05e',5);for(const xx of [-57,57])for(const y of [-258,-199,-70])P([[xx-8,y],[xx,y-16],[xx+8,y]],'#d2b56d');break;
    }
    case 'rome':{
      ctx.beginPath();ctx.ellipse(0,-72,263,119,0,Math.PI,Math.PI*2);ctx.lineTo(263,0);ctx.lineTo(-263,0);ctx.closePath();ctx.fillStyle='#aa7957';ctx.fill();ctx.strokeStyle=ink;ctx.lineWidth=3;ctx.stroke();
      for(let r=0;r<3;r++){const y=-130+r*43,count=r===2?12:14;for(let q=0;q<count;q++){const xx=-224+q*(448/(count-1));arch(xx,y,22,34,r===2?'#66514b':'#4a4650');}}
      B(-260,-10,520,12,'#8d634c');P([[155,-174],[257,-124],[257,-83],[176,-113]],'#6f5045');for(let y=-143;y<-15;y+=43)L([[-243,y],[243,y]],hi,2);facets([[[-263,-72],[-80,-72],[-175,-171]],[[0,-191],[155,-174],[80,-72]]]);break;
    }
    case 'beijing':{
      B(-235,-26,470,26,'#e7e2d3');B(-207,-49,414,24,'#f0ece0');B(-178,-71,356,23,'#e8e4da');for(let q=-7;q<=7;q++)B(q*23-7,-72,14,75,'#b73f37');
      B(-184,-158,368,86,'#a93c34');for(let q=-7;q<=7;q++)B(q*24-6,-154,12,82,'#ca4d3f');
      P([[-235,-158],[235,-158],[178,-213],[-178,-213]],'#d9a83e');P([[-205,-158],[205,-158],[168,-187],[-168,-187]],'#efd062',false);P([[-213,-187],[213,-187],[165,-233],[-165,-233]],'#d39b34');P([[-174,-187],[174,-187],[146,-214],[-146,-214]],'#efc955',false);
      for(let q=-9;q<=9;q++)P([[q*21-5,-158],[q*21,-170],[q*21+5,-158]],q%2?'#3c705a':'#e4bd4e');for(let q=-7;q<=7;q++)E(q*23,-238+(Math.abs(q)%2)*2,4,4,'#d8b145');arch(0,-139,56,67,'#4b352e');break;
    }
    case 'agra':{
      B(-252,-31,504,31,'#e8ebe7');B(-155,-133,310,103,'#edf0ec');P([[-155,-133],[-122,-165],[122,-165],[155,-133]],'#f5f4ec');
      for(const xx of [-219,219]){B(xx-14,-218,28,187,'#e7ebe8');for(const y of [-184,-119,-60])B(xx-19,y,38,8,'#d8ddda');E(xx,-228,23,31,'#eff1ed',true,Math.PI,Math.PI*2);L([[xx,-259],[xx,-280]],'#b8a46e',4);}
      E(0,-181,91,87,'#eff1ed',true,Math.PI,Math.PI*2);B(-82,-186,164,61,'#eff1ed');B(-79,-196,158,23,'#e4e8e4');E(0,-235,79,72,'#f5f5ef',true,Math.PI,Math.PI*2);B(-62,-236,124,54,'#f5f5ef');P([[-4,-306],[0,-331],[4,-306]],'#baa669');
      for(const xx of [-112,112]){E(xx,-168,31,27,'#e8ece8',true,Math.PI,Math.PI*2);arch(xx,-154,32,85,'#6f7b7d');}arch(0,-154,60,123,'#7b8583');
      B(-17,-72,34,41,'#d8ddd8');E(0,-76,17,20,'#8a5551');B(-8,-188,16,24,'#ded4b2',false);B(-5,-315,10,15,'#c0aa68',false);B(-258,-13,516,13,'#76aeb1');B(-31,0,62,74,'rgba(72,153,169,.38)',false);break;
    }
    case 'tokyo':{
      P([[-330,0],[-201,-116],[-89,-252],[42,-90],[146,0]],'#c3d6dd');P([[-172,-147],[-89,-252],[-11,-162],[-54,-178],[-85,-158],[-118,-180]],'#f8fbf6');
      const red='#e34b48',white='#f0eee6';P([[110,0],[166,-274],[186,-274],[147,0]],red);P([[286,0],[230,-274],[210,-274],[249,0]],'#c94145');B(143,-128,110,18,white);B(151,-169,94,17,red);B(161,-211,74,18,white);B(171,-275,54,17,red);
      for(let y=-250;y<-20;y+=28){const t=(y+274)/274,left=178-t*54,right=218+t*54;L([[left,y],[right,y+28]],y%56?white:red,4);L([[right,y],[left,y+28]],y%56?white:red,4);}
      P([[165,-275],[198,-339],[231,-275]],red);B(191,-347,14,14,white);L([[198,-347],[198,-391]],red,5);B(153,-168,90,5,'#e9f9ff',false);B(164,-210,68,5,'#e9f9ff',false);break;
    }
  }
  ctx.restore();
}

function drawPalm(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.strokeStyle='#765132';ctx.lineWidth=11;ctx.beginPath();ctx.moveTo(0,0);ctx.quadraticCurveTo(-22,-75,2,-150);ctx.stroke();ctx.strokeStyle='#2e8b62';ctx.lineWidth=12;for(let a=-2.5;a<.7;a+=.63){ctx.beginPath();ctx.moveTo(2,-150);ctx.quadraticCurveTo(Math.cos(a)*65,-150+Math.sin(a)*42,Math.cos(a)*95,-150+Math.sin(a)*70);ctx.stroke();}ctx.restore();}
function drawPyramid(x,y,size,color){ctx.fillStyle=color;ctx.beginPath();ctx.moveTo(x-size/2,y);ctx.lineTo(x,y-size);ctx.lineTo(x+size/2,y);ctx.closePath();ctx.fill();ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.moveTo(x,y-size);ctx.lineTo(x,y);ctx.lineTo(x-size/2,y);ctx.closePath();ctx.fill();}
function drawCloud(x,y,s){ ctx.save(); ctx.translate(x,y); ctx.scale(s,s); ctx.fillStyle='rgba(255,255,255,.66)'; [[0,20,42],[42,0,54],[94,20,38],[45,30,70]].forEach(a=>{ ctx.beginPath(); ctx.arc(a[0],a[1],a[2],0,6.3); ctx.fill(); }); ctx.restore(); }

function drawWelcomeMarker(level){
  const th=level.theme,x=420,y=620;ctx.save();
  ctx.fillStyle='#4d392d';ctx.fillRect(x,y-86,8,86);ctx.fillStyle=th.routeColor;ctx.fillRect(x+8,y-82,150,48);ctx.fillStyle=th.accent;ctx.fillRect(x+8,y-82,150,6);ctx.fillRect(x+8,y-40,150,6);
  ctx.fillStyle='#fff';ctx.font='900 13px system-ui';ctx.textAlign='center';ctx.fillText('INÍCIO TRANQUILO',x+83,y-61);ctx.font='800 11px system-ui';ctx.fillStyle='rgba(255,255,255,.82)';ctx.fillText(level.phaseName.toUpperCase(),x+83,y-45);
  ctx.fillStyle=th.ground;ctx.fillRect(x-8,y-8,24,8);ctx.restore();
}

function drawHazard(h,th){
  const x=Math.round(h.x),y=Math.round(h.y),pulse=.5+.5*Math.sin(state.time*5+h.phase),palette={root:'#7b5737',wave:'#248eac',barrier:'#e8783f',obsidian:'#393442',coral:'#dc7776',pot:'#b96f47',hydrant:'#c94d55',cone:'#e78142',film:'#252b3a',papyrus:'#4c9a79',sandspike:'#c79a58',column:'#ae8150',ice:'#8acfe2',gear:'#b49a4d',snowdrift:'#c9edf4',bollard:'#4c5562',puddle:'#4988a2',rubble:'#8d6952',lion:'#aa895c',lotus:'#e8a5c3',neon:'#303651'},base=palette[h.type]||th.soil;
  const B=(xx,yy,w,hh,c,a=1)=>{ctx.globalAlpha=a;ctx.fillStyle=c;ctx.fillRect(xx,yy,w,hh);ctx.globalAlpha=1;};ctx.save();
  B(x-6,y-6,60,60,th.accent,.07+.08*pulse);B(x-2,y-2,52,52,'#071225');B(x,y,48,48,'#263047');B(x+4,y+4,40,40,base);B(x+4,y+4,40,7,'rgba(255,255,255,.24)');B(x+4,y+37,40,7,'rgba(0,0,0,.26)');B(x+4,y+4,7,40,'rgba(255,255,255,.13)');B(x+37,y+4,7,40,'rgba(0,0,0,.25)');
  B(x+8,y+8,8,5,th.accent,.7+.3*pulse);B(x+32,y+8,8,5,th.accent,.7+.3*pulse);B(x+8,y+35,8,5,'#f4e8bd');B(x+32,y+35,8,5,'#f4e8bd');B(x+19,y-3,10,5,'#071225');B(x+21,y-1,6,5,'#eef7ff',.5+.4*pulse);
  B(x+10,y+15,28,3,'rgba(255,255,255,.16)');B(x+10,y+30,28,3,'rgba(0,0,0,.18)');B(x+6,y+21,4,4,'#071225',.55);B(x+38,y+21,4,4,'#071225',.55);for(let q=0;q<4;q++){B(x+3+q*13,y+3,3,3,'#f5e8bd',.72);B(x+3+q*13,y+42,3,3,'#493425',.72);}B(x+12,y+12,3,3,'#ffffff',.18);B(x+33,y+31,3,3,'#071225',.24);
  drawPixelEnemyMark(th.motif,x+24,y+25);ctx.restore();
}

function drawHazardLegacy(h,th){
  const pulse=.65+.35*Math.sin(state.time*6+h.phase),x=Math.round(h.x),y=Math.round(h.y),B=(xx,yy,w,hh,c,a=1)=>{ctx.globalAlpha=a;ctx.fillStyle=c;ctx.fillRect(xx,yy,w,hh);ctx.globalAlpha=1;};ctx.save();
  switch(h.type){
    case 'root':B(x+20,y,8,36,'#62442e');B(x+8,y+10,16,7,'#62442e');B(x+28,y+17,15,7,'#62442e');B(x+5,y+2,8,12,'#2b8552');B(x+36,y+8,8,12,'#2b8552');B(x+18,y-6,6,10,th.accent,pulse);break;
    case 'wave':B(x,y+28,48,8,'#167baa');B(x+6,y+20,36,8,'#24b9d1');B(x+14,y+12,24,8,'#7ae8ee');B(x+24,y+4,14,8,'#f3ffff',pulse);break;
    case 'barrier':B(x+4,y+8,40,22,'#ed6e3d');B(x,y+30,48,6,'#3d4652');for(let i=0;i<4;i++)B(x+7+i*10,y+10,5,18,'#f7eee0');B(x+8,y+2,6,8,'#ffd95b',pulse);B(x+34,y+2,6,8,'#ffd95b',pulse);break;
    case 'obsidian':B(x+4,y+27,40,9,'#292b36');B(x+8,y+18,8,9,'#45404e');B(x+14,y+8,9,19,'#211f2c');B(x+25,y,10,27,'#40324f');B(x+36,y+14,8,13,'#242330');B(x+27,y+4,4,12,'#a664c7',pulse);break;
    case 'coral':B(x+20,y+8,8,28,'#df6d72');B(x+8,y+14,15,7,'#ef8a7e');B(x+4,y+6,7,14,'#df6d72');B(x+27,y+19,14,7,'#ef8a7e');B(x+38,y+11,7,14,'#df6d72');B(x+17,y,5,10,th.accent,pulse);break;
    case 'pot':B(x+9,y+10,30,6,'#df9d4f');B(x+13,y+16,23,16,'#b96743');B(x+18,y+32,14,4,'#744331');B(x+22,y+17,4,12,'#ffd85a',pulse);B(x+26,y+25,6,4,'#ffd85a',pulse);break;
    case 'hydrant':B(x+14,y+10,20,26,'#d5464e');B(x+9,y+14,30,7,'#f16a62');B(x+11,y+3,26,8,'#d5464e');B(x+18,y,12,5,'#f2b84e');B(x+36,y+16,10,7,'#8bdff1',pulse);B(x+42,y+9,5,7,'#d8fbff',pulse);break;
    case 'cone':B(x+4,y+31,40,5,'#343d4d');B(x+12,y+26,24,5,'#f0783f');B(x+16,y+16,16,10,'#f39a48');B(x+20,y+5,8,11,'#f0783f');B(x+16,y+19,16,5,'#f6f1df');break;
    case 'film':B(x+3,y+28,42,8,'#242a39');B(x+5,y+5,16,16,'#e8ece6');B(x+27,y+5,16,16,'#e8ece6');for(const xx of [8,15,30,37])B(x+xx,y+8,4,4,'#242a39');B(x+19,y+18,10,13,'#eece5b',pulse);break;
    case 'papyrus':for(let i=0;i<4;i++){B(x+6+i*11,y+8+(i%2)*5,5,28-(i%2)*5,'#3b9a88');B(x+2+i*11,y+4+(i%2)*5,13,5,'#58c7ae');}B(x+17,y+20,15,5,th.accent,pulse);break;
    case 'sandspike':B(x,y+30,48,6,'#a87942');B(x+5,y+21,8,9,'#c99750');B(x+13,y+12,9,18,'#d7ab61');B(x+23,y,9,30,'#e0ba72');B(x+33,y+16,9,14,'#c99750');break;
    case 'column':B(x+2,y+25,44,11,'#9b7042');B(x+7,y+17,34,8,'#c19353');B(x+13,y+7,25,10,'#b17f48');B(x+32,y+2,10,8,'#d1aa67');B(x+17,y+10,4,7,th.accent,pulse);break;
    case 'ice':B(x,y+30,48,6,'#76b9cf');B(x+4,y+18,9,12,'#dff8ff');B(x+13,y+5,10,25,'#a6e1ef');B(x+25,y+13,9,17,'#eafcff');B(x+35,y,9,30,'#8fd3e7');B(x+37,y+3,4,15,'#fff',pulse);break;
    case 'gear':B(x+6,y+7,36,26,'#c2a046');B(x,y+15,48,10,'#c2a046');B(x+15,y,10,36,'#c2a046');B(x+18,y+10,12,16,'#4d657a');B(x+22,y+14,4,8,'#e8e0c8',pulse);break;
    case 'snowdrift':B(x,y+29,48,7,'#88c1d3');B(x+5,y+20,38,9,'#dff7fb');B(x+12,y+11,28,9,'#f8ffff');B(x+22,y+3,14,8,'#fff');B(x+26,y+5,5,5,th.accent,pulse);break;
    case 'bollard':B(x+17,y+7,14,29,'#414b58');B(x+12,y+3,24,7,'#d6b65c');B(x+8,y+32,32,4,'#303845');B(x+33,y+8,5,8,'#ffe875',pulse);B(x+38,y+4,5,5,'#fff3a8',pulse);break;
    case 'puddle':B(x,y+28,48,8,'#4b849d');B(x+7,y+23,34,5,'#8cd6e7');B(x+6,y+10,5,13,'#f3cf59',pulse);B(x+11,y+10,10,4,'#f3cf59',pulse);B(x+28,y+4,5,19,'#f3cf59',pulse);B(x+22,y+14,11,4,'#f3cf59',pulse);break;
    case 'rubble':B(x,y+29,48,7,'#6d5246');B(x+4,y+18,14,11,'#a97e5d');B(x+20,y+11,16,18,'#bd9270');B(x+35,y+20,10,9,'#94705a');B(x+25,y+14,5,5,th.accent,pulse);break;
    case 'lion':B(x+8,y+12,32,22,'#a88255');B(x+4,y+16,8,14,'#bea06e');B(x+36,y+16,8,14,'#bea06e');B(x+13,y+6,9,8,'#c6aa76');B(x+27,y+6,9,8,'#c6aa76');B(x+15,y+31,7,5,'#746149');B(x+28,y+31,7,5,'#746149');B(x+18,y+18,4,4,th.accent,pulse);B(x+29,y+18,4,4,th.accent,pulse);break;
    case 'lotus':B(x+20,y+27,8,9,'#4b9f82');B(x+7,y+20,14,9,'#ec9fc1');B(x+27,y+20,14,9,'#ec9fc1');B(x+14,y+10,12,16,'#f4bfd4');B(x+24,y+6,12,20,'#ffd7e6');B(x+21,y+15,7,7,th.accent,pulse);break;
    default:B(x+3,y+27,42,9,'#343b54');B(x+7,y+5,7,22,'#59eff5',pulse);B(x+34,y+5,7,22,'#ff5793',pulse);B(x+12,y+9,22,5,'#59eff5',pulse);B(x+12,y+19,22,5,'#ff5793',pulse);break;
  }
  ctx.restore();
}

function drawPlatform(s,th){
  const px=4,x=Math.floor(s.x/px)*px,y=Math.floor(s.y/px)*px,w=Math.ceil(s.w/px)*px,h=Math.ceil(s.h/px)*px,top=Math.min(28,h);
  ctx.save();ctx.fillStyle='#071326';ctx.fillRect(x-3,y-3,w+6,h+6);ctx.fillStyle=th.soil;ctx.fillRect(x,y,w,h);ctx.fillStyle=th.ground;ctx.fillRect(x,y,w,top);
  const band=(color,yy=y+8,hh=6)=>{ctx.fillStyle=color;for(let xx=x+8;xx<x+w-8;xx+=32)ctx.fillRect(xx,yy,16,hh);};
  switch(th.id){
    case 'manaus':ctx.fillStyle='#7c5334';for(let xx=x;xx<x+w;xx+=32)ctx.fillRect(xx,y+8,4,h-8);band('#e1b75e',y+4,4);ctx.fillStyle='#2b8653';for(let xx=x+20;xx<x+w;xx+=72){ctx.fillRect(xx,y+20,5,Math.min(48,h-20));ctx.fillRect(xx+5,y+34,10,5);}break;
    case 'rio':ctx.fillStyle='#f5f1dc';ctx.fillRect(x,y,w,top);for(let xx=x;xx<x+w;xx+=32){ctx.fillStyle='#202d3b';ctx.fillRect(xx,y+8,8,8);ctx.fillRect(xx+8,y+12,8,8);ctx.fillRect(xx+16,y+8,8,8);}break;
    case 'saopaulo':ctx.fillStyle='#667280';ctx.fillRect(x,y,w,h);ctx.fillStyle='#d93645';ctx.fillRect(x,y,8,h);ctx.fillRect(x+w-8,y,8,h);ctx.fillRect(x,y+16,w,6);band('#d9e1e3',y+5,5);break;
    case 'mexicocity':ctx.fillStyle='#383943';ctx.fillRect(x,y,w,h);for(let xx=x+8;xx<x+w;xx+=24){ctx.fillStyle=xx%48?'#67606b':'#b68b4d';ctx.fillRect(xx,y+6,8,8);ctx.fillRect(xx-4,y+10,16,4);}break;
    case 'cancun':ctx.fillStyle='#d9bd79';ctx.fillRect(x,y,w,h);band('#f5dd9c',y+4,6);for(let xx=x+12;xx<x+w;xx+=40){ctx.fillStyle='#e06b70';ctx.fillRect(xx,y+12,4,10);ctx.fillRect(xx-4,y+12,12,4);}break;
    case 'oaxaca':ctx.fillStyle='#b75c4d';ctx.fillRect(x,y,w,h);for(let xx=x;xx<x+w;xx+=24){ctx.fillStyle=['#ffd65a','#5bd49c','#4e8ed9','#f06b9d'][(xx/24)%4|0];ctx.fillRect(xx,y+4,12,8);ctx.fillRect(xx+6,y+12,12,8);}break;
    case 'newyork':ctx.fillStyle='#46576b';ctx.fillRect(x,y,w,h);ctx.fillStyle='#e5b942';ctx.fillRect(x,y+5,w,7);for(let xx=x+12;xx<x+w;xx+=28){ctx.fillStyle='#a9beca';ctx.fillRect(xx,y+16,4,4);}break;
    case 'losangeles':ctx.fillStyle='#c58e65';ctx.fillRect(x,y,w,h);ctx.fillStyle='#f2cb72';ctx.fillRect(x,y+5,w,7);for(let xx=x+18;xx<x+w;xx+=64){ctx.fillStyle='#3b8459';ctx.fillRect(xx,y+12,4,12);ctx.fillRect(xx-5,y+12,14,4);}break;
    case 'hollywood':ctx.fillStyle='#222838';ctx.fillRect(x,y,w,h);ctx.fillStyle='#eef1e7';ctx.fillRect(x,y+5,w,5);for(let xx=x+6;xx<x+w;xx+=22){ctx.fillRect(xx,y+14,10,6);}break;
    case 'cairo':ctx.fillStyle='#b8915d';ctx.fillRect(x,y,w,h);ctx.fillStyle='#4ab3c2';ctx.fillRect(x,y+5,w,6);band('#e2c17f',y+15,5);break;
    case 'giza':ctx.fillStyle='#c99a55';ctx.fillRect(x,y,w,h);for(let yy=y+4;yy<y+h;yy+=16)for(let xx=x+((yy/16)%2)*16;xx<x+w;xx+=32){ctx.fillStyle='#e0bb76';ctx.fillRect(xx,yy,28,4);}break;
    case 'luxor':ctx.fillStyle='#b68145';ctx.fillRect(x,y,w,h);band('#e1b960',y+4,5);for(let xx=x+18;xx<x+w;xx+=48){ctx.fillStyle='#6a4b35';ctx.fillRect(xx,y+12,4,9);ctx.fillRect(xx-4,y+12,12,4);}break;
    case 'moscow':ctx.fillStyle='#a84548';ctx.fillRect(x,y,w,h);for(let xx=x+8;xx<x+w;xx+=24){ctx.fillStyle='#d07158';ctx.fillRect(xx,y+12,18,5);}ctx.fillStyle='#f5fcff';ctx.fillRect(x,y,w,9);break;
    case 'petersburg':ctx.fillStyle='#57968c';ctx.fillRect(x,y,w,h);ctx.fillStyle='#e6d9b9';for(let xx=x+12;xx<x+w;xx+=32)ctx.fillRect(xx,y+8,7,h-8);band('#d7b84d',y+4,4);break;
    case 'sochi':ctx.fillStyle='#78b8cc';ctx.fillRect(x,y,w,h);ctx.fillStyle='#f4fdff';ctx.fillRect(x,y,w,10);for(let xx=x+8;xx<x+w;xx+=40){ctx.fillStyle='#bde7ef';ctx.fillRect(xx,y+13,24,5);}break;
    case 'paris':ctx.fillStyle='#485160';ctx.fillRect(x,y,w,h);ctx.fillStyle='#b5a06f';ctx.fillRect(x,y+4,w,5);for(let xx=x+8;xx<x+w;xx+=32){ctx.fillStyle='#838d96';ctx.fillRect(xx,y+12,4,12);ctx.fillRect(xx+16,y+12,4,12);ctx.fillRect(xx+4,y+16,12,4);}break;
    case 'london':ctx.fillStyle='#725747';ctx.fillRect(x,y,w,h);for(let yy=y+8;yy<y+h;yy+=16)for(let xx=x+((yy/16)%2)*12;xx<x+w;xx+=24){ctx.fillStyle='#9b795d';ctx.fillRect(xx,yy,20,5);}band('#d1ad4f',y+3,4);break;
    case 'rome':ctx.fillStyle='#9b7154';ctx.fillRect(x,y,w,h);for(let xx=x+8;xx<x+w;xx+=32){ctx.fillStyle='#5e4b45';ctx.fillRect(xx,y+12,20,12);ctx.fillStyle='#b98e6d';ctx.fillRect(xx+4,y+12,12,4);}break;
    case 'beijing':ctx.fillStyle='#a54038';ctx.fillRect(x,y,w,h);ctx.fillStyle='#d7a63d';ctx.fillRect(x,y+3,w,7);for(let xx=x+8;xx<x+w;xx+=32){ctx.fillStyle='#ead66b';ctx.fillRect(xx,y+14,18,5);}break;
    case 'agra':ctx.fillStyle='#e6e9e4';ctx.fillRect(x,y,w,h);for(let xx=x+12;xx<x+w;xx+=36){ctx.fillStyle='#df6d97';ctx.fillRect(xx,y+7,5,5);ctx.fillStyle='#4aa79d';ctx.fillRect(xx+5,y+12,5,5);}break;
    case 'tokyo':ctx.fillStyle='#293149';ctx.fillRect(x,y,w,h);ctx.fillStyle='#5cecf3';ctx.fillRect(x,y+4,w,4);for(let xx=x+8;xx<x+w;xx+=40){ctx.fillStyle='#ff568f';ctx.fillRect(xx,y+12,22,4);ctx.fillRect(xx+18,y+12,4,10);}break;
  }
  ctx.fillStyle='rgba(255,255,255,.28)';ctx.fillRect(x,y,w,2);ctx.fillStyle='rgba(0,0,0,.28)';ctx.fillRect(x,y+h-4,w,4);ctx.fillRect(x+w-4,y,4,h);
  for(let yy=y+8;yy<y+h-6;yy+=14)for(let xx=x+8+((yy/14)%2)*7;xx<x+w-7;xx+=22){const k=(Math.floor(xx/2)+Math.floor(yy/2)+th.id.length)%5;ctx.fillStyle=k<2?'rgba(255,255,255,.13)':'rgba(0,0,0,.14)';ctx.fillRect(xx,yy,k===0?5:3,k===3?4:2);}
  for(let xx=x+12;xx<x+w-10;xx+=48){ctx.fillStyle=th.accent;ctx.globalAlpha=.25;ctx.fillRect(xx,y+5,3,3);ctx.fillRect(xx+5,y+9,2,2);ctx.globalAlpha=1;}
  ctx.restore();
}

// The 4×3 sheet is indexed in reading order. All frames share the same foot anchor.
function lumiFrame(player, anim) {
  if (player) {
    if (!player.onGround) {
      if (player.vy < -740) return 8;
      return player.vy < 0 ? 9 : 10;
    }
    if (player.landPose > 0) return 11;
    if (Math.abs(player.vx) < 12) return Math.floor(state.time * 1.6) % 2;
  }
  return 2 + Math.floor(anim) % 6;
}
function drawLumi(x, y, dir, anim, powers, invisibleTime, theme, player) {
  if (!lumiSheet.complete || !lumiSheet.naturalWidth) {
    drawHero(x,y,dir,anim,powers,invisibleTime,theme);
    return;
  }
  const index = lumiFrame(player, anim);
  const cell = 224, span = 86;
  ctx.save();
  ctx.translate(x + 23, y + 60);
  ctx.scale(dir, 1);
  ctx.globalAlpha = invisibleTime > 0 ? .55 : 1;
  if (!player || player.onGround) {
    ctx.beginPath(); ctx.ellipse(0, 0, 19, 3, 0, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(10,28,36,.26)'; ctx.fill();
  }
  if (powers.fly) drawPixelPowerSymbol('fly', -12, -35, .85, state.time);
  ctx.drawImage(lumiSheet, index%4*cell, Math.floor(index/4)*cell, cell, cell,
    -span/2, -span*(cell-2)/cell, span, span);
  if (powers.missile) drawPixelPowerSymbol('missile', -17, -30, .44, state.time);
  if (powers.fire) drawPixelPowerSymbol('fire', 15, -28, .50, state.time);
  if (invisibleTime > 0) {
    ctx.strokeStyle = '#d6acff'; ctx.lineWidth = 2; ctx.setLineDash([5,6]);
    ctx.beginPath(); ctx.ellipse(0,-34,29,39,0,0,Math.PI*2); ctx.stroke();
  }
  ctx.restore();
}

function drawHeroLegacy(x,y,dir,anim,powers,invisibleTime,th){
  powers=powers||{};const step=Math.round(Math.sin(anim)*2)*2,look=th?.art?.hero||'explorer',coat=th?.routeColor||'#2860a8',accent=th?.accent||'#ff8a54';
  ctx.save();ctx.translate(Math.round(x+23),Math.round(y+30));ctx.scale(dir,1);ctx.globalAlpha=invisibleTime>0?.43:1;
  const B=(xx,yy,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(Math.round(xx),Math.round(yy),w,h);};
  B(-22,29,44,6,'rgba(0,0,0,.22)');
  if(invisibleTime>0){B(-29,-34,4,8,'#c69cff');B(25,-18,4,8,'#c69cff');B(-25,19,5,5,'#e3c7ff');}
  B(-21,-3,7,22,accent);B(-16,13,10,14,'#17345e');B(6,13,10,14,'#17345e');B(-19+step,25,14,7,'#15233f');B(5-step,25,14,7,'#15233f');
  B(-18,-6,36,23,coat);B(-14,-2,28,5,'rgba(255,255,255,.25)');B(-3,-6,6,23,accent);B(-19,14,38,6,'#1f477c');
  B(-16,-30,31,22,'#ffd3a6');B(-12,-34,23,6,'#6b46bd');B(-17,-30,7,16,'#6b46bd');B(4,-23,8,7,'#fff');B(8,-21,4,4,'#17325e');B(14,-3,8,7,'#ffd3a6');B(20,1+step/4,9,7,'#ffd3a6');
  switch(look){
    case 'explorer':B(-18,-39,36,5,'#bd8549');B(-12,-44,25,7,'#d4a35e');B(-7,-44,4,7,'#2f7652');break;
    case 'visor':B(-14,-35,27,5,'#39b8df');B(7,-32,13,4,'#e9f8ff');B(-1,-21,15,5,'#253654');break;
    case 'urban':B(-17,-37,32,5,'#252f4c');B(-19,-30,5,12,'#57e4ff');B(13,-30,5,12,'#ff5f8e');break;
    case 'charro':B(-23,-39,46,5,'#b87c45');B(-13,-46,27,9,'#d7a25d');B(-9,-41,19,3,'#e84b5c');break;
    case 'sunhat':B(-22,-39,44,5,'#e9c56c');B(-13,-45,26,8,'#f0d482');B(-10,-39,22,3,'#46b8bd');break;
    case 'flower':for(let i=0;i<4;i++){B(-13+i*8,-38-(i%2)*3,6,6,['#ffcf4c','#f05b9a','#50d29a','#5d8ee5'][i]);}break;
    case 'citycap':B(-15,-40,29,9,'#4b7995');B(7,-34,15,4,'#4b7995');B(-8,-39,6,4,'#f1c94d');break;
    case 'sunglasses':B(-1,-23,17,5,'#18243b');B(-16,-38,30,5,'#f07462');B(8,-35,11,4,'#f07462');break;
    case 'director':B(-15,-40,29,7,'#20263a');B(-20,-38,38,4,'#20263a');B(-21,1,7,18,'#f4f0e5');for(let i=0;i<3;i++)B(-21+i*3,1,2,7,'#20263a');break;
    case 'desertscarf':B(-18,-39,34,7,'#d5a357');B(-18,-33,7,20,'#d5a357');B(12,-29,7,16,'#4ab7bf');break;
    case 'headwrap':B(-17,-39,33,8,'#f2dfb4');B(-18,-33,35,5,'#d5aa61');B(-17,-28,6,12,'#f2dfb4');break;
    case 'sunband':B(-17,-36,34,5,'#e0b545');B(-3,-41,7,8,'#f4d75e');B(-1,-44,3,4,'#f4d75e');break;
    case 'ushanka':B(-18,-42,35,10,'#815b55');B(-20,-35,8,13,'#815b55');B(12,-35,8,13,'#815b55');B(-10,-40,20,4,'#f0f5f6');break;
    case 'imperialcoat':B(-16,-40,32,7,'#2f6b78');B(-20,-35,7,12,'#e8e4d6');B(12,-35,7,12,'#e8e4d6');B(-13,6,26,4,'#d7ba56');break;
    case 'skigoggles':B(-17,-39,34,7,'#ecf8ff');B(-12,-31,27,8,'#56cce6');B(-8,-29,18,4,'#314a6b');break;
    case 'beret':B(-15,-41,27,8,'#3b4359');B(-20,-38,34,4,'#3b4359');B(-21,0,7,24,'#e85d75');break;
    case 'detective':B(-17,-41,34,7,'#806b55');B(5,-39,18,4,'#806b55');B(-21,-3,8,23,'#c59a62');break;
    case 'laurel':for(let i=0;i<5;i++){B(-18+i*8,-37-Math.abs(2-i)*2,7,4,'#d7b94d');}B(-2,-40,4,7,'#d7b94d');break;
    case 'redjacket':B(-16,-39,32,7,'#c94a40');B(-3,-43,6,6,'#e3b744');B(-15,7,30,4,'#e3b744');break;
    case 'lotussash':B(-17,-38,34,5,'#efb9cf');B(-21,-4,7,24,'#efb9cf');B(-4,-42,8,5,'#5fb8a7');break;
    case 'neonband':B(-17,-38,34,5,'#59eff5');B(10,-36,12,4,'#ff5793');B(-16,7,32,4,'#59eff5');break;
  }
  if(powers.missile){B(27,1,13,6,'#9de1ff');B(37,3,5,3,'#fff');}
  if(powers.fire){B(28,-1,9,9,'#ff9b59');B(31,-5,5,5,'#ffe06a');}
  if(powers.fly){B(-28,-12,8,25,'#f4fbff');B(-32,-8,5,16,'#bfe8ff');}
  ctx.restore();
}

function drawHero(x,y,dir,anim,powers,invisibleTime,th){
  powers=powers||{};const look=th?.art?.hero||'explorer',coat=th?.routeColor||'#2860a8',accent=th?.accent||'#ff8a54',alpha=invisibleTime>0?.48:1,walk=Math.sin(anim),step=Math.round(walk*4),arm=Math.round(Math.sin(anim+Math.PI)*3),bob=Math.abs(walk)>.2?-Math.abs(Math.round(walk*2)):0;
  ctx.save();ctx.translate(Math.round(x+23),Math.round(y+30+bob));ctx.scale(dir,1);const B=(xx,yy,w,h,c,a=1)=>{ctx.globalAlpha=a*alpha;ctx.fillStyle=c;ctx.fillRect(Math.round(xx),Math.round(yy),Math.round(w),Math.round(h));ctx.globalAlpha=1;};
  /* Sombra, aura e contorno: o sprite usa uma malha de 2–4 px, com silhueta sempre legível. */
  B(-24,31,48,5,'#030817',.3);B(-18,35,36,3,'#030817',.18);if(invisibleTime>0){for(let i=0;i<7;i++)B(-29+(i*11)%55,-40+(i*17)%72,3,3,i%2?'#c69cff':'#73efff',.72);}
  /* Pernas em quatro poses e sapatos com sola e brilho. */
  B(-17,13,14,18,'#0a1730');B(3,13,14,18,'#0a1730');B(-14+step,15,10,15,'#244f83');B(4-step,15,10,15,'#244f83');
  B(-18+step,27,17,7,'#081222');B(1-step,27,17,7,'#081222');B(-14+step,27,12,3,'#405979');B(4-step,27,11,3,'#405979');B(-18+step,34,17,2,'#020713');B(1-step,34,17,2,'#020713');
  /* Braços articulados, mãos e punhos. */
  B(-24,-7+arm,9,26,'#0a1429');B(15,-7-arm,9,26,'#0a1429');B(-21,-4+arm,6,18,accent);B(15,-4-arm,6,18,accent);B(-22,12+arm,8,7,'#d99870');B(14,12-arm,8,7,'#ffd0a4');B(-20,10+arm,6,3,'#fff0d8',.6);
  /* Casaco com borda, gola, tecido em três tons, cinto e emblema de cristal. */
  B(-20,-10,40,29,'#081326');B(-17,-8,34,25,coat);B(-17,-8,34,5,'#ffffff',.18);B(-17,13,34,4,'#102647');B(-3,-8,6,25,accent);B(-1,-5,2,18,'#fff3b0',.68);B(-14,-4,7,4,'#ffffff',.22);B(7,-4,7,4,'#061430',.24);B(-19,17,38,5,'#132d51');B(-7,17,14,5,accent);B(-4,1,8,5,'#e8ffff');B(-2,-2,4,3,th?.accent||'#72efff');B(-2,6,4,3,'#78dce9');
  /* Cabeça, cabelo, orelha e rosto expressivo em pixels menores. */
  B(-18,-34,36,27,'#081225');B(-15,-32,30,23,'#ffd2a5');B(-15,-32,30,5,'#8a563d');B(-15,-28,5,12,'#8a563d');B(-12,-29,5,4,'#b9724d');B(13,-25,5,10,'#081225');B(12,-24,4,8,'#f2ad82');
  B(2,-25,10,7,'#fff8e8');B(7,-24,4,4,'#152746');B(8,-25,2,2,'#78e9f2');B(-6,-23,5,3,'#d08d6d');B(2,-15,9,3,'#7d3f48');B(3,-14,5,2,'#f2a1a9');B(11,-19,3,3,'#e8a27e');B(-11,-12,5,3,'#efb98f');
  /* Cada região muda chapéu, cabelo, faixa e pequenos adereços sem trocar a identidade do herói. */
  switch(look){
    case 'explorer':B(-21,-42,42,5,'#3f2b25');B(-15,-47,30,8,'#c28a4e');B(-11,-45,22,3,'#e0b069');B(-7,-47,5,7,'#2f7652');B(-4,-45,2,3,'#74c47c');break;
    case 'visor':B(-16,-39,33,6,'#10273d');B(-13,-37,28,6,'#39b8df');B(-9,-35,20,2,'#aef6ff');B(7,-32,13,4,'#e9f8ff');break;
    case 'urban':B(-19,-40,38,5,'#10172c');B(-15,-44,30,7,'#252f4c');B(-18,-30,4,13,'#57e4ff');B(14,-30,4,13,'#ff5f8e');B(-17,-24,3,5,'#dffcff');break;
    case 'charro':B(-25,-43,50,5,'#3b2724');B(-17,-50,34,10,'#b87c45');B(-13,-48,26,4,'#e4b96d');B(-11,-42,23,3,'#e84b5c');B(-7,-50,4,4,'#f5d25f');B(4,-50,4,4,'#f5d25f');break;
    case 'sunhat':B(-24,-43,48,5,'#9e6f3b');B(-15,-49,30,9,'#e9c56c');B(-10,-47,20,4,'#f5df9a');B(-12,-42,25,3,'#46b8bd');break;
    case 'flower':for(let i=0;i<5;i++){const cc=['#ffcf4c','#f05b9a','#50d29a','#5d8ee5','#ff785f'][i];B(-17+i*8,-40-(i%2)*4,7,7,'#251a32');B(-15+i*8,-39-(i%2)*4,4,4,cc);}B(-19,-34,5,11,'#3b7455');break;
    case 'citycap':B(-18,-44,36,10,'#1c2b3f');B(-14,-42,28,7,'#4b7995');B(7,-36,17,5,'#4b7995');B(-7,-42,6,4,'#f1c94d');B(-5,-41,2,2,'#fff0a0');break;
    case 'sunglasses':B(-1,-25,18,7,'#081326');B(1,-23,6,3,'#6ce6f2');B(10,-23,5,3,'#ff7aa5');B(-18,-41,34,6,'#8f3d46');B(-14,-44,28,7,'#f07462');B(8,-39,13,4,'#f07462');break;
    case 'director':B(-18,-44,36,8,'#0d1323');B(-23,-40,44,5,'#20263a');B(-25,0,8,21,'#081121');B(-22,2,5,16,'#f4f0e5');for(let i=0;i<3;i++)B(-22+i*2,2,1,8,'#20263a');break;
    case 'desertscarf':B(-20,-43,40,8,'#7e6038');B(-17,-41,34,7,'#d5a357');B(-19,-34,7,23,'#d5a357');B(12,-31,7,18,'#4ab7bf');B(14,-27,3,8,'#bff8f9');break;
    case 'headwrap':B(-19,-44,38,11,'#8b6f4c');B(-16,-42,32,8,'#f2dfb4');B(-18,-35,36,5,'#d5aa61');B(-18,-30,6,13,'#f2dfb4');B(-14,-29,3,7,'#fff5d6');break;
    case 'sunband':B(-18,-40,36,6,'#6f532c');B(-16,-38,32,5,'#e0b545');B(-3,-45,7,10,'#f4d75e');B(-1,-49,3,5,'#fff0a4');break;
    case 'ushanka':B(-21,-46,42,13,'#352b32');B(-18,-44,36,10,'#815b55');B(-22,-37,9,15,'#815b55');B(13,-37,9,15,'#815b55');B(-11,-43,22,4,'#f0f5f6');B(-8,-40,16,2,'#fff');break;
    case 'imperialcoat':B(-18,-44,36,9,'#173d4a');B(-16,-42,32,7,'#2f6b78');B(-21,-37,8,14,'#e8e4d6');B(13,-37,8,14,'#e8e4d6');B(-13,7,26,4,'#d7ba56');B(-2,5,4,4,'#fff0a0');break;
    case 'skigoggles':B(-19,-44,38,9,'#a5d6e3');B(-17,-42,34,7,'#ecf8ff');B(-14,-34,30,9,'#183149');B(-11,-32,25,5,'#56cce6');B(-8,-31,8,3,'#d8ffff');break;
    case 'beret':B(-17,-46,31,10,'#151b2d');B(-21,-42,38,5,'#3b4359');B(-24,-1,8,25,'#5f2038');B(-21,1,6,22,'#e85d75');B(-20,2,2,10,'#ffb4c1');break;
    case 'detective':B(-20,-45,40,8,'#493b32');B(-17,-43,34,7,'#806b55');B(5,-41,20,5,'#806b55');B(-24,-4,9,26,'#5f462f');B(-21,-2,6,23,'#c59a62');break;
    case 'laurel':for(let i=0;i<6;i++){B(-21+i*8,-41-Math.abs(2.5-i)*2,8,5,'#5e542b');B(-19+i*8,-40-Math.abs(2.5-i)*2,5,3,'#d7b94d');}B(-2,-45,4,8,'#f0d76e');break;
    case 'redjacket':B(-18,-43,36,8,'#5c2528');B(-16,-41,32,7,'#c94a40');B(-3,-47,6,8,'#e3b744');B(-15,7,30,4,'#e3b744');B(-12,8,5,2,'#fff0a0');break;
    case 'lotussash':B(-18,-42,36,6,'#7d4d65');B(-16,-40,32,5,'#efb9cf');B(-24,-5,9,26,'#7d4d65');B(-21,-3,6,23,'#efb9cf');B(-4,-46,8,6,'#5fb8a7');break;
    case 'neonband':B(-18,-42,36,6,'#15233e');B(-16,-40,32,5,'#59eff5');B(10,-39,14,5,'#ff5793');B(-17,7,34,5,'#12213f');B(-15,8,30,3,'#59eff5');break;
  }
  if(powers.missile){B(22,-2,17,10,'#071426');B(24,0,14,6,'#9de1ff');B(36,2,6,3,'#fff');B(23,6,5,3,'#e94f59');}
  if(powers.fire){B(22,-4,15,15,'#521f25');B(25,-1,10,10,'#ff9b59');B(28,-6,6,7,'#ffe06a');B(30,-3,3,6,'#fff3a0');}
  if(powers.fly){const flap=Math.round(Math.sin(anim*1.7)*4);B(-31,-16-flap,12,31,'#36536e');B(-29,-14-flap,8,27,'#f4fbff');B(-35,-8-flap,8,18,'#bfe8ff');B(20,-12+flap,9,24,'#dff7ff',.86);B(27,-6+flap,7,14,'#a8dff1',.82);}
  ctx.restore();
}


function drawEnemy(e){
  if(e.type==='boss'){ drawBoss(e); return; }
  const info=ENEMY_DRAW[e.type],id=e.theme.id,flap=Math.round(Math.sin(e.phase*10)*2)*3;ctx.save();ctx.translate(Math.round(e.x+e.w/2),Math.round(e.y+e.h/2));
  const B=(x,y,w,h,c,a=1)=>{ctx.globalAlpha=a;ctx.fillStyle=c;ctx.fillRect(x,y,w,h);ctx.globalAlpha=1;};
  B(-24,19,48,5,'rgba(0,0,0,.26)');B(-17,24,34,3,'rgba(0,0,0,.15)');
  if(info.kind==='ground'){
    const hop=Math.round(Math.sin(e.phase*5))*2,foot=Math.round(Math.sin(e.phase*7))*2;B(-23,-19+hop,46,34,'#071225');B(-27,-9+hop,7,20,'#071225');B(20,-9+hop,7,20,'#071225');B(-20,-16+hop,40,29,info.color);B(-24,-8+hop,5,17,info.color);B(19,-8+hop,5,17,info.color);B(-19,12+foot,15,8,'#071225');B(4,12-foot,15,8,'#071225');B(-17,13+foot,12,5,info.accent);B(5,13-foot,12,5,info.accent);B(-16,-13+hop,31,5,'#ffffff',.14);B(-13,-9+hop,9,9,'#f5fbff');B(4,-9+hop,9,9,'#f5fbff');B(-10,-6+hop,4,4,info.eye);B(7,-6+hop,4,4,info.eye);B(-9,3+hop,18,4,'#071225');B(-5,3+hop,10,2,'#ffffff',.38);B(-17,8+hop,5,3,info.accent,.7);B(12,8+hop,5,3,info.accent,.7);
  } else if(info.kind==='fly'){
    B(-31,-15-flap,18,11,'#071225');B(-26,-6-flap,16,10,'#071225');B(13,-15+flap,18,11,'#071225');B(10,-6+flap,16,10,'#071225');B(-28,-12-flap,14,8,info.color);B(-23,-4-flap,13,7,info.color);B(14,-12+flap,14,8,info.color);B(10,-4+flap,13,7,info.color);B(-16,-16,32,33,'#071225');B(-13,-13,26,27,info.accent);B(-10,-10,8,8,'#fff');B(2,-10,8,8,'#fff');B(-7,-7,4,4,info.color);B(4,-7,4,4,info.color);B(-6,5,12,4,'#071225');B(-3,6,6,2,'#fff',.35);B(-5,13,10,5,info.color);B(-1,-18,3,5,'#ffffff',.22);
  } else {
    B(-25,-28,50,48,'#071225');B(-29,15,58,13,'#071225');B(-19,25,38,9,'#071225');B(-22,-25,44,43,info.color);B(-26,16,52,9,info.accent);B(-16,25,32,6,info.accent);B(-12,-17,24,19,info.accent);B(-8,-13,16,11,'#dfeaff');B(-5,-10,10,6,info.eye);B(-17,7,34,6,'rgba(255,255,255,.28)');B(-15,9,9,2,'#fff',.45);B(8,-22,8,4,'#ffffff',.17);B(-20,-20,4,4,info.accent);B(16,-20,4,4,info.accent);
  }
  switch(id){
    case 'manaus':B(-21,-24,7,10,'#2f8c58');B(14,-27,7,13,'#2f8c58');B(-25,-29,12,6,'#5bd47d');B(13,-32,13,6,'#5bd47d');break;
    case 'rio':B(-24,8,12,5,'#f5f1df');B(-18,3,12,5,'#38bdd4');B(12,-22,9,5,'#ffd65d');break;
    case 'saopaulo':B(-8,-27,16,6,'#ff7848');B(-5,-35,10,8,'#ff9a57');B(-8,-30,16,3,'#f1f1df');break;
    case 'mexicocity':for(let i=0;i<4;i++){B(-3+i*2,-31-i%2*4,6,6,'#383a46');}B(-18,8,36,4,'#d4ae52');break;
    case 'cancun':B(-31,-2,10,6,'#ff8068');B(-35,-7,6,10,'#ff8068');B(21,-2,10,6,'#ff8068');B(29,-7,6,10,'#ff8068');break;
    case 'oaxaca':B(-18,-31,7,13,'#ffd64f');B(11,-34,7,16,'#50d19b');B(-24,-34,8,8,'#f05b9d');B(17,-37,8,8,'#568ce0');break;
    case 'newyork':B(-13,-25,26,7,'#f3c743');B(-7,-29,14,5,'#f3c743');for(let i=0;i<4;i++)B(-18+i*10,7,5,5,i%2?'#fff':'#202a38');break;
    case 'losangeles':B(-24,17,48,4,'#ef7954');B(-18,21,7,5,'#27344a');B(11,21,7,5,'#27344a');B(-12,-24,24,5,'#ffe066');break;
    case 'hollywood':B(-23,-28,46,8,'#f0eee4');for(let i=0;i<5;i++)B(-21+i*9,-28,5,8,'#202535');B(-18,8,36,4,'#d94a67');break;
    case 'cairo':for(let i=0;i<3;i++){B(-29,-9+i*8,10,3,'#b67e38');B(19,-9+i*8,10,3,'#b67e38');}B(-5,-25,10,7,'#55c3cd');break;
    case 'giza':B(-18,-29,36,7,'#d2a357');B(-12,-36,24,7,'#e3bd72');B(-6,-42,12,6,'#f0d38a');break;
    case 'luxor':B(-18,-35,9,17,'#8d704e');B(9,-35,9,17,'#8d704e');B(-13,-40,7,8,'#c49c5c');B(6,-40,7,8,'#c49c5c');break;
    case 'moscow':B(-22,-29,44,8,'#f6fdff');B(-16,-36,32,8,'#9ed4e3');B(-8,-40,16,5,'#fff');break;
    case 'petersburg':B(-16,-30,32,6,'#d8bc55');B(-13,-36,6,7,'#d8bc55');B(-3,-40,6,11,'#d8bc55');B(7,-36,6,7,'#d8bc55');break;
    case 'sochi':B(-28,18,56,4,'#dff8ff');B(-24,22,20,4,'#536f89');B(4,22,20,4,'#536f89');B(-13,-26,26,7,'#72d9ef');break;
    case 'paris':B(-18,-29,32,7,'#3f4657');B(-23,-26,39,4,'#3f4657');B(13,5,7,11,'#e6c25f');break;
    case 'london':B(-25,-31,50,6,'#596675');B(-18,-38,36,8,'#778795');B(-3,-44,6,7,'#778795');break;
    case 'rome':B(-24,-25,10,9,'#c19470');B(14,-25,10,9,'#c19470');B(-16,5,7,7,'#e0b181');B(9,5,7,7,'#e0b181');break;
    case 'beijing':B(-23,-24,8,12,'#d5aa4b');B(15,-24,8,12,'#d5aa4b');B(-19,-31,10,9,'#c84b40');B(9,-31,10,9,'#c84b40');B(-27,-8,7,18,'#d5aa4b');B(20,-8,7,18,'#d5aa4b');break;
    case 'agra':B(-28,-18,12,22,'#8f83c9');B(16,-18,12,22,'#8f83c9');B(14,-3,12,6,'#6e61ad');B(21,1,7,14,'#6e61ad');break;
    case 'tokyo':B(-22,-26,44,8,'#40e3e8');B(-17,-31,34,5,'#ff557b');B(17,-7,12,5,'#62f0f3');B(-29,-7,12,5,'#62f0f3');break;
  }
  drawPixelEnemyMark(info.motif,0,info.kind==='turret'?9:7);
  B(-20,-1,3,3,'#ffffff',.32);B(17,4,3,3,'#071225',.42);if(info.kind!=='turret'){B(-3,-22,6,3,'#071225');B(-1,-27-Math.round(Math.sin(e.phase*6)*2),2,6,info.accent);B(-3,-29-Math.round(Math.sin(e.phase*6)*2),6,3,e.theme.accent||'#fff');}
  if(e.elite){B(-12,-35,5,5,'#fff3a3');B(-2,-40,5,8,'#fff3a3');B(8,-35,5,5,'#fff3a3');}
  ctx.restore();
}

function drawPixelEnemyMark(motif,x,y){
  const B=(xx,yy,w,h)=>ctx.fillRect(x+xx,y+yy,w,h);ctx.fillStyle='rgba(255,255,255,.88)';
  if(['wave','nile','canal'].includes(motif)){B(-10,-4,8,3);B(-4,-1,8,3);B(2,-4,8,3);B(-10,4,8,3);B(-4,7,8,3);}
  else if(['leaf','palm'].includes(motif)){B(-2,-8,4,16);B(2,-7,7,4);B(-9,0,7,4);}
  else if(['gear','clock'].includes(motif)){B(-8,-6,16,12);B(-4,-10,8,20);ctx.fillStyle='#24334a';B(-2,-2,4,4);}
  else if(['cactus','coral'].includes(motif)){B(-2,-9,4,18);B(-9,-4,7,4);B(-9,-8,4,8);B(2,1,8,4);B(6,-4,4,9);}
  else if(['flower','lotus','sun','star','snow'].includes(motif)){B(-3,-10,6,20);B(-10,-3,20,6);B(-7,-7,5,5);B(3,-7,5,5);B(-7,3,5,5);B(3,3,5,5);}
  else if(['pyramid','tower','onion','arch'].includes(motif)){B(-3,-9,6,4);B(-6,-5,12,5);B(-9,0,18,7);}
  else if(motif==='camera'){B(-10,-6,20,13);ctx.fillStyle='#26334c';B(-4,-2,8,6);ctx.fillStyle='#fff';B(-6,-10,9,4);}
  else if(motif==='wall'){B(-10,-7,20,5);B(-10,2,20,5);B(-7,-2,5,4);B(2,-2,5,4);}
  else {B(-8,-8,5,5);B(3,-8,5,5);B(-3,-3,6,6);B(-8,3,5,5);B(3,3,5,5);}
}

function drawEnemyMark(motif,x,y){
  ctx.save();ctx.translate(x,y);ctx.strokeStyle='rgba(255,255,255,.9)';ctx.fillStyle='rgba(255,255,255,.82)';ctx.lineWidth=2.6;ctx.lineCap='round';ctx.lineJoin='round';
  if(motif==='leaf'){ctx.beginPath();ctx.ellipse(0,0,5,10,.7,0,6.3);ctx.stroke();ctx.beginPath();ctx.moveTo(-5,7);ctx.lineTo(5,-7);ctx.stroke();}
  else if(motif==='wave'||motif==='nile'||motif==='canal'){for(let i=0;i<2;i++){ctx.beginPath();ctx.moveTo(-10,y*0+i*6-3);ctx.quadraticCurveTo(-5,-7+i*6,0,-3+i*6);ctx.quadraticCurveTo(5,1+i*6,10,-3+i*6);ctx.stroke();}}
  else if(motif==='gear'){ctx.beginPath();ctx.arc(0,0,7,0,6.3);ctx.stroke();ctx.beginPath();ctx.arc(0,0,2,0,6.3);ctx.fill();for(let a=0;a<6;a++){ctx.save();ctx.rotate(a*Math.PI/3);ctx.fillRect(-2,-12,4,5);ctx.restore();}}
  else if(motif==='cactus'){ctx.beginPath();ctx.moveTo(0,9);ctx.lineTo(0,-9);ctx.moveTo(0,1);ctx.lineTo(-7,-2);ctx.lineTo(-7,-7);ctx.moveTo(0,-3);ctx.lineTo(7,-5);ctx.lineTo(7,-9);ctx.stroke();}
  else if(motif==='coral'){ctx.beginPath();ctx.moveTo(0,9);ctx.lineTo(0,-8);ctx.moveTo(0,2);ctx.lineTo(-8,-4);ctx.moveTo(0,-2);ctx.lineTo(8,-7);ctx.stroke();}
  else if(motif==='flower'||motif==='lotus'){for(let a=0;a<6;a++){ctx.save();ctx.rotate(a*Math.PI/3);ctx.beginPath();ctx.ellipse(0,-5,3,6,0,0,6.3);ctx.stroke();ctx.restore();}ctx.beginPath();ctx.arc(0,0,2,0,6.3);ctx.fill();}
  else if(motif==='star'||motif==='sun'){ctx.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?4:9;ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r);}ctx.closePath();ctx.stroke();}
  else if(motif==='palm'){ctx.beginPath();ctx.moveTo(0,9);ctx.quadraticCurveTo(-2,0,1,-7);ctx.moveTo(1,-7);ctx.lineTo(-8,-10);ctx.moveTo(1,-7);ctx.lineTo(10,-9);ctx.moveTo(1,-7);ctx.lineTo(-4,-14);ctx.stroke();}
  else if(motif==='camera'){ctx.strokeRect(-9,-6,18,13);ctx.beginPath();ctx.arc(0,0,4,0,6.3);ctx.stroke();ctx.fillRect(-5,-10,8,4);}
  else if(motif==='pyramid'){ctx.beginPath();ctx.moveTo(-10,8);ctx.lineTo(0,-10);ctx.lineTo(10,8);ctx.closePath();ctx.stroke();}
  else if(motif==='onion'){ctx.beginPath();ctx.moveTo(-7,6);ctx.quadraticCurveTo(-9,-3,0,-10);ctx.quadraticCurveTo(9,-3,7,6);ctx.closePath();ctx.stroke();}
  else if(motif==='snow'){for(let a=0;a<3;a++){ctx.save();ctx.rotate(a*Math.PI/3);ctx.beginPath();ctx.moveTo(-10,0);ctx.lineTo(10,0);ctx.stroke();ctx.restore();}}
  else if(motif==='tower'){ctx.beginPath();ctx.moveTo(-8,9);ctx.lineTo(-2,-10);ctx.lineTo(2,-10);ctx.lineTo(8,9);ctx.moveTo(-5,2);ctx.lineTo(5,2);ctx.stroke();}
  else if(motif==='clock'){ctx.beginPath();ctx.arc(0,0,9,0,6.3);ctx.stroke();ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,-6);ctx.moveTo(0,0);ctx.lineTo(5,3);ctx.stroke();}
  else if(motif==='arch'){ctx.beginPath();ctx.moveTo(-8,9);ctx.lineTo(-8,-1);ctx.arc(0,-1,8,Math.PI,0);ctx.lineTo(8,9);ctx.stroke();}
  else if(motif==='wall'){ctx.strokeRect(-10,-7,20,15);ctx.beginPath();ctx.moveTo(-10,0);ctx.lineTo(10,0);ctx.moveTo(0,-7);ctx.lineTo(0,0);ctx.moveTo(-5,0);ctx.lineTo(-5,8);ctx.moveTo(5,0);ctx.lineTo(5,8);ctx.stroke();}
  else if(motif==='neon'){ctx.beginPath();ctx.moveTo(-8,-9);ctx.lineTo(2,-2);ctx.lineTo(-2,2);ctx.lineTo(8,9);ctx.stroke();ctx.beginPath();ctx.moveTo(8,-9);ctx.lineTo(1,-2);ctx.stroke();}
  ctx.restore();
}


function drawBoss(e){
  ctx.save();ctx.translate(Math.round(e.x+e.w/2),Math.round(e.y+e.h/2+Math.sin(state.time*3)*2));ctx.scale(e.dir,1);const type=e.bossType,B=(x,y,w,h,c,a=1)=>{ctx.globalAlpha=a;ctx.fillStyle=c;ctx.fillRect(x,y,w,h);ctx.globalAlpha=1;};
  B(-55,58,110,9,'rgba(0,0,0,.3)');B(-42,67,84,4,'rgba(0,0,0,.16)');B(-49,-43,98,92,'#061023');B(-59,-27,15,56,'#061023');B(44,-27,15,56,'#061023');B(-39,43,31,21,'#061023');B(8,43,31,21,'#061023');
  if(type==='brazil'){
    B(-43,-38,86,78,'#293b57');B(-34,40,26,19,'#20324d');B(8,40,26,19,'#20324d');B(-51,-25,12,45,'#314963');B(39,-25,12,45,'#314963');B(-31,-23,62,15,'#ff4c82');for(let i=0;i<5;i++)B(-28+i*14,2,8,27,i%2?'#62efff':'#ffd85b');B(-16,-55,32,18,'#27384f');B(-9,-50,7,7,'#fff');B(3,-50,7,7,'#fff');B(-3,-73,6,18,'#ffd85b');B(-7,-82,14,10,'#62efff');
  }else if(type==='mexico'){
    B(-43,-32,86,75,'#7b45c5');B(-51,-12,12,38,'#5e36a3');B(39,-12,12,38,'#5e36a3');B(-34,43,25,16,'#4d3380');B(9,43,25,16,'#4d3380');B(-36,-58,18,27,'#7b45c5');B(18,-58,18,27,'#7b45c5');B(-30,-64,10,12,'#ffcf45');B(20,-64,10,12,'#ffcf45');B(-22,-20,14,13,'#ffcf45');B(8,-20,14,13,'#ffcf45');B(-5,-4,10,8,'#202744');for(let i=0;i<6;i++)B(-34+i*14,16+(i%2)*8,8,8,i%3===0?'#ee5c74':i%3===1?'#54d99d':'#ffd34f');B(43,6,22,9,'#7b45c5');B(58,0,8,14,'#ffcf45');
  }else if(type==='usa'){
    B(-50,-38,100,82,'#262c3d');B(-42,44,30,15,'#1d2434');B(12,44,30,15,'#1d2434');B(-58,-18,12,42,'#343c4d');B(46,-18,12,42,'#343c4d');B(-35,-28,70,62,'#d9e7f0');B(-27,-20,54,47,'#4869a6');B(-17,-10,34,29,'#173052');B(-11,-5,13,12,'#92efff');B(-52,-58,104,17,'#f2cc56');for(let i=0;i<7;i++)B(-49+i*15,-58,7,17,'#1e2636');B(-32,35,64,7,'#d94163');
  }else if(type==='egypt'){
    B(-42,-26,84,72,'#b88035');B(-34,46,27,14,'#7d592f');B(7,46,27,14,'#7d592f');B(-50,-10,12,42,'#c49345');B(38,-10,12,42,'#c49345');B(-36,-50,72,26,'#e7bd54');B(-28,-57,56,9,'#46b9c9');B(-21,-38,13,12,'#202c48');B(8,-38,13,12,'#202c48');B(-9,-13,18,9,'#202c48');B(-5,-80,10,23,'#e7bd54');B(-20,-93,40,14,'#ffe16a');B(-14,6,28,7,'#46b9c9');
  }else if(type==='russia'){
    B(-45,-38,90,82,'#c9ecf5');B(-35,44,25,15,'#6c9bb3');B(10,44,25,15,'#6c9bb3');B(-55,-18,14,45,'#9ed9e8');B(41,-18,14,45,'#9ed9e8');B(-32,-57,64,20,'#7fc8e0');B(-18,-48,13,12,'#334d70');B(5,-48,13,12,'#334d70');for(let i=0;i<5;i++)B(-32+i*16,-74+(i%2)*7,9,25,'#f7ffff');B(-5,-88,10,19,'#9ceaff');B(-18,5,36,9,'#6bb8d2');
  }else if(type==='europe'){
    B(-49,-38,98,83,'#8c6755');B(-38,45,27,15,'#684b40');B(11,45,27,15,'#684b40');B(-58,-16,13,43,'#a77a5e');B(45,-16,13,43,'#a77a5e');for(let i=0;i<3;i++){B(-35+i*28,5,18,31,'#d2a66e');B(-31+i*28,11,10,25,'#674f47');}B(-41,-56,82,19,'#d0d4d5');B(-29,-66,58,11,'#d0d4d5');B(-12,-74,24,9,'#efc55f');B(-7,-51,14,12,'#51434a');B(-34,-29,68,8,'#c39a68');
  }else{
    B(-48,24,70,19,'#5cecf3');B(-40,7,57,18,'#5cecf3');B(-25,-9,48,18,'#5cecf3');B(13,-28,42,45,'#d84f88');B(22,-49,35,23,'#d84f88');B(14,-65,13,18,'#ff5b8f');B(45,-66,13,21,'#ff5b8f');B(42,-45,8,8,'#fff36b');B(-54,38,25,12,'#ff5b8f');B(-62,46,16,9,'#5cecf3');B(-31,43,12,18,'#263354');B(2,14,12,34,'#263354');for(let i=0;i<5;i++)B(-33+i*15,2+i%2*5,8,8,i%2?'#ff5b8f':'#fff36b');
  }
  B(-38,-35,7,5,'#ffffff',.2);B(31,-28,5,12,'#071226',.28);B(-43,23,8,5,e.theme.accent,.74);B(35,23,8,5,e.theme.accent,.74);B(-5,30,10,6,'#071226',.5);B(-2,31,5,2,'#ffffff',.35);
  for(let i=-2;i<=2;i++)B(i*12-3,51+(Math.abs(i)%2)*3,7,5,i%2?e.theme.accent:'#dffcff',.65);
  ctx.scale(e.dir,1);B(-92,-111,184,25,'#02091a',.82);B(-92,-111,6,25,e.theme.accent,.9);ctx.fillStyle='rgba(255,255,255,.96)';ctx.font='900 15px ui-monospace,monospace';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(e.bossName.toUpperCase(),0,-98);ctx.restore();
  const bw=210,bx=e.x+e.w/2-bw/2,by=e.y-40,ratio=Math.max(0,e.hp/e.maxHp);ctx.fillStyle='#020817';ctx.fillRect(bx-5,by-5,bw+10,22);ctx.fillStyle='#25314a';ctx.fillRect(bx,by,bw,12);ctx.fillStyle=e.theme.accent;ctx.fillRect(bx,by,Math.round(bw*ratio),12);ctx.fillStyle='#ffffff';ctx.globalAlpha=.42;ctx.fillRect(bx,by,Math.round(bw*ratio),3);ctx.globalAlpha=1;ctx.fillStyle='#eaffff';ctx.font='900 11px ui-monospace,monospace';ctx.textAlign='center';ctx.fillText(`CHEFÃO ${e.hp}/${e.maxHp}`,e.x+e.w/2,by-9);
}

function drawBossLegacy(e){
  ctx.save(); ctx.translate(e.x+e.w/2,e.y+e.h/2); ctx.scale(e.dir,1);
  const type=e.bossType;
  if(type==='brazil'){
    ctx.fillStyle='#293b57';roundRect(ctx,-46,-43,92,99,18);ctx.fill();ctx.fillStyle='#ff4c82';ctx.fillRect(-32,-28,64,15);ctx.fillStyle='#62efff';for(let i=-2;i<=2;i++)ctx.fillRect(i*14-4,0,8,27);ctx.strokeStyle='#ffd85b';ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(0,-43);ctx.lineTo(0,-72);ctx.stroke();ctx.beginPath();ctx.arc(0,-78,8,0,6.3);ctx.fill();
  } else if(type==='mexico'){
    ctx.fillStyle='#7b45c5';ctx.beginPath();ctx.ellipse(0,5,50,48,0,0,6.3);ctx.fill();ctx.beginPath();ctx.moveTo(-38,-25);ctx.lineTo(-27,-65);ctx.lineTo(-7,-34);ctx.moveTo(38,-25);ctx.lineTo(27,-65);ctx.lineTo(7,-34);ctx.fill();ctx.fillStyle='#ffcf45';ctx.beginPath();ctx.arc(-17,-7,8,0,6.3);ctx.arc(17,-7,8,0,6.3);ctx.fill();ctx.fillStyle='#ee5c74';for(let a=0;a<6;a++){ctx.beginPath();ctx.arc(Math.cos(a)*33,18+Math.sin(a)*24,6,0,6.3);ctx.fill();}
  } else if(type==='usa'){
    ctx.fillStyle='#262c3d';roundRect(ctx,-52,-42,104,92,16);ctx.fill();ctx.fillStyle='#d9e7f0';ctx.beginPath();ctx.arc(0,0,34,0,6.3);ctx.fill();ctx.fillStyle='#4869a6';ctx.beginPath();ctx.arc(0,0,22,0,6.3);ctx.fill();ctx.fillStyle='#92efff';ctx.beginPath();ctx.arc(-7,-7,7,0,6.3);ctx.fill();ctx.fillStyle='#f2cc56';ctx.save();ctx.rotate(-.16);ctx.fillRect(-54,-65,108,19);ctx.fillStyle='#1e2636';for(let i=-3;i<=3;i++)ctx.fillRect(i*15,-65,7,19);ctx.restore();
  } else if(type==='egypt'){
    ctx.fillStyle='#b88035';roundRect(ctx,-44,-26,88,82,16);ctx.fill();ctx.fillStyle='#e7bd54';ctx.beginPath();ctx.arc(0,-29,38,0,6.3);ctx.fill();ctx.fillStyle='#46b9c9';ctx.fillRect(-28,-38,56,12);ctx.fillStyle='#202c48';ctx.beginPath();ctx.moveTo(-20,-16);ctx.quadraticCurveTo(0,-29,20,-16);ctx.quadraticCurveTo(0,-4,-20,-16);ctx.fill();ctx.fillStyle='#ffe16a';ctx.beginPath();ctx.arc(0,-83,24,0,6.3);ctx.fill();
  } else if(type==='russia'){
    ctx.fillStyle='#c9ecf5';roundRect(ctx,-49,-45,98,101,24);ctx.fill();ctx.fillStyle='#7fc8e0';ctx.beginPath();ctx.arc(0,-31,34,0,6.3);ctx.fill();ctx.fillStyle='#fff';for(let a=0;a<6;a++){ctx.save();ctx.rotate(a*Math.PI/3);ctx.fillRect(-4,-70,8,28);ctx.restore();}ctx.fillStyle='#334d70';ctx.beginPath();ctx.arc(-13,-30,6,0,6.3);ctx.arc(13,-30,6,0,6.3);ctx.fill();
  } else if(type==='europe'){
    ctx.fillStyle='#8c6755';roundRect(ctx,-52,-44,104,98,20);ctx.fill();ctx.fillStyle='#d2a66e';for(let i=-1;i<=1;i++){ctx.beginPath();ctx.arc(i*28,4,10,Math.PI,0);ctx.lineTo(i*28+10,29);ctx.lineTo(i*28-10,29);ctx.fill();}ctx.fillStyle='#d0d4d5';ctx.beginPath();ctx.moveTo(-43,-41);ctx.quadraticCurveTo(0,-86,43,-41);ctx.fill();ctx.fillStyle='#efc55f';ctx.beginPath();ctx.arc(0,-40,17,0,6.3);ctx.fill();
  } else {
    ctx.strokeStyle='#61efff';ctx.lineWidth=24;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-47,35);ctx.quadraticCurveTo(-34,-23,13,4);ctx.quadraticCurveTo(51,27,29,-28);ctx.stroke();ctx.fillStyle='#d84f88';ctx.beginPath();ctx.arc(27,-40,30,0,6.3);ctx.fill();ctx.beginPath();ctx.moveTo(4,-57);ctx.lineTo(-2,-84);ctx.lineTo(18,-64);ctx.moveTo(43,-61);ctx.lineTo(60,-82);ctx.lineTo(58,-52);ctx.fill();ctx.fillStyle='#fff36b';ctx.beginPath();ctx.arc(37,-44,6,0,6.3);ctx.fill();
  }
  ctx.fillStyle='rgba(255,255,255,.85)'; ctx.font='bold 16px system-ui'; ctx.textAlign='center'; ctx.fillText(e.bossName,0,-72);
  ctx.restore();
  const w=170,h=14,x=e.x+e.w/2-w/2,y=e.y-28; ctx.fillStyle='rgba(0,0,0,.45)'; roundRect(ctx,x,y,w,h,6); ctx.fill(); ctx.fillStyle=e.theme.accent; roundRect(ctx,x,y,w*(e.hp/e.maxHp),h,6); ctx.fill();
}


function drawCoin(x,y,t){
  const spin=Math.abs(Math.sin(t*4)),w=6+Math.round(spin*4)*4;ctx.save();ctx.translate(Math.round(x),Math.round(y));const B=(xx,yy,ww,hh,c,a=1)=>{ctx.globalAlpha=a;ctx.fillStyle=c;ctx.fillRect(Math.round(xx),Math.round(yy),ww,hh);ctx.globalAlpha=1;};
  B(-w/2-3,-15,w+6,30,'#3b250e');B(-w/2,-17,w,3,'#7a4b12');B(-w/2+3,-20,Math.max(2,w-6),3,'#fff0a0');B(-w/2,-14,w,28,'#d28a1e');B(-w/2+3,-12,Math.max(2,w-6),23,'#ffd64b');B(-w/2+5,-10,Math.max(2,w-10),5,'#fff0a0');B(-w/2+4,11,Math.max(2,w-8),5,'#9e5d14');B(-w/2+3,14,Math.max(2,w-6),3,'#5f390f');if(w>=14){B(-3,-9,6,18,'#b87516');B(-1,-7,3,14,'#fff1a0');B(3,-5,2,5,'#ffe875');B(-w/2+4,-11,2,13,'#ffffff',.5);}B(w/2+3,-4,3,3,'#fff7bd',.4+Math.sin(t*7)*.3);ctx.restore();
}
function drawCrystal(x,y,t){ctx.save();ctx.translate(Math.round(x),Math.round(y));const B=(xx,yy,w,h,c,a=1)=>{ctx.globalAlpha=a;ctx.fillStyle=c;ctx.fillRect(xx,yy,w,h);ctx.globalAlpha=1;},pulse=.5+.5*Math.sin(t*5);B(-29,-32,58,64,'#72f5ff',.06+.09*pulse);B(-8,-34,16,4,'#dfffff',.35+.4*pulse);B(-6,-31,12,4,'#06182d');B(-15,-27,30,4,'#06182d');B(-22,-20,44,14,'#06182d');B(-18,-6,36,19,'#06182d');B(-13,13,26,10,'#06182d');B(-6,23,12,6,'#06182d');B(-4,-30,8,5,'#eaffff');B(-13,-25,26,6,'#95f6ff');B(-20,-19,40,13,'#62e9ff');B(-16,-6,32,17,'#4cc8e6');B(-11,11,22,9,'#2fa8d1');B(-5,20,10,6,'#267ca9');B(-13,-18,6,27,'#d8ffff',.86);B(-7,-18,4,19,'#8cf4ff',.55);B(7,-14,7,20,'#247fa9');B(10,-10,3,12,'#80efff',.48);B(-18,-17,4,5,'#ffffff',.9);B(-10,-23,7,3,'#ffffff',.72);B(18,-30,3,3,'#fff8b0',pulse);B(24,-24,3,3,'#fff8b0',pulse*.7);ctx.restore();}
function drawHeart(x,y,t){ctx.save();ctx.translate(Math.round(x),Math.round(y));const p=Math.round((.5+.5*Math.sin(t*5))*2)*2,B=(xx,yy,w,h,c,a=1)=>{ctx.globalAlpha=a;ctx.fillStyle=c;ctx.fillRect(xx,yy,w,h);ctx.globalAlpha=1;};B(-23,-22,46,45,'#ff7a93',.08+p*.025);B(-18,-14,14,8,'#ff90a6');B(4,-14,14,8,'#ff90a6');B(-22,-6,44,15,'#ff5f7d');B(-17,9,34,8,'#e84568');B(-10,17,20,7,'#c93258');B(-5,24,10,5,'#9e2548');B(-12,-10,6,5,'#fff0f4',.8);ctx.restore();}
function drawPixelPowerSymbol(type,x,y,s=1,frame=0,alpha=1){
  ctx.save();ctx.translate(Math.round(x),Math.round(y));ctx.scale(s,s);ctx.globalAlpha=alpha;const B=(xx,yy,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(xx,yy,w,h);};
  if(type==='fly'){const flap=Math.round(Math.sin(frame*14))*3;B(-3,-11,6,22,'#f4fdff');B(-9,-9-flap,7,6,'#c7efff');B(-16,-4-flap,13,6,'#dff8ff');B(-20,2-flap,16,6,'#bfe8ff');B(-15,8-flap,10,5,'#dff8ff');B(2,-9+flap,7,6,'#c7efff');B(3,-4+flap,13,6,'#dff8ff');B(4,2+flap,16,6,'#bfe8ff');B(5,8+flap,10,5,'#dff8ff');B(-2,-15,4,5,'#fff');}
  else if(type==='invisible'){B(-9,-9,18,17,'#f2e8ff');B(-6,-13,12,5,'#fff');B(-9,8,5,6,'#f2e8ff');B(-2,8,5,4,'#f2e8ff');B(5,8,4,6,'#f2e8ff');B(-5,-5,3,4,'#59467f');B(3,-5,3,4,'#59467f');}
  else if(type==='fire'){B(-4,-13,8,6,'#ffe66e');B(-8,-7,16,12,'#ff9b48');B(-11,0,22,10,'#ef5a3f');B(-5,-4,10,10,'#fff1a3');B(-8,10,16,4,'#a93d35');}
  else{B(-5,-13,10,21,'#d8eff8');B(-8,-5,3,10,'#79b9d1');B(5,-5,3,10,'#79b9d1');B(-3,-18,6,6,'#f4f9fb');B(-5,8,10,5,'#e94f59');B(-3,13,6,6,frame%2?'#ffe45e':'#ff894e');}
  ctx.restore();
}

function drawPower(x,y,type,t){
  const info=POWER_INFO[type],pulse=.45+.35*Math.sin(t*6);ctx.save();ctx.translate(Math.round(x),Math.round(y));const B=(xx,yy,w,h,c,a=1)=>{ctx.globalAlpha=a;ctx.fillStyle=c;ctx.fillRect(xx,yy,w,h);ctx.globalAlpha=1;};
  B(-34,-34,68,68,info.color,.05+pulse*.08);B(-31,-4,6,8,info.color,.35);B(25,-4,6,8,info.color,.35);B(-4,-31,8,6,info.color,.35);B(-4,25,8,6,info.color,.35);
  B(-14,-29,28,4,'#06172b');B(-22,-25,44,4,'#06172b');B(-27,-17,54,34,'#06172b');B(-22,17,44,4,'#06172b');B(-14,21,28,4,'#06172b');
  B(-13,-26,26,4,'#efffff');B(-20,-22,40,5,'#b9eff9');B(-24,-17,48,34,'#65c6d8',.94);B(-20,17,40,4,'#3a91ad');B(-13,21,26,4,'#246986');B(-19,-13,38,26,'rgba(8,29,62,.85)');B(-15,-16,9,5,'#ffffff',.9);B(-18,-10,5,9,'#dfffff',.55);B(13,8,5,5,info.color,.95);B(17,3,3,3,'#ffffff',.62);B(-9,14,18,2,info.color,.38);drawPixelPowerSymbol(type,0,0,1.08,t);ctx.restore();
}

function drawPowerEvent(e,th){
  const open=Math.min(1,e.time/.42),p=Math.max(0,Math.min(1,(e.time-.32)/(e.duration-.32))),color=POWER_INFO[e.type].color;ctx.save();
  if(e.time<.48){const gap=open*18,x=e.x,y=e.y;ctx.globalAlpha=1-open*.45;ctx.fillStyle='#a9e8f4';ctx.fillRect(x-22-gap,y-16,20,32);ctx.fillRect(x+2+gap,y-16,20,32);ctx.fillStyle='#efffff';ctx.fillRect(x-17-gap,y-20,12,4);ctx.fillRect(x+5+gap,y-20,12,4);drawPixelPowerSymbol(e.type,x,y,1.15,state.time);ctx.globalAlpha=1;ctx.restore();return;}
  if(e.type==='fly'){const yy=e.y-p*190;drawPixelPowerSymbol('fly',e.x,yy,1.6,state.time,1-p*.2);for(let i=0;i<3;i++){ctx.fillStyle=color;ctx.globalAlpha=.6-i*.16;ctx.fillRect(e.x-3,yy+24+i*12,6,6);} }
  else if(e.type==='invisible'){const s=1.3+p*3.4;drawPixelPowerSymbol('invisible',e.x,e.y-p*48,s,state.time,1-p);}
  else if(e.type==='fire'){const s=1.4+Math.sin(state.time*16)*.25;drawPixelPowerSymbol('fire',e.x,e.y-p*105,s,state.time,1-p*.92);for(let i=0;i<4;i++){ctx.fillStyle=i%2?'#ffe36a':'#ff6d45';ctx.globalAlpha=(1-p)*(.7-i*.12);ctx.fillRect(e.x-14+i*9,e.y-p*105+24+i%2*6,6,6);}}
  else{const launch=Math.max(0,Math.min(1,(e.time-.72)/(e.duration-.72))),yy=e.y-launch*270;drawPixelPowerSymbol('missile',e.x,yy,1.55,state.time);if(launch===0){ctx.fillStyle='#5d6b7a';ctx.fillRect(e.x-18,e.y+19,36,6);ctx.fillStyle=state.time%0.4<.2?'#ff5b5b':'#ffe45e';ctx.fillRect(e.x-3,e.y+13,6,6);}else{ctx.fillStyle='#ff9b4d';ctx.fillRect(e.x-5,yy+28,10,10);ctx.fillStyle='#ffe66e';ctx.fillRect(e.x-3,yy+38,6,13);}}
  ctx.globalAlpha=1;ctx.restore();
}

function drawTemporaryNight(camera,remaining){
  const fade=Math.min(1,remaining),x=Math.round(camera);ctx.save();ctx.globalAlpha=.68*fade;ctx.fillStyle='#07122f';ctx.fillRect(x,0,W,H);ctx.globalAlpha=fade;for(let i=0;i<34;i++){ctx.fillStyle=i%5===0?'#89f2ff':'#fff5c7';ctx.fillRect(x+24+(i*97)%1230,38+(i*53)%360,i%7===0?4:2,i%7===0?4:2);}ctx.fillStyle='#fff0a8';ctx.fillRect(x+1080,72,42,6);ctx.fillRect(x+1070,78,62,34);ctx.fillRect(x+1080,112,42,6);ctx.fillStyle='#07122f';ctx.fillRect(x+1103,72,29,40);ctx.restore();
}
function drawShot(x,y,r,color){const s=Math.max(4,Math.round(r*.65));ctx.save();ctx.globalAlpha=.18;ctx.fillStyle=color;ctx.fillRect(Math.round(x-r-5),Math.round(y-r-5),Math.round(r*2+10),Math.round(r*2+10));ctx.globalAlpha=1;ctx.fillStyle=color;ctx.fillRect(Math.round(x-s),Math.round(y-r),s*2,Math.round(r*2));ctx.fillRect(Math.round(x-r),Math.round(y-s),Math.round(r*2),s*2);ctx.fillStyle='#fff';ctx.fillRect(Math.round(x-s/2),Math.round(y-s/2),Math.max(3,s),Math.max(3,s));ctx.restore();}
function drawPortal(x,y,open,t,th){
  ctx.save();ctx.translate(Math.round(x+39),Math.round(y+60));const B=(xx,yy,w,h,c,a=1)=>{ctx.globalAlpha=a;ctx.fillStyle=c;ctx.fillRect(Math.round(xx),Math.round(yy),w,h);ctx.globalAlpha=1;},edge=open?th.accent:'#5b6477';
  if(open){B(-45,-61,90,122,edge,.07+.05*Math.sin(t*5));for(let i=0;i<18;i++){const px=-34+(i*29)%68,py=-52+(i*41)%104;B(px,py,i%4?3:5,i%4?3:5,i%3?'#ffffff':edge,.22+.28*Math.sin(t*4+i));}}
  for(let yy=-54;yy<=54;yy+=6){const ex=Math.round(Math.sqrt(Math.max(0,1-(yy/56)**2))*33/3)*3;B(-ex-7,yy,7,7,'#071225');B(ex,yy,7,7,'#071225');B(-ex-4,yy,4,7,edge);B(ex,yy,4,7,edge);if(open&&Math.abs(yy)<48)B(-ex+4,yy,Math.max(2,ex*2-8),6,yy%12?th.routeColor:'#bffbff',.09+.05*Math.sin(t*6+yy));}
  B(-18,-59,36,7,'#071225');B(-12,-62,24,6,edge);B(-18,54,36,8,'#071225');B(-13,52,26,6,edge);
  if(open){for(let i=0;i<17;i++){const a=t*1.8+i*.72,r=10+(i%4)*6;B(Math.cos(a)*r-2,Math.sin(a)*r*1.65-2,4,4,i%3?edge:'#ffffff',.45+.4*(i%2));}B(-4,-5,8,10,'#ffffff',.42);}
  else{B(-15,-12,30,30,'#121b32');B(-10,-18,20,12,'#8c98aa');B(-6,-14,12,10,'#121b32');B(-12,-7,24,23,'#aeb8c6');B(-3,1,6,9,'#344057');B(-1,-1,2,5,'#e9f2f6');}
  ctx.restore();
}

function pixelPanel(c,x,y,w,h,fill='rgba(5,12,35,.82)',border='rgba(111,232,249,.55)',step=8){
  const shape=(xx,yy,ww,hh,s)=>{c.beginPath();c.moveTo(xx+s,yy);c.lineTo(xx+ww-s,yy);c.lineTo(xx+ww-s,yy+3);c.lineTo(xx+ww-3,yy+3);c.lineTo(xx+ww-3,yy+s);c.lineTo(xx+ww,yy+s);c.lineTo(xx+ww,yy+hh-s);c.lineTo(xx+ww-3,yy+hh-s);c.lineTo(xx+ww-3,yy+hh-3);c.lineTo(xx+ww-s,yy+hh-3);c.lineTo(xx+ww-s,yy+hh);c.lineTo(xx+s,yy+hh);c.lineTo(xx+s,yy+hh-3);c.lineTo(xx+3,yy+hh-3);c.lineTo(xx+3,yy+hh-s);c.lineTo(xx,yy+hh-s);c.lineTo(xx,yy+s);c.lineTo(xx+3,yy+s);c.lineTo(xx+3,yy+3);c.lineTo(xx+s,yy+3);c.closePath();};
  c.save();shape(x+5,y+6,w,h,step);c.fillStyle='rgba(0,0,0,.34)';c.fill();shape(x,y,w,h,step);c.fillStyle=border;c.fill();shape(x+3,y+3,w-6,h-6,Math.max(4,step-3));c.fillStyle=fill;c.fill();c.restore();
}

function drawHUD(){
  const p=state.player, l=state.level;
  ctx.save();
  roundRect(ctx,22,18,350,72,15);
  ctx.fillStyle='rgba(13,38,44,.92)'; ctx.fill();
  ctx.fillStyle='#fcf0ce'; ctx.font='700 21px system-ui';
  ctx.fillText(l.phaseName,38,47,308);
  ctx.font='700 18px system-ui';
  ctx.fillStyle='#ffada8'; ctx.fillText('♥ '+p.health,38,77);
  ctx.fillStyle='#92f7ef'; ctx.fillText('◆ '+state.crystals+'/3',109,77);
  ctx.fillStyle='#ffdf90'; ctx.fillText('● '+state.coins,212,77);
  if (p.powers.fly) {
    ctx.fillStyle='#17343c'; ctx.fillRect(38,94,178,6);
    ctx.fillStyle='#82ebda'; ctx.fillRect(38,94,178*p.flyEnergy/100,6);
  }
  ctx.restore();
}

function drawLocationCard(){
  if(!state.level||state.locationCard<=0)return;
  const a=Math.min(1,(3.2-state.locationCard)*2,state.locationCard*1.5);ctx.save();ctx.globalAlpha=Math.max(0,a);
  const l=state.level,w=650,h=206,x=(W-w)/2,y=136;
  pixelPanel(ctx,x,y,w,h,'rgba(5,12,35,.9)',l.theme.accent,12);
  pixelPanel(ctx,x+18,y+18,108,170,l.theme.routeColor,l.theme.accent,8);ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='900 18px ui-monospace,monospace';ctx.fillText(l.world.toUpperCase(),x+72,y+102);
  ctx.textAlign='left';ctx.fillStyle='rgba(255,255,255,.72)';ctx.font='800 17px system-ui';ctx.fillText(l.country.toUpperCase(),x+150,y+43);
  ctx.fillStyle='#fff';ctx.font='900 43px system-ui';ctx.fillText(l.phaseName,x+150,y+84);
  ctx.fillStyle=l.theme.accent;ctx.font='700 18px system-ui';ctx.fillText(l.theme.landmark,x+150,y+119);
  ctx.fillStyle='rgba(255,255,255,.72)';ctx.font='700 15px system-ui';ctx.fillText(`♪ ${l.theme.music.style}`,x+150,y+147);
  ctx.fillStyle='rgba(255,255,255,.68)';ctx.font='700 13px system-ui';ctx.fillText(`Terreno: ${l.theme.art.platform} · Obstáculo: ${l.theme.art.hazardName}`,x+150,y+174);
  ctx.restore();
}

/* ------------------------- LOW-POLY 2D REMASTER -------------------------- */
function polyShape(c,points,fill,stroke='#061120',line=2,alpha=1){c.save();c.globalAlpha=alpha;c.beginPath();c.moveTo(points[0][0],points[0][1]);for(let i=1;i<points.length;i++)c.lineTo(points[i][0],points[i][1]);c.closePath();c.fillStyle=fill;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=line;c.lineJoin='round';c.stroke();}c.restore();}
function polyDisc(c,x,y,rx,ry,color,sides=10,rot=-Math.PI/2,outline='#061120',line=2){const pts=[];for(let i=0;i<sides;i++){const a=rot+i*Math.PI*2/sides;pts.push([x+Math.cos(a)*rx,y+Math.sin(a)*ry]);}for(let i=0;i<sides;i++){const next=(i+1)%sides;polyShape(c,[[x,y],pts[i],pts[next]],i%3===0?shadeHex(color,.22):i%3===1?color:shadeHex(color,-.16),null,0,1);}polyShape(c,pts,'rgba(0,0,0,0)',outline,line);return pts;}
function facetPanel(c,x,y,w,h,color,accent,cut=Math.min(12,w*.12,h*.22)){const pts=[[x+cut,y],[x+w-cut,y],[x+w,y+cut],[x+w,y+h-cut],[x+w-cut,y+h],[x+cut,y+h],[x,y+h-cut],[x,y+cut]];polyShape(c,pts,color,'#061120',3);polyShape(c,[[x+cut,y],[x+w-cut,y],[x+w*.68,y+h*.47],[x+w*.3,y+h*.35]],shadeHex(color,.18),null,0,.52);polyShape(c,[[x,y+h-cut],[x+w*.3,y+h*.35],[x+w*.68,y+h*.47],[x+w-cut,y+h]],shadeHex(color,-.2),null,0,.48);c.save();c.strokeStyle=accent;c.globalAlpha=.66;c.lineWidth=2;c.beginPath();c.moveTo(x+cut+4,y+4);c.lineTo(x+w-cut-4,y+4);c.stroke();c.restore();}
function capsulePoly(c,x1,y1,x2,y2,width,color){const dx=x2-x1,dy=y2-y1,l=Math.hypot(dx,dy)||1,nx=-dy/l*width/2,ny=dx/l*width/2;polyShape(c,[[x1+nx,y1+ny],[x2+nx,y2+ny],[x2-nx,y2-ny],[x1-nx,y1-ny]],color,'#061120',2);polyShape(c,[[x1+nx,y1+ny],[x2+nx,y2+ny],[x2,y2],[x1,y1]],shadeHex(color,.22),null,0,.75);polyDisc(c,x1,y1,width/2,width/2,color,8,0,'#061120',2);polyDisc(c,x2,y2,width/2,width/2,color,8,0,'#061120',2);}

function pixelPanel(c,x,y,w,h,fill='rgba(5,12,35,.82)',border='rgba(111,232,249,.55)',step=8){const pts=[[x+step,y],[x+w-step,y],[x+w,y+step],[x+w,y+h-step],[x+w-step,y+h],[x+step,y+h],[x,y+h-step],[x,y+step]];c.save();c.shadowColor='rgba(0,0,0,.42)';c.shadowBlur=14;c.shadowOffsetY=7;polyShape(c,pts,fill,border,2);c.shadowColor='transparent';c.globalAlpha=.16;c.strokeStyle='#fff';c.beginPath();c.moveTo(x+step+5,y+5);c.lineTo(x+w-step-5,y+5);c.lineTo(x+w-5,y+step+3);c.stroke();c.restore();}

function drawPlatform(s,th){const x=s.x,y=s.y,w=s.w,h=s.h,top=Math.min(23,h*.35),base=th.soil,face=th.routeColor||th.ground;ctx.save();polyShape(ctx,[[x+9,y],[x+w,y],[x+w-8,y+top],[x,y+top]],th.ground,'#061120',3);polyShape(ctx,[[x,y+top],[x+w-8,y+top],[x+w-8,y+h],[x,y+h]],base,'#061120',3);polyShape(ctx,[[x+w-8,y+top],[x+w,y],[x+w,y+h-8],[x+w-8,y+h]],shadeHex(base,-.28),'#061120',2);const cell=52;for(let xx=x;xx<x+w-8;xx+=cell){const ww=Math.min(cell,x+w-8-xx);polyShape(ctx,[[xx,y+top],[xx+ww,y+top],[xx+ww*.58,y+Math.min(h,top+36)]],shadeHex(base,(Math.floor(xx/cell)%2)?.12:-.1),null,0,.55);polyShape(ctx,[[xx,y+top],[xx+ww*.58,y+Math.min(h,top+36)],[xx,y+Math.min(h,top+36)]],shadeHex(base,-.16),null,0,.42);}ctx.strokeStyle=th.accent;ctx.globalAlpha=.38;ctx.lineWidth=3;ctx.setLineDash([14,12]);ctx.beginPath();ctx.moveTo(x+14,y+9);ctx.lineTo(x+w-18,y+9);ctx.stroke();ctx.setLineDash([]);ctx.globalAlpha=1;for(let xx=x+32;xx<x+w-20;xx+=82){ctx.save();ctx.translate(xx,y+top+20);ctx.scale(.72,.72);drawEnemyMark(th.motif,0,0);ctx.restore();}ctx.restore();}

function drawWelcomeMarker(level){const th=level.theme,x=420,y=620;ctx.save();capsulePoly(ctx,x+5,y-78,x+5,y,9,'#6b4c35');facetPanel(ctx,x+8,y-88,176,54,shadeHex(th.routeColor,-.15),th.accent,10);ctx.fillStyle='#fff';ctx.font='900 14px Trebuchet MS,system-ui';ctx.textAlign='center';ctx.fillText('INÍCIO TRANQUILO',x+96,y-65);ctx.font='800 11px Trebuchet MS,system-ui';ctx.fillStyle='rgba(255,255,255,.8)';ctx.fillText(level.phaseName.toUpperCase(),x+96,y-47);ctx.restore();}

function drawHazard(h,th){const x=h.x,y=h.y,p=.5+.5*Math.sin(state.time*4+h.phase);ctx.save();ctx.shadowColor=th.accent;ctx.shadowBlur=6+6*p;facetPanel(ctx,x,y,48,48,shadeHex(th.soil,.02),th.accent,8);ctx.shadowBlur=0;polyShape(ctx,[[x+7,y+10],[x+24,y+5],[x+41,y+10],[x+37,y+17],[x+24,y+13],[x+11,y+17]],shadeHex(th.ground,.1),'rgba(255,255,255,.12)',1);polyShape(ctx,[[x+8,y+37],[x+24,y+30],[x+40,y+37],[x+35,y+43],[x+13,y+43]],shadeHex(th.soil,-.2),null);ctx.save();ctx.translate(x+24,y+25);ctx.scale(.82,.82);drawEnemyMark(th.motif,0,0);ctx.restore();for(const q of[[6,6],[42,6],[6,42],[42,42]])polyDisc(ctx,q[0]+x,q[1]+y,2.3,2.3,'#f3e5b7',6,0,null,0);ctx.restore();}

function drawHero(x,y,dir,anim,powers,invisibleTime,th){powers=powers||{};const walk=Math.sin(anim),leg=walk*5,arm=-walk*4,coat='#c9893d',accent=th?.accent||'#ffd45e',look=th?.art?.hero||'explorer';ctx.save();ctx.translate(x+23,y+31-Math.abs(walk)*1.5);ctx.scale(dir,1);ctx.globalAlpha=invisibleTime>0?.55:1;ctx.fillStyle='rgba(2,8,18,.28)';ctx.beginPath();ctx.ellipse(0,34,27,6,0,0,Math.PI*2);ctx.fill();if(invisibleTime>0){ctx.strokeStyle='#c89cff';ctx.lineWidth=2;ctx.setLineDash([5,6]);ctx.beginPath();ctx.arc(0,-3,34+Math.sin(state.time*8)*3,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);}const flutter = Math.sin(anim + state.time*5)*3;
  polyShape(ctx,[[-12,-12],[-28,-16],[-33,8],[-27,15],[-14,11]],'#775334','#372f33',2);
  polyShape(ctx,[[-7,-17],[-17,-8],[-31,-3+flutter],[-39,-9+flutter],[-24,-12]],'#36d2bb','#175b60',2);
  capsulePoly(ctx,-9,14,-11+leg,29,10,'#275489');capsulePoly(ctx,9,14,11-leg,29,10,'#183d6a');facetPanel(ctx,-18,-12,36,31,coat,accent,7);polyShape(ctx,[[-17,-9],[0,4],[0,18],[-17,14]],shadeHex(coat,.17),null,0,.68);polyShape(ctx,[[17,-9],[0,4],[0,18],[17,14]],shadeHex(coat,-.18),null,0,.62);polyShape(ctx,[[-5,-12],[5,-12],[3,18],[-3,18]],accent,'#061120',1);capsulePoly(ctx,-17,-5,-24+arm,14,9,accent);capsulePoly(ctx,17,-5,24-arm,14,9,accent);polyDisc(ctx,-25+arm,16,6,6,'#e7a77f',8,0,'#061120',2);polyDisc(ctx,25-arm,16,6,6,'#ffd0a4',8,0,'#061120',2);polyDisc(ctx,0,-24,17,15,'#ffd0a4',10,-Math.PI/2,'#061120',3);polyShape(ctx,[[-16,-29],[-10,-39],[10,-39],[17,-29],[7,-31],[-3,-28]],'#85523d','#061120',2);polyShape(ctx,[[-1,-27],[13,-27],[11,-21],[1,-22]],'#fff9e9',null);polyDisc(ctx,8,-24,2.5,2.5,'#17405f',7,0,null,0);polyShape(ctx,[[4,-15],[13,-16],[8,-12]],'#9c5260',null);const hatColor=['charro','sunhat','headwrap','ushanka'].includes(look)?shadeHex(th.accent,-.22):'#544033';if(['explorer','charro','sunhat','headwrap','ushanka','beret','detective'].includes(look)){polyShape(ctx,[[-23,-38],[-12,-46],[12,-46],[23,-38],[13,-34],[-15,-34]],hatColor,'#061120',2);polyShape(ctx,[[-13,-43],[12,-43],[5,-37],[-16,-37]],shadeHex(hatColor,.22),null);}else{polyShape(ctx,[[-16,-35],[-8,-40],[14,-38],[18,-33],[2,-30]],shadeHex(accent,-.22),'#061120',2);}if(['visor','urban','sunglasses','skigoggles','neonband'].includes(look))polyShape(ctx,[[-2,-27],[17,-27],[14,-20],[0,-21]],look==='neonband'?'#57eff5':'#66cce5','#061120',2,.9);if(powers.fly){polyShape(ctx,[[-19,-11],[-39,-24],[-32,6],[-19,12]],'#dff8ff','#54758e',2,.9);polyShape(ctx,[[19,-11],[39,-24],[32,6],[19,12]],'#bfe8ff','#54758e',2,.9);}if(powers.missile)polyShape(ctx,[[22,-2],[39,1],[43,5],[38,9],[22,8]],'#9de1ff','#061120',2);if(powers.fire)polyDisc(ctx,31,3,9,9,'#ff8b4f',7,0,'#6b2430',2);ctx.restore();}

// Each city atlas has three columns. Its rows are walker, flyer, sentry and (at route ends) boss.
const enemySpriteRows = {ground:0, fly:1, turret:2, boss:3};
function drawIllustratedEnemy(e) {
  if (e.theme.id !== enemyAtlasCity || !enemyAtlas?.complete || !enemyAtlas.naturalWidth) return false;
  const kind = e.type === 'boss' ? 'boss' : ENEMY_DRAW[e.type].kind;
  const isBoss = kind === 'boss';
  const aimed = isBoss || kind === 'turret';
  const frame = aimed
    ? (e.phase - e.lastAttack < .2 ? 2 : e.cooldown <= .36 ? 1 : 0)
    : [0,1,2,1][Math.floor(e.phase * (kind === 'fly' ? 8 : 6)) % 4];
  const cell = 192;
  const span = Math.max(e.w, e.h) * (kind === 'fly' ? 1.4 : 1.32);
  const facing = kind === 'turret' ? (state.player.x < e.x ? -1 : 1) : e.dir;
  ctx.save();
  ctx.translate(e.x + e.w/2, kind === 'fly' ? e.y + e.h/2 : e.y + e.h);
  ctx.scale(facing, 1);
  const top = kind === 'fly' ? -span/2 : -span * (cell-2)/cell;
  ctx.drawImage(enemyAtlas, frame*cell, enemySpriteRows[kind]*cell, cell, cell,
    -span/2, top, span, span);
  if (e.elite) {
    const y = kind === 'fly' ? -e.h/2-6 : -e.h-6;
    polyShape(ctx, [[0,y-4],[4,y],[0,y+4],[-4,y]], '#ffe48a','#74502c',1);
  }
  ctx.restore();
  if (isBoss) drawBossStatus(e);
  return true;
}

function drawEnemy(e){if(drawIllustratedEnemy(e))return;if(e.type==='boss'){drawBoss(e);return;}const info=ENEMY_DRAW[e.type],flap=Math.sin(e.phase*8)*5;ctx.save();ctx.translate(e.x+e.w/2,e.y+e.h/2);ctx.fillStyle='rgba(2,8,18,.24)';ctx.beginPath();ctx.ellipse(0,24,24,5,0,0,Math.PI*2);ctx.fill();if(info.kind==='fly'){polyShape(ctx,[[-10,-4],[-33,-20-flap],[-27,5-flap],[-9,11]],info.color,'#061120',2);polyShape(ctx,[[10,-4],[33,-20+flap],[27,5+flap],[9,11]],info.color,'#061120',2);polyDisc(ctx,0,0,18,18,info.accent,9,0,'#061120',3);}else if(info.kind==='turret'){facetPanel(ctx,-25,-9,50,31,info.color,info.accent,8);polyDisc(ctx,0,-12,14,14,info.accent,8,0,'#061120',3);polyShape(ctx,[[7,-18],[29,-15],[31,-9],[8,-8]],info.color,'#061120',2);}else{polyDisc(ctx,0,0,22,20,info.color,9,0,'#061120',3);capsulePoly(ctx,-11,13,-13,23,8,info.accent);capsulePoly(ctx,11,13,13,23,8,info.accent);if(e.theme.motif==='leaf'||e.theme.motif==='flower'){polyShape(ctx,[[-13,-17],[-20,-31],[-4,-22]],e.theme.ground,'#061120',2);polyShape(ctx,[[13,-17],[20,-31],[4,-22]],e.theme.ground,'#061120',2);}}polyShape(ctx,[[-13,-7],[-3,-9],[-4,0],[-13,1]],'#f4fbff','#061120',1);polyShape(ctx,[[3,-9],[13,-7],[13,1],[4,0]],'#f4fbff','#061120',1);polyDisc(ctx,-8,-4,2.8,2.8,info.eye,7,0,null,0);polyDisc(ctx,8,-4,2.8,2.8,info.eye,7,0,null,0);ctx.save();ctx.translate(0,9);ctx.scale(.72,.72);drawEnemyMark(info.motif,0,0);ctx.restore();polyShape(ctx,[[-3,-21],[0,-29],[3,-21]],e.theme.accent,'#061120',1);if(e.elite){for(const q of[-10,0,10])polyShape(ctx,[[q-4,-24-Math.abs(q)/4],[q,-34-Math.abs(q)/4],[q+4,-24-Math.abs(q)/4]],'#fff1a0','#8d5e1f',1);}ctx.restore();}

function drawBoss(e){ctx.save();ctx.translate(e.x+e.w/2,e.y+e.h/2+Math.sin(state.time*2.5)*2);ctx.scale(e.dir,1);ctx.fillStyle='rgba(2,8,18,.3)';ctx.beginPath();ctx.ellipse(0,63,61,10,0,0,Math.PI*2);ctx.fill();capsulePoly(ctx,-38,-6,-54,30,18,shadeHex(e.theme.routeColor,-.18));capsulePoly(ctx,38,-6,54,30,18,shadeHex(e.theme.routeColor,-.24));capsulePoly(ctx,-20,38,-25,58,22,'#23344c');capsulePoly(ctx,20,38,25,58,22,'#16293e');polyDisc(ctx,0,2,48,49,e.theme.routeColor,10,0,'#061120',5);polyShape(ctx,[[-39,-27],[0,-47],[39,-27],[25,-7],[0,-16],[-25,-7]],shadeHex(e.theme.routeColor,.2),null,0,.74);polyDisc(ctx,0,-28,31,25,shadeHex(e.theme.routeColor,.12),9,0,'#061120',4);polyShape(ctx,[[-22,-36],[-5,-39],[-7,-26],[-23,-25]],'#f5fbff','#061120',2);polyShape(ctx,[[5,-39],[22,-36],[23,-25],[7,-26]],'#f5fbff','#061120',2);polyDisc(ctx,-14,-32,4,4,e.theme.accent,7,0,null,0);polyDisc(ctx,14,-32,4,4,e.theme.accent,7,0,null,0);polyShape(ctx,[[-13,-13],[0,-6],[13,-13],[8,-3],[0,2],[-8,-3]],'#071225',null);const type=e.bossType;if(type==='mexico'){polyShape(ctx,[[-28,-46],[-39,-74],[-12,-53]],'#f0bf4f','#061120',2);polyShape(ctx,[[28,-46],[39,-74],[12,-53]],'#f05d8c','#061120',2);}else if(type==='egypt'){polyShape(ctx,[[-36,-48],[0,-78],[36,-48],[0,-35]],'#e4ba50','#061120',3);polyDisc(ctx,0,-77,12,12,'#ffe063',9,0,'#7c562b',2);}else if(type==='russia'){for(let i=-2;i<=2;i++)polyShape(ctx,[[i*15-5,-49],[i*15,-70-Math.abs(i)*4],[i*15+5,-49]],'#e9fbff','#6198b3',2);}else if(type==='europe'){polyShape(ctx,[[-34,-48],[0,-75],[34,-48],[19,-43],[0,-57],[-19,-43]],'#d2b75f','#061120',3);}else if(type==='asia'){polyShape(ctx,[[-31,-46],[-43,-70],[-14,-55]],'#ff568f','#061120',2);polyShape(ctx,[[31,-46],[43,-70],[14,-55]],'#5cecf3','#061120',2);}else{polyShape(ctx,[[-35,-48],[-18,-67],[0,-52],[18,-67],[35,-48]],e.theme.accent,'#061120',3);}ctx.restore();drawBossStatus(e);}
function drawBossStatus(e){ctx.save();ctx.translate(e.x+e.w/2,e.y+e.h/2);facetPanel(ctx,-96,-116,192,28,'rgba(3,12,27,.9)',e.theme.accent,7);ctx.fillStyle='#fff';ctx.font='900 15px Trebuchet MS,system-ui';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(e.bossName.toUpperCase(),0,-102);ctx.restore();const bw=214,bx=e.x+e.w/2-bw/2,by=e.y-39,ratio=Math.max(0,e.hp/e.maxHp);facetPanel(ctx,bx-5,by-5,bw+10,22,'rgba(3,10,23,.92)',e.theme.accent,6);ctx.fillStyle=e.theme.accent;ctx.fillRect(bx,by,bw*ratio,12);ctx.fillStyle='rgba(255,255,255,.38)';ctx.fillRect(bx,by,bw*ratio,3);}

function drawCoin(x,y,t){const spin=.35+.65*Math.abs(Math.sin(t*4));ctx.save();ctx.translate(x,y);ctx.scale(spin,1);ctx.shadowColor='#ffd65b';ctx.shadowBlur=9;polyDisc(ctx,0,0,15,18,'#e5a329',12,0,'#5a3712',3);ctx.shadowBlur=0;polyShape(ctx,[[-3,-10],[4,-8],[5,9],[-4,11]],'#fff0a0',null,0,.82);ctx.restore();}
function drawCrystal(x,y,t){const pulse=.5+.5*Math.sin(t*5);ctx.save();ctx.translate(x,y);ctx.shadowColor='#72efff';ctx.shadowBlur=12+8*pulse;const p=(q,c,a=1)=>polyShape(ctx,q,c,null,0,a);p([[0,-30],[-23,-15],[0,-8]],'#e8ffff');p([[0,-30],[0,-8],[23,-15]],'#83f2ff');p([[-23,-15],[-15,9],[0,-8]],'#58d9ec');p([[23,-15],[0,-8],[15,9]],'#278db4');p([[-15,9],[0,29],[0,-8]],'#3bb8d3');p([[15,9],[0,-8],[0,29]],'#186e99');ctx.shadowBlur=0;polyShape(ctx,[[0,-30],[23,-15],[15,9],[0,29],[-15,9],[-23,-15]],'rgba(0,0,0,0)','#d9ffff',2);ctx.restore();}
function drawHeart(x,y,t){ctx.save();ctx.translate(x,y);ctx.scale(1+Math.sin(t*5)*.04,1+Math.sin(t*5)*.04);ctx.shadowColor='#ff6b83';ctx.shadowBlur=9;polyShape(ctx,[[-19,-8],[-14,-18],[-4,-20],[0,-13],[4,-20],[14,-18],[19,-8],[16,4],[0,22],[-16,4]],'#f35c78','#671f3a',3);polyShape(ctx,[[-14,-13],[-6,-16],[0,-10],[-3,-3]],'#ffb0bd',null,0,.7);polyShape(ctx,[[0,-10],[14,-13],[15,-4],[0,15]],'#ce365e',null,0,.62);ctx.restore();}

function drawPixelPowerSymbol(type,x,y,s=1,frame=0,alpha=1){
  if (paintPower(type,x,y,48*s,alpha)) return;
  ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.globalAlpha=alpha;if(type==='fly'){const f=Math.sin(frame*12)*4;polyShape(ctx,[[-2,-2],[-20,-14-f],[-15,7-f],[-3,13]],'#dff8ff','#54758e',1);polyShape(ctx,[[2,-2],[20,-14+f],[15,7+f],[3,13]],'#bfe8ff','#54758e',1);polyShape(ctx,[[-3,-14],[3,-14],[5,14],[-5,14]],'#f8ffff','#54758e',1);}else if(type==='invisible'){polyShape(ctx,[[-13,10],[-13,-4],[-8,-13],[0,-17],[8,-13],[13,-4],[13,12],[7,7],[2,13],[-3,7],[-9,13]],'#f2e8ff','#58457c',2);polyDisc(ctx,-5,-5,2.2,2.2,'#59467f',7,0,null,0);polyDisc(ctx,5,-5,2.2,2.2,'#59467f',7,0,null,0);}else if(type==='fire'){polyShape(ctx,[[0,-18],[7,-7],[12,0],[9,13],[0,18],[-10,12],[-13,2],[-6,-8]],'#ef5a3f','#7f2f35',2);polyShape(ctx,[[0,-10],[5,0],[3,11],[-4,8],[-5,1]],'#ffe16d',null);}else{polyShape(ctx,[[0,-18],[7,-9],[7,9],[0,17],[-7,9],[-7,-9]],'#d8eff8','#476a80',2);polyShape(ctx,[[-7,4],[-14,10],[-7,10]],'#78bdd4','#476a80',1);polyShape(ctx,[[7,4],[14,10],[7,10]],'#78bdd4','#476a80',1);polyShape(ctx,[[-5,11],[0,22],[5,11]],frame%1>.5?'#ffe45e':'#ff814b',null);}ctx.restore();}
function drawPower(x,y,type,t){const info=POWER_INFO[type],pulse=.5+.5*Math.sin(t*5);ctx.save();ctx.translate(x,y);ctx.shadowColor=info.color;ctx.shadowBlur=13+8*pulse;polyDisc(ctx,0,0,30,30,shadeHex(info.color,-.32),12,0,'#dffeff',2);ctx.shadowBlur=0;ctx.globalAlpha=.28;polyShape(ctx,[[-18,-20],[0,-28],[0,0],[-26,3]],'#fff',null);polyShape(ctx,[[0,0],[27,3],[16,22],[-4,28]],info.color,null);ctx.globalAlpha=1;drawPixelPowerSymbol(type,0,0,1.05,t);ctx.restore();}
function drawPowerEvent(e,th){const open=Math.min(1,e.time/.42),p=Math.max(0,Math.min(1,(e.time-.3)/(e.duration-.3))),color=POWER_INFO[e.type].color;ctx.save();if(e.time<.48){const gap=open*21;polyShape(ctx,[[e.x-25-gap,e.y-18],[e.x-4-gap,e.y-22],[e.x-4-gap,e.y+22],[e.x-25-gap,e.y+17]],'#bcebf3','#416e82',2,1-open*.45);polyShape(ctx,[[e.x+4+gap,e.y-22],[e.x+25+gap,e.y-18],[e.x+25+gap,e.y+17],[e.x+4+gap,e.y+22]],'#8ecbd8','#416e82',2,1-open*.45);drawPixelPowerSymbol(e.type,e.x,e.y,1.25,state.time);ctx.restore();return;}const yy=e.type==='missile'?e.y-p*270:e.y-p*(e.type==='fly'?190:e.type==='fire'?105:48),s=e.type==='invisible'?1.3+p*3.4:1.5;drawPixelPowerSymbol(e.type,e.x,yy,s,state.time,1-p*(e.type==='invisible'?.9:.35));for(let i=0;i<4;i++)polyShape(ctx,[[e.x-3,yy+25+i*10],[e.x+3,yy+25+i*10],[e.x,yy+34+i*12]],i%2?color:'#fff3a0',null,0,(1-p)*(.7-i*.12));ctx.restore();}
function drawShot(x,y,r,color){ctx.save();ctx.shadowColor=color;ctx.shadowBlur=12;polyDisc(ctx,x,y,r,r,color,8,0,'#fff',1);ctx.restore();}
function drawPortal(x,y,open,t,th){ctx.save();ctx.translate(x+39,y+60);const edge=open?th.accent:'#657084';if(open){ctx.shadowColor=edge;ctx.shadowBlur=17;polyDisc(ctx,0,0,35,57,shadeHex(edge,-.45),12,0,edge,4);ctx.shadowBlur=0;for(let i=0;i<9;i++){const a=t*1.7+i*.7,r=9+(i%3)*7;polyDisc(ctx,Math.cos(a)*r,Math.sin(a)*r*1.5,2.5,2.5,i%2?edge:'#fff',6,0,null,0);}}else{polyDisc(ctx,0,0,35,57,'#2a3446',12,0,edge,4);polyShape(ctx,[[-13,-9],[13,-9],[16,17],[-16,17]],'#aeb8c6','#344057',3);polyDisc(ctx,0,-10,10,10,'#8c98aa',8,0,'#344057',2);polyDisc(ctx,0,4,3,3,'#344057',7,0,null,0);}ctx.restore();}


function roundRect(c,x,y,w,h,r){ r=Math.min(r,w/2,h/2); c.beginPath(); c.moveTo(x+r,y); c.arcTo(x+w,y,x+w,y+h,r); c.arcTo(x+w,y+h,x,y+h,r); c.arcTo(x,y+h,x,y,r); c.arcTo(x,y,x+w,y,r); c.closePath(); }

function frame(now){const dt=Math.min(.033,(now-state.last)/1000||0);state.last=now;update(dt);draw();requestAnimationFrame(frame);}
requestAnimationFrame(frame);

// Each control owns its pointer so one thumb can steer while the other jumps.
const heldPointers = new Map();
function bindPad(el, press, move, release) {
  el.addEventListener('pointerdown', event => {
    if (event.button !== 0 || portrait.matches || state.screen !== 'playing' || heldPointers.has(el)) return;
    event.preventDefault();
    try { el.setPointerCapture(event.pointerId); } catch {}
    heldPointers.set(el, {id:event.pointerId, release});
    el.classList.add('active');
    sound.ensure();
    press(event);
  });
  if (move) el.addEventListener('pointermove', event => {
    if (heldPointers.get(el)?.id === event.pointerId) move(event);
  });
  function end(event) {
    if (heldPointers.get(el)?.id !== event.pointerId) return;
    heldPointers.delete(el);
    el.classList.remove('active');
    release();
  }
  el.addEventListener('pointerup', end);
  el.addEventListener('pointercancel', end);
  el.addEventListener('lostpointercapture', end);
}
function clearPad() {
  for (const [el, pointer] of heldPointers) {
    heldPointers.delete(el);
    if (el.hasPointerCapture?.(pointer.id)) el.releasePointerCapture(pointer.id);
    el.classList.remove('active');
    pointer.release();
  }
  for (const key in controls) controls[key] = false;
}
const stick = $('joystick');
const base = stick.querySelector('.stick-base');
function steer(event) {
  const bounds = base.getBoundingClientRect();
  const radius = Math.max(1, bounds.width / 2);
  const x = (event.clientX - bounds.left) / radius - 1;
  const y = (event.clientY - bounds.top) / radius - 1;
  const length = Math.max(1, Math.hypot(x,y));
  stick.style.setProperty('--stick-x', (x / length * radius * .56) + 'px');
  stick.style.setProperty('--stick-y', (y / length * radius * .56) + 'px');
  // A small neutral zone keeps a resting thumb from moving Lumi.
  stickAxis = Math.sign(x) * Math.min(1, Math.max(0, (Math.abs(x) - .14) / .62));
}
bindPad(stick, steer, steer, () => {
  stickAxis = 0;
  stick.style.removeProperty('--stick-x');
  stick.style.removeProperty('--stick-y');
});
function bindTouch(id,key,pressedKey) {
  bindPad($(id), () => {
    controls[key] = true;
    if (pressedKey) controls[pressedKey] = true;
  }, null, () => { controls[key] = false; });
}
bindTouch('jumpBtn','jump','jumpPressed'); bindTouch('missileBtn','missile','missilePressed'); bindTouch('fireBtn','fire','firePressed'); bindTouch('flyBtn','fly'); bindTouch('invisBtn','invisible','invisiblePressed');

window.addEventListener('keydown',(e)=>{
  if(portrait.matches || (state.screen !== 'playing' && e.target.closest?.('button') && ['Space','Enter'].includes(e.code))) return;
  if(['ArrowLeft','ArrowRight','ArrowUp','Space','KeyA','KeyD','KeyW','KeyJ','KeyK','KeyL','KeyI','Escape'].includes(e.code)) e.preventDefault();
  if(e.code==='ArrowLeft'||e.code==='KeyA') controls.left=true;
  if(e.code==='ArrowRight'||e.code==='KeyD') controls.right=true;
  if(e.code==='ArrowUp'||e.code==='KeyW'||e.code==='Space'){ if(!controls.jump) controls.jumpPressed=true; controls.jump=true; }
  if(e.code==='KeyJ'){ if(!controls.missile) controls.missilePressed=true; controls.missile=true; }
  if(e.code==='KeyK'){ if(!controls.fire) controls.firePressed=true; controls.fire=true; }
  if(e.code==='KeyL') controls.fly=true;
  if(e.code==='KeyI'){ if(!controls.invisible) controls.invisiblePressed=true; controls.invisible=true; }
  if(e.code==='Escape'){ if(state.screen==='playing') pauseGame(); else if(state.screen==='paused') resumeGame(); }
  sound.ensure();
});
window.addEventListener('keyup',(e)=>{
  if(e.code==='ArrowLeft'||e.code==='KeyA') controls.left=false;
  if(e.code==='ArrowRight'||e.code==='KeyD') controls.right=false;
  if(e.code==='ArrowUp'||e.code==='KeyW'||e.code==='Space') controls.jump=false;
  if(e.code==='KeyJ') controls.missile=false;
  if(e.code==='KeyK') controls.fire=false;
  if(e.code==='KeyL') controls.fly=false;
  if(e.code==='KeyI') controls.invisible=false;
});
window.addEventListener('blur',()=>{ for(const k in controls) controls[k]=false; if(state.screen==='playing') pauseGame(); });

$('playBtn').onclick=()=>{ showLevels(); };
$('howBtn').onclick=()=>{ hideAllScreens(); ui.how.classList.remove('hidden'); state.screen='how'; };
$('closeHowBtn').onclick=()=>showTitle(); $('backTitleBtn').onclick=()=>showTitle();
$('pauseBtn').onclick=pauseGame; $('resumeBtn').onclick=resumeGame;
$('restartBtn').onclick=()=>startLevel(state.levelIndex); $('retryBtn').onclick=()=>startLevel(state.levelIndex);
$('exitBtn').onclick=showLevels; $('levelsBtn').onclick=showLevels;
$('nextBtn').onclick=()=>startLevel(state.levelIndex+1);
$('soundBtn').onclick=()=>{ state.audio=!state.audio; ui.soundBtn.textContent=state.audio?'Desligar som':'Ligar som'; persist(); if(!state.audio) sound.stopMusic(); else if(state.screen==='playing') sound.startMusic(state.level.theme.music, true); };
$('resetBtn').onclick=()=>{ if(confirm('Apagar todo o progresso salvo?')){ save={unlocked:1,best:{},fragments:{},audio:state.audio}; persist(); renderLevelGrid(); } };
$('fullBtn').onclick=toggleFullscreen; $('topFullBtn').onclick=toggleFullscreen;

$('nextStop').onclick=()=>startLevel(currentMapDestination());
$('watchIntro').onclick=()=>{ hideAllScreens(); introLoopStarted=false; startIntroPresentation(); };
const portrait = window.matchMedia('(orientation: portrait)');
const gate = $('orientationGate');
function syncOrientation(){
  const blocked = portrait.matches;
  if(blocked) pauseGame();
  gate.hidden = !blocked;
  for(const child of gameWrap.children) {
    if(child !== gate) child.inert = blocked;
  }
  if(blocked) $('rotateFull').focus();
  else if(state.screen==='paused') $('resumeBtn').focus();
}
portrait.addEventListener?.('change', syncOrientation);
window.addEventListener('resize', syncOrientation);
document.addEventListener('visibilitychange', () => { if (document.hidden) pauseGame(); });
$('rotateFull').onclick=enterFullscreen;
const embedded=window.parent!==window && document.referrer.startsWith(location.origin+'/');
if(embedded) {
  const leave=$('catalogExit');
  leave.classList.remove('hidden');
  $('rotateExit').classList.remove('hidden');
  $('rotateExit').onclick=()=>leave.click();
  leave.onclick=()=>parent.postMessage({type:'integro-cristais-exit'},location.origin);
}
ui.intro.classList.add('hidden');
refreshFullscreenButtons();
showTitle(false);
syncOrientation();
})();
