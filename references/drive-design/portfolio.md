# Kit de prompts — Site de portfólio pessoal
## Edição compartilhável, sem marca pessoal

Prompts para trabalhar por etapas no Antigravity + VS Code. Esta é uma compilação adaptada dos prompts de implementação e refinamento disponíveis no histórico e no guia inicial. Não é uma transcrição literal: nomes e dados pessoais foram removidos, repetições foram organizadas e instruções superadas foram atualizadas conforme o resultado final desejado.

Não contém fotos, logos, assinaturas nem trabalhos de terceiros. Cada pessoa deve anexar seus próprios materiais e usar apenas imagens e projetos que possa divulgar.

## Como usar

1. Preencha o briefing abaixo.
2. Gere/aprove seu próprio mockup e prepare os assets.
3. Envie uma etapa de implementação por vez, com seus anexos.
4. Compare o resultado antes de avançar.
5. Use os prompts de correção somente quando o problema descrito aparecer.
6. Medidas são pontos de partida; compare proporções na mesma largura de tela.
7. Não envie o documento inteiro como uma única tarefa de implementação.

As etapas 1–3 e seus refinamentos correspondem à construção discutida. As etapas 4–6 constavam do planejamento inicial; não significam que processo, FAQ, rodapé e portfólio tenham sido implementados e aprovados nesta conversa. O favicon foi solicitado, mas a geração ficou bloqueada por limite de uso.

## Briefing para substituir os campos

- [SEU NOME]: nome profissional.
- [SUA MARCA]: nome exibido na marca.
- [SUAS INICIAIS]: monograma, se houver.
- [COR_DESTAQUE]: cor da sua identidade; o modelo usa laranja.
- [WHATSAPP]: número real com DDI e DDD.
- [DOMINIO]: domínio de produção.
- [URL_INSTAGRAM] e [URL_YOUTUBE]: perfis reais; remova se não utilizar.
- [PROJETO_1] até [PROJETO_5]: trabalhos reais autorizados; adapte a quantidade.
- Para cada projeto: nome, segmento, escopo realizado, URL e capturas desktop/mobile.
- Revise os cinco serviços do modelo para oferecer somente o que você realmente entrega.

O texto comercial é uma base editável, não uma promessa de resultados garantidos. Não publique placeholders, métricas fictícias ou condições comerciais não confirmadas.

## Assets que você deve fornecer

- imagens/mockup-home-aprovado.png
- imagens/retrato-aprovado.png
- imagens/logo-aprovada.png
- imagens/assinatura-hero.png — composição em duas linhas, se aprovada.
- imagens/assinatura-horizontal.png — nome em uma linha.
- imagens/favicon.png — símbolo isolado, quadrado e transparente.
- Capturas reais dos seus projetos, fornecidas na etapa de portfólio.

Esses nomes são sugestões de organização, não arquivos incluídos neste documento. A assinatura é uma marca gráfica decorativa, não uma assinatura para autenticação de documentos.

## Ordem recomendada

A. Direção visual e assets: prompts A1–A7.
B. Construção: etapas 1 e 2; correções B1–B4 conforme necessário.
C. Serviços: etapa 3; correções C1 e C2 conforme necessário.
D. Continuação planejada: etapas 4 e 6; revisão final da etapa 5.
E. Auditoria de encerramento: prompt D1.

## A1 — Estrutura e direção visual

```text
Estruture um site de portfólio pessoal para [SEU NOME], que oferece criação de sites e landing pages, CRM e sistemas, tráfego pago, SEO e automações. Adapte a lista aos serviços confirmados no briefing.

Proponha home com: header, hero, apresentação pessoal, serviços, processo, FAQ, contato e rodapé. O portfólio deve ficar em página separada, acessível pelo menu e CTA do hero.

Direção: fundo carvão, tipografia sans-serif expressiva, branco e [COR_DESTAQUE], transparência discreta, cards com bordas finas e fotografia pessoal para gerar conexão. Evite efeitos genéricos de IA, neon, excesso de gradientes, ícones de estilos diferentes e informações fictícias.

Entregue a hierarquia, a copy inicial e o papel de cada seção antes da implementação. Não invente experiência, números de clientes ou resultados.
```

## A2 — Mockup de alta qualidade

Anexe sua foto, logo e referências autorizadas.

```text
Gere um mockup desktop de página inteira para o portfólio de [SEU NOME], seguindo a estrutura aprovada: header, hero, apresentação, serviços, processo, FAQ, CTA e rodapé. Não inclua galeria de portfólio na home.

Use a logo e o retrato anexados. Hero: título à esquerda, pessoa à direita, assinatura decorativa e pequena legenda. A apresentação é um card horizontal com retrato à esquerda, texto central e benefícios à direita, sobrepondo discretamente a base da foto do hero.

Serviços: um card grande à esquerda para Sites e Landing Pages, quatro menores à direita em 2 × 2. Fundo carvão, textos brancos, [COR_DESTAQUE] nos pontos de atenção, vidro escuro sutil e hierarquia legível. Nada de métricas inventadas.

Entregue uma referência visual nítida. O mockup servirá para implementar elementos reais em HTML/CSS, não para ser usado como imagem única do site.
```

## A3 — Refinamento minimalista do mockup

```text
Edite o mockup anexado sem mudar a estrutura, ordem das seções ou conteúdo aprovado. Preserve a logo selecionada e a identidade da pessoa.

Melhore tipografia, alinhamento, proporções e espaçamento. Reduza brilhos, gradientes chamativos e elementos decorativos redundantes. Use bordas finas, superfícies translúcidas escuras e uma única família de ícones. Preserve o destaque da foto e a legibilidade.

Não redesenhe a página do zero, não acrescente galeria à home e não substitua a fonte sans-serif por uma serifada.
```

## A4 — Retrato para o hero

Anexe suas próprias fotos de referência.

```text
Ajuste o retrato anexado para uso em um site profissional, preservando a identidade da pessoa: formato do rosto, olhos, nariz, cabelo, idade aparente e textura natural da pele.

Enquadramento da cintura para cima, braços cruzados naturalmente, sorriso discreto e cabeça em posição neutra, sem inclinação para cima. Roupa escura e iluminação suave, compatível com fundo carvão; pequeno recorte de luz na cor da identidade, sem neon.

Não embeleze alterando feições, não plastifique a pele e não modifique o corpo de forma artificial. Mãos e braços anatomicamente coerentes. Não inclua texto, logo ou assinatura na fotografia. Gere em alta qualidade com margem para adaptação do enquadramento.
```

## A5 — Logo aprovada sem fundo

```text
Prepare a logo selecionada em alta qualidade, preservando exatamente desenho, proporções, cores e tipografia. Remova o fundo para transparência real em PNG com canal alfa.

Não redesenhe, não acrescente contorno, sombra, brilho, textura ou moldura. Preserve bordas suaves e nítidas. Use margens de segurança pequenas sem cortar nenhuma parte da marca. Não simule transparência com um padrão quadriculado.
```

