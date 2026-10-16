import {clamp,islandRadius,insideIsland,terrainHeight,groundHeight,islandOutline,ISLANDS,FRUITS,DOCK_OFFSET,RARE_FRUITS,rarePosition,SEA_MINES,UPGRADES,distance,bound,safeNumber,freshSave,cleanSave,stationPosition,FruitAdventure,SEA_BOUNDS} from "./fruit-rules.mjs";
import {iconCanvas,fruitIcon} from "./fruit-icons.js";
function createFruitHUD(canvas){
  canvas.hidden=true;const stage=canvas.parentElement,doc=canvas.ownerDocument,root=doc.createElement('section');root.className='fruit-hud';root.setAttribute('aria-label','Estado da aventura');
  root.innerHTML=`<div class="fruit-vitals"><div class="fruit-hud-numbers"><b data-level></b><span>● <strong data-coins></strong></span></div><div class="fruit-meter-row"><span>VIDA</span><progress data-health max="100"></progress><b data-hp></b></div><div class="fruit-meter-row is-energy"><span>ENERGIA</span><progress data-energy max="100"></progress></div><div class="fruit-xp"><progress data-xp max="100"></progress><span data-xp-label></span></div></div><div class="fruit-radar"><canvas width="192" height="192" aria-label="Bússola e ilhas próximas"></canvas><span>NORTE ↑</span></div><div class="fruit-mission-card"><div><small data-island-number></small><strong data-island-name></strong><span data-mission></span></div><div data-mission-buttons></div><div class="fruit-island-track"><i></i></div></div><div class="fruit-boss-meter" hidden><strong data-boss-name></strong><progress data-boss max="100"></progress></div><p class="fruit-hud-alert" hidden></p>`;
  stage.append(root);root.querySelector('[data-mission-buttons]').append(stage.querySelector('.fruit-quest'));
  const logo=doc.createElement('img');logo.className='fruit-game-logo';logo.src='./assets/catalog-v1/fruit-box.webp';logo.alt='Fruit Box';stage.querySelector('.fruit-top').insertBefore(logo,stage.querySelector('.fruit-top-actions'));
  const q=k=>root.querySelector(k),map=q('.fruit-radar canvas'),ctx=map.getContext('2d'),refs=Object.fromEntries(['level','coins','health','hp','energy','xp','xp-label','island-number','island-name','mission','boss','boss-name'].map(k=>[k,q('[data-'+k+']')]));
  const text=(el,v)=>{if(el.textContent!==String(v))el.textContent=v;};
  function draw(game,yaw){
    const save=game.save,island=ISLANDS[game.island],done=save.claimed.filter(Boolean).length;
    text(refs.level,'NV '+save.level);text(refs.coins,save.coins.toLocaleString('pt-BR'));refs.health.value=game.hp/game.maxHp*100;text(refs.hp,Math.ceil(game.hp));refs.energy.value=game.energy;refs.xp.value=save.xp/game.xpGoal*100;text(refs['xp-label'],save.xp+' / '+game.xpGoal+' XP');
    text(refs['island-number'],game.boating?'EM NAVEGAÇÃO':`ILHA ${String(game.island+1).padStart(2,'0')} / ${ISLANDS.length}`);text(refs['island-name'],game.boating?(game.travelTo==null?'Mar das Ilhas':'Rumo a '+ISLANDS[game.travelTo].name):island.name);
    const mission=game.boating?'Desvie das bombas e procure o cais.':save.claimed[game.island]?`${done} ilhas concluídas · escolha seu próximo destino`:island.fruit&&!save.collected.includes(island.fruit)?'Encontre a fruta '+FRUITS[island.fruit].name:save.kills[game.island]<3?`Sentinelas ${save.kills[game.island]}/3 · explore e prepare seus poderes`:!save.bosses[game.island]?'O guardião está pronto. Desvie e contra-ataque!':'Volte até Lia para receber a recompensa';text(refs.mission,mission);q('.fruit-island-track i').style.width=(done/ISLANDS.length*100)+'%';
    const boss=game.enemies.find(e=>e.boss),showBoss=!game.boating&&boss?.alive&&game.bossReady&&distance(boss,game.player)<30;q('.fruit-boss-meter').hidden=!showBoss;if(showBoss){text(refs['boss-name'],island.boss);refs.boss.value=boss.hp/boss.maxHp*100;}
    const alert=q('.fruit-hud-alert');alert.hidden=game.mineWarning==null&&!game.treasureTarget;text(alert,game.mineWarning!=null?'⚠ Bomba à frente — desvie!':game.treasureTarget?'Tesouro marcado · '+Math.round(distance(rarePosition(game.treasureTarget),game.player))+' m':'');
    ctx.clearRect(0,0,192,192);ctx.save();ctx.translate(96,96);ctx.beginPath();ctx.arc(0,0,88,0,Math.PI*2);ctx.clip();ctx.fillStyle='#1b6376';ctx.fillRect(-96,-96,192,192);const scale=game.boating?.65:1.8;
    for(const i of ISLANDS){const x=(i.x-game.player.x)*scale,z=(i.z-game.player.z)*scale;ctx.fillStyle=game.unlocked(i.id)?'#b4d898':'#598c8b';ctx.beginPath();islandOutline(i,28).forEach((p,n)=>n?ctx.lineTo(x+p.x*scale,z+p.z*scale):ctx.moveTo(x+p.x*scale,z+p.z*scale));ctx.closePath();ctx.fill();}
    if(!game.boating)for(const enemy of game.enemies)if(enemy.alive){ctx.fillStyle=enemy.boss?'#ffe092':'#ef8474';ctx.beginPath();ctx.arc((enemy.x-game.player.x)*scale,(enemy.z-game.player.z)*scale,enemy.boss?5:3,0,7);ctx.fill();}
    if(game.boating)for(const mine of game.mines)if(mine.cooldown<=0){ctx.fillStyle='#ff9d7d';ctx.beginPath();ctx.arc((mine.x-game.player.x)*scale,(mine.z-game.player.z)*scale,3,0,7);ctx.fill();}
    ctx.rotate(-game.player.yaw);ctx.fillStyle='#fffbe5';ctx.beginPath();ctx.moveTo(0,9);ctx.lineTo(-6,-6);ctx.lineTo(6,-6);ctx.closePath();ctx.fill();ctx.restore();
  }
  return {draw,root};
}
function drawTreasureMap(C, A) {
  let g = C.getContext("2d"),
    B = 900,
    E = 600;
  ((C.width = B), (C.height = E), (g.imageSmoothingEnabled = !1));
  let I = Math.min(1.12,430/(Math.max(...ISLANDS.map(i=>i.z))||1)),
    Q = (Y) => (B-560*I)/2 + Y * I,
    M = (Y) => 90 + Y * I;
  ((g.fillStyle = "#104864"), g.fillRect(0, 0, B, E));
  for (let Y = 0; Y < E; Y += 14)
    for (let w = 0; w < B; w += 14)
      ((w / 14) * 7 + (Y / 14) * 11) % 19 < 3 &&
        ((g.fillStyle = "#22687e"), g.fillRect(w, Y, 8, 2));
  ((g.strokeStyle = "#7eb2ba80"),
    (g.lineWidth = 2),
    g.setLineDash([4, 6]),
    g.beginPath(),
    ISLANDS.forEach((Y, w) =>
      w ? g.lineTo(Q(Y.x), M(Y.z - 54)) : g.moveTo(Q(Y.x), M(Y.z - 54)),
    ),
    g.stroke(),
    g.setLineDash([]));
  for (let Y of ISLANDS) {
    let w = Q(Y.x),
      G = M(Y.z);
    for (let [J, s] of [
      [0, "#f6d79a"],
      [5, "#" + Y.color.toString(16).padStart(6, "0")],
    ])
      (g.beginPath(),
        islandOutline(Y, 40, J).forEach((e, S) =>
          S
            ? g.lineTo(
                Math.round((w + e.x * I) / 3) * 3,
                Math.round((G + e.z * I) / 3) * 3,
              )
            : g.moveTo(
                Math.round((w + e.x * I) / 3) * 3,
                Math.round((G + e.z * I) / 3) * 3,
              ),
        ),
        g.closePath(),
        (g.fillStyle = s),
        g.fill());
    ((g.font = "bold 13px monospace"),
      (g.textAlign = "center"),
      (g.fillStyle = "#fff2c4"),
      (g.strokeStyle = "#18354a"),
      (g.lineWidth = 3));
    let h = Y.id + 1 + ". " + Y.name.split(" ").at(-1);
    (g.strokeText(h, w, G + 73),
      g.fillText(h, w, G + 73),
      g.drawImage(
        iconCanvas(A.unlocked(Y.id) ? "boat" : "lock"),
        w - 12,
        M(Y.z - 54) - 12,
        24,
        24,
      ));
  }
  for (let Y of SEA_MINES) g.drawImage(iconCanvas("bomb"), Q(Y.x) - 8, M(Y.z) - 8, 16, 16);
  for (let Y of RARE_FRUITS) {
    let w = rarePosition(Y.id),
      G = Q(w.x),
      h = M(w.z);
    A.save.owned.includes(Y.id)
      ? g.drawImage(iconCanvas("check"), G - 10, h - 10, 20, 20)
      : ((g.font = "bold 23px monospace"),
        (g.textAlign = "center"),
        (g.strokeStyle = "#35264a"),
        (g.lineWidth = 4),
        g.strokeText("\xD7", G, h + 8),
        (g.fillStyle = A.treasureTarget === Y.id ? "#fff38f" : "#f7abeb"),
        g.fillText("\xD7", G, h + 8));
  }
  if (A.treasureTarget) {
    let Y = rarePosition(A.treasureTarget);
    ((g.strokeStyle = "#ffe8a0"),
      g.setLineDash([5, 5]),
      g.beginPath(),
      g.moveTo(Q(A.player.x), M(A.player.z)),
      g.lineTo(Q(Y.x), M(Y.z)),
      g.stroke(),
      g.setLineDash([]));
  }
  ((g.fillStyle = "#fffefa"),
    g.beginPath(),
    g.arc(Q(A.player.x), M(A.player.z), 5, 0, 7),
    g.fill(),
    (g.strokeStyle = "#173149"),
    (g.lineWidth = 2),
    g.stroke(),
    (g.font = "bold 15px monospace"),
    (g.textAlign = "left"),
    (g.fillStyle = "#fff3cf"),
    g.fillText("N \u2191", 15, 24));
}

export {createFruitHUD,drawTreasureMap};
