document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        // Lida com arquivos de texto
        if (file.type === "text/plain") {
            reader.readAsText(file);
        } 
        // Lida com arquivos do Word
        else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || 
                 file.type === "application/msword") {
            reader.readAsArrayBuffer(file);
        } 
        // Lida com arquivos do Excel
        else if (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || 
                 file.type === "application/vnd.ms-excel") {
            reader.readAsArrayBuffer(file);
        } 
        else {
            alert("Tipo de arquivo não suportado.");
            return;
        }

        reader.onload = function(e) {
            if (file.type === "text/plain") {
                const fileContent = e.target.result;
                sendMessageToChat("Conteúdo do arquivo de texto:\n" + fileContent);
            } 
            else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || 
                     file.type === "application/msword") {
                const arrayBuffer = e.target.result;
                mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
                    .then(function(result) {
                        const message = result.value; // O conteúdo em HTML
                        sendMessageToChat("Conteúdo do arquivo do Word:\n" + message);
                    })
                    .catch(function(err) {
                        console.error(err);
                        sendMessageToChat("Erro ao ler o arquivo do Word.");
                    });
            } 
            else if (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || 
                     file.type === "application/vnd.ms-excel") {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); // Obter dados em formato de matriz

                const message = json.map(row => row.join(", ")).join("\n"); // Formatar mensagem como texto
                sendMessageToChat("Conteúdo do arquivo do Excel:\n" + message);
            }
        };

        reader.onerror = function() {
            console.error("Erro ao ler o arquivo");
            sendMessageToChat("Erro ao ler o arquivo.");
        };
    }
});

function sendMessageToChat(message) {
    const chatMessages = document.getElementById('chat-messages');

    // Criar um novo elemento de mensagem
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.textContent = message; // Adicionar o conteúdo do arquivo como mensagem

    // Adicionar a mensagem à área do chat
    chatMessages.appendChild(messageElement);

    // Rolagem automática para a última mensagem
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
