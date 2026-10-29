// COnfiguração do botão dando o ID de FMP
const botao = document.getElementById("FMP");
// Adicionando a mensagem de alerta ao clicar no botão
    botao.addEventListener('click', function() {
      alert('Indo para a Faculdade FMP!');
    });
// Abrindo o site da FMP em uma nova aba
document.getElementById("FMP").addEventListener("click", function() {
    window.open("https://fmpsc.edu.br/", "_blank");
  })