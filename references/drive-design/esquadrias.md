# Prompts para sites de esquadrias e vidraçarias

Guia reutilizável para VS Code + Antigravity ou outro assistente de desenvolvimento.

Reúne a sequência de construção do site, os refinamentos de layout e espaçamento, as duas opções de rodapé e os briefs de imagens, identidade e mockups. Os prompts foram adaptados para outras empresas do segmento; não são uma transcrição literal da conversa.

## Como usar

1. Preencha a ficha abaixo com os dados confirmados da nova empresa.
2. Anexe a ficha preenchida, a logo oficial e o mockup aprovado ao assistente de desenvolvimento.
3. Execute um prompt por vez. Em cada etapa, anexe também as fotografias indicadas e, se disponível, um recorte da dobra.
4. Compare o resultado com a referência na mesma largura de tela antes de avançar.
5. Use os prompts de refinamento somente quando houver diferenças concretas. Eles não precisam ser executados automaticamente.
6. Escolha um rodapé: o básico da etapa 05 ou a alternativa detalhada da etapa 09. Não implemente os dois simultaneamente.

Os campos `[[CAMPO]]` são variáveis a substituir. Nunca publique esses marcadores. Não reutilize dados, tempo de mercado, contatos ou imagens de obras de outra empresa como se fossem da nova marca.

## Ficha de personalização

| Campo | Preencher com |
|---|---|
| `[[MARCA]]` | Nome comercial oficial |
| `[[CIDADE]]` | Cidade da empresa |
| `[[UF]]` | Sigla do estado |
| `[[REGIAO]]` | Região de atendimento confirmada |
| `[[TELEFONE_EXIBICAO]]` | Telefone formatado para exibição |
| `[[WHATSAPP_URL]]` | URL completa do WhatsApp, com código do país e DDD |
| `[[INSTAGRAM_URL]]` | URL oficial do Instagram |
| `[[FACEBOOK_URL]]` | URL oficial do Facebook, se houver |
| `[[INSTAGRAM_USUARIO]]` | Identificador com @ |
| `[[DOMINIO]]` | Domínio definitivo, quando confirmado |
| `[[PRIVACIDADE_URL]]` | Destino real da política de privacidade |
| `[[SOBRE_DESTINO]]` | Página institucional ou perfil oficial para o link Conheça a empresa |
| `[[COR_ACENTO]]` | Cor principal de destaque da marca em hexadecimal |
| `[[COR_ACENTO_TEXTO]]` | Variação da cor da marca com contraste adequado sobre branco |
| `[[COR_ESCURO]]` | Cor escura usada nas seções de contraste |
| `[[FONTE]]` | Família tipográfica aprovada e disponível |
| `[[HERO_EYEBROW]]` | Especialidade e localização em uma frase curta |
| `[[HERO_TITULO]]` | Promessa principal aprovada |
| `[[HERO_DESCRICAO]]` | Descrição curta da proposta da empresa |
| `[[SOBRE_TEXTO]]` | Texto institucional com fatos confirmados |
| `[[MARCA_DESCRICAO]]` | Descrição curta para o rodapé, em até duas linhas |
| `[[DIFERENCIAL_1_TITULO]]` e `[[DIFERENCIAL_1_TEXTO]]` | Primeiro diferencial real |
| `[[DIFERENCIAL_2_TITULO]]` e `[[DIFERENCIAL_2_TEXTO]]` | Segundo diferencial real |
| `[[DIFERENCIAL_3_TITULO]]` e `[[DIFERENCIAL_3_TEXTO]]` | Terceiro diferencial real |
| `[[SOLUCAO_1]]` a `[[SOLUCAO_4]]` | Quatro soluções realmente oferecidas |
| `[[MONOGRAMA]]` | Letra ou símbolo escolhido da logo para o favicon |

Sugestões de soluções, sujeitas à confirmação: esquadrias em alumínio; fachadas em vidro; vidros e box; portas internas. Ajuste os nomes e as fotografias ao catálogo da empresa.

Sugestões opcionais de copy, sem dados específicos de uma marca:

- Título do hero: “Design que valoriza. Qualidade que permanece.”
- Descrição: “Esquadrias sob medida para transformar seu projeto em um lugar especial.”
- Diferencial: “Soluções sob medida”, quando confirmado.
- Outro diferencial: “Projetos residenciais e comerciais”, quando confirmado.

Se um dado obrigatório estiver ausente, registre a pendência. Se uma rede social não existir, omita o respectivo botão. Não invente anos de mercado, garantias, certificações, endereço ou avaliações.

## Organização sugerida das imagens

Os nomes abaixo são neutros e podem ser adaptados à estrutura do projeto.

| Arquivo | Uso |
|---|---|
| `logo-principal.png` | Logo oficial para fundos claros |
| `logo-branca.png` | Logo oficial para fundos escuros |
| `hero.png` | Hero e, com outro recorte, card de esquadrias |
| `fachada.png` | Card de fachadas e primeira fotografia de galeria |
| `box.png` | Card de vidros e box |
| `porta-interna.png` | Card de portas internas |
| `varanda.png` | Segunda fotografia de galeria |
| `detalhe-esquadria.png` | Seção Sobre |
| `favicon.png` | Símbolo quadrado do site |

Preserve os originais. Gere formatos otimizados para publicação sem substituir os arquivos-fonte. Fotografias geradas são ilustrativas; para apresentar obras realizadas, use fotografias reais e autorizadas da empresa.

