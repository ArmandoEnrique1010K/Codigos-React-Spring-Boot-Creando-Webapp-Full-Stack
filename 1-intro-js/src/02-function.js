// FUNCIONES

// Una función se define utilizando la palabra clave function, seguida del nombre de la función, paréntesis y llaves. Dentro de las llaves (el cuerpo de la función), se colocan las instrucciones que la función debe ejecutar.

// Para ejecutar una función, simplemente se la llama por su nombre seguido de paréntesis.

// function sayHello() {
//   console.log("Hola mundo funcion!");
// }

// sayHello();

/* */

// Generalmente las funciones pueden devolver un valor, para aquello se utiliza la palabra clave return. El valor devuelto puede ser asignado a una variable para su posterior uso.

// function sayHello() {
//   const greeting = "Hola mundo function!";
//   return greeting;
// }

// const result = sayHello();
// console.log(result);

// console.log(sayHello())

/* */

// Las funciones pueden aceptar argumentos que se pasan al momento de la llamada. Estos argumentos se reciben como parámetros en la función y pueden ser utilizados dentro de ella.

// function sayHello(name) {
//   const greeting = `Hola mundo function! ${name}`;
//   return greeting;
// }

// const result = sayHello("Andres");
// console.log(result);

/* */

// Puedes asignar un valor por defecto o predeterminado al parámetro de una función. Si no se proporciona un argumento al llamar a la función, se utilizará el valor por defecto.

// Si un parametro no tiene un valor por defecto, toma el valor undefined si se llama a una función que espera un argumento

// function sayHello(name = "Pepe") {
//   const greeting = `Hola mundo function! ${name}`;
//   return greeting;
// }

// const result = sayHello();
// console.log(result);

/* */

// Una función anónima es una función sin nombre que se define generalmente en una constante. Una vez definida, no se puede reasignar la función a otra variable.

// const result = sayHello("Andres", 10);
// console.log(result);

/* */

// También conocida como expresión lambda, una función de flecha es una forma más concisa de definir funciones en JavaScript.

// Se define utilizando una función anónima, pero se elimina la palabra clave function y se coloca un operador flecha => entre los paréntesis y las llaves de la función.

const sayHello = (name = "Pepe", age = 0) =>
  `Hola mundo function! ${name} edad ${age}`;

/* */

// Si una función de flecha devuelve directamente un valor sin realizar otro procesamiento, se puede eliminar la definición de la constante contenida en el cuerpo de la función.

// Cuando una función de flecha tiene una única línea de código que retorna un valor, es posible omitir las llaves y la palabra return.
const add = (a = 0, b = 0) => a + b;

// Llamada a la función sayHello con 2 argumentos
const result = sayHello("Andres", 10);

// Imprime el resultado en la consola
console.log(result);
console.log(add(10, 5));
