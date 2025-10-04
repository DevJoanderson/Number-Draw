function handleDrawClick() {
    const min = Math.ceil(Number(document.querySelector(".input-min").value));
    const max = Math.floor(Number(document.querySelector(".input-max").value));

    const mensagemErro = document.querySelector("#mensagem-erro");
    const resultado = document.querySelector("#resultado");

    mensagemErro.textContent = "";
    resultado.textContent = "";

    if (isNaN(min) || isNaN(max) || min >= max) {
        mensagemErro.textContent = "⚠️ Valores inválidos!";
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    resultado.textContent = `Número sorteado: ${result}`

    resultado.style.opacity = 1;
    setTimeout(() => {
        resultado.style.opacity = 0;
    }, 3000);
}

