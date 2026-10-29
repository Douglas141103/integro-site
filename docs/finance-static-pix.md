# Pix direto no caixa

As vendas novas do caixa usam QR Code estático do Asaas, exclusivo por pedido, valor exato, uso único e validade de 30 minutos. Aceitam totais a partir de R$ 1,00. QR e copia e cola aparecem no caixa. O cadastro do beneficiário e pagador continua pertencendo ao recibo interno; o fluxo novo não cria cliente nem abre checkout externo no Asaas.

`finance-asaas` autentica o operador e autoriza a unidade antes de reservar a venda. A reserva fixa os itens, descontos e valor e impede uma segunda criação para o mesmo request_id. A imagem, payload, ID e validade do QR ficam no pedido privado. O endpoint público só devolve códigos de pedidos da unidade autorizada.

O webhook financeiro existente autentica o token e a conta, localiza o pedido pelo `pixQrCodeId` e consulta `/payments?pixQrCodeId=...` usando a credencial protegida no servidor. Identificador, valor bruto, método Pix, data e estado `RECEIVED` precisam corresponder. A confirmação é independente da página aberta. Eventos repetidos não duplicam recibos; estornos são sinalizados para conciliação sem apagar a receita original. Falhas temporárias devolvem erro retriável ao webhook.

Cobranças antigas continuam no fluxo `dynamic`. O servidor novo pede explicitamente `static_pix`; o default do banco permanece `dynamic` para compatibilidade durante a publicação. Respostas perdidas não repetem o POST automaticamente. Pedidos sem recebimento podem expirar após a validade mais um minuto de tolerância, ou 32 minutos se não houve resposta de criação. Recebimento verificado posteriormente continua sendo conciliado. Ciclo fechado mantém a baixa pendente até uma conciliação válida.

## Tarifa em Saídas

O lançamento fixo de R$ 0,99 foi desativado. A receita mantém o valor integral da venda. A migração remove somente despesas automáticas de R$ 0,99 do Instituto em ciclos atualmente abertos, guardando o registro integral em `private.finance_asaas_orders.removed_fee`. Não modifica recibos ou despesas manuais. Isso não altera o contrato nem as tarifas cobradas pelo Asaas.

## Verificação e reversão

Testes: `node --test tests/finance-static-pix.test.mjs tests/finance-asaas.test.mjs tests/finance-asaas-ui.test.mjs tests/finance-pos-steps.test.mjs tests/intgem-pix.test.mjs`.

As verificações antigas de tarifa nos testes históricos validam a migração anterior; os testes novos validam sua remoção, a preservação do recibo e a ausência de novas saídas. O teste real de geração de R$ 1,00 usa um QR temporário que é excluído sem receber pagamento.

Para interromper emissões novas, desative novas cobranças nas configurações Asaas do caixa. Preserve o webhook e a função atual enquanto houver QR válido ou pagamentos pendentes. Não reverta o schema nem publique uma função que desconheça `static_pix`: pagamentos antigos ainda precisam ser reconhecidos. A restauração de uma despesa arquivada deve ser uma conciliação explícita, não um backfill automático.
