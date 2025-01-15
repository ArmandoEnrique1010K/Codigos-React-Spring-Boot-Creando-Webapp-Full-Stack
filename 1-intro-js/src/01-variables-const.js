// Actualmente se recomienda usar let en lugar de var para declarar una variable

// Variable
let firstname = "Pepe";
// Se puede reasignar su valor
firstname = "andres";

// Constante
const lastname = "Doe";
// No se puede reasignar su valor
// lastname = 'Roe';

// Constante de tipo booleana
const condicion = true;

// Condicion que es siempre verdadera
if (condicion) {
  // Vuelve a declarar la constante lastname, solamente el valor se aplica en este
  // alcance o scope
  const lastname = "Ale";
  console.log(lastname);
}

// En un alcance global, lastname toma el primer valor
// Template String o plantilla de caracteres, sirve para imprimir un mensaje en la
// consola (Pulsa F12 en el navegador Chrome)
console.log(`Hola mundo!!!! ${firstname} - ${lastname}`);
