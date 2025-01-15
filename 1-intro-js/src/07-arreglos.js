// Un arreglo es una estructura de datos que se define usando corchetes []

// A diferencia de los objetos, que organizan datos en pares clave-valor, un
// arreglo contiene una colección ordenada de elementos
const products = ["mesa", "silla", "notebook", "teclado"];

// Para agregar elementos al final de un arreglo, puedes usar el método push
products.push("pantalla lcd", "sony tv");

console.log(products);

// Para iterar a través de los elementos de un arreglo, puedes utilizar:

// 1. El método forEach, recibe como argumento una función anónima que se
// ejecuta una vez por cada elemento en el arreglo
products.forEach((el) => console.log(el));

// 2. La sentencia for...of, es una sintaxis moderna que permite iterar sobre
// objetos iterables como los arreglos
for (const prod of products) {
  console.log(prod);
}

// 3. El for clásico, es una estructura de control de flujo que permite iterar
// sobre una lista de elementos usando un índice. Esto permite acceder tanto
// al índice como al valor del elemento
for (let i = 0; i < products.length; i++) {
  const element = products[i];
  console.log(element);
}

// Cada elemento del arreglo tiene un índice numérico que comienza en 0, y
// este índice se utiliza para acceder a elementos específicos en el arreglo
console.log(products[0]);
