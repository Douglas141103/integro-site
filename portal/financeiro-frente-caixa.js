(function () {
  if (document.getElementById("financeiroFrenteCaixaV3Loader")) return;
  const script = document.createElement("script");
  script.id = "financeiroFrenteCaixaV3Loader";
  script.src = "./financeiro-frente-caixa-v3.js?v=20261028-pix-direct1";
  script.defer = true;
  document.body.appendChild(script);
})();
