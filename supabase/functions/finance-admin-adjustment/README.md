# finance-admin-adjustment

Esta Edge Function deve ser publicada como uma pasta completa, pois `index.ts`
importa `request-contract.mjs` para compartilhar a validação testada do payload.

Com a CLI do Supabase, execute na raiz do projeto:

```sh
supabase functions deploy finance-admin-adjustment
```

Se a publicação for feita pelo editor web, crie os dois arquivos com estes nomes
na mesma função antes do deploy:

- `index.ts`
- `request-contract.mjs`

O próprio `index.ts` exige o Bearer token e o valida com `auth.getUser(token)`.
No gateway, mantenha **Verify JWT** ativado em projetos que ainda usam a chave
JWT legada compatível. Se o projeto tiver migrado para chaves assimétricas,
desative o verificador legado (ou publique com `--no-verify-jwt`), pois ele pode
rejeitar o token antes de o código seguro da função executá-lo.

A função utiliza apenas secrets nativos do Supabase (`SUPABASE_URL`,
`SUPABASE_ANON_KEY` e `SUPABASE_SERVICE_ROLE_KEY`) e o `ALLOWED_ORIGINS` já usado
pelo portal. Nenhuma senha deve ser cadastrada como secret ou copiada para logs.