## A6 — Assinatura decorativa e versão branca

Use a primeira parte apenas se ainda não tiver uma assinatura gráfica aprovada.

```text
Crie uma assinatura gráfica decorativa com o texto exato “[SEU NOME]”, caligrafia fluida, legível e elegante, sem ornamentos excessivos. Ela deve funcionar sobre fundo escuro de um site pessoal.

Crie uma versão por vez: primeiro horizontal, com o nome em uma linha; depois, se necessário, uma versão compacta em duas linhas para o hero. Não misture as duas versões na mesma imagem.

Se já houver assinatura aprovada anexada, NÃO crie outra: preserve o desenho e converta os traços para branco sólido #FFFFFF com fundo realmente transparente. Sem glow, halo, sombra, contorno, textura ou fragmentos soltos. Entregue PNG com transparência e pequena margem de segurança.
```

## A7 — Favicon somente com o símbolo

Anexe a logo aprovada. Este prompt reproduz a solicitação de asset; a geração original não foi concluída.

```text
Extraia somente o símbolo/monograma [SUAS INICIAIS] da logo anexada. Remova o nome por extenso.

Preserve a geometria, as cores e os espaços internos do símbolo. Não redesenhe. Entregue PNG quadrado de alta resolução, preferencialmente 1024 × 1024, com transparência real, símbolo centralizado e margens pequenas e equilibradas. Sem fundo, moldura, sombra, relevo, brilho ou quadriculado desenhado.

O símbolo deve permanecer reconhecível em tamanhos pequenos. Não apresente o resultado em mockup de navegador.
```

---

# Prompts completos


---

## 01-base-header-hero.txt

```text
ETAPA 1 — BASE VISUAL, HEADER E HERO

ANEXOS DESTA ETAPA
imagens/mockup-home-aprovado.png
imagens/retrato-aprovado.png
imagens/logo-aprovada.png

CONTEXTO E REGRAS FIXAS
Você está implementando o site pessoal de [SEU NOME] no VS Code com Antigravity. O arquivo imagens/mockup-home-aprovado.png é a referência visual autoritativa. A versão anexada tem DUAS aplicações da foto: hero e apresentação. Preserve isso. Não use versões anteriores do mockup.
A estrutura aprovada é: header, hero, apresentação, serviços, processo, FAQ, CTA e rodapé. O portfólio é uma página separada, nunca uma grade dentro da home.
Preserve a linguagem preto/carvão, branco e laranja, tipografia sans-serif, cards com transparência discreta e fotografias aprovadas. Não introduza fontes serifadas, efeitos neon, partículas, animações contínuas, métricas, avaliações ou depoimentos inventados.
Faça alterações reais nos arquivos, não responda apenas com sugestões. Leia o projeto e suas instruções antes de editar. Se já houver stack e componentes, preserve-os. Não substitua arquivos completos sem necessidade; faça alterações delimitadas. Não faça commit, push nem deploy nesta etapa.
Construa HTML semântico e elementos reais e acessíveis. Nunca transforme o mockup em uma imagem de fundo da página inteira. Não use screenshots como substitutos de textos, botões, cards ou navegação.
Os textos de conteúdo devem ser editáveis; os símbolos e ícones simples devem usar uma única família SVG consistente. Imagens somente pelos arquivos entregues. Não buscar rostos alternativos, não recriar a pessoa com IA e não desenhar a logo com fonte comum.
Não invente número de WhatsApp, e-mail, domínio, URLs dos clientes ou políticas comerciais. Centralize dados de contato; relate informações ausentes ao final. Nenhum link vazio, href="#" ou número fictício deve ser tratado como funcional.
A cada etapa, compare a região implementada com o mockup e revise desktop e mobile. Preserve as regiões anteriores. Ao terminar, informe arquivos alterados, verificações feitas e pendências reais. Pare no escopo solicitado.

OBJETIVO
Implemente somente a base do projeto, o header e o hero, com máxima fidelidade ao terço superior do mockup. Não implemente as outras dobras agora. Reserve IDs de navegação e registre as seções pendentes, sem criar conteúdo fictício.

BASE TÉCNICA
Se a pasta estiver vazia, use HTML semântico, CSS e JavaScript modular, sem backend. Sirva os arquivos por um servidor local HTTP do ambiente. Se já existir um projeto, mantenha sua stack, suas rotas e seu processo de build.
Copie a foto e a logo para o diretório público de assets da stack. Em projeto estático na raiz: /assets/images/retrato-aprovado.png e /assets/brand/logo-aprovada.png. A pasta imagens do pacote é a origem; referências/mockup não precisam ir para produção.
Use caminhos públicos compatíveis com a hospedagem na raiz do domínio. Não copie caminhos do computador para src/href. Não adicione PHP ou dependência de processamento no servidor a uma hospedagem estática.
Crie um objeto de configuração único para contatos e links. Os perfis conhecidos são [URL_INSTAGRAM] e [URL_YOUTUBE]. WhatsApp e domínio ainda precisam ser informados.

SISTEMA VISUAL INICIAL
Crie tokens CSS centralizados. Valores iniciais a calibrar pelo mockup: fundo #0B0D0D; superfície #111414; branco #F5F5F5; texto secundário #B9BEC0; laranja #FF650F; borda rgba(255,255,255,.12). Use variações de carvão, sem gradientes coloridos chamativos.
Container inicial: largura máxima 1280px, centralizado; margens laterais fluidas entre 20 e 64px. O mockup tem 922px de largura: compare proporções, não replique suas medidas literalmente como se fossem CSS de desktop.
Use uma única família sans moderna, como Manrope quando disponível, e pesos bem definidos. Nunca comprima letras com scaleX. Títulos com tracking discreto e line-height entre 1.04 e 1.12; corpo entre 1.5 e 1.65. Texto principal mínimo 16px e labels normalmente 14px. Não sacrifique leitura para reproduzir texto pequeno de uma imagem.
Botões entre 44 e 48px de altura, largura conforme conteúdo, alinhamento central. Laranja sem glow. Botão secundário escuro com borda neutra. Hover curto de 160–220ms, foco visível para teclado.

HEADER
Reproduza o header: logo à esquerda, menu ao centro, botão à direita. Logo deve manter proporção natural e fundo transparente, usando o arquivo aprovado SEM substituir a marca. O PNG tem margem transparente interna: ajuste a caixa de exibição cuidadosamente, sem deformar ou cortar letras; não aplique filtros de cor nem retoques no arquivo original.
Links: Portfólio → rota local /portfolio/; Sobre → /#sobre; Serviços → /#servicos; Processo → /#processo. CTA Vamos conversar → /#contato. As rotas/seções serão completadas nas etapas seguintes; registre temporariamente essa pendência.
No mobile, logo e botão de menu. Menu abre/fecha por botão com aria-expanded, fecha por Escape e após escolher um link; links fora da tela não podem permanecer focáveis. Evite menu duplicado acessível ao mesmo tempo.
Não crie barra flutuante gigantesca. Se fixar o header, preserve altura, legibilidade e scroll-margin das âncoras.

HERO
Desktop com duas colunas: texto à esquerda e foto à direita. O hero deve conservar a silhueta visual do mockup: título expressivo, dois CTAs e pessoa em destaque. Distribuição aproximada 50/50, calibrada para que texto e foto não se sobreponham.
Eyebrow: DESIGN • DESENVOLVIMENTO • ESTRATÉGIA
H1 único da home:
Seu negócio
merece
um site à altura.
A última linha é laranja. Em telas menores permita quebra natural sem criar estouro horizontal. Tamanho inicial desktop clamp(42px, 4.8vw, 76px); ajuste pela referência e pela largura real.
Descrição: Crio sites e sistemas, conecto processos e desenvolvo estratégias para sua empresa crescer no digital.
Botões: Ver meus projetos → /portfolio/; Vamos conversar → /#contato.
Use a foto aprovada de braços cruzados em elemento img; ela tem fundo escuro opaco, não é PNG recortado. Integre suas bordas com máscara CSS suave e fundo carvão compatível. Não declare que o arquivo tem transparência. Preserve rosto, mãos e proporções; permita que o card de apresentação cubra a parte inferior dos braços, conforme a composição aprovada, sem atingir o rosto ou o texto. Não aplique filtros globais de saturação/contraste que modifiquem a pessoa.
Não gere outra foto, não estique e não use background-size: cover indiscriminadamente. Ajuste object-fit/object-position e máscaras por breakpoint. Mantenha dimensões para evitar saltos de layout e carregue a foto do hero com prioridade.
Use a imagem de assinatura decorativa aprovada, branca e transparente, ao lado do retrato. Não a substitua por fonte itálica comum. A legenda é texto HTML em três linhas: DESIGN / QUE GERA / RESULTADOS. Se não houver asset, registre a pendência antes de tentar reproduzi-lo.
No mobile: texto, CTAs e retrato em sequência; sem imagem atrás das letras. O menu e o hero devem funcionar a partir de 360px.

VALIDAÇÃO
Verifique 1440px, 1024px, 768px e 390px. Capture desktop e mobile se o ambiente permitir. Confira títulos completos, rosto íntegro, logo sem deformação, contraste, foco e ausência de rolagem horizontal. Corrija somente esta etapa. Não avance às outras dobras.
```

