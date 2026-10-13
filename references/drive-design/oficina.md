Prompts completos para site de oficina mecânica
Modelo baseado na direção visual da Storm Automotive
Este documento reúne um fluxo completo para montar um site institucional de oficina mecânica no VS Code com o assistente do Antigravity. A referência é o projeto Storm: hero escuro com fotografia, serviços em composição assimétrica, equipe, método de atendimento, estrutura, depoimentos, contato e rodapé.
Use os prompts em sequência. Cada etapa entrega uma parte verificável, com desktop e mobile previstos desde o início. Os parâmetros visuais são pontos de partida; os mockups aprovados orientam a composição final. A validação entre etapas reduz retrabalho, mas não elimina a necessidade de ajustes.
Como executar
1. Preencha os dados abaixo e organize as imagens indicadas na página seguinte. Salve os mockups aprovados na pasta de referências.
2. Envie o prompt mestre uma vez, seguido do prompt 0. Depois envie somente uma etapa por vez, com os anexos indicados. Em uma conversa nova, reenvie o prompt mestre e o registro do projeto.
3. Confira a prévia antes de avançar. Se houver diferença visual, use o prompt de ajuste pontual ao final. Não envie todos os prompts juntos.
4. Para a Storm já iniciada, use o prompt de retomada. O assistente deve identificar o que já existe e continuar da primeira pendência, sem reconstruir as etapas aprovadas.
Dados a preencher antes de começar
[NOME_OFICINA] · [CIDADE_UF] · [DOMINIO] · [TELEFONE]
[WHATSAPP_COM_DDI] · [ENDERECO_COMPLETO] · [HORARIOS]
[INSTAGRAM_URL] · [MAPA_URL] · [EMAIL_PUBLICO]
[SERVICOS_CONFIRMADOS] · [DIFERENCIAIS_CONFIRMADOS]
[DEPOIMENTOS_AUTORIZADOS] · [OUTRAS_REDES_CONFIRMADAS]
Para a Storm, use o nome Storm Automotive e a localização Ijuí–RS como contexto. Reconfirme os canais comerciais antes de publicar. Telefone fixo não comprova atendimento por WhatsApp. Endereço, horários, avaliações e números que aparecem nos mockups não devem ser tratados como dados confirmados.
Arquivos e referências
Use fotos individuais como recursos do site e os mockups como referência de layout. Mantenha os originais e crie versões otimizadas para a web. A pasta pública depende da stack: em projeto estático, assets/images/storm; em uma stack com public, public/assets/images/storm. O código deve seguir a convenção efetiva do projeto.
Referências visuais
Salve o mockup completo como referencias/mockup-desktop.png e a versão mobile como referencias/mockup-mobile.png. Salve recortes por seção quando necessário. Esses nomes são uma convenção proposta; se os arquivos tiverem outros nomes, registre o mapeamento antes de programar.
Para outra oficina, troque a marca e os recursos por materiais próprios autorizados. As imagens recriadas por IA neste projeto são ilustrativas: não comprovam a equipe, a estrutura física ou a identidade de clientes. Use fotos reais autorizadas para afirmações sobre essas pessoas e instalações. O retrato ilustrativo do depoimento não deve receber nome ou avaliação de um cliente real.
Prompt mestre para todas as etapas
Copie todo o texto abaixo na conversa de implementação. Anexe os mockups desktop e mobile e os dados preenchidos.
Início do prompt
Atue como desenvolvedor front-end sênior e designer de interfaces. Vamos construir um site institucional para [NOME_OFICINA], em [CIDADE_UF], seguindo os mockups anexados e executando uma etapa por vez. Trabalhe nos arquivos do projeto; não entregue apenas sugestões.
Antes de alterar arquivos, leia as instruções locais, identifique a stack, os scripts e as partes existentes. Preserve o trabalho aprovado e mudanças do usuário. Para um projeto vazio, adote HTML semântico, CSS organizado e JavaScript modular, sem backend. Se já houver uma stack funcional, mantenha-a. Registre as decisões para retomada.
A direção visual é automotiva premium e minimalista: fundos grafite e preto, áreas claras, laranja nos destaques, fotografia ampla e tipografia forte. Priorize proporções, alinhamento, recorte das imagens, espaçamento e hierarquia dos mockups. Não transforme o screenshot inteiro em uma página rasterizada: textos, links, botões e ícones devem ser elementos reais da interface.
Use como valores iniciais #0A0C0E para fundo escuro, #F7F6F3 para fundo claro e #FF5A1F para destaque. Defina tokens de cor, largura, espaçamento, raios e tipografia. Use Sora nos títulos e Manrope no corpo, com fallback sans-serif; caso outra fonte seja mais próxima da referência, documente a escolha. Não comprima letras com scaleX nem force alturas que cortem o texto. Ajuste o contraste das combinações sem perder a identidade.
Use exclusivamente os arquivos fornecidos e os dados comerciais confirmados. Não invente avaliações, pessoas, certificações, anos de atuação, marcas credenciadas, endereço, horário ou número de WhatsApp. Centralize dados e recursos em uma configuração. Campos ausentes devem ser nulos e registrados como pendências, nunca aparecer como placeholders no site público.
Implemente responsividade desde a primeira seção. Planeje 1440 px, 834 px e 390 px, verificando também 360 px. Use HTML semântico, foco visível, teclado, rótulos acessíveis e prefers-reduced-motion. Preserve a proporção dos recursos, configure recortes por breakpoint e reserve dimensões para impedir saltos no carregamento.
Evite dependências desnecessárias, efeitos que atrasam a leitura, rolagem artificial e animações contínuas. O hero deve carregar com prioridade; imagens abaixo da primeira dobra podem carregar sob demanda. Todo controle visível precisa de uma ação válida.
Ao concluir cada etapa, verifique o resultado disponível, corrija os problemas encontrados e atualize docs/estado-projeto.md com o que foi feito, validado, aprovado pelo usuário e pendente. Relate arquivos alterados, como abrir a prévia e o que foi realmente testado. Nunca afirme ter inspecionado um navegador se isso não ocorreu. Pare antes da próxima etapa. Não publique nem faça push sem uma instrução específica.
Prompt 0 Preparação do projeto
Anexos: mockups completos, logo, dados da oficina e pasta com todas as imagens. Pré-requisito: prompt mestre enviado.
Início do prompt
Execute apenas a etapa 0 do site de [NOME_OFICINA], aplicando o prompt mestre. Faça um inventário do projeto, das dependências, dos scripts disponíveis e dos recursos visuais antes de implementar.
Se houver um site existente, identifique as seções prontas e mantenha a estrutura atual. Se o projeto estiver vazio, prepare uma base estática simples, com arquivos separados para estilos, configuração comercial e comportamento. Não crie módulos de administração, login, agendamento com backend ou banco de dados: o contato inicial será por canais configurados.
Mapeie cada arquivo visual para sua função: logo, hero, quatro serviços, equipe, método e quatro fotos da estrutura. Verifique se a logo tem transparência real. Identifique imagens ausentes, duplicadas ou com dimensões insuficientes; registre a pendência e continue o que for possível. Não gere nem substitua recursos silenciosamente. Preserve os PNGs originais e prepare derivados WebP ou AVIF quando houver ferramenta adequada.
Crie uma configuração única para nome, localidade, telefone, WhatsApp, endereço, horários, domínio, redes, mapa, serviços, diferenciais e depoimentos. Use os dados fornecidos, separando valores confirmados de campos pendentes. Centralize a montagem de links de telefone e WhatsApp. O número de WhatsApp deve conter DDI e DDD, apenas dígitos; a mensagem precisa de codificação correta. Sem WhatsApp confirmado, os CTAs devem levar à seção de contato com um canal confirmado.
Prepare tokens: container máximo inicial de 1200 px; margens laterais de 40 px no desktop e 20 px no mobile; espaçamento inicial entre seções de 72 px e 48 px, respectivamente; gap de 16 a 24 px; bordas discretas e raios de 4 a 8 px. Ajuste esses valores pela referência, evitando espaços vazios excessivos. Use box-sizing consistente e tipografia fluida.
Prepare a navegação para #inicio, #servicos, #sobre, #estrutura e #contato. Defina um único H1 futuro e uma hierarquia de H2 e H3. Crie a estrutura para os componentes, sem preencher toda a página antecipadamente. Registre o mapa de recursos em docs/assets.md e as decisões em docs/estado-projeto.md.
Verifique que a base abre localmente, que a logo e um recurso de teste carregam e que os caminhos seguem a stack existente. Entregue o comando de execução, o inventário das imagens, a configuração criada e as pendências comerciais. Encerre esta etapa sem implementar o hero.
Critério para avançar
Base executável, caminhos conhecidos, recursos mapeados e dados comerciais centralizados. Para projeto já iniciado, a auditoria deve indicar exatamente o que será preservado.
Prompt 1 Cabeçalho e hero
Anexos: mockup completo, recorte do hero, referência mobile, logo e hero-oficina-storm-hq.png.
Início do prompt
Execute apenas a etapa 1, seguindo o prompt mestre e a base preparada. Implemente o cabeçalho, o hero e as faixas de confiança. Preserve o restante do projeto.
Cabeçalho: fundo escuro, logo à esquerda, links Início, Serviços, Sobre, Nosso espaço e Contato; CTA Agendar atendimento à direita. Use altura aproximada de 76 px no desktop e 64 px no mobile, ajustada ao mockup. A logo deve manter sua proporção, sem achatamento. Use cabeçalho fixo ou sticky com espaço de compensação e scroll-margin-top nos destinos. Marque o item ativo com traço laranja discreto.
Hero: fotografia ampla da oficina, com veículo e técnico visíveis à direita e texto à esquerda. Use hero-oficina-storm-hq.png; não cubra os elementos importantes com um overlay opaco. Se necessário, aplique gradiente escuro suave na área do texto. Comece com altura entre 600 e 720 px no desktop e ajuste pela proporção do mockup. Não use altura fixa no celular.
Copy do hero: chamada pequena “OFICINA MECÂNICA”; acrescente “PREMIUM” apenas se fizer parte do posicionamento aprovado. H1 “SEU VEÍCULO EM BOAS MÃOS”, destacando “BOAS MÃOS” em laranja. Texto de apoio: “Manutenção, tecnologia e confiança para você ir sempre mais longe.” Botões: “Agendar atendimento” e “Conheça nossos serviços”. O primeiro usa a regra central de contato; o segundo leva a #servicos.
Aplique título fluido de aproximadamente 48 a 64 px no desktop e 34 a 42 px no mobile, peso forte e entrelinha confortável. Limite a largura do texto para reproduzir as quebras da referência. Não force quebras que prejudiquem larguras intermediárias.
Faixa de confiança: use até três diferenciais confirmados, com ícones lineares e descrições curtas. Exemplos de redação, sujeitos ao briefing: “Atendimento especializado”, “Transparência em cada etapa” e “Em [CIDADE_UF]”. A segunda faixa pode mostrar veículos atendidos, estrutura e equipe somente quando confirmados. Não inclua “mais de 10 anos” ou “última geração” por dedução.
No mobile, use logo e botão de menu no cabeçalho. O menu precisa abrir e fechar, indicar aria-expanded, fechar ao selecionar uma âncora e responder a Escape. Garanta que o conteúdo não fique atrás do cabeçalho. Ajuste o enquadramento do hero para manter veículo e técnico reconhecíveis; se a sobreposição comprometer a leitura, apresente texto acima e fotografia abaixo. Não encolha o desktop inteiro.
Verifique 1440, 834, 390 e 360 px: logo íntegra, título sem cortes, botões acessíveis, imagem nítida e ausência de rolagem horizontal. Use alvos de toque de pelo menos 44 px. Registre o resultado e pare.
Critério para avançar
Composição próxima ao mockup, menu funcional e leitura clara nos quatro tamanhos. O hero não deve depender de uma animação para aparecer.
Prompt 2 Serviços e apresentação
Anexos: recortes Serviços e Sobre, quatro fotos de serviços e foto da equipe. Preserve cabeçalho e hero aprovados.
Início do prompt
Execute apenas a etapa 2, seguindo o prompt mestre. Acrescente Serviços e Sobre, sem alterar o cabeçalho, o hero e suas faixas aprovadas.
Serviços: fundo claro, pequena chamada “NOSSOS SERVIÇOS”, H2 “MANUTENÇÃO COMPLETA PARA O SEU VEÍCULO”, com a segunda parte em laranja. Apoio: “Cuidado para o seu carro, com clareza em cada etapa.” Use os quatro serviços a seguir apenas se estiverem confirmados no briefing; adapte os títulos e as fotos quando necessário.
01 Revisão preventiva — “Mais segurança e cuidado para os próximos quilômetros.” Arquivo servico-revisao-preventiva-hq.png.
02 Diagnóstico eletrônico — “Tecnologia para identificar falhas e orientar o reparo.” Arquivo servico-diagnostico-eletronico-hq.png.
03 Manutenção especializada — “Cuidados com os sistemas do veículo, conforme a avaliação técnica.” Arquivo servico-manutencao-especializada-hq.png.
04 Ar-condicionado — “Conforto térmico e cuidados com a climatização do seu carro.” Arquivo servico-ar-condicionado-hq.png.
Reproduza o grid assimétrico: primeiro card alto à esquerda, dois cards horizontais empilhados no centro e quarto card alto à direita. Use CSS Grid; fotos com object-fit: cover e pontos de foco individuais. Coloque número, título, descrição e seta como elementos reais sobre um gradiente que permita leitura. Bordas e raios discretos; hover com aproximação leve da imagem, também com indicação de foco.
Cada card deve ter uma ação definida: iniciar contato com mensagem sobre o respectivo serviço ou levar a #contato quando o WhatsApp estiver pendente. Evite links aninhados. O link “Ver todos os serviços” só deve aparecer se existir conteúdo adicional real; caso contrário, use “Fale sobre o seu veículo” com destino de contato. No tablet, organize duas colunas; no mobile, uma coluna, na ordem 01 a 04, sem compressão ou textos escondidos.
Sobre: foto da equipe à esquerda e conteúdo à direita, alinhados como na referência. Chamada “SOBRE A [NOME_OFICINA]”. H2 “TRABALHO SÉRIO QUE GERA CONFIANÇA”. Texto-base: “A [NOME_OFICINA] atende em [CIDADE_UF], com foco no cuidado com o seu veículo e na clareza do atendimento.” Inclua fatos adicionais somente a partir do briefing. Use três diferenciais confirmados com ícones e títulos curtos.
A foto vertical da equipe exige recorte cuidadoso: não corte cabeças nem force todos os corpos em um quadro horizontal inadequado. Ajuste a altura da seção ou object-position. O botão “Conheça nossa história” exige uma história real e um destino implementado; sem esse conteúdo, use “Fale com nossa equipe” levando ao contato. No mobile, fotografia seguida do texto. Não acrescente anos de atuação sem confirmação.
Verifique recortes, contraste, ordem de leitura, cliques e alinhamento de títulos. Compare com os anexos e registre as diferenças que dependem de novos recursos. Pare ao concluir.
Prompt 3 Método e estrutura
Anexos: recortes Método e Estrutura, fundo do método e quatro fotos da galeria.
Início do prompt
Execute apenas a etapa 3, aplicando o prompt mestre e preservando as seções aprovadas. Implemente Método e Estrutura na sequência do Sobre.
Método: seção escura com metodo-storm-background-hq.png. Preserve a área escura para o texto e a mão com a ferramenta à direita. Ajuste o recorte sem esticar o recurso. Use a chamada “MÉTODO [NOME_OFICINA]” e o H2 “DO DIAGNÓSTICO À SUA TRANQUILIDADE”, destacando a segunda parte em laranja. Apoio: “Um processo claro, com informação em cada etapa do cuidado com o seu veículo.”
Apresente três etapas, se esse fluxo for confirmado pela oficina. 01 Diagnóstico preciso: “Avaliamos o veículo para identificar o que precisa de atenção.” 02 Aprovação transparente: “Você recebe as informações e o orçamento antes da execução do serviço.” 03 Serviço com padrão técnico: “O trabalho é realizado conforme o escopo aprovado para o seu veículo.” Ajuste o texto ao processo efetivamente praticado.
Use ícones lineares de lupa, documento e ferramentas, números em laranja, divisórias finas e setas discretas. Desktop em três colunas com título e descrição alinhados. Tablet e mobile devem reorganizar o conteúdo conforme a largura, com sequência vertical no celular. Reduza ou oculte a parte decorativa da foto se ela prejudicar a leitura. Nenhum texto pode estar incorporado à imagem de fundo.
Estrutura: fundo claro, chamada “NOSSA ESTRUTURA”, H2 “ESTRUTURA QUE INSPIRA CONFIANÇA”. Texto-base: “Conheça os espaços e os recursos disponíveis para cuidar do seu veículo.” A descrição precisa corresponder ao espaço real e aos materiais aprovados. Não atribua instalações ilustrativas à empresa como se fossem fotos documentais.
Monte uma galeria assimétrica com quatro fotografias: estrutura-oficina-panoramica-hq.png como imagem principal; estrutura-tecnico-elevador-hq.png como segunda imagem; estrutura-diagnostico-hq.png e estrutura-recepcao-hq.png complementando a composição. A referência contém também um painel de ferramentas; como temos quatro arquivos específicos, não invente uma quinta foto nem duplique uma imagem para preencher espaço.
No desktop, texto à esquerda e galeria à direita. No mobile, texto seguido da imagem principal e demais fotos em uma ou duas colunas conforme legibilidade. Use espaçamento consistente e zoom de hover muito sutil. Se as fotos forem clicáveis, implemente ampliação acessível com legenda, fechamento, Escape, foco contido e retorno do foco ao item de origem. Caso não implemente ampliação, não mostre aparência de botão.
O CTA “Conheça nosso espaço” deve abrir a galeria implementada ou levar à localização confirmada; se não houver um destino adicional útil, omita-o. Valide que as imagens carregam, que as mãos e os equipamentos não são cortados de modo inadequado e que o método permanece legível no mobile. Atualize o registro e pare.
Prompt 4 Depoimentos contato e rodapé
Anexos: parte final dos mockups, dados comerciais confirmados e depoimentos autorizados quando disponíveis.
Início do prompt
Execute apenas a etapa 4, aplicando o prompt mestre. Complete a página com depoimentos válidos, contato e rodapé, preservando as seções aprovadas.
Depoimentos: use uma seção clara, com foto à esquerda e citação à direita, seguindo a composição do mockup. Exiba apenas relatos reais autorizados, com nome e identificação permitidos. Não reutilize o nome, o texto de avaliação ou a identidade fictícia do mockup. Não associe o retrato gerado por IA ao depoimento de uma pessoa real. Sem depoimento confirmado, mantenha o componente pronto e oculto, sem uma área vazia nem um aviso público de desenvolvimento. Registre a pendência.
Contato: fundo escuro, chamada “CONTATO”, H2 “VAMOS CUIDAR DO SEU VEÍCULO?” e apoio “Fale com nossa equipe para consultar disponibilidade e explicar o que seu carro precisa.” Use botão verde “Agendar pelo WhatsApp” somente com o número confirmado. Mensagem inicial: “Olá! Vim pelo site da [NOME_OFICINA] e gostaria de consultar um atendimento para meu veículo.” Se não houver WhatsApp confirmado, use telefone ou outro canal validado, ajustando o rótulo do botão.
Organize três áreas no desktop: chamada e CTA; endereço, telefone e horários; mapa. Mostre somente os campos preenchidos. Telefone usa link tel. Endereço e mapa devem apontar para a unidade correta. Sem localização exata, omita o mapa e redistribua o layout em duas colunas; não invente um pin. Quando houver mapa incorporado, inclua título acessível, carregamento adiado e link externo para abrir a localização. Evite formulário sem backend; se o briefing não pedir formulário, mantenha o contato direto.
No mobile, empilhe CTA, informações e mapa, com margens laterais consistentes. Se houver botão flutuante de WhatsApp, ele não pode cobrir links, textos, controles do mapa ou o rodapé; respeite a área segura da tela.
Rodapé: fundo preto, logo preservada e frase institucional aprovada. Para a Storm, a referência visual usa “Mais que mecânica, confiança em movimento”. Use colunas de navegação, contato e redes efetivamente configuradas. No mobile, reorganize em blocos legíveis, sem grandes espaços vazios abaixo da marca.
Inclua copyright com o ano atual e o nome da empresa. Só mostre redes com URL confirmada. Links de privacidade e termos precisam de destinos com conteúdo real aprovado: não crie links vazios, páginas fictícias ou textos jurídicos inventados. Registre a necessidade dos documentos aplicáveis antes da publicação.
Verifique todos os links e telefones, a mensagem do WhatsApp e as âncoras. Teste o layout quando campos opcionais estiverem ausentes. Confirme que o final da página é completo, sem espaços acidentais ou conteúdo atrás de botões flutuantes. Relate as pendências comerciais e encerre esta etapa.
Prompt 5 Mobile e interações
Anexos: mockup mobile aprovado e capturas atuais de desktop e mobile. Esta etapa refina a página inteira.
Início do prompt
Execute a etapa 5, seguindo o prompt mestre. Faça uma revisão de responsividade e interações em toda a página. Preserve a direção visual e a composição desktop já aprovada; corrija problemas concretos, sem redesenhar o site inteiro.
Valide 1440, 834, 390 e 360 px. Se houver navegador disponível, capture as páginas completas após fontes e imagens carregarem. Não simule um teste que não pôde executar. Verifique também larguras intermediárias quando surgir uma quebra de layout.
No cabeçalho, confirme que o menu mobile é operável por teclado, fecha ao navegar, restaura o foco quando necessário e não bloqueia a rolagem depois de fechado. Se o menu for um modal, gerencie foco, fundo inativo e Escape. Garanta que âncoras permaneçam visíveis abaixo do cabeçalho.
No hero, preserve uma leitura confortável do H1, CTAs visíveis e foco correto da fotografia. Corrija espaços excessivos e texto sobre rostos ou elementos importantes. Não esconda conteúdo essencial para fazer o layout caber. Evite alturas rígidas e mantenha botões com área de toque suficiente.
Nos serviços, confira sequência, proporção das imagens, posição das legendas e altura natural dos textos. Sobre deve preservar os rostos da equipe e evitar colunas estreitas. Método precisa de passos legíveis e separações consistentes. Galeria deve manter recortes úteis. Contato e rodapé devem terminar sem espaços mortos, sobreposição ou rolagem horizontal. Não use overflow-x: hidden como forma de esconder a causa de um elemento largo demais.
Aplique hover e foco discretos: transições entre 160 e 220 ms em botões, setas, bordas e imagens. Preserve contraste em todos os estados. Implemente scroll reveal com IntersectionObserver, opacidade e deslocamento curto de 12 a 20 px, duração aproximada de 450 ms e atraso discreto entre itens relacionados. Anime uma vez. Não anime o H1 e a imagem principal de forma que atrase seu aparecimento.
Com prefers-reduced-motion, desative deslocamentos e rolagem suave. Se JavaScript falhar, o conteúdo deve continuar visível; use melhoria progressiva. Não inclua parallax intenso, cursor personalizado ou bibliotecas de rolagem sem necessidade.
Verifique foco visível, ordem de tabulação, contraste, nomes acessíveis dos ícones, textos alternativos úteis e uma única ocorrência de H1. Elementos decorativos devem ser ignorados por leitores de tela. Teste zoom de 200% quando o ambiente permitir e confirme que o conteúdo continua utilizável.
Corrija apenas as divergências identificadas e repita as verificações afetadas. Entregue uma lista curta dos ajustes, as larguras testadas, as capturas disponíveis e eventuais limitações. Atualize docs/estado-projeto.md e pare.
Prompt 6 Qualidade e preparação para publicar
Anexos: domínio e dados finais confirmados. Publicação não é executada por este prompt.
Início do prompt
Execute apenas a etapa 6, aplicando o prompt mestre. Faça a revisão final e prepare o projeto para publicação, preservando o layout aprovado. Não faça push nem deploy nesta etapa.
Funcionalidade: verifique navegação, menu, CTAs, links externos, telefone, WhatsApp, ampliação da galeria quando existir e mapa. Identifique controles sem destino, links vazios e referências a seções inexistentes. Confirme que nenhum placeholder, dado fictício ou texto de desenvolvimento aparece na interface.
Recursos e desempenho: valide todas as URLs de imagens, fontes, CSS e JavaScript. Verifique nomes com diferença de maiúsculas e minúsculas, que podem falhar no servidor. Use formatos otimizados e tamanhos proporcionais à exibição, mantendo os originais. Inclua width e height ou aspect-ratio para reservar espaço. Não aplique lazy loading ao hero; use carregamento prioritário quando suportado. Imagens fora da primeira dobra podem carregar sob demanda. Não aumente arquivos pequenos fingindo recuperar detalhes perdidos.
SEO: configure título específico “[NOME_OFICINA] | Oficina mecânica em [CIDADE]”, descrição coerente com os serviços reais, idioma pt-BR, hierarquia semântica e Open Graph com imagem apropriada. Defina URL canônica, robots.txt e sitemap.xml somente com o domínio e rotas corretos. Em prévia, impeça indexação quando houver suporte da hospedagem. Não inclua avaliações agregadas ou dados de endereço inventados em dados estruturados. Se usar AutoRepair, preencha apenas propriedades verificadas.
Prepare favicon a partir de um símbolo autorizado e legível em tamanho pequeno. Não comprima a logo inteira em 16 px. Não adicione pixels, cookies de marketing ou rastreamento sem solicitação e configuração apropriada.
Publicação estática: inspecione a stack e determine a saída real do build. Em HTML estático hospedado na raiz, referências a arquivos públicos podem usar /assets/... para evitar resolução incorreta em rotas. Em frameworks, use as convenções de importação e recursos públicos da stack; não aplique uma substituição global de caminhos. Se houver basePath ou hospedagem em subdiretório, considere essa base explicitamente.
Para Vercel, documente o comando de build e a pasta de saída corretos. Só crie vercel.json ou scripts/build.mjs se o projeto exigir; não copie configurações incompatíveis. Não assuma que PHP será executado em uma hospedagem estática. Preserve regras existentes e valide que não há rewrites mascarando arquivos ausentes.
Execute o build ou verificação equivalente e sirva a saída de produção localmente. Confira página inicial, acesso direto a rotas internas reais, CSS, JavaScript, imagens e favicon. Se algum teste não puder ser realizado, registre isso. Entregue resultado dos testes, instruções de publicação, pendências que impedem lançar e a lista dos arquivos alterados. O site só está pronto para publicar quando os dados e fluxos públicos estiverem completos.
Prompts para ajustes e retomada
Ajuste pontual de uma seção
Anexe uma captura atual e o recorte aprovado. Substitua os campos entre colchetes e copie o texto abaixo.
Aplique o prompt mestre e ajuste somente [SECAO] no projeto de [NOME_OFICINA]. A imagem 1 mostra o resultado atual; a imagem 2 mostra a referência aprovada. As diferenças que quero corrigir são: [LISTA_OBJETIVA].
Inspecione o HTML, CSS, componentes e recursos envolvidos. Compare largura do container, margens, alinhamento, tamanho e peso dos textos, quebras de linha, proporção das fotos, object-position, cores e posição dos botões. Identifique a causa de cada diferença antes de editar. Preserve conteúdo, links, identidade e seções já aprovadas.
Faça o menor conjunto de alterações que resolva o problema. Evite regras globais e !important em sequência; ajuste a regra responsável e confira seus breakpoints. Não substitua a imagem fornecida nem recrie a seção com outro estilo.
Verifique a seção no desktop e no mobile e confira se elementos vizinhos foram afetados. Se possível, capture o antes e o depois na mesma largura. Liste o que foi corrigido, o que foi testado e qualquer diferença que dependa de um recurso ausente. Atualize docs/estado-projeto.md. Pare após esse ajuste.
Retomada no dia seguinte
Envie este prompt ao reabrir o projeto ou iniciar outra conversa com o assistente.
Vamos continuar o site de [NOME_OFICINA]. Leia as instruções locais, docs/estado-projeto.md, docs/assets.md, a configuração comercial e os arquivos atuais antes de editar. Use o prompt mestre e os mockups aprovados como referência. Preserve mudanças locais e o que já foi aprovado.
Verifique o estado real do projeto e compare com o registro. Não marque uma etapa como aprovada só porque está implementada. O objetivo desta sessão é [AJUSTE_OU_ETAPA]. Se esse campo estiver vazio, apresente a primeira pendência registrada e sua correção concreta; execute os ajustes locais já autorizados, sem reconstruir o site inteiro.
Trabalhe somente no escopo indicado. Reutilize componentes e recursos existentes. Confirme o resultado nas larguras afetadas, registre os testes de fato realizados e atualize as pendências. Não repita etapas concluídas nem publique sem solicitação. Ao terminar, entregue o resumo do resultado e o próximo passo recomendado.
Ordem de trabalho
Prompt mestre → 0 Preparação → 1 Cabeçalho e hero → 2 Serviços e apresentação → 3 Método e estrutura → 4 Final da página → 5 Mobile e interações → 6 Qualidade. Use o ajuste pontual entre etapas sempre que a comparação visual indicar uma diferença.
Uso
Arquivo do projeto Storm
Logo transparente
logo-storm-transparente-4096.png
Hero
hero-oficina-storm-hq.png
Revisão
servico-revisao-preventiva-hq.png
Diagnóstico
servico-diagnostico-eletronico-hq.png
Manutenção
servico-manutencao-especializada-hq.png
Ar-condicionado
servico-ar-condicionado-hq.png
Equipe
equipe-storm-hq.png
Método
metodo-storm-background-hq.png
Estrutura geral
estrutura-oficina-panoramica-hq.png
Elevador
estrutura-tecnico-elevador-hq.png
Diagnóstico na estrutura
estrutura-diagnostico-hq.png
Recepção
estrutura-recepcao-hq.png
