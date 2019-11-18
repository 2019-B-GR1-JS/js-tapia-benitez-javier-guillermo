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
//console.log('01) Iniciar');
promesaSumarDosNumeros
    .then(
        (ok) => {
            //console.log('Ok', ok);
        }
    )
    .catch(
        (error) => {
            //console.log('Error', error);
        }
    );
//console.log('02) Terminar');

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
            //console.log(contenidoCallbackjs);
            return leerArchivo('./04-funciones.js') // Promesa
        }
    )
    .then(
        (contenidoFuncionesjs) => {
            //console.log(contenidoFuncionesjs);
        }
    )
    .catch(
        (error) => {
            //console.error('Error JS', error)
        }
    );

const nombreArchivo = './05-callbacks.js';
// CUANDO USEN SINCRONA
// TRY CATCH
console.log('INICIA SINCRONO');
try {
    const contenidoArchivo = fs.readFileSync(
        nombreArchivo,
        'utf8');
    //console.log(contenidoArchivo);
    console.log('Se leyo sincronamente')
} catch (error) {
    console.error('Error: ', error);
}
console.log('TERMINA SINCRONO');

// Transformar una promesa a codigo SINCRONO!!!!
// Function o Function Anonymous
// 1) "async" (Permite usar codigo sincrono dentro de la funcion)
// 2) Para transformar PROMESA -> SINCRONO
//    "await"
async function leerArchivoSync() {
    try {
        const contenido = await leerArchivo(nombreArchivo); // Promesa
        console.log(contenido);
        console.log('LEIMOS CON ASYNC AWAIT');
        return 1
    } catch (error) {
        console.error('Error: ', error);
        return 0
    }
}

leerArchivoSync()
    .then(
        (numero) => {
            console.log(numero);
        }
    )
    .catch(
        (numero) => {
            console.log(numero);
        }
    ); // PROMESA