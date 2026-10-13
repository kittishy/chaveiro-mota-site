# Continuação do Chaveiro Mota — refinamento com auditoria real

Continue o projeto em `F:\Solara\coding\sites-ladingpage-etc\chaveiro-mota-site`. Ele já está implementado em Astro estático. A usuária rejeitou o acabamento genérico e as imagens anteriores. Sua tarefa é aplicar este refinamento no site e validar a entrega. Preserve as mudanças em andamento e trabalhe sobre a implementação atual.

## Contexto e evidências

Leia `AGENTS.md`, `DECISIONS.md`, `FONTES.md`, `IMAGE_ASSETS.md`, `REVISAO-CODEX.md` e este prompt. Inspecione `src/pages/index.astro`, `src/layouts/Layout.astro`, `src/styles/global.css`, `src/data/site.ts`, `src/pages/404.astro` e os testes.

Use as skills globais em `C:\Users\isand\.gemini\config\skills`: `agencia-sites-pro`, `solara-webcraft`, `impeccable`, `direcao-visual`, `arquitetura-site`, `copy-site`, `seo-local`, `acessibilidade-web`, `performance-web` e `qa-e-teste`, selecionando os procedimentos relevantes. Leia de fato seus arquivos. Não carregue todas as referências indiscriminadamente nem use nomes de skills como substituto para trabalho concreto.

A auditoria independente confirmou build e 7 testes passando, mas reproduziu falhas de foco no menu, navegação na 404, contraste e cobertura de testes. Portanto, o relatório anterior não é autorização para declarar o site pronto. Reconfira o estado atual antes de corrigir: outra sessão pode ter avançado desde a auditoria.

## Direção visual

O conceito é um serviço local técnico, claro e confiável, com acabamento profissional. Preserve a identidade amarela e preta do Wix original: `https://chaveiromota.wixsite.com/chaveiromota`. Lá já existe uma assinatura tipográfica “CHAVEIRO MOTA”, em duas linhas, preta sobre amarelo. Não crie outra logo nem apresente o favicon provisório como marca oficial. Dê tratamento cuidadoso à assinatura existente no cabeçalho e rodapé.

Compare a execução com os projetos reais do portfólio em `F:\Solara\coding\sites-ladingpage-etc\portifolio codi` e com `https://julia-webdesign.vercel.app/`. Referências particularmente úteis: `https://cn-marmores.vercel.app/` para imagem protagonista, poucas distrações e composição ampla; `https://xandetec-solucoes.vercel.app/` para hierarquia de serviços e evidência de trabalho. Aproveite esses princípios sem copiar paletas, textos ou transformar o chaveiro numa marmoraria de luxo.

O problema atual é a combinação de grandes caixas, listas extensas, títulos genéricos, muitas chamadas repetidas e fotografias dramatizadas. Trocar apenas fonte e imagens não satisfaz o pedido. Refaça a hierarquia e o ritmo das seções com propósito.

### Estrutura recomendada

1. Cabeçalho compacto: marca, navegação curta e ação principal clara. Organize telefone e WhatsApp sem repetir dois botões em todos os blocos superiores. Uma linha discreta pode informar plantão 24 horas e bairro.
2. Hero: mantenha o H1 “Chaveiro 24 horas em Joinville”. Texto de apoio mais direto, uma ação principal de urgência e uma alternativa de contato. Dê presença à fotografia, com proporção compatível com o texto, sem um card dentro de outro card. Informe plantão e expediente da loja numa linha ou grupo leve, em vez de duas caixas decorativas.
3. Retire ou incorpore a `.urgent-banner` imediatamente após o hero: ela repete a mesma decisão sem acrescentar informação. Preserve o acesso rápido ao contato, principalmente na barra móvel.
4. Serviços automotivos e residenciais: títulos diretos, imagens em escala útil e listas compactas. Reduza parágrafos que apenas repetem o nome do serviço. Use linhas, alinhamento e espaço para organizar; evite a sequência de grandes cards brancos com borda, sombra e checklist idêntico. Preserve todos os serviços confirmados, inclusive cofres e controles.
5. Loja e localização: aproxime os serviços de balcão do endereço e dos horários, para que o visitante entenda onde ir. Agrupe cópias, afiações, impressão e foto 3×4 sem quatro blocos de propaganda. Não use fotografia de uma oficina inventada para representar o estabelecimento.
6. Processo: transforme as três etapas atuais numa orientação breve. Não dedique uma seção muito alta a “ligue, informe, combine”.
7. FAQ: preserve dúvidas úteis, respostas curtas e precisas, sem repetir todos os textos anteriores. Finalize com contato e endereço bem organizados.

