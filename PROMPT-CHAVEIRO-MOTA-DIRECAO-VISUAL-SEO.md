# Chaveiro Mota — composição própria, conteúdo útil e SEO local

Complemento posterior: leia também `PROMPT-CHAVEIRO-MOTA-PREFERENCIAS-CLIMABLU.md`, que adapta preferências específicas da usuária sobre botões, dinamismo, agrupamento de links, horários e rodapé. Preserve os princípios editoriais deste prompt e use cards compactos somente onde o complemento identifica função útil; não retornar à embalagem repetitiva anterior.

Continue o projeto em `F:\Solara\coding\sites-ladingpage-etc\chaveiro-mota-site`. A base funcional já foi corrigida e deve ser preservada. A usuária ainda rejeita o aspecto genérico da composição. Sua tarefa é executar uma melhoria estrutural do visual e do conteúdo, com uma arquitetura de SEO local bem fundamentada, mantendo Astro, dados confirmados, marca e ativos atuais.

Não encerre com sugestões. Implemente, compare o resultado em desktop e mobile e conclua a verificação. Trabalhe em etapas internas, preservando o estado em andamento; não reconstrua tudo nem espere nova aprovação para escolhas rotineiras dentro deste escopo.

## Material disponível localmente

Leia as orientações do projeto, `FONTES.md`, `DECISIONS.md`, `IMAGE_ASSETS.md`, `RELATORIO-QA.md`, `SEO-PESQUISA-CHAVEIRO-MOTA.md` e o código atual. Os prompts anteriores documentam correções; não mantenha automaticamente uma composição que a usuária está rejeitando.

As referências do Drive estão copiadas em `references/drive-design/`. Leia `LEIA-REFERENCIAS.md`, depois as partes pertinentes de `oficina.md`, `esquadrias.md` (especialmente refinamentos 07–09), `portfolio.md` e `mockup.md`. São fontes de métodos, não um mockup aprovado do Chaveiro Mota nem ordens para copiar marcas ou serviços de outra empresa. Não publique textos de exemplo ou publicidade dos materiais. Adapte princípios de proporção, fotografia, assimetria, identidade e validação.

Use a Impeccable em `C:\Users\isand\.agents\skills\impeccable\SKILL.md` ou a instalação reconhecida no Antigravity, e as skills globais `agencia-sites-pro`, `solara-webcraft`, `direcao-visual`, `arquitetura-site`, `copy-site`, `seo-local`, `acessibilidade-web`, `performance-web` e `qa-e-teste` em `C:\Users\isand\.gemini\config\skills`. Leia e aplique procedimentos relevantes, sem carregar toda a biblioteca. Preserve instruções atuais da usuária acima das referências.

## Diagnóstico que deve orientar a mudança

O acabamento anterior resolveu erros, mas manteve uma fórmula repetitiva: hero dividido em dois retângulos, serviços em cards iguais, loja e horários em várias caixas, processo numerado numa grande caixa e FAQ abaixo. Kicker pequeno, título bold e parágrafo cinza se repetem em quase toda seção. A paleta navy/cinza azulado se parece com um produto SaaS, embora a marca tenha preto e amarelo. As fotos ficam encaixadas em molduras e a assinatura da empresa é pequena diante dos componentes.

O objetivo é um site de serviço local técnico e direto, com linguagem de sinalização de oficina e composição editorial. Faça a mudança aparecer na estrutura e nos alinhamentos, não apenas no raio, sombra ou fonte. Não acrescente efeitos para tentar compensar conteúdo genérico.

## Direção visual executável

### Identidade e escala

Preserve a assinatura tipográfica existente “CHAVEIRO MOTA”, preta sobre amarelo, em duas linhas. A marca já existe no Wix; não gere outra logo. Mantenha amarelo sólido como acento, carvão/preto neutro nas áreas escuras e um branco levemente quente nas áreas claras. Reduza os cinzas azulados e não introduza uma paleta de outra empresa.