---

## 02-apresentacao.txt

```text
ETAPA 2 — BLOCO DE APRESENTAÇÃO

ANEXOS DESTA ETAPA
imagens/mockup-home-aprovado.png
imagens/retrato-aprovado.png

CONTEXTO E REGRAS FIXAS
Você está implementando o site pessoal de [SEU NOME] no VS Code com Antigravity. O arquivo imagens/mockup-home-aprovado.png é a referência visual autoritativa. A versão anexada tem DUAS aplicações da foto: hero e apresentação. Preserve isso. Não use versões anteriores do mockup.
A estrutura aprovada é: header, hero, apresentação, serviços, processo, FAQ, CTA e rodapé. O portfólio é uma página separada, nunca uma grade dentro da home.
Preserve a linguagem preto/carvão, branco e laranja, tipografia sans-serif, cards com transparência discreta e fotografias aprovadas. Não introduza fontes serifadas, efeitos neon, partículas, animações contínuas, métricas, avaliações ou depoimentos inventados.
Faça alterações reais nos arquivos, não responda apenas com sugestões. Leia o projeto e suas instruções antes de editar. Se já houver stack e componentes, preserve-os. Não substitua arquivos completos sem necessidade; faça alterações delimitadas. Não faça commit, push nem deploy nesta etapa.
Construa HTML semântico e elementos reais e acessíveis. Nunca transforme o mockup em uma imagem de fundo da página inteira. Não use screenshots como substitutos de textos, botões, cards ou navegação.
Os textos de conteúdo devem ser editáveis; os símbolos e ícones simples devem usar uma única família SVG consistente. Imagens somente pelos arquivos entregues. Não buscar rostos alternativos, não recriar a pessoa com IA e não desenhar a logo com fonte comum.
Não invente número de WhatsApp, e-mail, domínio, URLs dos clientes ou políticas comerciais. Centralize dados de contato; relate informações ausentes ao final. Nenhum link vazio, href="#" ou número fictício deve ser tratado como funcional.
A cada etapa, compare a região implementada com o mockup e revise desktop e mobile. Preserve as regiões anteriores. Ao terminar, informe arquivos alterados, verificações feitas e pendências reais. Pare no escopo solicitado.

OBJETIVO
Implemente somente a seção #sobre, logo após o hero. Preserve integralmente o header e hero já aprovados, exceto ajustes indispensáveis no espaço de transição.

COMPOSIÇÃO
Use o card horizontal do mockup, com três áreas: foto à esquerda, texto no centro e benefícios à direita. Não remova a segunda fotografia nem transforme a seção em manifesto textual. Fundo de vidro escuro discreto, borda neutra de 1px e raio aproximado 12–16px; sem moldura laranja e sem sombra luminosa.
A foto usa o MESMO arquivo aprovado. É um enquadramento menor do retrato; mantenha a cabeça inteira e os braços quando couberem, com transição suave na base e na lateral. Não estique a foto. Use largura de área aproximada de 28%, centro 42% e benefícios 30%, adaptando com bom senso à leitura.
Não fixe uma altura que corte conteúdo. Ajuste o card por min-height e padding, preservando sua aparência horizontal compacta. Considere 24–32px de padding nas áreas de texto.

CONTEÚDO
Título: Seu projeto, comigo do início ao fim.
Destaque laranja somente em do início ao fim., como no mockup.
Texto: Sou [SEU NOME]. Uno design, desenvolvimento e marketing para criar soluções que fazem sentido para o seu negócio.
Use a versão horizontal da assinatura decorativa aprovada, branca e transparente. Ela não substitui nem redesenha a logo.
Benefícios com ícones consistentes, traço uniforme e tamanho óptico equivalente:
- Soluções para o seu negócio.
- Atendimento próximo.
- Estratégia em cada detalhe.
Separador vertical discreto antes dos benefícios. Use grid para alinhar ícones e textos; não alinhe com espaços digitados ou margens isoladas para cada item.

RESPONSIVIDADE E MOVIMENTO
Tablet: mantenha a leitura sem comprimir. Mobile: foto em área superior com altura controlada, apresentação abaixo e benefícios em lista. Não esconda conteúdo por falta de espaço. A ordem visual deve seguir a ordem do DOM.
Revelação opcional da seção: translateY até 16px e opacidade, duração 450–600ms, uma única vez. Conteúdo deve permanecer disponível sem JavaScript e com prefers-reduced-motion. Não deixe textos invisíveis se o observador falhar.

VALIDAÇÃO
Compare exclusivamente este card com a referência: proporções, foto, título, contorno e alinhamento dos benefícios. Verifique a sobreposição intencional do card sobre a parte inferior do retrato principal, sem cobrir rosto, título ou botões; confira também os ícones no mobile. Não altere o design das outras dobras.
```

