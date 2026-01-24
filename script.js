
    const bubbleBackground = document.getElementById('bubble-background');
    const bubbleColors = ['#FFB7C5', '#F19CBB', '#1E3A8A']; // Cores do seu gradiente para bolhas mais variadas

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        const size = Math.random() * 80 + 20; // Tamanho entre 20px e 100px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
        bubble.style.animationDuration = `${Math.random() * 15 + 10}s`; // Duração da animação entre 10s e 25s
        bubble.style.animationDelay = `${Math.random() * -10}s`; // Começa em tempos diferentes
        
        // Atribui uma das cores do gradiente ou um mix para cada bolha
        const randomColorIndex = Math.floor(Math.random() * bubbleColors.length);
        bubble.style.backgroundColor = bubbleColors[randomColorIndex];
        bubble.style.opacity = Math.random() * 0.4 + 0.2; // Opacidade inicial mais sutil
        
        // Adiciona um gradiente radial para um efeito mais 3D
        bubble.style.background = `radial-gradient(circle at ${Math.random()*70+15}% ${Math.random()*70+15}%, rgba(255,255,255,0.4), ${bubbleColors[randomColorIndex]}, rgba(30,58,138,0.3))`;
        bubble.style.boxShadow = `0 0 ${size/5}px ${size/10}px rgba(255, 255, 255, 0.05)`; // Sombra sutil

        bubbleBackground.appendChild(bubble);

        // Remove a bolha do DOM após a animação para evitar acúmulo
        bubble.addEventListener('animationend', () => {
            if (!bubble.classList.contains('popped')) { // Só remove se não estourou
                 bubble.remove();
            }
        });

        // Efeito de estouro ao passar o mouse
        bubble.addEventListener('mouseenter', () => {
            if (!bubble.classList.contains('popped')) {
                bubble.classList.add('popped');
                setTimeout(() => bubble.remove(), 400); // Remove depois da animação de estouro
            }
        });
    }

    // Cria um número inicial de bolhas
    for (let i = 0; i < 30; i++) { // 30 bolhas iniciais
        createBubble();
    }

    // Continua criando bolhas em intervalos para um efeito contínuo
    setInterval(createBubble, 1000); // Cria uma nova bolha a cada 1 segundo

    function zoomImage(imgElement) {
    const overlay = document.getElementById('image-overlay');
    const zoomedImg = document.getElementById('zoomed-img');
    
    // Define a imagem do modal como a imagem clicada
    zoomedImg.src = imgElement.src;
    
    // Mostra o overlay
    overlay.classList.remove('hidden');
    
    // Pequeno delay para a animação de escala funcionar
    setTimeout(() => {
        zoomedImg.classList.remove('scale-90');
        zoomedImg.classList.add('scale-100');
    }, 10);
}

function closeZoom() {
    const overlay = document.getElementById('image-overlay');
    const zoomedImg = document.getElementById('zoomed-img');
    
    zoomedImg.classList.add('scale-90');
    zoomedImg.classList.remove('scale-100');
    
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 200);
}