# Preferências específicas da Julia aplicadas ao Chaveiro Mota

Continue o estado atual em `F:\Solara\coding\sites-ladingpage-etc\chaveiro-mota-site`. Este complemento adapta pedidos reais feitos pela usuária para a CLIMABLU. Preserve a composição editorial, marca, rotas SEO, imagens e correções funcionais atuais. Não volte à versão anterior dos cards grandes nem reconstrua o site.

Leia o código atual e `FONTES.md`. Use Impeccable (`C:\Users\isand\.agents\skills\impeccable\SKILL.md` ou instalação do Antigravity), `solara-webcraft`, `direcao-visual`, `copy-site`, `acessibilidade-web` e `qa-e-teste` conforme necessário. As preferências da usuária prevalecem sobre bans genéricos da skill: cards compactos podem ser bons quando têm uma função real; isso não significa encaixotar todas as seções.

## Pedidos originais recuperados e pertinência

Na CLIMABLU, a usuária pediu: retirar uma divisória redundante quando já existem linhas seccionadas; acrescentar imagens/ícones e avaliar cards mais compactos nos serviços; dar destaque de botão aos CTAs importantes; tornar um benefício mais interativo; alinhar colunas do rodapé ao topo; evitar excesso de informação numa única linha; empilhar e agrupar links semelhantes; colocar copyright no fundo; e separar o horário de sábado para evitar confusão com dias úteis.

Adapte a lógica desses pedidos ao conteúdo do Chaveiro Mota. Não copie benefício ASPMB, horários de sábado, catálogo de climatização ou qualquer dado de outra empresa. Referência pública: `https://climablu-climatizacao.vercel.app/`.

## 1. Ações importantes com presença de botão

Header, hero e CTAs de contato já usam botões visuais. Preserve-os. Os links “Ver detalhes de chaveiro automotivo”, “Ver detalhes de chaveiro residencial” e “Ver serviços de cópia de chaves no balcão” ainda usam `.deep-link` ou `.deep-link-on-yellow`, que recebem menos presença.

Como agora existem páginas específicas para SEO, dê a esses destinos uma affordance clara de botão secundário: contorno ou fundo discreto, padding, altura confortável, seta consistente e foco visível. A ação de contato permanece dominante. Não faça todas as ações amarelas nem transforme cada link de navegação em botão.

Links de navegação devem continuar como `<a href>` com estilo de botão; use `<button>` apenas para ações de interface. Sem links aninhados, click handlers em divs ou botões que simulam links. No mobile, empilhe ações quando não houver largura; texto inteiro e área de toque mínima de 44px.

## 2. Dinamismo útil nos serviços de balcão

Automotivo e residencial já têm fotografias e CTAs; não precisam de mais imagens ou ícones em cada linha. O bloco “Serviços de Balcão e Oficina” é uma lista textual com bolinhas, e é onde a preferência por grupos compactos com ícones tem mais utilidade.

Avalie quatro módulos leves: cópias de chaves; troca de segredo; afiações; impressão/foto 3×4. Use a mesma família de ícones SVG, formas simples e coerentes, título e frase curta. Pode formar 2×2 em desktop e uma coluna mobile, caso isso reduza altura e melhore compreensão. A superfície amarela da seção e sua hierarquia devem continuar evidentes. Evite cards gigantes com borda, sombra, kicker, vários botões e repetição de descrições.

Cada módulo deve ter função se parecer clicável. Uma ação útil é abrir WhatsApp com o assunto selecionado, apenas após o clique do visitante; não enviar mensagem nem abrir contato automaticamente. Se for só informação, mantenha aparência não interativa. Não invente imagens dos trabalhos ou equipamentos próprios.

Não adicione ícones apenas para preencher espaço. Escolha tratamento conforme a leitura real em 390 e 1440px. O objetivo é uma seção compacta e reconhecível, não quantidade de componentes.

## 3. Interatividade com finalidade

O benefício ASPMB da CLIMABLU tinha condições reais que podiam ser expandidas. O Chaveiro Mota não possui esse benefício, então não deve ganhar uma oferta inventada para imitar a interação.

Mantenha FAQ nativo funcional. Se houver detalhes técnicos úteis já confirmados que deixem um módulo muito longo, use um disclosure `<details>` curto e acessível. Não esconda endereço, telefone, horários, principais serviços ou CTA dentro de acordeões. Outra interação útil é escolher o assunto de contato nos módulos do balcão, conforme o item anterior. Não implementar simulador de preço, agendamento, prazo de chegada ou backend sem escopo e dados reais.

## 4. Rodapé alinhado ao topo e links agrupados

