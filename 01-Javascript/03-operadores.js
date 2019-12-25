// 03-operadores.js

const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const i in arreglo) { //Indices
    console.log('I: ', i);
}
for (const j of arreglo) { //Valores
    console.log('i: ', j);
}

const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual) {
            // valorActual = valorActual + 5;
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            // console.log('arreglo', arreglo);
        }
    );
console.log('respuestaForEach', respuestaForEach);
console.log('arreglo', arreglo);

const respuestaMap = arreglo
    .map( // Transformar -> Mutar ARREGLO
        function (valorActual, indiceActual, arreglo) {
            return valorActual + 5;
        } // Devolver un elemento
    ); // DEVULVE UN **NUEVO** ARREGLO TRANSFORMADO
const respuestaMap2 = arreglo.map(r => r + 5);
console.log('respuestaMap', respuestaMap);
console.log('respuestaMap2', respuestaMap2);
console.log('arreglo', arreglo);

const respuestaFilter = arreglo
    .filter( //
        function (valorActual, indiceActual, arreglo) {
            return valorActual > 7;
        } // Devolver -> Expresion -> Truty o Falsy
    ); // NUEVO ARREGLO -> Filtrado
console.log('respuestaFilter', respuestaFilter);

// AND - OR
// OR -> SOME
const respuestaSome = arreglo
    .some( //
        function (valorActual, indiceActual, arreglo) {
            return valorActual > 9 && valorActual < 11;
        } // EXPRESION
    ); // Devuelve -> Booleano
console.log('respuestaSome', respuestaSome);
// AND -> EVERY
const respuestaEvery = arreglo
    .every( //
        function (valorActual, indiceActual, arreglo) {
            return valorActual > 1;
        } // EXPRESION
    ); // Devuelve -> Booleano
console.log('respuestaEvery', respuestaEvery);

const respuestaMapSome = arreglo.map(r => (r / 2) + 7).some(y => y < 10);
console.log('respuestaMapSome', respuestaMapSome);

const respuestaMapFilter = arreglo.map(r => (r / 2) + 7).filter(y => y < 10);
console.log('respuestaMapFilter', respuestaMapFilter);

const respuestaFind = arreglo
    .find(
        (valorActual, indiceActual, arreglo) => {
            return valorActual === 7;
        }
    );
console.log('respuestaFind', respuestaFind);

const respuestaFindIndex = arreglo
    .findIndex(
        (valorActual) => {
            return valorActual === 8;
        }
    );
console.log('respuestaFindIndex', respuestaFindIndex);

const respuestaReduce = arreglo
    .reduce(
        (valorInicial, valorActual, indiceActual, arreglo) => {
            return valorInicial - valorActual;
        }, 100 // VALOR INICIAL
    );
console.log('respuestaReduce', respuestaReduce);