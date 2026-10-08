(() => {
  'use strict';
  const section = document.getElementById('resultados-2026');
  if (!section) return;
  const groups = {
    ef1: { title: 'Ensino Fundamental I', description: 'Melhora informada em leitura e escrita e em Matemática, em relação à avaliação de entrada.' },
    ef2: { title: 'Ensino Fundamental II', description: 'Percentuais de melhora informados em relação à avaliação de entrada, por disciplina.' },
    em: { title: 'Ensino Médio', description: 'Percentuais de melhora informados em relação à avaliação de entrada, por disciplina.' },
    frequencia: { title: 'Frequência escolar por etapa', description: 'Percentuais de frequência informados pelo Instituto; não representam indicadores de aprendizagem.' }
  };
  // A tabela HTML é a única fonte dos valores, inclusive quando JavaScript está desativado.
  const rows = [...section.querySelectorAll('tr[data-stage]')].map(row => ({
    stage: row.dataset.stage,
    label: row.cells[row.dataset.stage === 'frequencia' ? 0 : 1].textContent.trim(),
    value: Number(row.cells[2].textContent.replace('%', '').trim())
  }));
  if (rows.some(row => !Number.isFinite(row.value) || row.value < 0 || row.value > 100)) return;
  let selected = 'ef1';
  const buttons = [...section.querySelectorAll('[data-results-view]')];
  const order = section.querySelector('#results-order');
  const bars = section.querySelector('#results-bars');
  const detail = section.querySelector('#results-detail');
  function render(announce = false) {
    const group = groups[selected];
    section.querySelector('#results-chart-title').textContent = group.title;
    section.querySelector('#results-chart-description').textContent = group.description;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.resultsView === selected)));
    const values = rows.filter(row => row.stage === selected);
    if (order.value === 'descending') values.sort((a, b) => b.value - a.value);
    bars.replaceChildren();
    for (const row of values) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'results-bar';
      button.setAttribute('aria-pressed', 'false');
      button.setAttribute('aria-label', `${row.label}: ${row.value}%. Ver detalhe`);
      const label = document.createElement('span');
      label.className = 'results-bar-label';
      label.textContent = row.label;
      const track = document.createElement('span');
      track.className = 'results-bar-track';
      track.setAttribute('aria-hidden', 'true');
      const fill = document.createElement('span');
      fill.className = 'results-bar-fill';
      fill.style.setProperty('--result-value', `${row.value}%`);
      track.append(fill);
      const value = document.createElement('strong');
      value.textContent = `${row.value}%`;
      value.setAttribute('aria-hidden', 'true');
      button.append(label, track, value);
      button.addEventListener('click', () => {
        bars.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
        const metric = selected === 'frequencia' ? 'frequência escolar informada' : 'melhora informada em relação à avaliação de entrada';
        detail.textContent = `${group.title} · ${row.label}: ${row.value}% de ${metric}. Fonte: gestão do Instituto Integro, 07/10/2026.`;
      });
      bars.append(button);
    }
    detail.textContent = `${announce ? group.title + '. ' : ''}Selecione uma barra para ver o detalhe do indicador.`;
  }
  buttons.forEach(button => button.addEventListener('click', () => { selected = button.dataset.resultsView; render(true); }));
  order.addEventListener('change', () => render(true));
  render();
  section.querySelector('.results-filters').hidden = false;
  section.querySelector('#results-interactive').hidden = false;
  section.querySelector('.results-data').open = false;
})();
