// Declaracion de un arreglo
const products = ['mesa', 'silla', 'notebook', 'teclado'];

// El método push en un arreglo agrega elementos al final
products.push('pantalla lcd', 'sony tv');
console.log(products)


// El método forEach en un arreglo itera sobre cada elemento y toma el elemento como parámetro
products.forEach(el => console.log(el));


// Un bucle for...of itera sobre cada elemento, pero no toma el índice
for (const prod of products) {
  console.log(prod)
}


// Un bucle for clasico itera sobre cada elemento y toma el índice
for (let i = 0; i < products.length; i++) {
  const element = products[i];
  console.log(element)
}


// Puedes acceder a un elemento del arreglo mediante su índice
// El indice 0 representa el primer elemento
console.log(products[0])