# Análise gerencial por IA — pesquisa de satisfação

Esta integração acrescenta uma análise narrativa opcional ao painel e ao relatório em PDF, com atualização do aviso de privacidade e do envio do formulário público, sem expor a chave da OpenAI no navegador.

## Arquitetura

1. O painel autenticado chama a Edge Function `analyze-school-satisfaction` enviando `survey_slug` e os filtros atuais de ano/turno.
2. A Edge Function valida o JWT com `auth.getUser`.
3. A RPC `get_school_satisfaction_ai_payload` volta a verificar o papel e a escola com `private.assert_school_satisfaction_manager`.
   Ela também falha de modo fechado se a edição não estiver com o aviso de privacidade `2026-08-07-ia1`; conhecer outro slug não habilita IA para outra pesquisa.
4. O banco calcula os números. O cliente não fornece métricas à IA.
5. A RPC materializa e bloqueia o conjunto de respostas do recorte, aplica os filtros a todas as métricas e devolve somente indicadores quantitativos agregados. Células de segmentos com menos de cinco respostas são suprimidas.
6. A RPC não consulta nem devolve nome, telefone ou comentário. Também não inclui nome/título da escola nem texto livre de perguntas. A Edge Function reaplica uma lista de campos proibidos e mascara células numéricas de 1 a 4 como defesa adicional.
7. A Edge Function chama `POST /v1/responses` com `store: false` e Structured Outputs em JSON Schema estrito. Ela aceita somente resposta com estado `completed`, recusa saídas incompletas/recusadas, aplica limites de tamanho e bloqueia padrões de dados pessoais ou ordens disciplinares dirigidas a indivíduos.
8. A narrativa volta ao painel e pode ser inserida no PDF. Ela não é salva no banco e é sempre apresentada como sugestão; os KPIs calculados localmente permanecem a fonte dos números.

O modelo só é chamado quando o recorte atual contém pelo menos cinco participações. Ele recebe estatísticas agregadas por área e pergunta, prioridades e participação por dia. Nenhum comentário, nome, telefone, identificação da escola, UUID, permissão de contato ou JWT é enviado. Os comentários brutos continuam disponíveis somente no painel protegido da gestão autorizada.

## Ativação

Publique primeiro a versão do formulário que contém o aviso de tratamento por IA e confirme que o
novo texto aparece no site. Só depois execute a migração abaixo. Essa ordem evita classificar uma
resposta como coberta pelo novo aviso enquanto um navegador ainda exibe a versão anterior do formulário.

Execute, depois da migração principal da pesquisa:

```text
supabase/migrations/20260807130000_pesquisa_satisfacao_analise_ia.sql
```

Configure os segredos no projeto Supabase. Nunca coloque a chave em `portal/config.js`, HTML, JavaScript público, GitHub ou SQL:

```bash
supabase login
supabase link --project-ref kvdfnmwuxmpalsyuytwt
supabase secrets set OPENAI_API_KEY="sua-chave-do-projeto-openai"
supabase secrets set OPENAI_MODEL="gpt-5-mini"
supabase secrets set ALLOWED_ORIGINS="https://www.institutointegro.com.br,https://institutointegro.com.br"
```

Publique a função mantendo a verificação JWT padrão:

```bash
supabase functions deploy analyze-school-satisfaction
```

Não use `--no-verify-jwt`. A função também valida o token explicitamente e a RPC aplica novamente a autorização por papel e escola.

## Chamada pelo painel

Use o cliente Supabase que já contém a sessão do gestor:

```js
const { data, error } = await client.functions.invoke('analyze-school-satisfaction', {
  body: {
    survey_slug: 'etelvina-familias-2026',
    grade: gradeFilter === 'all' ? null : gradeFilter,
    shift: shiftFilter === 'all' ? null : shiftFilter
  }
});
```

`grade` e `shift` podem ser omitidos, `null` ou `"all"` para representar todos. Valores específicos precisam corresponder exatamente às opções do formulário.

Resposta de sucesso:

