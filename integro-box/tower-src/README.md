# TOWER

Construção e raciocínio lógico para o Integro Box. 24 fases em seis grupos:
encaixe e rotação, sequências de cores, pontes, vento, faróis duplos e desafios
combinados. Construção livre com cinco tipos de peça, até 80 peças e 16 metros.

A cena não usa mascote. As peças têm contorno cartoon, faces em relevo, juntas
e símbolos de cor; a prévia usa maior opacidade para facilitar o encaixe.
Three.js renderiza blocos cartoon 3D; Matter.js simula a estrutura no plano da
fachada. Montagem pausada, encaixe na grade, rotação de 90°, desfazer, remover,
três cores com símbolos, zoom e teste físico determinístico de cinco segundos.
Fases verificam altura, estabilidade e alvos coloridos. Moedas próprias são
concedidas somente por estrelas novas; quatro temas cosméticos. Nenhum gasto de
IntGem. Rascunho por fase, oficina livre, estrelas e temas salvos por conta no
BoxStorage, somente neste navegador.

HUD separado da área de construção: topo compacto, bandeja inferior no celular
e lateral em paisagem. Teclado: 1–5, setas, Enter, R, U, Delete, espaço e Esc.

Build: `npm ci` nesta pasta; `node build.mjs`.
Testes no repositório: `node --test tests/tower.test.mjs tests/tower-ui.test.mjs`.
A capa `../assets/catalog-v1/tower.webp` foi gerada com ImageGen a partir do estilo
do catálogo existente. Prompt: robô construtor cartoon montando torre de blocos,
pontes e apoios em ilha flutuante; tipografia 3D INTEGRO BOX e TOWER.

Verificação: soluções das 24 fases executadas com a mesma simulação do jogo;
falhas de apoio, cores, inventário, recompensas repetidas e progresso cobertas
por testes. O navegador de QA não oferece WebGL; verificação visual do renderer
3D permanece pendente. QA de menus/HUD usa um adaptador de cena isolado de teste.
