# Pix Asaas no caixa do Integro

Base anterior: `7828332b3a6959e1b2ac05e8f7850d1b8ac4920c`.
Cópia remota: `backup/caixa-antes-asaas-20261027`.
O ponto anterior a qualquer integração continua em `backup/caixa-antes-infinitepay-20261027`.

## Conexão e uso

No caixa, em **Pix no caixa · Asaas**, a direção conecta uma chave de API de Produção de conta aprovada e um e-mail para avisos técnicos. O servidor consulta a situação e o titular da conta, configura um webhook autenticado e guarda a chave no Supabase Vault. A chave não é retornada, registrada em logs nem persistida no navegador. Usuários de coordenação podem emitir cobranças, mas não conectar ou trocar chaves.

A primeira conexão fica desativada. O titular confere o recebedor exibido e clica **Ativar Pix nesta conta**. É recomendável cadastrar uma chave Pix no Asaas. As tarifas e os recebimentos pertencem à conta Asaas. Atualizar uma chave só é permitido para a mesma conta, para preservar a conciliação das cobranças anteriores.

Com o carrinho montado, **Gerar Pix do carrinho** cria a cobrança e mostra o QR Code do Asaas, o Copia e Cola e uma cobrança imprimível. O PDF é uma cobrança Pix, não um boleto bancário com linha digitável. Cartão não é processado pelo novo módulo; o fluxo InfinitePay existente continua disponível.

Nome e CPF/CNPJ são obtidos do pagador no caixa. A integração não envia notificações aos clientes. Ela cria clientes com notificações desativadas e reutiliza somente os cadastros que ela própria criou com essa configuração. A confirmação vem do webhook, com consulta independente da cobrança por API; a consulta no painel também pode recuperar pagamentos. Só `RECEIVED`, com identificador, valor, método Pix e pagador corretos, lança o caixa. A data da entrada é a data de pagamento informada pelo Asaas, e as tarifas não são abatidas silenciosamente da receita bruta.

Criações não são repetidas após falha de rede. O pedido mantém o identificador e pode ser recuperado pelo `externalReference` usando **Conferir pagamento**. Um Pix que não gerou resposta nunca deve ser lançado manualmente sem conferir a conta. Cobranças pendentes não contam como receitas. Fechamento de ciclo e validações anteriores continuam aplicados; pagamentos sem baixa ficam visíveis para conciliação e são tentados novamente a cada cinco minutos. Estornos e divergências são sinalizados para a direção, preservando os recibos originais.

## Reversão

1. Desativar novas cobranças pelo botão do painel, ou atualizar somente `private.finance_asaas_settings.enabled=false` para a escola `instituto-integro`.
2. Reverter o commit deste módulo com `git revert`, sem sobrescrever alterações posteriores. Para retornar à experiência anterior a todas as integrações, reverter também o commit InfinitePay conforme `finance-infinitepay-rollback.md`.
3. Preservar pedidos, recibos, Vault e a função de webhook enquanto houver cobranças pendentes ou recebimentos a conciliar. Desativar não cancela cobranças nem estorna pagamentos.
4. Não forçar restauração da branch antiga e não apagar dados financeiros para desfazer a interface.

## Validação e limites

Testes locais com HTTP simulado, DOM e PostgreSQL embutido verificam autorização, isolamento de unidades, não exposição de chaves, ativação explícita, Pix na própria tela, recuperação sem duplicar cobrança, validação do pagamento e preservação dos recibos. O Vault em testes é um substituto em memória; em produção é a extensão criptografada instalada. Nenhuma cobrança real é emitida durante os testes.

A confirmação ponta a ponta depende da chave conectada pelo titular e de um pagamento real autorizado. A configuração da conta e o webhook devem ser revisados no Asaas se houver expiração de chave, restrição de conta ou fila de webhooks interrompida. A integração inicial não faz transferências, estornos ou cobranças em cartão.

## Diagnóstico de geração

Uma recusa HTTP explícita do Asaas fica como `rejected`, com mensagem local segura em `creation_error`. Quando o provedor informa um valor mínimo no erro `invalid_value`, somente esse número é apresentado. O sistema nunca aumenta o valor do carrinho para atender um limite. Respostas brutas, chaves e documentos não entram nas mensagens.

Falhas de rede após o envio permanecem `uncertain`; o mesmo pedido não é reenviado. Conferir pagamento pesquisa o identificador externo e informa quando uma consulta válida não encontra a cobrança. Isso não altera o valor, não efetua nova emissão e não lança receita. A tentativa inicial anterior à correção não tinha o erro do provedor armazenado, portanto seu motivo não pode ser reconstruído pelo histórico local.
