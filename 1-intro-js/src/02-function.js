// Definicion de una función de flecha que espera 2 argumentos (poseen valores
// por defecto)
const sayHello = (name = "Pepe", age = 0) =>
  `Hola mundo function! ${name} edad ${age}`;
// Generalmente las funciones devuelven algo utilizando la palabra return

// Si la definición de una función de flecha ocupa 1 linea, se pueden omitir
// las llaves y el termino return
const add = (a = 0, b = 0) => a + b;

// Invocación o llamada de la función sayHello con 2 argumentos y se asigna a
// una variable (toma el valor devuelto por la función)
const result = sayHello("Andres", 10);

console.log(result);

// En este caso, se elimina la variable intermedia y se imprime el resultado
// directamente
console.log(add(10, 5));

// Se recomienda utilizar funciones de flecha en lugar de funciones de tipo
// declaration o anonimas al trabajar con React
