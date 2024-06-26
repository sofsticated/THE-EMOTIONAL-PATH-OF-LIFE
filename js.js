document.addEventListener('DOMContentLoaded', function () {
  const imagens = [];                                       //imagens principais
  const fundos = [];                                        //fundos de cor
  const elementosToupeira = [];                             //toupeira
  const elementosRaposa = [];                               //raposa
  const elementosCavalo = [];                               //cavalo
  const cenarios = [];                                      //cenarios imaginados
  const falas = [];
  var info_animais = [];

  var clique = false;                                       //Controlador de evento clique
  var falasRep = true;                                      //Controlador de falas aparição

  const audios = [];                                        //audios falas
  const ambientes = [];                                      //som ambiente

  const slide = document.getElementById('slide');

  const l_imagens = window.innerWidth + 7;
  const h_imagens = window.innerHeight + 28;



  //---------------------------------------------------------------Contadores

  let indiceAtual = 0;
  let indiceAudio = -2;
  let contador = 0;

  for (let i = 1; i <= 21; i++) {
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
  //-------------------------------------------------------------------Informação animais
  for (let i = 0; i < 3; i++) {
    const info = new Image();
    info.id = 'info';
    const caminhoinfo = 'img/img_texto/texto' + (i + 1) + '.png';
    info.src = caminhoinfo;
    info.style.display = 'none';
    slide.appendChild(info);
    info_animais.push(info);
  }
  //----------------------------------------------------------------------Imagens Imaginação
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

  for (let i = 1; i < 3; i++) {
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

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////// AUDIOS/SONS /////////////////////////////////////////////////////////////
  //--------------------------------------------- Musica
  const musica = new Audio();
  musica.src = 'ambiente/musica.mp3';
  musica.style.display = 'none';
  //Se a musica chegar ao fim
  musica.addEventListener('ended', function () {
    musica.currentTime = 0; //tempo
    musica.play();
  });

  musica.play();


  //----------------------------------------------Parar Som Ambiente(FUNÇÃO)
  function pararAmb() {
    for (let i = 0; i < 7; i++) {
      if (ambientes[i]) { ambientes[i].pause(); }

    }
  }


  //-------------------------------------------- Som Ambiente
  for (let i = 0; i < 7; i++) {
    const ambiente = new Audio();
    ambiente.id = 'ambienteS';
    ambiente.src = 'ambiente/amb' + i + '.mp3';
    ambiente.style.display = 'none';
    slide.appendChild(ambiente);
    ambientes.push(ambiente);
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
    audios[1].volume = 0.555;

  }

  //--------------------------------------------- Volumes             
  musica.volume = 0.255;
  vento.volume = 0.5;
  ambientes[6].volume = 0.4



  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////// Interação Clique ////////////////////////////////////////////////////////

  function voltaImagemAudio() {


    if (indiceAtual != 0) {
      andar.play();
      imagens[indiceAtual].style.display = 'none'; // Esconde a imagem atual
      indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length; // Atualiza o índice para a imagem anterior
      imagens[indiceAtual].style.display = 'block'; // Mostra a imagem anterior
      clique = false;// controlador de clique
      falasRep = true;// controlador de falas aparição
      contador = 0;//Reseta
      //console.log(clique);
      //---------------------------------------------------------------- Control de pausa de sons
      if (audios[indiceAudio]) {
        audios[indiceAudio].pause();
      }

      // Atualiza o índice do áudio para o áudio associado à imagem anterior
      indiceAudio = indiceAudio - 1;
      //---------------------------------------------------------------- Controlador de click em frmes sem audio
      if (indiceAtual == 9 || indiceAtual == 13) {
        clique = true;
      }
      //---------------------------------------------------------------- Falas
      if (audios[indiceAudio]) {
        audios[indiceAudio].currentTime = 0;
        audios[indiceAudio].play();
      }

      //---------------------------------------------------------------- Som Ambiente
      if (indiceAudio == 1) {
        pararAmb();
        ambientes[0].currentTime = 0;
        ambientes[0].play();
      } else if (indiceAudio == 3) {
        pararAmb();
        ambientes[1].currentTime = 0;
        ambientes[1].play();

      } else if (indiceAudio == 5) {
        pararAmb();
        ambientes[2].currentTime = 0;
        ambientes[2].play();
      } else if (indiceAudio == 7) {
        pararAmb();
        ambientes[3].currentTime = 0;
        ambientes[3].play();
      } else if (indiceAudio == 11) {
        pararAmb();
        ambientes[0].currentTime = 0;
        ambientes[0].play();
      } else if (indiceAudio == 12) {
        pararAmb();
        ambientes[4].currentTime = 0;
        ambientes[4].play();
      } else if (indiceAudio == 13) {
        pararAmb();
        ambientes[5].currentTime = 0;
        ambientes[5].play();
      } else if (indiceAudio == 14) {
        pararAmb();
        ambientes[6].currentTime = 0;
        ambientes[6].play();
      } else if (indiceAudio == 15) {
        pararAmb();
        ambientes[0].currentTime = 0;
        ambientes[0].play();
      } else if (indiceAudio == 16) {
        pararAmb();
        ambientes[2].currentTime = 0;
        ambientes[2].play();
      }
    } else {
      indiceAtual = 0; // Se já estiver na primeira imagem, mantenha o índice atual como 0
    }
  }

  function proximaImagemAudio() {
    if (indiceAtual != 0 && indiceAtual != 20) {
      andar.play();
    }
    if (indiceAtual <= 19) {
      imagens[indiceAtual].style.display = 'none'; // Esconde a imagem atual
      indiceAtual = (indiceAtual + 1); // Atualiza o índice para a próxima imagem
      imagens[indiceAtual].style.display = 'block'; // Mostra a próxima imagem
      clique = false;// controlador de clique
      falasRep = true;// controlador de falas aparição
      contador = 0;//Reseta


      //---------------------------------------------------------------- Control de pausa de sons
      if (audios[indiceAudio]) {
        audios[indiceAudio].pause();
      }


      // ---------------------------------------------------------------- Controlador de Audios/barreira
      indiceAudio = indiceAudio + 1;
      if (indiceAudio == 18) indiceAudio == 18;
      console.log(indiceAudio);



      //---------------------------------------------------------------- Controlador de click em frmes sem audio
      if (indiceAtual == 9 || indiceAtual == 13) {
        clique = true;
      }

      //---------------------------------------------------------------- Falas
      if (audios[indiceAudio] && indiceAudio < 18) {
        audios[indiceAudio].currentTime = 0;
        audios[indiceAudio].play();

      }
      //---------------------------------------------------------------- Som Ambiente
      if (indiceAudio == 0) {
        pararAmb();
        ambientes[0].currentTime = 0;
        ambientes[0].play();
      } else if (indiceAudio == 2) {
        pararAmb();
        ambientes[1].currentTime = 0;
        ambientes[1].play();

      } else if (indiceAudio == 4) {
        pararAmb();
        ambientes[2].currentTime = 0;
        ambientes[2].play();
      } else if (indiceAudio == 6) {
        pararAmb();
        ambientes[3].currentTime = 0;
        ambientes[3].play();
      } else if (indiceAudio == 8) {
        pararAmb();
        ambientes[0].currentTime = 0;
        ambientes[0].play();
      } else if (indiceAudio == 12) {
        pararAmb();
        ambientes[4].currentTime = 0;
        ambientes[4].play();
      } else if (indiceAudio == 13) {
        pararAmb();
        ambientes[5].currentTime = 0;
        ambientes[5].play();
      } else if (indiceAudio == 14) {
        pararAmb();
        ambientes[6].currentTime = 0;
        ambientes[6].play();
      } else if (indiceAudio == 15) {
        pararAmb();
        ambientes[0].currentTime = 0;
        ambientes[0].play();
      } else if (indiceAudio == 16) {
        pararAmb();
        ambientes[2].currentTime = 0;
        ambientes[2].play();
      }
    } else if (indiceAtual == 20) {
      window.location.href = 'index.html';
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////// EVENTO DE CLIQUE ////////////////////////////////////////////////////////


  ///////////////////////////////////////////// CENARIOS IMAGINAÇÃO ///////////////////////////////////////////////////////

  slide.addEventListener("click", function (event) {
    if (event.clientX <= window.innerWidth / 6) {
      voltaImagemAudio();
      if (indiceAtual == 1) {
        vento.play();
      }
      for (let i = 0; i < cenarios.length; i++) {
        cenarios[i].style.display = "none";
      }
    } else if (event.clientX >= (5 * window.innerWidth) / 6) {
      proximaImagemAudio();
      if (indiceAtual == 1) {
        vento.play();
      }
      for (let i = 0; i < cenarios.length; i++) {
        cenarios[i].style.display = "none";
      }
    }
    if (clique) {
      if (
        indiceAtual == 2 &&
        event.clientX <= 590 &&
        event.clientX >= 490 &&
        event.clientY >= 430 &&
        event.clientY <= 550
      ) {
        contador++;
        if (contador == 1) {
          cenarios[0].style.position = "absolute";
          cenarios[0].style.top = "0";
          cenarios[0].style.left = "0";
          cenarios[0].style.display = "block";
          sobre.play();
        } else if (contador == 2) {
          cenarios[0].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 3 &&
        event.clientX <= 970 &&
        event.clientX >= 800 &&
        event.clientY >= 250 &&
        event.clientY <= 450
      ) {
        contador++;
        if (contador == 1) {
          cenarios[1].style.position = "absolute";
          cenarios[1].style.top = "0";
          cenarios[1].style.left = "0";
          cenarios[1].style.display = "block";
          sobre.play();
        } else if (contador == 2) {
          cenarios[1].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 4 &&
        event.clientX <= 670 &&
        event.clientX >= 590 &&
        event.clientY >= 400 &&
        event.clientY <= 470
      ) {
        contador++;
        if (contador == 1) {
          cenarios[2].style.position = "absolute";
          cenarios[2].style.top = "0";
          cenarios[2].style.left = "0";
          cenarios[2].style.display = "block";
          sobre.play();
        } else if (contador == 2) {
          cenarios[2].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 5 &&
        event.clientX >= 725 &&
        event.clientX <= 835 &&
        event.clientY >= 235 &&
        event.clientY <= 345
      ) {
        contador++;
        if (contador == 1) {
          cenarios[3].style.position = "absolute";
          cenarios[3].style.top = "0";
          cenarios[3].style.left = "0";
          cenarios[3].style.display = "block";
          sobre.play();
        } else if (contador == 2) {
          cenarios[3].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 6 &&
        event.clientX >= 640 &&
        event.clientX <= 850 &&
        event.clientY >= 360 &&
        event.clientY <= 570
      ) {
        contador++;
        if (contador == 1) {
          cenarios[4].style.position = "absolute";
          cenarios[4].style.top = "0";
          cenarios[4].style.left = "0";
          cenarios[4].style.display = "block";
          sobre.play();
        } else if (contador == 2) {
          cenarios[4].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 7 &&
        event.clientX >= 860 &&
        event.clientX <= 1000 &&
        event.clientY >= 440 &&
        event.clientY <= 600
      ) {
        contador++;
        if (contador == 1) {
          cenarios[5].style.position = "absolute";
          cenarios[5].style.top = "0";
          cenarios[5].style.left = "0";
          cenarios[5].style.display = "block";
          sobre.play();
        } else if (contador == 2) {
          cenarios[5].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 8 &&
        event.clientX >= 860 &&
        event.clientX <= 1000 &&
        event.clientY >= 440 &&
        event.clientY <= 600
      ) {
        contador++;
        if (contador == 1) {
          cenarios[6].style.position = "absolute";
          cenarios[6].style.top = "0";
          cenarios[6].style.left = "0";
          cenarios[6].style.display = "block";
          sobre.play();
        } else if (contador == 2) {
          cenarios[6].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 9 &&
        event.clientX >= 701 &&
        event.clientX <= 900 &&
        event.clientY >= 250 &&
        event.clientY <= 450
      ) {
        contador++;
        if (contador == 1) {
          cenarios[7].style.position = "absolute";
          cenarios[7].style.top = "0";
          cenarios[7].style.left = "0";
          cenarios[7].style.display = "block";
          cenarios[8].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[7].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 9 &&
        event.clientX >= 300 &&
        event.clientX <= 700 &&
        event.clientY >= 450 &&
        event.clientY <= 600
      ) {
        contador++;
        if (contador == 1) {
          cenarios[8].style.position = "absolute";
          cenarios[8].style.top = "0";
          cenarios[8].style.left = "0";
          cenarios[8].style.display = "block";
          cenarios[7].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[8].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 10 &&
        event.clientX >= 780 &&
        event.clientX <= 830 &&
        event.clientY >= 450 &&
        event.clientY <= 510
      ) {
        contador++;
        if (contador == 1) {
          cenarios[9].style.position = "absolute";
          cenarios[9].style.top = "0";
          cenarios[9].style.left = "0";
          cenarios[9].style.display = "block";
          cenarios[10].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[9].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 10 &&
        event.clientX >= 1120 &&
        event.clientX <= 1500 &&
        event.clientY >= 450 &&
        event.clientY <= 650
      ) {
        contador++;
        if (contador == 1) {
          cenarios[10].style.position = "absolute";
          cenarios[10].style.top = "0";
          cenarios[10].style.left = "0";
          cenarios[10].style.display = "block";
          cenarios[9].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[10].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 11 &&
        event.clientX >= 600 &&
        event.clientX <= 850 &&
        event.clientY >= 0 &&
        event.clientY <= 450
      ) {
        contador++;
        if (contador == 1) {
          cenarios[11].style.position = "absolute";
          cenarios[11].style.top = "0";
          cenarios[11].style.left = "0";
          cenarios[11].style.display = "block";
          sobre.play();
        } else if (contador == 2) {
          cenarios[11].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 12 &&
        event.clientX >= 380 &&
        event.clientX <= 440 &&
        event.clientY >= 220 &&
        event.clientY <= 310
      ) {
        contador++;
        if (contador == 1) {
          cenarios[12].style.position = "absolute";
          cenarios[12].style.top = "0";
          cenarios[12].style.left = "0";
          cenarios[12].style.display = "block";
          cenarios[13].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[12].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 12 &&
        event.clientX >= 900 &&
        event.clientX <= 1350 &&
        event.clientY >= 20 &&
        event.clientY <= 850
      ) {
        contador++;
        if (contador == 1) {
          cenarios[13].style.position = "absolute";
          cenarios[13].style.top = "0";
          cenarios[13].style.left = "0";
          cenarios[13].style.display = "block";
          cenarios[12].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[13].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 13 &&
        event.clientX >= 980 &&
        event.clientX <= 1040 &&
        event.clientY >= 170 &&
        event.clientY <= 215
      ) {
        contador++;
        if (contador == 1) {
          cenarios[14].style.position = "absolute";
          cenarios[14].style.top = "0";
          cenarios[14].style.left = "0";
          cenarios[14].style.display = "block";
          cenarios[15].style.display = "none";
          cenarios[16].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[14].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 13 &&
        event.clientX >= 800 &&
        event.clientX <= 1100 &&
        event.clientY >= 440 &&
        event.clientY <= 540
      ) {
        contador++;
        if (contador == 1) {
          cenarios[15].style.position = "absolute";
          cenarios[15].style.top = "0";
          cenarios[15].style.left = "0";
          cenarios[15].style.display = "block";
          cenarios[14].style.display = "none";
          cenarios[16].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[15].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 13 &&
        event.clientX >= 550 &&
        event.clientX <= 1250 &&
        event.clientY >= 230 &&
        event.clientY <= 430
      ) {
        contador++;
        if (contador == 1) {
          cenarios[16].style.position = "absolute";
          cenarios[16].style.top = "0";
          cenarios[16].style.left = "0";
          cenarios[16].style.display = "block";
          cenarios[14].style.display = "none";
          cenarios[15].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[16].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 14 &&
        event.clientX >= 500 &&
        event.clientX <= 800 &&
        event.clientY >= 0 &&
        event.clientY <= 500
      ) {
        contador++;
        if (contador == 1) {
          cenarios[17].style.position = "absolute";
          cenarios[17].style.top = "0";
          cenarios[17].style.left = "0";
          cenarios[17].style.display = "block";
          sobre.play();
        } else if (contador == 2) {
          cenarios[17].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 15 &&
        event.clientX >= 300 &&
        event.clientX <= 750 &&
        event.clientY >= 400 &&
        event.clientY <= 650
      ) {
        contador++;
        if (contador == 1) {
          cenarios[18].style.position = "absolute";
          cenarios[18].style.top = "0";
          cenarios[18].style.left = "0";
          cenarios[18].style.display = "block";
          cenarios[19].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[18].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 15 &&
        event.clientX >= 1100 &&
        event.clientX <= window.innerWidth &&
        event.clientY >= 0 &&
        event.clientY <= 550
      ) {
        contador++;
        if (contador == 1) {
          cenarios[19].style.position = "absolute";
          cenarios[19].style.top = "0";
          cenarios[19].style.left = "0";
          cenarios[19].style.display = "block";
          cenarios[18].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[19].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 16 &&
        event.clientX >= 782 &&
        event.clientX <= 820 &&
        event.clientY >= 480 &&
        event.clientY <= 530
      ) {
        contador++;
        if (contador == 1) {
          cenarios[20].style.position = "absolute";
          cenarios[20].style.top = "0";
          cenarios[20].style.left = "0";
          cenarios[20].style.display = "block";
          cenarios[21].style.display = "none";
          cenarios[22].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[20].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 16 &&
        event.clientX >= 600 &&
        event.clientX <= 780 &&
        event.clientY >= 440 &&
        event.clientY <= 620
      ) {
        contador++;
        if (contador == 1) {
          cenarios[21].style.position = "absolute";
          cenarios[21].style.top = "0";
          cenarios[21].style.left = "0";
          cenarios[21].style.display = "block";
          cenarios[20].style.display = "none";
          cenarios[22].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[21].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 16 &&
        event.clientX >= 820 &&
        event.clientX <= 1050 &&
        event.clientY >= 100 &&
        event.clientY <= 450
      ) {
        contador++;
        if (contador == 1) {
          cenarios[22].style.position = "absolute";
          cenarios[22].style.top = "0";
          cenarios[22].style.left = "0";
          cenarios[22].style.display = "block";
          cenarios[20].style.display = "none";
          cenarios[21].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[22].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 17 &&
        event.clientX >= 570 &&
        event.clientX <= 590 &&
        event.clientY >= 450 &&
        event.clientY <= 480
      ) {
        contador++;
        if (contador == 1) {
          cenarios[23].style.position = "absolute";
          cenarios[23].style.top = "0";
          cenarios[23].style.left = "0";
          cenarios[23].style.display = "block";
          cenarios[24].style.display = "none";
          cenarios[25].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[23].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 17 &&
        event.clientX >= 470 &&
        event.clientX <= 550 &&
        event.clientY >= 415 &&
        event.clientY <= 480
      ) {
        contador++;
        if (contador == 1) {
          cenarios[24].style.position = "absolute";
          cenarios[24].style.top = "0";
          cenarios[24].style.left = "0";
          cenarios[24].style.display = "block";
          cenarios[23].style.display = "none";
          cenarios[25].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[24].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 17 &&
        event.clientX >= 620 &&
        event.clientX <= 900 &&
        event.clientY >= 100 &&
        event.clientY <= 460
      ) {
        contador++;
        if (contador == 1) {
          cenarios[25].style.position = "absolute";
          cenarios[25].style.top = "0";
          cenarios[25].style.left = "0";
          cenarios[25].style.display = "block";
          cenarios[23].style.display = "none";
          cenarios[24].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[25].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 19 &&
        event.clientX >= 700 &&
        event.clientX <= 780 &&
        event.clientY >= 240 &&
        event.clientY <= 350
      ) {
        contador++;
        if (contador == 1) {
          cenarios[26].style.position = "absolute";
          cenarios[26].style.top = "0";
          cenarios[26].style.left = "0";
          cenarios[26].style.display = "block";
          cenarios[27].style.display = "none";
          cenarios[28].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[26].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 19 &&
        event.clientX >= 820 &&
        event.clientX <= 950 &&
        event.clientY >= 120 &&
        event.clientY <= 350
      ) {
        contador++;
        if (contador == 1) {
          cenarios[27].style.position = "absolute";
          cenarios[27].style.top = "0";
          cenarios[27].style.left = "0";
          cenarios[27].style.display = "block";
          cenarios[26].style.display = "none";
          cenarios[28].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[27].style.display = "none";
          contador = 0;
        }
      } else if (
        indiceAtual == 19 &&
        event.clientX >= 400 &&
        event.clientX <= 650 &&
        event.clientY >= 30 &&
        event.clientY <= 450
      ) {
        contador++;
        if (contador == 1) {
          cenarios[28].style.position = "absolute";
          cenarios[28].style.top = "0";
          cenarios[28].style.left = "0";
          cenarios[28].style.display = "block";
          cenarios[26].style.display = "none";
          cenarios[27].style.display = "none";
          sobre.play();
        } else if (contador == 2) {
          cenarios[28].style.display = "none";
          contador = 0;
        }
      }
    }
  });

  //---------------------------------------------------------------------------FRAME FINAL

  slide.addEventListener('click', function (event) {
    console.log("indiceAtual: " + indiceAtual);
  });


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////// EVENTO DE HOUVER ////////////////////////////////////////////////////////

  document.addEventListener("mousemove", function (event) {
    if (indiceAtual == 1 && event.clientX >= 180 && event.clientX <= 350 && event.clientY >= 300 && event.clientY <= 550) {
      info_animais[0].style.width = ((window.innerWidth + 7) * 1914) / 1912 + "px";
      info_animais[0].style.height = ((window.innerHeight + 28) * 865) / 863 + "px";
      info_animais[0].style.position = "absolute";
      info_animais[0].style.top = 0 + "%";
      info_animais[0].style.left = 0 + "%";
      info_animais[0].style.display = "block";

    } else if (indiceAtual == 1 && event.clientX >= 600 && event.clientX <= 1000 && event.clientY >= 250 && event.clientY <= 550) {
      info_animais[1].style.width = ((window.innerWidth + 7) * 1914) / 1912 + "px";
      info_animais[1].style.height = ((window.innerHeight + 28) * 865) / 863 + "px";
      info_animais[1].style.position = "absolute";
      info_animais[1].style.top = 0 + "%";
      info_animais[1].style.left = 0 + "%";
      info_animais[1].style.display = "block";

    } else if (indiceAtual == 1 && event.clientX >= 1150 && event.clientX <= 1400 && event.clientY >= 200 && event.clientY <= 550) {
      info_animais[2].style.width = ((window.innerWidth + 7) * 1914) / 1912 + "px";
      info_animais[2].style.height = ((window.innerHeight + 28) * 865) / 863 + "px";
      info_animais[2].style.position = "absolute";
      info_animais[2].style.top = 0 + "%";
      info_animais[2].style.left = 0 + "%";
      info_animais[2].style.display = "block";

    } else if (
      indiceAtual == 2 &&
      event.clientX <= 590 &&
      event.clientX >= 490 &&
      event.clientY >= 430 &&
      event.clientY <= 550
    ) {
      elementosToupeira[0].style.width = ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosToupeira[0].style.height = ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosToupeira[0].style.position = "absolute";
      elementosToupeira[0].style.top = 0 + "%";
      elementosToupeira[0].style.left = 0 + "%";
      elementosToupeira[0].style.display = "block";

      slide.insertBefore(elementosToupeira[0]);
    } else if (
      indiceAtual == 3 &&
      event.clientX <= 970 &&
      event.clientX >= 800 &&
      event.clientY >= 250 &&
      event.clientY <= 450
    ) {
      elementosToupeira[1].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosToupeira[1].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosToupeira[1].style.position = "absolute";
      elementosToupeira[1].style.top = 0 + "%";
      elementosToupeira[1].style.left = 0 + "%";
      elementosToupeira[1].style.display = "block";

      slide.insertBefore(elementosToupeira[1]);
    } else if (
      indiceAtual == 4 &&
      event.clientX <= 670 &&
      event.clientX >= 590 &&
      event.clientY >= 400 &&
      event.clientY <= 470
    ) {
      elementosToupeira[2].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosToupeira[2].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosToupeira[2].style.position = "absolute";
      elementosToupeira[2].style.top = 0 + "%";
      elementosToupeira[2].style.left = 0 + "%";
      elementosToupeira[2].style.display = "block";

      slide.insertBefore(elementosToupeira[2]);
    } else if (
      indiceAtual == 5 &&
      event.clientX >= 725 &&
      event.clientX <= 835 &&
      event.clientY >= 235 &&
      event.clientY <= 345
    ) {
      elementosToupeira[3].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosToupeira[3].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosToupeira[3].style.position = "absolute";
      elementosToupeira[3].style.top = 0 + "%";
      elementosToupeira[3].style.left = 0 + "%";
      elementosToupeira[3].style.display = "block";

      slide.insertBefore(elementosToupeira[3]);
    } else if (
      indiceAtual == 6 &&
      event.clientX >= 640 &&
      event.clientX <= 850 &&
      event.clientY >= 360 &&
      event.clientY <= 570
    ) {
      elementosToupeira[4].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosToupeira[4].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosToupeira[4].style.position = "absolute";
      elementosToupeira[4].style.top = 0 + "%";
      elementosToupeira[4].style.left = 0 + "%";
      elementosToupeira[4].style.display = "block";

      slide.insertBefore(elementosToupeira[4]);
    } else if (
      indiceAtual == 7 &&
      event.clientX >= 860 &&
      event.clientX <= 1000 &&
      event.clientY >= 440 &&
      event.clientY <= 600
    ) {
      elementosRaposa[0].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosRaposa[0].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosRaposa[0].style.position = "absolute";
      elementosRaposa[0].style.top = 0 + "%";
      elementosRaposa[0].style.left = 0 + "%";
      elementosRaposa[0].style.display = "block";

      slide.insertBefore(elementosRaposa[0]);
    } else if (
      indiceAtual == 8 &&
      event.clientX >= 860 &&
      event.clientX <= 1000 &&
      event.clientY >= 440 &&
      event.clientY <= 600
    ) {
      elementosToupeira[5].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosToupeira[5].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosToupeira[5].style.position = "absolute";
      elementosToupeira[5].style.top = 0 + "%";
      elementosToupeira[5].style.left = 0 + "%";
      elementosToupeira[5].style.display = "block";

      slide.insertBefore(elementosToupeira[5]);
    } else if (
      indiceAtual == 9 &&
      event.clientX >= 701 &&
      event.clientX <= 900 &&
      event.clientY >= 250 &&
      event.clientY <= 450
    ) {
      elementosToupeira[6].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosToupeira[6].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosToupeira[6].style.position = "absolute";
      elementosToupeira[6].style.top = 0 + "%";
      elementosToupeira[6].style.left = 0 + "%";
      elementosToupeira[6].style.display = "block";

      slide.insertBefore(elementosToupeira[6]);
    } else if (
      indiceAtual == 9 &&
      event.clientX >= 300 &&
      event.clientX <= 700 &&
      event.clientY >= 450 &&
      event.clientY <= 600
    ) {
      elementosRaposa[1].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosRaposa[1].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosRaposa[1].style.position = "absolute";
      elementosRaposa[1].style.top = 0 + "%";
      elementosRaposa[1].style.left = 0 + "%";
      elementosRaposa[1].style.display = "block";

      slide.insertBefore(elementosRaposa[1]);
    } else if (
      indiceAtual == 10 &&
      event.clientX >= 780 &&
      event.clientX <= 830 &&
      event.clientY >= 450 &&
      event.clientY <= 510
    ) {
      elementosToupeira[7].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosToupeira[7].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosToupeira[7].style.position = "absolute";
      elementosToupeira[7].style.top = 0 + "%";
      elementosToupeira[7].style.left = 0 + "%";
      elementosToupeira[7].style.display = "block";

      slide.insertBefore(elementosToupeira[7]);
    } else if (
      indiceAtual == 10 &&
      event.clientX >= 1120 &&
      event.clientX <= 1500 &&
      event.clientY >= 450 &&
      event.clientY <= 650
    ) {
      elementosRaposa[2].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosRaposa[2].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosRaposa[2].style.position = "absolute";
      elementosRaposa[2].style.top = 0 + "%";
      elementosRaposa[2].style.left = 0 + "%";
      elementosRaposa[2].style.display = "block";

      slide.insertBefore(elementosRaposa[2]);
    } else if (
      indiceAtual == 11 &&
      event.clientX >= 600 &&
      event.clientX <= 850 &&
      event.clientY >= 0 &&
      event.clientY <= 450
    ) {
      elementosCavalo[0].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosCavalo[0].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosCavalo[0].style.position = "absolute";
      elementosCavalo[0].style.top = 0 + "%";
      elementosCavalo[0].style.left = 0 + "%";
      elementosCavalo[0].style.display = "block";

      slide.insertBefore(elementosCavalo[0]);
    } else if (
      indiceAtual == 12 &&
      event.clientX >= 380 &&
      event.clientX <= 440 &&
      event.clientY >= 220 &&
      event.clientY <= 310
    ) {
      elementosToupeira[8].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosToupeira[8].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosToupeira[8].style.position = "absolute";
      elementosToupeira[8].style.top = 0 + "%";
      elementosToupeira[8].style.left = 0 + "%";
      elementosToupeira[8].style.display = "block";

      slide.insertBefore(elementosToupeira[8]);
    } else if (
      indiceAtual == 12 &&
      event.clientX >= 900 &&
      event.clientX <= 1350 &&
      event.clientY >= 20 &&
      event.clientY <= 850
    ) {
      elementosCavalo[1].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosCavalo[1].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosCavalo[1].style.position = "absolute";
      elementosCavalo[1].style.top = 0 + "%";
      elementosCavalo[1].style.left = 0 + "%";
      elementosCavalo[1].style.display = "block";

      slide.insertBefore(elementosCavalo[1]);
    } else if (
      indiceAtual == 13 &&
      event.clientX >= 980 &&
      event.clientX <= 1040 &&
      event.clientY >= 170 &&
      event.clientY <= 215
    ) {
      elementosToupeira[9].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosToupeira[9].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosToupeira[9].style.position = "absolute";
      elementosToupeira[9].style.top = 0 + "%";
      elementosToupeira[9].style.left = 0 + "%";
      elementosToupeira[9].style.display = "block";

      slide.insertBefore(elementosToupeira[9]);
    } else if (
      indiceAtual == 13 &&
      event.clientX >= 800 &&
      event.clientX <= 1100 &&
      event.clientY >= 440 &&
      event.clientY <= 540
    ) {
      elementosRaposa[3].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosRaposa[3].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosRaposa[3].style.position = "absolute";
      elementosRaposa[3].style.top = 0 + "%";
      elementosRaposa[3].style.left = 0 + "%";
      elementosRaposa[3].style.display = "block";

      slide.insertBefore(elementosRaposa[3]);
    } else if (
      indiceAtual == 13 &&
      event.clientX >= 550 &&
      event.clientX <= 1250 &&
      event.clientY >= 230 &&
      event.clientY <= 430
    ) {
      elementosCavalo[2].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosCavalo[2].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosCavalo[2].style.position = "absolute";
      elementosCavalo[2].style.top = 0 + "%";
      elementosCavalo[2].style.left = 0 + "%";
      elementosCavalo[2].style.display = "block";

      slide.insertBefore(elementosCavalo[2]);
    } else if (
      indiceAtual == 14 &&
      event.clientX >= 500 &&
      event.clientX <= 800 &&
      event.clientY >= 0 &&
      event.clientY <= 500
    ) {
      elementosCavalo[3].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosCavalo[3].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosCavalo[3].style.position = "absolute";
      elementosCavalo[3].style.top = 0 + "%";
      elementosCavalo[3].style.left = 0 + "%";
      elementosCavalo[3].style.display = "block";

      slide.insertBefore(elementosCavalo[3]);
    } else if (
      indiceAtual == 15 &&
      event.clientX >= 1100 &&
      event.clientX <= window.innerWidth &&
      event.clientY >= 0 &&
      event.clientY <= 550
    ) {
      elementosCavalo[4].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosCavalo[4].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosCavalo[4].style.position = "absolute";
      elementosCavalo[4].style.top = 0 + "%";
      elementosCavalo[4].style.left = 0 + "%";
      elementosCavalo[4].style.display = "block";

      slide.insertBefore(elementosCavalo[4]);
    } else if (
      indiceAtual == 15 &&
      event.clientX >= 300 &&
      event.clientX <= 750 &&
      event.clientY >= 400 &&
      event.clientY <= 650
    ) {
      elementosRaposa[4].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosRaposa[4].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosRaposa[4].style.position = "absolute";
      elementosRaposa[4].style.top = 0 + "%";
      elementosRaposa[4].style.left = 0 + "%";
      elementosRaposa[4].style.display = "block";

      slide.insertBefore(elementosRaposa[4]);
    } else if (
      indiceAtual == 16 &&
      event.clientX >= 820 &&
      event.clientX <= 1050 &&
      event.clientY >= 100 &&
      event.clientY <= 450
    ) {
      elementosCavalo[5].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosCavalo[5].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosCavalo[5].style.position = "absolute";
      elementosCavalo[5].style.top = 0 + "%";
      elementosCavalo[5].style.left = 0 + "%";
      elementosCavalo[5].style.display = "block";

      slide.insertBefore(elementosCavalo[5]);
    } else if (
      indiceAtual == 16 &&
      event.clientX >= 600 &&
      event.clientX <= 780 &&
      event.clientY >= 440 &&
      event.clientY <= 620
    ) {
      elementosRaposa[5].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosRaposa[5].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosRaposa[5].style.position = "absolute";
      elementosRaposa[5].style.top = 0 + "%";
      elementosRaposa[5].style.left = 0 + "%";
      elementosRaposa[5].style.display = "block";

      slide.insertBefore(elementosRaposa[5]);
    } else if (
      indiceAtual == 16 &&
      event.clientX >= 782 &&
      event.clientX <= 820 &&
      event.clientY >= 480 &&
      event.clientY <= 530
    ) {
      elementosToupeira[10].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosToupeira[10].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosToupeira[10].style.position = "absolute";
      elementosToupeira[10].style.top = 0 + "%";
      elementosToupeira[10].style.left = 0 + "%";
      elementosToupeira[10].style.display = "block";

      slide.insertBefore(elementosToupeira[10]);
    } else if (
      indiceAtual == 17 &&
      event.clientX >= 620 &&
      event.clientX <= 900 &&
      event.clientY >= 100 &&
      event.clientY <= 460
    ) {
      elementosCavalo[6].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosCavalo[6].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosCavalo[6].style.position = "absolute";
      elementosCavalo[6].style.top = 0 + "%";
      elementosCavalo[6].style.left = 0 + "%";
      elementosCavalo[6].style.display = "block";

      slide.insertBefore(elementosCavalo[6]);
    } else if (
      indiceAtual == 17 &&
      event.clientX >= 470 &&
      event.clientX <= 550 &&
      event.clientY >= 415 &&
      event.clientY <= 480
    ) {
      elementosRaposa[6].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosRaposa[6].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosRaposa[6].style.position = "absolute";
      elementosRaposa[6].style.top = 0 + "%";
      elementosRaposa[6].style.left = 0 + "%";
      elementosRaposa[6].style.display = "block";

      slide.insertBefore(elementosRaposa[6]);
    } else if (
      indiceAtual == 17 &&
      event.clientX >= 570 &&
      event.clientX <= 590 &&
      event.clientY >= 450 &&
      event.clientY <= 480
    ) {
      elementosToupeira[11].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosToupeira[11].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosToupeira[11].style.position = "absolute";
      elementosToupeira[11].style.top = 0 + "%";
      elementosToupeira[11].style.left = 0 + "%";
      elementosToupeira[11].style.display = "block";

      slide.insertBefore(elementosToupeira[11]);
    } else if (
      indiceAtual == 18 &&
      event.clientX >= 170 &&
      event.clientX <= 360 &&
      event.clientY >= 300 &&
      event.clientY <= window.innerHeight - 50
    ) {
      elementosCavalo[7].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosCavalo[7].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosCavalo[7].style.position = "absolute";
      elementosCavalo[7].style.top = 0 + "%";
      elementosCavalo[7].style.left = 0 + "%";
      elementosCavalo[7].style.display = "block";

      slide.insertBefore(elementosCavalo[7]);
    } else if (
      indiceAtual == 18 &&
      event.clientX >= 370 &&
      event.clientX <= 430 &&
      event.clientY >= 592 &&
      event.clientY <= window.innerHeight - 40
    ) {
      elementosRaposa[7].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosRaposa[7].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosRaposa[7].style.position = "absolute";
      elementosRaposa[7].style.top = 0 + "%";
      elementosRaposa[7].style.left = 0 + "%";
      elementosRaposa[7].style.display = "block";

      slide.insertBefore(elementosRaposa[7]);
    } else if (
      indiceAtual == 18 &&
      event.clientX >= 370 &&
      event.clientX <= 420 &&
      event.clientY >= 550 &&
      event.clientY <= 590
    ) {
      elementosToupeira[12].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosToupeira[12].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosToupeira[12].style.position = "absolute";
      elementosToupeira[12].style.top = 0 + "%";
      elementosToupeira[12].style.left = 0 + "%";
      elementosToupeira[12].style.display = "block";

      slide.insertBefore(elementosToupeira[12]);
    } else if (
      indiceAtual == 19 &&
      event.clientX >= 400 &&
      event.clientX <= 650 &&
      event.clientY >= 30 &&
      event.clientY <= 450
    ) {
      elementosCavalo[8].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosCavalo[8].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosCavalo[8].style.position = "absolute";
      elementosCavalo[8].style.top = 0 + "%";
      elementosCavalo[8].style.left = 0 + "%";
      elementosCavalo[8].style.display = "block";

      slide.insertBefore(elementosCavalo[8]);
    } else if (
      indiceAtual == 19 &&
      event.clientX >= 820 &&
      event.clientX <= 950 &&
      event.clientY >= 120 &&
      event.clientY <= 350
    ) {
      elementosRaposa[8].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosRaposa[8].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosRaposa[8].style.position = "absolute";
      elementosRaposa[8].style.top = 0 + "%";
      elementosRaposa[8].style.left = 0 + "%";
      elementosRaposa[8].style.display = "block";

      slide.insertBefore(elementosRaposa[8]);
    } else if (
      indiceAtual == 19 &&
      event.clientX >= 700 &&
      event.clientX <= 780 &&
      event.clientY >= 240 &&
      event.clientY <= 350
    ) {
      elementosToupeira[13].style.width =
        ((window.innerWidth + 7) * 1914) / 1912 + "px";
      elementosToupeira[13].style.height =
        ((window.innerHeight + 28) * 865) / 863 + "px";
      elementosToupeira[13].style.position = "absolute";
      elementosToupeira[13].style.top = 0 + "%";
      elementosToupeira[13].style.left = 0 + "%";
      elementosToupeira[13].style.display = "block";

      slide.insertBefore(elementosToupeira[13]);
    } else {
      for (let i = 0; i < elementosToupeira.length; i++) {
        elementosToupeira[i].style.display = "none";
      }

      for (let i = 0; i < elementosRaposa.length; i++) {
        elementosRaposa[i].style.display = "none";
      }

      for (let i = 0; i < elementosCavalo.length; i++) {
        elementosCavalo[i].style.display = "none";
      }

      for (let i = 0; i < info_animais.length; i++) {
        info_animais[i].style.display = "none";
      }
    }
  });

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////// FALAS IMAGNES ////////////////////////////////////////////////////////////

  let timeouts = []; // Array para armazenar os IDs dos timeouts

  slide.addEventListener("click", function (event) {
    // Função para limpar todos os timeouts pendentes
    function clearAllTimeouts() {
      timeouts.forEach(clearTimeout);
      timeouts = [];
    }

    // Função para esconder todas as falas
    function hideAllFalas() {
      falas.forEach((fala) => {
        fala.style.display = "none";
      });
    }

    if (falasRep) {
      clearAllTimeouts(); // Limpa os timeouts antes de definir novos
      hideAllFalas(); // Esconde todas as falas antes de mostrar as novas


      //INDICE 2---------------------------------------------------------------------------------
      if (indiceAtual == 2) {
        timeouts.push(
          setTimeout(function () {
            // Mostrar a imagem
            falas[0].style.position = "absolute";
            falas[0].style.top = "0%";
            falas[0].style.left = "0%";
            falas[0].style.display = "block";
          }, 1700)
        ); // Tempo de início em milissegundos

        timeouts.push(
          setTimeout(function () {
            // Esconder a imagem após a duração desejada
            falas[0].style.display = "none";
          }, 3700)
        ); // Fim em milissegundos

        timeouts.push(
          setTimeout(function () {
            // Mostrar a imagem
            falas[1].style.position = "absolute";
            falas[1].style.top = "0%";
            falas[1].style.left = "0%";
            falas[1].style.display = "block";
          }, 4000)
        ); // Tempo de início em milissegundos

        timeouts.push(
          setTimeout(function () {
            // Esconder a imagem após a duração desejada
            falas[1].style.display = "none";
            clique = true;
          }, 8400)
        ); // Fim em milissegundos
      }


      //INDICE 3---------------------------------------------------------------------------------
      if (indiceAtual == 3) {
        timeouts.push(
          setTimeout(function () {
            // Mostrar a imagem
            falas[2].style.position = "absolute";
            falas[2].style.top = "0%";
            falas[2].style.left = "0%";
            falas[2].style.display = "block";
          }, 700)
        ); // Tempo de início em milissegundos

        timeouts.push(
          setTimeout(function () {
            // Esconder a imagem após a duração desejada
            falas[2].style.display = "none";
          }, 3200)
        ); // Fim em milissegundos

        timeouts.push(
          setTimeout(function () {
            // Mostrar a imagem
            falas[3].style.position = "absolute";
            falas[3].style.top = "0%";
            falas[3].style.left = "0%";
            falas[3].style.display = "block";
          }, 4000)
        ); // Tempo de início em milissegundos

        timeouts.push(
          setTimeout(function () {
            // Esconder a imagem após a duração desejada
            falas[3].style.display = "none";
            clique = true;
          }, 6000)
        ); // Fim em milissegundos
      }


      //INDICE 4---------------------------------------------------------------------------------
      if (indiceAtual == 4) {
        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[4].style.position = "absolute";
          falas[4].style.top = "0%";
          falas[4].style.left = "0%";
          falas[4].style.display = "block";
        }, 300));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[4].style.display = "none";
        }, 3500));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[5].style.position = "absolute";
          falas[5].style.top = "0%";
          falas[5].style.left = "0%";
          falas[5].style.display = "block";
        }, 4000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[5].style.display = "none";
        }, 5000));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[6].style.position = "absolute";
          falas[6].style.top = "0%";
          falas[6].style.left = "0%";
          falas[6].style.display = "block";
        }, 5200));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[6].style.display = "none";
        }, 7700));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[7].style.position = "absolute";
          falas[7].style.top = "0%";
          falas[7].style.left = "0%";
          falas[7].style.display = "block";
        }, 7900));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[7].style.display = "none";
        }, 12900));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[8].style.position = "absolute";
          falas[8].style.top = "0%";
          falas[8].style.left = "0%";
          falas[8].style.display = "block";
        }, 13000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[8].style.display = "none";
        }, 14900));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[9].style.position = "absolute";
          falas[9].style.top = "0%";
          falas[9].style.left = "0%";
          falas[9].style.display = "block";
        }, 15500));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[9].style.display = "none";
          clique = true;
        }, 17500));
      }


      //INDICE 5---------------------------------------------------------------------------------
      if (indiceAtual == 5) {
        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[10].style.position = "absolute";
          falas[10].style.top = "0%";
          falas[10].style.left = "0%";
          falas[10].style.display = "block";
        }, 1000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[10].style.display = "none";
        }, 3000));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[11].style.position = "absolute";
          falas[11].style.top = "0%";
          falas[11].style.left = "0%";
          falas[11].style.display = "block";
        }, 3500));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[11].style.display = "none";
          clique = true;
        }, 11000));
      }


      //INDICE 6---------------------------------------------------------------------------------
      if (indiceAtual == 6) {
        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[12].style.position = "absolute";
          falas[12].style.top = "0%";
          falas[12].style.left = "0%";
          falas[12].style.display = "block";
        }, 1000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[12].style.display = "none";
        }, 8500));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[13].style.position = "absolute";
          falas[13].style.top = "0%";
          falas[13].style.left = "0%";
          falas[13].style.display = "block";
        }, 11000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[13].style.display = "none";
        }, 18500));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[14].style.position = "absolute";
          falas[14].style.top = "0%";
          falas[14].style.left = "0%";
          falas[14].style.display = "block";
        }, 22000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[14].style.display = "none";
        }, 25000));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[15].style.position = "absolute";
          falas[15].style.top = "0%";
          falas[15].style.left = "0%";
          falas[15].style.display = "block";
        }, 25000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[15].style.display = "none";
          clique = true;
        }, 26500));

      }


      //INDICE 7---------------------------------------------------------------------------------
      if (indiceAtual == 7) {

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[16].style.position = "absolute";
          falas[16].style.top = "0%";
          falas[16].style.left = "0%";
          falas[16].style.display = "block";
        }, 2500));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[16].style.display = "none";
        }, 8000));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[17].style.position = "absolute";
          falas[17].style.top = "0%";
          falas[17].style.left = "0%";
          falas[17].style.display = "block";
        }, 11000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[17].style.display = "none";
          clique = true;
        }, 16500));
      }


      //INDICE 8---------------------------------------------------------------------------------
      if (indiceAtual == 8) {
        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[18].style.position = "absolute";
          falas[18].style.top = "0%";
          falas[18].style.left = "0%";
          falas[18].style.display = "block";
        }, 1000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[18].style.display = "none";
          clique = true;
        }, 2500));
      }


      //INDICE 10---------------------------------------------------------------------------------
      if (indiceAtual == 10) {
        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[19].style.position = "absolute";
          falas[19].style.top = "0%";
          falas[19].style.left = "0%";
          falas[19].style.display = "block";
        }, 1000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[19].style.display = "none";
          clique = true;
        }, 10000));
      }


      //INDICE 11---------------------------------------------------------------------------------
      if (indiceAtual == 11) {
        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[20].style.position = "absolute";
          falas[20].style.top = "0%";
          falas[20].style.left = "0%";
          falas[20].style.display = "block";
        }, 3000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[20].style.display = "none";
        }, 7000));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[21].style.position = "absolute";
          falas[21].style.top = "0%";
          falas[21].style.left = "0%";
          falas[21].style.display = "block";
        }, 8000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[21].style.display = "none";
        }, 10500));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[22].style.position = "absolute";
          falas[22].style.top = "0%";
          falas[22].style.left = "0%";
          falas[22].style.display = "block";
        }, 11000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[22].style.display = "none";
        }, 13000));


        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[23].style.position = "absolute";
          falas[23].style.top = "0%";
          falas[23].style.left = "0%";
          falas[23].style.display = "block";
        }, 13500));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[23].style.display = "none";
          clique = true;
        }, 14500));
      }


      //INDICE 12---------------------------------------------------------------------------------
      if (indiceAtual == 12) {
        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[24].style.position = "absolute";
          falas[24].style.top = "0%";
          falas[24].style.left = "0%";
          falas[24].style.display = "block";
        }, 1500));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[24].style.display = "none";
          clique = true;
        }, 6000));
      }


      //INDICE 14---------------------------------------------------------------------------------
      if (indiceAtual == 14) {
        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[25].style.position = "absolute";
          falas[25].style.top = "0%";
          falas[25].style.left = "0%";
          falas[25].style.display = "block";
        }, 1500));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[25].style.display = "none";
          clique = true;
        }, 7000));
      }


      //INDICE 15---------------------------------------------------------------------------------
      if (indiceAtual == 15) {
        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[26].style.position = "absolute";
          falas[26].style.top = "0%";
          falas[26].style.left = "0%";
          falas[26].style.display = "block";
        }, 1500));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[26].style.display = "none";
        }, 14000));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[27].style.position = "absolute";
          falas[27].style.top = "0%";
          falas[27].style.left = "0%";
          falas[27].style.display = "block";
        }, 18000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[27].style.display = "none";
          clique = true;
        }, 22000));
      }


      //INDICE 16---------------------------------------------------------------------------------
      if (indiceAtual == 16) {
        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[28].style.position = "absolute";
          falas[28].style.top = "0%";
          falas[28].style.left = "0%";
          falas[28].style.display = "block";
        }, 2000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[28].style.display = "none";
        }, 5000));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[29].style.position = "absolute";
          falas[29].style.top = "0%";
          falas[29].style.left = "0%";
          falas[29].style.display = "block";
        }, 5500));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[29].style.display = "none";
          clique = true;
        }, 10000));

      }


      //INDICE 17---------------------------------------------------------------------------------
      if (indiceAtual == 17) {
        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[30].style.position = "absolute";
          falas[30].style.top = "0%";
          falas[30].style.left = "0%";
          falas[30].style.display = "block";
        }, 2000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[30].style.display = "none";
        }, 5000));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[31].style.position = "absolute";
          falas[31].style.top = "0%";
          falas[31].style.left = "0%";
          falas[31].style.display = "block";
        }, 5500));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[31].style.display = "none";
        }, 7000));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[32].style.position = "absolute";
          falas[32].style.top = "0%";
          falas[32].style.left = "0%";
          falas[32].style.display = "block";
        }, 9500));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[32].style.display = "none";
        }, 11500));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[33].style.position = "absolute";
          falas[33].style.top = "0%";
          falas[33].style.left = "0%";
          falas[33].style.display = "block";
        }, 12000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[33].style.display = "none";
        }, 14000));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[34].style.position = "absolute";
          falas[34].style.top = "0%";
          falas[34].style.left = "0%";
          falas[34].style.display = "block";
        }, 15000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[34].style.display = "none";
        }, 21500));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[35].style.position = "absolute";
          falas[35].style.top = "0%";
          falas[35].style.left = "0%";
          falas[35].style.display = "block";
        }, 23000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[35].style.display = "none";
          clique = true;
        }, 28000));

      }


      //INDICE 18---------------------------------------------------------------------------------
      if (indiceAtual == 18) {
        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[36].style.position = "absolute";
          falas[36].style.top = "0%";
          falas[36].style.left = "0%";
          falas[36].style.display = "block";
        }, 2000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[36].style.display = "none";
          clique = true;
        }, 6000));

      }

      //INDICE 19---------------------------------------------------------------------------------
      if (indiceAtual == 19) {
        console.log("ENTROU 19");
        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[37].style.position = "absolute";
          falas[37].style.top = "0%";
          falas[37].style.left = "0%";
          falas[37].style.display = "block";
        }, 1000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[37].style.display = "none";
          console.log("ENTROU 19.1");
        }, 4500));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[38].style.position = "absolute";
          falas[38].style.top = "0%";
          falas[38].style.left = "0%";
          falas[38].style.display = "block";
          console.log("ENTROU 19.2");
        }, 5000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[38].style.display = "none";
        }, 6000));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[39].style.position = "absolute";
          falas[39].style.top = "0%";
          falas[39].style.left = "0%";
          falas[39].style.display = "block";
        }, 7000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[39].style.display = "none";
          console.log("ENTROU 19.3");
        }, 10000));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[40].style.position = "absolute";
          falas[40].style.top = "0%";
          falas[40].style.left = "0%";
          falas[40].style.display = "block";
        }, 11000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[40].style.display = "none";
          console.log("ENTROU 19.4");
        }, 13000));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[41].style.position = "absolute";
          falas[41].style.top = "0%";
          falas[41].style.left = "0%";
          falas[41].style.display = "block";
        }, 15500));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[41].style.display = "none";
          console.log("ENTROU 19.5");
        }, 18500));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[42].style.position = "absolute";
          falas[42].style.top = "0%";
          falas[42].style.left = "0%";
          falas[42].style.display = "block";
        }, 19000));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[42].style.display = "none";
          clique = true;
          console.log("ENTROU 19.6");
        }, 21000));

        timeouts.push(setTimeout(function () {
          // Mostrar a imagem
          falas[43].style.position = "absolute";
          falas[43].style.top = "0%";
          falas[43].style.left = "0%";
          falas[43].style.display = "block";
        }, 22500));

        timeouts.push(setTimeout(function () {
          // Esconder a imagem após a duração desejada
          falas[43].style.display = "none";
          console.log("ENTROU 19.7");
        }, 27000));

      }
    }
    falasRep = false;
  });

});
