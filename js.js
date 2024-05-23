document.addEventListener('DOMContentLoaded', function () {
    const imagens = [];                                       //imagens principais
    const fundos = [];                                        //fundos de cor
    const elementosToupeira = [];                             //toupeira
    const elementosRaposa = [];                               //raposa
    const elementosCavalo = [];                               //cavalo
    const cenarios = [];                                      //cenarios imaginados
    const falas = [];

    const audios = [];                                        //audios

    const slide = document.getElementById('slide');

    const l_imagens = window.innerWidth + 7;
    const h_imagens = window.innerHeight + 28;

    let indiceAtual = 0;
    let indiceAudio = -2;
    let contador = 0;

    for (let i = 1; i <= 20; i++) {
        const imagem = new Image();
        imagem.id = 'imagem';
        const caminhoDaImagem = 'img/img_slide/frame' + i + '.png';
        imagem.src = caminhoDaImagem;
        imagem.style.width = l_imagens + 'px';
        imagem.style.height = h_imagens + 'px';

        if (i !== 1) {
            imagem.style.display = 'none';
        }

        imagens.push(imagem);
        slide.appendChild(imagem);
    }

    for (let i = 0; i < 3; i++) {
        const fundo = new Image();
        fundo.id = 'fundoCor';
        const caminhoFundo = 'img/fundo_de_cor/fundo_' + (i + 1) + '.png';
        fundo.src = caminhoFundo;
        fundo.style.display = 'none';
        slide.appendChild(fundo);
        fundos.push(fundo);
    }

    for (let i = 3; i < 21; i++) {
        const elementot = new Image();
        const elementor = new Image();
        const elementoc = new Image();
        //--------------------------------------------------------------------------------------toupeira
        if (i <= 7) {
            elementot.id = 'elemento';
            const caminhoElemento = 'img/img_elementos/frame' + i + '_toupeira.png';
            elementot.src = caminhoElemento;
            elementot.style.display = 'none';
            slide.appendChild(elementot);
            elementosToupeira.push(elementot);
        }
        if (i == 8) {
            elementor.id = 'elemento';
            const caminhoElemento = 'img/img_elementos/frame' + i + '_raposa.png';
            elementor.src = caminhoElemento;
            elementor.style.display = 'none';
            slide.appendChild(elementor);
            elementosRaposa.push(elementor);
        }
        if (i == 9) {
            elementot.id = 'elemento';
            const caminhoElemento = 'img/img_elementos/frame' + i + '_toupeira.png';
            elementot.src = caminhoElemento;
            elementot.style.display = 'none';
            slide.appendChild(elementot);
            elementosToupeira.push(elementot);
        }
        if (i == 10) {
            elementor.id = 'elemento';
            const caminhoElemento = 'img/img_elementos/frame' + i + '_raposa.png';
            elementor.src = caminhoElemento;
            elementor.style.display = 'none';
            slide.appendChild(elementor);
            elementosRaposa.push(elementor);

            elementot.id = 'elemento';
            const caminho_Elemento = 'img/img_elementos/frame' + i + '_toupeira.png';
            elementot.src = caminho_Elemento;
            elementot.style.display = 'none';
            slide.appendChild(elementot);
            elementosToupeira.push(elementot);
        }
        if (i == 11) {
            elementot.id = 'elemento';
            const caminhoElemento = 'img/img_elementos/frame' + i + '_toupeira.png';
            elementot.src = caminhoElemento;
            elementot.style.display = 'none';
            slide.appendChild(elementot);
            elementosToupeira.push(elementot);

            elementor.id = 'elemento';
            const caminho_Elemento = 'img/img_elementos/frame' + i + '_raposa.png';
            elementor.src = caminho_Elemento;
            elementor.style.display = 'none';
            slide.appendChild(elementor);
            elementosRaposa.push(elementor);
        }
        if (i == 12) {
            elementoc.id = 'elemento';
            const caminho__Elemento = 'img/img_elementos/frame' + i + '_cavalo.png';
            elementoc.src = caminho__Elemento;
            elementoc.style.display = 'none';
            slide.appendChild(elementoc);
            elementosCavalo.push(elementoc);
        }
        if (i == 13) {
            elementot.id = 'elemento';
            const caminhoElemento = 'img/img_elementos/frame' + i + '_toupeira.png';
            elementot.src = caminhoElemento;
            elementot.style.display = 'none';
            slide.appendChild(elementot);
            elementosToupeira.push(elementot);

            elementoc.id = 'elemento';
            const caminho__Elemento = 'img/img_elementos/frame' + i + '_cavalo.png';
            elementoc.src = caminho__Elemento;
            elementoc.style.display = 'none';
            slide.appendChild(elementoc);
            elementosCavalo.push(elementoc);
        }
        if (i == 14) {
            elementot.id = 'elemento';
            const caminhoElemento = 'img/img_elementos/frame' + i + '_toupeira.png';
            elementot.src = caminhoElemento;
            elementot.style.display = 'none';
            slide.appendChild(elementot);
            elementosToupeira.push(elementot);

            elementor.id = 'elemento';
            const caminho_Elemento = 'img/img_elementos/frame' + i + '_raposa.png';
            elementor.src = caminho_Elemento;
            elementor.style.display = 'none';
            slide.appendChild(elementor);
            elementosRaposa.push(elementor);

            elementoc.id = 'elemento';
            const caminho__Elemento = 'img/img_elementos/frame' + i + '_cavalo.png';
            elementoc.src = caminho__Elemento;
            elementoc.style.display = 'none';
            slide.appendChild(elementoc);
            elementosCavalo.push(elementoc);
        }
        if (i == 15) {
            elementoc.id = 'elemento';
            const caminho__Elemento = 'img/img_elementos/frame' + i + '_cavalo.png';
            elementoc.src = caminho__Elemento;
            elementoc.style.display = 'none';
            slide.appendChild(elementoc);
            elementosCavalo.push(elementoc);
        }
        if (i == 16) {
            elementor.id = 'elemento';
            const caminho_Elemento = 'img/img_elementos/frame' + i + '_raposa.png';
            elementor.src = caminho_Elemento;
            elementor.style.display = 'none';
            slide.appendChild(elementor);
            elementosRaposa.push(elementor);

            elementoc.id = 'elemento';
            const caminho__Elemento = 'img/img_elementos/frame' + i + '_cavalo.png';
            elementoc.src = caminho__Elemento;
            elementoc.style.display = 'none';
            slide.appendChild(elementoc);
            elementosCavalo.push(elementoc);
        }
        if (i >= 17) {
            elementot.id = 'elemento';
            const caminhoElemento = 'img/img_elementos/frame' + i + '_toupeira.png';
            elementot.src = caminhoElemento;
            elementot.style.display = 'none';
            slide.appendChild(elementot);
            elementosToupeira.push(elementot);

            elementor.id = 'elemento';
            const caminho_Elemento = 'img/img_elementos/frame' + i + '_raposa.png';
            elementor.src = caminho_Elemento;
            elementor.style.display = 'none';
            slide.appendChild(elementor);
            elementosRaposa.push(elementor);

            elementoc.id = 'elemento';
            const caminho__Elemento = 'img/img_elementos/frame' + i + '_cavalo.png';
            elementoc.src = caminho__Elemento;
            elementoc.style.display = 'none';
            slide.appendChild(elementoc);
            elementosCavalo.push(elementoc);
        }
    }

    for (let i = 1; i < 8; i++) {
        if (i < 8) {
            const cenario = new Image();
            cenario.id = 'cenario';
            const caminhoCenario = 'img/desenhos/' + i + '.png';
            cenario.src = caminhoCenario;
            cenario.style.display = 'none';
            slide.appendChild(cenario);
            cenarios.push(cenario);
        }
    }

    for (let i = 1; i < 3; i++) {
        const cenario = new Image();
        cenario.id = 'cenario';
        const caminhoCenario = 'img/desenhos/8.' + i + '.png';
        cenario.src = caminhoCenario;
        cenario.style.display = 'none';
        slide.appendChild(cenario);
        cenarios.push(cenario);
    }

    for (let i = 1; i < 3; i++) {
        const cenario = new Image();
        cenario.id = 'cenario';
        const caminhoCenario = 'img/desenhos/9.' + i + '.png';
        cenario.src = caminhoCenario;
        cenario.style.display = 'none';
        slide.appendChild(cenario);
        cenarios.push(cenario);
    }

    const cenario10 = new Image();
    cenario10.id = 'cenario';
    const caminhoCenario10 = 'img/desenhos/10.png';
    cenario10.src = caminhoCenario10;
    cenario10.style.display = 'none';
    slide.appendChild(cenario10);
    cenarios.push(cenario10);

    for (let i = 1; i < 3; i++) {
        const cenario = new Image();
        cenario.id = 'cenario';
        const caminhoCenario = 'img/desenhos/11.' + i + '.png';
        cenario.src = caminhoCenario;
        cenario.style.display = 'none';
        slide.appendChild(cenario);
        cenarios.push(cenario);
    }

    for (let i = 1; i < 4; i++) {
        const cenario = new Image();
        cenario.id = 'cenario';
        const caminhoCenario = 'img/desenhos/12.' + i + '.png';
        cenario.src = caminhoCenario;
        cenario.style.display = 'none';
        slide.appendChild(cenario);
        cenarios.push(cenario);
    }

    const cenario13 = new Image();
    cenario13.id = 'cenario';
    const caminhoCenario13 = 'img/desenhos/13.png';
    cenario13.src = caminhoCenario13;
    cenario13.style.display = 'none';
    slide.appendChild(cenario13);
    cenarios.push(cenario13);

    for (let i = 1; i < 3; i++) {
        const cenario = new Image();
        cenario.id = 'cenario';
        const caminhoCenario = 'img/desenhos/14.' + i + '.png';
        cenario.src = caminhoCenario;
        cenario.style.display = 'none';
        slide.appendChild(cenario);
        cenarios.push(cenario);
    }

    for (let i = 1; i < 4; i++) {
        const cenario = new Image();
        cenario.id = 'cenario';
        const caminhoCenario = 'img/desenhos/15.' + i + '.png';
        cenario.src = caminhoCenario;
        cenario.style.display = 'none';
        slide.appendChild(cenario);
        cenarios.push(cenario);
    }

    for (let i = 1; i < 4; i++) {
        const cenario = new Image();
        cenario.id = 'cenario';
        const caminhoCenario = 'img/desenhos/16.' + i + '.png';
        cenario.src = caminhoCenario;
        cenario.style.display = 'none';
        slide.appendChild(cenario);
        cenarios.push(cenario);
    }

    for (let i = 1; i < 4; i++) {
        const cenario = new Image();
        cenario.id = 'cenario';
        const caminhoCenario = 'img/desenhos/18.' + i + '.png';
        cenario.src = caminhoCenario;
        cenario.style.display = 'none';
        slide.appendChild(cenario);
        cenarios.push(cenario);
    }

    //------------------------------------------------------------------falas
    for (let i = 1; i < 3; i++) {
        const fala = new Image();
        fala.class = 'falas';
        const caminhoFala = 'img/falas/Frame 1_' + i + '.png';
        fala.src = caminhoFala;
        fala.style.display = 'none';
        slide.appendChild(fala);
        falas.push(fala);
    }

    for (let i = 1; i < 3; i++) {
        const fala = new Image();
        fala.class = 'falas';
        const caminhoFala = 'img/falas/Frame 2_' + i + '.png';
        fala.src = caminhoFala;
        fala.style.display = 'none';
        slide.appendChild(fala);
        falas.push(fala);
    }

    for (let i = 1; i < 7; i++) {
        const fala = new Image();
        fala.class = 'falas';
        const caminhoFala = 'img/falas/Frame 3_' + i + '.png';
        fala.src = caminhoFala;
        fala.style.display = 'none';
        slide.appendChild(fala);
        falas.push(fala);
    }

    for (let i = 1; i < 2; i++) {
        const fala = new Image();
        fala.class = 'falas';
        const caminhoFala = 'img/falas/Frame 4_' + i + '.png';
        fala.src = caminhoFala;
        fala.style.display = 'none';
        slide.appendChild(fala);
        falas.push(fala);
    }

    for (let i = 1; i < 5; i++) {
        const fala = new Image();
        fala.class = 'falas';
        const caminhoFala = 'img/falas/Frame 5_' + i + '.png';
        fala.src = caminhoFala;
        fala.style.display = 'none';
        slide.appendChild(fala);
        falas.push(fala);
    }

    for (let i = 1; i < 3; i++) {
        const fala = new Image();
        fala.class = 'falas';
        const caminhoFala = 'img/falas/Frame 6_' + i + '.png';
        fala.src = caminhoFala;
        fala.style.display = 'none';
        slide.appendChild(fala);
        falas.push(fala);
    }

    for (let i = 1; i < 2; i++) {
        const fala = new Image();
        fala.class = 'falas';
        const caminhoFala = 'img/falas/Frame 7_' + i + '.png';
        fala.src = caminhoFala;
        fala.style.display = 'none';
        slide.appendChild(fala);
        falas.push(fala);
    }

    for (let i = 1; i < 2; i++) {
        const fala = new Image();
        fala.class = 'falas';
        const caminhoFala = 'img/falas/Frame 9_' + i + '.png';
        fala.src = caminhoFala;
        fala.style.display = 'none';
        slide.appendChild(fala);
        falas.push(fala);
    }

    for (let i = 1; i < 5; i++) {
        const fala = new Image();
        fala.class = 'falas';
        const caminhoFala = 'img/falas/Frame 10_' + i + '.png';
        fala.src = caminhoFala;
        fala.style.display = 'none';
        slide.appendChild(fala);
        falas.push(fala);
    }

    for (let i = 1; i < 2; i++) {
        const fala = new Image();
        fala.class = 'falas';
        const caminhoFala = 'img/falas/Frame 11_' + i + '.png';
        fala.src = caminhoFala;
        fala.style.display = 'none';
        slide.appendChild(fala);
        falas.push(fala);
    }

    for (let i = 1; i < 2; i++) {
        const fala = new Image();
        fala.class = 'falas';
        const caminhoFala = 'img/falas/Frame 13_' + i + '.png';
        fala.src = caminhoFala;
        fala.style.display = 'none';
        slide.appendChild(fala);
        falas.push(fala);
    }

    for (let i = 1; i < 3; i++) {
        const fala = new Image();
        fala.class = 'falas';
        const caminhoFala = 'img/falas/Frame 14_' + i + '.png';
        fala.src = caminhoFala;
        fala.style.display = 'none';
        slide.appendChild(fala);
        falas.push(fala);
    }

    for (let i = 1; i < 3; i++) {
        const fala = new Image();
        fala.class = 'falas';
        const caminhoFala = 'img/falas/Frame 15_' + i + '.png';
        fala.src = caminhoFala;
        fala.style.display = 'none';
        slide.appendChild(fala);
        falas.push(fala);
    }

    for (let i = 1; i < 7; i++) {
        const fala = new Image();
        fala.class = 'falas';
        const caminhoFala = 'img/falas/Frame 16_' + i + '.png';
        fala.src = caminhoFala;
        fala.style.display = 'none';
        slide.appendChild(fala);
        falas.push(fala);
    }

    for (let i = 1; i < 2; i++) {
        const fala = new Image();
        fala.class = 'falas';
        const caminhoFala = 'img/falas/Frame 17_' + i + '.png';
        fala.src = caminhoFala;
        fala.style.display = 'none';
        slide.appendChild(fala);
        falas.push(fala);
    }

    for (let i = 1; i < 8; i++) {
        const fala = new Image();
        fala.class = 'falas';
        const caminhoFala = 'img/falas/Frame 18_' + i + '.png';
        fala.src = caminhoFala;
        fala.style.display = 'none';
        slide.appendChild(fala);
        falas.push(fala);
    }


    for (let i = 3; i < 21; i++) {
        const audio = new Audio();
        audio.id = 'audio';
        const caminhoAudio = 'audios/cena' + i + '.mp3';
        audio.src = caminhoAudio;
        audio.style.display = 'none';
        slide.appendChild(audio);
        audios.push(audio);
    }

    const vento = new Audio();
    vento.id = 'vento';
    const caminhoAudio0 = 'efeitos/Vento_frame2.mp3';
    vento.src = caminhoAudio0;
    vento.style.display = 'none';
    slide.appendChild(vento);

    //-------------------------------Som Caminhar(Trocar frame)
    const andar = new Audio();
    andar.id = 'andar';
    const caminhoAudio1 = 'efeitos/Andar_neve.mp3';
    andar.src = caminhoAudio1;
    andar.style.display = 'none';
    slide.appendChild(andar);

    //-------------------------------Som Sobre
    const sobre = new Audio();
    sobre.id = 'sobre';
    sobre.src = 'efeitos/sobre.wav';
    sobre.style.display = 'none';
    slide.appendChild(sobre);
    //-------------------------------Audios Falas
    for (let i = 3; i < 21; i++) {
        const audio = new Audio();
        audio.id = 'audio';
        const caminhoAudio = 'audios/cena' + i + '.mp3';
        audio.src = caminhoAudio;
        audio.style.display = 'none';
        slide.appendChild(audio);
        audios.push(audio);
    }

    function voltaImagemAudio() {
        if (indiceAtual != 0) {
            andar.play();
            imagens[indiceAtual].style.display = 'none'; // Esconde a imagem atual
            indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length; // Atualiza o índice para a imagem anterior
            imagens[indiceAtual].style.display = 'block'; // Mostra a imagem anterior

            // Pausa o áudio atual, se existir
            if (audios[indiceAudio]) {
                audios[indiceAudio].pause();
            }

            // Atualiza o índice do áudio para o áudio associado à imagem anterior
            indiceAudio = indiceAudio - 1;

            // Toca o áudio associado à imagem anterior, se existir
            if (audios[indiceAudio]) {
                audios[indiceAudio].currentTime = 0;
                audios[indiceAudio].play();
            }
        } else {
            indiceAtual = 0; // Se já estiver na primeira imagem, mantenha o índice atual como 0
        }
    }

    function proximaImagemAudio() {
        if (indiceAtual != 0) {
            andar.play();
        }
        imagens[indiceAtual].style.display = 'none'; // Esconde a imagem atual
        indiceAtual = (indiceAtual + 1) % imagens.length; // Atualiza o índice para a próxima imagem
        imagens[indiceAtual].style.display = 'block'; // Mostra a próxima imagem
        console.log(indiceAtual);

        // Pausa o áudio anterior, se existir
        if (audios[indiceAudio]) {
            audios[indiceAudio].pause();
        }

        // Atualiza o índice do áudio para o áudio associado à próxima imagem
        indiceAudio = indiceAudio + 1;

        // Toca o áudio associado à próxima imagem, se existir
        if (audios[indiceAudio]) {
            audios[indiceAudio].currentTime = 0;
            audios[indiceAudio].play();
        }
    }


    slide.addEventListener('click', function (event) {
        if (event.clientX <= window.innerWidth / 6) {
            voltaImagemAudio();
            if (indiceAtual == 1) { vento.play(); }
            for (let i = 0; i < cenarios.length; i++) {
                cenarios[i].style.display = 'none';
            }
        } else if (event.clientX >= 5 * window.innerWidth / 6) {
            proximaImagemAudio();
            if (indiceAtual == 1) { vento.play(); }
            for (let i = 0; i < cenarios.length; i++) {
                cenarios[i].style.display = 'none';
            }
        }

        if (indiceAtual == 2 && event.clientX <= 590 && event.clientX >= 490 && event.clientY >= 430 && event.clientY <= 550) {
            contador++;
            if (contador == 1) {
                cenarios[0].style.position = 'absolute';
                cenarios[0].style.top = '0';
                cenarios[0].style.left = '0';
                cenarios[0].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[0].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 3 && event.clientX <= 970 && event.clientX >= 800 && event.clientY >= 250 && event.clientY <= 450) {
            contador++;
            if (contador == 1) {
                cenarios[1].style.position = 'absolute';
                cenarios[1].style.top = '0';
                cenarios[1].style.left = '0';
                cenarios[1].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[1].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 4 && event.clientX <= 670 && event.clientX >= 590 && event.clientY >= 400 && event.clientY <= 470) {
            contador++;
            if (contador == 1) {
                cenarios[2].style.position = 'absolute';
                cenarios[2].style.top = '0';
                cenarios[2].style.left = '0';
                cenarios[2].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[2].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 5 && event.clientX >= 725 && event.clientX <= 835 && event.clientY >= 235 && event.clientY <= 345) {
            contador++;
            if (contador == 1) {
                cenarios[3].style.position = 'absolute';
                cenarios[3].style.top = '0';
                cenarios[3].style.left = '0';
                cenarios[3].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[3].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 6 && event.clientX >= 640 && event.clientX <= 850 && event.clientY >= 360 && event.clientY <= 570) {
            contador++;
            if (contador == 1) {
                cenarios[4].style.position = 'absolute';
                cenarios[4].style.top = '0';
                cenarios[4].style.left = '0';
                cenarios[4].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[4].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 7 && event.clientX >= 860 && event.clientX <= 1000 && event.clientY >= 440 && event.clientY <= 600) {
            contador++;
            if (contador == 1) {
                cenarios[5].style.position = 'absolute';
                cenarios[5].style.top = '0';
                cenarios[5].style.left = '0';
                cenarios[5].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[5].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 8 && event.clientX >= 860 && event.clientX <= 1000 && event.clientY >= 440 && event.clientY <= 600) {
            contador++;
            if (contador == 1) {
                cenarios[6].style.position = 'absolute';
                cenarios[6].style.top = '0';
                cenarios[6].style.left = '0';
                cenarios[6].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[6].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 9 && event.clientX >= 701 && event.clientX <= 900 && event.clientY >= 250 && event.clientY <= 450) {
            contador++;
            if (contador == 1) {
                cenarios[7].style.position = 'absolute';
                cenarios[7].style.top = '0';
                cenarios[7].style.left = '0';
                cenarios[7].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[7].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 9 && event.clientX >= 300 && event.clientX <= 700 && event.clientY >= 450 && event.clientY <= 600) {
            contador++;
            if (contador == 1) {
                cenarios[8].style.position = 'absolute';
                cenarios[8].style.top = '0';
                cenarios[8].style.left = '0';
                cenarios[8].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[8].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 10 && event.clientX >= 780 && event.clientX <= 830 && event.clientY >= 450 && event.clientY <= 510) {
            contador++;
            if (contador == 1) {
                cenarios[9].style.position = 'absolute';
                cenarios[9].style.top = '0';
                cenarios[9].style.left = '0';
                cenarios[9].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[9].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 10 && event.clientX >= 1120 && event.clientX <= 1500 && event.clientY >= 450 && event.clientY <= 650) {
            contador++;
            if (contador == 1) {
                cenarios[10].style.position = 'absolute';
                cenarios[10].style.top = '0';
                cenarios[10].style.left = '0';
                cenarios[10].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[10].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 11 && event.clientX >= 600 && event.clientX <= 850 && event.clientY >= 0 && event.clientY <= 450) {
            contador++;
            if (contador == 1) {
                cenarios[11].style.position = 'absolute';
                cenarios[11].style.top = '0';
                cenarios[11].style.left = '0';
                cenarios[11].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[11].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 12 && event.clientX >= 380 && event.clientX <= 440 && event.clientY >= 220 && event.clientY <= 310) {
            contador++;
            if (contador == 1) {
                cenarios[12].style.position = 'absolute';
                cenarios[12].style.top = '0';
                cenarios[12].style.left = '0';
                cenarios[12].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[12].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 12 && event.clientX >= 900 && event.clientX <= 1350 && event.clientY >= 20 && event.clientY <= 850) {
            contador++;
            if (contador == 1) {
                cenarios[13].style.position = 'absolute';
                cenarios[13].style.top = '0';
                cenarios[13].style.left = '0';
                cenarios[13].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[13].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 13 && event.clientX >= 980 && event.clientX <= 1040 && event.clientY >= 170 && event.clientY <= 215) {
            contador++;
            if (contador == 1) {
                cenarios[14].style.position = 'absolute';
                cenarios[14].style.top = '0';
                cenarios[14].style.left = '0';
                cenarios[14].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[14].style.display = 'none';
                contador = 0;
            }

        } else if (indiceAtual == 13 && event.clientX >= 800 && event.clientX <= 1100 && event.clientY >= 440 && event.clientY <= 540) {
            contador++;
            if (contador == 1) {
                cenarios[15].style.position = 'absolute';
                cenarios[15].style.top = '0';
                cenarios[15].style.left = '0';
                cenarios[15].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[15].style.display = 'none';
                contador = 0;
            }

        } else if (indiceAtual == 13 && event.clientX >= 550 && event.clientX <= 1250 && event.clientY >= 230 && event.clientY <= 430) {
            contador++;
            if (contador == 1) {
                cenarios[16].style.position = 'absolute';
                cenarios[16].style.top = '0';
                cenarios[16].style.left = '0';
                cenarios[16].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[16].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 14 && event.clientX >= 500 && event.clientX <= 800 && event.clientY >= 0 && event.clientY <= 500) {
            contador++;
            if (contador == 1) {
                cenarios[17].style.position = 'absolute';
                cenarios[17].style.top = '0';
                cenarios[17].style.left = '0';
                cenarios[17].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[17].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 15 && event.clientX >= 300 && event.clientX <= 750 && event.clientY >= 400 && event.clientY <= 650) {
            contador++;
            if (contador == 1) {
                cenarios[18].style.position = 'absolute';
                cenarios[18].style.top = '0';
                cenarios[18].style.left = '0';
                cenarios[18].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[18].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 15 && event.clientX >= 1100 && event.clientX <= window.innerWidth && event.clientY >= 0 && event.clientY <= 550) {
            contador++;
            if (contador == 1) {
                cenarios[19].style.position = 'absolute';
                cenarios[19].style.top = '0';
                cenarios[19].style.left = '0';
                cenarios[19].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[19].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 16 && event.clientX >= 782 && event.clientX <= 820 && event.clientY >= 480 && event.clientY <= 530) {
            contador++;
            if (contador == 1) {
                cenarios[20].style.position = 'absolute';
                cenarios[20].style.top = '0';
                cenarios[20].style.left = '0';
                cenarios[20].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[20].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 16 && event.clientX >= 600 && event.clientX <= 780 && event.clientY >= 440 && event.clientY <= 620) {
            contador++;
            if (contador == 1) {
                cenarios[21].style.position = 'absolute';
                cenarios[21].style.top = '0';
                cenarios[21].style.left = '0';
                cenarios[21].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[21].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 16 && event.clientX >= 820 && event.clientX <= 1050 && event.clientY >= 100 && event.clientY <= 450) {
            contador++;
            if (contador == 1) {
                cenarios[22].style.position = 'absolute';
                cenarios[22].style.top = '0';
                cenarios[22].style.left = '0';
                cenarios[22].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[22].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 17 && event.clientX >= 570 && event.clientX <= 590 && event.clientY >= 450 && event.clientY <= 480) {
            contador++;
            if (contador == 1) {
                cenarios[23].style.position = 'absolute';
                cenarios[23].style.top = '0';
                cenarios[23].style.left = '0';
                cenarios[23].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[23].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 17 && event.clientX >= 470 && event.clientX <= 550 && event.clientY >= 415 && event.clientY <= 480) {
            contador++;
            if (contador == 1) {
                cenarios[24].style.position = 'absolute';
                cenarios[24].style.top = '0';
                cenarios[24].style.left = '0';
                cenarios[24].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[24].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 17 && event.clientX >= 620 && event.clientX <= 900 && event.clientY >= 100 && event.clientY <= 460) {
            contador++;
            if (contador == 1) {
                cenarios[25].style.position = 'absolute';
                cenarios[25].style.top = '0';
                cenarios[25].style.left = '0';
                cenarios[25].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[25].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 19 && event.clientX >= 700 && event.clientX <= 780 && event.clientY >= 240 && event.clientY <= 350) {
            contador++;
            if (contador == 1) {
                cenarios[26].style.position = 'absolute';
                cenarios[26].style.top = '0';
                cenarios[26].style.left = '0';
                cenarios[26].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[26].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 19 && event.clientX >= 820 && event.clientX <= 950 && event.clientY >= 120 && event.clientY <= 350) {
            contador++;
            if (contador == 1) {
                cenarios[27].style.position = 'absolute';
                cenarios[27].style.top = '0';
                cenarios[27].style.left = '0';
                cenarios[27].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[27].style.display = 'none';
                contador = 0;
            }
        } else if (indiceAtual == 19 && event.clientX >= 400 && event.clientX <= 650 && event.clientY >= 30 && event.clientY <= 450) {
            contador++;
            if (contador == 1) {
                cenarios[28].style.position = 'absolute';
                cenarios[28].style.top = '0';
                cenarios[28].style.left = '0';
                cenarios[28].style.display = 'block';
                sobre.play();
            } else if (contador == 2) {
                cenarios[28].style.display = 'none';
                contador = 0;
            }
        }
    });


    document.addEventListener('mousemove', function (event) {
        if (indiceAtual == 2 && event.clientX <= 590 && event.clientX >= 490 && event.clientY >= 430 && event.clientY <= 550) {
            elementosToupeira[0].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosToupeira[0].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosToupeira[0].style.position = 'absolute';
            elementosToupeira[0].style.top = 0 + '%';
            elementosToupeira[0].style.left = 0 + '%';
            elementosToupeira[0].style.display = 'block';

            slide.insertBefore(elementosToupeira[0]);

        } else if (indiceAtual == 3 && event.clientX <= 970 && event.clientX >= 800 && event.clientY >= 250 && event.clientY <= 450) {
            elementosToupeira[1].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosToupeira[1].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosToupeira[1].style.position = 'absolute';
            elementosToupeira[1].style.top = 0 + '%';
            elementosToupeira[1].style.left = 0 + '%';
            elementosToupeira[1].style.display = 'block';

            slide.insertBefore(elementosToupeira[1]);

        } else if (indiceAtual == 4 && event.clientX <= 670 && event.clientX >= 590 && event.clientY >= 400 && event.clientY <= 470) {
            elementosToupeira[2].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosToupeira[2].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosToupeira[2].style.position = 'absolute';
            elementosToupeira[2].style.top = 0 + '%';
            elementosToupeira[2].style.left = 0 + '%';
            elementosToupeira[2].style.display = 'block';

            slide.insertBefore(elementosToupeira[2]);

        } else if (indiceAtual == 5 && event.clientX >= 725 && event.clientX <= 835 && event.clientY >= 235 && event.clientY <= 345) {
            elementosToupeira[3].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosToupeira[3].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosToupeira[3].style.position = 'absolute';
            elementosToupeira[3].style.top = 0 + '%';
            elementosToupeira[3].style.left = 0 + '%';
            elementosToupeira[3].style.display = 'block';

            slide.insertBefore(elementosToupeira[3]);

        } else if (indiceAtual == 6 && event.clientX >= 640 && event.clientX <= 850 && event.clientY >= 360 && event.clientY <= 570) {
            elementosToupeira[4].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosToupeira[4].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosToupeira[4].style.position = 'absolute';
            elementosToupeira[4].style.top = 0 + '%';
            elementosToupeira[4].style.left = 0 + '%';
            elementosToupeira[4].style.display = 'block';

            slide.insertBefore(elementosToupeira[4]);

        } else if (indiceAtual == 7 && event.clientX >= 860 && event.clientX <= 1000 && event.clientY >= 440 && event.clientY <= 600) {
            elementosRaposa[0].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosRaposa[0].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosRaposa[0].style.position = 'absolute';
            elementosRaposa[0].style.top = 0 + '%';
            elementosRaposa[0].style.left = 0 + '%';
            elementosRaposa[0].style.display = 'block';

            slide.insertBefore(elementosRaposa[0]);

        } else if (indiceAtual == 8 && event.clientX >= 860 && event.clientX <= 1000 && event.clientY >= 440 && event.clientY <= 600) {
            elementosToupeira[5].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosToupeira[5].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosToupeira[5].style.position = 'absolute';
            elementosToupeira[5].style.top = 0 + '%';
            elementosToupeira[5].style.left = 0 + '%';
            elementosToupeira[5].style.display = 'block';

            slide.insertBefore(elementosToupeira[5]);

        } else if (indiceAtual == 9 && event.clientX >= 701 && event.clientX <= 900 && event.clientY >= 250 && event.clientY <= 450) {
            elementosToupeira[6].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosToupeira[6].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosToupeira[6].style.position = 'absolute';
            elementosToupeira[6].style.top = 0 + '%';
            elementosToupeira[6].style.left = 0 + '%';
            elementosToupeira[6].style.display = 'block';

            slide.insertBefore(elementosToupeira[6]);

        } else if (indiceAtual == 9 && event.clientX >= 300 && event.clientX <= 700 && event.clientY >= 450 && event.clientY <= 600) {
            elementosRaposa[1].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosRaposa[1].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosRaposa[1].style.position = 'absolute';
            elementosRaposa[1].style.top = 0 + '%';
            elementosRaposa[1].style.left = 0 + '%';
            elementosRaposa[1].style.display = 'block';


            slide.insertBefore(elementosRaposa[1]);

        } else if (indiceAtual == 10 && event.clientX >= 780 && event.clientX <= 830 && event.clientY >= 450 && event.clientY <= 510) {
            elementosToupeira[7].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosToupeira[7].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosToupeira[7].style.position = 'absolute';
            elementosToupeira[7].style.top = 0 + '%';
            elementosToupeira[7].style.left = 0 + '%';
            elementosToupeira[7].style.display = 'block';

            slide.insertBefore(elementosToupeira[7]);

        } else if (indiceAtual == 10 && event.clientX >= 1120 && event.clientX <= 1500 && event.clientY >= 450 && event.clientY <= 650) {
            elementosRaposa[2].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosRaposa[2].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosRaposa[2].style.position = 'absolute';
            elementosRaposa[2].style.top = 0 + '%';
            elementosRaposa[2].style.left = 0 + '%';
            elementosRaposa[2].style.display = 'block';

            slide.insertBefore(elementosRaposa[2]);

        } else if (indiceAtual == 11 && event.clientX >= 600 && event.clientX <= 850 && event.clientY >= 0 && event.clientY <= 450) {
            elementosCavalo[0].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosCavalo[0].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosCavalo[0].style.position = 'absolute';
            elementosCavalo[0].style.top = 0 + '%';
            elementosCavalo[0].style.left = 0 + '%';
            elementosCavalo[0].style.display = 'block';

            slide.insertBefore(elementosCavalo[0]);

        } else if (indiceAtual == 12 && event.clientX >= 380 && event.clientX <= 440 && event.clientY >= 220 && event.clientY <= 310) {
            elementosToupeira[8].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosToupeira[8].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosToupeira[8].style.position = 'absolute';
            elementosToupeira[8].style.top = 0 + '%';
            elementosToupeira[8].style.left = 0 + '%';
            elementosToupeira[8].style.display = 'block';

            slide.insertBefore(elementosToupeira[8]);

        } else if (indiceAtual == 12 && event.clientX >= 900 && event.clientX <= 1350 && event.clientY >= 20 && event.clientY <= 850) {
            elementosCavalo[1].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosCavalo[1].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosCavalo[1].style.position = 'absolute';
            elementosCavalo[1].style.top = 0 + '%';
            elementosCavalo[1].style.left = 0 + '%';
            elementosCavalo[1].style.display = 'block';

            slide.insertBefore(elementosCavalo[1]);

        } else if (indiceAtual == 13 && event.clientX >= 980 && event.clientX <= 1040 && event.clientY >= 170 && event.clientY <= 215) {
            elementosToupeira[9].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosToupeira[9].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosToupeira[9].style.position = 'absolute';
            elementosToupeira[9].style.top = 0 + '%';
            elementosToupeira[9].style.left = 0 + '%';
            elementosToupeira[9].style.display = 'block';

            slide.insertBefore(elementosToupeira[9]);

        } else if (indiceAtual == 13 && event.clientX >= 800 && event.clientX <= 1100 && event.clientY >= 440 && event.clientY <= 540) {
            elementosRaposa[3].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosRaposa[3].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosRaposa[3].style.position = 'absolute';
            elementosRaposa[3].style.top = 0 + '%';
            elementosRaposa[3].style.left = 0 + '%';
            elementosRaposa[3].style.display = 'block';

            slide.insertBefore(elementosRaposa[3]);

        } else if (indiceAtual == 13 && event.clientX >= 550 && event.clientX <= 1250 && event.clientY >= 230 && event.clientY <= 430) {
            elementosCavalo[2].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosCavalo[2].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosCavalo[2].style.position = 'absolute';
            elementosCavalo[2].style.top = 0 + '%';
            elementosCavalo[2].style.left = 0 + '%';
            elementosCavalo[2].style.display = 'block';

            slide.insertBefore(elementosCavalo[2]);

        } else if (indiceAtual == 14 && event.clientX >= 500 && event.clientX <= 800 && event.clientY >= 0 && event.clientY <= 500) {
            elementosCavalo[3].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosCavalo[3].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosCavalo[3].style.position = 'absolute';
            elementosCavalo[3].style.top = 0 + '%';
            elementosCavalo[3].style.left = 0 + '%';
            elementosCavalo[3].style.display = 'block';

            slide.insertBefore(elementosCavalo[3]);

        } else if (indiceAtual == 15 && event.clientX >= 1100 && event.clientX <= window.innerWidth && event.clientY >= 0 && event.clientY <= 550) {
            elementosCavalo[4].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosCavalo[4].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosCavalo[4].style.position = 'absolute';
            elementosCavalo[4].style.top = 0 + '%';
            elementosCavalo[4].style.left = 0 + '%';
            elementosCavalo[4].style.display = 'block';

            slide.insertBefore(elementosCavalo[4]);

        } else if (indiceAtual == 15 && event.clientX >= 300 && event.clientX <= 750 && event.clientY >= 400 && event.clientY <= 650) {
            elementosRaposa[4].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosRaposa[4].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosRaposa[4].style.position = 'absolute';
            elementosRaposa[4].style.top = 0 + '%';
            elementosRaposa[4].style.left = 0 + '%';
            elementosRaposa[4].style.display = 'block';

            slide.insertBefore(elementosRaposa[4]);

        } else if (indiceAtual == 16 && event.clientX >= 820 && event.clientX <= 1050 && event.clientY >= 100 && event.clientY <= 450) {
            elementosCavalo[5].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosCavalo[5].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosCavalo[5].style.position = 'absolute';
            elementosCavalo[5].style.top = 0 + '%';
            elementosCavalo[5].style.left = 0 + '%';
            elementosCavalo[5].style.display = 'block';

            slide.insertBefore(elementosCavalo[5]);

        } else if (indiceAtual == 16 && event.clientX >= 600 && event.clientX <= 780 && event.clientY >= 440 && event.clientY <= 620) {
            elementosRaposa[5].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosRaposa[5].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosRaposa[5].style.position = 'absolute';
            elementosRaposa[5].style.top = 0 + '%';
            elementosRaposa[5].style.left = 0 + '%';
            elementosRaposa[5].style.display = 'block';

            slide.insertBefore(elementosRaposa[5]);

        } else if (indiceAtual == 16 && event.clientX >= 782 && event.clientX <= 820 && event.clientY >= 480 && event.clientY <= 530) {
            elementosToupeira[10].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosToupeira[10].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosToupeira[10].style.position = 'absolute';
            elementosToupeira[10].style.top = 0 + '%';
            elementosToupeira[10].style.left = 0 + '%';
            elementosToupeira[10].style.display = 'block';

            slide.insertBefore(elementosToupeira[10]);

        } else if (indiceAtual == 17 && event.clientX >= 620 && event.clientX <= 900 && event.clientY >= 100 && event.clientY <= 460) {
            elementosCavalo[6].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosCavalo[6].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosCavalo[6].style.position = 'absolute';
            elementosCavalo[6].style.top = 0 + '%';
            elementosCavalo[6].style.left = 0 + '%';
            elementosCavalo[6].style.display = 'block';

            slide.insertBefore(elementosCavalo[6]);

        } else if (indiceAtual == 17 && event.clientX >= 470 && event.clientX <= 550 && event.clientY >= 415 && event.clientY <= 480) {
            elementosRaposa[6].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosRaposa[6].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosRaposa[6].style.position = 'absolute';
            elementosRaposa[6].style.top = 0 + '%';
            elementosRaposa[6].style.left = 0 + '%';
            elementosRaposa[6].style.display = 'block';

            slide.insertBefore(elementosRaposa[6]);

        } else if (indiceAtual == 17 && event.clientX >= 570 && event.clientX <= 590 && event.clientY >= 450 && event.clientY <= 480) {
            elementosToupeira[11].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosToupeira[11].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosToupeira[11].style.position = 'absolute';
            elementosToupeira[11].style.top = 0 + '%';
            elementosToupeira[11].style.left = 0 + '%';
            elementosToupeira[11].style.display = 'block';

            slide.insertBefore(elementosToupeira[11]);

        } else if (indiceAtual == 18 && event.clientX >= 170 && event.clientX <= 360 && event.clientY >= 300 && event.clientY <= window.innerHeight - 50) {
            elementosCavalo[7].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosCavalo[7].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosCavalo[7].style.position = 'absolute';
            elementosCavalo[7].style.top = 0 + '%';
            elementosCavalo[7].style.left = 0 + '%';
            elementosCavalo[7].style.display = 'block';

            slide.insertBefore(elementosCavalo[7]);

        } else if (indiceAtual == 18 && event.clientX >= 370 && event.clientX <= 430 && event.clientY >= 592 && event.clientY <= window.innerHeight - 40) {
            elementosRaposa[7].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosRaposa[7].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosRaposa[7].style.position = 'absolute';
            elementosRaposa[7].style.top = 0 + '%';
            elementosRaposa[7].style.left = 0 + '%';
            elementosRaposa[7].style.display = 'block';

            slide.insertBefore(elementosRaposa[7]);

        } else if (indiceAtual == 18 && event.clientX >= 370 && event.clientX <= 420 && event.clientY >= 550 && event.clientY <= 590) {
            elementosToupeira[12].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosToupeira[12].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosToupeira[12].style.position = 'absolute';
            elementosToupeira[12].style.top = 0 + '%';
            elementosToupeira[12].style.left = 0 + '%';
            elementosToupeira[12].style.display = 'block';

            slide.insertBefore(elementosToupeira[12]);

        } else if (indiceAtual == 19 && event.clientX >= 400 && event.clientX <= 650 && event.clientY >= 30 && event.clientY <= 450) {
            elementosCavalo[8].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosCavalo[8].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosCavalo[8].style.position = 'absolute';
            elementosCavalo[8].style.top = 0 + '%';
            elementosCavalo[8].style.left = 0 + '%';
            elementosCavalo[8].style.display = 'block';

            slide.insertBefore(elementosCavalo[8]);

        } else if (indiceAtual == 19 && event.clientX >= 820 && event.clientX <= 950 && event.clientY >= 120 && event.clientY <= 350) {
            elementosRaposa[8].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosRaposa[8].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosRaposa[8].style.position = 'absolute';
            elementosRaposa[8].style.top = 0 + '%';
            elementosRaposa[8].style.left = 0 + '%';
            elementosRaposa[8].style.display = 'block';

            slide.insertBefore(elementosRaposa[8]);

        } else if (indiceAtual == 19 && event.clientX >= 700 && event.clientX <= 780 && event.clientY >= 240 && event.clientY <= 350) {
            elementosToupeira[13].style.width = ((window.innerWidth + 7) * 1914) / 1912 + 'px';
            elementosToupeira[13].style.height = ((window.innerHeight + 28) * 865) / 863 + 'px';
            elementosToupeira[13].style.position = 'absolute';
            elementosToupeira[13].style.top = 0 + '%';
            elementosToupeira[13].style.left = 0 + '%';
            elementosToupeira[13].style.display = 'block';

            slide.insertBefore(elementosToupeira[13]);

        } else {
            for (let i = 0; i < elementosToupeira.length; i++) {
                elementosToupeira[i].style.display = 'none';
            }

            for (let i = 0; i < elementosRaposa.length; i++) {
                elementosRaposa[i].style.display = 'none';
            }

            for (let i = 0; i < elementosCavalo.length; i++) {
                elementosCavalo[i].style.display = 'none';
            }
        }
    });


    /*let intervalID; // Variável para armazenar o ID do intervalo
    let falaExibida = false; // Flag para controlar se a fala já foi exibida
    
    function verificarIndiceEExibirFalas() {
        console.log("Função verificarIndiceEExibirFalas chamada.");
        console.log("Valor de indiceAtual:", indiceAtual);
        console.log("Número de elementos em falas:", falas.length);
    
        if (indiceAtual === 2 && !falaExibida) { // Verifica se o índice é 2 e se a fala ainda não foi exibida
            console.log("indiceAtual é 2.");
    
            if (falas.length > 0) {
                let primeiraFala = falas[0];
                console.log("Elemento falas[0] encontrado:", primeiraFala);
    
                // Inicialmente, esconder todas as falas
                falas.forEach(fala => {
                    fala.style.display = 'none';
                });
    
                // Configura a primeira fala
                primeiraFala.style.position = 'absolute';
                primeiraFala.style.top = '0%';
                primeiraFala.style.left = '0%';
                primeiraFala.style.display = 'block';
                console.log("Estilo aplicado ao elemento falas[0].");
    
                setTimeout(function () {
                    primeiraFala.classList.add('visivel');
                    console.log("Classe 'visivel' adicionada ao elemento falas[0].");
    
                    // Remover fala após 2 segundos
                    setTimeout(function () {
                        primeiraFala.style.display = 'none';
                        console.log("Elemento falas[0] removido do ecrã.");
                    }, 2000);
    
                    falaExibida = true; // Define a flag como true após exibir a fala
                }, 3000);
    
    
            } else {
                console.log("Não há elementos em falas.");
            }
        } else if (indiceAtual !== 2) { // Se o índice não for 2, redefine a flag para false
            falaExibida = false;
            console.log("indiceAtual não é 2. Retomando loop de verificação.");
            clearInterval(intervalID); // Pausa o loop de verificação
            intervalID = setInterval(verificarIndiceEExibirFalas, 1000); // Retoma o loop
        }
    }
    
    // Iniciar loop de verificação
    intervalID = setInterval(verificarIndiceEExibirFalas, 1000);*/

    let intervalID; // Variável para armazenar o ID do intervalo
    let falaExibida = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]; // Flags para controlar se a fala já foi exibida para cada índice
    
    // Array de arrays de objetos de falas, cada objeto contém a fala, tempo de início e tempo de desaparecimento
    let falasPorIndice = [
        [],
       
        [],

        // Falas para indiceAtual = 2----------------------------------------------------------
        [
            { fala: falas[0], inicio: 1000, duracao: 2000 }, 
            { fala: falas[1], inicio: 4000, duracao: 2600 }, 
        ],

        // Falas para indiceAtual = 3---------------------------------------------------------- 
        [
            { fala: falas[2], inicio: 1000, duracao: 2500 },  // Fala 2 para indiceAtual = 3
            { fala: falas[3], inicio: 3000, duracao: 3000 }, 
        ],

        // Falas para indiceAtual = 4----------------------------------------------------------
        [
            { fala: falas[4], inicio: 6000, duracao: 4000 },
            { fala: falas[5], inicio: 1000, duracao: 3500 }, 
            { fala: falas[6], inicio: 1000, duracao: 3500 }, 
            { fala: falas[7], inicio: 1000, duracao: 3500 }, 
        ],

        // Falas para indiceAtual = 5----------------------------------------------------------
        [
            { fala: falas[8], inicio: 5000, duracao: 4000 },  // Fala 6 para indiceAtual = 5
            { fala: falas[9], inicio: 1000, duracao: 3500 }, 
        ],

        // Falas para indiceAtual = 6----------------------------------------------------------
        [
            { fala: falas[10], inicio: 6000, duracao: 4000 },
            { fala: falas[11], inicio: 1000, duracao: 3500 }, 
            { fala: falas[12], inicio: 1000, duracao: 3500 }, 
            { fala: falas[13], inicio: 1000, duracao: 3500 }, 
            
        ],
        
        // Falas para indiceAtual = 7----------------------------------------------------------
        [
            { fala: falas[14], inicio: 6000, duracao: 4000 },
            { fala: falas[15], inicio: 1000, duracao: 3500 }, 
        ],
        
        // Falas para indiceAtual = 8----------------------------------------------------------
        [
            { fala: falas[16], inicio: 6000, duracao: 4000 },
        ],

        [],


        // Falas para indiceAtual = 10----------------------------------------------------------
        [
            { fala: falas[17], inicio: 6000, duracao: 4000 },
        ],
        
        // Falas para indiceAtual = 11----------------------------------------------------------
        [
            { fala: falas[18], inicio: 6000, duracao: 4000 },
            { fala: falas[19], inicio: 1000, duracao: 3500 }, 
            { fala: falas[20], inicio: 1000, duracao: 3500 }, 
            { fala: falas[21], inicio: 1000, duracao: 3500 }, 
        ],

        // Falas para indiceAtual = 12----------------------------------------------------------
        [
            { fala: falas[22], inicio: 6000, duracao: 4000 },
        ],
        
        [],

        // Falas para indiceAtual = 13----------------------------------------------------------
        [
            { fala: falas[23], inicio: 6000, duracao: 4000 },
        ],
        
        // Falas para indiceAtual = 14----------------------------------------------------------
        [
            { fala: falas[24], inicio: 6000, duracao: 4000 },
            { fala: falas[25], inicio: 1000, duracao: 3500 }, 
        ],
        
        // Falas para indiceAtual = 15----------------------------------------------------------
        [
            { fala: falas[26], inicio: 6000, duracao: 4000 },
            { fala: falas[27], inicio: 1000, duracao: 3500 }, 
        ],
        
        // Falas para indiceAtual = 16----------------------------------------------------------
        [
            { fala: falas[28], inicio: 6000, duracao: 4000 },
            { fala: falas[29], inicio: 1000, duracao: 3500 }, 
            { fala: falas[30], inicio: 1000, duracao: 3500 }, 
        ],

    // Falas para indiceAtual = 17----------------------------------------------------------
    [
        { fala: falas[31], inicio: 6000, duracao: 4000 },
    ],
     
    // Falas para indiceAtual = 18----------------------------------------------------------
    [
        { fala: falas[32], inicio: 6000, duracao: 4000 },
        { fala: falas[33], inicio: 1000, duracao: 3500 }, 
        { fala: falas[34], inicio: 1000, duracao: 3500 }, 
        { fala: falas[35], inicio: 1000, duracao: 3500 }, 
        { fala: falas[36], inicio: 1000, duracao: 3500 }, 
        { fala: falas[37], inicio: 1000, duracao: 3500 }, 
        { fala: falas[38], inicio: 1000, duracao: 3500 }, 

    ]
];

    
    function exibirFalaComDelay(falaObj, index, indiceAtual) {
        let { fala, inicio, duracao } = falaObj;
    
        setTimeout(() => {
            console.log(`Elemento falas[${indiceAtual}][${index}] encontrado:`, fala);
    
            // Configura a fala atual
            fala.style.position = 'absolute';
            fala.style.top = '0%';
            fala.style.left = '0%';
            fala.style.display = 'block';
            console.log(`Estilo aplicado ao elemento falas[${indiceAtual}][${index}].`);
    
            fala.classList.add('visivel');
            console.log(`Classe 'visivel' adicionada ao elemento falas[${indiceAtual}][${index}].`);
    
            // Remover fala após sua duração
            setTimeout(() => {
                fala.style.display = 'none';
                console.log(`Elemento falas[${indiceAtual}][${index}] removido do ecrã.`);
    
                if (index === falasPorIndice[indiceAtual].length - 1) {
                    falaExibida[indiceAtual] = true; // Define a flag como true após exibir todas as falas
                    iniciarVerificacao(); // Reinicia a verificação
                }
            }, duracao);
        }, inicio); // Adiciona um atraso para exibir cada fala
    }
    
    function verificarIndiceEExibirFalas() {
        console.log("Função verificarIndiceEExibirFalas chamada.");
        console.log("Valor de indiceAtual:", indiceAtual);
        console.log("Número de elementos em falas:", falas.length);
    
        if (indiceAtual >= 2 && indiceAtual <= 5 && !falaExibida[indiceAtual]) { // Verifica se o índice está no intervalo e se a fala ainda não foi exibida
            console.log(`indiceAtual é ${indiceAtual}.`);
            clearInterval(intervalID); // Pausa o loop de verificação
    
            if (falas.length > 0) {
                let falasAtuais = falasPorIndice[indiceAtual];
    
                // Inicialmente, esconder todas as falas
                falas.forEach(fala => {
                    fala.style.display = 'none';
                });
    
                // Iterar sobre as falas atuais
                falasAtuais.forEach((falaObj, index) => {
                    exibirFalaComDelay(falaObj, index, indiceAtual);
                });
    
            } else {
                console.log("Não há elementos em falas.");
                iniciarVerificacao(); // Reinicia a verificação se não há falas
            }
        } else {
            console.log("Indice fora do intervalo ou fala já exibida.");
        }
    }
    
    function iniciarVerificacao() {
        clearInterval(intervalID);
        intervalID = setInterval(verificarIndiceEExibirFalas, 1000);
    }
    
    // Iniciar loop de verificação
    iniciarVerificacao();
    
});