---

## 01 — Estrutura visual, header, hero e faixa de confiança

**Anexar:** ficha preenchida, logo oficial, mockup desktop e `hero.png`.

```text
Atue como desenvolvedor front-end sênior especializado em reprodução fiel de interfaces.

Vamos construir o site institucional de [[MARCA]], em [[CIDADE]]/[[UF]], por etapas. Use a ficha de personalização preenchida e o mockup desktop aprovado como referências.

Nesta etapa, implemente somente a estrutura base, o header, o hero e a faixa de confiança.

EXECUÇÃO
Inspecione o projeto antes de editar. Preserve a stack existente. Se a pasta estiver vazia, use HTML semântico, CSS e JavaScript modular, adequados a um site institucional estático.
Implemente diretamente nos arquivos; não entregue apenas sugestões.
O mockup orienta o layout, mas não pode substituir a página como uma imagem. Textos, botões e navegação devem ser elementos reais.

DIRETRIZES PERMANENTES
- Preserve composição, hierarquia e proporções do mockup.
- Use as fotografias individuais fornecidas.
- Não acrescente seções, efeitos decorativos ou afirmações comerciais sem solicitação.
- Preserve as dobras aprovadas nas próximas etapas.
- Organize componentes e estilos por seção, evitando alterações globais acidentais.
- Não publique automaticamente.

BASE VISUAL
Use branco, [[COR_ESCURO]], [[COR_ACENTO]] e cinzas com contraste adequado.
Use [[COR_ACENTO_TEXTO]] para pequenos textos sobre branco quando necessário.
Carregue efetivamente [[FONTE]] e seus pesos. Não comprima letras com transformações.
Botões com cantos discretos e sem sombras pesadas.
Em 1440px, comece com container central próximo de 1240–1280px. Ajuste pela comparação visual, mantendo os mesmos eixos nas seções.

HEADER
- Fundo branco e altura inicial de 80–92px, ajustável à referência.
- Logo oficial à esquerda, com proporção e desenho preservados.
- Considere as margens transparentes internas do arquivo ao dimensionar a marca.
- Links: Início, Soluções, Projetos e Sobre.
- Botão escuro “Solicitar orçamento” à direita, com ícone correto do WhatsApp.
- No celular: logo e menu compacto que abre, fecha e funciona por teclado.

HERO
- Imagem hero.png, em largura total, sem moldura externa.
- Altura desktop inicial próxima de 560px, ajustável ao mockup.
- Preserve o assunto da foto e a área de leitura.
- Escurecimento em CSS concentrado atrás do texto, diminuindo na direção da arquitetura.
- Não aplique blur nem duplique camadas de escurecimento.

Conteúdo:
Eyebrow: [[HERO_EYEBROW]]
H1: [[HERO_TITULO]]
Descrição: [[HERO_DESCRICAO]]
Botão: “Solicitar meu orçamento”
Link secundário: “Conheça nossas soluções”

Ajuste as quebras do título por largura; não copie quebras do desktop para o mobile indiscriminadamente.

FAIXA DE CONFIANÇA
Fundo branco, três itens com ícones lineares e separadores discretos:
1. [[DIFERENCIAL_1_TITULO]] — [[DIFERENCIAL_1_TEXTO]]
2. [[DIFERENCIAL_2_TITULO]] — [[DIFERENCIAL_2_TEXTO]]
3. [[DIFERENCIAL_3_TITULO]] — [[DIFERENCIAL_3_TEXTO]]
No celular, empilhe os três itens em linhas alinhadas.

FUNCIONALIDADE
Centralize os dados de contato:
Telefone: [[TELEFONE_EXIBICAO]]
WhatsApp: [[WHATSAPP_URL]]
Mensagem: “Olá! Vim pelo site de [[MARCA]] e gostaria de solicitar um orçamento.”
Codifique a mensagem na URL e conecte a navegação aos IDs das seções à medida que forem implementadas.

CONFERÊNCIA
Abra no navegador, se disponível. Compare largura da logo, altura do header, enquadramento do hero, quebras de texto, botões e faixa de confiança.
Verifique 1440px e 390px. Não use overflow-x: hidden para disfarçar problemas de largura.
Informe arquivos alterados, verificações e diferenças restantes. Não avance para outras dobras.
```

## 02 — Nossas soluções

**Anexar:** mockup desktop e fotografias das quatro soluções.

