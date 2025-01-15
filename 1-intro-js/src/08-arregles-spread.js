// Recuerda utilizar una constante para definir un arreglo, puedes optar por
// una variable si lo vas a reasignar su valor (solamente en algunos casos)
const products = ["mesa", "silla", "notebook", "teclado"];

// El método concat también permite unir arreglos en uno nuevo, sin modificar
// los arreglos originales
const products2 = products.concat(["pantalla lcd", "sony tv"]);

const fruits = ["peras", "manzanas", "sandias", "frutillas"];

// El orden de los arreglos al concatenar afecta el orden en el nuevo arreglo

// El operador Spread (...) en arreglos se usa para expandir o concatenar los
// elementos de un arreglo, creando un nuevo arreglo sin modificar los
// originales, lo que promueve la inmutabilidad de los datos.
const mercado = [...products2, ...fruits, "lechuga", "papas", "uvas"];

// Aunque el metodo concat es útil, el operador Spread es más flexible y moderno
const mercado2 = products2.concat(fruits).concat("lechuga", "papas", "uvas");

console.log(products2);
console.log(mercado2);
