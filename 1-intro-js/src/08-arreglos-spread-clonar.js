const products = ['mesa', 'silla', 'notebook', 'teclado'];
const products2 = products.concat(['pantalla lcd', 'sony tv']);

const fruits = ['peras', 'manzanas', 'sandias', 'frutillas'];

// El operador spread (...) permite clonar los elementos de un arreglo
const mercado = [...products2, ...fruits, 'lechuga', 'papas', 'uvas'];

// El método concat de un arreglo concatena los elementos de un arreglo con los elementos de otro arreglo
const mercado2 = products2.concat(fruits).concat('lechuga', 'papas', 'uvas');

console.log(products2)
console.log(mercado2)