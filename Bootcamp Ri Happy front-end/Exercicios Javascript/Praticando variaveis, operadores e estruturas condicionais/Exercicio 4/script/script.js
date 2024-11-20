const peso = 10;
const altura = 1.87;

const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log ("o seu IMC é de: " + imc.toFixed(1) + "... Então você está abaixo do peso")
} else if (imc >= 18.5 && imc <= 25) {
    console.log ("O seu IMC é de: " + imc.toFixed(1) + "... O seu peso está normal")
} else if (imc >= 25 && imc <30) {
    console.log ("O seu IMC é de: " + imc.toFixed(1) + "... Você está acima do peso")
} else if (imc === 30 && imc < 40 ) {
    console.log("O seu IMC é de: " + imc.toFixed(1) + "... Obesidade")
}
else if (imc > 40) {
    console.log("Obesidade Grave")
}