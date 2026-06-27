(function(){
  const isHome = location.pathname === '/' || location.pathname.endsWith('/index.html');
  if (!isHome || document.getElementById('integroInstagramShowcase')) return;

  const photos = [
    '/assets/instagram/story-1.jpeg',
    '/assets/instagram/story-2.jpeg',
    '/assets/instagram/story-3.jpeg',
    '/assets/instagram/story-4.jpeg'
  ];

  const style = document.createElement('style');
  style.textContent = `
    .ig-showcase {
      padding: 26px 0 10px;
      background: radial-gradient(circle at top left, rgba(216,169,75,.18), transparent 34%), linear-gradient(180deg,#f9fcfa 0%,#eef8f2 100%);
    }
    .ig-showcase-wrap {
      width: min(92%, 1180px);
      margin: 0 auto;
      display: grid;
      place-items: center;
    }
    .ig-phone {
      width: min(380px, 92vw);
      border-radius: 34px;
      padding: 12px;
      background: linear-gradient(145deg,#0f3d2e,#1f6e50);
      box-shadow: 0 20px 45px rgba(0,50,30,.22);
      border: 2px solid rgba(216,169,75,.55);
      position: relative;
      overflow: hidden;
    }
    .ig-phone::before {
      content: '';
      width: 86px;
      height: 5px;
      border-radius: 999px;
      background: rgba(255,255,255,.72);
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 3;
    }
    .ig-screen {
      aspect-ratio: 9/16;
      border-radius: 25px;
      overflow: hidden;
      background: #f7fbf8;
      position: relative;
      border: 1px solid rgba(255,255,255,.35);
    }
    .ig-screen img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      opacity: 1;
      transition: opacity .45s ease;
      background: #f7fbf8;
    }
    .ig-dots {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 12px;
      display: flex;
      gap: 6px;
      justify-content: center;
      z-index: 2;
    }
    .ig-dot {
      width: 7px;
      height: 7px;
      border-radius: 999px;
      background: rgba(255,255,255,.55);
      border: 1px solid rgba(15,61,46,.22);
      transition: .25s ease;
    }
    .ig-dot.active {
      width: 22px;
      background: #d8a94b;
    }
    .ig-follow {
      width: min(380px, 92vw);
      margin: 12px auto 0;
      text-align: center;
      background: #fff;
      border: 1px solid rgba(15,61,46,.10);
      box-shadow: 0 12px 30px rgba(0,0,0,.07);
      border-radius: 999px;
      padding: 13px 16px;
      color: #0f3d2e;
      font-weight: 900;
      letter-spacing: .01em;
    }
    .ig-follow a {
      color: #1f6e50;
      text-decoration: none;
    }
    .ig-follow small {
      display: block;
      color: #6b7280;
      font-weight: 700;
      margin-top: 2px;
      letter-spacing: 0;
    }
    @media (min-width: 900px) {
      .ig-showcase { padding-top: 34px; }
      .ig-phone, .ig-follow { width: 330px; }
    }
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.id = 'integroInstagramShowcase';
  section.className = 'ig-showcase';
  section.innerHTML = `
    <div class='ig-showcase-wrap'>
      <div class='ig-phone' aria-label='Painel de publicações do Instituto INTEGRO'>
        <div class='ig-screen'>
          <img id='igStoryPhoto' alt='Publicação do Instituto INTEGRO' src='${photos[0]}'>
          <div class='ig-dots'>${photos.map((_, i) => `<span class='ig-dot ${i === 0 ? 'active' : ''}'></span>`).join('')}</div>
        </div>
      </div>
      <div class='ig-follow'>
        Siga o <a href='https://www.instagram.com/institutointegro/' target='_blank' rel='noopener noreferrer'>@institutointegro</a> no Instagram
        <small>Veja atividades, bastidores e resultados dos nossos alunos.</small>
      </div>
    </div>
  `;

  const header = document.querySelector('header');
  const main = document.querySelector('main');
  if (header && header.parentNode) {
    header.insertAdjacentElement('afterend', section);
  } else if (main && main.parentNode) {
    main.insertAdjacentElement('beforebegin', section);
  } else {
    document.body.prepend(section);
  }

  let index = 0;
  const img = section.querySelector('#igStoryPhoto');
  const dots = Array.from(section.querySelectorAll('.ig-dot'));

  setInterval(() => {
    if (!img) return;
    index = (index + 1) % photos.length;
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = photos[index];
      img.style.opacity = '1';
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }, 220);
  }, 3400);
})();