---

## 03-servicos.txt

```text
ETAPA 3 — CINCO SERVIÇOS

ANEXOS DESTA ETAPA
imagens/mockup-home-aprovado.png
imagens/logo-aprovada.png

CONTEXTO E REGRAS FIXAS
Você está implementando o site pessoal de [SEU NOME] no VS Code com Antigravity. O arquivo imagens/mockup-home-aprovado.png é a referência visual autoritativa. A versão anexada tem DUAS aplicações da foto: hero e apresentação. Preserve isso. Não use versões anteriores do mockup.
A estrutura aprovada é: header, hero, apresentação, serviços, processo, FAQ, CTA e rodapé. O portfólio é uma página separada, nunca uma grade dentro da home.
Preserve a linguagem preto/carvão, branco e laranja, tipografia sans-serif, cards com transparência discreta e fotografias aprovadas. Não introduza fontes serifadas, efeitos neon, partículas, animações contínuas, métricas, avaliações ou depoimentos inventados.
Faça alterações reais nos arquivos, não responda apenas com sugestões. Leia o projeto e suas instruções antes de editar. Se já houver stack e componentes, preserve-os. Não substitua arquivos completos sem necessidade; faça alterações delimitadas. Não faça commit, push nem deploy nesta etapa.
Construa HTML semântico e elementos reais e acessíveis. Nunca transforme o mockup em uma imagem de fundo da página inteira. Não use screenshots como substitutos de textos, botões, cards ou navegação.
Os textos de conteúdo devem ser editáveis; os símbolos e ícones simples devem usar uma única família SVG consistente. Imagens somente pelos arquivos entregues. Não buscar rostos alternativos, não recriar a pessoa com IA e não desenhar a logo com fonte comum.
Não invente número de WhatsApp, e-mail, domínio, URLs dos clientes ou políticas comerciais. Centralize dados de contato; relate informações ausentes ao final. Nenhum link vazio, href="#" ou número fictício deve ser tratado como funcional.
A cada etapa, compare a região implementada com o mockup e revise desktop e mobile. Preserve as regiões anteriores. Ao terminar, informe arquivos alterados, verificações feitas e pendências reais. Pare no escopo solicitado.

OBJETIVO
Implemente exclusivamente #servicos. Preserve header, hero e apresentação.

ESTRUTURA EXATA
Eyebrow SERVIÇOS.
Título: Soluções para sua empresa crescer no digital.
Destaque laranja em crescer no digital.
Desktop: um card grande à esquerda ocupando duas linhas; quatro menores à direita, em grade 2 × 2. Use CSS Grid com três colunas, primeira maior, por exemplo 1.6fr 1fr 1fr. O card esquerdo ocupa duas linhas. O topo e a base do conjunto devem alinhar perfeitamente. Gap inicial 16–20px.
Ajuste conforme container: se títulos longos não couberem, permita duas linhas com tipografia consistente; nunca use fonte minúscula para encaixar. Padding uniforme e alturas determinadas pelo conteúdo. Nos quatro menores, alinhe ações na base usando flex/grid, sem posicionamento absoluto sobre descrições.

CONTEÚDO DOS CARDS
1. Sites e Landing Pages
Sites modernos, rápidos e focados em resultados para o seu negócio.
2. CRM e Sistemas
Soluções personalizadas para organizar seus processos.
3. Tráfego Pago
Campanhas para alcançar as pessoas certas.
4. SEO e Presença no Google
Estrutura e conteúdo para sua empresa ser encontrada.
5. Automações e Integrações
Conecte ferramentas e simplifique sua rotina.
Nos quatro menores: Saiba mais e seta pequena, com uma única área de interação coerente por ação. Não criar links aninhados nem múltiplos tab stops para a mesma ação.

VISUAL
Mantenha cards translúcidos em carvão, bordas discretas, laranja apenas nos ícones e pequenos acentos, como no último mockup. Nada de glow, gradiente forte ou elevação exagerada.
Ícones: monitor, banco de dados, gráfico, lupa e engrenagem/conexão. Use uma única família SVG com aproximadamente 44–52px e traço uniforme. Não dependa de imagens externas ou emojis.
O navegador ilustrativo no primeiro card é um elemento de interface decorativo, NÃO uma foto de um projeto real. Construa-o em HTML/CSS/SVG simples: moldura de navegador, barra de endereço/controles, linhas de conteúdo e bloco de imagem esquemático. Fundo matte, borda neutra, sem neon. Pode usar a logo entregue no pequeno header. Elementos ilustrativos sem funções reais devem ter aria-hidden e não ser focáveis. Não invente screenshot de cliente. Não use o mockup inteiro dentro desse card.

INTERAÇÃO
Ao clicar em Saiba mais/seta, conduza ao contato com o serviço selecionado em estado de interface ou parâmetro reconhecido. Quando o WhatsApp real estiver configurado, use mensagem contextual correta, codificada com encodeURIComponent. Sem número validado, use #contato; não invente número nem afirme que a integração está concluída.
Hover sutil: borda um pouco mais clara e deslocamento máximo de 2px. A mesma indicação deve estar disponível por foco. Sem efeitos presos ao mouse no mobile.

MOBILE
Em telas intermediárias, use duas colunas e card principal na largura completa. Em celulares, uma coluna. Mantenha o título e descrição de TODOS os cinco serviços. Preserve a ordem de leitura aprovada. Evite campos gigantes vazios e heights fixos herdados do desktop.

VALIDAÇÃO
Verifique os cinco serviços, títulos longos, ações alinhadas, ausência de sobreposição e feedback por teclado. Não substituir por lista editorial nem reorganizar as outras seções.
```

---

## 04-processo-faq-contato-rodape.txt

