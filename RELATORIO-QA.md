# Relatório de Verificação & QA: Chaveiro Mota (Direção Visual, SEO & Preferências Julia)

**Data:** 12/10/2026  
**Ambiente:** Prévia Local / Astro SSG (`dist/`)  
**Site:** Chaveiro Mota (Joinville/SC)  
**Execução:** `npm run verify` (`build` + `test` + `visual-qa`)

---

## 1. Resumo Executivo das Verificações

| Item de Verificação | Status | Detalhes e Evidências |
| :--- | :---: | :--- |
| **Pipeline Completo (`verify`)** | **PASSOU** | Ordem determinística garantida: compilação SSG -> contratos (9/9) -> Playwright com saída estrita (código 0). |
| **Build SSG Oficial (5 páginas)** | **PASSOU** | `astro build` gerou estático limpo (`/`, `/chaveiro-automotivo-joinville/`, `/chaveiro-residencial-joinville/`, `/copia-de-chaves-joinville/`, `/404.html`, `sitemap.xml`, `robots.txt`) em 703ms sem erros. |
| **Testes de Contrato (9/9)** | **PASSOU** | 9 asserções em `tests/contract.test.mjs`: telefones normalizados, Google Maps oficial, titles e meta descriptions das 4 rotas comerciais, canonical/origem de publicação, Schema.org Locksmith e BreadcrumbList, consistência do sitemap sem 404, integridade das imagens v2 e ausência de termos de IA. |
| **QA Visual Playwright (7 Viewports)** | **PASSOU** | 7 viewports testados (360 a 1440 px e paisagem móvel), **0 horizontal overflow sem mascaramento global de CSS**. |
| **Subpáginas Comerciais de SEO** | **PASSOU** | As 3 subpáginas temáticas testadas via Playwright em HTTP 200, H1s corretos e zero vazamento horizontal de tela. |
| **Isolamento Completo com Inert** | **PASSOU** | Ao abrir o menu mobile, `inert` é aplicado a todos os irmãos e controles de fundo (`#skip-link`, `#cabecalho`, `#conteudo-principal`, `#site-footer`, `#mobile-bottom-bar`). Removido confiavelmente ao fechar. |
| **Transição de Breakpoint (Resize)** | **PASSOU** | Ao abrir em 390px e cruzar o breakpoint para desktop (1024px), o menu fecha automaticamente via `matchMedia`, desbloqueia a rolagem do `body`, remove `inert` e devolve o foco para elemento visível. |
| **Medição Real de Contraste (WCAG 2.1)** | **PASSOU** | Todos os 9 pares de cores renderizados no DOM atendem ou superam WCAG AAA/AA (4.5:1 / 3:1). Botão primário: 11.39:1, Título hero: 18.48:1, Botão secundário na loja: 11.39:1, Botão contorno escuro em serviços: 17.85:1. |
| **Navegação na Rota 404** | **PASSOU** | Resposta HTTP 404 confirmada, título correto, links cruzados e retorno perfeito à Home com validação de H1. |
| **Imagem Social Open Graph** | **PASSOU** | `og-image.jpg` (1200 × 630 px) validado com assinatura visual da marca, telefones, endereço e indicação de plantão 24h. |
| **Metadados de Publicação** | **PASSOU** | Suporte a `SITE_URL` / `PUBLIC_SITE_URL` em `astro.config.mjs` e `Layout.astro`. Em publicação, rejeita localhost/127.0.0.1 em metadados. Em staging, preserva `noindex, nofollow`. |

---

## 2. Medições Reais de Contraste de Cores (DOM Computado)

Calculado via fórmula padrão WCAG 2.1 de luminância relativa sobre estilos computados reais:

| Elemento / Seletor | Cor do Texto (fg) | Fundo Efetivo (bg) | Razão Medida | Exigência Mínima | Status |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **Botão Primário Amarelo** (`.btn-primary`) | `rgb(17, 20, 23)` | `rgb(245, 197, 66)` | **11.39:1** | 4.5:1 (AA) | **PASSOU (AAA)** |
| **Título Hero H1** (`.hero-title`) | `rgb(255, 255, 255)` | `rgb(17, 20, 23)` | **18.48:1** | 3.0:1 (Grande) | **PASSOU (AAA)** |
| **Texto de Apoio de Seção** (`.section-subtitle`) | `rgb(71, 85, 105)` | `rgb(251, 251, 250)` | **7.32:1** | 4.5:1 (AA) | **PASSOU (AAA)** |
| **Título da Loja na Seção Amarela** (`.store-signature-heading`) | `rgb(17, 20, 23)` | `rgb(245, 197, 66)` | **11.39:1** | 4.5:1 (AA) | **PASSOU (AAA)** |
| **Botão Secundário na Loja Amarela** (`.btn-secondary-on-yellow`) | `rgb(17, 20, 23)` | `rgb(245, 197, 66)` | **11.39:1** | 4.5:1 (AA) | **PASSOU (AAA)** |
| **Botão Secundário Contorno em Serviços** (`.btn-outline-dark`) | `rgb(17, 20, 23)` | `rgb(251, 251, 250)` | **17.85:1** | 4.5:1 (AA) | **PASSOU (AAA)** |
| **Legenda de Imagem Técnica** (`.image-caption`) | `rgb(203, 213, 225)` | `rgba(17, 20, 24, 0.95)` | **12.44:1** | 4.5:1 (AA) | **PASSOU (AAA)** |
| **Link de Navegação** (`.nav-link`) | `rgb(203, 213, 225)` | `rgba(17, 20, 23, 0.96)` | **12.45:1** | 4.5:1 (AA) | **PASSOU (AAA)** |
| **Copyright do Rodapé** (`.footer-copy`) | `rgb(203, 213, 225)` | `rgb(10, 15, 20)` | **12.96:1** | 4.5:1 (AA) | **PASSOU (AAA)** |