```text
Continue o site de [[MARCA]] seguindo as diretrizes da etapa anterior. Implemente somente Nossas soluções, abaixo da faixa de confiança.
Preserve as áreas já aprovadas.

REFERÊNCIA
Reproduza a seção branca com apresentação editorial e quatro colunas fotográficas. Não transforme os itens em caixas com sombras, fundos coloridos ou grandes bordas arredondadas.
Use o mesmo container e os mesmos alinhamentos.

CABEÇALHO
Eyebrow: “NOSSAS SOLUÇÕES”
Título: “Cada detalhe faz parte do seu projeto.”
Apoio: “Funcionalidade e estética em soluções para diferentes ambientes.”
Desktop: título à esquerda e apoio à direita. Mobile: textos empilhados.

ITENS
1. [[SOLUCAO_1]] — hero.png; destaque os perfis e as portas, não apenas o jardim.
2. [[SOLUCAO_2]] — fachada.png; preserve o volume principal e o encontro dos vidros.
3. [[SOLUCAO_3]] — box.png; destaque a solução e seus acabamentos.
4. [[SOLUCAO_4]] — porta-interna.png; preserve a porta e a maçaneta.
Se a ficha usar outro catálogo, utilize as imagens correspondentes, sem apresentar um produto diferente do título.

ESTRUTURA
- Quatro colunas iguais no desktop.
- Fotografias com alturas consistentes e proporções próximas ao mockup.
- Títulos alinhados abaixo das imagens.
- Link “Saiba mais →” abaixo de cada título.
- Espaçamento horizontal inicial de 18–24px.
- object-fit: cover e object-position individual por fotografia.
- Nenhuma imagem deformada para caber no card.

Cada link deve abrir [[WHATSAPP_URL]] com mensagem referente à solução:
“Olá! Vim pelo site de [[MARCA]] e gostaria de saber mais sobre [nome da solução].”

INTERAÇÕES
Hover discreto: ampliação da fotografia de no máximo 3%, contida no recorte, e destaque no link. Inclua foco visível.
Tablet: duas colunas quando adequado. Celular: uma coluna com imagens de altura suficiente; evite faixas panorâmicas muito baixas.

CONFERÊNCIA
Compare alinhamentos, proporções das fotos, distância entre cabeçalho e grid e posição dos links.
Teste as quatro mensagens de WhatsApp. Confirme que as seções anteriores não foram alteradas.
```

## 03 — Projetos e referências

**Anexar:** mockup, `fachada.png` e `varanda.png`, ou fotos reais equivalentes.

```text
Continue o site de [[MARCA]]. Implemente somente a seção de projetos e referências, abaixo de Nossas soluções.
Preserve todas as áreas anteriores.

COMPOSIÇÃO
Fundo [[COR_ESCURO]] em toda a largura. Conteúdo alinhado ao container principal.
Eyebrow em [[COR_ACENTO]], título branco e duas fotografias grandes lado a lado, com larguras próximas de 58% e 42% e alturas iguais.

TEXTOS
Eyebrow: “INSPIRAÇÃO EM CADA ENTREGA”
Título: “Seu próximo projeto começa com uma boa referência.”
Link: “Ver projetos →”
Foto esquerda: fachada.png; legenda “Amplitude e luz natural”.
Foto direita: varanda.png; legenda “Acabamentos que fazem a diferença”.

Use legendas na base das fotos com contraste discreto. Não escureça toda a imagem.
Se as imagens forem ilustrativas, apresente a seção como referências de soluções: adapte o eyebrow para “INSPIRAÇÃO PARA SEU PROJETO” e o link para “Ver referências →”. Não invente clientes, endereços ou afirmações de autoria das obras.

FUNCIONALIDADE
O link leva à galeria desta seção. Selecionar uma foto abre sua versão ampliada, sem distorção, em visualizador acessível.
Inclua botão de fechar, Escape e retorno do foco ao elemento de origem.
Não acrescente fotografias inventadas ou repetidas para preencher espaço.

MOBILE
Empilhe título, link e fotografias. Preserve os assuntos principais e a legibilidade das legendas.

CONFERÊNCIA
Verifique a transição entre fundos, proporção das imagens, contraste do link e espaçamento interno.
Teste abertura, fechamento e navegação por teclado.
```

## 04 — Sobre a empresa

**Anexar:** mockup e `detalhe-esquadria.png`.

```text
Continue o site de [[MARCA]]. Implemente somente a seção Sobre, abaixo da galeria.
Preserve as demais dobras.

LAYOUT
Fundo branco; fotografia à esquerda e texto à direita. Colunas próximas de 50%/50%, alinhamento vertical cuidadoso e espaçamento compacto.
Use detalhe-esquadria.png em enquadramento horizontal, com a maçaneta e o perfil em evidência. Não corte a ponta da maçaneta.

CONTEÚDO
Eyebrow: “SOBRE [[MARCA]]”
Título: “Precisão no detalhe. Cuidado em cada projeto.”
Texto: [[SOBRE_TEXTO]]
Link: “Conheça [[MARCA]] →”
Destino: [[SOBRE_DESTINO]]

Se o destino for externo, abra em nova aba com atributos de segurança apropriados.
Não acrescente números de obras, anos de mercado, certificações ou depoimentos que não estejam na ficha.

MOBILE
Uma coluna na ordem: imagem, eyebrow, título, texto e link.
Não comprima foto e texto lado a lado no celular.

VALIDAÇÃO
Compare altura da seção, proporção entre imagem e texto, quebras do título e consistência da tipografia.
```

## 05 — CTA final e rodapé básico

**Anexar:** mockup desktop e logo branca. Alternativa: usar diretamente a etapa 09 para o rodapé final.