```text
ETAPA 4 — PROCESSO, FAQ, CONTATO E RODAPÉ

ANEXOS DESTA ETAPA
imagens/mockup-home-aprovado.png
imagens/logo-aprovada.png

CONTEXTO E REGRAS FIXAS
Você está implementando o site pessoal de [SEU NOME] no VS Code com Antigravity. O arquivo imagens/mockup-home-aprovado.png é a referência visual autoritativa. A versão anexada tem DUAS aplicações da foto: hero e apresentação. Preserve isso. Não use versões anteriores do mockup.
A estrutura aprovada é: header, hero, apresentação, serviços, processo, FAQ, CTA e rodapé. O portfólio é uma página separada, nunca uma grade dentro da home.
Preserve a linguagem preto/carvão, branco e laranja, tipografia sans-serif, cards com transparência discreta e fotografias aprovadas. Não introduza fontes serifadas, efeitos neon, partículas, animações contínuas, métricas, avaliações ou depoimentos inventados.
Faça alterações reais nos arquivos, não responda apenas com sugestões. Leia o projeto e suas instruções antes de editar. Se já houver stack e componentes, preserve-os. Não substitua arquivos completos sem necessidade; faça alterações delimitadas. Não faça commit, push nem deploy nesta etapa.
Construa HTML semântico e elementos reais e acessíveis. Nunca transforme o mockup em uma imagem de fundo da página inteira. Não use screenshots como substitutos de textos, botões, cards ou navegação.
Os textos de conteúdo devem ser editáveis; os símbolos e ícones simples devem usar uma única família SVG consistente. Imagens somente pelos arquivos entregues. Não buscar rostos alternativos, não recriar a pessoa com IA e não desenhar a logo com fonte comum.
Não invente número de WhatsApp, e-mail, domínio, URLs dos clientes ou políticas comerciais. Centralize dados de contato; relate informações ausentes ao final. Nenhum link vazio, href="#" ou número fictício deve ser tratado como funcional.
A cada etapa, compare a região implementada com o mockup e revise desktop e mobile. Preserve as regiões anteriores. Ao terminar, informe arquivos alterados, verificações feitas e pendências reais. Pare no escopo solicitado.

OBJETIVO
Complete o restante da home: #processo, FAQ, #contato e rodapé. Preserve as dobras já aprovadas.

PROCESSO
Eyebrow PROCESSO.
Título: Da primeira conversa à entrega.
Quatro colunas no desktop com ícones pequenos laranja e divisores verticais discretos:
01 Conversa — Entendo suas necessidades e objetivos.
02 Direção visual — Definimos a estratégia e o visual do seu projeto.
03 Desenvolvimento — Transformo tudo em um site rápido e funcional.
04 Publicação — Seu site no ar, pronto para gerar resultados.
Alinhe números, títulos e descrições em linhas comuns. Mobile em duas colunas ou uma, conforme leitura; sem cortar descrições.

FAQ
Duas colunas: título à esquerda, perguntas à direita. Título: Vamos esclarecer suas dúvidas? Texto: Respostas para as perguntas mais comuns.
Perguntas exatas:
Quanto tempo leva para criar meu site?
Meu site vai funcionar no celular?
Como funcionam domínio e hospedagem?
Posso atualizar o site depois?
Não inserir prazos, preços, suporte incluso ou condições comerciais não aprovadas.
Respostas iniciais neutras, para revisão comercial:
1. O prazo é definido conforme o escopo, as funcionalidades e os materiais necessários. Esses pontos são combinados antes do início do projeto.
2. A versão para celular faz parte do planejamento, com ajustes de navegação, imagens e leitura para diferentes tamanhos de tela.
3. Domínio é o endereço do site; hospedagem é onde ele fica disponível. A contratação e os custos são definidos na proposta.
4. A forma de atualização depende da solução escolhida. Podemos definir no escopo se você precisa de um painel de edição ou de alterações sob demanda.
Use details/summary ou padrão acessível equivalente. Plus muda ao expandir; painel recolhido ocupa apenas a altura da pergunta. Não manter espaços vazios. Preferir uma pergunta aberta por vez quando suportado pelo código, sem prejudicar teclado. Sem height máximo fixo que corte respostas, sem animação brusca.

CONTATO
Card horizontal escuro, com borda neutra, cantos suaves, sem glow. Preheading: VAMOS CONSTRUIR ALGO INCRÍVEL JUNTOS?
Título: Vamos tirar seu projeto do papel?
Botão: Conversar pelo WhatsApp.
O WhatsApp de [SEU NOME] não foi informado neste pacote. Verifique a configuração e dados que o usuário forneceu na conversa do projeto. Se não houver número real, solicite esse único dado ao responsável ANTES de ativar o botão final; não invente telefone, não use wa.me sem destinatário e não deixe botão vazio ou simulação de sucesso. Registre a ligação como pendente. Continue implementando e verificando todo o restante que independe disso.
Depois de receber: normalize para dígitos com DDI e DDD e configure uma única vez. Mensagem padrão: Olá, [SEU NOME]! Conheci seu site e gostaria de conversar sobre um projeto.
Serviços devem acrescentar o assunto selecionado sem dados pessoais desnecessários. Não adicionar formulários, CRM ou integrações à home além do que foi pedido.

RODAPÉ
Logo oficial à esquerda e texto Sites, sistemas e estratégia digital.
Links conhecidos: Instagram [URL_INSTAGRAM] e YouTube [URL_YOUTUBE]. WhatsApp usa a mesma configuração do CTA. Links externos em nova aba com rel="noopener noreferrer" quando aplicável.
Política de Privacidade só aponta para uma página existente com conteúdo baseado nas integrações reais. Não inventar documento jurídico, CNPJ, endereço ou controlador. Registrar esse conteúdo como pendente para publicação e manter a referência visual no rascunho, sem falso link funcional.
Rodapé compacto com linha superior e alinhamento óptico, sem espaço vazio exagerado.

VALIDAÇÃO
Teste abertura/fechamento do FAQ por teclado e clique, navegação até âncoras, contraste, links conhecidos e quebra mobile. Relate claramente se WhatsApp e privacidade ainda dependem de dados. Não publique nem diga que tudo está pronto se esses itens estiverem pendentes.
```

---

## 05-refinamento-e-verificacao.txt

