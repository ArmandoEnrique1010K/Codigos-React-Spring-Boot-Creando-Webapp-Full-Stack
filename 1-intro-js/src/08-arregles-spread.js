

const products = ['mesa', 'silla', 'notebook', 'teclado'];
const products2 = products.concat(['pantalla lcd', 'sony tv']);

const fruits = ['peras', 'manzanas', 'sandias', 'frutillas'];

const mercado = [...products2, ...fruits, 'lechuga', 'papas', 'uvas'];

const mercado2 = products2.concat(fruits).concat('lechuga', 'papas', 'uvas');

console.log(products2)
console.log(mercado2)
