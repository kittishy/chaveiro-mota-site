# Chaveiro Mota — fechamento técnico e polimento localizado

Continue em `F:\Solara\coding\sites-ladingpage-etc\chaveiro-mota-site`. O último refinamento melhorou bastante o site e resolveu as falhas anteriores. A tarefa agora é fechar problemas residuais comprovados e polir detalhes. Preserve a direção visual, o conteúdo confirmado e as imagens do conjunto `assets/revisao-codex-v2`. Não reinicie o projeto ou abra outra rodada de redesign.

Leia as orientações locais e inspecione o estado atual antes de editar. A auditoria realizada após sua última entrega confirmou `npm run verify` passando: build de duas páginas, 8/8 testes e sete viewports, zero overflow observado e zero erros de console. Mesmo assim, os casos abaixo não são cobertos integralmente. Corrija-os no código e acrescente apenas os testes de regressão pertinentes.

Use as skills em `C:\Users\isand\.gemini\config\skills`: `agencia-sites-pro` para selecionar procedimentos; `solara-webcraft` e `impeccable` para o refinamento; `acessibilidade-web`, `performance-web`, `seo-local` e `qa-e-teste` para fechar a entrega. Leia as instruções relevantes e respeite o limite de uma rodada conjunta desktop/mobile, correção em lote e confirmação final. As referências do kit são métodos; fatos da empresa e instruções atuais da usuária prevalecem.

## 1. Corrigir metadados de publicação e compartilhamento

`src/layouts/Layout.astro:55` usa `Astro.url.href` como base, mas `astro.config.mjs` não configura `site`. O build atual grava `og:url=http://localhost:4321/` e `og:image=http://localhost:4321/assets/images/og-image.jpg`. O teste aceita URL absoluta sem validar se a origem é apropriada.

Crie uma fonte explícita e validada para o endereço da publicação, usando a configuração oficial do Astro e variável de ambiente documentada. Se houver projeto/deploy de demonstração já configurado, use sua URL real. Se ainda não houver endereço, mantenha execução local e marque publicação como pendente; não invente domínio. No modo de publicação, o build ou teste deve rejeitar localhost, 127.0.0.1 e origens provisórias indevidas. Configure `og:url`, imagem social, twitter:image e canonical da home quando a origem for conhecida. Na 404 mantenha noindex e não a apresente como página canônica comercial.

Preserve noindex da demonstração. A indexação do domínio oficial deve depender de configuração explícita de lançamento; não simplesmente apagar uma meta tag de todo layout e tornar a 404 indexável.

## 2. Atualizar a imagem social antiga

`public/assets/images/og-image.jpg` ainda contém a fotografia anterior de mãos operando uma máquina, com texto “Atendimento rápido”. Essa fotografia foi rejeitada e já saiu da home, mas continua no arquivo compartilhado.

Refaça o card 1200 × 630 com composição gráfica limpa, assinatura tipográfica existente, amarelo/carvão, “Chaveiro Mota”, “Chaveiro 24 horas em Joinville” e telefone correto. Pode usar recorte do novo hero ou ser predominantemente tipográfico. Faça a composição determinística com ferramentas locais; não gere texto da marca em uma imagem de IA. Não use promessa de rapidez. Confira legibilidade em preview pequeno, imagem decodificada, dimensão real, URL absoluta e resposta HTTP após publicação autorizada.

## 3. Fechar o menu corretamente ao mudar de breakpoint

Em `src/layouts/Layout.astro`, abrir em 390 px e redimensionar para 1440 px mantém drawer aberto, overflow do body bloqueado e main inerte, enquanto o botão de abertura desaparece. Escape fecha, porém o foco acaba no body.

Ao cruzar o breakpoint real do header, feche o drawer, limpe bloqueio de rolagem e inércia e restaure foco a elemento visível adequado, como a marca ou navegação desktop. Use matchMedia/change ou mecanismo equivalente; não dependa de um resize handler pesado nem foque elemento display:none. Garanta idempotência e remoção correta de estados. Teste abrir mobile → desktop → voltar mobile e orientação paisagem, sem interação extra para desbloquear a página.

## 4. Isolar todos os controles de fundo no menu modal

