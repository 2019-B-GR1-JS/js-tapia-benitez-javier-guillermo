// Transpilador
// Tipo de compilador que transforma de un lenguaje a otro.

// TYPESCRIPT
// 1) TIPOS DE DATOS (TIPADOS)
// 2) DECORADORES
// 3) CLASES

// const numero = 0;
const numero: number = 0;
//let nombre: string = "Javier";

// DUCK TYPING
// INFIRIENDO EL TIPO DE DATO
let nombre = "Javier";
// nombre = 1; ERROR

let fecha: Date; // Date -> Clase
                 // Tipo de dato "Date"
fecha = new Date();
let javier: Estudiante; // javier -> Interfaz
                        // Tipo de dato "Estudiante"
javier = {
    nombre: "Javier",
};

interface Estudiante {
    nombre: string;
    edad?: number;
}

function holaMundo(): void {
    console.log('Hola');
}

function mensaje(nombre: string): void {
    console.log('Hola', nombre);
}

function calculadora(
    numUno: number,
    ...numeros: number[]
): number {
    console.log('Hacer calculadora');
    return numUno;
}

function universidad(
    nombre: string,
    edad?: number, // ? -> OPCIONAL
): string {
    return `${nombre} Edad: ${edad}`;
}

// universidad("Javier",23);
universidad("Javier");

interface Facultad {
    nombre: string;
    id: number;
}

interface Departamento {
    nombre: string;
    id: number;
    facultad: Facultad | number;
}

const departamentoSistemas = {
    nombre: "Sistemas",
    id: 1,
    facultad: { // Facultad esta relacionada
        nombre: "Sistemas",
        id: 1,
    }
};

const departamentoSistemasSinRelaciones: Departamento = {
    nombre: "Sistemas",
    id: 1,
    facultad: 1
};

function imprimirDepartamento(
    departamento: Departamento
) {
    // const departamentoId = departamento.facultad as number + 1;
    const departamentoId = <number>departamento.facultad + 1;
    // const departamentoId = departamento.facultad + 1;
}