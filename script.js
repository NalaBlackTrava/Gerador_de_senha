// Elemento que contém a palavra "senhas_" para o efeito de digitação
const senhaText = document.getElementById("senha-text");

// Texto digitado
const textoParaDigitar = "******";

// Velocidade da digitação (em milissegundos por caractere)
const velocidadeDigitar = 230;

// Tempo para exibir a palavra "senhas" após a animação
const tempoParaExibirSenhas = 3000; // 3000 milissegundos = 3 segundos

let caractereAtual = 0;

function digitarCaractere() {
  if (caractereAtual < textoParaDigitar.length) {
    senhaText.textContent += textoParaDigitar.charAt(caractereAtual);
    caractereAtual++;
    setTimeout(digitarCaractere, velocidadeDigitar);
  } else {
    // Após a animação, exiba gradualmente a palavra completa "senhas"
    senhaText.style.opacity = "0"; // Comece com a opacidade zero
    senhaText.style.transition = "opacity 1s"; // Adicione uma transição suave
    setTimeout(function () {
      senhaText.textContent = "senhas";
      senhaText.style.opacity = "1"; // Defina a opacidade de volta a 1 gradualmente
    }, tempoParaExibirSenhas);
  }
}

// Iniciar o efeito de digitação quando a página carregar
window.onload = function () {
  digitarCaractere();
};

document.getElementById("gerar-btn").addEventListener("click", gerarSenha); // Evento de clique para o botão "Gerar Senha"

document.getElementById("password-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o comportamento padrão de recarregar a página
  gerarSenha();
});

function gerarSenha() {
  const comprimento = document.getElementById("comprimento").value;
  const letrasRepetidas = document.getElementById("letras-repetidas").checked;
  const caracteresEspeciais = document.getElementById("caracteres-especiais").checked;

  // Declarei a variável 'caracteres' como 'let' para que possa ser modificada posteriormente.
  let caracteres = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (caracteresEspeciais) {
    caracteres += "!@#$%^&*()_+-=[]{}|;:,.<>?";
  }

  let senha = "";
  for (let i = 0; i < comprimento; i++) {
    senha += caracteres[Math.floor(Math.random() * caracteres.length)];
  }

  if (!letrasRepetidas) { // Embaralha a senha para evitar repetições
    senha = senha.split('').sort(function () { return 0.5 - Math.random() }).join('');
  }

  const senhaGeradaElement = document.getElementById("senha-gerada");
  senhaGeradaElement.textContent = "Sua senha gerada é: " + senha;
}