Evite excesso de kickers em caixa alta, selos de confiança sem evidência, ícones decorativos repetidos, brilho amarelo nos botões, gradientes navy arbitrários e sombras em todas as superfícies. Estabeleça uma escala de fontes coerente, contraste suficiente e espaçamento conforme o conteúdo. Não troque Inter somente porque o detector a marcou como comum: a decisão deve melhorar o resultado renderizado. Tipografia não corrige uma arquitetura repetitiva sozinha.

## Imagens já produzidas pelo Codex

Use os arquivos locais abaixo, sem pedir que a usuária anexe nada. São imagens ilustrativas geradas com a ferramenta nativa do Codex, todas com 1536 × 1024 px. Os PNGs são os originais; as versões WebP preservam resolução e servem para a web.

- Conjunto atualizado após feedback da usuária: use `assets/revisao-codex-v2`, substituindo as opções anteriores de `assets/revisao-codex`, que ela rejeitou por aparência artificial.
- Hero: `assets/revisao-codex-v2/hero-bancada-chaveiro.png` e `.webp` — cena ilustrativa de bancada de cópia de chaves, sem pessoas e com luz cotidiana. Usar como imagem de categoria no hero, nunca como foto identificada da loja física.
- Automotivo: `assets/revisao-codex-v2/automotivo-atendimento.png` e `.webp` — porta de carro comum e chave sobre maleta de ferramentas, em ambiente externo. Não atribuir a cliente ou atendimento efetivamente realizado.
- Residencial: `assets/revisao-codex-v2/residencial-porta.png` e `.webp` — porta entreaberta com fechadura convencional e ambiente doméstico simples. Não apresentar como portfólio de instalação.

Inspecione os três arquivos antes de decidir recortes. Não reutilize a foto anterior `servicos-loja-oficina` como registro da loja. Na seção de localização, use conteúdo textual bem desenhado e o link de mapa verificado; foto de fachada só se encontrar uma fonte real inequívoca. As novas imagens também não são fotos da empresa, da equipe ou de trabalhos executados. Registre a origem em `IMAGE_ASSETS.md` e use uma legenda discreta de imagem ilustrativa nas figuras, sem transformar isso numa faixa de avisos.

Copie as versões escolhidas para `public/assets/images` com nomes novos. Atualize `src/data/site.ts`, alt, dimensões e metadados. Não substitua silenciosamente os originais. Gere variantes responsivas a partir dos originais, sem ampliar imagens e sem distorcer. Use `srcset` por largura e `sizes` coerente com o layout real; `picture` por breakpoint sozinho não cobre telas de alta densidade. Confira a nitidez e o recorte em desktop e celular. Hero com prioridade alta; imagens posteriores lazy. Preserve dimensões para evitar deslocamento de layout.

## Correções técnicas obrigatórias