```text
ETAPA 5 — FIDELIDADE, RESPONSIVIDADE E PREPARAÇÃO PARA PUBLICAR

ANEXOS DESTA ETAPA
imagens/mockup-home-aprovado.png
imagens/retrato-aprovado.png
imagens/logo-aprovada.png

CONTEXTO E REGRAS FIXAS
Você está implementando o site pessoal de [SEU NOME] no VS Code com Antigravity. O arquivo imagens/mockup-home-aprovado.png é a referência visual autoritativa. A versão anexada tem DUAS aplicações da foto: hero e apresentação. Preserve isso. Não use versões anteriores do mockup.
A estrutura aprovada é: header, hero, apresentação, serviços, processo, FAQ, CTA e rodapé. O portfólio é uma página separada, nunca uma grade dentro da home.
Preserve a linguagem preto/carvão, branco e laranja, tipografia sans-serif, cards com transparência discreta e fotografias aprovadas. Não introduza fontes serifadas, efeitos neon, partículas, animações contínuas, métricas, avaliações ou depoimentos inventados.
Faça alterações reais nos arquivos, não responda apenas com sugestões. Leia o projeto e suas instruções antes de editar. Se já houver stack e componentes, preserve-os. Não substitua arquivos completos sem necessidade; faça alterações delimitadas. Não faça commit, push nem deploy nesta etapa.
Construa HTML semântico e elementos reais e acessíveis. Nunca transforme o mockup em uma imagem de fundo da página inteira. Não use screenshots como substitutos de textos, botões, cards ou navegação.
Os textos de conteúdo devem ser editáveis; os símbolos e ícones simples devem usar uma única família SVG consistente. Imagens somente pelos arquivos entregues. Não buscar rostos alternativos, não recriar a pessoa com IA e não desenhar a logo com fonte comum.
Não invente número de WhatsApp, e-mail, domínio, URLs dos clientes ou políticas comerciais. Centralize dados de contato; relate informações ausentes ao final. Nenhum link vazio, href="#" ou número fictício deve ser tratado como funcional.
A cada etapa, compare a região implementada com o mockup e revise desktop e mobile. Preserve as regiões anteriores. Ao terminar, informe arquivos alterados, verificações feitas e pendências reais. Pare no escopo solicitado.

OBJETIVO
Faça a revisão final da HOME implementada. Não redesenhe, não substitua a stack e não acrescente seções. Portfólio é rota separada e será tratado na etapa seguinte.

REVISÃO VISUAL
Compare a implementação e o mockup lado a lado, por região: header/hero; apresentação; serviços; processo/FAQ; CTA/rodapé. Corrija somente diferenças observáveis, em ordem: estrutura e largura, tipografia, proporções das imagens, espaçamentos, acabamento.
Preserve as duas aplicações da foto, marca aprovada, ordem das seções e grade de serviços. Garanta igualdade de margens laterais e alinhamentos entre dobras. Não esconda defeitos com overflow-x:hidden global. Encontre o elemento que provoca estouro.
Header/hero: logo proporcional; h1 íntegro; retrato com rosto e mãos; nenhum texto atrás da foto.
Sobre: altura natural e benefícios alinhados.
Serviços: card esquerdo e quatro menores com topo/base alinhados; títulos sem compressão, textos completos e ações acessíveis.
Processo: mesmos pontos de alinhamento e espaçamento.
FAQ: nenhuma reserva de altura no estado recolhido.
CTA e rodapé: sem neon, sobreposições ou folgas artificiais.

RESPONSIVIDADE
Verifique 1440, 1280, 1024, 768, 390 e 360px e orientação horizontal quando relevante. O mobile é uma adaptação real: uma coluna quando necessário, foto abaixo da mensagem, áreas de toque de pelo menos 44px, menu utilizável e nenhuma função exclusiva de hover.
Verifique zoom de 200%, foco visível, ordem de leitura, alt text da foto e da logo, headings e contraste de textos/botões. Elementos decorativos não devem ser anunciados. Com JavaScript desativado, conteúdo essencial deve continuar visível.

ANIMAÇÕES
Use somente revelações curtas e discretas, uma vez por seção, e transições suaves em controles. Não usar smooth scroll que sequestra roda do mouse, cursor customizado, brilho seguindo ponteiro ou parallax no rosto. Respeitar prefers-reduced-motion. Não esconder conteúdo na carga esperando JS. Limitar transformações a elementos não críticos para cliques/foco.

ASSETS E DESEMPENHO
Use os arquivos originais como fonte e mantenha cópias intactas. Gerar derivados otimizados para o site só se necessário, sem alterar desenho ou pessoa. Logo PNG deve preservar alfa. Não usar compressão que borre o rosto ou a marca. Foto hero prioritária; a segunda aplicação pode ser lazy. Dimensões explícitas para estabilidade, srcset se houver derivados. Fontes locais quando disponíveis e font-display adequado. Evitar carregamentos externos desnecessários.
Não declarar notas de desempenho não medidas. Informe métricas somente se as ferramentas reais estiverem disponíveis e cite as condições do teste.

ROTAS E PUBLICAÇÃO ESTÁTICA
Valide paths públicos em HTTP, com atenção ao histórico de assets que quebram no deploy. Em hospedagem na raiz, /assets/... deve resolver também ao abrir diretamente /portfolio/. Não usar C:\..., file:// ou URLs de localhost no build final. Verificar network: CSS, JS, logo e foto retornam conteúdo correto, não HTML com status 200 por rewrite indevido.
Se projeto puro estático, publique arquivos estáticos; se framework, use o build/export da stack. Não criar regras Vercel incompatíveis com o projeto. Rota estática /portfolio/ deve possuir arquivo próprio ou configuração realmente compatível; não depender de PHP em Vercel estática.
Configure title e description reais da home. Canonical e sitemap somente depois de receber domínio de produção; nada de example.com publicado. Enquanto for preview, impedir indexação conforme estratégia de preview, retirando a restrição quando o domínio final for autorizado.
Não insira pixels, analytics, cookies de marketing ou API de conversões sem pedido específico. Não adicionar banner de cookies sem entender o que o site realmente utiliza.

ENTREGA
Entregue um resumo objetivo: alterações feitas, capturas desktop/mobile se possível, verificações executadas, links/configuração ausentes. Só declarar pronta para publicação quando não houver CTA quebrado, rota pendente, asset faltante ou política necessária sem conteúdo. Não fazer deploy automaticamente; o escopo desta etapa é revisão local.
```

---

## 06-portfolio-separado.txt

