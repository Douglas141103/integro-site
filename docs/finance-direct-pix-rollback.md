# Pix direto no caixa

Nova opção **Pix direto · InfinitePay**, independente do Checkout InfinitePay e do Asaas. A direção cadastra uma chave Pix real da conta (CPF, CNPJ inclusive alfanumérico, telefone internacional, e-mail ou chave aleatória), nome do recebedor e cidade. Não preencher automaticamente com CNPJ, e-mail ou chave de API: esses dados não provam qual chave está cadastrada na instituição. A geração não consulta o DICT e não atesta a titularidade ou a instituição da chave; o cadastro deve corresponder à conta InfinitePay.

A configuração fica em `private.finance_direct_pix_settings`, sem acesso direto de anon/authenticated. A RPC autenticada valida perfil ativo, função e escola; coordenadores podem ler, direção/admin podem configurar. Não há API Keys nem credenciais bancárias nesses dados.

O BR Code estático é gerado no navegador com a chave, valor exato em centavos, moeda BRL e referência alfanumérica de 25 caracteres derivada de um UUID por venda. A imagem usa `qrcode-generator@1.4.4` vendorizado e o CRC segue o padrão BCB. Código, imagem e dados do cliente não são enviados a serviços de QR ou ao Checkout. O cliente abre o próprio banco para pagar. Copiar ou baixar a imagem não efetua nenhuma baixa.

O QR não tem cancelamento nem vencimento bancário. Uma cópia enviada continua pagável mesmo depois de limpar o carrinho; a interface explica isso antes de descartar. Enquanto há QR aberto, os itens, configuração e métodos alternativos ficam bloqueados. A tela avisa antes de recarregar/fechar a página com Pix pendente. O rascunho permanece na memória da aba; mantenha a venda aberta até conferir o recebimento. Não existe consulta automática de Pix direto nesta implementação.

A baixa reutiliza o lançamento manual idempotente do caixa: confirmação explícita do operador após verificar no app, ciclo atual aberto, uma entrada por item com `pos_sale_id` + `pos_item_index`, conferência das linhas gravadas antes de liberar recibo. A descrição conserva a referência e identifica a conferência manual. Não há saída de R$ 0,99 para Pix direto; a regra Asaas não muda. Não houve emissão de cobrança real nem baixa financeira nos testes de implementação.

## Validação

Testes com dados fictícios verificam: CRC de exemplo oficial BCB, formato e valores, leitura independente com jsQR, cadastro autorizado e isolamento entre escolas no PostgreSQL/PGlite, configuração ausente/desativada/indisponível, proteção do carrinho, ausência de baixa ao gerar/copiar, bloqueio no ciclo fechado, confirmação manual, resposta perdida sem duplicidade e limpeza do QR na próxima venda. Os testes de regressão financeiros incluem Asaas e Checkout InfinitePay. A leitura pelo banco recebedor exige uma chave real cadastrada pela direção e não foi simulada como pagamento confirmado.

## Reversão

Estado anterior: commit `9697b399c5b3d6c1b4a3de4ca0157023ffab5fc7`.

Para desativar apenas a nova opção, desmarque **Ativar Pix direto no caixa** e salve antes de gerar outro código. Isso não invalida códigos já enviados. Para voltar exatamente à interface anterior, reverta o commit desta funcionalidade pelo Git e publique, preservando quaisquer mudanças posteriores. A tabela/RPC de configuração pode permanecer sem uso; não apague entradas, recibos ou dados financeiros. Os recebimentos manuais já confirmados são reais e não devem ser removidos durante uma reversão de interface.

## Revisão de acesso após publicação

Verificado no banco: RLS ativo, nenhuma leitura direta para authenticated, execução anônima negada e RPC disponível à direção ativa da escola. Os avisos do advisor [RLS sem políticas](https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy) e [função privilegiada autenticada](https://supabase.com/docs/guides/database/database-linter?lint=0028_authenticated_security_definer_function_executable) são intencionais neste caso: a tabela privada é inacessível diretamente e a RPC aplica autorização por usuário, perfil ativo, escola e função antes de qualquer leitura ou gravação. As negações foram exercitadas em PostgreSQL/PGlite; a leitura da configuração pela direção foi verificada em produção, ainda sem chave cadastrada.
