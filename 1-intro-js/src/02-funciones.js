// Definición de una función de flecha con parámetros y valores por defecto
// Si una función devuelve un valor como resultado, se le puede simplificar a una sola linea de código
const sayHello = (name = 'Pepe', age = 0) => `Hola mundo function! ${name} edad ${age}`;
const add = (a = 0, b = 0) => a + b;

// Invocación o llamada de una función con argumentos
const result = sayHello('Andres', 10);

console.log(result);
console.log(add(10, 5));