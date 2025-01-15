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

// Cuando asignas un objeto a otra constante usando el operador de asignación (=),
// ambas constantes apuntan a la misma instancia del objeto en memoria

// Por lo tanto, cualquier cambio hecho a través de una de las constantes se
// reflejará en la otra
// const invoice2 = invoice;

// El operador spread (...) sirve para exparcir las propiedades y valores de un elemento
// iterable como un objeto

// En este caso, se crea una copia superficial (sin compartir la referencia en memoria)
// del objeto invoice

// Así, puedes clonar un objeto y modificar el clon sin afectar al original
const invoice2 = { ...invoice };

// El operador de igualdad (==) compara dos valores y devuelve true si son iguales, o
// false en caso contrario

// El operador de identidad (===) compara dos valores considerando tanto su contenido
// como su tipo de dato
const result = invoice === invoice2;

if (result) {
  console.log(result); // true
} else {
  console.log("no son iguales");
}

// Al modificar una propiedad del objeto clonado, el objeto original permanece sin cambios.
// Esto demuestra que el objeto clonado es independiente
invoice2.id = 20;

console.log(invoice.id); // 10
console.log(invoice2.id); // 20
