// ARREGLOS EN JAVASCRIPT

// Un arreglo es una estructura de datos que se define usando corchetes [].

// A diferencia de los objetos, que organizan datos en pares clave-valor, un arreglo contiene una colección ordenada de elementos.

// Cada elemento tiene un índice numérico que comienza en 0, y este índice se utiliza para acceder a elementos específicos en el arreglo.
const products = ["mesa", "silla", "notebook", "teclado"];

// Para agregar elementos al final de un arreglo, puedes usar el método push
products.push("pantalla lcd", "sony tv");

console.log(products);

// Para iterar a través de los elementos de un arreglo, se puede utilizar el método forEach. Este método recibe como argumento una función anónima que se ejecuta una vez por cada elemento en el arreglo.
products.forEach((el) => console.log(el));

// La sentencia for...of es una sintaxis moderna que permite iterar sobre objetos iterables como los arreglos. A diferencia del for clásico, for...of itera directamente sobre los valores del iterable.
for (const prod of products) {
  console.log(prod);
}

// El for clásico es una estructura de control de flujo que permite iterar sobre una lista de elementos usando un índice. Esto permite acceder tanto al índice como al valor del elemento.
for (let i = 0; i < products.length; i++) {
  const element = products[i];
  console.log(element);
}

// Para acceder e imprimir elementos específicos de un arreglo, puedes hacerlo directamente usando el índice del elemento. En este caso el índice 0 corresponde al primer elemento del arreglo.
console.log(products[0]);
