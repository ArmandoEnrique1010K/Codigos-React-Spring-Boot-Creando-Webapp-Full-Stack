// VARIABLES Y CONSTANTES

// Declara la variable firstname, atualmente se utiliza let en lugar de var
let firstname = "Pepe";

// Asigna este valor a la variable firstname
firstname = "andres";

// Declara la constante lastname
const lastname = "Doe";

// Error: No se puede asignar un nuevo valor a la constante
// lastname = 'Roe';

// Declara una constante de tipo boolean
const condicion = true;

// Define una condición, se ejecuta si la constante es verdadera (true)
if (condicion) {
  // La constante lastname toma este valor solamente para este alcance
  const lastname = "Ale";
  // Imprime el valor de lastname definido en este alcance
  console.log(lastname);
}

// Imprime un mensaje con saltos de linea y espacios en blanco utilizando comillas inversas (template string).
// Utiliza la sintaxis ${variable} para mostrar la variable
console.log(`Hola mundo!!!! ${firstname} - ${lastname}`);

// Pulsa la tecla F12 para abrir las herramientas de desarrollo de Chrome, observa el resultado en la sección "consoles".
