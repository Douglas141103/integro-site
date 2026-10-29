# Compras IntGem pelo Asaas

As novas compras usam Checkout Asaas com Pix ou cartão à vista (`DETACHED`), na conta já conectada ao Instituto Integro. A chave permanece no Supabase Vault; `intgem-pay` a obtém pelo serviço financeiro restrito a `service_role`.

- 10 IntGem: R$ 6,99.
- 20 IntGem: R$ 10,99; a campanha existente entrega 100 IntGem até seu prazo original. A quantidade fica gravada na criação do pedido.
- 1 e 5 IntGem permanecem com os preços originais, mas indisponíveis porque o Asaas rejeita cobranças abaixo de R$ 5,00. O servidor também impede a criação.

O webhook `58d0d321-9870-49be-be35-0b17f79a98aa` aponta para `/functions/v1/intgem-pay/asaas-webhook`, com eventos de criação, pagamento, cancelamento e expiração de checkout, mais `PAYMENT_CONFIRMED` e `PAYMENT_RECEIVED`. Valida token e conta; busca a cobrança pela sessão do checkout na API antes de creditar. Retorno do navegador não é prova de pagamento. Pix requer `RECEIVED`; cartão aceita `CONFIRMED` ou `RECEIVED`. Valores, referências e método são conferidos. Cobranças estornadas, excluídas ou recebidas em dinheiro não liberam gemas.

Pedidos históricos mantêm o provedor InfinitePay e podem ser confirmados pelo endpoint anterior. A transação e o lançamento da carteira continuam únicos. Novas receitas identificam Asaas e mantêm o valor bruto para conciliação de taxas.

O checkout expira em 60 minutos. Repetir a mesma tentativa reutiliza o pedido. Uma resposta incerta não repete o POST; `CHECKOUT_CREATED` pode recuperar o vínculo usando o callback autenticado. Só uma rejeição definitiva permite nova tentativa no mesmo pedido. Após expiração, o comprador pode iniciar outro pedido. Confirmações tardias honram a quantidade original.

## Verificação e operação

`node --test tests/intgem-asaas.test.mjs tests/intgem-ui.test.mjs tests/intgem-promotion.test.mjs tests/intgem-finance.test.mjs`

A validação em produção cria e cancela checkouts sem efetuar pagamentos. Os testes locais exercitam crédito, repetição, divergência, expiração e receita financeira. Não há teste de pagamento real com cartão ou Pix.

Se necessário suspender novas compras, bloqueie somente a ação `create` em `intgem-pay`, preservando verificações e webhooks para pagamentos em andamento. Não reverta colunas, saldos, pedidos, nem o provedor dos pedidos existentes. Não desabilite a conexão financeira compartilhada. Ao reconectar a conta financeira, mantenha o token de webhook existente ou atualize também este webhook.