```json
{
  "analysis": {
    "schema_version": "1.0",
    "executive_summary": "...",
    "confidence": { "level": "moderada", "explanation": "..." },
    "strengths": [],
    "attention_points": [],
    "segment_insights": [],
    "qualitative_themes": [],
    "action_plan": [],
    "monitoring_recommendations": [],
    "risks_and_limitations": [],
    "final_assessment": "..."
  },
  "meta": {
    "model": "gpt-5-mini",
    "generated_at": "2026-08-07T12:00:00.000Z",
    "survey_slug": "etelvina-familias-2026",
    "grade": "all",
    "shift": "all",
    "total_responses": 42,
    "comments_sent": 0,
    "qualitative_suppressed": true
  }
}
```

O painel deve renderizar todas as strings com `textContent`, nunca com `innerHTML`. Se a Edge Function estiver sem chave, indisponível ou exceder o tempo, mantenha os gráficos e a análise determinística local e mostre a IA como complemento indisponível. A geração do PDF não deve falhar por causa da IA.

Erros previstos:

- `401 authentication_required` — sessão ausente ou expirada;
- `403 forbidden` — papel ou escola sem acesso;
- `409 analysis_not_enabled` — edição sem o aviso de privacidade exigido para análise automatizada;
- `422 insufficient_data` — menos de cinco participações válidas no recorte atual; a OpenAI não é chamada;
- `429 rate_limited` — máximo de três solicitações por usuário/pesquisa em dez minutos;
- `503 analysis_not_configured` — `OPENAI_API_KEY` ausente;
- `502 analysis_provider_error` ou `analysis_invalid_output` — falha ou saída recusada pelo provedor;
- `504 analysis_timeout` — limite de 45 segundos.

## Privacidade, retenção e governança

- A requisição usa `store: false`. A documentação oficial explica Structured Outputs e os controles de dados da API: [Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs) e [controles de dados](https://developers.openai.com/api/docs/guides/your-data).
- Dados enviados à API não são usados para treinar modelos por padrão, salvo opção explícita da organização. Ainda podem existir logs de monitoramento de abuso pelo período previsto no contrato/configuração da conta; organizações elegíveis podem avaliar Modified Abuse Monitoring ou Zero Data Retention.
- A narrativa não é persistida no Supabase. A auditoria guarda somente ator, modelo, situação, duração, `comments_sent: 0` e identificador técnico aleatório; prompt, indicadores e saída não são gravados na auditoria.
- O formulário usa `submit_parent_school_satisfaction_v2`: a versão do aviso exibida no HTML é enviada e comparada com a versão vigente no banco. A execução pública da RPC antiga é revogada, portanto uma página antiga falha sem rotular respostas como consentimento da versão de IA.
- Não existe cache persistente da narrativa, deliberadamente. O painel pode mantê-la apenas em memória durante a página atual para incluí-la no PDF.
- Quando a política de retenção remove os comentários da pesquisa, eles já não possuem qualquer cópia no fluxo de IA, pois nunca são enviados.
- O relatório deve indicar que a IA oferece apoio gerencial, não verdade definitiva nem fonte dos KPIs. Amostra pequena, adesão voluntária e ausência de alguns segmentos limitam a generalização.

## Testes antes de liberar

```bash
node --test tests/pesquisa-satisfacao-ai-contract.test.mjs
node --test tests/pesquisa-satisfacao-core.test.mjs tests/pesquisa-satisfacao-contract.test.mjs
```

Depois do deploy, valide com três contas:

1. diretor da escola — permitido;
2. coordenação da escola — permitido, somente com agregados quantitativos no payload;
3. professor ou gestor de outra escola — bloqueado.

Também confira que uma a quatro respostas bloqueiam totalmente a chamada à IA, a liberação a partir de cinco, que comentários e campos livres nunca entram no corpo enviado ao provedor, a coerência de todos os números após filtrar ano/turno, o limite de três gerações em dez minutos e o funcionamento do PDF quando a API está indisponível.
