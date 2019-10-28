// 06-sync-async.js

const fileSystem = require('fs');
console.log('1) Iniciando');
fileSystem.readFile(
    './05-callbacks.js',
    'utf8',
    (error, datos) => {
        if (error) {
            console.error({
                mensaje: 'Error leyendo archivo',
                error,
            })
        } else {
            console.log('Datos: ', datos);
        }
        fileSystem.readFile(
            './04-funciones.js',
            'utf8',
            (error, datos) => {
                if (error) {
                    console.error({
                        mensaje: 'Error leyendo archivo',
                        error,
                    })
                } else {
                    console.log('Datos: ', datos);
                }
                fileSystem.readFile(
                    './03-operadores.js',
                    'utf8',
                    (error, datos) => {
                        if (error) {
                            console.error({
                                mensaje: 'Error leyendo archivo',
                                error,
                            })
                        } else {
                            console.log('Datos: ', datos);
                        }
                        fileSystem.readFile(
                            './02-objetos.js',
                            'utf8',
                            (error, datos) => {
                                if (error) {
                                    console.error({
                                        mensaje: 'Error leyendo archivo',
                                        error,
                                    })
                                } else {
                                    console.log('Datos: ', datos);
                                }
                                fileSystem.readFile(
                                    './01-variables.js',
                                    'utf8',
                                    (error, datos) => {
                                        if (error) {
                                            console.error({
                                                mensaje: 'Error leyendo archivo',
                                                error,
                                            })
                                        } else {
                                            console.log('Datos: ', datos);
                                        }
                                    }
                                )
                            }
                        )
                    }
                )
            }
        )
    }
);

function callbackLeerArchivo(error, datos) {
    if (error) {
        console.error({
            mensaje: 'Error leyendo archivo',
            error,
        })
    } else {
        console.log('Datos: ', datos)
    }
}

console.log('2) Finalizando');