```text
Continue o site de [[MARCA]]. Implemente a faixa de contato e o rodapé básico conforme o mockup escolhido.
Preserve as seções anteriores.

FAIXA DE CONTATO
Fundo [[COR_ACENTO]] em largura total.
Desktop: título à esquerda, apoio ao centro e botão à direita.
Título: “Vamos dar forma ao seu projeto?”
Apoio: “Converse com nossa equipe e solicite seu orçamento.”
Botão escuro: “Falar no WhatsApp →”, com ícone correto.
Use [[WHATSAPP_URL]] e a mensagem centralizada do projeto.
Mantenha a faixa compacta; separadores, se presentes na referência, devem ser discretos.

RODAPÉ
Fundo [[COR_ESCURO]] uniforme, sem brilhos ou gradientes decorativos. Mesmo container do site.
Três colunas, aproximadamente 40%/24%/36%, descontando os gaps e ajustando para o telefone caber.

COLUNA 1
Logo oficial branca.
Descrição: [[MARCA_DESCRICAO]]
Ícones de Instagram e Facebook em pequenos botões de contorno.
Texto: [[INSTAGRAM_USUARIO]]
Destinos: [[INSTAGRAM_URL]] e [[FACEBOOK_URL]].
Omita redes não existentes.

COLUNA 2
Título: “EXPLORE”
Links: Início; Nossas soluções; Projetos; Sobre [[MARCA]].
Conecte aos IDs reais das seções.

COLUNA 3
Título: “FALE COM [[MARCA]]”
Telefone: [[TELEFONE_EXIBICAO]]
Texto: “Converse sobre o seu projeto →”
Localização: [[CIDADE]] • [[UF]]
Telefone com destaque, sem compressão de fonte ou cortes.

BASE
Linha horizontal discreta.
Esquerda: “© [[MARCA]]. Todos os direitos reservados.”
Direita: “Política de privacidade”, conectada a [[PRIVACIDADE_URL]].
Se a política não existir, registre a pendência para publicação, sem inventar dados nem criar destino que resulte em erro.

MOBILE
CTA em uma coluna com botão amplo. Rodapé na ordem: marca/redes; navegação; contato; base.
Remova separadores verticais e evite espaços excessivos.

CONFERÊNCIA
Compare tamanho da logo, início das colunas, telefone, espaços e altura total. Teste os links disponíveis.
```

## 06 — Revisão visual, mobile e preparação técnica

**Anexar:** mockup desktop aprovado, referência mobile e captura atual.

```text
Faça a revisão final do site de [[MARCA]]. O desktop aprovado é a referência principal.
Corrija divergências localizadas sem redesenhar o site.

VISUAL
Compare container, alinhamentos entre dobras, altura do header/hero, títulos, cores, recortes das fotos, espaçamento e proporções do CTA/rodapé.
Não resolva diferenças comprimindo elementos ou reduzindo todas as fontes.

RESPONSIVIDADE
Confira larguras de 1440, 1024, 768, 430, 390 e 360px.
No celular: menu acessível; hero legível; confiança empilhada; serviços em uma coluna; projetos empilhados; Sobre com foto acima; CTA amplo; rodapé em grupos verticais.
Elimine textos cortados, telefone quebrado incorretamente e rolagem horizontal.
A referência mobile orienta a hierarquia; corrija limitações do mockup para garantir usabilidade real.

INTERAÇÕES
Transições discretas em links e botões. Entrada suave das seções, com deslocamento pequeno e sem atrasar leitura.
Respeite prefers-reduced-motion. Conteúdo visível se JavaScript falhar.
Não adicione parallax, cursor personalizado ou animações contínuas não previstas.

IMAGENS
Preserve originais. Gere WebP/AVIF quando houver ferramentas disponíveis, sem perder a definição dos perfis e linhas finas.
Não amplie artificialmente arquivos para alegar resolução maior.
Use tamanhos responsivos, width/height ou aspect-ratio para evitar saltos.
Priorize o hero; lazy loading nas imagens abaixo da primeira dobra.
Confira todos os arquivos no build final.

ACESSIBILIDADE E METADADOS
Documento pt-BR; um H1; hierarquia de títulos; textos alternativos; foco visível; contraste; menu e galeria por teclado.
Título sugerido: “[[MARCA]] | Esquadrias e Vidros em [[CIDADE]]”. Ajuste ao catálogo real.
Descrição: sintetize as soluções confirmadas e convide a solicitar orçamento.
Use [[DOMINIO]] somente quando confirmado. Não invente endereço, avaliações, certificações ou dados estruturados.

BUILD E CAMINHOS
Valide caminhos públicos conforme stack e hospedagem. Não use caminhos locais do Windows, referências à pasta src no HTML publicado ou capitalização inconsistente.
Se houver bundler, respeite os caminhos gerados por ele.
Execute o build aplicável e sirva sua saída localmente. Verifique CSS, JS, fontes e imagens sem erros 404.
Teste navegação, WhatsApp e recarregamento.
Não publique automaticamente.

ENTREGA
Informe correções, larguras e funcionalidades verificadas, resultado do build e pendências reais.
Inclua domínio, privacidade e fotos de obras reais quando ainda pendentes. Não alegue verificações que não conseguiu executar.
```

---

## 07 — Refinamento visual após a primeira implementação

**Usar quando:** o resultado existe, mas está distante do mockup. **Anexar:** print atual e referência aprovada.

