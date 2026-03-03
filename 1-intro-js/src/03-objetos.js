// Declaración de un objeto, 
// Un objeto es una estructura de datos que permite almacenar múltiples valores
const invoice = {
  // Propiedades del objeto (pares clave y valor)
  id: 10,
  name: "Compras de oficina",


  // El constructor Date sirve para obtener la fecha actual en un objeto
  date: new Date(),


  // Objeto dentro de un objeto u objeto anidado
  client: {
    id: 2,
    name: "Jhon",
    lastName: "Doe",
    age: 20,
  },


  // Arreglo de objetos, generalmente cada elemento es un objeto que tiene las mismas propiedades
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


  // Método de un objeto o función dentro de un objeto
  // No se recomienda usar funciones de flecha como métodos de un objeto
  greeting: function () {
    return `Hola ${this.client.name}`;
  },

  // Método para calcular el total de la factura
  total: function () {
    let total = 0;

    // "this" hace referencia al objeto actual, sirve para tomar el valor de una propiedad
    // El método forEach itera o recorre sobre cada elemento del arreglo items
    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });

    return total;
  },
};


// Para modificar un valor de una propiedad del objeto, primero debemos acceder a ella
// invoice.client.name = 'Pepe';
// invoice.total = 5000;


// Las propiedades de un objeto se imprimen en orden alfabético
console.log(invoice);


// Invocación de métodos del objeto
const greeting = invoice.greeting();
console.log(greeting);
console.log("Total: " + invoice.total());
