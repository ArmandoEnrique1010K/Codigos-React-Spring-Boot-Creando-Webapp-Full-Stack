// Declaración de una variable
let firstname = "Pepe";
firstname = "andres";

// Declaración de una constante
const lastname = "Doe";
// lastname = 'Roe';

const condicion = true;

// Alcance o scope de una constante declarada dentro de un bloque
// El valor de la constante cambia solamente en un scope
if (condicion) {
  const lastname = "Ale";
  console.log(lastname);
}

// Template string, permite insertar variables dentro de una cadena de texto
console.log(`Hola mundo!!!! ${firstname} - ${lastname}`);
