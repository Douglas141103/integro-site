/* Local, reviewed translations. No player text is sent to a translation service. */
(() => {
  'use strict';
  const VERSION = '20261021-traps1';
  const STORAGE_KEY = 'integro-box-language-v1';
  const LANGUAGES = {
    pt: { locale: 'pt-BR', label: 'Português', flag: '🇧🇷' },
    en: { locale: 'en-GB', label: 'English', flag: '🇬🇧' },
    de: { locale: 'de-DE', label: 'Deutsch', flag: '🇩🇪' }
  };
  const COVER_IDS = new Set(['pegue-o-ovo','meu-bairro','rua-das-descobertas','torre-da-matematica','ponte-das-palavras','rota-do-robo','memoria-em-ingles']);
  const ATTRS = ['aria-label','aria-description','title','placeholder','alt'];
  const IGNORE = 'script,style,code,pre,[contenteditable="true"],[translate="no"],[data-i18n-ignore],#boxUserName,#boxStudentSelect option:not([value=""]),.letter-bank,.slots,.memory';
  const textSources = new WeakMap(), attrSources = new WeakMap(), imageSources = new WeakMap();
  const cache = new Map(), dictionaries = new Map();
  let language = 'pt', requested = 'pt', dictionary = {}, templates = [], phrasePattern = null, uppercase = new Map();
  let observer, scheduled = false, working = false, dialog, trigger, revision = 0;
  const pending = new Set();
  try { const stored = localStorage.getItem(STORAGE_KEY); if (LANGUAGES[stored]) requested = stored; } catch {}
  const normal = value => String(value).replace(/\s+/g, ' ').trim();
  const escapeRE = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  function protectedElement(el) {
    if (!el || el.closest(IGNORE)) return true;
    // Names in standings are user data; the separate “You” badge is UI.
    return el.matches('.egg-ranking-table td:nth-child(2),#boxChatMessages li>span,#boxChatMessages li>b');
  }
  function compile(data) {
    dictionary = data; templates = []; uppercase = new Map(Object.entries(data).map(([k,v])=>[k.toUpperCase(),v.toUpperCase()]));
    const phrases = [];
    for (const [source, target] of Object.entries(data)) {
      if (/\{\d+\}/.test(source)) {
        const tokens = [], parts = source.split(/(\{\d+\})/);
        const literalSize = source.replace(/\{\d+\}/g,'').trim().length;
        if (literalSize < 2) continue;
        const pattern = parts.map(p => /^\{\d+\}$/.test(p) ? (tokens.push(p), '(.+?)') : escapeRE(p)).join('');
        templates.push({ re: new RegExp('^' + pattern + '$', 'u'), tokens, target, size: literalSize });
      } else if (source.length >= 3 && /\p{L}/u.test(source)) phrases.push(source);
    }
    templates.sort((a,b) => b.size - a.size);
    phrases.sort((a,b) => b.length - a.length);
    phrasePattern = phrases.length ? new RegExp('(?<![\\p{L}\\p{N}_])(?:' + phrases.map(escapeRE).join('|') + ')(?![\\p{L}\\p{N}_])', 'gu') : null;
    cache.clear();
  }
  function numbers(value) {
    if (language === 'pt') return value;
    return value.replace(/(?<![\w/.:])\d{1,3}(?:\.\d{3})+(?:,\d+)?(?![\w/.:])|(?<![\w/.:])\d+,\d+(?![\w/.:])/g, raw => {
      const decimals = raw.includes(',') ? raw.split(',')[1].length : 0;
      return Number(raw.replace(/\./g,'').replace(',','.')).toLocaleString(LANGUAGES[language].locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    });
  }
  function translate(value, depth = 0) {
    const original = String(value ?? '');
    if (language === 'pt' || !original.trim()) return original;
    const source = normal(original);
    if (!/\p{L}/u.test(source)) return numbers(original);
    let result = depth === 0 ? cache.get(source) : undefined;
    if (result === undefined) {
      result = Object.hasOwn(dictionary,source) ? dictionary[source] : undefined;
      if (result === undefined && depth < 2) {
        for (const template of templates) {
          const match = template.re.exec(source);
          if (!match) continue;
          const captures = new Map(template.tokens.map((token,i) => [token, translate(match[i+1],depth+1)]));
          result = template.target.replace(/\{\d+\}/g, token => captures.get(token) ?? token);
          break;
        }
      }
      if (result === undefined && phrasePattern) result = source.replace(phrasePattern, phrase => dictionary[phrase]);
      if (result === undefined) result = source;
      // Canvas signs use uppercase headings, while source dictionaries may use title case.
      if (result === source && /\p{L}/u.test(source) && source === source.toUpperCase()) {
        if (uppercase.has(source)) result = uppercase.get(source);
      }
      result = numbers(result);
      if (cache.size > 5000) cache.clear();
      if(depth===0)cache.set(source,result);
    }
    return original.match(/^\s*/)[0] + result + original.match(/\s*$/)[0];
  }
  function sourceText(node) {
    let state = textSources.get(node);
    if (!state || node.data !== state.rendered) state = { original: node.data, rendered: node.data };
    state.rendered = translate(state.original);
    if (node.data !== state.rendered) node.data = state.rendered;
    textSources.set(node,state);
  }
  function attributes(el) {
    let states = attrSources.get(el);
    if (!states) { states = {}; attrSources.set(el,states); }
    for (const key of ATTRS) {
      if (!el.hasAttribute(key)) continue;
      const current = el.getAttribute(key);
      let state = states[key];
      if (!state || current !== state.rendered) state = { original: current, rendered: current };
      state.rendered = translate(state.original);
      if (current !== state.rendered) el.setAttribute(key,state.rendered);
      states[key] = state;
    }
  }
  function cover(img) {
    let state = imageSources.get(img);
    const current = img.getAttribute('src') || '';
    if (!state || current !== state.rendered) {
      const match = current.match(/(?:catalog-v1\/|assets\/)([a-z-]+)\.(?:webp|svg)(?:\?.*)?$/);
      const id = /assets\/robot-route\.svg/.test(current) ? 'rota-do-robo' : match?.[1];
      if (!COVER_IDS.has(id)) return;
      state = { original: current, id, rendered: current };
    }
    const desired = language === 'pt' ? state.original : '/integro-box/assets/catalog-i18n/' + state.id + '-' + language + '.svg?v=' + VERSION;
    if (current !== desired) img.setAttribute('src',desired);
    state.rendered = desired; imageSources.set(img,state);
  }
  function visit(root) {
    if (!root?.isConnected) return;
    if (root.nodeType === 3) { if (!protectedElement(root.parentElement)) sourceText(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 9) return;
    const el = root.nodeType === 1 ? root : root.documentElement;
    if (el.matches(IGNORE)) return;
    // Translating an implicit option value must never change the application's selected value.
    if (el.tagName === 'OPTION' && !el.hasAttribute('value')) el.setAttribute('value',el.value);
    if (!protectedElement(el)) attributes(el);
    if (el.tagName === 'IMG') cover(el);
    if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') return;
    for (const child of el.childNodes) visit(child);
  }
  function observe() {
    observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:[...ATTRS,'src']});
  }
  function flush() {
    scheduled = false;
    if (working) return;
    working = true; observer.disconnect();
    try {
      mountControls();
      const roots = [...pending]; pending.clear();
      for (const root of roots) {
        if (root.nodeType === 1 && roots.some(other => other !== root && other.nodeType === 1 && other.contains(root))) continue;
        visit(root);
      }
    } finally { working = false; observe(); }
  }
  function enqueue(root) {
    pending.add(root);
    if (!scheduled) { scheduled = true; requestAnimationFrame(flush); }
  }
  function control(className, text) {
    const button = document.createElement('button'); button.type = 'button'; button.className = className;
    button.dataset.i18nIgnore = ''; button.textContent = text;
    button.addEventListener('click',openDialog);
    return button;
  }
  function mountControls() {
    const header = document.querySelector('body>header .head,body>header.box-top,body>header.ig-site-head');
    if (header && !header.querySelector('.box-language-quick')) {
      trigger = control('box-language-quick',LANGUAGES[language].flag);
      trigger.setAttribute('aria-haspopup','dialog'); trigger.setAttribute('aria-controls','boxLanguageDialog');
      header.append(trigger);
    }
    for (const target of document.querySelectorAll('.catalog-account-links,.egg-menu-grid')) {
      if (!target.querySelector('[data-language-settings]')) {
        const button = control('box-language-settings', ''); button.dataset.languageSettings = '';
        target.append(button);
      }
    }
    updateControls();
  }
  function updateControls() {
    for (const button of document.querySelectorAll('.box-language-quick')) {
      button.textContent = LANGUAGES[language].flag;
      button.title = translate('Idioma') + ': ' + LANGUAGES[language].label;
      button.setAttribute('aria-label',button.title);
    }
    for (const button of document.querySelectorAll('[data-language-settings]')) button.textContent = LANGUAGES[language].flag + ' ' + translate('Idioma') + ' · ' + LANGUAGES[language].label;
  }
  function openDialog() {
    const parent = document.fullscreenElement || document.body;
    if (!dialog) {
      dialog = document.createElement('dialog'); dialog.id = 'boxLanguageDialog'; dialog.className = 'box-language-dialog';
      dialog.dataset.i18nIgnore = ''; dialog.setAttribute('aria-labelledby','boxLanguageTitle');
      dialog.addEventListener('keydown', e => e.stopPropagation());
      dialog.addEventListener('click', e => { if (e.target === dialog) { const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close(); } });
    }
    parent.append(dialog); dialog.replaceChildren();
    const close = document.createElement('button');close.type='button';close.className='box-language-close';close.textContent='×';close.setAttribute('aria-label',translate('Fechar'));close.onclick=()=>dialog.close();
    const title=document.createElement('h2');title.id='boxLanguageTitle';title.textContent=translate('Idioma');
    const info=document.createElement('p');info.textContent=translate('Escolha o idioma dos menus, jogos e encartes.');
    dialog.append(close,title,info);
    for (const [code, item] of Object.entries(LANGUAGES)) {
      const b=document.createElement('button');b.type='button';b.className='box-language-option';b.lang=item.locale;b.setAttribute('aria-pressed',String(code===language));
      const flag=document.createElement('span');flag.textContent=item.flag;flag.setAttribute('aria-hidden','true');
      const name=document.createElement('strong');name.textContent=item.label;
      const check=document.createElement('span');check.textContent=code===language?'✓':'→';check.setAttribute('aria-hidden','true');b.append(flag,name,check);
      b.onclick=async()=>{
        if(code===language){dialog.close();return;}
        dialog.querySelectorAll('button').forEach(x=>x.disabled=true);info.textContent=translate('Aplicando idioma…');
        try {
          await setLanguage(code);
          // A fresh catalog also rebuilds text baked into 3D scene textures.
          if (location.pathname.endsWith('/jogar.html')) {
            window.dispatchEvent(new Event('pagehide')); // Existing game save hooks run synchronously.
            await Promise.race([Promise.resolve(window.BoxEggCloud?.flush()).catch(()=>{}),new Promise(resolve=>setTimeout(resolve,2500))]);
            location.reload();
          } else dialog.close();
        } catch { info.textContent=translate('Não foi possível carregar este idioma. Tente novamente.');dialog.querySelectorAll('button').forEach(x=>x.disabled=false); }
      };
      dialog.append(b);
    }
    if(location.pathname.endsWith('/jogar.html')){const note=document.createElement('p');note.className='box-language-note';note.textContent=translate('Ao trocar o idioma, você volta ao catálogo. Seu progresso salvo é mantido.');dialog.append(note);}
    dialog.showModal();
  }
  async function setLanguage(code) {
    if (!LANGUAGES[code]) throw new Error('Unsupported language');
    const ticket = ++revision;
    let data = {};
    if (code !== 'pt') {
      if (!dictionaries.has(code)) {
        const response = await fetch('/integro-box/locales/' + code + '.json?v=' + VERSION, { credentials: 'same-origin' });
        if (!response.ok) throw new Error('Translation unavailable');
        const result = await response.json();
        if (!result || typeof result !== 'object' || Array.isArray(result) || Object.values(result).some(v=>typeof v!=='string')) throw new Error('Invalid translation');
        dictionaries.set(code,result);
      }
      data = dictionaries.get(code);
    }
    if (ticket !== revision) return;
    language = code; compile(data);
    try { localStorage.setItem(STORAGE_KEY,code); } catch {}
    document.documentElement.lang = LANGUAGES[code].locale;
    document.documentElement.dataset.boxLanguage = code;
    enqueue(document.documentElement); flush();
    window.dispatchEvent(new CustomEvent('box-language-change',{detail:{language:code,locale:LANGUAGES[code].locale}}));
  }
  // Canvas labels are translated before rendering, including 3D signs made from canvas textures.
  if (window.CanvasRenderingContext2D) {
    const proto = window.CanvasRenderingContext2D.prototype;
    for (const method of ['fillText','strokeText','measureText']) {
      const original=proto[method];
      if (typeof original==='function') proto[method]=function(text,...args){return original.call(this,translate(text),...args);};
    }
  }
  const api = { t:translate, setLanguage, open:openDialog, refresh:()=>enqueue(document.documentElement), get language(){return language;}, get locale(){return LANGUAGES[language].locale;}, number:(value,options)=>Number(value).toLocaleString(LANGUAGES[language].locale,options), cover:(id,fallback)=>language!=='pt'&&COVER_IDS.has(id)?'/integro-box/assets/catalog-i18n/'+id+'-'+language+'.svg?v='+VERSION:fallback };
  window.BoxI18n = api;
  observer = new MutationObserver(records=>{
    for(const record of records){
      if(record.type==='childList')for(const node of record.addedNodes)enqueue(node);
      else enqueue(record.target);
    }
  });
  observe();
  api.ready = setLanguage(requested).catch(()=>{language='pt';compile({});document.documentElement.lang='pt-BR';enqueue(document.documentElement);});
})();
