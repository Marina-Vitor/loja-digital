document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.querySelector('.content');

    

    // Adiciona uma imagem
    const newImage = document.createElement('img');
    newImage.src = '/src/assets/img1.jpg'; // Substitua pelo caminho da sua imagem
    newImage.alt = 'Descrição da imagem';
    newImage.style.width = '400px'; // Define a largura da imagem
    newImage.style.height = 'auto'; // Ajusta a altura proporcionalmente
    newImage.style.marginTop = '20px'; // Espaço acima da imagem
    newImage.style.borderRadius = '10px'; // Espaço abaixo da imagem
    newImage.style.boxShadow = '0 0 10px rgba(2, 0, 0, 10)'; // Sombra para dar profundidade
    contentArea.appendChild(newImage);
});