O rodapé já tem três colunas e links verticais. Preserve isso e explicite `align-items: start` em `.footer-grid` ou equivalente; os wrappers não devem centralizar verticalmente suas colunas. Ajuste margens da marca e títulos para que os grupos comecem visualmente no mesmo eixo, sem formato de funil.

Dentro de “Páginas e Serviços”, agrupe de forma discreta: serviços (automotivo, residencial, cópias) e informações (início, loja/localização, dúvidas). Use listas separadas por pequeno espaço ou rótulos só se melhorarem leitura. Sem uma linha horizontal com seis links, sem excesso de mini headings e sem repetir os mesmos destinos em muitos grupos.

Endereço pode ocupar linhas naturais: rua/número e bairro/cidade/UF. Telefone deve permanecer reconhecível. Não comprima fontes para caber em uma linha. Preserve marca em largura intrínseca, sem esticá-la.

O copyright já está na faixa inferior; mantenha-o depois de todos os grupos. No mobile, organize qualquer texto complementar acima, para que direitos autorais sejam o encerramento do rodapé de conteúdo. A barra fixa de contato é uma camada de ação e não altera essa ordem semântica.

## 5. Horários em linhas compreensíveis

Atualmente loja e plantão já estão em linhas distintas, mas a loja combina os dois períodos numa frase. Apresente um bloco simples, legível e sem minúsculas obrigatórias:

**Loja física no Jarivatuba**

Segunda a sexta-feira

09h–12h · 14h–18h

**Plantão emergencial móvel**

24 horas, todos os dias

Pode usar `<dl>` ou HTML semântico equivalente e alinhamento de colunas no desktop, sem depender de nowrap ou espaços digitados para separar conteúdo. Preserve períodos e dias exatos. Na descrição do hero, uma síntese pode continuar; na loja e footer, horário completo deve ser fácil de escanear.

A CLIMABLU tinha expediente de sábado confirmado. O Chaveiro Mota não tem esse horário na fonte registrada; não adicionar sábado, domingo ou “fechado” por dedução. Plantão 24h não é expediente da loja.

## 6. Evitar divisórias duplicadas

Inspecione `.service-strip`, `.service-spec-item`, `.store-hours-editorial`, `.footer-bottom` e transições. Quando a superfície ou espaçamento já separa blocos, remova uma linha redundante. Preserve os filetes que realmente ajudam a ler listas e distinguir grupos. Não elimine indiscriminadamente todas as bordas nem acrescente contornos a cada módulo novo.

## 7. Revisão factual após o último refinamento

A versão atual reintroduziu afirmações que não estão corroboradas em `FONTES.md`: “Cópias de chaves na hora”, abertura de “utilitários e caminhões”, “modelos nacionais e importados” e “grande maioria” no FAQ, redefinição de cofres, digitalização de documentos e procedimentos técnicos específicos. Não afirmamos que sejam falsos: o problema é ausência de fonte que permita publicá-los como oferta da empresa.

Revise `src/data/site.ts`, a home e todas as páginas de serviços. Remova extensões não comprovadas ou verifique fonte pública inequívoca antes de manter. Prefira categorias confirmadas e consulta de compatibilidade pelo WhatsApp. Exemplo: “Cópias de chaves” em vez de “na hora”; “Consulte o atendimento para seu veículo informando marca, modelo e ano” em vez de compatibilidade ampla. Não adicionar cidades ou bairros como área atendida com base apenas nas sugestões de keyword.

Não remova serviços confirmados, contato, endereço, expediente, orçamento sem compromisso ou a identificação ilustrativa das imagens. SEO útil deve aprofundar informação verificável e nunca ampliar artificialmente a oferta.

## Validação localizada

Antes de editar, compare os pontos acima com o estado atual: preserve o que já está correto. Aplique as mudanças numa rodada. Confira home e páginas de serviços em 360/390/414/768/1440px, menu, foco, footer, horários, CTAs e conteúdo completo dos módulos.

Valide alvos de toque, contraste em amarelo/preto e variantes secundárias, redução de movimento e ausência de overflow. Se tornar um módulo interativo, teste destino e mensagem codificada sem enviar contato. Execute o pipeline real, ajustando apenas testes que cubram mudança de comportamento ou regressão factual. Não congelar layout antigo em assertions de CSS.

Capture uma comparação final desktop/mobile e pare. Entregue quais preferências da CLIMABLU foram aplicadas, quais já estavam corretas e quais não cabiam ao conteúdo do chaveiro. Não declare uma revisão visual concluída apenas porque encontrou todas as classes no código.
