const valorConta = document.querySelector("#conta");
const btn = document.querySelector("button");
const valorGorjeta = document.querySelector("#gorjeta");
const valorTotal = document.querySelector("#total");
const erro = document.querySelector(".erro");

function handleClick(event) {
  event.preventDefault();
  const opcoes = document.querySelector("#opcoes").value;
  const contaValue = valorConta.value.replace(",", ".");

  const totalGorjeta = +(contaValue * opcoes) / 100;
  const totalValor = +contaValue + totalGorjeta;

  if (contaValue === "") {
    erro.innerText = "Insira um número";
  } else {
    erro.innerText = "";
    valorGorjeta.value = totalGorjeta.toFixed(2);
    valorTotal.value = totalValor.toFixed(2);
  }
}

btn.addEventListener("click", handleClick);
