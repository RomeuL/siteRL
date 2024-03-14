document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("responderBtn");
    const condimentoInput = document.getElementById("condimentoInput");
    const imagemContainer = document.getElementById("imagemContainer");

    button.addEventListener("click", function() {
        const condimento = condimentoInput.value.trim().toLowerCase();
        const respostascorretas = ["barbecue", "Barbecue", "BARBECUE"];
        if (respostascorretas.includes(condimento)) {
            carregarImagem("assets/barbe.jpg", "assets/barbecuitch.mp3");
            
        } else {
            alert("Resposta errada");
        }
    });

    function carregarImagem(path, audioPath) {
        const container = document.createElement("div");
        container.classList.add("imagem-container");
        
        const imagem = document.createElement("img");
        imagem.src = path;
        imagem.width = 300;
        imagem.height = 450;
        container.appendChild(imagem);
    
        const audio = document.createElement("audio");
        audio.src = audioPath;
        audio.controls = true;
        audio.autoplay = true;
        container.appendChild(audio);
    
        imagemContainer.innerHTML = "";
        imagemContainer.appendChild(container);
    }
});
