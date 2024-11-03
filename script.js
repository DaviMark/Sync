const predefinedQA = [
    { "question": "Olá", "answer": "Olá! Como posso te ajudar hoje?" },
    { "question": "Bom dia", "answer": "Bom dia! Como posso te ajudar?" },
    { "question": "Boa tarde", "answer": "Boa tarde! Em que posso ser útil?" },
    { "question": "Boa noite", "answer": "Boa noite! Precisa de algo?" },
    { "question": "Oi", "answer": "Oi! Como posso te ajudar?" },
    { "question": "Tchau", "answer": "Até logo! Volte sempre!" },
    { "question": "Obrigado", "answer": "De nada! Estou sempre à disposição." },
    { "question": "Valeu", "answer": "Valeu! Qualquer coisa, é só avisar!" },
    // Sobre Assoc
    { "question": "Porque é importante?", "answer": "Os serviços da Assoc são essenciais para empresas que buscam se destacar no mercado. Oferecemos soluções de Marketing, como Landing Pages que convertem, gerenciamento de Social Media e Copywriting persuasivo, além de estratégias personalizadas. Na área de Tecnologia, garantimos a Estruturação de Bancos de Dados, Construção de Sites e Apps, e Automatização de Processos, otimizando a eficiência e proporcionando insights valiosos. Ao escolher a Assoc, você investe em soluções que promovem crescimento e resultados duradouros." },
    { "question": "Serviços da Assoc!", "answer": "Na Assoc, temos uma variedade de pacotes de projetos em diversas áreas. Confira todas as informações em nosso site: https://assoc-woad.vercel.app/" },
    { "question": "O que é a Assoc?", "answer": "A Assoc é uma empresa especializada em Tecnologia e Marketing, dedicada a ajudar indivíduos e projetos a ganharem visibilidade no mercado. Oferecemos soluções inovadoras que incluem automação de tarefas e estratégias personalizadas, permitindo que nossos clientes se destaquem em suas respectivas áreas. Nosso objetivo é promover a diferenciação e o sucesso de nossos clientes, adaptando-nos às suas necessidades específicas e às dinâmicas do mercado." },
    // Fim    
    // Advogacia
    { "question": "Posso te ajudar com prazos?", "answer": "Claro! Quer que eu ajude a calcular algum prazo processual?" },
    { "question": "Preciso de jurisprudência", "answer": "Entendido! Qual é o tema ou tribunal específico que está buscando?" },
    { "question": "Como redigir uma petição inicial?", "answer": "Para começar, defina os fatos, o direito aplicável e faça um pedido claro. Precisa de um modelo?" },
    { "question": "Como funciona o recurso especial?", "answer": "O recurso especial é dirigido ao STJ e aborda questões de interpretação de leis federais. Posso explicar mais detalhes?" },
    { "question": "Quais são os honorários advocatícios?", "answer": "Os honorários podem ser contratados de forma fixa, por êxito ou por hora. Quer ajuda com a tabela da OAB?" },
    { "question": "O que fazer em caso de audiências virtuais?", "answer": "Certifique-se de ter uma conexão estável, um ambiente profissional e verifique se os documentos estão disponíveis. Precisa de mais dicas?" },
    { "question": "Como consultar processos?", "answer": "Você pode consultar pelo site do tribunal ou sistemas como PJe e E-SAJ. Posso ajudar com algum deles?" },
    { "question": "Como revisar um contrato?", "answer": "Leia atentamente as cláusulas de obrigação, responsabilidade e rescisão. Deseja dicas específicas?" },
    { "question": "Dúvidas sobre ética profissional", "answer": "Posso te ajudar com o Código de Ética da OAB. Qual é a questão específica?" },
    { "question": "Qual é o prazo para embargos de declaração?", "answer": "O prazo geralmente é de 5 dias a partir da intimação. Precisa de mais detalhes?" },
    { "question": "Posso ajuizar uma ação hoje?", "answer": "Verifique se há algum impedimento legal ou se os prazos estão corretos. Precisa de ajuda para confirmar?" },
    { "question": "Como faço para protocolar uma petição?", "answer": "Você pode usar os sistemas eletrônicos dos tribunais. Precisa de instruções para algum tribunal específico?" },
    { "question": "Preciso de um modelo de contrato de prestação de serviços", "answer": "Posso te fornecer um modelo padrão ou adaptar conforme necessário. Quer detalhes sobre cláusulas específicas?" },
    { "question": "Como preparar uma defesa?", "answer": "Analise os argumentos da parte contrária, reúna provas e destaque teses jurídicas fortes. Posso ajudar com algum aspecto específico?" },
    { "question": "Preciso de atualização legislativa", "answer": "Posso te informar sobre as últimas mudanças legais. Alguma área específica de interesse?" },
    { "question": "Como preparar uma sustentação oral?", "answer": "Organize seus argumentos de forma clara e objetiva. Pratique antes e controle o tempo. Precisa de ajuda com algum caso?" },
    { "question": "Preciso revisar uma cláusula de não concorrência", "answer": "É importante verificar se o período e a abrangência territorial são razoáveis. Quer discutir detalhes?" },
    { "question": "Como fazer uma petição para execução de título extrajudicial?", "answer": "Explique os requisitos legais do título e peça a execução. Precisa de ajuda com a redação?" },
    { "question": "Como argumentar em uma réplica?", "answer": "Reforce seus pontos iniciais, refute argumentos novos e apresente provas adicionais se necessário. Precisa de ajuda específica?" },
    { "question": "Como calcular custas judiciais?", "answer": "As custas variam conforme o tribunal e a ação. Posso ajudar a encontrar a tabela correta?" },
    { "question": "O que é agravo de instrumento?", "answer": "É um recurso utilizado para contestar decisões interlocutórias. Quer detalhes sobre a estrutura?" },
    { "question": "Preciso de um modelo de acordo extrajudicial", "answer": "Um bom acordo deve especificar obrigações, prazos e eventuais penalidades. Posso criar um modelo para você?" },
    { "question": "Como lidar com prazos processuais suspensos?", "answer": "Fique atento às comunicações do tribunal sobre suspensão e retomada. Precisa de ajuda para confirmar algum prazo?" },
    { "question": "Preciso de um parecer jurídico", "answer": "Explique o caso e a questão jurídica envolvida. Posso ajudar com a elaboração?" },
    { "question": "Como funciona a intimação eletrônica?", "answer": "A intimação eletrônica ocorre por meio de sistemas processuais como o PJe. Quer saber mais detalhes?" },
    { "question": "Como formalizar uma procuração?", "answer": "Especifique os poderes concedidos e, se necessário, reconheça a firma. Precisa de um modelo?" },
    { "question": "Como pedir tutela antecipada?", "answer": "Demonstre o perigo na demora e a probabilidade do direito. Precisa de ajuda com a argumentação?" },
    { "question": "Preciso fundamentar um pedido de reconsideração", "answer": "Apresente fatos novos ou argumentos que demonstrem erro na decisão anterior. Quer ajuda com a redação?" },
    { "question": "O que é contestação por negativa geral?", "answer": "É uma defesa genérica que nega os fatos alegados pelo autor. Quer discutir a viabilidade disso no seu caso?" },
    { "question": "Como preparar um recurso de apelação?", "answer": "Apresente os fundamentos de fato e de direito que justificam a reforma da sentença. Precisa de um modelo?" },
    { "question": "Quais são os principais cuidados com prova documental?", "answer": "Verifique a autenticidade, relevância e adequação ao caso. Precisa de ajuda com alguma prova específica?" },
    { "question": "Preciso peticionar sobre um despacho", "answer": "Informe os dados do despacho e argumente de forma clara e objetiva. Posso ajudar com um modelo?" },
    { "question": "Como acompanhar uma execução trabalhista?", "answer": "Acompanhe o andamento no site do tribunal e esteja atento às penhoras e cálculos. Quer mais detalhes?" },
    { "question": "Preciso fundamentar um habeas corpus", "answer": "Explique a ilegalidade ou abuso de poder e peça a soltura do paciente. Posso ajudar com os argumentos?" },
    { "question": "Como protocolar um mandado de segurança?", "answer": "Demonstre direito líquido e certo e a ilegalidade do ato coator. Precisa de um modelo para começar?" },
    { "question": "O que fazer em caso de intimação irregular?", "answer": "Você pode alegar nulidade se houve prejuízo. Precisa de ajuda com a petição?" },
    { "question": "Como redigir um contrato de locação?", "answer": "Inclua cláusulas sobre valor do aluguel, duração e responsabilidades das partes. Posso te passar um modelo?" },
    { "question": "Preciso impugnar cálculos periciais", "answer": "Aponte os erros matemáticos ou de metodologia na impugnação. Precisa de ajuda com a redação?" },
    { "question": "Como preparar uma defesa prévia criminal?", "answer": "Verifique se a denúncia tem fundamentos e apresente argumentos defensivos. Quer discutir o caso?" },
    { "question": "O que é cláusula compromissória?", "answer": "É uma cláusula em que as partes se comprometem a resolver litígios por arbitragem. Precisa de mais informações?" },
    { "question": "Como elaborar uma notificação extrajudicial?", "answer": "Seja claro e objetivo ao expor os fatos e solicitar providências. Posso ajudar com um exemplo?" },
    { "question": "Preciso fazer uma queixa-crime", "answer": "Descreva o crime, a autoria e o pedido ao juiz. Quer ajuda com a estrutura?" },
    { "question": "Como fazer uma sustentação no TJ?", "answer": "Foque nos pontos mais relevantes do processo e mantenha-se no tempo. Precisa de ajuda para ensaiar?" },
    { "question": "O que é exceção de incompetência?", "answer": "É uma defesa que questiona a competência do juízo. Quer mais detalhes ou um exemplo?" },
    { "question": "Preciso verificar se uma decisão transitou em julgado", "answer": "Consulte o processo no sistema do tribunal para confirmar. Quer que eu explique o procedimento?" },
    { "question": "Como lidar com multa por litigância de má-fé?", "answer": "Explique que deve haver dolo ou culpa grave para a aplicação da multa. Precisa de defesa contra uma acusação?" },
    { "question": "Preciso de um parecer sobre cláusula abusiva", "answer": "Informe os detalhes do contrato e posso avaliar os pontos críticos. Quer enviar para revisão?" },
    { "question": "Como interpor embargos à execução?", "answer": "Alegue fundamentos de direito ou falhas no título executivo. Precisa de ajuda com a peça?" },
    { "question": "O que é ação de consignação em pagamento?", "answer": "É usada para depositar um valor devido em juízo quando o credor não aceita. Quer ajuda com um caso específico?" },
    { "question": "Preciso de um modelo de carta de preposição", "answer": "A carta deve identificar o preposto e especificar os poderes concedidos. Quer que eu faça um rascunho?" },
    { "question": "Como contestar um laudo médico pericial?", "answer": "Aponte as inconsistências ou argumentos técnicos contrários. Precisa de um modelo para começar?" },
    // Fim
    // Sobre Word
    { "question": "Como inserir um índice automaticamente?", "answer": "Vá até a aba 'Referências' e clique em 'Sumário'. Escolha o estilo que deseja, e o Word gerará o índice automaticamente." },
    { "question": "Qual o atalho para negrito?", "answer": "Use o atalho 'Ctrl + B' para aplicar ou remover negrito no texto selecionado." },
    { "question": "Como criar uma tabela rapidamente?", "answer": "Use 'Alt + N' e selecione 'Tabela' ou digite '+' e 'Tab' para criar uma tabela simples." },
    { "question": "Qual o atalho para salvar rapidamente?", "answer": "Use 'Ctrl + S' para salvar o documento." },
    { "question": "Como alterar a orientação da página?", "answer": "Vá até 'Layout', depois em 'Orientação' e escolha 'Retrato' ou 'Paisagem'." },
    { "question": "Como inserir cabeçalho ou rodapé?", "answer": "Vá para a aba 'Inserir' e clique em 'Cabeçalho' ou 'Rodapé' para escolher um modelo." },
    { "question": "Qual o atalho para sublinhado?", "answer": "Use 'Ctrl + U' para sublinhar ou remover o sublinhado do texto." },
    { "question": "Como dividir o texto em colunas?", "answer": "Selecione o texto, vá em 'Layout' e clique em 'Colunas' para dividir o conteúdo." },
    { "question": "Como fazer uma pesquisa no documento?", "answer": "Use 'Ctrl + F' para abrir o painel de pesquisa e encontrar palavras ou frases." },
    { "question": "Como usar o recurso de formatação automática?", "answer": "Vá em 'Arquivo > Opções > Revisão > Opções de Autocorreção' e configure conforme desejar." },
    { "question": "Qual o atalho para copiar e colar?", "answer": "Use 'Ctrl + C' para copiar e 'Ctrl + V' para colar." },
    { "question": "Como aplicar um estilo rápido?", "answer": "Use 'Ctrl + Shift + S' para abrir o menu de estilos e aplicar um ao texto." },
    { "question": "Qual o atalho para desfazer uma ação?", "answer": "Use 'Ctrl + Z' para desfazer a última ação realizada." },
    { "question": "Como colocar uma marca d'água no documento?", "answer": "Vá para 'Design', clique em 'Marca d'água' e escolha uma das opções disponíveis." },
    { "question": "Como ativar a régua?", "answer": "Vá até a aba 'Exibir' e marque a opção 'Régua' para ativá-la." },
    { "question": "Qual o atalho para selecionar todo o texto?", "answer": "Use 'Ctrl + A' para selecionar todo o conteúdo do documento." },
    { "question": "Como inserir uma quebra de página?", "answer": "Use 'Ctrl + Enter' para inserir uma quebra de página rapidamente." },
    { "question": "Qual o atalho para abrir um documento?", "answer": "Use 'Ctrl + O' para abrir rapidamente um documento existente." },
    { "question": "Como usar o recurso de correção ortográfica?", "answer": "Pressione 'F7' para abrir o verificador ortográfico e corrigir erros no texto." },
    { "question": "Qual o atalho para justificar o texto?", "answer": "Use 'Ctrl + J' para justificar o texto selecionado." },
    { "question": "Como adicionar referências e citações?", "answer": "Vá em 'Referências', clique em 'Inserir Citação' e gerencie as fontes de referência." },
    { "question": "Como inserir um comentário?", "answer": "Use 'Ctrl + Alt + M' para adicionar um comentário no documento." },
    { "question": "Qual o atalho para refazer uma ação?", "answer": "Use 'Ctrl + Y' para refazer uma ação desfeita." },
    { "question": "Como criar uma lista com marcadores?", "answer": "Vá em 'Página Inicial' e clique no ícone de marcadores ou use 'Ctrl + Shift + L'." },
    { "question": "Como proteger o documento com senha?", "answer": "Vá em 'Arquivo > Proteger Documento' e escolha 'Criptografar com Senha'." },
    { "question": "Como usar o modo de rascunho?", "answer": "Vá para a aba 'Exibir' e selecione 'Rascunho' para uma visão simplificada do documento." },
    { "question": "Qual o atalho para alinhar o texto à esquerda?", "answer": "Use 'Ctrl + L' para alinhar o texto à esquerda." },
    { "question": "Como usar o recurso de mala direta?", "answer": "Vá em 'Correspondências' e siga as etapas para criar uma mala direta." },
    { "question": "Como inserir um hiperlink?", "answer": "Use 'Ctrl + K' para abrir a caixa de diálogo e inserir um link." },
    { "question": "Qual o atalho para itálico?", "answer": "Use 'Ctrl + I' para aplicar ou remover o itálico do texto." },
    { "question": "Como inserir um gráfico?", "answer": "Vá para 'Inserir > Gráfico' e escolha o tipo de gráfico desejado." },
    { "question": "Como ajustar o espaçamento entre linhas?", "answer": "Selecione o texto, vá em 'Página Inicial' e clique em 'Espaçamento entre Linhas'." },
    { "question": "Como ativar a numeração de linhas?", "answer": "Vá para 'Layout' e clique em 'Numeração de Linhas' para ativar." },
    { "question": "Qual o atalho para abrir a caixa de diálogo 'Fonte'?", "answer": "Use 'Ctrl + D' para abrir rapidamente a caixa de diálogo de formatação de fonte." },
    { "question": "Como usar o controle de alterações?", "answer": "Vá em 'Revisão' e clique em 'Controlar Alterações' para registrar as edições." },
    { "question": "Como inserir um sumário?", "answer": "Vá para 'Referências > Sumário' e escolha um modelo de sumário automático." },
    { "question": "Qual o atalho para imprimir o documento?", "answer": "Use 'Ctrl + P' para abrir a janela de impressão." },
    { "question": "Como comparar dois documentos?", "answer": "Vá em 'Revisão > Comparar' e selecione os documentos que deseja comparar." },
    { "question": "Como inserir uma quebra de seção?", "answer": "Vá em 'Layout > Quebras > Próxima Página' para começar uma nova seção." },
    { "question": "Qual o atalho para subescrito?", "answer": "Use 'Ctrl + =' para aplicar o subescrito ao texto selecionado." },
    { "question": "Como adicionar bordas ao texto?", "answer": "Vá em 'Página Inicial' e clique em 'Bordas' para aplicar ao texto selecionado." },
    { "question": "Como usar a ferramenta de tradução?", "answer": "Vá para 'Revisão > Traduzir' para traduzir o texto ou documento." },
    { "question": "Qual o atalho para sobrescrito?", "answer": "Use 'Ctrl + Shift + =' para aplicar o sobrescrito ao texto selecionado." },
    { "question": "Como inserir uma assinatura eletrônica?", "answer": "Vá em 'Inserir > Linha de Assinatura' e adicione uma assinatura eletrônica." },
    { "question": "Como usar estilos rápidos?", "answer": "Na aba 'Página Inicial', selecione um estilo no grupo 'Estilos' para formatar rapidamente o texto." },
    { "question": "Qual o atalho para centralizar o texto?", "answer": "Use 'Ctrl + E' para centralizar o texto selecionado." },
    { "question": "Como alterar o idioma da revisão?", "answer": "Vá para 'Revisão > Idioma > Definir Idioma de Revisão' para ajustar o idioma." },
    { "question": "Como adicionar notas de rodapé?", "answer": "Vá em 'Referências > Inserir Nota de Rodapé' para adicionar ao documento." },
    { "question": "Qual o atalho para inserir um espaço não separável?", "answer": "Use 'Ctrl + Shift + Espaço' para adicionar um espaço que não quebra a linha." },
    // Fim
    // Sobre Excel
    { "question": "Qual o atalho para salvar o arquivo rapidamente?", "answer": "Use 'Ctrl + S' para salvar o arquivo atual." },
    { "question": "Como inserir uma nova linha rapidamente?", "answer": "Selecione uma linha e pressione 'Ctrl + Shift + +' para inserir uma nova linha acima." },
    { "question": "Qual o atalho para copiar uma célula?", "answer": "Use 'Ctrl + C' para copiar a célula ou o intervalo selecionado." },
    { "question": "Como alternar entre planilhas em uma pasta de trabalho?", "answer": "Use 'Ctrl + Page Up' ou 'Ctrl + Page Down' para alternar entre as planilhas." },
    { "question": "Como aplicar um filtro a uma coluna?", "answer": "Selecione o cabeçalho e use 'Ctrl + Shift + L' para ativar ou desativar o filtro." },
    { "question": "Qual o atalho para abrir um novo arquivo?", "answer": "Use 'Ctrl + N' para criar uma nova pasta de trabalho." },
    { "question": "Como inserir a data atual em uma célula?", "answer": "Use 'Ctrl + ;' para inserir a data atual." },
    { "question": "Qual o atalho para colar valores?", "answer": "Use 'Ctrl + Alt + V' e selecione 'Valores' ou use a opção 'Colar Valores' no menu." },
    { "question": "Como congelar painéis para fixar linhas ou colunas?", "answer": "Vá para 'Exibir > Congelar Painéis' e escolha a opção desejada." },
    { "question": "Como somar uma coluna de forma rápida?", "answer": "Use 'Alt + =' para aplicar a função SOMA automaticamente." },
    { "question": "Qual o atalho para desfazer uma ação?", "answer": "Use 'Ctrl + Z' para desfazer a última ação." },
    { "question": "Como usar o preenchimento automático?", "answer": "Digite o primeiro valor, selecione e arraste a alça de preenchimento para aplicar automaticamente." },
    { "question": "Qual o atalho para criar um gráfico rapidamente?", "answer": "Selecione os dados e pressione 'Alt + F1' para criar um gráfico padrão." },
    { "question": "Como proteger uma planilha com senha?", "answer": "Vá em 'Revisão > Proteger Planilha' e defina uma senha." },
    { "question": "Qual o atalho para abrir a caixa de formatação de células?", "answer": "Use 'Ctrl + 1' para abrir as opções de formatação de células." },
    { "question": "Como remover duplicatas de uma coluna?", "answer": "Vá em 'Dados > Remover Duplicatas' e selecione a coluna desejada." },
    { "question": "Qual o atalho para selecionar uma coluna inteira?", "answer": "Use 'Ctrl + Barra de Espaço' para selecionar a coluna inteira." },
    { "question": "Como aplicar bordas rapidamente?", "answer": "Use 'Ctrl + Shift + &' para aplicar bordas às células selecionadas." },
    { "question": "Qual o atalho para repetir a última ação?", "answer": "Use 'F4' para repetir a última ação realizada." },
    { "question": "Como inserir um hiperlink?", "answer": "Use 'Ctrl + K' para abrir a caixa de diálogo de hiperlink." },
    { "question": "Como alternar entre pastas de trabalho abertas?", "answer": "Use 'Ctrl + Tab' para alternar entre as pastas de trabalho abertas." },
    { "question": "Qual o atalho para abrir a janela de impressão?", "answer": "Use 'Ctrl + P' para abrir a janela de impressão." },
    { "question": "Como ocultar uma coluna ou linha?", "answer": "Selecione a coluna ou linha, clique com o botão direito e escolha 'Ocultar'." },
    { "question": "Qual o atalho para selecionar uma linha inteira?", "answer": "Use 'Shift + Barra de Espaço' para selecionar a linha inteira." },
    { "question": "Como dividir a janela em painéis?", "answer": "Vá em 'Exibir > Dividir' para dividir a janela e facilitar a visualização." },
    { "question": "Qual o atalho para abrir a ajuda do Excel?", "answer": "Use 'F1' para abrir a ajuda do Excel." },
    { "question": "Como aplicar uma formatação condicional?", "answer": "Vá em 'Página Inicial > Formatação Condicional' e configure as regras." },
    { "question": "Como inserir um comentário em uma célula?", "answer": "Use 'Shift + F2' para adicionar ou editar um comentário." },
    { "question": "Qual o atalho para mesclar células?", "answer": "Use 'Alt + H + M + C' para mesclar células rapidamente." },
    { "question": "Como usar o AutoSoma?", "answer": "Selecione as células e clique no botão 'AutoSoma' ou use 'Alt + ='." },
    { "question": "Como ocultar ou exibir fórmulas?", "answer": "Use 'Ctrl + ~' para alternar entre mostrar valores e fórmulas." },
    { "question": "Qual o atalho para adicionar uma nova planilha?", "answer": "Use 'Shift + F11' para inserir uma nova planilha." },
    { "question": "Como criar uma tabela?", "answer": "Selecione os dados e pressione 'Ctrl + T' para transformar em uma tabela." },
    { "question": "Qual o atalho para inserir um gráfico?", "answer": "Use 'Alt + F1' para inserir um gráfico rapidamente." },
    { "question": "Como dividir texto em colunas?", "answer": "Use 'Dados > Texto para Colunas' para dividir o texto com base em um delimitador." },
    { "question": "Como aplicar validação de dados?", "answer": "Vá em 'Dados > Validação de Dados' para configurar regras específicas." },
    { "question": "Qual o atalho para abrir o menu de formatação rápida?", "answer": "Use 'Alt + H + F + P' para formatação de fonte rápida." },
    { "question": "Como usar a função PROCV?", "answer": "A sintaxe é 'PROCV(valor, tabela, índice_coluna, [procurar_intervalo])'. Quer um exemplo?" },
    { "question": "Qual o atalho para inserir uma quebra de linha na mesma célula?", "answer": "Use 'Alt + Enter' para inserir uma quebra de linha na célula." },
    { "question": "Como fixar células em uma fórmula?", "answer": "Use o símbolo '$' ou pressione 'F4' para alternar entre referências absolutas e relativas." },
    { "question": "Como exibir fórmulas em vez de resultados?", "answer": "Vá em 'Fórmulas > Mostrar Fórmulas' ou use 'Ctrl + ~'." },
    { "question": "Como agrupar dados em uma tabela dinâmica?", "answer": "Clique com o botão direito no campo e selecione 'Agrupar' para agrupar dados." },
    { "question": "Qual o atalho para acessar o menu de pesquisa?", "answer": "Use 'Ctrl + F' para abrir a caixa de pesquisa." },
    { "question": "Como transformar texto em maiúsculas?", "answer": "Use a função MAIÚSCULA, por exemplo: '=MAIÚSCULA(A1)'." },
    { "question": "Qual o atalho para selecionar células adjacentes?", "answer": "Use 'Shift + teclas de seta' para selecionar células adjacentes." },
    { "question": "Como usar a função SOMASE?", "answer": "A sintaxe é 'SOMASE(intervalo, critérios, [intervalo_soma])'. Precisa de um exemplo?" },
    { "question": "Qual o atalho para colar como fórmula?", "answer": "Use 'Ctrl + Shift + V' e escolha 'Fórmulas' na opção de colagem especial." },
    { "question": "Como habilitar a edição de múltiplas células?", "answer": "Selecione as células desejadas e pressione 'Ctrl + Enter' para inserir o mesmo valor em todas." },
    { "question": "Como fazer uma referência cruzada entre planilhas?", "answer": "Use a sintaxe 'Planilha1!A1' para referenciar células de outra planilha." },
    { "question": "Como atualizar todos os cálculos?", "answer": "Use 'F9' para recalcular todas as fórmulas manualmente." },
    // Fim sobre Excel
    // Sobre Power Point
    { "question": "Qual o atalho para criar um novo slide?", "answer": "Use 'Ctrl + M' para adicionar um novo slide." },
    { "question": "Como iniciar a apresentação de slides do começo?", "answer": "Use 'F5' para iniciar a apresentação do primeiro slide." },
    { "question": "Qual o atalho para iniciar a apresentação do slide atual?", "answer": "Use 'Shift + F5' para começar a apresentação a partir do slide atual." },
    { "question": "Como duplicar um slide rapidamente?", "answer": "Selecione o slide e use 'Ctrl + D' para duplicá-lo." },
    { "question": "Qual o atalho para desfazer uma ação?", "answer": "Use 'Ctrl + Z' para desfazer a última ação." },
    { "question": "Como ocultar um slide sem excluí-lo?", "answer": "Clique com o botão direito no slide e selecione 'Ocultar Slide'." },
    { "question": "Qual o atalho para colar sem formatação?", "answer": "Use 'Ctrl + Shift + V' para colar sem formatação." },
    { "question": "Como alinhar objetos de forma precisa?", "answer": "Use 'Exibir > Guias' ou 'Exibir > Grades' para alinhar objetos." },
    { "question": "Como adicionar uma transição a um slide?", "answer": "Selecione o slide e vá em 'Transições' para escolher uma transição." },
    { "question": "Qual o atalho para abrir a janela de formatação de texto?", "answer": "Use 'Ctrl + T' para abrir as opções de formatação de texto." },
    { "question": "Como aplicar a mesma formatação a outro texto?", "answer": "Use o 'Pincel de Formatação' na barra de ferramentas." },
    { "question": "Como inserir um hiperlink em um slide?", "answer": "Use 'Ctrl + K' para inserir um hiperlink." },
    { "question": "Qual o atalho para salvar rapidamente?", "answer": "Use 'Ctrl + S' para salvar a apresentação." },
    { "question": "Como adicionar uma imagem rapidamente?", "answer": "Vá em 'Inserir > Imagem' ou use 'Ctrl + J' (atalho específico do Windows 11)." },
    { "question": "Como mudar o layout de um slide?", "answer": "Selecione o slide e clique em 'Layout' na barra de ferramentas." },
    { "question": "Como adicionar uma animação a um objeto?", "answer": "Selecione o objeto e vá em 'Animações' para escolher uma animação." },
    { "question": "Qual o atalho para cortar um objeto?", "answer": "Use 'Ctrl + X' para cortar o objeto selecionado." },
    { "question": "Como adicionar uma nota ao apresentador?", "answer": "Vá em 'Exibir > Anotações' para adicionar notas ao slide." },
    { "question": "Qual o atalho para abrir a ajuda do PowerPoint?", "answer": "Use 'F1' para abrir a ajuda." },
    { "question": "Como agrupar objetos?", "answer": "Selecione os objetos, clique com o botão direito e escolha 'Agrupar' ou use 'Ctrl + G'." },
    { "question": "Como desagrupar objetos?", "answer": "Selecione o grupo e use 'Ctrl + Shift + G' para desagrupar." },
    { "question": "Qual o atalho para selecionar todos os objetos em um slide?", "answer": "Use 'Ctrl + A' para selecionar todos os objetos." },
    { "question": "Como ajustar o tamanho de um objeto proporcionalmente?", "answer": "Mantenha 'Shift' pressionado enquanto redimensiona o objeto." },
    { "question": "Qual o atalho para copiar um objeto?", "answer": "Use 'Ctrl + C' para copiar o objeto selecionado." },
    { "question": "Como inserir um quadro de texto?", "answer": "Vá em 'Inserir > Caixa de Texto' para adicionar texto." },
    { "question": "Como adicionar uma tabela a um slide?", "answer": "Use 'Inserir > Tabela' e defina o número de linhas e colunas." },
    { "question": "Qual o atalho para abrir uma apresentação existente?", "answer": "Use 'Ctrl + O' para abrir uma apresentação." },
    { "question": "Como exportar slides como imagens?", "answer": "Vá em 'Arquivo > Exportar' e escolha o formato de imagem." },
    { "question": "Como adicionar um gráfico a um slide?", "answer": "Vá em 'Inserir > Gráfico' e escolha o tipo de gráfico desejado." },
    { "question": "Qual o atalho para imprimir a apresentação?", "answer": "Use 'Ctrl + P' para abrir as opções de impressão." },
    { "question": "Como aplicar um tema a toda a apresentação?", "answer": "Vá em 'Design' e escolha um tema para aplicar a todos os slides." },
    { "question": "Como ajustar o tempo de uma transição?", "answer": "Vá em 'Transições' e ajuste o tempo no painel de opções." },
    { "question": "Qual o atalho para repetir a última ação?", "answer": "Use 'F4' para repetir a última ação realizada." },
    { "question": "Como remover o fundo de uma imagem?", "answer": "Selecione a imagem, vá em 'Formato > Remover Plano de Fundo'." },
    { "question": "Como adicionar áudio a um slide?", "answer": "Vá em 'Inserir > Áudio' e escolha um arquivo de áudio." },
    { "question": "Como criar uma apresentação automática?", "answer": "Vá em 'Slide Show > Configurar Apresentação' e escolha 'Automática'." },
    { "question": "Qual o atalho para acessar o modo de leitura?", "answer": "Use 'Alt + W + F' para entrar no modo de leitura." },
    { "question": "Como verificar erros ortográficos?", "answer": "Use 'F7' para iniciar a verificação ortográfica." },
    { "question": "Como adicionar um vídeo a um slide?", "answer": "Vá em 'Inserir > Vídeo' e escolha um arquivo de vídeo." },
    { "question": "Como ajustar a ordem das animações?", "answer": "Use o painel 'Animações' e arraste para ajustar a ordem." },
    { "question": "Qual o atalho para minimizar a faixa de opções?", "answer": "Use 'Ctrl + F1' para ocultar ou exibir a faixa de opções." },
    { "question": "Como salvar a apresentação como PDF?", "answer": "Vá em 'Arquivo > Salvar Como' e escolha o formato PDF." },
    { "question": "Como adicionar um link a outro slide?", "answer": "Use 'Inserir > Hiperlink' e escolha o slide desejado." },
    { "question": "Como alternar para o modo de exibição de slide mestre?", "answer": "Vá em 'Exibir > Slide Mestre' para editar o layout mestre." },
    { "question": "Qual o atalho para alternar para a régua?", "answer": "Use 'Alt + W + R' para exibir ou ocultar a régua." },
    { "question": "Como criar uma apresentação com narração?", "answer": "Vá em 'Gravar Slide Show' para adicionar narrações." },
    { "question": "Como usar a ferramenta de apresentação remota?", "answer": "Use o aplicativo 'PowerPoint Remote' no seu dispositivo móvel." },
    { "question": "Como definir slides como avançar automaticamente?", "answer": "Vá em 'Transições' e ajuste o tempo de avanço automático." },
    { "question": "Qual o atalho para fazer zoom em um slide?", "answer": "Use 'Alt + W + Q' e ajuste o nível de zoom desejado." },
    // Fim sobre power point
    // Sobre Power BI
    { "question": "Como criar uma nova medida?", "answer": "Use o menu 'Modelagem' e selecione 'Nova Medida'." },
    { "question": "Qual o atalho para atualizar os dados?", "answer": "Use 'F5' para atualizar os dados no Power BI." },
    { "question": "Como criar uma coluna calculada?", "answer": "Vá até 'Modelagem' e escolha 'Nova Coluna'." },
    { "question": "Como conectar o Power BI a uma fonte de dados?", "answer": "Vá em 'Home' e clique em 'Obter Dados'." },
    { "question": "Como remover linhas em branco de uma tabela?", "answer": "Use o Editor de Consultas e aplique filtros para excluir linhas em branco." },
    { "question": "Como combinar múltiplas tabelas?", "answer": "Use 'Mesclar Consultas' ou 'Anexar Consultas' no Editor de Consultas." },
    { "question": "Como formatar valores de moeda?", "answer": "Selecione o campo e use as opções de formatação de dados para definir como moeda." },
    { "question": "Qual o atalho para alternar entre o modo de exibição de dados e relatórios?", "answer": "Use 'Ctrl + Alt + 1' para Relatório, 'Ctrl + Alt + 2' para Dados, e 'Ctrl + Alt + 3' para o modo Relacionamentos." },
    { "question": "Como criar uma visualização de mapa?", "answer": "Arraste um campo geográfico (cidade, país) para a área de valores e escolha a visualização de mapa." },
    { "question": "Como aplicar filtros a um relatório?", "answer": "Use o painel de Filtros à direita para arrastar campos e aplicar filtros." },
    { "question": "Como fazer drill-down em um gráfico?", "answer": "Clique na opção de 'Drill-down' no canto superior esquerdo da visualização para navegar entre níveis." },
    { "question": "Como ajustar a interação entre visualizações?", "answer": "Vá em 'Formato > Editar Interações' para personalizar como as visualizações afetam umas às outras." },
    { "question": "Como publicar um relatório no Power BI Service?", "answer": "Clique em 'Publicar' na barra de ferramentas e escolha um espaço de trabalho no Power BI Service." },
    { "question": "Como criar uma relação entre tabelas?", "answer": "Vá até a exibição de Modelagem e arraste campos entre as tabelas para criar relações." },
    { "question": "Como usar DAX para calcular valores?", "answer": "Use fórmulas DAX como SUM(), AVERAGE(), CALCULATE(), entre outras, para criar medidas e colunas calculadas." },
    { "question": "Como criar um gráfico de barras?", "answer": "Selecione a opção de gráfico de barras no painel de visualizações e arraste os campos para as áreas apropriadas." },
    { "question": "Como fazer a segmentação de dados por período?", "answer": "Use um visual de 'Segmentação de Dados' (Slicer) e configure-o para datas." },
    { "question": "Como usar filtros avançados?", "answer": "Use o painel de Filtros e configure condições específicas para filtrar dados." },
    { "question": "Como importar dados de um arquivo Excel?", "answer": "Clique em 'Obter Dados', selecione 'Excel', e escolha o arquivo desejado." },
    { "question": "Como criar um painel com KPIs?", "answer": "Use a visualização 'Indicador Chave de Desempenho (KPI)' e configure os campos de meta e valor." },
    { "question": "Como compartilhar relatórios com outros usuários?", "answer": "Publique no Power BI Service e use a opção de 'Compartilhar' para enviar relatórios." },
    { "question": "Como agendar a atualização de dados?", "answer": "No Power BI Service, vá em 'Configurações' e defina um agendamento de atualização para o conjunto de dados." },
    { "question": "Como transformar dados no Editor de Consultas?", "answer": "Use o Editor de Consultas para aplicar transformações como filtro, divisão de colunas e alteração de tipos de dados." },
    { "question": "Como destacar valores em um gráfico?", "answer": "Use formatação condicional para destacar valores ou configure interações de destaque." },
    { "question": "Como criar uma visualização de tabela?", "answer": "Escolha a visualização de tabela e arraste os campos para as colunas desejadas." },
    { "question": "Como usar uma medida para calcular percentuais?", "answer": "Use DAX, como '[Total de Vendas] / SUM([Total Geral])', para calcular percentuais." },
    { "question": "Como adicionar uma legenda a um gráfico?", "answer": "Vá em 'Formato' e ajuste as opções de legenda." },
    { "question": "Como usar bookmarks para navegação?", "answer": "Use o painel de 'Marcadores' para criar e gerenciar bookmarks (marcadores) em relatórios." },
    { "question": "Como aplicar formatação condicional a tabelas?", "answer": "Clique em 'Formato' e escolha 'Formatação Condicional' para personalizar os dados." },
    { "question": "Como criar um painel de controle interativo?", "answer": "Combine diferentes visualizações e use segmentações de dados e interações para torná-lo interativo." },
    { "question": "Como ordenar visualizações por um campo específico?", "answer": "Clique nos três pontos no canto superior direito da visualização e escolha 'Ordenar Por'." },
    { "question": "Como visualizar dados subjacentes?", "answer": "Clique com o botão direito em uma visualização e selecione 'Mostrar Dados' ou 'Exportar Dados'." },
    { "question": "Como fazer um gráfico de dispersão?", "answer": "Escolha a visualização de dispersão e adicione valores de eixo X e Y." },
    { "question": "Como ajustar o tamanho de fontes e títulos?", "answer": "Use o painel 'Formato' para ajustar o tamanho da fonte e outros elementos visuais." },
    { "question": "Como criar uma consulta personalizada?", "answer": "Use o Editor de Consultas e clique em 'Nova Fonte' para criar consultas personalizadas." },
    { "question": "Como concatenar colunas no Editor de Consultas?", "answer": "Use a opção 'Adicionar Coluna Personalizada' e escreva a fórmula de concatenação." },
    { "question": "Como usar tabelas dinâmicas com dados do Power BI?", "answer": "Conecte-se ao Power BI via Excel e use a funcionalidade de tabelas dinâmicas." },
    { "question": "Como exportar um relatório para PDF?", "answer": "Clique em 'Arquivo > Exportar' e escolha 'PDF' como formato." },
    { "question": "Como aplicar formatação de número personalizada?", "answer": "Use as opções de formatação de dados para personalizar como os números são exibidos." },
    { "question": "Como adicionar uma imagem de fundo ao relatório?", "answer": "Vá em 'Formato > Página de Relatório' e adicione uma imagem de fundo." },
    { "question": "Como criar um gráfico de pizza?", "answer": "Escolha a visualização de gráfico de pizza e arraste o campo de categoria e valores." },
    { "question": "Como excluir relações automáticas entre tabelas?", "answer": "Vá para a exibição de 'Modelagem' e exclua relações não desejadas manualmente." },
    { "question": "Como destacar o maior ou menor valor em uma tabela?", "answer": "Use formatação condicional para destacar valores específicos." },
    { "question": "Como copiar e colar visualizações?", "answer": "Use 'Ctrl + C' para copiar e 'Ctrl + V' para colar visualizações em outro relatório." },
    { "question": "Como personalizar a paleta de cores do relatório?", "answer": "Vá em 'Formato > Cores de Tema' para criar uma paleta personalizada." },
    { "question": "Como usar as ferramentas de zoom em um relatório?", "answer": "Use o recurso de 'Ampliar' no Power BI para ajustar a exibição de relatórios." },
    { "question": "Como verificar a performance de um relatório?", "answer": "Use o 'Analisador de Desempenho' para identificar possíveis problemas de lentidão." },
    { "question": "Como conectar o Power BI a um banco de dados SQL?", "answer": "Vá em 'Obter Dados', selecione 'SQL Server', e insira os detalhes de conexão." },
    { "question": "Como criar um sumário para o relatório?", "answer": "Use 'Texto' para criar seções de título e organizá-las como um sumário no relatório." },
    // Fim sobre Power BI
    { "question": "Como é feito um site?", "answer": "Um site é feito usando algumas ferramentas e códigos. As mais comuns são HTML, que organiza o conteúdo; CSS, que cuida do visual; e JavaScript, que traz interatividade." },
    { "question": "Como é desenvolvido um aplicativo?", "answer": "Um aplicativo é criado com linguagens específicas. Para celulares, usamos Swift ou Kotlin, e também podemos usar ferramentas como React Native ou Flutter para facilitar o trabalho." },
    { "question": "Qual a importância de ter um site desenvolvido por um desenvolvedor?", "answer": "Um desenvolvedor cria um site que funciona bem, é seguro e tem um design que combina com sua empresa." },
    { "question": "Por que é bom ter um site?", "answer": "Um site ajuda sua empresa a ser encontrada online e a se conectar melhor com seus clientes." },
    { "question": "Qual a importância de automatizar processos com programação?", "answer": "Automatizar tarefas ajuda a economizar tempo, diminui erros e torna tudo mais eficiente." },
    { "question": "Por que é importante um site ser rápido?", "answer": "Um site rápido deixa os visitantes felizes e mais propensos a continuar navegando." },
    { "question": "O que é frontend?", "answer": "Frontend é tudo o que os usuários veem e com o que interagem em um site, como textos, imagens e botões." },
    { "question": "O que é backend?", "answer": "Backend é a parte que funciona nos bastidores, cuidando dos dados e fazendo o site funcionar, mas que os usuários não veem." },
    { "question": "Por que usar frameworks como React ou Angular?", "answer": "Frameworks ajudam a criar sites mais rápidos e fáceis de manter." },
    { "question": "O que é SEO?", "answer": "SEO é um conjunto de técnicas que ajudam seu site a aparecer nas primeiras páginas dos motores de busca como o Google." },
    { "question": "O que é um CMS?", "answer": "CMS é um sistema que permite que você crie e administre um site sem precisar entender muito de programação, como o WordPress." },
    { "question": "O que é um domínio?", "answer": "Um domínio é o nome do seu site na internet, como 'meusite.com'. É assim que as pessoas encontram você online." },
    { "question": "O que é hospedagem de sites?", "answer": "Hospedagem é o serviço que coloca seu site na internet, permitindo que outras pessoas o acessem." },
    { "question": "O que é responsividade?", "answer": "Responsividade é quando um site se adapta a diferentes tamanhos de tela, como celulares e tablets." },
    { "question": "O que é UI?", "answer": "UI significa Interface do Usuário. É o design e a organização dos elementos que você vê e toca em um site ou aplicativo." },
    { "question": "O que é UX?", "answer": "UX significa Experiência do Usuário. É como uma pessoa se sente ao usar um site ou aplicativo." },
    { "question": "Por que é importante a segurança em sites?", "answer": "A segurança protege os dados dos usuários e da empresa, evitando problemas como invasões." },
    { "question": "O que é um SSL?", "answer": "SSL é uma tecnologia que protege as informações trocadas entre o site e o usuário, garantindo que sejam seguras." },
    { "question": "O que é cloud computing?", "answer": "Cloud computing é o uso da internet para armazenar e gerenciar dados, ao invés de usar apenas computadores locais." },
    { "question": "O que é um banco de dados?", "answer": "Um banco de dados é um lugar onde as informações são organizadas e guardadas, para que possam ser facilmente acessadas." },
    { "question": "O que é uma API?", "answer": "API é um conjunto de regras que permite que diferentes programas se comuniquem e troquem informações." },
    { "question": "O que é um framework?", "answer": "Um framework é um conjunto de ferramentas que ajuda a criar programas de forma mais rápida e fácil." },
    { "question": "O que é uma linguagem de programação?", "answer": "Uma linguagem de programação é como um idioma que usamos para escrever instruções que os computadores entendem." },
    { "question": "Por que usar automação?", "answer": "Automação ajuda a realizar tarefas repetitivas de forma mais rápida e eficiente." },
    { "question": "O que é DevOps?", "answer": "DevOps é uma forma de trabalhar que une a criação de software e a manutenção, para que tudo funcione melhor e mais rápido." },
    { "question": "Como funciona o desenvolvimento ágil?", "answer": "O desenvolvimento ágil é uma maneira de criar software em etapas, permitindo melhorias contínuas." },
    { "question": "Por que testar software é importante?", "answer": "Testar software é essencial para garantir que ele funcione corretamente e atenda às necessidades dos usuários." },
    { "question": "O que são cookies?", "answer": "Cookies são pequenos arquivos que guardam informações sobre como você usa um site, ajudando a personalizar sua experiência." },
    { "question": "O que é um servidor?", "answer": "Um servidor é um computador que fornece dados e serviços para outros computadores, que são chamados de clientes." },
];