```text
ETAPA 6 — PORTFÓLIO EM PÁGINA SEPARADA

ANEXOS DESTA ETAPA
imagens/mockup-home-aprovado.png como referência de identidade, não de layout da galeria
imagens/logo-aprovada.png
Capturas desktop/mobile e URLs reais dos cinco projetos, a fornecer

CONTEXTO E REGRAS FIXAS
Você está implementando o site pessoal de [SEU NOME] no VS Code com Antigravity. O arquivo imagens/mockup-home-aprovado.png é a referência visual autoritativa. A versão anexada tem DUAS aplicações da foto: hero e apresentação. Preserve isso. Não use versões anteriores do mockup.
A estrutura aprovada é: header, hero, apresentação, serviços, processo, FAQ, CTA e rodapé. O portfólio é uma página separada, nunca uma grade dentro da home.
Preserve a linguagem preto/carvão, branco e laranja, tipografia sans-serif, cards com transparência discreta e fotografias aprovadas. Não introduza fontes serifadas, efeitos neon, partículas, animações contínuas, métricas, avaliações ou depoimentos inventados.
Faça alterações reais nos arquivos, não responda apenas com sugestões. Leia o projeto e suas instruções antes de editar. Se já houver stack e componentes, preserve-os. Não substitua arquivos completos sem necessidade; faça alterações delimitadas. Não faça commit, push nem deploy nesta etapa.
Construa HTML semântico e elementos reais e acessíveis. Nunca transforme o mockup em uma imagem de fundo da página inteira. Não use screenshots como substitutos de textos, botões, cards ou navegação.
Os textos de conteúdo devem ser editáveis; os símbolos e ícones simples devem usar uma única família SVG consistente. Imagens somente pelos arquivos entregues. Não buscar rostos alternativos, não recriar a pessoa com IA e não desenhar a logo com fonte comum.
Não invente número de WhatsApp, e-mail, domínio, URLs dos clientes ou políticas comerciais. Centralize dados de contato; relate informações ausentes ao final. Nenhum link vazio, href="#" ou número fictício deve ser tratado como funcional.
A cada etapa, compare a região implementada com o mockup e revise desktop e mobile. Preserve as regiões anteriores. Ao terminar, informe arquivos alterados, verificações feitas e pendências reais. Pare no escopo solicitado.

OBJETIVO
Criar /portfolio/ sem adicionar portfólio à home nem alterar sua estrutura aprovada. Esta página ainda não possui mockup próprio aprovado: derive a identidade da home, sem reaproveitar as galerias ilustrativas rejeitadas.

PRÉ-REQUISITOS
Projetos: [PROJETO_1], [PROJETO_2], [PROJETO_3], [PROJETO_4] e [PROJETO_5].
As capturas reais desses cinco sites e suas URLs NÃO estão no pacote inicial. Inspecione os anexos fornecidos nesta etapa. Se faltarem capturas ou links, liste exatamente o que falta e não gere screenshots fictícios, URLs presumidas ou casos com resultados inventados. Não substituir sites reais por imagens de IA.
Se o usuário já tiver enviado URLs, use-as somente após verificar que são o projeto correto. Faça capturas no navegador se o ambiente permitir. Evite refazer toda a busca quando os arquivos já tiverem sido entregues.

QUANDO OS MATERIAIS ESTIVEREM DISPONÍVEIS
Reutilize header, tokens, marca e footer. Título Portfólio e introdução breve. Navegação explícita para a home. Use captura grande e legível por projeto, com nome, segmento confirmado, descrição factual e botão Visitar site. Nada de notebook minúsculo que torne o site ilegível. Cards e molduras escuros integrados à identidade; as cores dos sites ficam dentro da imagem, sem transformar toda a página em blocos promocionais desconexos.
Pode usar grade de duas colunas no desktop e uma no mobile; não há necessidade de filtros para apenas cinco itens. Não adicionar dashboard, conta, CMS ou depoimentos. Não criar cinco páginas de case sem conteúdo real suficiente. A página separada pode conter detalhes acessíveis em seções do próprio projeto.
Dados de portfolio centralizados em estrutura simples para futuras inclusões, preservando imagens e textos. Não simular métricas de vendas, performance, datas ou resultados.

VERIFICAÇÃO
Acesso pelo menu e botão Ver meus projetos da home, retorno à home, abertura direta/reload de /portfolio/, links de clientes, imagens nítidas, alt text e layout mobile. Concluir apenas quando os cinco projetos estiverem corretamente representados. Caso materiais faltem, relatar pendência específica e manter a home intacta.
```


---

# Refinamentos aplicados durante a construção

Os prompts abaixo complementam as etapas de base. Use apenas o ajuste correspondente ao problema observado e preserve regiões já aprovadas.

## B1 — Hero com excesso de espaço ou título mal quebrado

```text
Corrija apenas header e hero comparando o resultado atual com o mockup anexado.

Remova o excesso de vazio acima do conteúdo. Inspecione min-height: 100vh, padding-top, margens e centralização vertical antes de alterar valores. Não imponha altura de tela cheia se a referência não pedir isso.

Mantenha texto à esquerda e retrato à direita. Ajuste largura da coluna e tamanho do título para obter no desktop:
Seu negócio
merece
um site à altura.

Última linha na cor de destaque. Evite quebrá-la em “um site à” e “altura” quando houver espaço no desktop. No mobile permita quebra natural, sem nowrap global ou overflow.

Aumente a logo se estiver visualmente pequena, considerando margens transparentes internas. Preserve proporções. Integre o retrato ao fundo, eliminando aparência de foto retangular com bordas visíveis por meio de máscara suave no wrapper da imagem.

Não redesenhe os botões, o rosto ou a marca. Compare as duas capturas na mesma largura e valide 1440, 1024 e 390px.
```

## B2 — Assinatura visível e legenda correta no hero

```text
Corrija somente a assinatura e sua legenda no hero. Use o asset aprovado, não uma fonte itálica comum.

Primeiro confirme o src, a resposta da imagem na rede e o conteúdo do arquivo. Se a imagem carregar mas não aparecer, inspecione cor dos traços, fundo, opacity, filter, mix-blend-mode e z-index.

Para PNG branco transparente, use filter: none; mix-blend-mode: normal; opacity: 1. Não inverta uma assinatura já branca.

Se temporariamente o asset for preto sobre branco, filter: grayscale(1) invert(1) e mix-blend-mode: screen podem integrá-lo a uma superfície escura, mas isso NÃO cria transparência real no arquivo. Prefira substituir pelo PNG transparente aprovado.

No desktop, comece com largura de 145–160px, ajustada ao desenho visível; height: auto e object-fit: contain. Não distorça o arquivo nem corte floreios.

Abaixo, use texto HTML em três linhas:
DESIGN
QUE GERA
RESULTADOS

Fonte sans-serif, aproximadamente 12px, peso 500, entrelinha 1.45, tracking 0.16em e cor cinza-clara. Espaço entre imagem e legenda: 8–12px. Bloco posicionado ao lado da cabeça, sem sobrepor o rosto; linhas da legenda alinhadas à esquerda.

No mobile, reposicione com a foto ou reduza o conjunto sem prejudicar leitura. Preserve todo o restante do hero.
```

## B3 — Proporção do card de apresentação

```text
Refine exclusivamente #sobre usando o mockup como referência. O card deve ser horizontal e compacto, não um painel alto com grande espaço vazio.

Como referência, para cerca de 1150px de largura, busque altura próxima de 294px, permitindo crescimento se o texto precisar. Não force height fixo com conteúdo cortado.

Áreas aproximadas: foto nos primeiros 29%; texto começando a 33%; divisor a 71,5%; ícones a 75,5%; textos dos benefícios a 83% da largura. Use grid e gaps para aproximar essas proporções, não coordenadas rígidas para cada item.

Foto preenche a área esquerda com cabeça próxima do topo, preservada e sem deformação. Não é necessário mostrar o corpo inteiro.
Título em duas linhas, aproximadamente 33–35px:
Seu projeto, comigo
do início ao fim.

Descrição aproximadamente 18px, entrelinha 1.5. Assinatura horizontal branca com largura visível próxima de 175–190px; não reutilize a versão empilhada do hero.

Benefícios com ícones de alvo, pessoas e raio, aproximadamente 46–50px, textos 17–18px e divisor fino. Adapte valores à largura real e à legibilidade.

No mobile, permita reorganização em uma coluna, sem altura fixa e sem cortes. Preserve o hero; trate somente a transição no próximo ajuste.
```

## B4 — Sobreposição correta da apresentação sobre o retrato

