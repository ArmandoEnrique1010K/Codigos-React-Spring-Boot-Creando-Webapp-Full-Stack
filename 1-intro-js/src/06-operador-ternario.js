const average = 5.9;
let status2 = '';

// El operador ternario contiene una expresion condicional que retorna un valor
// Una expresión es un valor obtenido como resultado de una operación
status2 = (average >= 5.5) ? 'Aprobado' : 'Rechazado';


// Un bloque condicional es un bloque de codigo que ejecuta una sentencia en un alcance
// if (average >= 5.5) {
//     status2 = 'Aprovado';
// } else {
//     status2 = 'Rechazado';
// }

console.log(`Resultado: ${status2}`);


let max = 0;

const a = 5;
const b = 8;
const c = 12;

max = a > b ? a : b;
max = max > c ? max : c;

console.log(`El numero mayor es ${max}`)