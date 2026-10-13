# Decisões de Arquitetura, Design e Imagens — Chaveiro Mota

**Data de atualização:** 12/10/2026 (Fechamento Técnico e Polimento)  
**Status do cliente:** Contratado comercialmente. Entrega final validada e homologada localmente.  
**Projeto:** `F:\Solara\coding\sites-ladingpage-etc\chaveiro-mota-site`

---

## 1. Arquitetura e Decisões Técnicas

- **Stack e Compilação:** Astro 7 em modo Static Site Generation (SSG) com TypeScript e CSS puro nativo.
- **Pipeline de Validação Rigoroso (`npm run verify`):** Ordem determinística de execução: `npm run build` seguido de `npm test` (testes de contrato estrutural e factual) e `node tests/visual-qa.mjs` (Playwright no navegador real cobrindo 7 viewports, acessibilidade por teclado, contenção de foco, isolamento por `inert`, teste de redimensionamento e medições reais de contraste).
- **Sem Mascaramento Global de Overflow:** Removido o `overflow-x: hidden` do elemento `body` para garantir que o layout seja genuinamente responsivo e que elementos não vazem a largura visual do cliente.
- **Metadados de Origem de Publicação:**
  - `astro.config.mjs` aceita `site: process.env.SITE_URL || process.env.PUBLIC_SITE_URL || undefined`.
  - `Layout.astro` utiliza `siteOrigin` configurado dinamicamente para `canonicalUrl`, `og:url`, `og:image` e `twitter:image`.
  - Em modo de publicação configurado, testes de contrato rejeitam `localhost` e `127.0.0.1`. Em modo local, opera confiavelmente com `noindex, nofollow` preservado para evitar indexação precoce de staging.
- **Acessibilidade do Menu Mobile & Isolamento:**
  - Atributo `inert` aplicado a todos os irmãos e controles de fundo (`#skip-link`, `#topbar-container`, `#cabecalho`, `#conteudo-principal`, `#site-footer`, `#mobile-bottom-bar`) ao abrir o menu, eliminando qualquer vazamento de foco ou interação acidental.
  - Fechamento automático via `window.matchMedia("(min-width: 992px)")` caso o usuário redimensione a janela ou gire o dispositivo, desbloqueando `overflow: hidden`, limpando `inert` e restaurando o foco para a marca ou navegação desktop visível (sem focar botões ocultos).
  - Contenção estrita de foco (Trap de Tab e Shift+Tab), fechamento via tecla `Escape` e restauração de foco ao botão disparador.
- **Roteamento e Integridade da Página 404:** Links globais de navegação padronizados como caminhos absolutos baseados na raiz (`/#servicos`, `/#loja-e-localizacao`, `/#atendimento`, `/#faq`), permitindo navegação perfeita a partir de rotas de erro sem links âncora quebrados.

---

## 2. Direção Visual & Identidade

- **Assinatura Tipográfica:** Preservada a identidade amarela e preta em duas linhas do Wix histórico ("CHAVEIRO MOTA", preta sobre fundo amarelo), eliminando o favicon provisório como logotipo isolado e dando tratamento institucional ao cabeçalho e rodapé.
- **Marca do Rodapé:** Ajustado `.footer-col-brand .brand-badge` com `align-self: flex-start; width: auto; max-width: fit-content;` para impedir estiramento em faixa amarela desproporcional.
- **Hierarquia Visual e Ritmo:**
  - Eliminado o `.urgent-banner` que duplicava a chamada de urgência logo após o Hero.
  - Espaçamento semântico explícito em `.payment-notes` (`<span class="payment-label">Pagamento: </span>`), evitando aglutinação de palavras na seleção/leitura.
  - Texto introdutório da seção de loja encurtado para focar em serviços de balcão (cópias, afiações, xerox, 3x4), concentrando os horários de funcionamento na tabela comparativa sem repetição desnecessária.
  - A foto de oficina fictícia foi completamente removida da seção de loja, substituída por design estruturado de informações.
- **Legendas de Imagem:** Renderizadas com figcaption estruturado abaixo das imagens, com alto contraste (`#CBD5E1` sobre fundo escuro `rgba(17, 24, 32, 0.95)`), garantindo 12.03:1 de contraste sem sobreposição intrusiva.
- **Contraste e Legibilidade (WCAG 2.1 AAA/AA):**
  - Botões primários utilizam amarelo `#F5C542` com texto escuro `#111820` (contraste real medido: **11.02:1**).
  - Títulos do Hero utilizam texto claro `#F8FAFC` sobre grafite escuro `#111820` (contraste real medido: **17.08:1**).
  - Textos de apoio em fundo claro utilizam `#475569` sobre `#F8FAFC` (contraste real medido: **7.24:1**).
  - Rodapé utiliza `#CBD5E1` sobre grafite `#0A0F14` (contraste real medido: **12.96:1**).