```text
Corrija a relação entre hero e apresentação: na referência, o card de apresentação fica NA FRENTE da parte inferior do retrato principal. Não deixe espaço vazio entre a foto e o card.

Preserve dimensões internas do header e hero, posição do rosto, título e botões.

Inspecione os stacking contexts reais antes de ajustar z-index. Coloque hero/foto em camada inferior e o card #sobre em camada superior dentro de uma hierarquia compatível.

Mantenha o card no fluxo do documento e aplique margem superior negativa, começando em aproximadamente -100px no desktop e calibrando pela referência. Não use apenas translateY, pois ele pode deixar espaço reservado incorreto na seção seguinte.

O card deve cobrir a parte inferior dos braços/corpo, sem cobrir rosto ou CTAs. A foto precisa continuar até atrás do card; ajuste sua máscara inferior para ela não desaparecer antes da sobreposição.

Use fundo escuro quase opaco no card para evitar que o retrato apareça por trás do texto. Não mova o card para dentro de um container que o corte com overflow.

Recalibre o espaço até Serviços. Em telas pequenas, reduza ou remova a margem negativa se necessário. Verifique zoom e conteúdo ampliado. Não altere a assinatura nem o layout das outras dobras.
```

## C1 — Transparência e integração dos cinco cards de Serviços

```text
Refine somente #servicos, preservando o grid aprovado e os textos.

Primeiro card: remova linha divisória e fundos independentes entre ilustração e texto. Use uma única superfície externa com uma borda e um raio. Wrappers internos devem organizar conteúdo sem parecer painéis separados.

Use superfícies de vidro escuro com este ponto de partida:
background: linear-gradient(135deg, rgba(255,255,255,.045), rgba(255,255,255,.012) 45%, rgba(255,255,255,.025));
background-color: rgba(12,16,15,.64);
border: 1px solid rgba(255,255,255,.12);
box-shadow: inset 0 1px 0 rgba(255,255,255,.055), 0 8px 24px rgba(0,0,0,.12);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);

Esses valores são pontos de partida, não prova de fidelidade. Crie atrás do grid uma variação ampla de luz muito discreta para tornar a transparência perceptível. Predomínio neutro com mínimo toque da cor da marca no card principal. Sem neon nem halos fortes. Ofereça fallback escuro sem backdrop-filter.

Não use opacity no card inteiro: textos e ícones devem permanecer opacos e nítidos.

Ícones menores: 44–52px, traço consistente. Banco de dados empilhado; gráfico com três barras delineadas, não três linhas; lupa; engrenagem. Coluna do ícone à esquerda e título/descrição à direita, gap aproximado de 18px.

Setas: círculo de 42–46px, borda de aproximadamente 1.5px na cor da marca, seta branca de 20–22px. Rodapés alinhados por margin-top: auto, sem links aninhados.

No card principal, monitor e título ficam na mesma linha. Amplie a interface decorativa para cerca de 90% da largura interna e integre sua base por máscara gradual. Não crie screenshot de cliente nem use a captura inteira da referência.

Mobile: ícones 36–40px, alturas automáticas, nenhuma colisão e alvos de toque adequados. Preserve as outras seções.
```

## C2 — Correção final do card Sites e Landing Pages

```text
Ajuste SOMENTE o card “Sites e Landing Pages”.
Imagem 1: resultado atual. Imagem 2: referência desejada.
Use seletores exclusivos e preserve os quatro cards menores.

Não aumente a altura externa. Redistribua o conteúdo:
- Ilustração começa por volta de 9% da altura.
- Ocupa aproximadamente 58% da altura.
- Linha ícone + título começa por volta de 62%.
- Descrição começa por volta de 78%.
- Seta permanece no canto inferior direito.

Essas proporções são guias desktop, não posições absolutas universais.

Para um card próximo de 520 × 530px, comece com ilustração de 465 × 300px, centralizada, distante 42–46px do topo. Adapte à largura real.

Crie janela traseira deslocada 14px para cima, janela frontal, barra de navegador, três pontos coloridos, linha de navegação e pequeno botão na cor da marca. Dentro, um painel grande com linhas de texto à esquerda e retângulo de imagem à direita.

Substitua o pequeno ícone de imagem por duas montanhas geométricas em SVG inline. Use fundo cinza translúcido, borda suave e formas em intensidades diferentes.

As janelas devem ter borda fina cinza, reflexo interno no topo e gradiente branco translúcido discreto. Não aplique blur nos elementos internos. Primeira linha de texto mais clara e longa; seguintes menores e escuras.

Integre a base da ilustração:
mask-image: linear-gradient(to bottom, #000 0%, #000 68%, transparent 100%);
-webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 68%, transparent 100%);

A máscara atua SOMENTE na ilustração, nunca no título ou card inteiro. A borda inferior da janela não deve parecer divisória. Use camada decorativa com pointer-events: none e aria-hidden; conteúdo em camada superior, no fluxo, com pequena margem negativa se necessário.

Monitor e título na mesma linha: ícone próximo de 56px, gap de 20px, título 25–27px. Descrição 18px, entrelinha 1.5, largura máxima próxima de 370px:
“Sites modernos, rápidos e focados em resultados para o seu negócio.”

Busque duas linhas por largura, sem quebra forçada no mobile. Espaço entre título e descrição próximo de 20px.

Reduza o vazio inferior sem colidir texto com seta. Mobile com altura automática e sobreposição reduzida. Compare em mesma escala antes de concluir e preserve todas as outras regiões.
```

## D1 — Auditoria de encerramento e aplicação dos assets

```text
Revise o site sem redesenhar. Valide todas as seções e a página de portfólio.

Confira que nenhum placeholder do briefing permaneceu visível, nenhum dado de outra pessoa foi reutilizado e todos os projetos são reais e autorizados.

Assinaturas brancas transparentes devem usar filter: none e mix-blend-mode: normal. Logo e favicon devem manter transparência, proporção e cores. Use os assets aprovados; não troque por versões geradas posteriormente sem aprovação.

Configure o favicon no head usando o arquivo real. Verifique a URL, MIME, fundo transparente e legibilidade. Caso existam tamanhos derivados, utilize os que foram realmente produzidos, não caminhos fictícios. Verifique em aba nova após limpar o cache do favicon.

Confira sobreposição intencional do card de apresentação, legibilidade da foto, vidro discreto e integração da interface ilustrativa do card de Sites.

Teste 360, 390, 768, 1024 e 1440px; teclado, foco, menu, FAQ, CTAs, links externos, rota direta /portfolio/ e ausência de scroll horizontal. Valide build e rede: CSS/JS/imagens não podem retornar páginas HTML por erro de rewrite.

Revise title, description e domínio informado. Não publique dados fictícios, depoimentos inventados ou screenshots ilustrativos como trabalhos reais. Relate verificações efetivamente executadas e pendências.

Não faça commit, push ou deploy sem autorização.
```

## Checklist de compartilhamento

- Substituir todos os campos entre colchetes.
- Fornecer fotos e logo próprios, não os do autor do modelo.
- Aprovar seu mockup antes de implementar.
- Personalizar cores, serviços e textos à realidade profissional.
- Aplicar um prompt por vez.
- Manter cópia dos assets originais.
- Validar desktop e mobile a cada etapa.
- Não apresentar etapas planejadas como já testadas.
- Não prometer fidelidade pixel a pixel sem comparar o resultado renderizado.


