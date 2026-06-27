(function(){
const isHome=location.pathname==='/'||location.pathname.endsWith('/index.html');
if(!isHome||document.getElementById('integroInstagramShowcase'))return;
const photoScripts=[1,2,3,4].map(n=>`/assets/home-instagram-photo-${n}.js?v=20260627-hires`);
function placeholder(){
  const svg=`<svg xmlns='http://www.w3.org/2000/svg' width='320' height='569' viewBox='0 0 320 569'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop stop-color='#f7fbf8'/><stop offset='1' stop-color='#e8f5ee'/></linearGradient></defs><rect width='320' height='569' rx='26' fill='url(#g)'/><rect x='22' y='24' width='276' height='521' rx='24' fill='white' opacity='.88'/><circle cx='160' cy='166' r='52' fill='#1f6e50'/><text x='160' y='181' text-anchor='middle' font-family='Arial,sans-serif' font-size='58' font-weight='900' fill='white'>i</text><text x='160' y='274' text-anchor='middle' font-family='Arial,sans-serif' font-size='25' font-weight='900' fill='#0f3d2e'>INSTITUTO</text><text x='160' y='310' text-anchor='middle' font-family='Arial,sans-serif' font-size='32' font-weight='900' fill='#0f3d2e'>INTEGRO</text><text x='160' y='372' text-anchor='middle' font-family='Arial,sans-serif' font-size='17' font-weight='700' fill='#6b7280'>Publicações em destaque</text></svg>`;
  return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);
}
function getPhotos(){
  const list=(window.INTEGRO_INSTAGRAM_PHOTOS||[]).filter(p=>typeof p==='string'&&p.startsWith('data:image'));
  return list.length?list:[placeholder()];
}
function loadPhotoScripts(){
  return new Promise(resolve=>{
    let finished=false;
    const done=()=>{if(finished)return;const photos=getPhotos();if(photos.length){finished=true;resolve(photos);}};
    photoScripts.forEach(src=>{
      if(document.querySelector(`script[src^='${src.split('?')[0]}']`))return;
      const s=document.createElement('script');
      s.src=src;
      s.defer=true;
      s.dataset.igPhoto='1';
      s.onload=done;
      s.onerror=done;
      document.body.appendChild(s);
    });
    setTimeout(()=>{finished=true;resolve(getPhotos());},1800);
  });
}
function render(photos){
  if(document.getElementById('integroInstagramShowcase'))return;
  const style=document.createElement('style');
  style.textContent=`.hero-grid.ig-enhanced{grid-template-columns:minmax(360px,1fr) minmax(330px,.78fr) minmax(230px,.52fr);gap:24px;align-items:center}.ig-showcase{width:100%;display:grid;justify-items:center;align-self:center}.ig-phone{width:min(270px,100%);border-radius:32px;padding:10px;background:linear-gradient(145deg,#0f3d2e,#1f6e50);box-shadow:0 18px 42px rgba(0,50,30,.22);border:2px solid rgba(216,169,75,.62);position:relative;overflow:hidden}.ig-phone:before{content:'';width:74px;height:5px;border-radius:999px;background:rgba(255,255,255,.72);position:absolute;top:7px;left:50%;transform:translateX(-50%);z-index:3}.ig-screen{aspect-ratio:9/16;border-radius:23px;overflow:hidden;background:#f7fbf8;position:relative;border:1px solid rgba(255,255,255,.35)}.ig-screen img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block;opacity:1;transition:opacity .45s ease;image-rendering:auto}.ig-dots{position:absolute;left:0;right:0;bottom:10px;display:flex;gap:6px;justify-content:center;z-index:2}.ig-dot{width:7px;height:7px;border-radius:999px;background:rgba(255,255,255,.6);border:1px solid rgba(15,61,46,.22);transition:.25s ease}.ig-dot.active{width:22px;background:#d8a94b}.ig-follow{width:min(270px,100%);margin:10px auto 0;text-align:center;background:#fff;border:1px solid rgba(15,61,46,.10);box-shadow:0 12px 30px rgba(0,0,0,.07);border-radius:22px;padding:12px 14px;color:#0f3d2e;font-weight:900;line-height:1.25;letter-spacing:.01em}.ig-follow a{color:#1f6e50;text-decoration:none}.ig-follow small{display:block;color:#6b7280;font-weight:700;margin-top:4px;letter-spacing:0;font-size:.78rem}@media(max-width:1180px){.hero-grid.ig-enhanced{grid-template-columns:minmax(360px,1fr) minmax(330px,.78fr) minmax(230px,.52fr)}.ig-phone,.ig-follow{width:min(250px,100%)}}@media(max-width:980px){.hero-grid.ig-enhanced{grid-template-columns:1fr}.hero-grid.ig-enhanced .hero-card,.hero-grid.ig-enhanced .ig-showcase{grid-column:auto;grid-row:auto}.ig-phone,.ig-follow{width:min(360px,92vw)}}`;
  document.head.appendChild(style);
  const showcase=document.createElement('aside');showcase.id='integroInstagramShowcase';showcase.className='ig-showcase';
  showcase.innerHTML=`<div class='ig-phone' aria-label='Painel de publicações do Instituto INTEGRO'><div class='ig-screen'><img id='igStoryPhoto' alt='Publicação do Instituto INTEGRO' src='${photos[0]}'><div class='ig-dots'>${photos.map((_,i)=>`<span class='ig-dot ${i===0?'active':''}'></span>`).join('')}</div></div></div><div class='ig-follow'>Siga o <a href='https://www.instagram.com/institutointegro/' target='_blank' rel='noopener noreferrer'>@institutointegro</a> no Instagram<small>Veja atividades, bastidores e resultados dos nossos alunos.</small></div>`;
  const heroGrid=document.querySelector('#inicio .hero-grid')||document.querySelector('.hero-grid');
  if(heroGrid){heroGrid.classList.add('ig-enhanced');heroGrid.appendChild(showcase)}else{const header=document.querySelector('header');if(header)header.insertAdjacentElement('afterend',showcase);else document.body.prepend(showcase)}
  let index=0;const img=showcase.querySelector('#igStoryPhoto');const dots=Array.from(showcase.querySelectorAll('.ig-dot'));
  if(photos.length>1){setInterval(()=>{if(!img)return;index=(index+1)%photos.length;img.style.opacity='0';setTimeout(()=>{img.src=photos[index];img.style.opacity='1';dots.forEach((dot,i)=>dot.classList.toggle('active',i===index));},220)},3400);}
}
loadPhotoScripts().then(render).catch(()=>render([placeholder()]));
})();
