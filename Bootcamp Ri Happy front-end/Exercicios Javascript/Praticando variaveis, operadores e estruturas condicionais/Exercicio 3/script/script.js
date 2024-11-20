const nota1 = 10;
const nota2 = 5;
const nota3 = 9;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log ("Sua nota foi " + media.toFixed(0) +(", então você foi reprovado!"));
}
else if (media <= 7) {
    console.log ("Sua nota foi " + media.toFixed(0) +(", então você está de recuperação!"))
}
else if (media > 7) {
    console.log ("Sua nota foi " + media.toFixed(0) +(", parabéns você está APROVADO!!!"))
}