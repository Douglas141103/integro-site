# Frente de caixa por etapas

A interface de venda abre em uma tela dedicada a partir de **Frente de caixa**. As etapas são cliente/pagador, itens e pagamento. O carrinho permanece visível em Itens, com total em reais calculado em centavos. Pagamentos disponíveis: InfinitePay com checkout/verificação, Asaas com QR Pix, dinheiro e cartão/Pix externo.

O botão de recibo só é liberado depois do lançamento confirmado em `finance_entries`. Para integrações, o pedido também precisa estar pago, com `posted_at` e sem pendência de conciliação. A impressão não marca uma cobrança como paga. Pagamentos manuais exigem confirmação do operador. Cada item manual tem `pos_sale_id` + `pos_item_index`, com unicidade no banco, para repetir a mesma requisição após falha sem duplicar a receita.

Cada cobrança Pix Asaas paga gera uma saída fixa de **R$ 0,99**, conforme configuração solicitada pelo Instituto Integro. É um valor de escrituração definido pelo usuário, não uma consulta da tarifa vigente do contrato. A entrada mantém o valor bruto. Entrada e tarifa são gravadas na mesma transação; falha na tarifa deixa a baixa pendente para o mecanismo de reconciliação existente. Um índice único impede duas tarifas do mesmo pedido. Recibos e tarifas vinculados são protegidos contra edição/exclusão.

A migração também concilia cobranças Asaas já pagas e lançadas no ciclo atual aberto do Instituto Integro, sem alterar os recibos. Ciclos encerrados, outras escolas e cobranças pendentes não são alterados. Se a tarifa contratual mudar, a configuração fixa de escrituração deverá ser atualizada por migração.

## Reversão

Base anterior: `276e390b6afe6650e4626c3d91e99c3433054a5d`.
Backup: `backup/caixa-antes-etapas-20261027`.

1. Reverta apenas o commit da frente de caixa por etapas, preservando alterações posteriores. Publique as versões anteriores dos arquivos da interface e atualize os parâmetros de cache se necessário.
2. Para interromper a criação de novas tarifas automáticas, restaure somente a definição de `private.finance_asaas_post(uuid)` da migração `20261027231540_finance_asaas_pix.sql`, por uma nova migração. Não reaplique a migração antiga inteira.
3. Preserve entradas, saídas, pedidos pagos/pendentes e os identificadores únicos de vendas já registradas. Não exclua despesas históricas para desfazer a interface. Os webhooks continuam acompanhando cobranças emitidas.

A alteração não usa nem instala a chave InfinitePay enviada na conversa; continua usando a integração existente e seu fluxo de verificação.
