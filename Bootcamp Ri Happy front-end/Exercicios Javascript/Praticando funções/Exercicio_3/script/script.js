//Função para calcular preço (utilizei o exercicio 5 de variaveis)

function aplicarDesconto(valor, desconto) {
  return valor - valor * (desconto / 100);
}

function aplicarJuros(precoEtiqueta){
    return precoEtiqueta
}

const precoEtiqueta = 159;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
  console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
  console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
  console.log(precoEtiqueta);
} else {
  console.log(precoEtiqueta + precoEtiqueta * 0.1);
}