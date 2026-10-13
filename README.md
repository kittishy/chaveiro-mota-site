# Chaveiro Mota — Site Institucional e Comercial

Site de produção estático para o **Chaveiro Mota** em Joinville/SC, desenvolvido com **Astro**, **TypeScript** e **CSS Moderno**.

---

## 📌 Visão Geral do Projeto

- **Negócio:** Chaveiro Mota
- **Localização:** Rua Agulhas Negras, 1530 — Jarivatuba, Joinville/SC
- **Contato Telefônico & WhatsApp:** (47) 99721-7584 (`+5547997217584`)
- **Regime de Atendimento:** Plantão Emergencial Móvel 24 Horas + Loja Física no Jarivatuba (seg–sex, 9h–12h e 14h–18h)
- **Tecnologia:** Astro 7 (Static Site Generation — SSG), TypeScript, HTML semântico, CSS puro nativo com variáveis, SVG inline e imagens WebP/JPG otimizadas.

---

## 🚀 Como Executar

Na raiz do projeto (`F:\Solara\coding\sites-ladingpage-etc\chaveiro-mota-site`):

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento local
npm run dev

# 3. Compilar para produção (Static HTML/CSS/JS em ./dist/)
npm run build

# 4. Pré-visualizar a compilação de produção
npm run preview

# 5. Executar o pipeline completo e determinístico de verificação (Build + Contratos + Playwright)
npm run verify

# Ou executar os passos isolados:
npm test                  # 8 testes de contrato e integridade factual
node tests/visual-qa.mjs   # Testes Playwright em 7 viewports com medição real de contraste, inert e 404
```

### Variáveis de Ambiente para Publicação

- `SITE_URL` ou `PUBLIC_SITE_URL`: Origem canônica pública oficial (ex.: `https://chaveiromota.com.br`). Se ausente, opera em modo local com metadados relativos e staging protegido (`noindex, nofollow`).

---

## 📂 Estrutura de Diretórios

```text
chaveiro-mota-site/
├── assets/
│   └── revisao-codex-v2/        # Imagens comerciais ilustrativas (bancada, automotivo, residencial)
├── public/
│   ├── assets/images/           # Imagens WebP/JPG desktop e mobile otimizadas + OG Card 1200x630
│   ├── favicon.svg              # Favicon SVG vetorial
│   └── favicon.ico              # Favicon ICO
├── src/
│   ├── data/
│   │   └── site.ts              # Fonte única de dados factuais (telefones, horários, serviços)
│   ├── layouts/
│   │   └── Layout.astro         # Layout base, metadados, Schema.org Locksmith, drawer acessível
│   ├── pages/
│   │   ├── index.astro          # Página principal (Hero, Serviços, Loja, Atendimento, Localização, FAQ)
│   │   └── 404.astro            # Página 404 semântica com links de navegação para a raiz
│   └── styles/
│       └── global.css           # Design tokens, reset, tipografia, microinterações e responsividade
├── tests/
│   ├── contract.test.mjs        # 8 testes automatizados de integridade factual e SEO
│   └── visual-qa.mjs            # Script Playwright para 360, 390, 414, 768, 1024, 1440 px
├── DECISIONS.md                 # Registro de decisões arquiteturais e visuais
├── FONTES.md                    # Registro das fontes públicas e do Wix
├── IMAGE_ASSETS.md              # Catálogo de proveniência e metadados de imagens
├── RELATORIO-QA.md              # Relatório formal de testes e aprovação de QA
└── README.md                    # Documentação do projeto
```

---

## 🛡️ Integridade e Conformidade Factual

Este projeto segue estritamente as diretrizes de fidelidade às informações verificáveis:
- **Sem depoimentos ou avaliações inventadas.**
- **Sem falsas alegações de tempo de chegada ou garantias absolutas.**
- **Sem CNPJ ou e-mails fictícios.**
- **Imagens ilustrativas técnicas reais:** bancada de duplicadora manual de chaves, chaves automotivas em maleta de serviço externo e fechadura residencial, com legendas explícitas indicando caráter ilustrativo.

---

## 📋 Pendências Para Publicação Oficial

1. **Apresentação e Homologação pelo Cliente:** Apresentação da versão refinada ao proprietário da Chaveiro Mota para validação final.
2. **Definição de Domínio e Hospedagem:** Configuração de DNS e variável `SITE_URL` na plataforma de hospedagem de produção.
3. **Ativação da Indexação:** Substituição da diretiva `<meta name="robots" content="noindex, nofollow" />` em `src/layouts/Layout.astro` quando autorizado o lançamento oficial.
