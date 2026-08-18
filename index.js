const botoesObjetivos = document.querySelectorAll(".botao-objetivo");
const abasTextos = document.querySelectorAll(".aba-conteudo");

const datasConclusao = [
    "31/12/2026", // Melhorar o inglês
    "20/02/2027", // Passar na faculdade
    "31/12/2026", // Pintar mais
    "31/12/2026"  // Melhorar minhas habilidades culinárias
];

botoesObjetivos.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // Remove a classe ativo de absolutamente tudo
        botoesObjetivos.forEach(b => b.classList.remove("ativo"));
        abasTextos.forEach(aba => aba.classList.remove("ativo"));

        // Aplica a classe ativa estritamente no elemento clicado
        botao.classList.add("ativo");
        abasTextos[indice].classList.add("ativo");

        // Cospe a data correta no container
        const contadorAtual = abasTextos[indice].querySelector(".contador");
        if (contadorAtual) {
            contadorAtual.innerHTML = `<p style="text-align:center; font-size:24px; color:var(--verde); margin-top:15px;">Data de conclusão: ${datasConclusao[indice]}</p>`;
        }
    });
});
