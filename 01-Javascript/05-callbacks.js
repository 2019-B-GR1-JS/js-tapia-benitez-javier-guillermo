function calculo(numUno,
                 numDos,
                 funcionCalculo) {
    const total = numUno + numDos;
    return funcionCalculo(numUno, numDos, total);
}

const numeroUno = 3;
const numeroDos = 5;
const suma = (numUno, numDos, total) => {
    return total;
};
console.log(suma); // Definicion FUNCTION
console.log(suma( // Ejecucion FUNCTION
    1,
    2,
    3)
);
const resultadoCalculo = calculo(
    numeroUno,
    numeroDos,
    (numUno, numDos, total) => {
        return total / 2;
    }
);
console.log('resultadoCalculo', resultadoCalculo);

function forEachLocal(arreglo, funcion) {
    for (let indiceInicial = 0;
         indiceInicial < arreglo.length;
         indiceInicial++) {
        funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo
        );
    }
}

forEachLocal(
    [1, 2, 3, 4],
    (valorActual, indiceActual, arreglo) => {
        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);
        console.log('arreglo', arreglo);
    }
);

function mapLocal(arreglo, funcion) {
    let nuevoArreglo = [];
    for (let indiceInicial = 0;
         indiceInicial < arreglo.length;
         indiceInicial++) {
        nuevoArreglo.push(
            funcion(
                arreglo[indiceInicial],
                indiceInicial,
                arreglo
            )
        );
    }
    console.log('resultadoMap', nuevoArreglo);
}

mapLocal(
    [1, 2, 3, 4, 5],
    (valorActual, indiceActual, arreglo) => {
        return valorActual + 5;
    }
);

function filterLocal(arreglo, funcion) {
    let nuevoArreglo = [];
    for (let indiceInicial = 0;
         indiceInicial < arreglo.length;
         indiceInicial++) {
        if (funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo)
        ) {
            nuevoArreglo.push(arreglo[indiceInicial]);
        }
    }
    console.log('resultadoFilter', nuevoArreglo);
}

filterLocal(
    [1, 2, 3, 4, 5],
    (valorActual, indiceActual, arreglo) => {
        return valorActual < 4;
    }
);