A contenção Tab/Shift+Tab foi corrigida, mas inert só é aplicado a header/main/footer. Skip-link, topbar e barra inferior móvel permanecem fora do modal e sem inert. Faça o isolamento completo dos irmãos relevantes ou use diálogo nativo modal com estrutura adequada. Ao fechar, restaure o estado anterior dos elementos, sem remover inércia preexistente que outro componente tenha definido. Preserve Escape, clique no backdrop, navegação das âncoras, foco inicial e retorno de foco. Confirme o comportamento por teclado e a árvore de acessibilidade.

## 5. Ajustes visuais finais

- **Marca do rodapé:** `.footer-col-brand` é flex-column e estica `.brand-badge-sm` numa faixa amarela larga com nome minúsculo. Use largura intrínseca/fit-content e align-self adequado; mantenha proporção natural da assinatura existente e tamanho legível. Não crie nova logo.
- **Pagamento:** `src/pages/index.astro`, `.payment-notes`, renderiza “Pagamento:Cartões”. Insira espaço semântico ou layout com gap que não se perca ao selecionar/copiar texto. Revise quebras em 360 px.
- **Horários repetidos na seção da loja:** a introdução e a tabela repetem o expediente completo. Concentre o horário na tabela e encurte a introdução para explicar os serviços de balcão. Preserve a distinção plantão 24h versus loja 9h–12h/14h–18h.
- **Legendas:** `.image-caption` está sobreposta à fotografia e muito pequena. Prefira figcaption discreto abaixo da imagem, legível e consistente. Preserve a indicação ilustrativa sem criar um aviso grande e sem apresentá-las como imagens reais da empresa.
- **Ritmo mobile:** reduza somente o espaço e os textos redundantes que ainda atrasam o acesso à localização e aos serviços. Não comprima tamanho de fonte nem elimine serviços confirmados para diminuir altura. Os cards agora têm função clara e não precisam ser descartados.

Use os princípios de clareza, hierarquia e composição do portfólio em `F:\Solara\coding\sites-ladingpage-etc\portifolio codi`, especialmente C&N e XandeTEC, preservando a identidade específica do chaveiro. Evite alterações cosméticas de fonte só porque o detector marcou Inter como comum.

## 6. Corrigir cobertura e precisão do relatório

O último QA contém `contrastChecks: []`, então o pipeline não comprova a afirmação numérica de contraste. Meça pares efetivamente renderizados de texto e superfícies, inclusive legendas, navegação e estados; registre valores e método. Acessibilidade não está integralmente aprovada apenas por não haver overflow.

Acrescente testes para origem pública nos metadados no modo de publicação, resize com drawer aberto, inércia dos controles de fundo e restauração do foco. Os testes devem falhar antes da correção correspondente e passar depois. Preserve o pipeline build → contrato → navegador. Torne o caminho do navegador portável: `tests/visual-qa.mjs` contém o executável absoluto da máquina da usuária; aceite override de ambiente e use o navegador padrão instalado quando possível, sem reinstalar binários desnecessariamente.

Inspecione também `sizes` das imagens versus a largura real em cada breakpoint. A expressão atual `100vw` ignora padding no mobile e 560px presume caixa fixa no desktop. Ajuste se a medição mostrar seleção inadequada; não afirme que isso está medido se apenas estimou. Evite servir derivados antigos que não sejam referenciados, preservando os originais fora da pasta pública.

## 7. Verificação e fechamento

Execute `npm run verify` e os casos novos. Confira a home e a 404 em 360/390/414/768/1024/1440, mobile paisagem e zoom de 200%, incluindo menu e footer. Verifique a imagem social e a origem do HTML gerado. Faça uma confirmação final dos pontos corrigidos e pare; não abra outro ciclo de redesign.

Preserve telefone `(47) 99721-7584`, WhatsApp `5547997217584`, endereço e horários confirmados. Não acrescente avaliações, promessas, serviços, equipe ou dados comerciais sem fonte. Não faça contatos durante os testes. Mantenha publicação e domínio dentro das autorizações existentes da usuária; se só houver escopo local, conclua localmente sem inventar aprovação.

Atualize README, DECISIONS, IMAGE_ASSETS e RELATORIO-QA com evidências atuais. Se publicar uma demonstração conforme o escopo já autorizado, valide a URL pública, status HTTP, 404, WhatsApp, metadados, imagem social, noindex e mobile após deploy. Não trate validação local como prova da publicação.

Entrega final curta: melhorias aplicadas, comandos/resultados, URL local ou pública realmente verificada e pendências específicas. Nenhuma afirmação de performance, ranking ou contraste sem medição correspondente.
