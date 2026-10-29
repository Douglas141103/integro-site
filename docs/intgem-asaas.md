# IntGem: Pix dentro da carteira

A compra mostra **QR Code**, **Pix copia e cola** e **Copiar Pix** no próprio Integro. Não redireciona o comprador nem pede nome, CPF, telefone ou endereço. A conta Asaas já conectada recebe os valores; chave de API e token de webhook continuam no Supabase Vault.

## Valores e promoção

Todos os pacotes ficam disponíveis: 1 IntGem por R$ 1,00; 5 por R$ 2,99; 10 por R$ 6,99; 20 por R$ 10,99. O mínimo de R$ 5,00 se aplicava ao checkout anterior; a geração de QR estático do Asaas foi verificada nos valores menores. A campanha existente entrega 100 IntGem pelo preço de 20 durante o prazo original. A quantidade fica gravada na criação do pedido.

## Pagamento e confirmação

`POST /v3/pix/qrCodes/static` usa uma chave ACTIVE da própria conta, valor exato, `allowsMultiplePayments:false`, expiração de 1.800 segundos e `externalReference=intgem:<pedido>`. Prefere chave aleatória, sem cadastrar outra chave. A API devolve imagem PNG, payload e ID próprio do QR. Esses dados ficam no pedido privado e só chegam ao comprador após validar a sessão e a propriedade. Não se cria cliente fictício: o Asaas cria cliente/cobrança quando recebe o Pix.

O webhook existente `58d0d321-9870-49be-be35-0b17f79a98aa` permanece ativo em `/functions/v1/intgem-pay/asaas-webhook`. `PAYMENT_RECEIVED` identifica o pedido pelo `pixQrCodeId`. O servidor valida token e conta, consulta `/payments?pixQrCodeId=<id>`, confere ID, valor, método PIX e status RECEIVED antes de creditar. Não aceita pagamentos excluídos, estornados ou em dinheiro. ID da transação e lançamento na carteira são únicos. Confirmar duas vezes não duplica gemas nem receita.

A tela atualiza o saldo pela carteira, sem consultar continuamente o Asaas. **Já paguei · verificar** permite conciliar pontualmente. O Pix pendente é recuperado ao recarregar a página e pelo extrato. Copiar o código não credita saldo. Ao expirar, a tela retira o QR e oferece gerar outro. Confirmações tardias continuam honrando a quantidade originalmente prometida.

Pedidos anteriores preservam `payment_flow=checkout`: checkouts Asaas e InfinitePay já emitidos continuam verificáveis. Novos pedidos usam `payment_flow=pix`. Não troque o identificador de um pedido com QR já emitido. Uma resposta incerta não repete automaticamente o POST; após expiração o comprador pode iniciar outro pedido. Uma rejeição definitiva permite nova tentativa.

## Verificação

`node --test tests/intgem-pix.test.mjs tests/intgem-asaas.test.mjs tests/intgem-ui.test.mjs tests/intgem-promotion.test.mjs tests/intgem-finance.test.mjs`

Testes cobrem propriedade, webhook falso, divergência de valor/QR, status pendente, expiração, promoção, saldo e receita sem duplicidade, recuperação e cópia na interface. Um QR real foi gerado e removido sem pagamento; leitura independente com jsQR confirmou que a imagem corresponde exatamente ao payload. A interface foi conferida em 390 px. Não se simulou um Pix como recebido em produção, nem se efetuou pagamento real.

## Suspensão ou reversão

Para suspender novas emissões, bloqueie somente `create` em `intgem-pay`, mantendo verificações e webhook para pagamentos existentes. Não remova pedidos, saldos ou receitas, nem reverta o provedor/fluxo de pedidos já emitidos. Não desative a conexão financeira compartilhada. Ao trocar o token de webhook na conexão financeira, atualize também este webhook.
