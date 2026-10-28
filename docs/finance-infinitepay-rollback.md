# Integro: InfinitePay no caixa — 27/10/2026

Ponto anterior: `dfe7c28c50270345fecdde7c75e0f430f0604506`.
Cópia remota: `backup/caixa-antes-infinitepay-20261027`.
Conta recebedora preservada: `instituto-integro` (já usada por intgem-pay).

## Uso

Monte o carrinho e selecione **Gerar cobrança do carrinho**. O pagamento acontece no checkout da InfinitePay; o link pode ser copiado ou impresso. O PDF de cobrança contém link, não QR Pix: a API pública não fornece payload Pix. A integração não promete QR Pix dentro do Integro.

A cobrança pendente não cria entrada. O webhook é apenas um aviso: o servidor consulta `/payment_check`, confere valor, meio e identificadores, então registra os itens numa transação. O total lançado é o valor bruto da venda, não a liquidação líquida da operadora. Recibos ficam em **Entradas**. Taxas, estornos e pagamentos adicionais do mesmo link exigem conciliação; nunca são transformados silenciosamente em outra venda.

A integração usa a API pública por InfiniteTag, como o módulo existente de IntGem, sem exigir nem expor uma API Key. Opções avançadas de expiração/uso único não são assumidas disponíveis. Não reutilize links pagos.

Se a criação falhar após o envio à operadora, a tentativa fica registrada como geração incerta. Confira na operadora antes de iniciar outra cobrança. Repetir o mesmo pedido não cria outro link. O painel atualiza a cada 15 segundos enquanto visível. Não registre manualmente uma cobrança que já foi paga automaticamente.

Se o ciclo estiver fechado ou a mensalidade já tiver recibo, o pagamento confirmado é preservado como **Pago — conciliação pendente**, sem forçar o caixa. Uma rotina tenta a baixa a cada cinco minutos; a regra de fechamento existente é mantida.

## Reversão quando o usuário disser “reverta”

1. Desativar novas cobranças em **Desativar integração e usar caixa manual**, ou executar:
   `update private.finance_ip_settings set enabled=false,updated_at=now() where school_id=(select id from public.schools where slug='instituto-integro');`
2. Reverter apenas o commit que adicionou esta integração com `git revert`, preservando modificações posteriores. A branch de backup identifica o ponto anterior. Os arquivos antigos alterados são `portal/financeiro.html`, `portal/financeiro-frente-caixa.js`, `portal/financeiro-frente-caixa-v3.js` e `portal/financeiro-diretor.js`.
3. Manter tabelas, recibos e o endpoint `finance-infinitepay/webhook`: cobranças já enviadas ainda podem ser pagas. Não apagar transações nem restaurar um backup de dados financeiros para desfazer uma interface.
4. Verificar publicação do caixa e ausência do novo painel. A cópia anterior inteira não deve ser forçada sobre main, pois isso apagaria alterações não relacionadas.

Desativar não cancela cobranças emitidas, não estorna dinheiro e não desfaz vendas pagas. A reversão restaura a experiência manual anterior preservando os fatos financeiros.

## Validação

Testes locais com PostgreSQL embutido e DOM verificam acesso, flag de desativação, idempotência, conferência do valor, transação atômica, ciclo fechado, isolamento de unidades e preservação de recibos. Nenhum pagamento real é feito pelos testes. A confirmação ponta a ponta ainda requer uma venda real paga pelo cliente.

## Cobrança sem preenchimento prévio do comprador — 27/10/2026

Por solicitação do Instituto Integro, novas cobranças criadas por `finance-infinitepay` omitem completamente `customer` e `address` na requisição à InfinitePay. São enviados os itens (descrição e valor), a conta recebedora, o identificador do pedido, o webhook e a URL de retorno. Os dados do aluno/pagador continuam no pedido interno e nos recibos. Descrições digitadas nos itens ainda são enviadas como parte da cobrança.

Essa opção retira o preenchimento prévio dos dados; não garante que o checkout da InfinitePay dispense identificação, WhatsApp ou outras verificações. Links já emitidos mantêm os dados usados na criação. A alteração é no servidor, sem mudar Asaas nem a navegação do caixa.

Para reverter somente essa opção, restaure `supabase/functions/finance-infinitepay/contract.mjs` da revisão `0edfa6d555b9ca34faba60d341cfec4f219b0567` e publique novamente a função `finance-infinitepay` com seu `index.ts`, preservando `verify_jwt=false` e a autenticação interna existente. Atualize o teste de payload para corresponder ao comportamento restaurado. Não reverta o caixa por etapas nem exclua pedidos ou lançamentos financeiros.
