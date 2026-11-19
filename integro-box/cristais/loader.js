(() => {
  const lobby = document.getElementById('lobby');
  const home = document.getElementById('brandHome');
  if (!lobby || !home || !window.BoxStorage || window.BoxCristais) return;

  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = '<div class="card-body"><h3>A Aventura dos Cristais · O Mundo</h3><p>Viaje com Lumi de Manaus a Tóquio. Encontre os três fragmentos de cada cidade e complete seu passaporte.</p><button class="btn" id="playCristais">Jogar</button></div>';
  lobby.querySelector('.cards').prepend(card);
  const play = card.querySelector('button');
  const stage = document.createElement('section');
  stage.hidden = true;
  stage.setAttribute('aria-label', 'A Aventura dos Cristais · O Mundo');
  stage.style.cssText = 'position:fixed;inset:0;z-index:20000;background:#0b222b';
  document.body.append(stage);
  let frame, opening = false, stopped = false;
  function hide() {
    if (!frame) return;
    frame.remove();
    frame = null;
    stage.hidden = true;
  }
  function exit() {
    hide();
    home.click();
    play.focus();
  }
  async function open() {
    if (opening || stopped || frame) return;
    opening = true;
    try {
      await window.BoxMultiplayer?.disconnect();
      if (stopped) return;
      home.click();
      frame = document.createElement('iframe');
      frame.title = stage.getAttribute('aria-label');
      frame.allowFullscreen = true;
      frame.style.cssText = 'display:block;width:100%;height:100%;border:0';
      frame.src = './cristais/index.html?v=20261118-cristais-hud1';
      stage.append(frame);
      stage.hidden = false;
      frame.focus();
    } finally {
      opening = false;
    }
  }
  function receive(event) {
    if (frame && event.origin === location.origin && event.source === frame.contentWindow && event.data?.type === 'integro-cristais-exit') exit();
  }
  home.addEventListener('click', hide);
  window.addEventListener('message', receive);
  play.onclick = open;
  window.BoxCristais = {open, stop() {
    stopped = true;
    hide();
    window.removeEventListener('message', receive);
    home.removeEventListener('click', hide);
  }};
})();