Use um mesmo eixo de alinhamento e container fluido. Comece avaliando 1240–1320 px em desktop, com crescimento moderado em telas grandes e 20–24 px de margem mobile. São pontos de partida; compare proporções na mesma largura, sem zoom/scale artificial. Defina tokens coerentes, alterando regras originais em vez de acumular overrides.

Escolha uma hierarquia tipográfica clara. A família atual pode ser mantida se funcionar: trocar Inter não remove sozinho a genericidade. H1 deve dominar o hero; títulos secundários têm peso e escala distintos. Corpo 16–18 px, linha confortável e largura de leitura limitada. Não usar tracking exagerado, fonte condensada artificialmente, scaleX, glow ou excesso de rótulos em maiúsculas.

### Cabeçalho e hero

- Uma linha de header: marca legível à esquerda, três caminhos principais (Serviços, Loja, Dúvidas), contato à direita. O processo não precisa competir como quarto link. Reposicione informações úteis da topbar para suas seções e evite repetir a mesma urgência em quatro lugares.
- Hero com carvão neutro, texto aproximadamente 55% e foto 45%, alinhados com intenção. Preserve o H1 factual “Chaveiro 24 horas em Joinville”, com quebras naturais e destaque amarelo em “24 horas”. Avalie escala 68–80 px em desktop e 40–46 px mobile, ajustada à largura real.
- Apoio direto: “Abertura de veículos e residências, chaves automotivas e serviços de fechaduras.” Localidade pode aparecer em linha curta, sem repetir Joinville em toda frase.
- WhatsApp principal e telefone alternativo reconhecível. A decisão de contato deve estar visível cedo no mobile. Preserve destinos e mensagens corretas.
- Aumente a presença da foto de bancada, sem card externo, sombra ou moldura pesada. Preserve foco e proporção da imagem; não imponha fundo full-bleed que torne texto ilegível. A imagem continua ilustrativa.
- Plantão móvel e expediente de balcão ficam numa área operacional leve, com filete e texto. Evite chips e pontos vermelhos que pareçam estado “aberto agora” calculado em tempo real. Informe o regime real, não presença atual do profissional.

### Serviços em duas faixas abertas

Substitua os dois grandes cards iguais por duas composições complementares. Automotivo com imagem e conteúdo; residencial com posição visual invertida no desktop. Sem borda externa, fundo próprio ou embalagem arredondada em cada faixa. Use escala útil de fotografia e divisórias discretas nas especialidades.

Mantenha os nomes técnicos visíveis e semânticos: “Chaveiro automotivo em Joinville” e “Chaveiro residencial em Joinville”. Uma frase curta como “Para o seu veículo” pode apoiar a narrativa, mas não substituir a informação de serviço. Preserve categorias confirmadas; reduza apenas descrições redundantes. Troque checks repetidos por listas bem desenhadas. Cada grupo tem contato contextual e um link claro para sua página detalhada.

No mobile, use a mesma ordem semântica para ambos: título, foto, lista e ação. A inversão desktop não deve produzir uma ordem de leitura confusa. Evite esconder texto útil para economizar altura.

### Loja como assinatura amarela

Transforme a localização num bloco amplo com amarelo da marca e texto preto, em vez de uma grade navy de cartões. Endereço e “No Jarivatuba” ganham prioridade, com link de mapa real. Ao lado, expediente e serviços de balcão em lista tipográfica. Separe plantão 24h e expediente físico por rótulos e alinhamento, sem encaixotar cada horário.

Preserve Rua Agulhas Negras, 1530 — Jarivatuba, Joinville/SC; segunda a sexta, 9h–12h e 14h–18h. Não invente mapa, geolocalização, CEP, disponibilidade dinâmica ou fotografia da fachada.

### Orientação, FAQ e encerramento