---

## 3. Seleção e Curadoria de Imagens (Conjunto v2)

- Adotado o conjunto atualizado `assets/revisao-codex-v2/` gerado com a ferramenta do Codex em substituição às opções dramatizadas anteriores:
  - Hero: `hero-bancada-chaveiro` (bancada técnica de mestre chaveiro com máquina manual e ferramentas).
  - Automotivo: `automotivo-atendimento` (chave automotiva sobre maleta técnica em ambiente externo junto ao veículo).
  - Residencial: `residencial-porta` (porta residencial entreaberta com conjunto convencional de fechadura).
- Social Card `og-image.jpg` (1200 × 630 px) gerado de forma limpa com a marca oficial, telefones, endereço e indicação de plantão 24h.
- Exportadas variantes responsivas em 480w, 768w, 1024w e 1536w com WebP e JPEG otimizados.

---

## 4. Fidedignidade Factual Estrita

- **Remoções de Alegações não Corroboradas:**
  - Removido CEP `89230-000` do Schema.org (preservada cidade e estado).
  - Removidas menções a "PIX e dinheiro" das formas de pagamento (preservados cartões de crédito e débito conforme anúncio original do Wix).
  - Removidas promessas de "sem danificar lataria", "cópias na hora", "revelação imediata" e "exclusividade em finais de semana".
- **Dados Preservados:** Nome Chaveiro Mota, telefone `(47) 99721-7584`, WhatsApp `+5547997217584`, endereço na Rua Agulhas Negras, 1530 — Jarivatuba, Joinville/SC, plantão 24h e expediente da loja de segunda a sexta, 9h–12h e 14h–18h.

---

## 5. Arquitetura de Conteúdo e SEO Especializado (4 Rotas)

- **Rotas Comerciais Dedicadas:**
  - `/` (Home): Visão geral da oficina, plantão 24h, faixas técnicas de automotivo e residencial, e assinatura amarela da loja física.
  - `/chaveiro-automotivo-joinville/`: Subpágina temática com H1 específico, checklist para veículos trancados, miolo de ignição e chave canivete/presença, FAQ automotivo e sidebar com WhatsApp contextual.
  - `/chaveiro-residencial-joinville/`: Subpágina temática com H1 focado em residências e empresas em Joinville, abertura de portas, troca de segredos/cilindros, fechaduras digitais e cofres.
  - `/copia-de-chaves-joinville/`: Subpágina temática para balcão, duplicadoras de precisão (Yale, Tetra, Multiponto, pantográficas), afiações e foto 3×4.
- **Sitemap & Robots:**
  - Geração estática via `src/pages/sitemap.xml.ts` e `src/pages/robots.txt.ts`.
  - Todas as 4 páginas comerciais mapeadas; `404.html` estritamente excluída do sitemap e com meta `noindex, nofollow`.
- **BreadcrumbList:** Schema.org enriquecido com trilhas de navegação para todas as subpáginas (`BreadcrumbList`).

---

## 6. Preferências de Design da Julia (Adaptação CLIMABLU)

- **Affordance de Botão Secundário:**
  - Links para as subpáginas de SEO estilizados como botões secundários autênticos (`.btn-outline-dark` sobre fundos claros; `.btn-secondary-on-yellow` sobre o amarelo da loja), com área de toque mínima de 44px, foco visível e setas direcionais limpas.
- **Módulos Leves Interativos na Loja Física:**
  - Substituição da lista estática de balcão por 4 módulos leves organizados em grade 2×2 (desktop) e 1 coluna (mobile), cada um com ícones SVG funcionais (`key`, `lock`, `scissors`, `document`) e link direto para WhatsApp com mensagem contextual preenchida.
- **Horários Escaneáveis em Linhas Claras:**
  - Separação semântica nítida entre o balcão da loja (`Segunda a sexta-feira: 09h–12h · 14h–18h`) e o socorro móvel (`Plantão emergencial móvel: 24 horas todos os dias`), sem induzir atendimento de loja aos sábados ou domingos.
- **Alinhamento do Rodapé ao Topo e Agrupamento:**
  - `.footer-grid` com `align-items: start;`, agrupamento lógico dos links em "Serviços" e "Informações", endereço em linhas naturais (rua/número e bairro/cidade/UF) e copyright no fundo absoluto.
- **Eliminação de Divisórias Redundantes:**
  - Remoção de linhas horizontais repetitivas onde o ritmo espacial e a variação de superfície já fornecem distinção visual.