document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevents newline on enter
        sendMessage();
    }
});

// Listen for input and suggest questions
document.getElementById('message-input').addEventListener('input', function () {
    const userInput = this.value.toLowerCase();
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = ''; // Clear previous suggestions

    if (userInput) {
        predefinedQA.forEach(qa => {
            if (qa.question.toLowerCase().includes(userInput)) {
                const suggestion = document.createElement('div');
                suggestion.classList.add('suggestion');
                suggestion.innerText = qa.question;
                suggestion.addEventListener('click', () => {
                    this.value = qa.question; // Set input value to suggestion
                    suggestionsContainer.innerHTML = ''; // Clear suggestions
                    sendMessage(); // Enviar mensagem automaticamente ao clicar
                });
                suggestionsContainer.appendChild(suggestion);
            }
        });
    }
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        addMessage('user', messageText);
        messageInput.value = '';
        const botResponse = getBotResponse(messageText);
        setTimeout(() => addMessage('bot', botResponse), 1000);
    }
}

function addMessage(sender, text) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = text;

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom

    // Add animation
    setTimeout(() => {
        messageElement.classList.add('fade-in');
    }, 0);
}

function getBotResponse(userMessage) {
    const response = predefinedQA.find(qa => qa.question.toLowerCase() === userMessage.toLowerCase());
    return response ? response.answer : "Não sei como responder a isso. Posso te ajudar com outra coisa?";
}

