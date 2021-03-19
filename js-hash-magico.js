//SOLUCAO 1
const calcularHash = (entradas) => {
    let resultado = 0
    for (let [index, linha] of entradas.entries()) {
        resultado += linha.match(/[A-Z]/g)
                        .reduce((valorAcc, curr, strIndex) => valorAcc + (parseInt(curr, 36) - 10) + index + strIndex, 0)
    }
    return resultado;
}

(function hashMagico(numEntrada) {
    while (numEntrada--) {
        entradas = []
        numCasos = parseInt(gets());
        while (numCasos--) entradas = [...entradas, gets()];
        console.log(calcularHash(entradas));
    }
})(gets());



//SOLUCAO 2 
(function hashMagico(numEntrada) {
    while (numEntrada--) {
        entradas = [];
        resultado = 0;
        numCasos = parseInt(gets());
        while (numCasos--) entradas = [...entradas, gets()];
        for (let [index, linha] of entradas.entries()) {
            resultado += linha.match(/[A-Z]/g).reduce((valorAcc, curr, strIndex) => valorAcc + (parseInt(curr, 36) - 10) + index + strIndex, 0);
        }
        console.log(resultado);
    }
})(gets());