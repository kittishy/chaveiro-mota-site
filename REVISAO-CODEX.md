# Revisão independente — 12/10/2026

Alvo: `src/pages/index.astro` e layout compartilhado, prévia `http://localhost:4321/`. Revisão visual e técnica com Impeccable 4.5.2; avaliações independentes pelos agentes persistentes designer e builder. Nenhuma alteração em `src` foi feita nesta revisão.

## Evidências e limitações

- `npm run build`: passou, 2 páginas (`index.html` e `404.html`).
- `npm test`: 7/7 passaram, confirmado também após build.
- Navegador: home sem overflow observado em 320, 390, 768, 1024 e 1440 px; quatro imagens decodificadas. Existe overflow-x hidden global, portanto esse resultado sozinho não prova ausência de conteúdo oculto.
- Reproduzido em 390 × 844: abrir menu e Shift+Tab move foco para botão atrás do overlay. Escape fecha menu.
- 404: 14 links do layout apontam a âncoras ausentes na página.
- Detector Impeccable executado uma vez pelo builder: um warning `overused-font` (Inter, Layout.astro:76). Essa indicação não prova falta de qualidade da fonte nem cobre as falhas de interação.
- Texto da loja usa #475569 em superfície escura; a cor herdada foi confirmada no DOM.
- Metadados sociais usam caminho relativo de imagem; QA visual só considera console/overflow para resultado geral.
- Não foi medida performance de campo, ranking ou conversão; não foi feito deploy.

## Avaliação visual

Boa base semântica e H1 objetivo, porém seções repetidas e excesso de caixas/CTAs. Capturas avaliadas pelo designer: 6045 px de altura desktop e 9356 px mobile. A faixa de urgência imediatamente após o hero repete a decisão. Serviços devem ser mais escaneáveis; endereço/loja podem ser aproximados. Cores amarela e preta vêm da identidade existente no Wix, confirmada visualmente nesta revisão.

Comparação: portfólio publicado `https://julia-webdesign.vercel.app/` e fonte local `portifolio codi/src/App.tsx`; exemplos C&N e XandeTEC. Princípios relevantes: imagem em escala útil, conteúdo específico, composição menos encaixotada e ação principal distinguível. Não aplicar identidade visual dessas marcas ao chaveiro.

## Imagens e marca

As quatro imagens anteriores são declaradas geradas por IA no inventário. A máquina do hero é dramatizada; foto de oficina em seção de loja pode ser interpretada como registro do estabelecimento. As novas imagens são ilustrações de objetos/categoria, e precisam permanecer identificadas como tal.

Novos arquivos em `assets/revisao-codex`, todos 1536 × 1024 px: `hero-cilindro-chaves.png`, `automotivo-chave.png`, `residencial-fechadura.png`, com cópias WebP. Geração pela ferramenta nativa image_gen do Codex. Originais anteriores preservados. Não foram aplicados ao site: Gemini deve usar o prompt de refinamento.

No Wix original existe assinatura tipográfica CHAVEIRO MOTA, preta em duas linhas sobre amarelo. Não foi criada nova logo: a autorização da usuária era condicional à ausência de marca. Fonte: `https://chaveiromota.wixsite.com/chaveiromota`, conferida no navegador em 12/10/2026.

## Pendências factuais

PIX/dinheiro, CEP, exclusividade do plantão em fins de semana e promessas técnicas adicionais não têm fonte no registro local. São pendências de comprovação, não afirmações de falsidade. O prompt pede verificar ou remover as extensões, preservando contato, endereço, horários e categorias confirmadas.

Questions skipped: a usuária pediu entrega de prompt e ativos para a outra IA continuar; não é necessária nova entrevista para esse refinamento.
