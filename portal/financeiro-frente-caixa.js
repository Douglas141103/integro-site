(function () {
  if (document.getElementById("financeiroFrenteCaixaV3Loader")) return;
  const script = document.createElement("script");
  script.id = "financeiroFrenteCaixaV3Loader";
  script.src = "./financeiro-frente-caixa-v3.js?v=20260903-cycle-guard-v1";
  script.defer = true;
  document.body.appendChild(script);
})();
