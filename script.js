var nomeProduto1 = document.getElementById("nomeProduto1");
var valueNomeProduto1 = document.getElementById("codigo");

nomeProduto1.addEventListener("change", function () {
  valueNomeProduto1.textContent = nomeProduto1.value;
});