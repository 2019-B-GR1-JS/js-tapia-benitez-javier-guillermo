// 04-funciones.js

function imprimirMensaje(mensaje) {
    if (typeof mensaje === 'number' ||
        typeof mensaje === 'string') {
        const impresion = `Mensaje ${mensaje}`;
        console.log(impresion);
        return impresion;
    } else {
        console.error("Error");
    }
    // console.log("Mensaje " + mensaje);
    // return NO HAY;
}

//const respuesta = imprimirMensaje({a: 1});
// const respuesta = imprimirMensaje("Carlos");
// const respuesta = imprimirMensaje(123);
// console.log(respuesta); // void -> undefined

function sumarDosElementos(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

// ... -> Destructurar parametros
function sumarElementos(numeroUno,
                        ...arregloParametrosInfinitos) {
    console.log(arregloParametrosInfinitos); // [2,3,4,5]
    if (arregloParametrosInfinitos) {
        return arregloParametrosInfinitos
            .reduce(
                (valorInicial, valorActual) => {
                    return valorInicial + valorActual;
                }, numeroUno
            )
    } else {
        return numeroUno;
    }
}

const suma = sumarElementos(1, 2, 3, 4, 5);
console.log(suma);

const restar = function restarF(a, b) {
    return a - b;
};
const restar1 = function (a, b) {
    return a - b;
};

function restar2(a, b) {
    return a - b;
}

// fat arrow function => Anonymous function
const restar3 = (a, b) => {
    return a - b;
};
const restar4 = {
    nombre: 'restar',
    restarNumeros: (a, b) => { // Anonymous functions
        return a - b;
    },
    restarNumeros: function (a, b) { // Anonymous functions
        return a - b;
    }
};
const transformarAMayuscula = (letra) => {
    return letra.toUpperCase();
};
const transformarAMayuscula2 = (letra) => letra.toUpperCase();
const transformarAMayuscula3 = letra => letra.toUpperCase(); // Solo cuando hay un parametro se pueden quitar los parentesis
// const filtrarArreglo = arreglo.filter(a => a.id > 4);
const arregloNumerosUno = [1, 2, 3, 4, 5, 6];
const arregloNumerosDos = [7, 8, 9, 10, 11, 12];
const arregloUnido = [
    ...arregloNumerosUno,
    ...arregloNumerosDos
];
const objetoJavier = {
    nombre: 'Javier',
};
const objetoTapia = {
    apellido: 'Tapia'
};
const objetoJavierTapia = {
    ...objetoJavier,
    ...objetoTapia,
    edad: 12,
};
console.log(objetoJavierTapia);
const oJTEnString = JSON.stringify(objetoJavierTapia);
console.log(oJTEnString);
const oJTClonado = JSON.parse(oJTEnString);
console.log(oJTEnString);
oJTEnString.edad = 21;
console.log(oJTClonado);
console.log(objetoJavierTapia);

function cambiarEdad(edad, objeto) {
    objeto.edad = edad;
    return objeto;
}

const clonadoJT = {
    ...objetoJavierTapia
};
console.log(clonadoJT);
clonadoJT.edad = 21;
console.log(objetoJavierTapia);

// Destructurar el arreglo
sumarElementos(...arregloNumerosUno);
sumarDosElementos(...arregloNumerosUno);
// sumarElementos([1,2,3,4,5,6]);
// sumarElementos(1,2,3,4,5,6);
// sumarDosElementos(1,2,3,4,5,6);

// console.log(restarF(4, 2));
console.log(restar(3, 5));