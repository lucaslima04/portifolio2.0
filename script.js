    const body = document.body;
    const text = document.querySelector("#impact");
    const words = ["realidade", "inovação", "design", "experiências", "soluções", "tecnologia", "estética", "interatividade", "performance", "excelência"];
    let index = 0;
    
    const updateText = () => {
        text.textContent = words[index];
    
        text.style.animation = "none";
        void text.offsetWidth; 
        text.style.animation = "typing 4s steps(16) infinite, blinker 0.6s step-end infinite";
    
        index = (index + 1) % words.length;
    };
    
    setInterval(updateText, 4000); 
    updateText(); 
