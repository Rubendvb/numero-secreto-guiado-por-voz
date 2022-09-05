function verificaChutePossuiValorValido(chute) {
  const numero = +chute; // O + transforma uma string em numero

  if (chuteForInvalido(numero)) {
    if (chute.toUpperCase() === "GAME OVER") {
      document.body.innerHTML = `
        <h2>Game over!!</h2>
        <h3>Pressione o botão para jogar novamente</h3>
        <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
      `;

      document.body.style.backgroundColor = "#000";
    } else {
      elementChute.innerHTML = "<div>Valor inválido</div>";
    }
  }

  if (numeroMaiorOuMenorQueValorPermitido(numero)) {
    elementChute.innerHTML = `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`;

    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto é ${numeroSecreto}</h3>

      <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
    `;
  } else if (numero > numeroSecreto) {
    elementChute.innerHTML += `
      <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
    `;
  } else {
    elementChute.innerHTML += `
      <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
    `;
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id === "jogar-novamente") {
    window.location.reload();
  }
});