---

## 3. Matriz de Viewports e Rotas (Sem Overflow Horizontal)

*Testado com medição direta de `document.documentElement.scrollWidth` versus `clientWidth`.*

| Rota / Viewport | Resolução | scrollWidth vs clientWidth | Overflow | Status |
| :--- | :--- | :--- | :---: | :---: |
| **Home — Mobile Compacto** | 360 × 740 px | 360 == 360 | Não | **PASSOU** |
| **Home — Mobile Médio (iPhone)** | 390 × 844 px | 390 == 390 | Não | **PASSOU** |
| **Home — Mobile Grande (Plus/Max)** | 414 × 896 px | 414 == 414 | Não | **PASSOU** |
| **Home — Mobile Paisagem** | 844 × 390 px | 844 == 844 | Não | **PASSOU** |
| **Home — Tablet** | 768 × 1024 px | 768 == 768 | Não | **PASSOU** |
| **Home — Desktop Padrão** | 1024 × 768 px | 1024 == 1024 | Não | **PASSOU** |
| **Home — Desktop Widescreen** | 1440 × 900 px | 1440 == 1440 | Não | **PASSOU** |
| **Subpágina Automotivo** | 390 × 844 px | 390 == 390 (HTTP 200) | Não | **PASSOU** |
| **Subpágina Residencial** | 390 × 844 px | 390 == 390 (HTTP 200) | Não | **PASSOU** |
| **Subpágina Cópia de Chaves** | 390 × 844 px | 390 == 390 (HTTP 200) | Não | **PASSOU** |

---

## 4. Adaptação das Preferências da Julia (Recuperadas da CLIMABLU)

1. **Affordance de Botão nos CTAs Secundários:**
   - Adicionadas classes `.btn-outline-dark` e `.btn-secondary-on-yellow` aos links de aprofundamento das subpáginas, com foco delineado, setas coerentes e área de toque touch de no mínimo 44px.
2. **4 Módulos Leves Interativos no Balcão:**
   - A lista estática de balcão foi convertida em 4 módulos leves (Cópias de Chaves, Troca de Segredo, Afiação de Ferramentas e Xerox/Foto 3×4) com ícones SVG funcionais e links diretos para WhatsApp com assunto pré-selecionado pelo visitante.
3. **Horários Semânticos em Linhas Claras:**
   - Apresentação em duas caixas nítidas e separadas: Loja física (Segunda a sexta-feira, 09h–12h · 14h–18h) e Plantão emergencial (24 horas todos os dias), sem inventar expediente aos finais de semana.
4. **Alinhamento do Rodapé ao Topo e Agrupamento:**
   - Colunas com `align-items: start;`, títulos alinhados no mesmo eixo, links separados logicamente por "Serviços" e "Informações", endereço em duas linhas naturais e copyright no rodapé absoluto.
5. **Eliminação de Divisórias Duplicadas:**
   - Remoção de filetes horizontais desnecessários sob itens de especificações e transições onde o espaçamento já conferia distinção visual.
6. **Revisão Factual Rigorosa:**
   - Removidas promessas de "na hora", "caminhões/utilitários", "redefinição de cofres" e procedimentos técnicos não corroborados em `FONTES.md`.

---

## 5. Limitações Reais e Pendências Para Publicação Oficial

1. **Aprovação do Cliente:** Apresentação da versão refinada ao proprietário da Chaveiro Mota para validação comercial.
2. **Definição de Domínio Oficial:** Configuração da variável `SITE_URL` (ex: `SITE_URL=https://chaveiromota.com.br`) na plataforma de deploy final para preenchimento canônico de Open Graph e Twitter Cards.
3. **Ativação da Indexação:** Alteração da meta tag de robots (de `noindex, nofollow` para indexação pública) apenas após a homologação e apontamento do domínio oficial.
