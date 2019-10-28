// 07-promesas.js

const fs = require('fs');

const sumarDosNumeros = (correcto) => {
    return new Promise(
        (resolve, reject) => {
            if (correcto) {
                resolve('YEII');
            } else {
                reject('BUUU');
            }
        }
    );
};

const promesaSumarDosNumeros = sumarDosNumeros(false);
console.log('01) Iniciar');
promesaSumarDosNumeros
    .then(
        (ok) => {
            console.log('Ok', ok);
        }
    )
    .catch(
        (error) => {
            console.log('Error', error);
        }
    );
console.log('02) Terminar');

const leerArchivo = (pathArchivo) => {
    return new Promise(
        (resolve, reject) => {
            // res -> resolve, rej -> reject
            fs.readFile(
                pathArchivo,
                'utf8',
                (error, archivoLeido) => { // Callback
                    if (error) {
                        reject(error);
                    } else {
                        resolve(archivoLeido);
                    }
                }
            );
        }
    );
};

leerArchivo('./05-callbacks.js')
    .then(
        (contenidoCallbackjs) => {
            console.log(contenidoCallbackjs);
            return leerArchivo('./04-funciones.js') // Promesa
        }
    )
    .then(
        (contenidoFuncionesjs) => {
            console.log(contenidoFuncionesjs);
        }
    )
    .catch(

    );