1. **Contraste na loja:** `.section-subtitle` herda `#475569` dentro da `.store-card` escura. Adote variantes de texto por superfície e meça o contraste de textos, links e estados reais. Para texto comum, mínimo 4,5:1. Confira a página inteira, não apenas o botão amarelo.
2. **Menu mobile:** em `Layout.astro`, abrir e pressionar Shift+Tab move o foco ao botão atrás do overlay apesar de `aria-modal=true`. Use `<dialog>` com abertura modal ou implemente contenção correta de Tab/Shift+Tab, fundo inerte, Escape, foco inicial e devolução de foco. Teste também altura curta e rolagem do menu. ARIA sozinha não implementa comportamento.
3. **Página 404:** 14 links do layout usam `#inicio`, `#servicos` etc. em uma página sem esses IDs. Use âncoras da home (`/#servicos`, por exemplo) para navegação compartilhada e preserve o skip-link local. Teste uma URL desconhecida e retorno à home.
4. **Metadados sociais:** `og:image` e `twitter:image` estão relativos. Quando houver URL real da prévia, gere URLs absolutas para imagem e `og:url`, verificando HTTP e dimensões. Evite inventar domínio oficial. Preserve `noindex` da demonstração e mantenha 404 sem indexação. Uma futura mudança de domínio deve ter configuração própria.
5. **Verificação reproduzível:** os testes de contrato leem `dist` e `npm test` não garante build anterior. Adicione um comando de verificação que execute build, contrato e navegador na ordem correta. Em `tests/visual-qa.mjs`, os resultados do menu e FAQ não entram no resultado final; faça falhas reais interromperem o processo. Cubra foco, âncoras da 404, imagens decodificadas e variantes móveis usadas.
6. **Overflow:** existe `overflow-x: hidden` global. Verifique se apenas mascara defeitos. Resolva elementos responsáveis e valide larguras antes de ocultar overflow. Não anuncie “sem overflow” só porque a raiz está escondendo conteúdo.
7. **Fatos:** `site.ts` publica PIX/dinheiro e atendimento “rápido”, `Layout.astro` inclui CEP `89230-000`, e FAQ afirma exclusividade do plantão em fins de semana/feriados. Esses detalhes não estão corroborados no registro local da pesquisa. Verifique fonte pública específica ou remova a extensão. Também revise “sem danificar”, “cópias na hora”, “revelação imediata”, compatibilidade por senha/cartão/biometria e expressões de garantia. O Wix confirma categorias de serviços, não todas essas condições técnicas.

Preserve: telefone `(47) 99721-7584`, WhatsApp `5547997217584`, Rua Agulhas Negras, 1530, Jarivatuba, Joinville/SC; plantão emergencial 24h e loja de segunda a sexta, 9h–12h e 14h–18h; orçamento sem compromisso e serviços listados no Wix. Não invente horários de sábado, Instagram, CNPJ, avaliações, clientes, fundação, abrangência ilimitada ou tempo de chegada.

## SEO e qualidade

Mantenha H1 único, headings úteis, conteúdo local natural e marca identificável. Faça JSON-LD refletir somente dados confirmados; se separar loja e plantão, não descreva expediente físico como 24h. Evite páginas locais duplicadas ou keyword stuffing. Se não existir domínio oficial definido, deixe essa escolha configurável sem perder o noindex da prévia.

Inspecione a home completa em 360, 390, 414, 768, 1024 e 1440 px e uma tela móvel em paisagem. Confira também 200% de zoom. Valide header fixo sem cobrir conteúdo, barra inferior sem sobrepor links, safe-area, teclado, foco, FAQ, links tel/WhatsApp/mapa, imagem prioritária, fontes e redução de movimento. Não envie mensagens ou faça ligações durante os testes. Use o navegador real além do build.

Faça uma rodada conjunta desktop/mobile, aplique as correções em lote e uma rodada final de confirmação. Execute os comandos reais e registre resultados, sem criar testes que apenas espelhem CSS. Atualize `RELATORIO-QA.md`, `DECISIONS.md` e `IMAGE_ASSETS.md` para refletir o que foi efetivamente feito. Não registre LCP, CLS, Lighthouse ou Core Web Vitals como aprovados sem medição correspondente.

Continue até terminar as mudanças e a verificação. A entrega deve incluir resumo das melhorias perceptíveis, comandos/resultados, prévia local funcional e limitações reais. Siga o escopo de publicação já autorizado na conversa; não mude domínio/DNS nem crie recursos pagos a partir deste prompt. Este pedido de refinamento não exige alterar stack ou reiniciar o projeto.