```text
Atue como especialista sênior em refinamento visual. Aproxime o site de [[MARCA]] do mockup aprovado com ajustes de proporção, enquadramento, espaçamento e legibilidade.
Identifique os anexos antes de editar. Preserve estrutura, identidade, copy e funcionalidades.

DIAGNÓSTICO
Inspecione container, largura máxima, padding lateral, fonte raiz, zoom/transform, carregamento e pesos de [[FONTE]], alturas, proporções das imagens, breakpoints e sobrescritas.
Compare em larguras equivalentes. Não deduza pixels CSS diretamente de um print reduzido.
Corrija causas; evite !important e overrides sucessivos.

AMPLITUDE
Se o conteúdo estiver estreito, ajuste o container fluidamente. Em 1440px, avalie 1240–1280px; em telas maiores permita crescimento moderado. Mobile: margens de 20–24px.
Alinhe header, hero, soluções, galeria, Sobre, CTA e rodapé ao mesmo eixo.
Não use zoom ou transform: scale para ampliar a página.

HEADER
Se a logo estiver pequena, avalie largura visível de 160–190px, considerando margens transparentes internas. Preserve proporção e mantenha o header compacto.

HERO
Concentre o overlay atrás do texto e reduza gradualmente sobre a arquitetura. Verifique escurecimento duplicado em filtros e pseudo-elementos.
Recupere luminosidade da fotografia sem perder contraste. Ajuste recorte e quebras do título por largura, sem comprimir letras.

CONFIANÇA
Se a faixa estiver ausente, verifique omissão, CSS, sobreposição e animação não concluída. Restaure sem duplicar, usando os três diferenciais confirmados da ficha.

TIPOGRAFIA
Revise tamanhos reais. Pontos iniciais: leitura 16–18px; navegação/links 14–16px; títulos de serviços 17–20px; eyebrows 12–13px.
Use pesos carregados. Não aplique opacidade ao container inteiro.
Sobre branco, use [[COR_ACENTO_TEXTO]] para textos pequenos. Sobre escuro, links legíveis em branco ou [[COR_ACENTO]]. Corrija especialmente “Ver projetos” se estiver apagado.

SOLUÇÕES
Preserve quatro colunas editoriais. Reequilibre largura dos cards, altura das fotos, posições de recorte e alinhamento dos títulos/links. Evite caixas e elementos adicionais.

PROJETOS
Preserve assimetria e alturas iguais. Ajuste contraste do link, distância título/galeria, legendas e padding.
Se a segunda foto repetir o hero sem necessidade, use varanda.png quando disponível.

SOBRE
Se estiver muito alta, use foto horizontal entre 16:10 e 16:9, preservando a maçaneta. Texto centralizado verticalmente e padding controlado. Mobile com imagem acima.

CTA/RODAPÉ
Preserve a composição; refine leitura, botão, colunas, logo, linha inferior e contraste. Evite alturas fixas ou espaços artificiais para preencher a seção.

VALIDAÇÃO
Confira 1440, 1920 e 390px; ausência de cortes, distorções e rolagem horizontal; funcionamento de menu/links; conteúdo visível sem animações.
Se houver navegador, capture e compare. Informe causas, correções, verificações e diferenças restantes. Não publique nem adicione seções.
```

## 08 — Redução do espaçamento entre dobras

**Usar quando:** houver espaço vazio excessivo. **Anexar:** captura atual completa.

```text
Refine o espaçamento vertical do site de [[MARCA]]. Aproxime as seções mantendo separação visual confortável e preservando layout, cores, fontes, textos, imagens e funcionalidades.

DIAGNÓSTICO
Inspecione padding, margin, gap, height e min-height.
Verifique padding inferior somado ao superior seguinte, margens padrão, wrappers vazios, alturas fixas e elementos invisíveis ocupando espaço.
Corrija regras originais. Não use margens negativas ou transformações para esconder o problema.

PONTOS DE PARTIDA
Desktop:
- Seções principais: padding superior/inferior 48–56px.
- Eyebrow até título: 10–12px.
- Título até descrição: 12–16px.
- Cabeçalho até imagens/cards: 24–32px.

Mobile:
- Seções principais: padding superior/inferior 32–40px.
- Cabeçalho até imagens/cards: 20–24px.
- Cards empilhados: gap 24–28px.

Adapte à referência. Não aplique o mesmo padrão indiscriminadamente ao header, hero, confiança, CTA e rodapé.

SOLUÇÕES
Reduza espaço acima do eyebrow, aproxime cabeçalho/grid e reduza o vazio após “Saiba mais”. Preserve as imagens alinhadas.

PROJETOS
Reduza padding acima do título e abaixo da galeria. Use cerca de 24–32px entre cabeçalho e fotos, sem sacrificar a leitura.

SOBRE
Use foto horizontal próxima de 16:10, preservando a maçaneta. Centralize o texto verticalmente.
Avalie padding de 48px acima/abaixo no desktop. Remova min-height desnecessário.
No celular, imagem acima e aproximadamente 24px até o texto.

CTA/RODAPÉ
CTA compacto, avaliando padding vertical de 32–40px no desktop, sem reduzir a área clicável do botão.
No rodapé, reduza o excesso antes da linha inferior, sem comprimir links, telefone ou ícones.

PRESERVAÇÃO
Não altere altura do header e hero nesta rodada. Preserve a faixa de confiança existente.

VALIDAÇÃO
Compare capturas antes/depois na mesma largura. Deve haver menos vazio, transições mais próximas, mesma hierarquia, fotos bem enquadradas e nenhum corte.
Não reduza fontes, botões ou todas as imagens apenas para encurtar a página.
Informe seções ajustadas e os valores finais de padding e gap.
```

## 09 — Rodapé final, com CTA integrado

**Anexar:** mockup do novo rodapé, logo branca e ficha de contatos. **Esta opção substitui o rodapé básico.**

