var precoCombustivel = 5.79;
var KmPorLitro = 10;
var distanciaEmKm = 100;

var valorGasto = distanciaEmKm / KmPorLitro * precoCombustivel;

console.log("O valor do combustive nesta viagem será de: " + valorGasto.toFixed(2))