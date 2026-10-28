(function () {
  'use strict';
  if (window.IntegroUpdates) return;
  const VERSION = '20261028-event-end1';
  const isGame = location.pathname === '/integro-box/jogar.html';
  let pending = false, dirty = false, dismissed = false, reloading = false;
  let checking = false, overlay, title, message, finish, savePromise;
  let noticeVersion = null, deferredVersion = null;
  const dirtyForms = new Set();
  const storageKey = 'integro:last-auto-update';

  function ui() {
    if (overlay) return;
    const style = document.createElement('style');
    style.textContent = `#integroUpdate{position:fixed;inset:0;z-index:2147483647;background:#f6f8f1f5;color:#163e30;display:grid;place-items:center;padding:24px;font:16px/1.6 Arial,sans-serif;backdrop-filter:blur(12px)}#integroUpdate[hidden]{display:none}#integroUpdate .update-card{width:min(520px,100%);text-align:center}#integroUpdate h2{font-size:clamp(27px,5vw,42px);line-height:1.12;letter-spacing:-1px;margin:24px 0 14px}#integroUpdate p{color:#476257}#integroUpdate .update-art{display:flex;justify-content:center;gap:10px;height:65px;align-items:center}#integroUpdate .update-art i{width:24px;height:24px;background:#245c45;border-radius:7px;animation:integroUpdateBounce 1.4s ease-in-out infinite}#integroUpdate .update-art i:nth-child(2){animation-delay:.15s;background:#82ac50}#integroUpdate .update-art i:nth-child(3){animation-delay:.3s;background:#bedb78}#integroUpdate button{border:1px solid #245c45;border-radius:30px;background:#245c45;color:white;padding:12px 20px;font:inherit;cursor:pointer}#integroUpdate button[hidden]{display:none}#integroUpdate[data-compact=true]{inset:auto 12px max(12px,env(safe-area-inset-bottom));width:min(420px,calc(100% - 24px));box-sizing:border-box;max-height:45dvh;overflow:auto;display:block;padding:16px;border:1px solid #aabca9;border-radius:16px;box-shadow:0 5px 24px #163e3020}#integroUpdate[data-compact=true] .update-card{width:auto;text-align:left}#integroUpdate[data-compact=true] .update-art{display:none}#integroUpdate[data-compact=true] h2{font-size:20px;margin:0}#integroUpdate[data-compact=true] p{margin:8px 0}@keyframes integroUpdateBounce{0%,80%,100%{transform:translateY(0) rotate(0)}40%{transform:translateY(-22px) rotate(90deg)}}@media(prefers-reduced-motion:reduce){#integroUpdate .update-art i{animation:none}}`;
    document.head.append(style);
    overlay = document.createElement('section'); overlay.id = 'integroUpdate'; overlay.hidden = true;
    overlay.setAttribute('role', 'status'); overlay.setAttribute('aria-live', 'polite');
    overlay.innerHTML = '<div class="update-card"><div class="update-art" aria-hidden="true"><i></i><i></i><i></i></div><small>INSTITUTO INTEGRO</small><h2></h2><p></p><button type="button" hidden></button></div>';
    title = overlay.querySelector('h2'); message = overlay.querySelector('p'); finish = overlay.querySelector('button');
    finish.onclick = () => {
      dismissed = true; deferredVersion = noticeVersion; overlay.dataset.compact = 'true'; overlay.hidden = true;
    };
    document.body.append(overlay);
    document.addEventListener('fullscreenchange', () => (document.fullscreenElement || document.body).append(overlay));
  }

  async function saveGames() {
    if (!isGame) return;
    if (!window.BoxMultiplayer) return;
    if (savePromise) return savePromise;
    savePromise = (async () => {
      window.dispatchEvent(new Event('blur'));
      // Disconnect restores the individual Craft world before saving progress.
      await Promise.race([window.BoxMultiplayer?.disconnect(), new Promise(resolve => setTimeout(resolve, 4000))]);
      for (const adapter of Object.values(window.BoxAdapters || {})) adapter.persist?.();
      window.BoxGoSnake?.persist();
      window.BoxRush?.persist();
      window.BoxShark?.persist();
      window.BoxTower?.persist();
      window.BoxInterDance?.persist();
      window.dispatchEvent(new Event('pagehide'));
      // Local game hooks persist first; then synchronize the family profile.
      await Promise.race([window.BoxEggCloud?.flush(), new Promise(resolve => setTimeout(resolve, 4000))]);
    })();
    return savePromise;
  }

  function show(maintenance, version) {
    ui();
    if (noticeVersion !== version) { dismissed = false; deferredVersion = null; }
    noticeVersion = version; overlay.hidden = (dismissed && dirty) || deferredVersion === version;
    overlay.dataset.compact = String(dismissed && dirty);
    title.textContent = maintenance ? 'Estamos em atualização. Aguarde…' : 'Nova versão disponível';
    message.textContent = dirty
      ? 'Há informações em edição nesta tela. Conclua e salve antes de atualizar; nada será enviado automaticamente.'
      : maintenance ? 'Estamos preparando as novidades. Esta página será atualizada automaticamente quando estiver pronta.' : 'Salvando seu progresso para abrir a nova versão…';
    finish.hidden = !dirty || dismissed;
    finish.textContent = 'Voltar à minha edição';
    void saveGames();
  }

  function deferReload(version, exhausted) {
    reloading = false;
    title.textContent = exhausted ? 'Atualização adiada' : 'Aguardando a nova versão';
    message.textContent = exhausted
      ? 'Os arquivos novos ainda não chegaram. Você pode continuar e atualizar a página mais tarde.'
      : 'Os arquivos novos ainda não chegaram. Você pode continuar enquanto tentamos novamente.';
    overlay.dataset.compact = 'true';
    overlay.hidden = deferredVersion === version;
    finish.hidden = false;
    finish.textContent = 'Continuar nesta tela';
  }

  async function reload(version) {
    if (reloading || dirty) return;
    reloading = true;
    await saveGames();
    try {
      const retryKey = storageKey + ':attempts';
      const previous = JSON.parse(sessionStorage.getItem(retryKey) || 'null');
      const attempts = previous?.version === version ? previous.count : 0;
      if (attempts >= 3) {
        deferReload(version, true);
        return;
      }
      if (attempts && Date.now() - previous.at < 30000) {
        deferReload(version, false);
        return;
      }
      sessionStorage.setItem(storageKey, version);
      sessionStorage.setItem(retryKey, JSON.stringify({version, count:attempts + 1, at:Date.now()}));
    } catch { /* Reload remains possible if storage is disabled. */ }
    setTimeout(() => {
      const url = new URL(location.href); url.searchParams.set('_integro_update', version);
      location.replace(url.href);
    }, 1600);
  }

  async function check() {
    if (checking || reloading) return;
    checking = true;
    const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 5000);
    try {
      const response = await fetch('/site-release.json?t=' + Date.now(), {cache:'no-store', signal:controller.signal});
      if (!response.ok) return;
      const release = await response.json();
      if (!release || typeof release.maintenance !== 'boolean' || !/^[a-zA-Z0-9-]{1,60}$/.test(release.version)) return;
      if (release.maintenance) {
        pending = true; show(true, release.version);
      } else if (release.version !== VERSION) {
        pending = true; show(false, release.version); await reload(release.version);
      } else {
        pending = false; savePromise = null; deferredVersion = null; dismissed = false;
        try { sessionStorage.removeItem(storageKey + ':attempts'); } catch {}
        if (overlay) overlay.hidden = true;
      }
    } catch {
      if (pending && message) message.textContent = 'Aguardando conexão para conferir a atualização. Seus dados não serão enviados automaticamente.';
    } finally { clearTimeout(timeout); checking = false; }
  }

  function markDirty(event) {
    if (isGame || event.target.closest('#integroUpdate')) return;
    if (event.target.matches('input,textarea,select,[contenteditable="true"]')) {
      dirtyForms.add(event.target.form || event.target); dirty = true;
      if (pending) show(true, noticeVersion);
    }
  }
  document.addEventListener('input', markDirty, true);
  document.addEventListener('change', markDirty, true);
  document.addEventListener('reset', event => {
    dirtyForms.delete(event.target); dirty = dirtyForms.size > 0;
    if (!dirty && pending) void check();
  }, true);
  // A covering update screen must also stop keyboard input reaching a game.
  document.addEventListener('keydown', event => {
    if (isGame && overlay && !overlay.hidden && overlay.dataset.compact !== 'true' && !overlay.contains(event.target)) {event.preventDefault();event.stopImmediatePropagation();}
  }, true);
  window.addEventListener('online', check);
  document.addEventListener('visibilitychange', () => {if (!document.hidden) void check();});
  window.IntegroUpdates = {check, version:VERSION};
  setInterval(check, 10000);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', check, {once:true}); else void check();
})();
