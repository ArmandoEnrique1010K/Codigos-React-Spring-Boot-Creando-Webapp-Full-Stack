const users = ['pepe', 'ana', 'maria', 'juan', 'sebastian', 'carlos', 'josefa'];

// Desestructura las primeras 3 posiciones del arreglo users en variables individuales
// El operador rest (...rest) permite extraer los elementos restantes de un arreglo en un nuevo arreglo
const [pepe, ana, maria, ...rest] = users;

// Si desestructuras el arreglo rest, te permite acceder a los valores del arreglo
console.log(pepe, ana, maria, ...rest);