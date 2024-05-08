// Tela inicial----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const startButton = document.getElementById('startButton');
    const container = document.querySelector('.container');

    // Função para trocar as imagens e mostrar o botão com fade in
    function changeImageAndShowButton() {
        image1.classList.add('hidden');
        image2.classList.remove('hidden');
        startButton.classList.remove('hidden'); // Removendo a classe hidden para tornar o botão visível

        // Adicionando um pequeno atraso para permitir que o navegador aplique a transição de classe
        setTimeout(() => {
            startButton.style.opacity = '1'; // Definindo a opacidade como 1 para aplicar o efeito de fade in
        }, 100);
    }

    // Exibir o botão após um atraso
    setTimeout(changeImageAndShowButton, 2000);







    // BOTÃO CLICAR PARA IR PARA A EXPERIÊNCIA + FADE OUT--------------------------------------------------------------------------------------
    startButton.addEventListener('click', function () {
        container.classList.add('fade-out'); // Adiciona a classe para fazer a transição suave de fade out
        setTimeout(() => {
            window.location.href = 'interacao.html'; // Redireciona para a próxima página após a transição
        }, 1000); // Aguarda 1 segundo para garantir que a transição de fade out seja concluída
    });
});