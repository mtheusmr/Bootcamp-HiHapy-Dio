var etiqueta = 100;
var formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log (etiqueta - (etiqueta * 0.1));
} else if (formaDePagamento === 2){
    console.log (etiqueta - (etiqueta * 0.15));
} else if (formaDePagamento === 3){
    console.log (etiqueta);
} else {
    console.log (etiqueta + (etiqueta * .1))
}