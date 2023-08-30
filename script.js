document.getElementById("gerar-btn").addEventListener("click", function() // Evento de clique para o botão "Gerar Senha"

{
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
    senha = senha.split('').sort(function(){return 0.5-Math.random()}).join('');
  }

  const senhaGeradaElement = document.getElementById("senha-gerada");
  senhaGeradaElement.textContent = "Sua senha gerada é: " + senha;
});