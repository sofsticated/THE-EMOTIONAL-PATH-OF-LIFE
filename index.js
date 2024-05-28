document.addEventListener('DOMContentLoaded', function () {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const startButton = document.getElementById('startButton');
    const container = document.querySelector('.container');

    // Função para fazer fade-in na primeira imagem
    function fadeInImage1() {
        image1.style.opacity = '1';
    }

    // Função para trocar as imagens e mostrar o botão com fade-in
    function changeImageAndShowButton() {
        image1.style.opacity = '0';  // Fade-out da primeira imagem
        setTimeout(() => {
            image1.classList.add('hidden');  // Oculta a primeira imagem após o fade-out
            image2.style.opacity = '1';  // Fade-in da segunda imagem
            startButton.classList.remove('hidden');  // Mostra o botão Start
            setTimeout(() => {
                startButton.style.opacity = '1';  // Aplica fade-in ao botão
            }, 100);
        }, 1000);  // Tempo de fade-out para a primeira imagem
    }

    // Exibir a primeira imagem com fade-in após a página carregar
    setTimeout(fadeInImage1, 1000);

    // Trocar para a segunda imagem após um atraso
    setTimeout(changeImageAndShowButton, 2500);

    // Botão clicável para ir para a próxima experiência com fade-out
    startButton.addEventListener('click', function () {
        container.style.transition = 'opacity 1s ease';
        container.style.opacity = '0';
        setTimeout(() => {
            window.location.href = 'interacao.html';
        }, 1000);
    });
});

const musica= new Audio();                                //musica de fundo
musica.id='musica';
musica.src = 'ambiente/musica.mp3';
musica.style.display = 'none';
musica.play();                           
musica.volume=1;

