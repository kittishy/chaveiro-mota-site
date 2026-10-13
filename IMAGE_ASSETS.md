# Registro de Ativos Visuais (IMAGE_ASSETS.md) — Chaveiro Mota

**Data de atualização:** 12/10/2026 (Fechamento Técnico e Polimento)  
**Projeto:** Chaveiro Mota (Joinville / SC)  
**Diretório de trabalho:** `F:\Solara\coding\sites-ladingpage-etc\chaveiro-mota-site`

---

## 1. Política de Uso e Proveniência de Imagens (Revisão Codex v2)

Conforme a auditoria independente e o feedback da usuária que rejeitou as imagens dramatizadas anteriores:
- **Origem dos novos arquivos:** Gerados pela ferramenta nativa `image_gen` do Codex e arquivados em `assets/revisao-codex-v2/` em resolução natural de 1536 × 1024 px (proporção 3:2).
- **Tratamento e Direção Visual:** Fotografia comercial observacional com cenas cotidianas, luz natural e contexto real de ferramentas e portas convencionais.
- **Caráter Estritamente Ilustrativo:** As imagens representam categorias técnicas de serviços de chaveiro. **Não são fotografias documentais da oficina física, dos veículos do chaveiro, de clientes ou de instalações da empresa**. Cada imagem renderizada no site é acompanhada por legenda discreta de identificação ilustrativa via tag semântica `<figcaption class="image-caption">`.
- **Variantes Responsivas Exportadas:** A partir dos originais de 1536 × 1024 px, foram processadas versões WebP e JPEG de alta qualidade nas larguras 480w, 768w, 1024w e 1536w em `public/assets/images/`, implementadas com `srcset` e `sizes` que descontam o padding do contêiner (`(max-width: 640px) calc(100vw - 40px), (max-width: 991px) calc(100vw - 64px), 540px`).
- **Imagem Social Determinística:** `public/assets/images/og-image.jpg` gerado em 1200 × 630 px com a assinatura tipográfica preta sobre fundo amarelo, telefones, endereço e indicação de plantão 24h, sem fotografia antiga de oficina fictícia nem promessas de rapidez.

---

## 2. Inventário de Ativos (Conjunto v2 em Produção)

| Identificador | Destino em `public/assets/images/` | Dimensões Naturais | Caráter | Origem / Arquivo Base | Legenda Exibida | Texto Alternativo (`alt`) |
|---|---|---|---|---|---|---|
| `hero-bancada-chaveiro` | `hero-bancada-chaveiro-[480w, 768w, 1024w, 1536w].webp` e `.jpg` | 1536 × 1024 px | Ilustrativo Comercial | `assets/revisao-codex-v2/hero-bancada-chaveiro.png` | Imagem ilustrativa de bancada técnica | Bancada técnica de chaveiro com duplicadora manual de chaves e ferramentas de precisão (imagem ilustrativa) |
| `automotivo-atendimento` | `automotivo-atendimento-[480w, 768w, 1024w, 1536w].webp` e `.jpg` | 1536 × 1024 px | Ilustrativo Comercial | `assets/revisao-codex-v2/automotivo-atendimento.png` | Imagem ilustrativa do serviço | Chave automotiva sobre maleta de ferramentas técnicas junto a veículo (imagem ilustrativa) |
| `residencial-porta` | `residencial-porta-[480w, 768w, 1024w, 1536w].webp` e `.jpg` | 1536 × 1024 px | Ilustrativo Comercial | `assets/revisao-codex-v2/residencial-porta.png` | Imagem ilustrativa do serviço | Porta de madeira residencial entreaberta com conjunto de fechadura convencional (imagem ilustrativa) |
| `og-image` | `og-image.jpg` | 1200 × 630 px | Gráfico Oficial / Social Card | Composição gráfica com assinatura tipográfica em proporção Open Graph | — | Chaveiro Mota Joinville — Atendimento 24 Horas para urgências e serviços de chaveiro |
| `favicon` | `favicon.svg`, `favicon.ico` | Vetorial / 32×32 px | Identidade Gráfica | Desenvolvido para o site | — | Ícone do Chaveiro Mota Joinville |

---

## 3. Diretrizes de Renderização e Performance

- Todas as tags `<img>` e `<picture>` possuem atributos explícitos `width` e `height` (1536 × 1024) para garantir proporção de aspecto estável (3:2) e zero Cumulative Layout Shift (CLS).
- O Hero utiliza `fetchpriority="high"` e `loading="eager"`.
- As seções de serviços utilizam `loading="lazy"` e `decoding="async"`.
- Legendas não sobrepõem as fotos; são renderizadas como barras estruturadas de alto contraste (`#CBD5E1` sobre fundo escuro `rgba(17,24,32,0.95)`), garantindo legibilidade e conformidade WCAG AAA (12.03:1).
- O layout da seção de loja física foi dissociado de fotografias de oficinas fictícias, utilizando tipografia e diagramação estruturada de endereço, horários e serviços de balcão.
