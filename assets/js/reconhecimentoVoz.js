const elementChute = document.getElementById("chute");
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  let chute = e.results[0][0].transcript;
  // console.log(e.target.lang);

  exibeChuteNaTela(chute);
  verificaChutePossuiValorValido(chute);
}

function exibeChuteNaTela(chute) {
  elementChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
  `;
}

recognition.addEventListener("end", () => recognition.start());
