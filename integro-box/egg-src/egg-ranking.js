// Read-only standings: the server decides the order and returns no account IDs.
export function mountEggRanking(host, load) {
  const doc = host.ownerDocument;
  const text = (tag, value, cls) => {
    const el = doc.createElement(tag); el.textContent = value;
    if (cls) el.className = cls;
    return el;
  };
  host.replaceChildren();
  host.className = 'egg-ranking';
  host.append(text('p', 'Mais Integros primeiro. Em caso de empate, vence quem tem mais IntGem. Empate nos dois saldos mantém a mesma colocação.', 'egg-ranking-rules'));
  const toolbar = text('div', '', 'egg-ranking-toolbar');
  const update = text('button', 'Atualizar ranking', 'egg-secondary'); update.type = 'button';
  const summary = text('span', ''); toolbar.append(summary, update); host.append(toolbar);
  const status = text('p', '', 'egg-ranking-status'); status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite');
  const content = text('div', ''); host.append(status, content);
  let busy = false;
  const number = n => Number(n).toLocaleString('pt-BR');
  async function refresh() {
    if (busy) return;
    busy = true; update.disabled = true; host.setAttribute('aria-busy', 'true');
    status.textContent = 'Atualizando os saldos do ranking…';
    try {
      if (!load) throw new Error('Conecte seu perfil no Integro Box para ver o ranking.');
      const data = await load();
      if (!host.isConnected) return;
      content.replaceChildren();
      summary.textContent = `${number(data.total)} ${data.total === 1 ? 'jogador' : 'jogadores'}${data.total > 100 ? ' · Top 100' : ''}`;
      if (!data.rows.length) {
        content.append(text('p', 'O ranking começa com o primeiro progresso salvo. Jogue e atualize para participar.', 'egg-empty'));
      } else {
        if (data.mine) {
          const mine = text('div', '', 'egg-ranking-mine');
          mine.append(text('strong', `Sua posição: ${number(data.mine.position)}º`),
            text('span', `${number(data.mine.integros)} Integros · ${number(data.mine.intgem)} IntGem`));
          content.append(mine);
        } else content.append(text('p', 'Salve seu progresso no perfil para entrar no ranking.', 'egg-muted'));
        const scroll = text('div', '', 'egg-ranking-scroll');
        const table = text('table', '', 'egg-ranking-table');
        const caption = text('caption', 'Classificação do Pegue o Ovo'); table.append(caption);
        const head = doc.createElement('thead'), header = doc.createElement('tr');
        for (const label of ['Posição', 'Jogador', 'Integros', 'IntGem']) {
          const th = text('th', label); th.scope = 'col'; header.append(th);
        }
        head.append(header); table.append(head);
        const body = doc.createElement('tbody');
        for (const row of data.rows) {
          const tr = doc.createElement('tr');
          if (row.mine) tr.className = 'is-me';
          const position = text('td', `${number(row.position)}º`, row.position <= 3 ? 'egg-ranking-medal' : '');
          const player = text('td', row.name);
          if (row.mine) player.append(text('span', 'Você', 'egg-ranking-you'));
          tr.append(position, player, text('td', number(row.integros), 'egg-ranking-coins'), text('td', number(row.intgem), 'egg-ranking-gems'));
          body.append(tr);
        }
        table.append(body); scroll.append(table); content.append(scroll);
      }
      const time = new Date(data.updated_at).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      status.textContent = data.synced === false
        ? 'Exibindo os últimos saldos salvos. Seu progresso local ainda aguarda sincronização.'
        : `Atualizado às ${time}. Classificação pelos saldos atuais salvos no perfil.`;
    } catch (error) {
      if (host.isConnected) status.textContent = `${error.message || 'Não foi possível carregar o ranking.'} Toque em Atualizar ranking para tentar novamente.`;
    } finally { busy = false; update.disabled = false; host.removeAttribute('aria-busy'); }
  }
  update.onclick = refresh;
  void refresh();
}
