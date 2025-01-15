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

// Las propiedades de un objeto pueden ser opcionales y podrían estar ausentes en
// ciertas circunstancias, como cuando se obtienen de un servicio remoto

// Cuando intentas acceder a una propiedad que no está definida en un objeto,
// JavaScript devolverá undefined sin lanzar un error

// Si intentas acceder a una propiedad de un objeto que no está definido (es decir,
// null o undefined), JavaScript lanzará un error y detendrá la ejecución del
// programa

// El operador Optional Chaining (?.), introducido en ECMAScript 2020, permite acceder
// a propiedades de un objeto anidado sin tener que verificar explícitamente si cada
// referencia en la cadena es válida

// Si una referencia es null o undefined, la expresión completa se evalúa como undefined
console.log(invoice.company?.name);

// El operador Optional Chaining puede ser usado en cualquier nivel de anidación
console.log(invoice.client?.address?.street);

if (invoice.company?.name) {
  console.log("perfecto!!!");
} else {
  console.log("no viene la empresa");
}

// Antes del Optional Chaining, se tenia que usar condicionales para verificar la
// existencia de cada propiedad en la cadena de objetos