```text
Atue como desenvolvedor front-end sênior especializado em reprodução fiel de layouts.
Atualize somente o rodapé do site de [[MARCA]] para reproduzir o mockup anexado.
Preserve todas as demais seções, inclusive a faixa de contato acima do rodapé, se existente.

INSPEÇÃO
Localize HTML/componente e estilos. Reutilize logo oficial branca, ícones, contatos, redes e IDs de navegação.
Corrija na origem, sem duplicar rodapé, acumular overrides ou afetar outras dobras.
Não use o mockup como imagem de fundo da interface.

COMPOSIÇÃO
Fundo [[COR_ESCURO]] uniforme. Use [[COR_ACENTO]] nos títulos pequenos, botão e linha superior. Não reproduza ruídos ou texturas da imagem gerada.
Linha fina de destaque no limite superior, sem faixa vazia acima.
Três colunas: marca/redes à esquerda, navegação ao centro e contato à direita.
Mesmo container do site. Avalie 40%/24%/36%, descontando gaps e ajustando à largura disponível.
Padding superior de 48–56px; conteúdo até linha inferior de 28–36px; barra inferior de 22–28px. São pontos iniciais, não medidas rígidas.
Não fixe a altura do rodapé.

COLUNA ESQUERDA
Logo branca com largura visível inicial de 220–250px no desktop, considerando margens internas. Preserve proporção, qualidade e desenho.
Descrição: [[MARCA_DESCRICAO]], em cinza-claro e entrelinha próxima de 1.5.
Depois: “ACOMPANHE NOSSOS PROJETOS”, em maiúsculas, [[COR_ACENTO]], semibold e tracking discreto.
Abaixo, Instagram, Facebook e [[INSTAGRAM_USUARIO]] na mesma linha, quando disponíveis.
Botões sociais com contorno discreto, cantos suaves, ícones centralizados e área de 40–44px.
URLs: [[INSTAGRAM_URL]] e [[FACEBOOK_URL]]. O identificador também abre o Instagram.

COLUNA CENTRAL
Título: “NAVEGUE”.
Links: “Início”, “Soluções”, “Projetos”, “Sobre [[MARCA]]”.
Branco suave, peso regular, espaçamento uniforme e alinhamento à esquerda. Sem ícones ou marcadores adicionais.
Use IDs reais, não href="#" genérico.
Alinhe o título ao “VAMOS CONVERSAR” da coluna direita.

COLUNA DIREITA
Título: “VAMOS CONVERSAR”.
Ícone de contorno do WhatsApp e [[TELEFONE_EXIBICAO]] em destaque. Avalie 28–32px, sem comprimir letras.
Texto: “Conte sua ideia para nossa equipe.”

Botão:
“Solicitar orçamento”, com seta diagonal para cima e à direita.
Fundo [[COR_ACENTO]], texto [[COR_ESCURO]] em negrito, cantos de 4–6px, altura próxima de 52–56px e largura disponível da coluna.
Equilibre texto e seta.
Telefone e botão abrem [[WHATSAPP_URL]], com mensagem codificada:
“Olá! Vim pelo site de [[MARCA]] e gostaria de solicitar um orçamento.”

Localização abaixo do botão: ícone e “[[CIDADE]] • [[UF]]”.

BARRA INFERIOR
Linha fina na largura do conteúdo.
Esquerda: “© [[MARCA]]. Todos os direitos reservados.”
Direita: “Política de privacidade”, separador discreto e “Voltar ao topo ↑”.
Cinza-claro legível. Política conectada a [[PRIVACIDADE_URL]], se existente; caso contrário, informe a pendência sem inventar destino.
Voltar ao topo funcional, respeitando movimento reduzido.

TIPOGRAFIA/INTERAÇÕES
Preserve [[FONTE]] e pesos reais. Garanta contraste e foco visível.
Hover discreto em links e contornos sociais. No CTA, pequena variação de tonalidade, sem brilho, pulsação ou sombras pesadas.
Ícones consistentes, não emojis.

RESPONSIVIDADE
Reorganize antes que telefone e textos fiquem apertados.
Mobile: marca/descrição; redes; navegação; contato/botão/localização; barra inferior.
Margens de 20–24px, espaçamento controlado, botão amplo, telefone sem cortes e links confortáveis ao toque.
Permita linhas separadas na base e remova separador vertical quando não fizer sentido.
Não preserve vazios herdados do desktop.

CONFERÊNCIA
Compare tamanho da logo, posição das colunas, títulos, telefone, CTA, redes, divisória, base e integração com a seção anterior.
Valide 1440px e 390px. Não conclua apenas porque todos os elementos existem; corrija divergências visuais perceptíveis.
Informe arquivos alterados, verificações e pendências. Não publique automaticamente.
```

---

## 10 — Prompts para as fotografias individuais

Use referências autorizadas da empresa para orientar produtos e acabamentos. Não peça que um gerador invente obras executadas pela marca. Os prompts abaixo geram conteúdo ilustrativo, sem interface.

### 10.1 — Hero e card de esquadrias

```text
Gere uma fotografia arquitetônica ilustrativa de alta qualidade para um site de esquadrias. Imagem individual, sem textos, logos, botões, bordas ou interface.
Formato horizontal 16:9, na maior resolução nativa disponível.
Varanda gourmet de uma residência contemporânea brasileira, grandes portas de correr de alumínio escuro e vidro à direita, forro de madeira natural, piso de pedra clara e ambiente interno elegante e realista.
Jardim e sombras naturais no terço esquerdo, com área calma para receber texto em CSS posteriormente. Não desenhe o texto nem o overlay na foto.
Luz suave de fim de tarde, materiais realistas, perfis retos e conectados corretamente, reflexos plausíveis e arquitetura executável. Sem pessoas.
Componha para preservar a arquitetura em um recorte mobile central-direito. Não exagere no HDR ou na saturação.
```

