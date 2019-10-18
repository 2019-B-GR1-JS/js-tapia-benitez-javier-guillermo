// 02-objetos.js
// let const
// -> INMUTABLES (NO CAMBIA)
// no puede ser REASIGNADO
const arregloNumber = [1, 2, 3, 4];
//arregloNumber = ["a", "b", "c"];
//arregloNumber = [true, false, true, true];
//arregloNumber = [1, "a", true, false];
//arregloNumber = 1;

// val arregloKotlin:any = [1,true,"a"];
function suma(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return 0;
    }
}

//suma(a:1,b:2); // 3
//suma(a:"a",b:"b"); // "ab"
//suma(); // undefined + undefined

const arreglo = [1, 4, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('arreglo', arreglo);
arreglo.push(11);
console.log('arreglo', arreglo);
arreglo.pop();
console.log('arreglo', arreglo);
arreglo.splice(1, 0, 1.1);
console.log('arreglo', arreglo);
arreglo.unshift(0);
console.log('arreglo', arreglo);
const respuestaIndice = arreglo.indexOf(4);
console.log(respuestaIndice);
arreglo.splice(respuestaIndice, 1);
console.log('arreglo', arreglo);