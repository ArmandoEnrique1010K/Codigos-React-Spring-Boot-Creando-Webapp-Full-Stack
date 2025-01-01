// OPERADOR TERNARIO

// El operador ternario es una forma compacta de escribir una estructura condicional. Permite asignar un valor a una variable basado en una condición en una sola línea de código.

// Sintaxis: condición ? valorSiVerdadero : valorSiFalso;

const average = 5.9;

let status2 = "";

status2 = average >= 5.5 ? "Aprobado" : "Rechazado";

// Los operadores if y else se utilizan para ejecutar bloques de código basados en una condición. Es una forma más extensa de realizar la misma tarea que el operador ternario.

// if (average >= 5.5) {
//     status2 = 'Aprovado';
// } else {
//     status2 = 'Rechazado';
// }
console.log(`Resultado: ${status2}`);

// En este ejercicio, se comparan tres números (a, b y c) para determinar cuál es el mayor. Se utiliza el operador ternario para realizar las comparaciones y asignar el valor máximo a la variable max.
let max = 0;

const a = 5;
const b = 8;
const c = 12;

max = a > b ? a : b;
max = max > c ? max : c;

console.log(`El numero mayor es ${max}`);