### 10.2 — Fachada em vidro

```text
Gere uma fotografia arquitetônica ilustrativa horizontal 3:2, de alta qualidade, para card de fachadas e galeria de um site de esquadrias.
Residência contemporânea brasileira com pano de vidro de canto em pé-direito alto, perfis de alumínio escuro, volumes claros, detalhes discretos de pedra, jardim e passos de concreto no primeiro plano.
Vista externa em três quartos, luz natural, céu azul e reflexos realistas. O encontro dos vidros deve ser o ponto central e permitir recorte vertical para o card.
Mantenha materiais e linguagem coerentes com a imagem de hero fornecida. Não acrescente luxo excessivo, carros, pessoas, textos ou marcas. Imagem limpa, sem interface.
```

### 10.3 — Vidros e box

```text
Gere uma fotografia ilustrativa vertical 4:5 de um box de vidro temperado em banheiro contemporâneo brasileiro.
Box de canto, vidro transparente, perfis finos escuros, ferragens coerentes, porta corretamente articulada, revestimentos claros, piso e ralo plausíveis.
Mostre o produto inteiro com margem para recortes. Luz natural difusa, reflexos sutis que tornem o vidro visível, sem duplicação de ferragens ou geometria impossível.
Sem pessoas, textos, marcas, bordas ou interface. Alta qualidade e nitidez dos acabamentos.
```

### 10.4 — Portas internas

```text
Gere uma fotografia ilustrativa vertical 4:5 de uma porta interna correspondente ao catálogo informado.
Uma porta fechada, acabamento e material conforme a referência do produto, batente reto e maçaneta moderna. Parede clara, piso neutro e decoração mínima.
Enquadre a porta completa, do piso à parte superior, com margens e linhas verticais corretas. Luz natural suave, textura realista e destaque ao produto.
Não apresente madeira maciça quando o produto anunciado for alumínio amadeirado: respeite o material confirmado.
Sem pessoas, letras, marcas ou elementos de interface.
```

### 10.5 — Varanda com esquadrias

```text
Gere uma segunda fotografia arquitetônica ilustrativa horizontal 3:2, coerente com o ambiente do hero, em outro ângulo.
Varanda com grandes portas de correr de alumínio escuro, vidro com reflexos realistas, forro de madeira e jardim. Destaque os perfis e a qualidade visual do acabamento.
Câmera próxima à lateral da fachada, valorizando um perfil vertical e a continuidade das portas. Luz de fim de tarde e materiais naturais.
Composição adequada a uma foto de galeria ampla e também a um recorte mais estreito. Sem textos, marcas, pessoas ou interface.
```

### 10.6 — Detalhe da esquadria

```text
Gere uma fotografia ilustrativa horizontal 3:2 para a seção Sobre de um site de esquadrias.
Close de perfil de alumínio escuro e maçaneta moderna corretamente instalada, ambos nítidos. Fundo residencial suavemente desfocado, com materiais e iluminação coerentes com o hero.
Maçaneta inteira, junções precisas, textura fina de pintura e fechadura plausível. Posicione o produto no terço esquerdo e mantenha contexto desfocado à direita.
Alta qualidade, sem exagero de nitidez, mãos, textos, logos ou interface.
```

## 11 — Logo e favicon

Para simples recoloração de uma logo existente, prefira edição direta dos pixels preservando o canal alpha e o desenho original. Não aprove resultados com manchas, resíduos ou alterações nas letras. A referência oficial da nova empresa é indispensável.

### 11.1 — Logo sem fundo

```text
Remova apenas o fundo da logo oficial anexada de [[MARCA]]. Entregue PNG com transparência real, preservando exatamente letras, símbolo, espaçamento, proporções e traços.
Preserve a cor original da marca. Remova halos da cor do fundo e resíduos entre os elementos. Bordas limpas e suavizadas, sem sombras ou contornos novos.
Ajuste apenas o excesso de margem externa, mantendo respiro e nenhum traço cortado.
Não redesenhe, reinterprete ou substitua a tipografia. Não desenhe um quadriculado no fundo.
Verifique o resultado sobre fundos claro e escuro antes de entregar.
```

### 11.2 — Versão branca da logo

```text
Crie a versão branca da logo oficial anexada de [[MARCA]]. Altere somente a cor dos elementos opacos para branco puro #FFFFFF, preservando integralmente desenho, posicionamento, proporções, resolução e transparência.
Entregue PNG com canal alpha real. Não acrescente fundo, textura, sombra, contorno, manchas ou resíduos.
Mantenha bordas suavizadas e espaços internos transparentes. Não substitua a logo por uma recriação aproximada.
Confira sobre fundo escuro e não considere pronta uma versão com ruído ou alteração dos traços.
```

### 11.3 — Favicon

