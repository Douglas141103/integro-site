# Presença facial no tablet — Instituto Integro

## O que foi implementado

O módulo `portal/presenca-facial.html` acrescenta ao Portal do Parceiro:

- terminal de reconhecimento facial individual;
- cadastro orientado com cinco amostras por aluno;
- controle de enquadramento, iluminação e nitidez;
- confirmação por piscar, antisspoofing e prova de vida;
- três leituras consecutivas antes de registrar a presença;
- rejeição de resultado ambíguo entre dois alunos;
- registro automático na tabela já utilizada pelo portal (`student_attendance`);
- trilha de auditoria em `student_attendance_events`;
- alternativa de presença manual;
- fila temporária no tablet quando a internet cai durante uma sessão já iniciada;
- consulta e exclusão do cadastro facial;
- funcionamento responsivo e modo de tela cheia no tablet.

Fotos e vídeos não são gravados. O banco recebe somente cinco vetores numéricos produzidos pelo modelo facial.

## Preparação do Supabase

1. Abra o projeto atual no Supabase.
2. Entre em **SQL Editor**.
3. Abra o arquivo `supabase/migrations/20260721_presenca_facial.sql` deste repositório.
4. Copie todo o conteúdo, execute e confirme que não houve erro.
5. Volte ao Portal do Parceiro e abra **Presença Facial**.

O SQL cria as tabelas, índices, políticas de acesso e a função que registra a presença de forma atômica. O terminal não deve ser usado com alunos reais antes dessa etapa.

Se a internet cair depois de o terminal já estar aberto, a presença fica temporariamente guardada no tablet e é enviada quando a conexão retorna. O registro temporário contém o identificador do aluno e os indicadores da leitura, não a assinatura facial. Para abrir ou recarregar o portal, autenticar o usuário e carregar os cadastros faciais, a conexão continua necessária.

## Preparação do tablet de 2 MP

1. Atualize o Google Chrome.
2. Abra `https://www.institutointegro.com.br/portal/presenca-facial.html`.
3. Autorize a câmera.
4. Use a câmera frontal em posição vertical ou horizontal estável.
5. Instale o tablet entre 70 cm e 100 cm do rosto do aluno.
6. Evite janela ou lâmpada forte atrás do aluno.
7. Mantenha luz frontal difusa e o fundo sem movimento excessivo.
8. Use **Tela cheia** ou adicione o site à tela inicial.

O navegador solicita 640 × 480 e limita a análise a 12 quadros por segundo. Isso reduz aquecimento e travamentos sem desperdiçar o sensor de 2 MP. Para reconhecimento facial, o tamanho e a nitidez do rosto são mais importantes que a resolução total da câmera.

## Cadastro recomendado

- Cadastre somente alunos com autorização registrada.
- Faça o cadastro no mesmo tablet usado na entrada, sob a iluminação habitual.
- Retire boné, máscara ou itens que escondam o rosto.
- Capture as cinco posições orientadas na tela.
- Recadastre quando houver mudança física significativa ou redução persistente na qualidade do reconhecimento.

## Limites de segurança definidos

- similaridade mínima no navegador: `0,62`;
- diferença mínima entre primeiro e segundo resultado: `0,055`;
- confirmação: três análises consecutivas do mesmo aluno;
- similaridade mínima aceita pelo banco: `0,60`;
- prova de vida e antisspoofing mínimos no banco: `0,38`;
- apenas uma pessoa diante da câmera;
- presença duplicada no mesmo dia não gera outro evento.

Esses valores são conservadores para o primeiro piloto. Devem ser avaliados com pessoas autorizadas e sem usar os registros como medida disciplinar automática.

## Primeiro piloto

1. Cadastre de cinco a dez pessoas autorizadas.
2. Faça dez tentativas por pessoa em horários e iluminações diferentes.
3. Confirme que pessoas não cadastradas nunca recebem o nome de outra pessoa.
4. Registre ocorrências de “não reconhecido”, resultado ambíguo e tempo de resposta.
5. Ajuste os limites somente depois de analisar os resultados.

Durante o piloto, mantenha um funcionário ao lado do tablet e a alternativa manual disponível.

## Tecnologia escolhida

O reconhecimento utiliza `@vladmandic/human` 3.3.6 porque a biblioteca:

- funciona em navegadores Chromium no Android;
- possui descritor facial, antisspoofing, prova de vida e gestos;
- pode processar a câmera localmente;
- permite desativar modelos desnecessários para reduzir o peso no tablet;
- utiliza licença MIT.

O carregamento inicial da biblioteca e dos cinco modelos necessários usa a versão fixa `3.3.6` no jsDelivr. O processamento do rosto continua acontecendo inteiramente no tablet: fotografias, vídeo e assinaturas faciais não são enviados ao CDN. Depois do primeiro acesso, o navegador normalmente reaproveita os arquivos baixados em cache.

## Recuperação e suporte

- Se a câmera não abrir, verifique a permissão do site no Chrome.
- Se aparecer “banco ainda precisa ser preparado”, execute a migração SQL.
- Se o tablet aquecer, feche outros aplicativos e reinicie o terminal.
- Se o aluno não for reconhecido, use a presença manual e revise o cadastro em outro momento.
- Se o resultado ficar ambíguo, não reduza imediatamente o limite; recadastre os envolvidos com boa iluminação.
