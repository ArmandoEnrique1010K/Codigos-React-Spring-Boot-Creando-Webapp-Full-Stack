const invoice = {
  id: 10,
  name: "Compras de oficina",
  date: new Date(),
  client: {
    id: 2,
    name: "Jhon",
    lastName: "Doe",
    age: 20,
  },
  items: [
    {
      producto: "keyboard",
      price: 399,
      quantity: 2,
    },
    {
      producto: "mouse",
      price: 200,
      quantity: 1,
    },
    {
      producto: "paper",
      price: 100,
      quantity: 10,
    },
  ],
  total: function () {
    let total = 0;
    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  },
  greeting: function () {
    return `Hola ${this.client.name}`;
  },
};

// OPERADOR OPTIONAL CHAINING

// Las propiedades de un objeto pueden ser opcionales y podrían estar ausentes en ciertas circunstancias, como cuando se obtienen de un servicio remoto.

// Cuando intentas acceder a una propiedad que no está definida en un objeto, JavaScript devolverá undefined sin lanzar un error.

// console.log(invoice.company);

// Si intentas acceder a una propiedad de un objeto que no está definido (es decir, null o undefined), JavaScript lanzará un error y detendrá la ejecución del programa.

// console.log(invoice.company.name);

// El operador Optional Chaining (?.), introducido en ECMAScript 2020, permite acceder a propiedades de un objeto anidado sin tener que verificar explícitamente si cada referencia en la cadena es válida. Si una referencia es null o undefined, la expresión completa se evalúa como undefined en lugar de lanzar un error.
console.log(invoice.company?.name);

// El operador Optional Chaining puede ser usado en cualquier nivel de anidación. Si una referencia en la cadena no existe, se evita un error y se devuelve undefined.
console.log(invoice.client?.address?.street);

// Antes del Optional Chaining, debías usar condicionales para verificar la existencia de cada propiedad en la cadena de objetos.

// En este caso, verifica que se encuentre definida la propiedad company y que su vez tenga una propiedad name (se sobreentiende que se trata de un objeto anidado)
if (invoice.company?.name) {
  console.log("perfecto!!!");
} else {
  console.log("no viene la empresa");
}
