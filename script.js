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


    // Busca por uma resposta na lista de perguntas e respostas pré-definidas
    const response = predefinedQA.find(qa => qa.question.toLowerCase() === userMessage.toLowerCase());
    // Se encontrar uma resposta, retorna; caso contrário, retorna uma mensagem padrão
    return response ? response.answer : "Não sei como responder a isso. Posso te ajudar com outra coisa?";
}