```text
Crie um favicon quadrado a partir de [[MONOGRAMA]], extraído da logo oficial anexada de [[MARCA]].
Preserve a forma distintiva do símbolo escolhido. Remova outros elementos que não façam parte do monograma.
Use cor escura sobre fundo sólido [[COR_ACENTO]] quando essa combinação tiver bom contraste, ou a combinação aprovada na ficha visual.
Centralize opticamente, com respiro aproximado de 12–16% nas bordas. Sem sombras, texturas, ruídos ou pequenos detalhes que prejudiquem a leitura.
Entregue PNG de alta qualidade. Se a ferramenta permitir exportação direta, gere também versões 16x16, 32x32 e 48x48 e favicon.ico a partir do mesmo desenho, sem recriá-lo em cada tamanho.
Verifique legibilidade em tamanho pequeno e nas abas claras e escuras do navegador.
```

## 12 — Mockups para aprovar a direção visual

Estes prompts são para gerar prévias de design, não para implementar o site. Use-os quando a nova marca ainda não tiver mockup aprovado.

### 12.1 — Desktop completo

```text
Crie um mockup de alta fidelidade da página inicial desktop de [[MARCA]], empresa de esquadrias e vidraçaria em [[CIDADE]]/[[UF]].
Use a logo oficial anexada e a ficha preenchida. Estética arquitetônica profissional, tipografia [[FONTE]], fundo branco, contraste [[COR_ESCURO]] e acentos [[COR_ACENTO]]. Composição limpa, fotos grandes, espaçamento controlado, cantos discretos e sem efeitos decorativos genéricos.
Uma imagem única da página completa, do header ao rodapé, vista frontal, sem moldura de computador ou navegador.

Ordem:
1. Header branco, logo, navegação e botão de orçamento.
2. Hero arquitetônico com [[HERO_EYEBROW]], [[HERO_TITULO]], [[HERO_DESCRICAO]] e CTA de WhatsApp.
3. Faixa com os três diferenciais confirmados da ficha.
4. Soluções em quatro colunas fotográficas com os nomes confirmados.
5. Galeria em fundo escuro, duas fotos assimétricas e legendas curtas.
6. Sobre com detalhe de esquadria à esquerda e [[SOBRE_TEXTO]] à direita.
7. Faixa de contato em [[COR_ACENTO]].
8. Rodapé com marca/redes, navegação, contato, botão de orçamento e base de privacidade.

Use apenas dados confirmados; não invente avaliações, certificações, tempo de mercado ou obras executadas.
Não corte o rodapé. Priorize texto legível, alinhamentos e um layout possível de reproduzir em código.
```

### 12.2 — Mobile completo

```text
Adapte o mockup desktop aprovado de [[MARCA]] para uma página mobile completa em uma única imagem vertical longa.
Preserve identidade, copy e ordem das seções. O resultado deve representar uma tela de aproximadamente 390–430px de largura CSS, sem moldura de aparelho e sem uma página estreita dentro de grandes margens externas.

Header compacto com logo e menu. Hero com enquadramento mobile e texto legível. Benefícios em três linhas. Soluções em uma coluna com fotos suficientemente altas. Galeria com imagens empilhadas. Sobre com foto acima do texto. CTA com botão amplo. Rodapé em grupos verticais: marca/redes, navegação, contato e base.

Use margens internas próximas de 20–24px, leitura confortável e botões com pelo menos 44px de área de toque. Permita que títulos quebrem naturalmente.
Não comprima o desktop para caber. Não omita seções, não reduza a tipografia excessivamente e não use fotos como faixas muito baixas.
Inclua o rodapé inteiro. Caso a ferramenta limite a altura, gere partes consecutivas identificadas, mantendo largura e escala; não apresente uma página cortada como completa.
```

### 12.3 — Segunda opção de rodapé

```text
Gere uma segunda proposta visual de rodapé para [[MARCA]], usando a logo oficial, a ficha de contatos e o print atual anexado.
Mostre apenas o rodapé desktop em uma imagem horizontal nítida. Ignore notificações do sistema ou outros elementos externos que apareçam no print.
Fundo [[COR_ESCURO]], linha superior fina em [[COR_ACENTO]], espaçamento compacto e três colunas bem equilibradas.

Esquerda: logo branca em destaque, [[MARCA_DESCRICAO]], título “ACOMPANHE NOSSOS PROJETOS”, redes existentes e [[INSTAGRAM_USUARIO]].
Centro: “NAVEGUE”, seguido de Início, Soluções, Projetos e Sobre [[MARCA]].
Direita: “VAMOS CONVERSAR”, WhatsApp e [[TELEFONE_EXIBICAO]], frase “Conte sua ideia para nossa equipe.”, botão “Solicitar orçamento” e localização [[CIDADE]] • [[UF]].
Base com linha discreta, direitos autorais, privacidade e “Voltar ao topo ↑”.

Sem grandes vazios, gradientes, ruídos, sombras pesadas, dados inventados ou tipografia minúscula. Use a identidade da nova marca, com proporções que possam ser implementadas fielmente no site.
```

## Conferência antes de reutilizar

- Todos os campos foram substituídos por dados da nova empresa?
- O catálogo e os diferenciais são verdadeiros para essa empresa?
- Cores, fonte e logo correspondem à identidade oficial?
- Telefones e redes sociais foram conferidos?
- Os mockups anexados correspondem à nova marca?
- Fotos ilustrativas estão sendo diferenciadas de obras realizadas?
- Nenhum arquivo, domínio, contato ou identificador de outra empresa permaneceu no projeto?
- A versão escolhida do rodapé está clara para o assistente?
- O resultado foi comparado no desktop e no celular antes de publicar?