// Sugestoes

document.querySelectorAll('.suggestion-btn').forEach(button => {
    button.addEventListener('click', function() {
        let messageInput = document.getElementById('message-input');
        messageInput.value = this.textContent; // Preenche o input com o texto do botão
        sendMessage(); // Envia a mensagem automaticamente
    });
});


// Função para salvar a conversa no localStorage
function saveConversation() {
    const chatMessages = document.getElementById('chat-messages').innerHTML;
    localStorage.setItem('conversation', chatMessages);
}

// Função para carregar a conversa do localStorage
function loadConversation() {
    const savedConversation = localStorage.getItem('conversation');
    if (savedConversation) {
        document.getElementById('chat-messages').innerHTML = savedConversation;
        // Manter a rolagem no final da conversa carregada
        const chatMessages = document.getElementById('chat-messages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Chame loadConversation quando a página carregar para exibir a conversa salva
window.addEventListener('DOMContentLoaded', loadConversation);

// Modifique a função addMessage para salvar a conversa após cada nova mensagem
function addMessage(sender, text) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = text;

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom

    // Adiciona a animação
    setTimeout(() => {
        messageElement.classList.add('fade-in');
    }, 0);

    // Salva a conversa no localStorage
    saveConversation();
}

document.getElementById('clear-btn').addEventListener('click', function() {
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = ''; // Limpa o conteúdo do contêiner de mensagens
});

// Adicione um evento ao botão de novo chat
document.getElementById('new-chat-btn').addEventListener('click', function() {
    document.getElementById('chat-messages').innerHTML = ''; // Limpa as mensagens do chat
    localStorage.removeItem('conversation'); // Limpa a conversa do localStorage
});


// Automatização

// Função para obter uma citação aleatória
function getRandomQuote() {
    const quotes = [
        "A vida é 10% o que acontece com você e 90% como você reage a isso. - Charles R. Swindoll",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia. - Robert Collier",
        "Você é nunca muito velho para definir outra meta ou sonhar um novo sonho. - C.S. Lewis",
        // Adicione mais citações conforme necessário
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Sobre Climas
async function getWeather(location) {
    const apiKey = 'YOUR_API_KEY'; // Substitua com sua chave de API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === 200) {
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        return `O clima em ${location} está ${weatherDescription} com uma temperatura de ${temperature} graus Celsius.`;
    } else {
        return `Desculpe, não consegui obter informações sobre o clima para ${location}.`;
    }
}

// Sobre Noticias
async function getNews(topic) {
    const apiKey = '97a46fe115f94436ae1d69920de48855'; // Substitua com sua chave de API
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`);
    const data = await response.json();

    if (data.articles.length > 0) {
        const articles = data.articles.slice(0, 5); // Pega os 5 primeiros artigos
        return articles.map(article => `${article.title}: ${article.url}`).join('\n');
    } else {
        return `Desculpe, não encontrei notícias sobre ${topic}.`;
    }
}


function getBotResponse(userMessage) {
    // Verifica se a mensagem contém comandos específicos
    if (userMessage.toLowerCase().includes("abrir gmail")) {
        // Se a mensagem contém "abrir gmail", abre o Gmail em uma nova aba
        window.open('https://mail.google.com', '_blank'); 


        return "Abrindo o Gmail..."; // Retorna uma mensagem ao usuário
    } else if (userMessage.toLowerCase().includes("enviar email")) {
        // Se a mensagem contém "enviar email", abre o formulário para compor um novo email
        window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=&su=&body=', '_blank'); 
        return "Abrindo o formulário para enviar um e-mail...";


    // Verifica se a mensagem contém comandos específicos
    } else if (userMessage.toLowerCase().includes("abrir instagram")) {
        // Se a mensagem contém "abrir instagram", abre o Instagram em uma nova aba
        window.open('https://www.instagram.com', '_blank'); 
        return "Abrindo o Instagram..."; // Retorna uma mensagem ao usuário


    } else if (userMessage.toLowerCase().includes("abrir whatsapp")) {
        // Se a mensagem contém "abrir whatsapp", abre o WhatsApp Web em uma nova aba
        window.open('https://web.whatsapp.com', '_blank'); 
        return "Abrindo o WhatsApp..."; // Retorna uma mensagem ao usuário


    } else if (userMessage.toLowerCase().includes("abrir downloads")) {
        // Abre a pasta Downloads
        shell.openPath('C:\\Users\\SeuUsuario\\Downloads'); // Ajuste o caminho para seu sistema
        return "Abrindo a pasta Downloads...";

    } else if (userMessage.toLowerCase().includes("abrir documentos")) {
        // Abre a pasta Documentos
        shell.openPath('C:\\Users\\SeuUsuario\\Documents'); // Ajuste o caminho para seu sistema
        return "Abrindo a pasta Documentos...";

    } else if (userMessage.toLowerCase().includes("abrir imagens")) {
        // Abre a pasta Imagens
        shell.openPath('C:\\Users\\SeuUsuario\\Pictures'); // Ajuste o caminho para seu sistema
        return "Abrindo a pasta Imagens...";
        
        // So calculos simples
    } else if (userMessage.match(/^\d+[\+\-\*\/]\d+$/)) {
        // Se a mensagem é uma expressão matemática simples, faz o cálculo
        const result = eval(userMessage); // Calcula o resultado usando eval (cuidado: eval pode ser perigoso, use com cautela!)
        return `O resultado é: ${result}`; // Retorna o resultado do cálculo


    } else if (userMessage.toLowerCase().includes("pesquisar")) {
        // Se a mensagem contém "pesquisar", extrai a consulta e realiza uma busca no Google
        const query = userMessage.split("pesquisar ")[1]; // Extrai a consulta após "pesquisar"
        window.open(`https://www.google.com/search?q=${query}`, '_blank'); // Abre o Google com a consulta
        return `Pesquisando "${query}" no Google...`; // Retorna uma mensagem ao usuário


    } else if (userMessage.toLowerCase().includes("me motive")) {
        // Se a mensagem contém "me motive", gera uma citação motivacional
        const quote = getRandomQuote(); // Chama uma função que retorna uma citação aleatória
        return quote; // Retorna a citação motivacional


    } else if (userMessage.toLowerCase().includes("noticias sobre")) {
        // Se a mensagem contém "noticias sobre", extrai o tópico e busca por notícias
        const topic = userMessage.split("sobre ")[1]; // Extrai o tópico após "sobre"
        return getNews(topic); // Chama uma função para obter notícias sobre o tópico


    } else if (userMessage.toLowerCase().includes("como está o clima em")) {
        // Se a mensagem contém "como está o clima em", extrai a localização e busca pelo clima
        const location = userMessage.split("em ")[1]; // Extrai a localização após "em"
        return getWeather(location); // Chama uma função para obter o clima da localização
    }
    // Verifica se a mensagem contém o comando de buscar imagens
    else if (userMessage.toLowerCase().includes("imagem sobre")) {
        // Extrai o termo de pesquisa após "imagem sobre"
        const searchTerm = userMessage.split("imagem sobre ")[1]; 
        // Abre o Google Imagens com a consulta
        window.open(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(searchTerm)}`, '_blank');
        return `Buscando imagens sobre "${searchTerm}" no Google...`;
    }


    // Busca por uma resposta na lista de perguntas e respostas pré-definidas
    const response = predefinedQA.find(qa => qa.question.toLowerCase() === userMessage.toLowerCase());
    // Se encontrar uma resposta, retorna; caso contrário, retorna uma mensagem padrão
    return response ? response.answer : "Não sei como responder a isso. Posso te ajudar com outra coisa?";
}

