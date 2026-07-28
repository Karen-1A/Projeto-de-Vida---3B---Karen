// 1. Seleção dos elementos do HTML
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

// 2. Lógica de clique para alternar as abas (seu código original)
for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}

// 3. Defina datas FUTURAS para os seus 4 objetivos
const tempos = [
    new Date("2026-12-31T23:59:59"), // Objetivo 1: Inglês
    new Date("2026-11-30T23:59:59"), // Objetivo 2: Faculdade
    new Date("2026-10-15T23:59:59"), // Objetivo 3: Pintar
    new Date("2026-09-01T23:59:59")  // Objetivo 4: Culinária
];

// 4. Função para converter milissegundos em Dias, Horas, Minutos e Segundos
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal < 0) {
        return "Prazo encerrado!";
    }

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return `${dias} dias ${horas} horas ${minutos} min ${segundos} s`;
}

// 5. Atualiza todos os contadores na tela a cada 1 segundo
function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}

// Executa a função imediatamente e define o intervalo de 1 segundo
atualizaCronometro();
setInterval(atualizaCronometro, 1000);
