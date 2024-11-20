const precoEtanol = 4.04;
const precoGasolina = 5.92;
const tipoCombustivel = "Etanol";
var KmPorLitro = 10;
var distanciaEmKm = 100;

const litrosNecessarios =  distanciaEmKm / KmPorLitro;

if (tipoCombustivel === "Etanol"){
    const viagemEtanol= litrosNecessarios * precoEtanol;
    console.log("O valor gasto nessa viagem será de: R$ " + viagemEtanol.toFixed(2))
}
else if (tipoCombustivel === "Gasolina") {
    const viagemGasolina= litrosNecessarios * precoGasolina;
    console.log("O valor gasto nessa viagem será de: R$ " + viagemGasolina.toFixed(2))
}