const curtir = document.getElementById("curtir");
const naoCurtir = document.getElementById("naoCurtir");

const mensagem = document.getElementById("mensagem");

const contadorCurtidas = document.getElementById("contadorCurtidas");
const contadorNaoCurtidas = document.getElementById("contadorNaoCurtidas");

let curtidas = 0;
let naoCurtidas = 0;

curtir.addEventListener("click", () => {

    curtidas++;

    contadorCurtidas.innerHTML = curtidas;

    mensagem.innerHTML = "😊 Obrigado por curtir o projeto!";
    mensagem.style.color = "green";

    /* efeito extra */
    curtir.style.transform = "scale(1.2)";

    setTimeout(() => {
        curtir.style.transform = "scale(1)";
    }, 200);

});

naoCurtir.addEventListener("click", () => {

    naoCurtidas++;

    contadorNaoCurtidas.innerHTML = naoCurtidas;

    mensagem.innerHTML = "😢 Que pena! Vamos melhorar!";
    mensagem.style.color = "red";

    /* efeito extra */
    naoCurtir.style.transform = "scale(1.2)";

    setTimeout(() => {
        naoCurtir.style.transform = "scale(1)";
    }, 200);

});
