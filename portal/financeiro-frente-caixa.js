(function () {
  if (document.getElementById('financeiroFrenteCaixaV2Loader')) return;
  const script = document.createElement('script');
  script.id = 'financeiroFrenteCaixaV2Loader';
  script.src = './financeiro-frente-caixa-v2.js?v=20260629-pdv-carrinho-v2';
  script.defer = true;
  document.body.appendChild(script);
})();
