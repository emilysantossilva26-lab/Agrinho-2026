const curtir = document.getElementById("curtir");
const naoCurtir = document.getElementById("naoCurtir");

const mensagem = document.getElementById("mensagem");

const contadorCurtidas = document.getElementById("contadorCurtidas");
const contadorNaoCurtidas = document.getElementById("contadorNaoCurtidas");

// 1. BUSCA OS VALORES SALVOS NO NAVEGADOR (Se não existirem, começa em 0)
let curtidas = parseInt(localStorage.getItem("curtidas")) || 0;
let naoCurtidas = parseInt(localStorage.getItem("naoCurtidas")) || 0;

// 2. MOSTRA OS VALORES SALVOS NA TELA ASSIM QUE A PÁGINA CARREGA
contadorCurtidas.innerHTML = curtidas;
contadorNaoCurtidas.innerHTML = naoCurtidas;

curtir.addEventListener("click", () => {
    curtidas++;

    contadorCurtidas.innerHTML = curtidas;
    
    // 3. SALVA O NOVO VALOR NO NAVEGADOR
    localStorage.setItem("curtidas", curtidas);

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
    
    // 3. SALVA O NOVO VALOR NO NAVEGADOR
    localStorage.setItem("naoCurtidas", naoCurtidas);

    mensagem.innerHTML = "😢 Que pena! Vamos melhorar!";
    mensagem.style.color = "red";

    /* efeito extra */
    naoCurtir.style.transform = "scale(1.2)";

    setTimeout(() => {
        naoCurtir.style.transform = "scale(1)";
    }, 200);
});
