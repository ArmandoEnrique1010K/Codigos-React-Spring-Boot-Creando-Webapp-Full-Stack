// Los objetos son estructuras de datos, similares a los objetos JSON utilizados
// en API REST
// Un objeto tiene multiples pares de propiedad y valor, los valores pueden ser
// modificados
// Sirven como un prototipo para crear otros objetos, clonar o instanciar
const invoice = {
  id: 10,
  name: "Compras de oficina",

  // El constructor Date sirve para obtener la fecha y hora actual
  date: new Date(),

  // Un objeto puede contener otro objeto anidado como una de sus propiedades
  client: {
    id: 2,
    name: "Jhon",
    lastName: "Doe",
    age: 20,
  },

  // Un objeto puede contener un arreglo, el arreglo puede contener una lista
  // de objetos
  items: [
    // Generalmente cada objeto en la lista debe tener las mismas propiedades
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
  // Esto es útil para representar colecciones de datos relacionados

  // Un metodo es una función asociada a un objeto

  // Imprime el nombre del cliente
  greeting: function () {
    // La palabra this hace referencia a este objeto
    return `Hola ${this.client.name}`;
  },

  // Los metodos no se definen con funciones de flechas, en el caso de hacerlo,
  // reemplaza this con el nombre del objeto

  // Obtiene el precio total de la factura
  total: function () {
    let total = 0;

    // Itera sobre los items utilizando un bucle forEach, item representa cada
    // elemento
    this.items.forEach((item) => {
      // Calcula el precio total, multiplicando el precio y la cantidad de cada
      // item y lo asigna al nuevo total
      total = total + item.price * item.quantity;
    });

    return total;
  },
};

// Usa la notación de punto "." para acceder a una propiedad del objeto

// Puedes cambiar el valor de una propiedad asignando un nuevo valor con la
// notación de punto

// Esto es flexible y directo, similar a los métodos set en otros lenguajes
// invoice.client.name = 'Pepe';
// invoice.total = 5000;

// La consola del navegador muestra su estructura completa y las propiedades
// se despliegan en orden alfabético
console.log(invoice);

// Obtiene el valor devuelto por el método greeting del objeto invoice
const greeting = invoice.greeting();
console.log(greeting);

console.log("Total: " + invoice.total());
