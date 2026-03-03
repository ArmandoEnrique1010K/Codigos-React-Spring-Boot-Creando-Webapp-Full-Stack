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

  greeting: function () {
    return `Hola ${this.client.name}`;
  },

  total: function () {
    let total = 0;
    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  },
};

// Asigna un objeto a otra variable
// const invoice2 = invoice;

// Para clonar las propiedades de un objeto usa el operador spread (...)
const invoice2 = { ...invoice };

// Comparación de objetos con el operador ===, 
// Compara 2 valores, pero no realiza la conversión de tipos en caso sea necesario
// Los objetos no son iguales porque apuntan a diferentes direcciones de memoria
const result = invoice === invoice2;

if (result) {
  console.log(result);
} else {
  console.log('no son iguales');
}

invoice2.id = 20;

console.log(invoice.id);
console.log(invoice2.id);