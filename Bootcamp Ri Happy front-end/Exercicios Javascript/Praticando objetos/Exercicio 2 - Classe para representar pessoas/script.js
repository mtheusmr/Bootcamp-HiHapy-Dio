/*
1- Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer op valor do seu IMC;
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  
  calcularImc(){
    return this.peso / (this.altura * this.altura);
  }
  classificarImc(){
    const imc = this.calcularImc();
    if (imc < 18.5) {
        return ("o seu IMC é de: " + imc.toFixed(1) + "... Então você está abaixo do peso")
    } else if (imc >= 18.5 && imc <= 25) {
        return ("O seu IMC é de: " + imc.toFixed(1) + "... O seu peso está normal")
    } else if (imc >= 25 && imc <30) {
        return ("O seu IMC é de: " + imc.toFixed(1) + "... Você está acima do peso")
    } else if (imc === 30 && imc < 40 ) {
        return ("O seu IMC é de: " + imc.toFixed(1) + "... Obesidade")
    }
    else if (imc > 40) {
        console.log("Obesidade Grave")
    }
  }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.classificarImc());

const matheus = new Pessoa('Matheus', 82, 1.87)
console.log(matheus.classificarImc());