Substitua a grande caixa de etapas 01/02/03 por um bloco compacto “Para solicitar atendimento”, com serviço, localização e modelo do veículo quando aplicável. Ao lado, FAQ nativo com dúvidas reais. Agrupe FAQ e orientação sem repetir um manual de atendimento.

Rodapé curto com marca, contato e navegação essencial. Mantenha legenda discreta de imagem ilustrativa, legível abaixo das figuras, sem faixas exageradas. Microinterações curtas em foco/hover, conteúdo visível sem JS e prefers-reduced-motion. Não usar parallax, cursor personalizado, texto com entrada atrasada ou animações contínuas.

## Arquitetura de SEO fundamentada

Leia o mapa com títulos, descrições e contagem de caracteres em `SEO-PESQUISA-CHAVEIRO-MOTA.md`. A Keyword Tool retornou sugestões locais, mas não forneceu volumes, dificuldade orgânica, posição atual ou tendência. Não invente essas métricas nem declare termos “mais buscados”. Os resultados vieram com país Global/Worldwide e foram filtrados para Joinville/Jarivatuba; ignore concorrentes, cursos e cidades irrelevantes.

Implemente quatro páginas comerciais úteis, com intenção distinta:

| Rota | Intenção principal | Conteúdo específico |
|---|---|---|
| `/` | Chaveiro 24 horas em Joinville e marca | Urgência, serviços resumidos, Jarivatuba, contato e distinção plantão/loja |
| `/chaveiro-automotivo-joinville/` | Chaveiro automotivo em Joinville | Abertura de veículos, chaves codificadas/de presença, controles e ignição; dados úteis para consultar compatibilidade |
| `/chaveiro-residencial-joinville/` | Chaveiro residencial em Joinville | Aberturas, fechaduras, chaves residenciais, controles de portão e cofres; como informar a necessidade |
| `/copia-de-chaves-joinville/` | Cópia de chaves em Joinville/Jarivatuba | Tipos confirmados, endereço, expediente de balcão e consulta pelo contato |

As páginas detalhadas devem ajudar o visitante a decidir e solicitar o serviço. Faça introdução própria, lista específica, condições que precisam ser consultadas, localização, dúvidas pertinentes e contato. Não copie a home inteira nem troque só o título. Não existe contagem mínima de palavras a perseguir. Não crie um blog genérico ou uma página por bairro para multiplicar palavras-chave.

Use identidade compartilhada e composições simples para essas rotas; não repita o hero alto da home em todas. Preserve um H1 por página, títulos/meta descriptions únicos, breadcrumb de verdade e links internos HTML entre home, serviços e loja. A home deve continuar enxuta. Use âncoras descritivas naturais, sem adicionar “Joinville” a cada botão ou alt.

Mantenha conteúdo importante no HTML estático gerado, acessível mesmo sem JS. Imagens têm alt descritivo do que mostram, não lista de keywords. Não adicione meta keywords, texto invisível ou nomes de concorrentes. “Perto de mim” e “abertos agora” são intenções identificadas na pesquisa, não frases para repetir nem autorização para dizer que a loja abre 24h.

## SEO técnico e publicação

- Origem canônica única por ambiente, via `SITE_URL`/configuração existente. No domínio oficial, canonical autorreferente em cada página, OG/twitter absolutos e consistentes. Nunca canonicalizar todas as rotas para a home. Publicação sem origem válida deve falhar de forma clara.
- Separe modo demonstração e modo oficial. Demonstração permanece noindex; domínio oficial autorizado deve permitir indexação das páginas comerciais. 404 continua noindex e HTTP 404 em ambos. Não bloquear crawling no robots.txt de modo que o Google não consiga ler noindex. A demonstração não vai ganhar ranking enquanto estiver noindex.
- Gere sitemap absoluto com páginas canônicas indexáveis somente para o ambiente oficial; nada de localhost, 404, arquivos de pesquisa ou URLs duplicadas. Robots e meta/header devem concordar. Verifique resposta HTTP e HTML após deploy autorizado.
- Preserve Locksmith/LocalBusiness com nome, telefone e endereço confirmados; expediente da loja deve continuar separado do plantão. Adicione URL/@id estáveis na origem real e Service/BreadcrumbList nas rotas pertinentes quando consistentes com o conteúdo visível. Não criar avaliações, estrelas, coordenadas, preços, logo oficial inexistente ou sameAs presumido. FAQ deve ser útil por si só; não vender schema como garantia de resultado rico.
- Antes de migrar o Wix, documente URLs antigas e correspondência com as novas. Redirecionamentos permanentes dependem de controle real do endereço antigo; não declarar que Vercel pode redirecionar uma URL Wix sem acesso a ela. Preserve conteúdo e links importantes. Prepare plano de migração, sem alterar DNS/site antigo por inferência.
- Prepare checklist de Search Console e Perfil da Empresa: domínio, sitemap, inspeção de URL, NAP, link do site e horários. Execute somente se houver acesso e autorização existentes; se não houver, registre pendências operacionais. Não inventar avaliações ou enviar solicitações de review automaticamente.
- Meça performance de laboratório, imagens, fontes, carregamento do hero e estabilidade visual se tiver ferramenta disponível. Registre método, viewport e limitações; não declarar Core Web Vitals de campo com teste local.

## Fatos e recursos preservados

Telefone `(47) 99721-7584`, WhatsApp `5547997217584`, endereço e horários de `FONTES.md`. Preserve categorias do Wix e orçamento sem compromisso. Compatibilidade, preço, tempo de chegada e horário excepcional são consultados no contato; não invente garantias, equipe, experiência, avaliações, CNPJ, redes sociais, PIX, CEP ou áreas físicas.

Reutilize as três imagens de `assets/revisao-codex-v2` e derivados públicos. Não gere outra rodada de fotos apenas para ornamentar novas páginas; nem toda seção precisa de foto. A bancada ilustra o serviço, não comprova as instalações da empresa. Preserve originais, proporções e legendas; reveja sizes/srcset conforme a nova composição real, inclusive alta densidade.

## Validação e conclusão

A última auditoria confirmou build, 8 testes e sete viewports passando; menu/inert/resize/404 estão corrigidos. Preserve essas conquistas e adapte testes às novas rotas/composição, sem congelar CSS antigo nem validar apenas presença de strings.

Confirme todas as rotas e links, 404 real, H1/title/description/canonical por URL, JSON-LD, sitemap/robots nos dois modos, ausência de contatos inventados e origem correta de metadados. O contrato atual testa `SITE_URL` de modo incompleto e não cobre igualmente `PUBLIC_SITE_URL`; corrija ambos e teste a origem efetiva. O QA de contraste usa primeiros seletores e não compõe alfa corretamente; valide as novas superfícies efetivamente renderizadas e os estados, registrando a limitação se não medir tudo.

Compare capturas equivalentes antes/depois em 1440 e 390 px, além de 360/414/768/1024, paisagem e zoom de 200%. Confira menu, foco, redução de movimento, barra inferior, safe-area, âncoras e fotos. Faça uma rodada desktop/mobile conjunta, corrija em lote e confirme uma vez. Não fique produzindo versões infinitas.

Execute os comandos reais do projeto, atualize documentação e entregue resumo de mudanças perceptíveis, resultados, URL realmente verificada e pendências de publicação. A implementação deve mostrar serviços sem os cards externos anteriores, hero com hierarquia mais forte, localização com assinatura amarela e conteúdo SEO específico. Um relatório dizendo “premium” não substitui essas mudanças visíveis.

Não prometa primeira posição, prazo de ranking, tráfego ou conversão. O Google também considera distância e notoriedade no resultado local. O trabalho é melhorar relevância, clareza e capacidade técnica de indexação, com acompanhamento após o lançamento. Siga as autorizações existentes para deploy; este prompt não autoriza domínio pago, DNS, mensagens, migração do Wix ou alterações externas não solicitadas.
